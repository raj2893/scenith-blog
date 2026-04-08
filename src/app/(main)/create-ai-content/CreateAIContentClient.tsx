"use client";

import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  useMemo,
} from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaMoon, FaSun } from "react-icons/fa";
import { API_BASE_URL, CDN_URL } from "@/app/config";
import './create-ai-content.css';
import CustomDropdown from "./CustomDropdown";

// ─── Types ────────────────────────────────────────────────────────────────────

type Tab = "voice" | "image" | "video";

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
}

interface TtsUsage {
  balance: number;
  planType: string;
  maxCharsPerRequest: number;
  isPaid: boolean;
  voiceCharsUsed: number;
  voiceCharsLimit: number;
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

interface VideoCredits {
  balance: number;
  planType: string;
  expiresAt: string | "N/A";
  creditCosts: any[];
  freeVideoUsed: boolean;
}

interface VideoJob {
  id: number;
  falRequestId: string;
  model: string;
  modelDisplayName: string;
  status: "PENDING" | "PROCESSING" | "COMPLETED" | "FAILED";
  prompt: string;
  durationSeconds: number;
  audioEnabled: boolean;
  aspectRatio: string;
  creditsUsed: number;
  resolution: string;
  videoUrl?: string | null;
  createdAt: string;
  completedAt: string | null;
  errorMessage?: string;
}

interface GeneratedImage {
  id: number;
  imagePath: string;
  prompt: string;
  resolution: string;
  createdAt: string;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const IMAGE_STYLE_PRESETS = [
  { value: "realistic", label: "Realistic", icon: "📷" },
  { value: "artistic", label: "Artistic", icon: "🎨" },
  { value: "anime", label: "Anime", icon: "🎌" },
  { value: "digital-art", label: "Digital Art", icon: "💻" },
  { value: "3d-render", label: "3D Render", icon: "🎮" },
  { value: "fantasy", label: "Fantasy", icon: "🧙" },
  { value: "sci-fi", label: "Sci-Fi", icon: "🚀" },
  { value: "vintage", label: "Vintage", icon: "📼" },
];

const IMAGE_MODEL_CONFIG: Record<
  string,
  {
    sizes: { value: string; label: string; icon: string }[];
    qualities: { value: string; label: string; creditsExtra: number }[];
    supportsImg2Img: boolean;
    flatPrice: boolean;
  }
> = {
  GPT_IMAGE_1_MINI: {
    flatPrice: false,
    supportsImg2Img: true,
    sizes: [
      { value: "square", label: "Square (1:1)", icon: "⬛" },
      { value: "portrait", label: "Portrait (9:16)", icon: "📱" },
      { value: "landscape", label: "Landscape (16:9)", icon: "🖥️" },
    ],
    qualities: [
      { value: "draft", label: "Draft", creditsExtra: 0 },
      { value: "standard", label: "Standard", creditsExtra: 0 },
      { value: "premium", label: "Premium", creditsExtra: 0 },
    ],
  },
  GPT_IMAGE_1_MEDIUM: {
    flatPrice: false,
    supportsImg2Img: true,
    sizes: [
      { value: "square", label: "Square (1:1)", icon: "⬛" },
      { value: "portrait", label: "Portrait (9:16)", icon: "📱" },
      { value: "landscape", label: "Landscape (16:9)", icon: "🖥️" },
    ],
    qualities: [
      { value: "draft", label: "Draft", creditsExtra: 0 },
      { value: "standard", label: "Standard", creditsExtra: 0 },
      { value: "premium", label: "Premium", creditsExtra: 0 },
    ],
  },
  IMAGEN_4_FAST: {
    flatPrice: true,
    supportsImg2Img: false,
    sizes: [
      { value: "square", label: "Square (1:1)", icon: "⬛" },
      { value: "landscape", label: "Landscape (16:9)", icon: "🖥️" },
      { value: "portrait", label: "Portrait (9:16)", icon: "📱" },
      { value: "standard", label: "Standard (4:3)", icon: "📺" },
      { value: "tall", label: "Tall (3:4)", icon: "📄" },
    ],
    qualities: [{ value: "standard", label: "Fast Mode", creditsExtra: 0 }],
  },
  IMAGEN_4_STANDARD: {
    flatPrice: true,
    supportsImg2Img: false,
    sizes: [
      { value: "square", label: "Square (1:1)", icon: "⬛" },
      { value: "landscape", label: "Landscape (16:9)", icon: "🖥️" },
      { value: "portrait", label: "Portrait (9:16)", icon: "📱" },
      { value: "standard", label: "Standard (4:3)", icon: "📺" },
      { value: "tall", label: "Tall (3:4)", icon: "📄" },
    ],
    qualities: [{ value: "standard", label: "Full Quality", creditsExtra: 0 }],
  },
  FLUX_1_1_PRO: {
    flatPrice: true,
    supportsImg2Img: false,
    sizes: [{ value: "square", label: "Square (1:1)", icon: "⬛" }],
    qualities: [{ value: "standard", label: "Photorealism", creditsExtra: 0 }],
  },
  STABILITY_AI_CORE: {
    flatPrice: true,
    supportsImg2Img: true,
    sizes: [{ value: "square", label: "Square (1:1)", icon: "⬛" }],
    qualities: [{ value: "standard", label: "SDXL Art", creditsExtra: 0 }],
  },
  GROK_AURORA: {
    flatPrice: true,
    supportsImg2Img: true,
    sizes: [
      { value: "square", label: "Square (1:1)", icon: "⬛" },
      { value: "landscape", label: "Landscape (16:9)", icon: "🖥️" },
      { value: "portrait", label: "Portrait (9:16)", icon: "📱" },
    ],
    qualities: [
      { value: "standard", label: "2K Photorealism", creditsExtra: 0 },
    ],
  },
};
const MODEL_LOGOS: Record<string, string> = {
  // Image models
  GPT_IMAGE_1_MINI:     "https://cdn.scenith.in/brand-logos/Chatgpt%20logo.webp",
  GPT_IMAGE_1_MEDIUM:   "https://cdn.scenith.in/brand-logos/Chatgpt%20logo.webp",
  IMAGEN_4_FAST:        "https://cdn.scenith.in/brand-logos/Google%20Logo.webp",
  IMAGEN_4_STANDARD:    "https://cdn.scenith.in/brand-logos/Google%20Logo.webp",
  FLUX_1_1_PRO:         "https://cdn.scenith.in/brand-logos/Flux%20logo.png",
  STABILITY_AI_CORE:    "https://cdn.scenith.in/brand-logos/Stability%20logo.png",
  GROK_AURORA:          "https://cdn.scenith.in/brand-logos/Grok.png",
  NANO_BANANA_PRO:      "https://cdn.scenith.in/brand-logos/Google%20Logo.webp",
  // Video models — keys match exact API IDs
  WAN_2_5:              "https://cdn.scenith.in/brand-logos/WanNew%20ai%20logo.png",
  KLING_2_5_TURBO:      "https://cdn.scenith.in/brand-logos/Kling%20logo.webp",
  KLING_2_6_PRO:        "https://cdn.scenith.in/brand-logos/Kling%20logo.webp",
  VEO_3_1_FAST:         "https://cdn.scenith.in/brand-logos/Google%20Logo.webp",
  VEO_3_1:              "https://cdn.scenith.in/brand-logos/Google%20Logo.webp",
  GROK_IMAGINE:         "https://cdn.scenith.in/brand-logos/Grok.png",
  // Voice providers
  GOOGLE:               "https://cdn.scenith.in/brand-logos/Google%20Logo.webp",
  OPENAI:               "https://cdn.scenith.in/brand-logos/Chatgpt%20logo.webp",
  AZURE:                "https://cdn.scenith.in/brand-logos/Azure%20logo.png",
};

const ModelLogo: React.FC<{ modelKey: string; size?: number }> = ({ modelKey, size = 15 }) => {
  const src = MODEL_LOGOS[modelKey];
  if (!src) return null;
  return (
    <img
      src={src}
      alt=""
      style={{
        width: size,
        height: size,
        objectFit: "contain",
        objectPosition: "center",
        borderRadius: 3,
        flexShrink: 0,
        display: "inline-block",
        pointerEvents: "none",
      }}
    />
  );
};

const getImageCreditCost = (
  modelId: string,
  size: string,
  quality: string
): number => {
  const nonSquare = size === "portrait" || size === "landscape";
  const q = quality || "standard";
  switch (modelId) {
    case "GPT_IMAGE_1_MINI":
      if (q === "draft") return 10;
      if (q === "premium") return nonSquare ? 47 : 32;
      return nonSquare ? 12 : 15;
    case "GPT_IMAGE_1_MEDIUM":
      if (q === "draft") return 10;
      if (q === "premium") return nonSquare ? 47 : 32;
      return nonSquare ? 12 : 15;
    case "IMAGEN_4_FAST":
      return 10;
    case "IMAGEN_4_STANDARD":
      return 15;
    case "FLUX_1_1_PRO":
      return 15;
    case "STABILITY_AI_CORE":
      return 15;
    case "GROK_AURORA":
      return 14;
    default:
      return 15;
  }
};
const VIDEO_ASPECT_RATIOS = [
  { value: "16:9", label: "16:9", icon: "🖥️" },
  { value: "9:16", label: "9:16", icon: "📱" },
  { value: "1:1", label: "1:1", icon: "⬛" },
];

const VIDEO_DURATION_OPTIONS = [
  { value: 5, label: "5s" },
  { value: 10, label: "10s" },
];

const VIDEO_RESOLUTION_OPTIONS: Record<string, { value: string; label: string; icon: string }[]> = {
  wan: [
    { value: "480p",  label: "480p",  icon: "📱" },
    { value: "720p",  label: "720p",  icon: "💻" },
    { value: "1080p", label: "1080p", icon: "🖥️" },
  ],
  grok: [
    { value: "480p", label: "480p", icon: "📱" },
    { value: "720p", label: "720p", icon: "💻" },
  ],
};

const STATIC_VIDEO_MODELS = [
  { id: "wan2.5", name: "Wan 2.5", cr: 46 },
  { id: "kling-v2.5-turbo", name: "Kling 2.5 Turbo", cr: 64 },
  { id: "kling-v2.6-pro", name: "Kling 2.6 Pro", cr: 64 },
  { id: "veo3.1-fast", name: "Veo 3.1 Fast", cr: 92 },
  { id: "veo3.1", name: "Veo 3.1", cr: 186 },
  { id: "grok-imagine", name: "Grok Imagine 🎵", cr: 47 },
];

/**
 * Mirrors VideoGenModel.calculateCredits() from backend.
 * Used to show live credit cost in the UI before submitting.
 */
const calcVideoCredits = (
  modelId: string,
  durationSeconds: number,
  audioOn: boolean,
  resolution: string
): number => {
  const is10s = durationSeconds > 5;
  const res = resolution?.toLowerCase() || "480p";

  if (modelId?.toLowerCase().includes("wan")) {
    const base5s = res === "480p" ? 46 : res === "720p" ? 92 : 138;
    return is10s ? base5s * 2 : base5s;
  }
  if (modelId?.toLowerCase().includes("kling-v2.5") || modelId?.toLowerCase().includes("kling-2.5")) {
    return is10s ? 130 : 64;
  }
  if (modelId?.toLowerCase().includes("kling-v2.6") || modelId?.toLowerCase().includes("kling-2.6")) {
    const base5s = audioOn ? 130 : 64;
    return is10s ? base5s * 2 : base5s;
  }
  if (modelId?.toLowerCase().includes("veo3.1-fast") || modelId?.toLowerCase().includes("veo 3.1 fast")) {
    if (!is10s) return audioOn ? 138 : 92;
    return audioOn ? 278 : 186;
  }
  if (modelId?.toLowerCase().includes("veo3.1") || modelId?.toLowerCase().includes("veo 3.1")) {
    if (!is10s) return audioOn ? 370 : 186;
    return audioOn ? 740 : 370;
  }
  if (modelId?.toLowerCase().includes("grok")) {
    const base5s = res === "720p" ? 66 : 47;
    return is10s ? base5s * 2 : base5s;
  }
  return 46; // fallback
};

const PROMPT_SUGGESTIONS: Record<Tab, { label: string; prompt: string }[]> = {
  voice: [
    {
      label: "🎬 YT Intro",
      prompt: "What's up everyone! Welcome back to the channel — today we're uncovering something that's going to completely change the way you think. Stay until the end, you won't regret it.",
    },
    {
      label: "🚀 Startup Pitch",
      prompt: "Every great company started with one bold idea. Ours is simpler than you think — and it's already changing how millions of people work, create, and connect.",
    },
    {
      label: "🧘 Sleep Meditation",
      prompt: "Let your body sink into the ground beneath you. With every breath, feel the tension melt away. Tonight, you are safe. Tonight, you rest deeply.",
    },
    {
      label: "📚 Audiobook Narrator",
      prompt: "It was a cold Tuesday morning when Detective Reyes first noticed the pattern. Three cities. Three crimes. One impossible signature left behind each time.",
    },
    {
      label: "🎮 Game Trailer",
      prompt: "In a world where the gods have fallen silent, one warrior carries the last ember of hope. The battle for the realm begins now. Are you ready?",
    },
    {
      label: "📰 News Anchor",
      prompt: "Good evening. Tonight's top stories — a breakthrough in quantum computing, rising tensions at the summit, and the unexpected discovery reshaping modern medicine.",
    },
    {
      label: "💼 Corporate Training",
      prompt: "Welcome to Day One. Over the next thirty minutes, you'll learn the three core principles that define how we work, why we exist, and what we expect from every team member.",
    },
    {
      label: "🍕 Food Ad",
      prompt: "Crispy on the outside. Melting on the inside. Made with ingredients you can actually pronounce. This isn't just food — this is the reason your taste buds exist.",
    },
    {
      label: "🌍 Documentary",
      prompt: "Deep beneath the Amazon rainforest, a species undiscovered for over a century has been found alive. What scientists saw next rewrote everything we thought we knew.",
    },
    {
      label: "💪 Gym Hype",
      prompt: "Nobody remembers the days you stayed comfortable. They remember the days you pushed past every limit. Get up. Show up. Go make it count.",
    },
    {
      label: "🎓 E-Learning",
      prompt: "In this lesson, we'll break down exactly how photosynthesis works — step by step, in plain English. By the end, you'll be able to explain it to anyone. Let's get started.",
    },
    {
      label: "🎙️ Podcast Intro",
      prompt: "Welcome back to another episode. I'm your host, and today we're sitting down with someone who's been quietly changing the way we think about productivity, creativity, and what it actually means to do your best work.",
    },
  ],
  image: [
    {
      label: "🌆 Neon Tokyo",
      prompt: "Aerial cinematic view of neon-lit Tokyo streets at 2AM, rain-soaked roads reflecting purple and pink signs, fog rolling between skyscrapers, 8K ultra-detailed",
    },
    {
      label: "🧬 DNA City",
      prompt: "Futuristic megacity built inside a giant DNA double helix structure, bioluminescent plants growing on glass platforms, god-ray lighting, hyperrealistic, 4K",
    },
    {
      label: "🌊 Underwater Palace",
      prompt: "Ancient Greek marble palace submerged deep underwater, rays of turquoise light filtering through broken columns, colorful fish swimming through archways, cinematic",
    },
    {
      label: "🐺 Arctic Wolf",
      prompt: "Majestic white arctic wolf standing on a frozen glacier at golden hour, breath visible in cold air, fur detail perfect, National Geographic photography style",
    },
    {
      label: "🍄 Mushroom Forest",
      prompt: "Enchanted forest of giant glowing mushrooms at night, tiny fairy lights between the caps, a small wooden cottage with warm amber windows, mist on the ground, fantasy art",
    },
    {
      label: "🤖 Robot Samurai",
      prompt: "Chrome and obsidian samurai robot standing in a burning feudal Japanese village at dusk, katana drawn, sparks flying, cinematic wide shot, ultra-detailed 8K",
    },
    {
      label: "🪐 Alien Sunset",
      prompt: "Double sunset on a lush alien planet with purple sky, two suns on the horizon, towering crystalline rock formations, exotic red foliage, cinematic wide angle",
    },
    {
      label: "🏛️ Abandoned Library",
      prompt: "Centuries-old abandoned gothic library, floor-to-ceiling bookshelves collapsing, vines growing through broken stained glass windows, golden dust in the air, dramatic lighting",
    },
    {
      label: "👁️ Galaxy Portrait",
      prompt: "Ultra close-up portrait of a woman's face, galaxy and nebula reflected in her eye, single tear rolling down her cheek, dark background, hyper-realistic studio lighting",
    },
    {
      label: "🐉 Ice Dragon",
      prompt: "Colossal ice dragon emerging from a frozen tundra storm, wings spanning the entire sky, lightning crackling around its horns, blizzard below, epic fantasy cinematic",
    },
    {
      label: "☕ Café Morning",
      prompt: "Cozy Parisian corner café on a rainy morning, steaming coffee on a marble table, raindrops on the window, soft warm bokeh lights, film photography aesthetic",
    },
    {
      label: "🔬 Nano World",
      prompt: "Microscopic world of human blood cells rendered as a vibrant alien city, red platelets glowing, white cells as skyscrapers, hyper-detailed scientific illustration",
    },
    {
      label: "👗 Fashion Portrait",
      prompt: "High-fashion editorial portrait of a woman in a flowing silk gown, dramatic side lighting, black marble background, Vogue magazine style, sharp focus, ultra-detailed 4K",
    },
    {
      label: "🏠 Interior Design",
      prompt: "Luxury minimalist living room at golden hour, floor-to-ceiling windows overlooking a forest, warm oak furniture, cream linen sofas, architectural digest photography style",
    },
    {
      label: "🍽️ Food Photography",
      prompt: "Overhead flat lay of a rustic Italian pasta dish, fresh basil leaves, parmesan shavings, olive oil drizzle on weathered wood surface, warm natural light, food magazine style",
    },
  ],
  video: [
    {
      label: "🌆 Neon Tokyo",
      prompt: "Slow cinematic aerial drone descending into neon-lit Tokyo streets at midnight, rain puddles reflecting signs, pedestrians with umbrellas, ultra-detailed 4K",
    },
    {
      label: "🌋 Volcano Eruption",
      prompt: "Dramatic wide-angle shot of a volcano erupting at night, massive lava flows streaming down dark mountainside, glowing orange against pitch black sky, slow motion",
    },
    {
      label: "🦋 Forest Awakening",
      prompt: "Time-lapse of a misty forest awakening at dawn, sunbeams cutting through ancient trees, butterflies emerging from chrysalises, dew drops on spider webs, ethereal",
    },
    {
      label: "🚀 Space Launch",
      prompt: "Cinematic rocket launch at dusk, enormous plume of fire and smoke billowing outward, rocket climbing into deep orange sky leaving a white streak, slow motion dramatic",
    },
    {
      label: "🌊 Bioluminescent Bay",
      prompt: "Drone flying low over a bioluminescent ocean bay at night, each wave crashing in electric blue light, stars reflected on the water surface, magical and cinematic",
    },
    {
      label: "🏙️ City Timelapse",
      prompt: "Epic city timelapse from rooftop at sunset to midnight — clouds racing, golden hour melting into blue hour, lights flickering on across the entire skyline, 4K",
    },
    {
      label: "🐋 Deep Ocean",
      prompt: "Cinematic deep ocean dive, a massive blue whale gliding silently through shafts of light, schools of silver fish parting around it, haunting and beautiful",
    },
    {
      label: "❄️ Snowstorm Walk",
      prompt: "Single figure walking through a heavy blizzard in slow motion, wind-driven snow swirling dramatically, the silhouette barely visible, cinematic and atmospheric",
    },
    {
      label: "🌸 Petal Storm",
      prompt: "Thousands of cherry blossom petals swirling in slow motion against a pale sky, a lone figure standing in the centre with eyes closed, soft diffused sunlight, dreamy",
    },
    {
      label: "⚡ Supercell Storm",
      prompt: "Timelapse of a massive rotating supercell thunderstorm forming over flat plains, lightning striking in every direction, dark teal and purple sky, cinematic wide shot",
    },
    {
      label: "🧍 Street Story",
      prompt: "Slow motion close-up of a street musician playing violin in the rain, water droplets catching the light, blurred city traffic in the background, emotional and cinematic",
    },
    {
      label: "📦 Product Showcase",
      prompt: "Cinematic 360-degree rotation of a luxury perfume bottle on a reflective black surface, dramatic spotlight, smoke wisps curling around the base, ultra-detailed product photography style",
    },
    {
      label: "🌀 Motion Art",
      prompt: "Abstract fluid simulation of electric blue and gold ink dissolving in slow motion, swirling vortex patterns, dark background, macro lens, hypnotic and cinematic",
    },
  ],
};

// ─── Component ────────────────────────────────────────────────────────────────

const CreateAIContentClient: React.FC = () => {
  // ── Theme
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return localStorage.getItem('cac-theme') === 'dark';
  });

  useEffect(() => {
    const theme = darkMode ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("cac-theme", theme);
  }, [darkMode]);

  // ── Auth
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);
  const [loginSuccess, setLoginSuccess] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  // ── Active tab
  const [activeTab, setActiveTab] = useState<Tab>(() => {
    if (typeof window === 'undefined') return 'image';
    const params = new URLSearchParams(window.location.search);
    const tab = params.get('tab');
    if (tab === 'voice' || tab === 'image' || tab === 'video') return tab;
    return 'image';
  });

  // Pre-fill prompt + video settings from micro-tool page redirects
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const text = params.get('text');
    if (text) setPrompt(decodeURIComponent(text));
    const duration = params.get('duration');
    if (duration) setVideoDuration(Number(duration));
    const aspect = params.get('aspect');
    if (aspect) setVideoAspectRatio(aspect);
    const model = params.get('model');
    if (model) setSelectedVideoModel(model);
  }, []);

  // Restore img2img file from sessionStorage if coming from ai-image-generation
  useEffect(() => {
    try {
      const preview = sessionStorage.getItem('cac_img2img_preview');
      const name = sessionStorage.getItem('cac_img2img_name');
      const type = sessionStorage.getItem('cac_img2img_type');
      if (preview && name && type) {
        sessionStorage.removeItem('cac_img2img_preview');
        sessionStorage.removeItem('cac_img2img_name');
        sessionStorage.removeItem('cac_img2img_type');
        fetch(preview)
          .then(r => r.blob())
          .then(blob => {
            const file = new File([blob], name, { type });
            setInputImageFile(file);
            setInputImagePreview(preview);
            setImageGenMode('image');
          });
      }
    } catch {}
  }, []);

  // Restore video image from sessionStorage if coming from ai-video-generation
  useEffect(() => {
    try {
      const preview = sessionStorage.getItem('cac_video_img_preview');
      const name = sessionStorage.getItem('cac_video_img_name');
      const type = sessionStorage.getItem('cac_video_img_type');
      if (preview && name && type) {
        sessionStorage.removeItem('cac_video_img_preview');
        sessionStorage.removeItem('cac_video_img_name');
        sessionStorage.removeItem('cac_video_img_type');
        fetch(preview)
          .then(r => r.blob())
          .then(blob => {
            const file = new File([blob], name, { type });
            setVideoInputFile(file);
            setVideoInputPreview(preview);
            setVideoGenMode('image');
          });
      }
    } catch {}
  }, []);

  // ── Shared prompt
  const [prompt, setPrompt] = useState("");

  // ── Error
  const [error, setError] = useState<string | null>(null);

  // ─────────────────── VOICE STATE ────────────────────────────────────────
  const [voices, setVoices] = useState<Voice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState<Voice | null>(null);
  const [filterLanguage, setFilterLanguage] = useState("");
  const [filterGender, setFilterGender] = useState("");
  const [uniqueLanguages, setUniqueLanguages] = useState<string[]>([]);
  const [uniqueGenders, setUniqueGenders] = useState<string[]>([]);
  const [ttsUsage, setTtsUsage] = useState<TtsUsage | null>(null);
  const [isGeneratingVoice, setIsGeneratingVoice] = useState(false);
  const [generatedAudio, setGeneratedAudio] = useState<string | null>(null);
  const [playingDemo, setPlayingDemo] = useState<string | null>(null);
  const demoAudioRef = useRef<HTMLAudioElement | null>(null);
  const [voiceSpeed, setVoiceSpeed] = useState(1.0);
  const [selectedVoiceProvider, setSelectedVoiceProvider] = useState<"GOOGLE" | "OPENAI" | "AZURE">("GOOGLE");
  const [externalVoices, setExternalVoices] = useState<Voice[]>([]);

  // ─────────────────── IMAGE STATE ────────────────────────────────────────
  const [imageUsage, setImageUsage] = useState<ImageUsage | null>(null);
  const [selectedImageModel, setSelectedImageModel] = useState("STABILITY_AI_CORE");
  const [imageSize, setImageSize] = useState("square");
  const [imageQuality, setImageQuality] = useState("standard");
  const [imageStyle, setImageStyle] = useState("realistic");
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);
  const [generatedImages, setGeneratedImages] = useState<GeneratedImage[]>([]);
  const [currentImageJob, setCurrentImageJob] = useState<{
    id: number;
    status: string;
    imagePath?: string;
    prompt?: string;
    errorMessage?: string;
  } | null>(null);
  const imagePollingRef = useRef<NodeJS.Timeout | null>(null);
  const [imageGenMode, setImageGenMode] = useState<'text' | 'image'>('text');
  const [inputImageFile, setInputImageFile] = useState<File | null>(null);
  const [inputImagePreview, setInputImagePreview] = useState<string | null>(null);
  const inputImageRef = useRef<HTMLInputElement>(null);
  const [imageHistory, setImageHistory] = useState<GeneratedImage[]>([]);
  const [showImageHistory, setShowImageHistory] = useState(false);
  const [imageHistoryLoading, setImageHistoryLoading] = useState(false);

  // ─────────────────── VIDEO STATE ────────────────────────────────────────
  const [videoCredits, setVideoCredits] = useState<VideoCredits | null>(null);
  const [videoModels, setVideoModels] = useState<any[]>([]);
  const [selectedVideoModel, setSelectedVideoModel] = useState("wan2.5");
  const [videoDuration, setVideoDuration] = useState(5);
  const [videoAspectRatio, setVideoAspectRatio] = useState("16:9");
  const [videoResolution, setVideoResolution] = useState("480p");
  const [prevVideoModel, setPrevVideoModel] = useState("wan2.5");
  const [videoAudioEnabled, setVideoAudioEnabled] = useState(false);
  const [isGeneratingVideo, setIsGeneratingVideo] = useState(false);
  const [currentVideoJob, setCurrentVideoJob] = useState<VideoJob | null>(null);
  const videoPollingRef = useRef<NodeJS.Timeout | null>(null);
 const [showFreeVideoModal, setShowFreeVideoModal] = useState(false);
  const [videoFromImageUrl, setVideoFromImageUrl] = useState<string | null>(null);
  const videoFromImageRef = useRef<HTMLInputElement>(null);
  const [videoGenMode, setVideoGenMode] = useState<'text' | 'image'>('text');
  const [videoInputFile, setVideoInputFile] = useState<File | null>(null);
  const [videoInputPreview, setVideoInputPreview] = useState<string | null>(null);
  const videoInputRef = useRef<HTMLInputElement>(null);
  // Auto-set resolution when model changes
  useEffect(() => {
    const isWan = selectedVideoModel?.toLowerCase().includes('wan');
    const isGrok = selectedVideoModel?.toLowerCase().includes('grok');
    if (!isWan && !isGrok) {
      setVideoResolution("1080p");
    } else if (isWan) {
      setVideoResolution("480p");
    } else if (isGrok) {
      setVideoResolution("480p");
    }
  }, [selectedVideoModel]);

  const resultRef = useRef<HTMLDivElement>(null);

  const [demoImages, setDemoImages] = useState<string[]>([]);
  const [demoVideos, setDemoVideos] = useState<string[]>([]);
  // ─────────────────── AUTH ────────────────────────────────────────────────

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setIsPageLoading(false);
      return;
    }
    axios
      .get(`${API_BASE_URL}/auth/me`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        const parts = (res.data.name || "").trim().split(" ");
        setUserProfile({
          email: res.data.email || "",
          firstName: parts[0] || "",
          lastName: parts.slice(1).join(" "),
          picture: res.data.picture || null,
          googleAuth: res.data.googleAuth || false,
          role: res.data.role || "BASIC",
        });
        setIsLoggedIn(true);
      })
      .catch(() => {
        localStorage.removeItem("token");
      })
      .finally(() => setIsPageLoading(false));
  }, []);

  const handleLogin = async (email: string, password: string) => {
    setIsLoggingIn(true);
    setLoginError(null);
    try {
      const res = await axios.post(`${API_BASE_URL}/auth/login`, {
        email,
        password,
      });
      localStorage.setItem("token", res.data.token);
      const meRes = await axios.get(`${API_BASE_URL}/auth/me`, {
        headers: { Authorization: `Bearer ${res.data.token}` },
      });
      const parts = (meRes.data.name || "").trim().split(" ");
      setUserProfile({
        email: meRes.data.email,
        firstName: parts[0],
        lastName: parts.slice(1).join(" "),
        picture: meRes.data.picture || null,
        googleAuth: meRes.data.googleAuth || false,
        role: meRes.data.role || "BASIC",
      });
      setIsLoggedIn(true);
      setShowLoginModal(false);
    } catch (err: any) {
      setLoginError(
        err.response?.data?.message || "Login failed. Check credentials."
      );
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleGoogleLogin = useCallback(async (credentialResponse: any) => {
    setIsLoggingIn(true);
    setLoginError(null);
    try {
      const res = await axios.post(`${API_BASE_URL}/auth/google`, {
        token: credentialResponse.credential,
      });
      localStorage.setItem("token", res.data.token);
      setTimeout(async () => {
        const meRes = await axios.get(`${API_BASE_URL}/auth/me`, {
          headers: { Authorization: `Bearer ${res.data.token}` },
        });
        const parts = (meRes.data.name || "").trim().split(" ");
        setUserProfile({
          email: meRes.data.email,
          firstName: parts[0],
          lastName: parts.slice(1).join(" "),
          picture: meRes.data.picture || null,
          googleAuth: true,
          role: meRes.data.role || "BASIC",
        });
        setIsLoggedIn(true);
        setShowLoginModal(false);
        setIsLoggingIn(false);
      }, 1000);
    } catch (err: any) {
      setIsLoggingIn(false);
      setLoginError(err.response?.data?.message || "Google login failed.");
    }
  }, []);

  useEffect(() => {
    if (!showLoginModal) return;
    const init = () => {
      if (window.google?.accounts) {
        window.google.accounts.id.initialize({
          client_id:
            "397321320139-tpd310sq9j8rdngqd9kdmhgegco52b3g.apps.googleusercontent.com",
          callback: handleGoogleLogin,
        });
        const el = document.getElementById("cac-google-btn");
        if (el)
          window.google.accounts.id.renderButton(el, {
            theme: "outline",
            size: "large",
            width: 300,
          });
      } else setTimeout(init, 100);
    };
    init();
  }, [showLoginModal, handleGoogleLogin]);

  // ─────────────────── DATA FETCH ───────────────────────────────────────────

  useEffect(() => {
    // Fetch only metadata for filter dropdowns
    fetch(`${API_BASE_URL}/api/ai-voices/get-all-voices`)
      .then((r) => r.json())
      .then((data: Voice[]) => {
        const langs = [...new Set(data.map((v) => v.language))];
        const genders = [...new Set(data.map((v) => v.gender))];
        setUniqueLanguages(langs as string[]);
        setUniqueGenders(genders as string[]);
        // Also pre-populate voices so the list isn't empty on first load
        setVoices(data);
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (!isLoggedIn) return;
    const token = localStorage.getItem("token");
    const h = { Authorization: `Bearer ${token}` };

    // TTS usage
    fetch(`${API_BASE_URL}/api/sole-tts/usage`, { headers: h })
      .then((r) => r.json())
      .then(setTtsUsage)
      .catch(() => {});

    // Image usage
    fetch(`${API_BASE_URL}/api/sole-image-gen/usage`, { headers: h })
      .then((r) => r.json())
      .then(setImageUsage)
      .catch(() => {});

    // Image history
    setImageHistoryLoading(true);
    fetch(`${API_BASE_URL}/api/sole-image-gen/history`, { headers: h })
      .then((r) => r.json())
      .then(setImageHistory)
      .catch(() => {})
      .finally(() => setImageHistoryLoading(false));

    // Video models + credits
    Promise.all([
      axios.get(`${API_BASE_URL}/api/video-gen/models`, { headers: h }),
      axios.get(`${API_BASE_URL}/api/video-gen/credits`, { headers: h }),
    ])
      .then(([mRes, cRes]) => {
        setVideoModels(mRes.data.models || []);
        setVideoCredits(cRes.data);
        const wan = (mRes.data.models || []).find((m: any) =>
          m.id.toLowerCase().includes("wan")
        );
        if (wan) setSelectedVideoModel(wan.id);
      })
      .catch((err) => {
        if (err.response?.status === 402) {
          setVideoCredits({
            balance: 0,
            planType: "FREE",
            expiresAt: "N/A",
            creditCosts: [],
            freeVideoUsed: false,
          });
        }
      });
  }, [isLoggedIn]);

  useEffect(() => {
    if (selectedVoiceProvider !== "GOOGLE") {
      setVoices([]);
      return;
    }
    let url = `${API_BASE_URL}/api/ai-voices/get-all-voices`;
    if (filterLanguage && filterGender)
      url = `${API_BASE_URL}/api/ai-voices/voices-by-language-and-gender?language=${encodeURIComponent(filterLanguage)}&gender=${encodeURIComponent(filterGender)}`;
    else if (filterLanguage)
      url = `${API_BASE_URL}/api/ai-voices/voices-by-language?language=${encodeURIComponent(filterLanguage)}`;
    else if (filterGender)
      url = `${API_BASE_URL}/api/ai-voices/voices-by-gender?gender=${encodeURIComponent(filterGender)}`;
    const token = localStorage.getItem("token");
    const opts = token ? { headers: { Authorization: `Bearer ${token}` } } : undefined;
    fetch(url, opts)
      .then((r) => r.json())
      .then(setVoices)
      .catch(() => {});
  }, [filterLanguage, filterGender, selectedVoiceProvider]);  

  useEffect(() => {
    if (selectedVoiceProvider === "GOOGLE") return;
    const token = localStorage.getItem("token");
    fetch(
      `${API_BASE_URL}/api/ai-voices/external-voices?provider=${selectedVoiceProvider}`,
      token ? { headers: { Authorization: `Bearer ${token}` } } : undefined
    )
      .then((r) => r.json())
      .then(setExternalVoices)
      .catch(() => {});
  }, [selectedVoiceProvider]);

  // Cleanup
  useEffect(
    () => () => {
      if (imagePollingRef.current) clearInterval(imagePollingRef.current);
      if (videoPollingRef.current) clearInterval(videoPollingRef.current);
      if (demoAudioRef.current) demoAudioRef.current.pause();
    },
    []
  );

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/public/gallery/images`)
      .then(r => r.json())
      .then((paths: string[]) => setDemoImages(paths.map(p => `${CDN_URL}/${p}`)))
      .catch(() => {});
  }, []);
  
  useEffect(() => {
    fetch(`${API_BASE_URL}/api/public/gallery/videos`)
      .then(r => r.json())
      .then((paths: string[]) => setDemoVideos(paths.map(p => `${CDN_URL}/${p}`)))
      .catch(() => {});
  }, []);  

  // ─────────────────── VOICE ACTIONS ───────────────────────────────────────

  const handlePlayDemo = (voice: Voice) => {
    const voiceId = `${voice.voiceName}-${voice.voiceStyle || "default"}`;
    if (demoAudioRef.current) {
      demoAudioRef.current.pause();
      demoAudioRef.current.currentTime = 0;
    }
    if (playingDemo === voiceId) {
      setPlayingDemo(null);
      return;
    }
    let demoUrl: string;
    if (voice.provider === "AZURE") {
      demoUrl = `${CDN_URL}/AiVoicesDemo/Azure/${voice.gender.toUpperCase()}/${voice.humanName}.mp3`;
    } else {
      const genderFolder = voice.gender.toUpperCase();
      const languageFolder = voice.language
        .replace(/\s*\(.*?\)\s*/g, "")
        .trim()
        .replace(/\s+/g, "%20");
      const demoFileName = voice.voiceStyle
        ? `${voice.humanName?.split("-")[0] || voice.voiceName}-${voice.voiceStyle.charAt(0).toUpperCase() + voice.voiceStyle.slice(1)}.mp3`
        : `${voice.humanName || voice.voiceName}.mp3`;
      demoUrl = `${CDN_URL}/AiVoicesDemo/${languageFolder}/${genderFolder}/${demoFileName}`;
    }
    const audio = new Audio(demoUrl);
    audio.playbackRate = voiceSpeed;
    audio.play().catch(() => setPlayingDemo(null));
    audio.onended = () => setPlayingDemo(null);
    audio.onerror = () => setPlayingDemo(null);
    demoAudioRef.current = audio;
    setPlayingDemo(voiceId);
  };

  const handleGenerateVoice = async () => {
    if (!isLoggedIn) {
      setShowLoginModal(true);
      return;
    }
    if (!prompt.trim() || !selectedVoice) {
      setError("Please enter text and select a voice.");
      return;
    }
    const maxChars = ttsUsage?.maxCharsPerRequest || 80;
    if (prompt.length > maxChars) {
      setError(`Text exceeds ${maxChars} characters limit.`);
      return;
    }
    if (ttsUsage) {
        const remaining = (ttsUsage.voiceCharsLimit ?? 0) - (ttsUsage.voiceCharsUsed ?? 0);
        if (prompt.length > remaining) {
          setError(`Only ${remaining} voice characters remaining this month.`);
          return;
        }
      }
    setIsGeneratingVoice(true);
    setError(null);
    setGeneratedAudio(null);
    try {
      const isExternal = selectedVoiceProvider !== "GOOGLE";
      const body = isExternal
        ? {
            text: prompt,
            voiceId: selectedVoice.voiceId || selectedVoice.voiceName,
            provider: selectedVoiceProvider,
            speed: voiceSpeed,
          }
        : {
            text: prompt,
            voiceName: selectedVoice.voiceName,
            languageCode: selectedVoice.languageCode,
            speed: voiceSpeed,
          };
      const endpoint = isExternal
        ? `${API_BASE_URL}/api/sole-tts/generate-external`
        : `${API_BASE_URL}/api/sole-tts/generate`;
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error(await res.text());
      const data = await res.json();
      setGeneratedAudio(`${CDN_URL}/${data.audioPath}`);
      window.dispatchEvent(new Event('creditsUpdated'));
      setTimeout(() => {
        resultRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 150);      
      // Refresh usage
      fetch(`${API_BASE_URL}/api/sole-tts/usage`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
        .then((r) => r.json())
        .then(setTtsUsage)
        .catch(() => {});
    } catch (err: any) {
      setError(err.message || "Voice generation failed.");
    } finally {
      setIsGeneratingVoice(false);
    }
  };

  // ─────────────────── IMAGE ACTIONS ───────────────────────────────────────

  const startImagePolling = useCallback((jobId: number) => {
    if (imagePollingRef.current) clearInterval(imagePollingRef.current);
    imagePollingRef.current = setInterval(async () => {
      try {
        const res = await fetch(
          `${API_BASE_URL}/api/sole-image-gen/status/${jobId}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (!res.ok) return;
        const job = await res.json();
        setCurrentImageJob(job);
        if (job.status === "COMPLETED" || job.status === "FAILED") {
          clearInterval(imagePollingRef.current!);
          imagePollingRef.current = null;
          if (job.status === "COMPLETED" && job.imagePath) {
           setGeneratedImages([
              {
                id: job.id,
                imagePath: job.imagePath,
                prompt: job.prompt || "",
                resolution: job.resolution || "1024x1024",
                createdAt: job.createdAt,
              },
            ]);
            window.dispatchEvent(new Event('creditsUpdated'));
            setTimeout(() => {
              resultRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
            }, 150);            
            // Refresh usage
            const tok = localStorage.getItem("token");
            fetch(`${API_BASE_URL}/api/sole-image-gen/usage`, {
              headers: { Authorization: `Bearer ${tok}` },
            }).then((r) => r.json()).then(setImageUsage).catch(() => {});
            fetch(`${API_BASE_URL}/api/sole-image-gen/history`, {
              headers: { Authorization: `Bearer ${tok}` },
            }).then((r) => r.json()).then(setImageHistory).catch(() => {});
          }
          setIsGeneratingImage(false);
        }
      } catch {}
    }, 3000);
  }, []);

  const handleGenerateImage = async () => {
    if (!isLoggedIn) {
      setShowLoginModal(true);
      return;
    }
    if (!prompt.trim()) {
      setError("Please describe your image.");
      return;
    }
    if (imageGenMode === 'image' && !inputImageFile) {
      setError("Please upload a reference image for image-to-image generation.");
      return;
    }
    const modelKey = selectedImageModel.toUpperCase().replace(/-/g, "_");
    const cost = getImageCreditCost(modelKey, imageSize, imageQuality);
    if (imageUsage && imageUsage.balance < cost) {
      setError(`Not enough credits. Need ${cost}, have ${imageUsage.balance}.`);
      return;
    }
    setIsGeneratingImage(true);
    setError(null);
    setGeneratedImages([]);
    setCurrentImageJob(null);
    try {
      let enhancedPrompt = prompt;
      if (imageStyle !== "realistic")
        enhancedPrompt = `${prompt}, ${imageStyle} style`;

      let res: Response;

      if (imageGenMode === 'image' && inputImageFile) {
        const formData = new FormData();
        formData.append('prompt', enhancedPrompt);
        formData.append('negativePrompt', 'blurry, low quality, distorted');
        formData.append('model', selectedImageModel);
        formData.append('size', imageSize);
        formData.append('quality', imageQuality);
        formData.append('resolution', '2k');
        formData.append('image', inputImageFile);
        res = await fetch(`${API_BASE_URL}/api/sole-image-gen/generate-async`, {
          method: 'POST',
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
          body: formData,
        });
      } else {
        res = await fetch(`${API_BASE_URL}/api/sole-image-gen/generate-async`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({
            prompt: enhancedPrompt,
            negativePrompt: "blurry, low quality, distorted",
            model: selectedImageModel,
            size: imageSize,
            quality: imageQuality,
            resolution: "2k",
          }),
        });
      }

      if (!res.ok) throw new Error(await res.text());
      const { jobId } = await res.json();
      setCurrentImageJob({ id: jobId, status: "PENDING" });
      startImagePolling(jobId);
    } catch (err: any) {
      setError(err.message || "Image generation failed.");
      setIsGeneratingImage(false);
    }
  };

  // ─────────────────── VIDEO ACTIONS ───────────────────────────────────────

  const startVideoPolling = useCallback((falRequestId: string) => {
    if (videoPollingRef.current) clearInterval(videoPollingRef.current);
    videoPollingRef.current = setInterval(async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(
          `${API_BASE_URL}/api/video-gen/status/${falRequestId}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        const job: VideoJob = res.data;
        setCurrentVideoJob(job);
        if (job.status === "COMPLETED" || job.status === "FAILED") {
          clearInterval(videoPollingRef.current!);
          videoPollingRef.current = null;
        setIsGeneratingVideo(false);
          setVideoFromImageUrl(null);
          setVideoInputFile(null);
          setVideoInputPreview(null);
          setVideoGenMode('text');
          window.dispatchEvent(new Event('creditsUpdated'));
          // Refresh credits
          axios
            .get(`${API_BASE_URL}/api/video-gen/credits`, {
              headers: { Authorization: `Bearer ${token}` },
            })
            .then((r) => setVideoCredits(r.data))
            .catch(() => {});
            setTimeout(() => {
              resultRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
            }, 150);            
        }
      } catch {}
    }, 5000);
  }, []);

  const handleGenerateVideo = async () => {
    if (!isLoggedIn) {
      setShowLoginModal(true);
      return;
    }
    if (!prompt.trim()) {
      setError("Please describe your video.");
      return;
    }
    // Validate image-to-video requirements
    if (videoGenMode === 'image' && !videoInputFile && !videoFromImageUrl) {
      setError("Please upload a reference image for image-to-video generation.");
      return;
    }
    setIsGeneratingVideo(true);
    setError(null);
    setCurrentVideoJob(null);
    try {
      const token = localStorage.getItem("token");

      // Image-to-video: either direct upload or from generated image
      const hasImageSource = videoGenMode === 'image' && videoInputFile || videoFromImageUrl;
      if (hasImageSource) {
        let imgBlob: Blob;
        let fileName: string;
        if (videoFromImageUrl) {
          imgBlob = await fetch(videoFromImageUrl).then(r => r.blob());
          fileName = 'reference.jpg';
        } else {
          imgBlob = videoInputFile!;
          fileName = videoInputFile!.name;
        }
        const formData = new FormData();
        formData.append('model', selectedVideoModel);
        formData.append('prompt', prompt);
        formData.append('durationSeconds', String(videoDuration));
        formData.append('audioEnabled', String(videoAudioEnabled));
        formData.append('aspectRatio', videoAspectRatio);
        formData.append('resolution', videoResolution);
        formData.append('image', imgBlob, fileName);
        const res = await axios.post(
          `${API_BASE_URL}/api/video-gen/image-to-video`,
          formData,
          { headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'multipart/form-data' } }
        );
        const job: VideoJob = res.data;
        setCurrentVideoJob(job);
        startVideoPolling(job.falRequestId);
        return;
      }

      const res = await axios.post(
        `${API_BASE_URL}/api/video-gen/text-to-video`,
        {
          model: selectedVideoModel,
          prompt,
          durationSeconds: videoDuration,
          audioEnabled: videoAudioEnabled,
          aspectRatio: videoAspectRatio,
          resolution: videoResolution,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      const job: VideoJob = res.data;
      setCurrentVideoJob(job);
      startVideoPolling(job.falRequestId);
    } catch (err: any) {
      if (
        err.response?.data === "FREE_VIDEO_LIMIT_REACHED" ||
        err.response?.status === 402 ||
        err.response?.status === 403 ||
        (typeof err.response?.data === 'string' && err.response.data.includes("FREE LIMIT REACHED, PLEASE UPGRADE."))
      ) {
        setShowFreeVideoModal(true);
      } else {
        setError(err.response?.data || err.message || "Video generation failed.");
      }
      setIsGeneratingVideo(false);
    }
  };

  // ─────────────────── DOWNLOAD HELPERS ────────────────────────────────────

  const handleDownloadAudio = async () => {
    if (!generatedAudio) return;
    const res = await fetch(generatedAudio);
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `ai-voice-${Date.now()}.mp3`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleDownloadImage = async (imageUrl: string, id: number) => {
    const res = await fetch(imageUrl);
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `ai-image-${id}.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // ─────────────────── COMPUTED ─────────────────────────────────────────────

  const isGenerating = isGeneratingVoice || isGeneratingImage || isGeneratingVideo;

  const activeVoices =
    selectedVoiceProvider === "GOOGLE" ? voices : externalVoices;

  const imageCreditCost = getImageCreditCost(
    selectedImageModel.toUpperCase().replace(/-/g, "_"),
    imageSize,
    imageQuality
  );

  const imageModelCfg =
    IMAGE_MODEL_CONFIG[selectedImageModel.toUpperCase().replace(/-/g, "_")];

  const availableImageModels = useMemo(() => {
    if (isLoggedIn && imageUsage?.availableModels?.length)
      return imageUsage.availableModels.map((m) => ({
        id: m.id,
        displayName: m.displayName,
      }));
    return [
      { id: "STABILITY_AI_CORE", displayName: "Stability Core" },
      { id: "GPT_IMAGE_1_MINI", displayName: "GPT Mini" },
      { id: "IMAGEN_4_FAST", displayName: "Imagen 4 Fast" },
      { id: "FLUX_1_1_PRO", displayName: "FLUX 1.1 Pro" },
      { id: "IMAGEN_4_STANDARD", displayName: "Imagen 4" },
      { id: "GPT_IMAGE_1_MEDIUM", displayName: "GPT Medium" },
      { id: "GROK_AURORA", displayName: "Grok Aurora ⚡" },
    ];
  }, [isLoggedIn, imageUsage]);

  // ─────────────────── RENDER ───────────────────────────────────────────────

  if (isPageLoading) {
    return (
      <div className="cac-loading">
        <div className="cac-spinner" />
      </div>
    );
  }

  return (
    <>
    <div className="cac-page" data-theme={darkMode ? "dark" : "light"}>

      {/* ── Hero ── */}
      <section className="cac-hero">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="cac-hero-inner"
        >
          <h1 className="cac-hero-title">
            Create AI Content{" "}
            <span className="cac-gradient-text">in Seconds</span>
          </h1>
          <p className="cac-hero-sub">
            Voice · Image · Video — one page, zero friction.
          </p>
        </motion.div>
      </section>

      {/* ── Main Tool ── */}
      <main className="cac-main">
        {/* ─ Tabs ─ */}
        <div className="cac-tabs">
          {(["voice", "image", "video"] as Tab[]).map((t) => (
            <button
              key={t}
              className={`cac-tab ${activeTab === t ? "active" : ""}`}
              onClick={() => {
                setActiveTab(t);
                setPrompt("");
                setError(null);
                setImageGenMode('text');
                setInputImageFile(null);
                setInputImagePreview(null);
                if (t !== 'video') {
                  setVideoFromImageUrl(null);
                  setVideoGenMode('text');
                  setVideoInputFile(null);
                  setVideoInputPreview(null);
                }
              }}
            >
              {t === "voice" && "🎙️ Voice"}
              {t === "image" && "🖼️ Image"}
              {t === "video" && "🎬 Video"}
            </button>
          ))}
        </div>

        {/* ─ Prompt + Voice side-by-side for voice tab, full-width for others ─ */}
        {activeTab === "voice" ? (
          <div className="cac-voice-layout">
            {/* LEFT: prompt card */}
            <div className="cac-voice-layout-left">
              <div className="cac-prompt-card">
                <textarea
                  className="cac-textarea"
                  placeholder="Type your script here…"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  disabled={isGenerating}
                  maxLength={2000}
                />
                <div className="cac-options-row">
                  {/* Provider toggle */}
                  <div className="cac-toggle-group">
                    {(["GOOGLE", "OPENAI", "AZURE"] as const).map((p) => (
                      <button
                        key={p}
                        className={`cac-toggle-btn ${selectedVoiceProvider === p ? "active" : ""}`}
                        onClick={() => {
                          if ((p === "OPENAI" || p === "AZURE") && !ttsUsage?.isPaid) {
                            window.location.href = "/pricing";
                            return;
                          }
                          setSelectedVoiceProvider(p);
                          setSelectedVoice(null);
                        }}
                        style={{ display: 'flex', alignItems: 'center', gap: 5 }}
                      >
                        <ModelLogo modelKey={p} size={13} />
                        {p === "GOOGLE" && "Google"}
                        {p === "OPENAI" && <>OpenAI{!ttsUsage?.isPaid && " 👑"}</>}
                        {p === "AZURE"  && <>Azure{!ttsUsage?.isPaid  && " 👑"}</>}
                      </button>
                    ))}
                  </div>
                  {/* Speed */}
                  {isLoggedIn && (
                    <select
                      className="cac-select"
                      value={voiceSpeed}
                      onChange={(e) => {
                        const val = parseFloat(e.target.value);
                        if (!ttsUsage?.isPaid && val > 2.0) {
                          window.location.href = "/pricing";
                          return;
                        }
                        setVoiceSpeed(val);
                      }}
                    >
                      {[0.5, 1.0, 1.25, 1.5, 1.75, 2.0].map((s) => (
                        <option key={s} value={s}>⚡ {s}x</option>
                      ))}
                      {[3.0, 4.0].map((s) => (
                        <option key={s} value={s} disabled={!ttsUsage?.isPaid}>
                          ⚡ {s}x{!ttsUsage?.isPaid ? " 👑" : ""}
                        </option>
                      ))}
                    </select>
                  )}
                  {/* Credits */}
                  <span className="cac-credit-pill">
                    {isLoggedIn
                      ? `🎙️ ${((ttsUsage?.voiceCharsLimit ?? 0) - (ttsUsage?.voiceCharsUsed ?? 0)).toLocaleString()} chars left`
                      : "🎙️ 600 chars free"}
                  </span>
                  {selectedVoice && (
                    <span className="cac-selected-voice-pill">
                      {selectedVoice.humanName || selectedVoice.voiceName} ✓
                    </span>
                  )}
                </div>
                <AnimatePresence>
                  {error && (
                    <motion.div
                      className="cac-error"
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                    >
                      ⚠️ {error}
                    </motion.div>
                  )}
                </AnimatePresence>
                <div className="cac-cta-row">
                  <CustomDropdown
                    className="cac-chip-variant"
                    placeholder="💡 Try a prompt…"
                    disabled={isGenerating}
                    value=""
                    options={PROMPT_SUGGESTIONS.voice.map(s => ({
                      value: s.label,
                      label: `${s.label} — ${s.prompt.slice(0, 42)}…`,
                    }))}
                    onChange={(val) => {
                      const found = PROMPT_SUGGESTIONS.voice.find(s => s.label === val);
                      if (found) setPrompt(found.prompt);
                    }}
                  />
                  <div style={{ flex: 1 }} />
                  {!isLoggedIn ? (
                    <button className="cac-generate-btn" onClick={() => setShowLoginModal(true)}>
                      🔒 Sign Up Free & Generate
                    </button>
                  ) : (
                    <button
                      className="cac-generate-btn"
                      onClick={handleGenerateVoice}
                      disabled={isGeneratingVoice || !prompt.trim() || !selectedVoice}
                    >
                      {isGeneratingVoice ? (
                        <><span className="cac-btn-spinner" />Generating…</>
                      ) : "🎙️ Generate Voice"}
                    </button>
                  )}
                  {isLoggedIn && (
                    <a href="/pricing" className="cac-upgrade-link">Get More Credits →</a>
                  )}
                </div>
              </div>
              {/* Voice output below prompt on left side */}
              {generatedAudio && (
                <motion.div
                  ref={resultRef}
                  className="cac-result-card"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="cac-result-header">
                    <span>🎙️ Your AI Voice</span>
                    <a href="/pricing" className="cac-upgrade-badge">✨ Upgrade for more →</a>
                  </div>
                  <audio controls src={generatedAudio} className="cac-audio-player" />
                  <div className="cac-result-actions">
                    <button className="cac-action-btn primary" onClick={handleDownloadAudio}>
                      📥 Download MP3
                    </button>
                    <button
                      className="cac-action-btn secondary"
                      onClick={() => { setGeneratedAudio(null); setPrompt(""); }}
                    >
                      🔄 New Voice
                    </button>
                  </div>
                </motion.div>
              )}
            </div>

            {/* RIGHT: voice panel */}
            <div className="cac-voice-layout-right">
              <div className="cac-voice-panel">
                <div className="cac-voice-panel-header">
                  <span className="cac-panel-label">Select Voice</span>
                  {selectedVoice && (
                    <span className="cac-selected-voice-pill">
                      {selectedVoice.humanName || selectedVoice.voiceName} ✓
                    </span>
                  )}
                </div>
                {/* Filters — Google only */}
                {selectedVoiceProvider === "GOOGLE" && (
                  <div style={{ display: "flex", gap: 6, padding: "8px 12px", borderBottom: "1px solid var(--cac-border-soft)" }}>
                    <CustomDropdown
                      style={{ flex: 1, minWidth: 0 }}
                      placeholder="🌍 All Languages"
                      value={filterLanguage}
                      options={[
                        { value: "", label: "🌍 All Languages" },
                        ...uniqueLanguages.map(l => ({ value: l, label: l })),
                      ]}
                      onChange={setFilterLanguage}
                      maxHeight={200}
                    />
                    <CustomDropdown
                      style={{ flex: 1, minWidth: 0 }}
                      placeholder="👤 All Genders"
                      value={filterGender}
                      options={[
                        { value: "", label: "👤 All Genders" },
                        ...uniqueGenders.map(g => ({ value: g, label: g })),
                      ]}
                      onChange={setFilterGender}
                      maxHeight={160}
                    />
                  </div>
                )}
                <div className="cac-voice-list">
                  {activeVoices.length === 0 ? (
                    <p className="cac-empty">Loading voices…</p>
                  ) : (
                    activeVoices.map((v) => {
                      const vid = `${v.voiceName}-${v.voiceStyle || "default"}`;
                      const isSelected = selectedVoiceProvider === "GOOGLE"
                        ? selectedVoice?.voiceName === v.voiceName &&
                          selectedVoice?.voiceStyle === v.voiceStyle
                        : selectedVoice?.voiceId === v.voiceId &&
                          selectedVoice?.voiceId !== undefined;
                      return (
                        <div
                          key={vid}
                          className={`cac-voice-item ${isSelected ? "selected" : ""}`}
                          onClick={() => setSelectedVoice(v)}
                        >
                          {v.profileUrl ? (
                            <img src={v.profileUrl} alt="" className="cac-voice-avatar" />
                          ) : (
                            <div className="cac-voice-avatar-fallback">
                              {v.gender === "Female" ? "👩" : "👨"}
                            </div>
                          )}
                          <div className="cac-voice-info">
                            <span className="cac-voice-name">
                              {v.humanName || v.voiceName}
                              {v.voiceStyle && (
                                <span className="cac-voice-style-badge">{v.voiceStyle}</span>
                              )}
                            </span>
                            <span className="cac-voice-meta">{v.language} · {v.gender}</span>
                          </div>
                          <button
                            className="cac-demo-btn"
                            onClick={(e) => { e.stopPropagation(); handlePlayDemo(v); }}
                          >
                            {playingDemo === vid ? "⏸️" : "▶️"}
                          </button>
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Image / Video tab — full width prompt card */
         <div className="cac-prompt-card">

            {/* ── Image gen mode toggle ── */}
            {activeTab === "image" && (
              <div style={{ display: 'flex', gap: 2, padding: '10px 12px 0', borderBottom: '1px solid rgba(99,85,220,0.08)' }}>
                {[
                  { value: 'text', label: '✍️ Text to Image' },
                  { value: 'image', label: '🖼️ Image to Image', disabled: !IMAGE_MODEL_CONFIG[selectedImageModel.toUpperCase().replace(/-/g, '_')]?.supportsImg2Img },
                ].map(m => (
                  <button key={m.value}
                    onClick={() => { if (!m.disabled) { setImageGenMode(m.value as 'text' | 'image'); setInputImageFile(null); setInputImagePreview(null); } }}
                    disabled={!!m.disabled}
                    style={{
                      padding: '5px 14px', borderRadius: 8, border: 'none',
                      cursor: m.disabled ? 'not-allowed' : 'pointer',
                      fontFamily: 'inherit', fontSize: 11.5, fontWeight: 700,
                      background: imageGenMode === m.value ? 'linear-gradient(135deg, #6355dc, #8b5cf6)' : 'transparent',
                      color: imageGenMode === m.value ? '#fff' : m.disabled ? 'var(--cac-muted)' : 'var(--cac-accent)',
                      transition: 'all 0.15s',
                    }}
                  >{m.label}</button>
                ))}
              </div>
            )}

            {/* ── Image upload area for img2img ── */}
            {activeTab === "image" && imageGenMode === 'image' && (
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

            <textarea
              className="cac-textarea"
              placeholder={
                activeTab === "image"
                  ? imageGenMode === 'image' ? "Describe how to transform your image…" : "Describe your image…"
                  : "Describe your video…"
              }
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              disabled={isGenerating}
              maxLength={2000}
            />

            {/* ── Image options ── */}
            {activeTab === "image" && (
              <div className="cac-options-row">
                <select className="cac-select" value={imageStyle} onChange={(e) => setImageStyle(e.target.value)}>
                  {IMAGE_STYLE_PRESETS.map((s) => (
                    <option key={s.value} value={s.value}>{s.icon} {s.label}</option>
                  ))}
                </select>
                <CustomDropdown
                  value={selectedImageModel}
                  onChange={(val) => { setSelectedImageModel(val); setImageSize("square"); setImageQuality("standard"); }}
                  options={availableImageModels.map((m) => ({
                    value: m.id,
                    label: m.displayName,
                    logo: MODEL_LOGOS[m.id.toUpperCase().replace(/-/g, '_')],
                  }))}
                  style={{ minWidth: 140 }}
                />
                {imageModelCfg && imageModelCfg.sizes.length > 1 && (
                  <select className="cac-select" value={imageSize} onChange={(e) => setImageSize(e.target.value)}>
                    {imageModelCfg.sizes.map((s) => (
                      <option key={s.value} value={s.value}>{s.icon} {s.label}</option>
                    ))}
                  </select>
                )}
                {imageModelCfg && imageModelCfg.qualities.length > 1 && (
                  <select className="cac-select" value={imageQuality} onChange={(e) => setImageQuality(e.target.value)}>
                    {imageModelCfg.qualities.map((q) => (
                      <option key={q.value} value={q.value}>{q.label}</option>
                    ))}
                  </select>
                )}
                <span className="cac-credit-pill">
                  ⚡ {isLoggedIn ? imageUsage?.balance ?? "..." : 50} cr · {imageCreditCost}cr/img
                </span>
              </div>
            )}

            {/* ── Video gen mode toggle ── */}
            {activeTab === "video" && (
              <div style={{ display: 'flex', gap: 2, padding: '10px 12px 0', borderBottom: '1px solid rgba(99,85,220,0.08)' }}>
                {[
                  { value: 'text', label: '✍️ Text to Video' },
                  { value: 'image', label: '🖼️ Image to Video' },
                ].map(m => (
                  <button key={m.value}
                    onClick={() => { setVideoGenMode(m.value as 'text' | 'image'); setVideoInputFile(null); setVideoInputPreview(null); setVideoFromImageUrl(null); }}
                    style={{
                      padding: '5px 14px', borderRadius: 8, border: 'none',
                      cursor: 'pointer', fontFamily: 'inherit', fontSize: 11.5, fontWeight: 700,
                      background: videoGenMode === m.value ? 'linear-gradient(135deg, #6355dc, #8b5cf6)' : 'transparent',
                      color: videoGenMode === m.value ? '#fff' : 'var(--cac-accent)',
                      transition: 'all 0.15s',
                    }}
                  >{m.label}</button>
                ))}
              </div>
            )}

            {/* ── Video image upload ── */}
            {activeTab === "video" && videoGenMode === 'image' && !videoFromImageUrl && (
              <div style={{ padding: '10px 12px 0' }}>
                {!videoInputPreview ? (
                  <div
                    onClick={() => videoInputRef.current?.click()}
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
                    <p style={{ fontSize: 11, color: '#aaa', margin: '2px 0 0' }}>PNG, JPG — used as the starting frame</p>
                    <input ref={videoInputRef} type="file" accept="image/*" style={{ display: 'none' }}
                      onChange={e => {
                        const f = e.target.files?.[0];
                        if (f) { setVideoInputFile(f); setVideoInputPreview(URL.createObjectURL(f)); }
                      }} />
                  </div>
                ) : (
                  <div style={{ position: 'relative', borderRadius: 12, overflow: 'hidden', maxHeight: 120, display: 'flex', alignItems: 'center', background: '#f5f5ff' }}>
                    <img src={videoInputPreview} alt="Reference" style={{ maxHeight: 120, maxWidth: '100%', objectFit: 'contain', display: 'block', margin: '0 auto' }} />
                    <button onClick={() => { setVideoInputFile(null); setVideoInputPreview(null); }}
                      style={{ position: 'absolute', top: 6, right: 6, background: 'rgba(0,0,0,0.6)', border: 'none', color: '#fff', borderRadius: '50%', width: 24, height: 24, cursor: 'pointer', fontSize: 11, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✕</button>
                  </div>
                )}
              </div>
            )}

            {/* ── Video from image banner (from generated image) ── */}
            {activeTab === "video" && videoFromImageUrl && (
              <div style={{
                display: 'flex', alignItems: 'center', gap: 12, padding: '10px 14px',
                background: 'linear-gradient(135deg, rgba(124,58,237,0.08), rgba(219,39,119,0.06))',
                border: '1.5px solid rgba(124,58,237,0.25)', borderRadius: 12, margin: '0 0 8px',
              }}>
                <img src={videoFromImageUrl} alt="Reference" style={{ width: 48, height: 48, borderRadius: 8, objectFit: 'cover', flexShrink: 0 }} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: '#7c3aed' }}>🎬 Animating your image</div>
                  <div style={{ fontSize: 11, color: 'var(--cac-text-2)', marginTop: 2 }}>This image will be used as the video reference. Add a prompt to guide the motion.</div>
                </div>
                <button
                  onClick={() => setVideoFromImageUrl(null)}
                  style={{ background: 'none', border: 'none', color: 'var(--cac-muted)', cursor: 'pointer', fontSize: 16, flexShrink: 0, padding: 4 }}
                  title="Remove reference image"
                >✕</button>
              </div>
            )}

            {/* ── Video options ── */}
            {activeTab === "video" && (
              <div className="cac-options-row">
                <CustomDropdown
                  value={selectedVideoModel}
                  onChange={(val) => setSelectedVideoModel(val)}
                  options={(isLoggedIn && videoModels.length > 0
                    ? videoModels
                    : STATIC_VIDEO_MODELS.map((m) => ({
                        id: m.id, displayName: m.name,
                        creditCosts: [{ duration: 5, audio: false, credits: m.cr }],
                      }))
                  ).map((m: any) => {
                    const cost = calcVideoCredits(m.id, videoDuration, videoAudioEnabled, videoResolution);
                  return {
                      value: m.id,
                      label: `${m.displayName}${cost != null ? ` · ${cost}cr` : ''}`,
                      logo: MODEL_LOGOS[m.id] ?? undefined,
                    };
                  })}
                  style={{ flex: "1 1 auto", minWidth: 130, maxWidth: 200 }}
                />
                {/* ── Resolution selector (only for Wan 2.5 and Grok) ── */}
                {(() => {
                  const isWan  = selectedVideoModel?.toLowerCase().includes('wan');
                  const isGrok = selectedVideoModel?.toLowerCase().includes('grok');
                  const resOptions = isWan ? VIDEO_RESOLUTION_OPTIONS.wan : isGrok ? VIDEO_RESOLUTION_OPTIONS.grok : null;
                  if (!resOptions) return null;
                  return (
                    <div className="cac-toggle-group">
                      {resOptions.map((r) => (
                        <button
                          key={r.value}
                          className={`cac-toggle-btn ${videoResolution === r.value ? "active" : ""}`}
                          onClick={() => setVideoResolution(r.value)}
                          title={`${r.label} — ${calcVideoCredits(selectedVideoModel, videoDuration, videoAudioEnabled, r.value)}cr`}
                        >
                          {r.icon} {r.label}
                        </button>
                      ))}
                    </div>
                  );
                })()}

                {/* ── Audio toggle ── */}
                {(() => {
                  const modelData = (isLoggedIn && videoModels.length > 0 ? videoModels : [])
                    .find((m: any) => m.id === selectedVideoModel);
                  const isGrok = selectedVideoModel?.toLowerCase().includes('grok');
                  const supportsAudio = modelData?.supportsAudio ?? true;

                  if (isGrok && supportsAudio) {
                    return (
                      <span title="Audio always included with Grok Imagine" style={{
                        display: 'flex', alignItems: 'center', gap: 4,
                        padding: '5px 9px', borderRadius: 8, flexShrink: 0,
                        background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)',
                        fontSize: 11, color: 'var(--cac-green)', fontFamily: 'inherit', fontWeight: 600,
                      }}>🎵 Audio ✓</span>
                    );
                  }
                  if (!isGrok && supportsAudio) {
                    return (
                      <label style={{ display: 'flex', alignItems: 'center', gap: 5, cursor: 'pointer', flexShrink: 0 }}
                        title="AI-generated audio (costs more credits)">
                        <input
                          type="checkbox"
                          checked={videoAudioEnabled}
                          onChange={(e) => setVideoAudioEnabled(e.target.checked)}
                          style={{ accentColor: 'var(--cac-accent)', width: 14, height: 14 }}
                        />
                        <span style={{ fontSize: 11, color: 'var(--cac-text-2)', fontWeight: 600, whiteSpace: 'nowrap' }}>
                          🎵 Audio
                        </span>
                      </label>
                    );
                  }
                  return null;
                })()}                 
                <div className="cac-toggle-group">
                  {VIDEO_DURATION_OPTIONS.map((d) => (
                    <button
                      key={d.value}
                      className={`cac-toggle-btn ${videoDuration === d.value ? "active" : ""}`}
                      onClick={() => setVideoDuration(d.value)}
                    >{d.label}</button>
                  ))}
                </div>
                <select className="cac-select" value={videoAspectRatio} onChange={(e) => setVideoAspectRatio(e.target.value)}>
                  {VIDEO_ASPECT_RATIOS.map((ar) => (
                    <option key={ar.value} value={ar.value}>{ar.icon} {ar.label}</option>
                  ))}
                </select>               
                <span className="cac-credit-pill">
                  ⚡ {isLoggedIn ? videoCredits?.balance ?? "..." : 50} cr · {calcVideoCredits(selectedVideoModel, videoDuration, videoAudioEnabled, videoResolution)}cr/vid
                </span>
              </div>
            )}

            <AnimatePresence>
              {error && (
                <motion.div className="cac-error" initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                  ⚠️ {error}
                </motion.div>
              )}
            </AnimatePresence>

            <div className="cac-cta-row">
              <CustomDropdown
                className="cac-chip-variant"
                placeholder="💡 Try a prompt…"
                disabled={isGenerating}
                value=""
                options={PROMPT_SUGGESTIONS[activeTab].map(s => ({
                  value: s.label,
                  label: `${s.label} — ${s.prompt.slice(0, 42)}…`,
                }))}
                onChange={(val) => {
                  const found = PROMPT_SUGGESTIONS[activeTab].find(s => s.label === val);
                  if (found) setPrompt(found.prompt);
                }}
              />
              <div style={{ flex: 1 }} />
              {!isLoggedIn ? (
                <button className="cac-generate-btn" onClick={() => setShowLoginModal(true)}>
                  🔒 Sign Up Free & Generate
                </button>
              ) : activeTab === "image" ? (
                <button className="cac-generate-btn" onClick={handleGenerateImage}
                  disabled={isGeneratingImage || !prompt.trim() || (imageGenMode === 'image' && !inputImageFile)}>
                  {isGeneratingImage ? (<><span className="cac-btn-spinner" />Generating…</>) : "🖼️ Generate Image"}
                </button>
              ) : activeTab === "video" && isLoggedIn && (!videoCredits || videoCredits?.planType === "FREE") ? (
                <button className="cac-generate-btn" onClick={() => setShowFreeVideoModal(true)}>
                  🎬 Generate Video
                </button>
              ) : (
                <button className="cac-generate-btn" onClick={handleGenerateVideo}
                  disabled={
                    isGeneratingVideo ||
                    !prompt.trim() ||
                    (videoGenMode === 'image' && !videoInputFile && !videoFromImageUrl) ||
                    (!!currentVideoJob && (currentVideoJob.status === "PENDING" || currentVideoJob.status === "PROCESSING"))
                  }>
                  {isGeneratingVideo || (currentVideoJob && (currentVideoJob.status === "PENDING" || currentVideoJob.status === "PROCESSING"))
                    ? (<><span className="cac-btn-spinner" />Generating…</>) : "🎬 Generate Video"}
                </button>
              )}
              {isLoggedIn && <a href="/pricing" className="cac-upgrade-link">Get More Credits →</a>}
            </div>
          </div>
        )}        

        {/* ── Image Job Status ── */}
        {activeTab === "image" &&
          currentImageJob &&
          (currentImageJob.status === "PENDING" ||
            currentImageJob.status === "PROCESSING") && (
            <div className="cac-job-card">
              <div className="cac-job-spinner" />
              <div>
                <strong>
                  {currentImageJob.status === "PENDING"
                    ? "Queued — starting soon…"
                    : "Generating your image…"}
                </strong>
                <p>Takes 10–30 sec. You can safely stay on this tab.</p>
              </div>
            </div>
          )}

        {activeTab === "image" && currentImageJob?.status === "FAILED" && (
          <div className="cac-error-card">
            ⚠️ Generation failed.{" "}
            {currentImageJob.errorMessage || "Credits refunded."}
            <button onClick={() => setCurrentImageJob(null)}>Dismiss</button>
          </div>
        )}

        {/* ── Image Output ── */}
        {activeTab === "image" && generatedImages.length > 0 && (
          <motion.div
            ref={resultRef}
            className="cac-result-card"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="cac-result-header">
              <span>🖼️ Your AI Image</span>
              <a href="/pricing" className="cac-upgrade-badge">
                ✨ Upgrade for more →
              </a>
            </div>
            {generatedImages.map((img) => (
              <div key={img.id} className="cac-image-result">
                <img
                  src={img.imagePath}
                  alt={img.prompt}
                  className="cac-result-image"
                />
                <div className="cac-result-actions">
                  <button
                    className="cac-action-btn primary"
                    onClick={() =>
                      handleDownloadImage(img.imagePath, img.id)
                    }
                  >
                    📥 Download PNG
                  </button>
                  <button
                    className="cac-action-btn secondary"
                    onClick={() => {
                      setGeneratedImages([]);
                      setPrompt("");
                    }}
                  >
                    🔄 New Image
                  </button>
                  <button
                    className="cac-action-btn secondary"
                    onClick={() =>
                      navigator.clipboard.writeText(
                        generatedImages[0]?.prompt || ""
                      )
                    }
                  >
                    📋 Copy Prompt
                  </button>
                  <button
                    className="cac-action-btn primary"
                    style={{ background: 'linear-gradient(135deg, #7c3aed, #db2777)' }}
                    onClick={() => {
                      setVideoFromImageUrl(img.imagePath);
                      setActiveTab('video');
                      setPrompt(img.prompt || '');
                      setTimeout(() => {
                        resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }, 100);
                    }}
                  >
                    🎬 Make Video from this Image
                  </button>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* ── Video Job Card ── */}
        {activeTab === "video" && currentVideoJob && (
          <motion.div
            ref={resultRef}
            className="cac-result-card"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="cac-result-header">
              <span>🎬 Generation #{currentVideoJob.id}</span>
              <span
                className={`cac-status-badge cac-status-${currentVideoJob.status.toLowerCase()}`}
              >
                {currentVideoJob.status === "PENDING" && "⏳ Queued"}
                {currentVideoJob.status === "PROCESSING" && "⚙️ Generating"}
                {currentVideoJob.status === "COMPLETED" && "✅ Ready"}
                {currentVideoJob.status === "FAILED" && "❌ Failed"}
              </span>
            </div>

            {(currentVideoJob.status === "PENDING" ||
              currentVideoJob.status === "PROCESSING") && (
              <div className="cac-job-inline-processing">
                <div className="cac-job-spinner" />
                <p>
                  {currentVideoJob.status === "PENDING"
                    ? "Queued — starting soon…"
                    : "Generating… usually 30–120 sec."}
                </p>
              </div>
            )}

            {currentVideoJob.status === "COMPLETED" && currentVideoJob.videoUrl && (
              <>
                <video
                  controls
                  autoPlay
                  loop
                  src={currentVideoJob.videoUrl}
                  className="cac-result-video"
                />
                <div className="cac-result-actions">
                  
                    className="cac-action-btn primary"
                  <a  href={currentVideoJob.videoUrl}
                    download={`scenith-video-${currentVideoJob.id}.mp4`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    📥 Download MP4
                  </a>
                  
                    className="cac-action-btn primary"
                  <a  href="https://scenith.in/tools/add-subtitles-to-videos"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ background: 'linear-gradient(135deg, #7c3aed, #db2777)' }}
                  >
                    💬 Add Subtitles
                  </a>
                  <button
                    className="cac-action-btn secondary"
                    onClick={() => {
                      setCurrentVideoJob(null);
                      setPrompt("");
                    }}
                  >
                    🔄 New Video
                  </button>
                </div>
                <div className="cac-upsell-strip">
                  <span>Love this? Get more with Premium credits ✨</span>
                  <a href="/pricing">View Plans →</a>
                </div>
              </>
            )}

            {currentVideoJob.status === "FAILED" && (
              <div className="cac-error">
                ⚠️{" "}
                {currentVideoJob.errorMessage ||
                  "Generation failed. Credits refunded."}
              </div>
            )}
          </motion.div>
        )}

        {/* ── Image History ── */}
        {activeTab === "image" && isLoggedIn && (
          <div style={{ marginBottom: 24 }}>
            <button
              onClick={() => setShowImageHistory(v => !v)}
              style={{
                display: 'flex', alignItems: 'center', gap: 8,
                padding: '10px 16px', borderRadius: 10, border: '1.5px solid var(--cac-border)',
                background: 'var(--cac-surface)', color: 'var(--cac-accent)',
                fontSize: 13, fontWeight: 700, cursor: 'pointer', width: '100%',
                justifyContent: 'space-between',
              }}
            >
              <span>🖼️ Your Past Generations {imageHistory.length > 0 ? `(${imageHistory.length})` : ''}</span>
              <span>{showImageHistory ? '▲ Hide' : '▼ Show'}</span>
            </button>

            {showImageHistory && (
              <div style={{ marginTop: 12 }}>
                {imageHistoryLoading ? (
                  <div style={{ textAlign: 'center', padding: 24, color: 'var(--cac-muted)' }}>
                    <div className="cac-spinner" style={{ margin: '0 auto 8px' }} />
                    Loading history…
                  </div>
                ) : imageHistory.length === 0 ? (
                  <div style={{ textAlign: 'center', padding: 24, color: 'var(--cac-muted)', fontSize: 13 }}>
                    No images generated yet. Create your first one above!
                  </div>
                ) : (
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                    gap: 12,
                  }}>
                    {imageHistory.map((img) => (
                      <div key={img.id} style={{
                        borderRadius: 12, overflow: 'hidden',
                        border: '1px solid var(--cac-border)',
                        background: 'var(--cac-surface)',
                      }}>
                        <div style={{ position: 'relative', aspectRatio: '1', overflow: 'hidden' }}>
                          <img
                            src={img.imagePath}
                            alt={img.prompt}
                            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                            loading="lazy"
                          />
                        </div>
                        <div style={{ padding: '8px 10px' }}>
                          <p style={{
                            fontSize: 11, color: 'var(--cac-text-2)', margin: '0 0 8px',
                            overflow: 'hidden', textOverflow: 'ellipsis',
                            display: '-webkit-box', WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical' as const,
                          }}>
                            {img.prompt}
                          </p>
                          <div style={{ display: 'flex', gap: 6, flexDirection: 'column' }}>
                            <button
                              onClick={() => {
                                setVideoFromImageUrl(img.imagePath);
                                setActiveTab('video');
                                setPrompt(img.prompt || '');
                                setShowImageHistory(false);
                                setTimeout(() => {
                                  resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                }, 100);
                              }}
                              style={{
                                padding: '6px 10px', borderRadius: 8, border: 'none',
                                background: 'linear-gradient(135deg, #7c3aed, #db2777)',
                                color: '#fff', fontSize: 11, fontWeight: 700,
                                cursor: 'pointer', width: '100%',
                              }}
                            >
                              🎬 Make Video →
                            </button>
                            <button
                              onClick={async () => {
                                const res = await fetch(img.imagePath);
                                const blob = await res.blob();
                                const url = URL.createObjectURL(blob);
                                const a = document.createElement('a');
                                a.href = url;
                                a.download = `ai-image-${img.id}.png`;
                                document.body.appendChild(a);
                                a.click();
                                document.body.removeChild(a);
                                URL.revokeObjectURL(url);
                              }}
                              style={{
                                padding: '6px 10px', borderRadius: 8,
                                border: '1px solid var(--cac-border)',
                                background: 'transparent', color: 'var(--cac-accent)',
                                fontSize: 11, fontWeight: 600,
                                cursor: 'pointer', width: '100%',
                              }}
                            >
                              📥 Download
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* ── Demo Images Marquee (shown on image tab) ── */}
        {activeTab === "image" && demoImages.length > 0 && (
          <div style={{ marginBottom: 24, overflow: 'hidden' }}>
            <p style={{
              textAlign: 'center', fontSize: 12, color: 'var(--cac-text-2)',
              marginBottom: 10,
              background: 'rgba(99,85,220,0.06)', border: '1px solid rgba(99,85,220,0.15)',
              borderRadius: 8, padding: '6px 14px', display: 'inline-block',
            }}>
              🔓 Images from <strong style={{ color: 'var(--cac-accent)' }}>Free plan</strong> users ·
              🔒 <strong style={{ color: 'var(--cac-accent)' }}>Premium</strong> users' media is private
            </p>
            {(() => {
              const row1 = demoImages.slice(0, Math.ceil(demoImages.length / 2));
              const row2 = demoImages.slice(Math.ceil(demoImages.length / 2));
              return (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {[row1, row2].map((row, ri) => (
                    <div key={ri} style={{ display: 'flex', gap: 10, animation: `${ri === 0 ? 'cac-scroll-left' : 'cac-scroll-right'} 240s linear infinite`, width: 'max-content' }}>
                      {[...row, ...row].map((src, i) => (
                        <div key={i} style={{ width: 160, height: 160, borderRadius: 12, overflow: 'hidden', flexShrink: 0, border: '1px solid var(--cac-border-soft)' }}>
                          <img src={src} alt="AI generated" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              );
            })()}
          </div>
        )}

        {/* ── Demo Videos Strip (shown on video tab) ── */}
        {activeTab === "video" && demoVideos.length > 0 && (
          <div style={{ marginBottom: 24 }}>
            <p style={{
              textAlign: 'center', fontSize: 12, color: 'var(--cac-text-2)',
              marginBottom: 10,
              background: 'rgba(99,85,220,0.06)', border: '1px solid rgba(99,85,220,0.15)',
              borderRadius: 8, padding: '6px 14px', display: 'inline-block',
            }}>
              🔓 Videos from <strong style={{ color: 'var(--cac-accent)' }}>Free plan</strong> users ·
              🔒 <strong style={{ color: 'var(--cac-accent)' }}>Premium</strong> users' media is private
            </p>
            <div style={{ display: 'flex', gap: 12, overflowX: 'auto', paddingBottom: 8, scrollSnapType: 'x mandatory', scrollbarWidth: 'thin', scrollbarColor: 'var(--cac-border) transparent' }}>
              {demoVideos.map((url, i) => (
                <div key={i} style={{ flexShrink: 0, scrollSnapAlign: 'start', width: 220, borderRadius: 14, overflow: 'hidden', border: '1px solid var(--cac-border)', background: '#000', position: 'relative' }}>
                  <video src={url} autoPlay loop muted playsInline style={{ width: '100%', height: 160, objectFit: 'cover', display: 'block' }} />
                  <div style={{ position: 'absolute', bottom: 6, left: '50%', transform: 'translateX(-50%)', background: 'rgba(0,0,0,0.6)', borderRadius: 999, padding: '2px 8px', fontSize: 10, color: '#fff', whiteSpace: 'nowrap' }}>
                    🎬 Sample {i + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}        

        {/* ── Upsell Banner ── */}
        {isLoggedIn && (
          <div className="cac-upsell-banner">
            <div className="cac-upsell-inner">
              <div>
                <strong>Need more credits?</strong>
                <span>
                  {" "}
                  Creator Lite gives you 300cr/mo for voice, image & video — just
                  $9/mo.
                </span>
              </div>
              <a href="/pricing" className="cac-upsell-btn">
                Upgrade →
              </a>
            </div>
          </div>
        )}

        {/* ── SEO Section (minimal) ── */}
        <section className="cac-seo-section">
          <h2>One Platform for All Your AI Content</h2>
          <div className="cac-seo-grid">
            <div className="cac-seo-card">
              <span className="cac-seo-icon">🎙️</span>
              <h3>AI Voice</h3>
              <p>
                40+ natural voices, 20+ languages. Perfect for YouTube, podcasts,
                and ads. Instant MP3 download.
              </p>
            </div>
            <div className="cac-seo-card">
              <span className="cac-seo-icon">🖼️</span>
              <h3>AI Image</h3>
              <p>
                Text-to-image in 8 styles with 7 state-of-the-art models. High-res
                PNG, commercial use included.
              </p>
            </div>
            <div className="cac-seo-card">
              <span className="cac-seo-icon">🎬</span>
              <h3>AI Video</h3>
              <p>
                Cinematic text-to-video with Kling, Veo, Wan 2.5 and more. Up to
                1080p, MP4 download.
              </p>
            </div>
          </div>
          <div className="cac-seo-faq">
            <h3>Frequently Asked Questions</h3>
            <details>
              <summary>Is this free to use?</summary>
              <p>
                Yes — you get 50 free credits on sign-up, no card required. Credits
                cover voice, image, and video generation.
              </p>
            </details>
            <details>
              <summary>Can I use the content commercially?</summary>
              <p>
                All content generated on Scenith comes with full commercial rights.
                No attribution required.
              </p>
            </details>
            <details>
              <summary>How fast is generation?</summary>
              <p>
                Voice: ~3 sec · Image: 10–30 sec · Video: 30–120 sec depending on
                model and duration.
              </p>
            </details>
          </div>
        </section>

        {/* ── SEO Sections ── */}
        <section className="cac-seo-section">

          {/* ── What is this page ── */}
          <div className="cac-seo-intro">
            <h2>Free AI Content Creator — Voice, Image & Video in One Place</h2>
            <p>
              Scenith's AI Content Creator lets you generate professional-quality voices,
              images, and videos from a single page — no switching tools, no wasted time.
              Type a prompt, pick a mode, and your content is ready in seconds.
              Used by YouTubers, marketers, indie developers, and educators worldwide.
            </p>
          </div>

          {/* ── 3-col feature cards ── */}
          <div className="cac-seo-grid">
            <div className="cac-seo-card">
              <span className="cac-seo-icon">🎙️</span>
              <h3>AI Voice Generator</h3>
              <p>
                Convert text to speech with 40+ natural-sounding voices across 20+ languages.
                Choose from Google, OpenAI, and Azure voices. Perfect for YouTube voiceovers,
                podcast intros, e-learning narration, and ad scripts. Instant MP3 download,
                commercial use included.
              </p>
            </div>
            <div className="cac-seo-card">
              <span className="cac-seo-icon">🖼️</span>
              <h3>AI Image Generator</h3>
              <p>
                Turn any text description into a stunning image using GPT, Imagen 4, FLUX,
                Grok Aurora, and Stability AI models. 8 artistic styles including realistic
                photo, anime, digital art, and 3D render. High-res PNG output with full
                commercial rights — no watermarks.
              </p>
            </div>
            <div className="cac-seo-card">
              <span className="cac-seo-icon">🎬</span>
              <h3>AI Video Generator</h3>
              <p>
                Generate cinematic AI videos from text prompts using Kling 2.6, Veo 3.1,
                Wan 2.5, and Grok Imagine. Up to 1080p resolution, 10-second clips,
                16:9 / 9:16 / 1:1 aspect ratios. Download MP4 directly — no editing
                software required.
              </p>
            </div>
          </div>

          {/* ── How it works ── */}
          <div className="cac-seo-how">
            <h2>How to Create AI Content in 3 Steps</h2>
            <div className="cac-seo-steps">
              <div className="cac-seo-step">
                <span className="cac-seo-step-num">1</span>
                <div>
                  <h3>Choose your content type</h3>
                  <p>Switch between Voice, Image, and Video using the tab bar at the top. Each mode loads its own set of AI models and settings instantly.</p>
                </div>
              </div>
              <div className="cac-seo-step">
                <span className="cac-seo-step-num">2</span>
                <div>
                  <h3>Write your prompt</h3>
                  <p>Describe what you want in plain language. Use the quick-fill chips for inspiration, or paste your own script. The more specific your prompt, the better the result.</p>
                </div>
              </div>
              <div className="cac-seo-step">
                <span className="cac-seo-step-num">3</span>
                <div>
                  <h3>Generate and download</h3>
                  <p>Hit Generate. Voice is ready in ~3 seconds. Images take 10–30 seconds. Videos take 30–120 seconds depending on model. Download your file instantly — MP3, PNG, or MP4.</p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Use cases ── */}
          <div className="cac-seo-usecases">
            <h2>Who Uses Scenith AI Content Creator?</h2>
            <div className="cac-seo-uc-grid">
              <div className="cac-seo-uc-card">
                <span>🎬</span>
                <h3>YouTubers & Content Creators</h3>
                <p>Generate voiceovers for faceless YouTube channels, create eye-catching thumbnails with AI images, and produce short video clips for Reels and Shorts — all without leaving this page.</p>
              </div>
              <div className="cac-seo-uc-card">
                <span>📣</span>
                <h3>Marketers & Ad Agencies</h3>
                <p>Produce ad voiceovers in multiple languages, generate product visuals without a photoshoot, and create short video ads for social media campaigns in minutes.</p>
              </div>
              <div className="cac-seo-uc-card">
                <span>📚</span>
                <h3>Educators & Course Creators</h3>
                <p>Narrate course modules with natural AI voices, generate illustrative images for lesson slides, and create explainer video clips without any recording equipment.</p>
              </div>
              <div className="cac-seo-uc-card">
                <span>🛍️</span>
                <h3>E-commerce & Product Teams</h3>
                <p>Create professional product images from text descriptions, generate promotional voiceovers for product pages, and produce short demo videos at a fraction of traditional production cost.</p>
              </div>
              <div className="cac-seo-uc-card">
                <span>🎮</span>
                <h3>Game Developers & Indie Studios</h3>
                <p>Design concept art and character visuals, generate character dialogue voiceovers, and produce atmospheric video cutscenes — all powered by state-of-the-art AI models.</p>
              </div>
              <div className="cac-seo-uc-card">
                <span>🧑‍💼</span>
                <h3>Businesses & Startups</h3>
                <p>Produce pitch deck visuals, company intro voiceovers, and brand video content without hiring an agency. Full commercial rights on everything you generate.</p>
              </div>
            </div>
          </div>

          {/* ── Comparison table ── */}
          <div className="cac-seo-compare">
            <h2>Why Scenith vs Using Separate AI Tools?</h2>
            <div className="cac-seo-compare-grid">
              <div className="cac-seo-compare-col cac-compare-them">
                <h3>❌ Using Separate Tools</h3>
                <ul>
                  <li>Different subscriptions for voice, image, and video</li>
                  <li>Log in / out of multiple platforms</li>
                  <li>Inconsistent credit systems and billing</li>
                  <li>No unified history or workflow</li>
                  <li>$30–$80+/mo across multiple tools</li>
                </ul>
              </div>
              <div className="cac-seo-compare-col cac-compare-us">
                <h3>✅ Scenith AI Content Creator</h3>
                <ul>
                  <li>Voice + Image + Video under one login</li>
                  <li>Single credit balance works across all 3 modes</li>
                  <li>One plan covers everything — from $9/mo</li>
                  <li>7+ AI image models, 6 video models, 3 voice providers</li>
                  <li>50 free credits on signup — no card required</li>
                </ul>
              </div>
            </div>
          </div>

          {/* ── Models ── */}
          <div className="cac-seo-models">
            <h2>Powered by the World's Best AI Models</h2>
            <div className="cac-seo-model-tags">
              {[
                "GPT Image 1 (OpenAI)", "Imagen 4 (Google)", "FLUX 1.1 Pro",
                "Grok Aurora (xAI)", "Stability AI Core", "Kling 2.6 Pro",
                "Veo 3.1 (Google)", "Wan 2.5", "Grok Imagine (xAI)",
                "Google TTS", "OpenAI TTS", "Azure Neural TTS"
              ].map(m => (
                <span key={m} className="cac-model-tag">{m}</span>
              ))}
            </div>
          </div>
            
          {/* ── FAQ ── */}
          <div className="cac-seo-faq">
            <h2>Frequently Asked Questions</h2>
            
            <details>
              <summary>Is Scenith AI Content Creator free to use?</summary>
              <p>Yes — you get 50 free credits when you sign up, with no credit card required. Free credits work across voice, image, and video generation. Paid plans start at $9/month and include 300 credits plus access to all AI models.</p>
            </details>
            
            <details>
              <summary>Can I use AI-generated content commercially?</summary>
              <p>Absolutely. All content generated on Scenith — voiceovers, images, and videos — comes with full commercial rights. You can use them in YouTube videos, ads, products, client work, and any commercial project without attribution.</p>
            </details>
            
            <details>
              <summary>What is the best AI model for realistic images?</summary>
              <p>For photorealistic images, we recommend GPT Image 1 Medium (standard or premium quality) or Grok Aurora. For artistic styles and illustrations, FLUX 1.1 Pro and Stability AI Core produce excellent results. Imagen 4 Standard is ideal for high-detail prints.</p>
            </details>
            
            <details>
              <summary>Which AI video model is best for cinematic quality?</summary>
              <p>Kling 2.6 Pro and Veo 3.1 produce the highest quality cinematic videos at 1080p. For faster generation at lower cost, Wan 2.5 and Kling 2.5 Turbo are great options. Grok Imagine is the only model that includes AI-generated audio.</p>
            </details>
            
            <details>
              <summary>How many languages does the AI voice generator support?</summary>
              <p>The Google TTS provider supports 20+ languages including English (US, UK, Australian, Indian accents), Spanish, French, German, Mandarin, Hindi, Arabic, and more. Azure Neural TTS adds additional multilingual voices. OpenAI TTS voices are English-focused with very natural prosody.</p>
            </details>
            
            <details>
              <summary>How long does AI content generation take?</summary>
              <p>Voice generation completes in approximately 2–4 seconds. Image generation takes 10–30 seconds depending on model. Video generation takes 30–120 seconds depending on model, duration, and resolution. All generations run in the background — you can stay on the page or close the tab for images and return.</p>
            </details>
            
            <details>
              <summary>What file formats are supported for download?</summary>
              <p>AI Voice generates MP3 files. AI Image generates high-resolution PNG files. AI Video generates MP4 files. All files are downloaded directly to your device with no additional software required.</p>
            </details>
            
            <details>
              <summary>Do I need to install anything?</summary>
              <p>No. Scenith AI Content Creator is entirely browser-based. It works on any device — desktop, tablet, or mobile — with no plugins, extensions, or software downloads required.</p>
            </details>
          </div>
            
        </section>        
      </main>

      {/* ── Login Modal ── */}
      <AnimatePresence>
        {showLoginModal && (
          <motion.div
            className="cac-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => {
              if (e.target === e.currentTarget) setShowLoginModal(false);
            }}
          >
            <motion.div
              className="cac-modal"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <button
                className="cac-modal-close"
                onClick={() => setShowLoginModal(false)}
              >
                <FaTimes size={12} />
              </button>
              <h2 className="cac-modal-title">SCENITH</h2>
              <p className="cac-modal-sub">
                Login to generate AI content for free
              </p>
              {loginError && (
                <div className="cac-error" style={{ marginBottom: 12 }}>
                  ⚠️ {loginError}
                </div>
              )}
              {isLoggingIn && (
                <div style={{ textAlign: "center", margin: "16px 0" }}>
                  <div className="cac-spinner" />
                </div>
              )}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const fd = new FormData(e.currentTarget);
                  handleLogin(
                    fd.get("email") as string,
                    fd.get("password") as string
                  );
                }}
              >
                <input
                  name="email"
                  type="email"
                  className="cac-input"
                  placeholder="Email address"
                  required
                  disabled={isLoggingIn}
                />
                <input
                  name="password"
                  type="password"
                  className="cac-input"
                  placeholder="Password"
                  required
                  disabled={isLoggingIn}
                />
                <button
                  type="submit"
                  className="cac-generate-btn"
                  disabled={isLoggingIn}
                  style={{ width: "100%", marginTop: 4 }}
                >
                  {isLoggingIn ? "Logging in…" : "Login"}
                </button>
              </form>
              <div className="cac-modal-divider">OR</div>
              <div
                id="cac-google-btn"
                style={{ display: "flex", justifyContent: "center" }}
              />
              <p className="cac-modal-link">
                New to Scenith?{" "}
                <a href="/signup" className="cac-link">
                  Create account →
                </a>
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Free Video Limit Modal ── */}
      <AnimatePresence>
        {showFreeVideoModal && (
          <motion.div
            className="cac-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => {
              if (e.target === e.currentTarget) setShowFreeVideoModal(false);
            }}
          >
            <motion.div
              className="cac-modal"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <button
                className="cac-modal-close"
                onClick={() => setShowFreeVideoModal(false)}
              >
                <FaTimes size={12} />
              </button>
              <div style={{ textAlign: "center", padding: "8px 0 16px" }}>
                {/* Model logos strip */}
                <div style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  gap: 10, flexWrap: 'wrap', marginBottom: '30px'
                }}>
                  {[
                    { key: 'WAN_2_5',        label: 'Wan 2.5' },
                    { key: 'KLING_2_5_TURBO', label: 'Kling' },
                    { key: 'VEO_3_1_FAST',   label: 'Veo 3.1' },
                    { key: 'GROK_IMAGINE',   label: 'Grok' },
                  ].map(m => (
                    <div key={m.key} style={{
                      display: 'flex', alignItems: 'center', gap: 5,
                      padding: '4px 10px', borderRadius: 999,
                      background: 'rgba(99,85,220,0.07)',
                      border: '1px solid rgba(99,85,220,0.15)',
                      fontSize: 11, fontWeight: 600, color: 'var(--cac-text-2)',
                    }}>
                      <ModelLogo modelKey={m.key} size={14} />
                      {m.label}
                    </div>
                  ))}
                </div>
                <h2 className="cac-modal-title">Unlock AI Video</h2>
                <p className="cac-modal-sub">
                  Video generation is for paid users only. Pick any plan to start.
                </p>
                
                {/* Spark plan temptation */}
                <div style={{
                  margin: '16px 0 4px',
                  padding: '12px 14px',
                  borderRadius: 12,
                  background: 'linear-gradient(135deg, rgba(99,85,220,0.08), rgba(139,92,246,0.06))',
                  border: '1.5px solid rgba(99,85,220,0.20)',
                  textAlign: 'left',
                }}>
                  <div style={{ fontSize: 12, fontWeight: 800, color: 'var(--cac-accent)', marginBottom: 6 }}>
                    ✨ Start with Spark — from just ₹50/$1
                  </div>
                  <div style={{ fontSize: 11.5, color: 'var(--cac-text-2)', lineHeight: 1.6 }}>
                    You already have <strong style={{ color: 'var(--cac-text)' }}>50 free credits</strong>. The Spark plan adds 50 more —
                    giving you <strong style={{ color: 'var(--cac-text)' }}>100 credits total</strong> and enough to generate
                    <strong style={{ color: 'var(--cac-accent)' }}> 2 AI videos</strong> instantly.
                  </div>
                </div>
              </div>
              <a
                href="/pricing"
                className="cac-generate-btn"
                style={{
                  display: "block",
                  textAlign: "center",
                  textDecoration: "none",
                  width: "100%",
                }}
                onClick={() => setShowFreeVideoModal(false)}
              >
                Unlock AI Video — from $1/mo →
              </a>
              <button
                onClick={() => setShowFreeVideoModal(false)}
                style={{
                  display: "block",
                  width: "100%",
                  marginTop: 10,
                  background: "none",
                  border: "none",
                  color: "var(--cac-muted)",
                  fontSize: 12,
                  cursor: "pointer",
                  textDecoration: "underline",
                }}
              >
                Maybe later
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>     

    </div>
    <button
      className="cac-darkmode-fab"
      onClick={() => setDarkMode((d) => !d)}
      aria-label="Toggle dark mode"
    >
      {darkMode ? <FaSun size={14} /> : <FaMoon size={14} />}
    </button>

    {isLoggedIn && userProfile?.role === "BASIC" && (
      <div className="cac-floating-cta">
        <a href="/pricing" className="cac-floating-btn">
          ⚡ <strong>Get More Credits</strong>
          <small>from $9/mo · 300cr included</small>
        </a>
      </div>
    )}
  </>        
  );
};

export default CreateAIContentClient;