"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import axios from "axios";
import { motion } from "framer-motion";
import { FaTimes, FaArrowUp } from "react-icons/fa";
import { API_BASE_URL, CDN_URL } from "../../../config";
import "../../../../../styles/tools/CompressMedia.css";
import DeleteConfirmModal from '../../../../components/DeleteConfirmModal';

// Interfaces
interface UserProfile {
  email: string;
  firstName: string;
  lastName: string;
  picture: string | null;
  googleAuth: boolean;
  role: string;
}

interface MediaItem {
  id: number;
  originalFileName: string;
  originalCdnUrl: string;
  processedCdnUrl: string | null;
  targetSize: string;
  status: "UPLOADED" | "PROCESSING" | "SUCCESS" | "FAILED";
  errorMessage: string | null;
}

interface LoginFormData {
  email: string;
  password: string;
}

const CompressMediaClient: React.FC = () => {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userProfile, setUserProfile] = useState<UserProfile>({
    email: "",
    firstName: "",
    lastName: "",
    picture: null,
    googleAuth: false,
    role: "",
  });
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);
  const [loginError, setLoginError] = useState<string | null>(null);
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(false);

  // Compression states
  const [file, setFile] = useState<File | null>(null);
  const [targetSize, setTargetSize] = useState<string>("500KB");
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [isCompressing, setIsCompressing] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [mediaList, setMediaList] = useState<MediaItem[]>([]);
  const [uploadSuccess, setUploadSuccess] = useState<string | null>(null);
  const [editingMediaId, setEditingMediaId] = useState<number | null>(null);
  const [newTargetSize, setNewTargetSize] = useState<string>("");

  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<{id: number; name: string; type: string} | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  // Handle scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check auth status and fetch user profile
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get(`${API_BASE_URL}/auth/me`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          const fullName = res.data.name || "";
          const nameParts = fullName.trim().split(" ");
          const firstName = nameParts[0] || "";
          const lastName = nameParts.length > 1 ? nameParts.slice(1).join(" ") : "";
          setUserProfile({
            email: res.data.email || "",
            firstName,
            lastName,
            picture: res.data.picture || null,
            googleAuth: res.data.googleAuth || false,
            role: res.data.role || "BASIC",
          });
          setIsLoggedIn(true);
          setShowLoginModal(false);
          fetchMediaList(token);
        })
        .catch((error) => {
          console.error("Error fetching user profile:", error);
          if (error.response?.status === 401) {
            localStorage.removeItem("token");
            setIsLoggedIn(false);
          }
        });
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  // Fetch user's compressed media list
  const fetchMediaList = async (token: string) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/compression/user-media`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMediaList(response.data);
    } catch (error) {
      console.error("Error fetching media list:", error);
      setError("Failed to load media list.");
    }
  };

  // Handle login
  const handleLogin = async (formData: LoginFormData) => {
    setIsLoggingIn(true);
    setLoginError(null);
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/login`, formData);
      const { token } = response.data;
      localStorage.setItem("token", token);
      const userResponse = await axios.get(`${API_BASE_URL}/auth/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const fullName = userResponse.data.name || "";
      const nameParts = fullName.trim().split(" ");
      const firstName = nameParts[0] || "";
      const lastName = nameParts.length > 1 ? nameParts.slice(1).join(" ") : "";
      setUserProfile({
        email: userResponse.data.email || "",
        firstName,
        lastName,
        picture: userResponse.data.picture || null,
        googleAuth: userResponse.data.googleAuth || false,
        role: userResponse.data.role || "BASIC",
      });
      setIsLoggedIn(true);
      setShowLoginModal(false);
      fetchMediaList(token);
    } catch (error: any) {
      setLoginError(error.response?.data?.message || "Login failed. Please check your credentials.");
    } finally {
      setIsLoggingIn(false);
    }
  };

  // Handle Google login
  const handleGoogleLogin = useCallback(async (credentialResponse: any) => {
    setLoginError("");
    setIsLoggingIn(true);
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/google`, {
        token: credentialResponse.credential,
      });
      localStorage.setItem("token", response.data.token);
      const userResponse = await axios.get(`${API_BASE_URL}/auth/me`, {
        headers: { Authorization: `Bearer ${response.data.token}` },
      });
      const fullName = userResponse.data.name || "";
      const nameParts = fullName.trim().split(" ");
      const firstName = nameParts[0] || "";
      const lastName = nameParts.length > 1 ? nameParts.slice(1).join(" ") : "";
      setUserProfile({
        email: userResponse.data.email || "",
        firstName,
        lastName,
        picture: userResponse.data.picture || null,
        googleAuth: true,
        role: userResponse.data.role || "BASIC",
      });
      setIsLoggedIn(true);
      setShowLoginModal(false);
      fetchMediaList(response.data.token);
    } catch (error: any) {
      setLoginError(error.response?.data?.message || "Google login failed");
    } finally {
      setIsLoggingIn(false);
    }
  }, []);
const handleDeleteConfirm = async () => {
  if (!itemToDelete) return;
  setIsDeleting(true);
  try {
    await axios.delete(
      `${API_BASE_URL}/api/compression/delete/${itemToDelete.id}`,
      { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
    );
    setMediaList(mediaList.filter(m => m.id !== itemToDelete.id));
    setDeleteModalOpen(false);
    setItemToDelete(null);
  } catch (error: any) {
    setError(error.response?.data?.message || 'Failed to delete media.');
  } finally {
    setIsDeleting(false);
  }
};

  // Initialize Google Sign-In
  useEffect(() => {
    const initializeGoogleSignIn = () => {
      if (window.google && window.google.accounts) {
        window.google.accounts.id.initialize({
          client_id: "397321320139-tpd310sq9j8rdngqd9kdmhgegco52b3g.apps.googleusercontent.com",
          callback: handleGoogleLogin,
        });
        const buttonElement = document.getElementById("googleSignInButton");
        if (buttonElement) {
          window.google.accounts.id.renderButton(buttonElement, {
            theme: "outline",
            size: "large",
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

  // Require login for upload/compression
  const requireLogin = () => {
    if (!isLoggedIn) {
      setShowLoginModal(true);
      return false;
    }
    return true;
  };

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setError(null);
      setUploadSuccess(null);
    }
  };

  // Handle media upload
  const handleUpload = async () => {
    if (!requireLogin()) return;
    if (!file || !targetSize.match(/^\d+(KB|MB)$/)) {
      setError("Please select a file and specify a valid target size (e.g., 500KB or 2MB).");
      return;
    }
    setIsUploading(true);
    setError(null);
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("targetSize", targetSize);
      const response = await axios.post(`${API_BASE_URL}/api/compression/upload`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
      });
      setUploadSuccess("Media uploaded successfully! Ready to compress.");
      setMediaList([response.data, ...mediaList]);
      setFile(null);
      setTargetSize("500KB");
      const fileInput = document.getElementById("media-upload") as HTMLInputElement;
      if (fileInput) fileInput.value = "";
    } catch (error: any) {
      setError(error.response?.data?.message || "Failed to upload media.");
    } finally {
      setIsUploading(false);
    }
  };

  // Handle compression
  const handleCompress = async (mediaId: number) => {
    if (!requireLogin()) return;
    setIsCompressing(true);
    setError(null);
    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/compression/compress/${mediaId}`,
        {},
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      setMediaList(mediaList.map((item) => (item.id === mediaId ? response.data : item)));
    } catch (error: any) {
      setError(error.response?.data?.message || "Failed to compress media.");
      setMediaList(
        mediaList.map((item) =>
          item.id === mediaId ? { ...item, status: "FAILED", errorMessage: error.response?.data?.message || "Compression failed" } : item
        )
      );
    } finally {
      setIsCompressing(false);
    }
  };

  const handleDownload = async (url: string, fileName: string) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Download failed:", error);
      window.open(url, "_blank");
    }
  };

  const handleUpdateTargetSize = async (mediaId: number) => {
    if (!newTargetSize.match(/^\d+(KB|MB)$/)) {
      setError("Please specify a valid target size (e.g., 500KB or 2MB).");
      return;
    }
    try {
      const response = await axios.patch(
        `${API_BASE_URL}/api/compression/update-target-size/${mediaId}`,
        { targetSize: newTargetSize },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      setMediaList(mediaList.map((item) => (item.id === mediaId ? response.data : item)));
      setEditingMediaId(null);
      setNewTargetSize("");
      setError(null);
    } catch (error: any) {
      setError(error.response?.data?.message || "Failed to update target size.");
    }
  };  

  // Smooth scrolling
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (!section) {
      if (sectionId === "footer-section") {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });
      }
      return;
    }
    const navHeight = 80;
    const offsetPosition = section.offsetTop - navHeight - 20;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className="compress-media-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Scenith Media Compressor",
            description: "Free online tool to compress images (JPEG, PNG, HEIC) and videos to desired sizes with high quality.",
            url: typeof window !== "undefined" ? window.location.href : "/tools/compress-media",
            applicationCategory: "MultimediaApplication",
            operatingSystem: "Web Browser",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              reviewCount: "9200",
            },
            author: {
              "@type": "Organization",
              name: "SCENITH AI VIDEO EDITOR",
            },
          }),
        }}
      />
      {/* Add FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How do I compress an image or video?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Upload your media file (JPEG, PNG, HEIC, or video), set your target size (e.g., 500KB or 2MB), and click 'Upload & Prepare'. Then click 'Compress' to optimize your file instantly."
                }
              },
              {
                "@type": "Question",
                "name": "What file formats are supported?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We support JPEG, PNG, and HEIC for images, and popular video formats like MP4, MOV, and AVI. Free tier supports files up to 50MB."
                }
              },
              {
                "@type": "Question",
                "name": "Is compressed media commercial use allowed?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! All compressed media can be used commercially with full rights and no watermarks. Perfect for websites, social media, marketing, and business content."
                }
              },
              {
                "@type": "Question",
                "name": "How much quality is lost during compression?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our advanced algorithms minimize quality loss while achieving your target file size. Most users report minimal to no visible difference, especially for web and social media use."
                }
              }
            ]
          }),
        }}
      />

      {/* Add HowTo Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Compress Images and Videos Online",
            "description": "Step-by-step guide to compressing images and videos for web, social media, and content creation",
            "step": [
              {
                "@type": "HowToStep",
                "name": "Upload Your Media",
                "text": "Choose an image (JPEG, PNG, HEIC) or video file and upload it securely to our platform. Files up to 50MB supported in the free tier.",
                "position": 1
              },
              {
                "@type": "HowToStep",
                "name": "Set Target Size",
                "text": "Specify your desired file size using formats like '500KB' for images or '2MB' for videos. Our smart algorithm will optimize accordingly.",
                "position": 2
              },
              {
                "@type": "HowToStep",
                "name": "Compress and Download",
                "text": "Click 'Compress' to process your media. Download the optimized file instantly with minimal quality loss. Re-compress anytime with different settings.",
                "position": 3
              }
            ]
          }),
        }}
      />

      <div className="particle-background">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      <section className="hero-section" id="hero" role="main">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Free Media Compressor - Optimize Images & Videos Instantly</h1>
          <p className="hero-description">
            Reduce the size of your images (JPEG, PNG, HEIC) and videos without losing quality. Perfect for web, social media, and content creation. Free, fast, and easy to use!
          </p>
          <div className="hero-cta-section">
            <motion.div
              className="upload-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3>Compress Your Media</h3>
              <p>Upload images or videos and set your desired file size.</p>
              <div className="upload-section">
                <div className="upload-button-container">
                  <input
                    type="file"
                    id="media-upload"
                    accept="image/jpeg,image/png,image/heic,video/*"
                    onChange={handleFileChange}
                    disabled={!isLoggedIn || isUploading}
                    className="media-upload-input hidden"
                    aria-label="Upload image or video"
                  />
                  <label htmlFor="media-upload" className="custom-upload-button">
                    <FaArrowUp className="upload-icon" />
                    {file ? file.name : "Upload Media"}
                  </label>
                </div>
                <div className="target-size-section">
                  <input
                    type="text"
                    value={targetSize}
                    onChange={(e) => setTargetSize(e.target.value)}
                    placeholder="e.g., 500KB or 2MB"
                    className="target-size-input"
                    disabled={!isLoggedIn || isUploading}
                    aria-label="Target file size"
                  />
                  <button
                    onClick={() => (isLoggedIn ? handleUpload() : setShowLoginModal(true))}
                    className="cta-button upload-button"
                    disabled={isUploading || (isLoggedIn && (!file || !targetSize.match(/^\d+(KB|MB)$/)))}
                    aria-label={isLoggedIn ? "Upload media for compression" : "Sign in to compress media"}
                  >
                    {isUploading ? (
                      <span className="uploading-spinner">Uploading...</span>
                    ) : isLoggedIn ? (
                      "Upload & Prepare"
                    ) : (
                      "Sign in / Login"
                    )}
                  </button>
                </div>
                {isUploading && (
                  <div className="progress-bar">
                    <motion.div
                      className="progress-fill"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 2, ease: "easeInOut" }}
                    />
                  </div>
                )}
                {uploadSuccess && <div className="success-message">{uploadSuccess}</div>}
                {error && (
                  <div className="error-message" role="alert">
                    {error}
                  </div>
                )}
              </div>
            </motion.div>
          
            <motion.div
              className="media-list-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3>Your Media</h3>
              <div className="scrollable-media">
                {mediaList.length === 0 ? (
                  <div className="empty-state">
                    {isLoggedIn ? "No media uploaded yet." : "Login to view your media."}
                  </div>
                ) : (
                  <div className="media-list">
                    {mediaList.map((media) => (
                      <motion.div
                        key={media.id}
                        className="media-item"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="media-item">
                          <div className="media-details">
                            <div className="media-title">{media.originalFileName}</div>
                            <div className="media-info">
                              {editingMediaId === media.id ? (
                                <div className="edit-target-size">
                                  <input
                                    type="text"
                                    value={newTargetSize}
                                    onChange={(e) => setNewTargetSize(e.target.value)}
                                    placeholder="e.g., 500KB or 2MB"
                                    className="target-size-input"
                                    aria-label="New target file size"
                                  />
                                  <button
                                    onClick={() => handleUpdateTargetSize(media.id)}
                                    className="cta-button save-button"
                                    aria-label={`Save new target size for ${media.originalFileName}`}
                                  >
                                    Save
                                  </button>
                                  <button
                                    onClick={() => setEditingMediaId(null)}
                                    className="cta-button cancel-button"
                                    aria-label="Cancel editing"
                                  >
                                    Cancel
                                  </button>
                                </div>
                              ) : (
                                <>
                                  <span>Status: {media.status}</span>
                                  <span>Target Size: {media.targetSize}</span>
                                  <button
                                    onClick={() => {
                                      setEditingMediaId(media.id);
                                      setNewTargetSize(media.targetSize);
                                    }}
                                    className="cta-button edit-button"
                                    aria-label={`Edit target size for ${media.originalFileName}`}
                                  >
                                    Edit Size
                                  </button>
                                  {media.errorMessage && <span>Error: {media.errorMessage}</span>}
                                </>
                              )}
                            </div>
                            {(media.status === "UPLOADED" || media.status === "SUCCESS" || media.status === "FAILED") && editingMediaId !== media.id && (
                              <button
                                onClick={() => handleCompress(media.id)}
                                className="cta-button compress-button"
                                disabled={isCompressing}
                                aria-label={
                                  media.status === "SUCCESS"
                                    ? `Re-compress ${media.originalFileName}`
                                    : media.status === "FAILED"
                                    ? `Try again to compress ${media.originalFileName}`
                                    : `Compress ${media.originalFileName}`
                                }
                              >
                                {isCompressing ? (
                                  <span className="compressing-spinner">Compressing...</span>
                                ) : media.status === "SUCCESS" ? (
                                  "Re-compress"
                                ) : media.status === "FAILED" ? (
                                  "Try Again"
                                ) : (
                                  "Compress"
                                )}
                              </button>
                            )}
                            {media.status === "SUCCESS" && media.processedCdnUrl && (
                              <button
                                onClick={() =>
                                  media.processedCdnUrl &&
                                  handleDownload(
                                    media.processedCdnUrl,
                                    `compressed_${media.originalFileName}`
                                  )
                                }
                                className="cta-button download-button"
                                aria-label={`Download compressed ${media.originalFileName}`}
                                disabled={!media.processedCdnUrl}
                              >
                                Download
                              </button>
                            )}
                           <button
                             onClick={() => {
                               setDeleteModalOpen(true);
                               setItemToDelete({
                                 id: media.id,
                                 name: media.originalFileName,
                                 type: 'media'
                               });
                             }}
                             className="elegant-delete-button elegant-delete-button-with-text"
                             aria-label={`Delete ${media.originalFileName}`}
                             title="Delete this media"
                           >
                             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                               <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2M10 11v6M14 11v6"/>
                             </svg>
                             <span>Delete</span>
                           </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
      {/* Educational Introduction - SEO Rich */}
      <section style={{
        padding: '100px 20px 80px',
        background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)',
        borderTop: '1px solid rgba(226, 232, 240, 0.8)'
      }}>
        <motion.div
          className="container"
          style={{ maxWidth: '1400px', margin: '0 auto' }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              marginBottom: '25px',
              fontWeight: '700',
              color: '#1e293b'
            }}>
              Why Compress Images & Videos?
            </h2>
            <p style={{
              fontSize: '1.1rem',
              maxWidth: '900px',
              margin: '0 auto',
              lineHeight: '1.8',
              color: '#64748b'
            }}>
              Media compression is essential for modern web performance, social media optimization, and content delivery.
              Reduce file sizes without sacrificing quality for faster loading, better SEO, and improved user experience.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px',
            marginBottom: '60px'
          }}>
            {[
              {
                icon: '🚀',
                title: 'Faster Website Loading',
                description: 'Compressed images and videos load up to 10x faster, improving user experience and reducing bounce rates. Google prioritizes fast-loading sites in search rankings.',
                stats: ['70% faster page load', 'Better SEO ranking', '40% less bandwidth']
              },
              {
                icon: '📱',
                title: 'Social Media Optimization',
                description: 'Meet platform file size limits for Instagram, TikTok, YouTube, and Facebook while maintaining visual quality. Upload high-quality content that fits perfectly.',
                stats: ['Platform-ready sizes', 'No quality loss', 'Instant uploads']
              },
              {
                icon: '💰',
                title: 'Save Storage & Bandwidth',
                description: 'Reduce cloud storage costs by 50-90% and decrease bandwidth usage. Perfect for businesses, content creators, and websites with high traffic volumes.',
                stats: ['90% smaller files', '50% cost savings', 'Unlimited compression']
              },
              {
                icon: '🎨',
                title: 'Professional Quality',
                description: 'Our advanced algorithms preserve visual quality while achieving maximum compression. Perfect for portfolios, e-commerce, marketing materials, and creative projects.',
                stats: ['Minimal quality loss', 'Smart optimization', 'Commercial use OK']
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                style={{
                  background: '#ffffff',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(226, 232, 240, 0.8)',
                  borderRadius: '20px',
                  padding: '35px',
                  transition: 'all 0.4s ease',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.06)'
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  boxShadow: '0 8px 25px rgba(59, 130, 246, 0.15)',
                  borderColor: 'rgba(59, 130, 246, 0.3)',
                  transform: 'translateY(-5px)'
                }}
              >
                <div style={{ fontSize: '3.5rem', marginBottom: '20px' }}>{benefit.icon}</div>
                <h3 style={{
                  fontSize: '1.5rem',
                  marginBottom: '15px',
                  fontWeight: '600',
                  background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  {benefit.title}
                </h3>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: '1.7',
                  marginBottom: '20px',
                  color: '#64748b'
                }}>
                  {benefit.description}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {benefit.stats.map((stat, i) => (
                    <div key={i} style={{
                      fontSize: '0.9rem',
                      color: '#3b82f6',
                      fontWeight: '500'
                    }}>
                      ✓ {stat}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div style={{
            background: 'rgba(59, 130, 246, 0.05)',
            borderRadius: '20px',
            padding: '40px',
            border: '1px solid rgba(59, 130, 246, 0.2)',
            textAlign: 'center'
          }}>
            <h3 style={{
              fontSize: '1.8rem',
              marginBottom: '20px',
              background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: '700'
            }}>
              💡 Industry Standard Compression
            </h3>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.7', maxWidth: '900px', margin: '0 auto', color: '#64748b' }}>
              Join <strong style={{ color: '#1e293b' }}>30,000+ professionals</strong> using Scenith Media Compressor for web optimization,
              social media content, marketing campaigns, and creative projects. Free tier includes unlimited compressions with no watermarks.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="how-section" id="how-it-works" role="region" aria-labelledby="how-it-works-title">
        <motion.div
          className="container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 id="how-it-works-title">How to Compress Media in 3 Simple Steps</h2>
          <p className="section-description">
            Optimize your images and videos effortlessly with our AI-powered compression tool. No technical skills needed—just upload, set size, and download!
          </p>
          <div className="steps-grid" role="list">
            <motion.article className="step-card" whileHover={{ scale: 1.05 }} role="listitem">
              <div className="step-number" aria-label="Step 1">1</div>
              <h3>Upload Your Media</h3>
              <p>Choose an image (JPEG, PNG, HEIC) or video and upload it securely to our platform.</p>
            </motion.article>
            <motion.article className="step-card" whileHover={{ scale: 1.05 }} role="listitem">
              <div className="step-number" aria-label="Step 2">2</div>
              <h3>Set Target Size</h3>
              <p>Specify your desired file size (e.g., 500KB or 2MB) for optimized output.</p>
            </motion.article>
            <motion.article className="step-card" whileHover={{ scale: 1.05 }} role="listitem">
              <div className="step-number" aria-label="Step 3">3</div>
              <h3>Compress & Download</h3>
              <p>Compress your media in seconds and download the optimized file directly to your device.</p>
            </motion.article>
          </div>
        </motion.div>
      </section>

      <section className="features-section" id="features" role="region" aria-labelledby="features-title">
        <motion.div
          className="container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 id="features-title">Why Choose Our Media Compressor?</h2>
          <p className="section-description">
            Experience fast, high-quality media compression with our advanced algorithms. Perfect for creators, businesses, and developers.
          </p>
          <div className="features-grid" role="list">
            <motion.article className="feature-card" whileHover={{ scale: 1.05 }} role="listitem">
              <span className="feature-icon" aria-hidden="true">⚡</span>
              <h3>Instant Compression</h3>
              <p>Compress images and videos in seconds with minimal quality loss, optimized for web and social media.</p>
            </motion.article>
            <motion.article className="feature-card" whileHover={{ scale: 1.05 }} role="listitem">
              <span className="feature-icon" aria-hidden="true">🖼️</span>
              <h3>Wide Format Support</h3>
              <p>Supports JPEG, PNG, HEIC images, and popular video formats like MP4, MOV, and AVI.</p>
            </motion.article>
            <motion.article className="feature-card" whileHover={{ scale: 1.05 }} role="listitem">
              <span className="feature-icon" aria-hidden="true">🆓</span>
              <h3>Free & Unlimited</h3>
              <p>Compress unlimited media for free with no watermarks. Full commercial use allowed.</p>
            </motion.article>
            <motion.article className="feature-card" whileHover={{ scale: 1.05 }} role="listitem">
              <span className="feature-icon" aria-hidden="true">📱</span>
              <h3>Mobile Optimized</h3>
              <p>Responsive interface for seamless compression on desktops, tablets, and smartphones.</p>
            </motion.article>
          </div>
        </motion.div>
      </section>
{/* Compression Technology Deep Dive */}
<section style={{
  padding: '100px 20px',
  background: '#ffffff',
  borderTop: '1px solid rgba(226, 232, 240, 0.8)',
  borderBottom: '1px solid rgba(226, 232, 240, 0.8)'
}}>
  <div className="container" style={{ maxWidth: '1400px', margin: '0 auto' }}>
    <motion.div
      style={{ textAlign: 'center', marginBottom: '80px' }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h2 style={{
        fontSize: 'clamp(2rem, 4vw, 3rem)',
        marginBottom: '25px',
        fontWeight: '700',
        color: '#1e293b'
      }}>
        Advanced Compression Technology
      </h2>
      <p style={{
        fontSize: '1.1rem',
        maxWidth: '800px',
        margin: '0 auto',
        color: '#64748b',
        lineHeight: '1.7'
      }}>
        Understanding how our intelligent algorithms optimize your media while preserving visual quality
      </p>
    </motion.div>

    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '40px'
    }}>
      {[
        {
          title: 'Smart Image Optimization',
          icon: '🖼️',
          description: 'Our AI-powered engine analyzes image content to determine optimal compression settings. Preserves important details while removing redundant data.',
          features: [
            'JPEG: Lossy compression with quality control',
            'PNG: Lossless optimization for graphics',
            'HEIC: Modern format with superior efficiency',
            'WebP conversion for 30% smaller files'
          ]
        },
        {
          title: 'Video Compression Engine',
          icon: '🎥',
          description: 'Advanced video codec optimization reduces file sizes dramatically while maintaining visual fidelity. Perfect for social media and web streaming.',
          features: [
            'H.264/H.265 encoding optimization',
            'Bitrate adjustment for target size',
            'Frame rate preservation',
            'Audio quality balancing'
          ]
        },
        {
          title: 'Adaptive Quality Settings',
          icon: '⚙️',
          description: 'Automatically adjusts compression parameters based on content type, target size, and quality requirements. No manual tuning needed.',
          features: [
            'Content-aware compression',
            'Perceptual quality optimization',
            'Target size accuracy within 5%',
            'Batch processing support'
          ]
        }
      ].map((tech, index) => (
        <motion.div
          key={index}
          style={{
            background: 'linear-gradient(145deg, #f8fafc, #ffffff)',
            border: '1px solid rgba(226, 232, 240, 0.8)',
            borderRadius: '20px',
            padding: '40px',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.06)'
          }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          whileHover={{
            boxShadow: '0 8px 25px rgba(59, 130, 246, 0.15)',
            borderColor: 'rgba(59, 130, 246, 0.3)'
          }}
        >
          <div style={{ fontSize: '3.5rem', marginBottom: '20px' }}>{tech.icon}</div>
          <h3 style={{
            fontSize: '1.6rem',
            marginBottom: '15px',
            fontWeight: '600',
            color: '#1e293b'
          }}>
            {tech.title}
          </h3>
          <p style={{
            fontSize: '1rem',
            lineHeight: '1.7',
            marginBottom: '25px',
            color: '#64748b'
          }}>
            {tech.description}
          </p>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            fontSize: '0.95rem',
            color: '#64748b'
          }}>
            {tech.features.map((feature, i) => (
              <li key={i} style={{
                padding: '10px 0',
                borderBottom: i < tech.features.length - 1 ? '1px solid rgba(226, 232, 240, 0.8)' : 'none'
              }}>
                <span style={{ color: '#3b82f6', marginRight: '10px', fontWeight: '600' }}>✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </div>
</section>
      <section className="use-cases-section" id="use-cases" role="region" aria-labelledby="use-cases-title">
        <motion.div
          className="container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 id="use-cases-title">Perfect for Every Media Project</h2>
          <p className="section-description">
            Discover how creators and businesses use our media compressor to optimize content across industries.
          </p>
          <div className="use-cases-grid" role="list">
            <motion.article className="use-case-card" whileHover={{ scale: 1.03 }} role="listitem">
              <h3>🌐 Web Optimization</h3>
              <p>Reduce image and video sizes for faster website loading and better SEO performance.</p>
            </motion.article>
            <motion.article className="use-case-card" whileHover={{ scale: 1.03 }} role="listitem">
              <h3>📱 Social Media</h3>
              <p>Compress media for Instagram, TikTok, and YouTube to meet platform size limits without quality loss.</p>
            </motion.article>
            <motion.article className="use-case-card" whileHover={{ scale: 1.03 }} role="listitem">
              <h3>💼 Business Content</h3>
              <p>Optimize visuals for presentations, marketing materials, and emails to save bandwidth.</p>
            </motion.article>
            <motion.article className="use-case-card" whileHover={{ scale: 1.03 }} role="listitem">
              <h3>🎨 Creative Projects</h3>
              <p>Create lightweight assets for graphic design, video editing, and digital art projects.</p>
            </motion.article>
          </div>
        </motion.div>
      </section>
{/* Comparison with Other Tools */}
<section style={{
  padding: '100px 20px',
  background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 50%, #f8fafc 100%)',
  borderTop: '1px solid rgba(226, 232, 240, 0.8)',
  borderBottom: '1px solid rgba(226, 232, 240, 0.8)'
}}>
  <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
    <motion.div
      style={{ textAlign: 'center', marginBottom: '80px' }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h2 style={{
        fontSize: 'clamp(2rem, 4vw, 3rem)',
        marginBottom: '25px',
        fontWeight: '700',
        color: '#1e293b'
      }}>
        Scenith vs Other Compression Tools
      </h2>
      <p style={{
        fontSize: '1.1rem',
        maxWidth: '800px',
        margin: '0 auto',
        color: '#64748b'
      }}>
        See why thousands choose Scenith for professional media compression
      </p>
    </motion.div>

    <motion.div
      style={{
        background: '#ffffff',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(226, 232, 240, 0.8)',
        borderRadius: '24px',
        padding: '50px',
        overflowX: 'auto',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.06)'
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <table style={{
        width: '100%',
        borderCollapse: 'separate',
        borderSpacing: 0
      }}>
        <thead>
          <tr style={{
            borderBottom: '2px solid rgba(59, 130, 246, 0.3)',
            background: 'rgba(59, 130, 246, 0.05)'
          }}>
            <th style={{
              padding: '20px',
              textAlign: 'left',
              fontSize: '1.1rem',
              fontWeight: '600',
              color: '#1e293b'
            }}>Feature</th>
            <th style={{
              padding: '20px',
              textAlign: 'center',
              fontSize: '1.1rem',
              fontWeight: '600',
              background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Scenith</th>
            <th style={{
              padding: '20px',
              textAlign: 'center',
              fontSize: '1.1rem',
              fontWeight: '600',
              color: '#64748b'
            }}>Other Tools</th>
          </tr>
        </thead>
        <tbody>
          {[
            { feature: 'Image Formats', scenith: '✅ JPEG, PNG, HEIC, WebP', other: '⚠️ Limited formats' },
            { feature: 'Video Support', scenith: '✅ MP4, MOV, AVI, all codecs', other: '❌ Often image-only' },
            { feature: 'Target Size Control', scenith: '✅ Exact size specification', other: '⚠️ Quality % only' },
            { feature: 'File Size Limit (Free)', scenith: '✅ Up to 50MB', other: '❌ 5-10MB limit' },
            { feature: 'Watermarks', scenith: '✅ None - ever', other: '❌ Added on free tier' },
            { feature: 'Commercial Use', scenith: '✅ Full rights included', other: '⚠️ Paid upgrade required' },
            { feature: 'Re-compression', scenith: '✅ Unlimited attempts', other: '❌ Limited tries' }
          ].map((row, index) => (
            <motion.tr
              key={index}
              style={{
                borderBottom: index < 9 ? '1px solid rgba(226, 232, 240, 0.8)' : 'none',
                transition: 'all 0.3s ease'
              }}
              whileHover={{
                background: 'rgba(59, 130, 246, 0.05)'
              }}
            >
              <td style={{
                padding: '20px',
                fontWeight: '500',
                color: '#1e293b'
              }}>
                {row.feature}
              </td>
              <td style={{
                padding: '20px',
                textAlign: 'center',
                color: '#1e293b',
                fontWeight: '600'
              }}>
                {row.scenith}
              </td>
              <td style={{
                padding: '20px',
                textAlign: 'center',
                color: '#64748b'
              }}>
                {row.other}
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </motion.div>

    <motion.div
      style={{
        textAlign: 'center',
        marginTop: '60px',
        padding: '40px',
        background: 'rgba(59, 130, 246, 0.05)',
        borderRadius: '20px',
        border: '1px solid rgba(59, 130, 246, 0.2)',
        boxShadow: '0 4px 15px rgba(59, 130, 246, 0.1)'
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h3 style={{
        fontSize: '1.8rem',
        marginBottom: '20px',
        background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontWeight: '700'
      }}>
        💡 The Smart Choice for Media Compression
      </h3>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.8', maxWidth: '900px', margin: '0 auto', color: '#64748b' }}>
        Scenith combines advanced AI algorithms, generous file size limits, and unlimited free compression
        with zero watermarks. Start optimizing your media for web, social media, and professional projects today.
      </p>
    </motion.div>
  </div>
</section>
      <section className="testimonials-section" id="testimonials" role="region" aria-labelledby="testimonials-title">
        <motion.div
          className="container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 id="testimonials-title">Trusted by Over 30,000+ Creators Worldwide</h2>
          <p className="section-description">
            Join thousands of users who rely on our media compressor for their content creation needs.
          </p>
          <div className="testimonials-grid" role="list">
            <motion.blockquote className="testimonial-card" whileHover={{ scale: 1.05 }} role="listitem">
              <p>"This compressor saved my website’s loading time! Images are crisp and load fast, even on mobile."</p>
              <cite>– Sarah Kim, Web Developer</cite>
              <div className="rating" aria-label="5 out of 5 stars">⭐⭐⭐⭐⭐</div>
            </motion.blockquote>
            <motion.blockquote className="testimonial-card" whileHover={{ scale: 1.05 }} role="listitem">
              <p>"Perfect for my social media posts. I can upload high-quality videos within platform limits."</p>
              <cite>– Jake Patel, Content Creator</cite>
              <div className="rating" aria-label="5 out of 5 stars">⭐⭐⭐⭐⭐</div>
            </motion.blockquote>
            <motion.blockquote className="testimonial-card" whileHover={{ scale: 1.05 }} role="listitem">
              <p>"The free tier is amazing for my small business. Compressed media looks great in our campaigns."</p>
              <cite>– Emma Lopez, Marketing Manager</cite>
              <div className="rating" aria-label="5 out of 5 stars">⭐⭐⭐⭐⭐</div>
            </motion.blockquote>
          </div>
        </motion.div>
      </section>

      <section className="faq-section" id="faq" role="region" aria-labelledby="faq-title">
        <motion.div
          className="container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 id="faq-title">Frequently Asked Questions About Media Compression</h2>
          <p className="section-description">
            Everything you need to know about compressing images and videos with Scenith
          </p>
          <div className="faq-grid" role="list">
            <article className="faq-item" role="listitem">
              <h3>What file formats are supported?</h3>
              <p>
                <strong>Images:</strong> JPEG, PNG, and HEIC are fully supported. We also recommend converting to WebP for 30% better compression.
                <strong>Videos:</strong> MP4, MOV, AVI, and other common formats work perfectly. Free tier supports files up to 50MB.
              </p>
            </article>
            <article className="faq-item" role="listitem">
              <h3>How do I set the target file size?</h3>
              <p>
                Enter your desired size using formats like "500KB" for images or "2MB" for videos. Our intelligent algorithm
                optimizes compression to match your target within 5% accuracy while preserving maximum visual quality.
              </p>
            </article>
            <article className="faq-item" role="listitem">
              <h3>Is there quality loss during compression?</h3>
              <p>
                Minimal quality loss occurs with our AI-optimized algorithms. For most web and social media uses,
                the difference is imperceptible. You can re-compress with different settings until you achieve your
                desired balance of size vs. quality.
              </p>
            </article>
            <article className="faq-item" role="listitem">
              <h3>Can I use compressed media commercially?</h3>
              <p>
                Yes! All compressed files come with full commercial use rights and zero watermarks, even on the free tier.
                Perfect for websites, marketing materials, social media content, client projects, and business applications.
              </p>
            </article>
            <article className="faq-item" role="listitem">
              <h3>What are the file size limits?</h3>
              <p>
                The free BASIC plan supports files up to 50MB. CREATOR plan increases this to 200MB, and STUDIO plan
                allows files up to 500MB. Perfect for high-resolution images, 4K videos, and professional content.
              </p>
            </article>
            <article className="faq-item" role="listitem">
              <h3>How fast is the compression process?</h3>
              <p>
                Most images compress in under 5 seconds. Videos take 10-30 seconds depending on length and resolution.
                Our cloud-based processing ensures fast results without taxing your device's resources.
              </p>
            </article>
            <article className="faq-item" role="listitem">
              <h3>Can I compress multiple files at once?</h3>
              <p>
                Yes! Batch processing is available on CREATOR and STUDIO plans. Upload multiple files and compress
                them simultaneously to save time. Free BASIC users can process files sequentially without limits.
              </p>
            </article>
            <article className="faq-item" role="listitem">
              <h3>What happens to my uploaded files?</h3>
              <p>
                Your files are securely stored in the cloud and accessible only to your account. Original files remain
                unchanged, and you can re-compress anytime. Files are automatically deleted after 30 days of inactivity
                for your privacy and security.
              </p>
            </article>
          </div>
        </motion.div>
      </section>

      <section className="cta-section" id="get-started" role="region" aria-labelledby="cta-title">
        <motion.div
          className="container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 id="cta-title">Ready to Optimize Your Media?</h2>
          <p>Join over 30,000+ creators who trust our media compressor. Start optimizing your images and videos today—completely free!</p>
          <button
            className="cta-button"
            onClick={() => {
              if (!isLoggedIn) {
                setShowLoginModal(true);
              } else {
                scrollToSection("hero");
              }
            }}
            aria-label="Start using the free media compressor tool"
          >
            {isLoggedIn ? "Compress Now - Free!" : "Login to Start Compressing"}
          </button>
          <div className="cta-features">
            <span>⚡ Instant compression</span>
            <span>🔒 Secure & private</span>
          </div>
        </motion.div>
      </section>
      <DeleteConfirmModal
        isOpen={deleteModalOpen}
        onClose={() => {
          setDeleteModalOpen(false);
          setItemToDelete(null);
        }}
        onConfirm={handleDeleteConfirm}
        itemName={itemToDelete?.name || ''}
        isDeleting={isDeleting}
      />

      {showLoginModal && (
        <div className="modal-overlay">
          <motion.div
            className="login-modal"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <button
              className="modal-close-button"
              onClick={() => setShowLoginModal(false)}
              aria-label="Close login modal"
            >
              <FaTimes />
            </button>
            <div className="auth-container">
              <div className="auth-header">
                <h1>SCENITH</h1>
                <p>Login to Continue</p>
              </div>
              {isLoggingIn && (
                <div className="loading-overlay">
                  <div className="spinner" />
                  <p>Logging in...</p>
                </div>
              )}
              {loginError && <div className="error-message">{loginError}</div>}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  handleLogin({
                    email: formData.get("email") as string,
                    password: formData.get("password") as string,
                  });
                }}
                className="auth-form"
              >
                <div className="auth-input-label">
                  <input
                    type="email"
                    name="email"
                    placeholder=" "
                    className="auth-input"
                    aria-label="Email address"
                    disabled={isLoggingIn}
                    required
                  />
                  <span>Email</span>
                </div>
                <div className="auth-input-label">
                  <input
                    type="password"
                    name="password"
                    placeholder=" "
                    className="auth-input"
                    aria-label="Password"
                    disabled={isLoggingIn}
                    required
                  />
                  <span>Password</span>
                </div>
                <button type="submit" className="cta-button auth-button" disabled={isLoggingIn}>
                  {isLoggingIn ? "Logging in..." : "Login"}
                </button>
              </form>
              <div className="divider">OR</div>
              <div id="googleSignInButton" className="google-button"></div>
              <p className="auth-link">
                New to SCENITH? <a href="/register">Sign up</a>
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default CompressMediaClient;