"use client";

import React, { useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { FiX, FiArrowRight, FiCheck } from "react-icons/fi";
import {
  isBadgeActive, hasSeenAnnouncement, markAnnouncementSeen, trackNew, newHref,
} from "../whatsNew";
import "./CSS/whats-new.css";

const SKIP = ["/login", "/signup", "/verify-email", "/admin", "/admin-portal", "/projecteditor"];

type Access = "unknown" | "yes" | "no";

/* ── Beat 2: how it helps. Static example, mirrors the real data model. ── */
const DAY = [
  { p: "Instagram", n: 3 }, { p: "TikTok", n: 2 },
  { p: "YouTube", n: 2 },   { p: "X", n: 1 },
];

/* ── Beat 3: the end-to-end loop. ── */
const HOW = [
  ["Describe your brand", "Niche, audience, goal, platforms. One time."],
  ["Get your calendar", "Every day filled with hooks, captions and CTAs."],
  ["Edit or regenerate", "Keep what works, re-roll what doesn't."],
  ["Create with Scenith", "Send any piece to AI image, video or voice."],
  ["Upload and mark posted", "Everything stays in one place."],
];

export default function WhatsNewModal() {
  const pathname = usePathname() || "";
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [access, setAccess] = useState<Access>("unknown");

  const show = useCallback((trigger: string, remember = true) => {
    setStep(0);
    setOpen(true);
    if (remember) markAnnouncementSeen();
    trackNew("content_engine_view", { trigger });

    /* Lazy import keeps the API layer out of the initial bundle.
       One call, once per user — only when the tour actually opens. */
    (async () => {
      try {
        const { contentEngineApi } = await import(
          "../(main)/create-ai-content/content-engine/contentEngineApi"
        );
        const ent = await contentEngineApi.getEntitlements();
        setAccess(ent.hasAccess ? "yes" : "no");
      } catch {
        setAccess("no"); // fail closed — show the unlock path
      }
    })();
  }, []);

  useEffect(() => {
    if (SKIP.some((p) => pathname.startsWith(p))) return;

    /* Manual re-entry: ?tour=1 always opens it. */
    try {
      if (new URLSearchParams(window.location.search).get("tour") === "1") {
        show("manual", false);
        return;
      }
    } catch { /* ignore */ }

    let token: string | null = null;
    try { token = localStorage.getItem("token"); } catch { /* private mode */ }

    /* ── On the Content Engine page itself: show EVERY visit to anyone who
       doesn't have access (signed out, or free plan). Paid users never see it. ── */
    if (pathname.startsWith("/create-ai-content/content-engine")) {
      if (!token) {
        // Signed out — no entitlement call possible, no access by definition.
        const t = window.setTimeout(() => {
          setAccess("no");
          setStep(0);
          setOpen(true);
          trackNew("content_engine_view", { trigger: "ce_page_signedout" });
        }, 900);
        return () => window.clearTimeout(t);
      }

      let cancelled = false;
      const t = window.setTimeout(async () => {
        try {
          const { contentEngineApi } = await import(
            "../(main)/create-ai-content/content-engine/contentEngineApi"
          );
          const ent = await contentEngineApi.getEntitlements();
          if (cancelled) return;
          if (ent.hasAccess) return;          // paid user — never interrupt
          setAccess("no");
          setStep(0);
          setOpen(true);
          trackNew("content_engine_view", { trigger: "ce_page_free" });
        } catch { /* stay silent on error */ }
      }, 900);
      return () => { cancelled = true; window.clearTimeout(t); };
    }

    /* ── Everywhere else: the original once-ever announcement. ── */
    if (!isBadgeActive() || hasSeenAnnouncement()) return;
    if (!token) return;

    const t = window.setTimeout(() => show("auto"), 1200);
    return () => window.clearTimeout(t);
  }, [pathname, show]);

  const close = (how: string) => {
    trackNew("content_engine_tour_exit", { how, step: step + 1 });
    setOpen(false);
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close("esc"); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, step]);

  if (!open) return null;

  const next = () => {
    trackNew("content_engine_tour_step", { from: step + 1 });
    setStep((s) => Math.min(3, s + 1));
  };

  return (
    <div className="wn-overlay" onClick={(e) => { if (e.target === e.currentTarget) close("backdrop"); }}>
      <div className="wn-modal wn-modal--tour" role="dialog" aria-modal="true" aria-labelledby="wn-title">
        <button className="wn-modal__close" onClick={() => close("x")} aria-label="Close"><FiX size={14} /></button>

        {/* ─── BEAT 1 — what launched ─── */}
        {step === 0 && (
          <>
            <div className="wn-modal__hero">
              <span className="wn-modal__tag">New in Scenith</span>
              <h2 id="wn-title" className="wn-modal__title">Stop wondering what to post next.</h2>
              <p className="wn-modal__sub">
                Scenith already makes your images, videos and voiceovers. Content Engine
                decides <em>what</em> to make — a full calendar across Instagram, TikTok,
                YouTube and X.
              </p>
            </div>
            <div className="wn-modal__body">
              <p className="wn-q">Sound familiar?</p>
              <ul className="wn-pains">
                <li>Out of ideas by Wednesday every week</li>
                <li>Rewriting the same idea four times, by hand</li>
                <li>Filming Sunday, then losing track of what goes where</li>
              </ul>
            </div>
          </>
        )}

        {/* ─── BEAT 2 — how it helps ─── */}
        {step === 1 && (
          <>
            <div className="wn-modal__hero wn-modal__hero--sm">
              <h2 className="wn-modal__title">One day. Eight pieces. Already written.</h2>
            </div>
            <div className="wn-modal__body">
              <div className="wn-day">
                {DAY.map((d) => (
                  <div key={d.p} className="wn-day__col">
                    <span className="wn-day__n">{d.n}</span>
                    <span className="wn-day__p">{d.p}</span>
                  </div>
                ))}
              </div>
              <p className="wn-day__cap">
                Every piece gets its own hook, caption, CTA and shot direction — written
                for that platform, not copy-pasted across all four.
              </p>
            </div>
          </>
        )}

        {/* ─── BEAT 3 — end to end ─── */}
        {step === 2 && (
          <>
            <div className="wn-modal__hero wn-modal__hero--sm">
              <h2 className="wn-modal__title">How it works, start to finish</h2>
            </div>
            <div className="wn-modal__body">
              <ol className="wn-how">
                {HOW.map(([t, b], i) => (
                  <li key={t}>
                    <span className="wn-how__n">{i + 1}</span>
                    <div><strong>{t}</strong><span>{b}</span></div>
                  </li>
                ))}
              </ol>
            </div>
          </>
        )}

        {/* ─── BEAT 4 — unlock (entitlement-aware) ─── */}
        {step === 3 && (
          <>
            <div className="wn-modal__hero wn-modal__hero--sm">
              <h2 className="wn-modal__title">
                {access === "yes" ? "It's already on your plan." : "Plan your next 25 days."}
              </h2>
            </div>
            <div className="wn-modal__body">
              {access === "yes" ? (
                <p className="wn-unlock__note">
                  Content Engine is included with your subscription. Build your first plan
                  whenever you're ready.
                </p>
              ) : (
                <>
                  <div className="wn-unlock">
                    <div className="wn-unlock__row">
                      <strong>Creator Lite</strong>
                      <span className="wn-unlock__price">₹799<em>/mo</em></span>
                    </div>
                    <ul className="wn-unlock__list">
                      <li><FiCheck size={12} /> 25 planning days every month</li>
                      <li><FiCheck size={12} /> 1,000 credits + 50,000 voice characters</li>
                      <li><FiCheck size={12} /> Every AI model unlocked, no watermark</li>
                    </ul>
                  </div>
                  <p className="wn-unlock__note">
                    Planning days are a total for the month — one 25-day plan, or a 15 and a 10.
                    Also included on Creator Spark (60 days) and Creator Odyssey (90).
                  </p>
                </>
              )}
            </div>
          </>
        )}

        {/* ─── Footer ─── */}
        <div className="wn-foot">
          <div className="wn-dots" role="tablist" aria-label="Tour progress">
            {[0, 1, 2, 3].map((i) => (
              <button
                key={i}
                className={`wn-dot ${i === step ? "is-on" : ""}`}
                onClick={() => setStep(i)}
                aria-label={`Step ${i + 1}`}
                aria-selected={i === step}
                role="tab"
              />
            ))}
          </div>

          {step < 3 ? (
            <div className="wn-foot__btns">
              <button className="wn-later" onClick={() => close("skip")}>Skip</button>
              <button className="wn-cta wn-cta--inline" onClick={next}>
                Next <FiArrowRight size={14} />
              </button>
            </div>
          ) : (
            <div className="wn-foot__btns">
              {access === "no" ? (
                <>
                  
                  <a  className="wn-cta wn-cta--inline"
                    href="/pricing?src=ce_tour&plan=creator_lite"
                    onClick={() => trackNew("content_engine_upgrade_click", { step: 4, plan: "CREATOR_LITE" })}
                  >
                    Unlock for ₹799/mo →
                  </a>
                  <button className="wn-later" onClick={() => close("later")}>Maybe later</button>
                </>
              ) : (
                
                <a  className="wn-cta wn-cta--inline"
                  href={newHref("ce_tour")}
                  onClick={() => trackNew("content_engine_cta_click", { source: "tour_final" })}
                >
                  Open Content Engine →
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}