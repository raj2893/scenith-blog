"use client";

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import { API_BASE_URL, CDN_URL } from '../../config';
import '../../../../styles/tools/VideoFilter.css';
import Script from 'next/script';
import { debounce } from 'lodash';

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
  fileName: string;
  filePath: string;
}

interface VideoFilterJob {
  id: number;
  userId: number;
  inputVideoPath: string;
  outputVideoPath: string | null;
  filterName: string | null;
  brightness: number | null;
  contrast: number | null;
  saturation: number | null;
  temperature: number | null;
  gamma: number | null;
  shadows: number | null;
  highlights: number | null;
  vibrance: number | null;
  hue: number | null;
  exposure: number | null;
  tint: number | null;
  sharpness: number | null;
  presetName: string | null;
  lutPath: string | null;
  status: 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'FAILED';
  progressPercentage: number;
}

interface Preset {
  name: string;
  brightness: number;
  contrast: number;
  saturation: number;
  temperature: number;
  gamma: number;
  shadows: number;
  highlights: number;
  vibrance: number;
  hue: number;
  exposure: number;
  tint: number;
  sharpness: number;
}

// Define the Filters interface
interface Filters {
  brightness: number;
  contrast: number;
  saturation: number;
  temperature: number;
  gamma: number;
  shadows: number;
  highlights: number;
  vibrance: number;
  hue: number;
  exposure: number;
  tint: number;
  sharpness: number;
}

interface LoginFormData {
  email: string;
  password: string;
}

const CustomVideoPlayer = ({ src, userId, filters }: { src: string; userId: number; filters: Filters }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const videoUrl = `${CDN_URL}/videos/filtered/${userId}/original/${src}`; // Use src as fileName

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

  // Construct CSS filter string
  const cssFilters = `
    brightness(${filters.brightness + 1})
    contrast(${filters.contrast})
    saturate(${filters.saturation})
    hue-rotate(${filters.hue * 360}deg)
    ${filters.sharpness ? `blur(${1 - filters.sharpness}px)` : ''}
  `.trim();

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
          maxWidth: '600px',
          margin: '0 auto',
          borderRadius: '12px',
          filter: cssFilters,
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

const VideoFilterClient: React.FC = () => {
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
  const [currentJobId, setCurrentJobId] = useState<number | null>(null);
  const [isCreatingJob, setIsCreatingJob] = useState(false);

  // Video filter states
  const [uploads, setUploads] = useState<VideoUpload[]>([]);
  const [selectedUpload, setSelectedUpload] = useState<VideoUpload | null>(null);
  const [presets, setPresets] = useState<Preset[]>([]);
  const [selectedPreset, setSelectedPreset] = useState<string>('');
  const [filters, setFilters] = useState({
    brightness: 0,
    contrast: 1,
    saturation: 1,
    temperature: 6500,
    gamma: 1,
    shadows: 0,
    highlights: 0,
    vibrance: 0,
    hue: 0,
    exposure: 0,
    tint: 0,
    sharpness: 0,
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentJob, setCurrentJob] = useState<VideoFilterJob | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loginErrors, setLoginErrors] = useState<{ [key: string]: string }>({});
  const [loginSuccess, setLoginSuccess] = useState<string>('');

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

  const updateFilterJob = useCallback(
    debounce(async (jobId: number, filters: Filters) => {
      if (!isLoggedIn || !jobId) return;
      try {
        const response = await axios.put(
          `${API_BASE_URL}/api/filter-jobs/${jobId}`,
          { ...filters, presetName: selectedPreset || null },
          {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
          }
        );
        console.log('Filter job updated:', response.data);
      } catch (error: any) {
        console.error('Error updating filter job:', error);
        setError(error.response?.data?.message || 'Failed to update filter settings.');
      }
    }, 500), // Debounce for 500ms to avoid excessive API calls
    [isLoggedIn, selectedPreset]
  );  

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
    setLoginErrors({});
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

  // Require login
  const requireLogin = () => {
    if (!isLoggedIn) {
      setShowLoginModal(true);
      return false;
    }
    return true;
  };

  // Fetch user uploads
  useEffect(() => {
    if (!isLoggedIn) return;
    const fetchUploads = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/uploads/my`, {
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

  // In VideoFilterClient.tsx, replace the presets fetching useEffect
  useEffect(() => {
    const fetchPresets = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/presets`, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        setPresets(response.data.presets || []);
      } catch (error) {
        console.error('Error fetching presets:', error);
        setPresets([]);
      }
    };
    fetchPresets();
  }, [isLoggedIn]);

  const handleFilterChange = async (key: keyof typeof filters, value: number) => {
    setFilters((prev) => {
      const updatedFilters = { ...prev, [key]: value };
      if (selectedUpload && isLoggedIn && !isCreatingJob) {
        if (!currentJobId) {
          createFilterJob(updatedFilters);
        } else {
          updateFilterJob(currentJobId, updatedFilters);
        }
      }
      return updatedFilters;
    });
    setSelectedPreset(''); // Clear preset if manual adjustments are made
  };

  const handlePresetChange = async (presetName: string) => {
    setSelectedPreset(presetName);
    const preset = presets.find((p) => p.name === presetName);
    const newFilters = preset
      ? {
          brightness: preset.brightness,
          contrast: preset.contrast,
          saturation: preset.saturation,
          temperature: preset.temperature,
          gamma: preset.gamma,
          shadows: preset.shadows,
          highlights: preset.highlights,
          vibrance: preset.vibrance,
          hue: preset.hue,
          exposure: preset.exposure,
          tint: preset.tint,
          sharpness: preset.sharpness,
        }
      : {
          brightness: 0,
          contrast: 1,
          saturation: 1,
          temperature: 6500,
          gamma: 1,
          shadows: 0,
          highlights: 0,
          vibrance: 0,
          hue: 0,
          exposure: 0,
          tint: 0,
          sharpness: 0,
        };
    setFilters(newFilters);
    if (selectedUpload && isLoggedIn && !isCreatingJob) {
      if (!currentJobId) {
        createFilterJob(newFilters);
      } else {
        updateFilterJob(currentJobId, newFilters);
      }
    }
  };
  
  const createFilterJob = useCallback(
    debounce(async (filters: Filters) => {
      if (!selectedUpload || !isLoggedIn || isCreatingJob) return;
      setIsCreatingJob(true);
      try {
        // Check for existing PENDING job
        const response = await axios.get(`${API_BASE_URL}/api/filter-jobs/my`, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        const jobs = response.data;
        const existingPendingJob = jobs.find(
          (job: VideoFilterJob) => job.inputVideoPath === selectedUpload.filePath && job.status === 'PENDING'
        );
  
        if (existingPendingJob) {
          setCurrentJobId(existingPendingJob.id);
          setFilters({
            brightness: existingPendingJob.brightness || 0,
            contrast: existingPendingJob.contrast || 1,
            saturation: existingPendingJob.saturation || 1,
            temperature: existingPendingJob.temperature || 6500,
            gamma: existingPendingJob.gamma || 1,
            shadows: existingPendingJob.shadows || 0,
            highlights: existingPendingJob.highlights || 0,
            vibrance: existingPendingJob.vibrance || 0,
            hue: existingPendingJob.hue || 0,
            exposure: existingPendingJob.exposure || 0,
            tint: existingPendingJob.tint || 0,
            sharpness: existingPendingJob.sharpness || 0,
          });
          setSelectedPreset(existingPendingJob.presetName || '');
          console.log('Using existing PENDING job:', existingPendingJob);
          return;
        }
  
        // Create new job
        const jobResponse = await axios.post(
          `${API_BASE_URL}/api/filter-jobs/from-upload/${selectedUpload!.id}`,
          {
            presetName: selectedPreset || null,
            ...filters,
          },
          {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
          }
        );
        setCurrentJobId(jobResponse.data.id);
        console.log('Filter job created:', jobResponse.data);
      } catch (error: any) {
        console.error('Error creating filter job:', error);
        if (error.response?.data?.id) {
          // Backend returned an existing PENDING job
          setCurrentJobId(error.response.data.id);
          setFilters({
            brightness: error.response.data.brightness || 0,
            contrast: error.response.data.contrast || 1,
            saturation: error.response.data.saturation || 1,
            temperature: error.response.data.temperature || 6500,
            gamma: error.response.data.gamma || 1,
            shadows: error.response.data.shadows || 0,
            highlights: error.response.data.highlights || 0,
            vibrance: error.response.data.vibrance || 0,
            hue: error.response.data.hue || 0,
            exposure: error.response.data.exposure || 0,
            tint: error.response.data.tint || 0,
            sharpness: error.response.data.sharpness || 0,
          });
          setSelectedPreset(error.response.data.presetName || '');
          console.log('Using existing PENDING job from error response:', error.response.data);
        } else {
          setError(error.response?.data?.message || 'Failed to create filter job.');
        }
      } finally {
        setIsCreatingJob(false);
      }
    }, 500),
    [isLoggedIn, selectedUpload, isCreatingJob, selectedPreset]
  );

  // Handle video selection and fetch associated filter job
  const handleVideoSelect = async (uploadId: string) => {
    const upload = uploads.find((u) => u.id === Number(uploadId));
    setSelectedUpload(upload || null);
    setCurrentJobId(null); // Reset job ID
    setFilters({
      brightness: 0,
      contrast: 1,
      saturation: 1,
      temperature: 6500,
      gamma: 1,
      shadows: 0,
      highlights: 0,
      vibrance: 0,
      hue: 0,
      exposure: 0,
      tint: 0,
      sharpness: 0,
    });
    setSelectedPreset('');

    if (upload && isLoggedIn) {
      try {
        // Fetch jobs for the selected upload
        const response = await axios.get(`${API_BASE_URL}/api/filter-jobs/my`, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        const jobs = response.data;
        // Find the latest job for this upload
        const latestJob = jobs
          .filter((job: VideoFilterJob) => job.inputVideoPath === upload.filePath)
          .sort((a: VideoFilterJob, b: VideoFilterJob) => b.id - a.id)[0];

        if (latestJob) {
          setCurrentJobId(latestJob.id);
          setFilters({
            brightness: latestJob.brightness || 0,
            contrast: latestJob.contrast || 1,
            saturation: latestJob.saturation || 1,
            temperature: latestJob.temperature || 6500,
            gamma: latestJob.gamma || 1,
            shadows: latestJob.shadows || 0,
            highlights: latestJob.highlights || 0,
            vibrance: latestJob.vibrance || 0,
            hue: latestJob.hue || 0,
            exposure: latestJob.exposure || 0,
            tint: latestJob.tint || 0,
            sharpness: latestJob.sharpness || 0,
          });
          setSelectedPreset(latestJob.presetName || '');
        }
      } catch (error: any) {
        console.error('Error fetching filter job for video:', error);
        setError(error.response?.data?.message || 'Failed to load filter settings for the selected video.');
      }
    }
  };

  // Handle video upload and create initial filter job
  const handleVideoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!requireLogin()) return;
    const file = e.target.files?.[0];
    if (!file) return;
    const formData = new FormData();
    formData.append('file', file);
    try {
      const response = await axios.post(`${API_BASE_URL}/api/uploads`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      setUploads((prev) => [...prev, response.data]);
      setSelectedUpload(response.data);
      // Create initial filter job with default values
      const jobResponse = await axios.post(
        `${API_BASE_URL}/api/filter-jobs/from-upload/${response.data.id}`,
        {
          presetName: null,
          brightness: 0,
          contrast: 1,
          saturation: 1,
          temperature: 6500,
          gamma: 1,
          shadows: 0,
          highlights: 0,
          vibrance: 0,
          hue: 0,
          exposure: 0,
          tint: 0,
          sharpness: 0,
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        }
      );
      setCurrentJobId(jobResponse.data.id);
    } catch (error: any) {
      setError(error.response?.data?.message || 'Failed to upload video.');
    }
  };

  const handleStartProcessing = async () => {
    if (!requireLogin()) return;
    if (!selectedUpload) {
      setError('Please select a video to process.');
      return;
    }
    setIsProcessing(true);
    setError(null);
    try {
      let jobId = currentJobId;
      if (!jobId) {
        // Create a new job if none exists
        const jobResponse = await axios.post(
          `${API_BASE_URL}/api/filter-jobs/from-upload/${selectedUpload.id}`,
          {
            presetName: selectedPreset || null,
            ...filters,
          },
          {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
          }
        );
        jobId = jobResponse.data.id;
        setCurrentJobId(jobId);
      }

      // Start processing
      await axios.post(
        `${API_BASE_URL}/api/filter-jobs/${jobId}/process`,
        {},
        {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        }
      );

      // Poll job status
      const pollJobStatus = async () => {
        const interval = setInterval(async () => {
          try {
            const statusResponse = await axios.get(`${API_BASE_URL}/api/filter-jobs/${jobId}`, {
              headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
            });
            setCurrentJob(statusResponse.data);
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
      setError(err.response?.data?.message || 'Failed to process video.');
      setIsProcessing(false);
    }
  };

  const handleDownload = async () => {
    if (currentJob?.outputVideoPath && userProfile.id) {
      try {
        const filename = currentJob.outputVideoPath.split('/').pop() || currentJob.outputVideoPath;
        const downloadUrl = `${CDN_URL}/videos/filtered/${userProfile.id}/filtered/${filename}`;
        const response = await fetch(downloadUrl, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        const blob = await response.blob();
        const blobUrl = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = `filtered-video-${Date.now()}.mp4`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(blobUrl);
      } catch (error) {
        console.error('Download failed:', error);
        const filename = currentJob.outputVideoPath.split('/').pop() || currentJob.outputVideoPath;
        window.open(`${CDN_URL}/videos/filtered/${userProfile.id}/filtered/${filename}`, '_blank');
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
    <div className="video-filter-page">
      {/* Structured Data Scripts */}
      <Script
        id="video-filter-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'Scenith Video Filter',
            description: 'Free AI-powered video filter tool for applying professional-grade filters and LUTs to videos.',
            url: typeof window !== 'undefined' ? window.location.href : '/video-filter',
            applicationCategory: 'MultimediaApplication',
            operatingSystem: 'Web Browser',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.8',
              reviewCount: '9271',
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
          <h1>Free AI Video Filter - Transform Videos in Seconds</h1>
          <p className="hero-description">
            Apply professional-grade filters and LUTs to your videos instantly. Choose from curated presets or customize your own. Perfect for creators, filmmakers, and content producers. Free with MP4 downloads!
          </p>
          <div className="hero-cta-section">
            <div className="main-content">
              <div className="video-input-section">
                <label className="custom-file-upload">
                  <input
                    type="file"
                    accept="video/*"
                    onChange={handleVideoUpload}
                    disabled={!isLoggedIn}
                    className="video-upload-input"
                    aria-label="Upload video for filtering"
                  />
                  <span className="upload-button">Upload Video <span className="upload-icon">⬆️</span></span>
                </label>
                <select
                  value={selectedUpload?.id || ''}
                  onChange={(e) => handleVideoSelect(e.target.value)}
                  className="video-select"
                  disabled={!isLoggedIn || uploads.length === 0}
                  aria-label="Select uploaded video"
                >
                  <option value="">Select a Video</option>
                  {uploads.map((upload) => (
                    <option key={upload.id} value={upload.id}>
                      {upload.fileName}
                    </option>
                  ))}
                </select>
                <div className="video-filter-container">
                  {selectedUpload && userProfile.id && (
                    <div className="video-preview">
                      <CustomVideoPlayer src={selectedUpload.fileName} userId={userProfile.id} filters={filters} />
                    </div>
                  )}
                  <div className="filter-controls">
                    <h3>Adjust Filters</h3>
                    <select
                      value={selectedPreset}
                      onChange={(e) => handlePresetChange(e.target.value)}
                      className="filter-select"
                      disabled={!isLoggedIn}
                      aria-label="Select preset"
                    >
                      <option value="">Custom</option>
                      {presets.map((preset) => (
                        <option key={preset.name} value={preset.name}>
                          {preset.name}
                        </option>
                      ))}
                    </select>
                    {Object.keys(filters).map((key) => (
                      <div key={key} className="filter-slider">
                        <label>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
                        <input
                          type="range"
                          min={key === 'temperature' ? 3000 : key === 'contrast' || key === 'saturation' || key === 'gamma' ? 0 : -1}
                          max={key === 'temperature' ? 10000 : key === 'contrast' || key === 'saturation' || key === 'gamma' ? 2 : 1}
                          step={key === 'temperature' ? 100 : 0.01}
                          value={filters[key as keyof typeof filters]}
                          onChange={(e) => handleFilterChange(key as keyof typeof filters, Number(e.target.value))}
                          disabled={!isLoggedIn}
                          aria-label={`Adjust ${key}`}
                        />
                        <span>{filters[key as keyof typeof filters].toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <button
                  className="cta-button process-video-button"
                  onClick={handleStartProcessing}
                  disabled={isLoggedIn && (!selectedUpload || isProcessing)}
                  aria-label="Start video processing"
                >
                  {isProcessing ? 'Processing...' : isLoggedIn ? 'Start Processing' : 'Login to Process'}
                </button>
                {currentJob?.outputVideoPath && (
                  <div className="download-section" role="region" aria-labelledby="download-title">
                    <h3 id="download-title">Download Your Filtered Video</h3>
                    <button
                      onClick={handleDownload}
                      className="cta-button download-button"
                      aria-label="Download filtered video as MP4"
                    >
                      Download MP4
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div className="trust-indicators">
              <span className="trust-item">✅ 100% Free</span>
              <span className="trust-item">🎥 Multiple Filters</span>
              <span className="trust-item">🌟 Professional Presets</span>
              <span className="trust-item">📥 Instant MP4 Download</span>
            </div>
          </div>
          <figure className="hero-image-container">
            <Image
              src="/images/VideoFilterSS.png"
              alt="Video filter application example showing filter adjustments and video preview"
              className="hero-image"
              width={800}
              height={400}
              priority
            />
            <figcaption className="sr-only">Example of video filter application with preset selection and filter controls</figcaption>
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
          <h2 id="how-it-works-title">How to Apply Video Filters in 3 Simple Steps</h2>
          <p className="section-description">
            Transform your videos with professional filters and LUTs effortlessly. No advanced editing skills required - just upload, adjust, and download.
          </p>
          <div className="steps-grid" role="list">
            <motion.article className="step-card" whileHover={{ scale: 1.05 }} role="listitem">
              <div className="step-number" aria-label="Step 1">1</div>
              <h3>Upload Your Video</h3>
              <p>Upload any video file (MP4, AVI, etc.). Our system securely stores it for processing.</p>
            </motion.article>
            <motion.article className="step-card" whileHover={{ scale: 1.05 }} role="listitem">
              <div className="step-number" aria-label="Step 2">2</div>
              <h3>Choose Filters or Presets</h3>
              <p>Select from curated presets or customize filters like brightness, contrast, and more. Upload your own LUT for unique effects.</p>
            </motion.article>
            <motion.article className="step-card" whileHover={{ scale: 1.05 }} role="listitem">
              <div className="step-number" aria-label="Step 3">3</div>
              <h3>Process & Download</h3>
              <p>Apply filters and download your high-quality MP4 video in minutes. Perfect for social media, films, and more.</p>
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
          <h2 id="features-title">Why Choose Our Video Filter Tool?</h2>
          <p className="section-description">
            Create stunning videos with professional-grade filters powered by AI. No expensive software or expertise needed.
          </p>
          <div className="features-grid" role="list">
            <motion.article className="feature-card" whileHover={{ scale: 1.05 }} role="listitem">
              <span className="feature-icon" aria-hidden="true">⚡</span>
              <h3>Fast Processing</h3>
              <p>Apply filters in minutes with our optimized FFmpeg pipeline. Get production-ready videos quickly.</p>
            </motion.article>
            <motion.article className="feature-card" whileHover={{ scale: 1.05 }} role="listitem">
              <span className="feature-icon" aria-hidden="true">🎨</span>
              <h3>Professional Presets</h3>
              <p>Choose from cinematic, vintage, and modern presets crafted for stunning visual effects.</p>
            </motion.article>
            <motion.article className="feature-card" whileHover={{ scale: 1.05 }} role="listitem">
              <span className="feature-icon" aria-hidden="true">🆓</span>
              <h3>Free Access</h3>
              <p>Unlimited free usage with full commercial rights. No watermarks, no subscriptions.</p>
            </motion.article>
            <motion.article className="feature-card" whileHover={{ scale: 1.05 }} role="listitem">
              <span className="feature-icon" aria-hidden="true">🔧</span>
              <h3>Customizable Filters</h3>
              <p>Fine-tune brightness, contrast, saturation, and more for precise control over your video's look.</p>
            </motion.article>
            <motion.article className="feature-card" whileHover={{ scale: 1.05 }} role="listitem">
              <span className="feature-icon" aria-hidden="true">📱</span>
              <h3>Mobile Optimized</h3>
              <p>Responsive interface for editing videos on any device, anytime, anywhere.</p>
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
            Discover how creators and professionals use our video filter tool to enhance their projects.
          </p>
          <div className="use-cases-grid" role="list">
            <motion.article className="use-case-card" whileHover={{ scale: 1.03 }} role="listitem">
              <h3>🎥 Social Media Content</h3>
              <p>Create eye-catching videos for Instagram, TikTok, and YouTube with professional filters.</p>
            </motion.article>
            <motion.article className="use-case-card" whileHover={{ scale: 1.03 }} role="listitem">
              <h3>🎬 Film Production</h3>
              <p>Apply cinematic looks to short films or indie projects without expensive editing software.</p>
            </motion.article>
            <motion.article className="use-case-card" whileHover={{ scale: 1.03 }} role="listitem">
              <h3>💼 Marketing Videos</h3>
              <p>Enhance promotional videos with vibrant colors and professional-grade effects.</p>
            </motion.article>
            <motion.article className="use-case-card" whileHover={{ scale: 1.03 }} role="listitem">
              <h3>🎨 Creative Projects</h3>
              <p>Experiment with unique looks for music videos, art projects, or personal vlogs.</p>
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
            Join thousands of satisfied users who rely on our video filter tool for their creative projects.
          </p>
          <div className="testimonials-grid" role="list">
            <motion.blockquote className="testimonial-card" whileHover={{ scale: 1.05 }} role="listitem">
              <p>"This tool made my social media videos pop! The presets are stunning, and the customization is so easy. Saved me hours of editing time."</p>
              <cite>– Sarah Kim, Content Creator</cite>
              <div className="rating" aria-label="5 out of 5 stars">⭐⭐⭐⭐⭐</div>
            </motion.blockquote>
            <motion.blockquote className="testimonial-card" whileHover={{ scale: 1.05 }} role="listitem">
              <p>"As an indie filmmaker, this tool is a game-changer. The cinematic presets give my films a professional look without breaking the bank."</p>
              <cite>– Michael Chen, Filmmaker</cite>
              <div className="rating" aria-label="5 out of 5 stars">⭐⭐⭐⭐⭐</div>
            </motion.blockquote>
            <motion.blockquote className="testimonial-card" whileHover={{ scale: 1.05 }} role="listitem">
              <p>"Perfect for our marketing campaigns. The ability to upload custom LUTs and fine-tune filters is incredible for branding."</p>
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
              <p>We support popular formats like MP4, AVI, MOV, and more. Upload any standard video file to apply filters.</p>
            </article>
            <article className="faq-item" role="listitem">
              <h3>Can I use the filtered videos commercially?</h3>
              <p>Yes! All processed videos are yours to use commercially, with no watermarks or restrictions.</p>
            </article>
            <article className="faq-item" role="listitem">
              <h3>What are LUTs, and how do I use them?</h3>
              <p>LUTs (Look-Up Tables) are files that apply color grading. Upload a .cube file to apply custom color effects.</p>
            </article>
            <article className="faq-item" role="listitem">
              <h3>How long does processing take?</h3>
              <p>Processing typically takes a few minutes, depending on video length and complexity. You'll be notified when it's ready.</p>
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
          <h2 id="cta-title">Ready to Transform Your Videos?</h2>
          <p>Join over 30,000+ creators who trust our video filter tool. Start enhancing your videos with professional filters today - completely free!</p>
          <button
            className="cta-button"
            onClick={() => {
              if (!isLoggedIn) {
                setShowLoginModal(true);
              } else {
                scrollToSection('hero');
              }
            }}
            aria-label="Start using the free video filter tool"
          >
            {isLoggedIn ? 'Start Filtering Now - Free!' : 'Login to Start Filtering'}
          </button>
          <div className="cta-features">
            <span>⚡ Fast processing</span>
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

export default VideoFilterClient;