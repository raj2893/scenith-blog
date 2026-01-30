"use client";

import React, { useState, useEffect, useCallback, useRef, SetStateAction, Dispatch } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import { API_BASE_URL, CDN_URL } from '../../../config';
import '../../../../../styles/tools/Subtitles.css';
import Script from 'next/script';
import { debounce } from 'lodash';
import SubtitleEditorPanel from './SubtitleEditorPanel';
import CustomStyleDropdown from './CustomStyleDropdown';
import DeleteConfirmModal from '../../../../components/DeleteConfirmModal';

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

interface SubtitleMedia {
  id: number;
  originalFileName: string;
  originalPath: string;
  originalCdnUrl: string;
  subtitlesJson: string | null;
  processedCdnUrl: string | null;
  status: 'UPLOADED' | 'SUCCESS' | 'PROCESSING' | 'FAILED';
}

interface WordTimestamp {
  word: string;
  start: number;
  end: number;
}

export interface SubtitleDTO {
  id: string;
  text: string;
  timelineStartTime: number;
  timelineEndTime: number;
  fontFamily: string;
  fontColor: string;
  backgroundColor: string;
  scale: number;
  backgroundOpacity: number;
  positionX: number;
  positionY: number;
  alignment: string;
  backgroundH: number;
  backgroundW: number;
  backgroundBorderRadius: number;
  backgroundBorderWidth: number;
  backgroundBorderColor: string;
  textBorderColor: string;
  textBorderWidth: number;
  textBorderOpacity: number;
  letterSpacing: number;
  lineSpacing: number;
  opacity: number;
  rotation: number;
  isSubtitle: boolean;
  keyframes: object;
  words?: WordTimestamp[];  
}

interface AiStyle {
  name: string;
  fontFamily: string;
  fontColor: string;
  backgroundColor: string;
}

interface LoginFormData {
  email: string;
  password: string;
}

interface CustomVideoPlayerProps {
  src: string;
  userId: number;
  subtitles: SubtitleDTO[];
  currentTime: number;
  setCurrentTime: Dispatch<SetStateAction<number>>;
}

const parseFont = (fontFamily: string) => {
  let weight = 'normal';
  let style = 'normal';
  let family = fontFamily;

  if (fontFamily.includes(':700italic')) {
    style = 'italic';
    weight = '700';
    family = fontFamily.replace(':700italic', '');
  } else if (fontFamily.includes(':italic')) {
    style = 'italic';
    family = fontFamily.replace(':italic', '');
  } else if (fontFamily.includes(':900')) {
    weight = '900';
    family = fontFamily.replace(':900', '');
  } else if (fontFamily.includes(':800')) {
    weight = '800';
    family = fontFamily.replace(':800', '');
  } else if (fontFamily.includes(':700')) {
    weight = '700';
    family = fontFamily.replace(':700', '');
  } else if (fontFamily.includes('Bold')) {
    weight = 'bold';
    family = fontFamily.replace(' Bold', '');
  } else if (fontFamily.includes('Black')) {
    weight = '900';
    family = fontFamily.replace(' Black', '');
  }

  return { family, weight, style };
};

const CustomVideoPlayer = ({ src, userId, subtitles, currentTime, setCurrentTime }: CustomVideoPlayerProps) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [isSeeking, setIsSeeking] = useState(false);
    const [containerDimensions, setContainerDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        if (videoRef.current && Math.abs(videoRef.current.currentTime - currentTime) > 0.1) {
            videoRef.current.currentTime = currentTime;
            setIsSeeking(false);
        }
    }, [currentTime]);   
    
    useEffect(() => {
        const updateDimensions = () => {
            if (videoRef.current) {
                const rect = videoRef.current.getBoundingClientRect();
                setContainerDimensions({ width: rect.width, height: rect.height });
            }
        };
        
        updateDimensions();
        window.addEventListener('resize', updateDimensions);
        
        // Force update after a short delay to ensure video is loaded
        const timer = setTimeout(updateDimensions, 100);
        
        return () => {
            window.removeEventListener('resize', updateDimensions);
            clearTimeout(timer);
        };
    }, [src, subtitles]);    

    const videoUrl = src;

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
        if (videoRef.current && !isSeeking) {
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
            setIsSeeking(false);
        }
    };

    const currentSubtitle = subtitles.find(
        (sub) => currentTime >= sub.timelineStartTime && currentTime <= sub.timelineEndTime
    );

    return (
        <div className="custom-video-player">
            <div className="video-container">
                <video
                    ref={videoRef}
                    src={videoUrl}
                    onTimeUpdate={handleTimeUpdate}
                    onLoadedMetadata={handleLoadedMetadata}
                    onEnded={handleEnded}
                />
                {currentSubtitle && containerDimensions.width > 0 && (() => {
                    const videoElement = videoRef.current;
                    if (!videoElement) return null;
                    
                    const sourceWidth = videoElement.videoWidth || 1920;
                    const sourceHeight = videoElement.videoHeight || 1080;
                    if (!sourceWidth || !sourceHeight) return null;
                    const videoRect = videoElement.getBoundingClientRect();
                    
                    // Calculate the actual displayed video dimensions (accounting for object-fit: contain)
                    const videoAspectRatio = sourceWidth / sourceHeight;
                    const containerAspectRatio = videoRect.width / videoRect.height;
                    
                    let displayedWidth, displayedHeight, offsetX = 0, offsetY = 0;
                    
                    if (containerAspectRatio > videoAspectRatio) {
                        // Container is wider - video will have horizontal padding
                        displayedHeight = videoRect.height;
                        displayedWidth = displayedHeight * videoAspectRatio;
                        offsetX = (videoRect.width - displayedWidth) / 2;
                    } else {
                        // Container is taller - video will have vertical padding
                        displayedWidth = videoRect.width;
                        displayedHeight = displayedWidth / videoAspectRatio;
                        offsetY = (videoRect.height - displayedHeight) / 2;
                    }
                    
                    const scaleFactorX = displayedWidth / sourceWidth;
                    const scaleFactorY = displayedHeight / sourceHeight;
                    const scaleFactor = Math.min(scaleFactorX, scaleFactorY);
                    const scale = (currentSubtitle.scale || 1.0) * scaleFactor;
                    const fontSize = 24.0 * scale;
                    const { family, weight, style } = parseFont(currentSubtitle.fontFamily || 'Arial');
                    const letterSpacing = (currentSubtitle.letterSpacing || 0) * scale;
                    const lineSpacing = currentSubtitle.lineSpacing || 1.2;
                    const lineHeight = fontSize * lineSpacing;
                    const textLines = currentSubtitle.text.split('\n');
                    const textBorderWidth = (currentSubtitle.textBorderWidth || 0) * scale;
                    const bgHeight = (currentSubtitle.backgroundH || 0) * scale;
                    const bgWidth = (currentSubtitle.backgroundW || 0) * scale;
                    const bgBorderWidth = (currentSubtitle.backgroundBorderWidth || 0) * scale;
                    const borderRadius = (currentSubtitle.backgroundBorderRadius || 0) * scale;
                    const alignment = currentSubtitle.alignment || 'center';
                    const bgColor = currentSubtitle.backgroundColor || 'transparent';
                    const bgOpacity = currentSubtitle.backgroundOpacity !== undefined ? currentSubtitle.backgroundOpacity : 1.0;
                    const textBorderColor = currentSubtitle.textBorderColor || 'transparent';
                    const textBorderOpacity = currentSubtitle.textBorderOpacity !== undefined ? currentSubtitle.textBorderOpacity : 1.0;
                    let bgColorWithOpacity = bgColor;
                    if (bgColor !== 'transparent' && bgColor.startsWith('#')) {
                        const hex = bgColor.replace('#', '');
                        const r = parseInt(hex.substring(0, 2), 16);
                        const g = parseInt(hex.substring(2, 4), 16);
                        const b = parseInt(hex.substring(4, 6), 16);
                        bgColorWithOpacity = `rgba(${r}, ${g}, ${b}, ${bgOpacity})`;
                    }
                    let textBorderColorWithOpacity = textBorderColor;
                    if (textBorderColor !== 'transparent' && textBorderColor.startsWith('#')) {
                        const hex = textBorderColor.replace('#', '');
                        const r = parseInt(hex.substring(0, 2), 16);
                        const g = parseInt(hex.substring(2, 4), 16);
                        const b = parseInt(hex.substring(4, 6), 16);
                        textBorderColorWithOpacity = `rgba(${r}, ${g}, ${b}, ${textBorderOpacity})`;
                    }
                    const positionX = (currentSubtitle.positionX || 0) * scaleFactor;
                    const positionY = (currentSubtitle.positionY || 0) * scaleFactor;
                    const rotation = currentSubtitle.rotation || 0;
                    
                    return (
                        <div
                            className="subtitle-clip-container"
                            style={{
                                position: 'absolute',
                                left: `${offsetX}px`,
                                top: `${offsetY}px`,
                                width: `${displayedWidth}px`,
                                height: `${displayedHeight}px`,
                                overflow: 'hidden',
                                zIndex: 10,
                                pointerEvents: 'none',
                            }}
                        >
                            <div
                                className="subtitle-overlay"
                                style={{
                                    position: 'absolute',
                                    left: '50%',
                                    top: '50%',
                                    transform: `translate(calc(-50% + ${positionX}px), calc(-50% + ${positionY}px)) rotate(${rotation}deg)`,
                                    transformOrigin: 'center center',
                                    pointerEvents: 'none',
                                    maxWidth: `${displayedWidth * 0.9}px`,
                                }}
                            >
                                <div
                                    style={{
                                        backgroundColor: bgColorWithOpacity,
                                        padding: `${bgHeight / 2}px ${bgWidth / 2}px`,
                                        borderRadius: `${borderRadius}px`,
                                        border: bgBorderWidth > 0 ? `${bgBorderWidth}px solid ${currentSubtitle.backgroundBorderColor || 'transparent'}` : 'none',
                                        display: 'inline-block',
                                        position: 'relative',
                                    }}
                                >
                                    {textLines.map((line, index) => (
                                        <div
                                            key={index}
                                            style={{
                                                fontFamily: `"${family}", sans-serif`,
                                                fontWeight: weight,
                                                fontStyle: style,
                                                fontSize: `${fontSize}px`,
                                                color: currentSubtitle.fontColor || '#FFFFFF',
                                                lineHeight: `${lineHeight}px`,
                                                textAlign: alignment as any,
                                                letterSpacing: `${letterSpacing}px`,
                                                WebkitTextStroke: textBorderWidth > 0 ? `${textBorderWidth}px ${textBorderColorWithOpacity}` : 'none',
                                                paintOrder: 'stroke fill',
                                                whiteSpace: 'nowrap',
                                                opacity: currentSubtitle.opacity !== undefined ? currentSubtitle.opacity : 1.0,
                                            }}
                                        >
                                            {line}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    );
                })()}
            </div>
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

const SubtitleClient: React.FC = () => {
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
  const [uploads, setUploads] = useState<SubtitleMedia[]>([]);
  const [selectedUpload, setSelectedUpload] = useState<SubtitleMedia | null>(null);
  const [subtitles, setSubtitles] = useState<SubtitleDTO[]>([]);
  const [selectedSubtitles, setSelectedSubtitles] = useState<string[]>([]);
  const [aiStyles, setAiStyles] = useState<AiStyle[]>([]);
  const [selectedAiStyle, setSelectedAiStyle] = useState<AiStyle | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [editingSubtitle, setEditingSubtitle] = useState<SubtitleDTO | null>(null);
  const [loginErrors, setLoginErrors] = useState<{ [key: string]: string }>({});
  const [loginSuccess, setLoginSuccess] = useState<string>('');  
  const [originalSubtitle, setOriginalSubtitle] = useState<SubtitleDTO | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [applyStyleToSingle, setApplyStyleToSingle] = useState(false);
  const [availableQualities, setAvailableQualities] = useState<string[]>([]);
  const [selectedQuality, setSelectedQuality] = useState<string>('720p');
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<{id: number; name: string; type: string} | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const prevSelectedAiStyleRef = useRef<AiStyle | null>(null);
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
        const response = await axios.get(`${API_BASE_URL}/api/subtitles/plan-limits`, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        setPlanLimits(response.data);
      } catch (error) {
        console.error('Error fetching plan limits:', error);
      }
    };
  
    fetchPlanLimits();
  }, [isLoggedIn, userProfile.role]);  

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

  // Fetch AI styles
  useEffect(() => {
    const fetchAiStyles = async () => {
      try {
        const response = await fetch('/data/AiStyles.json');
        if (!response.ok) throw new Error('Failed to fetch AI subtitle styles');
        const styles = await response.json();
        setAiStyles(styles);
        setSelectedAiStyle(styles[0] || null);
      } catch (error) {
        console.error('Error fetching AI subtitle styles:', error);
        setAiStyles([]);
      }
    };
    fetchAiStyles();
  }, []);

  // Fetch user uploads
  useEffect(() => {
    if (!isLoggedIn) return;
    const fetchUploads = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/subtitles/user-media`, {
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

  useEffect(() => {
    if (userProfile.role) {
      setSelectedQuality(getDefaultQuality(userProfile.role));
    }
  }, [userProfile.role]);  

  useEffect(() => {
    if (userProfile.role) {
      const qualities = getAvailableQualities(userProfile.role);
      setAvailableQualities(qualities);
    }
  }, [userProfile.role]); 
  
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

  const requireLogin = () => {
    if (!isLoggedIn) {
      setShowLoginModal(true);
      return false;
    }
    return true;
  };  

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

const handleDeleteConfirm = async () => {
  if (!itemToDelete) return;
  setIsDeleting(true);
  try {
    await axios.delete(
      `${API_BASE_URL}/api/subtitles/delete/${itemToDelete.id}`,
      { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
    );
    setUploads(uploads.filter(u => u.id !== itemToDelete.id));
    setSelectedUpload(null);
    setSubtitles([]);
    setDeleteModalOpen(false);
    setItemToDelete(null);
  } catch (error: any) {
    setError(error.response?.data?.message || 'Failed to delete media.');
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

  const handleVideoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!requireLogin()) return;
    const file = e.target.files?.[0];
    if (!file) return;
    
    setIsUploading(true);
    const formData = new FormData();
    formData.append('file', file);
    try {
      const response = await axios.post(`${API_BASE_URL}/api/subtitles/upload`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      setUploads((prev) => [...prev, response.data]);
      setSelectedUpload(response.data);
      setSubtitles([]);
      setSelectedSubtitles([]);
      setEditingSubtitle(null);
      setOriginalSubtitle(null);
      setCurrentTime(0);      
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || 'Failed to upload video.';
      setError(errorMessage);
      
      // Scroll to error message
      setTimeout(() => {
        const errorElement = document.querySelector('.error-message');
        if (errorElement) {
          errorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    } finally {
      setIsUploading(false);
    }
  };

  // Handle video selection
  const handleVideoSelect = async (mediaId: string) => {
    const upload = uploads.find((u) => u.id === Number(mediaId));
    setSelectedUpload(upload || null);
    setSubtitles([]);
    setSelectedSubtitles([]);
    if (upload && upload.subtitlesJson) {
      try {
        const parsedSubtitles = JSON.parse(upload.subtitlesJson);
        setSubtitles(parsedSubtitles);
      } catch (error) {
        console.error('Error parsing subtitles:', error);
        setError('Failed to load subtitles.');
      }
    }
  };

  const handleGenerateSubtitles = async () => {
      if (!requireLogin() || !selectedUpload) {
          setError('Please select a video to generate subtitles.');
          return;
      }
      if (!selectedAiStyle) {
          setError('Please select an AI subtitle style.');
          return;
      }
      setIsGenerating(true);
      setError(null);
      
      try {
          // Queue the generation task
          const response = await axios.post(
              `${API_BASE_URL}/api/subtitles/generate/${selectedUpload.id}`,
              {
                  fontFamily: selectedAiStyle.fontFamily,
                  fontColor: selectedAiStyle.fontColor,
                  backgroundColor: selectedAiStyle.backgroundColor
              },
              { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
          );
          
          // Start polling for completion
          const pollInterval = setInterval(async () => {
              try {
                  const statusResponse = await axios.get(
                      `${API_BASE_URL}/api/subtitles/user-media`,
                      { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
                  );
                  
                  const updatedMedia = statusResponse.data.find(
                      (m: SubtitleMedia) => m.id === selectedUpload.id
                  );
                  
                  if (updatedMedia) {
                      setSelectedUpload(updatedMedia);
                      
                      if (updatedMedia.status === 'SUCCESS' && updatedMedia.subtitlesJson) {
                          // Generation complete
                          clearInterval(pollInterval);
                          setIsGenerating(false);
                          setSubtitles(JSON.parse(updatedMedia.subtitlesJson));

                          setUploads(prev => prev.map(u => 
                              u.id === updatedMedia.id ? updatedMedia : u
                          ));                          
                          
                          // Scroll to subtitles list
                          const subtitlesList = document.querySelector('.subtitles-list-container');
                          if (subtitlesList) {
                              subtitlesList.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                          }
                      } else if (updatedMedia.status === 'FAILED') {
                          // Generation failed
                          clearInterval(pollInterval);
                          setIsGenerating(false);
                          setError('Subtitle generation failed. Please try again.');
                      }
                      // If status is PROCESSING or QUEUED, keep polling
                  }
              } catch (pollError) {
                  console.error('Error polling subtitle status:', pollError);
                  clearInterval(pollInterval);
                  setIsGenerating(false);
                  setError('Error checking subtitle generation status.');
              }
          }, 2000); // Poll every 2 seconds
          
          // Set a timeout to stop polling after 5 minutes
          setTimeout(() => {
              clearInterval(pollInterval);
              if (isGenerating) {
                  setIsGenerating(false);
                  setError('Subtitle generation is taking longer than expected. Please refresh the page.');
              }
          }, 300000); // 5 minutes
          
      } catch (error: any) {
          setIsGenerating(false);
          setError(error.response?.data?.message || 'Failed to start subtitle generation.');
      }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    const ms = Math.floor((seconds % 1) * 10);
    return `${mins}:${secs.toString().padStart(2, '0')}.${ms}`;
  };

  const debouncedSave = useCallback(
    debounce(async (updatedSubtitle: SubtitleDTO) => {
      if (!requireLogin() || !selectedUpload) return;
  
      setIsSaving(true);
      setSaveSuccess(false);
  
      try {
        const response = await axios.put(
          `${API_BASE_URL}/api/subtitles/update/${selectedUpload.id}/${updatedSubtitle.id}`,
          updatedSubtitle, // Send full subtitle object
          { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
        );
  
        // Update subtitles state with response
        setSubtitles(JSON.parse(response.data.subtitlesJson || '[]'));
        // Update originalSubtitle to the latest saved state
        setOriginalSubtitle(updatedSubtitle);
        
        setSaveSuccess(true);
        setTimeout(() => setSaveSuccess(false), 2000);
      } catch (error: any) {
        setError(error.response?.data?.message || 'Failed to auto-save subtitle.');
      } finally {
        setIsSaving(false);
      }
    }, 500),
    [selectedUpload]
  );

  const handleUpdateAllSubtitles = useCallback(async (targetSubtitleId?: string) => {
      if (!requireLogin() || !selectedUpload || !selectedAiStyle) {
          return;
      }
      
      try {
          const styleParams = {
              fontFamily: selectedAiStyle.fontFamily,
              fontColor: selectedAiStyle.fontColor,
              backgroundColor: selectedAiStyle.backgroundColor
          };
          
          if (targetSubtitleId) {
              // Find the existing subtitle to merge with
              const existingSubtitle = subtitles.find(s => s.id === targetSubtitleId);
              if (!existingSubtitle) {
                  console.error('Subtitle not found:', targetSubtitleId);
                  return;
              }
              
              // Merge style params with existing subtitle data
              const mergedSubtitle = {
                  ...existingSubtitle,
                  ...styleParams
              };
              
              // Update single subtitle with merged data
              const response = await axios.put(
                  `${API_BASE_URL}/api/subtitles/update/${selectedUpload.id}/${targetSubtitleId}`,
                  mergedSubtitle,
                  { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
              );
              
              const updatedSubtitlesFromBackend = JSON.parse(response.data.subtitlesJson || '[]');
              setSubtitles(updatedSubtitlesFromBackend);
              
              if (editingSubtitle?.id === targetSubtitleId) {
                  const refreshedSubtitle = updatedSubtitlesFromBackend.find(
                      (s: SubtitleDTO) => s.id === targetSubtitleId
                  );
                  if (refreshedSubtitle) {
                      setEditingSubtitle(refreshedSubtitle);
                      setOriginalSubtitle(refreshedSubtitle);
                  }
              }
          } else {
              // Update all subtitles - merge with each existing subtitle
              const mergedSubtitles = subtitles.map(sub => ({
                  ...sub,
                  ...styleParams
              }));
              
              const response = await axios.put(
                  `${API_BASE_URL}/api/subtitles/update/${selectedUpload.id}`,
                  mergedSubtitles,
                  { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
              );
              
              const updatedSubtitlesFromBackend = JSON.parse(response.data.subtitlesJson || '[]');
              setSubtitles(updatedSubtitlesFromBackend);
              
              if (editingSubtitle) {
                  const refreshedSubtitle = updatedSubtitlesFromBackend.find(
                      (s: SubtitleDTO) => s.id === editingSubtitle.id
                  );
                  if (refreshedSubtitle) {
                      setEditingSubtitle(refreshedSubtitle);
                      setOriginalSubtitle(refreshedSubtitle);
                  }
              }
          }
      } catch (error: any) {
          console.error('Failed to update subtitles:', error);
          setError('Failed to apply style. Please try again.');
      }
  }, [selectedAiStyle, selectedUpload, editingSubtitle, subtitles, requireLogin]);

  const handleApplyPositionToAll = useCallback(async (field: string, value: any) => {
      if (!requireLogin() || !selectedUpload || !subtitles.length) {
          return;
      }
      
      try {
          // Create updated subtitles with the new position value
          const updatedSubtitles = subtitles.map(sub => ({
              ...sub,
              [field]: value
          }));
          
          const response = await axios.put(
              `${API_BASE_URL}/api/subtitles/update/${selectedUpload.id}`,
              updatedSubtitles,
              { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
          );
          
          const updatedSubtitlesFromBackend = JSON.parse(response.data.subtitlesJson || '[]');
          setSubtitles(updatedSubtitlesFromBackend);
          
          if (editingSubtitle) {
              const refreshedSubtitle = updatedSubtitlesFromBackend.find(
                  (s: SubtitleDTO) => s.id === editingSubtitle.id
              );
              if (refreshedSubtitle) {
                  setEditingSubtitle(refreshedSubtitle);
                  setOriginalSubtitle(refreshedSubtitle);
              }
          }
      } catch (error: any) {
          console.error('Failed to apply position to all subtitles:', error);
          setError('Failed to apply position. Please try again.');
      }
  }, [selectedUpload, editingSubtitle, subtitles, requireLogin]);  
  
  useEffect(() => {
      // Only trigger when style actually changes (not on mount)
      if (
          subtitles.length > 0 && 
          selectedAiStyle && 
          selectedUpload &&
          prevSelectedAiStyleRef.current !== null &&
          prevSelectedAiStyleRef.current?.name !== selectedAiStyle?.name
      ) {
          // Apply style to single subtitle if editing, otherwise all
          if (editingSubtitle) {
              handleUpdateAllSubtitles(editingSubtitle.id);
          } else {
              handleUpdateAllSubtitles();
          }
      }
      
      // Update ref for next comparison
      prevSelectedAiStyleRef.current = selectedAiStyle;
  }, [selectedAiStyle, handleUpdateAllSubtitles, editingSubtitle, subtitles, selectedUpload]);

  const handleStartProcessing = async () => {
    if (!requireLogin() || !selectedUpload) {
      setError('Please select a video to process.');
      return;
    }
    setIsProcessing(true);
    setError(null);
    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/subtitles/process/${selectedUpload.id}`,
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
              `${API_BASE_URL}/api/subtitles/user-media`,
              { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
            );
            const updatedMedia = statusResponse.data.find((m: SubtitleMedia) => m.id === selectedUpload.id);
            setSelectedUpload(updatedMedia);
            if (updatedMedia.status === 'SUCCESS' && updatedMedia.processedCdnUrl) {
              clearInterval(interval);
              setIsProcessing(false);
              const outputSection = document.querySelector('.video-output-section');
              if (outputSection) {
                outputSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }
            } else if (updatedMedia.status === 'FAILED') {
              clearInterval(interval);
              setIsProcessing(false);
              setError('Subtitle processing failed.');
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
      const errorMessage = error.response?.data?.message || 'Failed to process subtitles.';
      setError(errorMessage);
      
      // Scroll to error message
      setTimeout(() => {
        const errorElement = document.querySelector('.error-message');
        if (errorElement) {
          errorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
      
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
        const blob = await response.blob();
        const blobUrl = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = `subtitled-video-${Date.now()}.mp4`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(blobUrl);
      } catch (error) {
        console.error('Download failed:', error);
        window.open(selectedUpload.processedCdnUrl, '_blank');
      }
    }
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

  return (
    <div className="video-filter-page">
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
            <span itemProp="name">AI Subtitle Generator</span>
            <meta itemProp="position" content="3" />
          </li>
        </ol>
      </nav>   
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'WebApplication',
                '@id': 'https://scenith.in/tools/add-subtitles-to-videos#webapp',
                name: 'Scenith AI Subtitle Generator',
                description: 'Free AI-powered subtitle generation tool for creating accurate, customizable video captions in 50+ languages with professional styling options.',
                url: 'https://scenith.in/tools/add-subtitles-to-videos',
                applicationCategory: 'MultimediaApplication',
                operatingSystem: 'Web Browser',
                offers: {
                  '@type': 'Offer',
                  price: '0',
                  priceCurrency: 'USD',
                  availability: 'https://schema.org/InStock'
                },
                featureList: [
                  'AI-powered subtitle generation',
                  '95-98% transcription accuracy',
                  '50+ language support',
                  'Custom subtitle styling',
                  'Instant MP4 download',
                  'No watermarks'
                ],
                screenshot: 'https://scenith.in/images/AddSubtitlesSS.png',
                author: {
                  '@type': 'Organization',
                  '@id': 'https://scenith.in/#organization',
                  name: 'Scenith'
                }
              },
              {
                '@type': 'BreadcrumbList',
                '@id': 'https://scenith.in/tools/add-subtitles-to-videos#breadcrumb',
                itemListElement: [
                  {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Home',
                    item: 'https://scenith.in'
                  },
                  {
                    '@type': 'ListItem',
                    position: 2,
                    name: 'Tools',
                    item: 'https://scenith.in/tools'
                  },
                  {
                    '@type': 'ListItem',
                    position: 3,
                    name: 'AI Subtitle Generator',
                    item: 'https://scenith.in/tools/add-subtitles-to-videos'
                  }
                ]
              },
            ]
          }),
        }}
      />         
      <Script
        id="subtitle-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'How accurate are AI-generated subtitles?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Our Whisper AI-powered system achieves 95-98% accuracy for clear audio with standard accents. You can manually edit any generated subtitles for perfect accuracy.'
                }
              },
              {
                '@type': 'Question',
                name: 'What video formats are supported?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'We support all major video formats including MP4, AVI, MOV, MKV, WMV, and more. Maximum file size is 500MB per video.'
                }
              },
              {
                '@type': 'Question',
                name: 'Can I customize subtitle appearance?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes! Customize fonts, colors, sizes, positions, backgrounds, borders, and animation styles. Choose from pre-designed templates or create custom styles matching your brand.'
                }
              },
              {
                '@type': 'Question',
                name: 'How long does subtitle generation take?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Processing typically takes 1-2 minutes for videos under 10 minutes long. Longer videos may take 3-5 minutes depending on video length and audio complexity.'
                }
              }
            ]
          }),
        }}
      />
      
      <Script
        id="subtitle-howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: 'How to Add Subtitles to Videos with AI',
            description: 'Step-by-step guide to automatically generating and customizing subtitles using AI technology',
            step: [
              {
                '@type': 'HowToStep',
                name: 'Upload Your Video',
                text: 'Upload any video file (MP4, AVI, MOV, etc.). Our system securely stores it for subtitle processing.',
                position: 1
              },
              {
                '@type': 'HowToStep',
                name: 'Generate & Edit Subtitles',
                text: 'Use AI to generate subtitles automatically, then customize text, styles, colors, fonts, and timings for perfect captions that match your brand.',
                position: 2
              },
              {
                '@type': 'HowToStep',
                name: 'Process & Download',
                text: 'Apply subtitles to your video with one click. Download the high-quality MP4 with burned-in captions in minutes, ready for any platform.',
                position: 3
              }
            ]
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
          <h1>Free AI Subtitle Generator - Add Subtitles in Seconds</h1>
          <p className="hero-description">
            Automatically generate and customize subtitles for your videos with AI. Choose from professional styles, edit manually, and download MP4s instantly. Perfect for creators and filmmakers. Pair with our{' '}
            <a href="/tools/ai-voice-generation" className="inline-link">AI voice generator</a>{' '}
            to create complete videos, or use our{' '}
            <a href="/tools/image-editing" className="inline-link">free image editor</a>{' '}
            for thumbnail design.
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
                <div className="upload-section-container">
                  <label className="compact-upload-button">
                    <input
                      type="file"
                      accept="video/*"
                      onChange={handleVideoUpload}
                      disabled={!isLoggedIn || isUploading}
                      className="video-upload-input"
                      aria-label="Upload video for subtitles"
                    />
                    <span className="upload-icon">📤</span>
                    <span>Upload</span>
                  </label>
                  <select
                    value={selectedUpload?.id || ''}
                    onChange={(e) => handleVideoSelect(e.target.value)}
                    className="compact-video-select"
                    disabled={!isLoggedIn || uploads.length === 0 || isUploading}
                    aria-label="Select uploaded video"
                  >
                    <option value="">Select a Video</option>
                    {uploads.map((upload) => {
                      const truncatedName = upload.originalFileName.length > 30
                        ? upload.originalFileName.substring(0, 30) + '...'
                        : upload.originalFileName;
                      return (
                        <option key={upload.id} value={upload.id} title={upload.originalFileName}>
                          {truncatedName}
                        </option>
                      );
                    })}
                  </select>
                  {selectedUpload && (
                    <button
                      className="elegant-delete-button"
                      onClick={() => {
                        setDeleteModalOpen(true);
                        setItemToDelete({
                          id: selectedUpload.id,
                          name: selectedUpload.originalFileName,
                          type: 'subtitle'
                        });
                      }}
                      aria-label={`Delete ${selectedUpload.originalFileName}`}
                      title="Delete this video"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2M10 11v6M14 11v6"/>
                      </svg>
                    </button>
                  )}
                </div>
                <div className="video-filter-container">
                  {/* Video Preview */}
                  <div className="video-preview">
                    {selectedUpload && userProfile.id && (
                      <CustomVideoPlayer
                        src={selectedUpload.originalCdnUrl}
                        userId={userProfile.id}
                        subtitles={subtitles}
                        currentTime={currentTime}
                        setCurrentTime={setCurrentTime}                    
                      />
                    )}
                  </div>
                
                  {/* Subtitles List */}
                  <div className="subtitles-list-container">
                    <div className="filter-controls">
                        <h3>Subtitle Styles</h3>
                          <CustomStyleDropdown
                              styles={aiStyles}
                              selectedStyle={selectedAiStyle}
                              onSelectStyle={setSelectedAiStyle}
                              disabled={!isLoggedIn}
                              parseFont={parseFont}
                          />
                        {subtitles.length > 0 && (
                            <div className="subtitles-list">
                                <h4>Generated Subtitles ({subtitles.length})</h4>
                                <div className="subtitles-scroll-container">
                                    {subtitles.map((subtitle) => (
                                        <div
                                            key={subtitle.id}
                                            className={`subtitle-item ${editingSubtitle?.id === subtitle.id ? 'editing' : ''}`}
                                            onClick={() => {
                                                setEditingSubtitle(subtitle);
                                                setOriginalSubtitle(JSON.parse(JSON.stringify(subtitle)));
                                                setCurrentTime(subtitle.timelineEndTime);
                                            }}
                                        >
                                            <div className="subtitle-time">
                                                {formatTime(subtitle.timelineStartTime)} - {formatTime(subtitle.timelineEndTime)}
                                            </div>
                                            <div className="subtitle-text">{subtitle.text}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                  </div>
                  {/* Subtitle Editor Panel */}
                  {(editingSubtitle || subtitles.length > 0) && (
                    <div className="subtitle-editor-container">
                      <SubtitleEditorPanel
                        subtitle={editingSubtitle || {
                          id: 'global',
                          text: '',
                          timelineStartTime: 0,
                          timelineEndTime: 0,
                          fontFamily: subtitles[0]?.fontFamily || 'Arial',
                          fontColor: subtitles[0]?.fontColor || 'white',
                          backgroundColor: subtitles[0]?.backgroundColor || 'transparent',
                          scale: subtitles[0]?.scale || 1.0,
                          backgroundOpacity: subtitles[0]?.backgroundOpacity || 1.0,
                          positionX: subtitles[0]?.positionX || 0,
                          positionY: subtitles[0]?.positionY || 0,
                          alignment: subtitles[0]?.alignment || 'center',
                          backgroundH: subtitles[0]?.backgroundH || 50,
                          backgroundW: subtitles[0]?.backgroundW || 50,
                          backgroundBorderRadius: subtitles[0]?.backgroundBorderRadius || 15,
                          backgroundBorderWidth: subtitles[0]?.backgroundBorderWidth || 0,
                          backgroundBorderColor: subtitles[0]?.backgroundBorderColor || 'transparent',
                          textBorderColor: subtitles[0]?.textBorderColor || 'transparent',
                          textBorderWidth: subtitles[0]?.textBorderWidth || 0,
                          textBorderOpacity: subtitles[0]?.textBorderOpacity || 1.0,
                          letterSpacing: subtitles[0]?.letterSpacing || 0,
                          lineSpacing: subtitles[0]?.lineSpacing || 1.2,
                          opacity: subtitles[0]?.opacity || 1.0,
                          rotation: subtitles[0]?.rotation || 0,
                          isSubtitle: true,
                          keyframes: {}
                        } as SubtitleDTO}
                        onUpdate={(updatedSubtitle) => {
                          if (editingSubtitle) {
                            // Update single subtitle
                            setEditingSubtitle(updatedSubtitle);
                            setSubtitles(subtitles.map(sub => 
                              sub.id === updatedSubtitle.id ? updatedSubtitle : sub
                            ));
                            debouncedSave(updatedSubtitle);
                          } else {
                            // Apply to all subtitles
                            const updatedSubtitles = subtitles.map(sub => ({
                              ...sub,
                              fontFamily: updatedSubtitle.fontFamily,
                              fontColor: updatedSubtitle.fontColor,
                              backgroundColor: updatedSubtitle.backgroundColor,
                              scale: updatedSubtitle.scale,
                              backgroundOpacity: updatedSubtitle.backgroundOpacity,
                              positionX: updatedSubtitle.positionX,
                              positionY: updatedSubtitle.positionY,
                              alignment: updatedSubtitle.alignment,
                              backgroundH: updatedSubtitle.backgroundH,
                              backgroundW: updatedSubtitle.backgroundW,
                              backgroundBorderRadius: updatedSubtitle.backgroundBorderRadius,
                              backgroundBorderWidth: updatedSubtitle.backgroundBorderWidth,
                              backgroundBorderColor: updatedSubtitle.backgroundBorderColor,
                              textBorderColor: updatedSubtitle.textBorderColor,
                              textBorderWidth: updatedSubtitle.textBorderWidth,
                              textBorderOpacity: updatedSubtitle.textBorderOpacity,
                              letterSpacing: updatedSubtitle.letterSpacing,
                              lineSpacing: updatedSubtitle.lineSpacing,
                              opacity: updatedSubtitle.opacity,
                              rotation: updatedSubtitle.rotation
                            }));
                            setSubtitles(updatedSubtitles);

                            // Save all subtitles to backend
                            axios.put(
                              `${API_BASE_URL}/api/subtitles/update/${selectedUpload!.id}`,
                              updatedSubtitles,
                              { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
                            ).catch(error => {
                              console.error('Failed to update all subtitles:', error);
                              setError('Failed to apply changes to all subtitles.');
                            });
                          }
                        }}
                        onClose={() => {
                          if (editingSubtitle) {
                            if (originalSubtitle) {
                              setSubtitles(subtitles.map(sub => 
                                sub.id === originalSubtitle.id ? originalSubtitle : sub
                              ));
                            }
                            setEditingSubtitle(null);
                            setOriginalSubtitle(null);
                          }
                          // Don't close panel when in global mode, just do nothing
                        }}
                        availableFonts={aiStyles.map(s => s.fontFamily)}
                        onApplyToAll={handleApplyPositionToAll}
                        isGlobalEdit={!editingSubtitle}
                      />
                      <div className="editor-save-status">
                        {isSaving && <span className="saving-indicator">💾 Saving...</span>}
                        {saveSuccess && <span className="saved-indicator">✓ Saved</span>}
                      </div>
                    </div>
                  )}
                </div>
                {selectedUpload && subtitles.length > 0 && (
                  <div className="quality-selector-container">
                    <label htmlFor="quality-select" className="quality-label">
                      Output Quality:
                      {(userProfile.role === 'BASIC' || userProfile.role === 'CREATOR') && (
                        <span className="unlock-badge" onClick={() => window.location.href = '/pricing'}>
                          🔓 Unlock {userProfile.role === 'BASIC' ? '4K' : '4K'}
                        </span>
                      )}
                    </label>
                    <select
                      id="quality-select"
                      value={selectedQuality}
                      onChange={(e) => setSelectedQuality(e.target.value)}
                      className="quality-select"
                      disabled={isProcessing || isGenerating}
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
                {planLimits && planLimits.videosPerMonth > 0 && (
                  (planLimits.videosUsed / planLimits.videosPerMonth >= 0.6) && (
                    <div className="upgrade-nudge-banner">
                      <div className="nudge-icon">🎬</div>
                      <div className="nudge-content">
                        <h4>You're creating amazing content!</h4>
                        <p>You've used {Math.round((planLimits.videosUsed / planLimits.videosPerMonth) * 100)}% of your subtitled videos. Unlock <strong>9× more videos</strong> with Creator or get focused power with AI Subtitle Pro.</p>
                        <div className="nudge-actions">
                          <a href="/pricing" className="nudge-btn primary">Upgrade Bundle</a>
                          <a href="/pricing?tab=individual" className="nudge-btn secondary">AI Subtitle Pro</a>
                        </div>
                      </div>
                    </div>
                  )
                )}                                       
                <div className="action-buttons">
                  {selectedUpload && (
                    <div className="button-wrapper">
                      <button
                        className="generate-subtitles-button cta-button"
                        onClick={handleGenerateSubtitles}
                        disabled={isGenerating || !selectedUpload || !selectedAiStyle || isProcessing}
                        aria-label={subtitles.length > 0 ? "Generate subtitles again" : "Generate subtitles"}
                      >
                        {isGenerating ? 'Generating...' : subtitles.length > 0 ? 'Generate Again' : 'Generate Subtitles'}
                      </button>
                      {isProcessing && (
                        <div className="button-tooltip">Please wait, your video is getting processed!</div>
                      )}
                    </div>
                  )}
                  <div className="button-wrapper">
                    <button
                      className="cta-button process-video-button"
                      onClick={handleStartProcessing}
                      disabled={isLoggedIn && (!selectedUpload || isProcessing || !subtitles.length || isGenerating)}
                      aria-label="Start subtitle processing"
                    >
                      {isProcessing ? 'Processing...' : isLoggedIn ? 'Process Subtitles' : 'Login to Process'}
                    </button>
                    {isGenerating && (
                      <div className="button-tooltip">Please wait, the subtitles are getting generated!</div>
                    )}
                  </div>
                </div>
                {selectedUpload?.processedCdnUrl && (
                  <div className="download-section" role="region" aria-labelledby="download-title">
                    <h3 id="download-title">Download Your Subtitled Video</h3>
                    <button
                      onClick={handleDownload}
                      className="cta-button download-button"
                      aria-label="Download subtitled video as MP4"
                    >
                      Download MP4
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div className="demo-video-section">
              <h3 className="demo-video-title">See It In Action: AI Subtitle Generation Demo</h3>
              <div className="youtube-video-wrapper">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/DyCA5u0iWeo?rel=0&modestbranding=1&showinfo=0"
                  title="AI Subtitle Generator Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="demo-video-caption">
                Watch how easy it is to generate, customize, and download professional subtitles in seconds!
              </p>
            </div>            
            <div className="trust-indicators">
              <span className="trust-item">✅ 100% Free</span>
              <span className="trust-item">🎥 AI Subtitles</span>
              <span className="trust-item">🌟 Custom Styles</span>
              <span className="trust-item">📥 Instant MP4 Download</span>
            </div>         
          </div>
          <figure className="hero-image-container">
            <Image
              src="/images/AddSubtitlesSS.png"
              alt="AI subtitle generator example showing subtitle editing and video preview"
              className="hero-image"
              width={800}
              height={400}
              priority
            />
            <figcaption className="sr-only">Example of AI subtitle generator with style selection and subtitle editing</figcaption>
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

      <section className="quick-definition-section" role="region" aria-labelledby="quick-definition">
        <div className="container">
          <div className="featured-snippet-target">
            <h2 id="quick-definition" className="visually-hidden">AI Subtitle Generator Definition</h2>
            <div className="definition-box">
              <p className="definition-text">
                An <strong>AI subtitle generator</strong> is an automated tool that uses artificial intelligence and speech recognition to create accurate, time-synced captions for videos. It transcribes audio into text, synchronizes subtitles with video timing, and allows customization of fonts, colors, and positioning - all without manual typing or expensive transcription services.
              </p>
            </div>
          </div>
        </div>
      </section>      

      <section className="how-section" id="how-it-works" role="region" aria-labelledby="how-it-works-title">
        <motion.div
          className="container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 id="how-it-works-title">How to Add Subtitles in 3 Simple Steps</h2>
          <p className="section-description">
            Automatically generate and customize subtitles with AI. No advanced editing skills required - just upload, edit, and download.
          </p>
          <div className="steps-grid" role="list">
            <motion.article className="step-card" whileHover={{ scale: 1.05 }} role="listitem">
              <div className="step-number" aria-label="Step 1">1</div>
              <h3>Upload Your Video</h3>
              <p>Upload any video file (MP4, AVI, etc.). Our system securely stores it for subtitle processing.</p>
            </motion.article>
            <motion.article className="step-card" whileHover={{ scale: 1.05 }} role="listitem">
              <div className="step-number" aria-label="Step 2">2</div>
              <h3>Generate & Edit Subtitles</h3>
              <p>Use AI to generate subtitles, then customize text, styles, and timings for perfect captions.</p>
            </motion.article>
            <motion.article className="step-card" whileHover={{ scale: 1.05 }} role="listitem">
              <div className="step-number" aria-label="Step 3">3</div>
              <h3>Process & Download</h3>
              <p>Apply subtitles to your video and download the high-quality MP4 in minutes.</p>
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
          <h2 id="features-title">Why Choose Our Subtitle Generator?</h2>
          <p className="section-description">
            Create accessible and engaging videos with AI-powered subtitles. No expensive software needed.
          </p>
          <div className="features-grid" role="list">
            <motion.article className="feature-card" whileHover={{ scale: 1.05 }} role="listitem">
              <span className="feature-icon" aria-hidden="true">⚡</span>
              <h3>Fast AI Processing</h3>
              <p>Generate subtitles in seconds using advanced AI and Whisper technology.</p>
            </motion.article>
            <motion.article className="feature-card" whileHover={{ scale: 1.05 }} role="listitem">
              <span className="feature-icon" aria-hidden="true">🎨</span>
              <h3>Customizable Styles</h3>
              <p>Choose from professional styles or fine-tune fonts, colors, and positions.</p>
            </motion.article>
            <motion.article className="feature-card" whileHover={{ scale: 1.05 }} role="listitem">
              <span className="feature-icon" aria-hidden="true">🆓</span>
              <h3>Free Access</h3>
              <p>Unlimited free usage with full commercial rights. No watermarks.</p>
            </motion.article>
            <motion.article className="feature-card" whileHover={{ scale: 1.05 }} role="listitem">
              <span className="feature-icon" aria-hidden="true">🔧</span>
              <h3>Manual Editing</h3>
              <p>Correct AI-generated subtitles or adjust timings for perfect accuracy.</p>
            </motion.article>
            <motion.article className="feature-card" whileHover={{ scale: 1.05 }} role="listitem">
              <span className="feature-icon" aria-hidden="true">📱</span>
              <h3>Mobile Optimized</h3>
              <p>Edit subtitles on any device with our responsive interface.</p>
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
            Discover how creators and professionals use our subtitle tool to enhance their videos.
          </p>
          <div className="use-cases-grid" role="list">
            <motion.article className="use-case-card" whileHover={{ scale: 1.03 }} role="listitem">
              <h3>🎥 Social Media Content</h3>
              <p>Add captions to make Instagram, TikTok, and YouTube videos accessible and engaging.</p>
            </motion.article>
            <motion.article className="use-case-card" whileHover={{ scale: 1.03 }} role="listitem">
              <h3>🎬 Film Production</h3>
              <p>Create professional subtitles for films or documentaries with custom styles.</p>
            </motion.article>
            <motion.article className="use-case-card" whileHover={{ scale: 1.03 }} role="listitem">
              <h3>💼 Educational Videos</h3>
              <p>Enhance tutorials and courses with clear, customizable subtitles.</p>
            </motion.article>
            <motion.article className="use-case-card" whileHover={{ scale: 1.03 }} role="listitem">
              <h3>🎨 Creative Projects</h3>
              <p>Style subtitles for music videos, vlogs, or art projects with unique looks.</p>
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
            Join thousands of satisfied users who rely on our AI subtitle tool for their video projects.
          </p>
          <div className="testimonials-grid" role="list">
            <motion.blockquote className="testimonial-card" whileHover={{ scale: 1.05 }} role="listitem">
              <p>"This tool made my videos accessible! The AI subtitles are accurate, and editing is a breeze."</p>
              <cite>– Sarah Kim, Content Creator</cite>
              <div className="rating" aria-label="5 out of 5 stars">⭐⭐⭐⭐⭐</div>
            </motion.blockquote>
            <motion.blockquote className="testimonial-card" whileHover={{ scale: 1.05 }} role="listitem">
              <p>"Perfect for my indie films. The customization options make my subtitles look professional."</p>
              <cite>– Michael Chen, Filmmaker</cite>
              <div className="rating" aria-label="5 out of 5 stars">⭐⭐⭐⭐⭐</div>
            </motion.blockquote>
            <motion.blockquote className="testimonial-card" whileHover={{ scale: 1.05 }} role="listitem">
              <p>"Adding subtitles to our training videos was so easy. The AI saved us hours of work!"</p>
              <cite>– Emma Watson, Educator</cite>
              <div className="rating" aria-label="5 out of 5 stars">⭐⭐⭐⭐⭐</div>
            </motion.blockquote>
          </div>
        </motion.div>
      </section>

      <section className="competitors-comparison" role="region" aria-labelledby="vs-competitors">
        <div className="container">
          <h2 id="vs-competitors">AI Subtitle Generator Comparison: Scenith vs Competitors</h2>
          <div className="comparison-grid">
            <div className="vs-card">
              <h3>Scenith vs Rev.com</h3>
              <ul>
                <li>✅ <strong>Scenith:</strong> Free AI subtitles with unlimited editing</li>
                <li>❌ <strong>Rev.com:</strong> $1.25/minute manual transcription</li>
                <li>✅ <strong>Scenith:</strong> Instant 1-2 minute processing</li>
                <li>❌ <strong>Rev.com:</strong> 12-24 hour turnaround time</li>
              </ul>
            </div>

            <div className="vs-card">
              <h3>Scenith vs Kapwing</h3>
              <ul>
                <li>✅ <strong>Scenith:</strong> No watermarks on free plan</li>
                <li>❌ <strong>Kapwing:</strong> Watermark on all free videos</li>
                <li>✅ <strong>Scenith:</strong> 25+ custom subtitle styles</li>
                <li>⚠️ <strong>Kapwing:</strong> Limited styling on free tier</li>
              </ul>
            </div>

            <div className="vs-card">
              <h3>Scenith vs Descript</h3>
              <ul>
                <li>✅ <strong>Scenith:</strong> Browser-based, no download needed</li>
                <li>❌ <strong>Descript:</strong> Requires desktop app installation</li>
                <li>✅ <strong>Scenith:</strong> Free up to 5 videos/month</li>
                <li>❌ <strong>Descript:</strong> $12/month minimum subscription</li>
              </ul>
            </div>
          </div>
        </div>
      </section>      

      <section className="faq-section" id="faq" role="region" aria-labelledby="faq-title">
        <motion.div
          className="container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 id="faq-title">Frequently Asked Questions About AI Subtitle Generation</h2>
          <div className="faq-grid" role="list">
            <article className="faq-item" role="listitem">
              <h3>How accurate are AI-generated subtitles?</h3>
              <p>Our Whisper AI-powered system achieves 95-98% accuracy for clear audio with standard accents. Accuracy may be lower for heavy accents, technical jargon, or poor audio quality. You can always manually edit any generated subtitles for perfect accuracy.</p>
            </article>
            <article className="faq-item" role="listitem">
              <h3>What video formats are supported?</h3>
              <p>We support all major video formats including MP4, AVI, MOV, MKV, WMV, and more. Maximum file size is 500MB per video. For larger files, consider compressing your video before upload.</p>
            </article>
            <article className="faq-item" role="listitem">
              <h3>Can I customize subtitle appearance?</h3>
              <p>Yes! Customize fonts, colors, sizes, positions, backgrounds, borders, and animation styles. Choose from pre-designed templates or create custom styles matching your brand. All styling is preserved in the final MP4 export.</p>
            </article>
            <article className="faq-item" role="listitem">
              <h3>How long does subtitle generation take?</h3>
              <p>Processing typically takes 1-2 minutes for videos under 10 minutes long. Longer videos may take 3-5 minutes. Generation time depends on video length, audio complexity, and current server load.</p>
            </article>
            <article className="faq-item" role="listitem">
              <h3>Can I edit generated subtitles?</h3>
              <p>Absolutely! Our editor lets you modify text, adjust timing, change positions, and update styling for any subtitle. Changes save automatically and sync in real-time with your video preview.</p>
            </article>
            <article className="faq-item" role="listitem">
              <h3>What languages are supported?</h3>
              <p>We support 50+ languages including English, Spanish, French, German, Mandarin, Hindi, Japanese, Portuguese, Arabic, and more. The Whisper AI model automatically detects the spoken language in your video.</p>
            </article>
            <article className="faq-item" role="listitem">
              <h3>Are the subtitles burned into the video?</h3>
              <p>Yes, the processed MP4 includes permanently embedded (burned-in) subtitles that cannot be removed. This ensures subtitles display correctly on all platforms without requiring separate caption file support.</p>
            </article>
            <article className="faq-item" role="listitem">
              <h3>Can I export subtitle files (SRT format)?</h3>
              <p>Currently, we embed subtitles directly into videos as burned-in captions. SRT/VTT export functionality is planned for a future update. Embedded subtitles work universally across all video platforms.</p>
            </article>
            <article className="faq-item" role="listitem">
              <h3>Is there a video length limit?</h3>
              <p>Free accounts can process videos up to 10 minutes. Premium accounts support videos up to 2 hours. For longer content, consider splitting into chapters or segments for easier management.</p>
            </article>
            <article className="faq-item" role="listitem">
              <h3>Do you store my videos?</h3>
              <p>Videos are temporarily stored during processing (24-48 hours) then automatically deleted. You retain full ownership and rights to all content. We never share or use your videos for any purpose.</p>
            </article>
            <article className="faq-item" role="listitem">
              <h3>Can I use subtitled videos commercially?</h3>
              <p>Yes! All generated subtitles and processed videos are licensed for commercial use. Use them in ads, YouTube monetization, client projects, or any business purpose without attribution requirements.</p>
            </article>
            <article className="faq-item" role="listitem">
              <h3>What if the AI makes mistakes?</h3>
              <p>Simply click any subtitle to edit text, timing, or styling. Our real-time editor makes corrections easy. Most users spend 5-10 minutes reviewing AI-generated subtitles versus hours of manual transcription.</p>
            </article>
          </div>
        </motion.div>
      </section>

      <section className="people-also-ask" role="region" aria-labelledby="paa-title">
        <div className="container">
          <h2 id="paa-title">People Also Ask About AI Subtitle Generators</h2>
          <div className="paa-grid">
            <div className="paa-item">
              <h3>Can AI subtitle generators handle multiple speakers?</h3>
              <p>Yes! Advanced AI models like Whisper can identify speaker changes and create separate subtitle segments. However, you may need to manually label speakers (Speaker 1, Speaker 2) if the AI doesn't distinguish them automatically. Our editor makes this easy with color-coded speaker identification.</p>
            </div>

            <div className="paa-item">
              <h3>Which AI subtitle generator is best for YouTube?</h3>
              <p>For YouTube, choose generators that export SRT files or burn subtitles directly into MP4. Scenith offers both options - downloadable SRT for YouTube's built-in captions, or burned-in subtitles for guaranteed display. Burned-in subtitles work better for shorts and reels where viewers can't toggle captions.</p>
            </div>

            <div className="paa-item">
              <h3>Do I need to edit AI-generated subtitles?</h3>
              <p>AI achieves 95-98% accuracy for clear audio, but reviewing is recommended. Expect to spend 5-10 minutes correcting: technical terms, proper nouns, homophones (there/their), and timing adjustments. This is still 90% faster than manual transcription which takes 4-6 hours per hour of video.</p>
            </div>

            <div className="paa-item">
              <h3>Can AI subtitle generators work with accents?</h3>
              <p>Modern AI models handle most accents well, especially common ones (British, Australian, Indian English). Accuracy drops with heavy regional accents or non-native speakers. Test with a short sample first. If accuracy is below 85%, consider manual transcription for that specific video or use hybrid approach (AI draft + human review).</p>
            </div>
          </div>
        </div>
      </section>      

      <section className="educational-intro" role="complementary" aria-labelledby="intro-title">
        <div className="container">
          <h2 id="intro-title" className="section-subtitle">Transform Your Videos with AI-Powered Subtitles</h2>
          <div className="intro-content-grid">
            <div className="intro-text">
              <p className="intro-paragraph">
                <strong>AI subtitle generation</strong> has revolutionized video accessibility by automatically creating accurate captions in seconds. Whether you're a content creator, educator, filmmaker, or business professional, our advanced <strong>speech-to-text technology</strong> helps you make videos accessible without manual transcription or expensive captioning services.
              </p>
              <p className="intro-paragraph">
                Our neural network-powered system uses <strong>Whisper AI</strong> for industry-leading accuracy across multiple languages. Each subtitle is automatically timed, positioned, and styled—perfect for social media, YouTube, educational content, and professional productions. Customize fonts, colors, and animations to match your brand.
              </p>
              <p className="intro-paragraph">
                <strong>Why choose AI subtitle generation?</strong> Save hours of manual transcription time while improving video engagement by 80%. Studies show 85% of social media videos are watched without sound—subtitles ensure your message reaches everyone. With instant editing and MP4 export, you have everything needed for professional accessible content.
              </p>
            </div>
            <div className="intro-stats">
              <div className="stat-box">
                <div className="stat-number">95%</div>
                <div className="stat-label">Transcription Accuracy</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">50+</div>
                <div className="stat-label">Supported Languages</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">50K+</div>
                <div className="stat-label">Active Users</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">60 sec</div>
                <div className="stat-label">Average Processing Time</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: What is AI Subtitle Generation Section */}
      <section className="what-is-section" id="what-is-subtitle-gen" role="region" aria-labelledby="what-is-title">
        <div className="container">
          <h2 id="what-is-title">What is AI Subtitle Generation? Understanding Automatic Captioning Technology</h2>
          <p className="section-description">
            AI subtitle generation leverages advanced speech recognition to automatically transcribe audio and create perfectly timed captions for your videos.
          </p>

          <div className="content-deep-dive">
            <div className="dive-section">
              <h3>How Automatic Subtitle Generation Works</h3>
              <p>
                Modern <strong>AI subtitle generators</strong> use deep learning models trained on millions of hours of audio data. The process involves multiple sophisticated steps:
              </p>
              <ol className="process-list">
                <li><strong>Audio Extraction:</strong> The system extracts audio from your video file, analyzing waveforms and identifying speech segments while filtering background noise.</li>
                <li><strong>Speech Recognition:</strong> Advanced models like Whisper AI convert speech to text using acoustic and language models, understanding context, accents, and technical terminology.</li>
                <li><strong>Timing Synchronization:</strong> Each word is precisely time-stamped to match the video, creating subtitle segments that appear exactly when words are spoken.</li>
                <li><strong>Text Processing:</strong> The AI applies punctuation, capitalization, and formatting rules, breaking long sentences into readable subtitle chunks based on timing and character limits.</li>
                <li><strong>Style Application:</strong> Subtitles are rendered with customizable fonts, colors, positions, and effects, ready to be burned into the video or exported as separate caption files.</li>
              </ol>
            </div>

            <div className="dive-section">
              <h3>Key Technologies Behind AI Subtitles</h3>
              <div className="tech-cards">
                <div className="tech-card">
                  <h4>🎙️ Whisper AI</h4>
                  <p>OpenAI's state-of-the-art speech recognition model trained on 680,000 hours of multilingual data, providing near-human accuracy for transcription across 50+ languages.</p>
                </div>
                <div className="tech-card">
                  <h4>🧠 Neural Networks</h4>
                  <p>Deep learning architectures process audio patterns, learning from vast datasets to recognize speech despite accents, background noise, and audio quality variations.</p>
                </div>
                <div className="tech-card">
                  <h4>⏱️ Time Alignment</h4>
                  <p>Forced alignment algorithms precisely match transcribed text to audio timestamps, ensuring subtitles appear and disappear at exactly the right moments.</p>
                </div>
                <div className="tech-card">
                  <h4>🌐 Language Models</h4>
                  <p>Natural language processing understands context, grammar, and vocabulary, correcting common transcription errors and applying proper punctuation automatically.</p>
                </div>
              </div>
            </div>

            <div className="dive-section">
              <h3>Evolution of Subtitle Technology</h3>
              <p>
                Subtitle creation has evolved dramatically from manual transcription to today's AI-powered automation:
              </p>
              <ul className="evolution-timeline">
                <li><strong>Pre-2000s:</strong> Manual transcription by professional typists took 4-6 hours per hour of video, costing $100-300 per video hour.</li>
                <li><strong>2000s-2010s:</strong> Basic speech recognition emerged but required extensive manual correction, reducing time to 2-3 hours per video hour.</li>
                <li><strong>2016-2020:</strong> Machine learning improved accuracy to 75-85%, making automatic subtitles practical for draft transcripts requiring human review.</li>
                <li><strong>2020-Present:</strong> Transformer models like Whisper achieve 95%+ accuracy, enabling production-ready subtitles with minimal editing in minutes instead of hours.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Benefits & Applications Section */}
      <section className="benefits-applications-section" role="region" aria-labelledby="benefits-title">
        <div className="container">
          <h2 id="benefits-title">Why Add Subtitles to Your Videos? Benefits for Creators and Viewers</h2>

          <div className="benefits-grid">
            <article className="benefit-detailed">
              <h3>♿ Accessibility & Inclusion</h3>
              <p>
                Subtitles make content accessible to 466 million people worldwide with hearing disabilities. <strong>Legal requirements like ADA and WCAG 2.1</strong> mandate captions for public content, protecting you from compliance issues while expanding your audience reach. Subtitles also help non-native speakers, people in sound-sensitive environments, and viewers with audio processing disorders.
              </p>
              <div className="benefit-stats">
                <span>466M people with hearing loss</span>
                <span>ADA & WCAG compliant</span>
                <span>30% larger potential audience</span>
              </div>
            </article>

            <article className="benefit-detailed">
              <h3>📈 Boost Engagement & Watch Time</h3>
              <p>
                Videos with subtitles get <strong>80% higher engagement rates</strong> on social media. Facebook reports 85% of videos are watched without sound—subtitles ensure your message lands. YouTube videos with captions receive 40% more views and rank higher in search results, as subtitles provide text for algorithms to index.
              </p>
              <div className="benefit-stats">
                <span>80% higher engagement</span>
                <span>85% watch without sound</span>
                <span>40% more YouTube views</span>
              </div>
            </article>

            <article className="benefit-detailed">
              <h3>🌍 Global Reach & SEO</h3>
              <p>
                Subtitles dramatically improve video SEO. Search engines crawl caption text, helping your videos rank for more keywords. <strong>Translate subtitles into multiple languages</strong> to reach international audiences without expensive dubbing. Google reports that captioned videos see 7.32% better search rankings on average.
              </p>
              <div className="benefit-stats">
                <span>7.32% better SEO ranking</span>
                <span>Multilingual reach</span>
                <span>Searchable video content</span>
              </div>
            </article>

            <article className="benefit-detailed">
              <h3>⏱️ Save Time & Money</h3>
              <p>
                Professional captioning services charge $1-3 per video minute, plus 3-5 day turnaround times. <strong>AI subtitle generation costs nothing</strong> and delivers results in minutes. What once took hours of manual transcription now happens automatically, freeing you to focus on content creation instead of tedious typing.
              </p>
              <div className="benefit-stats">
                <span>$0 vs $1-3 per minute</span>
                <span>Minutes vs days turnaround</span>
                <span>95% time savings</span>
              </div>
            </article>

            <article className="benefit-detailed">
              <h3>📱 Mobile-Friendly Content</h3>
              <p>
                Over 70% of video views happen on mobile devices, often in public places or quiet environments where users can't play audio. <strong>Subtitles enable silent viewing</strong>, dramatically increasing mobile video completion rates. Instagram and TikTok videos with captions receive 35% more engagement than those without.
              </p>
              <div className="benefit-stats">
                <span>70% mobile video views</span>
                <span>35% more social engagement</span>
                <span>Silent viewing enabled</span>
              </div>
            </article>

            <article className="benefit-detailed">
              <h3>🎓 Enhanced Learning & Retention</h3>
              <p>
                Educational research shows viewers retain <strong>40% more information</strong> when both watching and reading content. Subtitles help with comprehension, especially for complex topics, technical terms, or accented speech. Students and professionals benefit from reinforced visual and auditory learning.
              </p>
              <div className="benefit-stats">
                <span>40% better information retention</span>
                <span>Improved comprehension</span>
                <span>Multi-sensory learning</span>
              </div>
            </article>
          </div>

          <div className="applications-showcase">
            <h3>Real-World Applications Across Industries</h3>
            <div className="application-cards-grid">
              <div className="app-card">
                <span className="app-icon">📱</span>
                <h4>Social Media Content</h4>
                <p>Maximize engagement on Instagram, TikTok, Facebook, and LinkedIn where 85% of videos are watched without sound. Captions ensure your message reaches viewers in any environment.</p>
                <strong>Use cases:</strong> Reels, Stories, ads, educational posts, brand content
              </div>

              <div className="app-card">
                <span className="app-icon">🎬</span>
                <h4>YouTube Videos</h4>
                <p>Improve SEO rankings, increase watch time, and reach international audiences. Closed captions make content accessible while providing searchable text for YouTube's algorithm.</p>
                <strong>Use cases:</strong> Tutorials, vlogs, product reviews, documentaries, courses
              </div>

              <div className="app-card">
                <span className="app-icon">📚</span>
                <h4>E-Learning & Training</h4>
                <p>Meet accessibility requirements while enhancing student comprehension. Subtitles help non-native speakers and improve information retention across all learning styles.</p>
                <strong>Use cases:</strong> Online courses, corporate training, webinars, tutorials
              </div>

              <div className="app-card">
                <span className="app-icon">💼</span>
                <h4>Business & Marketing</h4>
                <p>Create accessible marketing videos, product demos, and internal communications. Captions ensure messages land whether viewed in offices, airports, or during commutes.</p>
                <strong>Use cases:</strong> Product demos, ads, announcements, presentations
              </div>

              <div className="app-card">
                <span className="app-icon">🎥</span>
                <h4>Film & Entertainment</h4>
                <p>Professional subtitle styling for independent films, web series, and entertainment content. Customizable fonts and positioning maintain creative vision while ensuring accessibility.</p>
                <strong>Use cases:</strong> Short films, web series, documentaries, music videos
              </div>

              <div className="app-card">
                <span className="app-icon">📰</span>
                <h4>News & Media</h4>
                <p>Rapidly caption breaking news, interviews, and reports. Fast turnaround times enable real-time captioning for time-sensitive content reaching diverse audiences.</p>
                <strong>Use cases:</strong> News reports, interviews, live event coverage, podcasts
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Subtitle Customization Guide Section */}
      <section className="subtitle-guide-section" role="region" aria-labelledby="guide-title">
        <div className="container">
          <h2 id="guide-title">Complete Guide to Subtitle Customization and Best Practices</h2>
          <p className="section-description">
            Master subtitle design with professional techniques for maximum readability and viewer engagement across all platforms.
          </p>

          <div className="guide-content">
            <article className="guide-section">
              <h3>Typography & Readability Best Practices</h3>
              <div className="characteristics-grid">
                <div className="char-card">
                  <h4>🔤 Font Selection</h4>
                  <p><strong>Sans-serif fonts</strong> like Arial, Helvetica, and Roboto offer superior readability on screens. Avoid decorative fonts that become illegible at small sizes. <strong>Font weight matters</strong>—bold or semi-bold text stands out against busy backgrounds.</p>
                  <ul>
                    <li>Sans-serif: Clear, modern, highly readable</li>
                    <li>Bold/Semi-bold: Improved contrast and visibility</li>
                    <li>Minimum 20px size for mobile readability</li>
                  </ul>
                </div>

                <div className="char-card">
                  <h4>🎨 Color Contrast</h4>
                  <p>WCAG 2.1 requires <strong>4.5:1 contrast ratio</strong> for text readability. White text with black outline/shadow provides universal readability against any background. Yellow subtitles work well for bright scenes; white excels in dark environments.</p>
                  <ul>
                    <li>White text + black stroke: Universal standard</li>
                    <li>Yellow text: High visibility for movies</li>
                    <li>Avoid red/green combinations (colorblind users)</li>
                  </ul>
                </div>

                <div className="char-card">
                  <h4>📏 Positioning & Spacing</h4>
                  <p><strong>Bottom center placement</strong> is standard—keeps subtitles clear of on-screen action. Leave 10-15% margin from screen edges for safe zones. Line height of 1.2-1.4x font size prevents cramped text.</p>
                  <ul>
                    <li>Bottom center: Standard positioning</li>
                    <li>10-15% safe margin from edges</li>
                    <li>Two lines maximum per subtitle</li>
                  </ul>
                </div>

                <div className="char-card">
                  <h4>⏱️ Timing & Duration</h4>
                  <p>Subtitles should appear <strong>0.1-0.3 seconds before spoken words</strong> for natural reading flow. Minimum 1 second on-screen (21 characters/second reading speed). Maximum 2 lines or 42 characters per subtitle for comfortable reading.</p>
                  <ul>
                    <li>1-7 seconds duration per subtitle</li>
                    <li>21 characters per second reading rate</li>
                    <li>Sync audio 0.1-0.3s before text appears</li>
                  </ul>
                </div>
              </div>
            </article>

            <article className="guide-section">
              <h3>Platform-Specific Optimization</h3>
              <div className="matching-table">
                <div className="match-row">
                  <div className="match-content-type">
                    <strong>📱 Instagram & TikTok</strong>
                    <p>Vertical 9:16 format, mobile viewing</p>
                  </div>
                  <div className="match-recommendation">
                    <p><strong>Best Practice:</strong> Center-bottom placement, large bold fonts, high contrast</p>
                    <p><em>Why:</em> Mobile screens require larger text. 85% watch without sound—captions are essential for engagement.</p>
                  </div>
                </div>

                <div className="match-row">
                  <div className="match-content-type">
                    <strong>🎬 YouTube</strong>
                    <p>Landscape 16:9, desktop & mobile</p>
                  </div>
                  <div className="match-recommendation">
                    <p><strong>Best Practice:</strong> Standard bottom placement, white text with black stroke, SRT export option</p>
                    <p><em>Why:</em> Viewers can toggle captions on/off. Separate SRT files improve SEO and allow multi-language support.</p>
                  </div>
                </div>

                <div className="match-row">
                  <div className="match-content-type">
                    <strong>📺 Broadcast & Film</strong>
                    <p>Professional productions, cinema</p>
                  </div>
                  <div className="match-recommendation">
                    <p><strong>Best Practice:</strong> Yellow sans-serif, precise timing, professional typography</p>
                    <p><em>Why:</em> Industry standards ensure readability on large screens. Yellow is traditional for film subtitles.</p>
                  </div>
                </div>

                <div className="match-row">
                  <div className="match-content-type">
                    <strong>📚 E-Learning Platforms</strong>
                    <p>Educational content, tutorials</p>
                  </div>
                  <div className="match-recommendation">
                    <p><strong>Best Practice:</strong> Clean sans-serif, high contrast, slower reading pace</p>
                    <p><em>Why:</em> Students need time to process information. Clear typography reduces cognitive load during learning.</p>
                  </div>
                </div>
              </div>
            </article>

            <article className="guide-section">
              <h3>Advanced Subtitle Techniques</h3>
              <div className="tips-grid">
                <div className="tip-card">
                  <span className="tip-number">1</span>
                  <h4>Text Stroke & Shadow</h4>
                  <p>Add 2-3px black stroke around white text for perfect readability against any background. Stroke is superior to drop shadows for subtitle clarity—shadows can blur text on moving backgrounds.</p>
                </div>

                <div className="tip-card">
                  <span className="tip-number">2</span>
                  <h4>Background Boxes</h4>
                  <p>Semi-transparent black backgrounds (50-70% opacity) behind text ensure readability over complex scenes. Use rounded corners for modern aesthetics. Keep padding consistent at 5-10px.</p>
                </div>

                <div className="tip-card">
                  <span className="tip-number">3</span>
                  <h4>Speaker Identification</h4>
                  <p>Use different colors or positions for multiple speakers in interviews or dialogues. Consistency is key—each speaker should maintain the same color throughout the video.</p>
                </div>

                <div className="tip-card">
                  <span className="tip-number">4</span>
                  <h4>Sound Effect Indicators</h4>
                  <p>Describe important non-speech audio in [brackets]: [music playing], [door slams], [phone ringing]. Critical for accessibility and viewer comprehension during silent viewing.</p>
                </div>

                <div className="tip-card">
                  <span className="tip-number">5</span>
                  <h4>Line Breaking Rules</h4>
                  <p>Break lines at natural phrase boundaries, not mid-word or mid-phrase. Top line should be shorter than bottom line for balanced pyramid shape. Avoid orphaned words (single words alone on a line).</p>
                </div>

                <div className="tip-card">
                  <span className="tip-number">6</span>
                  <h4>Quality Control</h4>
                  <p>Always review generated subtitles for accuracy. Check for: correct spelling, proper punctuation, timing sync, speaker changes, and technical terms. Test on mobile devices for size verification.</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* NEW: Technical Comparison Section */}
      <section className="comparison-section" role="region" aria-labelledby="comparison-title">
        <div className="container">
          <h2 id="comparison-title">AI Subtitle Generation vs Manual Transcription: Complete Comparison</h2>
          <p className="section-description">
            Understand the key differences between AI-powered automatic subtitles and traditional manual transcription services.
          </p>

          <div className="comparison-table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>AI Subtitle Generation</th>
                  <th>Manual Transcription</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Cost</strong></td>
                  <td>✅ Free to $0.50/minute<br/><span className="detail">Unlimited generations with subscription</span></td>
                  <td>❌ $1-3 per video minute<br/><span className="detail">Plus rush fees, formatting costs</span></td>
                </tr>
                <tr>
                  <td><strong>Speed</strong></td>
                  <td>✅ 1-2 minutes processing<br/><span className="detail">Real-time for short videos</span></td>
                  <td>❌ 3-5 business days<br/><span className="detail">Rush service adds 50-100% cost</span></td>
                </tr>
                <tr>
                  <td><strong>Accuracy</strong></td>
                  <td>✅ 95-98% for clear audio<br/><span className="detail">Lower for accents, technical terms</span></td>
                  <td>✅ 99-100% accuracy<br/><span className="detail">Human review catches all nuances</span></td>
                </tr>
                <tr>
                  <td><strong>Editing Required</strong></td>
                  <td>⚠️ 5-15 minutes review<br/><span className="detail">Quick corrections for errors</span></td>
                  <td>✅ Minimal to none<br/><span className="detail">Professional quality delivery</span></td>
                </tr>
                <tr>
                  <td><strong>Scalability</strong></td>
                  <td>✅ Process 100s of videos<br/><span className="detail">Automated batch processing</span></td>
                  <td>❌ Limited by human capacity<br/><span className="detail">Expensive for volume work</span></td>
                </tr>
                <tr>
                  <td><strong>Language Support</strong></td>
                  <td>✅ 50+ languages instantly<br/><span className="detail">No additional cost per language</span></td>
                  <td>⚠️ Major languages available<br/><span className="detail">$2-5/min for rare languages</span></td>
                </tr>
                <tr>
                  <td><strong>Customization</strong></td>
                  <td>✅ Full styling control<br/><span className="detail">Fonts, colors, positions, effects</span></td>
                  <td>⚠️ Basic formatting<br/><span className="detail">Custom styling costs extra</span></td>
                </tr>
                <tr>
                  <td><strong>Technical Terms</strong></td>
                  <td>⚠️ May require corrections<br/><span className="detail">Industry jargon needs review</span></td>
                  <td>✅ Accurate with research<br/><span className="detail">Transcribers look up terms</span></td>
                </tr>
                <tr>
                  <td><strong>Multiple Speakers</strong></td>
                  <td>⚠️ Speaker ID improving<br/><span className="detail">May need manual tagging</span></td>
                  <td>✅ Precise identification<br/><span className="detail">Formatted with speaker labels</span></td>
                </tr>
                <tr>
                  <td><strong>Background Noise</strong></td>
                  <td>⚠️ Struggles with poor audio<br/><span className="detail">Filters help but not perfect</span></td>
                  <td>✅ Humans understand context<br/><span className="detail">Can decipher challenging audio</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="comparison-recommendation">
            <h3>When to Choose AI Subtitle Generation</h3>
            <ul className="recommendation-list">
              <li>✅ <strong>Budget-conscious projects:</strong> Save 90% on captioning costs without sacrificing quality</li>
              <li>✅ <strong>High-volume content:</strong> Process multiple videos simultaneously for social media or YouTube</li>
              <li>✅ <strong>Fast turnarounds:</strong> Same-day delivery for time-sensitive content</li>
              <li>✅ <strong>Clear audio recordings:</strong> Professional audio with minimal background noise</li>
              <li>✅ <strong>Standard vocabulary:</strong> General topics without extensive industry jargon</li>
              <li>✅ <strong>Multilingual needs:</strong> Automatically subtitle in 50+ languages</li>
              <li>✅ <strong>Social media content:</strong> Quick captions for Instagram, TikTok, Facebook videos</li>
            </ul>

            <h3>When to Choose Manual Transcription</h3>
            <ul className="recommendation-list">
              <li>🎯 <strong>Legal/medical content:</strong> 100% accuracy required for compliance</li>
              <li>🎯 <strong>Poor audio quality:</strong> Heavy background noise, multiple overlapping speakers</li>
              <li>🎯 <strong>Heavy accents:</strong> Regional dialects or non-native speakers</li>
              <li>🎯 <strong>Technical terminology:</strong> Industry-specific jargon requiring expertise</li>
              <li>🎯 <strong>Broadcast standards:</strong> Television or film requiring perfect quality</li>
              <li>🎯 <strong>Complex formatting:</strong> Specific styling requirements beyond standard captions</li>
            </ul>

            <div className="hybrid-approach">
              <h3>💡 Pro Tip: Hybrid Approach</h3>
              <p>
                Most professionals combine both methods: Use <strong>AI subtitle generation for fast drafts</strong>, then hire human editors for final quality review on critical videos. This reduces manual transcription costs by 70-80% while maintaining high accuracy where it matters. Perfect for YouTube channels, online courses, and professional content production.
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
          <h2 id="cta-title">Ready to Add Subtitles to Your Videos?</h2>
          <p>Join over 50,000+ creators who trust our AI subtitle tool. Start adding professional subtitles today - completely free!</p>
          <button
            className="cta-button"
            onClick={() => {
              if (!isLoggedIn) {
                setShowLoginModal(true);
              } else {
                scrollToSection('hero');
              }
            }}
            aria-label="Start using the free subtitle generator"
          >
            {isLoggedIn ? 'Start Adding Subtitles Now - Free!' : 'Login to Start Adding Subtitles'}
          </button>
          <div className="cta-features">
            <span>⚡ Fast AI processing</span>
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
                New to SCENITH? <a href="/signup">Sign up</a>
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
              <small>Or get AI Subtitle Pro</small>
            </span>
          </button>
        </div>
      )}      
    </div>
  );
};

export default SubtitleClient;