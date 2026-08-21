"use client";

import React, { useMemo, useState } from "react";
import { FiX } from "react-icons/fi";
import {
  contentEngineApi, ContentEngineError, ContentEngineEntitlement,
  ContentPlatform, ALL_PLATFORMS, PLATFORM_META, PlanGenerationRequest,
} from "./contentEngineApi";

function todayISO(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

export default function CreatePlanModal({
  entitlement: ent, onClose, onCreated,
}: {
  entitlement: ContentEngineEntitlement;
  onClose: () => void;
  onCreated: (planId: number) => void;
}) {
  const unlimitedDays = ent.contentDaysRemaining < 0;
  const unlimitedPlatforms = ent.maxPlatforms < 0;
  const maxPlat = unlimitedPlatforms ? ALL_PLATFORMS.length : ent.maxPlatforms;

  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState(todayISO());
  const [durationDays, setDurationDays] = useState<number>(
    unlimitedDays ? 7 : Math.min(7, Math.max(1, ent.contentDaysRemaining))
  );
  const [platforms, setPlatforms] = useState<ContentPlatform[]>(["INSTAGRAM"]);
  const [audience, setAudience] = useState("");
  const [goal, setGoal] = useState("");
  const [niche, setNiche] = useState("");
  const [postingFrequency, setPostingFrequency] = useState("1-2 posts/day");
  const [pillars, setPillars] = useState("");
  const [tone, setTone] = useState("");
  const [generateWithAi, setGenerateWithAi] = useState(true);

  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [attempted, setAttempted] = useState(false);

  const afterCreation = unlimitedDays ? -1 : ent.contentDaysRemaining - durationDays;

  const togglePlatform = (p: ContentPlatform) => {
    setPlatforms((cur) =>
      cur.includes(p) ? cur.filter((x) => x !== p) : (cur.length >= maxPlat ? cur : [...cur, p])
    );
  };

  const validation = useMemo<string | null>(() => {
    if (!title.trim()) return "Add a plan title.";
    if (platforms.length === 0) return "Pick at least one platform.";
    if (durationDays < 1) return "Duration must be at least 1 day.";
    if (!unlimitedDays && durationDays > ent.contentDaysRemaining)
      return `Only ${ent.contentDaysRemaining} planning day${ent.contentDaysRemaining === 1 ? "" : "s"} left this billing period.`;
    if (ent.maxActivePlans >= 0 && ent.activePlansUsed >= ent.maxActivePlans)
      return "You've reached your active-plan limit. Archive a plan first.";
    return null;
  }, [title, platforms, durationDays, unlimitedDays, ent]);

  const submit = async () => {
    setAttempted(true);
    if (validation) return; // the inline error surfaces it once attempted
    setBusy(true);
    setError(null);
    const body: PlanGenerationRequest = {
      title: title.trim(),
      niche: niche || undefined,
      audience: audience || undefined,
      goal: goal || undefined,
      platforms,
      postingFrequency: postingFrequency || undefined,
      contentPillars: pillars.split(",").map((s) => s.trim()).filter(Boolean),
      tone: tone || undefined,
      startDate,
      durationDays,
      generateWithAi,
    };
    try {
      const cal = await contentEngineApi.createPlan(body);
      onCreated(cal.plan.id);
    } catch (err) {
      setError(err instanceof ContentEngineError ? err.message : "Failed to create plan.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="ce-overlay" onClick={busy ? undefined : onClose}>
      <div className="ce-modal" onClick={(e) => e.stopPropagation()}>
        <button className="ce-modal__close" onClick={onClose} disabled={busy}><FiX size={16} /></button>
        <h2 className="ce-modal__title">Create a content plan</h2>

        <div className="ce-alloc">
          <span>{unlimitedDays ? "∞" : ent.contentDaysRemaining} planning days available</span>
          <span className={`ce-alloc__after ${!unlimitedDays && afterCreation < 0 ? "is-over" : ""}`}>
            After creation: {unlimitedDays ? "∞" : Math.max(0, afterCreation)} left
          </span>
        </div>

        <div className="ce-form">
          <label className="ce-field">
            <span>Plan title *</span>
            <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="September launch" />
          </label>

          <div className="ce-field-row">
            <label className="ce-field">
              <span>Start date *</span>
              <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
            </label>
            <label className="ce-field">
              <span>Duration (days) *</span>
              <input type="number" min={1} max={unlimitedDays ? 90 : ent.contentDaysRemaining}
                     value={durationDays}
                     onChange={(e) => setDurationDays(Math.max(1, parseInt(e.target.value || "1", 10)))} />
            </label>
          </div>

          <div className="ce-field">
            <span>Platforms * <em className="ce-field__hint">(up to {unlimitedPlatforms ? ALL_PLATFORMS.length : maxPlat})</em></span>
            <div className="ce-plat-picker">
              {ALL_PLATFORMS.map((p) => {
                const on = platforms.includes(p);
                const disabled = !on && platforms.length >= maxPlat;
                return (
                  <button key={p} type="button" disabled={disabled}
                          className={`ce-plat ${on ? "is-on" : ""}`} onClick={() => togglePlatform(p)}>
                    {PLATFORM_META[p].emoji} {PLATFORM_META[p].label}
                  </button>
                );
              })}
            </div>
          </div>

          <label className="ce-field">
            <span>Niche / topic</span>
            <input value={niche} onChange={(e) => setNiche(e.target.value)} placeholder="AI video tools for creators" />
          </label>
          <div className="ce-field-row">
            <label className="ce-field"><span>Audience</span>
              <input value={audience} onChange={(e) => setAudience(e.target.value)} placeholder="indie creators" /></label>
            <label className="ce-field"><span>Goal</span>
              <input value={goal} onChange={(e) => setGoal(e.target.value)} placeholder="drive signups" /></label>
          </div>
          <div className="ce-field-row">
            <label className="ce-field"><span>Posting frequency</span>
              <input value={postingFrequency} onChange={(e) => setPostingFrequency(e.target.value)} /></label>
            <label className="ce-field"><span>Tone</span>
              <input value={tone} onChange={(e) => setTone(e.target.value)} placeholder="energetic, friendly" /></label>
          </div>
          <label className="ce-field">
            <span>Content pillars <em className="ce-field__hint">(comma-separated)</em></span>
            <input value={pillars} onChange={(e) => setPillars(e.target.value)} placeholder="education, behind the scenes, product" />
          </label>

          <label className="ce-toggle">
            <input type="checkbox" checked={generateWithAi} onChange={(e) => setGenerateWithAi(e.target.checked)} />
            <span>Generate content ideas with AI <em className="ce-field__hint">(uses Gemini — text only)</em></span>
          </label>
        </div>

        {(error || (attempted && validation)) && (
          <div className="ce-form-error">{error || validation}</div>
        )}

        <div className="ce-modal__actions">
          <button className="ce-btn ce-btn--ghost" onClick={onClose} disabled={busy}>Cancel</button>
          <button className="ce-btn ce-btn--primary" onClick={submit} disabled={busy}>
            {busy ? (generateWithAi ? "Generating…" : "Creating…") : (generateWithAi ? "Generate plan →" : "Create plan →")}
          </button>
        </div>
      </div>
    </div>
  );
}
