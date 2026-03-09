'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import '../../../../../styles/tools/VideoSpeedChangerOnline.css';

const UTM_TOOL_URL =
  'https://scenith.in/tools/video-speed-modifier?utm_source=vsc-online&utm_medium=satellite&utm_campaign=video-speed-changer-online';

const SPEED_PRESETS = [
  { emoji: '🐌', label: 'Dramatic Slow-Mo', value: '0.5x', color: '#6366f1' },
  { emoji: '🎥', label: 'Cinematic Slow', value: '0.75x', color: '#8b5cf6' },
  { emoji: '🙂', label: 'Natural Speed', value: '1x', color: '#10b981' },
  { emoji: '⚡', label: 'Social Fast', value: '1.25x', color: '#f59e0b' },
  { emoji: '🔥', label: 'Reels Speed', value: '1.5x', color: '#ef4444' },
  { emoji: '🎓', label: 'Learning Mode', value: '2x', color: '#3b82f6' },
  { emoji: '🚀', label: 'Timelapse', value: '4x', color: '#ec4899' },
  { emoji: '💨', label: 'Extreme Timelapse', value: '8x–15x', color: '#14b8a6' },
];

const COMPARISON_ROWS = [
  { feature: 'Price', scenith: '✅ Free forever', others: '❌ $20–55/month' },
  { feature: 'Watermark', scenith: '✅ Zero watermark', others: '❌ Logo on free tier' },
  { feature: 'Speed Range', scenith: '✅ 0.5x – 15x', others: '⚠️ Limited range' },
  { feature: 'Processing Time', scenith: '✅ 2–3 minutes', others: '⚠️ 10–30 minutes' },
  { feature: 'App Install', scenith: '✅ Browser-based', others: '❌ Download required' },
  { feature: 'Audio Sync', scenith: '✅ Auto pitch fix', others: '⚠️ Manual required' },
  { feature: 'Mobile Support', scenith: '✅ All devices', others: '⚠️ Desktop only' },
  { feature: 'Commercial Rights', scenith: '✅ Full rights', others: '⚠️ Plan-dependent' },
];

const FAQS = [
  {
    q: 'How do I change video speed online for free?',
    a: "Upload your video on Scenith, pick a speed preset between 0.5x and 15x, hit 'Start Processing', and download your MP4 — no watermark.",
  },
  {
    q: 'Can I slow down a video online without losing quality?',
    a: 'Yes. Scenith uses FFmpeg-powered GPU processing to slow video down to 0.5x while preserving full resolution and audio synchronization.',
  },
  {
    q: 'What video formats are supported?',
    a: 'MP4, MOV, AVI, MKV, WebM, MPEG, and FLV. Output is always a high-quality MP4.',
  },
  {
    q: 'Is there a watermark on the exported video?',
    a: 'No watermark whatsoever on free exports. The video is 100% yours with full commercial use rights.',
  },
  {
    q: 'What is the fastest speed I can apply to a video?',
    a: 'Up to 15x — perfect for extreme time-lapse sequences like sunrises, construction progress, or art creation.',
  },
  {
    q: 'Do I need to install software?',
    a: 'Zero installs needed. Scenith runs entirely in your browser on any device — desktop, tablet, or mobile.',
  },
  {
    q: 'Can I use this for Instagram Reels or TikTok?',
    a: 'Absolutely. The 1.5x "Reels Speed" or 0.5x "Dramatic Slow-Mo" presets are built specifically for social media content creators.',
  },
  {
    q: 'How long does processing take?',
    a: 'Typically 2–3 minutes for most videos. GPU-accelerated servers handle heavy files quickly.',
  },
];

export default function VideoSpeedChangerClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="vsc-page">
      {/* ── Breadcrumb ── */}
      <nav aria-label="Breadcrumb" className="vsc-breadcrumb">
        <ol itemScope itemType="https://schema.org/BreadcrumbList">
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link href="/" itemProp="item"><span itemProp="name">Home</span></Link>
            <meta itemProp="position" content="1" />
          </li>
          <span aria-hidden="true"> › </span>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link href="/tools" itemProp="item"><span itemProp="name">Tools</span></Link>
            <meta itemProp="position" content="2" />
          </li>
          <span aria-hidden="true"> › </span>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="name">Video Speed Changer Online</span>
            <meta itemProp="position" content="3" />
          </li>
        </ol>
      </nav>

      {/* ── HERO ── */}
      <section className="vsc-hero" id="hero" role="main">
        <div className="vsc-particle-bg" aria-hidden="true">
          {[...Array(6)].map((_, i) => <div key={i} className="vsc-particle" />)}
        </div>

        <motion.div
          className="vsc-hero-inner"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
        >
          <div className="vsc-badge-row">
            <span className="vsc-badge">🚫 No Watermark</span>
            <span className="vsc-badge">📱 Works on Any Device</span>
          </div>

          <h1 className="vsc-h1">
            Video Speed Changer Online —{' '}
            <span className="vsc-gradient-text">Free, Instant & No Watermark</span>
          </h1>

          <p className="vsc-hero-sub">
            The fastest way to change video speed online. Slow down to{' '}
            <strong>0.5x for cinematic slow-motion</strong> or speed up to{' '}
            <strong>15x for extreme timelapse</strong> — no software install, no watermark,
            no hidden fees. Supports MP4, MOV, AVI, MKV & more.
          </p>

          {/* ── BIG CTA ── */}
          <div className="vsc-cta-wrapper">
            <motion.a
              href={UTM_TOOL_URL}
              className="vsc-main-cta"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              aria-label="Open Video Speed Changer Tool"
            >
              <span className="vsc-cta-icon">🎬</span>
              <span className="vsc-cta-text">
                <strong>Change Video Speed Now — It&apos;s Free</strong>
                <small>No download · No watermark · Instant MP4 export</small>
              </span>
              <span className="vsc-cta-arrow">→</span>
            </motion.a>
            <p className="vsc-cta-sub">
              Trusted by <strong>30,000+</strong> creators · Rated{' '}
              <span aria-label="4.8 out of 5 stars">⭐⭐⭐⭐⭐</span> 4.8/5
            </p>
          </div>

          {/* Speed Presets Preview */}
          <div className="vsc-presets-preview" aria-label="Available speed presets">
            {SPEED_PRESETS.map((p) => (
              
               
            <a  href={UTM_TOOL_URL}
                key={p.value}
                className="vsc-preset-chip"
                style={{ '--chip-color': p.color } as React.CSSProperties}
                aria-label={`${p.label} — ${p.value} speed`}
              >
                <span>{p.emoji}</span>
                <span className="vsc-chip-label">{p.label}</span>
                <span className="vsc-chip-val">{p.value}</span>
              </a>
            ))}
          </div>
        </motion.div>

        <figure className="vsc-hero-figure">
          <Image
            src="/images/VideoSpeedModifierSS.png"
            alt="Scenith video speed changer interface showing speed slider, presets, and video preview"
            width={820}
            height={460}
            priority
            className="vsc-hero-img"
          />
          <figcaption className="sr-only">
            Screenshot of the Scenith video speed changer tool with speed presets and video preview
          </figcaption>
        </figure>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="vsc-section vsc-how" id="how-it-works" aria-labelledby="vsc-how-title">
        <div className="vsc-container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 id="vsc-how-title" className="vsc-section-title">
              How to Change Video Speed Online in 3 Steps
            </h2>
            <p className="vsc-section-desc">
              No editing experience required. Upload → Adjust → Download in under 3 minutes.
            </p>

            <div className="vsc-steps">
              {[
                {
                  n: '01',
                  icon: '⬆️',
                  title: 'Upload Your Video',
                  desc: 'Drag & drop or browse to upload MP4, MOV, AVI, MKV, or WebM. Files up to 500 MB supported.',
                },
                {
                  n: '02',
                  icon: '🎛️',
                  title: 'Pick Your Speed',
                  desc: 'Choose a preset — 0.5x slow-mo, 1.5x Reels speed, 4x timelapse — or dial any custom value from 0.5x to 15x.',
                },
                {
                  n: '03',
                  icon: '📥',
                  title: 'Download MP4',
                  desc: 'One click exports your speed-adjusted video as a high-quality MP4. Zero watermark. Full commercial rights.',
                },
              ].map((step) => (
                <motion.article
                  key={step.n}
                  className="vsc-step-card"
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="vsc-step-num">{step.n}</div>
                  <div className="vsc-step-icon">{step.icon}</div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </motion.article>
              ))}
            </div>

            <div className="vsc-cta-center">
              <a href={UTM_TOOL_URL} className="vsc-btn-primary">
                🚀 Start Changing Video Speed — Free
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SPEED PRESETS DEEP-DIVE ── */}
      <section className="vsc-section vsc-presets-section" id="speed-presets" aria-labelledby="vsc-presets-title">
        <div className="vsc-container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 id="vsc-presets-title" className="vsc-section-title">
              Choose the Right Video Speed for Every Use Case
            </h2>
            <p className="vsc-section-desc">
              From butter-smooth slow-motion to jaw-dropping time-lapse — every speed preset is crafted for a specific creative outcome.
            </p>

            <div className="vsc-presets-grid">
              {[
                {
                  speed: '0.5x',
                  name: 'Dramatic Slow-Motion',
                  emoji: '🐌',
                  best: 'Action shots, sports highlights, product reveals, emotional moments',
                  why: 'Creates cinematic weight. Viewers feel every millisecond — perfect for YouTube intros and Instagram hook shots.',
                  platforms: ['YouTube', 'Instagram Reels', 'TikTok'],
                },
                {
                  speed: '0.75x',
                  name: 'Cinematic Slow',
                  emoji: '🎥',
                  best: 'Dialogue scenes, nature beauty shots, fashion videos',
                  why: 'Subtle enough to feel natural yet adds elegance and gravitas to any shot without looking obviously slowed.',
                  platforms: ['YouTube', 'Vimeo', 'Instagram'],
                },
                {
                  speed: '1.25x – 1.5x',
                  name: 'Social Media Fast',
                  emoji: '⚡',
                  best: 'Tutorials, vlogs, getting-ready videos, daily content',
                  why: 'Cuts watch-time by 20–33% while maintaining comprehension — ideal for platform algorithm retention scores.',
                  platforms: ['TikTok', 'YouTube Shorts', 'Instagram Reels'],
                },
                {
                  speed: '2x',
                  name: 'Learning Mode',
                  emoji: '🎓',
                  best: 'Lecture recordings, educational courses, walkthroughs',
                  why: 'Research shows 2x is the sweet spot for information retention vs time saved in educational video content.',
                  platforms: ['YouTube', 'Course platforms', 'Webinars'],
                },
                {
                  speed: '4x – 8x',
                  name: 'Timelapse',
                  emoji: '🚀',
                  best: 'Cooking, art creation, construction progress, workout montages',
                  why: 'Compresses 30–60 minutes of process into under 10 seconds — the ultimate storytelling compression tool.',
                  platforms: ['YouTube', 'Instagram', 'Facebook'],
                },
                {
                  speed: '10x – 15x',
                  name: 'Extreme Timelapse',
                  emoji: '💨',
                  best: 'Sunrises, cloud movement, city traffic, plant growth',
                  why: 'Reveals invisible patterns in the world. Hours of footage becomes a mesmerizing few-second clip that drives shares.',
                  platforms: ['YouTube', 'Twitter/X', 'Reddit'],
                },
              ].map((preset) => (
                <motion.article
                  key={preset.speed}
                  className="vsc-preset-card"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 250 }}
                >
                  <div className="vsc-preset-card-header">
                    <span className="vsc-preset-card-emoji">{preset.emoji}</span>
                    <div>
                      <div className="vsc-preset-speed">{preset.speed}</div>
                      <div className="vsc-preset-name">{preset.name}</div>
                    </div>
                  </div>
                  <p className="vsc-preset-best"><strong>Best for:</strong> {preset.best}</p>
                  <p className="vsc-preset-why">{preset.why}</p>
                  <div className="vsc-preset-platforms">
                    {preset.platforms.map((pl) => (
                      <span key={pl} className="vsc-platform-tag">{pl}</span>
                    ))}
                  </div>
                  <a href={UTM_TOOL_URL} className="vsc-preset-try">
                    Try {preset.speed} Speed →
                  </a>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── USE CASES ── */}
      <section className="vsc-section vsc-usecases" id="use-cases" aria-labelledby="vsc-usecases-title">
        <div className="vsc-container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 id="vsc-usecases-title" className="vsc-section-title">
              Who Uses an Online Video Speed Changer?
            </h2>
            <p className="vsc-section-desc">
              From solo creators to enterprise marketing teams — speed control is one of the most universally powerful video editing techniques.
            </p>

            <div className="vsc-usecase-grid">
              {[
                {
                  icon: '📱',
                  title: 'Social Media Creators',
                  desc: "Boost TikTok and Instagram Reels engagement with 1.5x speed sequences that match platform's native fast-paced viewing patterns. Slow-mo hooks in the first 3 seconds increase retention by up to 40%.",
                  stat: '40% more retention',
                },
                {
                  icon: '🎬',
                  title: 'Indie Filmmakers',
                  desc: 'Add professional slow-motion effects without a $3,000 high-fps camera. Export 0.5x footage with maintained quality for festival submissions, short films, and client commercials.',
                  stat: '$0 extra equipment cost',
                },
                {
                  icon: '🏋️',
                  title: 'Fitness & Sports Coaches',
                  desc: 'Slow down technique demonstrations to 0.5x for granular form analysis. Speed up full workouts to 4x for motivational overview reels. Used by over 2,000 coaches on Scenith.',
                  stat: '2,000+ coaches trust Scenith',
                },
                {
                  icon: '🎓',
                  title: 'Educators & Course Creators',
                  desc: "Speed up lengthy lecture recordings to 1.5x–2x to improve course completion rates. Students watching at 1.5x show equivalent comprehension to 1x viewers — and finish 33% faster.",
                  stat: '33% faster course completion',
                },
                {
                  icon: '💼',
                  title: 'Marketing & Brand Teams',
                  desc: 'Transform raw footage into polished product reveal slow-mos or snappy 15-second ads. Speed adjustment is the cheapest way to add production value without a re-shoot.',
                  stat: 'Save $50–200/video in editing fees',
                },
                {
                  icon: '🏗️',
                  title: 'Architects & Construction',
                  desc: 'Compile weeks of site progress footage into a powerful 30-second timelapse at 8x–15x. Perfect for client reports, social proof, and LinkedIn content that drives leads.',
                  stat: 'Hours of footage → 30 seconds',
                },
              ].map((uc) => (
                <motion.article
                  key={uc.title}
                  className="vsc-usecase-card"
                  whileHover={{ y: -4 }}
                >
                  <div className="vsc-usecase-icon">{uc.icon}</div>
                  <h3>{uc.title}</h3>
                  <p>{uc.desc}</p>
                  <div className="vsc-usecase-stat">{uc.stat}</div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── COMPARISON ── */}
      <section className="vsc-section vsc-comparison" id="comparison" aria-labelledby="vsc-comp-title">
        <div className="vsc-container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 id="vsc-comp-title" className="vsc-section-title">
              Scenith vs Other Online Video Speed Changers
            </h2>
            <p className="vsc-section-desc">
              Most free online tools cap speed at 2x, slap watermarks on your video, or hide export behind a paywall. Here's how Scenith compares.
            </p>

            <div className="vsc-table-wrap">
              <table className="vsc-table" role="table">
                <thead>
                  <tr>
                    <th scope="col">Feature</th>
                    <th scope="col" className="vsc-col-scenith">Scenith ✅</th>
                    <th scope="col">Other Free Tools</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_ROWS.map((row) => (
                    <tr key={row.feature}>
                      <td><strong>{row.feature}</strong></td>
                      <td className="vsc-col-scenith">{row.scenith}</td>
                      <td>{row.others}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="vsc-cta-center" style={{ marginTop: '2.5rem' }}>
              <a href={UTM_TOOL_URL} className="vsc-btn-primary">
                🎬 Try Scenith Free — No Watermark
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="vsc-section vsc-features" id="features" aria-labelledby="vsc-feat-title">
        <div className="vsc-container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 id="vsc-feat-title" className="vsc-section-title">
              Why Scenith is the Best Free Video Speed Changer Online
            </h2>
            <p className="vsc-section-desc">
              Purpose-built for creators who need professional speed control without the professional price tag.
            </p>

            <div className="vsc-features-grid">
              {[
                {
                  icon: '⚡',
                  title: 'GPU-Accelerated Processing',
                  desc: 'Server-side GPU rendering completes speed adjustments 5–10x faster than browser-based tools. A 5-minute video is done in under 3 minutes.',
                },
                {
                  icon: '🎚️',
                  title: '0.5x to 15x Full Range',
                  desc: 'Industry-leading speed range covers every creative need — from ultra-smooth slow-mo to extreme time-lapse. Most competitors stop at 2x.',
                },
                {
                  icon: '🔊',
                  title: 'Automatic Audio Pitch Correction',
                  desc: 'No chipmunk voices at 2x or muffled audio at 0.5x. FFmpeg-powered pitch correction keeps audio natural at any playback speed.',
                },
                {
                  icon: '🎬',
                  title: 'All Major Formats Supported',
                  desc: 'Upload MP4, MOV, AVI, MKV, WebM, MPEG, or FLV. Output is always a universally compatible, high-quality MP4.',
                },
                {
                  icon: '🚫',
                  title: 'Zero Watermark, Always',
                  desc: 'No Scenith branding added to your video — ever. Free plan exports are 100% clean with full commercial use rights.',
                },
                {
                  icon: '📱',
                  title: 'Works on Every Device',
                  desc: 'Fully responsive browser tool works identically on iPhone, Android, tablet, MacBook, and Windows PC. No app required.',
                },
                {
                  icon: '🔒',
                  title: 'Secure Cloud Processing',
                  desc: 'Videos are processed on encrypted servers and auto-deleted after 24 hours. Your content is never shared or used for training.',
                },
                {
                  icon: '🎛️',
                  title: 'Smart Speed Presets',
                  desc: 'Eight creator-optimized presets (Slow-Mo, Cinematic, Reels Speed, Learning Mode, Timelapse, etc.) or set any custom value.',
                },
              ].map((feat) => (
                <motion.article
                  key={feat.title}
                  className="vsc-feature-card"
                  whileHover={{ scale: 1.04 }}
                >
                  <span className="vsc-feat-icon">{feat.icon}</span>
                  <h3>{feat.title}</h3>
                  <p>{feat.desc}</p>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── EDUCATIONAL DEEP DIVE ── */}
      <section className="vsc-section vsc-edu" id="what-is-video-speed-changer" aria-labelledby="vsc-edu-title">
        <div className="vsc-container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 id="vsc-edu-title" className="vsc-section-title">
              What is an Online Video Speed Changer and How Does It Work?
            </h2>

            <div className="vsc-edu-grid">
              <div className="vsc-edu-text">
                <p>
                  An <strong>online video speed changer</strong> is a browser-based tool that modifies the playback
                  rate of a video file — making it play faster or slower than its original recording speed —
                  without requiring you to install software on your device. Unlike simply adjusting playback
                  speed in a media player (which only affects how you watch the video), a proper speed changer
                  permanently re-encodes the output file at the new speed, ready for upload and sharing.
                </p>
                <p>
                  Under the hood, Scenith uses <strong>FFmpeg</strong>, the industry-standard open-source
                  multimedia framework trusted by YouTube, Netflix, and thousands of broadcast studios worldwide.
                  When you change a video&apos;s speed, FFmpeg&apos;s <code>setpts</code> video filter and{' '}
                  <code>atempo</code> audio filter work in tandem: video frames are either interpolated
                  (for slow-motion) or selectively removed (for fast-forward), while audio is pitch-corrected
                  to avoid the notorious &quot;chipmunk effect&quot; at high speeds or distorted bass at low speeds.
                </p>
                <p>
                  <strong>Slow motion (below 1x)</strong> works by spreading existing frames across a longer
                  timeline. For maximum smoothness, shooting at 60fps or 120fps before slowing to 0.5x gives
                  the best results — though Scenith&apos;s AI interpolation fills in missing frames even from
                  standard 30fps footage.
                </p>
                <p>
                  <strong>Fast-forward (above 1x)</strong> selectively drops frames according to a target
                  frame-rate formula, then re-encodes at the destination speed. At 4x, a 1-hour video becomes
                  a 15-minute highlight. At 15x, a full day compresses into under 6 minutes of watchable content.
                </p>
              </div>

              <div className="vsc-edu-stats">
                <div className="vsc-stat-card">
                  <div className="vsc-stat-num">0.5x–15x</div>
                  <div className="vsc-stat-label">Full Speed Range</div>
                </div>
                <div className="vsc-stat-card">
                  <div className="vsc-stat-num">&lt; 3 min</div>
                  <div className="vsc-stat-label">Average Processing</div>
                </div>
                <div className="vsc-stat-card">
                  <div className="vsc-stat-num">30K+</div>
                  <div className="vsc-stat-label">Active Users</div>
                </div>
                <div className="vsc-stat-card">
                  <div className="vsc-stat-num">500 MB</div>
                  <div className="vsc-stat-label">Max File Size (Free)</div>
                </div>
                <div className="vsc-stat-card">
                  <div className="vsc-stat-num">7</div>
                  <div className="vsc-stat-label">Formats Supported</div>
                </div>
                <div className="vsc-stat-card">
                  <div className="vsc-stat-num">4.8★</div>
                  <div className="vsc-stat-label">Average User Rating</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="vsc-section vsc-testimonials" id="reviews" aria-labelledby="vsc-rev-title">
        <div className="vsc-container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 id="vsc-rev-title" className="vsc-section-title">
              What Creators Say About Scenith Video Speed Changer
            </h2>

            <div className="vsc-testimonials-grid">
              {[
                {
                  name: 'Priya Mehta',
                  role: 'Instagram Reels Creator · 280K followers',
                  text: "I've tried 6 different online speed changers. Scenith is the only one that gives clean 0.5x slow-mo without a watermark for free. My Reels engagement doubled after I started using the 1.5x preset.",
                  stars: 5,
                },
                {
                  name: 'James Okafor',
                  role: 'Fitness Coach & YouTube Creator',
                  text: 'The 0.5x slow-motion is absolutely perfect for showing exercise technique. I used to pay a freelancer $40 per video to do this. Now it takes me 3 minutes on Scenith.',
                  stars: 5,
                },
                {
                  name: 'Sofia Reyes',
                  role: 'Architecture Firm Marketing Lead',
                  text: 'We create timelapse construction updates for clients using the 8x preset. The quality is indistinguishable from what our video agency charged us $300 per clip for. Remarkable.',
                  stars: 5,
                },
                {
                  name: 'Daniel Park',
                  role: 'Online Course Creator · Udemy Top Instructor',
                  text: 'I speed up my screen recording tutorials to 1.5x before uploading. Students love it — my course completion rate went from 34% to 61% after making this one change.',
                  stars: 5,
                },
                {
                  name: 'Aisha Okonkwo',
                  role: 'Wedding Videographer',
                  text: "The cinematic 0.75x preset gives ceremony footage that dreamy slow-feel without looking artificially slowed. Clients always ask how I achieved it. I just say 'post-processing'.",
                  stars: 5,
                },
                {
                  name: 'Tom Harrington',
                  role: 'TikTok Creator · 1.2M followers',
                  text: 'Fast and free. No watermark. I was literally about to pay for Premiere just to do speed ramps. Then I found Scenith. Saved myself $55/month.',
                  stars: 5,
                },
              ].map((t) => (
                <motion.blockquote
                  key={t.name}
                  className="vsc-testimonial"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="vsc-stars" aria-label={`${t.stars} out of 5 stars`}>
                    {'⭐'.repeat(t.stars)}
                  </div>
                  <p className="vsc-testi-text">&ldquo;{t.text}&rdquo;</p>
                  <cite className="vsc-testi-cite">
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </cite>
                </motion.blockquote>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="vsc-section vsc-faq" id="faq" aria-labelledby="vsc-faq-title">
        <div className="vsc-container vsc-container--narrow">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 id="vsc-faq-title" className="vsc-section-title">
              Frequently Asked Questions — Online Video Speed Changer
            </h2>

            <div className="vsc-faq-list" role="list">
              {FAQS.map((faq, i) => (
                <div
                  key={i}
                  className={`vsc-faq-item ${openFaq === i ? 'vsc-faq-open' : ''}`}
                  role="listitem"
                >
                  <button
                    className="vsc-faq-q"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    aria-controls={`faq-answer-${i}`}
                  >
                    <span>{faq.q}</span>
                    <span className="vsc-faq-chevron" aria-hidden="true">
                      {openFaq === i ? '▲' : '▼'}
                    </span>
                  </button>
                  <div
                    id={`faq-answer-${i}`}
                    className="vsc-faq-a"
                    hidden={openFaq !== i}
                  >
                    <p>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="vsc-section vsc-final-cta" id="get-started" aria-labelledby="vsc-final-title">
        <div className="vsc-container">
          <motion.div
            className="vsc-final-cta-inner"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 id="vsc-final-title">
              Ready to Change Your Video Speed Online?
            </h2>
            <p>
              Join <strong>30,000+ creators</strong> who use Scenith to speed up, slow down, and transform
              their videos — completely free, no watermark, no software install.
            </p>

            <motion.a
              href={UTM_TOOL_URL}
              className="vsc-main-cta vsc-main-cta--large"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              aria-label="Open free video speed changer tool"
            >
              <span className="vsc-cta-icon">🎬</span>
              <span className="vsc-cta-text">
                <strong>Change Video Speed Now — 100% Free</strong>
                <small>MP4 export · No watermark · Works on any device</small>
              </span>
              <span className="vsc-cta-arrow">→</span>
            </motion.a>

            <div className="vsc-final-badges">
              <span>✅ No watermark</span>
              <span>✅ No software download</span>
              <span>✅ Commercial rights included</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── INTERNAL LINKS ── */}
      <nav className="vsc-internal-links" aria-label="Related tools">
        <div className="vsc-container">
          <h3 className="vsc-internal-title">Explore More Free AI Video Tools</h3>
          <div className="vsc-internal-grid">
            <Link href="/tools/video-speed-modifier" className="vsc-internal-card">
              <span>⚡</span>
              <div>
                <strong>Video Speed Modifier</strong>
                <span>Precision speed control up to 15x</span>
              </div>
            </Link>
            <Link href="/tools" className="vsc-internal-card">
              <span>🧰</span>
              <div>
                <strong>All AI Video Tools</strong>
                <span>Speed, subtitles, voice & more</span>
              </div>
            </Link>
            <Link href="/pricing" className="vsc-internal-card">
              <span>🚀</span>
              <div>
                <strong>Upgrade to Creator</strong>
                <span>45 videos/mo · Up to 2K quality</span>
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}