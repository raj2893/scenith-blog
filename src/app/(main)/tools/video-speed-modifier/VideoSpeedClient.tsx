"use client";

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import { API_BASE_URL, CDN_URL } from '../../../config';
import '../../../../../styles/tools/VideoSpeed.css';
import Script from 'next/script';
import { debounce } from 'lodash';
import DeleteConfirmModal from '../../../../components/DeleteConfirmModal';

// Define TypeScript interfaces
interface UserProfile {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  picture: string | null;
  googleAuth: boolean;
  role: string;
}

interface VideoUpload {
  id: number;
  status: string;
  progress: number;
  speed: number;
  cdnUrl: string | null;
  originalFilePath: string;
}

interface LoginFormData {
  email: string;
  password: string;
}

const CustomVideoPlayer = ({ src, userId, speed }: { src: string; userId: number; speed: number }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const videoUrl = src ? `${CDN_URL}/speed-videos/${userId}/${encodeURIComponent(src)}` : '';

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = speed;
    }
  }, [speed]);  

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
      videoRef.current.playbackRate = speed;
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const width = rect.width;
      const newTime = (clickX / width) * duration;
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  return (
    <div className="custom-video-player">
      <video
        ref={videoRef}
        src={videoUrl}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
        style={{
          display: 'block',
          width: '100%',
          height: '360px',
          objectFit: 'contain',
          margin: '0 auto',
          borderRadius: '12px',
          background: '#000',
        }}
      />
      <div className="video-controls">
        <button
          onClick={togglePlayPause}
          className="play-pause-button"
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
        >
          {isPlaying ? '⏸️' : '▶️'}
        </button>
        <div className="time-info">
          <span>{formatTime(currentTime)}</span>
          <span>/</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>
      <div className="progress-bar" onClick={handleSeek}>
        <div
          className="progress-fill"
          style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
        />
      </div>
    </div>
  );
};

const VideoSpeedClient: React.FC = () => {
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
  const [uploads, setUploads] = useState<VideoUpload[]>([]);
  const [selectedUpload, setSelectedUpload] = useState<VideoUpload | null>(null);
  const [speed, setSpeed] = useState<number>(1.0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loginSuccess, setLoginSuccess] = useState<string>('');
  const [availableQualities, setAvailableQualities] = useState<string[]>([]);
  const [selectedQuality, setSelectedQuality] = useState<string>('720p');  
  const [isUploading, setIsUploading] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<{id: number; name: string; type: string} | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  // Handle scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check auth status and fetch user profile
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
            localStorage.removeItem('userProfile');
            setIsLoggedIn(false);
          }
        });
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  // Fetch user videos
  useEffect(() => {
    if (!isLoggedIn) return;
    const fetchVideos = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/video-speed/user-videos`, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        setUploads(response.data);
      } catch (error) {
        console.error('Error fetching videos:', error);
        setUploads([]);
      }
    };
    fetchVideos();
  }, [isLoggedIn]);

  const getAvailableQualities = (role: string): string[] => {
    switch (role) {
      case 'BASIC':
        return ['144p', '240p', '360p', '480p', '720p'];
      case 'CREATOR':
        return ['144p', '240p', '360p', '480p', '720p', '1080p', '1440p', '2k'];
      case 'STUDIO':
      case 'ADMIN':
        return ['144p', '240p', '360p', '480p', '720p', '1080p', '1440p', '2k', '4k'];
      default:
        return ['720p'];
    }
  };
  
  const getDefaultQuality = (role: string): string => {
    switch (role) {
      case 'BASIC':
        return '720p';
      case 'CREATOR':
        return '1080p';
      case 'STUDIO':
      case 'ADMIN':
        return '1440p';
      default:
        return '720p';
    }
  };
  
  // Add useEffect
  useEffect(() => {
    if (userProfile.role) {
      const qualities = getAvailableQualities(userProfile.role);
      setAvailableQualities(qualities);
      setSelectedQuality(getDefaultQuality(userProfile.role));
    }
  }, [userProfile.role]);  

  // Handle login form submission
  const handleLogin = async (formData: LoginFormData) => {
    setIsLoggingIn(true);
    setLoginError(null);
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/login`, formData);
      const { token } = response.data;
      localStorage.setItem('token', token);
      await axios.get(`${API_BASE_URL}/auth/me`, {
        headers: { Authorization: `Bearer ${token}` },
      }).then((res) => {
        const fullName = res.data.name || '';
        const nameParts = fullName.trim().split(' ');
        const firstName = nameParts[0] || '';
        const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : '';
        setUserProfile({
          id: res.data.id || '',
          email: res.data.email || '',
          firstName,
          lastName,
          picture: res.data.picture || null,
          googleAuth: res.data.googleAuth || false,
          role: res.data.role || 'BASIC',
        });
        setIsLoggedIn(true);
        setShowLoginModal(false);
      });
    } catch (error: any) {
      setLoginError(error.response?.data?.message || 'Login failed. Please check your credentials.');
    } finally {
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
      localStorage.setItem('userProfile', JSON.stringify({
        email: response.data.email,
        name: response.data.name,
        picture: response.data.picture || null,
        googleAuth: true,
      }));
      setLoginSuccess('Google login successful!');
      setTimeout(() => {
        axios.get(`${API_BASE_URL}/auth/me`, {
          headers: { Authorization: `Bearer ${response.data.token}` },
        }).then((res) => {
          const fullName = res.data.name || '';
          const nameParts = fullName.trim().split(' ');
          const firstName = nameParts[0] || '';
          const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : '';
          setUserProfile({
            id: res.data.id || '',
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

  const handleDeleteConfirm = async () => {
    if (!itemToDelete) return;
    setIsDeleting(true);
    try {
      await axios.delete(
        `${API_BASE_URL}/api/video-speed/${itemToDelete.id}`,
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      );
      setUploads(uploads.filter(u => u.id !== itemToDelete.id));
      setSelectedUpload(null);
      setSpeed(1.0);
      setDeleteModalOpen(false);
      setItemToDelete(null);
    } catch (error: any) {
      setError(error.response?.data?.message || 'Failed to delete video.');
    } finally {
      setIsDeleting(false);
    }
  };

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

  // Require login
  const requireLogin = () => {
    if (!isLoggedIn) {
      setShowLoginModal(true);
      return false;
    }
    return true;
  };

  // Handle video selection
  const handleVideoSelect = async (uploadId: string) => {
    const upload = uploads.find((u) => u.id === Number(uploadId));
    setSelectedUpload(upload || null);
    setSpeed(upload ? upload.speed : 1.0);
    if (upload && isLoggedIn) {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/video-speed/status/${upload.id}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        setSelectedUpload(response.data);
        setSpeed(response.data.speed);
      } catch (error: any) {
        console.error('Error fetching video status:', error);
        setError(error.response?.data?.error || 'Failed to load video status.');
      }
    }
  };
  // Add these constants at the top of your VideoSpeedClient component
  const SUPPORTED_VIDEO_FORMATS = [
    'video/mp4',
    'video/quicktime', // .mov
    'video/x-msvideo', // .avi
    'video/x-matroska', // .mkv
    'video/webm',
    'video/mpeg',
    'video/x-flv'
  ];

  const SUPPORTED_VIDEO_EXTENSIONS = ['.mp4', '.mov', '.avi', '.mkv', '.webm', '.mpeg', '.mpg', '.flv'];

  const MAX_FILE_SIZE = 500 * 1024 * 1024; // 500MB

  // Add this validation function
  const validateVideoFile = (file: File): { valid: boolean; error?: string } => {
    // Check file type
    const fileExtension = file.name.toLowerCase().substring(file.name.lastIndexOf('.'));
    const isValidType = SUPPORTED_VIDEO_FORMATS.includes(file.type) ||
                        SUPPORTED_VIDEO_EXTENSIONS.includes(fileExtension);

    if (!isValidType) {
      return {
        valid: false,
        error: `Unsupported video format. Please upload one of: ${SUPPORTED_VIDEO_EXTENSIONS.join(', ')}`
      };
    }

    // Check file size
    if (file.size > MAX_FILE_SIZE) {
      return {
        valid: false,
        error: `File size exceeds 500MB limit. Your file is ${(file.size / (1024 * 1024)).toFixed(2)}MB`
      };
    }

    return { valid: true };
  };

  const handleVideoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!requireLogin()) return;

    const file = e.target.files?.[0];
    if (!file) return;

    // Validate the video file
    const validation = validateVideoFile(file);
    if (!validation.valid) {
      setError(validation.error || 'Invalid video file');
      e.target.value = ''; // Reset file input
      return;
    }

    setIsUploading(true);
    const formData = new FormData();
    formData.append('file', file);
    formData.append('speed', speed.toString());

    try {
      setError(null); // Clear any previous errors
      const response = await axios.post(`${API_BASE_URL}/api/video-speed/upload`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      setUploads((prev) => [...prev, response.data]);
      setSelectedUpload(response.data);
      setSpeed(response.data.speed);
      e.target.value = ''; // Reset file input on success
    } catch (error: any) {
      const errorMessage = error.response?.data?.error || 'Failed to upload video.';
      setError(errorMessage);
      e.target.value = ''; // Reset file input on error
    } finally {
      setIsUploading(false);
    }
  };

  // Handle speed change
  const handleSpeedChange = async (value: number) => {
    setSpeed(value);
    if (selectedUpload && isLoggedIn) {
      try {
        await axios.put(
          `${API_BASE_URL}/api/video-speed/${selectedUpload.id}/speed`,
          { speed: value },
          {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
          }
        );
        setSelectedUpload((prev) => prev ? { ...prev, speed: value } : prev);
      } catch (error: any) {
        console.error('Error updating speed:', error);
        setError(error.response?.data?.error || 'Failed to update speed.');
      }
    }
  };

  // Handle export
  const handleStartProcessing = async () => {
    if (!requireLogin()) return;
    if (!selectedUpload) {
      setError('Please select a video to process.');
      return;
    }
    setIsProcessing(true);
    setError(null);
    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/video-speed/${selectedUpload.id}/export`,
        null,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
          params: { quality: selectedQuality } 
        }
      );
      setSelectedUpload(response.data);

      // Poll job status
      const pollJobStatus = async () => {
        const interval = setInterval(async () => {
          try {
            const statusResponse = await axios.get(
              `${API_BASE_URL}/api/video-speed/status/${selectedUpload.id}`,
              {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
              }
            );
            setSelectedUpload(statusResponse.data);
            if (statusResponse.data.status === 'COMPLETED') {
              clearInterval(interval);
              setIsProcessing(false);
              setTimeout(() => {
                const outputSection = document.querySelector('.video-output-section');
                if (outputSection) {
                  outputSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
              }, 100);
            } else if (statusResponse.data.status === 'FAILED') {
              clearInterval(interval);
              setIsProcessing(false);
              setError('Video processing failed.');
            }
          } catch (error) {
            clearInterval(interval);
            setIsProcessing(false);
            setError('Error checking job status.');
          }
        }, 2000);
      };
      pollJobStatus();
    } catch (err: any) {
      setError(err.response?.data?.error || 'Failed to process video.');
      setIsProcessing(false);
    }
  };

  // Handle download
  const handleDownload = async () => {
    if (selectedUpload?.cdnUrl && userProfile.id) {
      try {
        const filename = selectedUpload.cdnUrl.split('/').pop() || `video-${Date.now()}.mp4`;
        const downloadUrl = `${CDN_URL}/speed-videos/${userProfile.id}/${filename}`;
        const response = await fetch(downloadUrl, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        const blob = await response.blob();
        const blobUrl = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = `speed-adjusted-video-${Date.now()}.mp4`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(blobUrl);
      } catch (error) {
        console.error('Download failed:', error);
        window.open(selectedUpload.cdnUrl, '_blank');
      }
    }
  };

  // Smooth scrolling for section links
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (!section) {
      if (sectionId === 'footer-section') {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      }
      return;
    }
    const navHeight = 80;
    const offsetPosition = section.offsetTop - navHeight - 20;
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };

  // Current date for SEO freshness
  const currentYear = new Date().getFullYear();

  return (
    <div className="video-speed-page">
      {/* Structured Data Scripts */}
      <Script
        id="video-speed-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'Scenith Video Speed Editor',
            description: 'Free AI-powered video speed editor to adjust playback speed of videos from 0.5x to 15x.',
            url: typeof window !== 'undefined' ? window.location.href : '/tools/video-speed-modifier',
            applicationCategory: 'MultimediaApplication',
            operatingSystem: 'Web Browser',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
            },
            author: {
              '@type': 'Organization',
              name: 'SCENITH AI VIDEO EDITOR',
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
          <h1>Free AI Video Speed Editor - Adjust Speed in Seconds</h1>
          <p className="hero-description">
            Change the playback speed of your videos instantly from 0.5x to 15x. Perfect for creating slow-motion effects, time-lapses, or custom-paced content. Free with MP4 downloads!
          </p>
          <div className="hero-cta-section">
            <div className="main-content">
              <div className="video-input-section">
                {isUploading && (
                  <div className="upload-loading-overlay">
                    <div className="upload-spinner"></div>
                    <p>Uploading your video...</p>
                  </div>
                )}    

                <div className="upload-section-container" style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <label className="custom-file-upload">
                    <input
                      type="file"
                      accept="video/*"
                      onChange={handleVideoUpload}
                      disabled={!isLoggedIn || isUploading}
                      className="video-upload-input"
                      aria-label="Upload video for speed adjustment"
                    />
                    <span className="upload-button">Upload Video <span className="upload-icon">⬆️</span></span>
                  </label>
                  <select
                    value={selectedUpload?.id || ''}
                    onChange={(e) => handleVideoSelect(e.target.value)}
                    className="video-select"
                    disabled={!isLoggedIn || uploads.length === 0 || isUploading}
                    aria-label="Select uploaded video"
                  >
                    <option value="">Select a Video</option>
                    {uploads.map((upload) => (
                      <option key={upload.id} value={upload.id}>
                        Video {upload.id} (Speed: {upload.speed}x)
                      </option>
                    ))}
                  </select>
                  {selectedUpload && (
                    <button
                      className="elegant-delete-button"
                      onClick={() => {
                        setDeleteModalOpen(true);
                        setItemToDelete({
                          id: selectedUpload.id,
                          name: `Video ${selectedUpload.id}`,
                          type: 'video'
                        });
                      }}
                      aria-label={`Delete video ${selectedUpload.id}`}
                      title="Delete this video"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2M10 11v6M14 11v6"/>
                      </svg>
                    </button>
                  )}
                </div>
                <div className="video-filter-container">
                  {selectedUpload && userProfile.id && selectedUpload.originalFilePath && (
                    <div className="video-preview">
                      <CustomVideoPlayer
                        src={selectedUpload.originalFilePath.split('\\').pop()?.split('/').pop() || ''}
                        userId={userProfile.id}
                        speed={speed}
                      />
                    </div>
                  )}
                  <div className="filter-controls">
                    <h3>Adjust Speed</h3>
                    <div className="filter-slider">
                      <label>Speed (0.5x - 15x)</label>
                      <input
                        type="range"
                        min={0.5}
                        max={15}
                        step={0.1}
                        value={speed}
                        onChange={(e) => handleSpeedChange(Number(e.target.value))}
                        disabled={!isLoggedIn || !selectedUpload}
                        aria-label="Adjust video speed"
                      />
                      <span>{speed.toFixed(1)}x</span>
                    </div>
                  </div>
                </div>
                {selectedUpload && (
                  <div className="quality-selector-container">
                    <label htmlFor="quality-select" className="quality-label">
                      Export Quality:
                    </label>
                    <select
                      id="quality-select"
                      value={selectedQuality}
                      onChange={(e) => setSelectedQuality(e.target.value)}
                      className="quality-select"
                      disabled={selectedUpload.status === 'PROCESSING'}
                    >
                      {availableQualities.map((quality) => (
                        <option key={quality} value={quality}>
                          {quality === '2k' ? '2K (1440p)' : quality === '4k' ? '4K (2160p)' : quality.toUpperCase()}
                        </option>
                      ))}
                    </select>
                    {userProfile.role === 'BASIC' && (
                      <p className="quality-upgrade-hint">
                        💡 Upgrade to <a href="/pricing">CREATOR</a> for up to 2K or <a href="/pricing">STUDIO</a> for 4K quality
                      </p>
                    )}
                    {userProfile.role === 'CREATOR' && (
                      <p className="quality-upgrade-hint">
                        💡 Upgrade to <a href="/pricing">STUDIO</a> for 4K quality
                      </p>
                    )}
                  </div>
                )}                
                <button
                  className="cta-button process-video-button"
                  onClick={handleStartProcessing}
                  disabled={isLoggedIn && (!selectedUpload || isProcessing)}
                  aria-label="Start video processing"
                >
                  {isProcessing ? 'Processing...' : isLoggedIn ? 'Start Processing' : 'Login to Process'}
                </button>
                {selectedUpload?.status === 'COMPLETED' && selectedUpload.cdnUrl && (
                  <div className="download-section" role="region" aria-labelledby="download-title">
                    <h3 id="download-title">Download Your Speed-Adjusted Video</h3>
                    <button
                      onClick={handleDownload}
                      className="cta-button download-button"
                      aria-label="Download speed-adjusted video as MP4"
                    >
                      Download MP4
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div className="trust-indicators">
              <span className="trust-item">✅ 100% Free</span>
              <span className="trust-item">⚡ Fast Speed Adjustment</span>
              <span className="trust-item">🎥 High-Quality Output</span>
              <span className="trust-item">📥 Instant MP4 Download</span>
            </div>
          </div>
          <figure className="hero-image-container">
            <Image
              src="/images/VideoSpeedModifierSS.png"
              alt="Video speed editor example showing speed adjustment and video preview"
              className="hero-image"
              width={800}
              height={400}
              priority
            />
            <figcaption className="sr-only">Example of video speed editor with speed slider and video preview</figcaption>
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
          <h2 id="how-it-works-title">How to Adjust Video Speed in 3 Simple Steps</h2>
          <p className="section-description">
            Change the playback speed of your videos effortlessly. No advanced editing skills required - just upload, adjust, and download.
          </p>
          <div className="steps-grid" role="list">
            <motion.article className="step-card" whileHover={{ scale: 1.05 }} role="listitem">
              <div className="step-number" aria-label="Step 1">1</div>
              <h3>Upload Your Video</h3>
              <p>Upload any video file (MP4, AVI, MOV, etc.). Our system securely stores it for processing.</p>
            </motion.article>
            <motion.article className="step-card" whileHover={{ scale: 1.05 }} role="listitem">
              <div className="step-number" aria-label="Step 2">2</div>
              <h3>Adjust Speed</h3>
              <p>Use the slider to set the desired speed from 0.5x (slow-motion) to 15x (fast-forward).</p>
            </motion.article>
            <motion.article className="step-card" whileHover={{ scale: 1.05 }} role="listitem">
              <div className="step-number" aria-label="Step 3">3</div>
              <h3>Process & Download</h3>
              <p>Apply the speed change and download your high-quality MP4 video in minutes.</p>
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
          <h2 id="features-title">Why Choose Our Video Speed Editor?</h2>
          <p className="section-description">
            Create dynamic videos with precise speed control powered by AI. No expensive software or expertise needed.
          </p>
          <div className="features-grid" role="list">
            <motion.article className="feature-card" whileHover={{ scale: 1.05 }} role="listitem">
              <span className="feature-icon" aria-hidden="true">⚡</span>
              <h3>Fast Processing</h3>
              <p>Adjust video speed in minutes with our optimized FFmpeg pipeline.</p>
            </motion.article>
            <motion.article className="feature-card" whileHover={{ scale: 1.05 }} role="listitem">
              <span className="feature-icon" aria-hidden="true">🎚️</span>
              <h3>Precise Speed Control</h3>
              <p>Fine-tune video speed from 0.5x to 15x for perfect pacing.</p>
            </motion.article>
            <motion.article className="feature-card" whileHover={{ scale: 1.05 }} role="listitem">
              <span className="feature-icon" aria-hidden="true">🆓</span>
              <h3>Free Access</h3>
              <p>Unlimited free usage with full commercial rights. No watermarks.</p>
            </motion.article>
            <motion.article className="feature-card" whileHover={{ scale: 1.05 }} role="listitem">
              <span className="feature-icon" aria-hidden="true">📱</span>
              <h3>Mobile Optimized</h3>
              <p>Responsive interface for editing videos on any device, anytime.</p>
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
          <h2 id="use-cases-title">Perfect for Every Video Project</h2>
          <p className="section-description">
            Discover how creators and professionals use our video speed editor to enhance their projects.
          </p>
          <div className="use-cases-grid" role="list">
            <motion.article className="use-case-card" whileHover={{ scale: 1.03 }} role="listitem">
              <h3>🎥 Social Media Content</h3>
              <p>Create engaging slow-motion or time-lapse videos for Instagram, TikTok, and YouTube.</p>
            </motion.article>
            <motion.article className="use-case-card" whileHover={{ scale: 1.03 }} role="listitem">
              <h3>🎬 Film Production</h3>
              <p>Add dramatic slow-motion or fast-paced effects to films and shorts.</p>
            </motion.article>
            <motion.article className="use-case-card" whileHover={{ scale: 1.03 }} role="listitem">
              <h3>💼 Marketing Videos</h3>
              <p>Adjust video speed to create compelling promotional content.</p>
            </motion.article>
            <motion.article className="use-case-card" whileHover={{ scale: 1.03 }} role="listitem">
              <h3>🎨 Creative Projects</h3>
              <p>Experiment with speed for unique effects in music videos or vlogs.</p>
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
            Join thousands of satisfied users who rely on our video speed editor for their creative projects.
          </p>
          <div className="testimonials-grid" role="list">
            <motion.blockquote className="testimonial-card" whileHover={{ scale: 1.05 }} role="listitem">
              <p>"This tool made my slow-motion videos look amazing! So easy to use and completely free."</p>
              <cite>– Sarah Kim, Content Creator</cite>
              <div className="rating" aria-label="5 out of 5 stars">⭐⭐⭐⭐⭐</div>
            </motion.blockquote>
            <motion.blockquote className="testimonial-card" whileHover={{ scale: 1.05 }} role="listitem">
              <p>"Perfect for adding dynamic speed effects to my short films. A must-have for indie filmmakers."</p>
              <cite>– Michael Chen, Filmmaker</cite>
              <div className="rating" aria-label="5 out of 5 stars">⭐⭐⭐⭐⭐</div>
            </motion.blockquote>
            <motion.blockquote className="testimonial-card" whileHover={{ scale: 1.05 }} role="listitem">
              <p>"The speed editor is a game-changer for our marketing videos. Fast and professional results."</p>
              <cite>– Emma Watson, Marketing Manager</cite>
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
              <h3>What video formats are supported?</h3>
              <p>We support popular formats like MP4, AVI, MOV, and more. Upload any standard video file to adjust speed.</p>
            </article>
            <article className="faq-item" role="listitem">
              <h3>Can I use the speed-adjusted videos commercially?</h3>
              <p>Yes! All processed videos are yours to use commercially, with no watermarks or restrictions.</p>
            </article>
            <article className="faq-item" role="listitem">
              <h3>What speed range is available?</h3>
              <p>You can adjust the video speed from 0.5x (slow-motion) to 15x (fast-forward) with precise control.</p>
            </article>
            <article className="faq-item" role="listitem">
              <h3>How long does processing take?</h3>
              <p>Processing typically takes a few minutes, depending on video length and speed settings.</p>
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
          <h2 id="cta-title">Ready to Adjust Your Video Speed?</h2>
          <p>Join over 30,000+ creators who trust our video speed editor. Start creating dynamic videos today - completely free!</p>
          <button
            className="cta-button"
            onClick={() => {
              if (!isLoggedIn) {
                setShowLoginModal(true);
              } else {
                scrollToSection('hero');
              }
            }}
            aria-label="Start using the free video speed editor"
          >
            {isLoggedIn ? 'Start Adjusting Now - Free!' : 'Login to Start Adjusting'}
          </button>
          <div className="cta-features">
            <span>⚡ Fast processing</span>
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
              {loginSuccess && <div className="success-message">{loginSuccess}</div>}
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
                New to SCENITH?{' '}
                <a href="/register">Sign up</a>
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default VideoSpeedClient;