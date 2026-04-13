"use client";

import React, { useState, useEffect, useRef } from "react";
import "./article-to-carousel.css";

// ─── Types ──────────────────────────────────────────────────────────────────

interface Step {
  icon: string;
  title: string;
  body: string;
}

interface UseCase {
  emoji: string;
  title: string;
  platform: string;
  platformColor: string;
  body: string;
  stat: string;
  statLabel: string;
}

interface CarouselExample {
  topic: string;
  slides: { icon: string; headline: string; caption: string }[];
  platform: "LinkedIn" | "Instagram" | "Twitter/X";
  color: string;
}

// ─── Data ────────────────────────────────────────────────────────────────────

const HOW_IT_WORKS: Step[] = [
  {
    icon: "📰",
    title: "Paste or summarise your article",
    body: "Copy your blog post, newsletter, research paper, or any long-form content. You can paste the full text or just the key talking points — even a bulleted outline works perfectly.",
  },
  {
    icon: "✂️",
    title: "Break it into slide-sized ideas",
    body: "Great carousels follow the 'one idea per slide' rule. Identify 3–10 distinct points from your article. Each point becomes one slide. Think of it as creating a visual table of contents for your content.",
  },
  {
    icon: "🎨",
    title: "Write a visual prompt for each slide",
    body: "Describe what the image for each slide should look like. 'Minimalist flat-lay desk with laptop and coffee, blue tones' is enough. You don't need to describe charts or text — just the background imagery.",
  },
  {
    icon: "⚡",
    title: "Generate all slides simultaneously",
    body: "Scenith's AI Carousel Generator runs all 3 slides in parallel using models like Imagen 4, GPT Image 1, and Stability AI Core. All slides are ready in under 60 seconds — not one-by-one.",
  },
  {
    icon: "📥",
    title: "Download and post",
    body: "Download each slide as a high-resolution PNG. Upload them in order to LinkedIn, Instagram, or Twitter/X. Add your caption and key hashtags, and you're done. Full commercial rights, no watermarks.",
  },
];

const USE_CASES: UseCase[] = [
  {
    emoji: "💼",
    title: "LinkedIn Thought Leadership",
    platform: "LinkedIn",
    platformColor: "#0A66C2",
    body: "The LinkedIn algorithm actively promotes carousel posts over plain text updates and single images. A 7-slide carousel built from your latest blog post gets 3–5× more impressions than the article link alone — because users swipe, which signals engagement to the algorithm. Turn your quarterly report, case study, or opinion piece into a swipeable insight carousel that positions you as an authority in your niche.",
    stat: "3–5×",
    statLabel: "more reach vs link posts",
  },
  {
    emoji: "📸",
    title: "Instagram Educational Content",
    platform: "Instagram",
    platformColor: "#E1306C",
    body: "Instagram carousels are the highest-retention format on the platform. Users who swipe through all slides spend 3× longer on your post — and Instagram's algorithm rewards that dwell time with broader distribution. Convert your how-to articles, listicles, and tutorials into beautiful 9:16 or 1:1 slide formats. Each slide becomes a mini-infographic that teaches something your audience can save and revisit.",
    stat: "3×",
    statLabel: "longer dwell time",
  },
  {
    emoji: "🐦",
    title: "Twitter/X Thread Companion",
    platform: "Twitter/X",
    platformColor: "#000000",
    body: "Long Twitter/X threads get buried. A carousel post — where each image is one key point from your thread — gets reshared and quoted far more often. The 16:9 landscape format works perfectly for Twitter/X carousels. Pair each image slide with a one-liner caption for maximum impact. Creator accounts report 40–60% higher engagement on carousel tweets versus pure text threads.",
    stat: "60%",
    statLabel: "higher engagement rate",
  },
  {
    emoji: "🧪",
    title: "Research Paper Explainers",
    platform: "LinkedIn + Twitter",
    platformColor: "#6355dc",
    body: "Academic researchers, scientists, and analysts who distil complex findings into 5–8 slide carousels consistently go viral in their professional communities. A carousel that explains your research in plain language reaches 10–50× more people than the paper itself. Use each slide to cover: what the research is, why it matters, what you found, and what it means for the reader.",
    stat: "50×",
    statLabel: "wider reach than paper",
  },
  {
    emoji: "🛍️",
    title: "Product Feature Announcements",
    platform: "Instagram + LinkedIn",
    platformColor: "#f59e0b",
    body: "Product teams use article-to-carousel to repurpose launch blog posts into shareable feature carousels. Each slide highlights one feature with a descriptive image: what it does, who it's for, why it matters. This format works especially well for SaaS product updates, where showing the feature visually — even through AI-generated concept art — drives more trial sign-ups than a blog link.",
    stat: "2.3×",
    statLabel: "more trial sign-ups",
  },
  {
    emoji: "🎓",
    title: "Online Course Marketing",
    platform: "All Platforms",
    platformColor: "#10b981",
    body: "Course creators repurpose module summaries, lesson outlines, and student testimonials into carousels to drive enrollments. A 5-slide carousel covering 'What you'll learn in Module 3' is one of the highest-converting formats for course marketing. Each AI-generated image gives the slide a polished, professional look that signals quality — even for solo creators.",
    stat: "67%",
    statLabel: "increase in click-throughs",
  },
];

const CAROUSEL_EXAMPLES: CarouselExample[] = [
  {
    topic: "7 Productivity Habits of Top CEOs",
    platform: "LinkedIn",
    color: "#0A66C2",
    slides: [
      { icon: "🌅", headline: "Wake Up Before the World", caption: "78% of Fortune 500 CEOs wake before 6AM. It's not about discipline — it's about owning the first hour of your day before anyone can claim it." },
      { icon: "📵", headline: "Phone-Free Mornings", caption: "The first 90 minutes should be input-free. No email, no Slack, no news. Jeff Bezos's 'puttering' morning is intentionally unstructured." },
      { icon: "✍️", headline: "Write Before You Speak", caption: "Top leaders journal, plan, or write before their first meeting. It forces clarity. You cannot lead others without first leading your thoughts." },
    ],
  },
  {
    topic: "Why Your LinkedIn Posts Aren't Getting Reach",
    platform: "LinkedIn",
    color: "#7c3aed",
    slides: [
      { icon: "🔗", headline: "Stop Posting Links", caption: "LinkedIn's algorithm suppresses external links by up to 60%. If you want reach, keep users on-platform. Always put links in the first comment." },
      { icon: "⏱️", headline: "The First 60 Minutes Are Everything", caption: "LinkedIn scores your post in the first hour. If early engagement is low, it gets buried. Post when your audience is online — not when you're free." },
      { icon: "💬", headline: "Comments > Likes", caption: "A comment is worth 6× more than a like in LinkedIn's engagement scoring. Ask a question at the end of every post. It's not clickbait — it's strategy." },
    ],
  },
  {
    topic: "The Truth About Intermittent Fasting",
    platform: "Instagram",
    color: "#E1306C",
    slides: [
      { icon: "⏰", headline: "It's About When, Not What", caption: "Intermittent fasting doesn't restrict what you eat — it restricts when. The 16:8 method (16 hrs fasting, 8 hrs eating) is the most popular starting point." },
      { icon: "🧬", headline: "Your Body on a 16-Hour Fast", caption: "After 12 hours, liver glycogen depletes and fat burning begins. By 16 hours, autophagy (cellular cleanup) kicks in. This is why fasting advocates swear by it." },
      { icon: "⚠️", headline: "Who Should NOT Fast", caption: "Pregnant women, those with a history of eating disorders, type 1 diabetics, and people on certain medications should avoid fasting without medical supervision." },
    ],
  },
];

const PLATFORM_SPECS = [
  {
    platform: "LinkedIn",
    icon: "💼",
    color: "#0A66C2",
    aspectRatios: ["1:1 (Square) — Best", "4:5 (Portrait)"],
    maxSlides: "Up to 10 slides",
    resolution: "1080×1080 min",
    tips: "Start with a hook slide. End with a CTA slide. Include your personal photo on slide 1 for higher CTR. Use consistent fonts across slides.",
    bestTime: "Tue–Thu, 8–10AM or 5–6PM local time",
  },
  {
    platform: "Instagram",
    icon: "📸",
    color: "#E1306C",
    aspectRatios: ["1:1 (Square)", "4:5 (Portrait) — Best", "9:16 (Stories)"],
    maxSlides: "Up to 10 slides",
    resolution: "1080×1080 or 1080×1350",
    tips: "First slide must stop the scroll — use bold text overlay. Design for mobile-first. Slide 2 should deliver the biggest value. People swipe based on slide 1 alone.",
    bestTime: "Mon, Wed, Fri — 11AM or 7PM",
  },
  {
    platform: "Twitter/X",
    icon: "🐦",
    color: "#000000",
    aspectRatios: ["16:9 (Landscape) — Best", "1:1 (Square)"],
    maxSlides: "Up to 4 images per tweet",
    resolution: "1600×900 for landscape",
    tips: "Each image should work standalone. Add a short one-liner as the image headline. Tweet text should be the hook; images should deliver the value.",
    bestTime: "Weekdays 9AM–12PM, peaks at 9AM",
  },
];

const PROMPT_TEMPLATES = [
  {
    category: "Business & Finance",
    icon: "💰",
    templates: [
      "Minimalist overhead flat-lay of financial charts, calculator, and coffee on a dark marble desk, warm studio lighting, ultra-clean",
      "Abstract visualization of growing bar graphs with golden glow, dark navy background, futuristic business aesthetic, 4K",
      "Aerial view of a modern glass office building at sunrise, reflecting city skyline, cinematic corporate photography",
    ],
  },
  {
    category: "Health & Wellness",
    icon: "🌿",
    templates: [
      "Bright airy wellness flat-lay with green smoothie, yoga mat, and morning sunlight through linen curtains, editorial style",
      "Close-up of human cells or DNA strand with bioluminescent blue glow, dark background, medical illustration style",
      "Serene mountain meditation scene at golden hour, lone figure in lotus position, ultra-wide panoramic cinematic",
    ],
  },
  {
    category: "Technology & AI",
    icon: "🤖",
    templates: [
      "Abstract digital brain made of glowing circuit connections, deep purple and electric blue, dark background, 4K",
      "Futuristic holographic interface with floating data panels, person interacting with light projections, cinematic sci-fi",
      "Macro shot of microchip surface with golden circuit pathways, depth of field blur, industrial tech photography",
    ],
  },
  {
    category: "Productivity & Self-Help",
    icon: "📈",
    templates: [
      "Clean minimal desk setup with notebook, pen, and a single plant, warm morning light, Scandinavian aesthetic, editorial",
      "Overhead shot of hands writing in a leather journal with a hot coffee beside it, dark moody ambient lighting",
      "Split-screen showing chaotic messy desk vs. organized minimal workspace, high contrast commercial photography",
    ],
  },
  {
    category: "Marketing & Social Media",
    icon: "📣",
    templates: [
      "Vibrant social media feed mockup floating on a gradient background, colorful notifications, flat illustration style",
      "Megaphone made of neon light beams on dark background, particles exploding outward, dramatic and bold",
      "Person presenting to a crowd with holographic data overlays, conference stage lighting, editorial photography",
    ],
  },
];

const REPURPOSING_CHECKLIST = [
  { done: true,  task: "Identify the 3–7 most shareable insights from your article" },
  { done: true,  task: "Rewrite each insight as a single punchy sentence (10–15 words max)" },
  { done: true,  task: "Write a visual prompt for each slide's background image" },
  { done: false, task: "Choose a consistent color palette across all slides" },
  { done: false, task: "Decide aspect ratio: 1:1 for LinkedIn/IG, 16:9 for Twitter" },
  { done: false, task: "Generate images with Scenith AI Carousel Generator" },
  { done: false, task: "Add text overlays in Canva, Figma, or your design tool" },
  { done: false, task: "Write slide 1 caption as a scroll-stopping hook" },
  { done: false, task: "End with a CTA slide: 'Follow for more' or 'Save this'" },
  { done: false, task: "Post and reply to every comment in the first 30 minutes" },
];

const COMPARISON_TABLE = [
  { feature: "AI Image Generation", scenith: true,  canva: false, deckset: false },
  { feature: "Multi-slide parallel generation", scenith: true,  canva: false, deckset: false },
  { feature: "7+ AI models (GPT, Imagen, FLUX)", scenith: true,  canva: false, deckset: false },
  { feature: "Image-to-Image carousel", scenith: true,  canva: false, deckset: false },
  { feature: "Free to start (no card)", scenith: true,  canva: true,  deckset: false },
  { feature: "Commercial rights included", scenith: true,  canva: false, deckset: false },
  { feature: "PNG download, no watermark", scenith: true,  canva: false, deckset: false },
  { feature: "Works in browser, no install", scenith: true,  canva: true,  deckset: false },
  { feature: "Prompt-based visual control", scenith: true,  canva: false, deckset: false },
];

// ─── Animated Counter ─────────────────────────────────────────────────────────
const AnimatedStat: React.FC<{ value: string; label: string; color?: string }> = ({ value, label, color }) => (
  <div className="atc-stat-item">
    <div className="atc-stat-value" style={{ color: color || "var(--atc-accent)" }}>{value}</div>
    <div className="atc-stat-label">{label}</div>
  </div>
);

// ─── Component ────────────────────────────────────────────────────────────────
const ArticleToCarouselClient: React.FC = () => {
  const [activeExample, setActiveExample] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [activePlatform, setActivePlatform] = useState(0);
  const [checklist, setChecklist] = useState(REPURPOSING_CHECKLIST);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [promptCopied, setPromptCopied] = useState<string | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setActiveSlide(0);
  }, [activeExample]);

  const handleCopyPrompt = (prompt: string) => {
    navigator.clipboard.writeText(prompt);
    setPromptCopied(prompt);
    setTimeout(() => setPromptCopied(null), 2000);
  };

  const UTM_LINK =
    "https://scenith.in/create-ai-content?tab=image&utm_source=tools&utm_medium=article-to-carousel&utm_campaign=carousel-generator-cta";

  const currentExample = CAROUSEL_EXAMPLES[activeExample];
  const currentSlide = currentExample.slides[activeSlide];

  return (
    <div className="atc-page">
      {/* ── Breadcrumb ── */}
      <nav className="atc-breadcrumb" aria-label="Breadcrumb">
        <a href="https://scenith.in">Home</a>
        <span>›</span>
        <a href="https://scenith.in/tools">Tools</a>
        <span>›</span>
        <span>Article to Carousel AI Generator</span>
      </nav>

      {/* ═══════════ HERO ═══════════ */}
      <header className="atc-hero" ref={heroRef}>
        <div className="atc-hero-bg-grid" aria-hidden="true" />
        <div className="atc-hero-glow" aria-hidden="true" />
        <div className="atc-hero-inner">
          <div className="atc-hero-badge">
            <span className="atc-badge-dot" />
            Free AI Tool · No Design Skills Needed
          </div>
          <h1 className="atc-h1">
            Turn Any Article Into a<br />
            <span className="atc-gradient-text">Viral AI Carousel</span>
          </h1>
          <p className="atc-hero-sub">
            Paste your blog post, research paper, or newsletter. Break it into slides.
            Generate stunning AI images for each one. Post to LinkedIn, Instagram, or Twitter/X.
            Done in under 3 minutes.
          </p>

          {/* Hero CTA */}
          <div className="atc-hero-cta-group">
            <a
              href={UTM_LINK}
              className="atc-cta-primary"
              rel="noopener"
            >
              <span className="atc-cta-icon">🎠</span>
              Generate My Carousel — Free
              <span className="atc-cta-arrow">→</span>
            </a>
            <div className="atc-hero-social-proof">
              <div className="atc-avatar-stack">
                {["🧑‍💻", "👩‍🎨", "🧑‍💼", "👩‍🔬", "🧑‍🏫"].map((e, i) => (
                  <div key={i} className="atc-avatar">{e}</div>
                ))}
              </div>
              <span>Join 12,000+ creators already using Scenith</span>
            </div>
          </div>

          {/* Stats strip */}
          <div className="atc-hero-stats">
            <AnimatedStat value="3 slides" label="generated in 45 sec" />
            <div className="atc-stat-divider" />
            <AnimatedStat value="7 AI models" label="to choose from" />
            <div className="atc-stat-divider" />
            <AnimatedStat value="50 credits" label="free on signup" />
            <div className="atc-stat-divider" />
            <AnimatedStat value="0 design skills" label="required" />
          </div>
        </div>
      </header>

      <main className="atc-main">

        {/* ═══════════ LIVE EXAMPLE CAROUSEL ═══════════ */}
        <section className="atc-section atc-example-section">
          <div className="atc-section-label">📖 See it in action</div>
          <h2 className="atc-h2">Real Articles Turned Into Real Carousels</h2>
          <p className="atc-section-sub">
            Here's exactly how popular content types transform into carousel slides.
            Each example below was created using Scenith's AI Carousel Generator.
          </p>

          {/* Topic tabs */}
          <div className="atc-example-tabs">
            {CAROUSEL_EXAMPLES.map((ex, i) => (
              <button
                key={i}
                className={`atc-example-tab ${activeExample === i ? "active" : ""}`}
                onClick={() => setActiveExample(i)}
              >
                <span className="atc-tab-platform" style={{ color: ex.color }}>
                  {ex.platform}
                </span>
                {ex.topic}
              </button>
            ))}
          </div>

          {/* Carousel viewer */}
          <div className="atc-carousel-viewer">
            {/* Phone mockup */}
            <div className="atc-phone-mockup">
              <div className="atc-phone-screen">
                <div className="atc-slide-inner">
                  <div className="atc-slide-icon">{currentSlide.icon}</div>
                  <h3 className="atc-slide-headline">{currentSlide.headline}</h3>
                  <p className="atc-slide-caption">{currentSlide.caption}</p>
                  <div className="atc-slide-counter">
                    {currentExample.slides.map((_, i) => (
                      <div
                        key={i}
                        className={`atc-slide-dot ${activeSlide === i ? "active" : ""}`}
                        onClick={() => setActiveSlide(i)}
                      />
                    ))}
                  </div>
                </div>
                {/* nav arrows */}
                {activeSlide > 0 && (
                  <button className="atc-slide-nav atc-slide-nav-left" onClick={() => setActiveSlide(s => s - 1)}>‹</button>
                )}
                {activeSlide < currentExample.slides.length - 1 && (
                  <button className="atc-slide-nav atc-slide-nav-right" onClick={() => setActiveSlide(s => s + 1)}>›</button>
                )}
              </div>
              <div className="atc-phone-chin" />
            </div>

            {/* Slide list */}
            <div className="atc-slide-list">
              <div className="atc-slide-list-header">
                <span className="atc-slide-list-title">📰 Source: &ldquo;{currentExample.topic}&rdquo;</span>
                <span className="atc-slide-list-platform" style={{ color: currentExample.color }}>
                  {currentExample.platform}
                </span>
              </div>
              {currentExample.slides.map((slide, i) => (
                <div
                  key={i}
                  className={`atc-slide-list-item ${activeSlide === i ? "active" : ""}`}
                  onClick={() => setActiveSlide(i)}
                >
                  <div className="atc-slide-list-num">{i + 1}</div>
                  <div className="atc-slide-list-content">
                    <div className="atc-slide-list-headline">{slide.icon} {slide.headline}</div>
                    <div className="atc-slide-list-caption">{slide.caption.slice(0, 70)}…</div>
                  </div>
                </div>
              ))}
              <a href={UTM_LINK} className="atc-cta-mini">
                Generate slides like these →
              </a>
            </div>
          </div>
        </section>

        {/* ═══════════ HOW IT WORKS ═══════════ */}
        <section className="atc-section atc-steps-section">
          <div className="atc-section-label">🔧 Step-by-step guide</div>
          <h2 className="atc-h2">How to Convert an Article Into a Carousel in 5 Steps</h2>
          <p className="atc-section-sub">
            This is the exact workflow used by LinkedIn top voices, Instagram educators,
            and professional content teams to repurpose articles into high-engagement carousels.
          </p>
          <div className="atc-steps-grid">
            {HOW_IT_WORKS.map((step, i) => (
              <div className="atc-step-card" key={i}>
                <div className="atc-step-num">{i + 1}</div>
                <div className="atc-step-icon">{step.icon}</div>
                <h3 className="atc-step-title">{step.title}</h3>
                <p className="atc-step-body">{step.body}</p>
              </div>
            ))}
          </div>

          {/* Inline CTA after steps */}
          <div className="atc-inline-cta">
            <div className="atc-inline-cta-text">
              <strong>Ready to try it?</strong> Scenith's Carousel tab generates all 3 slides
              simultaneously — not one by one. Takes ~45 seconds total.
            </div>
            <a href={UTM_LINK} className="atc-cta-secondary">
              Open Carousel Generator →
            </a>
          </div>
        </section>

        {/* ═══════════ USE CASES ═══════════ */}
        <section className="atc-section atc-usecases-section">
          <div className="atc-section-label">🎯 Use cases</div>
          <h2 className="atc-h2">Who Gets the Most Value from Article-to-Carousel?</h2>
          <p className="atc-section-sub">
            Different creators use the same carousel format for wildly different goals.
            Here's how each audience type benefits — with real engagement data.
          </p>
          <div className="atc-uc-grid">
            {USE_CASES.map((uc, i) => (
              <div className="atc-uc-card" key={i}>
                <div className="atc-uc-header">
                  <span className="atc-uc-emoji">{uc.emoji}</span>
                  <div>
                    <div className="atc-uc-title">{uc.title}</div>
                    <div className="atc-uc-platform" style={{ color: uc.platformColor }}>
                      {uc.platform}
                    </div>
                  </div>
                  <div className="atc-uc-stat">
                    <div className="atc-uc-stat-value" style={{ color: uc.platformColor }}>{uc.stat}</div>
                    <div className="atc-uc-stat-label">{uc.statLabel}</div>
                  </div>
                </div>
                <p className="atc-uc-body">{uc.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════ PLATFORM SPECS ═══════════ */}
        <section className="atc-section atc-platform-section">
          <div className="atc-section-label">📐 Platform specs</div>
          <h2 className="atc-h2">Carousel Specs for Every Major Platform in 2026</h2>
          <p className="atc-section-sub">
            Every platform has different optimal dimensions, slide counts, and posting strategies.
            Here's exactly what works on each one — and how Scenith's aspect ratio options map to them.
          </p>
          <div className="atc-platform-tabs">
            {PLATFORM_SPECS.map((p, i) => (
              <button
                key={i}
                className={`atc-platform-tab ${activePlatform === i ? "active" : ""}`}
                onClick={() => setActivePlatform(i)}
                style={{ borderColor: activePlatform === i ? p.color : "transparent" }}
              >
                {p.icon} {p.platform}
              </button>
            ))}
          </div>
          <div className="atc-platform-detail">
            <div className="atc-platform-spec-grid">
              <div className="atc-spec-item">
                <div className="atc-spec-label">Best Aspect Ratios</div>
                <div className="atc-spec-values">
                  {PLATFORM_SPECS[activePlatform].aspectRatios.map((ar, i) => (
                    <div key={i} className={`atc-spec-tag ${ar.includes("Best") ? "best" : ""}`}>{ar}</div>
                  ))}
                </div>
              </div>
              <div className="atc-spec-item">
                <div className="atc-spec-label">Max Slides</div>
                <div className="atc-spec-value-big">{PLATFORM_SPECS[activePlatform].maxSlides}</div>
              </div>
              <div className="atc-spec-item">
                <div className="atc-spec-label">Minimum Resolution</div>
                <div className="atc-spec-value-big">{PLATFORM_SPECS[activePlatform].resolution}</div>
              </div>
              <div className="atc-spec-item">
                <div className="atc-spec-label">Best Time to Post</div>
                <div className="atc-spec-value-big" style={{ fontSize: 13 }}>{PLATFORM_SPECS[activePlatform].bestTime}</div>
              </div>
            </div>
            <div className="atc-platform-tips">
              <div className="atc-tips-label">💡 Design & Strategy Tips</div>
              <p>{PLATFORM_SPECS[activePlatform].tips}</p>
            </div>
          </div>
        </section>

        {/* ═══════════ PROMPT TEMPLATES ═══════════ */}
        <section className="atc-section atc-prompts-section">
          <div className="atc-section-label">✍️ Copy-paste ready</div>
          <h2 className="atc-h2">25 AI Carousel Image Prompts You Can Use Right Now</h2>
          <p className="atc-section-sub">
            The quality of your carousel visuals depends entirely on how you describe them to the AI.
            These prompts are tested across GPT Image 1, Imagen 4, and Stability AI models.
            Click any prompt to copy it, then paste it into Scenith's Carousel Generator.
          </p>
          <div className="atc-prompts-grid">
            {PROMPT_TEMPLATES.map((cat, ci) => (
              <div className="atc-prompt-category" key={ci}>
                <div className="atc-prompt-cat-header">
                  <span>{cat.icon}</span>
                  <span>{cat.category}</span>
                </div>
                {cat.templates.map((tpl, ti) => (
                  <button
                    key={ti}
                    className={`atc-prompt-item ${promptCopied === tpl ? "copied" : ""}`}
                    onClick={() => handleCopyPrompt(tpl)}
                    title="Click to copy"
                  >
                    <span className="atc-prompt-text">{tpl}</span>
                    <span className="atc-copy-badge">
                      {promptCopied === tpl ? "✓ Copied!" : "📋 Copy"}
                    </span>
                  </button>
                ))}
              </div>
            ))}
          </div>
          <div className="atc-prompts-cta">
            <p>Copy a prompt above → Open Scenith → Paste into Carousel slide → Generate</p>
            <a href={UTM_LINK} className="atc-cta-primary">
              🎠 Open Carousel Generator
            </a>
          </div>
        </section>

        {/* ═══════════ REPURPOSING CHECKLIST ═══════════ */}
        <section className="atc-section atc-checklist-section">
          <div className="atc-section-label">✅ Content repurposing workflow</div>
          <h2 className="atc-h2">The 10-Step Article-to-Carousel Checklist</h2>
          <p className="atc-section-sub">
            Bookmark this. Every high-performing carousel follows these steps.
            The ones you can't check off yet are exactly what Scenith automates.
          </p>
          <div className="atc-checklist">
            {checklist.map((item, i) => (
              <div
                key={i}
                className={`atc-checklist-item ${item.done ? "done" : ""}`}
                onClick={() => {
                  const next = [...checklist];
                  next[i] = { ...next[i], done: !next[i].done };
                  setChecklist(next);
                }}
              >
                <div className={`atc-checkbox ${item.done ? "checked" : ""}`}>
                  {item.done && "✓"}
                </div>
                <span className="atc-checklist-text">{item.task}</span>
                {i >= 4 && i <= 8 && (
                  <span className="atc-checklist-badge">AI automates this</span>
                )}
              </div>
            ))}
          </div>
          <div className="atc-checklist-note">
            Steps 5–9 are what Scenith's AI Carousel Generator handles automatically.
            Click the steps to mark them off as you complete your workflow.
          </div>
        </section>

        {/* ═══════════ COMPARISON TABLE ═══════════ */}
        <section className="atc-section atc-compare-section">
          <div className="atc-section-label">⚖️ Honest comparison</div>
          <h2 className="atc-h2">Scenith vs Canva vs Manual Design for Carousel Creation</h2>
          <p className="atc-section-sub">
            You have options. Here's an honest breakdown of what each approach actually gives you —
            so you can decide what fits your workflow best.
          </p>
          <div className="atc-compare-table-wrap">
            <table className="atc-compare-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th className="atc-col-us">Scenith AI</th>
                  <th>Canva</th>
                  <th>Manual Design</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_TABLE.map((row, i) => (
                  <tr key={i}>
                    <td>{row.feature}</td>
                    <td className="atc-col-us">
                      {row.scenith ? <span className="atc-check">✓</span> : <span className="atc-cross">✗</span>}
                    </td>
                    <td>
                      {row.canva ? <span className="atc-check">✓</span> : <span className="atc-cross">✗</span>}
                    </td>
                    <td>
                      {row.deckset ? <span className="atc-check">✓</span> : <span className="atc-cross">✗</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="atc-compare-note">
            Canva is excellent for template-based layouts and text overlays. We recommend using
            Scenith to generate the background images, then importing them into Canva to add
            your text, logo, and brand elements. The two tools work perfectly together.
          </p>
        </section>

        {/* ═══════════ ALGORITHM DEEP DIVE ═══════════ */}
        <section className="atc-section atc-deep-dive">
          <div className="atc-section-label">🧠 Algorithm science</div>
          <h2 className="atc-h2">Why Carousels Beat Every Other Content Format in 2026</h2>
          <p className="atc-section-sub">
            The shift to carousels isn't a trend — it's driven by how social algorithms measure value.
            Understanding the mechanics helps you create content that the algorithm actively wants to distribute.
          </p>

          <div className="atc-algo-grid">
            <div className="atc-algo-card atc-algo-card--large">
              <div className="atc-algo-icon">🔄</div>
              <h3>The Swipe Signal</h3>
              <p>
                When a user swipes through a carousel, each swipe is registered as an active engagement event —
                not just a passive impression. LinkedIn, Instagram, and Twitter/X all weight active engagement
                3–6× higher than passive views in their distribution algorithms. A 5-slide carousel that gets
                100 complete swipe-throughs generates more algorithmic signal than a single image post with
                1,000 impressions.
              </p>
              <p>
                This is the fundamental reason why carousel posts consistently outperform single-image posts
                in reach. The platform literally uses your carousel as a mechanism to measure how interested
                users are in your content — and distributes accordingly.
              </p>
            </div>

            <div className="atc-algo-card">
              <div className="atc-algo-icon">⏱️</div>
              <h3>Dwell Time Multiplication</h3>
              <p>
                A single image might hold someone's attention for 1–2 seconds. A 7-slide carousel holds
                attention for 20–40 seconds if the content is compelling. That 20× increase in dwell
                time directly impacts how the algorithm scores your post quality. Instagram's internal
                research confirmed that carousels generate 3× more saves than single images — and saves
                are the highest-value engagement signal on the platform.
              </p>
            </div>

            <div className="atc-algo-card">
              <div className="atc-algo-icon">💬</div>
              <h3>The Comment Magnet Effect</h3>
              <p>
                Carousel posts naturally end with a CTA slide ("Which tip was most useful? Comment below").
                This structural format generates 2× more comments than posts without a clear CTA.
                On LinkedIn especially, comments are worth 6× more than likes in the engagement scoring model,
                and each comment extends your post's algorithmic lifespan by sending it back into
                the 'trending content' pool for more distribution.
              </p>
            </div>

            <div className="atc-algo-card">
              <div className="atc-algo-icon">💾</div>
              <h3>Save Rate as Intent Signal</h3>
              <p>
                When someone saves your carousel, they're telling the platform: "This content is valuable
                enough that I want to return to it." Save rates on educational carousels are consistently
                4–8× higher than on standard posts. Instagram treats saves as a leading indicator of
                content quality and uses them to push posts into Explore — which can multiply your
                reach by 10–50× beyond your follower count.
              </p>
            </div>
          </div>

          {/* Algorithmic ranking factors breakdown */}
          <div className="atc-ranking-factors">
            <h3>How Each Platform Weights Carousel Engagement</h3>
            <div className="atc-factors-grid">
              {[
                { platform: "LinkedIn", factors: [
                  { label: "Comments", weight: 6, color: "#0A66C2" },
                  { label: "Reposts", weight: 4, color: "#0A66C2" },
                  { label: "Reactions", weight: 1, color: "#0A66C2" },
                  { label: "Slide swipes", weight: 3, color: "#0A66C2" },
                ]},
                { platform: "Instagram", factors: [
                  { label: "Saves", weight: 8, color: "#E1306C" },
                  { label: "Shares/DMs", weight: 5, color: "#E1306C" },
                  { label: "Comments", weight: 4, color: "#E1306C" },
                  { label: "Slide completion", weight: 6, color: "#E1306C" },
                ]},
                { platform: "Twitter/X", factors: [
                  { label: "Replies", weight: 7, color: "#555" },
                  { label: "Bookmarks", weight: 5, color: "#555" },
                  { label: "Retweets", weight: 3, color: "#555" },
                  { label: "Likes", weight: 1, color: "#555" },
                ]},
              ].map((pf, pi) => (
                <div className="atc-factor-card" key={pi}>
                  <div className="atc-factor-platform">{pf.platform}</div>
                  {pf.factors.map((f, fi) => (
                    <div className="atc-factor-row" key={fi}>
                      <span className="atc-factor-label">{f.label}</span>
                      <div className="atc-factor-bar-track">
                        <div
                          className="atc-factor-bar"
                          style={{
                            width: `${(f.weight / 8) * 100}%`,
                            background: f.color,
                          }}
                        />
                      </div>
                      <span className="atc-factor-weight">{f.weight}×</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ MAIN CTA SECTION ═══════════ */}
        <section className="atc-hero-cta-section">
          <div className="atc-cta-section-bg" aria-hidden="true" />
          <div className="atc-cta-section-inner">
            <div className="atc-cta-section-badge">🎠 Free to start · No card required</div>
            <h2 className="atc-cta-section-title">
              Your Best Article Deserves<br />
              <span className="atc-gradient-text">More Than a Link Post</span>
            </h2>
            <p className="atc-cta-section-sub">
              You've spent hours writing that article. Spend 3 minutes turning it into a carousel
              that reaches 5× more people. Scenith's AI generates all 3 slides simultaneously —
              Imagen 4, GPT Image 1, FLUX, and more at your disposal.
            </p>
            <div className="atc-cta-section-features">
              {[
                "✓ 3 slides generated in ~45 seconds",
                "✓ 7 AI models including Imagen 4 & GPT Image",
                "✓ Square, Portrait & Landscape aspect ratios",
                "✓ High-res PNG, no watermarks",
                "✓ 50 free credits on signup",
                "✓ Full commercial rights",
              ].map((f, i) => (
                <div key={i} className="atc-cta-feature">{f}</div>
              ))}
            </div>
            <a href={UTM_LINK} className="atc-cta-primary atc-cta-xl">
              <span className="atc-cta-icon">🎠</span>
              Generate My Carousel — It's Free
              <span className="atc-cta-arrow">→</span>
            </a>
            <div className="atc-cta-note">
              Opens Scenith's AI Carousel Generator with Carousel mode pre-selected
            </div>
          </div>
        </section>

        {/* ═══════════ CONTENT STRATEGY GUIDE ═══════════ */}
        <section className="atc-section atc-strategy-section">
          <div className="atc-section-label">📚 Content strategy guide</div>
          <h2 className="atc-h2">The Complete Guide to Writing Carousel Copy That Converts</h2>
          <p className="atc-section-sub">
            Great carousel visuals get the swipe. Great carousel copy gets the follow, the save,
            and the sale. Here's the copywriting framework used by LinkedIn's top 1% creators.
          </p>

          <div className="atc-strategy-grid">
            <div className="atc-strategy-block">
              <h3>🎣 The Hook Slide Formula</h3>
              <p>
                Slide 1 is your entire carousel's ROI. If it doesn't stop the scroll, no one will
                see slides 2–10. The highest-performing LinkedIn carousel hook slides follow one of
                these three patterns:
              </p>
              <div className="atc-formula-list">
                <div className="atc-formula-item">
                  <div className="atc-formula-label">Pattern 1: The Counterintuitive</div>
                  <div className="atc-formula-example">"I got 10,000 followers by posting LESS content — here's how."</div>
                </div>
                <div className="atc-formula-item">
                  <div className="atc-formula-label">Pattern 2: The Specific Number</div>
                  <div className="atc-formula-example">"7 things I wish I knew before my first $1M year."</div>
                </div>
                <div className="atc-formula-item">
                  <div className="atc-formula-label">Pattern 3: The Bold Claim</div>
                  <div className="atc-formula-example">"Your LinkedIn strategy is wrong. Here's what the data actually shows."</div>
                </div>
              </div>
            </div>

            <div className="atc-strategy-block">
              <h3>📊 The Middle Slides: Value Delivery</h3>
              <p>
                Slides 2–(n-1) are where you deliver on your hook's promise. Each slide should follow
                the <strong>One Idea Rule</strong>: one concept, one supporting sentence, one visual.
                Resist the temptation to cram multiple points into one slide.
              </p>
              <p>
                The best middle slides use a consistent structure: <strong>Bold Headline → 2 sentence expansion → Takeaway stat or quote.</strong>
                This gives the reader a clear hierarchy and makes each slide scannable in under 3 seconds.
              </p>
              <p>
                Slide length matters: aim for 5–8 words in the headline, 20–40 words in the body.
                If you need more than 40 words to explain an idea, split it into two slides.
              </p>
            </div>

            <div className="atc-strategy-block">
              <h3>📣 The CTA Slide Science</h3>
              <p>
                The last slide of every high-performing carousel does exactly one of the following:
                asks a question, offers a resource, or makes a direct ask. The mistake most creators
                make is using a generic CTA like "Follow me for more." Specific CTAs dramatically
                outperform generic ones.
              </p>
              <div className="atc-cta-examples">
                <div className="atc-cta-example bad">
                  ❌ "Follow for more marketing tips."
                </div>
                <div className="atc-cta-example good">
                  ✅ "Which of these 7 strategies will you try first? Comment below — I read every reply."
                </div>
                <div className="atc-cta-example good">
                  ✅ "Save this so you can come back when you're ready to write your next LinkedIn post."
                </div>
              </div>
            </div>

            <div className="atc-strategy-block">
              <h3>🎨 Visual Consistency Rules</h3>
              <p>
                The most shareable carousels look like they were designed by a professional creative
                team — consistent colors, consistent font sizing, and a recognizable style throughout.
                When using AI-generated images, choose a single visual style (realistic, illustrated,
                abstract) and stick to it across all slides.
              </p>
              <p>
                In your prompt, include a color direction: "warm amber tones," "dark navy and gold,"
                or "bright pastel" — and use the same color direction in every slide prompt.
                This creates visual cohesion even when slides have different subjects.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════ FAQ ═══════════ */}
        <section className="atc-section atc-faq-section">
          <div className="atc-section-label">❓ Frequently asked</div>
          <h2 className="atc-h2">Everything You Need to Know About AI Carousel Generation</h2>
          <div className="atc-faq-list">
            {[
              {
                q: "How do I convert an article into a carousel with AI?",
                a: "The workflow is: (1) Read your article and identify 3–10 key insights. (2) Write each insight as a short, punchy headline (5–10 words). (3) Write a visual prompt for the background image of each slide. (4) Use Scenith's Carousel Generator to generate all slides simultaneously. (5) Download the PNGs and import into Canva, Figma, or your design tool to add text overlays. (6) Export and post to your platform of choice.",
              },
              {
                q: "What's the ideal number of slides in a LinkedIn carousel?",
                a: "LinkedIn algorithm data suggests 7–10 slides perform best for reach, because more slides means more swipe events (engagement signals). However, the optimal number for your audience depends on content density. Educational step-by-step content works well at 8–10 slides. Opinion-based 'hot takes' perform better at 5–6 slides. Never go below 4 slides — single or double-slide carousels don't generate enough swipe signal to benefit from the format.",
              },
              {
                q: "Can I add text overlays to the AI-generated carousel images?",
                a: "Yes — and you should. The workflow we recommend is: generate the background images with Scenith's AI Carousel Generator, download the high-res PNGs, then import them into Canva as image backgrounds. Add your headline, subheading, and brand logo on top. This gives you AI-quality visuals plus full control over typography and branding. Canva's free plan is sufficient for this.",
              },
              {
                q: "What aspect ratio should I use for Instagram carousel posts?",
                a: "For Instagram feed carousels, 4:5 (1080×1350px portrait) is the most recommended format because it takes up the most vertical real estate in the feed. Square (1:1, 1080×1080px) is the safe universal option if you also want to repurpose the same slides for LinkedIn. 9:16 should only be used if you're creating carousel Stories, not feed posts. Scenith's Carousel Generator supports Square, Portrait (9:16), and Landscape (16:9) — use Square for cross-platform and Portrait for Instagram-only.",
              },
              {
                q: "Do I need to credit Scenith when posting AI-generated carousel images?",
                a: "No. All content generated on Scenith comes with full commercial rights and requires no attribution to Scenith. You own the output. You can post, sell, license, and modify the generated images without crediting Scenith.",
              },
              {
                q: "How is this different from just using Canva's AI tools?",
                a: "Canva offers basic AI image generation via its 'AI Image Generator' powered by Stable Diffusion. Scenith offers 7 different AI models including GPT Image 1 (OpenAI), Imagen 4 (Google), FLUX 1.1 Pro, Grok Aurora, and Stability AI Core — plus Image-to-Image generation (transforming an existing photo into a new style). Scenith also generates all 3 carousel slides simultaneously in parallel, not one at a time. For pure image quality and model variety, Scenith significantly outperforms Canva's built-in AI.",
              },
              {
                q: "Can I use a reference photo and transform it into a carousel slide?",
                a: "Yes. Scenith's Image-to-Image mode lets you upload any photo as a reference and the AI transforms it according to your prompt — changing the style, lighting, colors, or composition while preserving the core subject. This is particularly useful for product photography, where you can take a simple product photo and generate a professional studio-quality carousel slide from it.",
              },
              {
                q: "What's the best AI model for carousel images — GPT, Imagen, or Stability?",
                a: "It depends on your content type. For photorealistic visuals (people, products, environments): GPT Image 1 Medium or Grok Aurora. For artistic, illustrative styles: Stability AI Core or FLUX 1.1 Pro. For high-detail, print-quality images: Imagen 4 Standard. For fast prototyping and testing prompts: Imagen 4 Fast or Stability AI Core. When in doubt, start with Nano Banana Pro — it offers 2K resolution with good prompt adherence at moderate credit cost.",
              },
              {
                q: "How many carousels can I generate for free?",
                a: "Scenith gives you 50 free credits on signup with no credit card required. Each carousel slide costs 10–26 credits depending on the model (Imagen 4 Fast = 10cr/slide, Stability AI Core = 15cr/slide, Nano Banana Pro = 26cr/slide for 2K). That means you can generate 1–2 complete 3-slide carousels on the free plan. The Creator Lite plan at $9/month gives you 300 credits — enough for approximately 11 complete carousels per month.",
              },
              {
                q: "Can I use the same AI images for both LinkedIn and Instagram carousels?",
                a: "If you generate in Square (1:1) format, yes — the same images work on both platforms without any cropping. LinkedIn's feed and Instagram's feed both support 1:1 square images natively. If you want to optimize for Instagram specifically, generate in 4:5 Portrait format, which fills more screen space in the feed. LinkedIn supports Portrait posts too, but 1:1 is more common and performs slightly better in LinkedIn's algorithm for carousels.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`atc-faq-item ${expandedFaq === i ? "open" : ""}`}
              >
                <button
                  className="atc-faq-q"
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  aria-expanded={expandedFaq === i}
                >
                  <span>{item.q}</span>
                  <span className="atc-faq-chevron">{expandedFaq === i ? "▲" : "▼"}</span>
                </button>
                {expandedFaq === i && (
                  <div className="atc-faq-a">{item.a}</div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════ RELATED TOOLS ═══════════ */}
        <section className="atc-section atc-related-section">
          <div className="atc-section-label">🔗 More AI tools</div>
          <h2 className="atc-h2">Related AI Tools You Might Need</h2>
          <div className="atc-related-grid">
            {[
              { icon: "🎙️", title: "AI Voice Generator", desc: "Add a voiceover to your carousel content. Generate natural AI narration in 20+ languages.", href: "https://scenith.in/create-ai-content?tab=voice&utm_source=tools&utm_medium=article-to-carousel&utm_campaign=related-voice", label: "Generate Voice" },
              { icon: "🎬", title: "AI Video Generator", desc: "Turn your best carousel slide into a short video clip. Animate a still image into motion.", href: "https://scenith.in/create-ai-content?tab=video&utm_source=tools&utm_medium=article-to-carousel&utm_campaign=related-video", label: "Generate Video" },
              { icon: "🖼️", title: "AI Image Generator", desc: "Generate single high-res images for headers, thumbnails, and standalone social posts.", href: "https://scenith.in/create-ai-content?tab=image&utm_source=tools&utm_medium=article-to-carousel&utm_campaign=related-image", label: "Generate Image" },
            ].map((tool, i) => (
              <a key={i} href={tool.href} className="atc-related-card" rel="noopener">
                <div className="atc-related-icon">{tool.icon}</div>
                <h3 className="atc-related-title">{tool.title}</h3>
                <p className="atc-related-desc">{tool.desc}</p>
                <div className="atc-related-cta">{tool.label} →</div>
              </a>
            ))}
          </div>
        </section>

        {/* ═══════════ FINAL CTA STICKY FOOTER ═══════════ */}
        <div className="atc-sticky-cta">
          <div className="atc-sticky-cta-inner">
            <div className="atc-sticky-text">
              <strong>🎠 Article to Carousel AI Generator</strong>
              <span>Free · 50 credits on signup · No card needed</span>
            </div>
            <a href={UTM_LINK} className="atc-cta-primary atc-cta-sticky">
              Generate My Carousel →
            </a>
          </div>
        </div>

      </main>

      {/* Schema for breadcrumb visible text */}
      <nav aria-label="Page info" className="atc-footer-meta">
        <span>Last updated: April 2026</span>
        <span>·</span>
        <span>Free AI tool by <a href="https://scenith.in">Scenith</a></span>
        <span>·</span>
        <a href="https://scenith.in/tools">See all AI tools →</a>
      </nav>
    </div>
  );
};

export default ArticleToCarouselClient;