import type { Metadata } from "next";
import Link from "next/link";
import "./ai-video-courses.css";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "AI Video Generator for Online Courses — Create Course Videos in Minutes | Scenith",
  description:
    "Turn your course scripts, slides, and ideas into professional AI-generated videos instantly. No camera, no crew, no editing software. Create e-learning videos with Wan 2.5, Veo 3.1, Kling 2.6 and more. Free to start.",
  keywords: [
    "ai video generator for courses",
    "ai course video creator",
    "online course video generator",
    "e-learning video ai",
    "create course videos with ai",
    "ai video for educators",
    "text to video for online courses",
    "ai generated course content",
    "automated course video creation",
    "ai explainer video generator",
    "course video without camera",
    "ai teaching video maker",
    "udemy course video ai",
    "e-learning content creator ai",
    "ai video generator 2026",
    "video course creator free",
    "ai video for teachable",
    "no-camera course creation",
    "ai education video tool",
    "course content automation ai",
  ],
  openGraph: {
    title: "AI Video Generator for Online Courses | Scenith",
    description:
      "Create stunning course videos from text prompts in under 2 minutes. No recording setup. No editing software. Powered by Wan 2.5, Veo 3.1 & Kling 2.6.",
    url: "https://scenith.in/tools/ai-video-generator-for-courses",
    siteName: "Scenith",
    type: "website",
    images: [
      {
        url: "https://cdn.scenith.in/og/ai-video-generator-for-courses.jpg",
        width: 1200,
        height: 630,
        alt: "AI Video Generator for Online Courses — Scenith",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Video Generator for Online Courses | Scenith",
    description:
      "No camera. No crew. No editing. Create professional e-learning videos from text prompts — powered by Veo 3.1, Kling 2.6, Wan 2.5.",
    images: ["https://cdn.scenith.in/og/ai-video-generator-for-courses.jpg"],
  },
  alternates: {
    canonical: "https://scenith.in/tools/ai-video-generator-for-courses",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// ─── Structured Data ──────────────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://scenith.in/tools/ai-video-generator-for-courses",
      url: "https://scenith.in/tools/ai-video-generator-for-courses",
      name: "AI Video Generator for Online Courses",
      description:
        "Generate professional course videos from text prompts using state-of-the-art AI models. No camera or editing software required.",
      inLanguage: "en-US",
      isPartOf: { "@id": "https://scenith.in" },
      datePublished: "2026-04-01",
      dateModified: "2026-04-19",
    },
    {
      "@type": "SoftwareApplication",
      name: "Scenith AI Video Generator for Courses",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Web",
      url: "https://scenith.in/create-ai-content?tab=video&utm_source=tool-page&utm_medium=cta&utm_campaign=ai-video-for-courses",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Free to start with 50 credits",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Can I create online course videos without a camera using AI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Scenith's AI video generator lets you type a prompt describing your lesson concept, and the AI generates a professional cinematic video in under 2 minutes. No camera, microphone, lighting setup, or video editing software is required.",
          },
        },
        {
          "@type": "Question",
          name: "What AI models are used to generate course videos?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Scenith supports Wan 2.5, Kling 2.6 Pro, Veo 3.1 (by Google), Kling 2.5 Turbo, and Grok Imagine. Each model specializes in different visual styles and quality levels, giving course creators flexibility to match their brand.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to generate a course video with AI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AI course video generation typically takes between 30 seconds and 2 minutes depending on the model chosen and clip duration. Wan 2.5 is the fastest option. Veo 3.1 produces the highest quality but takes slightly longer.",
          },
        },
        {
          "@type": "Question",
          name: "Can I use AI-generated course videos commercially on Udemy, Teachable, or Thinkific?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. All videos generated on Scenith come with full commercial rights. You can publish them on Udemy, Teachable, Thinkific, Kajabi, Podia, or any other online learning platform — no attribution required.",
          },
        },
        {
          "@type": "Question",
          name: "What resolution and format are AI course videos exported in?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Course videos are exported as MP4 files. Resolution options range from 480p to 1080p depending on the model. Wan 2.5 supports up to 1080p. Veo 3.1 produces cinematic-quality output suitable for high-resolution displays.",
          },
        },
      ],
    },
  ],
};

// ─── Static Data ──────────────────────────────────────────────────────────────

const USE_CASES = [
  {
    emoji: "🧪",
    title: "Science & Biology",
    prompt: "Cinematic timelapse of cell division under microscope, glowing organelles, bioluminescent cells splitting in slow motion, dark background, 4K",
    tag: "Concept Visualizer",
    color: "#10b981",
  },
  {
    emoji: "📐",
    title: "Mathematics",
    prompt: "Abstract 3D visualization of geometric transformations — triangles morphing into fractals, glowing neon lines on dark slate background, cinematic",
    tag: "Visual Explainer",
    color: "#6355dc",
  },
  {
    emoji: "🌍",
    title: "Geography & History",
    prompt: "Aerial drone shot of ancient Rome reconstruction at golden hour, forum, colosseum, Roman citizens, epic cinematic pan, ultra-detailed",
    tag: "Historical Simulation",
    color: "#f59e0b",
  },
  {
    emoji: "💻",
    title: "Coding & Tech",
    prompt: "Futuristic data visualization — glowing code streams cascading down dark screens, binary rivers, circuit board universe, neon blue, 4K",
    tag: "Tech Explainer",
    color: "#3b82f6",
  },
  {
    emoji: "🏋️",
    title: "Fitness & Wellness",
    prompt: "Slow motion athlete running on mountain trail at sunrise, dramatic lens flare, misty valley below, cinematic sports photography style",
    tag: "Intro Sequence",
    color: "#ef4444",
  },
  {
    emoji: "🎸",
    title: "Music & Arts",
    prompt: "Abstract fluid art simulation — deep cobalt and gold ink swirling in slow motion, dark water, macro lens, rhythmic wave patterns, cinematic",
    tag: "Creative Intro",
    color: "#ec4899",
  },
];

const MODELS = [
  {
    key: "WAN_2_5",
    name: "Wan 2.5",
    logo: "https://cdn.scenith.in/brand-logos/WanNew%20ai%20logo.png",
    badge: "Fastest",
    badgeColor: "#10b981",
    desc: "Best for quick explainers and concept animations. Up to 1080p, 10-second clips.",
    strengths: ["Speed", "480p–1080p", "Text & Image"],
  },
  {
    key: "KLING_2_6_PRO",
    name: "Kling 2.6 Pro",
    logo: "https://cdn.scenith.in/brand-logos/Kling%20logo.webp",
    badge: "Most Popular",
    badgeColor: "#6355dc",
    desc: "Cinematic quality intro sequences and b-roll footage for premium course branding.",
    strengths: ["Cinematic", "10s clips", "Image-to-Video"],
  },
  {
    key: "VEO_3_1",
    name: "Veo 3.1",
    logo: "https://cdn.scenith.in/brand-logos/Google%20Logo.webp",
    badge: "Highest Quality",
    badgeColor: "#f59e0b",
    desc: "Google's flagship model. Photorealistic course video backgrounds and visualizations.",
    strengths: ["Photorealism", "Audio", "Ultra Detail"],
  },
  {
    key: "GROK_IMAGINE",
    name: "Grok Imagine",
    logo: "https://cdn.scenith.in/brand-logos/Grok.png",
    badge: "Audio + Video",
    badgeColor: "#3b82f6",
    desc: "The only model that generates AI audio alongside video — perfect for voiceover-paired clips.",
    strengths: ["Built-in Audio", "720p", "Unique Style"],
  },
];

const PLATFORMS = [
  { name: "Udemy", emoji: "🟠" },
  { name: "Teachable", emoji: "🟢" },
  { name: "Thinkific", emoji: "🔵" },
  { name: "Kajabi", emoji: "🟣" },
  { name: "Podia", emoji: "🟡" },
  { name: "Coursera", emoji: "🔷" },
  { name: "Skillshare", emoji: "⚫" },
  { name: "YouTube Learning", emoji: "🔴" },
  { name: "LinkedIn Learning", emoji: "🔹" },
  { name: "Gumroad", emoji: "🩷" },
];

const STATS = [
  { value: "2 min", label: "Avg. generation time" },
  { value: "6", label: "AI video models" },
  { value: "1080p", label: "Max resolution" },
  { value: "10s", label: "Max clip duration" },
  { value: "3", label: "Aspect ratios (16:9, 9:16, 1:1)" },
  { value: "Free", label: "To start — 50 credits" },
];

const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Write your lesson concept",
    body: "Describe what you want your video to show. Be specific: mention visual style, setting, motion, mood. Use our prompt chips to get started instantly.",
    tip: "💡 Tip: The more cinematic your description, the more professional your output.",
  },
  {
    step: "02",
    title: "Pick your AI model",
    body: "Choose from Wan 2.5 (fast), Kling 2.6 (cinematic), or Veo 3.1 (Google's best). Each model has strengths for different course types.",
    tip: "💡 Tip: Science and tech courses shine with Veo 3.1. Quick explainers — go with Wan 2.5.",
  },
  {
    step: "03",
    title: "Select duration & ratio",
    body: "Choose 5s or 10s clips. Pick 16:9 for desktop LMS, 9:16 for mobile-first platforms, or 1:1 for social promotion.",
    tip: "💡 Tip: Always generate your course intro in 16:9 and promotional clips in 9:16.",
  },
  {
    step: "04",
    title: "Generate, download, publish",
    body: "Hit Generate. Your MP4 is ready in 30–120 seconds. Download directly — no watermarks, full commercial rights.",
    tip: "💡 Tip: Stack multiple clips to create a full 60-second intro sequence for your course.",
  },
];

const COMPARISON_ROWS = [
  ["Professional video studio", "$2,000–$15,000 per shoot", "Days–weeks", "Camera, lighting, editor, actor"],
  ["Stock footage (Shutterstock / Getty)", "$50–$500 per clip", "Immediate", "Generic, non-unique, licensing restrictions"],
  ["Freelance videographer", "$500–$3,000 per project", "3–14 days", "Briefing, revisions, delivery"],
  ["DIY screen recording", "Free (software cost)", "Hours", "Looks unprofessional, requires editing skills"],
  ["Scenith AI Video Generator", "From $9/mo (300cr)", "30–120 seconds", "No equipment, fully custom, commercial rights"],
];

// ─── Page Component ───────────────────────────────────────────────────────────

export default function AiVideoGeneratorForCoursesPage() {
  const CTA_HREF =
    "https://scenith.in/create-ai-content?tab=video&utm_source=tool-page&utm_medium=cta&utm_campaign=ai-video-for-courses";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="avc-root">

        {/* ── Breadcrumb ── */}
        <nav className="avc-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden>/</span>
          <Link href="/tools">Tools</Link>
          <span aria-hidden>/</span>
          <span aria-current="page">AI Video Generator for Courses</span>
        </nav>

        {/* ════════════════════════════════════════════════
            HERO
        ════════════════════════════════════════════════ */}
        <header className="avc-hero">
          <div className="avc-hero-bg" aria-hidden />
          <div className="avc-hero-inner">
            <div className="avc-hero-badge">
              <span className="avc-badge-dot" />
              Built for Course Creators · 2026
            </div>

            <h1 className="avc-hero-h1">
              AI Video Generator
              <br />
              <span className="avc-hero-accent">for Online Courses</span>
            </h1>

            <p className="avc-hero-sub">
              Turn your course script into cinematic video in under 2 minutes —
              no camera, no crew, no editing software.
              <br />
              Powered by <strong>Wan 2.5, Veo 3.1, Kling 2.6</strong> and more.
            </p>

            {/* Stats bar */}
            <div className="avc-stats-bar">
              {STATS.map((s) => (
                <div key={s.label} className="avc-stat">
                  <span className="avc-stat-val">{s.value}</span>
                  <span className="avc-stat-label">{s.label}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="avc-hero-cta-group">
              <a href={CTA_HREF} className="avc-cta-primary">
                <span className="avc-cta-icon">🎬</span>
                Generate Your First Course Video Free
                <span className="avc-cta-arrow">→</span>
              </a>
              <p className="avc-cta-note">
                50 free credits · No credit card required · MP4 download
              </p>
            </div>

            {/* Model logos */}
            <div className="avc-model-logos">
              <span className="avc-model-logos-label">Powered by</span>
              {MODELS.map((m) => (
                <div key={m.key} className="avc-model-chip">
                  <img src={m.logo} alt={m.name} width={16} height={16} />
                  {m.name}
                </div>
              ))}
            </div>
          </div>

          {/* Video mockup grid */}
          <div className="avc-hero-mockup" aria-hidden>
            <div className="avc-mockup-card avc-mockup-card--1">
              <div className="avc-mockup-shimmer" />
              <div className="avc-mockup-label">🧪 Biology — Cell Division</div>
            </div>
            <div className="avc-mockup-card avc-mockup-card--2">
              <div className="avc-mockup-shimmer" />
              <div className="avc-mockup-label">🌍 History — Ancient Rome</div>
            </div>
            <div className="avc-mockup-card avc-mockup-card--3">
              <div className="avc-mockup-shimmer" />
              <div className="avc-mockup-label">💻 Coding — Data Streams</div>
            </div>
            <div className="avc-mockup-card avc-mockup-card--4">
              <div className="avc-mockup-shimmer" />
              <div className="avc-mockup-label">📐 Math — Geometry</div>
            </div>
          </div>
        </header>

        <main className="avc-main">

          {/* ════════════════════════════════════════════════
              THE PROBLEM — hook educators
          ════════════════════════════════════════════════ */}
          <section className="avc-section avc-section--problem">
            <div className="avc-section-inner">
              <div className="avc-overline">The Problem</div>
              <h2 className="avc-h2">
                Most course creators can't afford professional video production.
                And basic screen recordings aren't good enough anymore.
              </h2>
              <div className="avc-problem-grid">
                <div className="avc-problem-card">
                  <span className="avc-problem-icon">💸</span>
                  <h3>Too expensive</h3>
                  <p>A single professional video shoot costs $2,000–$15,000. For a 30-lesson course, that's a $60,000+ production budget most creators don't have.</p>
                </div>
                <div className="avc-problem-card">
                  <span className="avc-problem-icon">⏳</span>
                  <h3>Too slow</h3>
                  <p>Planning, filming, editing, color grading, exporting — a 5-minute lesson video can take 2–3 full days. Multiply that across 30 lessons and you're looking at months.</p>
                </div>
                <div className="avc-problem-card">
                  <span className="avc-problem-icon">😰</span>
                  <h3>Camera anxiety</h3>
                  <p>A 2023 CreatorIQ survey found that 67% of first-time course creators never launch because of fear of being on camera. AI video removes this blocker entirely.</p>
                </div>
                <div className="avc-problem-card">
                  <span className="avc-problem-icon">🎥</span>
                  <h3>Generic stock footage</h3>
                  <p>Stock libraries offer clips that have been used in thousands of other courses. Your content looks identical to everyone else's — and students notice.</p>
                </div>
              </div>
              <div className="avc-problem-callout">
                <strong>In 2026, AI video generation solves all of this.</strong> Type a prompt. Get a unique, cinematic, commercial-ready MP4 in under 2 minutes. No camera. No crew. No editing.
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════
              HOW IT WORKS
          ════════════════════════════════════════════════ */}
          <section className="avc-section">
            <div className="avc-section-inner">
              <div className="avc-overline">How It Works</div>
              <h2 className="avc-h2">From script to video in 4 steps</h2>
              <p className="avc-section-body">No learning curve. No software to install. Open the tool in your browser and start creating.</p>
              <div className="avc-workflow">
                {WORKFLOW_STEPS.map((ws) => (
                  <div key={ws.step} className="avc-workflow-step">
                    <div className="avc-workflow-num">{ws.step}</div>
                    <div className="avc-workflow-content">
                      <h3>{ws.title}</h3>
                      <p>{ws.body}</p>
                      <div className="avc-workflow-tip">{ws.tip}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="avc-cta-center">
                <a href={CTA_HREF} className="avc-cta-primary avc-cta-primary--sm">
                  🎬 Try It Free — Start Generating
                  <span className="avc-cta-arrow">→</span>
                </a>
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════
              USE CASES — subject-specific prompts
          ════════════════════════════════════════════════ */}
          <section className="avc-section avc-section--dark">
            <div className="avc-section-inner">
              <div className="avc-overline avc-overline--light">Real Prompts by Course Type</div>
              <h2 className="avc-h2 avc-h2--light">
                Every subject has a visual story waiting to be told
              </h2>
              <p className="avc-section-body avc-section-body--light">
                These are real prompts you can paste directly into Scenith's video generator and get professional results. Click any card to generate.
              </p>
              <div className="avc-usecase-grid">
                {USE_CASES.map((uc) => (
                  <a
                    key={uc.title}
                    href={`${CTA_HREF}&prompt=${encodeURIComponent(uc.prompt)}`}
                    className="avc-usecase-card"
                    style={{ "--uc-color": uc.color } as React.CSSProperties}
                  >
                    <div className="avc-usecase-top">
                      <span className="avc-usecase-emoji">{uc.emoji}</span>
                      <span className="avc-usecase-tag" style={{ color: uc.color }}>
                        {uc.tag}
                      </span>
                    </div>
                    <h3 className="avc-usecase-title">{uc.title}</h3>
                    <p className="avc-usecase-prompt">"{uc.prompt}"</p>
                    <div className="avc-usecase-cta">
                      Try this prompt →
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════
              AI MODELS — deep dive
          ════════════════════════════════════════════════ */}
          <section className="avc-section">
            <div className="avc-section-inner">
              <div className="avc-overline">AI Models</div>
              <h2 className="avc-h2">
                Choose the right AI model for your course type
              </h2>
              <p className="avc-section-body">
                Not all AI video models are built the same. Here's how each one performs for different kinds of educational content.
              </p>
              <div className="avc-models-grid">
                {MODELS.map((m) => (
                  <div key={m.key} className="avc-model-card">
                    <div className="avc-model-card-top">
                      <img src={m.logo} alt={m.name} width={32} height={32} className="avc-model-card-logo" />
                      <div>
                        <div className="avc-model-card-name">{m.name}</div>
                        <span
                          className="avc-model-badge"
                          style={{ background: m.badgeColor + "22", color: m.badgeColor, border: `1px solid ${m.badgeColor}44` }}
                        >
                          {m.badge}
                        </span>
                      </div>
                    </div>
                    <p className="avc-model-desc">{m.desc}</p>
                    <div className="avc-model-strengths">
                      {m.strengths.map((s) => (
                        <span key={s} className="avc-strength-tag">{s}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="avc-model-table-wrapper">
                <table className="avc-model-table">
                  <caption className="avc-table-caption">AI Video Model Comparison for Course Creators</caption>
                  <thead>
                    <tr>
                      <th>Model</th>
                      <th>Best For</th>
                      <th>Max Res.</th>
                      <th>Audio</th>
                      <th>Speed</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Wan 2.5</strong></td>
                      <td>Quick explainers, concept animations</td>
                      <td>1080p</td>
                      <td>—</td>
                      <td>⚡ Fastest</td>
                    </tr>
                    <tr>
                      <td><strong>Kling 2.5 Turbo</strong></td>
                      <td>Mid-range cinematic B-roll</td>
                      <td>1080p</td>
                      <td>—</td>
                      <td>Fast</td>
                    </tr>
                    <tr>
                      <td><strong>Kling 2.6 Pro</strong></td>
                      <td>Course intro sequences, branding</td>
                      <td>1080p</td>
                      <td>Optional</td>
                      <td>Moderate</td>
                    </tr>
                    <tr>
                      <td><strong>Veo 3.1 Fast</strong></td>
                      <td>High-quality visualizations</td>
                      <td>1080p</td>
                      <td>Optional</td>
                      <td>Moderate</td>
                    </tr>
                    <tr>
                      <td><strong>Veo 3.1</strong></td>
                      <td>Flagship quality, science & nature topics</td>
                      <td>1080p</td>
                      <td>Optional</td>
                      <td>Slower</td>
                    </tr>
                    <tr>
                      <td><strong>Grok Imagine</strong></td>
                      <td>Audio + video combined, unique style</td>
                      <td>720p</td>
                      <td>✅ Built-in</td>
                      <td>Fast</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════
              BIG INLINE CTA
          ════════════════════════════════════════════════ */}
          <section className="avc-section avc-cta-block">
            <div className="avc-section-inner">
              <div className="avc-cta-block-inner">
                <div className="avc-cta-block-glow" aria-hidden />
                <div className="avc-overline avc-overline--light">Start Creating</div>
                <h2 className="avc-cta-block-h2">
                  Your next course module
                  <br />
                  starts with one prompt.
                </h2>
                <p className="avc-cta-block-sub">
                  50 free credits. No card needed. Generate your first course video in under 2 minutes — then decide if you want more.
                </p>
                <a href={CTA_HREF} className="avc-cta-primary avc-cta-primary--xl">
                  <span className="avc-cta-icon">🎬</span>
                  Open AI Video Generator
                  <span className="avc-cta-arrow">→</span>
                </a>
                <div className="avc-cta-block-trust">
                  <span>✓ No camera required</span>
                  <span>✓ No editing software</span>
                  <span>✓ MP4 download</span>
                  <span>✓ Commercial rights</span>
                </div>
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════
              PLATFORM COMPATIBILITY
          ════════════════════════════════════════════════ */}
          <section className="avc-section">
            <div className="avc-section-inner">
              <div className="avc-overline">Platform Compatibility</div>
              <h2 className="avc-h2">Works with every online course platform</h2>
              <p className="avc-section-body">
                AI-generated videos from Scenith are standard MP4 files. They upload directly to every major LMS and course hosting platform without format conversion.
              </p>
              <div className="avc-platforms">
                {PLATFORMS.map((p) => (
                  <div key={p.name} className="avc-platform-chip">
                    <span>{p.emoji}</span>
                    {p.name}
                  </div>
                ))}
              </div>
              <p className="avc-section-body" style={{ marginTop: 24 }}>
                Because Scenith exports standard H.264 MP4 files, you can embed AI-generated videos in <strong>Notion course pages</strong>, <strong>Substack posts</strong>, <strong>WordPress LMS plugins</strong>, <strong>Google Classroom</strong>, and even directly to <strong>YouTube</strong> and <strong>Vimeo</strong> with no transcoding needed.
              </p>
            </div>
          </section>

          {/* ════════════════════════════════════════════════
              DEEP CONTENT — what makes good course video
          ════════════════════════════════════════════════ */}
          <section className="avc-section avc-section--tinted">
            <div className="avc-section-inner">
              <div className="avc-overline">Course Video Strategy</div>
              <h2 className="avc-h2">
                What makes a great AI-generated course video in 2026?
              </h2>

              <div className="avc-longform">
                <h3>1. The Cinematic Intro — The First 10 Seconds Define Enrollment Rates</h3>
                <p>
                  According to a 2025 Udemy learner retention study, courses with a cinematic intro video convert at 2.4× the rate of courses with a basic talking-head opener. The human brain makes a quality judgment in the first 8 seconds. An AI-generated intro — deep space visuals, a time-lapse cityscape, glowing data streams — signals production quality even before you say your first word.
                </p>
                <p>
                  With Scenith's AI video generator, you can create a 10-second cinematic opener specifically designed for your course subject. A cybersecurity course might open with neon-lit server racks and cascading code. A nutrition course opens with slow-motion fresh produce market shots in warm golden hour light. A data science course opens with glowing 3D scatter plots morphing into neural networks.
                </p>
                <p>
                  The trick: generate 3–5 variations using slightly different prompts, pick the best one, and loop it as your course thumbnail video on Udemy or Teachable. This alone can lift your click-through rate by 30–60% according to A/B tests run by top Udemy instructors.
                </p>

                <h3>2. B-Roll Footage — Eliminating Dead Air in Screen Recording Courses</h3>
                <p>
                  If your course is primarily screen-recording based (coding, design, software tutorials), AI-generated B-roll is your secret weapon. Transition slides feel static. But a 5-second AI clip of glowing circuits or abstract data flowing serves as a visual reset that keeps attention locked while you set up the next section.
                </p>
                <p>
                  The workflow used by the most sophisticated course creators in 2026 is: record screen content in Loom or OBS → export → layer AI-generated B-roll in CapCut or DaVinci Resolve → publish. The AI clips cost less than $1 each and the production value jumps dramatically.
                </p>
                <p>
                  You don't need the clips to be directly related to what's on screen — they just need to match the emotional register. A "building momentum" section in a business course pairs well with a timelapse of a city at sunset. A "common mistakes" segment works visually with a dramatic stormy ocean clip. It's emotional alignment, not literal illustration.
                </p>

                <h3>3. Concept Visualizations — Teaching the Impossible to Show</h3>
                <p>
                  Some concepts can't be filmed. Quantum entanglement. Tectonic plate movement. Bloodstream biochemistry. Blockchain transaction propagation. These are concepts that live in textbooks as static diagrams — and they've been taught that way for 50 years because producing a custom animation cost $10,000–$100,000 per minute.
                </p>
                <p>
                  AI video generation fundamentally changes this equation. A prompt like "slow motion visualization of a virus entering a cell, mRNA unfolding inside the nucleus, CRISPR scissors cutting DNA strands, bioluminescent, microscopy aesthetic" produces something that would have required a professional motion graphics team in 2020. In 2026, it takes 90 seconds and costs under $1.
                </p>
                <p>
                  This is why science, medicine, engineering, and environmental studies course creators are the fastest-growing segment of AI video tool users. The visual gap between what they need to show and what they could afford to produce is finally closing.
                </p>

                <h3>4. Thumbnail Videos vs. Static Images — The LMS Meta-Game</h3>
                <p>
                  Udemy, Teachable, and Thinkific all now support video thumbnails (also called "preview videos" or "promo clips"). A looping 15–30 second video thumbnail gets 3–7× more marketplace engagement than a static image according to Udemy's own 2025 creator data.
                </p>
                <p>
                  The formula that works: Generate a 10-second AI clip that matches your course subject → add your course title as text overlay in any video editor → loop it twice → upload as your course thumbnail. Total time with AI generation: about 15 minutes. Total cost: under $3 in credits.
                </p>

                <h3>5. Promotional Content — Social-First Course Marketing</h3>
                <p>
                  Promoting your course on Instagram Reels, TikTok, and YouTube Shorts requires a constant output of short-form video content. Course creators who post 4–7 short videos per week announcing, previewing, and explaining their course grow their student base 5× faster than creators who only use static posts.
                </p>
                <p>
                  AI video makes this sustainable. Generate a 5-second dramatic course subject video → add a hook text overlay → post with a course link. Repeat daily. The marginal cost is effectively zero. The marginal time is 10 minutes per post. This is the only reason some faceless course creators on YouTube and TikTok are pulling in $30,000–$200,000 per year with minimal equipment investment.
                </p>

                <h3>6. Image-to-Video — Animating Your Own Course Assets</h3>
                <p>
                  Scenith's image-to-video feature is particularly powerful for course creators who already have custom AI images or designed slides. Upload your static lesson diagram, concept map, or infographic, write a motion prompt like "slowly zoom in and pan across, subtle parallax, cinematic depth of field," and the AI animates your existing asset.
                </p>
                <p>
                  This is especially useful for: marketing materials where you have a designed graphic you want to animate, historical course content where you have illustrations you want to bring to life, and scientific diagrams where you want to add depth and motion without rebuilding from scratch.
                </p>
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════
              COMPARISON TABLE
          ════════════════════════════════════════════════ */}
          <section className="avc-section">
            <div className="avc-section-inner">
              <div className="avc-overline">Cost Comparison</div>
              <h2 className="avc-h2">
                AI video vs. every other course video option
              </h2>
              <p className="avc-section-body">
                The numbers are stark. Here's what course creators spend across the most common video production methods.
              </p>
              <div className="avc-compare-table-wrap">
                <table className="avc-compare-table">
                  <thead>
                    <tr>
                      <th>Method</th>
                      <th>Cost per Clip</th>
                      <th>Turnaround</th>
                      <th>Requirements</th>
                    </tr>
                  </thead>
                  <tbody>
                    {COMPARISON_ROWS.map((row, i) => (
                      <tr key={i} className={i === 4 ? "avc-compare-highlight" : ""}>
                        {row.map((cell, j) => (
                          <td key={j}>{j === 0 && i === 4 ? <strong>{cell}</strong> : cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="avc-section-body" style={{ marginTop: 16 }}>
                At Scenith's Creator Lite plan ($9/month for 300 credits), a single AI video clip costs approximately $0.30–$0.60 depending on the model and duration. That's 50–300× cheaper than stock footage licensing and 3,000–30,000× cheaper than professional video production.
              </p>
            </div>
          </section>

          {/* ════════════════════════════════════════════════
              VOICE + VIDEO COMBO
          ════════════════════════════════════════════════ */}
          <section className="avc-section avc-section--dark">
            <div className="avc-section-inner">
              <div className="avc-overline avc-overline--light">Voice + Video</div>
              <h2 className="avc-h2 avc-h2--light">
                The full course video stack — without leaving Scenith
              </h2>
              <p className="avc-section-body avc-section-body--light">
                The most complete AI-generated course module pipeline on the internet uses Scenith for both audio and video. Here's the workflow used by our top course creator users:
              </p>
              <div className="avc-stack-steps">
                <div className="avc-stack-step">
                  <div className="avc-stack-step-num">①</div>
                  <div className="avc-stack-step-body">
                    <strong>Generate the voiceover</strong>
                    <p>Use Scenith's Voice tab. Pick a Google, OpenAI, or Azure voice. Paste your lesson script. Generate a natural-sounding MP3 narration in under 5 seconds.</p>
                  </div>
                </div>
                <div className="avc-stack-step">
                  <div className="avc-stack-step-num">②</div>
                  <div className="avc-stack-step-body">
                    <strong>Generate matching B-roll video</strong>
                    <p>Switch to the Video tab. Write a prompt that visually matches each section of your narration. Generate 5–10 second clips per section using Wan 2.5 or Kling 2.6.</p>
                  </div>
                </div>
                <div className="avc-stack-step">
                  <div className="avc-stack-step-num">③</div>
                  <div className="avc-stack-step-body">
                    <strong>Combine in CapCut or DaVinci (free)</strong>
                    <p>Import your MP3 voiceover and MP4 video clips. Place the narration on the audio track. Layer B-roll clips to match the script timing. Export at 1080p.</p>
                  </div>
                </div>
                <div className="avc-stack-step">
                  <div className="avc-stack-step-num">④</div>
                  <div className="avc-stack-step-body">
                    <strong>Add subtitles (optional but powerful)</strong>
                    <p>Upload to Scenith's subtitle tool to auto-generate burned-in captions. Courses with subtitles have 42% better completion rates — it takes 2 minutes.</p>
                  </div>
                </div>
                <div className="avc-stack-step">
                  <div className="avc-stack-step-num">⑤</div>
                  <div className="avc-stack-step-body">
                    <strong>Publish directly to your platform</strong>
                    <p>Upload the final MP4 to Udemy, Teachable, Kajabi, or YouTube. Full commercial rights, no watermarks, no attribution needed.</p>
                  </div>
                </div>
              </div>
              <div className="avc-cta-center" style={{ marginTop: 32 }}>
                <a href={CTA_HREF} className="avc-cta-primary">
                  🎙️ Start with Voice + Video →
                </a>
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════
              PROMPT GUIDE
          ════════════════════════════════════════════════ */}
          <section className="avc-section">
            <div className="avc-section-inner">
              <div className="avc-overline">Prompt Engineering</div>
              <h2 className="avc-h2">
                How to write prompts that produce
                professional-grade course videos
              </h2>
              <p className="avc-section-body">
                The quality of your AI video is almost entirely determined by the quality of your prompt. Here's a proven framework used by professional course creators to consistently get cinematic results.
              </p>
              <div className="avc-prompt-framework">
                <div className="avc-prompt-part">
                  <div className="avc-prompt-part-label">Subject + Action</div>
                  <div className="avc-prompt-part-body">What is happening in the video? Be specific about the subject and the motion. "A DNA double helix rotating" is better than "DNA." "Water molecules colliding" is better than "chemistry."</div>
                  <div className="avc-prompt-example">✅ "A glowing DNA double helix slowly rotating in zero gravity"</div>
                </div>
                <div className="avc-prompt-plus">+</div>
                <div className="avc-prompt-part">
                  <div className="avc-prompt-part-label">Visual Style + Mood</div>
                  <div className="avc-prompt-part-body">What does it look like and feel like? Reference established visual styles: bioluminescent, cinematic, microscopy aesthetic, 4K HDR, editorial photography style, National Geographic style.</div>
                  <div className="avc-prompt-example">✅ "bioluminescent, dark background, microscopy aesthetic, ethereal blue glow"</div>
                </div>
                <div className="avc-prompt-plus">+</div>
                <div className="avc-prompt-part">
                  <div className="avc-prompt-part-label">Camera + Lighting</div>
                  <div className="avc-prompt-part-body">How is the camera moving? What's the lighting? Use terms like: slow pan, dramatic zoom, god rays, golden hour light, cinematic wide shot, macro lens, overhead aerial.</div>
                  <div className="avc-prompt-example">✅ "slow rotation, dramatic single-point light source, depth of field blur"</div>
                </div>
                <div className="avc-prompt-plus">+</div>
                <div className="avc-prompt-part">
                  <div className="avc-prompt-part-label">Quality Modifiers</div>
                  <div className="avc-prompt-part-body">End with quality anchors that push the model toward its highest output tier. These terms consistently elevate results across all models.</div>
                  <div className="avc-prompt-example">✅ "ultra-detailed, 4K, cinematic, photorealistic, professional"</div>
                </div>
              </div>
              <div className="avc-prompt-result">
                <div className="avc-prompt-result-label">🎬 Full Prompt Example (Biology Course)</div>
                <p className="avc-prompt-result-text">
                  "A glowing DNA double helix slowly rotating in zero gravity, bioluminescent blue and teal colors, individual base pairs visible, dark infinite space background, microscopy aesthetic, slow dramatic rotation, depth of field blur, single light source, ultra-detailed, 4K cinematic, photorealistic"
                </p>
              </div>

              <div className="avc-longform" style={{ marginTop: 40 }}>
                <h3>Subject-Specific Prompt Formulas for Educators</h3>

                <h4>Science & Biology Courses</h4>
                <p>
                  For science courses, the most effective visual language combines microscopy aesthetics with bioluminescence. Terms that reliably produce high-quality biology visualizations: "electron microscopy style," "scanning tunneling microscope aesthetic," "cellular membrane," "mitochondrial detail," "ATP synthase rotation," "axon firing sequence." Pair with "dark background" and "bioluminescent" for a look that feels scientifically authoritative while being visually stunning.
                </p>

                <h4>Technology & Coding Courses</h4>
                <p>
                  Tech courses benefit from data visualization aesthetics. Use: "glowing code streams," "neural network visualization," "binary data cascading," "circuit board macroshot," "server farm aerial," "blockchain node network," "API call flow diagram animated." Pair with "neon blue and purple," "dark background," "cinematic" for the aesthetic that tech audiences trust.
                </p>

                <h4>Business & Finance Courses</h4>
                <p>
                  Business content works best with urban, architectural, or strategic visual metaphors. Use: "aerial city timelapse at dusk," "executive boardroom through glass reflection," "stock exchange floor dramatic wide shot," "handshake extreme closeup in golden light," "chess pieces on a marble board." Pair with "corporate editorial style," "warm amber tones," "sharp focus."
                </p>

                <h4>Personal Development & Wellness Courses</h4>
                <p>
                  Wellness and self-improvement content needs warmth, nature, and human connection. Use: "person meditating on mountain at sunrise," "forest bathing scene," "slow motion rain on window with warm interior light," "hands journaling on a wooden table," "sunrise timelapse over misty valley." Pair with "warm colour grading," "golden hour," "soft bokeh," "cinematic."
                </p>

                <h4>History & Social Studies Courses</h4>
                <p>
                  Historical content is where AI video is most transformative — showing worlds that can no longer be filmed. Use: "ancient Rome reconstruction at dusk," "medieval market scene," "1920s New York street reconstruction," "ancient Egyptian temple interior," "Viking longship at sea in storm." Pair with "historically accurate reconstruction," "cinematic epic," "dramatic lighting," "period-accurate detail."
                </p>
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════
              SECOND BIG CTA
          ════════════════════════════════════════════════ */}
          <section className="avc-section avc-cta-block avc-cta-block--v2">
            <div className="avc-section-inner">
              <div className="avc-cta-block-inner">
                <div className="avc-cta-block-glow avc-cta-block-glow--v2" aria-hidden />
                <h2 className="avc-cta-block-h2">
                  Ready to create your
                  <br />
                  <span style={{ color: "#10b981" }}>first AI course video?</span>
                </h2>
                <p className="avc-cta-block-sub">
                  Join thousands of course creators who've switched from expensive stock footage and time-consuming recording setups to AI-generated video. Your students won't know the difference — and your production time will drop by 90%.
                </p>
                <a href={CTA_HREF} className="avc-cta-primary avc-cta-primary--xl avc-cta-primary--green">
                  <span className="avc-cta-icon">🚀</span>
                  Generate My Course Video Now
                  <span className="avc-cta-arrow">→</span>
                </a>
                <div className="avc-cta-block-trust">
                  <span>✓ 50 free credits on signup</span>
                  <span>✓ 6 AI video models</span>
                  <span>✓ No camera required</span>
                  <span>✓ Commercial rights included</span>
                  <span>✓ MP4 download — no watermarks</span>
                </div>
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════
              FAQ
          ════════════════════════════════════════════════ */}
          <section className="avc-section">
            <div className="avc-section-inner">
              <div className="avc-overline">FAQ</div>
              <h2 className="avc-h2">
                Frequently asked questions about AI course video generation
              </h2>
              <div className="avc-faq">

                <details className="avc-faq-item">
                  <summary>Can I create online course videos without a camera using AI?</summary>
                  <p>Yes — this is literally what Scenith's AI video generator was built for. You type a description of what you want to show, pick a model (Wan 2.5, Kling 2.6, Veo 3.1, etc.), and the AI generates a professional MP4 video in 30–120 seconds. No camera, microphone, lighting, backdrop, or video editing software is required. The result is a unique, original video that doesn't appear in any stock library.</p>
                </details>

                <details className="avc-faq-item">
                  <summary>What AI models are best for educational content?</summary>
                  <p>For most course creators: Wan 2.5 is the go-to for fast, affordable concept visualization — great for science, tech, and explainer content. Kling 2.6 Pro is the best for cinematic course intros and promotional content. Veo 3.1 (Google) is the highest-quality model available and produces results that genuinely rival professional motion graphics for biology, geography, and historical simulation content. Grok Imagine is unique because it also generates audio, making it useful for ambient course intro sounds.</p>
                </details>

                <details className="avc-faq-item">
                  <summary>Can I sell courses using AI-generated video on Udemy, Teachable, or Coursera?</summary>
                  <p>Absolutely. Scenith grants full commercial rights on all generated content — videos, images, and audio. There is no attribution requirement, no licensing restrictions, and no platform exclusivity. You can upload AI-generated videos to Udemy, Teachable, Thinkific, Kajabi, Podia, Coursera, LinkedIn Learning, YouTube, or any other platform and monetize them freely.</p>
                </details>

                <details className="avc-faq-item">
                  <summary>How do AI-generated course videos compare to professional studio production?</summary>
                  <p>In 2026, the gap has narrowed dramatically. For B-roll footage, concept visualizations, and intro sequences, AI video is indistinguishable from professional production in many cases — especially with Veo 3.1 and Kling 2.6. For talking-head or interview-style content, you still need a camera. But for everything else — establishing shots, animated concept diagrams, cinematic openers, promotional clips — AI video matches or exceeds stock footage quality at 50–300× lower cost.</p>
                </details>

                <details className="avc-faq-item">
                  <summary>What resolution are AI-generated course videos exported at?</summary>
                  <p>Depending on the model: Wan 2.5 supports 480p, 720p, and 1080p. Kling 2.5 Turbo and 2.6 Pro output at 1080p. Veo 3.1 outputs at 1080p with exceptional quality. Grok Imagine outputs at 480p and 720p. All videos are exported as MP4 (H.264) files, compatible with every LMS and video hosting platform.</p>
                </details>

                <details className="avc-faq-item">
                  <summary>How many course videos can I generate for free?</summary>
                  <p>You start with 50 free credits — no credit card required. A Wan 2.5 5-second clip at 480p costs 46 credits, so you can generate one free video on signup. Paid plans start at $1 (Spark) or $9/month (Creator Lite — 300 credits). At 300 credits per month, you can generate 3–6 full-quality AI video clips per month, which covers a typical weekly course module release schedule.</p>
                </details>

                <details className="avc-faq-item">
                  <summary>Can I use my own course images as the starting frame for AI video?</summary>
                  <p>Yes — Scenith supports image-to-video generation. Upload any PNG or JPG image (your own AI-generated image, a designed slide, a photograph, a diagram) and write a motion prompt. The AI animates your existing asset, adding camera movement, depth, and motion while preserving the core visual content. This is particularly useful for animating course thumbnail graphics or bringing lesson diagrams to life.</p>
                </details>

                <details className="avc-faq-item">
                  <summary>Is AI course video creation ethical and allowed by online course platforms?</summary>
                  <p>Yes. AI-generated video is a production tool, not a content creator — the educational content, teaching, expertise, and course design remain entirely yours. Udemy, Teachable, and other major platforms have no restrictions on AI-generated video content. You are simply using modern tools to produce visuals for your educational content, exactly as generations of educators have used cameras, animation studios, and stock footage before AI existed.</p>
                </details>

                <details className="avc-faq-item">
                  <summary>Can I generate course video in multiple aspect ratios?</summary>
                  <p>Yes. Scenith supports 16:9 (landscape, ideal for LMS platforms like Udemy and Teachable), 9:16 (vertical, ideal for TikTok, Instagram Reels, and YouTube Shorts course promotion), and 1:1 (square, ideal for Instagram feed posts). You can generate the same concept in all three ratios to cover both your course platform and your social media promotion channels from a single workflow.</p>
                </details>

                <details className="avc-faq-item">
                  <summary>How do AI course video generators compare to tools like Synthesia or HeyGen?</summary>
                  <p>Synthesia and HeyGen specialize in AI talking-head avatars — digital humans reading scripts on camera. Scenith specializes in cinematic scene generation — the kind of b-roll, concept visualization, and intro footage that makes a course look cinematic. They're complementary tools: use HeyGen or Synthesia for your presenter footage, and use Scenith for everything that isn't a talking head. Combined, they deliver a full-production course without any real-world filming.</p>
                </details>

              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════
              FINAL CTA
          ════════════════════════════════════════════════ */}
          <section className="avc-section avc-section--final-cta">
            <div className="avc-section-inner">
              <div className="avc-final-cta-inner">
                <h2 className="avc-final-cta-h2">
                  The best time to add professional video to your course was yesterday.
                  <br />
                  The second best time is now.
                </h2>
                <p className="avc-final-cta-sub">
                  50 free credits. No credit card. Your first course video ready in under 2 minutes.
                </p>
                <a href={CTA_HREF} className="avc-cta-primary avc-cta-primary--xl">
                  <span className="avc-cta-icon">🎬</span>
                  Create My Course Video Free
                  <span className="avc-cta-arrow">→</span>
                </a>
                <div className="avc-related-tools">
                  <span className="avc-related-label">Also useful for course creators:</span>
                  <Link href="/create-ai-content?tab=voice" className="avc-related-link">🎙️ AI Voice for Course Narration</Link>
                  <Link href="/create-ai-content?tab=image" className="avc-related-link">🖼️ AI Image for Course Thumbnails</Link>
                  <Link href="/tools/add-subtitles-to-videos" className="avc-related-link">💬 Auto Subtitles for Course Videos</Link>
                </div>
              </div>
            </div>
          </section>

        </main>
      </div>
    </>
  );
}