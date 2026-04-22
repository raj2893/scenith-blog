import type { Metadata } from "next";
import "./faceless-video.css";

export const metadata: Metadata = {
  title: "Free AI Faceless Video Generator — Create Faceless YouTube & Reels Content (2026)",
  description:
    "Generate faceless YouTube videos, Reels, and TikToks using AI — no camera, no editing skills needed. Powered by Kling 2.6, Veo 3.1, Wan 2.5, and Grok Imagine. Turn text into cinematic video in 60 seconds. Free to start.",
  keywords: [
    "faceless video generator",
    "AI faceless YouTube videos",
    "faceless content creator AI",
    "text to video faceless",
    "AI video generator free",
    "faceless YouTube channel AI",
    "generate faceless videos online",
    "AI faceless Reels generator",
    "no face video maker AI",
    "faceless video maker 2026",
    "AI video creator faceless content",
    "free faceless video AI",
    "faceless video YouTube automation",
    "AI generated faceless videos",
    "make money faceless YouTube AI",
  ],
  alternates: {
    canonical: "https://scenith.in/tools/faceless-content-video-generator",
  },
  openGraph: {
    title: "Free AI Faceless Video Generator — Make Faceless YouTube & Reels Content",
    description:
      "No camera. No face. No editing. Use AI to generate cinematic faceless videos for YouTube, Instagram Reels, and TikTok in under 60 seconds. Powered by the world's best video AI models.",
    url: "https://scenith.in/tools/faceless-content-video-generator",
    siteName: "Scenith",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free AI Faceless Video Generator 2026",
    description:
      "Turn any prompt into a cinematic faceless video for YouTube or Reels. No camera required. Powered by Kling, Veo 3.1 & Wan 2.5.",
  },
};

const STATS = [
  { value: "60s", label: "Average generation time" },
  { value: "6+", label: "AI video models available" },
  { value: "1080p", label: "Max output resolution" },
  { value: "100%", label: "No camera or face needed" },
];

const MODELS = [
  {
    name: "Kling 2.6 Pro",
    badge: "Most Popular",
    badgeColor: "#f59e0b",
    logo: "https://cdn.scenith.in/brand-logos/Kling%20logo.webp",
    desc: "Cinematic realism with fluid motion. Best for YouTube-style documentary and story videos.",
    tags: ["1080p", "10s clips", "Audio support"],
  },
  {
    name: "Veo 3.1",
    badge: "Highest Quality",
    badgeColor: "#10b981",
    logo: "https://cdn.scenith.in/brand-logos/Google%20Logo.webp",
    desc: "Google's flagship. Unmatched detail, physics, and lighting for premium faceless content.",
    tags: ["Ultra HD", "8s clips", "AI Audio"],
  },
  {
    name: "Wan 2.5",
    badge: "Best Value",
    badgeColor: "#6355dc",
    logo: "https://cdn.scenith.in/brand-logos/WanNew%20ai%20logo.png",
    desc: "Fast, affordable, and excellent for high-volume faceless channel content creation.",
    tags: ["480p–1080p", "10s clips", "Budget-friendly"],
  },
  {
    name: "Grok Imagine",
    badge: "Audio Included",
    badgeColor: "#db2777",
    logo: "https://cdn.scenith.in/brand-logos/Grok.png",
    desc: "Only model with built-in AI audio generation. Perfect for ambient + narrated content.",
    tags: ["720p", "10s clips", "🎵 Native audio"],
  },
  {
    name: "Kling 2.5 Turbo",
    badge: "Fast Gen",
    badgeColor: "#0ea5e9",
    logo: "https://cdn.scenith.in/brand-logos/Kling%20logo.webp",
    desc: "Speed-optimised version of Kling. Rapid turnaround for testing and bulk generation.",
    tags: ["1080p", "10s clips", "Rapid output"],
  },
  {
    name: "Veo 3.1 Fast",
    badge: "Speed + Quality",
    badgeColor: "#8b5cf6",
    logo: "https://cdn.scenith.in/brand-logos/Google%20Logo.webp",
    desc: "Google's faster variant — still exceptional quality but at half the credit cost.",
    tags: ["HD", "8s clips", "AI Audio"],
  },
];

const NICHES = [
  {
    icon: "🌍",
    title: "Documentary & History",
    desc: "Generate sweeping cinematic b-roll and epic landscape footage to accompany narration on world events, historical moments, and science documentaries.",
    examples: ["Ancient Rome collapse", "Deep sea exploration", "Space mission footage"],
  },
  {
    icon: "💰",
    title: "Finance & Investing",
    desc: "Create professional faceless finance content — stock market analysis, crypto explainers, and passive income breakdowns — without ever showing your face.",
    examples: ["S&P 500 explainer b-roll", "Crypto market visuals", "Wealth mindset videos"],
  },
  {
    icon: "🧠",
    title: "Self-Improvement & Motivation",
    desc: "Pair powerful AI-generated visuals — mountain climbers, sunrises, flowing water — with motivational scripts for YouTube Shorts and Reels.",
    examples: ["Morning routine montage", "Discipline mindset clips", "Goal visualization"],
  },
  {
    icon: "🌿",
    title: "Nature & Travel",
    desc: "Generate breathtaking AI landscapes, wildlife footage, and travel b-roll for travel vlogs, ASMR, and ambient channel content.",
    examples: ["Northern lights timelapse", "Amazon rainforest drone", "Ocean bioluminescence"],
  },
  {
    icon: "🤖",
    title: "Tech & AI News",
    desc: "Create futuristic visuals for AI, robotics, and tech news channels — circuits, data streams, robot labs — all generated from a text prompt.",
    examples: ["Neural network visualization", "Robot factory footage", "Futuristic city UI"],
  },
  {
    icon: "👻",
    title: "Mystery & Horror",
    desc: "Atmospheric faceless content for scary story channels, paranormal explainers, and true crime visuals — generated in seconds.",
    examples: ["Abandoned hospital", "Dark forest at night", "Eerie storm sequences"],
  },
  {
    icon: "🍽️",
    title: "Food & Cooking",
    desc: "Generate gorgeous food b-roll — sizzling pans, slow-motion pours, knife cuts — for recipe channels without setting up a kitchen shoot.",
    examples: ["Pasta boiling close-up", "Cocktail pour slow-mo", "Bread baking timelapse"],
  },
  {
    icon: "🎮",
    title: "Gaming & Entertainment",
    desc: "Create cinematic game-trailer style videos for gaming channels, reviews, and entertainment commentary without gameplay capture.",
    examples: ["Fantasy battle scene", "Cyberpunk city fly-through", "Epic boss fight visual"],
  },
];

const WORKFLOW_STEPS = [
  {
    num: "01",
    icon: "✍️",
    title: "Write Your Prompt",
    desc: "Describe your video scene in plain English. The more specific — lighting, mood, camera movement, subject — the better the AI output. Use our pre-built prompt templates to get started instantly.",
  },
  {
    num: "02",
    icon: "🤖",
    title: "Pick Your AI Model",
    desc: "Choose from 6 state-of-the-art video models: Kling 2.6 Pro for cinematic quality, Veo 3.1 for Google-grade realism, Wan 2.5 for high-volume bulk content, or Grok Imagine for built-in AI audio.",
  },
  {
    num: "03",
    icon: "⚙️",
    title: "Set Duration & Format",
    desc: "Select 5s or 10s clips. Choose 16:9 for YouTube, 9:16 for Reels & TikTok, or 1:1 for square posts. Optionally enable AI-generated audio and set resolution up to 1080p.",
  },
  {
    num: "04",
    icon: "⬇️",
    title: "Download & Publish",
    desc: "Your MP4 is ready in 30–120 seconds. Download directly, add your voiceover or subtitles, and post to YouTube, Instagram, TikTok — no watermarks, full commercial rights.",
  },
];

const MONETISATION_TIPS = [
  {
    icon: "🎬",
    title: "YouTube AdSense (Faceless Channel)",
    body: "The most popular faceless content strategy in 2026. Generate 3–5 cinematic AI videos per week, pair with AI voiceovers, and build a monetized channel without ever appearing on camera. Many creators hit 1,000 subscribers in under 90 days using this exact workflow.",
  },
  {
    icon: "📱",
    title: "Instagram Reels & TikTok Creator Fund",
    body: "Short-form AI video is exploding. Generate 9:16 aspect ratio clips, add captions using Scenith's subtitle tool, and post daily. The algorithm rewards consistency — AI generation makes consistency effortless.",
  },
  {
    icon: "🛍️",
    title: "Client Freelance Work",
    body: "Brands pay $50–$500 per AI video for product showcases, social ads, and website background loops. With 6 AI models at your disposal, you can deliver variety and quality at scale — making freelance AI video creation a legitimate high-income skill in 2026.",
  },
  {
    icon: "📦",
    title: "Sell AI Video Packs on Marketplaces",
    body: "Package thematic AI video collections — \"10 Nature B-roll Clips\" or \"20 Cinematic City Loops\" — and sell on Etsy, Creative Market, or Gumroad. One generation session can produce an entire sellable pack.",
  },
  {
    icon: "📧",
    title: "Email & Landing Page Loops",
    body: "SaaS founders and marketers pay well for ambient video backgrounds for websites and email headers. A 5–10 second looping AI video with the right aesthetic can dramatically increase conversion rates.",
  },
  {
    icon: "📚",
    title: "Course & E-Learning Content",
    body: "Add professional-grade b-roll to courses on Udemy, Teachable, or Kajabi without a film crew. AI-generated footage for explainer sections makes your courses look $50K-production-quality at near-zero cost.",
  },
];

const PROMPT_EXAMPLES = [
  {
    category: "Documentary",
    icon: "🌍",
    prompt: "Aerial cinematic drone over ancient Roman ruins at golden hour, slow movement revealing massive stone amphitheater, dramatic crepuscular rays, 4K documentary style",
  },
  {
    category: "Finance",
    icon: "📈",
    prompt: "Abstract visualization of global financial networks, glowing data streams connecting city skylines, dark background, futuristic banking aesthetic, slow camera push forward",
  },
  {
    category: "Motivation",
    icon: "💪",
    prompt: "Lone mountaineer silhouette reaching the peak of a snow-covered mountain at sunrise, dramatic clouds below, epic orchestral cinematic composition, slow motion",
  },
  {
    category: "Nature",
    icon: "🌊",
    prompt: "Bioluminescent ocean waves crashing on a dark beach at night, each wave illuminating in electric blue, stars reflected on wet sand, slow cinematic wide angle",
  },
  {
    category: "Tech/AI",
    icon: "🤖",
    prompt: "Hyper-detailed visualization of a neural network firing — nodes lighting up in cascading electric pulses, deep blue and purple, macro lens, data center aesthetic",
  },
  {
    category: "Mystery",
    icon: "🌲",
    prompt: "Dense fog rolling through an ancient dark forest at night, a single lantern flickering between massive old-growth trees, cinematic atmospheric horror, slow creep",
  },
];

const FAQS = [
  {
    q: "What is a faceless AI video generator?",
    a: "A faceless AI video generator is a tool that creates video content entirely from text prompts — no camera, no actor, no face required. You describe a scene, choose an AI model, and the system generates a photorealistic or cinematic video clip. This is the technology powering thousands of faceless YouTube channels, Reels creators, and content agencies in 2026.",
  },
  {
    q: "Can I use AI faceless videos to make money on YouTube?",
    a: "Yes — and many creators are already doing it at scale. YouTube's Partner Program accepts AI-generated content as long as it meets their policies. The key is original scripting + AI visuals + AI voiceover. Channels in niches like finance, motivation, mystery, and documentary have hit monetisation using 100% AI-generated faceless workflows. Scenith provides all three components: video, image, and voice generation.",
  },
  {
    q: "Will YouTube detect or penalise AI-generated faceless content?",
    a: "YouTube does not ban AI-generated content outright. Their policy requires disclosure for 'realistic' AI content in certain categories (news, elections, etc.) via a label in YouTube Studio — a 5-second action. For entertainment, cinematic, and informational niches, AI-generated video is fully accepted. Thousands of monetized faceless AI channels operate today with no issues.",
  },
  {
    q: "What is the best AI model for faceless YouTube videos?",
    a: "It depends on your niche and budget. For cinematic documentary-style content, Kling 2.6 Pro produces the most film-like results. For nature and ambient videos, Veo 3.1 (Google) is unmatched in realism. For high-volume daily posting on a budget, Wan 2.5 gives the best credit efficiency. For channels that need sound — ASMR, ambient, or cinematic — Grok Imagine includes built-in AI audio generation.",
  },
  {
    q: "Do I need video editing software to use AI-generated clips?",
    a: "No. Many faceless channel creators simply pair AI video clips with an AI voiceover (also available on Scenith), add subtitles using a subtitle tool, and upload directly. For slightly more polished output, free tools like CapCut or DaVinci Resolve can combine clips and add music — but neither is required for basic Reels and Shorts workflows.",
  },
  {
    q: "How long does it take to generate a faceless video?",
    a: "Generation time depends on the model: Wan 2.5 and Kling 2.5 Turbo typically complete in 30–60 seconds. Kling 2.6 Pro and Veo 3.1 Fast take 45–90 seconds. Veo 3.1 (full quality) can take 90–120 seconds. All generation runs in the background — you can stay on the page or navigate away and return.",
  },
  {
    q: "What aspect ratios are supported for faceless video content?",
    a: "16:9 (YouTube landscape), 9:16 (Reels, TikTok, YouTube Shorts), and 1:1 (Instagram square posts) are all supported. You can switch aspect ratio with one click before generating — no re-uploading or reformatting needed.",
  },
  {
    q: "Can I generate image-to-video (animate a still image) for faceless content?",
    a: "Yes. Scenith supports image-to-video: upload any image — AI-generated or your own — and animate it into a 5 or 10 second cinematic clip. This is especially powerful for thumbnail-to-video consistency: generate your image, animate it as a looping intro, and use the same visual in your thumbnail.",
  },
  {
    q: "Are the generated videos royalty-free and commercially usable?",
    a: "All content generated on Scenith comes with full commercial rights. No attribution required, no royalty payments, no licensing fees. You own what you generate and can use it in monetized YouTube channels, client deliverables, paid ads, and products.",
  },
  {
    q: "How is Scenith different from RunwayML, Kling AI, or Sora?",
    a: "Scenith is a multi-modal platform: voice + image + video in one place with a single credit balance. Rather than paying separate subscriptions for Runway ($15/mo), ElevenLabs ($5+/mo), and Midjourney ($10/mo), Scenith bundles everything from $9/month. You also get direct access to the same underlying models (Kling, Veo, Wan) without going through individual provider interfaces.",
  },
  {
    q: "Is there a free plan for AI faceless video generation?",
    a: "Signup gives you 50 free credits. Video generation costs 46–186 credits per clip depending on model and duration, so the free plan gives you 1–2 sample videos to test output quality. Paid plans start at $1 (Spark) and $9/month (Creator Lite — 300 credits), giving you enough credits for 5–10 faceless videos per month plus image and voice generation.",
  },
  {
    q: "Can I generate 10-second clips for YouTube with AI?",
    a: "Yes. All video models on Scenith support both 5-second and 10-second clips (Veo models support 4s and 8s). For YouTube content, 10-second AI clips are ideal — they give you more story room per clip and you can concatenate 5–8 of them for a full 60–90 second video segment.",
  },
];

const SCHEMA_JSON = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://scenith.in/tools/faceless-content-video-generator",
      url: "https://scenith.in/tools/faceless-content-video-generator",
      name: "Free AI Faceless Video Generator — Faceless YouTube & Reels Content 2026",
      description:
        "Generate cinematic faceless videos for YouTube, Reels and TikTok using AI. No camera needed. Powered by Kling 2.6, Veo 3.1, Wan 2.5 and Grok Imagine.",
      inLanguage: "en-US",
      isPartOf: { "@id": "https://scenith.in" },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://scenith.in",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Tools",
            item: "https://scenith.in/tools",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Faceless Video Generator",
            item: "https://scenith.in/tools/faceless-content-video-generator",
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.a,
        },
      })),
    },
    {
      "@type": "SoftwareApplication",
      name: "Scenith AI Faceless Video Generator",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "50 free credits on signup. Paid plans from $1.",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "1240",
      },
    },
  ],
};

export default function FacelessVideoGeneratorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_JSON) }}
      />

      <div className="fvg-page">
        {/* ── Breadcrumb ── */}
        <nav className="fvg-breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span aria-hidden="true">›</span>
          <a href="/tools">Tools</a>
          <span aria-hidden="true">›</span>
          <span aria-current="page">Faceless Video Generator</span>
        </nav>

        {/* ══════════════════ HERO ══════════════════ */}
        <section className="fvg-hero">
          <div className="fvg-hero-noise" aria-hidden="true" />
          <div className="fvg-hero-glow fvg-hero-glow--a" aria-hidden="true" />
          <div className="fvg-hero-glow fvg-hero-glow--b" aria-hidden="true" />

          <div className="fvg-hero-inner">
            <div className="fvg-hero-badge">
              <span className="fvg-badge-dot" />
              <span>6 AI Models · 2026 Edition · Free to Start</span>
            </div>

            <h1 className="fvg-hero-title">
              <span className="fvg-title-line fvg-title-line--1">AI Faceless</span>
              <span className="fvg-title-line fvg-title-line--2">Video Generator</span>
            </h1>

            <p className="fvg-hero-sub">
              Create cinematic faceless YouTube videos, Instagram Reels, and TikTok clips
              from a text prompt — no camera, no face, no editing software required.
              Powered by Kling 2.6, Veo 3.1, Wan 2.5, and Grok Imagine.
            </p>

            {/* ── MAIN CTA ── */}
            <div className="fvg-cta-group">
              <a
                href="https://scenith.in/create-ai-content?tab=video&utm_source=faceless_video_tool&utm_medium=tool_page&utm_campaign=faceless_content_2026"
                className="fvg-cta-primary"
                rel="noopener"
              >
                <span className="fvg-cta-icon">🎬</span>
                <span className="fvg-cta-text">
                  <strong>Generate Faceless Video Free</strong>
                  <small>No card required · 50 free credits on signup</small>
                </span>
                <span className="fvg-cta-arrow">→</span>
              </a>
              <a
                href="https://scenith.in/pricing"
                className="fvg-cta-secondary"
              >
                View Pricing
              </a>
            </div>

            {/* Stats */}
            <div className="fvg-stats-row">
              {STATS.map((s) => (
                <div key={s.label} className="fvg-stat">
                  <span className="fvg-stat-value">{s.value}</span>
                  <span className="fvg-stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════ WHAT IS FACELESS ══════════════════ */}
        <section className="fvg-section fvg-section--alt">
          <div className="fvg-container">
            <div className="fvg-section-label">What Is This?</div>
            <h2 className="fvg-section-title">
              The Complete 2026 Guide to Faceless AI Video Content
            </h2>
            <div className="fvg-prose">
              <p>
                Faceless content is the fastest-growing category of digital media in 2026.
                Channels that never show a human face — built entirely on AI-generated video,
                AI voiceovers, and automated scripts — are generating millions of views and
                tens of thousands of dollars per month on YouTube, Instagram Reels, and TikTok.
              </p>
              <p>
                The bottleneck used to be <em>video production</em>. Stock footage is generic,
                expensive, and over-licensed. Hiring videographers is cost-prohibitive for solo
                creators. Filming yourself removes the anonymity that makes faceless channels attractive.
              </p>
              <p>
                AI video generation solves all three problems simultaneously. With models like
                Kling 2.6 Pro and Veo 3.1, you can generate <strong>cinematic, original, photorealistic
                footage from a single text prompt</strong> — footage that looks like it was captured
                by a professional film crew, in locations you've never visited, of events that never
                happened. And you can do it in under 60 seconds, at a cost measured in cents.
              </p>
              <p>
                Scenith's AI Faceless Video Generator brings 6 of the world's best video AI models
                together in one tool, paired with voice generation and image creation, so you can
                run an entire faceless content operation from a single dashboard — without managing
                multiple subscriptions, APIs, or creative tools.
              </p>
            </div>
          </div>
        </section>

        {/* ══════════════════ AI MODELS ══════════════════ */}
        <section className="fvg-section">
          <div className="fvg-container">
            <div className="fvg-section-label">Powered By</div>
            <h2 className="fvg-section-title">
              6 World-Class AI Video Models, One Platform
            </h2>
            <p className="fvg-section-sub">
              Each model has different strengths. Choose the right one for your niche, budget,
              and quality requirements — or test all six on the same prompt to see which fits best.
            </p>
            <div className="fvg-models-grid">
              {MODELS.map((m) => (
                <div key={m.name} className="fvg-model-card">
                  <div className="fvg-model-card-head">
                    <img src={m.logo} alt={`${m.name} logo`} className="fvg-model-logo" />
                    <div>
                      <div className="fvg-model-name">{m.name}</div>
                      <span
                        className="fvg-model-badge"
                        style={{ background: m.badgeColor + "20", color: m.badgeColor, borderColor: m.badgeColor + "40" }}
                      >
                        {m.badge}
                      </span>
                    </div>
                  </div>
                  <p className="fvg-model-desc">{m.desc}</p>
                  <div className="fvg-model-tags">
                    {m.tags.map((t) => (
                      <span key={t} className="fvg-model-tag">{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="fvg-cta-inline">
              <a
                href="https://scenith.in/create-ai-content?tab=video&utm_source=faceless_video_tool&utm_medium=models_section&utm_campaign=faceless_content_2026"
                className="fvg-cta-primary fvg-cta-primary--sm"
              >
                🎬 Try All Models Free →
              </a>
            </div>
          </div>
        </section>

        {/* ══════════════════ HOW IT WORKS ══════════════════ */}
        <section className="fvg-section fvg-section--alt">
          <div className="fvg-container">
            <div className="fvg-section-label">How It Works</div>
            <h2 className="fvg-section-title">
              From Text Prompt to Published Video in 4 Steps
            </h2>
            <div className="fvg-steps">
              {WORKFLOW_STEPS.map((step, i) => (
                <div key={step.num} className="fvg-step">
                  <div className="fvg-step-num">{step.num}</div>
                  <div className="fvg-step-body">
                    <div className="fvg-step-icon">{step.icon}</div>
                    <h3 className="fvg-step-title">{step.title}</h3>
                    <p className="fvg-step-desc">{step.desc}</p>
                  </div>
                  {i < WORKFLOW_STEPS.length - 1 && (
                    <div className="fvg-step-connector" aria-hidden="true" />
                  )}
                </div>
              ))}
            </div>
            <div className="fvg-cta-inline">
              <a
                href="https://scenith.in/create-ai-content?tab=video&utm_source=faceless_video_tool&utm_medium=howto_section&utm_campaign=faceless_content_2026"
                className="fvg-cta-primary fvg-cta-primary--sm"
              >
                🚀 Start Generating Now — It's Free →
              </a>
            </div>
          </div>
        </section>

        {/* ══════════════════ PROMPT EXAMPLES ══════════════════ */}
        <section className="fvg-section">
          <div className="fvg-container">
            <div className="fvg-section-label">Prompt Inspiration</div>
            <h2 className="fvg-section-title">
              6 High-Performing Faceless Video Prompt Examples
            </h2>
            <p className="fvg-section-sub">
              Copy any of these prompts directly into the generator. Each is optimised for cinematic AI video output and
              maps to a high-traffic YouTube niche in 2026.
            </p>
            <div className="fvg-prompts-grid">
              {PROMPT_EXAMPLES.map((p) => (
                <div key={p.category} className="fvg-prompt-card">
                  <div className="fvg-prompt-head">
                    <span className="fvg-prompt-icon">{p.icon}</span>
                    <span className="fvg-prompt-category">{p.category}</span>
                  </div>
                  <blockquote className="fvg-prompt-text">"{p.prompt}"</blockquote>
                  <a
                    href={`https://scenith.in/create-ai-content?tab=video&utm_source=faceless_video_tool&utm_medium=prompt_card&utm_campaign=${p.category.toLowerCase().replace(/\//g, "_")}_2026`}
                    className="fvg-prompt-use"
                  >
                    Use This Prompt →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════ NICHES ══════════════════ */}
        <section className="fvg-section fvg-section--alt">
          <div className="fvg-container">
            <div className="fvg-section-label">Niche Playbook</div>
            <h2 className="fvg-section-title">
              8 Proven Faceless Channel Niches for AI Video in 2026
            </h2>
            <p className="fvg-section-sub">
              Not all niches are equal. These 8 perform consistently well with AI-generated faceless video content —
              high CPM, strong audience retention, and algorithm-friendly posting cadence.
            </p>
            <div className="fvg-niches-grid">
              {NICHES.map((n) => (
                <div key={n.title} className="fvg-niche-card">
                  <div className="fvg-niche-icon">{n.icon}</div>
                  <h3 className="fvg-niche-title">{n.title}</h3>
                  <p className="fvg-niche-desc">{n.desc}</p>
                  <div className="fvg-niche-examples">
                    {n.examples.map((e) => (
                      <span key={e} className="fvg-niche-example">{e}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════ MONETISATION ══════════════════ */}
        <section className="fvg-section">
          <div className="fvg-container">
            <div className="fvg-section-label">Monetise Your Content</div>
            <h2 className="fvg-section-title">
              6 Ways to Make Money with AI Faceless Video Content in 2026
            </h2>
            <p className="fvg-section-sub">
              AI-generated faceless video isn't just a creative tool — it's a legitimate income stream.
              Here's exactly how creators and agencies are monetising this technology today.
            </p>
            <div className="fvg-mono-grid">
              {MONETISATION_TIPS.map((tip) => (
                <div key={tip.title} className="fvg-mono-card">
                  <div className="fvg-mono-icon">{tip.icon}</div>
                  <div>
                    <h3 className="fvg-mono-title">{tip.title}</h3>
                    <p className="fvg-mono-body">{tip.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="fvg-cta-inline">
              <a
                href="https://scenith.in/create-ai-content?tab=video&utm_source=faceless_video_tool&utm_medium=monetise_section&utm_campaign=faceless_content_2026"
                className="fvg-cta-primary fvg-cta-primary--sm"
              >
                🎬 Start Building Your Faceless Channel →
              </a>
            </div>
          </div>
        </section>

        {/* ══════════════════ IMAGE TO VIDEO ══════════════════ */}
        <section className="fvg-section fvg-section--alt">
          <div className="fvg-container">
            <div className="fvg-section-label">Advanced Feature</div>
            <h2 className="fvg-section-title">
              Image-to-Video: Animate Any Still Image into a Cinematic Clip
            </h2>
            <div className="fvg-prose">
              <p>
                Beyond pure text-to-video, Scenith supports <strong>image-to-video generation</strong> —
                one of the most powerful faceless content techniques available in 2026. Upload any image
                (AI-generated or your own), describe the motion you want, and the AI will animate it into
                a fluid 5–10 second video clip.
              </p>
              <p>
                This unlocks a killer faceless workflow: generate a stunning AI image first (using GPT Image 1,
                Imagen 4, or Grok Aurora), then animate it as a video intro. Your thumbnail and video share
                the exact same visual aesthetic — a level of brand consistency that typically costs thousands
                in production fees.
              </p>
              <p>
                Image-to-video is especially effective for:
              </p>
              <ul>
                <li><strong>Channel intros</strong> — animate your AI-generated brand image into a looping opener</li>
                <li><strong>Product visualisations</strong> — bring a product render to life with subtle motion</li>
                <li><strong>Portrait animation</strong> — animate AI character art for game trailers or story channels</li>
                <li><strong>Landscape loops</strong> — create infinite ambient loops from a single AI landscape image</li>
              </ul>
              <p>
                All of this is available within a single platform — generate the image, click "Make Video from
                this Image," and the reference is automatically carried across with your prompt. No file
                downloading and re-uploading between tools.
              </p>
            </div>
            <div className="fvg-cta-inline" style={{ marginTop: 28 }}>
              <a
                href="https://scenith.in/create-ai-content?tab=video&utm_source=faceless_video_tool&utm_medium=img2vid_section&utm_campaign=faceless_content_2026"
                className="fvg-cta-primary fvg-cta-primary--sm"
              >
                🖼️ Try Image-to-Video Free →
              </a>
            </div>
          </div>
        </section>

        {/* ══════════════════ AUDIO / VOICE ══════════════════ */}
        <section className="fvg-section">
          <div className="fvg-container">
            <div className="fvg-section-label">Complete Faceless Workflow</div>
            <h2 className="fvg-section-title">
              AI Voice + AI Video: The Complete Faceless Content Stack
            </h2>
            <div className="fvg-prose">
              <p>
                Generating great video is only half the equation for a faceless channel. The other half is
                <strong> voiceover narration</strong> — and Scenith handles that too, on the same page,
                with the same credit balance.
              </p>
              <p>
                Scenith's AI Voice Generator gives you access to <strong>40+ natural voices</strong> across
                20+ languages from Google TTS, OpenAI, and Azure Neural TTS providers. Write your script,
                pick a voice that matches your channel's tone, adjust speed, and generate an MP3 in roughly
                3 seconds.
              </p>
              <p>
                The workflow that top faceless creators use in 2026:
              </p>
              <ol>
                <li><strong>Write script</strong> using ChatGPT or Claude (or write it yourself)</li>
                <li><strong>Generate AI voiceover</strong> on Scenith — download MP3</li>
                <li><strong>Generate AI video clips</strong> matching each script segment — download MP4s</li>
                <li><strong>Combine in CapCut or DaVinci Resolve</strong> (both free) — sync audio + video</li>
                <li><strong>Add subtitles</strong> using Scenith's subtitle tool or CapCut auto-captions</li>
                <li><strong>Upload to YouTube / Reels / TikTok</strong></li>
              </ol>
              <p>
                Total time from blank page to upload-ready video: <strong>15–45 minutes</strong> for a creator
                who's done it a few times. Compared to traditional video production (days to weeks), this is
                a compression of creative leverage that simply didn't exist before 2024.
              </p>
              <p>
                Additionally, Grok Imagine — one of Scenith's video models — includes
                <strong> AI-generated audio directly embedded in the video</strong>, eliminating even the voiceover
                step for ambient and atmospheric content formats like ASMR, nature loops, and cinematic
                montages with background audio.
              </p>
            </div>
            <div className="fvg-cta-inline" style={{ marginTop: 28 }}>
              <a
                href="https://scenith.in/create-ai-content?tab=voice&utm_source=faceless_video_tool&utm_medium=voice_section&utm_campaign=faceless_content_2026"
                className="fvg-cta-secondary-block"
              >
                🎙️ Also Try AI Voice Generator →
              </a>
            </div>
          </div>
        </section>

        {/* ══════════════════ COMPARISON ══════════════════ */}
        <section className="fvg-section fvg-section--alt">
          <div className="fvg-container">
            <div className="fvg-section-label">Why Scenith</div>
            <h2 className="fvg-section-title">
              Scenith vs Using Individual AI Video Tools
            </h2>
            <div className="fvg-compare-grid">
              <div className="fvg-compare-col fvg-compare-col--bad">
                <h3>❌ Using Separate Tools</h3>
                <ul>
                  <li>Runway ML — $15/mo, limited credits</li>
                  <li>Kling AI website — separate login, credits</li>
                  <li>Veo via VideoFX — waitlist, no API</li>
                  <li>ElevenLabs for voice — another $5–$22/mo</li>
                  <li>Midjourney for images — $10/mo more</li>
                  <li>No unified workflow or history</li>
                  <li>Total: $40–$60+/mo across 4–5 apps</li>
                </ul>
              </div>
              <div className="fvg-compare-col fvg-compare-col--good">
                <h3>✅ Scenith — All-in-One</h3>
                <ul>
                  <li>Kling 2.6 Pro direct access — same model</li>
                  <li>Veo 3.1 via Google API — same quality</li>
                  <li>Wan 2.5 + Grok Imagine — exclusive combo</li>
                  <li>AI Voice: Google, OpenAI, Azure — all included</li>
                  <li>AI Image: 7 models for thumbnails + img2vid</li>
                  <li>One login, one credit balance, one dashboard</li>
                  <li>From $9/mo — 300 credits across all 3 modes</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════ TIPS DEEP DIVE ══════════════════ */}
        <section className="fvg-section">
          <div className="fvg-container">
            <div className="fvg-section-label">Creator Tips</div>
            <h2 className="fvg-section-title">
              Advanced Prompting Tips for Faceless AI Video in 2026
            </h2>
            <div className="fvg-prose">
              <h3>1. Specify Camera Movement</h3>
              <p>
                AI video models respond extremely well to explicit camera direction in prompts. Instead of
                "a forest at night," write <em>"slow cinematic push through a dark forest at night, camera
                at ground level, mist rising, moonlight filtering through canopy."</em> Camera movements
                that work reliably: slow push forward, aerial pull back, slow pan left/right, slow tilt up,
                orbit around subject.
              </p>

              <h3>2. Describe Lighting Explicitly</h3>
              <p>
                Lighting transforms generic AI video into cinematic content. Keywords that consistently
                produce dramatic results: <strong>golden hour</strong>, <strong>blue hour</strong>,
                <strong>dramatic crepuscular rays</strong>, <strong>neon-lit night scene</strong>,
                <strong>single spotlight</strong>, <strong>volumetric fog with light shafts</strong>,
                <strong>stormy overcast light</strong>, <strong>underwater caustics</strong>.
              </p>

              <h3>3. Use Established Cinematic References</h3>
              <p>
                Adding film-style reference terms dramatically improves output quality:
                "documentary style," "nature documentary BBC Earth style," "cinematic wide angle,"
                "macro lens," "anamorphic lens flare," "film grain," "4K IMAX."
                These aren't copyright claims — they're aesthetic shorthand the models understand well.
              </p>

              <h3>4. Include Subject, Setting, Action, and Atmosphere</h3>
              <p>
                The best-performing faceless video prompts follow this structure:
                <strong> [Subject] + [Setting] + [Action/Motion] + [Atmosphere/Lighting] + [Camera Style]</strong>.
                Example: <em>"Lone wolf (subject) standing on a frozen Arctic tundra at night (setting),
                breath visible in cold air, slowly turns to face camera (action), aurora borealis above,
                deep blue cold light (atmosphere), slow cinematic push toward wolf (camera style)."</em>
              </p>

              <h3>5. Aspect Ratio Strategy for Different Platforms</h3>
              <p>
                <strong>16:9</strong> for YouTube landscape videos and website background loops.
                <strong>9:16</strong> for Instagram Reels, TikTok, and YouTube Shorts — always generate
                in 9:16 natively rather than cropping 16:9, as the composition differs significantly.
                <strong>1:1</strong> for LinkedIn posts and Instagram square grid consistency.
                Generating natively in the target aspect ratio always outperforms cropping.
              </p>

              <h3>6. Batch Generate to Find Your Best Clip</h3>
              <p>
                Because AI video involves stochastic generation (slight randomness each run), the same prompt
                can produce notably different results. Experienced faceless creators generate 3–4 clips per
                scene and select the best one. With Wan 2.5's low credit cost, this is highly affordable — you
                can generate 4 variations for roughly the same price as 1 Veo 3.1 clip.
              </p>

              <h3>7. Combine with AI Images for Thumbnails</h3>
              <p>
                Your YouTube thumbnail is often more important than the video itself for click-through rate.
                Generate your video first, then use the same prompt in Scenith's Image Generator (Imagen 4
                or GPT Image 1) to create a matching thumbnail. Consistent visual language between your
                thumbnail and video content builds stronger channel recognition.
              </p>

              <h3>8. Use Shorter Clips for Retention</h3>
              <p>
                On YouTube Shorts and Reels, 5-second AI clips edited together at a rhythm of every 3–5
                seconds creates the high visual variety that algorithms reward. Rather than using one 10-second
                clip, try 2 × 5-second clips with different compositions to maintain visual dynamism.
                This approach is used by many of the top faceless channels exceeding 100K subscribers.
              </p>
            </div>
          </div>
        </section>

        {/* ══════════════════ MAIN CTA BLOCK ══════════════════ */}
        <section className="fvg-cta-section">
          <div className="fvg-cta-section-inner">
            <div className="fvg-cta-glow" aria-hidden="true" />
            <div className="fvg-section-label fvg-section-label--light">Start Creating</div>
            <h2 className="fvg-cta-section-title">
              Ready to Build Your Faceless Channel?
            </h2>
            <p className="fvg-cta-section-sub">
              50 free credits on signup — no card required. Generate your first AI faceless video in under 2 minutes.
              Paid plans from $9/month give you enough credits for a full content calendar.
            </p>
            <a
              href="https://scenith.in/create-ai-content?tab=video&utm_source=faceless_video_tool&utm_medium=main_cta&utm_campaign=faceless_content_2026"
              className="fvg-cta-primary fvg-cta-primary--lg"
            >
              <span className="fvg-cta-icon">🎬</span>
              <span className="fvg-cta-text">
                <strong>Generate Faceless Video — Free</strong>
                <small>Kling · Veo 3.1 · Wan 2.5 · Grok Imagine</small>
              </span>
              <span className="fvg-cta-arrow">→</span>
            </a>
            <div className="fvg-cta-trust">
              <span>✓ No credit card</span>
              <span>✓ 50 free credits</span>
              <span>✓ Commercial rights</span>
              <span>✓ No watermarks</span>
            </div>
          </div>
        </section>

        {/* ══════════════════ FAQ ══════════════════ */}
        <section className="fvg-section fvg-section--alt">
          <div className="fvg-container">
            <div className="fvg-section-label">FAQ</div>
            <h2 className="fvg-section-title">
              Frequently Asked Questions about AI Faceless Video Generation
            </h2>
            <div className="fvg-faq-list">
              {FAQS.map((faq, i) => (
                <details key={i} className="fvg-faq-item">
                  <summary className="fvg-faq-question">{faq.q}</summary>
                  <div className="fvg-faq-answer">
                    <p>{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════ FOOTER CTA ══════════════════ */}
        <section className="fvg-footer-cta">
          <div className="fvg-container" style={{ textAlign: "center" }}>
            <p className="fvg-footer-cta-text">
              One platform for AI voice, image, and video creation.
            </p>
            <div className="fvg-footer-links">
              <a href="https://scenith.in/create-ai-content?tab=voice&utm_source=faceless_video_tool&utm_medium=footer&utm_campaign=faceless_content_2026">
                🎙️ AI Voice Generator
              </a>
              <a href="https://scenith.in/create-ai-content?tab=image&utm_source=faceless_video_tool&utm_medium=footer&utm_campaign=faceless_content_2026">
                🖼️ AI Image Generator
              </a>
              <a href="https://scenith.in/create-ai-content?tab=video&utm_source=faceless_video_tool&utm_medium=footer&utm_campaign=faceless_content_2026">
                🎬 AI Video Generator
              </a>
              <a href="https://scenith.in/pricing">
                💰 Pricing
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}