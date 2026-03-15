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
   GLOBAL STYLES — injected once, replaces pricing.css
───────────────────────────────────────────────────────────────────── */
const injectStyles = () => {
  if (typeof document === 'undefined') return;
  const ID = 'scenith-v2-styles';
  const existing = document.getElementById(ID);
  if (existing) existing.remove();
  const s = document.createElement('style');
  s.id = ID;
  s.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Cabinet+Grotesk:wght@400;500;700;800;900&family=Satoshi:wght@400;500;700&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    .sc-root {
      font-family: 'Satoshi', 'DM Sans', sans-serif;
      background: #f5f4ff;
      color: #1a1a2e;
      min-height: 100vh;
      overflow-x: hidden;
    }

    /* ── HERO ── */
    .sc-hero {
      position: relative;
      padding: 90px 24px 60px;
      text-align: center;
      overflow: hidden;
      background: linear-gradient(160deg, #eeeaff 0%, #f9f7ff 60%, #fdf0f8 100%);
      border-bottom: 1px solid rgba(99,85,220,0.1);
    }
    .sc-hero-orb1 {
      position: absolute; pointer-events: none;
      width: 600px; height: 600px; border-radius: 50%;
      top: -240px; left: 50%; transform: translateX(-50%);
      background: radial-gradient(circle, rgba(99,85,220,0.12) 0%, transparent 65%);
    }
    .sc-hero-orb2 {
      position: absolute; pointer-events: none;
      width: 350px; height: 350px; border-radius: 50%;
      top: 40px; right: -80px;
      background: radial-gradient(circle, rgba(236,72,153,0.07) 0%, transparent 60%);
    }
    .sc-hero-grid {
      position: absolute; inset: 0; pointer-events: none; opacity: 0.04;
      background-image:
        linear-gradient(rgba(99,85,220,1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(99,85,220,1) 1px, transparent 1px);
      background-size: 56px 56px;
    }
    .sc-hero-inner { position: relative; max-width: 840px; margin: 0 auto; }

    .sc-badge-row { margin-bottom: 20px; }
    .sc-badge {
      display: inline-flex; align-items: center; gap: 8px;
      padding: 6px 18px; border-radius: 999px;
      background: rgba(99,85,220,0.08);
      border: 1px solid rgba(99,85,220,0.25);
      font-size: 11.5px; font-weight: 700; letter-spacing: 0.11em;
      color: #6355dc; text-transform: uppercase;
    }
    .sc-badge-dot {
      width: 6px; height: 6px; border-radius: 50%;
      background: #6355dc; box-shadow: 0 0 8px rgba(99,85,220,0.5);
      animation: sc-blink 1.5s ease-in-out infinite;
    }
    @keyframes sc-blink { 0%,100%{opacity:1} 50%{opacity:0.25} }

    .sc-h1 {
      font-family: 'Cabinet Grotesk', sans-serif;
      font-size: clamp(34px, 6vw, 62px);
      font-weight: 900; line-height: 1.06; letter-spacing: -0.035em;
      margin-bottom: 18px; color: #1a1a2e;
    }
    .sc-grad {
      background: linear-gradient(120deg, #6355dc 0%, #e040a0 55%, #f97316 100%);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
    }
    .sc-hero-sub {
      font-size: 16px; color: #6666aa; line-height: 1.65;
      max-width: 480px; margin: 0 auto 36px;
    }

    /* ── TABS ── */
    .sc-tab-hint {
      display: inline-block;
      font-size: 12.5px; color: #6666aa;
      background: rgba(99,85,220,0.06);
      border: 1px solid rgba(99,85,220,0.15);
      border-radius: 8px; padding: 7px 18px;
    }

    /* ── SECTION WRAPPER ── */
    .sc-section { max-width: 1300px; margin: 0 auto; padding: 56px 24px; }
    .sc-section-dark { background: #f0eeff; }
    .sc-section-title {
      font-family: 'Cabinet Grotesk', sans-serif;
      font-size: 28px; font-weight: 800; text-align: center;
      letter-spacing: -0.025em; margin-bottom: 44px; color: #1a1a2e;
    }

    /* ── PLANS ROW — 4 cards in one line ── */
    .sc-plans-row {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;
      align-items: start;
      margin-bottom: 0;
    }
    @media(max-width: 900px) {
      .sc-plans-row { grid-template-columns: repeat(2, 1fr); }
    }
    @media(max-width: 540px) {
      .sc-plans-row { grid-template-columns: 1fr; }
    }

    /* ── TOPUPS ROW — 3 cards in one line ── */
    .sc-topups-row {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
      align-items: start;
      margin-top: 40px;
    }
    .sc-topups-label {
      text-align: center; margin-bottom: 20px; margin-top: 48px;
    }
    .sc-topups-label h3 {
      font-family: 'Cabinet Grotesk', sans-serif;
      font-size: 20px; font-weight: 800; color: #1a1a2e;
      margin-bottom: 6px;
    }
    .sc-topups-label p {
      font-size: 13px; color: #8888bb;
    }
    @media(max-width: 640px) {
      .sc-topups-row { grid-template-columns: 1fr; }
    }

    /* ── PRICING CARD ── */
    .sc-card {
      position: relative; display: flex; flex-direction: column;
      background: #ffffff;
      border: 1.5px solid rgba(99,85,220,0.12);
      border-radius: 18px; padding: 20px 16px 16px;
      transition: border-color 0.25s, box-shadow 0.25s, transform 0.25s;
      box-shadow: 0 2px 12px rgba(99,85,220,0.05);
    }
    .sc-card:hover {
      border-color: rgba(99,85,220,0.3);
      box-shadow: 0 12px 40px rgba(99,85,220,0.1);
      transform: translateY(-3px);
    }
    .sc-card.sc-popular {
      border: 2px solid #6355dc;
      box-shadow: 0 0 0 3px rgba(99,85,220,0.1), 0 16px 48px rgba(99,85,220,0.16);
      transform: translateY(-8px);
    }
    .sc-card.sc-popular:hover { transform: translateY(-11px); }
    .sc-card.sc-current {
      border: 2px solid #10b981;
      box-shadow: 0 0 0 3px rgba(16,185,129,0.08);
    }

    .sc-card-badge {
      position: absolute; top: -12px; left: 50%; transform: translateX(-50%);
      padding: 4px 16px; border-radius: 999px;
      font-size: 10px; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase;
      white-space: nowrap;
    }
    .sc-badge-popular {
      background: linear-gradient(135deg, #6355dc, #8b5cf6);
      color: #fff; box-shadow: 0 4px 14px rgba(99,85,220,0.4);
    }
    .sc-badge-studio {
      background: linear-gradient(135deg, #f59e0b, #f97316);
      color: #fff; box-shadow: 0 4px 14px rgba(245,158,11,0.35);
    }
    .sc-badge-current {
      background: linear-gradient(135deg, #10b981, #059669);
      color: #fff;
    }
    .sc-badge-downgrade {
      background: rgba(239,68,68,0.08);
      border: 1px solid rgba(239,68,68,0.3);
      color: #ef4444;
    }

    .sc-plan-icon {
      width: 36px; height: 36px; border-radius: 10px;
      background: rgba(99,85,220,0.08);
      border: 1px solid rgba(99,85,220,0.15);
      display: flex; align-items: center; justify-content: center;
      margin-bottom: 10px;
    }
    .sc-plan-icon svg { width: 20px; height: 20px; }

    .sc-plan-tagline { font-size: 11px; color: #9999bb; margin-bottom: 3px; line-height: 1.4; }
    .sc-plan-name {
      font-family: 'Cabinet Grotesk', sans-serif;
      font-size: 18px; font-weight: 900; letter-spacing: -0.02em;
      margin-bottom: 12px; color: #1a1a2e;
    }

    .sc-price-area { margin-bottom: 8px; }
    .sc-strike { font-size: 13px; color: #bbbbcc; text-decoration: line-through; margin-bottom: 3px; }
    .sc-price-row { display: flex; align-items: baseline; gap: 2px; }
    .sc-sym { font-size: 18px; font-weight: 700; color: #6355dc; }
    .sc-num {
      font-family: 'Cabinet Grotesk', sans-serif;
      font-size: 38px; font-weight: 900; line-height: 1; letter-spacing: -0.04em; color: #1a1a2e;
    }
    .sc-per { font-size: 12px; color: #9999bb; margin-left: 3px; }
    .sc-free-price {
      font-family: 'Cabinet Grotesk', sans-serif;
      font-size: 32px; font-weight: 900; color: #aaaacc;
    }
    .sc-loading-price { font-size: 15px; color: #bbbbcc; animation: sc-shimmer 1.4s ease-in-out infinite; }
    @keyframes sc-shimmer { 0%,100%{opacity:0.35} 50%{opacity:1} }

    .sc-save-pill {
      display: inline-flex; align-items: center; gap: 4px; margin-top: 6px;
      padding: 2px 10px; border-radius: 999px;
      background: rgba(16,185,129,0.08); border: 1px solid rgba(16,185,129,0.22);
      color: #059669; font-size: 10.5px; font-weight: 700;
    }
    .sc-forever { font-size: 12px; color: #aaaacc; margin-top: 6px; }

    .sc-features {
      list-style: none; flex: 1;
      display: flex; flex-direction: column; gap: 7px;
      margin: 12px 0 14px;
    }
    .sc-feat {
      display: flex; align-items: flex-start; gap: 7px;
      font-size: 12px; color: #6666aa; line-height: 1.4;
    }
    .sc-feat.sc-feat-hl { color: #2d2d5e; font-weight: 500; }
    .sc-feat-icon { flex-shrink: 0; margin-top: 1px; font-size: 11px; }
    .sc-feat-icon.star { color: #6355dc; }
    .sc-feat-icon.check { color: #bbbbcc; }

    .sc-btn {
      width: 100%; padding: 11px 14px; border-radius: 10px; border: none;
      font-family: 'Satoshi', sans-serif;
      font-size: 13px; font-weight: 700; letter-spacing: 0.015em;
      cursor: pointer; transition: all 0.2s;
    }
    .sc-btn:disabled { opacity: 0.45; cursor: not-allowed; transform: none !important; box-shadow: none !important; }
    .sc-btn-ghost {
      background: rgba(99,85,220,0.05);
      border: 1.5px solid rgba(99,85,220,0.15); color: #9999bb;
    }
    .sc-btn-ghost:hover:not(:disabled) {
      background: rgba(99,85,220,0.09); color: #6355dc;
      border-color: rgba(99,85,220,0.3);
    }
    .sc-btn-primary {
      background: linear-gradient(135deg, #6355dc 0%, #8b5cf6 100%);
      color: #fff; box-shadow: 0 5px 20px rgba(99,85,220,0.32);
    }
    .sc-btn-primary:hover:not(:disabled) {
      box-shadow: 0 8px 30px rgba(99,85,220,0.5); transform: translateY(-1px);
    }
    .sc-btn-gold {
      background: linear-gradient(135deg, #f59e0b 0%, #f97316 100%);
      color: #fff; box-shadow: 0 5px 20px rgba(245,158,11,0.28);
    }
    .sc-btn-gold:hover:not(:disabled) {
      box-shadow: 0 8px 30px rgba(245,158,11,0.45); transform: translateY(-1px);
    }
    .sc-btn-current {
      background: rgba(16,185,129,0.07);
      border: 1.5px solid rgba(16,185,129,0.25); color: #059669;
    }

    /* ── CALLOUT ── */
    .sc-callout {
      display: flex; align-items: center; gap: 14px;
      background: rgba(99,85,220,0.05);
      border: 1px solid rgba(99,85,220,0.15);
      border-radius: 12px; padding: 14px 20px;
      margin-top: 32px; max-width: 700px; margin-left: auto; margin-right: auto;
    }
    .sc-callout-icon { font-size: 20px; flex-shrink: 0; }
    .sc-callout-text { font-size: 13.5px; color: #6666aa; line-height: 1.6; }

    /* ── COMPARISON TABLE ── */
    .sc-table-wrap {
      overflow-x: auto;
      border-radius: 16px;
      border: 1.5px solid rgba(99,85,220,0.1);
      box-shadow: 0 2px 16px rgba(99,85,220,0.05);
    }
    .sc-table { width: 100%; border-collapse: collapse; font-size: 13.5px; min-width: 620px; background: #fff; }
    .sc-table th {
      padding: 13px 16px; text-align: center;
      font-size: 11px; font-weight: 800; letter-spacing: 0.09em; text-transform: uppercase;
      color: #9999bb; border-bottom: 1.5px solid rgba(99,85,220,0.08);
      background: #f9f8ff;
    }
    .sc-table th:first-child { text-align: left; }
    .sc-table th.sc-th-hl { color: #6355dc; }
    .sc-table td {
      padding: 12px 16px; border-bottom: 1px solid rgba(99,85,220,0.06);
      color: #8888bb; text-align: center;
    }
    .sc-table td:first-child { text-align: left; color: #3d3d6b; font-weight: 500; }
    .sc-table td.sc-td-hl { color: #6355dc; font-weight: 600; background: rgba(99,85,220,0.025); }
    .sc-table tr:last-child td { border-bottom: none; }
    .sc-table tr:hover td { background: rgba(99,85,220,0.02); }
    .sc-yes { color: #059669 !important; font-weight: 700; }
    .sc-no { color: #ccccdd !important; }

    /* ── USE CASES ── */
    .sc-use-grid {
      display: grid; grid-template-columns: repeat(auto-fit, minmax(210px,1fr)); gap: 16px;
    }
    .sc-use-card {
      background: #fff;
      border: 1.5px solid rgba(99,85,220,0.1);
      border-radius: 16px; padding: 24px 20px;
      transition: border-color 0.2s, box-shadow 0.2s;
    }
    .sc-use-card:hover {
      border-color: rgba(99,85,220,0.28);
      box-shadow: 0 8px 28px rgba(99,85,220,0.08);
    }
    .sc-use-icon { font-size: 28px; margin-bottom: 12px; }
    .sc-use-title {
      font-family: 'Cabinet Grotesk', sans-serif;
      font-size: 16px; font-weight: 800; margin-bottom: 8px; color: #1a1a2e;
    }
    .sc-use-body { font-size: 13px; color: #8888bb; line-height: 1.6; }

    /* ── TRUST BAR ── */
    .sc-trust {
      display: flex; flex-wrap: wrap; justify-content: center;
      border-top: 1.5px solid rgba(99,85,220,0.08);
      border-bottom: 1.5px solid rgba(99,85,220,0.08);
      background: #fff;
      padding: 8px 16px;
    }
    .sc-trust-item {
      display: flex; align-items: center; gap: 10px;
      padding: 12px 20px;
      border-right: 1px solid rgba(99,85,220,0.08);
    }
    .sc-trust-item:last-child { border-right: none; }
    .sc-trust-ico { font-size: 20px; }
    .sc-trust-lbl { font-size: 13px; font-weight: 700; color: #2d2d5e; }
    .sc-trust-sub { font-size: 11.5px; color: #9999bb; }

    /* ── FAQ ── */
    .sc-faq-wrap { max-width: 760px; margin: 0 auto; padding: 56px 24px; }
    .sc-faq-item {
      border-bottom: 1px solid rgba(99,85,220,0.08);
      background: #fff; margin-bottom: 2px; border-radius: 10px;
      overflow: hidden;
    }
    .sc-faq-q {
      display: flex; justify-content: space-between; align-items: center;
      padding: 18px 20px; cursor: pointer; user-select: none;
      font-size: 14.5px; font-weight: 600; color: #2d2d5e;
      transition: color 0.16s;
    }
    .sc-faq-q:hover { color: #6355dc; }
    .sc-faq-chev { color: #bbbbcc; font-size: 16px; transition: transform 0.2s; }
    .sc-faq-chev.open { transform: rotate(180deg); color: #6355dc; }
    .sc-faq-a { padding: 0 20px 18px; font-size: 13.5px; color: #8888bb; line-height: 1.75; }

    /* ── LOADING ── */
    .sc-loading {
      display: flex; flex-direction: column;
      align-items: center; justify-content: center;
      min-height: 100vh; gap: 20px; background: #f5f4ff;
    }
    .sc-spinner {
      width: 44px; height: 44px; border-radius: 50%;
      border: 3px solid rgba(99,85,220,0.15);
      border-top-color: #6355dc;
      animation: sc-spin 0.75s linear infinite;
    }
    @keyframes sc-spin { to { transform: rotate(360deg); } }
    .sc-loading p { font-size: 14px; color: #9999bb; }

    /* ── MODAL ── */
    .sc-overlay {
      position: fixed; inset: 0; z-index: 9999;
      background: rgba(20,10,50,0.55); backdrop-filter: blur(10px);
      display: flex; align-items: center; justify-content: center; padding: 24px;
    }
    .sc-modal {
      position: relative;
      background: #ffffff;
      border: 1.5px solid rgba(99,85,220,0.18);
      border-radius: 24px; padding: 38px 32px;
      width: 100%; max-width: 400px;
      box-shadow: 0 30px 80px rgba(99,85,220,0.2);
    }
    .sc-modal-close {
      position: absolute; top: 14px; right: 14px;
      background: rgba(99,85,220,0.06); border: 1px solid rgba(99,85,220,0.12);
      border-radius: 8px; width: 32px; height: 32px;
      display: flex; align-items: center; justify-content: center;
      color: #9999bb; cursor: pointer; transition: all 0.16s;
    }
    .sc-modal-close:hover { background: rgba(99,85,220,0.1); color: #6355dc; }
    .sc-modal-logo {
      font-family: 'Cabinet Grotesk', sans-serif;
      font-size: 28px; font-weight: 900; letter-spacing: -0.03em; text-align: center;
      background: linear-gradient(120deg, #6355dc, #e040a0);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
      margin-bottom: 5px;
    }
    .sc-modal-sub { font-size: 13.5px; color: #9999bb; text-align: center; margin-bottom: 26px; }
    .sc-modal-form { display: flex; flex-direction: column; gap: 12px; }
    .sc-modal-input {
      width: 100%; padding: 13px 15px; border-radius: 11px;
      background: #f8f7ff; border: 1.5px solid rgba(99,85,220,0.12);
      color: #1a1a2e; font-family: 'Satoshi', sans-serif; font-size: 14px;
      outline: none; transition: border-color 0.16s;
    }
    .sc-modal-input:focus { border-color: rgba(99,85,220,0.45); background: #fff; }
    .sc-modal-input::placeholder { color: #bbbbcc; }
    .sc-modal-error {
      background: rgba(239,68,68,0.06); border: 1px solid rgba(239,68,68,0.2);
      color: #dc2626; border-radius: 10px; padding: 11px 14px; font-size: 13px;
      margin-bottom: 12px;
    }
    .sc-modal-or {
      display: flex; align-items: center; gap: 10px;
      font-size: 11px; color: #bbbbcc; font-weight: 700;
      letter-spacing: 0.1em; margin: 4px 0;
    }
    .sc-modal-or::before, .sc-modal-or::after {
      content: ''; flex: 1; height: 1px; background: rgba(99,85,220,0.1);
    }
    .sc-modal-link { text-align: center; font-size: 13px; color: #9999bb; margin-top: 12px; }
    .sc-modal-link a { color: #6355dc; text-decoration: none; font-weight: 700; }
    .sc-modal-link a:hover { text-decoration: underline; }
    .sc-modal-loading-overlay {
      position: absolute; inset: 0; border-radius: 24px;
      background: rgba(255,255,255,0.92); backdrop-filter: blur(4px);
      display: flex; flex-direction: column; align-items: center; justify-content: center;
      gap: 12px; z-index: 10;
    }
    .sc-modal-loading-overlay p { font-size: 14px; color: #9999bb; }
    #googleSignInButtonPricing { display: flex; justify-content: center; }

    /* ── FOOTER ── */
    .sc-footer {
      text-align: center; padding: 28px 24px;
      border-top: 1px solid rgba(99,85,220,0.08);
      font-size: 13px; color: #aaaacc; background: #fff;
    }

    @media(max-width:660px) {
      .sc-card.sc-popular { transform: none; }
      .sc-trust-item { padding: 10px 12px; }
      .sc-modal { padding: 28px 18px; }
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

    @media(max-width:660px) {
      .sc-card.sc-popular { transform: none; }
      .sc-trust-item { padding: 10px 12px; }
      .sc-modal { padding: 28px 18px; }
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
  { q: 'How do credits work?', a: 'Credits are a shared pool that powers all AI features — voice generation, AI video, AI images, background removal, and speed videos all draw from the same monthly credit balance. 1 credit = 100 voice characters = 1 background removal = 1 speed video = varies by AI model for video/image. Credits reset monthly with your plan.' },
  { q: 'What is the difference between Free and Starter?', a: 'The Free plan gives 50 credits and 600 voice chars/mo with limited AI models and watermarked 720p exports. Starter ($9/mo) gives 300 credits, 50,000 voice chars, all AI models unlocked, HD 1080p exports with no watermark, and access to credit topups for extra capacity.' },
  { q: 'Can I buy extra credits with topups?', a: 'Yes! Topup packs are one-time purchases available to paid plan users (Starter and above). They add credits to your existing balance instantly and extend your expiry by 30 days. Topups are not available on the Free plan.' },
  { q: 'Can I upgrade or downgrade my plan?', a: 'You can upgrade at any time — it takes effect immediately. Downgrades are not available mid-cycle. All plans are billed monthly with no long-term commitments, so you can cancel before the next renewal.' },
  { q: 'Do you offer refunds?', a: 'No. We do not offer refunds on paid plans or topup purchases. We recommend starting on the Free plan to test quality before upgrading — it gives you real access to core features.' },
  { q: 'Can I use generated content commercially?', a: 'Yes! All plans including Free include full commercial use rights. Use generated voices, videos, and images in YouTube videos, client work, ads, podcasts, and any commercial project — no attribution required.' },
  { q: 'Which payment methods do you accept?', a: 'We accept all major payment methods through Razorpay (India: credit/debit cards, UPI, net banking, wallets) and PayPal (international: cards and PayPal balance). All transactions are encrypted and secure.' },
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
  const [activeSection] = useState<'bundle'>('bundle');
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
      // Try multiple geo APIs in order of CORS friendliness
      const apis = [
        { url: 'https://api.country.is/', extractor: (d: any) => d.country },
        { url: 'https://freeipapi.com/api/json/', extractor: (d: any) => d.countryCode },
        { url: 'https://ipapi.co/json/', extractor: (d: any) => d.country_code },
      ];

      for (const api of apis) {
        try {
          const response = await fetch(api.url);
          if (!response.ok) continue;
          const data = await response.json();
          const countryCode = api.extractor(data);
          if (countryCode) {
            setIsIndianUser(countryCode === 'IN');
            return;
          }
        } catch {
          continue;
        }
      }

      // All APIs failed — try timezone as fallback
      try {
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        setIsIndianUser(tz === 'Asia/Calcutta' || tz === 'Asia/Kolkata');
      } catch {
        setIsIndianUser(false);
      }
    };

    detectCountry().finally(() => setIsPricingReady(true));
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
    const basicFeats = ['50 credits · 600 voice chars/mo', '5 speed videos + 5 BG removals · 720p', '10 SVG downloads/mo', 'Limited AI models only', 'Commercial use'];
    const creatorLiteFeats = [
      '300 credits/mo · 50,000 voice chars/mo',
      '🎭 All AI models unlocked · 1080p export',
      '30 speed videos · 100 BG removals · Unlimited SVGs',
      '💳 Topups available · No watermark',
    ];

    const creatorFeats = [
      '900 credits/mo · 150,000 voice chars/mo',
      '🎭 All AI models unlocked · 1440p export',
      '60 speed videos · 500 BG removals · Unlimited SVGs',
      '💳 Topups available · Priority support',
    ];

    const odysseyFeats = [
      '2,500 credits/mo · 400,000 voice chars/mo',
      '🎭 All AI models · 4K export · Fastest queue',
      'Unlimited speed videos + BG removals + SVGs',
      '💳 Topups available · Dedicated support',
    ];
    
    if (isIndianUser === null) {
      return [
        { name: 'Starter Forge',   role: 'BASIC',        price: 0, currency: 'FREE',    ttsLimit: 600,    features: basicFeats },
        { name: 'Creator Lite',    role: 'CREATOR_LITE',  price: 0, currency: 'LOADING', ttsLimit: 50000,  features: creatorLiteFeats },
        { name: 'Creator Spark',   role: 'CREATOR',       price: 0, currency: 'LOADING', ttsLimit: 150000, popular: true, features: creatorFeats },
        { name: 'Creator Odyssey', role: 'STUDIO',        price: 0, currency: 'LOADING', ttsLimit: 400000, features: odysseyFeats },
      ];
    }
    const starterPrice  = isIndianUser ? 99  : 5;
    const creatorPrice  = isIndianUser ? 499 : 12;
    const proPrice      = isIndianUser ? 999 : 24;
    const originalStarterPrice = Math.round(starterPrice / 0.75);
    const originalCreatorPrice = Math.round(creatorPrice / 0.75);
    const originalProPrice     = Math.round(proPrice / 0.75);
    const currency = isIndianUser ? 'INR' : 'USD';
    const symbol   = isIndianUser ? '₹'   : '$';
    return [
      { name: 'Starter Forge',   role: 'BASIC',        price: 0,           currency: 'FREE', ttsLimit: 600,    features: basicFeats },
      { name: 'Creator Lite',    role: 'CREATOR_LITE',  price: starterPrice, originalPrice: originalStarterPrice, currency, symbol, ttsLimit: 50000,  features: creatorLiteFeats },
      { name: 'Creator Spark',   role: 'CREATOR',       price: creatorPrice, originalPrice: originalCreatorPrice, currency, symbol, ttsLimit: 150000, popular: true, features: creatorFeats },
      { name: 'Creator Odyssey', role: 'STUDIO',        price: proPrice,     originalPrice: originalProPrice,     currency, symbol, ttsLimit: 400000, features: odysseyFeats },
    ];
  };
  
  /* ── getIndividualPlans — original, untouched ── */
  const getTopupPacks = (): TopupPack[] => {
  if (isIndianUser === null) {
    return [
      { name: 'Small Pack',  planType: 'TOPUP_SMALL',  credits: 500,  price: 0, currency: 'LOADING', perCreditLabel: '—' },
      { name: 'Medium Pack', planType: 'TOPUP_MEDIUM', credits: 1500, price: 0, currency: 'LOADING', perCreditLabel: '—', badge: '⭐ Best Value' },
      { name: 'Large Pack',  planType: 'TOPUP_LARGE',  credits: 5000, price: 0, currency: 'LOADING', perCreditLabel: '—' },
    ];
  }
  const currency = isIndianUser ? 'INR' : 'USD';
  const symbol   = isIndianUser ? '₹'   : '$';
  const prices   = isIndianUser
    ? { small: 499,  medium: 1199,  large: 2999  }
    : { small: 5,    medium: 12,    large: 30    };
  const originals = {
    small:  Math.round(prices.small  / 0.75),
    medium: Math.round(prices.medium / 0.75),
    large:  Math.round(prices.large  / 0.75),
  };
  const perCredit = (price: number, credits: number) =>
    isIndianUser
      ? `₹${(price / credits).toFixed(2)}/cr`
      : `$${(price / credits).toFixed(3)}/cr`;

  return [
    {
      name: 'Small Pack', planType: 'TOPUP_SMALL', credits: 500,
      price: prices.small, originalPrice: originals.small,
      currency, symbol, perCreditLabel: perCredit(prices.small, 500),
    },
    {
      name: 'Medium Pack', planType: 'TOPUP_MEDIUM', credits: 1500,
      price: prices.medium, originalPrice: originals.medium,
      currency, symbol, badge: '⭐ Best Value', perCreditLabel: perCredit(prices.medium, 1500),
    },
    {
      name: 'Large Pack', planType: 'TOPUP_LARGE', credits: 5000,
      price: prices.large, originalPrice: originals.large,
      currency, symbol, perCreditLabel: perCredit(prices.large, 5000),
    },
  ];
};

  // /* ── getAddonPlans — original, untouched ── */
  // const getAddonPlans = () => {
  //   const currency = isIndianUser ? 'INR' : 'USD';
  //   const symbol = isIndianUser ? '₹' : '$';
  //   const voicePrice = isIndianUser ? 125 : 5;
  //   const speedPrice = isIndianUser ? 99 : 5;
  //   const bgRemovalPrice = isIndianUser ? 149 : 5;
  //   const svgPrice = isIndianUser ? 99 : 3;
  //   const videoStarterPrice = isIndianUser ? 249 : 10;
  //   const videoProPrice = isIndianUser ? 599 : 15;
  //   const videoElitePrice = isIndianUser ? 1199 : 25;
  //   const voiceOriginal = Math.round(voicePrice / 0.75);
  //   const speedOriginal = Math.round(speedPrice / 0.75);
  //   const bgRemovalOriginal = Math.round(bgRemovalPrice / 0.75);
  //   const svgOriginal = Math.round(svgPrice / 0.75);
  //   const videoStarterOriginal = Math.round(videoStarterPrice / 0.75);
  //   const videoProOriginal = Math.round(videoProPrice / 0.75);
  //   const videoEliteOriginal = Math.round(videoElitePrice / 0.75);
  //   return [
  //     { name: 'AI Voice Pro', planType: 'AI_VOICE_PRO', price: voicePrice, originalPrice: voiceOriginal, currency, symbol, service: 'AI Voice Generation', features: ['50,000 Characters/month','10,000 Characters/day','2,500 Characters per request','All Premium AI Voices','Commercial use allowed'] },
  //     { name: 'AI Speed Pro', planType: 'AI_SPEED_PRO', price: speedPrice, originalPrice: speedOriginal, currency, symbol, service: 'Video Speed Control', features: ['30 videos/month','20 minutes per video','Up to 1440p quality','0.5x - 15x speed range','Audio pitch correction','Commercial use allowed'] },
  //     { name: 'Background Removal Pro', planType: 'BG_REMOVAL_PRO', price: bgRemovalPrice, originalPrice: bgRemovalOriginal, currency, symbol, service: 'AI Background Removal', features: ['300 images/month','Up to 1080p quality','Batch processing','High-quality edge detection','Instant processing','Commercial use allowed'] },
  //     { name: 'SVG Library Pro', planType: 'SVG_PRO', price: svgPrice, originalPrice: svgOriginal, currency, symbol, service: 'SVG Icons Library', features: ['Unlimited SVG downloads','Up to 2048x2048 resolution','Unlimited daily downloads','SVG format access','PNG & JPG export','Commercial use allowed'] },
  //     { name: 'Video Gen Starter', planType: 'VIDEO_GEN_STARTER', price: videoStarterPrice, originalPrice: videoStarterOriginal, currency, symbol, service: 'AI Video Generation', features: ['10 credits/month','2 credits/day','Max 5 seconds per video','Wan 2.5 model access','Commercial use allowed'] },
  //     { name: 'Video Gen Pro', planType: 'VIDEO_GEN_PRO', price: videoProPrice, originalPrice: videoProOriginal, currency, symbol, service: 'AI Video Generation', features: ['40 credits/month','8 credits/day','Max 10 seconds per video','Wan 2.5 + Kling 2.5/2.6 Pro','Commercial use allowed'] },
  //     { name: 'Video Gen Elite', planType: 'VIDEO_GEN_ELITE', price: videoElitePrice, originalPrice: videoEliteOriginal, currency, symbol, service: 'AI Video Generation', features: ['100 credits/month','20 credits/day','Max 10 seconds per video','All models incl. Google Veo 3','Commercial use allowed'] },
  //   ];
  // };

    const handleTopupPurchase = async (pack: TopupPack) => {
    if (!isLoggedIn) { setShowLoginModal(true); return; }
    if (currentPlan === 'BASIC') {
      alert('Topups are only available for paid plan users. Please upgrade to a Creator plan first.');
      return;
    }
    setLoading(pack.planType);
    try {
      const orderResponse = await axios.post(
        `${API_BASE_URL}/api/payments/create-topup-order`,
        { planType: pack.planType, amount: pack.price, currency: pack.currency },
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
          key: keyId, amount: pack.price * 100, currency: 'INR',
          order_id: gatewayOrderId, name: 'Scenith',
          description: `${pack.name} — ${pack.credits} Credits`,
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
              alert(`🎉 ${pack.credits} credits added to your account!`);
            } catch (err: any) {
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
          paypalContainer.style.cssText = 'position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);z-index:1000;background:white;padding:20px;border-radius:12px;box-shadow:0 10px 30px rgba(0,0,0,0.3)';
          document.body.appendChild(paypalContainer);
        }
        paypalContainer.innerHTML = '';
        // @ts-ignore
        paypal.Buttons({
          createOrder: () => gatewayOrderId,
          onApprove: async (data: any) => {
            setIsPaymentInProgress(true);
            try {
              await axios.post(
                `${API_BASE_URL}/api/payments/capture-paypal`,
                { internalOrderId, paypalOrderId: data.orderID },
                { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
              );
              setIsPaymentInProgress(false);
              alert(`🎉 ${pack.credits} credits added to your account!`);
            } catch (err: any) {
              setIsPaymentInProgress(false);
              alert('Error capturing payment.');
            } finally { if (paypalContainer) document.body.removeChild(paypalContainer); }
          },
          onCancel: () => { if (paypalContainer) document.body.removeChild(paypalContainer); },
          onError: (err: any) => { console.error(err); if (paypalContainer) document.body.removeChild(paypalContainer); }
        }).render('#paypal-button-container');
      }
    } catch (error: any) {
      setIsPaymentInProgress(false);
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
const topupPacks = getTopupPacks();
const isPaidUser = currentPlan !== 'BASIC' && currentPlan !== 'ADMIN';

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
          <p className="sc-hero-sub">One credit pool for voice, video, images & more.</p>
          <div style={{ marginTop: 14, display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <span className="sc-tab-hint">🎤 Voice · 🎬 Video · 🖼️ Images · ✂️ BG Removal</span>
            <span className="sc-tab-hint">💳 1 credit = 100 voice chars</span>
          </div>
        </div>
      </header>

      {/* ══ BUNDLE TAB ══ */}
      {activeSection === 'bundle' && (
        <>
          <div className="sc-section">
            {/* ── PLAN CARDS ROW ── */}
            <div className="sc-plans-row">
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
                      {plan.role === 'CREATOR_LITE' && 'Start creating with 300 credits — voice, video & images.'}
                      {plan.role === 'CREATOR'      && 'Spark your creativity with powerful AI tools.'}
                      {plan.role === 'STUDIO'       && 'Master your creative journey with limitless power.'}
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

            {/* ── TOPUP SECTION ── */}
            <div className="sc-topups-label">
              <h3>💳 Credit Top-ups</h3>
              <p>One-time purchases for paid plan users (Starter and above) — add credits anytime.</p>
            </div>
            <div className="sc-topups-row">
            {topupPacks.map((pack, idx) => {
              const locked = !isPaidUser && isLoggedIn;
              const isLoading = loading === pack.planType;
              return (
                <motion.div
                  key={pack.planType}
                  className="sc-card"
                  style={{ borderColor: pack.badge ? 'rgba(99,85,220,0.4)' : undefined }}
                  whileHover={{ scale: 1.025 }}
                  initial={{ opacity: 0, y: 44 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.42, delay: idx * 0.07 }}
                >
                  {pack.badge && (
                    <div className="sc-card-badge sc-badge-popular">{pack.badge}</div>
                  )}

                  <div className="sc-plan-icon">
                    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="32" cy="32" r="22" stroke="url(#tg)" strokeWidth="2.5" fill="none"/>
                      <path d="M32 22v10l7 4" stroke="url(#tg)" strokeWidth="2.5" strokeLinecap="round"/>
                      <path d="M22 14l4 8M42 14l-4 8" stroke="url(#tg)" strokeWidth="2" strokeLinecap="round"/>
                      <defs><linearGradient id="tg" x1="0" y1="0" x2="64" y2="64"><stop offset="0%" stopColor="#a899f5"/><stop offset="100%" stopColor="#f06cbe"/></linearGradient></defs>
                    </svg>
                  </div>

                  <p className="sc-plan-tagline">One-time top-up · Paid users only</p>
                  <h2 className="sc-plan-name">{pack.name}</h2>

                  <div className="sc-price-area">
                    {pack.currency === 'LOADING' ? (
                      <span className="sc-loading-price">Loading...</span>
                    ) : (
                      <>
                        {pack.originalPrice && (
                          <div className="sc-strike">{pack.symbol}{pack.originalPrice}</div>
                        )}
                        <div className="sc-price-row">
                          <span className="sc-sym">{pack.symbol}</span>
                          <span className="sc-num">{pack.price}</span>
                          <span className="sc-per">one-time</span>
                        </div>
                        <span className="sc-save-pill">✓ Save 25%</span>
                      </>
                    )}
                  </div>

                  <ul className="sc-features">
                    <li className="sc-feat sc-feat-hl">
                      <span className="sc-feat-icon star">✦</span>
                      {pack.credits.toLocaleString()} credits added instantly
                    </li>
                    <li className="sc-feat sc-feat-hl">
                      <span className="sc-feat-icon star">✦</span>
                      {pack.perCreditLabel === '—' ? 'Best per-credit rate' : pack.perCreditLabel + ' · best rate'}
                    </li>
                    <li className="sc-feat sc-feat-hl">
                      <span className="sc-feat-icon star">✦</span>
                      Works for voice, video & images and more
                    </li>
                    <li className="sc-feat sc-feat-hl">
                      <span className="sc-feat-icon star">✦</span>
                      Expiry extended 30 days
                    </li>
                  </ul>

                  {locked ? (
                    <button className="sc-btn sc-btn-ghost" disabled>
                      🔒 Requires Starter plan or above
                    </button>
                  ) : (
                    <button
                      className="sc-btn sc-btn-primary"
                      onClick={() => handleTopupPurchase(pack)}
                      disabled={loading !== null}
                    >
                      {isLoading ? 'Processing...' : `Buy ${pack.credits.toLocaleString()} Credits →`}
                    </button>
                  )}
                </motion.div>
              );
            })}
            </div>

            {/* value callout */}
            <div className="sc-callout">
              <span className="sc-callout-icon">💡</span>
              <p className="sc-callout-text">
                <strong style={{ color: '#2d2d5e' }}>One credit pool powers everything.</strong>{' '}
                Voice, video, images, BG removal — all deducted from the same monthly credits. Creator Lite ({isIndianUser ? '₹99' : '$5'}/mo) is all most creators ever need.
              </p>
            </div>
          </div>

          {/* comparison table */}
          <div style={{ background: '#f0eeff' }}>
            <div className="sc-section">
              <h2 className="sc-section-title">What Do You Get? Full Breakdown</h2>
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
                      ['Monthly Credits',           '50 cr',      '300 cr',         '900 cr',          '2,500 cr'],
                      ['Monthly Voice Characters',  '600',        '50,000',         '150,000',         '400,000'],
                      ['Max Chars per Request',     '200',        '4,000',          '4,000',           '6,000'],
                      ['AI Video Generation',       '✗',          '✓ All models',   '✓ All models',    '✓ All models'],
                      ['AI Image Generation',       '✗',          '✓ All models',   '✓ All models',    '✓ All models'],
                      ['Speed Videos/Month',        '5',          '30',             '60',              'Unlimited'],
                      ['Background Removals/mo',    '5',          '100',            '500',             '1,500'],
                      ['SVG Downloads',             '10/mo',      'Unlimited',      'Unlimited',       'Unlimited'],
                      ['Watermark on exports',      '✓ Added',    '✗ None',         '✗ None',          '✗ None'],
                      ['Max Export Quality',        '720p',       '1080p',          '1440p',           '4K'],
                      ['Credit Topups',             '✗',          '✓ Available',    '✓ Available',     '✓ Available'],
                      ['Commercial Use',            '✓',          '✓',              '✓',               '✓'],
                      ['Priority Support',          '✗',          '✗',              '✓',               '✓ Dedicated'],
                    ].map(([feat, basic, starter, creator, pro], i) => (
                      <tr key={i}>
                        <td>{feat}</td>
                        <td className={basic === '✓' ? 'sc-yes' : basic === '✗' ? 'sc-no' : ''}>{basic}</td>
                        <td className={starter === '✓' ? 'sc-yes' : starter === '✗' ? 'sc-no' : ''}>{starter}</td>
                        <td className={`sc-td-hl${creator === '✓' ? ' sc-yes' : creator === '✗' ? ' sc-no' : ''}`}>{creator}</td>
                        <td className={pro === '✓' ? 'sc-yes' : pro === '✗' ? 'sc-no' : ''}>{pro}</td>
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