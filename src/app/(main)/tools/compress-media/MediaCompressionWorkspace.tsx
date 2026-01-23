"use client";
import React, { useState, useRef, useCallback, useEffect } from "react";
import axios from "axios";
import Head from 'next/head';
import { API_BASE_URL } from "@/app/config";
import {
  FaUpload,
  FaTrash,
  FaDownload,
  FaImage,
  FaVideo,
  FaSpinner,
  FaCheckCircle,
  FaExclamationCircle,
  FaTimes,
} from "react-icons/fa";

interface MediaItem {
  id: number;
  originalFileName: string;
  originalCdnUrl: string;
  processedCdnUrl: string | null;
  targetSize: string | null;
  compressionPercentage: number | null;
  status: "UPLOADED" | "PROCESSING" | "SUCCESS" | "FAILED";
  errorMessage: string | null;
  fileSizeBytes: number;
  fileType: string;
  createdAt: string;
}

const MediaCompressionWorkspace: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  // State
  const [uploadedMedia, setUploadedMedia] = useState<MediaItem[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // Compression options
  const [compressionLevel, setCompressionLevel] = useState<string>("medium");
  const [compressionPercentage, setCompressionPercentage] = useState<number>(50);
  const [useCustomCompression, setUseCustomCompression] = useState<boolean>(false);

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

  const handleFileUpload = async (files: FileList | null) => {
      if (!files || files.length === 0) return;

      setIsUploading(true);
      setError(null);

      try {
        const token = localStorage.getItem("token");
        if (!token) {
          showMessage('error', "Please login to upload files");
          setIsUploading(false);
          return;
        }

        // Upload files one by one with current compression settings
        const uploadedItems: MediaItem[] = [];
        const targetSizeParam = `${compressionPercentage}%`; // Add this line

        for (const file of Array.from(files)) {

           const formData = new FormData();
           formData.append("file", file);
           formData.append("targetSize", targetSizeParam); // Add this line

          const response = await axios.post(
            `${API_BASE_URL}/api/compression/upload`,
            formData,
            {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data",
              },
            }
          );

          uploadedItems.push(response.data);
        }

        setUploadedMedia((prev) => [...prev, ...uploadedItems]);
        showMessage('success', `${files.length} file(s) uploaded successfully!`);
      } catch (err: any) {
        console.error("Upload error:", err);
        if (err.response?.status === 401) {
          showMessage('error', "Session expired. Please login again.");
        } else {
          showMessage('error', err.response?.data?.message || "Failed to upload files");
        }
      } finally {
        setIsUploading(false);
        }
    };

  const handleDeleteMedia = async (mediaId: number) => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          showMessage('error', "Please login to delete files");
          return;
        }

        await axios.delete(
          `${API_BASE_URL}/api/compression/delete/${mediaId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setUploadedMedia((prev) => prev.filter((m) => m.id !== mediaId));
        showMessage('success', "Media removed successfully");
      } catch (err: any) {
        console.error("Delete error:", err);
        if (err.response?.status === 401) {
          showMessage('error', "Session expired. Please login again.");
        } else {
          showMessage('error', err.response?.data?.message || "Failed to delete media");
        }
      }
    };

  const handleCompress = async (mediaId: number) => {
        setIsProcessing(true);
        setError(null);

        try {
          const token = localStorage.getItem("token");
          if (!token) {
            showMessage('error', "Please login to compress files");
            setIsProcessing(false);
            return;
          }

          // First, update the target size with current compression settings
          const targetSizeParam = `${compressionPercentage}%`;

          try {
            await axios.patch(
              `${API_BASE_URL}/api/compression/update-target-size/${mediaId}`,
              null,
              {
                params: {
                  targetSize: targetSizeParam
                },
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );
          } catch (updateErr: any) {
            console.error("Failed to update target size:", updateErr);
            showMessage('error', "Failed to update compression settings");
            setIsProcessing(false);
            return;
          }

          // Update status to processing
          setUploadedMedia(media =>
            media.map(m => m.id === mediaId ? { ...m, status: "PROCESSING" as const, targetSize: targetSizeParam, compressionPercentage: compressionPercentage } : m)
          );

          const response = await axios.post(
            `${API_BASE_URL}/api/compression/compress/${mediaId}`,
            null,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

        // Update with compressed result
        setUploadedMedia(media =>
          media.map(m => m.id === mediaId ? response.data : m)
        );

        showMessage('success', "Compression complete!");
      } catch (err: any) {
        console.error("Compression error:", err);
        setUploadedMedia(media =>
          media.map(m =>
            m.id === mediaId
              ? { ...m, status: "FAILED" as const, errorMessage: err.response?.data?.message || "Compression failed" }
              : m
          )
        );
        if (err.response?.status === 401) {
          showMessage('error', "Session expired. Please login again.");
        } else {
          showMessage('error', err.response?.data?.message || "Compression failed");
        }
      } finally {
        setIsProcessing(false);
      }
    };

  // Download compressed media
  const handleDownload = async (url: string, fileName: string) => {
      try {
        // Use processedCdnUrl or presignedUrl from backend
        const response = await fetch(url);
        const blob = await response.blob();
        const blobUrl = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = fileName; // Backend already includes "compressed_" prefix if needed
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(blobUrl);
        showMessage('success', "Download started!");
      } catch (err) {
        console.error("Download error:", err);
        showMessage('error', "Download failed");
      }
    };

  // Format file size
  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + " " + sizes[i];
  };

  // Get file icon
  const getFileIcon = (fileType: string) => {
    if (fileType.startsWith('image/')) {
      return <FaImage size={20} color="white" />;
    } else if (fileType.startsWith('video/')) {
      return <FaVideo size={20} color="white" />;
    }
    return <FaImage size={20} color="white" />;
  };
  // Load user's compressed media on mount
  useEffect(() => {
    const loadUserMedia = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;

        const response = await axios.get(
          `${API_BASE_URL}/api/compression/user-media`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setUploadedMedia(response.data);
      } catch (err: any) {
        console.error("Failed to load user media:", err);
        // Don't show error on initial load, just log it
      }
    };

    loadUserMedia();
  }, []);

  return (
          <>
            <Head>
              <title>Free Image & Video Compressor - Reduce File Size Online | Scenith</title>
              <meta
                name="description"
                content="Compress images and videos online for free. Reduce file size up to 75% while maintaining quality. Support for JPG, PNG, HEIC, MP4, and more. Fast, secure, and easy to use."
              />
              <meta
                name="keywords"
                content="image compressor, video compressor, reduce file size, compress image online, compress video online, image optimization, video optimization, free compressor"
              />

              {/* Open Graph / Facebook */}
              <meta property="og:type" content="website" />
              <meta property="og:url" content="https://scenith.in/tools/compress-media" />
              <meta property="og:title" content="Free Image & Video Compressor - Reduce File Size Online | Scenith" />
              <meta
                property="og:description"
                content="Compress images and videos online for free. Reduce file size up to 75% while maintaining quality. Support for JPG, PNG, HEIC, MP4, and more."
              />
              <meta property="og:image" content="https://scenith.in/og-compress-media.jpg" />

              {/* Twitter */}
              <meta property="twitter:card" content="summary_large_image" />
              <meta property="twitter:url" content="https://scenith.in/tools/compress-media" />
              <meta property="twitter:title" content="Free Image & Video Compressor - Reduce File Size Online | Scenith" />
              <meta
                property="twitter:description"
                content="Compress images and videos online for free. Reduce file size up to 75% while maintaining quality. Support for JPG, PNG, HEIC, MP4, and more."
              />
              {/* Additional SEO */}
              <meta name="robots" content="index, follow" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <link rel="canonical" href="https://scenith.in/tools/compress-media" />
            </Head>

            <div style={{
              fontFamily: "'Montserrat', sans-serif",
              background: '#FFFFFF',
              minHeight: '100vh',
              color: '#1E293B',
              paddingTop: '80px'
            }}>
    <div style={{
      fontFamily: "'Montserrat', sans-serif",
      background: '#FFFFFF',
      minHeight: '100vh',
      color: '#1E293B',
      paddingTop: '80px'
    }}>
      {/* Header */}
      <div style={{
        padding: '40px 20px 60px',
        background: 'linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)',
        textAlign: 'center',
        borderBottom: '1px solid rgba(59, 130, 246, 0.08)',
        position: 'relative'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{
            fontSize: '3.5rem',
            marginBottom: '20px',
            background: 'linear-gradient(135deg, #10b981, #8b5cf6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            🎬
          </div>
          <h1 style={{
            fontSize: '2.8rem',
            fontWeight: '800',
            margin: '0 0 12px',
            color: '#1E293B',
            lineHeight: '1.2'
          }}>
            Compress Media
          </h1>
          <p style={{
            fontSize: '1.15rem',
            color: '#64748B',
            maxWidth: '720px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Reduce the size of your images and videos with intelligent compression
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div style={{
        maxWidth: '1240px',
        margin: '0 auto',
        padding: '40px 20px',
        width: '100%'
      }}>
        {/* Upload Section */}
        <div style={{
          background: '#FFFFFF',
          borderRadius: '16px',
          padding: '40px',
          boxShadow: '0 6px 25px rgba(0,0,0,0.07)',
          border: '1px solid rgba(59, 130, 246, 0.08)',
          marginBottom: '40px'
        }}>
          <div style={{
            border: '2px dashed rgba(59, 130, 246, 0.25)',
            borderRadius: '16px',
            padding: '70px 40px',
            textAlign: 'center',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            background: 'rgba(59, 130, 246, 0.02)'
          }}
          onClick={() => fileInputRef.current?.click()}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault();
            handleFileUpload(e.dataTransfer.files);
          }}>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*,video/*"
              multiple
              onChange={(e) => handleFileUpload(e.target.files)}
              style={{ display: "none" }}
            />
            <FaUpload size={48} style={{ color: '#3B82F6', marginBottom: '24px', opacity: 0.75 }} />
            <h3 style={{
              fontSize: '1.7rem',
              fontWeight: '700',
              color: '#1E293B',
              marginBottom: '12px'
            }}>
              Click or drag files here
            </h3>
            <p style={{
              fontSize: '1.05rem',
              color: '#64748B',
              margin: '0 0 16px'
            }}>
              Upload images or videos to compress
            </p>
            <span style={{
              padding: '8px 20px',
              background: 'rgba(59, 130, 246, 0.08)',
              borderRadius: '50px',
              fontSize: '0.92rem',
              color: '#3B82F6',
              fontWeight: '600'
            }}>
              Accepted: Images (JPG, PNG, HEIC) & Videos
            </span>
          </div>

          {/* Compression Options */}
          {/* Compression Options */}
          {/* Compression Options */}
          {uploadedMedia.length > 0 && (
            <div style={{
              marginTop: '30px',
              padding: '30px',
              background: 'linear-gradient(145deg, #F8FAFC, #FFFFFF)',
              borderRadius: '16px',
              border: '1px solid rgba(59, 130, 246, 0.1)'
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: '#1E293B',
                margin: '0 0 24px'
              }}>
                Compression Options
              </h3>

              <div style={{ marginBottom: '24px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#1E293B',
                  marginBottom: '10px'
                }}>
                  Compression Level
                </label>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {[
                    { value: 'low', label: 'Low (75% of original size)', percent: 75 },
                    { value: 'medium', label: 'Medium (50% of original size)', percent: 50 },
                    { value: 'high', label: 'High (25% of original size)', percent: 25 }
                  ].map(option => (
                    <label key={option.value} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '12px 16px',
                      background: '#FFFFFF',
                      border: '2px solid rgba(59, 130, 246, 0.1)',
                      borderRadius: '12px',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}>
                      <input
                        type="radio"
                        value={option.value}
                        checked={!useCustomCompression && compressionLevel === option.value}
                        onChange={(e) => {
                          setUseCustomCompression(false);
                          setCompressionLevel(e.target.value);
                          setCompressionPercentage(option.percent);
                        }}
                        style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                      />
                      <span style={{ fontSize: '0.95rem', color: '#1E293B', fontWeight: '500' }}>
                        {option.label}
                      </span>
                    </label>
                  ))}

                  <label style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '12px 16px',
                    background: '#FFFFFF',
                    border: '2px solid rgba(59, 130, 246, 0.1)',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}>
                    <input
                      type="radio"
                      checked={useCustomCompression}
                      onChange={() => setUseCustomCompression(true)}
                      style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                    />
                    <span style={{ fontSize: '0.95rem', color: '#1E293B', fontWeight: '500' }}>
                      Custom
                    </span>
                  </label>

                  {useCustomCompression && (
                    <div style={{
                      background: 'white',
                      padding: '16px',
                      borderRadius: '8px',
                      border: '2px solid #667eea'
                    }}>
                      <label style={{
                        display: 'block',
                        marginBottom: '8px',
                        fontSize: '14px',
                        fontWeight: 600
                      }}>
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
                              if (val >= 1 && val <= 99) setCompressionPercentage(val);
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
            </div>
          )}

          {/* Uploaded Media List */}
          {uploadedMedia.length > 0 && (
            <div style={{ marginTop: '30px' }}>
              <h3 style={{
                fontSize: '1.4rem',
                fontWeight: '700',
                color: '#1E293B',
                marginBottom: '16px'
              }}>
                Uploaded Media ({uploadedMedia.length})
              </h3>

              {uploadedMedia.map((media) => (
                <div key={media.id} style={{
                  background: '#F9FAFB',
                  borderRadius: '12px',
                  padding: '16px 20px',
                  marginBottom: '14px',
                  border: '1px solid rgba(59, 130, 246, 0.08)',
                  transition: 'all 0.25s ease'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                      minWidth: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      background: 'linear-gradient(135deg, #10b981, #059669)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      {getFileIcon(media.fileType)}
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
                        {media.originalFileName}
                      </div>
                      <div style={{ fontSize: '12px', color: '#64748B', marginTop: '2px' }}>
                        Original: {formatFileSize(media.fileSizeBytes)}
                        {media.status === "SUCCESS" && media.processedCdnUrl && (
                          <> • Compressed: {formatFileSize(Math.floor(media.fileSizeBytes * (media.compressionPercentage! / 100)))} ({media.targetSize})</>
                        )}
                        {media.status === "UPLOADED" && (
                          <> • Target: {media.targetSize || "Not set"}</>
                        )}
                      </div>
                      <div style={{
                        fontSize: '11px',
                        marginTop: '4px',
                        color: media.status === "SUCCESS" ? '#10b981' :
                               media.status === "FAILED" ? '#ef4444' :
                               media.status === "PROCESSING" ? '#f59e0b' : '#64748b',
                        fontWeight: 600
                      }}>
                        {media.status === "PROCESSING" && "⏳ Processing..."}
                        {media.status === "SUCCESS" && "✓ Compressed Successfully"}
                        {media.status === "FAILED" && "✗ Compression Failed"}
                        {media.status === "UPLOADED" && "Ready to compress"}
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '8px', flexShrink: 0, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                      {media.status === "UPLOADED" && (
                        <button
                          onClick={() => handleCompress(media.id)}
                          disabled={isProcessing}
                          style={{
                            padding: '8px 16px',
                            border: 'none',
                            borderRadius: '8px',
                            background: isProcessing ? '#e5e7eb' : 'linear-gradient(135deg, #3B82F6, #2563EB)',
                            color: 'white',
                            fontSize: '13px',
                            fontWeight: 600,
                            cursor: isProcessing ? 'not-allowed' : 'pointer',
                            transition: 'all 0.3s ease'
                          }}
                        >
                          {isProcessing ? 'Processing...' : 'Compress'}
                        </button>
                      )}

                      {media.status === "SUCCESS" && media.processedCdnUrl && (
                        <>
                          <button
                            onClick={() => handleDownload(media.processedCdnUrl!, media.originalFileName)}
                            style={{
                              padding: '8px 16px',
                              border: 'none',
                              borderRadius: '8px',
                              background: 'linear-gradient(135deg, #10B981, #059669)',
                              color: 'white',
                              fontSize: '13px',
                              fontWeight: 600,
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '6px',
                              transition: 'all 0.3s ease'
                            }}
                          >
                            <FaDownload size={12} /> Download
                          </button>
                          <button
                            onClick={() => handleCompress(media.id)}
                            disabled={isProcessing}
                            style={{
                              padding: '8px 16px',
                              border: 'none',
                              borderRadius: '8px',
                              background: '#f8fafc',
                              color: '#3B82F6',
                              fontSize: '13px',
                              fontWeight: 600,
                              cursor: isProcessing ? 'not-allowed' : 'pointer'
                            }}
                          >
                            Re-compress
                          </button>
                        </>
                      )}

                      {media.status === "FAILED" && (
                        <button
                          onClick={() => handleCompress(media.id)}
                          disabled={isProcessing}
                          style={{
                            padding: '8px 16px',
                            border: 'none',
                            borderRadius: '8px',
                            background: '#f8fafc',
                            color: '#3B82F6',
                            fontSize: '13px',
                            fontWeight: 600,
                            cursor: isProcessing ? 'not-allowed' : 'pointer'
                          }}
                        >
                          Try Again
                        </button>
                      )}

                      <button
                        onClick={() => handleDeleteMedia(media.id)}
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
                          justifyContent: 'center',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        <FaTimes size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Toast Messages */}
      {error && (
        <div style={{
          position: 'fixed',
          bottom: '32px',
          right: '32px',
          padding: '16px 28px',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          fontSize: '1rem',
          fontWeight: 600,
          boxShadow: '0 10px 35px rgba(0,0,0,0.18)',
          zIndex: 10000,
          background: 'linear-gradient(135deg, #EF4444, #DC2626)',
          color: 'white',
          animation: 'slideIn 0.4s ease'
        }}>
          <FaExclamationCircle />
          <span>{error}</span>
        </div>
      )}

      {success && (
        <div style={{
          position: 'fixed',
          bottom: '32px',
          right: '32px',
          padding: '16px 28px',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          fontSize: '1rem',
          fontWeight: 600,
          boxShadow: '0 10px 35px rgba(0,0,0,0.18)',
          zIndex: 10000,
          background: 'linear-gradient(135deg, #10B981, #059669)',
          color: 'white',
          animation: 'slideIn 0.4s ease'
        }}>
          <FaCheckCircle />
          <span>{success}</span>
        </div>
      )}

      {/* Loading Overlay */}
      {isUploading && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.6)',
          backdropFilter: 'blur(6px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999
        }}>
          <div style={{
            background: 'white',
            padding: '40px 70px',
            borderRadius: '20px',
            boxShadow: '0 12px 50px rgba(0, 0, 0, 0.25)',
            textAlign: 'center'
          }}>
            <FaSpinner size={48} style={{
              color: '#3B82F6',
              animation: 'spin 1s linear infinite'
            }} />
            <p style={{
              marginTop: '20px',
              fontSize: '1.1rem',
              fontWeight: 600,
              color: '#1E293B'
            }}>
              Uploading files...
            </p>
          </div>
        </div>
      )}

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
      </div>
      </div>
    </>
  );
};

export default MediaCompressionWorkspace;