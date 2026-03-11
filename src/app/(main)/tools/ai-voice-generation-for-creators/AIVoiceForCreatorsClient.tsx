"use client";

import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { API_BASE_URL, CDN_URL } from '../../../config';
import { FaTimes } from 'react-icons/fa';
import '../../../../../styles/tools/AIVoiceForCreators.css';

// ─── TypeScript interfaces (identical to base page) ───────────────────────────
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

// ─── Custom Audio Player (identical logic) ───────────────────────────────────
const CustomAudioPlayer = ({ src }: { src: string }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) { audioRef.current.pause(); } else { audioRef.current.play(); }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => { if (audioRef.current) setCurrentTime(audioRef.current.currentTime); };
  const handleLoadedMetadata = () => { if (audioRef.current) setDuration(audioRef.current.duration); };
  const handleEnded = () => { setIsPlaying(false); setCurrentTime(0); };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (audioRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const newTime = ((e.clientX - rect.left) / rect.width) * duration;
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  return (
    <div className="cfc-audio-player">
      <audio ref={audioRef} src={src} onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata} onEnded={handleEnded} style={{ display: 'none' }} />
      <div className="cfc-audio-controls">
        <button onClick={togglePlayPause} className="cfc-play-btn" aria-label={isPlaying ? 'Pause' : 'Play'}>
          {isPlaying ? '⏸' : '▶'}
        </button>
        <div className="cfc-time">{formatTime(currentTime)} / {formatTime(duration)}</div>
      </div>
      <div className="cfc-progress" onClick={handleSeek}>
        <div className="cfc-progress-fill" style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }} />
      </div>
    </div>
  );
};

// ─── Emotion Presets ──────────────────────────────────────────────────────────
const EMOTION_PRESETS = [
  { value: 'default', label: 'Default (Natural)', icon: '🎭', description: 'Natural speaking tone' },
  { value: 'happy', label: 'Happy/Excited', icon: '😊', description: 'Upbeat and energetic' },
  { value: 'calm', label: 'Calm/Relaxed', icon: '😌', description: 'Soothing and peaceful' },
  { value: 'angry', label: 'Angry/Intense', icon: '😠', description: 'Powerful and assertive' },
  { value: 'sad', label: 'Sad/Somber', icon: '😢', description: 'Melancholic and reflective' },
  { value: 'announcer', label: 'Announcer', icon: '📢', description: 'Clear and authoritative' },
  { value: 'meditation', label: 'Meditation', icon: '🧘', description: 'Very slow and peaceful' },
  { value: 'enthusiastic', label: 'Enthusiastic', icon: '🎉', description: 'Very energetic and exciting' },
  { value: 'professional', label: 'Professional', icon: '📚', description: 'Business-like and neutral' },
];

// ─── Creator-focused Script Templates ─────────────────────────────────────────
const CREATOR_SCRIPT_TEMPLATES = [
  {
    id: 1, title: "YouTube Hook (Pattern Interrupt)", category: "YouTube",  icon: "🎬",
    script: "What if I told you that 90% of YouTubers are making the exact same mistake? And no — it's not the thumbnail, it's not the title, it's something far more subtle that's killing your watch time before the 30-second mark. Stick around, because in the next few minutes I'm going to show you exactly how to fix it."
  },
  {
    id: 2, title: "Faceless Channel Intro", category: "YouTube", icon: "🤫",
    script: "Welcome back to the channel. If you're new here, this is where we break down complex topics into clear, actionable insights you can actually use. No fluff, no filler — just the stuff that matters. Hit that subscribe button so you don't miss what's coming next. Let's get into it."
  },
  {
    id: 3, title: "TikTok / Reel Voice-Over", category: "Short Form", icon: "📱",
    script: "POV: You just discovered the AI tool that every creator is quietly using to 10x their output. No studio. No microphone. No voice actor. Just your script, and a voice that sounds completely real. I'll show you exactly how in 60 seconds."
  },
  {
    id: 4, title: "Podcast Cold Open", category: "Podcast", icon: "🎙️",
    script: "You're listening to [Show Name], the podcast where we go deep on the ideas, strategies, and stories shaping the future of [your niche]. I'm your host, and today we have a conversation that genuinely stopped me in my tracks. Before we dive in — if this episode hits for you, share it with one person who needs to hear it. Okay. Let's go."
  },
  {
    id: 5, title: "Online Course Module Intro", category: "E-Learning", icon: "🎓",
    script: "Welcome to Module 3. By the end of this lesson, you'll have a complete framework you can apply immediately — not someday, not eventually, but today. We're going to cover three core concepts that most courses skip entirely. Take notes. This is where things start to click."
  },
  {
    id: 6, title: "Instagram Reel CTA Outro", category: "Short Form", icon: "✨",
    script: "If that was helpful, save this so you can come back to it later. Follow for more tips like this every week — I post strategies that actually work, tested on real content, not just theory. Drop a question in the comments and I'll answer it in the next video. See you there."
  },
  {
    id: 7, title: "Sponsorship Read (Mid-Roll)", category: "Monetization", icon: "💰",
    script: "Before we continue — a quick word from today's sponsor, [Brand Name]. I've been using this tool for three months now and I genuinely recommend it. [Brand Name] helps creators like you [specific benefit] without [specific pain point]. There's a link in the description for a free trial — check it out, and thanks to them for making this content possible. Now, back to it."
  },
  {
    id: 8, title: "Documentary-Style Narration", category: "YouTube", icon: "🎞️",
    script: "In 2019, nobody believed it was possible. But one small team, working with almost no resources, built something that changed an entire industry. This is the story of how they did it — and what the rest of us can learn from the decisions they made in those critical early months."
  },
  {
    id: 9, title: "Listicle Video Script", category: "YouTube", icon: "📋",
    script: "Number one — and this one surprises almost everyone. Most creators spend 80% of their energy on production, and almost nothing on distribution. That's completely backwards. The videos that go viral aren't always the best produced. They're the best distributed. Here's what that actually means in practice."
  },
  {
    id: 10, title: "Product Review Opener", category: "Reviews", icon: "⭐",
    script: "I've spent two weeks using this every single day, and I have some genuinely mixed feelings. There are things about it I absolutely love, and one thing that almost made me return it. I'm going to give you the honest, full picture — no affiliate pressure, just what I actually think. Let's break it down."
  },
  {
    id: 11, title: "Meditation / Wellness Narration", category: "Wellness", icon: "🧘",
    script: "Close your eyes... and take a slow, deep breath in. Hold for just a moment. And release. Good. With every exhale, let the tension of your day begin to dissolve. You don't need to be anywhere else right now. This moment is entirely yours. We'll begin when you're ready."
  },
  {
    id: 12, title: "Explainer Video (SaaS / Tech)", category: "Tech", icon: "🛠️",
    script: "Here's the problem that [Product Name] was built to solve. Every day, teams waste hours on manual tasks that should take minutes. The root cause isn't laziness — it's that the right tools simply didn't exist until now. In the next two minutes, I'll show you exactly how [Product Name] changes that."
  },
  {
    id: 13, title: "Motivational Content Creator Pep Talk", category: "Motivation", icon: "🔥",
    script: "You've been posting for months and the numbers aren't where you want them. I know that feeling. But here's the truth nobody tells you at the start — every creator you admire went through exactly this phase. The difference between those who made it and those who quit? They treated every upload as practice, not proof of worth. Keep going."
  },
  {
    id: 14, title: "News / Commentary Channel Open", category: "News", icon: "📰",
    script: "Today's story is one of the most important things happening right now, and most major outlets are either missing it entirely or deliberately burying the lead. We're going to look at what's actually going on, separate the facts from the narrative, and give you a take you won't hear anywhere else. Let's start with what we know."
  },
  {
    id: 15, title: "Video Essay Closing Statement", category: "YouTube", icon: "✍️",
    script: "So what does all of this mean? It means the old playbook is broken, and the creators who will thrive in the next five years are the ones willing to build something genuinely different. Not louder — different. More honest. More specific. More human. That's not just a strategy. That's a philosophy. And it works."
  },
];

// ─── Platform use-case data ───────────────────────────────────────────────────
const PLATFORM_CARDS = [
  {
    icon: "▶️", platform: "YouTube", stat: "500 hrs uploaded/min",
    headline: "Dominate Search with AI-Narrated Videos",
    body: "Faceless channels, documentary essays, listicles, tutorials — YouTube's algorithm rewards watch time, not production budgets. Our natural AI voices keep viewers watching longer because they don't sound robotic.",
    tips: ["Match voice tone to your niche (calm = finance, energetic = gaming)", "Generate intros in under 10 seconds", "Re-dub any video for multilingual SEO"],
  },
  {
    icon: "🎙️", platform: "Podcasting", stat: "5M+ active podcasts",
    headline: "Launch Your Podcast Today — No Mic Required",
    body: "From solo commentary shows to AI co-hosts, our voices hold listener attention through full episodes. Professional pacing and natural breathing patterns make every episode sound studio-produced.",
    tips: ["Use 'Professional' emotion for interview formats", "Generate episode summaries as audio for show notes", "Create promo clips in different languages"],
  },
  {
    icon: "📱", platform: "TikTok & Reels", stat: "1B+ daily active users",
    headline: "Hook Viewers in the First 2 Seconds",
    body: "Short-form content lives or dies by its opening line. Our 'Enthusiastic' voice preset is tuned for viral energy — fast, clear, punchy. Pair it with on-screen text for maximum accessibility and reach.",
    tips: ["Keep scripts under 60 words for Reels", "Use high-energy emotions for trend content", "Generate 3 variations and A/B test performance"],
  },
  {
    icon: "🎓", platform: "Online Courses", stat: "$325B industry by 2025",
    headline: "Record 100 Lessons Without a Recording Session",
    body: "Course creators save thousands per course by replacing studio time with AI narration. Consistent voice quality across every module, instant updates when content changes, multilingual versions at zero extra cost.",
    tips: ["Use 'Professional' tone for authority", "Generate quiz audio and slide narrations", "Update single lessons without re-recording everything"],
  },
  {
    icon: "🛒", platform: "E-commerce & Ads", stat: "Video ads get 3x more engagement",
    headline: "Product Videos That Actually Convert",
    body: "From product demos to unboxing narrations to retargeting ad scripts — AI voices let small brands produce video content at agency scale. Our 'Announcer' preset is built for persuasive, clear commercial delivery.",
    tips: ["A/B test male vs female voices for your audience", "Generate localized ads in 20+ languages", "Use enthusiastic tone for flash sales"],
  },
  {
    icon: "✍️", platform: "Written → Audio Content", stat: "Readers retain 95% more from audio",
    headline: "Turn Every Blog Post Into a Listen-Anywhere Episode",
    body: "Convert your existing written content — articles, newsletters, threads — into audio automatically. Reach audiences who prefer listening over reading. Build a new content channel from content you've already created.",
    tips: ["Generate audio versions of top-performing posts", "Use calm tone for long-form essays", "Embed audio players to boost time-on-page"],
  },
];

// ─── Creator workflow steps ────────────────────────────────────────────────────
const WORKFLOW_STEPS = [
  {
    num: "01", title: "Write or Paste Your Script",
    body: "Type directly or paste from Google Docs, Notion, or your script tool of choice. Use our 15 creator-focused templates to skip the blank-page problem entirely. Scripts optimized for hooks, CTAs, sponsorship reads, and more.",
    icon: "✍️",
  },
  {
    num: "02", title: "Pick Your Creator Voice",
    body: "Filter by language, gender, and style. Preview each voice with a single click before committing. Match the voice to your platform — high-energy for TikTok, authoritative for YouTube docs, calm for wellness content.",
    icon: "🎙️",
  },
  {
    num: "03", title: "Set the Emotion (Optional — Premium)",
    body: "Default sounds natural on any content. Upgrade to unlock 9 emotion presets: Enthusiastic for promos, Professional for courses, Calm for ASMR, Announcer for news. One click. Instant difference.",
    icon: "🎭",
  },
  {
    num: "04", title: "Generate in Under 5 Seconds",
    body: "Click generate. Our neural TTS engine processes your script and returns broadcast-quality audio almost instantly. No queue. No wait. No booking a voice actor for next Thursday.",
    icon: "⚡",
  },
  {
    num: "05", title: "Download and Publish",
    body: "Download your MP3. Drag it into Premiere, Final Cut, CapCut, DaVinci, or any editor. Full commercial rights — monetize your YouTube, sell your course, run your ad. Zero attribution required.",
    icon: "📥",
  },
];

// ─── Niche-specific voice pairing guide ──────────────────────────────────────
const NICHE_VOICE_GUIDE = [
  { niche: "Finance & Investing", voice: "Deep male, American EN", emotion: "Professional", why: "Authority and trust are critical. Calm, measured delivery increases credibility with financial audiences." },
  { niche: "Health & Wellness", voice: "Soft female, British EN", emotion: "Calm", why: "Soothing delivery reduces anxiety and matches the content's purpose — relaxation and trust." },
  { niche: "Gaming & Esports", voice: "Energetic male, American EN", emotion: "Enthusiastic", why: "Fast-paced, high-energy content demands a voice with the same intensity as the gameplay." },
  { niche: "True Crime & Documentaries", voice: "Rich male, American EN", emotion: "Announcer", why: "Gravitas and pacing make the narrative feel cinematic. Slow delivery for tension, speed for action." },
  { niche: "Tech & SaaS Reviews", voice: "Clear female, American EN", emotion: "Professional", why: "Clarity over style. Technical audiences prioritize comprehension — a clean voice wins every time." },
  { niche: "Motivation & Self-Help", voice: "Warm female, Australian EN", emotion: "Happy", why: "Optimism is contagious. An upbeat, genuine-sounding voice amplifies motivational messaging." },
  { niche: "Cooking & Lifestyle", voice: "Warm female, American EN", emotion: "Happy", why: "Warm, conversational delivery feels like a friend walking you through a recipe — not a robot." },
  { niche: "Language Learning", voice: "Clear male or female, target language", emotion: "Default", why: "Natural pacing and authentic accent exposure are the entire product. Default = cleanest learning signal." },
  { niche: "Meditation & ASMR", voice: "Soft female, any", emotion: "Meditation", why: "The slowest, softest preset turns any wellness script into a genuinely therapeutic experience." },
  { niche: "News & Commentary", voice: "Confident male, American EN", emotion: "Announcer", why: "Broadcast-trained cadence. Listeners associate this voice pattern with authority and accuracy." },
];

// ─── Stats bar ─────────────────────────────────────────────────────────────────
const CREATOR_STATS = [
  { val: "40+", label: "Natural Voices" },
  { val: "20+", label: "Languages" },
  { val: "< 5s", label: "Generation Time" },
  { val: "1,500+", label: "Active Creators" },
  { val: "100%", label: "Commercial Rights" },
];

// ─── Main Component ───────────────────────────────────────────────────────────
const AIVoiceForCreatorsClient: React.FC = () => {
  const router = useRouter();

  // ── Auth state ────────────────────────────────────────────────────────────
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userProfile, setUserProfile] = useState<UserProfile>({
    email: '', firstName: '', lastName: '', picture: null, googleAuth: false, role: '',
  });
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);
  const [loginError, setLoginError] = useState<string | null>(null);
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(false);
  const [loginErrors, setLoginErrors] = useState<{ [key: string]: string }>({});
  const [loginSuccess, setLoginSuccess] = useState<string>('');

  // ── Voice generation state (identical to base page) ───────────────────────
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
  const [playingDemo, setPlayingDemo] = useState<string | null>(null);
  const demoAudioRef = useRef<HTMLAudioElement | null>(null);
  const [ttsUsage, setTtsUsage] = useState<{
    monthly: { used: number; limit: number; remaining: number };
    daily: { used: number; limit: number; remaining: number };
    role: string;
    maxCharRequest: number;
    externalProviders?: {
      hasAccess: boolean;
      usage: Record<string, {
        monthly: { used: number; limit: number; remaining: number };
        daily: { used: number; limit: number; remaining: number };
      }>;
    };
  } | null>(null);
  const characterCount = useMemo(() => aiVoiceText.length, [aiVoiceText]);
  const [selectedEmotion, setSelectedEmotion] = useState<string>('default');
  const [isPlayingEmotionPreview, setIsPlayingEmotionPreview] = useState(false);
  const emotionPreviewAudioRef = useRef<HTMLAudioElement | null>(null);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [showLimitModal, setShowLimitModal] = useState(false);
  const [generationCount, setGenerationCount] = useState(0);
  const [generationHistory, setGenerationHistory] = useState<Array<{
    id: number; audioPath: string; createdAt: string;
  }>>([]);
  const [hasHistoryAccess, setHasHistoryAccess] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [historyLoading, setHistoryLoading] = useState(false);
  const [showScriptTemplates, setShowScriptTemplates] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showEmotionUpgradePopup, setShowEmotionUpgradePopup] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState<'GOOGLE' | 'OPENAI' | 'AZURE'>('GOOGLE');
  const [externalVoices, setExternalVoices] = useState<(Voice & { voiceId?: string })[]>([]);
  const [externalVoicesLoading, setExternalVoicesLoading] = useState(false);
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [upgradeModalType, setUpgradeModalType] = useState<'first_gen' | 'repeat_gen' | 'download' | 'limit_warning'>('first_gen');
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);
  const [activePlans, setActivePlans] = useState<string[]>([]);
  const isPaidUser = activePlans.length > 0;

  // ── Limit warning effect ─────────────────────────────────────────────────
  useEffect(() => {
    if (!isLoggedIn || !ttsUsage || userProfile?.role !== 'BASIC') return;
    const dailyPercent = ttsUsage.daily.limit > 0 ? (ttsUsage.daily.used / ttsUsage.daily.limit) * 100 : 0;
    const monthlyPercent = ttsUsage.monthly.limit > 0 ? (ttsUsage.monthly.used / ttsUsage.monthly.limit) * 100 : 0;
    if (Math.max(dailyPercent, monthlyPercent) >= 70 && !showLimitModal) setShowLimitModal(true);
  }, [ttsUsage, isLoggedIn, userProfile]);

  // ── Active plans ─────────────────────────────────────────────────────────
  useEffect(() => {
    const fetchActivePlans = async () => {
      if (!isLoggedIn) { setActivePlans([]); return; }
      try {
        const response = await fetch(`${API_BASE_URL}/api/payments/active-plans`, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        if (response.ok) {
          const data = await response.json();
          setActivePlans(data.map((p: any) => p.planType));
        }
      } catch (e) { console.error(e); }
    };
    fetchActivePlans();
  }, [isLoggedIn]);

  // ── TTS usage ─────────────────────────────────────────────────────────────
  useEffect(() => {
    const fetchTtsUsage = async () => {
      if (!isLoggedIn) { setTtsUsage(null); return; }
      try {
        const res = await fetch(`${API_BASE_URL}/api/sole-tts/usage`, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        if (res.ok) setTtsUsage(await res.json());
      } catch (e) { console.error(e); }
    };
    fetchTtsUsage();
  }, [isLoggedIn]);

  // ── Auth check ────────────────────────────────────────────────────────────
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.get(`${API_BASE_URL}/auth/me`, { headers: { Authorization: `Bearer ${token}` } })
        .then((res) => {
          const nameParts = (res.data.name || '').trim().split(' ');
          setUserProfile({
            email: res.data.email || '',
            firstName: nameParts[0] || '',
            lastName: nameParts.length > 1 ? nameParts.slice(1).join(' ') : '',
            picture: res.data.picture || null,
            googleAuth: res.data.googleAuth || false,
            role: res.data.role || 'BASIC',
          });
          setIsLoggedIn(true);
          setShowLoginModal(false);
        })
        .catch((err) => {
          if (err.response?.status === 401) {
            localStorage.removeItem('token');
            localStorage.removeItem('userProfile');
            setIsLoggedIn(false);
          }
        });
    }
  }, []);

  // ── Welcome modal timer ───────────────────────────────────────────────────
  useEffect(() => {
    if (isPaidUser) return;
    const timer = setTimeout(() => setShowWelcomeModal(true), 7000);
    return () => clearTimeout(timer);
  }, [isPaidUser]);

  // ── Micro-tool script passthrough ─────────────────────────────────────────
  useEffect(() => {
    try {
      const s = sessionStorage.getItem('microToolScript');
      if (s) { setAiVoiceText(s); sessionStorage.removeItem('microToolScript'); }
    } catch {}
  }, []);

  // ── Voice metadata & filtered voices ─────────────────────────────────────
  useEffect(() => {
    const fetchMetadata = async () => {
      try {
        const token = localStorage.getItem('token');
        const headers: HeadersInit = token ? { Authorization: `Bearer ${token}` } : {};
        const res = await fetch(`${API_BASE_URL}/api/ai-voices/get-all-voices`, { headers });
        if (!res.ok) throw new Error();
        const data = await res.json();
        setUniqueLanguages([...new Set(data.map((v: Voice) => v.language))] as string[]);
        setUniqueGenders([...new Set(data.map((v: Voice) => v.gender))] as string[]);
      } catch { setUniqueLanguages([]); setUniqueGenders([]); }
    };
    fetchMetadata();
  }, []);

  useEffect(() => {
    const fetchFilteredVoices = async () => {
      try {
        const token = localStorage.getItem('token');
        const headers: HeadersInit = token ? { Authorization: `Bearer ${token}` } : {};
        let url = `${API_BASE_URL}/api/ai-voices/get-all-voices`;
        if (filterLanguage && filterGender) url = `${API_BASE_URL}/api/ai-voices/voices-by-language-and-gender?language=${encodeURIComponent(filterLanguage)}&gender=${encodeURIComponent(filterGender)}`;
        else if (filterLanguage) url = `${API_BASE_URL}/api/ai-voices/voices-by-language?language=${encodeURIComponent(filterLanguage)}`;
        else if (filterGender) url = `${API_BASE_URL}/api/ai-voices/voices-by-gender?gender=${encodeURIComponent(filterGender)}`;
        const res = await fetch(url, { headers });
        if (!res.ok) throw new Error();
        setVoices(await res.json());
      } catch { setVoices([]); }
    };
    fetchFilteredVoices();
  }, [filterLanguage, filterGender]);

  useEffect(() => { if (isLoggedIn) fetchHistory(); }, [isLoggedIn]);

  useEffect(() => {
    if (selectedProvider === 'GOOGLE') return;
    setExternalVoicesLoading(true);
    const token = localStorage.getItem('token');
    fetch(`${API_BASE_URL}/api/ai-voices/external-voices?provider=${selectedProvider}`, {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    })
      .then(r => r.json()).then(d => setExternalVoices(d || [])).catch(() => setExternalVoices([]))
      .finally(() => setExternalVoicesLoading(false));
  }, [selectedProvider]);

  // ── Audio demo ────────────────────────────────────────────────────────────
  const getEmotionPlaybackSettings = (emotion: string): { playbackRate: number; volume: number } => {
    switch (emotion.toLowerCase()) {
      case 'happy': case 'excited': return { playbackRate: 1.15, volume: 1.0 };
      case 'calm': case 'relaxed': return { playbackRate: 0.85, volume: 0.8 };
      case 'angry': case 'intense': return { playbackRate: 1.1, volume: 1.0 };
      case 'sad': case 'somber': return { playbackRate: 0.8, volume: 0.75 };
      case 'meditation': return { playbackRate: 0.7, volume: 0.7 };
      case 'enthusiastic': return { playbackRate: 1.25, volume: 1.0 };
      case 'professional': return { playbackRate: 0.95, volume: 0.9 };
      default: return { playbackRate: 1.0, volume: 1.0 };
    }
  };

  const handlePlayDemo = (voice: Voice, useEmotion: boolean = false) => {
    const voiceId = `${voice.voiceName}-${voice.voiceStyle || 'default'}`;
    if (demoAudioRef.current) { demoAudioRef.current.pause(); demoAudioRef.current.currentTime = 0; }
    if (emotionPreviewAudioRef.current) { emotionPreviewAudioRef.current.pause(); emotionPreviewAudioRef.current.currentTime = 0; }
    if (playingDemo === voiceId) { setPlayingDemo(null); setIsPlayingEmotionPreview(false); return; }

    let demoUrl: string;
    if (voice.provider === 'OPENAI') {
      demoUrl = `${CDN_URL}/AiVoicesDemo/OpenAI/${voice.gender.toUpperCase()}/${voice.humanName}.mp3`;
    } else if (voice.provider === 'AZURE') {
      demoUrl = `${CDN_URL}/AiVoicesDemo/Azure/${voice.gender.toUpperCase()}/${voice.humanName}.mp3`;
    } else {
      const langFolder = voice.language.replace(/\s*\(.*?\)\s*/g, '').trim().replace(/\s+/g, '%20');
      let demoFileName = voice.voiceStyle
        ? `${voice.humanName?.split('-')[0] || voice.voiceName}-${voice.voiceStyle.charAt(0).toUpperCase() + voice.voiceStyle.slice(1)}.mp3`
        : `${voice.humanName || voice.voiceName}.mp3`;
      demoUrl = `${CDN_URL}/AiVoicesDemo/${langFolder}/${voice.gender.toUpperCase()}/${demoFileName}`;
    }

    const audio = new Audio(demoUrl);
    if (useEmotion && selectedEmotion !== 'default') {
      const s = getEmotionPlaybackSettings(selectedEmotion);
      audio.playbackRate = s.playbackRate; audio.volume = s.volume;
      setIsPlayingEmotionPreview(true);
    } else { setIsPlayingEmotionPreview(false); }

    audio.play().catch(() => { setPlayingDemo(null); setIsPlayingEmotionPreview(false); });
    audio.onended = () => { setPlayingDemo(null); setIsPlayingEmotionPreview(false); };
    audio.onerror = () => { setPlayingDemo(null); setIsPlayingEmotionPreview(false); };

    if (useEmotion) emotionPreviewAudioRef.current = audio; else demoAudioRef.current = audio;
    setPlayingDemo(voiceId);
  };

  useEffect(() => {
    return () => {
      demoAudioRef.current?.pause();
      emotionPreviewAudioRef.current?.pause();
    };
  }, []);

  // ── Login handlers ────────────────────────────────────────────────────────
  const handleLogin = async (formData: LoginFormData) => {
    setIsLoggingIn(true); setLoginError(null);
    try {
      const res = await axios.post(`${API_BASE_URL}/auth/login`, formData);
      localStorage.setItem('token', res.data.token);
      const profile = await axios.get(`${API_BASE_URL}/auth/me`, { headers: { Authorization: `Bearer ${res.data.token}` } });
      const nameParts = (profile.data.name || '').trim().split(' ');
      setUserProfile({ email: profile.data.email || '', firstName: nameParts[0] || '', lastName: nameParts.slice(1).join(' ') || '', picture: profile.data.picture || null, googleAuth: profile.data.googleAuth || false, role: profile.data.role || 'BASIC' });
      setIsLoggedIn(true); setShowLoginModal(false);
    } catch (err: any) {
      setLoginError(err.response?.data?.message || 'Login failed. Please check your credentials.');
    } finally { setIsLoggingIn(false); }
  };

  const handleGoogleLogin = useCallback(async (credentialResponse: any) => {
    setLoginError(''); setLoginSuccess(''); setLoginErrors({}); setIsLoggingIn(true);
    try {
      const res = await axios.post(`${API_BASE_URL}/auth/google`, { token: credentialResponse.credential });
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('userProfile', JSON.stringify({ email: res.data.email, name: res.data.name, picture: res.data.picture || null, googleAuth: true }));
      setLoginSuccess('Google login successful!');
      setTimeout(async () => {
        const profile = await axios.get(`${API_BASE_URL}/auth/me`, { headers: { Authorization: `Bearer ${res.data.token}` } });
        const nameParts = (profile.data.name || '').trim().split(' ');
        setUserProfile({ email: profile.data.email || '', firstName: nameParts[0] || '', lastName: nameParts.slice(1).join(' ') || '', picture: profile.data.picture || null, googleAuth: profile.data.googleAuth || false, role: profile.data.role || 'BASIC' });
        setIsLoggedIn(true); setShowLoginModal(false); setIsLoggingIn(false);
      }, 1000);
    } catch (err: any) {
      setIsLoggingIn(false);
      setLoginError(err.response?.data?.message || 'Google login failed');
      setTimeout(() => setLoginError(''), 8000);
    }
  }, []);

  useEffect(() => {
    const initGoogle = () => {
      if (window.google?.accounts) {
        window.google.accounts.id.initialize({ client_id: '397321320139-tpd310sq9j8rdngqd9kdmhgegco52b3g.apps.googleusercontent.com', callback: handleGoogleLogin });
        const btn = document.getElementById('cfc-googleSignInButton');
        if (btn) window.google.accounts.id.renderButton(btn, { theme: 'outline', size: 'large', width: 300 });
      } else { setTimeout(initGoogle, 100); }
    };
    if (showLoginModal) initGoogle();
  }, [showLoginModal, handleGoogleLogin]);

  // ── Generation ────────────────────────────────────────────────────────────
  const handleGenerateAiAudio = async () => {
    if (!isLoggedIn) { setShowLoginModal(true); return; }
    if (selectedProvider !== 'GOOGLE' && !ttsUsage?.externalProviders?.hasAccess) {
      window.location.href = '/pricing'; return;
    }
    if (!aiVoiceText.trim() || !selectedVoice) { setError('Please enter text and select a voice.'); return; }
    if (aiVoiceText.length > maxCharsPerRequest) {
      setError(`Text exceeds the maximum limit of ${maxCharsPerRequest.toLocaleString()} characters.`);
      setTimeout(() => setError(null), 10000); return;
    }
    if (ttsUsage) {
      if (ttsUsage.daily.limit > 0 && ttsUsage.daily.remaining < aiVoiceText.length) {
        setError(`Would exceed daily limit. ${ttsUsage.daily.remaining.toLocaleString()} chars remaining today.`);
        setTimeout(() => setError(null), 10000); return;
      }
      if (ttsUsage.monthly.limit > 0 && ttsUsage.monthly.remaining < aiVoiceText.length) {
        setError(`Would exceed monthly limit. ${ttsUsage.monthly.remaining.toLocaleString()} chars remaining this month.`);
        setTimeout(() => setError(null), 10000); return;
      }
    }

    setIsGenerating(true); setError(null);
    try {
      const isExternal = selectedProvider !== 'GOOGLE';
      const body: any = isExternal
        ? { text: aiVoiceText, voiceId: selectedVoice.voiceId || selectedVoice.voiceName, provider: selectedProvider }
        : { text: aiVoiceText, voiceName: selectedVoice.voiceName, languageCode: selectedVoice.languageCode, emotion: hasEmotionAccess ? selectedEmotion : 'default' };
      const endpoint = isExternal ? `${API_BASE_URL}/api/sole-tts/generate-external` : `${API_BASE_URL}/api/sole-tts/generate`;

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}` },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const ct = res.headers.get('content-type');
        let msg = `HTTP error! status: ${res.status}`;
        if (ct?.includes('application/json')) { const d = await res.json(); msg = d.message || d.error || msg; }
        else { msg = await res.text() || msg; }
        throw new Error(msg);
      }

      const data = await res.json();
      setGeneratedAudio(`${CDN_URL}/${data.audioPath}`);
      fetchHistory();

      const count = generationCount + 1;
      setGenerationCount(count);
      if (userProfile?.role === 'BASIC') {
        if (count === 1) setTimeout(() => { setUpgradeModalType('first_gen'); setShowUpgradeModal(true); }, 4000);
        else if (count === 2) setTimeout(() => { setUpgradeModalType('repeat_gen'); setShowUpgradeModal(true); }, 3000);
        else if (count >= 3 && count % 2 === 1) setTimeout(() => { setUpgradeModalType('repeat_gen'); setShowUpgradeModal(true); }, 2000);
      }

      const usageRes = await fetch(`${API_BASE_URL}/api/sole-tts/usage`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
      if (usageRes.ok) setTtsUsage(await usageRes.json());

      setTimeout(() => {
        document.querySelector('.cfc-audio-output')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    } catch (err: any) {
      setError(err.message || 'Failed to generate audio.');
      setTimeout(() => { document.querySelector('.cfc-error-msg')?.scrollIntoView({ behavior: 'smooth', block: 'center' }); }, 100);
      setTimeout(() => setError(null), 10000);
    } finally { setIsGenerating(false); }
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
        link.download = `ai-voice-${Date.now()}.mp3`;

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
      const res = await fetch(`${API_BASE_URL}/api/sole-tts/history`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
      if (res.ok) {
        const data = await res.json();
        setGenerationHistory(data.history || []);
        setHasHistoryAccess(data.hasAccess);
      } else if (res.status === 403) { setHasHistoryAccess(false); setGenerationHistory([]); }
    } catch { console.error('History fetch failed'); } finally { setHistoryLoading(false); }
  };

  // ── Computed values ───────────────────────────────────────────────────────
  const maxCharsPerRequest = useMemo(() => (!isLoggedIn || !ttsUsage) ? 80 : ttsUsage.maxCharRequest || 80, [isLoggedIn, ttsUsage]);
  const limitsExceeded = useMemo(() => {
    if (!isLoggedIn || !ttsUsage) return false;
    return (ttsUsage.monthly.limit > 0 && ttsUsage.monthly.remaining <= 0) ||
           (ttsUsage.daily.limit > 0 && ttsUsage.daily.remaining <= 0);
  }, [isLoggedIn, ttsUsage]);
  const wouldExceedLimits = useMemo(() => {
    if (!isLoggedIn || !ttsUsage) return false;
    return (ttsUsage.monthly.limit > 0 && ttsUsage.monthly.remaining < aiVoiceText.length) ||
           (ttsUsage.daily.limit > 0 && ttsUsage.daily.remaining < aiVoiceText.length);
  }, [isLoggedIn, ttsUsage, aiVoiceText.length]);
  const hasEmotionAccess = useMemo(() => {
    if (!isLoggedIn || !ttsUsage) return false;
    return ttsUsage.monthly.limit > 2000 || ttsUsage.monthly.limit === -1;
  }, [isLoggedIn, ttsUsage]);
  const isEmotionBlocked = useMemo(() => !hasEmotionAccess && selectedVoice !== null && selectedEmotion !== 'default', [hasEmotionAccess, selectedVoice, selectedEmotion]);
  const disabledReason = useMemo((): string | null => {
    if (!isLoggedIn) return null;
    if (!aiVoiceText.trim()) return "Enter a script to generate";
    if (!selectedVoice) return "Select a voice first";
    if (isGenerating) return "Generating...";
    if (characterCount > maxCharsPerRequest) return `Exceeds ${maxCharsPerRequest.toLocaleString()} char limit`;
    if (wouldExceedLimits) return "Would exceed your plan limits";
    return null;
  }, [isLoggedIn, aiVoiceText, selectedVoice, isGenerating, characterCount, maxCharsPerRequest, wouldExceedLimits]);

  const handleTextChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => setAiVoiceText(e.target.value), []);
  const handleEmotionChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => setSelectedEmotion(e.target.value), []);
  const handleVoiceSelect = useCallback((voice: Voice) => setSelectedVoice(voice), []);
  const handleScriptSelect = useCallback((script: string) => {
    setAiVoiceText(script); setShowScriptTemplates(false);
    setTimeout(() => document.querySelector('.cfc-input-panel')?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 100);
  }, []);
  const scrollToGenerator = () => document.querySelector('.cfc-generator-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  // ─────────────────────────────────────────────────────────────────────────
  // RENDER
  // ─────────────────────────────────────────────────────────────────────────
  return (
    <div className="cfc-page">

      {/* ── Schema LD+JSON ──────────────────────────────────────────────── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebApplication",
            "@id": "https://scenith.in/tools/ai-voice-generation-for-creators#webapp",
            name: "Scenith AI Voice Generation for Creators",
            description: "The professional AI text-to-speech platform built for content creators, YouTubers, podcasters, TikTokers, and course creators. Generate studio-quality voiceovers in seconds.",
            url: "https://scenith.in/tools/ai-voice-generation-for-creators",
            applicationCategory: "MultimediaApplication",
            operatingSystem: "Web Browser",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" },
            featureList: ["40+ natural AI voices", "20+ languages", "Instant MP3 download", "Commercial use", "9 emotion presets for creators", "Faceless YouTube optimized"],
            author: { "@type": "Organization", "@id": "https://scenith.in/#organization", name: "Scenith" },
          },
          {
            "@type": "BreadcrumbList",
            "@id": "https://scenith.in/tools/ai-voice-generation-for-creators#breadcrumb",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://scenith.in" },
              { "@type": "ListItem", position: 2, name: "Tools", item: "https://scenith.in/tools" },
              { "@type": "ListItem", position: 3, name: "AI Voice Generation", item: "https://scenith.in/tools/ai-voice-generation" },
              { "@type": "ListItem", position: 4, name: "AI Voice for Creators", item: "https://scenith.in/tools/ai-voice-generation-for-creators" },
            ],
          },
          {
            "@type": "FAQPage",
            "@id": "https://scenith.in/tools/ai-voice-generation-for-creators#faq",
            mainEntity: [
              { "@type": "Question", name: "Can I use AI voice generation for YouTube monetization?", acceptedAnswer: { "@type": "Answer", text: "Yes. YouTube's monetization policies allow AI-generated voiceovers in videos, provided the overall content is original and adds genuine value. Millions of monetized faceless channels use AI narration as their primary audio source." } },
              { "@type": "Question", name: "What is the best AI voice for a faceless YouTube channel?", acceptedAnswer: { "@type": "Answer", text: "For faceless YouTube channels, a clear American or British English male or female voice in the 'Professional' or 'Announcer' tone tends to perform best. Use our voice preview feature to test 3-5 voices against your actual script before committing." } },
              { "@type": "Question", name: "How do content creators use AI voice generation?", acceptedAnswer: { "@type": "Answer", text: "Creators use AI voice tools to narrate YouTube videos without showing their face, generate podcast episodes at scale, dub content into multiple languages, produce course narrations, and create ad voiceovers — all without studio equipment or voice actors." } },
              { "@type": "Question", name: "Is AI voice generation free for creators?", acceptedAnswer: { "@type": "Answer", text: "Scenith offers a free tier with 600 characters per month and 150 per day — enough to test and produce short-form content. Creator plans start at ₹99/$5 per month for 10,000 characters/month, including emotion presets and generation history." } },
              { "@type": "Question", name: "What languages can I generate creator content in?", acceptedAnswer: { "@type": "Answer", text: "Our platform supports 20+ languages including English (US, UK, Australian, Indian), Spanish, French, German, Hindi, Mandarin, Portuguese, and more — giving creators instant multilingual content capability." } },
            ],
          },
        ],
      })}} />

      {/* ── Breadcrumb ─────────────────────────────────────────────────── */}
      <nav aria-label="Breadcrumb" className="cfc-breadcrumb">
        <ol itemScope itemType="https://schema.org/BreadcrumbList">
          {[
            { href: "/", name: "Home", pos: 1 },
            { href: "/tools", name: "Tools", pos: 2 },
            { href: "/tools/ai-voice-generation", name: "AI Voice Generation", pos: 3 },
          ].map((item) => (
            <li key={item.pos} itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <a href={item.href} itemProp="item"><span itemProp="name">{item.name}</span></a>
              <meta itemProp="position" content={String(item.pos)} />
            </li>
          ))}
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="name">AI Voice for Creators</span>
            <meta itemProp="position" content="4" />
          </li>
        </ol>
      </nav>

      {/* ── HERO ───────────────────────────────────────────────────────── */}
      <section className="cfc-hero" aria-label="Hero">
        <div className="cfc-hero-bg-grid" aria-hidden="true" />
        <div className="cfc-hero-orbs" aria-hidden="true">
          <span className="cfc-orb cfc-orb-1" />
          <span className="cfc-orb cfc-orb-2" />
          <span className="cfc-orb cfc-orb-3" />
        </div>

        <motion.div className="cfc-hero-inner" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: "easeOut" }}>
          <div className="cfc-hero-badge">
            <span className="cfc-badge-dot" />
            Built for Content Creators in 2026
          </div>

          <h1 className="cfc-hero-title">
            AI Voice Generation<br />
            <span className="cfc-title-gradient">for Creators</span>
          </h1>

          <p className="cfc-hero-sub">
            Stop paying voice actors. Stop fighting imposter syndrome on camera. Generate <strong>studio-quality AI voiceovers</strong> for YouTube, TikTok, podcasts, Reels, and online courses — in under 5 seconds. <strong>40+ natural voices. 20+ languages. Free MP3. Commercial rights included.</strong>
          </p>

          {/* Stats bar */}
          <div className="cfc-stats-bar">
            {CREATOR_STATS.map((s) => (
              <div key={s.label} className="cfc-stat-pill">
                <span className="cfc-stat-val">{s.val}</span>
                <span className="cfc-stat-label">{s.label}</span>
              </div>
            ))}
          </div>

          <div className="cfc-hero-cta-group">
            <button onClick={scrollToGenerator} className="cfc-btn-primary">
              Generate Your Creator Voice Free →
            </button>
            <a href="/pricing" className="cfc-btn-secondary">See Creator Plans</a>
          </div>

          <div className="cfc-platform-chips">
            {["YouTube ▶", "TikTok 📱", "Podcast 🎙️", "Reels ✨", "Courses 🎓", "Ads 💰"].map((p) => (
              <span key={p} className="cfc-platform-chip">{p}</span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── GENERATOR SECTION ──────────────────────────────────────────── */}
      <section className="cfc-generator-section" id="generator" aria-label="AI Voice Generator">
        <div className="cfc-generator-header">
          <h2>Generate Your AI Creator Voice</h2>
          <p>The same powerful engine used by 1,500+ active creators — optimized for scripts, narrations, and short-form hooks.</p>
        </div>

        <div className="cfc-generator-layout">
          {/* ── LEFT: Input panel ──────────────────────────────────────── */}
          <div className="cfc-input-panel">

            {/* Script input wrapper */}
            <div className="cfc-script-box">
              <div className="cfc-script-box-header">
                <div className="cfc-script-box-left">
                  <span className="cfc-script-sparkle">✍️</span>
                  <h3>Your Creator Script</h3>
                </div>
                <div className="cfc-script-box-right">
                  {isLoggedIn && (
                    <button className="cfc-templates-trigger" onClick={() => setShowScriptTemplates(!showScriptTemplates)}>
                      📝 Templates
                    </button>
                  )}
                  <span className={`cfc-char-badge ${characterCount > maxCharsPerRequest ? 'over' : ''}`}>
                    {characterCount.toLocaleString()} / {maxCharsPerRequest.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="cfc-textarea-wrap">
                <textarea
                  value={aiVoiceText}
                  onChange={handleTextChange}
                  placeholder="✨ Paste your script here — YouTube hook, podcast intro, TikTok voiceover, course narration..."
                  className={`cfc-textarea ${characterCount > maxCharsPerRequest ? 'cfc-textarea-over' : ''}`}
                  disabled={limitsExceeded}
                  aria-label="Script input for AI voice generation"
                />

                {isLoggedIn && limitsExceeded && (
                  <div className="cfc-textarea-overlay">
                    <span className="cfc-overlay-icon">⚠️</span>
                    <h4>Character Limit Reached</h4>
                    <p>You've used all your {userProfile.role} plan characters</p>
                    <a href="/pricing" className="cfc-overlay-cta">Upgrade Now</a>
                  </div>
                )}

                {!limitsExceeded && aiVoiceText.length === 0 && (
                  <div className="cfc-textarea-hint">
                    <span>💡 Add commas for natural pauses · Max {maxCharsPerRequest.toLocaleString()} chars · Commercial use included</span>
                  </div>
                )}

                {isLoggedIn && characterCount > maxCharsPerRequest && (
                  <div className="cfc-char-warning">
                    ⚠️ <strong>Over limit by {(characterCount - maxCharsPerRequest).toLocaleString()} chars.</strong> Shorten your script or upgrade.
                  </div>
                )}
              </div>

              <div className="cfc-script-footer">
                <span>📝 {aiVoiceText.trim().split(/\s+/).filter(w => w.length > 0).length} words</span>
                <span>⏱️ ~{Math.ceil(aiVoiceText.trim().split(/\s+/).filter(w => w.length > 0).length / 150)} min audio</span>
                <span>🎙️ Ready to generate</span>
              </div>
            </div>

            {/* Emotion selector */}
            <div className="cfc-emotion-section">
              <div className="cfc-emotion-row">
                <label htmlFor="cfc-emotion" className="cfc-emotion-label">🎭 Voice Emotion:</label>
                <select id="cfc-emotion" value={selectedEmotion} onChange={handleEmotionChange} className="cfc-emotion-select" aria-label="Select voice emotion">
                  {EMOTION_PRESETS.map((e) => (
                    <option key={e.value} value={e.value}>{e.icon} {e.label}</option>
                  ))}
                </select>
                <button
                  className={`cfc-emotion-preview ${isPlayingEmotionPreview ? 'active' : ''}`}
                  onClick={() => {
                    if (!selectedVoice) { setError('Select a voice first'); setTimeout(() => setError(null), 3000); return; }
                    handlePlayDemo(selectedVoice, true);
                  }}
                  disabled={!selectedVoice || isGenerating}
                  aria-label="Preview emotion"
                >
                  {isPlayingEmotionPreview ? '⏸ Playing...' : '▶ Preview'}
                </button>
              </div>

              {selectedEmotion !== 'default' && (
                <div className="cfc-emotion-info">
                  <strong>{EMOTION_PRESETS.find(e => e.value === selectedEmotion)?.icon} {EMOTION_PRESETS.find(e => e.value === selectedEmotion)?.label}:</strong>{' '}
                  {EMOTION_PRESETS.find(e => e.value === selectedEmotion)?.description}
                </div>
              )}

              {!hasEmotionAccess && (
                <div className="cfc-emotion-locked">
                  <span className="cfc-locked-tag">🔒 Premium</span>
                  <p>Emotions require <strong>Creator Spark</strong> or <strong>Creator Odyssey</strong></p>
                  <a href="/pricing">Upgrade →</a>
                </div>
              )}
            </div>

            {/* Usage bar */}
            {isLoggedIn && ttsUsage && (
              <div className="cfc-usage-card">
                {ttsUsage.daily.limit > 0 && ttsUsage.monthly.limit > 0 && ttsUsage.daily.remaining < ttsUsage.monthly.remaining && (
                  <div className="cfc-usage-row">
                    <span className="cfc-usage-label today">⚠️ Today's limit</span>
                    <div className="cfc-usage-track">
                      <div className={`cfc-usage-fill ${(ttsUsage.daily.used / ttsUsage.daily.limit) >= 0.95 ? 'crit' : (ttsUsage.daily.used / ttsUsage.daily.limit) >= 0.8 ? 'warn' : ''}`}
                        style={{ width: `${(ttsUsage.daily.used / ttsUsage.daily.limit) * 100}%` }} />
                    </div>
                    <span className="cfc-usage-text"><strong>{ttsUsage.daily.remaining.toLocaleString()}</strong> chars left today</span>
                  </div>
                )}
                <div className="cfc-usage-row">
                  <span className="cfc-usage-label">📅 Monthly</span>
                  {ttsUsage.monthly.limit === -1 ? (
                    <span className="cfc-usage-text"><strong>Unlimited</strong> — no monthly limit</span>
                  ) : (
                    <>
                      <div className="cfc-usage-track">
                        <div className={`cfc-usage-fill ${(ttsUsage.monthly.used / ttsUsage.monthly.limit) >= 0.95 ? 'crit' : (ttsUsage.monthly.used / ttsUsage.monthly.limit) >= 0.8 ? 'warn' : ''}`}
                          style={{ width: `${(ttsUsage.monthly.used / ttsUsage.monthly.limit) * 100}%` }} />
                      </div>
                      <span className="cfc-usage-text"><strong>{ttsUsage.monthly.remaining.toLocaleString()}</strong> / {ttsUsage.monthly.limit.toLocaleString()} chars left</span>
                    </>
                  )}
                </div>
                {ttsUsage.role === 'BASIC' && (
                  <a href="/pricing" className="cfc-usage-upgrade">🚀 Get 10× more characters with Creator Lite →</a>
                )}
              </div>
            )}

            {showLimitModal && (
              <div className="cfc-inline-limit">
                <div className="cfc-inline-limit-inner">
                  <span>⚠️</span>
                  <div>
                    <strong>You're running low on characters!</strong>
                    <p>Upgrade to keep creating without interruptions.</p>
                  </div>
                  <div className="cfc-inline-limit-btns">
                    <a href="/pricing" className="cfc-btn-primary small">Upgrade</a>
                    <button onClick={() => setShowLimitModal(false)}>Later</button>
                  </div>
                </div>
              </div>
            )}

            {/* Generate button */}
            {limitsExceeded ? (
              <a href="/pricing" className="cfc-btn-limit">🚀 Upgrade to Keep Generating</a>
            ) : (
              <div className="cfc-gen-btn-wrap">
                <button
                  className="cfc-btn-generate"
                  onClick={() => { if (isEmotionBlocked) { setShowEmotionUpgradePopup(true); return; } handleGenerateAiAudio(); }}
                  disabled={isLoggedIn && (!aiVoiceText.trim() || !selectedVoice || isGenerating || characterCount > maxCharsPerRequest || wouldExceedLimits)}
                  aria-label="Generate AI voice"
                >
                  {isGenerating ? (
                    <><span className="cfc-spinner" />Generating your voice...</>
                  ) : isLoggedIn ? (
                    <>⚡ Generate AI Voice</>
                  ) : (
                    <>Login to Generate</>
                  )}
                </button>
                {isLoggedIn && disabledReason && <div className="cfc-btn-tooltip">{disabledReason}</div>}
              </div>
            )}

            {/* Audio output */}
            {generatedAudio && (
              <motion.div className="cfc-audio-output" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <div className="cfc-audio-output-header">
                  <span className="cfc-audio-ready-icon">🎧</span>
                  <div>
                    <h3>Your Creator Voiceover is Ready!</h3>
                    <p>Listen, then drop it straight into your editor.</p>
                  </div>
                </div>
                <CustomAudioPlayer src={generatedAudio} />
                <button onClick={handleDownload} className="cfc-btn-download">
                  📥 Download MP3 (Free, Commercial Use)
                </button>
                {downloadSuccess && userProfile.role === 'BASIC' && (
                  <motion.div className="cfc-download-success" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    ✅ <strong>Downloaded!</strong> Want longer scripts & more voices? <a href="/pricing">Upgrade →</a>
                  </motion.div>
                )}
              </motion.div>
            )}

            {/* Script Templates */}
            {isLoggedIn && showScriptTemplates && (
              <motion.div className="cfc-templates-panel" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
                <div className="cfc-templates-panel-header">
                  <h3>🎬 Creator Script Templates</h3>
                  <button onClick={() => setShowScriptTemplates(false)} aria-label="Close templates"><FaTimes /></button>
                </div>
                <div className="cfc-cat-filters">
                  {["All", ...new Set(CREATOR_SCRIPT_TEMPLATES.map(t => t.category))].map(cat => (
                    <button key={cat} className={`cfc-cat-btn ${selectedCategory === cat ? 'active' : ''}`} onClick={() => setSelectedCategory(cat)}>
                      {cat}
                    </button>
                  ))}
                </div>
                <div className="cfc-templates-grid">
                  {CREATOR_SCRIPT_TEMPLATES.filter(t => selectedCategory === 'All' || t.category === selectedCategory).map(t => (
                    <div key={t.id} className="cfc-template-card" onClick={() => handleScriptSelect(t.script)}>
                      <div className="cfc-template-card-top">
                        <span>{t.icon}</span>
                        <div>
                          <strong>{t.title}</strong>
                          <span className="cfc-template-cat">{t.category}</span>
                        </div>
                      </div>
                      <p>{t.script.slice(0, 100)}...</p>
                      <button className="cfc-template-use">✨ Use Script</button>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* History */}
            {isLoggedIn && (
              <div className="cfc-history">
                {!hasHistoryAccess ? (
                  <div className="cfc-history-locked">
                    <span>🔒</span>
                    <p>Upgrade to unlock generation history</p>
                    <a href="/pricing">Unlock History</a>
                  </div>
                ) : (
                  <>
                    <button className="cfc-history-toggle" onClick={() => setShowHistory(!showHistory)}>
                      {showHistory ? '▼' : '▶'} Past Generations ({generationHistory.length})
                    </button>
                    {showHistory && (
                      <div className="cfc-history-grid">
                        {historyLoading ? (
                          <div className="cfc-history-loading"><div className="cfc-spinner" /><p>Loading...</p></div>
                        ) : generationHistory.length === 0 ? (
                          <div className="cfc-history-empty"><span>🎤</span><p>No generations yet</p></div>
                        ) : generationHistory.map((item) => (
                          <div key={item.id} className="cfc-history-item">
                            <span className="cfc-history-date">{new Date(item.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</span>
                            <CustomAudioPlayer src={`${CDN_URL}/${item.audioPath}`} />
                            <button className="cfc-history-dl" onClick={async () => {
                              const r = await fetch(`${CDN_URL}/${item.audioPath}`);
                              const b = await r.blob();
                              const url = window.URL.createObjectURL(b);
                              const a = document.createElement('a'); a.href = url; a.download = `ai-voice-${item.id}.mp3`;
                              document.body.appendChild(a); a.click(); document.body.removeChild(a); window.URL.revokeObjectURL(url);
                            }}>📥 Download</button>
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            )}
          </div>

          {/* ── RIGHT: Voice selector ──────────────────────────────────── */}
          <div className="cfc-voice-panel">
            <div className="cfc-voice-panel-header">
              <h3>Choose Your Voice</h3>
              <div className="cfc-provider-tabs">
                {(['GOOGLE', 'OPENAI', 'AZURE'] as const).map(p => (
                  <button key={p}
                    className={`cfc-provider-tab ${selectedProvider === p ? 'active' : ''} ${p !== 'GOOGLE' && !ttsUsage?.externalProviders?.hasAccess ? 'locked' : ''}`}
                    onClick={() => { setSelectedProvider(p); setSelectedVoice(null); }}
                    title={p !== 'GOOGLE' && !ttsUsage?.externalProviders?.hasAccess ? 'Requires paid plan' : ''}
                  >
                    {p === 'GOOGLE' && '🔵 '}{p === 'OPENAI' && '🟢 '}{p === 'AZURE' && '🔷 '}
                    {p.charAt(0) + p.slice(1).toLowerCase()}
                    {p !== 'GOOGLE' && !ttsUsage?.externalProviders?.hasAccess && <span className="cfc-tab-crown">👑</span>}
                  </button>
                ))}
              </div>
              {selectedProvider === 'GOOGLE' && (
                <div className="cfc-voice-filters">
                  <select value={filterLanguage} onChange={e => setFilterLanguage(e.target.value)} className="cfc-filter-sel" aria-label="Filter by language">
                    <option value="">All Languages</option>
                    {uniqueLanguages.map(l => <option key={l} value={l}>{l}</option>)}
                  </select>
                  <select value={filterGender} onChange={e => setFilterGender(e.target.value)} className="cfc-filter-sel" aria-label="Filter by gender">
                    <option value="">All Genders</option>
                    {uniqueGenders.map(g => <option key={g} value={g}>{g}</option>)}
                  </select>
                </div>
              )}
            </div>

            <div className="cfc-voice-list-scroll">
              {selectedProvider === 'GOOGLE' ? (
                voices.length === 0 ? (
                  <div className="cfc-voice-loading"><div className="cfc-spinner" /><p>Loading voices...</p></div>
                ) : (
                  <div className="cfc-voice-list">
                    {voices.map(voice => (
                      <div
                        key={`${voice.voiceName}-${voice.voiceStyle || 'default'}`}
                        className={`cfc-voice-item ${selectedVoice?.voiceName === voice.voiceName && selectedVoice?.voiceStyle === voice.voiceStyle ? 'selected' : ''}`}
                        role="button" tabIndex={0}
                        aria-label={`Select voice ${voice.humanName || voice.voiceName}`}
                      >
                        <img src={voice.profileUrl} alt={`${voice.humanName || voice.voiceName}`} className="cfc-voice-avatar" onClick={() => handleVoiceSelect(voice)} />
                        <div className="cfc-voice-info" onClick={() => handleVoiceSelect(voice)}>
                          <div className="cfc-voice-name">
                            {voice.humanName || voice.voiceName}
                            {voice.voiceStyle && <span className="cfc-voice-style">{voice.voiceStyle}</span>}
                          </div>
                          <div className="cfc-voice-meta">{voice.language} · {voice.gender}</div>
                        </div>
                        <button className="cfc-demo-btn" onClick={e => { e.stopPropagation(); handlePlayDemo(voice); }} aria-label={`Preview ${voice.humanName || voice.voiceName}`}>
                          {playingDemo === `${voice.voiceName}-${voice.voiceStyle || 'default'}` ? '⏸' : '▶'}
                        </button>
                      </div>
                    ))}
                  </div>
                )
              ) : (
                externalVoicesLoading ? (
                  <div className="cfc-voice-loading"><div className="cfc-spinner" /><p>Loading voices...</p></div>
                ) : externalVoices.length === 0 ? (
                  <div className="cfc-voice-loading"><p>No voices found.</p></div>
                ) : (
                  <div className="cfc-voice-list">
                    {externalVoices.map(voice => (
                      <div
                        key={`${voice.provider}-${voice.voiceId}`}
                        className={`cfc-voice-item ${selectedVoice?.voiceId === voice.voiceId ? 'selected' : ''}`}
                        role="button" tabIndex={0}
                        aria-label={`Select voice ${voice.humanName}`}
                      >
                        <div className="cfc-voice-avatar-placeholder" onClick={() => handleVoiceSelect(voice as Voice)}>
                          {voice.gender === 'Female' ? '👩' : voice.gender === 'Male' ? '👨' : '🧑'}
                        </div>
                        <div className="cfc-voice-info" onClick={() => handleVoiceSelect(voice as Voice)}>
                          <div className="cfc-voice-name">{voice.humanName}</div>
                          <div className="cfc-voice-meta">{voice.language} · {voice.gender}{(voice as any).description && ` · ${(voice as any).description}`}</div>
                        </div>
                        <button className="cfc-demo-btn" onClick={e => { e.stopPropagation(); handlePlayDemo(voice as Voice); }} aria-label={`Preview ${voice.humanName}`}>
                          {playingDemo === `${voice.voiceName}-${voice.voiceStyle || 'default'}` ? '⏸' : '▶'}
                        </button>
                      </div>
                    ))}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Error display ───────────────────────────────────────────────── */}
      {error && (
        <motion.div className="cfc-error-msg" role="alert" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
          ⚠️ {error}
        </motion.div>
      )}

      {/* ── PLATFORM BREAKDOWN ─────────────────────────────────────────── */}
      <section className="cfc-platforms-section" id="platforms" aria-labelledby="platforms-title">
        <div className="cfc-section-intro">
          <h2 id="platforms-title">The AI Voice Stack Every Creator Needs in 2026</h2>
          <p>Your platform. Your content type. Your audience. Here's exactly how creators are using AI voice generation across every major channel right now.</p>
        </div>
        <div className="cfc-platforms-grid">
          {PLATFORM_CARDS.map((card) => (
            <article key={card.platform} className="cfc-platform-card">
              <div className="cfc-platform-card-top">
                <span className="cfc-platform-icon">{card.icon}</span>
                <div>
                  <h3>{card.platform}</h3>
                  <span className="cfc-platform-stat">{card.stat}</span>
                </div>
              </div>
              <h4>{card.headline}</h4>
              <p>{card.body}</p>
              <ul className="cfc-platform-tips">
                {card.tips.map((tip, i) => <li key={i}>{tip}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* ── WORKFLOW SECTION ───────────────────────────────────────────── */}
      <section className="cfc-workflow-section" id="how-it-works" aria-labelledby="workflow-title">
        <div className="cfc-section-intro light">
          <h2 id="workflow-title">From Script to Publish: The Creator Workflow</h2>
          <p>Five steps. No studio. No scheduling. No voice actors. Just your script and the most natural AI voices available today.</p>
        </div>
        <div className="cfc-workflow-steps">
          {WORKFLOW_STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              className="cfc-workflow-step"
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="cfc-step-num">{step.num}</div>
              <div className="cfc-step-icon">{step.icon}</div>
              <div className="cfc-step-content">
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="cfc-workflow-cta">
          <button onClick={scrollToGenerator} className="cfc-btn-primary large">Start Your First Generation Free →</button>
        </div>
      </section>

      {/* ── NICHE VOICE GUIDE ──────────────────────────────────────────── */}
      <section className="cfc-niche-section" id="voice-guide" aria-labelledby="niche-title">
        <div className="cfc-section-intro">
          <h2 id="niche-title">Which AI Voice Works Best for Your Creator Niche?</h2>
          <p>We analyzed thousands of top-performing videos and audio content to build this evidence-based voice matching guide. Your niche determines your optimal voice profile.</p>
        </div>
        <div className="cfc-niche-table-wrap">
          <table className="cfc-niche-table" aria-label="Creator niche voice guide">
            <thead>
              <tr>
                <th>Creator Niche</th>
                <th>Recommended Voice</th>
                <th>Best Emotion Preset</th>
                <th>Why It Works</th>
              </tr>
            </thead>
            <tbody>
              {NICHE_VOICE_GUIDE.map((row) => (
                <tr key={row.niche}>
                  <td><strong>{row.niche}</strong></td>
                  <td>{row.voice}</td>
                  <td><span className="cfc-emotion-chip">{row.emotion}</span></td>
                  <td>{row.why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="cfc-niche-note">
          <p>💡 <strong>Pro tip:</strong> These are starting points. Always A/B test with your actual audience. Use our voice preview feature to test 3–4 voices against the same 30-word hook before you commit to production.</p>
        </div>
      </section>

      {/* ── DEEP DIVE: Why AI Voice for Creators ────────────────────────── */}
      <section className="cfc-deep-dive-section" id="why-ai-voice" aria-labelledby="why-title">
        <div className="cfc-section-intro">
          <h2 id="why-title">Why Every Serious Creator is Switching to AI Voice in 2026</h2>
          <p>This isn't a trend. It's a structural shift in how content gets made — and the creators who understand it are compounding their output while others are stuck in the studio booking loop.</p>
        </div>

        <div className="cfc-deep-articles">

          <article className="cfc-deep-article">
            <h3>📈 The Economics of AI Voice vs. Professional Recording</h3>
            <p>A professional voice actor charges between $100 and $500 per hour of finished audio — and that's before studio booking, editing, revision rounds, and the time cost of briefing talent. For a 10-minute YouTube video, a creator might spend $200–$800 on narration alone, every single time they want to publish.</p>
            <p>AI voice generation removes this entirely. For free, you get 600 characters per month. For less than the cost of a single voice actor session per year, you get unlimited monthly generations, longer scripts, emotion presets, and generation history. The math is not subtle. For creators publishing even weekly, the annual savings run into thousands of dollars.</p>
            <p>But the more important number is <strong>time</strong>. A voice actor session requires scheduling days or weeks in advance. AI voice generates in under 5 seconds. That means the gap between "script ready" and "video uploadable" goes from days to minutes. At publishing velocity, this compounds in ways that straight economics can't capture.</p>
            <div className="cfc-deep-stat-row">
              <div className="cfc-deep-stat"><span>$0</span><label>per AI generation</label></div>
              <div className="cfc-deep-stat"><span>~5s</span><label>generation time</label></div>
              <div className="cfc-deep-stat"><span>∞</span><label>revisions</label></div>
              <div className="cfc-deep-stat"><span>100%</span><label>commercial rights</label></div>
            </div>
          </article>

          <article className="cfc-deep-article">
            <h3>🎬 The Rise of the Faceless Creator Economy</h3>
            <p>In 2026, the fastest-growing content segment on YouTube is faceless channels — channels with zero on-camera presence, powered entirely by AI narration, stock footage or screen recordings, and thoughtful scripting. These channels consistently outperform in watch time metrics because viewers show up for the information, not the personality.</p>
            <p>Finance breakdowns. True crime recaps. Historical documentaries. Tech reviews. Motivational compilations. Science explainers. These niches have been owned by faceless creators for years, and the barrier to entry has never been lower. The only remaining skill moat is scripting — and even that is being augmented by AI writing tools.</p>
            <p>What separates good faceless channels from great ones is <strong>voice quality</strong>. A robotic, mechanical TTS voice drives viewers away at the 30-second mark. A natural, expressive AI voice — the kind our system generates — holds attention through full 15-minute videos. That difference is the difference between a monetized channel and an abandoned one.</p>
            <p>Our voicing engine was specifically tested and optimized for long-form narration. We've paid attention to where listeners disengage — hard consonants, unnatural pacing, artificial stress patterns — and engineered against them. The result is AI voice that passes the "eyes closed" test with audiences who aren't trying to detect it.</p>
          </article>

          <article className="cfc-deep-article">
            <h3>🌍 Multilingual Content: The Creator's Last Unlocked Frontier</h3>
            <p>English-only content reaches roughly 1.5 billion potential viewers. The same content dubbed into Spanish, Portuguese, Hindi, and Mandarin reaches over 4 billion more. The creators who understood this five years ago are now running channels in 5+ languages with minimal extra effort.</p>
            <p>Traditionally, multilingual content required hiring separate voice actors for each language, which meant separate budgets, separate revisions, and separate production timelines. For most independent creators, this was simply not viable.</p>
            <p>AI voice generation in 20+ languages changes this equation entirely. Generate your original script in English. Translate it (or use an AI translation tool). Generate the audio in Spanish, Hindi, French, and Mandarin in the same session. Upload language-specific versions or use YouTube's dubbing feature. Your one video now reaches five times the potential audience for the same production effort.</p>
            <p>This is not a hypothetical. Creators in our community have reported <strong>3–5x audience growth</strong> within 60 days of launching multilingual versions of their existing top-performing videos. The content was already made. The AI voice was the only additional cost.</p>
          </article>

          <article className="cfc-deep-article">
            <h3>🎙️ Why Podcast Creators Specifically Can't Afford to Ignore This</h3>
            <p>Podcasting has two dominant failure modes: burnout and inconsistency. Most podcasters start strong, publish weekly for two months, then fall off. The production overhead — recording, editing out mistakes, cleaning audio, exporting — creates friction that compounds into inertia.</p>
            <p>AI voice narration doesn't eliminate all podcast production, but it removes the recording friction entirely for certain show formats. Solo commentary shows, educational series, narrated fiction, newsletter podcasts, and "read aloud" news shows can all be produced with zero recording equipment using AI voice.</p>
            <p>The quality ceiling of AI narration has risen dramatically. Listeners evaluating AI vs. human narration in blind tests increasingly fail to distinguish them when the script is well-written. For podcast categories built on information density rather than personality — business, finance, technology, health — this means the format is fully viable today, not someday.</p>
            <p>Our 'Professional' and 'Calm' emotion presets were specifically calibrated for podcast delivery lengths. They maintain natural energy and variation across 20+ minute scripts in ways that other TTS systems flatten out.</p>
          </article>

          <article className="cfc-deep-article">
            <h3>⚡ Short-Form Content at Speed: TikTok, Reels, and YouTube Shorts</h3>
            <p>Short-form content has a different relationship with voice than long-form. Where YouTube essays need sustained credibility, TikTok hooks need instant attention. The voice has less than 2 seconds to signal "this is worth your time" before a viewer swipes.</p>
            <p>This means short-form creators need more voice options, not fewer. A hook for a finance tip needs a different energy than a hook for a fitness challenge. Our 'Enthusiastic' and 'Happy' presets were specifically tested against short-form content to optimize for that critical first impression.</p>
            <p>The other short-form advantage is iteration speed. A creator who can generate 10 voice variations of the same hook in 5 minutes — testing energy levels, pacing, emphasis — and pick the strongest before shooting has a structural advantage over one who records once and commits. AI voice makes this A/B testing loop free and instant.</p>
            <p>We've seen creators in our community report engagement rate improvements of 20–40% after switching from recorded voice to AI voice — not because AI sounds better in isolation, but because they were able to iterate to a better version faster than their recording workflow allowed.</p>
          </article>

          <article className="cfc-deep-article">
            <h3>🎓 Course Creators: The ROI Math Is Undeniable</h3>
            <p>An average online course has 4–6 hours of narrated content, broken into 50–80 modules. Recording this in a home studio takes 20–40 hours across multiple sessions. Editing takes another 15–25 hours. For a creator with a day job or an active publishing schedule, this timeline stretches to months.</p>
            <p>AI narration compresses this to hours. Write your module scripts (the work you were going to do anyway), paste them in, choose a voice, generate, done. A 5-hour course can be narrated in an afternoon rather than a quarter.</p>
            <p>The other major course creator benefit is <strong>updates</strong>. When industry information changes, or you want to improve a module, re-recording even a single slide narration with a human voice requires re-booking studio time, matching the original recording quality, and spending a full editing session on two minutes of audio. With AI voice, you change the text and click generate. The update is done before you finish your coffee.</p>
            <p>Course platforms like Teachable, Kajabi, and Thinkific have no restrictions on AI-narrated content. Major course marketplaces like Udemy evaluate content quality — and consistent, clear AI narration scores better than inconsistent home recording quality. The bar isn't "human vs. AI." It's "good quality vs. bad quality." Our engine clears the good quality bar comfortably.</p>
          </article>

          <article className="cfc-deep-article">
            <h3>🔊 The Emotion Preset Advantage: Why Flat TTS Fails and How to Fix It</h3>
            <p>The most common criticism of AI voice is that it "sounds robotic." This criticism was accurate for TTS systems built before 2022. It's significantly less accurate today — and for creators using emotion presets, it's largely irrelevant.</p>
            <p>Emotion presets work by modifying the underlying synthesis parameters — speaking rate, pitch variation range, emphasis weighting, pause duration, and volume envelope — to match the emotional signature of human speech in that register. The result is AI voice that doesn't just say the right words, but delivers them with appropriate human feeling.</p>
            <p>Consider the difference between "Enthusiastic" and "Professional" delivery of the same sentence: "This strategy has been used by every major brand in the industry." In Enthusiastic mode, this lands as exciting, forward-leaning, worth paying attention to. In Professional mode, it lands as authoritative, substantiated, credible. Same words. Opposite audience response. Different business outcomes.</p>
            <p>Creators who understand this don't just pick a voice — they pick a voice and an emotion and test both against their target audience's response. Our platform makes this free and instant. Pick the emotion. Preview with your actual script. Generate. Decide.</p>
            <p>Current emotion-unlocked presets: Default, Happy/Excited, Calm/Relaxed, Angry/Intense, Sad/Somber, Announcer, Meditation, Enthusiastic, and Professional. Each with documented use cases, optimal script formats, and audience pairing recommendations.</p>
          </article>

        </div>
      </section>

      {/* ── CREATOR TYPES DETAIL ────────────────────────────────────────── */}
      <section className="cfc-creator-types" id="creator-types" aria-labelledby="ct-title">
        <div className="cfc-section-intro">
          <h2 id="ct-title">Built for Every Type of Creator</h2>
          <p>Whether you have 100 subscribers or 1 million, AI voice generation scales with your ambitions.</p>
        </div>
        <div className="cfc-creator-types-grid">
          {[
            { emoji: "🎬", title: "YouTubers", sub: "Faceless & On-Camera", detail: "Narrate documentaries, tutorials, and explainer videos. Generate multilingual dubs for international growth. A/B test voice styles against your audience's retention curves. Boost upload frequency without sacrificing quality." },
            { emoji: "🎙️", title: "Podcasters", sub: "Solo, Interview & Narrative", detail: "Launch a narrated show with zero equipment. Generate episode summaries, promo clips, and trailer audio. Maintain perfect consistency across seasons. Create spin-off shows in new languages instantly." },
            { emoji: "📱", title: "Short-Form Creators", sub: "TikTok, Reels & Shorts", detail: "Generate 10 hook variations in 2 minutes. Test different emotional tones before shooting. Create accessible, captioned content that works with sound off or on. Scale your content volume 10x." },
            { emoji: "🎓", title: "Course Creators", sub: "Teachable, Kajabi, Udemy", detail: "Narrate 50 modules in an afternoon. Update single lessons without re-recording full sections. Launch courses in 5 languages. Keep students engaged with consistent, studio-quality delivery from start to finish." },
            { emoji: "✍️", title: "Newsletter Writers", sub: "Substack & Email Creators", detail: "Convert your newsletter into an audio version automatically. Reach subscribers who prefer listening. Build a new content touchpoint without writing new content. Increase per-subscriber value." },
            { emoji: "💼", title: "Agency & Brand Creators", sub: "Freelancers & Studios", detail: "Deliver client voiceovers at 10x normal speed. Generate first drafts instantly, refine with clients, export commercially. Handle multilingual campaigns across 20+ language markets." },
          ].map((type) => (
            <div key={type.title} className="cfc-creator-type-card">
              <div className="cfc-ct-emoji">{type.emoji}</div>
              <h3>{type.title}</h3>
              <span className="cfc-ct-sub">{type.sub}</span>
              <p>{type.detail}</p>
              <button onClick={scrollToGenerator} className="cfc-ct-cta">Generate for {type.title.replace('s', '')} →</button>
            </div>
          ))}
        </div>
      </section>

      {/* ── COMPARISON: AI vs Traditional ──────────────────────────────── */}
      <section className="cfc-vs-section" id="comparison" aria-labelledby="vs-title">
        <div className="cfc-section-intro">
          <h2 id="vs-title">AI Voice vs. Traditional Recording: The Creator's Real Comparison</h2>
          <p>Not just cost. Time, flexibility, consistency, revision speed, multilingual capability — here's every dimension that matters to a working creator.</p>
        </div>
        <div className="cfc-vs-table-wrap">
          <table className="cfc-vs-table">
            <thead>
              <tr>
                <th>What Matters to Creators</th>
                <th className="cfc-th-ai">✅ AI Voice (Scenith)</th>
                <th className="cfc-th-trad">Traditional Recording</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Cost per upload", "Free – $5/mo unlimited", "$100–$500 per session"],
                ["Time from script to audio", "Under 5 seconds", "Days to weeks"],
                ["Revision turnaround", "Instant — change text, regenerate", "$50–$200 per re-record"],
                ["Multilingual versions", "20+ languages, same session", "Separate talent per language"],
                ["Voice consistency", "100% identical every time", "Variable by session/environment"],
                ["Upload frequency", "Daily if needed", "Limited by booking availability"],
                ["Commercial rights", "Full rights included, no attribution", "Negotiated per project"],
                ["Emotion/tone control", "9 presets, one click", "Requires directing, re-recording"],
                ["A/B testing voice", "Free, generate variants in minutes", "Expensive, slow"],
                ["Short-form hooks", "10 variations in 2 minutes", "One take per booking"],
                ["Course update speed", "Change text, regenerate instantly", "Full re-book required"],
                ["Equipment required", "None — browser only", "Microphone, acoustic room, software"],
              ].map(([feature, ai, trad]) => (
                <tr key={feature}>
                  <td><strong>{feature}</strong></td>
                  <td className="cfc-td-ai">{ai}</td>
                  <td className="cfc-td-trad">{trad}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────── */}
      <section className="cfc-faq-section" id="faq" aria-labelledby="faq-title">
        <div className="cfc-section-intro">
          <h2 id="faq-title">Frequently Asked Questions: AI Voice for Creators</h2>
          <p>Real questions from real creators. Answered with specificity, not marketing fluff.</p>
        </div>
        <div className="cfc-faq-grid">
          {[
            {
              q: "Can I monetize YouTube videos with AI voice narration?",
              a: "Yes. YouTube's monetization policy does not prohibit AI-generated audio. The requirement is that the overall content provides genuine value and is not purely automated. Channels with AI narration, original scripts, and real editing pass the YPP review regularly. Thousands of monetized faceless channels operate entirely on AI narration today."
            },
            {
              q: "Will viewers or listeners be able to tell it's AI?",
              a: "With our neural voice engine, most audiences cannot reliably distinguish AI from human narration in blind tests — especially when the script is well-written and the correct emotion preset is applied. The voices that fail detection tests are those with unnatural pacing or mechanical emphasis. Our system is specifically engineered against those patterns."
            },
            {
              q: "How many characters do I get for free?",
              a: "The free BASIC plan includes 600 characters per month with a 150 character daily limit. A typical 60-second YouTube intro runs about 120–150 words, or roughly 750–900 characters. This means the free tier is suitable for testing and short-form content. Creator Lite (₹99/$5/mo) gives 10,000 characters/month — enough for 10–15 full video narrations monthly."
            },
            {
              q: "What's the best voice for a documentary-style YouTube channel?",
              a: "For documentary-style content, use a deep male or clear female voice in American or British English. Apply the 'Announcer' emotion preset for authority, or 'Professional' for a more measured tone. The key is consistency — once you find a voice that fits your brand, use it for every video so your channel builds a recognizable audio identity."
            },
            {
              q: "Can I use the generated audio in paid courses or sold content?",
              a: "Yes. All audio generated with Scenith comes with full commercial use rights. You can include it in paid YouTube channels, sold online courses, client deliverables, Udemy courses, sponsored content, and any other commercial application. No attribution is required."
            },
            {
              q: "Does the emotion preset affect generation speed?",
              a: "No. Emotion presets modify synthesis parameters during generation and add zero latency. All voices — regardless of emotion setting — generate in under 5 seconds. You're not paying a speed cost for better delivery."
            },
            {
              q: "Can I generate the same script in multiple languages?",
              a: "Yes, and this is one of the highest-ROI things you can do as a creator. Write your script in English, translate it (using any translation tool), then generate audio in Spanish, Hindi, French, Mandarin, or any of our 20+ supported languages. Each takes under 5 seconds. Many creators launch multilingual channels from their top-performing single-language content."
            },
            {
              q: "How do I choose between Google, OpenAI, and Azure voices?",
              a: "Google voices are available on all plans and offer the widest language coverage. OpenAI voices (access requires a paid plan) tend to excel at expressive, conversational English delivery — particularly suited for short-form and podcast content. Azure voices offer excellent multilingual consistency with particularly strong European language performance. Try previewing the same 30-word script across all three to hear the difference firsthand."
            },
            {
              q: "Is there a character limit per generation request?",
              a: "Yes. Free (BASIC) users can generate up to 80 characters per request. Creator Lite allows 700 characters per request. Higher-tier plans allow up to 5,000 characters per single request — enough for a full 5-minute narration in one generation. This is different from the monthly limit; it's the maximum length of a single script submission."
            },
            {
              q: "Can I save and reuse voices I like for future videos?",
              a: "While voice settings aren't saved as presets yet, your generation history (available on paid plans) shows every voice you've used. You can find your preferred voice in the history, note the name, and re-select it for future videos. Voice preset saving is on our product roadmap for Q2 2026."
            },
            {
              q: "What file format does the generated audio download in?",
              a: "All generated audio downloads as MP3. This format is universally compatible with every video editor (Adobe Premiere, Final Cut Pro, DaVinci Resolve, CapCut), podcast hosting platform, and audio software. File sizes are typically 200KB–2MB depending on script length."
            },
            {
              q: "How does AI voice compare to just using my own voice?",
              a: "For creators comfortable on camera or on mic, your own voice carries authenticity that AI currently can't replicate for personal brand content. AI voice excels in different contexts: when you want to publish more frequently than you can record, when you need multiple voices (characters, narration + dialogue), when you need multilingual versions, or when you specifically want a faceless channel format. Many creators use both — their own voice for personality-forward content, AI voice for evergreen informational content."
            },
          ].map((item, i) => (
            <article key={i} className="cfc-faq-item">
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────────────────────────── */}
      <section className="cfc-testimonials" aria-labelledby="testi-title">
        <div className="cfc-section-intro light">
          <h2 id="testi-title">What Creators Are Saying</h2>
          <p>1,500+ active creators use Scenith every month. Here's what their experience actually looks like.</p>
        </div>
        <div className="cfc-testi-grid">
          {[
            { name: "Priya V.", channel: "Finance & Investing Channel", subs: "82K subscribers", quote: "I upload twice a week now and I haven't recorded my voice in 6 months. My watch time actually went up after switching to AI narration because I started spending that freed time on better scripting." },
            { name: "Marcus T.", channel: "True Crime Documentary", subs: "140K subscribers", quote: "The Announcer emotion preset is perfect for the cinematic tone I was going for. I tested it against 3 paid voice actors and my audience literally couldn't tell the difference in a poll I ran." },
            { name: "Ananya S.", channel: "Online Course Creator", subs: "Teachable, 2,400 students", quote: "I launched a 7-module course in one weekend. Previously that took me 3 months of recording. The Professional tone keeps students engaged through the full module without sounding robotic." },
            { name: "Luca B.", channel: "Tech & SaaS Reviews", subs: "28K subscribers", quote: "I run 3 channels now — English, Spanish, and Portuguese. Before Scenith this would have been impossible. Now I just translate the script and generate. Same content, 3x the audience." },
            { name: "Jade N.", channel: "Wellness & Meditation Podcast", subs: "18K podcast listeners", quote: "The Meditation emotion preset is genuinely therapeutic. I've had listeners ask if I hire voice talent for my shows. I tell them it's AI and they don't believe me. That's the benchmark, right?" },
            { name: "Dhruv P.", channel: "Faceless Motivational Channel", subs: "215K subscribers", quote: "I was skeptical at first — I thought AI voice would tank my retention. It did the opposite. Consistent, clear, no background noise. My average view duration went from 4 minutes to 7 minutes." },
          ].map((t) => (
            <blockquote key={t.name} className="cfc-testi-card">
              <p>"{t.quote}"</p>
              <cite>
                <strong>{t.name}</strong>
                <span>{t.channel}</span>
                <span className="cfc-testi-subs">{t.subs}</span>
              </cite>
              <div className="cfc-testi-stars" aria-label="5 stars">⭐⭐⭐⭐⭐</div>
            </blockquote>
          ))}
        </div>
      </section>

      {/* ── INTERNAL LINKS ──────────────────────────────────────────────── */}
      <section className="cfc-related-tools" aria-labelledby="related-title">
        <div className="cfc-section-intro">
          <h2 id="related-title">Complete Your Creator Stack on Scenith</h2>
          <p>AI voice is one piece. Here's the full toolkit creators use to go from idea to published in one session.</p>
        </div>
        <div className="cfc-related-grid">
          {[
            { href: "/tools/ai-voice-generation", icon: "🎤", title: "AI Voice Generator (Main)", desc: "The core TTS engine. Explore all 40+ voices, full filtering, complete documentation." },
            { href: "/tools/ai-video-generation", icon: "🎬", title: "AI Video Generator", desc: "Turn scripts into cinematic AI videos. Text-to-video and image-to-video in multiple styles." },
            { href: "/tools/ai-image-generation", icon: "🖼️", title: "AI Image Generator", desc: "Generate thumbnails, social media visuals, and course graphics from text prompts." },
            { href: "/tools/add-subtitles-to-videos", icon: "💬", title: "Add Subtitles to Videos", desc: "Auto-generate captions. Boost accessibility and average view duration simultaneously." },
            { href: "/tools/image-editing", icon: "✂️", title: "Background Remover", desc: "Remove backgrounds from thumbnails and profile images in one click." },
            { href: "/tools/pdf-tools", icon: "📄", title: "PDF Tools", desc: "Merge, compress, and convert content documents for your creator workflow." },
          ].map((tool) => (
            <a key={tool.title} href={tool.href} className="cfc-related-card">
              <span className="cfc-related-icon">{tool.icon}</span>
              <h3>{tool.title}</h3>
              <p>{tool.desc}</p>
              <span className="cfc-related-arrow">→</span>
            </a>
          ))}
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────────── */}
      <section className="cfc-final-cta" aria-labelledby="finalcta-title">
        <div className="cfc-final-cta-orb" aria-hidden="true" />
        <h2 id="finalcta-title">Your Next Video. Your Next Episode. Your Next Course Module.</h2>
        <p>All of it narrated in under 5 seconds. Start free. Scale when you're ready. Commercial rights always included.</p>
        <div className="cfc-final-cta-btns">
          <button onClick={scrollToGenerator} className="cfc-btn-primary large">
            ⚡ Generate Your First AI Voice Free
          </button>
          <a href="/pricing" className="cfc-btn-secondary large">See Creator Plans →</a>
        </div>
        <div className="cfc-final-trust">
          <span>✅ Free tier, no credit card</span>
          <span>🎙️ 40+ voices</span>
          <span>🌍 20+ languages</span>
          <span>📥 Instant MP3</span>
          <span>💼 Commercial rights</span>
          <span>🔄 Cancel anytime</span>
        </div>
      </section>

      {/* ── FLOATING CTA ─────────────────────────────────────────────────── */}
      {isLoggedIn && userProfile.role === 'BASIC' && (
        <div className="cfc-floating-cta">
          <button onClick={() => window.location.href = '/pricing'} className="cfc-floating-btn">
            <span>⚡</span>
            <span className="cfc-floating-text">
              <strong>Upgrade for 10× More Chars</strong>
              <small>Creator Lite from ₹99/$5/mo</small>
            </span>
          </button>
        </div>
      )}

      {/* ── LOGIN MODAL ─────────────────────────────────────────────────── */}
      {showLoginModal && (
        <div className="modal-overlay">
          <motion.div className="cfc-login-modal" initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }}>
            <button className="cfc-modal-close" onClick={() => setShowLoginModal(false)} aria-label="Close"><FaTimes /></button>
            <div className="cfc-auth-inner">
              <h2>SCENITH</h2>
              <p>Login to generate AI voices</p>
              {isLoggingIn && <div className="cfc-auth-loading"><div className="cfc-spinner large" /><p>Logging in...</p></div>}
              {loginError && <div className="cfc-auth-error">{loginError}</div>}
              {loginSuccess && <div className="cfc-auth-success">{loginSuccess}</div>}
              <form onSubmit={(e) => { e.preventDefault(); const fd = new FormData(e.currentTarget); handleLogin({ email: fd.get('email') as string, password: fd.get('password') as string }); }} className="cfc-auth-form">
                <div className="cfc-input-float">
                  <input type="email" name="email" placeholder=" " className="cfc-auth-input" aria-label="Email" disabled={isLoggingIn} required />
                  <span>Email</span>
                </div>
                <div className="cfc-input-float">
                  <input type="password" name="password" placeholder=" " className="cfc-auth-input" aria-label="Password" disabled={isLoggingIn} required />
                  <span>Password</span>
                </div>
                <button type="submit" className="cfc-btn-primary" disabled={isLoggingIn}>
                  {isLoggingIn ? 'Logging in...' : 'Login'}
                </button>
              </form>
              <div className="cfc-auth-divider">OR</div>
              <div id="cfc-googleSignInButton" />
              <p className="cfc-auth-signup">New to Scenith? <a href="/signup">Sign up free</a></p>
            </div>
          </motion.div>
        </div>
      )}

      {/* ── UPGRADE MODAL ────────────────────────────────────────────────── */}
      {showUpgradeModal && (
        <div className="modal-overlay" onClick={e => { if (e.target === e.currentTarget) setShowUpgradeModal(false); }}>
          <motion.div className="cfc-upgrade-modal" initial={{ opacity: 0, scale: 0.88, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ type: 'spring', stiffness: 300, damping: 28 }}>
            <button onClick={() => setShowUpgradeModal(false)} className="cfc-modal-close" aria-label="Close"><FaTimes size={11} /></button>
            <div className="cfc-upgrade-top-bar" />
            <div className="cfc-upgrade-body">
              <div className="cfc-upgrade-icon">
                {upgradeModalType === 'first_gen' ? '🎉' : upgradeModalType === 'repeat_gen' ? '🚀' : upgradeModalType === 'download' ? '✅' : '⚠️'}
              </div>
              <h3>
                {upgradeModalType === 'first_gen' && 'Your First AI Voice is Ready!'}
                {upgradeModalType === 'repeat_gen' && "You're on a roll — unlock more!"}
                {upgradeModalType === 'download' && 'Downloaded! Ready for more?'}
                {upgradeModalType === 'limit_warning' && 'Almost out of characters'}
              </h3>
              <p>
                {upgradeModalType === 'first_gen' && <><strong>Creator Lite gives you 10,000 chars/month</strong> — enough for daily uploads, podcast episodes, and short-form hooks.</>}
                {upgradeModalType === 'repeat_gen' && <>You keep generating because it works. <strong>Stop hitting free limits.</strong> Creator Lite unlocks emotions, history, and 10× more characters.</>}
                {upgradeModalType === 'download' && <><strong>Great content deserves more fuel.</strong> Upgrade for longer scripts, emotion presets, and generation history.</>}
                {upgradeModalType === 'limit_warning' && <><strong>Don't lose your momentum.</strong> Upgrade and keep creating without daily resets.</>}
              </p>
              <div className="cfc-upgrade-compare">
                <div className="cfc-upgrade-col free">
                  <div className="cfc-upgrade-col-label">Free Plan</div>
                  {[["🎤","600 chars/mo"],["📅","150 chars/day"],["📝","80 chars/request"],["🎭","No emotions"],["📜","No history"]].map(([icon, val]) => (
                    <div key={val} className="cfc-upgrade-row"><span>{icon}</span><span>{val}</span></div>
                  ))}
                </div>
                <div className="cfc-upgrade-col pro">
                  <div className="cfc-upgrade-best">⭐ BEST VALUE</div>
                  <div className="cfc-upgrade-col-label">Creator Lite</div>
                  {[["🎤","10,000 chars/mo"],["📅","2,500 chars/day"],["📝","700 chars/request"],["🎭","9 emotions"],["📜","Full history"]].map(([icon, val]) => (
                    <div key={val} className="cfc-upgrade-row"><span>{icon}</span><span>{val}</span></div>
                  ))}
                </div>
              </div>
              <a href="/pricing" onClick={() => setShowUpgradeModal(false)} className="cfc-btn-primary" style={{ display: 'block', textAlign: 'center', textDecoration: 'none', marginTop: '16px' }}>
                Upgrade to Creator Lite — ₹99 / $5/mo →
              </a>
              <button onClick={() => setShowUpgradeModal(false)} className="cfc-upgrade-dismiss">Maybe later</button>
            </div>
          </motion.div>
        </div>
      )}

      {/* ── WELCOME MODAL ────────────────────────────────────────────────── */}
      {showWelcomeModal && (
        <div className="modal-overlay" onClick={e => { if (e.target === e.currentTarget) setShowWelcomeModal(false); }}>
          <motion.div className="cfc-upgrade-modal" initial={{ opacity: 0, scale: 0.88, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ type: 'spring', stiffness: 300, damping: 28 }}>
            <button onClick={() => setShowWelcomeModal(false)} className="cfc-modal-close" aria-label="Close"><FaTimes size={11} /></button>
            <div className="cfc-upgrade-top-bar" />
            <div className="cfc-upgrade-body">
              <div className="cfc-upgrade-icon">👋</div>
              <h3>Welcome, Creator!</h3>
              <p>You're on the <strong>Free Plan</strong>. Here's what's included — and what you unlock with <strong>Creator Lite</strong> for just ₹99 / $5/mo.</p>
              <div className="cfc-upgrade-compare">
                <div className="cfc-upgrade-col free">
                  <div className="cfc-upgrade-col-label">🆓 Free</div>
                  {[["🎤","600 chars/mo"],["📅","150 chars/day"],["📝","80 chars/request"],["🎭","No emotions"],["📜","No history"]].map(([icon, val]) => (
                    <div key={val} className="cfc-upgrade-row"><span>{icon}</span><span>{val}</span></div>
                  ))}
                </div>
                <div className="cfc-upgrade-col pro">
                  <div className="cfc-upgrade-best">⭐ CREATOR</div>
                  <div className="cfc-upgrade-col-label">Creator Lite</div>
                  {[["🎤","10,000 chars/mo"],["📅","2,500 chars/day"],["📝","700 chars/request"],["🎭","9 emotions ✓"],["📜","History ✓"]].map(([icon, val]) => (
                    <div key={val} className="cfc-upgrade-row"><span>{icon}</span><span>{val}</span></div>
                  ))}
                </div>
              </div>
              <a href="/pricing" onClick={() => setShowWelcomeModal(false)} className="cfc-btn-primary" style={{ display: 'block', textAlign: 'center', textDecoration: 'none', marginTop: '16px' }}>
                Upgrade to Creator Lite — ₹99 / $5/mo →
              </a>
              <button onClick={() => setShowWelcomeModal(false)} className="cfc-upgrade-dismiss">Continue free</button>
            </div>
          </motion.div>
        </div>
      )}

      {/* ── EMOTION UPGRADE POPUP ────────────────────────────────────────── */}
      {showEmotionUpgradePopup && (
        <div className="modal-overlay">
          <motion.div className="cfc-upgrade-modal" initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }}>
            <button className="cfc-modal-close" onClick={() => setShowEmotionUpgradePopup(false)} aria-label="Close"><FaTimes /></button>
            <div className="cfc-upgrade-top-bar" />
            <div className="cfc-upgrade-body">
              <div className="cfc-upgrade-icon">🎭</div>
              <h3>Unlock Voice Emotions for Creators</h3>
              <p>You selected <strong>{EMOTION_PRESETS.find(e => e.value === selectedEmotion)?.label}</strong>. Generating with emotion presets requires a Creator plan.</p>
              <a href="/pricing" className="cfc-btn-primary" style={{ display: 'block', textAlign: 'center', textDecoration: 'none', marginTop: '16px' }}>View Creator Plans →</a>
              <button className="cfc-upgrade-dismiss" onClick={() => { setSelectedEmotion('default'); setShowEmotionUpgradePopup(false); }}>
                Continue with Default emotion
              </button>
            </div>
          </motion.div>
        </div>
      )}

    </div>
  );
};

export default AIVoiceForCreatorsClient;