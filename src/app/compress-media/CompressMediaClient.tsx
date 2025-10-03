"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import axios from "axios";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import { API_BASE_URL, CDN_URL } from "../config";
import "../../../styles/tools/CompressMedia.css";

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
  processedCdnUrl: string;
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

  // Initialize Google Sign-In
  useEffect(() => {
    const initializeGoogleSignIn = () => {
      if (window.google && window.google.accounts) {
        window.google.accounts.id.initialize({
          client_id: "475177334034-ufjdi8pebqvbgf9ogv0gs85nq9588a8m.apps.googleusercontent.com",
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

  // Handle download
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
            url: typeof window !== "undefined" ? window.location.href : "/compress-media",
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
            <div className="main-content">
              <div className="upload-section">
                <input
                  type="file"
                  id="media-upload"
                  accept="image/jpeg,image/png,image/heic,video/*"
                  onChange={handleFileChange}
                  disabled={!isLoggedIn || isUploading}
                  className="media-upload-input"
                  aria-label="Upload image or video"
                />
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
                    {isUploading ? "Uploading..." : isLoggedIn ? "Upload Media" : "Sign in / Login to compress"}
                  </button>
                </div>
                {uploadSuccess && <div className="success-message">{uploadSuccess}</div>}
              </div>

              <div className="media-list-section">
                <div className="fixed-header">
                  <h3>Your Media</h3>
                </div>
                <div className="scrollable-media">
                  {mediaList.length === 0 ? (
                    <div className="empty-state">
                      {isLoggedIn ? "No media uploaded yet." : "Login to view your media."}
                    </div>
                  ) : (
                    <div className="media-list">
                      {mediaList.map((media) => (
                        <div key={media.id} className="media-item">
                          <div className="media-details">
                            <div className="media-title">{media.originalFileName}</div>
                            <div className="media-info">
                              <span>Status: {media.status}</span>
                              <span>Target Size: {media.targetSize}</span>
                              {media.errorMessage && <span>Error: {media.errorMessage}</span>}
                            </div>
                            {media.status === "UPLOADED" && (
                              <button
                                onClick={() => handleCompress(media.id)}
                                className="cta-button compress-button"
                                disabled={isCompressing}
                                aria-label={`Compress ${media.originalFileName}`}
                              >
                                {isCompressing ? "Compressing..." : "Compress"}
                              </button>
                            )}
                            {media.status === "SUCCESS" && media.processedCdnUrl && (
                              <button
                                onClick={() => handleDownload(media.processedCdnUrl, `compressed_${media.originalFileName}`)}
                                className="cta-button download-button"
                                aria-label={`Download compressed ${media.originalFileName}`}
                              >
                                Download
                              </button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
            {error && (
              <div className="error-message" role="alert">
                {error}
              </div>
            )}
            <div className="trust-indicators">
              <span className="trust-item">✅ 100% Free</span>
              <span className="trust-item">🖼️ Supports JPEG, PNG, HEIC</span>
              <span className="trust-item">🎥 Video Compression</span>
              <span className="trust-item">📥 Instant Downloads</span>
            </div>
            <figure className="hero-image-container">
              <Image
                src="/images/media-compressor-hero.jpg"
                alt="Media compression example - images and videos optimized for web"
                className="hero-image"
                width={800}
                height={400}
                priority
              />
              <figcaption className="sr-only">Example of media compression for images and videos</figcaption>
            </figure>
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
          <h2 id="faq-title">Frequently Asked Questions</h2>
          <div className="faq-grid" role="list">
            <article className="faq-item" role="listitem">
              <h3>What file formats are supported?</h3>
              <p>We support JPEG, PNG, HEIC for images, and popular video formats like MP4, MOV, and AVI.</p>
            </article>
            <article className="faq-item" role="listitem">
              <h3>Is the compressed media commercial use allowed?</h3>
              <p>Yes! All compressed media can be used commercially with no watermarks.</p>
            </article>
            <article className="faq-item" role="listitem">
              <h3>How do I set the target size?</h3>
              <p>Enter a size like "500KB" or "2MB". Our tool optimizes the media to match your target closely.</p>
            </article>
            <article className="faq-item" role="listitem">
              <h3>Is there a file size limit?</h3>
              <p>The free tier supports files up to 50MB. Contact us for larger files or premium plans.</p>
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