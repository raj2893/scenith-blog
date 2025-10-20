"use client";

import React, { useState, useEffect, useCallback, useRef } from 'react';
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

  // Handle scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    setIsGenerating(true);
    setError(null);
    try {
      const response = await fetch(`${API_BASE_URL}/api/sole-tts/generate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({
          text: aiVoiceText,
          voiceName: selectedVoice.voiceName,
          languageCode: selectedVoice.languageCode,
        }),
      });

      let errorData;
      if (!response.ok) {
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          errorData = await response.json();
        } else {
          const errorText = await response.text();
          errorData = errorText || `HTTP error! status: ${response.status}`;
        }
        throw new Error(errorData.message || errorData || `HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setGeneratedAudio(`${CDN_URL}/${data.audioPath}`);
      
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
      setError(err.message || 'Failed to generate audio.');
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
      } catch (error) {
        console.error('Download failed:', error);
        // Fallback to opening in new tab if download fails
        window.open(generatedAudio, '_blank');
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

  // Current date for SEO freshness
  const currentYear = new Date().getFullYear();

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
          <h1>Free AI Voice Generator - Text to Speech Online in Seconds</h1>
          <p className="hero-description">
            Transform your text into lifelike AI voices instantly. Choose from 100+ natural-sounding voices across multiple languages. Perfect for videos, podcasts, presentations, and content creation. Completely free with MP3 downloads!
          </p>
          <div className="hero-cta-section">
            <div className="main-content">
              <div className="text-input-section">
                <textarea
                  value={aiVoiceText}
                  onChange={(e) => setAiVoiceText(e.target.value)}
                  placeholder="Enter your text here... (Max 13,500 characters for free usage)"
                  className="ai-voice-textarea"
                  disabled={!isLoggedIn}
                  aria-label="Text input for AI voice generation"
                />
                <button
                  className="cta-button generate-voice-button"
                  onClick={handleGenerateAiAudio}
                  disabled={isLoggedIn && (!aiVoiceText.trim() || !selectedVoice) || isGenerating}
                  aria-label="Generate AI voice from text"
                >
                  {isGenerating ? 'Generating...' : isLoggedIn ? 'Generate AI Voice' : 'Login to Generate'}
                </button>
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
                          key={voice.voiceName}
                          className={`voice-item ${selectedVoice?.voiceName === voice.voiceName ? 'selected' : ''}`}
                          onClick={() => setSelectedVoice(voice)}
                          role="button"
                          tabIndex={0}
                          onKeyPress={(e) => e.key === 'Enter' && setSelectedVoice(voice)}
                          aria-label={`Select voice ${voice.humanName || voice.voiceName}`}
                        >
                          <img
                            src={voice.profileUrl}
                            alt={`${voice.humanName || voice.voiceName} profile`}
                            className="voice-profile-image"
                          />
                          <div className="voice-details">
                            <div className="voice-title">{voice.humanName || voice.voiceName}</div>
                            <div className="voice-info">{`${voice.language} (${voice.gender})`}</div>
                          </div>
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
              <span className="trust-item">🎤 100+ Voices</span>
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
          <h2 id="how-it-works-title">How to Generate AI Voices in 3 Simple Steps</h2>
          <p className="section-description">
            Our advanced AI text-to-speech technology makes voice generation effortless. No technical skills needed - just type, select, and download your professional audio.
          </p>
          <div className="steps-grid" role="list">
            <motion.article className="step-card" whileHover={{ scale: 1.05 }} role="listitem">
              <div className="step-number" aria-label="Step 1">1</div>
              <h3>Type Your Text</h3>
              <p>Enter any text up to 13,500 characters. Perfect for scripts, articles, or presentations. Our AI handles natural phrasing and intonation automatically.</p>
            </motion.article>
            <motion.article className="step-card" whileHover={{ scale: 1.05 }} role="listitem">
              <div className="step-number" aria-label="Step 2">2</div>
              <h3>Choose Voice & Language</h3>
              <p>Select from 100+ realistic AI voices across 20+ languages. Filter by gender, accent, and style to find the perfect voice for your project.</p>
            </motion.article>
            <motion.article className="step-card" whileHover={{ scale: 1.05 }} role="listitem">
              <div className="step-number" aria-label="Step 3">3</div>
              <h3>Generate & Download</h3>
              <p>Get your high-quality MP3 audio in seconds. Use immediately in videos, podcasts, or any multimedia project. Commercial use allowed.</p>
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
          <h2 id="features-title">Why Choose Our AI Voice Generator?</h2>
          <p className="section-description">
            Experience professional-grade text-to-speech powered by cutting-edge AI. Create compelling audio content without expensive voice actors or complex recording setups.
          </p>
          <div className="features-grid" role="list">
            <motion.article className="feature-card" whileHover={{ scale: 1.05 }} role="listitem">
              <span className="feature-icon" aria-hidden="true">⚡</span>
              <h3>Instant Generation</h3>
              <p>Advanced neural networks synthesize speech in under 3 seconds. No rendering wait times - get production-ready audio immediately for time-sensitive projects.</p>
            </motion.article>
            <motion.article className="feature-card" whileHover={{ scale: 1.05 }} role="listitem">
              <span className="feature-icon" aria-hidden="true">🎯</span>
              <h3>Natural & Expressive</h3>
              <p>Our AI voices capture human-like intonation, emotion, and pacing. Trained on diverse datasets for authentic delivery that engages listeners and conveys meaning.</p>
            </motion.article>
            <motion.article className="feature-card" whileHover={{ scale: 1.05 }} role="listitem">
              <span className="feature-icon" aria-hidden="true">🆓</span>
              <h3>Unlimited Free Access</h3>
              <p>13,500 characters monthly included free. No subscriptions, no watermarks, full commercial rights. Upgrade for unlimited generation and premium voices.</p>
            </motion.article>
            <motion.article className="feature-card" whileHover={{ scale: 1.05 }} role="listitem">
              <span className="feature-icon" aria-hidden="true">🌍</span>
              <h3>Multi-Language Support</h3>
              <p>Generate speech in English, Spanish, French, German, Chinese, and 20+ languages. Perfect for global content, international marketing, and multilingual projects.</p>
            </motion.article>
            <motion.article className="feature-card" whileHover={{ scale: 1.05 }} role="listitem">
              <span className="feature-icon" aria-hidden="true">📱</span>
              <h3>Mobile Optimized</h3>
              <p>Fully responsive interface works seamlessly on all devices. Create professional voiceovers on-the-go with the same powerful AI capabilities.</p>
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
          <h2 id="use-cases-title">Perfect for Every Audio Project</h2>
          <p className="section-description">
            Discover how creators and businesses use our AI voice generator to produce professional audio across industries.
          </p>
          <div className="use-cases-grid" role="list">
            <motion.article className="use-case-card" whileHover={{ scale: 1.03 }} role="listitem">
              <h3>🎥 Video Content Creation</h3>
              <p>Create engaging voiceovers for YouTube, TikTok, and explainer videos. Multiple voices and languages help localize content for global audiences.</p>
            </motion.article>
            <motion.article className="use-case-card" whileHover={{ scale: 1.03 }} role="listitem">
              <h3>📻 Podcast Production</h3>
              <p>Generate professional intros, narration, and character voices. Save hours of recording time while maintaining broadcast-quality audio standards.</p>
            </motion.article>
            <motion.article className="use-case-card" whileHover={{ scale: 1.03 }} role="listitem">
              <h3>💼 Business Presentations</h3>
              <p>Add compelling narration to PowerPoint, Google Slides, and corporate videos. Choose voices that match your brand personality and professional tone.</p>
            </motion.article>
            <motion.article className="use-case-card" whileHover={{ scale: 1.03 }} role="listitem">
              <h3>🎮 Game Development</h3>
              <p>Create character voices, tutorials, and in-game narration. Diverse accents and genders provide authentic audio for immersive gaming experiences.</p>
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
          <h2 id="testimonials-title">Trusted by Over 25,000+ Creators Worldwide</h2>
          <p className="section-description">
            Join thousands of satisfied users who rely on our AI voice generator for their professional audio projects.
          </p>
          <div className="testimonials-grid" role="list">
            <motion.blockquote className="testimonial-card" whileHover={{ scale: 1.05 }} role="listitem">
              <p>"This tool transformed my YouTube channel! The AI voices sound incredibly natural, and I can produce videos 3x faster. The multi-language support is a game-changer for global reach."</p>
              <cite>– Alex Rivera, YouTube Creator</cite>
              <div className="rating" aria-label="5 out of 5 stars">⭐⭐⭐⭐⭐</div>
            </motion.blockquote>
            <motion.blockquote className="testimonial-card" whileHover={{ scale: 1.05 }} role="listitem">
              <p>"As a podcaster, I've tried many TTS tools, but this one delivers broadcast-quality results. The free tier is generous, and the voice variety helps create dynamic episodes."</p>
              <cite>– Jordan Lee, Podcast Host</cite>
              <div className="rating" aria-label="5 out of 5 stars">⭐⭐⭐⭐⭐</div>
            </motion.blockquote>
            <motion.blockquote className="testimonial-card" whileHover={{ scale: 1.05 }} role="listitem">
              <p>"Perfect for my e-learning courses. Students love the clear, engaging narration. Generating audio in multiple languages has helped expand to international markets seamlessly."</p>
              <cite>– Taylor Morgan, Course Creator</cite>
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
              <h3>What languages and voices are available?</h3>
              <p>We support 20+ languages including English, Spanish, French, German, Mandarin, and more. Each language features multiple natural-sounding voices with various genders and accents.</p>
            </article>
            <article className="faq-item" role="listitem">
              <h3>Is the generated audio commercial use allowed?</h3>
              <p>Yes! All AI-generated audio can be used commercially. You retain full rights to download and use the MP3 files in videos, podcasts, apps, and marketing materials.</p>
            </article>
            <article className="faq-item" role="listitem">
              <h3>How many characters can I generate for free?</h3>
              <p>The free tier includes 13,500 characters per month (approximately 15 minutes of speech). Upgrade to premium for unlimited generation and access to premium voices.</p>
            </article>
            <article className="faq-item" role="listitem">
              <h3>Can I preview voices before generating?</h3>
              <p>Absolutely! Click on any voice in the list to select it. While we don't have sample playback, the detailed descriptions help choose the right voice for your needs.</p>
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

export default AIVoiceGeneratorClient;