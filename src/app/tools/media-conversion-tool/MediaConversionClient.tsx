"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import { API_BASE_URL } from '../../config';
import '../../../../styles/tools/MediaConversion.css';
import Script from 'next/script';
import { debounce } from 'lodash';

// Interfaces
interface UserProfile {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  picture: string | null;
  googleAuth: boolean;
  role: string;
}

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

interface LoginFormData {
  email: string;
  password: string;
}

const MediaConversionClient: React.FC = () => {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userProfile, setUserProfile] = useState<UserProfile>({
    id: 0,
    email: '',
    firstName: '',
    lastName: '',
    picture: null,
    googleAuth: false,
    role: '',
  });
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);
  const [loginError, setLoginError] = useState<string | null>(null);
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(false);
  const [uploads, setUploads] = useState<ConvertedMedia[]>([]);
  const [selectedUpload, setSelectedUpload] = useState<ConvertedMedia | null>(null);
  const [targetFormat, setTargetFormat] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [lastConvertedFormat, setLastConvertedFormat] = useState<string | null>(null);

  const videoFormats = ['MP4', 'AVI', 'MKV', 'MOV', 'WEBM', 'FLV', 'WMV'];
  const imageFormats = ['PNG', 'JPG', 'BMP', 'GIF', 'TIFF', 'WEBP'];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios
        .get(`${API_BASE_URL}/auth/me`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          const fullName = res.data.name || '';
          const nameParts = fullName.trim().split(' ');
          const firstName = nameParts[0] || '';
          const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : '';
          setUserProfile({
            id: res.data.id || 0,
            email: res.data.email || '',
            firstName,
            lastName,
            picture: res.data.picture || null,
            googleAuth: res.data.googleAuth || false,
            role: res.data.role || 'BASIC',
          });
          setIsLoggedIn(true);
          setShowLoginModal(false);
        })
        .catch((error) => {
          console.error('Error fetching user profile:', error);
          if (error.response?.status === 401) {
            localStorage.removeItem('token');
            setIsLoggedIn(false);
          }
        });
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  useEffect(() => {
    if (!isLoggedIn) return;
    const fetchUploads = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/conversion/user-media`, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        setUploads(response.data);
      } catch (error) {
        console.error('Error fetching uploads:', error);
        setUploads([]);
      }
    };
    fetchUploads();
  }, [isLoggedIn]);

  const handleLogin = async (formData: LoginFormData) => {
    setIsLoggingIn(true);
    setLoginError(null);
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/login`, formData);
      const { token } = response.data;
      localStorage.setItem('token', token);
      const res = await axios.get(`${API_BASE_URL}/auth/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const fullName = res.data.name || '';
      const nameParts = fullName.trim().split(' ');
      const firstName = nameParts[0] || '';
      const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : '';
      setUserProfile({
        id: res.data.id || 0,
        email: res.data.email || '',
        firstName,
        lastName,
        picture: res.data.picture || null,
        googleAuth: res.data.googleAuth || false,
        role: res.data.role || 'BASIC',
      });
      setIsLoggedIn(true);
      setShowLoginModal(false);
    } catch (error: any) {
      setLoginError(error.response?.data?.message || 'Login failed.');
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleGoogleLogin = useCallback(async (credentialResponse: any) => {
    setLoginError('');
    setIsLoggingIn(true);
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/google`, {
        token: credentialResponse.credential,
      });
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userProfile', JSON.stringify({
        email: response.data.email,
        name: response.data.name,
        picture: response.data.picture || null,
        googleAuth: true,
      }));
      setTimeout(() => {
        axios.get(`${API_BASE_URL}/auth/me`, {
          headers: { Authorization: `Bearer ${response.data.token}` },
        }).then((res) => {
          const fullName = res.data.name || '';
          const nameParts = fullName.trim().split(' ');
          const firstName = nameParts[0] || '';
          const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : '';
          setUserProfile({
            id: res.data.id || 0,
            email: res.data.email || '',
            firstName,
            lastName,
            picture: res.data.picture || null,
            googleAuth: res.data.googleAuth || false,
            role: res.data.role || 'BASIC',
          });
          setIsLoggedIn(true);
          setShowLoginModal(false);
          setIsLoggingIn(false);
        });
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
          client_id: '475177334034-ufjdi8pebqvbgf9ogv0gs85nq9588a8m.apps.googleusercontent.com',
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

  const handleMediaUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!requireLogin()) return;
    const file = e.target.files?.[0];
    if (!file) return;
    const formData = new FormData();
    formData.append('file', file);
    // Set default target format based on media type
    const defaultFormat = file.type.startsWith('video/') ? 'MP4' : 'PNG';
    formData.append('targetFormat', targetFormat || defaultFormat);
    try {
      const response = await axios.post(`${API_BASE_URL}/api/conversion/upload`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      setUploads((prev) => [...prev, response.data]);
      setSelectedUpload(response.data);
      setTargetFormat(response.data.targetFormat);
    } catch (error: any) {
      setError(error.response?.data?.message || 'Failed to upload media.');
    }
  };

  const handleMediaSelect = async (mediaId: string) => {
    const upload = uploads.find((u) => u.id === Number(mediaId));
    setSelectedUpload(upload || null);
    if (upload) {
      setTargetFormat(upload.targetFormat);
      setLastConvertedFormat(upload.status === 'SUCCESS' && upload.processedCdnUrl ? upload.targetFormat : null);
    }
  };

  const debouncedSave = useCallback(
    debounce(async (newTargetFormat: string) => {
      if (!requireLogin() || !selectedUpload) return;
      setIsSaving(true);
      setSaveSuccess(false);
      try {
        const response = await axios.put(
          `${API_BASE_URL}/api/conversion/update-target-format/${selectedUpload.id}`,
          null,
          {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
            params: { newTargetFormat },
          }
        );
        setSelectedUpload(response.data);
        setSaveSuccess(true);
        setTimeout(() => setSaveSuccess(false), 2000);
      } catch (error: any) {
        setError(error.response?.data?.message || 'Failed to update target format.');
      } finally {
        setIsSaving(false);
      }
    }, 500),
    [selectedUpload]
  );

  const handleTargetFormatChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newTargetFormat = e.target.value;
    setTargetFormat(newTargetFormat);
    setLastConvertedFormat(null);
    debouncedSave(newTargetFormat);
  };

  const handleStartProcessing = async () => {
    if (!requireLogin() || !selectedUpload) {
      setError('Please select a media file to process.');
      return;
    }
    if (!selectedUpload.targetFormat) {
      setError('Please set a target format before processing.');
      return;
    }
    setIsProcessing(true);
    setError(null);
    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/conversion/convert/${selectedUpload.id}`,
        {},
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      );
      setSelectedUpload(response.data);
      const pollJobStatus = async () => {
        const interval = setInterval(async () => {
          try {
            const statusResponse = await axios.get(
              `${API_BASE_URL}/api/conversion/user-media`,
              { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
            );
            const updatedMedia = statusResponse.data.find((m: ConvertedMedia) => m.id === selectedUpload.id);
            setSelectedUpload(updatedMedia);
            if (updatedMedia.status === 'SUCCESS' && updatedMedia.processedCdnUrl) {
              clearInterval(interval);
              setIsProcessing(false);
              setLastConvertedFormat(updatedMedia.targetFormat); // Set the converted format
              const outputSection = document.querySelector('.download-section');
              if (outputSection) {
                outputSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }
            } else if (updatedMedia.status === 'FAILED') {
              clearInterval(interval);
              setIsProcessing(false);
              setError(updatedMedia.errorMessage || 'Media conversion failed.');
            }
          } catch (error) {
            clearInterval(interval);
            setIsProcessing(false);
            setError('Error checking job status.');
          }
        }, 2000);
      };
      pollJobStatus();
    } catch (error: any) {
      setError(error.response?.data?.message || 'Failed to process media conversion.');
      setIsProcessing(false);
    }
  };

  const handleDownload = async () => {
    if (selectedUpload?.processedCdnUrl && userProfile.id && lastConvertedFormat) {
      try {
        const response = await fetch(selectedUpload.processedCdnUrl, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        if (!response.ok) throw new Error('Failed to fetch media.');
        const blob = await response.blob();
        const blobUrl = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = blobUrl;
        const extension = lastConvertedFormat.toLowerCase();
        link.download = `converted-media-${Date.now()}.${extension}`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(blobUrl);
      } catch (error) {
        console.error('Download failed:', error);
        setError('Failed to download media. Please try again.');
      }
    }
  };

  const requireLogin = () => {
    if (!isLoggedIn) {
      setShowLoginModal(true);
      return false;
    }
    return true;
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (!section) {
      if (sectionId === 'footer-section') {
        window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
      }
      return;
    }
    const navHeight = 80;
    const offsetPosition = section.offsetTop - navHeight - 20;
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  };

  return (
    <div className="media-conversion-page">
      <Script
        id="media-conversion-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'Scenith AI Media Converter',
            description: 'Free AI-powered tool to convert videos and images to various formats. Upload, select format, and download instantly.',
            url: typeof window !== 'undefined' ? window.location.href : '/tools/convert-media',
            applicationCategory: 'MultimediaApplication',
            operatingSystem: 'Web Browser',
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
            aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '15000' },
            author: { '@type': 'Organization', name: 'SCENITH AI VIDEO EDITOR' },
          }),
        }}
      />

      <div className="particle-background">
        {[...Array(6)].map((_, i) => <div key={i} className="particle" />)}
      </div>

      <section className="hero-section" id="hero" role="main">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Free AI Media Converter - Convert Videos & Images Instantly</h1>
          <p className="hero-description">
            Easily convert your videos and images to various formats with our AI-powered tool. Perfect for social media, professional projects, and more. Download high-quality files instantly.
          </p>
          <div className="hero-cta-section">
            <div className="main-content">
              <div className="media-input-section">
                <label className="custom-file-upload">
                  <input
                    type="file"
                    accept="video/*,image/*"
                    onChange={handleMediaUpload}
                    disabled={!isLoggedIn}
                    className="media-upload-input"
                    aria-label="Upload media for conversion"
                  />
                  <span className="upload-button">Upload Media <span className="upload-icon">⬆️</span></span>
                </label>
                <select
                  value={selectedUpload?.id || ''}
                  onChange={(e) => handleMediaSelect(e.target.value)}
                  className="media-select"
                  disabled={!isLoggedIn || uploads.length === 0}
                  aria-label="Select uploaded media"
                >
                  <option value="">Select a Media</option>
                  {uploads.map((upload) => (
                    <option key={upload.id} value={upload.id}>
                      {upload.originalFileName}
                    </option>
                  ))}
                </select>
                <div className="media-conversion-container">
                  <div className="conversion-controls">
                    <h3>Convert Media Format</h3>
                    <div className="format-selector">
                      <label>Target Format</label>
                        <select
                          value={targetFormat}
                          onChange={handleTargetFormatChange}
                          disabled={!isLoggedIn || !selectedUpload}
                          className="format-select"
                          aria-label="Select target format"
                        >
                          <option value="">Select Format</option>
                          {selectedUpload?.mediaType === 'VIDEO' && (
                            <optgroup label="Video Formats">
                              {videoFormats.map((format) => (
                                <option key={format} value={format}>
                                  {format}
                                </option>
                              ))}
                            </optgroup>
                          )}
                          {selectedUpload?.mediaType === 'IMAGE' && (
                            <optgroup label="Image Formats">
                              {imageFormats.map((format) => (
                                <option key={format} value={format}>
                                  {format}
                                </option>
                              ))}
                            </optgroup>
                          )}
                        </select>
                    </div>
                  </div>
                </div>
                <div className="action-buttons">
                  <button
                    className="cta-button process-media-button"
                    onClick={handleStartProcessing}
                    disabled={isLoggedIn && (!selectedUpload || isProcessing || !selectedUpload.targetFormat)}
                    aria-label="Start media conversion"
                  >
                    {isProcessing ? 'Processing...' : isLoggedIn ? 'Convert Media' : 'Login to Convert'}
                  </button>
                </div>
                {selectedUpload?.processedCdnUrl && lastConvertedFormat && (
                  <div className="download-section" role="region" aria-labelledby="download-title">
                    <h3 id="download-title">Download Your Converted Media</h3>
                    <button
                      onClick={handleDownload}
                      className="cta-button download-button"
                      aria-label="Download converted media"
                    >
                      Download {lastConvertedFormat}
                    </button>
                  </div>
                )}
                <div className="editor-save-status">
                  {isSaving && <span className="saving-indicator">💾 Saving...</span>}
                  {saveSuccess && <span className="saved-indicator">✓ Saved</span>}
                </div>
              </div>
            </div>
            <div className="trust-indicators">
              <span className="trust-item">✅ 100% Free</span>
              <span className="trust-item">🎥 Video & Image Conversion</span>
              <span className="trust-item">🌟 Multiple Formats</span>
              <span className="trust-item">📥 Instant Download</span>
            </div>
          </div>
          <figure className="hero-image-container">
            <Image
              src="/images/MediaConversionSS.png"
              alt="Media converter example showing format selection"
              className="hero-image"
              width={800}
              height={400}
              priority
            />
            <figcaption className="sr-only">Example of media converter with format selection</figcaption>
          </figure>
        </motion.div>
      </section>

      {error && (
        <div className="error-message" role="alert">
          {error}
        </div>
      )}

      <section className="how-section" id="how-it-works" role="region" aria-labelledby="how-it-works-title">
        <motion.div
          className="container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 id="how-it-works-title">How to Convert Media in 3 Simple Steps</h2>
          <p className="section-description">
            Easily convert your videos and images to your desired format with our intuitive tool. No advanced skills required.
          </p>
          <div className="steps-grid" role="list">
            <motion.article className="step-card" whileHover={{ scale: 1.05 }} role="listitem">
              <div className="step-number" aria-label="Step 1">1</div>
              <h3>Upload Your Media</h3>
              <p>Upload any video or image file (MP4, PNG, etc.). Our system securely stores it for processing.</p>
            </motion.article>
            <motion.article className="step-card" whileHover={{ scale: 1.05 }} role="listitem">
              <div className="step-number" aria-label="Step 2">2</div>
              <h3>Select Target Format</h3>
              <p>Choose your desired output format from a wide range of video and image formats.</p>
            </motion.article>
            <motion.article className="step-card" whileHover={{ scale: 1.05 }} role="listitem">
              <div className="step-number" aria-label="Step 3">3</div>
              <h3>Convert & Download</h3>
              <p>Convert your media and download the high-quality file instantly.</p>
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
          <h2 id="features-title">Why Choose Our Media Converter?</h2>
          <p className="section-description">
            Convert videos and images to various formats with ease and precision. No expensive software needed.
          </p>
          <div className="features-grid" role="list">
            <motion.article className="feature-card" whileHover={{ scale: 1.05 }} role="listitem">
              <span className="feature-icon" aria-hidden="true">⚡</span>
              <h3>Fast Conversion</h3>
              <p>Convert your media in seconds using our optimized processing pipeline.</p>
            </motion.article>
            <motion.article className="feature-card" whileHover={{ scale: 1.05 }} role="listitem">
              <span className="feature-icon" aria-hidden="true">🎨</span>
              <h3>Multiple Formats</h3>
              <p>Support for a wide range of video and image formats for all your needs.</p>
            </motion.article>
            <motion.article className="feature-card" whileHover={{ scale: 1.05 }} role="listitem">
              <span className="feature-icon" aria-hidden="true">🆓</span>
              <h3>Free Access</h3>
              <p>Unlimited free usage with full commercial rights. No watermarks.</p>
            </motion.article>
            <motion.article className="feature-card" whileHover={{ scale: 1.05 }} role="listitem">
              <span className="feature-icon" aria-hidden="true">📱</span>
              <h3>Mobile Optimized</h3>
              <p>Convert media on any device with our responsive interface.</p>
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
            Discover how creators and professionals use our media converter for their projects.
          </p>
          <div className="use-cases-grid" role="list">
            <motion.article className="use-case-card" whileHover={{ scale: 1.03 }} role="listitem">
              <h3>🎥 Social Media Content</h3>
              <p>Convert videos and images for Instagram, TikTok, and YouTube compatibility.</p>
            </motion.article>
            <motion.article className="use-case-card" whileHover={{ scale: 1.03 }} role="listitem">
              <h3>🎬 Film Production</h3>
              <p>Convert media for films or documentaries to desired formats.</p>
            </motion.article>
            <motion.article className="use-case-card" whileHover={{ scale: 1.03 }} role="listitem">
              <h3>💼 Educational Content</h3>
              <p>Format tutorials and courses for optimal platform compatibility.</p>
            </motion.article>
            <motion.article className="use-case-card" whileHover={{ scale: 1.03 }} role="listitem">
              <h3>🎨 Creative Projects</h3>
              <p>Convert media for music videos, vlogs, or art projects with ease.</p>
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
          <h2 id="testimonials-title">Trusted by Over 50,000+ Creators Worldwide</h2>
          <p className="section-description">
            Join thousands of satisfied users who rely on our media converter for their projects.
          </p>
          <div className="testimonials-grid" role="list">
            <motion.blockquote className="testimonial-card" whileHover={{ scale: 1.05 }} role="listitem">
              <p>"This tool made converting my videos for social media so easy!"</p>
              <cite>– Sarah Kim, Content Creator</cite>
              <div className="rating" aria-label="5 out of 5 stars">⭐⭐⭐⭐⭐</div>
            </motion.blockquote>
            <motion.blockquote className="testimonial-card" whileHover={{ scale: 1.05 }} role="listitem">
              <p>"Perfect for my film projects. The format options are great."</p>
              <cite>– Michael Chen, Filmmaker</cite>
              <div className="rating" aria-label="5 out of 5 stars">⭐⭐⭐⭐⭐</div>
            </motion.blockquote>
            <motion.blockquote className="testimonial-card" whileHover={{ scale: 1.05 }} role="listitem">
              <p>"Converting images for our courses was seamless. Highly recommend!"</p>
              <cite>– Emma Watson, Educator</cite>
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
              <h3>What media formats are supported?</h3>
              <p>We support videos (MP4, AVI, MOV, etc.) and images (PNG, JPG, etc.).</p>
            </article>
            <article className="faq-item" role="listitem">
              <h3>Can I change the format after uploading?</h3>
              <p>Yes, you can update the target format before conversion starts.</p>
            </article>
            <article className="faq-item" role="listitem">
              <h3>Will the media quality be affected?</h3>
              <p>Our tool maintains high-quality output using optimized encoding settings.</p>
            </article>
            <article className="faq-item" role="listitem">
              <h3>Is it really free?</h3>
              <p>Yes, our tool is completely free with no watermarks or usage limits.</p>
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
          <h2 id="cta-title">Ready to Convert Your Media?</h2>
          <p>Join over 50,000+ creators who trust our AI media converter. Start converting your media today - completely free!</p>
          <button
            className="cta-button"
            onClick={() => {
              if (!isLoggedIn) {
                setShowLoginModal(true);
              } else {
                scrollToSection('hero');
              }
            }}
            aria-label="Start using the free media converter"
          >
            {isLoggedIn ? 'Start Converting Media Now - Free!' : 'Login to Start Converting'}
          </button>
          <div className="cta-features">
            <span>⚡ Fast conversion</span>
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
                    email: formData.get('email') as string,
                    password: formData.get('password') as string,
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
                  {isLoggingIn ? 'Logging in...' : 'Login'}
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

export default MediaConversionClient;