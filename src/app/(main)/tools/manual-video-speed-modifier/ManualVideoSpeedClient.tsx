// app/tools/manual-video-speed-modifier/ManualVideoSpeedClient.tsx
'use client';

import React from 'react';
import Script from 'next/script';
import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import '../../../../../styles/tools/ManualVideoSpeed.css';

const TOOL_URL =
  'https://scenith.in/tools/video-speed-modifier?utm_source=manual-speed-lp&utm_medium=cta&utm_campaign=manual-speed-modifier';

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const CONTROL_METHODS = [
  {
    icon: '🎛️',
    title: 'Exact Numeric Input',
    desc: 'Type any speed value between 0.5x and 15x directly. No rounding, no snapping — 1.37x is just as valid as 2x.',
  },
  {
    icon: '🖱️',
    title: 'Drag Slider Control',
    desc: 'Slide smoothly across the full speed range and watch your video update in real-time before committing to export.',
  },
  {
    icon: '⚡',
    title: 'One-Click Presets',
    desc: 'Jump instantly to tested speed presets (0.5x, 0.75x, 1.25x, 1.5x, 2x, 4x, 8x) crafted for specific use cases.',
  },
  {
    icon: '👁️',
    title: 'Live Preview Playback',
    desc: "See exactly how your speed-adjusted video looks and sounds before exporting. No surprises, no wasted renders.",
  },
  {
    icon: '🎵',
    title: 'Audio Pitch Lock',
    desc: 'Our processor automatically corrects audio pitch so voices and music stay natural at any speed — no chipmunk effects.',
  },
  {
    icon: '📐',
    title: 'Quality Selection',
    desc: 'Manually choose export resolution from 144p to 4K. Full control over output quality, not just speed.',
  },
];

const PRECISION_USE_CASES = [
  {
    emoji: '🎬',
    title: 'Cinematographers',
    speed: '0.5x – 0.8x',
    scenario:
      'A frame rate mismatch between 24fps and 60fps source needs precise 0.4x correction, not a rough "slow-motion" preset. Manual input is the only way to get this right.',
  },
  {
    emoji: '🏫',
    title: 'Educators & Trainers',
    speed: '1.15x – 1.35x',
    scenario:
      'Lecture recordings that need to be 18% faster to hit a platform time limit without sounding rushed. A slider preset of 1.25x overshoots — 1.18x is the sweet spot.',
  },
  {
    emoji: '🔬',
    title: 'Sports Scientists',
    speed: '0.25x – 0.5x',
    scenario:
      'Analyzing a 0.3-second golf swing frame-by-frame requires 0.25x or slower. No preset covers this; only a manual numeric input gets you there.',
  },
  {
    emoji: '🎵',
    title: 'Music Producers',
    speed: '0.95x – 1.05x',
    scenario:
      "Syncing a 101 BPM video clip to a 96 BPM track requires a 0.95x speed reduction. That's not a 'slow-motion' — it's a precise tempo correction only manual input supports.",
  },
  {
    emoji: '🏗️',
    title: 'Documentary Makers',
    speed: '6x – 12x',
    scenario:
      '14 hours of construction footage needs to compress into exactly 4.2 minutes for a broadcast segment. Manual calculation: 14hr × 60 ÷ 4.2min = 200x. Choose the closest quality setting and export.',
  },
  {
    emoji: '💼',
    title: 'Agencies & Freelancers',
    speed: 'Client-specified',
    scenario:
      "Clients specify exact deliverable specs: '20% slower than source for the reveal shot.' That's 0.8x — not a preset, not approximate. Manual entry is the professional standard.",
  },
];

const SPEED_MATH = [
  {
    scenario: 'Make a 2-minute clip fit a 60-second Reel',
    formula: '60 ÷ 120 = 0.5x',
    input: 'Type: 0.5',
  },
  {
    scenario: 'Speed up a 45-min lecture to watch in 30 min',
    formula: '45 ÷ 30 = 1.5x',
    input: 'Type: 1.5',
  },
  {
    scenario: 'Match video tempo to 98 BPM from 104 BPM source',
    formula: '98 ÷ 104 = 0.942x',
    input: 'Type: 0.94',
  },
  {
    scenario: 'Compress 8 hours of construction to 3 minutes',
    formula: '480 ÷ 3 = 160x → use 15x + trim',
    input: 'Type: 15',
  },
  {
    scenario: 'Slow a 60fps clip to feel like 24fps slow-mo',
    formula: '24 ÷ 60 = 0.4x',
    input: 'Type: 0.4',
  },
  {
    scenario: 'Stretch a 10-second clip to 16 seconds for dramatic effect',
    formula: '10 ÷ 16 = 0.625x',
    input: 'Type: 0.625',
  },
];

const WORKFLOW_STEPS = [
  {
    num: '01',
    title: 'Upload Any Video Format',
    body: 'Drop in MP4, MOV, AVI, MKV, WebM, FLV or MPEG. Source file is encrypted and stored only for your session — never shared, auto-deleted after processing.',
  },
  {
    num: '02',
    title: 'Calculate Your Exact Speed',
    body: 'Use our speed formula guide (target duration ÷ source duration = speed multiplier) or enter your value directly. The tool accepts any value from 0.5 to 15 with two decimal places of precision.',
  },
  {
    num: '03',
    title: 'Preview Before You Commit',
    body: "Play back the speed-adjusted preview directly in your browser. Scrub through the timeline, check the audio, and confirm it's exactly right before triggering the export job.",
  },
  {
    num: '04',
    title: 'Choose Output Quality',
    body: 'Select export resolution from 144p to 4K depending on your plan. Professional exports stay at source quality — no automatic compression or lossy re-encoding unless you choose a lower resolution.',
  },
  {
    num: '05',
    title: 'Export and Download MP4',
    body: "Click 'Start Processing' and your video renders server-side using FFmpeg with hardware acceleration. Download a clean, watermark-free MP4 in under 3 minutes for most files.",
  },
];

const FAQS = [
  {
    q: 'What does "manual" video speed modification mean?',
    a: "Manual speed modification means you input the exact speed multiplier yourself — whether that's 0.5x, 1.37x, or 8.25x — rather than selecting a fixed preset like 'slow-motion' or 'fast forward'. You control the precise numeric value, calculated for your specific use case.",
  },
  {
    q: 'Can I enter any speed value, or only round numbers?',
    a: 'You can enter any value between 0.5x and 15x with up to two decimal places of precision. 1.35x, 0.72x, 6.5x — all valid. The tool uses the exact value you input for processing, not a rounded approximation.',
  },
  {
    q: 'How do I calculate the exact speed I need?',
    a: 'The formula is simple: divide your target duration by your source duration. Want a 90-second video to fit in 60 seconds? 60 ÷ 90 = 0.667x. Need to make a 5-minute clip play in 3 minutes? 3 ÷ 5 = 0.6x. Input that precise value for frame-accurate results.',
  },
  {
    q: 'Does manual speed change affect audio quality?',
    a: "Scenith's processor automatically applies pitch correction at any speed. At extreme values (above 3x or below 0.5x), audio quality naturally degrades regardless of the tool used — in these cases we recommend replacing the audio track with music or a new voiceover for professional output.",
  },
  {
    q: 'What is the most precise speed value the tool accepts?',
    a: 'The tool processes two decimal places of precision, meaning 0.5x through 15.0x in 0.01x increments. You can input 0.67x, 1.33x, 7.25x and the export will reflect your exact specification.',
  },
  {
    q: 'Is there a difference between this and an automatic speed tool?',
    a: 'Automatic tools apply a fixed algorithmic speed based on content analysis. Manual tools give you full numeric control — essential when you have a precise time requirement, a specific BPM match, or a frame rate correction need. Use manual when the exact value matters.',
  },
  {
    q: 'Can I preview the video at my chosen speed before exporting?',
    a: "Yes. After uploading and setting your speed value, the built-in preview player applies your speed setting in real-time via the browser's native video API. You hear the pitch-corrected audio and see the exact pacing before triggering the server-side export.",
  },
  {
    q: 'What video formats are supported for manual speed modification?',
    a: 'Upload MP4, MOV, AVI, MKV, WebM, MPEG, and FLV. Output is always a clean H.264 MP4 at your selected resolution. Aspect ratio, color profile, and subtitle tracks are preserved through the speed processing pipeline.',
  },
];

const COMPARISONS = [
  ['Precision', '✅ Exact decimal input (0.01x steps)', '⚠️ Limited presets only', '⚠️ Mobile presets only', '✅ Timeline keyframes (complex)'],
  ['Speed Formula Guide', '✅ Built-in calculator logic', '❌ None', '❌ None', '❌ None'],
  ['Live Preview', '✅ Real-time browser preview', '✅ Yes', '✅ Yes', '✅ Yes'],
  ['Audio Pitch Correction', '✅ Automatic at all speeds', '⚠️ Manual toggle', '⚠️ Manual toggle', '⚠️ Requires plugin'],
  ['Free & No Watermark', '✅ Always', '⚠️ Watermark on free tier', '⚠️ Watermark on free tier', '✅ Paid only'],
  ['Export Quality Choice', '✅ 144p – 4K', '⚠️ 1080p max (free)', '⚠️ 1080p max', '✅ Any (complex setup)'],
  ['Works on Mobile', '✅ Any browser', '✅ App only', '✅ App only', '❌ Desktop only'],
  ['Processing Speed', '✅ ~2 min server-side', '✅ Fast', '✅ Fast', '❌ 10–30 min local render'],
];

export default function ManualVideoSpeedClient() {
  return (
    <>
      {/* ── STRUCTURED DATA ── */}
      <Script
        id="ld-breadcrumb-manual"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://scenith.in' },
              { '@type': 'ListItem', position: 2, name: 'Tools', item: 'https://scenith.in/tools' },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'Manual Video Speed Modifier',
                item: 'https://scenith.in/tools/manual-video-speed-modifier',
              },
            ],
          }),
        }}
      />

      <Script
        id="ld-faq-manual"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: FAQS.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          }),
        }}
      />

      <Script
        id="ld-howto-manual"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: 'How to Manually Modify Video Speed with Precise Control',
            description:
              'Step-by-step guide to calculating and applying an exact custom video speed using Scenith.',
            step: WORKFLOW_STEPS.map((s) => ({
              '@type': 'HowToStep',
              name: s.title,
              text: s.body,
            })),
          }),
        }}
      />

      <Script
        id="ld-software-manual"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'Scenith Manual Video Speed Modifier',
            applicationCategory: 'MultimediaApplication',
            operatingSystem: 'Web Browser',
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.9',
              reviewCount: '1547',
            },
            featureList: [
              'Exact decimal speed input (0.01x precision)',
              'Live browser preview before export',
              'Automatic audio pitch correction',
              'Export resolutions from 144p to 4K',
              'No watermark on any plan',
              'Supports MP4, MOV, AVI, MKV, WebM, FLV',
            ],
          }),
        }}
      />

      <div className="mv-page">
        {/* ── BREADCRUMB ── */}
        <nav aria-label="Breadcrumb" className="mv-breadcrumb">
          <ol itemScope itemType="https://schema.org/BreadcrumbList">
            {[
              { href: '/', label: 'Home', pos: 1 },
              { href: '/tools', label: 'Tools', pos: 2 },
              { href: null, label: 'Manual Video Speed Modifier', pos: 3 },
            ].map((crumb) => (
              <li
                key={crumb.pos}
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                {crumb.href ? (
                  <Link href={crumb.href} itemProp="item">
                    <span itemProp="name">{crumb.label}</span>
                  </Link>
                ) : (
                  <span itemProp="name">{crumb.label}</span>
                )}
                <meta itemProp="position" content={String(crumb.pos)} />
                {crumb.pos < 3 && <span className="mv-bc-sep" aria-hidden>›</span>}
              </li>
            ))}
          </ol>
        </nav>

        {/* ── HERO ── */}
        <section className="mv-hero" id="hero" aria-labelledby="mv-hero-h1">
          <div className="mv-hero-bg" aria-hidden="true">
            <div className="mv-glow mv-glow-a" />
            <div className="mv-glow mv-glow-b" />
            <div className="mv-grid" />
          </div>

          <motion.div
            className="mv-hero-inner mv-container"
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            <div className="mv-hero-text">
              <motion.div variants={fadeUp} className="mv-eyebrow">
                <span className="mv-eyebrow-dot" aria-hidden />
                Precision Speed Control
              </motion.div>

              <motion.h1 variants={fadeUp} id="mv-hero-h1" className="mv-h1">
                Manual Video Speed Modifier —{' '}
                <span className="mv-accent">Exact Control,</span>{' '}
                Every Frame
              </motion.h1>

              <motion.p variants={fadeUp} className="mv-hero-sub">
                Don't settle for preset slow-motion or generic fast-forward. Type{' '}
                <strong>any exact speed</strong> between 0.5x and 15x — like 0.67x to make a
                90-second clip fit a 60-second slot — and export a clean MP4 with no
                watermark.
              </motion.p>

              {/* Speed formula callout */}
              <motion.div variants={fadeUp} className="mv-formula-callout">
                <span className="mv-formula-label">Speed Formula</span>
                <code className="mv-formula-code">
                  Target Duration ÷ Source Duration = Your Speed Value
                </code>
                <span className="mv-formula-eg">e.g. 60s ÷ 90s = <strong>0.667x</strong></span>
              </motion.div>

              {/* PRIMARY CTA */}
              <motion.div variants={fadeUp} className="mv-cta-wrap">
                
                <a  href={TOOL_URL}
                  className="mv-cta-btn"
                  aria-label="Open the manual video speed modifier tool"
                >
                  <span aria-hidden>🎛️</span>
                  Open Manual Speed Modifier — Free
                  <span className="mv-cta-arrow" aria-hidden>→</span>
                </a>
                <p className="mv-cta-note">
                  Decimal precision · Live preview · No watermark · Instant MP4
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className="mv-trust-row">
                {[
                  '✅ 0.01x precision',
                  '⚡ ~2 min processing',
                  '🔒 No watermark ever',
                  '📥 Free MP4 export',
                  '📱 Browser-based',
                ].map((t) => (
                  <span key={t} className="mv-trust-chip">{t}</span>
                ))}
              </motion.div>
            </div>

            <motion.figure
              className="mv-hero-visual"
              initial={{ opacity: 0, x: 36 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.85, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src="/images/VideoSpeedModifierSS.png"
                alt="Scenith manual video speed modifier showing numeric speed input and live preview"
                width={760}
                height={420}
                priority
                className="mv-hero-img"
              />
              <figcaption className="sr-only">
                Manual video speed modifier interface with exact decimal input, speed presets and live video preview
              </figcaption>
            </motion.figure>
          </motion.div>
        </section>

        {/* ── WHY MANUAL CONTROL MATTERS ── */}
        <section
          className="mv-section mv-why"
          id="why-manual-control"
          aria-labelledby="mv-why-title"
        >
          <motion.div
            className="mv-container"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.span variants={fadeUp} className="mv-section-tag">The Precision Argument</motion.span>
            <motion.h2 variants={fadeUp} id="mv-why-title" className="mv-section-h2">
              Why "Close Enough" Isn't Good Enough: The Case for Manual Speed Control
            </motion.h2>
            <motion.p variants={fadeUp} className="mv-section-desc">
              Preset-based speed tools are built for casual creators. Professional results demand
              the ability to input an exact number — not pick the nearest option from a dropdown.
            </motion.p>

            <motion.div variants={stagger} className="mv-why-grid">
              {[
                {
                  icon: '📏',
                  title: 'Time-Exact Deliverables',
                  body: 'Broadcast, advertising, and platform requirements are non-negotiable. A commercial slot is exactly 30 seconds — not 29 or 31. Only manual numeric input guarantees frame-accurate duration matching.',
                },
                {
                  icon: '🎵',
                  title: 'BPM & Tempo Sync',
                  body: 'Video editors syncing footage to music need to match exact BPM ratios. A 104 BPM source synced to a 96 BPM track requires exactly 0.923x — a value no preset can provide.',
                },
                {
                  icon: '🎞️',
                  title: 'Frame Rate Correction',
                  body: 'Converting 60fps footage shot for slow-motion to a 24fps timeline requires exactly 0.4x speed. Any approximation creates judder or incorrect playback duration.',
                },
                {
                  icon: '💡',
                  title: 'Iterative Refinement',
                  body: "Experienced editors don't pick a speed and hope for the best. They set 1.2x, preview, decide it needs to be 1.15x, adjust, preview again. Manual input enables this rapid iteration loop.",
                },
              ].map((c) => (
                <motion.article variants={fadeUp} key={c.title} className="mv-why-card">
                  <span className="mv-why-icon" aria-hidden>{c.icon}</span>
                  <h3>{c.title}</h3>
                  <p>{c.body}</p>
                </motion.article>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* ── CONTROL METHODS ── */}
        <section
          className="mv-section mv-controls"
          id="control-methods"
          aria-labelledby="mv-controls-title"
        >
          <motion.div
            className="mv-container"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.span variants={fadeUp} className="mv-section-tag">Input Methods</motion.span>
            <motion.h2 variants={fadeUp} id="mv-controls-title" className="mv-section-h2">
              Six Ways to Control Your Video Speed Manually
            </motion.h2>
            <motion.p variants={fadeUp} className="mv-section-desc">
              Whether you're a precision-first professional or a creator who just wants more
              control than a preset offers, the tool adapts to your workflow.
            </motion.p>

            <motion.div variants={stagger} className="mv-controls-grid">
              {CONTROL_METHODS.map((m) => (
                <motion.article variants={fadeUp} key={m.title} className="mv-control-card">
                  <span className="mv-control-icon" aria-hidden>{m.icon}</span>
                  <h3>{m.title}</h3>
                  <p>{m.desc}</p>
                </motion.article>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="mv-controls-cta">
              <a href={TOOL_URL} className="mv-cta-btn mv-cta-mid">
                <span aria-hidden>🎛️</span> Try All Input Methods Free
                <span className="mv-cta-arrow" aria-hidden>→</span>
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* ── SPEED MATH GUIDE ── */}
        <section
          className="mv-section mv-math"
          id="speed-calculation-guide"
          aria-labelledby="mv-math-title"
        >
          <motion.div
            className="mv-container"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.span variants={fadeUp} className="mv-section-tag">Speed Calculator</motion.span>
            <motion.h2 variants={fadeUp} id="mv-math-title" className="mv-section-h2">
              How to Calculate the Exact Speed Value You Need
            </motion.h2>
            <motion.p variants={fadeUp} className="mv-section-desc">
              Every manual speed modification starts with a simple formula. Here are the six
              most common real-world calculations, solved and ready to input.
            </motion.p>

            <motion.div variants={fadeUp} className="mv-formula-master">
              <div className="mv-formula-master-inner">
                <span className="mv-formula-master-label">Universal Formula</span>
                <div className="mv-formula-master-eq">
                  Speed = Target Duration ÷ Source Duration
                </div>
                <p className="mv-formula-master-note">
                  Works for any unit: seconds, minutes, or hours. Result below 1 = slower.
                  Result above 1 = faster.
                </p>
              </div>
            </motion.div>

            <motion.div variants={stagger} className="mv-math-grid">
              {SPEED_MATH.map((row) => (
                <motion.div variants={fadeUp} key={row.scenario} className="mv-math-card">
                  <p className="mv-math-scenario">{row.scenario}</p>
                  <div className="mv-math-calc">
                    <span className="mv-math-formula">{row.formula}</span>
                    <span className="mv-math-input">{row.input}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* ── PRECISION USE CASES ── */}
        <section
          className="mv-section mv-usecases"
          id="precision-use-cases"
          aria-labelledby="mv-uc-title"
        >
          <motion.div
            className="mv-container"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.span variants={fadeUp} className="mv-section-tag">Who Needs Manual Control</motion.span>
            <motion.h2 variants={fadeUp} id="mv-uc-title" className="mv-section-h2">
              Professionals Who Rely on Exact Speed Values
            </motion.h2>
            <motion.p variants={fadeUp} className="mv-section-desc">
              Manual speed control isn't a power-user niche — it's the standard workflow for
              anyone with a specific output requirement.
            </motion.p>

            <motion.div variants={stagger} className="mv-uc-grid">
              {PRECISION_USE_CASES.map((uc) => (
                <motion.article variants={fadeUp} key={uc.title} className="mv-uc-card">
                  <div className="mv-uc-head">
                    <span className="mv-uc-emoji" aria-hidden>{uc.emoji}</span>
                    <div>
                      <h3 className="mv-uc-title">{uc.title}</h3>
                      <span className="mv-uc-speed">{uc.speed}</span>
                    </div>
                  </div>
                  <p className="mv-uc-body">{uc.scenario}</p>
                </motion.article>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* ── WORKFLOW STEPS ── */}
        <section
          className="mv-section mv-workflow"
          id="how-it-works"
          aria-labelledby="mv-workflow-title"
        >
          <motion.div
            className="mv-container"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.span variants={fadeUp} className="mv-section-tag">5-Step Workflow</motion.span>
            <motion.h2 variants={fadeUp} id="mv-workflow-title" className="mv-section-h2">
              How to Manually Modify Video Speed — Step by Step
            </motion.h2>

            <motion.div variants={stagger} className="mv-steps">
              {WORKFLOW_STEPS.map((step) => (
                <motion.article variants={fadeUp} key={step.num} className="mv-step">
                  <div className="mv-step-num" aria-hidden>{step.num}</div>
                  <div className="mv-step-body">
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* ── COMPARISON TABLE ── */}
        <section
          className="mv-section mv-compare"
          id="tool-comparison"
          aria-labelledby="mv-compare-title"
        >
          <motion.div
            className="mv-container"
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true }}
          >
            <span className="mv-section-tag">Tool Comparison</span>
            <h2 id="mv-compare-title" className="mv-section-h2">
              Scenith vs Other Manual Video Speed Tools
            </h2>
            <p className="mv-section-desc">
              Not all speed editors support precise manual input. Here's how the leading tools
              compare on what matters most to precision-focused creators.
            </p>

            <div className="mv-table-wrap">
              <table className="mv-compare-table">
                <caption className="sr-only">
                  Comparison of manual video speed modifier tools for precise creators
                </caption>
                <thead>
                  <tr>
                    <th scope="col">Feature</th>
                    <th scope="col" className="mv-col-hl">Scenith</th>
                    <th scope="col">CapCut</th>
                    <th scope="col">InShot</th>
                    <th scope="col">Adobe Premiere</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISONS.map(([feat, ...cols]) => (
                    <tr key={feat}>
                      <td>{feat}</td>
                      {cols.map((c, i) => (
                        <td key={i} className={i === 0 ? 'mv-col-hl' : ''}>{c}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </section>

        {/* ── DEEP CONTENT: MANUAL vs AUTO ── */}
        <section
          className="mv-section mv-deep"
          id="manual-vs-auto"
          aria-labelledby="mv-deep-title"
        >
          <motion.div
            className="mv-container"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.span variants={fadeUp} className="mv-section-tag">Manual vs Automatic</motion.span>
            <motion.h2 variants={fadeUp} id="mv-deep-title" className="mv-section-h2">
              Manual Speed Modification vs Automatic Speed Tools: Full Breakdown
            </motion.h2>

            <motion.div variants={stagger} className="mv-deep-blocks">
              <motion.div variants={fadeUp} className="mv-deep-block">
                <h3>What Is Manual Video Speed Modification?</h3>
                <p>
                  Manual video speed modification is the process of specifying an exact numeric
                  multiplier to apply to a video's playback rate. Unlike automatic tools that offer
                  preset options (slow-motion, normal, fast-forward), a manual modifier accepts any
                  decimal value — 0.5x, 0.92x, 1.37x, 6.5x — and applies it with mathematical
                  precision to every frame of the source video.
                </p>
                <p>
                  The underlying technology (FFmpeg's <code>setpts</code> and <code>atempo</code>{' '}
                  filters) is the same regardless of whether the interface is manual or preset-based.
                  The difference is entirely in the precision of the input value passed to the
                  processor.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className="mv-deep-block">
                <h3>When to Use Manual Control vs Presets</h3>
                <div className="mv-deep-split">
                  <div className="mv-deep-col mv-deep-col-yes">
                    <h4>✅ Use Manual Input When:</h4>
                    <ul>
                      <li>You have a specific target duration to hit</li>
                      <li>You're matching video tempo to a specific BPM</li>
                      <li>You're correcting a frame rate mismatch</li>
                      <li>A client has specified an exact speed value</li>
                      <li>You're iterating and need fine adjustments (1.2x → 1.15x)</li>
                      <li>The precision of the output matters professionally</li>
                    </ul>
                  </div>
                  <div className="mv-deep-col mv-deep-col-no">
                    <h4>⚡ Use Presets When:</h4>
                    <ul>
                      <li>The exact speed value doesn't matter (just "faster" or "slower")</li>
                      <li>You're quickly previewing different speed feels</li>
                      <li>You're creating casual social content without strict specs</li>
                      <li>You want a quick starting point to adjust from</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="mv-deep-block">
                <h3>The Technical Reality of Speed Modification</h3>
                <p>
                  Under the hood, all video speed modification works by altering the presentation
                  timestamps (PTS) of each frame. A 1.5x speed change means frames are presented
                  1.5x faster — the 30th frame arrives at what would have been the 20th frame's
                  timestamp. FFmpeg's <code>setpts=PTS/1.5</code> filter handles this mathematically.
                </p>
                <p>
                  Manual input matters here because FFmpeg accepts any floating point multiplier.
                  There is no technical reason to round to a "preset" value — the processor
                  handles 1.337x just as cleanly as 1.5x. The only reason tools offer presets is
                  for UX simplicity. When precision is your priority, bypass the UX layer and
                  input the mathematically correct value directly.
                </p>
                <p>
                  Audio handling adds complexity: FFmpeg's <code>atempo</code> filter supports
                  speed changes from 0.5x to 2x natively. For more extreme values, the filter
                  chains multiple passes (e.g., 4x = 2x × 2x). Scenith handles this chaining
                  automatically regardless of the speed value you input.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* ── BIG MID-PAGE CTA ── */}
        <section className="mv-section mv-mid-cta" aria-label="Open the speed modifier tool">
          <motion.div
            className="mv-container"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
          >
            <div className="mv-mid-cta-card">
              <div className="mv-mid-cta-glow" aria-hidden />
              <p className="mv-mid-cta-eyebrow">Precision. Not Presets.</p>
              <h2 className="mv-mid-cta-h2">
                Enter Your Exact Speed Value —{' '}
                <span className="mv-accent">Export in Under 3 Minutes</span>
              </h2>
              <p className="mv-mid-cta-sub">
                30,000+ creators already use Scenith for precise speed control. Free to use,
                no watermark, no account required to preview.
              </p>
              <a href={TOOL_URL} className="mv-cta-btn mv-cta-lg">
                <span aria-hidden>🎛️</span>
                Open Manual Speed Modifier — Free
                <span className="mv-cta-arrow" aria-hidden>→</span>
              </a>
              <div className="mv-mid-trust">
                <span>⭐⭐⭐⭐⭐ 4.9/5 rating</span>
                <span>·</span>
                <span>30,000+ users</span>
                <span>·</span>
                <span>0.01x precision</span>
                <span>·</span>
                <span>No watermark</span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ── FAQ ── */}
        <section
          className="mv-section mv-faq"
          id="faq"
          aria-labelledby="mv-faq-title"
        >
          <motion.div
            className="mv-container"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.span variants={fadeUp} className="mv-section-tag">FAQs</motion.span>
            <motion.h2 variants={fadeUp} id="mv-faq-title" className="mv-section-h2">
              Frequently Asked Questions — Manual Video Speed Modifier
            </motion.h2>

            <motion.div variants={stagger} className="mv-faq-grid">
              {FAQS.map((faq) => (
                <motion.article variants={fadeUp} key={faq.q} className="mv-faq-item">
                  <h3 className="mv-faq-q">{faq.q}</h3>
                  <p className="mv-faq-a">{faq.a}</p>
                </motion.article>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="mv-section mv-final-cta" aria-label="Final call to action">
          <motion.div
            className="mv-container mv-final-inner"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true }}
          >
            <h2 className="mv-final-h2">
              Stop Rounding. Start Inputting the Exact Speed You Need.
            </h2>
            <p className="mv-final-sub">
              Presets are for guessing. Manual input is for professionals. Whether it's 0.667x,
              1.33x, or 7.5x — Scenith processes your exact value and delivers a clean MP4 in
              minutes.
            </p>
            <a href={TOOL_URL} className="mv-cta-btn mv-cta-lg">
              <span aria-hidden>🎛️</span>
              Modify Video Speed Manually — Free
              <span className="mv-cta-arrow" aria-hidden>→</span>
            </a>
            <p className="mv-final-links">
              Also explore:{' '}
              <Link href="/tools/video-speed-modifier">Video Speed Modifier</Link>
              {' · '}
              <Link href="/tools/video-speed-for-youtube-shorts">Speed for YouTube Shorts</Link>
              {' · '}
              <Link href="/tools">All AI Video Tools</Link>
              {' · '}
              <Link href="/pricing">Plans & Pricing</Link>
            </p>
          </motion.div>
        </section>
      </div>
    </>
  );
}