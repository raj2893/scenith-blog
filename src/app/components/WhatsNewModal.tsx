"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { FiX } from "react-icons/fi";
import {
  WHATS_NEW, isBadgeActive, hasSeenAnnouncement, markAnnouncementSeen, trackNew, newHref,
} from "../whatsNew";
import "./CSS/whats-new.css";

/* Routes where the announcement would be redundant or intrusive. */
const SKIP = [
  "/create-ai-content/content-engine",
  "/login", "/signup", "/verify-email",
  "/admin", "/admin-portal",
  "/projecteditor",
];

export default function WhatsNewModal() {
  const pathname = usePathname() || "";
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!isBadgeActive()) return;
    if (SKIP.some((p) => pathname.startsWith(p))) return;
    if (hasSeenAnnouncement()) return;

    let token: string | null = null;
    try { token = localStorage.getItem("token"); } catch { /* ignore */ }
    if (!token) return; // logged-out visitors get badges, not a modal

    // Let the page paint first — never compete with initial render.
    const t = window.setTimeout(() => {
      setOpen(true);
      markAnnouncementSeen();
      trackNew("whatsnew_modal_shown", { path: pathname });
    }, 1200);
    return () => window.clearTimeout(t);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close("esc"); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = (how: string) => {
    trackNew("whatsnew_modal_dismissed", { how });
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="wn-overlay" onClick={(e) => { if (e.target === e.currentTarget) close("backdrop"); }}>
      <div className="wn-modal" role="dialog" aria-modal="true" aria-labelledby="wn-title">
        <button className="wn-modal__close" onClick={() => close("x")} aria-label="Close">
          <FiX size={14} />
        </button>

        <div className="wn-modal__hero">
          <span className="wn-modal__tag">New in Scenith</span>
          <h2 id="wn-title" className="wn-modal__title">Content Engine</h2>
          <p className="wn-modal__sub">
            Stop planning content in a spreadsheet. Describe your brand once and get a
            full multi-platform calendar — then create every asset without leaving Scenith.
          </p>
        </div>

        <div className="wn-modal__body">
          <ul className="wn-list">
            <li>
              <span className="wn-list__ico">📅</span>
              <span className="wn-list__txt">
                <strong>A month planned in one pass</strong>
                Hooks, captions, CTAs and shot direction for every day.
              </span>
            </li>
            <li>
              <span className="wn-list__ico">🎯</span>
              <span className="wn-list__txt">
                <strong>Instagram, TikTok, YouTube and X</strong>
                One calendar, with a tailored version per platform.
              </span>
            </li>
            <li>
              <span className="wn-list__ico">⚡</span>
              <span className="wn-list__txt">
                <strong>Straight into the AI studio</strong>
                Send any slot to voice, image or video generation.
              </span>
            </li>
          </ul>

          
            className="wn-cta"
            href={newHref("whatsnew_modal")}
          <a onClick={() => trackNew("whatsnew_modal_cta", {})}
          >
            Open Content Engine →
          </a>
          <button className="wn-later" onClick={() => close("later")}>Maybe later</button>
          <p className="wn-note">Included with Creator Lite, Spark and Odyssey.</p>
        </div>
      </div>
    </div>
  );
}