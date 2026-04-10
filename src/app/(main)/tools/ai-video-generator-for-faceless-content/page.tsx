// app/tools/ai-video-generator-for-faceless-content/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import "./faceless-video.css";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "AI Video Generator for Faceless Content — YouTube & TikTok 2026 | Scenith",
  description:
    "Create viral faceless videos with AI. Generate cinematic B-roll, voiceovers, and complete videos for YouTube, TikTok, and Reels. No camera, no face, no editing skills. Free to start.",
  keywords: [
    "AI video generator for faceless content",
    "faceless YouTube channel AI",
    "AI faceless video maker",
    "generate faceless videos AI",
    "faceless content creation tool",
    "AI B-roll generator for faceless channels",
    "faceless TikTok video AI",
    "YouTube automation AI video",
    "AI video without showing face",
    "faceless channel video generator",
    "text to video faceless content",
    "AI video for faceless creators",
    "best AI tool for faceless YouTube",
    "faceless content AI 2026",
    "automated faceless video generator",
  ],
  alternates: {
    canonical: "https://scenith.in/tools/ai-video-generator-for-faceless-content",
  },
  openGraph: {
    title: "AI Video Generator for Faceless Content | Scenith",
    description:
      "Build a faceless YouTube or TikTok channel with AI. Generate B-roll, voiceovers, and complete videos from text prompts. No camera, no face needed. 50 free credits to start.",
    url: "https://scenith.in/tools/ai-video-generator-for-faceless-content",
    siteName: "Scenith",
    type: "website",
    images: [
      {
        url: "https://scenith.in/og/faceless-ai-video.png",
        width: 1200,
        height: 630,
        alt: "Scenith AI Video Generator for Faceless Content",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Video Generator for Faceless Content | Scenith",
    description:
      "Create faceless videos for YouTube and TikTok with AI. No camera, no face, no editing. Free credits available.",
    images: ["https://scenith.in/og/faceless-ai-video.png"],
  },
};

// ─── JSON-LD Structured Data ───────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Scenith AI Video Generator for Faceless Content",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Web",
  url: "https://scenith.in/tools/ai-video-generator-for-faceless-content",
  description:
    "AI video generation platform specifically for faceless content creators. Generate B-roll, cinematic clips, and complete videos without showing your face. Supports YouTube, TikTok, and Reels formats.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Free credits on signup. Paid plans from $9/month.",
  },
  featureList: [
    "Text-to-video AI generation for faceless content",
    "6 AI video models (Kling, Veo, Wan, Grok)",
    "9:16 portrait for TikTok & Reels",
    "16:9 landscape for YouTube",
    "5-10 second cinematic B-roll clips",
    "AI voiceover integration",
    "Image-to-video for product faceless content",
    "Commercial rights included",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "2156",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can I start a faceless YouTube channel with AI video generation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Thousands of creators run successful faceless YouTube channels using Scenith. Generate AI voiceovers for narration and AI video clips as B-roll. Combine in any editor — no camera or microphone needed.",
      },
    },
    {
      "@type": "Question",
      name: "What's the best AI model for faceless content B-roll?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For faceless content, Wan 2.5 offers the best value at 46 credits per clip. Kling 2.5 Turbo is fastest. Kling 2.6 Pro and Veo 3.1 produce the highest quality cinematic B-roll for premium faceless channels.",
      },
    },
    {
      "@type": "Question",
      name: "How do I combine AI voiceover with AI video for faceless content?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Generate your voiceover in Scenith's AI Voice tab (40+ voices). Generate B-roll clips in the Video tab. Combine them in CapCut (free) — layer the voiceover track over your B-roll clips, add captions, export. Total editing time: under 10 minutes.",
      },
    },
    {
      "@type": "Question",
      name: "What niches work best for faceless AI video channels?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Finance explainers, history documentaries, true crime summaries, tech news, motivational content, and educational topics perform exceptionally well for faceless channels. These niches prioritize information delivery over personality.",
      },
    },
    {
      "@type": "Question",
      name: "Is AI-generated faceless content allowed on YouTube and TikTok?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Both platforms allow AI-generated content as long as you disclose it appropriately. YouTube requires labeling AI-generated content in Studio. TikTok has a built-in AI disclosure toggle. Disclosure does not reduce organic reach.",
      },
    },
    {
      "@type": "Question",
      name: "How much does it cost to start a faceless AI video channel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can start with Scenith's free plan (50 credits). One 5-second AI B-roll clip costs 46-64 credits depending on the model. Paid plans start at $9/month for 300 credits — enough for 5-6 videos per month.",
      },
    },
  ],
};

// ─── Static Data ──────────────────────────────────────────────────────────────

const FACELESS_NICHES = [
  {
    icon: "💰",
    name: "Finance & Investing",
    cpm: "$18-45",
    description: "Explain stocks, crypto, budgeting, and wealth building with AI-generated charts and B-roll.",
    hookExample: "3 things millionaires never spend money on...",
  },
  {
    icon: "📜",
    name: "History & Documentaries",
    cpm: "$12-25",
    description: "Ancient civilizations, world wars, historical figures — bring the past to life with cinematic AI visuals.",
    hookExample: "The day that changed World War II forever...",
  },
  {
    icon: "🔪",
    name: "True Crime",
    cpm: "$15-35",
    description: "Unsolved mysteries, crime stories, and psychological deep dives. High retention niche.",
    hookExample: "The detail investigators missed for 20 years...",
  },
  {
    icon: "🤖",
    name: "AI & Tech News",
    cpm: "$14-30",
    description: "Latest AI breakthroughs, tech trends, and software reviews. Perfect for daily content.",
    hookExample: "This new AI just replaced a $10,000 job...",
  },
  {
    icon: "🧠",
    name: "Self-Improvement",
    cpm: "$12-25",
    description: "Motivation, productivity, mindset, and success habits. High shareability.",
    hookExample: "Stop wasting your 20s on these 5 things...",
  },
  {
    icon: "🌍",
    name: "Geography & Facts",
    cpm: "$10-20",
    description: "Country facts, geographic wonders, and mind-blowing statistics.",
    hookExample: "The country that doesn't exist on maps...",
  },
  {
    icon: "🚀",
    name: "Space & Science",
    cpm: "$11-22",
    description: "Astronomy, physics, and scientific discoveries explained simply.",
    hookExample: "NASA just found something impossible...",
  },
  {
    icon: "📚",
    name: "Book Summaries",
    cpm: "$10-18",
    description: "Summarize bestsellers and timeless classics in 5-minute videos.",
    hookExample: "This book changed how millionaires think...",
  },
];

const VIDEO_MODELS = [
  {
    name: "Wan 2.5",
    badge: "💰 Best Value for Faceless",
    description: "Most affordable option for faceless B-roll. Perfect for daily uploads and testing multiple niches.",
    credits: "46cr",
    speed: "40-70s",
    bestFor: "Budget faceless channels, daily uploads",
  },
  {
    name: "Kling 2.5 Turbo",
    badge: "⚡ Fastest",
    description: "Generate B-roll in under 60 seconds. Great for trending topics and time-sensitive content.",
    credits: "64cr",
    speed: "30-50s",
    bestFor: "News, trending topics, rapid publishing",
  },
  {
    name: "Kling 2.6 Pro",
    badge: "🎬 Premium Quality",
    description: "Cinematic B-roll that looks like stock footage. Best for high-production-value faceless channels.",
    credits: "64cr",
    speed: "60-90s",
    bestFor: "Documentaries, finance explainers, premium content",
  },
  {
    name: "Veo 3.1 Fast",
    badge: "🔵 Google AI",
    description: "Photorealistic B-roll with Google's cutting-edge video model. Excellent for nature and environment scenes.",
    credits: "92cr",
    speed: "50-80s",
    bestFor: "Nature docs, travel, environmental content",
  },
  {
    name: "Grok Imagine",
    badge: "🎵 Audio Included",
    description: "Only model that generates video + AI-composed audio. One prompt = complete faceless clip.",
    credits: "47cr",
    speed: "60-100s",
    bestFor: "Social media clips, quick faceless posts",
  },
];

const WORKFLOW_STEPS = [
  {
    num: "01",
    title: "Write Your Script",
    desc: "Research your topic and write a 60-120 second script. Focus on a strong hook in the first 5 seconds — this determines retention.",
    tip: "Use ChatGPT or Claude to help write scripts in your niche's tone.",
  },
  {
    num: "02",
    title: "Generate AI Voiceover",
    desc: "Paste your script into Scenith's AI Voice tab. Choose from 40+ natural voices across Google, OpenAI, and Azure. Download MP3 in seconds.",
    tip: "For faceless channels, use confident, clear voices like Google Journey or OpenAI Nova.",
  },
  {
    num: "03",
    title: "Generate AI B-Roll",
    desc: "Break your script into segments. Generate 2-4 AI video clips (5-10 seconds each) that match each segment. Use 16:9 for YouTube, 9:16 for TikTok.",
    tip: "Match the mood of your voiceover — dramatic for true crime, calm for educational.",
  },
  {
    num: "04",
    title: "Edit in CapCut (Free)",
    desc: "Import your voiceover MP3 and AI video clips. Layer voiceover over B-roll. Auto-generate captions. Add transitions and background music if desired.",
    tip: "CapCut's auto-caption feature is 95% accurate and takes 30 seconds.",
  },
  {
    num: "05",
    title: "Export & Upload",
    desc: "Export in 1080p for YouTube, 720p for TikTok. Upload, add SEO title/description, and publish. Repeat daily for growth.",
    tip: "Post 1-3 times per day for the first 60 days to build momentum.",
  },
];

const B_ROLL_IDEAS = [
  { niche: "Finance", prompt: "Cinematic stock market graph rising, green arrows pointing up, modern dark background, professional, 4K" },
  { niche: "History", prompt: "Slow aerial drone shot of ancient Roman ruins at golden hour, dramatic lighting, cinematic wide angle" },
  { niche: "True Crime", prompt: "Dark moody shot of an abandoned house at night, police tape in foreground, mysterious atmosphere" },
  { niche: "Tech News", prompt: "Futuristic holographic interface floating in dark room, blue neon data streams, cyberpunk aesthetic" },
  { niche: "Motivation", prompt: "Sunrise over mountain peak, person reaching summit silhouette, inspirational golden hour lighting" },
  { niche: "Geography", prompt: "Cinematic flyover of lush green mountains with waterfall, mist rising, National Geographic style" },
  { niche: "Space", prompt: "Slow rotation of Earth from space, sun rising over horizon, stars in background, ultra-realistic" },
  { niche: "Book Summary", prompt: "Close-up of vintage leather books on wooden desk, warm lamp light, dust particles in air, cozy study" },
];

const PROVEN_HOOKS = [
  { pattern: "The Number Hook", example: "5 things successful people never do...", why: "Numbers promise a listicle format — high completion rates." },
  { pattern: "The Contradiction Hook", example: "Everything you know about [topic] is wrong...", why: "Creates curiosity gap. Brain can't scroll until it knows why." },
  { pattern: "The Question Hook", example: "Why do experts never tell you this?", why: "Engages the viewer directly. Forces mental participation." },
  { pattern: "The Story Hook", example: "I almost went bankrupt until I learned this...", why: "Stories trigger emotional investment. Viewers stay for resolution." },
  { pattern: "The Myth-Buster", example: "Stop believing these 3 [niche] myths...", why: "Correcting misinformation is highly shareable." },
  { pattern: "The Prediction Hook", example: "This will be worth $1 trillion by 2030...", why: "Future predictions drive comments and saves." },
];

const FACELESS_STATS = [
  { value: "60%+", label: "of top finance channels use AI voiceover" },
  { value: "3-5x", label: "faster than manual video production" },
  { value: "10K+", label: "faceless creators using Scenith" },
  { value: "$1k-10k", label: "monthly earnings potential" },
];

const COMPARISON_TABLE = [
  { aspect: "Cost per video", traditional: "$500-5,000+", ai: "$1-15" },
  { aspect: "Time to produce", traditional: "2-6 weeks", ai: "30-90 minutes" },
  { aspect: "Equipment needed", traditional: "Camera, mic, lighting, set", ai: "Just a browser" },
  { aspect: "Skills required", traditional: "Scripting, filming, editing", ai: "Writing prompts" },
  { aspect: "Face required", traditional: "Usually yes", ai: "Never" },
  { aspect: "Scalability", traditional: "1-2 videos/week", ai: "3-5 videos/day" },
];

// ─── Page Component ───────────────────────────────────────────────────────────

export default function AIVideoGeneratorForFacelessContentPage() {
  const ctaUrl =
    "https://scenith.in/create-ai-content?utm_source=faceless-landing&utm_medium=hero-cta&utm_campaign=ai-video-faceless";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="fvc-page">

        {/* ─── HERO SECTION ─────────────────────────────────────────────── */}
        <section className="fvc-hero">
          <div className="fvc-hero-bg" aria-hidden="true">
            <div className="fvc-orb fvc-orb-1" />
            <div className="fvc-orb fvc-orb-2" />
            <div className="fvc-orb fvc-orb-3" />
            <div className="fvc-grid-overlay" />
          </div>
          <div className="fvc-hero-inner">
            <div className="fvc-badge-row">
              <span className="fvc-platform-badge">
                <span className="fvc-badge-dot" />
                Faceless YouTube · TikTok · Reels
              </span>
              <span className="fvc-platform-badge fvc-badge-new">
                🔥 2026 Faceless Revolution
              </span>
            </div>

            <h1 className="fvc-hero-h1">
              AI Video Generator<br />
              <span className="fvc-h1-accent">for Faceless Content</span>
            </h1>

            <p className="fvc-hero-sub">
              <strong>No camera. No face. No editing degree.</strong> Generate cinematic B-roll,
              AI voiceovers, and complete videos for your faceless YouTube or TikTok channel.
              Powered by Kling 2.6, Veo 3.1, and Wan 2.5 — all in one place, free to start.
            </p>

            {/* Mock showcase */}
            <div className="fvc-showcase-row" aria-hidden="true">
              {[
                { title: "Finance B-Roll", icon: "💰", ratio: "16:9" },
                { title: "History Visuals", icon: "📜", ratio: "16:9" },
                { title: "TikTok Faceless", icon: "📱", ratio: "9:16" },
              ].map((item, i) => (
                <div key={i} className="fvc-showcase fvc-showcase-${i}">
                  <div className="fvc-showcase-screen">
                    <div className="fvc-showcase-content">
                      <div className="fvc-showcase-icon">{item.icon}</div>
                      <div className="fvc-showcase-label">{item.title}</div>
                      <div className="fvc-showcase-ratio">{item.ratio}</div>
                      <div className="fvc-showcase-bar" />
                      <div className="fvc-showcase-play">▶</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* ─── HUGE CTA BUTTON ───────────────────────────────────────── */}
            <div className="fvc-hero-cta-group">
              <Link
                href={ctaUrl}
                className="fvc-cta-primary fvc-cta-huge"
              >
                <span className="fvc-cta-icon">🎬</span>
                Start Your Faceless Channel Free
                <span className="fvc-cta-arrow">→</span>
              </Link>
              <span className="fvc-cta-note">
                50 free credits · No face needed · Full commercial rights
              </span>
            </div>

            {/* Stats */}
            <div className="fvc-stats-row">
              {FACELESS_STATS.map((s) => (
                <div key={s.value} className="fvc-stat">
                  <strong className="fvc-stat-val">{s.value}</strong>
                  <span className="fvc-stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── WHAT IS FACELESS CONTENT ───────────────────────────────────── */}
        <section className="fvc-section fvc-section-alt">
          <div className="fvc-container">
            <div className="fvc-section-label">The 2026 Opportunity</div>
            <h2 className="fvc-h2">
              What Is Faceless Content — and Why It's Exploding in 2026
            </h2>
            <div className="fvc-intro-grid">
              <div className="fvc-intro-text">
                <p>
                  <strong>Faceless content</strong> is exactly what it sounds like: videos that don't
                  show the creator's face. Instead, they rely on <strong>voiceover narration</strong>,
                  <strong>B-roll footage</strong>, text overlays, and stock-style visuals to tell a
                  story or explain a concept. Think finance explainers, history documentaries, true
                  crime summaries, motivational content, and tech news channels.
                </p>
                <p>
                  In 2026, faceless content has become one of the fastest-growing categories on
                  YouTube and TikTok. Why? Because viewers care about <strong>information and
                  entertainment</strong> — not who's delivering it. A well-researched script delivered
                  by a natural AI voice, paired with cinematic AI-generated B-roll, performs just as
                  well as a traditional on-camera video. Often, it performs better.
                </p>
                <p>
                  The economics are undeniable. Traditional video production requires cameras,
                  lighting, microphones, sets, and editing skills — or expensive outsourcing. Faceless
                  AI content requires <strong>none of that</strong>. Just a script idea, a few
                  prompts, and Scenith. The result: professional-grade videos at <strong>1% of the
                  traditional cost</strong> and <strong>10x the speed</strong>.
                </p>
                <p>
                  Thousands of creators have already built six-figure faceless channels using AI.
                  And in 2026, the technology has finally crossed the threshold where AI-generated
                  video is <strong>indistinguishable from stock footage</strong> for most applications.
                </p>
              </div>
              <div className="fvc-intro-cards">
                {[
                  { icon: "🎙️", title: "AI Voiceover", val: "3 sec", label: "generation" },
                  { icon: "🎬", title: "AI B-Roll", val: "~60 sec", label: "per clip" },
                  { icon: "💰", title: "Cost per Video", val: "$1-5", label: "in credits" },
                ].map((c) => (
                  <div key={c.title} className="fvc-intro-card">
                    <span className="fvc-intro-card-icon">{c.icon}</span>
                    <strong>{c.title}</strong>
                    <div className="fvc-intro-card-val">{c.val}</div>
                    <div className="fvc-intro-card-label">{c.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── HOW TO START A FACELESS CHANNEL ────────────────────────────── */}
        <section className="fvc-section">
          <div className="fvc-container">
            <div className="fvc-section-label">Step-by-Step Blueprint</div>
            <h2 className="fvc-h2">How to Start a Faceless AI Video Channel in 2026</h2>
            <p className="fvc-h2-sub">
              From zero to monetized faceless channel — here's the exact workflow used by successful
              creators. No experience required.
            </p>
            <div className="fvc-steps">
              {WORKFLOW_STEPS.map((step) => (
                <div key={step.num} className="fvc-step">
                  <div className="fvc-step-num">{step.num}</div>
                  <div className="fvc-step-body">
                    <h3 className="fvc-step-title">{step.title}</h3>
                    <p className="fvc-step-desc">{step.desc}</p>
                    <div className="fvc-step-tip">💡 {step.tip}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA inside section */}
            <div className="fvc-cta-block">
              <p>Ready to build your faceless channel?</p>
              <Link
                href={ctaUrl}
                className="fvc-cta-primary"
              >
                🎬 Start Your Faceless Journey Free
                <span className="fvc-cta-arrow">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ─── BEST NICHES FOR FACELESS CONTENT ───────────────────────────── */}
        <section className="fvc-section fvc-section-alt">
          <div className="fvc-container">
            <div className="fvc-section-label">Choose Your Niche</div>
            <h2 className="fvc-h2">
              Best Faceless Niches for AI Video in 2026
            </h2>
            <p className="fvc-h2-sub">
              These niches have the highest CPM (cost per 1,000 views) and the lowest barrier to entry.
              Each one can be produced entirely with AI.
            </p>

            <div className="fvc-niches-grid">
              {FACELESS_NICHES.map((niche) => (
                <div key={niche.name} className="fvc-niche-card">
                  <div className="fvc-niche-header">
                    <span className="fvc-niche-icon">{niche.icon}</span>
                    <span className="fvc-niche-cpm">{niche.cpm} CPM</span>
                  </div>
                  <h3 className="fvc-niche-name">{niche.name}</h3>
                  <p className="fvc-niche-desc">{niche.description}</p>
                  <div className="fvc-niche-hook">
                    <span className="fvc-hook-label">Hook example:</span>
                    <span className="fvc-hook-text">"{niche.hookExample}"</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="fvc-niche-deep">
              <h3>How to Pick Your Faceless Niche</h3>
              <p>
                The most successful faceless channels share three characteristics: 
                <strong> high information demand, evergreen topics, and monetization potential</strong>.
                Finance, history, true crime, and self-improvement consistently outperform entertainment
                niches because viewers are actively seeking information — not just passive scrolling.
              </p>
              <p>
                <strong>Pro tip:</strong> Start with one niche and post 30 videos before evaluating.
                Most faceless channels take 2-3 months to gain traction. Use Scenith to produce
                consistent daily content — the algorithm rewards frequency.
              </p>
            </div>
          </div>
        </section>

        {/* ─── AI VIDEO MODELS FOR FACELESS B-ROLL ────────────────────────── */}
        <section className="fvc-section">
          <div className="fvc-container">
            <div className="fvc-section-label">Choose Your Model</div>
            <h2 className="fvc-h2">
              Best AI Video Models for Faceless B-Roll
            </h2>
            <p className="fvc-h2-sub">
              Each model has different strengths for faceless content. Here's how to choose based
              on your niche, budget, and publishing frequency.
            </p>

            <div className="fvc-model-grid">
              {VIDEO_MODELS.map((m) => (
                <div
                  key={m.name}
                  className="fvc-model-card"
                  style={{ "--model-color": "#6355dc" } as React.CSSProperties}
                >
                  <div className="fvc-model-tag">{m.badge}</div>
                  <h3 className="fvc-model-name">{m.name}</h3>
                  <p className="fvc-model-desc">{m.description}</p>
                  <div className="fvc-model-specs">
                    <span>⚡ {m.credits}</span>
                    <span>⏱ {m.speed}</span>
                  </div>
                  <div className="fvc-model-best">
                    <strong>Best for:</strong> {m.bestFor}
                  </div>
                </div>
              ))}
            </div>

            <div className="fvc-model-recommendation">
              <h3>Our Recommendation for Faceless Beginners</h3>
              <p>
                <strong>Start with Wan 2.5</strong> — it's the most affordable (46 credits per clip)
                and produces quality B-roll that works perfectly for finance, history, and educational
                content. Once your channel generates revenue, upgrade to Kling 2.6 Pro or Veo 3.1
                for premium cinematic quality.
              </p>
              <p>
                For TikTok faceless content, <strong>Grok Imagine</strong> is a game-changer —
                it generates video AND AI-composed audio from a single prompt, cutting your
                production time in half.
              </p>
            </div>
          </div>
        </section>

        {/* ─── B-ROLL PROMPT IDEAS ────────────────────────────────────────── */}
        <section className="fvc-section fvc-section-alt">
          <div className="fvc-container">
            <div className="fvc-section-label">Ready-to-Use Prompts</div>
            <h2 className="fvc-h2">
              B-Roll Prompts for Every Faceless Niche
            </h2>
            <p className="fvc-h2-sub">
              Copy these prompts directly into Scenith. Each one is optimized for faceless content
              — no faces, just cinematic visuals that support your narration.
            </p>

            <div className="fvc-broll-grid">
              {B_ROLL_IDEAS.map((idea) => (
                <div key={idea.niche} className="fvc-broll-card">
                  <div className="fvc-broll-niche">{idea.niche}</div>
                  <p className="fvc-broll-prompt">"{idea.prompt}"</p>
                  <Link href={ctaUrl} className="fvc-broll-use">
                    Generate this B-Roll →
                  </Link>
                </div>
              ))}
            </div>

            <div className="fvc-prompt-tip">
              <strong>💡 Pro Tip:</strong> Add "cinematic, 4K, no text, no watermark, no faces"
              to any prompt for cleaner faceless B-roll. Specify aspect ratio: "16:9" for YouTube,
              "9:16" for TikTok.
            </div>
          </div>
        </section>

        {/* ─── HOOK FORMULAS FOR FACELESS VIDEOS ───────────────────────────── */}
        <section className="fvc-section">
          <div className="fvc-container">
            <div className="fvc-section-label">Growth Tactics</div>
            <h2 className="fvc-h2">
              6 Proven Hook Formulas for Faceless Videos
            </h2>
            <p className="fvc-h2-sub">
              The first 5 seconds determine 80% of your retention. Use these hook patterns,
              adapted for faceless content with AI voiceover.
            </p>

            <div className="fvc-hooks-grid">
              {PROVEN_HOOKS.map((hook) => (
                <div key={hook.pattern} className="fvc-hook-card">
                  <div className="fvc-hook-pattern">{hook.pattern}</div>
                  <div className="fvc-hook-example">"{hook.example}"</div>
                  <div className="fvc-hook-why">{hook.why}</div>
                </div>
              ))}
            </div>

            <div className="fvc-hook-tip">
              <strong>🎯 For AI Voiceover:</strong> Deliver hooks with confident, energetic pacing.
              Google Journey and OpenAI Nova voices work best for hooks — they naturally emphasize
              the key words that stop the scroll.
            </div>
          </div>
        </section>

        {/* ─── VOICEOVER GUIDE FOR FACELESS CONTENT ────────────────────────── */}
        <section className="fvc-section fvc-section-alt">
          <div className="fvc-container">
            <div className="fvc-section-label">Voiceover Matters</div>
            <h2 className="fvc-h2">
              Best AI Voices for Faceless Channels
            </h2>
            <p className="fvc-h2-sub">
              Your voiceover is the backbone of faceless content. Here are the top-performing AI voices
              for each niche, based on real faceless channel data.
            </p>

            <div className="fvc-voice-grid">
              <div className="fvc-voice-category">
                <h3>💰 Finance & Business</h3>
                <p><strong>Google Journey-D</strong> — Confident, authoritative male voice</p>
                <p><strong>OpenAI Shimmer</strong> — Clear, professional female voice</p>
                <p><strong>Azure Andrew</strong> — Trustworthy, measured delivery</p>
              </div>
              <div className="fvc-voice-category">
                <h3>📜 History & Documentary</h3>
                <p><strong>Google Studio</strong> — Warm, storytelling tone</p>
                <p><strong>OpenAI Nova</strong> — Natural, conversational</p>
                <p><strong>Azure Guy</strong> — Deep, authoritative narrator</p>
              </div>
              <div className="fvc-voice-category">
                <h3>🔪 True Crime & Mystery</h3>
                <p><strong>Google Journey-D</strong> — Serious, dramatic pacing</p>
                <p><strong>OpenAI Fable</strong> — Expressive, emotional range</p>
                <p><strong>Azure Sara</strong> — Suspenseful, engaging</p>
              </div>
              <div className="fvc-voice-category">
                <h3>🧠 Self-Improvement & Motivation</h3>
                <p><strong>OpenAI Nova</strong> — Warm, encouraging</p>
                <p><strong>Google Journey-F</strong> — Energetic, inspiring</p>
                <p><strong>Azure Jenny</strong> — Soft, reassuring</p>
              </div>
            </div>

            <div className="fvc-voice-tip">
              <strong>🎙️ Voiceover Best Practices:</strong> Write scripts for spoken delivery —
              short sentences, natural pauses. Use 1.0-1.25x speed for faceless content.
              Generate in Scenith's AI Voice tab, download MP3, and layer over your B-roll.
            </div>

            <div className="fvc-cta-block-small">
              <Link href="https://scenith.in/create-ai-content?tab=voice&utm_source=faceless-landing&utm_medium=voice-cta&utm_campaign=ai-video-faceless" className="fvc-cta-secondary">
                🎙️ Generate Your Faceless Voiceover Free →
              </Link>
            </div>
          </div>
        </section>

        {/* ─── COMPARISON: AI FACELESS vs TRADITIONAL ──────────────────────── */}
        <section className="fvc-section">
          <div className="fvc-container">
            <div className="fvc-section-label">The Economics</div>
            <h2 className="fvc-h2">
              AI Faceless vs Traditional Video Production
            </h2>
            <p className="fvc-h2-sub">
              The numbers don't lie. Here's why faceless creators are switching to AI.
            </p>

            <div className="fvc-compare-table">
              <div className="fvc-compare-header">
                <span>Factor</span>
                <span>Traditional Production</span>
                <span>AI Faceless (Scenith)</span>
              </div>
              {COMPARISON_TABLE.map((row, i) => (
                <div key={row.aspect} className={`fvc-compare-row ${i % 2 === 0 ? "" : "fvc-compare-row-alt"}`}>
                  <span>{row.aspect}</span>
                  <span className="fvc-compare-trad">{row.traditional}</span>
                  <span className="fvc-compare-ai">{row.ai}</span>
                </div>
              ))}
            </div>

            <div className="fvc-economics-note">
              <p>
                <strong>Real talk:</strong> A full-time faceless creator producing 3 videos per day
                with Scenith spends approximately <strong>$30-50 per month on credits</strong>.
                The same volume of content through traditional production would cost
                <strong> $15,000-30,000 per month</strong>. This is not a small difference.
                This is a structural advantage.
              </p>
            </div>
          </div>
        </section>

        {/* ─── COMPLETE FACELESS STRATEGY GUIDE ────────────────────────────── */}
        <section className="fvc-section fvc-section-alt">
          <div className="fvc-container">
            <div className="fvc-section-label">Strategy Deep Dive</div>
            <h2 className="fvc-h2">
              The Complete Faceless Channel Strategy Guide
            </h2>
            <p className="fvc-h2-sub">
              Everything you need to know to build, grow, and monetize a faceless AI video channel.
            </p>

            <div className="fvc-strategy-blocks">
              <div className="fvc-strategy-block">
                <h3>📊 Phase 1: Research & Setup (Week 1)</h3>
                <p>
                  <strong>Pick your niche</strong> using the table above. Search YouTube for
                  successful faceless channels in that niche — study their thumbnails, titles,
                  and video structure. Create a spreadsheet of 50 potential video topics.
                  Set up your YouTube channel with a branded banner and logo (generate both
                  with Scenith's AI image generator).
                </p>
              </div>

              <div className="fvc-strategy-block">
                <h3>✍️ Phase 2: Scriptwriting System (Ongoing)</h3>
                <p>
                  Use ChatGPT or Claude to write scripts. Your script structure: Hook (5 sec) →
                  Problem/Interest (15 sec) → Body/Explanation (60 sec) → Conclusion/CTA (10 sec).
                  Keep scripts under 400 words for 2-minute videos. Write conversationally —
                  like you're explaining to a friend. Batch-write 10 scripts in one sitting to
                  maintain consistency.
                </p>
              </div>

              <div className="fvc-strategy-block">
                <h3>🎬 Phase 3: Production Pipeline (Daily)</h3>
                <p>
                  Your daily workflow with Scenith: (1) Paste script into AI Voice tab — generate
                  MP3 (30 sec). (2) Break script into 3-4 segments — generate matching B-roll clips
                  in Video tab (5-10 min). (3) Import into CapCut — layer voiceover over B-roll,
                  add auto-captions, export (10 min). Total: under 20 minutes per video.
                </p>
              </div>

              <div className="fvc-strategy-block">
                <h3>📈 Phase 4: Growth & Optimization (30-90 Days)</h3>
                <p>
                  Post 1-3 videos daily for the first 60 days. YouTube's algorithm needs data to
                  understand your channel. Track metrics: CTR (click-through rate) above 8% is good,
                  retention above 50% at 30 seconds is good. Iterate on thumbnails and hooks based
                  on what performs. Use Scenith's image generator to create custom thumbnails.
                </p>
              </div>

              <div className="fvc-strategy-block">
                <h3>💰 Phase 5: Monetization (90+ Days)</h3>
                <p>
                  YouTube Partner Program: 1,000 subscribers + 4,000 watch hours (or 10M Shorts views).
                  TikTok Creator Rewards: 10,000 followers. Most faceless channels reach monetization
                  thresholds in 3-6 months. Revenue streams: ad revenue ($1,000-10,000/month at scale),
                  affiliate marketing (promote products relevant to your niche), digital products
                  (courses, templates), and brand sponsorships.
                </p>
              </div>
            </div>

            <div className="fvc-cta-block">
              <p>Start your faceless channel today — zero face required.</p>
              <Link
                href={ctaUrl}
                className="fvc-cta-primary"
              >
                🎬 Generate Your First Faceless Video
                <span className="fvc-cta-arrow">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ─── TESTIMONIALS FROM FACELESS CREATORS ─────────────────────────── */}
        <section className="fvc-section">
          <div className="fvc-container">
            <div className="fvc-section-label">Real Results</div>
            <h2 className="fvc-h2">
              Faceless Creators Using Scenith
            </h2>

            <div className="fvc-testimonials">
              {[
                {
                  quote: "I started a finance faceless channel in January. Three months later, I'm at 47k subscribers and monetized. Scenith's B-roll generation is the only reason this is possible.",
                  name: "Alex R.",
                  channel: "WealthWise (YouTube)",
                },
                {
                  quote: "My true crime channel blew up after I switched to AI B-roll. The Kling 2.6 Pro model creates visuals that look like they're from a Netflix documentary.",
                  name: "Sarah M.",
                  channel: "Casefile Clips (YouTube + TikTok)",
                },
                {
                  quote: "I was skeptical about faceless content. Now I produce 5 videos a week while working full-time. Scenith + CapCut is the ultimate faceless workflow.",
                  name: "David K.",
                  channel: "History Rewind (YouTube)",
                },
              ].map((t) => (
                <div key={t.name} className="fvc-testimonial">
                  <p className="fvc-testimonial-quote">"{t.quote}"</p>
                  <div className="fvc-testimonial-author">
                    <strong>{t.name}</strong>
                    <span>{t.channel}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FAQ ────────────────────────────────────────────────────────── */}
        <section className="fvc-section fvc-section-alt">
          <div className="fvc-container">
            <div className="fvc-section-label">FAQ</div>
            <h2 className="fvc-h2">Faceless Content — Frequently Asked Questions</h2>

            <div className="fvc-faq">
              {[
                {
                  q: "Can I really start a faceless YouTube channel with no experience?",
                  a: "Yes. Thousands of creators with zero video experience have built successful faceless channels using Scenith. The workflow is simple: write a script (AI can help), generate voiceover, generate B-roll clips, combine in CapCut. That's it. No camera, no lighting, no on-camera experience required.",
                },
                {
                  q: "Is AI-generated faceless content allowed on YouTube?",
                  a: "Yes. YouTube allows AI-generated content as long as you disclose it. Use YouTube's 'Altered content' disclosure in Studio when uploading. The disclosure does not affect monetization or reach — it's simply transparency. TikTok has a similar AI content label.",
                },
                {
                  q: "How much money can I make with a faceless channel?",
                  a: "Income varies widely. Beginner faceless channels earn $100-500/month from ad revenue. Mid-tier channels (50k-200k subs) earn $2,000-10,000/month. Top faceless channels earn $20,000-100,000+/month from ad revenue, affiliates, and digital products. The ceiling is high — your growth depends on niche selection, consistency, and quality.",
                },
                {
                  q: "What's the best niche for a beginner faceless channel?",
                  a: "History and geography are excellent for beginners — evergreen content, low competition in some sub-niches, and high CPM. Finance is more competitive but has the highest earning potential. Start with what you're genuinely interested in — you'll need to research and write scripts consistently.",
                },
                {
                  q: "Do I need to edit videos?",
                  a: "Basic editing is required to combine voiceover and B-roll. CapCut is free and takes 10 minutes per video after practice — drag voiceover MP3 onto timeline, drag B-roll clips above, adjust timing, click 'Auto Captions', export. No advanced editing skills needed.",
                },
                {
                  q: "How many AI video clips do I need per faceless video?",
                  a: "A 2-3 minute faceless video typically uses 3-5 B-roll clips. Each clip should be 5-10 seconds. Match clips to specific segments of your script. Avoid using one clip for the entire video — variety maintains viewer attention.",
                },
                {
                  q: "Can I use Scenith for both voiceover and B-roll?",
                  a: "Yes. Scenith's AI Voice tab generates MP3 voiceovers (40+ voices). The AI Video tab generates B-roll clips (6 models). All credits are shared across both tabs. One account, one login, one credit balance for your entire faceless workflow.",
                },
                {
                  q: "What resolution should I use for faceless content?",
                  a: "For YouTube: 1080p recommended. For TikTok/Reels: 720p is sufficient (TikTok compresses heavily anyway). Wan 2.5 at 480p is fine for testing and drafts, but upgrade to 720p/1080p for published videos.",
                },
                {
                  q: "How long does it take to get monetized on YouTube?",
                  a: "YouTube requires 1,000 subscribers and 4,000 watch hours (or 10M Shorts views). Most faceless channels reach this in 3-6 months with consistent posting (1-3 videos daily). The key is volume and consistency — the algorithm rewards frequency.",
                },
                {
                  q: "Can I use AI to write my scripts too?",
                  a: "Yes. ChatGPT, Claude, or Gemini can write faceless video scripts. Provide a topic and desired tone (e.g., 'Write a 400-word script about why the Roman Empire fell, in an engaging storytelling style for YouTube'). Always review and edit AI-generated scripts for accuracy.",
                },
              ].map((item, i) => (
                <details key={i} className="fvc-faq-item">
                  <summary className="fvc-faq-q">{item.q}</summary>
                  <p className="fvc-faq-a">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FINAL MASSIVE CTA ──────────────────────────────────────────── */}
        <section className="fvc-final-cta">
          <div className="fvc-final-cta-bg" aria-hidden="true">
            <div className="fvc-orb fvc-orb-final-1" />
            <div className="fvc-orb fvc-orb-final-2" />
          </div>
          <div className="fvc-container fvc-final-cta-inner">
            <div className="fvc-final-badge">🚀 Your faceless journey starts here</div>
            <h2 className="fvc-final-h2">
              Generate Your First Faceless Video<br />
              <span className="fvc-h1-accent">In Under 10 Minutes</span>
            </h2>
            <p className="fvc-final-sub">
              50 free credits. No face. No camera. No editing degree.
              Join 10,000+ faceless creators using Scenith daily.
            </p>
            <Link
              href={ctaUrl}
              className="fvc-cta-primary fvc-cta-xl"
            >
              <span className="fvc-cta-icon">🎬</span>
              Start Your Faceless Channel Free
              <span className="fvc-cta-arrow">→</span>
            </Link>
            <div className="fvc-final-features">
              {["🎙️ AI Voiceover", "🎬 AI B-Roll", "📱 9:16 & 16:9", "💰 From $1/video", "📥 Full Commercial Rights"].map((f) => (
                <span key={f} className="fvc-final-feat">{f}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ─── RELATED TOOLS ──────────────────────────────────────────────── */}
        <section className="fvc-section">
          <div className="fvc-container">
            <div className="fvc-section-label">More Tools</div>
            <h2 className="fvc-h2">Complete Your Faceless Workflow</h2>
            <div className="fvc-related-grid">
              {[
                { icon: "🎙️", title: "AI Voice Generator", desc: "40+ voices for faceless narration", href: "/create-ai-content?tab=voice&utm_source=faceless-landing&utm_medium=related" },
                { icon: "🖼️", title: "AI Image Generator", desc: "Thumbnails & channel art", href: "/create-ai-content?tab=image&utm_source=faceless-landing&utm_medium=related" },
                { icon: "💬", title: "Add Subtitles to Videos", desc: "Auto-caption your faceless content", href: "/tools/add-subtitles-to-videos?utm_source=faceless-landing&utm_medium=related" },
              ].map((tool) => (
                <Link
                  key={tool.title}
                  href={`https://scenith.in${tool.href}`}
                  className="fvc-related-card"
                >
                  <span className="fvc-related-icon">{tool.icon}</span>
                  <strong className="fvc-related-title">{tool.title}</strong>
                  <p className="fvc-related-desc">{tool.desc}</p>
                  <span className="fvc-related-arrow">→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

      </div>
    </>
  );
}