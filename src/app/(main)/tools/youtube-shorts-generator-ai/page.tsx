import type { Metadata } from "next";
import Link from "next/link";
import "./youtube-shorts-generator-ai.css";

// ─── SEO Metadata ────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "AI YouTube Shorts Generator — Create Viral Shorts in Seconds | Scenith",
  description:
    "Generate YouTube Shorts with AI in 2026. Create stunning AI videos, voiceovers & thumbnails for your Shorts channel — all in one tool. No editing skills needed. Try free.",
  keywords: [
    "AI YouTube Shorts generator",
    "YouTube Shorts AI video generator",
    "generate YouTube Shorts with AI",
    "AI Shorts creator free",
    "YouTube Shorts video maker AI",
    "AI video generator for Shorts",
    "faceless YouTube Shorts AI",
    "automated YouTube Shorts creator",
    "AI short video generator",
    "YouTube Shorts voiceover AI",
    "AI generated YouTube Shorts 2026",
    "best AI YouTube Shorts tool",
    "text to video YouTube Shorts",
    "AI content creator YouTube Shorts",
    "free YouTube Shorts AI generator",
  ],
  openGraph: {
    title: "AI YouTube Shorts Generator — Create Viral Shorts in Seconds | Scenith",
    description:
      "Generate YouTube Shorts with AI in 2026. Cinematic AI video + natural AI voiceover + viral thumbnails — built for Shorts creators.",
    url: "https://scenith.in/tools/youtube-shorts-generator-ai",
    siteName: "Scenith",
    type: "website",
    images: [
      {
        url: "https://cdn.scenith.in/og/youtube-shorts-generator-ai.jpg",
        width: 1200,
        height: 630,
        alt: "AI YouTube Shorts Generator by Scenith",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI YouTube Shorts Generator — Create Viral Shorts in Seconds",
    description:
      "Create viral YouTube Shorts using AI video, AI voiceover & AI thumbnails — all from one tool. Free to start.",
    images: ["https://cdn.scenith.in/og/youtube-shorts-generator-ai.jpg"],
  },
  alternates: {
    canonical: "https://scenith.in/tools/youtube-shorts-generator-ai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

// ─── Structured Data ─────────────────────────────────────────────────────────

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://scenith.in/tools/youtube-shorts-generator-ai",
      url: "https://scenith.in/tools/youtube-shorts-generator-ai",
      name: "AI YouTube Shorts Generator — Create Viral Shorts in Seconds | Scenith",
      description:
        "Generate YouTube Shorts with AI — cinematic video, natural voiceover & viral thumbnails in one tool. Free to start.",
      isPartOf: { "@id": "https://scenith.in/#website" },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://scenith.in" },
          { "@type": "ListItem", position: 2, name: "Tools", item: "https://scenith.in/tools" },
          { "@type": "ListItem", position: 3, name: "AI YouTube Shorts Generator", item: "https://scenith.in/tools/youtube-shorts-generator-ai" },
        ],
      },
    },
    {
      "@type": "SoftwareApplication",
      name: "Scenith AI YouTube Shorts Generator",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Web",
      url: "https://scenith.in/create-ai-content?tab=video&utm_source=shorts_tool&utm_medium=cta&utm_campaign=youtube_shorts_generator",
      description:
        "AI-powered YouTube Shorts generator — create cinematic 9:16 AI videos, AI voiceovers, and viral thumbnails in seconds.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "50 free credits on signup — no card required.",
      },
      featureList: [
        "Text-to-video for YouTube Shorts (9:16 vertical)",
        "AI voiceover generation in 20+ languages",
        "AI thumbnail image generation",
        "6 cinematic AI video models including Kling 2.6 and Veo 3.1",
        "One-click MP4 download",
        "No editing software needed",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Can AI generate YouTube Shorts automatically?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. With Scenith's AI YouTube Shorts Generator, you can generate a full 9:16 vertical video clip from a text prompt in 30–120 seconds. You can also generate a matching AI voiceover and thumbnail image — all without any video editing skills.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best AI tool for YouTube Shorts in 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Scenith is one of the most comprehensive AI tools for YouTube Shorts in 2026, combining AI video generation (Kling 2.6, Veo 3.1, Wan 2.5), AI voiceover (Google, OpenAI, Azure), and AI thumbnail generation (GPT Image, Imagen 4, FLUX) all under one credit system.",
          },
        },
        {
          "@type": "Question",
          name: "Is this YouTube Shorts AI generator free?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — Scenith gives you 50 free credits on signup with no credit card required. Paid plans start from $1/month for more credits across video, voice, and image generation.",
          },
        },
        {
          "@type": "Question",
          name: "How long does AI YouTube Shorts generation take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AI video generation for a 5-second Short takes 30–60 seconds. AI voiceover takes 2–4 seconds. AI thumbnail takes 10–30 seconds. A complete Short (video + voiceover + thumbnail) can be ready in under 2 minutes.",
          },
        },
        {
          "@type": "Question",
          name: "What aspect ratio should I use for YouTube Shorts?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "YouTube Shorts require a 9:16 vertical aspect ratio. Scenith's AI video generator has a native 9:16 mode — select it in the aspect ratio toggle before generating.",
          },
        },
      ],
    },
  ],
};

// ─── Static Data ──────────────────────────────────────────────────────────────

const CTA_URL =
  "https://scenith.in/create-ai-content?tab=video&aspect=9%3A16&utm_source=shorts_tool&utm_medium=cta&utm_campaign=youtube_shorts_generator";

const VOICE_CTA_URL =
  "https://scenith.in/create-ai-content?tab=voice&utm_source=shorts_tool&utm_medium=cta&utm_campaign=youtube_shorts_voice";

const IMAGE_CTA_URL =
  "https://scenith.in/create-ai-content?tab=image&utm_source=shorts_tool&utm_medium=cta&utm_campaign=youtube_shorts_thumbnail";

const STATS = [
  { value: "9:16", label: "Native Shorts Format" },
  { value: "6", label: "AI Video Models" },
  { value: "40+", label: "AI Voices" },
  { value: "< 2 min", label: "Full Short Ready" },
];

const MODELS = [
  {
    name: "Kling 2.6 Pro",
    badge: "Most Popular",
    badgeColor: "#f59e0b",
    description: "Cinema-grade 9:16 vertical video. Best for dramatic, storytelling, and product Shorts. Up to 10s clips.",
    credits: "64cr / 5s",
    quality: "1080p",
    icon: "🎬",
  },
  {
    name: "Veo 3.1 Fast",
    badge: "Best Quality",
    badgeColor: "#10b981",
    description: "Google's flagship video AI — photorealistic motion, exceptional lighting. Ideal for cinematic nature and lifestyle Shorts.",
    credits: "92cr / 5s",
    quality: "1080p",
    icon: "✨",
  },
  {
    name: "Wan 2.5",
    badge: "Budget-Friendly",
    badgeColor: "#6355dc",
    description: "Affordable, fast, and surprisingly good. Perfect for high-volume Shorts creators pumping out daily content.",
    credits: "46cr / 5s",
    quality: "480p–1080p",
    icon: "⚡",
  },
  {
    name: "Grok Imagine",
    badge: "Audio Included",
    badgeColor: "#db2777",
    description: "The only model with built-in AI audio. Background music + ambient sound generated alongside your video. A game-changer for Shorts.",
    credits: "47cr / 5s",
    quality: "720p",
    icon: "🎵",
  },
  {
    name: "Kling 2.5 Turbo",
    badge: "Fast",
    badgeColor: "#0ea5e9",
    description: "Faster generation with smooth motion. Great for talking-head style Shorts or when you need to iterate quickly.",
    credits: "64cr / 5s",
    quality: "1080p",
    icon: "🚀",
  },
  {
    name: "Veo 3.1",
    badge: "Max Resolution",
    badgeColor: "#7c3aed",
    description: "The highest fidelity model available. Use for hero Shorts, brand reveals, or any content where visual quality is non-negotiable.",
    credits: "186cr / 5s",
    quality: "1080p",
    icon: "💎",
  },
];

const NICHE_IDEAS = [
  {
    niche: "Finance & Investing",
    icon: "📈",
    prompt: "Cinematic aerial shot of a bustling stock exchange trading floor, numbers flying through the air, golden light, dramatic and epic, 9:16 vertical",
    voice: "Neutral male voice, professional, slow and deliberate delivery",
    hook: '"Most people will never be rich. Here\'s the ONE mistake they keep making."',
    views: "200K–2M typical range",
  },
  {
    niche: "Motivation & Mindset",
    icon: "💪",
    prompt: "Slow motion silhouette of a runner at sunrise on a mountain peak, golden mist, dramatic sky, inspirational, 9:16 vertical",
    voice: "Deep male voice, passionate, energetic delivery",
    hook: '"Nobody remembers your excuses. They only remember what you built."',
    views: "500K–5M typical range",
  },
  {
    niche: "History & Mystery",
    icon: "🏛️",
    prompt: "Dark atmospheric ancient ruins at dusk, torchlight flickering, dust particles, cinematic documentary style, 9:16 vertical",
    voice: "Narrative documentary female voice, measured pacing",
    hook: '"This ancient city vanished overnight. What scientists found inside changed everything."',
    views: "1M–10M typical range",
  },
  {
    niche: "Tech & AI",
    icon: "🤖",
    prompt: "Abstract holographic AI brain dissolving into data streams, blue and purple neon, sci-fi cyberpunk aesthetic, 9:16 vertical",
    voice: "Crisp neutral voice, rapid delivery, modern feel",
    hook: '"AI can now do THIS. Most people don\'t even know it exists yet."',
    views: "300K–3M typical range",
  },
  {
    niche: "Nature & Animals",
    icon: "🌊",
    prompt: "Massive blue whale gliding through sunlit ocean, shafts of light, schools of fish parting, slow motion underwater cinematic, 9:16 vertical",
    voice: "Calm BBC-style documentary narration, wonder-inducing tone",
    hook: '"The largest creature to ever live does something that will shock you every morning."',
    views: "2M–20M typical range",
  },
  {
    niche: "Food & Recipes",
    icon: "🍜",
    prompt: "Extreme close-up macro shot of steaming ramen bowl, chopsticks lifting noodles, broth swirling, warm amber lighting, 9:16 vertical",
    voice: "Warm conversational female voice, enthusiastic and inviting",
    hook: '"I tried every ramen in Tokyo. This bowl destroyed all of them."',
    views: "100K–1M typical range",
  },
  {
    niche: "True Crime & Mysteries",
    icon: "🔍",
    prompt: "Eerie dark rain-soaked alley at night, neon reflections, mysterious figure, cinematic noir atmosphere, suspenseful, 9:16 vertical",
    voice: "Hushed, intense female voice — slow dramatic delivery",
    hook: '"The detective found three clues. Only one of them was supposed to exist."',
    views: "500K–8M typical range",
  },
  {
    niche: "Luxury & Lifestyle",
    icon: "🏖️",
    prompt: "Aerial drone shot of a private villa infinity pool overlooking the Mediterranean at sunset, golden hour, ultra-cinematic, 9:16 vertical",
    voice: "Smooth aspirational male voice, confident and aspirational",
    hook: '"What your Monday looks like when you build passive income correctly."',
    views: "200K–2M typical range",
  },
];

const WORKFLOW_STEPS = [
  {
    num: "01",
    title: "Write Your Hook",
    description:
      "The first 2 seconds of a Short determines everything. Use the prompt suggestion chips inside the tool to get proven hook-style prompts that stop the scroll. Or paste your own script.",
    tip: "Pro tip: Start with a question, contradiction, or shocking statement. Never start with your name or channel name.",
    icon: "✍️",
  },
  {
    num: "02",
    title: "Generate Your Visuals",
    description:
      "Select a 9:16 vertical aspect ratio, pick your AI video model, and generate a cinematic clip in 30–120 seconds. No camera. No crew. No editing.",
    tip: "Pro tip: Wan 2.5 is best for volume (daily Shorts). Kling 2.6 or Veo 3.1 for hero content you want to go viral.",
    icon: "🎬",
  },
  {
    num: "03",
    title: "Layer Your Voiceover",
    description:
      "Switch to the Voice tab and generate an AI voiceover from your script. 40+ voices across Google, OpenAI, and Azure. Download the MP3 and merge in CapCut or any mobile editor.",
    tip: "Pro tip: Google's 'Journey' and Azure's 'Davis' voices perform best for narration-style faceless Shorts.",
    icon: "🎙️",
  },
  {
    num: "04",
    title: "Create Your Thumbnail",
    description:
      "Switch to Image tab, set aspect to Portrait (9:16), and generate a thumbnail that stops the scroll. Use GPT Image Medium or Imagen 4 for maximum realism.",
    tip: "Pro tip: Your thumbnail competes with every other Short in the feed. Make it bold, high-contrast, and use a single clear focal point.",
    icon: "🖼️",
  },
  {
    num: "05",
    title: "Download & Upload",
    description:
      "Download your MP4, MP3, and PNG. Merge audio with video in CapCut (free, takes 60 seconds), add auto-captions, and upload directly to YouTube Shorts.",
    tip: "Pro tip: Add captions — Shorts with subtitles get 40% longer average watch time, which directly boosts YouTube's algorithm recommendation rate.",
    icon: "📤",
  },
];

const FACELESS_NICHES = [
  { icon: "📊", name: "Finance Tips" },
  { icon: "🧠", name: "Psychology Facts" },
  { icon: "🌍", name: "Geography" },
  { icon: "⚡", name: "Science Facts" },
  { icon: "🎮", name: "Gaming Clips" },
  { icon: "📚", name: "Book Summaries" },
  { icon: "🔮", name: "Conspiracy" },
  { icon: "🏆", name: "Sports Moments" },
  { icon: "🌿", name: "Nature Docs" },
  { icon: "🤖", name: "AI & Tech" },
  { icon: "🎭", name: "Philosophy" },
  { icon: "🏛️", name: "Ancient History" },
  { icon: "💊", name: "Health Facts" },
  { icon: "🚀", name: "Space" },
  { icon: "🎨", name: "Art History" },
  { icon: "🐾", name: "Animals" },
];

const SHORTS_STATS = [
  { stat: "70B+", context: "YouTube Shorts views per day (2026)" },
  { stat: "2.7B", context: "Monthly YouTube Shorts viewers" },
  { stat: "15s–60s", context: "Optimal Short duration for algorithm" },
  { stat: "40%", context: "Watch time boost from subtitles" },
  { stat: "3x", context: "Higher RPM on AI-generated Shorts vs standard" },
  { stat: "68%", context: "Creators report AI saves 5+ hours per week" },
];

const COMPARISON = [
  {
    method: "Traditional Shorts Creation",
    time: "4–8 hours",
    cost: "$0–$500+",
    skills: "Video editing, scripting, recording, thumbnail design",
    output: "1–2 Shorts/week",
    quality: "Varies",
  },
  {
    method: "Scenith AI Shorts Generator",
    time: "5–15 minutes",
    cost: "From $0 (free credits)",
    skills: "Just typing a prompt",
    output: "10–50 Shorts/week",
    quality: "Cinematic, consistent",
  },
];

// ─── Page Component ───────────────────────────────────────────────────────────

export default function YouTubeShortsGeneratorAI() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="ysg-root">
        {/* ── Noise texture overlay ── */}
        <div className="ysg-noise" aria-hidden="true" />

        {/* ── Hero ──────────────────────────────────────────────────── */}
        <section className="ysg-hero">
          <div className="ysg-hero-bg" aria-hidden="true">
            <div className="ysg-orb ysg-orb-1" />
            <div className="ysg-orb ysg-orb-2" />
            <div className="ysg-orb ysg-orb-3" />
          </div>

          <div className="ysg-container">
            <div className="ysg-breadcrumb">
              <Link href="/">Scenith</Link>
              <span>/</span>
              <Link href="/tools">Tools</Link>
              <span>/</span>
              <span>YouTube Shorts Generator AI</span>
            </div>

            <div className="ysg-badge">
              <span className="ysg-badge-dot" />
              <span>2026 · AI-Powered · 9:16 Optimized</span>
            </div>

            <h1 className="ysg-hero-title">
              AI YouTube Shorts
              <br />
              <span className="ysg-title-accent">Generator</span>
              <span className="ysg-title-em"> That Actually Goes Viral</span>
            </h1>

            <p className="ysg-hero-desc">
              Stop spending 6 hours editing one Short. Generate cinematic 9:16 AI videos,
              natural-sounding voiceovers, and scroll-stopping thumbnails in under 2 minutes —
              powered by Kling 2.6, Veo 3.1, Wan 2.5, and 6 more state-of-the-art AI models.
            </p>

            {/* Stats strip */}
            <div className="ysg-stats-strip">
              {STATS.map((s) => (
                <div key={s.value} className="ysg-stat">
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>

            {/* ── HERO CTA ── */}
            <div className="ysg-hero-cta">
              <a href={CTA_URL} className="ysg-cta-primary">
                <span className="ysg-cta-icon">🎬</span>
                <div className="ysg-cta-text">
                  <strong>Generate My YouTube Short Now</strong>
                  <small>50 free credits · No card required · 9:16 pre-loaded</small>
                </div>
                <span className="ysg-cta-arrow">→</span>
              </a>
              <p className="ysg-cta-note">
                Opens Scenith's AI Content Creator with 9:16 Shorts mode pre-selected
              </p>
            </div>

            {/* Phone mockup strip */}
            <div className="ysg-phone-strip" aria-hidden="true">
              {["🌋", "🤖", "🐋", "🏙️", "🌊"].map((emoji, i) => (
                <div key={i} className="ysg-phone-card" style={{ animationDelay: `${i * 0.12}s` }}>
                  <div className="ysg-phone-screen">
                    <div className="ysg-phone-emoji">{emoji}</div>
                    <div className="ysg-phone-bar" />
                    <div className="ysg-phone-bar ysg-phone-bar--short" />
                  </div>
                  <div className="ysg-phone-actions">
                    <span>❤️</span>
                    <span>💬</span>
                    <span>↗️</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── What Is This ─────────────────────────────────────────── */}
        <section className="ysg-section ysg-section--alt">
          <div className="ysg-container">
            <div className="ysg-section-label">THE OPPORTUNITY</div>
            <h2 className="ysg-section-title">
              YouTube Shorts is the Fastest Growing Content Format in 2026
            </h2>
            <div className="ysg-intro-grid">
              <div className="ysg-intro-text">
                <p>
                  YouTube Shorts crossed <strong>70 billion daily views</strong> in 2026. That's not a typo.
                  The format is growing faster than TikTok did at its peak — and unlike TikTok, YouTube Shorts
                  come with <strong>long-term SEO value</strong>: your Shorts live permanently on YouTube's search
                  engine, the second-largest search engine on earth.
                </p>
                <p>
                  The problem? Creating a high-quality Short the traditional way takes 4–8 hours of filming,
                  scripting, voiceover recording, B-roll hunting, editing, and thumbnail design. Most creators
                  burn out within 3 weeks. That's where AI changes everything.
                </p>
                <p>
                  With Scenith's AI YouTube Shorts Generator, you generate a complete Short — cinematic visuals,
                  professional voiceover, and a viral thumbnail — in under 15 minutes. No camera. No editing software.
                  No creative block. Just a prompt and a few clicks.
                </p>
              </div>
              <div className="ysg-shorts-stats-grid">
                {SHORTS_STATS.map((s) => (
                  <div key={s.stat} className="ysg-shorts-stat">
                    <strong>{s.stat}</strong>
                    <span>{s.context}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Mid CTA ─────────────────────────────────────────────── */}
        <section className="ysg-mid-cta">
          <div className="ysg-container">
            <div className="ysg-mid-cta-inner">
              <div className="ysg-mid-cta-text">
                <h2>Ready to Generate Your First Short?</h2>
                <p>9:16 aspect ratio is pre-selected. Your first Short could be done in 15 minutes.</p>
              </div>
              <a href={CTA_URL} className="ysg-cta-primary ysg-cta-primary--compact">
                <span>🎬</span>
                <strong>Start Generating Free</strong>
                <span>→</span>
              </a>
            </div>
          </div>
        </section>

        {/* ── AI Video Models ──────────────────────────────────────── */}
        <section className="ysg-section">
          <div className="ysg-container">
            <div className="ysg-section-label">POWERED BY</div>
            <h2 className="ysg-section-title">
              6 Cinematic AI Models, One Platform
            </h2>
            <p className="ysg-section-sub">
              Pick the right model for your niche and budget. All models support 9:16 vertical format — the exact spec YouTube Shorts requires.
            </p>
            <div className="ysg-models-grid">
              {MODELS.map((model) => (
                <div key={model.name} className="ysg-model-card">
                  <div className="ysg-model-header">
                    <span className="ysg-model-icon">{model.icon}</span>
                    <div>
                      <h3>{model.name}</h3>
                      <span
                        className="ysg-model-badge"
                        style={{ background: `${model.badgeColor}20`, color: model.badgeColor, borderColor: `${model.badgeColor}40` }}
                      >
                        {model.badge}
                      </span>
                    </div>
                  </div>
                  <p>{model.description}</p>
                  <div className="ysg-model-meta">
                    <span>⚡ {model.credits}</span>
                    <span>📺 {model.quality}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="ysg-models-cta">
              <a href={CTA_URL} className="ysg-cta-secondary">
                Try All 6 Models Free →
              </a>
            </div>
          </div>
        </section>

        {/* ── Workflow ─────────────────────────────────────────────── */}
        <section className="ysg-section ysg-section--alt">
          <div className="ysg-container">
            <div className="ysg-section-label">HOW IT WORKS</div>
            <h2 className="ysg-section-title">
              From Zero to Uploaded Short in 5 Steps
            </h2>
            <p className="ysg-section-sub">
              Here's the exact workflow thousands of Shorts creators use with Scenith every week.
              No technical skills required — just a browser and an idea.
            </p>
            <div className="ysg-steps">
              {WORKFLOW_STEPS.map((step) => (
                <div key={step.num} className="ysg-step">
                  <div className="ysg-step-num">{step.num}</div>
                  <div className="ysg-step-content">
                    <div className="ysg-step-icon">{step.icon}</div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                    <div className="ysg-step-tip">
                      <span className="ysg-tip-label">💡</span>
                      <span>{step.tip}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="ysg-workflow-cta">
              <a href={CTA_URL} className="ysg-cta-primary">
                <span>⚡</span>
                <div>
                  <strong>Start Step 1 Right Now</strong>
                  <small>Opens with 9:16 video mode pre-loaded</small>
                </div>
                <span>→</span>
              </a>
            </div>
          </div>
        </section>

        {/* ── Niche Ideas ──────────────────────────────────────────── */}
        <section className="ysg-section">
          <div className="ysg-container">
            <div className="ysg-section-label">NICHE PLAYBOOK</div>
            <h2 className="ysg-section-title">
              8 Proven YouTube Shorts Niches — With Ready-to-Use AI Prompts
            </h2>
            <p className="ysg-section-sub">
              The best faceless YouTube Shorts niches in 2026, with real prompts you can paste directly into the AI generator.
              Copy any of these and you could have your first Short live tonight.
            </p>
            <div className="ysg-niche-grid">
              {NICHE_IDEAS.map((niche) => (
                <div key={niche.niche} className="ysg-niche-card">
                  <div className="ysg-niche-header">
                    <span className="ysg-niche-icon">{niche.icon}</span>
                    <div>
                      <h3>{niche.niche}</h3>
                      <span className="ysg-niche-views">{niche.views}</span>
                    </div>
                  </div>
                  <div className="ysg-niche-block">
                    <div className="ysg-niche-block-label">🎬 Video Prompt</div>
                    <p className="ysg-niche-prompt">{niche.prompt}</p>
                  </div>
                  <div className="ysg-niche-block">
                    <div className="ysg-niche-block-label">🎙️ Voice Style</div>
                    <p className="ysg-niche-prompt">{niche.voice}</p>
                  </div>
                  <div className="ysg-niche-block ysg-niche-block--hook">
                    <div className="ysg-niche-block-label">🪝 Hook Script</div>
                    <p className="ysg-niche-hook">{niche.hook}</p>
                  </div>
                  <a href={CTA_URL} className="ysg-niche-cta">
                    Use This Prompt →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3 CTAs side by side ──────────────────────────────────── */}
        <section className="ysg-triple-cta">
          <div className="ysg-container">
            <h2 className="ysg-section-title" style={{ textAlign: "center", marginBottom: 8 }}>
              Your Complete Shorts Production Suite
            </h2>
            <p className="ysg-section-sub" style={{ textAlign: "center", marginBottom: 40 }}>
              Three tools. One credit balance. Zero switching between platforms.
            </p>
            <div className="ysg-triple-grid">
              <a href={CTA_URL} className="ysg-triple-card ysg-triple-card--video">
                <div className="ysg-triple-icon">🎬</div>
                <h3>AI Video Generator</h3>
                <p>Generate cinematic 9:16 vertical videos from text prompts. 6 models including Kling 2.6 and Veo 3.1.</p>
                <span className="ysg-triple-btn">Generate Video →</span>
              </a>
              <a href={VOICE_CTA_URL} className="ysg-triple-card ysg-triple-card--voice">
                <div className="ysg-triple-icon">🎙️</div>
                <h3>AI Voiceover Generator</h3>
                <p>40+ natural voices, 20+ languages. Google, OpenAI, Azure TTS. Instant MP3 for your Shorts narration.</p>
                <span className="ysg-triple-btn">Generate Voice →</span>
              </a>
              <a href={IMAGE_CTA_URL} className="ysg-triple-card ysg-triple-card--image">
                <div className="ysg-triple-icon">🖼️</div>
                <h3>AI Thumbnail Generator</h3>
                <p>Generate 9:16 scroll-stopping thumbnails. GPT Image, Imagen 4, FLUX 1.1 Pro, Grok Aurora.</p>
                <span className="ysg-triple-btn">Generate Thumbnail →</span>
              </a>
            </div>
          </div>
        </section>

        {/* ── Faceless Niches Scrolling Strip ─────────────────────── */}
        <section className="ysg-section ysg-section--dark">
          <div className="ysg-container">
            <div className="ysg-section-label ysg-section-label--light">FACELESS CHANNELS</div>
            <h2 className="ysg-section-title ysg-section-title--light">
              The Fastest Growing Faceless YouTube Shorts Niches in 2026
            </h2>
            <p className="ysg-section-sub ysg-section-sub--light">
              You don't need to show your face. Faceless Shorts channels consistently outperform personal channels
              because AI visuals are objectively more cinematic than most phone cameras. Here are the 16 highest-performing
              faceless niches right now — all perfectly suited for AI video generation.
            </p>
            <div className="ysg-niche-scroll-outer">
              <div className="ysg-niche-scroll">
                {[...FACELESS_NICHES, ...FACELESS_NICHES].map((n, i) => (
                  <div key={i} className="ysg-niche-pill">
                    <span>{n.icon}</span>
                    <span>{n.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ textAlign: "center", marginTop: 40 }}>
              <a href={CTA_URL} className="ysg-cta-primary ysg-cta-primary--light">
                <span>🚀</span>
                <div>
                  <strong>Start My Faceless Shorts Channel</strong>
                  <small>Pick any niche above and start generating today</small>
                </div>
                <span>→</span>
              </a>
            </div>
          </div>
        </section>

        {/* ── Comparison ───────────────────────────────────────────── */}
        <section className="ysg-section">
          <div className="ysg-container">
            <div className="ysg-section-label">THE MATH</div>
            <h2 className="ysg-section-title">
              Traditional vs AI-Generated YouTube Shorts
            </h2>
            <p className="ysg-section-sub">
              Let's be honest about what content creation actually costs — in time and money — before and after AI.
            </p>
            <div className="ysg-compare-table">
              <div className="ysg-compare-header">
                <div />
                <div className="ysg-compare-col-header ysg-compare-col-header--bad">
                  ❌ Traditional Shorts
                </div>
                <div className="ysg-compare-col-header ysg-compare-col-header--good">
                  ✅ Scenith AI Generator
                </div>
              </div>
              {[
                { label: "Time per Short", trad: "4–8 hours", ai: "5–15 minutes" },
                { label: "Cost per Short", trad: "$0–$500+ (equipment, editing, stock)", ai: "From $0 (free credits)" },
                { label: "Skills needed", trad: "Editing, recording, scripting, design", ai: "Just type a prompt" },
                { label: "Weekly output", trad: "1–2 Shorts", ai: "10–50 Shorts" },
                { label: "Visual quality", trad: "Depends on your phone and location", ai: "Cinematic, consistent every time" },
                { label: "Language support", trad: "Your language only", ai: "20+ languages with AI voices" },
                { label: "Burnout risk", trad: "High — most creators quit in 3 weeks", ai: "Low — automation handles the hard parts" },
                { label: "Scalability", trad: "Linear — more output = more hours", ai: "Exponential — more content, same effort" },
              ].map((row) => (
                <div key={row.label} className="ysg-compare-row">
                  <div className="ysg-compare-label">{row.label}</div>
                  <div className="ysg-compare-bad">{row.trad}</div>
                  <div className="ysg-compare-good">{row.ai}</div>
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: 36 }}>
              <a href={CTA_URL} className="ysg-cta-secondary">
                Switch to AI-Powered Shorts →
              </a>
            </div>
          </div>
        </section>

        {/* ── Deep Content: The Algorithm Section ──────────────────── */}
        <section className="ysg-section ysg-section--alt">
          <div className="ysg-container">
            <div className="ysg-section-label">STRATEGY DEEP DIVE</div>
            <h2 className="ysg-section-title">
              How to Make AI YouTube Shorts That the Algorithm Actually Pushes
            </h2>
            <div className="ysg-deep-content">
              <div className="ysg-deep-block">
                <h3>
                  <span className="ysg-deep-num">①</span> The 9:16 Vertical Format is Non-Negotiable
                </h3>
                <p>
                  YouTube's algorithm punishes Shorts that aren't true 9:16 vertical. This isn't a preference —
                  it's a hard requirement. Scenith's AI video generator has a dedicated 9:16 aspect ratio mode.
                  Select it before generating, and every pixel of your output will be optimized for the Shorts feed.
                  Trying to crop a 16:9 landscape video into Shorts format will result in blurry, off-center output
                  that gets buried by the algorithm immediately.
                </p>
              </div>
              <div className="ysg-deep-block">
                <h3>
                  <span className="ysg-deep-num">②</span> The First 2 Seconds Determine Your CTR (And Everything Else)
                </h3>
                <p>
                  YouTube measures "swipe-away rate" for Shorts — the percentage of viewers who swipe to the next
                  Short within the first 2 seconds. A swipe-away rate above 70% buries your content. Below 50%
                  and you're getting pushed to wider audiences automatically.
                </p>
                <p>
                  AI-generated videos have a natural advantage here: the opening frame of a cinematic AI video —
                  an erupting volcano, a bioluminescent bay at night, a chrome robot in feudal Japan — is visually
                  arresting in a way that a phone-filmed talking head simply isn't. Your first 2 seconds are already
                  doing the heavy lifting before you say a single word.
                </p>
              </div>
              <div className="ysg-deep-block">
                <h3>
                  <span className="ysg-deep-num">③</span> Watch Time Completion Rate is the Real Metric
                </h3>
                <p>
                  YouTube's internal ranking for Shorts is primarily driven by what percentage of your video viewers
                  watch to completion (or loop). A Short that 80% of viewers watch all the way through will be pushed
                  to millions of people. A Short that 30% of viewers finish will die quietly.
                </p>
                <p>
                  This is why <strong>5-second Shorts consistently outperform 60-second Shorts</strong> for new channels.
                  A 5-second cinematic AI video clip with a shocking visual and one punchy line of AI voiceover will
                  get a near-100% completion rate. Use the 5-second duration setting in Scenith until your channel has
                  50K+ subscribers and established audience loyalty.
                </p>
              </div>
              <div className="ysg-deep-block">
                <h3>
                  <span className="ysg-deep-num">④</span> The Volume Strategy: Why AI Creators Win Long-Term
                </h3>
                <p>
                  YouTube's algorithm rewards consistency above almost everything else. Channels that post every day
                  receive a compounding advantage — each new Short is surfaced to subscribers, tested against new
                  audiences, and cross-recommended alongside your existing content.
                </p>
                <p>
                  A human creator posting daily burns out in weeks. An AI-assisted creator posting daily can sustain
                  it indefinitely. The math is simple: if you can generate 10 high-quality Shorts in the time it
                  previously took to make 1, your channel growth rate is roughly 10x. This isn't theoretical —
                  it's the strategy behind every major faceless channel that scaled past 1 million subscribers in 2025.
                </p>
              </div>
              <div className="ysg-deep-block">
                <h3>
                  <span className="ysg-deep-num">⑤</span> Sound-Off Viewing and the AI Subtitle Advantage
                </h3>
                <p>
                  Over 60% of YouTube Shorts are watched on mute or in noisy environments where audio isn't fully
                  audible. This means your visual storytelling needs to work without sound — and your subtitles
                  need to be large, high-contrast, and fast-paced.
                </p>
                <p>
                  After generating your AI video and voiceover, use CapCut's "Auto Captions" feature (free) to
                  overlay subtitles. CapCut can process an MP4 + MP3 combination and output a subtitled Short
                  in under 5 minutes. Studies consistently show that Shorts with on-screen captions achieve 40%
                  longer average watch time compared to caption-free versions.
                </p>
              </div>
              <div className="ysg-deep-block">
                <h3>
                  <span className="ysg-deep-num">⑥</span> The Niche Depth Strategy: Go Narrow Before Going Wide
                </h3>
                <p>
                  The biggest mistake new Shorts creators make is posting across too many different topics.
                  YouTube's recommendation algorithm works by categorizing your channel and recommending it
                  to viewers who have watched similar content. If your channel covers 10 different topics,
                  the algorithm struggles to place you and your content reaches nobody.
                </p>
                <p>
                  Pick one niche, post 30 Shorts in that niche, then evaluate performance. The niches with the
                  highest RPM (revenue per 1000 views) in 2026 are: Finance & Investing, AI & Technology,
                  Real Estate, Health & Longevity, and True Crime. AI video generation makes all of these niches
                  accessible without any domain expertise — just strong prompts and good hooks.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Mid CTA 2 ────────────────────────────────────────────── */}
        <section className="ysg-mid-cta">
          <div className="ysg-container">
            <div className="ysg-mid-cta-inner">
              <div className="ysg-mid-cta-text">
                <h2>Enough Strategy — Time to Generate</h2>
                <p>Apply every tip above in your very first Short. It's free to start.</p>
              </div>
              <a href={CTA_URL} className="ysg-cta-primary ysg-cta-primary--compact">
                <span>🎬</span>
                <strong>Create My First AI Short</strong>
                <span>→</span>
              </a>
            </div>
          </div>
        </section>

        {/* ── Monetization Section ─────────────────────────────────── */}
        <section className="ysg-section">
          <div className="ysg-container">
            <div className="ysg-section-label">MONETIZATION</div>
            <h2 className="ysg-section-title">
              How AI Shorts Creators Are Making Money in 2026
            </h2>
            <p className="ysg-section-sub">
              YouTube Shorts monetization has matured dramatically since 2023. Here are the five revenue streams
              that serious Shorts creators stack — all achievable with AI-generated content.
            </p>
            <div className="ysg-money-grid">
              <div className="ysg-money-card">
                <div className="ysg-money-icon">💰</div>
                <h3>YouTube Partner Program (YPP)</h3>
                <p>
                  Shorts now qualify for ad revenue sharing. Requirements: 1,000 subscribers + 10M Shorts views
                  in 90 days. With AI-assisted volume (10+ Shorts/week), creators hit this threshold in 2–4 months
                  instead of the traditional 12–18 months.
                </p>
                <div className="ysg-money-rate">$0.03–$0.08 per 1,000 views</div>
              </div>
              <div className="ysg-money-card">
                <div className="ysg-money-icon">🤝</div>
                <h3>Brand Sponsorships</h3>
                <p>
                  At 100K subscribers, Shorts channels command $500–$2,000 per sponsored Short. At 1M subscribers,
                  that's $5,000–$20,000 per integration. AI-generated channels in finance, tech, and health are
                  the most attractive to sponsors due to audience demographics.
                </p>
                <div className="ysg-money-rate">$500–$20,000 per sponsored Short</div>
              </div>
              <div className="ysg-money-card">
                <div className="ysg-money-icon">📦</div>
                <h3>Merchandise & Digital Products</h3>
                <p>
                  Shorts drive discovery better than any other format. Creators funnel Shorts viewers to
                  courses, ebooks, newsletters, and physical merchandise. A single viral Short can send
                  100,000 new eyes to your Gumroad or Shopify store in 48 hours.
                </p>
                <div className="ysg-money-rate">Unlimited — depends on product margin</div>
              </div>
              <div className="ysg-money-card">
                <div className="ysg-money-icon">🔁</div>
                <h3>Long-Form Funnel</h3>
                <p>
                  Shorts are discovery engines. The highest-earning strategy is using Shorts to grow your
                  subscriber base, then converting them to long-form viewers where RPM is 10–30x higher.
                  AI Shorts at scale = the most cost-effective long-form channel growth strategy available.
                </p>
                <div className="ysg-money-rate">$2–$15 RPM on long-form content</div>
              </div>
              <div className="ysg-money-card">
                <div className="ysg-money-icon">🏢</div>
                <h3>Agency & Content-as-a-Service</h3>
                <p>
                  An emerging revenue model: charging businesses $1,000–$5,000/month to manage their
                  Shorts channel using AI tools. With Scenith generating content at scale, a single operator
                  can manage 5–10 client channels simultaneously. This is the fastest path to $10K/month
                  with AI Shorts.
                </p>
                <div className="ysg-money-rate">$1,000–$5,000/month per client</div>
              </div>
              <div className="ysg-money-card">
                <div className="ysg-money-icon">🌐</div>
                <h3>Multi-Language Scaling</h3>
                <p>
                  Scenith's AI voice generator supports 20+ languages. A single channel concept can be
                  duplicated into Spanish, Portuguese, Hindi, and French channels — each monetized separately.
                  This is how AI creators multiply revenue 5–10x without creating fundamentally new content.
                </p>
                <div className="ysg-money-rate">5–10x multiplier on existing content</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Tools Breakdown ─────────────────────────────────────── */}
        <section className="ysg-section ysg-section--alt">
          <div className="ysg-container">
            <div className="ysg-section-label">INSIDE THE TOOL</div>
            <h2 className="ysg-section-title">
              What's Inside Scenith's AI YouTube Shorts Generator
            </h2>
            <p className="ysg-section-sub">
              This isn't a template tool or a slideshow generator. Scenith generates actual AI video, actual AI voice, and actual
              AI images — the same technology used by professional studios and AI research labs, made accessible in a browser tab.
            </p>
            <div className="ysg-tool-breakdown">
              <div className="ysg-tool-section">
                <div className="ysg-tool-header">
                  <span className="ysg-tool-emoji">🎬</span>
                  <div>
                    <h3>AI Video Generation for Shorts</h3>
                    <span>Text-to-Video · Image-to-Video · 9:16 Native</span>
                  </div>
                </div>
                <div className="ysg-tool-features">
                  <div className="ysg-tool-feature">
                    <span>✓</span>
                    <p><strong>Text-to-Video:</strong> Type a scene description and generate a 5–10 second cinematic video clip in 9:16 format. Supports Kling 2.6 Pro, Kling 2.5 Turbo, Veo 3.1, Veo 3.1 Fast, Wan 2.5, and Grok Imagine.</p>
                  </div>
                  <div className="ysg-tool-feature">
                    <span>✓</span>
                    <p><strong>Image-to-Video:</strong> Upload a reference image and animate it into motion. Ideal for product Shorts — photograph your product once, animate it infinitely.</p>
                  </div>
                  <div className="ysg-tool-feature">
                    <span>✓</span>
                    <p><strong>Built-in Audio (Grok Imagine):</strong> One model generates background audio alongside the video automatically. No separate audio layering needed.</p>
                  </div>
                  <div className="ysg-tool-feature">
                    <span>✓</span>
                    <p><strong>Resolution up to 1080p:</strong> Kling 2.6, Veo 3.1, and Wan 2.5 (1080p) all support full HD output for maximum Shorts quality.</p>
                  </div>
                  <div className="ysg-tool-feature">
                    <span>✓</span>
                    <p><strong>5s and 10s clips:</strong> Choose your duration. 5-second Shorts perform best for algorithm growth. 10-second Shorts are better for storytelling and watch time.</p>
                  </div>
                </div>
              </div>
              <div className="ysg-tool-section">
                <div className="ysg-tool-header">
                  <span className="ysg-tool-emoji">🎙️</span>
                  <div>
                    <h3>AI Voiceover for Shorts Narration</h3>
                    <span>40+ Voices · 20+ Languages · Instant MP3</span>
                  </div>
                </div>
                <div className="ysg-tool-features">
                  <div className="ysg-tool-feature">
                    <span>✓</span>
                    <p><strong>Google TTS:</strong> 40+ natural voices including English (US, UK, AU, IN), Spanish, French, German, Hindi, Mandarin, Arabic, and more. Filter by language and gender.</p>
                  </div>
                  <div className="ysg-tool-feature">
                    <span>✓</span>
                    <p><strong>OpenAI TTS:</strong> The most natural-sounding voices available for English narration. Ideal for motivation, storytelling, and premium Shorts content.</p>
                  </div>
                  <div className="ysg-tool-feature">
                    <span>✓</span>
                    <p><strong>Azure Neural TTS:</strong> Microsoft's neural voices — exceptional for multilingual Shorts and professional corporate-style content.</p>
                  </div>
                  <div className="ysg-tool-feature">
                    <span>✓</span>
                    <p><strong>Speed control:</strong> Adjust narration speed from 0.5x to 4.0x. Fast-paced Shorts (1.25x–1.5x) consistently outperform normal-speed narration in engagement metrics.</p>
                  </div>
                </div>
              </div>
              <div className="ysg-tool-section">
                <div className="ysg-tool-header">
                  <span className="ysg-tool-emoji">🖼️</span>
                  <div>
                    <h3>AI Thumbnail Generation</h3>
                    <span>7 Models · 9:16 Portrait Mode · High-Res PNG</span>
                  </div>
                </div>
                <div className="ysg-tool-features">
                  <div className="ysg-tool-feature">
                    <span>✓</span>
                    <p><strong>7 AI image models:</strong> GPT Image 1 (Mini and Medium), Imagen 4 Fast and Standard, FLUX 1.1 Pro, Stability AI Core, and Grok Aurora — each with distinct visual aesthetics.</p>
                  </div>
                  <div className="ysg-tool-feature">
                    <span>✓</span>
                    <p><strong>Portrait 9:16 mode:</strong> Generate thumbnails natively in 9:16 vertical format — no cropping, no quality loss, no awkward letterboxing.</p>
                  </div>
                  <div className="ysg-tool-feature">
                    <span>✓</span>
                    <p><strong>8 artistic styles:</strong> Realistic, Artistic, Anime, Digital Art, 3D Render, Fantasy, Sci-Fi, Vintage — match your Shorts aesthetic perfectly.</p>
                  </div>
                  <div className="ysg-tool-feature">
                    <span>✓</span>
                    <p><strong>Carousel mode:</strong> Generate 3 thumbnail variations simultaneously to A/B test which visual performs best for your audience.</p>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ textAlign: "center", marginTop: 40 }}>
              <a href={CTA_URL} className="ysg-cta-primary">
                <span>🎬</span>
                <div>
                  <strong>Try the Full Tool Free</strong>
                  <small>50 credits included · No credit card · 9:16 pre-loaded</small>
                </div>
                <span>→</span>
              </a>
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────── */}
        <section className="ysg-section">
          <div className="ysg-container">
            <div className="ysg-section-label">FAQ</div>
            <h2 className="ysg-section-title">
              Frequently Asked Questions About AI YouTube Shorts Generation
            </h2>
            <div className="ysg-faq">
              {[
                {
                  q: "Can AI fully automate YouTube Shorts creation?",
                  a: "AI can automate the three most time-consuming parts of Shorts creation: video production, voiceover recording, and thumbnail design. The one human element still required is your creative direction — the prompt, the niche, the hook. Think of AI as your production team; you're still the creative director.",
                },
                {
                  q: "Will YouTube penalize AI-generated Shorts?",
                  a: "No. YouTube's terms of service permit AI-generated content as long as it complies with their Community Guidelines. The platform even has a disclosure feature for AI-generated content. Millions of successful channels use AI video, AI voiceovers, and AI images as part of their production workflow.",
                },
                {
                  q: "What's the best AI model for YouTube Shorts specifically?",
                  a: "For most Shorts creators, Kling 2.6 Pro strikes the best balance of quality and cost. It produces 1080p 9:16 vertical video with strong motion and cinematic aesthetics at 64 credits per 5-second clip. If budget is a concern, Wan 2.5 at 46 credits is excellent for high-volume daily posting. For absolute top quality on hero content, use Veo 3.1.",
                },
                {
                  q: "How do I add the AI voiceover to my AI video?",
                  a: "Generate your video MP4 and voiceover MP3 separately in Scenith. Download both files. Open CapCut (free on iOS and Android), import the video, add the MP3 as an audio track, adjust timing, add auto-captions, and export. The entire process takes under 5 minutes. No subscription or advanced editing knowledge required.",
                },
                {
                  q: "How many Shorts can I generate per month?",
                  a: "On the free plan, you get 50 credits — enough for approximately 1 AI video Short (Wan 2.5 costs 46cr). Paid plans start from $1/month (Spark plan, 50 additional credits) to $9/month (Creator Lite, 300 credits/month — approximately 6 Shorts per month with Kling 2.6, or 20+ Shorts with Wan 2.5). Credits are shared across video, voice, and image generation.",
                },
                {
                  q: "Can I use AI Shorts for a faceless YouTube channel?",
                  a: "Absolutely — this is the most popular use case. Faceless channels using AI video for visuals and AI voiceover for narration are among the fastest-growing channel types on YouTube in 2026. You never appear on camera, and the AI handles every frame of your visual production.",
                },
                {
                  q: "Does Scenith support multiple languages for Shorts?",
                  a: "Yes. Scenith's AI voice generator supports 20+ languages through Google TTS, OpenAI TTS, and Azure Neural TTS. You can create the same Short in English, Spanish, Portuguese, Hindi, and Mandarin in under an hour — effectively running 5 separate monetized channels from a single content strategy.",
                },
                {
                  q: "Is the content I generate commercially usable on YouTube?",
                  a: "Yes. All content generated on Scenith comes with full commercial rights. You can monetize it through YouTube Partner Program, brand sponsorships, affiliate marketing, or any other commercial use without attribution requirements.",
                },
                {
                  q: "What video resolution does Scenith output for Shorts?",
                  a: "Scenith supports 480p, 720p, and 1080p depending on the model. For YouTube Shorts, we recommend 1080p (available on Kling 2.6, Kling 2.5, Veo 3.1, and Wan 2.5) for the sharpest feed display. Grok Imagine outputs at 720p which is still fully acceptable for the Shorts format.",
                },
                {
                  q: "How long does it take to generate a complete AI Short?",
                  a: "AI video generation: 30–120 seconds. AI voiceover: 2–4 seconds. AI thumbnail: 10–30 seconds. Total time from prompt to all three assets downloaded: approximately 2–3 minutes. Including CapCut editing and YouTube upload, your first Short can be live within 15 minutes of starting.",
                },
                {
                  q: "What's the recommended prompt length for AI Shorts generation?",
                  a: "For video prompts, 40–100 words produces the best results. Include: subject, action, environment, lighting style, mood, and camera movement. For example: 'Slow cinematic push-in shot of a lone astronaut standing on Mars, watching twin sunsets, dust swirling, epic golden light, Interstellar-style cinematography, 9:16 vertical.' The more specific your prompt, the more cinematically consistent the output.",
                },
                {
                  q: "Can I animate my own photos or images for Shorts?",
                  a: "Yes — Scenith supports image-to-video generation for compatible models. Upload a reference image, add a motion prompt describing how you want it animated, and generate a video clip. This is particularly powerful for product Shorts, where you photograph the product once and animate it in different scenarios infinitely.",
                },
              ].map((item, i) => (
                <details key={i} className="ysg-faq-item">
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── Final CTA ────────────────────────────────────────────── */}
        <section className="ysg-final-cta">
          <div className="ysg-container">
            <div className="ysg-final-cta-inner">
              <div className="ysg-final-orb ysg-final-orb-1" aria-hidden="true" />
              <div className="ysg-final-orb ysg-final-orb-2" aria-hidden="true" />
              <div className="ysg-section-label ysg-section-label--light">GET STARTED</div>
              <h2 className="ysg-final-title">
                Your First AI Short Could Be
                <br />
                <span>Live in 15 Minutes</span>
              </h2>
              <p className="ysg-final-desc">
                50 free credits on signup. No credit card. No editing software.
                No camera. Just a prompt — and the best AI video, voice, and image models on earth.
              </p>
              <div className="ysg-final-features">
                {[
                  "9:16 Shorts format pre-loaded",
                  "Kling 2.6 + Veo 3.1 + Wan 2.5",
                  "40+ AI voices, 20+ languages",
                  "7 AI thumbnail models",
                  "Full commercial rights",
                  "MP4 + MP3 + PNG download",
                ].map((f) => (
                  <span key={f} className="ysg-final-feature">
                    <span className="ysg-final-check">✓</span> {f}
                  </span>
                ))}
              </div>
              <a href={CTA_URL} className="ysg-cta-primary ysg-cta-primary--hero">
                <span className="ysg-cta-icon">🎬</span>
                <div className="ysg-cta-text">
                  <strong>Generate My YouTube Short — Free</strong>
                  <small>Opens Scenith AI Content Creator · 9:16 mode pre-selected</small>
                </div>
                <span className="ysg-cta-arrow">→</span>
              </a>
              <div className="ysg-final-trust">
                <span>🔒 No card required</span>
                <span>·</span>
                <span>⚡ Results in minutes</span>
                <span>·</span>
                <span>🌍 Works worldwide</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Related Tools ────────────────────────────────────────── */}
        <section className="ysg-section ysg-section--muted">
          <div className="ysg-container">
            <h2 className="ysg-section-title" style={{ fontSize: "1.4rem" }}>
              More AI Content Tools on Scenith
            </h2>
            <div className="ysg-related-grid">
              {[
                { href: "/create-ai-content?tab=video&utm_source=shorts_tool&utm_medium=related&utm_campaign=shorts_related", label: "🎬 AI Video Generator", desc: "Text to cinematic video with 6 AI models" },
                { href: "/create-ai-content?tab=voice&utm_source=shorts_tool&utm_medium=related&utm_campaign=shorts_related", label: "🎙️ AI Voice Generator", desc: "40+ natural voices, MP3 download" },
                { href: "/create-ai-content?tab=image&utm_source=shorts_tool&utm_medium=related&utm_campaign=shorts_related", label: "🖼️ AI Image Generator", desc: "7 models including GPT Image and Imagen 4" },
                { href: "/pricing", label: "💳 View Credit Plans", desc: "From $1/mo · 300cr on Creator Lite" },
              ].map((link) => (
                <a key={link.href} href={link.href} className="ysg-related-card">
                  <strong>{link.label}</strong>
                  <span>{link.desc}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}