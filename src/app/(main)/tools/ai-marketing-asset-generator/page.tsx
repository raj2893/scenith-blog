import type { Metadata } from "next";
import "./ai-marketing-asset-generator.css";

// ─── SEO Metadata ────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "AI Marketing Asset Generator — Create Ads, Voiceovers, Videos & Images Free | Scenith",
  description:
    "Generate marketing assets with AI in seconds. Create ad copy voiceovers, product images, promo videos, social media visuals, and brand content — all from a single text prompt. Free to start. No design skills needed.",
  keywords: [
    "AI marketing asset generator",
    "AI content for marketing",
    "AI ad creative generator",
    "AI generated marketing assets 2026",
    "automated marketing content AI",
    "AI image generator for marketing",
    "AI voiceover for ads",
    "AI video generator for marketing",
    "marketing AI tools free",
    "create marketing assets with AI",
    "brand content AI generator",
    "social media AI content creator",
    "AI product photography",
    "AI ad video creator",
    "free AI marketing tool",
  ],
  openGraph: {
    title: "AI Marketing Asset Generator — Voice, Image & Video for Marketers",
    description:
      "Turn a single text prompt into a complete marketing package. Generate ad voiceovers, product visuals, social reels, and brand videos — instantly, with AI.",
    url: "https://scenith.in/tools/ai-marketing-asset-generator",
    siteName: "Scenith",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Marketing Asset Generator | Scenith",
    description:
      "Generate ad voiceovers, product images, social media videos, and brand content with AI — in seconds, not days.",
  },
  alternates: {
    canonical: "https://scenith.in/tools/ai-marketing-asset-generator",
  },
};

// ─── Structured Data ─────────────────────────────────────────────────────────

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://scenith.in/tools/ai-marketing-asset-generator",
      url: "https://scenith.in/tools/ai-marketing-asset-generator",
      name: "AI Marketing Asset Generator",
      description:
        "Generate marketing assets — voiceovers, images, and videos — from a single AI-powered platform. Free credits on sign-up.",
      isPartOf: { "@id": "https://scenith.in/#website" },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://scenith.in" },
          { "@type": "ListItem", position: 2, name: "Tools", item: "https://scenith.in/tools" },
          { "@type": "ListItem", position: 3, name: "AI Marketing Asset Generator" },
        ],
      },
    },
    {
      "@type": "SoftwareApplication",
      name: "Scenith AI Marketing Asset Generator",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: "https://scenith.in/create-ai-content",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "50 free credits on signup. Paid plans from $9/mo.",
      },
      featureList: [
        "AI voice generation for ads and marketing",
        "AI image generation for product and brand visuals",
        "AI video generation for social media",
        "40+ voices across 20+ languages",
        "7 AI image models",
        "6 AI video models",
        "Full commercial rights",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is an AI marketing asset generator?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "An AI marketing asset generator is a tool that uses artificial intelligence to create marketing materials — including ad voiceovers, product images, promotional videos, social media graphics, and brand content — from a text prompt, without requiring design skills or expensive production teams.",
          },
        },
        {
          "@type": "Question",
          name: "Can I use AI-generated marketing assets commercially?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. All content generated on Scenith — images, voiceovers, and videos — is licensed for full commercial use. You can publish it in ads, on client websites, in social campaigns, and in paid media without attribution or additional licensing fees.",
          },
        },
        {
          "@type": "Question",
          name: "Which AI models power the marketing asset generator?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Scenith integrates GPT Image 1 (OpenAI), Imagen 4 (Google), FLUX 1.1 Pro, Grok Aurora (xAI), Stability AI Core for images; Google TTS, OpenAI TTS, and Azure Neural TTS for voiceovers; and Kling 2.6 Pro, Veo 3.1, Wan 2.5, and Grok Imagine for video generation.",
          },
        },
        {
          "@type": "Question",
          name: "How fast does the AI generate marketing assets?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Voiceovers are ready in 2–4 seconds. Images generate in 10–30 seconds. Videos take 30–120 seconds depending on model, duration, and resolution selected.",
          },
        },
      ],
    },
  ],
};

// ─── Asset Type Data ──────────────────────────────────────────────────────────

const assetTypes = [
  {
    icon: "🎙️",
    title: "Ad Voiceovers",
    desc: "Produce broadcast-quality ad voiceovers in 40+ voices across 20+ languages. Perfect for radio, digital pre-roll, product demos, and in-store audio. No recording booth. No VO talent fees.",
    tag: "Voice",
    accent: "volt",
  },
  {
    icon: "🖼️",
    title: "Product & Brand Images",
    desc: "Generate studio-quality product photos, lifestyle scenes, hero banners, and brand illustrations from a sentence. Replace expensive photoshoots with 7 AI image models including GPT Image 1 and Imagen 4.",
    tag: "Image",
    accent: "electric",
  },
  {
    icon: "🎬",
    title: "Promo & Social Videos",
    desc: "Create cinematic 5–10 second video ads for Instagram Reels, YouTube Shorts, TikTok, and paid social. Choose from Kling 2.6, Veo 3.1, and Wan 2.5 — no video editor needed.",
    tag: "Video",
    accent: "signal",
  },
  {
    icon: "📣",
    title: "Social Media Visuals",
    desc: "Generate thumb-stopping graphics, carousel images, and story visuals optimised for every platform — in portrait, landscape, or square format. From concept to export in under 30 seconds.",
    tag: "Image",
    accent: "purple",
  },
  {
    icon: "🎧",
    title: "Podcast & Explainer Audio",
    desc: "Convert long-form scripts into polished narrations using natural AI voices with precise speed control. Ideal for brand podcasts, explainer videos, and onboarding flows.",
    tag: "Voice",
    accent: "teal",
  },
  {
    icon: "🏷️",
    title: "Branded Content Videos",
    desc: "Produce short-form brand films, testimonial-style clips, and mood videos without a production team. Upload your reference image and let Kling or Veo animate it into a full video.",
    tag: "Video",
    accent: "orange",
  },
];

const useCases = [
  {
    emoji: "📲",
    title: "Performance Marketing Teams",
    desc: "Run 5x more creative tests per sprint. Generate 20 ad image variants in the time it used to take to brief a designer for 2. A/B test voiceover styles across regions in multiple languages without rebooking VO talent.",
  },
  {
    emoji: "🛍️",
    title: "E-commerce & DTC Brands",
    desc: "Launch new SKUs with instant AI product photography. Generate lifestyle shots, detail images, and animated product videos without a studio. Update seasonal visuals in minutes, not weeks.",
  },
  {
    emoji: "🏢",
    title: "Agency & Freelance Creatives",
    desc: "Deliver first-round creative concepts within hours of a client brief. Use AI assets as production-ready deliverables or as high-fidelity mockups for client approval before committing to full shoots.",
  },
  {
    emoji: "🚀",
    title: "Startups & Growth Teams",
    desc: "Build a complete brand visual library from zero — no design team required. Generate landing page images, paid ad creatives, investor deck visuals, and launch video teasers before your Series A.",
  },
  {
    emoji: "🎓",
    title: "EdTech & Course Creators",
    desc: "Produce professional narrated modules, illustrated explainers, and promotional trailers for your courses. Launch marketing campaigns across multiple languages with AI-localised voiceovers.",
  },
  {
    emoji: "🌍",
    title: "Global & Multi-market Brands",
    desc: "Localise campaigns at scale. Generate the same ad voiceover in 12 languages simultaneously. Adapt imagery across cultural contexts without separate regional photoshoots.",
  },
];

const platforms = [
  { icon: "▶️", name: "YouTube", spec: "Thumbnails, pre-roll voiceovers, intro videos" },
  { icon: "📸", name: "Instagram", spec: "9:16 Reels, carousel posts, Stories" },
  { icon: "🎵", name: "TikTok", spec: "15–30s vertical video ads, BGM voiceovers" },
  { icon: "💼", name: "LinkedIn", spec: "Branded banners, thought-leadership audio" },
  { icon: "🔵", name: "Facebook", spec: "Carousel ads, video ads, feed images" },
  { icon: "🐦", name: "X / Twitter", spec: "Header images, short video clips" },
  { icon: "🛒", name: "Amazon / Shopify", spec: "Product images, lifestyle photos, A+ content" },
  { icon: "📧", name: "Email Marketing", spec: "Header visuals, product GIFs, CTA banners" },
  { icon: "🎙️", name: "Podcast Platforms", spec: "Intro/outro narration, episode trailers" },
  { icon: "📺", name: "Connected TV / OTT", spec: "15s pre-roll video ads, branded content" },
];

const processSteps = [
  {
    title: "Choose your asset type",
    desc: "Pick Voice for narration, Image for visuals, or Video for motion — all inside the same tool. No switching platforms.",
  },
  {
    title: "Write a plain-English prompt",
    desc: "Describe your brand, product, tone, and use case in natural language. Use the built-in prompt templates for instant inspiration.",
  },
  {
    title: "Select AI model & settings",
    desc: "Pick from 7 image models, 6 video models, or 3 voice providers. Set resolution, aspect ratio, language, and quality with one click.",
  },
  {
    title: "Generate in seconds",
    desc: "Hit Generate. Voice is live in ~3 seconds. Images arrive in 10–30s. Videos render in 30–120s. No waitlists, no queues on paid plans.",
  },
  {
    title: "Download & publish",
    desc: "Get your MP3, PNG, or MP4 file instantly. Full commercial rights included — publish directly to any channel, ad platform, or client deliverable.",
  },
];

const tips = [
  {
    title: "Lead with the emotion, not the product",
    body: "Instead of 'product image for skincare brand', write 'a woman with radiant skin in golden morning light, editorial Vogue style, warm and aspirational'. Emotion-driven prompts consistently outperform feature-led ones.",
  },
  {
    title: "Specify the platform in your prompt",
    body: "Add '9:16 vertical for Instagram Reels' or '16:9 YouTube thumbnail with bold text space on left' to your image prompt. Platform context steers the AI toward compositions that actually work in-feed.",
  },
  {
    title: "Use voiceover speed strategically",
    body: "0.9x speed feels more authoritative and trustworthy — great for finance or healthcare ads. 1.1–1.25x creates energy and urgency — ideal for limited-time offers and retail campaigns.",
  },
  {
    title: "Describe motion for video prompts",
    body: "Static descriptions produce slow videos. Write 'slow zoom in', 'tracking shot', 'floating particles', or 'camera pulls back to reveal' to give the AI a specific motion brief, not just a scene description.",
  },
  {
    title: "Reference a visual style, not a brand",
    body: "Instead of naming a competitor, describe the aesthetic: 'shot in the style of a luxury automobile commercial — dark studio, single spotlight, wet surface reflection, cinematic'. Style references are more reliable than brand references.",
  },
  {
    title: "Chain your assets across modes",
    body: "Generate a product image first, then click 'Make Video from this Image' to animate it with Kling or Veo. Then use the same product description to generate a matching voiceover. Three assets, one workflow.",
  },
];

const compareRows = [
  { feature: "Voiceover generation", traditional: "VO artist + studio ($200–$2,000/spot)", scenith: "~3 sec · from 1 credit" },
  { feature: "Product photography", traditional: "Photoshoot + editing ($500–$5,000/day)", scenith: "10–30 sec · from 10 credits" },
  { feature: "Social video ad", traditional: "Video production ($2,000–$20,000+)", scenith: "30–120 sec · from 46 credits" },
  { feature: "Multilingual adaptation", traditional: "Re-book VO talent per language", scenith: "Instant — 20+ languages" },
  { feature: "Creative iterations", traditional: "Days per round of revisions", scenith: "Seconds per variant" },
  { feature: "Turnaround time", traditional: "Days to weeks", scenith: "Under 2 minutes end-to-end" },
  { feature: "Commercial rights", traditional: "Complex licensing per asset", scenith: "Full commercial rights included" },
];

const faqs = [
  {
    q: "What exactly is an AI marketing asset generator and how is it different from other AI tools?",
    a: "An AI marketing asset generator is a purpose-built platform that creates the three core content types used across every marketing channel — voice, image, and video — from a single interface. Unlike general-purpose AI tools that do one thing well, Scenith integrates voice synthesis (Google, OpenAI, Azure), image generation (7 models including GPT Image 1 and Imagen 4), and video generation (6 models including Kling 2.6 Pro and Veo 3.1) under a single login, credit balance, and workflow. The practical difference: instead of paying for three separate subscriptions and managing three separate logins, you generate a voiceover, animate it with a product image, and export all three assets in under five minutes — with no additional software.",
  },
  {
    q: "Is the content generated commercially usable without restrictions?",
    a: "Yes. All content generated on Scenith carries full commercial rights. There are no watermarks on paid plans, no attribution requirements, and no platform-specific licensing restrictions. You can use AI-generated voiceovers in broadcast ads, AI images in paid social campaigns, and AI videos in client deliverables without any additional licensing fees. This applies to images generated by all 7 models — including GPT Image 1 (OpenAI), Imagen 4 (Google), and FLUX 1.1 Pro.",
  },
  {
    q: "How many marketing asset variants can I generate per month?",
    a: "Free users receive 50 credits on signup. A standard voiceover costs 0–30 credits depending on length, an image costs 10–47 credits depending on model and quality, and a 5-second video costs 46–186 credits depending on model. Paid plans start at $9/month (Creator Lite, 300 credits) and scale up to 1,200+ credits per month on higher plans. Enterprise and agency plans with custom credit pools are available on request.",
  },
  {
    q: "Can I generate marketing assets in multiple languages?",
    a: "Yes. The voice generation module supports 20+ languages including English (US, UK, Australian, Indian), Spanish (Latin America + Spain), French, German, Portuguese (Brazil), Hindi, Mandarin, Arabic, Japanese, Korean, Italian, Dutch, Polish, Russian, Turkish, Vietnamese, and more. Select your language in the voice filter panel before generating. Image and video prompts are language-agnostic — you can write your prompt in any language.",
  },
  {
    q: "What is image-to-video and how does it work for marketing?",
    a: "Image-to-video lets you upload a still image (a product photo, AI-generated visual, or brand asset) and animate it into a video clip using AI. This is especially powerful for e-commerce: take your existing product photography and turn it into a 5–10 second cinematic clip for Instagram Reels or TikTok. Models like Kling 2.6 Pro and Veo 3.1 handle motion synthesis with remarkable detail. On Scenith, you can also animate any image you've generated in the Image tab directly by clicking 'Make Video from this Image' — no re-uploading required.",
  },
  {
    q: "How does the quality of AI-generated marketing assets compare to traditionally produced content?",
    a: "For most digital marketing use cases — social media, digital ads, email, YouTube — AI-generated assets are production-ready and indistinguishable from traditionally produced content when prompts are well-crafted. Models like GPT Image 1 Medium (premium quality) and Grok Aurora produce 2K photorealistic images. Veo 3.1 generates broadcast-quality video at 1080p. The gap between AI and traditional production has closed dramatically in 2025–2026. AI remains a complement rather than replacement for high-budget cinematic shoots, but for performance marketing and digital-first campaigns, the quality is more than sufficient.",
  },
  {
    q: "Can multiple team members use the same account?",
    a: "Currently, Scenith accounts are individual. Agency and team plans with shared credit pools and multi-seat access are on the roadmap. For now, agencies commonly create a dedicated account per client or use a shared team account. Contact Scenith support if you need a custom arrangement for larger teams.",
  },
  {
    q: "Does Grok Imagine really generate AI audio in videos?",
    a: "Yes — Grok Imagine (by xAI) is unique among the video models on Scenith in that it generates native AI-synthesized audio alongside the video. This means your 5–10 second video clip arrives with a matching AI-generated soundscape, music, or ambient audio. For other video models, audio generation can be toggled on separately (where supported by the model) at an additional credit cost.",
  },
];

// ─── Page Component ───────────────────────────────────────────────────────────

export default function AIMarketingAssetGeneratorPage() {
  const CTA_URL =
    "https://scenith.in/create-ai-content?utm_source=tools&utm_medium=landing&utm_campaign=marketing-asset-generator&utm_content=cta";

  return (
    <>
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="amag-page">
        {/* ── Top Nav ── */}
        <nav className="amag-nav">
          <a href="https://scenith.in" className="amag-nav-logo">
            SCENE<span>I</span>TH
          </a>
          <a href={CTA_URL} className="amag-nav-cta">
            Generate Free →
          </a>
        </nav>

        {/* ══════════════════════════════════════════════════════════════
            HERO
        ══════════════════════════════════════════════════════════════ */}
        <section className="amag-hero">
          <div className="amag-container">
            <div className="amag-eyebrow">
              <span className="amag-eyebrow-dot" />
              AI Marketing Asset Generator · 2026
            </div>

            <h1 className="amag-h1">
              Your Entire Marketing
              <br />
              <em>Asset Stack. Automated.</em>
            </h1>

            <p className="amag-hero-sub">
              One text prompt. Three asset types. Zero production overhead.
              Generate campaign-ready voiceovers, product images, and social
              videos — in the time it takes to write a brief.
            </p>

            <div className="amag-mega-cta-wrap">
              <div className="amag-mega-cta-glow" />
              <a href={CTA_URL} className="amag-mega-cta">
                🚀 Start Generating Free
                <span className="amag-mega-cta-arrow">→</span>
              </a>
            </div>

            <div className="amag-hero-trust">
              <span className="amag-trust-pill">
                <strong>50</strong> free credits on signup
              </span>
              <span className="amag-trust-pill">
                No credit card required
              </span>
              <span className="amag-trust-pill">
                <strong>Full</strong> commercial rights
              </span>
              <span className="amag-trust-pill">
                <strong>7</strong> image models · <strong>6</strong> video models
              </span>
            </div>
          </div>
        </section>

        {/* ── Ticker ── */}
        <div className="amag-ticker-wrap">
          <div className="amag-ticker-track">
            {[
              "Ad Voiceovers", "Product Photography", "Social Reels",
              "Branded Videos", "Podcast Narration", "Email Headers",
              "YouTube Thumbnails", "TikTok Clips", "Campaign Banners",
              "Explainer Audio", "Promo Videos", "Landing Page Images",
              "Ad Voiceovers", "Product Photography", "Social Reels",
              "Branded Videos", "Podcast Narration", "Email Headers",
              "YouTube Thumbnails", "TikTok Clips", "Campaign Banners",
              "Explainer Audio", "Promo Videos", "Landing Page Images",
            ].map((item, i) => (
              <span key={i} className="amag-ticker-item">
                {item}
                <span className="amag-ticker-sep">✦</span>
              </span>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════
            STAT BAR
        ══════════════════════════════════════════════════════════════ */}
        <div className="amag-container">
          <div className="amag-stat-bar">
            <div className="amag-stat">
              <div className="amag-stat-num">7</div>
              <div className="amag-stat-label">AI Image Models</div>
            </div>
            <div className="amag-stat">
              <div className="amag-stat-num">6</div>
              <div className="amag-stat-label">AI Video Models</div>
            </div>
            <div className="amag-stat">
              <div className="amag-stat-num">40+</div>
              <div className="amag-stat-label">AI Voices</div>
            </div>
            <div className="amag-stat">
              <div className="amag-stat-num">20+</div>
              <div className="amag-stat-label">Languages</div>
            </div>
            <div className="amag-stat">
              <div className="amag-stat-num">&lt;3s</div>
              <div className="amag-stat-label">Voice Turnaround</div>
            </div>
            <div className="amag-stat">
              <div className="amag-stat-num">$0</div>
              <div className="amag-stat-label">To Start</div>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════
            WHAT YOU CAN GENERATE
        ══════════════════════════════════════════════════════════════ */}
        <section className="amag-section">
          <div className="amag-container">
            <div className="amag-section-eyebrow">Asset Types</div>
            <h2 className="amag-h2">
              Every Marketing Asset You Need,{" "}
              <span className="amag-volt">Generated by AI</span>
            </h2>
            <p className="amag-section-lead">
              The days of briefing a designer, waiting for a VO artist, and
              paying a video production house for a 15-second social clip are
              over. Scenith covers the full stack of digital marketing content
              — from a single platform, with a single credit balance.
            </p>

            <div className="amag-asset-grid">
              {assetTypes.map((asset) => (
                <div
                  key={asset.title}
                  className="amag-asset-card"
                  data-accent={asset.accent}
                >
                  <span className="amag-asset-icon">{asset.icon}</span>
                  <h3>{asset.title}</h3>
                  <p>{asset.desc}</p>
                  <span className="amag-asset-tag">{asset.tag}</span>
                </div>
              ))}
            </div>

            <div className="amag-inline-cta">
              <div className="amag-inline-cta-text">
                Ready to generate your first marketing asset?
                <span>
                  50 free credits included — no card, no commitment. Voice,
                  image, and video all available immediately on signup.
                </span>
              </div>
              <a href={CTA_URL} className="amag-cta-btn">
                Generate Free →
              </a>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            HOW IT WORKS
        ══════════════════════════════════════════════════════════════ */}
        <section className="amag-section" style={{ paddingTop: 0 }}>
          <div className="amag-container">
            <div className="amag-section-eyebrow">Workflow</div>
            <h2 className="amag-h2">
              From Brief to Published Asset{" "}
              <span className="amag-signal">in Under 5 Minutes</span>
            </h2>
            <p className="amag-section-lead">
              No learning curve. No Figma. No Adobe Suite. No video editing
              software. The entire workflow from concept to download lives on a
              single page.
            </p>
            <div className="amag-steps">
              {processSteps.map((step) => (
                <div key={step.title} className="amag-step">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            DEEP DIVE: VOICE
        ══════════════════════════════════════════════════════════════ */}
        <section className="amag-deep-section">
          <div className="amag-container">
            <div className="amag-deep-inner">
              <div>
                <span className="amag-deep-tag volt-tag">AI Voice for Marketing</span>
                <h2 className="amag-deep-h">
                  Stop Paying for Voiceover Talent.
                  <br />
                  Start Generating.
                </h2>
                <p className="amag-deep-body">
                  A professional VO artist for a 60-second ad spot costs
                  $200–$500 at minimum. Add studio time, revisions, and
                  language localisation and you're looking at $2,000–$5,000 for
                  a single campaign. Scenith's AI voice generation delivers the
                  same output — same warmth, same authority, same range — in 3
                  seconds, for a fraction of a credit.
                </p>
                <p className="amag-deep-body">
                  Choose from 40+ natural-sounding voices across Google, OpenAI,
                  and Azure Neural TTS providers. Filter by language, gender, and
                  voice style (conversational, news anchor, storyteller, warm).
                  Preview before you generate. Download as MP3 instantly.
                </p>
                <ul className="amag-deep-list">
                  <li>
                    40+ premium voices — including ultra-realistic Azure Neural
                    and OpenAI TTS voices
                  </li>
                  <li>
                    20+ languages: EN (4 accent variants), ES, FR, DE, HI, PT,
                    ZH, AR, JA, KO + more
                  </li>
                  <li>
                    Speed control from 0.5x to 4.0x — adapt to any ad format or
                    platform
                  </li>
                  <li>
                    Perfect for: YouTube pre-roll, radio ads, product demos,
                    e-learning narration, IVR, podcasts
                  </li>
                  <li>Instant MP3 download with full commercial licence</li>
                </ul>
                <a href={CTA_URL} className="amag-cta-btn">
                  Generate Voiceover Free →
                </a>
              </div>
              <div className="amag-deep-visual">
                <div className="amag-mockup-label">Sample: 30s Ad Voiceover</div>
                <div className="amag-mockup-asset">
                  <strong>Script Input</strong>
                  "Introducing Solaris — the skincare line that works while
                  you sleep. Clinically proven. Dermatologist backed. Your skin
                  will thank you in the morning."
                </div>
                <div className="amag-mockup-asset">
                  <strong>Voice Selected</strong>
                  Ava (Azure Neural · English US · Female · Warm)
                </div>
                <div className="amag-mockup-asset">
                  <strong>Settings</strong>
                  Speed 0.9x · Standard quality · MP3 output
                </div>
                <div className="amag-mockup-badge">⚡ Generated in 2.8s</div>
                <div className="amag-mockup-asset" style={{ fontSize: 12, fontStyle: 'italic' }}>
                  → Ready to drop into Adobe Premiere, CapCut, DaVinci Resolve,
                  or any ad platform upload flow. No editing required.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            DEEP DIVE: IMAGE
        ══════════════════════════════════════════════════════════════ */}
        <section className="amag-deep-section">
          <div className="amag-container">
            <div className="amag-deep-inner">
              <div className="amag-deep-visual" style={{ order: 0 }}>
                <div className="amag-mockup-label">Sample: Product Hero Shot</div>
                <div className="amag-mockup-asset">
                  <strong>Prompt</strong>
                  "Premium glass serum bottle on a white marble surface with
                  soft golden backlight, a single gardenia petal resting beside
                  it, shallow depth of field, editorial beauty photography style,
                  ultra-detailed 4K"
                </div>
                <div className="amag-mockup-asset">
                  <strong>Model</strong>
                  GPT Image 1 Medium · Premium quality · Square (1:1)
                </div>
                <div className="amag-mockup-badge">⚡ Ready in 18s</div>
                <div className="amag-mockup-asset" style={{ fontSize: 12 }}>
                  <strong>Output</strong>
                  2048×2048 PNG · Full commercial rights · No watermark
                </div>
                <div className="amag-mockup-asset" style={{ fontSize: 12, fontStyle: 'italic' }}>
                  → Use directly in Shopify, Amazon A+ Content, Google Shopping
                  ads, Meta carousels, or email campaigns.
                </div>
              </div>
              <div>
                <span className="amag-deep-tag electric-tag">AI Images for Marketing</span>
                <h2 className="amag-deep-h">
                  Replace Your Product Shoot.
                  <br />
                  Not Your Standards.
                </h2>
                <p className="amag-deep-body">
                  The average product photography day costs $1,500–$5,000 —
                  before retouching. For DTC brands running 20+ SKUs across
                  seasonal campaigns, that's a budget line that bleeds. Scenith's
                  AI image generation produces commercial-grade product visuals,
                  lifestyle scenes, and brand photography from a text description
                  — for 10–47 credits per image.
                </p>
                <p className="amag-deep-body">
                  With 7 models available — ranging from GPT Image 1 (OpenAI) to
                  Imagen 4 (Google) to Grok Aurora (xAI) — you can match the
                  right aesthetic to every campaign. Photorealistic for fashion,
                  illustrative for SaaS, cinematic for automotive. All output at
                  up to 2K resolution, all PNG, all instantly downloadable.
                </p>
                <ul className="amag-deep-list">
                  <li>
                    7 AI models: GPT Image 1 Mini/Medium, Imagen 4 Fast/Standard,
                    FLUX 1.1 Pro, Stability AI Core, Grok Aurora
                  </li>
                  <li>
                    8 built-in style presets: Realistic, Artistic, Anime, Digital
                    Art, 3D Render, Fantasy, Sci-Fi, Vintage
                  </li>
                  <li>
                    Image-to-image mode: transform reference photos with AI
                    (supported on GPT, Stability, Grok)
                  </li>
                  <li>
                    Multiple aspect ratios: Square (1:1), Portrait (9:16),
                    Landscape (16:9), Standard (4:3)
                  </li>
                  <li>Full generation history — revisit and re-download any past image</li>
                </ul>
                <a href={CTA_URL} className="amag-cta-btn electric">
                  Generate Images Free →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            DEEP DIVE: VIDEO
        ══════════════════════════════════════════════════════════════ */}
        <section className="amag-deep-section">
          <div className="amag-container">
            <div className="amag-deep-inner">
              <div>
                <span className="amag-deep-tag">AI Video for Marketing</span>
                <h2 className="amag-deep-h">
                  Cinematic Video Ads.
                  <br />
                  Without a Production House.
                </h2>
                <p className="amag-deep-body">
                  Social video ad production — even a simple 15-second Reel —
                  costs $2,000–$10,000 when you factor in the shoot, edit, and
                  motion graphics. For performance marketing teams that need
                  10–30 creative variants per campaign, that math doesn't work.
                  AI video generation changes the economics entirely.
                </p>
                <p className="amag-deep-body">
                  Scenith integrates six state-of-the-art video models including
                  Kling 2.6 Pro, Veo 3.1 (Google), Wan 2.5, and Grok Imagine —
                  the only model that generates native AI audio alongside the
                  video. Generate 5 or 10-second clips up to 1080p in 16:9, 9:16,
                  or 1:1. The image-to-video workflow lets you animate any product
                  photo into a campaign-ready clip in under two minutes.
                </p>
                <ul className="amag-deep-list">
                  <li>
                    6 video models: Kling 2.5 Turbo, Kling 2.6 Pro, Veo 3.1
                    Fast, Veo 3.1, Wan 2.5, Grok Imagine
                  </li>
                  <li>
                    Grok Imagine: the only model with native AI-generated audio
                    included in the video output
                  </li>
                  <li>
                    Image-to-video: animate any image (yours or AI-generated)
                    into a cinematic clip
                  </li>
                  <li>
                    Aspect ratios: 16:9 (YouTube, landscape), 9:16 (Reels,
                    TikTok, Stories), 1:1 (feed)
                  </li>
                  <li>
                    Resolutions up to 1080p · 5 or 10 second durations ·
                    MP4 download
                  </li>
                </ul>
                <a href={CTA_URL} className="amag-cta-btn signal">
                  Generate Videos Free →
                </a>
              </div>
              <div className="amag-deep-visual">
                <div className="amag-mockup-label">Sample: 5s Instagram Reel Ad</div>
                <div className="amag-mockup-asset">
                  <strong>Prompt</strong>
                  "Luxury skincare serum bottle slowly rotating on a dark
                  reflective surface, soft golden particle bokeh rising around
                  it, cinematic depth of field, elegant brand reveal"
                </div>
                <div className="amag-mockup-asset">
                  <strong>Model & Settings</strong>
                  Kling 2.6 Pro · 5 seconds · 9:16 · 1080p · Audio enabled
                </div>
                <div className="amag-mockup-badge">⚡ Generated in ~75s</div>
                <div className="amag-mockup-asset" style={{ fontSize: 12 }}>
                  <strong>Output</strong>
                  MP4 · 1080 × 1920 · Full commercial rights · Direct download
                </div>
                <div className="amag-mockup-asset" style={{ fontSize: 12, fontStyle: 'italic' }}>
                  → Upload directly to Instagram Reels, TikTok, YouTube Shorts,
                  Facebook video ads, or Meta Ads Manager.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            PLATFORM COVERAGE
        ══════════════════════════════════════════════════════════════ */}
        <section className="amag-section">
          <div className="amag-container">
            <div className="amag-section-eyebrow">Platform Coverage</div>
            <h2 className="amag-h2">
              Assets That{" "}
              <span className="amag-electric">Fit Every Channel</span>
            </h2>
            <p className="amag-section-lead">
              Every marketing platform has different spec requirements.
              Scenith's aspect ratio, resolution, and format options are
              designed around real publishing workflows — not hypothetical use
              cases.
            </p>
            <div className="amag-platforms-grid">
              {platforms.map((p) => (
                <div key={p.name} className="amag-platform-card">
                  <span className="amag-platform-icon">{p.icon}</span>
                  <div className="amag-platform-info">
                    <strong>{p.name}</strong>
                    <span>{p.spec}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="amag-inline-cta">
              <div className="amag-inline-cta-text">
                All formats, all platforms — one generation tool.
                <span>
                  Select 9:16 for Reels, 16:9 for YouTube, or 1:1 for feed.
                  No re-exporting, no resizing. Right spec, first time.
                </span>
              </div>
              <a href={CTA_URL} className="amag-cta-btn">
                Start Generating →
              </a>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            WHO IT'S FOR
        ══════════════════════════════════════════════════════════════ */}
        <section className="amag-section" style={{ paddingTop: 0 }}>
          <div className="amag-container">
            <div className="amag-section-eyebrow">Use Cases</div>
            <h2 className="amag-h2">
              Built for Marketers,{" "}
              <span className="amag-volt">By People Who Move Fast</span>
            </h2>
            <p className="amag-section-lead">
              Whether you're running paid social for a DTC brand, delivering
              creatives for a 12-market campaign, or just need a product video
              for your Shopify store — the use case is the same: you need
              high-quality assets, now, without a three-week production timeline.
            </p>
            <div className="amag-usecase-grid">
              {useCases.map((uc) => (
                <div key={uc.title} className="amag-usecase-card">
                  <div className="amag-usecase-emoji">{uc.emoji}</div>
                  <h3>{uc.title}</h3>
                  <p>{uc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            COMPARISON
        ══════════════════════════════════════════════════════════════ */}
        <section className="amag-section" style={{ paddingTop: 0 }}>
          <div className="amag-container">
            <div className="amag-section-eyebrow">Cost Comparison</div>
            <h2 className="amag-h2">
              The Real Cost of{" "}
              <span className="amag-signal">Traditional Production</span>
            </h2>
            <p className="amag-section-lead">
              The numbers below are based on average freelance and agency rates
              for digital marketing production in 2026. They don't include
              revision rounds, project management time, or the two weeks you
              wait for a brief to become a deliverable.
            </p>
            <div className="amag-compare-section">
              <div className="amag-compare-header">
                <div>Asset Type</div>
                <div>Traditional Production</div>
                <div>Scenith AI Generator</div>
              </div>
              {compareRows.map((row) => (
                <div key={row.feature} className="amag-compare-row">
                  <div>{row.feature}</div>
                  <div>
                    <span className="amag-cross">✕</span> {row.traditional}
                  </div>
                  <div>
                    <span className="amag-check">✓</span> {row.scenith}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            PROMPT ENGINEERING TIPS
        ══════════════════════════════════════════════════════════════ */}
        <section className="amag-section" style={{ paddingTop: 0 }}>
          <div className="amag-container">
            <div className="amag-section-eyebrow">Prompt Engineering</div>
            <h2 className="amag-h2">
              6 Prompting Techniques That{" "}
              <span className="amag-volt">Produce Better Marketing Assets</span>
            </h2>
            <p className="amag-section-lead">
              The difference between a mediocre AI image and a campaign-ready
              one is almost always the prompt. Here's what experienced marketers
              and performance creative teams have learned about prompting for
              marketing output specifically.
            </p>
            <div className="amag-tips-grid">
              {tips.map((tip) => (
                <div key={tip.title} className="amag-tip-card">
                  <h4>{tip.title}</h4>
                  <p>{tip.body}</p>
                </div>
              ))}
            </div>

            <div className="amag-inline-cta">
              <div className="amag-inline-cta-text">
                Built-in prompt templates to get you started instantly.
                <span>
                  12 voice prompts, 15 image prompts, 13 video prompts —
                  pre-loaded in the tool. Click a chip, customise, generate.
                </span>
              </div>
              <a href={CTA_URL} className="amag-cta-btn electric">
                Explore the Tool →
              </a>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            THE AI MODELS BEHIND IT
        ══════════════════════════════════════════════════════════════ */}
        <section className="amag-section" style={{ paddingTop: 0 }}>
          <div className="amag-container">
            <div className="amag-section-eyebrow">Technology</div>
            <h2 className="amag-h2">
              Powered by the World's{" "}
              <span className="amag-electric">Frontier AI Models</span>
            </h2>
            <p className="amag-section-lead">
              Scenith doesn't build its own AI models — it integrates the
              best ones on the market and gives you a unified interface to
              switch between them. This means you always have access to the
              latest state-of-the-art output, as models improve.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: 16,
                marginBottom: 48,
              }}
            >
              {[
                {
                  category: "🖼️ Image Models",
                  models: [
                    "GPT Image 1 Mini — OpenAI · fast + affordable",
                    "GPT Image 1 Medium — OpenAI · highest photo quality",
                    "Imagen 4 Fast — Google · rapid iteration",
                    "Imagen 4 Standard — Google · full fidelity",
                    "FLUX 1.1 Pro — Black Forest Labs · photorealism",
                    "Stability AI Core — Stability · SDXL artistry",
                    "Grok Aurora — xAI · 2K photorealism",
                  ],
                },
                {
                  category: "🎬 Video Models",
                  models: [
                    "Wan 2.5 — Alibaba · up to 1080p cinematic",
                    "Kling 2.5 Turbo — Kuaishou · fast generation",
                    "Kling 2.6 Pro — Kuaishou · flagship quality",
                    "Veo 3.1 Fast — Google · rapid video synthesis",
                    "Veo 3.1 — Google · highest video quality",
                    "Grok Imagine — xAI · video + native AI audio",
                  ],
                },
                {
                  category: "🎙️ Voice Providers",
                  models: [
                    "Google Cloud TTS — 40+ voices, 20+ languages",
                    "OpenAI TTS — ultra-natural English prosody",
                    "Azure Neural TTS — premium multilingual voices",
                  ],
                },
              ].map((group) => (
                <div
                  key={group.category}
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius-lg)",
                    padding: "24px",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 14,
                      fontWeight: 700,
                      marginBottom: 14,
                      color: "var(--text)",
                    }}
                  >
                    {group.category}
                  </div>
                  <ul
                    style={{
                      listStyle: "none",
                      display: "flex",
                      flexDirection: "column",
                      gap: 7,
                    }}
                  >
                    {group.models.map((m) => (
                      <li
                        key={m}
                        style={{
                          fontSize: 12.5,
                          color: "var(--text-2)",
                          paddingLeft: 14,
                          position: "relative",
                          lineHeight: 1.5,
                        }}
                      >
                        <span
                          style={{
                            position: "absolute",
                            left: 0,
                            color: "var(--volt)",
                            fontSize: 10,
                          }}
                        >
                          ●
                        </span>
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            FAQ
        ══════════════════════════════════════════════════════════════ */}
        <section className="amag-section" style={{ paddingTop: 0 }}>
          <div className="amag-container">
            <div className="amag-section-eyebrow">FAQ</div>
            <h2 className="amag-h2" style={{ marginBottom: 32 }}>
              Frequently Asked Questions
            </h2>
            <div className="amag-faq">
              {faqs.map((faq) => (
                <details key={faq.q}>
                  <summary>{faq.q}</summary>
                  <div>{faq.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            BOTTOM CTA
        ══════════════════════════════════════════════════════════════ */}
        <div className="amag-bottom-cta">
          <div className="amag-bottom-cta-inner">
            <h2 className="amag-bottom-h">
              Your Next Campaign Asset Is{" "}
              <span className="amag-volt">3 Seconds Away.</span>
            </h2>
            <p className="amag-bottom-sub">
              50 free credits. No credit card. No design software. No
              production brief. Just a prompt, a model, and a download button.
              Voice. Image. Video. All in one place.
            </p>
            <div className="amag-cta-group">
              <div style={{ position: "relative", display: "inline-block" }}>
                <div className="amag-mega-cta-glow" />
                <a href={CTA_URL} className="amag-mega-cta">
                  🚀 Start Generating Free
                  <span className="amag-mega-cta-arrow">→</span>
                </a>
              </div>
              <a href="https://scenith.in/pricing" className="amag-secondary-cta">
                See Pricing →
              </a>
            </div>
            <div
              style={{
                marginTop: 28,
                display: "flex",
                justifyContent: "center",
                gap: 20,
                flexWrap: "wrap",
              }}
            >
              {[
                "No card required",
                "50 free credits",
                "Full commercial rights",
                "Cancel anytime",
              ].map((t) => (
                <span
                  key={t}
                  style={{
                    fontSize: 12,
                    color: "var(--text-3)",
                    display: "flex",
                    alignItems: "center",
                    gap: 5,
                  }}
                >
                  <span style={{ color: "var(--volt)" }}>✓</span> {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════
            FOOTER
        ══════════════════════════════════════════════════════════════ */}
        <footer className="amag-footer">
          <a href="https://scenith.in" className="amag-footer-logo">
            SCENE<span>I</span>TH
          </a>
          <div className="amag-footer-links">
            <a href="https://scenith.in/create-ai-content">AI Content Creator</a>
            <a href="https://scenith.in/tools">All Tools</a>
            <a href="https://scenith.in/pricing">Pricing</a>
            <a href="https://scenith.in/blog">Blog</a>
          </div>
          <span className="amag-footer-copy">
            © {new Date().getFullYear()} Scenith · All rights reserved
          </span>
        </footer>
      </div>
    </>
  );
}