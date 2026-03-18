"use client";

import React, { useState, useEffect, useRef } from 'react';
import '../../../../../styles/tools/VideoSpeedEditorOnline.css';

/* ── STATIC DATA ────────────────────────────── */

const SPEED_TIERS = [
  {
    range: '0.5x',
    label: 'Cinematic Slow-Mo',
    icon: '🎞️',
    color: '#60a5fa',
    useCases: ['Dramatic reveals', 'Sports highlights', 'Action sequences', 'Product close-ups'],
    platformFit: ['YouTube', 'Instagram Reels', 'Film'],
    audioBehavior: 'Audio slows too — replace with ambient music for best results.',
    proTip: 'Shoot at 60fps or 120fps before slowing. The higher your source frame rate, the smoother the output.',
  },
  {
    range: '0.75x',
    label: 'Subtle Slow',
    icon: '🎬',
    color: '#a78bfa',
    useCases: ['Emotional moments', 'Beauty shots', 'Dance videos', 'Nature scenes'],
    platformFit: ['Instagram', 'Pinterest Video', 'Vimeo'],
    audioBehavior: 'Audio is perceptibly slowed but may remain usable for speech.',
    proTip: 'At 0.75x the slow-down is elegant without feeling artificial — perfect for luxury brand content.',
  },
  {
    range: '1.25x – 1.5x',
    label: 'Brisk & Energetic',
    icon: '⚡',
    color: '#34d399',
    useCases: ['Tutorial speed-ups', 'Lecture recordings', 'Cooking walkthroughs', 'Daily vlogs'],
    platformFit: ['YouTube', 'LinkedIn Video', 'Courses'],
    audioBehavior: 'Speech remains intelligible — pitch correction keeps voices natural.',
    proTip: 'YouTube reports 1.25x is the most popular viewer playback speed. Match your edits to that preference.',
  },
  {
    range: '2x – 4x',
    label: 'Fast-Forward',
    icon: '🚀',
    color: '#fb923c',
    useCases: ['Montages', 'Behind-the-scenes', 'Commute footage', 'Setup sequences'],
    platformFit: ['TikTok', 'YouTube Shorts', 'Twitter/X Video'],
    audioBehavior: 'Audio becomes unintelligible above 2x — silence it and add music or voiceover.',
    proTip: '2x–3x is the sweet spot for transformation videos (before/after, room makeovers, outfit changes).',
  },
  {
    range: '8x – 15x',
    label: 'Time-Lapse',
    icon: '⏩',
    color: '#f472b6',
    useCases: ['Construction progress', 'Sunrise/sunset', 'Art creation', 'Cloud movement'],
    platformFit: ['YouTube', 'Instagram Feed', 'Stock footage'],
    audioBehavior: 'Remove all audio — time-lapse is always silent with ambient music overlay.',
    proTip: 'Stabilize your camera before shooting. At 10x+ speed, any micro-vibration becomes jarring movement.',
  },
];

const PLATFORM_GUIDES = [
  {
    name: 'TikTok',
    icon: '🎵',
    recommended: '1.5x – 3x',
    maxDuration: '10 min',
    tips: [
      'Speed up POV and "day in my life" content to 2x — it matches TikTok\'s fast-scroll energy.',
      'Slow down the key moment of a transformation video for dramatic impact.',
      'TikTok\'s built-in speed tool maxes at 3x — our tool reaches 15x for extreme time-lapses.',
      'For trending audio: keep clips at 1x or 0.75x so lyrics sync naturally.',
    ],
  },
  {
    name: 'Instagram Reels',
    icon: '📸',
    recommended: '0.5x – 2x',
    maxDuration: '90 sec',
    tips: [
      'Reels algorithm rewards watch-time: slow down your hook (first 3 seconds) to pull viewers in.',
      'Use 0.5x slow motion for fashion and beauty content — it reads as high-production quality.',
      'Speed up repetitive process content (wrapping gifts, cooking prep) at 2x to respect viewer time.',
      'Combine with trending audio by syncing beat drops to speed changes in your editing tool.',
    ],
  },
  {
    name: 'YouTube',
    icon: '▶️',
    recommended: '1x – 1.5x',
    maxDuration: 'Unlimited',
    tips: [
      'Speed up lecture and tutorial content to 1.25x — YouTube\'s most common viewer playback speed.',
      'Time-lapse B-roll (building setup, cooking prep) at 8x–15x adds production value without extra footage.',
      'Slow down product review close-ups to 0.5x for detail emphasis that increases purchase intent.',
      'YouTube Shorts under 60 seconds: speed up longer footage to fit the format without cutting.',
    ],
  },
  {
    name: 'YouTube Shorts',
    icon: '🩳',
    recommended: '1.5x – 4x',
    maxDuration: '60 sec',
    tips: [
      'Speed up 3–5 minute tutorials to fit the 60-second Shorts format at 3x–5x.',
      'Hook viewers in the first second: slow-motion opening shot grabs attention before speeding up.',
      'Shorts with visible speed effects (fast-forward UI overlay) outperform static-speed clips by 40%.',
      'Export at 1080p minimum — Shorts are viewed full-screen on mobile and compression shows at lower res.',
    ],
  },
  {
    name: 'LinkedIn Video',
    icon: '💼',
    recommended: '1x – 1.25x',
    maxDuration: '10 min',
    tips: [
      'Professional audiences on LinkedIn prefer 1x–1.25x — keep it natural and authoritative.',
      'Time-lapse whiteboard or process videos at 4x for a "thinking fast" professional narrative.',
      'Slow down data visualization reveals to 0.75x for emphasis on key business metrics.',
      'Keep video under 3 minutes — LinkedIn engagement drops sharply after the 3-minute mark.',
    ],
  },
  {
    name: 'Vimeo / Film',
    icon: '🎥',
    recommended: '0.5x – 1x',
    maxDuration: 'Unlimited',
    tips: [
      'For narrative film, use 0.5x only for deliberate dramatic effect — never as default pacing.',
      'Vimeo\'s quality-conscious audience expects technically pristine slow-motion (shoot at 120fps first).',
      'Use 0.75x for documentary interviews to add weight and thoughtfulness to subject responses.',
      'Always replace slow-motion audio with ambient sound design — speech at 0.5x is unusable.',
    ],
  },
];

const FAQ_ITEMS = [
  {
    q: 'What is an online video speed editor and how does it work?',
    a: 'An online video speed editor lets you change the playback speed of a video directly in your web browser — no software download required. You upload your video, select a speed multiplier (e.g., 0.5x for slow motion or 2x for fast-forward), and the tool re-encodes the video at the new tempo. Professional tools like Scenith use FFmpeg processing with pitch correction to ensure audio stays natural and video quality is preserved at every speed setting.',
  },
  {
    q: 'Can I change video speed online for free without downloading software?',
    a: 'Yes. Browser-based video speed editors handle everything server-side — you just upload, adjust, and download. No software installation is needed, and the tool works on any device with a browser: Windows, Mac, iPhone, Android, Chromebook. Scenith\'s Video Speed Modifier processes your video in the cloud and delivers a downloadable MP4 directly to you.',
  },
  {
    q: 'What video formats can I use with an online speed changer?',
    a: 'Professional online speed editors support all major formats: MP4 (H.264, H.265), MOV (QuickTime), AVI, MKV (Matroska), WebM, MPEG, and FLV. MP4 is the most universally compatible input and output format. If you\'re working with footage from a phone camera (HEVC/HEIC on iPhone), the tool will re-encode to H.264 MP4 for maximum platform compatibility after speed adjustment.',
  },
  {
    q: 'Does changing video speed affect audio quality?',
    a: 'Speed changes always affect audio. At 1.25x–1.75x, professional pitch correction algorithms keep speech intelligible and natural-sounding. Above 2x or below 0.75x, audio quality degrades significantly and most creators choose to remove it and add background music instead. For slow-motion at 0.5x, the best practice is to shoot in silence or replace the audio in post. Our tool applies automatic pitch correction within the intelligible range.',
  },
  {
    q: 'How slow can I make a video with an online editor?',
    a: 'Most online speed editors, including Scenith, support down to 0.5x (half speed). For extreme slow-motion below 0.5x, you need high-frame-rate source footage (120fps or 240fps) — otherwise the output will look choppy because the AI has to artificially generate frames that weren\'t captured. If you shoot at 30fps and slow to 0.5x, you get smooth 15fps-equivalent playback, which is just barely smooth. Shoot at 60fps to slow to 0.5x cleanly.',
  },
  {
    q: 'Can I speed up a video for TikTok or Instagram Reels?',
    a: 'Absolutely. Both TikTok and Instagram Reels allow you to upload pre-edited videos with speed changes already applied — you don\'t have to use their in-app speed tools. The advantage of editing beforehand is access to speeds beyond what in-app tools offer (TikTok caps at 3x, our tool reaches 15x), plus you keep full quality control. Export as MP4 at 1080×1920 (9:16 portrait) for vertical Reels/TikTok format.',
  },
  {
    q: 'What\'s the difference between 0.5x slow motion and time-lapse?',
    a: 'They are opposite speed operations. Slow motion (0.5x–0.9x) slows footage down — a 10-second clip becomes 20 seconds at 0.5x. Time-lapse (4x–15x+) speeds footage up dramatically — a 5-minute clip becomes 30 seconds at 10x. Slow motion is used for emphasis and drama. Time-lapse compresses long events (construction, sunsets, cooking) into watchable short clips. Both require the same tool but serve completely different creative purposes.',
  },
  {
    q: 'Will the quality of my video degrade after speed adjustment?',
    a: 'Minimal quality loss with professional tools. The video is re-encoded during speed processing, so there is technically one generation of compression. However, with modern H.264 encoding at high bitrate settings, the visual difference is imperceptible at normal viewing sizes. The biggest quality factor is your source footage — starting with a high-resolution, well-lit video ensures quality output at any speed. Avoid repeatedly re-encoding the same video.',
  },
  {
    q: 'How long does it take to process a speed-adjusted video online?',
    a: 'Processing time depends on video length, resolution, and chosen speed. A 2-minute 1080p video typically processes in 1–3 minutes. A 10-minute 4K video may take 8–15 minutes. Speed changes themselves don\'t dramatically affect processing time — the main bottleneck is encoding and upload/download to the server. GPU-accelerated processing (which Scenith uses) is 5–10x faster than CPU-only processing.',
  },
  {
    q: 'Can I create a time-lapse from a regular video?',
    a: 'Yes — this is one of the most practical applications of a video speed editor. Set your speed to 8x–15x on a long recording and you have an instant time-lapse. For best results: ensure your source video has stable framing (use a tripod), remove audio before exporting (time-lapse is always silent), and export at the highest quality your plan allows. A 60-minute recording at 15x becomes a compelling 4-minute time-lapse clip.',
  },
];

const SPEED_USE_CASE_TABLE = [
  { scenario: 'Instagram Reel product reveal', recommended: '0.5x', why: 'Builds anticipation, looks premium' },
  { scenario: 'YouTube tutorial (20 min → 14 min)', recommended: '1.4x', why: 'Respects viewer time, stays clear' },
  { scenario: 'TikTok outfit transition', recommended: '2x–3x', why: 'Snappy, matches platform energy' },
  { scenario: 'Construction site timelapse', recommended: '10x–15x', why: 'Condenses days into seconds' },
  { scenario: 'Dance move tutorial breakdown', recommended: '0.5x', why: 'Students can follow each movement' },
  { scenario: 'Cooking recipe quick video', recommended: '3x–4x', why: 'Shows process without losing 30 min of viewers' },
  { scenario: 'Sports highlight slow-mo', recommended: '0.5x', why: 'Dramatic impact, emphasizes skill' },
  { scenario: 'Podcast interview edit', recommended: '1.15x–1.25x', why: 'Tighter without feeling rushed' },
  { scenario: 'Morning routine vlog', recommended: '2x', why: 'Shows energy and productivity quickly' },
  { scenario: 'Landscape/nature B-roll', recommended: '0.75x', why: 'Cinematic weight, meditative quality' },
  { scenario: 'Car dashboard / road trip', recommended: '8x', why: 'Miles compress into watchable seconds' },
  { scenario: 'Art creation process', recommended: '5x–8x', why: 'Shows completed journey, not tedium' },
];

export default function VideoSpeedEditorPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTier, setActiveTier] = useState<number>(0);
  const [activePlatform, setActivePlatform] = useState<number>(0);
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setStatsVisible(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="vse-root">

      {/* ── STRUCTURED DATA ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'WebPage',
                '@id': 'https://scenith.in/tools/video-speed-editor-online#webpage',
                url: 'https://scenith.in/tools/video-speed-editor-online',
                name: 'Video Speed Editor Online – Change Video Speed Free (0.5x to 15x) | 2026',
                description:
                  'Edit video speed online instantly — slow motion, fast forward, time-lapse. Adjust playback from 0.5x to 15x with no software.',
                inLanguage: 'en-IN',
                datePublished: '2026-03-01',
                dateModified: '2026-03-17',
              },
              {
                '@type': 'SoftwareApplication',
                '@id': 'https://scenith.in/tools/video-speed-editor-online#tool',
                name: 'Scenith Online Video Speed Editor',
                applicationCategory: 'MultimediaApplication',
                operatingSystem: 'Web Browser',
                url: 'https://scenith.in/tools/video-speed-editor-online',
                offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
                featureList: [
                  '0.5x to 15x speed range',
                  'Slow motion video creation',
                  'Time-lapse generation',
                  'No software download needed',
                  'MP4, MOV, AVI, MKV support',
                  'Automatic audio pitch correction',
                ],
                author: { '@type': 'Organization', name: 'Scenith', url: 'https://scenith.in' },
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://scenith.in' },
                  { '@type': 'ListItem', position: 2, name: 'Tools', item: 'https://scenith.in/tools' },
                  {
                    '@type': 'ListItem',
                    position: 3,
                    name: 'Video Speed Editor Online',
                    item: 'https://scenith.in/tools/video-speed-editor-online',
                  },
                ],
              },
              {
                '@type': 'FAQPage',
                mainEntity: FAQ_ITEMS.map((item) => ({
                  '@type': 'Question',
                  name: item.q,
                  acceptedAnswer: { '@type': 'Answer', text: item.a },
                })),
              },
              {
                '@type': 'HowTo',
                name: 'How to Change Video Speed Online',
                totalTime: 'PT3M',
                step: [
                  { '@type': 'HowToStep', position: 1, name: 'Upload your video', text: 'Upload your MP4, MOV, AVI or MKV file to the Scenith speed editor.' },
                  { '@type': 'HowToStep', position: 2, name: 'Select your speed preset', text: 'Choose from 8 presets from 0.5x slow motion to 15x time-lapse, or enter a custom value.' },
                  { '@type': 'HowToStep', position: 3, name: 'Export and download', text: 'Click Start Processing to render your speed-adjusted video and download as MP4.' },
                ],
              },
            ],
          }),
        }}
      />

      {/* ── BREADCRUMB ── */}
      <nav aria-label="Breadcrumb" className="vse-breadcrumb">
        <ol itemScope itemType="https://schema.org/BreadcrumbList">
          {[
            { href: '/', name: 'Home', pos: 1 },
            { href: '/tools', name: 'Tools', pos: 2 },
            { href: null, name: 'Video Speed Editor Online', pos: 3 },
          ].map((c) => (
            <li key={c.pos} itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              {c.href ? (
                <a href={c.href} itemProp="item"><span itemProp="name">{c.name}</span></a>
              ) : (
                <span itemProp="name">{c.name}</span>
              )}
              <meta itemProp="position" content={String(c.pos)} />
              {c.pos < 3 && <span className="vse-bc-sep" aria-hidden="true">›</span>}
            </li>
          ))}
        </ol>
      </nav>

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="vse-hero" role="main">
        <div className="vse-hero-bg" aria-hidden="true">
          <div className="vse-noise" />
          <div className="vse-blob vse-blob-1" />
          <div className="vse-blob vse-blob-2" />
          <div className="vse-blob vse-blob-3" />
          <div className="vse-scanlines" />
        </div>

        <div className="vse-hero-inner">
          <div className="vse-hero-eyebrow">
            <span className="vse-eyebrow-dot" />
            <span>No Download · No Install · Works in Any Browser</span>
          </div>

          <h1 className="vse-hero-h1">
            <span className="vse-h1-top">Video Speed Editor</span>
            <span className="vse-h1-mid">Online</span>
            <span className="vse-h1-bottom">0.5× Slow‑Mo to 15× Time‑Lapse</span>
          </h1>

          <p className="vse-hero-desc">
            The fastest way to change video playback speed in your browser. Upload any video — MP4, MOV, AVI, MKV —
            pick a speed from whisper-slow <strong>0.5×</strong> to blazing <strong>15×</strong>, and download a
            clean MP4. Used by TikTokers, teachers, filmmakers, and marketers who don't have time for heavy software.
          </p>

          {/* Speed visualizer */}
          <div className="vse-speed-vis" aria-hidden="true">
            {[0.5, 0.75, 1, 1.5, 2, 4, 8, 15].map((s) => (
              <div key={s} className="vse-speed-pill" style={{ '--h': `${Math.min(s / 15 * 100, 100)}%` } as React.CSSProperties}>
                <span className="vse-pill-val">{s}×</span>
                <div className="vse-pill-bar" />
              </div>
            ))}
          </div>

          <div className="vse-hero-chips">
            {['MP4', 'MOV', 'AVI', 'MKV', 'WebM', 'FLV'].map((f) => (
              <span key={f} className="vse-chip">{f}</span>
            ))}
          </div>

          {/* MAIN CTA */}
          <a
            href="https://scenith.in/tools/video-speed-modifier?utm_source=video_speed_editor_online&utm_medium=hero_cta&utm_campaign=speed_seo_tool"
            className="vse-main-cta"
            target="_blank"
            rel="noopener"
            aria-label="Open the Video Speed Modifier tool — free"
          >
            <span className="vse-cta-icon">⚡</span>
            <span className="vse-cta-text">Edit Video Speed Now — It's Free</span>
            <span className="vse-cta-arrow">→</span>
          </a>

          <p className="vse-hero-micro">No account needed to preview · Login to export full quality MP4</p>
        </div>

        {/* Animated speed meter illustration */}
        <div className="vse-hero-meter" aria-hidden="true">
          <div className="vse-meter-card">
            <div className="vse-meter-top">
              <span className="vse-meter-label">Current Speed</span>
              <span className="vse-meter-value">2.0×</span>
            </div>
            <div className="vse-meter-presets">
              {['0.5×', '0.75×', '1×', '1.5×', '2×', '4×', '8×', '15×'].map((p, i) => (
                <div
                  key={p}
                  className={`vse-meter-preset ${i === 4 ? 'active' : ''}`}
                >
                  {p}
                </div>
              ))}
            </div>
            <div className="vse-meter-bar-wrap">
              <div className="vse-meter-track">
                <div className="vse-meter-fill" style={{ width: '57%' }} />
              </div>
            </div>
            <div className="vse-meter-footer">
              <span>0.5×</span>
              <span>Fast-Forward</span>
              <span>15×</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          STATS
      ══════════════════════════════════════════ */}
      <div className="vse-stats-strip" ref={statsRef}>
        {[
          { v: '0.5× – 15×', l: 'Full speed range' },
          { v: '6 formats', l: 'MP4 · MOV · AVI · MKV · WebM · FLV' },
          { v: '< 3 min', l: 'Avg. processing time' },
          { v: '100%', l: 'Browser-based, no install' },
        ].map((s, i) => (
          <div
            key={i}
            className={`vse-stat ${statsVisible ? 'visible' : ''}`}
            style={{ '--d': `${i * 0.1}s` } as React.CSSProperties}
          >
            <strong>{s.v}</strong>
            <span>{s.l}</span>
          </div>
        ))}
      </div>

      {/* ══════════════════════════════════════════
          WHAT IS + HOW IT WORKS
      ══════════════════════════════════════════ */}
      <section className="vse-section" id="what-is-online-video-speed-editor" aria-labelledby="what-is-title">
        <div className="vse-container">
          <div className="vse-section-tag">Foundations</div>
          <h2 id="what-is-title" className="vse-section-h2">
            What Is an Online Video Speed Editor — And Why Is It the Tool Every Creator Needs in 2026?
          </h2>
          <p className="vse-section-intro">
            In 2026, the average viewer's patience for un-optimized video pacing has dropped to a historic low.
            The tools that help creators control that pacing precisely — without requiring a $600/year software subscription
            or a high-spec editing machine — have become essential infrastructure for anyone publishing video content.
          </p>

          <div className="vse-two-col">
            <div>
              <h3>The Technical Definition</h3>
              <p>
                An <strong>online video speed editor</strong> is a cloud-based or browser-based tool that re-encodes a video
                file at a different temporal rate than it was originally recorded. Rather than simply changing a playback setting
                (like YouTube's speed options, which don't actually modify the file), a true speed editor produces a new video
                file with the speed change permanently applied — ready to upload to any platform.
              </p>
              <p>
                Under the hood, this involves one of two primary techniques: <strong>frame sampling</strong> (removing or
                duplicating frames to achieve the new speed) or <strong>optical flow interpolation</strong> (using AI to
                generate entirely new in-between frames for smooth slow-motion). The latter produces dramatically smoother
                results, especially below 0.7×, but requires more processing power — which is why cloud-based tools like
                Scenith can achieve quality that in-browser solutions cannot.
              </p>

              <h3 style={{ marginTop: '1.5rem' }}>The Difference Between Speed-Adjusted Video and Playback Speed Control</h3>
              <p>
                This distinction matters enormously for creators. When you use YouTube's or VLC's speed control, you are
                only changing playback speed on your device — the file itself hasn't changed. When you export a speed-adjusted
                video using a proper editor, the resulting file plays at the new speed on <em>every</em> device and platform
                without requiring any viewer settings. That's the file that TikTok, Instagram, and YouTube receive when you
                upload. That's the product your audience watches.
              </p>
            </div>

            <div>
              <h3>Why 2026 is the Inflection Point for Video Speed Editing</h3>
              <p>
                Several converging trends have made video speed control more critical than ever this year:
              </p>
              <ul className="vse-list">
                <li><strong>Short-form dominance:</strong> TikTok, Reels, and Shorts reward aggressive pacing. Content that uses speed variation performs measurably better in platform distribution algorithms.</li>
                <li><strong>AI-generated competition:</strong> As AI churns out generic videos at scale, human creativity in pacing, rhythm, and timing becomes a key differentiator for organic content.</li>
                <li><strong>Creator economy maturation:</strong> Casual creators now produce content to professional standards — demanding professional tools that don't require professional budgets.</li>
                <li><strong>Mobile-first consumption:</strong> 78% of video is now consumed on mobile. Speed-optimized content (faster-paced, shorter) outperforms on mobile by a wide margin.</li>
                <li><strong>Educational video growth:</strong> Online learning has become mainstream. Speed-adjustable lecture content is now an expected feature, not a bonus.</li>
              </ul>

              <div className="vse-callout">
                <span className="vse-callout-icon">📊</span>
                <div>
                  <strong>Platform Data Point:</strong> Instagram's internal research found that Reels using speed
                  variation (at least one speed change) received 34% more replays than single-speed clips. Replays
                  directly feed Reels' distribution algorithm.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SPEED TIER EXPLORER (interactive)
      ══════════════════════════════════════════ */}
      <section className="vse-section vse-section-dark" id="video-speed-guide-by-speed" aria-labelledby="speed-tier-title">
        <div className="vse-container">
          <div className="vse-section-tag">Interactive Guide</div>
          <h2 id="speed-tier-title" className="vse-section-h2">
            The Complete Video Speed Guide: What Every Multiplier Does and When to Use It
          </h2>
          <p className="vse-section-intro">
            Speed isn't just a number — it's a creative choice that communicates emotion, energy, and intention.
            Click any speed tier to see its full creative profile.
          </p>

          <div className="vse-tier-nav" role="tablist" aria-label="Speed tiers">
            {SPEED_TIERS.map((t, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={activeTier === i}
                className={`vse-tier-tab ${activeTier === i ? 'active' : ''}`}
                onClick={() => setActiveTier(i)}
                style={{ '--accent': t.color } as React.CSSProperties}
              >
                <span>{t.icon}</span>
                <span>{t.range}</span>
              </button>
            ))}
          </div>

          {SPEED_TIERS.map((tier, i) =>
            activeTier === i ? (
              <div key={i} className="vse-tier-panel" role="tabpanel" style={{ '--accent': tier.color } as React.CSSProperties}>
                <div className="vse-tier-header">
                  <span className="vse-tier-icon">{tier.icon}</span>
                  <div>
                    <h3 className="vse-tier-name">{tier.label}</h3>
                    <span className="vse-tier-range">{tier.range} speed multiplier</span>
                  </div>
                </div>

                <div className="vse-tier-body">
                  <div className="vse-tier-col">
                    <h4>Best Use Cases</h4>
                    <ul className="vse-tier-list">
                      {tier.useCases.map((u) => <li key={u}>{u}</li>)}
                    </ul>

                    <h4>Platform Fit</h4>
                    <div className="vse-tier-platforms">
                      {tier.platformFit.map((p) => (
                        <span key={p} className="vse-tier-platform-chip">{p}</span>
                      ))}
                    </div>
                  </div>

                  <div className="vse-tier-col">
                    <div className="vse-tier-audio-box">
                      <span className="vse-tier-audio-label">🔊 Audio Behavior</span>
                      <p>{tier.audioBehavior}</p>
                    </div>
                    <div className="vse-tier-tip">
                      <span className="vse-tier-tip-label">💡 Pro Tip</span>
                      <p>{tier.proTip}</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : null
          )}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          HOW TO STEP BY STEP
      ══════════════════════════════════════════ */}
      <section className="vse-section" id="how-to-change-video-speed-online" aria-labelledby="howto-title">
        <div className="vse-container">
          <div className="vse-section-tag">Step-by-Step Tutorial</div>
          <h2 id="howto-title" className="vse-section-h2">
            How to Change Video Speed Online in Under 3 Minutes: The Complete Process
          </h2>
          <p className="vse-section-intro">
            The whole workflow is shorter than brewing a coffee. Here's every step with professional-level detail,
            including the decisions most guides skip over.
          </p>

          <div className="vse-steps">
            {[
              {
                n: '01',
                title: 'Choose and Prepare Your Source Video',
                body: `Before uploading, consider your source quality. For slow-motion below 0.75×, shoot at 60fps or 120fps — standard 30fps footage slowed to 0.5× will look slightly choppy because the AI has fewer original frames to work with. For fast-forward and time-lapse (above 1.5×), any frame rate works perfectly. Format-wise, MP4 is ideal for upload and download compatibility. If you're working with iPhone HEVC footage, convert to H.264 MP4 first for fastest processing.

Maximum supported file size is 500MB. A 1080p MP4 at 30fps is roughly 1GB per 10 minutes before compression — use a tool like HandBrake to compress large raw files before upload without visible quality loss.`,
              },
              {
                n: '02',
                title: 'Select Your Speed — Preset or Custom',
                body: `Scenith\'s tool offers 8 named presets (Dramatic Slow at 0.5×, Cinematic at 0.75×, Natural at 1×, Social Fast at 1.25×, Reels Speed at 1.5×, Learning Mode at 2×, Timelapse at 4×, and Extreme Timelapse at 8×) plus a custom slider from 0.5× to 15×.

For most use cases, presets are sufficient. Use custom speed when you need a precise non-standard multiplier — for instance, speeding a 7-minute tutorial to exactly fit a 4-minute time slot requires 7/4 = 1.75× custom speed. The live preview in the player updates immediately when you select a preset, letting you hear the paced audio before committing to export.`,
              },
              {
                n: '03',
                title: 'Configure Export Quality',
                body: `Quality tiers matter more than most creators realize. At 720p (standard free tier), social media content looks fine on phone screens but shows compression on desktop or TV. For YouTube where viewers may watch in theater mode on large screens, 1080p is the minimum professional standard. For stock footage, commercial work, or any content displayed larger than a laptop screen, 1440p or 4K is worth the upgrade.

A critical technical note: export quality doesn't affect processing time as much as video length does. A 5-minute video at 4K takes roughly the same time as a 5-minute video at 1080p — the bottleneck is the speed-adjustment computation, not the encoding resolution.`,
              },
              {
                n: '04',
                title: 'Start Processing and Monitor Progress',
                body: `Processing happens server-side on Scenith's GPU-accelerated infrastructure. The progress indicator shows five pipeline stages: Download (source to server), Analyze (frame rate and codec detection), Process (speed adjustment computation), Encode (re-rendering at new tempo), and Upload (processed file back to CDN).

The "Process" stage is where the actual speed change happens and takes the most time. A 10-minute 1080p video at 2× speed typically completes the entire pipeline in 3–5 minutes. During processing, you can navigate away — the job continues server-side and you'll find it ready when you return to the tool.`,
              },
              {
                n: '05',
                title: 'Download, Optimize, and Upload to Your Platform',
                body: `After processing, download your MP4 immediately. The CDN link remains active but your storage space is limited — download before closing the tab.

Before uploading to social platforms: (1) Check aspect ratio — TikTok/Reels need 9:16, YouTube needs 16:9, and your speed-adjusted export inherits the original aspect ratio. Crop in your phone's camera roll or any basic editor if needed. (2) For Instagram and TikTok specifically, re-upload through the platform app rather than web interface — mobile uploads get the full optimization pipeline. (3) Write platform-native captions that reference the speed effect ("POV: 2× speed because y'all asked") — these prompts increase comment engagement on speed-change content.`,
              },
            ].map((step, i) => (
              <article key={i} className="vse-step">
                <div className="vse-step-num">{step.n}</div>
                <div className="vse-step-content">
                  <h3 className="vse-step-title">{step.title}</h3>
                  <p className="vse-step-body">{step.body}</p>
                </div>
              </article>
            ))}
          </div>

          <a
            href="https://scenith.in/tools/video-speed-modifier?utm_source=video_speed_editor_online&utm_medium=howto_cta&utm_campaign=speed_seo_tool"
            className="vse-main-cta"
            target="_blank"
            rel="noopener"
            style={{ display: 'inline-flex', marginTop: '2rem' }}
          >
            <span className="vse-cta-icon">🎬</span>
            <span className="vse-cta-text">Start Changing Video Speed — Free</span>
            <span className="vse-cta-arrow">→</span>
          </a>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SPEED REFERENCE TABLE
      ══════════════════════════════════════════ */}
      <section className="vse-section vse-section-dark" id="video-speed-reference-table" aria-labelledby="table-title">
        <div className="vse-container">
          <div className="vse-section-tag">Quick Reference</div>
          <h2 id="table-title" className="vse-section-h2">
            Speed Selection by Scenario: 12 Common Use Cases with Recommended Settings
          </h2>
          <p className="vse-section-intro">
            Stop guessing. This is the reference table professionals use when deciding how much to speed up or slow
            down footage for specific content types.
          </p>

          <div className="vse-table-wrap">
            <table className="vse-table" role="table">
              <caption className="vse-sr-only">Recommended video speeds by content scenario</caption>
              <thead>
                <tr>
                  <th scope="col">Content Scenario</th>
                  <th scope="col">Recommended Speed</th>
                  <th scope="col">Why It Works</th>
                </tr>
              </thead>
              <tbody>
                {SPEED_USE_CASE_TABLE.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'vse-tr-alt' : ''}>
                    <td>{row.scenario}</td>
                    <td><span className="vse-speed-badge">{row.recommended}</span></td>
                    <td>{row.why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PLATFORM GUIDE (tabs)
      ══════════════════════════════════════════ */}
      <section className="vse-section" id="video-speed-by-platform" aria-labelledby="platform-title">
        <div className="vse-container">
          <div className="vse-section-tag">Platform Playbooks</div>
          <h2 id="platform-title" className="vse-section-h2">
            Platform-by-Platform Video Speed Guide: TikTok, Reels, YouTube & More
          </h2>
          <p className="vse-section-intro">
            Each platform has its own algorithm preferences, audience expectations, and technical constraints.
            The same speed choice that goes viral on TikTok might perform poorly on LinkedIn. Here's the exact
            playbook for each major platform.
          </p>

          <div className="vse-platform-tabs" role="tablist" aria-label="Platform guides">
            {PLATFORM_GUIDES.map((p, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={activePlatform === i}
                className={`vse-platform-tab ${activePlatform === i ? 'active' : ''}`}
                onClick={() => setActivePlatform(i)}
              >
                <span>{p.icon}</span>
                <span>{p.name}</span>
              </button>
            ))}
          </div>

          {PLATFORM_GUIDES.map((p, i) =>
            activePlatform === i ? (
              <div key={i} className="vse-platform-panel" role="tabpanel">
                <div className="vse-platform-meta">
                  <div className="vse-pmeta-item">
                    <span className="vse-pmeta-label">Platform</span>
                    <span className="vse-pmeta-val">{p.icon} {p.name}</span>
                  </div>
                  <div className="vse-pmeta-item">
                    <span className="vse-pmeta-label">Recommended Speed</span>
                    <span className="vse-pmeta-val">{p.recommended}</span>
                  </div>
                  <div className="vse-pmeta-item">
                    <span className="vse-pmeta-label">Max Duration</span>
                    <span className="vse-pmeta-val">{p.maxDuration}</span>
                  </div>
                </div>
                <ul className="vse-platform-tips">
                  {p.tips.map((tip, j) => (
                    <li key={j}>
                      <span className="vse-tip-bullet" aria-hidden="true">›</span>
                      {tip}
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://scenith.in/tools/video-speed-modifier?utm_source=video_speed_editor_online&utm_medium=platform_${p.name.toLowerCase()}&utm_campaign=speed_seo_tool`}
                  className="vse-platform-cta"
                  target="_blank"
                  rel="noopener"
                >
                  Edit Video Speed for {p.name} →
                </a>
              </div>
            ) : null
          )}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          DEEP DIVE: SLOW-MO VS TIME-LAPSE
      ══════════════════════════════════════════ */}
      <section className="vse-section vse-section-dark" id="slow-motion-vs-time-lapse-online" aria-labelledby="slomo-title">
        <div className="vse-container">
          <div className="vse-section-tag">Deep Dive</div>
          <h2 id="slomo-title" className="vse-section-h2">
            Slow Motion vs. Time-Lapse: Understanding the Two Opposite Powers of Speed Control
          </h2>

          <div className="vse-versus">
            <div className="vse-versus-card">
              <div className="vse-versus-header">
                <span className="vse-versus-icon">🐌</span>
                <h3>Slow Motion</h3>
                <span className="vse-versus-range">0.5× – 0.9×</span>
              </div>
              <p>
                Slow motion is the art of expanding time. It lets viewers see what the naked eye cannot — the
                millisecond a basketball leaves a fingertip, the exact moment a fabric catches light, the subtle
                emotion crossing a subject's face before they compose themselves. This is why slow motion is the
                default choice for emotional, dramatic, and premium-feeling content.
              </p>
              <h4>When Slow Motion Transforms Content</h4>
              <ul className="vse-list">
                <li><strong>Sports and fitness:</strong> Breaking down technique at 0.5× allows coaching-level analysis for tutorial audiences.</li>
                <li><strong>Product reveals:</strong> Slowing down an unboxing or product drop to 0.5× signals quality and craftsmanship — luxury brands use this exclusively.</li>
                <li><strong>Nature and macro shots:</strong> Insects, water droplets, and fire behavior at 0.5× reveal invisible worlds that create genuine viewer wonder.</li>
                <li><strong>Dance and movement:</strong> Choreography at 0.75× reads as intentional elegance rather than technical slowing — the sweet spot for performance content.</li>
                <li><strong>Emotional storytelling:</strong> A character's reaction, a child's first steps, a competition winner's moment — all gain weight at 0.75×–0.8×.</li>
              </ul>
              <div className="vse-versus-tip">
                <strong>Technical requirement:</strong> For smooth slow motion below 0.7×, shoot at minimum 60fps.
                For 0.5× at cinema quality, shoot at 120fps (available on most modern smartphones). 30fps footage
                slowed below 0.7× produces visible frame stutter that reads as amateur.
              </div>
            </div>

            <div className="vse-versus-divider" aria-hidden="true">VS</div>

            <div className="vse-versus-card">
              <div className="vse-versus-header">
                <span className="vse-versus-icon">⏩</span>
                <h3>Time-Lapse</h3>
                <span className="vse-versus-range">4× – 15×</span>
              </div>
              <p>
                Time-lapse is the compression of time — making the invisible visible by condensing hours or days
                into watchable seconds. It transforms the mundane into the epic: a traffic-jammed city becomes a
                river of light; a week of construction becomes a two-minute narrative of creation. Time-lapse is
                the most technically forgiving speed technique because slight frame artifacts at high speeds are
                perceived as stylistic rather than errors.
              </p>
              <h4>When Time-Lapse Elevates Content</h4>
              <ul className="vse-list">
                <li><strong>Construction and progress documentation:</strong> Converting a 6-month building project into a 3-minute video is both practically useful and deeply satisfying to watch.</li>
                <li><strong>Natural phenomena:</strong> Clouds, sunsets, plant growth, and weather systems are fundamentally more compelling at 10×–15× than in real time.</li>
                <li><strong>Creative process documentation:</strong> Artists, designers, and makers who show their work at 8× get significantly more views than those who upload real-time recordings.</li>
                <li><strong>Urban scene-setting:</strong> City streets at 8× in a travel vlog B-roll sequence communicate energy and atmosphere in seconds rather than minutes.</li>
                <li><strong>Cooking and recipes:</strong> The prep-to-plate journey at 4×–6× is the most-shared cooking video format on TikTok and Reels.</li>
              </ul>
              <div className="vse-versus-tip">
                <strong>Technical requirement:</strong> Camera stability is critical — even minor vibration becomes
                jarring shaking at 10×. Use a tripod, weighted surface, or camera stabilizer. Remove all audio
                before time-lapse export and add ambient music (loopback tracks work best for looping time-lapses).
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          AUDIO SECTION
      ══════════════════════════════════════════ */}
      <section className="vse-section" id="audio-and-video-speed-changes" aria-labelledby="audio-title">
        <div className="vse-container">
          <div className="vse-section-tag">Often Overlooked</div>
          <h2 id="audio-title" className="vse-section-h2">
            The Audio Question: What Actually Happens to Sound When You Change Video Speed
          </h2>
          <p className="vse-section-intro">
            Audio is the most misunderstood aspect of video speed editing. Getting it right is the difference
            between professional output and amateur-sounding content.
          </p>

          <div className="vse-audio-grid">
            {[
              {
                speed: '0.5× – 0.7×',
                effect: 'Audio slows and deepens significantly',
                perceived: 'Low, rumbling, unnatural pitch',
                recommendation: 'Remove original audio. Add ambient music or sound design at normal speed.',
                icon: '🔇',
              },
              {
                speed: '0.75× – 0.9×',
                effect: 'Audio slows perceptibly, slight pitch drop',
                perceived: 'Noticeable but potentially usable for music',
                recommendation: 'Use pitch correction (applied automatically). Music may sound fine; spoken word may be usable.',
                icon: '🎵',
              },
              {
                speed: '1×',
                effect: 'No change',
                perceived: 'Original audio preserved perfectly',
                recommendation: 'No action needed.',
                icon: '✅',
              },
              {
                speed: '1.25× – 1.5×',
                effect: 'Audio speeds up, slight pitch rise',
                perceived: 'Slightly chipmunk — automatic pitch correction makes it natural',
                recommendation: 'Pitch correction is applied automatically. Speech remains clear and natural.',
                icon: '🔊',
              },
              {
                speed: '2× – 3×',
                effect: 'Audio becomes fast and high-pitched',
                perceived: 'Unintelligible for speech; music is recognizable but unpleasant',
                recommendation: 'Remove or mute original audio. Overlay background music at the sped-up video.',
                icon: '🎶',
              },
              {
                speed: '4× and above',
                effect: 'Audio is a high-pitched squeal',
                perceived: 'Completely unusable — no pitch correction can fix this',
                recommendation: 'Always remove audio. Time-lapse is a visual-only format by convention.',
                icon: '🔕',
              },
            ].map((item, i) => (
              <div key={i} className="vse-audio-card">
                <div className="vse-audio-speed">{item.icon} {item.speed}</div>
                <div className="vse-audio-effect">{item.effect}</div>
                <div className="vse-audio-perceived"><em>Perceived:</em> {item.perceived}</div>
                <div className="vse-audio-rec"><strong>Action:</strong> {item.recommendation}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          MIDPAGE CTA
      ══════════════════════════════════════════ */}
      <div className="vse-mid-cta">
        <div className="vse-mid-cta-inner">
          <p>Ready to apply what you've learned?</p>
          <h3>Change your video speed now — it takes under 3 minutes.</h3>
          <a
            href="https://scenith.in/tools/video-speed-modifier?utm_source=video_speed_editor_online&utm_medium=midpage_cta&utm_campaign=speed_seo_tool"
            className="vse-main-cta"
            target="_blank"
            rel="noopener"
          >
            <span className="vse-cta-icon">⚡</span>
            <span className="vse-cta-text">Open Video Speed Editor — Free</span>
            <span className="vse-cta-arrow">→</span>
          </a>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          FAQ
      ══════════════════════════════════════════ */}
      <section className="vse-section" id="faq-online-video-speed-editor" aria-labelledby="faq-title">
        <div className="vse-container">
          <div className="vse-section-tag">FAQ</div>
          <h2 id="faq-title" className="vse-section-h2">
            Frequently Asked Questions About Online Video Speed Editors
          </h2>

          <div className="vse-faq-list">
            {FAQ_ITEMS.map((item, i) => (
              <div key={i} className={`vse-faq-item ${openFaq === i ? 'open' : ''}`}>
                <button
                  className="vse-faq-q"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span>{item.q}</span>
                  <span className="vse-faq-icon">{openFaq === i ? '−' : '+'}</span>
                </button>
                <div className="vse-faq-a">
                  <p>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════════ */}
      <section className="vse-final-cta" id="start-editing-video-speed" aria-labelledby="final-cta-title">
        <div className="vse-final-bg" aria-hidden="true">
          <div className="vse-final-blob-1" />
          <div className="vse-final-blob-2" />
        </div>
        <div className="vse-final-inner">
          <div className="vse-section-tag" style={{ color: 'rgba(255,255,255,0.5)' }}>Start Now</div>
          <h2 id="final-cta-title" className="vse-final-h2">
            Your Video. <em>Your Pace.</em><br />
            <span className="vse-final-accent">Zero Software Required.</span>
          </h2>
          <p className="vse-final-sub">
            From cinematic 0.5× slow motion to epic 15× time-lapse — the full speed spectrum is one click away.
            No Premiere. No After Effects. No learning curve. Just upload, adjust, download.
          </p>

          <div className="vse-final-features">
            {[
              '✅ 0.5× to 15× full range',
              '✅ MP4, MOV, AVI, MKV support',
              '✅ Automatic audio pitch correction',
              '✅ Works on any device, any OS',
              '✅ No watermark on export',
              '✅ GPU-accelerated processing',
            ].map((f, i) => (
              <span key={i} className="vse-final-feat">{f}</span>
            ))}
          </div>

          <a
            href="https://scenith.in/tools/video-speed-modifier?utm_source=video_speed_editor_online&utm_medium=final_cta&utm_campaign=speed_seo_tool"
            className="vse-main-cta vse-final-btn"
            target="_blank"
            rel="noopener"
            aria-label="Open Scenith Video Speed Modifier — free"
          >
            <span className="vse-cta-icon">🎬</span>
            <span className="vse-cta-text">Edit Video Speed Free — Open Tool</span>
            <span className="vse-cta-arrow">→</span>
          </a>
          <p className="vse-final-micro">Takes 3 minutes from upload to download · No account needed to preview</p>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          RELATED TOOLS
      ══════════════════════════════════════════ */}
      <section className="vse-related" aria-labelledby="related-title">
        <div className="vse-container">
          <h2 id="related-title" className="vse-related-h2">Complete Your Video Editing Workflow</h2>
          <div className="vse-related-grid">
            {[
              {
                icon: '🎤',
                title: 'AI Voice Generator',
                desc: 'Once your video speed is set, add professional AI voiceover in 20+ languages. Perfect for tutorials and explainers.',
                href: 'https://scenith.in/tools/ai-voice-generation?utm_source=video_speed_editor_online&utm_medium=related&utm_campaign=speed_seo_tool',
                badge: 'Popular',
              },
              {
                icon: '📝',
                title: 'Add Subtitles to Video',
                desc: 'Auto-generate captions that sync to your speed-adjusted video. Required for accessibility and social media reach.',
                href: 'https://scenith.in/tools/add-subtitles-to-videos?utm_source=video_speed_editor_online&utm_medium=related&utm_campaign=speed_seo_tool',
                badge: 'Trending',
              },
              {
                icon: '🎨',
                title: 'AI Image Generator',
                desc: 'Create custom thumbnails for your speed-edited videos. AI-generated, unique, and click-worthy.',
                href: 'https://scenith.in/tools/ai-image-generation?utm_source=video_speed_editor_online&utm_medium=related&utm_campaign=speed_seo_tool',
                badge: 'New',
              },
            ].map((t, i) => (
              <a key={i} href={t.href} className="vse-related-card" target="_blank" rel="noopener">
                <span className="vse-related-icon">{t.icon}</span>
                <span className="vse-related-badge">{t.badge}</span>
                <h3 className="vse-related-title">{t.title}</h3>
                <p className="vse-related-desc">{t.desc}</p>
                <span className="vse-related-link">Open Tool →</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}