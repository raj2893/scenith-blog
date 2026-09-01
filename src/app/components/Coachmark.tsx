"use client";

import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { FiX } from "react-icons/fi";
import "./CSS/coachmark.css";

interface Props {
  /** CSS selector for the element to point at. */
  target: string;
  storageKey: string;
  title: string;
  body: string;
  ctaLabel?: string;
  ctaHref?: string;
  /** Only show when true (e.g. logged in). */
  enabled?: boolean;
  delayMs?: number;
  onCta?: () => void;
}

const W = 268;

export default function Coachmark({
  target, storageKey, title, body, ctaLabel, ctaHref, enabled = true, delayMs = 1000, onCta,
}: Props) {
  const [open, setOpen] = useState(false);
  const [dontShow, setDontShow] = useState(false);
  const [pos, setPos] = useState<{ top: number; left: number; ax: number } | null>(null);
  const elRef = useRef<HTMLElement | null>(null);

  const place = useCallback(() => {
    const el = elRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    if (r.width === 0 && r.height === 0) return; // hidden (mobile drawer closed)

    const pad = 12;
    let left = r.right + 14;                       // default: to the right
    if (left + W > window.innerWidth - pad) {      // no room → below instead
      left = Math.max(pad, Math.min(r.left, window.innerWidth - W - pad));
      setPos({ top: r.bottom + 12, left, ax: Math.min(Math.max(r.left + r.width / 2 - left, 18), W - 18) });
      return;
    }
    setPos({ top: r.top + r.height / 2, left, ax: -1 }); // ax -1 = arrow on left edge
  }, []);

  useEffect(() => {
    if (!enabled) return;
    /* Only the "Don't show again" checkbox suppresses this.
       Otherwise it appears on every visit. */
    try { if (localStorage.getItem(storageKey) === "1") return; } catch { /* private mode → still show */ }

    let raf = 0;
    const t = window.setTimeout(() => {
      /* The sidebar may not be mounted yet — retry briefly instead of giving up. */
      let tries = 0;
      const find = () => {
        const el = document.querySelector(target) as HTMLElement | null;
        if (el && (el.offsetWidth > 0 || el.offsetHeight > 0)) {
          elRef.current = el;
          place();
          setOpen(true);
          return;
        }
        if (tries++ < 20) raf = window.requestAnimationFrame(find); // ~330ms max
      };
      find();
    }, delayMs);

    return () => { window.clearTimeout(t); if (raf) window.cancelAnimationFrame(raf); };
  }, [enabled, storageKey, target, delayMs, place]);

  useLayoutEffect(() => {
    if (!open) return;
    place();
    const onMove = () => place();
    window.addEventListener("resize", onMove, { passive: true });
    window.addEventListener("scroll", onMove, { passive: true, capture: true });
    return () => {
      window.removeEventListener("resize", onMove);
      window.removeEventListener("scroll", onMove, { capture: true } as any);
    };
  }, [open, place]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") dismiss(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, dontShow]);

  const dismiss = () => {
    if (dontShow) { try { localStorage.setItem(storageKey, "1"); } catch { /* ignore */ } }
    setOpen(false);
  };

  if (!open || !pos || typeof document === "undefined") return null;

  return createPortal(
    <div
      className={`cm ${pos.ax === -1 ? "cm--right" : "cm--below"}`}
      style={{ top: pos.top, left: pos.left, width: W, ...(pos.ax >= 0 ? { ["--cm-ax" as any]: `${pos.ax}px` } : {}) }}
      role="dialog"
      aria-label={title}
    >
      <span className="cm__arrow" aria-hidden="true" />
      <button className="cm__x" onClick={dismiss} aria-label="Dismiss"><FiX size={12} /></button>

      <p className="cm__title">{title}</p>
      <p className="cm__body">{body}</p>

      <label className="cm__check">
        <input type="checkbox" checked={dontShow} onChange={(e) => setDontShow(e.target.checked)} />
        <span>Don't show again</span>
      </label>

      <div className="cm__foot">
        <button className="cm__ghost" onClick={dismiss}>Got it</button>
        {ctaLabel && ctaHref && (
          
          <a className="cm__cta"
            href={ctaHref}
            onClick={() => {
              if (dontShow) { try { localStorage.setItem(storageKey, "1"); } catch { /* ignore */ } }
              onCta?.();
            }}
          >
            {ctaLabel}
          </a>
        )}
      </div>
    </div>,
    document.body
  );
}