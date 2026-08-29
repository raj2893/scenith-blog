"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

/* ============================================================
   GenerationOverlay
   A locked, full-screen overlay shown while the AI builds (or
   rebuilds) a plan — a Gemini call that can take 20–60s. It:
     • communicates staged progress so the app never looks frozen,
     • gives an honest time estimate that scales with plan size,
     • blocks in-app navigation (covers everything) and warns the
       browser before an unload, so work isn't lost mid-generation.
   Progress is time-based (the backend is a single request), which
   is the honest way to show "the system is working, this is
   expected". The parent unmounts this the moment the call resolves.
   ============================================================ */

export default function GenerationOverlay({
  days,
  platforms,
  mode = "create",
}: {
  days: number;
  platforms: number;
  mode?: "create" | "regenerate";
}) {
  const stages = useMemo(
    () => [
      "Analysing your niche & audience…",
      "Mapping your content pillars…",
      `Writing ${days} day${days === 1 ? "" : "s"} across ${platforms} platform${platforms === 1 ? "" : "s"}…`,
      "Polishing hooks, captions & CTAs…",
      "Finalising your calendar…",
    ],
    [days, platforms]
  );

  // Honest estimate that scales with the work: base + per-day + per-platform.
  const estimate = useMemo(
    () => Math.min(90, Math.max(10, Math.round(8 + days * 0.8 + platforms * 3))),
    [days, platforms]
  );

  const [stage, setStage] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const startRef = useRef(Date.now());

  // Lock scroll + guard against accidental unload while generating.
  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const beforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = "";
    };
    window.addEventListener("beforeunload", beforeUnload);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("beforeunload", beforeUnload);
    };
  }, []);

  useEffect(() => {
    const tick = setInterval(() => {
      const secs = (Date.now() - startRef.current) / 1000;
      setElapsed(secs);
      const frac = Math.min(1, secs / estimate);
      setStage(Math.min(stages.length - 1, Math.floor(frac * stages.length)));
    }, 250);
    return () => clearInterval(tick);
  }, [estimate, stages.length]);

  // Creep toward — but never reach — 100%; the parent unmounts us on success.
  const pct = Math.min(95, Math.round((elapsed / estimate) * 100));
  const overtime = elapsed > estimate;

  return (
    <div
      className="ce-genoverlay"
      role="alertdialog"
      aria-live="assertive"
      aria-label={mode === "regenerate" ? "Regenerating your content plan" : "Building your content plan"}
    >
      <div className="ce-genoverlay__card">
        <div className="ce-genoverlay__spinner" />
        <h3 className="ce-genoverlay__title">
          {mode === "regenerate" ? "Regenerating your plan" : "Building your content plan"}
        </h3>

        <ul className="ce-genoverlay__steps">
          {stages.map((s, i) => (
            <li
              key={i}
              className={`ce-genoverlay__step ${i < stage ? "is-done" : ""} ${i === stage ? "is-active" : ""}`}
            >
              <span className="ce-genoverlay__dot" />
              {s}
            </li>
          ))}
        </ul>

        <div className="ce-genoverlay__bar"><span style={{ width: `${pct}%` }} /></div>

        <p className="ce-genoverlay__hint">
          {overtime
            ? "Almost there — larger plans take a little longer. Please keep this tab open."
            : `This usually takes about ${estimate} seconds. Please keep this tab open — don't refresh or close it.`}
        </p>
      </div>
    </div>
  );
}
