"use client";

import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import axios from 'axios';
import { motion } from 'framer-motion';
import { API_BASE_URL, CDN_URL } from '../../../config';
import { FaTimes } from 'react-icons/fa';
import '../../../../../styles/tools/AIVoiceGenerator.css';

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
  voiceId?: string;
  provider?: string;
  description?: string;
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

const SCRIPT_TEMPLATES = [
  {
    id: 1,
    title: "YouTube Video Intro",
    category: "Content Creation",
    icon: "🎬",
    script: "Hey everyone! Welcome back to the channel. If you're new here, don't forget to hit that subscribe button and turn on notifications so you never miss a video. Today, we're going to dive into something really exciting, so let's get started!"
  },
  {
    id: 2,
    title: "Podcast Introduction",
    category: "Podcasting",
    icon: "🎙️",
    script: "Hello and welcome to another episode of [Your Podcast Name]. I'm your host [Your Name], and today we have an incredible conversation lined up for you. Before we dive in, a quick reminder to subscribe wherever you listen to podcasts and leave us a review if you're enjoying the show."
  },
  {
    id: 3,
    title: "Product Demo",
    category: "Marketing",
    icon: "📦",
    script: "Introducing our latest innovation that's about to transform the way you work. This product combines cutting-edge technology with user-friendly design to deliver results you can see immediately. Let me show you exactly how it works and why thousands of customers are already making the switch."
  },
  {
    id: 4,
    title: "Educational Tutorial",
    category: "Education",
    icon: "📚",
    script: "In this tutorial, we'll walk through the fundamentals step by step. Don't worry if you're a complete beginner - I'll explain everything in simple terms with practical examples. By the end of this lesson, you'll have a solid understanding of the key concepts and be ready to apply them yourself."
  },
  {
    id: 5,
    title: "Meditation Guide",
    category: "Wellness",
    icon: "🧘",
    script: "Find a comfortable position and gently close your eyes. Take a deep breath in through your nose, filling your lungs completely. Hold for a moment. Now slowly exhale through your mouth, releasing any tension. Continue breathing naturally as you bring your awareness to the present moment."
  },
  {
    id: 6,
    title: "News Report",
    category: "News",
    icon: "📰",
    script: "Good evening. Our top story tonight: Breaking developments continue to unfold as experts weigh in on the situation. We'll bring you the latest updates, expert analysis, and what this means for you. Stay tuned for comprehensive coverage throughout the hour."
  },
  {
    id: 7,
    title: "Motivational Speech",
    category: "Inspiration",
    icon: "💪",
    script: "Every single one of you has the power to achieve greatness. It doesn't matter where you came from or what obstacles you've faced. What matters is the decision you make right now, in this moment, to take action. Your future self is counting on you to start today. So let's make it happen!"
  },
  {
    id: 8,
    title: "E-commerce Product Description",
    category: "E-commerce",
    icon: "🛍️",
    script: "Discover the perfect blend of style and functionality with our premium collection. Crafted from high-quality materials and designed with attention to every detail, this product delivers exceptional value. Available in multiple colors and sizes. Order now and enjoy free shipping on orders over fifty dollars."
  },
  {
    id: 9,
    title: "Customer Service Message",
    category: "Business",
    icon: "💼",
    script: "Thank you for contacting our support team. We appreciate your patience and value your business. Our team is working diligently to resolve your inquiry and will provide a solution within 24 hours. If you need immediate assistance, please don't hesitate to reach out to our priority support line."
  },
  {
    id: 10,
    title: "Bedtime Story Opening",
    category: "Entertainment",
    icon: "🌙",
    script: "Once upon a time, in a magical land far, far away, there lived a curious little adventurer who was about to embark on the journey of a lifetime. As the stars began to twinkle in the evening sky, our story begins. So snuggle in, close your eyes, and let your imagination soar."
  },
  {
    id: 11,
    title: "App Tutorial",
    category: "Technology",
    icon: "📱",
    script: "Welcome to the quick start guide. In just a few minutes, you'll learn how to navigate the main features and get the most out of this app. I'll show you the essential tools you need to know, along with some pro tips that will save you time. Let's jump right in."
  },
  {
    id: 12,
    title: "Event Announcement",
    category: "Events",
    icon: "🎉",
    script: "Mark your calendars! We're thrilled to announce our upcoming event that you won't want to miss. Join us for an unforgettable experience featuring special guests, exclusive content, and exciting surprises. Limited spots available, so register early to secure your place. We can't wait to see you there!"
  },
  {
    id: 13,
    title: "Recipe Instructions",
    category: "Cooking",
    icon: "👨‍🍳",
    script: "Today we're making a delicious dish that's both simple and impressive. Start by gathering all your ingredients - I'll wait. Now, preheat your oven to 350 degrees. In a large bowl, combine the dry ingredients and mix well. Set aside while we prepare the wet ingredients in a separate bowl."
  },
  {
    id: 14,
    title: "Workout Motivation",
    category: "Fitness",
    icon: "🏋️",
    script: "Alright team, let's bring that energy! Remember why you started. Every rep, every set, every drop of sweat is bringing you closer to your goals. Push through the burn - that's where the magic happens. You're stronger than you think. Let's finish strong! Three, two, one - let's go!"
  },
  {
    id: 15,
    title: "Call-to-Action Outro",
    category: "Marketing",
    icon: "👆",
    script: "If you found this valuable, make sure to like and share it with someone who needs to hear this. Don't forget to follow us for more content just like this. Have questions or suggestions? Drop them in the comments below - we read every single one. Thanks for watching, and we'll see you in the next one!"
  }
];

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
    balance: number;
    planType: string;
    maxCharsPerRequest: number;
    isPaid: boolean;
    creditCostPer100Chars: number;
    freeVoiceCharsUsed?: number;
    freeVoiceCharsLimit?: number;
    externalProviders?: { hasAccess: boolean; };
  } | null>(null);
  const characterCount = useMemo(() => aiVoiceText.length, [aiVoiceText]);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [showFirstGenBanner, setShowFirstGenBanner] = useState(false);
  const [showRepeatGenBanner, setShowRepeatGenBanner] = useState(false);
  const [showLimitModal, setShowLimitModal] = useState(false);
  const [showDownloadToast, setShowDownloadToast] = useState(false);
  const [generationCount, setGenerationCount] = useState(0);
  const [show15SecPopup, setShow15SecPopup] = useState(false);
  const [generationHistory, setGenerationHistory] = useState<Array<{
    id: number;
    audioPath: string;
    createdAt: string;
  }>>([]);
  const [hasHistoryAccess, setHasHistoryAccess] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [historyLoading, setHistoryLoading] = useState(false); 
  const [showScriptTemplates, setShowScriptTemplates] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All'); 
  const [selectedProvider, setSelectedProvider] = useState<'GOOGLE' | 'OPENAI' | 'AZURE'>('GOOGLE');
  const [externalVoices, setExternalVoices] = useState<(Voice & { voiceId?: string })[]>([]);
  const [externalVoicesLoading, setExternalVoicesLoading] = useState(false); 
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [upgradeModalType, setUpgradeModalType] = useState<'first_gen' | 'repeat_gen' | 'download' | 'limit_warning'>('first_gen');  
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);  
  const [activePlans, setActivePlans] = useState<string[]>([]);
  const isPaidUser = activePlans.length > 0;
  const [speed, setSpeed] = useState<number>(1.0);
  const [speedInput, setSpeedInput] = useState<string>('1');

  const hasSpeedAccess = useMemo(() => {
    if (!isLoggedIn || !ttsUsage) return false;
    return ttsUsage.isPaid;
  }, [isLoggedIn, ttsUsage]); 

  useEffect(() => {
    if (!isLoggedIn || !ttsUsage) return;
    if (ttsUsage.isPaid) return;
    const used = ttsUsage.freeVoiceCharsUsed ?? 0;
    const limit = ttsUsage.freeVoiceCharsLimit ?? 1;
    if (used / limit >= 0.70 && used / limit < 1.0 && !showLimitModal) {
      setShowLimitModal(true);
    }
  }, [ttsUsage, isLoggedIn]);

  useEffect(() => {
  const fetchActivePlans = async () => {
    if (!isLoggedIn) {
      setActivePlans([]);
      return;
    }
    try {
      const response = await fetch(`${API_BASE_URL}/api/payments/active-plans`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      if (response.ok) {
        const data = await response.json();
        setActivePlans(data.map((p: any) => p.planType));
      }
    } catch (error) {
      console.error('Error fetching active plans:', error);
    }
  };
  fetchActivePlans();
}, [isLoggedIn]);

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

  const handlePlayDemo = (voice: Voice, useEmotion: boolean = false) => {
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
  
    // Construct demo URL based on provider
    let demoUrl: string;

    if (voice.provider === 'OPENAI') {
      const genderFolder = voice.gender.toUpperCase(); // NEUTRAL, MALE, FEMALE
      const demoFileName = `${voice.humanName}.mp3`;
      demoUrl = `${CDN_URL}/AiVoicesDemo/OpenAI/${genderFolder}/${demoFileName}`;
    } else if (voice.provider === 'AZURE') {
      const genderFolder = voice.gender.toUpperCase();
      const demoFileName = `${voice.humanName}.mp3`;
      demoUrl = `${CDN_URL}/AiVoicesDemo/Azure/${genderFolder}/${demoFileName}`;
    } else {
      // Google voices (existing logic)
      const genderFolder = voice.gender.toUpperCase();
      const languageFolder = voice.language.replace(/\s*\(.*?\)\s*/g, '').trim().replace(/\s+/g, '%20');
      let demoFileName;
      if (voice.voiceStyle) {
        const styleCapitalized = voice.voiceStyle.charAt(0).toUpperCase() + voice.voiceStyle.slice(1);
        const baseName = voice.humanName?.split('-')[0] || voice.voiceName;
        demoFileName = `${baseName}-${styleCapitalized}.mp3`;
      } else {
        demoFileName = `${voice.humanName || voice.voiceName}.mp3`;
      }
      demoUrl = `${CDN_URL}/AiVoicesDemo/${languageFolder}/${genderFolder}/${demoFileName}`;
    }
    
    console.log('🎵 Playing demo:', demoUrl);
  
    // Create and play audio
    const audio = new Audio(demoUrl);
    
    audio.playbackRate = hasSpeedAccess ? speed : 1.0;
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
    const fetchMetadata = async () => {
      try {
        const token = localStorage.getItem('token');
        const headers: HeadersInit = {};
        if (token) {
          headers.Authorization = `Bearer ${token}`;
        }
        
        const response = await fetch(`${API_BASE_URL}/api/ai-voices/get-all-voices`, {
          headers,
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
  }, []);

  // Fetch filtered voices based on language and gender
  useEffect(() => {
    const fetchFilteredVoices = async () => {
      try {
        const token = localStorage.getItem('token');
        const headers: HeadersInit = {};
        if (token) {
          headers.Authorization = `Bearer ${token}`;
        }
        
        let url = `${API_BASE_URL}/api/ai-voices/get-all-voices`;
        if (filterLanguage && filterGender) {
          url = `${API_BASE_URL}/api/ai-voices/voices-by-language-and-gender?language=${encodeURIComponent(filterLanguage)}&gender=${encodeURIComponent(filterGender)}`;
        } else if (filterLanguage) {
          url = `${API_BASE_URL}/api/ai-voices/voices-by-language?language=${encodeURIComponent(filterLanguage)}`;
        } else if (filterGender) {
          url = `${API_BASE_URL}/api/ai-voices/voices-by-gender?gender=${encodeURIComponent(filterGender)}`;
        }

        const response = await fetch(url, {
          headers,
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
  }, [filterLanguage, filterGender]);

  useEffect(() => {
    if (isLoggedIn) {
      fetchHistory();
    }
  }, [isLoggedIn]);  

  useEffect(() => {
    if (selectedProvider === 'GOOGLE') return;
    setExternalVoicesLoading(true);
    const token = localStorage.getItem('token');
    fetch(`${API_BASE_URL}/api/ai-voices/external-voices?provider=${selectedProvider}`, {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    })
      .then(r => r.json())
      .then(data => setExternalVoices(data || []))
      .catch(() => setExternalVoices([]))
      .finally(() => setExternalVoicesLoading(false));
  }, [selectedProvider]);  

 useEffect(() => {
    if (isPaidUser) return;
    const timer = setTimeout(() => {
      setShowWelcomeModal(true);
    }, 6000);
    return () => clearTimeout(timer);
  }, [isPaidUser]);

  useEffect(() => {
    try {
      const hindiScript = sessionStorage.getItem('microToolScript');
      if (hindiScript) {
        setAiVoiceText(hindiScript);
        sessionStorage.removeItem('microToolScript');
        setTimeout(() => {
          const el = document.querySelector('.ai-voice-textarea') as HTMLTextAreaElement;
          if (el) el.focus();
        }, 300);
      }
    } catch {}
  }, []);  

  const handleGenerateAiAudio = async () => {
    if (!isLoggedIn) {
      setShowLoginModal(true);
      return;
    }

    if (selectedProvider !== 'GOOGLE' && !ttsUsage?.isPaid) {
      window.location.href = '/pricing';
      return;
    }    

    if (!aiVoiceText.trim() || !selectedVoice) {
      setError('Please enter text and select a voice.');
      return;
    }
    if (aiVoiceText.length > maxCharsPerRequest) {
      setError(`Text exceeds the maximum limit of ${maxCharsPerRequest.toLocaleString()} characters per request.`);
      setTimeout(() => document.querySelector('.error-message')?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 100);
      setTimeout(() => setError(null), 10000);
      return;
    }
    
    if (ttsUsage) {
      if (!ttsUsage.isPaid) {
        const remaining = (ttsUsage.freeVoiceCharsLimit ?? 0) - (ttsUsage.freeVoiceCharsUsed ?? 0);
        if (aiVoiceText.length > remaining) {
          setError(`This request would exceed your free limit. You have ${remaining.toLocaleString()} characters remaining, but this text is ${aiVoiceText.length.toLocaleString()} characters long.`);
          setTimeout(() => document.querySelector('.error-message')?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 100);
          setTimeout(() => setError(null), 10000);
          return;
        }
      } else {
        const creditsNeeded = Math.ceil(aiVoiceText.length / 100);
        if (ttsUsage.balance < creditsNeeded) {
          setError(`Insufficient credits. This text needs ${creditsNeeded} credit${creditsNeeded !== 1 ? 's' : ''}, but you only have ${ttsUsage.balance}.`);
          setTimeout(() => document.querySelector('.error-message')?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 100);
          setTimeout(() => setError(null), 10000);
          return;
        }
      }
    }
    
    setIsGenerating(true);
    setError(null);
    try {
      const isExternalProvider = selectedProvider !== 'GOOGLE';
          
      const requestBody: any = isExternalProvider
        ? {
            text: aiVoiceText,
            voiceId: selectedVoice.voiceId || selectedVoice.voiceName,
            provider: selectedProvider,
            speed: hasSpeedAccess ? speed : 1.0,
          }
        : {
            text: aiVoiceText,
            voiceName: selectedVoice.voiceName,
            languageCode: selectedVoice.languageCode,
            speed: hasSpeedAccess ? speed : 1.0,
          };
        
      const endpoint = isExternalProvider
        ? `${API_BASE_URL}/api/sole-tts/generate-external`
        : `${API_BASE_URL}/api/sole-tts/generate`;
        
      const response = await fetch(endpoint, {
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
      fetchHistory();

      const currentCount = generationCount + 1;
      setGenerationCount(currentCount);

      if (userProfile?.role === 'BASIC') {
        if (currentCount === 1) {
          setTimeout(() => {
            setUpgradeModalType('first_gen');
            setShowUpgradeModal(true);
          }, 4000); // 4s delay — let them hear the audio first, THEN hit them
        } else if (currentCount === 2) {
          setTimeout(() => {
            setUpgradeModalType('repeat_gen');
            setShowUpgradeModal(true);
          }, 3000);
        } else if (currentCount >= 3) {
          // Every 3rd gen after that
          if (currentCount % 2 === 1) {
            setTimeout(() => {
              setUpgradeModalType('repeat_gen');
              setShowUpgradeModal(true);
            }, 2000);
          }
        }
      }   
  
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
    
      setTimeout(() => {
        const errorElement = document.querySelector('.error-message');
        if (errorElement) {
          errorElement.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' 
          });
        }
      }, 100);
    
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
        setDownloadSuccess(true);
        if (!isPaidUser) {
          setTimeout(() => {
            setUpgradeModalType('download');
            setShowUpgradeModal(true);
          }, 1200);
        }
        setTimeout(() => setDownloadSuccess(false), 15000);
      } catch (error) {
        console.error('Download failed:', error);
        // Fallback to opening in new tab if download fails
        window.open(generatedAudio, '_blank');
      }
    }
  };

  const fetchHistory = async () => {
    if (!isLoggedIn) return;
    
    setHistoryLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/api/sole-tts/history`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
  
      if (response.ok) {
        const data = await response.json();
        setGenerationHistory(data.history || []);
        setHasHistoryAccess(data.hasAccess);
      } else if (response.status === 403) {
        const errorData = await response.json();
        setHasHistoryAccess(false);
        setGenerationHistory([]);
      }
    } catch (error) {
      console.error('Error fetching history:', error);
    } finally {
      setHistoryLoading(false);
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

  const isLimitsExceeded = useCallback(() => {
    if (!isLoggedIn || !ttsUsage) return false;
    if (ttsUsage.isPaid) return ttsUsage.balance <= 0;
    return (ttsUsage.freeVoiceCharsUsed ?? 0) >= (ttsUsage.freeVoiceCharsLimit ?? 0);
  }, [isLoggedIn, ttsUsage]); 

  const maxCharsPerRequest = useMemo(() => {
    if (!isLoggedIn || !ttsUsage) return 80;
    return ttsUsage.maxCharsPerRequest || 80;
  }, [isLoggedIn, ttsUsage]);
  
  const limitsExceeded = useMemo(() => {
    if (!isLoggedIn || !ttsUsage) return false;
    if (ttsUsage.isPaid) return ttsUsage.balance <= 0;
    return (ttsUsage.freeVoiceCharsUsed ?? 0) >= (ttsUsage.freeVoiceCharsLimit ?? 0);
  }, [isLoggedIn, ttsUsage]);
  
  const wouldExceedLimits = useMemo(() => {
    if (!isLoggedIn || !ttsUsage) return false;
    if (ttsUsage.isPaid) {
      const creditsNeeded = Math.ceil(aiVoiceText.length / 100);
      return ttsUsage.balance < creditsNeeded;
    }
    const remaining = (ttsUsage.freeVoiceCharsLimit ?? 0) - (ttsUsage.freeVoiceCharsUsed ?? 0);
    return aiVoiceText.length > remaining;
  }, [isLoggedIn, ttsUsage, aiVoiceText.length]);  

  const disabledReason = useMemo((): string | null => {
    if (!isLoggedIn) return null;
    if (!aiVoiceText.trim()) return "Please enter some text to generate voice";
    if (!selectedVoice) return "Please select a voice before generating";
    if (isGenerating) return "Audio generation in progress...";
    if (wouldExceedLimits) {
      if (ttsUsage?.isPaid) {
        const creditsNeeded = Math.ceil(aiVoiceText.length / 100);
        return `Insufficient credits. Need ${creditsNeeded}, have ${ttsUsage.balance}`;
      }
      const remaining = (ttsUsage?.freeVoiceCharsLimit ?? 0) - (ttsUsage?.freeVoiceCharsUsed ?? 0);
      return `Would exceed free limit. You have ${remaining.toLocaleString()} free characters remaining`;
    }
    return null;
  }, [isLoggedIn, aiVoiceText, selectedVoice, isGenerating, characterCount, maxCharsPerRequest, wouldExceedLimits, ttsUsage]);   

  const handleTextChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAiVoiceText(e.target.value);
  }, []);
  
  const handleVoiceSelect = useCallback((voice: Voice) => {
    setSelectedVoice(voice);
  }, []);
  
  const handleScriptSelect = useCallback((script: string) => {
    setAiVoiceText(script);
    setShowScriptTemplates(false);
    
    setTimeout(() => {
      const textareaSection = document.querySelector('.text-input-section');
      if (textareaSection) {
        textareaSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  }, []);
  
  const toggleScriptTemplates = useCallback(() => {
    setShowScriptTemplates(prev => !prev);
  }, []);
  
  const toggleHistory = useCallback(() => {
    setShowHistory(prev => !prev);
  }, []);

return (
  <div className="ai-voice-generator-page">
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
          <span itemProp="name">AI Voice Generator</span>
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
              '@id': 'https://scenith.in/tools/ai-voice-generation#webapp',
              name: 'Scenith AI Voice Generator',
              description: 'Free AI-powered text-to-speech tool for generating natural-sounding voices from text in 20+ languages with 40+ realistic voices.',
              url: 'https://scenith.in/tools/ai-voice-generation',
              applicationCategory: 'MultimediaApplication',
              operatingSystem: 'Web Browser',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
                availability: 'https://schema.org/InStock'
              },
              featureList: [
                '40+ natural AI voices',
                '20+ languages supported',
                'Instant MP3 download',
                'Commercial use allowed',
                'No watermarks'
              ],
              screenshot: 'https://scenith.in/images/AIVoiceGenerationSS.png',
              author: {
                '@type': 'Organization',
                '@id': 'https://scenith.in/#organization',
                name: 'Scenith'
              }
            },
            {
              '@type': 'BreadcrumbList',
              '@id': 'https://scenith.in/tools/ai-voice-generation#breadcrumb',
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
                  name: 'AI Voice Generator',
                  item: 'https://scenith.in/tools/ai-voice-generation'
                }
              ]
            },
            {
              '@type': 'FAQPage',
              '@id': 'https://scenith.in/tools/ai-voice-generation#faq',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'What is AI voice generation?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'AI voice generation uses neural text-to-speech (TTS) technology to convert written text into natural-sounding speech. It analyzes your text, processes linguistic patterns, applies prosody (rhythm and intonation), and synthesizes audio using deep learning models trained on human voices.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'Is AI voice generation free?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes! The free BASIC plan includes 600 characters per month with a daily limit of 150 characters. All generated audio can be used commercially with full rights, no watermarks, and instant MP3 downloads.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'How many languages does the AI voice generator support?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'We support 20+ languages including English (US, UK, Australian, Indian accents), Spanish, French, German, Mandarin, Hindi, Portuguese, and more. Each language features multiple natural-sounding voices with various genders and styles.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'Can I use AI-generated voices for YouTube?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes! YouTube allows AI-generated voices for monetized content. You retain full commercial rights to download and use the MP3 files in videos, podcasts, apps, and marketing materials without attribution requirements.'
                  }
                }
              ]
            },
            {
              '@type': 'HowTo',
              '@id': 'https://scenith.in/tools/ai-voice-generation#howto',
              name: 'How to Generate AI Voice from Text',
              description: 'Step-by-step guide to creating professional AI voices using text-to-speech technology',
              totalTime: 'PT2M',
              step: [
                {
                  '@type': 'HowToStep',
                  name: 'Enter Your Text',
                  text: 'Type or paste your script into the text area. You can use up to 5,000 characters per request depending on your plan.',
                  position: 1,
                },
                {
                  '@type': 'HowToStep',
                  name: 'Select Voice and Language',
                  text: 'Browse through 40+ AI voices across 20+ languages. Filter by gender, accent, and style. Play demos to preview each voice.',
                  position: 2,
                },
                {
                  '@type': 'HowToStep',
                  name: 'Generate and Download',
                  text: 'Click Generate AI Voice to create your audio in 3 seconds. Download the high-quality MP3 file for use in your projects.',
                  position: 3,
                }
              ]
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
        <h1>Free AI Voice Generator: Text to Speech Online (YouTube & Marketing)</h1>
        <p className="hero-description">
          Transform your text into lifelike AI voices instantly. Choose from 40+ natural-sounding voices across multiple languages. Perfect for{' '}
          <a href="/tools/add-subtitles-to-videos" className="inline-link">videos with subtitles</a>,{' '}
          podcasts, presentations, and content creation. Combine with our{' '}
          <a href="/tools/image-editing" className="inline-link">free image editor</a>{' '}
          for complete multimedia projects. Completely free with MP3 downloads! Manage your documents with our{' '}
          <a href="/tools/pdf-tools" className="inline-link">free PDF tools</a>.
        </p>
        <div className="hero-cta-section">
          <div className="main-content">
            <div className="text-input-section">
              <div style={{ textAlign: 'center', marginBottom: '16px' }}>
                <button
                  onClick={() => {
                    const el = document.querySelector('.user-generated-showcase');
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  style={{
                    padding: '10px 22px',
                    background: 'linear-gradient(135deg, rgba(59,130,246,0.1), rgba(139,92,246,0.1))',
                    border: '2px solid rgba(59,130,246,0.3)',
                    borderRadius: '20px',
                    color: '#3B82F6',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(59,130,246,0.15), rgba(139,92,246,0.15))';
                    e.currentTarget.style.borderColor = 'rgba(59,130,246,0.5)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(59,130,246,0.1), rgba(139,92,246,0.1))';
                    e.currentTarget.style.borderColor = 'rgba(59,130,246,0.3)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  🎬 Full AI Content Creation Flow... →
                </button>
              </div>              
              <div className="script-input-wrapper">
                <div className="script-input-header">
                  <div className="header-left">
                    <span className="script-icon">✍️</span>
                    <h3 className="script-title">Your AI Voice Script</h3>
                  </div>
                  <div className="header-right">
                    <>
                      {isLoggedIn && (
                        <button
                          className="browse-templates-btn"
                          onClick={() => {
                            scrollToSection('script-templates');
                            toggleScriptTemplates();
                          }}
                          aria-label="Browse script templates"
                        >
                          📝 Browse Templates
                        </button>
                      )}
                      <span className={`live-char-badge ${characterCount > maxCharsPerRequest ? 'exceeded' : ''}`}>
                        {characterCount.toLocaleString()} / {maxCharsPerRequest.toLocaleString()}
                      </span>
                    </>
                  </div>
                </div>
                  
                <div className="textarea-container">
                  <textarea
                    value={aiVoiceText}
                    onChange={handleTextChange}
                    placeholder="✨ Type or paste your script here..."                  
                    className={`ai-voice-textarea ${characterCount > maxCharsPerRequest ? 'limit-exceeded' : ''}`}
                    disabled={limitsExceeded}
                    aria-label="Text input for AI voice generation"
                  />

                  {isLoggedIn && limitsExceeded && (
                    <div className="textarea-overlay">
                      <div className="overlay-content">
                        <span className="lock-icon">⚠️</span>
                        <h4>Character Limit Reached</h4>
                        <p>You've used all your {userProfile.role} plan characters</p>
                        <a 
                          href="/pricing"
                          className="overlay-login-btn"
                        >
                          Upgrade Now
                        </a>
                      </div>
                    </div>
                  )}

                  {!limitsExceeded && aiVoiceText.length === 0 && (
                    <div className="textarea-hint">
                      <div className="hint-items">
                        <div className="hint-item">💡 <strong>Quick tip:</strong> Add commas for natural pauses</div>
                        <div className="hint-item">🎯 <strong>Best for:</strong> Clear, conversational text</div>
                        <div className="hint-item">⚡ <strong>Max length:</strong> {maxCharsPerRequest.toLocaleString()} characters</div>
                      </div>
                    </div>
                  )}  
                  {isLoggedIn && characterCount > maxCharsPerRequest && (
                    <div className="character-limit-warning">
                      <span className="warning-icon">⚠️</span>
                      <strong>Character limit exceeded!</strong>
                      <span>Please reduce your text by {(characterCount - maxCharsPerRequest).toLocaleString()} characters to generate.</span>
                    </div>
                  )}                    
                </div>                
                <div className="script-input-footer">
                  <div className="footer-stats">
                    <div className="stat-item">
                      <span className="stat-icon">📝</span>
                      <span className="stat-label">Words: <strong>{aiVoiceText.trim().split(/\s+/).filter(w => w.length > 0).length}</strong></span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-icon">⏱️</span>
                      <span className="stat-label">~{Math.ceil(aiVoiceText.trim().split(/\s+/).filter(w => w.length > 0).length / 200)} min read</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-icon">🎤</span>
                      <span className="stat-label">Ready to generate</span>
                    </div>
                  </div>
                </div>
              </div>

              {isLoggedIn && ttsUsage && (
                <div className="usage-info">
                  {ttsUsage.isPaid ? (
                    <div className="usage-section">
                      <p className="usage-label">💳 Credit Balance</p>
                      <p className="usage-text">
                        <strong>{ttsUsage.balance.toLocaleString()}</strong> credits remaining
                        &nbsp;·&nbsp; {ttsUsage.creditCostPer100Chars} credit per 100 chars
                        &nbsp;·&nbsp; This text costs <strong>{Math.ceil(aiVoiceText.length / 100)}</strong> credit{Math.ceil(aiVoiceText.length / 100) !== 1 ? 's' : ''}
                      </p>
                      {ttsUsage.balance < 10 && (
                        <div className="usage-micro-warning">
                          Running low on credits. <a href="/pricing">Top up your balance</a>.
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="usage-section">
                      <p className="usage-label">🆓 Free Tier Usage</p>
                      <div className="usage-bar-container">
                        <div
                          className={`usage-bar-fill ${
                            ((ttsUsage.freeVoiceCharsUsed ?? 0) / (ttsUsage.freeVoiceCharsLimit ?? 1)) >= 0.95 ? 'critical' :
                            ((ttsUsage.freeVoiceCharsUsed ?? 0) / (ttsUsage.freeVoiceCharsLimit ?? 1)) >= 0.80 ? 'warning' : 'normal'
                          }`}
                          style={{ width: `${Math.min(100, ((ttsUsage.freeVoiceCharsUsed ?? 0) / (ttsUsage.freeVoiceCharsLimit ?? 1)) * 100)}%` }}
                        />
                      </div>
                      <p className="usage-text">
                        <strong>{((ttsUsage.freeVoiceCharsLimit ?? 0) - (ttsUsage.freeVoiceCharsUsed ?? 0)).toLocaleString()}</strong> free characters remaining this month
                        &nbsp;({(ttsUsage.freeVoiceCharsUsed ?? 0).toLocaleString()} / {(ttsUsage.freeVoiceCharsLimit ?? 0).toLocaleString()} used)
                      </p>
                      {((ttsUsage.freeVoiceCharsUsed ?? 0) / (ttsUsage.freeVoiceCharsLimit ?? 1)) >= 0.80 && (
                        <div className="usage-micro-warning">
                          You're almost out of free characters. Upgrade to avoid interruption.
                        </div>
                      )}
                      <div className="inline-upgrade-cta">
                        <a href="/pricing" className="inline-upgrade-link">
                          🔓 Upgrade for credits-based access with no monthly caps
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              )}          

              {isLoggedIn && (
                <div className="speed-control-section">
                  <div className="speed-header">
                    <label>⚡ Speed</label>
                    {!hasSpeedAccess && (
                      <span className="speed-locked-badge">🔒 Paid</span>
                    )}
                  </div>
                  
                  <div className="speed-presets">
                    {[0.5, 1.0, 1.25, 1.5, 1.75, 2.0, 3.0, 4.0].map(s => (
                      <button
                        key={s}
                        onClick={() => {
                          if (!hasSpeedAccess) return;
                          setSpeed(s);
                          setSpeedInput(String(s));
                        }}
                        disabled={!hasSpeedAccess}
                        className={`speed-preset-btn ${speed === s ? 'active' : ''} ${!hasSpeedAccess ? 'locked' : ''}`}
                      >
                        {s}x
                      </button>
                    ))}
                    <input
                      type="text"
                      value={speedInput}
                      disabled={!hasSpeedAccess}
                      onChange={(e) => {
                        if (!hasSpeedAccess) return;
                        setSpeedInput(e.target.value);
                        const val = parseFloat(parseFloat(e.target.value).toFixed(2));
                        if (!isNaN(val) && val >= 0.5 && val <= 4.0) setSpeed(val);
                      }}
                      onBlur={() => {
                        if (speedInput === '' || isNaN(parseFloat(speedInput))) {
                          setSpeedInput('1');
                          setSpeed(1.0);
                        } else {
                          setSpeedInput(String(speed));
                        }
                      }}
                      className={`speed-custom-input ${!hasSpeedAccess ? 'locked' : ''}`}
                      placeholder="1"
                    />
                  </div>
                    
                  {!hasSpeedAccess && (
                    <p className="speed-locked-text">
                      Requires <a href="/pricing">Creator Lite or higher</a>
                    </p>
                  )}
                </div>
              )}     

              {showLimitModal && (
                <div className="inline-limit-warning">
                  <div className="limit-warning-content">
                    <div className="modal-icon-warning">⚠️</div>
                    <h3>You're Running Low on Characters!</h3>
                    <p className="modal-usage-text">
                      You've used{' '}
                      <strong>
                        {Math.round(((ttsUsage?.freeVoiceCharsUsed ?? 0) / (ttsUsage?.freeVoiceCharsLimit ?? 1)) * 100)}%
                      </strong>{' '}
                      of your free limit
                    </p>
                    <div className="inline-modal-actions">
                      <a href="/pricing" className="inline-upgrade-btn">
                        Upgrade Now
                      </a>
                      <button 
                        className="inline-dismiss-btn"
                        onClick={() => setShowLimitModal(false)}
                      >
                        Continue with Free
                      </button>
                    </div>
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
                <div className="button-wrapper-with-tooltip">
                  <button
                    className="cta-button generate-voice-button"
                    onClick={() => {
                      handleGenerateAiAudio();
                    }}
                    disabled={
                      isLoggedIn && (
                        !aiVoiceText.trim() ||
                        !selectedVoice ||
                        isGenerating ||
                        characterCount > maxCharsPerRequest ||
                        wouldExceedLimits
                      )
                    }
                    aria-label="Generate AI voice from text"
                  >
                    {isGenerating ? 'Generating...' : isLoggedIn ? 'Generate AI Voice' : 'Login to Generate'}
                  </button>
                  {isLoggedIn && disabledReason && (
                    <div className="button-tooltip">
                      {disabledReason}
                    </div>
                  )}
                </div>
              )}
              {isLimitsExceeded() && (
                <div className="limit-exceeded-message">
                  <p className="limit-message-title">⚡ You've used all your {userProfile.role} plan characters!</p>
                  <div className="limit-benefits">
                    <div className="benefit-item">✓ Creator Spark: 75,000 chars/month + 20,000/day</div>
                    <div className="benefit-item">✓ Creator Odyssey: 250,000 chars/month + Unlimited/day</div>
                    <div className="benefit-item">✓ Unlimited voice generations</div>
                  </div>
                  <p className="limit-message-cta">Upgrade now and continue creating! 🎯</p>
                </div>
              )}              
            </div>

            <div className="voice-list-section">
              <div className="fixed-header">
                <h3>Select a Voice</h3>

                {/* Provider Tabs */}
                <div className="provider-tabs">
                  {(['GOOGLE', 'OPENAI', 'AZURE'] as const).map(p => (
                    <button
                      key={p}
                      className={`provider-tab ${selectedProvider === p ? 'active' : ''} ${
                        p !== 'GOOGLE' && !ttsUsage?.isPaid ? 'locked' : ''
                      }`}
                      onClick={() => {
                        setSelectedProvider(p);
                        setSelectedVoice(null);
                      }}
                      title={p !== 'GOOGLE' && !ttsUsage?.isPaid ? 'Requires paid plan' : ''}
                    >
                      {p === 'GOOGLE' && '🔵 '}
                      {p === 'OPENAI' && '🟢 '}
                      {p === 'AZURE' && '🔷 '}
                      {p.charAt(0) + p.slice(1).toLowerCase()}
                      {p !== 'GOOGLE' && !ttsUsage?.isPaid && (
                        <span className="tab-lock">👑</span>
                      )}
                    </button>
                  ))}
                </div>
                
                {selectedProvider === 'GOOGLE' && (
                  <div className="filter-section">
                    <select
                      value={filterLanguage}
                      onChange={(e) => setFilterLanguage(e.target.value)}
                      className="filter-select"
                      aria-label="Filter voices by language"
                    >
                      <option value="">All Languages</option>
                      {uniqueLanguages.map((lang) => (
                        <option key={lang} value={lang}>{lang}</option>
                      ))}
                    </select>
                    <select
                      value={filterGender}
                      onChange={(e) => setFilterGender(e.target.value)}
                      className="filter-select"
                      aria-label="Filter voices by gender"
                    >
                      <option value="">All Genders</option>
                      {uniqueGenders.map((gen) => (
                        <option key={gen} value={gen}>{gen}</option>
                      ))}
                    </select>
                  </div>
                )}
              </div>
              
              <div className="scrollable-voices">
                {selectedProvider === 'GOOGLE' ? (
                  voices.length === 0 ? (
                    <div className="empty-state">Loading voices...</div>
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
                            onClick={() => handleVoiceSelect(voice)}
                          />
                          <div className="voice-details" onClick={() => handleVoiceSelect(voice)}>
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
                            onClick={(e) => { e.stopPropagation(); handlePlayDemo(voice); }}
                            aria-label={`Play demo for ${voice.humanName || voice.voiceName}`}
                          >
                            {playingDemo === voice.voiceName ? '⏸️' : '▶️'}
                          </button>
                        </div>
                      ))}
                    </div>
                  )
                ) : (
                  externalVoicesLoading ? (
                    <div className="empty-state">Loading voices...</div>
                  ) : externalVoices.length === 0 ? (
                    <div className="empty-state">No voices found.</div>
                  ) : (
                    <div className="voice-list">
                      {externalVoices.map((voice) => (
                        <div
                          key={`${voice.provider}-${voice.voiceId}`}
                          className={`voice-item ${
                            selectedVoice?.voiceId === voice.voiceId ? 'selected' : ''
                          }`}
                          role="button"
                          tabIndex={0}
                          aria-label={`Select voice ${voice.humanName}`}
                        >
                          <div
                            className="voice-avatar-placeholder"
                            onClick={() => handleVoiceSelect(voice as Voice)}
                          >
                            {voice.gender === 'Female' ? '👩' : voice.gender === 'Male' ? '👨' : '🧑'}
                          </div>
                          <div className="voice-details" onClick={() => handleVoiceSelect(voice as Voice)}>
                            <div className="voice-title">{voice.humanName}</div>
                            <div className="voice-info">
                              {voice.language} · {voice.gender}
                              {(voice as any).description && (
                                <span className="voice-description"> · {(voice as any).description}</span>
                              )}
                            </div>
                          </div>
                          <button
                            className="demo-button"
                            onClick={(e) => {
                              e.stopPropagation();
                              handlePlayDemo(voice as Voice);
                            }}
                            aria-label={`Play demo for ${voice.humanName}`}
                          >
                            {playingDemo === `${voice.voiceName}-${voice.voiceStyle || 'default'}` ? '⏸️' : '▶️'}
                          </button>
                        </div>
                      ))}
                    </div>
                  )
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
                <button onClick={handleDownload} className="cta-button download-button">
                  Download MP3
                </button>
          
                {/* MOVE POPUPS HERE */}
                {showFirstGenBanner && (
                  <motion.div 
                    className="inline-upgrade-banner first-gen-banner"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                  >
                    <div className="banner-content">
                      <span className="banner-icon">⚡</span>
                      <div className="banner-text">
                       <strong>Like this voice?</strong> Upgrade to 37× more characters & voice emotions
                      </div>
                      <a href="/pricing" className="banner-cta">
                        Upgrade Now
                      </a>
                    </div>
                  </motion.div>
                )}

                {showRepeatGenBanner && (
                  <motion.div 
                    className="inline-upgrade-banner repeat-gen-banner"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                  >
                    <div className="banner-content">
                      <span className="banner-icon">👀</span>
                      <div className="banner-text">
                        <strong>You're using Scenith a lot today!</strong> Creator Spark gives 37× limits + longer scripts
                      </div>
                      <a href="/pricing" className="banner-cta">
                        See Plans
                      </a>
                    </div>
                  </motion.div>
                )}

                {downloadSuccess && userProfile.role === 'BASIC' && (
                  <motion.div 
                    className="inline-download-success"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                  >
                    <div className="success-content">
                      <span className="success-icon">✅</span>
                      <div className="success-text">
                        <strong>Download successful!</strong>
                        <p>Want to create more? Get 17× more characters with Creator or AI Voice Pro.</p>
                      </div>
                      <a href="/pricing" className="success-cta-btn">
                        View Plans
                      </a>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </section>
          )}     

          {/* Script Templates Section */}
          {isLoggedIn && (
            <section className="script-templates-section" id="script-templates" role="region" aria-labelledby="templates-title">
              <div className="container">
                <div className="script-templates-header">
                  <h2 id="templates-title">Ready-to-Use Script Templates</h2>
                  <p>Click any template to instantly use it in your AI voice generation</p>
                </div>

                <button
                  className={`templates-toggle-btn ${showScriptTemplates ? 'active' : ''}`}
                  onClick={() => setShowScriptTemplates(!showScriptTemplates)}
                  aria-expanded={showScriptTemplates}
                >
                  <span className="templates-toggle-icon">
                    {showScriptTemplates ? '▼' : '▶'}
                  </span>
                  {showScriptTemplates ? 'Hide Templates' : 'Browse 15 Script Templates'}
                </button>
          
                {showScriptTemplates && (
                  <div className="templates-content">
                    <div className="category-filters">
                      <button
                        className={`category-filter-btn ${selectedCategory === 'All' ? 'active' : ''}`}
                        onClick={() => setSelectedCategory('All')}
                      >
                        All Templates
                      </button>
                      {[...new Set(SCRIPT_TEMPLATES.map(t => t.category))].map(category => (
                        <button
                          key={category}
                          className={`category-filter-btn ${selectedCategory === category ? 'active' : ''}`}
                          onClick={() => setSelectedCategory(category)}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                    
                    <div className="templates-grid">
                      {SCRIPT_TEMPLATES
                        .filter(template => selectedCategory === 'All' || template.category === selectedCategory)
                        .map(template => (
                          <div
                            key={template.id}
                            className="template-card"
                            onClick={() => handleScriptSelect(template.script)}
                          >
                            <div className="template-header">
                              <span className="template-icon">{template.icon}</span>
                              <div className="template-title-group">
                                <h3 className="template-title">{template.title}</h3>
                                <span className="template-category">{template.category}</span>
                              </div>
                            </div>
                            <p className="template-script">{template.script}</p>
                            <button className="template-use-btn">
                              ✨ Use This Script
                            </button>
                          </div>
                        ))}
                    </div>
                      
                    {SCRIPT_TEMPLATES.filter(template => selectedCategory === 'All' || template.category === selectedCategory).length === 0 && (
                      <div className="templates-empty">
                        <span className="templates-empty-icon">📝</span>
                        <p>No templates found in this category</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </section>
          )}
          
          {/* Past Generations History Section */}
          {isLoggedIn && (
            <section className="history-section" id="history" role="region" aria-labelledby="history-title">
              <div className="container">
                <div className="history-header">
                  <h2 id="history-title">Your Generation History</h2>
                  {!hasHistoryAccess && (
                    <div className="history-locked-banner">
                      <span className="lock-icon">🔒</span>
                      <p>Upgrade to Creator Spark or Creator Odyssey to access your generation history</p>
                      <a href="/pricing" className="upgrade-history-btn">
                        Unlock History
                      </a>
                    </div>
                  )}
                </div>
                
                {hasHistoryAccess && (
                  <div className="history-content">
                    <button
                      className="toggle-history-btn"
                      onClick={toggleHistory}
                      aria-expanded={showHistory}
                    >
                      {showHistory ? '▼' : '▶'} {showHistory ? 'Hide' : 'Show'} Past Generations ({generationHistory.length})
                    </button>
                
                    {showHistory && (
                      <div className="history-list">
                        {historyLoading ? (
                          <div className="history-loading">
                            <div className="spinner" />
                            <p>Loading your generations...</p>
                          </div>
                        ) : generationHistory.length === 0 ? (
                          <div className="history-empty">
                            <span className="empty-icon">🎤</span>
                            <p>No generations yet. Create your first AI voice above!</p>
                          </div>
                        ) : (
                          <div className="history-grid">
                            {generationHistory.map((item) => (
                              <div key={item.id} className="history-item">
                                <div className="history-item-header">
                                  <span className="history-date">
                                    {new Date(item.createdAt).toLocaleDateString('en-US', {
                                      month: 'short',
                                      day: 'numeric',
                                      year: 'numeric',
                                      hour: '2-digit',
                                      minute: '2-digit'
                                    })}
                                  </span>
                                </div>
                                <CustomAudioPlayer src={`${CDN_URL}/${item.audioPath}`} />
                                <button
                                  className="history-download-btn"
                                  onClick={async () => {
                                    const response = await fetch(`${CDN_URL}/${item.audioPath}`);
                                    const blob = await response.blob();
                                    const blobUrl = window.URL.createObjectURL(blob);
                                    const link = document.createElement('a');
                                    link.href = blobUrl;
                                    link.download = `ai-voice-${item.id}.mp3`;
                                    document.body.appendChild(link);
                                    link.click();
                                    document.body.removeChild(link);
                                    window.URL.revokeObjectURL(blobUrl);
                                  }}
                                >
                                  📥 Download
                                </button>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </section>
          )}         
              
          <div className="demo-video-section">
            <h3 className="demo-video-title">See AI Voice Generation in Action</h3>
            <div className="youtube-video-wrapper">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dEeT7Z_b3bY?rel=0&modestbranding=1&showinfo=0"
                title="AI Voice Generator Demo - Natural Voices from Text"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p className="demo-video-caption">
              Watch how to turn any text into realistic AI voices in seconds — perfect for videos, podcasts & more!
            </p>
          </div>            
          <section className="must-try-section" role="region" aria-labelledby="must-try-title">
            <div className="must-try-header">
              <h2 id="must-try-title">Must Try: More AI Tools on Scenith</h2>
              <p>Supercharge your content creation with these powerful tools</p>
            </div>
            <div className="must-try-grid">
              <a 
                href="https://scenith.in/tools/ai-video-generation?utm_source=ai_voice_page&utm_medium=must_try_section&utm_campaign=cross_tool_promotion" 
                className="must-try-card"
                aria-label="Try AI Video Generator"
                target="_blank"
                rel="noopener noreferrer"                
              >
                <span className="must-try-icon">🎬</span>
                <span className="must-try-badge">🔥 Popular</span>
                <h3 className="must-try-title">AI Video Generator</h3>
                <p className="must-try-description">
                  Turn your ideas into cinematic AI videos in seconds. Type a prompt, pick a style, and watch your vision come to life.
                </p>
                <div className="must-try-features">
                  <span className="must-try-feature">Text & image to video</span>
                  <span className="must-try-feature">Multiple AI models</span>
                  <span className="must-try-feature">MP4 download</span>
                </div>
                <span className="must-try-cta">
                  Try Video Generator →
                </span>
              </a>

              <a 
                href="https://scenith.in/tools/ai-image-generation?utm_source=ai_voice_page&utm_medium=must_try_section&utm_campaign=cross_tool_promotion" 
                className="must-try-card"
                aria-label="Try AI Image Generator"
                target="_blank"
                rel="noopener noreferrer"                
              >
                <span className="must-try-icon">🖼️</span>
                <span className="must-try-badge">✨ New</span>
                <h3 className="must-try-title">AI Image Generator</h3>
                <p className="must-try-description">
                  Create stunning visuals from text descriptions instantly. Perfect for thumbnails, social media, and marketing materials.
                </p>
                <div className="must-try-features">
                  <span className="must-try-feature">8 artistic styles</span>
                  <span className="must-try-feature">High-res PNG output</span>
                  <span className="must-try-feature">Commercial use allowed</span>
                </div>
                <span className="must-try-cta">
                  Try Image Generator →
                </span>
              </a>
            </div>
          </section>   
          <section className="user-generated-showcase" role="region" aria-labelledby="ugc-title">
            <div className="container">
              <div className="ugc-header">
                <h2 id="ugc-title">Created by Our Community</h2>
                <p>Real images and videos made with Scenith AI tools — your creativity is the only limit</p>
              </div>

              {/* AI Images Row */}
              <div className="ugc-block">
                <div className="ugc-block-header">
                  <span className="ugc-block-icon">🖼️</span>
                  <h3>AI-Generated Images</h3>
                  <a href="/tools/ai-image-generation" className="ugc-try-link">Try Image Generator →</a>
                </div>

                <div className="demo-marquee-wrapper">
                  {(() => {
                    const IMAGE_DEMOS = [
                      "https://cdn.scenith.in/images/sole_image_gen/7/92c16acb-0f22-44e4-9a87-32314e3d4b5a.png",
                      "https://cdn.scenith.in/images/sole_image_gen/1001/72fafd61-493e-46f9-be5c-f6eed674662f.png",
                      "https://cdn.scenith.in/images/sole_image_gen/1032/172e0d0f-c194-4ac7-bb93-9aaf6e3e21d8.png",
                      "https://cdn.scenith.in/images/sole_image_gen/1032/562b0ac3-fc69-4ac7-b4b3-3f05e7b5638c.png",
                      "https://cdn.scenith.in/images/sole_image_gen/1139/ed2d9f3e-5d95-4da1-88e4-95971941730e.png",
                      "https://cdn.scenith.in/images/sole_image_gen/1139/f0d70db9-6388-446b-ac27-8ffa0bb162aa.png",
                      "https://cdn.scenith.in/images/sole_image_gen/1139/be641c98-d248-4c77-b82a-e704fa4c7b2a.png",
                      "https://cdn.scenith.in/images/sole_image_gen/1162/3a656bf0-af3e-466d-a65f-b9a9fd85c39f.png",
                      "https://cdn.scenith.in/images/sole_image_gen/1162/cc4b271c-4941-4a2d-97e5-070afb8a0c09.png",
                      "https://cdn.scenith.in/images/sole_image_gen/1162/f53619ce-8fe5-446e-b38f-d6069469db6f.png",
                      "https://cdn.scenith.in/images/sole_image_gen/1204/aefc2c01-dbfb-49c8-89fe-957d313c207f.png",
                      "https://cdn.scenith.in/images/sole_image_gen/1202/788ab6df-fe3d-4a44-b6aa-fc51a8e8c97d.png",
                      "https://cdn.scenith.in/images/sole_image_gen/1259/31bdd81a-6a9a-44d7-816e-b4053269e8ef.png",
                      "https://cdn.scenith.in/images/sole_image_gen/1391/93c6fb3d-bd1e-4782-8444-07761d6fba66.png",
                      "https://cdn.scenith.in/images/sole_image_gen/2/16743040-1fb6-4b2e-80c4-e4079c4c3287.png",
                      "https://cdn.scenith.in/images/sole_image_gen/1580/176a73c0-c0a8-4a51-a356-31962b94d51a.png",
                    ];
                    return (
                      <div className="demo-marquee-track" aria-hidden="true">
                        <div className="demo-marquee-inner demo-scroll-left">
                          {[...IMAGE_DEMOS, ...IMAGE_DEMOS].map((src, i) => (
                            <div key={`img-${i}`} className="demo-marquee-card">
                              <img
                                src={src}
                                alt="User generated AI image"
                                loading="lazy"
                                decoding="async"
                                width={180}
                                height={180}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })()}
                </div>
              </div>
                
              {/* AI Videos Row */}
              <div className="ugc-block" style={{ marginTop: '40px' }}>
                <div className="ugc-block-header">
                  <span className="ugc-block-icon">🎬</span>
                  <h3>AI-Generated Videos</h3>
                  <a href="/tools/ai-video-generation" className="ugc-try-link">Try Video Generator →</a>
                </div>
                
                <div className="ugc-videos-grid">
                  {[
                    // Replace these with your actual CDN video paths
                    { src: "https://cdn.scenith.in/ai_video_gen/2/video_3a8f8067-40ff-4ec4-9173-83cfc81a5cb4.mp4"}
                  ].map((video, i) => (
                    <div key={i} className="ugc-video-card">
                      <video
                        src={video.src}
                        loop
                        muted
                        playsInline
                        onMouseEnter={e => (e.currentTarget as HTMLVideoElement).play()}
                        onMouseLeave={e => { (e.currentTarget as HTMLVideoElement).pause(); (e.currentTarget as HTMLVideoElement).currentTime = 0; }}
                      />
                      <div className="ugc-video-overlay">▶ Hover to play</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>                       
          <div className="trust-indicators">
            <span className="trust-item">✅ 100% Free</span>
            <span className="trust-item">🎤 40+ Voices</span>
            <span className="trust-item">🌍 Multi-Language</span>
            <span className="trust-item">📥 Instant MP3 Download</span>
          </div>
          <div className="cross-tool-promo">
            <p className="promo-text">
              💡 <strong>Pro Tip:</strong> Get all 3 AI tools (Voice + Subtitles + Speed) with Creator plan for less than buying individually!
            </p>
            <a href="/pricing" className="promo-link">Compare Plans →</a>
          </div>          
        </div>
        <figure className="hero-image-container">
          <Image
            src="/images/AIVoiceGenerationSS.png"
            alt="Free AI voice generator interface showing text-to-speech conversion with 40+ natural voices in multiple languages"
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

    {/* NEW: Step-by-Step How to Generate Section */}
    <section className="how-to-generate-section" id="how-to-generate" role="region" aria-labelledby="how-to-generate-title">
      <div className="container">
        <h2 id="how-to-generate-title">How to Generate AI Voice from Text: Complete Step-by-Step Guide</h2>
        <p className="section-description">
          Follow this detailed walkthrough to create professional AI voiceovers in minutes. No technical experience required—just your script and our advanced text-to-speech technology.
        </p>

        <div className="tutorial-steps">
          <article className="tutorial-step">
            <div className="tutorial-step-number">Step 1</div>
            <div className="tutorial-step-content">
              <h3>Write or Paste Your Script</h3>
              <p>
                Begin by entering your text into the generator. You can type directly, or paste your text:
              </p>
              <ul className="tutorial-checklist">
                <li>YouTube video scripts (2-5 minute videos)</li>
                <li>Podcast episode segments</li>
                <li>Product descriptions and reviews</li>
                <li>Educational course narration</li>
                <li>Marketing copy and advertisements</li>
              </ul>
              <div className="tutorial-tip">
                <strong>💡 Pro Tip:</strong> For best results, use proper punctuation. Commas create natural pauses, periods signal sentence endings, and question marks adjust intonation automatically.
              </div>
            </div>
          </article>

          <article className="tutorial-step">
            <div className="tutorial-step-number">Step 2</div>
            <div className="tutorial-step-content">
              <h3>Select Your Perfect AI Voice</h3>
              <p>
                Browse our library of <strong>40+ natural-sounding voices</strong> across 20+ languages. Use filters to narrow your search:
              </p>
              <div className="filter-guide">
                <div className="filter-option">
                  <strong>Language Filter:</strong> Choose from English (US, UK, Australian, Indian), Spanish, French, German, Mandarin, Hindi, Portuguese, and more.
                </div>
                <div className="filter-option">
                  <strong>Gender Filter:</strong> Select male or female based on your content needs.
                </div>
                <div className="filter-option">
                  <strong>Voice Preview:</strong> Click the play button (▶️) to hear a demo before generating your full audio.
                </div>
              </div>
              <div className="tutorial-tip">
                <strong>💡 Pro Tip:</strong> Match voice characteristics to your audience. Professional content works well with clear, authoritative voices. Entertainment content benefits from energetic, conversational tones.
              </div>
            </div>
          </article>

          <article className="tutorial-step">
            <div className="tutorial-step-number">Step 3</div>
            <div className="tutorial-step-content">
              <h3>Generate Your AI Audio</h3>
              <p>
                Click the <strong>"Generate AI Voice"</strong> button and watch the magic happen. Our neural text-to-speech engine processes your script in seconds, analyzing:
              </p>
              <ul className="tutorial-checklist">
                <li><strong>Pronunciation:</strong> Proper phonetic conversion for accurate word delivery</li>
                <li><strong>Prosody:</strong> Natural rhythm, stress, and intonation patterns</li>
                <li><strong>Pacing:</strong> Appropriate speaking speed for comprehension</li>
                <li><strong>Emotion:</strong> Contextual tone matching based on punctuation and word choice</li>
              </ul>
              <p>
                Generation typically completes in <strong>3-5 seconds</strong>, regardless of text length. You'll see a progress indicator during processing.
              </p>
            </div>
          </article>

          <article className="tutorial-step">
            <div className="tutorial-step-number">Step 4</div>
            <div className="tutorial-step-content">
              <h3>Preview and Download Your Audio</h3>
              <p>
                Once generated, your audio appears with a built-in player. <strong>Listen to preview</strong> the results before downloading:
              </p>
              <div className="download-options">
                <div className="download-format">
                  <strong>Format:</strong> High-quality MP3 (128kbps+)
                </div>
                <div className="download-format">
                  <strong>Compatibility:</strong> Works with all video editors, audio software, and platforms
                </div>
                <div className="download-format">
                  <strong>Usage Rights:</strong> Full commercial use allowed, no attribution required
                </div>
              </div>
              <p>
                Click <strong>"Download MP3"</strong> to save your voiceover. The file downloads instantly to your device, ready for immediate use in your projects.
              </p>
              <div className="tutorial-tip">
                <strong>💡 Pro Tip:</strong> Organize downloads with descriptive filenames like "intro-narration-v2.mp3" or "product-demo-voice.mp3" for easy project management.
              </div>
            </div>
          </article>

          <article className="tutorial-step advanced">
            <div className="tutorial-step-number">Step 5</div>
            <div className="tutorial-step-content">
              <h3>Edit and Re-generate as Needed</h3>
              <p>
                Not satisfied with the first attempt? Our system makes iteration effortless:
              </p>
              <ul className="tutorial-checklist">
                <li>Modify your script text and regenerate instantly</li>
                <li>Try different voices to find the perfect match</li>
                <li>Adjust punctuation to change pacing and emphasis</li>
                <li>Test multiple versions for A/B testing</li>
              </ul>
              <p>
                Each regeneration uses your remaining character quota. <strong>Free users get 2,000 characters/month</strong> (700/day). Upgrade for unlimited generations and access to premium voices.
              </p>
            </div>
          </article>
        </div>

        <div className="common-questions">
          <h3>Common Questions During Generation</h3>
          <div className="quick-qa-grid">
            <div className="quick-qa">
              <strong>Q: How long does generation take?</strong>
              <p>A: 3-5 seconds regardless of text length. Our optimized servers process requests instantly.</p>
            </div>
            <div className="quick-qa">
              <strong>Q: Can I edit after generating?</strong>
              <p>A: Yes! Simply modify your text and click generate again. No need to start over.</p>
            </div>
            <div className="quick-qa">
              <strong>Q: What if I exceed character limits?</strong>
              <p>A: Split long scripts into sections or upgrade to CREATOR/STUDIO plans for higher limits.</p>
            </div>
            <div className="quick-qa">
              <strong>Q: Can I use the same voice for all my content?</strong>
              <p>A: Absolutely! Save your favorite voice selection for consistent brand audio across all projects.</p>
            </div>
          </div>
        </div>

        <div className="integration-guide">
          <h3>Using Your Generated Audio in Popular Tools</h3>
          <div className="integration-cards">
            <div className="integration-card">
              <span className="integration-icon">🎬</span>
              <h4>Video Editing Software</h4>
              <p><strong>Adobe Premiere, Final Cut Pro, DaVinci Resolve:</strong> Import MP3 directly into timeline, sync with video, adjust levels.</p>
            </div>
            <div className="integration-card">
              <span className="integration-icon">▶️</span>
              <h4>YouTube & Social Media</h4>
              <p><strong>YouTube Studio, TikTok, Instagram:</strong> Upload MP3 as audio track, combine with visuals, optimize for platform.</p>
            </div>
            <div className="integration-card">
              <span className="integration-icon">🎙️</span>
              <h4>Podcast Platforms</h4>
              <p><strong>Anchor, Buzzsprout, Podbean:</strong> Use as intro/outro, episode narration, or complete audio content.</p>
            </div>
            <div className="integration-card">
              <span className="integration-icon">📚</span>
              <h4>E-Learning Platforms</h4>
              <p><strong>Teachable, Thinkific, Kajabi:</strong> Embed in course modules, create audio lessons, accessibility features.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* NEW: Emotions in AI Voice Generation Section */}
    <section className="emotions-feature-section" id="ai-voice-emotions" role="region" aria-labelledby="emotions-title">
      <div className="container">
        <h2 id="emotions-title">AI Voice Emotions: Add Feeling & Personality to Your Audio</h2>
        <p className="section-description">
          Transform flat narration into emotionally engaging content. Our AI voice emotion presets automatically adjust speech patterns, pacing, and intonation to match the mood of your content—no manual tweaking required.
        </p>
    
        <div className="emotion-showcase">
          <div className="emotion-intro">
            <h3>What Are AI Voice Emotions?</h3>
            <p>
              <strong>AI voice emotions</strong> are pre-configured settings that modify how text-to-speech engines deliver your content. By adjusting parameters like speaking rate, pitch variation, emphasis patterns, and pauses, emotions create distinct vocal characteristics that convey specific moods and tones. This technology bridges the gap between robotic text-to-speech and human-like expressiveness.
            </p>
            <p>
              Unlike manual SSML (Speech Synthesis Markup Language) editing which requires technical knowledge, our emotion presets apply sophisticated vocal adjustments with a single click. Whether you need <strong>enthusiastic energy for promotional content</strong> or <strong>calm relaxation for meditation</strong>, emotions help your audio resonate with listeners on an emotional level.
            </p>
          </div>
    
          <div className="emotion-benefits-grid">
            <div className="emotion-benefit">
              <span className="emotion-benefit-icon">🎯</span>
              <h4>Match Content Context</h4>
              <p>Automatically align voice delivery with your content's purpose. Marketing videos get energetic excitement, tutorials receive patient clarity, and bedtime stories convey soothing calmness.</p>
            </div>
            <div className="emotion-benefit">
              <span className="emotion-benefit-icon">⚡</span>
              <h4>One-Click Enhancement</h4>
              <p>No technical skills needed. Select your desired emotion from the dropdown, and our AI instantly applies optimal vocal adjustments—rate, pitch, emphasis, and pacing—saving hours of manual editing.</p>
            </div>
            <div className="emotion-benefit">
              <span className="emotion-benefit-icon">🎭</span>
              <h4>Professional Results</h4>
              <p>Achieve broadcast-quality emotional delivery that rivals professional voice actors. Our presets are carefully calibrated to sound natural and authentic, never exaggerated or artificial.</p>
            </div>
            <div className="emotion-benefit">
              <span className="emotion-benefit-icon">🔄</span>
              <h4>Experiment Freely</h4>
              <p>Test different emotions instantly. Preview how "Happy" sounds versus "Professional" before generating your final audio. Perfect for A/B testing which tone resonates best with your audience.</p>
            </div>
          </div>
    
          <div className="emotion-presets-explained">
            <h3>Complete Guide to Available Emotion Presets</h3>
            <p className="presets-intro">
              Each emotion preset is meticulously designed for specific use cases. Here's what makes each one unique and when to use them:
            </p>
    
            <div className="preset-cards">
              <div className="preset-card">
                <div className="preset-header">
                  <span className="preset-icon">😊</span>
                  <div className="preset-title-group">
                    <h4>Happy / Excited</h4>
                    <span className="preset-badge energy">High Energy</span>
                  </div>
                </div>
                <div className="preset-specs">
                  <span className="spec-item">⚡ 15% faster speech</span>
                  <span className="spec-item">📈 Higher pitch variation</span>
                  <span className="spec-item">💪 Strong emphasis</span>
                </div>
                <p className="preset-description">
                  <strong>Perfect for:</strong> Product launches, promotional videos, celebration announcements, motivational content, unboxing videos, success stories, event invitations, and any content designed to energize and excite your audience.
                </p>
                <p className="preset-technical">
                  <strong>Technical details:</strong> Increases speaking rate to 1.15x, elevates pitch by 10-15%, adds dynamic emphasis to key words, and reduces pause duration for continuous energy flow.
                </p>
              </div>
    
              <div className="preset-card">
                <div className="preset-header">
                  <span className="preset-icon">😌</span>
                  <div className="preset-title-group">
                    <h4>Calm / Relaxed</h4>
                    <span className="preset-badge soothing">Soothing</span>
                  </div>
                </div>
                <div className="preset-specs">
                  <span className="spec-item">🐌 15% slower speech</span>
                  <span className="spec-item">📉 Gentle pitch curves</span>
                  <span className="spec-item">🌊 Smooth transitions</span>
                </div>
                <p className="preset-description">
                  <strong>Perfect for:</strong> Meditation guides, sleep stories, yoga instructions, spa/wellness content, ASMR videos, nature documentaries, relaxation apps, mindfulness exercises, and therapeutic audio.
                </p>
                <p className="preset-technical">
                  <strong>Technical details:</strong> Reduces speaking rate to 0.85x, softens volume to 80%, creates gentle pitch variation, extends pause duration, and minimizes abrupt transitions for a flowing, peaceful delivery.
                </p>
              </div>
    
              <div className="preset-card">
                <div className="preset-header">
                  <span className="preset-icon">😠</span>
                  <div className="preset-title-group">
                    <h4>Angry / Intense</h4>
                    <span className="preset-badge powerful">Powerful</span>
                  </div>
                </div>
                <div className="preset-specs">
                  <span className="spec-item">⚡ 10% faster speech</span>
                  <span className="spec-item">💥 Sharp emphasis</span>
                  <span className="spec-item">🔊 Full volume</span>
                </div>
                <p className="preset-description">
                  <strong>Perfect for:</strong> Action movie trailers, sports commentary, urgent announcements, dramatic storytelling, competitive gaming content, protest speeches, passionate advocacy, and high-stakes scenarios.
                </p>
                <p className="preset-technical">
                  <strong>Technical details:</strong> Increases rate to 1.1x, applies maximum volume, adds forceful emphasis to stressed syllables, shortens pauses for urgency, and creates sharper pitch contrasts for dramatic effect.
                </p>
              </div>
    
              <div className="preset-card">
                <div className="preset-header">
                  <span className="preset-icon">😢</span>
                  <div className="preset-title-group">
                    <h4>Sad / Somber</h4>
                    <span className="preset-badge reflective">Reflective</span>
                  </div>
                </div>
                <div className="preset-specs">
                  <span className="spec-item">🐌 20% slower speech</span>
                  <span className="spec-item">📉 Lower pitch range</span>
                  <span className="spec-item">🔉 Reduced volume</span>
                </div>
                <p className="preset-description">
                  <strong>Perfect for:</strong> Memorial tributes, emotional storytelling, documentary narration about sensitive topics, charity appeals, dramatic scenes, reflective content, loss-related content, and empathetic messaging.
                </p>
                <p className="preset-technical">
                  <strong>Technical details:</strong> Slows rate to 0.8x, reduces volume to 75%, lowers pitch baseline, extends pauses significantly, minimizes pitch variation for monotone effect, creating a heavy, contemplative atmosphere.
                </p>
              </div>
    
              <div className="preset-card">
                <div className="preset-header">
                  <span className="preset-icon">📢</span>
                  <div className="preset-title-group">
                    <h4>Announcer</h4>
                    <span className="preset-badge authoritative">Authoritative</span>
                  </div>
                </div>
                <div className="preset-specs">
                  <span className="spec-item">⏱️ Standard pace</span>
                  <span className="spec-item">🎯 Clear articulation</span>
                  <span className="spec-item">💼 Professional tone</span>
                </div>
                <p className="preset-description">
                  <strong>Perfect for:</strong> News broadcasts, radio commercials, event announcements, airport/train station announcements, sports commentary, public service announcements, award ceremonies, and official statements.
                </p>
                <p className="preset-technical">
                  <strong>Technical details:</strong> Maintains 1.0x rate, uses full volume, applies precise emphasis for clarity, includes controlled pauses for comprehension, and creates authoritative pitch patterns that command attention.
                </p>
              </div>
    
              <div className="preset-card">
                <div className="preset-header">
                  <span className="preset-icon">🧘</span>
                  <div className="preset-title-group">
                    <h4>Meditation</h4>
                    <span className="preset-badge zen">Zen</span>
                  </div>
                </div>
                <div className="preset-specs">
                  <span className="spec-item">🐌 30% slower speech</span>
                  <span className="spec-item">🌊 Ultra-smooth flow</span>
                  <span className="spec-item">🔉 Very soft volume</span>
                </div>
                <p className="preset-description">
                  <strong>Perfect for:</strong> Guided meditations, deep relaxation exercises, hypnotherapy sessions, sleep hypnosis, breathwork guidance, spiritual content, wellness apps, and therapeutic audio programs.
                </p>
                <p className="preset-technical">
                  <strong>Technical details:</strong> Dramatically reduces rate to 0.7x, lowers volume to 70%, creates extremely gentle pitch variation, extends pauses to 2-3 seconds, eliminates all sharp transitions for transcendent calmness.
                </p>
              </div>
    
              <div className="preset-card">
                <div className="preset-header">
                  <span className="preset-icon">🎉</span>
                  <div className="preset-title-group">
                    <h4>Enthusiastic</h4>
                    <span className="preset-badge explosive">Explosive</span>
                  </div>
                </div>
                <div className="preset-specs">
                  <span className="spec-item">⚡ 25% faster speech</span>
                  <span className="spec-item">🚀 Maximum energy</span>
                  <span className="spec-item">🎊 Extreme variation</span>
                </div>
                <p className="preset-description">
                  <strong>Perfect for:</strong> Hype videos, game show hosting, children's content, fitness motivation, sales pitches, concert announcements, viral social media content, influencer introductions, and high-energy entertainment.
                </p>
                <p className="preset-technical">
                  <strong>Technical details:</strong> Accelerates rate to 1.25x, maximizes volume and emphasis, creates extreme pitch variation (20%+), minimizes pauses to near-zero, producing an explosive, contagious energy that captures immediate attention.
                </p>
              </div>
    
              <div className="preset-card">
                <div className="preset-header">
                  <span className="preset-icon">📚</span>
                  <div className="preset-title-group">
                    <h4>Professional</h4>
                    <span className="preset-badge neutral">Neutral</span>
                  </div>
                </div>
                <div className="preset-specs">
                  <span className="spec-item">⏱️ Slightly slower</span>
                  <span className="spec-item">🎯 Measured delivery</span>
                  <span className="spec-item">💼 Corporate tone</span>
                </div>
                <p className="preset-description">
                  <strong>Perfect for:</strong> Corporate training, business presentations, technical documentation, educational courses, legal disclaimers, financial reports, HR communications, and any formal, professional business context.
                </p>
                <p className="preset-technical">
                  <strong>Technical details:</strong> Slightly reduces rate to 0.95x, maintains 90% volume for clarity without being loud, uses minimal pitch variation for neutrality, includes measured pauses for professionalism, creating trustworthy, credible delivery.
                </p>
              </div>
    
              <div className="preset-card default-preset">
                <div className="preset-header">
                  <span className="preset-icon">🎭</span>
                  <div className="preset-title-group">
                    <h4>Default (Natural)</h4>
                    <span className="preset-badge standard">Standard</span>
                  </div>
                </div>
                <div className="preset-specs">
                  <span className="spec-item">⏱️ Natural pace</span>
                  <span className="spec-item">🎯 Balanced tone</span>
                  <span className="spec-item">✨ Versatile</span>
                </div>
                <p className="preset-description">
                  <strong>Perfect for:</strong> General narration, standard tutorials, blog article audio, casual content, product descriptions, informational videos, and any content where neutral delivery is appropriate.
                </p>
                <p className="preset-technical">
                  <strong>Technical details:</strong> No modifications applied. Uses base voice characteristics with 1.0x rate, standard volume, natural pitch variation, and normal pause duration. The AI's default expressive patterns shine through.
                </p>
              </div>
            </div>
          </div>
    
          <div className="emotion-best-practices">
            <h3>Best Practices: Getting the Most from Emotion Presets</h3>
            <div className="practices-grid">
              <div className="practice-item">
                <span className="practice-number">1</span>
                <div className="practice-content">
                  <h4>Match Emotion to Content Purpose</h4>
                  <p>Consider your content's goal before selecting an emotion. <strong>Sales-driven content</strong> benefits from "Enthusiastic" or "Happy" to create urgency and excitement. <strong>Educational content</strong> works best with "Professional" or "Default" for clear comprehension. <strong>Wellness content</strong> requires "Calm" or "Meditation" for therapeutic effect.</p>
                  <ul className="practice-examples">
                    <li><strong>YouTube Tutorial:</strong> Professional → Clear, trustworthy learning</li>
                    <li><strong>Product Launch:</strong> Enthusiastic → Maximum excitement and FOMO</li>
                    <li><strong>Bedtime Story:</strong> Meditation → Soothing relaxation for sleep</li>
                    <li><strong>Workout Video:</strong> Happy → Energizing motivation to push harder</li>
                  </ul>
                </div>
              </div>
    
              <div className="practice-item">
                <span className="practice-number">2</span>
                <div className="practice-content">
                  <h4>Preview Before Final Generation</h4>
                  <p>Always use the <strong>"Preview Emotion"</strong> button to hear how your selected emotion sounds with your chosen voice. Different base voices respond differently to emotion presets. A male voice might sound more authoritative with "Announcer" while a female voice could feel more empathetic. Test multiple combinations to find your perfect match.</p>
                  <div className="practice-tip">
                    <strong>💡 Pro Tip:</strong> Generate 2-3 variations with different emotions and A/B test with your audience. Track engagement metrics to identify which emotional tone resonates best for your specific niche.
                  </div>
                </div>
              </div>
    
              <div className="practice-item">
                <span className="practice-number">3</span>
                <div className="practice-content">
                  <h4>Consider Your Target Audience</h4>
                  <p><strong>Demographics matter.</strong> Younger audiences (Gen Z, Millennials) respond well to energetic emotions like "Enthusiastic" and "Happy." Professional B2B audiences prefer "Professional" or "Announcer" for credibility. Wellness-focused audiences connect with "Calm" and "Meditation." Match emotional intensity to audience expectations.</p>
                  <ul className="practice-examples">
                    <li><strong>Gen Z TikTok:</strong> Enthusiastic, fast-paced, high energy</li>
                    <li><strong>Corporate Webinar:</strong> Professional, measured, authoritative</li>
                    <li><strong>Parent Audience:</strong> Calm, reassuring, patient delivery</li>
                    <li><strong>Fitness Community:</strong> Happy, motivating, energizing tone</li>
                  </ul>
                </div>
              </div>
    
              <div className="practice-item">
                <span className="practice-number">4</span>
                <div className="practice-content">
                  <h4>Adjust Your Script for Emotions</h4>
                  <p>Write differently based on your chosen emotion. <strong>"Enthusiastic" works best with shorter sentences</strong> and exclamation points—AI emphasizes these naturally. <strong>"Meditation" requires longer, flowing sentences</strong> with ellipses (...) for natural pauses. <strong>"Angry" benefits from strong, direct statements</strong> without qualifiers. Script structure impacts emotional effectiveness.</p>
                  <div className="script-comparison">
                    <div className="script-example">
                      <strong>For "Enthusiastic":</strong>
                      <p>"This is amazing! You won't believe what's coming next! It's incredible!"</p>
                    </div>
                    <div className="script-example">
                      <strong>For "Meditation":</strong>
                      <p>"Breathe deeply... feel the air filling your lungs... let peace wash over you..."</p>
                    </div>
                    <div className="script-example">
                      <strong>For "Professional":</strong>
                      <p>"Our quarterly results demonstrate consistent growth across all key performance indicators."</p>
                    </div>
                  </div>
                </div>
              </div>
    
              <div className="practice-item">
                <span className="practice-number">5</span>
                <div className="practice-content">
                  <h4>Don't Overuse Extreme Emotions</h4>
                  <p><strong>Listener fatigue is real.</strong> "Enthusiastic" for 10+ minutes becomes exhausting. "Sad" for extended periods can depress viewers. Use extreme emotions (Enthusiastic, Angry, Meditation) strategically for <strong>2-5 minute segments maximum</strong>. For longer content, default to "Professional" or "Default" with emotion shifts at key moments only.</p>
                  <div className="practice-tip">
                    <strong>⚠️ Warning:</strong> YouTube retention drops significantly after 3 minutes of continuous high-intensity emotion. Balance energy with neutral delivery for optimal viewer retention.
                  </div>
                </div>
              </div>
    
              <div className="practice-item">
                <span className="practice-number">6</span>
                <div className="practice-content">
                  <h4>Combine with Voice Selection</h4>
                  <p>Emotion + Voice = Perfect combination. <strong>Deep male voices</strong> sound commanding with "Announcer" or "Angry." <strong>Soft female voices</strong> excel with "Calm" or "Meditation." <strong>Energetic voices</strong> naturally enhance "Happy" and "Enthusiastic." Test different voice-emotion pairings to discover unexpected magic combinations that elevate your content.</p>
                  <ul className="practice-examples">
                    <li><strong>Deep Male + Announcer:</strong> News anchor authority</li>
                    <li><strong>Soft Female + Meditation:</strong> Therapeutic calmness</li>
                    <li><strong>Youthful Voice + Enthusiastic:</strong> Viral TikTok energy</li>
                    <li><strong>Mature Voice + Professional:</strong> Corporate credibility</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
    
          <div className="emotion-comparison">
            <h3>Emotion vs. Default: Hear the Difference</h3>
            <p>Understanding the impact of emotions requires direct comparison. Here's how the same text sounds with different emotion presets:</p>
            
            <div className="comparison-example">
              <div className="comparison-text">
                <strong>Sample Text:</strong>
                <p className="sample-text">"Welcome to our new product launch. This innovation will change everything you know about productivity. Get ready for something amazing."</p>
              </div>
              
              <div className="comparison-results">
                <div className="comparison-item">
                  <div className="comparison-emotion">
                    <span className="emotion-dot default-dot"></span>
                    <strong>Default (Natural)</strong>
                  </div>
                  <p className="comparison-delivery">Neutral, balanced delivery. Clear articulation with standard pacing. Professional but not particularly memorable. Works for general content but lacks emotional punch.</p>
                  <span className="comparison-rating">Engagement: ⭐⭐⭐☆☆</span>
                </div>
    
                <div className="comparison-item">
                  <div className="comparison-emotion">
                    <span className="emotion-dot enthusiastic-dot"></span>
                    <strong>Enthusiastic</strong>
                  </div>
                  <p className="comparison-delivery">Fast, energetic, exciting! Higher pitch variation creates buzz. Emphasis on "amazing" and "change everything" drives FOMO. Perfect for product launches and hype content.</p>
                  <span className="comparison-rating">Engagement: ⭐⭐⭐⭐⭐</span>
                </div>
    
                <div className="comparison-item">
                  <div className="comparison-emotion">
                    <span className="emotion-dot professional-dot"></span>
                    <strong>Professional</strong>
                  </div>
                  <p className="comparison-delivery">Measured, credible tone. Slightly slower pace emphasizes "innovation" and "productivity." Creates trust and authority. Ideal for B2B audiences and corporate contexts.</p>
                  <span className="comparison-rating">Engagement: ⭐⭐⭐⭐☆</span>
                </div>
    
                <div className="comparison-item">
                  <div className="comparison-emotion">
                    <span className="emotion-dot calm-dot"></span>
                    <strong>Calm</strong>
                  </div>
                  <p className="comparison-delivery">Gentle, reassuring delivery. Softens the promotional nature. Better for wellness products or low-pressure introductions. Creates comfortable, no-stress atmosphere.</p>
                  <span className="comparison-rating">Engagement: ⭐⭐⭐☆☆</span>
                </div>
              </div>
            </div>
          </div>
    
          <div className="emotion-faq">
            <h3>Frequently Asked Questions About AI Voice Emotions</h3>
            <div className="emotion-faq-grid">
              <div className="emotion-faq-item">
                <h4>Can I use multiple emotions in one video?</h4>
                <p>Not within a single generation, but you can generate separate audio clips with different emotions and combine them in your video editor. For example, use "Enthusiastic" for your intro, "Professional" for the main content, and "Happy" for your call-to-action. This creates dynamic, engaging narration with emotional variety.</p>
              </div>
    
              <div className="emotion-faq-item">
                <h4>Do emotions work with all languages?</h4>
                <p>Yes! Emotion presets are language-agnostic and work across all 20+ supported languages. The underlying speech parameters (rate, pitch, emphasis) apply universally. However, some languages may display emotion more subtly due to cultural speech patterns. Romance languages often show more expressive emotion than East Asian languages.</p>
              </div>
    
              <div className="emotion-faq-item">
                <h4>Will emotions slow down generation time?</h4>
                <p>No. Emotions are applied during synthesis with zero additional processing time. Your audio still generates in 3-5 seconds regardless of which emotion preset you select. The AI processes rate, pitch, and emphasis modifications instantly as part of the standard generation pipeline.</p>
              </div>
    
              <div className="emotion-faq-item">
                <h4>Can I customize emotion parameters manually?</h4>
                <p>Currently, emotion presets are optimized configurations that can't be manually adjusted. This ensures consistent, professional results without technical knowledge. However, we're developing advanced SSML controls for power users. Upgrading to STUDIO plan will unlock custom emotion tuning when it launches.</p>
              </div>
    
              <div className="emotion-faq-item">
                <h4>Which emotion is best for YouTube videos?</h4>
                <p>Depends on your niche. <strong>Tech reviews:</strong> Professional. <strong>Gaming:</strong> Enthusiastic or Happy. <strong>Educational:</strong> Professional or Default. <strong>Wellness:</strong> Calm. <strong>Product unboxings:</strong> Happy or Enthusiastic. <strong>News commentary:</strong> Announcer. Test with your specific audience—engagement metrics will reveal the optimal emotion for your content style.</p>
              </div>
    
              <div className="emotion-faq-item">
                <h4>Do emotions affect pronunciation accuracy?</h4>
                <p>No. Emotions only modify delivery characteristics (speed, pitch, emphasis). Pronunciation remains identical regardless of emotion selected. All text is processed through the same phonetic conversion engine before emotion parameters are applied, ensuring accuracy across all presets.</p>
              </div>
            </div>
          </div>
    
          <div className="emotion-cta">
            <h3>Ready to Add Emotion to Your AI Voices?</h3>
            <p>Transform flat narration into engaging, emotionally resonant audio. Select any emotion preset and hear the difference instantly.</p>
            <button
              className="cta-button emotion-cta-button"
              onClick={() => {
                scrollToSection('hero');
              }}
              aria-label="Try emotions in AI voice generator"
            >
              Try Emotions Now - It's Free!
            </button>
            <div className="emotion-cta-features">
              <span>✨ 9 Unique Emotions</span>
              <span>🎯 One-Click Application</span>
              <span>🎧 Instant Preview</span>
              <span>🚀 No Learning Curve</span>
            </div>
          </div>
        </div>
      </div>
    </section>           

    {/* NEW: Educational Introduction Section */}
    <section className="educational-intro" role="complementary" aria-labelledby="intro-title">
      <div className="container">
        <h2 id="intro-title" className="section-subtitle">Transform Text into Lifelike Speech with AI Technology</h2>
        <div className="intro-content-grid">
          <div className="intro-text">
            <p className="intro-paragraph">
              Our <strong>free AI voice generator</strong> has revolutionized content creation by converting written <strong>text to speech</strong> in seconds. This advanced <strong>text-to-speech (TTS) online tool</strong> helps content creators, educators, podcasters, and businesses produce professional audio without expensive recording equipment or voice actors. Whether you need a <strong>realistic AI voice</strong> for YouTube videos, e-learning courses, or marketing content, our <strong>natural AI voices</strong> deliver broadcast-quality results instantly.
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
              <div className="stat-number">1.5K+</div>
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

    <section className="quick-definition-section" role="region" aria-labelledby="quick-definition">
      <div className="container">
        <div className="featured-snippet-target">
          <h2 id="quick-definition" className="visually-hidden">AI Voice Generator Definition</h2>
          <div className="definition-box">
            <p className="definition-text">
              An <strong>AI voice generator</strong> is a text-to-speech (TTS) tool that uses artificial intelligence to convert written text into realistic, natural-sounding audio. It leverages neural networks trained on human speech to create voiceovers in multiple languages, accents, and styles without requiring professional voice actors or recording equipment. Users can generate high-quality audio in seconds for videos, podcasts, e-learning, and more.
            </p>
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
            <p>Enter any text. Perfect for scripts, articles, or presentations. Our AI handles natural phrasing and intonation automatically.</p>
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
            <p>2,000 characters monthly included free. No subscriptions, no watermarks, full commercial rights. Upgrade for unlimited generation and premium voices.</p>
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

    <section className="competitors-comparison" role="region" aria-labelledby="vs-competitors">
      <div className="container">
        <h2 id="vs-competitors">AI Voice Generator Comparison: Scenith vs Competitors</h2>
        <div className="comparison-grid">
          <div className="vs-card">
            <h3>Scenith vs ElevenLabs</h3>
            <ul>
              <li>✅ <strong>Scenith:</strong> Free 2,000 chars/month, no credit card required</li>
              <li>❌ <strong>ElevenLabs:</strong> 10,000 chars free but requires signup, $5+ paid</li>
              <li>✅ <strong>Scenith:</strong> Commercial use on free plan</li>
              <li>⚠️ <strong>ElevenLabs:</strong> Attribution required on free plan</li>
            </ul>
          </div>
                
          <div className="vs-card">
            <h3>Scenith vs Murf.ai</h3>
            <ul>
              <li>✅ <strong>Scenith:</strong> Instant MP3 download, no watermark</li>
              <li>❌ <strong>Murf.ai:</strong> Free trial only, watermarked audio</li>
              <li>✅ <strong>Scenith:</strong> 40+ voices included free</li>
              <li>❌ <strong>Murf.ai:</strong> Limited voices on free tier</li>
            </ul>
          </div>
                
          <div className="vs-card">
            <h3>Scenith vs Google TTS</h3>
            <ul>
              <li>✅ <strong>Scenith:</strong> User-friendly web interface, no coding</li>
              <li>❌ <strong>Google TTS:</strong> Requires API integration, technical knowledge</li>
              <li>✅ <strong>Scenith:</strong> Instant preview and download</li>
              <li>⚠️ <strong>Google TTS:</strong> Pay-per-character pricing model</li>
            </ul>
          </div>
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
        <h2 id="testimonials-title">Trusted by Over 1500+ Creators Worldwide</h2>
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
            <p>The free BASIC plan includes 2,000 characters per month with a daily limit of 700 characters. CREATOR plan offers 50,000 characters/month with 5,000 characters/day. STUDIO plan provides 150,000 characters/month with no daily limits. Each request supports up to 5,000 characters.</p>
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

    <section className="people-also-ask" role="region" aria-labelledby="paa-title">
      <div className="container">
        <h2 id="paa-title">People Also Ask About AI Voice Generators</h2>
        <div className="paa-grid">
          <div className="paa-item">
            <h3>Can AI voice generators clone my voice?</h3>
            <p>Our tool uses pre-trained AI voices and does not offer voice cloning. For custom voice cloning, specialized services like ElevenLabs or Descript offer this feature, but they require uploading voice samples and typically cost $25-$100/month.</p>
          </div>
                
          <div className="paa-item">
            <h3>Is AI-generated audio detectable?</h3>
            <p>Modern AI voices are highly realistic, but audio analysis tools can sometimes detect synthetic speech through subtle patterns in pitch variation, breathing, and emotional consistency. For most use cases (YouTube, podcasts, e-learning), AI voices are indistinguishable to human listeners.</p>
          </div>
                
          <div className="paa-item">
            <h3>Which AI voice generator is best for YouTube?</h3>
            <p>The best AI voice for YouTube depends on your niche. For tech reviews, use professional male voices. For lifestyle content, conversational female voices perform better. Our tool offers 40+ voices optimized for video content with natural pacing and emphasis.</p>
          </div>
                
          <div className="paa-item">
            <h3>Do I need attribution for AI-generated voices?</h3>
            <p>No attribution required! All audio generated with Scenith comes with full commercial use rights. You can use it in YouTube videos, client projects, podcasts, or any commercial application without crediting our tool.</p>
          </div>
        </div>
      </div>
    </section>    

    {/* ORIGINAL CTA Section */}
    <section className="cta-section" id="get-started" role="region" aria-labelledby="cta-title">
      <div className="container">
        <h2 id="cta-title">Ready to Create Stunning Audio?</h2>
        <p>Join over 1500+ creators who trust our AI voice generator. Start producing professional voiceovers for your videos, podcasts, and projects today - completely free!</p>
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
                <a href="/signup">Sign up</a>
              </p>
            </div>
          </motion.div>
        </div>
      )}

      {showUpgradeModal && (
        <div
          className="modal-overlay"
          onClick={(e) => { if (e.target === e.currentTarget) setShowUpgradeModal(false); }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 40 }}
            transition={{ type: 'spring', stiffness: 340, damping: 28 }}
            style={{
              background: '#0d0d1c',
              borderRadius: '24px',
              padding: '0',
              maxWidth: '480px',
              width: '94%',
              maxHeight: '82vh',
              overflowY: 'auto',
              position: 'relative',
              border: '1px solid rgba(99,85,220,0.35)',
              boxShadow: '0 40px 120px rgba(0,0,0,0.75)',
            }}
          >
            {/* Dismiss */}
            <button
              onClick={() => setShowUpgradeModal(false)}
              style={{
                position: 'absolute', top: 14, right: 14, zIndex: 10,
                background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '8px', width: 32, height: 32, cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#6a6a8a', fontSize: '16px',
              }}
              aria-label="Close"
            >
              <FaTimes size={11} />
            </button>
            
            {/* Top gradient bar */}
            <div style={{
              height: '5px', borderRadius: '24px 24px 0 0',
              background: upgradeModalType === 'download'
                ? 'linear-gradient(90deg, #10b981, #059669)'
                : upgradeModalType === 'limit_warning'
                ? 'linear-gradient(90deg, #f59e0b, #f97316)'
                : 'linear-gradient(90deg, #6355dc, #8b5cf6, #f06cbe)',
            }} />

            <div style={{ padding: '28px 28px 24px' }}>
          
              {/* Icon + headline */}
              <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <div style={{ fontSize: '44px', marginBottom: '10px', lineHeight: 1 }}>
                  {upgradeModalType === 'first_gen' && '🎉'}
                  {upgradeModalType === 'repeat_gen' && '🚀'}
                  {upgradeModalType === 'download' && '✅'}
                  {upgradeModalType === 'limit_warning' && '⚠️'}
                </div>
                <h2 style={{
                  fontFamily: "'Cabinet Grotesk', sans-serif",
                  fontSize: '21px', fontWeight: 900, letterSpacing: '-0.025em',
                  color: '#e2e2ef', marginBottom: '8px',
                }}>
                  {upgradeModalType === 'first_gen' && 'Your First AI Voice is Ready! 🔥'}
                  {upgradeModalType === 'repeat_gen' && "You're on a Roll — Unlock More!"}
                  {upgradeModalType === 'download' && 'Downloaded! Ready for More?'}
                  {upgradeModalType === 'limit_warning' && 'Almost Out of Characters'}
                </h2>
                <p style={{ fontSize: '13px', color: '#6a6a8a', lineHeight: 1.55, maxWidth: '340px', margin: '0 auto' }}>
                  {upgradeModalType === 'first_gen' && (<>You just heard what professional AI voice sounds like. <strong style={{ color: '#a899f5' }}>Creator Lite gives you 5× more</strong> — enough for videos, reels & campaigns.</>)}
                  {upgradeModalType === 'repeat_gen' && (<>You keep coming back because it works. <strong style={{ color: '#a899f5' }}>Stop hitting free limits</strong> — Creator Lite unlocks 10,000 chars/mo + emotions.</>)}
                  {upgradeModalType === 'download' && (<>Great content deserves great tools. <strong style={{ color: '#34d399' }}>Upgrade now</strong> and get 5× more characters plus speed videos, BG removal & AI images.</>)}
                  {upgradeModalType === 'limit_warning' && (<>You're running low. <strong style={{ color: '#f59e0b' }}>Don't lose momentum</strong> — upgrade and keep creating without interruption.</>)}
                </p>
              </div>
              
              {/* Side-by-side comparison */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '18px' }}>
                {/* Free column */}
                <div style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '12px', padding: '14px 12px',
                }}>
                  <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em', color: '#3a3a52', textTransform: 'uppercase', marginBottom: '10px' }}>
                    Free Plan
                  </div>
                  {[
                    { icon: '🎤', text: '2,000 chars/mo' },
                    { icon: '📅', text: '200 chars/day' },
                    { icon: '📝', text: '150 chars/request' },
                    { icon: '🎬', text: '5 speed videos' },
                    { icon: '🖼️', text: '5 BG removals' },
                    { icon: '🤖', text: 'No AI images' },
                    { icon: '🎭', text: 'No emotions' },
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: i < 6 ? '7px' : 0 }}>
                      <span style={{ fontSize: '13px', flexShrink: 0 }}>{item.icon}</span>
                      <span style={{ fontSize: '11.5px', color: '#44445e' }}>{item.text}</span>
                    </div>
                  ))}
                </div>
                
                {/* Creator Lite column */}
                <div style={{
                  background: 'rgba(99,85,220,0.08)',
                  border: '1px solid rgba(99,85,220,0.28)',
                  borderRadius: '12px', padding: '14px 12px',
                  position: 'relative',
                }}>
                  <div style={{
                    position: 'absolute', top: -10, left: '50%', transform: 'translateX(-50%)',
                    background: 'linear-gradient(135deg, #6355dc, #8b5cf6)',
                    color: '#fff', fontSize: '9px', fontWeight: 800, letterSpacing: '0.08em',
                    padding: '3px 10px', borderRadius: '999px', whiteSpace: 'nowrap',
                  }}>⭐ BEST VALUE</div>
                  <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em', color: '#6355dc', textTransform: 'uppercase', marginBottom: '10px' }}>
                    Creator Lite
                  </div>
                  {[
                    { icon: '🎤', text: '10,000 chars/mo' },
                    { icon: '📅', text: '2,500 chars/day' },
                    { icon: '📝', text: '700 chars/request' },
                    { icon: '🎬', text: '30 speed videos' },
                    { icon: '🖼️', text: '100 BG removals' },
                    { icon: '🤖', text: '50 AI images/mo' },
                    { icon: '🎭', text: '9 emotion presets' },
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: i < 6 ? '7px' : 0 }}>
                      <span style={{ fontSize: '13px', flexShrink: 0 }}>{item.icon}</span>
                      <span style={{ fontSize: '11.5px', color: '#b0b0cc', fontWeight: 500 }}>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
                
              {/* Price + CTA */}
              <div style={{ textAlign: 'center', marginBottom: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '6px', marginBottom: '2px' }}>
                  <span style={{ fontSize: '13px', color: '#3a3a52', textDecoration: 'line-through' }}>₹132 / $7</span>
                  <span style={{
                    fontFamily: "'Cabinet Grotesk', sans-serif",
                    fontSize: '36px', fontWeight: 900, color: '#e2e2ef', letterSpacing: '-0.03em',
                  }}>₹99 / $5</span>
                  <span style={{ fontSize: '13px', color: '#55557a' }}>/mo</span>
                  <span style={{
                    background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.28)',
                    color: '#34d399', fontSize: '10px', fontWeight: 700,
                    padding: '3px 8px', borderRadius: '999px',
                  }}>25% OFF</span>
                </div>
                <p style={{ fontSize: '11px', color: '#3a3a52', marginBottom: '14px' }}>Cancel anytime · No contracts</p>
                
                
                <a  href="/pricing"
                  onClick={() => setShowUpgradeModal(false)}
                  style={{
                    display: 'block', width: '100%', padding: '13px 24px',
                    background: 'linear-gradient(135deg, #6355dc 0%, #8b5cf6 100%)',
                    color: '#fff', borderRadius: '12px', textDecoration: 'none',
                    fontSize: '14px', fontWeight: 700, letterSpacing: '0.01em',
                    boxShadow: '0 8px 32px rgba(99,85,220,0.45)', textAlign: 'center',
                  }}
                >
                  Upgrade to Creator Lite →
                </a>
              </div>
                
              {/* Social proof + dismiss */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '11px', color: '#3a3a52' }}>⭐⭐⭐⭐⭐ Trusted by 1,500+ creators</span>
                <button
                  onClick={() => setShowUpgradeModal(false)}
                  style={{ background: 'none', border: 'none', color: '#3a3a52', fontSize: '11px', cursor: 'pointer', textDecoration: 'underline' }}
                >
                  Maybe later
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )} 

      {showWelcomeModal && (
        <div
          className="modal-overlay"
          onClick={(e) => { if (e.target === e.currentTarget) setShowWelcomeModal(false); }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 32 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 32 }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            style={{
              background: '#0d0d1c',
              borderRadius: '24px',
              padding: '0',
              maxWidth: '560px',
              width: '96%',
              maxHeight: '85vh',
              overflowY: 'auto',
              position: 'relative',
              border: '1px solid rgba(99,85,220,0.3)',
              boxShadow: '0 40px 120px rgba(0,0,0,0.75)',
            }}
          >
            <button
              onClick={() => setShowWelcomeModal(false)}
              style={{
                position: 'absolute', top: 14, right: 14, zIndex: 10,
                background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '8px', width: 32, height: 32, cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#6a6a8a',
              }}
              aria-label="Close"
            >
              <FaTimes size={11} />
            </button>
            
            {/* Top bar */}
            <div style={{
              height: '5px', borderRadius: '24px 24px 0 0',
              background: 'linear-gradient(90deg, #6355dc, #8b5cf6, #f06cbe)',
            }} />

            <div style={{ padding: '28px 28px 24px' }}>
          
              {/* Header */}
              <div style={{ textAlign: 'center', marginBottom: '22px' }}>
                <div style={{ fontSize: '40px', marginBottom: '10px' }}>👋</div>
                <h2 style={{
                  fontFamily: "'Cabinet Grotesk', sans-serif",
                  fontSize: '20px', fontWeight: 900, letterSpacing: '-0.025em',
                  color: '#e2e2ef', marginBottom: '6px',
                }}>
                  Welcome to Scenith AI Voice
                </h2>
                <p style={{ fontSize: '13px', color: '#6a6a8a', maxWidth: '380px', margin: '0 auto', lineHeight: 1.55 }}>
                  You're on the <strong style={{ color: '#a899f5' }}>Free Plan</strong>. Here's what you get — and what you unlock with <strong style={{ color: '#a899f5' }}>Creator Lite</strong> for just ₹99 / $5/mo.
                </p>
              </div>
              
              {/* Side-by-side */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '20px' }}>
                {/* Free */}
                <div style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '14px', padding: '16px 14px',
                }}>
                  <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', color: '#44445e', textTransform: 'uppercase', marginBottom: '12px' }}>
                    🆓 Free Plan
                  </div>
                  {[
                    { icon: '🎤', label: 'Voice chars', val: '600 /mo' },
                    { icon: '📅', label: 'Daily limit', val: '150 /day' },
                    { icon: '📝', label: 'Per request', val: '80 chars' },
                    { icon: '🎬', label: 'Speed videos', val: '5 /mo' },
                    { icon: '🖼️', label: 'BG removals', val: '5 /mo' },
                    { icon: '🤖', label: 'AI images', val: '✗ None' },
                    { icon: '🎭', label: 'Emotions', val: '✗ Locked' },
                    { icon: '📤', label: 'Export', val: '720p' },
                  ].map((item, i) => (
                    <div key={i} style={{ marginBottom: i < 7 ? '8px' : 0 }}>
                      <div style={{ fontSize: '10px', color: '#3a3a52', marginBottom: '1px' }}>{item.icon} {item.label}</div>
                      <div style={{ fontSize: '12px', color: '#55557a', fontWeight: 600 }}>{item.val}</div>
                    </div>
                  ))}
                </div>
                
                {/* Creator Lite */}
                <div style={{
                  background: 'rgba(99,85,220,0.08)',
                  border: '1px solid rgba(99,85,220,0.3)',
                  borderRadius: '14px', padding: '16px 14px',
                  position: 'relative',
                }}>
                  <div style={{
                    position: 'absolute', top: -11, left: '50%', transform: 'translateX(-50%)',
                    background: 'linear-gradient(135deg, #6355dc, #8b5cf6)',
                    color: '#fff', fontSize: '9px', fontWeight: 800, letterSpacing: '0.08em',
                    padding: '3px 12px', borderRadius: '999px', whiteSpace: 'nowrap',
                  }}>⭐ UPGRADE</div>
                  <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', color: '#6355dc', textTransform: 'uppercase', marginBottom: '12px' }}>
                    Creator Lite
                  </div>
                  {[
                    { icon: '🎤', label: 'Voice chars', val: '10,000 /mo', hl: true },
                    { icon: '📅', label: 'Daily limit', val: '2,500 /day', hl: true },
                    { icon: '📝', label: 'Per request', val: '700 chars', hl: true },
                    { icon: '🎬', label: 'Speed videos', val: '30 /mo', hl: true },
                    { icon: '🖼️', label: 'BG removals', val: '100 /mo', hl: true },
                    { icon: '🤖', label: 'AI images', val: '50 /mo', hl: true },
                    { icon: '🎭', label: 'Emotions', val: '9 presets ✓', hl: true },
                    { icon: '📤', label: 'Export', val: '1080p', hl: true },
                  ].map((item, i) => (
                    <div key={i} style={{ marginBottom: i < 7 ? '8px' : 0 }}>
                      <div style={{ fontSize: '10px', color: '#6355dc', marginBottom: '1px' }}>{item.icon} {item.label}</div>
                      <div style={{ fontSize: '12px', color: '#a899f5', fontWeight: 700 }}>{item.val}</div>
                    </div>
                  ))}
                </div>
              </div>
                
              {/* Price */}
              <div style={{ textAlign: 'center', marginBottom: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '6px', marginBottom: '2px' }}>
                  <span style={{ fontSize: '12px', color: '#3a3a52', textDecoration: 'line-through' }}>₹132 / $7</span>
                  <span style={{
                    fontFamily: "'Cabinet Grotesk', sans-serif",
                    fontSize: '34px', fontWeight: 900, color: '#e2e2ef', letterSpacing: '-0.03em',
                  }}>₹99 / $5</span>
                  <span style={{ fontSize: '12px', color: '#55557a' }}>/mo</span>
                  <span style={{
                    background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.28)',
                    color: '#34d399', fontSize: '10px', fontWeight: 700,
                    padding: '3px 8px', borderRadius: '999px',
                  }}>25% OFF</span>
                </div>
                <p style={{ fontSize: '11px', color: '#3a3a52', marginBottom: '14px' }}>Cancel anytime · No hidden fees</p>
                
                
                <a  href="/pricing"
                  onClick={() => setShowWelcomeModal(false)}
                  style={{
                    display: 'block', width: '100%', padding: '13px 24px',
                    background: 'linear-gradient(135deg, #6355dc 0%, #8b5cf6 100%)',
                    color: '#fff', borderRadius: '12px', textDecoration: 'none',
                    fontSize: '14px', fontWeight: 700,
                    boxShadow: '0 8px 32px rgba(99,85,220,0.45)', textAlign: 'center',
                  }}
                >
                  Upgrade to Creator Lite — ₹99 / $5/mo →
                </a>
              </div>
                
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '11px', color: '#3a3a52' }}>⭐⭐⭐⭐⭐ 1,500+ creators trust Scenith</span>
                <button
                  onClick={() => setShowWelcomeModal(false)}
                  style={{ background: 'none', border: 'none', color: '#3a3a52', fontSize: '11px', cursor: 'pointer', textDecoration: 'underline' }}
                >
                  Continue free
                </button>
              </div>
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
              <strong>Upgrade for 37× More Characters</strong>
              <small>Creator Spark from ₹499/mo</small>
            </span>
          </button>
        </div>
      )}          
    </div>
  );
};

export default AIVoiceGeneratorClient;