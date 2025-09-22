"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import VideoPreview from './VideoPreview';
import { API_BASE_URL, CDN_URL } from '../config';
import '../../../styles/tools/VideoSpeedAdjuster.css';

// Interfaces
interface UserProfile {
  email: string;
  firstName: string;
  lastName: string;
  picture: string | null;
  googleAuth: boolean;
  role: string;
}

interface Video {
  id: number;
  fileName: string;
  status: string;
  speed: number;
  cdnUrl?: string;
}

const CustomVideoPlayer = ({
  src,
  playbackRate,
  setIsPlaying,
  setCurrentTime,
}: {
  src: string;
  playbackRate: number;
  setIsPlaying: (isPlaying: boolean) => void;
  setCurrentTime: (time: number) => void;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlayingState] = useState(false);
  const [currentTime, setCurrentTimeState] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = playbackRate;
    }
  }, [playbackRate]);

  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;
      const handleEnded = () => {
        setIsPlayingState(false);
        setIsPlaying(false);
        setCurrentTimeState(0);
        setCurrentTime(0);
        video.currentTime = 0;
      };
      video.addEventListener('ended', handleEnded);
      return () => video.removeEventListener('ended', handleEnded);
    }
  }, [setIsPlaying, setCurrentTime]);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch((e) => console.error('Video playback error:', e));
      }
      setIsPlayingState(!isPlaying);
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      // Throttle updates to reduce re-renders
      const newTime = Math.round(videoRef.current.currentTime * 10) / 10;
      setCurrentTimeState(newTime);
      setCurrentTime(newTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="custom-video-player">
      <video
        ref={videoRef}
        src={src}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        style={{ display: 'none' }}
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
    </div>
  );
};

const VideoSpeedAdjusterClient: React.FC = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userProfile, setUserProfile] = useState<UserProfile>({
    email: '',
    firstName: '',
    lastName: '',
    picture: null,
    googleAuth: false,
    role: '',
  });
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  const [loginError, setLoginError] = useState<string | null>(null);
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(false);
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [speed, setSpeed] = useState<number>(1.0);
  const [videoId, setVideoId] = useState<number | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isExporting, setIsExporting] = useState<boolean>(false);
  const [exportStatus, setExportStatus] = useState<string>('');
  const [cdnUrl, setCdnUrl] = useState<string | null>(null);
  const [userVideos, setUserVideos] = useState<Video[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [videoDimensions, setVideoDimensions] = useState<{ width: number; height: number }>({ width: 1080, height: 1920 }); // Fallback
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);

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
            email: res.data.email || '',
            firstName,
            lastName,
            picture: res.data.picture || null,
            googleAuth: res.data.googleAuth || false,
            role: res.data.role || 'BASIC',
          });
          setIsLoggedIn(true);
          fetchUserVideos(token);
        })
        .catch((error) => {
          console.error('Error fetching user profile:', error);
          if (error.response?.status === 401) {
            localStorage.removeItem('token');
            setIsLoggedIn(false);
          }
        });
    }
  }, []);

  // Handle Google Sign-In
  const handleGoogleLogin = useCallback(async (credentialResponse: any) => {
    setIsLoggingIn(true);
    setLoginError(null);
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/google`, {
        token: credentialResponse.credential,
      });
      localStorage.setItem('token', response.data.token);
      const res = await axios.get(`${API_BASE_URL}/auth/me`, {
        headers: { Authorization: `Bearer ${response.data.token}` },
      });
      const fullName = res.data.name || '';
      const nameParts = fullName.trim().split(' ');
      const firstName = nameParts[0] || '';
      const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : '';
      setUserProfile({
        email: res.data.email || '',
        firstName,
        lastName,
        picture: res.data.picture || null,
        googleAuth: true,
        role: res.data.role || 'BASIC',
      });
      setIsLoggedIn(true);
      setShowLoginModal(false);
      fetchUserVideos(response.data.token);
    } catch (error: any) {
      setLoginError(error.response?.data?.message || 'Google login failed');
    } finally {
      setIsLoggingIn(false);
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

  // Fetch user videos
  const fetchUserVideos = async (token: string) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/video-speed/user-videos`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUserVideos(response.data);
    } catch (error) {
      console.error('Error fetching user videos:', error);
      setError('Failed to load user videos.');
    }
  };

  // Handle login
  const handleLogin = async (formData: { email: string; password: string }) => {
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
        email: res.data.email || '',
        firstName,
        lastName,
        picture: res.data.picture || null,
        googleAuth: res.data.googleAuth || false,
        role: res.data.role || 'BASIC',
      });
      setIsLoggedIn(true);
      setShowLoginModal(false);
      fetchUserVideos(token);
    } catch (error: any) {
      setLoginError(error.response?.data?.message || 'Login failed. Please check your credentials.');
    } finally {
      setIsLoggingIn(false);
    }
  };

  // Handle signup
  const handleSignUp = async (formData: { email: string; password: string; firstName: string; lastName: string }) => {
    setIsLoggingIn(true);
    setLoginError(null);
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/register`, formData);
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
        email: res.data.email || '',
        firstName,
        lastName,
        picture: res.data.picture || null,
        googleAuth: res.data.googleAuth || false,
        role: res.data.role || 'BASIC',
      });
      setIsLoggedIn(true);
      setShowLoginModal(false);
      fetchUserVideos(token);
    } catch (error: any) {
      setLoginError(error.response?.data?.message || 'Sign up failed. Please try again.');
    } finally {
      setIsLoggingIn(false);
    }
  };

  // Handle video upload
  const handleVideoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isLoggedIn) {
      setShowLoginModal(true);
      return;
    }
    const file = e.target.files?.[0];
    if (!file) return;

    setVideoFile(file);
    setError(null);
    setPreviewUrl(URL.createObjectURL(file));
    setIsPlaying(false);
    setCurrentTime(0);

    const videoElement = document.createElement('video');
    videoElement.src = URL.createObjectURL(file);
    videoElement.onloadedmetadata = () => {
      setVideoDimensions({
        width: videoElement.videoWidth || 1080,
        height: videoElement.videoHeight || 1920,
      });
      URL.revokeObjectURL(videoElement.src);
    };

    const formData = new FormData();
    formData.append('file', file);
    formData.append('speed', speed.toString());

    try {
      const response = await axios.post(`${API_BASE_URL}/api/video-speed/upload`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      setVideoId(response.data.id);
    } catch (error: any) {
      setError(error.response?.data?.message || 'Failed to upload video.');
    }
  };

  // Handle speed change with range validation
  const handleSpeedChange = async (newSpeed: number) => {
    const clampedSpeed = Math.max(0.5, Math.min(15.0, newSpeed));
    setSpeed(clampedSpeed);
    if (videoId) {
      try {
        await axios.put(
          `${API_BASE_URL}/api/video-speed/${videoId}/speed`,
          { speed: clampedSpeed },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
              'Content-Type': 'application/json',
            },
          }
        );
      } catch (error: any) {
        setError(error.response?.data?.message || 'Failed to update speed.');
      }
    }
  };

  // Handle export
  const handleExport = async () => {
    if (!videoId) {
      setError('No video uploaded.');
      return;
    }
    setIsExporting(true);
    setExportStatus('Exporting...');
    try {
      await axios.post(
        `${API_BASE_URL}/api/video-speed/${videoId}/export`,
        {},
        {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        }
      );
      checkExportStatus();
    } catch (error: any) {
      setError(error.response?.data?.message || 'Failed to initiate export.');
      setIsExporting(false);
    }
  };

  // Check export status
  const checkExportStatus = async () => {
    if (!videoId) return;
    try {
      const response = await axios.get(`${API_BASE_URL}/api/video-speed/status/${videoId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      setExportStatus(response.data.status);
      if (response.data.status === 'completed') {
        setCdnUrl(response.data.cdnUrl);
        setIsExporting(false);
        fetchUserVideos(localStorage.getItem('token')!);
      } else {
        setTimeout(checkExportStatus, 2000);
      }
    } catch (error: any) {
      setError(error.response?.data?.message || 'Failed to check export status.');
      setIsExporting(false);
    }
  };

  // Handle download
  const handleDownload = () => {
    if (cdnUrl) {
      const link = document.createElement('a');
      link.href = cdnUrl;
      link.download = `speed-adjusted-video-${Date.now()}.mp4`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="video-speed-adjuster-page">
      <section className="hero-section" id="hero">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Adjust Video Speed Online - Free & Easy</h1>
          <p className="hero-description">
            Change the speed of your videos effortlessly. Upload your video, adjust the speed with a slider, preview the result, and download the processed video in seconds.
          </p>
          {!isLoggedIn && (
            <button
              className="cta-button sign-in-button"
              onClick={() => setShowLoginModal(true)}
              aria-label="Sign in to use the video speed adjuster"
            >
              Sign In to Use
            </button>
          )}
          <div className="hero-cta-section">
            <div className="main-content">
              <div className="upload-section">
                <input
                  type="file"
                  accept="video/*"
                  onChange={handleVideoUpload}
                  disabled={!isLoggedIn}
                  className="video-upload-input"
                  aria-label="Upload video file"
                />
                {previewUrl && (
                  <div className="preview-section">
                    <h3>Preview</h3>
                    <VideoPreview
                      videoLayers={[
                        {
                          id: 'preview',
                          type: 'video',
                          filePath: previewUrl,
                          startTime: 0,
                          duration: Infinity,
                          speed,
                        },
                      ]}
                      audioLayers={[]}
                      currentTime={currentTime}
                      isPlaying={isPlaying}
                      canvasDimensions={videoDimensions}
                      setIsPlaying={setIsPlaying}
                      containerHeight="400px"
                      projectId="temp"
                    />
                    <CustomVideoPlayer
                      src={previewUrl}
                      playbackRate={speed}
                      setIsPlaying={setIsPlaying}
                      setCurrentTime={setCurrentTime}
                    />
                    <div className="speed-control">
                      <label htmlFor="speed-slider">Speed: {speed.toFixed(1)}x</label>
                      <input
                        id="speed-slider"
                        type="range"
                        min="0.5"
                        max="15.0"
                        step="0.1"
                        value={speed}
                        onChange={(e) => handleSpeedChange(parseFloat(e.target.value))}
                        disabled={!isLoggedIn || !videoId}
                        aria-label="Adjust video speed"
                      />
                      <input
                        type="number"
                        min="0.5"
                        max="15.0"
                        step="0.1"
                        value={speed}
                        onChange={(e) => {
                          const value = parseFloat(e.target.value);
                          if (!isNaN(value)) {
                            handleSpeedChange(value);
                          }
                        }}
                        disabled={!isLoggedIn || !videoId}
                        className="speed-number-input"
                        aria-label="Set video speed"
                      />
                    </div>
                  </div>
                )}
                <button
                  className="cta-button export-button"
                  onClick={handleExport}
                  disabled={!isLoggedIn || !videoId || isExporting}
                  aria-label="Export video with adjusted speed"
                >
                  {isExporting ? exportStatus : 'Export Video'}
                </button>
                {cdnUrl && (
                  <button
                    className="cta-button download-button"
                    onClick={handleDownload}
                    disabled={!isLoggedIn}
                    aria-label="Download processed video"
                  >
                    Download Video
                  </button>
                )}
              </div>
              {isLoggedIn && (
                <div className="user-videos-section">
                  <h3>Your Videos</h3>
                  {userVideos.length === 0 ? (
                    <p>No videos yet. Upload one to get started!</p>
                  ) : (
                    <div className="video-list">
                      {userVideos.map((video) => (
                        <div key={video.id} className="video-item">
                          <p>{video.fileName} (Speed: {video.speed}x)</p>
                          {video.status === 'completed' && video.cdnUrl && (
                            <a href={video.cdnUrl} download className="download-link">
                              Download
                            </a>
                          )}
                          <p>Status: {video.status}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </section>

      {error && (
        <div className="error-message" role="alert">
          {error}
        </div>
      )}

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
                <p>{isSignUp ? 'Sign Up to Continue' : 'Login to Continue'}</p>
              </div>
              {isLoggingIn && (
                <div className="loading-overlay">
                  <div className="spinner" />
                  <p>{isSignUp ? 'Signing up...' : 'Logging in...'}</p>
                </div>
              )}
              {loginError && <div className="error-message">{loginError}</div>}
              {isSignUp ? (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.currentTarget);
                    handleSignUp({
                      email: formData.get('email') as string,
                      password: formData.get('password') as string,
                      firstName: formData.get('firstName') as string,
                      lastName: formData.get('lastName') as string,
                    });
                  }}
                  className="auth-form"
                >
                  <div className="auth-input-label">
                    <input
                      type="text"
                      name="firstName"
                      placeholder=" "
                      className="auth-input"
                      aria-label="First name"
                      disabled={isLoggingIn}
                      required
                    />
                    <span>First Name</span>
                  </div>
                  <div className="auth-input-label">
                    <input
                      type="text"
                      name="lastName"
                      placeholder=" "
                      className="auth-input"
                      aria-label="Last name"
                      disabled={isLoggingIn}
                      required
                    />
                    <span>Last Name</span>
                  </div>
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
                    {isLoggingIn ? 'Signing up...' : 'Sign Up'}
                  </button>
                </form>
              ) : (
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
              )}
              <div className="divider">OR</div>
              <div id="googleSignInButton" className="google-button"></div>
              <p className="auth-link">
                {isSignUp ? (
                  <>Already have an account? <button className="toggle-auth-button" onClick={() => setIsSignUp(false)}>Login</button></>
                ) : (
                  <>New to SCENITH? <button className="toggle-auth-button" onClick={() => setIsSignUp(true)}>Sign up</button></>
                )}
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default VideoSpeedAdjusterClient;