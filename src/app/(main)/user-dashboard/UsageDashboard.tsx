"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { API_BASE_URL } from "../../config";

/* ═══════════════════════════════════════════════════════
   TYPES
═══════════════════════════════════════════════════════ */
interface UsageRange {
  used: number;
  limit: number;
  remaining?: number;
}

interface DashboardUsage {
  tts: { monthly: UsageRange; daily: UsageRange; maxCharRequest: number };
  externalTts: {
    hasAccess: boolean;
    openai: { monthly: UsageRange; daily: UsageRange };
    azure: { monthly: UsageRange; daily: UsageRange };
    maxCharRequest: number;
  };
  imageGen: { monthly: UsageRange; daily: UsageRange; availableModels: any[] };
  videoGen: {
    hasVideoPlan: boolean;
    monthlyLimit: number;
    monthlyUsed: number;
    monthlyRemaining: number;
    dailyLimit: number;
    dailyRemaining: number;
    activePlan: string | null;
  };
  bgRemoval: { monthlyUsed: number; monthlyLimit: number };
  svgDownloads: {
    canDownloadSvg: boolean;
    maxResolution: number;
    dailyLimit: number;
    monthlyLimit: number;
    dailyCount: number;
    monthlyCount: number;
  };
  videoSpeed: { videosPerMonth: number; videosUsed: number; maxVideoLength: number; maxQuality: string };
}

interface ActivePlan {
  planType: string;
  expiryDate: string | null;
}

interface UserProfile {
  email: string;
  name: string;
  role: string;
  profilePicture: string | null;
}

/* ═══════════════════════════════════════════════════════
   PLAN CONFIG
═══════════════════════════════════════════════════════ */
const PLAN_META: Record<string, {
  name: string; color: string; accent: string; gradientFrom: string; gradientTo: string;
  next: string | null; nextName: string | null; price: string | null;
  ttsMonthly: number; ttsDaily: number; ttsPerRequest: number;
  imageCreditsMonthly: number; imageCreditsDailyMax: number; hasImageGen: boolean;
  bgRemovalMonthly: number;
  svgMonthly: number; svgDaily: number;
  speedVideosMonthly: number; maxVideoMinutes: number;
  maxQuality: string;
}> = {
  BASIC: {
    name: "Starter Forge", color: "#6355dc", accent: "#6355dc",
    gradientFrom: "#667eea", gradientTo: "#764ba2",
    next: "CREATOR_LITE", nextName: "Creator Lite", price: "₹99/mo",
    ttsMonthly: 2000, ttsDaily: 200, ttsPerRequest: 150,
    imageCreditsMonthly: 0, imageCreditsDailyMax: 0, hasImageGen: false,
    bgRemovalMonthly: 5,
    svgMonthly: 10, svgDaily: 2,
    speedVideosMonthly: 5, maxVideoMinutes: 5,
    maxQuality: "720p",
  },
  CREATOR_LITE: {
    name: "Creator Lite", color: "#818cf8", accent: "#818cf8",
    gradientFrom: "#818cf8", gradientTo: "#6355dc",
    next: "CREATOR", nextName: "Creator Spark", price: "₹499/mo",
    ttsMonthly: 10000, ttsDaily: 2500, ttsPerRequest: 700,
    imageCreditsMonthly: 100, imageCreditsDailyMax: 15, hasImageGen: true,
    bgRemovalMonthly: 100,
    svgMonthly: -1, svgDaily: -1,
    speedVideosMonthly: 30, maxVideoMinutes: 10,
    maxQuality: "1080p",
  },
  CREATOR: {
    name: "Creator Spark", color: "#7c3aed", accent: "#7c3aed",
    gradientFrom: "#a899f5", gradientTo: "#7c3aed",
    next: "STUDIO", nextName: "Creator Odyssey", price: "₹999/mo",
    ttsMonthly: 75000, ttsDaily: 20000, ttsPerRequest: 4000,
    imageCreditsMonthly: 250, imageCreditsDailyMax: 30, hasImageGen: true,
    bgRemovalMonthly: 500,
    svgMonthly: -1, svgDaily: -1,
    speedVideosMonthly: 60, maxVideoMinutes: 30,
    maxQuality: "1440p",
  },
  STUDIO: {
    name: "Creator Odyssey", color: "#d97706", accent: "#d97706",
    gradientFrom: "#f59e0b", gradientTo: "#d97706",
    next: null, nextName: null, price: null,
    ttsMonthly: 250000, ttsDaily: -1, ttsPerRequest: 6000,
    imageCreditsMonthly: 500, imageCreditsDailyMax: 60, hasImageGen: true,
    bgRemovalMonthly: 1500,
    svgMonthly: -1, svgDaily: -1,
    speedVideosMonthly: -1, maxVideoMinutes: -1,
    maxQuality: "4K",
  },
  ADMIN: {
    name: "Admin", color: "#059669", accent: "#059669",
    gradientFrom: "#10b981", gradientTo: "#059669",
    next: null, nextName: null, price: null,
    ttsMonthly: -1, ttsDaily: -1, ttsPerRequest: -1,
    imageCreditsMonthly: -1, imageCreditsDailyMax: -1, hasImageGen: true,
    bgRemovalMonthly: -1,
    svgMonthly: -1, svgDaily: -1,
    speedVideosMonthly: -1, maxVideoMinutes: -1,
    maxQuality: "4K",
  },
};

const TOOLS = [
  { id: "tts",              icon: "🎙️", label: "AI Voice (Google TTS)",   category: "AI",     desc: "Convert text to natural-sounding speech",            path: "/tools/ai-voice-generation",  availableOn: ["BASIC","CREATOR_LITE","CREATOR","STUDIO","ADMIN"], tip: "Create voiceovers for your videos, podcasts & more." },
  { id: "externalTts",      icon: "🤖", label: "AI Voice (OpenAI/Azure)", category: "AI",     desc: "Premium external neural voices",                     path: "/tools/ai-voice-generation",  availableOn: ["CREATOR_LITE","CREATOR","STUDIO","ADMIN"],         tip: "Access OpenAI & Azure neural voices for ultra-realistic speech." },
  { id: "imageGen",         icon: "🎨", label: "AI Image Generation",     category: "AI",     desc: "Generate stunning images from text prompts",          path: "/tools/ai-image-generation",  availableOn: ["CREATOR_LITE","CREATOR","STUDIO","ADMIN"],         tip: "Generate professional images with 7 AI models — from ₹99/mo." },
  { id: "videoGen",         icon: "🎬", label: "AI Video Generation",     category: "AI",     desc: "Create videos from text or images",                  path: "/tools/ai-video-generation",  availableOn: ["VIDEO_GEN_PRO","VIDEO_GEN_ELITE","ADMIN"],         tip: "Bring ideas to life with AI-generated video." },
  { id: "bgRemoval",        icon: "✂️", label: "Background Removal",      category: "Image",  desc: "Remove backgrounds with AI precision",               path: "/tools/background-removal",   availableOn: ["BASIC","CREATOR_LITE","CREATOR","STUDIO","ADMIN"], tip: "Remove backgrounds from product photos instantly." },
  { id: "svgDownloads",     icon: "🔷", label: "SVG Library",             category: "Assets", desc: "Download premium vector icons & illustrations",      path: "/tools/svg-library",          availableOn: ["CREATOR_LITE","CREATOR","STUDIO","ADMIN"],         tip: "Access thousands of premium SVG icons — upgrade to unlock." },
  { id: "subtitles",        icon: "📝", label: "Auto Subtitles",          category: "Video",  desc: "Auto-generate subtitles for your videos",            path: "/tools/add-subtitles-to-videos",            availableOn: ["BASIC","CREATOR_LITE","CREATOR","STUDIO","ADMIN"], tip: "Add accurate subtitles to boost engagement." },
  { id: "videoSpeed",       icon: "⚡", label: "Video Speed Control",     category: "Video",  desc: "Speed up or slow down videos with pitch correction", path: "/tools/video-speed",          availableOn: ["BASIC","CREATOR_LITE","CREATOR","STUDIO","ADMIN"], tip: "Create time-lapse or slow-mo clips from any footage." },
  { id: "imageEditor",      icon: "🖼️", label: "Image Editor",            category: "Image",  desc: "Edit and enhance your images with pro tools",        path: "/tools/image-editor",         availableOn: ["BASIC","CREATOR_LITE","CREATOR","STUDIO","ADMIN"], tip: "A full-featured image editor right in your browser." },
  { id: "pdfTools",         icon: "📄", label: "PDF Tools",               category: "Docs",   desc: "Convert, merge, compress and edit PDFs",             path: "/tools/pdf-tools",            availableOn: ["BASIC","CREATOR_LITE","CREATOR","STUDIO","ADMIN"], tip: "Handle all your PDF needs — merge, split, compress." },
  { id: "mediaCompression", icon: "📦", label: "Media Compression",       category: "Media",  desc: "Compress videos & images without quality loss",      path: "/tools/compress",             availableOn: ["BASIC","CREATOR_LITE","CREATOR","STUDIO","ADMIN"], tip: "Reduce file size for faster uploads & sharing." },
  { id: "mediaConversion",  icon: "🔄", label: "Media Conversion",        category: "Media",  desc: "Convert between any video, audio or image format",   path: "/tools/convert",              availableOn: ["BASIC","CREATOR_LITE","CREATOR","STUDIO","ADMIN"], tip: "Convert MP4 to MOV, PNG to WEBP and 100+ more formats." },
];

/* ═══════════════════════════════════════════════════════
   HELPERS
═══════════════════════════════════════════════════════ */
function formatNum(n: number): string {
  if (n >= 1000000) return (n / 1000000).toFixed(1) + "M";
  if (n >= 1000)    return (n / 1000).toFixed(1) + "K";
  return n.toString();
}

function calcPct(used: number, limit: number): number {
  if (limit <= 0) return 0;
  return Math.min(100, Math.round((used / limit) * 100));
}

function daysLeft(expiryStr: string | null): number {
  if (!expiryStr) return -1;
  const diff = new Date(expiryStr).getTime() - Date.now();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

function severity(p: number): "ok" | "warning" | "critical" {
  if (p >= 90) return "critical";
  if (p >= 70) return "warning";
  return "ok";
}

function sevColor(p: number, base: string): string {
  const s = severity(p);
  return s === "critical" ? "#ef4444" : s === "warning" ? "#f59e0b" : base;
}

/* ═══════════════════════════════════════════════════════
   SUB-COMPONENTS  (light palette)
═══════════════════════════════════════════════════════ */
function RingGauge({ pct, size = 48, stroke = 4.5, color }: { pct: number; size?: number; stroke?: number; color: string }) {
  const r    = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const dash = (pct / 100) * circ;
  const c    = sevColor(pct, color);
  return (
    <svg width={size} height={size} style={{ transform: "rotate(-90deg)", flexShrink: 0 }}>
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#e5e7eb" strokeWidth={stroke} />
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={c} strokeWidth={stroke}
        strokeDasharray={`${dash} ${circ}`} strokeLinecap="round"
        style={{ transition: "stroke-dasharray 1s ease" }} />
    </svg>
  );
}

function Bar({ used, limit, color }: { used: number; limit: number; color: string }) {
  const p         = calcPct(used, limit);
  const c         = sevColor(p, color);
  const [w, setW] = useState(0);
  useEffect(() => { const t = setTimeout(() => setW(p), 300); return () => clearTimeout(t); }, [p]);
  return (
    <div style={{ background: "#e5e7eb", borderRadius: 99, height: 6, overflow: "hidden", width: "100%" }}>
      <div style={{ width: `${w}%`, height: "100%", background: c, borderRadius: 99,
        transition: "width 1s cubic-bezier(.4,0,.2,1)", boxShadow: `0 0 6px ${c}44` }} />
    </div>
  );
}

function Skeleton({ w = "100%", h = 16 }: { w?: string | number; h?: number }) {
  return (
    <div style={{ width: w, height: h, borderRadius: 8,
      background: "linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)",
      backgroundSize: "200% 100%", animation: "sk-shimmer 1.4s ease-in-out infinite" }} />
  );
}

/* ═══════════════════════════════════════════════════════
   UPGRADE POPUP
═══════════════════════════════════════════════════════ */
function UpgradePopup({ plan, onClose }: { plan: string; onClose: () => void }) {
  const configs: Record<string, { emoji: string; headline: string; subtext: string; pills: string[]; btn: string }> = {
    BASIC:        { emoji: "🚀", headline: "You're on the free plan",   subtext: "Unlock AI image generation, premium voices, 10K TTS chars/mo and more for just ₹99/mo.",       pills: ["10K voice chars","100 image credits","30 videos/mo","100 BG removals"],       btn: "Upgrade to Creator Lite →" },
    CREATOR_LITE: { emoji: "⭐", headline: "Ready to level up?",        subtext: "Creator Spark gives you 75,000 voice chars, 250 image credits, 60 videos/mo and 1440p export.", pills: ["75K voice chars","250 image credits","60 videos/mo","1440p export"],         btn: "Upgrade to Creator Spark →" },
    CREATOR:      { emoji: "👑", headline: "Go limitless with Odyssey", subtext: "Unlock 250,000 TTS chars, 500 image credits, unlimited videos and 4K export every month.",      pills: ["250K voice chars","500 image credits","Unlimited videos","4K export"],      btn: "Upgrade to Creator Odyssey →" },
  };
  const cfg = configs[plan];
  if (!cfg) return null;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      style={{ position: "fixed", inset: 0, zIndex: 9999, background: "rgba(0,0,0,0.55)",
        backdropFilter: "blur(10px)", display: "flex", alignItems: "center",
        justifyContent: "center", padding: 24 }}
      onClick={(e) => e.target === e.currentTarget && onClose()}>

      <motion.div
        initial={{ opacity: 0, scale: 0.88, y: 32 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.88, y: 32 }}
        transition={{ type: "spring", stiffness: 340, damping: 28 }}
        style={{ background: "#ffffff", border: "1px solid #e5e7eb", borderRadius: 24,
          padding: "44px 40px", maxWidth: 440, width: "100%", position: "relative",
          boxShadow: "0 40px 80px rgba(0,0,0,0.18)",
          fontFamily: "'Satoshi', 'DM Sans', sans-serif" }}>

        <button onClick={onClose} style={{ position: "absolute", top: 16, right: 16,
          background: "#f3f4f6", border: "1px solid #e5e7eb",
          borderRadius: 10, width: 34, height: 34, cursor: "pointer", color: "#6b7280",
          fontSize: 18, display: "flex", alignItems: "center", justifyContent: "center" }}>×</button>

        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 52, marginBottom: 16 }}>{cfg.emoji}</div>
          <h2 style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontSize: 24, fontWeight: 900,
            color: "#1a202c", marginBottom: 10, letterSpacing: "-0.025em" }}>{cfg.headline}</h2>
          <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.7, marginBottom: 28 }}>{cfg.subtext}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center", marginBottom: 28 }}>
            {cfg.pills.map(f => (
              <span key={f} style={{ padding: "5px 12px", borderRadius: 99,
                background: "rgba(99,85,220,0.08)", border: "1px solid rgba(99,85,220,0.2)",
                color: "#6355dc", fontSize: 12, fontWeight: 700 }}>✦ {f}</span>
            ))}
          </div>
          <a href="/pricing" style={{ display: "block", width: "100%", padding: "14px 20px",
            borderRadius: 12, background: "linear-gradient(135deg, #667eea, #764ba2)",
            color: "#fff", fontWeight: 700, fontSize: 14, textDecoration: "none",
            boxShadow: "0 8px 28px rgba(99,85,220,0.35)" }}>{cfg.btn}</a>
          <button onClick={onClose} style={{ width: "100%", marginTop: 10, padding: 10,
            background: "transparent", border: "none", color: "#9ca3af", fontSize: 13, cursor: "pointer" }}>
            Maybe later
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════
   TOOL CARD
═══════════════════════════════════════════════════════ */
function ToolCard({ tool, usage, plan, accentColor, loading }: {
  tool: typeof TOOLS[0]; usage: DashboardUsage | null;
  plan: string; accentColor: string; loading: boolean;
}) {
  const isVideoGen   = tool.id === "videoGen";
  const hasVideoPlan = usage?.videoGen.hasVideoPlan ?? false;
  const isLocked     = isVideoGen
    ? (!hasVideoPlan && plan !== "ADMIN")
    : !tool.availableOn.includes(plan);

  const getToolUsage = (): { used: number; limit: number; dailyUsed?: number; dailyLimit?: number; unit: string } | null => {
    if (!usage) return null;
    switch (tool.id) {
      case "tts":          return { used: usage.tts.monthly.used, limit: usage.tts.monthly.limit, dailyUsed: usage.tts.daily.used, dailyLimit: usage.tts.daily.limit, unit: "chars" };
      case "externalTts":  return { used: (usage.externalTts.openai.monthly.used + usage.externalTts.azure.monthly.used), limit: 0, unit: "chars" };
      case "imageGen":     return { used: usage.imageGen.monthly.used, limit: usage.imageGen.monthly.limit, dailyUsed: usage.imageGen.daily.used, dailyLimit: usage.imageGen.daily.limit, unit: "credits" };
      case "videoGen":     return { used: usage.videoGen.monthlyUsed, limit: usage.videoGen.monthlyLimit, unit: "credits" };
      case "bgRemoval":    return { used: usage.bgRemoval.monthlyUsed, limit: usage.bgRemoval.monthlyLimit, unit: "images" };
      case "svgDownloads": return { used: usage.svgDownloads.monthlyCount, limit: usage.svgDownloads.monthlyLimit, dailyUsed: usage.svgDownloads.dailyCount, dailyLimit: usage.svgDownloads.dailyLimit, unit: "SVGs" };
      case "videoSpeed":   return { used: usage.videoSpeed.videosUsed, limit: usage.videoSpeed.videosPerMonth, unit: "videos" };
      default:             return null;
    }
  };

  const u           = getToolUsage();
  const hasUsage    = !!u;
  const hasUsed     = hasUsage && u!.used > 0;
  const isUnlimited = hasUsage && u!.limit <= 0;
  const monthPct    = hasUsage && !isUnlimited ? calcPct(u!.used, u!.limit) : 0;
  const sev         = severity(monthPct);

  const catColors: Record<string, string> = { AI: "#6355dc", Image: "#ec4899", Video: "#f59e0b", Assets: "#10b981", Media: "#06b6d4", Docs: "#8b5cf6" };
  const catColor    = catColors[tool.category] || "#6355dc";

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
      style={{
        background: isLocked ? "#fafafa" : "#ffffff",
        border: `1px solid ${isLocked ? "#e5e7eb" : hasUsed ? `${accentColor}33` : "#e5e7eb"}`,
        borderRadius: 16,
        padding: "20px",
        display: "flex", flexDirection: "column", gap: 14,
        opacity: isLocked ? 0.6 : 1,
        position: "relative", overflow: "hidden",
        boxShadow: isLocked ? "none" : "0 2px 8px rgba(0,0,0,0.06)",
        transition: "box-shadow 0.3s, border-color 0.3s",
        fontFamily: "'Satoshi', 'DM Sans', sans-serif",
      }}
      whileHover={!isLocked ? { boxShadow: `0 8px 24px rgba(0,0,0,0.10)`, borderColor: `${accentColor}55` } : {}}>

      {/* Header */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 10 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 42, height: 42, borderRadius: 12, background: `${catColor}12`,
            border: `1px solid ${catColor}25`, display: "flex", alignItems: "center",
            justifyContent: "center", fontSize: 20, flexShrink: 0 }}>
            {isLocked ? "🔒" : tool.icon}
          </div>
          <div>
            <div style={{ fontSize: 13.5, fontWeight: 700, color: isLocked ? "#9ca3af" : "#1a202c", marginBottom: 2 }}>{tool.label}</div>
            <span style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: "0.08em",
              textTransform: "uppercase" as const, padding: "2px 8px", borderRadius: 99,
              background: `${catColor}12`, color: catColor }}>{tool.category}</span>
          </div>
        </div>
        {hasUsage && !isLocked && <RingGauge pct={isUnlimited ? 20 : monthPct} color={accentColor} />}
      </div>

      {/* Usage rows */}
      {loading && !isLocked && hasUsage && <Skeleton h={32} />}
      {!loading && !isLocked && hasUsage && (
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {!hasUsed ? (
            <div style={{ fontSize: 12, color: "#9ca3af", fontStyle: "italic" }}>No usage this month</div>
          ) : isUnlimited ? (
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: 12, color: "#9ca3af" }}>This month</span>
              <span style={{ fontSize: 13, fontWeight: 700, color: accentColor }}>{formatNum(u!.used)} {u!.unit} <span style={{ color: "#10b981", fontSize: 11 }}>∞ unlimited</span></span>
            </div>
          ) : (
            <>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 12, color: "#9ca3af" }}>Monthly</span>
                <span style={{ fontSize: 12, fontWeight: 700, color: sev === "critical" ? "#ef4444" : sev === "warning" ? "#f59e0b" : "#374151" }}>
                  {formatNum(u!.used)} / {formatNum(u!.limit)} <span style={{ color: "#9ca3af", fontWeight: 400 }}>{u!.unit}</span>
                </span>
              </div>
              <Bar used={u!.used} limit={u!.limit} color={accentColor} />
              {u!.dailyLimit != null && (
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: 2 }}>
                  <span style={{ fontSize: 11, color: "#d1d5db" }}>Daily</span>
                  <span style={{ fontSize: 11, color: "#9ca3af" }}>{formatNum(u!.dailyUsed ?? 0)} / {u!.dailyLimit <= 0 ? "∞" : formatNum(u!.dailyLimit)}</span>
                </div>
              )}
            </>
          )}
        </div>
      )}

      {!isLocked && !hasUsage && <p style={{ fontSize: 12.5, color: "#6b7280", lineHeight: 1.6 }}>{tool.desc}</p>}

      {/* CTA */}
      {!isLocked ? (
        <a href={tool.path} style={{ marginTop: "auto", display: "flex", alignItems: "center",
          justifyContent: "center", gap: 6, padding: "9px 14px", borderRadius: 10,
          background: hasUsed ? `${accentColor}0e` : "#f9fafb",
          border: `1px solid ${hasUsed ? `${accentColor}30` : "#e5e7eb"}`,
          color: hasUsed ? accentColor : "#6b7280", fontSize: 12.5, fontWeight: 700,
          textDecoration: "none" }}>
          {hasUsed ? "Continue Using →" : "Try Now →"}
        </a>
      ) : (
        <div style={{ marginTop: "auto" }}>
          <p style={{ fontSize: 11.5, color: "#9ca3af", marginBottom: 8, lineHeight: 1.5 }}>{tool.tip}</p>
          <a href="/pricing" style={{ display: "flex", alignItems: "center", justifyContent: "center",
            gap: 6, padding: "9px 14px", borderRadius: 10, background: "rgba(99,85,220,0.06)",
            border: "1px solid rgba(99,85,220,0.18)", color: "#6355dc", fontSize: 12, fontWeight: 700,
            textDecoration: "none" }}>🔓 Unlock Feature</a>
        </div>
      )}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════
   MAIN DASHBOARD
═══════════════════════════════════════════════════════ */
export default function UsageDashboard() {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [activePlans, setActivePlans] = useState<ActivePlan[]>([]);
  const [currentPlan, setCurrentPlan] = useState<string>("BASIC");
  const [usage,       setUsage]       = useState<DashboardUsage | null>(null);
  const [showPopup,   setShowPopup]   = useState(false);
  const [activeTab,   setActiveTab]   = useState("overview");
  const [filterCat,   setFilterCat]   = useState("All");
  const [loading,     setLoading]     = useState(true);
  const [stylesReady, setStylesReady] = useState(false);

  const meta        = PLAN_META[currentPlan] || PLAN_META["BASIC"];
  const accentColor = meta.accent;

  /* ── INJECT GLOBAL STYLES ── */
  useEffect(() => {
    if (stylesReady) return;

    const link = document.createElement("link");
    link.href  = "https://fonts.googleapis.com/css2?family=Cabinet+Grotesk:wght@400;700;800;900&family=Satoshi:wght@400;500;700&display=swap";
    link.rel   = "stylesheet";
    document.head.appendChild(link);

    const style = document.createElement("style");
    style.textContent = `
      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      ::-webkit-scrollbar { width: 6px; }
      ::-webkit-scrollbar-track { background: #f3f4f6; }
      ::-webkit-scrollbar-thumb { background: rgba(99,85,220,0.25); border-radius: 99px; }

      .ud-root {
        font-family: 'Satoshi', 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        background: linear-gradient(180deg, #f7fafc 0%, #ffffff 100%);
        color: #1a202c;
        min-height: 100vh;
      }

      /* Hero banner — matches ToolsIndex heroSection */
      .ud-hero {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        padding: 48px 32px 60px;
        margin-top: 64px;
        position: relative;
        overflow: hidden;
      }
      .ud-hero::before {
        content: '';
        position: absolute; inset: 0;
        background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="g" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="1"/></pattern></defs><rect width="100" height="100" fill="url(%23g)"/></svg>');
        pointer-events: none;
      }
      .ud-hero-inner {
        max-width: 1280px; margin: 0 auto; position: relative; z-index: 2;
        display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 24px;
      }

      /* Content area */
      .ud-main { max-width: 1280px; margin: 0 auto; padding: 36px 24px 80px; }

      /* Tab strip */
      .ud-tabs {
        display: flex; gap: 4px;
        background: #f3f4f6;
        border: 1px solid #e5e7eb;
        border-radius: 14px; padding: 4px;
        width: fit-content; margin-bottom: 32px;
        overflow-x: auto;
      }
      .ud-tab {
        padding: 9px 22px; border-radius: 10px; border: none;
        font-family: 'Satoshi', 'DM Sans', sans-serif;
        font-size: 13px; font-weight: 700;
        cursor: pointer; transition: all 0.2s;
        color: #6b7280; background: transparent; white-space: nowrap;
      }
      .ud-tab.active {
        background: linear-gradient(135deg, #667eea, #764ba2);
        color: #fff;
        box-shadow: 0 4px 14px rgba(102,126,234,0.35);
      }

      /* Responsive grids */
      .ud-grid2 { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 20px; }
      .ud-grid4 { display: grid; grid-template-columns: repeat(auto-fill, minmax(270px, 1fr)); gap: 18px; }

      /* Base card — light */
      .ud-card {
        background: #ffffff;
        border: 1px solid #e5e7eb;
        border-radius: 16px; padding: 24px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.05);
      }

      /* Category filter pills */
      .ud-pill {
        padding: 6px 16px; border-radius: 99px;
        border: 1px solid #e5e7eb;
        background: #f9fafb;
        color: #6b7280;
        font-family: 'Satoshi', 'DM Sans', sans-serif;
        font-size: 12px; font-weight: 700;
        cursor: pointer; transition: all 0.18s;
      }
      .ud-pill.active {
        background: rgba(99,85,220,0.08);
        border-color: rgba(99,85,220,0.3);
        color: #6355dc;
      }

      @keyframes sk-shimmer {
        0%,100% { background-position: 200% 0; }
        50%      { background-position: 0 0; }
      }

      @media (max-width: 640px) {
        .ud-main { padding: 20px 14px 60px; }
        .ud-tabs { width: 100%; }
        .ud-hero { padding: 32px 16px 48px; }
      }
    `;
    document.head.appendChild(style);
    setStylesReady(true);
  }, []);

  /* ── FETCH ALL DATA ── */
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) { setLoading(false); return; }
    const headers = { Authorization: `Bearer ${token}` };

    const fetchAll = async () => {
      try {
        const profileRes = await axios.get(`${API_BASE_URL}/auth/me`, { headers });
        setUserProfile(profileRes.data);

        const plansRes  = await axios.get(`${API_BASE_URL}/api/payments/active-plans`, { headers }).catch(() => ({ data: [] }));
        const plans: ActivePlan[] = plansRes.data;
        setActivePlans(plans);
        const planTypes = plans.map((p) => p.planType);

        if      (profileRes.data.role === "ADMIN")       setCurrentPlan("ADMIN");
        else if (planTypes.includes("STUDIO"))            setCurrentPlan("STUDIO");
        else if (planTypes.includes("CREATOR"))           setCurrentPlan("CREATOR");
        else if (planTypes.includes("CREATOR_LITE"))      setCurrentPlan("CREATOR_LITE");
        else                                              setCurrentPlan("BASIC");

        const [ttsRes, imageRes, videoCreditsRes, bgStatsRes, svgUsageRes, svgLimitsRes, speedRes] =
          await Promise.allSettled([
            axios.get(`${API_BASE_URL}/api/sole-tts/usage`,                        { headers }),
            axios.get(`${API_BASE_URL}/api/sole-image-gen/usage`,                  { headers }),
            axios.get(`${API_BASE_URL}/api/video-gen/credits`,                     { headers }),
            /* NEW dedicated endpoint — returns { monthlyUsed, monthlyLimit } correctly */
            axios.get(`${API_BASE_URL}/api/usage/bg-removal/me`,                   { headers }),
            axios.get(`${API_BASE_URL}/api/usage/svg-downloads/me`,                { headers }),
            axios.get(`${API_BASE_URL}/api/image-editor/elements/download-limits`, { headers }),
            axios.get(`${API_BASE_URL}/api/video-speed/plan-limits`,               { headers }),
          ]);

        const tts       = ttsRes.status          === "fulfilled" ? ttsRes.value.data          : { monthly: { used: 0, limit: 0 }, daily: { used: 0, limit: 0 }, maxCharRequest: 0, externalProviders: { hasAccess: false, usage: {} } };
        const img       = imageRes.status        === "fulfilled" ? imageRes.value.data        : { monthly: { used: 0, limit: 0 }, daily: { used: 0, limit: 0 }, availableModels: [] };
        const vid       = videoCreditsRes.status === "fulfilled" ? (videoCreditsRes.value as any).data : { hasVideoPlan: false, monthlyLimit: 0, monthlyUsed: 0, monthlyRemaining: 0, dailyLimit: 0, dailyRemaining: 0, activePlan: null };
        const bg        = bgStatsRes.status      === "fulfilled" ? bgStatsRes.value.data      : { monthlyUsed: 0, monthlyLimit: 0 };
        const svgUsage  = svgUsageRes.status     === "fulfilled" ? (svgUsageRes.value as any).data : { dailyCount: 0, monthlyCount: 0 };
        const svgLimits = svgLimitsRes.status    === "fulfilled" ? svgLimitsRes.value.data    : { canDownloadSvg: false, maxResolution: 512, dailyLimit: 2, monthlyLimit: 10 };
        const speed     = speedRes.status        === "fulfilled" ? speedRes.value.data        : { videosPerMonth: 5, videosUsed: 0, maxVideoLength: 5, maxQuality: "720p" };
        const extUsage  = tts.externalProviders?.usage || {};

        setUsage({
          tts:         { monthly: tts.monthly, daily: tts.daily, maxCharRequest: tts.maxCharRequest },
          externalTts: {
            hasAccess:      tts.externalProviders?.hasAccess ?? false,
            openai:         { monthly: extUsage.openai?.monthly ?? { used: 0, limit: 0 }, daily: extUsage.openai?.daily ?? { used: 0, limit: 0 } },
            azure:          { monthly: extUsage.azure?.monthly  ?? { used: 0, limit: 0 }, daily: extUsage.azure?.daily  ?? { used: 0, limit: 0 } },
            maxCharRequest: extUsage.maxCharRequest ?? 0,
          },
          imageGen:    { monthly: img.monthly, daily: img.daily, availableModels: img.availableModels || [] },
          videoGen:    vid,
          bgRemoval:   { monthlyUsed: bg.monthlyUsed ?? bg.currentMonthCount ?? 0, monthlyLimit: bg.monthlyLimit ?? 0 },
          svgDownloads:{ ...svgLimits, dailyCount: svgUsage.dailyCount, monthlyCount: svgUsage.monthlyCount },
          videoSpeed:  speed,
        });
      } catch (err) {
        console.error("Dashboard fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAll();
  }, []);

  /* ── UPGRADE POPUP ── */
  useEffect(() => {
    if (loading) return;
    if (currentPlan === "STUDIO" || currentPlan === "ADMIN") return;
    const t = setTimeout(() => setShowPopup(true), 1500);
    return () => clearTimeout(t);
  }, [loading, currentPlan]);

  /* ── DERIVED VALUES ── */
  const planExpiry = activePlans.find(p => ["STUDIO","CREATOR","CREATOR_LITE"].includes(p.planType))?.expiryDate ?? null;
  const days       = daysLeft(planExpiry);

  const categories    = ["All", ...Array.from(new Set(TOOLS.map((t) => t.category)))];
  const filteredTools = filterCat === "All" ? TOOLS : TOOLS.filter((t) => t.category === filterCat);

  const totalUsedTools = TOOLS.filter((t) => {
    if (!usage) return false;
    switch (t.id) {
      case "tts":          return usage.tts.monthly.used > 0;
      case "externalTts":  return (usage.externalTts.openai.monthly.used + usage.externalTts.azure.monthly.used) > 0;
      case "imageGen":     return usage.imageGen.monthly.used > 0;
      case "videoGen":     return usage.videoGen.monthlyUsed > 0;
      case "bgRemoval":    return usage.bgRemoval.monthlyUsed > 0;
      case "svgDownloads": return usage.svgDownloads.monthlyCount > 0;
      case "videoSpeed":   return usage.videoSpeed.videosUsed > 0;
      default: return false;
    }
  }).length;

  const displayName = userProfile?.name?.split(" ")[0] ?? "there";

  const planStatusValue = (() => {
    if (loading)                 return "—";
    if (currentPlan === "ADMIN") return "Admin";
    if (currentPlan === "BASIC") return "Free";
    if (days === -1)             return "Active";
    if (days === 0)              return "Expired";
    return `${days}d left`;
  })();

  const planStatusSub = (() => {
    if (loading)                 return "";
    if (currentPlan === "BASIC") return "Starter Forge (free forever)";
    if (currentPlan === "ADMIN") return "Unlimited access";
    if (days === -1)             return `${meta.name} · no expiry`;
    if (days === 0)              return "Renewal required";
    if (days <= 7)               return `${meta.name} · renewing soon`;
    return meta.name;
  })();

  if (!stylesReady) return <div style={{ background: "#f7fafc", minHeight: "100vh" }} />;

  /* ══════════════════════════════════════════════════════
     RENDER
  ══════════════════════════════════════════════════════ */
  return (
    <div className="ud-root">

      {/* ── HERO BANNER ── */}
      <div className="ud-hero">
        <div className="ud-hero-inner">
          <div>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.7)", marginBottom: 6, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>Usage Dashboard</div>
            <h1 style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontSize: "clamp(22px,4vw,32px)", fontWeight: 900, letterSpacing: "-0.03em", color: "#ffffff", marginBottom: 8 }}>
              {loading ? "Loading…" : `Welcome back, ${displayName} 👋`}
            </h1>
            {!loading && (
              <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" as const }}>
                <span style={{ padding: "4px 14px", borderRadius: 99, background: "rgba(255,255,255,0.2)", border: "1px solid rgba(255,255,255,0.35)", color: "#fff", fontSize: 12, fontWeight: 700, backdropFilter: "blur(8px)" }}>{meta.name}</span>
                {planExpiry && days >= 0 && (
                  <span style={{ fontSize: 12.5, color: "rgba(255,255,255,0.8)" }}>
                    Renews {new Date(planExpiry).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                  </span>
                )}
              </div>
            )}
          </div>
          {meta.next && !loading && (
            <a href="/pricing" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "11px 22px", borderRadius: 12, background: "rgba(255,255,255,0.18)", border: "1px solid rgba(255,255,255,0.35)", color: "#fff", fontSize: 13, fontWeight: 700, textDecoration: "none", backdropFilter: "blur(8px)", whiteSpace: "nowrap" as const }}>
              ↑ Upgrade to {meta.nextName}
            </a>
          )}
        </div>
      </div>

      <main className="ud-main">

        {/* ── TABS ── */}
        <div className="ud-tabs">
          {[["overview","📊 Overview"],["tools","🛠️ All Tools"],["subscription","💳 Subscription"]].map(([id, label]) => (
            <button key={id} className={`ud-tab${activeTab === id ? " active" : ""}`} onClick={() => setActiveTab(id)}>{label}</button>
          ))}
        </div>

        <AnimatePresence mode="wait">

          {/* ══════════════════════════════════
               OVERVIEW TAB
          ══════════════════════════════════ */}
          {activeTab === "overview" && (
            <motion.div key="overview" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.28 }}>

              {/* Quick stats — only 2 cards now (no Usage Alerts) */}
              <div className="ud-grid2" style={{ marginBottom: 24 }}>
                {[
                  {
                    label: "Tools Active",
                    value: loading ? "—" : `${totalUsedTools}`,
                    sub:   `of ${TOOLS.length} total tools`,
                    icon:  "🛠️",
                    color: accentColor,
                  },
                  {
                    label: "Plan Status",
                    value: planStatusValue,
                    sub:   planStatusSub,
                    icon:  "📋",
                    color: currentPlan === "BASIC" ? "#6b7280"
                         : days >= 0 && days < 7   ? "#ef4444"
                         : "#10b981",
                  },
                ].map((s, i) => (
                  <motion.div key={i} className="ud-card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
                    style={{ borderColor: `${s.color}22`, display: "flex", alignItems: "center", gap: 18 }}>
                    <div style={{ width: 52, height: 52, borderRadius: 16, background: `${s.color}10`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, flexShrink: 0 }}>{s.icon}</div>
                    <div>
                      {loading ? <Skeleton w={60} h={28} /> : (
                        <div style={{ fontSize: 26, fontWeight: 900, fontFamily: "'Cabinet Grotesk', sans-serif", color: s.color, letterSpacing: "-0.04em" }}>{s.value}</div>
                      )}
                      <div style={{ fontSize: 13, fontWeight: 700, color: "#374151", marginTop: 2 }}>{s.label}</div>
                      <div style={{ fontSize: 11.5, color: "#9ca3af" }}>{s.sub}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Usage cards */}
              <h2 style={{ fontSize: 15, fontWeight: 800, color: "#374151", marginBottom: 16, letterSpacing: "-0.01em" }}>Top Usage This Month</h2>
              <div className="ud-grid4" style={{ marginBottom: 32 }}>
                {[
                  { label: "AI Voice (TTS)",     icon: "🎙️", used: usage?.tts.monthly.used ?? 0,          limit: usage?.tts.monthly.limit ?? 0,        unit: "chars",   color: accentColor,   locked: false },
                  { label: "AI Image Gen",        icon: "🎨", used: usage?.imageGen.monthly.used ?? 0,     limit: usage?.imageGen.monthly.limit ?? 0,   unit: "credits", color: "#ec4899",     locked: !meta.hasImageGen },
                  { label: "Background Removal",  icon: "✂️", used: usage?.bgRemoval.monthlyUsed ?? 0,    limit: usage?.bgRemoval.monthlyLimit ?? 0,   unit: "images",  color: "#06b6d4",     locked: false },
                  { label: "Video Speed",         icon: "⚡", used: usage?.videoSpeed.videosUsed ?? 0,    limit: usage?.videoSpeed.videosPerMonth ?? 0, unit: "videos",  color: "#10b981",     locked: false },
                  { label: "SVG Library",         icon: "🔷", used: usage?.svgDownloads.monthlyCount ?? 0,limit: usage?.svgDownloads.monthlyLimit ?? 0, unit: "SVGs",    color: "#8b5cf6",     locked: currentPlan === "BASIC" },
                  { label: "AI Video Gen",        icon: "🎬", used: usage?.videoGen.monthlyUsed ?? 0,     limit: usage?.videoGen.monthlyLimit ?? 0,    unit: "credits", color: "#f97316",     locked: !usage?.videoGen.hasVideoPlan && currentPlan !== "ADMIN" },
                ].map((item, i) => {
                  const isUnlim = !item.locked && item.limit <= 0;
                  const p       = item.locked || isUnlim ? 0 : calcPct(item.used, item.limit);
                  const c       = item.locked ? "#d1d5db" : sevColor(p, item.color);
                  return (
                    <motion.div key={item.label} initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.05 }}
                      style={{ background: item.locked ? "#fafafa" : "#ffffff",
                        border: `1px solid ${item.locked ? "#e5e7eb" : item.used > 0 ? `${item.color}28` : "#e5e7eb"}`,
                        borderRadius: 16, padding: 20, display: "flex", flexDirection: "column", gap: 12,
                        opacity: item.locked ? 0.6 : 1,
                        boxShadow: item.locked ? "none" : "0 2px 8px rgba(0,0,0,0.05)" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                          <span style={{ fontSize: 20 }}>{item.locked ? "🔒" : item.icon}</span>
                          <span style={{ fontSize: 13, fontWeight: 700, color: item.locked ? "#9ca3af" : "#374151" }}>{item.label}</span>
                        </div>
                        {loading ? <Skeleton w={44} h={44} /> : <RingGauge pct={isUnlim ? 15 : p} color={item.locked ? "#d1d5db" : item.color} />}
                      </div>
                      {loading ? <Skeleton h={28} /> : item.locked ? (
                        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                          <div style={{ fontSize: 12, color: "#9ca3af" }}>Not included in {meta.name}</div>
                          <a href="/pricing" style={{ fontSize: 12, fontWeight: 700, color: "#6355dc", textDecoration: "none" }}>🔓 Upgrade to unlock →</a>
                        </div>
                      ) : (
                        <>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                            <span style={{ fontSize: 24, fontWeight: 900, fontFamily: "'Cabinet Grotesk', sans-serif", color: c, letterSpacing: "-0.04em" }}>{formatNum(item.used)}</span>
                            <span style={{ fontSize: 12, color: "#9ca3af" }}>{isUnlim ? "∞ unlimited" : `/ ${formatNum(item.limit)} ${item.unit}`}</span>
                          </div>
                          {!isUnlim && <Bar used={item.used} limit={item.limit} color={item.color} />}
                          {!isUnlim && (
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                              <span style={{ fontSize: 11, color: "#d1d5db" }}>{p}% used</span>
                              {severity(p) !== "ok" && <span style={{ fontSize: 11, fontWeight: 700, color: c }}>{severity(p) === "critical" ? "⚠️ Near limit" : "⚡ High usage"}</span>}
                            </div>
                          )}
                        </>
                      )}
                    </motion.div>
                  );
                })}
              </div>

              {/* Untried tools */}
              <div style={{ background: "linear-gradient(135deg, #f0f4ff, #f5f0ff)", border: "1px solid rgba(99,85,220,0.15)", borderRadius: 20, padding: "28px 28px 24px" }}>
                <h3 style={{ fontSize: 15, fontWeight: 800, color: "#374151", marginBottom: 4 }}>Tools you haven't tried yet</h3>
                <p style={{ fontSize: 13, color: "#6b7280", marginBottom: 18 }}>Make the most of your {meta.name} plan</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                  {TOOLS.filter((t) => {
                    const isVideoGenTool = t.id === "videoGen";
                    const locked = isVideoGenTool
                      ? (!usage?.videoGen.hasVideoPlan && currentPlan !== "ADMIN")
                      : !t.availableOn.includes(currentPlan);
                    if (locked) return false;
                    if (!usage) return true;
                    switch (t.id) {
                      case "tts":          return usage.tts.monthly.used === 0;
                      case "externalTts":  return (usage.externalTts.openai.monthly.used + usage.externalTts.azure.monthly.used) === 0;
                      case "imageGen":     return usage.imageGen.monthly.used === 0;
                      case "videoGen":     return usage.videoGen.monthlyUsed === 0;
                      case "bgRemoval":    return usage.bgRemoval.monthlyUsed === 0;
                      case "svgDownloads": return usage.svgDownloads.monthlyCount === 0;
                      case "videoSpeed":   return usage.videoSpeed.videosUsed === 0;
                      default:             return true;
                    }
                  }).slice(0, 6).map((tool) => (
                    <a key={tool.id} href={tool.path} style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 14px", borderRadius: 12, background: "#ffffff", border: "1px solid #e5e7eb", color: "#374151", fontSize: 13, fontWeight: 600, textDecoration: "none", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
                      <span>{tool.icon}</span>{tool.label}<span style={{ fontSize: 11, color: "#6355dc" }}>Try →</span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* ══════════════════════════════════
               ALL TOOLS TAB
          ══════════════════════════════════ */}
          {activeTab === "tools" && (
            <motion.div key="tools" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.28 }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
                {categories.map((c) => (
                  <button key={c} className={`ud-pill${filterCat === c ? " active" : ""}`} onClick={() => setFilterCat(c)}>{c}</button>
                ))}
              </div>
              <div className="ud-grid4">
                {filteredTools.map((tool, i) => (
                  <motion.div key={tool.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }}>
                    <ToolCard tool={tool} usage={usage} plan={currentPlan} accentColor={accentColor} loading={loading} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* ══════════════════════════════════
               SUBSCRIPTION TAB
          ══════════════════════════════════ */}
          {activeTab === "subscription" && (
            <motion.div key="subscription" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.28 }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20, marginBottom: 24 }}>

                {/* Active plan hero */}
                <div style={{ gridColumn: "1 / -1", background: `linear-gradient(135deg, ${meta.gradientFrom}, ${meta.gradientTo})`, border: "none", borderRadius: 24, padding: "28px 30px", position: "relative", overflow: "hidden", boxShadow: `0 12px 40px ${meta.accent}30` }}>
                  <div style={{ position: "absolute", top: 0, right: 0, width: 300, height: 300, background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)", pointerEvents: "none" }} />
                  <div style={{ position: "relative", display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 20 }}>
                    <div>
                      <div style={{ fontSize: 11, color: "rgba(255,255,255,0.75)", fontWeight: 700, letterSpacing: "0.09em", textTransform: "uppercase", marginBottom: 8 }}>Active Plan</div>
                      {loading ? <Skeleton w={200} h={36} /> : (
                        <h2 style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontSize: 32, fontWeight: 900, color: "#ffffff", letterSpacing: "-0.04em", marginBottom: 6 }}>{meta.name}</h2>
                      )}
                      {planExpiry && days >= 0 && (
                        <p style={{ fontSize: 13.5, color: "rgba(255,255,255,0.8)", marginBottom: 20 }}>
                          Billed monthly · Renews {new Date(planExpiry).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
                        </p>
                      )}
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                        {[
                          meta.ttsMonthly <= 0 ? "Unlimited voice chars" : `${formatNum(meta.ttsMonthly)} voice chars/mo`,
                          meta.hasImageGen ? `${meta.imageCreditsMonthly <= 0 ? "∞" : meta.imageCreditsMonthly} image credits/mo` : "No image gen (upgrade to unlock)",
                          meta.speedVideosMonthly <= 0 ? "Unlimited speed videos" : `${meta.speedVideosMonthly} speed videos/mo`,
                          meta.maxQuality + " max export",
                        ].map(f => (
                          <span key={f} style={{ padding: "5px 12px", borderRadius: 99, background: "rgba(255,255,255,0.2)", border: "1px solid rgba(255,255,255,0.35)", color: "#fff", fontSize: 12, fontWeight: 700 }}>{f}</span>
                        ))}
                      </div>
                    </div>

                    {currentPlan !== "BASIC" && (
                      <div style={{ textAlign: "right" }}>
                        <div style={{ fontSize: 11, color: "rgba(255,255,255,0.7)", marginBottom: 4, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                          {days === -1 ? "Status" : "Expires in"}
                        </div>
                        {loading ? <Skeleton w={60} h={44} /> : (
                          <div style={{ fontSize: days === -1 ? 26 : 44, fontWeight: 900, fontFamily: "'Cabinet Grotesk', sans-serif", color: "#ffffff", letterSpacing: "-0.05em" }}>
                            {currentPlan === "ADMIN" ? "∞" : days === -1 ? "Active" : days}
                          </div>
                        )}
                        <div style={{ fontSize: 13, color: "rgba(255,255,255,0.75)", marginBottom: 16 }}>
                          {currentPlan === "ADMIN" ? "no expiry" : days === -1 ? "no expiry set" : days === 1 ? "day" : "days"}
                        </div>
                        {meta.next && (
                          <a href="/pricing" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 20px", borderRadius: 11, background: "rgba(255,255,255,0.22)", border: "1px solid rgba(255,255,255,0.4)", color: "#fff", fontSize: 13, fontWeight: 700, textDecoration: "none", backdropFilter: "blur(8px)" }}>
                            ↑ Upgrade to {meta.nextName}
                          </a>
                        )}
                      </div>
                    )}
                    {currentPlan === "BASIC" && meta.next && (
                      <a href="/pricing" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 20px", borderRadius: 11, background: "rgba(255,255,255,0.22)", border: "1px solid rgba(255,255,255,0.4)", color: "#fff", fontSize: 13, fontWeight: 700, textDecoration: "none" }}>
                        ↑ Upgrade to {meta.nextName}
                      </a>
                    )}
                  </div>
                </div>

                {/* Account info */}
                <div className="ud-card">
                  <div style={{ fontSize: 12, color: "#9ca3af", fontWeight: 700, marginBottom: 14, textTransform: "uppercase", letterSpacing: "0.08em" }}>Account Info</div>
                  {loading ? (
                    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}><Skeleton h={14} /><Skeleton h={14} /></div>
                  ) : (
                    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                      {[
                        ["📧 Email", userProfile?.email ?? "—"],
                        ["👤 Name",  userProfile?.name  ?? "—"],
                        ["🛡️ Role",  userProfile?.role  ?? "BASIC"],
                      ].map(([k, v]) => (
                        <div key={k as string} style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
                          <span style={{ fontSize: 12.5, color: "#6b7280" }}>{k}</span>
                          <span style={{ fontSize: 12.5, fontWeight: 700, color: "#374151", textAlign: "right" }}>{v}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Monthly summary */}
                <div className="ud-card">
                  <div style={{ fontSize: 12, color: "#9ca3af", fontWeight: 700, marginBottom: 14, textTransform: "uppercase", letterSpacing: "0.08em" }}>Monthly Usage Summary</div>
                  {loading ? (
                    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}><Skeleton h={32} /><Skeleton h={32} /><Skeleton h={32} /><Skeleton h={32} /></div>
                  ) : (
                    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                      {[
                        { label: "Voice chars",   used: usage?.tts.monthly.used ?? 0,      limit: usage?.tts.monthly.limit ?? 0,         color: accentColor, show: true },
                        { label: "Image credits", used: usage?.imageGen.monthly.used ?? 0,  limit: usage?.imageGen.monthly.limit ?? 0,    color: "#ec4899",   show: meta.hasImageGen },
                        { label: "BG removals",   used: usage?.bgRemoval.monthlyUsed ?? 0,  limit: usage?.bgRemoval.monthlyLimit ?? 0,    color: "#06b6d4",   show: true },
                        { label: "Speed videos",  used: usage?.videoSpeed.videosUsed ?? 0,  limit: usage?.videoSpeed.videosPerMonth ?? 0, color: "#10b981",   show: true },
                      ].filter(r => r.show).map((r) => (
                        <div key={r.label} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                          <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <span style={{ fontSize: 12, color: "#6b7280" }}>{r.label}</span>
                            <span style={{ fontSize: 12, fontWeight: 700, color: "#374151" }}>
                              {formatNum(r.used)} / {r.limit <= 0 ? "∞" : formatNum(r.limit)}
                            </span>
                          </div>
                          {r.limit > 0 && <Bar used={r.used} limit={r.limit} color={r.color} />}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* External TTS */}
                {usage?.externalTts.hasAccess && (
                  <div className="ud-card">
                    <div style={{ fontSize: 12, color: "#9ca3af", fontWeight: 700, marginBottom: 14, textTransform: "uppercase", letterSpacing: "0.08em" }}>External AI Voices</div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                      {[
                        { label: "OpenAI (TTS-1)", used: usage.externalTts.openai.monthly.used, limit: usage.externalTts.openai.monthly.limit, color: "#10b981", icon: "🤖" },
                        { label: "Azure Neural",   used: usage.externalTts.azure.monthly.used,  limit: usage.externalTts.azure.monthly.limit,  color: "#06b6d4", icon: "☁️" },
                      ].map((r) => (
                        <div key={r.label} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <span style={{ fontSize: 12, color: "#6b7280" }}>{r.icon} {r.label}</span>
                            <span style={{ fontSize: 12, fontWeight: 700, color: "#374151" }}>{formatNum(r.used)} / {r.limit <= 0 ? "∞" : formatNum(r.limit)} chars</span>
                          </div>
                          {r.limit > 0 && <Bar used={r.used} limit={r.limit} color={r.color} />}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Video gen credits */}
                {usage?.videoGen.hasVideoPlan && (
                  <div className="ud-card">
                    <div style={{ fontSize: 12, color: "#9ca3af", fontWeight: 700, marginBottom: 14, textTransform: "uppercase", letterSpacing: "0.08em" }}>AI Video Generation</div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                      <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <span style={{ fontSize: 12, color: "#6b7280" }}>Plan</span>
                        <span style={{ fontSize: 12, fontWeight: 700, color: "#7c3aed" }}>{usage.videoGen.activePlan ?? "Active"}</span>
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <span style={{ fontSize: 12, color: "#6b7280" }}>Monthly credits</span>
                        <span style={{ fontSize: 12, fontWeight: 700, color: "#374151" }}>{usage.videoGen.monthlyUsed} / {usage.videoGen.monthlyLimit}</span>
                      </div>
                      <Bar used={usage.videoGen.monthlyUsed} limit={usage.videoGen.monthlyLimit} color="#f59e0b" />
                      <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <span style={{ fontSize: 11, color: "#d1d5db" }}>Daily remaining</span>
                        <span style={{ fontSize: 11, color: "#9ca3af" }}>{usage.videoGen.dailyRemaining} credits</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Upgrade comparison */}
              {meta.next && (
                <div className="ud-card">
                  <h3 style={{ fontSize: 15, fontWeight: 800, color: "#374151", marginBottom: 4 }}>What you'd unlock with {meta.nextName}</h3>
                  <p style={{ fontSize: 13, color: "#9ca3af", marginBottom: 20 }}>See what you're missing out on</p>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12 }}>
                    {(meta.next === "CREATOR_LITE"
                      ? [["Voice chars","2,000/mo","10,000/mo"],["Image credits","None","100/mo"],["BG removals","5/mo","100/mo"],["Max quality","720p","1080p"]]
                      : meta.next === "CREATOR"
                      ? [["Voice chars","10,000/mo","75,000/mo"],["Image credits","100/mo","250/mo"],["BG removals","100/mo","500/mo"],["Max quality","1080p","1440p"]]
                      : [["Voice chars","75,000/mo","250,000/mo"],["Image credits","250/mo","500/mo"],["Speed videos","60/mo","Unlimited"],["Max quality","1440p","4K"]]
                    ).map(([feat, curr, next]) => (
                      <div key={feat} style={{ background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: 12, padding: "14px 16px" }}>
                        <div style={{ fontSize: 11, color: "#9ca3af", marginBottom: 8, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.07em" }}>{feat}</div>
                        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                          <span style={{ fontSize: 12, fontWeight: 700, color: "#d1d5db", textDecoration: "line-through" }}>{curr}</span>
                          <span style={{ color: "#d1d5db" }}>→</span>
                          <span style={{ fontSize: 13, fontWeight: 800, color: "#10b981" }}>{next}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <a href="/pricing" style={{ marginTop: 20, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "13px 20px", borderRadius: 12, background: "linear-gradient(135deg, #667eea, #764ba2)", color: "#fff", fontWeight: 700, fontSize: 14, textDecoration: "none", boxShadow: "0 8px 28px rgba(102,126,234,0.35)" }}>
                    Upgrade to {meta.nextName} — {PLAN_META[meta.next]?.price} →
                  </a>
                </div>
              )}
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* ── UPGRADE POPUP ── */}
      <AnimatePresence>
        {showPopup && <UpgradePopup plan={currentPlan} onClose={() => setShowPopup(false)} />}
      </AnimatePresence>

    </div>
  );
}