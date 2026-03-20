"use client";

import React, { useState, useEffect, useCallback, useRef, useMemo } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { API_BASE_URL, CDN_URL } from "../../../config";
import { FaTimes } from "react-icons/fa";
import VideoPageSEOSections from "./VideoPageSeoSections";

// ─── Types ────────────────────────────────────────────────────────────────────

interface UserProfile {
  email: string;
  firstName: string;
  lastName: string;
  picture: string | null;
  googleAuth: boolean;
  role: string;
}

interface VideoModel {
  id: string;
  displayName: string;
  defaultResolution: string;
  supportsAudio: boolean;
  description: string;
  creditCosts: Array<{
    resolution: string;
    duration: number;
    audio: boolean;
    credits: number;
  }>;
}

interface Credits {
  balance: number;
  planType: string;
  expiresAt: string | "N/A";
  creditCosts: any[];
}

interface VideoJob {
  id: number;
  falRequestId: string;
  model: string;
  modelDisplayName: string;
  generationType: string;
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

interface LoginFormData {
  email: string;
  password: string;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const ASPECT_RATIOS = [
  { value: "16:9", label: "16:9", icon: "🖥️", desc: "Landscape (YouTube, Desktop)" },
  { value: "9:16", label: "9:16", icon: "📱", desc: "Portrait (Reels, TikTok)" },
  { value: "1:1",  label: "1:1",  icon: "⬛", desc: "Square (Instagram)" },
];

const DURATION_OPTIONS = [
  { value: 5,  label: "5 sec" },
  { value: 10, label: "10 sec" },
];

const GENERATION_TYPES = [
  { value: "text", label: "Text to Video", icon: "✍️" },
  { value: "image", label: "Image to Video", icon: "🖼️" },
];

const STATIC_MODELS_PREVIEW = [
  { id: "wan2.5",          name: "Wan 2.5",          res: "480p",  cr: 46  },
  { id: "kling-v2.5-turbo",name: "Kling 2.5 Turbo",  res: "1080p", cr: 64  },
  { id: "kling-v2.6-pro",  name: "Kling 2.6 Pro",    res: "1080p", cr: 64  },
  { id: "veo3.1-fast",     name: "Veo 3.1 Fast",     res: "1080p", cr: 92  },
  { id: "veo3.1",          name: "Veo 3.1",          res: "1080p", cr: 186 },
];

// ─── Component ────────────────────────────────────────────────────────────────

const AIVideoGenerationClient: React.FC = () => {
  // Auth
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);
  const [loginSuccess, setLoginSuccess] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  // Plan & models
  const [models, setModels] = useState<VideoModel[]>([]);
  const [credits, setCredits] = useState<Credits | null>(null);
  const hasPlan = credits !== null && credits.balance > 0;

  // Form state
  const [genType, setGenType] = useState<"text" | "image">("text");
  const [selectedModel, setSelectedModel] = useState<string>("");
  const [prompt, setPrompt] = useState("");
  const [negativePrompt, setNegativePrompt] = useState("");
  const [duration, setDuration] = useState(5);
  const [aspectRatio, setAspectRatio] = useState("16:9");
  const [audioEnabled, setAudioEnabled] = useState(false); // off by default
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  // Job state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentJob, setCurrentJob] = useState<VideoJob | null>(null);
  const [history, setHistory] = useState<VideoJob[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [showHistory, setShowHistory] = useState(false);
  const [modelAuto, setModelAuto] = useState(true);
  const jobCardRef = useRef<HTMLDivElement>(null);
  const historyRef = useRef<HTMLButtonElement>(null);
  const upsellRef = useRef<HTMLDivElement>(null);
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);

  useEffect(() => {
    if (hasPlan) return;
    const timer = setTimeout(() => {
      setShowWelcomeModal(true);
    }, 15000);
    return () => clearTimeout(timer);
  }, [hasPlan]);  

  // Polling
  const pollingRef = useRef<NodeJS.Timeout | null>(null);

  // Drag & drop
  const dropRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // ── Auth ──────────────────────────────────────────────────────────────────

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setIsPageLoading(false);
      return;
    }
    axios
      .get(`${API_BASE_URL}/auth/me`, { headers: { Authorization: `Bearer ${token}` } })
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
      .finally(() => {
        setIsPageLoading(false);
      });
  }, []);

 // ── Polling ───────────────────────────────────────────────────────────────

  const startPolling = useCallback((falRequestId: string) => {
    if (pollingRef.current) clearInterval(pollingRef.current);
    pollingRef.current = setInterval(async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(`${API_BASE_URL}/api/video-gen/status/${falRequestId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const job: VideoJob = res.data;
        setCurrentJob(job);
        if (job.status === "COMPLETED" || job.status === "FAILED") {
          clearInterval(pollingRef.current!);
          pollingRef.current = null;
          const credRes = await axios.get(`${API_BASE_URL}/api/video-gen/credits`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          setCredits(credRes.data);
          const histRes = await axios.get(`${API_BASE_URL}/api/video-gen/history`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          setHistory(histRes.data || []);
          setShowHistory(true);
        }
      } catch {}
    }, 5000);
  }, []);

  // ── Fetch models & credits after login ──────────────────────────────────

  useEffect(() => {
    if (!isLoggedIn) return;
    const token = localStorage.getItem("token");
    const headers = { Authorization: `Bearer ${token}` };

    Promise.all([
      axios.get(`${API_BASE_URL}/api/video-gen/models`, { headers }),
      axios.get(`${API_BASE_URL}/api/video-gen/credits`, { headers }),
      axios.get(`${API_BASE_URL}/api/video-gen/history`, { headers }),
    ])
      .then(([modelsRes, creditsRes, historyRes]) => {
        const mods: VideoModel[] = modelsRes.data.models || [];
        setModels(mods);
        setCredits(creditsRes.data);
        if (modelAuto) {
          const wan = mods.find(m => m.id.toLowerCase().includes('wan'));
          setSelectedModel(wan ? wan.id : mods[0]?.id || "");
        }
        const jobs: VideoJob[] = historyRes.data || [];
        setHistory(jobs);
        const inProgressJob = jobs.find(
          j => j.status === 'PENDING' || j.status === 'PROCESSING'
        );
        if (inProgressJob) {
          setCurrentJob(inProgressJob);
          startPolling(inProgressJob.falRequestId);
        }
      })
      .catch((err) => {
        if (err.response?.status === 402) {
          setCredits({ balance: 0, planType: 'FREE', expiresAt: 'N/A', creditCosts: [] });
        }
      });
  }, [isLoggedIn, startPolling]);

  useEffect(() => () => { if (pollingRef.current) clearInterval(pollingRef.current); }, []);

  useEffect(() => {
    const main = document.querySelector('main');
    if (main) {
      main.style.background = '#080B12';
      main.style.margin = '0';
      main.style.padding = '0';
    }
    return () => {
      if (main) {
        main.style.background = '';
        main.style.margin = '';
        main.style.padding = '';
      }
    };
  }, []);  

  // ── Handlers ──────────────────────────────────────────────────────────────

  const handleImageDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const effectiveModel = useMemo(() => {
    if (!modelAuto) return selectedModel;
    // Pick model with lowest credit cost for current duration/audio
    if (models.length === 0) {
      // fallback for logged-out static preview
      const costs: Record<string, number> = {
        'wan2.5': 46, 'kling-v2.5-turbo': 64, 'kling-v2.6-pro': 64,
        'veo3.1-fast': 92, 'veo3.1': 186,
      };
      return Object.entries(costs).sort((a, b) => a[1] - b[1])[0][0];
    }
    const sorted = [...models].sort((a, b) => {
      const costA = a.creditCosts?.find((c: any) => c.duration === duration && c.audio === false)?.credits ?? 999;
      const costB = b.creditCosts?.find((c: any) => c.duration === duration && c.audio === false)?.credits ?? 999;
      return costA - costB;
    });
    return sorted[0]?.id ?? selectedModel;
  }, [modelAuto, selectedModel, models, duration]);   

  const selectedModelData = models.find((m) => m.id === effectiveModel);
  const creditsNeeded = useMemo(() => {
    if (!selectedModelData?.creditCosts) return 0;
    const entry = selectedModelData.creditCosts.find(
      (c: any) => c.duration === duration && c.audio === audioEnabled
    );
    return entry?.credits ?? 0;
  }, [selectedModelData, duration, audioEnabled]);

  const handleGenerate = async () => {
    if (!isLoggedIn) { setShowLoginModal(true); return; }
    if (!prompt.trim()) { setError("Please describe what you want to create."); return; }
    if (genType === "image" && !imageFile) { setError("Please upload a reference image."); return; }

    setIsSubmitting(true);
    setError(null);
    setCurrentJob(null);

    try {
      const token = localStorage.getItem("token");
      let job: VideoJob;

      if (genType === "text") {
        const res = await axios.post(
          `${API_BASE_URL}/api/video-gen/text-to-video`,
          { model: effectiveModel, prompt, negativePrompt: negativePrompt || undefined, durationSeconds: duration, audioEnabled, aspectRatio },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        job = res.data;
      } else {
        const formData = new FormData();
        formData.append("model", effectiveModel);
        formData.append("prompt", prompt);
        formData.append("durationSeconds", String(duration));
        formData.append("audioEnabled", String(audioEnabled));
        formData.append("aspectRatio", aspectRatio);
        if (imageFile) formData.append("image", imageFile);
        const res = await axios.post(`${API_BASE_URL}/api/video-gen/image-to-video`, formData, {
          headers: { Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data" },
        });
        job = res.data;
      }

      setCurrentJob(job);
      startPolling(job.falRequestId);
      setTimeout(() => {
        jobCardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);      
    } catch (err: any) {
      setError(err.response?.data || err.message || "Failed to submit generation.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLogin = async (formData: LoginFormData) => {
    setIsLoggingIn(true);
    setLoginError(null);
    try {
      const res = await axios.post(`${API_BASE_URL}/auth/login`, formData);
      localStorage.setItem("token", res.data.token);
      const meRes = await axios.get(`${API_BASE_URL}/auth/me`, { headers: { Authorization: `Bearer ${res.data.token}` } });
      const parts = (meRes.data.name || "").trim().split(" ");
      setUserProfile({ email: meRes.data.email, firstName: parts[0], lastName: parts.slice(1).join(" "), picture: meRes.data.picture || null, googleAuth: meRes.data.googleAuth || false, role: meRes.data.role || "BASIC" });
      setIsLoggedIn(true);
      setShowLoginModal(false);
    } catch (err: any) {
      setLoginError(err.response?.data?.message || "Login failed.");
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleGoogleLogin = useCallback(async (credentialResponse: any) => {
    setIsLoggingIn(true);
    setLoginError("");
    try {
      const res = await axios.post(`${API_BASE_URL}/auth/google`, { token: credentialResponse.credential });
      localStorage.setItem("token", res.data.token);
      setTimeout(async () => {
        const meRes = await axios.get(`${API_BASE_URL}/auth/me`, { headers: { Authorization: `Bearer ${res.data.token}` } });
        const parts = (meRes.data.name || "").trim().split(" ");
        setUserProfile({ email: meRes.data.email, firstName: parts[0], lastName: parts.slice(1).join(" "), picture: meRes.data.picture || null, googleAuth: true, role: meRes.data.role || "BASIC" });
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
        window.google.accounts.id.initialize({ client_id: "397321320139-tpd310sq9j8rdngqd9kdmhgegco52b3g.apps.googleusercontent.com", callback: handleGoogleLogin });
        const el = document.getElementById("googleSignInButtonVideo");
        if (el) window.google.accounts.id.renderButton(el, { theme: "outline", size: "large", width: 300 });
      } else setTimeout(init, 100);
    };
    init();
  }, [showLoginModal, handleGoogleLogin]);

  // ── Render helpers ────────────────────────────────────────────────────────

  const StatusBadge = ({ status }: { status: VideoJob["status"] }) => {
    const config = {
      PENDING:    { label: "Queued",     color: "#F59E0B", bg: "rgba(245,158,11,0.12)",  dot: true },
      PROCESSING: { label: "Generating", color: "#3B82F6", bg: "rgba(59,130,246,0.12)",  dot: true },
      COMPLETED:  { label: "Ready",      color: "#10B981", bg: "rgba(16,185,129,0.12)",  dot: false },
      FAILED:     { label: "Failed",     color: "#EF4444", bg: "rgba(239,68,68,0.12)",   dot: false },
    }[status];
    return (
      <span style={{ display: "inline-flex", alignItems: "center", gap: 6, background: config.bg, color: config.color, padding: "5px 12px", borderRadius: 20, fontSize: "0.82rem", fontWeight: 600 }}>
        {config.dot && <span style={{ width: 7, height: 7, borderRadius: "50%", background: config.color, display: "inline-block", animation: "pulse 1.5s infinite" }} />}
        {config.label}
      </span>
    );
  };

  const currentModelCanAudio = selectedModelData?.supportsAudio ?? false;
  const maxDuration = 10;
  
  // ─────────────────────────────────────────────────────────────────────────
 if (isPageLoading) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#080B12',
        gap: '16px',
      }}>
        <div style={{
          width: '48px', height: '48px', borderRadius: '50%',
          border: '3px solid rgba(99,102,241,0.2)',
          borderTopColor: '#6366F1',
          animation: 'spin 0.9s linear infinite',
        }} />
        <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.9rem', fontWeight: 500, fontFamily: "'DM Sans', sans-serif" }}>
          Loading...
        </p>
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  return (
    <div className="vg-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        body { overflow-x: hidden; }

        main { background: #080B12 !important; margin: 0 !important; padding: 0 !important; }
        
        .vg-page {
          font-family: 'DM Sans', sans-serif;
          background: #080B12;
          min-height: 100vh;
          color: #E2E8F0;
          position: relative;
          overflow: hidden;
          isolation: isolate;
          margin: 0;
        }

        /* ── Background ── */
        .vg-bg {
          position: absolute; inset: 0; z-index: 0; pointer-events: none;
          will-change: transform;
          background:
            radial-gradient(ellipse 80% 50% at 20% -10%, rgba(99,102,241,0.18) 0%, transparent 60%),
            radial-gradient(ellipse 60% 40% at 80% 110%, rgba(16,185,129,0.12) 0%, transparent 60%),
            radial-gradient(ellipse 100% 80% at 50% 50%, rgba(15,23,42,0.9) 0%, #080B12 100%);
        }

        .vg-grid {
          position: absolute; inset: 0; z-index: 0; pointer-events: none;
          will-change: transform;
          background-image: linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px);
          background-size: 48px 48px;
          mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 100%);
        }

        /* ── Layout ── */
        .vg-wrap { position: relative; z-index: 1; max-width: 1100px; margin: 0 auto; padding: 0 24px; }

        /* ── Header ── */
        .vg-header {
          padding: 20px 0 0;
          text-align: center;
        }
        .vg-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(99,102,241,0.15); border: 1px solid rgba(99,102,241,0.3);
          border-radius: 100px; padding: 6px 16px;
          font-size: 0.78rem; font-weight: 600; color: #818CF8;
          text-transform: uppercase; letter-spacing: 1.5px;
          margin-bottom: 20px;
        }
        .vg-eyebrow span { width: 6px; height: 6px; border-radius: 50%; background: #6366F1; display: inline-block; animation: pulse 2s infinite; }
        .vg-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.5rem, 3vw, 2.2rem);
          font-weight: 800; line-height: 1.1;
          background: linear-gradient(135deg, #E2E8F0 0%, #818CF8 50%, #34D399 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
          margin-bottom: 6px;
        }
        .vg-sub {
          font-size: 0.9rem; color: #94A3B8; max-width: 520px;
          line-height: 1.4; font-weight: 300; margin: 0 auto 12px;
        }

        /* ── Breadcrumb ── */
        .vg-breadcrumb {
          display: flex; gap: 6px; align-items: center;
          font-size: 0.82rem; color: #475569; margin-bottom: 32px;
          justify-content: center;
        }
        .vg-breadcrumb a { color: #6366F1; text-decoration: none; }
        .vg-breadcrumb a:hover { color: #818CF8; }
        .vg-breadcrumb span { color: #334155; }

        /* ── Main card ── */
        .vg-card {
          background: rgba(15,23,42,0.8);
          border: 1px solid rgba(99,102,241,0.2);
          border-radius: 24px;
          margin-bottom: 24px;
          box-shadow: 0 24px 80px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05);
        }

        .vg-card-inner { padding: 16px 20px; }

        /* ── Gen type toggle ── */
        .vg-toggle {
          display: flex; gap: 4px;
          background: rgba(0,0,0,0.3); border-radius: 14px; padding: 4px;
          width: fit-content; margin-bottom: 16px;
          border: 1px solid rgba(99,102,241,0.15);
        }
        .vg-toggle-btn {
          display: flex; align-items: center; gap: 8px;
          padding: 10px 22px; border-radius: 10px; border: none;
          font-family: 'DM Sans', sans-serif; font-size: 0.92rem; font-weight: 500;
          cursor: pointer; transition: all 0.2s ease;
          color: #64748B; background: transparent;
        }
        .vg-toggle-btn.active {
          background: linear-gradient(135deg, #6366F1, #4F46E5);
          color: white;
          box-shadow: 0 4px 16px rgba(99,102,241,0.4);
        }
        .vg-toggle-btn:hover:not(.active) { color: #94A3B8; }

        /* ── Section label ── */
        .vg-label {
          font-size: 0.72rem; font-weight: 600; color: #6366F1;
          text-transform: uppercase; letter-spacing: 1.5px;
          margin-bottom: 7px; display: block;
        }

        /* ── Prompt textarea ── */
        .vg-textarea {
          width: 100%; min-height: 72px; padding: 10px 14px;
          background: rgba(0,0,0,0.3); border: 1.5px solid rgba(99,102,241,0.2);
          border-radius: 14px; color: #E2E8F0; font-family: 'DM Sans', sans-serif;
          font-size: 1rem; line-height: 1.65; resize: vertical;
          transition: border-color 0.2s, box-shadow 0.2s;
          font-weight: 300;
        }
        .vg-textarea:focus { outline: none; border-color: #6366F1; box-shadow: 0 0 0 3px rgba(99,102,241,0.15); }
        .vg-textarea::placeholder { color: #334155; }
        .vg-textarea:disabled { opacity: 0.5; cursor: not-allowed; }

        /* ── Image drop zone ── */
        .vg-dropzone {
          border: 2px dashed rgba(99,102,241,0.3);
          border-radius: 14px; padding: 36px 24px;
          text-align: center; cursor: pointer;
          transition: all 0.2s ease;
          background: rgba(0,0,0,0.2);
          position: relative;
        }
        .vg-dropzone:hover, .vg-dropzone.drag-over {
          border-color: #6366F1;
          background: rgba(99,102,241,0.07);
        }
        .vg-dropzone-icon { font-size: 2.4rem; margin-bottom: 10px; }
        .vg-dropzone p { color: #64748B; font-size: 0.95rem; margin-bottom: 4px; }
        .vg-dropzone small { color: #334155; font-size: 0.82rem; }
        .vg-dropzone input { position: absolute; inset: 0; opacity: 0; cursor: pointer; }

        .vg-img-preview {
          position: relative; border-radius: 14px; overflow: hidden;
          max-height: 240px; display: flex; align-items: center; justify-content: center;
          background: rgba(0,0,0,0.3);
        }
        .vg-img-preview img { max-width: 100%; max-height: 240px; object-fit: contain; border-radius: 12px; }
        .vg-img-remove {
          position: absolute; top: 10px; right: 10px;
          background: rgba(0,0,0,0.7); border: none; color: white;
          width: 32px; height: 32px; border-radius: 50%; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          font-size: 1rem; transition: background 0.2s;
        }
        .vg-img-remove:hover { background: #EF4444; }

        /* ── Options row ── */
       .vg-options { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 8px; margin: 10px 0; }
        @media (max-width: 640px) { .vg-options { grid-template-columns: 1fr; } }

        .vg-option-group label.vg-label { margin-bottom: 8px; }

        .vg-select {
          width: 100%; padding: 11px 14px;
          background: rgba(0,0,0,0.3); border: 1.5px solid rgba(99,102,241,0.2);
          border-radius: 12px; color: #E2E8F0;
          font-family: 'DM Sans', sans-serif; font-size: 0.92rem;
          cursor: pointer; transition: border-color 0.2s;
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236366F1' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
          background-repeat: no-repeat; background-position: right 14px center;
          padding-right: 36px;
        }
        .vg-select:focus { outline: none; border-color: #6366F1; }
        .vg-select option { background: #0F172A; }

        /* ── Duration pills ── */
        .vg-pill-group { display: flex; gap: 8px; }
        .vg-pill {
          flex: 1; padding: 8px; border-radius: 9px; border: 1.5px solid rgba(99,102,241,0.2);
          background: rgba(0,0,0,0.2); color: #64748B;
          font-family: 'DM Sans', sans-serif; font-size: 0.9rem; font-weight: 500;
          cursor: pointer; transition: all 0.2s; text-align: center;
        }
        .vg-pill.active {
          border-color: #6366F1; background: rgba(99,102,241,0.15); color: #818CF8;
        }
        .vg-pill:disabled { opacity: 0.4; cursor: not-allowed; }

        /* ── Aspect ratio buttons ── */
        .vg-ar-group { display: flex; gap: 8px; }
        .vg-ar {
          flex: 1; padding: 7px 6px; border-radius: 9px; border: 1.5px solid rgba(99,102,241,0.2);
          background: rgba(0,0,0,0.2); color: #64748B;
          font-family: 'DM Sans', sans-serif; font-size: 0.82rem; font-weight: 500;
          cursor: pointer; transition: all 0.2s; text-align: center;
          display: flex; flex-direction: column; align-items: center; gap: 3px;
        }
        .vg-ar.active { border-color: #6366F1; background: rgba(99,102,241,0.15); color: #818CF8; }
        .vg-ar span:first-child { font-size: 1.1rem; }

        /* ── Audio toggle ── */
        .vg-audio-row {
          display: flex; align-items: center; justify-content: space-between;
          padding: 10px 14px; background: rgba(0,0,0,0.2);
          border-radius: 10px; border: 1.5px solid rgba(99,102,241,0.15);
          margin-bottom: 12px;
        }
        .vg-audio-info h4 { font-size: 0.92rem; font-weight: 500; color: #CBD5E1; margin-bottom: 2px; }
        .vg-audio-info p { font-size: 0.78rem; color: #475569; }
        .vg-switch {
          position: relative; width: 46px; height: 26px;
          cursor: pointer;
        }
        .vg-switch input { opacity: 0; width: 0; height: 0; }
        .vg-switch-track {
          position: absolute; inset: 0; border-radius: 13px;
          background: rgba(99,102,241,0.2); transition: background 0.2s;
          border: 1.5px solid rgba(99,102,241,0.3);
        }
        .vg-switch input:checked + .vg-switch-track { background: #6366F1; border-color: #6366F1; }
        .vg-switch-thumb {
          position: absolute; top: 3px; left: 3px;
          width: 18px; height: 18px; border-radius: 50%;
          background: white; transition: transform 0.2s;
          box-shadow: 0 1px 4px rgba(0,0,0,0.3);
        }
        .vg-switch input:checked ~ .vg-switch-thumb { transform: translateX(20px); }

        /* ── Model selector ── */
        .vg-models { display: flex; flex-direction: column; gap: 10px; margin-bottom: 24px; }
        .vg-model-card {
          display: flex; align-items: center; gap: 14px;
          padding: 14px 16px; border-radius: 14px;
          border: 1.5px solid rgba(99,102,241,0.15); background: rgba(0,0,0,0.2);
          cursor: pointer; transition: all 0.2s;
        }
        .vg-model-card:hover { border-color: rgba(99,102,241,0.35); }
        .vg-model-card.active { border-color: #6366F1; background: rgba(99,102,241,0.1); }
        .vg-model-radio {
          width: 18px; height: 18px; border-radius: 50%;
          border: 2px solid rgba(99,102,241,0.4);
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
          transition: border-color 0.2s;
        }
        .vg-model-card.active .vg-model-radio { border-color: #6366F1; }
        .vg-model-radio-dot {
          width: 8px; height: 8px; border-radius: 50%; background: #6366F1;
          opacity: 0; transition: opacity 0.15s;
        }
        .vg-model-card.active .vg-model-radio-dot { opacity: 1; }
        .vg-model-info { flex: 1; min-width: 0; }
        .vg-model-name { font-size: 0.95rem; font-weight: 600; color: #CBD5E1; margin-bottom: 3px; }
        .vg-model-desc { font-size: 0.8rem; color: #475569; line-height: 1.4; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .vg-model-meta { display: flex; align-items: center; gap: 8px; flex-shrink: 0; }
        .vg-tier-badge {
          font-size: 0.7rem; font-weight: 700; padding: 3px 10px;
          border-radius: 100px; border: 1px solid; text-transform: uppercase; letter-spacing: 0.5px;
        }
        .vg-credit-cost { font-size: 0.8rem; color: #64748B; white-space: nowrap; }

        /* ── Advanced section ── */
        .vg-advanced-toggle {
          display: flex; align-items: center; gap: 8px; color: #475569;
          font-size: 0.85rem; cursor: pointer; margin-bottom: 12px;
          background: none; border: none; font-family: 'DM Sans', sans-serif;
          transition: color 0.2s;
        }
        .vg-advanced-toggle:hover { color: #818CF8; }

        /* ── Generate button ── */
        .vg-generate-btn {
          width: 100%; padding: 14px;
          background: linear-gradient(135deg, #6366F1 0%, #4F46E5 50%, #7C3AED 100%);
          color: white; border: none; border-radius: 14px;
          font-family: 'Syne', sans-serif; font-size: 1.05rem; font-weight: 700;
          cursor: pointer; transition: all 0.25s;
          box-shadow: 0 8px 30px rgba(99,102,241,0.4), inset 0 1px 0 rgba(255,255,255,0.15);
          position: relative; overflow: hidden;
        }
        .vg-generate-btn::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.15), transparent);
          opacity: 0; transition: opacity 0.2s;
        }
        .vg-generate-btn:hover:not(:disabled)::before { opacity: 1; }
        .vg-generate-btn:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 12px 40px rgba(99,102,241,0.5); }
        .vg-generate-btn:disabled { background: #1E293B; color: #334155; cursor: not-allowed; box-shadow: none; transform: none; }

        .vg-login-btn {
          width: 100%; padding: 18px;
          background: rgba(99,102,241,0.15); border: 1.5px solid rgba(99,102,241,0.4);
          color: #818CF8; border-radius: 14px;
          font-family: 'Syne', sans-serif; font-size: 1.05rem; font-weight: 700;
          cursor: pointer; transition: all 0.2s;
        }
        .vg-login-btn:hover { background: rgba(99,102,241,0.25); }

        .vg-upgrade-btn {
          width: 100%; padding: 18px;
          background: linear-gradient(135deg, #059669, #10B981);
          color: white; border: none; border-radius: 14px;
          font-family: 'Syne', sans-serif; font-size: 1.05rem; font-weight: 700;
          cursor: pointer; transition: all 0.25s;
          box-shadow: 0 8px 30px rgba(16,185,129,0.35);
          text-decoration: none; display: block; text-align: center;
        }
        .vg-upgrade-btn:hover { transform: translateY(-2px); box-shadow: 0 12px 40px rgba(16,185,129,0.45); }

        /* ── Credits bar ── */
        .vg-credits-box {
          background: rgba(0,0,0,0.2); border: 1px solid rgba(99,102,241,0.15);
          border-radius: 12px; padding: 12px 14px; margin-bottom: 12px;
        }
        .vg-credits-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; }
        .vg-credits-label { font-size: 0.8rem; color: #64748B; font-weight: 500; }
        .vg-credits-value { font-size: 0.85rem; color: #818CF8; font-weight: 600; }
        .vg-credits-bar { height: 5px; background: rgba(99,102,241,0.15); border-radius: 3px; overflow: hidden; margin-bottom: 6px; }
        .vg-credits-fill { height: 100%; border-radius: 3px; background: linear-gradient(90deg, #6366F1, #7C3AED); transition: width 0.5s ease; }
        .vg-credits-cost {
          font-size: 0.82rem; color: #475569; margin-top: 8px;
          padding-top: 8px; border-top: 1px solid rgba(99,102,241,0.1);
          display: flex; justify-content: space-between;
        }
        .vg-credits-cost strong { color: #818CF8; }

        /* ── Job status card ── */
        .vg-job-card {
          background: rgba(15,23,42,0.9);
          border: 1px solid rgba(99,102,241,0.25);
          border-radius: 20px; padding: 28px;
          margin-bottom: 24px;
          box-shadow: 0 16px 60px rgba(0,0,0,0.4);
        }
        .vg-job-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 20px; }
        .vg-job-title { font-family: 'Syne', sans-serif; font-size: 1rem; font-weight: 700; color: #CBD5E1; margin-bottom: 6px; }
        .vg-job-prompt { font-size: 0.85rem; color: #475569; line-height: 1.5; max-width: 400px; }
        .vg-job-meta { display: flex; gap: 8px; margin-top: 14px; flex-wrap: wrap; }
        .vg-job-tag { font-size: 0.75rem; padding: 4px 10px; border-radius: 100px; background: rgba(99,102,241,0.1); border: 1px solid rgba(99,102,241,0.2); color: #6366F1; }

        /* ── Processing animation ── */
        .vg-processing {
          display: flex; align-items: center; justify-content: center;
          gap: 10px; padding: 48px 0; flex-direction: column;
        }
        .vg-processing-ring {
          width: 60px; height: 60px; border-radius: 50%;
          border: 3px solid rgba(99,102,241,0.2);
          border-top-color: #6366F1;
          animation: spin 1s linear infinite;
        }
        .vg-processing p { color: #64748B; font-size: 0.9rem; margin-top: 6px; }
        .vg-processing strong { color: #818CF8; display: block; font-size: 1rem; }

        /* ── Video player ── */
        .vg-video-wrap { border-radius: 14px; overflow: hidden; background: #000; margin-bottom: 16px; position: relative; }
        .vg-video-wrap video { width: 100%; display: block; max-height: 500px; }
        .vg-video-actions { display: flex; gap: 10px; }
        .vg-video-btn {
          flex: 1; padding: 13px; border-radius: 11px; border: none;
          font-family: 'DM Sans', sans-serif; font-size: 0.9rem; font-weight: 600;
          cursor: pointer; transition: all 0.2s; display: flex; align-items: center; justify-content: center; gap: 8px;
        }
        .vg-video-btn.primary { background: linear-gradient(135deg, #6366F1, #4F46E5); color: white; }
        .vg-video-btn.secondary { background: rgba(99,102,241,0.12); border: 1px solid rgba(99,102,241,0.3); color: #818CF8; }
        .vg-video-btn:hover { transform: translateY(-1px); }

        /* ── Error ── */
        .vg-error {
          background: rgba(239,68,68,0.1); border: 1px solid rgba(239,68,68,0.3);
          border-radius: 12px; padding: 14px 16px; color: #FCA5A5;
          font-size: 0.9rem; margin-bottom: 16px;
          display: flex; align-items: flex-start; gap: 10px;
        }

        /* ── History ── */
        .vg-history-toggle {
          width: 100%; padding: 14px; border-radius: 12px;
          background: rgba(0,0,0,0.2); border: 1.5px solid rgba(99,102,241,0.15);
          color: #64748B; font-family: 'DM Sans', sans-serif; font-size: 0.9rem;
          cursor: pointer; transition: all 0.2s; margin-bottom: 16px;
          display: flex; align-items: center; justify-content: space-between;
        }
        .vg-history-toggle:hover { border-color: rgba(99,102,241,0.3); color: #94A3B8; }
        .vg-history-grid { display: flex; flex-direction: column; gap: 10px; margin-bottom: 24px; }
        .vg-history-item {
          display: flex; align-items: center; gap: 14px;
          padding: 14px 16px; border-radius: 12px;
          background: rgba(0,0,0,0.2); border: 1px solid rgba(99,102,241,0.1);
          transition: border-color 0.2s;
        }
        .vg-history-item:hover { border-color: rgba(99,102,241,0.25); }
        .vg-history-thumb {
          width: 64px; height: 40px; border-radius: 8px; overflow: hidden;
          background: rgba(99,102,241,0.1); flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
        }
        .vg-history-thumb video { width: 100%; height: 100%; object-fit: cover; }
        .vg-history-info { flex: 1; min-width: 0; }
        .vg-history-prompt { font-size: 0.85rem; color: #CBD5E1; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; margin-bottom: 3px; }
        .vg-history-meta { font-size: 0.75rem; color: #334155; }

        /* ── No plan card ── */
        .vg-no-plan {
          text-align: center; padding: 60px 32px;
          background: rgba(15,23,42,0.8); border-radius: 24px;
          border: 1px solid rgba(16,185,129,0.2);
          margin-bottom: 24px;
        }
        .vg-no-plan-icon { font-size: 3.5rem; margin-bottom: 16px; }
        .vg-no-plan h2 { font-family: 'Syne', sans-serif; font-size: 1.8rem; font-weight: 700; color: #E2E8F0; margin-bottom: 10px; }
        .vg-no-plan p { color: #64748B; max-width: 420px; margin: 0 auto 28px; line-height: 1.6; }

        /* ── How it works ── */
        .vg-how { margin-bottom: 32px; }
        .vg-how-title { font-family: 'Syne', sans-serif; font-size: 1.2rem; font-weight: 700; color: #CBD5E1; margin-bottom: 16px; }
        .vg-how-steps { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
        @media (max-width: 600px) { .vg-how-steps { grid-template-columns: 1fr; } }
        .vg-how-step { padding: 18px; border-radius: 14px; background: rgba(0,0,0,0.3); border: 1px solid rgba(99,102,241,0.12); }
        .vg-how-step-num { font-size: 0.72rem; font-weight: 700; color: #6366F1; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 6px; }
        .vg-how-step-icon { font-size: 1.5rem; margin-bottom: 8px; }
        .vg-how-step h4 { font-size: 0.9rem; font-weight: 600; color: #CBD5E1; margin-bottom: 4px; }
        .vg-how-step p { font-size: 0.8rem; color: #475569; line-height: 1.5; }

        /* ── Login modal ── */
        .vg-modal-overlay {
          position: fixed; inset: 0; background: rgba(0,0,0,0.7);
          z-index: 1000;
          display: flex; align-items: center; justify-content: center; padding: 20px;
        }
        .vg-modal {
          background: #0F172A; border: 1px solid rgba(99,102,241,0.3);
          border-radius: 24px; padding: 40px; max-width: 400px; width: 100%;
          box-shadow: 0 24px 80px rgba(0,0,0,0.5);
          position: relative;
        }
        .vg-modal-close {
          position: absolute; top: 16px; right: 16px;
          background: rgba(99,102,241,0.1); border: none; color: #64748B;
          width: 32px; height: 32px; border-radius: 50%; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: all 0.2s;
        }
        .vg-modal-close:hover { background: rgba(239,68,68,0.2); color: #EF4444; }
        .vg-modal h2 { font-family: 'Syne', sans-serif; font-size: 1.6rem; font-weight: 800; color: #E2E8F0; margin-bottom: 6px; text-align: center; }
        .vg-modal p { color: #64748B; text-align: center; font-size: 0.9rem; margin-bottom: 24px; }
        .vg-input {
          width: 100%; padding: 13px 16px; margin-bottom: 12px;
          background: rgba(0,0,0,0.3); border: 1.5px solid rgba(99,102,241,0.2);
          border-radius: 12px; color: #E2E8F0;
          font-family: 'DM Sans', sans-serif; font-size: 0.95rem;
          transition: border-color 0.2s;
        }
        .vg-input:focus { outline: none; border-color: #6366F1; }
        .vg-input::placeholder { color: #334155; }
        .vg-divider { display: flex; align-items: center; gap: 12px; margin: 16px 0; color: #334155; font-size: 0.82rem; }
        .vg-divider::before, .vg-divider::after { content: ''; flex: 1; height: 1px; background: rgba(99,102,241,0.15); }
        .vg-modal-link { text-align: center; font-size: 0.85rem; color: #475569; margin-top: 16px; }
        .vg-modal-link a { color: #6366F1; text-decoration: none; }

        /* ── Section divider ── */
        .vg-divider-line { height: 1px; background: rgba(99,102,241,0.1); margin: 8px 0 24px; }

        /* ── Animations ── */
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.85); }
        }     

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .vg-card-inner { padding: 20px; }
          .vg-title { font-size: 2rem; }
          .vg-options { gap: 12px; }
        }
      `}</style>

      {/* Background */}
      <div className="vg-bg" />
      <div className="vg-grid" />

      <div className="vg-wrap">
        {/* Breadcrumb */}
        <nav className="vg-breadcrumb" style={{ marginTop: 80 }}>
          <a href="/">Home</a>
          <span>›</span>
          <a href="/tools">Tools</a>
          <span>›</span>
          <span style={{ color: "#818CF8" }}>AI Video Generator</span>
        </nav>

        {/* Header */}
        <header className="vg-header">
            {isLoggedIn && credits && hasPlan && (
              <div className="vg-eyebrow">
                <span />
                {isLoggedIn && credits ? `${credits.balance.toLocaleString()} credits remaining` : '50 free credits waiting for you'}
              </div>
            )}
          <h1 className="vg-title">AI Video Generator</h1>
          <p className="vg-sub">
            Turn your ideas into cinematic videos in seconds. Type a prompt, pick a style, and watch your vision come to life.
          </p>
        </header>

        {/* How it works — collapsible */}
        <details className="vg-how" style={{ marginBottom: 16 }}>
          <summary style={{
            cursor: 'pointer', fontSize: '0.82rem', color: '#475569',
            fontFamily: "'DM Sans', sans-serif", marginBottom: 12,
            listStyle: 'none', display: 'flex', alignItems: 'center', gap: 6,
          }}>
            <span style={{ color: '#6366F1' }}>▸</span> How it works
          </summary>
          <div className="vg-how-steps">
            {[
              { num: "Step 01", icon: "✍️", title: "Describe your video", body: "Type what you want to see. The more specific, the better the result." },
              { num: "Step 02", icon: "⚙️", title: "Choose model & settings", body: "Pick resolution, duration, aspect ratio and AI model." },
              { num: "Step 03", icon: "🎬", title: "Generate & download", body: "Hit Generate. We'll notify you the moment your video is ready." },
            ].map((s) => (
              <div className="vg-how-step" key={s.num}>
                <div className="vg-how-step-num">{s.num}</div>
                <div className="vg-how-step-icon">{s.icon}</div>
                <h4>{s.title}</h4>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </details>

        {/* ── Main tool card ── */}
        {(
          <div className="vg-card">
            <div className="vg-card-inner">

              {/* Prompt textarea */}
              <textarea
                className="vg-textarea"
                placeholder={
                  genType === "text"
                    ? "e.g. A golden retriever running through a sunlit meadow, cinematic slow motion..."
                    : "e.g. The character slowly turns toward the camera, dramatic lighting shifts..."
                }
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                disabled={!isLoggedIn || isSubmitting}
                maxLength={2000}
                style={{ minHeight: 90, marginBottom: 0 }}
              />

              {/* ── Compact toolbar ── */}
              <div style={{
                display: 'flex', alignItems: 'center', gap: 6, marginTop: 8,
                flexWrap: 'wrap',
              }}>
              
                {/* Gen type */}
                <div style={{ display: 'flex', background: 'rgba(0,0,0,0.3)', borderRadius: 10, padding: 2, border: '1px solid rgba(99,102,241,0.15)', flexShrink: 0 }}>
                  {GENERATION_TYPES.map((t) => (
                    <button
                      key={t.value}
                      onClick={() => setGenType(t.value as "text" | "image")}
                      style={{
                        padding: '6px 12px', borderRadius: 8, border: 'none', cursor: 'pointer',
                        fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 600,
                        background: genType === t.value ? 'linear-gradient(135deg, #6366F1, #4F46E5)' : 'transparent',
                        color: genType === t.value ? '#fff' : '#64748B',
                        transition: 'all 0.2s', whiteSpace: 'nowrap',
                      }}
                    >
                      {t.icon} {t.label}
                    </button>
                  ))}
                </div>
                
                {/* Duration */}
                <div style={{ display: 'flex', background: 'rgba(0,0,0,0.3)', borderRadius: 10, padding: 2, border: '1px solid rgba(99,102,241,0.15)', flexShrink: 0 }}>
                  {DURATION_OPTIONS.map((d) => (
                    <button
                      key={d.value}
                      onClick={() => setDuration(d.value)}
                      disabled={!isLoggedIn}
                      style={{
                        padding: '6px 12px', borderRadius: 8, border: 'none', cursor: 'pointer',
                        fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 600,
                        background: duration === d.value ? 'rgba(99,102,241,0.3)' : 'transparent',
                        color: duration === d.value ? '#818CF8' : '#64748B',
                        transition: 'all 0.2s', opacity: !isLoggedIn ? 0.5 : 1,
                      }}
                    >
                      {d.label}
                    </button>
                  ))}
                </div>
                
                {/* Aspect ratio dropdown */}
                <select
                  value={aspectRatio}
                  onChange={(e) => setAspectRatio(e.target.value)}
                  disabled={!isLoggedIn}
                  style={{
                    padding: '7px 28px 7px 10px', borderRadius: 10,
                    background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(99,102,241,0.2)',
                    color: '#CBD5E1', fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 600,
                    cursor: 'pointer', appearance: 'none', flexShrink: 0,
                    backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 12 12'%3E%3Cpath fill='%236366F1' d='M6 9L1 4h10z'/%3E%3C/svg%3E\")",
                    backgroundRepeat: 'no-repeat', backgroundPosition: 'right 8px center',
                  }}
                >
                  {ASPECT_RATIOS.map((ar) => (
                    <option key={ar.value} value={ar.value} style={{ background: '#0F172A' }}>
                      {ar.icon} {ar.label} — {ar.desc.split(' ')[0]}
                    </option>
                  ))}
                </select>
                
                {/* Model dropdown */}
                <select
                  value={modelAuto ? '__auto__' : effectiveModel}
                  onChange={(e) => {
                    if (e.target.value === '__auto__') {
                      setModelAuto(true);
                    } else {
                      setModelAuto(false);
                      setSelectedModel(e.target.value);
                    }
                  }}
                  style={{
                    padding: '7px 28px 7px 10px', borderRadius: 10,
                    background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(99,102,241,0.2)',
                    color: '#CBD5E1', fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 600,
                    cursor: 'pointer', appearance: 'none', flexShrink: 0,
                    backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 12 12'%3E%3Cpath fill='%236366F1' d='M6 9L1 4h10z'/%3E%3C/svg%3E\")",
                    backgroundRepeat: 'no-repeat', backgroundPosition: 'right 8px center',
                    flex: '1 1 auto', minWidth: 140, maxWidth: 220,
                  }}
                >
                  <option value="__auto__" style={{ background: '#0F172A' }}>✨ Auto Model (Cheapest for you)</option>
                  {(isLoggedIn ? models : STATIC_MODELS_PREVIEW.map(m => ({ id: m.id, displayName: m.name, creditCosts: [{ duration: 5, audio: false, credits: m.cr }], defaultResolution: m.res, supportsAudio: false, description: '' }))).map((m: any) => {
                    const cost = m.creditCosts?.find((c: any) => c.duration === duration && c.audio === false)?.credits
                      ?? m.creditCosts?.[0]?.credits ?? '?';
                    const canAfford = !isLoggedIn || !credits || typeof cost !== 'number' || credits.balance >= cost;
                    return (
                      <option key={m.id} value={m.id} style={{ background: '#0F172A' }}>
                        {!canAfford ? '👑 ' : ''}{m.displayName} · {cost}cr · {m.defaultResolution}{!canAfford ? ' — insufficient credits' : ''}
                      </option>
                    );
                  })}
                </select>

                {(() => {
                  const cost = selectedModelData?.creditCosts?.find(
                    (c: any) => c.duration === duration && c.audio === false
                  )?.credits ?? 0;
                  const canAfford = !isLoggedIn || !credits || credits.balance >= cost;
                  if (canAfford || !isLoggedIn) return null;
                  return (
                    <button
                      onClick={() => upsellRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
                      title="Not enough credits — get more"
                      style={{
                        display: 'flex', alignItems: 'center', gap: 5,
                        padding: '6px 12px', borderRadius: 10, border: '1px solid rgba(245,158,11,0.35)',
                        background: 'rgba(245,158,11,0.08)', color: '#F59E0B',
                        fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 600,
                        cursor: 'pointer', flexShrink: 0, transition: 'all 0.2s',
                        whiteSpace: 'nowrap',
                      }}
                      onMouseEnter={e => e.currentTarget.style.background = 'rgba(245,158,11,0.18)'}
                      onMouseLeave={e => e.currentTarget.style.background = 'rgba(245,158,11,0.08)'}
                    >
                      👑 Get credits
                    </button>
                  );
                })()}                
                
                {/* Audio toggle — only if model supports it */}
                {(isLoggedIn ? (models.find(m => m.id === effectiveModel)?.supportsAudio) : false) && (
                  <label style={{ display: 'flex', alignItems: 'center', gap: 5, cursor: 'pointer', flexShrink: 0 }}
                    title="AI-generated audio (2× credits)">
                    <div className="vg-switch" style={{ width: 36, height: 20 }}>
                      <input type="checkbox" checked={audioEnabled} onChange={(e) => setAudioEnabled(e.target.checked)} />
                      <div className="vg-switch-track" />
                      <div className="vg-switch-thumb" style={{ width: 14, height: 14, top: 2, left: 2 }} />
                    </div>
                    <span style={{ fontSize: 11, color: '#64748B', fontFamily: "'DM Sans', sans-serif" }}>🎵</span>
                  </label>
                )}

                {/* Prompt suggestions button — moved into toolbar as a subtle icon */}
                <div style={{ display: 'flex', gap: 4, overflowX: 'auto', scrollbarWidth: 'none', flexShrink: 1 }}>
                  {["Aerial neon city", "Golden retriever", "Ocean sunset", "Particle blast"].map((s, i) => (
                    <button key={i}
                      onClick={() => setPrompt(["Aerial neon city at night", "Golden retriever slow motion", "Ocean waves at sunset", "Abstract particle explosion"][i])}
                      style={{
                        padding: '5px 9px', borderRadius: 999, border: '1px solid rgba(99,102,241,0.2)',
                        background: 'rgba(99,102,241,0.07)', color: '#6366F1',
                        fontSize: 10.5, fontWeight: 500, cursor: 'pointer',
                        fontFamily: "'DM Sans', sans-serif", whiteSpace: 'nowrap', flexShrink: 0,
                      }}
                    >{s}</button>
                  ))}
                </div>
                
                {/* Spacer */}
                <div style={{ flex: 1 }} />
                
                {/* Generate button — compact */}
                {!isLoggedIn ? (
                  <button className="vg-generate-btn" onClick={() => setShowLoginModal(true)}
                    style={{ width: 'auto', padding: '8px 20px', fontSize: '0.9rem', borderRadius: 10, flexShrink: 0 }}>
                    ✨ Generate Free
                  </button>
                ) : (
                  <button className="vg-generate-btn"
                    onClick={handleGenerate}
                    disabled={isSubmitting || !prompt.trim() || (genType === "image" && !imageFile) || (credits?.balance === 0)  || (!!currentJob && (currentJob.status === 'PENDING' || currentJob.status === 'PROCESSING'))}
                    style={{ width: 'auto', padding: '8px 20px', fontSize: '0.9rem', borderRadius: 10, flexShrink: 0 }}>
                    {isSubmitting ? "Submitting…" : (currentJob && (currentJob.status === 'PENDING' || currentJob.status === 'PROCESSING')) ? "⏳ Generating…" : "✨ Generate"}
                  </button>
                )}
              </div>
              
              {/* Image upload — for image-to-video (kept below toolbar) */}
              {genType === "image" && (
                <div style={{ marginTop: 12 }}>
                  {!imagePreview ? (
                    <div className="vg-dropzone" ref={dropRef}
                      onDragOver={(e) => { e.preventDefault(); dropRef.current?.classList.add("drag-over"); }}
                      onDragLeave={() => dropRef.current?.classList.remove("drag-over")}
                      onDrop={(e) => { dropRef.current?.classList.remove("drag-over"); handleImageDrop(e); }}
                      onClick={() => fileInputRef.current?.click()}
                      style={{ padding: '20px 16px' }}>
                      <div className="vg-dropzone-icon" style={{ fontSize: '1.8rem' }}>🖼️</div>
                      <p>Drop image or <span style={{ color: "#6366F1" }}>click to browse</span></p>
                      <small>PNG, JPG, WEBP — up to 10MB</small>
                      <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageSelect} style={{ display: "none" }} />
                    </div>
                  ) : (
                    <div className="vg-img-preview">
                      <img src={imagePreview} alt="Reference" />
                      <button className="vg-img-remove" onClick={() => { setImageFile(null); setImagePreview(null); }}>✕</button>
                    </div>
                  )}
                </div>
              )}

              {/* Advanced options */}
              <details style={{ marginTop: 10 }}>
                <summary className="vg-advanced-toggle" style={{ marginBottom: 0 }}>
                  <span>⚙️ Advanced options</span>
                  <span style={{ marginLeft: "auto", fontSize: "0.75rem" }}>Optional</span>
                </summary>
                <div style={{ marginTop: 10 }}>
                  <label className="vg-label">Negative prompt — what to avoid</label>
                  <textarea className="vg-textarea" style={{ minHeight: 60 }}
                    placeholder="e.g. blurry, low quality, distorted, watermark..."
                    value={negativePrompt} onChange={(e) => setNegativePrompt(e.target.value)}
                    disabled={!isLoggedIn} maxLength={500} />
                </div>
              </details>
            
              {/* Credits / status strip */}
              {isLoggedIn && credits && hasPlan && (
                <div style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '7px 12px', background: 'rgba(0,0,0,0.2)',
                  border: '1px solid rgba(99,102,241,0.12)', borderRadius: 8, marginTop: 10,
                  flexWrap: 'wrap', gap: 6,
                }}>
                  <span style={{ fontSize: 11.5, color: '#64748B' }}>
                    <span style={{ color: '#818CF8', fontWeight: 600 }}>{credits.balance.toLocaleString()}</span> credits · {credits.planType}
                  </span>
                  <span style={{ fontSize: 11.5, color: '#475569' }}>
                    Cost: <strong style={{ color: '#818CF8' }}>{creditsNeeded} cr</strong>
                  </span>
                </div>
              )}

              {!isLoggedIn && (
                <div style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '7px 12px', background: 'rgba(0,0,0,0.15)',
                  border: '1px solid rgba(99,102,241,0.1)', borderRadius: 8, marginTop: 10,
                }}>
                  <span style={{ fontSize: 11.5, color: '#64748B' }}>50 free credits on signup</span>
                  <span style={{ fontSize: 11.5, color: '#475569' }}>
                    Est. cost: <strong style={{ color: '#818CF8' }}>
                      {selectedModel === 'wan2.5' ? (duration === 5 ? '46' : '92') :
                       selectedModel === 'kling-v2.5-turbo' ? (duration === 5 ? '64' : '130') :
                       selectedModel === 'kling-v2.6-pro' ? (duration === 5 ? '64' : '130') :
                       selectedModel === 'veo3.1-fast' ? (duration === 5 ? '92' : '186') :
                       selectedModel === 'veo3.1' ? (duration === 5 ? '186' : '370') :
                       duration === 5 ? '46' : '92'} cr
                    </strong>
                  </span>
                </div>
              )}

              {/* Low credits warning */}
              {isLoggedIn && credits && credits.balance < 100 && credits.balance > 0 && (
                <div style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '7px 12px', background: 'rgba(245,158,11,0.07)',
                  border: '1px solid rgba(245,158,11,0.22)', borderRadius: 8, marginTop: 8, gap: 10,
                }}>
                  <span style={{ fontSize: 11.5, color: '#F59E0B', fontWeight: 600 }}>⚡ {credits.balance} credits left</span>
                  <a href="/pricing" style={{
                    fontSize: 11, fontWeight: 700, color: '#F59E0B', textDecoration: 'none',
                    padding: '3px 9px', borderRadius: 6, background: 'rgba(245,158,11,0.15)',
                    border: '1px solid rgba(245,158,11,0.3)',
                  }}>Top Up →</a>
                </div>
              )}

              {/* Out of credits */}
              {isLoggedIn && credits && credits.balance === 0 && (
                <div style={{
                  background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)',
                  borderRadius: 10, padding: '14px', marginTop: 10, textAlign: 'center',
                }}>
                  <p style={{ fontSize: 13.5, color: '#FCA5A5', fontWeight: 600, marginBottom: 6 }}>🪫 Out of credits</p>
                  <a href="/pricing" style={{
                    display: 'inline-block', padding: '9px 22px', borderRadius: 9,
                    background: 'linear-gradient(135deg, #6366F1, #4F46E5)', color: 'white',
                    fontWeight: 700, fontSize: 13, textDecoration: 'none',
                  }}>View Plans & Top Up →</a>
                </div>
              )}

              {/* Error */}
              <AnimatePresence>
                {error && (
                  <motion.div className="vg-error" style={{ marginTop: 10, marginBottom: 0 }}
                    initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                    <span>⚠️</span> {error}
                  </motion.div>
                )}
              </AnimatePresence>
              {/* Scroll to history nudge — shown when job is processing or history exists */}
              {isLoggedIn && (currentJob || history.length > 0) && (
                <button
                  onClick={() => historyRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                    width: '100%', marginTop: 8, padding: '7px 12px',
                    background: 'transparent', border: '1px dashed rgba(99,102,241,0.45)',
                    borderRadius: 8, cursor: 'pointer', transition: 'all 0.2s',
                    fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: '#818CF8',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'rgba(99,102,241,0.5)';
                    e.currentTarget.style.color = '#A5B4FC';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(99,102,241,0.25)';
                    e.currentTarget.style.color = '#818CF8';
                  }}
                >
                  🕒 {history.length > 0 ? `${history.length} video${history.length > 1 ? 's' : ''} in history` : 'Generation in progress'} — scroll to results ↓
                </button>
              )}              
              
              {!isLoggedIn && (
                <p style={{ textAlign: 'center', fontSize: 11.5, color: '#475569', marginTop: 8 }}>
                  Free account · 50 credits instantly · No credit card
                </p>
              )}
            </div>
          </div>
        )}     

        {/* ── Demo Video ── */}
        <div style={{ marginBottom: 36 }}>
          <div style={{
            textAlign: 'center', marginBottom: 14,
          }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.28)',
              borderRadius: 999, padding: '5px 16px',
              fontSize: 11.5, fontWeight: 700, color: '#818CF8',
              letterSpacing: '0.1em', textTransform: 'uppercase',
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#6366F1', display: 'inline-block', animation: 'pulse 2s infinite' }} />
              AI-Generated Sample
            </span>
          </div>

          <div style={{
            position: 'relative',
            borderRadius: 20,
            overflow: 'hidden',
            border: '1px solid rgba(99,102,241,0.2)',
            background: '#000',
            boxShadow: '0 24px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(99,102,241,0.1)',
            maxWidth: 720,
            margin: '0 auto',
          }}>
            {/* Glow accent */}
            <div style={{
              position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1,
              background: 'linear-gradient(180deg, transparent 60%, rgba(8,11,18,0.7) 100%)',
            }} />

            <video
              src="https://cdn.scenith.in/ai_video_gen/2/video_3a8f8067-40ff-4ec4-9173-83cfc81a5cb4.mp4"
              autoPlay
              loop
              muted
              playsInline
              disablePictureInPicture
              disableRemotePlayback
              style={{ width: '100%', display: 'block', maxHeight: 400, objectFit: 'cover', pointerEvents: 'none' }}
              aria-label="AI-generated video demo by Scenith AI Video Generator"
            />

            {/* Bottom label */}
            <div style={{
              position: 'absolute', bottom: 14, left: '50%', transform: 'translateX(-50%)',
              zIndex: 2,
              background: 'rgba(8,11,18,0.75)', backdropFilter: 'blur(10px)',
              border: '1px solid rgba(99,102,241,0.25)',
              borderRadius: 999, padding: '5px 16px',
              display: 'flex', alignItems: 'center', gap: 8,
              whiteSpace: 'nowrap',
            }}>
              <span style={{ fontSize: 13 }}>🎬</span>
              <span style={{ fontSize: 11.5, fontWeight: 600, color: '#CBD5E1', fontFamily: "'DM Sans', sans-serif" }}>
                Made with Kling 2.5 Pro · 130 credits · 
                <a href="#" onClick={() => { setPrompt("Aerial shot of a neon-lit futuristic city at night, cinematic, 8K"); window.scrollTo({top: 0, behavior: 'smooth'}); }}
                   style={{ color: '#818CF8', textDecoration: 'underline', marginLeft: 4 }}>
                  Try this prompt →
                </a>
              </span>
            </div>
          </div>

          <p style={{
            textAlign: 'center', fontSize: 12.5, color: '#475569',
            marginTop: 12, fontFamily: "'DM Sans', sans-serif",
          }}>
            Every video is uniquely generated from your text prompt — no templates, no stock footage.
          </p>
        </div>

        {/* ── Current job card ── */}
        <AnimatePresence>
          {currentJob && (
            <motion.div ref={jobCardRef} className="vg-job-card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              <div className="vg-job-header">
                <div>
                  <div className="vg-job-title">Generation {currentJob.id}</div>
                  <div className="vg-job-prompt">"{currentJob.prompt}"</div>
                  <div className="vg-job-meta">
                    <span className="vg-job-tag">{currentJob.modelDisplayName}</span>
                    <span className="vg-job-tag">{currentJob.durationSeconds}s</span>
                    <span className="vg-job-tag">{currentJob.aspectRatio}</span>
                    <span className="vg-job-tag">{currentJob.creditsUsed} credits</span>
                  </div>
                </div>
                <StatusBadge status={currentJob.status} />
              </div>

              {/* Processing */}
              {(currentJob.status === "PENDING" || currentJob.status === "PROCESSING") && (
                <div className="vg-processing">
                  <div className="vg-processing-ring" />
                  <div>
                    <strong>
                      {currentJob.status === "PENDING" ? "Queued — starting soon" : "Generating your video…"}
                    </strong>
                    <p>This usually takes 30–120 seconds. We're checking every 5 seconds.</p>
                  </div>
                </div>
              )}

              {/* Completed */}
              {currentJob.status === "COMPLETED" && currentJob.videoUrl && (
                <>
                  <div className="vg-video-wrap">
                    <video controls autoPlay loop src={currentJob.videoUrl} />
                  </div>
                  <div className="vg-video-actions">
                    <a
                      className="vg-video-btn primary"
                      href={currentJob.videoUrl} 
                      download={`scenith-video-${currentJob.id}.mp4`}
                      target="_blank"
                      rel="noopener noreferrer" 
                    >
                      📥 Download MP4
                    </a>
                    <button
                      className="vg-video-btn secondary"
                      onClick={() => { setCurrentJob(null); setPrompt(""); setNegativePrompt(""); setImageFile(null); setImagePreview(null); }}
                    >
                      🔄 Generate Another
                    </button>
                  </div>
                  <div style={{
                    marginTop: 14, padding: '12px 16px',
                    background: 'rgba(99,102,241,0.07)',
                    border: '1px solid rgba(99,102,241,0.2)',
                    borderRadius: 12,
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    gap: 10, flexWrap: 'wrap',
                  }}>
                    <span style={{ fontSize: 13, color: '#CBD5E1', fontWeight: 500 }}>
                      Love this result? Create more with Premium credits! ✨
                    </span>
                    <a href="/pricing" style={{
                      fontSize: 12, fontWeight: 700, color: '#fff',
                      padding: '6px 14px', borderRadius: 8,
                      background: 'linear-gradient(135deg, #6366F1, #4F46E5)',
                      textDecoration: 'none', whiteSpace: 'nowrap',
                      boxShadow: '0 4px 14px rgba(99,102,241,0.35)',
                    }}>View Plans →</a>
                  </div>                  
                </>
              )}

              {/* Failed */}
              {currentJob.status === "FAILED" && (
                <>
                  <div className="vg-error" style={{ marginTop: 0 }}>
                    <span>⚠️</span>
                    <div>
                      <strong>Generation failed.</strong> {currentJob.errorMessage || "Something went wrong on our end. Your credits have been refunded."}
                    </div>
                  </div>
                  <button
                    className="vg-video-btn secondary"
                    style={{ marginTop: 12, width: '100%' }}
                    onClick={() => setCurrentJob(null)}
                  >
                    🔄 Try Again
                  </button>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── History ── */}
        {isLoggedIn && history.length > 0 && (
          <>
            <button ref={historyRef} className="vg-history-toggle" onClick={() => setShowHistory(!showHistory)}>
              <span>🕒 Generation History ({history.length})</span>
              <span>{showHistory ? "▲" : "▼"}</span>
            </button>
            <AnimatePresence>
              {showHistory && (
                <motion.div className="vg-history-grid" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}>
                  {history.slice(0, 20).map((job) => (
                    <div key={job.id} className="vg-history-item">
                      <div className="vg-history-thumb">
                        {job.status === "COMPLETED" && job.videoUrl ? (
                          <video src={job.videoUrl} muted />
                        ) : (
                          <span style={{ fontSize: "1.2rem" }}>
                            {job.status === "FAILED" ? "❌" : "⏳"}
                          </span>
                        )}
                      </div>
                      <div className="vg-history-info">
                        <div className="vg-history-prompt">{job.prompt}</div>
                        <div className="vg-history-meta">
                          {job.modelDisplayName} · {job.durationSeconds}s ·{" "}
                          {new Date(job.createdAt).toLocaleDateString()}
                        </div>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
                        <StatusBadge status={job.status} />
                        {job.status === "COMPLETED" && job.videoUrl && (
                          <button
                            onClick={async () => {
                              try {
                                const response = await fetch(job.videoUrl!, { mode: 'cors' });
                                if (!response.ok) throw new Error('Download failed');

                                const blob = await response.blob();
                                const url = window.URL.createObjectURL(blob);

                                const a = document.createElement('a');
                                a.href = url;
                                a.download = `scenith-video-${job.id}.mp4`;
                                document.body.appendChild(a);
                                a.click();

                                // Clean up
                                document.body.removeChild(a);
                                window.URL.revokeObjectURL(url);
                              } catch (err) {
                                console.error('Download error:', err);
                                alert('Could not download video. Try right-click → Save video as...');
                              }
                            }}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: 32,
                              height: 32,
                              borderRadius: 8,
                              background: "rgba(99,102,241,0.15)",
                              border: "1px solid rgba(99,102,241,0.3)",
                              color: "#818CF8",
                              fontSize: "1.1rem",
                              cursor: "pointer",
                              transition: "background 0.2s, transform 0.1s",
                            }}
                            title="Download video"
                            onMouseEnter={(e) => e.currentTarget.style.background = "rgba(99,102,241,0.25)"}
                            onMouseLeave={(e) => e.currentTarget.style.background = "rgba(99,102,241,0.15)"}
                          >
                            ↓
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}

        {isLoggedIn && credits && credits.planType === 'FREE' && (
          <div ref={upsellRef} style={{
            background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(99,102,241,0.25)',
            borderRadius: 20, padding: '36px 28px', textAlign: 'center', marginBottom: 24,
          }}>
            <div style={{ fontSize: '2.8rem', marginBottom: 12 }}>🎬</div>
            <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: '1.5rem', color: '#E2E8F0', marginBottom: 8 }}>
              Get more credits for AI Videos!
            </h3>
            <p style={{ color: '#64748B', fontSize: 14, maxWidth: 380, margin: '0 auto 22px', lineHeight: 1.6 }}>
              Premium Plans start at just $9/month and includes 300 credits!
            </p>
            <a href="/pricing" style={{
              display: 'inline-block', padding: '14px 36px', borderRadius: 12,
              background: 'linear-gradient(135deg, #6366F1, #4F46E5)', color: 'white',
              fontWeight: 700, fontSize: 15, textDecoration: 'none',
              boxShadow: '0 8px 28px rgba(99,102,241,0.4)',
            }}>
              Unlock AI Video — $9/mo →
            </a>
            <p style={{ fontSize: 11.5, color: '#334155', marginTop: 12 }}>
              · Instant access · All AI models included
            </p>
          </div>
        )}         

        <VideoPageSEOSections onPromptSelect={setPrompt} />
      </div>

      {/* ── Login modal ── */}
      <AnimatePresence>
        {showLoginModal && (
          <motion.div className="vg-modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div className="vg-modal" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}>
              <button className="vg-modal-close" onClick={() => setShowLoginModal(false)}><FaTimes size={12} /></button>
              <h2>SCENITH</h2>
              <p>Login to start generating AI videos</p>
              {loginError && <div className="vg-error" style={{ marginBottom: 14 }}><span>⚠️</span> {loginError}</div>}
              {loginSuccess && <div style={{ background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.3)", color: "#34D399", padding: "12px 14px", borderRadius: 10, marginBottom: 14, fontSize: "0.88rem" }}>{loginSuccess}</div>}
              {isLoggingIn && (
                <div style={{ display: "flex", justifyContent: "center", margin: "16px 0" }}>
                  <div className="vg-processing-ring" style={{ width: 36, height: 36 }} />
                </div>
              )}
              <form onSubmit={(e) => { e.preventDefault(); const fd = new FormData(e.currentTarget); handleLogin({ email: fd.get("email") as string, password: fd.get("password") as string }); }}>
                <input name="email" type="email" className="vg-input" placeholder="Email address" required disabled={isLoggingIn} />
                <input name="password" type="password" className="vg-input" placeholder="Password" required disabled={isLoggingIn} />
                <button type="submit" className="vg-generate-btn" style={{ marginTop: 4 }} disabled={isLoggingIn}>
                  {isLoggingIn ? "Logging in…" : "Login"}
                </button>
              </form>
              <div className="vg-divider">OR</div>
              <div id="googleSignInButtonVideo" style={{ display: "flex", justifyContent: "center" }} />
              <p className="vg-modal-link">New to Scenith? <a href="/signup">Create account →</a></p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
            style={{ background: '#080B12', borderRadius: 24, padding: 0, maxWidth: 560, width: '96%', maxHeight: '85vh', overflowY: 'auto', position: 'relative', border: '1px solid rgba(99,102,241,0.3)', boxShadow: '0 40px 120px rgba(0,0,0,0.75)' }}
          >
            <button onClick={() => setShowWelcomeModal(false)} style={{ position: 'absolute', top: 14, right: 14, zIndex: 10, background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, width: 32, height: 32, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6a6a8a' }} aria-label="Close">
              <FaTimes size={11} />
            </button>
            <div style={{ height: 5, borderRadius: '24px 24px 0 0', background: 'linear-gradient(90deg, #6366F1, #8b5cf6, #34D399)' }} />
            <div style={{ padding: '28px 28px 24px' }}>
              <div style={{ textAlign: 'center', marginBottom: 22 }}>
                <div style={{ fontSize: 40, marginBottom: 10 }}>🎬</div>
                <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 20, fontWeight: 900, color: '#E2E8F0', marginBottom: 6 }}>Welcome to Scenith AI Video</h2>
                <p style={{ fontSize: 13, color: '#6a6a8a', maxWidth: 380, margin: '0 auto', lineHeight: 1.55 }}>
                  You're on the <strong style={{ color: '#818CF8' }}>Free Plan</strong>. Here's what you get — and what you unlock with <strong style={{ color: '#818CF8' }}>Creator Lite</strong> for just $9/mo.
                </p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 20 }}>
                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '16px 14px' }}>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', color: '#44445e', textTransform: 'uppercase', marginBottom: 12 }}>🆓 Free Plan</div>
                  {[
                    { icon: '💳', label: 'Credits', val: '50 total' },
                    { icon: '🎬', label: 'Video models', val: 'Limited only' },
                    { icon: '📥', label: 'Downloads', val: 'MP4 included' },
                    { icon: '💰', label: 'Topups', val: '✗ Not available' },
                  ].map((item, i) => (
                    <div key={i} style={{ marginBottom: i < 3 ? 8 : 0 }}>
                      <div style={{ fontSize: 10, color: '#3a3a52', marginBottom: 1 }}>{item.icon} {item.label}</div>
                      <div style={{ fontSize: 12, color: '#55557a', fontWeight: 600 }}>{item.val}</div>
                    </div>
                  ))}
                </div>
                <div style={{ background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.3)', borderRadius: 14, padding: '16px 14px', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: -11, left: '50%', transform: 'translateX(-50%)', background: 'linear-gradient(135deg, #6366F1, #8b5cf6)', color: '#fff', fontSize: 9, fontWeight: 800, letterSpacing: '0.08em', padding: '3px 12px', borderRadius: 999, whiteSpace: 'nowrap' }}>⭐ MOST POPULAR</div>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', color: '#6366F1', textTransform: 'uppercase', marginBottom: 12 }}>Creator Lite — $9/mo</div>
                  {[
                    { icon: '💳', label: 'Credits', val: '300 /mo' },
                    { icon: '🎬', label: 'Video models', val: 'All models ✓' },
                    { icon: '📥', label: 'Downloads', val: 'Unlimited ✓' },
                    { icon: '💰', label: 'Topups', val: '✓ Available' },
                  ].map((item, i) => (
                    <div key={i} style={{ marginBottom: i < 3 ? 8 : 0 }}>
                      <div style={{ fontSize: 10, color: '#6366F1', marginBottom: 1 }}>{item.icon} {item.label}</div>
                      <div style={{ fontSize: 12, color: '#818CF8', fontWeight: 700 }}>{item.val}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ textAlign: 'center', marginBottom: 14 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: 6, marginBottom: 4 }}>
                  <span style={{ fontFamily: "'Syne', sans-serif", fontSize: 34, fontWeight: 900, color: '#E2E8F0', letterSpacing: '-0.03em' }}>$15</span>
                  <span style={{ fontSize: 12, color: '#55557a' }}>/mo</span>
                  <span style={{ background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.28)', color: '#34D399', fontSize: 10, fontWeight: 700, padding: '3px 8px', borderRadius: 999 }}>300 CREDITS INCLUDED</span>
                </div>
                <p style={{ fontSize: 11, color: '#3a3a52', marginBottom: 14 }}>Cancel anytime · No hidden fees · All models included</p>
                <a href="/pricing" onClick={() => setShowWelcomeModal(false)} style={{ display: 'block', width: '100%', padding: '13px 24px', background: 'linear-gradient(135deg, #6366F1 0%, #8b5cf6 100%)', color: '#fff', borderRadius: 12, textDecoration: 'none', fontSize: 14, fontWeight: 700, boxShadow: '0 8px 32px rgba(99,102,241,0.45)', textAlign: 'center' }}>
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

export default AIVideoGenerationClient;