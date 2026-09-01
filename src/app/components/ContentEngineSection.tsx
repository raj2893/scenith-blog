"use client";

import Link from "next/link";
import { newHref, trackNew } from "../whatsNew";
import "./CSS/content-engine-section.css";

/* Static demonstration content. Mirrors the real Content Engine data model
   (4 platforms, multiple items per day, per-platform versions) but is NOT
   live data and makes no analytics claims. */
const DEMO_DAY = [
  { platform: "Instagram", count: 3, tint: "ig", items: ["Reel — 3 editing mistakes", "Carousel — Before/after", "Story — Poll: which thumbnail?"] },
  { platform: "TikTok",    count: 2, tint: "tt", items: ["Hook test — \"Nobody tells you this\"", "Duet reply to top comment"] },
  { platform: "YouTube",   count: 2, tint: "yt", items: ["Short — Fastest way to cut a scene", "Community post — Poll"] },
  { platform: "X",         count: 1, tint: "x",  items: ["Thread — What I learned in 30 days"] },
];

const STEPS = [
  { n: "1", title: "Tell Scenith what you're building", body: "Your niche, audience, goal and the platforms you post on." },
  { n: "2", title: "Get your content plan", body: "A calendar with hooks, captions, CTAs and shot direction for every day." },
  { n: "3", title: "Create and organise every piece", body: "Edit anything, regenerate what doesn't land, upload finished assets." },
  { n: "4", title: "Download and post", body: "Mark each piece posted as you go. Nothing gets lost." },
];

const AUDIENCE = [
  { icon: "🎬", title: "Posting daily", body: "Running out of ideas by Wednesday every week." },
  { icon: "📱", title: "Multiple platforms", body: "Rewriting the same idea four times, by hand." },
  { icon: "🗂️", title: "Batch creators", body: "Filming Sunday, then losing track of what goes where." },
  { icon: "🏢", title: "Managing clients", body: "Juggling separate calendars for separate brands." },
];

export default function ContentEngineSection() {
  const cta = (source: string) => () => trackNew("content_engine_cta_click", { source });

  return (
    <section className="ces" aria-labelledby="ces-title">
      {/* ── Intro ── */}
      <div className="ces-head">
        <span className="ces-eyebrow">New — Content Engine</span>
        <h2 id="ces-title">Stop wondering what to post next.</h2>
        <p className="ces-sub">
          Scenith already makes your images, videos and voiceovers. Content Engine decides
          what to make — a full calendar for Instagram, TikTok, YouTube and X, organised by
          day, ready to create.
        </p>
      </div>

      {/* ── Product demonstration ── */}
      <div className="ces-demo">
        <div className="ces-demo__bar" aria-hidden="true">
          <span className="ces-dot ces-dot--r" /><span className="ces-dot ces-dot--y" /><span className="ces-dot ces-dot--g" />
          <span className="ces-demo__crumb">Content Engine · March plan · Day 12</span>
        </div>

        <div className="ces-demo__body">
          <p className="ces-demo__label">Monday, 12 March — 8 pieces planned</p>
          <div className="ces-demo__grid">
            {DEMO_DAY.map((col) => (
              <div key={col.platform} className={`ces-col ces-col--${col.tint}`}>
                <div className="ces-col__head">
                  <span className="ces-col__name">{col.platform}</span>
                  <span className="ces-col__count">{col.count}</span>
                </div>
                {col.items.map((it) => (
                  <div key={it} className="ces-card">{it}</div>
                ))}
              </div>
            ))}
          </div>
          <p className="ces-demo__note">
            Example plan. One day can hold as many pieces as you need — each with its own
            hook, caption and platform version.
          </p>
        </div>
      </div>

      {/* ── Outcomes ── */}
      <div className="ces-values">
        {[
          ["📅", "Know what you're posting every day", "No more staring at an empty calendar on Sunday night."],
          ["🔁", "Turn one idea into platform-ready content", "The same concept, written properly for each platform."],
          ["🗂️", "Keep everything in one place", "Instead of scattered across notes, folders and chats."],
          ["⚡", "Create whenever you have time", "Plan ahead, film in batches, post when you're ready."],
        ].map(([icon, title, body]) => (
          <div key={title} className="ces-value">
            <span className="ces-value__ico">{icon}</span>
            <h3>{title}</h3>
            <p>{body}</p>
          </div>
        ))}
      </div>

      {/* ── How it works ── */}
      <div className="ces-steps-wrap">
        <h3 className="ces-h3">How it works</h3>
        <ol className="ces-steps">
          {STEPS.map((s) => (
            <li key={s.n} className="ces-step">
              <span className="ces-step__n">{s.n}</span>
              <div>
                <strong>{s.title}</strong>
                <span>{s.body}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* ── Recognition ── */}
      <div className="ces-who">
        <h3 className="ces-h3">Sound familiar?</h3>
        <div className="ces-who__grid">
          {AUDIENCE.map((a) => (
            <div key={a.title} className="ces-who__card">
              <span className="ces-who__ico">{a.icon}</span>
              <strong>{a.title}</strong>
              <span>{a.body}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Plan → Create bridge ── */}
      <div className="ces-bridge">
        <div className="ces-bridge__half">
          <span className="ces-bridge__tag">Plan</span>
          <strong>Content Engine</strong>
          <span>Decide what to post and when.</span>
        </div>
        <span className="ces-bridge__arrow" aria-hidden="true">→</span>
        <div className="ces-bridge__half">
          <span className="ces-bridge__tag ces-bridge__tag--alt">Create</span>
          <strong>Scenith AI Studio</strong>
          <span>Make the image, video and voiceover.</span>
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="ces-cta">
        <h3>Plan your next 25 days.</h3>
        <p>Content Engine is included from Creator Lite — ₹799/mo, alongside everything you already get.</p>
        <div className="ces-cta__row">
          <Link href={newHref("homepage_section")} className="ces-btn ces-btn--primary" onClick={cta("homepage_section")}>
            Try Content Engine →
          </Link>
          <Link href="/pricing?src=homepage_ce" className="ces-btn ces-btn--ghost" onClick={cta("homepage_pricing")}>
            See plans
          </Link>
        </div>
      </div>
    </section>
  );
}