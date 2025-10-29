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

    useEffect(() => {
        if (videoRef.current && Math.abs(videoRef.current.currentTime - currentTime) > 0.1) {
            videoRef.current.currentTime = currentTime;
            setIsSeeking(false);
        }
    }, [currentTime]);    

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
                {currentSubtitle && (() => {
                    const videoElement = videoRef.current;
                    if (!videoElement) return null;
                    
                    const sourceWidth = videoElement.videoWidth || 1920;
                    const sourceHeight = videoElement.videoHeight || 1080;
                    const videoRect = videoElement.getBoundingClientRect();
                    const displayedWidth = videoRect.width;
                    const displayedHeight = videoRect.height;
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
                            className="subtitle-overlay"
                            style={{
                                position: 'absolute',
                                left: '50%',
                                top: '50%',
                                transform: `translate(calc(-50% + ${positionX}px), calc(-50% + ${positionY}px)) rotate(${rotation}deg)`,
                                transformOrigin: 'center center',
                                zIndex: 10,
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

  const prevSelectedAiStyleRef = useRef<AiStyle | null>(null);

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
    } catch (error: any) {
      setError(error.response?.data?.message || 'Failed to upload video.');
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
        {},
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
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
      setError(error.response?.data?.message || 'Failed to process subtitles.');
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
      <Script
        id="subtitle-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'Scenith AI Subtitle Generator',
            description: 'Free AI-powered subtitle generator for videos. Automatically add and customize subtitles with professional styles.',
            url: typeof window !== 'undefined' ? window.location.href :'/tools/add-subtitles-to-videos',
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
          <h1>Free AI Subtitle Generator - Add Subtitles in Seconds</h1>
          <p className="hero-description">
            Automatically generate and customize subtitles for your videos with AI. Choose from professional styles, edit manually, and download MP4s instantly. Perfect for creators and filmmakers.
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
                  {editingSubtitle && (
                    <div className="subtitle-editor-container">
                      <SubtitleEditorPanel
                        subtitle={editingSubtitle}
                        onUpdate={(updatedSubtitle) => {
                          setEditingSubtitle(updatedSubtitle);
                          setSubtitles(subtitles.map(sub => 
                            sub.id === updatedSubtitle.id ? updatedSubtitle : sub
                          ));
                          debouncedSave(updatedSubtitle);
                        }}
                        onClose={() => {
                          if (originalSubtitle) {
                            setSubtitles(subtitles.map(sub => 
                              sub.id === originalSubtitle.id ? originalSubtitle : sub
                            ));
                          }
                          setEditingSubtitle(null);
                          setOriginalSubtitle(null);
                        }}
                        availableFonts={aiStyles.map(s => s.fontFamily)}
                        onApplyToAll={handleApplyPositionToAll}
                      />
                      <div className="editor-save-status">
                        {isSaving && <span className="saving-indicator">💾 Saving...</span>}
                        {saveSuccess && <span className="saved-indicator">✓ Saved</span>}
                      </div>
                    </div>
                  )}
                </div>
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
              <p>We support MP4, AVI, MOV, and more. Upload any standard video file to add subtitles.</p>
            </article>
            <article className="faq-item" role="listitem">
              <h3>Can I edit AI-generated subtitles?</h3>
              <p>Yes, you can manually correct text, adjust timings, or apply custom styles to any subtitle.</p>
            </article>
            <article className="faq-item" role="listitem">
              <h3>Are the subtitles burned into the video?</h3>
              <p>Yes, the final MP4 includes subtitles embedded directly into the video for universal compatibility.</p>
            </article>
            <article className="faq-item" role="listitem">
              <h3>How accurate are the AI subtitles?</h3>
              <p>Our AI uses Whisper for high-accuracy transcription, with manual editing for any corrections.</p>
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

export default SubtitleClient;