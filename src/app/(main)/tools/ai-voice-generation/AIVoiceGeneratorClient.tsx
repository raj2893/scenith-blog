"use client";

import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import axios from 'axios';
import { motion } from 'framer-motion';
import { API_BASE_URL, CDN_URL } from '../../../config';
import { FaTimes } from 'react-icons/fa';
import '../../../../../styles/tools/AIVoiceGenerator.css';
import SEOSections from './SEOSections';

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
  const [isPageLoading, setIsPageLoading] = useState<boolean>(true);
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
  const [showLimitModal, setShowLimitModal] = useState(false);
  const [showDownloadToast, setShowDownloadToast] = useState(false);
  const [generationCount, setGenerationCount] = useState(0);
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
        })
        .finally(() => {
          setIsPageLoading(false);
        });
    } else {
      setIsLoggedIn(false);
      setIsPageLoading(false);
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
    }, 15000);
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

if (isPageLoading) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #0f0c29 0%, #1e1a45 60%, #0d0b22 100%)',
        gap: '16px',
      }}>
        <div style={{
          width: '48px', height: '48px', borderRadius: '50%',
          border: '3px solid rgba(102,126,234,0.2)',
          borderTopColor: '#6366F1',
          animation: 'spin 0.9s linear infinite',
        }} />
        <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.9rem', fontWeight: 500 }}>
          Loading...
        </p>
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

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
              {/* Sticky credit display */}
              {isLoggedIn && ttsUsage && (
                <div style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '10px 16px', marginBottom: '16px',
                  background: 'linear-gradient(135deg, rgba(99,85,220,0.05), rgba(139,92,246,0.05))',
                  border: '1px solid rgba(99,85,220,0.15)', borderRadius: '12px',
                }}>
                  <div style={{display:'flex', alignItems:'center', gap:'8px', fontSize:'0.875rem', fontWeight:600, color:'#3d3d6b'}}>
                    <span>💳</span>
                    {ttsUsage.isPaid
                      ? <span><strong style={{color:'#6355dc'}}>{ttsUsage.balance}</strong> credits remaining</span>
                      : <span><strong style={{color:'#059669'}}>{(ttsUsage.freeVoiceCharsLimit ?? 0) - (ttsUsage.freeVoiceCharsUsed ?? 0)}</strong> free chars left this month</span>
                    }
                  </div>
                  {!ttsUsage.isPaid && (
                    <a href="/pricing" style={{
                      fontSize:'0.75rem', fontWeight:700, color:'#6355dc',
                      textDecoration:'none', padding:'4px 12px',
                      background:'rgba(99,85,220,0.08)', borderRadius:'20px',
                      border:'1px solid rgba(99,85,220,0.2)'
                    }}>Upgrade →</a>
                  )}
                </div>
              )}
              
              {/* Non-logged-in users: show default 50 credits */}
              {/* Non-logged-in users: hide credit bar, show nothing — CTA is inside the box */}                        
                <div style={{
                  border: '1.5px solid rgba(99,85,220,0.25)', borderRadius: 16,
                  background: '#fff', overflow: 'hidden',
                  boxShadow: '0 2px 12px rgba(99,85,220,0.08)', marginBottom: 12,
                  position: 'relative',
                }}>
                  {/* Textarea */}
                  <div style={{ position: 'relative' }}>
                    <textarea
                      value={aiVoiceText}
                      onChange={handleTextChange}
                      placeholder="✨ Type or paste your script here..."
                      className={`ai-voice-textarea ${characterCount > maxCharsPerRequest ? 'limit-exceeded' : ''}`}
                      disabled={limitsExceeded}
                      aria-label="Text input for AI voice generation"
                      style={{
                        width: '100%', minHeight: 100, maxHeight: 180,
                        padding: '14px 16px 8px', resize: 'none', border: 'none', outline: 'none',
                        background: 'transparent', color: '#2d2d5e',
                        fontSize: 14, lineHeight: 1.6, fontFamily: 'inherit',
                        boxSizing: 'border-box',
                      }}
                    />

                    {!isLoggedIn && (
                      <div style={{
                        position: 'absolute', inset: 0, zIndex: 10,
                        background: 'linear-gradient(135deg, #6355dc, #8b5cf6)',
                        borderRadius: 16,
                        display: 'flex', flexDirection: 'column',
                        alignItems: 'center', justifyContent: 'center',
                        gap: 10, padding: '28px 24px', textAlign: 'center',
                      }}>
                        <span style={{ fontSize: 32 }}>🎤</span>
                        <h4 style={{ color: '#fff', fontSize: 18, fontWeight: 800, margin: 0 }}>
                          Try AI Voice Generation Free
                        </h4>
                        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 13, margin: 0 }}>
                          Sign up for 50 free credits — no card needed
                        </p>
                      </div>
                    )}

                    {isLoggedIn && limitsExceeded && (
                      <div className="textarea-overlay">
                        <div className="overlay-content">
                          <span className="lock-icon">⚠️</span>
                          <h4>Character Limit Reached</h4>
                          <p>You've used all your {userProfile.role} plan characters</p>
                          <a href="/pricing" className="overlay-login-btn">Upgrade Now</a>
                        </div>
                      </div>
                    )}

                    {isLoggedIn && characterCount > maxCharsPerRequest && (
                      <div style={{
                        margin: '0 14px 6px', padding: '6px 10px', borderRadius: 8,
                        background: 'rgba(220,38,38,0.06)', border: '1px solid rgba(220,38,38,0.2)',
                        fontSize: 12, color: '#dc2626', display: 'flex', alignItems: 'center', gap: 6,
                      }}>
                        ⚠️ Exceeds limit by {(characterCount - maxCharsPerRequest).toLocaleString()} chars
                      </div>
                    )}
                  </div>

                  {/* ── Bottom toolbar ── */}
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: 6,
                    padding: '8px 12px', borderTop: '1px solid rgba(99,85,220,0.1)',
                    background: '#fafafa', flexWrap: 'wrap',
                  }}>
                  
                    {/* Speed — paid only, logged in only */}
                    {isLoggedIn && (
                      <select
                        value={hasSpeedAccess ? speed : 1.0}
                        onChange={(e) => {
                          if (!hasSpeedAccess) return;
                          const val = parseFloat(e.target.value);
                          setSpeed(val);
                          setSpeedInput(String(val));
                        }}
                        disabled={!hasSpeedAccess}
                        title={!hasSpeedAccess ? 'Speed control requires paid plan' : 'Playback speed'}
                        style={{
                          padding: '5px 28px 5px 10px', borderRadius: 8, fontSize: 12, fontWeight: 600,
                          border: '1.5px solid rgba(99,85,220,0.2)',
                          background: hasSpeedAccess ? '#fff' : '#f4f4f8',
                          color: hasSpeedAccess ? '#6355dc' : '#aaa',
                          cursor: hasSpeedAccess ? 'pointer' : 'not-allowed',
                          appearance: 'none', fontFamily: 'inherit',
                          backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 12 12'%3E%3Cpath fill='%236355dc' d='M6 9L1 4h10z'/%3E%3C/svg%3E\")",
                          backgroundRepeat: 'no-repeat', backgroundPosition: 'right 8px center',
                        }}
                      >
                        {[0.5, 1.0, 1.25, 1.5, 1.75, 2.0, 3.0, 4.0].map(s => (
                          <option key={s} value={s}>⚡ {s}x{!hasSpeedAccess && s !== 1.0 ? ' 👑' : ''}</option>
                        ))}
                      </select>
                    )}

                    {/* Templates — logged in only */}
                    {isLoggedIn && (
                      <button
                        onClick={() => {
                          scrollToSection('script-templates');
                          toggleScriptTemplates();
                        }}
                        style={{
                          padding: '5px 10px', borderRadius: 8, fontSize: 12, fontWeight: 600,
                          border: '1.5px solid rgba(99,85,220,0.2)', background: '#fff',
                          color: '#8888bb', cursor: 'pointer', whiteSpace: 'nowrap',
                        }}
                      >
                        📝 Templates
                      </button>
                    )}

                    {/* Credits pill */}
                    <span style={{
                      fontSize: 11.5, fontWeight: 700, padding: '4px 10px', borderRadius: 999,
                      background: 'rgba(99,85,220,0.08)', color: '#6355dc', whiteSpace: 'nowrap',
                    }}>
                      {isLoggedIn
                        ? ttsUsage?.isPaid
                          ? `⚡ ${ttsUsage.balance} cr · ${Math.ceil(aiVoiceText.length / 100)}cr/req`
                          : `⚡ ${((ttsUsage?.freeVoiceCharsLimit ?? 0) - (ttsUsage?.freeVoiceCharsUsed ?? 0)).toLocaleString()} chars left`
                        : '⚡ 50 free credits on signup'
                      }
                    </span>
                    
                    {/* char count — only when typing */}
                    {characterCount > 0 && (
                      <span style={{
                        fontSize: 10.5, color: characterCount > maxCharsPerRequest ? '#dc2626' : '#aaaacc',
                        fontWeight: 600, whiteSpace: 'nowrap',
                      }}>
                        {characterCount}/{maxCharsPerRequest}
                      </span>
                    )}

                    {/* Spacer */}
                    <div style={{ flex: 1 }} />
                  
                    {/* Selected voice pill — shown when a voice is picked */}
                    {selectedVoice && (
                      <div style={{
                        display: 'flex', alignItems: 'center', gap: 5, padding: '4px 8px',
                        borderRadius: 8, background: 'rgba(16,185,129,0.08)',
                        border: '1px solid rgba(16,185,129,0.2)', fontSize: 11.5, color: '#059669',
                        fontWeight: 600, whiteSpace: 'nowrap',
                      }}>
                        {selectedVoice.profileUrl && (
                          <img src={selectedVoice.profileUrl} alt="" width={18} height={18}
                            style={{ borderRadius: '50%', objectFit: 'cover' }} />
                        )}
                        {selectedVoice.humanName || selectedVoice.voiceName} ✓
                      </div>
                    )}

                    {/* Not logged in — single CTA */}
                    {!isLoggedIn && (
                      <button
                        onClick={() => setShowLoginModal(true)}
                        style={{
                          padding: '7px 18px', borderRadius: 10, border: 'none', cursor: 'pointer',
                          background: 'linear-gradient(135deg, #6355dc, #8b5cf6)', color: '#fff',
                          fontWeight: 700, fontSize: 13, fontFamily: 'inherit', whiteSpace: 'nowrap',
                        }}
                      >
                        ✨ Sign Up Free & Generate
                      </button>
                    )}

                    {/* Logged in — generate or upgrade */}
                    {isLoggedIn && (
                      isLimitsExceeded() ? (
                        <a href="https://scenith.in/pricing" style={{
                          padding: '7px 16px', borderRadius: 10,
                          background: 'linear-gradient(135deg, #059669, #10b981)', color: '#fff',
                          fontWeight: 700, fontSize: 12, textDecoration: 'none', whiteSpace: 'nowrap',
                        }}>🚀 Upgrade</a>
                      ) : (
                        <button
                          onClick={handleGenerateAiAudio}
                          disabled={
                            !aiVoiceText.trim() || !selectedVoice || isGenerating ||
                            characterCount > maxCharsPerRequest || wouldExceedLimits
                          }
                          style={{
                            padding: '7px 18px', borderRadius: 10, border: 'none', cursor: 'pointer',
                            background: (!aiVoiceText.trim() || !selectedVoice || isGenerating || characterCount > maxCharsPerRequest || wouldExceedLimits)
                              ? '#e2e2f0' : 'linear-gradient(135deg, #6355dc, #8b5cf6)',
                            color: (!aiVoiceText.trim() || !selectedVoice || isGenerating || characterCount > maxCharsPerRequest || wouldExceedLimits)
                              ? '#aaa' : '#fff',
                            fontWeight: 700, fontSize: 13, fontFamily: 'inherit',
                            display: 'flex', alignItems: 'center', gap: 6, whiteSpace: 'nowrap',
                          }}
                        >
                          {isGenerating ? (
                            <>
                              <span style={{
                                width: 14, height: 14, border: '2px solid rgba(255,255,255,0.3)',
                                borderTopColor: '#fff', borderRadius: '50%',
                                animation: 'spin 0.75s linear infinite', display: 'inline-block',
                              }} />
                              Generating…
                            </>
                          ) : '🎙️ Generate Voice'}
                        </button>
                      )
                    )}
                  </div>
                  
                  {/* Inline upgrade banner below toolbar */}
                  {isLoggedIn && !ttsUsage?.isPaid && (
                    <div style={{
                      padding: '8px 14px',
                      borderTop: '1px solid rgba(99,85,220,0.08)',
                      background: 'linear-gradient(90deg, rgba(99,85,220,0.04), rgba(139,92,246,0.04))',
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      gap: 8,
                    }}>
                      <span style={{ fontSize: 12, color: '#8888bb' }}>
                        ⚡ Free plan · <strong style={{ color: '#6355dc' }}>83× more characters</strong> on Creator Lite
                      </span>
                      <a href="/pricing" style={{
                        fontSize: 11.5, fontWeight: 700, color: '#fff',
                        padding: '4px 12px', borderRadius: 6, whiteSpace: 'nowrap',
                        background: 'linear-gradient(135deg, #6355dc, #8b5cf6)',
                        textDecoration: 'none',
                      }}>
                        Upgrade →
                      </a>
                    </div>
                  )}

                  {!isLoggedIn && (
                    <div style={{
                      padding: '8px 14px',
                      borderTop: '1px solid rgba(99,85,220,0.08)',
                      background: 'linear-gradient(90deg, rgba(99,85,220,0.04), rgba(139,92,246,0.04))',
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      gap: 8,
                    }}>
                      <span style={{ fontSize: 12, color: '#8888bb' }}>
                        ✨ <strong style={{ color: '#6355dc' }}>50 free credits</strong> on signup — no card needed
                      </span>
                      <a href="/signup" style={{
                        fontSize: 11.5, fontWeight: 700, color: '#fff',
                        padding: '4px 12px', borderRadius: 6, whiteSpace: 'nowrap',
                        background: 'linear-gradient(135deg, #6355dc, #8b5cf6)',
                        textDecoration: 'none',
                      }}>
                        Sign Up Free →
                      </a>
                    </div>
                  )}
                  {/* Low credits warning inline */}
                  {isLoggedIn && ttsUsage && !ttsUsage.isPaid &&
                    ((ttsUsage.freeVoiceCharsUsed ?? 0) / (ttsUsage.freeVoiceCharsLimit ?? 1)) >= 0.80 && (
                    <div style={{
                      padding: '8px 14px', borderTop: '1px solid rgba(245,158,11,0.15)',
                      background: 'rgba(245,158,11,0.04)', fontSize: 12, color: '#92400e',
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    }}>
                      <span>⚠️ Almost out of free chars</span>
                      <a href="/pricing" style={{
                        fontSize: 11, fontWeight: 700, color: '#f59e0b', textDecoration: 'none',
                        padding: '3px 8px', borderRadius: 6, background: 'rgba(245,158,11,0.12)',
                      }}>Upgrade →</a>
                    </div>
                  )}

                  {/* Limit modal inline */}
                  {showLimitModal && (
                    <div style={{
                      padding: '12px 14px', borderTop: '1px solid rgba(245,158,11,0.2)',
                      background: 'rgba(245,158,11,0.05)',
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10,
                    }}>
                      <span style={{ fontSize: 12.5, color: '#92400e', fontWeight: 600 }}>
                        ⚠️ {Math.round(((ttsUsage?.freeVoiceCharsUsed ?? 0) / (ttsUsage?.freeVoiceCharsLimit ?? 1)) * 100)}% of free limit used
                      </span>
                      <div style={{ display: 'flex', gap: 6 }}>
                        <a href="/pricing" style={{
                          fontSize: 12, fontWeight: 700, padding: '4px 12px', borderRadius: 8,
                          background: 'linear-gradient(135deg, #6355dc, #8b5cf6)', color: '#fff',
                          textDecoration: 'none',
                        }}>Upgrade</a>
                        <button onClick={() => setShowLimitModal(false)} style={{
                          fontSize: 12, fontWeight: 600, padding: '4px 10px', borderRadius: 8,
                          border: '1px solid rgba(0,0,0,0.1)', background: '#fff', cursor: 'pointer',
                          color: '#666',
                        }}>Dismiss</button>
                      </div>
                    </div>
                  )}
                </div>                               
            </div>

            <div className="voice-list-section">
              <div className="fixed-header">
  <h3>Select a Voice</h3>
  {/* Provider tabs — kept for voice list context, synced with toolbar dropdown */}
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
  {/* Filters only for Google — compact, no label banner */}
  {selectedProvider === 'GOOGLE' && (
  <div style={{
    display: 'flex', gap: 6, padding: '6px 12px 10px',
    boxSizing: 'border-box', width: '100%',
  }}>
    <select
      value={filterLanguage}
      onChange={(e) => setFilterLanguage(e.target.value)}
      aria-label="Filter voices by language"
      style={{
        flex: 1, minWidth: 0, boxSizing: 'border-box',
        padding: '6px 8px', borderRadius: 8, fontSize: 11,
        fontWeight: 600, border: '1.5px solid rgba(99,85,220,0.25)',
        background: '#fff', color: '#2d2d5e',
        cursor: 'pointer', appearance: 'none',
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 12 12'%3E%3Cpath fill='%236355dc' d='M6 9L1 4h10z'/%3E%3C/svg%3E\")",
        backgroundRepeat: 'no-repeat', backgroundPosition: 'right 6px center',
        paddingRight: 22, overflow: 'hidden', textOverflow: 'ellipsis',
      }}
    >
      <option value="">🌍 Language</option>
      {uniqueLanguages.map((lang) => (
        <option key={lang} value={lang}>{lang}</option>
      ))}
    </select>
    <select
      value={filterGender}
      onChange={(e) => setFilterGender(e.target.value)}
      aria-label="Filter voices by gender"
      style={{
        flex: 1, minWidth: 0, boxSizing: 'border-box',
        padding: '6px 8px', borderRadius: 8, fontSize: 11,
        fontWeight: 600, border: '1.5px solid rgba(99,85,220,0.25)',
        background: '#fff', color: '#2d2d5e',
        cursor: 'pointer', appearance: 'none',
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 12 12'%3E%3Cpath fill='%236355dc' d='M6 9L1 4h10z'/%3E%3C/svg%3E\")",
        backgroundRepeat: 'no-repeat', backgroundPosition: 'right 6px center',
        paddingRight: 22, overflow: 'hidden', textOverflow: 'ellipsis',
      }}
    >
      <option value="">👤 Gender</option>
      {uniqueGenders.map((gen) => (
        <option key={gen} value={gen}>{gen}</option>
      ))}
    </select>
  </div>
)}
</div>

              {selectedVoice && (
                <div style={{
                  margin: '0 20px 0', padding: '8px 14px',
                  background: 'linear-gradient(135deg, rgba(99,85,220,0.08), rgba(139,92,246,0.06))',
                  border: '1px solid rgba(99,85,220,0.2)', borderRadius: '10px',
                  display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.825rem',
                }}>
                  <img
                    src={selectedVoice.profileUrl || ''}
                    alt="" width={28} height={28}
                    style={{borderRadius:'50%', objectFit:'cover'}}
                  />
                  <span style={{fontWeight:600, color:'#2d2d5e'}}>
                    {selectedVoice.humanName || selectedVoice.voiceName}
                  </span>
                  <span style={{color:'#9999bb'}}>·</span>
                  <span style={{color:'#9999bb'}}>{selectedVoice.language}</span>
                  <span style={{
                    marginLeft:'auto', color:'#059669', fontWeight:700,
                    fontSize:'0.75rem', background:'rgba(16,185,129,0.08)',
                    padding:'2px 8px', borderRadius:'12px', border:'1px solid rgba(16,185,129,0.2)'
                  }}>✓ Selected</span>
                </div>
              )}              
              
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

                <div style={{
                  marginTop: 14, padding: '12px 16px',
                  background: 'linear-gradient(135deg, rgba(99,85,220,0.07), rgba(139,92,246,0.05))',
                  border: '1px solid rgba(99,85,220,0.18)',
                  borderRadius: 12,
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  gap: 10, flexWrap: 'wrap',
                }}>
                  <span style={{ fontSize: 13, color: '#2d2d5e', fontWeight: 500 }}>
                    Love this result? Create more with Premium credits! ✨
                  </span>
                  <a href="/pricing" style={{
                    fontSize: 12, fontWeight: 700, color: '#fff',
                    padding: '6px 14px', borderRadius: 8,
                    background: 'linear-gradient(135deg, #6355dc, #8b5cf6)',
                    textDecoration: 'none', whiteSpace: 'nowrap',
                    boxShadow: '0 4px 14px rgba(99,85,220,0.3)',
                  }}>View Plans →</a>
                </div>                
          
                {generationCount === 1 && !ttsUsage?.isPaid && (
                  <div style={{
                    marginTop:'20px', padding:'16px 20px',
                    background:'linear-gradient(135deg, rgba(99,85,220,0.06), rgba(236,72,153,0.04))',
                    border:'1px solid rgba(99,85,220,0.18)', borderRadius:'14px',
                    display:'flex', alignItems:'center', gap:'14px', flexWrap:'wrap',
                  }}>
                    <span style={{fontSize:'1.5rem'}}>🎉</span>
                    <div style={{flex:1}}>
                      <strong style={{color:'#2d2d5e', display:'block', marginBottom:'3px'}}>
                        Your first AI voice is ready!
                      </strong>
                      <span style={{fontSize:'0.875rem', color:'#8888bb'}}>
                        Liked the quality? Starter gives you <strong style={{color:'#6355dc'}}>300 credits</strong> + 50,000 chars/mo for $9/mo.
                      </span>
                    </div>
                    <a href="/pricing" style={{
                      padding:'10px 20px', borderRadius:'10px', fontWeight:700,
                      fontSize:'0.875rem', textDecoration:'none', color:'#fff',
                      background:'linear-gradient(135deg,#6355dc,#8b5cf6)',
                      boxShadow:'0 4px 14px rgba(99,85,220,0.3)', whiteSpace:'nowrap'
                    }}>
                      See Plans →
                    </a>
                  </div>
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
                        <p>Want to create more? Get 83× more characters with Starter — just $9/mo, 300 credits included.</p>
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

    <SEOSections scrollToSection={scrollToSection} />

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
                  You're on the <strong style={{ color: '#a899f5' }}>Free Plan</strong> (600 chars/mo). Here's what you get — and what you unlock with <strong style={{ color: '#a899f5' }}>Starter</strong> for just $9/mo.
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
                    { icon: '💳', label: 'Credits', val: '50 total' },
                    { icon: '🤖', label: 'Models', val: 'Limited only' },
                    { icon: '💰', label: 'Topups', val: '✗ Not available' },
                  ].map((item, i) => (
                    <div key={i} style={{ marginBottom: i < 3 ? '8px' : 0 }}>
                      <div style={{ fontSize: '10px', color: '#3a3a52', marginBottom: '1px' }}>{item.icon} {item.label}</div>
                      <div style={{ fontSize: '12px', color: '#55557a', fontWeight: 600 }}>{item.val}</div>
                    </div>
                  ))}
                </div>

                {/* Starter */}
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
                  }}>⭐ MOST POPULAR</div>
                  <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', color: '#6355dc', textTransform: 'uppercase', marginBottom: '12px' }}>
                    Starter — $9/mo
                  </div>
                  {[
                    { icon: '🎤', label: 'Voice chars', val: '50,000 /mo' },
                    { icon: '💳', label: 'Credits', val: '300 /mo' },
                    { icon: '🤖', label: 'Models', val: 'All models ✓' },
                    { icon: '💰', label: 'Topups', val: '✓ Available' },
                  ].map((item, i) => (
                    <div key={i} style={{ marginBottom: i < 3 ? '8px' : 0 }}>
                      <div style={{ fontSize: '10px', color: '#6355dc', marginBottom: '1px' }}>{item.icon} {item.label}</div>
                      <div style={{ fontSize: '12px', color: '#a899f5', fontWeight: 700 }}>{item.val}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div style={{ textAlign: 'center', marginBottom: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '6px', marginBottom: '4px' }}>
                  <span style={{
                    fontFamily: "'Cabinet Grotesk', sans-serif",
                    fontSize: '34px', fontWeight: 900, color: '#e2e2ef', letterSpacing: '-0.03em',
                  }}>$15</span>
                  <span style={{ fontSize: '12px', color: '#55557a' }}>/mo</span>
                  <span style={{
                    background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.28)',
                    color: '#34d399', fontSize: '10px', fontWeight: 700,
                    padding: '3px 8px', borderRadius: '999px',
                  }}>300 CREDITS INCLUDED</span>
                </div>
                <p style={{ fontSize: '11px', color: '#3a3a52', marginBottom: '14px' }}>Cancel anytime · No hidden fees · All models included</p>

                <a href="/pricing"
                  onClick={() => setShowWelcomeModal(false)}
                  style={{
                    display: 'block', width: '100%', padding: '13px 24px',
                    background: 'linear-gradient(135deg, #6355dc 0%, #8b5cf6 100%)',
                    color: '#fff', borderRadius: '12px', textDecoration: 'none',
                    fontSize: '14px', fontWeight: 700,
                    boxShadow: '0 8px 32px rgba(99,85,220,0.45)', textAlign: 'center',
                  }}
                >
                  Upgrade to Starter — $9/mo →
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
              <strong>Upgrade for 83× More Characters</strong>
              <small>Starter from $9/mo · 300 credits included</small>
            </span>
          </button>
        </div>
      )}    
    </div>
  );
};

export default AIVoiceGeneratorClient;