"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import {
  FaArrowLeft,
  FaUpload,
  FaTrash,
  FaDownload,
  FaFilePdf,
  FaImage,
  FaSpinner,
  FaCheckCircle,
  FaExclamationCircle,
  FaGripVertical,
  FaPlus,
  FaTimes,
  FaEye,
  FaLock,
} from "react-icons/fa";
import { API_BASE_URL } from "@/app/config";
import "@/styles/tools/PDFTools.css";

interface DocumentUpload {
  id: number;
  fileName: string;
  filePath: string;
  cdnUrl: string;
  presignedUrl: string;
  fileType: string;
  fileSizeBytes: number;
  createdAt: string;
}

interface ConversionResult {
  id: number;
  operationType: string;
  outputFileName: string;
  outputCdnUrl: string;
  outputPresignedUrl: string;
  fileSizeBytes: number;
  status: string;
  createdAt: string;
}

interface OperationConfig {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  acceptedTypes: string;
  multipleFiles: boolean;
  requiresOptions: boolean;
}

const PDFToolsWorkspace: React.FC<{ operation: string }> = ({ operation }) => {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  // State
  const [uploadedFiles, setUploadedFiles] = useState<DocumentUpload[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<ConversionResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  // Add login modal state and handlers
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  // Login handler
  const handleLogin = async (formData: { email: string; password: string }) => {
    setIsLoggingIn(true);
    setLoginError(null);
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/login`, formData);
      const { token } = response.data;
      localStorage.setItem('token', token);

      // Verify token
      await axios.get(`${API_BASE_URL}/auth/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setIsAuthenticated(true);
      setShowLoginModal(false);
      showMessage('success', 'Logged in successfully!');
    } catch (error: any) {
      setLoginError(error.response?.data?.message || 'Login failed. Please check your credentials.');
    } finally {
      setIsLoggingIn(false);
    }
  };

  // Operation-specific options
  const [compressionLevel, setCompressionLevel] = useState<string>("medium");
  const [rotationDegrees, setRotationDegrees] = useState<string>("right");
  const [watermarkText, setWatermarkText] = useState<string>("CONFIDENTIAL");
  const [password, setPassword] = useState<string>("");
  const [splitType, setSplitType] = useState<string>("all");
  const [pageRanges, setPageRanges] = useState<string>("");

  const operationConfigs: Record<string, OperationConfig> = {
    "merge-pdf": {
      title: "Merge PDFs",
      description: "Combine multiple PDF files into one document",
      icon: <FaFilePdf size={24} />,
      color: "#3b82f6",
      acceptedTypes: "application/pdf",
      multipleFiles: true,
      requiresOptions: false,
    },
    "split-pdf": {
      title: "Split PDF",
      description: "Extract pages or split PDF into multiple files",
      icon: <FaFilePdf size={24} />,
      color: "#8b5cf6",
      acceptedTypes: "application/pdf",
      multipleFiles: false,
      requiresOptions: true,
    },
    "compress-pdf": {
      title: "Compress PDF",
      description: "Reduce PDF file size while maintaining quality",
      icon: <FaFilePdf size={24} />,
      color: "#10b981",
      acceptedTypes: "application/pdf",
      multipleFiles: false,
      requiresOptions: true,
    },
    "rotate-pdf": {
      title: "Rotate PDF",
      description: "Rotate pages in your PDF document",
      icon: <FaFilePdf size={24} />,
      color: "#f59e0b",
      acceptedTypes: "application/pdf",
      multipleFiles: false,
      requiresOptions: true,
    },
    "images-to-pdf": {
      title: "Images to PDF",
      description: "Convert multiple images into a single PDF",
      icon: <FaImage size={24} />,
      color: "#ec4899",
      acceptedTypes: "image/*",
      multipleFiles: true,
      requiresOptions: false,
    },
    "pdf-to-images": {
      title: "PDF to Images",
      description: "Extract all pages as high-quality images",
      icon: <FaFilePdf size={24} />,
      color: "#06b6d4",
      acceptedTypes: "application/pdf",
      multipleFiles: false,
      requiresOptions: false,
    },
    "add-watermark": {
      title: "Add Watermark",
      description: "Add text watermark to protect your PDFs",
      icon: <FaFilePdf size={24} />,
      color: "#6366f1",
      acceptedTypes: "application/pdf",
      multipleFiles: false,
      requiresOptions: true,
    },
    "lock-pdf": {
      title: "Lock PDF",
      description: "Password-protect your PDF documents",
      icon: <FaLock size={24} />,
      color: "#ef4444",
      acceptedTypes: "application/pdf",
      multipleFiles: false,
      requiresOptions: true,
    },
    "unlock-pdf": {
      title: "Unlock PDF",
      description: "Remove password protection from PDFs",
      icon: <FaLock size={24} />,
      color: "#14b8a6",
      acceptedTypes: "application/pdf",
      multipleFiles: false,
      requiresOptions: true,
    },
    "rearrange-pdf": {
      title: "Rearrange Pages",
      description: "Reorder pages and insert images into PDFs",
      icon: <FaFilePdf size={24} />,
      color: "#a855f7",
      acceptedTypes: "application/pdf,image/*",
      multipleFiles: true,
      requiresOptions: true,
    },
  };

  const config = operationConfigs[operation] || operationConfigs["merge-pdf"];

  // Check authentication on mount - FIXED TO MATCH AIVoiceGenerator
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get(`${API_BASE_URL}/auth/me`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          setIsAuthenticated(true);
          setIsCheckingAuth(false);
        })
        .catch((error) => {
          console.error("Error fetching user profile:", error);
          if (error.response?.status === 401) {
            localStorage.removeItem("token");
            setIsAuthenticated(false);
            setIsCheckingAuth(false);
          }
        });
    } else {
      setIsAuthenticated(false);
      setIsCheckingAuth(false);
    }
  }, []);

  // Auto-dismiss messages
  const showMessage = useCallback((type: 'success' | 'error', message: string) => {
    if (type === 'success') {
      setSuccess(message);
      setTimeout(() => setSuccess(null), 3000);
    } else {
      setError(message);
      setTimeout(() => setError(null), 5000);
    }
  }, []);

  // File upload handler
  const handleFileUpload = async (files: FileList | null) => {
    if (!files || files.length === 0) return;

    if (!isAuthenticated) {
      setShowLoginModal(true);
      return;
    }

    setIsUploading(true);
    setError(null);

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setShowLoginModal(true);
        return;
      }

      const formData = new FormData();
      Array.from(files).forEach((file) => {
        formData.append("files", file);
      });

      const response = await axios.post(
        `${API_BASE_URL}/api/documents/uploads`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setUploadedFiles((prev) => [...prev, ...response.data.uploads]);
      showMessage('success', `${files.length} file(s) uploaded successfully!`);
    } catch (err: any) {
      console.error("Upload error:", err);
      if (err.response?.status === 401) {
        localStorage.removeItem("token");
        setIsAuthenticated(false);
        setShowLoginModal(true);
      } else {
        showMessage('error', err.response?.data?.error || err.response?.data?.message || "Failed to upload files");
      }
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  // Delete file
  const handleDeleteFile = async (uploadId: number) => {
    if (!isAuthenticated) {
      setShowLoginModal(true);
      return;
    }

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setShowLoginModal(true);
        return;
      }

      await axios.delete(`${API_BASE_URL}/api/documents/uploads/${uploadId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setUploadedFiles((prev) => prev.filter((f) => f.id !== uploadId));
      showMessage('success', "File removed successfully");
    } catch (err: any) {
      if (err.response?.status === 401) {
        localStorage.removeItem("token");
        setIsAuthenticated(false);
        setShowLoginModal(true);
      } else {
        showMessage('error', "Failed to delete file");
      }
    }
  };

  // Drag and drop handlers
  const handleDragStart = (index: number) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    setDragOverIndex(index);
  };

  const handleDrop = (index: number) => {
    if (draggedIndex === null) return;

    const newFiles = [...uploadedFiles];
    const [draggedFile] = newFiles.splice(draggedIndex, 1);
    newFiles.splice(index, 0, draggedFile);

    setUploadedFiles(newFiles);
    setDraggedIndex(null);
    setDragOverIndex(null);
  };

  // Process operation
  const handleProcess = async () => {
    if (!isAuthenticated) {
      setShowLoginModal(true);
      return;
    }

    if (uploadedFiles.length === 0) {
      showMessage('error', "Please upload files first");
      return;
    }

    // Validation
    if (operation === "merge-pdf" && uploadedFiles.length < 2) {
      showMessage('error', "Please upload at least 2 PDF files to merge");
      return;
    }

    if ((operation === "lock-pdf" || operation === "unlock-pdf") && !password) {
      showMessage('error', "Please enter a password");
      return;
    }

    setIsProcessing(true);
    setError(null);
    setResult(null);

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setShowLoginModal(true);
        return;
      }

      const uploadIds = uploadedFiles.map((f) => f.id);
      let response;

switch (operation) {
  case "merge-pdf": {
    const params = new URLSearchParams();
    uploadIds.forEach(id => params.append('uploadIds', id.toString()));
    response = await axios.post(
      `${API_BASE_URL}/api/documents/merge-pdf?${params.toString()}`,
      null,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    break;
  }

  case "split-pdf":
    response = await axios.post(
      `${API_BASE_URL}/api/documents/split-pdf`,
      null,
      {
        params: {
          uploadId: uploadIds[0],
          splitType,
          ...(pageRanges && { pages: pageRanges }),
        },
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    break;

  case "compress-pdf":
    response = await axios.post(
      `${API_BASE_URL}/api/documents/compress-pdf`,
      null,
      {
        params: {
          uploadId: uploadIds[0],
          compressionLevel,
        },
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    break;

  case "rotate-pdf":
    response = await axios.post(
      `${API_BASE_URL}/api/documents/rotate-pdf`,
      null,
      {
        params: {
          uploadId: uploadIds[0],
          direction: rotationDegrees,
        },
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    break;

  case "images-to-pdf": {
    const params = new URLSearchParams();
    uploadIds.forEach(id => params.append('uploadIds', id.toString()));
    response = await axios.post(
      `${API_BASE_URL}/api/documents/images-to-pdf?${params.toString()}`,
      null,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    break;
  }

  case "pdf-to-images":
    response = await axios.post(
      `${API_BASE_URL}/api/documents/pdf-to-images`,
      null,
      {
        params: { uploadId: uploadIds[0] },
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    break;

  case "add-watermark":
    response = await axios.post(
      `${API_BASE_URL}/api/documents/add-watermark`,
      null,
      {
        params: {
          uploadId: uploadIds[0],
          watermarkText,
        },
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    break;

  case "lock-pdf":
    response = await axios.post(
      `${API_BASE_URL}/api/documents/lock-pdf`,
      null,
      {
        params: {
          uploadId: uploadIds[0],
          password,
        },
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    break;

  case "unlock-pdf":
    response = await axios.post(
      `${API_BASE_URL}/api/documents/unlock-pdf`,
      null,
      {
        params: {
          uploadId: uploadIds[0],
          password,
        },
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    break;

  default:
    throw new Error("Unsupported operation");
}
      setResult(response.data.data || response.data);
      showMessage('success', "Processing complete!");
    } catch (err: any) {
      console.error("Processing error:", err);
      if (err.response?.status === 401) {
        localStorage.removeItem("token");
        setIsAuthenticated(false);
        setShowLoginModal(true);
      } else {
        showMessage('error', err.response?.data?.error || err.response?.data?.message || "Processing failed");
      }
    } finally {
      setIsProcessing(false);
    }
  };

  // Download result
  const handleDownload = async () => {
    if (!result) return;

    try {
      const link = document.createElement("a");
      link.href = result.outputPresignedUrl || result.outputCdnUrl;
      link.download = result.outputFileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      showMessage('success', "Download started!");
    } catch (err) {
      showMessage('error', "Download failed. Please try again.");
    }
  };

  // Reset workflow
  const handleReset = () => {
    setUploadedFiles([]);
    setResult(null);
    setError(null);
    setSuccess(null);
    setPassword("");
    setWatermarkText("CONFIDENTIAL");
    setPageRanges("");
  };

  // Format file size
  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + " " + sizes[i];
  };

  // Show loading screen while checking auth
  if (isCheckingAuth) {
    return (
      <div className="pdf-workspace-container">
        <div className="loading-overlay">
          <div className="loading-spinner">
            <FaSpinner className="spinner" size={48} />
            <p>Loading...</p>
          </div>
        </div>
      </div>
    );
  }

  // Don't redirect if not authenticated - just show the page
  // Authentication will be handled by login modal

  return (
    <div className="pdf-workspace-container">
      {/* Header */}
      <div className="workspace-header">
        <button className="back-btn" onClick={() => router.push("/tools/pdf-tools")}>
          <FaArrowLeft size={18} />
          <span>Back to PDF Tools</span>
        </button>

        <div className="header-content">
          <div className="header-icon" style={{ color: config.color }}>
            {config.icon}
          </div>
          <div>
            <h1>{config.title}</h1>
            <p>{config.description}</p>
          </div>
        </div>
      </div>

      <div className="workspace-content">
        {/* Upload Section */}
        {!result && (
          <div className="upload-section">
            <div className="upload-zone">
              <input
                ref={fileInputRef}
                type="file"
                accept={config.acceptedTypes}
                multiple={config.multipleFiles}
                onChange={(e) => handleFileUpload(e.target.files)}
                style={{ display: "none" }}
              />

              <div
                className="dropzone"
                onClick={() => fileInputRef.current?.click()}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                  e.preventDefault();
                  handleFileUpload(e.dataTransfer.files);
                }}
              >
                <FaUpload size={48} />
                <h3>Click or drag files here</h3>
                <p>
                  {config.multipleFiles
                    ? "Upload multiple files"
                    : "Upload a single file"}
                </p>
                <span className="file-types">
                  Accepted: {config.acceptedTypes.replace("application/", "").replace("image/*", "Images")}
                </span>
              </div>
            </div>

            {/* Uploaded Files List */}
            {uploadedFiles.length > 0 && (
              <div className="files-list">
                <div className="list-header">
                  <h3>Uploaded Files ({uploadedFiles.length})</h3>
                  {config.multipleFiles && (
                    <small>Drag to reorder</small>
                  )}
                </div>

                {uploadedFiles.map((file, index) => (
                  <div
                    key={file.id}
                    className={`file-item ${dragOverIndex === index ? "drag-over" : ""}`}
                    draggable
                    onDragStart={() => handleDragStart(index)}
                    onDragOver={(e) => handleDragOver(e, index)}
                    onDrop={() => handleDrop(index)}
                  >
                    <div className="file-drag-handle">
                      <FaGripVertical />
                    </div>

                    <div className="file-icon">
                      {file.fileType === "PDF" ? <FaFilePdf /> : <FaImage />}
                    </div>

                    <div className="file-info">
                      <span className="file-name">{file.fileName}</span>
                      <span className="file-size">{formatFileSize(file.fileSizeBytes)}</span>
                    </div>

                    <button
                      className="file-preview-btn"
                      onClick={() => window.open(file.presignedUrl, "_blank")}
                      title="Preview"
                    >
                      <FaEye />
                    </button>

                    <button
                      className="file-delete-btn"
                      onClick={() => handleDeleteFile(file.id)}
                      title="Remove"
                    >
                      <FaTimes />
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Operation Options */}
            {config.requiresOptions && uploadedFiles.length > 0 && (
              <div className="options-panel">
                <h3>Options</h3>

                {operation === "compress-pdf" && (
                  <div className="option-group">
                    <label>Compression Level</label>
                    <div className="radio-group">
                      {["low", "medium", "high"].map((level) => (
                        <label key={level} className="radio-label">
                          <input
                            type="radio"
                            value={level}
                            checked={compressionLevel === level}
                            onChange={(e) => setCompressionLevel(e.target.value)}
                          />
                          <span>{level.charAt(0).toUpperCase() + level.slice(1)}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {operation === "rotate-pdf" && (
                  <div className="option-group">
                    <label>Rotation Direction</label>
                    <div className="radio-group">
                      {[
                        { value: "right", label: "90° Right" },
                        { value: "left", label: "90° Left" },
                        { value: "top", label: "180°" },
                      ].map((opt) => (
                        <label key={opt.value} className="radio-label">
                          <input
                            type="radio"
                            value={opt.value}
                            checked={rotationDegrees === opt.value}
                            onChange={(e) => setRotationDegrees(e.target.value)}
                          />
                          <span>{opt.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {operation === "split-pdf" && (
                  <>
                    <div className="option-group">
                      <label>Split Type</label>
                      <select
                        value={splitType}
                        onChange={(e) => setSplitType(e.target.value)}
                      >
                        <option value="all">All pages (separate files)</option>
                        <option value="range">Custom page ranges</option>
                      </select>
                    </div>

                    {splitType === "range" && (
                      <div className="option-group">
                        <label>Page Ranges (e.g., 1-5,7,9-12)</label>
                        <input
                          type="text"
                          placeholder="1-5,7,9-12"
                          value={pageRanges}
                          onChange={(e) => setPageRanges(e.target.value)}
                        />
                      </div>
                    )}
                  </>
                )}

                {operation === "add-watermark" && (
                  <div className="option-group">
                    <label>Watermark Text</label>
                    <input
                      type="text"
                      placeholder="Enter watermark text"
                      value={watermarkText}
                      onChange={(e) => setWatermarkText(e.target.value)}
                    />
                  </div>
                )}

                {(operation === "lock-pdf" || operation === "unlock-pdf") && (
                  <div className="option-group">
                    <label>
                      {operation === "lock-pdf" ? "New Password" : "Current Password"}
                    </label>
                    <input
                      type="password"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                )}
              </div>
            )}

{uploadedFiles.length > 0 && (
  <button
    className="process-btn"
    onClick={handleProcess}
    disabled={isProcessing || !isAuthenticated}
    style={{ background: config.color }}
  >
    {isProcessing ? (
      <>
        <FaSpinner className="spinner" />
        <span>Processing...</span>
      </>
    ) : (
      <>
        <span>{isAuthenticated ? `Process ${config.title}` : 'Login to Process'}</span>
      </>
    )}
  </button>
)}
          </div>
        )}

        {/* Result Section */}
        {result && (
          <div className="result-section">
            <div className="result-card">
              <FaCheckCircle size={64} color="#10b981" />
              <h2>Success!</h2>
              <p>Your file has been processed successfully</p>

              <div className="result-info">
                <div className="info-item">
                  <span className="label">File Name:</span>
                  <span className="value">{result.outputFileName}</span>
                </div>
                <div className="info-item">
                  <span className="label">File Size:</span>
                  <span className="value">{formatFileSize(result.fileSizeBytes)}</span>
                </div>
              </div>

              <div className="result-actions">
                <button className="download-btn" onClick={handleDownload}>
                  <FaDownload size={20} />
                  <span>Download File</span>
                </button>

                <button className="reset-btn" onClick={handleReset}>
                  <FaPlus size={20} />
                  <span>Process Another</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Toast Messages & Loading Overlay */}
      {error && (
        <div className="toast toast-error">
          <FaExclamationCircle />
          <span>{error}</span>
        </div>
      )}

      {success && (
        <div className="toast toast-success">
          <FaCheckCircle />
          <span>{success}</span>
        </div>
      )}

      {isUploading && (
        <div className="loading-overlay">
          <div className="loading-spinner">
            <FaSpinner className="spinner" size={48} />
            <p>Uploading files...</p>
          </div>
        </div>
      )}

      {/* Login Modal */}
      {showLoginModal && (
        <div className="modal-overlay" style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
        }}>
          <div className="login-modal" style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '2rem',
            maxWidth: '400px',
            width: '90%',
            position: 'relative',
          }}>
            <button
              onClick={() => setShowLoginModal(false)}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'none',
                border: 'none',
                fontSize: '1.5rem',
                cursor: 'pointer',
                color: '#666',
              }}
              aria-label="Close login modal"
            >
              <FaTimes />
            </button>

            <div className="auth-container">
              <div className="auth-header" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                <h1 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>SCENITH</h1>
                <p style={{ color: '#666' }}>Login to Continue</p>
              </div>

              {isLoggingIn && (
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '12px',
                }}>
                  <FaSpinner className="spinner" size={32} />
                  <p style={{ marginTop: '1rem' }}>Logging in...</p>
                </div>
              )}

              {loginError && (
                <div style={{
                  backgroundColor: '#fee',
                  color: '#c00',
                  padding: '0.75rem',
                  borderRadius: '6px',
                  marginBottom: '1rem',
                }}>
                  {loginError}
                </div>
              )}

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  handleLogin({
                    email: formData.get('email') as string,
                    password: formData.get('password') as string,
                  });
                }}
                style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
              >
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    disabled={isLoggingIn}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #ddd',
                      borderRadius: '6px',
                      fontSize: '1rem',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Password</label>
                  <input
                    type="password"
                    name="password"
                    required
                    disabled={isLoggingIn}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #ddd',
                      borderRadius: '6px',
                      fontSize: '1rem',
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoggingIn}
                  style={{
                    padding: '0.75rem',
                    backgroundColor: config.color,
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    opacity: isLoggingIn ? 0.7 : 1,
                  }}
                >
                  {isLoggingIn ? 'Logging in...' : 'Login'}
                </button>
              </form>

              <p style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
                New to SCENITH? <a href="/register" style={{ color: config.color, textDecoration: 'none', fontWeight: '600' }}>Sign up</a>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PDFToolsWorkspace;