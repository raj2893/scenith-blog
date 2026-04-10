// app/tools/ai-tutorial-video-generator/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import "./ai-tutorial-video-generator.css";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────
// Highly optimized for "AI tutorial video generator" with long-tail variations.
// Includes "2026" for freshness, "step-by-step", "how-to", "educational".
// Targets educators, course creators, software companies, and DIY creators.

export const metadata: Metadata = {
  title:
    "AI Tutorial Video Generator — Create Step-by-Step Tutorials in 2026 | Scenith",
  description:
    "Generate professional how-to tutorial videos with AI. No screen recording, no voiceover setup, no editing. Perfect for software tutorials, DIY guides, and educational content. Powered by Kling 2.6, Veo 3.1, Wan 2.5. Start free — 50 credits on signup.",
  keywords: [
    "AI tutorial video generator",
    "create tutorial videos with AI",
    "AI how-to video maker",
    "step-by-step tutorial generator",
    "AI educational video creator",
    "software tutorial AI generator",
    "DIY tutorial video AI",
    "automated tutorial maker",
    "text to tutorial video",
    "AI training video generator",
    "how-to video AI 2026",
    "instructional video AI",
    "AI video for courses",
    "tutorial video creator online",
    "Scenith tutorial generator",
  ],
  openGraph: {
    title: "AI Tutorial Video Generator — Create Step-by-Step How-To Videos Instantly",
    description:
      "Describe your tutorial. Get a professional instructional video in under 2 minutes. Perfect for software demos, DIY projects, and online courses.",
    url: "https://scenith.in/tools/ai-tutorial-video-generator",
    siteName: "Scenith",
    type: "website",
    images: [
      {
        url: "https://cdn.scenith.in/og/ai-tutorial-video-generator.jpg",
        width: 1200,
        height: 630,
        alt: "AI Tutorial Video Generator by Scenith",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Tutorial Video Generator — Create How-To Videos in Seconds",
    description:
      "Generate professional tutorial videos from a text prompt. Used by educators, software companies, and content creators. Free tier available.",
    images: ["https://cdn.scenith.in/og/ai-tutorial-video-generator.jpg"],
  },
  alternates: {
    canonical: "https://scenith.in/tools/ai-tutorial-video-generator",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

// ─── Structured Data (JSON-LD) ───────────────────────────────────────────────
// Rich snippets for FAQ, SoftwareApplication, BreadcrumbList.
// Improves CTR by showing stars, pricing, and question previews in SERPs.

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://scenith.in/tools/ai-tutorial-video-generator",
      url: "https://scenith.in/tools/ai-tutorial-video-generator",
      name: "AI Tutorial Video Generator",
      description:
        "Create step-by-step AI tutorial videos for software, DIY projects, and educational content using Kling 2.6, Veo 3.1, and Wan 2.5.",
      isPartOf: { "@id": "https://scenith.in/#website" },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://scenith.in" },
          { "@type": "ListItem", position: 2, name: "Tools", item: "https://scenith.in/tools" },
          {
            "@type": "ListItem",
            position: 3,
            name: "AI Tutorial Video Generator",
            item: "https://scenith.in/tools/ai-tutorial-video-generator",
          },
        ],
      },
    },
    {
      "@type": "SoftwareApplication",
      name: "Scenith AI Tutorial Video Generator",
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
        ratingValue: "4.9",
        ratingCount: "845",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Can I generate a tutorial video with AI for free?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Scenith provides 50 free credits on signup — no credit card required. You can generate your first tutorial video using Wan 2.5 or Kling 2.5 Turbo immediately.",
          },
        },
        {
          "@type": "Question",
          name: "What AI models power the tutorial video generator?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Scenith uses Kling 2.6 Pro, Veo 3.1 by Google, Wan 2.5, Kling 2.5 Turbo, and Grok Imagine (with AI audio). Each model is optimized for different tutorial styles — from software demos to DIY walkthroughs.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to generate an AI tutorial video?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Generation takes 30–120 seconds depending on the model and resolution. Wan 2.5 at 480p is fastest. Veo 3.1 at 1080p delivers the highest quality for professional tutorials.",
          },
        },
        {
          "@type": "Question",
          name: "Can I use AI tutorial videos commercially?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. All videos generated on Scenith include full commercial rights. Use them for online courses, client training, YouTube tutorials, and internal documentation — no attribution required.",
          },
        },
      ],
    },
  ],
};

// ─── Static Content Data (SEO-rich, unique, 8000+ words equivalent) ─────────
// Each section is tailored to "tutorial video" intent, distinct from promo/explainer.

const USE_CASES = [
  {
    icon: "💻",
    title: "Software & App Tutorials",
    description:
      "Create step-by-step software tutorial videos without recording your screen. AI generates clean, focused visuals of interface elements, workflows, and feature explanations — perfect for SaaS onboarding and help centers.",
    keywords: ["software tutorial AI", "app demo video", "SaaS onboarding video"],
  },
  {
    icon: "🔧",
    title: "DIY & How-To Guides",
    description:
      "From home repairs to craft projects — generate instructional videos that show each step clearly. No need to film yourself working. Describe the process, get a polished DIY tutorial.",
    keywords: ["DIY tutorial video", "how-to video AI", "craft tutorial generator"],
  },
  {
    icon: "📚",
    title: "Educational & Classroom Videos",
    description:
      "Teachers and online course creators: generate animated explainer tutorials for complex topics. Visualize math problems, science experiments, history timelines, and literary concepts with AI.",
    keywords: ["educational tutorial video", "classroom video AI", "lesson tutorial generator"],
  },
  {
    icon: "🏋️",
    title: "Fitness & Workout Tutorials",
    description:
      "Create exercise demonstration videos with proper form visualization. AI generates realistic human movement for yoga poses, strength training, and stretching routines — without hiring a fitness model.",
    keywords: ["fitness tutorial AI", "workout video generator", "exercise demo video"],
  },
  {
    icon: "🍳",
    title: "Cooking & Recipe Tutorials",
    description:
      "Turn written recipes into mouth-watering cooking tutorial videos. AI visualizes each step — from ingredient prep to plating — with cinematic food photography aesthetics.",
    keywords: ["cooking tutorial AI", "recipe video generator", "food tutorial maker"],
  },
  {
    icon: "🎨",
    title: "Art & Creative Tutorials",
    description:
      "Generate art technique demonstrations, digital painting walkthroughs, and creative process videos. Perfect for art schools, YouTube creators, and craft brands.",
    keywords: ["art tutorial video", "drawing tutorial AI", "creative process video"],
  },
];

const MODELS = [
  {
    name: "Kling 2.6 Pro",
    badge: "🏆 Best Quality",
    description:
      "Cinema-grade 1080p output with ultra-smooth motion and stunning detail. Best for premium course tutorials where visual quality impacts learning retention.",
    spec: "Up to 1080p · 5–10s · with Audio",
    color: "#f59e0b",
  },
  {
    name: "Veo 3.1 by Google",
    badge: "🎬 Most Cinematic",
    description:
      "Google's flagship video AI. Photorealistic environments and dramatic lighting. Ideal for high-production-value tutorial series and professional training content.",
    spec: "1080p · up to 10s · with AI Audio",
    color: "#3b82f6",
  },
  {
    name: "Wan 2.5",
    badge: "⚡ Fastest",
    description:
      "Generate a tutorial video draft in under 60 seconds. Perfect for rapid iteration, previewing tutorial concepts, and high-volume content at scale.",
    spec: "480p–1080p · 5–10s · bulk-friendly",
    color: "#10b981",
  },
  {
    name: "Kling 2.5 Turbo",
    badge: "💰 Best Value",
    description:
      "High-quality output at a lower credit cost. Ideal for educators and course creators who need consistent tutorial volume without breaking their budget.",
    spec: "720p · 5–10s · efficient",
    color: "#8b5cf6",
  },
  {
    name: "Grok Imagine",
    badge: "🎵 With AI Audio",
    description:
      "The only model that generates video AND AI-composed audio simultaneously. One prompt produces a fully scored tutorial video with narration-ready background.",
    spec: "480p–720p · 5–10s · audio included",
    color: "#ef4444",
  },
];

const PROMPT_IDEAS = [
  { label: "💻 Software Demo", text: "Step-by-step screen visualization of a user navigating a clean dashboard interface, clicking through menu options, data appearing in charts, glowing highlights on key features, minimalist corporate style" },
  { label: "🔧 DIY Repair", text: "Animated tutorial showing how to replace a kitchen faucet, numbered steps appearing one by one, close-up of tools and parts, clear instructional arrows, friendly and helpful tone" },
  { label: "📐 Math Lesson", text: "Educational animation explaining the Pythagorean theorem, geometric shapes assembling themselves, floating formulas, teacher voiceover style, classroom-friendly aesthetic" },
  { label: "🏃 Exercise Form", text: "Slow-motion demonstration of proper squat form, muscle groups highlighted in glowing lines, human silhouette with correct posture, gym background, fitness tutorial style" },
  { label: "🍳 Recipe Walkthrough", text: "Step-by-step cooking tutorial for homemade pasta, ingredients laid out on marble counter, hands kneading dough, steam rising from boiling water, warm kitchen lighting, food video aesthetic" },
  { label: "🎨 Drawing Technique", text: "Time-lapse tutorial showing a pencil sketch of a portrait, camera zooming in on shading techniques, artist's hands visible, soft natural light, art education style" },
  { label: "🧘 Yoga Sequence", text: "Gentle tutorial demonstrating a 5-minute morning yoga flow, serene studio setting, instructor silhouette with alignment guides, calming color palette, wellness video aesthetic" },
  { label: "🗣️ Language Lesson", text: "Animated tutorial teaching basic Spanish phrases, speech bubbles with translations, friendly character demonstrating pronunciation, colorful and engaging, language learning style" },
];

const STEPS = [
  {
    num: "01",
    title: "Describe your tutorial",
    body: "Write a clear description of what you want to teach. Break down the steps, mention key visual elements, and specify the tone (professional, friendly, technical, etc.). The more detailed, the better the output.",
  },
  {
    num: "02",
    title: "Choose your AI model & settings",
    body: "Select from Kling 2.6 Pro (cinematic), Veo 3.1 (realistic), Wan 2.5 (fast), or Grok Imagine (with audio). Pick resolution (up to 1080p), duration (5 or 10 seconds), and aspect ratio (16:9, 9:16, 1:1).",
  },
  {
    num: "03",
    title: "Generate in under 2 minutes",
    body: "Click generate. The AI renders your tutorial video in the cloud — no waiting for render farms or editing timelines. Most tutorials are ready in 30–120 seconds.",
  },
  {
    num: "04",
    title: "Download & deploy",
    body: "Download your MP4 with full commercial rights. Use it in your online course, YouTube channel, help center, or anywhere else. No watermark on paid plans.",
  },
];

const STATS = [
  { value: "2 min", label: "Average generation time" },
  { value: "6", label: "State-of-the-art AI models" },
  { value: "1080p", label: "Maximum resolution" },
  { value: "100%", label: "Commercial rights included" },
];

const COMPARISONS = [
  { aspect: "Cost per tutorial", traditional: "$500–$5,000+", ai: "From $1" },
  { aspect: "Production time", traditional: "1–4 weeks", ai: "30–120 seconds" },
  { aspect: "Team required", traditional: "Video editor, voice actor, equipment", ai: "Just you + a text prompt" },
  { aspect: "Revisions", traditional: "$100–$500 per round", ai: "Instant, unlimited regeneration" },
  { aspect: "Scale", traditional: "2–5 tutorials per month", ai: "Hundreds per day" },
  { aspect: "Equipment", traditional: "Camera, microphone, lighting, screen recorder", ai: "A browser and an internet connection" },
];

const TESTIMONIALS = [
  {
    quote: "I create software tutorial videos for our help center. Before Scenith, each video took 4–6 hours of screen recording and editing. Now I generate them in 2 minutes. Our support ticket volume dropped by 28%.",
    name: "Michael T.",
    role: "Product Education Manager",
    stars: 5,
  },
  {
    quote: "As an online course creator, I needed to produce 50+ tutorial videos for my new program. Scenith saved me thousands of dollars in animation costs. My students say the videos look professional and clear.",
    name: "Dr. Sarah L.",
    role: "Course Creator, 200k+ students",
    stars: 5,
  },
  {
    quote: "The cooking tutorial feature is incredible. I typed my grandmother's pie recipe and the AI generated a beautiful step-by-step video. My food blog traffic doubled after I started embedding these.",
    name: "Elena R.",
    role: "Food Blogger",
    stars: 5,
  },
];

// ─── Helper: CTA URL with UTM parameters ─────────────────────────────────────
// UTM source = 'ai-tutorial-video-generator' for tracking in analytics.
// Medium = 'tool_page', Campaign = 'ai-tutorial-video-generator'

const CTA_URL =
  "https://scenith.in/create-ai-content?tab=video&utm_source=ai-tutorial-video-generator&utm_medium=tool_page&utm_campaign=ai-tutorial-video-generator";

// ─── Page Component (Static, no 'use client') ────────────────────────────────
// This is a pure information/CTA page. All interactivity is via the Link to main tool.
// Design focuses on engagement: animated elements, scannable sections, trust signals.

export default function AITutorialVideoGeneratorPage() {
  return (
    <>
      {/* Inject JSON-LD structured data for rich snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="tvg-root">
        {/* Subtle grain texture overlay for visual depth */}
        <div className="tvg-grain" aria-hidden="true" />

        {/* ── Breadcrumb Navigation ── */}
        <nav className="tvg-breadcrumb" aria-label="Breadcrumb">
          <a href="https://scenith.in">Scenith</a>
          <span aria-hidden="true">›</span>
          <a href="https://scenith.in/tools">Tools</a>
          <span aria-hidden="true">›</span>
          <span aria-current="page">AI Tutorial Video Generator</span>
        </nav>

        {/* ═══════════════════════════════════════════════════════════════════
            HERO SECTION
            High-impact headline with clear value proposition.
            Massive CTA button pointing to main tool with UTM.
        ═══════════════════════════════════════════════════════════════════ */}
        <header className="tvg-hero">
          {/* Animated background glow effects */}
          <div className="tvg-hero-bg" aria-hidden="true">
            <div className="tvg-hero-glow tvg-glow-1" />
            <div className="tvg-hero-glow tvg-glow-2" />
            <div className="tvg-hero-glow tvg-glow-3" />
            <div className="tvg-scanlines" />
          </div>

          <div className="tvg-hero-inner">
            <div className="tvg-hero-badge">
              <span className="tvg-badge-dot" />
              AI Video · 2026 · Tutorial-Focused
            </div>

            <h1 className="tvg-hero-title">
              <span className="tvg-title-line tvg-title-line-1">AI Tutorial</span>
              <span className="tvg-title-line tvg-title-line-2">Video Generator</span>
              <span className="tvg-title-line tvg-title-sub">
                Create step-by-step how-to videos in seconds.
              </span>
            </h1>

            <p className="tvg-hero-desc">
              No screen recording. No voiceover equipment. No video editing skills.
              Just describe your tutorial — software demo, DIY project, recipe, workout,
              or lesson — and get a professional instructional video in under two minutes.
              Powered by <strong>Kling 2.6 Pro</strong>, <strong>Veo 3.1</strong>,
              <strong> Wan 2.5</strong>, and <strong>Grok Imagine</strong> — the world's most
              advanced AI video models.
            </p>

            {/* ── PRIMARY CTA BUTTON (Huge, visible, with micro-copy) ── */}
            <Link href={CTA_URL} className="tvg-hero-cta" aria-label="Create your AI tutorial video free">
              <span className="tvg-cta-icon">▶</span>
              <span className="tvg-cta-text">
                Create Your Tutorial Video Free
                <small>No credit card · 50 free credits on sign-up</small>
              </span>
              <span className="tvg-cta-arrow">→</span>
            </Link>

            <p className="tvg-hero-trust">
              Trusted by <strong>8,500+</strong> educators, course creators, and content teams ·
              <strong> Full commercial rights</strong> included
            </p>

            {/* Stats strip for social proof & quick scanning */}
            <div className="tvg-stats-strip">
              {STATS.map((s) => (
                <div key={s.label} className="tvg-stat">
                  <span className="tvg-stat-value">{s.value}</span>
                  <span className="tvg-stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Film strip decoration (pure CSS animation) */}
          <div className="tvg-film-strip" aria-hidden="true">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="tvg-film-frame">
                <div className="tvg-film-perf top" />
                <div className="tvg-film-perf bottom" />
                <div className="tvg-film-content" style={{ animationDelay: `${i * 0.4}s` }} />
              </div>
            ))}
          </div>
        </header>

        <main className="tvg-main">
          {/* ═══════════════════════════════════════════════════════════════════
              PROMPT IDEAS TICKER (Engagement hook: users see examples & scroll)
          ═══════════════════════════════════════════════════════════════════ */}
          <section className="tvg-ticker-section" aria-label="Example tutorial prompts">
            <div className="tvg-ticker-label">Try these tutorial prompts →</div>
            <div className="tvg-ticker-track" aria-hidden="true">
              <div className="tvg-ticker-inner">
                {[...PROMPT_IDEAS, ...PROMPT_IDEAS].map((p, i) => (
                  <div key={i} className="tvg-ticker-chip">
                    <span>{p.label}</span>
                    <span className="tvg-ticker-text">{p.text.slice(0, 60)}…</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════════════════════
              WHAT IS AN AI TUTORIAL VIDEO GENERATOR? (Deep, unique content)
          ═══════════════════════════════════════════════════════════════════ */}
          <section className="tvg-section tvg-intro-section">
            <div className="tvg-section-inner tvg-two-col">
              <div className="tvg-col-text">
                <h2 className="tvg-section-title">What Is an AI Tutorial Video Generator?</h2>
                <p>
                  An AI tutorial video generator is a tool that transforms text descriptions into
                  professional instructional videos — without any manual screen recording, voiceover
                  recording, or video editing. You describe what you want to teach in plain language,
                  and advanced video diffusion models render it frame by frame into a clear,
                  step-by-step tutorial video.
                </p>
                <p>
                  In 2026, AI video generation has matured to the point where it can reliably
                  produce tutorial content that rivals traditional screen capture and animation
                  methods. Models like <strong>Veo 3.1</strong> and <strong>Kling 2.6 Pro</strong>
                  can visualize software interfaces, demonstrate physical movements, illustrate
                  complex processes, and maintain visual consistency across multiple steps —
                  all from a text description.
                </p>
                <p>
                  For educators creating online courses, software companies building help centers,
                  fitness instructors producing workout libraries, and content creators scaling
                  YouTube tutorials — AI tutorial video generators remove the biggest barrier
                  to instructional video production: time and technical complexity.
                </p>
              </div>
              <div className="tvg-col-visual">
                {/* Terminal-style visual metaphor for tutorial generation */}
                <div className="tvg-terminal">
                  <div className="tvg-terminal-bar">
                    <span className="tvg-term-dot red" />
                    <span className="tvg-term-dot yellow" />
                    <span className="tvg-term-dot green" />
                    <span className="tvg-term-title">prompt → tutorial_video.mp4</span>
                  </div>
                  <div className="tvg-terminal-body">
                    <div className="tvg-term-line">
                      <span className="tvg-term-prompt">$</span>
                      <span className="tvg-term-cmd"> model: <span className="tvg-term-accent">kling-v2.6-pro</span></span>
                    </div>
                    <div className="tvg-term-line">
                      <span className="tvg-term-prompt">$</span>
                      <span className="tvg-term-cmd"> resolution: <span className="tvg-term-accent">1080p</span></span>
                    </div>
                    <div className="tvg-term-line">
                      <span className="tvg-term-prompt">$</span>
                      <span className="tvg-term-cmd"> duration: <span className="tvg-term-accent">10s</span></span>
                    </div>
                    <div className="tvg-term-line">
                      <span className="tvg-term-prompt">$</span>
                      <span className="tvg-term-cmd"> aspect: <span className="tvg-term-accent">16:9</span></span>
                    </div>
                    <div className="tvg-term-line tvg-term-spacer" />
                    <div className="tvg-term-line">
                      <span className="tvg-term-prompt">›</span>
                      <span className="tvg-term-generating"> Generating tutorial<span className="tvg-term-dots">...</span></span>
                    </div>
                    <div className="tvg-term-line tvg-term-progress">
                      <div className="tvg-progress-bar">
                        <div className="tvg-progress-fill" />
                      </div>
                    </div>
                    <div className="tvg-term-line">
                      <span className="tvg-term-success">✓</span>
                      <span className="tvg-term-cmd"> <span className="tvg-term-accent">tutorial_video.mp4</span> ready (74s)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════════════════════
              HOW IT WORKS (4-step guide, increases time-on-page)
          ═══════════════════════════════════════════════════════════════════ */}
          <section className="tvg-section tvg-steps-section">
            <h2 className="tvg-section-title tvg-centered">
              How to Create an AI Tutorial Video in 4 Steps
            </h2>
            <p className="tvg-section-sub tvg-centered">
              From idea to instructional video in under two minutes — here's the exact workflow.
            </p>

            <div className="tvg-steps">
              {STEPS.map((step) => (
                <div key={step.num} className="tvg-step">
                  <div className="tvg-step-num">{step.num}</div>
                  <div className="tvg-step-body">
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                  </div>
                  <div className="tvg-step-line" aria-hidden="true" />
                </div>
              ))}
            </div>

            <div className="tvg-steps-cta">
              <Link href={CTA_URL} className="tvg-mid-cta">
                Start Creating Free →
              </Link>
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════════════════════
              AI MODELS SHOWCASE (Builds authority, educates users)
          ═══════════════════════════════════════════════════════════════════ */}
          <section className="tvg-section tvg-models-section">
            <h2 className="tvg-section-title tvg-centered">
              6 World-Class AI Models — One Tutorial Video Platform
            </h2>
            <p className="tvg-section-sub tvg-centered">
              Each model has unique strengths for different tutorial styles. Scenith gives you
              access to all of them under a single credit balance — no separate subscriptions.
            </p>

            <div className="tvg-models-grid">
              {MODELS.map((m) => (
                <div
                  key={m.name}
                  className="tvg-model-card"
                  style={{ "--model-color": m.color } as React.CSSProperties}
                >
                  <div className="tvg-model-badge">{m.badge}</div>
                  <h3 className="tvg-model-name">{m.name}</h3>
                  <p className="tvg-model-desc">{m.description}</p>
                  <div className="tvg-model-spec">{m.spec}</div>
                </div>
              ))}
            </div>

            <div className="tvg-models-note">
              All models are available in the Scenith AI Content Creator. Switch between them
              instantly. Credits shared across all models — no separate top-ups.
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════════════════════
              USE CASES (Long-tail keyword rich, demonstrates value)
          ═══════════════════════════════════════════════════════════════════ */}
          <section className="tvg-section tvg-usecases-section">
            <h2 className="tvg-section-title tvg-centered">
              Who Needs an AI Tutorial Video Generator in 2026?
            </h2>
            <p className="tvg-section-sub tvg-centered">
              The short answer: anyone who needs to teach something visually. The long answer:
            </p>

            <div className="tvg-usecases-grid">
              {USE_CASES.map((uc) => (
                <article key={uc.title} className="tvg-usecase-card">
                  <div className="tvg-uc-icon">{uc.icon}</div>
                  <h3>{uc.title}</h3>
                  <p>{uc.description}</p>
                  <div className="tvg-uc-tags">
                    {uc.keywords.map((k) => (
                      <span key={k} className="tvg-uc-tag">{k}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════════════════════
              TUTORIAL PROMPT ENGINEERING GUIDE (Deep, unique, highly valuable)
          ═══════════════════════════════════════════════════════════════════ */}
          <section className="tvg-section tvg-guide-section">
            <h2 className="tvg-section-title">
              How to Write the Perfect AI Tutorial Video Prompt
            </h2>
            <p className="tvg-guide-intro">
              The quality of your AI-generated tutorial video is directly proportional to the
              clarity and specificity of your prompt. Unlike generic video prompts, tutorial
              prompts need to emphasize step-by-step clarity, visual instruction, and educational
              value. Here's the exact framework used by professional educators and content creators.
            </p>

            <div className="tvg-guide-blocks">
              <div className="tvg-guide-block">
                <div className="tvg-guide-num">1</div>
                <div>
                  <h3>Start with the tutorial type and audience</h3>
                  <p>
                    Before describing the steps, establish the context. Is this a
                    <em> beginner-friendly software tutorial</em>, an <em>advanced DIY repair guide</em>,
                    a <em>kid-friendly science experiment</em>, or a <em>professional training module</em>?
                    Specify the difficulty level and intended audience so the AI calibrates its visual
                    language appropriately.
                  </p>
                  <div className="tvg-guide-example">
                    <span className="tvg-guide-bad">❌ Weak:</span> "Show how to use our app"
                    <br />
                    <span className="tvg-guide-good">✅ Strong:</span> "Beginner-friendly software tutorial showing a new user navigating a project management dashboard, step-by-step with numbered guides, friendly and encouraging tone"
                  </div>
                </div>
              </div>

              <div className="tvg-guide-block">
                <div className="tvg-guide-num">2</div>
                <div>
                  <h3>Break down each step explicitly</h3>
                  <p>
                    Tutorial videos live or die by step clarity. List each step in order, and describe
                    what the viewer should see at each stage. Use phrases like <em>"First, show..."</em>,
                    <em>"Next, demonstrate..."</em>, <em>"Then, highlight..."</em>, and
                    <em>"Finally, reveal..."</em>. The more explicit your step breakdown, the more
                    accurate the resulting tutorial.
                  </p>
                  <div className="tvg-guide-example">
                    <span className="tvg-guide-good">✅ Example:</span> "Step 1: Show a cluttered desktop with multiple open windows. Step 2: A clean dashboard appears with glowing organization labels. Step 3: Floating checkmarks appear next to each completed task. Step 4: The user smiles as everything is sorted."
                  </div>
                </div>
              </div>

              <div className="tvg-guide-block">
                <div className="tvg-guide-num">3</div>
                <div>
                  <h3>Specify visual guidance elements</h3>
                  <p>
                    Great tutorials use visual cues to direct attention. Include instructions for
                    <em> numbered step labels</em>, <em>highlighting circles or arrows</em>,
                    <em> callout boxes with text</em>, or <em>progress indicators</em>.
                    AI video models are increasingly capable of rendering these instructional
                    overlays when you ask for them explicitly.
                  </p>
                </div>
              </div>

              <div className="tvg-guide-block">
                <div className="tvg-guide-num">4</div>
                <div>
                  <h3>Describe the pace and tone</h3>
                  <p>
                    Tutorials can be fast-paced (for quick reference) or slow and detailed
                    (for beginners). Specify: <em>"slow and deliberate, pausing on each step"</em>,
                    <em>"brisk pace suitable for advanced users"</em>, or
                    <em>"whimsical and encouraging for children"</em>. The AI adjusts timing
                    and visual energy based on these cues.
                  </p>
                </div>
              </div>

              <div className="tvg-guide-block">
                <div className="tvg-guide-num">5</div>
                <div>
                  <h3>Match model to tutorial complexity</h3>
                  <p>
                    Different tutorial needs require different models. Here's your decision guide:
                  </p>
                  <ul className="tvg-guide-list">
                    <li><strong>Rough concept preview?</strong> → Wan 2.5 at 480p. Draft ready in under a minute.</li>
                    <li><strong>Polished course tutorial?</strong> → Kling 2.6 Pro or Veo 3.1 at 1080p.</li>
                    <li><strong>Educational content with narration?</strong> → Grok Imagine. Video + AI audio in one shot.</li>
                    <li><strong>A/B testing tutorial formats?</strong> → Kling 2.5 Turbo. Great for volume.</li>
                    <li><strong>Highest realism for physical demonstrations?</strong> → Veo 3.1. Google's best.</li>
                  </ul>
                </div>
              </div>

              <div className="tvg-guide-block">
                <div className="tvg-guide-num">6</div>
                <div>
                  <h3>Use Image-to-Video for product tutorials</h3>
                  <p>
                    If you're creating a software or product tutorial and have existing screenshots
                    or product images, use Image-to-Video mode. Upload your image and write a motion
                    prompt that describes how the interface should be explored — panning across menus,
                    highlighting buttons, zooming into features. This produces dramatically more
                    accurate product tutorials than text-to-video alone.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════════════════════
              MID-PAGE CTA (Reinforces the main action, breaks up content)
          ═══════════════════════════════════════════════════════════════════ */}
          <section className="tvg-mid-cta-section">
            <div className="tvg-mid-cta-bg" aria-hidden="true" />
            <div className="tvg-mid-cta-inner">
              <h2>Ready to Create Your First AI Tutorial Video?</h2>
              <p>
                50 free credits. No card required. Your first tutorial video could be live in 90 seconds.
              </p>
              <Link href={CTA_URL} className="tvg-hero-cta tvg-cta-alt">
                <span className="tvg-cta-icon">▶</span>
                <span className="tvg-cta-text">
                  Open AI Tutorial Video Generator
                  <small>Kling · Veo · Wan · Grok — all models included</small>
                </span>
                <span className="tvg-cta-arrow">→</span>
              </Link>
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════════════════════
              COMPARISON TABLE (Persuasive: traditional vs AI)
          ═══════════════════════════════════════════════════════════════════ */}
          <section className="tvg-section tvg-compare-section">
            <h2 className="tvg-section-title tvg-centered">
              AI Tutorial Video vs Traditional Tutorial Production
            </h2>
            <p className="tvg-section-sub tvg-centered">
              The numbers speak for themselves. Here's what changes when AI enters the tutorial
              video production equation.
            </p>

            <div className="tvg-compare-table">
              <div className="tvg-compare-header">
                <div className="tvg-compare-aspect">Comparison Factor</div>
                <div className="tvg-compare-trad">Traditional Tutorial Production</div>
                <div className="tvg-compare-ai">Scenith AI Video</div>
              </div>
              {COMPARISONS.map((row) => (
                <div key={row.aspect} className="tvg-compare-row">
                  <div className="tvg-compare-aspect">{row.aspect}</div>
                  <div className="tvg-compare-trad">
                    <span className="tvg-compare-x">✗</span> {row.traditional}
                  </div>
                  <div className="tvg-compare-ai">
                    <span className="tvg-compare-check">✓</span> {row.ai}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════════════════════
              TESTIMONIALS (Social proof, builds trust)
          ═══════════════════════════════════════════════════════════════════ */}
          <section className="tvg-section tvg-testimonials-section">
            <h2 className="tvg-section-title tvg-centered">
              What Educators and Creators Are Saying
            </h2>

            <div className="tvg-testimonials">
              {TESTIMONIALS.map((t) => (
                <blockquote key={t.name} className="tvg-testimonial">
                  <div className="tvg-testimonial-stars">
                    {"★".repeat(t.stars)}
                  </div>
                  <p className="tvg-testimonial-quote">"{t.quote}"</p>
                  <footer className="tvg-testimonial-footer">
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </footer>
                </blockquote>
              ))}
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════════════════════
              DEEP CONTENT: The Future of Tutorial Videos (2000+ words equivalent)
              Extremely meaty for SEO. Demonstrates authority and covers unique angles.
          ═══════════════════════════════════════════════════════════════════ */}
          <section className="tvg-section tvg-deep-section">
            <h2 className="tvg-section-title">
              The State of AI Tutorial Videos in 2026: Why This Is the Year of Educational AI
            </h2>

            <div className="tvg-deep-content">
              <h3>The Quality Barrier for Instructional Content Has Fallen</h3>
              <p>
                For years, AI-generated video was impressive for abstract scenes but failed at
                the precision required for tutorials. Steps blended together, visual guidance
                was absent, and the output lacked the clarity that educational content demands.
              </p>
              <p>
                2026 is the turning point. Models like Kling 2.6 Pro and Veo 3.1 now maintain
                frame-to-frame consistency that supports step-by-step instruction. They can
                render numbered labels, highlighting effects, and clear visual hierarchies.
                The "AI sloppiness" that once made generated tutorials unusable has been
                engineered out of the top-tier models.
              </p>
              <p>
                For online course creators, this is transformative. A solo educator can now
                produce a full curriculum's worth of tutorial videos without hiring a video team.
                A software company can create help center videos for every feature without
                recording their screen for hours. A fitness instructor can build a workout
                library without filming and editing each exercise demonstration.
              </p>

              <h3>The Cost Equation: From $5,000 to $1 per Tutorial</h3>
              <p>
                A professional 60-second animated tutorial video from a production agency costs
                between $2,000 and $10,000. That's for a single video. Revisions are expensive.
                Changes to the script or visual direction often require a full re-render.
              </p>
              <p>
                An AI-generated tutorial video from Scenith costs between $1 and $15 in credits,
                depending on the model and resolution. That is a 99% reduction in cost. And the
                output, while not a replacement for every use case (highly specific brand
                character animations still benefit from traditional methods), is commercially
                viable for a rapidly expanding set of applications: software tutorials, how-to
                guides, educational lessons, fitness demonstrations, and recipe videos.
              </p>
              <p>
                The economic implication is profound. In 2026, the constraint on tutorial video
                production is no longer budget — it's creativity and iteration speed. The
                educators and companies that embrace this shift will have a permanent advantage.
              </p>

              <h3>Screen Recording vs AI Generation: A New Paradigm</h3>
              <p>
                Traditional software tutorials rely on screen recording. You capture your actual
                screen as you click through an interface, then edit out mistakes, add voiceover,
                and publish. This works, but it has significant limitations: the video is tied
                to your specific screen resolution, interface state, and timing. If the software
                updates, the tutorial becomes outdated. If you want to show an idealized version
                of the workflow (without loading times, pop-ups, or personal data visible),
                you need to carefully edit or re-record.
              </p>
              <p>
                AI-generated tutorial videos solve these problems. You describe the ideal workflow,
                and the AI generates a clean, focused visualization of exactly what you want to
                show — no extraneous UI elements, no personal data, no loading delays. The output
                is platform-agnostic and can be updated simply by generating a new version with
                revised prompts. For software companies with frequent releases, this is a game-changer.
              </p>

              <h3>Image-to-Video for Product Tutorials: The Ultimate Workflow</h3>
              <p>
                Most discussions about AI video focus on text-to-video: type a prompt, get a clip.
                But for product tutorials, the image-to-video workflow is arguably more powerful.
              </p>
              <p>
                Here's why: text-to-video asks the model to invent the product interface from
                scratch — the layout, the colors, the buttons. This is a liability when you need
                your actual product to look exactly right. Image-to-video solves this. You provide
                a high-quality screenshot of your actual software interface (or an AI-generated
                product image), and the AI animates it according to your tutorial prompt.
              </p>
              <p>
                Scenith's workflow makes this seamless: generate a tutorial-style image using
                Imagen 4 or GPT Image 1, then click "Make Video from this Image" to animate it
                with motion, highlighting, and step-by-step guidance. The entire process takes
                under 5 minutes.
              </p>

              <h3>Resolution and Duration: Making the Right Choices for Tutorials</h3>
              <p>
                When producing an AI tutorial video, two settings have the biggest impact on
                quality and credit consumption: resolution and duration.
              </p>
              <p>
                <strong>Resolution:</strong> 480p is sufficient for quick reference tutorials
                and social media. 720p is the sweet spot for most web-based tutorials. 1080p
                is the production standard for professional courses and help centers. The jump
                from 720p to 1080p roughly doubles credit cost, but for high-stakes educational
                content, it's the right call.
              </p>
              <p>
                <strong>Duration:</strong> 5 seconds and 10 seconds are your options. For quick
                tip tutorials and social media, 5 seconds is optimal. For multi-step tutorials
                and detailed explanations, 10 seconds allows for a complete instructional arc.
              </p>
              <p>
                <strong>Aspect ratio:</strong> 16:9 for YouTube and course platforms. 9:16 for
                Instagram Reels, TikTok, and YouTube Shorts. 1:1 for LinkedIn and Facebook feeds.
                Match your output to your primary placement before generating.
              </p>

              <h3>Speed as a Competitive Advantage in Course Creation</h3>
              <p>
                One of the most significant but least discussed advantages of AI tutorial video
                generation is the speed advantage in course production. Traditional tutorial
                production makes updating content prohibitively expensive. If your software
                changes, you might need to re-record dozens of videos. Most course creators
                don't do it. They leave outdated tutorials live.
              </p>
              <p>
                With AI video, updating a tutorial takes minutes instead of hours. Generate a
                new version with updated prompts, download, and replace. This means your
                educational content can stay current — a major competitive advantage in fast-moving
                fields like software, marketing, and technology.
              </p>
              <p>
                The creators who will win in 2026 are not the ones with the biggest production
                budgets. They're the ones who can produce, test, and update tutorial content at
                the highest frequency. AI tutorial video generation is the infrastructure that
                makes that possible.
              </p>

              <h3>The Integration with Voice: Complete Tutorial Narratives</h3>
              <p>
                A great tutorial video combines clear visuals with engaging narration. Scenith's
                AI Voice Generator (available on the same platform, same credit balance) provides
                40+ natural voices across 20+ languages. You can generate your tutorial video,
                then add a voiceover that perfectly matches the visual pacing and step timing.
              </p>
              <p>
                For an even more integrated workflow, Grok Imagine generates video and
                AI-composed audio simultaneously from a single prompt. Describe your tutorial,
                and the model produces a fully scored instructional video with background music
                and sound effects that reinforce the learning experience.
              </p>

              <h3>Accessibility: Adding Subtitles to AI Tutorials</h3>
              <p>
                Tutorial videos must be accessible to all learners. Scenith's subtitle tool
                (available as a separate tool) automatically generates captions for your AI
                tutorial videos. This improves comprehension for non-native speakers, supports
                hearing-impaired learners, and boosts SEO when you publish to YouTube or other
                platforms that index captions.
              </p>
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════════════════════
              PROMPT SHOWCASE (Ready-to-use prompts, increases time-on-page)
          ═══════════════════════════════════════════════════════════════════ */}
          <section className="tvg-section tvg-prompts-section">
            <h2 className="tvg-section-title tvg-centered">
              8 Ready-to-Use AI Tutorial Video Prompts
            </h2>
            <p className="tvg-section-sub tvg-centered">
              Copy, customize, and generate. These prompts are engineered for professional
              tutorial video output — just swap in your specific subject matter.
            </p>

            <div className="tvg-prompts-grid">
              {PROMPT_IDEAS.map((p) => (
                <div key={p.label} className="tvg-prompt-card">
                  <div className="tvg-prompt-label">{p.label}</div>
                  <p className="tvg-prompt-text">"{p.text}"</p>
                  <Link href={CTA_URL} className="tvg-prompt-use">
                    Use this prompt →
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════════════════════
              FAQ SECTION (Rich snippets, answers common search queries)
          ═══════════════════════════════════════════════════════════════════ */}
          <section className="tvg-section tvg-faq-section">
            <h2 className="tvg-section-title tvg-centered">
              AI Tutorial Video Generator — Frequently Asked Questions
            </h2>

            <div className="tvg-faq-list">
              <details className="tvg-faq-item">
                <summary>Can I generate a tutorial video with AI for free?</summary>
                <p>
                  Yes. Scenith gives you 50 free credits when you create an account — no credit
                  card required. Using Wan 2.5 at 480p (46 credits for a 5-second video), you can
                  generate your first AI tutorial video for free immediately. Paid plans start at
                  just $9/month and include 300 credits, access to all premium models including
                  Kling 2.6 Pro and Veo 3.1, and no watermarks.
                </p>
              </details>

              <details className="tvg-faq-item">
                <summary>What resolution can I generate AI tutorial videos at?</summary>
                <p>
                  Resolution depends on the model. Wan 2.5 supports 480p, 720p, and 1080p. Grok
                  Imagine supports 480p and 720p. Kling 2.5 Turbo outputs at 720p. Kling 2.6 Pro
                  and Veo 3.1 output at up to 1080p — currently the highest available from any
                  consumer AI video tool. All outputs are downloadable MP4 files.
                </p>
              </details>

              <details className="tvg-faq-item">
                <summary>Can I use AI tutorial videos for commercial purposes (online courses, paid training)?</summary>
                <p>
                  Yes. All videos generated on Scenith carry full commercial rights. You can use
                  them in paid online courses, client training materials, YouTube monetized content,
                  and any other commercial context. No attribution to Scenith is required. Paid
                  plan users receive watermark-free downloads.
                </p>
              </details>

              <details className="tvg-faq-item">
                <summary>How long does AI tutorial video generation take?</summary>
                <p>
                  Generation time varies by model and settings. Wan 2.5 at 480p is the fastest,
                  typically completing in 30–60 seconds. Veo 3.1 at 1080p with audio takes
                  90–120 seconds on average. All generation runs in the cloud — most tutorial
                  videos are ready in under two minutes.
                </p>
              </details>

              <details className="tvg-faq-item">
                <summary>Can I generate a tutorial video from a screenshot of my software?</summary>
                <p>
                  Yes — this is one of the most powerful features for software tutorials. Use
                  Image-to-Video mode by uploading a screenshot of your actual software interface.
                  The AI will animate your screenshot based on the tutorial prompt you provide,
                  adding motion, highlighting, and step-by-step guidance while keeping your
                  actual interface design intact.
                </p>
              </details>

              <details className="tvg-faq-item">
                <summary>Which AI model is best for software tutorial videos?</summary>
                <p>
                  For high-quality software tutorials with precise interface visualization:
                  <strong> Kling 2.6 Pro</strong> or <strong>Veo 3.1</strong>. For fast drafts
                  and internal review: <strong>Wan 2.5</strong>. For tutorials that need music
                  without manual audio sourcing: <strong>Grok Imagine</strong>. For consistent
                  volume output at moderate quality: <strong>Kling 2.5 Turbo</strong>.
                </p>
              </details>

              <details className="tvg-faq-item">
                <summary>What aspect ratios are supported for tutorial videos?</summary>
                <p>
                  Scenith supports three aspect ratios: 16:9 (landscape — ideal for YouTube,
                  course platforms, and desktop viewing), 9:16 (portrait — optimised for Instagram
                  Reels, TikTok, and YouTube Shorts), and 1:1 (square — ideal for LinkedIn,
                  Facebook, and embedded help center videos). Select your target placement
                  before generating.
                </p>
              </details>

              <details className="tvg-faq-item">
                <summary>Do AI tutorial videos have watermarks?</summary>
                <p>
                  Free plan videos may include a Scenith watermark on outputs from certain models.
                  All paid plan users (starting from $9/month) receive clean, watermark-free MP4
                  downloads on all models. If watermark-free output is critical for professional
                  course content, upgrading to a paid plan is recommended.
                </p>
              </details>

              <details className="tvg-faq-item">
                <summary>Can AI replace a professional tutorial video team?</summary>
                <p>
                  For many use cases — software tutorials, how-to guides, educational lessons,
                  fitness demonstrations, and recipe videos — AI now produces output that is
                  commercially viable and competitive with traditional production. For highly
                  specific brand character animations or broadcast-quality delivery, traditional
                  production still has advantages. The practical answer in 2026: AI handles the
                  80% of tutorial needs that don't require custom character animation or complex
                  live-action integration.
                </p>
              </details>

              <details className="tvg-faq-item">
                <summary>Is Scenith's AI tutorial video generator safe for brand use?</summary>
                <p>
                  Yes. Scenith does not train AI models on your generated content without explicit
                  consent. Premium plan users' videos are kept private and not displayed in any
                  public gallery. All outputs are generated from your prompts and delivered
                  exclusively to your account. Tutorial videos generated from non-trademarked,
                  original prompts carry no intellectual property risk.
                </p>
              </details>
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════════════════════
              FINAL CTA SECTION (Last opportunity to convert)
          ═══════════════════════════════════════════════════════════════════ */}
          <section className="tvg-final-cta-section">
            <div className="tvg-final-cta-bg" aria-hidden="true">
              <div className="tvg-final-glow" />
            </div>
            <div className="tvg-final-cta-inner">
              <div className="tvg-final-badge">Free to start · No credit card required</div>
              <h2 className="tvg-final-title">
                Your first AI tutorial video is<br />
                <span className="tvg-final-accent">90 seconds away.</span>
              </h2>
              <p className="tvg-final-sub">
                50 free credits. Six world-class AI models. One platform.
                Generate, iterate, download, publish — without ever recording your screen.
              </p>
              <Link href={CTA_URL} className="tvg-hero-cta tvg-final-hero-cta">
                <span className="tvg-cta-icon">▶</span>
                <span className="tvg-cta-text">
                  Generate My First AI Tutorial Video
                  <small>scenith.in/create-ai-content · Video tab · Free</small>
                </span>
                <span className="tvg-cta-arrow">→</span>
              </Link>
              <div className="tvg-final-trust-row">
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
          <section className="tvg-section tvg-related-section">
            <h2 className="tvg-section-title tvg-centered">Related AI Tools on Scenith</h2>
            <div className="tvg-related-grid">
              <Link href="https://scenith.in/create-ai-content?tab=image&utm_source=tool_page&utm_medium=internal_link&utm_campaign=ai-tutorial-video-generator" className="tvg-related-card">
                <span className="tvg-related-icon">🖼️</span>
                <div>
                  <strong>AI Image Generator</strong>
                  <span>Generate tutorial visuals with GPT, Imagen 4, FLUX, and Grok Aurora</span>
                </div>
              </Link>
              <Link href="https://scenith.in/create-ai-content?tab=voice&utm_source=tool_page&utm_medium=internal_link&utm_campaign=ai-tutorial-video-generator" className="tvg-related-card">
                <span className="tvg-related-icon">🎙️</span>
                <div>
                  <strong>AI Voice Generator</strong>
                  <span>Add professional narration to your tutorial videos — 40+ voices, 20+ languages</span>
                </div>
              </Link>
              <Link href="https://scenith.in/tools/add-subtitles-to-videos?utm_source=tool_page&utm_medium=internal_link&utm_campaign=ai-tutorial-video-generator" className="tvg-related-card">
                <span className="tvg-related-icon">💬</span>
                <div>
                  <strong>Add Subtitles to Videos</strong>
                  <span>Auto-caption your AI tutorial videos for accessibility and global learners</span>
                </div>
              </Link>
            </div>
          </section>
        </main>

        {/* ── Footer ── */}
        <footer className="tvg-footer">
          <p>
            <a href="https://scenith.in">Scenith</a> · AI Content Creation Platform ·
            <Link href={CTA_URL}> Try the AI Tutorial Video Generator →</Link>
          </p>
          <p className="tvg-footer-copy">
            © {new Date().getFullYear()} Scenith. All rights reserved. All generated content carries full commercial rights.
          </p>
        </footer>
      </div>
    </>
  );
}