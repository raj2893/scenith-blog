"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { API_BASE_URL } from "../../config";

// ═══════════════════════════════════════════════════════
//  TYPES
// ═══════════════════════════════════════════════════════
interface Overview {
  users: { total: number; new: number; verified: number; admins: number; googleAuth: number };
  revenue: { total: number; inr: number; usd: number; successOrders: number; pendingOrders: number; failedOrders: number };
  credits: { granted: number; consumed: number };
  toolUsage: Record<string, number>;
  plans: { distribution: Record<string, number>; activeSubs: number };
}

interface Payment {
  id: number; orderId: string; paymentId?: string;
  userEmail: string; userName: string; userId: number;
  planType: string; amount: number; currency: string;
  status: "PENDING" | "SUCCESS" | "FAILED";
  createdAt: string; completedAt?: string;
}

interface UserRow {
  id: number; email: string; name: string;
  planType: string; role: string;
  emailVerified: boolean; googleAuth: boolean;
  creditBalance?: number; totalSpent?: number;
  planExpiresAt?: string; createdAt: string;
}

interface CreditTx {
  id: number; userEmail: string; userName: string; userId: number;
  delta: number; balanceAfter: number; type: string;
  description: string; createdAt: string;
}

interface VideoJob {
  id: number; userEmail: string; model: string;
  generationType: string; status: string; prompt: string;
  durationSeconds: number; creditsUsed: number;
  errorMessage?: string; createdAt: string; completedAt?: string;
}

interface ChartPoint { date: string; revenue?: number; signups?: number }

interface ExpiringSoon {
  userId: number; userEmail: string; userName: string;
  planType: string; expiryDate: string;
}

interface TopUser {
  userId: number; userEmail: string; userName: string;
  planType: string; balance: number; totalSpent: number;
}

// ═══════════════════════════════════════════════════════
//  HELPERS
// ═══════════════════════════════════════════════════════
const fmt = (n: number) => {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + "M";
  if (n >= 1_000)     return (n / 1_000).toFixed(1) + "K";
  return String(n);
};

const fmtCur = (n: number, cur = "INR") =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: cur, maximumFractionDigits: 0 }).format(n);

const fmtDate = (s?: string) =>
  s ? new Date(s).toLocaleString("en-IN", { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" }) : "—";

const fmtDateShort = (s?: string) =>
  s ? new Date(s).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }) : "—";

const daysLeft = (s?: string) => {
  if (!s) return null;
  const d = Math.ceil((new Date(s).getTime() - Date.now()) / 86_400_000);
  return d;
};

// status badge
const StatusBadge = ({ status }: { status: string }) => {
  const colors: Record<string, { bg: string; color: string }> = {
    SUCCESS:    { bg: "#dcfce7", color: "#15803d" },
    PENDING:    { bg: "#fef9c3", color: "#92400e" },
    FAILED:     { bg: "#fee2e2", color: "#991b1b" },
    COMPLETED:  { bg: "#dcfce7", color: "#15803d" },
    PROCESSING: { bg: "#dbeafe", color: "#1d4ed8" },
    ACTIVE:     { bg: "#dcfce7", color: "#15803d" },
    ADMIN:      { bg: "#f3e8ff", color: "#7c3aed" },
  };
  const c = colors[status?.toUpperCase()] ?? { bg: "#f3f4f6", color: "#374151" };
  return (
    <span style={{ padding: "3px 10px", borderRadius: 99, fontSize: 11, fontWeight: 700,
      background: c.bg, color: c.color, whiteSpace: "nowrap" as const }}>
      {status}
    </span>
  );
};

// Mini sparkline bar chart
const Sparkline = ({ data, color = "#6355dc" }: { data: number[]; color?: string }) => {
  if (!data.length) return null;
  const max = Math.max(...data, 1);
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: 2, height: 32 }}>
      {data.map((v, i) => (
        <div key={i} style={{
          flex: 1, minWidth: 4, borderRadius: 3,
          height: `${Math.max(10, (v / max) * 100)}%`,
          background: i === data.length - 1 ? color : `${color}55`,
          transition: "height 0.4s ease"
        }} />
      ))}
    </div>
  );
};

// Date range picker
const DateRange = ({ from, to, onChange }: {
  from: string; to: string;
  onChange: (from: string, to: string) => void;
}) => (
  <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" as const }}>
    <input type="date" value={from} max={to || undefined}
      onChange={e => onChange(e.target.value, to)}
      style={{ padding: "7px 12px", borderRadius: 10, border: "1px solid #e5e7eb",
        fontSize: 12, fontFamily: "inherit", color: "#374151", background: "#fff" }} />
    <span style={{ color: "#9ca3af", fontSize: 12 }}>to</span>
    <input type="date" value={to} min={from || undefined}
      onChange={e => onChange(from, e.target.value)}
      style={{ padding: "7px 12px", borderRadius: 10, border: "1px solid #e5e7eb",
        fontSize: 12, fontFamily: "inherit", color: "#374151", background: "#fff" }} />
    {/* Quick presets */}
    {[["7d","Last 7d"],["30d","Last 30d"],["90d","Last 90d"],["all","All time"]].map(([k, label]) => (
      <button key={k} onClick={() => {
        const now = new Date();
        const end = now.toISOString().split("T")[0];
        if (k === "all") { onChange("2024-01-01", end); return; }
        const days = parseInt(k);
        const start = new Date(now.getTime() - days * 86_400_000).toISOString().split("T")[0];
        onChange(start, end);
      }} style={{
        padding: "6px 12px", borderRadius: 8, border: "1px solid #e5e7eb",
        background: "#f9fafb", color: "#6b7280", fontSize: 11, fontWeight: 700,
        cursor: "pointer", fontFamily: "inherit"
      }}>{label}</button>
    ))}
  </div>
);

// KPI card
const KpiCard = ({ icon, label, value, sub, color = "#6355dc", spark }: {
  icon: string; label: string; value: string | number;
  sub?: string; color?: string; spark?: number[];
}) => (
  <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
    style={{ background: "#fff", border: `1px solid ${color}18`, borderRadius: 16,
      padding: "20px 22px", boxShadow: `0 2px 12px ${color}0a`,
      display: "flex", flexDirection: "column", gap: 8 }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
      <div>
        <div style={{ fontSize: 22, marginBottom: 4 }}>{icon}</div>
        <div style={{ fontSize: 11, color: "#9ca3af", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>{label}</div>
        <div style={{ fontSize: 28, fontWeight: 900, color, letterSpacing: "-0.04em", lineHeight: 1.1, marginTop: 4 }}>
          {value}
        </div>
        {sub && <div style={{ fontSize: 11.5, color: "#9ca3af", marginTop: 3 }}>{sub}</div>}
      </div>
      {spark && <Sparkline data={spark} color={color} />}
    </div>
  </motion.div>
);

// Table wrapper
const Table = ({ cols, rows, emptyMsg = "No data" }: {
  cols: { key: string; label: string; render?: (v: any, row: any) => React.ReactNode }[];
  rows: any[]; emptyMsg?: string;
}) => (
  <div style={{ overflowX: "auto" as const }}>
    <table style={{ width: "100%", borderCollapse: "collapse" as const, fontSize: 12.5 }}>
      <thead>
        <tr style={{ borderBottom: "2px solid #f3f4f6" }}>
          {cols.map(c => (
            <th key={c.key} style={{ padding: "10px 14px", textAlign: "left" as const,
              fontWeight: 800, color: "#9ca3af", textTransform: "uppercase" as const,
              letterSpacing: "0.07em", fontSize: 10.5, whiteSpace: "nowrap" as const }}>{c.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.length === 0 ? (
          <tr><td colSpan={cols.length} style={{ textAlign: "center" as const, padding: "32px", color: "#9ca3af" }}>{emptyMsg}</td></tr>
        ) : rows.map((row, i) => (
          <tr key={i} style={{ borderBottom: "1px solid #f9fafb" }}
            onMouseEnter={e => (e.currentTarget.style.background = "#fafafa")}
            onMouseLeave={e => (e.currentTarget.style.background = "transparent")}>
            {cols.map(c => (
              <td key={c.key} style={{ padding: "11px 14px", color: "#374151", verticalAlign: "middle" as const }}>
                {c.render ? c.render(row[c.key], row) : (row[c.key] ?? "—")}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// Pagination
const Paginator = ({ page, size, total, onChange }: {
  page: number; size: number; total: number; onChange: (p: number) => void;
}) => {
  const pages = Math.max(1, Math.ceil(total / size));
  if (pages <= 1) return null;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 14, justifyContent: "flex-end" }}>
      <button onClick={() => onChange(Math.max(0, page - 1))} disabled={page === 0}
        style={{ padding: "5px 12px", borderRadius: 8, border: "1px solid #e5e7eb",
          background: page === 0 ? "#f9fafb" : "#fff", cursor: page === 0 ? "default" : "pointer",
          color: "#6b7280", fontSize: 12 }}>‹</button>
      <span style={{ fontSize: 12, color: "#6b7280" }}>Page {page + 1} / {pages} ({total} total)</span>
      <button onClick={() => onChange(Math.min(pages - 1, page + 1))} disabled={page >= pages - 1}
        style={{ padding: "5px 12px", borderRadius: 8, border: "1px solid #e5e7eb",
          background: page >= pages - 1 ? "#f9fafb" : "#fff", cursor: page >= pages - 1 ? "default" : "pointer",
          color: "#6b7280", fontSize: 12 }}>›</button>
    </div>
  );
};

// ═══════════════════════════════════════════════════════
//  PLAN DISTRIBUTION DONUT (CSS only)
// ═══════════════════════════════════════════════════════
const PlanDonut = ({ dist }: { dist: Record<string, number> }) => {
  const colors = { FREE: "#e5e7eb", CREATOR_LITE: "#818cf8", CREATOR: "#7c3aed", STUDIO: "#f59e0b" };
  const total = Object.values(dist).reduce((a, b) => a + b, 0) || 1;
  let cumPct = 0;
  const slices: { pct: number; color: string; key: string; val: number }[] = [];
  Object.entries(dist).forEach(([k, v]) => {
    const pct = (v / total) * 100;
    slices.push({ pct, color: (colors as any)[k] ?? "#ccc", key: k, val: v });
    cumPct += pct;
  });

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" as const }}>
      <div style={{ position: "relative", width: 100, height: 100, flexShrink: 0 }}>
        <svg viewBox="0 0 36 36" style={{ width: 100, height: 100, transform: "rotate(-90deg)" }}>
          {(() => {
            let offset = 0;
            return slices.map(s => {
              const el = (
                <circle key={s.key} cx="18" cy="18" r="14"
                  fill="none" stroke={s.color} strokeWidth="5"
                  strokeDasharray={`${s.pct} ${100 - s.pct}`}
                  strokeDashoffset={-offset}
                  style={{ transition: "stroke-dasharray 0.8s ease" }} />
              );
              offset += s.pct;
              return el;
            });
          })()}
        </svg>
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center" }}>
          <div style={{ fontSize: 18, fontWeight: 900, color: "#1a202c" }}>{fmt(total)}</div>
          <div style={{ fontSize: 9, color: "#9ca3af", fontWeight: 700 }}>USERS</div>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {slices.map(s => (
          <div key={s.key} style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 10, height: 10, borderRadius: 3, background: s.color, flexShrink: 0 }} />
            <span style={{ fontSize: 12, color: "#6b7280" }}>{s.key}</span>
            <span style={{ fontSize: 12, fontWeight: 800, color: "#374151", marginLeft: "auto" }}>{fmt(s.val)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// ═══════════════════════════════════════════════════════
//  MINI BAR CHART for revenue / signups
// ═══════════════════════════════════════════════════════
const MiniBarChart = ({ data, valueKey, color, label }: {
  data: ChartPoint[]; valueKey: "revenue" | "signups"; color: string; label: string;
}) => {
  const vals = data.map(d => d[valueKey] as number ?? 0);
  const max  = Math.max(...vals, 1);
  const total = vals.reduce((a, b) => a + b, 0);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 12 }}>
        <span style={{ fontSize: 12, color: "#9ca3af", fontWeight: 700 }}>{label}</span>
        <span style={{ fontSize: 22, fontWeight: 900, color, letterSpacing: "-0.04em" }}>
          {valueKey === "revenue" ? fmtCur(total) : fmt(total)}
        </span>
      </div>
      <div style={{ display: "flex", alignItems: "flex-end", gap: 3, height: 64 }}>
        {data.slice(-30).map((d, i) => {
          const v = (d[valueKey] as number) ?? 0;
          const h = Math.max(4, (v / max) * 64);
          return (
            <div key={i} title={`${d.date}: ${valueKey === "revenue" ? fmtCur(v) : v}`}
              style={{ flex: 1, minWidth: 4, height: h, borderRadius: "3px 3px 0 0",
                background: i === data.slice(-30).length - 1 ? color : `${color}55`,
                transition: "height 0.5s ease", cursor: "default" }} />
          );
        })}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 4 }}>
        <span style={{ fontSize: 10, color: "#d1d5db" }}>
          {data.length > 0 ? fmtDateShort(data[0].date) : ""}
        </span>
        <span style={{ fontSize: 10, color: "#d1d5db" }}>
          {data.length > 0 ? fmtDateShort(data[data.length - 1].date) : "Today"}
        </span>
      </div>
    </div>
  );
};

// ═══════════════════════════════════════════════════════
//  MAIN ADMIN PORTAL
// ═══════════════════════════════════════════════════════
const TABS = [
  { id: "overview",      label: "📊 Overview"       },
  { id: "users",         label: "👥 Users"          },
  { id: "payments",      label: "💳 Payments"        },
  { id: "credits",       label: "⚡ Credits"         },
  { id: "tools",         label: "🛠️ Tool Usage"     },
  { id: "subscriptions", label: "🔑 Subscriptions"  },
  { id: "videojobs",     label: "🎬 Video Jobs"      },
  { id: "ttsstats",      label: "🎙️ TTS Analytics"  },
  { id: "founder",       label: "🚀 Founder Intel"  },
];

export default function AdminPortal() {
  const [tab, setTab]           = useState("overview");
  const [loading, setLoading]   = useState(false);
  const [from, setFrom]         = useState(() => {
    const d = new Date(); d.setDate(d.getDate() - 30);
    return d.toISOString().split("T")[0];
  });
  const [to, setTo]             = useState(new Date().toISOString().split("T")[0]);

  // data
  const [overview, setOverview]     = useState<Overview | null>(null);
  const [payments, setPayments]     = useState<{ payments: Payment[]; total: number }>({ payments: [], total: 0 });
  const [users, setUsers]           = useState<{ users: UserRow[]; total: number }>({ users: [], total: 0 });
  const [credits, setCredits]       = useState<{ transactions: CreditTx[]; total: number }>({ transactions: [], total: 0 });
  const [videoJobs, setVideoJobs]   = useState<{ jobs: VideoJob[]; total: number }>({ jobs: [], total: 0 });
  const [revenueChart, setRevenueChart] = useState<ChartPoint[]>([]);
  const [signupsChart, setSignupsChart] = useState<ChartPoint[]>([]);
  const [expiring, setExpiring]     = useState<ExpiringSoon[]>([]);
  const [topUsers, setTopUsers]     = useState<TopUser[]>([]);
  const [activeSubs, setActiveSubs] = useState<{ subscriptions: any[]; total: number }>({ subscriptions: [], total: 0 });
  const [ttsStats, setTtsStats] = useState<any>(null);

  // ── Founder Analytics State ──────────────────────────────────────────────
  const [founderScorecard,    setFounderScorecard]    = useState<any>(null);
  const [founderGrowth,       setFounderGrowth]       = useState<any>(null);
  const [founderRevenue,      setFounderRevenue]      = useState<any>(null);
  const [founderToolAdoption, setFounderToolAdoption] = useState<any>(null);
  const [founderEngagement,   setFounderEngagement]   = useState<any>(null);
  const [founderContentHealth,setFounderContentHealth]= useState<any>(null);
  const [founderAiDeepDive,   setFounderAiDeepDive]   = useState<any>(null);
  const [founderBillingHealth,setFounderBillingHealth]= useState<any>(null);
  const [founderActiveSection,setFounderActiveSection]= useState<string>("scorecard");
  const [founderLoading,      setFounderLoading]      = useState(false);

  // pagination
  const [payPage, setPayPage]     = useState(0);
  const [usrPage, setUsrPage]     = useState(0);
  const [crPage, setCrPage]       = useState(0);
  const [vidPage, setVidPage]     = useState(0);
  const [subPage, setSubPage]     = useState(0);

  // filters
  const [payStatus, setPayStatus]   = useState("");
  const [crType, setCrType]         = useState("");
  const [vidStatus, setVidStatus]   = useState("");
  const [userSearch, setUserSearch] = useState("");

  const headers = useCallback(() => {
    const token = localStorage.getItem("token") || "";
    return { Authorization: `Bearer ${token}` };
  }, []);

  const api = useCallback((path: string, params?: Record<string, string | number>) => {
    const url = new URL(`${API_BASE_URL}${path}`);
    if (params) Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, String(v)));
    return axios.get(url.toString(), { headers: headers() }).then(r => r.data);
  }, [headers]);
  const [ttsUserChart, setTtsUserChart] = useState<any>(null);
  const [ttsUserChartLoading, setTtsUserChartLoading] = useState(false);
  const [expandedTtsUserId, setExpandedTtsUserId] = useState<number | null>(null);

  const loadTtsUserChart = useCallback(async (userId: number) => {
  if (expandedTtsUserId === userId) {
    setExpandedTtsUserId(null);
    setTtsUserChart(null);
    return;
  }
  setExpandedTtsUserId(userId);
  setTtsUserChartLoading(true);
  try {
    const data = await api("/api/admin/tts-user-chart", { userId, from, to });
    setTtsUserChart(data);
  } catch (e) {
    console.error(e);
  } finally {
    setTtsUserChartLoading(false);
  }
}, [expandedTtsUserId, from, to, api]);

  // Fetch overview + charts on date change
  useEffect(() => {
    setLoading(true);
    Promise.all([
      api("/api/admin/overview",       { from, to }),
      api("/api/admin/revenue-chart",  { from, to }),
      api("/api/admin/signups-chart",  { from, to }),
      api("/api/admin/expiring-soon"),
      api("/api/admin/top-users",      { limit: 20 }),
    ]).then(([ov, rc, sc, exp, tu]) => {
      setOverview(ov);
      setRevenueChart(rc);
      setSignupsChart(sc);
      setExpiring(exp);
      setTopUsers(tu);
    }).catch(console.error).finally(() => setLoading(false));
  }, [from, to, api]);

  // Tab-specific fetches
  useEffect(() => {
    if (tab === "payments") {
      api("/api/admin/payments", { from, to, status: payStatus, page: payPage, size: 50 })
        .then(setPayments).catch(console.error);
    }
  }, [tab, from, to, payStatus, payPage, api]);

  useEffect(() => {
    if (tab === "users") {
      api("/api/admin/users", { from, to, page: usrPage, size: 50, search: userSearch })
        .then(setUsers).catch(console.error);
    }
  }, [tab, from, to, usrPage, userSearch, api]);

  useEffect(() => {
    if (tab === "credits") {
      api("/api/admin/credit-transactions", { from, to, type: crType, page: crPage, size: 50 })
        .then(setCredits).catch(console.error);
    }
  }, [tab, from, to, crType, crPage, api]);

  useEffect(() => {
    if (tab === "videojobs") {
      api("/api/admin/video-jobs", { from, to, status: vidStatus, page: vidPage, size: 30 })
        .then(setVideoJobs).catch(console.error);
    }
  }, [tab, from, to, vidStatus, vidPage, api]);

  useEffect(() => {
    if (tab === "subscriptions") {
      api("/api/admin/active-subscriptions", { page: subPage, size: 50 })
        .then(setActiveSubs).catch(console.error);
    }
  }, [tab, subPage, api]);

  useEffect(() => {
    if (tab === "ttsstats") {
      api("/api/admin/tts-stats", { from, to })
        .then(setTtsStats).catch(console.error);
    }
  }, [tab, from, to, api]);

  useEffect(() => {
    if (tab !== "founder") return;
    setFounderLoading(true);
    Promise.all([
      api("/api/admin/founder/scorecard"),
      api("/api/admin/founder/growth",        { from, to }),
      api("/api/admin/founder/revenue",        { from, to }),
      api("/api/admin/founder/tool-adoption",  { from, to }),
      api("/api/admin/founder/engagement",     { from, to }),
      api("/api/admin/founder/content-health", { from, to }),
      api("/api/admin/founder/ai-deep-dive",   { from, to }),
      api("/api/admin/founder/billing-health"),
    ]).then(([sc, gr, rv, ta, en, ch, ai, bh]) => {
      setFounderScorecard(sc);
      setFounderGrowth(gr);
      setFounderRevenue(rv);
      setFounderToolAdoption(ta);
      setFounderEngagement(en);
      setFounderContentHealth(ch);
      setFounderAiDeepDive(ai);
      setFounderBillingHealth(bh);
    }).catch(console.error).finally(() => setFounderLoading(false));
  }, [tab, from, to, api]);
  

  // ── STYLES ─────────────────────────────────────────────────────────────────
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      .ap-root { font-family:'Satoshi','DM Sans',system-ui,sans-serif; background:#f7f8fc; min-height:100vh; color:#1a202c; }
      .ap-hero { background:linear-gradient(135deg,#0f172a 0%,#1e1b4b 60%,#2d1b69 100%); padding:40px 32px 52px; margin-top:64px; position:relative; overflow:hidden; }
      .ap-hero::after { content:''; position:absolute; inset:0; background:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80"><defs><pattern id="p" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1" fill="rgba(255,255,255,0.04)"/></pattern></defs><rect width="80" height="80" fill="url(%23p)"/></svg>'); pointer-events:none; }
      .ap-hero-inner { max-width:1400px; margin:0 auto; position:relative; z-index:2; }
      .ap-main { max-width:1400px; margin:0 auto; padding:28px 24px 80px; }
      .ap-tabs { display:flex; gap:3px; background:#fff; border:1px solid #e5e7eb; border-radius:14px; padding:4px; width:fit-content; margin-bottom:28px; overflow-x:auto; flex-wrap:nowrap; box-shadow:0 1px 6px rgba(0,0,0,0.06); }
      .ap-tab { padding:8px 18px; border-radius:10px; border:none; font-size:12.5px; font-weight:700; cursor:pointer; color:#6b7280; background:transparent; white-space:nowrap; font-family:inherit; transition:all 0.2s; }
      .ap-tab.active { background:linear-gradient(135deg,#1e1b4b,#4c1d95); color:#fff; box-shadow:0 4px 14px rgba(30,27,75,0.4); }
      .ap-card { background:#fff; border:1px solid #e5e7eb; border-radius:16px; padding:22px; box-shadow:0 2px 8px rgba(0,0,0,0.04); }
      .ap-section-title { font-size:15px; font-weight:800; color:#374151; margin-bottom:16px; letter-spacing:-0.01em; }
      .ap-grid2 { display:grid; grid-template-columns:repeat(auto-fit,minmax(240px,1fr)); gap:16px; }
      .ap-grid3 { display:grid; grid-template-columns:repeat(auto-fill,minmax(200px,1fr)); gap:14px; }
      .ap-grid4 { display:grid; grid-template-columns:repeat(auto-fill,minmax(180px,1fr)); gap:14px; }
      .filter-bar { display:flex; align-items:center; gap:10px; flex-wrap:wrap; margin-bottom:16px; }
      .filter-select { padding:7px 12px; border-radius:10px; border:1px solid #e5e7eb; font-size:12px; font-family:inherit; color:#374151; background:#fff; cursor:pointer; }
      .filter-input { padding:7px 12px; border-radius:10px; border:1px solid #e5e7eb; font-size:12px; font-family:inherit; color:#374151; background:#fff; outline:none; }
      @media(max-width:640px){ .ap-main{padding:16px 12px 60px;} .ap-hero{padding:24px 16px 40px;} .ap-tabs{width:100%;} }
    `;
    document.head.appendChild(style);
    return () => { document.head.removeChild(style); };
  }, []);

  const ov = overview;

  return (
    <div className="ap-root">

      {/* ── HERO ── */}
      <div className="ap-hero">
        <div className="ap-hero-inner">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 20 }}>
            <div>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.5)", letterSpacing: "0.16em", fontWeight: 700, textTransform: "uppercase", marginBottom: 8 }}>
                ⬡ SCENITH ADMIN COMMAND CENTER
              </div>
              <h1 style={{ fontSize: "clamp(24px,4vw,36px)", fontWeight: 900, color: "#fff",
                letterSpacing: "-0.04em", marginBottom: 8, lineHeight: 1 }}>
                Founder Dashboard
              </h1>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", marginBottom: 16 }}>
                Complete operational intelligence for Scenith
              </p>
              {ov && (
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  {[
                    { label: "Total Users",    val: fmt(ov.users.total),           color: "#818cf8" },
                    { label: "Revenue",        val: fmtCur(ov.revenue.total),      color: "#34d399" },
                    { label: "Active Subs",    val: fmt(ov.plans.activeSubs),      color: "#f59e0b" },
                    { label: "Credits Used",   val: fmt(ov.credits.consumed),      color: "#f472b6" },
                  ].map(s => (
                    <div key={s.label} style={{ padding: "8px 16px", borderRadius: 99,
                      background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)",
                      backdropFilter: "blur(8px)" }}>
                      <div style={{ fontSize: 16, fontWeight: 900, color: s.color }}>{s.val}</div>
                      <div style={{ fontSize: 10, color: "rgba(255,255,255,0.5)", fontWeight: 700 }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div>
              <DateRange from={from} to={to} onChange={(f, t) => { setFrom(f); setTo(t); }} />
            </div>
          </div>
        </div>
      </div>

      <main className="ap-main">

        {/* ── TABS ── */}
        <div className="ap-tabs">
          {TABS.map(t => (
            <button key={t.id} className={`ap-tab${tab === t.id ? " active" : ""}`}
              onClick={() => setTab(t.id)}>{t.label}</button>
          ))}
        </div>

        <AnimatePresence mode="wait">

          {/* ════════════════════ OVERVIEW ════════════════════ */}
          {tab === "overview" && (
            <motion.div key="overview" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.25 }}>

              {loading && <div style={{ textAlign: "center", padding: 48, color: "#9ca3af", fontSize: 14 }}>⏳ Loading…</div>}

              {ov && (
                <>
                  {/* KPI Grid */}
                  <div className="ap-grid4" style={{ marginBottom: 22 }}>
                    <KpiCard icon="👥" label="Total Users"     value={fmt(ov.users.total)}      sub={`+${fmt(ov.users.new)} in range`}         color="#6355dc" />
                    <KpiCard icon="✅" label="Verified Users"  value={fmt(ov.users.verified)}   sub={`${Math.round(ov.users.verified/Math.max(ov.users.total,1)*100)}% of total`} color="#10b981" />
                    <KpiCard icon="🔗" label="Google Sign-ups" value={fmt(ov.users.googleAuth)} sub="via Google OAuth"                          color="#f59e0b" />
                    <KpiCard icon="🔑" label="Active Subs"     value={fmt(ov.plans.activeSubs)} sub="non-expired plans"                        color="#818cf8" />
                    <KpiCard icon="💰" label="Total Revenue"   value={fmtCur(ov.revenue.total)} sub={`${fmt(ov.revenue.successOrders)} orders`} color="#10b981" />
                    <KpiCard icon="🇮🇳" label="INR Revenue"     value={fmtCur(ov.revenue.inr, "INR")} sub="Razorpay"                           color="#f97316" />
                    <KpiCard icon="💵" label="USD Revenue"     value={`$${ov.revenue.usd.toFixed(0)}`} sub="PayPal"                            color="#3b82f6" />
                    <KpiCard icon="⏳" label="Pending Orders"  value={fmt(ov.revenue.pendingOrders)} sub={`${fmt(ov.revenue.failedOrders)} failed`} color="#f59e0b" />
                    <KpiCard icon="⚡" label="Credits Granted"  value={fmt(ov.credits.granted)}  sub="plan grants + topups"                    color="#8b5cf6" />
                    <KpiCard icon="🔥" label="Credits Consumed" value={fmt(ov.credits.consumed)} sub="all tools combined"                      color="#ef4444" />
                  </div>

                  {/* Charts Row */}
                  <div className="ap-grid2" style={{ marginBottom: 22 }}>
                    <div className="ap-card">
                      <p className="ap-section-title">Revenue (selected range)</p>
                      <MiniBarChart data={revenueChart} valueKey="revenue" color="#10b981" label="Daily Revenue" />
                    </div>
                    <div className="ap-card">
                      <p className="ap-section-title">User Signups</p>
                      <MiniBarChart data={signupsChart} valueKey="signups" color="#818cf8" label="Daily Signups" />
                    </div>
                  </div>

                  {/* Plans + Tool Usage */}
                  <div className="ap-grid2" style={{ marginBottom: 22 }}>
                    <div className="ap-card">
                      <p className="ap-section-title">Plan Distribution</p>
                      <PlanDonut dist={ov.plans.distribution} />
                    </div>
                    <div className="ap-card">
                      <p className="ap-section-title">Tool Usage (selected range)</p>
                      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                        {Object.entries(ov.toolUsage)
                          .sort((a, b) => Number(b[1]) - Number(a[1]))
                          .map(([k, v]) => {
                            const max = Math.max(...Object.values(ov.toolUsage).map(Number), 1);
                            const pct = Math.round((Number(v) / max) * 100);
                            const colors: Record<string, string> = {
                              tts: "#f59e0b", imageGen: "#8b5cf6", videoGen: "#ef4444",
                              bgRemoval: "#ec4899", subtitles: "#06b6d4", videoSpeed: "#f97316",
                              compression: "#10b981", conversion: "#3b82f6", pdf: "#6b7280",
                              svgDownloads: "#14b8a6", imageEditor: "#a78bfa"
                            };
                            const c = colors[k] ?? "#6355dc";
                            const labels: Record<string, string> = {
                              tts: "🎙️ AI Voice", imageGen: "🎨 Image Gen", videoGen: "🎬 Video Gen",
                              bgRemoval: "✂️ BG Removal", subtitles: "📝 Subtitles", videoSpeed: "⚡ Video Speed",
                              compression: "📦 Compression", conversion: "🔄 Conversion", pdf: "📄 PDF Tools",
                              svgDownloads: "🔷 SVG Downloads", imageEditor: "🖼️ Image Editor"
                            };
                            return (
                              <div key={k} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                                <span style={{ fontSize: 12, color: "#374151", width: 130, flexShrink: 0 }}>{labels[k] ?? k}</span>
                                <div style={{ flex: 1, height: 7, background: "#f3f4f6", borderRadius: 99, overflow: "hidden" }}>
                                  <div style={{ width: `${pct}%`, height: "100%", background: c, borderRadius: 99,
                                    transition: "width 0.8s ease" }} />
                                </div>
                                <span style={{ fontSize: 12, fontWeight: 800, color: c, width: 40, textAlign: "right" }}>{fmt(Number(v))}</span>
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  </div>

                  {/* Expiring Soon */}
                  {expiring.length > 0 && (
                    <div className="ap-card" style={{ marginBottom: 22, border: "1px solid #fef3c7" }}>
                      <p className="ap-section-title" style={{ color: "#d97706" }}>⚠️ Subscriptions Expiring in 7 Days ({expiring.length})</p>
                      <Table
                        cols={[
                          { key: "userEmail",  label: "Email" },
                          { key: "userName",   label: "Name" },
                          { key: "planType",   label: "Plan" },
                          { key: "expiryDate", label: "Expires", render: v => (
                            <span style={{ fontWeight: 700, color: "#d97706" }}>
                              {fmtDateShort(v)} ({daysLeft(v)}d)
                            </span>
                          )},
                        ]}
                        rows={expiring}
                      />
                    </div>
                  )}

                  {/* Top Users by Spend */}
                  <div className="ap-card">
                    <p className="ap-section-title">🏆 Top Users by Credit Spend</p>
                    <Table
                      cols={[
                        { key: "userEmail",  label: "Email" },
                        { key: "userName",   label: "Name" },
                        { key: "planType",   label: "Plan", render: v => <StatusBadge status={v} /> },
                        { key: "totalSpent", label: "Total Spent", render: v => <span style={{ fontWeight: 800, color: "#ef4444" }}>{fmt(v)}</span> },
                        { key: "balance",    label: "Balance",     render: v => <span style={{ fontWeight: 700, color: "#10b981" }}>{fmt(v)}</span> },
                      ]}
                      rows={topUsers}
                    />
                  </div>
                </>
              )}
            </motion.div>
          )}

          {/* ════════════════════ USERS ════════════════════ */}
          {tab === "users" && (
            <motion.div key="users" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.25 }}>
              <div className="ap-card">
                <div className="filter-bar">
                  <input className="filter-input" placeholder="🔍 Search email or name…"
                    value={userSearch} style={{ minWidth: 220 }}
                    onChange={e => { setUserSearch(e.target.value); setUsrPage(0); }} />
                  <span style={{ marginLeft: "auto", fontSize: 12, color: "#9ca3af" }}>
                    {users.total} users in range
                  </span>
                </div>
                <Table
                  cols={[
                    { key: "id",            label: "ID" },
                    { key: "email",         label: "Email" },
                    { key: "name",          label: "Name" },
                    { key: "planType",      label: "Plan",     render: v => <StatusBadge status={v} /> },
                    { key: "role",          label: "Role",     render: v => v === "ADMIN" ? <StatusBadge status="ADMIN" /> : <span style={{ fontSize: 11, color: "#6b7280" }}>USER</span> },
                    { key: "emailVerified", label: "Verified", render: v => v ? "✅" : "❌" },
                    { key: "googleAuth",    label: "Google",   render: v => v ? "🔗" : "—" },
                    { key: "creditBalance", label: "Credits",  render: v => <span style={{ fontWeight: 700, color: "#6355dc" }}>{v != null ? fmt(v) : "—"}</span> },
                    { key: "totalSpent",    label: "Spent",    render: v => v != null ? <span style={{ color: "#ef4444" }}>{fmt(v)}</span> : "—" },
                    { key: "planExpiresAt", label: "Plan Exp", render: v => {
                      if (!v) return <span style={{ color: "#d1d5db" }}>—</span>;
                      const d = daysLeft(v) ?? 0;
                      return <span style={{ color: d < 7 ? "#ef4444" : d < 30 ? "#f59e0b" : "#374151", fontWeight: d < 7 ? 700 : 400 }}>
                        {fmtDateShort(v)} ({d}d)
                      </span>;
                    }},
                    { key: "createdAt",     label: "Joined",   render: v => fmtDateShort(v) },
                  ]}
                  rows={users.users}
                  emptyMsg="No users found for selected range"
                />
                <Paginator page={usrPage} size={50} total={users.total} onChange={p => setUsrPage(p)} />
              </div>
            </motion.div>
          )}

          {/* ════════════════════ PAYMENTS ════════════════════ */}
          {tab === "payments" && (
            <motion.div key="payments" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.25 }}>

              {/* summary row */}
              {overview && (
                <div className="ap-grid4" style={{ marginBottom: 20 }}>
                  <KpiCard icon="✅" label="Successful Orders" value={fmt(overview.revenue.successOrders)} color="#10b981" />
                  <KpiCard icon="⏳" label="Pending Orders"    value={fmt(overview.revenue.pendingOrders)} color="#f59e0b" />
                  <KpiCard icon="❌" label="Failed Orders"     value={fmt(overview.revenue.failedOrders)}  color="#ef4444" />
                  <KpiCard icon="💰" label="Revenue (range)"   value={fmtCur(overview.revenue.total)}      color="#6355dc" />
                </div>
              )}

              <div className="ap-card">
                <div className="filter-bar">
                  <select className="filter-select" value={payStatus}
                    onChange={e => { setPayStatus(e.target.value); setPayPage(0); }}>
                    <option value="">All Statuses</option>
                    <option value="PENDING">PENDING</option>
                    <option value="SUCCESS">SUCCESS</option>
                    <option value="FAILED">FAILED</option>
                  </select>
                  <span style={{ marginLeft: "auto", fontSize: 12, color: "#9ca3af" }}>
                    {payments.total} orders
                  </span>
                </div>
                <Table
                  cols={[
                    { key: "id",          label: "ID" },
                    { key: "orderId",     label: "Order ID",  render: v => <code style={{ fontSize: 11, background: "#f3f4f6", padding: "2px 6px", borderRadius: 5 }}>{v}</code> },
                    { key: "userEmail",   label: "Email" },
                    { key: "userName",    label: "Name" },
                    { key: "planType",    label: "Plan" },
                    { key: "amount",      label: "Amount",   render: (v, row) => <span style={{ fontWeight: 700 }}>{row.currency === "INR" ? "₹" : "$"}{v}</span> },
                    { key: "currency",    label: "Currency" },
                    { key: "status",      label: "Status",   render: v => <StatusBadge status={v} /> },
                    { key: "paymentId",   label: "Gateway ID", render: v => v ? <code style={{ fontSize: 10, color: "#6b7280" }}>{v}</code> : <span style={{ color: "#d1d5db" }}>—</span> },
                    { key: "createdAt",   label: "Created",  render: v => fmtDate(v) },
                    { key: "completedAt", label: "Completed",render: v => fmtDate(v) },
                  ]}
                  rows={payments.payments}
                  emptyMsg="No payments found"
                />
                <Paginator page={payPage} size={50} total={payments.total} onChange={p => setPayPage(p)} />
              </div>
            </motion.div>
          )}

          {/* ════════════════════ CREDITS ════════════════════ */}
          {tab === "credits" && (
            <motion.div key="credits" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.25 }}>

              {overview && (
                <div className="ap-grid4" style={{ marginBottom: 20 }}>
                  <KpiCard icon="🎁" label="Granted"  value={fmt(overview.credits.granted)}  color="#10b981" />
                  <KpiCard icon="🔥" label="Consumed" value={fmt(overview.credits.consumed)} color="#ef4444" />
                </div>
              )}

              <div className="ap-card">
                <div className="filter-bar">
                  <select className="filter-select" value={crType}
                    onChange={e => { setCrType(e.target.value); setCrPage(0); }}>
                    <option value="">All Types</option>
                    <option value="USAGE">USAGE</option>
                    <option value="PLAN_GRANT">PLAN_GRANT</option>
                    <option value="TOPUP">TOPUP</option>
                    <option value="REFUND">REFUND</option>
                  </select>
                  <span style={{ marginLeft: "auto", fontSize: 12, color: "#9ca3af" }}>
                    {credits.total} transactions
                  </span>
                </div>
                <Table
                  cols={[
                    { key: "id",          label: "ID" },
                    { key: "userEmail",   label: "Email" },
                    { key: "userName",    label: "Name" },
                    { key: "delta",       label: "Delta", render: v => (
                      <span style={{ fontWeight: 800, color: v > 0 ? "#10b981" : "#ef4444" }}>
                        {v > 0 ? "+" : ""}{v}
                      </span>
                    )},
                    { key: "balanceAfter",label: "Balance After", render: v => <span style={{ fontWeight: 700 }}>{v}</span> },
                    { key: "type",        label: "Type",   render: v => <StatusBadge status={v} /> },
                    { key: "description", label: "Description", render: v => <span style={{ fontSize: 11.5, color: "#6b7280" }}>{v}</span> },
                    { key: "createdAt",   label: "Date",   render: v => fmtDate(v) },
                  ]}
                  rows={credits.transactions}
                  emptyMsg="No transactions found"
                />
                <Paginator page={crPage} size={50} total={credits.total} onChange={p => setCrPage(p)} />
              </div>
            </motion.div>
          )}

          {/* ════════════════════ TOOL USAGE ════════════════════ */}
          {tab === "tools" && (
            <motion.div key="tools" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.25 }}>
              {ov && (
                <div className="ap-grid3">
                  {Object.entries(ov.toolUsage).map(([k, v]) => {
                    const icons: Record<string, string> = {
                      tts: "🎙️", imageGen: "🎨", videoGen: "🎬",
                      bgRemoval: "✂️", subtitles: "📝", videoSpeed: "⚡",
                      compression: "📦", conversion: "🔄", pdf: "📄",
                      svgDownloads: "🔷", imageEditor: "🖼️"
                    };
                    const labels: Record<string, string> = {
                      tts: "AI Voice Gen", imageGen: "AI Image Gen", videoGen: "AI Video Gen",
                      bgRemoval: "BG Removal", subtitles: "Auto Subtitles", videoSpeed: "Video Speed",
                      compression: "Media Compression", conversion: "Media Conversion", pdf: "PDF Tools",
                      svgDownloads: "SVG Downloads", imageEditor: "Image Editor"
                    };
                    const colors: Record<string, string> = {
                      tts: "#f59e0b", imageGen: "#8b5cf6", videoGen: "#ef4444",
                      bgRemoval: "#ec4899", subtitles: "#06b6d4", videoSpeed: "#f97316",
                      compression: "#10b981", conversion: "#3b82f6", pdf: "#6b7280",
                      svgDownloads: "#14b8a6", imageEditor: "#a78bfa"
                    };
                    const c = colors[k] ?? "#6355dc";
                    return (
                      <KpiCard key={k} icon={icons[k] ?? "🔧"} label={labels[k] ?? k}
                        value={fmt(Number(v))} sub="jobs in selected range" color={c} />
                    );
                  })}
                </div>
              )}
            </motion.div>
          )}

          {/* ════════════════════ SUBSCRIPTIONS ════════════════════ */}
          {tab === "subscriptions" && (
            <motion.div key="subscriptions" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.25 }}>

              <div className="ap-card" style={{ marginBottom: 20, border: "1px solid #fef3c7" }}>
                <p className="ap-section-title" style={{ color: "#d97706" }}>⚠️ Expiring in 7 Days ({expiring.length})</p>
                <Table
                  cols={[
                    { key: "userEmail",  label: "Email" },
                    { key: "userName",   label: "Name" },
                    { key: "planType",   label: "Plan", render: v => <StatusBadge status={v} /> },
                    { key: "expiryDate", label: "Expires", render: v => (
                      <span style={{ fontWeight: 700, color: "#d97706" }}>
                        {fmtDateShort(v)} — {daysLeft(v)} days left
                      </span>
                    )},
                  ]}
                  rows={expiring}
                  emptyMsg="No subscriptions expiring soon 🎉"
                />
              </div>

              <div className="ap-card">
                <p className="ap-section-title">All Active Subscriptions ({activeSubs.total})</p>
                <Table
                  cols={[
                    { key: "userId",    label: "User ID" },
                    { key: "userEmail", label: "Email" },
                    { key: "userName",  label: "Name" },
                    { key: "planType",  label: "Plan",      render: v => <StatusBadge status={v} /> },
                    { key: "startDate", label: "Started",   render: v => fmtDateShort(v) },
                    { key: "expiryDate",label: "Expires",   render: v => {
                      const d = daysLeft(v) ?? 999;
                      return <span style={{ fontWeight: 700, color: d < 7 ? "#ef4444" : d < 30 ? "#f59e0b" : "#374151" }}>
                        {fmtDateShort(v)} ({d}d)
                      </span>;
                    }},
                  ]}
                  rows={activeSubs.subscriptions}
                  emptyMsg="No active subscriptions"
                />
                <Paginator page={subPage} size={50} total={activeSubs.total} onChange={p => setSubPage(p)} />
              </div>
            </motion.div>
          )}

          {/* ════════════════════ VIDEO JOBS ════════════════════ */}
          {tab === "videojobs" && (
            <motion.div key="videojobs" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.25 }}>
              <div className="ap-card">
                <div className="filter-bar">
                  <select className="filter-select" value={vidStatus}
                    onChange={e => { setVidStatus(e.target.value); setVidPage(0); }}>
                    <option value="">All Statuses</option>
                    <option value="PENDING">PENDING</option>
                    <option value="PROCESSING">PROCESSING</option>
                    <option value="COMPLETED">COMPLETED</option>
                    <option value="FAILED">FAILED</option>
                  </select>
                  <span style={{ marginLeft: "auto", fontSize: 12, color: "#9ca3af" }}>
                    {videoJobs.total} jobs
                  </span>
                </div>
                <Table
                  cols={[
                    { key: "id",             label: "ID" },
                    { key: "userEmail",      label: "Email" },
                    { key: "model",          label: "Model",    render: v => <code style={{ fontSize: 10.5, background: "#f3f4f6", padding: "2px 6px", borderRadius: 5 }}>{String(v)}</code> },
                    { key: "generationType", label: "Type" },
                    { key: "status",         label: "Status",   render: v => <StatusBadge status={v} /> },
                    { key: "prompt",         label: "Prompt",   render: v => <span style={{ fontSize: 11, color: "#6b7280", maxWidth: 200, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", display: "block" }}>{v}</span> },
                    { key: "durationSeconds",label: "Duration", render: v => `${v}s` },
                    { key: "creditsUsed",    label: "Credits",  render: v => <span style={{ fontWeight: 700, color: "#ef4444" }}>{v}</span> },
                    { key: "errorMessage",   label: "Error",    render: v => v ? <span style={{ color: "#ef4444", fontSize: 11 }}>{v}</span> : <span style={{ color: "#d1d5db" }}>—</span> },
                    { key: "createdAt",      label: "Created",  render: v => fmtDate(v) },
                  ]}
                  rows={videoJobs.jobs}
                  emptyMsg="No video jobs found"
                />
                <Paginator page={vidPage} size={30} total={videoJobs.total} onChange={p => setVidPage(p)} />
              </div>
          </motion.div>
          )}

          {/* ════════════════════ TTS ANALYTICS ════════════════════ */}
          {tab === "ttsstats" && (
            <motion.div key="ttsstats" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.25 }}>

              {!ttsStats && <div style={{ textAlign: "center", padding: 48, color: "#9ca3af", fontSize: 14 }}>⏳ Loading TTS analytics…</div>}

              {ttsStats && (
                <>
                  {/* KPI row */}
                  <div className="ap-grid4" style={{ marginBottom: 22 }}>
                    <KpiCard icon="🎙️" label="Total Generations"       value={fmt(ttsStats.totals.totalJobs)}                color="#f59e0b" />
                    <KpiCard icon="⚡" label="Credits Consumed"        value={fmt(ttsStats.totals.totalCreditsSpent)}        color="#ef4444" />
                    <KpiCard icon="👥" label="Unique Paid Users"       value={fmt(ttsStats.totals.uniqueUsers)}              color="#6355dc" />
                    <KpiCard icon="🔵" label="Google Voices"           value={fmt(ttsStats.totals.googleJobs)}               color="#3b82f6" />
                    <KpiCard icon="🟢" label="OpenAI Voices"           value={fmt(ttsStats.totals.openAiJobs)}               color="#10b981" />
                    <KpiCard icon="🔷" label="Azure Voices"            value={fmt(ttsStats.totals.azureJobs)}                color="#0ea5e9" />
                    <KpiCard icon="🆓" label="Free Users w/ Voice"     value={fmt(ttsStats.totals.freeUsersWithVoiceUsage)}  color="#8b5cf6" sub={`of ${fmt(ttsStats.totals.totalFreeTierUsers)} free users`} />
                    <KpiCard icon="🚫" label="Hit 600-char Limit"      value={fmt(ttsStats.totals.freeUsersAtLimit)}         color="#ef4444" sub="upgrade candidates this month" />
                    <KpiCard icon="📝" label="Free Chars Used (mo)"    value={fmt(ttsStats.totals.totalFreeCharsThisMonth)}  color="#f97316" sub={`${fmt(ttsStats.totals.freeCharsRemainingForActive)} left for active users`} />
                  </div>

                  {/* Provider breakdown */}
                  <div className="ap-card" style={{ marginBottom: 22 }}>
                    <p className="ap-section-title">Provider Distribution</p>
                    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                      {ttsStats.providerBreakdown.map((p: any) => {
                        const colors: Record<string, string> = { GOOGLE: "#3b82f6", OPENAI: "#10b981", AZURE: "#0ea5e9" };
                        const icons: Record<string, string>  = { GOOGLE: "🔵", OPENAI: "🟢", AZURE: "🔷" };
                        const c = colors[p.provider] ?? "#6355dc";
                        return (
                          <div key={p.provider} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                            <span style={{ fontSize: 16, width: 24 }}>{icons[p.provider]}</span>
                            <span style={{ fontSize: 13, fontWeight: 700, color: "#374151", width: 70 }}>{p.provider}</span>
                            <div style={{ flex: 1, height: 10, background: "#f3f4f6", borderRadius: 99, overflow: "hidden" }}>
                              <div style={{ width: `${p.pct}%`, height: "100%", background: c, borderRadius: 99, transition: "width 0.8s ease" }} />
                            </div>
                            <span style={{ fontSize: 13, fontWeight: 800, color: c, width: 50, textAlign: "right" }}>{fmt(p.jobs)}</span>
                            <span style={{ fontSize: 11, color: "#9ca3af", width: 36, textAlign: "right" }}>{p.pct}%</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Daily chart */}
                  {ttsStats.dailyChart.length > 0 && (
                    <div className="ap-card" style={{ marginBottom: 22 }}>
                      <p className="ap-section-title">Daily TTS Generations (all users)</p>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 12 }}>
                        <span style={{ fontSize: 12, color: "#9ca3af", fontWeight: 700 }}>Daily Jobs by Provider</span>
                        <span style={{ fontSize: 22, fontWeight: 900, color: "#f59e0b", letterSpacing: "-0.04em" }}>
                          {fmt(ttsStats.dailyChart.reduce((s: number, d: any) => s + Number(d.jobs), 0))}
                        </span>
                      </div>
                      <div style={{ display: "flex", alignItems: "flex-end", gap: 3, height: 64 }}>
                        {ttsStats.dailyChart.slice(-30).map((d: any, i: number) => {
                          const total = Number(d.jobs) || 0;
                          const maxTotal = Math.max(...ttsStats.dailyChart.slice(-30).map((x: any) => Number(x.jobs)), 1);
                          const barH = Math.max(4, (total / maxTotal) * 64);
                          const gPct = total > 0 ? ((d.GOOGLE || 0) / total) * 100 : 0;
                          const oPct = total > 0 ? ((d.OPENAI || 0) / total) * 100 : 0;
                          const aPct = total > 0 ? ((d.AZURE  || 0) / total) * 100 : 0;
                          return (
                            <div key={i} title={`${d.date}: ${total} (G:${d.GOOGLE??0} O:${d.OPENAI??0} A:${d.AZURE??0})`}
                              style={{ flex: 1, height: barH, minWidth: 4, borderRadius: "3px 3px 0 0",
                                overflow: "hidden", display: "flex", flexDirection: "column", cursor: "default" }}>
                              {gPct > 0 && <div style={{ height: `${gPct}%`, background: "#3b82f6" }} />}
                              {oPct > 0 && <div style={{ height: `${oPct}%`, background: "#10b981" }} />}
                              {aPct > 0 && <div style={{ height: `${aPct}%`, background: "#0ea5e9" }} />}
                            </div>
                          );
                        })}
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 4, marginBottom: 8 }}>
                        <span style={{ fontSize: 10, color: "#d1d5db" }}>{ttsStats.dailyChart[0]?.date}</span>
                        <span style={{ fontSize: 10, color: "#d1d5db" }}>Today</span>
                      </div>
                      <div style={{ display: "flex", gap: 14 }}>
                        {[["#3b82f6","Google"],["#10b981","OpenAI"],["#0ea5e9","Azure"]].map(([c,l]) => (
                          <div key={l} style={{ display: "flex", alignItems: "center", gap: 5 }}>
                            <div style={{ width: 8, height: 8, borderRadius: 2, background: c }} />
                            <span style={{ fontSize: 11, color: "#6b7280" }}>{l}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* All users who used voice in selected date range */}
                  <div className="ap-card" style={{ marginBottom: 22 }}>
                    <p className="ap-section-title">
                      👥 Voice Users in Selected Range
                      {ttsStats.voiceUsersByRange?.length > 0 &&
                        <span style={{ fontSize: 12, fontWeight: 400, color: "#9ca3af", marginLeft: 8 }}>
                          {ttsStats.voiceUsersByRange.length} users · {ttsStats.voiceUsersByRange.reduce((s: number, u: any) => s + Number(u.chars), 0).toLocaleString()} total chars
                        </span>
                      }
                    </p>
                    {(!ttsStats.voiceUsersByRange || ttsStats.voiceUsersByRange.length === 0) ? (
                      <div style={{ textAlign: "center", padding: 24, color: "#9ca3af", fontSize: 13 }}>
                        No voice usage in selected date range
                      </div>
                    ) : (
                      <Table
                        cols={[
                          { key: "userEmail", label: "Email" },
                          { key: "userName",  label: "Name" },
                          { key: "planType",  label: "Plan",  render: v => <StatusBadge status={String(v)} /> },
                          { key: "jobs",      label: "Jobs",  render: v => <span style={{ fontWeight: 700, color: "#f59e0b" }}>{fmt(Number(v))}</span> },
                          { key: "chars",     label: "Chars Used", render: v => <span style={{ fontWeight: 800, color: "#6355dc" }}>{Number(v).toLocaleString()}</span> },
                          { key: "GOOGLE",    label: "🔵 Google", render: v => Number(v) > 0 ? <span style={{ color: "#3b82f6", fontWeight: 600 }}>{fmt(Number(v))}</span> : <span style={{ color: "#d1d5db" }}>—</span> },
                          { key: "OPENAI",    label: "🟢 OpenAI", render: v => Number(v) > 0 ? <span style={{ color: "#10b981", fontWeight: 600 }}>{fmt(Number(v))}</span> : <span style={{ color: "#d1d5db" }}>—</span> },
                          { key: "AZURE",     label: "🔷 Azure",  render: v => Number(v) > 0 ? <span style={{ color: "#0ea5e9", fontWeight: 600 }}>{fmt(Number(v))}</span> : <span style={{ color: "#d1d5db" }}>—</span> },
                          { key: "userId",    label: "Daily", render: (v) => (
                            <button
                              onClick={() => loadTtsUserChart(v)}
                              style={{
                                padding: "4px 10px", borderRadius: 7, border: "1px solid #e5e7eb",
                                background: expandedTtsUserId === v ? "linear-gradient(135deg,#1e1b4b,#4c1d95)" : "#f9fafb",
                                color: expandedTtsUserId === v ? "#fff" : "#6b7280",
                                fontSize: 11, fontWeight: 700, cursor: "pointer", fontFamily: "inherit"
                              }}
                            >
                              {expandedTtsUserId === v ? "▲ Hide" : "📈 Chart"}
                            </button>
                          )},
                        ]}
                        rows={ttsStats.voiceUsersByRange}
                        emptyMsg="No voice usage in range"
                      />
                    )}

                    {/* Inline per-user chart — same drill-down as before */}
                    {expandedTtsUserId && (
                      <div style={{
                        marginTop: 16, padding: "16px 18px", borderRadius: 12,
                        background: "#f9fafb", border: "1px solid #e5e7eb"
                      }}>
                        {ttsUserChartLoading ? (
                          <div style={{ textAlign: "center", padding: 24, color: "#9ca3af", fontSize: 13 }}>⏳ Loading…</div>
                        ) : ttsUserChart ? (
                          <>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 4 }}>
                              <span style={{ fontSize: 13, fontWeight: 800, color: "#374151" }}>
                                🎙️ {ttsUserChart.userEmail}
                              </span>
                              <div style={{ display: "flex", gap: 16 }}>
                                <span style={{ fontSize: 12, color: "#9ca3af" }}>
                                  <strong style={{ color: "#f59e0b" }}>{ttsUserChart.totalJobs}</strong> jobs
                                </span>
                                <span style={{ fontSize: 12, color: "#9ca3af" }}>
                                  <strong style={{ color: "#6355dc" }}>{Number(ttsUserChart.totalChars).toLocaleString()}</strong> chars total
                                </span>
                              </div>
                            </div>
                            <div style={{ fontSize: 11, color: "#9ca3af", marginBottom: 12 }}>
                              Daily character usage · bars = chars · color = provider
                            </div>
                            {ttsUserChart.chart.length === 0 ? (
                              <div style={{ textAlign: "center", color: "#9ca3af", fontSize: 12, padding: "12px 0" }}>No voice jobs in selected range</div>
                            ) : (
                              <>
                                <div style={{ display: "flex", alignItems: "flex-end", gap: 3, height: 80, marginBottom: 4 }}>
                                  {ttsUserChart.chart.map((d: any, i: number) => {
                                    const total = Number(d.totalChars) || 0;
                                    const maxChars = Math.max(...ttsUserChart.chart.map((x: any) => Number(x.totalChars)), 1);
                                    const barH = Math.max(4, (total / maxChars) * 80);
                                    const gc = Number(d.GOOGLE_chars) || 0;
                                    const oc = Number(d.OPENAI_chars) || 0;
                                    const ac = Number(d.AZURE_chars)  || 0;
                                    const gPct = total > 0 ? (gc / total) * 100 : 0;
                                    const oPct = total > 0 ? (oc / total) * 100 : 0;
                                    const aPct = total > 0 ? (ac / total) * 100 : 0;
                                    return (
                                      <div key={i}
                                        title={`${d.date}\n${total.toLocaleString()} chars · ${d.totalJobs} jobs\nGoogle: ${gc.toLocaleString()}\nOpenAI: ${oc.toLocaleString()}\nAzure: ${ac.toLocaleString()}`}
                                        style={{ flex: 1, height: barH, minWidth: 4, borderRadius: "3px 3px 0 0",
                                          overflow: "hidden", display: "flex", flexDirection: "column", cursor: "default" }}>
                                        {gPct > 0 && <div style={{ height: `${gPct}%`, background: "#3b82f6", flexShrink: 0 }} />}
                                        {oPct > 0 && <div style={{ height: `${oPct}%`, background: "#10b981", flexShrink: 0 }} />}
                                        {aPct > 0 && <div style={{ height: `${aPct}%`, background: "#0ea5e9", flexShrink: 0 }} />}
                                      </div>
                                    );
                                  })}
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                                  <span style={{ fontSize: 10, color: "#d1d5db" }}>{ttsUserChart.chart[0]?.date}</span>
                                  <span style={{ fontSize: 10, color: "#d1d5db" }}>{ttsUserChart.chart[ttsUserChart.chart.length - 1]?.date}</span>
                                </div>
                                <div style={{ overflowX: "auto" }}>
                                  <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 11.5 }}>
                                    <thead>
                                      <tr style={{ borderBottom: "1px solid #e5e7eb" }}>
                                        {["Date","Total Chars","Jobs","🔵 Google","🟢 OpenAI","🔷 Azure"].map(h => (
                                          <th key={h} style={{ padding: "6px 10px", textAlign: "left", color: "#9ca3af",
                                            fontWeight: 700, fontSize: 10, textTransform: "uppercase", whiteSpace: "nowrap" }}>{h}</th>
                                        ))}
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {ttsUserChart.chart.map((d: any, i: number) => (
                                        <tr key={i} style={{ borderBottom: "1px solid #f9fafb" }}>
                                          <td style={{ padding: "6px 10px", color: "#374151", fontWeight: 600 }}>{d.date}</td>
                                          <td style={{ padding: "6px 10px", fontWeight: 800, color: "#6355dc" }}>{Number(d.totalChars).toLocaleString()}</td>
                                          <td style={{ padding: "6px 10px", color: "#f59e0b", fontWeight: 700 }}>{d.totalJobs}</td>
                                          <td style={{ padding: "6px 10px", color: "#3b82f6" }}>{Number(d.GOOGLE_chars) > 0 ? `${Number(d.GOOGLE_chars).toLocaleString()} (${d.GOOGLE_jobs}j)` : "—"}</td>
                                          <td style={{ padding: "6px 10px", color: "#10b981" }}>{Number(d.OPENAI_chars) > 0 ? `${Number(d.OPENAI_chars).toLocaleString()} (${d.OPENAI_jobs}j)` : "—"}</td>
                                          <td style={{ padding: "6px 10px", color: "#0ea5e9" }}>{Number(d.AZURE_chars) > 0 ? `${Number(d.AZURE_chars).toLocaleString()} (${d.AZURE_jobs}j)` : "—"}</td>
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                </div>
                                <div style={{ display: "flex", gap: 14, marginTop: 10 }}>
                                  {[["#3b82f6","Google"],["#10b981","OpenAI"],["#0ea5e9","Azure"]].map(([c,l]) => (
                                    <div key={l} style={{ display: "flex", alignItems: "center", gap: 5 }}>
                                      <div style={{ width: 8, height: 8, borderRadius: 2, background: c }} />
                                      <span style={{ fontSize: 11, color: "#6b7280" }}>{l}</span>
                                    </div>
                                  ))}
                                </div>
                              </>
                            )}
                          </>
                        ) : null}
                      </div>
                    )}
                  </div>

                  {/* Top paid users table */}
                  <div className="ap-card" style={{ marginBottom: 22 }}>
                    <p className="ap-section-title">🏆 Top TTS Users by Credits Spent</p>

                    <Table
                      cols={[
                        { key: "userEmail",   label: "Email" },
                        { key: "userName",    label: "Name" },
                        { key: "planType",    label: "Plan",     render: v => <StatusBadge status={String(v)} /> },
                        { key: "jobCount",    label: "Jobs",     render: v => <span style={{ fontWeight: 700, color: "#f59e0b" }}>{fmt(Number(v))}</span> },
                        { key: "creditsUsed", label: "Credits",  render: v => <span style={{ fontWeight: 800, color: "#ef4444" }}>{fmt(Number(v))}</span> },
                        { key: "userId",      label: "Daily",    render: (v) => (
                          <button
                            onClick={() => loadTtsUserChart(v)}
                            style={{
                              padding: "4px 10px", borderRadius: 7, border: "1px solid #e5e7eb",
                              background: expandedTtsUserId === v ? "linear-gradient(135deg,#1e1b4b,#4c1d95)" : "#f9fafb",
                              color: expandedTtsUserId === v ? "#fff" : "#6b7280",
                              fontSize: 11, fontWeight: 700, cursor: "pointer", fontFamily: "inherit"
                            }}
                          >
                            {expandedTtsUserId === v ? "▲ Hide" : "📈 Chart"}
                          </button>
                        )},
                      ]}
                      rows={ttsStats.topUsers}
                      emptyMsg="No TTS usage in selected range"
                    />
                  </div>
                </>
              )}
            </motion.div>
          )}

        {/* ════════════════════ FOUNDER INTEL ════════════════════ */}
          {tab === "founder" && (
            <motion.div key="founder" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.25 }}>

              {founderLoading && (
                <div style={{ textAlign: "center", padding: 64, color: "#9ca3af", fontSize: 14 }}>
                  ⏳ Loading founder intelligence…
                </div>
              )}

              {!founderLoading && (
                <>
                  {/* ── Sub-nav ── */}
                  <div style={{
                    display: "flex", gap: 4, flexWrap: "wrap" as const,
                    marginBottom: 24, background: "#fff",
                    border: "1px solid #e5e7eb", borderRadius: 12, padding: 4,
                    width: "fit-content", boxShadow: "0 1px 4px rgba(0,0,0,0.04)"
                  }}>
                    {[
                      { id: "scorecard",     label: "🎯 Scorecard"       },
                      { id: "growth",        label: "📈 Growth"          },
                      { id: "revenue",       label: "💰 Revenue"         },
                      { id: "toolAdoption",  label: "🛠️ Tools"          },
                      { id: "engagement",    label: "💡 Engagement"      },
                      { id: "contentHealth", label: "📁 Content"         },
                      { id: "aiDeepDive",    label: "🤖 AI Deep Dive"    },
                      { id: "billingHealth", label: "🏦 Billing"         },
                    ].map(s => (
                      <button key={s.id}
                        onClick={() => setFounderActiveSection(s.id)}
                        style={{
                          padding: "7px 14px", borderRadius: 8, border: "none",
                          fontSize: 12, fontWeight: 700, cursor: "pointer",
                          fontFamily: "inherit", whiteSpace: "nowrap" as const,
                          transition: "all 0.18s",
                          background: founderActiveSection === s.id
                            ? "linear-gradient(135deg,#1e1b4b,#4c1d95)"
                            : "transparent",
                          color: founderActiveSection === s.id ? "#fff" : "#6b7280",
                          boxShadow: founderActiveSection === s.id ? "0 2px 10px rgba(30,27,75,0.3)" : "none",
                        }}>{s.label}</button>
                    ))}
                  </div>

                  {/* ════ SCORECARD ════ */}
                  {founderActiveSection === "scorecard" && founderScorecard && (
                    <div>
                      <div style={{ marginBottom: 8 }}>
                        <span style={{ fontSize: 11, color: "#9ca3af", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                          Last 30 days vs prior 30 days · All-time totals
                        </span>
                      </div>

                      {/* Top KPI row */}
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(160px,1fr))", gap: 14, marginBottom: 20 }}>
                        {[
                          { icon:"👥", label:"Total Users",       val: fmt(founderScorecard.totalUsers),          sub: `+${fmt(founderScorecard.newUsersLast30d)} last 30d`,                     color:"#6355dc" },
                          { icon:"📈", label:"User Growth",       val: `${founderScorecard.userGrowthPct > 0 ? "+" : ""}${founderScorecard.userGrowthPct}%`,   sub:"vs prior 30 days",         color: founderScorecard.userGrowthPct >= 0 ? "#10b981" : "#ef4444" },
                          { icon:"💳", label:"Paid Users",        val: fmt(founderScorecard.totalPaidUsers),      sub: `${founderScorecard.freeToPaidPct}% of all`,                            color:"#8b5cf6" },
                          { icon:"🔑", label:"Active Subs",       val: fmt(founderScorecard.activeSubscriptions), sub:"non-expired plans",                                                      color:"#f59e0b" },
                          { icon:"💰", label:"Revenue (30d)",     val: fmtCur(founderScorecard.revenueInrLast30d), sub: `${founderScorecard.revenueGrowthPct > 0 ? "+" : ""}${founderScorecard.revenueGrowthPct}% vs prior`, color:"#10b981" },
                          { icon:"📊", label:"Est. MRR",          val: fmtCur(founderScorecard.estimatedMRR),    sub:"from active plans",                                                      color:"#3b82f6" },
                          { icon:"⚡", label:"Total Jobs (30d)",  val: fmt(founderScorecard.totalJobsLast30d),   sub:"across all tools",                                                       color:"#f97316" },
                          { icon:"⚠️", label:"Expiring 7d",       val: fmt(founderScorecard.expiringSoon7d),     sub:"need attention",                                                         color: founderScorecard.expiringSoon7d > 0 ? "#ef4444" : "#10b981" },
                        ].map(k => (
                          <KpiCard key={k.label} icon={k.icon} label={k.label} value={k.val} sub={k.sub} color={k.color} />
                        ))}
                      </div>

                      {/* Tool breakdown last 30d */}
                      <div className="ap-card">
                        <p className="ap-section-title">🛠️ Tool Usage Breakdown — Last 30 Days</p>
                        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                          {Object.entries(founderScorecard.breakdown30d as Record<string,number>)
                            .sort((a,b) => Number(b[1]) - Number(a[1]))
                            .map(([k,v]) => {
                              const max = Math.max(...Object.values(founderScorecard.breakdown30d as Record<string,number>).map(Number), 1);
                              const pct = Math.round((Number(v) / max) * 100);
                              const colors: Record<string,string> = {
                                tts:"#f59e0b", imageGen:"#8b5cf6", videoGen:"#ef4444",
                                bgRemoval:"#ec4899", subtitles:"#06b6d4", pdf:"#6b7280",
                                svgDownloads:"#14b8a6"
                              };
                              const labels: Record<string,string> = {
                                tts:"🎙️ AI Voice", imageGen:"🎨 Image Gen", videoGen:"🎬 Video Gen",
                                bgRemoval:"✂️ BG Removal", subtitles:"📝 Subtitles",
                                pdf:"📄 PDF Tools", svgDownloads:"🔷 SVG Downloads"
                              };
                              const c = colors[k] ?? "#6355dc";
                              return (
                                <div key={k} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                                  <span style={{ fontSize: 12, color: "#374151", width: 140, flexShrink: 0 }}>{labels[k] ?? k}</span>
                                  <div style={{ flex: 1, height: 8, background: "#f3f4f6", borderRadius: 99, overflow: "hidden" }}>
                                    <div style={{ width: `${pct}%`, height: "100%", background: c, borderRadius: 99, transition: "width 0.8s ease" }} />
                                  </div>
                                  <span style={{ fontSize: 13, fontWeight: 800, color: c, width: 44, textAlign: "right" as const }}>{fmt(Number(v))}</span>
                                </div>
                              );
                            })}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ════ GROWTH ════ */}
                  {founderActiveSection === "growth" && founderGrowth && (
                    <div>
                      {/* Summary KPIs */}
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(160px,1fr))", gap: 14, marginBottom: 20 }}>
                        {[
                          { icon:"👥", label:"Total Users",       val: fmt(founderGrowth.summary.totalUsers),      color:"#6355dc" },
                          { icon:"✅", label:"Verified",          val: fmt(founderGrowth.summary.totalVerified),   sub: `${Math.round(founderGrowth.summary.totalVerified/Math.max(founderGrowth.summary.totalUsers,1)*100)}% activation rate`, color:"#10b981" },
                          { icon:"🔗", label:"Google SSO",        val: fmt(founderGrowth.summary.totalGoogleAuth), sub:`${Math.round(founderGrowth.summary.totalGoogleAuth/Math.max(founderGrowth.summary.totalUsers,1)*100)}% of signups`, color:"#f59e0b" },
                          { icon:"💳", label:"Total Paid",        val: fmt(founderGrowth.summary.totalPaidUsers),  sub:`${founderGrowth.summary.overallPaidPct}% conversion`, color:"#8b5cf6" },
                          { icon:"🆓", label:"Free Tier",         val: fmt(founderGrowth.summary.totalFreeUsers),  color:"#9ca3af" },
                          { icon:"📅", label:"New (window)",      val: fmt(founderGrowth.window.signups),          sub:`vs ${fmt(founderGrowth.comparison.prevSignups)} prev`, color:"#3b82f6" },
                          { icon:"📈", label:"Growth %",          val: `${founderGrowth.comparison.growthPct > 0 ? "+" : ""}${founderGrowth.comparison.growthPct}%`, color: founderGrowth.comparison.growthPct >= 0 ? "#10b981" : "#ef4444" },
                          { icon:"🎯", label:"Activation Rate",   val: `${founderGrowth.window.activationRate}%`,  sub:"verified / signed up", color:"#f97316" },
                          { icon:"🏷️", label:"Conversion Rate",   val: `${founderGrowth.window.conversionRate}%`,  sub:"free → paid in window", color:"#ec4899" },
                        ].map(k => (
                          <KpiCard key={k.label} icon={k.icon} label={k.label} value={k.val} sub={k.sub} color={k.color} />
                        ))}
                      </div>

                      <div className="ap-grid2" style={{ marginBottom: 20 }}>
                        {/* Daily Signup Trend */}
                        <div className="ap-card">
                          <p className="ap-section-title">📅 Daily Signup Trend</p>
                          <MiniBarChart data={founderGrowth.signupTrend} valueKey="signups" color="#818cf8" label="Daily Signups" />
                        </div>
                        {/* Signup Source Split */}
                        <div className="ap-card">
                          <p className="ap-section-title">🔀 Signup Source Split (window)</p>
                          <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 8 }}>
                            {[
                              { label: "🔗 Google SSO", val: founderGrowth.window.googleAuth, pct: founderGrowth.window.googlePct, color: "#f59e0b" },
                              { label: "📧 Native Email", val: founderGrowth.window.nativeAuth, pct: founderGrowth.window.nativePct, color: "#6355dc" },
                            ].map(row => (
                              <div key={row.label}>
                                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                                  <span style={{ fontSize: 13, color: "#374151" }}>{row.label}</span>
                                  <span style={{ fontSize: 13, fontWeight: 800, color: row.color }}>{fmt(row.val)} ({row.pct}%)</span>
                                </div>
                                <div style={{ height: 8, background: "#f3f4f6", borderRadius: 99, overflow: "hidden" }}>
                                  <div style={{ width: `${row.pct}%`, height: "100%", background: row.color, borderRadius: 99, transition: "width 0.8s ease" }} />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Plan Distribution */}
                      <div className="ap-card" style={{ marginBottom: 20 }}>
                        <p className="ap-section-title">🏷️ Plan Distribution (All-time)</p>
                        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                          {Object.entries(founderGrowth.planDistribution as Record<string,number>)
                            .sort((a,b) => Number(b[1]) - Number(a[1]))
                            .map(([plan, count]) => {
                              const total = Object.values(founderGrowth.planDistribution as Record<string,number>).reduce((a,b) => a+b, 0);
                              const pct = total > 0 ? Math.round(Number(count) / total * 1000) / 10 : 0;
                              const planColors: Record<string,string> = {
                                FREE: "#9ca3af", SPARK: "#a78bfa", MICRO: "#818cf8",
                                CREATOR_LITE: "#6355dc", CREATOR: "#7c3aed", STUDIO: "#f59e0b"
                              };
                              const c = planColors[plan] ?? "#6355dc";
                              return (
                                <div key={plan} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                                  <span style={{ fontSize: 12, color: "#374151", width: 110, flexShrink: 0 }}>{plan}</span>
                                  <div style={{ flex: 1, height: 8, background: "#f3f4f6", borderRadius: 99, overflow: "hidden" }}>
                                    <div style={{ width: `${pct}%`, height: "100%", background: c, borderRadius: 99 }} />
                                  </div>
                                  <span style={{ fontSize: 12, fontWeight: 800, color: c, width: 60, textAlign: "right" as const }}>{fmt(Number(count))} <span style={{ fontWeight: 400, color: "#9ca3af" }}>({pct}%)</span></span>
                                </div>
                              );
                            })}
                        </div>
                      </div>

                      {/* Churn signal */}
                      {founderGrowth.churnSignals.expiredActiveFlags > 0 && (
                        <div className="ap-card" style={{ border: "1px solid #fee2e2", background: "#fff5f5" }}>
                          <p className="ap-section-title" style={{ color: "#ef4444" }}>🚨 Churn Signal</p>
                          <p style={{ fontSize: 13, color: "#374151" }}>
                            <strong>{founderGrowth.churnSignals.expiredActiveFlags}</strong> users have <code>active=true</code> plans with expired dates. {founderGrowth.churnSignals.note}
                          </p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* ════ REVENUE ════ */}
                  {founderActiveSection === "revenue" && founderRevenue && (
                    <div>
                      {/* KPIs */}
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(160px,1fr))", gap: 14, marginBottom: 20 }}>
                        {[
                          { icon:"💰", label:"Total Revenue",      val: fmtCur(founderRevenue.totals.totalRevenue),   sub:`${founderRevenue.totals.successOrders} orders`,   color:"#10b981" },
                          { icon:"🇮🇳", label:"INR Revenue",        val: fmtCur(founderRevenue.totals.inrRevenue, "INR"), sub:"Razorpay",                                    color:"#f97316" },
                          { icon:"💵", label:"USD Revenue",        val: `$${founderRevenue.totals.usdRevenue.toFixed(0)}`, sub:"PayPal",                                    color:"#3b82f6" },
                          { icon:"📊", label:"Est. MRR",           val: fmtCur(founderRevenue.mrr.estimatedMRR),     sub:`${founderRevenue.mrr.activePlanCount} active plans`, color:"#8b5cf6" },
                          { icon:"👤", label:"ARPU",               val: fmtCur(founderRevenue.totals.arpu),          sub:"avg revenue/paying user",                         color:"#6355dc" },
                          { icon:"❌", label:"Payment Fail Rate",  val: `${founderRevenue.totals.paymentFailRate}%`, sub:`${fmtCur(founderRevenue.totals.failedValue)} at risk`, color: founderRevenue.totals.paymentFailRate > 10 ? "#ef4444" : "#f59e0b" },
                          { icon:"🔁", label:"Renewals (30d)",     val: fmt(founderRevenue.upcomingRenewals.count),  sub:`${fmtCur(founderRevenue.upcomingRenewals.revenuePotential)} potential`, color:"#14b8a6" },
                          { icon:"💳", label:"Paying Users",       val: fmt(founderRevenue.totals.uniquePayingUsers), sub:"in selected range",                              color:"#ec4899" },
                        ].map(k => <KpiCard key={k.label} icon={k.icon} label={k.label} value={k.val} sub={k.sub} color={k.color} />)}
                      </div>

                      <div className="ap-grid2" style={{ marginBottom: 20 }}>
                        {/* Daily Revenue Chart */}
                        <div className="ap-card">
                          <p className="ap-section-title">📈 Daily Revenue Trend</p>
                          <MiniBarChart data={founderRevenue.dailyTrend} valueKey="revenue" color="#10b981" label="Daily Revenue" />
                        </div>
                        {/* Plan Revenue Mix */}
                        <div className="ap-card">
                          <p className="ap-section-title">🏷️ Revenue by Plan</p>
                          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 4 }}>
                            {founderRevenue.planRevenue.map((p: any) => {
                              const planColors: Record<string,string> = { MICRO:"#818cf8", CREATOR_LITE:"#6355dc", CREATOR:"#7c3aed", STUDIO:"#f59e0b", SPARK:"#a78bfa" };
                              const c = planColors[p.planType] ?? "#6355dc";
                              return (
                                <div key={p.planType} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                                  <span style={{ fontSize: 12, color: "#374151", width: 100, flexShrink: 0 }}>{p.planType}</span>
                                  <div style={{ flex: 1, height: 8, background: "#f3f4f6", borderRadius: 99, overflow: "hidden" }}>
                                    <div style={{ width: `${p.pct}%`, height: "100%", background: c, borderRadius: 99 }} />
                                  </div>
                                  <span style={{ fontSize: 12, fontWeight: 800, color: c, width: 70, textAlign: "right" as const }}>{fmtCur(p.revenue)} <span style={{ fontWeight: 400, color: "#9ca3af", fontSize: 10 }}>({p.pct}%)</span></span>
                                </div>
                              );
                            })}
                          </div>
                          {/* Active plan distribution */}
                          <div style={{ marginTop: 16, paddingTop: 14, borderTop: "1px solid #f3f4f6" }}>
                            <p style={{ fontSize: 11, color: "#9ca3af", fontWeight: 700, marginBottom: 8, textTransform: "uppercase" as const, letterSpacing: "0.07em" }}>Active Plans</p>
                            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" as const }}>
                              {Object.entries(founderRevenue.mrr.activePlanDist as Record<string,number>).map(([plan, count]) => {
                                const planColors: Record<string,string> = { MICRO:"#818cf8", CREATOR_LITE:"#6355dc", CREATOR:"#7c3aed", STUDIO:"#f59e0b", SPARK:"#a78bfa" };
                                const c = planColors[plan] ?? "#6355dc";
                                return (
                                  <div key={plan} style={{ padding: "5px 12px", borderRadius: 99, background: `${c}18`, border: `1px solid ${c}33` }}>
                                    <span style={{ fontSize: 11, fontWeight: 800, color: c }}>{plan}: {count}</span>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Top Revenue Users */}
                      <div className="ap-card">
                        <p className="ap-section-title">🏆 Top Revenue Users</p>
                        <Table
                          cols={[
                            { key: "email",    label: "Email" },
                            { key: "name",     label: "Name" },
                            { key: "planType", label: "Plan",    render: v => <StatusBadge status={String(v)} /> },
                            { key: "revenue",  label: "Revenue", render: v => <span style={{ fontWeight: 800, color: "#10b981" }}>{fmtCur(Number(v))}</span> },
                          ]}
                          rows={founderRevenue.topRevUsers}
                        />
                      </div>
                    </div>
                  )}

                  {/* ════ TOOL ADOPTION ════ */}
                  {founderActiveSection === "toolAdoption" && founderToolAdoption && (
                    <div>
                      {/* Automated Observations */}
                      {founderToolAdoption.observations.length > 0 && (
                        <div className="ap-card" style={{ marginBottom: 20, border: "1px solid #e0e7ff", background: "#f5f3ff" }}>
                          <p className="ap-section-title" style={{ color: "#4c1d95" }}>💡 Automated Observations</p>
                          {founderToolAdoption.observations.map((obs: string, i: number) => (
                            <p key={i} style={{ fontSize: 13, color: "#374151", marginBottom: 6 }}>{obs}</p>
                          ))}
                        </div>
                      )}

                      {/* Grand Total */}
                      <div style={{ marginBottom: 16 }}>
                        <KpiCard icon="⚡" label="Total Jobs in Range" value={fmt(founderToolAdoption.grandTotal)} color="#6355dc" />
                      </div>

                      {/* Tool Table */}
                      <div className="ap-card" style={{ marginBottom: 20 }}>
                        <p className="ap-section-title">🛠️ Tool Performance Breakdown (ranked by usage)</p>
                        <div style={{ overflowX: "auto" as const }}>
                          <table style={{ width: "100%", borderCollapse: "collapse" as const, fontSize: 12.5 }}>
                            <thead>
                              <tr style={{ borderBottom: "2px solid #f3f4f6" }}>
                                {["Tool","Total Jobs","Success Rate","Credits Burned","Unique Users","Share %"].map(h => (
                                  <th key={h} style={{ padding: "10px 14px", textAlign: "left" as const, fontWeight: 800, color: "#9ca3af", textTransform: "uppercase" as const, letterSpacing: "0.07em", fontSize: 10.5, whiteSpace: "nowrap" as const }}>{h}</th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {founderToolAdoption.tools.map((tool: any, i: number) => {
                                const toolColors: Record<string,string> = {
                                  tts:"#f59e0b", imageGen:"#8b5cf6", videoGen:"#ef4444",
                                  bgRemoval:"#ec4899", subtitles:"#06b6d4", videoSpeed:"#f97316",
                                  compression:"#10b981", conversion:"#3b82f6", pdf:"#6b7280",
                                  svgDownloads:"#14b8a6", imageEditor:"#a78bfa"
                                };
                                const c = toolColors[tool.key] ?? "#6355dc";
                                return (
                                  <tr key={i} style={{ borderBottom: "1px solid #f9fafb" }}
                                    onMouseEnter={e => (e.currentTarget.style.background = "#fafafa")}
                                    onMouseLeave={e => (e.currentTarget.style.background = "transparent")}>
                                    <td style={{ padding: "11px 14px", fontWeight: 700, color: c }}>{tool.label}</td>
                                    <td style={{ padding: "11px 14px", fontWeight: 800, color: "#374151" }}>{fmt(tool.total)}</td>
                                    <td style={{ padding: "11px 14px" }}>
                                      <span style={{ color: tool.successRate >= 80 ? "#10b981" : tool.successRate >= 50 ? "#f59e0b" : "#ef4444", fontWeight: 700 }}>
                                        {tool.successRate}%
                                      </span>
                                    </td>
                                    <td style={{ padding: "11px 14px", color: tool.creditsBurned > 0 ? "#ef4444" : "#9ca3af", fontWeight: tool.creditsBurned > 0 ? 700 : 400 }}>
                                      {tool.creditsBurned > 0 ? fmt(tool.creditsBurned) : "—"}
                                    </td>
                                    <td style={{ padding: "11px 14px", color: tool.uniqueUsers > 0 ? "#6355dc" : "#9ca3af" }}>
                                      {tool.uniqueUsers > 0 ? fmt(tool.uniqueUsers) : "—"}
                                    </td>
                                    <td style={{ padding: "11px 14px" }}>
                                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                        <div style={{ width: 60, height: 6, background: "#f3f4f6", borderRadius: 99, overflow: "hidden" }}>
                                          <div style={{ width: `${tool.sharePct}%`, height: "100%", background: c, borderRadius: 99 }} />
                                        </div>
                                        <span style={{ fontSize: 11, color: "#6b7280", fontWeight: 600 }}>{tool.sharePct}%</span>
                                      </div>
                                    </td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ════ ENGAGEMENT ════ */}
                  {founderActiveSection === "engagement" && founderEngagement && (
                    <div>
                      {/* Activity Summary */}
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(160px,1fr))", gap: 14, marginBottom: 20 }}>
                        {[
                          { icon:"⚡", label:"Active Users (window)",  val: fmt(founderEngagement.activitySummary.activeUsersInWindow), color:"#6355dc" },
                          { icon:"🔥", label:"Credits Burned",         val: fmt(founderEngagement.activitySummary.totalCreditsBurned),   color:"#ef4444" },
                          { icon:"🎁", label:"Credits Granted",        val: fmt(founderEngagement.activitySummary.totalCreditsGranted),   color:"#10b981" },
                          { icon:"📊", label:"Net Credit Flow",        val: fmt(founderEngagement.activitySummary.netCreditFlow),         color: founderEngagement.activitySummary.netCreditFlow >= 0 ? "#10b981" : "#ef4444" },
                        ].map(k => <KpiCard key={k.label} icon={k.icon} label={k.label} value={k.val} color={k.color} />)}
                      </div>

                      {/* Upsell Opportunity */}
                      <div className="ap-card" style={{ marginBottom: 20, border: "1px solid #fde68a", background: "#fffbeb" }}>
                        <p className="ap-section-title" style={{ color: "#d97706" }}>💰 Upsell Opportunities</p>
                        <div style={{ display: "flex", gap: 20, flexWrap: "wrap" as const }}>
                          <div style={{ background: "#fff", border: "1px solid #fde68a", borderRadius: 12, padding: "14px 18px", flex: 1, minWidth: 160 }}>
                            <div style={{ fontSize: 26, fontWeight: 900, color: "#f59e0b" }}>{fmt(founderEngagement.upsellOpportunity.freeUsersHittingVoiceLimit)}</div>
                            <div style={{ fontSize: 12, color: "#92400e", fontWeight: 700 }}>Free users at voice limit</div>
                            <div style={{ fontSize: 11, color: "#9ca3af" }}>{founderEngagement.upsellOpportunity.voiceCharLimit} char/month cap hit</div>
                          </div>
                          <div style={{ background: "#fff", border: "1px solid #fde68a", borderRadius: 12, padding: "14px 18px", flex: 1, minWidth: 160 }}>
                            <div style={{ fontSize: 26, fontWeight: 900, color: "#f97316" }}>{fmt(founderEngagement.upsellOpportunity.freeUsersNearVoiceLimit)}</div>
                            <div style={{ fontSize: 12, color: "#92400e", fontWeight: 700 }}>Near voice limit (80%+)</div>
                            <div style={{ fontSize: 11, color: "#9ca3af" }}>Warm upsell targets</div>
                          </div>
                          <div style={{ flex: 3, minWidth: 200, display: "flex", alignItems: "center" }}>
                            <p style={{ fontSize: 13, color: "#374151" }}>💡 {founderEngagement.upsellOpportunity.insight}</p>
                          </div>
                        </div>
                      </div>

                      {/* Expiring Soon */}
                      {founderEngagement.expiringSoon.length > 0 && (
                        <div className="ap-card" style={{ marginBottom: 20, border: "1px solid #fecaca" }}>
                          <p className="ap-section-title" style={{ color: "#dc2626" }}>⚠️ Plans Expiring in 14 Days ({founderEngagement.expiringSoon.length})</p>
                          <Table
                            cols={[
                              { key: "email",     label: "Email" },
                              { key: "name",      label: "Name" },
                              { key: "planType",  label: "Plan",    render: v => <StatusBadge status={String(v)} /> },
                              { key: "expiresAt", label: "Expires", render: v => <span style={{ fontWeight: 700, color: "#ef4444" }}>{fmtDateShort(v)} ({daysLeft(v)}d)</span> },
                            ]}
                            rows={founderEngagement.expiringSoon}
                          />
                        </div>
                      )}

                      <div className="ap-grid2" style={{ marginBottom: 20 }}>
                        {/* Power Users */}
                        <div className="ap-card">
                          <p className="ap-section-title">🏆 Power Users (All-Time Credit Spend)</p>
                          <Table
                            cols={[
                              { key: "email",      label: "Email" },
                              { key: "planType",   label: "Plan",  render: v => <StatusBadge status={String(v)} /> },
                              { key: "totalSpent", label: "Spent", render: v => <span style={{ fontWeight: 800, color: "#ef4444" }}>{fmt(Number(v))}</span> },
                              { key: "balance",    label: "Bal",   render: v => <span style={{ fontWeight: 700, color: "#10b981" }}>{fmt(Number(v))}</span> },
                            ]}
                            rows={founderEngagement.powerUsers}
                          />
                        </div>
                        {/* At-Risk Users */}
                        <div className="ap-card">
                          <p className="ap-section-title">🔴 At-Risk Users (Paid, &lt;50 Credits)</p>
                          <Table
                            cols={[
                              { key: "email",     label: "Email" },
                              { key: "planType",  label: "Plan",  render: v => <StatusBadge status={String(v)} /> },
                              { key: "balance",   label: "Credits", render: v => <span style={{ fontWeight: 800, color: "#ef4444" }}>{Number(v)}</span> },
                            ]}
                            rows={founderEngagement.atRiskUsers}
                            emptyMsg="No at-risk paid users 🎉"
                          />
                        </div>
                      </div>

                      {/* Plan Engagement */}
                      <div className="ap-card">
                        <p className="ap-section-title">📊 Engagement by Plan Tier</p>
                        <div style={{ overflowX: "auto" as const }}>
                          <table style={{ width: "100%", borderCollapse: "collapse" as const, fontSize: 12.5 }}>
                            <thead>
                              <tr style={{ borderBottom: "2px solid #f3f4f6" }}>
                                {["Plan","Users","Avg Balance","Avg Credits Spent","Never Used","Dormant %"].map(h => (
                                  <th key={h} style={{ padding: "10px 14px", textAlign: "left" as const, fontWeight: 800, color: "#9ca3af", textTransform: "uppercase" as const, letterSpacing: "0.07em", fontSize: 10.5 }}>{h}</th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {Object.entries(founderEngagement.planEngagement as Record<string,any>).map(([plan, data]: [string, any]) => {
                                const planColors: Record<string,string> = { FREE:"#9ca3af", SPARK:"#a78bfa", MICRO:"#818cf8", CREATOR_LITE:"#6355dc", CREATOR:"#7c3aed", STUDIO:"#f59e0b" };
                                const c = planColors[plan] ?? "#6355dc";
                                return (
                                  <tr key={plan} style={{ borderBottom: "1px solid #f9fafb" }}
                                    onMouseEnter={e => (e.currentTarget.style.background = "#fafafa")}
                                    onMouseLeave={e => (e.currentTarget.style.background = "transparent")}>
                                    <td style={{ padding: "11px 14px" }}><StatusBadge status={plan} /></td>
                                    <td style={{ padding: "11px 14px", fontWeight: 700 }}>{fmt(data.userCount)}</td>
                                    <td style={{ padding: "11px 14px", color: "#10b981", fontWeight: 600 }}>{data.avgBalance}</td>
                                    <td style={{ padding: "11px 14px", color: "#6355dc", fontWeight: 600 }}>{data.avgTotalSpent}</td>
                                    <td style={{ padding: "11px 14px", color: "#9ca3af" }}>{data.neverUsedCredits}</td>
                                    <td style={{ padding: "11px 14px" }}>
                                      <span style={{ color: Number(data.dormantPct) > 50 ? "#ef4444" : Number(data.dormantPct) > 20 ? "#f59e0b" : "#10b981", fontWeight: 700 }}>
                                        {data.dormantPct}%
                                      </span>
                                    </td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ════ CONTENT HEALTH ════ */}
                  {founderActiveSection === "contentHealth" && founderContentHealth && (
                    <div>
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(170px,1fr))", gap: 14, marginBottom: 20 }}>
                        {[
                          { icon:"🎬", label:"Video Projects",     val: fmt(founderContentHealth.videoEditor.totalProjects),     sub:`${fmt(founderContentHealth.videoEditor.exported)} exported (${founderContentHealth.videoEditor.exportRate}%)`,  color:"#ef4444" },
                          { icon:"🖼️", label:"Image Editor Projs", val: fmt(founderContentHealth.imageEditor.totalAllTime),      sub:`${fmt(founderContentHealth.imageEditor.exported)} exported (${founderContentHealth.imageEditor.exportRate}%)`,  color:"#a78bfa" },
                          { icon:"📄", label:"PDF Operations",     val: fmt(founderContentHealth.pdfTools.totalOps),             sub:"total PDF jobs",                                                                                               color:"#6b7280" },
                          { icon:"📦", label:"Compressions",       val: fmt(founderContentHealth.compression.totalJobs),         sub:"media compressed",                                                                                             color:"#10b981" },
                          { icon:"🔄", label:"Media Conversions",  val: fmt(founderContentHealth.mediaConversion.totalJobs),     sub:"format conversions",                                                                                           color:"#3b82f6" },
                          { icon:"✂️", label:"BG Removals",        val: fmt(founderContentHealth.bgRemoval.total),               sub:`${founderContentHealth.bgRemoval.successRate}% success rate`,                                                  color:"#ec4899" },
                          { icon:"⚡", label:"Video Speed Jobs",   val: fmt(founderContentHealth.videoSpeed.totalJobs),          sub:"speed adjustments",                                                                                            color:"#f97316" },
                        ].map(k => <KpiCard key={k.label} icon={k.icon} label={k.label} value={k.val} sub={k.sub} color={k.color} />)}
                      </div>

                      <div className="ap-grid2" style={{ marginBottom: 20 }}>
                        {/* PDF Operation Breakdown */}
                        <div className="ap-card">
                          <p className="ap-section-title">📄 PDF Operations Breakdown</p>
                          {Object.keys(founderContentHealth.pdfTools.byOperation).length === 0 ? (
                            <p style={{ color: "#9ca3af", fontSize: 13 }}>No PDF operations in range</p>
                          ) : (
                            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                              {Object.entries(founderContentHealth.pdfTools.byOperation as Record<string,number>)
                                .sort((a,b) => Number(b[1]) - Number(a[1]))
                                .map(([op, count]) => {
                                  const total = Object.values(founderContentHealth.pdfTools.byOperation as Record<string,number>).reduce((a,b) => a+b, 0);
                                  const pct = total > 0 ? Math.round(Number(count)/total*100) : 0;
                                  return (
                                    <div key={op} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                                      <span style={{ fontSize: 11, color: "#374151", width: 130, flexShrink: 0 }}>{op.replace("_"," ")}</span>
                                      <div style={{ flex: 1, height: 7, background: "#f3f4f6", borderRadius: 99, overflow: "hidden" }}>
                                        <div style={{ width: `${pct}%`, height: "100%", background: "#6b7280", borderRadius: 99 }} />
                                      </div>
                                      <span style={{ fontSize: 12, fontWeight: 700, color: "#374151", width: 30, textAlign: "right" as const }}>{count}</span>
                                    </div>
                                  );
                                })}
                            </div>
                          )}
                        </div>

                        {/* Compression by file type */}
                        <div className="ap-card">
                          <p className="ap-section-title">📦 Compression by File Type</p>
                          {Object.keys(founderContentHealth.compression.byFileType).length === 0 ? (
                            <p style={{ color: "#9ca3af", fontSize: 13 }}>No compressions yet</p>
                          ) : (
                            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                              {Object.entries(founderContentHealth.compression.byFileType as Record<string,number>)
                                .sort((a,b) => Number(b[1]) - Number(a[1]))
                                .map(([type, count]) => {
                                  const total = Object.values(founderContentHealth.compression.byFileType as Record<string,number>).reduce((a,b) => a+b, 0);
                                  const pct = total > 0 ? Math.round(Number(count)/total*100) : 0;
                                  return (
                                    <div key={type} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                                      <span style={{ fontSize: 11, color: "#374151", width: 80, flexShrink: 0 }}>{type}</span>
                                      <div style={{ flex: 1, height: 7, background: "#f3f4f6", borderRadius: 99, overflow: "hidden" }}>
                                        <div style={{ width: `${pct}%`, height: "100%", background: "#10b981", borderRadius: 99 }} />
                                      </div>
                                      <span style={{ fontSize: 12, fontWeight: 700, color: "#374151", width: 30, textAlign: "right" as const }}>{count}</span>
                                    </div>
                                  );
                                })}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="ap-grid2">
                        {/* Media Conversion by Format */}
                        <div className="ap-card">
                          <p className="ap-section-title">🔄 Conversion Target Formats</p>
                          {Object.keys(founderContentHealth.mediaConversion.byFormat).length === 0 ? (
                            <p style={{ color: "#9ca3af", fontSize: 13 }}>No conversions yet</p>
                          ) : (
                            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" as const }}>
                              {Object.entries(founderContentHealth.mediaConversion.byFormat as Record<string,number>)
                                .sort((a,b) => Number(b[1]) - Number(a[1]))
                                .map(([fmt_, count]) => (
                                  <div key={fmt_} style={{ padding: "6px 14px", borderRadius: 99, background: "#dbeafe", border: "1px solid #93c5fd" }}>
                                    <span style={{ fontSize: 12, fontWeight: 800, color: "#1d4ed8" }}>{fmt_}: {count}</span>
                                  </div>
                                ))}
                            </div>
                          )}
                        </div>
                        {/* Video Speed Distribution */}
                        <div className="ap-card">
                          <p className="ap-section-title">⚡ Video Speed Distribution</p>
                          {Object.keys(founderContentHealth.videoSpeed.speedDistribution).length === 0 ? (
                            <p style={{ color: "#9ca3af", fontSize: 13 }}>No speed jobs yet</p>
                          ) : (
                            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                              {Object.entries(founderContentHealth.videoSpeed.speedDistribution as Record<string,number>)
                                .sort((a,b) => Number(b[1]) - Number(a[1]))
                                .map(([speed, count]) => {
                                  const total = Object.values(founderContentHealth.videoSpeed.speedDistribution as Record<string,number>).reduce((a,b) => a+b, 0);
                                  const pct = total > 0 ? Math.round(Number(count)/total*100) : 0;
                                  return (
                                    <div key={speed} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                                      <span style={{ fontSize: 11, color: "#374151", width: 100, flexShrink: 0 }}>{speed}</span>
                                      <div style={{ flex: 1, height: 7, background: "#f3f4f6", borderRadius: 99, overflow: "hidden" }}>
                                        <div style={{ width: `${pct}%`, height: "100%", background: "#f97316", borderRadius: 99 }} />
                                      </div>
                                      <span style={{ fontSize: 12, fontWeight: 700, color: "#374151", width: 30, textAlign: "right" as const }}>{count}</span>
                                    </div>
                                  );
                                })}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ════ AI DEEP DIVE ════ */}
                  {founderActiveSection === "aiDeepDive" && founderAiDeepDive && (
                    <div>
                      {/* AI Credit Burn */}
                      <div style={{ marginBottom: 20 }}>
                        <KpiCard icon="🔥" label="Total AI Credit Burn (window)" value={fmt(founderAiDeepDive.aiCreditBurnTotal)} sub="all AI tools combined" color="#ef4444" />
                      </div>

                      <div className="ap-grid2" style={{ marginBottom: 20 }}>
                        {/* AI Video Gen */}
                        <div className="ap-card">
                          <p className="ap-section-title">🎬 AI Video Generation</p>
                          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 14 }}>
                            {[
                              { label:"Total Jobs",      val: fmt(founderAiDeepDive.videoGen.total),             color:"#374151" },
                              { label:"Credits Used",    val: fmt(founderAiDeepDive.videoGen.totalCreditsUsed),   color:"#ef4444" },
                              { label:"Unique Users",    val: fmt(founderAiDeepDive.videoGen.uniqueUsers),        color:"#6355dc" },
                              { label:"Audio Enabled",   val: fmt(founderAiDeepDive.videoGen.audioEnabledCount),  color:"#10b981" },
                              { label:"Avg Completion",  val: founderAiDeepDive.videoGen.avgCompletionMins != null ? `${founderAiDeepDive.videoGen.avgCompletionMins}m` : "—", color:"#f59e0b" },
                            ].map(s => (
                              <div key={s.label} style={{ background: "#f9fafb", borderRadius: 10, padding: "10px 12px" }}>
                                <div style={{ fontSize: 10, color: "#9ca3af", fontWeight: 700, textTransform: "uppercase" as const, marginBottom: 3 }}>{s.label}</div>
                                <div style={{ fontSize: 18, fontWeight: 900, color: s.color }}>{s.val}</div>
                              </div>
                            ))}
                          </div>
                          {/* Status breakdown */}
                          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" as const, marginBottom: 10 }}>
                            {Object.entries(founderAiDeepDive.videoGen.byStatus as Record<string,number>).map(([status, count]) => {
                              const c: Record<string,string> = { COMPLETED:"#10b981", FAILED:"#ef4444", PENDING:"#f59e0b", PROCESSING:"#3b82f6" };
                              const bg: Record<string,string> = { COMPLETED:"#dcfce7", FAILED:"#fee2e2", PENDING:"#fef9c3", PROCESSING:"#dbeafe" };
                              return (
                                <span key={status} style={{ padding:"4px 10px", borderRadius:99, fontSize:11, fontWeight:700, background: bg[status] ?? "#f3f4f6", color: c[status] ?? "#374151" }}>
                                  {status}: {count}
                                </span>
                              );
                            })}
                          </div>
                          {/* Model breakdown */}
                          <p style={{ fontSize: 11, color: "#9ca3af", fontWeight: 700, marginBottom: 6, textTransform: "uppercase" as const }}>By Model</p>
                          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" as const, marginBottom: 10 }}>
                            {Object.entries(founderAiDeepDive.videoGen.byModel as Record<string,number>).map(([model, count]) => (
                              <span key={model} style={{ padding:"4px 10px", borderRadius:99, fontSize:11, fontWeight:700, background:"#e0e7ff", color:"#4338ca" }}>
                                {model}: {count}
                              </span>
                            ))}
                          </div>
                          {/* Aspect ratios */}
                          <p style={{ fontSize: 11, color: "#9ca3af", fontWeight: 700, marginBottom: 6, textTransform: "uppercase" as const }}>Aspect Ratios</p>
                          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" as const }}>
                            {Object.entries(founderAiDeepDive.videoGen.byAspectRatio as Record<string,number>).map(([ar, count]) => (
                              <span key={ar} style={{ padding:"4px 10px", borderRadius:99, fontSize:11, fontWeight:700, background:"#f0fdf4", color:"#15803d" }}>
                                {ar}: {count}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* AI Image Gen */}
                        <div className="ap-card">
                          <p className="ap-section-title">🎨 AI Image Generation</p>
                          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 14 }}>
                            {[
                              { label:"Total Jobs",   val: fmt(founderAiDeepDive.imageGen.total),       color:"#374151" },
                              { label:"Unique Users", val: fmt(founderAiDeepDive.imageGen.uniqueUsers), color:"#6355dc" },
                            ].map(s => (
                              <div key={s.label} style={{ background: "#f9fafb", borderRadius: 10, padding: "10px 12px" }}>
                                <div style={{ fontSize: 10, color: "#9ca3af", fontWeight: 700, textTransform: "uppercase" as const, marginBottom: 3 }}>{s.label}</div>
                                <div style={{ fontSize: 18, fontWeight: 900, color: s.color }}>{s.val}</div>
                              </div>
                            ))}
                          </div>
                          {/* Status */}
                          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" as const, marginBottom: 10 }}>
                            {Object.entries(founderAiDeepDive.imageGen.byStatus as Record<string,number>).map(([status, count]) => {
                              const c: Record<string,string> = { COMPLETED:"#10b981", FAILED:"#ef4444", PENDING:"#f59e0b", PROCESSING:"#3b82f6" };
                              const bg: Record<string,string> = { COMPLETED:"#dcfce7", FAILED:"#fee2e2", PENDING:"#fef9c3", PROCESSING:"#dbeafe" };
                              return (
                                <span key={status} style={{ padding:"4px 10px", borderRadius:99, fontSize:11, fontWeight:700, background: bg[status] ?? "#f3f4f6", color: c[status] ?? "#374151" }}>
                                  {status}: {count}
                                </span>
                              );
                            })}
                          </div>
                          {/* Resolution */}
                          {Object.keys(founderAiDeepDive.imageGen.byResolution).length > 0 && (
                            <>
                              <p style={{ fontSize: 11, color: "#9ca3af", fontWeight: 700, marginBottom: 6, textTransform: "uppercase" as const }}>Resolutions</p>
                              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" as const }}>
                                {Object.entries(founderAiDeepDive.imageGen.byResolution as Record<string,number>).map(([res, count]) => (
                                  <span key={res} style={{ padding:"4px 10px", borderRadius:99, fontSize:11, fontWeight:700, background:"#fdf4ff", color:"#7e22ce" }}>
                                    {res}: {count}
                                  </span>
                                ))}
                              </div>
                            </>
                          )}

                          {/* TTS in same card */}
                          <div style={{ marginTop: 20, paddingTop: 16, borderTop: "1px solid #f3f4f6" }}>
                            <p className="ap-section-title">🎙️ TTS Summary</p>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                              {[
                                { label:"Total Jobs",    val: fmt(founderAiDeepDive.tts.total),           color:"#f59e0b" },
                                { label:"Total Chars",   val: fmt(founderAiDeepDive.tts.totalChars),      color:"#6355dc" },
                                { label:"Free Tier Jobs",val: fmt(founderAiDeepDive.tts.freeUserJobs),    color:"#9ca3af" },
                                { label:"Paid Tier Jobs",val: fmt(founderAiDeepDive.tts.paidUserJobs),    color:"#10b981" },
                                { label:"Free Users",    val: fmt(founderAiDeepDive.tts.freeUniqueUsers), color:"#9ca3af" },
                                { label:"Paid Users",    val: fmt(founderAiDeepDive.tts.paidUniqueUsers), color:"#10b981" },
                              ].map(s => (
                                <div key={s.label} style={{ background: "#f9fafb", borderRadius: 10, padding: "8px 12px" }}>
                                  <div style={{ fontSize: 10, color: "#9ca3af", fontWeight: 700, textTransform: "uppercase" as const, marginBottom: 2 }}>{s.label}</div>
                                  <div style={{ fontSize: 16, fontWeight: 900, color: s.color }}>{s.val}</div>
                                </div>
                              ))}
                            </div>
                            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" as const, marginTop: 10 }}>
                              {Object.entries(founderAiDeepDive.tts.byProvider as Record<string,number>).map(([prov, count]) => {
                                const c: Record<string,string> = { GOOGLE:"#3b82f6", OPENAI:"#10b981", AZURE:"#0ea5e9" };
                                const bg: Record<string,string> = { GOOGLE:"#dbeafe", OPENAI:"#dcfce7", AZURE:"#e0f2fe" };
                                return (
                                  <span key={prov} style={{ padding:"4px 10px", borderRadius:99, fontSize:11, fontWeight:700, background: bg[prov] ?? "#f3f4f6", color: c[prov] ?? "#374151" }}>
                                    {prov}: {count}
                                  </span>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Daily AI Trend Chart */}
                      {founderAiDeepDive.dailyAiTrend.length > 0 && (
                        <div className="ap-card">
                          <p className="ap-section-title">📅 Daily AI Tool Usage Trend</p>
                          <div style={{ display: "flex", gap: 12, marginBottom: 12 }}>
                            {[["#f59e0b","TTS"],["#ef4444","Video Gen"],["#8b5cf6","Image Gen"]].map(([c,l]) => (
                              <div key={l} style={{ display: "flex", alignItems: "center", gap: 5 }}>
                                <div style={{ width: 8, height: 8, borderRadius: 2, background: c }} />
                                <span style={{ fontSize: 11, color: "#6b7280" }}>{l}</span>
                              </div>
                            ))}
                          </div>
                          <div style={{ display: "flex", alignItems: "flex-end", gap: 3, height: 72 }}>
                            {founderAiDeepDive.dailyAiTrend.slice(-30).map((d: any, i: number) => {
                              const ttsV     = Number(d.tts)      || 0;
                              const vidV     = Number(d.videoGen) || 0;
                              const imgV     = Number(d.imageGen) || 0;
                              const total    = ttsV + vidV + imgV;
                              const maxTotal = Math.max(...founderAiDeepDive.dailyAiTrend.slice(-30).map((x: any) => Number(x.tts||0)+Number(x.videoGen||0)+Number(x.imageGen||0)), 1);
                              const barH = Math.max(4, (total / maxTotal) * 72);
                              return (
                                <div key={i} title={`${d.date}: TTS ${ttsV}, Video ${vidV}, Image ${imgV}`}
                                  style={{ flex: 1, minWidth: 4, height: barH, borderRadius: "3px 3px 0 0",
                                    overflow: "hidden", display: "flex", flexDirection: "column" as const }}>
                                  {ttsV > 0 && <div style={{ height: `${total > 0 ? ttsV/total*100 : 0}%`, background: "#f59e0b", flexShrink: 0 }} />}
                                  {vidV > 0 && <div style={{ height: `${total > 0 ? vidV/total*100 : 0}%`, background: "#ef4444", flexShrink: 0 }} />}
                                  {imgV > 0 && <div style={{ height: `${total > 0 ? imgV/total*100 : 0}%`, background: "#8b5cf6", flexShrink: 0 }} />}
                                </div>
                              );
                            })}
                          </div>
                          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 4 }}>
                            <span style={{ fontSize: 10, color: "#d1d5db" }}>{founderAiDeepDive.dailyAiTrend[0]?.date}</span>
                            <span style={{ fontSize: 10, color: "#d1d5db" }}>Today</span>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* ════ BILLING HEALTH ════ */}
                  {founderActiveSection === "billingHealth" && founderBillingHealth && (
                    <div>
                      {/* Alerts */}
                      <div className="ap-card" style={{ marginBottom: 20, border: founderBillingHealth.paymentFailedCount > 0 ? "1px solid #fecaca" : "1px solid #bbf7d0", background: founderBillingHealth.paymentFailedCount > 0 ? "#fff5f5" : "#f0fdf4" }}>
                        <p className="ap-section-title" style={{ color: founderBillingHealth.paymentFailedCount > 0 ? "#dc2626" : "#15803d" }}>
                          {founderBillingHealth.paymentFailedCount > 0 ? "🚨 Billing Alerts" : "✅ Billing Health"}
                        </p>
                        {founderBillingHealth.alerts.map((a: string, i: number) => (
                          <p key={i} style={{ fontSize: 13, color: "#374151", marginBottom: 4 }}>{a}</p>
                        ))}
                      </div>

                      {/* KPIs */}
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(160px,1fr))", gap: 14, marginBottom: 20 }}>
                        {[
                          { icon:"📋", label:"Total Subscriptions",  val: fmt(founderBillingHealth.totalSubscriptions),    color:"#6355dc" },
                          { icon:"❌", label:"Payment Failed",        val: fmt(founderBillingHealth.paymentFailedCount),     color: founderBillingHealth.paymentFailedCount > 0 ? "#ef4444" : "#10b981" },
                          { icon:"⏰", label:"Grace Period (48h)",   val: fmt(founderBillingHealth.gracePeriodExpiring48h), color: founderBillingHealth.gracePeriodExpiring48h > 0 ? "#f59e0b" : "#10b981" },
                          { icon:"🚫", label:"Cancelled (Active)",   val: fmt(founderBillingHealth.cancelledButActive),     color:"#9ca3af", },
                          { icon:"📈", label:"Avg Consecutive Fails", val: `${founderBillingHealth.avgConsecutiveFailures}`, color:"#f97316" },
                        ].map(k => <KpiCard key={k.label} icon={k.icon} label={k.label} value={k.val} color={k.color} />)}
                      </div>

                      <div className="ap-grid2" style={{ marginBottom: 20 }}>
                        {/* Status breakdown */}
                        <div className="ap-card">
                          <p className="ap-section-title">📊 Subscription Status Breakdown</p>
                          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                            {Object.entries(founderBillingHealth.byStatus as Record<string,number>)
                              .sort((a,b) => Number(b[1]) - Number(a[1]))
                              .map(([status, count]) => {
                                const statusColors: Record<string,string> = {
                                  ACTIVE:"#10b981", CANCELLED:"#9ca3af", PAYMENT_FAILED:"#ef4444",
                                  EXPIRED:"#6b7280", CREATED:"#f59e0b", AUTHENTICATED:"#3b82f6",
                                  COMPLETED:"#14b8a6", PAUSED:"#f97316"
                                };
                                const total = Object.values(founderBillingHealth.byStatus as Record<string,number>).reduce((a,b) => a+b, 0);
                                const pct = total > 0 ? Math.round(Number(count)/total*100) : 0;
                                const c = statusColors[status] ?? "#6355dc";
                                return (
                                  <div key={status} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                                    <span style={{ fontSize: 11, color: "#374151", width: 130, flexShrink: 0 }}>{status}</span>
                                    <div style={{ flex: 1, height: 8, background: "#f3f4f6", borderRadius: 99, overflow: "hidden" }}>
                                      <div style={{ width: `${pct}%`, height: "100%", background: c, borderRadius: 99 }} />
                                    </div>
                                    <span style={{ fontSize: 12, fontWeight: 800, color: c, width: 40, textAlign: "right" as const }}>{count}</span>
                                  </div>
                                );
                              })}
                          </div>
                        </div>

                        {/* Gateway + Plan breakdown */}
                        <div className="ap-card">
                          <p className="ap-section-title">🏦 Gateway Distribution</p>
                          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" as const, marginBottom: 16 }}>
                            {Object.entries(founderBillingHealth.byGateway as Record<string,number>).map(([gw, count]) => {
                              const gwColors: Record<string,string> = { RAZORPAY:"#6355dc", PAYPAL:"#003087" };
                              const c = gwColors[gw] ?? "#6355dc";
                              return (
                                <div key={gw} style={{ flex: 1, padding: "14px 16px", borderRadius: 12, background: `${c}10`, border: `1px solid ${c}25`, textAlign: "center" as const }}>
                                  <div style={{ fontSize: 22, fontWeight: 900, color: c }}>{count}</div>
                                  <div style={{ fontSize: 12, color: c, fontWeight: 700 }}>{gw}</div>
                                </div>
                              );
                            })}
                          </div>
                          <p style={{ fontSize: 11, color: "#9ca3af", fontWeight: 700, marginBottom: 8, textTransform: "uppercase" as const }}>By Plan Type</p>
                          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" as const }}>
                            {Object.entries(founderBillingHealth.byPlan as Record<string,number>)
                              .sort((a,b) => Number(b[1]) - Number(a[1]))
                              .map(([plan, count]) => {
                                const planColors: Record<string,string> = { MICRO:"#818cf8", CREATOR_LITE:"#6355dc", CREATOR:"#7c3aed", STUDIO:"#f59e0b", SPARK:"#a78bfa" };
                                const c = planColors[plan] ?? "#6355dc";
                                return (
                                  <div key={plan} style={{ padding:"5px 12px", borderRadius:99, background:`${c}18`, border:`1px solid ${c}33` }}>
                                    <span style={{ fontSize:11, fontWeight:800, color:c }}>{plan}: {count}</span>
                                  </div>
                                );
                              })}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}
            </motion.div>
          )}

        </AnimatePresence>
      </main>
    </div>
  );
}