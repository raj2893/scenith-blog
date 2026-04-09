import type { Metadata } from "next";
import Link from "next/link";
import "./ai-promo-video-generator.css";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "AI Promo Video Generator — Create Promotional Videos Free in 2026 | Scenith",
  description:
    "Generate stunning AI promo videos for your product, brand, or business in seconds. No camera, no crew, no editing skills needed. Powered by Kling 2.6, Veo 3.1, Wan 2.5 & more. Try free — no credit card required.",
  keywords: [
    "AI promo video generator",
    "AI promotional video maker",
    "create promo video with AI",
    "AI video generator free",
    "product promo video AI",
    "brand video generator",
    "AI marketing video maker",
    "text to promo video",
    "AI commercial video generator",
    "free promo video AI 2026",
    "automated promotional video",
    "AI ad video creator",
    "generate promo video online",
    "AI video maker for business",
    "social media promo video AI",
  ],
  openGraph: {
    title: "AI Promo Video Generator — Make Stunning Promo Videos in Seconds",
    description:
      "No crew, no camera, no editing. Just type your product or brand idea and get a cinematic AI promo video in under 2 minutes.",
    url: "https://scenith.in/tools/ai-promo-video-generator",
    siteName: "Scenith",
    type: "website",
    images: [
      {
        url: "https://cdn.scenith.in/og/ai-promo-video-generator.jpg",
        width: 1200,
        height: 630,
        alt: "AI Promo Video Generator by Scenith",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Promo Video Generator — Create Brand Videos in Seconds",
    description:
      "Powered by Kling 2.6, Veo 3.1, and Wan 2.5. Generate cinematic promo videos from a text prompt. Free to start.",
    images: ["https://cdn.scenith.in/og/ai-promo-video-generator.jpg"],
  },
  alternates: {
    canonical: "https://scenith.in/tools/ai-promo-video-generator",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

// ─── Structured Data ──────────────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://scenith.in/tools/ai-promo-video-generator",
      url: "https://scenith.in/tools/ai-promo-video-generator",
      name: "AI Promo Video Generator",
      description:
        "Create cinematic AI promotional videos for your product, brand, or business in seconds using Kling 2.6, Veo 3.1, and Wan 2.5.",
      isPartOf: { "@id": "https://scenith.in/#website" },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://scenith.in" },
          { "@type": "ListItem", position: 2, name: "Tools", item: "https://scenith.in/tools" },
          { "@type": "ListItem", position: 3, name: "AI Promo Video Generator", item: "https://scenith.in/tools/ai-promo-video-generator" },
        ],
      },
    },
    {
      "@type": "SoftwareApplication",
      name: "Scenith AI Promo Video Generator",
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
          name: "Can I generate a promo video with AI for free?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Scenith gives you 50 free credits on sign-up — no credit card required. You can generate your first AI promo video immediately using Wan 2.5 or Kling 2.5 Turbo.",
          },
        },
        {
          "@type": "Question",
          name: "What AI models power the promo video generator?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Scenith uses Kling 2.6 Pro, Veo 3.1 by Google, Wan 2.5, Kling 2.5 Turbo, and Grok Imagine (with AI audio). Each model is optimised for different use cases from fast drafts to cinema-quality output.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to generate an AI promo video?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Generation takes 30–120 seconds depending on the model and resolution selected. Wan 2.5 at 480p is the fastest. Veo 3.1 at 1080p produces the highest quality but takes a bit longer.",
          },
        },
        {
          "@type": "Question",
          name: "Can I use AI promo videos commercially?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. All videos generated on Scenith come with full commercial rights. You can use them for ads, social media, product pages, YouTube, and client projects — no attribution required.",
          },
        },
      ],
    },
  ],
};

// ─── Static Data ──────────────────────────────────────────────────────────────

const USE_CASES = [
  {
    icon: "🛍️",
    title: "Product Launch Videos",
    description:
      "From skincare serums to SaaS dashboards — describe your product and get a cinematic reveal video ready for launch day. No studio, no photographer, no waiting.",
    keywords: ["product promo video", "product launch AI video", "launch day video"],
  },
  {
    icon: "📣",
    title: "Social Media Ad Creatives",
    description:
      "Scroll-stopping 9:16 videos for Instagram Reels, TikTok, and YouTube Shorts. AI-generated motion that performs like a paid production — at 1/100th of the cost.",
    keywords: ["social media promo video AI", "Instagram reel AI generator", "TikTok video AI"],
  },
  {
    icon: "🏢",
    title: "Brand Story Videos",
    description:
      "Establish authority and trust with cinematic brand films. Tell your origin story, your mission, or showcase your team culture — all from a text prompt.",
    keywords: ["brand video AI", "company promo video", "brand story generator"],
  },
  {
    icon: "🎯",
    title: "Event Promotion",
    description:
      "Build hype before your product launch, summit, or webinar. Teaser videos and countdown clips that make audiences stop, watch, and register.",
    keywords: ["event promo video AI", "webinar teaser video", "event marketing video"],
  },
  {
    icon: "🛒",
    title: "E-commerce & Marketplace",
    description:
      "Amazon listings, Etsy stores, Shopify pages — AI promo videos convert browsers into buyers. One prompt can produce multiple variations in minutes.",
    keywords: ["ecommerce video AI", "Amazon product video", "Shopify promo video"],
  },
  {
    icon: "🏨",
    title: "Real Estate & Hospitality",
    description:
      "Luxury property walkthroughs, hotel ambiance reels, and resort highlight films — all generated without a camera crew or drone operator.",
    keywords: ["real estate promo video AI", "hotel video generator", "property marketing video"],
  },
];

const MODELS = [
  {
    name: "Kling 2.6 Pro",
    badge: "🏆 Best Quality",
    description: "Cinema-grade 1080p output with ultra-smooth motion and stunning detail. Best for hero brand videos and high-production social content.",
    spec: "Up to 1080p · 5–10s · with Audio",
    color: "#f59e0b",
  },
  {
    name: "Veo 3.1 by Google",
    badge: "🎬 Most Cinematic",
    description: "Google's flagship video AI. Photorealistic environments, dramatic lighting, and Hollywood-grade camera movement. Industry benchmark.",
    spec: "1080p · up to 10s · with AI Audio",
    color: "#3b82f6",
  },
  {
    name: "Wan 2.5",
    badge: "⚡ Fastest",
    description: "Generate a promo video draft in under 60 seconds. Perfect for fast iteration, client previews, and social content at scale.",
    spec: "480p–1080p · 5–10s · bulk-friendly",
    color: "#10b981",
  },
  {
    name: "Kling 2.5 Turbo",
    badge: "💰 Best Value",
    description: "High-quality output at a lower credit cost. Ideal for marketers who need consistent output volume without breaking their credit budget.",
    spec: "720p · 5–10s · efficient",
    color: "#8b5cf6",
  },
  {
    name: "Grok Imagine",
    badge: "🎵 With AI Audio",
    description: "The only model that generates video AND AI-composed audio simultaneously. One prompt produces a fully scored promo video. Remarkable.",
    spec: "480p–720p · 5–10s · audio included",
    color: "#ef4444",
  },
];

const PROMPT_IDEAS = [
  { label: "🏃 Athletic Gear", text: "Slow-motion cinematic shot of a runner breaking through the finish line at dawn, sweat droplets catching golden light, city skyline behind, ultra-detailed 4K" },
  { label: "☕ Coffee Brand", text: "Close-up cinematic pour of dark espresso into a white ceramic cup, steam rising in morning light, warm amber tones, product photography style, elegant" },
  { label: "💻 SaaS Product", text: "Futuristic holographic dashboard floating in a modern dark office, glowing data streams, a confident professional reviewing analytics, cinematic corporate" },
  { label: "🌿 Skincare", text: "Luxurious slow-motion splash of botanical serum, green leaves and water droplets in perfect light, clean white background, high-end beauty commercial" },
  { label: "🏠 Real Estate", text: "Cinematic aerial glide over a modern glass villa at sunset, infinity pool reflecting golden sky, lush garden below, architectural digest style" },
  { label: "🎮 Gaming App", text: "Intense slow-motion close-up of hands gripping a controller, screen glow on face in dark room, lightning bolt effects emanating, dramatic gaming trailer aesthetic" },
  { label: "🧘 Wellness App", text: "Serene aerial view of a woman meditating on a wooden platform above a misty forest lake at sunrise, warm fog, total peace, cinematic wellness brand" },
  { label: "🍕 Food Delivery", text: "Cinematic overhead shot of a perfectly crafted pizza being sliced, steam rising, cheese pull in slow motion, warm restaurant lighting, food magazine style" },
];

const STEPS = [
  {
    num: "01",
    title: "Write your vision",
    body: "Describe your product, scene, or brand story in plain language. Be specific about mood, colors, and camera movement. The more detail you give, the more cinematic the output.",
  },
  {
    num: "02",
    title: "Choose your AI model",
    body: "Pick from Kling 2.6 Pro, Veo 3.1, Wan 2.5, and more. Select resolution (up to 1080p), duration (5 or 10 seconds), aspect ratio (16:9, 9:16, 1:1), and whether you want AI-generated audio.",
  },
  {
    num: "03",
    title: "Generate in under 2 minutes",
    body: "Hit generate. The AI renders your promo video in the cloud — no waiting for a render farm. Most videos are ready in 30–120 seconds. Watch it stream directly in your browser.",
  },
  {
    num: "04",
    title: "Download and publish",
    body: "Download your MP4 with full commercial rights. Use it on Instagram, TikTok, YouTube, your website, Google Ads, or anywhere else. No watermark on paid plans.",
  },
];

const STATS = [
  { value: "2 min", label: "Average generation time" },
  { value: "6", label: "State-of-the-art AI models" },
  { value: "1080p", label: "Maximum resolution" },
  { value: "100%", label: "Commercial rights included" },
];

const COMPARISONS = [
  { aspect: "Cost", traditional: "$3,000–$25,000 per video", ai: "From $1 per video" },
  { aspect: "Time to produce", traditional: "2–6 weeks", ai: "30–120 seconds" },
  { aspect: "Team required", traditional: "Director, crew, talent, editor", ai: "Just you + a text prompt" },
  { aspect: "Revisions", traditional: "$500–$2,000 per revision round", ai: "Instant, unlimited regeneration" },
  { aspect: "Scale", traditional: "1–2 videos per campaign", ai: "Hundreds of variations per day" },
  { aspect: "Equipment", traditional: "Camera, lights, set, drone", ai: "A browser and an internet connection" },
];

const TESTIMONIALS = [
  {
    quote: "We replaced our $8,000/month video production budget with Scenith. Our Reels engagement actually went up by 34% because we can now test 10 variations instead of 1.",
    name: "Priya M.",
    role: "Head of Growth, D2C Brand",
    stars: 5,
  },
  {
    quote: "The Kling 2.6 Pro model blew my mind. I typed a single prompt for a product launch teaser and it looked like something a proper production house made. Genuinely impressed.",
    name: "James R.",
    role: "Founder, Shopify Store",
    stars: 5,
  },
  {
    quote: "As a solo marketer for a startup, this tool is a game changer. I can produce promo videos for every product variant without waiting for freelancers or budget approvals.",
    name: "Shreya K.",
    role: "Marketing Manager, SaaS Startup",
    stars: 5,
  },
];

// ─── Page Component ───────────────────────────────────────────────────────────

export default function AIPromoVideoGeneratorPage() {
  const ctaUrl =
    "https://scenith.in/create-ai-content?tab=video&utm_source=tool_page&utm_medium=cta&utm_campaign=ai-promo-video-generator";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="pvg-root">

        {/* ── Grain overlay ── */}
        <div className="pvg-grain" aria-hidden="true" />

        {/* ── Nav breadcrumb ── */}
        <nav className="pvg-breadcrumb" aria-label="Breadcrumb">
          <a href="https://scenith.in">Scenith</a>
          <span aria-hidden="true">›</span>
          <a href="https://scenith.in/tools">Tools</a>
          <span aria-hidden="true">›</span>
          <span aria-current="page">AI Promo Video Generator</span>
        </nav>

        {/* ═══════════════════════════════════════════════════════════════════
            HERO
        ═══════════════════════════════════════════════════════════════════ */}
        <header className="pvg-hero">
          <div className="pvg-hero-bg" aria-hidden="true">
            <div className="pvg-hero-glow pvg-glow-1" />
            <div className="pvg-hero-glow pvg-glow-2" />
            <div className="pvg-hero-glow pvg-glow-3" />
            <div className="pvg-scanlines" />
          </div>

          <div className="pvg-hero-inner">
            <div className="pvg-hero-badge">
              <span className="pvg-badge-dot" />
              AI Video · 2026 · Production-Ready
            </div>

            <h1 className="pvg-hero-title">
              <span className="pvg-title-line pvg-title-line-1">AI Promo</span>
              <span className="pvg-title-line pvg-title-line-2">Video Generator</span>
              <span className="pvg-title-line pvg-title-sub">
                Type a prompt. Get a cinematic promo video.
              </span>
            </h1>

            <p className="pvg-hero-desc">
              No camera. No crew. No editing software. Just describe your product or brand,
              pick an AI model, and receive a stunning promotional video in under two minutes.
              Powered by <strong>Kling 2.6 Pro</strong>, <strong>Veo 3.1</strong>,
              <strong> Wan 2.5</strong>, and more — the world's most advanced video AI models,
              all in one place.
            </p>

            {/* ── BIG CTA ── */}
            <Link
              href={ctaUrl}
              className="pvg-hero-cta"
              aria-label="Generate your first AI promo video free"
            >
              <span className="pvg-cta-icon">▶</span>
              <span className="pvg-cta-text">
                Generate Your Promo Video Free
                <small>No credit card · 50 free credits on sign-up</small>
              </span>
              <span className="pvg-cta-arrow">→</span>
            </Link>

            <p className="pvg-hero-trust">
              Trusted by <strong>10,000+</strong> marketers, founders, and creators ·
              <strong> Full commercial rights</strong> included
            </p>

            {/* Stats strip */}
            <div className="pvg-stats-strip">
              {STATS.map((s) => (
                <div key={s.label} className="pvg-stat">
                  <span className="pvg-stat-value">{s.value}</span>
                  <span className="pvg-stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Film frames decoration */}
          <div className="pvg-film-strip" aria-hidden="true">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="pvg-film-frame">
                <div className="pvg-film-perf top" />
                <div className="pvg-film-perf bottom" />
                <div className="pvg-film-content" style={{ animationDelay: `${i * 0.4}s` }} />
              </div>
            ))}
          </div>
        </header>

        <main className="pvg-main">

          {/* ═══════════════════════════════════════════════════════════════════
              PROMPT IDEAS TICKER
          ═══════════════════════════════════════════════════════════════════ */}
          <section className="pvg-ticker-section" aria-label="Prompt examples">
            <div className="pvg-ticker-label">Try these prompts →</div>
            <div className="pvg-ticker-track" aria-hidden="true">
              <div className="pvg-ticker-inner">
                {[...PROMPT_IDEAS, ...PROMPT_IDEAS].map((p, i) => (
                  <div key={i} className="pvg-ticker-chip">
                    <span>{p.label}</span>
                    <span className="pvg-ticker-text">{p.text.slice(0, 60)}…</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════════════════════
              WHAT IS + WHY NOW
          ═══════════════════════════════════════════════════════════════════ */}
          <section className="pvg-section pvg-intro-section">
            <div className="pvg-section-inner pvg-two-col">
              <div className="pvg-col-text">
                <h2 className="pvg-section-title">
                  What is an AI Promo Video Generator?
                </h2>
                <p>
                  An AI promo video generator is a tool that converts text descriptions into fully
                  rendered promotional video clips — no camera, no editing software, no production
                  crew required. You describe a scene or product concept in natural language, and
                  advanced diffusion-based video AI models render it frame by frame into a
                  professional-looking video file you can download and publish immediately.
                </p>
                <p>
                  In 2026, AI video generation has crossed a critical threshold. Models like
                  <strong> Veo 3.1</strong> and <strong>Kling 2.6 Pro</strong> now produce output
                  that is, in many use cases, indistinguishable from footage shot by a professional
                  crew. Motion is fluid, lighting is physically accurate, and subject consistency
                  across frames has dramatically improved.
                </p>
                <p>
                  For marketers, founders, e-commerce operators, and content creators, this is a
                  seismic shift. Video — historically the most expensive content format — is now
                  accessible at the cost of a text prompt and a few credits.
                </p>
              </div>
              <div className="pvg-col-visual">
                <div className="pvg-terminal">
                  <div className="pvg-terminal-bar">
                    <span className="pvg-term-dot red" />
                    <span className="pvg-term-dot yellow" />
                    <span className="pvg-term-dot green" />
                    <span className="pvg-term-title">prompt → promo_video.mp4</span>
                  </div>
                  <div className="pvg-terminal-body">
                    <div className="pvg-term-line">
                      <span className="pvg-term-prompt">$</span>
                      <span className="pvg-term-cmd"> model: <span className="pvg-term-accent">kling-v2.6-pro</span></span>
                    </div>
                    <div className="pvg-term-line">
                      <span className="pvg-term-prompt">$</span>
                      <span className="pvg-term-cmd"> resolution: <span className="pvg-term-accent">1080p</span></span>
                    </div>
                    <div className="pvg-term-line">
                      <span className="pvg-term-prompt">$</span>
                      <span className="pvg-term-cmd"> duration: <span className="pvg-term-accent">10s</span></span>
                    </div>
                    <div className="pvg-term-line">
                      <span className="pvg-term-prompt">$</span>
                      <span className="pvg-term-cmd"> aspect: <span className="pvg-term-accent">16:9</span></span>
                    </div>
                    <div className="pvg-term-line pvg-term-spacer" />
                    <div className="pvg-term-line">
                      <span className="pvg-term-prompt">›</span>
                      <span className="pvg-term-generating"> Generating<span className="pvg-term-dots">...</span></span>
                    </div>
                    <div className="pvg-term-line pvg-term-progress">
                      <div className="pvg-progress-bar">
                        <div className="pvg-progress-fill" />
                      </div>
                    </div>
                    <div className="pvg-term-line">
                      <span className="pvg-term-success">✓</span>
                      <span className="pvg-term-cmd"> <span className="pvg-term-accent">promo_video.mp4</span> ready (87s)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════════════════════
              HOW IT WORKS
          ═══════════════════════════════════════════════════════════════════ */}
          <section className="pvg-section pvg-steps-section">
            <h2 className="pvg-section-title pvg-centered">
              How to Create an AI Promo Video in 4 Steps
            </h2>
            <p className="pvg-section-sub pvg-centered">
              From blank page to shareable promo video in under two minutes — here's the exact workflow.
            </p>

            <div className="pvg-steps">
              {STEPS.map((step) => (
                <div key={step.num} className="pvg-step">
                  <div className="pvg-step-num">{step.num}</div>
                  <div className="pvg-step-body">
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                  </div>
                  <div className="pvg-step-line" aria-hidden="true" />
                </div>
              ))}
            </div>

            <div className="pvg-steps-cta">
              <Link href={ctaUrl} className="pvg-mid-cta">
                Start Generating Free →
              </Link>
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════════════════════
              AI MODELS
          ═══════════════════════════════════════════════════════════════════ */}
          <section className="pvg-section pvg-models-section">
            <h2 className="pvg-section-title pvg-centered">
              6 World-Class AI Video Models — One Platform
            </h2>
            <p className="pvg-section-sub pvg-centered">
              Each model has unique strengths. Scenith gives you access to all of them under a single
              credit balance — no separate subscriptions, no account juggling.
            </p>

            <div className="pvg-models-grid">
              {MODELS.map((m) => (
                <div
                  key={m.name}
                  className="pvg-model-card"
                  style={{ "--model-color": m.color } as React.CSSProperties}
                >
                  <div className="pvg-model-badge">{m.badge}</div>
                  <h3 className="pvg-model-name">{m.name}</h3>
                  <p className="pvg-model-desc">{m.description}</p>
                  <div className="pvg-model-spec">{m.spec}</div>
                </div>
              ))}
            </div>

            <div className="pvg-models-note">
              All models are available in the Scenith AI Content Creator. Switch between them
              instantly. Credits shared across all models — no separate top-ups.
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════════════════════
              USE CASES
          ═══════════════════════════════════════════════════════════════════ */}
          <section className="pvg-section pvg-usecases-section">
            <h2 className="pvg-section-title pvg-centered">
              Who Needs an AI Promo Video Generator in 2026?
            </h2>
            <p className="pvg-section-sub pvg-centered">
              The short answer: anyone who promotes anything. The long answer:
            </p>

            <div className="pvg-usecases-grid">
              {USE_CASES.map((uc) => (
                <article key={uc.title} className="pvg-usecase-card">
                  <div className="pvg-uc-icon">{uc.icon}</div>
                  <h3>{uc.title}</h3>
                  <p>{uc.description}</p>
                  <div className="pvg-uc-tags">
                    {uc.keywords.map((k) => (
                      <span key={k} className="pvg-uc-tag">{k}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════════════════════
              PROMPT GUIDE (meaty SEO content)
          ═══════════════════════════════════════════════════════════════════ */}
          <section className="pvg-section pvg-guide-section">
            <h2 className="pvg-section-title">
              How to Write the Perfect AI Promo Video Prompt
            </h2>
            <p className="pvg-guide-intro">
              The quality of your AI-generated promo video is directly proportional to the
              specificity of your prompt. Vague input produces vague output. Here's the exact
              framework used by professional AI video creators to consistently generate
              commercial-grade results.
            </p>

            <div className="pvg-guide-blocks">

              <div className="pvg-guide-block">
                <div className="pvg-guide-num">1</div>
                <div>
                  <h3>Open with the shot type and camera movement</h3>
                  <p>
                    AI video models respond exceptionally well to cinematographic language. Start your
                    prompt with a camera direction: <em>"Slow-motion close-up of..."</em>,
                    <em>"Aerial drone descending into..."</em>, <em>"Wide tracking shot of..."</em>,
                    or <em>"Extreme macro pull-back from..."</em>. This grounds the model in a specific
                    visual vocabulary before you describe the subject.
                  </p>
                  <div className="pvg-guide-example">
                    <span className="pvg-guide-bad">❌ Weak:</span> "Show my coffee brand"
                    <br />
                    <span className="pvg-guide-good">✅ Strong:</span> "Cinematic slow-motion close-up of dark espresso pouring into a white ceramic cup, steam rising in warm morning light..."
                  </div>
                </div>
              </div>

              <div className="pvg-guide-block">
                <div className="pvg-guide-num">2</div>
                <div>
                  <h3>Specify lighting and atmosphere</h3>
                  <p>
                    Lighting is the single most powerful variable in how professional a video feels.
                    Include the time of day, light quality, and mood. Terms like
                    <em> "golden hour backlight"</em>, <em>"dramatic side lighting"</em>,
                    <em>"god rays through fog"</em>, <em>"blue hour neon reflections"</em>,
                    or <em>"soft studio diffused light"</em> dramatically improve output quality.
                    Don't leave lighting to chance — specify it every time.
                  </p>
                </div>
              </div>

              <div className="pvg-guide-block">
                <div className="pvg-guide-num">3</div>
                <div>
                  <h3>Include a style reference at the end</h3>
                  <p>
                    Closing your prompt with a style anchor helps the AI calibrate its aesthetic
                    targets. Effective anchors include: <em>"cinematic 4K"</em>,
                    <em>"Apple product reveal style"</em>, <em>"Nike commercial aesthetic"</em>,
                    <em>"luxury fashion editorial"</em>, <em>"National Geographic documentary"</em>,
                    <em>"ASMR product photography"</em>, or simply <em>"ultra-detailed, 8K"</em>.
                  </p>
                </div>
              </div>

              <div className="pvg-guide-block">
                <div className="pvg-guide-num">4</div>
                <div>
                  <h3>Use the Image-to-Video feature for product shots</h3>
                  <p>
                    If you already have a high-quality image of your product (even from Scenith's
                    AI image generator), use the Image-to-Video mode. Upload your image and write a
                    motion prompt that describes how the scene should move — the camera pull back,
                    the steam rising, the liquid pouring, the product rotating. This produces
                    dramatically more brand-accurate results than text-to-video alone.
                  </p>
                  <p>
                    Pro tip: Generate your product image first using Imagen 4 or GPT Image 1 Medium,
                    then click <em>"Make Video from this Image"</em> directly in Scenith. The workflow
                    is seamless.
                  </p>
                </div>
              </div>

              <div className="pvg-guide-block">
                <div className="pvg-guide-num">5</div>
                <div>
                  <h3>Match model to use case</h3>
                  <p>
                    Don't use a sledgehammer for a finishing nail. Here's the quick decision guide:
                  </p>
                  <ul className="pvg-guide-list">
                    <li><strong>Fast social draft?</strong> → Wan 2.5 at 480p. Done in under a minute.</li>
                    <li><strong>High-stakes brand hero video?</strong> → Kling 2.6 Pro or Veo 3.1 at 1080p.</li>
                    <li><strong>Need audio without sourcing music?</strong> → Grok Imagine. It generates video + AI-composed audio in one shot.</li>
                    <li><strong>Volume at moderate quality?</strong> → Kling 2.5 Turbo. Great for A/B testing multiple concepts.</li>
                    <li><strong>Maximum cinematic realism?</strong> → Veo 3.1. Google's best. Unrivalled environment rendering.</li>
                  </ul>
                </div>
              </div>

            </div>
          </section>

          {/* ═══════════════════════════════════════════════════════════════════
              CTA BLOCK (mid-page)
          ═══════════════════════════════════════════════════════════════════ */}
          <section className="pvg-mid-cta-section">
            <div className="pvg-mid-cta-bg" aria-hidden="true" />
            <div className="pvg-mid-cta-inner">
              <h2>Ready to Create Your First AI Promo Video?</h2>
              <p>
                50 free credits. No card required. Your first video could be live in 90 seconds.
              </p>
              <Link href={ctaUrl} className="pvg-hero-cta pvg-cta-alt">
                <span className="pvg-cta-icon">▶</span>
                <span className="pvg-cta-text">
                  Open AI Video Generator
                  <small>Kling · Veo · Wan · Grok — all models included</small>
                </span>
                <span className="pvg-cta-arrow">→</span>
              </Link>
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════════════════════
              COMPARISON TABLE
          ═══════════════════════════════════════════════════════════════════ */}
          <section className="pvg-section pvg-compare-section">
            <h2 className="pvg-section-title pvg-centered">
              AI Promo Video vs Traditional Video Production
            </h2>
            <p className="pvg-section-sub pvg-centered">
              The numbers speak for themselves. Here's what changes when AI enters the video
              production equation.
            </p>

            <div className="pvg-compare-table">
              <div className="pvg-compare-header">
                <div className="pvg-compare-aspect">Comparison Factor</div>
                <div className="pvg-compare-trad">Traditional Production</div>
                <div className="pvg-compare-ai">Scenith AI Video</div>
              </div>
              {COMPARISONS.map((row) => (
                <div key={row.aspect} className="pvg-compare-row">
                  <div className="pvg-compare-aspect">{row.aspect}</div>
                  <div className="pvg-compare-trad">
                    <span className="pvg-compare-x">✗</span> {row.traditional}
                  </div>
                  <div className="pvg-compare-ai">
                    <span className="pvg-compare-check">✓</span> {row.ai}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════════════════════
              TESTIMONIALS
          ═══════════════════════════════════════════════════════════════════ */}
          <section className="pvg-section pvg-testimonials-section">
            <h2 className="pvg-section-title pvg-centered">
              What Creators Are Saying
            </h2>

            <div className="pvg-testimonials">
              {TESTIMONIALS.map((t) => (
                <blockquote key={t.name} className="pvg-testimonial">
                  <div className="pvg-testimonial-stars">
                    {"★".repeat(t.stars)}
                  </div>
                  <p className="pvg-testimonial-quote">"{t.quote}"</p>
                  <footer className="pvg-testimonial-footer">
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </footer>
                </blockquote>
              ))}
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════════════════════
              DEEP CONTENT — The State of AI Video in 2026
          ═══════════════════════════════════════════════════════════════════ */}
          <section className="pvg-section pvg-deep-section">
            <h2 className="pvg-section-title">
              The State of AI Promo Video in 2026: Why This Is the Year It Goes Mainstream
            </h2>

            <div className="pvg-deep-content">

              <h3>The Quality Gap Has Closed</h3>
              <p>
                For most of AI video's short history, the technology was impressive in demos
                but impractical for real marketing use. Flickering faces, warped hands, inconsistent
                subjects between frames, and a distinctly "AI-generated" look made early outputs
                immediately recognisable — and therefore unusable for anything client-facing or
                revenue-critical.
              </p>
              <p>
                2026 is different. Models like Kling 2.6 Pro, developed by Kuaishou's team, and
                Veo 3.1, produced by Google DeepMind's video research group, now maintain subject
                consistency across 10+ seconds, render physically accurate lighting and shadow,
                and produce camera motion that genuinely looks like it was captured by a skilled
                cinematographer. The tell-tale AI artifacts — the smearing, the morphing, the
                wrong-shaped hands — have largely been engineered out of the top-tier models.
              </p>
              <p>
                For the first time, a marketing team can produce video content using AI that holds
                up to scrutiny in a professional context. Not just for internal decks or social
                media filler — but for actual campaigns, actual ads, and actual brand communication.
              </p>

              <h3>The Cost Equation Has Permanently Changed</h3>
              <p>
                A typical 30-second brand video from a professional production company costs
                between $8,000 and $30,000 in a major market. That includes pre-production
                (scriptwriting, storyboarding, location scouting), production (crew, equipment,
                talent), and post-production (editing, color grading, sound design, delivery).
                Even a basic "talking head" corporate video with simple B-roll can run to $3,000–5,000.
              </p>
              <p>
                An AI-generated promo video from Scenith costs between $1 and $15 in credits,
                depending on the model and resolution. That is not a 50% reduction. That is a
                99% reduction. And the output, while not a direct replacement for every use case,
                is commercially viable for a rapidly expanding set of applications: social ads,
                product demos, explainer videos, event teasers, e-commerce product pages, and more.
              </p>
              <p>
                The brands and marketers who understand this shift in 2026 — and build AI video
                into their production stack now — will have a structural cost advantage over
                competitors still booking studio time.
              </p>

              <h3>The Rise of AI Audio in Video: What Grok Imagine Changes</h3>
              <p>
                For the last several years, AI video has been a silent medium. You generate the
                visual, then separately source music (licensed or royalty-free), add voiceover
                (TTS or human), and mix it in an editing timeline. That workflow is still perfectly
                valid — and for many professional applications, remains the right approach.
              </p>
              <p>
                But Grok Imagine represents a different model: simultaneous video and audio generation
                from a single prompt. Describe a scene, and the model renders both the visual motion
                and an AI-composed audio score that is tonally matched to what it has generated.
                The practical implication is remarkable — you can produce a complete promo video,
                including its audio backdrop, in a single generation step, with no additional tooling.
              </p>
              <p>
                This is early technology, and the audio quality has natural limits. But as a rapid
                draft, a social media clip, or a lo-fi brand teaser, the single-prompt audio-visual
                output from Grok Imagine is genuinely useful today. And it will only get better.
              </p>

              <h3>Image-to-Video: The Most Underrated Workflow in AI Content Creation</h3>
              <p>
                Most conversations about AI video focus on text-to-video: you type a prompt and
                get a clip. But for brands and marketers with existing product assets, the
                image-to-video workflow is arguably more powerful — and more reliable.
              </p>
              <p>
                Here's why: text-to-video asks the model to invent everything from scratch. The
                product design, the colors, the context, the subject appearance. This creative
                latitude is great for atmospheric scenes and abstract visuals, but it's a liability
                when you need your specific product to look exactly right.
              </p>
              <p>
                Image-to-video solves this. You provide a high-quality image of your actual product
                (or an AI-generated image from Imagen 4 or GPT Image 1), and the model animates it.
                Camera movement, environmental motion, steam, water, fabric flow, light change —
                the model adds cinematic life to your static asset. The product looks exactly as
                intended because you started with an image of the exact product.
              </p>
              <p>
                Scenith's complete workflow — generate product image with AI, then animate it into
                a promo video — is accessible in a single interface. No separate tools, no export
                and re-import, no format conversion. The "Make Video from this Image" button
                appears directly beneath every generated image.
              </p>

              <h3>Resolution and Duration: The Settings That Matter Most</h3>
              <p>
                When choosing settings for an AI promo video, two decisions have the biggest impact
                on quality and credit consumption: resolution and duration.
              </p>
              <p>
                <strong>Resolution:</strong> 480p is fine for low-bandwidth social media and rapid
                iteration. 720p hits the sweet spot for most Instagram and TikTok content. 1080p
                is the production standard for YouTube, website hero videos, and anything being
                reviewed by a client. The jump from 720p to 1080p roughly doubles credit cost,
                but for high-visibility placements, it's the right call.
              </p>
              <p>
                <strong>Duration:</strong> 5 seconds and 10 seconds are your options. For social
                media — where the first 3 seconds determine whether someone scrolls past — a tight
                5-second clip is often more effective than 10 seconds of content that dilutes
                attention. Reserve 10-second clips for products that genuinely need the time:
                complex processes, multiple product features, or scene transitions that build a
                narrative.
              </p>
              <p>
                <strong>Aspect ratio:</strong> 16:9 for YouTube and website embeds. 9:16 for
                Instagram Reels, TikTok, and YouTube Shorts. 1:1 for Instagram feed posts. Match
                your output to your placement before generating — a 16:9 video cropped to 9:16
                loses critical visual information.
              </p>

              <h3>The Competitive Advantage of Speed</h3>
              <p>
                One of the most significant but least discussed advantages of AI promo video
                generation is the speed advantage in A/B testing. Traditional video production
                makes testing prohibitively expensive. Producing two versions of a 30-second ad
                to see which performs better costs twice as much — perhaps $40,000 instead of
                $20,000. Most brands don't do it. They produce one video and hope.
              </p>
              <p>
                With AI video, generating 10 variations of a product promo — different scenes,
                different camera angles, different emotional tones — costs the same as ordering
                lunch. You can test them against each other, identify the winner, and scale spend
                behind what actually converts. This is the performance marketing playbook applied
                to video creative, and it has been economically impossible until now.
              </p>
              <p>
                The brands who will win on social media in 2026 are not the ones with the biggest
                production budgets. They're the ones running the most creative tests at the highest
                frequency. AI promo video generation is the infrastructure that makes that possible.
              </p>

            </div>
          </section>

          {/* ═══════════════════════════════════════════════════════════════════
              PROMPT SHOWCASE
          ═══════════════════════════════════════════════════════════════════ */}
          <section className="pvg-section pvg-prompts-section">
            <h2 className="pvg-section-title pvg-centered">
              8 Ready-to-Use AI Promo Video Prompts
            </h2>
            <p className="pvg-section-sub pvg-centered">
              Copy, customise, and generate. These prompts are engineered for commercial promo
              video output — just swap in your product details.
            </p>

            <div className="pvg-prompts-grid">
              {PROMPT_IDEAS.map((p) => (
                <div key={p.label} className="pvg-prompt-card">
                  <div className="pvg-prompt-label">{p.label}</div>
                  <p className="pvg-prompt-text">"{p.text}"</p>
                  <Link href={ctaUrl} className="pvg-prompt-use">
                    Use this prompt →
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════════════════════
              FAQ
          ═══════════════════════════════════════════════════════════════════ */}
          <section className="pvg-section pvg-faq-section">
            <h2 className="pvg-section-title pvg-centered">
              AI Promo Video Generator — Frequently Asked Questions
            </h2>

            <div className="pvg-faq-list">

              <details className="pvg-faq-item">
                <summary>Can I generate a promo video with AI for free?</summary>
                <p>
                  Yes. Scenith gives you 50 free credits when you create an account — no credit
                  card required. Using Wan 2.5 at 480p (46 credits for a 5-second video), you can
                  generate your first AI promo video for free immediately. Paid plans start at just
                  $9/month and include 300 credits, access to all premium models including Kling
                  2.6 Pro and Veo 3.1, and no watermarks.
                </p>
              </details>

              <details className="pvg-faq-item">
                <summary>What resolution can I generate AI promo videos at?</summary>
                <p>
                  Resolution depends on the model. Wan 2.5 supports 480p, 720p, and 1080p. Grok
                  Imagine supports 480p and 720p. Kling 2.5 Turbo outputs at 720p. Kling 2.6 Pro
                  and Veo 3.1 output at up to 1080p — currently the highest available from any
                  consumer AI video tool. All outputs are rendered in the cloud and available as
                  downloadable MP4 files.
                </p>
              </details>

              <details className="pvg-faq-item">
                <summary>Can I use AI promo videos for commercial purposes and paid ads?</summary>
                <p>
                  Yes. All videos generated on Scenith carry full commercial rights. You can use
                  them in paid social media advertising (Meta, TikTok, Google), YouTube content,
                  client deliverables, product pages, email marketing, and any other commercial
                  context. No attribution to Scenith is required. Paid plan users receive
                  watermark-free downloads.
                </p>
              </details>

              <details className="pvg-faq-item">
                <summary>How long does AI promo video generation take?</summary>
                <p>
                  Generation time varies by model and settings. Wan 2.5 at 480p is the fastest,
                  typically completing in 30–60 seconds. Veo 3.1 at 1080p with audio takes
                  90–120 seconds on average. All generation runs in the cloud — you do not need
                  to stay on the page for image-based generations, though you will need to remain
                  for the status updates. Most promo videos are ready in under two minutes.
                </p>
              </details>

              <details className="pvg-faq-item">
                <summary>Can I generate a promo video from an image of my product?</summary>
                <p>
                  Yes — this is one of the most powerful features available. Use Image-to-Video
                  mode by uploading an existing product image or using one generated by Scenith's
                  AI image generator. The AI will animate your product image based on the motion
                  prompt you provide. This is the recommended workflow for brands that need
                  accurate product representation in their promo videos.
                </p>
              </details>

              <details className="pvg-faq-item">
                <summary>Which AI video model is best for product promo videos?</summary>
                <p>
                  For high-quality product showcases and brand hero videos: <strong>Kling 2.6 Pro</strong>
                  or <strong>Veo 3.1</strong>. For fast social drafts and A/B testing:
                  <strong> Wan 2.5</strong>. For promo videos that need music without manual
                  audio sourcing: <strong>Grok Imagine</strong>. For consistent volume output at
                  moderate quality: <strong>Kling 2.5 Turbo</strong>. Scenith's interface shows
                  the credit cost for each model and setting before you generate, so you can make
                  an informed choice.
                </p>
              </details>

              <details className="pvg-faq-item">
                <summary>What aspect ratios are supported for promo videos?</summary>
                <p>
                  Scenith supports three aspect ratios for AI video generation: 16:9 (landscape —
                  ideal for YouTube, website embeds, and desktop-first placements), 9:16 (portrait
                  — optimised for Instagram Reels, TikTok, and YouTube Shorts), and 1:1 (square —
                  ideal for Instagram feed posts and platform-agnostic social content). Select your
                  target placement before generating to avoid post-production cropping.
                </p>
              </details>

              <details className="pvg-faq-item">
                <summary>Do AI promo videos have watermarks?</summary>
                <p>
                  Free plan videos may include a Scenith watermark on outputs from certain models.
                  All paid plan users (starting from $9/month) receive clean, watermark-free MP4
                  downloads on all models. If watermark-free output is critical for commercial
                  deployment, upgrading to a paid plan is recommended.
                </p>
              </details>

              <details className="pvg-faq-item">
                <summary>Can AI replace a professional video production team?</summary>
                <p>
                  For certain use cases — social media content, product teasers, e-commerce clips,
                  event promos, and brand awareness videos — AI now produces output that is
                  commercially viable and competitive with traditional production. For highly
                  specific brand executions requiring exact talent likeness, complex live-action
                  integration, or broadcast-quality delivery, professional production still has
                  advantages. The practical answer in 2026: AI handles the 80% of video needs
                  that don't require a crew, freeing budget for the 20% that genuinely do.
                </p>
              </details>

              <details className="pvg-faq-item">
                <summary>Is Scenith's AI promo video generator safe for brand use?</summary>
                <p>
                  Yes. Scenith does not train AI models on your generated content without explicit
                  consent. Premium plan users' videos are kept private and not displayed in any
                  public gallery. All outputs are generated from your prompts and delivered
                  exclusively to your account. Videos generated from non-trademarked, original
                  prompts carry no intellectual property risk — the content is synthetic,
                  generated by AI, and owned by you.
                </p>
              </details>

            </div>
          </section>

          {/* ═══════════════════════════════════════════════════════════════════
              FINAL CTA
          ═══════════════════════════════════════════════════════════════════ */}
          <section className="pvg-final-cta-section">
            <div className="pvg-final-cta-bg" aria-hidden="true">
              <div className="pvg-final-glow" />
            </div>
            <div className="pvg-final-cta-inner">
              <div className="pvg-final-badge">Free to start · No credit card required</div>
              <h2 className="pvg-final-title">
                Your first AI promo video is<br />
                <span className="pvg-final-accent">90 seconds away.</span>
              </h2>
              <p className="pvg-final-sub">
                50 free credits. Six world-class AI models. One platform.
                Generate, iterate, download, publish — without ever booking a studio.
              </p>
              <Link href={ctaUrl} className="pvg-hero-cta pvg-final-hero-cta">
                <span className="pvg-cta-icon">▶</span>
                <span className="pvg-cta-text">
                  Generate My First AI Promo Video
                  <small>scenith.in/create-ai-content · Video tab · Free</small>
                </span>
                <span className="pvg-cta-arrow">→</span>
              </Link>
              <div className="pvg-final-trust-row">
                <span>🔒 No watermark on paid plans</span>
                <span>⚡ Results in under 2 minutes</span>
                <span>📥 MP4 download, full commercial rights</span>
                <span>🎬 6 AI models in one place</span>
              </div>
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════════════════════
              INTERNAL LINKS / RELATED TOOLS
          ═══════════════════════════════════════════════════════════════════ */}
          <section className="pvg-section pvg-related-section">
            <h2 className="pvg-section-title pvg-centered">Related AI Tools on Scenith</h2>
            <div className="pvg-related-grid">
              <Link href="https://scenith.in/create-ai-content?tab=image&utm_source=tool_page&utm_medium=internal_link&utm_campaign=ai-promo-video-generator" className="pvg-related-card">
                <span className="pvg-related-icon">🖼️</span>
                <div>
                  <strong>AI Image Generator</strong>
                  <span>Generate product images with GPT, Imagen 4, FLUX, and Grok Aurora</span>
                </div>
              </Link>
              <Link href="https://scenith.in/create-ai-content?tab=voice&utm_source=tool_page&utm_medium=internal_link&utm_campaign=ai-promo-video-generator" className="pvg-related-card">
                <span className="pvg-related-icon">🎙️</span>
                <div>
                  <strong>AI Voice Generator</strong>
                  <span>Add professional voiceover to your promo videos — 40+ voices, 20+ languages</span>
                </div>
              </Link>
              <Link href="https://scenith.in/tools/add-subtitles-to-videos?utm_source=tool_page&utm_medium=internal_link&utm_campaign=ai-promo-video-generator" className="pvg-related-card">
                <span className="pvg-related-icon">💬</span>
                <div>
                  <strong>Add Subtitles to Videos</strong>
                  <span>Auto-caption your AI promo videos for social media accessibility</span>
                </div>
              </Link>
            </div>
          </section>

        </main>

        {/* ── Footer ── */}
        <footer className="pvg-footer">
          <p>
            <a href="https://scenith.in">Scenith</a> · AI Content Creation Platform ·
            <a href="https://scenith.in/create-ai-content?tab=video&utm_source=tool_page&utm_medium=footer&utm_campaign=ai-promo-video-generator"> Try the AI Video Generator →</a>
          </p>
          <p className="pvg-footer-copy">
            © {new Date().getFullYear()} Scenith. All rights reserved. All generated content carries full commercial rights.
          </p>
        </footer>

      </div>
    </>
  );
}