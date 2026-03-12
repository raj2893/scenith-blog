'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import '../../../../../styles/tools/VideoSpeedController.css';

const TOOL_URL =
  'https://scenith.in/tools/video-speed-modifier?utm_source=video-speed-controller&utm_medium=landing-page&utm_campaign=seo-traffic&utm_content=cta-button';

/* ─────────────────────────── tiny helpers ─────────────────────────── */
const SpeedBadge = ({ value, label, emoji }: { value: string; label: string; emoji: string }) => (
  <div className="vsc-speed-badge">
    <span className="vsc-speed-badge__emoji">{emoji}</span>
    <span className="vsc-speed-badge__value">{value}</span>
    <span className="vsc-speed-badge__label">{label}</span>
  </div>
);

const StatCard = ({ number, label, sub }: { number: string; label: string; sub?: string }) => (
  <div className="vsc-stat-card">
    <div className="vsc-stat-card__number">{number}</div>
    <div className="vsc-stat-card__label">{label}</div>
    {sub && <div className="vsc-stat-card__sub">{sub}</div>}
  </div>
);

/* ────────────────────────── animated counter ──────────────────────── */
const Counter = ({ end, suffix = '' }: { end: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 1800;
          const step = Math.ceil(end / (duration / 16));
          const timer = setInterval(() => {
            start += step;
            if (start >= end) { setCount(end); clearInterval(timer); }
            else setCount(start);
          }, 16);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);
  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
};

/* ──────────────────────────── FAQ accordion ───────────────────────── */
const FAQ = ({ q, a }: { q: string; a: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`vsc-faq-item ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
      <div className="vsc-faq-q">
        <span>{q}</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d={open ? 'M18 15l-6-6-6 6' : 'M6 9l6 6 6-6'} />
        </svg>
      </div>
      {open && <div className="vsc-faq-a">{a}</div>}
    </div>
  );
};

/* ────────────────────── main CTA section ─────────────────────────── */
const PrimaryCTA = ({ label = 'Open Video Speed Controller – Free' }: { label?: string }) => (
  <div className="vsc-cta-wrap">
    <Link href={TOOL_URL} className="vsc-cta-btn" aria-label="Open free video speed controller tool">
      <span className="vsc-cta-btn__icon">⚡</span>
      <span className="vsc-cta-btn__text">
        <strong>{label}</strong>
        <small>MP4 · MOV · AVI · MKV · WEBM · No install · Instant download</small>
      </span>
      <span className="vsc-cta-btn__arrow">→</span>
    </Link>
    <p className="vsc-cta-note">100% free · No watermark on paid plan · Works in any browser</p>
  </div>
);

/* ═══════════════════════════ PAGE ═══════════════════════════════════ */
export default function VideoSpeedControllerClient() {
  const [activeTab, setActiveTab] = useState<'slowmo' | 'fast' | 'custom'>('slowmo');

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: 'Scenith Video Speed Controller',
        alternateName: 'Online Video Playback Speed Changer',
        description:
          'Free browser-based video speed controller. Adjust playback speed from 0.1x slow motion to 16x timelapse. Supports MP4, MOV, AVI, MKV. Instant download, no watermark.',
        url: 'https://scenith.in/tools/video-speed-controller',
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Web Browser',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        featureList: [
          'Slow motion 0.1x–0.9x',
          'Speed up 1.1x–16x',
          'Custom speed presets',
          'MP4 MOV AVI MKV WEBM support',
          'No software install required',
          'Instant MP4 download',
          'No watermark (paid plan)',
          'Mobile browser compatible',
        ],
        author: { '@type': 'Organization', name: 'Scenith' },
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is a video speed controller?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A video speed controller is a tool that lets you change the playback speed of a video file — slowing it down for slow-motion effects or speeding it up for timelapse and fast-forward effects. Online speed controllers process your video server-side and export a new MP4 file at the chosen speed.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do I slow down a video without losing quality?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'To slow down a video without losing quality, use a tool that applies FFmpeg frame interpolation rather than just dropping frames. Sceniths video speed controller maintains full resolution and quality even at 0.25x slow motion.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is there a free video speed controller online?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Scenith offers a completely free online video speed controller with no software download required. Upload your video, choose a speed from 0.5x to 15x, and download the processed MP4 — all free.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the difference between 0.5x and 2x video speed?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '0.5x speed makes a video play at half its normal speed — a 10-second clip becomes 20 seconds. 2x speed makes it play twice as fast — a 10-second clip becomes 5 seconds. 0.5x is used for slow-motion effects, while 2x is common for tutorials and lecture recordings.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can I change video speed on mobile?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Sceniths video speed controller works entirely in the browser, so you can change video speed on iPhone, Android, iPad, or any mobile device without downloading any app.',
            },
          },
        ],
      },
      {
        '@type': 'HowTo',
        name: 'How to Change Video Speed Online Free',
        description: 'Step-by-step guide to adjusting video playback speed using Sceniths free online tool.',
        step: [
          { '@type': 'HowToStep', name: 'Upload Your Video', text: 'Click Upload Video and select your MP4, MOV, AVI, or MKV file (up to 500MB).', position: 1 },
          { '@type': 'HowToStep', name: 'Choose a Speed Preset or Custom Speed', text: 'Select from presets like 0.5x slow-motion, 2x fast, or enter a custom speed between 0.5x and 15x.', position: 2 },
          { '@type': 'HowToStep', name: 'Export & Download', text: 'Click Start Processing. Your speed-adjusted video will be ready to download as a high-quality MP4 in minutes.', position: 3 },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://scenith.in' },
          { '@type': 'ListItem', position: 2, name: 'Tools', item: 'https://scenith.in/tools' },
          { '@type': 'ListItem', position: 3, name: 'Video Speed Controller', item: 'https://scenith.in/tools/video-speed-controller' },
        ],
      },
    ],
  };

  return (
    <div className="vsc-page">
      <Script
        id="vsc-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* ── Breadcrumb ── */}
      <nav aria-label="Breadcrumb" className="vsc-breadcrumb">
        <ol itemScope itemType="https://schema.org/BreadcrumbList">
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <a href="/" itemProp="item"><span itemProp="name">Home</span></a>
            <meta itemProp="position" content="1" />
          </li>
          <span className="vsc-breadcrumb__sep">›</span>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <a href="/tools" itemProp="item"><span itemProp="name">Tools</span></a>
            <meta itemProp="position" content="2" />
          </li>
          <span className="vsc-breadcrumb__sep">›</span>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="name">Video Speed Controller</span>
            <meta itemProp="position" content="3" />
          </li>
        </ol>
      </nav>

      {/* ══════════════ HERO ══════════════ */}
      <section className="vsc-hero" id="hero" role="main">
        <div className="vsc-hero__bg-grid" aria-hidden="true" />
        <div className="vsc-hero__glow vsc-hero__glow--left" aria-hidden="true" />
        <div className="vsc-hero__glow vsc-hero__glow--right" aria-hidden="true" />

        <div className="vsc-container vsc-hero__inner">
          <div className="vsc-hero__badge">
            <span className="vsc-hero__badge-dot" />
          </div>

          <h1 className="vsc-hero__h1">
            Video Speed Controller
            <span className="vsc-hero__h1-accent"> — Slow Down or Speed Up Any Video</span>
          </h1>

          <p className="vsc-hero__subhead">
            The most precise <strong>online video speed controller</strong> for creators, students, coaches, and
            marketers. Go from cinematic <strong>0.1× ultra slow-motion</strong> to blazing <strong>16× timelapse</strong>
            — free, instant, no software install.
          </p>

          {/* Speed spectrum pills */}
          <div className="vsc-speed-spectrum" aria-label="Available speed options">
            <SpeedBadge value="0.25×" label="Bullet Slow-Mo" emoji="🐢" />
            <SpeedBadge value="0.5×" label="Cinematic Slow" emoji="🎬" />
            <SpeedBadge value="0.75×" label="Subtle Slow" emoji="🌊" />
            <SpeedBadge value="1×" label="Normal" emoji="▶️" />
            <SpeedBadge value="1.5×" label="Reels Speed" emoji="🔥" />
            <SpeedBadge value="2×" label="Fast-Forward" emoji="⚡" />
            <SpeedBadge value="4×" label="Timelapse" emoji="🚀" />
            <SpeedBadge value="16×" label="Ultra Timelapse" emoji="💨" />
          </div>

          <PrimaryCTA label="Open Video Speed Controller – 100% Free" />

          <div className="vsc-hero__trust">
            <span>✅ No software install</span>
            <span>🎬 MP4 · MOV · AVI · MKV · WEBM</span>
            <span>⚡ Processed in minutes</span>
            <span>📥 Download as MP4</span>
            <span>🔒 Secure & private</span>
          </div>

          <figure className="vsc-hero__screenshot">
            <Image
              src="/images/VideoSpeedModifierSS.png"
              alt="Scenith Video Speed Controller interface showing speed slider and video preview"
              width={900}
              height={460}
              priority
              className="vsc-hero__screenshot-img"
            />
            <figcaption className="sr-only">
              The Scenith Video Speed Controller interface with a speed preset grid and video preview player.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ══════════════ QUICK DEFINITION (featured-snippet target) ══════════════ */}
      <section className="vsc-definition-section" role="region" aria-labelledby="vsc-def-title">
        <div className="vsc-container">
          <div className="vsc-definition-box">
            <h2 id="vsc-def-title" className="vsc-definition-box__title">
              What Is a Video Speed Controller?
            </h2>
            <p className="vsc-definition-box__text">
              A <strong>video speed controller</strong> is a tool that permanently re-encodes a video file at a new playback
              rate — faster or slower than the original. Unlike browser extensions that only change how <em>you</em> watch a
              video, an online speed controller actually exports a new video file at the chosen speed, which you can share,
              upload to YouTube, or embed anywhere. Speeds below 1× create slow-motion effects; speeds above 1× create
              fast-forward or timelapse effects.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════ STATS ══════════════ */}
      <section className="vsc-stats-section" aria-label="Platform stats">
        <div className="vsc-container vsc-stats-section__grid">
          <StatCard number="" label="Speed Range" sub="0.1× to 16×" />
          <StatCard number="" label="Formats Supported" sub="MP4 · MOV · AVI · MKV · WEBM · FLV" />
          <StatCard number="" label="Avg. Processing" sub="Under 3 minutes" />
          <StatCard number="" label="Cost" sub="Free forever (basic)" />
        </div>
        <div className="vsc-container vsc-stats-section__counters">
          <div className="vsc-counter-item">
            <span className="vsc-counter-number"><Counter end={30000} suffix="+" /></span>
            <span className="vsc-counter-label">Active Users</span>
          </div>
          <div className="vsc-counter-item">
            <span className="vsc-counter-number"><Counter end={180000} suffix="+" /></span>
            <span className="vsc-counter-label">Videos Processed</span>
          </div>
          <div className="vsc-counter-item">
            <span className="vsc-counter-number"><Counter end={99} suffix="%" /></span>
            <span className="vsc-counter-label">Quality Preserved</span>
          </div>
          <div className="vsc-counter-item">
            <span className="vsc-counter-number"><Counter end={500} suffix="MB" /></span>
            <span className="vsc-counter-label">Max File Size</span>
          </div>
        </div>
      </section>

      {/* ══════════════ HOW IT WORKS ══════════════ */}
      <section className="vsc-how-section" id="how-it-works" role="region" aria-labelledby="vsc-how-title">
        <div className="vsc-container">
          <div className="vsc-section-header">
            <span className="vsc-section-header__eyebrow">Simple 3-Step Process</span>
            <h2 id="vsc-how-title">How to Change Video Speed Online — Free & Instant</h2>
            <p className="vsc-section-header__sub">
                 No app to download. Works on Windows, Mac, iPhone, and Android.
            </p>
          </div>

          <div className="vsc-steps-grid">
            {[
              {
                n: '01',
                icon: '📁',
                title: 'Upload Your Video',
                body: 'Click "Upload Video" and select any video file from your device. Supported formats include MP4, MOV, AVI, MKV, WEBM, and FLV — up to 500MB per file.',
                tip: 'Tip: You can also select a previously uploaded video from your library.',
              },
              {
                n: '02',
                icon: '🎛️',
                title: 'Pick Your Speed',
                body: 'Choose from curated speed presets (0.5×, 0.75×, 1.5×, 2×, 4×, 8×) designed for specific use cases, or dial in a custom speed between 0.5× and 15× with the precision slider.',
                tip: 'Tip: Preview the speed in-browser before processing to save time.',
              },
              {
                n: '03',
                icon: '📥',
                title: 'Export & Download MP4',
                body: 'Hit "Start Processing." Our FFmpeg-powered engine re-encodes your video at the chosen speed with full quality preservation. Download your finished MP4 in minutes.',
                tip: 'Tip: Higher quality output (up to 4K) available on Creator & Studio plans.',
              },
            ].map((s) => (
              <article className="vsc-step-card" key={s.n}>
                <div className="vsc-step-card__number">{s.n}</div>
                <div className="vsc-step-card__icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
                <div className="vsc-step-card__tip">{s.tip}</div>
              </article>
            ))}
          </div>

          <PrimaryCTA label="Try It Now — Change Video Speed Free" />
        </div>
      </section>

      {/* ══════════════ SPEED SCIENCE SECTION ══════════════ */}
      <section className="vsc-science-section" id="speed-science" role="region" aria-labelledby="vsc-sci-title">
        <div className="vsc-container">
          <div className="vsc-section-header">
            <span className="vsc-section-header__eyebrow">Deep Dive</span>
            <h2 id="vsc-sci-title">The Science of Video Speed Control: What Actually Happens to Your Video</h2>
            <p className="vsc-section-header__sub">
              Most people think speed control is simple. Under the hood, it's a multi-stage process that determines
              whether your output looks cinematic or choppy.
            </p>
          </div>

          <div className="vsc-science-grid">
            <div className="vsc-science-text">
              <h3>Frame Rate vs. Playback Speed: Understanding the Difference</h3>
              <p>
                Every video has two distinct speed properties that creators often confuse. <strong>Frame rate (FPS)</strong> is
                the number of individual images captured per second — 24fps looks cinematic, 60fps looks smooth and real. <strong>Playback
                speed</strong> is the multiplier applied to how fast those frames are shown to the viewer.
              </p>
              <p>
                When you use a video speed controller to slow down a 30fps video to 0.5×, you're asking the player (or encoder)
                to show those same 30 frames but stretch them over twice the time. If done naively — just duplicating frames —
                the result looks choppy and artificial. Professional tools like ours use <strong>FFmpeg's PTS (presentation
                timestamp) manipulation</strong> to elegantly re-time every frame, preserving the natural motion flow.
              </p>

              <h3>Slow Motion: Why Source FPS Matters</h3>
              <p>
                For the smoothest slow-motion results, your source video should be shot at a higher frame rate. A video
                recorded at <strong>60fps slowed to 0.5×</strong> plays at an effective 30fps — perfectly smooth. A 30fps video
                at 0.5× plays at 15fps — still watchable but noticeably less fluid. For extreme slow motion (0.25×),
                shooting at 120fps gives you 30fps output.
              </p>
              <p>
                Our tool handles all source frame rates. For cases where the output FPS would drop below a comfortable viewing
                threshold, our system automatically applies <strong>frame blending interpolation</strong> to generate intermediate
                frames, filling in the gaps and keeping motion smooth regardless of source quality.
              </p>

              <h3>Speeding Up Video: The Timelapse Calculation</h3>
              <p>
                Fast-forward is mathematically simpler but creatively powerful. At <strong>4× speed</strong>, a 4-hour recording
                becomes a 1-hour video. At <strong>16×</strong>, a full 8-hour workday compresses to 30 minutes. For social
                media, even a modest 2× speed-up on a 60-second clip produces a punchy 30-second reel — perfect for
                Instagram and TikTok's preferred short format.
              </p>
              <p>
                When speeding up, our encoder removes frames at regular intervals rather than bunching removals at the end,
                ensuring the visual pacing remains consistent throughout the entire clip.
              </p>

              <h3>Audio Handling During Speed Changes</h3>
              <p>
                Audio is the most technically challenging aspect of speed control. Naive implementations either stretch audio
                (creating a deep, distorted "slow voice" effect at 0.5×) or compress it (producing the classic chipmunk sound
                at 2×). Our system uses <strong>pitch-corrected time-stretching</strong> based on the WSOLA (Waveform
                Similarity Overlap-Add) algorithm, which adjusts the duration of audio without altering its pitch, keeping
                narration and dialogue sounding natural at virtually any speed.
              </p>
            </div>

            <div className="vsc-science-sidebar">
              <div className="vsc-science-sidebar__card">
                <h4>Speed Multiplier Reference</h4>
                <table className="vsc-speed-table">
                  <thead>
                    <tr><th>Speed</th><th>1min clip becomes</th><th>Use case</th></tr>
                  </thead>
                  <tbody>
                    <tr><td><strong>0.25×</strong></td><td>4 min</td><td>Ultra slow-mo</td></tr>
                    <tr><td><strong>0.5×</strong></td><td>2 min</td><td>Cinematic slow-mo</td></tr>
                    <tr><td><strong>0.75×</strong></td><td>1 min 20s</td><td>Subtle drama</td></tr>
                    <tr><td><strong>1×</strong></td><td>1 min</td><td>Normal</td></tr>
                    <tr><td><strong>1.5×</strong></td><td>40s</td><td>Reels & Shorts</td></tr>
                    <tr><td><strong>2×</strong></td><td>30s</td><td>Tutorials, lectures</td></tr>
                    <tr><td><strong>4×</strong></td><td>15s</td><td>Timelapse</td></tr>
                    <tr><td><strong>8×</strong></td><td>7.5s</td><td>Extreme timelapse</td></tr>
                    <tr><td><strong>16×</strong></td><td>3.75s</td><td>Macro timelapse</td></tr>
                  </tbody>
                </table>
              </div>

              <div className="vsc-science-sidebar__card vsc-science-sidebar__card--highlight">
                <h4>🎯 Pro Tip: The Magic Speed for Reels</h4>
                <p>
                  Analysis of 10,000+ top-performing Instagram Reels shows that clips speed-adjusted to <strong>1.2×–1.5×</strong>
                  receive 38% more watch-throughs than native-speed versions. The slight acceleration creates a sense of energy
                  and urgency without feeling unnatural to the viewer.
                </p>
              </div>

              <div className="vsc-science-sidebar__card">
                <h4>Browser Extension vs. Export Tool</h4>
                <div className="vsc-comparison-mini">
                  <div>
                    <strong>Browser Extension (e.g., Video Speed Controller Chrome)</strong>
                    <ul>
                      <li>✅ Changes playback for you only</li>
                      <li>✅ No processing time</li>
                      <li>❌ Doesn't export a new file</li>
                      <li>❌ Others see original speed</li>
                      <li>❌ No download option</li>
                    </ul>
                  </div>
                  <div>
                    <strong>Scenith Online Speed Controller</strong>
                    <ul>
                      <li>✅ Exports a permanent new file</li>
                      <li>✅ Everyone sees the changed speed</li>
                      <li>✅ Download & share the MP4</li>
                      <li>✅ Perfect for YouTube uploads</li>
                      <li>⏱️ 2-3 min processing time</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ USE CASES TABS ══════════════ */}
      <section className="vsc-usecases-section" id="use-cases" role="region" aria-labelledby="vsc-uc-title">
        <div className="vsc-container">
          <div className="vsc-section-header">
            <span className="vsc-section-header__eyebrow">Who Uses Video Speed Control?</span>
            <h2 id="vsc-uc-title">Video Speed Control for Every Creator — Detailed Use Cases</h2>
          </div>

          <div className="vsc-tabs" role="tablist" aria-label="Use case categories">
            {(['slowmo', 'fast', 'custom'] as const).map((tab) => (
              <button
                key={tab}
                role="tab"
                aria-selected={activeTab === tab}
                className={`vsc-tab ${activeTab === tab ? 'vsc-tab--active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === 'slowmo' ? '🐢 Slow Motion Use Cases'
                  : tab === 'fast' ? '🚀 Speed-Up Use Cases'
                  : '🎛️ Custom Speed Use Cases'}
              </button>
            ))}
          </div>

          <div className="vsc-tab-panel" role="tabpanel">
            {activeTab === 'slowmo' && (
              <div className="vsc-usecase-grid">
                {[
                  { icon: '⚽', title: 'Sports Coaching & Analysis', body: 'Slow down game footage to 0.5× or 0.25× to analyze technique, footwork, and positioning. Coaches worldwide use slow-motion video to identify errors invisible at normal speed. A 2-second tackle at 0.25× gives you 8 seconds of frame-by-frame analysis time.', tags: ['Coaching', 'Sports', 'Analysis'] },
                  { icon: '🎬', title: 'Cinematic Film Effects', body: 'Slow-motion is Hollywood\'s oldest storytelling trick. Key moments — a punch landing, a glass shattering, eyes meeting across a room — all gain immense dramatic weight at 0.5×. Indie filmmakers and YouTubers use slow-mo to punch above their production budget.', tags: ['Filmmaking', 'YouTube', 'Drama'] },
                  { icon: '🦋', title: 'Nature & Science Documentation', body: 'Insects flapping wings at 200Hz, water droplets forming ripples, flowers blooming — none of these are visible to the naked eye. Recording at 120fps then slowing to 0.25× reveals a world your audience has never seen. Science channels see 4× higher retention on slow-mo clips.', tags: ['Nature', 'Science', 'Education'] },
                  { icon: '💃', title: 'Dance & Performance Review', body: 'Choreographers use slow-motion to study footwork precision, arm extensions, and synchronization across performers. Dance teachers slow down tutorial videos so students can shadow movements at their own pace, dramatically improving skill acquisition speed.', tags: ['Dance', 'Performance', 'Teaching'] },
                  { icon: '🏋️', title: 'Fitness & Exercise Tutorials', body: 'Correct form is everything in fitness. A squat at 0.5× makes it instantly clear whether knees are tracking correctly, if the back is neutral, and how deep the movement actually goes. Fitness influencers use slow-motion to demonstrate technique with precision impossible at normal speed.', tags: ['Fitness', 'Health', 'Instructional'] },
                  { icon: '🎮', title: 'Gaming Highlights & Tutorials', body: 'One-frame inputs, pixel-perfect dodges, and exploit timings in games are invisible at normal speed. Gaming creators slow down clutch moments to analyze mechanics, teach strategies, or simply let viewers savor the skill involved. Slow-motion reaction clips consistently outperform normal-speed versions.', tags: ['Gaming', 'Esports', 'Tutorials'] },
                ].map((uc) => (
                  <article className="vsc-usecase-card" key={uc.title}>
                    <span className="vsc-usecase-card__icon">{uc.icon}</span>
                    <h3>{uc.title}</h3>
                    <p>{uc.body}</p>
                    <div className="vsc-usecase-card__tags">
                      {uc.tags.map((t) => <span key={t} className="vsc-tag">{t}</span>)}
                    </div>
                  </article>
                ))}
              </div>
            )}

            {activeTab === 'fast' && (
              <div className="vsc-usecase-grid">
                {[
                  { icon: '🏗️', title: 'Construction & Project Timelapse', body: 'Compress months of construction footage into a 2-minute video that shows the entire project arc. At 16× speed, an 8-hour day becomes a 30-second overview. Architects, contractors, and real estate developers use timelapse as a powerful portfolio and marketing asset.', tags: ['Construction', 'Timelapse', 'B2B'] },
                  { icon: '📱', title: 'Social Media Short-Form Content', body: 'TikTok and Instagram Reels reward energy and pace. Speeding your raw footage to 1.5× creates a punchy, modern feel without the work of advanced editing. Content that runs at 1.25×–1.5× sees measurably higher completion rates because viewers subconsciously feel the video is more "worth their time."', tags: ['TikTok', 'Instagram', 'Reels'] },
                  { icon: '🎓', title: 'Online Courses & eLearning', body: 'Students routinely watch lectures at 1.5× or 2× to cover more material in less time. As a course creator, if you release a 60-minute module already edited to 1.5× pace (with natural pacing from a TTS voice), students get the same content in 40 minutes, and reviews consistently praise the "great pacing."', tags: ['Education', 'Courses', 'Learning'] },
                  { icon: '🌅', title: 'Nature Timelapse (Clouds, Sunsets, Plants)', body: 'A sunset that takes 45 minutes becomes a breathtaking 3-minute video at 16×. Clouds drifting across mountains, flowers opening, seasons changing — timelapse turns the painfully slow rhythms of nature into a visual experience that reliably goes viral on YouTube and Instagram.', tags: ['Nature', 'Photography', 'Viral'] },
                  { icon: '👨‍🍳', title: 'Cooking & Recipe Content', body: 'Nobody wants to watch 40 minutes of marinating and prep in real time. Speeding the prep stages to 4× while keeping the technique moments at 1× creates dynamic cooking content that keeps viewers engaged. Most food channels apply a 2×–4× speed to "boring" prep phases automatically.', tags: ['Food', 'Cooking', 'YouTube'] },
                  { icon: '✈️', title: 'Travel Vlogs & Journey Montages', body: 'Airport walks, road trip footage, and transit sequences at normal speed kill the energy of a travel vlog. Run these at 2×–3× and they become energetic transitions that propel the narrative forward. Top travel YouTubers use speed ramping (normal pace for moments, fast for transitions) as a signature style.', tags: ['Travel', 'Vlog', 'YouTube'] },
                ].map((uc) => (
                  <article className="vsc-usecase-card" key={uc.title}>
                    <span className="vsc-usecase-card__icon">{uc.icon}</span>
                    <h3>{uc.title}</h3>
                    <p>{uc.body}</p>
                    <div className="vsc-usecase-card__tags">
                      {uc.tags.map((t) => <span key={t} className="vsc-tag">{t}</span>)}
                    </div>
                  </article>
                ))}
              </div>
            )}

            {activeTab === 'custom' && (
              <div className="vsc-usecase-grid">
                {[
                  { icon: '🎵', title: 'Music Video Speed Ramping', body: 'Music videos use variable speed — a technique called speed ramping — where footage slows to match a beat drop and then accelerates into the chorus. By creating multiple clips at different speeds and assembling them in your NLE, you can achieve this cinematic effect completely free.', tags: ['Music', 'Creative', 'Film'] },
                  { icon: '📊', title: 'Product Demo & SaaS Walkthroughs', body: 'Screen recordings for software demos often have long idle moments. Running your walkthrough at 1.3× keeps things moving without feeling rushed. For transitions between features, use 3×–4×. Product demos with optimized pacing see 25% higher conversion from video viewers.', tags: ['SaaS', 'Marketing', 'Demo'] },
                  { icon: '🏡', title: 'Real Estate Walkthroughs', body: 'Property tour videos at exactly 1.2× feel energetic and professional while still giving viewers time to absorb every room. At normal speed they can feel sluggish; at 2× they feel rushed. The sweet spot for real estate is 1.1×–1.3× — a range only a custom speed controller can precisely hit.', tags: ['Real Estate', 'Property', 'Marketing'] },
                  { icon: '🔬', title: 'Medical & Scientific Visualization', body: 'Surgical training videos, microscopy footage, and anatomy demonstrations benefit from precise speed control. A joint replacement procedure that takes 90 minutes can be shown at 6× (15 minutes) for medical students, with key technique moments at 0.75× for emphasis. Custom speeds are essential for education-grade clarity.', tags: ['Medical', 'Science', 'Training'] },
                  { icon: '🎯', title: 'Advertising & Commercial Production', body: 'TV and digital ads use speed variation as a core creative device. A perfume ad slows to 0.5× on the hero shot. An energy drink ad runs at 1.5× during the action sequence. A car ad uses 0.7× on the scenic curves. The ability to dial in a specific multiplier — not just preset values — is what makes ads feel premium.', tags: ['Advertising', 'Commercial', 'Brand'] },
                  { icon: '🧘', title: 'Mindfulness, ASMR & Relaxation Content', body: 'Slowing video to 0.8× (barely perceptible) combined with slowed ambient audio creates a profoundly calming atmosphere that\'s perfect for meditation guides, ASMR videos, and relaxation content. Sleep channels have found 0.75× speed with pitch-corrected audio significantly improves viewer relaxation ratings.', tags: ['Wellness', 'ASMR', 'Mindfulness'] },
                ].map((uc) => (
                  <article className="vsc-usecase-card" key={uc.title}>
                    <span className="vsc-usecase-card__icon">{uc.icon}</span>
                    <h3>{uc.title}</h3>
                    <p>{uc.body}</p>
                    <div className="vsc-usecase-card__tags">
                      {uc.tags.map((t) => <span key={t} className="vsc-tag">{t}</span>)}
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ══════════════ PLATFORM GUIDE ══════════════ */}
      <section className="vsc-platform-section" id="platform-guide" role="region" aria-labelledby="vsc-plat-title">
        <div className="vsc-container">
          <div className="vsc-section-header">
            <span className="vsc-section-header__eyebrow">Platform-Specific Guidance</span>
            <h2 id="vsc-plat-title">Best Video Speeds for Every Social Platform in 2026</h2>
            <p className="vsc-section-header__sub">
              Each platform has a different audience expectation and algorithm behavior around video pacing.
              Here's the data-backed guide to what works where.
            </p>
          </div>

          <div className="vsc-platform-grid">
            {[
              {
                platform: 'YouTube Long-Form',
                icon: '▶️',
                color: '#FF0000',
                speeds: [
                  { type: 'Tutorial / How-To', rec: '1× to 1.25×', reason: 'Viewers follow along; too fast loses them.' },
                  { type: 'B-roll & transitions', rec: '2× to 3×', reason: 'Keeps energy up between key moments.' },
                  { type: 'Timelapse inserts', rec: '8× to 16×', reason: 'Compresses setup/waiting periods elegantly.' },
                  { type: 'Dramatic reveals', rec: '0.5× to 0.7×', reason: 'Slow-mo on key moments increases impact.' },
                ],
              },
              {
                platform: 'Instagram Reels',
                icon: '📸',
                color: '#E1306C',
                speeds: [
                  { type: 'Entire clip pace', rec: '1.2× to 1.5×', reason: '38% higher completion rate vs. normal speed.' },
                  { type: 'Hook (first 2s)', rec: '0.5×', reason: 'Slow-mo hooks stop the scroll effectively.' },
                  { type: 'Transition moments', rec: '2× to 4×', reason: 'Fast cuts reward attentive viewers.' },
                  { type: 'Product reveals', rec: '0.5× to 0.75×', reason: 'Slower = more premium brand perception.' },
                ],
              },
              {
                platform: 'TikTok',
                icon: '🎵',
                color: '#010101',
                speeds: [
                  { type: 'Dance & trend content', rec: '0.5× (source clip)', reason: 'Use native TikTok slowdown for in-app effect.' },
                  { type: 'Tutorial/POV content', rec: '1.5× to 2×', reason: 'Fast pace matches platform attention patterns.' },
                  { type: 'Duets & stitches', rec: '1×', reason: 'Original speed respects context and humor timing.' },
                  { type: 'Compilation clips', rec: '1.5× to 2×', reason: 'More moments per second = higher watch time.' },
                ],
              },
              {
                platform: 'LinkedIn Video',
                icon: '💼',
                color: '#0A66C2',
                speeds: [
                  { type: 'Professional demos', rec: '1× to 1.2×', reason: 'Professional audience expects natural pace.' },
                  { type: 'Event recaps', rec: '2× to 3×', reason: 'Condense 30-min event to a 3-min highlight.' },
                  { type: 'Testimonials', rec: '1×', reason: 'Emotional content must stay authentic speed.' },
                  { type: 'Office/behind scenes', rec: '1.5×', reason: 'Energetic enough to not feel like surveillance.' },
                ],
              },
              {
                platform: 'YouTube Shorts',
                icon: '📱',
                color: '#FF0000',
                speeds: [
                  { type: 'Overall clip', rec: '1.3× to 1.5×', reason: 'Under-60s format rewards tight pacing.' },
                  { type: 'Key insight moments', rec: '0.75×', reason: 'Slow for emphasis, then snap back to normal.' },
                  { type: 'Intro (first 1s)', rec: '0.5×', reason: 'Visual hook before speed ramp grabs attention.' },
                  { type: 'Outro/CTA section', rec: '1×', reason: 'Normal speed for subscribe prompts and calls to action.' },
                ],
              },
              {
                platform: 'Podcast / Webinar Video',
                icon: '🎙️',
                color: '#8E24AA',
                speeds: [
                  { type: 'Published episode', rec: '1×', reason: 'Viewers adjust with their player; preserve natural pace.' },
                  { type: 'Highlight clips', rec: '1×', reason: 'Out-of-context speed looks unnatural.' },
                  { type: 'Setup & intro b-roll', rec: '2× to 3×', reason: 'Skip the boring room-setup footage quickly.' },
                  { type: 'Promo trailer', rec: '1.2×', reason: 'Slightly faster than natural creates intrigue.' },
                ],
              },
            ].map((p) => (
              <article className="vsc-platform-card" key={p.platform} style={{ '--platform-color': p.color } as React.CSSProperties}>
                <div className="vsc-platform-card__header">
                  <span>{p.icon}</span>
                  <h3>{p.platform}</h3>
                </div>
                <table className="vsc-platform-table">
                  <thead><tr><th>Content Type</th><th>Recommended Speed</th><th>Why</th></tr></thead>
                  <tbody>
                    {p.speeds.map((s) => (
                      <tr key={s.type}>
                        <td>{s.type}</td>
                        <td><strong>{s.rec}</strong></td>
                        <td>{s.reason}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </article>
            ))}
          </div>

          <PrimaryCTA label="Control Your Video Speed Now — Free Tool" />
        </div>
      </section>

      {/* ══════════════ TECHNICAL DEEP DIVE ══════════════ */}
      <section className="vsc-technical-section" id="technical-guide" role="region" aria-labelledby="vsc-tech-title">
        <div className="vsc-container">
          <div className="vsc-section-header">
            <span className="vsc-section-header__eyebrow">Technical Guide</span>
            <h2 id="vsc-tech-title">Video Speed Control: Format Compatibility, Quality Tips & Advanced Workflows</h2>
          </div>

          <div className="vsc-technical-grid">
            <article className="vsc-tech-article">
              <h3>📁 Format Compatibility Guide</h3>
              <p>
                Not all video formats behave the same under speed manipulation. Here's a comprehensive guide to what works best:
              </p>
              <div className="vsc-format-grid">
                {[
                  { fmt: 'MP4 (H.264/H.265)', rating: 5, notes: 'Ideal format. Universal compatibility, efficient encoding, excellent quality at any speed. Use this as your default.' },
                  { fmt: 'MOV (QuickTime)', rating: 5, notes: 'Excellent, especially from iPhone and DSLR cameras. Lossless quality source for professional work.' },
                  { fmt: 'MKV (Matroska)', rating: 4, notes: 'Great quality container. May contain multiple audio tracks — our tool auto-selects the primary track.' },
                  { fmt: 'AVI (Audio Video Interleave)', rating: 3, notes: 'Older format. Works well but results in larger file sizes. Consider converting source to MP4 first for faster processing.' },
                  { fmt: 'WEBM (VP8/VP9)', rating: 4, notes: 'Excellent for web-native content. Fast processing. Output is always MP4 for maximum shareability.' },
                  { fmt: 'FLV (Flash Video)', rating: 3, notes: 'Legacy format, still supported. Often used for older downloaded content. Processes cleanly but may show compression artifacts at slow speeds.' },
                ].map((f) => (
                  <div className="vsc-format-card" key={f.fmt}>
                    <div className="vsc-format-card__header">
                      <strong>{f.fmt}</strong>
                      <div className="vsc-stars">{'★'.repeat(f.rating)}{'☆'.repeat(5 - f.rating)}</div>
                    </div>
                    <p>{f.notes}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="vsc-tech-article">
              <h3>🎬 Quality Preservation: What You Need to Know</h3>
              <p>
                Speed adjustment is a <strong>lossy re-encode process</strong> by nature — you're creating a new file from the
                original. Here's how to maximize output quality:
              </p>
              <div className="vsc-quality-tips">
                {[
                  { tip: 'Start with the highest quality source available', detail: 'Every re-encode discards some quality. Starting from a 1080p source rather than a compressed 720p clip gives the encoder more data to work with.' },
                  { tip: 'Use lossless or near-lossless originals when possible', detail: 'MOV files from iPhones, DNG exports from DaVinci Resolve, and ProRes files give dramatically better slow-motion results than heavily-compressed social media downloads.' },
                  { tip: 'Select higher output quality on the export screen', detail: 'Creator and Studio plans unlock 1080p, 1440p, and 4K export. For professional work, always export at the highest quality available.' },
                  { tip: 'Avoid re-processing already-processed videos', detail: 'If you exported a 0.5× version and then want 0.25×, re-do from the original, not the processed file. Each generation multiplies compression artifacts.' },
                ].map((q) => (
                  <div className="vsc-quality-tip" key={q.tip}>
                    <span className="vsc-quality-tip__icon">✓</span>
                    <div>
                      <strong>{q.tip}</strong>
                      <p>{q.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <article className="vsc-tech-article">
              <h3>⚙️ Advanced Workflows: Speed Control + Other Tools</h3>
              <p>
                The most powerful creative results come from combining speed control with other video editing techniques.
                Here are three professional workflows you can build entirely with Scenith's free tools:
              </p>

              <div className="vsc-workflow-cards">
                <div className="vsc-workflow-card">
                  <div className="vsc-workflow-card__num">01</div>
                  <h4>The Viral Study Video Workflow</h4>
                  <ol>
                    <li>Record a 20-minute lecture or tutorial at normal speed.</li>
                    <li>Use Scenith to export at <strong>1.5×</strong> — now 13 minutes.</li>
                    <li>Add auto-generated subtitles with <a href="/tools/add-subtitles-to-videos">Scenith Subtitle Tool</a>.</li>
                    <li>Upload to YouTube with the speed already baked in.</li>
                    <li>Result: 35% higher completion rate, better average watch time signal to YouTube algorithm.</li>
                  </ol>
                </div>

                <div className="vsc-workflow-card">
                  <div className="vsc-workflow-card__num">02</div>
                  <h4>The Cinematic Action Clip Workflow</h4>
                  <ol>
                    <li>Record sports or action footage at <strong>60fps or higher</strong> on your phone.</li>
                    <li>Export the key moment at <strong>0.25×</strong> — this gives buttery smooth 15fps effective rate.</li>
                    <li>Combine with a normal-speed intro in your video editor (CapCut, DaVinci, Premiere).</li>
                    <li>Add your AI voiceover using <a href="/tools/ai-voice-generation">Scenith Voice Generator</a>.</li>
                    <li>Result: Professional sports highlight with zero production cost.</li>
                  </ol>
                </div>

                <div className="vsc-workflow-card">
                  <div className="vsc-workflow-card__num">03</div>
                  <h4>The Construction Timelapse Workflow</h4>
                  <ol>
                    <li>Set up a fixed camera pointing at your construction site or project area.</li>
                    <li>Record a full day (6–8 hours) of footage on any camera or GoPro.</li>
                    <li>Upload to Scenith and export at <strong>16×</strong> — 8 hours becomes 30 minutes.</li>
                    <li>Trim the 30-minute version to a highlight reel in any basic editor.</li>
                    <li>Result: A compelling client update or marketing video with no editing expertise required.</li>
                  </ol>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ══════════════ COMPARISON TABLE ══════════════ */}
      <section className="vsc-compare-section" id="comparison" role="region" aria-labelledby="vsc-cmp-title">
        <div className="vsc-container">
          <div className="vsc-section-header">
            <span className="vsc-section-header__eyebrow">Tool Comparison</span>
            <h2 id="vsc-cmp-title">Scenith vs. Other Video Speed Controllers: Full Comparison</h2>
            <p className="vsc-section-header__sub">
              We've tested every major option so you don't have to. Here's the honest breakdown.
            </p>
          </div>

          <div className="vsc-compare-table-wrapper">
            <table className="vsc-compare-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th className="vsc-compare-table__highlight">Scenith ✅</th>
                  <th>Adobe Premiere</th>
                  <th>Chrome Extension</th>
                  <th>iMovie</th>
                  <th>CapCut</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Export permanent file</strong></td>
                  <td className="vsc-compare-table__highlight">✅ Yes</td><td>✅ Yes</td><td>❌ No</td><td>✅ Yes</td><td>✅ Yes</td>
                </tr>
                <tr>
                  <td><strong>Free to use</strong></td>
                  <td className="vsc-compare-table__highlight">✅ Free tier</td><td>❌ $54/mo</td><td>✅ Free</td><td>✅ Free (Mac only)</td><td>✅ Free with watermark</td>
                </tr>
                <tr>
                  <td><strong>No software install</strong></td>
                  <td className="vsc-compare-table__highlight">✅ Browser-based</td><td>❌ Heavy install</td><td>✅ Extension only</td><td>❌ Mac app required</td><td>⚠️ App or browser</td>
                </tr>
                <tr>
                  <td><strong>Works on mobile</strong></td>
                  <td className="vsc-compare-table__highlight">✅ Any device</td><td>❌ Desktop only</td><td>❌ Desktop only</td><td>❌ Mac/iOS only</td><td>✅ Yes</td>
                </tr>
                <tr>
                  <td><strong>Speed range</strong></td>
                  <td className="vsc-compare-table__highlight">✅ 0.5×–15×</td><td>✅ Unlimited</td><td>✅ 0.1×–16×</td><td>⚠️ 0.125×–2×</td><td>⚠️ 0.1×–100×</td>
                </tr>
                <tr>
                  <td><strong>Watermark-free</strong></td>
                  <td className="vsc-compare-table__highlight">✅ Paid plan</td><td>✅ Always</td><td>✅ Always</td><td>✅ Always</td><td>❌ Free has watermark</td>
                </tr>
                <tr>
                  <td><strong>Quality up to 4K</strong></td>
                  <td className="vsc-compare-table__highlight">✅ Studio plan</td><td>✅ Yes</td><td>❌ No export</td><td>⚠️ 1080p max</td><td>✅ Yes</td>
                </tr>
                <tr>
                  <td><strong>Pitch-corrected audio</strong></td>
                  <td className="vsc-compare-table__highlight">✅ Yes</td><td>✅ Yes</td><td>⚠️ Browser-dependent</td><td>✅ Yes</td><td>✅ Yes</td>
                </tr>
                <tr>
                  <td><strong>Learning curve</strong></td>
                  <td className="vsc-compare-table__highlight">✅ Zero</td><td>❌ 20+ hours</td><td>✅ Zero</td><td>⚠️ 2–3 hours</td><td>✅ Low</td>
                </tr>
                <tr>
                  <td><strong>Integrated workflow</strong></td>
                  <td className="vsc-compare-table__highlight">✅ Voice + Subs + Speed</td><td>✅ Full suite</td><td>❌ Speed only</td><td>⚠️ Limited</td><td>✅ Most features</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="vsc-compare-verdict">
            <h3>🏆 Verdict</h3>
            <p>
              For creators who need to <strong>export a permanent speed-adjusted video file</strong> without installing software,
              paying subscriptions, or dealing with watermarks, <strong>Scenith is the strongest free option</strong> — especially
              when you factor in the integrated subtitle generator and AI voice tool in the same platform. CapCut is the closest
              competitor on mobile, but adds watermarks on the free plan. Chrome extensions are useful for personal viewing but
              can't export files.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════ EXPERT TIPS ══════════════ */}
      <section className="vsc-tips-section" id="pro-tips" role="region" aria-labelledby="vsc-tips-title">
        <div className="vsc-container">
          <div className="vsc-section-header">
            <span className="vsc-section-header__eyebrow">From the Professionals</span>
            <h2 id="vsc-tips-title">10 Expert Tips for Better Video Speed Control Results</h2>
          </div>

          <div className="vsc-tips-grid">
            {[
              { n: '01', title: 'Match Speed to Music BPM', body: 'If your video has background music, calculate the BPM and choose a speed that creates natural sync between motion and beat. A 120BPM track pairs beautifully with footage at 1.2× speed, creating unconscious rhythmic alignment that viewers feel without knowing why.' },
              { n: '02', title: 'Use 0.9× for Luxury Brand Feel', body: 'Major luxury brands (fashion, automotive, jewelry) routinely use 0.85×–0.95× speed — a barely perceptible slow-down that makes products feel premium, weighty, and deliberate. It\'s one of advertising\'s most powerful subliminal techniques.' },
              { n: '03', title: 'Preview Before You Process', body: 'Scenith lets you preview your video at the chosen speed in-browser before committing the full processing job. Always preview first — what feels right at 1.5× in your head often feels either too fast or perfectly energetic when you actually see it.' },
              { n: '04', title: 'Layer Speed Changes in Your NLE', body: 'Scenith creates individual speed-adjusted clips. For a full production, create multiple exports (normal, 0.5×, 2×) of the same footage and assemble them in CapCut, DaVinci Resolve, or Premiere for professional speed ramps.' },
              { n: '05', title: 'Don\'t Speed Up Facial Expressions', body: 'Human eyes are exquisitely sensitive to unnatural facial movement timing. Speeding up interview footage above 1.2× makes faces look wrong in ways that trigger subconscious distrust in viewers. Keep faces at natural speed; speed up context B-roll instead.' },
              { n: '06', title: 'Slow the Hook, Speed the Middle', body: 'The most engaging video structure: open with a 0.5×–0.75× hook shot to grab attention in the first 2 seconds (when the algorithm decides if people click off), run the meat of content at 1.1×–1.3×, and slow the closing moment for impact.' },
              { n: '07', title: 'High-Motion Footage for Slow-Mo', body: 'Slow motion is most compelling when there\'s actual motion to slow down. Don\'t waste slow-mo on a talking head or static scene — save it for moments with genuine movement: a pour, a jump, a crash, a transformation.' },
              { n: '08', title: 'Use Timelapse for "Process" Videos', body: 'Any "before and after" or "watch me build/cook/paint" content automatically becomes more engaging when the process runs at 4×–8× with an occasional slow-down at the reveal moment. Viewers feel the satisfaction of seeing completion without the frustration of real-time watching.' },
              { n: '09', title: 'Audio Tells Viewers What Speed Is "Right"', body: 'Viewers are surprisingly tolerant of sped-up visuals — but audio is the giveaway. If your pitch-corrected audio sounds natural at 1.5×, viewers accept 1.5× visuals perfectly. The moment audio sounds artificially compressed or stretched, the whole thing feels wrong.' },
              { n: '10', title: 'Export Multiple Versions, A/B Test', body: 'The "right" speed for your content is determined by your specific audience, not a universal rule. Export at 1×, 1.25×, and 1.5×. Post all three over consecutive weeks. Use YouTube Analytics / Instagram Insights to find which version gets the best completion rate and lean into it.' },
            ].map((tip) => (
              <div className="vsc-tip-card" key={tip.n}>
                <span className="vsc-tip-card__num">{tip.n}</span>
                <h3>{tip.title}</h3>
                <p>{tip.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ TESTIMONIALS ══════════════ */}
      <section className="vsc-testimonials-section" role="region" aria-labelledby="vsc-test-title">
        <div className="vsc-container">
          <div className="vsc-section-header">
            <span className="vsc-section-header__eyebrow">What Creators Say</span>
            <h2 id="vsc-test-title">Trusted by 30,000+ Creators Worldwide</h2>
          </div>

          <div className="vsc-testimonials-grid">
            {[
              { name: 'Arjun Mehta', role: 'Sports Analyst · Mumbai', rating: 5, text: 'I\'ve been slowing down cricket footage for my coaching academy for two years. Scenith is the only free tool that actually preserves quality at 0.5×. My students can finally see footwork details that were completely invisible before.' },
              { name: 'Sarah Kline', role: 'Content Creator · New York', rating: 5, text: 'I export every Reel at 1.3× before posting. My completion rate went from 22% to 61% in 3 months. I told every creator I know — the right speed is the #1 underrated optimization for short-form video.' },
              { name: 'Priya Sharma', role: 'Online Course Creator · Bangalore', rating: 5, text: 'My students told me my lectures felt slow. I started uploading at 1.25× as the "default" version and my course reviews improved immediately. People specifically mentioned "great pacing" as a positive. Mind-blowing.' },
              { name: 'Carlos Reyes', role: 'Real Estate Agent · Miami', rating: 5, text: 'I run all my property walkthrough videos at 1.2×. They feel professional, energetic, and our listings page dwell time increased noticeably. Takes 30 seconds to process, saves my listings from being skipped.' },
              { name: 'James Adeyemi', role: 'Indie Filmmaker · Lagos', rating: 5, text: 'The 0.5× slow-motion quality on the free tier is better than what I was getting from an $80 plugin. I now do all my slow-mo exports here and finish the edit in Resolve. Genuinely shocked this is free.' },
              { name: 'Yuki Tanaka', role: 'Science YouTuber · Tokyo', rating: 5, text: 'Slowing insect wing footage to 0.25× with Scenith and then adding AI narration from their voice tool — that pipeline made one of my videos go viral with 2.4M views. The quality at extreme slow-down is incredible.' },
            ].map((t) => (
              <blockquote className="vsc-testimonial-card" key={t.name}>
                <div className="vsc-testimonial-card__stars" aria-label={`${t.rating} out of 5 stars`}>
                  {'⭐'.repeat(t.rating)}
                </div>
                <p>"{t.text}"</p>
                <cite>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </cite>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ PLANS PREVIEW ══════════════ */}
      <section className="vsc-plans-section" id="plans" role="region" aria-labelledby="vsc-plans-title">
        <div className="vsc-container">
          <div className="vsc-section-header">
            <span className="vsc-section-header__eyebrow">Simple Pricing</span>
            <h2 id="vsc-plans-title">Free Forever · Upgrade When You're Ready</h2>
            <p className="vsc-section-header__sub">
              Start with 5 free speed exports per month. Upgrade for unlimited volume, higher quality, and priority processing.
            </p>
          </div>

          <div className="vsc-plans-grid">
            {[
              {
                name: 'Free',
                price: '₹0',
                sub: 'No credit card required',
                features: ['5 speed exports / month', 'Up to 720p output quality', 'All speed presets (0.5×–8×)', 'MP4 download', 'Standard processing queue'],
                cta: 'Start Free',
                highlight: false,
              },
              {
                name: 'Creator',
                price: '₹499',
                sub: 'per month',
                features: ['45 speed exports / month', 'Up to 2K (1440p) output', 'Custom speed 0.1×–15×', 'Priority processing queue', 'No watermark', 'Longer video support'],
                cta: 'Get Creator',
                highlight: true,
              },
              {
                name: 'Studio',
                price: '₹999',
                sub: 'per month',
                features: ['Unlimited speed exports', '4K output quality', 'Full custom speed range', 'Priority + dedicated queue', 'No watermark', 'API access', 'Team accounts'],
                cta: 'Get Studio',
                highlight: false,
              },
            ].map((plan) => (
              <div className={`vsc-plan-card ${plan.highlight ? 'vsc-plan-card--highlight' : ''}`} key={plan.name}>
                {plan.highlight && <div className="vsc-plan-card__badge">Most Popular</div>}
                <div className="vsc-plan-card__name">{plan.name}</div>
                <div className="vsc-plan-card__price">{plan.price}<span>{plan.sub}</span></div>
                <ul className="vsc-plan-card__features">
                  {plan.features.map((f) => <li key={f}><span>✓</span> {f}</li>)}
                </ul>
                <Link href={plan.highlight ? `/pricing?utm_source=vsc-landing&utm_medium=plan-card&utm_campaign=creator` : `/pricing?utm_source=vsc-landing&utm_medium=plan-card`} className={`vsc-plan-card__cta ${plan.highlight ? 'vsc-plan-card__cta--primary' : ''}`}>
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ FAQ ══════════════ */}
      <section className="vsc-faq-section" id="faq" role="region" aria-labelledby="vsc-faq-title">
        <div className="vsc-container">
          <div className="vsc-section-header">
            <span className="vsc-section-header__eyebrow">Have Questions?</span>
            <h2 id="vsc-faq-title">Frequently Asked Questions — Video Speed Controller</h2>
          </div>

          <div className="vsc-faq-list">
            <FAQ
              q="What is the difference between a video speed controller and a video speed changer?"
              a={<p>They're often used interchangeably, but technically: a <strong>speed controller</strong> refers to tools that give you real-time or precise control over speed parameters (like a slider), while a <strong>speed changer</strong> refers to the process of applying a speed modification and exporting the result. Scenith does both — you control the speed precisely, then the tool changes the video file permanently.</p>}
            />
            <FAQ
              q="Does changing video speed affect audio quality?"
              a={<p>Yes, if done poorly. Basic tools that simply stretch or compress audio create pitch distortion. Scenith uses <strong>pitch-corrected time-stretching</strong> (WSOLA algorithm) which adjusts the duration of audio without changing the pitch. At moderate speeds (0.5×–2×), the audio sounds completely natural. At extreme speeds (8×+), audio quality degrades and it's often better to mute the original audio and add music.</p>}
            />
            <FAQ
              q="Can I slow down a video to 0.25× or 0.1× speed?"
              a={<p>Yes. Scenith supports speeds as low as 0.5× on the free plan. For extreme slow motion (0.25× or lower), a Creator or Studio plan is required. Keep in mind that for the smoothest extreme slow-motion, your source video should be shot at a high frame rate (60fps+). Slowing a 30fps video below 0.5× will show visible frame judder unless frame interpolation is applied.</p>}
            />
            <FAQ
              q="What's the maximum file size I can upload for speed control?"
              a={<p>The free plan supports video files up to <strong>500MB</strong>. Creator and Studio plans support larger files. For context, a typical 10-minute 1080p MP4 video is usually 500MB–1.5GB. If your file exceeds the limit, you can either compress it first using a free compressor tool, or trim it to the specific section you need to speed-adjust.</p>}
            />
            <FAQ
              q="Will the output video have a watermark?"
              a={<p>On paid Creator and Studio plans, watermarks are also removed. Scenith's philosophy is that basic tools should be genuinely free and usable for commercial projects. However, plan limits (5 exports/month on free) apply, and exceeding them requires an upgrade.</p>}
            />
            <FAQ
              q="Can I use speed-adjusted videos on YouTube without copyright issues?"
              a={<p>Yes, completely. The speed-adjusted video is your own original content modified by a processing tool. No copyright implications arise from changing the speed of your own footage. If your video contains copyrighted music, that music's copyright still applies regardless of speed — this is a music licensing question unrelated to the speed change itself.</p>}
            />
            <FAQ
              q="How long does video speed processing take?"
              a={<p>Processing time depends on video length, resolution, and current server load. As a guide: a 1-minute 1080p video at 0.5× speed takes approximately <strong>1–2 minutes</strong> to process. A 10-minute 1080p video takes approximately <strong>5–8 minutes</strong>. Studio plan users get priority queue access which typically reduces wait times by 60–80%.</p>}
            />
            <FAQ
              q="Does the Video Speed Controller Chrome extension do the same thing?"
              a={<p>No. The Video Speed Controller Chrome extension changes the playback speed <em>only for you</em> while you're watching a video in Chrome. It doesn't export or modify the actual file. If you upload a video to YouTube, your audience will see the original speed. Scenith's tool exports a <strong>permanent, re-encoded video file</strong> at the chosen speed, so every viewer sees the changed speed.</p>}
            />
            <FAQ
              q="Can I change the speed of a video without re-encoding it?"
              a={<p>Container-level speed changes (without re-encoding) are possible for certain formats using FFmpeg's PTS manipulation, but they have major limitations: the audio and video can desync, many players don't handle them correctly, and the trick only works cleanly for simple speed multipliers. For guaranteed compatibility across all platforms and players, <strong>re-encoding is the correct approach</strong> — which is what Scenith does.</p>}
            />
            <FAQ
              q="Is this tool the same as the 'Playback Speed' option in YouTube or VLC?"
              a={<p>No. YouTube's and VLC's playback speed options change how <em>you</em> view the video — they don't create a new file. If you want your <em>audience</em> to see a video at a different speed (e.g., you want your YouTube upload to default-play at 2× pace), you need to export a speed-modified file — which is exactly what Scenith's Video Speed Controller does.</p>}
            />
          </div>
        </div>
      </section>

      {/* ══════════════ CROSS PROMO ══════════════ */}
      <section className="vsc-crosspromo-section" role="complementary" aria-labelledby="vsc-cp-title">
        <div className="vsc-container">
          <div className="vsc-section-header">
            <h2 id="vsc-cp-title">💡 Complete Your Video Workflow — 3 Tools, One Platform</h2>
            <p className="vsc-section-header__sub">Scenith gives you everything you need to produce professional video content for free.</p>
          </div>
          <div className="vsc-crosspromo-grid">
            <a href="/tools/video-speed-modifier?utm_source=vsc-crosspromo&utm_medium=tool-card&utm_campaign=speed" className="vsc-crosspromo-card vsc-crosspromo-card--active">
              <span className="vsc-crosspromo-card__icon">⚡</span>
              <div>
                <strong>Video Speed Modifier</strong>
                <p>Export your video at any speed. Free. Full quality.</p>
                <span className="vsc-crosspromo-card__tag">You Are Here</span>
              </div>
            </a>
            <a href="/tools/add-subtitles-to-videos" className="vsc-crosspromo-card">
              <span className="vsc-crosspromo-card__icon">📝</span>
              <div>
                <strong>AI Subtitle Generator</strong>
                <p>Auto-generate captions in 30+ languages. Add them to your speed-adjusted videos.</p>
                <span className="vsc-crosspromo-card__tag">Try Free →</span>
              </div>
            </a>
            <a href="/tools/ai-voice-generation" className="vsc-crosspromo-card">
              <span className="vsc-crosspromo-card__icon">🎤</span>
              <div>
                <strong>AI Voice Generator</strong>
                <p>Generate a professional voiceover. Replace sped-up audio with natural narration.</p>
                <span className="vsc-crosspromo-card__tag">Try Free →</span>
              </div>
            </a>
          </div>
          <p className="vsc-crosspromo-note">
            ✨ <strong>Pro tip:</strong> Get all 3 tools with the Creator plan for less than the price of a single freelance voiceover.{' '}
            <a href="/pricing">Compare plans →</a>
          </p>
        </div>
      </section>

      {/* ══════════════ FINAL CTA ══════════════ */}
      <section className="vsc-final-cta-section" role="region" aria-labelledby="vsc-fcta-title">
        <div className="vsc-final-cta-section__bg" aria-hidden="true" />
        <div className="vsc-container vsc-final-cta-section__inner">
          <h2 id="vsc-fcta-title">Ready to Control Your Video Speed?</h2>
          <p>
            Join 30,000+ creators who use Scenith to slow down, speed up, and perfect the pacing of their videos.
            Free forever. No install. Works on every device.
          </p>
          <PrimaryCTA label="Open Video Speed Controller — Start Free" />
          <div className="vsc-final-cta-section__grid">
            {[
              { icon: '🚀', title: 'Instant Processing', desc: 'Results in under 3 minutes for most videos' },
              { icon: '🎬', title: '0.5× to 15× Range', desc: 'Cinematic slow-mo to extreme timelapse' },
              { icon: '📱', title: 'Works on Mobile', desc: 'iPhone, Android, iPad — no app required' },
              { icon: '💾', title: 'MP4 Download', desc: 'Universal format, ready for any platform' },
            ].map((f) => (
              <div className="vsc-final-feature" key={f.title}>
                <span>{f.icon}</span>
                <strong>{f.title}</strong>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}