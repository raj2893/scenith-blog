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
    </div>
  );
};

export default PDFToolsWorkspace;