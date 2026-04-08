"use client";

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { API_BASE_URL } from '../../config';
import { FaTimes } from 'react-icons/fa';
import React from 'react';

/* ─────────────────────────────────────────────────────────────────────
   INTERFACES
───────────────────────────────────────────────────────────────────── */
interface PricingPlan {
  name: string;
  role: 'BASIC' | 'SPARK' | 'MICRO' | 'CREATOR_LITE' | 'CREATOR' | 'STUDIO';
  price: number;
  originalPrice?: number;
  currency: string;
  features: string[];
  ttsLimit: number;
  popular?: boolean;
  symbol?: string;
  tagline: string;
  outcomes: { icon: string; label: string }[];
}

interface UserProfile {
  email: string;
  firstName: string;
  lastName: string;
  picture: string | null;
  googleAuth: boolean;
  role: string;
}

interface TopupPack {
  name: string;
  planType: 'TOPUP_SMALL' | 'TOPUP_MEDIUM' | 'TOPUP_LARGE';
  credits: number;
  price: number;
  originalPrice?: number;
  currency: string;
  symbol?: string;
  badge?: string;
  perCreditLabel: string;
}

/* ─────────────────────────────────────────────────────────────────────
   STYLES
───────────────────────────────────────────────────────────────────── */
const injectStyles = () => {
  if (typeof document === 'undefined') return;
  const ID = 'scenith-v3-styles';
  const ex = document.getElementById(ID);
  if (ex) ex.remove();
  const s = document.createElement('style');
  s.id = ID;
  s.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:wght@300;400;500;600;700&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --ink: #0d0d14;
      --ink2: #1e1e30;
      --ink3: #3a3a5c;
      --muted: #7070a0;
      --muted2: #a0a0c0;
      --surface: #ffffff;
      --surface2: #f7f6ff;
      --surface3: #f0eeff;
      --border: rgba(99,85,220,0.11);
      --border2: rgba(99,85,220,0.22);
      --violet: #5c4de8;
      --violet2: #7c6df0;
      --pink: #e040a0;
      --gold: #f59e0b;
      --green: #10b981;
      --radius: 20px;
      --radius-sm: 12px;
    }

    body { background: var(--surface2); margin-top: 70px; }

    .v3-root {
      font-family: 'DM Sans', system-ui, sans-serif;
      background: var(--surface2);
      color: var(--ink);
      min-height: 100vh;
      overflow-x: hidden;
    }

    /* ── TICKER ── */
    .v3-ticker {
      background: linear-gradient(90deg, var(--violet) 0%, #8b5cf6 50%, var(--pink) 100%);
      padding: 10px 0;
      text-align: center;
      font-size: 12.5px;
      font-weight: 600;
      color: #fff;
      letter-spacing: 0.05em;
      position: relative;
      overflow: hidden;
    }
    .v3-ticker::before {
      content: '';
      position: absolute; inset: 0;
      background: repeating-linear-gradient(90deg, transparent 0, transparent 120px, rgba(255,255,255,0.07) 120px, rgba(255,255,255,0.07) 121px);
    }
    .v3-ticker-inner { position: relative; display: flex; align-items: center; justify-content: center; gap: 20px; }
    .v3-ticker-pill {
      background: rgba(255,255,255,0.18); border-radius: 999px;
      padding: 2px 12px; font-size: 11px; font-weight: 700;
      border: 1px solid rgba(255,255,255,0.3);
    }

    /* ── HERO ── */
    .v3-hero {
      background: var(--surface);
      border-bottom: 1px solid var(--border);
      padding: 20px 24px 72px;
      text-align: center;
      position: relative;
      overflow: hidden;
    }
    .v3-hero-bg {
      position: absolute; inset: 0; pointer-events: none;
      background:
        radial-gradient(ellipse 900px 400px at 50% -10%, rgba(92,77,232,0.07) 0%, transparent 70%),
        radial-gradient(ellipse 500px 300px at 80% 120%, rgba(224,64,160,0.05) 0%, transparent 70%);
    }
    .v3-hero-dots {
      position: absolute; inset: 0; pointer-events: none; opacity: 0.35;
      background-image: radial-gradient(circle, rgba(92,77,232,0.25) 1px, transparent 1px);
      background-size: 36px 36px;
      mask-image: radial-gradient(ellipse 70% 60% at 50% 50%, black 0%, transparent 100%);
    }
    .v3-hero-inner { position: relative; max-width: 780px; margin: 0 auto; }

    .v3-proof-row {
      display: flex; align-items: center; justify-content: center;
      gap: 6px; margin-bottom: 28px;
    }
    .v3-proof-avatars {
      display: flex;
    }
    .v3-proof-avatar {
      width: 28px; height: 28px; border-radius: 50%;
      border: 2px solid white;
      margin-left: -8px;
      background: linear-gradient(135deg, var(--violet), var(--pink));
      font-size: 10px; display: flex; align-items: center; justify-content: center; color: white; font-weight: 700;
    }
    .v3-proof-avatar:first-child { margin-left: 0; }
    .v3-proof-text { font-size: 13px; color: var(--muted); font-weight: 500; }
    .v3-proof-text strong { color: var(--ink2); }

    .v3-h1 {
      font-family: 'Instrument Serif', Georgia, serif;
      font-size: clamp(38px, 6.5vw, 72px);
      font-weight: 400;
      line-height: 1.05;
      letter-spacing: -0.025em;
      margin-bottom: 20px;
      color: var(--ink);
    }
    .v3-h1 em {
      font-style: italic;
      background: linear-gradient(120deg, var(--violet) 0%, var(--pink) 60%, #f97316 100%);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
    }
    .v3-hero-sub {
      font-size: 17px; line-height: 1.7;
      color: var(--muted); max-width: 460px; margin: 0 auto 36px;
      font-weight: 400;
    }

    .v3-hero-cta { display: flex; align-items: center; justify-content: center; gap: 12px; flex-wrap: wrap; }
    .v3-btn-hero {
      padding: 14px 32px; border-radius: 999px; border: none;
      font-family: 'DM Sans', sans-serif; font-size: 15px; font-weight: 700;
      cursor: pointer; transition: all 0.2s;
      background: linear-gradient(135deg, var(--violet) 0%, #8b5cf6 100%);
      color: #fff; box-shadow: 0 8px 32px rgba(92,77,232,0.38);
    }
    .v3-btn-hero:hover { box-shadow: 0 12px 40px rgba(92,77,232,0.55); transform: translateY(-2px); }
    .v3-btn-ghost-hero {
      padding: 14px 26px; border-radius: 999px;
      border: 1.5px solid var(--border2); background: transparent;
      font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 600;
      color: var(--ink3); cursor: pointer; transition: all 0.2s;
    }
    .v3-btn-ghost-hero:hover { border-color: var(--violet); color: var(--violet); background: rgba(92,77,232,0.04); }
    .v3-hero-no-cc { font-size: 12px; color: var(--muted2); margin-top: 14px; }

    /* ── TRUST STRIP ── */
    .v3-trust {
      background: var(--surface); border-bottom: 1px solid var(--border);
      padding: 0 24px;
    }
    .v3-trust-inner {
      max-width: 1100px; margin: 0 auto;
      display: flex; flex-wrap: wrap; justify-content: center;
    }
    .v3-trust-item {
      display: flex; align-items: center; gap: 9px;
      padding: 16px 24px;
      border-right: 1px solid var(--border);
    }
    .v3-trust-item:last-child { border-right: none; }
    .v3-trust-ico { font-size: 18px; }
    .v3-trust-lbl { font-size: 13px; font-weight: 600; color: var(--ink2); }
    .v3-trust-sub { font-size: 11.5px; color: var(--muted2); }

    /* ── CREDIT EXPLAINER ── */
    .v3-explain {
      max-width: 1080px; margin: 0 auto; padding: 72px 24px 56px;
    }
    .v3-explain-label {
      text-align: center; margin-bottom: 10px;
      font-size: 11.5px; font-weight: 700; letter-spacing: 0.13em;
      text-transform: uppercase; color: var(--violet);
    }
    .v3-explain-title {
      font-family: 'Instrument Serif', Georgia, serif;
      font-size: clamp(26px, 4vw, 44px);
      font-weight: 400; line-height: 1.15;
      text-align: center; margin-bottom: 14px; color: var(--ink);
      letter-spacing: -0.02em;
    }
    .v3-explain-sub {
      text-align: center; font-size: 15px; color: var(--muted);
      max-width: 480px; margin: 0 auto 52px; line-height: 1.65;
    }
    .v3-credit-grid {
      display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 14px;
    }
    .v3-credit-card {
      background: var(--surface);
      border: 1.5px solid var(--border);
      border-radius: var(--radius-sm);
      padding: 22px 18px 18px;
      text-align: center;
      transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;
    }
    .v3-credit-card:hover {
      border-color: var(--border2);
      box-shadow: 0 8px 28px rgba(92,77,232,0.08);
      transform: translateY(-3px);
    }
    .v3-credit-icon { font-size: 30px; margin-bottom: 10px; }
    .v3-credit-count {
      font-family: 'Instrument Serif', Georgia, serif;
      font-size: 32px; font-weight: 400; color: var(--violet);
      line-height: 1; margin-bottom: 4px;
    }
    .v3-credit-unit { font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.09em; color: var(--muted2); margin-bottom: 8px; }
    .v3-credit-label { font-size: 13px; color: var(--ink3); font-weight: 500; line-height: 1.4; }

    .v3-credit-note {
      text-align: center; margin-top: 28px;
      display: flex; align-items: center; justify-content: center; gap: 10px;
      font-size: 13px; color: var(--muted); flex-wrap: wrap;
    }
    .v3-credit-note-pill {
      background: rgba(16,185,129,0.08); border: 1px solid rgba(16,185,129,0.2);
      border-radius: 999px; padding: 5px 14px; font-size: 12px;
      font-weight: 600; color: #059669;
    }

    /* ── PRICING ── */
    .v3-pricing { background: var(--surface); padding: 0 0 72px; }
    .v3-pricing-header { padding: 72px 24px 52px; text-align: center; }
    .v3-pricing-label {
      font-size: 11.5px; font-weight: 700; letter-spacing: 0.13em;
      text-transform: uppercase; color: var(--violet); margin-bottom: 10px;
    }
    .v3-pricing-title {
      font-family: 'Instrument Serif', Georgia, serif;
      font-size: clamp(28px, 4vw, 48px);
      font-weight: 400; line-height: 1.12;
      letter-spacing: -0.022em; color: var(--ink);
      margin-bottom: 14px;
    }
    .v3-pricing-sub { font-size: 15px; color: var(--muted); max-width: 440px; margin: 0 auto; line-height: 1.65; }

    .v3-plans-wrap { max-width: 1120px; margin: 0 auto; padding: 0 24px; }
    .v3-plans-row {
      display: flex;
      flex-direction: column;
      gap: 14px;
    }
    .v3-plans-row-top {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 14px;
      max-width: 680px;
      margin: 0 auto;
      width: 100%;
      align-items: start;
    }
    .v3-plans-row-bottom {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 14px;
      align-items: start;
    }
    .v3-plans-row-divider {
      display: flex; align-items: center; gap: 16px;
      margin: 8px 0 4px;
    }
    .v3-plans-row-divider::before,
    .v3-plans-row-divider::after {
      content: ''; flex: 1; height: 1px;
      background: linear-gradient(90deg, transparent, var(--border), transparent);
    }
    .v3-plans-row-divider-label {
      font-size: 10.5px; font-weight: 700; letter-spacing: 0.13em;
      text-transform: uppercase; color: var(--muted2);
      white-space: nowrap; padding: 0 4px;
    }
    @media(max-width: 860px) { .v3-plans-row-bottom { grid-template-columns: repeat(2, 1fr); } }
    @media(max-width: 560px) { .v3-plans-row-top, .v3-plans-row-bottom { grid-template-columns: 1fr; max-width: 100%; } }

    /* ── PLAN CARD ── */
    .v3-card {
      position: relative; display: flex; flex-direction: column;
      background: var(--surface);
      border: 1.5px solid var(--border);
      border-radius: var(--radius);
      padding: 22px 16px 18px;
      transition: border-color 0.22s, box-shadow 0.22s;
    }
    .v3-card:hover { border-color: var(--border2); box-shadow: 0 10px 36px rgba(92,77,232,0.09); }
    .v3-card.v3-card-pop {
      border: 2px solid var(--violet);
      box-shadow: 0 0 0 4px rgba(92,77,232,0.07), 0 20px 56px rgba(92,77,232,0.14);
      background: linear-gradient(160deg, #fdfcff 0%, #f8f6ff 100%);
    }
    .v3-card.v3-card-current {
      border: 2px solid var(--green);
      box-shadow: 0 0 0 4px rgba(16,185,129,0.06);
    }

    .v3-card-ribbon {
      position: absolute; top: -1px; left: 50%; transform: translateX(-50%);
      padding: 5px 18px; border-radius: 0 0 12px 12px;
      font-size: 10.5px; font-weight: 800; letter-spacing: 0.09em;
      text-transform: uppercase; white-space: nowrap;
    }
    .v3-ribbon-pop {
      background: linear-gradient(135deg, var(--violet), #8b5cf6);
      color: #fff; box-shadow: 0 4px 16px rgba(92,77,232,0.38);
    }
    .v3-ribbon-current { background: var(--green); color: #fff; }
    .v3-ribbon-gold {
      background: linear-gradient(135deg, var(--gold), #f97316);
      color: #fff; box-shadow: 0 4px 16px rgba(245,158,11,0.32);
    }
    .v3-ribbon-block {
      background: rgba(239,68,68,0.1); border: 1px solid rgba(239,68,68,0.25);
      color: #ef4444;
    }

    .v3-card-plan-badge {
      display: inline-flex; align-items: center; gap: 6px;
      padding: 4px 12px; border-radius: 999px; font-size: 10.5px; font-weight: 700;
      letter-spacing: 0.07em; text-transform: uppercase; margin-bottom: 16px;
    }
    .v3-badge-free { background: rgba(92,77,232,0.07); color: var(--muted); }
    .v3-badge-lite { background: rgba(92,77,232,0.08); color: var(--violet); }
    .v3-badge-creator { background: linear-gradient(135deg, rgba(92,77,232,0.12), rgba(139,92,246,0.12)); color: var(--violet2); }
    .v3-badge-studio { background: rgba(245,158,11,0.1); color: #d97706; }

    .v3-plan-name {
      font-family: 'Instrument Serif', Georgia, serif;
      font-size: 24px; font-weight: 400; color: var(--ink);
      margin-bottom: 4px; letter-spacing: -0.01em; line-height: 1.2;
    }
    .v3-plan-tagline { font-size: 12.5px; color: var(--muted); margin-bottom: 20px; line-height: 1.5; }

    .v3-price-area { margin-bottom: 6px; }
    .v3-price-strike { font-size: 13px; color: var(--muted2); text-decoration: line-through; margin-bottom: 3px; text-align: center; display: block; }
    .v3-price-row { display: flex; align-items: baseline; gap: 2px; justify-content: center; }
    .v3-price-sym { font-size: 18px; font-weight: 600; color: var(--violet); margin-right: 1px; }
    .v3-price-num {
      font-family: 'Instrument Serif', Georgia, serif;
      font-size: 38px; font-weight: 400; line-height: 1; color: var(--ink);
      letter-spacing: -0.04em;
    }
    .v3-price-per { font-size: 13px; color: var(--muted2); margin-left: 4px; }
    .v3-price-free {
      font-family: 'Instrument Serif', Georgia, serif;
      font-size: 36px; color: var(--muted); font-weight: 400; line-height: 1;
    }
    .v3-price-loading { font-size: 14px; color: var(--muted2); animation: v3-pulse 1.4s ease-in-out infinite; }
    @keyframes v3-pulse { 0%,100%{opacity:0.3} 50%{opacity:1} }
    .v3-price-save {
      display: inline-flex; align-items: center; gap: 4px; margin-top: 7px;
      padding: 3px 10px; border-radius: 999px;
      background: rgba(16,185,129,0.08); border: 1px solid rgba(16,185,129,0.2);
      color: #059669; font-size: 10.5px; font-weight: 700;
    }
    .v3-price-forever { font-size: 12px; color: var(--muted2); margin-top: 6px; }

    /* outcomes = "what you get to create" */
    .v3-outcomes {
      background: var(--surface2); border-radius: 12px;
      padding: 14px 14px; margin: 18px 0;
    }
    .v3-outcomes-title { font-size: 10px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--muted2); margin-bottom: 10px; }
    .v3-outcome-row { display: flex; align-items: center; gap: 8px; margin-bottom: 7px; }
    .v3-outcome-row:last-child { margin-bottom: 0; }
    .v3-outcome-icon { font-size: 16px; flex-shrink: 0; }
    .v3-outcome-label { font-size: 12.5px; color: var(--ink2); font-weight: 500; }
    .v3-outcome-count { font-size: 12.5px; color: var(--violet); font-weight: 700; margin-left: auto; white-space: nowrap; }

    /* features */
    .v3-feats { list-style: none; flex: 1; display: flex; flex-direction: column; gap: 8px; margin-top: 18px; min-height: 0; }
    .v3-feat { display: flex; align-items: flex-start; gap: 6px; font-size: 12px; color: var(--ink2); line-height: 1.4; font-weight: 500; text-align: left; }
    .v3-feat-hl { color: var(--ink2); font-weight: 500; }
    .v3-feat-ico { flex-shrink: 0; margin-top: 1px; }
    .v3-feat-ico.y { color: var(--green); }
    .v3-feat-ico.v { color: var(--violet); }

    /* CTA button */
    .v3-btn {
      width: 100%; padding: 13px 16px; border-radius: 12px; border: none;
      font-family: 'DM Sans', sans-serif; font-size: 13.5px; font-weight: 700;
      cursor: pointer; transition: all 0.2s;
      margin-top: auto;
    }
    .v3-btn:disabled { opacity: 0.42; cursor: not-allowed; transform: none !important; box-shadow: none !important; }
    .v3-btn-plain { background: rgba(92,77,232,0.06); border: 1.5px solid rgba(92,77,232,0.13); color: var(--muted); }
    .v3-btn-plain:hover:not(:disabled) { color: var(--violet); border-color: var(--violet); background: rgba(92,77,232,0.09); }
    .v3-btn-primary {
      background: linear-gradient(135deg, var(--violet) 0%, #8b5cf6 100%);
      color: #fff; box-shadow: 0 8px 28px rgba(92,77,232,0.45);
      font-size: 14px; letter-spacing: 0.02em; padding: 15px 16px;
      border: 2px solid rgba(255,255,255,0.15);
    }
    .v3-btn-primary:hover:not(:disabled) { box-shadow: 0 14px 40px rgba(92,77,232,0.65); transform: translateY(-2px); filter: brightness(1.08); }
    .v3-btn-gold {
      background: linear-gradient(135deg, var(--gold) 0%, #f97316 100%);
      color: #fff; box-shadow: 0 8px 28px rgba(245,158,11,0.42);
      font-size: 14px; letter-spacing: 0.02em; padding: 15px 16px;
      border: 2px solid rgba(255,255,255,0.15);
    }
    .v3-btn-gold:hover:not(:disabled) { box-shadow: 0 14px 40px rgba(245,158,11,0.6); transform: translateY(-2px); filter: brightness(1.08); }
    .v3-btn-green { background: rgba(16,185,129,0.07); border: 1.5px solid rgba(16,185,129,0.25); color: #059669; }
    .v3-btn-block { background: rgba(239,68,68,0.06); border: 1.5px solid rgba(239,68,68,0.2); color: #ef4444; }

    /* ── URGENCY BAR ── */
    .v3-urgency {
      max-width: 1120px; margin: 28px auto 0; padding: 0 24px;
    }
    .v3-urgency-inner {
      background: linear-gradient(135deg, rgba(92,77,232,0.06) 0%, rgba(224,64,160,0.04) 100%);
      border: 1px solid rgba(92,77,232,0.15);
      border-radius: var(--radius-sm);
      padding: 14px 24px;
      display: flex; align-items: center; gap: 14px;
      flex-wrap: wrap;
    }
    .v3-urgency-icon { font-size: 22px; flex-shrink: 0; }
    .v3-urgency-text { font-size: 13.5px; color: var(--ink3); line-height: 1.55; flex: 1; min-width: 200px; }
    .v3-urgency-text strong { color: var(--ink); }
    .v3-urgency-badge {
      background: linear-gradient(135deg, var(--violet), #8b5cf6);
      color: #fff; border-radius: 999px;
      padding: 6px 18px; font-size: 12px; font-weight: 700; white-space: nowrap;
    }

    /* ── COMPARISON ── */
    .v3-compare { background: var(--surface2); padding: 72px 24px; }
    .v3-compare-inner { max-width: 1080px; margin: 0 auto; }
    .v3-section-label {
      font-size: 11.5px; font-weight: 700; letter-spacing: 0.13em;
      text-transform: uppercase; color: var(--violet); margin-bottom: 10px; text-align: center;
    }
    .v3-section-title {
      font-family: 'Instrument Serif', Georgia, serif;
      font-size: clamp(24px, 3.5vw, 40px);
      font-weight: 400; text-align: center;
      letter-spacing: -0.02em; margin-bottom: 14px; color: var(--ink);
    }
    .v3-section-sub { font-size: 15px; color: var(--muted); text-align: center; margin-bottom: 48px; line-height: 1.65; }

    .v3-table-wrap { overflow-x: auto; border-radius: var(--radius); border: 1.5px solid var(--border); box-shadow: 0 2px 16px rgba(92,77,232,0.05); }
    .v3-table { width: 100%; border-collapse: collapse; font-size: 13.5px; min-width: 600px; background: var(--surface); }
    .v3-table th {
      padding: 14px 16px; font-size: 10.5px; font-weight: 800;
      letter-spacing: 0.09em; text-transform: uppercase; color: var(--muted2);
      border-bottom: 1.5px solid var(--border); background: var(--surface2);
      text-align: center;
    }
    .v3-table th:first-child { text-align: left; }
    .v3-table th.hl { color: var(--violet); }
    .v3-table td { padding: 13px 16px; border-bottom: 1px solid var(--border); color: var(--muted); text-align: center; }
    .v3-table td:first-child { text-align: left; color: var(--ink2); font-weight: 500; }
    .v3-table td.hl { color: var(--violet); font-weight: 600; background: rgba(92,77,232,0.026); }
    .v3-table tr:last-child td { border-bottom: none; }
    .v3-table tr:hover td { background: rgba(92,77,232,0.018); }
    .sy { color: #059669 !important; font-weight: 700; }
    .sn { color: #d1d1e0 !important; }

    /* ── TOPUPS ── */
    .v3-topups { background: var(--surface); padding: 72px 24px; }
    .v3-topups-inner { max-width: 900px; margin: 0 auto; }
    .v3-topups-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 40px; }
    @media(max-width: 640px) { .v3-topups-row { grid-template-columns: 1fr; } }

    /* ── USE CASES ── */
    .v3-use { background: var(--surface2); padding: 72px 24px; }
    .v3-use-inner { max-width: 1080px; margin: 0 auto; }
    .v3-use-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; }
    .v3-use-card {
      background: var(--surface);
      border: 1.5px solid var(--border);
      border-radius: var(--radius);
      padding: 28px 22px;
      transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;
    }
    .v3-use-card:hover { border-color: var(--border2); box-shadow: 0 8px 28px rgba(92,77,232,0.08); transform: translateY(-3px); }
    .v3-use-icon { font-size: 30px; margin-bottom: 14px; }
    .v3-use-title { font-family: 'Instrument Serif', Georgia, serif; font-size: 18px; font-weight: 400; margin-bottom: 8px; color: var(--ink); }
    .v3-use-body { font-size: 13px; color: var(--muted); line-height: 1.7; }

    /* ── FAQ ── */
    .v3-faq { background: var(--surface); padding: 72px 24px; }
    .v3-faq-inner { max-width: 720px; margin: 0 auto; }
    .v3-faq-item { border-bottom: 1px solid var(--border); }
    .v3-faq-q {
      display: flex; justify-content: space-between; align-items: center;
      padding: 20px 4px; cursor: pointer; user-select: none;
      font-size: 15px; font-weight: 600; color: var(--ink2);
      transition: color 0.16s;
    }
    .v3-faq-q:hover { color: var(--violet); }
    .v3-faq-chev { color: var(--muted2); font-size: 18px; transition: transform 0.2s; flex-shrink: 0; margin-left: 16px; }
    .v3-faq-chev.open { transform: rotate(180deg); color: var(--violet); }
    .v3-faq-a { padding: 0 4px 20px; font-size: 14px; color: var(--muted); line-height: 1.8; }

    /* ── FINAL CTA ── */
    .v3-final-cta {
      background: linear-gradient(160deg, var(--ink) 0%, var(--ink2) 100%);
      padding: 88px 24px;
      text-align: center;
      position: relative; overflow: hidden;
    }
    .v3-final-cta-bg {
      position: absolute; inset: 0; pointer-events: none;
      background: radial-gradient(ellipse 700px 400px at 50% 50%, rgba(92,77,232,0.22) 0%, transparent 65%);
    }
    .v3-final-inner { position: relative; max-width: 640px; margin: 0 auto; }
    .v3-final-title {
      font-family: 'Instrument Serif', Georgia, serif;
      font-size: clamp(32px, 5vw, 56px); font-weight: 400; color: #fff;
      line-height: 1.1; letter-spacing: -0.025em; margin-bottom: 18px;
    }
    .v3-final-title em {
      font-style: italic;
      background: linear-gradient(120deg, #a899f5, #f06cbe);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
    }
    .v3-final-sub { font-size: 16px; color: rgba(255,255,255,0.55); margin-bottom: 36px; line-height: 1.65; }
    .v3-final-cta-row { display: flex; align-items: center; justify-content: center; gap: 12px; flex-wrap: wrap; }
    .v3-btn-final-primary {
      padding: 15px 38px; border-radius: 999px; border: none;
      font-family: 'DM Sans', sans-serif; font-size: 15px; font-weight: 700;
      cursor: pointer; transition: all 0.2s;
      background: linear-gradient(135deg, var(--violet) 0%, #8b5cf6 100%);
      color: #fff; box-shadow: 0 8px 32px rgba(92,77,232,0.5);
    }
    .v3-btn-final-primary:hover { box-shadow: 0 12px 44px rgba(92,77,232,0.7); transform: translateY(-2px); }
    .v3-btn-final-ghost {
      padding: 15px 28px; border-radius: 999px;
      border: 1.5px solid rgba(255,255,255,0.2); background: transparent;
      font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 600;
      color: rgba(255,255,255,0.65); cursor: pointer; transition: all 0.2s;
    }
    .v3-btn-final-ghost:hover { border-color: rgba(255,255,255,0.5); color: #fff; }
    .v3-final-note { font-size: 12px; color: rgba(255,255,255,0.3); margin-top: 18px; }

    /* ── FOOTER ── */
    .v3-footer {
      background: var(--ink); border-top: 1px solid rgba(255,255,255,0.06);
      text-align: center; padding: 24px;
      font-size: 12.5px; color: rgba(255,255,255,0.3);
    }

    /* ── LOADING ── */
    .v3-loading { display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100vh; gap: 18px; background: var(--surface2); }
    .v3-spinner { width: 40px; height: 40px; border-radius: 50%; border: 2.5px solid var(--border); border-top-color: var(--violet); animation: v3-spin 0.7s linear infinite; }
    @keyframes v3-spin { to { transform: rotate(360deg); } }
    .v3-loading p { font-size: 14px; color: var(--muted2); }

    /* ── MODAL ── */
    .v3-overlay { position: fixed; inset: 0; z-index: 9999; background: rgba(10,5,30,0.6); backdrop-filter: blur(12px); display: flex; align-items: center; justify-content: center; padding: 24px; }
    .v3-modal { position: relative; background: var(--surface); border: 1.5px solid var(--border2); border-radius: 24px; padding: 40px 32px; width: 100%; max-width: 400px; box-shadow: 0 32px 80px rgba(92,77,232,0.22); }
    .v3-modal-close { position: absolute; top: 14px; right: 14px; background: var(--surface2); border: 1px solid var(--border); border-radius: 8px; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; color: var(--muted2); cursor: pointer; transition: all 0.16s; }
    .v3-modal-close:hover { color: var(--violet); border-color: var(--violet); }
    .v3-modal-logo { font-family: 'Instrument Serif', Georgia, serif; font-size: 30px; font-weight: 400; text-align: center; background: linear-gradient(120deg, var(--violet), var(--pink)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 5px; }
    .v3-modal-sub { font-size: 14px; color: var(--muted); text-align: center; margin-bottom: 28px; }
    .v3-modal-form { display: flex; flex-direction: column; gap: 12px; }
    .v3-modal-input { width: 100%; padding: 13px 15px; border-radius: 11px; background: var(--surface2); border: 1.5px solid var(--border); color: var(--ink); font-family: 'DM Sans', sans-serif; font-size: 14px; outline: none; transition: border-color 0.16s; }
    .v3-modal-input:focus { border-color: rgba(92,77,232,0.4); background: #fff; }
    .v3-modal-input::placeholder { color: var(--muted2); }
    .v3-modal-error { background: rgba(239,68,68,0.06); border: 1px solid rgba(239,68,68,0.18); color: #dc2626; border-radius: 10px; padding: 11px 14px; font-size: 13px; margin-bottom: 12px; }
    .v3-modal-or { display: flex; align-items: center; gap: 10px; font-size: 11px; color: var(--muted2); font-weight: 700; letter-spacing: 0.1em; margin: 4px 0; }
    .v3-modal-or::before, .v3-modal-or::after { content: ''; flex: 1; height: 1px; background: var(--border); }
    .v3-modal-link { text-align: center; font-size: 13px; color: var(--muted); margin-top: 14px; }
    .v3-modal-link a { color: var(--violet); text-decoration: none; font-weight: 700; }
    .v3-modal-link a:hover { text-decoration: underline; }
    .v3-modal-loading-overlay { position: absolute; inset: 0; border-radius: 24px; background: rgba(255,255,255,0.94); backdrop-filter: blur(4px); display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 12px; z-index: 10; }
    .v3-modal-loading-overlay p { font-size: 14px; color: var(--muted2); }
    #googleSignInButtonPricing { display: flex; justify-content: center; }

    @media(max-width:600px) {
      .v3-card.v3-card-pop { box-shadow: none; }
      .v3-trust-item { padding: 12px 14px; }
    }
  `;
  document.head.appendChild(s);
};

/* ─────────────────────────────────────────────────────────────────────
   FAQ DATA
───────────────────────────────────────────────────────────────────── */
const FAQ = [
  {
    q: 'What exactly are credits and how do I use them?',
    a: 'Credits are your universal AI fuel. Every action on Scenith — generating an image, creating a video, recording a voice, removing a background — costs a small number of credits. They\'re all drawn from one shared pool so you\'re never locked into using one tool. Monthly credits refresh automatically on your renewal date.'
  },
  {
    q: 'Do unused credits roll over to the next month?',
    a: 'Yes — unused credits carry over and stack with your next monthly grant, up to expiry. Your credit balance doesn\'t reset to zero; it gets topped up. This means power users can bank credits during lighter months.'
  },
  {
    q: 'What happens when I run out of credits?',
    a: 'Your tools pause until you top up or your plan renews. You can purchase one-time credit packs (available to paid plan users) to get back to work instantly — no waiting for renewal.'
  },
  {
    q: 'Can I upgrade or change my plan anytime?',
    a: 'Upgrades take effect immediately — you\'ll get your new credit allocation right away. Downgrades apply at the start of your next billing cycle. All plans are month-to-month with no lock-in.'
  },
  {
    q: 'Is the content I create mine to use commercially?',
    a: 'Yes, 100%. All generated content — voices, videos, images — belongs to you and can be used in commercial projects, client work, YouTube, ads, and anywhere else. No attribution required on any plan.'
  },
  {
    q: 'What payment methods do you accept?',
    a: 'Indian users can pay via Razorpay (UPI, credit/debit cards, net banking, wallets). International users pay via PayPal (cards and PayPal balance). All transactions are encrypted and secure.'
  },
  {
    q: 'Do you offer refunds?',
    a: 'We don\'t offer refunds on plans or topups. That\'s why we recommend starting on the free plan — it gives you real access to core features so you can judge quality before committing.'
  },
];

/* ─────────────────────────────────────────────────────────────────────
   CREDIT EXPLAINER DATA
───────────────────────────────────────────────────────────────────── */
const CREDIT_USES = [
  { icon: '🖼️', count: '10–15 cr', unit: 'per image', label: 'AI Image (standard)' },
  { icon: '🎬', count: '50–100 cr', unit: 'per video', label: 'AI Video Generation' },
  { icon: '✂️', count: '10 cr', unit: 'per image', label: 'Background Removal' },
  { icon: '⚡', count: '10 cr', unit: 'per video', label: 'Speed Video' },
  { icon: '📝', count: '10 cr', unit: 'per file', label: 'AI Subtitles' },
];

/* ─────────────────────────────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────────────────────────────── */
export default function PricingPageClient() {
  const router = useRouter();
  const [currentPlan, setCurrentPlan] = useState<'BASIC' | 'SPARK'  | 'MICRO' | 'CREATOR_LITE' | 'CREATOR' | 'STUDIO' | 'ADMIN'>('BASIC');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState<string | null>(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [isIndianUser, setIsIndianUser] = useState<boolean | null>(null);
  const [isPricingReady, setIsPricingReady] = useState(false);
  const [isPaymentInProgress, setIsPaymentInProgress] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const plansRef = useRef<HTMLDivElement>(null);
  const scrollToPlans = () => plansRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  useEffect(() => { injectStyles(); }, []);

  useEffect(() => {
    const fetchUserProfile = async () => {
      const token = localStorage.getItem('token');
      if (!token) { setIsLoggedIn(false); return; }
      try {
        const res = await axios.get(`${API_BASE_URL}/auth/me`, { headers: { Authorization: `Bearer ${token}` } });
        const plansRes = await axios.get(`${API_BASE_URL}/api/payments/active-plans`, { headers: { Authorization: `Bearer ${token}` } }).catch(() => ({ data: [] }));
        const activePlans: string[] = plansRes.data.map((p: any) => p.planType);
        if (activePlans.includes('STUDIO')) setCurrentPlan('STUDIO');
        else if (activePlans.includes('CREATOR')) setCurrentPlan('CREATOR');
        else if (activePlans.includes('CREATOR_LITE')) setCurrentPlan('CREATOR_LITE');
        else if (activePlans.includes('SPARK')) setCurrentPlan('SPARK');
        else if (activePlans.includes('MICRO')) setCurrentPlan('MICRO');
        else if (res.data.role === 'ADMIN') setCurrentPlan('ADMIN');
        else setCurrentPlan('BASIC');
        setIsLoggedIn(true);
      } catch { setIsLoggedIn(false); }
    };
    fetchUserProfile();
  }, []);

  useEffect(() => {
    if (!showLoginModal) return;
    const init = () => {
      if (window.google?.accounts) {
        window.google.accounts.id.initialize({ client_id: '397321320139-tpd310sq9j8rdngqd9kdmhgegco52b3g.apps.googleusercontent.com', callback: handleGoogleLogin });
        const el = document.getElementById('googleSignInButtonPricing');
        if (el) window.google.accounts.id.renderButton(el, { theme: 'outline', size: 'large', width: 300 });
      } else { setTimeout(init, 100); }
    };
    init();
  }, [showLoginModal]);

  useEffect(() => {
    const handler = (e: BeforeUnloadEvent) => {
      if (isPaymentInProgress) { e.preventDefault(); e.returnValue = 'Payment in progress. Leave?'; return e.returnValue; }
    };
    window.addEventListener('beforeunload', handler);
    return () => window.removeEventListener('beforeunload', handler);
  }, [isPaymentInProgress]);

  useEffect(() => {
    const detect = async () => {
      const apis = [
        { url: 'https://api.country.is/', get: (d: any) => d.country },
        { url: 'https://freeipapi.com/api/json/', get: (d: any) => d.countryCode },
        { url: 'https://ipapi.co/json/', get: (d: any) => d.country_code },
      ];
      for (const api of apis) {
        try {
          const r = await fetch(api.url);
          if (!r.ok) continue;
          const d = await r.json();
          const c = api.get(d);
          if (c) { setIsIndianUser(c === 'IN'); return; }
        } catch { continue; }
      }
      try {
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        setIsIndianUser(tz === 'Asia/Calcutta' || tz === 'Asia/Kolkata');
      } catch { setIsIndianUser(false); }
    };
    detect().finally(() => setIsPricingReady(true));
  }, []);

  useEffect(() => {
    if (!document.getElementById('paypal-sdk')) {
      const s = document.createElement('script');
      s.src = 'https://www.paypal.com/sdk/js?client-id=AcxQJG7b-ZyAXBRp2P3GFJs-Unh0tvJHz2nlTrOaNi8vSnoy2POnyaH1ajhHXp4K8a5LJ6EIHfS3Yc3T&currency=USD';
      s.id = 'paypal-sdk';
      document.body.appendChild(s);
    }
  }, []);

  /* ── handleUpgrade — original logic untouched ── */
  const handleUpgrade = async (plan: PricingPlan) => {
    if (!isLoggedIn) { setShowLoginModal(true); return; }
    if (plan.role === 'BASIC' || plan.role === currentPlan) return;
    setLoading(plan.role);
    try {
      const orderResponse = await axios.post(`${API_BASE_URL}/api/payments/create-order`, { planType: plan.role, amount: plan.price, currency: plan.currency }, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
      const { internalOrderId, gatewayOrderId, keyId, gateway } = orderResponse.data;
      if (gateway === 'razorpay') {
        if (!document.getElementById('razorpay-script')) { const sc = document.createElement('script'); sc.src = 'https://checkout.razorpay.com/v1/checkout.js'; sc.id = 'razorpay-script'; document.body.appendChild(sc); }
        const opts = {
          key: keyId, amount: plan.price * 100, currency: 'INR', order_id: gatewayOrderId, name: 'Scenith', description: `Upgrade to ${plan.name}`,
          modal: { ondismiss: () => { setIsPaymentInProgress(false); setLoading(null); } },
          handler: async (response: any) => {
            setIsPaymentInProgress(true);
            try {
              await axios.post(`${API_BASE_URL}/api/payments/verify-razorpay`, { internalOrderId, razorpay_payment_id: response.razorpay_payment_id, razorpay_order_id: response.razorpay_order_id, razorpay_signature: response.razorpay_signature }, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
              setIsPaymentInProgress(false);
              alert(`🎉 Successfully upgraded to ${plan.name}!`);
              setCurrentPlan(plan.role);
              router.push('/create-ai-content');
            } catch { setIsPaymentInProgress(false); alert('Payment verification failed. Please contact support.'); }
          },
          prefill: { email: userProfile?.email || '', name: userProfile ? `${userProfile.firstName} ${userProfile.lastName}`.trim() : '' },
          theme: { color: '#5c4de8' }
        };
        // @ts-ignore
        new window.Razorpay(opts).open();
      } else if (gateway === 'paypal') {
        let container = document.getElementById('paypal-button-container');
        if (!container) { container = document.createElement('div'); container.id = 'paypal-button-container'; container.style.cssText = 'position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);z-index:1000;background:white;padding:20px;border-radius:12px;box-shadow:0 10px 30px rgba(0,0,0,0.3)'; document.body.appendChild(container); }
        container.innerHTML = '';
        // @ts-ignore
        paypal.Buttons({ createOrder: () => gatewayOrderId, onApprove: async (data: any) => { setIsPaymentInProgress(true); try { await axios.post(`${API_BASE_URL}/api/payments/capture-paypal`, { internalOrderId, paypalOrderId: data.orderID }, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }); setIsPaymentInProgress(false); alert(`🎉 Successfully upgraded to ${plan.name} via PayPal!`); setCurrentPlan(plan.role); router.push('/create-ai-content'); } catch { setIsPaymentInProgress(false); alert('Error capturing payment.'); } finally { if (container) document.body.removeChild(container); } }, onCancel: () => { if (container) document.body.removeChild(container); }, onError: (err: any) => { console.error(err); if (container) document.body.removeChild(container); } }).render('#paypal-button-container');
      }
    } catch (error: any) { setIsPaymentInProgress(false); alert('Error: ' + (error.response?.data || error.message)); }
    finally { setLoading(null); }
  };

  const handleLogin = async (formData: { email: string; password: string }) => {
    setIsLoggingIn(true); setLoginError(null);
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/login`, formData);
      const { token } = response.data;
      localStorage.setItem('token', token);
      const profileRes = await axios.get(`${API_BASE_URL}/auth/me`, { headers: { Authorization: `Bearer ${token}` } });
      const nameParts = (profileRes.data.name || '').trim().split(' ');
      setUserProfile({ email: profileRes.data.email || '', firstName: nameParts[0] || '', lastName: nameParts.slice(1).join(' '), picture: profileRes.data.picture || null, googleAuth: false, role: profileRes.data.role || 'BASIC' });
      setCurrentPlan(profileRes.data.role || 'BASIC');
      setIsLoggedIn(true); setShowLoginModal(false);
    } catch (error: any) { setLoginError(error.response?.data?.message || 'Login failed. Please check your credentials.'); }
    finally { setIsLoggingIn(false); }
  };

  const handleGoogleLogin = async (credentialResponse: any) => {
    setLoginError(null); setIsLoggingIn(true);
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/google`, { token: credentialResponse.credential });
      const { token } = response.data;
      localStorage.setItem('token', token);
      const profileRes = await axios.get(`${API_BASE_URL}/auth/me`, { headers: { Authorization: `Bearer ${token}` } });
      const nameParts = (profileRes.data.name || '').trim().split(' ');
      setUserProfile({ email: profileRes.data.email || '', firstName: nameParts[0] || '', lastName: nameParts.slice(1).join(' '), picture: profileRes.data.picture || null, googleAuth: true, role: profileRes.data.role || 'BASIC' });
      setCurrentPlan(profileRes.data.role || 'BASIC');
      setIsLoggedIn(true); setShowLoginModal(false);
    } catch (error: any) { setLoginError(error.response?.data?.message || 'Google login failed'); }
    finally { setIsLoggingIn(false); }
  };

  const handleTopupPurchase = async (pack: TopupPack) => {
    if (!isLoggedIn) { setShowLoginModal(true); return; }
    if (currentPlan === 'BASIC') { alert('Topups are only available for paid plan users. Please upgrade to a Creator plan first.'); return; }
    setLoading(pack.planType);
    try {
      const orderResponse = await axios.post(`${API_BASE_URL}/api/payments/create-topup-order`, { planType: pack.planType, amount: pack.price, currency: pack.currency }, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
      const { internalOrderId, gatewayOrderId, keyId, gateway } = orderResponse.data;
      if (gateway === 'razorpay') {
        if (!document.getElementById('razorpay-script')) { const sc = document.createElement('script'); sc.src = 'https://checkout.razorpay.com/v1/checkout.js'; sc.id = 'razorpay-script'; document.body.appendChild(sc); }
        const opts = { key: keyId, amount: pack.price * 100, currency: 'INR', order_id: gatewayOrderId, name: 'Scenith', description: `${pack.name} — ${pack.credits} Credits`, modal: { ondismiss: () => { setIsPaymentInProgress(false); setLoading(null); } }, handler: async (response: any) => { setIsPaymentInProgress(true); try { await axios.post(`${API_BASE_URL}/api/payments/verify-razorpay`, { internalOrderId, razorpay_payment_id: response.razorpay_payment_id, razorpay_order_id: response.razorpay_order_id, razorpay_signature: response.razorpay_signature }, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }); setIsPaymentInProgress(false); alert(`🎉 ${pack.credits} credits added!`); } catch { setIsPaymentInProgress(false); alert('Payment verification failed.'); } }, prefill: { email: userProfile?.email || '', name: userProfile ? `${userProfile.firstName} ${userProfile.lastName}`.trim() : '' }, theme: { color: '#5c4de8' } };
        // @ts-ignore
        new window.Razorpay(opts).open();
      } else if (gateway === 'paypal') {
        let container = document.getElementById('paypal-button-container');
        if (!container) { container = document.createElement('div'); container.id = 'paypal-button-container'; container.style.cssText = 'position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);z-index:1000;background:white;padding:20px;border-radius:12px;box-shadow:0 10px 30px rgba(0,0,0,0.3)'; document.body.appendChild(container); }
        container.innerHTML = '';
        // @ts-ignore
        paypal.Buttons({ createOrder: () => gatewayOrderId, onApprove: async (data: any) => { setIsPaymentInProgress(true); try { await axios.post(`${API_BASE_URL}/api/payments/capture-paypal`, { internalOrderId, paypalOrderId: data.orderID }, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }); setIsPaymentInProgress(false); alert(`🎉 ${pack.credits} credits added!`); } catch { setIsPaymentInProgress(false); alert('Error.'); } finally { if (container) document.body.removeChild(container); } }, onCancel: () => { if (container) document.body.removeChild(container); }, onError: (err: any) => { console.error(err); if (container) document.body.removeChild(container); } }).render('#paypal-button-container');
      }
    } catch (error: any) { setIsPaymentInProgress(false); alert('Error: ' + (error.response?.data || error.message)); }
    finally { setLoading(null); }
  };

  /* ── PLAN DATA ── */
  const getPlans = (): PricingPlan[] => {
    if (isIndianUser === null) {
      return [
        { name: 'Starter Forge', role: 'BASIC', price: 0, currency: 'FREE', ttsLimit: 600, tagline: 'Try every tool, no card required.', features: ['50 credits/mo', '600 voice chars/mo', '5 speed videos + 5 BG removals', '10 SVG downloads', '720p export with watermark'], outcomes: [{ icon: '🎙️', label: 'Voice (600 chars)' }, { icon: '✂️', label: '5 BG removals' }] },
        { name: 'Spark', role: 'SPARK', price: 0, currency: 'LOADING', ttsLimit: 5000, tagline: 'Ignite your first AI creation.', features: ['50 credits', 'All tools unlocked', '1080p · No watermark', 'One-time entry plan'], outcomes: [{ icon: '🎙️', label: '~5 voice segments' }, { icon: '✂️', label: '5 BG removals' }] },
        { name: 'Starter Pack', role: 'MICRO', price: 0, currency: 'LOADING', ttsLimit: 10000, tagline: 'Dip your toes in — low commitment.', features: ['150 credits/mo', '10,000 voice chars/mo', 'All tools unlocked', '1080p · No watermark', 'Topups available'], outcomes: [{ icon: '🎙️', label: '~100 voice segments' }, { icon: '🖼️', label: '~10 AI images' }] },
        { name: 'Creator Lite', role: 'CREATOR_LITE', price: 0, currency: 'LOADING', ttsLimit: 50000, tagline: 'Your first real creative toolkit.', features: ['500 credits/mo · 50,000 voice chars', 'All AI models unlocked', '1080p · No watermark', '30 speed videos · 100 BG removals', 'Unlimited SVGs · Topups available'], outcomes: [{ icon: '🎙️', label: '~500 voice segments' }, { icon: '🖼️', label: '~150 AI images' }, { icon: '🎬', label: '3–6 AI videos' }] },
        { name: 'Creator Spark', role: 'CREATOR', price: 0, currency: 'LOADING', ttsLimit: 150000, popular: true, tagline: 'Everything you need to go pro.', features: ['1,000 credits/mo · 150,000 voice chars', 'All AI models · 1440p export', '60 speed videos · 500 BG removals', 'Unlimited SVGs · Priority support', 'Topups available'], outcomes: [{ icon: '🎙️', label: '~1,500 voice segments' }, { icon: '🖼️', label: '~450 AI images' }, { icon: '🎬', label: '9–18 AI videos' }] },
        { name: 'Creator Odyssey', role: 'STUDIO', price: 0, currency: 'LOADING', ttsLimit: 400000, tagline: 'Unlimited power for serious creators.', features: ['2,500 credits/mo · 400,000 voice chars', 'All AI models · 4K export', 'Unlimited speed videos + BG removals', 'Fastest queue · Dedicated support', 'Topups available'], outcomes: [{ icon: '🎙️', label: '~4,000 voice segments' }, { icon: '🖼️', label: '~1,250 AI images' }, { icon: '🎬', label: '25–50 AI videos' }] },
      ];
    }
    const sym = isIndianUser ? '₹' : '$';
    const cur = isIndianUser ? 'INR' : 'USD';
    const p = isIndianUser ? { lite: 799, creator: 1749, studio: 3599 } : { lite: 9, creator: 19, studio: 39 };
    const o = { lite: Math.round(p.lite / 0.75), creator: Math.round(p.creator / 0.75), studio: Math.round(p.studio / 0.75) };
    return [
      { name: 'Starter Forge', role: 'BASIC', price: 0, currency: 'FREE', ttsLimit: 600, tagline: 'Try every tool, no card required.', features: ['50 credits/mo', '600 voice chars/mo', '5 speed videos + 5 BG removals', '10 SVG downloads', '720p export with watermark'], outcomes: [{ icon: '🎙️', label: 'Voice (600 chars)' }, { icon: '✂️', label: '5 BG removals' }] },
      { name: 'Spark', role: 'SPARK', price: isIndianUser ? 50 : 1, originalPrice: isIndianUser ? 99 : 2, currency: cur, symbol: sym, ttsLimit: 5000, tagline: 'Ignite your first AI creation.', features: ['50 credits', 'All tools unlocked', '1080p · No watermark', 'One-time entry plan'], outcomes: [{ icon: '🎙️', label: '~5 voice segments' }, { icon: '✂️', label: '5 BG removals' }] },
      { name: 'Starter Pack', role: 'MICRO', price: isIndianUser ? 150 : 3, originalPrice: isIndianUser ? 200 : 4, currency: cur, symbol: sym, ttsLimit: 10000, tagline: 'Dip your toes in — low commitment.', features: ['150 credits/mo', '10,000 voice chars/mo', 'All tools unlocked', '1080p · No watermark', 'Topups available'], outcomes: [{ icon: '🎙️', label: '~100 voice segments' }, { icon: '🖼️', label: '~10 AI images' }] },
      { name: 'Creator Lite', role: 'CREATOR_LITE', price: p.lite, originalPrice: o.lite, currency: cur, symbol: sym, ttsLimit: 50000, tagline: 'Your first real creative toolkit.', features: ['500 credits/mo · 50,000 voice chars', 'All AI models unlocked', '1080p · No watermark', '30 speed videos · 100 BG removals', 'Unlimited SVGs · Topups available'], outcomes: [{ icon: '🎙️', label: '~500 voice segments' }, { icon: '🖼️', label: '~150 AI images' }, { icon: '🎬', label: '3–6 AI videos' }] },
      { name: 'Creator Spark', role: 'CREATOR', price: p.creator, originalPrice: o.creator, currency: cur, symbol: sym, ttsLimit: 150000, popular: true, tagline: 'Everything you need to go pro.', features: ['1,000 credits/mo · 150,000 voice chars', 'All AI models · 1440p export', '60 speed videos · 500 BG removals', 'Unlimited SVGs · Priority support', 'Topups available'], outcomes: [{ icon: '🎙️', label: '~1,500 voice segments' }, { icon: '🖼️', label: '~450 AI images' }, { icon: '🎬', label: '9–18 AI videos' }] },
      { name: 'Creator Odyssey', role: 'STUDIO', price: p.studio, originalPrice: o.studio, currency: cur, symbol: sym, ttsLimit: 400000, tagline: 'Unlimited power for serious creators.', features: ['2,500 credits/mo · 400,000 voice chars', 'All AI models · 4K export', 'Unlimited speed videos + BG removals', 'Fastest queue · Dedicated support', 'Topups available'], outcomes: [{ icon: '🎙️', label: '~4,000 voice segments' }, { icon: '🖼️', label: '~1,250 AI images' }, { icon: '🎬', label: '25–50 AI videos' }] },
    ];
  };

  const getTopupPacks = (): TopupPack[] => {
    if (isIndianUser === null) return [
      { name: 'Small Pack', planType: 'TOPUP_SMALL', credits: 500, price: 0, currency: 'LOADING', perCreditLabel: '—' },
      { name: 'Medium Pack', planType: 'TOPUP_MEDIUM', credits: 1500, price: 0, currency: 'LOADING', perCreditLabel: '—', badge: '⭐ Best Value' },
      { name: 'Large Pack', planType: 'TOPUP_LARGE', credits: 5000, price: 0, currency: 'LOADING', perCreditLabel: '—' },
    ];
    const currency = isIndianUser ? 'INR' : 'USD';
    const symbol = isIndianUser ? '₹' : '$';
    const prices = isIndianUser ? { small: 499, medium: 1199, large: 2999 } : { small: 5, medium: 12, large: 30 };
    const originals = { small: Math.round(prices.small / 0.75), medium: Math.round(prices.medium / 0.75), large: Math.round(prices.large / 0.75) };
    const perCredit = (p: number, c: number) => isIndianUser ? `₹${(p / c).toFixed(2)}/cr` : `$${(p / c).toFixed(3)}/cr`;
    return [
      { name: 'Small Pack', planType: 'TOPUP_SMALL', credits: 500, price: prices.small, originalPrice: originals.small, currency, symbol, perCreditLabel: perCredit(prices.small, 500) },
      { name: 'Medium Pack', planType: 'TOPUP_MEDIUM', credits: 1500, price: prices.medium, originalPrice: originals.medium, currency, symbol, badge: '⭐ Best Value', perCreditLabel: perCredit(prices.medium, 1500) },
      { name: 'Large Pack', planType: 'TOPUP_LARGE', credits: 5000, price: prices.large, originalPrice: originals.large, currency, symbol, perCreditLabel: perCredit(prices.large, 5000) },
    ];
  };

  const plans = getPlans();
  const topupPacks = getTopupPacks();
  const isPaidUser = currentPlan !== 'BASIC' && currentPlan !== 'ADMIN';

  if (!isPricingReady) return (
    <div className="v3-root">
      <div className="v3-loading"><div className="v3-spinner" /><p>Loading pricing...</p></div>
    </div>
  );

  return (
    <div className="v3-root">

      {/* ══ TICKER ══ */}
      <div className="v3-ticker">
        <div className="v3-ticker-inner">
          <span className="v3-ticker-pill">🔥 LIMITED TIME</span>
          All plans are 25% off introductory pricing — lock in your rate today
          <span className="v3-ticker-pill">2,500+ creators</span>
        </div>
      </div>

      {/* ══ HERO ══ */}
      <header className="v3-hero">
        <div className="v3-hero-bg" />
        <div className="v3-hero-dots" />

        {/* ══ PRICING ══ */}
        <div className="v3-pricing" ref={plansRef}>
          <motion.div className="v3-proof-row" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="v3-proof-avatars">
              {['A','B','C','D','E'].map((l,i) => (
                <div key={i} className="v3-proof-avatar" style={{ background: `linear-gradient(135deg, hsl(${220+i*24},70%,60%), hsl(${260+i*20},65%,55%))` }}>{l}</div>
              ))}
            </div>
            <span className="v3-proof-text"><strong>2,500+ creators</strong> are building with Scenith</span>
          </motion.div>

          <motion.h1 className="v3-h1" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.08 }}>
            Create AI Images, Videos<br />
            & Voice <em>Without Limits</em>
          </motion.h1>

          <motion.p className="v3-hero-sub" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.16 }}>
            One unified credit pool for every AI tool. Start free — upgrade when you're ready to create more.
          </motion.p>
          <div className="v3-plans-wrap">
          <div className="v3-plans-row">
              {/* ── Top row: Spark + Micro ── */}
              <div className="v3-plans-row-top">
              {plans.filter(plan => plan.role === 'SPARK' || plan.role === 'MICRO').map((plan, idx) => {
                const isFree = plan.price === 0;
                const isPopular = plan.role === 'CREATOR';
                const isStudio  = plan.role === 'STUDIO';
                const isStarter = plan.role === 'MICRO' || plan.role === 'SPARK';
                const isCurrent = currentPlan === plan.role;
                const isDowngradeBlocked =
                  (currentPlan === 'STUDIO' && (plan.role === 'CREATOR' || plan.role === 'CREATOR_LITE' || plan.role === 'MICRO' || plan.role === 'SPARK')) ||
                  (currentPlan === 'CREATOR' && (plan.role === 'CREATOR_LITE' || plan.role === 'MICRO' || plan.role === 'SPARK')) ||
                  (currentPlan === 'CREATOR_LITE' && (plan.role === 'MICRO' || plan.role === 'SPARK')) ||
                  (currentPlan === 'MICRO' && plan.role === 'SPARK');
                const badgeClass = () => {
                  if (plan.role === 'SPARK') return 'v3-card-plan-badge v3-badge-free';
                  if (plan.role === 'MICRO') return 'v3-card-plan-badge v3-badge-free';
                  if (plan.role === 'CREATOR_LITE') return 'v3-card-plan-badge v3-badge-lite';
                  if (isPopular) return 'v3-card-plan-badge v3-badge-creator';
                  if (isStudio) return 'v3-card-plan-badge v3-badge-studio';
                  return 'v3-card-plan-badge v3-badge-free';
                };
                const badgeLabel = () => {
                  if (plan.role === 'BASIC') return '🌱 Free';
                  if (plan.role === 'SPARK') return '✨ Spark';
                  if (plan.role === 'MICRO') return '🌟 Starter';
                  if (plan.role === 'CREATOR_LITE') return '⚡ Lite';
                  if (isPopular) return '⭐ Most Popular';
                  return '👑 Pro';
                };
                const btnClass = () => {
                  if (isCurrent) return 'v3-btn v3-btn-green';
                  if (isDowngradeBlocked) return 'v3-btn v3-btn-block';
                  if (isFree) return 'v3-btn v3-btn-plain';
                  if (isStudio) return 'v3-btn v3-btn-gold';
                  return 'v3-btn v3-btn-primary';
                };
                const btnLabel = () => {
                  if (loading === plan.role) return 'Processing...';
                  if (isCurrent) return '✓ Your Current Plan';
                  if (isDowngradeBlocked) return 'Downgrade Not Available';
                  if (isFree) return 'Free Forever';
                  return `Get ${plan.name} →`;
                };

                return (
                  <motion.div
                    key={plan.role}
                    className={`v3-card${isPopular ? ' v3-card-pop' : ''}${isCurrent ? ' v3-card-current' : ''}`}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.44, delay: idx * 0.07 }}
                  >
                    {/* top ribbon */}
                    {isPopular && !isCurrent && !isDowngradeBlocked && <div className="v3-card-ribbon v3-ribbon-pop">⭐ Most Popular</div>}
                    {isStudio && !isCurrent && !isDowngradeBlocked && <div className="v3-card-ribbon v3-ribbon-gold">👑 Best Value</div>}
                    {isCurrent && <div className="v3-card-ribbon v3-ribbon-current">✓ Active Plan</div>}
                    {isDowngradeBlocked && <div className="v3-card-ribbon v3-ribbon-block">Downgrade Not Available</div>}

                    <span className={badgeClass()}>{badgeLabel()}</span>
                    <h2 className="v3-plan-name">{plan.name}</h2>
                    <p className="v3-plan-tagline">{plan.tagline}</p>

                    {/* price */}
                    {plan.currency === 'LOADING' ? (
                      <div className="v3-price-area"><span className="v3-price-loading">Loading price...</span></div>
                    ) : isFree ? (
                      <div className="v3-price-area">
                        <div className="v3-price-free">Free</div>
                        <div className="v3-price-forever">Always free, no card needed</div>
                      </div>
                    ) : (
                      <div className="v3-price-area">
                        {plan.originalPrice && <div className="v3-price-strike">{plan.symbol}{plan.originalPrice}/mo</div>}
                        <div className="v3-price-row">
                          <span className="v3-price-sym">{plan.symbol}</span>
                          <span className="v3-price-num">{plan.price}</span>
                          <span className="v3-price-per">/mo</span>
                        </div>
                        <span className="v3-price-save">✓ 25% introductory discount</span>
                      </div>
                    )}

                    {isFree && (
                      <div className="v3-outcomes">
                        <div className="v3-outcomes-title">Try every tool free</div>
                        {plan.outcomes.map((o, i) => (
                          <div key={i} className="v3-outcome-row">
                            <span className="v3-outcome-icon">{o.icon}</span>
                            <span className="v3-outcome-label">{o.label}</span>
                            <span className="v3-outcome-count">/ mo</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* features */}
                    <ul className="v3-feats">
                      {plan.features.map((feat, i) => {
                        const boldified = feat
                          .replace(
                            /(\d[\d,]*(?:\s?(?:credits?|cr|chars?|characters?|videos?|images?|SVGs?|removals?|K|p))(?:\/mo)?)/gi,
                            '<strong>$1</strong>'
                          )
                          .replace(
                            /\b(\d[\d,]+)\b/g,
                            '<strong>$1</strong>'
                          );
                        return (
                          <li key={i} className="v3-feat v3-feat-hl">
                            <span className={`v3-feat-ico ${isFree ? 'y' : 'v'}`}>✓</span>
                            <span dangerouslySetInnerHTML={{ __html: boldified }} />
                          </li>
                        );
                      })}
                    </ul>
                    {!isFree && plan.currency !== 'LOADING' && (
                      <div className="v3-outcomes">
                        <div className="v3-outcomes-title">With this plan you can create</div>
                        {plan.outcomes.map((o, i) => (
                          <div key={i} className="v3-outcome-row">
                            <span className="v3-outcome-icon">{o.icon}</span>
                            <span className="v3-outcome-label">{o.label}</span>
                            <span className="v3-outcome-count">/ mo</span>
                          </div>
                        ))}
                      </div>
                    )}                    

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
              <div className="v3-plans-row-divider">
                <span className="v3-plans-row-divider-label">↑ Entry plans · Professional plans ↓</span>
              </div>
              {/* ── Bottom row: Creator Lite, Creator Spark, Creator Odyssey ── */}
              <div className="v3-plans-row-bottom">
              {plans.filter(plan => plan.role === 'CREATOR_LITE' || plan.role === 'CREATOR' || plan.role === 'STUDIO').map((plan, idx) => {
                const isFree = plan.price === 0;
                const isPopular = plan.role === 'CREATOR';
                const isStudio  = plan.role === 'STUDIO';
                const isStarter = plan.role === 'MICRO' || plan.role === 'SPARK';
                const isCurrent = currentPlan === plan.role;
                const isDowngradeBlocked =
                  (currentPlan === 'STUDIO' && (plan.role === 'CREATOR' || plan.role === 'CREATOR_LITE' || plan.role === 'MICRO' || plan.role === 'SPARK')) ||
                  (currentPlan === 'CREATOR' && (plan.role === 'CREATOR_LITE' || plan.role === 'MICRO' || plan.role === 'SPARK')) ||
                  (currentPlan === 'CREATOR_LITE' && (plan.role === 'MICRO' || plan.role === 'SPARK')) ||
                  (currentPlan === 'MICRO' && plan.role === 'SPARK');
                const badgeClass = () => {
                  if (plan.role === 'SPARK') return 'v3-card-plan-badge v3-badge-free';
                  if (plan.role === 'MICRO') return 'v3-card-plan-badge v3-badge-free';
                  if (plan.role === 'CREATOR_LITE') return 'v3-card-plan-badge v3-badge-lite';
                  if (isPopular) return 'v3-card-plan-badge v3-badge-creator';
                  if (isStudio) return 'v3-card-plan-badge v3-badge-studio';
                  return 'v3-card-plan-badge v3-badge-free';
                };
                const badgeLabel = () => {
                  if (plan.role === 'SPARK') return '✨ Spark';
                  if (plan.role === 'MICRO') return '🌟 Starter';
                  if (plan.role === 'CREATOR_LITE') return '⚡ Lite';
                  if (isPopular) return '⭐ Most Popular';
                  return '👑 Pro';
                };
                const btnClass = () => {
                  if (isCurrent) return 'v3-btn v3-btn-green';
                  if (isDowngradeBlocked) return 'v3-btn v3-btn-block';
                  if (isFree) return 'v3-btn v3-btn-plain';
                  if (isStudio) return 'v3-btn v3-btn-gold';
                  return 'v3-btn v3-btn-primary';
                };
                const btnLabel = () => {
                  if (loading === plan.role) return 'Processing...';
                  if (isCurrent) return '✓ Your Current Plan';
                  if (isDowngradeBlocked) return 'Downgrade Not Available';
                  if (isFree) return 'Free Forever';
                  return `Get ${plan.name} →`;
                };
                return (
                  <motion.div
                    key={plan.role}
                    className={`v3-card${isPopular ? ' v3-card-pop' : ''}${isCurrent ? ' v3-card-current' : ''}`}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.44, delay: idx * 0.07 }}
                  >
                    {isPopular && !isCurrent && !isDowngradeBlocked && <div className="v3-card-ribbon v3-ribbon-pop">⭐ Most Popular</div>}
                    {isStudio && !isCurrent && !isDowngradeBlocked && <div className="v3-card-ribbon v3-ribbon-gold">👑 Best Value</div>}
                    {isCurrent && <div className="v3-card-ribbon v3-ribbon-current">✓ Active Plan</div>}
                    {isDowngradeBlocked && <div className="v3-card-ribbon v3-ribbon-block">Downgrade Not Available</div>}
                    <span className={badgeClass()}>{badgeLabel()}</span>
                    <h2 className="v3-plan-name">{plan.name}</h2>
                    <p className="v3-plan-tagline">{plan.tagline}</p>
                    {plan.currency === 'LOADING' ? (
                      <div className="v3-price-area"><span className="v3-price-loading">Loading price...</span></div>
                    ) : isFree ? (
                      <div className="v3-price-area">
                        <div className="v3-price-free">Free</div>
                        <div className="v3-price-forever">Always free, no card needed</div>
                      </div>
                    ) : (
                      <div className="v3-price-area">
                        {plan.originalPrice && <div className="v3-price-strike">{plan.symbol}{plan.originalPrice}/mo</div>}
                        <div className="v3-price-row">
                          <span className="v3-price-sym">{plan.symbol}</span>
                          <span className="v3-price-num">{plan.price}</span>
                          <span className="v3-price-per">/mo</span>
                        </div>
                        <span className="v3-price-save">✓ 25% introductory discount</span>
                      </div>
                    )}
                    {isFree && (
                      <div className="v3-outcomes">
                        <div className="v3-outcomes-title">Try every tool free</div>
                        {plan.outcomes.map((o, i) => (
                          <div key={i} className="v3-outcome-row">
                            <span className="v3-outcome-icon">{o.icon}</span>
                            <span className="v3-outcome-label">{o.label}</span>
                            <span className="v3-outcome-count">/ mo</span>
                          </div>
                        ))}
                      </div>
                    )}
                    <ul className="v3-feats">
                      {plan.features.map((feat, i) => {
                        const boldified = feat
                          .replace(
                            /(\d[\d,]*(?:\s?(?:credits?|cr|chars?|characters?|videos?|images?|SVGs?|removals?|K|p))(?:\/mo)?)/gi,
                            '<strong>$1</strong>'
                          )
                          .replace(
                            /\b(\d[\d,]+)\b/g,
                            '<strong>$1</strong>'
                          );
                        return (
                          <li key={i} className="v3-feat v3-feat-hl">
                            <span className={`v3-feat-ico ${isFree ? 'y' : 'v'}`}>✓</span>
                            <span dangerouslySetInnerHTML={{ __html: boldified }} />
                          </li>
                        );
                      })}
                    </ul>
                    {!isFree && plan.currency !== 'LOADING' && (
                      <div className="v3-outcomes">
                        <div className="v3-outcomes-title">With this plan you can create</div>
                        {plan.outcomes.map((o, i) => (
                          <div key={i} className="v3-outcome-row">
                            <span className="v3-outcome-icon">{o.icon}</span>
                            <span className="v3-outcome-label">{o.label}</span>
                            <span className="v3-outcome-count">/ mo</span>
                          </div>
                        ))}
                      </div>
                    )}
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
            </div>

            {/* urgency bar */}
            <div className="v3-urgency">
              <div className="v3-urgency-inner">
                <span className="v3-urgency-icon">⏰</span>
                <p className="v3-urgency-text">
                  <strong>Introductory pricing for early users.</strong> These rates are locked in for existing subscribers when prices increase. New users after this period will pay the standard rate.
                </p>
                <span className="v3-urgency-badge">Lock in your rate →</span>
              </div>
            </div>
          </div>
        </div>

        {/* ══ TOPUPS ══ */}
        <div className="v3-topups">
          <div className="v3-topups-inner">
            <p className="v3-section-label" style={{ textAlign: 'center' }}>Need More Credits?</p>
            <h2 className="v3-section-title">One-time Credit Top-ups</h2>
            <p className="v3-section-sub">Available to paid plan users. Add credits anytime — they're added to your pool instantly.</p>
            <div className="v3-topups-row">
              {topupPacks.map((pack, idx) => {
                const locked = !isPaidUser && isLoggedIn;
                const isLoad = loading === pack.planType;
                return (
                  <motion.div key={pack.planType} className={`v3-card${pack.badge ? ' v3-card-pop' : ''}`} initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.42, delay: idx * 0.08 }}>
                    {pack.badge && <div className="v3-card-ribbon v3-ribbon-pop">{pack.badge}</div>}
                    <span className="v3-card-plan-badge v3-badge-lite">💳 Top-up</span>
                    <h2 className="v3-plan-name">{pack.name}</h2>
                    <p className="v3-plan-tagline">One-time purchase · No expiry reset needed</p>
                    <div className="v3-price-area">
                      {pack.currency === 'LOADING' ? (
                        <span className="v3-price-loading">Loading...</span>
                      ) : (
                        <>
                          {pack.originalPrice && <div className="v3-price-strike">{pack.symbol}{pack.originalPrice}</div>}
                          <div className="v3-price-row">
                            <span className="v3-price-sym">{pack.symbol}</span>
                            <span className="v3-price-num">{pack.price}</span>
                            <span className="v3-price-per">one-time</span>
                          </div>
                          <span className="v3-price-save">✓ Save 25%</span>
                        </>
                      )}
                    </div>
                    <ul className="v3-feats" style={{ marginTop: 14 }}>
                      <li className="v3-feat v3-feat-hl"><span className="v3-feat-ico v">✦</span><strong>{pack.credits.toLocaleString()} credits</strong> added instantly</li>
                      <li className="v3-feat v3-feat-hl"><span className="v3-feat-ico v">✦</span>{pack.perCreditLabel === '—' ? 'Best per-credit rate' : `${pack.perCreditLabel} — best rate`}</li>
                      <li className="v3-feat"><span className="v3-feat-ico y">✓</span>Works for voice, video, images & more</li>
                      <li className="v3-feat"><span className="v3-feat-ico y">✓</span>Extends credit expiry by 30 days</li>
                    </ul>
                    {locked ? (
                      <button className="v3-btn v3-btn-plain" disabled>🔒 Requires a paid plan</button>
                    ) : (
                      <button className="v3-btn v3-btn-primary" onClick={() => handleTopupPurchase(pack)} disabled={loading !== null}>
                        {isLoad ? 'Processing...' : `Buy ${pack.credits.toLocaleString()} Credits →`}
                      </button>
                    )}
                  </motion.div>
                );
              })}
            </div>
         </div>
        </div>

        {/* ══ FREE PLAN HIGHLIGHT ══ */}
        {(() => {
          const freePlan = plans.find(p => p.role === 'BASIC')!;
          const isCurrent = currentPlan === freePlan.role;
          return (
            <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px 48px' }}>
              <p className="v3-section-label" style={{ textAlign: 'center', marginBottom: 10 }}>Not ready to commit?</p>
              <motion.div
                className={`v3-card${isCurrent ? ' v3-card-current' : ''}`}
                style={{ flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', gap: 24, padding: '28px 32px' }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.44 }}
              >
                {isCurrent && <div className="v3-card-ribbon v3-ribbon-current">✓ Active Plan</div>}
                <div style={{ flex: '1 1 260px' }}>
                  <span className="v3-card-plan-badge v3-badge-free">🌱 Free Forever</span>
                  <h2 className="v3-plan-name">{freePlan.name}</h2>
                  <p className="v3-plan-tagline">{freePlan.tagline}</p>
                  <div className="v3-price-free" style={{ marginTop: 4 }}>Free</div>
                  <div className="v3-price-forever">No credit card required · Always free</div>
                </div>
                <ul className="v3-feats" style={{ flex: '1 1 240px', marginTop: 0 }}>
                  {freePlan.features.map((feat, i) => (
                    <li key={i} className="v3-feat v3-feat-hl">
                      <span className="v3-feat-ico y">✓</span>
                      {feat}
                    </li>
                  ))}
                </ul>
                <div style={{ flex: '0 0 180px' }}>
                  <button
                    className="v3-btn v3-btn-plain"
                    disabled={isCurrent}
                    style={{ width: '100%' }}
                  >
                    {isCurrent ? '✓ Your Current Plan' : 'Free Forever'}
                  </button>
                </div>
              </motion.div>
            </div>
          );
        })()}

        <div className="v3-hero-inner">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.22 }}>
            <div className="v3-hero-cta">
              {!isLoggedIn ? (
                <button className="v3-btn-hero" onClick={() => setShowLoginModal(true)}>Start Creating for Free →</button>
              ) : (
                <button className="v3-btn-hero" onClick={scrollToPlans}>View My Options →</button>
              )}
              <button className="v3-btn-ghost-hero" onClick={scrollToPlans}>See Pricing</button>
            </div>
            <p className="v3-hero-no-cc">✓ No credit card required &nbsp;·&nbsp; ✓ Commercial use included</p>
          </motion.div>
        </div>
      </header>

      {/* ══ TRUST STRIP ══ */}
      <div className="v3-trust">
        <div className="v3-trust-inner">
          {[
            { icon: '🔒', lbl: 'Secure Payments', sub: 'Razorpay & PayPal' },
            { icon: '⚡', lbl: 'Instant Access', sub: 'Start in seconds' },
            { icon: '🌍', lbl: 'Global Support', sub: '30+ languages' },
            { icon: '💯', lbl: 'Commercial Rights', sub: 'On every plan' },
          ].map((item, i) => (
            <div key={i} className="v3-trust-item">
              <span className="v3-trust-ico">{item.icon}</span>
              <div><div className="v3-trust-lbl">{item.lbl}</div><div className="v3-trust-sub">{item.sub}</div></div>
            </div>
          ))}
        </div>
      </div>     

      {/* ══ CREDIT EXPLAINER ══ */}
      <div className="v3-explain">
        <p className="v3-explain-label">How Credits Work</p>
        <h2 className="v3-explain-title">One credit pool.<br />Every AI tool.</h2>
        <p className="v3-explain-sub">Credits are your universal AI fuel. Use them across voice, images, video, and more — no tool-specific limits.</p>
        <div className="v3-credit-grid">
          {CREDIT_USES.map((item, i) => (
            <motion.div key={i} className="v3-credit-card" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.42, delay: i * 0.06 }}>
              <div className="v3-credit-icon">{item.icon}</div>
              <div className="v3-credit-count">{item.count}</div>
              <div className="v3-credit-unit">{item.unit}</div>
              <div className="v3-credit-label">{item.label}</div>
            </motion.div>
          ))}
        </div>
        <div className="v3-credit-note">
          <span className="v3-credit-note-pill">✓ Credits stack month to month</span>
          <span>Unused credits carry over — they never just disappear.</span>
        </div>
      </div>      

      {/* ══ COMPARISON TABLE ══ */}
      <div className="v3-compare">
        <div className="v3-compare-inner">
          <p className="v3-section-label">Full Comparison</p>
          <h2 className="v3-section-title">What's included in each plan</h2>
          <p className="v3-section-sub">See exactly what you unlock at each tier — no surprises.</p>
          <div className="v3-table-wrap">
            <table className="v3-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Free</th>
                  <th>✨ Spark</th>
                  <th>Starter Pack</th>
                  <th>Creator Lite</th>
                  <th className="hl">Creator Spark ⭐</th>
                  <th>Creator Odyssey</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Monthly Credits',          '50',    '50',           '150',          '500',         '1,000',        '2,500'],
                  ['Voice Characters / mo',    '600',   '3,000',      '10,000',       '50,000',       '150,000',      '400,000'],
                  ['Chars per Request',        '200',   '500',          '700',          '700',          '4,000',        '6,000'],
                  ['AI Video Generation',      '✓',     '✓ All models', '✓ All models', '✓ All models', '✓ All models', '✓ All models'],
                  ['AI Image Generation',      '✓',     '✓ All models', '✓ All models', '✓ All models', '✓ All models', '✓ All models'],
                  ['Speed Videos / mo',        '5',     '10',           '10',           '30',           '60',           'Unlimited'],
                  ['Background Removals / mo', '5',     '20',           '20',           '100',          '500',          '1,500'],
                  ['SVG Downloads',            '10/mo', 'Unlimited',    'Unlimited',    'Unlimited',    'Unlimited',    'Unlimited'],
                  ['Watermark on Exports',     '✓ Yes', '✗ None',       '✗ None',       '✗ None',       '✗ None',       '✗ None'],
                  ['Max Export Quality',       '720p',  '1080p',        '1080p',        '1080p',        '1440p',        '4K'],
                  ['Credit Topups',            '✗',     '✗',            '✓',            '✓',            '✓',            '✓'],
                  ['Commercial Use',           '✓',     '✓',            '✓',            '✓',            '✓',            '✓'],
                  ['Priority Support',         '✗',     '✗',            '✗',            '✗',            '✓',            '✓ Dedicated'],
                ].map(([feat, free, spark, starter, lite, creator, studio], i) => {
                  const hlClass = (val: string) =>
                    val === '✓' || val.startsWith('✓') ? 'sy' : val === '✗' ? 'sn' : '';
                  return (
                    <tr key={i}>
                      <td>{feat}</td>
                      <td className={hlClass(free)}>{free}</td>
                      <td className={hlClass(spark)}>{spark}</td>
                      <td className={hlClass(starter)}>{starter}</td>
                      <td className={hlClass(lite)}>{lite}</td>
                      <td className={['hl', hlClass(creator)].filter(Boolean).join(' ')}>{creator}</td>
                      <td className={hlClass(studio)}>{studio}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ══ USE CASES ══ */}
      <div className="v3-use">
        <div className="v3-use-inner">
          <p className="v3-section-label">Who Uses Scenith</p>
          <h2 className="v3-section-title">Built for every kind of creator</h2>
          <p className="v3-section-sub" style={{ marginBottom: 44 }}>From solo creators to marketing teams — Scenith scales with you.</p>
          <div className="v3-use-grid">
            {[
              { icon: '🎙️', title: 'Content Creators', body: 'Generate professional voiceovers for YouTube, social media, and podcasts. Our AI voices bring your scripts to life with natural tone and emotion.' },
              { icon: '📚', title: 'E-Learning Professionals', body: 'Create engaging course content with consistent, clear narration. Perfect for tutorials and training materials in 30+ languages.' },
              { icon: '📱', title: 'App & Game Developers', body: 'Integrate natural-sounding voices into apps, games, and interactive experiences — without recording studios or voice actors.' },
              { icon: '📢', title: 'Marketing Teams', body: 'Produce ads, explainer videos, and promotional content quickly. Test multiple voice styles to find your perfect brand voice.' },
            ].map((item, i) => (
              <motion.div key={i} className="v3-use-card" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.42, delay: i * 0.07 }}>
                <div className="v3-use-icon">{item.icon}</div>
                <h3 className="v3-use-title">{item.title}</h3>
                <p className="v3-use-body">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ══ FAQ ══ */}
      <div className="v3-faq">
        <div className="v3-faq-inner">
          <p className="v3-section-label" style={{ textAlign: 'center' }}>FAQ</p>
          <h2 className="v3-section-title">Common questions</h2>
          <p className="v3-section-sub" style={{ marginBottom: 44 }}>Everything you need to know before upgrading.</p>
          {FAQ.map((item, i) => (
            <div key={i} className="v3-faq-item" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
              <div className="v3-faq-q">
                <span>{item.q}</span>
                <span className={`v3-faq-chev${openFaq === i ? ' open' : ''}`}>▾</span>
              </div>
              <AnimatePresence>
                {openFaq === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} style={{ overflow: 'hidden' }}>
                    <p className="v3-faq-a">{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* ══ FINAL CTA ══ */}
      <div className="v3-final-cta">
        <div className="v3-final-cta-bg" />
        <div className="v3-final-inner">
          <motion.h2 className="v3-final-title" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            Start creating with AI<br /><em>in seconds</em>
          </motion.h2>
          <motion.p className="v3-final-sub" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
            Join 2,500+ creators already using Scenith. Free to start, powerful when you're ready to grow.
          </motion.p>
          <motion.div className="v3-final-cta-row" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.18 }}>
            {!isLoggedIn ? (
              <button className="v3-btn-final-primary" onClick={() => setShowLoginModal(true)}>Get Started Free →</button>
            ) : (
              <button className="v3-btn-final-primary" onClick={scrollToPlans}>Choose Your Plan →</button>
            )}
            <button className="v3-btn-final-ghost" onClick={scrollToPlans}>See all plans</button>
          </motion.div>
          <p className="v3-final-note">No credit card required · Commercial use on all plans</p>
        </div>
      </div>

      {/* ══ FOOTER ══ */}
      <footer className="v3-footer">
        © 2025 Scenith · All plans billed monthly · Prices shown in {isIndianUser ? 'INR (Indian users)' : 'USD (international)'}
      </footer>

      {/* ══ LOGIN MODAL ══ */}
      <AnimatePresence>
        {showLoginModal && (
          <div className="v3-overlay">
            <motion.div className="v3-modal" initial={{ opacity: 0, scale: 0.9, y: 24 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 24 }} transition={{ duration: 0.22 }}>
              <button className="v3-modal-close" onClick={() => setShowLoginModal(false)} aria-label="Close"><FaTimes size={12} /></button>
              {isLoggingIn && <div className="v3-modal-loading-overlay"><div className="v3-spinner" /><p>Logging in...</p></div>}
              <div className="v3-modal-logo">Scenith</div>
              <p className="v3-modal-sub">Login to continue</p>
              {loginError && <div className="v3-modal-error">{loginError}</div>}
              <form className="v3-modal-form" onSubmit={(e) => { e.preventDefault(); const fd = new FormData(e.currentTarget); handleLogin({ email: fd.get('email') as string, password: fd.get('password') as string }); }}>
                <input className="v3-modal-input" type="email" name="email" placeholder="Email address" required disabled={isLoggingIn} />
                <input className="v3-modal-input" type="password" name="password" placeholder="Password" required disabled={isLoggingIn} />
                <button type="submit" className="v3-btn v3-btn-primary" style={{ padding: '13px 16px' }} disabled={isLoggingIn}>{isLoggingIn ? 'Logging in...' : 'Login →'}</button>
              </form>
              <div className="v3-modal-or">OR</div>
              <div id="googleSignInButtonPricing" />
              <p className="v3-modal-link">New to Scenith? <a href="/register">Sign up free</a></p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}