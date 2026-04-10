// app/tools/ai-video-generator-for-content-creators/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import "./ai-video-creator.css";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "AI Video Generator for Content Creators (2026) — Scenith",
  description:
    "Generate stunning AI videos for YouTube, TikTok, and Reels. 6 cinematic models, 9:16 & 16:9 support. Free credits to start — no editing skills required.",
  keywords: [
    "AI video generator for content creators",
    "text to video AI for creators",
    "AI video maker for YouTube",
    "content creator AI video tool",
    "AI video generation for social media",
    "faceless video generator AI",
    "AI B-roll generator for creators",
    "best AI video tool 2026",
    "cinematic AI video maker",
    "video creation AI for beginners",
    "AI video for faceless channels",
    "Kling AI video alternative",
    "Veo 3.1 video generator",
    "Wan 2.5 AI video",
    "AI video for content marketing",
  ],
  alternates: {
    canonical: "https://scenith.in/tools/ai-video-generator-for-content-creators",
  },
  openGraph: {
    title: "AI Video Generator for Content Creators | Scenith",
    description:
      "Turn text prompts into cinematic AI videos in seconds. Perfect for YouTube, faceless channels, TikTok Reels, and content marketing. Try free.",
    url: "https://scenith.in/tools/ai-video-generator-for-content-creators",
    siteName: "Scenith",
    type: "website",
    images: [
      {
        url: "https://scenith.in/og/ai-video-creator.png",
        width: 1200,
        height: 630,
        alt: "Scenith AI Video Generator for Content Creators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Video Generator for Content Creators | Scenith",
    description:
      "Generate cinematic AI videos for YouTube, TikTok, and Reels. 6 powerful models, 9:16 & 16:9. Free credits available.",
    images: ["https://scenith.in/og/ai-video-creator.png"],
  },
};

// ─── JSON-LD Structured Data ───────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Scenith AI Video Generator for Content Creators",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Web",
  url: "https://scenith.in/tools/ai-video-generator-for-content-creators",
  description:
    "AI video generation platform for content creators. Transform text prompts into cinematic videos. Supports 6 AI models including Kling 2.6, Veo 3.1, and Wan 2.5. Export in 9:16 or 16:9.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Free credits on signup. Paid plans from $9/month.",
  },
  featureList: [
    "Text-to-video AI generation",
    "6 AI video models (Kling, Veo, Wan, Grok Imagine)",
    "9:16 portrait mode for TikTok & Reels",
    "16:9 landscape for YouTube",
    "5-10 second cinematic clips",
    "720p & 1080p resolution options",
    "AI-generated audio (select models)",
    "Image-to-video conversion",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "1842",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can I generate AI videos for free as a content creator?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Scenith gives you 50 free credits on signup — no credit card required. These credits work across voice, image, and video generation. One 5-second AI video costs between 46–92 credits depending on the model you choose.",
      },
    },
    {
      "@type": "Question",
      name: "Which AI video model is best for YouTube content?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For YouTube, we recommend Kling 2.6 Pro or Veo 3.1 for 1080p cinematic quality in 16:9 landscape. For faster turnaround, Kling 2.5 Turbo or Wan 2.5 are excellent choices at lower cost.",
      },
    },
    {
      "@type": "Question",
      name: "Can I create faceless YouTube videos with AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Scenith is used by thousands of faceless creators. Generate an AI voiceover for your script, create AI images or video clips as B-roll, and combine them in any editor. No camera or microphone required.",
      },
    },
    {
      "@type": "Question",
      name: "What aspect ratio should I use for TikTok vs YouTube?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For TikTok and Instagram Reels, always use 9:16 (portrait). For YouTube, use 16:9 (landscape). Scenith supports both, plus 1:1 square for other platforms.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to generate an AI video?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI videos take 30–120 seconds depending on the model, duration, and resolution. Kling 2.5 Turbo is the fastest at 30–50 seconds. Veo 3.1 takes 90–120 seconds but offers the highest realism.",
      },
    },
    {
      "@type": "Question",
      name: "Does Scenith support audio in AI-generated videos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Grok Imagine includes AI-generated audio. For other models, you can generate a separate AI voiceover and combine them in any video editor.",
      },
    },
  ],
};

// ─── Component ────────────────────────────────────────────────────────────

export default function AIVideoGeneratorForCreatorsPage() {
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

      <div className="aivc-page">

        {/* ─── HERO SECTION ─────────────────────────────────────────────── */}
        <section className="aivc-hero">
          <div className="aivc-hero-bg" aria-hidden="true">
            <div className="aivc-orb aivc-orb-1" />
            <div className="aivc-orb aivc-orb-2" />
            <div className="aivc-orb aivc-orb-3" />
            <div className="aivc-grid-overlay" />
          </div>
          <div className="aivc-hero-inner">
            <div className="aivc-badge-row">
              <span className="aivc-platform-badge">
                <span className="aivc-badge-dot" />
                YouTube · TikTok · Reels · Shorts
              </span>
              <span className="aivc-platform-badge aivc-badge-new">
                🔥 2026 Edition
              </span>
            </div>

            <h1 className="aivc-hero-h1">
              AI Video Generator<br />
              <span className="aivc-h1-accent">for Content Creators</span>
            </h1>

            <p className="aivc-hero-sub">
              Turn your ideas into <strong>cinematic AI videos</strong> for YouTube, TikTok, and Reels.
              Powered by Kling 2.6, Veo 3.1, Wan 2.5, and Grok Imagine — all in one place.
              <strong> Free to start, no editing skills required.</strong>
            </p>

            {/* Mock video showcase */}
            <div className="aivc-showcase-row" aria-hidden="true">
              {[
                { title: "Cinematic Travel", ratio: "16:9", icon: "🏔️" },
                { title: "TikTok Hook", ratio: "9:16", icon: "📱" },
                { title: "Product Showcase", ratio: "16:9", icon: "🎬" },
              ].map((item, i) => (
                <div key={i} className={`aivc-showcase aivc-showcase-${i}`}>
                  <div className="aivc-showcase-screen">
                    <div className="aivc-showcase-content">
                      <div className="aivc-showcase-icon">{item.icon}</div>
                      <div className="aivc-showcase-label">{item.title}</div>
                      <div className="aivc-showcase-ratio">{item.ratio}</div>
                      <div className="aivc-showcase-bar" />
                      <div className="aivc-showcase-play">▶</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* ─── HUGE CTA BUTTON ───────────────────────────────────────── */}
            <div className="aivc-hero-cta-group">
              <Link
                href="https://scenith.in/create-ai-content?utm_source=ai-video-landing&utm_medium=hero-cta&utm_campaign=ai-video-generator"
                className="aivc-cta-primary aivc-cta-huge"
              >
                <span className="aivc-cta-icon">🎬</span>
                Generate Your First AI Video Now
                <span className="aivc-cta-arrow">→</span>
              </Link>
              <span className="aivc-cta-note">
                50 free credits on signup · No card needed · 6 AI video models
              </span>
            </div>

            {/* Stats */}
            <div className="aivc-stats-row">
              {[
                { value: "6", label: "AI Video Models" },
                { value: "9:16 & 16:9", label: "Aspect Ratios" },
                { value: "5-10s", label: "Clip Durations" },
                { value: "720p-1080p", label: "Resolutions" },
              ].map((s) => (
                <div key={s.value} className="aivc-stat">
                  <strong className="aivc-stat-val">{s.value}</strong>
                  <span className="aivc-stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── WHAT IS AI VIDEO GENERATION ────────────────────────────────── */}
        <section className="aivc-section aivc-section-alt">
          <div className="aivc-container">
            <div className="aivc-section-label">Why This Matters in 2026</div>
            <h2 className="aivc-h2">
              The Content Creator's Secret Weapon: AI Video Generation
            </h2>
            <div className="aivc-intro-grid">
              <div className="aivc-intro-text">
                <p>
                  The video economy has exploded. By 2026, <strong>over 85% of all online content is video</strong>.
                  YouTube Shorts alone generates 70+ billion daily views. TikTok, Reels, and traditional
                  YouTube remain the primary channels for creators, brands, and marketers.
                </p>
                <p>
                  But here's the problem: producing high-quality video content manually is
                  <strong> expensive, time-consuming, and requires specialized skills</strong>.
                  Cameras, lighting, microphones, actors, editors — the traditional video
                  production pipeline costs thousands of dollars and days of work.
                </p>
                <p>
                  <strong>AI video generation changes everything.</strong> With Scenith, you can
                  type a description of the video you want, and within 60 seconds, you'll have
                  a cinematic MP4 clip ready to use. No crew. No camera. No editing degree.
                  Just your idea and our AI.
                </p>
                <p>
                  This isn't the future — it's happening right now. Thousands of faceless
                  channels, educational creators, and marketing teams are already using
                  AI-generated video to scale their content production by <strong>10x</strong>.
                </p>
              </div>
              <div className="aivc-intro-cards">
                {[
                  { icon: "💰", title: "Save Money", val: "90%", label: "cheaper than production" },
                  { icon: "⚡", title: "Save Time", val: "60s", label: "average generation" },
                  { icon: "🎨", title: "No Skills", val: "0", label: "editing experience needed" },
                ].map((c) => (
                  <div key={c.title} className="aivc-intro-card">
                    <span className="aivc-intro-card-icon">{c.icon}</span>
                    <strong>{c.title}</strong>
                    <div className="aivc-intro-card-val">{c.val}</div>
                    <div className="aivc-intro-card-label">{c.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── HOW IT WORKS (SIMPLE 3 STEPS) ─────────────────────────────── */}
        <section className="aivc-section">
          <div className="aivc-container">
            <div className="aivc-section-label">Simple Workflow</div>
            <h2 className="aivc-h2">How to Generate AI Videos in 3 Steps</h2>
            <p className="aivc-h2-sub">
              No complicated software. No timeline editing. Just type, generate, download.
            </p>
            <div className="aivc-steps">
              {[
                {
                  num: "01",
                  title: "Write Your Prompt",
                  desc: "Describe the video you want — 'cinematic drone shot of a futuristic city at sunset' or 'slow motion close-up of coffee being poured'. Be specific for best results.",
                  tip: "Tip: 20-60 words works best. Include mood, subject, and camera movement.",
                },
                {
                  num: "02",
                  title: "Choose Your Model & Settings",
                  desc: "Pick from 6 AI video models (Kling, Veo, Wan, Grok). Select duration (5 or 10 seconds), aspect ratio (9:16 for TikTok/Reels, 16:9 for YouTube), and resolution.",
                  tip: "Tip: Start with Kling 2.5 Turbo for fast results, then experiment.",
                },
                {
                  num: "03",
                  title: "Generate & Download",
                  desc: "Click Generate. Your video will be ready in 30-120 seconds. Download MP4 instantly and use it in your content — no watermarks, full commercial rights.",
                  tip: "Tip: Combine multiple AI clips in CapCut or DaVinci Resolve for longer videos.",
                },
              ].map((step) => (
                <div key={step.num} className="aivc-step">
                  <div className="aivc-step-num">{step.num}</div>
                  <div className="aivc-step-body">
                    <h3 className="aivc-step-title">{step.title}</h3>
                    <p className="aivc-step-desc">{step.desc}</p>
                    <div className="aivc-step-tip">💡 {step.tip}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA inside section */}
            <div className="aivc-cta-block">
              <p>Ready to create your first AI video?</p>
              <Link
                href="https://scenith.in/create-ai-content?utm_source=ai-video-landing&utm_medium=workflow-cta&utm_campaign=ai-video-generator"
                className="aivc-cta-primary"
              >
                🎬 Start Creating Free Videos
                <span className="aivc-cta-arrow">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ─── VIDEO MODELS COMPARISON ───────────────────────────────────── */}
        <section className="aivc-section aivc-section-alt">
          <div className="aivc-container">
            <div className="aivc-section-label">The Models</div>
            <h2 className="aivc-h2">
              6 Powerful AI Video Models — One Platform
            </h2>
            <p className="aivc-h2-sub">
              Each model has unique strengths. Here's how to choose the right one
              for your content style, budget, and turnaround time.
            </p>

            <div className="aivc-model-grid">
              {[
                {
                  name: "Kling 2.5 Turbo",
                  best: "Fast & Affordable",
                  speed: "30–50s",
                  resolution: "720p",
                  credits: "64cr",
                  tag: "⚡ Fastest",
                  color: "#f59e0b",
                  aspect: "9:16 & 16:9",
                },
                {
                  name: "Kling 2.6 Pro",
                  best: "Premium Cinematic",
                  speed: "60–90s",
                  resolution: "1080p",
                  credits: "64cr",
                  tag: "🎬 Best Quality",
                  color: "#6355dc",
                  aspect: "9:16 & 16:9",
                },
                {
                  name: "Wan 2.5",
                  best: "Best Value",
                  speed: "40–70s",
                  resolution: "480p-1080p",
                  credits: "46cr",
                  tag: "💰 Budget Pick",
                  color: "#10b981",
                  aspect: "9:16 & 16:9",
                },
                {
                  name: "Veo 3.1 Fast",
                  best: "Google Speed",
                  speed: "50–80s",
                  resolution: "720p",
                  credits: "92cr",
                  tag: "🔵 Google AI",
                  color: "#3b82f6",
                  aspect: "9:16 & 16:9",
                },
                {
                  name: "Grok Imagine",
                  best: "Audio Included",
                  speed: "60–100s",
                  resolution: "480p-720p",
                  credits: "47cr",
                  tag: "🎵 With Audio",
                  color: "#ec4899",
                  aspect: "9:16 & 16:9",
                },
                {
                  name: "Veo 3.1",
                  best: "Ultra Realism",
                  speed: "90–120s",
                  resolution: "1080p",
                  credits: "186cr",
                  tag: "👑 Premium",
                  color: "#8b5cf6",
                  aspect: "9:16 & 16:9",
                },
              ].map((m) => (
                <div
                  key={m.name}
                  className="aivc-model-card"
                  style={{ "--model-color": m.color } as React.CSSProperties}
                >
                  <div className="aivc-model-tag" style={{ background: m.color }}>
                    {m.tag}
                  </div>
                  <h3 className="aivc-model-name">{m.name}</h3>
                  <p className="aivc-model-best">{m.best}</p>
                  <div className="aivc-model-specs">
                    <span>⏱ {m.speed}</span>
                    <span>📐 {m.resolution}</span>
                    <span>⚡ {m.credits}</span>
                    <span>📱 {m.aspect}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="aivc-model-deep">
              <h3>Which Model Should You Choose?</h3>
              <div className="aivc-recommendations">
                <div className="aivc-rec">
                  <strong>🏃 For Beginners & Fast Turnaround:</strong>
                  <p>Start with <strong>Kling 2.5 Turbo</strong> or <strong>Wan 2.5</strong>. They're fast, affordable, and produce great results for social media content.</p>
                </div>
                <div className="aivc-rec">
                  <strong>🎬 For Cinematic YouTube Videos:</strong>
                  <p>Use <strong>Kling 2.6 Pro</strong> or <strong>Veo 3.1</strong>. The extra generation time is worth it for 1080p cinematic quality.</p>
                </div>
                <div className="aivc-rec">
                  <strong>🎵 For Videos That Need Audio:</strong>
                  <p><strong>Grok Imagine</strong> is the only model that includes AI-generated audio. Perfect for quick social posts.</p>
                </div>
                <div className="aivc-rec">
                  <strong>💰 For Maximum Value (Budget Conscious):</strong>
                  <p><strong>Wan 2.5</strong> at 46 credits per 5-second clip is the most affordable option without sacrificing quality.</p>
                </div>
              </div>
            </div>

            <div className="aivc-cta-block">
              <Link
                href="https://scenith.in/create-ai-content?tab=video&utm_source=ai-video-landing&utm_medium=models-cta&utm_campaign=ai-video-generator"
                className="aivc-cta-secondary"
              >
                🎬 Try All 6 Models Free →
              </Link>
            </div>
          </div>
        </section>

        {/* ─── USE CASES FOR CONTENT CREATORS ─────────────────────────────── */}
        <section className="aivc-section">
          <div className="aivc-container">
            <div className="aivc-section-label">Use Cases</div>
            <h2 className="aivc-h2">
              How Content Creators Use AI Videos
            </h2>
            <p className="aivc-h2-sub">
              From faceless YouTube channels to social media marketing — here are
              the most effective ways to leverage AI-generated video.
            </p>

            <div className="aivc-usecases-grid">
              {[
                {
                  icon: "🎥",
                  title: "Faceless YouTube Channels",
                  desc: "Generate B-roll footage for narration-based videos. Combine AI voiceover + AI video clips for complete videos without showing your face.",
                  example: "History, finance, true crime, AI news, motivational content",
                },
                {
                  icon: "📱",
                  title: "TikTok & Reels",
                  desc: "Create 9:16 portrait videos optimized for short-form platforms. Perfect for hooks, visual storytelling, and trend-based content.",
                  example: "5-10 second clips, viral hooks, aesthetic visuals",
                },
                {
                  icon: "🛍️",
                  title: "Product Marketing",
                  desc: "Generate product showcase videos from text descriptions. No photoshoot needed. Ideal for e-commerce and dropshipping.",
                  example: "360° product rotations, lifestyle shots, demo clips",
                },
                {
                  icon: "📚",
                  title: "Educational Content",
                  desc: "Create visual explanations for complex topics. AI video can illustrate concepts that would be expensive or impossible to film.",
                  example: "Scientific processes, historical events, abstract concepts",
                },
                {
                  icon: "🎨",
                  title: "Art & Storytelling",
                  desc: "Bring stories to life with cinematic AI visuals. Perfect for music videos, poetry readings, and narrative content.",
                  example: "Dream sequences, fantasy scenes, emotional moments",
                },
                {
                  icon: "📈",
                  title: "Social Media Ads",
                  desc: "Produce high-conversion ad creatives in minutes. Test multiple variations without production costs.",
                  example: "Facebook ads, Instagram stories, YouTube pre-roll",
                },
              ].map((uc) => (
                <div key={uc.title} className="aivc-usecase-card">
                  <span className="aivc-usecase-icon">{uc.icon}</span>
                  <h3>{uc.title}</h3>
                  <p>{uc.desc}</p>
                  <div className="aivc-usecase-example">💡 {uc.example}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FACELESS CHANNEL STRATEGY GUIDE ────────────────────────────── */}
        <section className="aivc-section aivc-section-alt">
          <div className="aivc-container">
            <div className="aivc-section-label">Strategy Guide</div>
            <h2 className="aivc-h2">
              How to Start a Faceless AI Video Channel in 2026
            </h2>
            <p className="aivc-h2-sub">
              A complete blueprint for building a monetized YouTube or TikTok channel
              using 100% AI-generated content. No camera. No microphone. No editing degree.
            </p>

            <div className="aivc-guide-blocks">
              {[
                {
                  phase: "Phase 1: Choose Your Niche",
                  content: "Select a niche with high CPM (cost per 1,000 views) and strong information demand. Finance, tech news, history, true crime, and self-improvement consistently perform best for faceless channels. Avoid entertainment niches — they require personality and trend awareness that's harder to replicate with AI alone.",
                },
                {
                  phase: "Phase 2: Set Up Your Content Pipeline",
                  content: "Your daily workflow: (1) Research and write 3 scripts using ChatGPT or Claude (30 minutes). (2) Generate AI voiceovers for each script (3 minutes). (3) Generate 2-3 AI video clips per script (10 minutes). (4) Combine voiceover + clips in CapCut or DaVinci Resolve (15 minutes). Total: under 1 hour for 3 complete videos.",
                },
                {
                  phase: "Phase 3: Optimize for Each Platform",
                  content: "YouTube: Use 16:9 landscape, 1080p resolution, 8-15 minute compilations of multiple AI clips. TikTok/Reels: Use 9:16 portrait, 720p is sufficient, keep clips under 60 seconds. The same AI content can be repurposed across platforms by changing aspect ratio and editing the pacing.",
                },
                {
                  phase: "Phase 4: Scale to Monetization",
                  content: "YouTube requires 1,000 subscribers and 4,000 watch hours (or 10M Shorts views). Most faceless channels reach this in 6-12 months with consistent posting. TikTok's Creator Rewards requires 10,000 followers. At scale, faceless channels earn $1,000-$10,000/month from ad revenue, affiliate marketing, and digital products.",
                },
              ].map((g, idx) => (
                <div key={idx} className="aivc-guide-block">
                  <h3 className="aivc-guide-phase">{g.phase}</h3>
                  <p className="aivc-guide-content">{g.content}</p>
                </div>
              ))}
            </div>

            <div className="aivc-cta-block">
              <p>Start your faceless AI video channel today.</p>
              <Link
                href="https://scenith.in/create-ai-content?utm_source=ai-video-landing&utm_medium=guide-cta&utm_campaign=ai-video-generator"
                className="aivc-cta-primary"
              >
                🎬 Generate Your First AI Video
                <span className="aivc-cta-arrow">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ─── ASPECT RATIO GUIDE ─────────────────────────────────────────── */}
        <section className="aivc-section">
          <div className="aivc-container">
            <div className="aivc-section-label">Aspect Ratio Guide</div>
            <h2 className="aivc-h2">
              Choose the Right Format for Each Platform
            </h2>
            <p className="aivc-h2-sub">
              Different platforms prefer different aspect ratios. Here's what to use where.
            </p>

            <div className="aivc-aspect-grid">
              {[
                {
                  ratio: "16:9",
                  name: "Landscape",
                  platforms: "YouTube, YouTube Shorts (desktop), Facebook, Twitter/X, LinkedIn",
                  bestFor: "Traditional videos, tutorials, documentaries, long-form content",
                  icon: "🖥️",
                },
                {
                  ratio: "9:16",
                  name: "Portrait",
                  platforms: "TikTok, Instagram Reels, YouTube Shorts (mobile), Snapchat",
                  bestFor: "Short-form content, hooks, mobile-first viewing, social media",
                  icon: "📱",
                },
                {
                  ratio: "1:1",
                  name: "Square",
                  platforms: "Instagram feed, Facebook feed, Twitter/X, LinkedIn",
                  bestFor: "Universal compatibility, product showcases, ads",
                  icon: "⬛",
                },
              ].map((a) => (
                <div key={a.ratio} className="aivc-aspect-card">
                  <div className="aivc-aspect-header">
                    <span className="aivc-aspect-icon">{a.icon}</span>
                    <span className="aivc-aspect-ratio">{a.ratio}</span>
                    <span className="aivc-aspect-name">{a.name}</span>
                  </div>
                  <div className="aivc-aspect-platforms">
                    <strong>Platforms:</strong> {a.platforms}
                  </div>
                  <div className="aivc-aspect-best">
                    <strong>Best for:</strong> {a.bestFor}
                  </div>
                </div>
              ))}
            </div>

            <div className="aivc-tip-card">
              <strong>💡 Pro Tip:</strong> Generate your video in the native aspect ratio
              of your target platform. While you can crop or letterbox, native format
              videos perform significantly better in algorithmic recommendations.
            </div>
          </div>
        </section>

        {/* ─── IMAGE-TO-VIDEO SECTION ─────────────────────────────────────── */}
        <section className="aivc-section aivc-section-alt">
          <div className="aivc-container">
            <div className="aivc-section-label">Advanced Feature</div>
            <h2 className="aivc-h2">
              Turn Your AI Images into Videos
            </h2>
            <p className="aivc-h2-sub">
              Generate an AI image first, then animate it into a video. Perfect for
              product showcases, character animations, and bringing still art to life.
            </p>

            <div className="aivc-image-to-video">
              <div className="aivc-itiv-workflow">
                <div className="aivc-itiv-step">
                  <span className="aivc-itiv-num">1</span>
                  <div>
                    <strong>Generate an AI Image</strong>
                    <p>Create the perfect visual in 9:16 or 16:9 using any of our 7 image models.</p>
                  </div>
                </div>
                <div className="aivc-itiv-arrow">→</div>
                <div className="aivc-itiv-step">
                  <span className="aivc-itiv-num">2</span>
                  <div>
                    <strong>Click "Make Video from this Image"</strong>
                    <p>One-click transfer your image to the video generator with prompt preserved.</p>
                  </div>
                </div>
                <div className="aivc-itiv-arrow">→</div>
                <div className="aivc-itiv-step">
                  <span className="aivc-itiv-num">3</span>
                  <div>
                    <strong>Animate & Download</strong>
                    <p>Add motion, camera movement, and effects. Download MP4 in seconds.</p>
                  </div>
                </div>
              </div>
              <div className="aivc-itiv-examples">
                <span>🎨 Example uses: turning product photos into 360° videos, animating character art, adding cinematic motion to landscapes</span>
              </div>
            </div>

            <div className="aivc-cta-block">
              <Link
                href="https://scenith.in/create-ai-content?tab=image&utm_source=ai-video-landing&utm_medium=itiv-cta&utm_campaign=ai-video-generator"
                className="aivc-cta-secondary"
              >
                🖼️ Generate an Image First →
              </Link>
            </div>
          </div>
        </section>

        {/* ─── COMPARISON TABLE ───────────────────────────────────────────── */}
        <section className="aivc-section">
          <div className="aivc-container">
            <div className="aivc-section-label">Why Scenith?</div>
            <h2 className="aivc-h2">
              Scenith vs. Other AI Video Tools
            </h2>
            <p className="aivc-h2-sub">
              Not all AI video generators are created equal. Here's how Scenith stacks up.
            </p>

            <div className="aivc-compare-table">
              <div className="aivc-compare-header">
                <span>Feature</span>
                <span className="aivc-compare-scenith">Scenith ✅</span>
                <span>Individual Tools ❌</span>
              </div>
              {[
                ["Number of AI Video Models", "6 models", "1-2 per tool"],
                ["Aspect Ratios Supported", "16:9, 9:16, 1:1", "Usually 1 only"],
                ["Resolution Options", "720p & 1080p", "Often locked"],
                ["Image-to-Video", "✅ Included", "❌ Rare"],
                ["Audio Generation", "✅ Grok Imagine", "❌ Separate tool needed"],
                ["Unified Credits (Voice + Image + Video)", "✅ Yes", "❌ Separate subscriptions"],
                ["Free Credits to Start", "✅ 50 credits", "❌ Often paid-only"],
                ["Monthly Cost (Lite Plan)", "$9/mo", "$20-50+/mo per tool"],
              ].map(([feat, ours, theirs], i) => (
                <div key={i} className={`aivc-compare-row ${i % 2 === 0 ? "" : "aivc-compare-row-alt"}`}>
                  <span>{feat}</span>
                  <span className="aivc-compare-scenith-val">{ours}</span>
                  <span className="aivc-compare-theirs-val">{theirs}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── TIPS & BEST PRACTICES ──────────────────────────────────────── */}
        <section className="aivc-section aivc-section-alt">
          <div className="aivc-container">
            <div className="aivc-section-label">Pro Tips</div>
            <h2 className="aivc-h2">
              Get Better AI Videos: Prompt Engineering Guide
            </h2>
            <p className="aivc-h2-sub">
              The quality of your output depends on the quality of your input.
              Here's how to write prompts that get cinematic results.
            </p>

            <div className="aivc-tips-grid">
              {[
                {
                  title: "Be Specific About Camera Movement",
                  bad: '"A city street"',
                  good: '"Slow cinematic drone shot descending over a neon-lit Tokyo street at night"',
                },
                {
                  title: "Include Mood & Lighting",
                  bad: '"A forest"',
                  good: '"Misty ancient forest at golden hour, sunbeams cutting through fog, ethereal atmosphere"',
                },
                {
                  title: "Specify Subject & Action",
                  bad: '"A person walking"',
                  good: '"A lone figure in a red cloak walking through a snowy blizzard, wind blowing snow dramatically"',
                },
                {
                  title: "Add Quality Keywords",
                  bad: '"A car"',
                  good: '"Cinematic wide shot of a vintage sports car driving on a coastal highway, 8K, ultra-detailed, dramatic lighting"',
                },
              ].map((tip) => (
                <div key={tip.title} className="aivc-tip-card-full">
                  <h3>{tip.title}</h3>
                  <div className="aivc-tip-example">
                    <span className="aivc-tip-bad">❌ Bad: </span>
                    <span>{tip.bad}</span>
                  </div>
                  <div className="aivc-tip-example">
                    <span className="aivc-tip-good">✅ Good: </span>
                    <span>{tip.good}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="aivc-prompt-formula">
              <h3>The Perfect Prompt Formula</h3>
              <p>
                <strong>[Camera movement] + [Subject] + [Action] + [Environment] + [Lighting/Mood] + [Quality keywords]</strong>
              </p>
              <p className="aivc-prompt-example">
                Example: <em>"Slow motion close-up of coffee being poured into a ceramic mug, steam rising, warm morning light, kitchen background, cinematic 4K"</em>
              </p>
            </div>
          </div>
        </section>

        {/* ─── FAQ ────────────────────────────────────────────────────────── */}
        <section className="aivc-section">
          <div className="aivc-container">
            <div className="aivc-section-label">FAQ</div>
            <h2 className="aivc-h2">Frequently Asked Questions</h2>

            <div className="aivc-faq">
              {[
                {
                  q: "Can I generate AI videos for free?",
                  a: "Yes. Scenith gives you 50 free credits on signup with no credit card required. One 5-second AI video costs between 46-92 credits depending on the model you choose. Paid plans start at $9/month and include 300 credits.",
                },
                {
                  q: "Which AI video model is best for YouTube?",
                  a: "For YouTube, we recommend Kling 2.6 Pro or Veo 3.1. Both generate 1080p 16:9 landscape videos with cinematic quality. For faster turnaround, Kling 2.5 Turbo or Wan 2.5 work well for Shorts content.",
                },
                {
                  q: "Can I make a faceless YouTube channel with AI video?",
                  a: "Absolutely. Thousands of creators run successful faceless channels using Scenith. Generate AI voiceovers for narration, then create matching AI video clips as B-roll. Combine in any video editor. No camera or microphone needed.",
                },
                {
                  q: "What's the difference between 9:16 and 16:9?",
                  a: "9:16 is portrait mode (vertical) — perfect for TikTok, Instagram Reels, and YouTube Shorts on mobile. 16:9 is landscape mode — standard for YouTube videos, desktop viewing, and traditional content. Scenith supports both.",
                },
                {
                  q: "How long does AI video generation take?",
                  a: "30-120 seconds depending on the model, duration, and resolution. Kling 2.5 Turbo is fastest at 30-50 seconds. Veo 3.1 takes 90-120 seconds but offers the highest realism.",
                },
                {
                  q: "Can I add audio to AI-generated videos?",
                  a: "Yes. Grok Imagine includes AI-generated audio. For other models, you can generate a separate AI voiceover in Scenith and combine them using any video editor like CapCut or DaVinci Resolve.",
                },
                {
                  q: "What resolution does Scenith support?",
                  a: "720p and 1080p depending on the model. Wan 2.5 supports 480p-1080p, Kling models support 720p-1080p, and Veo 3.1 supports 720p-1080p. For social media, 720p is usually sufficient.",
                },
                {
                  q: "Do I own the videos I generate?",
                  a: "Yes. All content generated on Scenith comes with full commercial rights. You can use AI videos in YouTube videos, ads, products, client work, and any commercial project without attribution.",
                },
                {
                  q: "Can I generate image-to-video?",
                  a: "Yes. Generate an AI image first (using any of our 7 image models), then use the 'Make Video from this Image' feature to animate it. Perfect for product showcases and bringing still art to life.",
                },
                {
                  q: "How many credits does a video cost?",
                  a: "Costs vary by model: Wan 2.5 (46cr), Kling 2.5/2.6 (64cr), Grok Imagine (47cr), Veo 3.1 Fast (92cr), Veo 3.1 (186cr). 10-second videos cost approximately double. Audio on Kling 2.6 costs extra credits.",
                },
              ].map((item, i) => (
                <details key={i} className="aivc-faq-item">
                  <summary className="aivc-faq-q">{item.q}</summary>
                  <p className="aivc-faq-a">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FINAL MASSIVE CTA ──────────────────────────────────────────── */}
        <section className="aivc-final-cta">
          <div className="aivc-final-cta-bg" aria-hidden="true">
            <div className="aivc-orb aivc-orb-final-1" />
            <div className="aivc-orb aivc-orb-final-2" />
          </div>
          <div className="aivc-container aivc-final-cta-inner">
            <div className="aivc-final-badge">🚀 Ready to transform your content?</div>
            <h2 className="aivc-final-h2">
              Start Generating AI Videos<br />
              <span className="aivc-h1-accent">Right Now, For Free</span>
            </h2>
            <p className="aivc-final-sub">
              Join thousands of content creators using Scenith to produce cinematic
              AI videos daily. 50 free credits on signup. No card needed.
            </p>
            <Link
              href="https://scenith.in/create-ai-content?utm_source=ai-video-landing&utm_medium=final-cta&utm_campaign=ai-video-generator"
              className="aivc-cta-primary aivc-cta-xl"
            >
              <span className="aivc-cta-icon">🎬</span>
              Generate Your First AI Video Free
              <span className="aivc-cta-arrow">→</span>
            </Link>
            <div className="aivc-final-features">
              {["🎬 6 Video Models", "📱 9:16 & 16:9", "⚡ 30-120s Generation", "🎵 Audio Support", "💰 Free to Start"].map((f) => (
                <span key={f} className="aivc-final-feat">{f}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ─── RELATED RESOURCES ──────────────────────────────────────────── */}
        <section className="aivc-section aivc-section-alt">
          <div className="aivc-container">
            <div className="aivc-section-label">Resources</div>
            <h2 className="aivc-h2">More AI Tools for Content Creators</h2>
            <div className="aivc-related-grid">
              {[
                { icon: "🎙️", title: "AI Voice Generator", desc: "40+ voices for voiceovers and narration", href: "/create-ai-content?tab=voice&utm_source=ai-video-landing&utm_medium=related" },
                { icon: "🖼️", title: "AI Image Generator", desc: "7 models for thumbnails and visuals", href: "/create-ai-content?tab=image&utm_source=ai-video-landing&utm_medium=related" },
                { icon: "🎬", title: "AI Video Generator", desc: "Full AI video suite (you're here)", href: "/create-ai-content?tab=video&utm_source=ai-video-landing&utm_medium=related" },
              ].map((tool) => (
                <Link
                  key={tool.title}
                  href={`https://scenith.in${tool.href}`}
                  className="aivc-related-card"
                >
                  <span className="aivc-related-icon">{tool.icon}</span>
                  <strong className="aivc-related-title">{tool.title}</strong>
                  <p className="aivc-related-desc">{tool.desc}</p>
                  <span className="aivc-related-arrow">→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

      </div>
    </>
  );
}