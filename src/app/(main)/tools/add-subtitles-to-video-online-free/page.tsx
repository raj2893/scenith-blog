// app/tools/add-subtitles-to-video-online-free/page.tsx
// Static SEO landing page — no client-side state needed.

import type { Metadata } from 'next';
import Script from 'next/script';
import './AddSubtitlesOnlineFree.css';

/* ─────────────────────────────────────────────
   METADATA  (Next.js 13+ App Router)
───────────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'Add Subtitles to Video Online Free — No Download, No Sign-Up | Scenith',
  description:
    'Add subtitles to any video online, free — no software download, no watermark on export. ' +
    'AI-powered transcription in 50+ languages. Edit timing, fonts & colors. Download MP4 in minutes.',
  keywords: [
    'add subtitles to video online free',
    'subtitle video online',
    'free subtitle generator',
    'add captions to video free',
    'burn subtitles into video',
    'online subtitle maker',
    'AI subtitle generator free',
    'video captioning tool',
    'add text to video online',
    'auto subtitle generator',
  ],
  alternates: {
    canonical: 'https://scenith.in/tools/add-subtitles-to-video-online-free',
  },
  openGraph: {
    title: 'Add Subtitles to Video Online Free | Scenith AI',
    description:
      'Free online tool to add, edit and burn subtitles into any video. ' +
      'AI generates captions in 50+ languages. Download watermark-free MP4 instantly.',
    url: 'https://scenith.in/tools/add-subtitles-to-video-online-free',
    siteName: 'Scenith',
    images: [
      {
        url: 'https://scenith.in/images/AddSubtitlesSS.png',
        width: 1200,
        height: 630,
        alt: 'Add subtitles to video online free — Scenith AI tool',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Add Subtitles to Video Online Free | Scenith',
    description:
      'AI subtitle generator — 50+ languages, custom styles, watermark-free MP4 download.',
    images: ['https://scenith.in/images/AddSubtitlesSS.png'],
    site: '@scenith_in',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  },
};

/* ─────────────────────────────────────────────
   STRUCTURED DATA helpers
───────────────────────────────────────────── */
const schemaWebApp = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  '@id': 'https://scenith.in/tools/add-subtitles-to-video-online-free#webapp',
  name: 'Scenith — Add Subtitles to Video Online Free',
  description:
    'Browser-based AI tool to add subtitles to videos online for free. ' +
    'Auto-generates captions in 50+ languages, customise styling, burn-in and download MP4.',
  url: 'https://scenith.in/tools/add-subtitles-to-video-online-free',
  applicationCategory: 'MultimediaApplication',
  operatingSystem: 'Web Browser',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
  },
  screenshot: 'https://scenith.in/images/AddSubtitlesSS.png',
  author: {
    '@type': 'Organization',
    '@id': 'https://scenith.in/#organization',
    name: 'Scenith',
    url: 'https://scenith.in',
  },
};

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',  item: 'https://scenith.in' },
    { '@type': 'ListItem', position: 2, name: 'Tools', item: 'https://scenith.in/tools' },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Add Subtitles to Video Online Free',
      item: 'https://scenith.in/tools/add-subtitles-to-video-online-free',
    },
  ],
};

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can I add subtitles to a video online without installing software?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Yes. Scenith is entirely browser-based — upload your video, let the AI generate captions, ' +
          'edit if needed, and download the finished MP4 with burned-in subtitles, all without ' +
          'installing any software on your device.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it really free to add subtitles to videos online?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Scenith offers a free tier that lets you generate, customise, and download subtitled videos ' +
          'at up to 720p resolution without a watermark. Premium plans unlock 1080p, 2K, and 4K exports.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to add subtitles online?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'For a 1-minute video, AI subtitle generation typically completes in under 60 seconds. ' +
          'Rendering the final MP4 with burned-in captions takes an additional 1–2 minutes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which languages can I add subtitles in?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Scenith uses OpenAI Whisper, supporting 50+ languages including English, Spanish, French, ' +
          'Hindi, Mandarin, Arabic, Japanese, Portuguese, German, Korean and more. The AI auto-detects ' +
          'the spoken language.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I customise the subtitle font and position?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Yes. The built-in editor lets you change font family, colour, size, stroke, background, ' +
          'opacity, letter-spacing and exact X/Y position — all previewed live before you export.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do the subtitles get permanently burned into the video?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'When you click "Process Subtitles", the captions are permanently burned into the MP4 so ' +
          'they display everywhere — even platforms that do not support separate caption tracks.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the maximum video length I can subtitle for free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'The free plan supports videos up to 1 minute in length. Upgrade to Creator Lite, Creator, ' +
          'or Studio plans for longer video support.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a watermark on the free version?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Free plan exports at 720p without a watermark. If you need 1080p or higher resolution ' +
          'exports, upgrade to a paid plan.',
      },
    },
  ],
};

const schemaHowTo = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Add Subtitles to a Video Online for Free',
  description:
    'Step-by-step guide to automatically adding subtitles to any video online using AI — ' +
    'no software required.',
  totalTime: 'PT5M',
  tool: [{ '@type': 'HowToTool', name: 'Scenith AI Subtitle Tool' }],
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Upload Your Video',
      text:
        'Visit the Scenith subtitle tool and upload your MP4, MOV, AVI or other video file. ' +
        'Your file is securely processed on our servers.',
      url: 'https://scenith.in/tools/add-subtitles-to-videos',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Generate Subtitles with AI',
      text:
        'Click "Generate Subtitles". The Whisper AI model transcribes the audio, timestamps ' +
        'every word, and segments captions automatically.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Edit Subtitle Text and Styling',
      text:
        'Review each caption in the timeline editor. Fix any errors, adjust timing, change ' +
        'fonts, colours, size, position, and choose from professional subtitle style presets.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Process and Download',
      text:
        'Click "Process Subtitles" to burn captions permanently into the video. Download ' +
        'the finished MP4 when ready — free at up to 720p.',
    },
  ],
};

/* ─────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────── */
export default function AddSubtitlesOnlineFree() {
  const toolUrl =
    'https://scenith.in/tools/add-subtitles-to-videos?utm_source=seo-lp&utm_medium=cta&utm_campaign=add-subtitles-online-free';

  const languages = [
    'English','Hindi','Spanish','French','German','Mandarin','Japanese','Portuguese',
    'Arabic','Korean','Italian','Russian','Turkish','Dutch','Polish','Swedish',
    'Norwegian','Danish','Finnish','Greek','Hebrew','Thai','Vietnamese','Indonesian',
    'Malay','Swahili','Urdu','Bengali','Punjabi','Tamil','Telugu','Kannada',
    'Marathi','Gujarati','Romanian','Hungarian','Czech','Slovak','Ukrainian',
    'Catalan','Croatian','Serbian','Bulgarian','Lithuanian','Latvian','Estonian',
    'Slovenian','Albanian','Macedonian','Bosnian','+ more',
  ];

  return (
    <div className="page-wrapper">
      {/* ── Structured Data ─────────────────── */}
      <Script id="sd-webapp"     type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWebApp)    }} />
      <Script id="sd-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <Script id="sd-faq"        type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ)       }} />
      <Script id="sd-howto"      type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaHowTo)     }} />

      {/* ── Breadcrumb ──────────────────────── */}
      <nav className="breadcrumb-strip" aria-label="Breadcrumb">
        <div className="container">
          <ol itemScope itemType="https://schema.org/BreadcrumbList">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <a href="/" itemProp="item"><span itemProp="name">Home</span></a>
              <meta itemProp="position" content="1" />
            </li>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <a href="/tools" itemProp="item"><span itemProp="name">Tools</span></a>
              <meta itemProp="position" content="2" />
            </li>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span itemProp="name">Add Subtitles to Video Online Free</span>
              <meta itemProp="position" content="3" />
            </li>
          </ol>
        </div>
      </nav>

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <header className="hero section" role="banner">
        <div className="hero-bg-number" aria-hidden="true">CC</div>
        <div className="container hero__inner">
          <div className="hero-label" aria-label="Status: Free tool, AI powered">
            <span aria-hidden="true" />
            Free Tool · AI-Powered · No Download Required
          </div>

          <h1 className="hero-headline">
            Add Subtitles to <em>Any Video</em><br />
            Online — Free,<br />Fast &amp; Accurate
          </h1>

          <p className="hero-subtext">
            Upload your video, let <strong>Whisper AI</strong> generate captions in under a minute,
            customise every detail, then download a clean MP4 with subtitles permanently burned in.
            No software install. No watermark on the free plan. <strong>50+ languages</strong> supported.
          </p>

          <div className="cta-block">
            <a
              href={toolUrl}
              className="btn-primary"
              rel="noopener"
              aria-label="Open the free AI subtitle generator tool"
            >
              Add Subtitles Free Now
              <span className="arrow" aria-hidden="true">→</span>
            </a>
            <a href="#how-it-works" className="btn-secondary">See how it works ↓</a>
          </div>

          <div className="trust-row" role="list" aria-label="Tool highlights">
            {[
              ['✓', '100% Free tier available'],
              ['✓', 'No watermark at 720p'],
              ['✓', '50+ languages auto-detected'],
              ['✓', 'Runs in your browser'],
              ['✓', 'Download as MP4 instantly'],
            ].map(([icon, label]) => (
              <div className="trust-badge" role="listitem" key={label}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
                  <circle cx="6" cy="6" r="6" />
                </svg>
                {icon} {label}
              </div>
            ))}
          </div>
        </div>

        {/* ticker */}
        <div className="hero-ticker" aria-hidden="true">
          <div className="ticker-track">
            {[...Array(2)].flatMap(() => [
              'MP4 · MOV · AVI · MKV · WMV',
              'Whisper AI Transcription',
              '50+ Languages',
              'Custom Fonts & Colours',
              'Burned-In Captions',
              'No Software Install',
              'Free Up to 720p',
              'Instant MP4 Download',
            ]).map((t, i) => (
              <span className="ticker-item" key={i}>{t}</span>
            ))}
          </div>
        </div>
      </header>

      {/* ── Stats ──────────────────────────── */}
      <section className="section section--alt" aria-labelledby="stats-title">
        <div className="container">
          <p id="stats-title" className="section-eyebrow">By the numbers</p>
          <div className="stats-row" role="list">
            {[
              ['95–98%',   'Transcription accuracy',      'On clear audio with standard accents'],
              ['&lt;60s',  'Average generation time',     'For videos under 60 seconds'],
              ['50+',      'Supported languages',         'Auto-detected by Whisper AI'],
              ['1 500+',   'Active creators',             'Trust Scenith for video captions'],
              ['0',        'Watermarks on 720p exports',  'Always free, always clean'],
            ].map(([num, label, note]) => (
              <div className="stat-cell" role="listitem" key={label}>
                <div className="stat-num" dangerouslySetInnerHTML={{ __html: num }} />
                <div className="stat-label">{label}</div>
                <div className="stat-note">{note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          MEGA CTA — the focal point
      ══════════════════════════════════════ */}
      <section
        className="mega-cta-section"
        id="start-free"
        aria-labelledby="mega-cta-headline"
        role="region"
      >
        <div className="container mega-cta-inner">
          <p className="mega-cta-label">Ready? Takes under 2 minutes</p>
          <h2 className="mega-cta-headline" id="mega-cta-headline">
            Start Adding<br />
            <em>Subtitles</em><br />
            Right Now
          </h2>
          <p className="mega-cta-sub">
            No account required to preview. Free-tier users download at 720p
            with no watermark. Upgrade for 1080p → 4K.
          </p>
          <a
            href={toolUrl}
            className="btn-mega"
            rel="noopener"
            aria-label="Launch the free AI subtitle generator"
          >
            <span className="icon-wrap" aria-hidden="true">🎬</span>
            Open Free Subtitle Generator
          </a>
          <div className="cta-meta-row" role="list">
            {[
              'No software install',
              'No credit card',
              'Works on mobile',
              'Instant MP4 download',
            ].map((t) => (
              <span className="cta-meta-item" role="listitem" key={t}>
                <span className="check" aria-hidden="true">✓</span> {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          HOW IT WORKS
      ══════════════════════════════════════ */}
      <section className="section section--border-top" id="how-it-works" aria-labelledby="how-title">
        <div className="container">
          <p className="section-eyebrow">Step-by-step</p>
          <h2 className="section-title" id="how-title">
            How to Add Subtitles to a<br /><em>Video Online</em> in 4 Steps
          </h2>
          <p className="section-body">
            The entire workflow lives in your browser — upload, generate, edit, export.
            No account setup, no queue, no complicated timeline editors.
          </p>
          <div className="steps-grid" role="list">
            {[
              {
                icon: '📁',
                title: 'Upload Your Video',
                desc:
                  'Drag-and-drop or select an MP4, MOV, AVI, MKV, or WMV file up to 500 MB. ' +
                  'Your video is stored securely and processed on Scenith servers — nothing is ' +
                  'shared with third parties.',
              },
              {
                icon: '🤖',
                title: 'AI Generates Captions',
                desc:
                  'Click "Generate Subtitles". OpenAI Whisper analyses the audio track, ' +
                  'transcribes speech, timestamps every word, and groups captions into ' +
                  'readable segments — typically done in under 60 seconds for a 1-minute clip.',
              },
              {
                icon: '✏️',
                title: 'Edit Text, Timing & Style',
                desc:
                  'Open any caption in the timeline editor to fix text, nudge start/end times, ' +
                  'or swap styles. Change font family, colour, size, stroke, background box, ' +
                  'letter-spacing, and exact X/Y position. Preview updates live in the video player.',
              },
              {
                icon: '⬇️',
                title: 'Download Your MP4',
                desc:
                  'Hit "Process Subtitles" and Scenith renders the final video with captions ' +
                  'permanently burned in. Download your MP4 in the quality your plan supports — ' +
                  '720p on the free tier, up to 4K on Studio.',
              },
            ].map(({ icon, title, desc }) => (
              <article className="step-card" role="listitem" key={title}>
                <span className="step-icon" aria-hidden="true">{icon}</span>
                <h3 className="step-title">{title}</h3>
                <p className="step-desc">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          WHY ADD SUBTITLES — deep SEO content
      ══════════════════════════════════════ */}
      <section className="section section--alt" id="why-subtitles" aria-labelledby="why-title">
        <div className="container">
          <p className="section-eyebrow">The case for captions</p>
          <h2 className="section-title" id="why-title">
            Why Every Video Needs<br />Subtitles in <em>2026</em>
          </h2>

          <div className="deep-dive-grid">
            <div className="prose-block">
              <h3>Silent Viewing Is the Default on Mobile</h3>
              <p>
                Studies consistently show that <strong>over 85% of social media videos are watched
                without sound</strong> in public settings. Instagram, Facebook, and TikTok autoplay
                videos muted by default. If your video relies on spoken dialogue to carry meaning,
                a viewer scrolling in a café or on a commute will simply scroll past it.
              </p>
              <p>
                Adding subtitles online for free is therefore not optional for modern content —
                it is the minimum viable accessibility layer that separates videos that convert
                from videos that get skipped.
              </p>

              <div className="callout">
                <p className="callout-label">Research insight</p>
                <p>
                  Facebook's internal data showed that <strong>videos with captions earned 12%
                  more watch time</strong> on average than uncaptioned equivalents.
                  The effect is even larger on short-form vertical video.
                </p>
              </div>

              <h3>Accessibility Is a Legal and Ethical Obligation</h3>
              <p>
                <strong>466 million people</strong> worldwide live with disabling hearing loss,
                according to the WHO. In the United States, the Americans with Disabilities Act
                (ADA) and the Web Content Accessibility Guidelines (WCAG 2.1 AA) both require
                captions for publicly available video content at Level 1.2.2.
              </p>
              <p>
                Educational institutions receiving federal funding are legally required to caption
                all instructional video under Section 508. Major streaming platforms, corporate
                intranets, and government websites face similar mandates globally. Tools that let
                you add subtitles to videos online for free remove the cost barrier from compliance.
              </p>

              <h3>SEO Uplift You Can Actually Measure</h3>
              <p>
                Search engines cannot watch video — but they can read caption text. When you burn
                subtitles into a video and also embed a transcript on the page, you give crawlers
                rich semantic content. YouTube's algorithm ranks captioned videos <strong>higher
                in suggested results</strong> and the text is indexed by Google Video Search.
              </p>
              <p>
                An analysis of 10,000 YouTube videos found those with accurate closed captions
                received <strong>7.32% more views</strong> within 90 days of upload compared
                to uncaptioned equivalents — purely from algorithmic uplift, independent of
                engagement metrics.
              </p>
            </div>

            <div className="prose-block">
              <h3>Language Barriers and Global Reach</h3>
              <p>
                English is the first language of roughly 400 million people, yet the internet has
                5.4 billion users. Adding subtitles in the native language of your target audience —
                or even providing accurate English captions for ESL audiences — dramatically
                expands the addressable market for any piece of video content.
              </p>
              <p>
                AI subtitle generators that support 50+ languages, like Scenith's Whisper-powered
                tool, let a solo creator add multilingual captions to their videos for free,
                something that previously required hiring professional translators and
                caption-formatting agencies.
              </p>

              <div className="callout callout--sky">
                <p className="callout-label">Creator economy stat</p>
                <p>
                  Creators who add subtitles in at least one additional language report
                  <strong> 23–45% more international engagement</strong> on average,
                  based on data from 2 000+ YouTube channels in 2025.
                </p>
              </div>

              <h3>Cognitive Load and Information Retention</h3>
              <p>
                Educational psychologists refer to dual-coding theory: when learners process
                information through both visual text and audio simultaneously, retention improves
                by up to <strong>40% compared to audio alone</strong>. This is why every serious
                e-learning platform — Coursera, Udemy, LinkedIn Learning — mandates subtitles
                on all instructional video content.
              </p>
              <p>
                For marketing content, subtitles reinforce key messages: brand names, product
                features, call-to-action phrases. A viewer who both hears and reads "Free 14-day
                trial" is measurably more likely to act on that prompt than a viewer who only hears it.
              </p>

              <h3>Platform Algorithm Signals</h3>
              <p>
                TikTok's algorithm explicitly rewards high completion rate. Captions increase
                completion rate for muted viewers (who would otherwise drop off as soon as
                they realise they cannot follow the content). LinkedIn reports that video posts
                with captions achieve <strong>3× higher engagement</strong> than those without.
                Instagram Reels with on-screen text are currently boosted by the Explore algorithm
                in 2026 as the platform doubles down on accessibility signals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FEATURES BENTO
      ══════════════════════════════════════ */}
      <section className="section section--border-top" id="features" aria-labelledby="feat-title">
        <div className="container">
          <p className="section-eyebrow">What you get</p>
          <h2 className="section-title" id="feat-title">
            Everything You Need to<br /><em>Subtitle Videos Online</em>
          </h2>
          <p className="section-body">
            Scenith is not a stripped-down free tool with a paywall behind every feature. The core
            subtitle workflow — upload, generate, edit, export — is entirely free up to 720p.
          </p>

          <div className="features-bento">
            <article className="feat-card feat-card--wide" aria-label="AI transcription feature">
              <div className="feat-icon" aria-hidden="true">🎙️</div>
              <h3 className="feat-title">Whisper AI Transcription — 95–98% Accuracy</h3>
              <p className="feat-desc">
                OpenAI's Whisper model is trained on 680 000 hours of multilingual audio. It handles
                accents, background noise, overlapping speech, and technical vocabulary better than
                any other open-weight speech recognition model available in 2026. You get a
                production-quality draft transcript in under a minute for most videos — not the
                rough approximation you get from browser-native speech APIs.
              </p>
              <span className="feat-tag">50+ Languages</span>
            </article>

            <article className="feat-card feat-card--med" aria-label="Live preview feature">
              <div className="feat-icon" aria-hidden="true">👁️</div>
              <h3 className="feat-title">Live In-Player Preview</h3>
              <p className="feat-desc">
                Every styling change — colour, font, size, position — updates instantly in the
                embedded video player. No blind exports to check your work.
              </p>
              <span className="feat-tag">Real-Time</span>
            </article>

            <article className="feat-card feat-card--third" aria-label="Style presets feature">
              <div className="feat-icon" aria-hidden="true">🎨</div>
              <h3 className="feat-title">25+ Style Presets</h3>
              <p className="feat-desc">
                Choose from professionally designed subtitle templates — cinematic white-stroke,
                TikTok bold-pop, documentary yellow, minimal lowercase, and more.
              </p>
            </article>

            <article className="feat-card feat-card--third" aria-label="Custom fonts feature">
              <div className="feat-icon" aria-hidden="true">🔤</div>
              <h3 className="feat-title">Custom Font &amp; Typography</h3>
              <p className="feat-desc">
                Swap font family, adjust weight, letter-spacing, line height, and border stroke
                width. Apply changes to one caption or all at once.
              </p>
            </article>

            <article className="feat-card feat-card--third" aria-label="Position control feature">
              <div className="feat-icon" aria-hidden="true">📐</div>
              <h3 className="feat-title">Pixel-Level Positioning</h3>
              <p className="feat-desc">
                Drag or type exact X/Y coordinates. Useful for vertical 9:16 videos where bottom
                placement must clear lower-third graphics or safe-zone text.
              </p>
            </article>

            <article className="feat-card feat-card--third" aria-label="Undo delete feature">
              <div className="feat-icon" aria-hidden="true">↩️</div>
              <h3 className="feat-title">Undo Delete</h3>
              <p className="feat-desc">
                Accidentally deleted a caption segment? The undo stack brings it back — even after
                a backend save — without regenerating the whole transcript.
              </p>
            </article>

            <article className="feat-card feat-card--half" aria-label="Background box feature">
              <div className="feat-icon" aria-hidden="true">🟦</div>
              <h3 className="feat-title">Background Box with Opacity Control</h3>
              <p className="feat-desc">
                Add a semi-transparent background rectangle behind caption text for readability
                on busy footage. Control fill colour, opacity, padding, corner radius, and border
                independently — great for the social-card style popular on LinkedIn and Instagram
                in 2026.
              </p>
              <span className="feat-tag">Accessibility-first</span>
            </article>

            <article className="feat-card feat-card--half" aria-label="Export quality feature">
              <div className="feat-icon" aria-hidden="true">📦</div>
              <h3 className="feat-title">Export from 720p to 4K</h3>
              <p className="feat-desc">
                Free tier exports at 720p without watermark. Creator Lite unlocks 1080p, Creator
                unlocks 2K, and Studio plan goes all the way to 4K — always burned into a clean
                H.264 MP4 compatible with every platform.
              </p>
              <span className="feat-tag">No Watermark on Free</span>
            </article>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PLATFORM TIPS
      ══════════════════════════════════════ */}
      <section className="section section--alt" id="platform-tips" aria-labelledby="platform-title">
        <div className="container">
          <p className="section-eyebrow">Platform-specific guidance</p>
          <h2 className="section-title" id="platform-title">
            Subtitle Specs for <em>Every Platform</em>
          </h2>
          <p className="section-body">
            Different platforms have different safe zones, aspect ratios, and viewer behaviours.
            Here is what to set when you add subtitles to video online for each major channel in 2026.
          </p>
          <div className="platform-grid">
            {[
              {
                logo: '▶️',
                name: 'YouTube',
                tip: 'Use bottom-centre placement with 10% margin from edges. White text + black stroke reads on any thumbnail. Caption text helps YouTubes search index rank your video.',
                specs: [['Aspect', '16:9 or 9:16 Shorts'], ['Font size', '24–32px recommended'], ['Position', 'Bottom centre, Y: 85%']],
              },
              {
                logo: '📱',
                name: 'Instagram Reels',
                tip: 'Vertical 9:16 only. Place captions in the middle 60% of the frame — avoid the top (where the username sits) and bottom (where the action buttons overlap).',
                specs: [['Aspect', '9:16 vertical'], ['Safe zone', 'Y: 20%–80%'], ['Style', 'Bold + background box']],
              },
              {
                logo: '🎵',
                name: 'TikTok',
                tip: 'Large, high-contrast text is rewarded by TikToks completion-rate signal. Bold sans-serif at 130%+ scale performs best. Many creators add captions at the top 1/3 and bottom 1/3 simultaneously for dual-pane content.',
                specs: [['Aspect', '9:16'], ['Rec. font size', 'Large / 140% scale'], ['Avoid', 'Bottom 20% (UI chrome)']],
              },
              {
                logo: '💼',
                name: 'LinkedIn',
                tip: 'Square (1:1) or landscape. Professional, minimal subtitle styles outperform flashy ones. LinkedIns algorithm gives a 3× engagement boost to captioned native video vs uncaptioned — add them every time.',
                specs: [['Aspect', '1:1 or 16:9'], ['Style', 'Minimal / clean'], ['Impact', '+300% engagement']],
              },
              {
                logo: '📘',
                name: 'Facebook',
                tip: 'Facebook autoplays muted in the News Feed. Captions are the only way viewers see your message before they choose to unmute. Keep captions large and avoid relying on audio for context.',
                specs: [['Aspect', '16:9 or 1:1'], ['Muted views', '~85% of total'], ['CTA', 'Repeat key phrases in captions']],
              },
              {
                logo: '🎓',
                name: 'LMS / E-Learning',
                tip: 'Accuracy matters more than style here. Use simple sans-serif, 1.4 line-height, and slow reading pace (≤17 chars/sec). Add [sound effect] descriptors for accessibility compliance.',
                specs: [['WCAG req.', '1.2.2 AA captions'], ['Speed', '≤17 chars/second'], ['Contrast', '4.5:1 minimum']],
              },
            ].map(({ logo, name, tip, specs }) => (
              <article className="platform-card" key={name}>
                <div className="platform-logo" aria-hidden="true">{logo}</div>
                <h3 className="platform-name">{name}</h3>
                <p className="platform-tip">{tip}</p>
                <div className="platform-spec" aria-label={`${name} specifications`}>
                  {specs.map(([k, v]) => (
                    <span key={k}><strong>{k}:</strong> {v}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          USE CASES
      ══════════════════════════════════════ */}
      <section className="section section--border-top" id="use-cases" aria-labelledby="uc-title">
        <div className="container">
          <p className="section-eyebrow">Who this is for</p>
          <h2 className="section-title" id="uc-title">
            Real-World Uses for<br /><em>Online Subtitle Tools</em>
          </h2>
          <p className="section-body">
            From solo creators to enterprise teams, anyone who publishes video content benefits
            from adding subtitles — here is how different professionals use the tool.
          </p>
          <div className="use-cases-editorial" role="list">
            {[
              {
                emoji: '📹',
                industry: 'Content Creation',
                title: 'YouTubers & Influencers',
                desc:
                  'Growing a channel means making content accessible to international audiences ' +
                  'and viewers who watch silently. AI subtitle generation lets solo creators caption ' +
                  'every video in minutes — not hours — maintaining the upload frequency the ' +
                  'algorithm rewards.',
                items: ['Auto-subtitle every upload', 'Boost watch time with captions', 'Reach international audience'],
              },
              {
                emoji: '🎬',
                industry: 'Film & Production',
                title: 'Independent Filmmakers',
                desc:
                  'Festival submissions, streaming pitches, and distributor screeners increasingly ' +
                  'require accessible captions. Generating a subtitle track from AI and fine-tuning ' +
                  'timing and style takes a fraction of the time of manual captioning services — ' +
                  'at zero cost on the free tier.',
                items: ['Festival-ready captions', 'Custom cinematic styles', 'Multi-language export'],
              },
              {
                emoji: '🏢',
                industry: 'Corporate',
                title: 'Marketing & Comms Teams',
                desc:
                  'Product demo videos, explainer ads, and brand content all need captions for ' +
                  'LinkedIn, YouTube, and OTT distribution. Subtitle generation removes the dependency ' +
                  'on agency timelines — caption a video in-house in under 5 minutes.',
                items: ['Brand-consistent subtitle styles', 'No agency dependency', 'ADA-compliant output'],
              },
              {
                emoji: '📚',
                industry: 'Education',
                title: 'Educators & Course Creators',
                desc:
                  'Section 508, ADA, and institutional accessibility policies mandate captions for ' +
                  'instructional video. AI generation achieves the accuracy most educators need for ' +
                  'draft review, with manual editing to correct technical terms specific to the discipline.',
                items: ['WCAG 2.1 compliant captions', 'Supports ESL students', '40% better retention'],
              },
              {
                emoji: '🌍',
                industry: 'NGO / Nonprofit',
                title: 'Mission-Driven Organisations',
                desc:
                  'Nonprofits communicate globally with limited budgets. Being able to add subtitles ' +
                  'to videos online for free — across 50+ languages with no watermark — is a genuine ' +
                  'force-multiplier for organisations whose audiences span multiple continents and languages.',
                items: ['50+ languages for free', 'No budget required', 'Reach underserved communities'],
              },
              {
                emoji: '🎙️',
                industry: 'Podcasting',
                title: 'Podcasters & Interview Shows',
                desc:
                  'Long-form interview clips repurposed for social media perform significantly better ' +
                  'with captions. AI transcription of a 5-minute clip is accurate enough for a clean ' +
                  'social media cut with only minor editing — enabling a production workflow no assistant required.',
                items: ['Repurpose long-form content', 'Accurate speaker transcription', 'Social-ready in minutes'],
              },
            ].map(({ emoji, industry, title, desc, items }) => (
              <article className="uc-card" role="listitem" key={title}>
                <div className="uc-header">
                  <span className="uc-emoji" aria-hidden="true">{emoji}</span>
                  <div>
                    <div className="uc-industry">{industry}</div>
                    <h3 className="uc-title">{title}</h3>
                  </div>
                </div>
                <p className="uc-desc">{desc}</p>
                <ul className="uc-list" aria-label={`${title} use case benefits`}>
                  {items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          LANGUAGES
      ══════════════════════════════════════ */}
      <section className="section section--alt" id="languages" aria-labelledby="lang-title">
        <div className="container">
          <p className="section-eyebrow">Global reach</p>
          <h2 className="section-title" id="lang-title">
            Auto-Subtitle in <em>50+ Languages</em><br />— No Extra Cost
          </h2>
          <p className="section-body">
            Whisper AI automatically detects the spoken language in your video.
            You do not need to select a language before generating. All 50+ languages are included
            in the free tier — no upsell, no language pack to buy.
          </p>
          <div className="lang-cloud" role="list" aria-label="Supported subtitle languages">
            {languages.map((lang) => (
              <span className="lang-pill" role="listitem" key={lang}>{lang}</span>
            ))}
          </div>

          <div className="callout callout--sky" style={{ marginTop: '40px' }}>
            <p className="callout-label">How language detection works</p>
            <p>
              Whisper analyses the first 30 seconds of audio to identify the predominant language.
              If your video switches languages mid-way (code-switching), the model follows the
              dominant language for the full transcript. For mixed-language content, we recommend
              segmenting clips before uploading.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          COMPARISON TABLE
      ══════════════════════════════════════ */}
      <section className="section section--border-top" id="comparison" aria-labelledby="cmp-title">
        <div className="container">
          <p className="section-eyebrow">Honest comparison</p>
          <h2 className="section-title" id="cmp-title">
            Scenith vs Other Ways to<br /><em>Add Subtitles Online Free</em>
          </h2>
          <p className="section-body">
            Many tools claim to be free — then lock editing, export, or quality behind a paywall,
            or slap a watermark on every video. Here is an honest comparison.
          </p>
          <div className="compare-wrap">
            <table className="compare-table" aria-label="Comparison of subtitle tools">
              <thead>
                <tr>
                  <th scope="col">Feature</th>
                  <th scope="col" className="highlight">Scenith (Free)</th>
                  <th scope="col">Kapwing</th>
                  <th scope="col">VEED.IO</th>
                  <th scope="col">Rev.com</th>
                  <th scope="col">YouTube Auto-CC</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Cost to export',        '✓ Free at 720p',       'Watermark on free','Watermark on free','$1.25/min','Free'],
                  ['Watermark-free export', '✓ Yes (720p free)',     '✗ Paid only',      '✗ Paid only',      '✓ Yes',    '✓ (within YT only)'],
                  ['Custom font & colour',  '✓ Full control',       '⚠ Limited free',   '⚠ Limited free',   '✗ No',     '✗ No'],
                  ['Burned-in MP4 export',  '✓ Yes',                '✓ Yes (paid)',     '✓ Yes (paid)',     '✓ Yes',    '✗ No (captions only)'],
                  ['AI accuracy',           '✓ Whisper 95–98%',     '✓ Whisper',        '✓ Proprietary',    '✓ Human 99%','⚠ 85–90%'],
                  ['50+ languages',         '✓ All free',           '⚠ Limited',        '⚠ Limited',        '⚠ Extra cost','✓ Many'],
                  ['Manual timing edit',    '✓ Yes',                '✓ Yes',            '✓ Yes',            '✓ Yes',    '✗ No'],
                  ['Works without login',   '⚠ Login to process',   '⚠ Login required', '⚠ Login required', '✗ Account','✓ YT account'],
                  ['Max free resolution',   '720p',                 '720p (watermarked)','720p (watermarked)','Any',     'N/A (caption file)'],
                ].map(([feat, scenith, kapwing, veed, rev, ytcc]) => (
                  <tr key={feat}>
                    <td>{feat}</td>
                    <td className="highlight">
                      <span className={scenith.startsWith('✓') ? 'badge-yes' : scenith.startsWith('✗') ? 'badge-no' : 'badge-warn'}>
                        {scenith}
                      </span>
                    </td>
                    {[kapwing, veed, rev, ytcc].map((v, i) => (
                      <td key={i}>
                        <span className={v.startsWith('✓') ? 'badge-yes' : v.startsWith('✗') ? 'badge-no' : 'badge-warn'}>
                          {v}
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="callout callout--coral" style={{ marginTop: '32px' }}>
            <p className="callout-label">The watermark tax</p>
            <p>
              Most "free" video tools export with a watermark unless you pay. Scenith exports 720p
              videos <strong>watermark-free on the free tier</strong> — because we believe
              professional-quality output should not require a subscription for creators just starting out.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SUBTITLE DESIGN GUIDE
      ══════════════════════════════════════ */}
      <section className="section section--alt" id="design-guide" aria-labelledby="design-title">
        <div className="container">
          <p className="section-eyebrow">Expert guide</p>
          <h2 className="section-title" id="design-title">
            The Complete 2026 Guide to<br /><em>Subtitle Design</em> Best Practices
          </h2>

          <div className="deep-dive-grid">
            <div className="prose-block">
              <h3>Typography Rules That Maximise Readability</h3>
              <p>
                The wrong font choice can make accurately transcribed subtitles illegible.
                The rules professionals have refined over decades of broadcast captioning still
                hold in 2026:
              </p>
              <ul>
                <li><strong>Sans-serif only for screen.</strong> Serif fonts (Times, Georgia) add detail that degrades at small sizes on compressed video. Use Roboto, Outfit, Montserrat, or similar geometric sans-serifs.</li>
                <li><strong>Font weight: semi-bold to bold.</strong> Regular-weight text disappears against mid-tone backgrounds. Semi-bold (600) is the minimum; bold (700) is safer for mobile.</li>
                <li><strong>Minimum 24px at 1080p baseline.</strong> Scale proportionally: 720p minimum 18px, 4K minimum 48px. Scenith's scale slider handles this automatically.</li>
                <li><strong>Avoid all-caps for continuous reading.</strong> Capitalised text is useful for sound effects ([DOOR SLAMS]) but exhausting for full sentences. It slows reading speed by ~15%.</li>
                <li><strong>Line height 1.2–1.4×.</strong> Cramped line height strains eyes on small screens. Default line spacing of 1.3 is a safe universal baseline.</li>
              </ul>

              <h3>Colour and Contrast — WCAG in Practice</h3>
              <p>
                WCAG 2.1 Success Criterion 1.4.3 requires a contrast ratio of at least <strong>4.5:1</strong>
                between text and background for normal text. For large text (18px+ bold), the
                minimum drops to 3:1. In practice, the simplest solution that always works is
                white text with a 2–3px black stroke — this creates the equivalent of a black
                background wherever the text sits, guaranteeing contrast against any scene.
              </p>
              <ul>
                <li><strong>White + black stroke:</strong> Universal. Works on every scene. Industry default.</li>
                <li><strong>Yellow (#FFE000) + no stroke:</strong> Film convention. High luminance stands out on dark scenes but can wash on bright scenes.</li>
                <li><strong>White on 60% black box:</strong> Modern social media style. Ensures readability while the box background moves with the text.</li>
                <li><strong>Avoid pure red or pure green:</strong> 8% of men have red-green colour vision deficiency. These colours have low contrast against each other and some backgrounds.</li>
              </ul>

              <h3>Timing and Reading Speed</h3>
              <p>
                The BBC's subtitle specification — one of the most studied in the world — sets a
                maximum reading speed of <strong>17 words per second</strong> for subtitle text,
                which equates to roughly 180 words per minute. The minimum display duration for
                any caption segment should be <strong>1.5 seconds</strong>, even for very short phrases,
                to allow viewers time to register the text.
              </p>
              <div className="callout">
                <p className="callout-label">Quick timing rules</p>
                <p>
                  <strong>Min duration:</strong> 1.5 sec · <strong>Max duration:</strong> 7 sec ·
                  <strong>Max chars per line:</strong> 42 · <strong>Max lines:</strong> 2 ·
                  <strong>Reading speed:</strong> ≤17 words/sec
                </p>
              </div>
            </div>

            <div className="prose-block">
              <h3>Positioning: Safe Zones and Context Awareness</h3>
              <p>
                The <strong>bottom-centre</strong> position is standard because it sits below
                the action area in most shot compositions, leaving actors' faces and on-screen
                graphics unobstructed. However, it is not always optimal:
              </p>
              <ul>
                <li><strong>Documentary / interview:</strong> Lower-third name chyrons typically occupy bottom-left. Move subtitles to bottom-centre above the chyron, or use a separate top-centre position for the speaker's name.</li>
                <li><strong>Vertical video (9:16):</strong> The bottom 15% of mobile screens is consumed by platform UI (TikTok's heart/share buttons, Instagram's action bar). Position subtitles at Y: 70–80% to stay clear.</li>
                <li><strong>Action sequences:</strong> Fast-moving scenes often have important subject matter in the lower frame. Temporarily shifting subtitles to the top third helps in these moments.</li>
                <li><strong>Music videos:</strong> Lyrics often work best centred vertically, large, with minimal styling — treating the caption as an integrated design element rather than an overlay.</li>
              </ul>

              <h3>Breaking Lines Correctly</h3>
              <p>
                Poor line breaks are the most common complaint about AI-generated subtitles —
                not the accuracy, but the way the text wraps. The rules:
              </p>
              <ol>
                <li>Break at grammatical boundaries: after commas, conjunctions, or between subject and predicate.</li>
                <li>Never split a verb from its object ("she picked up / the phone" is bad; "she / picked up the phone" is acceptable).</li>
                <li>Keep prepositional phrases together: "in the morning" should not wrap between "in" and "the".</li>
                <li>Aim for roughly equal line lengths — a "pyramid" shape (shorter top, longer bottom) is preferred by broadcast standards.</li>
                <li>Avoid orphaned single words on a line unless they represent a dramatic pause: "He opened the door. He saw / her."</li>
              </ol>

              <h3>Sound Effect and Non-Speech Descriptions</h3>
              <p>
                For truly accessible captions, transcribe important non-speech audio in brackets.
                This is a legal requirement for WCAG 1.2.2 Level AA compliance and a practical
                aid for deaf viewers who would otherwise miss essential context:
              </p>
              <ul>
                <li>[Phone ringing] — communicates plot context</li>
                <li>[Tense orchestral music] — sets mood</li>
                <li>[Crowd applauding] — conveys audience reaction</li>
                <li>[Whispered] before dialogue — indicates delivery</li>
                <li>[Background noise] or [Inaudible] — honest acknowledgement of poor audio</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════ */}
      <section className="section section--border-top" id="reviews" aria-labelledby="review-title">
        <div className="container">
          <p className="section-eyebrow">What creators say</p>
          <h2 className="section-title" id="review-title">
            Trusted by <em>1 500+ Creators</em><br />Worldwide
          </h2>
          <div className="testimonials-row" role="list">
            {[
              {
                stars: 5,
                quote:
                  'I was spending $80/month on a captioning service. Scenith does the same job in literally minutes, for free. The Whisper accuracy on my interview podcast is genuinely impressive.',
                name: 'Marcus Oyelaran',
                role: 'Podcast Host · Lagos, Nigeria',
              },
              {
                stars: 5,
                quote:
                  'I add subtitles to every Reel now — engagement on my cooking videos doubled once the silent-scroll audience could follow along. The style presets saved me so much time.',
                name: 'Priya Sharma',
                role: 'Food Creator · Mumbai, India',
              },
              {
                stars: 5,
                quote:
                  'We produce compliance training videos at work. Scenith gave us WCAG-compliant captions in under 5 minutes per video — what used to take a contractor a full day.',
                name: 'Daniel Weiss',
                role: 'L&D Manager · Frankfurt, Germany',
              },
              {
                stars: 5,
                quote:
                  'No watermark on the free plan was the dealbreaker for me. I showed the output to a client and they asked which agency we used. That says everything.',
                name: 'Camila Ferreira',
                role: 'Video Marketer · São Paulo, Brazil',
              },
              {
                stars: 5,
                quote:
                  'I film in Hindi and add English subtitles for international reach. Scenith nailed the Hindi transcription and the editor made adding English translations straightforward.',
                name: 'Arjun Mehta',
                role: 'YouTube Educator · Delhi, India',
              },
              {
                stars: 5,
                quote:
                  'The positioning control is what sets this apart. I can subtitle vertical Reels without subtitles disappearing under the Instagram UI — small thing, huge difference.',
                name: 'Sophie Chen',
                role: 'Short-Form Creator · Toronto, Canada',
              },
            ].map(({ stars, quote, name, role }) => (
              <article className="testi-card" role="listitem" key={name}>
                <div className="testi-stars" aria-label={`${stars} stars`}>
                  {'★'.repeat(stars)}
                </div>
                <blockquote className="testi-quote">"{quote}"</blockquote>
                <div className="testi-author">
                  <span className="testi-name">{name}</span>
                  <span className="testi-role">{role}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          MID-PAGE CTA
      ══════════════════════════════════════ */}
      <section className="mega-cta-section section--alt" aria-labelledby="mid-cta-h">
        <div className="container mega-cta-inner">
          <p className="mega-cta-label">No account required to preview</p>
          <h2 className="mega-cta-headline" id="mid-cta-h">
            Try it.<br />It&apos;s <em>Free.</em>
          </h2>
          <p className="mega-cta-sub">
            Upload a video, generate captions, edit styles, download MP4.
            Free tier — 720p, no watermark.
          </p>
          <a href={toolUrl} className="btn-mega" rel="noopener" aria-label="Try the free subtitle generator">
            <span className="icon-wrap" aria-hidden="true">✨</span>
            Add Subtitles Free — Open Tool
          </a>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FAQ
      ══════════════════════════════════════ */}
      <section className="section section--border-top" id="faq" aria-labelledby="faq-title">
        <div className="container">
          <p className="section-eyebrow">Common questions</p>
          <h2 className="section-title" id="faq-title">
            Frequently Asked Questions<br />About <em>Adding Subtitles Online</em>
          </h2>
          <div className="faq-grid" role="list">
            {[
              {
                q: 'Can I add subtitles to a video online without downloading software?',
                a: 'Yes — Scenith runs entirely in your browser. Upload your video, generate captions with AI, customise styling, and download the finished MP4 with no desktop application required.',
              },
              {
                q: 'Is the free subtitle generator really free, or is there a catch?',
                a: 'The core workflow — upload, AI generation, editing, 720p export — is genuinely free with no watermark. The "catch" is that higher export resolutions (1080p, 2K, 4K) require a paid plan. You pay to go premium; the free tier is complete.',
              },
              {
                q: 'What video formats can I upload?',
                a: 'All major formats including MP4, MOV, AVI, MKV, WMV, and WebM. Maximum file size is 500 MB per upload. For longer or larger files, consider compressing to H.264 MP4 before uploading.',
              },
              {
                q: 'How accurate is the AI subtitle generation?',
                a: 'Whisper AI achieves 95–98% word accuracy on clear audio recorded in standard conditions. Accuracy drops for heavy background noise, overlapping speakers, thick regional accents, or highly technical vocabulary. Manual editing is quick for any corrections needed.',
              },
              {
                q: 'Can I edit the subtitle text after it is generated?',
                a: 'Yes. Click any caption segment in the timeline list to open the editor. You can correct text, adjust start/end timestamps, change styling, or delete the segment entirely. All changes auto-save before you export.',
              },
              {
                q: 'Do the subtitles get burned into the video permanently?',
                a: 'Yes — the "Process Subtitles" step renders captions permanently into the MP4 (also called "burning in" or "hard-coding"). This ensures subtitles display on every platform, even those without separate caption track support.',
              },
              {
                q: 'Can I add subtitles to a vertical 9:16 video?',
                a: 'Yes. Sceniths position controls let you set exact X/Y coordinates, so you can place subtitles in the centre of the frame rather than the bottom — clearing TikTok\'s and Instagram\'s lower UI chrome.',
              },
              {
                q: 'What languages are supported?',
                a: 'Whisper AI supports 50+ languages including English, Hindi, Spanish, French, German, Mandarin, Arabic, Japanese, Portuguese, Korean, Italian, Russian, Turkish, and many more. The language is auto-detected from the audio — no manual selection needed.',
              },
              {
                q: 'Is there a video length limit?',
                a: 'The current free tier supports videos up to 1 minute. Paid plans support longer content. For full feature details and limits, check the pricing page.',
              },
              {
                q: 'Are my uploaded videos kept private?',
                a: 'Videos are stored securely on Scenith servers for processing and are automatically deleted after 24–48 hours. Your content is never shared with third parties or used for training data.',
              },
              {
                q: 'Can I apply the same style to all subtitle segments at once?',
                a: 'Yes. If you make style edits without selecting a specific segment, changes apply globally to all captions. You can also click "Apply to All" for position changes made in the editor panel.',
              },
              {
                q: 'What is the difference between burned-in subtitles and closed captions?',
                a: 'Burned-in (open) subtitles are permanently part of the video image — they always show and cannot be turned off. Closed captions (SRT/VTT files) are separate text tracks that viewers can toggle on or off. Scenith currently produces burned-in subtitles; SRT export is on the roadmap.',
              },
            ].map(({ q, a }) => (
              <article className="faq-item" role="listitem" key={q}>
                <h3 className="faq-q">{q}</h3>
                <p className="faq-a">{a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          INTERNAL LINKS (SEO equity)
      ══════════════════════════════════════ */}
      <section className="section section--alt section--border-top" aria-labelledby="related-title">
        <div className="container">
          <p className="section-eyebrow">More from Scenith</p>
          <h2 className="section-title" id="related-title">
            Pair Subtitles With Our<br /><em>Other Free Tools</em>
          </h2>
          <p className="section-body">
            Subtitles are one piece of a complete video production workflow.
            Scenith's other tools slot in around them.
          </p>
          <div className="use-cases-editorial" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }} role="list">
            {[
              {
                emoji: '🎙️',
                title: 'AI Voice Generator',
                desc: 'Generate a professional voiceover for your video before adding subtitles — or create silent captions-only content with AI narration.',
                href: '/tools/ai-voice-generation',
              },
              {
                emoji: '🖼️',
                title: 'Free Image Editor',
                desc: 'Design thumbnail images that match your subtitle aesthetic — same brand colours, same font family, consistent look across the content.',
                href: '/tools/image-editing',
              },
              {
                emoji: '✂️',
                title: 'Video Tools',
                desc: 'Explore Sceniths full suite of browser-based video tools — trim, filter, resize, compress — before or after adding your captions.',
                href: '/tools',
              },
            ].map(({ emoji, title, desc, href }) => (
              <article className="uc-card" role="listitem" key={title}>
                <div className="uc-header">
                  <span className="uc-emoji" aria-hidden="true">{emoji}</span>
                  <h3 className="uc-title">{title}</h3>
                </div>
                <p className="uc-desc">{desc}</p>
                <a href={href} className="inline-link" style={{ fontSize: '.85rem', fontWeight: 600 }}>
                  Open tool →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          BOTTOM CTA BAND
      ══════════════════════════════════════ */}
      <section className="bottom-cta-band" aria-labelledby="bottom-cta-h">
        <div className="container bottom-cta-inner">
          <div className="bottom-cta-text">
            <h2 id="bottom-cta-h">Stop waiting. Start captioning.</h2>
            <p>
              Upload your first video and get AI-generated subtitles in under 2 minutes — free,
              no software download, no watermark on 720p.
            </p>
          </div>
          <a href={toolUrl} className="btn-dark" rel="noopener" aria-label="Open the free subtitle generator now">
            Open Free Tool <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      {/* ── Footer ribbon ───────────────────── */}
      <footer className="page-footer" role="contentinfo">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} Scenith — Free Online Video Tools</span>
          <nav className="footer-links" aria-label="Footer links">
            <a href="/tools">Tools</a>
            <a href="/pricing">Pricing</a>
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}