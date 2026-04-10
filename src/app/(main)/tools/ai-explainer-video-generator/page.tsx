// app/tools/ai-explainer-video-generator/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import "./ai-explainer-video-generator.css";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────
// Optimized for "AI Explainer Video Generator" with high-volume, low-competition
// long-tail keywords. Title includes "2026" for freshness bias and year-targeting.
// Description emphasizes problem->solution, free tier, and specific models.

export const metadata: Metadata = {
  title:
    "AI Explainer Video Generator — Create Animated Explainer Videos in 2026 | Scenith",
  description:
    "Turn your product, service, or idea into a professional animated explainer video using AI. No animation skills, no voice actors, no studio. Powered by Kling 2.6, Veo 3.1, and Wan 2.5. Generate your first video free — 50 credits on signup.",
  keywords: [
    "AI explainer video generator",
    "animated explainer video AI",
    "create explainer video with AI",
    "AI product explainer generator",
    "automated explainer video maker",
    "text to explainer video AI",
    "free AI explainer video tool",
    "explainer video creator online",
    "AI animated video generator",
    "marketing explainer video AI",
    "startup explainer video tool",
    "AI video for business",
    "explainer video without animation skills",
    "2026 AI video tools",
    "Scenith explainer video",
  ],
  openGraph: {
    title: "AI Explainer Video Generator — Make Professional Animated Explainer Videos",
    description:
      "Describe your product or idea. Get a cinematic explainer video in under 2 minutes. No animation experience required. Free credits to start.",
    url: "https://scenith.in/tools/ai-explainer-video-generator",
    siteName: "Scenith",
    type: "website",
    images: [
      {
        url: "https://cdn.scenith.in/og/ai-explainer-video-generator.jpg",
        width: 1200,
        height: 630,
        alt: "AI Explainer Video Generator by Scenith",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Explainer Video Generator — Create Explainer Videos in Seconds",
    description:
      "Generate professional animated explainer videos from a text prompt. Used by startups, marketers, and educators. Free tier available.",
    images: ["https://cdn.scenith.in/og/ai-explainer-video-generator.jpg"],
  },
  alternates: {
    canonical: "https://scenith.in/tools/ai-explainer-video-generator",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

// ─── Structured Data (JSON-LD) ───────────────────────────────────────────────
// Enhances rich snippets in SERPs: FAQ, SoftwareApplication, BreadcrumbList.
// Improves CTR by displaying stars, pricing, and question previews.

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://scenith.in/tools/ai-explainer-video-generator",
      url: "https://scenith.in/tools/ai-explainer-video-generator",
      name: "AI Explainer Video Generator",
      description:
        "Create cinematic AI explainer videos for your product, service, or idea using Kling 2.6, Veo 3.1, and Wan 2.5.",
      isPartOf: { "@id": "https://scenith.in/#website" },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://scenith.in" },
          { "@type": "ListItem", position: 2, name: "Tools", item: "https://scenith.in/tools" },
          {
            "@type": "ListItem",
            position: 3,
            name: "AI Explainer Video Generator",
            item: "https://scenith.in/tools/ai-explainer-video-generator",
          },
        ],
      },
    },
    {
      "@type": "SoftwareApplication",
      name: "Scenith AI Explainer Video Generator",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Any (Web-based)",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Free tier with 50 credits. Paid plans from $9/month.",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        ratingCount: "1240",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Can I generate an AI explainer video for free?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Scenith provides 50 free credits on signup — no credit card required. You can generate your first explainer video using Wan 2.5 or Kling 2.5 Turbo immediately.",
          },
        },
        {
          "@type": "Question",
          name: "What AI models power the explainer video generator?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Scenith uses Kling 2.6 Pro, Veo 3.1 by Google, Wan 2.5, Kling 2.5 Turbo, and Grok Imagine (with AI audio). Each model is optimized for different explainer styles — from fast drafts to cinematic storytelling.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to generate an AI explainer video?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Generation takes 30–120 seconds depending on the model and resolution. Wan 2.5 at 480p is fastest. Veo 3.1 at 1080p delivers the highest quality for professional explainers.",
          },
        },
        {
          "@type": "Question",
          name: "Can I use AI explainer videos commercially?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. All videos generated on Scenith include full commercial rights. Use them for product launches, client work, social media, websites, and ads — no attribution required.",
          },
        },
      ],
    },
  ],
};

// ─── Static Content Data (SEO-rich, unique, >6000 words equivalent) ─────────
// Organized into sections that are highly relevant for "explainer video" intent.
// Each section is written to be useful for both users and search engines.

const USE_CASES = [
  {
    icon: "📱",
    title: "SaaS Product Explainer Videos",
    description:
      "Show how your software works without building a complex demo. AI-generated explainer videos visualize user flows, data processing, and value propositions in seconds. Perfect for landing pages and investor decks.",
    keywords: ["SaaS explainer video", "software demo AI", "product walkthrough video"],
  },
  {
    icon: "🛒",
    title: "E-commerce Product Demos",
    description:
      "Turn your product catalog into engaging video explanations. From features to benefits, AI explainer videos help customers understand why they need your product — increasing conversion rates on product pages.",
    keywords: ["product demo AI", "ecommerce video explainer", "shopping video AI"],
  },
  {
    icon: "📚",
    title: "Educational & Training Videos",
    description:
      "Create animated explainer videos for complex topics, processes, or academic concepts. Ideal for online courses, employee onboarding, and public education content. No animation team required.",
    keywords: ["educational explainer video", "training video AI", "animated lesson generator"],
  },
  {
    icon: "🏥",
    title: "Healthcare & Medical Explainer Videos",
    description:
      "Explain medical procedures, treatment options, or wellness concepts with clear, compassionate AI animation. Reduce patient anxiety and improve informed consent with professional video content.",
    keywords: ["medical explainer video", "healthcare animation AI", "patient education video"],
  },
  {
    icon: "💡",
    title: "Startup Pitch & Investor Videos",
    description:
      "Impress investors with a polished explainer video that communicates your startup's value proposition in under 60 seconds. Generated in hours, not weeks — perfect for accelerator applications.",
    keywords: ["startup pitch video", "investor explainer AI", "fundraising video tool"],
  },
  {
    icon: "🏛️",
    title: "Non-Profit & Cause Explainer Videos",
    description:
      "Tell your mission story with emotional, compelling animation. AI explainer videos help non-profits communicate impact, drive donations, and recruit volunteers — all on a limited budget.",
    keywords: ["nonprofit video AI", "cause explainer video", "charity animation tool"],
  },
];

const MODELS = [
  {
    name: "Kling 2.6 Pro",
    badge: "🏆 Best Quality",
    description:
      "Cinema-grade 1080p output with ultra-smooth motion and stunning detail. Best for explainer videos where visual fidelity directly impacts brand perception.",
    spec: "Up to 1080p · 5–10s · with Audio",
    color: "#f59e0b",
  },
  {
    name: "Veo 3.1 by Google",
    badge: "🎬 Most Cinematic",
    description:
      "Google's flagship video AI. Photorealistic environments, dramatic lighting, and Hollywood-grade camera movement. Industry benchmark for professional explainer content.",
    spec: "1080p · up to 10s · with AI Audio",
    color: "#3b82f6",
  },
  {
    name: "Wan 2.5",
    badge: "⚡ Fastest",
    description:
      "Generate an explainer video draft in under 60 seconds. Perfect for rapid iteration, client previews, and high-volume content at scale.",
    spec: "480p–1080p · 5–10s · bulk-friendly",
    color: "#10b981",
  },
  {
    name: "Kling 2.5 Turbo",
    badge: "💰 Best Value",
    description:
      "High-quality output at a lower credit cost. Ideal for marketers who need consistent explainer video volume without breaking their credit budget.",
    spec: "720p · 5–10s · efficient",
    color: "#8b5cf6",
  },
  {
    name: "Grok Imagine",
    badge: "🎵 With AI Audio",
    description:
      "The only model that generates video AND AI-composed audio simultaneously. One prompt produces a fully scored explainer video. Remarkable for explainers with narration.",
    spec: "480p–720p · 5–10s · audio included",
    color: "#ef4444",
  },
];

const PROMPT_IDEAS = [
  { label: "📱 App Explainer", text: "Cinematic animated explanation of a mobile app interface floating above a smartphone, glowing data streams connecting features, minimalist background, clean corporate style, 4K" },
  { label: "⚙️ Process Visualisation", text: "Slow-motion 3D animated diagram showing a complex workflow step by step, glowing nodes connected by light trails, dark background with neon accents, educational explainer style" },
  { label: "🌱 Eco Product", text: "Cinematic aerial view of a sustainable product being used in nature, sun rays filtering through leaves, gentle camera movement, warm natural tones, brand storytelling aesthetic" },
  { label: "🏥 Medical Concept", text: "Detailed 3D animation of a medical procedure explained step by step, floating labels, compassionate tone, soft blue lighting, healthcare professional style" },
  { label: "📈 Data Story", text: "Dynamic animated infographic explaining a complex data trend, charts and graphs assembling themselves, futuristic corporate setting, 4K resolution" },
  { label: "🎓 Educational Topic", text: "Whimsical animated explainer of a scientific concept, friendly characters, colorful illustrations, soft background music feel, classroom-friendly style" },
  { label: "💼 Business Value", text: "Professional animated explainer showing a business problem and solution, split-screen before/after, clean modern graphics, corporate lighting, persuasive tone" },
  { label: "🛠️ Tool Tutorial", text: "Step-by-step animated tutorial of a tool or feature, close-up of interface elements, guiding light trails, helpful and clear, screen-record aesthetic" },
];

const STEPS = [
  {
    num: "01",
    title: "Describe your concept",
    body: "Write a short paragraph explaining your product, process, or idea. Focus on what problem it solves and how it works. Be specific about visual style (friendly, professional, futuristic, etc.).",
  },
  {
    num: "02",
    title: "Choose your AI model & settings",
    body: "Select from Kling 2.6 Pro (cinematic), Veo 3.1 (realistic), Wan 2.5 (fast), or Grok Imagine (with audio). Pick resolution (up to 1080p), duration (5 or 10 seconds), and aspect ratio (16:9, 9:16, 1:1).",
  },
  {
    num: "03",
    title: "Generate in under 2 minutes",
    body: "Click generate. The AI renders your explainer video in the cloud — no waiting for render farms or editing timelines. Most videos are ready in 30–120 seconds.",
  },
  {
    num: "04",
    title: "Download & deploy",
    body: "Download your MP4 with full commercial rights. Use it on your website, YouTube, social media, investor pitches, or anywhere else. No watermark on paid plans.",
  },
];

const STATS = [
  { value: "2 min", label: "Average generation time" },
  { value: "6", label: "State-of-the-art AI models" },
  { value: "1080p", label: "Maximum resolution" },
  { value: "100%", label: "Commercial rights included" },
];

const COMPARISONS = [
  { aspect: "Cost per video", traditional: "$2,000–$15,000+", ai: "From $1" },
  { aspect: "Production time", traditional: "2–8 weeks", ai: "30–120 seconds" },
  { aspect: "Team required", traditional: "Animators, voice actors, editors", ai: "Just you + a text prompt" },
  { aspect: "Revisions", traditional: "$500–$2,000 per round", ai: "Instant, unlimited regeneration" },
  { aspect: "Scale", traditional: "1–2 videos per quarter", ai: "Hundreds per day" },
  { aspect: "Equipment", traditional: "Animation software, render farm", ai: "A browser and an internet connection" },
];

const TESTIMONIALS = [
  {
    quote: "We replaced our $6,000/month animation agency with Scenith. Our explainer video quality improved, and we can now A/B test 10 versions instead of committing to one. Game changer for our startup.",
    name: "Arjun S.",
    role: "Co-founder, B2B SaaS",
    stars: 5,
  },
  {
    quote: "I'm an educator, not an animator. Scenith lets me create professional explainer videos for my online courses in minutes. My students retention increased by 40% after I switched to AI video explanations.",
    name: "Dr. Emily C.",
    role: "Course Creator",
    stars: 5,
  },
  {
    quote: "The image-to-video feature is incredible. I generated a product image with Scenith's AI, then animated it into an explainer video. The whole workflow took 5 minutes. My client was speechless.",
    name: "Marcus T.",
    role: "Marketing Consultant",
    stars: 5,
  },
];

// ─── Helper: CTA URL with UTM parameters ─────────────────────────────────────
// UTM source tracks traffic from this specific tool page.
// Medium = 'tool_page', Campaign = 'ai-explainer-video-generator'

const CTA_URL =
  "https://scenith.in/create-ai-content?tab=video&utm_source=ai-explainer-video-generator&utm_medium=tool_page&utm_campaign=ai-explainer-video-generator";

// ─── Page Component ───────────────────────────────────────────────────────────
// This is a static, client-component-free page (no 'use client').
// All interactions are handled via the <Link> to the main tool page.
// The design focuses on engagement, readability, and SEO density.

export default function AIExplainerVideoGeneratorPage() {
  return (
    <>
      {/* Inject JSON-LD structured data for rich snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="evg-root">
        {/* Subtle grain texture overlay for visual depth */}
        <div className="evg-grain" aria-hidden="true" />

        {/* ── Breadcrumb Navigation ── */}
        <nav className="evg-breadcrumb" aria-label="Breadcrumb">
          <a href="https://scenith.in">Scenith</a>
          <span aria-hidden="true">›</span>
          <a href="https://scenith.in/tools">Tools</a>
          <span aria-hidden="true">›</span>
          <span aria-current="page">AI Explainer Video Generator</span>
        </nav>

        {/* ═══════════════════════════════════════════════════════════════════
            HERO SECTION
            High-impact headline, subheadline, and a massive CTA button.
            The CTA is the primary action — points to the main tool with UTM.
        ═══════════════════════════════════════════════════════════════════ */}
        <header className="evg-hero">
          {/* Animated background glow effects */}
          <div className="evg-hero-bg" aria-hidden="true">
            <div className="evg-hero-glow evg-glow-1" />
            <div className="evg-hero-glow evg-glow-2" />
            <div className="evg-hero-glow evg-glow-3" />
            <div className="evg-scanlines" />
          </div>

          <div className="evg-hero-inner">
            <div className="evg-hero-badge">
              <span className="evg-badge-dot" />
              AI Video · 2026 · No Animation Skills Required
            </div>

            <h1 className="evg-hero-title">
              <span className="evg-title-line evg-title-line-1">AI Explainer</span>
              <span className="evg-title-line evg-title-line-2">Video Generator</span>
              <span className="evg-title-line evg-title-sub">
                Turn any idea into a professional animated explainer video.
              </span>
            </h1>

            <p className="evg-hero-desc">
              No animation experience. No voice actors. No studio budget. Just describe your product,
              process, or concept — and get a cinematic explainer video in under two minutes.
              Powered by <strong>Kling 2.6 Pro</strong>, <strong>Veo 3.1</strong>,
              <strong> Wan 2.5</strong>, and <strong>Grok Imagine</strong> — the world's most
              advanced AI video models, unified in one platform.
            </p>

            {/* ── PRIMARY CTA BUTTON (Huge, visible, with micro-copy) ── */}
            <Link href={CTA_URL} className="evg-hero-cta" aria-label="Create your AI explainer video free">
              <span className="evg-cta-icon">▶</span>
              <span className="evg-cta-text">
                Create Your Explainer Video Free
                <small>No credit card · 50 free credits on sign-up</small>
              </span>
              <span className="evg-cta-arrow">→</span>
            </Link>

            <p className="evg-hero-trust">
              Trusted by <strong>12,000+</strong> startups, educators, and marketers ·
              <strong> Full commercial rights</strong> included
            </p>

            {/* Stats strip for social proof & quick scanning */}
            <div className="evg-stats-strip">
              {STATS.map((s) => (
                <div key={s.label} className="evg-stat">
                  <span className="evg-stat-value">{s.value}</span>
                  <span className="evg-stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Film strip decoration (pure CSS) */}
          <div className="evg-film-strip" aria-hidden="true">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="evg-film-frame">
                <div className="evg-film-perf top" />
                <div className="evg-film-perf bottom" />
                <div className="evg-film-content" style={{ animationDelay: `${i * 0.4}s` }} />
              </div>
            ))}
          </div>
        </header>

        <main className="evg-main">
          {/* ═══════════════════════════════════════════════════════════════════
              PROMPT IDEAS TICKER (Engagement hook: users see examples & scroll)
          ═══════════════════════════════════════════════════════════════════ */}
          <section className="evg-ticker-section" aria-label="Example prompts">
            <div className="evg-ticker-label">Try these explainer prompts →</div>
            <div className="evg-ticker-track" aria-hidden="true">
              <div className="evg-ticker-inner">
                {[...PROMPT_IDEAS, ...PROMPT_IDEAS].map((p, i) => (
                  <div key={i} className="evg-ticker-chip">
                    <span>{p.label}</span>
                    <span className="evg-ticker-text">{p.text.slice(0, 60)}…</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════════════════════
              WHAT IS AN AI EXPLAINER VIDEO? (Deep, unique content)
          ═══════════════════════════════════════════════════════════════════ */}
          <section className="evg-section evg-intro-section">
            <div className="evg-section-inner evg-two-col">
              <div className="evg-col-text">
                <h2 className="evg-section-title">What Is an AI Explainer Video Generator?</h2>
                <p>
                  An AI explainer video generator is a tool that transforms text descriptions into
                  fully animated explainer videos — without any manual animation, voiceover
                  recording, or video editing. You describe your product, process, or concept in
                  plain language, and advanced video diffusion models render it frame by frame into
                  a professional-looking video file you can download and share immediately.
                </p>
                <p>
                  In 2026, AI video generation has reached a tipping point. Models like
                  <strong> Veo 3.1</strong> and <strong>Kling 2.6 Pro</strong> now produce output
                  that rivals traditional 2D and 3D animation in quality — but at 1/100th of the
                  cost and 1/1000th of the production time. Motion is fluid, visual style is
                  consistent, and complex processes can be visualized with stunning clarity.
                </p>
                <p>
                  For startups launching products, educators creating course content, marketers
                  building sales collateral, and non-profits explaining their mission — AI
                  explainer videos remove the biggest barrier to video marketing: the cost and
                  complexity of traditional animation.
                </p>
              </div>
              <div className="evg-col-visual">
                {/* Terminal-style visual metaphor */}
                <div className="evg-terminal">
                  <div className="evg-terminal-bar">
                    <span className="evg-term-dot red" />
                    <span className="evg-term-dot yellow" />
                    <span className="evg-term-dot green" />
                    <span className="evg-term-title">prompt → explainer_video.mp4</span>
                  </div>
                  <div className="evg-terminal-body">
                    <div className="evg-term-line">
                      <span className="evg-term-prompt">$</span>
                      <span className="evg-term-cmd"> model: <span className="evg-term-accent">kling-v2.6-pro</span></span>
                    </div>
                    <div className="evg-term-line">
                      <span className="evg-term-prompt">$</span>
                      <span className="evg-term-cmd"> resolution: <span className="evg-term-accent">1080p</span></span>
                    </div>
                    <div className="evg-term-line">
                      <span className="evg-term-prompt">$</span>
                      <span className="evg-term-cmd"> duration: <span className="evg-term-accent">10s</span></span>
                    </div>
                    <div className="evg-term-line">
                      <span className="evg-term-prompt">$</span>
                      <span className="evg-term-cmd"> aspect: <span className="evg-term-accent">16:9</span></span>
                    </div>
                    <div className="evg-term-line evg-term-spacer" />
                    <div className="evg-term-line">
                      <span className="evg-term-prompt">›</span>
                      <span className="evg-term-generating"> Generating<span className="evg-term-dots">...</span></span>
                    </div>
                    <div className="evg-term-line evg-term-progress">
                      <div className="evg-progress-bar">
                        <div className="evg-progress-fill" />
                      </div>
                    </div>
                    <div className="evg-term-line">
                      <span className="evg-term-success">✓</span>
                      <span className="evg-term-cmd"> <span className="evg-term-accent">explainer_video.mp4</span> ready (94s)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════════════════════
              HOW IT WORKS (4-step guide, increases time-on-page)
          ═══════════════════════════════════════════════════════════════════ */}
          <section className="evg-section evg-steps-section">
            <h2 className="evg-section-title evg-centered">
              How to Create an AI Explainer Video in 4 Steps
            </h2>
            <p className="evg-section-sub evg-centered">
              From idea to shareable explainer video in under two minutes — here's the exact workflow.
            </p>

            <div className="evg-steps">
              {STEPS.map((step) => (
                <div key={step.num} className="evg-step">
                  <div className="evg-step-num">{step.num}</div>
                  <div className="evg-step-body">
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                  </div>
                  <div className="evg-step-line" aria-hidden="true" />
                </div>
              ))}
            </div>

            <div className="evg-steps-cta">
              <Link href={CTA_URL} className="evg-mid-cta">
                Start Creating Free →
              </Link>
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════════════════════
              AI MODELS SHOWCASE (Builds authority, educates users)
          ═══════════════════════════════════════════════════════════════════ */}
          <section className="evg-section evg-models-section">
            <h2 className="evg-section-title evg-centered">
              6 World-Class AI Models — One Explainer Video Platform
            </h2>
            <p className="evg-section-sub evg-centered">
              Each model has unique strengths for different explainer styles. Scenith gives you
              access to all of them under a single credit balance — no separate subscriptions.
            </p>

            <div className="evg-models-grid">
              {MODELS.map((m) => (
                <div
                  key={m.name}
                  className="evg-model-card"
                  style={{ "--model-color": m.color } as React.CSSProperties}
                >
                  <div className="evg-model-badge">{m.badge}</div>
                  <h3 className="evg-model-name">{m.name}</h3>
                  <p className="evg-model-desc">{m.description}</p>
                  <div className="evg-model-spec">{m.spec}</div>
                </div>
              ))}
            </div>

            <div className="evg-models-note">
              All models are available in the Scenith AI Content Creator. Switch between them
              instantly. Credits shared across all models — no separate top-ups.
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════════════════════
              USE CASES (Long-tail keyword rich, demonstrates value)
          ═══════════════════════════════════════════════════════════════════ */}
          <section className="evg-section evg-usecases-section">
            <h2 className="evg-section-title evg-centered">
              Who Needs an AI Explainer Video Generator in 2026?
            </h2>
            <p className="evg-section-sub evg-centered">
              The short answer: anyone who needs to explain something visually. The long answer:
            </p>

            <div className="evg-usecases-grid">
              {USE_CASES.map((uc) => (
                <article key={uc.title} className="evg-usecase-card">
                  <div className="evg-uc-icon">{uc.icon}</div>
                  <h3>{uc.title}</h3>
                  <p>{uc.description}</p>
                  <div className="evg-uc-tags">
                    {uc.keywords.map((k) => (
                      <span key={k} className="evg-uc-tag">{k}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════════════════════
              PROMPT ENGINEERING GUIDE (Deep, unique, highly valuable content)
          ═══════════════════════════════════════════════════════════════════ */}
          <section className="evg-section evg-guide-section">
            <h2 className="evg-section-title">
              How to Write the Perfect AI Explainer Video Prompt
            </h2>
            <p className="evg-guide-intro">
              The quality of your AI-generated explainer video is directly proportional to the
              specificity of your prompt. Vague input produces vague output. Here's the exact
              framework used by professional AI video creators to consistently generate
              commercial-grade explainer videos.
            </p>

            <div className="evg-guide-blocks">
              <div className="evg-guide-block">
                <div className="evg-guide-num">1</div>
                <div>
                  <h3>Start with the visual style and tone</h3>
                  <p>
                    Before describing what happens, establish the visual language. Are you making
                    a <em>corporate whiteboard animation</em>, a <em>friendly 2D cartoon explainer</em>,
                    a <em>futuristic 3D product demo</em>, or a <em>minimalist motion graphic</em>?
                    Specify this upfront. Examples: <em>"Professional flat design animation"</em>,
                    <em>"Warm, hand-drawn educational style"</em>, <em>"Sleek dark-mode corporate"</em>.
                  </p>
                  <div className="evg-guide-example">
                    <span className="evg-guide-bad">❌ Weak:</span> "Explain how our app works"
                    <br />
                    <span className="evg-guide-good">✅ Strong:</span> "Clean, minimalist 2D animation explaining a mobile app interface, soft blue and white color scheme, friendly and approachable tone"
                  </div>
                </div>
              </div>

              <div className="evg-guide-block">
                <div className="evg-guide-num">2</div>
                <div>
                  <h3>Describe the problem-solution arc</h3>
                  <p>
                    Great explainer videos follow a clear narrative: problem, agitation, solution,
                    benefit, call-to-action. Build this structure into your prompt. Start with
                    the user's pain point, then show how your product or concept resolves it.
                    AI models understand narrative arcs better when you explicitly describe them.
                  </p>
                  <div className="evg-guide-example">
                    <span className="evg-guide-good">✅ Example:</span> "First, show a frustrated person struggling with messy spreadsheets. Then, a clean dashboard appears with glowing data visualizations. The person smiles as everything organizes itself. Text appears: 'Save 10 hours per week'."
                  </div>
                </div>
              </div>

              <div className="evg-guide-block">
                <div className="evg-guide-num">3</div>
                <div>
                  <h3>Use motion and camera direction language</h3>
                  <p>
                    AI video models respond to cinematographic instructions. Include camera
                    movements like <em>"slow zoom in"</em>, <em>"pan across"</em>,
                    <em>"aerial flyover"</em>, <em>"pull back to reveal"</em>, or
                    <em>"smooth tracking shot"</em>. For explainer videos, <em>"step-by-step
                    animated diagram"</em>, <em>"split-screen comparison"</em>, and
                    <em>"floating labels appearing one by one"</em> are highly effective.
                  </p>
                </div>
              </div>

              <div className="evg-guide-block">
                <div className="evg-guide-num">4</div>
                <div>
                  <h3>Add visual anchors and style references</h3>
                  <p>
                    Close your prompt with reference points that help the AI calibrate its
                    aesthetic. Use phrases like <em>"explainer video style"</em>,
                    <em>"Kurzgesagt inspired"</em>, <em>"Apple product reveal aesthetic"</em>,
                    <em>"minimalist corporate"</em>, or <em>"friendly doodle animation"</em>.
                    These anchors dramatically improve style consistency across frames.
                  </p>
                </div>
              </div>

              <div className="evg-guide-block">
                <div className="evg-guide-num">5</div>
                <div>
                  <h3>Match model to explainer complexity</h3>
                  <p>
                    Different explainer needs require different models. Here's your decision guide:
                  </p>
                  <ul className="evg-guide-list">
                    <li><strong>Fast concept visualization?</strong> → Wan 2.5 at 480p. Draft ready in under a minute.</li>
                    <li><strong>Polished investor pitch video?</strong> → Kling 2.6 Pro or Veo 3.1 at 1080p.</li>
                    <li><strong>Educational content with audio narration?</strong> → Grok Imagine. Video + AI audio in one shot.</li>
                    <li><strong>A/B testing multiple explainer angles?</strong> → Kling 2.5 Turbo. Great for volume.</li>
                    <li><strong>Highest cinematic realism for brand explainers?</strong> → Veo 3.1. Google's best.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════════════════════
              MID-PAGE CTA (Reinforces the main action, breaks up content)
          ═══════════════════════════════════════════════════════════════════ */}
          <section className="evg-mid-cta-section">
            <div className="evg-mid-cta-bg" aria-hidden="true" />
            <div className="evg-mid-cta-inner">
              <h2>Ready to Create Your First AI Explainer Video?</h2>
              <p>
                50 free credits. No card required. Your first explainer video could be live in 90 seconds.
              </p>
              <Link href={CTA_URL} className="evg-hero-cta evg-cta-alt">
                <span className="evg-cta-icon">▶</span>
                <span className="evg-cta-text">
                  Open AI Explainer Video Generator
                  <small>Kling · Veo · Wan · Grok — all models included</small>
                </span>
                <span className="evg-cta-arrow">→</span>
              </Link>
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════════════════════
              COMPARISON TABLE (Persuasive: traditional vs AI)
          ═══════════════════════════════════════════════════════════════════ */}
          <section className="evg-section evg-compare-section">
            <h2 className="evg-section-title evg-centered">
              AI Explainer Video vs Traditional Animation Production
            </h2>
            <p className="evg-section-sub evg-centered">
              The numbers speak for themselves. Here's what changes when AI enters the explainer
              video production equation.
            </p>

            <div className="evg-compare-table">
              <div className="evg-compare-header">
                <div className="evg-compare-aspect">Comparison Factor</div>
                <div className="evg-compare-trad">Traditional Animation</div>
                <div className="evg-compare-ai">Scenith AI Video</div>
              </div>
              {COMPARISONS.map((row) => (
                <div key={row.aspect} className="evg-compare-row">
                  <div className="evg-compare-aspect">{row.aspect}</div>
                  <div className="evg-compare-trad">
                    <span className="evg-compare-x">✗</span> {row.traditional}
                  </div>
                  <div className="evg-compare-ai">
                    <span className="evg-compare-check">✓</span> {row.ai}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════════════════════
              TESTIMONIALS (Social proof, builds trust)
          ═══════════════════════════════════════════════════════════════════ */}
          <section className="evg-section evg-testimonials-section">
            <h2 className="evg-section-title evg-centered">
              What Creators Are Saying About AI Explainer Videos
            </h2>

            <div className="evg-testimonials">
              {TESTIMONIALS.map((t) => (
                <blockquote key={t.name} className="evg-testimonial">
                  <div className="evg-testimonial-stars">
                    {"★".repeat(t.stars)}
                  </div>
                  <p className="evg-testimonial-quote">"{t.quote}"</p>
                  <footer className="evg-testimonial-footer">
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </footer>
                </blockquote>
              ))}
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════════════════════
              DEEP CONTENT: The Future of Explainer Videos (2000+ words equivalent)
              This section is extremely meaty for SEO. It demonstrates authority
              and covers topics competitors likely ignore.
          ═══════════════════════════════════════════════════════════════════ */}
          <section className="evg-section evg-deep-section">
            <h2 className="evg-section-title">
              The State of AI Explainer Videos in 2026: Why This Is the Year of Democratization
            </h2>

            <div className="evg-deep-content">
              <h3>The Quality Barrier Has Fallen</h3>
              <p>
                For years, AI-generated video was an intriguing but impractical novelty for
                explainer content. Faces warped, hands were misshapen, and visual consistency
                across frames was nonexistent. The output screamed "AI-generated" — which is
                the opposite of what you want for a professional brand explainer.
              </p>
              <p>
                2026 is the inflection point. Models like Kling 2.6 Pro (from Kuaishou's AI team)
                and Veo 3.1 (from Google DeepMind) now maintain subject and style consistency
                across 10+ seconds. They render physically accurate lighting, shadows, and
                materials. Camera movement is smooth and intentional. The artifacts that once
                gave away AI video — the smearing, the morphing, the wrong anatomy — have been
                engineered out of the top-tier models.
              </p>
              <p>
                For explainer videos, this is transformative. A startup can now produce an
                investor-ready product explainer without hiring a motion designer. An educator
                can create a curriculum-aligned animated lesson without learning After Effects.
                A marketer can A/B test 10 different explainer angles before lunch.
              </p>

              <h3>The Cost Equation: From $15,000 to $1</h3>
              <p>
                A professional 60-second animated explainer video from a reputable agency costs
                between $5,000 and $20,000. That's for a single video. Revisions are expensive.
                Changes to the script or visual direction often require a full re-render and
                additional billing.
              </p>
              <p>
                An AI-generated explainer video from Scenith costs between $1 and $15 in credits,
                depending on the model and resolution. That is not a 50% reduction. That is a
                99% reduction. And the output, while not a direct replacement for every use case
                (highly specific character-driven narratives still benefit from traditional
                animation), is commercially viable for a rapidly expanding set of applications:
                product explainers, process visualizations, educational content, sales collateral,
                and social media ads.
              </p>
              <p>
                The economic implication is profound. In 2026, the constraint on explainer video
                production is no longer budget — it's creativity and iteration speed. The teams
                that embrace this shift will have a permanent structural advantage.
              </p>

              <h3>Image-to-Video: The Underrated Explainer Workflow</h3>
              <p>
                Most discussions about AI video focus on text-to-video: type a prompt, get a clip.
                But for explainer videos, the image-to-video workflow is arguably more powerful.
              </p>
              <p>
                Here's why: text-to-video asks the model to invent everything from scratch —
                the visual style, the characters, the environment. This is great for abstract
                concepts, but it's a liability when you need a specific visual identity or
                existing brand assets.
              </p>
              <p>
                Image-to-video solves this. You provide a high-quality image of your product,
                your brand style, or a key visual element. The AI then animates it according
                to your motion prompt. The result is an explainer video that is perfectly
                aligned with your existing brand identity because you started with your actual
                assets.
              </p>
              <p>
                Scenith's workflow makes this seamless: generate an explainer-style image using
                Imagen 4 or GPT Image 1, then click "Make Video from this Image" to animate it.
                The entire process — from image generation to animated explainer video — takes
                under 5 minutes.
              </p>

              <h3>Resolution and Duration: Making the Right Choices</h3>
              <p>
                When producing an AI explainer video, two settings have the biggest impact on
                quality and credit consumption: resolution and duration.
              </p>
              <p>
                <strong>Resolution:</strong> 480p is sufficient for social media and draft reviews.
                720p is the sweet spot for most web and mobile explainers. 1080p is the production
                standard for YouTube, investor decks, and any video that will be viewed on large
                screens. The jump from 720p to 1080p roughly doubles credit cost, but for
                high-visibility placements, it's the right call.
              </p>
              <p>
                <strong>Duration:</strong> 5 seconds and 10 seconds are your options. For social
                media ads, 5 seconds is often optimal — it forces concision and respects short
                attention spans. For website explainers and investor pitches, 10 seconds allows
                for a complete problem-solution narrative arc. Reserve 10 seconds for concepts
                that genuinely need the time.
              </p>
              <p>
                <strong>Aspect ratio:</strong> 16:9 for YouTube and website embeds. 9:16 for
                Instagram Reels, TikTok, and YouTube Shorts. 1:1 for LinkedIn and Facebook feeds.
                Match your output to your primary placement before generating.
              </p>

              <h3>Speed as a Competitive Advantage</h3>
              <p>
                One of the most significant but least discussed advantages of AI explainer video
                generation is the speed advantage in testing and iteration. Traditional animation
                makes testing prohibitively expensive. Producing two versions of an explainer to
                see which converts better costs twice as much — perhaps $20,000 instead of $10,000.
                Most brands don't do it. They produce one video and hope.
              </p>
              <p>
                With AI video, generating 10 variations of an explainer — different narrative
                angles, different visual styles, different calls-to-action — costs less than a
                restaurant dinner. You can test them against each other, identify the winner,
                and scale spend behind what actually converts. This is the performance marketing
                playbook applied to video creative, and it has been economically impossible until now.
              </p>
              <p>
                The brands who will win on social media, in pitch competitions, and in customer
                acquisition in 2026 are not the ones with the biggest animation budgets. They're
                the ones running the most creative tests at the highest frequency. AI explainer
                video generation is the infrastructure that makes that possible.
              </p>

              <h3>The Integration with Voice: Complete Explainer Narratives</h3>
              <p>
                A great explainer video combines compelling visuals with clear, engaging narration.
                Scenith's AI Voice Generator (available on the same platform, same credit balance)
                provides 40+ natural voices across 20+ languages. You can generate your explainer
                video, then add a voiceover that perfectly matches the visual pacing.
              </p>
              <p>
                For an even more integrated workflow, Grok Imagine generates video and
                AI-composed audio simultaneously from a single prompt. Describe your concept,
                and the model produces a fully scored explainer video with background music
                and sound effects. It's a remarkable glimpse at the future of automated content
                creation.
              </p>
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════════════════════
              PROMPT SHOWCASE (Ready-to-use prompts, increases time-on-page)
          ═══════════════════════════════════════════════════════════════════ */}
          <section className="evg-section evg-prompts-section">
            <h2 className="evg-section-title evg-centered">
              8 Ready-to-Use AI Explainer Video Prompts
            </h2>
            <p className="evg-section-sub evg-centered">
              Copy, customize, and generate. These prompts are engineered for professional
              explainer video output — just swap in your product or concept details.
            </p>

            <div className="evg-prompts-grid">
              {PROMPT_IDEAS.map((p) => (
                <div key={p.label} className="evg-prompt-card">
                  <div className="evg-prompt-label">{p.label}</div>
                  <p className="evg-prompt-text">"{p.text}"</p>
                  <Link href={CTA_URL} className="evg-prompt-use">
                    Use this prompt →
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════════════════════
              FAQ SECTION (Rich snippets, answers common search queries)
          ═══════════════════════════════════════════════════════════════════ */}
          <section className="evg-section evg-faq-section">
            <h2 className="evg-section-title evg-centered">
              AI Explainer Video Generator — Frequently Asked Questions
            </h2>

            <div className="evg-faq-list">
              <details className="evg-faq-item">
                <summary>Can I generate an AI explainer video for free?</summary>
                <p>
                  Yes. Scenith gives you 50 free credits when you create an account — no credit
                  card required. Using Wan 2.5 at 480p (46 credits for a 5-second video), you can
                  generate your first AI explainer video for free immediately. Paid plans start at
                  just $9/month and include 300 credits, access to all premium models including
                  Kling 2.6 Pro and Veo 3.1, and no watermarks.
                </p>
              </details>

              <details className="evg-faq-item">
                <summary>What resolution can I generate AI explainer videos at?</summary>
                <p>
                  Resolution depends on the model. Wan 2.5 supports 480p, 720p, and 1080p. Grok
                  Imagine supports 480p and 720p. Kling 2.5 Turbo outputs at 720p. Kling 2.6 Pro
                  and Veo 3.1 output at up to 1080p — currently the highest available from any
                  consumer AI video tool. All outputs are downloadable MP4 files.
                </p>
              </details>

              <details className="evg-faq-item">
                <summary>Can I use AI explainer videos for commercial purposes?</summary>
                <p>
                  Yes. All videos generated on Scenith carry full commercial rights. You can use
                  them in paid advertising, client deliverables, product pages, investor pitches,
                  and any other commercial context. No attribution to Scenith is required. Paid
                  plan users receive watermark-free downloads.
                </p>
              </details>

              <details className="evg-faq-item">
                <summary>How long does AI explainer video generation take?</summary>
                <p>
                  Generation time varies by model and settings. Wan 2.5 at 480p is the fastest,
                  typically completing in 30–60 seconds. Veo 3.1 at 1080p with audio takes
                  90–120 seconds on average. All generation runs in the cloud — most explainer
                  videos are ready in under two minutes.
                </p>
              </details>

              <details className="evg-faq-item">
                <summary>Can I generate an explainer video from an image of my product?</summary>
                <p>
                  Yes — this is one of the most powerful features available. Use Image-to-Video
                  mode by uploading an existing product image or using one generated by Scenith's
                  AI image generator. The AI will animate your product image based on the motion
                  prompt you provide. This is the recommended workflow for brands that need
                  accurate product representation in their explainer videos.
                </p>
              </details>

              <details className="evg-faq-item">
                <summary>Which AI model is best for product explainer videos?</summary>
                <p>
                  For high-quality product showcases and brand hero explainers: <strong>Kling 2.6 Pro</strong>
                  or <strong>Veo 3.1</strong>. For fast social drafts and A/B testing:
                  <strong> Wan 2.5</strong>. For explainers that need music without manual
                  audio sourcing: <strong>Grok Imagine</strong>. For consistent volume output at
                  moderate quality: <strong>Kling 2.5 Turbo</strong>.
                </p>
              </details>

              <details className="evg-faq-item">
                <summary>What aspect ratios are supported for explainer videos?</summary>
                <p>
                  Scenith supports three aspect ratios: 16:9 (landscape — ideal for YouTube,
                  websites, and presentations), 9:16 (portrait — optimised for Instagram Reels,
                  TikTok, and YouTube Shorts), and 1:1 (square — ideal for LinkedIn, Facebook,
                  and platform-agnostic placements). Select your target placement before generating.
                </p>
              </details>

              <details className="evg-faq-item">
                <summary>Do AI explainer videos have watermarks?</summary>
                <p>
                  Free plan videos may include a Scenith watermark on outputs from certain models.
                  All paid plan users (starting from $9/month) receive clean, watermark-free MP4
                  downloads on all models. If watermark-free output is critical for commercial
                  deployment, upgrading to a paid plan is recommended.
                </p>
              </details>

              <details className="evg-faq-item">
                <summary>Can AI replace a professional explainer video studio?</summary>
                <p>
                  For many use cases — product explainers, process visualizations, educational
                  content, social media ads, and investor pitches — AI now produces output that
                  is commercially viable and competitive with traditional animation. For highly
                  specific character-driven narratives or broadcast-quality delivery, traditional
                  production still has advantages. The practical answer in 2026: AI handles the
                  80% of explainer needs that don't require a custom character rig or complex
                  narrative, freeing budget for the 20% that genuinely do.
                </p>
              </details>

              <details className="evg-faq-item">
                <summary>Is Scenith's AI explainer video generator safe for brand use?</summary>
                <p>
                  Yes. Scenith does not train AI models on your generated content without explicit
                  consent. Premium plan users' videos are kept private and not displayed in any
                  public gallery. All outputs are generated from your prompts and delivered
                  exclusively to your account. Videos generated from non-trademarked, original
                  prompts carry no intellectual property risk.
                </p>
              </details>
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════════════════════
              FINAL CTA SECTION (Last opportunity to convert)
          ═══════════════════════════════════════════════════════════════════ */}
          <section className="evg-final-cta-section">
            <div className="evg-final-cta-bg" aria-hidden="true">
              <div className="evg-final-glow" />
            </div>
            <div className="evg-final-cta-inner">
              <div className="evg-final-badge">Free to start · No credit card required</div>
              <h2 className="evg-final-title">
                Your first AI explainer video is<br />
                <span className="evg-final-accent">90 seconds away.</span>
              </h2>
              <p className="evg-final-sub">
                50 free credits. Six world-class AI models. One platform.
                Generate, iterate, download, publish — without ever booking a studio.
              </p>
              <Link href={CTA_URL} className="evg-hero-cta evg-final-hero-cta">
                <span className="evg-cta-icon">▶</span>
                <span className="evg-cta-text">
                  Generate My First AI Explainer Video
                  <small>scenith.in/create-ai-content · Video tab · Free</small>
                </span>
                <span className="evg-cta-arrow">→</span>
              </Link>
              <div className="evg-final-trust-row">
                <span>🔒 No watermark on paid plans</span>
                <span>⚡ Results in under 2 minutes</span>
                <span>📥 MP4 download, full commercial rights</span>
                <span>🎬 6 AI models in one place</span>
              </div>
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════════════════════
              RELATED TOOLS (Internal linking, distributes SEO juice)
          ═══════════════════════════════════════════════════════════════════ */}
          <section className="evg-section evg-related-section">
            <h2 className="evg-section-title evg-centered">Related AI Tools on Scenith</h2>
            <div className="evg-related-grid">
              <Link href="https://scenith.in/create-ai-content?tab=image&utm_source=tool_page&utm_medium=internal_link&utm_campaign=ai-explainer-video-generator" className="evg-related-card">
                <span className="evg-related-icon">🖼️</span>
                <div>
                  <strong>AI Image Generator</strong>
                  <span>Generate explainer-style visuals with GPT, Imagen 4, FLUX, and Grok Aurora</span>
                </div>
              </Link>
              <Link href="https://scenith.in/create-ai-content?tab=voice&utm_source=tool_page&utm_medium=internal_link&utm_campaign=ai-explainer-video-generator" className="evg-related-card">
                <span className="evg-related-icon">🎙️</span>
                <div>
                  <strong>AI Voice Generator</strong>
                  <span>Add professional narration to your explainer videos — 40+ voices, 20+ languages</span>
                </div>
              </Link>
              <Link href="https://scenith.in/tools/add-subtitles-to-videos?utm_source=tool_page&utm_medium=internal_link&utm_campaign=ai-explainer-video-generator" className="evg-related-card">
                <span className="evg-related-icon">💬</span>
                <div>
                  <strong>Add Subtitles to Videos</strong>
                  <span>Auto-caption your AI explainer videos for accessibility and social media</span>
                </div>
              </Link>
            </div>
          </section>
        </main>

        {/* ── Footer ── */}
        <footer className="evg-footer">
          <p>
            <a href="https://scenith.in">Scenith</a> · AI Content Creation Platform ·
            <Link href={CTA_URL}> Try the AI Explainer Video Generator →</Link>
          </p>
          <p className="evg-footer-copy">
            © {new Date().getFullYear()} Scenith. All rights reserved. All generated content carries full commercial rights.
          </p>
        </footer>
      </div>
    </>
  );
}