"use client";

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import axios from 'axios';
import { motion } from 'framer-motion';
import { API_BASE_URL, CDN_URL } from '../../../config';
import { FaTimes } from 'react-icons/fa';
import PremiumUpgradePopup from '@/app/components/PremiumUpgradePopup';
import '../../../../../styles/tools/AIVoiceGenerator.css';
import '../../../../../styles/components/PremiumUpgradePopup.css';

// Define TypeScript interfaces
interface UserProfile {
  email: string;
  firstName: string;
  lastName: string;
  picture: string | null;
  googleAuth: boolean;
  role: string;
}

interface Voice {
  voiceName: string;
  humanName?: string;
  language: string;
  gender: string;
  profileUrl: string;
  languageCode: string;
  voiceStyle?: string;
  ssmlConfig?: {
    rate?: string;
    pitch?: string;
    volume?: string;
    emphasis?: string;
  };  
}

interface LoginFormData {
  email: string;
  password: string;
}

const CustomAudioPlayer = ({ src }: { src: string }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
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
    if (audioRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const width = rect.width;
      const newTime = (clickX / width) * duration;
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  return (
    <div className="custom-audio-player">
      <audio
        ref={audioRef}
        src={src}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
        style={{ display: 'none' }}
      />
      
      <div className="audio-controls">
        <button 
          onClick={togglePlayPause} 
          className="play-pause-button"
          aria-label={isPlaying ? 'Pause audio' : 'Play audio'}
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

const AIVoiceGeneratorClient: React.FC = () => {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
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
  const [loginError, setLoginError] = useState<string | null>(null);
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(false);

  // Voice generation states
  const [voices, setVoices] = useState<Voice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState<Voice | null>(null);
  const [aiVoiceText, setAiVoiceText] = useState('');
  const [filterLanguage, setFilterLanguage] = useState('');
  const [filterGender, setFilterGender] = useState('');
  const [uniqueLanguages, setUniqueLanguages] = useState<string[]>([]);
  const [uniqueGenders, setUniqueGenders] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedAudio, setGeneratedAudio] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loginErrors, setLoginErrors] = useState<{ [key: string]: string }>({});
  const [loginSuccess, setLoginSuccess] = useState<string>('');
  const [playingDemo, setPlayingDemo] = useState<string | null>(null);
  const demoAudioRef = useRef<HTMLAudioElement | null>(null);  
  const [ttsUsage, setTtsUsage] = useState<{
    monthly: {
      used: number;
      limit: number;
      remaining: number;
    };
    daily: {
      used: number;
      limit: number;
      remaining: number;
    };
    role: string;
  } | null>(null);
  const [characterCount, setCharacterCount] = useState(0);
  const [showPremiumPopup, setShowPremiumPopup] = useState(false);
  const [isIndianUser, setIsIndianUser] = useState<boolean | null>(null);  

  // Handle scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fetch TTS usage when user logs in
  useEffect(() => {
    const fetchTtsUsage = async () => {
      if (!isLoggedIn) {
        setTtsUsage(null);
        return;
      }

      try {
        const response = await fetch(`${API_BASE_URL}/api/sole-tts/usage`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setTtsUsage(data);
        }
      } catch (error) {
        console.error('Error fetching TTS usage:', error);
      }
    };

    fetchTtsUsage();
  }, [isLoggedIn]);  

  // Check auth status and fetch user profile if token exists
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

  const handlePlayDemo = (voice: Voice) => {
    const voiceId = `${voice.voiceName}-${voice.voiceStyle || 'default'}`;
    
    // Stop any currently playing demo
    if (demoAudioRef.current) {
      demoAudioRef.current.pause();
      demoAudioRef.current.currentTime = 0;
    }
  
    // If clicking the same voice, just stop
    if (playingDemo === voiceId) {
      setPlayingDemo(null);
      return;
    }
  
    // Construct demo URL based on voice properties
    const genderFolder = voice.gender.toUpperCase();
    const languageFolder = voice.language.replace(/\s*\(.*?\)\s*/g, '').trim().replace(/\s+/g, '%20');
    
    // For voice variations, construct filename with style
    // e.g., "Rohit-Intense.mp3" or "Alia-Excited.mp3"
    let demoFileName;
    if (voice.voiceStyle) {
      // Capitalize first letter of style for filename
      const styleCapitalized = voice.voiceStyle.charAt(0).toUpperCase() + voice.voiceStyle.slice(1);
      const baseName = voice.humanName?.split('-')[0] || voice.voiceName;
      demoFileName = `${baseName}-${styleCapitalized}.mp3`;
    } else {
      // Base voice without style
      demoFileName = `${voice.humanName || voice.voiceName}.mp3`;
    }
    
    const demoUrl = `${CDN_URL}/AiVoicesDemo/${languageFolder}/${genderFolder}/${demoFileName}`;
    
    console.log('🎵 Playing demo:', demoUrl); // Debug log
  
    // Create and play new audio
    const audio = new Audio(demoUrl);
    audio.play().catch((error) => {
      console.error('Error playing demo:', error);
      setPlayingDemo(null);
    });
  
    audio.onended = () => {
      setPlayingDemo(null);
    };
  
    audio.onerror = () => {
      console.error('Error loading demo audio:', demoUrl);
      setPlayingDemo(null);
    };
  
    demoAudioRef.current = audio;
    setPlayingDemo(voiceId);
  };

  useEffect(() => {
    return () => {
      if (demoAudioRef.current) {
        demoAudioRef.current.pause();
        demoAudioRef.current = null;
      }
    };
  }, []);  

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

  // Show login modal if not logged in
  const requireLogin = () => {
    if (!isLoggedIn) {
      setShowLoginModal(true);
      return false;
    }
    return true;
  };

  // Fetch unique languages and genders for dropdowns
  useEffect(() => {
    if (!isLoggedIn) return;
    const fetchMetadata = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/ai-voices/get-all-voices`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        const languages = data.map((v: Voice) => v.language);
        const genders = data.map((v: Voice) => v.gender);
        setUniqueLanguages([...new Set(languages)] as string[]);
        setUniqueGenders([...new Set(genders)] as string[]);
      } catch (error) {
        console.error('Error fetching metadata:', error);
        setUniqueLanguages([]);
        setUniqueGenders([]);
      }
    };
    fetchMetadata();
  }, [isLoggedIn]);

  // Fetch filtered voices based on language and gender
  useEffect(() => {
    const fetchFilteredVoices = async () => {
      if (!isLoggedIn) return;
      try {
        let url = `${API_BASE_URL}/api/ai-voices/get-all-voices`;
        if (filterLanguage && filterGender) {
          url = `${API_BASE_URL}/api/ai-voices/voices-by-language-and-gender?language=${encodeURIComponent(filterLanguage)}&gender=${encodeURIComponent(filterGender)}`;
        } else if (filterLanguage) {
          url = `${API_BASE_URL}/api/ai-voices/voices-by-language?language=${encodeURIComponent(filterLanguage)}`;
        } else if (filterGender) {
          url = `${API_BASE_URL}/api/ai-voices/voices-by-gender?gender=${encodeURIComponent(filterGender)}`;
        }

        const response = await fetch(url, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        setVoices(data);
      } catch (error) {
        console.error('Error fetching filtered voices:', error);
        setVoices([]);
      }
    };
    fetchFilteredVoices();
  }, [filterLanguage, filterGender, isLoggedIn]);

  const handleGenerateAiAudio = async () => {
    if (!isLoggedIn) {
      setShowLoginModal(true);
      return;
    }
    if (!aiVoiceText.trim() || !selectedVoice) {
      setError('Please enter text and select a voice.');
      return;
    }
    if (aiVoiceText.length > getMaxCharsPerRequest()) {
      const roleBasedLimit = ttsUsage?.role === 'STUDIO' ? 5000 : 
                            ttsUsage?.role === 'CREATOR' ? 2500 : 500;
      const limitType = ttsUsage?.daily.remaining !== -1 && 
                        (ttsUsage?.daily.remaining ?? 0) < (ttsUsage?.monthly.remaining ?? 0)
        ? 'daily' 
        : 'monthly';
      const remainingChars = limitType === 'daily' 
        ? (ttsUsage?.daily.remaining ?? 0) 
        : (ttsUsage?.monthly.remaining ?? 0);
      
      setError(`Text exceeds the maximum limit of ${getMaxCharsPerRequest().toLocaleString()} characters per request for your ${ttsUsage?.role || 'BASIC'} plan (Role limit: ${roleBasedLimit.toLocaleString()} chars, ${remainingChars.toLocaleString()} left ${limitType}).`);
      setTimeout(() => {
        const errorElement = document.querySelector('.error-message');
        if (errorElement) {
          errorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
      setTimeout(() => setError(null), 10000);
      return;
    }

    // Check if this request would exceed remaining limits
    if (ttsUsage) {
      // Check daily limit (only if it exists, -1 means unlimited)
      const wouldExceedDaily = ttsUsage.daily.limit > 0 && 
                               (ttsUsage.daily.remaining < aiVoiceText.length);

      // Check monthly limit (only if it exists, -1 means unlimited)
      const wouldExceedMonthly = ttsUsage.monthly.limit > 0 && 
                                 (ttsUsage.monthly.remaining < aiVoiceText.length);

      if (wouldExceedDaily) {
        setError(`This request would exceed your daily limit. You have ${ttsUsage.daily.remaining.toLocaleString()} characters remaining today, but this text is ${aiVoiceText.length.toLocaleString()} characters long.`);
        setTimeout(() => {
          const errorElement = document.querySelector('.error-message');
          if (errorElement) {
            errorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 100);
        setTimeout(() => setError(null), 10000);
        return;
      }

      if (wouldExceedMonthly) {
        setError(`This request would exceed your monthly limit. You have ${ttsUsage.monthly.remaining.toLocaleString()} characters remaining this month, but this text is ${aiVoiceText.length.toLocaleString()} characters long.`);
        setTimeout(() => {
          const errorElement = document.querySelector('.error-message');
          if (errorElement) {
            errorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 100);
        setTimeout(() => setError(null), 10000);
        return;
      }
    }

    setIsGenerating(true);
    setError(null);
    try {
      const requestBody: any = {
        text: aiVoiceText,
        voiceName: selectedVoice.voiceName,
        languageCode: selectedVoice.languageCode,
      };
      
      // Add SSML config if available
      if (selectedVoice.ssmlConfig) {
        requestBody.ssmlConfig = selectedVoice.ssmlConfig;
      }
      
      const response = await fetch(`${API_BASE_URL}/api/sole-tts/generate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        const contentType = response.headers.get('content-type');
        let errorMessage = `HTTP error! status: ${response.status}`;

        if (contentType && contentType.includes('application/json')) {
          const errorData = await response.json();
          errorMessage = errorData.message || errorData.error || errorMessage;
        } else {
          const errorText = await response.text();
          errorMessage = errorText || errorMessage;
        }

        throw new Error(errorMessage);
      }

      const data = await response.json();
      setGeneratedAudio(`${CDN_URL}/${data.audioPath}`);

      const usageResponse = await fetch(`${API_BASE_URL}/api/sole-tts/usage`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      if (usageResponse.ok) {
        const usageData = await usageResponse.json();
        setTtsUsage(usageData);
      }
      
      setTimeout(() => {
        const audioSection = document.querySelector('.audio-output-section');
        if (audioSection) {
          audioSection.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' 
          });
        }
      }, 100);
    } catch (err: any) {
      const errorMessage = err.message || 'Failed to generate audio.';
      setError(errorMessage);
    
      // Scroll to error message
      setTimeout(() => {
        const errorElement = document.querySelector('.error-message');
        if (errorElement) {
          errorElement.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' 
          });
        }
      }, 100);
    
      // Auto-clear error after 10 seconds
      setTimeout(() => {
        setError(null);
      }, 10000);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownload = async () => {
    if (generatedAudio) {
      try {
        // Fetch the audio file as a blob
        const response = await fetch(generatedAudio);
        const blob = await response.blob();

        // Create a blob URL
        const blobUrl = window.URL.createObjectURL(blob);

        // Create download link
        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = `ai-voice-${Date.now()}.mp3`; // Add timestamp for unique filename

        // Trigger download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Clean up the blob URL
        window.URL.revokeObjectURL(blobUrl);

        if (userProfile.role != 'STUDIO') {
          setTimeout(() => {
            setShowPremiumPopup(true);
          }, 2000); // Show popup 1.5 seconds after download starts
        }
      } catch (error) {
        console.error('Download failed:', error);
        // Fallback to opening in new tab if download fails
        window.open(generatedAudio, '_blank');

        // Still show popup even if fallback method is used
        if (userProfile.role === 'BASIC' || userProfile.role === 'CREATOR') {
          setTimeout(() => {
            setShowPremiumPopup(true);
          }, 2000);
        }
      }
    }
  };

  // Smooth scrolling for section links
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (!section) {
      console.error(`Section with ID ${sectionId} not found.`);
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

  const getMaxCharsPerRequest = useCallback(() => {
    if (!isLoggedIn || !ttsUsage) return 500;

    // Determine role-based limit
    const roleBasedLimit = ttsUsage.role === 'ADMIN' ? 10000 :
                          ttsUsage.role === 'STUDIO' ? 5000 : 
                          ttsUsage.role === 'CREATOR' ? 2500 : 500;

    const dailyRemaining = ttsUsage.daily.remaining;
    const monthlyRemaining = ttsUsage.monthly.remaining;

    if (dailyRemaining === -1 && monthlyRemaining === -1) {
      return roleBasedLimit;
    }

    if (dailyRemaining === -1) {
      if (monthlyRemaining === -1) return roleBasedLimit;
      return Math.min(roleBasedLimit, monthlyRemaining);
    }

    if (monthlyRemaining === -1) {
      // Monthly unlimited, but daily has a limit
      return Math.min(roleBasedLimit, dailyRemaining);
    }

    // Both have limits, use the most restrictive
    return Math.min(roleBasedLimit, dailyRemaining, monthlyRemaining);
  }, [isLoggedIn, ttsUsage]);

  // Add this useEffect to detect user location and show popup
  useEffect(() => {
    const detectLocationAndShowPopup = async () => {
      if (!isLoggedIn) return;
        
      try {
        // Detect user's country
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
  
        // Show popup only if user is from India and has BASIC role
        if (userProfile.role === 'BASIC' || userProfile.role === 'CREATOR') {
          // Delay popup by 2 seconds for better UX
          setTimeout(() => {
            setShowPremiumPopup(true);
          }, 2000);
        }
      } catch (error) {
        console.error('Error detecting location:', error);
      }
    };
  
    detectLocationAndShowPopup();
  }, [isLoggedIn, userProfile.role]);
  
  // Add handler to close popup
  const handleClosePremiumPopup = () => {
    setShowPremiumPopup(false);
  };  

  const isLimitsExceeded = useCallback(() => {
    if (!isLoggedIn || !ttsUsage) return false;

    const monthlyExceeded = ttsUsage.monthly.limit > 0 && ttsUsage.monthly.remaining <= 0;
    const dailyExceeded = ttsUsage.daily.limit > 0 && ttsUsage.daily.remaining <= 0;

    return monthlyExceeded || dailyExceeded;
  }, [isLoggedIn, ttsUsage]);

  const wouldExceedLimits = useCallback((textLength: number) => {
    if (!isLoggedIn || !ttsUsage) return false;

    if (ttsUsage.monthly.limit > 0 && ttsUsage.monthly.remaining < textLength) {
      return true;
    }

    if (ttsUsage.daily.limit > 0 && ttsUsage.daily.remaining < textLength) {
      return true;
    }

    return false;
  }, [isLoggedIn, ttsUsage]);

return (
  <div className="ai-voice-generator-page">
    {/* Structured Data Scripts */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'Scenith AI Voice Generator',
          description: 'Free AI-powered text-to-speech tool for generating natural-sounding voices from text in multiple languages.',
          url: typeof window !== 'undefined' ? window.location.href : '/tools/ai-voice-generation',
          applicationCategory: 'MultimediaApplication',
          operatingSystem: 'Web Browser',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.7',
            reviewCount: '8562',
          },
          author: {
            '@type': 'Organization',
            name: 'SCENITH AI VIDEO EDITOR',
          },
        }),
      }}
    />

    {/* Add HowTo Schema for better SEO */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'HowTo',
          name: 'How to Generate AI Voice from Text',
          description: 'Step-by-step guide to creating professional AI voices using text-to-speech technology',
          step: [
            {
              '@type': 'HowToStep',
              name: 'Enter Your Text',
              text: 'Type or paste your script into the text area. You can use up to 5,000 characters per request.',
              position: 1
            },
            {
              '@type': 'HowToStep',
              name: 'Select Voice and Language',
              text: 'Browse through 40+ AI voices across 20+ languages. Filter by gender, accent, and style. Play demos to preview each voice.',
              position: 2
            },
            {
              '@type': 'HowToStep',
              name: 'Generate and Download',
              text: 'Click Generate AI Voice to create your audio. Download the high-quality MP3 file for use in your projects.',
              position: 3
            }
          ]
        }),
      }}
    />

    {/* Add FAQ Schema */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'What is AI voice generation and how does it work?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'AI voice generation uses neural text-to-speech (TTS) technology to convert written text into natural-sounding speech. Our system analyzes your text, processes linguistic patterns, applies prosody (rhythm and intonation), and synthesizes audio using deep learning models trained on human voices.'
              }
            },
            {
              '@type': 'Question',
              name: 'What languages and voices are available?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'We support 20+ languages including American English, UK English, Spanish, French, German, Mandarin, Hindi, and more. Each language features multiple natural-sounding voices with various genders, accents, and styles. You can filter and preview all voices before generating.'
              }
            },
            {
              '@type': 'Question',
              name: 'Is the generated audio commercial use allowed?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes! All AI-generated audio can be used commercially. You retain full rights to download and use the MP3 files in videos, podcasts, apps, marketing materials, and any other projects without attribution requirements.'
              }
            },
            {
              '@type': 'Question',
              name: 'How many characters can I generate for free?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'The free BASIC plan includes 5,000 characters per month with a daily limit of 1,000 characters. CREATOR plan offers 50,000 characters/month with 5,000 characters/day. STUDIO plan provides 150,000 characters/month with no daily limits. Each request supports up to 5,000 characters.'
              }
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
        <h1>AI Voice Generator for YouTube & Marketing (Natural Voices)</h1>
        <p className="hero-description">
          Transform your text into lifelike AI voices instantly. Choose from 40+ natural-sounding voices across multiple languages. Perfect for videos, podcasts, presentations, and content creation. Completely free with MP3 downloads!
        </p>
        <div className="hero-cta-section">
          <div className="main-content">
            <div className="text-input-section">
              <textarea
                value={aiVoiceText}
                onChange={(e) => {
                  setAiVoiceText(e.target.value);
                  setCharacterCount(e.target.value.length);
                }}
                placeholder="Enter your text here..."
                className="ai-voice-textarea"
                disabled={!isLoggedIn}
                aria-label="Text input for AI voice generation"
                maxLength={getMaxCharsPerRequest()}
              />

              {isLoggedIn && (
                <div className="character-count-container">
                  <p className="character-count">
                    <span className={characterCount > getMaxCharsPerRequest() ? 'count-exceeded' : characterCount > getMaxCharsPerRequest() * 0.9 ? 'count-warning' : ''}>
                      {characterCount.toLocaleString()}
                    </span> / {getMaxCharsPerRequest().toLocaleString()} characters per request
                  </p>
                </div>
              )}

              {isLoggedIn && ttsUsage && (
                <div className="usage-info">
                  {ttsUsage.daily.limit > 0 && 
                   ttsUsage.monthly.limit > 0 &&
                   ttsUsage.daily.remaining < ttsUsage.monthly.remaining && (
                    <div className="usage-section">
                      <p className="usage-label">Daily Usage (Most Restrictive)</p>
                      <div className="usage-bar-container">
                        <div 
                          className="usage-bar-fill" 
                          style={{ width: `${(ttsUsage.daily.used / ttsUsage.daily.limit) * 100}%` }}
                        />
                      </div>
                      <p className="usage-text">
                        <strong>{ttsUsage.daily.remaining.toLocaleString()}</strong> characters remaining today
                        ({ttsUsage.daily.used.toLocaleString()} / {ttsUsage.daily.limit.toLocaleString()} used)
                      </p>
                    </div>
                  )}

                  {/* Monthly Usage Bar - Always show */}
                  <div className="usage-section">
                    <p className="usage-label">
                      {ttsUsage.monthly.limit === -1 ? 'Monthly Usage (Unlimited)' :
                       ttsUsage.daily.limit > 0 && 
                       ttsUsage.monthly.remaining > 0 && 
                       ttsUsage.daily.remaining >= ttsUsage.monthly.remaining
                        ? 'Monthly Usage (Most Restrictive)'
                        : 'Monthly Usage'}
                    </p>
                    {ttsUsage.monthly.limit === -1 ? (
                      <p className="usage-text">
                        <strong>Unlimited</strong> - No monthly character limit
                      </p>
                    ) : (
                      <>
                        <div className="usage-bar-container">
                          <div 
                            className="usage-bar-fill" 
                            style={{ width: `${(ttsUsage.monthly.used / ttsUsage.monthly.limit) * 100}%` }}
                          />
                        </div>
                        <p className="usage-text">
                          <strong>{ttsUsage.monthly.remaining.toLocaleString()}</strong> characters remaining this month
                          ({ttsUsage.monthly.used.toLocaleString()} / {ttsUsage.monthly.limit.toLocaleString()} used)
                        </p>
                      </>
                    )}
                  </div>
                </div>
              )}

              {isLimitsExceeded() ? (
                <a
                  href="https://scenith.in/pricing"
                  className="cta-button upgrade-button"
                  aria-label="Upgrade to unlock more characters"
                >
                  <span className="upgrade-icon">🚀</span>
                  Upgrade to Pro - Unlock More Characters
                  <span className="upgrade-badge">Limited Time Offer</span>
                </a>                
              ) : (
                <button
                  className="cta-button generate-voice-button"
                  onClick={handleGenerateAiAudio}
                  disabled={
                    !isLoggedIn ? false : (
                      !aiVoiceText.trim() || 
                      !selectedVoice || 
                      isGenerating || 
                      characterCount > getMaxCharsPerRequest() ||
                      wouldExceedLimits(aiVoiceText.length) ||
                      undefined
                    )
                  }
                  aria-label="Generate AI voice from text"
                >
                  {isGenerating ? 'Generating...' : isLoggedIn ? 'Generate AI Voice' : 'Login to Generate'}
                </button>
              )}
              {isLimitsExceeded() && (
                <div className="limit-exceeded-message">
                  <p className="limit-message-title">⚡ You've used all your {userProfile.role} plan characters!</p>
                  <div className="limit-benefits">
                    <div className="benefit-item">✓ CREATOR: 50,000 chars/month + 5,000/day</div>
                    <div className="benefit-item">✓ STUDIO: 150,000 chars/month + No daily limit</div>
                    <div className="benefit-item">✓ Unlimited voice generations</div>
                  </div>
                  <p className="limit-message-cta">Upgrade now and continue creating! 🎯</p>
                </div>
              )}              
            </div>

            <div className="voice-list-section">
              <div className="fixed-header">
                <h3>Select a Voice</h3>
                <div className="filter-section">
                  <select
                    value={filterLanguage}
                    onChange={(e) => setFilterLanguage(e.target.value)}
                    className="filter-select"
                    disabled={!isLoggedIn}
                    aria-label="Filter voices by language"
                  >
                    <option value="">All Languages</option>
                    {uniqueLanguages.map((lang) => (
                      <option key={lang} value={lang}>
                        {lang}
                      </option>
                    ))}
                  </select>

                  <select
                    value={filterGender}
                    onChange={(e) => setFilterGender(e.target.value)}
                    className="filter-select"
                    disabled={!isLoggedIn}
                    aria-label="Filter voices by gender"
                  >
                    <option value="">All Genders</option>
                    {uniqueGenders.map((gen) => (
                      <option key={gen} value={gen}>
                        {gen}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="scrollable-voices">
                {voices.length === 0 ? (
                  <div className="empty-state">
                    {!isLoggedIn ? 'Login to discover voices!' : 'Loading voices...'}
                  </div>
                ) : (
                  <div className="voice-list">
                    {voices.map((voice) => (
                      <div
                        key={`${voice.voiceName}-${voice.voiceStyle || 'default'}`}
                        className={`voice-item ${
                          selectedVoice?.voiceName === voice.voiceName && 
                          selectedVoice?.voiceStyle === voice.voiceStyle ? 'selected' : ''
                        }`}
                        role="button"
                        tabIndex={0}
                        aria-label={`Select voice ${voice.humanName || voice.voiceName}`}
                      >
                        <img
                          src={voice.profileUrl}
                          alt={`${voice.humanName || voice.voiceName} profile`}
                          className="voice-profile-image"
                          onClick={() => setSelectedVoice(voice)}
                        />
                        <div className="voice-details" onClick={() => setSelectedVoice(voice)}>
                          <div className="voice-title">
                            {voice.humanName || voice.voiceName}
                            {voice.voiceStyle && (
                              <span className="voice-style-badge">{voice.voiceStyle}</span>
                            )}
                          </div>
                          <div className="voice-info">{`${voice.language} (${voice.gender})`}</div>
                        </div>
                        <button
                          className="demo-button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handlePlayDemo(voice);
                          }}
                          aria-label={`Play demo for ${voice.humanName || voice.voiceName}`}
                          title="Play demo"
                        >
                          {playingDemo === voice.voiceName ? '⏸️' : '▶️'}
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {generatedAudio && (
            <section className="audio-output-section" role="region" aria-labelledby="audio-output-title">
              <motion.div
                className="container"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 id="audio-output-title">Your Generated Audio</h2>
                <CustomAudioPlayer src={generatedAudio} />
                <button onClick={handleDownload} className="cta-button download-button" aria-label="Download generated audio as MP3">
                  Download MP3
                </button>
              </motion.div>
            </section>
          )}            
          <div className="trust-indicators">
            <span className="trust-item">✅ 100% Free</span>
            <span className="trust-item">🎤 40+ Voices</span>
            <span className="trust-item">🌍 Multi-Language</span>
            <span className="trust-item">📥 Instant MP3 Download</span>
          </div>
        </div>
        <figure className="hero-image-container">
          <Image
            src="/images/AIVoiceGenerationSS.png"
            alt="AI voice generation example - text transforming into speech waveform with diverse voice avatars"
            className="hero-image"
            width={800}
            height={400}
            priority
          />
          <figcaption className="sr-only">Example of AI text-to-speech generation showing voice selection and audio output</figcaption>
        </figure>
      </motion.div>
    </section>

    {error && (
      <motion.div 
        className="error-message" 
        role="alert"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        <strong>⚠️ Error:</strong> {error}
      </motion.div>
    )}

    {/* NEW: Educational Introduction Section */}
    <section className="educational-intro" role="complementary" aria-labelledby="intro-title">
      <div className="container">
        <h2 id="intro-title" className="section-subtitle">Transform Text into Lifelike Speech with AI Technology</h2>
        <div className="intro-content-grid">
          <div className="intro-text">
            <p className="intro-paragraph">
              <strong>AI voice generation</strong> has revolutionized content creation by converting written text into natural-sounding speech in seconds. Whether you're a content creator, educator, podcaster, or business professional, our advanced <strong>text-to-speech (TTS)</strong> tool helps you produce professional audio without expensive recording equipment or voice actors.
            </p>
            <p className="intro-paragraph">
              Our neural network-powered system supports <strong>40+ realistic voices across 20+ languages</strong>, offering diverse accents, genders, and speaking styles. Each voice is trained on extensive datasets to capture human-like intonation, emotion, and natural pacing—perfect for videos, presentations, e-learning courses, podcasts, and accessibility features.
            </p>
            <p className="intro-paragraph">
              <strong>Why choose AI voice generation?</strong> Save time and money while maintaining broadcast-quality audio. Generate multilingual content instantly, update narration without re-recording, and scale your audio production effortlessly. With commercial use rights and instant MP3 downloads, you have everything needed for professional projects.
            </p>
          </div>
          <div className="intro-stats">
            <div className="stat-box">
              <div className="stat-number">40+</div>
              <div className="stat-label">Natural AI Voices</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">20+</div>
              <div className="stat-label">Supported Languages</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">25K+</div>
              <div className="stat-label">Active Creators</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">3 sec</div>
              <div className="stat-label">Generation Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>    

    {/* NEW: What is AI Voice Generation Section */}
    <section className="what-is-section" id="what-is-ai-voice" role="region" aria-labelledby="what-is-title">
      <div className="container">
        <h2 id="what-is-title">What is AI Voice Generation? Understanding Text-to-Speech Technology</h2>
        <p className="section-description">
          AI voice generation leverages advanced neural networks to synthesize human-like speech from written text, revolutionizing how we create audio content.
        </p>
        
        <div className="content-deep-dive">
          <div className="dive-section">
            <h3>How Neural Text-to-Speech Works</h3>
            <p>
              Modern <strong>AI voice generators</strong> use deep learning models trained on thousands of hours of human speech recordings. The process involves multiple sophisticated steps:
            </p>
            <ol className="process-list">
              <li><strong>Text Analysis:</strong> The system parses your input text, identifying sentence structure, punctuation, and linguistic context to understand meaning and intent.</li>
              <li><strong>Phonetic Conversion:</strong> Text is converted into phonemes (speech sounds) using natural language processing, determining how each word should be pronounced based on language rules and context.</li>
              <li><strong>Prosody Generation:</strong> The AI applies rhythm, stress, and intonation patterns that make speech sound natural. This includes adjusting pitch, duration, and emphasis to convey emotion and meaning.</li>
              <li><strong>Audio Synthesis:</strong> Neural vocoders generate the final audio waveform, creating smooth, natural-sounding speech that mimics human vocal characteristics including breath patterns and natural pauses.</li>
            </ol>
          </div>

          <div className="dive-section">
            <h3>Key Technologies Behind AI Voices</h3>
            <div className="tech-cards">
              <div className="tech-card">
                <h4>🧠 Deep Neural Networks</h4>
                <p>Multiple layers of artificial neurons process text patterns, learning from massive datasets to predict natural speech patterns and voice characteristics.</p>
              </div>
              <div className="tech-card">
                <h4>🎵 WaveNet & Tacotron</h4>
                <p>Industry-leading architectures that generate raw audio waveforms directly, producing remarkably human-like voices with natural prosody and intonation.</p>
              </div>
              <div className="tech-card">
                <h4>📊 Transfer Learning</h4>
                <p>Models trained on diverse voices can quickly adapt to new speakers and languages, enabling rapid expansion of voice libraries and multilingual support.</p>
              </div>
              <div className="tech-card">
                <h4>⚡ Real-Time Processing</h4>
                <p>Optimized inference engines generate high-quality speech in seconds, enabling instant audio creation for time-sensitive content and live applications.</p>
              </div>
            </div>
          </div>

          <div className="dive-section">
            <h3>Evolution of Text-to-Speech Technology</h3>
            <p>
              TTS technology has evolved dramatically from robotic, monotone voices to today's indistinguishable-from-human speech:
            </p>
            <ul className="evolution-timeline">
              <li><strong>1960s-1990s:</strong> Rule-based systems produced mechanical-sounding speech with limited emotional range and unnatural pacing.</li>
              <li><strong>2000s:</strong> Concatenative synthesis improved naturalness by stitching together recorded speech fragments, but lacked flexibility and often sounded choppy.</li>
              <li><strong>2010s:</strong> Statistical parametric synthesis used HMMs to model speech parameters, offering better flexibility but still sounding somewhat synthetic.</li>
              <li><strong>2016-Present:</strong> Deep learning revolutionized TTS with WaveNet, Tacotron, and transformer models, achieving near-human quality with emotional expressiveness.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* NEW: Benefits & Applications Section */}
    <section className="benefits-applications-section" role="region" aria-labelledby="benefits-title">
      <div className="container">
        <h2 id="benefits-title">Why Use AI Voice Generation? Benefits for Content Creators and Businesses</h2>
        
        <div className="benefits-grid">
          <article className="benefit-detailed">
            <h3>💰 Cost-Effective Content Production</h3>
            <p>
              Traditional voice recording requires expensive equipment, soundproof studios, and professional voice actors who charge $100-500 per hour. <strong>AI voice generation eliminates these costs</strong>, allowing unlimited audio creation for a fraction of the price. Update content instantly without scheduling re-recording sessions or paying additional fees.
            </p>
            <div className="benefit-stats">
              <span>Save 90% on voiceover costs</span>
              <span>No studio rental fees</span>
              <span>Instant updates & revisions</span>
            </div>
          </article>

          <article className="benefit-detailed">
            <h3>⏱️ Speed & Scalability</h3>
            <p>
              Generate professional audio in seconds instead of days. Our AI processes text instantly, enabling <strong>rapid content production at scale</strong>. Create multiple language versions simultaneously, test different voice styles quickly, and meet tight deadlines without compromising quality. Perfect for agencies managing multiple clients or creators publishing daily content.
            </p>
            <div className="benefit-stats">
              <span>3-second generation time</span>
              <span>Unlimited daily creation</span>
              <span>Batch processing support</span>
            </div>
          </article>

          <article className="benefit-detailed">
            <h3>🌍 Global Reach & Localization</h3>
            <p>
              Expand your audience with multilingual content. Our <strong>20+ language support</strong> includes English (American, UK, Australian, Indian accents), Spanish, French, German, Mandarin, Hindi, Portuguese, and more. Each language features native-sounding voices trained on regional speech patterns, ensuring authentic delivery that resonates with local audiences.
            </p>
            <div className="benefit-stats">
              <span>20+ languages available</span>
              <span>Multiple regional accents</span>
              <span>Cultural pronunciation accuracy</span>
            </div>
          </article>

          <article className="benefit-detailed">
            <h3>♿ Accessibility & Inclusion</h3>
            <p>
              Make your content accessible to visually impaired users, people with reading difficulties, and multilingual audiences. <strong>Text-to-speech improves content consumption</strong> for diverse user needs, helping you comply with accessibility standards (WCAG, ADA) while expanding your potential audience reach.
            </p>
            <div className="benefit-stats">
              <span>WCAG 2.1 compliant</span>
              <span>Screen reader compatible</span>
              <span>Multi-sensory content</span>
            </div>
          </article>

          <article className="benefit-detailed">
            <h3>🎭 Consistent Brand Voice</h3>
            <p>
              Maintain uniform audio quality across all content. Unlike human voice actors who may sound different on various recording days, <strong>AI voices ensure perfect consistency</strong>. Ideal for brand messaging, corporate training, product demonstrations, and any content requiring recognizable, reliable narration.
            </p>
            <div className="benefit-stats">
              <span>Zero variation in tone</span>
              <span>Predictable quality</span>
              <span>Brand voice standards</span>
            </div>
          </article>

          <article className="benefit-detailed">
            <h3>🔄 Easy Updates & Iterations</h3>
            <p>
              Content changes no longer require expensive re-recording sessions. Simply edit your text and regenerate audio instantly. <strong>Perfect for dynamic content</strong> like product catalogs, news updates, educational materials, and marketing campaigns that evolve frequently. A/B test different scripts effortlessly.
            </p>
            <div className="benefit-stats">
              <span>Instant text modifications</span>
              <span>No re-recording costs</span>
              <span>Version control friendly</span>
            </div>
          </article>
        </div>

        <div className="applications-showcase">
          <h3>Real-World Applications Across Industries</h3>
          <div className="application-cards-grid">
            <div className="app-card">
              <span className="app-icon">🎬</span>
              <h4>Video Production & YouTube</h4>
              <p>Create engaging narration for explainer videos, tutorials, product reviews, and documentaries. Generate multilingual voiceovers to expand global reach and improve SEO with translated content.</p>
              <strong>Use cases:</strong> Video essays, product demos, documentary narration, YouTube automation
            </div>

            <div className="app-card">
              <span className="app-icon">📚</span>
              <h4>E-Learning & Education</h4>
              <p>Develop interactive courses with clear, professional narration. Create audio versions of textbooks, generate pronunciation guides, and produce accessible learning materials for diverse student needs.</p>
              <strong>Use cases:</strong> Online courses, audiobooks, language learning, lecture recordings
            </div>

            <div className="app-card">
              <span className="app-icon">📻</span>
              <h4>Podcasts & Audio Content</h4>
              <p>Produce professional podcast intros, outros, and narration segments. Generate voice characters for audio dramas, create AI co-hosts, and develop audio articles from blog content.</p>
              <strong>Use cases:</strong> Podcast production, audio journalism, audio dramas, branded podcasts
            </div>

            <div className="app-card">
              <span className="app-icon">💼</span>
              <h4>Corporate & Business</h4>
              <p>Create consistent messaging for internal training, product announcements, and marketing materials. Develop IVR systems, voice assistants, and automated customer service responses with branded voices.</p>
              <strong>Use cases:</strong> Training modules, presentations, IVR systems, corporate communications
            </div>

            <div className="app-card">
              <span className="app-icon">🎮</span>
              <h4>Gaming & Entertainment</h4>
              <p>Generate character dialogue, NPC voices, and tutorial narration. Create dynamic audio that responds to player choices without expensive voice actor sessions for every variation.</p>
              <strong>Use cases:</strong> Game dialogue, character voices, audio narration, interactive storytelling
            </div>

            <div className="app-card">
              <span className="app-icon">📱</span>
              <h4>Apps & Software</h4>
              <p>Add voice features to applications, create audio notifications, and develop voice-guided experiences. Implement text-to-speech for accessibility features and user preference customization.</p>
              <strong>Use cases:</strong> App notifications, navigation systems, assistive technology, smart home devices
            </div>
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
        <h2 id="how-it-works-title">How to Generate AI Voices in 3 Simple Steps</h2>
        <p className="section-description">
          Our advanced AI text-to-speech technology makes voice generation effortless. No technical skills needed - just type, select, and download your professional audio.
        </p>
        <div className="steps-grid" role="list">
          <motion.article className="step-card" whileHover={{ scale: 1.05 }} role="listitem">
            <div className="step-number" aria-label="Step 1">1</div>
            <h3>Type Your Text</h3>
            <p>Enter any text up to 5,000 characters. Perfect for scripts, articles, or presentations. Our AI handles natural phrasing and intonation automatically.</p>
          </motion.article>
          <motion.article className="step-card" whileHover={{ scale: 1.05 }} role="listitem">
            <div className="step-number" aria-label="Step 2">2</div>
            <h3>Choose Voice & Language</h3>
            <p>Select from 40+ realistic AI voices across 20+ languages. Filter by gender, accent, and style to find the perfect voice for your project.</p>
          </motion.article>
          <motion.article className="step-card" whileHover={{ scale: 1.05 }} role="listitem">
            <div className="step-number" aria-label="Step 3">3</div>
            <h3>Generate & Download</h3>
            <p>Get your high-quality MP3 audio in seconds. Use immediately in videos, podcasts, or any multimedia project. Commercial use allowed.</p>
          </motion.article>
        </div>
      </motion.div>
    </section>

    {/* NEW: Voice Selection Guide Section */}
    <section className="voice-selection-guide" role="region" aria-labelledby="guide-title">
      <div className="container">
        <h2 id="guide-title">Choosing the Right AI Voice: Complete Selection Guide</h2>
        <p className="section-description">
          Select the perfect voice for your project by understanding voice characteristics, accents, and emotional tone matching.
        </p>

        <div className="guide-content">
          <article className="guide-section">
            <h3>Understanding Voice Characteristics</h3>
            <div className="characteristics-grid">
              <div className="char-card">
                <h4>🎤 Gender & Age</h4>
                <p><strong>Male voices</strong> often convey authority and are preferred for corporate, technical, and news content. <strong>Female voices</strong> are associated with approachability, commonly used in customer service, education, and lifestyle content. Consider your target audience and brand personality.</p>
                <ul>
                  <li>Male: Professional, authoritative, technical documentation</li>
                  <li>Female: Friendly, educational, customer-facing content</li>
                  <li>Neutral: Inclusive, accessible, diverse audience reach</li>
                </ul>
              </div>

              <div className="char-card">
                <h4>🌍 Accent & Region</h4>
                <p>Regional accents significantly impact listener connection. <strong>American English</strong> is globally recognized, <strong>British English</strong> adds sophistication, and <strong>Australian English</strong> brings casual friendliness. Match accents to your target market for maximum relatability.</p>
                <ul>
                  <li>US: Global content, tech, entertainment</li>
                  <li>UK: Professional, luxury brands, formal content</li>
                  <li>Australian: Casual, lifestyle, adventure content</li>
                  <li>Indian: Tech tutorials, business process content</li>
                </ul>
              </div>

              <div className="char-card">
                <h4>🎭 Tone & Emotion</h4>
                <p>Voice tone dramatically affects message perception. <strong>Enthusiastic voices</strong> engage viewers in promotional content, <strong>calm tones</strong> work for meditation or ASMR, and <strong>professional voices</strong> suit corporate environments. Our voice variations include different emotional styles.</p>
                <ul>
                  <li>Enthusiastic: Marketing, sales, motivational content</li>
                  <li>Calm: Meditation, ASMR, bedtime stories, relaxation</li>
                  <li>Professional: Corporate training, news, documentation</li>
                  <li>Conversational: Podcasts, vlogs, friendly explanations</li>
                </ul>
              </div>

              <div className="char-card">
                <h4>⚡ Speaking Speed & Pace</h4>
                <p>Adjust speaking rate to match content complexity. <strong>Faster pace</strong> (150-160 WPM) suits entertainment and casual content. <strong>Medium pace</strong> (130-150 WPM) works for most applications. <strong>Slower pace</strong> (100-120 WPM) helps with technical explanations or language learning.</p>
                <ul>
                  <li>Fast: Social media, comedy, energetic content</li>
                  <li>Medium: Standard narration, presentations, articles</li>
                  <li>Slow: Technical tutorials, language learning, emphasis</li>
                </ul>
              </div>
            </div>
          </article>

          <article className="guide-section">
            <h3>Content Type & Voice Matching Strategy</h3>
            <div className="matching-table">
              <div className="match-row">
                <div className="match-content-type">
                  <strong>📺 YouTube Videos & Vlogs</strong>
                  <p>Entertainment, tutorials, reviews</p>
                </div>
                <div className="match-recommendation">
                  <p><strong>Best Choice:</strong> Conversational, medium-paced, friendly tone</p>
                  <p><em>Why:</em> Builds rapport with viewers, maintains engagement, feels personal and authentic</p>
                </div>
              </div>

              <div className="match-row">
                <div className="match-content-type">
                  <strong>💼 Corporate Training</strong>
                  <p>Employee onboarding, compliance, skills development</p>
                </div>
                <div className="match-recommendation">
                  <p><strong>Best Choice:</strong> Professional, clear articulation, neutral accent</p>
                  <p><em>Why:</em> Conveys authority, maintains professionalism, minimizes distraction</p>
                </div>
              </div>

              <div className="match-row">
                <div className="match-content-type">
                  <strong>📚 E-Learning & Courses</strong>
                  <p>Online education, tutorials, instructional content</p>
                </div>
                <div className="match-recommendation">
                  <p><strong>Best Choice:</strong> Patient, medium-slow pace, encouraging tone</p>
                  <p><em>Why:</em> Aids comprehension, supports learning retention, feels supportive</p>
                </div>
              </div>

              <div className="match-row">
                <div className="match-content-type">
                  <strong>📻 Podcasts & Audio Stories</strong>
                  <p>Narrative content, interviews, storytelling</p>
                </div>
                <div className="match-recommendation">
                  <p><strong>Best Choice:</strong> Expressive, varied intonation, character voices</p>
                  <p><em>Why:</em> Captivates listeners, conveys emotion, maintains audio interest</p>
                </div>
              </div>

              <div className="match-row">
                <div className="match-content-type">
                  <strong>📱 App Notifications & IVR</strong>
                  <p>Voice assistants, navigation, alerts</p>
                </div>
                <div className="match-recommendation">
                  <p><strong>Best Choice:</strong> Clear, concise, neutral and professional</p>
                  <p><em>Why:</em> Ensures clarity, reduces confusion, maintains user trust</p>
                </div>
              </div>

              <div className="match-row">
                <div className="match-content-type">
                  <strong>🎬 Documentaries & Films</strong>
                  <p>Storytelling, historical content, nature films</p>
                </div>
                <div className="match-recommendation">
                  <p><strong>Best Choice:</strong> Rich, authoritative, dramatic intonation</p>
                  <p><em>Why:</em> Commands attention, adds gravitas, enhances storytelling</p>
                </div>
              </div>
            </div>
          </article>

          <article className="guide-section">
            <h3>Testing & Optimization Tips</h3>
            <div className="tips-grid">
              <div className="tip-card">
                <span className="tip-number">1</span>
                <h4>Preview Multiple Voices</h4>
                <p>Always test 3-5 voices before committing to production. What sounds good in your head may sound different in practice. Use our demo playback feature to compare vocal characteristics, accents, and emotional tone.</p>
              </div>

              <div className="tip-card">
                <span className="tip-number">2</span>
                <h4>Consider Your Audience</h4>
                <p>Survey your target demographic's preferences. A/B test different voices with small audience samples. Track engagement metrics (completion rates, click-throughs) to identify which voices resonate most with your specific audience.</p>
              </div>

              <div className="tip-card">
                <span className="tip-number">3</span>
                <h4>Match Brand Identity</h4>
                <p>Your voice should reflect your brand personality. Tech startups might choose energetic, modern voices. Luxury brands prefer sophisticated, measured tones. Ensure consistency across all audio touchpoints.</p>
              </div>

              <div className="tip-card">
                <span className="tip-number">4</span>
                <h4>Test Different Content Types</h4>
                <p>A voice perfect for product descriptions might not suit tutorial content. Generate short samples of different content types before full production. Adjust voice selection based on specific use case requirements.</p>
              </div>

              <div className="tip-card">
                <span className="tip-number">5</span>
                <h4>Optimize for Platform</h4>
                <p>TikTok audiences prefer energetic, fast-paced voices. LinkedIn favors professional, measured tones. YouTube supports diverse styles. Customize voice selection based on where your content will be published.</p>
              </div>

              <div className="tip-card">
                <span className="tip-number">6</span>
                <h4>Monitor Feedback</h4>
                <p>Track viewer/listener comments about narration quality. Pay attention to completion rates and drop-off points. User feedback provides invaluable insights for voice optimization and future selection.</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    {/* ORIGINAL Features Section */}
    <section className="features-section" id="features" role="region" aria-labelledby="features-title">
      <div className="container">
        <h2 id="features-title">Why Choose Our AI Voice Generator?</h2>
        <p className="section-description">
          Experience professional-grade text-to-speech powered by cutting-edge AI. Create compelling audio content without expensive voice actors or complex recording setups.
        </p>
        <div className="features-grid" role="list">
          <article className="feature-card" role="listitem">
            <span className="feature-icon" aria-hidden="true">⚡</span>
            <h3>Instant Generation</h3>
            <p>Advanced neural networks synthesize speech in under 3 seconds. No rendering wait times - get production-ready audio immediately for time-sensitive projects.</p>
          </article>
          <article className="feature-card" role="listitem">
            <span className="feature-icon" aria-hidden="true">🎯</span>
            <h3>Natural & Expressive</h3>
            <p>Our AI voices capture human-like intonation, emotion, and pacing. Trained on diverse datasets for authentic delivery that engages listeners and conveys meaning.</p>
          </article>
          <article className="feature-card" role="listitem">
            <span className="feature-icon" aria-hidden="true">🆓</span>
            <h3>Unlimited Free Access</h3>
            <p>13,500 characters monthly included free. No subscriptions, no watermarks, full commercial rights. Upgrade for unlimited generation and premium voices.</p>
          </article>
          <article className="feature-card" role="listitem">
            <span className="feature-icon" aria-hidden="true">🌍</span>
            <h3>Multi-Language Support</h3>
            <p>Generate speech in English, Spanish, French, German, Chinese, and 20+ languages. Perfect for global content, international marketing, and multilingual projects.</p>
          </article>
          <article className="feature-card" role="listitem">
            <span className="feature-icon" aria-hidden="true">📱</span>
            <h3>Mobile Optimized</h3>
            <p>Fully responsive interface works seamlessly on all devices. Create professional voiceovers on-the-go with the same powerful AI capabilities.</p>
          </article>
        </div>
      </div>
    </section>

    {/* NEW: Technical Comparison Section */}
    <section className="comparison-section" role="region" aria-labelledby="comparison-title">
      <div className="container">
        <h2 id="comparison-title">AI Voice Generation vs Traditional Voice Recording: Complete Comparison</h2>
        <p className="section-description">
          Understand the key differences between AI-generated voices and traditional voice actor recordings to make informed decisions for your projects.
        </p>

        <div className="comparison-table-wrapper">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>AI Voice Generation</th>
                <th>Traditional Recording</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Cost</strong></td>
                <td>✅ Free to $50/month unlimited<br/><span className="detail">$0 per audio file generated</span></td>
                <td>❌ $100-$500 per hour<br/><span className="detail">Plus studio, editing, retake fees</span></td>
              </tr>
              <tr>
                <td><strong>Speed</strong></td>
                <td>✅ 3 seconds per generation<br/><span className="detail">Instant delivery, no scheduling needed</span></td>
                <td>❌ Days to weeks<br/><span className="detail">Scheduling, recording, editing, revisions</span></td>
              </tr>
              <tr>
                <td><strong>Revisions</strong></td>
                <td>✅ Unlimited free edits<br/><span className="detail">Change text and regenerate instantly</span></td>
                <td>❌ $50-$200 per revision<br/><span className="detail">Re-booking talent, studio time required</span></td>
              </tr>
              <tr>
                <td><strong>Consistency</strong></td>
                <td>✅ 100% consistent quality<br/><span className="detail">Same voice, tone, quality every time</span></td>
                <td>⚠️ Variable quality<br/><span className="detail">Dependent on talent energy, health, environment</span></td>
              </tr>
              <tr>
                <td><strong>Languages</strong></td>
                <td>✅ 20+ languages instantly<br/><span className="detail">Native-sounding voices for each language</span></td>
                <td>❌ Separate talent per language<br/><span className="detail">Expensive, hard to find quality bilingual talent</span></td>
              </tr>
              <tr>
                <td><strong>Scalability</strong></td>
                <td>✅ Generate 1000s of files<br/><span className="detail">Batch processing, automation friendly</span></td>
                <td>❌ Limited by talent availability<br/><span className="detail">Expensive, time-consuming for volume</span></td>
              </tr>
              <tr>
                <td><strong>Voice Options</strong></td>
                <td>✅ 40+ voices available<br/><span className="detail">Filter by gender, age, accent, style</span></td>
                <td>⚠️ 1 voice per hired talent<br/><span className="detail">Need multiple talents for variety</span></td>
              </tr>
              <tr>
                <td><strong>Emotional Range</strong></td>
                <td>⚠️ Growing emotion capabilities<br/><span className="detail">Best for neutral, professional, enthusiastic tones</span></td>
                <td>✅ Full emotional spectrum<br/><span className="detail">Subtle nuances, complex emotions, improvisation</span></td>
              </tr>
              <tr>
                <td><strong>Character Voices</strong></td>
                <td>⚠️ Limited character work<br/><span className="detail">Best for standard narration and dialogue</span></td>
                <td>✅ Unlimited character range<br/><span className="detail">Unique accents, vocal effects, creative voices</span></td>
              </tr>
              <tr>
                <td><strong>Brand Authenticity</strong></td>
                <td>⚠️ Professional but generic<br/><span className="detail">May lack unique brand personality</span></td>
                <td>✅ Custom brand voice<br/><span className="detail">Signature sound, personality alignment</span></td>
              </tr>
              <tr>
                <td><strong>Technical Quality</strong></td>
                <td>✅ Perfect audio quality<br/><span className="detail">No background noise, consistent levels</span></td>
                <td>⚠️ Depends on studio/equipment<br/><span className="detail">Potential for audio issues, retakes needed</span></td>
              </tr>
              <tr>
                <td><strong>Use Rights</strong></td>
                <td>✅ Full commercial rights<br/><span className="detail">No attribution, perpetual license</span></td>
                <td>⚠️ Usage rights negotiations<br/><span className="detail">May require royalties, limited license terms</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="comparison-recommendation">
          <h3>When to Choose AI Voice Generation</h3>
          <ul className="recommendation-list">
            <li>✅ <strong>Budget-conscious projects:</strong> When cost efficiency is priority without sacrificing quality</li>
            <li>✅ <strong>High-volume content:</strong> Multiple videos, courses, or audio files requiring consistent narration</li>
            <li>✅ <strong>Fast turnarounds:</strong> Tight deadlines, last-minute changes, or rapid content production</li>
            <li>✅ <strong>Multilingual needs:</strong> Content localization across multiple languages and regions</li>
            <li>✅ <strong>Standard narration:</strong> Explainer videos, tutorials, documentation, presentations</li>
            <li>✅ <strong>Frequent updates:</strong> Content that changes regularly (product catalogs, news, schedules)</li>
            <li>✅ <strong>Testing phases:</strong> Prototyping, A/B testing scripts before investing in professional recording</li>
          </ul>

          <h3>When to Choose Traditional Recording</h3>
          <ul className="recommendation-list">
            <li>🎭 <strong>Premium brand content:</strong> Luxury brands requiring signature, distinctive voice identity</li>
            <li>🎭 <strong>Complex emotional scenes:</strong> Dramatic performances, subtle emotional nuances</li>
            <li>🎭 <strong>Character-heavy projects:</strong> Animation, audio dramas requiring unique character voices</li>
            <li>🎭 <strong>Celebrity endorsements:</strong> Brand partnerships with specific recognizable voices</li>
            <li>🎭 <strong>High-stakes marketing:</strong> Major campaigns where voice authenticity is crucial</li>
            <li>🎭 <strong>Creative audio projects:</strong> Podcasts, radio dramas, artistic works requiring improvisation</li>
          </ul>

          <div className="hybrid-approach">
            <h3>💡 Pro Tip: Hybrid Approach</h3>
            <p>
              Many successful creators combine both methods: Use <strong>AI voice generation for bulk content</strong> (tutorials, documentation, social media) and invest in <strong>professional recording for flagship content</strong> (brand videos, premium courses, major launches). This maximizes cost-efficiency while preserving premium quality where it matters most.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* ORIGINAL Use Cases Section */}
    <section className="use-cases-section" id="use-cases" role="region" aria-labelledby="use-cases-title">
      <div className="container">
        <h2 id="use-cases-title">Perfect for Every Audio Project</h2>
        <p className="section-description">
          Discover how creators and businesses use our AI voice generator to produce professional audio across industries.
        </p>
        <div className="use-cases-grid" role="list">
          <article className="use-case-card" role="listitem">
            <h3>🎥 Video Content Creation</h3>
            <p>Create engaging voiceovers for YouTube, TikTok, and explainer videos. Multiple voices and languages help localize content for global audiences.</p>
          </article>
          <article className="use-case-card" role="listitem">
            <h3>📻 Podcast Production</h3>
            <p>Generate professional intros, narration, and character voices. Save hours of recording time while maintaining broadcast-quality audio standards.</p>
          </article>
          <article className="use-case-card" role="listitem">
            <h3>💼 Business Presentations</h3>
            <p>Add compelling narration to PowerPoint, Google Slides, and corporate videos. Choose voices that match your brand personality and professional tone.</p>
          </article>
          <article className="use-case-card" role="listitem">
            <h3>🎮 Game Development</h3>
            <p>Create character voices, tutorials, and in-game narration. Diverse accents and genders provide authentic audio for immersive gaming experiences.</p>
          </article>
        </div>
      </div>
    </section>

    {/* ORIGINAL Testimonials Section */}
    <section className="testimonials-section" id="testimonials" role="region" aria-labelledby="testimonials-title">
      <div className="container">
        <h2 id="testimonials-title">Trusted by Over 25,000+ Creators Worldwide</h2>
        <p className="section-description">
          Join thousands of satisfied users who rely on our AI voice generator for their professional audio projects.
        </p>
        <div className="testimonials-grid" role="list">
          <blockquote className="testimonial-card" role="listitem">
            <p>"This tool transformed my YouTube channel! The AI voices sound incredibly natural, and I can produce videos 3x faster. The multi-language support is a game-changer for global reach."</p>
            <cite>– Alex Rivera, YouTube Creator</cite>
            <div className="rating" aria-label="5 out of 5 stars">⭐⭐⭐⭐⭐</div>
          </blockquote>
          <blockquote className="testimonial-card" role="listitem">
            <p>"As a podcaster, I've tried many TTS tools, but this one delivers broadcast-quality results. The free tier is generous, and the voice variety helps create dynamic episodes."</p>
            <cite>– Jordan Lee, Podcast Host</cite>
            <div className="rating" aria-label="5 out of 5 stars">⭐⭐⭐⭐⭐</div>
          </blockquote>
          <blockquote className="testimonial-card" role="listitem">
            <p>"Perfect for my e-learning courses. Students love the clear, engaging narration. Generating audio in multiple languages has helped expand to international markets seamlessly."</p>
            <cite>– Taylor Morgan, Course Creator</cite>
            <div className="rating" aria-label="5 out of 5 stars">⭐⭐⭐⭐⭐</div>
          </blockquote>
        </div>
      </div>
    </section>

    {/* ORIGINAL FAQ Section - Now with expanded questions */}
    <section className="faq-section" id="faq" role="region" aria-labelledby="faq-title">
      <div className="container">
        <h2 id="faq-title">Frequently Asked Questions About AI Voice Generation</h2>
        <div className="faq-grid" role="list">
          <article className="faq-item" role="listitem">
            <h3>What is AI voice generation and how does it work?</h3>
            <p>AI voice generation uses neural text-to-speech (TTS) technology to convert written text into natural-sounding speech. Our system analyzes your text, processes linguistic patterns, applies prosody (rhythm and intonation), and synthesizes audio using deep learning models trained on human voices.</p>
          </article>
          <article className="faq-item" role="listitem">
            <h3>What languages and voices are available?</h3>
            <p>We support 20+ languages including American English, UK English, Spanish, French, German, Mandarin, Hindi, and more. Each language features multiple natural-sounding voices with various genders, accents, and styles. You can filter and preview all voices before generating.</p>
          </article>
          <article className="faq-item" role="listitem">
            <h3>Is the generated audio commercial use allowed?</h3>
            <p>Yes! All AI-generated audio can be used commercially. You retain full rights to download and use the MP3 files in videos, podcasts, apps, marketing materials, and any other projects without attribution requirements.</p>
          </article>
          <article className="faq-item" role="listitem">
            <h3>How many characters can I generate for free?</h3>
            <p>The free BASIC plan includes 5,000 characters per month with a daily limit of 1,000 characters. CREATOR plan offers 50,000 characters/month with 5,000 characters/day. STUDIO plan provides 150,000 characters/month with no daily limits. Each request supports up to 5,000 characters.</p>
          </article>
          <article className="faq-item" role="listitem">
            <h3>Can I adjust voice speed, pitch, or tone?</h3>
            <p>Our voices are optimized for natural delivery. While individual voice parameters aren't manually adjustable, you can choose from voice variations that include different emotional styles (calm, enthusiastic, professional) to match your content needs.</p>
          </article>
          <article className="faq-item" role="listitem">
            <h3>What audio format do I get?</h3>
            <p>All generated audio is delivered as high-quality MP3 files (128 kbps or higher). MP3 format ensures universal compatibility with video editors, audio software, websites, and all major platforms while maintaining small file sizes.</p>
          </article>
          <article className="faq-item" role="listitem">
            <h3>How natural do AI voices sound compared to humans?</h3>
            <p>Modern AI voices are remarkably natural, capturing intonation, pacing, and emotion. While they excel at standard narration and professional content, complex emotional scenes or character acting may still benefit from human voice actors. Many listeners cannot distinguish between AI and human voices in typical use cases.</p>
          </article>
          <article className="faq-item" role="listitem">
            <h3>Can I use AI voices for YouTube monetization?</h3>
            <p>Yes! YouTube allows AI-generated voices for monetized content. Ensure your overall content meets YouTube's originality requirements (unique visuals, valuable information, etc.). Many successful monetized channels use AI narration for faceless YouTube videos, tutorials, and educational content.</p>
          </article>
        </div>
      </div>
    </section>

    {/* ORIGINAL CTA Section */}
    <section className="cta-section" id="get-started" role="region" aria-labelledby="cta-title">
      <div className="container">
        <h2 id="cta-title">Ready to Create Stunning Audio?</h2>
        <p>Join over 25,000+ creators who trust our AI voice generator. Start producing professional voiceovers for your videos, podcasts, and projects today - completely free!</p>
        <button
          className="cta-button"
          onClick={() => {
            if (!isLoggedIn) {
              setShowLoginModal(true);
            } else {
              scrollToSection('hero');
            }
          }}
          aria-label="Start using the free AI voice generator tool"
        >
          {isLoggedIn ? 'Generate Voice Now - Free!' : 'Login to Start Generating'}
        </button>
        <div className="cta-features">
          <span>⚡ Instant generation</span>
          <span>🔒 Secure & private</span>
        </div>
      </div>
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

      <PremiumUpgradePopup 
        isOpen={showPremiumPopup} 
        onClose={handleClosePremiumPopup} 
      />      
    </div>
  );
};

export default AIVoiceGeneratorClient;