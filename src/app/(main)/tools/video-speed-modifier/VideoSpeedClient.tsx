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
  const [useCustomSpeed, setUseCustomSpeed] = useState<boolean>(false);
  const [activePreset, setActivePreset] = useState<number | null>(1.0);
  const [showUpgradeModal, setShowUpgradeModal] = useState<boolean>(false);
  const [upgradeModalMessage, setUpgradeModalMessage] = useState<string>('');
  const [planLimits, setPlanLimits] = useState<{
    videosPerMonth: number;
    videosUsed: number;
    maxVideoLength: number;
    maxQuality: string;
  } | null>(null);  

  useEffect(() => {
    const fetchPlanLimits = async () => {
      if (!isLoggedIn) {
        setPlanLimits(null);
        return;
      }
  
      try {
        const response = await axios.get(`${API_BASE_URL}/api/video-speed/plan-limits`, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        setPlanLimits(response.data);
      } catch (error) {
        console.error('Error fetching plan limits:', error);
      }
    };
  
    fetchPlanLimits();
  }, [isLoggedIn, userProfile.role]);  

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

  const handlePresetSelect = async (presetValue: number) => {
    setActivePreset(presetValue);
    setUseCustomSpeed(false);
    setSpeed(presetValue); // Always update local speed immediately
    if (selectedUpload && isLoggedIn) {
      await handleSpeedChange(presetValue);
    }
    // If no video selected, speed is stored and will apply on next upload/select
  };

  const handleCustomSpeedToggle = () => {
    setUseCustomSpeed(true);
    setActivePreset(null);
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
  const SPEED_PRESETS = [
  { emoji: '🐌', label: 'Dramatic Slow', value: 0.5 },
  { emoji: '🎥', label: 'Cinematic', value: 0.75 },
  { emoji: '🙂', label: 'Natural', value: 1.0 },
  { emoji: '⚡', label: 'Social Fast', value: 1.25 },
  { emoji: '🔥', label: 'Reels Speed', value: 1.5 },
  { emoji: '🎓', label: 'Learning Mode', value: 2.0 },
  { emoji: '🚀', label: 'Timelapse', value: 4.0 },
  { emoji: '💨', label: 'Extreme Timelapse', value: 8.0 },
];

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
      
      setTimeout(() => {
        const errorElement = document.querySelector('.error-message');
        if (errorElement) {
          errorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
      
      e.target.value = '';
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

      const pollJobStatus = async () => {
        const interval = setInterval(async () => {
          try {
            const statusResponse = await axios.get(
              `${API_BASE_URL}/api/video-speed/status/${selectedUpload.id}`,
              { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
            );
            setSelectedUpload(statusResponse.data);
            if (statusResponse.data.status === 'COMPLETED') {
              clearInterval(interval);
              setIsProcessing(false);
            } else if (statusResponse.data.status === 'FAILED') {
              clearInterval(interval);
              setIsProcessing(false);
              setError('Video processing failed. Please try again.');
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
      setIsProcessing(false);
      const errorMsg: string = err.response?.data?.error || '';
      const isLimitError =
        errorMsg.toLowerCase().includes('monthly') ||
        errorMsg.toLowerCase().includes('limit reached') ||
        errorMsg.toLowerCase().includes('upgrade') ||
        err.response?.status === 400;

      if (isLimitError && errorMsg) {
        setUpgradeModalMessage(errorMsg);
        setShowUpgradeModal(true);
      } else {
        setError(errorMsg || 'Failed to process video.');
      }
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
      <nav aria-label="Breadcrumb" className="breadcrumb-nav">
        <ol itemScope itemType="https://schema.org/BreadcrumbList">
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <a href="/" itemProp="item">
              <span itemProp="name">Home</span>
            </a>
            <meta itemProp="position" content="1" />
          </li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <a href="/tools" itemProp="item">
              <span itemProp="name">Tools</span>
            </a>
            <meta itemProp="position" content="2" />
          </li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="name">Video Speed Modifier</span>
            <meta itemProp="position" content="3" />
          </li>
        </ol>
      </nav>
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
                {(isUploading || isProcessing) && (
                  <div className={isProcessing ? 'processing-overlay' : 'upload-loading-overlay'}>
                    {isUploading ? (
                      <>
                        <div className="upload-spinner"></div>
                        <p>Uploading your video...</p>
                      </>
                    ) : (
                      <>
                        <p className="processing-headline">
                          🎥 Rendering your cinematic magic 🎬
                          <span>Your video is being speed-adjusted with precision</span>
                        </p>

                        <div className="processing-progress-wrap">
                          <div className="processing-bar-track">
                            <div
                              className="processing-bar-fill"
                              style={{ width: `${selectedUpload?.progress ?? 20}%` }}
                            />
                          </div>
                          <div className="processing-bar-labels">
                            <span className="processing-percent">
                              {Math.round(selectedUpload?.progress ?? 20)}%
                            </span>
                            <span className="processing-status-text">
                              {(selectedUpload?.progress ?? 0) < 30
                                ? 'Downloading source video…'
                                : (selectedUpload?.progress ?? 0) < 50
                                ? 'Analyzing frames…'
                                : (selectedUpload?.progress ?? 0) < 80
                                ? 'Applying speed adjustment…'
                                : (selectedUpload?.progress ?? 0) < 90
                                ? 'Encoding output…'
                                : 'Finalizing & uploading…'}
                            </span>
                          </div>
                        </div>

                        <div className="processing-steps">
                          {[
                            { label: 'Download', threshold: 30 },
                            { label: 'Analyze', threshold: 50 },
                            { label: 'Process', threshold: 80 },
                            { label: 'Encode',  threshold: 90 },
                            { label: 'Upload',  threshold: 100 },
                          ].map((step) => {
                            const prog = selectedUpload?.progress ?? 0;
                            const isDone   = prog >= step.threshold;
                            const isActive = !isDone && prog >= step.threshold - 30;
                            return (
                              <div
                                key={step.label}
                                className={`processing-step ${isDone ? 'done' : isActive ? 'active' : ''}`}
                              >
                                <span className="processing-step-dot" />
                                {isDone ? '✓ ' : ''}{step.label}
                              </div>
                            );
                          })}
                        </div>
                      </>
                    )}
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

                    {/* Presets Grid — always interactive */}
                    <div className="speed-presets-grid">
                      {SPEED_PRESETS.map((preset) => (
                        <button
                          key={preset.value}
                          className={`speed-preset-btn ${activePreset === preset.value && !useCustomSpeed ? 'active' : ''}`}
                          onClick={() => handlePresetSelect(preset.value)}
                          disabled={isProcessing}
                          title={`${preset.label} — ${preset.value}x speed`}
                          aria-pressed={activePreset === preset.value && !useCustomSpeed}
                        >
                          <span className="preset-emoji">{preset.emoji}</span>
                          <span className="preset-label">{preset.label}</span>
                          <span className="preset-value">{preset.value}x</span>
                        </button>
                      ))}

                      {/* Custom Speed Button */}
                      <button
                        className={`speed-preset-btn custom-speed-btn ${useCustomSpeed ? 'active' : ''}`}
                        onClick={handleCustomSpeedToggle}
                        disabled={isProcessing}
                        title="Set a custom speed between 0.5x and 15x"
                        aria-pressed={useCustomSpeed}
                      >
                        <span className="preset-emoji">🎛️</span>
                        <span className="preset-label">Custom</span>
                        <span className="preset-value">{useCustomSpeed ? `${speed.toFixed(1)}x` : 'Any'}</span>
                      </button>
                    </div>

                    {/* Hint when no video is loaded yet */}
                    {!selectedUpload && (
                      <p className="presets-hint">
                        ✨ Pick a preset now — it applies when you upload a video
                      </p>
                    )}

                    {/* Current Speed Display */}
                    <div className="current-speed-display">
                      <span className="speed-label-text">Selected Speed:</span>
                      <span className="speed-badge">{speed.toFixed(2)}x</span>
                      {activePreset !== null && !useCustomSpeed && (
                        <span className="preset-name-badge">
                          {SPEED_PRESETS.find(p => p.value === activePreset)?.emoji}{' '}
                          {SPEED_PRESETS.find(p => p.value === activePreset)?.label}
                        </span>
                      )}
                      {useCustomSpeed && (
                        <span className="preset-name-badge" style={{ borderColor: '#f9a8d4', background: '#fdf2f8', color: '#9d174d' }}>
                          🎛️ Custom
                        </span>
                      )}
                    </div>

                    {/* Custom Speed Controls — shown only when Custom is active */}
                    {useCustomSpeed && (
                      <div className="custom-speed-slider">
                        <div className="filter-slider">
                          <label>Custom Speed (0.5x – 15x)</label>
                          <input
                            type="range"
                            min={0.5}
                            max={15}
                            step={0.1}
                            value={speed}
                            onChange={(e) => {
                              const val = Number(e.target.value);
                              setSpeed(val);
                              if (selectedUpload && isLoggedIn) handleSpeedChange(val);
                            }}
                            disabled={isProcessing}
                            aria-label="Adjust video speed"
                          />
                          <div className="slider-value-row">
                            <span>0.5x</span>
                            <input
                              type="number"
                              min={0.5}
                              max={15}
                              step={0.1}
                              value={speed}
                              onChange={(e) => {
                                const val = Math.min(15, Math.max(0.5, Number(e.target.value) || 0.5));
                                setSpeed(val);
                                if (selectedUpload && isLoggedIn) handleSpeedChange(val);
                              }}
                              className="speed-number-input"
                              aria-label="Speed value input"
                            />
                            <span>15x</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                {planLimits && (
                  <div className="usage-info">
                    <div className="usage-grid">
                      {/* Main Usage Section */}
                      <div className="usage-main">
                        <div className="usage-header">
                          <span className="usage-label">
                            📅 {/* For VideoSpeed: "Speed Videos" | For Subtitles: "Subtitle Videos" */} This Month
                          </span>
                          {planLimits.videosPerMonth !== -1 && (
                            <span className="usage-badge">
                              {planLimits.videosUsed}/{planLimits.videosPerMonth}
                            </span>
                          )}
                        </div>
                        
                        {planLimits.videosPerMonth === -1 ? (
                          <p className="usage-text">
                            <strong>Unlimited</strong> - No monthly video limit
                          </p>
                        ) : (
                          <>
                            <div className="usage-bar-container">
                              <div 
                                className={`usage-bar-fill ${
                                  (planLimits.videosUsed / planLimits.videosPerMonth) >= 0.95 ? 'critical' :
                                  (planLimits.videosUsed / planLimits.videosPerMonth) >= 0.80 ? 'warning' : 'normal'
                                }`}
                                style={{ width: `${(planLimits.videosUsed / planLimits.videosPerMonth) * 100}%` }}
                              />
                            </div>
                            <p className="usage-text">
                              <strong>{planLimits.videosPerMonth - planLimits.videosUsed}</strong> videos remaining
                            </p>
                                
                            {(planLimits.videosUsed / planLimits.videosPerMonth) >= 0.80 && 
                             (planLimits.videosPerMonth - planLimits.videosUsed) > 0 && (
                              <div className="usage-micro-warning">
                                ⚠️ Almost out of videos - Upgrade to avoid interruption
                              </div>
                            )}

                            {userProfile.role === 'BASIC' && (
                              <div className="inline-upgrade-cta">
                                <a href="/pricing" className="inline-upgrade-link">
                                  🔓 Upgrade to Creator for 9× more videos (45/month) →
                                </a>
                              </div>
                            )}
                          </>
                        )}
                      </div>
                      
                      {/* Limits Sidebar */}
                      <div className="limits-sidebar">
                        <div className="limit-item">
                          <span className="limit-icon">📏</span>
                          <div className="limit-details">
                            <div className="limit-label">Max Length</div>
                            <div className="limit-value">
                              {planLimits.maxVideoLength === -1 ? 'Unlimited' : `${planLimits.maxVideoLength} min`}
                            </div>
                          </div>
                        </div>

                        <div className="limit-item">
                          <span className="limit-icon">🎬</span>
                          <div className="limit-details">
                            <div className="limit-label">Max Quality</div>
                            <div className="limit-value">{planLimits.maxQuality}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}             
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
        <div className="cross-tool-promo">
          <p className="promo-text">
            💡 <strong>Pro Tip:</strong> Get all 3 AI tools (Voice + Subtitles + Speed) with Creator plan for less than buying individually!
          </p>
          <a href="/pricing" className="promo-link">Compare Plans →</a>
        </div>        
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

      {/* Educational Introduction Section */}
      <section className="educational-intro" role="complementary" aria-labelledby="intro-title">
        <div className="container">
          <h2 id="intro-title" className="section-subtitle">Transform Your Videos with AI-Powered Speed Control</h2>
          <div className="intro-content-grid">
            <div className="intro-text">
              <p className="intro-paragraph">
                <strong>AI video speed editing</strong> has revolutionized content creation by allowing precise control over playback speed from 0.5x to 15x. Whether you're a content creator, educator, filmmaker, or marketer, our advanced <strong>speed adjustment technology</strong> helps you create dynamic videos without expensive software or technical expertise.
              </p>
              <p className="intro-paragraph">
                Our neural network-powered system uses <strong>FFmpeg optimization</strong> for industry-leading speed processing across all video formats. Each speed change maintains audio quality and visual clarity—perfect for social media, YouTube, tutorials, and professional productions. Adjust speed with surgical precision to match your creative vision.
              </p>
              <p className="intro-paragraph">
                <strong>Why choose AI video speed editing?</strong> Save hours of manual editing time while creating professional slow-motion or time-lapse effects. Studies show videos with speed variations get 60% higher engagement on social media. With instant processing and MP4 export, you have everything needed for dynamic, engaging content.
              </p>
            </div>
            <div className="intro-stats">
              <div className="stat-box">
                <div className="stat-number">0.5x-15x</div>
                <div className="stat-label">Speed Range</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">30K+</div>
                <div className="stat-label">Active Users</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">2 min</div>
                <div className="stat-label">Avg Processing Time</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">100%</div>
                <div className="stat-label">Free Forever</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Video Speed Editing Section */}
      <section className="what-is-section" id="what-is-speed-edit" role="region" aria-labelledby="what-is-title">
        <div className="container">
          <h2 id="what-is-title">What is AI Video Speed Editing? Understanding Speed Control Technology</h2>
          <p className="section-description">
            AI video speed editing uses advanced algorithms to precisely adjust playback speed while maintaining video and audio quality across all formats.
          </p>

          <div className="content-deep-dive">
            <div className="dive-section">
              <h3>How Video Speed Adjustment Works</h3>
              <p>
                Modern <strong>AI video speed editors</strong> use sophisticated processing to change video speed without quality loss. The process involves multiple technical steps:
              </p>
              <ol className="process-list">
                <li><strong>Video Analysis:</strong> The system analyzes frame rate, resolution, and codec to determine optimal processing parameters for speed adjustment.</li>
                <li><strong>Frame Interpolation:</strong> For slow-motion (below 1x), AI generates intermediate frames for smooth playback. For fast-forward (above 1x), frames are strategically removed.</li>
                <li><strong>Audio Processing:</strong> Advanced algorithms adjust audio pitch and timing to match new speed while preventing distortion or chipmunk effects.</li>
                <li><strong>Quality Preservation:</strong> FFmpeg optimization ensures colors, sharpness, and detail remain intact regardless of speed changes.</li>
                <li><strong>Format Export:</strong> Videos are re-encoded to MP4 with your chosen speed, ready for immediate download and use across all platforms.</li>
              </ol>
            </div>

            <div className="dive-section">
              <h3>Key Technologies Behind Speed Control</h3>
              <div className="tech-cards">
                <div className="tech-card">
                  <h4>🎬 FFmpeg Processing</h4>
                  <p>Industry-standard video processing framework that handles speed changes with precision, supporting all major video formats and codecs.</p>
                </div>
                <div className="tech-card">
                  <h4>🧠 Frame Interpolation</h4>
                  <p>AI algorithms generate smooth intermediate frames for slow-motion, creating fluid playback even at 0.5x speed without stuttering.</p>
                </div>
                <div className="tech-card">
                  <h4>🎵 Audio Sync</h4>
                  <p>Sophisticated pitch correction ensures audio stays synchronized and natural-sounding at any speed, from whisper-slow to lightning-fast.</p>
                </div>
                <div className="tech-card">
                  <h4>⚡ GPU Acceleration</h4>
                  <p>Hardware acceleration speeds up processing 5-10x, delivering speed-adjusted videos in minutes instead of hours.</p>
                </div>
              </div>
            </div>

            <div className="dive-section">
              <h3>Evolution of Video Speed Technology</h3>
              <p>
                Video speed adjustment has evolved dramatically from basic frame skipping to today's AI-powered precision:
              </p>
              <ul className="evolution-timeline">
                <li><strong>Pre-2000s:</strong> Manual frame deletion/duplication created choppy results. 1-minute slow-motion took hours to render with poor quality.</li>
                <li><strong>2000s-2010s:</strong> Basic interpolation emerged but required expensive software licenses ($300-1000) and technical expertise.</li>
                <li><strong>2010-2020:</strong> Cloud processing made speed adjustment more accessible, reducing render times to 10-20 minutes per video.</li>
                <li><strong>2020-Present:</strong> AI-powered systems achieve professional quality in minutes with automatic optimization, making speed editing accessible to everyone.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Applications Section */}
      <section className="benefits-applications-section" role="region" aria-labelledby="benefits-title">
        <div className="container">
          <h2 id="benefits-title">Why Adjust Video Speed? Benefits for Creators and Viewers</h2>

          <div className="benefits-grid">
            <article className="benefit-detailed">
              <h3>🎥 Enhanced Storytelling</h3>
              <p>
                Speed variations add dramatic impact to your narrative. <strong>Slow-motion (0.5x-0.8x)</strong> emphasizes emotion and detail in key moments, while fast-forward (2x-5x) compresses time for montages or transitions. Professional filmmakers use speed changes to control pacing and viewer attention.
              </p>
              <div className="benefit-stats">
                <span>60% higher engagement</span>
                <span>Cinematic quality</span>
                <span>Professional impact</span>
              </div>
            </article>

            <article className="benefit-detailed">
              <h3>📱 Social Media Optimization</h3>
              <p>
                Platform algorithms favor dynamic content with speed variations. <strong>Instagram Reels and TikTok videos</strong> with speed changes receive 75% more shares. Speed up tutorials to fit 60-second limits or slow down reveals for dramatic effect. Perfect for viral content creation.
              </p>
              <div className="benefit-stats">
                <span>75% more shares</span>
                <span>Platform-optimized</span>
                <span>Viral potential</span>
              </div>
            </article>

            <article className="benefit-detailed">
              <h3>🎓 Educational Enhancement</h3>
              <p>
                Speed up or slow down instructional content for optimal learning. <strong>Tutorial videos at 1.5x-2x</strong> save students time while maintaining comprehension. Slow-motion (0.5x) helps viewers study complex techniques in sports, cooking, or craft tutorials frame by frame.
              </p>
              <div className="benefit-stats">
                <span>40% time savings</span>
                <span>Better comprehension</span>
                <span>Flexible learning</span>
              </div>
            </article>

            <article className="benefit-detailed">
              <h3>⏱️ Time Efficiency</h3>
              <p>
                Professional speed editing costs $50-200 per video hour. <strong>Our free AI tool processes instantly</strong>, eliminating expensive editing services. What once required Adobe Premiere expertise now happens in minutes with a simple slider, freeing you to focus on content creation.
              </p>
              <div className="benefit-stats">
                <span>$0 vs $50-200/video</span>
                <span>Instant processing</span>
                <span>No expertise needed</span>
              </div>
            </article>

            <article className="benefit-detailed">
              <h3>🎬 Creative Flexibility</h3>
              <p>
                Experiment with different speeds to find the perfect pacing. <strong>Test multiple versions</strong> to see what resonates with your audience. From dreamy 0.5x slow-motion to energetic 5x time-lapses, creative control is at your fingertips without render-time penalties.
              </p>
              <div className="benefit-stats">
                <span>Unlimited versions</span>
                <span>Creative freedom</span>
                <span>Instant preview</span>
              </div>
            </article>

            <article className="benefit-detailed">
              <h3>💼 Professional Production</h3>
              <p>
                Match industry standards with professional-grade speed control. <strong>Film productions use speed ramping</strong> (gradual speed changes) for dramatic effect. Our tool provides the precision needed for commercial work, music videos, and client projects—all with instant MP4 export.
              </p>
              <div className="benefit-stats">
                <span>Broadcast quality</span>
                <span>Client-ready output</span>
                <span>Professional standards</span>
              </div>
            </article>
          </div>

          <div className="applications-showcase">
            <h3>Real-World Applications Across Industries</h3>
            <div className="application-cards-grid">
              <div className="app-card">
                <span className="app-icon">🎬</span>
                <h4>Film & Video Production</h4>
                <p>Create cinematic slow-motion shots, dramatic speed ramps, and time-lapse sequences for professional films, commercials, and music videos.</p>
                <strong>Use cases:</strong> Action scenes, emotional moments, montages, transitions
              </div>

              <div className="app-card">
                <span className="app-icon">📱</span>
                <h4>Social Media Content</h4>
                <p>Optimize videos for Instagram Reels, TikTok, and YouTube Shorts with perfectly timed speed variations that boost engagement and shareability.</p>
                <strong>Use cases:</strong> Viral challenges, product reveals, before/after transformations
              </div>

              <div className="app-card">
                <span className="app-icon">🎓</span>
                <h4>Educational Content</h4>
                <p>Speed up lectures for efficient learning or slow down demonstrations for detailed study. Perfect for online courses, tutorials, and training materials.</p>
                <strong>Use cases:</strong> Video lessons, skill demonstrations, lecture recordings
              </div>

              <div className="app-card">
                <span className="app-icon">⚽</span>
                <h4>Sports Analysis</h4>
                <p>Slow down game footage to 0.5x for technique analysis, or speed up full games to create highlight reels that fit social media time limits.</p>
                <strong>Use cases:</strong> Coaching reviews, highlight reels, technique breakdowns
              </div>

              <div className="app-card">
                <span className="app-icon">🏗️</span>
                <h4>Time-Lapse Creation</h4>
                <p>Transform hours of construction, art creation, or natural phenomena into captivating seconds with 10x-15x speed increases for stunning visual storytelling.</p>
                <strong>Use cases:</strong> Construction progress, art creation, nature documentaries
              </div>

              <div className="app-card">
                <span className="app-icon">🎤</span>
                <h4>Music & Performance</h4>
                <p>Create dramatic slow-motion performance videos, speed up rehearsals for behind-the-scenes content, or craft dynamic music video effects.</p>
                <strong>Use cases:</strong> Music videos, concert footage, dance performances
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Speed Guide Section */}
      <section className="speed-guide-section" role="region" aria-labelledby="guide-title">
        <div className="container">
          <h2 id="guide-title">Complete Guide to Video Speed Adjustment and Best Practices</h2>
          <p className="section-description">
            Master video speed control with professional techniques for maximum impact and viewer engagement across all platforms.
          </p>

          <div className="guide-content">
            <article className="guide-section">
              <h3>Speed Selection Guide</h3>
              <div className="matching-table">
                <div className="match-row">
                  <div className="match-content-type">
                    <strong>🐌 0.5x - 0.7x (Dramatic Slow-Motion)</strong>
                    <p>Maximum slow-motion for emphasis</p>
                  </div>
                  <div className="match-recommendation">
                    <p><strong>Best For:</strong> Action sequences, emotional moments, product reveals, sports highlights</p>
                    <p><em>Why:</em> Creates cinematic drama and allows viewers to appreciate details impossible to see at normal speed.</p>
                  </div>
                </div>

                <div className="match-row">
                  <div className="match-content-type">
                    <strong>🎬 0.75x - 0.9x (Subtle Slow-Motion)</strong>
                    <p>Slight speed reduction</p>
                  </div>
                  <div className="match-recommendation">
                    <p><strong>Best For:</strong> Dialogue emphasis, graceful movements, beauty shots, nature scenes</p>
                    <p><em>Why:</em> Adds weight and importance without being obviously slowed down, perfect for elegant storytelling.</p>
                  </div>
                </div>

                <div className="match-row">
                  <div className="match-content-type">
                    <strong>⚡ 1.25x - 1.5x (Brisk Pace)</strong>
                    <p>Slightly faster, energetic feel</p>
                  </div>
                  <div className="match-recommendation">
                    <p><strong>Best For:</strong> Tutorials, lectures, walkthroughs, daily vlogs</p>
                    <p><em>Why:</em> Maintains natural feel while reducing watch time by 20-33%, perfect for time-conscious viewers.</p>
                  </div>
                </div>

                <div className="match-row">
                  <div className="match-content-type">
                    <strong>🚀 2x - 5x (Fast-Forward)</strong>
                    <p>Noticeable speed increase</p>
                  </div>
                  <div className="match-recommendation">
                    <p><strong>Best For:</strong> Montages, transitions, getting-ready sequences, travel videos</p>
                    <p><em>Why:</em> Compresses time dramatically while maintaining narrative flow, ideal for showing process without boring viewers.</p>
                  </div>
                </div>

                <div className="match-row">
                  <div className="match-content-type">
                    <strong>⚡ 10x - 15x (Extreme Time-Lapse)</strong>
                    <p>Maximum speed compression</p>
                  </div>
                  <div className="match-recommendation">
                    <p><strong>Best For:</strong> Construction progress, art creation, sunrise/sunset, cloud movement</p>
                    <p><em>Why:</em> Condenses hours or days into seconds, revealing patterns and changes invisible at normal speed.</p>
                  </div>
                </div>
              </div>
            </article>

            <article className="guide-section">
              <h3>Advanced Speed Techniques</h3>
              <div className="tips-grid">
                <div className="tip-card">
                  <span className="tip-number">1</span>
                  <h4>Speed Ramping Effect</h4>
                  <p>Create multiple versions of the same clip at different speeds, then combine them in your editor for smooth speed transitions. Start at 1x, slow to 0.5x for impact, then speed back to 1x.</p>
                </div>

                <div className="tip-card">
                  <span className="tip-number">2</span>
                  <h4>Audio Considerations</h4>
                  <p>Audio quality degrades above 2x or below 0.75x. For tutorial speed-ups, consider replacing sped-up audio with voiceover. For slow-motion, remove audio and add music instead.</p>
                </div>

                <div className="tip-card">
                  <span className="tip-number">3</span>
                  <h4>Platform Optimization</h4>
                  <p>TikTok/Reels: Use 1.5x-2x for energetic content. YouTube: 1.25x for educational content. Instagram Stories: 0.5x-0.7x for product focus. Match speed to platform expectations.</p>
                </div>

                <div className="tip-card">
                  <span className="tip-number">4</span>
                  <h4>Quality Preservation</h4>
                  <p>Shoot at higher frame rates (60fps or 120fps) for better slow-motion quality. When speeding up, 30fps is sufficient. Higher source quality = better output after speed adjustment.</p>
                </div>

                <div className="tip-card">
                  <span className="tip-number">5</span>
                  <h4>Storytelling Pacing</h4>
                  <p>Vary speed throughout your video to maintain interest. Normal speed for dialogue, slow-motion for reveals, fast-forward for transitions. Speed variety = viewer engagement.</p>
                </div>

                <div className="tip-card">
                  <span className="tip-number">6</span>
                  <h4>Testing & Iteration</h4>
                  <p>Export multiple speed versions and A/B test with your audience. What feels perfect to you might be too slow/fast for viewers. Data-driven speed selection beats guesswork.</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="comparison-section" role="region" aria-labelledby="comparison-title">
        <div className="container">
          <h2 id="comparison-title">AI Video Speed Editor vs Manual Editing: Complete Comparison</h2>
          <p className="section-description">
            Understand the key differences between AI-powered automatic speed adjustment and traditional video editing software.
          </p>

          <div className="comparison-table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>AI Speed Editor</th>
                  <th>Manual Editing (Adobe Premiere/Final Cut)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Cost</strong></td>
                  <td>✅ $0 - Completely free<br/><span className="detail">Unlimited speed adjustments</span></td>
                  <td>❌ $20-55/month subscription<br/><span className="detail">Plus learning curve costs</span></td>
                </tr>
                <tr>
                  <td><strong>Speed</strong></td>
                  <td>✅ 2-3 minutes processing<br/><span className="detail">Automated one-click adjustment</span></td>
                  <td>❌ 10-30 minutes per video<br/><span className="detail">Manual timeline editing required</span></td>
                </tr>
                <tr>
                  <td><strong>Ease of Use</strong></td>
                  <td>✅ Simple slider control<br/><span className="detail">No learning curve, instant results</span></td>
                  <td>⚠️ Complex interface<br/><span className="detail">Requires 10-20 hours to learn basics</span></td>
                </tr>
                <tr>
                  <td><strong>Quality</strong></td>
                  <td>✅ Optimized FFmpeg processing<br/><span className="detail">Professional output quality</span></td>
                  <td>✅ Full control over settings<br/><span className="detail">Requires manual optimization</span></td>
                </tr>
                <tr>
                  <td><strong>Speed Range</strong></td>
                  <td>✅ 0.5x - 15x range<br/><span className="detail">Covers 99% of use cases</span></td>
                  <td>✅ Unlimited range<br/><span className="detail">Extreme speeds may require plugins</span></td>
                </tr>
                <tr>
                  <td><strong>Audio Handling</strong></td>
                  <td>✅ Automatic sync<br/><span className="detail">Pitch correction included</span></td>
                  <td>⚠️ Manual audio adjustment<br/><span className="detail">Requires separate audio editing</span></td>
                </tr>
                <tr>
                  <td><strong>Batch Processing</strong></td>
                  <td>⚠️ One video at a time<br/><span className="detail">Fast individual processing</span></td>
                  <td>✅ Multiple timeline sequences<br/><span className="detail">Complex setup required</span></td>
                </tr>
                <tr>
                  <td><strong>Advanced Effects</strong></td>
                  <td>⚠️ Speed adjustment only<br/><span className="detail">Perfect for pure speed changes</span></td>
                  <td>✅ Speed ramping, transitions<br/><span className="detail">Unlimited creative control</span></td>
                </tr>
                <tr>
                  <td><strong>Export Options</strong></td>
                  <td>✅ Instant MP4 download<br/><span className="detail">Optimized for web use</span></td>
                  <td>✅ Multiple format options<br/><span className="detail">Requires export knowledge</span></td>
                </tr>
                <tr>
                  <td><strong>Device Requirements</strong></td>
                  <td>✅ Any device with browser<br/><span className="detail">Mobile and desktop compatible</span></td>
                  <td>❌ Powerful computer required<br/><span className="detail">8GB+ RAM, dedicated GPU</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="comparison-recommendation">
            <h3>When to Choose AI Video Speed Editor</h3>
            <ul className="recommendation-list">
              <li>✅ <strong>Simple speed adjustments:</strong> Need to slow down or speed up without complex editing</li>
              <li>✅ <strong>Quick turnaround:</strong> Immediate results for social media or client deadlines</li>
              <li>✅ <strong>Budget-conscious:</strong> Save $240-660/year compared to Premiere/Final Cut subscriptions</li>
              <li>✅ <strong>No editing experience:</strong> Instant professional results without learning curve</li>
              <li>✅ <strong>Mobile editing:</strong> Work from anywhere on any device</li>
              <li>✅ <strong>Social media content:</strong> Perfect for Instagram, TikTok, YouTube speed variations</li>
              <li>✅ <strong>Tutorial speed-ups:</strong> Increase playback for efficient learning content</li>
            </ul>

            <h3>When to Choose Manual Editing Software</h3>
            <ul className="recommendation-list">
              <li>🎯 <strong>Complex projects:</strong> Multi-layer edits with effects, transitions, color grading</li>
              <li>🎯 <strong>Speed ramping:</strong> Gradual speed changes within a single clip</li>
              <li>🎯 <strong>Professional film work:</strong> Broadcast or cinema-quality production with full control</li>
              <li>🎯 <strong>Batch processing:</strong> Need to process 10+ videos with identical settings</li>
              <li>🎯 <strong>Advanced audio work:</strong> Complex sound design beyond speed adjustment</li>
              <li>🎯 <strong>Custom export specs:</strong> Specific codec, bitrate, or format requirements</li>
            </ul>

            <div className="hybrid-approach">
              <h3>💡 Pro Tip: Hybrid Workflow</h3>
              <p>
                Many professionals use <strong>both tools strategically</strong>: Use our AI Speed Editor for quick speed tests and social media content (90% of projects), then switch to manual editing software only when you need advanced features like speed ramping or complex effects. This saves 80% of editing time while maintaining creative flexibility where it matters.
              </p>
            </div>
          </div>
        </div>
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
      {showUpgradeModal && (
        <div className="upgrade-modal-overlay" onClick={() => setShowUpgradeModal(false)}>
          <div className="upgrade-modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              className="upgrade-modal-close"
              onClick={() => setShowUpgradeModal(false)}
              aria-label="Close"
            >
              ✕
            </button>

            <span className="upgrade-modal-icon">🚀</span>

            <h2 className="upgrade-modal-title">Monthly Limit Reached</h2>
            <p className="upgrade-modal-subtitle">
              You've used all your video exports this month.<br />
              <strong>Upgrade your plan</strong> to keep creating without interruption.
            </p>

            <div className="upgrade-modal-perks">
              <div className="upgrade-perk-row">
                <span>⚡</span>
                <span>Creator — 45 videos/month + up to 2K quality</span>
              </div>
              <div className="upgrade-perk-row">
                <span>🎬</span>
                <span>Studio — Unlimited videos + 4K quality</span>
              </div>
              <div className="upgrade-perk-row">
                <span>📏</span>
                <span>Longer video length limits on higher plans</span>
              </div>
              <div className="upgrade-perk-row">
                <span>🔒</span>
                <span>Priority processing — skip the queue</span>
              </div>
            </div>

            <div className="upgrade-modal-actions">
              <a href="/pricing" className="upgrade-modal-btn-primary">
                🔓 View Plans & Upgrade →
              </a>
              <button
                className="upgrade-modal-btn-secondary"
                onClick={() => setShowUpgradeModal(false)}
              >
                Maybe later — I'll wait until next month
              </button>
            </div>

            <p className="upgrade-modal-reset-note">
              🗓️ Your free quota resets on the 1st of every month
            </p>
          </div>
        </div>
      )}
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
                <a href="/signup">Sign up</a>
              </p>
            </div>
          </motion.div>
        </div>
      )}

      {isLoggedIn && userProfile.role === 'BASIC' && (
        <div className="floating-upgrade-cta">
          <button 
            className="floating-upgrade-btn"
            onClick={() => window.location.href = '/pricing'}
          >
            <span className="float-icon">⚡</span>
            <span className="float-text">
              <strong>Upgrade for 9× More Videos</strong>
              <small>Or get AI Speed Pro</small>
            </span>
          </button>
        </div>
      )}      
    </div>
  );
};

export default VideoSpeedClient;