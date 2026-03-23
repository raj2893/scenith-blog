"use client";

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { motion } from 'framer-motion';
import { API_BASE_URL, CDN_URL } from '../../../config';
import { FaTimes } from 'react-icons/fa';
import '../../../../../styles/tools/AIImageGeneration.css';
import { div } from 'framer-motion/client';

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
  balance: number;
  planType: string;
  expiresAt: string | "N/A";
  availableModels: {
    id: string;
    displayName: string;
    creditsPerImage: number;
    accessible: boolean;
  }[];
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
const MODEL_CONFIG: Record<string, {
  sizes: { value: string; label: string; icon: string }[];
  qualities: { value: string; label: string; desc: string; creditsExtra: number }[];
  resolutions?: { value: string; label: string }[];
  supportsImg2Img: boolean;
  flatPrice: boolean; // true = no size/quality variance in credits
}> = {
  'GPT_IMAGE_1_MINI': {
    flatPrice: false,
    supportsImg2Img: true,
    sizes: [
      { value: 'square',    label: 'Square (1:1)',    icon: '⬛' },
      { value: 'portrait',  label: 'Portrait (9:16)', icon: '📱' },
      { value: 'landscape', label: 'Landscape (16:9)',icon: '🖥️' },
    ],
    qualities: [
      { value: 'draft',    label: 'Draft',    desc: 'Fast & cheap. Test your prompt.',                     creditsExtra: 0  },
      { value: 'standard', label: 'Standard', desc: 'Sharp & polished. Great for social media.',           creditsExtra: 0  },
      { value: 'premium',  label: 'Premium',  desc: 'Max detail. Hair, texture, glass — all fully rendered.', creditsExtra: 0 },
    ],
  },
  'GPT_IMAGE_1_MEDIUM': {
    flatPrice: false,
    supportsImg2Img: true,
    sizes: [
      { value: 'square',    label: 'Square (1:1)',    icon: '⬛' },
      { value: 'portrait',  label: 'Portrait (9:16)', icon: '📱' },
      { value: 'landscape', label: 'Landscape (16:9)',icon: '🖥️' },
    ],
    qualities: [
      { value: 'draft',    label: 'Draft',    desc: 'Quick concept check. Good for internal review.',        creditsExtra: 0 },
      { value: 'standard', label: 'Standard', desc: 'Rich lighting, realistic textures. Production-ready.',  creditsExtra: 0 },
      { value: 'premium',  label: 'Premium',  desc: 'Photorealistic — fabric, metal, skin fully rendered.', creditsExtra: 0 },
    ],
  },
  'IMAGEN_4_FAST': {
    flatPrice: true,
    supportsImg2Img: false,
    sizes: [
      { value: 'square',    label: 'Square (1:1)',    icon: '⬛' },
      { value: 'landscape', label: 'Landscape (16:9)',icon: '🖥️' },
      { value: 'portrait',  label: 'Portrait (9:16)', icon: '📱' },
      { value: 'standard',  label: 'Standard (4:3)',  icon: '📺' },
      { value: 'tall',      label: 'Tall (3:4)',      icon: '📄' },
    ],
    qualities: [{ value: 'standard', label: 'Fast Mode', desc: 'Good quality in ~3 sec. Best for high volume.', creditsExtra: 0 }],
  },
  'IMAGEN_4_STANDARD': {
    flatPrice: true,
    supportsImg2Img: false,
    sizes: [
      { value: 'square',    label: 'Square (1:1)',    icon: '⬛' },
      { value: 'landscape', label: 'Landscape (16:9)',icon: '🖥️' },
      { value: 'portrait',  label: 'Portrait (9:16)', icon: '📱' },
      { value: 'standard',  label: 'Standard (4:3)',  icon: '📺' },
      { value: 'tall',      label: 'Tall (3:4)',      icon: '📄' },
    ],
    qualities: [{ value: 'standard', label: 'Full Quality', desc: '4× more pixels. Sharp detail for print & web.', creditsExtra: 0 }],
  },
  'FLUX_1_1_PRO': {
    flatPrice: true,
    supportsImg2Img: false,
    sizes: [{ value: 'square', label: 'Square (1:1)', icon: '⬛' }],
    qualities: [{ value: 'standard', label: 'Photorealism', desc: 'Best-in-class skin, material & lighting quality.', creditsExtra: 0 }],
  },
  'NANO_BANANA_PRO': {
    flatPrice: false,
    supportsImg2Img: true,
    sizes: [
      { value: 'square',    label: 'Square (1:1)',    icon: '⬛' },
      { value: 'landscape', label: 'Landscape (16:9)',icon: '🖥️' },
      { value: 'portrait',  label: 'Portrait (9:16)', icon: '📱' },
      { value: 'wide',      label: 'Wide (3:2)',      icon: '📺' },
      { value: 'tall',      label: 'Tall (2:3)',      icon: '📄' },
    ],
    qualities: [{ value: 'standard', label: '2K/4K Premium', desc: 'Google\'s most advanced. Best text rendering.', creditsExtra: 0 }],
    resolutions: [
      { value: '2k', label: '2K — up to 2048px (25cr)' },
      { value: '4k', label: '4K — up to 4096px (45cr)' },
    ],
  },
  'STABILITY_AI_CORE': {
    flatPrice: true,
    supportsImg2Img: true,
    sizes: [{ value: 'square', label: 'Square (1:1)', icon: '⬛' }],
    qualities: [{ value: 'standard', label: 'SDXL Art', desc: 'Best for artistic, fantasy & illustrative styles.', creditsExtra: 0 }],
  },
   'GROK_AURORA': {
    flatPrice: true,
    supportsImg2Img: true,
    sizes: [
      { value: 'square',    label: 'Square (1:1)',    icon: '⬛' },
      { value: 'landscape', label: 'Landscape (16:9)',icon: '🖥️' },
      { value: 'portrait',  label: 'Portrait (9:16)', icon: '📱' },
      { value: 'wide',      label: 'Wide (3:2)',      icon: '📺' },
      { value: 'tall',      label: 'Tall (2:3)',      icon: '📄' },
      { value: 'standard',  label: 'Standard (4:3)',  icon: '🖼️' },
    ],
    qualities: [{ value: 'standard', label: '2K Photorealism', desc: 'xAI\'s best image model. Sharp photorealistic images up to 2K. Top benchmark scores.', creditsExtra: 0 }],
  },
};

// Credit lookup table matching backend getCreditsForSizeAndQuality()
const getCreditCost = (modelId: string, size: string, quality: string, resolution: string): number => {
  const nonSquare = size === 'portrait' || size === 'landscape';
  const q = quality || 'standard';
  const r = resolution || '2k';
  switch (modelId) {
    case 'GPT_IMAGE_1_MINI':
      if (q === 'draft')   return 2;
      if (q === 'premium') return nonSquare ? 10 : 8;
      return 3; // standard
    case 'GPT_IMAGE_1_MEDIUM':
      if (q === 'draft')   return nonSquare ? 5 : 4;
      if (q === 'premium') return nonSquare ? 47 : 31;
      return nonSquare ? 16 : 12; // standard
    case 'NANO_BANANA_PRO':
      return r === '4k' ? 45 : 25;
    case 'IMAGEN_4_FAST':      return 3;
    case 'IMAGEN_4_STANDARD':  return 7;
    case 'FLUX_1_1_PRO':       return 7;
    case 'STABILITY_AI_CORE':  return 3;
    case 'GROK_AURORA':        return 14;
    default: return 3;
  }
};

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
  const [isPageLoading, setIsPageLoading] = useState<boolean>(true);
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
  const [selectedModel, setSelectedModel] = useState<string>('gpt-image-1-medium');
const [imageSize, setImageSize] = useState<string>('square');
const [imageQuality, setImageQuality] = useState<string>('standard');
const [imageResolution, setImageResolution] = useState<string>('2k');
const [inputImageFile, setInputImageFile] = useState<File | null>(null);
const [inputImagePreview, setInputImagePreview] = useState<string | null>(null);
const [genMode, setGenMode] = useState<'text' | 'image'>('text');
const inputImageRef = useRef<HTMLInputElement>(null);
  const [showHistory, setShowHistory] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState<string>('');
  const [isCreatingProject, setIsCreatingProject] = useState<boolean>(false);
  const [showImageUpgradePopup, setShowImageUpgradePopup] = useState<boolean>(false);
  // Async job polling — mirrors video gen
  const [currentImageJob, setCurrentImageJob] = useState<{ id: number; status: string; imagePath?: string; prompt?: string; errorMessage?: string } | null>(null);
  const imagePollingRef = useRef<NodeJS.Timeout | null>(null);
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);  
  const [activePlanRole, setActivePlanRole] = useState<string>('BASIC');
  const [demoImages, setDemoImages] = useState<string[]>([]);
  
  useEffect(() => {
    fetch(`${API_BASE_URL}/api/public/gallery/images`)
      .then(res => res.json())
      .then((paths: string[]) => {
        setDemoImages(paths.map(p => `${CDN_URL}/${p}`));
      })
      .catch(() => {});
  }, []);  

  useEffect(() => {
    if (activePlanRole !== 'BASIC') return;
    const timer = setTimeout(() => {
      setShowWelcomeModal(true);
    }, 15000);
    return () => clearTimeout(timer);
  }, [activePlanRole]);    

  // Handle scroll for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const fetchActivePlan = async () => {
      if (!isLoggedIn) return;
      try {
        const token = localStorage.getItem('token');
        const plansRes = await axios.get(`${API_BASE_URL}/api/payments/active-plans`, {
          headers: { Authorization: `Bearer ${token}` },
        }).catch(() => ({ data: [] }));
        const activePlans: string[] = plansRes.data.map((p: any) => p.planType);
        if (activePlans.includes('STUDIO'))            setActivePlanRole('STUDIO');
        else if (activePlans.includes('CREATOR'))      setActivePlanRole('CREATOR');
        else if (activePlans.includes('CREATOR_LITE')) setActivePlanRole('CREATOR_LITE');
        else                                            setActivePlanRole('BASIC');
      } catch (e) {
        console.error('Failed to fetch active plans', e);
      }
    };
    fetchActivePlan();
  }, [isLoggedIn]);

  useEffect(() => {
    if (genMode !== 'image') return;
    const modelKey = selectedModel.toUpperCase().replace(/-/g, '_');
    if (!MODEL_CONFIG[modelKey]?.supportsImg2Img) {
      // Auto-switch to first img2img-capable model
      const firstSupported = Object.entries(MODEL_CONFIG).find(([, cfg]) => cfg.supportsImg2Img)?.[0];
      if (firstSupported) setSelectedModel(firstSupported);
    }
  }, [genMode]);

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
          if (data.availableModels?.length > 0 && !selectedModel) {
            setSelectedModel(data.availableModels[0].id);
          }
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
        })
        .finally(() => {
          setIsPageLoading(false);
        });
    } else {
      setIsLoggedIn(false);
      setIsPageLoading(false);
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

  useEffect(() => {
    const t = setTimeout(() => setShowImageUpgradePopup(true), 5000);
    return () => clearTimeout(t);
  }, []);

  const handleGenerateImage = async () => {
    if (!isLoggedIn) { setShowLoginModal(true); return; }
    if (!prompt.trim()) { setError('Please enter a description for your image.'); return; }
    if (!selectedModel) { setError('Please select an AI model to generate with.'); return; }

   if (imageUsage) {
      const creditCost = getCreditCost(selectedModel.toUpperCase().replace(/-/g,'_'), imageSize, imageQuality, imageResolution);
      if (imageUsage.balance < creditCost) {
        setError(`Not enough credits. This costs ${creditCost} credits (${imageUsage.balance} remaining).`);
        setTimeout(() => setError(null), 10000);
        return;
      }
    }

    setIsGenerating(true);
    setError(null);
    setGeneratedImages([]);
    setCurrentImageJob(null);

    try {
      let enhancedPrompt = prompt;
      if (selectedStyle !== 'realistic') {
        enhancedPrompt = `${prompt}, ${selectedStyle} style`;
      }

      let res: Response;

      if (genMode === 'image' && inputImageFile) {
        // Multipart for image-to-image
        const formData = new FormData();
        formData.append('prompt', enhancedPrompt);
        formData.append('negativePrompt', negativePrompt.trim() || 'blurry, low quality, distorted');
        formData.append('model', selectedModel);
        formData.append('size', imageSize);
        formData.append('quality', imageQuality);
        formData.append('resolution', imageResolution);
        formData.append('image', inputImageFile);

        res = await fetch(`${API_BASE_URL}/api/sole-image-gen/generate-async`, {
          method: 'POST',
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
          body: formData,
        });
      } else {
        // JSON for text-to-image
        res = await fetch(`${API_BASE_URL}/api/sole-image-gen/generate-async`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
          body: JSON.stringify({
            prompt: enhancedPrompt,
            negativePrompt: negativePrompt.trim() || 'blurry, low quality, distorted',
            model: selectedModel,
            size: imageSize,
            quality: imageQuality,
            resolution: imageResolution,
          }),
        });
      }

      if (!res.ok) {
        const errText = await res.text().catch(() => 'Unknown error');
        throw new Error(errText || `HTTP error ${res.status}`);
      }

      const { jobId } = await res.json();

      // Save to localStorage — survives tab close
      localStorage.setItem('scenith_image_job_id', String(jobId));
      setCurrentImageJob({ id: jobId, status: 'PENDING' });
      startImagePolling(jobId);

      // Scroll to job status card
      setTimeout(() => {
        const el = document.querySelector('.image-job-status-card');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);

    } catch (err: any) {
      setError(err.message || 'Failed to submit image generation.');
      setIsGenerating(false);
      setTimeout(() => setError(null), 10000);
    }
    // Note: setIsGenerating(false) is NOT called here — polling handles it when done
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
    const cost = getCreditCost(selectedModel.toUpperCase().replace(/-/g,'_'), imageSize, imageQuality, imageResolution);
    return imageUsage.balance < cost;
  }, [isLoggedIn, imageUsage, selectedModel, imageSize, imageQuality, imageResolution]);
const startImagePolling = useCallback((jobId: number) => {
    if (imagePollingRef.current) clearInterval(imagePollingRef.current);
    imagePollingRef.current = setInterval(async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/sole-image-gen/status/${jobId}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        if (!res.ok) return;
        const job = await res.json();
        setCurrentImageJob(job);

        if (job.status === 'COMPLETED' || job.status === 'FAILED') {
          clearInterval(imagePollingRef.current!);
          imagePollingRef.current = null;
          localStorage.removeItem('scenith_image_job_id');

          if (job.status === 'COMPLETED' && job.imagePath) {
            setGeneratedImages([{
              id: job.id,
              imagePath: job.imagePath,
              prompt: job.prompt || '',
              resolution: job.resolution || '1024x1024',
              createdAt: job.createdAt,
            }]);
            // Refresh usage
            const usageRes = await fetch(`${API_BASE_URL}/api/sole-image-gen/usage`, {
              headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
            });
            if (usageRes.ok) setImageUsage(await usageRes.json());
          }
          setIsGenerating(false);
        }
      } catch {}
    }, 3000);
  }, []);

  // Cleanup polling on unmount
  useEffect(() => () => { if (imagePollingRef.current) clearInterval(imagePollingRef.current); }, []);

  // Resume polling on page load if a job was in progress when tab was closed
  useEffect(() => {
    if (!isLoggedIn) return;
    const savedJobId = localStorage.getItem('scenith_image_job_id');
    if (savedJobId) {
      const jobId = parseInt(savedJobId, 10);
      setIsGenerating(true);
      setCurrentImageJob({ id: jobId, status: 'PROCESSING' });
      startImagePolling(jobId);
    }
  }, [isLoggedIn, startImagePolling]);

  const uploadOriginalImage = async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('assetType', 'IMAGE');
  
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        `${API_BASE_URL}/api/image-editor/assets/upload`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      return response.data.cdnUrl;
    } catch (error: any) {
      console.error('Upload error:', error);
      throw new Error('Failed to upload image: ' + (error.response?.data?.message || error.message));
    }
  };
  
  const handleEditInEditor = async (imageUrl: string, imageName: string) => {
    if (!isLoggedIn) {
      setShowLoginModal(true);
      return;
    }
  
    setIsCreatingProject(true);
  
    try {
      const token = localStorage.getItem('token');
  
      const projectResponse = await axios.post(
        `${API_BASE_URL}/api/image-editor/projects`,
        {
          projectName: `${imageName} Design`,
          canvasWidth: 1080,
          canvasHeight: 1080,
          canvasBackgroundColor: '#FFFFFF',
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
  
      const projectId = projectResponse.data.id;
  
      const img = new Image();
      img.onload = async () => {
        const scale = 1.0;
        const displayWidth = img.naturalWidth * scale;
        const displayHeight = img.naturalHeight * scale;
  
        const layer = {
          id: `image-${Date.now()}`,
          type: 'image',
          zIndex: 0,
          opacity: 1,
          x: Math.round(540 - displayWidth / 2),
          y: Math.round(540 - displayHeight / 2),
          width: displayWidth,
          height: displayHeight,
          scale: scale,
          rotation: 0,
          visible: true,
          locked: false,
          src: imageUrl,
          cropTop: 0,
          cropRight: 0,
          cropBottom: 0,
          cropLeft: 0,
        };
  
        const designJson = JSON.stringify({
          version: '1.0',
          pages: [
            {
              id: `page-${Date.now()}`,
              canvas: {
                width: 1080,
                height: 1080,
                backgroundColor: '#FFFFFF',
              },
              layers: [layer],
            },
          ],
        });
  
        await axios.put(
          `${API_BASE_URL}/api/image-editor/projects/${projectId}`,
          { designJson },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
  
        window.open(`/tools/image-editing/${projectId}/edit`, '_blank');
        setIsCreatingProject(false);
      };
  
      img.onerror = () => {
        console.error('Failed to load image');
        setIsCreatingProject(false);
        alert('Failed to load the image. Please try again.');
      };
  
      img.src = imageUrl;
    } catch (error: any) {
      console.error('Error creating project:', error);
      setIsCreatingProject(false);
      alert(error.response?.data?.message || 'Failed to create project');
    }
  };  

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
          <h1>Turn any idea into an image <span style={{ background: 'linear-gradient(120deg, #6355dc, #e040a0)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>in seconds</span></h1>
          <p className="hero-description">
            Type a description. Pick a style. Your image is ready in under 15 seconds. 
            No design skills needed — just your imagination.
            <br /><br />
            <span style={{ fontSize: '0.95rem', color: '#94a3b8' }}>
              Free plan includes 50 credits · No credit card required
            </span>
          </p>

          <div className="hero-cta-section">
            <div className="main-content">
              <div className="input-section">

                  <div style={{ display: 'flex', gap: 5, marginBottom: 6, overflowX: 'auto', scrollbarWidth: 'none' }}>
                    {[
                      { label: '🌆 Neon Tokyo', prompt: 'Aerial neon-lit Tokyo streets at night, rain reflections, cinematic, 8K' },
                      { label: '👁️ Surreal portrait', prompt: 'Hyper-realistic portrait of a woman with galaxy eyes, surreal, studio lighting' },
                      { label: '🐉 Fantasy dragon', prompt: 'Majestic dragon perched on a cliff at sunset, epic fantasy, detailed scales' },
                      { label: '🤖 Cyber robot', prompt: 'Futuristic humanoid robot in neon city rain, cyberpunk, ultra-detailed, 4K' },
                      { label: '🌊 Ocean cliff', prompt: 'Dramatic ocean waves crashing on rocky cliffs, golden hour, cinematic photography' },
                    ].map((s) => (
                      <button key={s.label}
                        onClick={() => { setPrompt(s.prompt); setPromptCharCount(s.prompt.length); }}
                        disabled={isGenerating}
                        style={{
                          padding: '4px 10px', borderRadius: 999, border: '1.5px solid rgba(99,85,220,0.2)',
                          background: 'rgba(99,85,220,0.05)', color: '#6355dc',
                          fontSize: 11, fontWeight: 600, cursor: 'pointer',
                          whiteSpace: 'nowrap', flexShrink: 0,
                        }}
                      >{s.label}</button>
                    ))}
                  </div>

                  {/* ── Main input box ── */}
                  <div style={{
                    border: '1.5px solid rgba(99,85,220,0.25)', borderRadius: 16,
                    background: '#fff', overflow: 'hidden',
                    boxShadow: '0 2px 12px rgba(99,85,220,0.08)',
                  }}>

                    {/* Gen mode toggle */}
                    <div style={{ display: 'flex', gap: 2, padding: '10px 12px 0', borderBottom: '1px solid rgba(99,85,220,0.08)' }}>
                      {[
                        { value: 'text',  label: '✍️ Text to Image' },
                        { value: 'image', label: '🖼️ Image to Image', disabled: !MODEL_CONFIG[selectedModel.toUpperCase().replace(/-/g,'_')]?.supportsImg2Img },
                      ].map(m => (
                        <button key={m.value}
                          onClick={() => { if (!m.disabled) setGenMode(m.value as 'text' | 'image'); }}
                          disabled={!!m.disabled}
                          style={{
                            padding: '5px 14px', borderRadius: 8, border: 'none', cursor: m.disabled ? 'not-allowed' : 'pointer',
                            fontFamily: 'inherit', fontSize: 11.5, fontWeight: 700,
                            background: genMode === m.value ? 'linear-gradient(135deg, #6355dc, #8b5cf6)' : 'transparent',
                            color: genMode === m.value ? '#fff' : m.disabled ? '#ccc' : '#6355dc',
                            transition: 'all 0.15s',
                          }}
                        >{m.label}</button>
                      ))}
                    </div>

                    {/* Image upload area — only for img2img */}
                    {genMode === 'image' && (
                      <div style={{ padding: '10px 12px 0' }}>
                        {!inputImagePreview ? (
                          <div
                            onClick={() => inputImageRef.current?.click()}
                            style={{
                              border: '2px dashed rgba(99,85,220,0.3)', borderRadius: 12,
                              padding: '16px', textAlign: 'center', cursor: 'pointer',
                              background: 'rgba(99,85,220,0.03)', transition: 'all 0.2s',
                            }}
                            onMouseEnter={e => (e.currentTarget.style.borderColor = '#6355dc')}
                            onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(99,85,220,0.3)')}
                          >
                            <div style={{ fontSize: 22, marginBottom: 4 }}>🖼️</div>
                            <p style={{ fontSize: 12, color: '#6355dc', fontWeight: 600, margin: 0 }}>
                              Drop or click to upload reference image
                            </p>
                            <p style={{ fontSize: 11, color: '#aaa', margin: '2px 0 0' }}>PNG, JPG — up to 10MB</p>
                            <input ref={inputImageRef} type="file" accept="image/*" style={{ display: 'none' }}
                              onChange={e => {
                                const f = e.target.files?.[0];
                                if (f) { setInputImageFile(f); setInputImagePreview(URL.createObjectURL(f)); }
                              }} />
                          </div>
                        ) : (
                          <div style={{ position: 'relative', borderRadius: 12, overflow: 'hidden', maxHeight: 120, display: 'flex', alignItems: 'center', background: '#f5f5ff' }}>
                            <img src={inputImagePreview} alt="Reference" style={{ maxHeight: 120, maxWidth: '100%', objectFit: 'contain', display: 'block', margin: '0 auto' }} />
                            <button onClick={() => { setInputImageFile(null); setInputImagePreview(null); }}
                              style={{ position: 'absolute', top: 6, right: 6, background: 'rgba(0,0,0,0.6)', border: 'none', color: '#fff', borderRadius: '50%', width: 24, height: 24, cursor: 'pointer', fontSize: 11, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✕</button>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Prompt textarea */}
                    <textarea
                      value={prompt}
                      onChange={(e) => { setPrompt(e.target.value); setPromptCharCount(e.target.value.length); }}
                      placeholder={genMode === 'image' ? '✨ Describe how to transform your image...' : '✨ Describe your image in detail...'}
                      disabled={isGenerating}
                      maxLength={2000}
                      aria-label="Image description prompt"
                      style={{
                        width: '100%', minHeight: 80, maxHeight: 140,
                        padding: '12px 14px 6px', resize: 'none', border: 'none', outline: 'none',
                        background: 'transparent', color: '#2d2d5e',
                        fontSize: 14, lineHeight: 1.6, fontFamily: 'inherit',
                        boxSizing: 'border-box',
                      }}
                    />

                    {/* ── Controls row 1: Model + Style ── */}
                    <div style={{ display: 'flex', gap: 6, padding: '6px 12px', borderTop: '1px solid rgba(99,85,220,0.08)', flexWrap: 'wrap', alignItems: 'center' }}>

                      {/* Model dropdown */}
                      <select value={selectedModel}
                        onChange={(e) => {
                          setSelectedModel(e.target.value);
                          setImageSize('square');
                          setImageQuality('standard');
                          setImageResolution('2k');
                          setGenMode('text');
                          setInputImageFile(null);
                          setInputImagePreview(null);
                        }}
                        style={{
                          padding: '5px 26px 5px 9px', borderRadius: 8, fontSize: 11.5, fontWeight: 700,
                          border: '1.5px solid rgba(99,85,220,0.2)', background: '#fff', color: '#6355dc',
                          cursor: 'pointer', appearance: 'none', fontFamily: 'inherit', flexShrink: 0,
                          backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 12 12'%3E%3Cpath fill='%236355dc' d='M6 9L1 4h10z'/%3E%3C/svg%3E\")",
                          backgroundRepeat: 'no-repeat', backgroundPosition: 'right 7px center',
                        }}>
                        {(isLoggedIn && imageUsage?.availableModels
                          ? imageUsage.availableModels
                          : [
                              { id: 'STABILITY_AI_CORE', displayName: 'Stability Core' },
                              { id: 'GPT_IMAGE_1_MINI',  displayName: 'GPT Mini' },
                              { id: 'IMAGEN_4_FAST',     displayName: 'Imagen 4 Fast' },
                              { id: 'FLUX_1_1_PRO',      displayName: 'FLUX 1.1 Pro' },
                              { id: 'IMAGEN_4_STANDARD', displayName: 'Imagen 4' },
                              { id: 'GPT_IMAGE_1_MEDIUM',displayName: 'GPT Medium' },
                              { id: 'NANO_BANANA_PRO',   displayName: 'Nano Banana Pro ✨' },
                              { id: 'GROK_AURORA',       displayName: 'Grok Aurora Pro ⚡' },
                            ]
                        ).filter((m: any) => {
                          if (genMode !== 'image') return true; // text mode: show all
                          const cfg = MODEL_CONFIG[m.id?.toUpperCase?.().replace(/-/g,'_')];
                          return cfg?.supportsImg2Img === true;
                        }).map((m: any) => (
                          <option key={m.id} value={m.id}>{m.displayName}</option>
                        ))}
                      </select>

                      {/* Style dropdown */}
                      <select value={selectedStyle} onChange={(e) => setSelectedStyle(e.target.value)}
                        style={{
                          padding: '5px 26px 5px 9px', borderRadius: 8, fontSize: 11.5, fontWeight: 700,
                          border: '1.5px solid rgba(99,85,220,0.2)', background: '#fff', color: '#6355dc',
                          cursor: 'pointer', appearance: 'none', fontFamily: 'inherit', flexShrink: 0,
                          backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 12 12'%3E%3Cpath fill='%236355dc' d='M6 9L1 4h10z'/%3E%3C/svg%3E\")",
                          backgroundRepeat: 'no-repeat', backgroundPosition: 'right 7px center',
                        }}>
                        {STYLE_PRESETS.map(s => (
                          <option key={s.value} value={s.value}>{s.icon} {s.label}</option>
                        ))}
                      </select>

                      {/* Size dropdown */}
                      {(() => {
                        const cfg = MODEL_CONFIG[selectedModel.toUpperCase().replace(/-/g,'_')];
                        if (!cfg || cfg.sizes.length <= 1) return (
                          <span style={{ fontSize: 11, color: '#aaa', padding: '5px 8px', border: '1.5px solid rgba(99,85,220,0.1)', borderRadius: 8 }}>
                            {cfg?.sizes[0]?.icon} {cfg?.sizes[0]?.label || '⬛ Square'}
                          </span>
                        );
                        return (
                          <select value={imageSize} onChange={(e) => setImageSize(e.target.value)}
                            style={{
                              padding: '5px 26px 5px 9px', borderRadius: 8, fontSize: 11.5, fontWeight: 700,
                              border: '1.5px solid rgba(99,85,220,0.2)', background: '#fff', color: '#6355dc',
                              cursor: 'pointer', appearance: 'none', fontFamily: 'inherit', flexShrink: 0,
                              backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 12 12'%3E%3Cpath fill='%236355dc' d='M6 9L1 4h10z'/%3E%3C/svg%3E\")",
                              backgroundRepeat: 'no-repeat', backgroundPosition: 'right 7px center',
                            }}>
                            {cfg.sizes.map(s => (
                              <option key={s.value} value={s.value}>{s.icon} {s.label}</option>
                            ))}
                          </select>
                        );
                      })()}

                      {/* Quality dropdown — only if model has multiple tiers */}
                      {(() => {
                        const cfg = MODEL_CONFIG[selectedModel.toUpperCase().replace(/-/g,'_')];
                        if (!cfg || cfg.qualities.length <= 1) return (
                          <span style={{ fontSize: 11, color: '#aaa', padding: '5px 8px', border: '1.5px solid rgba(99,85,220,0.1)', borderRadius: 8 }}>
                            {cfg?.qualities[0]?.label || 'Standard'}
                          </span>
                        );
                        return (
                          <select value={imageQuality} onChange={(e) => setImageQuality(e.target.value)}
                            title={MODEL_CONFIG[selectedModel.toUpperCase().replace(/-/g,'_')]?.qualities.find(q => q.value === imageQuality)?.desc}
                            style={{
                              padding: '5px 26px 5px 9px', borderRadius: 8, fontSize: 11.5, fontWeight: 700,
                              border: '1.5px solid rgba(99,85,220,0.2)', background: '#fff', color: '#6355dc',
                              cursor: 'pointer', appearance: 'none', fontFamily: 'inherit', flexShrink: 0,
                              backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 12 12'%3E%3Cpath fill='%236355dc' d='M6 9L1 4h10z'/%3E%3C/svg%3E\")",
                              backgroundRepeat: 'no-repeat', backgroundPosition: 'right 7px center',
                            }}>
                            {cfg.qualities.map(q => (
                              <option key={q.value} value={q.value}>{q.label}</option>
                            ))}
                          </select>
                        );
                      })()}

                      {/* Resolution — only Nano Banana Pro */}
                      {selectedModel.toUpperCase().replace(/-/g,'_') === 'NANO_BANANA_PRO' && (
                        <select value={imageResolution} onChange={(e) => setImageResolution(e.target.value)}
                          style={{
                            padding: '5px 26px 5px 9px', borderRadius: 8, fontSize: 11.5, fontWeight: 700,
                            border: '1.5px solid rgba(99,85,220,0.2)', background: '#fff', color: '#6355dc',
                            cursor: 'pointer', appearance: 'none', fontFamily: 'inherit', flexShrink: 0,
                            backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 12 12'%3E%3Cpath fill='%236355dc' d='M6 9L1 4h10z'/%3E%3C/svg%3E\")",
                            backgroundRepeat: 'no-repeat', backgroundPosition: 'right 7px center',
                          }}>
                          <option value="2k">📐 2K — up to 2048px</option>
                          <option value="4k">📐 4K — up to 4096px</option>
                        </select>
                      )}

                      <div style={{ flex: 1 }} />

                      {/* Credits pill */}
                      <span style={{
                        fontSize: 11.5, fontWeight: 700, padding: '4px 10px', borderRadius: 999,
                        background: 'rgba(99,85,220,0.08)', color: '#6355dc', whiteSpace: 'nowrap', flexShrink: 0,
                      }}>
                        ⚡ {isLoggedIn ? (imageUsage?.balance ?? '...') : 50} cr
                        {' · '}{getCreditCost(selectedModel.toUpperCase().replace(/-/g,'_'), imageSize, imageQuality, imageResolution)}cr/img
                      </span>

                      {isLoggedIn && imageUsage && imageUsage.balance < 15 && imageUsage.balance > 0 && (
                        <a href="/pricing" style={{
                          fontSize: 11, fontWeight: 700, padding: '4px 10px', borderRadius: 999,
                          background: 'linear-gradient(135deg, #f59e0b, #f97316)',
                          color: '#fff', textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0,
                        }}>Top up →</a>
                      )}

                      {/* char count */}
                      {promptCharCount > 0 && (
                        <span style={{ fontSize: 10.5, color: promptCharCount > 1800 ? '#dc2626' : '#aaaacc', fontWeight: 600, flexShrink: 0 }}>
                          {promptCharCount}/2k
                        </span>
                      )}

                      {/* ── Advanced options button ── */}
                      <button
                        onClick={() => {
                          const el = document.getElementById('neg-prompt-area');
                          if (el) el.style.display = el.style.display === 'none' ? 'block' : 'none';
                        }}
                        style={{
                          padding: '5px 10px', borderRadius: 8, fontSize: 11.5, fontWeight: 600,
                          border: '1.5px solid rgba(99,85,220,0.2)', background: '#fff',
                          color: '#8888bb', cursor: 'pointer', whiteSpace: 'nowrap', flexShrink: 0,
                        }}
                      >⚙️</button>

                      {/* Generate button */}
                      {!isLoggedIn ? (
                        <button ></button>
                      ) : (
                        <button
                          onClick={() => {
                            const params = new URLSearchParams();
                            params.set('tab', 'image');
                            if (prompt.trim()) params.set('text', prompt);

                            // For img2img: store file in sessionStorage as base64
                            // so create-ai-content can pick it up on load
                            if (genMode === 'image' && inputImageFile) {
                              const reader = new FileReader();
                              reader.onload = () => {
                                try {
                                  sessionStorage.setItem('cac_img2img_preview', reader.result as string);
                                  sessionStorage.setItem('cac_img2img_name', inputImageFile.name);
                                  sessionStorage.setItem('cac_img2img_type', inputImageFile.type);
                                } catch {}
                                window.location.href = `/create-ai-content?${params.toString()}`;
                              };
                              reader.readAsDataURL(inputImageFile);
                            } else {
                              window.location.href = `/create-ai-content?${params.toString()}`;
                            }
                          }}
                          disabled={!prompt.trim() || (genMode === 'image' && !inputImageFile)}
                          style={{
                            padding: '7px 18px', borderRadius: 10, border: 'none', cursor: 'pointer',
                            background: (!prompt.trim() || (genMode === 'image' && !inputImageFile)) ? '#e2e2f0' : 'linear-gradient(135deg, #6355dc, #8b5cf6)',
                            color: (!prompt.trim() || (genMode === 'image' && !inputImageFile)) ? '#aaa' : '#fff',
                            fontWeight: 700, fontSize: 13, fontFamily: 'inherit',
                            display: 'flex', alignItems: 'center', gap: 6, whiteSpace: 'nowrap', flexShrink: 0,
                          }}>
                          ✨ Generate Image →
                        </button>
                      )}
                    </div>

                    {/* Negative prompt — hidden by default */}
                    <div id="neg-prompt-area" style={{ display: 'none', borderTop: '1px solid rgba(99,85,220,0.1)' }}>
                      <textarea
                        value={negativePrompt}
                        onChange={(e) => setNegativePrompt(e.target.value)}
                        placeholder="What to avoid... (e.g. blurry, distorted, low quality)"
                        maxLength={500}
                        style={{
                          width: '100%', minHeight: 50, padding: '10px 16px', border: 'none', outline: 'none',
                          background: '#f9f9ff', fontSize: 12.5, color: '#555', resize: 'none',
                          fontFamily: 'inherit', boxSizing: 'border-box',
                        }}
                      />
                    </div>
                  </div>
                  {/* MICRO-TOOL: job status cards disabled
                  
                  {currentImageJob && (currentImageJob.status === 'PENDING' || currentImageJob.status === 'PROCESSING') && (
                    <div className="image-job-status-card" style={{
                      background: 'rgba(99,85,220,0.06)', border: '1.5px solid rgba(99,85,220,0.2)',
                      borderRadius: 14, padding: '14px 16px', marginTop: 10,
                      display: 'flex', alignItems: 'center', gap: 14,
                    }}>
                      <div style={{
                        width: 32, height: 32, flexShrink: 0, borderRadius: '50%',
                        border: '3px solid rgba(99,85,220,0.15)', borderTopColor: '#6355dc',
                        animation: 'spin 0.9s linear infinite',
                      }} />
                      <div>
                        <strong style={{ color: '#2d2d5e', display: 'block', marginBottom: 2, fontSize: 13 }}>
                          {currentImageJob.status === 'PENDING' ? 'Queued — starting soon…' : 'Generating your image…'}
                        </strong>
                        <span style={{ fontSize: 11.5, color: '#8888bb' }}>
                          Takes 10–30 sec. You can safely close this tab.
                        </span>
                      </div>
                      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
                    </div>
                  )}

                  {currentImageJob && currentImageJob.status === 'FAILED' && (
                    <div style={{
                      background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.2)',
                      borderRadius: 12, padding: '12px 14px', marginTop: 10,
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 10,
                    }}>
                      <span style={{ fontSize: 13, color: '#dc2626' }}>
                        ⚠️ Generation failed. {currentImageJob.errorMessage || 'Credits refunded.'}
                      </span>
                      <button onClick={() => setCurrentImageJob(null)} style={{
                        background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)',
                        borderRadius: 8, padding: '4px 10px', color: '#dc2626',
                        fontSize: 12, fontWeight: 700, cursor: 'pointer', flexShrink: 0,
                      }}>Dismiss</button>
                    </div>
                  )}
                generation redirects to create-ai-content */}
              </div>
            </div>

            {/* MICRO-TOOL: generated image results disabled 
            {generatedImages.length > 0 && (
              <section className="image-results-section" role="region" aria-labelledby="results-title">
                <motion.div
                  className="container"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h2 id="results-title">Your Generated Image</h2>
                  <div className="images-grid">
                    {generatedImages.map((image) => (
                      <div key={image.id} className="image-result-card">
                        <img src={image.imagePath} alt={image.prompt} className="generated-image" />
                        <div className="image-actions">
                          <button
                            onClick={() => handleDownloadImage(image.imagePath, image.id)}
                            className="download-image-btn"
                            aria-label="Download image"
                          >
                            📥 Download PNG
                          </button>
                          <button
                            className="download-image-btn"
                            style={{ background: 'linear-gradient(90deg, #8B5CF6, #EC4899)' }}
                            onClick={() => handleEditInEditor(image.imagePath, `ai-image-${image.id}`)}
                            disabled={isCreatingProject}
                            aria-label="Edit in editor"
                          >
                            {isCreatingProject ? '⏳ Creating…' : '✏️ Edit in Editor'}
                          </button>
                        </div>
                        <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
                          <button
                            onClick={() => { setGeneratedImages([]); setTimeout(() => document.querySelector('textarea')?.focus(), 100); }}
                            style={{
                              flex: 1, padding: '8px 12px', borderRadius: 10, cursor: 'pointer',
                              border: '1.5px solid rgba(99,85,220,0.2)', background: 'rgba(99,85,220,0.05)',
                              color: '#6355dc', fontSize: 12.5, fontWeight: 600,
                            }}
                          >
                            🔄 Try another prompt
                          </button>
                          <button
                            onClick={() => navigator.clipboard.writeText(generatedImages[0]?.prompt || '')}
                            style={{
                              padding: '8px 12px', borderRadius: 10, cursor: 'pointer',
                              border: '1.5px solid rgba(99,85,220,0.2)', background: 'rgba(99,85,220,0.05)',
                              color: '#6355dc', fontSize: 12.5, fontWeight: 600,
                            }}
                          >
                            📋 Copy prompt
                          </button>
                        </div>

                        <div style={{
                          marginTop: 12, padding: '12px 16px',
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
                        <p className="image-prompt">{image.prompt}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </section>
            )}
               generation redirects to create-ai-content */}

            {/* ── DEMO IMAGE MARQUEE ── */}
            <section className="demo-marquee-section" aria-label="Example AI generated images">
              <div className="demo-marquee-header">
                <h2>Images Created by Our Users</h2>
                <p>Real examples generated with Scenith AI — your imagination is the only limit</p>
              </div>

              <p style={{
                textAlign: 'center', fontSize: 12, color: '#64748B',
                marginBottom: 16,
                background: 'rgba(99,85,220,0.06)', border: '1px solid rgba(99,85,220,0.15)',
                borderRadius: 8, padding: '7px 14px', display: 'inline-block',
              }}>
                🔓 Images shown are from <strong style={{ color: '#6355dc' }}>Free plan</strong> users · 
                🔒 <strong style={{ color: '#6355dc' }}>Premium</strong> users' media is always private & secured
              </p>              

              {demoImages.length > 0 && (() => {
                const row1 = demoImages.slice(0, Math.ceil(demoImages.length / 2));
                const row2 = demoImages.slice(Math.ceil(demoImages.length / 2));
                return (
                  <div className="demo-marquee-wrapper">
                    <div className="demo-marquee-track" aria-hidden="true">
                      <div className="demo-marquee-inner demo-scroll-left">
                        {[...row1, ...row1].map((src, i) => (
                          <div key={`r1-${i}`} className="demo-marquee-card">
                            <img src={src} alt="AI generated image example" loading="lazy" decoding="async" width={220} height={220} />
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="demo-marquee-track" aria-hidden="true">
                      <div className="demo-marquee-inner demo-scroll-right">
                        {[...row2, ...row2].map((src, i) => (
                          <div key={`r2-${i}`} className="demo-marquee-card">
                            <img src={src} alt="AI generated image example" loading="lazy" decoding="async" width={220} height={220} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })()}
            </section>

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
                      <p>A: Free plan has no image credits. Upgrade to Creator Lite (100 cr/mo), Creator Spark (250 cr/mo), or Creator Odyssey (500 cr/mo) to start generating images.</p>
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
            <img
              src="/images/AIImageGenerationSS.png"
              alt="Free AI image generator interface showing text-to-image creation with multiple artistic styles"
              className="hero-image"
              width={800}
              height={400}
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
          <a href="/create-ai-content?tab=image"
            className="cta-button"
            aria-label="Start using the free AI image generator"
            style={{ display: 'inline-block', textDecoration: 'none' }}
          >
            🖼️ Generate Images Free →
          </a>
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
                <li>✅ <strong>Scenith:</strong> Credit-based plans from $9/mo, web-based interface</li>
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
                <li>✅ <strong>Scenith:</strong>  for basic use</li>
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
      {isLoggedIn && imageUsage && imageUsage.balance <= 20 && (
        <div className="floating-upgrade-cta">
          <button
            className="floating-upgrade-btn"
            onClick={() => window.location.href = '/pricing'}
          >
            <span className="float-icon">🎨</span>
            <span className="float-text">
              <strong>
                {imageUsage.balance <= 0 ? 'Out of credits — Upgrade now' : 'Running low on credits'}
              </strong>
              <small>View plans for more →</small>
            </span>
          </button>
        </div>
      )}

      {showWelcomeModal && (
        <div
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}
          onClick={(e) => { if (e.target === e.currentTarget) setShowWelcomeModal(false); }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 32 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 32 }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            style={{ background: '#0d0d1c', borderRadius: 24, padding: 0, maxWidth: 560, width: '96%', maxHeight: '85vh', overflowY: 'auto', position: 'relative', border: '1px solid rgba(99,85,220,0.3)', boxShadow: '0 40px 120px rgba(0,0,0,0.75)' }}
          >
            <button onClick={() => setShowWelcomeModal(false)} style={{ position: 'absolute', top: 14, right: 14, zIndex: 10, background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, width: 32, height: 32, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6a6a8a' }} aria-label="Close">
              <FaTimes size={11} />
            </button>
            <div style={{ height: 5, borderRadius: '24px 24px 0 0', background: 'linear-gradient(90deg, #6355dc, #8b5cf6, #f06cbe)' }} />
            <div style={{ padding: '28px 28px 24px' }}>
              <div style={{ textAlign: 'center', marginBottom: 22 }}>
                <div style={{ fontSize: 40, marginBottom: 10 }}>🖼️</div>
                <h2 style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontSize: 20, fontWeight: 900, color: '#e2e2ef', marginBottom: 6 }}>Welcome to Scenith AI Images</h2>
                <p style={{ fontSize: 13, color: '#6a6a8a', maxWidth: 380, margin: '0 auto', lineHeight: 1.55 }}>
                  You're on the <strong style={{ color: '#a899f5' }}>Free Plan</strong> (50 credits). Here's what you get — and what you unlock with <strong style={{ color: '#a899f5' }}>Creator Lite</strong> for just $9/mo.
                </p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 20 }}>
                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '16px 14px' }}>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', color: '#44445e', textTransform: 'uppercase', marginBottom: 12 }}>🆓 Free Plan</div>
                  {[
                    { icon: '💳', label: 'Credits', val: '50 total' },
                    { icon: '🖼️', label: 'Image models', val: 'Limited only' },
                    { icon: '📥', label: 'Downloads', val: 'PNG included' },
                    { icon: '💰', label: 'Topups', val: '✗ Not available' },
                  ].map((item, i) => (
                    <div key={i} style={{ marginBottom: i < 3 ? 8 : 0 }}>
                      <div style={{ fontSize: 10, color: '#3a3a52', marginBottom: 1 }}>{item.icon} {item.label}</div>
                      <div style={{ fontSize: 12, color: '#55557a', fontWeight: 600 }}>{item.val}</div>
                    </div>
                  ))}
                </div>
                <div style={{ background: 'rgba(99,85,220,0.08)', border: '1px solid rgba(99,85,220,0.3)', borderRadius: 14, padding: '16px 14px', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: -11, left: '50%', transform: 'translateX(-50%)', background: 'linear-gradient(135deg, #6355dc, #8b5cf6)', color: '#fff', fontSize: 9, fontWeight: 800, letterSpacing: '0.08em', padding: '3px 12px', borderRadius: 999, whiteSpace: 'nowrap' }}>⭐ MOST POPULAR</div>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', color: '#6355dc', textTransform: 'uppercase', marginBottom: 12 }}>Creator Lite — $9/mo</div>
                  {[
                    { icon: '💳', label: 'Credits', val: '300 /mo' },
                    { icon: '🖼️', label: 'Image models', val: 'All models ✓' },
                    { icon: '📥', label: 'Downloads', val: 'Unlimited ✓' },
                    { icon: '💰', label: 'Topups', val: '✓ Available' },
                  ].map((item, i) => (
                    <div key={i} style={{ marginBottom: i < 3 ? 8 : 0 }}>
                      <div style={{ fontSize: 10, color: '#6355dc', marginBottom: 1 }}>{item.icon} {item.label}</div>
                      <div style={{ fontSize: 12, color: '#a899f5', fontWeight: 700 }}>{item.val}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ textAlign: 'center', marginBottom: 14 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: 6, marginBottom: 4 }}>
                  <span style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontSize: 34, fontWeight: 900, color: '#e2e2ef', letterSpacing: '-0.03em' }}>$15</span>
                  <span style={{ fontSize: 12, color: '#55557a' }}>/mo</span>
                  <span style={{ background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.28)', color: '#34d399', fontSize: 10, fontWeight: 700, padding: '3px 8px', borderRadius: 999 }}>300 CREDITS INCLUDED</span>
                </div>
                <p style={{ fontSize: 11, color: '#3a3a52', marginBottom: 14 }}>Cancel anytime · No hidden fees · All models included</p>
                <a href="/pricing" onClick={() => setShowWelcomeModal(false)} style={{ display: 'block', width: '100%', padding: '13px 24px', background: 'linear-gradient(135deg, #6355dc 0%, #8b5cf6 100%)', color: '#fff', borderRadius: 12, textDecoration: 'none', fontSize: 14, fontWeight: 700, boxShadow: '0 8px 32px rgba(99,85,220,0.45)', textAlign: 'center' }}>
                  Upgrade to Creator Lite — $9/mo →
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: 11, color: '#3a3a52' }}>⭐⭐⭐⭐⭐ 1,500+ creators trust Scenith</span>
                <button onClick={() => setShowWelcomeModal(false)} style={{ background: 'none', border: 'none', color: '#3a3a52', fontSize: 11, cursor: 'pointer', textDecoration: 'underline' }}>Continue free</button>
              </div>
            </div>
          </motion.div>
        </div>
      )}      
    </div>
  );
};

export default AIImageGeneratorClient;