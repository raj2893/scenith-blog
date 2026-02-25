"use client";

// ─────────────────────────────────────────────────────────────────────────────
// SvgLibraryUpgradePopup — drop this component into ElementsLibraryClient.tsx
//
// HOW TO USE:
//   1. Copy this file into your components directory (or paste inline).
//   2. Import it at the top of ElementsLibraryClient.tsx:
//        import SvgLibraryUpgradePopup from "@/app/components/SvgLibraryUpgradePopup";
//   3. Add state in ElementsLibraryClient (already matches your pattern):
//        const [showSvgUpgradePopup, setShowSvgUpgradePopup] = useState(false);
//   4. Add the timer useEffect (paste below your other useEffects):
//        useEffect(() => {
//          const t = setTimeout(() => setShowSvgUpgradePopup(true), 5000);
//          return () => clearTimeout(t);
//        }, []);
//   5. Render anywhere inside the return (e.g. just before the closing </div>):
//        {showSvgUpgradePopup && (
//          <SvgLibraryUpgradePopup onClose={() => setShowSvgUpgradePopup(false)} />
//        )}
// ─────────────────────────────────────────────────────────────────────────────

import React from "react";

interface Props {
  onClose: () => void;
}

export default function SvgLibraryUpgradePopup({ onClose }: Props) {
  return (
    <>
      {/* ── Keyframes (injected once) ─────────────────────────────────────── */}
      <style>{`
        @keyframes svgPopOverlay {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes svgPopCard {
          from { opacity: 0; transform: translateY(36px) scale(0.95); }
          to   { opacity: 1; transform: translateY(0)    scale(1);    }
        }
        @keyframes svgPulse {
          0%,100% { opacity: 1; transform: scale(1);    }
          50%      { opacity: 0.4; transform: scale(1.4); }
        }
        @keyframes svgFloat {
          0%,100% { transform: translateY(0px);   }
          50%      { transform: translateY(-6px);  }
        }
        .svg-pop-close-btn:hover {
          background: rgba(255,255,255,0.16) !important;
          color: #fff !important;
        }
        .svg-pop-cta:hover {
          transform: translateY(-2px) scale(1.02) !important;
          box-shadow: 0 12px 40px rgba(255,107,107,0.55) !important;
        }
        .svg-pop-secondary:hover {
          background: rgba(255,255,255,0.1) !important;
          color: rgba(255,255,255,0.9) !important;
        }
        .svg-pop-perk:hover {
          background: rgba(255,255,255,0.08) !important;
          border-color: rgba(255,107,107,0.35) !important;
        }
      `}</style>

      {/* ── Backdrop ──────────────────────────────────────────────────────── */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Upgrade to Scenith Premium"
        onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        style={{
          position: "fixed", inset: 0, zIndex: 9999,
          background: "rgba(6, 4, 18, 0.82)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          display: "flex", alignItems: "center", justifyContent: "center",
          padding: "16px",
          animation: "svgPopOverlay 0.3s ease forwards",
        }}
      >
        {/* ── Card ────────────────────────────────────────────────────────── */}
        <div
          style={{
            position: "relative",
            background: "linear-gradient(150deg, #0e0b26 0%, #1a1540 55%, #0c0a1f 100%)",
            borderRadius: "22px",
            padding: "32px 28px 26px",
            maxWidth: "420px",
            width: "100%",
            border: "1px solid rgba(255,107,107,0.22)",
            boxShadow:
              "0 0 0 1px rgba(118,75,162,0.1), 0 28px 70px rgba(0,0,0,0.7), 0 0 80px rgba(255,107,107,0.07)",
            animation: "svgPopCard 0.42s cubic-bezier(0.22,1,0.36,1) forwards",
            overflow: "hidden",
          }}
        >
          {/* ambient glow blobs */}
          <div style={{
            position: "absolute", top: "-50px", right: "-50px",
            width: "180px", height: "180px",
            background: "radial-gradient(circle, rgba(255,107,107,0.18) 0%, transparent 70%)",
            pointerEvents: "none", borderRadius: "50%",
          }} />
          <div style={{
            position: "absolute", bottom: "-40px", left: "-40px",
            width: "140px", height: "140px",
            background: "radial-gradient(circle, rgba(102,126,234,0.15) 0%, transparent 70%)",
            pointerEvents: "none", borderRadius: "50%",
          }} />

          {/* close button */}
          <button
            className="svg-pop-close-btn"
            onClick={onClose}
            aria-label="Close"
            style={{
              position: "absolute", top: "12px", right: "12px",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "50%", width: "28px", height: "28px",
              color: "rgba(255,255,255,0.45)", fontSize: "15px",
              cursor: "pointer", display: "flex",
              alignItems: "center", justifyContent: "center",
              transition: "all 0.2s", lineHeight: 1, zIndex: 2,
            }}
          >×</button>

          {/* ── Icon + urgency row ──────────────────────────────────────── */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
            {/* floating icon */}
            <span style={{
              fontSize: "2.2rem",
              animation: "svgFloat 3s ease-in-out infinite",
              display: "inline-block",
            }}>🎨</span>

            {/* live pill */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "6px",
              background: "rgba(255,107,107,0.12)",
              border: "1px solid rgba(255,107,107,0.3)",
              borderRadius: "100px", padding: "4px 12px",
            }}>
              <span style={{
                width: "5px", height: "5px", borderRadius: "50%",
                background: "#ff6b6b", display: "inline-block",
                boxShadow: "0 0 6px #ff6b6b",
                animation: "svgPulse 1.8s infinite",
              }} />
              <span style={{
                fontSize: "0.65rem", fontWeight: 800,
                color: "#ff8a8a", letterSpacing: "1.4px", textTransform: "uppercase",
              }}>
                Limited Offer — 25% OFF
              </span>
            </div>
          </div>

          {/* ── Headline ───────────────────────────────────────────────── */}
          <h2 style={{
            fontSize: "clamp(1.25rem, 4vw, 1.6rem)", fontWeight: 900,
            color: "#fff", margin: "0 0 7px", lineHeight: 1.2,
            letterSpacing: "-0.02em",
          }}>
            Unlock{" "}
            <span style={{
              background: "linear-gradient(90deg, #ff6b6b, #feca57, #ff9f43)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Unlimited SVGs
            </span>
            {" "}+ More
          </h2>

          {/* subline */}
          <p style={{
            color: "rgba(255,255,255,0.48)", fontSize: "0.84rem",
            margin: "0 0 18px", lineHeight: 1.55,
          }}>
            You're browsing{" "}
            <strong style={{ color: "rgba(255,255,255,0.75)" }}>10,000+ free icons</strong>
            —go for Creator for unlimited downloads, SVG exports &amp; zero limits.
          </p>

          {/* ── Perks grid ─────────────────────────────────────────────── */}
          <div style={{
            display: "grid", gridTemplateColumns: "1fr 1fr",
            gap: "8px", marginBottom: "20px",
          }}>
            {[
              { icon: "⬇️", label: "Unlimited Downloads" },
              { icon: "🖼️", label: "SVG + PNG + JPG" },
              { icon: "✏️", label: "Online Editor Access" },
              { icon: "⚡", label: "Priority Processing" },
            ].map((p) => (
              <div
                key={p.label}
                className="svg-pop-perk"
                style={{
                  display: "flex", alignItems: "center", gap: "7px",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "10px", padding: "9px 11px",
                  transition: "all 0.2s", cursor: "default",
                }}
              >
                <span style={{ fontSize: "0.9rem" }}>{p.icon}</span>
                <span style={{
                  fontSize: "0.76rem", color: "rgba(255,255,255,0.7)",
                  fontWeight: 600, lineHeight: 1.3,
                }}>{p.label}</span>
              </div>
            ))}
          </div>

          {/* ── Price strip ────────────────────────────────────────────── */}
          <div style={{
            display: "flex", alignItems: "center", gap: "10px",
            marginBottom: "16px",
            padding: "10px 14px",
            background: "rgba(255,107,107,0.07)",
            border: "1px solid rgba(255,107,107,0.18)",
            borderRadius: "12px",
          }}>
            <span style={{
              fontSize: "1.4rem", fontWeight: 900, color: "#ff6b6b",
              letterSpacing: "-0.03em",
            }}>₹349<span style={{ fontSize: "0.75rem", fontWeight: 600 }}>/mo</span></span>
            <span style={{ color: "rgba(255,255,255,0.25)", fontSize: "1.1rem" }}>·</span>
            <span style={{
              fontSize: "1.15rem", fontWeight: 900, color: "#feca57",
              letterSpacing: "-0.02em",
            }}>$9<span style={{ fontSize: "0.75rem", fontWeight: 600 }}>/mo</span></span>
            <span style={{
              marginLeft: "auto",
              background: "rgba(72,187,120,0.15)",
              border: "1px solid rgba(72,187,120,0.3)",
              borderRadius: "6px", padding: "3px 8px",
              fontSize: "0.7rem", fontWeight: 800,
              color: "#68d391", letterSpacing: "0.5px",
            }}>SAVE 25%</span>
          </div>

          {/* ── Primary CTA ────────────────────────────────────────────── */}
          <a
            href="/pricing"
            className="svg-pop-cta"
            onClick={onClose}
            style={{
              display: "flex", alignItems: "center",
              justifyContent: "center", gap: "8px",
              width: "100%", padding: "13px 20px",
              background: "linear-gradient(135deg, #ff6b6b 0%, #ff9f43 100%)",
              color: "#fff", borderRadius: "12px",
              fontSize: "0.95rem", fontWeight: 800,
              textDecoration: "none",
              boxShadow: "0 6px 28px rgba(255,107,107,0.42)",
              transition: "all 0.25s",
              letterSpacing: "-0.01em",
            }}
          >
            🚀 Claim 25% OFF — Upgrade Now
          </a>

          {/* ── Secondary dismiss ───────────────────────────────────────── */}
          <button
            className="svg-pop-secondary"
            onClick={onClose}
            style={{
              display: "block", width: "100%", marginTop: "10px",
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "10px", padding: "9px",
              color: "rgba(255,255,255,0.38)", fontSize: "0.82rem",
              cursor: "pointer", transition: "all 0.2s",
              fontWeight: 500,
            }}
          >
            Continue browsing for free
          </button>
        </div>
      </div>
    </>
  );
}