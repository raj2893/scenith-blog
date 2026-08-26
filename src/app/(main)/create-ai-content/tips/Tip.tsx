"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { TIPS, TipId } from "./tips";

interface TipProps {
  id: TipId;
  /** Wrap existing content instead of rendering the ⓘ button. */
  children?: React.ReactNode;
  /** Extra offset from the trigger, in px. */
  gap?: number;
}

const BUBBLE_W = 268;

const Tip: React.FC<TipProps> = ({ id, children, gap = 9 }) => {
  const tip = TIPS[id];
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState<{ top: number; left: number; below: boolean } | null>(null);
  const anchorRef = useRef<HTMLSpanElement>(null);
  const hoverTimer = useRef<number>();

  const place = useCallback(() => {
    const el = anchorRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const pad = 10;

    let left = r.left + r.width / 2 - BUBBLE_W / 2;
    left = Math.max(pad, Math.min(left, window.innerWidth - BUBBLE_W - pad));

    // Prefer above; flip below when there isn't room.
    const below = r.top < 200;
    const top = below ? r.bottom + gap : r.top - gap;

    setPos({ top, left, below });
  }, [gap]);

  const show = useCallback(() => { place(); setOpen(true); }, [place]);
  const hide = useCallback(() => {
    window.clearTimeout(hoverTimer.current);
    setOpen(false);
  }, []);

  /* Listeners attach only while open — nothing runs at rest. */
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") hide(); };
    const onDown = (e: MouseEvent) => {
      if (!anchorRef.current?.contains(e.target as Node)) hide();
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("scroll", hide, { passive: true, capture: true });
    window.addEventListener("resize", hide, { passive: true });
    document.addEventListener("mousedown", onDown);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("scroll", hide, { capture: true } as any);
      window.removeEventListener("resize", hide);
      document.removeEventListener("mousedown", onDown);
    };
  }, [open, hide]);

  useEffect(() => () => window.clearTimeout(hoverTimer.current), []);

  const bind = {
    onMouseEnter: () => {
      window.clearTimeout(hoverTimer.current);
      hoverTimer.current = window.setTimeout(show, 220); // don't fire on a passing cursor
    },
    onMouseLeave: hide,
    onFocus: show,
    onBlur: hide,
    onClick: (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      open ? hide() : show();
    },
  };

  return (
    <>
      <span ref={anchorRef} className="cac-tip-anchor" {...bind}>
        {children ?? (
          <button
            type="button"
            className="cac-tip-dot"
            aria-label={`Help: ${tip.title}`}
            aria-expanded={open}
          >
            ?
          </button>
        )}
      </span>

      {open && pos && typeof document !== "undefined" &&
        createPortal(
          <div
            role="tooltip"
            className={`cac-tip-bubble ${pos.below ? "is-below" : "is-above"}`}
            style={{ top: pos.top, left: pos.left, width: BUBBLE_W }}
            onMouseEnter={() => window.clearTimeout(hoverTimer.current)}
            onMouseLeave={hide}
          >
            <p className="cac-tip-title">{tip.title}</p>
            <p className="cac-tip-body">{tip.body}</p>
            {"points" in tip && tip.points && (
              <ul className="cac-tip-points">
                {tip.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
            )}
          </div>,
          document.body
        )}
    </>
  );
};

export default Tip;