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
  // Add these state variables after existing state declarations
  const [splitRanges, setSplitRanges] = useState<Array<{ from: number; to: number }>>([
    { from: 1, to: 1 }
  ]);
  const [pdfPageCount, setPdfPageCount] = useState<number>(0);
  const [compressionPercentage, setCompressionPercentage] = useState<number>(50);
  const [useCustomCompression, setUseCustomCompression] = useState<boolean>(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState<string>('');

  const [selectedPdfPages, setSelectedPdfPages] = useState<Array<{
    uploadId: number;
    fileName: string;
    pageNumber: number;
    totalPages: number;
  }>>([]);
  const [pdfPageCounts, setPdfPageCounts] = useState<Map<number, number>>(new Map());
  const [previewPageIndex, setPreviewPageIndex] = useState<number>(0);
  const [isLoadingPreview, setIsLoadingPreview] = useState(false);
  const [draggedPageIndex, setDraggedPageIndex] = useState<number | null>(null);
  const [dragOverPageIndex, setDragOverPageIndex] = useState<number | null>(null);


// Handlers for page drag and drop
const handlePageDragStart = (index: number) => {
  setDraggedPageIndex(index);
};

const handlePageDragOver = (e: React.DragEvent, index: number) => {
  e.preventDefault();
  setDragOverPageIndex(index);
};

const handlePageDrop = (index: number) => {
  if (draggedPageIndex === null) return;

  const newPages = [...selectedPdfPages];
  const [draggedPage] = newPages.splice(draggedPageIndex, 1);
  newPages.splice(index, 0, draggedPage);

  setSelectedPdfPages(newPages);

  // Update preview to show the dropped page
  if (previewPageIndex === draggedPageIndex) {
    setPreviewPageIndex(index);
  } else if (draggedPageIndex < index && previewPageIndex > draggedPageIndex && previewPageIndex <= index) {
    setPreviewPageIndex(previewPageIndex - 1);
  } else if (draggedPageIndex > index && previewPageIndex >= index && previewPageIndex < draggedPageIndex) {
    setPreviewPageIndex(previewPageIndex + 1);
  }

  setDraggedPageIndex(null);
  setDragOverPageIndex(null);
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

  };

  const config = operationConfigs[operation] || operationConfigs["merge-pdf"];

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

const handleLogin = async (formData: { email: string; password: string }) => {
    setIsLoggingIn(true);
    setLoginError(null);
    setLoginSuccess('');

    try {
      const response = await axios.post(`${API_BASE_URL}/auth/login`, formData, {
        timeout: 10000,
      });

      const { token } = response.data;

      if (!token) {
        throw new Error("No token received from server");
      }

      localStorage.setItem('token', token);

      // Verify token and get user profile
      await axios.get(`${API_BASE_URL}/auth/me`, {
        headers: { Authorization: `Bearer ${token}` },
        timeout: 7000,
      });

      setLoginSuccess('Login successful!');

      setTimeout(() => {
        setIsAuthenticated(true);
        setShowLoginModal(false);
        showMessage('success', 'Logged in successfully!');
        setIsLoggingIn(false);
      }, 1000);

    } catch (error: any) {
      const message = error.response?.data?.message
        || error.response?.data?.error
        || error.message
        || "Login failed. Please check your credentials or try again later.";

      setLoginError(message);
      console.error("Login error:", error);
      setTimeout(() => setLoginError(''), 8000);
      setIsLoggingIn(false);
    }
  };

const handleGoogleLogin = useCallback(async (credentialResponse: any) => {
    setLoginError('');
    setLoginSuccess('');
    setIsLoggingIn(true);

    try {
      const response = await axios.post(`${API_BASE_URL}/auth/google`, {
        token: credentialResponse.credential,
      });

      localStorage.setItem('token', response.data.token);
      setLoginSuccess('Google login successful!');

      setTimeout(() => {
        setIsAuthenticated(true);
        setShowLoginModal(false);
        showMessage('success', 'Google login successful!');
        setIsLoggingIn(false);
      }, 1000);

    } catch (error: any) {
      setIsLoggingIn(false);
      setLoginError(error.response?.data?.message || 'Google login failed');
      setTimeout(() => setLoginError(''), 8000);
    }
  }, []);

useEffect(() => {
  const initializeGoogleSignIn = () => {
    if (window.google && window.google.accounts) {
      window.google.accounts.id.initialize({
        client_id: '397321320139-tpd310sq9j8rdngqd9kdmhgegco52b3g.apps.googleusercontent.com',
        callback: handleGoogleLogin,
      });
      const buttonElement = document.getElementById('googleSignInButton');
      if (buttonElement) {
        window.google.accounts.id.renderButton(buttonElement, {
          theme: 'outline',
          size: 'large',
          width: 300,
        });
      }
    } else {
      setTimeout(initializeGoogleSignIn, 100);
    }
  };
  if (showLoginModal) {
    initializeGoogleSignIn();
  }
}, [showLoginModal, handleGoogleLogin]);

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

    // Build the page mapping for the backend
    const pageMapping = selectedPdfPages.map(page => ({
      uploadId: page.uploadId,
      pageNumber: page.pageNumber
    }));

    params.append('pageMapping', JSON.stringify(pageMapping));

    response = await axios.post(
      `${API_BASE_URL}/api/documents/merge-pdf?${params.toString()}`,
      null,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    break;
  }

  // Update the split-pdf case in handleProcess function
  case "split-pdf": {
    const rangesJson = splitType === "range"
      ? JSON.stringify(splitRanges)
      : null;

    response = await axios.post(
      `${API_BASE_URL}/api/documents/split-pdf`,
      null,
      {
        params: {
          uploadId: uploadIds[0],
          splitType,
          ...(rangesJson && { ranges: rangesJson }),
        },
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    break;
  }

 // Update the compress-pdf case in handleProcess function
 case "compress-pdf": {
   const params: any = {
     uploadId: uploadIds[0],
   };

   if (useCustomCompression) {
     params.customPercentage = compressionPercentage;
   } else {
     params.compressionLevel = compressionLevel;
   }

   response = await axios.post(
     `${API_BASE_URL}/api/documents/compress-pdf`,
     null,
     {
       params,
       headers: { Authorization: `Bearer ${token}` },
     }
   );
   break;
 }

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

 // Download result - Force direct download (works reliably with Cloudflare presigned URLs)
 const handleDownload = async () => {
   if (!result) return;

   try {
     const url = result.outputPresignedUrl || result.outputCdnUrl;
     const fileName = result.outputFileName;

     // 1. Fetch the file as blob (this prevents browser from trying to preview)
     const response = await fetch(url, {
       method: 'GET',
       mode: 'cors',           // Important for cross-origin presigned URLs
       credentials: 'omit',
     });

     if (!response.ok) {
       throw new Error(`Failed to fetch file: ${response.statusText}`);
     }

     const blob = await response.blob();

     // 2. Create temporary object URL from blob
     const blobUrl = window.URL.createObjectURL(blob);

     // 3. Trigger download
     const link = document.createElement('a');
     link.href = blobUrl;
     link.download = fileName;          // This is what forces the save dialog
     link.style.display = 'none';
     document.body.appendChild(link);
     link.click();

     // 4. Clean up
     document.body.removeChild(link);
     window.URL.revokeObjectURL(blobUrl);

     showMessage('success', "Download started!");
   } catch (err) {
     console.error("Download failed:", err);
     showMessage('error', "Download failed. Please try again or use the preview link.");
   }
 };

  // Add these functions for managing split ranges
  const addSplitRange = () => {
    setSplitRanges([...splitRanges, { from: 1, to: pdfPageCount }]);
  };

  const removeSplitRange = (index: number) => {
    if (splitRanges.length > 1) {
      setSplitRanges(splitRanges.filter((_, i) => i !== index));
    }
  };

  const updateSplitRange = (index: number, field: 'from' | 'to', value: number) => {
    const newRanges = [...splitRanges];

    // Validate value
    let validatedValue = Math.max(1, Math.min(value, pdfPageCount));

    // Ensure 'from' is not greater than 'to'
    if (field === 'from') {
      validatedValue = Math.min(validatedValue, newRanges[index].to);
    } else {
      validatedValue = Math.max(validatedValue, newRanges[index].from);
    }

    newRanges[index][field] = validatedValue;
    setSplitRanges(newRanges);
  };

  // Add this function after handleFileUpload
  const fetchPdfPageCount = async (uploadId: number) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const response = await axios.get(
        `${API_BASE_URL}/api/documents/page-count/${uploadId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const pageCount = response.data.pageCount;
      setPdfPageCount(pageCount);

      // Initialize with 2 default splits when PDF is loaded
      const midPoint = Math.floor(pageCount / 2);
      setSplitRanges([
        { from: 1, to: midPoint },
        { from: midPoint + 1, to: pageCount }
      ]);

      showMessage('success', `PDF loaded: ${pageCount} pages detected`);
    } catch (err) {
      console.error("Failed to fetch page count:", err);
      showMessage('error', "Failed to fetch PDF page count");
    }
  };

  // Call this function when a PDF is uploaded for split operation
  useEffect(() => {
    if (operation === "split-pdf" && uploadedFiles.length > 0) {
      fetchPdfPageCount(uploadedFiles[0].id);
    }
  }, [uploadedFiles, operation]);

// Fetch page counts for all uploaded PDFs in merge operation
useEffect(() => {
  if (operation === "merge-pdf" && uploadedFiles.length > 0) {
    uploadedFiles.forEach(async (upload) => {
      if (!pdfPageCounts.has(upload.id)) {
        try {
          const token = localStorage.getItem("token");
          if (!token) return;

          const response = await axios.get(
            `${API_BASE_URL}/api/documents/page-count/${upload.id}`,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );

          const pageCount = response.data.pageCount;
          setPdfPageCounts(prev => new Map(prev).set(upload.id, pageCount));

          // Initialize selected pages for this PDF
          const pages = Array.from({ length: pageCount }, (_, i) => ({
            uploadId: upload.id,
            fileName: upload.fileName,
            pageNumber: i + 1,
            totalPages: pageCount
          }));

          setSelectedPdfPages(prev => [...prev, ...pages]);
        } catch (err) {
          console.error(`Failed to fetch page count for ${upload.id}:`, err);
        }
      }
    });
  }
}, [uploadedFiles, operation]);

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
        {/* Back button ONLY shows when inside a specific tool (operation exists) */}
        {operation && (
          <button className="back-btn" onClick={() => router.push("/pdf-tools")}>
            <FaArrowLeft size={18} />
            <span>Back to PDF Tools</span>
          </button>
        )}

        <div className="header-content">
          <div className="header-icon" style={{ color: config.color || '#3b82f6' }}>
            {config.icon || <FaFilePdf size={48} />}
          </div>
          <div>
            {/* Use fallback title & description when on main listing page */}
            <h1>{config.title || "PDF Tools"}</h1>
            <p>
              {config.description ||
                "Professional PDF manipulation tools — fast, secure, and easy to use"}
            </p>
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

        {/* Three-Section Layout for Merge PDF */}
        {operation === "merge-pdf" && uploadedFiles.length > 0 && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: '300px 1fr 300px',
            gap: '16px',
            height: '600px',
            marginTop: '20px'
          }}>
            {/* LEFT SECTION - Uploaded PDFs with Insert Options */}
            <div style={{
              border: '2px solid #e2e8f0',
              borderRadius: '12px',
              padding: '16px',
              overflowY: 'auto',
              background: 'white'
            }}>
              <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: 600 }}>
                Uploaded PDFs ({uploadedFiles.length})
              </h3>

              {uploadedFiles.map((file, index) => (
                <div key={file.id} style={{ marginBottom: '12px' }}>
                  {/* Insert Button Above */}
                  {index === 0 && (
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      style={{
                        width: '100%',
                        padding: '8px',
                        marginBottom: '8px',
                        border: '2px dashed #667eea',
                        borderRadius: '6px',
                        background: 'rgba(102, 126, 234, 0.05)',
                        color: '#667eea',
                        cursor: 'pointer',
                        fontSize: '13px',
                        fontWeight: 600,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px'
                      }}
                    >
                      <FaPlus size={12} />  PDF Here
                    </button>
                  )}

                  {/* PDF Card */}
                  <div
                    draggable
                    onDragStart={() => handleDragStart(index)}
                    onDragOver={(e) => handleDragOver(e, index)}
                    onDrop={() => handleDrop(index)}
                    style={{
                      padding: '12px',
                      border: '2px solid #e2e8f0',
                      borderRadius: '8px',
                      background: '#f8fafc',
                      cursor: 'move'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <FaGripVertical color="#94a3b8" />
                      <FaFilePdf color="#ef4444" size={20} />
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{
                          fontSize: '13px',
                          fontWeight: 600,
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap'
                        }}>
                          {file.fileName}
                        </div>
                        <div style={{ fontSize: '11px', color: '#64748b' }}>
                          {pdfPageCounts.get(file.id) || '...'} pages • {formatFileSize(file.fileSizeBytes)}
                        </div>
                      </div>
                      <button
                        onClick={() => handleDeleteFile(file.id)}
                        style={{
                          padding: '6px',
                          border: 'none',
                          borderRadius: '6px',
                          background: '#fee2e2',
                          color: '#dc2626',
                          cursor: 'pointer'
                        }}
                      >
                        <FaTimes size={12} />
                      </button>
                    </div>
                  </div>

                  {/* Insert Button Below */}
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    style={{
                      width: '100%',
                      padding: '8px',
                      marginTop: '8px',
                      border: '2px dashed #667eea',
                      borderRadius: '6px',
                      background: 'rgba(102, 126, 234, 0.05)',
                      color: '#667eea',
                      cursor: 'pointer',
                      fontSize: '13px',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px'
                    }}
                  >
                    <FaPlus size={12} /> PDF Here
                  </button>
                </div>
              ))}
            </div>

           {/* MIDDLE SECTION - Preview */}
           <div style={{
             border: '2px solid #e2e8f0',
             borderRadius: '12px',
             padding: '16px',
             background: 'white',
             display: 'flex',
             flexDirection: 'column',
             overflow: 'hidden'
           }}>

             {selectedPdfPages.length > 0 ? (
               <div style={{
                 flex: 1,
                 overflowY: 'auto',
                 overflowX: 'hidden',
                 padding: '8px',
                 background: '#f8fafc',
                 borderRadius: '8px'
               }}>
                 {/* Render all pages in order */}
                 {selectedPdfPages.map((page, index) => (
                   <div
                     key={`preview-${page.uploadId}-${page.pageNumber}-${index}`}
                     onClick={() => setPreviewPageIndex(index)}
                     style={{
                       marginBottom: '16px',
                       cursor: 'pointer',
                       position: 'relative',
                       transition: 'all 0.2s'
                     }}
                   >
                     {/* Page Number Badge */}
                     <div style={{
                       position: 'absolute',
                       top: '8px',
                       left: '8px',
                       zIndex: 10,
                       background: previewPageIndex === index
                         ? 'linear-gradient(135deg, #667eea, #764ba2)'
                         : 'rgba(0, 0, 0, 0.7)',
                       color: 'white',
                       padding: '6px 12px',
                       borderRadius: '20px',
                       fontSize: '12px',
                       fontWeight: 700,
                       boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                       display: 'flex',
                       alignItems: 'center',
                       gap: '6px'
                     }}>
                       <span>Page {index + 1}</span>
                       {previewPageIndex === index && (
                         <span style={{ fontSize: '10px' }}>👁️</span>
                       )}
                     </div>

                     {/* PDF Page Preview using Canvas */}
                     <div style={{
                       width: '100%',
                       border: previewPageIndex === index
                         ? '3px solid #667eea'
                         : '2px solid #e2e8f0',
                       borderRadius: '8px',
                       overflow: 'hidden',
                       background: 'white',
                       boxShadow: previewPageIndex === index
                         ? '0 4px 16px rgba(102, 126, 234, 0.3)'
                         : '0 2px 8px rgba(0,0,0,0.1)',
                       transition: 'all 0.2s',
                       position: 'relative'
                     }}
                     onMouseEnter={(e) => {
                       if (previewPageIndex !== index) {
                         e.currentTarget.style.borderColor = '#94a3b8';
                         e.currentTarget.style.transform = 'scale(1.02)';
                       }
                     }}
                     onMouseLeave={(e) => {
                       if (previewPageIndex !== index) {
                         e.currentTarget.style.borderColor = '#e2e8f0';
                         e.currentTarget.style.transform = 'scale(1)';
                       }
                     }}
                     >
                       {/* Embed PDF page using object tag for clean rendering */}
                       <object
                         data={`${uploadedFiles.find(f => f.id === page.uploadId)?.presignedUrl}#page=${page.pageNumber}&view=FitH&toolbar=0&navpanes=0&scrollbar=0`}
                         type="application/pdf"
                         style={{
                           width: '100%',
                           height: '400px',
                           display: 'block',
                           pointerEvents: 'none'
                         }}
                       >
                         {/* Fallback for browsers that don't support object tag */}
                         <div style={{
                           width: '100%',
                           height: '400px',
                           display: 'flex',
                           alignItems: 'center',
                           justifyContent: 'center',
                           background: '#f8fafc',
                           color: '#64748b',
                           fontSize: '13px'
                         }}>
                           📄 Page {page.pageNumber}
                         </div>
                       </object>
                     </div>

                     {/* Page Info Footer */}
                     <div style={{
                       marginTop: '8px',
                       padding: '8px 12px',
                       background: previewPageIndex === index
                         ? 'rgba(102, 126, 234, 0.1)'
                         : 'white',
                       borderRadius: '6px',
                       border: '1px solid #e2e8f0',
                       display: 'flex',
                       justifyContent: 'space-between',
                       alignItems: 'center'
                     }}>
                       <div style={{ flex: 1, minWidth: 0 }}>
                         <div style={{
                           fontSize: '12px',
                           fontWeight: 600,
                           color: '#1e293b',
                           overflow: 'hidden',
                           textOverflow: 'ellipsis',
                           whiteSpace: 'nowrap'
                         }}>
                           {page.fileName}
                         </div>
                         <div style={{
                           fontSize: '10px',
                           color: '#64748b',
                           marginTop: '2px'
                         }}>
                           Original: Page {page.pageNumber} of {page.totalPages}
                         </div>
                       </div>
                       <div style={{
                         fontSize: '11px',
                         color: '#667eea',
                         fontWeight: 600,
                         padding: '4px 8px',
                         background: 'rgba(102, 126, 234, 0.1)',
                         borderRadius: '4px'
                       }}>
                         #{index + 1}
                       </div>
                     </div>
                   </div>
                 ))}

                 {/* Scroll to Top Button (appears after scrolling) */}
                 <div style={{
                   position: 'sticky',
                   bottom: '16px',
                   display: 'flex',
                   justifyContent: 'center',
                   marginTop: '16px'
                 }}>
                   <button
                     onClick={() => {
                       const previewContainer = document.querySelector('[style*="overflowY: auto"]');
                       if (previewContainer) {
                         previewContainer.scrollTo({ top: 0, behavior: 'smooth' });
                       }
                     }}
                     style={{
                       padding: '10px 20px',
                       background: 'linear-gradient(135deg, #667eea, #764ba2)',
                       color: 'white',
                       border: 'none',
                       borderRadius: '20px',
                       fontSize: '13px',
                       fontWeight: 600,
                       cursor: 'pointer',
                       boxShadow: '0 4px 12px rgba(102, 126, 234, 0.4)',
                       display: 'flex',
                       alignItems: 'center',
                       gap: '8px',
                       transition: 'all 0.2s'
                     }}
                     onMouseEnter={(e) => {
                       e.currentTarget.style.transform = 'scale(1.05)';
                       e.currentTarget.style.boxShadow = '0 6px 16px rgba(102, 126, 234, 0.5)';
                     }}
                     onMouseLeave={(e) => {
                       e.currentTarget.style.transform = 'scale(1)';
                       e.currentTarget.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.4)';
                     }}
                   >
                     ↑ Scroll to Top
                   </button>
                 </div>
               </div>
             ) : (
               <div style={{
                 flex: 1,
                 display: 'flex',
                 flexDirection: 'column',
                 alignItems: 'center',
                 justifyContent: 'center',
                 color: '#94a3b8'
               }}>
                 <FaFilePdf size={48} />
                 <p style={{ marginTop: '10px', fontSize: '14px' }}>No pages to preview</p>
                 <p style={{ fontSize: '12px', color: '#cbd5e1' }}>Upload PDFs to get started</p>
               </div>
             )}
           </div>

            {/* RIGHT SECTION - Page Management */}
            <div style={{
              border: '2px solid #e2e8f0',
              borderRadius: '12px',
              padding: '16px',
              overflowY: 'auto',
              background: 'white'
            }}>
              <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: 600 }}>
                All Pages ({selectedPdfPages.length})
              </h3>

              {selectedPdfPages.map((page, index) => (
                <div
                  key={`${page.uploadId}-${page.pageNumber}-${index}`}
                  draggable
                  onDragStart={() => handlePageDragStart(index)}
                  onDragOver={(e) => handlePageDragOver(e, index)}
                  onDrop={() => handlePageDrop(index)}
                  onClick={() => setPreviewPageIndex(index)}
                  style={{
                    padding: '10px',
                    marginBottom: '8px',
                    border: dragOverPageIndex === index
                      ? '2px solid #667eea'
                      : previewPageIndex === index
                        ? '2px solid #667eea'
                        : '2px solid #e2e8f0',
                    borderRadius: '8px',
                    background: draggedPageIndex === index
                      ? 'rgba(102, 126, 234, 0.2)'
                      : previewPageIndex === index
                        ? 'rgba(102, 126, 234, 0.1)'
                        : '#f8fafc',
                    cursor: 'move',
                    transition: 'all 0.2s',
                    opacity: draggedPageIndex === index ? 0.5 : 1
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <FaGripVertical style={{ color: '#94a3b8', flexShrink: 0 }} />
                    <div style={{
                      minWidth: '40px',
                      height: '50px',
                      border: '1px solid #e2e8f0',
                      borderRadius: '4px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'white',
                      fontSize: '18px',
                      flexShrink: 0
                    }}>
                      📄
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{
                        fontSize: '12px',
                        fontWeight: 600,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap'
                      }}>
                        Page {index + 1}
                      </div>
                      <div style={{
                        fontSize: '10px',
                        color: '#64748b',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap'
                      }}>
                        {page.fileName}
                      </div>
                      <div style={{ fontSize: '10px', color: '#94a3b8' }}>
                        Original: p.{page.pageNumber}/{page.totalPages}
                      </div>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        const newPages = selectedPdfPages.filter((_, i) => i !== index);
                        setSelectedPdfPages(newPages);
                        if (previewPageIndex >= index && previewPageIndex > 0) {
                          setPreviewPageIndex(previewPageIndex - 1);
                        } else if (previewPageIndex >= newPages.length && newPages.length > 0) {
                          setPreviewPageIndex(newPages.length - 1);
                        }
                      }}
                      style={{
                        padding: '6px',
                        border: 'none',
                        borderRadius: '6px',
                        background: '#fee2e2',
                        color: '#dc2626',
                        cursor: 'pointer',
                        flexShrink: 0
                      }}
                    >
                      <FaTimes size={10} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

            {/* Operation Options */}
            {config.requiresOptions && uploadedFiles.length > 0 && (
              <div className="options-panel">
                <h3>Options</h3>

                {operation === "compress-pdf" && (
                  <>
                    <div className="option-group">
                      <label>Compression Level</label>
                      <div className="compression-options" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <div className="radio-group">
                          <label className="radio-label">
                            <input
                              type="radio"
                              value="low"
                              checked={!useCustomCompression && compressionLevel === "low"}
                              onChange={(e) => {
                                setUseCustomCompression(false);
                                setCompressionLevel(e.target.value);
                                setCompressionPercentage(75);
                              }}
                            />
                            <span>Low (75% of original size)</span>
                          </label>

                          <label className="radio-label">
                            <input
                              type="radio"
                              value="medium"
                              checked={!useCustomCompression && compressionLevel === "medium"}
                              onChange={(e) => {
                                setUseCustomCompression(false);
                                setCompressionLevel(e.target.value);
                                setCompressionPercentage(50);
                              }}
                            />
                            <span>Medium (50% of original size)</span>
                          </label>

                          <label className="radio-label">
                            <input
                              type="radio"
                              value="high"
                              checked={!useCustomCompression && compressionLevel === "high"}
                              onChange={(e) => {
                                setUseCustomCompression(false);
                                setCompressionLevel(e.target.value);
                                setCompressionPercentage(25);
                              }}
                            />
                            <span>High (25% of original size)</span>
                          </label>

                          <label className="radio-label">
                            <input
                              type="radio"
                              checked={useCustomCompression}
                              onChange={() => setUseCustomCompression(true)}
                            />
                            <span>Custom</span>
                          </label>
                        </div>

                        {useCustomCompression && (
                          <div style={{
                            background: 'white',
                            padding: '16px',
                            borderRadius: '8px',
                            border: '2px solid #667eea'
                          }}>
                            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: 600 }}>
                              Custom Compression Percentage (1-99%)
                            </label>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                              <input
                                type="range"
                                min="1"
                                max="99"
                                value={compressionPercentage}
                                onChange={(e) => setCompressionPercentage(parseInt(e.target.value))}
                                style={{ flex: 1 }}
                              />
                              <div style={{ display: 'flex', alignItems: 'center' }}>
                                <input
                                  type="number"
                                  min="1"
                                  max="99"
                                  value={compressionPercentage}
                                  onChange={(e) => {
                                    const val = parseInt(e.target.value);
                                    if (val >= 1 && val <= 99) {
                                      setCompressionPercentage(val);
                                    }
                                  }}
                                  style={{
                                    width: '70px',
                                    padding: '8px',
                                    textAlign: 'center',
                                    border: '2px solid #e2e8f0',
                                    borderRadius: '6px',
                                    fontSize: '15px',
                                    fontWeight: 600
                                  }}
                                />
                                <span style={{ marginLeft: '6px', fontSize: '15px', fontWeight: 600 }}>%</span>
                              </div>
                            </div>
                            <p style={{
                              fontSize: '12px',
                              color: '#64748b',
                              marginTop: '8px',
                              marginBottom: 0
                            }}>
                              Target size: {compressionPercentage}% of original
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </>
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
                        onChange={(e) => {
                          setSplitType(e.target.value);
                        }}
                      >
                        <option value="all">All pages (separate files)</option>
                        <option value="range">Custom page ranges</option>
                      </select>
                    </div>

                    {splitType === "range" && (
                      <div className="option-group">
                        {pdfPageCount === 0 ? (
                          <div style={{
                            padding: '20px',
                            textAlign: 'center',
                            background: '#f8fafc',
                            borderRadius: '12px',
                            border: '2px dashed #cbd5e1'
                          }}>
                            <FaSpinner className="spinner" style={{ color: '#667eea', marginBottom: '10px' }} />
                            <p style={{ margin: 0, color: '#64748b', fontSize: '14px' }}>
                              Loading PDF information...
                            </p>
                          </div>
                        ) : (
                          <>
                            <div style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              marginBottom: '16px'
                            }}>
                              <label style={{ margin: 0, fontWeight: 600, fontSize: '15px' }}>
                                Define Split Ranges (Total: {pdfPageCount} pages)
                              </label>
                              <span style={{
                                fontSize: '13px',
                                color: 'white',
                                background: 'linear-gradient(135deg, #667eea, #764ba2)',
                                padding: '6px 14px',
                                borderRadius: '20px',
                                fontWeight: 600
                              }}>
                                {splitRanges.length} Split{splitRanges.length !== 1 ? 's' : ''}
                              </span>
                            </div>

                            {/* Split Ranges Table */}
                            <div style={{
                              border: '2px solid #e2e8f0',
                              borderRadius: '12px',
                              overflow: 'hidden',
                              background: 'white',
                              boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                            }}>
                              {/* Table Header */}
                              <div style={{
                                display: 'grid',
                                gridTemplateColumns: '110px 1fr 1fr 50px',
                                gap: '8px',
                                padding: '14px 16px',
                                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                color: 'white',
                                fontWeight: 600,
                                fontSize: '13px',
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px'
                              }}>
                                <div>Split</div>
                                <div style={{ textAlign: 'center' }}>From Page</div>
                                <div style={{ textAlign: 'center' }}>To Page</div>
                                <div style={{ textAlign: 'center' }}>
                                  <FaTrash style={{ fontSize: '11px' }} />
                                </div>
                              </div>

                              {/* Split Rows */}
                              {splitRanges.map((range, index) => (
                                <div
                                  key={index}
                                  style={{
                                    display: 'grid',
                                    gridTemplateColumns: '110px 1fr 1fr 50px',
                                    gap: '8px',
                                    padding: '14px 16px',
                                    background: index % 2 === 0 ? '#ffffff' : '#f8fafc',
                                    borderBottom: index < splitRanges.length - 1 ? '1px solid #e2e8f0' : 'none',
                                    alignItems: 'center',
                                    transition: 'background 0.2s'
                                  }}
                                >
                                  {/* Split Label */}
                                  <div style={{
                                    fontWeight: 600,
                                    fontSize: '14px',
                                    color: '#1e293b',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px'
                                  }}>
                                    <div style={{
                                      width: '28px',
                                      height: '28px',
                                      borderRadius: '8px',
                                      background: 'linear-gradient(135deg, #667eea, #764ba2)',
                                      color: 'white',
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      fontSize: '13px',
                                      fontWeight: 700,
                                      flexShrink: 0
                                    }}>
                                      {index + 1}
                                    </div>
                                    <span style={{ whiteSpace: 'nowrap' }}>Split {index + 1}</span>
                                  </div>

                                  {/* FROM Input with +/- buttons */}
                                  <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '4px'
                                  }}>
                                    <button
                                      type="button"
                                      onClick={() => updateSplitRange(index, 'from', range.from - 1)}
                                      disabled={range.from <= 1}
                                      style={{
                                        minWidth: '34px',
                                        height: '40px',
                                        padding: '0',
                                        border: '2px solid #e2e8f0',
                                        borderRadius: '8px',
                                        background: range.from <= 1 ? '#f1f5f9' : 'white',
                                        cursor: range.from <= 1 ? 'not-allowed' : 'pointer',
                                        fontSize: '20px',
                                        fontWeight: 700,
                                        color: range.from <= 1 ? '#cbd5e1' : '#667eea',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        transition: 'all 0.2s',
                                        opacity: range.from <= 1 ? 0.5 : 1
                                      }}
                                    >
                                      −
                                    </button>

                                    <input
                                      type="number"
                                      min="1"
                                      max={pdfPageCount}
                                      value={range.from}
                                      onChange={(e) => {
                                        const val = parseInt(e.target.value);
                                        if (!isNaN(val)) {
                                          updateSplitRange(index, 'from', val);
                                        }
                                      }}
                                      style={{
                                        width: '70px',
                                        height: '40px',
                                        textAlign: 'center',
                                        border: '2px solid #e2e8f0',
                                        borderRadius: '8px',
                                        fontSize: '16px',
                                        fontWeight: 600,
                                        color: '#1e293b',
                                        transition: 'all 0.2s',
                                        background: 'white'
                                      }}
                                      onFocus={(e) => {
                                        e.target.style.borderColor = '#667eea';
                                        e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                                      }}
                                      onBlur={(e) => {
                                        e.target.style.borderColor = '#e2e8f0';
                                        e.target.style.boxShadow = 'none';
                                      }}
                                    />

                                    <button
                                      type="button"
                                      onClick={() => updateSplitRange(index, 'from', range.from + 1)}
                                      disabled={range.from >= range.to}
                                      style={{
                                        minWidth: '34px',
                                        height: '40px',
                                        padding: '0',
                                        border: '2px solid #e2e8f0',
                                        borderRadius: '8px',
                                        background: range.from >= range.to ? '#f1f5f9' : 'white',
                                        cursor: range.from >= range.to ? 'not-allowed' : 'pointer',
                                        fontSize: '20px',
                                        fontWeight: 700,
                                        color: range.from >= range.to ? '#cbd5e1' : '#667eea',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        transition: 'all 0.2s',
                                        opacity: range.from >= range.to ? 0.5 : 1
                                      }}
                                    >
                                      +
                                    </button>
                                  </div>

                                  {/* TO Input with +/- buttons */}
                                  <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '4px'
                                  }}>
                                    <button
                                      type="button"
                                      onClick={() => updateSplitRange(index, 'to', range.to - 1)}
                                      disabled={range.to <= range.from}
                                      style={{
                                        minWidth: '34px',
                                        height: '40px',
                                        padding: '0',
                                        border: '2px solid #e2e8f0',
                                        borderRadius: '8px',
                                        background: range.to <= range.from ? '#f1f5f9' : 'white',
                                        cursor: range.to <= range.from ? 'not-allowed' : 'pointer',
                                        fontSize: '20px',
                                        fontWeight: 700,
                                        color: range.to <= range.from ? '#cbd5e1' : '#667eea',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        transition: 'all 0.2s',
                                        opacity: range.to <= range.from ? 0.5 : 1
                                      }}
                                    >
                                      −
                                    </button>

                                    <input
                                      type="number"
                                      min="1"
                                      max={pdfPageCount}
                                      value={range.to}
                                      onChange={(e) => {
                                        const val = parseInt(e.target.value);
                                        if (!isNaN(val)) {
                                          updateSplitRange(index, 'to', val);
                                        }
                                      }}
                                      style={{
                                        width: '70px',
                                        height: '40px',
                                        textAlign: 'center',
                                        border: '2px solid #e2e8f0',
                                        borderRadius: '8px',
                                        fontSize: '16px',
                                        fontWeight: 600,
                                        color: '#1e293b',
                                        transition: 'all 0.2s',
                                        background: 'white'
                                      }}
                                      onFocus={(e) => {
                                        e.target.style.borderColor = '#667eea';
                                        e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                                      }}
                                      onBlur={(e) => {
                                        e.target.style.borderColor = '#e2e8f0';
                                        e.target.style.boxShadow = 'none';
                                      }}
                                    />

                                    <button
                                      type="button"
                                      onClick={() => updateSplitRange(index, 'to', range.to + 1)}
                                      disabled={range.to >= pdfPageCount}
                                      style={{
                                        minWidth: '34px',
                                        height: '40px',
                                        padding: '0',
                                        border: '2px solid #e2e8f0',
                                        borderRadius: '8px',
                                        background: range.to >= pdfPageCount ? '#f1f5f9' : 'white',
                                        cursor: range.to >= pdfPageCount ? 'not-allowed' : 'pointer',
                                        fontSize: '20px',
                                        fontWeight: 700,
                                        color: range.to >= pdfPageCount ? '#cbd5e1' : '#667eea',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        transition: 'all 0.2s',
                                        opacity: range.to >= pdfPageCount ? 0.5 : 1
                                      }}
                                    >
                                      +
                                    </button>
                                  </div>

                                  {/* Delete Button */}
                                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    {splitRanges.length > 1 ? (
                                      <button
                                        type="button"
                                        onClick={() => removeSplitRange(index)}
                                        style={{
                                          width: '38px',
                                          height: '38px',
                                          border: 'none',
                                          borderRadius: '8px',
                                          background: '#fee2e2',
                                          color: '#dc2626',
                                          cursor: 'pointer',
                                          display: 'flex',
                                          alignItems: 'center',
                                          justifyContent: 'center',
                                          transition: 'all 0.2s',
                                          fontSize: '14px'
                                        }}
                                        onMouseEnter={(e) => {
                                          e.currentTarget.style.background = '#fecaca';
                                          e.currentTarget.style.transform = 'scale(1.1)';
                                        }}
                                        onMouseLeave={(e) => {
                                          e.currentTarget.style.background = '#fee2e2';
                                          e.currentTarget.style.transform = 'scale(1)';
                                        }}
                                        title="Remove this split"
                                      >
                                        <FaTimes />
                                      </button>
                                    ) : (
                                      <div style={{
                                        width: '38px',
                                        height: '38px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#cbd5e1',
                                        fontSize: '16px'
                                      }}>
                                        —
                                      </div>
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>

                            {/* Add Another Split Button */}
                            <button
                              type="button"
                              onClick={addSplitRange}
                              style={{
                                width: '100%',
                                padding: '16px',
                                marginTop: '16px',
                                border: '2px dashed #667eea',
                                borderRadius: '12px',
                                background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.05), rgba(118, 75, 162, 0.05))',
                                color: '#667eea',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '10px',
                                fontSize: '15px',
                                fontWeight: 600,
                                transition: 'all 0.3s',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))';
                                e.currentTarget.style.borderColor = '#5568d3';
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.2)';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(102, 126, 234, 0.05), rgba(118, 75, 162, 0.05))';
                                e.currentTarget.style.borderColor = '#667eea';
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
                              }}
                            >
                              <FaPlus style={{ fontSize: '14px' }} /> Add Another Split
                            </button>

                            {/* Summary Card */}
                            <div style={{
                              marginTop: '16px',
                              padding: '16px',
                              background: 'linear-gradient(135deg, #f0f9ff 0%, #e0e7ff 100%)',
                              borderRadius: '12px',
                              border: '1px solid #bfdbfe'
                            }}>
                              <div style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: '12px'
                              }}>
                                <div style={{
                                  fontSize: '22px',
                                  marginTop: '2px'
                                }}>
                                  📄
                                </div>
                                <div style={{ flex: 1 }}>
                                  <p style={{
                                    fontSize: '13px',
                                    color: '#1e40af',
                                    margin: '0 0 8px 0',
                                    fontWeight: 600,
                                    lineHeight: '1.5'
                                  }}>
                                    Split Summary:
                                  </p>
                                  <p style={{
                                    fontSize: '13px',
                                    color: '#3730a3',
                                    margin: 0,
                                    lineHeight: '1.6'
                                  }}>
                                    Your {pdfPageCount}-page PDF will be split into <strong>{splitRanges.length} separate file{splitRanges.length !== 1 ? 's' : ''}</strong>:
                                  </p>
                                  <ul style={{
                                    margin: '8px 0 0 0',
                                    paddingLeft: '20px',
                                    fontSize: '13px',
                                    color: '#3730a3',
                                    lineHeight: '1.8'
                                  }}>
                                    {splitRanges.map((range, idx) => (
                                      <li key={idx}>
                                        <strong>Split {idx + 1}:</strong> Pages {range.from} to {range.to}
                                        <span style={{
                                          marginLeft: '6px',
                                          padding: '2px 8px',
                                          background: 'rgba(102, 126, 234, 0.15)',
                                          borderRadius: '10px',
                                          fontSize: '12px',
                                          fontWeight: 600
                                        }}>
                                          {range.to - range.from + 1} page{range.to - range.from + 1 !== 1 ? 's' : ''}
                                        </span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </>
                        )}
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
                  zIndex: 10,
                }}>
                  <FaSpinner className="spinner" size={32} />
                  <p style={{ marginTop: '1rem' }}>Logging in...</p>
                </div>
              )}

              {loginError && (
                <div style={{
                  backgroundColor: '#fee2e2',
                  color: '#dc2626',
                  padding: '0.75rem',
                  borderRadius: '6px',
                  marginBottom: '1rem',
                  fontSize: '0.9rem',
                }}>
                  {loginError}
                </div>
              )}

              {loginSuccess && (
                <div style={{
                  backgroundColor: '#d1fae5',
                  color: '#059669',
                  padding: '0.75rem',
                  borderRadius: '6px',
                  marginBottom: '1rem',
                  fontSize: '0.9rem',
                }}>
                  {loginSuccess}
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

              <div style={{
                textAlign: 'center',
                margin: '1rem 0',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}>
                <div style={{ flex: 1, height: '1px', backgroundColor: '#ddd' }}></div>
                <span style={{ color: '#666', fontSize: '0.9rem' }}>OR</span>
                <div style={{ flex: 1, height: '1px', backgroundColor: '#ddd' }}></div>
              </div>

              <div id="googleSignInButton" style={{ display: 'flex', justifyContent: 'center' }}></div>

              <p style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
                New to SCENITH?{' '}
                <a href="/register" style={{ color: config.color, textDecoration: 'none', fontWeight: '600' }}>Sign up</a>
              </p>
            </div>
          </div>
        </div>
      )}
    {/* SEO Content Section - Add this right before the final closing </div> */}
    {!result && (
      <div className="seo-content-section" style={{ maxWidth: '900px', margin: '60px auto 40px', padding: '0 20px' }}>
        {operation === "merge-pdf" && (
          <>
            <h2 style={{ fontSize: '28px', marginBottom: '20px', color: '#1e293b' }}>
              How to Merge PDF Files Online - Complete Guide
            </h2>

            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
              Merging PDF files has never been easier with SCENITH's free online PDF merger. Combine multiple PDF documents into a single file in just seconds, with advanced page-level control that lets you select specific pages from each PDF. Whether you need to consolidate business reports, merge invoices, combine presentation slides, or organize research papers, our tool handles it all seamlessly with professional results.
            </p>

            <h3 style={{ fontSize: '22px', marginTop: '30px', marginBottom: '15px', color: '#1e293b' }}>
              Step-by-Step Guide to Merge PDFs
            </h3>

            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
              <strong>Step 1: Upload Your PDF Files</strong><br/>
              Click the upload area or drag and drop your PDF files directly into the browser. You can select multiple files at once from your computer. The tool supports unlimited file uploads, so feel free to combine as many PDFs as your project requires. Each uploaded file appears instantly in the left panel with a preview thumbnail and file information.
            </p>

            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
              <strong>Step 2: Arrange PDFs and Select Pages</strong><br/>
              This is where SCENITH's PDF merger shines. Unlike basic tools that only let you reorder files, we provide granular page-level control. In the left panel, drag and drop entire PDF files to reorder them. In the middle preview section, you'll see every page from all your PDFs displayed individually. You can rearrange these pages in any order by dragging them around, creating a completely custom merged document. Want page 5 from the first PDF followed by page 2 from the third PDF? No problem—just drag and drop.
            </p>

            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
              <strong>Step 3: Add or Remove Pages</strong><br/>
              Don't need a specific page? Click the small X button on any page thumbnail to remove it from the final merged PDF. Need to insert additional pages? Use the "+ PDF Here" buttons positioned between files in the left panel to upload and insert new PDFs at any position in your document sequence. This flexibility ensures your final merged PDF contains exactly the pages you need, in precisely the order you want.
            </p>

            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
              <strong>Step 4: Preview Your Merged Document</strong><br/>
              The center preview panel lets you see exactly how your merged PDF will look. Click on any page thumbnail to view it in full detail. The preview uses your browser's built-in PDF renderer to show high-quality page previews, ensuring you catch any issues before generating the final file. This preview functionality is especially valuable when working with complex documents containing graphics, charts, or formatted text.
            </p>

            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
              <strong>Step 5: Process and Download</strong><br/>
              Once you're satisfied with the page arrangement, click the "Process Merge PDFs" button. Our cloud servers combine your pages in seconds, maintaining the original quality of all text, images, and formatting. The merged PDF downloads automatically as a high-quality file ready for immediate use, sharing, or printing. All processing happens securely, and your files are automatically deleted from our servers after download to protect your privacy.
            </p>

            <h3 style={{ fontSize: '22px', marginTop: '30px', marginBottom: '15px', color: '#1e293b' }}>
              Why Choose SCENITH PDF Merger?
            </h3>

            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
              <strong>Advanced Page-Level Control:</strong> Unlike other PDF mergers that limit you to file-level organization, SCENITH gives you complete control over individual pages. Select specific pages from each PDF, reorder them freely, and create custom merged documents tailored to your exact needs. This feature alone saves hours compared to manual PDF editing in desktop software.
            </p>

            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
              <strong>Unlimited Merges, Completely Free:</strong> Many PDF tools limit file sizes, page counts, or daily usage. SCENITH offers unlimited merges at no cost. Combine as many PDFs as you need, with as many pages as necessary, without hitting artificial restrictions. There are no watermarks, no quality degradation, and no forced upgrades for basic functionality.
            </p>

            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
              <strong>Visual Preview Interface:</strong> See exactly what you're creating before finalizing your merged PDF. Our visual interface displays page thumbnails, PDF titles, and page numbers, making it easy to identify and organize your content. This visual approach reduces errors and ensures your merged document matches your expectations perfectly.
            </p>

            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
              <strong>Secure Cloud Processing:</strong> All PDF merging happens on secure cloud servers with enterprise-grade encryption. Your files are processed privately, and we never store or access your document content. Files are automatically deleted immediately after download, ensuring complete confidentiality for sensitive business documents, legal contracts, or personal files.
            </p>

            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
              <strong>No Quality Loss:</strong> Our merging algorithm preserves the original quality of all PDF content. Text remains crisp and selectable, images maintain their resolution, vector graphics stay sharp, and all formatting (fonts, colors, layouts) transfers perfectly. The merged PDF is indistinguishable from manually combined files created in professional PDF software.
            </p>

            <h3 style={{ fontSize: '22px', marginTop: '30px', marginBottom: '15px', color: '#1e293b' }}>
              Common Use Cases for PDF Merging
            </h3>

            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
              <strong>Business & Corporate:</strong> Combine quarterly reports from different departments into unified presentations for stakeholders. Merge invoices, receipts, and financial statements into single documents for accounting. Consolidate project proposals, client presentations, and supporting materials into comprehensive pitch decks. Combine employee onboarding documents, training materials, and company policies into organized handbooks.
            </p>

            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
              <strong>Academic & Research:</strong> Merge research papers, literature reviews, and supplementary materials into thesis documents. Combine lecture notes, study guides, and practice problems into comprehensive exam preparation materials. Consolidate journal articles and research findings into annotated bibliographies. Merge student assignments and feedback into portfolio documents.
            </p>

            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
              <strong>Legal & Contracts:</strong> Combine contracts, addendums, and exhibits into single legal documents. Merge court filings, evidence documents, and supporting materials for case submissions. Consolidate property documents, deeds, and inspection reports for real estate transactions. Combine corporate bylaws, shareholder agreements, and governance documents.
            </p>

            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
              <strong>Personal Projects:</strong> Merge travel itineraries, booking confirmations, and maps into trip planning documents. Combine family photos, genealogy records, and historical documents into heritage albums. Consolidate resumes, cover letters, and portfolio samples into job application packages. Merge recipes, meal plans, and shopping lists into organized cookbooks.
            </p>

            <h3 style={{ fontSize: '22px', marginTop: '30px', marginBottom: '15px', color: '#1e293b' }}>
              Tips for Efficient PDF Merging
            </h3>

            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
              <strong>Organize Before Uploading:</strong> Rename your PDF files with clear, sequential names before uploading (e.g., "01-Introduction.pdf", "02-Methods.pdf"). This makes it easier to identify files in the upload panel and arrange them in the correct order. Consider creating a quick outline of your desired page sequence to streamline the merging process.
            </p>

            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
              <strong>Use the Preview Feature:</strong> Always review the center preview panel before finalizing your merge. Check that pages are in the correct order, verify that no unwanted pages are included, and ensure all necessary content is present. This preview step prevents errors and saves time by catching issues before generating the final PDF.
            </p>

            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
              <strong>Remove Unnecessary Pages:</strong> Many PDFs contain blank pages, cover pages you don't need, or redundant content. Use the page removal feature to eliminate these before merging. This keeps your final document concise and professional, reducing file size and improving readability.
            </p>

            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
              <strong>Consider File Size:</strong> While SCENITH handles large PDFs easily, extremely large merged documents (100+ MB) may take longer to download. If you're merging many image-heavy PDFs, consider using our PDF compression tool after merging to reduce file size while maintaining quality. This is especially important for email attachments or web publishing.
            </p>
          </>
        )}

        {operation === "split-pdf" && (
          <>
            <h2 style={{ fontSize: '28px', marginBottom: '20px', color: '#1e293b' }}>
              Split PDF Files Online - Fast, Free & Easy
            </h2>

            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
              Need to extract specific pages from a PDF or divide a large document into smaller, more manageable files? SCENITH's free PDF splitter gives you complete control over how your PDF is divided. Whether you want to split every page into separate files or extract custom page ranges, our tool provides the flexibility and precision you need for professional PDF management.
            </p>

            <h3 style={{ fontSize: '22px', marginTop: '30px', marginBottom: '15px', color: '#1e293b' }}>
              Two Powerful Ways to Split Your PDF
            </h3>

            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
              <strong>Split All Pages (Individual Page Extraction):</strong> This mode automatically separates every page into individual PDF files, perfect when you need to distribute single pages to different people or extract specific pages for separate use. For example, if you have a 20-page report, you'll get 20 separate PDF files, each containing a single page with its original formatting and quality intact. This is ideal for sharing specific sections with team members, creating page-by-page study materials, or separating multi-page scans into individual documents.
            </p>

            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
              <strong>Custom Page Ranges (Flexible Multi-Split):</strong> This advanced mode lets you define exactly which pages to extract and how to group them. You can create multiple splits with different page ranges in a single operation. For example, split pages 1-5 into one file, pages 6-10 into another, and pages 11-15 into a third file. The interactive interface shows your total page count and validates your ranges in real-time, ensuring you don't miss any pages or create overlapping ranges.
            </p>

            <h3 style={{ fontSize: '22px', marginTop: '30px', marginBottom: '15px', color: '#1e293b' }}>
              How to Use the PDF Splitter
            </h3>

            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
              <strong>Step 1: Upload Your PDF</strong><br/>
              Click the upload area or drag your PDF file into the browser. Unlike merging, PDF splitting works with single files only. Once uploaded, the tool automatically analyzes your PDF and displays the total page count. This information appears immediately, helping you plan your split strategy before proceeding.
            </p>

            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
              <strong>Step 2: Choose Split Type</strong><br/>
              Select between "All pages (separate files)" or "Custom page ranges" from the dropdown. If you choose custom ranges, a detailed split configuration interface appears, showing your total page count and providing tools to define multiple split ranges.
            </p>

            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
              <strong>Step 3: Define Custom Ranges (If Applicable)</strong><br/>
              The custom range interface displays a table where each row represents a separate split. Use the intuitive +/- buttons to adjust page numbers, or type directly into the input fields. Add new splits using the "+ Add Another Split" button. Remove unwanted splits with the X button. The summary section at the bottom shows exactly how your PDF will be divided, including page counts for each resulting file.
            </p>

            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
              <strong>Step 4: Process and Download</strong><br/>
              Click "Process Split PDFs" to execute the split operation. Within seconds, your files are ready for download. For "All Pages" splits, you'll receive a ZIP file containing all individual page PDFs. For custom range splits, you'll get separate PDF files for each defined range, clearly labeled with page numbers for easy identification.
            </p>

            <h3 style={{ fontSize: '22px', marginTop: '30px', marginBottom: '15px', color: '#1e293b' }}>
              Common PDF Splitting Use Cases
            </h3>

            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
              <strong>Contract & Legal Document Distribution:</strong> Split multi-party contracts to send different sections to different parties. Extract signature pages from lengthy agreements for quick review. Separate confidential clauses from general terms for controlled distribution. Divide court documents into separate exhibits for organized case management.
            </p>

            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
              <strong>Educational Materials:</strong> Extract specific chapters from textbooks for targeted study sessions. Split ebook chapters into individual files for easier navigation. Separate lecture slides by topic for modular learning. Divide exam papers into sections for distributed grading among teaching assistants.
            </p>

            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
              <strong>Report & Presentation Management:</strong> Separate cover pages from main reports when the cover isn't needed. Extract executive summaries from detailed reports for quick distribution. Divide presentation slides for different audience segments. Split quarterly reports by department for focused review.
            </p>

            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
              <strong>Document Organization:</strong> Break down large PDF archives into manageable sections. Extract individual invoices from batch-generated billing PDFs. Separate scanned document batches into individual files. Divide meeting minutes by topic for targeted distribution to relevant teams.
            </p>

            <h3 style={{ fontSize: '22px', marginTop: '30px', marginBottom: '15px', color: '#1e293b' }}>
              Advanced Splitting Strategies
            </h3>

            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
              <strong>Strategic Range Planning:</strong> Before defining custom ranges, consider your document's logical structure. Split by chapters, sections, or topics rather than arbitrary page counts. This creates more meaningful, usable files that align with how the content will be consumed or distributed.
            </p>

            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
              <strong>File Size Management:</strong> Use splitting to reduce large PDF file sizes for email attachments. Most email providers limit attachments to 25MB—splitting a 50MB PDF into two 25MB files solves this problem instantly. The custom range feature lets you split strategically to keep files under size limits while maintaining logical content grouping.
            </p>

            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
              <strong>Security & Confidentiality:</strong> Split sensitive documents to share only necessary information. Extract public-facing pages while keeping confidential sections separate. Create redacted versions by splitting out sensitive pages. This approach provides better security than trying to redact within a complete document.
            </p>
          </>
        )}

        {operation === "compress-pdf" && (
          <>
            <h2 style={{ fontSize: '28px', marginBottom: '20px', color: '#1e293b' }}>
              Compress PDF Files Without Losing Quality - Complete Guide
            </h2>

            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
              Reduce PDF file sizes dramatically while maintaining document quality with SCENITH's intelligent compression technology. Large PDF files create problems: they're difficult to email, slow to upload, consume valuable storage space, and frustrate users with long download times. Our free PDF compressor solves these issues by reducing file sizes by up to 75% without compromising readability or visual quality, using advanced algorithms that optimize images, fonts, and document structure.
            </p>

            <h3 style={{ fontSize: '22px', marginTop: '30px', marginBottom: '15px', color: '#1e293b' }}>
              Flexible Compression Options Explained
            </h3>

            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
              <strong>Low Compression (75% of Original Size):</strong> This mode applies minimal compression, resulting in file sizes around 75% of the original. It's ideal for PDFs containing high-resolution images, detailed graphics, or professional photography where maintaining maximum visual quality is paramount. Use this for portfolios, brochures, art catalogs, architectural drawings, and any document where image fidelity matters more than file size. The compression is virtually imperceptible—text remains perfectly crisp, and images retain their full detail.
            </p>

            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
              <strong>Medium Compression (50% of Original Size):</strong> This balanced approach significantly reduces file sizes to approximately 50% of the original while maintaining excellent overall quality. It's perfect for most business documents, reports, presentations, and general-purpose PDFs. The compression algorithm optimizes image resolution where appropriate, removes redundant data, and streamlines document structure without degrading text quality or causing noticeable image artifacts. This is the recommended setting for the majority of use cases, offering substantial file size reduction without quality concerns.
            </p>

            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
              <strong>High Compression (25% of Original Size):</strong> This aggressive compression reduces file sizes to approximately 25% of the original, achieving maximum file size reduction. It's designed for situations where file size is the primary constraint—such as mobile optimization, slow internet connections, or strict file size requirements. While text remains readable and document structure is preserved, image quality may show slight degradation. This setting works best for text-heavy documents with minimal graphics, or when distributing drafts where perfect image quality isn't essential.
            </p>

            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
              <strong>Custom Compression (1-99% Target Size):</strong> For precise control, use the custom compression slider to target any file size percentage between 1% and 99%. This advanced option is perfect when you have specific file size requirements—such as meeting platform upload limits, adhering to company policies, or optimizing for particular use cases. The real-time preview shows your target size percentage, helping you balance quality and file size according to your exact needs.
            </p>

            <h3 style={{ fontSize: '22px', marginTop: '30px', marginBottom: '15px', color: '#1e293b' }}>
              How PDF Compression Works
            </h3>

            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
              Our compression algorithm uses multiple techniques to reduce file size intelligently. First, it analyzes your PDF's content structure to identify optimization opportunities. Images are resampled to appropriate resolutions—for example, a 300 DPI image intended for screen viewing is reduced to 150 DPI, cutting file size without visible quality loss on digital displays. The algorithm also removes duplicate embedded fonts, eliminates unused objects, and optimizes the PDF's internal structure for efficiency.
            </p>

            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
              Advanced techniques include flate compression for text streams, which reduces the size of text data without any quality loss. Color spaces are optimized—converting unnecessary CMYK images to RGB where appropriate. Metadata and unnecessary annotations are streamlined. The compression maintains PDF/A compatibility where applicable, ensuring your compressed files meet archival standards if required.
            </p>

            <h3 style={{ fontSize: '22px', marginTop: '30px', marginBottom: '15px', color: '#1e293b' }}>
              When to Compress PDFs
            </h3>

            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
              <strong>Email Attachments with Size Limits:</strong> Most email providers restrict attachment sizes to 10-25MB. Compressing large PDFs ensures successful delivery without splitting files or using external file-sharing services. This is crucial for business communications where simple email delivery is preferred over complex sharing workflows.
            </p>

            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
              <strong>Website & Mobile Optimization:</strong> Faster-loading PDFs improve user experience and SEO rankings. Compressed PDFs load quickly on mobile devices with limited bandwidth, reducing bounce rates and improving engagement. For downloadable resources on websites, smaller files mean faster downloads and happier users who are more likely to actually open and read your content.
            </p>

            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
              <strong>Cloud Storage & Backup:</strong> Reduce cloud storage costs by compressing archived PDFs. Services like Google Drive, Dropbox, and OneDrive charge based on storage usage—compressing files can significantly reduce monthly costs. Smaller files also sync faster across devices and speed up backup operations.
            </p>

            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
              <strong>Document Submission Portals:</strong> Many application portals, grant systems, and submission platforms enforce strict file size limits (often 2-10MB). Compressing your PDF ensures compliance with these requirements without sacrificing essential content or quality. This is especially important for competitive applications where missing deadlines due to file size issues could be costly.
            </p>

            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
              <strong>Mobile Device Distribution:</strong> Users accessing PDFs on smartphones or tablets benefit from smaller files that download quickly even on cellular connections. Compressed PDFs consume less mobile data, making them more accessible to users with limited data plans or those in areas with slower internet speeds.
            </p>

            <h3 style={{ fontSize: '22px', marginTop: '30px', marginBottom: '15px', color: '#1e293b' }}>
              Compression Best Practices
            </h3>

            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
              <strong>Choose Appropriate Compression Level:</strong> Match compression to your PDF's purpose. High-quality portfolios merit low compression, while internal draft reports can handle high compression. Consider your audience's needs—client-facing documents typically require higher quality than internal communications.
            </p>

            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
              <strong>Test Before Wide Distribution:</strong> Always review the compressed PDF before sending it to large groups or important contacts. Open it on different devices (desktop, mobile) to ensure quality meets your standards. This preview step catches potential issues before they reach your audience.
            </p>

            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
              <strong>Consider Source Quality:</strong> Compressing an already-compressed PDF yields diminishing returns and may introduce artifacts. If your source PDF is already optimized, additional compression might not be beneficial. Check your original file size—if it's already small relative to page count, compression may not be necessary.
            </p>

            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
              <strong>Balance Size and Quality:</strong> Use custom compression to find the sweet spot between file size and quality. Start with medium compression and adjust based on results. Remember that different content types (images vs. text) respond differently to compression—experiment to find optimal settings for your specific PDF.
            </p>
          </>
        )}

        {operation === "rotate-pdf" && (
          <>
            <h2 style={{ fontSize: '28px', marginBottom: '20px', color: '#1e293b' }}>
              Rotate PDF Pages Online - Fix Orientation Instantly
            </h2>

            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
              Fix incorrectly oriented PDF pages in seconds with SCENITH's free PDF rotation tool. Whether your document was scanned upside down, pages are in landscape when they should be portrait, or you need to correct mixed orientations from multiple sources, our tool makes corrections effortless. No software installation required—just upload, rotate, and download your properly oriented PDF ready for viewing, printing, or sharing.
            </p>

            <h3 style={{ fontSize: '22px', marginTop: '30px', marginBottom: '15px', color: '#1e293b' }}>
              Understanding Rotation Options
            </h3>

            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
              <strong>90° Clockwise (Right Rotation):</strong> This rotation turns all pages quarter-turn to the right, transforming landscape pages to portrait orientation or correcting pages that are rotated 90° counterclockwise. This is the most common rotation needed when documents are scanned horizontally or when converting landscape spreadsheets to standard portrait orientation for easier viewing on digital devices.
            </p>

            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
              <strong>90° Counter-Clockwise (Left Rotation):</strong> This rotation turns all pages quarter-turn to the left, perfect for converting portrait pages to landscape or correcting pages that are rotated 90° clockwise. Use this when you need landscape orientation for wide tables, charts, or when preparing documents for horizontal viewing on tablets or monitors.
            </p>

            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
              <strong>180° Rotation (Flip Upside Down):</strong> This rotation flips pages completely upside down, ideal for documents that were scanned or imported in the wrong orientation. This is particularly common with automatic document feeders that scan pages in reverse order, or when physical documents were accidentally placed upside down during scanning. The 180° rotation corrects these issues without changing the portrait/landscape orientation.
            </p>

            <h3 style={{ fontSize: '22px', marginTop: '30px', marginBottom: '15px', color: '#1e293b' }}>
              Common PDF Rotation Scenarios
            </h3>

            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
              <strong>Scanned Document Corrections:</strong> Multi-page documents scanned in batches often end up with mixed orientations. Some pages scan correctly while others are rotated incorrectly due to paper misalignment, automatic feeder issues, or manual scanning errors. After scanning, use the rotation tool to standardize all pages to the correct orientation before distribution or archiving.
            </p>

            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
              <strong>Mobile Phone Captures:</strong> PDFs created from smartphone cameras or scanning apps frequently have orientation issues. Phones automatically rotate images based on how the device is held, but this doesn't always match the desired viewing orientation. Documents photographed in portrait mode may need landscape orientation for optimal readability, and vice versa.
            </p>

            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
              <strong>Presentation Slide Corrections:</strong> Presentation slides exported from PowerPoint, Google Slides, or Keynote sometimes export in unexpected orientations, especially when combining slides from different sources or when presentation settings differ from export settings. Rotating these PDFs ensures slides display correctly whether viewed on screen or printed as handouts.
            </p>

            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
              <strong>Form Orientation Standardization:</strong> Business forms, applications, and official documents come in various orientations. Before combining multiple forms into a single PDF package, rotating them to consistent orientation improves professionalism and readability. This is especially important for regulatory submissions or client-facing document packages.
            </p>

            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
              <strong>Multi-Source Document Consolidation:</strong> When merging PDFs from different sources (emails, downloads, scans), inconsistent page orientations are common. Some documents arrive as landscape, others as portrait, creating a disjointed reading experience. Rotating pages to match ensures visual consistency throughout your combined document.
            </p>

            <h3 style={{ fontSize: '22px', marginTop: '30px', marginBottom: '15px', color: '#1e293b' }}>
              How to Rotate PDFs Effectively
            </h3>

          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
            <strong>Step 2: Select Rotation Direction</strong><br/>
            Choose the appropriate rotation option from the dropdown menu: 90° Right, 90° Left, or 180°. If you're unsure which rotation to use, consider the final viewing context—will the PDF be viewed on screen, printed, or both? Standard documents should be portrait orientation for easy reading on most devices.
          </p>

          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
            <strong>Step 3: Process and Verify</strong><br/>
            Click the process button to rotate all pages uniformly. Download the rotated PDF and open it to verify the orientation is correct. If the first rotation didn't achieve the desired result, you can upload the rotated PDF again and apply an additional rotation—the process is quick and unlimited.
          </p>

          <h3 style={{ fontSize: '22px', marginTop: '30px', marginBottom: '15px', color: '#1e293b' }}>
            Professional Rotation Tips
          </h3>

          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
            <strong>Batch Processing:</strong> If you have multiple PDFs that need the same rotation, process them one at a time through the tool. While this takes a few extra minutes, it ensures each document receives the correct orientation without risking batch errors.
          </p>

          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
            <strong>Quality Preservation:</strong> PDF rotation is a lossless operation—the process changes only the viewing metadata, not the actual content. Your text, images, and formatting remain at their original quality. There's no degradation from rotating PDFs multiple times if needed.
          </p>

          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
            <strong>Combine with Other Tools:</strong> After rotating, you might want to merge the corrected PDF with other documents or compress it for easier sharing. SCENITH's integrated PDF tools make it easy to chain operations—rotate first, then merge, compress, or split as needed.
          </p>
        </>
      )}

      {operation === "images-to-pdf" && (
        <>
          <h2 style={{ fontSize: '28px', marginBottom: '20px', color: '#1e293b' }}>
            Convert Images to PDF - JPG, PNG & More
          </h2>

          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
            Transform your photos and images into professional PDF documents instantly with SCENITH's free image to PDF converter. Our tool supports all popular image formats including JPG, JPEG, PNG, GIF, BMP, and TIFF. Combine multiple images into a single PDF file, perfect for creating photo albums, portfolios, presentations, documentation, or any project requiring organized image compilation with the universal compatibility of PDF format.
          </p>

          <h3 style={{ fontSize: '22px', marginTop: '30px', marginBottom: '15px', color: '#1e293b' }}>
            How Image to PDF Conversion Works
          </h3>

          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
            <strong>Step 1: Upload Your Images</strong><br/>
            Select multiple image files at once from your computer using the file picker, or drag and drop images directly into the upload area. The tool accepts unlimited images in various formats—mix JPG, PNG, and other formats in a single conversion. Each uploaded image appears in the interface with a thumbnail preview, making it easy to identify and organize your files.
          </p>

          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
            <strong>Step 2: Arrange Image Order</strong><br/>
            Images appear in upload order, but you can easily rearrange them by dragging and dropping thumbnails. The order you set determines the page sequence in your final PDF—first image becomes page 1, second image becomes page 2, and so on. This flexibility lets you create narratives, sequences, or logical flows from your image collection.
          </p>

          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
            <strong>Step 3: Convert to PDF</strong><br/>
            Click the generate button and our servers process your images into a single PDF file. Each image becomes a full page in the PDF, maintaining its original aspect ratio and quality. The conversion happens in seconds regardless of image count, and the resulting PDF downloads automatically with all images embedded at high quality.
          </p>

          <h3 style={{ fontSize: '22px', marginTop: '30px', marginBottom: '15px', color: '#1e293b' }}>
            Popular Use Cases for Image to PDF Conversion
          </h3>

          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
            <strong>Business Applications:</strong> Convert receipts and invoices into organized PDF documents for expense tracking and accounting. Transform business cards into searchable PDF archives. Create product catalogs from product photography. Compile presentation slides from individual image files. Generate visual reports combining charts, graphs, and screenshots into cohesive PDF presentations.
          </p>

          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
            <strong>Educational Projects:</strong> Combine lecture notes and diagrams into comprehensive study guides. Create PDF portfolios from artwork or photography for admissions applications. Convert scanned worksheets and handwritten notes into shareable digital PDFs. Compile research images and figures into annotated reference materials. Generate visual timelines from historical photographs.
          </p>

          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
            <strong>Personal & Creative:</strong> Create photo albums and family memory books that can be easily shared digitally or professionally printed. Compile recipes with step-by-step images into digital cookbooks. Organize travel photos into destination-specific PDF guides. Generate wedding albums or event documentation. Create visual journals combining photographs with scanned handwritten entries.
          </p>

          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
            <strong>Documentation & Archives:</strong> Convert document scans into searchable PDF files. Transform historical photographs into preserved digital archives. Compile real estate photos into property portfolios. Create equipment manuals from instruction sheet scans. Generate before-and-after comparison PDFs for projects or renovations.
          </p>

          <h3 style={{ fontSize: '22px', marginTop: '30px', marginBottom: '15px', color: '#1e293b' }}>
            Image Format Support & Quality
          </h3>

          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
            <strong>JPG/JPEG:</strong> The most common image format, perfect for photographs and complex images with many colors. JPG images convert seamlessly to PDF while maintaining their compressed format, resulting in reasonably sized PDF files suitable for web sharing and email attachments.
          </p>

          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
            <strong>PNG:</strong> Ideal for images requiring transparency, screenshots, graphics with text, and images requiring lossless quality. PNG images maintain their superior quality in PDF format, making them perfect for professional documentation, design portfolios, and technical diagrams.
          </p>

          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
            <strong>GIF, BMP, TIFF:</strong> Less common formats are fully supported. TIFF files, often used in professional photography and scanning, convert while preserving high quality. GIF animations become static images in the PDF. BMP files are converted efficiently despite their typically larger file sizes.
          </p>

          <h3 style={{ fontSize: '22px', marginTop: '30px', marginBottom: '15px', color: '#1e293b' }}>
            Tips for High-Quality Image PDFs
          </h3>

          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
            <strong>Image Resolution Matters:</strong> Higher resolution images produce better-looking PDFs but result in larger file sizes. For screen viewing, images at 150-200 DPI provide excellent quality. For professional printing, use 300 DPI or higher. If your final PDF is too large, use our compression tool afterward to reduce size while maintaining visual quality.
          </p>

          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
            <strong>Consistent Image Sizes:</strong> For the most professional-looking results, use images with similar dimensions and aspect ratios. This creates visual consistency across PDF pages. If mixing portrait and landscape images, group them separately or use editing software to standardize orientations before conversion.
          </p>

          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
            <strong>File Naming for Organization:</strong> Before uploading, rename your image files with sequential numbers or descriptive names (e.g., "01-cover.jpg", "02-introduction.jpg"). This makes it easier to arrange them in the correct order and identify specific images during the conversion process.
          </p>

          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
            <strong>Consider Final Use:</strong> Think about how your PDF will be used. Web-shared PDFs benefit from moderate compression. Professionally printed portfolios need maximum quality. Client presentations require a balance. Adjust your source image quality accordingly—don't sacrifice quality for files requiring professional presentation.
          </p>
        </>
      )}

      {operation === "pdf-to-images" && (
        <>
          <h2 style={{ fontSize: '28px', marginBottom: '20px', color: '#1e293b' }}>
            Extract PDF Pages as High-Quality Images
          </h2>

          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
            Convert every page of your PDF into individual high-quality images with SCENITH's free PDF to image converter. Our tool supports both JPG and PNG formats, maintaining the original quality and resolution of your PDF content. Perfect for extracting graphics, creating thumbnails, sharing specific pages on social media, or using PDF content in image-based applications and presentations.
          </p>

          <h3 style={{ fontSize: '22px', marginTop: '30px', marginBottom: '15px', color: '#1e293b' }}>
            Why Convert PDF to Images?
          </h3>

          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
            <strong>Social Media Sharing:</strong> Share PDF content on platforms that don't support PDF uploads directly. Instagram, Facebook, Twitter, and LinkedIn all work seamlessly with images but have limited PDF support. Convert infographics, charts, quotes, and educational content from PDFs into shareable image formats. Each page becomes an individual image perfect for carousel posts, stories, or standard updates.
          </p>

          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
            <strong>Web Publishing & Blogging:</strong> Extract images from PDFs for blog posts and website content. Create thumbnails for PDF previews and download links. Generate image galleries from PDF portfolios. Embed specific PDF pages as images in articles without requiring readers to download entire documents. This improves page load times and user experience.
          </p>

          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
            <strong>Design & Editing Applications:</strong> Import PDF pages into graphic design software like Photoshop, Illustrator, or Canva. Edit PDF content in image editors that don't support PDF format. Create mockups and presentations from PDF materials. Extract diagrams, charts, or graphics from technical documents for reuse in new contexts.
          </p>

          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
            <strong>Email & Marketing:</strong> Use PDF pages as email newsletter images for better compatibility across email clients. Create promotional graphics from product sheets and brochures. Generate thumbnail previews for document libraries. Extract key slides from presentation PDFs for marketing materials.
          </p>

          <h3 style={{ fontSize: '22px', marginTop: '30px', marginBottom: '15px', color: '#1e293b' }}>
            Image Quality & Format Selection
          </h3>

          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
            All images are extracted at high resolution to ensure clarity and readability. Our conversion process renders PDF pages at optimal quality, capturing all text, graphics, and formatting details. The resulting images are suitable for both screen viewing and print applications, depending on the format you choose.
          </p>

          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
            <strong>JPG Format:</strong> Choose JPG for smaller file sizes and universal compatibility. JPG images are ideal for photographs, complex graphics, and situations where file size matters. They work everywhere—on websites, in emails, across all devices and platforms. The compression is optimized to maintain quality while reducing file size, making JPG perfect for web sharing and general use.
          </p>

          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
            <strong>PNG Format:</strong> Choose PNG for lossless quality and transparency support. PNG images preserve every detail without compression artifacts, making them ideal for text-heavy pages, technical diagrams, screenshots, and graphics requiring perfect clarity. PNG also supports transparent backgrounds, useful when extracting graphics for overlay on other designs.
          </p>

          <h3 style={{ fontSize: '22px', marginTop: '30px', marginBottom: '15px', color: '#1e293b' }}>
            How to Use PDF to Image Converter
          </h3>

          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
            <strong>Step 1: Upload Your PDF</strong><br/>
            Select your PDF file using the upload button or drag it into the browser. The tool analyzes your document and displays the total page count, preparing each page for conversion. Large PDFs may take a few seconds to process initially.
          </p>

          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
            <strong>Step 2: Select Output Format</strong><br/>
            Choose between JPG or PNG based on your needs. Consider your use case: JPG for general sharing and web use, PNG for maximum quality and situations requiring transparency. You can always convert the same PDF again in the alternate format if needed.
          </p>

          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
            <strong>Step 3: Convert and Download</strong><br/>
            Click the convert button and wait for processing to complete. Each PDF page becomes a separate image file. Download options include individual image downloads or a ZIP file containing all pages. Images are named sequentially (page-1.jpg, page-2.jpg, etc.) for easy identification and organization.
          </p>

          <h3 style={{ fontSize: '22px', marginTop: '30px', marginBottom: '15px', color: '#1e293b' }}>
            Best Practices for PDF to Image Conversion
          </h3>

          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
            <strong>Choose Format Wisely:</strong> Use JPG for photographic content, marketing materials, and general sharing where file size matters. Use PNG for technical documentation, diagrams, screenshots, and content requiring text clarity or transparent backgrounds.
          </p>

          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
            <strong>Consider Resolution Needs:</strong> Our converter maintains high quality suitable for most uses. For specialized applications like large-format printing, verify the output resolution meets your requirements. Test with a small sample before converting extensive multi-page documents.
          </p>

          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
            <strong>Organize Downloaded Images:</strong> Create a dedicated folder for extracted images before downloading. Sequential numbering helps maintain page order. If extracting from multiple PDFs, use descriptive folder names to avoid confusion between different document sources.
          </p>
        </>
      )}

      {operation === "add-watermark" && (
        <>
          <h2 style={{ fontSize: '28px', marginBottom: '20px', color: '#1e293b' }}>
            Add Watermark to PDF Documents Online
          </h2>

          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
            Protect your PDF documents and establish ownership by adding custom text watermarks with SCENITH's free watermarking tool. Whether you need to brand your PDFs, mark them as confidential, add copyright notices, or include any custom text to prevent unauthorized use, our tool applies professional watermarks that clearly identify document ownership while maintaining readability.
          </p>

          <h3 style={{ fontSize: '22px', marginTop: '30px', marginBottom: '15px', color: '#1e293b' }}>
            Common Watermark Uses & Applications
          </h3>

          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
            <strong>Copyright Protection:</strong> Add "© 2024 Your Company Name" to protect intellectual property and clearly identify ownership. Mark documents with copyright symbols and ownership information to deter unauthorized reproduction. This is essential for original research, creative works, proprietary designs, and any content you want to protect legally.
          </p>

          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
            <strong>Confidentiality Marking:</strong> Label sensitive documents with "CONFIDENTIAL", "INTERNAL USE ONLY", "DRAFT", or "PROPRIETARY" to clearly indicate restricted distribution. This helps prevent accidental sharing of sensitive information and provides visual reminders about document handling requirements. Watermarks are harder to remove than headers, providing better security.
          </p>

          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
            <strong>Brand Identity & Marketing:</strong> Add company names, websites, or brand slogans to marketing materials, white papers, and reports. Brand presentations and proposals with your business identity. Include contact information or website URLs to maintain attribution when documents are shared. This passive marketing ensures your brand travels with your content.
          </p>

          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
            <strong>Document Status & Version Control:</strong> Mark documents as "SAMPLE", "PROOF", "REVIEW COPY", "NOT FOR DISTRIBUTION", or "PRELIMINARY DRAFT" to clearly indicate their purpose and status. Add version numbers, dates, or revision markers. This prevents confusion when multiple document versions circulate and helps teams identify current versus outdated files.
          </p>

          <h3 style={{ fontSize: '22px', marginTop: '30px', marginBottom: '15px', color: '#1e293b' }}>
            Professional Watermarking Features
          </h3>

          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
            <strong>Consistent Application:</strong> The watermark is applied to every page of your PDF, ensuring consistent protection throughout the document. There's no way to accidentally omit pages—the automation ensures complete coverage from first page to last.
          </p>

          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
            <strong>Balanced Visibility:</strong> Text watermarks are designed to be subtle yet visible—they don't obscure content or make documents difficult to read, but they're prominent enough to clearly communicate their message. This balance maintains document usability while providing visual protection.
          </p>

          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
            <strong>Permanent Integration:</strong> Once added, the watermark becomes a permanent part of the PDF. It can't be easily removed without specialized software and authorization. This provides security for confidential documents and copyright protection for creative works, as removing the watermark requires deliberate action and technical knowledge.
          </p>

          <h3 style={{ fontSize: '22px', marginTop: '30px', marginBottom: '15px', color: '#1e293b' }}>
            Watermark Best Practices
          </h3>

          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
            <strong>Keep Text Concise:</strong> Effective watermarks use brief, clear text. "CONFIDENTIAL" is more effective than "This document contains confidential information." Short watermarks are easier to read and less intrusive on document content.
          </p>

          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
            <strong>Use Appropriate Messaging:</strong> Match watermark text to document purpose. Legal documents might use "PRIVILEGED & CONFIDENTIAL", drafts might say "DRAFT - NOT FOR DISTRIBUTION", samples might read "SAMPLE COPY", and copyrighted works should include "© [Year] [Owner]".
          </p>

          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
            <strong>Consider Your Audience:</strong> Professional documents shared externally should use professional watermark language. Internal documents can use more casual terms. Client-facing materials might include contact information. Educational materials might reference source attribution.
          </p>

          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
            <strong>Test Before Distribution:</strong> Always preview the watermarked PDF before sending to large groups. Verify that the watermark appears correctly on all pages, doesn't obscure critical content, and conveys the intended message clearly. Make any necessary text adjustments before final distribution.
          </p>

          <h3 style={{ fontSize: '22px', marginTop: '30px', marginBottom: '15px', color: '#1e293b' }}>
            Legal & Security Considerations
          </h3>

          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
            While watermarks provide visual deterrence and identification, they're not foolproof security measures. Determined individuals with technical skills can potentially remove watermarks. For highly sensitive documents requiring strict access control, combine watermarking with password protection (using our Lock PDF tool), access restrictions, and proper document management policies.
          </p>
        </>
      )}

      {operation === "lock-pdf" && (
        <>
          <h2 style={{ fontSize: '28px', marginBottom: '20px', color: '#1e293b' }}>
            Password Protect Your PDF Files - Secure & Encrypt
          </h2>

          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
            Secure your sensitive PDF documents with password protection and encryption using SCENITH's free PDF locker. Our tool uses industry-standard encryption protocols to prevent unauthorized access, ensuring that only people with the password can open and view your documents. Perfect for confidential business files, personal documents, financial records, legal contracts, and any PDF containing information that requires restricted access.
          </p>

          <h3 style={{ fontSize: '22px', marginTop: '30px', marginBottom: '15px', color: '#1e293b' }}>
            Why Lock Your PDFs?
          </h3>

          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
            <strong>Confidential Business Documents:</strong> Protect contracts, agreements, and legal documents from unauthorized viewing. Secure HR files, employee records, salary information, and payroll data. Lock financial statements, tax documents, and accounting records. Encrypt strategic plans, competitive analyses, and proprietary research. Ensure merger and acquisition documents remain confidential during negotiations.
          </p>

          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
            <strong>Client Privacy & Professional Services:</strong> Secure client information and case files for legal, medical, or consulting practices. Protect patient records and medical documents in compliance with HIPAA regulations. Lock personal data and sensitive client communications. Encrypt financial advisor portfolios and investment documents. Safeguard architectural plans and engineering designs shared with clients.
          </p>

          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
            <strong>Intellectual Property Protection:</strong> Protect proprietary designs, blueprints, and technical specifications. Secure research papers and unpublished work before submission. Lock business plans and strategic documents during funding rounds. Encrypt product development roadmaps and innovation proposals. Safeguard creative works, manuscripts, and original content.
          </p>

          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
            <strong>Personal Document Security:</strong> Protect tax returns and financial records stored digitally. Secure personal identification documents (passport copies, birth certificates). Lock estate planning documents and legal papers. Encrypt medical records and insurance information. Safeguard private correspondence and sensitive personal files.
          </p>

          <h3 style={{ fontSize: '22px', marginTop: '30px', marginBottom: '15px', color: '#1e293b' }}>
            How PDF Encryption Works
          </h3>

          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
            When you lock a PDF with our tool, strong encryption is applied to the entire document using your chosen password. The encryption scrambles the PDF content, making it unreadable without the correct password. This process uses industry-standard encryption algorithms that provide robust security against unauthorized access attempts.
          </p>

          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
            <strong>Encryption is Permanent:</strong> Once encrypted, the file requires the password every time it's opened, regardless of where it's stored or shared. The encryption travels with the document—whether sent via email, uploaded to cloud storage, shared via USB drive, or downloaded from websites. This ensures continuous protection throughout the document's lifecycle.
          </p>

          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
            <strong>Cross-Platform Compatibility:</strong> Encrypted PDFs work across all devices and platforms. Recipients can open password-protected PDFs using any PDF reader (Adobe Acrobat, Preview, web browsers) on Windows, Mac, Linux, iOS, or Android. The encryption standard is universal, ensuring broad compatibility while maintaining security.
          </p>

          <h3 style={{ fontSize: '22px', marginTop: '30px', marginBottom: '15px', color: '#1e293b' }}>
            Password Best Practices
          </h3>

          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
            <strong>Create Strong Passwords:</strong> Use passwords with at least 12 characters combining uppercase and lowercase letters, numbers, and special symbols. Avoid common words, personal information, or easily guessable patterns. Strong passwords like "7mK#9pL@2nX$4qR" provide significantly better security than weak ones like "password123".
          </p>

          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
            <strong>Password Management:</strong> Store passwords securely using a password manager—never write them in emails or unsecured documents. For extremely sensitive files, consider using a unique password not used elsewhere. Always remember your password; encrypted PDFs cannot be recovered without it.
          </p>

          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
            <strong>Secure Password Sharing:</strong> When sharing password-protected PDFs, transmit the password through a different channel than the file itself. For example, email the encrypted PDF but send the password via phone call, text message, or separate encrypted message. This two-factor approach significantly enhances security.
          </p>

          <h3 style={{ fontSize: '22px', marginTop: '30px', marginBottom: '15px', color: '#1e293b' }}>
            Important Security Notes
          </h3>

          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
            <strong>Password Recovery is Impossible:</strong> If you forget your password, there is no way to recover or reset it. The encryption is designed to be unbreakable—this is what makes it secure. Before locking important documents, ensure you've stored the password safely and confirmed it works correctly.
          </p>

          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
            <strong>Complementary Security Measures:</strong> Password protection should be part of a comprehensive security strategy. Combine PDF encryption with secure file storage, access logging, regular security audits, and staff training on document handling procedures. For highly sensitive information, consider additional measures like digital rights management (DRM) or secure file sharing platforms.
          </p>
        </>
      )}

      {operation === "unlock-pdf" && (
        <>
          <h2 style={{ fontSize: '28px', marginBottom: '20px', color: '#1e293b' }}>
            Remove Password Protection from PDFs
          </h2>

          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
            Unlock password-protected PDF files you own by providing the correct password with SCENITH's free PDF unlocking tool. Our service removes password restrictions, allowing you to freely view, edit, print, and share your documents without repeated password entries. This is particularly useful when you have legitimate access to a PDF but find the password protection inconvenient for regular use, or when consolidating protected documents into workflows that don't support encrypted files.
          </p>

          <h3 style={{ fontSize: '22px', marginTop: '30px', marginBottom: '15px', color: '#1e293b' }}>
            When to Unlock PDFs
          </h3>

          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
            <strong>Your Own Documents:</strong> Remove passwords from PDFs you previously locked when the protection is no longer needed. Perhaps you encrypted files for temporary security during a project that's now complete, or you password-protected documents before understanding they'd be used in automated workflows. Unlocking old documents where you've forgotten why they were protected can simplify digital file management.
          </p>

          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
            <strong>Received Files with Authorization:</strong> Unlock PDFs sent to you with a password for easier access during collaborative projects. Remove protection from documents where you have legitimate authorization but need to integrate them into systems that don't support encrypted PDFs. Extract content from password-protected templates or resources you've purchased or licensed.
          </p>

         <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
               <strong>Archival & Organization:</strong> Remove passwords from archived documents to simplify long-term storage and retrieval. Unlock protected files before consolidating into searchable document databases. Prepare encrypted PDFs for backup systems that can't process password-protected files. Standardize document security across organizational archives.
             </p>

             <h3 style={{ fontSize: '22px', marginTop: '30px', marginBottom: '15px', color: '#1e293b' }}>
               How PDF Unlocking Works
             </h3>

             <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
               <strong>Step 1: Upload Protected PDF</strong><br/>
               Select your password-protected PDF file using the upload button or drag it into the browser. The tool detects that the file is encrypted and prompts for the password. Note that file size and page count may not be visible until after successful decryption.
             </p>

             <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
               <strong>Step 2: Enter Password</strong><br/>
               Type the correct password in the provided field. Passwords are case-sensitive and must match exactly—including all letters, numbers, symbols, and spaces. If you're unsure of the password, try common variations or check with the person who encrypted the document.
             </p>

             <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
               <strong>Step 3: Unlock and Download</strong><br/>
               Click the unlock button to process the file. Our servers verify the password, decrypt the PDF, and generate an unprotected version. The unlocked PDF downloads automatically, functionally identical to the original but without password protection. You can now open, edit, print, and share it freely.
             </p>

             <h3 style={{ fontSize: '22px', marginTop: '30px', marginBottom: '15px', color: '#1e293b' }}>
               Important Legal & Ethical Notes
             </h3>

             <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
               <strong>You Must Know the Password:</strong> This tool cannot crack or bypass unknown passwords. PDF encryption is designed to be secure—without the correct password, the file cannot be decrypted. If you've forgotten the password to your own document, password recovery is not possible. This is not a limitation of our tool but a fundamental characteristic of PDF encryption security.
             </p>

             <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
               <strong>Only Unlock Authorized Documents:</strong> Use this tool only for PDFs you own or have explicit permission to unlock. Removing password protection from documents without authorization may violate copyright laws, breach confidentiality agreements, or constitute unauthorized access to protected information. Always respect intellectual property rights and confidentiality obligations.
             </p>

             <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
               <strong>Security Implications:</strong> Once unlocked, the PDF no longer has password protection. Anyone who accesses the file can open it freely. If the document contains sensitive information that still requires protection, consider using other security measures like access-controlled storage, encryption at rest, or re-locking it with a new password appropriate for its current use case.
             </p>

             <h3 style={{ fontSize: '22px', marginTop: '30px', marginBottom: '15px', color: '#1e293b' }}>
               After Unlocking: Best Practices
             </h3>

             <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
               <strong>Secure Storage:</strong> Store unlocked PDFs in protected locations if they contain sensitive information. Use encrypted folders, password-protected drives, or secure cloud storage with access controls. Just because the PDF itself isn't password-protected doesn't mean it should be accessible to everyone.
             </p>

             <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
               <strong>Consider Re-Protection:</strong> If you unlocked a PDF for a specific purpose (like editing or merging), consider re-locking it afterward if ongoing protection is appropriate. Use our Lock PDF tool to apply new encryption with an updated password that fits your current security requirements.
             </p>

             <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
               <strong>Document Your Actions:</strong> Maintain records of why documents were unlocked, especially in professional or regulated environments. This documentation helps with compliance, audits, and information governance requirements. Track which files were decrypted, when, and for what purpose.
             </p>
           </>
         )}
          </div>
        )}
      </div>
    );
  };

  export default PDFToolsWorkspace;