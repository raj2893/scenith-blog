"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { API_BASE_URL } from '../../config';
import { FaTimes } from 'react-icons/fa';
import React from 'react';

/* ─────────────────────────────────────────────────────────────────────
   INTERFACES  — unchanged from original
───────────────────────────────────────────────────────────────────── */
interface PricingPlan {
  name: string;
  role: 'BASIC' | 'CREATOR_LITE' | 'CREATOR' | 'STUDIO';
  price: number;
  originalPrice?: number;
  currency: string;
  features: string[];
  ttsLimit: number;
  popular?: boolean;
  symbol?: string;
}

interface UserProfile {
  email: string;
  firstName: string;
  lastName: string;
  picture: string | null;
  googleAuth: boolean;
  role: string;
}

interface IndividualPlan {
  name: string;
  planType: 'VIDEO_GEN_PRO' | 'VIDEO_GEN_ELITE';
  price: number;
  originalPrice?: number;
  currency: string;
  features: string[];
  symbol?: string;
  service: string;
}

/* ─────────────────────────────────────────────────────────────────────
   GLOBAL STYLES — injected once, replaces pricing.css
───────────────────────────────────────────────────────────────────── */
const injectStyles = () => {
  if (typeof document === 'undefined') return;
  const ID = 'scenith-v2-styles';
  if (document.getElementById(ID)) return;
  const s = document.createElement('style');
  s.id = ID;
  s.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Cabinet+Grotesk:wght@400;500;700;800;900&family=Satoshi:wght@400;500;700&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    .sc-root {
      font-family: 'Satoshi', 'DM Sans', sans-serif;
      background: #06060f;
      color: #e2e2ef;
      min-height: 100vh;
      overflow-x: hidden;
    }

    /* ── HERO ── */
    .sc-hero {
      position: relative;
      padding: 110px 24px 72px;
      text-align: center;
      overflow: hidden;
    }
    .sc-hero-orb1 {
      position: absolute; pointer-events: none;
      width: 700px; height: 700px; border-radius: 50%;
      top: -280px; left: 50%; transform: translateX(-50%);
      background: radial-gradient(circle, rgba(99,85,220,0.22) 0%, transparent 65%);
      filter: blur(1px);
    }
    .sc-hero-orb2 {
      position: absolute; pointer-events: none;
      width: 400px; height: 400px; border-radius: 50%;
      top: 60px; right: -100px;
      background: radial-gradient(circle, rgba(236,72,153,0.10) 0%, transparent 60%);
    }
    .sc-hero-grid {
      position: absolute; inset: 0; pointer-events: none; opacity: 0.028;
      background-image:
        linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px);
      background-size: 56px 56px;
    }
    .sc-hero-inner { position: relative; max-width: 840px; margin: 0 auto; }

    .sc-badge-row { margin-bottom: 24px; }
    .sc-badge {
      display: inline-flex; align-items: center; gap: 8px;
      padding: 6px 18px; border-radius: 999px;
      background: rgba(99,85,220,0.14);
      border: 1px solid rgba(99,85,220,0.45);
      font-size: 11.5px; font-weight: 700; letter-spacing: 0.11em;
      color: #a899f5; text-transform: uppercase;
    }
    .sc-badge-dot {
      width: 6px; height: 6px; border-radius: 50%;
      background: #6355dc; box-shadow: 0 0 8px #6355dc;
      animation: sc-blink 1.5s ease-in-out infinite;
    }
    @keyframes sc-blink { 0%,100%{opacity:1} 50%{opacity:0.25} }

    .sc-h1 {
      font-family: 'Cabinet Grotesk', sans-serif;
      font-size: clamp(38px, 7.5vw, 72px);
      font-weight: 900; line-height: 1.04; letter-spacing: -0.035em;
      margin-bottom: 22px;
    }
    .sc-grad {
      background: linear-gradient(120deg, #a899f5 0%, #f06cbe 45%, #ff9a5c 100%);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
    }
    .sc-hero-sub {
      font-size: 17px; color: #7878a0; line-height: 1.65;
      max-width: 500px; margin: 0 auto 48px;
    }

    /* ── TABS ── */
    .sc-tabs {
      display: inline-flex;
      background: rgba(255,255,255,0.038);
      border: 1px solid rgba(255,255,255,0.07);
      border-radius: 16px; padding: 5px; gap: 4px;
      margin-bottom: 18px;
    }
    .sc-tab {
      display: flex; align-items: center; gap: 8px;
      padding: 12px 30px; border-radius: 12px; border: none;
      font-family: 'Satoshi', sans-serif;
      font-size: 14px; font-weight: 700; cursor: pointer;
      color: #55557a; background: transparent;
      transition: all 0.22s;
    }
    .sc-tab.active {
      background: linear-gradient(135deg, #6355dc 0%, #8b5cf6 100%);
      color: #fff;
      box-shadow: 0 4px 22px rgba(99,85,220,0.45);
    }
    .sc-tab-hint {
      display: inline-block;
      font-size: 13px; color: #44445e;
      background: rgba(255,255,255,0.026);
      border: 1px solid rgba(255,255,255,0.055);
      border-radius: 8px; padding: 8px 20px;
    }

    /* ── SECTION WRAPPER ── */
    .sc-section { max-width: 1200px; margin: 0 auto; padding: 64px 24px; }
    .sc-section-dark { background: #09090f; }
    .sc-section-title {
      font-family: 'Cabinet Grotesk', sans-serif;
      font-size: 30px; font-weight: 800; text-align: center;
      letter-spacing: -0.025em; margin-bottom: 52px;
    }

    /* ── BUNDLE GRID ── */
    .sc-bundle-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(295px, 1fr));
      gap: 22px; align-items: start;
    }

    /* ── PRICING CARD ── */
    
    .sc-card:hover {
      border-color: rgba(99,85,220,0.38);
      box-shadow: 0 24px 64px rgba(99,85,220,0.11);
    }
    .sc-card.sc-popular {
      border: 2px solid #6355dc;
      box-shadow: 0 0 0 1px rgba(99,85,220,0.18), 0 32px 80px rgba(99,85,220,0.22);
      transform: translateY(-14px);
    }
    .sc-card.sc-current {
      border: 2px solid #10b981;
      box-shadow: 0 0 0 1px rgba(16,185,129,0.15);
    }

    .sc-card-badge {
      position: absolute; top: -13px; left: 50%; transform: translateX(-50%);
      padding: 5px 20px; border-radius: 999px;
      font-size: 11px; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase;
      white-space: nowrap;
    }
    .sc-badge-popular {
      background: linear-gradient(135deg, #6355dc, #8b5cf6);
      color: #fff; box-shadow: 0 4px 18px rgba(99,85,220,0.55);
    }
    .sc-badge-studio {
      background: linear-gradient(135deg, #f59e0b, #f97316);
      color: #1a0800; box-shadow: 0 4px 18px rgba(245,158,11,0.45);
    }
    .sc-badge-current {
      background: linear-gradient(135deg, #10b981, #059669);
      color: #fff;
    }
    .sc-badge-downgrade {
      background: rgba(239,68,68,0.12);
      border: 1px solid rgba(239,68,68,0.35);
      color: #f87171;
    }

    .sc-price-area { margin-bottom: 10px; }
    .sc-strike { font-size: 14px; color: #3a3a52; text-decoration: line-through; margin-bottom: 4px; }
    .sc-price-row { display: flex; align-items: baseline; gap: 2px; }
    .sc-sym { font-size: 22px; font-weight: 700; color: #a899f5; }
    
    .sc-loading-price { font-size: 16px; color: #3a3a52; animation: sc-shimmer 1.4s ease-in-out infinite; }
    @keyframes sc-shimmer { 0%,100%{opacity:0.35} 50%{opacity:1} }

    .sc-save-pill {
      display: inline-flex; align-items: center; gap: 5px; margin-top: 8px;
      padding: 3px 12px; border-radius: 999px;
      background: rgba(16,185,129,0.10); border: 1px solid rgba(16,185,129,0.28);
      color: #34d399; font-size: 11px; font-weight: 700;
    }
    .sc-forever { font-size: 13px; color: #44445e; margin-top: 8px; }

    .sc-feat.sc-feat-hl { color: #d4d4f0; font-weight: 500; }
    .sc-feat-icon { flex-shrink: 0; margin-top: 2px; font-size: 12px; }
    .sc-feat-icon.star { color: #a899f5; }
    .sc-feat-icon.check { color: #3a3a52; }
/* ── PRICING CARD ── */
    .sc-card {
      position: relative; display: flex; flex-direction: column;
      background: #0d0d1c;
      border: 1px solid rgba(255,255,255,0.07);
      border-radius: 20px; padding: 24px 20px 20px;
      transition: border-color 0.28s, box-shadow 0.28s;
    }
      .sc-plan-icon {
      width: 42px; height: 42px; border-radius: 12px;
      background: rgba(99,85,220,0.1);
      border: 1px solid rgba(99,85,220,0.2);
      display: flex; align-items: center; justify-content: center;
      margin-bottom: 12px;
    }
    .sc-plan-icon svg { width: 22px; height: 22px; }

    .sc-plan-tagline { font-size: 12px; color: #55557a; margin-bottom: 3px; line-height: 1.4; }
    .sc-plan-name {
      font-family: 'Cabinet Grotesk', sans-serif;
      font-size: 20px; font-weight: 900; letter-spacing: -0.02em; margin-bottom: 14px;
    }
      .sc-num {
      font-family: 'Cabinet Grotesk', sans-serif;
      font-size: 44px; font-weight: 900; line-height: 1; letter-spacing: -0.04em;
    }
    .sc-per { font-size: 13px; color: #55557a; margin-left: 4px; }
    .sc-free-price {
      font-family: 'Cabinet Grotesk', sans-serif;
      font-size: 36px; font-weight: 900; color: #6a6a8a;
    }
      .sc-features {
      list-style: none; flex: 1;
      display: flex; flex-direction: column; gap: 8px;
      margin: 14px 0 18px;
    }
    .sc-feat {
      display: flex; align-items: flex-start; gap: 8px;
      font-size: 12.5px; color: #7878a0; line-height: 1.4;
    }
      .sc-btn {
      width: 100%; padding: 12px 16px; border-radius: 11px; border: none;
      font-family: 'Satoshi', sans-serif;
      font-size: 13.5px; font-weight: 700; letter-spacing: 0.015em;
      cursor: pointer; transition: all 0.22s;
    }
    .sc-btn:disabled { opacity: 0.45; cursor: not-allowed; transform: none !important; box-shadow: none !important; }
    .sc-btn-ghost {
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.09); color: #6a6a8a;
    }
    .sc-btn-ghost:hover:not(:disabled) {
      background: rgba(255,255,255,0.07); color: #b0b0cc;
      border-color: rgba(255,255,255,0.16);
    }
    .sc-btn-primary {
      background: linear-gradient(135deg, #6355dc 0%, #8b5cf6 100%);
      color: #fff; box-shadow: 0 6px 26px rgba(99,85,220,0.42);
    }
    .sc-btn-primary:hover:not(:disabled) {
      box-shadow: 0 10px 38px rgba(99,85,220,0.62); transform: translateY(-1px);
    }
    .sc-btn-gold {
      background: linear-gradient(135deg, #f59e0b 0%, #f97316 100%);
      color: #1a0800; box-shadow: 0 6px 26px rgba(245,158,11,0.32);
    }
    .sc-btn-gold:hover:not(:disabled) {
      box-shadow: 0 10px 38px rgba(245,158,11,0.5); transform: translateY(-1px);
    }
    .sc-btn-current {
      background: rgba(16,185,129,0.09);
      border: 1px solid rgba(16,185,129,0.3); color: #34d399;
    }

    /* ── CALLOUT ── */
    .sc-callout {
      display: flex; align-items: center; gap: 16px;
      background: rgba(99,85,220,0.07);
      border: 1px solid rgba(99,85,220,0.2);
      border-radius: 14px; padding: 16px 24px;
      margin-top: 38px; max-width: 700px; margin-left: auto; margin-right: auto;
    }
    .sc-callout-icon { font-size: 22px; flex-shrink: 0; }
    .sc-callout-text { font-size: 14px; color: #7878a0; line-height: 1.6; }

    /* ── CINEAI SPOTLIGHT ── */
    .sc-spotlight {
      position: relative; overflow: hidden;
      background: #0d0d1c;
      border: 2px solid #6355dc;
      border-radius: 28px; padding: 40px 36px;
      max-width: 680px; margin: 0 auto;
      box-shadow: 0 0 80px rgba(99,85,220,0.2);
    }
    .sc-spotlight::before {
      content: ''; position: absolute; inset: 0; pointer-events: none;
      background: radial-gradient(ellipse 70% 55% at 50% 0%, rgba(99,85,220,0.14) 0%, transparent 70%);
    }
    .sc-spotlight-inner { position: relative; }
    .sc-spotlight-tag {
      font-size: 11px; color: #a899f5; font-weight: 700;
      letter-spacing: 0.14em; text-transform: uppercase; margin-bottom: 8px;
    }
    .sc-spotlight-name {
      font-family: 'Cabinet Grotesk', sans-serif;
      font-size: 36px; font-weight: 900; letter-spacing: -0.03em; margin-bottom: 6px;
    }
    .sc-spotlight-sub { font-size: 15px; color: #6a6a8a; margin-bottom: 28px; }
    .sc-spotlight-price-row {
      display: flex; align-items: baseline; gap: 12px; margin-bottom: 28px; flex-wrap: wrap;
    }
    .sc-spotlight-strike { font-size: 16px; color: #3a3a52; text-decoration: line-through; }
    .sc-spotlight-price {
      font-family: 'Cabinet Grotesk', sans-serif;
      font-size: 60px; font-weight: 900; line-height: 1; letter-spacing: -0.04em;
    }
    .sc-spotlight-period { font-size: 16px; color: #55557a; }
    .sc-spotlight-ribbon {
      position: absolute; top: 20px; right: -2px;
      background: linear-gradient(135deg, #f59e0b, #f97316);
      color: #1a0800; font-size: 11px; font-weight: 800;
      padding: 5px 18px 5px 14px; border-radius: 4px 0 0 4px;
      box-shadow: -4px 4px 14px rgba(245,158,11,0.35);
    }
    .sc-spotlight-feats {
      display: grid; grid-template-columns: 1fr 1fr; gap: 10px;
      margin-bottom: 28px;
    }
    @media(max-width:500px) { .sc-spotlight-feats { grid-template-columns: 1fr; } }

    /* ── COMPARISON TABLE ── */
    .sc-table-wrap {
      overflow-x: auto;
      border-radius: 18px;
      border: 1px solid rgba(255,255,255,0.055);
    }
    .sc-table { width: 100%; border-collapse: collapse; font-size: 14px; min-width: 640px; }
    .sc-table th {
      padding: 14px 18px; text-align: center;
      font-size: 11.5px; font-weight: 800; letter-spacing: 0.09em; text-transform: uppercase;
      color: #55557a; border-bottom: 1px solid rgba(255,255,255,0.055);
      background: rgba(255,255,255,0.018);
    }
    .sc-table th:first-child { text-align: left; }
    .sc-table th.sc-th-hl { color: #a899f5; }
    .sc-table td {
      padding: 13px 18px; border-bottom: 1px solid rgba(255,255,255,0.038);
      color: #7878a0; text-align: center;
    }
    .sc-table td:first-child { text-align: left; color: #b0b0cc; font-weight: 500; }
    .sc-table td.sc-td-hl { color: #a899f5; font-weight: 600; }
    .sc-table tr:last-child td { border-bottom: none; }
    .sc-table tr:nth-child(even) td { background: rgba(255,255,255,0.012); }
    .sc-yes { color: #34d399 !important; font-weight: 700; }
    .sc-no { color: #2e2e42 !important; }

    /* ── USE CASES ── */
    .sc-use-grid {
      display: grid; grid-template-columns: repeat(auto-fit, minmax(220px,1fr)); gap: 20px;
    }
    .sc-use-card {
      background: #0d0d1c;
      border: 1px solid rgba(255,255,255,0.062);
      border-radius: 20px; padding: 28px 24px;
      transition: border-color 0.22s;
    }
    .sc-use-card:hover { border-color: rgba(99,85,220,0.35); }
    .sc-use-icon { font-size: 32px; margin-bottom: 14px; }
    .sc-use-title {
      font-family: 'Cabinet Grotesk', sans-serif;
      font-size: 17px; font-weight: 800; margin-bottom: 10px;
    }
    .sc-use-body { font-size: 13.5px; color: #6a6a8a; line-height: 1.65; }

    /* ── TRUST BAR ── */
    .sc-trust {
      display: flex; flex-wrap: wrap; justify-content: center;
      border-top: 1px solid rgba(255,255,255,0.048);
      border-bottom: 1px solid rgba(255,255,255,0.048);
      background: rgba(255,255,255,0.018);
      padding: 10px 16px;
    }
    .sc-trust-item {
      display: flex; align-items: center; gap: 10px;
      padding: 12px 22px;
      border-right: 1px solid rgba(255,255,255,0.048);
    }
    .sc-trust-item:last-child { border-right: none; }
    .sc-trust-ico { font-size: 20px; }
    .sc-trust-lbl { font-size: 13px; font-weight: 700; color: #c8c8e4; }
    .sc-trust-sub { font-size: 12px; color: #44445e; }

    /* ── FAQ ── */
    .sc-faq-wrap { max-width: 780px; margin: 0 auto; padding: 64px 24px; }
    .sc-faq-item { border-bottom: 1px solid rgba(255,255,255,0.055); }
    .sc-faq-q {
      display: flex; justify-content: space-between; align-items: center;
      padding: 20px 2px; cursor: pointer; user-select: none;
      font-size: 15px; font-weight: 600; color: #c0c0de;
      transition: color 0.18s;
    }
    .sc-faq-q:hover { color: #a899f5; }
    .sc-faq-chev { color: #44445e; font-size: 18px; transition: transform 0.22s; }
    .sc-faq-chev.open { transform: rotate(180deg); }
    .sc-faq-a { padding: 0 4px 20px; font-size: 14px; color: #7878a0; line-height: 1.78; }

    /* ── LOADING ── */
    .sc-loading {
      display: flex; flex-direction: column;
      align-items: center; justify-content: center;
      min-height: 100vh; gap: 20px;
    }
    .sc-spinner {
      width: 46px; height: 46px; border-radius: 50%;
      border: 3px solid rgba(99,85,220,0.18);
      border-top-color: #6355dc;
      animation: sc-spin 0.75s linear infinite;
    }
    @keyframes sc-spin { to { transform: rotate(360deg); } }
    .sc-loading p { font-size: 14px; color: #7878a0; }

    /* ── MODAL ── */
    .sc-overlay {
      position: fixed; inset: 0; z-index: 9999;
      background: rgba(0,0,0,0.82); backdrop-filter: blur(10px);
      display: flex; align-items: center; justify-content: center; padding: 24px;
    }
    .sc-modal {
      position: relative;
      background: #0d0d1c;
      border: 1px solid rgba(99,85,220,0.32);
      border-radius: 26px; padding: 42px 36px;
      width: 100%; max-width: 420px;
      box-shadow: 0 50px 120px rgba(0,0,0,0.65);
    }
    .sc-modal-close {
      position: absolute; top: 16px; right: 16px;
      background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.09);
      border-radius: 9px; width: 34px; height: 34px;
      display: flex; align-items: center; justify-content: center;
      color: #7878a0; cursor: pointer; transition: all 0.18s;
    }
    .sc-modal-close:hover { background: rgba(255,255,255,0.1); color: #fff; }
    .sc-modal-logo {
      font-family: 'Cabinet Grotesk', sans-serif;
      font-size: 30px; font-weight: 900; letter-spacing: -0.03em; text-align: center;
      background: linear-gradient(120deg, #a899f5, #f06cbe);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
      margin-bottom: 6px;
    }
    .sc-modal-sub { font-size: 14px; color: #55557a; text-align: center; margin-bottom: 30px; }
    .sc-modal-form { display: flex; flex-direction: column; gap: 14px; }
    .sc-modal-input {
      width: 100%; padding: 14px 16px; border-radius: 12px;
      background: rgba(255,255,255,0.045); border: 1px solid rgba(255,255,255,0.09);
      color: #e2e2ef; font-family: 'Satoshi', sans-serif; font-size: 14px;
      outline: none; transition: border-color 0.18s;
    }
    .sc-modal-input:focus { border-color: rgba(99,85,220,0.6); }
    .sc-modal-input::placeholder { color: #3a3a52; }
    .sc-modal-error {
      background: rgba(239,68,68,0.09); border: 1px solid rgba(239,68,68,0.3);
      color: #f87171; border-radius: 10px; padding: 12px 16px; font-size: 13px;
      margin-bottom: 14px;
    }
    .sc-modal-or {
      display: flex; align-items: center; gap: 12px;
      font-size: 11px; color: #3a3a52; font-weight: 700;
      letter-spacing: 0.1em; margin: 4px 0;
    }
    .sc-modal-or::before, .sc-modal-or::after {
      content: ''; flex: 1; height: 1px; background: rgba(255,255,255,0.055);
    }
    .sc-modal-link { text-align: center; font-size: 13px; color: #55557a; margin-top: 14px; }
    .sc-modal-link a { color: #a899f5; text-decoration: none; font-weight: 700; }
    .sc-modal-link a:hover { text-decoration: underline; }
    .sc-modal-loading-overlay {
      position: absolute; inset: 0; border-radius: 26px;
      background: rgba(6,6,15,0.88); backdrop-filter: blur(4px);
      display: flex; flex-direction: column; align-items: center; justify-content: center;
      gap: 14px; z-index: 10;
    }
    .sc-modal-loading-overlay p { font-size: 14px; color: #7878a0; }
    #googleSignInButtonPricing { display: flex; justify-content: center; }

    /* ── FOOTER ── */
    .sc-footer {
      text-align: center; padding: 32px 24px;
      border-top: 1px solid rgba(255,255,255,0.048);
      font-size: 13px; color: #3a3a52;
    }

    @media(max-width:660px) {
      .sc-card.sc-popular { transform: none; }
      .sc-trust-item { padding: 10px 12px; }
      .sc-tab { padding: 10px 18px; font-size: 13px; }
      .sc-modal { padding: 32px 22px; }
      .sc-spotlight { padding: 28px 22px; }
    }
  `;
  document.head.appendChild(s);
};

/* ─────────────────────────────────────────────────────────────────────
   HIGHLIGHT INDEXES per plan role
───────────────────────────────────────────────────────────────────── */
const HL: Record<string, number[]> = {
  BASIC: [],
  CREATOR_LITE: [0, 1, 2,3],
  CREATOR: [0, 1, 2,3],
  STUDIO: [0, 1, 2,3],
};

/* ─────────────────────────────────────────────────────────────────────
   FAQ DATA
───────────────────────────────────────────────────────────────────── */
const FAQ = [
  { q: 'What is AI voice generation?', a: 'AI voice generation uses advanced text-to-speech technology to convert written text into natural-sounding speech. Scenith offers 30+ premium AI voices in multiple languages for various use cases including content creation, e-learning, podcasts, and commercial projects.' },
  { q: 'Can I upgrade or downgrade my plan?', a: 'Yes! You can upgrade your plan at any time. Upgrades take effect immediately. Note that downgrades from Creator Odyssey to Creator Spark are not available to maintain service quality. All plans are billed monthly with no long-term commitments.' },
  { q: 'What happens if I exceed my character limit?', a: "Your daily and monthly character limits are tracked separately. If you reach your daily limit, you can continue the next day. If you exceed your monthly limit, you'll need to upgrade to a higher tier or wait until your plan renews." },
  { q: 'Do you offer refunds?', a: 'No. We do not offer refunds on our paid plans. We recommend starting on the free plan to test quality before upgrading.' },
  { q: 'Can I use the voices for commercial projects?', a: 'All our plans allow you to use generated voices for commercial projects including YouTube videos, podcasts, advertisements, and e-learning content.' },
  { q: 'Which payment methods do you accept?', a: 'We accept all major payment methods through Razorpay (for India) and PayPal (international). This includes credit cards, debit cards, UPI, net banking, and digital wallets for secure transactions.' },
];

/* ─────────────────────────────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────────────────────────────── */
export default function PricingPageClient() {
  const router = useRouter();
  const [currentPlan, setCurrentPlan] = useState<'BASIC' | 'CREATOR_LITE' | 'CREATOR' | 'STUDIO' | 'ADMIN'>('BASIC');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState<string | null>(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [isIndianUser, setIsIndianUser] = useState<boolean | null>(null);
  const [isPricingReady, setIsPricingReady] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState<'individual' | 'bundle'>('bundle');
  const [isPaymentInProgress, setIsPaymentInProgress] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => { injectStyles(); }, []);

  useEffect(() => {
    const fetchUserProfile = async () => {
      const token = localStorage.getItem('token');
      if (!token) { setIsLoggedIn(false); return; }
      try {
        const res = await axios.get(`${API_BASE_URL}/auth/me`, {
          headers: { Authorization: `Bearer ${token}` }
        });

        // Fetch active plans separately to determine UI plan state
        const plansRes = await axios.get(`${API_BASE_URL}/api/payments/active-plans`, {
          headers: { Authorization: `Bearer ${token}` }
        }).catch(() => ({ data: [] }));

        const activePlans: string[] = plansRes.data.map((p: any) => p.planType);

        // Determine displayed plan tier from user_plans table
        if (activePlans.includes('STUDIO'))            setCurrentPlan('STUDIO');
        else if (activePlans.includes('CREATOR'))      setCurrentPlan('CREATOR');
        else if (activePlans.includes('CREATOR_LITE')) setCurrentPlan('CREATOR_LITE');
        else if (res.data.role === 'ADMIN')            setCurrentPlan('ADMIN');
        else                                            setCurrentPlan('BASIC');

        setIsLoggedIn(true);
      } catch (error) {
        console.error('Error fetching user:', error);
        setIsLoggedIn(false);
      }
    };
    fetchUserProfile();
  }, []);

  useEffect(() => {
    if (!showLoginModal) return;
    const initializeGoogleSignIn = () => {
      if (window.google && window.google.accounts) {
        window.google.accounts.id.initialize({
          client_id: '397321320139-tpd310sq9j8rdngqd9kdmhgegco52b3g.apps.googleusercontent.com',
          callback: handleGoogleLogin,
        });
        const buttonElement = document.getElementById('googleSignInButtonPricing');
        if (buttonElement) {
          window.google.accounts.id.renderButton(buttonElement, {
            theme: 'outline', size: 'large', width: 300,
          });
        }
      } else {
        setTimeout(initializeGoogleSignIn, 100);
      }
    };
    initializeGoogleSignIn();
  }, [showLoginModal]);

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (isPaymentInProgress) {
        e.preventDefault();
        e.returnValue = 'Payment is in progress. Closing this tab may affect your transaction. Are you sure you want to leave?';
        return e.returnValue;
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [isPaymentInProgress]);

  useEffect(() => {
    const detectCountry = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        const countryCode = data.country_code;
        setIsIndianUser(countryCode === 'IN');
      } catch (err) {
        console.error('Geo detection failed, defaulting to international');
        setIsIndianUser(false);
      } finally {
        setIsPricingReady(true);
      }
    };
    detectCountry();
  }, []);

  useEffect(() => {
    if (!document.getElementById('paypal-sdk')) {
      const script = document.createElement('script');
      script.src = 'https://www.paypal.com/sdk/js?client-id=AcxQJG7b-ZyAXBRp2P3GFJs-Unh0tvJHz2nlTrOaNi8vSnoy2POnyaH1ajhHXp4K8a5LJ6EIHfS3Yc3T&currency=USD';
      script.id = 'paypal-sdk';
      document.body.appendChild(script);
    }
  }, []);

  /* ── handleUpgrade — 100% original ── */
  const handleUpgrade = async (plan: PricingPlan) => {
    if (!isLoggedIn) { setShowLoginModal(true); return; }
    if (plan.role === 'BASIC' || plan.role === currentPlan) return;
    setLoading(plan.role);
    try {
      const orderResponse = await axios.post(
        `${API_BASE_URL}/api/payments/create-order`,
        { planType: plan.role, amount: plan.price, currency: plan.currency },
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      );
      const { internalOrderId, gatewayOrderId, keyId, gateway } = orderResponse.data;

      if (gateway === 'razorpay') {
        if (!document.getElementById('razorpay-script')) {
          const script = document.createElement('script');
          script.src = 'https://checkout.razorpay.com/v1/checkout.js';
          script.id = 'razorpay-script';
          document.body.appendChild(script);
        }
        const options = {
          key: keyId, amount: plan.price * 100, currency: 'INR',
          order_id: gatewayOrderId, name: 'Scenith',
          description: `Upgrade to ${plan.name}`,
          modal: { ondismiss: function() { setIsPaymentInProgress(false); setLoading(null); } },
          handler: async function (response: any) {
            setIsPaymentInProgress(true);
            try {
              await axios.post(
                `${API_BASE_URL}/api/payments/verify-razorpay`,
                { internalOrderId, razorpay_payment_id: response.razorpay_payment_id, razorpay_order_id: response.razorpay_order_id, razorpay_signature: response.razorpay_signature },
                { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
              );
              setIsPaymentInProgress(false);
              alert(`🎉 Successfully upgraded to ${plan.name}!`);
              setCurrentPlan(plan.role);
              router.push('/tools/ai-voice-generation');
            } catch (err: any) {
              console.error('Verification failed:', err);
              setIsPaymentInProgress(false);
              alert('Payment verification failed. Please contact support.');
            }
          },
          prefill: { email: userProfile?.email || '', name: userProfile ? `${userProfile.firstName} ${userProfile.lastName}`.trim() : '' },
          theme: { color: '#667eea' }
        };
        // @ts-ignore
        const rzp = new window.Razorpay(options);
        rzp.open();
      } else if (gateway === 'paypal') {
        let paypalContainer = document.getElementById('paypal-button-container');
        if (!paypalContainer) {
          paypalContainer = document.createElement('div');
          paypalContainer.id = 'paypal-button-container';
          paypalContainer.style.position = 'fixed'; paypalContainer.style.top = '50%';
          paypalContainer.style.left = '50%'; paypalContainer.style.transform = 'translate(-50%, -50%)';
          paypalContainer.style.zIndex = '1000'; paypalContainer.style.background = 'white';
          paypalContainer.style.padding = '20px'; paypalContainer.style.borderRadius = '12px';
          paypalContainer.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
          document.body.appendChild(paypalContainer);
        }
        paypalContainer.innerHTML = '';
        // @ts-ignore
        paypal.Buttons({
          createOrder: () => { return gatewayOrderId; },
          onApprove: async (data: any, actions: any) => {
            setIsPaymentInProgress(true);
            try {
              const captureResponse = await axios.post(
                `${API_BASE_URL}/api/payments/capture-paypal`,
                { internalOrderId, paypalOrderId: data.orderID },
                { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
              );
              setIsPaymentInProgress(false);
              if (captureResponse.data.status === 'SUCCESS') {
                alert(`🎉 Successfully upgraded to ${plan.name} via PayPal!`);
                setCurrentPlan(plan.role); router.push('/tools/ai-voice-generation');
              } else { alert('Payment capture failed. Please try again.'); }
            } catch (err: any) {
              console.error('PayPal capture error:', err); setIsPaymentInProgress(false);
              alert('Error capturing payment: ' + (err.response?.data || 'Unknown error'));
            } finally { if (paypalContainer) document.body.removeChild(paypalContainer); }
          },
          onCancel: () => { alert('Payment cancelled.'); if (paypalContainer) document.body.removeChild(paypalContainer); },
          onError: (err: any) => { console.error('PayPal error:', err); alert('PayPal error occurred.'); if (paypalContainer) document.body.removeChild(paypalContainer); }
        }).render('#paypal-button-container');
      }
    } catch (error: any) {
      console.error('Payment error:', error); setIsPaymentInProgress(false);
      alert('Error: ' + (error.response?.data || error.message));
    } finally { setLoading(null); }
  };

  /* ── handleLogin — original ── */
  const handleLogin = async (formData: { email: string; password: string }) => {
    setIsLoggingIn(true); setLoginError(null);
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/login`, formData);
      const { token } = response.data;
      localStorage.setItem('token', token);
      const profileRes = await axios.get(`${API_BASE_URL}/auth/me`, { headers: { Authorization: `Bearer ${token}` } });
      const fullName = profileRes.data.name || '';
      const nameParts = fullName.trim().split(' ');
      const firstName = nameParts[0] || '';
      const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : '';
      setUserProfile({ email: profileRes.data.email || '', firstName, lastName, picture: profileRes.data.picture || null, googleAuth: profileRes.data.googleAuth || false, role: profileRes.data.role || 'BASIC' });
      setCurrentPlan(profileRes.data.role || 'BASIC');
      setIsLoggedIn(true); setShowLoginModal(false);
    } catch (error: any) {
      setLoginError(error.response?.data?.message || 'Login failed. Please check your credentials.');
    } finally { setIsLoggingIn(false); }
  };

  /* ── handleGoogleLogin — original ── */
  const handleGoogleLogin = async (credentialResponse: any) => {
    setLoginError(null); setIsLoggingIn(true);
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/google`, { token: credentialResponse.credential });
      const { token } = response.data;
      localStorage.setItem('token', token);
      const profileRes = await axios.get(`${API_BASE_URL}/auth/me`, { headers: { Authorization: `Bearer ${token}` } });
      const fullName = profileRes.data.name || '';
      const nameParts = fullName.trim().split(' ');
      const firstName = nameParts[0] || '';
      const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : '';
      setUserProfile({ email: profileRes.data.email || '', firstName, lastName, picture: profileRes.data.picture || null, googleAuth: true, role: profileRes.data.role || 'BASIC' });
      setCurrentPlan(profileRes.data.role || 'BASIC');
      setIsLoggedIn(true); setShowLoginModal(false);
    } catch (error: any) {
      setLoginError(error.response?.data?.message || 'Google login failed');
    } finally { setIsLoggingIn(false); }
  };

  /* ── getPlans ── */
  const getPlans = (): PricingPlan[] => {
    const basicFeats       = ['2,000 voice chars/mo · 720p export', '5 speed videos + 5 BG removals', '10 SVG downloads', 'Community support', 'Commercial use'];
    const creatorLiteFeats = [
  '10,000 voice chars/mo · 1080p export',
  '🎭 Voice emotions — 9 presets',
  '30 videos · 100 BG removals · Unlimited SVGs',
  '🎨 100 image credits/mo · All 7 models included'
];

const creatorFeats = [
  '75,000 voice chars/mo · 1440p export',
  '🎭 Voice emotions — 9 presets',
  '60 videos · 500 BG removals · Unlimited SVGs',
  '🎨 250 image credits/mo · All 7 models included'
];

const odysseyFeats = [
  '250,000 voice chars/mo · 4K export',
  '🎭 Voice emotions + all premium voices',
  'Unlimited videos, removals & SVGs',
  '🎨 500 image credits/mo · All 7 models included'
];
    
    if (isIndianUser === null) {
      return [
        { name: 'Starter Forge',   role: 'BASIC',        price: 0, currency: 'FREE',    ttsLimit: 500,    features: basicFeats },
        { name: 'Creator Lite',    role: 'CREATOR_LITE',  price: 0, currency: 'LOADING', ttsLimit: 10000,  features: creatorLiteFeats },
        { name: 'Creator Spark',   role: 'CREATOR',       price: 0, currency: 'LOADING', ttsLimit: 75000,  popular: true, features: creatorFeats },
        { name: 'Creator Odyssey', role: 'STUDIO',        price: 0, currency: 'LOADING', ttsLimit: 250000, features: odysseyFeats },
      ];
    }
    const creatorLitePrice = isIndianUser ? 99  : 3;
    const creatorPrice     = isIndianUser ? 499 : 12;
    const studioPrice      = isIndianUser ? 999 : 24;
    const originalCreatorLitePrice = Math.round(creatorLitePrice / 0.75);
    const originalCreatorPrice     = Math.round(creatorPrice / 0.75);
    const originalStudioPrice      = Math.round(studioPrice  / 0.75);
    const currency = isIndianUser ? 'INR' : 'USD';
    const symbol   = isIndianUser ? '₹'   : '$';
    return [
      { name: 'Starter Forge',   role: 'BASIC',        price: 0,               currency: 'FREE',    ttsLimit: 2000,   features: basicFeats },
      { name: 'Creator Lite',    role: 'CREATOR_LITE',  price: creatorLitePrice, originalPrice: originalCreatorLitePrice, currency, symbol, ttsLimit: 10000,  features: creatorLiteFeats },
      { name: 'Creator Spark',   role: 'CREATOR',       price: creatorPrice,    originalPrice: originalCreatorPrice,     currency, symbol, ttsLimit: 75000,  popular: true, features: creatorFeats },
      { name: 'Creator Odyssey', role: 'STUDIO',        price: studioPrice,     originalPrice: originalStudioPrice,      currency, symbol, ttsLimit: 250000, features: odysseyFeats },
    ];
  };
  
  /* ── getIndividualPlans — original, untouched ── */
  const getIndividualPlans = (): IndividualPlan[] => {
    if (isIndianUser === null) {
      return [
        {
          name: 'Video Gen Pro',
          planType: 'VIDEO_GEN_PRO',
          price: 0,
          currency: 'LOADING',
          service: 'AI Video Generation',
          features: ['40 Credits/month', '8 Credits/day', 'Max 10 seconds per video', 'Wan 2.5 + Kling 2.5/2.6 Pro', 'Commercial Use Allowed']
        },
        {
          name: 'Video Gen Elite',
          planType: 'VIDEO_GEN_ELITE',
          price: 0,
          currency: 'LOADING',
          service: 'AI Video Generation',
          features: ['100 Credits/month', '20 Credits/day', 'Max 10 seconds per video', 'All models incl. Google Veo 3', 'Commercial Use Allowed']
        }
      ];
    }
    const videoProPrice   = isIndianUser ? 599  : 15;
    const videoElitePrice = isIndianUser ? 1199 : 25;
    const videoProOriginal   = Math.round(videoProPrice   / 0.75);
    const videoEliteOriginal = Math.round(videoElitePrice / 0.75);
    const currency = isIndianUser ? 'INR' : 'USD';
    const symbol   = isIndianUser ? '₹'   : '$';
    return [
      {
        name: 'Video Gen Pro',
        planType: 'VIDEO_GEN_PRO',
        price: videoProPrice,
        originalPrice: videoProOriginal,
        currency, symbol,
        service: 'AI Video Generation',
        features: ['40 Credits/month', '8 Credits/day', 'Max 10 seconds per video', 'Wan 2.5 + Kling 2.5/2.6 Pro', 'Commercial Use Allowed']
      },
      {
        name: 'Video Gen Elite',
        planType: 'VIDEO_GEN_ELITE',
        price: videoElitePrice,
        originalPrice: videoEliteOriginal,
        currency, symbol,
        service: 'AI Video Generation',
        features: ['100 Credits/month', '20 Credits/day', 'Max 10 seconds per video', 'All models incl. Google Veo 3', 'Commercial Use Allowed']
      }
    ];
  };

  /* ── getAddonPlans — original, untouched ── */
  const getAddonPlans = () => {
    const currency = isIndianUser ? 'INR' : 'USD';
    const symbol = isIndianUser ? '₹' : '$';
    const voicePrice = isIndianUser ? 125 : 5;
    const speedPrice = isIndianUser ? 99 : 5;
    const bgRemovalPrice = isIndianUser ? 149 : 5;
    const svgPrice = isIndianUser ? 99 : 3;
    const videoStarterPrice = isIndianUser ? 249 : 10;
    const videoProPrice = isIndianUser ? 599 : 15;
    const videoElitePrice = isIndianUser ? 1199 : 25;
    const voiceOriginal = Math.round(voicePrice / 0.75);
    const speedOriginal = Math.round(speedPrice / 0.75);
    const bgRemovalOriginal = Math.round(bgRemovalPrice / 0.75);
    const svgOriginal = Math.round(svgPrice / 0.75);
    const videoStarterOriginal = Math.round(videoStarterPrice / 0.75);
    const videoProOriginal = Math.round(videoProPrice / 0.75);
    const videoEliteOriginal = Math.round(videoElitePrice / 0.75);
    return [
      { name: 'AI Voice Pro', planType: 'AI_VOICE_PRO', price: voicePrice, originalPrice: voiceOriginal, currency, symbol, service: 'AI Voice Generation', features: ['50,000 Characters/month','10,000 Characters/day','2,500 Characters per request','All Premium AI Voices','Commercial use allowed'] },
      { name: 'AI Speed Pro', planType: 'AI_SPEED_PRO', price: speedPrice, originalPrice: speedOriginal, currency, symbol, service: 'Video Speed Control', features: ['30 videos/month','20 minutes per video','Up to 1440p quality','0.5x - 15x speed range','Audio pitch correction','Commercial use allowed'] },
      { name: 'Background Removal Pro', planType: 'BG_REMOVAL_PRO', price: bgRemovalPrice, originalPrice: bgRemovalOriginal, currency, symbol, service: 'AI Background Removal', features: ['300 images/month','Up to 1080p quality','Batch processing','High-quality edge detection','Instant processing','Commercial use allowed'] },
      { name: 'SVG Library Pro', planType: 'SVG_PRO', price: svgPrice, originalPrice: svgOriginal, currency, symbol, service: 'SVG Icons Library', features: ['Unlimited SVG downloads','Up to 2048x2048 resolution','Unlimited daily downloads','SVG format access','PNG & JPG export','Commercial use allowed'] },
      { name: 'Video Gen Starter', planType: 'VIDEO_GEN_STARTER', price: videoStarterPrice, originalPrice: videoStarterOriginal, currency, symbol, service: 'AI Video Generation', features: ['10 credits/month','2 credits/day','Max 5 seconds per video','Wan 2.5 model access','Commercial use allowed'] },
      { name: 'Video Gen Pro', planType: 'VIDEO_GEN_PRO', price: videoProPrice, originalPrice: videoProOriginal, currency, symbol, service: 'AI Video Generation', features: ['40 credits/month','8 credits/day','Max 10 seconds per video','Wan 2.5 + Kling 2.5/2.6 Pro','Commercial use allowed'] },
      { name: 'Video Gen Elite', planType: 'VIDEO_GEN_ELITE', price: videoElitePrice, originalPrice: videoEliteOriginal, currency, symbol, service: 'AI Video Generation', features: ['100 credits/month','20 credits/day','Max 10 seconds per video','All models incl. Google Veo 3','Commercial use allowed'] },
    ];
  };

  /* ── handleIndividualPlanUpgrade — original, untouched ── */
  const handleIndividualPlanUpgrade = async (plan: IndividualPlan) => {
    if (!isLoggedIn) { setShowLoginModal(true); return; }
    setLoading(plan.planType);
    try {
      const orderResponse = await axios.post(
        `${API_BASE_URL}/api/payments/create-order`,
        { planType: plan.planType, amount: plan.price, currency: plan.currency },
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      );
      const { internalOrderId, gatewayOrderId, keyId, gateway } = orderResponse.data;

      if (gateway === 'razorpay') {
        if (!document.getElementById('razorpay-script')) {
          const script = document.createElement('script');
          script.src = 'https://checkout.razorpay.com/v1/checkout.js';
          script.id = 'razorpay-script';
          document.body.appendChild(script);
        }
        const options = {
          key: keyId, amount: plan.price * 100, currency: 'INR',
          order_id: gatewayOrderId, name: 'Scenith',
          description: `${plan.name} - ${plan.service}`,
          modal: { ondismiss: function() { setIsPaymentInProgress(false); setLoading(null); } },
          handler: async function (response: any) {
            setIsPaymentInProgress(true);
            try {
              await axios.post(
                `${API_BASE_URL}/api/payments/verify-razorpay`,
                { internalOrderId, razorpay_payment_id: response.razorpay_payment_id, razorpay_order_id: response.razorpay_order_id, razorpay_signature: response.razorpay_signature },
                { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
              );
              setIsPaymentInProgress(false);
              alert(`🎉 Successfully purchased ${plan.name}!`);
              router.push('/tools/ai-voice-generation');
            } catch (err: any) {
              console.error('Verification failed:', err);
              setIsPaymentInProgress(false);
              alert('Payment verification failed. Please contact support.');
            }
          },
          prefill: { email: userProfile?.email || '', name: userProfile ? `${userProfile.firstName} ${userProfile.lastName}`.trim() : '' },
          theme: { color: '#667eea' }
        };
        // @ts-ignore
        const rzp = new window.Razorpay(options);
        rzp.open();
      } else if (gateway === 'paypal') {
        let paypalContainer = document.getElementById('paypal-button-container');
        if (!paypalContainer) {
          paypalContainer = document.createElement('div');
          paypalContainer.id = 'paypal-button-container';
          paypalContainer.style.position = 'fixed'; paypalContainer.style.top = '50%';
          paypalContainer.style.left = '50%'; paypalContainer.style.transform = 'translate(-50%, -50%)';
          paypalContainer.style.zIndex = '1000'; paypalContainer.style.background = 'white';
          paypalContainer.style.padding = '20px'; paypalContainer.style.borderRadius = '12px';
          paypalContainer.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
          document.body.appendChild(paypalContainer);
        }
        paypalContainer.innerHTML = '';
        // @ts-ignore
        paypal.Buttons({
          createOrder: () => gatewayOrderId,
          onApprove: async (data: any, actions: any) => {
            setIsPaymentInProgress(true);
            try {
              const captureResponse = await axios.post(
                `${API_BASE_URL}/api/payments/capture-paypal`,
                { internalOrderId, paypalOrderId: data.orderID },
                { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
              );
              setIsPaymentInProgress(false);
              if (captureResponse.data.status === 'SUCCESS') {
                alert(`🎉 Successfully purchased ${plan.name} via PayPal!`);
                router.push('/tools/ai-voice-generation');
              } else { alert('Payment capture failed. Please try again.'); }
            } catch (err: any) {
              console.error('PayPal capture error:', err); setIsPaymentInProgress(false);
              alert('Error capturing payment: ' + (err.response?.data || 'Unknown error'));
            } finally { if (paypalContainer) document.body.removeChild(paypalContainer); }
          },
          onCancel: () => { alert('Payment cancelled.'); if (paypalContainer) document.body.removeChild(paypalContainer); },
          onError: (err: any) => { console.error('PayPal error:', err); alert('PayPal error occurred.'); if (paypalContainer) document.body.removeChild(paypalContainer); }
        }).render('#paypal-button-container');
      }
    } catch (error: any) {
      console.error('Payment error:', error); setIsPaymentInProgress(false);
      alert('Error: ' + (error.response?.data || error.message));
    } finally { setLoading(null); }
  };

  /* ─────────────────────────────────────────────────────────────────
     SVG ICONS
  ───────────────────────────────────────────────────────────────── */
  const planIcons: Record<string, React.ReactElement> = {
    CREATOR_LITE: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32 12 L38 26 L54 28 L43 39 L46 55 L32 47 L18 55 L21 39 L10 28 L26 26 Z" stroke="url(#gi0)" strokeWidth="2.5" fill="none" strokeLinejoin="round"/>
        <defs><linearGradient id="gi0" x1="0" y1="0" x2="64" y2="64"><stop offset="0%" stopColor="#818cf8"/><stop offset="100%" stopColor="#a78bfa"/></linearGradient></defs>
      </svg>
    ),
    BASIC: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="26" stroke="url(#gi1)" strokeWidth="3" fill="none"/>
        <path d="M32 16v16l11 6.5" stroke="url(#gi1)" strokeWidth="3" strokeLinecap="round"/>
        <defs><linearGradient id="gi1" x1="0" y1="0" x2="64" y2="64"><stop offset="0%" stopColor="#6355dc"/><stop offset="100%" stopColor="#8b5cf6"/></linearGradient></defs>
      </svg>
    ),
    CREATOR: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32 8l8 16h16l-13 12 5 16-16-10-16 10 5-16-13-12h16z" fill="url(#gi2)"/>
        <defs><linearGradient id="gi2" x1="0" y1="0" x2="64" y2="64"><stop offset="0%" stopColor="#6355dc"/><stop offset="100%" stopColor="#f06cbe"/></linearGradient></defs>
      </svg>
    ),
    STUDIO: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="20" width="44" height="30" rx="4" stroke="url(#gi3)" strokeWidth="2.5" fill="none"/>
        <circle cx="22" cy="32" r="3" fill="url(#gi3)"/>
        <circle cx="32" cy="32" r="3" fill="url(#gi3)"/>
        <circle cx="42" cy="32" r="3" fill="url(#gi3)"/>
        <path d="M20 42h24" stroke="url(#gi3)" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M28 10l4 10 4-10" stroke="url(#gi3)" strokeWidth="2.5" strokeLinecap="round"/>
        <defs><linearGradient id="gi3" x1="0" y1="0" x2="64" y2="64"><stop offset="0%" stopColor="#f59e0b"/><stop offset="100%" stopColor="#f97316"/></linearGradient></defs>
      </svg>
    ),
  };

  const plans = getPlans();
  const individualPlans = getIndividualPlans();

  /* ── LOADING SCREEN ── */
  if (!isPricingReady) {
    return (
      <div className="sc-root">
        <div className="sc-loading">
          <div className="sc-spinner" />
          <p>Loading your personalized pricing...</p>
        </div>
      </div>
    );
  }

  /* ── MAIN RENDER ── */
  return (
    <div className="sc-root">

      {/* ══ HERO ══ */}
      <header className="sc-hero">
        <div className="sc-hero-orb1" />
        <div className="sc-hero-orb2" />
        <div className="sc-hero-grid" />
        <div className="sc-hero-inner">
          <div className="sc-badge-row">
            <span className="sc-badge">
              <span className="sc-badge-dot" />
              🔥 25% OFF — Limited Time Offer
            </span>
          </div>
          <h1 className="sc-h1">
            Simple, Transparent<br />
            <span className="sc-grad">Pricing</span>
          </h1>
          <p className="sc-hero-sub">Choose the plan that fits your needs</p>

          {/* Section Tabs — same IDs & logic as original */}
          <div className="sc-tabs">
            <button
              className={`sc-tab${activeSection === 'bundle' ? ' active' : ''}`}
              onClick={() => setActiveSection('bundle')}
            >
              <span>✨</span> Creator Suites
            </button>
            <button
              className={`sc-tab${activeSection === 'individual' ? ' active' : ''}`}
              onClick={() => setActiveSection('individual')}
            >
              <span>🎬</span> Video Generation
            </button>
          </div>

          <div style={{ marginTop: 14 }}>
            {activeSection === 'bundle' && (
              <span className="sc-tab-hint">Bundle = Voice + Video + Images + More in one subscription</span>
            )}
             {activeSection === 'individual' && (
              <span className="sc-tab-hint">Standalone AI Video Generation — no bundle required</span>
            )}
          </div>
        </div>
      </header>

      {/* ══ BUNDLE TAB ══ */}
      {activeSection === 'bundle' && (
        <>
          <div className="sc-section">
            <div className="sc-bundle-grid">
              {plans.map((plan) => {
                const isFree = plan.price === 0;
                const isPopular = plan.role === 'CREATOR';
                const isStudio = plan.role === 'STUDIO';
                const isCurrent = currentPlan === plan.role;
                const isDowngradeBlocked =
                  (currentPlan === 'STUDIO' && (plan.role === 'CREATOR' || plan.role === 'CREATOR_LITE')) ||
                  (currentPlan === 'CREATOR' && plan.role === 'CREATOR_LITE');
                const highlights = HL[plan.role] || [];

                const btnClass = () => {
                  if (isCurrent) return 'sc-btn sc-btn-current';
                  if (isFree) return 'sc-btn sc-btn-ghost';
                  if (plan.role === 'CREATOR_LITE') return 'sc-btn sc-btn-primary';
                  if (isStudio) return 'sc-btn sc-btn-gold';
                  if (isPopular) return 'sc-btn sc-btn-primary';
                  return 'sc-btn sc-btn-ghost';
                };
                const btnLabel = () => {
                  if (loading === plan.role) return 'Processing...';
                  if (isCurrent) return '✓ Current Plan';
                  if (isDowngradeBlocked) return 'Downgrade Not Allowed';
                  if (isFree) return 'Free Forever';
                  if (plan.role === 'CREATOR_LITE') return 'Get Creator Lite →';
                  if (isPopular) return 'Get Creator Spark →';
                  if (isStudio) return 'Get Creator Odyssey →';
                  return 'Upgrade Now';
                };

                return (
                  <motion.div
                    key={plan.role}
                    className={`sc-card${isPopular ? ' sc-popular' : ''}${isCurrent ? ' sc-current' : ''}`}
                    whileHover={{ scale: 1.025 }}
                    initial={{ opacity: 0, y: 44 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.42, delay: isPopular ? 0.1 : 0 }}
                  >
                    {/* badges */}
                    {isPopular && !isCurrent && !isDowngradeBlocked && (
                      <div className="sc-card-badge sc-badge-popular">⭐ Most Popular</div>
                    )}
                    {isStudio && !isCurrent && (
                      <div className="sc-card-badge sc-badge-studio">👑 Best Value</div>
                    )}
                    {isCurrent && <div className="sc-card-badge sc-badge-current">✓ Your Plan</div>}
                    {isDowngradeBlocked && <div className="sc-card-badge sc-badge-downgrade">Downgrade Not Available</div>}

                    {/* icon */}
                    <div className="sc-plan-icon">{planIcons[plan.role]}</div>

                    <p className="sc-plan-tagline">
                      {plan.role === 'BASIC'        && 'Build your first AI creations — free forever.'}
                      {plan.role === 'CREATOR_LITE' && 'Start creating — voice, images & more at ₹99/mo.'}
                      {plan.role === 'CREATOR'       && 'Spark your creativity with powerful AI tools.'}
                      {plan.role === 'STUDIO'        && 'Master your creative journey with limitless power.'}
                    </p>

                    <h2 className="sc-plan-name">{plan.name}</h2>

                    {/* price */}
                    {plan.currency === 'LOADING' ? (
                      <span className="sc-loading-price">Loading...</span>
                    ) : isFree ? (
                      <div className="sc-price-area">
                        <div className="sc-free-price">FREE</div>
                        <div className="sc-forever">Forever free</div>
                      </div>
                    ) : (
                      <div className="sc-price-area">
                        {plan.originalPrice && (
                          <div className="sc-strike">{plan.symbol}{plan.originalPrice}/mo</div>
                        )}
                        <div className="sc-price-row">
                          <span className="sc-sym">{plan.symbol}</span>
                          <span className="sc-num">{plan.price}</span>
                          <span className="sc-per">/mo</span>
                        </div>
                        <span className="sc-save-pill">✓ Save 25%</span>
                      </div>
                    )}

                    {/* features */}
                    <ul className="sc-features">
                      {plan.features.map((feat, i) => {
                        const isHl = highlights.includes(i);
                        return (
                          <li key={i} className={`sc-feat${isHl ? ' sc-feat-hl' : ''}`}>
                            <span className={`sc-feat-icon ${isHl ? 'star' : 'check'}`}>
                              {isHl ? '✦' : '✓'}
                            </span>
                            {feat}
                          </li>
                        );
                      })}
                    </ul>

                    <button
                      className={btnClass()}
                      onClick={() => handleUpgrade(plan)}
                      disabled={loading !== null || isFree || isCurrent || isDowngradeBlocked}
                    >
                      {btnLabel()}
                    </button>
                  </motion.div>
                );
              })}
            </div>

            {/* value callout */}
            <div className="sc-callout">
              <span className="sc-callout-icon">💡</span>
              <p className="sc-callout-text">
                <strong style={{ color: '#d4d4f0' }}>Bundle = best deal.</strong>{' '}
                Creator Spark gives you Voice + Speed Videos + Background Removals + AI Images for less than buying them individually.
              </p>
            </div>
          </div>

          {/* comparison table */}
          <div className="sc-section-dark">
            <div className="sc-section">
              <h2 className="sc-section-title">Detailed Plan Comparison</h2>
              <div className="sc-table-wrap">
                <table className="sc-table">
                  <thead>
                    <tr>
                      <th>Feature</th>
                      <th>Starter Forge</th>
                      <th>Creator Lite</th>
                      <th className="sc-th-hl">Creator Spark ⭐</th>
                      <th>Creator Odyssey</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Monthly Voice Characters', '2,000',    '10,000',       '75,000',       '250,000'],
                      ['Daily Character Limit',    '200',      '2,500',        '20,000',       'Unlimited'],
                      ['Max Chars per Request',    '150',      '700',          '4,000',        '6,000'],
                      ['Voice Emotions',           '✗',        '✓ 9 Presets',  '✓ 9 Presets',  '✓ 9 Presets'],
                      ['Speed Videos/Month',       '5',        '30',           '60',           'Unlimited'],
                      ['Max Video Length',         '5 min',    '10 min',       '30 min',       'Unlimited'],
                      ['Background Removals/mo',   '5',        '100',          '500',          '1,500'],
                      ['SVG Downloads',            '10/month', 'Unlimited',    'Unlimited',    'Unlimited'],
                      ['AI Image Credits/Month',   '✗',       '100 cr',         '250 cr',          '500 cr'],
                      ['Daily Image Credit Cap',   '✗',       '15 cr/day',      '30 cr/day',       '60 cr/day'],
                      ['Image Models Available', '✗', 'All 7 models', 'All 7 models', 'All 7 models'],
                      ['Max Export Quality',       '720p',     '1080p',        '1440p',        '4K'],
                      ['Commercial Use',           '✓',        '✓',            '✓',            '✓'],
                      ['Priority Support',         '✗',        '✗',            '✓',            '✓ Dedicated'],
                    ].map(([feat, basic, lite, creator, studio], i) => (
                      <tr key={i}>
                        <td>{feat}</td>
                        <td className={basic === '✓' ? 'sc-yes' : basic === '✗' ? 'sc-no' : ''}>{basic}</td>
                        <td className={lite === '✓' ? 'sc-yes' : lite === '✗' ? 'sc-no' : ''}>{lite}</td>
                        <td className={`sc-td-hl${creator === '✓' ? ' sc-yes' : creator === '✗' ? ' sc-no' : ''}`}>{creator}</td>
                        <td className={studio === '✓' ? 'sc-yes' : studio === '✗' ? 'sc-no' : ''}>{studio}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* use cases */}
          <div className="sc-section">
            <h2 className="sc-section-title">Perfect for Every Creator</h2>
            <div className="sc-use-grid">
              {[
                { icon: '🎙️', title: 'Content Creators', body: 'Generate professional voiceovers for YouTube videos, social media content, and podcasts. Our AI voices bring your scripts to life with natural intonation and emotion.' },
                { icon: '📚', title: 'E-Learning Professionals', body: 'Create engaging educational content with consistent, clear narration. Perfect for online courses, tutorials, and training materials in multiple languages.' },
                { icon: '📱', title: 'App Developers', body: 'Integrate natural-sounding voices into your applications, games, and interactive experiences. Scale your voice content without recording studios.' },
                { icon: '📢', title: 'Marketing Teams', body: 'Produce advertisements, explainer videos, and promotional content quickly. Test multiple voice styles to find the perfect brand voice.' },
              ].map((item, i) => (
                <div key={i} className="sc-use-card">
                  <div className="sc-use-icon">{item.icon}</div>
                  <h3 className="sc-use-title">{item.title}</h3>
                  <p className="sc-use-body">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {/* ══ CINEAI TAB ══ */}
      {activeSection === 'individual' && (
        <div className="sc-section">
          <h2 className="sc-section-title">AI Video Generation Plans</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', maxWidth: '760px', margin: '0 auto' }}>
            {getIndividualPlans().map((plan) => (
              <motion.div
                key={plan.planType}
                className="sc-spotlight"
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.42 }}
                style={{ margin: 0 }}
              >
                <div className="sc-spotlight-ribbon">
                  {plan.planType === 'VIDEO_GEN_ELITE' ? '👑 Best Value' : '🎬 Standalone'}
                </div>
                <div className="sc-spotlight-inner">
                  <div className="sc-spotlight-tag">{plan.service}</div>
                  <div className="sc-spotlight-name">{plan.name}</div>
                  <div className="sc-spotlight-sub">
                    {plan.planType === 'VIDEO_GEN_PRO'
                      ? 'Wan 2.5 + Kling models — serious creators'
                      : 'All models including Google Veo 3'}
                  </div>

                  <div className="sc-spotlight-price-row">
                    {plan.currency === 'LOADING' ? (
                      <span className="sc-loading-price">Loading...</span>
                    ) : (
                      <>
                        {plan.originalPrice && (
                          <span className="sc-spotlight-strike">{plan.symbol}{plan.originalPrice}/mo</span>
                        )}
                        <span className="sc-spotlight-price" style={{ fontSize: '48px' }}>{plan.symbol}{plan.price}</span>
                        <span className="sc-spotlight-period">/mo</span>
                        <span className="sc-save-pill">✓ Save 25%</span>
                      </>
                    )}
                  </div>

                  <div className="sc-spotlight-feats" style={{ gridTemplateColumns: '1fr' }}>
                    {plan.features.map((feat, i) => (
                      <div key={i} className="sc-feat sc-feat-hl">
                        <span className="sc-feat-icon star">✦</span>
                        {feat}
                      </div>
                    ))}
                  </div>

                  <button
                    className="sc-btn sc-btn-primary"
                    onClick={() => handleIndividualPlanUpgrade(plan)}
                    disabled={loading !== null}
                  >
                    {loading === plan.planType ? 'Processing...' : `Get ${plan.name} →`}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* ══ TRUST BAR ══ */}
      <div className="sc-trust">
        {[
          { icon: '🔒', lbl: 'Secure Payments', sub: 'Razorpay & PayPal' },
          { icon: '⚡', lbl: 'Instant Access', sub: 'Start generating now' },
          { icon: '🌍', lbl: 'Global Support', sub: '30+ languages' },
          { icon: '💯', lbl: 'Quality Guaranteed', sub: 'Premium AI voices' },
        ].map((item, i) => (
          <div key={i} className="sc-trust-item">
            <span className="sc-trust-ico">{item.icon}</span>
            <div>
              <div className="sc-trust-lbl">{item.lbl}</div>
              <div className="sc-trust-sub">{item.sub}</div>
            </div>
          </div>
        ))}
      </div>

      {/* ══ FAQ ══ */}
      <div className="sc-faq-wrap">
        <h2 className="sc-section-title">Frequently Asked Questions</h2>
        {FAQ.map((item, i) => (
          <div key={i} className="sc-faq-item" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
            <div className="sc-faq-q">
              <span>{item.q}</span>
              <span className={`sc-faq-chev${openFaq === i ? ' open' : ''}`}>▾</span>
            </div>
            <AnimatePresence>
              {openFaq === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  style={{ overflow: 'hidden' }}
                >
                  <p className="sc-faq-a">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* ══ FOOTER ══ */}
      <footer className="sc-footer">
        © 2025 Scenith &nbsp;·&nbsp; All plans billed monthly &nbsp;·&nbsp;
        Prices shown in {isIndianUser ? 'INR for Indian users' : 'USD for international users'}
      </footer>

      {/* ══ LOGIN MODAL ══ */}
      <AnimatePresence>
        {showLoginModal && (
          <div className="sc-overlay">
            <motion.div
              className="sc-modal"
              initial={{ opacity: 0, scale: 0.88, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.88, y: 24 }}
              transition={{ duration: 0.24 }}
            >
              <button
                className="sc-modal-close"
                onClick={() => setShowLoginModal(false)}
                aria-label="Close login modal"
              >
                <FaTimes size={12} />
              </button>

              {isLoggingIn && (
                <div className="sc-modal-loading-overlay">
                  <div className="sc-spinner" />
                  <p>Logging in...</p>
                </div>
              )}

              <div className="sc-modal-logo">SCENITH</div>
              <p className="sc-modal-sub">Login to Continue</p>

              {loginError && <div className="sc-modal-error">{loginError}</div>}

              <form
                className="sc-modal-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  handleLogin({
                    email: formData.get('email') as string,
                    password: formData.get('password') as string,
                  });
                }}
              >
                <input
                  className="sc-modal-input"
                  type="email" name="email"
                  placeholder="Email address"
                  required disabled={isLoggingIn}
                />
                <input
                  className="sc-modal-input"
                  type="password" name="password"
                  placeholder="Password"
                  required disabled={isLoggingIn}
                />
                <button
                  type="submit"
                  className="sc-btn sc-btn-primary"
                  disabled={isLoggingIn}
                >
                  {isLoggingIn ? 'Logging in...' : 'Login →'}
                </button>
              </form>

              <div className="sc-modal-or">OR</div>
              <div id="googleSignInButtonPricing" />

              <p className="sc-modal-link">
                New to SCENITH? <a href="/register">Sign up</a>
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}