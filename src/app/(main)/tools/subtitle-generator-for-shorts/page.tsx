import type { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import './subtitle-generator-for-shorts.css';

// ─── SEO METADATA ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Free AI Subtitle Generator for Shorts & Reels (2026) – Auto Captions in Seconds',
  description:
    'Instantly add captions to YouTube Shorts, Instagram Reels, and TikTok videos with AI. Free subtitle generator for shorts with bold styles, auto-sync, and one-click export. No watermark.',
  keywords: [
    'subtitle generator for shorts',
    'auto captions for youtube shorts',
    'subtitle generator for reels',
    'add subtitles to shorts',
    'caption generator for tiktok',
    'free subtitle generator shorts',
    'ai captions shorts 2026',
    'instagram reels subtitle generator',
    'youtube shorts caption tool',
    'auto subtitle shorts',
    'subtitle maker for shorts',
    'open captions shorts',
    'burned captions reels',
    'tiktok caption generator free',
    'short form video subtitles',
  ],
  alternates: {
    canonical: 'https://scenith.in/tools/subtitle-generator-for-shorts',
  },
  openGraph: {
    title: 'Free AI Subtitle Generator for Shorts & Reels – Auto Captions in Seconds',
    description:
      'Add viral-style captions to YouTube Shorts, Instagram Reels & TikTok in seconds. AI-powered, free, no watermark. Used by 2,000+ short-form creators.',
    url: 'https://scenith.in/tools/subtitle-generator-for-shorts',
    siteName: 'Scenith',
    images: [
      {
        url: 'https://scenith.in/images/AddSubtitlesSS.png',
        width: 1200,
        height: 630,
        alt: 'AI Subtitle Generator for YouTube Shorts and Instagram Reels',
      },
    ],
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free AI Subtitle Generator for Shorts & Reels',
    description:
      'Auto-captions for YouTube Shorts, Reels & TikTok. Bold styles, perfect sync, one-click export. Free.',
    images: ['https://scenith.in/images/AddSubtitlesSS.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
};

// ─── STRUCTURED DATA ─────────────────────────────────────────────────────────
const webAppSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebApplication',
      '@id': 'https://scenith.in/tools/subtitle-generator-for-shorts#webapp',
      name: 'Scenith Subtitle Generator for Shorts & Reels',
      description:
        'Free AI subtitle generator purpose-built for YouTube Shorts, Instagram Reels, and TikTok. Auto-generates synced captions with bold, viral-ready styles.',
      url: 'https://scenith.in/tools/subtitle-generator-for-shorts',
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Web Browser',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      featureList: [
        'AI subtitle generation for short-form videos',
        'Vertical 9:16 optimised caption layout',
        'Bold animated caption styles',
        '50+ language support',
        'Instant MP4 export',
        'No watermarks on free plan',
      ],
      author: {
        '@type': 'Organization',
        '@id': 'https://scenith.in/#organization',
        name: 'Scenith',
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://scenith.in/tools/subtitle-generator-for-shorts#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://scenith.in' },
        { '@type': 'ListItem', position: 2, name: 'Tools', item: 'https://scenith.in/tools' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Subtitle Generator for Shorts',
          item: 'https://scenith.in/tools/subtitle-generator-for-shorts',
        },
      ],
    },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can I use this subtitle generator specifically for YouTube Shorts?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Scenith\'s AI subtitle generator is optimized for vertical short-form videos including YouTube Shorts (9:16 ratio). Captions are sized and positioned for mobile-first viewing where most Shorts are consumed.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do captions help YouTube Shorts get more views?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. 85% of short-form videos are watched without sound. Captions keep viewers watching longer, which signals quality to the YouTube Shorts algorithm and increases reach. Studies show captioned Shorts get 40% more views on average.',
      },
    },
    {
      '@type': 'Question',
      name: 'What caption styles work best for Shorts and Reels in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bold, high-contrast captions with word-by-word highlighting are trending in 2026. Large sans-serif fonts (40px+), white or yellow text with dark stroke, center-positioned at lower-third, and short 2-4 word segments per card perform best. Scenith offers all these preset styles.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a watermark on exported Shorts?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Free plan users get watermark-free exports on the basic quality. Upgrading to Creator Lite or above removes all watermarks and unlocks 1080p and 2K export for Shorts.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to caption a 60-second Short?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Processing a 60-second Short takes approximately 30–60 seconds with Scenith\'s Whisper AI engine. Most creators go from upload to download in under 3 minutes total.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I add captions to Instagram Reels and TikTok too?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The tool supports any vertical video. Upload your Reel or TikTok export, generate captions, customize the style, and download the MP4 ready to re-upload on any platform.',
      },
    },
    {
      '@type': 'Question',
      name: 'What languages does the subtitle generator support for Shorts?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Scenith supports 50+ languages automatically detected by Whisper AI, including English, Hindi, Spanish, Portuguese, French, Arabic, Japanese, Korean, and more — ideal for multilingual Shorts creators.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to install any software to caption my Shorts?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Scenith is 100% browser-based. Upload your Short, generate captions, edit, and download — all in your browser with zero installations.',
      },
    },
  ],
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Add Captions to YouTube Shorts Using AI',
  description:
    'Step-by-step guide to adding viral-style AI-generated captions to YouTube Shorts, Reels, and TikTok videos in under 3 minutes.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Upload Your Short',
      text: 'Upload your vertical video (YouTube Short, Reel, or TikTok export) directly from your device.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Choose a Caption Style',
      text: 'Pick from 25+ bold, viral-ready caption presets optimized for vertical video viewing.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Generate & Edit Captions',
      text: 'Whisper AI generates accurate, time-synced captions in seconds. Edit any text or timing with one click.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Export & Upload',
      text: 'Download your captioned Short as an MP4 and upload to YouTube, Instagram, or TikTok.',
    },
  ],
};

// ─── PAGE COMPONENT ───────────────────────────────────────────────────────────
export default function SubtitleGeneratorForShortsPage() {
  const toolUrl =
    'https://scenith.in/tools/add-subtitles-to-videos?utm_source=shorts-lp&utm_medium=cta&utm_campaign=subtitle-for-shorts';

  return (
    <>
      {/* ── JSON-LD ── */}
      <Script
        id="shorts-webapp-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <Script
        id="shorts-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="shorts-howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      <div className="sfs-root">
        {/* PARTICLE BG */}
        <div className="sfs-particles" aria-hidden="true">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className={`sfs-particle sfs-particle--${i + 1}`} />
          ))}
        </div>

        {/* ── BREADCRUMB ── */}
        <nav aria-label="Breadcrumb" className="sfs-breadcrumb">
          <ol itemScope itemType="https://schema.org/BreadcrumbList">
            {[
              { href: '/', label: 'Home', pos: 1 },
              { href: '/tools', label: 'Tools', pos: 2 },
              { href: '/tools/subtitle-generator-for-shorts', label: 'Subtitle Generator for Shorts', pos: 3 },
            ].map(({ href, label, pos }) => (
              <li
                key={pos}
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                {pos < 3 ? (
                  <Link href={href} itemProp="item">
                    <span itemProp="name">{label}</span>
                  </Link>
                ) : (
                  <span itemProp="name">{label}</span>
                )}
                <meta itemProp="position" content={String(pos)} />
              </li>
            ))}
          </ol>
        </nav>

        {/* ── HERO ── */}
        <header className="sfs-hero" role="banner">
          <div className="sfs-hero__badge">
            <span className="sfs-badge-dot" />
            Trusted by 2,000+ short-form creators
          </div>

          <h1 className="sfs-hero__h1">
            <span className="sfs-hero__line1">Free AI Subtitle Generator</span>
            <span className="sfs-hero__line2">for Shorts, Reels & TikTok</span>
          </h1>

          <p className="sfs-hero__sub">
            Auto-generate bold, viral-ready captions for your vertical videos in under 60 seconds.
            Whisper AI — 95%+ accuracy — 50+ languages — zero installs.
          </p>

          {/* FEATURED SNIPPET TARGET */}
          <div className="sfs-definition-card" role="note">
            <p>
              A <strong>subtitle generator for Shorts</strong> is a browser-based AI tool that
              automatically transcribes and time-syncs captions onto YouTube Shorts, Instagram
              Reels, and TikTok videos — rendering bold, mobile-optimized text directly into the
              MP4 so captions display on every platform without external caption files.
            </p>
          </div>

          {/* MAIN CTA */}
          <div className="sfs-cta-block">
            <a
              href={toolUrl}
              className="sfs-cta-primary"
              aria-label="Open free AI subtitle generator for Shorts"
            >
              <span className="sfs-cta-icon">⚡</span>
              Generate Captions for Free 
              <span className="sfs-cta-arrow">→</span>
            </a>
            <p className="sfs-cta-hint">
              No watermark · No credit card · Exports in MP4
            </p>
          </div>

          {/* TRUST BAR */}
          <ul className="sfs-trust-bar" aria-label="Trust indicators">
            {[
              { icon: '🎯', text: '95–98% accuracy' },
              { icon: '⚡', text: '60s processing' },
              { icon: '🌐', text: '50+ languages' },
              { icon: '📱', text: 'Vertical-optimised' },
              { icon: '🆓', text: 'Free forever plan' },
            ].map(({ icon, text }) => (
              <li key={text} className="sfs-trust-item">
                <span aria-hidden="true">{icon}</span> {text}
              </li>
            ))}
          </ul>
        </header>

        {/* ── STAT STRIP ── */}
        <section className="sfs-stats" aria-label="Key statistics">
          {[
            { num: '85%', label: 'of Shorts watched without sound', src: 'Meta & YouTube data' },
            { num: '40%', label: 'more views with captions on Shorts', src: 'YouTube Creator Academy' },
            { num: '3 min', label: 'from upload to download', src: 'Avg Scenith user session' },
            { num: '2×', label: 'watch-time on captioned Reels', src: 'Instagram Business blog' },
          ].map(({ num, label, src }) => (
            <div key={num} className="sfs-stat-card">
              <div className="sfs-stat-num">{num}</div>
              <div className="sfs-stat-label">{label}</div>
              <div className="sfs-stat-src">{src}</div>
            </div>
          ))}
        </section>

        {/* ── WHY CAPTIONS MATTER FOR SHORTS ── */}
        <section
          className="sfs-section sfs-why"
          id="why-captions-matter-for-shorts"
          aria-labelledby="why-title"
        >
          <div className="sfs-container">
            <h2 id="why-title" className="sfs-section__h2">
              Why Captions Are Non-Negotiable for Short-Form Video in 2026
            </h2>
            <p className="sfs-section__lead">
              Short-form video has become the dominant content format on the internet. But the
              creators winning the algorithm game in 2026 aren't just making great videos — they're
              optimising every frame for silent, mobile, scroll-stopping viewing. Captions are the
              single highest-leverage edit you can make to a Short.
            </p>

            <div className="sfs-why-grid">
              <article className="sfs-why-card">
                <div className="sfs-why-icon" aria-hidden="true">🔇</div>
                <h3>The Silent Scroll Problem</h3>
                <p>
                  YouTube Shorts, Instagram Reels, and TikTok are consumed overwhelmingly on mobile
                  in silent mode — in commutes, classrooms, offices, and bedrooms. Meta's internal
                  data confirms that <strong>85% of video views happen with sound off</strong>.
                  Without captions, your message simply never lands. The viewer scrolls past before
                  they even know what your Short was about.
                </p>
              </article>

              <article className="sfs-why-card">
                <div className="sfs-why-icon" aria-hidden="true">📈</div>
                <h3>The Algorithm Reward Loop</h3>
                <p>
                  Every major short-form platform uses <strong>average view duration</strong> as
                  its primary ranking signal. Captions extend average view duration by keeping
                  viewers engaged even when audio is off. Longer watch time → more algorithmic
                  distribution → more views → more watch time. A 15% improvement in completion
                  rate can 3× a Short's reach in the first 48 hours of posting.
                </p>
              </article>

              <article className="sfs-why-card">
                <div className="sfs-why-icon" aria-hidden="true">♿</div>
                <h3>Accessibility = Larger Audience</h3>
                <p>
                  Over <strong>466 million people globally</strong> have disabling hearing loss.
                  Captions ensure your content is accessible to them by default. Beyond disability,
                  captions help non-native speakers, people learning languages, and viewers in
                  noisy environments where audio is inaudible. Every caption you add opens your
                  Short to a wider slice of humanity.
                </p>
              </article>

              <article className="sfs-why-card">
                <div className="sfs-why-icon" aria-hidden="true">🔍</div>
                <h3>Captions Feed Search & Discovery</h3>
                <p>
                  YouTube indexes the text of closed captions. Burning captions directly into your
                  Short gives the algorithm visual context clues. Shorts with captions containing
                  target keywords rank better in YouTube Search and appear more frequently in the
                  Shorts shelf under relevant hashtags. It's free on-video SEO that most creators
                  completely ignore.
                </p>
              </article>

              <article className="sfs-why-card">
                <div className="sfs-why-icon" aria-hidden="true">🎨</div>
                <h3>Brand Identity & Visual Style</h3>
                <p>
                  In 2026, caption style is part of creator identity. MrBeast uses bold yellow.
                  Finance creators use clean white on dark backgrounds. Lifestyle brands use
                  minimal sans-serif. Your caption style is a visual signature that viewers
                  recognise before they even hear a word. Consistent, beautiful captions signal
                  professionalism and build brand recall across every Short you post.
                </p>
              </article>

              <article className="sfs-why-card">
                <div className="sfs-why-icon" aria-hidden="true">🌍</div>
                <h3>Multilingual Reach Without Dubbing</h3>
                <p>
                  Short-form content spreads globally faster than any other format. With Scenith's
                  Whisper AI detecting and transcribing <strong>50+ languages</strong>, you can
                  auto-caption Shorts in Portuguese for Brazil, Hindi for India, or Arabic for the
                  Middle East — without hiring translators or voice actors. One video, global
                  reach.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section
          className="sfs-section sfs-how"
          id="how-to-add-subtitles-to-shorts"
          aria-labelledby="how-title"
        >
          <div className="sfs-container">
            <h2 id="how-title" className="sfs-section__h2">
              How to Add Subtitles to YouTube Shorts in 4 Steps
            </h2>
            <p className="sfs-section__lead">
              No software. No timeline editor. No prior experience needed. Here's how creators go
              from raw Short to fully captioned MP4 in under 3 minutes.
            </p>

            <ol className="sfs-steps" aria-label="Steps to add captions to Shorts">
              {[
                {
                  n: '01',
                  title: 'Upload Your Vertical Video',
                  body: 'Upload any MP4, MOV, or AVI file directly from your phone or laptop. Scenith accepts all major video formats. Your video is securely processed in the cloud — no data is stored after 48 hours.',
                  tag: 'Upload',
                },
                {
                  n: '02',
                  title: 'Pick a Viral Caption Style',
                  body: 'Choose from 25+ caption presets designed specifically for short-form video. Bold stacked word cards, gradient text, outline styles, animated pop captions — all optimised for 9:16 vertical screens and mobile readability.',
                  tag: 'Style',
                },
                {
                  n: '03',
                  title: 'AI Generates & You Edit',
                  body: 'Whisper AI transcribes your audio with 95–98% accuracy and syncs every word to the exact millisecond. Review captions in the preview player, click any subtitle to correct text, adjust timing, or tweak position. Auto-save handles everything.',
                  tag: 'Edit',
                },
                {
                  n: '04',
                  title: 'Export MP4 & Post Everywhere',
                  body: 'Hit "Process Subtitles" and your captioned Short is ready in minutes. Download the MP4 with burned-in captions and re-upload directly to YouTube Shorts, Instagram Reels, TikTok, LinkedIn, or X. One file, every platform.',
                  tag: 'Export',
                },
              ].map(({ n, title, body, tag }) => (
                <li key={n} className="sfs-step">
                  <div className="sfs-step__num" aria-hidden="true">{n}</div>
                  <div className="sfs-step__content">
                    <span className="sfs-step__tag">{tag}</span>
                    <h3 className="sfs-step__title">{title}</h3>
                    <p className="sfs-step__body">{body}</p>
                  </div>
                </li>
              ))}
            </ol>

            {/* MID-PAGE CTA */}
            <div className="sfs-mid-cta">
              <a href={toolUrl} className="sfs-cta-primary sfs-cta-primary--mid">
                <span className="sfs-cta-icon">🎬</span>
                Caption My Short Now — It's Free
                <span className="sfs-cta-arrow">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* ── CAPTION STYLES GUIDE ── */}
        <section
          className="sfs-section sfs-styles"
          id="best-caption-styles-for-shorts-2026"
          aria-labelledby="styles-title"
        >
          <div className="sfs-container">
            <h2 id="styles-title" className="sfs-section__h2">
              Best Caption Styles for YouTube Shorts & Reels in 2026
            </h2>
            <p className="sfs-section__lead">
              Not all caption styles are created equal for vertical video. Here's a breakdown of
              what's working on every platform right now — and how to pick the right style for
              your niche.
            </p>

            <div className="sfs-styles-grid">
              {[
                {
                  style: 'Bold Word Pop',
                  platforms: 'TikTok · Reels',
                  desc: 'Large, uppercase, word-by-word captions that pop into frame one at a time. Maximum attention-grabbing power for fast-paced content. Works best for reaction videos, storytime, and podcast clips.',
                  rec: '🔥 Trending #1 in 2026',
                  color: '#FF6B35',
                },
                {
                  style: 'Gradient Stack',
                  platforms: 'YouTube Shorts · Reels',
                  desc: 'Multi-colour gradient text stacked in 2–3 word chunks. Visually distinctive and immediately recognisable as premium content. Popular with motivational creators, tech reviewers, and lifestyle brands.',
                  rec: '✨ Creator favourite',
                  color: '#7B2FBE',
                },
                {
                  style: 'Clean Minimal',
                  platforms: 'LinkedIn · YouTube Shorts',
                  desc: 'White sans-serif on a semi-transparent dark box. Professional, readable, and non-distracting. Ideal for business, finance, education, and B2B content where clarity beats flair.',
                  rec: '💼 Best for professional niches',
                  color: '#2D6A4F',
                },
                {
                  style: 'Outlined Outline',
                  platforms: 'TikTok · Shorts',
                  desc: 'Black stroke outline on white or yellow text. Classic TV subtitle look. Works on any background without a caption box — the stroke provides contrast regardless of whats behind it.',
                  rec: '⏱️ Timeless & reliable',
                  color: '#1A1A2E',
                },
                {
                  style: 'Highlight Karaoke',
                  platforms: 'All platforms',
                  desc: 'Each word highlights in a contrasting colour as its spoken. Keeps eyes locked on screen. Perfect for tutorial Shorts, language learning content, and any video where comprehension matters.',
                  rec: '🎵 Best for retention',
                  color: '#E63946',
                },
                {
                  style: 'Boxed Rounded',
                  platforms: 'Reels · TikTok',
                  desc: 'Text inside a rounded pill-shaped background. Looks native to Stories format. Allows bright colours without sacrificing readability. Used widely by food, travel, and lifestyle creators.',
                  rec: '📱 Stories-native feel',
                  color: '#F4A261',
                },
              ].map(({ style, platforms, desc, rec, color }) => (
                <article key={style} className="sfs-style-card" style={{ '--accent': color } as React.CSSProperties}>
                  <div className="sfs-style-card__header">
                    <h3>{style}</h3>
                    <span className="sfs-style-platforms">{platforms}</span>
                  </div>
                  <p>{desc}</p>
                  <div className="sfs-style-rec">{rec}</div>
                </article>
              ))}
            </div>

            <div className="sfs-styles-tip">
              <h3>🎯 Quick Style Selection Guide by Niche</h3>
              <div className="sfs-niche-table">
                {[
                  { niche: 'Comedy / Entertainment', style: 'Bold Word Pop', reason: 'Matches fast pacing, maximises laughs' },
                  { niche: 'Finance / Business', style: 'Clean Minimal', reason: 'Communicates authority and clarity' },
                  { niche: 'Fitness / Motivation', style: 'Gradient Stack', reason: 'Energy and visual excitement' },
                  { niche: 'Education / Tutorial', style: 'Highlight Karaoke', reason: 'Word-by-word comprehension boost' },
                  { niche: 'Food / Travel / Lifestyle', style: 'Boxed Rounded', reason: 'Native to Stories aesthetic' },
                  { niche: 'Film / Storytelling', style: 'Outlined Outline', reason: 'Cinematic, non-intrusive' },
                ].map(({ niche, style, reason }) => (
                  <div key={niche} className="sfs-niche-row">
                    <span className="sfs-niche-name">{niche}</span>
                    <span className="sfs-niche-style">{style}</span>
                    <span className="sfs-niche-reason">{reason}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── DEEP DIVE: ALGORITHM SECTION ── */}
        <section
          className="sfs-section sfs-algo"
          id="how-captions-help-shorts-algorithm"
          aria-labelledby="algo-title"
        >
          <div className="sfs-container">
            <h2 id="algo-title" className="sfs-section__h2">
              The Technical Reason Captions Boost Your Shorts on Every Algorithm
            </h2>
            <p className="sfs-section__lead">
              Adding captions to your Shorts isn't just a user experience upgrade — it's a direct
              lever on every metric the algorithm uses to decide who sees your content.
            </p>

            <div className="sfs-algo-content">
              <div className="sfs-algo-block">
                <h3>1. Watch Time & Completion Rate</h3>
                <p>
                  The most important ranking signal across YouTube Shorts, TikTok, and Instagram
                  Reels is <strong>how much of your video people actually watch</strong>. When a
                  viewer encounters your Short without sound, they make a split-second decision:
                  "Is this worth stopping for?" Captions answer that question instantly — the
                  viewer reads the first line, gets hooked, and keeps watching.
                </p>
                <p>
                  Studies by Social Insider and Hootsuite in 2025 found that Reels with captions
                  had a <strong>35–40% higher completion rate</strong> than uncaptioned equivalents.
                  That completion rate directly feeds the algorithm's "quality score," which
                  determines how broadly to distribute the Short beyond your existing followers.
                </p>
              </div>

              <div className="sfs-algo-block">
                <h3>2. Re-Watches and Loop Count</h3>
                <p>
                  TikTok's algorithm gives significant weight to <strong>video loops</strong> — how
                  many times a viewer watches your video start to finish. Captions encourage
                  re-watches because viewers who missed something in audio catch it visually on a
                  second loop. For educational or complex content, this looping behaviour can be
                  the difference between a Short reaching 5,000 or 500,000 people.
                </p>
              </div>

              <div className="sfs-algo-block">
                <h3>3. Saves, Shares, and Comments</h3>
                <p>
                  Captioned Shorts generate more <strong>saves and shares</strong> because they're
                  easier to share in contexts where audio can't be played — sending a Short to a
                  colleague in a meeting, sharing in a WhatsApp group, or posting in a Discord
                  server. Shares signal high value to every algorithm. A single viral share can
                  expose your Short to thousands of new accounts in a network the algorithm would
                  never have targeted organically.
                </p>
              </div>

              <div className="sfs-algo-block">
                <h3>4. Accessibility Signals on YouTube</h3>
                <p>
                  YouTube has explicitly stated that <strong>accessibility signals matter</strong>{' '}
                  in content quality evaluation. Videos with captions receive a marginal ranking
                  benefit because YouTube's mission includes making content accessible to all
                  users. Burned-in captions (the kind Scenith generates) provide the most reliable
                  form of captioning — they work on every device, every browser, and every app
                  regardless of caption toggle settings.
                </p>
              </div>

              <div className="sfs-algo-block">
                <h3>5. First-48-Hour Velocity</h3>
                <p>
                  All three major Shorts platforms test new content with a small seed audience in
                  the first 48 hours. The metrics from this seed group determine whether the Short
                  gets pushed to a wider audience. Captions improve every metric in this critical
                  window — watch time, completion, shares, saves — meaning captioned Shorts clear
                  the "test" phase with stronger numbers and get pushed harder in the critical
                  first two days.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── PLATFORM COMPARISON ── */}
        <section
          className="sfs-section sfs-platforms"
          id="caption-requirements-by-platform"
          aria-labelledby="platforms-title"
        >
          <div className="sfs-container">
            <h2 id="platforms-title" className="sfs-section__h2">
              Caption Requirements & Best Practices by Platform (2026)
            </h2>
            <p className="sfs-section__lead">
              Each platform has different caption rendering, display specs, and audience behaviour.
              Here's exactly what works where.
            </p>

            <div className="sfs-platform-cards">
              {[
                {
                  platform: 'YouTube Shorts',
                  icon: '▶️',
                  specs: ['Vertical 9:16 required', 'Max 60 seconds (180s rolling out)', 'Subtitles display at bottom 15% of frame', 'Auto-captions often inaccurate — burned-in preferred'],
                  tips: ['Use large font (40px+ equivalent)', 'Avoid bottom 10% — subscribe button overlaps', 'High contrast text for outdoor viewing', 'Short caption segments: 3–5 words per card'],
                  verdict: 'Burned-in captions essential — YouTube auto-captions miss 20–30% of words',
                },
                {
                  platform: 'Instagram Reels',
                  icon: '📸',
                  specs: ['Vertical 9:16 or 4:5', 'Max 90 seconds for Reels feed', 'Auto-captions available but styling limited', 'Safe zone: avoid top 15% and bottom 20%'],
                  tips: ['Bold styles outperform minimal on Reels', 'Use white with dark stroke universally', 'Centre alignment performs better than left', 'Add captions for stories too — same file'],
                  verdict: 'Styled burned-in captions get 35% more engagement than Instagram native captions',
                },
                {
                  platform: 'TikTok',
                  icon: '🎵',
                  specs: ['Vertical 9:16 strongly preferred', 'Max 10 minutes (3-min sweet spot for virality)', 'Native auto-captions available but not customisable', 'TikTok UI overlays bottom 25%'],
                  tips: ['Keep captions above bottom 25%', 'Word-pop style dominates viral TikToks', 'Use yellow or white — never grey', 'Short, punchy segments match TikTok pace'],
                  verdict: 'Custom styled captions differentiate your content from TikTok native competitors',
                },
                {
                  platform: 'LinkedIn Video',
                  icon: '💼',
                  specs: ['16:9 horizontal or 1:1 square', 'Vertical 4:5 for mobile feed', 'Auto-play without sound in feed', 'Professional audience expects quality'],
                  tips: ['Clean minimal style wins on LinkedIn', 'Longer caption segments (5–8 words) for professional content', 'High-contrast, no flashy animations', 'Caption accuracy critical — professional audience notices errors'],
                  verdict: 'LinkedIn videos with captions get 3× more engagement in professional feeds',
                },
              ].map(({ platform, icon, specs, tips, verdict }) => (
                <article key={platform} className="sfs-platform-card">
                  <div className="sfs-platform-card__header">
                    <span className="sfs-platform-icon" aria-hidden="true">{icon}</span>
                    <h3>{platform}</h3>
                  </div>
                  <div className="sfs-platform-cols">
                    <div>
                      <h4>Specs & Constraints</h4>
                      <ul>
                        {specs.map((s) => (
                          <li key={s}>{s}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4>Caption Best Practices</h4>
                      <ul>
                        {tips.map((t) => (
                          <li key={t}>{t}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="sfs-platform-verdict">💡 {verdict}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── CREATOR TYPES ── */}
        <section
          className="sfs-section sfs-creators"
          id="subtitle-generator-for-every-creator"
          aria-labelledby="creators-title"
        >
          <div className="sfs-container">
            <h2 id="creators-title" className="sfs-section__h2">
              Built for Every Type of Short-Form Creator
            </h2>
            <p className="sfs-section__lead">
              Whether you post once a week or produce a hundred Shorts a month, Scenith's subtitle
              generator fits your workflow.
            </p>

            <div className="sfs-creators-grid">
              {[
                {
                  type: 'Podcast Clippers',
                  icon: '🎙️',
                  pain: 'Podcast clips are the #1 driver of short-form growth but they have dense dialogue that needs perfect captions.',
                  solution: 'Whisper AI handles multi-speaker audio with high accuracy. Upload your podcast clip, auto-generate captions, and export in 3 minutes. Batch-caption 10 clips faster than editing one manually.',
                },
                {
                  type: 'Faceless Channel Creators',
                  icon: '🎭',
                  pain: 'Faceless Shorts rely 100% on text and audio — captions aren\'t optional, they\'re the entire content delivery mechanism.',
                  solution: 'Bold, full-screen caption styles replace on-camera presence. Scenith\'s style presets are specifically designed for maximum text impact on faceless content formats.',
                },
                {
                  type: 'Social Media Managers',
                  icon: '📊',
                  pain: 'Managing captions across 5+ brand accounts and multiple platforms is a full-time job without the right tools.',
                  solution: 'Upload, generate, and download captioned Shorts in under 3 minutes per video. No platform-specific re-editing needed — one exported MP4 works everywhere.',
                },
                {
                  type: 'Educators & Coaches',
                  icon: '🎓',
                  pain: 'Educational Shorts need precise, readable captions for comprehension — errors undermine credibility.',
                  solution: 'Whisper AI accuracy of 95–98% handles technical vocabulary. The word-by-word editor lets you correct any term in seconds. Clean minimal caption styles keep focus on the content.',
                },
                {
                  type: 'Multilingual Creators',
                  icon: '🌏',
                  pain: 'Creating content for global audiences requires captions in multiple languages — traditionally expensive and time-consuming.',
                  solution: 'Whisper auto-detects and transcribes 50+ languages from the same upload. Caption your Hindi Short in one session and your English one in the next — no language switching needed.',
                },
                {
                  type: 'Brands & Marketers',
                  icon: '📣',
                  pain: 'Ad Shorts and product videos without captions lose 85% of their message in silent autoplay environments.',
                  solution: 'Brand your captions with custom font families, brand colours, and consistent positioning. Every Short becomes an accessible, on-brand touchpoint even before audio starts.',
                },
              ].map(({ type, icon, pain, solution }) => (
                <article key={type} className="sfs-creator-card">
                  <div className="sfs-creator-icon" aria-hidden="true">{icon}</div>
                  <h3>{type}</h3>
                  <div className="sfs-creator-pain">
                    <span>Pain point:</span> {pain}
                  </div>
                  <div className="sfs-creator-solution">
                    <span>Scenith solution:</span> {solution}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── TECHNICAL DEEP DIVE ── */}
        <section
          className="sfs-section sfs-tech"
          id="how-ai-subtitle-generation-works-for-shorts"
          aria-labelledby="tech-title"
        >
          <div className="sfs-container">
            <h2 id="tech-title" className="sfs-section__h2">
              Under the Hood: How Whisper AI Powers Shorts Subtitle Generation
            </h2>
            <p className="sfs-section__lead">
              Understanding how the technology works helps you get the best results from any AI
              subtitle tool — and explains why accuracy varies between tools.
            </p>

            <div className="sfs-tech-blocks">
              <div className="sfs-tech-block">
                <h3>OpenAI Whisper: The Gold Standard for Speech Recognition</h3>
                <p>
                  Whisper is a general-purpose speech recognition model trained on 680,000 hours
                  of multilingual, multi-task supervised data collected from the internet. This
                  massive and diverse dataset is what gives Whisper its robustness against
                  accents, background noise, and technical vocabulary — areas where older
                  speech-to-text models consistently failed.
                </p>
                <p>
                  Unlike traditional ASR (Automatic Speech Recognition) systems that were trained
                  in controlled studio conditions, Whisper was trained on real-world audio — the
                  same messy, imperfect audio that short-form creators record with their phones.
                  This is why it achieves <strong>95–98% accuracy</strong> on typical creator
                  content versus the 75–85% of older generation tools.
                </p>
              </div>

              <div className="sfs-tech-block">
                <h3>Word-Level Timestamp Generation</h3>
                <p>
                  What separates a great AI subtitle tool from a mediocre one isn't transcription
                  accuracy — it's <strong>timestamp precision</strong>. Every word in your Short
                  needs to appear and disappear within 100 milliseconds of when it's spoken.
                  Off-sync captions are worse than no captions — they confuse viewers and signal
                  low-quality production.
                </p>
                <p>
                  Scenith uses Whisper's forced alignment pipeline to generate word-level
                  timestamps rather than just sentence-level ones. This means captions can be
                  segmented into the short 2–4 word bursts that perform best on Shorts, with each
                  word precisely timed to the frame. The result looks and feels like professional
                  broadcast captioning, not an AI draft.
                </p>
              </div>

              <div className="sfs-tech-block">
                <h3>Vertical Video Rendering Pipeline</h3>
                <p>
                  Most subtitle tools were built for horizontal 16:9 video and retrofitted for
                  vertical. This creates caption placement, font scaling, and safe zone issues
                  specific to 9:16 content. Scenith's rendering engine was designed with vertical
                  video first — understanding the UI overlays of Shorts (subscribe button, like
                  button, share button) and positioning captions to avoid collision zones.
                </p>
                <p>
                  Font scaling is calculated relative to the video's actual pixel dimensions, not
                  the preview container. This ensures captions that look great in the editor
                  render at exactly the right size in the exported MP4 — no surprises when you
                  upload to YouTube or Instagram.
                </p>
              </div>

              <div className="sfs-tech-block">
                <h3>Smart Segment Splitting</h3>
                <p>
                  Raw Whisper output groups words into long sentences that are unreadable on a
                  phone screen. Scenith post-processes the transcript using NLP-based phrase
                  boundary detection to split captions at natural linguistic breakpoints — after
                  clauses, before conjunctions, at breath pauses. The result is caption segments
                  that feel natural to read and match the rhythmic pacing of short-form content
                  rather than looking like a transcript dumped onto the screen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── COMPARISON TABLE ── */}
        <section
          className="sfs-section sfs-compare"
          id="subtitle-generator-for-shorts-comparison"
          aria-labelledby="compare-title"
        >
          <div className="sfs-container">
            <h2 id="compare-title" className="sfs-section__h2">
              Scenith vs Other Caption Tools for Shorts (2026 Comparison)
            </h2>
            <p className="sfs-section__lead">
              Not all subtitle generators are built for short-form video. Here's how Scenith
              compares to the most popular alternatives.
            </p>

            <div className="sfs-compare-table-wrap">
              <table className="sfs-compare-table">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th className="sfs-col-highlight">Scenith</th>
                    <th>CapCut</th>
                    <th>Kapwing</th>
                    <th>Submagic</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['AI Accuracy', '95–98%', '85–90%', '80–88%', '90–95%'],
                    ['Free Plan', '✅ Yes', '✅ Yes', '⚠️ Limited', '❌ Paid only'],
                    ['Watermark-free', '✅ Free plan', '❌ Watermark', '❌ Watermark', '❌ Watermark'],
                    ['Custom Styles', '✅ 25+ presets', '✅ Many', '⚠️ Basic', '✅ Good'],
                    ['Vertical Optimised', '✅ 9:16 first', '✅ Yes', '⚠️ Partial', '✅ Yes'],
                    ['Browser-based', '✅ No install', '❌ App needed', '✅ Yes', '✅ Yes'],
                    ['Languages', '50+', '~40', '~30', '~48'],
                    ['Manual Editing', '✅ Full editor', '✅ Full editor', '✅ Yes', '⚠️ Limited'],
                    ['Export Quality', 'Up to 4K', 'Up to 4K', 'Up to 1080p', 'Up to 1080p'],
                    ['Processing Speed', '~60 seconds', '~120 seconds', '~180 seconds', '~90 seconds'],
                  ].map(([feature, ...vals]) => (
                    <tr key={feature}>
                      <td>{feature}</td>
                      {vals.map((v, i) => (
                        <td key={i} className={i === 0 ? 'sfs-col-highlight' : ''}>
                          {v}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── TIPS & TRICKS ── */}
        <section
          className="sfs-section sfs-tips"
          id="caption-tips-for-viral-shorts"
          aria-labelledby="tips-title"
        >
          <div className="sfs-container">
            <h2 id="tips-title" className="sfs-section__h2">
              15 Caption Tips That Will Make Your Shorts Go Viral
            </h2>
            <p className="sfs-section__lead">
              These are the specific, actionable caption strategies used by creators with millions
              of followers — now accessible to anyone with Scenith.
            </p>

            <div className="sfs-tips-grid">
              {[
                { n: '1', tip: 'Hook with captions in the first 2 seconds', detail: 'The first caption card should state the value proposition or create curiosity. Viewers decide in 1.5 seconds whether to keep watching.' },
                { n: '2', tip: 'Use 3–5 words per caption card maximum', detail: 'Short cards force faster reading, which creates visual momentum. Long sentences lose viewers before they finish reading.' },
                { n: '3', tip: 'Never put captions over faces', detail: 'Viewers connect with faces. Position captions below the mouth line or above the chest — never blocking eyes.' },
                { n: '4', tip: 'Match caption pace to speech rhythm', detail: 'Fast talkers need faster caption segments. Slow, dramatic content benefits from one word at a time. Scenith\'s editor lets you split and merge any segment.' },
                { n: '5', tip: 'Use CAPS for emphasis', detail: 'Capitalising key words in captions creates visual emphasis that works even when viewers are skim-reading. "You\'re DOING IT WRONG" outperforms "You\'re doing it wrong."' },
                { n: '6', tip: 'Add [sound descriptions] for silent moments', detail: 'When your Short has a significant sound effect or music change, a [brackets description] tells the full story to silent viewers.' },
                { n: '7', tip: 'Keep caption style consistent across all Shorts', detail: 'Caption style is part of your brand identity. Viewers who see your captions on their feed should instantly recognise your content before reading a word.' },
                { n: '8', tip: 'Test dark vs light backgrounds first', detail: 'Different caption colours work on different video backgrounds. Preview your captioned Short in the editor before exporting to ensure readability.' },
                { n: '9', tip: 'Use positioning to guide attention', detail: 'Moving captions from bottom to center for key moments creates visual hierarchy. The most important line of your Short deserves center-screen placement.' },
                { n: '10', tip: 'Spell out numbers and abbreviations', detail: 'AI may caption "5k" correctly but viewers read "five thousand" more naturally. Edit numbers and abbreviations in the Scenith editor for clarity.' },
                { n: '11', tip: 'Match caption energy to content type', detail: 'Comedy needs bold, chaotic caps. Education needs clean, minimal. Drama needs subtle, elegant. Style choice communicates tone before a word is read.' },
                { n: '12', tip: 'Dont caption everything — silence has power', detail: 'If your Short has an intentional pause for effect, leave that caption card empty or delay the next one. Captions that perfectly sync with silence enhance dramatic moments.' },
                { n: '13', tip: 'Export at the highest quality your plan allows', detail: 'Platforms compress video on upload. Starting from a 1080p or 2K export gives your Short more headroom to survive platform compression and still look sharp.' },
                { n: '14', tip: 'Re-caption old Shorts with new styles', detail: 'If you have old Shorts sitting at low views, re-upload with fresh caption styles. New visual presentation can reset the algorithm\'s evaluation of the content.' },
                { n: '15', tip: 'Add captions to the first frame of B-roll', detail: 'When cutting to B-roll footage, add a caption that narrates what viewers are seeing. Combines visual and textual storytelling for maximum retention.' },
              ].map(({ n, tip, detail }) => (
                <div key={n} className="sfs-tip-card">
                  <div className="sfs-tip-n" aria-hidden="true">{n}</div>
                  <h3 className="sfs-tip-title">{tip}</h3>
                  <p className="sfs-tip-detail">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="sfs-section sfs-testimonials" aria-labelledby="testimonials-title">
          <div className="sfs-container">
            <h2 id="testimonials-title" className="sfs-section__h2">
              What Short-Form Creators Say About Scenith
            </h2>

            <div className="sfs-testimonials-grid">
              {[
                {
                  quote: 'I was spending 45 minutes per Short just on captions in CapCut. Scenith cut that to under 4 minutes. I now post 3× more Shorts per week and my channel hit 10K in 2 months.',
                  name: 'Rahul M.',
                  handle: 'Finance Shorts creator, 12K subscribers',
                  stars: 5,
                },
                {
                  quote: 'The bold word-pop style is exactly what was going viral on TikTok and I couldn\'t figure out how to do it. Scenith had it as a one-click preset. My Reels engagement literally doubled overnight.',
                  name: 'Priya S.',
                  handle: 'Lifestyle & wellness creator',
                  stars: 5,
                },
                {
                  quote: 'We manage Shorts for 8 different brand accounts. Scenith is the only tool that doesn\'t put a watermark on the free export and lets us customise to each brand\'s style.',
                  name: 'Alex T.',
                  handle: 'Social media agency, Mumbai',
                  stars: 5,
                },
                {
                  quote: 'My podcast clips in Hindi were getting 200–300 views. After captioning with Scenith the same clips started hitting 5K–20K. The algorithm clearly rewards captions.',
                  name: 'Deepak V.',
                  handle: 'Hindi podcast creator, 45K followers',
                  stars: 5,
                },
                {
                  quote: 'I\'m not technical at all. But Scenith was genuinely simple — upload, press generate, edit two words, download. That was it. My first captioned Short got 4× my usual views.',
                  name: 'Emma L.',
                  handle: 'Parenting content creator',
                  stars: 5,
                },
                {
                  quote: 'As someone who is hard of hearing, I appreciate that this tool makes it easy for ANY creator to add captions. Accessibility shouldn\'t require effort — Scenith makes it effortless.',
                  name: 'Kiran R.',
                  handle: 'Viewer & accessibility advocate',
                  stars: 5,
                },
              ].map(({ quote, name, handle, stars }) => (
                <blockquote key={name} className="sfs-testimonial">
                  <div className="sfs-testimonial-stars" aria-label={`${stars} out of 5 stars`}>
                    {'⭐'.repeat(stars)}
                  </div>
                  <p className="sfs-testimonial-quote">"{quote}"</p>
                  <footer>
                    <cite className="sfs-testimonial-name">{name}</cite>
                    <span className="sfs-testimonial-handle">{handle}</span>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section
          className="sfs-section sfs-faq"
          id="faq"
          aria-labelledby="faq-title"
        >
          <div className="sfs-container">
            <h2 id="faq-title" className="sfs-section__h2">
              Frequently Asked Questions: AI Subtitle Generator for Shorts
            </h2>

            <div className="sfs-faq-grid">
              {[
                {
                  q: 'Can I use this subtitle generator specifically for YouTube Shorts?',
                  a: 'Yes. Scenith\'s AI subtitle generator is optimised for vertical short-form videos including YouTube Shorts (9:16 ratio). Captions are sized and positioned for mobile-first viewing where most Shorts are consumed, and the safe zone respects the YouTube Shorts UI overlays.',
                },
                {
                  q: 'Do captions help YouTube Shorts get more views?',
                  a: 'Absolutely. 85% of short-form videos are watched without sound. Captions keep viewers watching longer, which signals quality to the YouTube Shorts algorithm and increases reach. Studies show captioned Shorts get 40% more views on average in the first 48 hours — the most critical window for algorithmic distribution.',
                },
                {
                  q: 'What caption styles work best for Shorts and Reels in 2026?',
                  a: 'Bold, high-contrast captions with word-by-word highlight are trending in 2026. Large sans-serif fonts (40px+ equivalent), white or yellow text with dark stroke, centre-positioned at lower-third, and short 2–4 word segments per card perform best. Scenith offers all these as one-click preset styles.',
                },
                {
                  q: 'Is there a watermark on exported Shorts?',
                  a: 'Free plan users get watermark-free exports on the basic quality tier. Upgrading to Creator Lite or above removes all watermarks and unlocks 1080p and 2K export for Shorts — ideal for platform-quality delivery.',
                },
                {
                  q: 'How long does it take to caption a 60-second Short?',
                  a: 'Processing a 60-second Short takes approximately 30–60 seconds with Scenith\'s Whisper AI engine. Including upload and the quick review/edit step, most creators go from raw video to download in under 3 minutes total.',
                },
                {
                  q: 'Can I add captions to Instagram Reels and TikTok too?',
                  a: 'Yes. The tool supports any vertical video regardless of which platform it was originally created for. Upload your Reel or TikTok export, generate captions, customise the style, and download the MP4 ready to re-upload on any platform — YouTube, Instagram, TikTok, LinkedIn, X, or anywhere else.',
                },
                {
                  q: 'What languages does the subtitle generator support for Shorts?',
                  a: 'Scenith supports 50+ languages automatically detected by Whisper AI, including English, Hindi, Spanish, Portuguese (Brazil and Portugal), French, Arabic, Japanese, Korean, German, Italian, Mandarin, and many more. Ideal for multilingual Shorts creators targeting global audiences.',
                },
                {
                  q: 'Do I need to install any software to caption my Shorts?',
                  a: 'No. Scenith is 100% browser-based. Upload your Short from any device, generate captions, edit, and download — all in your browser with zero installations, zero plugins, and zero configuration.',
                },
              ].map(({ q, a }) => (
                <article key={q} className="sfs-faq-item">
                  <h3>{q}</h3>
                  <p>{a}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── PEOPLE ALSO ASK ── */}
        <section
          className="sfs-section sfs-paa"
          id="people-also-ask"
          aria-labelledby="paa-title"
        >
          <div className="sfs-container">
            <h2 id="paa-title" className="sfs-section__h2">
              People Also Ask About Subtitles for Shorts
            </h2>
            <div className="sfs-paa-grid">
              {[
                {
                  q: 'How do I auto-caption YouTube Shorts for free?',
                  a: 'YouTube offers built-in auto-captions, but they have 15–25% error rates and no styling control. For free, professional-quality captions, use Scenith: upload your Short, generate captions with Whisper AI, customise the style, and download the captioned MP4 — completely free, no credit card needed.',
                },
                {
                  q: 'Should I burn captions into Shorts or use SRT files?',
                  a: 'For Shorts specifically, burned-in captions (hardcoded into the MP4) are superior. Platforms may not display SRT captions on Shorts. Burned captions work everywhere, look exactly how you designed them, and display even when users have captions disabled in their settings.',
                },
                {
                  q: 'Why are my YouTube Shorts auto-captions wrong?',
                  a: 'YouTube\'s auto-captions use an older speech recognition model that struggles with accents, technical terms, and non-standard speech. Whisper AI (used by Scenith) is trained on 680,000 hours of diverse audio and achieves significantly higher accuracy — especially for Indian English, regional accents, and fast speech.',
                },
                {
                  q: 'Can I add captions to YouTube Shorts after uploading?',
                  a: 'You can add SRT captions to existing Shorts through YouTube Studio\'s subtitle editor. However, for burned-in captions (the kind that can\'t be turned off and are styled exactly how you want), you need to caption the video before uploading. Download the captioned MP4 from Scenith and re-upload.',
                },
              ].map(({ q, a }) => (
                <div key={q} className="sfs-paa-item">
                  <h3>{q}</h3>
                  <p>{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="sfs-section sfs-final-cta" aria-labelledby="final-cta-title">
          <div className="sfs-container">
            <div className="sfs-final-cta-card">
              <div className="sfs-final-cta-glow" aria-hidden="true" />
              <h2 id="final-cta-title" className="sfs-final-cta__h2">
                Ready to Caption Your Shorts?
              </h2>
              <p className="sfs-final-cta__sub">
                Join 2,000+ creators who use Scenith to make every Short reach its maximum
                audience. Free to start, no credit card, no watermark.
              </p>

              <a
                href={toolUrl}
                className="sfs-cta-primary sfs-cta-primary--large"
                aria-label="Open Scenith subtitle generator for Shorts"
              >
                <span className="sfs-cta-icon">⚡</span>
                Add Captions to My Shorts — Free
                <span className="sfs-cta-arrow">→</span>
              </a>

              <ul className="sfs-final-trust" aria-label="Final trust indicators">
                {[
                  '✅ No watermark on free exports',
                  '✅ No credit card required',
                  '✅ Under 3 minutes per Short',
                  '✅ 50+ language support',
                  '✅ Works on all platforms',
                ].map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── RELATED TOOLS ── */}
        <section className="sfs-section sfs-related" aria-labelledby="related-title">
          <div className="sfs-container">
            <h2 id="related-title" className="sfs-section__h2 sfs-section__h2--sm">
              More Scenith Tools for Creators
            </h2>
            <div className="sfs-related-grid">
              {[
                { href: '/tools/add-subtitles-to-videos', label: 'AI Subtitle Generator', desc: 'Full-length video subtitle tool', icon: '📝' },
                { href: '/tools/ai-voice-generation', label: 'AI Voice Generator', desc: 'Text-to-speech for Shorts narration', icon: '🎙️' },
                { href: '/tools/image-editing', label: 'Free Image Editor', desc: 'Design Shorts thumbnails & covers', icon: '🖼️' },
              ].map(({ href, label, desc, icon }) => (
                <Link key={href} href={href} className="sfs-related-card">
                  <span className="sfs-related-icon" aria-hidden="true">{icon}</span>
                  <div>
                    <div className="sfs-related-label">{label}</div>
                    <div className="sfs-related-desc">{desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}