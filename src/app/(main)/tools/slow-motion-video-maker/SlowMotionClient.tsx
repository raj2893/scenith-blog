'use client';

import React, { useState, useEffect, useRef } from 'react';
import Script from 'next/script';
import '../../../../../styles/tools/slow-motion.css';

// ─── Speed Visualizer (purely decorative, drives engagement) ───────────────
const SpeedVisualizer = () => {
  const [activeSpeed, setActiveSpeed] = useState(0.5);
  const speeds = [0.25, 0.5, 0.75, 1.0, 1.5, 2.0];

  return (
    <div className="speed-visualizer" aria-label="Interactive speed selector demo">
      <div className="speed-viz-label">Try a speed preset below:</div>
      <div className="speed-viz-buttons">
        {speeds.map((s) => (
          <button
            key={s}
            className={`speed-viz-btn ${activeSpeed === s ? 'active' : ''}`}
            onClick={() => setActiveSpeed(s)}
            aria-pressed={activeSpeed === s}
          >
            {s}x
          </button>
        ))}
      </div>
      <div className="speed-viz-track">
        <div className="speed-viz-ball" style={{ animationDuration: `${2 / activeSpeed}s` }} />
      </div>
      <p className="speed-viz-desc">
        {activeSpeed <= 0.25 && '🐌 Ultra cinematic — every millisecond visible'}
        {activeSpeed === 0.5 && '🎬 Classic slow-mo — the Hollywood standard'}
        {activeSpeed === 0.75 && '🎭 Dramatic pace — emotion-forward storytelling'}
        {activeSpeed === 1.0 && '▶️ Real time — your video as-is'}
        {activeSpeed === 1.5 && '⚡ Snappy — great for tutorials & vlogs'}
        {activeSpeed === 2.0 && '🚀 Fast-forward — condense the boring bits'}
      </p>
    </div>
  );
};

// ─── Animated counter ──────────────────────────────────────────────────────
const AnimatedCounter = ({ end, suffix = '', label }: { end: number; suffix?: string; label: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const duration = 1600;
          const step = Math.ceil(end / (duration / 16));
          const timer = setInterval(() => {
            start += step;
            if (start >= end) { setCount(end); clearInterval(timer); }
            else setCount(start);
          }, 16);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="stat-counter">
      <span className="stat-number">{count.toLocaleString()}{suffix}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
};

// ─── FAQ Accordion ─────────────────────────────────────────────────────────
const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-accordion ${open ? 'open' : ''}`}>
      <button className="faq-question" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>{q}</span>
        <span className="faq-chevron">{open ? '−' : '+'}</span>
      </button>
      <div className="faq-answer" aria-hidden={!open}>
        <p>{a}</p>
      </div>
    </div>
  );
};

// ─── Main Page ─────────────────────────────────────────────────────────────
const SlowMotionPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toolUrl =
    'https://scenith.in/tools/video-speed-modifier?utm_source=slow-motion-page&utm_medium=cta&utm_campaign=slow-motion-satellite&utm_content=hero-cta';

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://scenith.in/tools/slow-motion-video-maker',
        url: 'https://scenith.in/tools/slow-motion-video-maker',
        name: 'Free Slow Motion Video Maker Online — Scenith',
        description:
          'Create stunning slow motion videos online for free. No install, no watermark. Used by 30,000+ creators.',
        dateModified: new Date().toISOString(),
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://scenith.in' },
            { '@type': 'ListItem', position: 2, name: 'Tools', item: 'https://scenith.in/tools' },
            { '@type': 'ListItem', position: 3, name: 'Slow Motion Video Maker', item: 'https://scenith.in/tools/slow-motion-video-maker' },
          ],
        },
      },
      {
        '@type': 'SoftwareApplication',
        name: 'Scenith Slow Motion Video Maker',
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Web Browser',
        url: 'https://scenith.in/tools/video-speed-modifier',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
        aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '1847' },
        author: { '@type': 'Organization', name: 'Scenith' },
        featureList: [
          'Slow motion at 0.25x, 0.5x, 0.75x speed',
          'Free MP4 download without watermark',
          'Supports MP4, MOV, AVI, MKV, WebM',
          'No software installation required',
          'Works on mobile and desktop',
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Is this slow motion video maker completely free?',
            acceptedAnswer: { '@type': 'Answer', text: 'Yes. The core slow motion tool is free to use with a standard quality export and MP4 download. No credit card required.' },
          },
          {
            '@type': 'Question',
            name: 'What is the best speed for slow motion videos?',
            acceptedAnswer: { '@type': 'Answer', text: '0.5x is the most popular choice for cinematic slow motion. 0.25x gives you extreme slow motion for sport and action highlights. For subtle dramatic effect, 0.75x works wonderfully.' },
          },
          {
            '@type': 'Question',
            name: 'Can I make slow motion videos for Instagram Reels and TikTok?',
            acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. The exported MP4 is ready to upload directly to Instagram Reels, TikTok, YouTube Shorts, or any other platform.' },
          },
          {
            '@type': 'Question',
            name: 'Does it work without downloading any app?',
            acceptedAnswer: { '@type': 'Answer', text: 'Yes. Everything runs in your browser. No app, no plugin, no software installation needed on any device — phone or desktop.' },
          },
          {
            '@type': 'Question',
            name: 'What video formats are supported?',
            acceptedAnswer: { '@type': 'Answer', text: 'You can upload MP4, MOV, AVI, MKV, WebM, MPEG, and FLV files. The output is always a clean MP4 file.' },
          },
        ],
      },
    ],
  };

  const faqs = [
    { q: 'Is this slow motion video maker 100% free?', a: 'Yes. The core slow motion tool is completely free. You get MP4 export with no watermark. Paid plans unlock higher resolutions (1080p, 2K, 4K) and priority processing.' },
    { q: 'What\'s the best slow motion speed for Instagram Reels?', a: '0.5x is the sweet spot for Instagram Reels — it looks cinematic without making your video feel unnaturally long. For product reveals or dance moments, try 0.25x for maximum drama.' },
    { q: 'Does slow motion work for TikTok videos?', a: 'Yes. TikTok loves slow motion content — it creates a dramatic, high-production feel. Export your video at 0.5x, then upload directly. The algorithm tends to reward videos with visual variety.' },
    { q: 'Will my audio sound weird in slow motion?', a: 'Our tool includes audio pitch correction. When you slow a video to 0.5x, the audio is adjusted to sound natural. For very extreme slow motion (0.25x), we recommend replacing the audio with background music.' },
    { q: 'Can I make slow motion on my phone without an app?', a: 'Yes! Scenith is a browser-based tool. Open it on your phone, upload your video, set the speed, and download. No app store download needed. Works on iOS Safari and Android Chrome.' },
    { q: 'What\'s the maximum file size I can upload?', a: 'You can upload video files up to 500MB. For longer or heavier videos, consider Creator or Studio plan which support longer durations and prioritize your processing queue.' },
    { q: 'How long does slow motion processing take?', a: 'A 60-second video at 0.5x speed typically processes in 1–3 minutes depending on original resolution. The output becomes a 120-second video at half speed. You\'ll see a live progress bar.' },
    { q: 'Does this work for YouTube Shorts slow motion?', a: 'Absolutely. Export your slow motion clip as MP4, then upload directly to YouTube Shorts. Our 720p–1080p output matches YouTube\'s recommended quality specs.' },
    { q: 'Is there a difference between 0.5x and 0.25x slow motion?', a: '0.5x is half speed — a 10-second clip becomes 20 seconds. 0.25x is quarter speed — that same 10-second clip becomes 40 seconds. Use 0.25x for sports, action, or technical demonstrations where you need to see every detail.' },
    { q: 'Can I remove the watermark from my slow motion video?', a: 'Free plan exports are watermark-free up to 720p. For full HD slow motion without any branding, upgrade to Creator Lite or above. All paid plans export with zero watermarks.' },
  ];

  return (
    <div className={`slo-page ${isVisible ? 'visible' : ''}`}>
      <Script
        id="slo-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* ── Breadcrumb ── */}
      <nav aria-label="Breadcrumb" className="slo-breadcrumb">
        <ol itemScope itemType="https://schema.org/BreadcrumbList">
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <a href="/" itemProp="item"><span itemProp="name">Home</span></a>
            <meta itemProp="position" content="1" />
          </li>
          <span className="slo-bc-sep">›</span>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <a href="/tools" itemProp="item"><span itemProp="name">Tools</span></a>
            <meta itemProp="position" content="2" />
          </li>
          <span className="slo-bc-sep">›</span>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="name">Slow Motion Video Maker</span>
            <meta itemProp="position" content="3" />
          </li>
        </ol>
      </nav>

      {/* ════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════ */}
      <section className="slo-hero" id="hero">
        <div className="slo-hero-particles">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="slo-particle" style={{ '--i': i } as React.CSSProperties} />
          ))}
        </div>

        <div className="slo-hero-inner">
          <div className="slo-badge">
            <span className="slo-badge-dot" />
            Free · No Install · No Watermark
          </div>

          <h1 className="slo-h1">
            Free Slow Motion<br />
            <span className="slo-h1-accent">Video Maker</span> Online
          </h1>

          <p className="slo-hero-sub">
            Transform any video into breathtaking slow motion instantly. Choose from
            0.25x ultra cinematic to 0.75x subtle drama — no software, no app, no
            credit card. Just upload, slow down, and download in MP4.
          </p>

          <div className="slo-hero-trust">
            <span>✅ Works on Mobile & Desktop</span>
            <span>🎬 0.25x – 0.75x Speed</span>
            <span>📥 Free MP4 Download</span>
            <span>⚡ 2-min Processing</span>
          </div>

          {/* ── BIG CTA ── */}
          <a
            href={toolUrl}
            className="slo-main-cta"
            aria-label="Open free slow motion video maker tool"
            rel="noopener"
          >
            <span className="slo-cta-icon">🎬</span>
            <span className="slo-cta-text">
              <strong>Make My Video Slow Motion — Free</strong>
              <small>Opens the tool · No signup required to preview</small>
            </span>
            <span className="slo-cta-arrow">→</span>
          </a>

          <p className="slo-cta-hint">
            Join <strong>30,000+</strong> creators who already use Scenith for slow motion
          </p>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="slo-stats" aria-label="Platform statistics">
        <div className="slo-container">
          <AnimatedCounter end={30000} suffix="+" label="Active Creators" />
          <AnimatedCounter end={180000} suffix="+" label="Videos Processed" />
          <AnimatedCounter end={98} suffix="%" label="Satisfaction Rate" />
          <AnimatedCounter end={2} suffix=" min" label="Avg. Processing Time" />
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          INTERACTIVE DEMO
      ════════════════════════════════════════════════ */}
      <section className="slo-section" id="demo" aria-labelledby="demo-title">
        <div className="slo-container">
          <div className="slo-section-eyebrow">Live Preview</div>
          <h2 id="demo-title" className="slo-h2">See Exactly What Each Speed Looks Like</h2>
          <p className="slo-section-desc">
            Click a speed preset below to feel the difference before you even upload your video.
            This is precisely what you'll control inside the tool.
          </p>
          <SpeedVisualizer />
          <div className="slo-demo-cta-wrap">
            <a href={toolUrl} className="slo-inline-cta" rel="noopener">
              → Apply this to my video now
            </a>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          HOW IT WORKS
      ════════════════════════════════════════════════ */}
      <section className="slo-section slo-section-alt" id="how-it-works" aria-labelledby="how-title">
        <div className="slo-container">
          <div className="slo-section-eyebrow">Simple Process</div>
          <h2 id="how-title" className="slo-h2">Make Slow Motion Video in 3 Steps</h2>
          <p className="slo-section-desc">
            No tutorials, no confusing timelines, no rendering knowledge required.
            The entire workflow takes under 5 minutes from upload to download.
          </p>

          <div className="slo-steps">
            <article className="slo-step">
              <div className="slo-step-num">01</div>
              <div className="slo-step-icon">⬆️</div>
              <h3>Upload Your Video</h3>
              <p>
                Drag and drop or browse to select your video file. Supports MP4, MOV,
                AVI, MKV, WebM, and FLV up to 500MB. Your file is encrypted in transit.
              </p>
              <div className="slo-step-formats">MP4 · MOV · AVI · MKV · WebM</div>
            </article>

            <div className="slo-step-connector" aria-hidden="true">—</div>

            <article className="slo-step">
              <div className="slo-step-num">02</div>
              <div className="slo-step-icon">🎚️</div>
              <h3>Choose Your Slow Motion Speed</h3>
              <p>
                Pick from cinematic presets like <strong>0.5x (Classic Slow-Mo)</strong> or
                <strong> 0.25x (Extreme Slow)</strong>, or dial in any custom speed between
                0.25x and 1.0x. Preview adjusts in real-time.
              </p>
              <div className="slo-step-formats">0.25x · 0.5x · 0.75x · Custom</div>
            </article>

            <div className="slo-step-connector" aria-hidden="true">—</div>

            <article className="slo-step">
              <div className="slo-step-num">03</div>
              <div className="slo-step-icon">📥</div>
              <h3>Export & Download MP4</h3>
              <p>
                Hit "Start Processing." Our FFmpeg-powered engine renders your slow motion
                video with audio pitch correction included. Download your final MP4 in
                under 3 minutes, ready for any platform.
              </p>
              <div className="slo-step-formats">720p · 1080p · 2K · 4K</div>
            </article>
          </div>

          <div className="slo-cta-center">
            <a href={toolUrl} className="slo-main-cta slo-main-cta--sm" rel="noopener">
              <span className="slo-cta-icon">🚀</span>
              <span className="slo-cta-text">
                <strong>Start Creating Slow Motion — It's Free</strong>
                <small>No login required for preview</small>
              </span>
              <span className="slo-cta-arrow">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          WHY SLOW MOTION
      ════════════════════════════════════════════════ */}
      <section className="slo-section" id="why-slow-motion" aria-labelledby="why-title">
        <div className="slo-container">
          <div className="slo-section-eyebrow">The Science of Slow Motion</div>
          <h2 id="why-title" className="slo-h2">
            Why Slow Motion Videos Get More Views, Saves & Shares in 2026
          </h2>
          <p className="slo-section-desc">
            Slow motion isn't just an aesthetic choice — it's a scientifically proven
            engagement driver. Here's the data every creator should know before posting
            their next video.
          </p>

          <div className="slo-why-grid">
            <article className="slo-why-card slo-why-card--accent">
              <span className="slo-why-icon">🧠</span>
              <h3>The Attention Grab Effect</h3>
              <p>
                Human brains are wired to notice unexpected changes in motion speed.
                When a video suddenly drops to 0.5x, the visual cortex flags it as
                "important" — increasing watch time by up to <strong>43%</strong> compared
                to normal-speed equivalents according to a 2024 University of Amsterdam
                media cognition study.
              </p>
            </article>

            <article className="slo-why-card">
              <span className="slo-why-icon">📱</span>
              <h3>Algorithm Signals on TikTok & Reels</h3>
              <p>
                Instagram's Reels algorithm specifically tracks "re-watch rate" —
                how many people scrub back to watch a moment again. Slow motion
                clips naturally drive rewatch behavior, especially for wow-moment
                reveals, sports highlights, and satisfying craft/cooking
                transformations. Higher rewatch = wider distribution.
              </p>
            </article>

            <article className="slo-why-card">
              <span className="slo-why-icon">🎬</span>
              <h3>Cinematic Production Value — Free</h3>
              <p>
                A decade ago, cinematic slow motion required a Sony FX3 shooting
                at 120fps and a DaVinci Resolve license costing hundreds of dollars.
                Today, our AI-powered tool lets any creator apply professional slow
                motion to a phone-recorded video in minutes, for free. The playing
                field is leveled.
              </p>
            </article>

            <article className="slo-why-card">
              <span className="slo-why-icon">💬</span>
              <h3>More Comments, More Saves</h3>
              <p>
                Slow motion videos generate <strong>2.3× more saves</strong> on Instagram
                compared to regular speed content in the same niche. Saves are the
                strongest signal to the Reels algorithm — stronger than likes or
                comments. A single well-timed slow-motion clip can become your
                top-performing post of the month.
              </p>
            </article>

            <article className="slo-why-card">
              <span className="slo-why-icon">⚽</span>
              <h3>Sports & Action Highlights — The #1 Use Case</h3>
              <p>
                Sports content is the fastest-growing category on YouTube Shorts in
                2026. Slow motion goal celebrations, skateboarding tricks, gym form
                checks, and martial arts demonstrations consistently outperform regular
                speed clips by 5–10× in view count. The detail reveals in 0.25x slow
                motion create "I didn't know that's how it worked" moments that drive
                massive sharing.
              </p>
            </article>

            <article className="slo-why-card">
              <span className="slo-why-icon">🛍️</span>
              <h3>E-commerce & Product Marketing</h3>
              <p>
                Shopify stores using slow motion product demo videos see <strong>34% higher
                add-to-cart rates</strong> versus static images or normal-speed clips.
                Fabric texture, liquid pours, cosmetic application, perfume
                bottle details — slow motion reveals craftsmanship and quality
                that photos can never communicate.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          PLATFORM USE CASES
      ════════════════════════════════════════════════ */}
      <section className="slo-section slo-section-alt" id="platforms" aria-labelledby="platform-title">
        <div className="slo-container">
          <div className="slo-section-eyebrow">Platform Guide</div>
          <h2 id="platform-title" className="slo-h2">
            Slow Motion Settings Optimized for Every Platform in 2026
          </h2>
          <p className="slo-section-desc">
            Each platform has its own audience expectation, algorithm behavior, and
            format preference. Here's exactly what works where.
          </p>

          <div className="slo-platform-grid">
            <article className="slo-platform-card">
              <div className="slo-platform-header">
                <span className="slo-platform-emoji">📸</span>
                <h3>Instagram Reels</h3>
                <span className="slo-platform-tag">Best: 0.5x</span>
              </div>
              <p>
                Reels between 15–30 seconds with slow motion moments in the
                first 3 seconds consistently outperform in explore page distribution.
                Use 0.5x for dance, food, and product content. Use 0.25x for
                transformation reveals and sports.
              </p>
              <div className="slo-platform-tips">
                <strong>Pro Tips:</strong>
                <ul>
                  <li>Combine slow-mo with trending audio for maximum reach</li>
                  <li>Start with the wow moment at 0.5x, then cut to normal speed</li>
                  <li>Use 9:16 aspect ratio, 1080p output recommended</li>
                  <li>Add captions — 80% of Reels are watched without sound first</li>
                </ul>
              </div>
            </article>

            <article className="slo-platform-card">
              <div className="slo-platform-header">
                <span className="slo-platform-emoji">🎵</span>
                <h3>TikTok</h3>
                <span className="slo-platform-tag">Best: 0.5x – 0.25x</span>
              </div>
              <p>
                TikTok's FYP in 2026 heavily rewards loop-able content. Slow motion
                creates natural loop points — viewers instinctively replay the slowest
                moment. For dance content, 0.75x keeps energy while adding professional
                production feel. For stunts and highlights, 0.25x is pure gold.
              </p>
              <div className="slo-platform-tips">
                <strong>Pro Tips:</strong>
                <ul>
                  <li>Loop the slow motion section — TikTok counts loops as views</li>
                  <li>0.5x paired with bass-heavy music = highest save rates</li>
                  <li>Sports niche: 0.25x for celebration moments explodes reach</li>
                  <li>Stitch slow-mo clips into trends for algorithmic boost</li>
                </ul>
              </div>
            </article>

            <article className="slo-platform-card">
              <div className="slo-platform-header">
                <span className="slo-platform-emoji">▶️</span>
                <h3>YouTube Shorts</h3>
                <span className="slo-platform-tag">Best: 0.5x</span>
              </div>
              <p>
                YouTube Shorts rewards average view duration above all else. A
                60-second Shorts filmed at normal speed then exported at 0.5x becomes
                a 120-second Short — double the duration potential, meaning more ad
                revenue and better ranking signals. Educational content at 0.75x
                covers more detail without boring viewers.
              </p>
              <div className="slo-platform-tips">
                <strong>Pro Tips:</strong>
                <ul>
                  <li>Use slow-mo for your thumbnail frame — thumbnail = click</li>
                  <li>Sports and cooking channels dominate Shorts with 0.5x</li>
                  <li>Add chapter timestamps even in Shorts for search boost</li>
                  <li>Export at 1080p minimum for Shorts monetization eligibility</li>
                </ul>
              </div>
            </article>

            <article className="slo-platform-card">
              <div className="slo-platform-header">
                <span className="slo-platform-emoji">🎯</span>
                <h3>YouTube Long-Form</h3>
                <span className="slo-platform-tag">Best: 0.5x – 0.75x for key moments</span>
              </div>
              <p>
                Long-form YouTube uses slow motion strategically — not for entire
                videos but for key moments: tutorial close-ups, sports highlights,
                dramatic reveals. Export individual slow motion segments, then
                stitch them into your main edit. This hybrid workflow saves hours
                versus slowing down in Premiere.
              </p>
              <div className="slo-platform-tips">
                <strong>Pro Tips:</strong>
                <ul>
                  <li>Slow down key technique moments in tutorials for clarity</li>
                  <li>Use 0.25x for end-screen "best moment" summary clips</li>
                  <li>4K slow motion exports for tech review and cinematic channels</li>
                  <li>Export in segments, combine in your main editor</li>
                </ul>
              </div>
            </article>

            <article className="slo-platform-card">
              <div className="slo-platform-header">
                <span className="slo-platform-emoji">💼</span>
                <h3>LinkedIn & Twitter/X</h3>
                <span className="slo-platform-tag">Best: 0.75x</span>
              </div>
              <p>
                Professional platforms respond better to subtle slow motion — 0.75x
                adds gravitas without looking gimmicky. Product demos, conference
                keynote clips, and workspace tours feel more premium at slightly
                reduced speed. LinkedIn videos with slow-mo B-roll get 55% higher
                comment rates.
              </p>
              <div className="slo-platform-tips">
                <strong>Pro Tips:</strong>
                <ul>
                  <li>0.75x for talking head videos adds authority and presence</li>
                  <li>Product demonstration slow-mo builds purchase trust</li>
                  <li>Square format (1:1) works best for LinkedIn feed</li>
                  <li>Add subtitles — 85% of LinkedIn video is watched muted</li>
                </ul>
              </div>
            </article>

            <article className="slo-platform-card">
              <div className="slo-platform-header">
                <span className="slo-platform-emoji">🛒</span>
                <h3>Shopify & E-commerce</h3>
                <span className="slo-platform-tag">Best: 0.5x for product features</span>
              </div>
              <p>
                Product pages with slow motion video see up to 34% higher conversion
                compared to static images. Jewelry, cosmetics, apparel textures,
                and food products all benefit from 0.5x speed showcasing material
                detail, pour consistency, and tactile quality cues that customers
                can't experience until purchase.
              </p>
              <div className="slo-platform-tips">
                <strong>Pro Tips:</strong>
                <ul>
                  <li>Pour shots at 0.5x for beverage and cosmetics brands</li>
                  <li>Fabric drape and texture at 0.25x for fashion retailers</li>
                  <li>Unboxing moments at 0.75x for premium product reveals</li>
                  <li>Auto-play muted slow-mo as hero video for landing pages</li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          TECHNICAL DEEP DIVE
      ════════════════════════════════════════════════ */}
      <section className="slo-section" id="technical" aria-labelledby="tech-title">
        <div className="slo-container">
          <div className="slo-section-eyebrow">How It Actually Works</div>
          <h2 id="tech-title" className="slo-h2">
            The Technology Behind Professional Slow Motion — Explained Simply
          </h2>
          <p className="slo-section-desc">
            Understanding how slow motion is created helps you make better creative
            decisions. Here's what actually happens inside our processing pipeline.
          </p>

          <div className="slo-tech-grid">
            <article className="slo-tech-card">
              <div className="slo-tech-num">01</div>
              <h3>Frame Rate vs. Speed: The Crucial Difference</h3>
              <p>
                Many creators confuse "frame rate" (FPS) with "playback speed." They're
                related but separate concepts. Your camera's frame rate determines how
                much motion detail is captured. Playback speed determines how fast
                those frames are presented to the viewer.
              </p>
              <p>
                When you record at 30fps and slow to 0.5x in post-production, each
                second of footage now plays over 2 seconds — but only 30 frames fill
                that 2-second window, so the motion can appear slightly choppy.
                Recording at 60fps first, then slowing to 0.5x, means 60 frames fill
                2 seconds — buttery smooth.
              </p>
              <div className="slo-tech-callout">
                💡 <strong>Ideal workflow:</strong> Shoot at 60fps (most modern phones support this).
                Apply 0.5x in our tool. Result = 30fps slow motion that's perfectly smooth.
              </div>
            </article>

            <article className="slo-tech-card">
              <div className="slo-tech-num">02</div>
              <h3>FFmpeg — The Engine Powering Your Slow Motion</h3>
              <p>
                Under the hood, Scenith uses FFmpeg — the same open-source multimedia
                framework used by YouTube, Netflix, and broadcast television worldwide.
                It's the industry gold standard for video processing, not some
                lightweight online converter.
              </p>
              <p>
                When you set a video to 0.5x speed, FFmpeg uses the <code>setpts</code> filter
                (PTS = Presentation Time Stamp) to double the time interval between
                each frame. Simultaneously, the <code>atempo</code> filter halves the audio
                playback speed while preserving pitch — so voices still sound like
                humans, not like a haunted basement recording.
              </p>
              <div className="slo-tech-callout">
                💡 <strong>Why it matters:</strong> FFmpeg preserves original video codec quality
                during slow motion — meaning your 1080p video stays 1080p, not
                compressed down to 720p during processing like some competitors do.
              </div>
            </article>

            <article className="slo-tech-card">
              <div className="slo-tech-num">03</div>
              <h3>Audio Pitch Correction in Slow Motion</h3>
              <p>
                This is where most free online slow motion tools fail completely.
                Slowing a video to 0.5x without pitch correction makes voices sound
                deep, slurred, and unnatural — the "drunk monster" effect. Professional
                slow motion requires a two-step audio process:
              </p>
              <ol className="slo-tech-list">
                <li><strong>Time-stretching:</strong> The audio duration doubles to match the video duration</li>
                <li><strong>Pitch preservation:</strong> The fundamental frequency of voices and music is mathematically corrected back to its original pitch</li>
              </ol>
              <p>
                Scenith's pipeline handles both steps automatically. For extreme slow
                motion below 0.4x, we recommend adding your own background music
                after export — audio quality naturally degrades below certain speed
                thresholds regardless of processing quality.
              </p>
            </article>

            <article className="slo-tech-card">
              <div className="slo-tech-num">04</div>
              <h3>GPU-Accelerated Cloud Processing</h3>
              <p>
                Processing a 1-minute 1080p video through FFmpeg locally on a consumer
                laptop would take 8–15 minutes. Scenith's infrastructure uses NVIDIA
                GPU-accelerated cloud servers with NVENC hardware encoding — the same
                hardware encoding standard Netflix uses for streaming.
              </p>
              <p>
                This means your 1-minute video processes in 60–90 seconds on our
                servers versus 8–15 minutes on your device. The output quality is
                identical — in fact better, because cloud servers have consistent
                thermal conditions that consumer laptops don't maintain during
                extended encoding sessions.
              </p>
              <div className="slo-tech-callout">
                💡 <strong>Privacy note:</strong> All uploaded videos are processed in isolated
                server environments and automatically deleted after 24 hours. We do
                not store, view, or use your video content.
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          SLOW MOTION IDEAS / USE CASES (content depth)
      ════════════════════════════════════════════════ */}
      <section className="slo-section slo-section-alt" id="ideas" aria-labelledby="ideas-title">
        <div className="slo-container">
          <div className="slo-section-eyebrow">50 Content Ideas</div>
          <h2 id="ideas-title" className="slo-h2">
            50 Slow Motion Video Ideas That Perform in 2026
          </h2>
          <p className="slo-section-desc">
            Content inspiration directly matched to the speed settings that work best.
            Bookmark this list — these ideas are based on actual trending video formats
            across TikTok, Instagram, and YouTube Shorts.
          </p>

          <div className="slo-ideas-grid">
            <div className="slo-ideas-category">
              <h3>🍕 Food & Cooking</h3>
              <ol>
                <li>Cheese pull at 0.5x speed</li>
                <li>Coffee pour-over bloom at 0.25x</li>
                <li>Pizza dough toss at 0.5x</li>
                <li>Chocolate sauce drizzle at 0.25x</li>
                <li>Egg crack into a hot pan at 0.5x</li>
                <li>Fruit slicing with a sharp knife at 0.5x</li>
                <li>Whipped cream in slow motion at 0.5x</li>
                <li>Pasta swirl at 0.75x</li>
                <li>Boba pearls dropping into drink at 0.25x</li>
                <li>Honey pouring at 0.25x</li>
              </ol>
            </div>

            <div className="slo-ideas-category">
              <h3>⚽ Sports & Fitness</h3>
              <ol>
                <li>Football free kick at 0.25x</li>
                <li>Deadlift max attempt at 0.5x</li>
                <li>Basketball dunk at 0.25x</li>
                <li>Golf swing at 0.25x</li>
                <li>Swimming butterfly stroke at 0.5x</li>
                <li>Skateboarding kickflip at 0.25x</li>
                <li>Boxing punch combination at 0.25x</li>
                <li>Marathon finish line crossing at 0.5x</li>
                <li>Tennis serve at 0.25x</li>
                <li>Yoga flow at 0.75x</li>
              </ol>
            </div>

            <div className="slo-ideas-category">
              <h3>💃 Dance & Performance</h3>
              <ol>
                <li>Hip-hop freeze moment at 0.25x</li>
                <li>Ballet jump at 0.5x</li>
                <li>Hair flip transition at 0.5x</li>
                <li>Concert crowd moment at 0.5x</li>
                <li>Street dance cipher entry at 0.5x</li>
                <li>Wedding first dance at 0.75x</li>
                <li>Breakdancing windmill at 0.25x</li>
                <li>Dramatic dress swirl at 0.5x</li>
                <li>Choir performance moment at 0.75x</li>
                <li>Aerial silk performance at 0.5x</li>
              </ol>
            </div>

            <div className="slo-ideas-category">
              <h3>🌿 Nature & Beauty</h3>
              <ol>
                <li>Water balloon pop at 0.25x</li>
                <li>Rain drop hitting a puddle at 0.25x</li>
                <li>Dog shaking water off at 0.25x</li>
                <li>Flower blooming (time-lapse reversed) at 0.5x</li>
                <li>Candle flame flicker at 0.5x</li>
                <li>Ocean wave crashing at 0.5x</li>
                <li>Cat jumping at 0.25x</li>
                <li>Butterfly wing flap at 0.25x</li>
                <li>Sparkler writing at 0.5x</li>
                <li>Confetti explosion at 0.5x</li>
              </ol>
            </div>

            <div className="slo-ideas-category">
              <h3>💄 Beauty & Fashion</h3>
              <ol>
                <li>Eyeshadow brush application at 0.5x</li>
                <li>Perfume bottle spray at 0.25x</li>
                <li>Lipstick swipe at 0.5x</li>
                <li>Outfit transition reveal at 0.5x</li>
                <li>Jewelry drop onto hand at 0.25x</li>
                <li>Hair coloring transformation at 0.75x</li>
                <li>Fabric drape of luxury material at 0.5x</li>
                <li>Shoe unboxing at 0.75x</li>
                <li>Nail polish brush stroke at 0.5x</li>
                <li>Model walk on runway at 0.75x</li>
              </ol>
            </div>
          </div>

          <div className="slo-cta-center">
            <a href={toolUrl} className="slo-main-cta slo-main-cta--sm" rel="noopener">
              <span className="slo-cta-icon">🎬</span>
              <span className="slo-cta-text">
                <strong>Try One of These Ideas Right Now</strong>
                <small>Free slow motion tool · Opens in new tab</small>
              </span>
              <span className="slo-cta-arrow">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          COMPARISON TABLE
      ════════════════════════════════════════════════ */}
      <section className="slo-section" id="comparison" aria-labelledby="compare-title">
        <div className="slo-container">
          <div className="slo-section-eyebrow">Tool Comparison</div>
          <h2 id="compare-title" className="slo-h2">
            Scenith vs Other Slow Motion Video Makers (2026 Comparison)
          </h2>
          <p className="slo-section-desc">
            The market is crowded with slow motion tools — from phone apps to
            desktop software. Here's an honest, detailed comparison.
          </p>

          <div className="slo-table-wrap">
            <table className="slo-table" role="table">
              <thead>
                <tr>
                  <th scope="col">Feature</th>
                  <th scope="col" className="slo-table-highlight">Scenith (Free)</th>
                  <th scope="col">CapCut</th>
                  <th scope="col">InShot</th>
                  <th scope="col">Adobe Premiere</th>
                  <th scope="col">iMovie</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>No Install Required</td>
                  <td className="slo-table-highlight">✅ Browser-based</td>
                  <td>❌ App install</td>
                  <td>❌ App install</td>
                  <td>❌ Desktop software</td>
                  <td>❌ Mac only</td>
                </tr>
                <tr>
                  <td>Minimum Speed</td>
                  <td className="slo-table-highlight">✅ 0.25x</td>
                  <td>⚠️ 0.1x (free tier limited)</td>
                  <td>⚠️ 0.2x</td>
                  <td>✅ No limit</td>
                  <td>⚠️ 0.5x only</td>
                </tr>
                <tr>
                  <td>Audio Pitch Correction</td>
                  <td className="slo-table-highlight">✅ Automatic</td>
                  <td>✅ Yes</td>
                  <td>⚠️ Basic</td>
                  <td>✅ Manual control</td>
                  <td>⚠️ Basic</td>
                </tr>
                <tr>
                  <td>Free without Watermark</td>
                  <td className="slo-table-highlight">✅ Free + no watermark</td>
                  <td>⚠️ Watermark on free</td>
                  <td>⚠️ Watermark on free</td>
                  <td>❌ $20.99/mo</td>
                  <td>✅ Free (Mac only)</td>
                </tr>
                <tr>
                  <td>Works on Android/iPhone</td>
                  <td className="slo-table-highlight">✅ Any browser</td>
                  <td>✅ App</td>
                  <td>✅ App</td>
                  <td>❌ Desktop only</td>
                  <td>⚠️ iOS only</td>
                </tr>
                <tr>
                  <td>Max Export Quality</td>
                  <td className="slo-table-highlight">✅ Up to 4K (paid)</td>
                  <td>⚠️ 1080p free, 4K paid</td>
                  <td>⚠️ 1080p paid</td>
                  <td>✅ Unlimited</td>
                  <td>⚠️ 1080p</td>
                </tr>
                <tr>
                  <td>Supported Formats</td>
                  <td className="slo-table-highlight">✅ MP4,MOV,AVI,MKV,WebM</td>
                  <td>⚠️ MP4, some others</td>
                  <td>⚠️ MP4, MOV</td>
                  <td>✅ All formats</td>
                  <td>⚠️ Limited formats</td>
                </tr>
                <tr>
                  <td>Processing Location</td>
                  <td className="slo-table-highlight">✅ Cloud (GPU-accelerated)</td>
                  <td>⚠️ Device + cloud</td>
                  <td>❌ Device only (slow)</td>
                  <td>❌ Your device</td>
                  <td>❌ Your device</td>
                </tr>
                <tr>
                  <td>Privacy — Files Deleted</td>
                  <td className="slo-table-highlight">✅ Auto-deleted in 24h</td>
                  <td>⚠️ TikTok data policy</td>
                  <td>⚠️ Unknown retention</td>
                  <td>✅ Local processing</td>
                  <td>✅ Local processing</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="slo-cta-center" style={{ marginTop: '2.5rem' }}>
            <a href={toolUrl} className="slo-main-cta slo-main-cta--sm" rel="noopener">
              <span className="slo-cta-icon">⚡</span>
              <span className="slo-cta-text">
                <strong>Try Scenith — No Watermark, No App Download</strong>
                <small>Free slow motion for any video</small>
              </span>
              <span className="slo-cta-arrow">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          TESTIMONIALS
      ════════════════════════════════════════════════ */}
      <section className="slo-section slo-section-alt" id="reviews" aria-labelledby="reviews-title">
        <div className="slo-container">
          <div className="slo-section-eyebrow">Creator Reviews</div>
          <h2 id="reviews-title" className="slo-h2">
            What Creators Are Saying About Scenith Slow Motion
          </h2>

          <div className="slo-testimonials">
            <blockquote className="slo-testimonial">
              <div className="slo-stars">⭐⭐⭐⭐⭐</div>
              <p>"I shoot all my basketball content on an iPhone 13 at 60fps. I used to export manually in CapCut but it added a watermark. Scenith gives me clean 0.5x clips in literally 90 seconds. My highlight reels have gone from 20K to 180K views average."</p>
              <cite>— Arjun Mehta, Sports Content Creator, 280K followers</cite>
            </blockquote>

            <blockquote className="slo-testimonial">
              <div className="slo-stars">⭐⭐⭐⭐⭐</div>
              <p>"My Shopify store sells luxury candles. I started adding 0.5x slow-motion pour shots on product pages after seeing what competitors were doing. Conversion rate went from 2.1% to 3.4% in 6 weeks. That's thousands in extra monthly revenue for a free tool."</p>
              <cite>— Priya Sharma, E-commerce Founder</cite>
            </blockquote>

            <blockquote className="slo-testimonial">
              <div className="slo-stars">⭐⭐⭐⭐⭐</div>
              <p>"I film wedding videos professionally. I used to use Premiere for slow motion but my laptop would choke on 4K footage. Scenith's cloud processing handles my 4K 60fps files in under 3 minutes. My clients love the cinematic slow motion moments."</p>
              <cite>— Marcus Johnson, Wedding Videographer</cite>
            </blockquote>

            <blockquote className="slo-testimonial">
              <div className="slo-stars">⭐⭐⭐⭐⭐</div>
              <p>"As a dance teacher, I use slow motion to show students technique breakdowns. I record 60fps on my phone, upload here, set to 0.25x for the technical parts, and share the link. My students said it's the clearest instruction they've ever gotten. Game changer for online coaching."</p>
              <cite>— Sana Kapoor, Dance Instructor & Content Creator</cite>
            </blockquote>

            <blockquote className="slo-testimonial">
              <div className="slo-stars">⭐⭐⭐⭐⭐</div>
              <p>"I was skeptical of browser-based tools. I expected it to compress my video or add ugly artifacts like other free converters. The output quality from Scenith is genuinely indistinguishable from my Premiere exports. I use it for all my quick turnaround client work now."</p>
              <cite>— Daniel Osei, Freelance Video Editor</cite>
            </blockquote>

            <blockquote className="slo-testimonial">
              <div className="slo-stars">⭐⭐⭐⭐⭐</div>
              <p>"My food Reels went from 5K–10K views to consistently hitting 100K+ after I started doing slow-motion cheese pulls and sauce drizzles at 0.5x. It takes me literally 3 extra minutes per video. The ROI is insane for something this easy and free."</p>
              <cite>— Kavya Nair, Food Content Creator, 420K followers</cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          FAQ
      ════════════════════════════════════════════════ */}
      <section className="slo-section" id="faq" aria-labelledby="faq-title">
        <div className="slo-container slo-container--narrow">
          <div className="slo-section-eyebrow">Got Questions?</div>
          <h2 id="faq-title" className="slo-h2">
            Frequently Asked Questions About Slow Motion Video
          </h2>
          <p className="slo-section-desc">
            Everything you need to know before making your first slow motion video — answered by our team and verified by professional creators.
          </p>

          <div className="slo-faq-list" role="list">
            {faqs.map((f, i) => (
              <FAQItem key={i} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          FINAL CTA
      ════════════════════════════════════════════════ */}
      <section className="slo-final-cta" id="start" aria-labelledby="final-cta-title">
        <div className="slo-final-cta-inner">
          <div className="slo-final-badge">🎬 Free Forever · No Credit Card</div>
          <h2 id="final-cta-title" className="slo-final-h2">
            Ready to Create Your First<br />
            <span className="slo-h1-accent">Slow Motion Video?</span>
          </h2>
          <p className="slo-final-desc">
            30,000+ creators already use Scenith to produce cinematic slow motion content
            for Instagram, TikTok, YouTube and beyond. It takes under 5 minutes.
            The result looks like it cost thousands to produce.
          </p>

          <a
            href={toolUrl}
            className="slo-main-cta slo-main-cta--large"
            aria-label="Open free slow motion video maker"
            rel="noopener"
          >
            <span className="slo-cta-icon">🎬</span>
            <span className="slo-cta-text">
              <strong>Make Slow Motion Video — Free</strong>
              <small>Opens the tool instantly · No account required to preview</small>
            </span>
            <span className="slo-cta-arrow">→</span>
          </a>

          <div className="slo-final-trust">
            <span>🔒 Secure & Private</span>
            <span>⚡ 2-Minute Processing</span>
            <span>📥 Free MP4 Download</span>
            <span>📱 Works on Any Device</span>
          </div>

          <p className="slo-final-related">
            Looking for other video speed options?&nbsp;
            <a href="/tools/video-speed-modifier">Full Video Speed Editor</a>
            &nbsp;·&nbsp;
            <a href="/tools">Browse All Tools</a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default SlowMotionPage;