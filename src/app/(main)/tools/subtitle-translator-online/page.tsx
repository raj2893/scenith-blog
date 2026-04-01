import type { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import './subtitle-translator.css';

export const metadata: Metadata = {
  title: 'Free Online Subtitle Translator | Translate Subtitles to Any Language (2026)',
  description:
    'Translate subtitles online for free in 2026. Convert SRT, VTT, ASS subtitle files into 50+ languages instantly using AI. Burn translated subtitles into your video — no software download needed.',
  keywords: [
    'subtitle translator online',
    'translate subtitles online free',
    'online subtitle translator',
    'subtitle translation tool',
    'translate SRT file online',
    'translate VTT subtitles',
    'subtitle translator ai',
    'video subtitle translator',
    'translate captions online',
    'multilingual subtitle generator',
    'auto translate subtitles',
    'subtitle converter online',
    'free subtitle translation 2026',
    'translate video subtitles',
    'subtitle language converter',
  ],
  alternates: {
    canonical: 'https://scenith.in/tools/subtitle-translator-online',
  },
  openGraph: {
    title: 'Free Online Subtitle Translator — 50+ Languages | Scenith',
    description:
      'Translate subtitles online free in 2026. Paste or upload SRT/VTT files and convert them to Spanish, Hindi, French, Japanese, Arabic, and 50+ more languages in seconds.',
    url: 'https://scenith.in/tools/subtitle-translator-online',
    siteName: 'Scenith',
    type: 'website',
    images: [
      {
        url: 'https://scenith.in/images/SubtitleTranslatorOG.png',
        width: 1200,
        height: 630,
        alt: 'Scenith Online Subtitle Translator Tool',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Online Subtitle Translator — 50+ Languages | Scenith',
    description:
      'Translate and burn subtitles into your video online, free. 50+ languages, AI-powered, no software needed.',
    images: ['https://scenith.in/images/SubtitleTranslatorOG.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const UTM_LINK =
  'https://scenith.in/tools/add-subtitles-to-videos?utm_source=subtitle-translator-online&utm_medium=internal_cta&utm_campaign=subtitle_tools_cluster';

export default function SubtitleTranslatorPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Can I translate subtitles online for free?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Scenith lets you translate and generate subtitles online completely free. Upload your video, generate AI subtitles, and burn them in your target language — no subscription required for basic usage.',
        },
      },
      {
        '@type': 'Question',
        name: 'What subtitle file formats are supported?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our subtitle tools support SRT, VTT, ASS, and SSA formats. Subtitles are also auto-generated directly from your video audio using Whisper AI transcription.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which languages can I translate subtitles into?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can translate subtitles into 50+ languages including Spanish, French, German, Hindi, Mandarin, Japanese, Arabic, Portuguese, Bengali, Russian, Korean, and more.',
        },
      },
      {
        '@type': 'Question',
        name: 'How accurate is AI subtitle translation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'AI subtitle translation accuracy is typically 90–95% for major language pairs like English to Spanish or English to French. For complex or rare language pairs, human review is recommended.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I burn translated subtitles into my video?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Scenith permanently burns (hard-codes) translated subtitles into your video and exports a downloadable MP4. This ensures subtitles display on every platform without needing viewer-side caption support.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need to download software to translate subtitles?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Scenith is a 100% browser-based subtitle translator. There is no software, plugin, or app to install. It works on desktop, tablet, and mobile.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does subtitle translation take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Subtitle generation and translation for a 1–3 minute video typically takes under 60 seconds. Longer videos up to 10 minutes average 2–3 minutes of processing time.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is there a video length limit for subtitle translation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Free accounts support videos up to 10 minutes. Premium plans support videos up to 2 hours. There is no hard file size limit as long as the video is under the time threshold.',
        },
      },
    ],
  };

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Translate Subtitles Online for Free',
    description:
      'Step-by-step guide to translating video subtitles online using AI — no downloads required.',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Upload Your Video',
        text: 'Upload any MP4, AVI, MOV or MKV video. Scenith extracts audio and prepares it for AI transcription.',
        position: 1,
      },
      {
        '@type': 'HowToStep',
        name: 'Generate AI Subtitles in the Source Language',
        text: 'Click Generate Subtitles. Whisper AI transcribes the audio and creates time-stamped captions in the video\'s original language.',
        position: 2,
      },
      {
        '@type': 'HowToStep',
        name: 'Edit & Translate Subtitle Text',
        text: 'Manually edit any subtitle segment to paste or type the translated text in your target language. Use the inline editor for full control.',
        position: 3,
      },
      {
        '@type': 'HowToStep',
        name: 'Style and Burn Subtitles',
        text: 'Choose a professional subtitle style — font, color, position, background — then click Process to burn translated subtitles into your video.',
        position: 4,
      },
      {
        '@type': 'HowToStep',
        name: 'Download Your Translated Video',
        text: 'Download the final MP4 with permanently embedded translated subtitles, ready to upload on YouTube, Instagram, TikTok, or any platform.',
        position: 5,
      },
    ],
  };

  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    '@id': 'https://scenith.in/tools/subtitle-translator-online#webapp',
    name: 'Scenith Online Subtitle Translator',
    description:
      'Free AI-powered subtitle translator that generates, translates, and burns subtitles into videos across 50+ languages. No download required.',
    url: 'https://scenith.in/tools/subtitle-translator-online',
    applicationCategory: 'MultimediaApplication',
    operatingSystem: 'Web Browser',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    featureList: [
      'AI subtitle generation',
      'Subtitle translation 50+ languages',
      'Burn subtitles into video',
      'Custom subtitle styles',
      'SRT/VTT support',
      'No software download',
      'MP4 export',
    ],
    author: {
      '@type': 'Organization',
      name: 'Scenith',
      url: 'https://scenith.in',
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://scenith.in' },
      { '@type': 'ListItem', position: 2, name: 'Tools', item: 'https://scenith.in/tools' },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Online Subtitle Translator',
        item: 'https://scenith.in/tools/subtitle-translator-online',
      },
    ],
  };

  return (
    <div className="st-page">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="st-breadcrumb">
        <ol itemScope itemType="https://schema.org/BreadcrumbList">
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <a href="/" itemProp="item"><span itemProp="name">Home</span></a>
            <meta itemProp="position" content="1" />
          </li>
          <span className="st-breadcrumb-sep" aria-hidden="true">›</span>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <a href="/tools" itemProp="item"><span itemProp="name">Tools</span></a>
            <meta itemProp="position" content="2" />
          </li>
          <span className="st-breadcrumb-sep" aria-hidden="true">›</span>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="name">Subtitle Translator Online</span>
            <meta itemProp="position" content="3" />
          </li>
        </ol>
      </nav>

      {/* Background particles */}
      <div className="st-particles" aria-hidden="true">
        {[...Array(8)].map((_, i) => <span key={i} className="st-particle" />)}
      </div>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="st-hero" id="hero" role="main">
        <div className="st-hero-inner">
          <div className="st-badge">🌐 AI-Powered · 50+ Languages · 100% Free</div>
          <h1 className="st-h1">
            Free Online Subtitle Translator
            <span className="st-h1-accent"> — Any Language, Instantly</span>
          </h1>
          <p className="st-lead">
            Translate video subtitles online in 2026 without installing a single app. Our AI
            generates accurate captions in the source language, you edit the translation, then we
            burn it permanently into your MP4 — styled, synced, and ready to upload anywhere.
          </p>

          {/* Definition box — featured-snippet bait */}
          <div className="st-definition">
            <p>
              <strong>What is an online subtitle translator?</strong> An online subtitle translator
              is a web-based tool that uses artificial intelligence to automatically transcribe
              spoken audio in a video, time-stamp each caption, and allow you to translate those
              captions into a target language — all without downloading software. The final output
              is either a translated subtitle file (SRT/VTT) or a video with burned-in captions.
            </p>
          </div>

          {/* ── MEGA CTA ── */}
          <div className="st-cta-block">
            <p className="st-cta-label">Ready to translate your subtitles right now?</p>
            <a
              href={UTM_LINK}
              className="st-cta-btn"
              aria-label="Open Scenith AI Subtitle Generator to translate your video subtitles"
            >
              <span className="st-cta-icon">🚀</span>
              Translate My Subtitles — Free
              <span className="st-cta-arrow">→</span>
            </a>
            <p className="st-cta-sub">
              Works on mobile · MP4 download in minutes
            </p>
          </div>

          <div className="st-trust-row" role="list" aria-label="Trust indicators">
            <span role="listitem">✅ No Software Download</span>
            <span role="listitem">🌍 50+ Languages</span>
            <span role="listitem">⚡ Under 60 Seconds</span>
            <span role="listitem">📥 MP4 Download Included</span>
            <span role="listitem">🔒 Your Videos Stay Private</span>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────── */}
      <section className="st-section" id="how-it-works" aria-labelledby="how-title">
        <div className="st-container">
          <h2 id="how-title" className="st-section-title">
            How to Translate Subtitles Online — 5 Simple Steps
          </h2>
          <p className="st-section-sub">
            No Premiere Pro, no Aegisub, no Python scripts. The entire workflow lives in your
            browser tab.
          </p>

          <ol className="st-steps">
            {[
              {
                n: '01',
                title: 'Upload Your Video',
                body:
                  'Drag and drop or select any MP4, MOV, AVI, or MKV file. Scenith securely stores it in the cloud for AI processing — no local processing lag.',
              },
              {
                n: '02',
                title: 'Generate Source-Language Subtitles',
                body:
                  'Click "Generate Subtitles." Whisper AI — one of the world\'s most accurate speech-recognition models — transcribes your audio and creates time-stamped caption segments in seconds.',
              },
              {
                n: '03',
                title: 'Edit & Paste Your Translation',
                body:
                  'Click any subtitle segment to open the inline editor. Replace the source text with your translated version. Use AI tools, Google Translate, DeepL, or manual translation — the editor accepts any Unicode language.',
              },
              {
                n: '04',
                title: 'Style Your Translated Subtitles',
                body:
                  'Choose a font, color palette, background style, and position. Match your brand identity or pick a cinematic preset. Real-time preview shows exactly how subtitles will look on your video.',
              },
              {
                n: '05',
                title: 'Process & Download Your MP4',
                body:
                  'Hit "Process Subtitles." Scenith burns your translated captions permanently into the video and gives you a downloadable MP4 — ready for YouTube, Instagram, TikTok, LinkedIn, or client delivery.',
              },
            ].map((step) => (
              <li key={step.n} className="st-step-item">
                <span className="st-step-num" aria-hidden="true">{step.n}</span>
                <div className="st-step-body">
                  <h3 className="st-step-title">{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="st-cta-inline">
            <a href={UTM_LINK} className="st-cta-btn st-cta-btn--sm">
              Start Translating Now — It&apos;s Free →
            </a>
          </div>
        </div>
      </section>

      {/* ── LANGUAGES TABLE ──────────────────────────────────── */}
      <section className="st-section st-section--alt" id="languages" aria-labelledby="lang-title">
        <div className="st-container">
          <h2 id="lang-title" className="st-section-title">
            50+ Languages Supported for Subtitle Translation
          </h2>
          <p className="st-section-sub">
            Whether your audience speaks Spanish, Mandarin, Arabic, or Swahili — our subtitle
            translator handles it. Below are the most commonly requested language pairs.
          </p>

          <div className="st-lang-grid" role="list" aria-label="Supported subtitle translation languages">
            {[
              { flag: '🇪🇸', name: 'Spanish', note: 'Most requested' },
              { flag: '🇫🇷', name: 'French', note: 'High accuracy' },
              { flag: '🇩🇪', name: 'German', note: 'High accuracy' },
              { flag: '🇮🇳', name: 'Hindi', note: 'Growing demand' },
              { flag: '🇨🇳', name: 'Mandarin Chinese', note: 'Unicode ready' },
              { flag: '🇯🇵', name: 'Japanese', note: 'Unicode ready' },
              { flag: '🇰🇷', name: 'Korean', note: 'Unicode ready' },
              { flag: '🇸🇦', name: 'Arabic', note: 'RTL supported' },
              { flag: '🇧🇷', name: 'Portuguese', note: 'BR & EU variants' },
              { flag: '🇮🇹', name: 'Italian', note: 'High accuracy' },
              { flag: '🇷🇺', name: 'Russian', note: 'Cyrillic fonts' },
              { flag: '🇳🇱', name: 'Dutch', note: 'High accuracy' },
              { flag: '🇹🇷', name: 'Turkish', note: 'Growing demand' },
              { flag: '🇮🇩', name: 'Indonesian', note: 'SE Asia top pick' },
              { flag: '🇵🇱', name: 'Polish', note: 'High accuracy' },
              { flag: '🇸🇪', name: 'Swedish', note: 'Nordic support' },
              { flag: '🇺🇦', name: 'Ukrainian', note: 'Cyrillic fonts' },
              { flag: '🇻🇳', name: 'Vietnamese', note: 'SE Asia support' },
              { flag: '🇹🇭', name: 'Thai', note: 'SE Asia support' },
              { flag: '🇬🇷', name: 'Greek', note: 'Unicode ready' },
              { flag: '🇧🇩', name: 'Bengali', note: 'South Asia demand' },
              { flag: '🇲🇾', name: 'Malay', note: 'SE Asia support' },
              { flag: '🇮🇱', name: 'Hebrew', note: 'RTL supported' },
              { flag: '🌍', name: 'Swahili', note: 'African market' },
            ].map((lang) => (
              <div key={lang.name} className="st-lang-card" role="listitem">
                <span className="st-lang-flag" aria-hidden="true">{lang.flag}</span>
                <strong className="st-lang-name">{lang.name}</strong>
                <span className="st-lang-note">{lang.note}</span>
              </div>
            ))}
          </div>

          <p className="st-lang-footer">
            + dozens more including Finnish, Czech, Romanian, Catalan, Croatian, Slovak, Danish,
            Norwegian, Filipino, Punjabi, Tamil, Telugu, Urdu, Farsi, and Azerbaijani.
          </p>
        </div>
      </section>

      {/* ── USE CASES ─────────────────────────────────────────── */}
      <section className="st-section" id="use-cases" aria-labelledby="uc-title">
        <div className="st-container">
          <h2 id="uc-title" className="st-section-title">
            Who Uses an Online Subtitle Translator in 2026?
          </h2>
          <p className="st-section-sub">
            The demand for translated video content is exploding. Here is where professionals and
            creators rely on subtitle translation most.
          </p>

          <div className="st-uc-grid">
            {[
              {
                icon: '🎬',
                title: 'Independent Filmmakers',
                body:
                  'Submit films to international festivals without hiring a professional subtitling studio. Translate dialogue subtitles into festival-required languages (French, Spanish, German) in hours, not weeks.',
              },
              {
                icon: '📱',
                title: 'Social Media Creators',
                body:
                  'Reach Spanish, Hindi, and Portuguese-speaking audiences on Instagram Reels and TikTok without re-recording voiceovers. Translated subtitles double your potential reach overnight.',
              },
              {
                icon: '🎓',
                title: 'Online Educators & Course Creators',
                body:
                  'Sell your Udemy or Teachable course globally. Translate course video subtitles into Spanish, French, or German to unlock 3× the potential student base without creating new content.',
              },
              {
                icon: '💼',
                title: 'Marketing Agencies',
                body:
                  'Localize client video ad campaigns for different markets in a fraction of the time. Turn one English product video into Spanish, French, German, and Portuguese versions in under an hour.',
              },
              {
                icon: '📺',
                title: 'YouTube Channel Owners',
                body:
                  'Add multi-language subtitle tracks to boost international watch time. YouTube\'s algorithm rewards multilingual content with broader distribution and higher CPM in premium markets.',
              },
              {
                icon: '🏢',
                title: 'Corporate Communication Teams',
                body:
                  'Translate internal training videos, town halls, and onboarding content for global teams across time zones. Keep everyone aligned in their native language without expensive localization agencies.',
              },
              {
                icon: '🎮',
                title: 'Gaming & Esports Content',
                body:
                  'Translate commentary, highlight reels, and tournament streams for international fans. The esports audience is globally distributed — Spanish, Portuguese, and Korean are massive.',
              },
              {
                icon: '🏥',
                title: 'Healthcare & NGOs',
                body:
                  'Create multilingual patient education videos and public health campaigns. Translated subtitles ensure critical health information reaches communities in their native language.',
              },
            ].map((uc) => (
              <article key={uc.title} className="st-uc-card">
                <span className="st-uc-icon" aria-hidden="true">{uc.icon}</span>
                <h3 className="st-uc-title">{uc.title}</h3>
                <p className="st-uc-body">{uc.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── BIG CTA BANNER ───────────────────────────────────── */}
      <section className="st-cta-banner" aria-labelledby="cta-banner-title">
        <div className="st-cta-banner-inner">
          <h2 id="cta-banner-title" className="st-cta-banner-title">
            Your audience is waiting in 50+ languages.
            <br />
            <span>Give them subtitles they can read.</span>
          </h2>
          <p className="st-cta-banner-sub">
            No Premiere Pro. No Aegisub. No Python. Just upload, generate, translate, and
            download — in under 3 minutes.
          </p>
          <a href={UTM_LINK} className="st-cta-btn st-cta-btn--lg">
            <span>🌐</span> Open the Free Subtitle Translator →
          </a>
          <div className="st-cta-banner-features">
            <span>✓ Whisper AI accuracy</span>
            <span>✓ 50+ languages</span>
            <span>✓ Burn into MP4</span>
            <span>✓ Custom styles</span>
            <span>✓ Free to start</span>
          </div>
        </div>
      </section>

      {/* ── WHY AI SUBTITLE TRANSLATION ──────────────────────── */}
      <section className="st-section st-section--alt" id="why-ai" aria-labelledby="why-title">
        <div className="st-container">
          <h2 id="why-title" className="st-section-title">
            Why AI Subtitle Translation Is Replacing Traditional Localization in 2026
          </h2>
          <p className="st-section-sub">
            The localization industry is being reshaped by deep learning. Here is what is driving
            the shift — and what it means for video creators.
          </p>

          <div className="st-why-grid">
            <article className="st-why-card">
              <div className="st-why-num">01</div>
              <h3>Cost: $0 vs $1,500 per video</h3>
              <p>
                Traditional subtitle translation through a localization agency costs{' '}
                <strong>$1–3 per video minute per language</strong>. A 10-minute video in five
                languages costs $500–$1,500. AI subtitle translation reduces that cost to
                effectively zero for most creators, making global reach accessible to solo creators
                and small businesses for the first time.
              </p>
            </article>

            <article className="st-why-card">
              <div className="st-why-num">02</div>
              <h3>Speed: Minutes vs Weeks</h3>
              <p>
                Professional translation agencies quote{' '}
                <strong>3–10 business days turnaround</strong> for subtitle translation projects.
                AI completes the same transcription step in 60–120 seconds. Even with manual
                translation editing, a creator can localize a 5-minute video into three languages
                in an afternoon rather than waiting two weeks.
              </p>
            </article>

            <article className="st-why-card">
              <div className="st-why-num">03</div>
              <h3>Scale: One Video → 50 Languages</h3>
              <p>
                Human localization teams scale linearly — more languages means more time and money.
                AI subtitle tools allow{' '}
                <strong>parallel processing across dozens of language versions</strong>
                simultaneously. A YouTube channel can translate its entire back-catalog of videos
                into five languages in a weekend rather than a year.
              </p>
            </article>

            <article className="st-why-card">
              <div className="st-why-num">04</div>
              <h3>Accuracy: 90–98% for Major Pairs</h3>
              <p>
                Modern neural machine translation models trained on billions of bilingual sentence
                pairs achieve{' '}
                <strong>BLEU scores equivalent to professional human translators</strong> for
                major language pairs (EN↔ES, EN↔FR, EN↔DE, EN↔ZH). For content where nuance
                matters, AI provides an accurate draft that requires only light human review —
                cutting editing time by 80%.
              </p>
            </article>

            <article className="st-why-card">
              <div className="st-why-num">05</div>
              <h3>Platform Growth: Global Audiences Demand Native Content</h3>
              <p>
                YouTube reported that{' '}
                <strong>over 60% of views come from non-English markets</strong>. TikTok's fastest
                growing demographics in 2025–2026 are in Southeast Asia, Latin America, and
                Africa. Creators who localize subtitle content consistently outperform
                English-only accounts by 40–120% in international reach metrics.
              </p>
            </article>

            <article className="st-why-card">
              <div className="st-why-num">06</div>
              <h3>SEO: Translated Subtitles Index in Local Search</h3>
              <p>
                Burned-in or companion subtitle files give search engines text to index in the
                target language. A Spanish-language subtitle track on your English video{' '}
                <strong>effectively creates a second piece of content</strong> indexable in
                Spanish SERPs — with zero extra effort. YouTube videos with multilingual captions
                receive measurably higher impressions in non-English markets.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ── DEEP-DIVE: SUBTITLE TRANSLATION TECH ─────────────── */}
      <section className="st-section" id="technology" aria-labelledby="tech-title">
        <div className="st-container">
          <h2 id="tech-title" className="st-section-title">
            The Technology Behind Online Subtitle Translation
          </h2>
          <p className="st-section-sub">
            Understanding how AI subtitle translation works helps you use it more effectively —
            and know when manual review is warranted.
          </p>

          <div className="st-tech-blocks">
            <div className="st-tech-block">
              <h3>🎙️ Step 1 — Automatic Speech Recognition (ASR)</h3>
              <p>
                The foundation of any subtitle translation pipeline is{' '}
                <strong>Automatic Speech Recognition (ASR)</strong>. ASR converts the audio
                waveform in your video into machine-readable text. Modern ASR systems like OpenAI
                Whisper use encoder-decoder transformer architectures trained on 680,000+ hours of
                multilingual audio. The model learns acoustic patterns, language phonology, and
                contextual word prediction simultaneously.
              </p>
              <p>
                Key factors that affect ASR accuracy: <strong>signal-to-noise ratio</strong>{' '}
                (background music reduces accuracy by 3–8%), speaker count (single speaker =
                highest accuracy), speaking pace (fast speech reduces accuracy by 5–12%), and{' '}
                <strong>domain vocabulary</strong> (technical, medical, or legal jargon not
                present in training data causes substitution errors).
              </p>
              <p>
                Whisper achieves <strong>Word Error Rates (WER) of 4–6%</strong> for standard
                English — comparable to professional human transcriptionists for clear audio.
              </p>
            </div>

            <div className="st-tech-block">
              <h3>⏱️ Step 2 — Forced Alignment and Timestamp Generation</h3>
              <p>
                Once words are transcribed, the system uses{' '}
                <strong>forced alignment algorithms</strong> to attach precise start and end
                timestamps to each word or phrase. This is what enables subtitles to pop on and
                off at the exact right millisecond.
              </p>
              <p>
                Modern alignment models use{' '}
                <strong>Connectionist Temporal Classification (CTC)</strong> — a technique that
                maps raw audio frames to text tokens and identifies which audio segment corresponds
                to which phoneme. The result is word-level timestamps accurate to within{' '}
                <strong>50–100 milliseconds</strong> of the actual spoken word.
              </p>
              <p>
                Subtitle segmentation algorithms then group words into readable chunks — typically
                42 characters maximum or 2 lines — with display durations calculated from reading
                speed models (21 characters per second is the international broadcasting standard).
              </p>
            </div>

            <div className="st-tech-block">
              <h3>🌐 Step 3 — Neural Machine Translation (NMT)</h3>
              <p>
                With source-language subtitles generated, the translation step uses{' '}
                <strong>Neural Machine Translation (NMT)</strong>. Unlike older statistical
                machine translation that translated word by word, NMT processes entire sentences
                and paragraphs to capture meaning, context, and idiomatic expression.
              </p>
              <p>
                State-of-the-art NMT systems (Google Translate, DeepL, NLLB-200) use{' '}
                <strong>sequence-to-sequence transformer architectures</strong> with attention
                mechanisms that learn which source words should influence each target word.
                NLLB-200 — Meta AI's No Language Left Behind model — supports over 200 languages
                with particularly strong performance on low-resource languages like Swahili, Yoruba,
                and Uzbek.
              </p>
              <p>
                For subtitle translation specifically, the challenge is{' '}
                <strong>length constraint management</strong>. A translated subtitle must fit the
                same on-screen time as the original. German sentences are typically 20–30% longer
                than English equivalents. Good subtitle translation systems auto-compress verbose
                translations to maintain readability within the time constraint.
              </p>
            </div>

            <div className="st-tech-block">
              <h3>🎨 Step 4 — Video Compositing and Subtitle Burning</h3>
              <p>
                The final step renders translated text onto the video frames. This process —
                called <strong>subtitle burning or hardcoding</strong> — uses FFmpeg with libass
                or custom rendering pipelines to draw styled text characters directly onto each
                frame.
              </p>
              <p>
                Unlike soft subtitles (separate SRT/VTT files), burned-in subtitles are{' '}
                <strong>platform-agnostic</strong>. They display correctly on every device,
                platform, and player — from Instagram to Smart TVs — without requiring the viewer
                to enable caption settings. For social media content, burned-in translated
                subtitles are the universally recommended format.
              </p>
              <p>
                Rendering resolution affects file quality. Processing at{' '}
                <strong>1080p or higher</strong> ensures subtitle text remains sharp even after
                platform recompression by YouTube, Instagram, or TikTok.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPARISON: TOOLS ─────────────────────────────────── */}
      <section className="st-section st-section--alt" id="comparison" aria-labelledby="comp-title">
        <div className="st-container">
          <h2 id="comp-title" className="st-section-title">
            Online Subtitle Translator Comparison: Scenith vs Alternatives
          </h2>
          <p className="st-section-sub">
            Not all subtitle translation tools are equal. Here is how the most popular options
            compare on features that actually matter in 2026.
          </p>

          <div className="st-comp-table-wrap">
            <table className="st-comp-table" aria-label="Subtitle translator comparison table">
              <thead>
                <tr>
                  <th scope="col">Feature</th>
                  <th scope="col" className="st-col-highlight">Scenith ✦</th>
                  <th scope="col">Kapwing</th>
                  <th scope="col">VEED.io</th>
                  <th scope="col">Rev.com</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['AI Subtitle Generation', '✅ Whisper AI', '✅ Basic AI', '✅ Basic AI', '❌ Manual only'],
                  ['Languages Supported', '✅ 50+', '⚠️ 25+', '⚠️ 30+', '⚠️ 15+'],
                  ['Watermark-Free Free Plan', '✅ Yes', '❌ Watermark', '❌ Watermark', '✅ (paid only)'],
                  ['Burn Subtitles into MP4', '✅ Yes', '✅ Yes', '✅ Yes', '❌ File only'],
                  ['Custom Subtitle Styles', '✅ 25+ styles', '⚠️ Limited', '✅ Good', '❌ None'],
                  ['Price (free tier)', '✅ Free', '⚠️ Free w/ limits', '⚠️ Free w/ watermark', '❌ $1.25/min'],
                  ['Max Free Video Length', '✅ 10 min', '⚠️ 10 min', '⚠️ 10 min', '❌ No free tier'],
                  ['Browser-Based', '✅ Yes', '✅ Yes', '✅ Yes', '✅ Yes'],
                  ['Subtitle Inline Editor', '✅ Full editor', '⚠️ Basic', '✅ Good', '❌ None'],
                  ['MP4 Quality (free)', '✅ Up to 720p', '⚠️ 720p', '⚠️ 720p compressed', '❌ N/A'],
                ].map(([feat, ...vals]) => (
                  <tr key={feat as string}>
                    <td className="st-comp-feat">{feat}</td>
                    {vals.map((v, i) => (
                      <td key={i} className={i === 0 ? 'st-col-highlight' : ''}>
                        {v}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="st-cta-inline" style={{ marginTop: '2.5rem' }}>
            <a href={UTM_LINK} className="st-cta-btn st-cta-btn--sm">
              Try Scenith Free — No Credit Card →
            </a>
          </div>
        </div>
      </section>

      {/* ── BEST PRACTICES GUIDE ──────────────────────────────── */}
      <section className="st-section" id="best-practices" aria-labelledby="bp-title">
        <div className="st-container">
          <h2 id="bp-title" className="st-section-title">
            Subtitle Translation Best Practices: A Professional Guide
          </h2>
          <p className="st-section-sub">
            Translating subtitles is not just word-for-word replacement. These professional
            techniques ensure your translated captions are readable, accurate, and culturally
            appropriate.
          </p>

          <div className="st-bp-grid">
            {[
              {
                num: '1',
                title: 'Prioritize Meaning Over Literal Translation',
                body:
                  'Direct translation of idioms often produces nonsensical subtitles. "Break a leg" in Spanish should be "¡Mucha suerte!" not "Rompe una pierna." Always prioritize the intended meaning and emotional register over word-for-word accuracy. Native speaker review for key markets is worth the extra step.',
              },
              {
                num: '2',
                title: 'Respect the Character Limit Per Line',
                body:
                  'International broadcasting standards cap subtitles at 42 characters per line and 2 lines maximum on screen at once. Some languages (German, Finnish) naturally produce longer words — you may need to rephrase to fit the constraint. Subtitles that overflow the screen confuse viewers and look unprofessional.',
              },
              {
                num: '3',
                title: 'Maintain the Original Timing Sync',
                body:
                  'Translated subtitles must appear and disappear at the same timestamp as the original. Do not shift timing to accommodate longer translated text — instead, compress the translation. Viewers hear the original audio; subtitle timing that drifts sounds jarring and reduces trust.',
              },
              {
                num: '4',
                title: 'Use Right-to-Left (RTL) Fonts for Arabic and Hebrew',
                body:
                  'Arabic, Hebrew, Persian, and Urdu are written right-to-left. Standard subtitle renderers may display these languages incorrectly. Ensure your subtitle tool explicitly supports RTL text direction and uses appropriate Unicode font families. Left-aligned RTL text is a common mistake that makes subtitles unreadable.',
              },
              {
                num: '5',
                title: 'Adapt Numbers, Dates, and Currency',
                body:
                  'Localization goes beyond language. Dates ("January 5th" vs "5 January" vs "5 enero"), number formats ("1,000" vs "1.000"), and currency symbols differ by region. Translated subtitles should reflect local conventions for the target market, not just translate the words.',
              },
              {
                num: '6',
                title: 'Preserve Speaker Tone and Register',
                body:
                  'A formal business speaker should sound formal in the translation. A casual influencer\'s subtitle should maintain their conversational, informal register. Many languages (French, German, Spanish, Japanese) have formal and informal pronouns — choose the register that matches the speaker and content context.',
              },
              {
                num: '7',
                title: 'Localize Cultural References',
                body:
                  'A reference to "the Super Bowl" may need to become "the Champions League final" for a European Spanish audience. Baseball analogies are meaningless in most of Asia. Cultural localization — not just translation — is what separates professional subtitles from amateur machine output.',
              },
              {
                num: '8',
                title: 'Always Do a Full Playback Review',
                body:
                  'After translating, play the video from start to finish with translated subtitles enabled. Read each subtitle as a viewer would. Check for: text that appears too briefly to read, translation errors, RTL rendering issues, and cultural references that need localization. This 10-minute step prevents embarrassing errors on published content.',
              },
            ].map((bp) => (
              <article key={bp.num} className="st-bp-card">
                <span className="st-bp-num" aria-hidden="true">{bp.num}</span>
                <h3 className="st-bp-title">{bp.title}</h3>
                <p>{bp.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS / SOCIAL PROOF ─────────────────────────────── */}
      <section className="st-section st-section--alt" id="impact" aria-labelledby="impact-title">
        <div className="st-container">
          <h2 id="impact-title" className="st-section-title">
            The Business Case for Translated Subtitles: Data & Statistics
          </h2>
          <p className="st-section-sub">
            These numbers explain why subtitle translation is no longer optional for serious
            content creators and video marketers in 2026.
          </p>

          <div className="st-stats-grid">
            {[
              { stat: '80%', label: 'of social media videos watched without sound', note: 'Facebook Internal Data, 2025' },
              { stat: '40%', label: 'more YouTube views for captioned videos', note: 'YouTube Creator Academy' },
              { stat: '60%+', label: 'of global YouTube views from non-English markets', note: 'YouTube Global Report' },
              { stat: '7.32%', label: 'better search ranking for captioned video pages', note: 'Discoverability Study' },
              { stat: '3×', label: 'potential student reach when courses add Spanish subtitles', note: 'E-Learning Industry Report' },
              { stat: '466M', label: 'people worldwide with disabling hearing loss', note: 'WHO, 2024' },
              { stat: '35%', label: 'more Instagram engagement with subtitled Reels', note: 'Sprout Social Study' },
              { stat: '90%+', label: 'AI translation accuracy for major language pairs', note: 'Independent NMT Benchmarks' },
            ].map((s) => (
              <div key={s.stat} className="st-stat-card">
                <div className="st-stat-num">{s.stat}</div>
                <div className="st-stat-label">{s.label}</div>
                <div className="st-stat-note">{s.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SRT / FILE FORMATS ───────────────────────────────── */}
      <section className="st-section" id="file-formats" aria-labelledby="ff-title">
        <div className="st-container">
          <h2 id="ff-title" className="st-section-title">
            Subtitle File Formats Explained: SRT, VTT, ASS, and More
          </h2>
          <p className="st-section-sub">
            Before translating subtitles, it helps to understand the underlying file formats —
            and when to use each one.
          </p>

          <div className="st-format-grid">
            {[
              {
                ext: '.SRT',
                full: 'SubRip Text',
                desc:
                  'The most universally compatible subtitle format. Plain text with numbered segments, timestamps (HH:MM:SS,ms), and subtitle text. Supported by virtually every video player, platform, and editor. Best choice for maximum compatibility.',
                use: 'YouTube, Vimeo, media players, most NLEs',
                limit: 'No native styling support (formatting is platform-dependent)',
              },
              {
                ext: '.VTT',
                full: 'WebVTT',
                desc:
                  'Web-native subtitle format designed for HTML5 video. Similar structure to SRT but with improved support for positioning, alignment, and basic CSS styling. The preferred format for web-embedded video players.',
                use: 'Web players, streaming platforms, HTML5 video',
                limit: 'Less widely supported in standalone media players',
              },
              {
                ext: '.ASS',
                full: 'Advanced SubStation Alpha',
                desc:
                  'A powerful subtitle format supporting per-subtitle font, color, size, position, and animation effects. The professional standard for anime fansubs and stylized subtitle productions. Requires compatible players.',
                use: 'Anime, stylized content, VLC, MPC-HC',
                limit: 'Not natively supported on most platforms (YouTube, Instagram)',
              },
              {
                ext: '.SSA',
                full: 'SubStation Alpha',
                desc:
                  'The predecessor to ASS. Less feature-rich but still widely used in broadcast workflows and legacy subtitle archives. Largely superseded by ASS for creative use and SRT for general compatibility.',
                use: 'Legacy broadcast workflows, archival use',
                limit: 'Limited styling vs ASS; lower compatibility than SRT',
              },
              {
                ext: 'Burned-in',
                full: 'Hardcoded / Open Captions',
                desc:
                  'Subtitles permanently rendered onto video frames — not a separate file. Guaranteed to display on every platform, device, and player. The only format that works on platforms with no native caption support.',
                use: 'Social media, reels, stories, international distribution',
                limit: 'Cannot be toggled off by viewers; increases file size slightly',
              },
            ].map((f) => (
              <article key={f.ext} className="st-format-card">
                <div className="st-format-ext">{f.ext}</div>
                <div className="st-format-full">{f.full}</div>
                <p className="st-format-desc">{f.desc}</p>
                <div className="st-format-meta">
                  <span><strong>Best for:</strong> {f.use}</span>
                  <span><strong>Limitation:</strong> {f.limit}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECOND MEGA CTA ──────────────────────────────────── */}
      <section className="st-cta-banner st-cta-banner--v2" aria-labelledby="cta2-title">
        <div className="st-cta-banner-inner">
          <h2 id="cta2-title" className="st-cta-banner-title">
            Stop losing international viewers.
            <br />
            <span>Translate your subtitles in under 3 minutes.</span>
          </h2>
          <p className="st-cta-banner-sub">
            Upload your video → Generate captions → Edit translation → Download MP4.
            <br />
            No account needed to get started. No software. No waiting.
          </p>
          <a href={UTM_LINK} className="st-cta-btn st-cta-btn--lg st-cta-btn--alt">
            <span>🌍</span> Translate Subtitles Free — Start Now →
          </a>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <section className="st-section st-section--alt" id="faq" aria-labelledby="faq-title">
        <div className="st-container">
          <h2 id="faq-title" className="st-section-title">
            Frequently Asked Questions: Online Subtitle Translation
          </h2>
          <div className="st-faq-grid">
            {[
              {
                q: 'Can I translate subtitles online for free?',
                a: 'Yes. Scenith offers a free tier that includes AI subtitle generation, manual subtitle editing, and MP4 export with burned-in captions. Free accounts support videos up to 10 minutes. No credit card is required to start.',
              },
              {
                q: 'What subtitle file formats are supported?',
                a: 'Our tool generates subtitles directly from video audio — no need to upload a separate SRT or VTT file. The output can be burned into your MP4 (hardcoded captions) or reviewed and edited before processing. SRT export is planned in an upcoming update.',
              },
              {
                q: 'Which languages can I translate subtitles into?',
                a: 'You can manually translate subtitle text into any language that uses Unicode characters, including Spanish, French, German, Hindi, Mandarin, Japanese, Korean, Arabic (RTL), Portuguese, Russian, Turkish, and 40+ more. The subtitle editor accepts any Unicode text you paste.',
              },
              {
                q: 'How accurate is AI subtitle translation?',
                a: 'The AI speech recognition step (Whisper) achieves 95–98% accuracy for clear audio. The translation step depends on the quality of the translation you input. For critical content, we recommend using DeepL or a native speaker to produce the translated text, then pasting it into our editor for perfect timing and styling.',
              },
              {
                q: 'Can I burn translated subtitles into my video?',
                a: 'Yes. After editing your translated subtitle text and choosing a style, click "Process Subtitles." Scenith permanently renders your translated captions into the video frames and delivers a downloadable MP4. These hardcoded subtitles display on every platform without viewer action.',
              },
              {
                q: 'Do I need to download software to translate subtitles?',
                a: 'No software, plugin, extension, or app download is required. Scenith is 100% browser-based. It runs on Chrome, Firefox, Safari, and Edge on desktop, tablet, and mobile devices.',
              },
              {
                q: 'How long does subtitle translation take?',
                a: 'AI subtitle generation for a 1–3 minute video takes approximately 30–90 seconds. Manual translation editing depends on video length and language pair. Final video processing (burning subtitles) takes 1–3 minutes for videos under 10 minutes.',
              },
              {
                q: 'Is there a video length limit for subtitle translation?',
                a: 'Free accounts support videos up to 10 minutes in length. Creator Lite accounts support up to 30 minutes, and Creator/Studio plans support up to 2 hours. There is no hard file size limit as long as the video is within the time allowance.',
              },
              {
                q: 'Can I translate subtitles from any source language?',
                a: 'Yes. Whisper AI auto-detects the spoken language in your video — you do not need to specify the source language. It supports detection and transcription for 50+ languages. You can then translate the generated subtitles into any target language via the inline editor.',
              },
              {
                q: 'Do you support right-to-left languages like Arabic and Hebrew?',
                a: 'Our subtitle editor accepts Arabic, Hebrew, Persian, and Urdu text input. For burned-in RTL subtitle rendering, use fonts that include RTL character sets. We are actively improving native RTL layout support in the subtitle compositor.',
              },
            ].map((item) => (
              <article key={item.q} className="st-faq-item">
                <h3 className="st-faq-q">{item.q}</h3>
                <p className="st-faq-a">{item.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELATED TOOLS ─────────────────────────────────────── */}
      <section className="st-section" id="related" aria-labelledby="related-title">
        <div className="st-container">
          <h2 id="related-title" className="st-section-title">Related Video & Subtitle Tools</h2>
          <p className="st-section-sub">
            Subtitle translation is one part of a complete video localization workflow. Explore
            the full Scenith toolkit.
          </p>
          <div className="st-related-grid">
            {[
              {
                icon: '🤖',
                title: 'AI Subtitle Generator',
                desc: 'Auto-generate subtitles from any video in seconds with Whisper AI. 50+ languages, 25+ styles, instant MP4 download.',
                href: '/tools/add-subtitles-to-videos',
                cta: 'Generate Subtitles →',
              },
              {
                icon: '🎙️',
                title: 'AI Voice Generator',
                desc: 'Turn text into realistic voiceovers in multiple languages. Pair with translated subtitles for full video localization.',
                href: '/tools/ai-voice-generation',
                cta: 'Generate Voice →',
              },
              {
                icon: '🖼️',
                title: 'Free Image Editor',
                desc: 'Design multilingual video thumbnails and social media graphics. Supports non-Latin fonts for international markets.',
                href: '/tools/image-editing',
                cta: 'Edit Images →',
              },
            ].map((t) => (
              <article key={t.title} className="st-related-card">
                <span className="st-related-icon" aria-hidden="true">{t.icon}</span>
                <h3 className="st-related-title">{t.title}</h3>
                <p>{t.desc}</p>
                <a href={t.href} className="st-related-link">{t.cta}</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────── */}
      <section className="st-final-cta" aria-labelledby="final-cta-title">
        <div className="st-container">
          <h2 id="final-cta-title" className="st-final-cta-title">
            Your next 10,000 viewers speak a language other than English.
          </h2>
          <p className="st-final-cta-sub">
            Translated subtitles are the single highest-leverage action you can take to grow a
            video audience globally in 2026. It takes under 10 minutes. It costs nothing. And the
            compound effect on watch time, SEO, and reach is permanent.
          </p>
          <a href={UTM_LINK} className="st-cta-btn st-cta-btn--xl">
            🌐 Translate My Subtitles — 100% Free
          </a>
          <p className="st-final-cta-note">
            Powered by Whisper AI · 50+ Languages · Burn into MP4 · No Software Required
          </p>
        </div>
      </section>
    </div>
  );
}