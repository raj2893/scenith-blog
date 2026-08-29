"use client";

import React, { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import { isBadgeActive, trackNew, newHref, WHATS_NEW } from "../whatsNew";
import "./CSS/whats-new.css";

const KEY = `scenith_studiocard_${WHATS_NEW.id}`;

export default function StudioNewFeatureCard() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!isBadgeActive()) return;
    try { if (localStorage.getItem(KEY) === "1") return; } catch { return; }
    setShow(true);
    trackNew("studio_card_shown", {});
  }, []);

  const dismiss = () => {
    try { localStorage.setItem(KEY, "1"); } catch { /* ignore */ }
    trackNew("studio_card_dismissed", {});
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="wn-studio">
      <span className="wn-studio__ico">🗓️</span>
      <div className="wn-studio__txt">
        <p className="wn-studio__ttl">
          Content Engine <span className="new-badge">New</span>
        </p>
        <p className="wn-studio__sub">
          Plan a full multi-platform content calendar with AI, then generate every asset here.
        </p>
      </div>
      
      <a  className="wn-studio__go"
        href={newHref("studio_card")}
        onClick={() => trackNew("studio_card_cta", {})}
      >
        Try it
      </a>
      <button className="wn-studio__x" onClick={dismiss} aria-label="Dismiss">
        <FiX size={15} />
      </button>
    </div>
  );
}