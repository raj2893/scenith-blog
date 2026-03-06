// app/tools/video-speed-for-youtube-shorts/VideoSpeedYouTubeShortsClient.tsx
'use client';

import React, { useRef } from 'react';
import Script from 'next/script';
import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import '../../../../../styles/tools/VideoSpeedYouTubeShorts.css';

const TOOL_URL =
  'https://scenith.in/tools/video-speed-modifier?utm_source=youtube-shorts-lp&utm_medium=cta&utm_campaign=shorts-speed-tool';

const SPEED_USE_CASES = [
  {
    emoji: '⚡',
    speed: '1.5x – 2x',
    title: 'Hook in 1 Second',
    desc: 'Speed up your opening clip so viewers get hooked before they even think about swiping. Shorts viewers decide in under 0.4s.',
  },
  {
    emoji: '🐌',
    speed: '0.5x',
    title: 'Dramatic Slow-Mo Reveal',
    desc: 'Slow down the money shot — a product reveal, a transformation, a reaction — for maximum emotional impact.',
  },
  {
    emoji: '🚀',
    speed: '8x – 15x',
    title: 'Satisfying Time-Lapse',
    desc: 'Compress 10 minutes of cooking, drawing, or building into a 15-second Short that feels impossibly polished.',
  },
  {
    emoji: '🎓',
    speed: '1.25x',
    title: 'Crisp Tutorial Pacing',
    desc: 'Speed up talking sections slightly so tutorials feel tight and information-dense — exactly what algorithm rewards.',
  },
  {
    emoji: '🎬',
    speed: '0.75x',
    title: 'Cinematic B-Roll',
    desc: 'Give ordinary B-roll footage a cinematic weight. 0.75x feels premium without looking obviously slowed.',
  },
  {
    emoji: '🔥',
    speed: '4x',
    title: 'Transition Acceleration',
    desc: 'Speed-ramp into and out of cuts to create the satisfying "zoom-punch" transition popular in viral Shorts.',
  },
];

const FAQS = [
  {
    q: 'What is the ideal video speed for YouTube Shorts?',
    a: 'It depends on your content type. For hooks and energy-driven clips, 1.25x–1.5x keeps energy high. For dramatic reveals or emotions, 0.5x–0.75x builds tension. For time-lapses (cooking, art, builds), 8x–15x is ideal. There is no single "best" speed — the goal is matching speed to viewer emotion.',
  },
  {
    q: 'Does changing video speed affect audio in YouTube Shorts?',
    a: 'Yes. Scenith speed editor automatically adjusts and pitch-corrects audio so it doesn\'t sound like chipmunks or a slowed record. For extreme speeds (above 2x or below 0.75x), consider replacing audio with music or a clean voiceover instead.',
  },
  {
    q: 'Will speed-adjusted Shorts rank differently on YouTube?',
    a: 'YouTube algorithm doesn\'t directly penalize speed-adjusted videos. However, watch time and swipe-away rate matter enormously. A tightly paced 1.25x Short often retains viewers longer than a slow 1x version of the same content — indirectly boosting rankings.',
  },
  {
    q: 'What video formats can I upload for YouTube Shorts speed editing?',
    a: 'Scenith supports MP4, MOV, AVI, MKV, WebM, MPEG, and FLV. For best results with Shorts, shoot in vertical (9:16) 1080×1920 format before uploading. The tool preserves aspect ratio and resolution.',
  },
  {
    q: 'Is there a file size limit for the speed editor?',
    a: 'Free plan users can upload videos up to 500MB. For longer YouTube Shorts source footage, the Creator and Studio plans support larger files and longer video lengths.',
  },
  {
    q: 'Can I use Scenith\'s speed editor commercially for YouTube monetization?',
    a: 'Yes — all speed-adjusted exports are 100% yours with full commercial rights. No watermarks are added at any plan level. Monetize, brand, and sell your Shorts without restriction.',
  },
];

const SHORTS_STATS = [
  { number: '70B', label: 'Shorts views/day on YouTube' },
  { number: '2B', label: 'Monthly logged-in Shorts viewers' },
  { number: '0.4s', label: 'Time viewers decide to stay or swipe' },
  { number: '3x', label: 'Higher CTR for speed-varied content' },
];
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

export default function VideoSpeedYouTubeShortsClient() {
  const faqRef = useRef<HTMLElement>(null);

  return (
    <>
      <Script
        id="ld-breadcrumb"
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
                name: 'Video Speed for YouTube Shorts',
                item: 'https://scenith.in/tools/video-speed-for-youtube-shorts',
              },
            ],
          }),
        }}
      />

      <Script
        id="ld-faq"
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
        id="ld-howto"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: 'How to Change Video Speed for YouTube Shorts',
            description:
              'Step-by-step guide to adjusting video playback speed for YouTube Shorts using Scenith.',
            step: [
              {
                '@type': 'HowToStep',
                name: 'Upload your vertical video',
                text: 'Upload your 9:16 Shorts footage in MP4, MOV or any major format.',
              },
              {
                '@type': 'HowToStep',
                name: 'Choose your speed preset',
                text: 'Pick from 8 curated speed presets or dial a custom speed from 0.5x to 15x.',
              },
              {
                '@type': 'HowToStep',
                name: 'Export and download',
                text: 'Click Export and download your speed-adjusted MP4 ready to upload to YouTube Shorts.',
              },
            ],
          }),
        }}
      />

      <Script
        id="ld-software"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'Scenith Video Speed Editor for YouTube Shorts',
            applicationCategory: 'MultimediaApplication',
            operatingSystem: 'Web Browser',
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.8',
              reviewCount: '1547',
            },
          }),
        }}
      />

      <div className="ys-page">
        {/* ── BREADCRUMB ── */}
        <nav aria-label="Breadcrumb" className="ys-breadcrumb">
          <ol itemScope itemType="https://schema.org/BreadcrumbList">
            {[
              { href: '/', label: 'Home', pos: 1 },
              { href: '/tools', label: 'Tools', pos: 2 },
              { href: null, label: 'Video Speed for YouTube Shorts', pos: 3 },
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
                {crumb.pos < 3 && <span className="ys-bc-sep" aria-hidden>›</span>}
              </li>
            ))}
          </ol>
        </nav>

        {/* ── HERO ── */}
        <section className="ys-hero" id="hero" aria-labelledby="ys-hero-h1">
          <div className="ys-hero-bg" aria-hidden="true">
            <div className="ys-hero-glow ys-glow-1" />
            <div className="ys-hero-glow ys-glow-2" />
            <div className="ys-grid-overlay" />
          </div>

          <motion.div
            className="ys-hero-inner"
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={fadeUp} className="ys-hero-badge">
              <span className="ys-badge-dot" aria-hidden />
              YouTube Shorts Speed Optimizer
            </motion.div>

            <motion.h1 variants={fadeUp} id="ys-hero-h1" className="ys-hero-h1">
              Change Video Speed for{' '}
              <span className="ys-gradient-text">YouTube Shorts</span>{' '}
              — Free, Instant, No Watermark
            </motion.h1>

            <motion.p variants={fadeUp} className="ys-hero-sub">
              Slow down to{' '}
              <strong>0.5x for cinematic slow-mo</strong> or ramp up to{' '}
              <strong>15x for hypnotic time-lapses</strong>. Built specifically for creators
              who need Shorts-ready exports in under 3 minutes.
            </motion.p>

            {/* Stats Strip */}
            <motion.div variants={fadeUp} className="ys-stats-strip" role="list">
              {SHORTS_STATS.map((s) => (
                <div key={s.label} className="ys-stat" role="listitem">
                  <span className="ys-stat-num">{s.number}</span>
                  <span className="ys-stat-label">{s.label}</span>
                </div>
              ))}
            </motion.div>

            {/* PRIMARY CTA */}
            <motion.div variants={fadeUp} className="ys-cta-block">
              
            <a    href={TOOL_URL}
                className="ys-cta-primary"
                aria-label="Open the free video speed editor for YouTube Shorts"
              >
                <span className="ys-cta-icon" aria-hidden>⚡</span>
                Adjust My Video Speed — Free
                <span className="ys-cta-arrow" aria-hidden>→</span>
              </a>
            </motion.div>

            {/* Trust bar */}
            <motion.div variants={fadeUp} className="ys-trust-bar">
              {['✅ 100% Free', '⚡ 2-min processing', '📥 Instant MP4', '🔒 No watermark', '📱 Mobile-ready'].map(
                (t) => (
                  <span key={t} className="ys-trust-item">
                    {t}
                  </span>
                )
              )}
            </motion.div>
          </motion.div>

          {/* Hero visual */}
          <motion.figure
            className="ys-hero-visual"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src="/images/VideoSpeedModifierSS.png"
              alt="Scenith video speed editor interface showing speed presets for YouTube Shorts"
              width={780}
              height={420}
              priority
              className="ys-hero-img"
            />
            <figcaption className="sr-only">
              Scenith video speed editor showing 0.5x to 15x speed adjustment for YouTube Shorts
            </figcaption>
          </motion.figure>
        </section>

        {/* ── WHY SPEED MATTERS FOR SHORTS ── */}
        <section
          className="ys-section ys-why"
          id="why-speed-matters"
          aria-labelledby="ys-why-title"
        >
          <motion.div
            className="ys-container"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.div variants={fadeUp} className="ys-section-tag">Algorithm Intelligence</motion.div>
            <motion.h2 variants={fadeUp} id="ys-why-title" className="ys-section-h2">
              Why Video Speed Is the Most Underrated Shorts Growth Lever
            </motion.h2>
            <motion.p variants={fadeUp} className="ys-section-desc">
              YouTube's Shorts algorithm measures <strong>watch percentage</strong>, not just raw views.
              A strategically paced video that holds viewers 10% longer can push a Short from 1,000 to
              100,000 views. Here's the science behind it.
            </motion.p>

            <motion.div variants={stagger} className="ys-why-grid">
              {[
                {
                  icon: '👁️',
                  title: '0.4-Second Thumb-Stop Window',
                  body:
                    'Mobile viewers decide to stay or swipe in under half a second. A slightly sped-up (1.25x) opening signals energy and density — triggering the brain\'s "this is worth my time" circuit faster than normal-speed footage.',
                },
                {
                  icon: '📊',
                  title: 'Watch Time vs. Completion Rate',
                  body:
                    'Shorts under 30 seconds with high completion rates get pushed hardest. A 40-second slow-motion clip cut to 20 seconds at 2x tells the same story, doubles completion rate, and gets 2x the algorithm push.',
                },
                {
                  icon: '🔁',
                  title: 'Loop Triggering',
                  body:
                    'YouTube Shorts loops automatically. A video that ends abruptly at high speed feels unresolved — driving viewers to rewatch. Intentional speed ramps at the cut point increase loop rates by an estimated 30%.',
                },
                {
                  icon: '🎵',
                  title: 'Audio-Speed Sync for Trending Sounds',
                  body:
                    'Aligning visual cuts to beat drops becomes trivial when you control video speed. Speed up to 1.5x so your action hits the beat, instead of forcing an awkward edit around fixed footage.',
                },
              ].map((card) => (
                <motion.article variants={fadeUp} key={card.title} className="ys-why-card">
                  <span className="ys-why-icon" aria-hidden>{card.icon}</span>
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                </motion.article>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* ── SPEED USE CASES ── */}
        <section
          className="ys-section ys-usecases"
          id="speed-presets-shorts"
          aria-labelledby="ys-uc-title"
        >
          <motion.div
            className="ys-container"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.div variants={fadeUp} className="ys-section-tag">Speed Playbook</motion.div>
            <motion.h2 variants={fadeUp} id="ys-uc-title" className="ys-section-h2">
              The 6 Video Speeds Every Shorts Creator Should Know
            </motion.h2>
            <motion.p variants={fadeUp} className="ys-section-desc">
              Each speed setting triggers a different psychological response in viewers. Match the
              right speed to the right moment — and watch your metrics climb.
            </motion.p>

            <motion.div variants={stagger} className="ys-uc-grid">
              {SPEED_USE_CASES.map((uc) => (
                <motion.article variants={fadeUp} key={uc.title} className="ys-uc-card">
                  <div className="ys-uc-header">
                    <span className="ys-uc-emoji" aria-hidden>{uc.emoji}</span>
                    <span className="ys-uc-speed">{uc.speed}</span>
                  </div>
                  <h3 className="ys-uc-title">{uc.title}</h3>
                  <p className="ys-uc-desc">{uc.desc}</p>
                </motion.article>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="ys-uc-cta-wrap">
              <a href={TOOL_URL} className="ys-cta-primary ys-cta-mid">
                <span aria-hidden>🎬</span> Try All Speed Presets Free
                <span className="ys-cta-arrow" aria-hidden>→</span>
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section
          className="ys-section ys-how"
          id="how-it-works"
          aria-labelledby="ys-how-title"
        >
          <motion.div
            className="ys-container"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.div variants={fadeUp} className="ys-section-tag">3-Step Workflow</motion.div>
            <motion.h2 variants={fadeUp} id="ys-how-title" className="ys-section-h2">
              How to Change Video Speed for YouTube Shorts in 3 Steps
            </motion.h2>

            <motion.div variants={stagger} className="ys-steps">
              {[
                {
                  num: '01',
                  title: 'Upload Your Shorts Footage',
                  body:
                    'Upload any vertical (9:16) or landscape clip — MP4, MOV, AVI, MKV, WebM. Up to 500MB on the free plan. Your file is encrypted and auto-deleted after processing.',
                },
                {
                  num: '02',
                  title: 'Pick Your Speed or Go Custom',
                  body:
                    'Choose from 8 creator-optimised presets (Dramatic Slow, Social Fast, Reels Speed, Timelapse…) or dial in any custom speed from 0.5x to 15x with a single slider.',
                },
                {
                  num: '03',
                  title: 'Export as Shorts-Ready MP4',
                  body:
                    'Hit Export. Your video processes in under 3 minutes and downloads as a clean MP4 — no watermark, full quality, ready to upload directly to YouTube Shorts.',
                },
              ].map((step) => (
                <motion.article variants={fadeUp} key={step.num} className="ys-step">
                  <div className="ys-step-num" aria-hidden>{step.num}</div>
                  <div className="ys-step-body">
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
          className="ys-section ys-compare"
          id="comparison"
          aria-labelledby="ys-compare-title"
        >
          <motion.div
            className="ys-container"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="ys-section-tag">Tool Comparison</div>
            <h2 id="ys-compare-title" className="ys-section-h2">
              Scenith vs Other Video Speed Tools for Shorts
            </h2>

            <div className="ys-table-wrap">
              <table className="ys-compare-table">
                <caption className="sr-only">
                  Comparison of video speed tools for YouTube Shorts creators
                </caption>
                <thead>
                  <tr>
                    <th scope="col">Feature</th>
                    <th scope="col" className="ys-col-highlight">Scenith</th>
                    <th scope="col">CapCut Speed</th>
                    <th scope="col">Adobe Premiere</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Cost', '✅ Free forever', '✅ Free (with watermark risk)', '❌ $55/mo'],
                    ['Speed Range', '✅ 0.5x – 15x', '⚠️ 0.1x – 100x (unstable)', '✅ Unlimited'],
                    ['Audio Pitch Correction', '✅ Automatic', '⚠️ Manual toggle', '⚠️ Manual'],
                    ['Processing Time', '✅ ~2 minutes', '✅ Fast', '❌ 10–30 min render'],
                    ['No Watermark', '✅ Never', '⚠️ Requires pro to remove', '✅ Yes'],
                    ['Works on Mobile', '✅ Any browser', '✅ App only', '❌ Desktop only'],
                    ['Export Quality', '✅ Up to 4K (paid)', '⚠️ 1080p max free', '✅ Any'],
                    ['9:16 Shorts Optimized', '✅ Preserves aspect ratio', '✅ Yes', '⚠️ Manual setup'],
                  ].map(([feat, ...cols]) => (
                    <tr key={feat}>
                      <td>{feat}</td>
                      {cols.map((c, i) => (
                        <td key={i} className={i === 0 ? 'ys-col-highlight' : ''}>
                          {c}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </section>

        {/* ── CONTENT STRATEGY GUIDE ── */}
        <section
          className="ys-section ys-guide"
          id="shorts-speed-strategy"
          aria-labelledby="ys-guide-title"
        >
          <motion.div
            className="ys-container"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.div variants={fadeUp} className="ys-section-tag">Creator Strategy</motion.div>
            <motion.h2 variants={fadeUp} id="ys-guide-title" className="ys-section-h2">
              The YouTube Shorts Speed Strategy Guide (2025 Edition)
            </motion.h2>

            <motion.div variants={stagger} className="ys-guide-blocks">
              <motion.div variants={fadeUp} className="ys-guide-block">
                <h3>🎯 Niche-Specific Speed Recommendations</h3>
                <ul className="ys-guide-list">
                  <li><strong>Fitness/Workout Shorts:</strong> 1.25x for sets, 0.5x for form close-ups. Keeps energy high while teaching correct technique.</li>
                  <li><strong>Food & Cooking:</strong> 4x–8x for prep/cooking phases, 0.75x for the plating reveal. The contrast between rushed and slow is inherently satisfying.</li>
                  <li><strong>Gaming Clips:</strong> 1x for clutch moments, 0.5x for the winning frame. Slow-mo replays of highlights increase rewatch value by 40%.</li>
                  <li><strong>DIY & Crafts:</strong> 3x–5x for the build process, 0.5x for the finished reveal. Drives the dopamine loop that fuels viral sharing.</li>
                  <li><strong>Travel Vlogs:</strong> 2x–3x for transitions and travel montages, 0.75x for scenic landscape shots. Creates rhythm between place and emotion.</li>
                  <li><strong>Educational/Explainer:</strong> 1.25x throughout — removes dead air, respects viewer's time, signals information density the algorithm rewards.</li>
                </ul>
              </motion.div>

              <motion.div variants={fadeUp} className="ys-guide-block">
                <h3>📐 Optimal Short Length by Speed</h3>
                <p className="ys-guide-intro">
                  Source footage length × speed multiplier = final Short duration. Plan your source clips
                  backward from your target Short length:
                </p>
                <div className="ys-length-table">
                  {[
                    { target: '15s Short', speed: '2x', source: '30s source' },
                    { target: '30s Short', speed: '1.5x', source: '45s source' },
                    { target: '45s Short', speed: '1.25x', source: '56s source' },
                    { target: '60s Short', speed: '0.75x', source: '45s source' },
                    { target: '15s Short (timelapse)', speed: '10x', source: '2.5 min source' },
                  ].map((row) => (
                    <div key={row.target} className="ys-length-row">
                      <span className="ys-lr-target">{row.target}</span>
                      <span className="ys-lr-arrow">←</span>
                      <span className="ys-lr-speed">{row.speed}</span>
                      <span className="ys-lr-source">{row.source}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="ys-guide-block">
                <h3>🧪 A/B Testing Your Speed Choices</h3>
                <p>
                  The most data-driven Shorts creators upload two versions of the same clip at different
                  speeds (e.g., 1x vs 1.5x) as separate Shorts and compare 24-hour retention curves in
                  YouTube Studio. Speed is the single variable you can change with zero re-filming — making
                  it the cheapest A/B test in content creation.
                </p>
                <p style={{ marginTop: '12px' }}>
                  Use Scenith to generate both versions in under 5 minutes, upload both, and let the
                  algorithm tell you which pacing resonates with your specific audience.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* ── BIG MID-PAGE CTA ── */}
        <section className="ys-section ys-mid-cta" aria-label="Use the video speed editor">
          <motion.div
            className="ys-container"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="ys-mid-cta-card">
              <div className="ys-mid-cta-glow" aria-hidden />
              <p className="ys-mid-cta-eyebrow">Ready to optimize your Shorts?</p>
              <h2 className="ys-mid-cta-h2">
                Adjust Your Video Speed Now —{' '}
                <span className="ys-gradient-text">It Takes Under 3 Minutes</span>
              </h2>
              <p className="ys-mid-cta-sub">
                Join 30,000+ creators already using Scenith to create faster, sharper, more engaging
                YouTube Shorts. No account needed to start.
              </p>
              <a href={TOOL_URL} className="ys-cta-primary ys-cta-lg">
                <span aria-hidden>⚡</span>
                Open Video Speed Editor — Free
                <span className="ys-cta-arrow" aria-hidden>→</span>
              </a>
              <div className="ys-mid-cta-trust">
                <span>⭐⭐⭐⭐⭐ 4.8/5 from 1,547 reviews</span>
                <span>·</span>
                <span>30,000+ active users</span>
                <span>·</span>
                <span>No watermark ever</span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ── FAQ ── */}
        <section
          className="ys-section ys-faq"
          id="faq"
          ref={faqRef}
          aria-labelledby="ys-faq-title"
        >
          <motion.div
            className="ys-container"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.div variants={fadeUp} className="ys-section-tag">FAQs</motion.div>
            <motion.h2 variants={fadeUp} id="ys-faq-title" className="ys-section-h2">
              Frequently Asked Questions — Video Speed for YouTube Shorts
            </motion.h2>

            <motion.div variants={stagger} className="ys-faq-grid">
              {FAQS.map((faq) => (
                <motion.article variants={fadeUp} key={faq.q} className="ys-faq-item">
                  <h3 className="ys-faq-q">{faq.q}</h3>
                  <p className="ys-faq-a">{faq.a}</p>
                </motion.article>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="ys-section ys-final-cta" aria-label="Final call to action">
          <motion.div
            className="ys-container ys-final-inner"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="ys-final-h2">
              Your Next Viral Short Is One Speed Adjustment Away
            </h2>
            <p className="ys-final-sub">
              Don't leave views on the table with the wrong pacing. Use Scenith's free speed editor
              and give your next Short the algorithmic edge it deserves.
            </p>
            <a href={TOOL_URL} className="ys-cta-primary ys-cta-lg">
              <span aria-hidden>🚀</span>
              Change My Video Speed — Free
              <span className="ys-cta-arrow" aria-hidden>→</span>
            </a>
            <p className="ys-final-footnote">
              Also explore:{' '}
              <Link href="/tools/video-speed-modifier">Video Speed Modifier</Link>
              {' · '}
              <Link href="/tools">All AI Video Tools</Link>
              {' · '}
              <Link href="/pricing">Pricing & Plans</Link>
            </p>
          </motion.div>
        </section>
      </div>
    </>
  );
}