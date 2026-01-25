"use client";

import React, { useState, useEffect, useCallback, useRef, Dispatch, SetStateAction } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import { API_BASE_URL } from '../../../config';
import '../../../../../styles/tools/AspectRatio.css';
import Script from 'next/script';
import { debounce } from 'lodash';
import VideoPreview from './VideoPreview';

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

interface AspectRatioMedia {
  id: number;
  originalFileName: string;
  originalPath: string;
  originalCdnUrl: string;
  processedFileName: string | null;
  processedPath: string | null;
  processedCdnUrl: string | null;
  aspectRatio: string | null;
  outputWidth: number | null;
  outputHeight: number | null;
  positionX: number | null;
  positionY: number | null;
  scale: number | null;
  status: 'PENDING' | 'UPLOADED' | 'CONFIGURED' | 'PROCESSING' | 'SUCCESS' | 'FAILED';
  progress: number | null;
}

interface LoginFormData {
  email: string;
  password: string;
}

const AspectRatioClient: React.FC = () => {
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
  const [uploads, setUploads] = useState<AspectRatioMedia[]>([]);
  const [selectedUpload, setSelectedUpload] = useState<AspectRatioMedia | null>(null);
  const [aspectRatio, setAspectRatio] = useState<string>('16:9');
  const [outputWidth, setOutputWidth] = useState<number>(1920);
  const [outputHeight, setOutputHeight] = useState<number>(1080);
  const [positionX, setPositionX] = useState<number>(0);
  const [positionY, setPositionY] = useState<number>(0);
  const [scale, setScale] = useState<number>(1.0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Predefined resolutions for common aspect ratios
  const resolutionPresets: { [key: string]: { label: string; width: number; height: number }[] } = {
    '16:9': [
      { label: '8K (7680x4320)', width: 7680, height: 4320 },
      { label: '4K UHD (3840x2160)', width: 3840, height: 2160 },
      { label: '1080p (1920x1080)', width: 1920, height: 1080 },
      { label: '720p (1280x720)', width: 1280, height: 720 },
      { label: '480p (854x480)', width: 854, height: 480 },
    ],
    '4:3': [
      { label: '1600x1200', width: 1600, height: 1200 },
      { label: '1024x768', width: 1024, height: 768 },
      { label: '800x600', width: 800, height: 600 },
      { label: '640x480', width: 640, height: 480 },
    ],
    '1:1': [
      { label: '2160x2160', width: 2160, height: 2160 },
      { label: '1080x1080', width: 1080, height: 1080 },
      { label: '720x720', width: 720, height: 720 },
      { label: '480x480', width: 480, height: 480 },
    ],
    '9:16': [
      { label: '1080x1920', width: 1080, height: 1920 },
      { label: '720x1280', width: 720, height: 1280 },
      { label: '480x854', width: 480, height: 854 },
    ],
    '21:9': [
      { label: '3440x1440', width: 3440, height: 1440 },
      { label: '2560x1080', width: 2560, height: 1080 },
      { label: '1920x817', width: 1920, height: 817 },
    ],
  };

  // Handle scroll for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check auth status
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

  // Fetch user uploads
  useEffect(() => {
    if (!isLoggedIn) return;
    const fetchUploads = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/aspect-ratio/user-media`, {
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

  // Handle login
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

  // Handle video upload
  const handleVideoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!requireLogin()) return;
    const file = e.target.files?.[0];
    if (!file) return;
    const formData = new FormData();
    formData.append('file', file);
    try {
      const response = await axios.post(`${API_BASE_URL}/api/aspect-ratio/upload`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      setUploads((prev) => [...prev, response.data]);
      setSelectedUpload(response.data);
      setAspectRatio(response.data.aspectRatio || '16:9');
      setOutputWidth(response.data.outputWidth || 1920);
      setOutputHeight(response.data.outputHeight || 1080);
      setPositionX(response.data.positionX || 0);
      setPositionY(response.data.positionY || 0);
      setScale(response.data.scale || 1.0);
    } catch (error: any) {
      setError(error.response?.data?.message || 'Failed to upload video.');
    }
  };

  // Handle video selection
  const handleVideoSelect = async (mediaId: string) => {
    const upload = uploads.find((u) => u.id === Number(mediaId));
    setSelectedUpload(upload || null);
    if (upload) {
      setAspectRatio(upload.aspectRatio || '16:9');
      setOutputWidth(upload.outputWidth || 1920);
      setOutputHeight(upload.outputHeight || 1080);
      setPositionX(upload.positionX || 0);
      setPositionY(upload.positionY || 0);
      setScale(upload.scale || 1.0);
    }
  };

  const debouncedSave = useCallback(
    debounce(async (field: 'aspectRatio' | 'positionX' | 'positionY' | 'scale' | 'outputWidth' | 'outputHeight', value: string | number) => {
      if (!requireLogin() || !selectedUpload) return;
      setIsSaving(true);
      setSaveSuccess(false);
      try {
        let endpoint = '';
        let method = 'post';
        let params: any = {};
        
        if (field === 'aspectRatio') {
          endpoint = `${API_BASE_URL}/api/aspect-ratio/set-aspect-ratio/${selectedUpload.id}`;
          const response = await axios.post(
            endpoint,
            { aspectRatio: value },
            { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
          );
          setSelectedUpload(response.data);
        } else if (field === 'positionX') {
          endpoint = `${API_BASE_URL}/api/aspect-ratio/update-position-x/${selectedUpload.id}`;
          params = { positionX: value };
          method = 'put';
        } else if (field === 'positionY') {
          endpoint = `${API_BASE_URL}/api/aspect-ratio/update-position-y/${selectedUpload.id}`;
          params = { positionY: value };
          method = 'put';
        } else if (field === 'scale') {
          endpoint = `${API_BASE_URL}/api/aspect-ratio/update-scale/${selectedUpload.id}`;
          params = { scale: value };
          method = 'put';
        } else if (field === 'outputWidth') {
          endpoint = `${API_BASE_URL}/api/aspect-ratio/update-output-width/${selectedUpload.id}`;
          params = { width: value };
          method = 'put';
        } else if (field === 'outputHeight') {
          endpoint = `${API_BASE_URL}/api/aspect-ratio/update-output-height/${selectedUpload.id}`;
          params = { height: value };
          method = 'put';
        }
        
        if (method === 'put') {
          const response = await axios.put(endpoint, null, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
            params,
          });
          setSelectedUpload(response.data);
        }
        setSaveSuccess(true);
        setTimeout(() => setSaveSuccess(false), 2000);
      } catch (error: any) {
        setError(error.response?.data?.message || `Failed to update ${field}.`);
      } finally {
        setIsSaving(false);
      }
    }, 500),
    [selectedUpload]
  );

  // Handle aspect ratio change
  const handleAspectRatioChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newAspectRatio = e.target.value;
    setAspectRatio(newAspectRatio);
    
    // Auto-set default resolution for the aspect ratio
    const presets = resolutionPresets[newAspectRatio];
    if (presets && presets.length > 0) {
      const defaultPreset = presets.find(p => p.label.includes('1080p')) || presets[0];
      setOutputWidth(defaultPreset.width);
      setOutputHeight(defaultPreset.height);
      debouncedSave('outputWidth', defaultPreset.width);
      debouncedSave('outputHeight', defaultPreset.height);
    }
    
    debouncedSave('aspectRatio', newAspectRatio);
  };

  // Handle resolution preset change
  const handleResolutionPresetChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const preset = resolutionPresets[aspectRatio]?.find(p => p.label === e.target.value);
    if (preset) {
      setOutputWidth(preset.width);
      setOutputHeight(preset.height);
      debouncedSave('outputWidth', preset.width);
      debouncedSave('outputHeight', preset.height);
    }
  };

  // Handle output width change
  const handleOutputWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newWidth = parseInt(e.target.value) || 1920;
    setOutputWidth(newWidth);
    debouncedSave('outputWidth', newWidth);
  };

  // Handle output height change
  const handleOutputHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newHeight = parseInt(e.target.value) || 1080;
    setOutputHeight(newHeight);
    debouncedSave('outputHeight', newHeight);
  };

  // Handle positionX change
  const handlePositionXChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPositionX = parseInt(e.target.value) || 0;
    setPositionX(newPositionX);
    debouncedSave('positionX', newPositionX);
  };

  // Handle positionY change
  const handlePositionYChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPositionY = parseInt(e.target.value) || 0;
    setPositionY(newPositionY);
    debouncedSave('positionY', newPositionY);
  };

  // Handle scale change
  const handleScaleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newScale = parseFloat(e.target.value) || 1.0;
    setScale(newScale);
    debouncedSave('scale', newScale);
  };

  // Handle aspect ratio processing
  const handleStartProcessing = async () => {
    if (!requireLogin() || !selectedUpload) {
      setError('Please select a video to process.');
      return;
    }
    if (!selectedUpload.aspectRatio && (!selectedUpload.outputWidth || !selectedUpload.outputHeight)) {
      setError('Please set an aspect ratio and resolution before processing.');
      return;
    }
    setIsProcessing(true);
    setError(null);
    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/aspect-ratio/process/${selectedUpload.id}`,
        {},
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      );
      setSelectedUpload(response.data);
      // Poll job status
      const pollJobStatus = async () => {
        const interval = setInterval(async () => {
          try {
            const statusResponse = await axios.get(
              `${API_BASE_URL}/api/aspect-ratio/user-media`,
              { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
            );
            const updatedMedia = statusResponse.data.find((m: AspectRatioMedia) => m.id === selectedUpload.id);
            setSelectedUpload(updatedMedia);
            if (updatedMedia.status === 'SUCCESS' && updatedMedia.processedCdnUrl) {
              clearInterval(interval);
              setIsProcessing(false);
              const outputSection = document.querySelector('.download-section');
              if (outputSection) {
                outputSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }
            } else if (updatedMedia.status === 'FAILED') {
              clearInterval(interval);
              setIsProcessing(false);
              setError('Aspect ratio processing failed.');
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
      setError(error.response?.data?.message || 'Failed to process aspect ratio.');
      setIsProcessing(false);
    }
  };

  // Handle download
  const handleDownload = async () => {
    if (selectedUpload?.processedCdnUrl && userProfile.id) {
      try {
        const response = await fetch(selectedUpload.processedCdnUrl, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        if (!response.ok) throw new Error('Failed to fetch video.');
        const blob = await response.blob();
        const blobUrl = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = `adjusted-video-${Date.now()}.mp4`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(blobUrl);
      } catch (error) {
        console.error('Download failed:', error);
        setError('Failed to download video. Please try again.');
      }
    }
  };

  // Require login
  const requireLogin = () => {
    if (!isLoggedIn) {
      setShowLoginModal(true);
      return false;
    }
    return true;
  };

  // Scroll to section
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

  // Get current resolution preset label
  const getCurrentResolutionLabel = () => {
    const presets = resolutionPresets[aspectRatio] || [];
    const current = presets.find(p => p.width === outputWidth && p.height === outputHeight);
    return current ? current.label : 'Custom';
  };

  return (
    <div className="video-filter-page">
      <Script
        id="aspect-ratio-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'Scenith AI Aspect Ratio Editor',
            description: 'Free AI-powered tool to adjust video aspect ratio, position, and scale. Customize and download high-quality MP4s instantly.',
            url: typeof window !== 'undefined' ? window.location.href : '/tools/adjust-aspect-ratio',
            applicationCategory: 'MultimediaApplication',
            operatingSystem: 'Web Browser',
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
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
          <h1>Free AI Aspect Ratio Editor - Adjust Videos in Seconds</h1>
          <p className="hero-description">
            Easily adjust the aspect ratio, resolution, position, and scale of your videos with our AI-powered tool. Perfect for social media, films, and more. Download high-quality MP4s instantly.
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
                    aria-label="Upload video for aspect ratio adjustment"
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
                      {upload.originalFileName}
                    </option>
                  ))}
                </select>
                <div className="video-filter-container">
                  <div className="video-preview-container" data-resolution={`${outputWidth}x${outputHeight}`}>
                    {selectedUpload && userProfile.id ? (
                      <>
                        <div className="canvas-info-overlay">
                          <span className="canvas-badge">Canvas: {outputWidth}x{outputHeight}</span>
                          <span className="video-badge">Video: {scale.toFixed(1)}x scale</span>
                        </div>
                        <div className="video-preview-wrapper">
                          <VideoPreview
                            src={selectedUpload.originalCdnUrl}
                            userId={userProfile.id}
                            positionX={positionX}
                            positionY={positionY}
                            scale={scale}
                            aspectRatio={aspectRatio}
                            outputWidth={outputWidth}
                            outputHeight={outputHeight}
                            currentTime={currentTime}
                            setCurrentTime={setCurrentTime}
                          />
                        </div>
                      </>
                    ) : (
                      <div className="video-placeholder">
                        <div className="placeholder-icon">🎬</div>
                        <p>Upload or select a video to preview</p>
                        <p className="placeholder-hint">Adjust resolution, position, and scale in real-time</p>
                      </div>
                    )}
                  </div>
                  <div className="filter-controls">
                    <h3>Adjust Aspect Ratio & Resolution</h3>
                    
                    {/* Aspect Ratio Selector */}
                    <div className="aspect-ratio-selector">
                      <label>Aspect Ratio</label>
                      <select
                        value={aspectRatio}
                        onChange={handleAspectRatioChange}
                        disabled={!isLoggedIn || !selectedUpload}
                        className="filter-select"
                        aria-label="Select aspect ratio"
                      >
                        <option value="16:9">16:9 (Widescreen)</option>
                        <option value="4:3">4:3 (Standard)</option>
                        <option value="1:1">1:1 (Square)</option>
                        <option value="9:16">9:16 (Vertical)</option>
                        <option value="21:9">21:9 (Ultrawide)</option>
                      </select>
                    </div>

                    {/* Resolution Preset Selector */}
                    <div className="resolution-preset-selector">
                      <label>Quality Preset</label>
                      <select
                        value={getCurrentResolutionLabel()}
                        onChange={handleResolutionPresetChange}
                        disabled={!isLoggedIn || !selectedUpload}
                        className="filter-select"
                        aria-label="Select resolution preset"
                      >
                        <option value="Custom">Custom</option>
                        {resolutionPresets[aspectRatio]?.map((preset) => (
                          <option key={preset.label} value={preset.label}>
                            {preset.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Custom Resolution Inputs */}
                    <div className="resolution-inputs">
                      <div className="resolution-input-group">
                        <label>Width (px)</label>
                        <input
                          type="number"
                          min="320"
                          max="7680"
                          step="2"
                          value={outputWidth}
                          onChange={handleOutputWidthChange}
                          disabled={!isLoggedIn || !selectedUpload}
                          className="resolution-input"
                          aria-label="Set output width"
                        />
                      </div>
                      <div className="resolution-input-group">
                        <label>Height (px)</label>
                        <input
                          type="number"
                          min="240"
                          max="4320"
                          step="2"
                          value={outputHeight}
                          onChange={handleOutputHeightChange}
                          disabled={!isLoggedIn || !selectedUpload}
                          className="resolution-input"
                          aria-label="Set output height"
                        />
                      </div>
                    </div>

                    <div className="resolution-info">
                      <span className="info-badge">📐 Output: {outputWidth}x{outputHeight}</span>
                    </div>

                    <h3 className="controls-subtitle">Position & Scale</h3>

                    <div className="filter-slider">
                      <label>Position X (Left/Right)</label>
                      <input
                        type="range"
                        min="-200"
                        max="200"
                        step="10"
                        value={positionX}
                        onChange={handlePositionXChange}
                        disabled={!isLoggedIn || !selectedUpload}
                        aria-label="Adjust horizontal position"
                      />
                      <span>{positionX}px</span>
                    </div>
                    <div className="filter-slider">
                      <label>Position Y (Up/Down)</label>
                      <input
                        type="range"
                        min="-200"
                        max="200"
                        step="10"
                        value={positionY}
                        onChange={handlePositionYChange}
                        disabled={!isLoggedIn || !selectedUpload}
                        aria-label="Adjust vertical position"
                      />
                      <span>{positionY}px</span>
                    </div>
                    <div className="filter-slider">
                      <label>Scale</label>
                      <input
                        type="range"
                        min="0.5"
                        max="2.0"
                        step="0.1"
                        value={scale}
                        onChange={handleScaleChange}
                        disabled={!isLoggedIn || !selectedUpload}
                        aria-label="Adjust scale"
                      />
                      <span>{scale.toFixed(1)}x</span>
                    </div>
                  </div>
                </div>
                <div className="action-buttons">
                  <button
                    className="cta-button process-video-button"
                    onClick={handleStartProcessing}
                    disabled={isLoggedIn && (!selectedUpload || isProcessing || (!selectedUpload.aspectRatio && (!selectedUpload.outputWidth || !selectedUpload.outputHeight)))}
                    aria-label="Start aspect ratio processing"
                  >
                    {isProcessing ? 'Processing...' : isLoggedIn ? 'Process Video' : 'Login to Process'}
                  </button>
                </div>
                {selectedUpload?.processedCdnUrl && (
                  <div className="download-section" role="region" aria-labelledby="download-title">
                    <h3 id="download-title">✅ Download Your Adjusted Video</h3>
                    <p className="download-description">Your video has been processed successfully at {outputWidth}x{outputHeight} resolution!</p>
                    <button
                      onClick={handleDownload}
                      className="cta-button download-button"
                      aria-label="Download adjusted video as MP4"
                    >
                      📥 Download MP4
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
              <span className="trust-item">🎥 Custom Resolution</span>
              <span className="trust-item">🌟 Precise Control</span>
              <span className="trust-item">📥 Instant Download</span>
            </div>
          </div>
          <figure className="hero-image-container">
            <Image
              src="/images/aspect-ratio-hero.jpg"
              alt="Aspect ratio editor example showing video adjustment and preview"
              className="hero-image"
              width={800}
              height={400}
              priority
            />
            <figcaption className="sr-only">Example of aspect ratio editor with adjustment controls and video preview</figcaption>
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
          <h2 id="how-it-works-title">How to Adjust Video Aspect Ratio in 3 Simple Steps</h2>
          <p className="section-description">
            Easily adjust your video's aspect ratio, resolution, position, and scale with our intuitive tool. No advanced editing skills required.
          </p>
          <div className="steps-grid" role="list">
            <motion.article className="step-card" whileHover={{ scale: 1.05 }} role="listitem">
              <div className="step-number" aria-label="Step 1">1</div>
              <h3>Upload Your Video</h3>
              <p>Upload any video file (MP4, AVI, etc.). Our system securely stores it for processing.</p>
            </motion.article>
            <motion.article className="step-card" whileHover={{ scale: 1.05 }} role="listitem">
              <div className="step-number" aria-label="Step 2">2</div>
              <h3>Choose Resolution & Adjust</h3>
              <p>Select your aspect ratio, choose quality preset (1080p, 4K, etc.), and fine-tune position and scale with real-time preview.</p>
            </motion.article>
            <motion.article className="step-card" whileHover={{ scale: 1.05 }} role="listitem">
              <div className="step-number" aria-label="Step 3">3</div>
              <h3>Process & Download</h3>
              <p>Apply your settings and download the high-quality MP4 at your chosen resolution in minutes.</p>
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
          <h2 id="features-title">Why Choose Our Aspect Ratio Editor?</h2>
          <p className="section-description">
            Create perfectly formatted videos with precise control over aspect ratio, resolution, position, and scale. No expensive software needed.
          </p>
          <div className="features-grid" role="list">
            <motion.article className="feature-card" whileHover={{ scale: 1.05 }} role="listitem">
              <span className="feature-icon" aria-hidden="true">⚡</span>
              <h3>Fast Processing</h3>
              <p>Adjust your videos in seconds using our optimized processing pipeline.</p>
            </motion.article>
            <motion.article className="feature-card" whileHover={{ scale: 1.05 }} role="listitem">
              <span className="feature-icon" aria-hidden="true">🎨</span>
              <h3>Quality Presets</h3>
              <p>Choose from 480p to 8K resolution presets or set custom dimensions.</p>
            </motion.article>
            <motion.article className="feature-card" whileHover={{ scale: 1.05 }} role="listitem">
              <span className="feature-icon" aria-hidden="true">🆓</span>
              <h3>Free Access</h3>
              <p>Unlimited free usage with full commercial rights. No watermarks.</p>
            </motion.article>
            <motion.article className="feature-card" whileHover={{ scale: 1.05 }} role="listitem">
              <span className="feature-icon" aria-hidden="true">📱</span>
              <h3>Real-time Preview</h3>
              <p>See exactly how your video will look before processing.</p>
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
            Discover how creators and professionals use our aspect ratio tool to optimize their videos.
          </p>
          <div className="use-cases-grid" role="list">
            <motion.article className="use-case-card" whileHover={{ scale: 1.03 }} role="listitem">
              <h3>🎥 Social Media Content</h3>
              <p>Create 1080x1920 vertical videos for TikTok, Instagram Stories, or 1920x1080 for YouTube.</p>
            </motion.article>
            <motion.article className="use-case-card" whileHover={{ scale: 1.03 }} role="listitem">
              <h3>🎬 Film Production</h3>
              <p>Export in 4K (3840x2160) or 8K (7680x4320) for cinematic quality.</p>
            </motion.article>
            <motion.article className="use-case-card" whileHover={{ scale: 1.03 }} role="listitem">
              <h3>💼 Professional Content</h3>
              <p>Create presentation videos in standard 1920x1080 or 1280x720 formats.</p>
            </motion.article>
            <motion.article className="use-case-card" whileHover={{ scale: 1.03 }} role="listitem">
              <h3>🎨 Creative Projects</h3>
              <p>Square 1080x1080 videos for Instagram posts or custom dimensions for unique projects.</p>
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
            Join thousands of satisfied users who rely on our aspect ratio tool for their video projects.
          </p>
          <div className="testimonials-grid" role="list">
            <motion.blockquote className="testimonial-card" whileHover={{ scale: 1.05 }} role="listitem">
              <p>"The resolution presets are perfect! I can export for any platform in seconds."</p>
              <cite>– Sarah Kim, Content Creator</cite>
              <div className="rating" aria-label="5 out of 5 stars">⭐⭐⭐⭐⭐</div>
            </motion.blockquote>
            <motion.blockquote className="testimonial-card" whileHover={{ scale: 1.05 }} role="listitem">
              <p>"I love the 4K export option. The quality is outstanding for my films."</p>
              <cite>– Michael Chen, Filmmaker</cite>
              <div className="rating" aria-label="5 out of 5 stars">⭐⭐⭐⭐⭐</div>
            </motion.blockquote>
            <motion.blockquote className="testimonial-card" whileHover={{ scale: 1.05 }} role="listitem">
              <p>"Custom resolution control is exactly what I needed for my courses!"</p>
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
              <h3>What resolutions are supported?</h3>
              <p>We support resolutions from 480p up to 8K (7680x4320). You can also set custom dimensions.</p>
            </article>
            <article className="faq-item" role="listitem">
              <h3>Can I preview before processing?</h3>
              <p>Yes! You can see real-time previews of all your adjustments including resolution, position, and scale.</p>
            </article>
            <article className="faq-item" role="listitem">
              <h3>Will the video quality be affected?</h3>
              <p>We maintain high quality using optimized encoding. You can even upscale to higher resolutions like 4K.</p>
            </article>
            <article className="faq-item" role="listitem">
              <h3>Is it really free?</h3>
              <p>Yes, completely free with unlimited exports, no watermarks, and full commercial rights.</p>
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
          <h2 id="cta-title">Ready to Adjust Your Videos?</h2>
          <p>Join over 50,000+ creators who trust our AI aspect ratio tool. Start optimizing your videos today - completely free!</p>
          <button
            className="cta-button"
            onClick={() => {
              if (!isLoggedIn) {
                setShowLoginModal(true);
              } else {
                scrollToSection('hero');
              }
            }}
            aria-label="Start using the free aspect ratio editor"
          >
            {isLoggedIn ? 'Start Adjusting Videos Now - Free!' : 'Login to Start Adjusting Videos'}
          </button>
          <div className="cta-features">
            <span>⚡ Fast processing</span>
            <span>🎬 Up to 8K quality</span>
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

export default AspectRatioClient;