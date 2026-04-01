"use client";

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './AutoSubtitleGenerator.css';

const TOOL_URL =
  'https://scenith.in/tools/add-subtitles-to-videos?utm_source=auto-subtitle-generator&utm_medium=internal_cta&utm_campaign=seo_landing_2026&utm_content=hero_cta';

const TOOL_URL_SECONDARY =
  'https://scenith.in/tools/add-subtitles-to-videos?utm_source=auto-subtitle-generator&utm_medium=internal_cta&utm_campaign=seo_landing_2026&utm_content=secondary_cta';

// ─── Animated counter ────────────────────────────────────────────────────────
function AnimatedCounter({ target, suffix = '', prefix = '' }: { target: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="asg-counter-value">
      {prefix}{count.toLocaleString()}{suffix}
    </div>
  );
}

// ─── Accordion FAQ ────────────────────────────────────────────────────────────
function Accordion({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`asg-accordion ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
      <div className="asg-accordion-q">
        <span>{question}</span>
        <span className="asg-accordion-icon">{open ? '−' : '+'}</span>
      </div>
      {open && <div className="asg-accordion-a">{answer}</div>}
    </div>
  );
}

// ─── Main CTA Button ──────────────────────────────────────────────────────────
function HeroCTA({ label = 'Generate Subtitles Automatically — Free', secondary = false }: { label?: string; secondary?: boolean }) {
  return (
    <a href={secondary ? TOOL_URL_SECONDARY : TOOL_URL} className="asg-cta-btn">
      <span className="asg-cta-icon">⚡</span>
      {label}
      <span className="asg-cta-arrow">→</span>
    </a>
  );
}

// ─── Page Component ───────────────────────────────────────────────────────────
export default function AutoSubtitleClient() {
  const [activeTab, setActiveTab] = useState<'creators' | 'educators' | 'businesses' | 'filmmakers'>('creators');

  const tabContent = {
    creators: {
      icon: '🎥',
      title: 'For Social Media Creators',
      body: `85% of social media videos are watched without sound. If your Instagram Reels, TikToks, and YouTube Shorts don't have captions, you're losing engagement before viewers even hear your voice. Auto subtitle generation lets you caption every video in under 2 minutes — no outsourcing, no manual typing, no delays. The result? Higher watch time, better algorithm signals, and a wider reach including non-native speakers and hearing-impaired viewers. Creators who caption consistently report 30–80% higher retention rates across all platforms.`,
      stats: ['80% higher retention', '3× more shares on silent feed', '47% more comments'],
    },
    educators: {
      icon: '📚',
      title: 'For Educators & Course Creators',
      body: `Captioned lectures improve student comprehension by 40%. Whether you're publishing on Udemy, Teachable, or YouTube, auto subtitles make your content accessible, compliant with ADA/WCAG standards, and significantly more effective for learners worldwide. Students who struggle with accents, processing speed, or English as a second language benefit enormously. Auto-generated subtitles take 60 seconds versus hours of manual work — freeing you to focus on curriculum, not transcription. Plus, subtitle text gives search engines more content to index, dramatically improving discoverability of your course videos.`,
      stats: ['40% better comprehension', 'ADA & WCAG compliant', '2× more searchable'],
    },
    businesses: {
      icon: '💼',
      title: 'For Businesses & Marketers',
      body: `Product demos, explainer videos, and brand content require professional captions. Research shows captioned video ads have 26% more completions. For internal communications — town halls, training, announcements — subtitles ensure employees in loud environments or with hearing differences receive your message clearly. Auto subtitle generators replace expensive transcription services ($1–3 per minute) with instant, free AI-powered captions. For enterprise video marketing, this means hundreds of thousands saved annually while improving accessibility compliance.`,
      stats: ['26% more ad completions', '$0 vs $300/hr transcription', 'Global audience reach'],
    },
    filmmakers: {
      icon: '🎬',
      title: 'For Filmmakers & Video Producers',
      body: `Indie films, documentaries, and web series need professional subtitle styling that matches their visual identity. Auto subtitle generation gives you an accurate draft in seconds — then a full styling suite lets you customize fonts, colors, positions, backgrounds, and more. No more outsourcing to subtitle studios. No more waiting 3 business days for a draft. Generate, style, and export production-quality captions directly from your browser. For festival submissions or streaming platform delivery, burned-in subtitles ensure your film displays correctly everywhere, on every device.`,
      stats: ['Production-quality output', 'Custom font & color styling', 'Festival-ready export'],
    },
  };

  const active = tabContent[activeTab];

  return (
    <div className="asg-page">

      {/* ── Breadcrumb ── */}
      <nav className="asg-breadcrumb" aria-label="Breadcrumb">
        <ol itemScope itemType="https://schema.org/BreadcrumbList">
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <a href="/" itemProp="item"><span itemProp="name">Home</span></a>
            <meta itemProp="position" content="1" />
          </li>
          <span className="asg-bc-sep">›</span>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <a href="/tools" itemProp="item"><span itemProp="name">Tools</span></a>
            <meta itemProp="position" content="2" />
          </li>
          <span className="asg-bc-sep">›</span>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="name">Auto Subtitle Generator</span>
            <meta itemProp="position" content="3" />
          </li>
        </ol>
      </nav>

      {/* ── HERO ── */}
      <section className="asg-hero" id="hero" aria-labelledby="hero-heading">
        <div className="asg-hero-bg">
          <div className="asg-orb asg-orb-1" />
          <div className="asg-orb asg-orb-2" />
          <div className="asg-orb asg-orb-3" />
          <div className="asg-grid-lines" aria-hidden="true" />
        </div>

        <div className="asg-hero-content">
          <div className="asg-hero-badge">
            <span className="asg-badge-dot" />
            Powered by Whisper AI · 97% Accuracy
          </div>

          <h1 className="asg-hero-h1" id="hero-heading">
            Auto Subtitle Generator
            <span className="asg-hero-accent"> — Automatic Captions</span>
            <br />
            for Any Video in 60 Seconds
          </h1>

          <p className="asg-hero-subtext">
            The fastest way to add professional, AI-generated subtitles to your videos in 2026.
            No software. No manual typing. No waiting days. Just upload, click, and download
            a perfectly captioned MP4. Supports <strong>50+ languages</strong> with
            near-human transcription accuracy.
          </p>

          <div className="asg-hero-cta-wrap">
            <HeroCTA />
            <p className="asg-cta-note">Free · No account required to preview · No watermarks</p>
          </div>

          <div className="asg-hero-trust-row">
            <span className="asg-trust-chip">✅ 100% Free</span>
            <span className="asg-trust-chip">🌐 50+ Languages</span>
            <span className="asg-trust-chip">⚡ 60-Second Processing</span>
            <span className="asg-trust-chip">🔒 No data sold</span>
            <span className="asg-trust-chip">📥 Instant MP4 Download</span>
          </div>
        </div>

        {/* Floating preview card */}
        <div className="asg-hero-visual" aria-hidden="true">
          <div className="asg-preview-card">
            <div className="asg-preview-topbar">
              <span className="asg-dot red" />
              <span className="asg-dot yellow" />
              <span className="asg-dot green" />
              <span className="asg-preview-label">Auto Subtitle Generator</span>
            </div>
            <div className="asg-preview-screen">
              <div className="asg-preview-video-mock">
                <div className="asg-preview-play">▶</div>
                <div className="asg-preview-waveform">
                  {[40, 70, 55, 90, 45, 80, 60, 75, 50, 85, 65, 40, 95, 55, 70].map((h, i) => (
                    <span key={i} className="asg-wbar" style={{ height: `${h}%`, animationDelay: `${i * 0.08}s` }} />
                  ))}
                </div>
                <div className="asg-preview-subtitle-chip">
                  "Automatic subtitles, powered by AI."
                </div>
              </div>
              <div className="asg-preview-progress">
                <div className="asg-preview-progress-fill" />
              </div>
              <div className="asg-preview-status">
                <span className="asg-status-dot" />
                Transcribing audio…
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DEFINITION SNIPPET ── */}
      <section className="asg-definition" role="region" aria-labelledby="def-title">
        <div className="asg-container">
          <div className="asg-definition-box">
            <span className="asg-def-tag">QUICK DEFINITION</span>
            <h2 id="def-title" className="asg-def-h2">What is an Auto Subtitle Generator?</h2>
            <p className="asg-def-text">
              An <strong>auto subtitle generator</strong> is an AI-powered tool that listens to the spoken audio in
              your video and automatically writes, time-stamps, and formats captions — without any manual transcription.
              Unlike traditional captioning that requires hours of human effort, modern auto subtitle generators
              powered by deep learning models like <strong>OpenAI Whisper</strong> can process a 5-minute video
              in under 2 minutes with up to <strong>97% word accuracy</strong>. The output is editable,
              stylable, and can be burned directly into any MP4 video for universal playback.
            </p>
          </div>
        </div>
      </section>

      {/* ── STATS ROW ── */}
      <section className="asg-stats-section" aria-label="Key statistics">
        <div className="asg-container">
          <div className="asg-stats-grid">
            <div className="asg-stat-card">
              <AnimatedCounter target={97} suffix="%" />
              <div className="asg-stat-label">Transcription Accuracy</div>
              <div className="asg-stat-sub">Whisper AI, clear audio</div>
            </div>
            <div className="asg-stat-card">
              <AnimatedCounter target={60} suffix="s" />
              <div className="asg-stat-label">Average Processing Time</div>
              <div className="asg-stat-sub">For videos under 5 min</div>
            </div>
            <div className="asg-stat-card">
              <AnimatedCounter target={50} suffix="+" />
              <div className="asg-stat-label">Languages Supported</div>
              <div className="asg-stat-sub">Auto-detected from audio</div>
            </div>
            <div className="asg-stat-card">
              <AnimatedCounter target={1500} suffix="+" />
              <div className="asg-stat-label">Active Users</div>
              <div className="asg-stat-sub">And growing daily</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="asg-how" id="how-it-works" aria-labelledby="how-title">
        <div className="asg-container">
          <div className="asg-section-label">PROCESS</div>
          <h2 id="how-title" className="asg-section-h2">
            How Automatic Subtitle Generation Works — Step by Step
          </h2>
          <p className="asg-section-desc">
            Four steps. Under 2 minutes total. No special skills required.
          </p>

          <div className="asg-how-steps">
            {[
              {
                n: '01',
                icon: '📤',
                title: 'Upload Your Video',
                body: 'Drag and drop or browse to upload any video file — MP4, MOV, AVI, MKV, or WMV. Files are encrypted in transit and stored temporarily for processing only. No third party ever sees your content.',
              },
              {
                n: '02',
                icon: '🧠',
                title: 'AI Transcribes the Audio',
                body: 'Our Whisper AI model extracts the audio track and runs it through a neural network trained on 680,000+ hours of multilingual speech. Every word is time-stamped to the millisecond for perfect sync.',
              },
              {
                n: '03',
                icon: '✏️',
                title: 'Review & Style Subtitles',
                body: 'Browse the generated subtitles list. Click any line to edit text, adjust timing, or change the font, color, size, background, or position. Live preview updates instantly in the video player.',
              },
              {
                n: '04',
                icon: '📥',
                title: 'Process & Download MP4',
                body: 'Hit "Process Subtitles" and the engine burns your captions permanently into a new MP4. Download in your chosen quality — 720p to 4K depending on your plan. Upload anywhere. Done.',
              },
            ].map((step) => (
              <div className="asg-step" key={step.n}>
                <div className="asg-step-num">{step.n}</div>
                <div className="asg-step-body">
                  <div className="asg-step-icon">{step.icon}</div>
                  <h3 className="asg-step-title">{step.title}</h3>
                  <p className="asg-step-text">{step.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="asg-how-cta">
            <HeroCTA label="Try the Auto Subtitle Generator Now →" />
          </div>
        </div>
      </section>

      {/* ── AUDIENCE TABS ── */}
      <section className="asg-audience" id="use-cases" aria-labelledby="audience-title">
        <div className="asg-container">
          <div className="asg-section-label">WHO IS IT FOR?</div>
          <h2 id="audience-title" className="asg-section-h2">
            Auto Subtitle Generation for Every Creator Type
          </h2>
          <p className="asg-section-desc">
            Whether you publish on TikTok, teach online courses, or produce indie films — automatic captions
            are the single highest-ROI accessibility improvement you can make to your video content in 2026.
          </p>

          <div className="asg-tabs">
            {(['creators', 'educators', 'businesses', 'filmmakers'] as const).map((tab) => (
              <button
                key={tab}
                className={`asg-tab-btn ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
                aria-pressed={activeTab === tab}
              >
                {tabContent[tab].icon} {tabContent[tab].title.replace('For ', '')}
              </button>
            ))}
          </div>

          <div className="asg-tab-panel" role="tabpanel">
            <div className="asg-tab-content">
              <div className="asg-tab-text">
                <h3 className="asg-tab-h3">{active.title}</h3>
                <p>{active.body}</p>
                <div className="asg-tab-stats">
                  {active.stats.map((s) => (
                    <span className="asg-tab-stat-chip" key={s}>{s}</span>
                  ))}
                </div>
              </div>
              <div className="asg-tab-cta-box">
                <div className="asg-tab-cta-inner">
                  <span className="asg-tab-cta-label">Ready to caption your videos?</span>
                  <HeroCTA label="Open Auto Subtitle Generator →" secondary />
                  <span className="asg-tab-cta-note">Free • No card required</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TECH DEEP DIVE ── */}
      <section className="asg-tech" id="technology" aria-labelledby="tech-title">
        <div className="asg-container">
          <div className="asg-section-label">THE TECHNOLOGY</div>
          <h2 id="tech-title" className="asg-section-h2">
            What Makes Automatic Subtitle Generation 97% Accurate in 2026?
          </h2>
          <p className="asg-section-desc">
            Not all auto subtitle generators are equal. Here's the technology stack that separates
            professional-grade accuracy from janky, unusable output.
          </p>

          <div className="asg-tech-grid">
            <article className="asg-tech-card">
              <div className="asg-tech-icon">🎙️</div>
              <h3>OpenAI Whisper (v3)</h3>
              <p>
                Whisper is a transformer-based model trained on 680,000 hours of diverse audio. Unlike older ASR
                systems tuned on narrow datasets, Whisper generalizes across accents, background noise, multilingual
                code-switching, and technical vocabulary. Its encoder-decoder architecture produces not just text
                but precise word-level timestamps — critical for subtitle sync.
              </p>
              <ul>
                <li>680K hours of training data</li>
                <li>Word-level timestamp alignment</li>
                <li>Handles code-switching (e.g., Hinglish)</li>
                <li>Automatic language detection</li>
              </ul>
            </article>

            <article className="asg-tech-card">
              <div className="asg-tech-icon">⏱️</div>
              <h3>Forced Alignment Engine</h3>
              <p>
                Generating text is only half the job. The alignment engine maps each transcribed word back to
                its exact audio timestamp using cross-attention weights and dynamic time warping. This ensures
                subtitles appear and disappear at precisely the right moment — not 0.3 seconds late like
                lower-quality tools. Proper alignment is the difference between captions that feel native
                and ones that distract viewers.
              </p>
              <ul>
                <li>Millisecond-precision sync</li>
                <li>Dynamic time warping (DTW)</li>
                <li>Cross-attention timestamp extraction</li>
                <li>Automatic gap detection between speakers</li>
              </ul>
            </article>

            <article className="asg-tech-card">
              <div className="asg-tech-icon">📝</div>
              <h3>NLP Post-Processing</h3>
              <p>
                Raw Whisper output contains inaccurate punctuation and run-on sentences. Our NLP pipeline
                applies punctuation restoration, sentence boundary detection, and smart line-breaking rules
                (max 42 characters, max 2 lines per subtitle, semantic phrase grouping). The result is
                professional, readable captions — not a raw transcript dump.
              </p>
              <ul>
                <li>Automatic punctuation restoration</li>
                <li>Smart line-break rules (42-char limit)</li>
                <li>Semantic phrase grouping</li>
                <li>Profanity and sensitivity filters</li>
              </ul>
            </article>

            <article className="asg-tech-card">
              <div className="asg-tech-icon">🎨</div>
              <h3>GPU-Accelerated Rendering</h3>
              <p>
                When you hit "Process Subtitles", FFmpeg with GPU acceleration burns your styled captions
                directly into the video stream. Font rendering uses subpixel antialiasing for crisp text
                at all resolutions — from 480p social media clips to 4K cinematic exports. Output quality
                is configurable from 720p up to 4K depending on your subscription tier.
              </p>
              <ul>
                <li>FFmpeg GPU-accelerated encoding</li>
                <li>Subpixel font antialiasing</li>
                <li>720p to 4K output quality</li>
                <li>H.264/H.265 codec support</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* ── LANGUAGES ── */}
      <section className="asg-languages" id="languages" aria-labelledby="lang-title">
        <div className="asg-container">
          <div className="asg-section-label">MULTILINGUAL SUPPORT</div>
          <h2 id="lang-title" className="asg-section-h2">
            Auto-Generate Subtitles in 50+ Languages — Detected Automatically
          </h2>
          <p className="asg-section-desc">
            You don't have to specify the language. Whisper AI listens to your video and detects
            the language automatically. The following languages are supported with the highest accuracy:
          </p>

          <div className="asg-lang-grid">
            {[
              ['🇺🇸', 'English', '98%'],
              ['🇮🇳', 'Hindi', '96%'],
              ['🇪🇸', 'Spanish', '97%'],
              ['🇫🇷', 'French', '96%'],
              ['🇩🇪', 'German', '96%'],
              ['🇨🇳', 'Mandarin', '94%'],
              ['🇯🇵', 'Japanese', '95%'],
              ['🇰🇷', 'Korean', '95%'],
              ['🇧🇷', 'Portuguese', '97%'],
              ['🇸🇦', 'Arabic', '93%'],
              ['🇷🇺', 'Russian', '95%'],
              ['🇮🇩', 'Indonesian', '94%'],
              ['🇹🇷', 'Turkish', '94%'],
              ['🇻🇳', 'Vietnamese', '93%'],
              ['🇳🇱', 'Dutch', '95%'],
              ['🇮🇹', 'Italian', '96%'],
              ['🇵🇱', 'Polish', '93%'],
              ['🇺🇦', 'Ukrainian', '93%'],
              ['🇸🇪', 'Swedish', '95%'],
              ['🌍', '30+ More', '90%+'],
            ].map(([flag, lang, acc]) => (
              <div className="asg-lang-chip" key={lang}>
                <span className="asg-lang-flag">{flag}</span>
                <span className="asg-lang-name">{lang}</span>
                <span className="asg-lang-acc">{acc}</span>
              </div>
            ))}
          </div>

          <div className="asg-lang-note">
            <strong>💡 Pro tip:</strong> For regional languages like Tamil, Bengali, Marathi, Gujarati, or Punjabi,
            accuracy is between 88–93%. Manual review of technical terms is recommended, but the base transcript
            will save you 80%+ of transcription time regardless.
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section className="asg-compare" id="comparison" aria-labelledby="compare-title">
        <div className="asg-container">
          <div className="asg-section-label">COMPARISON</div>
          <h2 id="compare-title" className="asg-section-h2">
            Auto Subtitle Generator vs Manual Captioning vs Other Tools
          </h2>
          <p className="asg-section-desc">
            Here's why in 2026, AI-powered auto subtitle generation has become the default choice for 90% of video creators.
          </p>

          <div className="asg-compare-table-wrap">
            <table className="asg-compare-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th className="asg-col-highlight">Scenith Auto Subtitles</th>
                  <th>Manual Transcription</th>
                  <th>Other Free Tools</th>
                  <th>YouTube Auto-Captions</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Cost', 'Free', '$1–3/min', 'Free (with limits)', 'Free'],
                  ['Speed', '⚡ 60 seconds', '⏳ 3–5 days', '~5 min', '~10 min delay'],
                  ['Accuracy', '✅ 95–97%', '✅ 99%+', '⚠️ 70–85%', '⚠️ 75–85%'],
                  ['Custom Styling', '✅ Full control', '❌ None', '⚠️ Limited', '❌ None'],
                  ['Edit Subtitles', '✅ Real-time editor', '✅ Delivered as file', '⚠️ Basic', '⚠️ Platform only'],
                  ['Burn into MP4', '✅ Included', '❌ Extra cost', '⚠️ Varies', '❌ Not possible'],
                  ['Download MP4', '✅ Free', '❌ N/A', '⚠️ Watermark', '❌ N/A'],
                  ['50+ Languages', '✅ Auto-detected', '⚠️ Extra cost', '⚠️ 10–20 langs', '✅ Yes'],
                  ['No Watermark', '✅ On free plan', '✅ N/A', '❌ Free = watermark', '✅ N/A'],
                  ['Works on mobile', '✅ Fully responsive', '❌ N/A', '⚠️ Partial', '✅ Yes'],
                ].map(([feat, ...cols]) => (
                  <tr key={feat}>
                    <td><strong>{feat}</strong></td>
                    <td className="asg-col-highlight">{cols[0]}</td>
                    <td>{cols[1]}</td>
                    <td>{cols[2]}</td>
                    <td>{cols[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── WHY AUTO SUBTITLES MATTER IN 2026 ── */}
      <section className="asg-why2026" id="why-2026" aria-labelledby="why-title">
        <div className="asg-container">
          <div className="asg-section-label">2026 CONTEXT</div>
          <h2 id="why-title" className="asg-section-h2">
            Why Automatic Subtitles Are Non-Negotiable for Video in 2026
          </h2>

          <div className="asg-why-grid">
            <article className="asg-why-card">
              <div className="asg-why-icon">📱</div>
              <h3>The Silent Scroll Economy</h3>
              <p>
                In 2026, over <strong>92% of mobile video views</strong> happen in environments where
                sound is off by default — commutes, offices, restaurants, and bedrooms after midnight.
                Instagram, TikTok, Facebook, and LinkedIn all autoplay video silently. Without subtitles,
                your video is a moving wallpaper. Viewers tap away within 3 seconds. With captions,
                you communicate value before a single sound is heard.
              </p>
            </article>

            <article className="asg-why-card">
              <div className="asg-why-icon">⚖️</div>
              <h3>Accessibility Regulations Are Tightening</h3>
              <p>
                The <strong>EU Accessibility Act 2025</strong>, expanding ADA interpretations in the US,
                and India's Rights of Persons with Disabilities Act increasingly require digital video
                content to be captioned. Brands that fail to provide accessible video face growing
                legal exposure. Auto subtitle generators make compliance effortless — what once required
                a dedicated accessibility team now takes 60 seconds.
              </p>
            </article>

            <article className="asg-why-card">
              <div className="asg-why-icon">🔍</div>
              <h3>Video SEO Depends on Text</h3>
              <p>
                Search engines cannot watch videos. They index text. Burned-in subtitles don't directly
                help Google crawl your content — but <strong>closed caption files and video transcripts do</strong>.
                Videos with accurate subtitles see 7–15% improvements in organic search ranking because
                caption text provides keyword-rich content for search engines to index. The transcript
                is essentially free long-form SEO content generated automatically from your spoken words.
              </p>
            </article>

            <article className="asg-why-card">
              <div className="asg-why-icon">🌍</div>
              <h3>Multilingual Audiences Are Growing</h3>
              <p>
                The fastest-growing YouTube audience segments are in India, Indonesia, Brazil, and
                Southeast Asia — regions with high bilingual viewership. English-language creators who
                add auto-generated subtitles (or translate them) unlock dramatically larger audiences.
                Whisper AI's automatic language detection means a single workflow handles videos in any
                language without additional setup. Global reach is now a 2-minute task, not a 2-week project.
              </p>
            </article>

            <article className="asg-why-card">
              <div className="asg-why-icon">🧠</div>
              <h3>Attention Spans Keep Shrinking</h3>
              <p>
                Average human video attention span dropped from 12 seconds in 2000 to under 8 seconds
                in 2026. Subtitles fight this by <strong>dual-channel reinforcement</strong> — viewers
                read and hear simultaneously, creating deeper cognitive processing. Studies show dual-channel
                viewers retain 40% more information and watch 23% longer. For any content that needs
                to inform, persuade, or educate, subtitles are the highest-leverage engagement optimization
                available.
              </p>
            </article>

            <article className="asg-why-card">
              <div className="asg-why-icon">💰</div>
              <h3>The ROI Is Unmatched</h3>
              <p>
                Professional captioning services cost $1–3 per video minute and take 3–5 business days.
                A 30-video YouTube channel at 10 minutes each would cost <strong>$300–900 per batch</strong>
                with a human transcription service. Auto subtitle generation on Scenith costs $0 and
                processes all 30 videos in under an hour. The annual savings for a mid-sized creator or
                business run into thousands of dollars — all redirectable into better equipment, paid
                promotion, or content research.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ── SUBTITLE STYLING GUIDE ── */}
      <section className="asg-styling" id="styling-guide" aria-labelledby="styling-title">
        <div className="asg-container">
          <div className="asg-section-label">DESIGN GUIDE</div>
          <h2 id="styling-title" className="asg-section-h2">
            The 2026 Guide to Perfect Subtitle Styling
          </h2>
          <p className="asg-section-desc">
            Auto-generating subtitles is step one. Making them look professional is what separates viral
            content from amateur output. Here are the principles used by top creators worldwide.
          </p>

          <div className="asg-style-guide-grid">
            <div className="asg-style-section">
              <h3>🔤 Typography That Works at Every Size</h3>
              <div className="asg-style-rules">
                <div className="asg-rule">
                  <span className="asg-rule-label">Best fonts for subtitles</span>
                  <span className="asg-rule-val">Roboto Bold, Montserrat, Bebas Neue, Anton, Arial Bold</span>
                </div>
                <div className="asg-rule">
                  <span className="asg-rule-label">Minimum font size</span>
                  <span className="asg-rule-val">20px on mobile, 28px on desktop/TV</span>
                </div>
                <div className="asg-rule">
                  <span className="asg-rule-label">Font weight</span>
                  <span className="asg-rule-val">700 (Bold) or 800 (ExtraBold) — never Regular</span>
                </div>
                <div className="asg-rule">
                  <span className="asg-rule-label">Letter spacing</span>
                  <span className="asg-rule-val">0.02em for body, 0.1em for impactful single-word captions</span>
                </div>
                <div className="asg-rule">
                  <span className="asg-rule-label">Avoid</span>
                  <span className="asg-rule-val">Script fonts, thin weights, all-caps for long lines</span>
                </div>
              </div>
            </div>

            <div className="asg-style-section">
              <h3>🎨 Color Combinations That Pop</h3>
              <div className="asg-color-swatches">
                {[
                  { bg: '#FFFFFF', text: '#000000', stroke: 'none', label: 'Classic White / Black stroke' },
                  { bg: '#FFFF00', text: '#000000', stroke: 'none', label: 'Film Yellow — cinema standard' },
                  { bg: '#FFFFFF', text: '#1A1A2E', stroke: '#6366F1 outline', label: 'Modern White / Purple glow' },
                  { bg: 'rgba(0,0,0,0.7)', text: '#FFFFFF', stroke: 'bg box', label: 'Dark box — social media' },
                  { bg: 'linear-gradient', text: '#FFFFFF', stroke: 'gradient bg', label: 'Gradient box — 2026 trend' },
                ].map((c) => (
                  <div className="asg-swatch" key={c.label}>
                    <div
                      className="asg-swatch-preview"
                      style={{
                        background: c.bg.startsWith('rgba') ? c.bg : c.bg.startsWith('linear') ? 'linear-gradient(90deg, #6366F1, #EC4899)' : c.bg,
                        color: c.text,
                        fontWeight: 700,
                        fontSize: '13px',
                      }}
                    >
                      Sample Text
                    </div>
                    <span className="asg-swatch-label">{c.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="asg-style-section">
              <h3>📐 Positioning Best Practices</h3>
              <div className="asg-style-rules">
                <div className="asg-rule">
                  <span className="asg-rule-label">Standard position</span>
                  <span className="asg-rule-val">Bottom center, 10% margin from edges</span>
                </div>
                <div className="asg-rule">
                  <span className="asg-rule-label">TikTok / Reels</span>
                  <span className="asg-rule-val">Center screen — avoids UI overlap top/bottom</span>
                </div>
                <div className="asg-rule">
                  <span className="asg-rule-label">Documentary</span>
                  <span className="asg-rule-val">Bottom ⅓, full width, 2-line max</span>
                </div>
                <div className="asg-rule">
                  <span className="asg-rule-label">Speaker identification</span>
                  <span className="asg-rule-val">Top vs bottom positioning per speaker</span>
                </div>
                <div className="asg-rule">
                  <span className="asg-rule-label">Safe area</span>
                  <span className="asg-rule-val">Always stay 5–10% from all edges for TV/mobile safe zones</span>
                </div>
              </div>
            </div>

            <div className="asg-style-section">
              <h3>⏱️ Timing Rules for Maximum Readability</h3>
              <div className="asg-style-rules">
                <div className="asg-rule">
                  <span className="asg-rule-label">Minimum display time</span>
                  <span className="asg-rule-val">1.0 second (even for short words)</span>
                </div>
                <div className="asg-rule">
                  <span className="asg-rule-label">Maximum display time</span>
                  <span className="asg-rule-val">7 seconds before breaking into new subtitle</span>
                </div>
                <div className="asg-rule">
                  <span className="asg-rule-label">Reading speed</span>
                  <span className="asg-rule-val">17 CPS (chars/sec) for general audiences</span>
                </div>
                <div className="asg-rule">
                  <span className="asg-rule-label">Gap between subtitles</span>
                  <span className="asg-rule-val">Minimum 2 frames (0.08s) to signal new segment</span>
                </div>
                <div className="asg-rule">
                  <span className="asg-rule-label">Max characters per line</span>
                  <span className="asg-rule-val">42 characters — Netflix & BBC standard</span>
                </div>
              </div>
            </div>
          </div>

          <div className="asg-style-cta">
            <p>Apply all these best practices directly in Scenith's subtitle editor — all tools are built in.</p>
            <HeroCTA label="Open the Subtitle Style Editor →" secondary />
          </div>
        </div>
      </section>

      {/* ── PLATFORM GUIDE ── */}
      <section className="asg-platforms" id="platforms" aria-labelledby="platform-title">
        <div className="asg-container">
          <div className="asg-section-label">PLATFORM GUIDE</div>
          <h2 id="platform-title" className="asg-section-h2">
            Subtitle Requirements by Platform: Instagram, YouTube, TikTok & More
          </h2>

          <div className="asg-platform-cards">
            {[
              {
                icon: '▶️',
                name: 'YouTube',
                specs: ['1920×1080 or 3840×2160', 'H.264 codec preferred', 'Max 12 hours / 256GB', 'SRT or burned-in both work'],
                tip: 'Upload burned-in MP4 for Shorts. For long-form, also upload an SRT file for better SEO and multi-language support.',
                color: '#FF0000',
              },
              {
                icon: '📸',
                name: 'Instagram Reels',
                specs: ['1080×1920 (9:16)', 'MP4, H.264', 'Max 90 seconds', 'Burned-in captions required'],
                tip: 'Instagrams auto-captions are inaccurate. Use Scenith for burned-in captions that display perfectly even when the platform captions are off.',
                color: '#E1306C',
              },
              {
                icon: '🎵',
                name: 'TikTok',
                specs: ['1080×1920 (9:16)', 'MP4 or MOV', 'Max 10 minutes', 'Center-screen captions preferred'],
                tip: 'TikToks native captions miss 30–40% of speech. Burned-in captions with center positioning outperform platform auto-captions by a wide margin.',
                color: '#69C9D0',
              },
              {
                icon: '💼',
                name: 'LinkedIn',
                specs: ['1920×1080 or 1:1', 'MP4 only', 'Max 10 minutes / 5GB', 'SRT upload supported'],
                tip: 'LinkedIn feeds are predominantly sound-off. Captions are critical. B2B video content with subtitles gets 53% more engagement on LinkedIn.',
                color: '#0A66C2',
              },
              {
                icon: '📘',
                name: 'Facebook',
                specs: ['1280×720 minimum', 'MP4 or MOV', 'Max 240 minutes', 'SRT supported'],
                tip: 'Facebook autoplay is silent. Subtitles in the first 3 seconds determine whether a viewer stops scrolling. Lead with impactful captioned text.',
                color: '#1877F2',
              },
              {
                icon: '📚',
                name: 'Udemy / Coursera',
                specs: ['1280×720 minimum', 'MP4 recommended', 'SRT file required', 'Multiple language tracks'],
                tip: 'Online course platforms require separate SRT files for accessibility. Generate your subtitles in Scenith, then export — SRT support coming soon.',
                color: '#A435F0',
              },
            ].map((p) => (
              <article className="asg-platform-card" key={p.name}>
                <div className="asg-platform-header" style={{ borderColor: p.color }}>
                  <span className="asg-platform-icon">{p.icon}</span>
                  <h3 className="asg-platform-name">{p.name}</h3>
                </div>
                <ul className="asg-platform-specs">
                  {p.specs.map((s) => <li key={s}>{s}</li>)}
                </ul>
                <div className="asg-platform-tip">
                  <span className="asg-tip-label">💡 Pro Tip</span>
                  <p>{p.tip}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="asg-testimonials" id="reviews" aria-labelledby="reviews-title">
        <div className="asg-container">
          <div className="asg-section-label">SOCIAL PROOF</div>
          <h2 id="reviews-title" className="asg-section-h2">
            What Creators Say About Auto Subtitle Generation
          </h2>

          <div className="asg-testimonials-grid">
            {[
              {
                text: `"I was spending 4 hours every week on manual captioning. Now Scenith's auto subtitle generator does it in 90 seconds and the accuracy is honestly better than what I was producing manually. This tool changed my workflow completely."`,
                name: 'Priya Sharma',
                role: 'YouTube Educator · 240K Subscribers',
                stars: 5,
              },
              {
                text: `"As a non-native English speaker running an English-language channel, I was terrified my captions would look unprofessional. Scenith's Whisper-powered auto subtitles are more accurate than services charging $2/minute. Wild."`,
                name: 'Carlos Mendes',
                role: 'Tech Creator · São Paulo',
                stars: 5,
              },
              {
                text: `"Our corporate training videos legally needed captions. Every tool I tried had watermarks or was subscription-only. Scenith is free, has full customization, and I could set the exact font and colors matching our brand standards."`,
                name: 'Anjali Mehta',
                role: 'L&D Manager · Mumbai',
                stars: 5,
              },
              {
                text: `"I tried three other auto subtitle generators before Scenith. They got maybe 70% accuracy on my content which is heavy on Hindi and English code-switching. Scenith hits 90%+. For multilingual creators, this is the best option."`,
                name: 'Rohan Verma',
                role: 'Hinglish Content Creator · 1.2M Followers',
                stars: 5,
              },
              {
                text: `"For my indie documentary, I needed professional-looking subtitles without the $800 captioning quote I got from a studio. Scenith gave me broadcast-quality burned-in captions with full custom styling for free. Festival ready."`,
                name: 'Selin Arslan',
                role: 'Independent Filmmaker · Istanbul',
                stars: 5,
              },
              {
                text: `"The realtime preview is what gets me. I can see exactly how my subtitles will look on the video as I adjust the font size and color. No other free tool has this. It saves so many back-and-forth render cycles."`,
                name: 'James O\'Brien',
                role: 'Social Media Manager · Dublin',
                stars: 5,
              },
            ].map((t) => (
              <blockquote className="asg-testimonial" key={t.name}>
                <div className="asg-stars">{'⭐'.repeat(t.stars)}</div>
                <p className="asg-testimonial-text">{t.text}</p>
                <footer>
                  <strong className="asg-t-name">{t.name}</strong>
                  <span className="asg-t-role">{t.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXTENDED FAQ ── */}
      <section className="asg-faq" id="faq" aria-labelledby="faq-title">
        <div className="asg-container">
          <div className="asg-section-label">FAQ</div>
          <h2 id="faq-title" className="asg-section-h2">
            Frequently Asked Questions: Auto Subtitle Generator
          </h2>
          <p className="asg-section-desc">
            Everything you need to know about automatic subtitle generation, from accuracy to formats to pricing.
          </p>

          <div className="asg-faq-grid">
            {[
              {
                q: 'What is the difference between auto subtitles and manual captions?',
                a: 'Auto subtitles are generated by an AI speech recognition model — they require no human typing and are ready in minutes. Manual captions are typed by a human transcriptionist, offering higher accuracy (99%+) at a cost of $1–3 per minute and 3–5 day turnaround. For most creators, auto subtitles at 95–97% accuracy with 2-minute turnaround is the clear winner. The 2–5% of errors are typically quick to fix in an editor.',
              },
              {
                q: 'Does auto subtitle generation work for videos with music or background noise?',
                a: 'Whisper AI uses noise-cancellation preprocessing and handles moderate background music reasonably well. Heavy background noise (concerts, construction, overlapping speech) reduces accuracy. For best results, record in quiet environments or use a close-mic recording. If audio quality is poor, Scenith will still generate a usable draft — just plan for more manual review.',
              },
              {
                q: 'Can I auto-generate subtitles for a video that already has them burned in?',
                a: 'No. The auto subtitle generator works by transcribing the audio track. If your video already has burned-in (hardcoded) subtitles visually, the AI will transcribe the speech — not the existing text. You would then have two layers of subtitles, which is not ideal. Best practice is to auto-generate before any subtitles are burned in.',
              },
              {
                q: 'What video file formats does the auto subtitle generator support?',
                a: 'Scenith supports all major video formats: MP4, MOV, AVI, MKV, WMV, FLV, WebM, and more. The internal FFmpeg engine handles virtually any codec. If you have an unusual format that fails to upload, convert to MP4 H.264 first using HandBrake (free).',
              },
              {
                q: 'Will auto-generated subtitles hurt my SEO if they have errors?',
                a: 'Burned-in subtitles (what Scenith produces) are visual — search engines cannot read them from the video directly. They don\'t help or hurt SEO in themselves. However, if you separately upload a transcript or SRT file to YouTube, search engines index that text. Ensure your transcript/SRT is reviewed before publishing for SEO purposes. Errors in indexed text can send wrong keyword signals.',
              },
              {
                q: 'How many videos can I auto-subtitle for free?',
                a: 'Scenith\'s free plan allows video uploads under 1 minute with a limited monthly credit balance. Free plan subtitles generate without watermarks and download as full MP4. Paid plans (Creator, Studio) unlock longer videos, higher output quality, and larger credit balances for batch processing.',
              },
              {
                q: 'Is the auto subtitle generator safe for confidential content?',
                a: 'Yes. Videos are transmitted via HTTPS encryption, processed on isolated servers, and automatically deleted within 24–48 hours. Scenith does not use your video content for AI model training, advertising, or any third-party sharing. For highly sensitive corporate content, consider reviewing our privacy policy and data retention terms.',
              },
              {
                q: 'Can I auto-generate subtitles in a different language than the one spoken?',
                a: 'Currently, Scenith\'s auto subtitle generator transcribes in the language spoken in the video. Cross-language translation (e.g., transcribing English speech as Spanish subtitles) is a planned feature. For now, generate subtitles in the spoken language and use a translation tool separately to create multilingual versions.',
              },
              {
                q: 'Why are my auto-generated subtitles slightly out of sync?',
                a: 'Minor sync drift can occur for a few reasons: variable-frame-rate (VFR) video files, videos with embedded chapter markers, or audio tracks that start after a long visual intro. Fix by clicking the subtitle in the editor and manually adjusting the start/end timestamps. A ±0.2 second adjustment usually resolves drift completely.',
              },
              {
                q: 'Do auto subtitles work for podcasts converted to video?',
                a: 'Yes — podcast-to-video content is one of the highest-volume use cases for auto subtitle generators. A static or animated visual layer over an audio podcast becomes a fully captioned video ready for YouTube, Instagram, and LinkedIn. Long-form podcast content (60+ minutes) requires a paid plan.',
              },
            ].map((faq) => (
              <Accordion key={faq.q} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── GLOSSARY ── */}
      <section className="asg-glossary" id="glossary" aria-labelledby="glossary-title">
        <div className="asg-container">
          <div className="asg-section-label">GLOSSARY</div>
          <h2 id="glossary-title" className="asg-section-h2">
            Subtitle & Captioning Terminology Every Creator Should Know
          </h2>

          <div className="asg-glossary-grid">
            {[
              { term: 'ASR (Automatic Speech Recognition)', def: 'The AI technology that converts spoken audio into written text. The core engine behind any auto subtitle generator.' },
              { term: 'Burned-in Subtitles (Hardcoded)', def: 'Captions permanently rendered into the video pixels. Cannot be turned off by the viewer. Best for social media where platform caption support is unreliable.' },
              { term: 'Closed Captions (CC)', def: 'Subtitles stored as a separate text file (SRT, VTT) that viewers can toggle on/off. Required for YouTube, streaming platforms, and accessibility compliance.' },
              { term: 'SRT File', def: 'SubRip Subtitle format. A plain text file with subtitle text and timestamps. The most universal subtitle file format, supported by all major video platforms.' },
              { term: 'VTT File', def: 'Web Video Text Tracks. HTML5 web standard for subtitle files. Used by browsers, streaming players, and the Web Accessibility Initiative (WAI).' },
              { term: 'Whisper AI', def: 'OpenAI\'s open-source speech recognition model trained on 680,000 hours of audio. The current gold standard for auto subtitle generation accuracy.' },
              { term: 'CPS (Characters Per Second)', def: 'Reading speed metric for subtitles. Standard is 17 CPS for general audiences, 20 CPS for children\'s content, 21 CPS for adult drama.' },
              { term: 'SDH (Subtitles for the Deaf and Hard of Hearing)', def: 'Subtitles that include not just speech but also non-speech audio descriptions: [door slams], [music playing], [phone buzzing].' },
              { term: 'Timestamp', def: 'The in-and-out time codes for each subtitle segment. Format: HH:MM:SS,mmm --> HH:MM:SS,mmm in SRT. Precision to milliseconds.' },
              { term: 'VFR (Variable Frame Rate)', def: 'Video recorded at a non-constant frame rate. Common with screen recordings and some phones. Can cause subtitle sync drift if not processed correctly.' },
            ].map((g) => (
              <div className="asg-glossary-item" key={g.term}>
                <dt className="asg-glossary-term">{g.term}</dt>
                <dd className="asg-glossary-def">{g.def}</dd>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELATED TOOLS ── */}
      <section className="asg-related" aria-labelledby="related-title">
        <div className="asg-container">
          <div className="asg-section-label">EXPLORE MORE</div>
          <h2 id="related-title" className="asg-section-h2">Related Scenith Tools for Video Creators</h2>

          <div className="asg-related-grid">
            {[
              {
                icon: '🎤',
                title: 'AI Voice Generator',
                desc: 'Generate natural-sounding voiceovers for your videos from text. Perfect to pair with auto subtitles.',
                href: '/tools/ai-voice-generation',
              },
              {
                icon: '🖼️',
                title: 'Free Image Editor',
                desc: 'Design thumbnails, social media graphics, and video assets. All in browser.',
                href: '/tools/image-editing',
              },
              {
                icon: '🎬',
                title: 'Add Subtitles to Videos',
                desc: 'Full subtitle generation and editing suite. The tool this page links to — the complete experience.',
                href: '/tools/add-subtitles-to-videos',
              },
            ].map((r) => (
              <a href={r.href} className="asg-related-card" key={r.title}>
                <span className="asg-related-icon">{r.icon}</span>
                <h3 className="asg-related-title">{r.title}</h3>
                <p className="asg-related-desc">{r.desc}</p>
                <span className="asg-related-link">Try it free →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── MEGA CTA ── */}
      <section className="asg-mega-cta" id="get-started" aria-labelledby="megacta-title">
        <div className="asg-mega-cta-bg">
          <div className="asg-mega-orb-1" />
          <div className="asg-mega-orb-2" />
        </div>
        <div className="asg-container">
          <div className="asg-mega-cta-content">
            <span className="asg-mega-badge">🚀 Start for Free — No Credit Card</span>
            <h2 id="megacta-title" className="asg-mega-h2">
              Ready to Auto-Generate<br />
              <span className="asg-mega-accent">Subtitles in 60 Seconds?</span>
            </h2>
            <p className="asg-mega-sub">
              Join 1,500+ creators who caption every video automatically with Scenith.
              Free plan. No watermarks. No signup wall to try the tool.
            </p>
            <div className="asg-mega-cta-btns">
              <a href={TOOL_URL} className="asg-cta-btn asg-cta-btn--lg">
                <span>⚡</span>
                Open Auto Subtitle Generator — Free
                <span>→</span>
              </a>
              <a href="/pricing" className="asg-cta-btn-outline">
                See Pricing Plans
              </a>
            </div>
            <div className="asg-mega-trust">
              <span>✅ Free forever on short videos</span>
              <span>🌐 50+ languages</span>
              <span>📥 Download MP4 instantly</span>
              <span>🔒 Your data stays private</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}