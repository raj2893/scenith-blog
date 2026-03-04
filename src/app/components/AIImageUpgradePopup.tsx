"use client";

// ─────────────────────────────────────────────────────────────────────────────
// AIImageUpgradePopup — drop into AIImageGeneratorClient.tsx
//
// HOW TO USE:
//   1. Place this file at: @/app/components/AIImageUpgradePopup.tsx
//   2. Import at top of AIImageGeneratorClient.tsx:
//        import AIImageUpgradePopup from "@/app/components/AIImageUpgradePopup";
//   3. Add state:
//        const [showImageUpgradePopup, setShowImageUpgradePopup] = useState(false);
//   4. Add timer useEffect (alongside other useEffects):
//        useEffect(() => {
//          const t = setTimeout(() => setShowImageUpgradePopup(true), 5000);
//          return () => clearTimeout(t);
//        }, []);
//   5. Render just before the closing </div> of the return:
//        {showImageUpgradePopup && (
//          <AIImageUpgradePopup onClose={() => setShowImageUpgradePopup(false)} />
//        )}
// ─────────────────────────────────────────────────────────────────────────────

import React from "react";

interface Props {
  onClose: () => void;
}

export default function AIImageUpgradePopup({ onClose }: Props) {
  return (
    <>
      <style>{`
        @keyframes imgPopOverlay {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes imgPopCard {
          from { opacity: 0; transform: translateY(40px) scale(0.94); }
          to   { opacity: 1; transform: translateY(0)    scale(1);    }
        }
        @keyframes imgPulse {
          0%,100% { opacity: 1; transform: scale(1);    }
          50%      { opacity: 0.35; transform: scale(1.5); }
        }
        @keyframes imgShimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes imgFloat {
          0%,100% { transform: translateY(0px) rotate(-2deg); }
          50%      { transform: translateY(-8px) rotate(2deg); }
        }
        .img-pop-close:hover {
          background: rgba(255,255,255,0.15) !important;
          color: #fff !important;
        }
        .img-pop-cta-primary:hover {
          transform: translateY(-2px) scale(1.02) !important;
          box-shadow: 0 14px 44px rgba(102,126,234,0.6) !important;
        }
        .img-pop-cta-secondary:hover {
          background: rgba(255,255,255,0.08) !important;
          color: rgba(255,255,255,0.85) !important;
          border-color: rgba(255,255,255,0.2) !important;
        }
        .img-pop-stat:hover {
          background: rgba(102,126,234,0.14) !important;
          border-color: rgba(102,126,234,0.35) !important;
          transform: translateY(-1px);
        }
      `}</style>

      {/* Backdrop */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Upgrade to Scenith Creator for more AI image generations"
        onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        style={{
          position: "fixed", inset: 0, zIndex: 9999,
          background: "rgba(4, 3, 15, 0.85)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          display: "flex", alignItems: "center", justifyContent: "center",
          padding: "16px",
          animation: "imgPopOverlay 0.3s ease forwards",
        }}
      >
        {/* Card */}
        <div
          style={{
            position: "relative",
            background: "linear-gradient(155deg, #0a0820 0%, #131040 50%, #0d0b25 100%)",
            borderRadius: "24px",
            padding: "34px 28px 26px",
            maxWidth: "440px",
            width: "100%",
            border: "1px solid rgba(102,126,234,0.25)",
            boxShadow:
              "0 0 0 1px rgba(118,75,162,0.12), 0 32px 80px rgba(0,0,0,0.72), 0 0 100px rgba(102,126,234,0.08)",
            animation: "imgPopCard 0.45s cubic-bezier(0.22,1,0.36,1) forwards",
            overflow: "hidden",
          }}
        >
          {/* Ambient blobs */}
          <div style={{
            position: "absolute", top: "-60px", right: "-60px",
            width: "220px", height: "220px",
            background: "radial-gradient(circle, rgba(102,126,234,0.18) 0%, transparent 70%)",
            pointerEvents: "none", borderRadius: "50%",
          }} />
          <div style={{
            position: "absolute", bottom: "-50px", left: "-50px",
            width: "180px", height: "180px",
            background: "radial-gradient(circle, rgba(240,147,251,0.12) 0%, transparent 70%)",
            pointerEvents: "none", borderRadius: "50%",
          }} />

          {/* Close */}
          <button
            className="img-pop-close"
            onClick={onClose}
            aria-label="Close upgrade prompt"
            style={{
              position: "absolute", top: "14px", right: "14px",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "50%", width: "30px", height: "30px",
              color: "rgba(255,255,255,0.4)", fontSize: "16px",
              cursor: "pointer", display: "flex",
              alignItems: "center", justifyContent: "center",
              transition: "all 0.2s", lineHeight: 1, zIndex: 2,
            }}
          >×</button>

          {/* Top row: emoji + urgency pill */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
            <span style={{
              fontSize: "2.4rem",
              display: "inline-block",
              animation: "imgFloat 4s ease-in-out infinite",
            }}>🎨</span>

            <div style={{
              display: "inline-flex", alignItems: "center", gap: "6px",
              background: "rgba(102,126,234,0.13)",
              border: "1px solid rgba(102,126,234,0.32)",
              borderRadius: "100px", padding: "4px 13px",
            }}>
              <span style={{
                width: "5px", height: "5px", borderRadius: "50%",
                background: "#667eea", display: "inline-block",
                boxShadow: "0 0 6px #667eea",
                animation: "imgPulse 1.8s infinite",
              }} />
              <span style={{
                fontSize: "0.65rem", fontWeight: 800,
                color: "#a5b4fc", letterSpacing: "1.5px", textTransform: "uppercase",
              }}>
                Limited Time — 25% OFF
              </span>
            </div>
          </div>

          {/* Headline */}
          <h2 style={{
            fontSize: "clamp(1.3rem, 4.5vw, 1.65rem)",
            fontWeight: 900, color: "#fff",
            margin: "0 0 8px", lineHeight: 1.2,
            letterSpacing: "-0.025em",
          }}>
            Unlock{" "}
            <span style={{
              background: "linear-gradient(90deg, #667eea, #a78bfa, #f093fb)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>AI Image Generation</span>
            <br />with Creator plans.
          </h2>

          {/* Sub-copy */}
          <p style={{
            color: "rgba(255,255,255,0.48)", fontSize: "0.84rem",
            margin: "0 0 20px", lineHeight: 1.6,
          }}>
            Free plan has no image credits.{" "}
            <strong style={{ color: "rgba(255,255,255,0.78)" }}>Creator Lite</strong> starts at 100 credits/mo,{" "}
            <strong style={{ color: "rgba(255,255,255,0.78)" }}>Creator Spark</strong> gives 250 credits/mo, and{" "}
            <strong style={{ color: "rgba(255,255,255,0.78)" }}>Creator Odyssey</strong> gives 500 credits/mo — all 7 models included.
          </p>

          {/* Stats comparison row — 3 plans */}
          <div style={{
            display: "grid", gridTemplateColumns: "1fr 1fr 1fr",
            gap: "8px", alignItems: "center", marginBottom: "18px",
          }}>
            <div className="img-pop-stat" style={{
              background: "rgba(102,126,234,0.07)", border: "1px solid rgba(102,126,234,0.2)",
              borderRadius: "12px", padding: "12px 8px", textAlign: "center", transition: "all 0.2s",
            }}>
              <div style={{ fontSize: "1.3rem", fontWeight: 900, color: "#818cf8", letterSpacing: "-0.03em" }}>100</div>
              <div style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.4)", fontWeight: 600, marginTop: "2px" }}>cr/mo<br />Lite</div>
            </div>

            <div className="img-pop-stat" style={{
              background: "rgba(102,126,234,0.12)", border: "1px solid rgba(102,126,234,0.35)",
              borderRadius: "12px", padding: "12px 8px", textAlign: "center", transition: "all 0.2s",
            }}>
              <div style={{
                fontSize: "1.3rem", fontWeight: 900, letterSpacing: "-0.03em",
                background: "linear-gradient(90deg, #667eea, #a78bfa)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>250</div>
              <div style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.5)", fontWeight: 600, marginTop: "2px" }}>cr/mo<br />Spark ⭐</div>
            </div>

            <div className="img-pop-stat" style={{
              background: "rgba(240,147,251,0.07)", border: "1px solid rgba(240,147,251,0.2)",
              borderRadius: "12px", padding: "12px 8px", textAlign: "center", transition: "all 0.2s",
            }}>
              <div style={{ fontSize: "1.3rem", fontWeight: 900, color: "#f093fb", letterSpacing: "-0.03em" }}>500</div>
              <div style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.4)", fontWeight: 600, marginTop: "2px" }}>cr/mo<br />Odyssey</div>
            </div>
          </div>

          {/* Perks list */}
          <div style={{
            display: "grid", gridTemplateColumns: "1fr 1fr",
            gap: "7px", marginBottom: "20px",
          }}>
            {[
              { icon: "🤖", label: "All 7 AI models unlocked" },
              { icon: "✏️", label: "Edit in image editor" },
              { icon: "🎨", label: "8 art styles included" },
              { icon: "⚡", label: "Daily credit caps per plan" },
            ].map((p) => (
              <div key={p.label} style={{
                display: "flex", alignItems: "flex-start", gap: "7px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "10px", padding: "9px 11px",
              }}>
                <span style={{ fontSize: "0.88rem", flexShrink: 0 }}>{p.icon}</span>
                <span style={{
                  fontSize: "0.74rem", color: "rgba(255,255,255,0.68)",
                  fontWeight: 600, lineHeight: 1.35,
                }}>{p.label}</span>
              </div>
            ))}
          </div>

          {/* Price strip */}
          <div style={{
            display: "flex", alignItems: "center", gap: "10px",
            padding: "11px 14px", marginBottom: "16px",
            background: "rgba(102,126,234,0.08)",
            border: "1px solid rgba(102,126,234,0.2)",
            borderRadius: "12px",
          }}>
            <div>
              <span style={{
                fontSize: "0.7rem", color: "rgba(255,255,255,0.35)",
                display: "block", lineHeight: 1, marginBottom: 2,
              }}>Starts at</span>
              <span style={{
                fontSize: "1.35rem", fontWeight: 900, color: "#a5b4fc",
                letterSpacing: "-0.03em",
              }}>
                ₹99<span style={{ fontSize: "0.72rem", fontWeight: 600 }}>/mo</span>
                {" "}·{" "}
                $3<span style={{ fontSize: "0.72rem", fontWeight: 600 }}>/mo</span>
              </span>
              <span style={{ fontSize: "0.68rem", color: "rgba(255,255,255,0.3)", display: "block", marginTop: 2 }}>
                Creator Lite · Spark ₹499 · Odyssey ₹999
              </span>
            </div>
            <span style={{ marginLeft: "auto", flexShrink: 0,
              background: "rgba(72,187,120,0.15)",
              border: "1px solid rgba(72,187,120,0.3)",
              borderRadius: "6px", padding: "3px 9px",
              fontSize: "0.68rem", fontWeight: 800,
              color: "#68d391", letterSpacing: "0.5px",
            }}>SAVE 25%</span>
          </div>

          {/* CTA primary — shimmer button */}
          <a href="/pricing"
            className="img-pop-cta-primary"
            onClick={onClose}
            style={{
              display: "flex", alignItems: "center",
              justifyContent: "center", gap: "8px",
              width: "100%", padding: "13px 20px",
              background: "linear-gradient(270deg, #667eea, #764ba2, #f093fb, #667eea)",
              backgroundSize: "300% 100%",
              animation: "imgShimmer 4s linear infinite",
              color: "#fff", borderRadius: "12px",
              fontSize: "0.96rem", fontWeight: 800,
              textDecoration: "none",
              boxShadow: "0 6px 28px rgba(102,126,234,0.45)",
              transition: "transform 0.25s, box-shadow 0.25s",
              letterSpacing: "-0.01em",
            }}
          >
            🚀 See Creator Plans — 25% OFF
          </a>

          {/* Secondary dismiss */}
          <button
            className="img-pop-cta-secondary"
            onClick={onClose}
            style={{
              display: "block", width: "100%", marginTop: "10px",
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.09)",
              borderRadius: "10px", padding: "9px",
              color: "rgba(255,255,255,0.35)", fontSize: "0.82rem",
              cursor: "pointer", transition: "all 0.2s", fontWeight: 500,
            }}
          >
            Continue without image generation
          </button>
        </div>
      </div>
    </>
  );
}