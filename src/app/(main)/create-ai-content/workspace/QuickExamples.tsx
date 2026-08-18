"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

/* ============================================================
   QuickExamples
   Horizontal strip of real prompt presets. Clicking a tile fills
   the composer via the parent's setter. No generation happens
   here and no credits are touched.
   ============================================================ */

export interface QuickExampleItem {
  label: string;
  prompt: string;
}

interface QuickExamplesProps {
  items: QuickExampleItem[];
  disabled?: boolean;
  onPick: (prompt: string) => void;
  heading?: string;
}

const QuickExamples: React.FC<QuickExamplesProps> = ({
  items,
  disabled = false,
  onPick,
  heading = "Quick examples",
}) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);

  const sync = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 4);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    sync();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    return () => {
      el.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, [sync, items.length]);

  const scrollBy = (dir: -1 | 1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.max(240, el.clientWidth * 0.8), behavior: "smooth" });
  };

  if (!items.length) return null;

  return (
    <section className="cac-qx" aria-label={heading}>
      <p className="cac-qx__heading">{heading}</p>

      <div className="cac-qx__viewport">
        {canLeft && (
          <button
            type="button"
            className="cac-qx__arrow cac-qx__arrow--left"
            onClick={() => scrollBy(-1)}
            aria-label="Scroll examples left"
          >
            <FiChevronLeft size={16} />
          </button>
        )}

        <div className="cac-qx__track" ref={trackRef}>
          {items.map((item) => (
            <button
              key={item.label}
              type="button"
              className="cac-qx__tile"
              disabled={disabled}
              onClick={() => onPick(item.prompt)}
              title={item.prompt}
            >
              <span className="cac-qx__tilelabel">{item.label}</span>
              <span className="cac-qx__tiletext">{item.prompt}</span>
            </button>
          ))}
        </div>

        {canRight && (
          <button
            type="button"
            className="cac-qx__arrow cac-qx__arrow--right"
            onClick={() => scrollBy(1)}
            aria-label="Scroll examples right"
          >
            <FiChevronRight size={16} />
          </button>
        )}
      </div>
    </section>
  );
};

export default QuickExamples;