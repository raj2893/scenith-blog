"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { API_BASE_URL } from "../../config";

/* ═══════════════════════════════════════════════════════
   TYPES
═══════════════════════════════════════════════════════ */
interface ActivePlan {
  planType: string;
  expiryDate: string | null;
}

interface UserProfile {
  email: string;
  name: string;
  role: string;
  profilePicture: string | null;
  creditBalance: number;
  planType: string;
}

interface UsageSummary {
  monthlyCreditsUsed: number;
  monthlyCreditsLimit: number;
  dailyCreditsUsed: number;
  balance: number;
  totalSpent: number;
  expiresAt: string;
  usageByTool: Record<string, number>;
}

interface CreditTransaction {
  id: number;
  type: string;
  delta: number;
  balanceAfter: number;
  description: string;
  toolName: string;
  toolIcon: string;
  creditsUsed: number;
  createdAt: string;
}

/* ═══════════════════════════════════════════════════════
   PLAN CONFIG
═══════════════════════════════════════════════════════ */
const PLAN_META: Record<string, {
  name: string; accent: string; gradientFrom: string; gradientTo: string;
  next: string | null; nextName: string | null; price: string | null;
  monthlyCredits: number; maxQuality: string;
}> = {
  BASIC: {
    name: "Starter Forge", accent: "#6355dc",
    gradientFrom: "#667eea", gradientTo: "#764ba2",
    next: "CREATOR_LITE", nextName: "Creator Lite", price: "$9/mo",
    monthlyCredits: 50, maxQuality: "720p",
  },
  CREATOR_LITE: {
    name: "Creator Lite", accent: "#818cf8",
    gradientFrom: "#818cf8", gradientTo: "#6355dc",
    next: "CREATOR", nextName: "Creator Spark", price: "₹499/mo",
    monthlyCredits: 300, maxQuality: "1080p",
  },
  CREATOR: {
    name: "Creator Spark", accent: "#7c3aed",
    gradientFrom: "#a899f5", gradientTo: "#7c3aed",
    next: "STUDIO", nextName: "Creator Odyssey", price: "₹999/mo",
    monthlyCredits: 900, maxQuality: "1440p",
  },
  STUDIO: {
    name: "Creator Odyssey", accent: "#d97706",
    gradientFrom: "#f59e0b", gradientTo: "#d97706",
    next: null, nextName: null, price: null,
    monthlyCredits: 2500, maxQuality: "4K",
  },
  ADMIN: {
    name: "Admin", accent: "#059669",
    gradientFrom: "#10b981", gradientTo: "#059669",
    next: null, nextName: null, price: null,
    monthlyCredits: -1, maxQuality: "4K",
  },
};

const TOOLS = [
  { id: "voice",            icon: "🎙️", label: "AI Voice",             category: "AI",     desc: "Convert text to natural-sounding speech",            path: "/tools/ai-voice-generation",     availableOn: ["BASIC","CREATOR_LITE","CREATOR","STUDIO","ADMIN"], tip: "Create voiceovers for your videos, podcasts & more." },
  { id: "image",            icon: "🎨", label: "AI Image Generation",   category: "AI",     desc: "Generate stunning images from text prompts",          path: "/tools/ai-image-generation",     availableOn: ["BASIC","CREATOR_LITE","CREATOR","STUDIO","ADMIN"], tip: "Generate professional images with AI — from $9/mo." },
  { id: "video",            icon: "🎬", label: "AI Video Generation",   category: "AI",     desc: "Create videos from text or images",                  path: "/tools/ai-video-generation",     availableOn: ["BASIC","CREATOR_LITE","CREATOR","STUDIO","ADMIN"], tip: "Bring ideas to life with AI-generated video." },
  { id: "bgRemoval",        icon: "✂️", label: "Background Removal",    category: "Image",  desc: "Remove backgrounds with AI precision",               path: "/tools/background-removal",      availableOn: ["BASIC","CREATOR_LITE","CREATOR","STUDIO","ADMIN"], tip: "Remove backgrounds from product photos instantly." },
  { id: "svgDownloads",     icon: "🔷", label: "SVG Library",           category: "Assets", desc: "Download premium vector icons & illustrations",      path: "svg-library",             availableOn: ["BASIC","CREATOR_LITE","CREATOR","STUDIO","ADMIN"], tip: "Access thousands of premium SVG icons & illustrations." },
  { id: "subtitles",        icon: "📝", label: "Auto Subtitles",        category: "Video",  desc: "Auto-generate subtitles for your videos",            path: "/tools/add-subtitles-to-videos", availableOn: ["BASIC","CREATOR_LITE","CREATOR","STUDIO","ADMIN"], tip: "Add accurate subtitles to boost engagement." },
  { id: "videoSpeed",       icon: "⚡", label: "Video Speed Control",   category: "Video",  desc: "Speed up or slow down videos with pitch correction", path: "/tools/video-speed-modifier",             availableOn: ["BASIC","CREATOR_LITE","CREATOR","STUDIO","ADMIN"], tip: "Create time-lapse or slow-mo clips from any footage." },
  { id: "imageEditor",      icon: "🖼️", label: "Image Editor",          category: "Image",  desc: "Edit and enhance your images with pro tools",        path: "/tools/image-editing",            availableOn: ["BASIC","CREATOR_LITE","CREATOR","STUDIO","ADMIN"], tip: "A full-featured image editor right in your browser." },
  { id: "pdfTools",         icon: "📄", label: "PDF Tools",             category: "Docs",   desc: "Convert, merge, compress and edit PDFs",             path: "/tools/pdf-tools",               availableOn: ["BASIC","CREATOR_LITE","CREATOR","STUDIO","ADMIN"], tip: "Handle all your PDF needs — merge, split, compress." },
  { id: "mediaCompression", icon: "📦", label: "Media Compression",     category: "Media",  desc: "Compress videos & images without quality loss",      path: "/tools/compress-media",                availableOn: ["BASIC","CREATOR_LITE","CREATOR","STUDIO","ADMIN"], tip: "Reduce file size for faster uploads & sharing." },
  { id: "mediaConversion",  icon: "🔄", label: "Media Conversion",      category: "Media",  desc: "Convert between any video, audio or image format",   path: "/tools/media-conversion-tool",                 availableOn: ["BASIC","CREATOR_LITE","CREATOR","STUDIO","ADMIN"], tip: "Convert MP4 to MOV, PNG to WEBP and 100+ more formats." },
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
  if (p >= 90) return "#ef4444";
  if (p >= 70) return "#f59e0b";
  return base;
}

function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  return `${Math.floor(hrs / 24)}d ago`;
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
    BASIC:        { emoji: "🚀", headline: "You're on the free plan",   subtext: "Get 300 credits/mo — use them for voice, images, video, BG removal & more for just $9/mo.", pills: ["300 credits/mo","AI Images & Video","No watermark","1080p export"],      btn: "Upgrade to Creator Lite →" },
    CREATOR_LITE: { emoji: "⭐", headline: "Ready to level up?",        subtext: "Creator Spark triples your credits to 900/mo with 1440p export and priority support.",        pills: ["900 credits/mo","1440p export","Priority support","500 BG removals"],    btn: "Upgrade to Creator Spark →" },
    CREATOR:      { emoji: "👑", headline: "Go limitless with Odyssey", subtext: "2,500 credits/mo, 4K export, unlimited BG removals and dedicated support.",                   pills: ["2,500 credits/mo","4K export","Unlimited BG removals","Dedicated support"], btn: "Upgrade to Creator Odyssey →" },
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
function ToolCard({ tool, plan, accentColor, creditsUsed, loading }: {
  tool: typeof TOOLS[0]; plan: string; accentColor: string;
  creditsUsed?: number; loading: boolean;
}) {
  const isLocked = !tool.availableOn.includes(plan);
  const hasUsed  = (creditsUsed ?? 0) > 0;

  const catColors: Record<string, string> = {
    AI: "#6355dc", Image: "#ec4899", Video: "#f59e0b",
    Assets: "#10b981", Media: "#06b6d4", Docs: "#8b5cf6"
  };
  const catColor = catColors[tool.category] || "#6355dc";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
      whileHover={!isLocked ? { boxShadow: `0 8px 24px rgba(0,0,0,0.10)`, borderColor: `${accentColor}55` } : {}}
      style={{
        background: isLocked ? "#fafafa" : "#ffffff",
        border: `1px solid ${isLocked ? "#e5e7eb" : hasUsed ? `${accentColor}33` : "#e5e7eb"}`,
        borderRadius: 16, padding: "20px",
        display: "flex", flexDirection: "column", gap: 14,
        opacity: isLocked ? 0.6 : 1,
        position: "relative", overflow: "hidden",
        boxShadow: isLocked ? "none" : "0 2px 8px rgba(0,0,0,0.06)",
        transition: "box-shadow 0.3s, border-color 0.3s",
        fontFamily: "'Satoshi', 'DM Sans', sans-serif",
      }}>

      {/* Header */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 10 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{
            width: 42, height: 42, borderRadius: 12,
            background: `${catColor}12`, border: `1px solid ${catColor}25`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 20, flexShrink: 0
          }}>
            {isLocked ? "🔒" : tool.icon}
          </div>
          <div>
            <div style={{ fontSize: 13.5, fontWeight: 700, color: isLocked ? "#9ca3af" : "#1a202c", marginBottom: 2 }}>
              {tool.label}
            </div>
            <span style={{
              fontSize: 10.5, fontWeight: 700, letterSpacing: "0.08em",
              textTransform: "uppercase" as const, padding: "2px 8px", borderRadius: 99,
              background: `${catColor}12`, color: catColor
            }}>{tool.category}</span>
          </div>
        </div>
        {!isLocked && hasUsed && (
          <span style={{
            fontSize: 12, fontWeight: 800, color: accentColor,
            background: `${accentColor}10`, padding: "4px 10px",
            borderRadius: 99, flexShrink: 0
          }}>
            {creditsUsed} cr
          </span>
        )}
      </div>

      {/* Body */}
      {loading && !isLocked ? (
        <Skeleton h={20} />
      ) : !isLocked ? (
        <p style={{ fontSize: 12, color: hasUsed ? "#6b7280" : "#9ca3af", lineHeight: 1.6, fontStyle: hasUsed ? "normal" : "italic" }}>
          {hasUsed ? `${creditsUsed} credits used this month` : "No usage this month"}
        </p>
      ) : (
        <p style={{ fontSize: 11.5, color: "#9ca3af", lineHeight: 1.5 }}>{tool.tip}</p>
      )}

      {/* CTA */}
      {!isLocked ? (
        <a href={tool.path} style={{
          marginTop: "auto", display: "flex", alignItems: "center",
          justifyContent: "center", gap: 6, padding: "9px 14px", borderRadius: 10,
          background: hasUsed ? `${accentColor}0e` : "#f9fafb",
          border: `1px solid ${hasUsed ? `${accentColor}30` : "#e5e7eb"}`,
          color: hasUsed ? accentColor : "#6b7280",
          fontSize: 12.5, fontWeight: 700, textDecoration: "none"
        }}>
          {hasUsed ? "Continue Using →" : "Try Now →"}
        </a>
      ) : (
        <a href="/pricing" style={{
          marginTop: "auto", display: "flex", alignItems: "center",
          justifyContent: "center", gap: 6, padding: "9px 14px", borderRadius: 10,
          background: "rgba(99,85,220,0.06)", border: "1px solid rgba(99,85,220,0.18)",
          color: "#6355dc", fontSize: 12, fontWeight: 700, textDecoration: "none"
        }}>🔓 Unlock Feature</a>
      )}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════
   MAIN DASHBOARD
═══════════════════════════════════════════════════════ */
export default function UsageDashboard() {
  const [userProfile,   setUserProfile]   = useState<UserProfile | null>(null);
  const [activePlans,   setActivePlans]   = useState<ActivePlan[]>([]);
  const [currentPlan,   setCurrentPlan]   = useState<string>("BASIC");
  const [usageSummary,  setUsageSummary]  = useState<UsageSummary | null>(null);
  const [history,       setHistory]       = useState<CreditTransaction[]>([]);
  const [showPopup,     setShowPopup]     = useState(false);
  const [activeTab,     setActiveTab]     = useState("overview");
  const [filterCat,     setFilterCat]     = useState("All");
  const [loading,       setLoading]       = useState(true);
  const [stylesReady,   setStylesReady]   = useState(false);

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
      .ud-grid3 { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 18px; }

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

        const plansRes = await axios.get(`${API_BASE_URL}/api/payments/active-plans`, { headers }).catch(() => ({ data: [] }));
        const plans: ActivePlan[] = plansRes.data;
        setActivePlans(plans);
        const planTypes = plans.map((p: ActivePlan) => p.planType);

        if      (profileRes.data.role === "ADMIN")  setCurrentPlan("ADMIN");
        else if (planTypes.includes("STUDIO"))       setCurrentPlan("STUDIO");
        else if (planTypes.includes("CREATOR"))      setCurrentPlan("CREATOR");
        else if (planTypes.includes("CREATOR_LITE")) setCurrentPlan("CREATOR_LITE");
        else                                         setCurrentPlan("BASIC");

        const [summaryRes, historyRes] = await Promise.allSettled([
          axios.get(`${API_BASE_URL}/api/credits/usage-summary`, { headers }),
          axios.get(`${API_BASE_URL}/api/credits/history?limit=20`, { headers }),
        ]);

        if (summaryRes.status === "fulfilled") {
          setUsageSummary(summaryRes.value.data);
        } else {
          const planKey  = profileRes.data.role === "ADMIN" ? "ADMIN"
            : planTypes.includes("STUDIO")       ? "STUDIO"
            : planTypes.includes("CREATOR")      ? "CREATOR"
            : planTypes.includes("CREATOR_LITE") ? "CREATOR_LITE" : "BASIC";
          const limit = PLAN_META[planKey]?.monthlyCredits ?? 50;
          const bal   = profileRes.data.creditBalance ?? 0;
          setUsageSummary({
            monthlyCreditsUsed:  limit > 0 ? Math.max(0, limit - bal) : 0,
            monthlyCreditsLimit: limit,
            dailyCreditsUsed:    0,
            balance:             bal,
            totalSpent:          0,
            expiresAt:           "",
            usageByTool:         {},
          });
        }

        if (historyRes.status === "fulfilled") {
          setHistory(historyRes.value.data);
        }

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
  const planExpiry = activePlans.find(p =>
    ["STUDIO","CREATOR","CREATOR_LITE"].includes(p.planType)
  )?.expiryDate ?? null;
  const days = daysLeft(planExpiry);

  const categories    = ["All", ...Array.from(new Set(TOOLS.map((t) => t.category)))];
  const filteredTools = filterCat === "All" ? TOOLS : TOOLS.filter((t) => t.category === filterCat);

  const balance      = usageSummary?.balance ?? userProfile?.creditBalance ?? 0;
  const creditLimit  = meta.monthlyCredits;
  const creditPct    = calcPct(creditLimit - balance, creditLimit);
  const displayName  = userProfile?.name?.split(" ")[0] ?? "there";

  const totalUsedTools = TOOLS.filter((t) =>
    (usageSummary?.usageByTool?.[t.id] ?? 0) > 0
  ).length;

  const topTools = [...TOOLS]
    .map(t => ({ ...t, credits: usageSummary?.usageByTool?.[t.id] ?? 0 }))
    .filter(t => t.credits > 0)
    .sort((a, b) => b.credits - a.credits)
    .slice(0, 4);

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
                <span style={{ padding: "4px 14px", borderRadius: 99, background: "rgba(255,255,255,0.2)", border: "1px solid rgba(255,255,255,0.35)", color: "#fff", fontSize: 12, fontWeight: 700, backdropFilter: "blur(8px)" }}>
                  {meta.name}
                </span>
                <span style={{
                  padding: "4px 14px", borderRadius: 99,
                  background: creditPct >= 90 ? "rgba(239,68,68,0.35)" : "rgba(255,255,255,0.15)",
                  border: "1px solid rgba(255,255,255,0.3)", color: "#fff",
                  fontSize: 12, fontWeight: 700
                }}>
                  {creditLimit <= 0 ? "∞ credits" : `${formatNum(balance)} credits left`}
                </span>
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
          {[["overview","📊 Overview"],["tools","🛠️ All Tools"],["history","🕐 History"],["subscription","💳 Subscription"]].map(([id, label]) => (
            <button key={id} className={`ud-tab${activeTab === id ? " active" : ""}`} onClick={() => setActiveTab(id)}>{label}</button>
          ))}
        </div>

        <AnimatePresence mode="wait">

          {/* ══════════════════════════════════
               OVERVIEW TAB
          ══════════════════════════════════ */}
          {activeTab === "overview" && (
            <motion.div key="overview" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.28 }}>

              {/* Credit meter + quick stats */}
              <div className="ud-grid2" style={{ marginBottom: 24 }}>

                {/* Credit balance card */}
                <div className="ud-card" style={{ borderColor: `${accentColor}22`, boxShadow: `0 4px 24px ${accentColor}10` }}>
                  <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.09em", color: "#9ca3af", textTransform: "uppercase", marginBottom: 10 }}>Credits Remaining</div>
                  {loading ? <Skeleton h={52} /> : (
                    <>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                        <div>
                          <div style={{ fontSize: 48, fontWeight: 900, fontFamily: "'Cabinet Grotesk',sans-serif", color: sevColor(creditPct, accentColor), letterSpacing: "-0.05em", lineHeight: 1 }}>
                            {creditLimit <= 0 ? "∞" : formatNum(balance)}
                          </div>
                          <div style={{ fontSize: 12, color: "#9ca3af", marginTop: 4 }}>
                            {creditLimit <= 0 ? "Unlimited credits" : `of ${formatNum(creditLimit)} monthly credits`}
                          </div>
                        </div>
                        <RingGauge pct={creditLimit <= 0 ? 10 : creditPct} color={accentColor} size={56} stroke={5} />
                      </div>
                      {creditLimit > 0 && (
                        <>
                          <Bar used={creditLimit - balance} limit={creditLimit} color={accentColor} />
                          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
                            <span style={{ fontSize: 11.5, color: "#9ca3af" }}>{creditPct}% used this month</span>
                            {creditPct >= 70 && (
                              <span style={{ fontSize: 11.5, fontWeight: 700, color: sevColor(creditPct, accentColor) }}>
                                {creditPct >= 90 ? "⚠️ Almost out" : "⚡ High usage"}
                              </span>
                            )}
                          </div>
                        </>
                      )}
                    </>
                  )}
                </div>

                {/* Quick stats column */}
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {[
                    { label: "Plan Status",  icon: "📋", value: planStatusValue, sub: planStatusSub,
                      color: currentPlan === "BASIC" ? "#6b7280" : days >= 0 && days < 7 ? "#ef4444" : "#10b981" },
                    { label: "Used Today",   icon: "⚡", value: loading ? "—" : `${usageSummary?.dailyCreditsUsed ?? 0} cr`,
                      sub: "Credits consumed today", color: accentColor },
                    { label: "Tools Active", icon: "🛠️", value: loading ? "—" : `${totalUsedTools}`,
                      sub: `of ${TOOLS.length} tools used this month`, color: "#f59e0b" },
                  ].map((s, i) => (
                    <motion.div key={i} className="ud-card"
                      initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.07 }}
                      style={{ borderColor: `${s.color}22`, display: "flex", alignItems: "center", gap: 14, padding: "14px 20px" }}>
                      <div style={{ width: 38, height: 38, borderRadius: 12, background: `${s.color}10`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>{s.icon}</div>
                      <div>
                        {loading ? <Skeleton w={60} h={20} /> : (
                          <div style={{ fontSize: 20, fontWeight: 900, fontFamily: "'Cabinet Grotesk',sans-serif", color: s.color, letterSpacing: "-0.03em" }}>{s.value}</div>
                        )}
                        <div style={{ fontSize: 12, fontWeight: 700, color: "#374151" }}>{s.label}</div>
                        <div style={{ fontSize: 11, color: "#9ca3af" }}>{s.sub}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Per-tool credit breakdown */}
              {topTools.length > 0 && (
                <div style={{ marginBottom: 24 }}>
                  <h2 style={{ fontSize: 15, fontWeight: 800, color: "#374151", marginBottom: 16, letterSpacing: "-0.01em" }}>Credits Used by Tool This Month</h2>
                  <div className="ud-grid2">
                    {topTools.map((t, i) => {
                      const totalUsed = usageSummary?.monthlyCreditsUsed ?? 1;
                      const pct       = calcPct(t.credits, totalUsed);
                      const colors    = [accentColor, "#ec4899", "#f59e0b", "#10b981"];
                      const c         = colors[i % colors.length];
                      return (
                        <motion.div key={t.id} className="ud-card"
                          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}
                          style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                              <span style={{ fontSize: 18 }}>{t.icon}</span>
                              <span style={{ fontSize: 13, fontWeight: 700, color: "#374151" }}>{t.label}</span>
                            </div>
                            <span style={{ fontSize: 22, fontWeight: 900, fontFamily: "'Cabinet Grotesk',sans-serif", color: c }}>{t.credits}</span>
                          </div>
                          <Bar used={t.credits} limit={totalUsed} color={c} />
                          <div style={{ fontSize: 11, color: "#9ca3af" }}>{pct}% of your total usage</div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Recent activity preview */}
              {history.length > 0 && (
                <div style={{ marginBottom: 24 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                    <h2 style={{ fontSize: 15, fontWeight: 800, color: "#374151", letterSpacing: "-0.01em" }}>Recent Activity</h2>
                    <button onClick={() => setActiveTab("history")} style={{ fontSize: 12, fontWeight: 700, color: accentColor, background: "none", border: "none", cursor: "pointer" }}>View all →</button>
                  </div>
                  <div className="ud-card" style={{ padding: 0, overflow: "hidden" }}>
                    {history.slice(0, 5).map((tx, i) => (
                      <div key={tx.id} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "13px 20px", borderBottom: i < 4 ? "1px solid #f9fafb" : "none" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                          <span style={{ fontSize: 20 }}>{tx.toolIcon}</span>
                          <div>
                            <div style={{ fontSize: 13, fontWeight: 700, color: "#374151" }}>{tx.toolName}</div>
                            <div style={{ fontSize: 11.5, color: "#9ca3af" }}>{tx.description} · {timeAgo(tx.createdAt)}</div>
                          </div>
                        </div>
                        <div style={{ textAlign: "right" }}>
                          <div style={{ fontSize: 14, fontWeight: 800, fontFamily: "'Cabinet Grotesk',sans-serif",
                            color: tx.type === "USAGE" ? "#ef4444" : "#10b981" }}>
                            {tx.type === "USAGE" ? `−${tx.creditsUsed}` : `+${tx.creditsUsed}`}
                          </div>
                          <div style={{ fontSize: 11, color: "#9ca3af" }}>credits</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Untried tools */}
              {(() => {
                const usedIds = new Set(Object.keys(usageSummary?.usageByTool ?? {}).filter(k => (usageSummary?.usageByTool?.[k] ?? 0) > 0));
                const untried = TOOLS.filter(t => t.availableOn.includes(currentPlan) && !usedIds.has(t.id)).slice(0, 6);
                if (!untried.length) return null;
                return (
                  <div style={{ background: "linear-gradient(135deg,#f0f4ff,#f5f0ff)", border: "1px solid rgba(99,85,220,0.15)", borderRadius: 20, padding: "28px 28px 24px" }}>
                    <h3 style={{ fontSize: 15, fontWeight: 800, color: "#374151", marginBottom: 4 }}>Tools you haven't tried yet</h3>
                    <p style={{ fontSize: 13, color: "#6b7280", marginBottom: 18 }}>Make the most of your {meta.name} plan</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                      {untried.map(t => (
                        <a key={t.id} href={t.path} style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 14px", borderRadius: 12, background: "#fff", border: "1px solid #e5e7eb", color: "#374151", fontSize: 13, fontWeight: 600, textDecoration: "none", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
                          <span>{t.icon}</span>{t.label}<span style={{ fontSize: 11, color: "#6355dc" }}>Try →</span>
                        </a>
                      ))}
                    </div>
                  </div>
                );
              })()}
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
              <div className="ud-grid3">
                {filteredTools.map((tool, i) => (
                  <motion.div key={tool.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }}>
                    <ToolCard
                      tool={tool}
                      plan={currentPlan}
                      accentColor={accentColor}
                      creditsUsed={usageSummary?.usageByTool?.[tool.id]}
                      loading={loading}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* ══════════════════════════════════
               HISTORY TAB
          ══════════════════════════════════ */}
          {activeTab === "history" && (
            <motion.div key="history" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.28 }}>

              {/* Summary row */}
              <div className="ud-grid2" style={{ marginBottom: 24 }}>
                {[
                  { label: "Credits Used (Month)", icon: "📉", value: usageSummary ? formatNum(usageSummary.monthlyCreditsUsed) : "—", color: "#ef4444" },
                  { label: "Credits Remaining",    icon: "💎", value: creditLimit <= 0 ? "∞" : formatNum(balance),                   color: accentColor },
                  { label: "Used Today",           icon: "⚡", value: `${usageSummary?.dailyCreditsUsed ?? 0}`,                       color: "#10b981" },
                  { label: "Lifetime Spent",       icon: "📊", value: formatNum(usageSummary?.totalSpent ?? 0),                       color: "#f59e0b" },
                ].map((s, i) => (
                  <div key={i} className="ud-card" style={{ display: "flex", alignItems: "center", gap: 14, borderColor: `${s.color}20` }}>
                    <span style={{ fontSize: 22 }}>{s.icon}</span>
                    <div>
                      <div style={{ fontSize: 22, fontWeight: 900, fontFamily: "'Cabinet Grotesk',sans-serif", color: s.color }}>
                        {loading ? "—" : s.value}
                      </div>
                      <div style={{ fontSize: 12, color: "#9ca3af" }}>{s.label}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Transaction list */}
              <div className="ud-card" style={{ padding: 0, overflow: "hidden" }}>
                <div style={{ padding: "16px 20px", borderBottom: "1px solid #f3f4f6", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 14, fontWeight: 800, color: "#374151" }}>All Transactions</span>
                  <span style={{ fontSize: 12, color: "#9ca3af" }}>{history.length} records</span>
                </div>
                {loading ? (
                  <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 12 }}>
                    {[1,2,3,4,5].map(i => <Skeleton key={i} h={44} />)}
                  </div>
                ) : history.length === 0 ? (
                  <div style={{ padding: 48, textAlign: "center" }}>
                    <div style={{ fontSize: 36, marginBottom: 12 }}>📭</div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "#374151", marginBottom: 6 }}>No transactions yet</div>
                    <div style={{ fontSize: 13, color: "#9ca3af" }}>Your credit history will appear here once you start using tools.</div>
                  </div>
                ) : (
                  history.map((tx, i) => (
                    <motion.div key={tx.id}
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.02 }}
                      style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 20px", borderBottom: i < history.length - 1 ? "1px solid #f9fafb" : "none" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                        <div style={{ width: 38, height: 38, borderRadius: 10, background: `${accentColor}10`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>
                          {tx.toolIcon}
                        </div>
                        <div>
                          <div style={{ fontSize: 13.5, fontWeight: 700, color: "#374151" }}>{tx.toolName}</div>
                          <div style={{ fontSize: 12, color: "#9ca3af" }}>{tx.description} · {timeAgo(tx.createdAt)}</div>
                        </div>
                      </div>
                      <div style={{ textAlign: "right", flexShrink: 0 }}>
                        <div style={{ fontSize: 15, fontWeight: 800, fontFamily: "'Cabinet Grotesk',sans-serif",
                          color: tx.type === "USAGE" ? "#ef4444" : "#10b981" }}>
                          {tx.type === "USAGE" ? `−${tx.creditsUsed}` : `+${tx.creditsUsed}`}
                        </div>
                        <div style={{ fontSize: 11, color: "#9ca3af" }}>
                          {tx.type === "PLAN_GRANT" ? "granted" : tx.type === "TOPUP" ? "added" : tx.type === "REFUND" ? "refunded" : "credits"}
                        </div>
                      </div>
                    </motion.div>
                  ))
                )}
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
                          creditLimit <= 0 ? "Unlimited credits" : `${formatNum(creditLimit)} credits/mo`,
                          meta.maxQuality + " max export",
                          currentPlan !== "BASIC" ? "All AI tools included" : "Core tools only",
                          "Commercial use included",
                        ].map(f => (
                          <span key={f} style={{ padding: "5px 12px", borderRadius: 99, background: "rgba(255,255,255,0.2)", border: "1px solid rgba(255,255,255,0.35)", color: "#fff", fontSize: 12, fontWeight: 700 }}>{f}</span>
                        ))}
                      </div>
                    </div>

                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontSize: 11, color: "rgba(255,255,255,0.7)", marginBottom: 4, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                        Credits Left
                      </div>
                      {loading ? <Skeleton w={60} h={44} /> : (
                        <div style={{ fontSize: 44, fontWeight: 900, fontFamily: "'Cabinet Grotesk',sans-serif", color: "#ffffff", letterSpacing: "-0.05em" }}>
                          {creditLimit <= 0 ? "∞" : formatNum(balance)}
                        </div>
                      )}
                      <div style={{ fontSize: 13, color: "rgba(255,255,255,0.75)", marginBottom: 12 }}>
                        {creditLimit <= 0 ? "unlimited" : `of ${formatNum(creditLimit)}`}
                      </div>
                      {creditLimit > 0 && (
                        <div style={{ marginBottom: 14, width: 120 }}>
                          <Bar used={creditLimit - balance} limit={creditLimit} color="rgba(255,255,255,0.85)" />
                        </div>
                      )}
                      {meta.next && (
                        <a href="/pricing" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 20px", borderRadius: 11, background: "rgba(255,255,255,0.22)", border: "1px solid rgba(255,255,255,0.4)", color: "#fff", fontSize: 13, fontWeight: 700, textDecoration: "none", backdropFilter: "blur(8px)" }}>
                          ↑ Upgrade to {meta.nextName}
                        </a>
                      )}
                    </div>
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

                {/* Monthly credit summary */}
                <div className="ud-card">
                  <div style={{ fontSize: 12, color: "#9ca3af", fontWeight: 700, marginBottom: 14, textTransform: "uppercase", letterSpacing: "0.08em" }}>Monthly Credits</div>
                  {loading ? (
                    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}><Skeleton h={32} /><Skeleton h={32} /></div>
                  ) : (
                    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                      <div>
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                          <span style={{ fontSize: 13, color: "#6b7280" }}>Total used</span>
                          <span style={{ fontSize: 13, fontWeight: 700, color: "#374151" }}>
                            {usageSummary ? `${formatNum(usageSummary.monthlyCreditsUsed)} / ${creditLimit <= 0 ? "∞" : formatNum(creditLimit)}` : "—"}
                          </span>
                        </div>
                        {creditLimit > 0 && usageSummary && <Bar used={usageSummary.monthlyCreditsUsed} limit={creditLimit} color={accentColor} />}
                      </div>
                      {usageSummary && Object.entries(usageSummary.usageByTool).filter(([, v]) => v > 0).length > 0 && (
                        <div style={{ borderTop: "1px solid #f3f4f6", paddingTop: 12 }}>
                          <div style={{ fontSize: 11, color: "#9ca3af", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 10 }}>By Tool</div>
                          {Object.entries(usageSummary.usageByTool).filter(([, v]) => v > 0).map(([toolId, credits], i) => {
                            const toolMeta = TOOLS.find(t => t.id === toolId);
                            const colors   = [accentColor, "#ec4899", "#f59e0b", "#10b981", "#06b6d4"];
                            return (
                              <div key={toolId} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                                <span style={{ fontSize: 16, flexShrink: 0 }}>{toolMeta?.icon ?? "🔧"}</span>
                                <div style={{ flex: 1, minWidth: 0 }}>
                                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
                                    <span style={{ fontSize: 12, color: "#374151", fontWeight: 600 }}>{toolMeta?.label ?? toolId}</span>
                                    <span style={{ fontSize: 12, fontWeight: 700, color: colors[i % colors.length] }}>{credits} cr</span>
                                  </div>
                                  <Bar used={credits} limit={usageSummary.monthlyCreditsUsed} color={colors[i % colors.length]} />
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                      <div style={{ borderTop: "1px solid #f3f4f6", paddingTop: 12, display: "flex", justifyContent: "space-between" }}>
                        <span style={{ fontSize: 12, color: "#9ca3af" }}>Lifetime spent</span>
                        <span style={{ fontSize: 12, fontWeight: 700, color: "#374151" }}>{formatNum(usageSummary?.totalSpent ?? 0)} credits</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Account info */}
                <div className="ud-card">
                  <div style={{ fontSize: 12, color: "#9ca3af", fontWeight: 700, marginBottom: 14, textTransform: "uppercase", letterSpacing: "0.08em" }}>Account Info</div>
                  {loading ? (
                    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}><Skeleton h={14} /><Skeleton h={14} /></div>
                  ) : (
                    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                      {[
                        ["📧 Email",       userProfile?.email ?? "—"],
                        ["👤 Name",        userProfile?.name  ?? "—"],
                        ["🛡️ Role",        userProfile?.role  ?? "BASIC"],
                        ["💎 Plan",        meta.name],
                        ["📊 Total Spent", `${formatNum(usageSummary?.totalSpent ?? 0)} credits`],
                      ].map(([k, v]) => (
                        <div key={k as string} style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
                          <span style={{ fontSize: 12.5, color: "#6b7280" }}>{k}</span>
                          <span style={{ fontSize: 12.5, fontWeight: 700, color: "#374151", textAlign: "right" }}>{v}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Upgrade comparison */}
              {meta.next && (
                <div className="ud-card">
                  <h3 style={{ fontSize: 15, fontWeight: 800, color: "#374151", marginBottom: 4 }}>What you'd unlock with {meta.nextName}</h3>
                  <p style={{ fontSize: 13, color: "#9ca3af", marginBottom: 20 }}>See what you're missing out on</p>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12 }}>
                    {(meta.next === "CREATOR_LITE"
                      ? [["Credits/mo","50","300"],["AI Image & Video","✗","✓"],["Max quality","720p","1080p"],["Watermark","Yes","No"]]
                      : meta.next === "CREATOR"
                      ? [["Credits/mo","300","900"],["Max quality","1080p","1440p"],["BG removals","100","500"],["Priority support","✗","✓"]]
                      : [["Credits/mo","900","2,500"],["Max quality","1440p","4K"],["BG removals","500","Unlimited"],["Support","Standard","Dedicated"]]
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