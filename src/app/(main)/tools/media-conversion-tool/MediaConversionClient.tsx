"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import { API_BASE_URL } from "@/app/config";
import "../../../../../styles/tools/MediaConversion.css";
import axios from "axios";
import {
  FaArrowLeft,
  FaUpload,
  FaTrash,
  FaDownload,
  FaSpinner,
  FaCheckCircle,
  FaExclamationCircle,
  FaPlus,
  FaTimes,
  FaVideo,
  FaImage,
  FaExchangeAlt,
} from "react-icons/fa";



// Interfaces
interface ConvertedMedia {
  id: number;
  originalFileName: string;
  originalPath: string;
  originalCdnUrl: string;
  processedFileName: string | null;
  processedPath: string | null;
  processedCdnUrl: string | null;
  mediaType: 'VIDEO' | 'IMAGE';
  targetFormat: string;
  status: 'PENDING' | 'UPLOADED' | 'PROCESSING' | 'SUCCESS' | 'FAILED';
  errorMessage: string | null;
}

const MediaConversionWorkspace: React.FC = () => {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  // State
  const [uploadedFiles, setUploadedFiles] = useState<ConvertedMedia[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<ConvertedMedia | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState<string>('');
  const [targetFormat, setTargetFormat] = useState<string>('');
  const [selectedFile, setSelectedFile] = useState<ConvertedMedia | null>(null);
  const [pollingInterval, setPollingInterval] = useState<NodeJS.Timeout | null>(null);
  const [showPromoPopup, setShowPromoPopup] = useState(false);
  const videoFormats = ['MP4', 'AVI', 'MKV', 'MOV', 'WEBM', 'FLV', 'WMV'];
  const imageFormats = ['PNG', 'JPG', 'JPEG', 'BMP', 'GIF', 'TIFF', 'WEBP'];

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
          fetchUserMedia(token);
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

    return () => {
      if (pollingInterval) {
        clearInterval(pollingInterval);
      }
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShowPromoPopup(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const fetchUserMedia = async (token: string) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/conversion/user-media`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUploadedFiles(response.data);
    } catch (error) {
      console.error("Error fetching media:", error);
    }
  };

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
        fetchUserMedia(token);
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
        fetchUserMedia(response.data.token);
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

  const showMessage = useCallback((type: 'success' | 'error', message: string) => {
    if (type === 'success') {
      setSuccess(message);
      setTimeout(() => setSuccess(null), 3000);
    } else {
      setError(message);
      setTimeout(() => setError(null), 5000);
    }
  }, []);

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

      const file = files[0];
      const formData = new FormData();
      formData.append("file", file);

      // Determine media type and set default format
      const isVideo = file.type.startsWith('video/');
      const defaultFormat = isVideo ? 'MP4' : 'PNG';
      formData.append("targetFormat", defaultFormat);

      const response = await axios.post(
        `${API_BASE_URL}/api/conversion/upload`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const newUpload = response.data;
      setUploadedFiles((prev) => [...prev, newUpload]);
      setSelectedFile(newUpload);
      setTargetFormat(newUpload.targetFormat);

      showMessage('success', 'File uploaded successfully!');
    } catch (err: any) {
      console.error("Upload error:", err);
      if (err.response?.status === 401) {
        localStorage.removeItem("token");
        setIsAuthenticated(false);
        setShowLoginModal(true);
      } else {
        showMessage('error', err.response?.data?.message || "Failed to upload file");
      }
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const handleDeleteFile = async (mediaId: number) => {
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

      await axios.delete(`${API_BASE_URL}/api/conversion/delete/${mediaId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setUploadedFiles((prev) => prev.filter((f) => f.id !== mediaId));
      if (selectedFile?.id === mediaId) {
        setSelectedFile(null);
        setTargetFormat('');
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

  const handleFormatChange = async (newFormat: string) => {
    setTargetFormat(newFormat);

    if (!selectedFile) return;

    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const response = await axios.put(
        `${API_BASE_URL}/api/conversion/update-target-format/${selectedFile.id}`,
        null,
        {
          headers: { Authorization: `Bearer ${token}` },
          params: { newTargetFormat: newFormat },
        }
      );

      setSelectedFile(response.data);
      setUploadedFiles((prev) =>
        prev.map((f) => (f.id === selectedFile.id ? response.data : f))
      );
    } catch (error: any) {
      showMessage('error', error.response?.data?.message || 'Failed to update format');
    }
  };

  const pollJobStatus = async (mediaId: number) => {
    const token = localStorage.getItem("token");
    if (!token) return;

    const interval = setInterval(async () => {
      try {
        const response = await axios.get(
          `${API_BASE_URL}/api/conversion/user-media`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        const updatedMedia = response.data.find((m: ConvertedMedia) => m.id === mediaId);

        if (updatedMedia) {
          setSelectedFile(updatedMedia);
          setUploadedFiles((prev) =>
            prev.map((f) => (f.id === mediaId ? updatedMedia : f))
          );

          if (updatedMedia.status === 'SUCCESS') {
            clearInterval(interval);
            setPollingInterval(null);
            setIsProcessing(false);
            setResult(updatedMedia);
            showMessage('success', 'Conversion completed successfully!');
          } else if (updatedMedia.status === 'FAILED') {
            clearInterval(interval);
            setPollingInterval(null);
            setIsProcessing(false);
            showMessage('error', updatedMedia.errorMessage || 'Conversion failed');
          }
        }
      } catch (error) {
        console.error("Error polling status:", error);
        clearInterval(interval);
        setPollingInterval(null);
        setIsProcessing(false);
      }
    }, 2000);

    setPollingInterval(interval);
  };

  const handleProcess = async () => {
    if (!isAuthenticated) {
      setShowLoginModal(true);
      return;
    }

    if (!selectedFile) {
      showMessage('error', "Please select a file to convert");
      return;
    }

    if (!targetFormat) {
      showMessage('error', "Please select a target format");
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

      const response = await axios.post(
        `${API_BASE_URL}/api/conversion/convert/${selectedFile.id}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setSelectedFile(response.data);
      pollJobStatus(selectedFile.id);
    } catch (err: any) {
      console.error("Processing error:", err);
      if (err.response?.status === 401) {
        localStorage.removeItem("token");
        setIsAuthenticated(false);
        setShowLoginModal(true);
      } else {
        showMessage('error', err.response?.data?.message || "Processing failed");
      }
      setIsProcessing(false);
    }
  };

  const handleDownload = async () => {
    if (!result?.processedCdnUrl) return;

    try {
      const response = await fetch(result.processedCdnUrl, {
        method: 'GET',
        mode: 'cors',
        credentials: 'omit',
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch file: ${response.statusText}`);
      }

      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = result.processedFileName || `converted.${targetFormat.toLowerCase()}`;
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);

      showMessage('success', "Download started!");
    } catch (err) {
      console.error("Download failed:", err);
      showMessage('error', "Download failed. Please try again.");
    }
  };

  const handleReset = () => {
    setSelectedFile(null);
    setResult(null);
    setError(null);
    setSuccess(null);
    setTargetFormat('');
    if (pollingInterval) {
      clearInterval(pollingInterval);
      setPollingInterval(null);
    }
  };

  if (isCheckingAuth) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
      }}>
        <div style={{
          textAlign: 'center',
          color: 'white'
        }}>
          <FaSpinner className="spinner" size={48} style={{
            animation: 'spin 1s linear infinite'
          }} />
          <p style={{ marginTop: '20px', fontSize: '18px' }}>Loading...</p>
        </div>
        <style jsx>{`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  const getAvailableFormats = () => {
    if (!selectedFile) return [];
    return selectedFile.mediaType === 'VIDEO' ? videoFormats : imageFormats;
  };
  function ToolsPromoPopup({ onClose }: { onClose: () => void }) {
  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'rgba(8, 6, 24, 0.80)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '16px',
        animation: 'scPopFadeOverlay 0.3s ease forwards',
      }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      role="dialog"
      aria-modal="true"
      aria-label="Scenith Special Offer"
    >
      <div
        style={{
          background: 'linear-gradient(145deg, #0f0c29 0%, #1e1a45 60%, #0d0b22 100%)',
          borderRadius: '24px',
          padding: '36px 32px 28px',
          maxWidth: '460px',
          width: '100%',
          position: 'relative',
          border: '1px solid rgba(102, 126, 234, 0.28)',
          boxShadow: '0 0 0 1px rgba(118,75,162,0.12), 0 32px 80px rgba(0,0,0,0.65), 0 0 60px rgba(102,126,234,0.10)',
          animation: 'scPopSlideUp 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        }}
      >
        <div style={{
          position: 'absolute', top: '-40px', right: '-40px',
          width: '160px', height: '160px',
          background: 'radial-gradient(circle, rgba(118,75,162,0.2) 0%, transparent 70%)',
          pointerEvents: 'none', borderRadius: '50%',
        }} />

        <button
          onClick={onClose}
          aria-label="Close"
          style={{
            position: 'absolute', top: '14px', right: '14px',
            background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '50%', width: '30px', height: '30px',
            color: 'rgba(255,255,255,0.5)', fontSize: '16px', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'all 0.2s', lineHeight: 1,
          }}
          onMouseOver={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.14)'; (e.currentTarget as HTMLButtonElement).style.color = 'white'; }}
          onMouseOut={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.06)'; (e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.5)'; }}
        >×</button>

        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '6px',
          background: 'rgba(255,107,107,0.12)', border: '1px solid rgba(255,107,107,0.3)',
          borderRadius: '100px', padding: '4px 12px', marginBottom: '16px',
        }}>
          <span style={{
            width: '5px', height: '5px', borderRadius: '50%', background: '#ff6b6b',
            display: 'inline-block', boxShadow: '0 0 5px #ff6b6b',
            animation: 'scPopPulse 1.8s infinite',
          }} />
          <span style={{ fontSize: '0.68rem', fontWeight: 800, color: '#ff8a8a', letterSpacing: '1.5px', textTransform: 'uppercase' as const }}>
            🚀 Claim — 25% OFF
          </span>
        </div>

        <h2 style={{
          fontSize: 'clamp(1.3rem, 4vw, 1.7rem)', fontWeight: 900, color: 'white',
          margin: '0 0 8px', lineHeight: 1.2, letterSpacing: '-0.02em',
        }}>
          Loving the free tools?{' '}
          <span style={{
            background: 'linear-gradient(90deg, #667eea, #a78bfa, #f093fb)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>
            Unlock More.
          </span>
        </h2>

        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.88rem', margin: '0 0 6px', lineHeight: 1.6 }}>
          All-in-one alternative to expensive tools{' '}
          <span style={{ color: '#a78bfa', fontWeight: 700 }}>₹349/mo</span>
          {' '}·{' '}
          <span style={{ color: '#a78bfa', fontWeight: 700 }}>$9/mo</span>
        </p>

        <p style={{
          color: 'rgba(255,255,255,0.75)', fontSize: '0.82rem', margin: '0 0 22px',
          fontWeight: 600, letterSpacing: '0.01em',
        }}>
          Build faster. Create smarter. Ship more content.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '22px' }}>
          {[
            { icon: '🎙️', text: '60K Characters/mo' },
            { icon: '🖼️', text: '400 AI Images/mo' },
            { icon: '⚡', text: '45 Speed Videos/mo' },
            { icon: '✨', text: '40+ Premium Voices' },
          ].map((item) => (
            <div key={item.text} style={{
              display: 'flex', alignItems: 'center', gap: '7px',
              background: 'rgba(102,126,234,0.08)', border: '1px solid rgba(102,126,234,0.15)',
              borderRadius: '10px', padding: '8px 10px',
            }}>
              <span style={{ fontSize: '0.85rem' }}>{item.icon}</span>
              <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.72)', fontWeight: 600 }}>{item.text}</span>
            </div>
          ))}
        </div>

        
        <a  href="/pricing"
          onClick={onClose}
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
            width: '100%', padding: '13px 24px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white', borderRadius: '12px',
            fontSize: '0.95rem', fontWeight: 800, textDecoration: 'none',
            boxShadow: '0 4px 24px rgba(102,126,234,0.4)',
            transition: 'transform 0.2s, box-shadow 0.2s',
            letterSpacing: '-0.01em',
          }}
          onMouseOver={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.transform = 'scale(1.03)'; el.style.boxShadow = '0 8px 32px rgba(102,126,234,0.55)'; }}
          onMouseOut={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.transform = 'scale(1)'; el.style.boxShadow = '0 4px 24px rgba(102,126,234,0.4)'; }}
        >
          🚀 Claim 25% OFF — View Plans
        </a>
        <style>{`
          @keyframes scPopFadeOverlay { from { opacity:0; } to { opacity:1; } }
          @keyframes scPopSlideUp { from { opacity:0; transform:translateY(40px) scale(0.96); } to { opacity:1; transform:translateY(0) scale(1); } }
          @keyframes scPopPulse { 0%,100% { opacity:1; transform:scale(1); } 50% { opacity:0.45; transform:scale(1.35); } }
        `}</style>
      </div>
    </div>
  );
}

  return (
    <div className="media-conversion-container">

      {showPromoPopup && <ToolsPromoPopup onClose={() => setShowPromoPopup(false)} />}
      {/* Optional: you can keep or remove particle background */}
      <div className="particle-background">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      {/* Header section */}
      <div className="media-conversion-header">
        <button
          className="back-btn"
          onClick={() => router.push("/tools")}
        >
          <FaArrowLeft size={18} />
          Back to Tools
        </button>

        <div className="header-content">
          <div className="header-icon">
            <FaExchangeAlt />
          </div>
          <h1>Media Conversion Tool</h1>
          <p>Convert videos and images to various formats instantly</p>
        </div>
      </div>

      <div className="conversion-content">

        {!result && (
          <div className="upload-section">

            {/* Upload / Dropzone area */}
            <div
              className="dropzone"
              onClick={() => fileInputRef.current?.click()}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                handleFileUpload(e.dataTransfer.files);
              }}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="video/*,image/*"
                onChange={(e) => handleFileUpload(e.target.files)}
                style={{ display: "none" }}
              />

              <FaUpload size={64} />
              <h3>Click or drag files here</h3>
              <p>Upload a video or image file to convert</p>

              <div className="file-types" style={{ marginTop: '16px' }}>
                Supported: Videos (MP4, AVI, MKV, MOV, WEBM, FLV, WMV) • Images (PNG, JPG, JPEG, BMP, GIF, TIFF, WEBP)
              </div>
            </div>

            {/* Uploaded files list */}
            {uploadedFiles.length > 0 && (
              <div className="uploaded-files-list">
                <h3>Your Files ({uploadedFiles.length})</h3>
                {uploadedFiles.map((file) => (
                  <div
                    key={file.id}
                    className={`media-card ${selectedFile?.id === file.id ? 'selected' : ''}`}
                    onClick={() => {
                      setSelectedFile(file);
                      setTargetFormat(file.targetFormat);
                    }}
                  >
                    <div className={`media-type-badge ${file.mediaType.toLowerCase()}`}>
                      {file.mediaType === 'VIDEO' ? <FaVideo /> : <FaImage />}
                      {file.mediaType}
                    </div>

                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontWeight: 600, marginBottom: 4 }}>
                        {file.originalFileName}
                      </div>
                      <div style={{ fontSize: '0.9rem', color: '#64748b' }}>
                        Target: {file.targetFormat} • Status: {file.status}
                      </div>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteFile(file.id);
                      }}
                      style={{ background: 'none', border: 'none', color: '#dc2626', fontSize: '1.1rem' }}
                    >
                      <FaTrash />
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Format selection */}
            {selectedFile && (
              <div className="format-selection-panel">
                <h3>Convert To</h3>
                <p>Select the target format for your {selectedFile.mediaType.toLowerCase()}</p>

                <div className="format-selector">
                  <select
                    value={targetFormat}
                    onChange={(e) => handleFormatChange(e.target.value)}
                  >
                    <option value="">Select Format</option>
                    {getAvailableFormats().map((format) => (
                      <option key={format} value={format}>
                        {format}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            {/* Convert button */}
            {selectedFile && targetFormat && (
              <button
                className="process-media-button"
                onClick={handleProcess}
                disabled={isProcessing || !isAuthenticated}
              >
                {isProcessing ? (
                  <>
                    <FaSpinner className="spinner" /> Converting...
                  </>
                ) : (
                  <>
                    <FaExchangeAlt /> Convert to {targetFormat}
                  </>
                )}
              </button>
            )}

          </div>
        )}

        {/* Result section */}
        {result && result.status === 'SUCCESS' && (
          <div className="result-card">
            <FaCheckCircle size={80} color="#10b981" />
            <h2>Conversion Complete!</h2>
            <p>Your {result.mediaType.toLowerCase()} has been successfully converted</p>

            <div className="result-info">
              <div className="info-item">
                <span className="label">File Name</span>
                <span className="value">{result.processedFileName || 'converted-file'}</span>
              </div>
              <div className="info-item">
                <span className="label">Type</span>
                <span className="value">{result.mediaType === 'VIDEO' ? 'Video' : 'Image'}</span>
              </div>
              <div className="info-item">
                <span className="label">Format</span>
                <span className="value">{result.targetFormat}</span>
              </div>
            </div>

            <div className="result-actions">
              <button className="download-btn" onClick={handleDownload}>
                <FaDownload /> Download File
              </button>
              <button className="reset-btn" onClick={handleReset}>
                <FaPlus /> Convert Another
              </button>
            </div>
          </div>
        )}

      </div>

      {/* Toast Messages */}
      {error && (
        <div style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          background: '#fee2e2',
          color: '#dc2626',
          padding: '16px 24px',
          borderRadius: '12px',
          boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          maxWidth: '400px',
          zIndex: 1000,
          animation: 'slideIn 0.3s ease-out'
        }}>
          <FaExclamationCircle size={20} />
          <span style={{ fontWeight: 600 }}>{error}</span>
        </div>
      )}

      {success && (
        <div style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          background: '#d1fae5',
          color: '#059669',
          padding: '16px 24px',
          borderRadius: '12px',
          boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          maxWidth: '400px',
          zIndex: 1000,
          animation: 'slideIn 0.3s ease-out'
        }}>
          <FaCheckCircle size={20} />
          <span style={{ fontWeight: 600 }}>{success}</span>
        </div>
      )}

      {isUploading && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.7)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9998
        }}>
          <div style={{
            background: 'white',
            borderRadius: '16px',
            padding: '48px',
            textAlign: 'center',
            boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
          }}>
            <FaSpinner className="spinner" size={48} color="#10b981" style={{
              animation: 'spin 1s linear infinite'
            }} />
            <p style={{
              marginTop: '24px',
              fontSize: '18px',
              fontWeight: 600,
              color: '#1e293b'
            }}>
              Uploading file...
            </p>
          </div>
        </div>
      )}

      {/* Login Modal */}
      {showLoginModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.75)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          padding: '20px'
        }}>
          <div style={{
            background: 'white',
            borderRadius: '16px',
            padding: '40px',
            maxWidth: '450px',
            width: '100%',
            position: 'relative',
            boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
          }}>
            <button
              onClick={() => setShowLoginModal(false)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'none',
                border: 'none',
                fontSize: '24px',
                cursor: 'pointer',
                color: '#64748b',
                padding: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '8px',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#f1f5f9';
                e.currentTarget.style.color = '#1e293b';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'none';
                e.currentTarget.style.color = '#64748b';
              }}
            >
              <FaTimes />
            </button>

            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <h1 style={{
                fontSize: '32px',
                fontWeight: 700,
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '8px'
              }}>
                SCENITH
              </h1>
              <p style={{
                fontSize: '16px',
                color: '#64748b',
                margin: 0
              }}>
                Login to Continue
              </p>
            </div>

            {isLoggingIn && (
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(255, 255, 255, 0.95)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '16px',
                zIndex: 10
              }}>
                <FaSpinner className="spinner" size={32} color="#10b981" style={{
                  animation: 'spin 1s linear infinite'
                }} />
                <p style={{
                  marginTop: '16px',
                  fontSize: '16px',
                  fontWeight: 600,
                  color: '#1e293b'
                }}>
                  Logging in...
                </p>
              </div>
            )}

            {loginError && (
              <div style={{
                background: '#fee2e2',
                color: '#dc2626',
                padding: '14px 16px',
                borderRadius: '10px',
                marginBottom: '20px',
                fontSize: '14px',
                fontWeight: 600,
                border: '2px solid #fecaca'
              }}>
                {loginError}
              </div>
            )}

            {loginSuccess && (
              <div style={{
                background: '#d1fae5',
                color: '#059669',
                padding: '14px 16px',
                borderRadius: '10px',
                marginBottom: '20px',
                fontSize: '14px',
                fontWeight: 600,
                border: '2px solid #a7f3d0'
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
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px'
              }}
            >
              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#475569'
                }}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  disabled={isLoggingIn}
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    border: '2px solid #e2e8f0',
                    borderRadius: '10px',
                    fontSize: '15px',
                    transition: 'all 0.2s',
                    background: 'white'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#10b981';
                    e.target.style.boxShadow = '0 0 0 3px #d1fae520';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#e2e8f0';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#475569'
                }}>
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  required
                  disabled={isLoggingIn}
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    border: '2px solid #e2e8f0',
                    borderRadius: '10px',
                    fontSize: '15px',
                    transition: 'all 0.2s',
                    background: 'white'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#10b981';
                    e.target.style.boxShadow = '0 0 0 3px #d1fae520';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#e2e8f0';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={isLoggingIn}
                style={{
                  padding: '16px',
                  background: 'linear-gradient(135deg, #10b981, #059669)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '10px',
                  fontSize: '16px',
                  fontWeight: 700,
                  cursor: isLoggingIn ? 'not-allowed' : 'pointer',
                  opacity: isLoggingIn ? 0.7 : 1,
                  transition: 'all 0.3s',
                  boxShadow: '0 4px 16px rgba(16, 185, 129, 0.3)'
                }}
                onMouseEnter={(e) => {
                  if (!isLoggingIn) {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(16, 185, 129, 0.4)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isLoggingIn) {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(16, 185, 129, 0.3)';
                  }
                }}
              >
                {isLoggingIn ? 'Logging in...' : 'Login'}
              </button>
            </form>

            <div style={{
              textAlign: 'center',
              margin: '24px 0',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              gap: '16px'
            }}>
              <div style={{ flex: 1, height: '1px', background: '#e2e8f0' }}></div>
              <span style={{ color: '#64748b', fontSize: '14px', fontWeight: 600 }}>OR</span>
              <div style={{ flex: 1, height: '1px', background: '#e2e8f0' }}></div>
            </div>

            <div id="googleSignInButton" style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '24px'
            }}></div>

            <p style={{
              textAlign: 'center',
              margin: 0,
              fontSize: '14px',
              color: '#64748b'
            }}>
              New to SCENITH?{' '}
              <a href="/signup" style={{
                color: '#10b981',
                textDecoration: 'none',
                fontWeight: 700
              }}>
                Sign up
              </a>
            </p>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @media (max-width: 768px) {
          h1 {
            font-size: 24px !important;
          }
          h2 {
            font-size: 28px !important;
          }
          h3 {
            font-size: 16px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default MediaConversionWorkspace;