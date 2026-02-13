"use client";

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import axios from 'axios';
import { motion } from 'framer-motion';
import { API_BASE_URL, CDN_URL } from '../../../config';
import { FaTimes } from 'react-icons/fa';
import '../../../../../styles/tools/AIImageGeneration.css';

// TypeScript interfaces
interface UserProfile {
  email: string;
  firstName: string;
  lastName: string;
  picture: string | null;
  googleAuth: boolean;
  role: string;
}

interface GeneratedImage {
  id: number;
  imagePath: string;
  prompt: string;
  negativePrompt?: string;
  resolution: string;
  createdAt: string;
}

interface ImageUsage {
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
  imagesPerRequest: number;
  resolution: string;
}

interface LoginFormData {
  email: string;
  password: string;
}

const STYLE_PRESETS = [
  { value: 'realistic', label: 'Realistic Photo', icon: '📷', description: 'Photorealistic images' },
  { value: 'artistic', label: 'Artistic/Painting', icon: '🎨', description: 'Artistic painterly style' },
  { value: 'anime', label: 'Anime/Manga', icon: '🎌', description: 'Japanese anime style' },
  { value: 'digital-art', label: 'Digital Art', icon: '💻', description: 'Modern digital illustration' },
  { value: '3d-render', label: '3D Render', icon: '🎮', description: 'Three-dimensional rendering' },
  { value: 'fantasy', label: 'Fantasy', icon: '🧙', description: 'Fantasy and magical themes' },
  { value: 'sci-fi', label: 'Sci-Fi', icon: '🚀', description: 'Science fiction aesthetic' },
  { value: 'vintage', label: 'Vintage/Retro', icon: '📼', description: 'Nostalgic retro style' },
];

const AIImageGeneratorClient: React.FC = () => {
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

  // Image generation states
  const [prompt, setPrompt] = useState('');
  const [negativePrompt, setNegativePrompt] = useState('');
  const [selectedStyle, setSelectedStyle] = useState<string>('realistic');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImages, setGeneratedImages] = useState<GeneratedImage[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [imageUsage, setImageUsage] = useState<ImageUsage | null>(null);
  const [promptCharCount, setPromptCharCount] = useState(0);
  const [imageHistory, setImageHistory] = useState<GeneratedImage[]>([]);
  const [showHistory, setShowHistory] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState<string>('');

  // Handle scroll for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fetch image usage when user logs in
  useEffect(() => {
    const fetchImageUsage = async () => {
      if (!isLoggedIn) {
        setImageUsage(null);
        return;
      }

      try {
        const response = await fetch(`${API_BASE_URL}/api/sole-image-gen/usage`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setImageUsage(data);
        }
      } catch (error) {
        console.error('Error fetching image usage:', error);
      }
    };

    fetchImageUsage();
  }, [isLoggedIn]);

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

  // Handle login
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

  const handleGenerateImage = async () => {
    if (!isLoggedIn) {
      setShowLoginModal(true);
      return;
    }

    if (!prompt.trim()) {
      setError('Please enter a description for your image.');
      return;
    }

    // Check usage limits
    if (imageUsage) {
      const monthlyExceeded = imageUsage.monthly.limit > 0 && imageUsage.monthly.remaining <= 0;
      const dailyExceeded = imageUsage.daily.limit > 0 && imageUsage.daily.remaining <= 0;

      if (monthlyExceeded) {
        setError(`Monthly image generation limit exceeded for ${imageUsage.role} plan. Upgrade to generate more images.`);
        setTimeout(() => setError(null), 10000);
        return;
      }

      if (dailyExceeded) {
        setError(`Daily image generation limit exceeded for ${imageUsage.role} plan. Try again tomorrow or upgrade for higher limits.`);
        setTimeout(() => setError(null), 10000);
        return;
      }
    }

    setIsGenerating(true);
    setError(null);
    setGeneratedImages([]);

    try {
      // Add style to prompt
      let enhancedPrompt = prompt;
      const stylePreset = STYLE_PRESETS.find(s => s.value === selectedStyle);
      if (stylePreset && selectedStyle !== 'realistic') {
        enhancedPrompt = `${prompt}, ${selectedStyle} style`;
      }

      const response = await fetch(`${API_BASE_URL}/api/sole-image-gen/generate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({
          prompt: enhancedPrompt,
          negativePrompt: negativePrompt.trim() || 'blurry, low quality, distorted',
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.message || `HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const images: GeneratedImage[] = data.images.map((img: any) => ({
        id: img.id,
        imagePath: `${CDN_URL}/${img.imagePath}`,
        prompt: img.prompt,
        negativePrompt: img.negativePrompt,
        resolution: img.resolution,
        createdAt: img.createdAt,
      }));

      setGeneratedImages(images);

      // Refresh usage
      const usageResponse = await fetch(`${API_BASE_URL}/api/sole-image-gen/usage`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      if (usageResponse.ok) {
        const usageData = await usageResponse.json();
        setImageUsage(usageData);
      }

      // Scroll to results
      setTimeout(() => {
        const resultsSection = document.querySelector('.image-results-section');
        if (resultsSection) {
          resultsSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    } catch (err: any) {
      const errorMessage = err.message || 'Failed to generate image.';
      setError(errorMessage);
      
      setTimeout(() => {
        const errorElement = document.querySelector('.error-message');
        if (errorElement) {
          errorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);

      setTimeout(() => setError(null), 10000);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownloadImage = async (imageUrl: string, imageId: number) => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = `ai-image-${imageId}-${Date.now()}.png`;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      window.URL.revokeObjectURL(blobUrl);
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 5000);
    } catch (error) {
      console.error('Download failed:', error);
      window.open(imageUrl, '_blank');
    }
  };

  const fetchHistory = async () => {
    if (!isLoggedIn) return;

    try {
      const response = await fetch(`${API_BASE_URL}/api/sole-image-gen/history`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        const history: GeneratedImage[] = data.map((img: any) => ({
          id: img.id,
          imagePath: `${CDN_URL}/${img.imagePath}`,
          prompt: img.prompt,
          negativePrompt: img.negativePrompt,
          resolution: img.resolution,
          createdAt: img.createdAt,
        }));
        setImageHistory(history);
      }
    } catch (error) {
      console.error('Error fetching history:', error);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      fetchHistory();
    }
  }, [isLoggedIn]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (!section) {
      console.error(`Section with ID ${sectionId} not found.`);
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
    if (!isLoggedIn || !imageUsage) return false;
    const monthlyExceeded = imageUsage.monthly.limit > 0 && imageUsage.monthly.remaining <= 0;
    const dailyExceeded = imageUsage.daily.limit > 0 && imageUsage.daily.remaining <= 0;
    return monthlyExceeded || dailyExceeded;
  }, [isLoggedIn, imageUsage]);

  return (
    <div className="ai-image-generator-page">
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
            <span itemProp="name">AI Image Generator</span>
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
                '@id': 'https://scenith.in/tools/ai-image-generation#webapp',
                name: 'Scenith AI Image Generator',
                description: 'Free AI-powered image generator for creating stunning visuals from text descriptions. Generate high-quality images instantly for social media, marketing, and creative projects.',
                url: 'https://scenith.in/tools/ai-image-generation',
                applicationCategory: 'MultimediaApplication',
                operatingSystem: 'Web Browser',
                offers: {
                  '@type': 'Offer',
                  price: '0',
                  priceCurrency: 'USD',
                  availability: 'https://schema.org/InStock'
                },
                featureList: [
                  'Text-to-image AI generation',
                  '8 artistic styles',
                  'High-resolution output',
                  'Commercial use allowed',
                  'No watermarks'
                ],
                screenshot: 'https://scenith.in/images/AIImageGenerationSS.png',
                author: {
                  '@type': 'Organization',
                  '@id': 'https://scenith.in/#organization',
                  name: 'Scenith'
                }
              },
              {
                '@type': 'BreadcrumbList',
                '@id': 'https://scenith.in/tools/ai-image-generation#breadcrumb',
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
                    name: 'AI Image Generator',
                    item: 'https://scenith.in/tools/ai-image-generation'
                  }
                ]
              },
              {
                '@type': 'FAQPage',
                '@id': 'https://scenith.in/tools/ai-image-generation#faq',
                mainEntity: [
                  {
                    '@type': 'Question',
                    name: 'What is an AI image generator?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'An AI image generator uses artificial intelligence to create images from text descriptions. It analyzes your prompt, understands the context, and generates unique visual content using deep learning models trained on millions of images.'
                    }
                  },
                  {
                    '@type': 'Question',
                    name: 'Is AI image generation free?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes! The free BASIC plan includes 30 image generations per month with 3 per day. All generated images can be used commercially with full rights and no watermarks.'
                    }
                  },
                  {
                    '@type': 'Question',
                    name: 'What image styles are available?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'We support 8 artistic styles: Realistic Photo, Artistic/Painting, Anime/Manga, Digital Art, 3D Render, Fantasy, Sci-Fi, and Vintage/Retro. Each style creates unique visual aesthetics.'
                    }
                  },
                  {
                    '@type': 'Question',
                    name: 'Can I use AI-generated images commercially?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes! You retain full commercial rights to all generated images. Use them in marketing materials, social media, websites, products, and any commercial projects without attribution.'
                    }
                  }
                ]
              },
              {
                '@type': 'HowTo',
                '@id': 'https://scenith.in/tools/ai-image-generation#howto',
                name: 'How to Generate AI Images from Text',
                description: 'Step-by-step guide to creating professional images using AI',
                totalTime: 'PT1M',
                step: [
                  {
                    '@type': 'HowToStep',
                    name: 'Describe Your Image',
                    text: 'Type a detailed description of what you want to create. Be specific about subjects, colors, mood, and composition.',
                    position: 1,
                  },
                  {
                    '@type': 'HowToStep',
                    name: 'Choose Art Style',
                    text: 'Select from 8 artistic styles including realistic, anime, digital art, and more. Each style produces unique visual aesthetics.',
                    position: 2,
                  },
                  {
                    '@type': 'HowToStep',
                    name: 'Generate and Download',
                    text: 'Click Generate to create your image in seconds. Download high-resolution PNG files for use in your projects.',
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
          <h1>Free AI Image Generator: Create Stunning Visuals from Text (Social Media & Marketing)</h1>
          <p className="hero-description">
            Transform your ideas into beautiful images instantly with AI. Create professional visuals for{' '}
            <a href="/tools/add-subtitles-to-videos" className="inline-link">video thumbnails</a>,{' '}
            social media posts, marketing materials, and creative projects. Works perfectly with our{' '}
            <a href="/tools/image-editing" className="inline-link">free image editor</a>{' '}
            for complete design workflows. Generate unlimited creativity - completely free!
          </p>

          <div className="hero-cta-section">
            <div className="main-content">
              <div className="input-section">
                <textarea
                  value={prompt}
                  onChange={(e) => {
                    setPrompt(e.target.value);
                    setPromptCharCount(e.target.value.length);
                  }}
                  placeholder="Describe your image... (e.g., 'A serene mountain landscape at sunset with vibrant orange sky')"
                  className="prompt-textarea"
                  disabled={!isLoggedIn}
                  aria-label="Image description prompt"
                  maxLength={2000}
                />

                {isLoggedIn && (
                  <div className="character-count-container">
                    <p className="character-count">
                      <span className={promptCharCount > 1800 ? 'count-warning' : ''}>
                        {promptCharCount.toLocaleString()}
                      </span> / 2,000 characters
                    </p>
                  </div>
                )}

                <div className="style-selector-section">
                  <label className="style-label-text" htmlFor="style-select">
                    🎨 Art Style:
                  </label>
                  
                  <select
                    id="style-select"
                    value={selectedStyle}
                    onChange={(e) => setSelectedStyle(e.target.value)}
                    className="style-dropdown"
                    aria-label="Select art style"
                  >
                    {STYLE_PRESETS.map((style) => (
                      <option key={style.value} value={style.value}>
                        {style.label}
                      </option>
                    ))}
                  </select>
                </div>

                {selectedStyle !== 'realistic' && (
                  <div className="style-info-tooltip">
                    <strong>{STYLE_PRESETS.find(s => s.value === selectedStyle)?.label}:</strong>{' '}
                    {STYLE_PRESETS.find(s => s.value === selectedStyle)?.description}
                  </div>
                )}

                <details className="advanced-options">
                  <summary>Advanced Options (Optional)</summary>
                  <textarea
                    value={negativePrompt}
                    onChange={(e) => setNegativePrompt(e.target.value)}
                    placeholder="What to avoid... (e.g., 'blurry, distorted, low quality')"
                    className="negative-prompt-textarea"
                    aria-label="Negative prompt"
                    maxLength={500}
                  />
                  <p className="help-text">Specify what you DON'T want in the image</p>
                </details>

                {isLoggedIn && imageUsage && (
                  <div className="usage-info">
                    {imageUsage.daily.limit > 0 && 
                     imageUsage.monthly.limit > 0 &&
                     imageUsage.daily.remaining < imageUsage.monthly.remaining && (
                      <div className="usage-section">
                        <p className="usage-label today">⚠️ Today's Limit</p>
                        <div className="usage-bar-container">
                          <div 
                            className={`usage-bar-fill ${
                              (imageUsage.daily.used / imageUsage.daily.limit) >= 0.95 ? 'critical' :
                              (imageUsage.daily.used / imageUsage.daily.limit) >= 0.80 ? 'warning' : 'normal'
                            }`}
                            style={{ width: `${(imageUsage.daily.used / imageUsage.daily.limit) * 100}%` }}
                          />
                        </div>
                        <p className="usage-text">
                          <strong>{imageUsage.daily.remaining.toLocaleString()}</strong> images remaining today
                          ({imageUsage.daily.used.toLocaleString()} / {imageUsage.daily.limit.toLocaleString()} used)
                        </p>
                      </div>
                    )}

                    <div className="usage-section">
                      <p className={`usage-label ${
                        imageUsage.monthly.limit === -1 ? '' :
                        imageUsage.daily.limit > 0 && 
                        imageUsage.monthly.remaining > 0 && 
                        imageUsage.daily.remaining >= imageUsage.monthly.remaining
                          ? 'month'
                          : ''
                      }`}>
                        📅 {imageUsage.monthly.limit === -1 ? 'This Month (Unlimited)' : 'This Month\'s Limit'}
                      </p>
                      {imageUsage.monthly.limit === -1 ? (
                        <p className="usage-text">
                          <strong>Unlimited</strong> - No monthly generation limit
                        </p>
                      ) : (
                        <>
                          <div className="usage-bar-container">
                            <div 
                              className={`usage-bar-fill ${
                                (imageUsage.monthly.used / imageUsage.monthly.limit) >= 0.95 ? 'critical' :
                                (imageUsage.monthly.used / imageUsage.monthly.limit) >= 0.80 ? 'warning' : 'normal'
                              }`}
                              style={{ width: `${(imageUsage.monthly.used / imageUsage.monthly.limit) * 100}%` }}
                            />
                          </div>
                          <p className="usage-text">
                            <strong>{imageUsage.monthly.remaining.toLocaleString()}</strong> images remaining this month
                            ({imageUsage.monthly.used.toLocaleString()} / {imageUsage.monthly.limit.toLocaleString()} used)
                          </p>
                        </>
                      )}

                      {imageUsage.role === 'BASIC' && (
                        <div className="inline-upgrade-cta">
                          <a href="/pricing" className="inline-upgrade-link">
                            🔓 Need more? Upgrade to CREATOR for 13× more images (400/month)
                          </a>
                        </div>
                      )}

                      {imageUsage.role === 'CREATOR' && (
                        <div className="inline-upgrade-cta">
                          <a href="/pricing" className="inline-upgrade-link">
                            🔓 Need more? Upgrade to STUDIO for 2× more images (900/month)
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {isLimitsExceeded() ? (
                  <a
                    href="https://scenith.in/pricing"
                    className="cta-button upgrade-button"
                    aria-label="Upgrade to unlock more image generations"
                  >
                    <span className="upgrade-icon">🚀</span>
                    Upgrade to Pro - Generate More Images
                    <span className="upgrade-badge">Limited Time</span>
                  </a>
                ) : (
                  <button
                    className="cta-button generate-button"
                    onClick={handleGenerateImage}
                    disabled={
                      !isLoggedIn ? false : (
                        !prompt.trim() || 
                        isGenerating ||
                        undefined
                      )
                    }
                    aria-label="Generate AI image from description"
                  >
                    {isGenerating ? 'Creating Your Image...' : isLoggedIn ? 'Generate Image' : 'Login to Generate'}
                  </button>
                )}
              </div>
            </div>

            {generatedImages.length > 0 && (
              <section className="image-results-section" role="region" aria-labelledby="results-title">
                <motion.div
                  className="container"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h2 id="results-title">Your Generated Images</h2>
                  <div className="images-grid">
                    {generatedImages.map((image) => (
                      <div key={image.id} className="image-result-card">
                        <img
                          src={image.imagePath}
                          alt={image.prompt}
                          className="generated-image"
                        />
                        <div className="image-actions">
                          <button
                            onClick={() => handleDownloadImage(image.imagePath, image.id)}
                            className="download-image-btn"
                            aria-label="Download image"
                          >
                            📥 Download PNG
                          </button>
                        </div>
                        <p className="image-prompt">{image.prompt}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </section>
            )}

            <section className="must-try-section" role="region" aria-labelledby="must-try-title">
              <div className="must-try-header">
                <h2 id="must-try-title">Complete Your Creative Workflow</h2>
                <p>Powerful tools to enhance your AI-generated images</p>
              </div>
              <div className="must-try-grid">
                <a 
                  href="https://scenith.in/tools/image-editing?utm_source=ai_image_page&utm_medium=must_try_section&utm_campaign=cross_tool_promotion" 
                  className="must-try-card"
                  aria-label="Try Free Image Editor"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="must-try-icon">🖼️</span>
                  <span className="must-try-badge">✨ Perfect Match</span>
                  <h3 className="must-try-title">Free Image Editor</h3>
                  <p className="must-try-description">
                    Edit your AI-generated images with professional tools. Add text, filters, effects, and more to create perfect visuals.
                  </p>
                  <div className="must-try-features">
                    <span className="must-try-feature">Advanced editing tools</span>
                    <span className="must-try-feature">Filters & effects</span>
                    <span className="must-try-feature">Text overlays</span>
                  </div>
                  <span className="must-try-cta">
                    Open Image Editor →
                  </span>
                </a>

                <a 
                  href="https://scenith.in/tools/ai-voice-generation?utm_source=ai_image_page&utm_medium=must_try_section&utm_campaign=cross_tool_promotion" 
                  className="must-try-card"
                  aria-label="Try AI Voice Generator"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="must-try-icon">🎤</span>
                  <span className="must-try-badge">🔥 Popular</span>
                  <h3 className="must-try-title">AI Voice Generator</h3>
                  <p className="must-try-description">
                    Add professional voiceovers to your visuals. Perfect for creating complete video content with your AI images.
                  </p>
                  <div className="must-try-features">
                    <span className="must-try-feature">40+ natural voices</span>
                    <span className="must-try-feature">20+ languages</span>
                    <span className="must-try-feature">Instant MP3 download</span>
                  </div>
                  <span className="must-try-cta">
                    Try Voice Generator →
                  </span>
                </a>
              </div>
            </section>


            <section className="how-to-generate-section" id="how-to-generate" role="region" aria-labelledby="how-to-generate-title">
              <div className="container">
                <h2 id="how-to-generate-title">How to Generate AI Images from Text: Complete Step-by-Step Guide</h2>
                <p className="section-description">
                  Follow this detailed walkthrough to create professional AI-generated images in minutes. No design experience required—just your imagination and our advanced text-to-image technology.
                </p>

                <div className="tutorial-steps">
                  <article className="tutorial-step">
                    <div className="tutorial-step-number">Step 1</div>
                    <div className="tutorial-step-content">
                      <h3>Write a Detailed Image Description</h3>
                      <p>
                        Begin by describing exactly what you want to see in your image. The more specific you are, the better your results:
                      </p>
                      <ul className="tutorial-checklist">
                        <li>Subject: Main focus (person, object, scene)</li>
                        <li>Setting: Location, time of day, season</li>
                        <li>Colors: Dominant color palette or specific hues</li>
                        <li>Mood: Atmosphere (happy, dramatic, serene)</li>
                        <li>Composition: Camera angle, framing, perspective</li>
                      </ul>
                      <div className="tutorial-tip">
                        <strong>💡 Pro Tip:</strong> Instead of "a dog," try "a golden retriever puppy playing in a sunny meadow filled with wildflowers, soft morning light, warm color palette." Specific details create stunning results.
                      </div>
                    </div>
                  </article>

                  <article className="tutorial-step">
                    <div className="tutorial-step-number">Step 2</div>
                    <div className="tutorial-step-content">
                      <h3>Select Your Artistic Style</h3>
                      <p>
                        Choose from <strong>8 artistic style presets</strong> that dramatically change your image's aesthetic:
                      </p>
                      <div className="filter-guide">
                        <div className="filter-option">
                          <strong>Realistic Photo:</strong> Photorealistic images perfect for product mockups, social media posts, and professional content.
                        </div>
                        <div className="filter-option">
                          <strong>Anime/Manga:</strong> Japanese animation style ideal for character art, illustrations, and creative storytelling.
                        </div>
                        <div className="filter-option">
                          <strong>Digital Art:</strong> Modern illustration style great for posters, graphics, and contemporary designs.
                        </div>
                        <div className="filter-option">
                          <strong>3D Render:</strong> Three-dimensional rendered look perfect for product visualization and technical imagery.
                        </div>
                      </div>
                      <div className="tutorial-tip">
                        <strong>💡 Pro Tip:</strong> Test the same prompt with 2-3 different styles. A landscape in "Realistic Photo" mode creates travel photography, while "Fantasy" style produces magical artwork.
                      </div>
                    </div>
                  </article>

                  <article className="tutorial-step">
                    <div className="tutorial-step-number">Step 3</div>
                    <div className="tutorial-step-content">
                      <h3>Use Advanced Options (Optional)</h3>
                      <p>
                        Fine-tune your generation with negative prompts—tell the AI what to <strong>avoid</strong> in your image:
                      </p>
                      <ul className="tutorial-checklist">
                        <li><strong>Common exclusions:</strong> "blurry, low quality, distorted, watermark"</li>
                        <li><strong>Unwanted elements:</strong> "text, logo, signature, frame, border"</li>
                        <li><strong>Style refinement:</strong> "cartoon, painting" (for realistic photos)</li>
                        <li><strong>Quality control:</strong> "ugly, deformed, duplicate, cropped"</li>
                      </ul>
                      <p>
                        Negative prompts help the AI understand what NOT to include, significantly improving output quality and relevance.
                      </p>
                    </div>
                  </article>

                  <article className="tutorial-step">
                    <div className="tutorial-step-number">Step 4</div>
                    <div className="tutorial-step-content">
                      <h3>Generate Your AI Image</h3>
                      <p>
                        Click <strong>"Generate Image"</strong> and watch the magic happen. Our AI processes your description in seconds:
                      </p>
                      <ul className="tutorial-checklist">
                        <li><strong>Analysis:</strong> AI interprets your text, identifying subjects, styles, and composition</li>
                        <li><strong>Synthesis:</strong> Neural networks create the image pixel-by-pixel based on learned patterns</li>
                        <li><strong>Refinement:</strong> Quality checks ensure output meets style and description requirements</li>
                        <li><strong>Delivery:</strong> High-resolution PNG file ready for immediate download</li>
                      </ul>
                      <p>
                        Generation typically completes in <strong>3-5 seconds</strong>. You'll see your image appear with download options immediately.
                      </p>
                    </div>
                  </article>

                  <article className="tutorial-step advanced">
                    <div className="tutorial-step-number">Step 5</div>
                    <div className="tutorial-step-content">
                      <h3>Download and Iterate</h3>
                      <p>
                        Once generated, you have several options for using and refining your images:
                      </p>
                      <div className="download-options">
                        <div className="download-format">
                          <strong>Format:</strong> High-quality PNG
                        </div>
                        <div className="download-format">
                          <strong>Resolution:</strong> 1024x1024 pixels
                        </div>
                        <div className="download-format">
                          <strong>Usage Rights:</strong> Full commercial use
                        </div>
                      </div>
                      <p>
                        Not satisfied? Simply modify your prompt and regenerate. Each variation provides new creative possibilities. Combine with our <strong>free image editor</strong> for additional customization—add text, filters, effects, and more.
                      </p>
                      <div className="tutorial-tip">
                        <strong>💡 Pro Tip:</strong> Save prompts that work well. Building a prompt library helps you recreate successful styles and speeds up future projects.
                      </div>
                    </div>
                  </article>
                </div>

                <div className="common-questions">
                  <h3>Common Questions During Generation</h3>
                  <div className="quick-qa-grid">
                    <div className="quick-qa">
                      <strong>Q: Why doesn't my image match my description exactly?</strong>
                      <p>A: AI interprets prompts creatively. Be more specific with details like "on the left side," "in the foreground," or "bright red color" for precise control.</p>
                    </div>
                    <div className="quick-qa">
                      <strong>Q: Can I generate images of real people?</strong>
                      <p>A: For privacy and ethical reasons, avoid using names of real individuals. Describe generic characteristics instead: "professional businesswoman in office setting."</p>
                    </div>
                    <div className="quick-qa">
                      <strong>Q: How do I get consistent character designs?</strong>
                      <p>A: Use very detailed descriptions with specific features: "25-year-old woman, shoulder-length black hair, blue eyes, wearing red jacket." Save your exact prompt for future consistency.</p>
                    </div>
                    <div className="quick-qa">
                      <strong>Q: What if I exceed my generation limits?</strong>
                      <p>A: Free users get 30 images/month. Upgrade to CREATOR (400/month) or STUDIO (900/month) for higher limits and faster generation.</p>
                    </div>
                  </div>
                </div>

                <div className="integration-guide">
                  <h3>Using Your AI Images in Popular Tools</h3>
                  <div className="integration-cards">
                    <div className="integration-card">
                      <span className="integration-icon">🎨</span>
                      <h4>Canva & Design Tools</h4>
                      <p><strong>Canva, Adobe Express, Figma:</strong> Import PNG directly, layer with text/graphics, create social media posts and marketing materials.</p>
                    </div>
                    <div className="integration-card">
                      <span className="integration-icon">📱</span>
                      <h4>Social Media Platforms</h4>
                      <p><strong>Instagram, Facebook, Twitter, LinkedIn:</strong> Upload as posts, stories, profile images—perfect dimensions for all platforms.</p>
                    </div>
                    <div className="integration-card">
                      <span className="integration-icon">🎬</span>
                      <h4>Video Editing Software</h4>
                      <p><strong>Adobe Premiere, Final Cut Pro, DaVinci:</strong> Use as video backgrounds, thumbnails, B-roll imagery, scene transitions.</p>
                    </div>
                    <div className="integration-card">
                      <span className="integration-icon">🌐</span>
                      <h4>Websites & Blogs</h4>
                      <p><strong>WordPress, Wix, Squarespace, Medium:</strong> Featured images, blog headers, portfolio pieces, product mockups.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="use-cases-showcase" role="region" aria-labelledby="use-cases-title">
              <div className="container">
                <h2 id="use-cases-title">What Can You Create with AI Image Generation?</h2>
                      
                <div className="use-case-detailed-grid">
                  <article className="use-case-detailed">
                    <span className="use-case-number">1</span>
                    <h3>🎬 YouTube Thumbnails That Get Clicks</h3>
                    <p>
                      Create eye-catching thumbnails proven to increase CTR by 30-50%. Our Realistic Photo style works for tech reviews and tutorials, while Digital Art excels for entertainment and gaming channels.
                    </p>
                    <div className="use-case-prompts">
                      <strong>Example Prompts:</strong>
                      <ul>
                        <li>"Epic tech gadget exploding with colorful particles, dramatic lighting, 4K quality"</li>
                        <li>"Surprised reaction face, vibrant background, cinematic lighting, YouTube thumbnail style"</li>
                        <li>"Before/after comparison, split screen, professional photography, clean design"</li>
                      </ul>
                    </div>
                    <div className="use-case-stats">
                      <span>✓ Perfect 1280x720px resolution</span>
                      <span>✓ Optimized for mobile & desktop</span>
                      <span>✓ Eye-catching compositions</span>
                    </div>
                  </article>
                      
                  <article className="use-case-detailed">
                    <span className="use-case-number">2</span>
                    <h3>📱 Instagram & Social Media Graphics</h3>
                    <p>
                      Generate scroll-stopping visuals for Instagram posts, Stories, Reels, and Pinterest pins. Anime and Digital Art styles perform exceptionally well for engagement on visual platforms.
                    </p>
                    <div className="use-case-prompts">
                      <strong>Example Prompts:</strong>
                      <ul>
                        <li>"Aesthetic coffee shop interior, warm tones, golden hour lighting, Instagram worthy"</li>
                        <li>"Minimalist quote card, pastel gradient background, modern typography space"</li>
                        <li>"Product flat lay, marble surface, natural lighting, Pinterest aesthetic"</li>
                      </ul>
                    </div>
                    <div className="use-case-stats">
                      <span>✓ Square 1:1 for feed posts</span>
                      <span>✓ Vertical 9:16 for Stories</span>
                      <span>✓ Brand-consistent styles</span>
                    </div>
                  </article>
                      
                  <article className="use-case-detailed">
                    <span className="use-case-number">3</span>
                    <h3>🛍️ E-commerce Product Mockups</h3>
                    <p>
                      Create professional product images without expensive photoshoots. 3D Render and Realistic Photo styles generate studio-quality visuals for online stores, catalogs, and Amazon listings.
                    </p>
                    <div className="use-case-prompts">
                      <strong>Example Prompts:</strong>
                      <ul>
                        <li>"Sleek smartphone on white background, studio lighting, commercial photography, 4K"</li>
                        <li>"Luxury watch close-up, black background, dramatic side lighting, product photography"</li>
                        <li>"Cosmetics product lineup, pastel pink surface, soft shadows, e-commerce style"</li>
                      </ul>
                    </div>
                    <div className="use-case-stats">
                      <span>✓ Clean white backgrounds</span>
                      <span>✓ Professional studio lighting</span>
                      <span>✓ High-resolution outputs</span>
                    </div>
                  </article>
                      
                  <article className="use-case-detailed">
                    <span className="use-case-number">4</span>
                    <h3>📰 Blog Headers & Article Images</h3>
                    <p>
                      Replace generic stock photos with custom visuals that match your exact article topic. Digital Art and Artistic styles create unique, branded imagery that improves content professionalism.
                    </p>
                    <div className="use-case-prompts">
                      <strong>Example Prompts:</strong>
                      <ul>
                        <li>"Futuristic city skyline, neon lights, cyberpunk aesthetic, wide banner format"</li>
                        <li>"Abstract representation of data analytics, geometric shapes, blue gradient"</li>
                        <li>"Cozy home office setup, natural light, minimalist design, blog header style"</li>
                      </ul>
                    </div>
                    <div className="use-case-stats">
                      <span>✓ Custom topic alignment</span>
                      <span>✓ Unique (not stock)</span>
                      <span>✓ Brand personality</span>
                    </div>
                  </article>
                      
                  <article className="use-case-detailed">
                    <span className="use-case-number">5</span>
                    <h3>🎨 Character Design & Concept Art</h3>
                    <p>
                      Bring fictional characters and game concepts to life with Anime, Fantasy, and Digital Art styles. Perfect for indie game developers, authors, and content creators building visual worlds.
                    </p>
                    <div className="use-case-prompts">
                      <strong>Example Prompts:</strong>
                      <ul>
                        <li>"Anime warrior character, silver armor, glowing sword, detailed face, full body"</li>
                        <li>"Sci-fi spaceship design, sleek metallic surface, blue engine glow, concept art"</li>
                        <li>"Fantasy dragon, emerald scales, majestic wings, mountain background, epic pose"</li>
                      </ul>
                    </div>
                    <div className="use-case-stats">
                      <span>✓ Consistent character features</span>
                      <span>✓ Multiple pose variations</span>
                      <span>✓ Style coherence</span>
                    </div>
                  </article>
                      
                  <article className="use-case-detailed">
                    <span className="use-case-number">6</span>
                    <h3>💼 Presentation Slides & Marketing Materials</h3>
                    <p>
                      Create custom visuals for PowerPoint presentations, pitch decks, and marketing collateral. Realistic Photo and 3D Render styles provide professional imagery for business contexts.
                    </p>
                    <div className="use-case-prompts">
                      <strong>Example Prompts:</strong>
                      <ul>
                        <li>"Business team collaboration, modern office, diverse professionals, natural light"</li>
                        <li>"Abstract technology network visualization, connected nodes, blue theme"</li>
                        <li>"Growth chart visualization, upward trend, professional style, clean design"</li>
                      </ul>
                    </div>
                    <div className="use-case-stats">
                      <span>✓ Professional aesthetics</span>
                      <span>✓ Clear visual hierarchy</span>
                      <span>✓ Brand alignment</span>
                    </div>
                  </article>
                </div>
                      
                <div className="use-case-cta">
                  <h3>Ready to Create Your First AI Image?</h3>
                  <p>Start with our proven prompt templates or describe your vision—generate professional images in seconds!</p>
                  <button
                    className="cta-button"
                    onClick={() => scrollToSection('hero')}
                  >
                    Generate Images Now - Free!
                  </button>
                </div>
              </div>
            </section>            

            <div className="trust-indicators">
              <span className="trust-item">✅ 100% Free</span>
              <span className="trust-item">🎨 8 Art Styles</span>
              <span className="trust-item">⚡ Instant Generation</span>
              <span className="trust-item">📥 High-Res Downloads</span>
            </div>
          </div>

          <figure className="hero-image-container">
            <Image
              src="/images/AIImageGenerationSS.png"
              alt="Free AI image generator interface showing text-to-image creation with multiple artistic styles"
              className="hero-image"
              width={800}
              height={400}
              priority
            />
            <figcaption className="sr-only">Example of AI image generation showing style selection and visual output</figcaption>
          </figure>
        </motion.div>
      </section>

      <section className="what-is-section" id="what-is-ai-image-generation" role="region" aria-labelledby="what-is-title">
        <div className="container">
          <h2 id="what-is-title">What is AI Image Generation? Understanding Text-to-Image Technology</h2>
          <p className="section-description">
            AI image generation uses advanced neural networks to create original images from text descriptions, revolutionizing visual content creation.
          </p>
          
          <div className="content-deep-dive">
            <div className="dive-section">
              <h3>How Text-to-Image AI Works</h3>
              <p>
                Modern <strong>AI image generators</strong> use diffusion models and transformers trained on billions of images. The process involves multiple sophisticated steps:
              </p>
              <ol className="process-list">
                <li><strong>Text Encoding:</strong> Your prompt is converted into mathematical representations that capture semantic meaning, identifying subjects, styles, colors, and composition.</li>
                <li><strong>Latent Space Mapping:</strong> The AI translates text embeddings into a "latent space"—a compressed representation of visual concepts learned from millions of training images.</li>
                <li><strong>Diffusion Process:</strong> Starting from random noise, the model iteratively refines the image through hundreds of denoising steps, gradually building coherent visual elements.</li>
                <li><strong>Style Transfer:</strong> Artistic style presets guide the generation toward specific aesthetics—photorealistic, anime, digital art—by conditioning the diffusion process.</li>
                <li><strong>Upsampling & Refinement:</strong> Final steps enhance resolution, sharpen details, and apply post-processing to deliver high-quality 1024x1024 PNG outputs.</li>
              </ol>
            </div>

            <div className="dive-section">
              <h3>Key Technologies Behind AI Image Creation</h3>
              <div className="tech-cards">
                <div className="tech-card">
                  <h4>🧠 Diffusion Models</h4>
                  <p>State-of-the-art architecture that generates images by reversing a noise-adding process. Stable Diffusion and DALL-E use this approach for photorealistic results.</p>
                </div>
                <div className="tech-card">
                  <h4>🎯 CLIP (Contrastive Learning)</h4>
                  <p>Neural network that understands relationships between images and text, enabling accurate interpretation of natural language prompts.</p>
                </div>
                <div className="tech-card">
                  <h4>🎨 Style Transfer Networks</h4>
                  <p>Specialized models that apply artistic styles (anime, oil painting, 3D render) by learning visual characteristics from style-specific datasets.</p>
                </div>
                <div className="tech-card">
                  <h4>⚡ Latent Diffusion</h4>
                  <p>Efficiency technique that operates in compressed latent space rather than pixel space, enabling fast generation without sacrificing quality.</p>
                </div>
              </div>
            </div>

            <div className="dive-section">
              <h3>Evolution of AI Image Generation</h3>
              <p>
                Text-to-image technology has advanced dramatically in just a few years:
              </p>
              <ul className="evolution-timeline">
                <li><strong>2014-2018:</strong> Early GANs (Generative Adversarial Networks) produced low-resolution, often incoherent images with limited text understanding.</li>
                <li><strong>2021:</strong> DALL-E demonstrated breakthrough text-image alignment, generating recognizable objects from descriptions but with artistic limitations.</li>
                <li><strong>2022:</strong> Stable Diffusion democratized AI art with open-source models, enabling photorealistic generation and extensive style control.</li>
                <li><strong>2023-Present:</strong> Modern systems achieve near-perfect photorealism, artistic versatility, and complex scene composition from natural language prompts.</li>
              </ul>
            </div>
          </div>
        </div>
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

      {/* Educational sections would continue here following the same pattern as AI Voice */}
      {/* I'll include the key sections below */}

      <section className="how-section" id="how-it-works" role="region" aria-labelledby="how-it-works-title">
        <motion.div
          className="container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 id="how-it-works-title">How to Generate AI Images in 3 Simple Steps</h2>
          <p className="section-description">
            Our advanced AI image generation makes creating professional visuals effortless. No design skills needed - just describe what you want.
          </p>
          <div className="steps-grid" role="list">
            <motion.article className="step-card" whileHover={{ scale: 1.05 }} role="listitem">
              <div className="step-number" aria-label="Step 1">1</div>
              <h3>Describe Your Vision</h3>
              <p>Type what you want to see. Be specific about subjects, colors, mood, and composition. The more detailed, the better!</p>
            </motion.article>
            <motion.article className="step-card" whileHover={{ scale: 1.05 }} role="listitem">
              <div className="step-number" aria-label="Step 2">2</div>
              <h3>Choose Art Style</h3>
              <p>Select from 8 artistic styles including realistic photos, anime, digital art, and more. Each creates unique visual aesthetics.</p>
            </motion.article>
            <motion.article className="step-card" whileHover={{ scale: 1.05 }} role="listitem">
              <div className="step-number" aria-label="Step 3">3</div>
              <h3>Generate & Download</h3>
              <p>Get your high-quality image in seconds. Download PNG files ready for social media, marketing, or any creative project.</p>
            </motion.article>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" id="get-started" role="region" aria-labelledby="cta-title">
        <div className="container">
          <h2 id="cta-title">Ready to Create Stunning Images?</h2>
          <p>Join thousands of creators using AI to bring their ideas to life. Start generating professional images today - completely free!</p>
          <button
            className="cta-button"
            onClick={() => {
              if (!isLoggedIn) {
                setShowLoginModal(true);
              } else {
                scrollToSection('hero');
              }
            }}
            aria-label="Start using the free AI image generator"
          >
            {isLoggedIn ? 'Generate Images Now - Free!' : 'Login to Start Creating'}
          </button>
          <div className="cta-features">
            <span>⚡ Instant generation</span>
            <span>🔒 Secure & private</span>
          </div>
        </div>
      </section>

      <section className="competitors-comparison" role="region" aria-labelledby="vs-competitors">
        <div className="container">
          <h2 id="vs-competitors">AI Image Generator Comparison: Scenith vs Competitors</h2>
          <div className="comparison-grid">
            <div className="vs-card">
              <h3>Scenith vs Midjourney</h3>
              <ul>
                <li>✅ <strong>Scenith:</strong> Free 30 images/month, web-based interface</li>
                <li>❌ <strong>Midjourney:</strong> $10/month minimum, Discord-only access</li>
                <li>✅ <strong>Scenith:</strong> One-click generation, no commands needed</li>
                <li>⚠️ <strong>Midjourney:</strong> Complex slash commands required</li>
              </ul>
            </div>
                  
            <div className="vs-card">
              <h3>Scenith vs DALL-E 3</h3>
              <ul>
                <li>✅ <strong>Scenith:</strong> Direct PNG download, immediate use</li>
                <li>❌ <strong>DALL-E 3:</strong> ChatGPT Plus required ($20/month)</li>
                <li>✅ <strong>Scenith:</strong> 8 style presets for instant variety</li>
                <li>❌ <strong>DALL-E 3:</strong> Limited style control</li>
              </ul>
            </div>
                  
            <div className="vs-card">
              <h3>Scenith vs Leonardo.ai</h3>
              <ul>
                <li>✅ <strong>Scenith:</strong> No signup required for basic use</li>
                <li>❌ <strong>Leonardo.ai:</strong> Account required, limited free credits</li>
                <li>✅ <strong>Scenith:</strong> Commercial use on free plan</li>
                <li>⚠️ <strong>Leonardo.ai:</strong> Paid subscription for commercial rights</li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      <section className="people-also-ask" role="region" aria-labelledby="paa-title">
        <div className="container">
          <h2 id="paa-title">People Also Ask About AI Image Generators</h2>
          <div className="paa-grid">
            <div className="paa-item">
              <h3>Can AI generate images from photos?</h3>
              <p>Yes, but our tool specializes in text-to-image generation. For photo-based generation (img2img), use specialized tools like Stable Diffusion WebUI. Our AI creates entirely new images from written descriptions without requiring reference photos.</p>
            </div>
                  
            <div className="paa-item">
              <h3>Is AI-generated art copyrightable?</h3>
              <p>Copyright law for AI art is evolving. Currently, US Copyright Office grants copyright only to human-authored works. However, you retain commercial use rights to images generated on Scenith and can use them freely in projects, products, and marketing.</p>
            </div>
                  
            <div className="paa-item">
              <h3>Which AI image generator is best for realistic photos?</h3>
              <p>For photorealism, select our "Realistic Photo" style preset. This setting optimizes generation for lifelike imagery suitable for product mockups, stock photo replacements, and professional marketing materials.</p>
            </div>
                  
            <div className="paa-item">
              <h3>Can I sell AI-generated images?</h3>
              <p>Yes! All images created with Scenith come with full commercial rights. You can sell them as prints, use them in products, include them in client work, or license them to others without restrictions or attribution requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Login Modal */}
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
              <strong>Upgrade for 13× More Images</strong>
              <small>CREATOR Plan</small>
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default AIImageGeneratorClient;