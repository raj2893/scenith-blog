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
  const [imagePreviewUrls, setImagePreviewUrls] = useState<Map<number, string>>(new Map());
  const [draggedImageIndex, setDraggedImageIndex] = useState<number | null>(null);
  const [dragOverImageIndex, setDragOverImageIndex] = useState<number | null>(null);

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
  const [showReorderConfirmation, setShowReorderConfirmation] = useState(false);
  const [pendingPdfReorder, setPendingPdfReorder] = useState<{
    draggedIndex: number;
    dropIndex: number;
  } | null>(null);
  const [hasManuallyReorderedPages, setHasManuallyReorderedPages] = useState(false);
  const [rotationPages, setRotationPages] = useState<string>("all");
  const [customRotationPages, setCustomRotationPages] = useState<string>("");
  const [showPageModal, setShowPageModal] = useState(false);
  const [modalPageData, setModalPageData] = useState<{
    uploadId: number;
    pageNumber: number;
    fileName: string;
    totalPages: number;
  } | null>(null);
    const [compressionMode, setCompressionMode] = useState<string>("preset");
   const [targetFileSize, setTargetFileSize] = useState<number>(10);
   const [targetFileSizeUnit, setTargetFileSizeUnit] = useState<string>("MB");
   const originalSizeBytes = uploadedFiles[0]?.fileSizeBytes || 0;
   const targetInBytes = targetFileSize
     ? targetFileSize * (targetFileSizeUnit === 'MB' ? 1024 * 1024 : 1024)
     : 0;
     const isTargetTooLarge =
       originalSizeBytes > 0 &&
       targetInBytes > originalSizeBytes &&
       targetFileSize > 0 &&
       !isNaN(targetFileSize);

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
  setHasManuallyReorderedPages(true); // Mark that pages have been manually reordered

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

// Keyboard navigation for modal
useEffect(() => {
  const handleKeyPress = (e: KeyboardEvent) => {
    if (!showPageModal) return;

    if (e.key === 'Escape') {
      setShowPageModal(false);
    } else if (e.key === 'ArrowLeft' && previewPageIndex > 0) {
      const newIndex = previewPageIndex - 1;
      setPreviewPageIndex(newIndex);
      const prevPage = selectedPdfPages[newIndex];
      setModalPageData({
        uploadId: prevPage.uploadId,
        pageNumber: prevPage.pageNumber,
        fileName: prevPage.fileName,
        totalPages: prevPage.totalPages
      });
    } else if (e.key === 'ArrowRight' && previewPageIndex < selectedPdfPages.length - 1) {
      const newIndex = previewPageIndex + 1;
      setPreviewPageIndex(newIndex);
      const nextPage = selectedPdfPages[newIndex];
      setModalPageData({
        uploadId: nextPage.uploadId,
        pageNumber: nextPage.pageNumber,
        fileName: nextPage.fileName,
        totalPages: nextPage.totalPages
      });
    }
  };

  window.addEventListener('keydown', handleKeyPress);
  return () => window.removeEventListener('keydown', handleKeyPress);
}, [showPageModal, previewPageIndex, selectedPdfPages]);

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

      const newUploads = response.data.uploads;
      setUploadedFiles((prev) => [...prev, ...newUploads]);

      // Generate preview URLs for images
      if (operation === "images-to-pdf") {
        const newPreviews = new Map(imagePreviewUrls);
        for (let i = 0; i < files.length; i++) {
          const file = files[i];
          if (file.type.startsWith('image/')) {
            const previewUrl = URL.createObjectURL(file);
            const uploadId = newUploads[i]?.id;
            if (uploadId) {
              newPreviews.set(uploadId, previewUrl);
            }
          }
        }
        setImagePreviewUrls(newPreviews);
      }

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

      // Clean up preview URL for images
      if (operation === "images-to-pdf" && imagePreviewUrls.has(uploadId)) {
        const previewUrl = imagePreviewUrls.get(uploadId);
        if (previewUrl) {
          URL.revokeObjectURL(previewUrl);
        }
        const newPreviews = new Map(imagePreviewUrls);
        newPreviews.delete(uploadId);
        setImagePreviewUrls(newPreviews);
      }

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

  // Image drag and drop handlers for images-to-pdf
  const handleImageDragStart = (index: number) => {
    setDraggedImageIndex(index);
  };

  const handleImageDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    setDragOverImageIndex(index);
  };

  const handleImageDrop = (index: number) => {
    if (draggedImageIndex === null) return;

    const newFiles = [...uploadedFiles];
    const [draggedFile] = newFiles.splice(draggedImageIndex, 1);
    newFiles.splice(index, 0, draggedFile);

    setUploadedFiles(newFiles);
    setDraggedImageIndex(null);
    setDragOverImageIndex(null);
  };

  // Cleanup preview URLs on unmount or operation change
  useEffect(() => {
    return () => {
      imagePreviewUrls.forEach(url => URL.revokeObjectURL(url));
    };
  }, [operation]);

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

    // Check if user has manually reordered pages
    if (hasManuallyReorderedPages && operation === "merge-pdf") {
      // Store the pending reorder and show confirmation
      setPendingPdfReorder({ draggedIndex, dropIndex: index });
      setShowReorderConfirmation(true);
      setDraggedIndex(null);
      setDragOverIndex(null);
      return;
    }

    // Proceed with PDF reordering
    executePdfReorder(draggedIndex, index);
  };

  // New function to execute PDF reordering
  // New function to execute PDF reordering
  const executePdfReorder = (fromIndex: number, toIndex: number) => {
    const newFiles = [...uploadedFiles];
    const [draggedFile] = newFiles.splice(fromIndex, 1);
    newFiles.splice(toIndex, 0, draggedFile);

    setUploadedFiles(newFiles);

    // Reorder pages according to new PDF order AND reset to default page order within each PDF
    if (operation === "merge-pdf") {
      const reorderedPages: typeof selectedPdfPages = [];

      newFiles.forEach(file => {
        // Get the page count for this PDF
        const pageCount = pdfPageCounts.get(file.id);

        if (pageCount) {
          // Recreate pages in their original sequential order (1, 2, 3, ...)
          const pagesInOriginalOrder = Array.from({ length: pageCount }, (_, i) => ({
            uploadId: file.id,
            fileName: file.fileName,
            pageNumber: i + 1,
            totalPages: pageCount
          }));

          reorderedPages.push(...pagesInOriginalOrder);
        } else {
          // Fallback: if page count not available, use existing pages but sort them
          const pagesForThisFile = selectedPdfPages
            .filter(page => page.uploadId === file.id)
            .sort((a, b) => a.pageNumber - b.pageNumber); // Sort by original page number

          reorderedPages.push(...pagesForThisFile);
        }
      });

      setSelectedPdfPages(reorderedPages);
      setPreviewPageIndex(0); // Reset preview to first page
    }

    setDraggedIndex(null);
    setDragOverIndex(null);
  };

  // Handle confirmation response
  const handleReorderConfirmation = (confirmed: boolean) => {
    setShowReorderConfirmation(false);

    if (confirmed && pendingPdfReorder) {
      // Reset manual reordering flag and execute PDF reorder
      setHasManuallyReorderedPages(false);
      executePdfReorder(pendingPdfReorder.draggedIndex, pendingPdfReorder.dropIndex);
    }

    setPendingPdfReorder(null);
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

   if (compressionMode === "filesize") {
     // Convert to bytes based on selected unit
     const multiplier = targetFileSizeUnit === "MB" ? 1024 * 1024 : 1024;
     const targetBytes = targetFileSize * multiplier;

     params.compressionMode = "filesize";
     params.targetFileSizeBytes = targetBytes;
   } else if (compressionMode === "percentage") {
     params.compressionMode = "percentage";
     params.customPercentage = compressionPercentage;
   } else {
     params.compressionMode = "preset";
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

  case "rotate-pdf": {
    const rotateParams: any = {
      uploadId: uploadIds[0],
      direction: rotationDegrees,
    };

    if (rotationPages === "custom") {
      if (!customRotationPages.trim()) {
        showMessage('error', "Please enter page numbers to rotate");
        setIsProcessing(false);
        return;
      }

      // Validate page numbers before processing
      if (!validateRotationPages(customRotationPages.trim())) {
        setIsProcessing(false);
        return;
      }

      rotateParams.pages = customRotationPages.trim();
    } else {
      rotateParams.pages = "all";
    }

    response = await axios.post(
      `${API_BASE_URL}/api/documents/rotate-pdf`,
      null,
      {
        params: rotateParams,
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    break;
  }

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

// Validate custom rotation pages
const validateRotationPages = (pageSpec: string): boolean => {
  if (!pageSpec || pdfPageCount === 0) return true;

  const parts = pageSpec.split(',');
  const invalidPages: string[] = [];

  for (const part of parts) {
    const trimmedPart = part.trim();

    if (trimmedPart.includes('-')) {
      // Range validation (e.g., "1-5")
      const [start, end] = trimmedPart.split('-').map(s => s.trim());
      const startNum = parseInt(start);
      const endNum = parseInt(end);

      if (isNaN(startNum) || isNaN(endNum)) {
        invalidPages.push(trimmedPart);
        continue;
      }

      if (startNum > pdfPageCount || endNum > pdfPageCount) {
        invalidPages.push(trimmedPart);
      } else if (startNum < 1 || endNum < 1) {
        invalidPages.push(trimmedPart);
      } else if (startNum > endNum) {
        invalidPages.push(trimmedPart);
      }
    } else {
      // Single page validation (e.g., "3")
      const pageNum = parseInt(trimmedPart);

      if (isNaN(pageNum)) {
        invalidPages.push(trimmedPart);
        continue;
      }

      if (pageNum < 1 || pageNum > pdfPageCount) {
        invalidPages.push(trimmedPart);
      }
    }
  }

  if (invalidPages.length > 0) {
    showMessage('error',
      `Invalid page numbers detected: "${invalidPages.join(', ')}". ` +
      `Valid page range is 1-${pdfPageCount}.`
    );
    return false;
  }

  return true;
};

  // Call this function when a PDF is uploaded for split operation
  useEffect(() => {
    if ((operation === "split-pdf" || operation === "rotate-pdf") && uploadedFiles.length > 0) {
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
// Function to insert PDF at specific position
const handleInsertPdfAtPosition = async (files: FileList | null, insertIndex: number) => {
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

    const newUploads = response.data.uploads;

    // Insert new uploads at the specified position
    setUploadedFiles((prev) => {
      const updated = [...prev];
      updated.splice(insertIndex, 0, ...newUploads);
      return updated;
    });

    // Fetch page counts for new PDFs and insert their pages at correct position
    for (const upload of newUploads) {
      try {
        const pageCountResponse = await axios.get(
          `${API_BASE_URL}/api/documents/page-count/${upload.id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        const pageCount = pageCountResponse.data.pageCount;
        setPdfPageCounts(prev => new Map(prev).set(upload.id, pageCount));

        // Create pages for this PDF
        const pages = Array.from({ length: pageCount }, (_, i) => ({
          uploadId: upload.id,
          fileName: upload.fileName,
          pageNumber: i + 1,
          totalPages: pageCount
        }));

        // Calculate where to insert pages based on PDFs before this position
        setSelectedPdfPages(prev => {
          const updated = [...prev];

          // Find the index where pages should be inserted
          let pageInsertIndex = 0;
          const pdfsBeforeInsert = uploadedFiles.slice(0, insertIndex);

          for (const pdf of pdfsBeforeInsert) {
            const pagesForPdf = prev.filter(p => p.uploadId === pdf.id);
            pageInsertIndex += pagesForPdf.length;
          }

          updated.splice(pageInsertIndex, 0, ...pages);
          return updated;
        });
      } catch (err) {
        console.error(`Failed to fetch page count for ${upload.id}:`, err);
      }
    }

    showMessage('success', `${files.length} file(s) added successfully!`);
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

  // Reset workflow
  const handleReset = () => {
    setUploadedFiles([]);
    setResult(null);
    setError(null);
    setSuccess(null);
    setPassword("");
    setWatermarkText("CONFIDENTIAL");
    setPageRanges("");
    setRotationPages("all");
    setCustomRotationPages("");
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
        {/* Three-Section Layout for Merge PDF */}
        {operation === "merge-pdf" && uploadedFiles.length > 0 && (
          <>
           {/* Mobile Notice */}
               <div className="mobile-merge-notice merge-layout-mobile-only">
                 <div className="mobile-merge-notice-icon">💻📱</div>
                 <h4>Limited Mobile View</h4>
                 <p style={{ marginBottom: '8px' }}>
                   You can reorder PDFs below by dragging and dropping them.
                 </p>
                 <p style={{
                   background: 'rgba(255, 255, 255, 0.15)',
                   padding: '8px 12px',
                   borderRadius: '8px',
                   fontSize: '12px',
                   fontWeight: 600,
                   margin: 0
                 }}>
                   ⚠️ For better control over PDF merging (page-level reordering, preview, and individual page management),
                   please use a laptop or desktop computer.
                 </p>
               </div>

            {/* Mobile View - PDF List Only */}
            <div className="merge-layout-mobile-only" style={{
              marginTop: '20px'
            }}>
              <div style={{
                border: '2px solid #e2e8f0',
                borderRadius: '12px',
                padding: '16px',
                background: 'white'
              }}>
                <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 600, textAlign: 'center' }}>
                  Uploaded PDFs ({uploadedFiles.length})
                </h3>
                <p style={{
                          fontSize: '13px',
                          color: '#64748b',
                          textAlign: 'center',
                          marginBottom: '16px',
                          lineHeight: '1.5',
                          background: '#f1f5f9',
                          padding: '10px',
                          borderRadius: '8px',
                          border: '1px solid #e2e8f0'
                        }}>
                          <strong>📋 Instructions:</strong> Press and hold a PDF card, then drag it up or down to reorder.
                          PDFs will be merged in the order shown below.
                        </p>

                {uploadedFiles.map((file, index) => (
                  <div key={file.id} style={{ marginBottom: '12px' }}>
                    {/* Insert Button Above */}
                    {index === 0 && (
                      <button
                        onClick={() => fileInputRef.current?.click()}
                        style={{
                          width: '100%',
                          padding: '10px',
                          marginBottom: '8px',
                          border: '2px dashed #667eea',
                          borderRadius: '8px',
                          background: 'rgba(102, 126, 234, 0.05)',
                          color: '#667eea',
                          cursor: 'pointer',
                          fontSize: '14px',
                          fontWeight: 600,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '8px'
                        }}
                      >
                        <FaPlus size={14} /> Add PDF Here
                      </button>
                    )}

                    {/* PDF Card */}
                    <div
                                  draggable
                                  onDragStart={() => handleDragStart(index)}
                                  onDragOver={(e) => {
                                    e.preventDefault();
                                    handleDragOver(e, index);
                                  }}
                                  onDrop={(e) => {
                                    e.preventDefault();
                                    handleDrop(index);
                                  }}
                                  onDragEnd={() => {
                                    setDraggedIndex(null);
                                    setDragOverIndex(null);
                                  }}
                                  onTouchStart={(e) => {
                                    // Enable touch drag for mobile
                                    handleDragStart(index);
                                  }}
                                  onTouchMove={(e) => {
                                    e.preventDefault();
                                    // Find element under touch point
                                    const touch = e.touches[0];
                                    const elementBelow = document.elementFromPoint(touch.clientX, touch.clientY);
                                    const cardElements = document.querySelectorAll('[data-pdf-card]');
                                    cardElements.forEach((el, idx) => {
                                      if (el.contains(elementBelow)) {
                                        handleDragOver(e as any, idx);
                                      }
                                    });
                                  }}
                                  onTouchEnd={() => {
                                    if (draggedIndex !== null && dragOverIndex !== null) {
                                      handleDrop(dragOverIndex);
                                    }
                                    setDraggedIndex(null);
                                    setDragOverIndex(null);
                                  }}
                                  data-pdf-card="true"
                                  style={{
                                                  padding: '14px',
                                                  border: dragOverIndex === index
                                                    ? '3px solid #667eea'
                                                    : draggedIndex === index
                                                      ? '2px dashed #667eea'
                                                      : '2px solid #e2e8f0',
                                                  borderRadius: '10px',
                                                  background: draggedIndex === index
                                                    ? 'rgba(102, 126, 234, 0.15)'
                                                    : dragOverIndex === index
                                                      ? 'rgba(102, 126, 234, 0.08)'
                                                      : '#f8fafc',
                                                  cursor: 'move',
                                                  transition: 'all 0.2s',
                                                  boxShadow: draggedIndex === index
                                                    ? '0 6px 16px rgba(102, 126, 234, 0.3)'
                                                    : dragOverIndex === index
                                                      ? '0 4px 12px rgba(102, 126, 234, 0.15)'
                                                      : '0 2px 4px rgba(0,0,0,0.05)',
                                                  opacity: draggedIndex === index ? 0.6 : 1,
                                                  transform: draggedIndex === index ? 'scale(1.02)' : 'scale(1)',
                                                  touchAction: 'none'
                                                }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <FaGripVertical color="#94a3b8" size={18} />
                        <div style={{
                          minWidth: '36px',
                          height: '36px',
                          borderRadius: '8px',
                          background: 'linear-gradient(135deg, #ef4444, #dc2626)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}>
                          <FaFilePdf color="white" size={18} />
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{
                            fontSize: '14px',
                            fontWeight: 600,
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            color: '#1e293b'
                          }}>
                            {file.fileName}
                          </div>
                          <div style={{ fontSize: '12px', color: '#64748b', marginTop: '2px' }}>
                            {pdfPageCounts.get(file.id) || '...'} pages • {formatFileSize(file.fileSizeBytes)}
                          </div>
                        </div>
                        <button
                          onClick={() => handleDeleteFile(file.id)}
                          style={{
                            padding: '8px',
                            border: 'none',
                            borderRadius: '8px',
                            background: '#fee2e2',
                            color: '#dc2626',
                            cursor: 'pointer',
                            flexShrink: 0,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          <FaTimes size={14} />
                        </button>
                      </div>
                    </div>

                    {/* Insert Button Below */}
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      style={{
                        width: '100%',
                        padding: '10px',
                        marginTop: '8px',
                        border: '2px dashed #667eea',
                        borderRadius: '8px',
                        background: 'rgba(102, 126, 234, 0.05)',
                        color: '#667eea',
                        cursor: 'pointer',
                        fontSize: '14px',
                        fontWeight: 600,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px'
                      }}
                    >
                      <FaPlus size={14} /> Add PDF Here
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop View - Three Column Layout */}
            <div className="merge-layout-desktop-only" style={{
              display: 'grid',
              gridTemplateColumns: '280px 1fr 280px',
              gap: '20px',
              height: 'calc(100vh - 350px)',
              minHeight: '700px',
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
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '16px',
                paddingBottom: '12px',
                borderBottom: '2px solid #e2e8f0'
              }}>
                <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 600 }}>
                  PDFs ({uploadedFiles.length})
                </h3>
                <span style={{
                  fontSize: '11px',
                  color: '#667eea',
                  background: 'rgba(102, 126, 234, 0.1)',
                  padding: '4px 10px',
                  borderRadius: '12px',
                  fontWeight: 600
                }}>
                  Drag to reorder
                </span>
              </div>

              {uploadedFiles.map((file, index) => (
                <div key={file.id} style={{ marginBottom: '10px' }}>
                  {/* Insert Button Above */}
                  {index === 0 && (
                    <button
                      onClick={() => {
                        const input = document.createElement('input');
                        input.type = 'file';
                        input.accept = 'application/pdf';
                        input.multiple = true;
                        input.onchange = (e) => {
                          const target = e.target as HTMLInputElement;
                          if (target.files) {
                            handleInsertPdfAtPosition(target.files, 0);
                          }
                        };
                        input.click();
                      }}
                      style={{
                        width: '100%',
                        padding: '8px',
                        marginBottom: '8px',
                        border: '2px dashed #667eea',
                        borderRadius: '6px',
                        background: 'rgba(102, 126, 234, 0.05)',
                        color: '#667eea',
                        cursor: 'pointer',
                        fontSize: '12px',
                        fontWeight: 600,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                        transition: 'all 0.2s'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(102, 126, 234, 0.1)';
                        e.currentTarget.style.transform = 'translateY(-1px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(102, 126, 234, 0.05)';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      <FaPlus size={10} /> Add PDF Here
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
                      border: dragOverIndex === index
                        ? '2px solid #667eea'
                        : draggedIndex === index
                          ? '2px dashed #667eea'
                          : '2px solid #e2e8f0',
                      borderRadius: '8px',
                      background: draggedIndex === index
                        ? 'rgba(102, 126, 234, 0.1)'
                        : '#f8fafc',
                      cursor: 'move',
                      transition: 'all 0.2s',
                      opacity: draggedIndex === index ? 0.6 : 1
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <FaGripVertical color="#94a3b8" size={14} />
                      <div style={{
                        minWidth: '32px',
                        height: '40px',
                        borderRadius: '6px',
                        background: 'linear-gradient(135deg, #ef4444, #dc2626)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        <FaFilePdf color="white" size={16} />
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{
                          fontSize: '13px',
                          fontWeight: 600,
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                          color: '#1e293b'
                        }}>
                          {file.fileName}
                        </div>
                        <div style={{ fontSize: '11px', color: '#64748b', marginTop: '2px' }}>
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
                          cursor: 'pointer',
                          flexShrink: 0,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'all 0.2s'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = '#fecaca';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = '#fee2e2';
                        }}
                      >
                        <FaTimes size={12} />
                      </button>
                    </div>
                  </div>

                  {/* Insert Button Below */}
                  <button
                    onClick={() => {
                      const input = document.createElement('input');
                      input.type = 'file';
                      input.accept = 'application/pdf';
                      input.multiple = true;
                      input.onchange = (e) => {
                        const target = e.target as HTMLInputElement;
                        if (target.files) {
                          handleInsertPdfAtPosition(target.files, index + 1);
                        }
                      };
                      input.click();
                    }}
                    style={{
                      width: '100%',
                      padding: '8px',
                      marginTop: '8px',
                      border: '2px dashed #667eea',
                      borderRadius: '6px',
                      background: 'rgba(102, 126, 234, 0.05)',
                      color: '#667eea',
                      cursor: 'pointer',
                      fontSize: '12px',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      transition: 'all 0.2s'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(102, 126, 234, 0.1)';
                      e.currentTarget.style.transform = 'translateY(-1px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(102, 126, 234, 0.05)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <FaPlus size={10} /> Add PDF Here
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
             overflow: 'hidden',
             position: 'relative'
           }}>
             <div style={{
               display: 'flex',
               justifyContent: 'space-between',
               alignItems: 'center',
               marginBottom: '12px',
               paddingBottom: '12px',
               borderBottom: '2px solid #e2e8f0'
             }}>
               <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 600 }}>
                 Page Preview
               </h3>
               {selectedPdfPages.length > 0 && (
                 <div style={{
                   display: 'flex',
                   gap: '8px',
                   alignItems: 'center'
                 }}>
                   <span style={{
                     fontSize: '12px',
                     color: '#64748b',
                     fontWeight: 500
                   }}>
                     {selectedPdfPages.length} pages
                   </span>
                   <button
                     onClick={() => {
                       const previewContainer = document.getElementById('preview-scroll-container');
                       if (previewContainer) {
                         previewContainer.scrollTo({ top: 0, behavior: 'smooth' });
                       }
                     }}
                     style={{
                       padding: '6px 12px',
                       background: 'linear-gradient(135deg, #667eea, #764ba2)',
                       color: 'white',
                       border: 'none',
                       borderRadius: '6px',
                       fontSize: '12px',
                       fontWeight: 600,
                       cursor: 'pointer',
                       display: 'flex',
                       alignItems: 'center',
                       gap: '4px',
                       transition: 'all 0.2s'
                     }}
                     onMouseEnter={(e) => {
                       e.currentTarget.style.transform = 'translateY(-1px)';
                       e.currentTarget.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.4)';
                     }}
                     onMouseLeave={(e) => {
                       e.currentTarget.style.transform = 'translateY(0)';
                       e.currentTarget.style.boxShadow = 'none';
                     }}
                   >
                     ↑ Top
                   </button>
                 </div>
               )}
             </div>

             {selectedPdfPages.length > 0 ? (
               <div
                 id="preview-scroll-container"
                 style={{
                   flex: 1,
                   overflowY: 'auto',
                   overflowX: 'hidden',
                   padding: '8px',
                   background: '#f8fafc',
                   borderRadius: '8px'
                 }}
               >
                 {/* Render all pages as thumbnails */}
                 <div style={{
                   display: 'grid',
                   gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
                   gap: '16px'
                 }}>
                   {selectedPdfPages.map((page, index) => (
                     <div
                       key={`preview-${page.uploadId}-${page.pageNumber}-${index}`}
                       onClick={() => {
                         setPreviewPageIndex(index);
                         setModalPageData({
                           uploadId: page.uploadId,
                           pageNumber: page.pageNumber,
                           fileName: page.fileName,
                           totalPages: page.totalPages
                         });
                         setShowPageModal(true);
                       }}
                       style={{
                         cursor: 'pointer',
                         position: 'relative',
                         transition: 'all 0.2s',
                         background: 'white',
                         borderRadius: '8px',
                         overflow: 'hidden',
                         border: previewPageIndex === index
                           ? '3px solid #667eea'
                           : '2px solid #e2e8f0',
                         boxShadow: previewPageIndex === index
                           ? '0 4px 16px rgba(102, 126, 234, 0.3)'
                           : '0 2px 8px rgba(0,0,0,0.05)'
                       }}
                       onMouseEnter={(e) => {
                         if (previewPageIndex !== index) {
                           e.currentTarget.style.transform = 'scale(1.03)';
                           e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.15)';
                         }
                       }}
                       onMouseLeave={(e) => {
                         if (previewPageIndex !== index) {
                           e.currentTarget.style.transform = 'scale(1)';
                           e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)';
                         }
                       }}
                     >
                       {/* Page Number Badge */}
                       <div style={{
                         position: 'absolute',
                         top: '6px',
                         left: '6px',
                         zIndex: 10,
                         background: previewPageIndex === index
                           ? 'linear-gradient(135deg, #667eea, #764ba2)'
                           : 'rgba(0, 0, 0, 0.7)',
                         color: 'white',
                         padding: '4px 10px',
                         borderRadius: '12px',
                         fontSize: '11px',
                         fontWeight: 700,
                         boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
                         display: 'flex',
                         alignItems: 'center',
                         gap: '4px'
                       }}>
                         <span>{index + 1}</span>
                       </div>

                       {/* Eye Icon for Full View */}
                       <div style={{
                         position: 'absolute',
                         top: '6px',
                         right: '6px',
                         zIndex: 10,
                         background: 'rgba(0, 0, 0, 0.7)',
                         color: 'white',
                         width: '28px',
                         height: '28px',
                         borderRadius: '50%',
                         display: 'flex',
                         alignItems: 'center',
                         justifyContent: 'center',
                         fontSize: '12px',
                         opacity: 0.8,
                         transition: 'all 0.2s'
                       }}>
                         <FaEye />
                       </div>

                       {/* PDF Thumbnail Preview */}
                       <div style={{
                         width: '100%',
                         height: '220px',
                         background: '#f8fafc',
                         display: 'flex',
                         alignItems: 'center',
                         justifyContent: 'center',
                         overflow: 'hidden',
                         position: 'relative'
                       }}>
                         <object
                           data={`${uploadedFiles.find(f => f.id === page.uploadId)?.presignedUrl}#page=${page.pageNumber}&view=FitH&toolbar=0&navpanes=0&scrollbar=0`}
                           type="application/pdf"
                           style={{
                             width: '100%',
                             height: '100%',
                             display: 'block',
                             pointerEvents: 'none'
                           }}
                         >
                           <div style={{
                             width: '100%',
                             height: '100%',
                             display: 'flex',
                             alignItems: 'center',
                             justifyContent: 'center',
                             background: '#f8fafc',
                             color: '#64748b',
                             fontSize: '11px',
                             flexDirection: 'column',
                             gap: '8px'
                           }}>
                             <FaFilePdf size={32} />
                             <span>Page {page.pageNumber}</span>
                           </div>
                         </object>
                       </div>

                       {/* Page Info Footer */}
                       <div style={{
                         padding: '8px 10px',
                         background: previewPageIndex === index
                           ? 'rgba(102, 126, 234, 0.1)'
                           : 'white',
                         borderTop: '1px solid #e2e8f0'
                       }}>
                         <div style={{
                           fontSize: '11px',
                           fontWeight: 600,
                           color: '#1e293b',
                           overflow: 'hidden',
                           textOverflow: 'ellipsis',
                           whiteSpace: 'nowrap',
                           marginBottom: '2px'
                         }}>
                           {page.fileName}
                         </div>
                         <div style={{
                           fontSize: '10px',
                           color: '#64748b',
                           display: 'flex',
                           justifyContent: 'space-between',
                           alignItems: 'center'
                         }}>
                           <span>Pg {page.pageNumber}/{page.totalPages}</span>
                           <span style={{
                             color: '#667eea',
                             fontWeight: 600
                           }}>
                             #{index + 1}
                           </span>
                         </div>
                       </div>
                     </div>
                   ))}
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
                        setHasManuallyReorderedPages(true); // Mark that pages have been manually modified
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
            </>
        )}

    {/* Images to PDF Preview Section */}
    {operation === "images-to-pdf" && uploadedFiles.length > 0 && (
      <div style={{
        marginTop: '20px',
        border: '2px solid #e2e8f0',
        borderRadius: '12px',
        padding: '20px',
        background: 'white'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '16px'
        }}>
          <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 600 }}>
            Image Preview ({uploadedFiles.length} {uploadedFiles.length === 1 ? 'image' : 'images'})
          </h3>
          <span style={{
            fontSize: '13px',
            color: '#667eea',
            background: 'rgba(102, 126, 234, 0.1)',
            padding: '6px 14px',
            borderRadius: '20px',
            fontWeight: 600
          }}>
            Drag to reorder
          </span>
        </div>

        <p style={{
          fontSize: '13px',
          color: '#64748b',
          marginBottom: '20px',
          padding: '12px',
          background: '#f8fafc',
          borderRadius: '8px',
          border: '1px solid #e2e8f0'
        }}>
          📋 <strong>Tip:</strong> Drag and drop images to rearrange their order in the final PDF.
          Images will appear in the PDF in the order shown below.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '16px'
        }}>
          {uploadedFiles.map((file, index) => (
            <div
              key={file.id}
              draggable
              onDragStart={() => handleImageDragStart(index)}
              onDragOver={(e) => handleImageDragOver(e, index)}
              onDrop={() => handleImageDrop(index)}
              onDragEnd={() => {
                setDraggedImageIndex(null);
                setDragOverImageIndex(null);
              }}
              // Mobile touch support
              onTouchStart={(e) => {
                handleImageDragStart(index);
                e.currentTarget.style.opacity = '0.6';
                e.currentTarget.style.transform = 'scale(0.95)';
              }}
              onTouchMove={(e) => {
                e.preventDefault();
                const touch = e.touches[0];
                const elementBelow = document.elementFromPoint(touch.clientX, touch.clientY);

                const allImageCards = document.querySelectorAll('[data-image-card]');
                allImageCards.forEach((card, idx) => {
                  if (card.contains(elementBelow) || card === elementBelow) {
                    handleImageDragOver(e as any, idx);
                  }
                });
              }}
              onTouchEnd={(e) => {
                e.currentTarget.style.opacity = '1';
                e.currentTarget.style.transform = draggedImageIndex === index ? 'scale(0.95)' : 'scale(1)';

                if (draggedImageIndex !== null && dragOverImageIndex !== null) {
                  handleImageDrop(dragOverImageIndex);
                }
                setDraggedImageIndex(null);
                setDragOverImageIndex(null);
              }}
              data-image-card={index}
              style={{
                position: 'relative',
                border: dragOverImageIndex === index
                  ? '3px solid #667eea'
                  : draggedImageIndex === index
                    ? '2px dashed #667eea'
                    : '2px solid #e2e8f0',
                borderRadius: '12px',
                overflow: 'hidden',
                background: draggedImageIndex === index
                  ? 'rgba(102, 126, 234, 0.1)'
                  : 'white',
                cursor: 'move',
                transition: 'all 0.2s',
                opacity: draggedImageIndex === index ? 0.6 : 1,
                transform: draggedImageIndex === index ? 'scale(0.95)' : 'scale(1)',
                boxShadow: dragOverImageIndex === index
                  ? '0 4px 12px rgba(102, 126, 234, 0.3)'
                  : '0 2px 4px rgba(0,0,0,0.05)',
                touchAction: 'none',
                WebkitUserSelect: 'none',
                userSelect: 'none'
              }}
            >
              {/* Order Badge */}
              <div style={{
                position: 'absolute',
                top: '8px',
                left: '8px',
                zIndex: 10,
                background: 'linear-gradient(135deg, #667eea, #764ba2)',
                color: 'white',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '14px',
                fontWeight: 700,
                boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                pointerEvents: 'none'
              }}>
                {index + 1}
              </div>

              {/* Delete Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleDeleteFile(file.id);
                }}
                onTouchEnd={(e) => {
                  e.stopPropagation();
                  handleDeleteFile(file.id);
                }}
                style={{
                  position: 'absolute',
                  top: '8px',
                  right: '8px',
                  zIndex: 10,
                  width: '32px',
                  height: '32px',
                  border: 'none',
                  borderRadius: '50%',
                  background: 'rgba(220, 38, 38, 0.9)',
                  color: 'white',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#dc2626';
                  e.currentTarget.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(220, 38, 38, 0.9)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <FaTimes size={14} />
              </button>

              {/* Image Preview */}
              <div style={{
                width: '100%',
                height: '200px',
                background: '#f8fafc',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                pointerEvents: 'none'
              }}>
                {imagePreviewUrls.has(file.id) ? (
                  <img
                    src={imagePreviewUrls.get(file.id)}
                    alt={file.fileName}
                    style={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain',
                      pointerEvents: 'none'
                    }}
                    draggable={false}
                  />
                ) : (
                  <FaImage size={48} color="#cbd5e1" />
                )}
              </div>

              {/* File Info */}
              <div style={{
                padding: '12px',
                background: 'white',
                borderTop: '1px solid #e2e8f0',
                pointerEvents: 'none'
              }}>
                <div style={{
                  fontSize: '13px',
                  fontWeight: 600,
                  color: '#1e293b',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  marginBottom: '4px'
                }}>
                  {file.fileName}
                </div>
                <div style={{
                  fontSize: '11px',
                  color: '#64748b'
                }}>
                  {formatFileSize(file.fileSizeBytes)}
                </div>
              </div>

              {/* Drag Handle Indicator */}
              <div style={{
                position: 'absolute',
                bottom: '12px',
                right: '12px',
                color: '#94a3b8',
                opacity: 0.5,
                pointerEvents: 'none'
              }}>
                <FaGripVertical size={16} />
              </div>
            </div>
          ))}
        </div>

        {/* Add More Images Button */}
        <button
          onClick={() => fileInputRef.current?.click()}
          style={{
            width: '100%',
            padding: '16px',
            marginTop: '16px',
            border: '2px dashed #667eea',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.05), rgba(118, 75, 162, 0.05))',
            color: '#667eea',
            cursor: 'pointer',
            fontSize: '15px',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            transition: 'all 0.3s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'linear-gradient(135deg, rgba(102, 126, 234, 0.05), rgba(118, 75, 162, 0.05))';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <FaPlus size={14} /> Add More Images
        </button>
      </div>
    )}

            {/* Operation Options */}
            {config.requiresOptions && uploadedFiles.length > 0 && (
              <div className="options-panel">
                <h3>Options</h3>

                {operation === "compress-pdf" && (
                  <>
                    <div className="option-group">
                      <label>Compression Mode</label>
                      <div className="compression-options" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <div className="radio-group">
                          <label className="radio-label">
                            <input
                              type="radio"
                              value="preset"
                              checked={compressionMode === "preset"}
                              onChange={(e) => {
                                setCompressionMode(e.target.value);
                              }}
                            />
                            <span>Preset Levels</span>
                          </label>

                          <label className="radio-label">
                            <input
                              type="radio"
                              value="percentage"
                              checked={compressionMode === "percentage"}
                              onChange={(e) => {
                                setCompressionMode(e.target.value);
                              }}
                            />
                            <span>Percentage</span>
                          </label>

                          <label className="radio-label">
                            <input
                              type="radio"
                              value="filesize"
                              checked={compressionMode === "filesize"}
                              onChange={(e) => {
                                setCompressionMode(e.target.value);
                              }}
                            />
                            <span>Target File Size</span>
                          </label>
                        </div>

                        {/* PRESET MODE */}
                        {compressionMode === "preset" && (
                          <div style={{
                            background: 'white',
                            padding: '16px',
                            borderRadius: '8px',
                            border: '2px solid #667eea'
                          }}>
                            <div className="radio-group">
                              <label className="radio-label">
                                <input
                                  type="radio"
                                  value="low"
                                  checked={compressionLevel === "low"}
                                  onChange={(e) => setCompressionLevel(e.target.value)}
                                />
                                <span>Low (75% of original size)</span>
                              </label>

                              <label className="radio-label">
                                <input
                                  type="radio"
                                  value="medium"
                                  checked={compressionLevel === "medium"}
                                  onChange={(e) => setCompressionLevel(e.target.value)}
                                />
                                <span>Medium (50% of original size)</span>
                              </label>

                              <label className="radio-label">
                                <input
                                  type="radio"
                                  value="high"
                                  checked={compressionLevel === "high"}
                                  onChange={(e) => setCompressionLevel(e.target.value)}
                                />
                                <span>High (25% of original size)</span>
                              </label>
                            </div>
                          </div>
                        )}

                        {/* PERCENTAGE MODE */}
                        {compressionMode === "percentage" && (
                          <div style={{
                            background: 'white',
                            padding: '16px',
                            borderRadius: '8px',
                            border: '2px solid #667eea'
                          }}>
                            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: 600 }}>
                              Custom Compression Percentage (10-95%)
                            </label>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                              <input
                                type="range"
                                min="10"
                                max="95"
                                value={compressionPercentage}
                                onChange={(e) => setCompressionPercentage(parseInt(e.target.value))}
                                style={{ flex: 1 }}
                              />
                              <div style={{ display: 'flex', alignItems: 'center' }}>
                                <input
                                  type="number"
                                  min="10"
                                  max="95"
                                  value={compressionPercentage}
                                  onChange={(e) => {
                                    const val = parseInt(e.target.value);
                                    if (val >= 10 && val <= 95) {
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


                        {/* TARGET FILE SIZE MODE */}
                        {compressionMode === "filesize" && (
                          <div
                            style={{
                              background: 'white',
                              padding: '16px',
                              borderRadius: '12px',
                              border: '2px solid #667eea',
                              // Better mobile spacing
                              margin: '0 4px 16px',
                              boxSizing: 'border-box'
                            }}
                          >
                            <label
                              style={{
                                display: 'block',
                                marginBottom: '10px',
                                fontSize: '15px',           // ↑ slightly more readable
                                fontWeight: 600
                              }}
                            >
                              Target File Size
                            </label>

                            {uploadedFiles.length > 0 && (
                              <div
                                style={{
                                  padding: '10px 12px',
                                  background: 'linear-gradient(135deg, rgba(102,126,234,0.08), rgba(118,75,162,0.08))',
                                  borderRadius: '8px',
                                  marginBottom: '14px',
                                  border: '1px solid rgba(102,126,234,0.25)'
                                }}
                              >
                                <p
                                  style={{
                                    fontSize: '14px',
                                    color: '#4f46e5',
                                    margin: 0,
                                    fontWeight: 600
                                  }}
                                >
                                  📄 Original: {formatFileSize(uploadedFiles[0].fileSizeBytes)}
                                </p>
                              </div>
                            )}

                            <div
                              style={{
                                display: 'flex',
                                flexWrap: 'wrap',           // ← key for mobile: allows stacking on narrow screens
                                gap: '12px',
                                alignItems: 'center'
                              }}
                            >
                              <div
                                style={{
                                  flex: '1 1 140px',        // grows, but won't shrink below ~140px
                                  minWidth: '140px',
                                  position: 'relative'
                                }}
                              >
                                <input
                                  type="number"
                                  min="0.1"
                                  step="0.1"
                                  inputMode="decimal"       // ← better mobile keyboard (shows decimal pad)
                                  value={targetFileSize}
                                  onChange={(e) => {
                                    const val = parseFloat(e.target.value);
                                    if (!isNaN(val) && val >= 0.1) {
                                      setTargetFileSize(val);
                                    } else if (e.target.value === '' || e.target.value === '.') {
                                      setTargetFileSize(e.target.value); // allow typing decimal point
                                    }
                                  }}
                                  placeholder="e.g. 2.5"
                                  style={{
                                    width: '100%',
                                    padding: '14px 16px',     // comfortable vertical padding
                                    fontSize: '20px',         // ↓ reduced from 24px → better balance mobile/desktop
                                    fontWeight: 600,
                                    textAlign: 'center',
                                    border: '2px solid #d1d5db',
                                    borderRadius: '10px',
                                    backgroundColor: '#ffffff',
                                    boxSizing: 'border-box',
                                    minHeight: '54px',        // ← important: ensures good touch target height
                                    transition: 'border-color 0.15s, box-shadow 0.15s, background-color 0.15s',
                                    ...(isTargetTooLarge
                                      ? {
                                          borderColor: '#ef4444',
                                          backgroundColor: '#fef2f2',
                                          color: '#991b1b'
                                        }
                                      : {})
                                  }}
                                  onFocus={(e) => {
                                    if (!isTargetTooLarge) {
                                      e.target.style.borderColor = '#6366f1';
                                      e.target.style.boxShadow = '0 0 0 3px rgba(99,102,241,0.2)';
                                      e.target.style.backgroundColor = '#f8f9ff';
                                    }
                                  }}
                                  onBlur={(e) => {
                                    if (!isTargetTooLarge) {
                                      e.target.style.borderColor = '#d1d5db';
                                      e.target.style.boxShadow = 'none';
                                      e.target.style.backgroundColor = '#ffffff';
                                    }
                                  }}
                                />

                                {isTargetTooLarge && (
                                  <div
                                    style={{
                                      color: '#ef4444',
                                      fontSize: '13px',
                                      marginTop: '8px',
                                      padding: '8px 12px',
                                      background: '#fef2f2',
                                      borderRadius: '6px',
                                      border: '1px solid #fecaca',
                                      lineHeight: '1.4'
                                    }}
                                  >
                                    ⚠️ Target cannot be larger than original ({formatFileSize(uploadedFiles[0]?.fileSizeBytes || 0)})
                                  </div>
                                )}
                              </div>

                              <select
                                value={targetFileSizeUnit}
                                onChange={(e) => setTargetFileSizeUnit(e.target.value)}
                                style={{
                                  padding: '14px 18px',
                                  fontSize: '18px',           // readable & fits better
                                  fontWeight: 600,
                                  border: '2px solid #d1d5db',
                                  borderRadius: '10px',
                                  backgroundColor: '#ffffff',
                                  cursor: 'pointer',
                                  minWidth: '100px',
                                  minHeight: '54px',          // ← same height as input → consistent touch target
                                  appearance: 'none',         // remove default arrow (optional – style yourself)
                                  backgroundImage: 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'12\' fill=\'none\' viewBox=\'0 0 12 12\'><path stroke=\'%236b7280\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'1.5\' d=\'m1 4 5 5 5-5\'/></svg>")',
                                  backgroundRepeat: 'no-repeat',
                                  backgroundPosition: 'right 12px center',
                                  backgroundSize: '12px',
                                  paddingRight: '36px'        // space for custom arrow
                                }}
                              >
                                <option value="KB">KB</option>
                                <option value="MB">MB</option>
                              </select>
                            </div>

                            <p
                              style={{
                                fontSize: '13px',
                                color: '#6b7280',
                                marginTop: '16px',
                                marginBottom: 0,
                                padding: '10px 12px',
                                background: '#f8fafc',
                                borderRadius: '8px',
                                lineHeight: '1.5'
                              }}
                            >
                              💡 <strong>Tip:</strong> Compression aims for your target size. Very small values may noticeably reduce quality.
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                )}

                {operation === "rotate-pdf" && (
                  <>
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

                    <div className="option-group">
                      <label>Pages to Rotate</label>
                      <div className="radio-group">
                        <label className="radio-label">
                          <input
                            type="radio"
                            value="all"
                            checked={rotationPages === "all"}
                            onChange={(e) => {
                              setRotationPages(e.target.value);
                              setCustomRotationPages("");
                            }}
                          />
                          <span>All Pages</span>
                        </label>

                        <label className="radio-label">
                          <input
                            type="radio"
                            value="custom"
                            checked={rotationPages === "custom"}
                            onChange={(e) => setRotationPages(e.target.value)}
                          />
                          <span>Custom Pages</span>
                        </label>
                      </div>

                      {rotationPages === "custom" && (
                        <div style={{
                          marginTop: '16px',
                          padding: '16px',
                          background: 'white',
                          borderRadius: '8px',
                          border: '2px solid #667eea'
                        }}>
                          <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: 600 }}>
                            Enter Page Numbers
                          </label>
                          <input
                            type="text"
                            placeholder="e.g., 1,3,5 or 1-5 or 1,3-7,10"
                            value={customRotationPages}
                            onChange={(e) => setCustomRotationPages(e.target.value)}
                            onBlur={(e) => {
                              // Validate page numbers when user leaves the input field
                              if (e.target.value.trim() && pdfPageCount > 0) {
                                validateRotationPages(e.target.value.trim());
                              }
                            }}
                            style={{
                              width: '100%',
                              padding: '10px',
                              border: '2px solid #e2e8f0',
                              borderRadius: '6px',
                              fontSize: '14px'
                            }}
                          />
                          <p style={{
                            fontSize: '12px',
                            color: '#64748b',
                            marginTop: '8px',
                            marginBottom: pdfPageCount > 0 ? '8px' : 0
                          }}>
                            Examples: "1" (page 1), "1,3,5" (pages 1, 3, and 5), "1-5" (pages 1 to 5), "1,3-7,10" (mixed)
                          </p>
                          {pdfPageCount > 0 && (
                            <div style={{
                              padding: '10px',
                              background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))',
                              borderRadius: '6px',
                              border: '1px solid rgba(102, 126, 234, 0.3)'
                            }}>
                              <p style={{
                                fontSize: '13px',
                                color: '#667eea',
                                margin: 0,
                                fontWeight: 600,
                                display: 'flex',
                                alignItems: 'center',
                                gap: '6px'
                              }}>
                                <span>📄</span>
                                Total pages in PDF: {pdfPageCount}
                              </p>
                              <p style={{
                                fontSize: '11px',
                                color: '#64748b',
                                margin: '4px 0 0 0'
                              }}>
                                Valid page range: 1-{pdfPageCount}
                              </p>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </>
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
                            <div className="split-table-wrapper">
                              <div className="split-table-container" style={{
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

{/* Full Page Preview Modal */}
{showPageModal && modalPageData && (
  <div
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.95)',
      zIndex: 10001,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      backdropFilter: 'blur(8px)'
    }}
    onClick={() => setShowPageModal(false)}
  >
    {/* Modal Header */}
    <div style={{
      position: 'absolute',
      top: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      background: 'rgba(255, 255, 255, 0.95)',
      padding: '12px 24px',
      borderRadius: '30px',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
      zIndex: 10002
    }}>
      <div style={{
        background: 'linear-gradient(135deg, #667eea, #764ba2)',
        color: 'white',
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '14px',
        fontWeight: 700
      }}>
        {previewPageIndex + 1}
      </div>
      <div>
        <div style={{
          fontSize: '13px',
          fontWeight: 700,
          color: '#1e293b',
          maxWidth: '400px',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap'
        }}>
          {modalPageData.fileName}
        </div>
        <div style={{
          fontSize: '11px',
          color: '#64748b'
        }}>
          Page {modalPageData.pageNumber} of {modalPageData.totalPages}
        </div>
      </div>
    </div>

    {/* Close Button */}
    <button
      onClick={() => setShowPageModal(false)}
      style={{
        position: 'absolute',
        top: '20px',
        right: '20px',
        width: '48px',
        height: '48px',
        background: 'rgba(255, 255, 255, 0.95)',
        border: 'none',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        fontSize: '20px',
        color: '#1e293b',
        boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
        transition: 'all 0.2s',
        zIndex: 10002
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = '#fee2e2';
        e.currentTarget.style.color = '#dc2626';
        e.currentTarget.style.transform = 'scale(1.1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.95)';
        e.currentTarget.style.color = '#1e293b';
        e.currentTarget.style.transform = 'scale(1)';
      }}
    >
      <FaTimes />
    </button>

    {/* Navigation Buttons */}
    {previewPageIndex > 0 && (
      <button
        onClick={(e) => {
          e.stopPropagation();
          const newIndex = previewPageIndex - 1;
          setPreviewPageIndex(newIndex);
          const prevPage = selectedPdfPages[newIndex];
          setModalPageData({
            uploadId: prevPage.uploadId,
            pageNumber: prevPage.pageNumber,
            fileName: prevPage.fileName,
            totalPages: prevPage.totalPages
          });
        }}
        style={{
          position: 'absolute',
          left: '20px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '56px',
          height: '56px',
          background: 'rgba(255, 255, 255, 0.95)',
          border: 'none',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          fontSize: '24px',
          color: '#667eea',
          boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
          transition: 'all 0.2s',
          zIndex: 10002
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
          e.currentTarget.style.color = 'white';
          e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.95)';
          e.currentTarget.style.color = '#667eea';
          e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
        }}
      >
        ‹
      </button>
    )}

    {previewPageIndex < selectedPdfPages.length - 1 && (
      <button
        onClick={(e) => {
          e.stopPropagation();
          const newIndex = previewPageIndex + 1;
          setPreviewPageIndex(newIndex);
          const nextPage = selectedPdfPages[newIndex];
          setModalPageData({
            uploadId: nextPage.uploadId,
            pageNumber: nextPage.pageNumber,
            fileName: nextPage.fileName,
            totalPages: nextPage.totalPages
          });
        }}
        style={{
          position: 'absolute',
          right: '20px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '56px',
          height: '56px',
          background: 'rgba(255, 255, 255, 0.95)',
          border: 'none',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          fontSize: '24px',
          color: '#667eea',
          boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
          transition: 'all 0.2s',
          zIndex: 10002
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
          e.currentTarget.style.color = 'white';
          e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.95)';
          e.currentTarget.style.color = '#667eea';
          e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
        }}
      >
        ›
      </button>
    )}

    {/* PDF Viewer */}
    <div
      onClick={(e) => e.stopPropagation()}
      style={{
        width: '100%',
        maxWidth: '900px',
        height: 'calc(100vh - 140px)',
        background: 'white',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <object
        data={`${uploadedFiles.find(f => f.id === modalPageData.uploadId)?.presignedUrl}#page=${modalPageData.pageNumber}&view=Fit&toolbar=1&navpanes=0`}
        type="application/pdf"
        style={{
          width: '100%',
          height: '100%',
          border: 'none'
        }}
      >
        <div style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '20px',
          color: '#64748b'
        }}>
          <FaFilePdf size={64} />
          <p style={{ fontSize: '16px', fontWeight: 600 }}>
            Unable to display PDF
          </p>
          <a
            href={uploadedFiles.find(f => f.id === modalPageData.uploadId)?.presignedUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '12px 24px',
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              color: 'white',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 600
            }}
          >
            Open in New Tab
          </a>
        </div>
      </object>
    </div>

    {/* Hint */}
    <div style={{
      position: 'absolute',
      bottom: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      background: 'rgba(255, 255, 255, 0.9)',
      padding: '8px 20px',
      borderRadius: '20px',
      fontSize: '12px',
      color: '#64748b',
      fontWeight: 500,
      boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
    }}>
      Click outside or press ESC to close • Use ‹ › arrows to navigate
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
  {/* PDF Reorder Confirmation Modal */}
  {showReorderConfirmation && (
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
      <div style={{
        backgroundColor: 'white',
        borderRadius: '16px',
        padding: '32px',
        maxWidth: '500px',
        width: '90%',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '16px',
          marginBottom: '24px'
        }}>
          <div style={{
            fontSize: '48px',
            lineHeight: 1
          }}>
            ⚠️
          </div>
          <div style={{ flex: 1 }}>
            <h3 style={{
              fontSize: '20px',
              fontWeight: 700,
              color: '#1e293b',
              margin: '0 0 12px 0'
            }}>
              Reorder PDFs?
            </h3>
            <p style={{
              fontSize: '15px',
              lineHeight: '1.6',
              color: '#475569',
              margin: 0
            }}>
              You have manually reordered pages. Reordering PDFs will reset your page arrangement to match the new PDF order. All your custom page arrangements will be lost.
            </p>
            <p style={{
              fontSize: '14px',
              lineHeight: '1.6',
              color: '#64748b',
              margin: '12px 0 0 0',
              fontWeight: 500
            }}>
              Do you want to continue and reorder the PDFs?
            </p>
          </div>
        </div>

        <div style={{
          display: 'flex',
          gap: '12px',
          justifyContent: 'flex-end'
        }}>
          <button
            onClick={() => handleReorderConfirmation(false)}
            style={{
              padding: '12px 24px',
              border: '2px solid #e2e8f0',
              borderRadius: '10px',
              background: 'white',
              color: '#475569',
              fontSize: '15px',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#f8fafc';
              e.currentTarget.style.borderColor = '#cbd5e1';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'white';
              e.currentTarget.style.borderColor = '#e2e8f0';
            }}
          >
            Cancel
          </button>
          <button
            onClick={() => handleReorderConfirmation(true)}
            style={{
              padding: '12px 24px',
              border: 'none',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              color: 'white',
              fontSize: '15px',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s',
              boxShadow: '0 4px 12px rgba(102, 126, 234, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 16px rgba(102, 126, 234, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.3)';
            }}
          >
            Yes, Reorder PDFs
          </button>
        </div>
      </div>
    </div>
  )}

      </div>
    );
  };

  export default PDFToolsWorkspace;