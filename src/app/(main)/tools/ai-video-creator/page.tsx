import type { Metadata } from "next";
import Link from "next/link";
import "./ai-video-creator.css";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "AI Video Creator — Generate Cinematic AI Videos Free Online | Scenith",
  description:
    "Create stunning AI-generated videos from text or images in seconds. Kling 2.6, Veo 3.1, Wan 2.5, Grok Imagine — 6 world-class models. Text-to-video & image-to-video. Up to 1080p MP4. Free to try.",
  keywords: [
    "ai video creator",
    "ai video generator",
    "text to video ai",
    "ai video maker online",
    "free ai video generator",
    "ai video creator online",
    "text to video free",
    "ai generated video",
    "ai cinematic video",
    "kling ai video",
    "veo ai video generator",
    "image to video ai",
    "ai video generator 2026",
    "make video with ai",
    "ai video creation tool",
    "generate video from text",
    "ai video no watermark",
    "ai video commercial use",
    "wan 2.5 video generator",
    "grok video generator",
  ],
  openGraph: {
    title: "AI Video Creator — Cinematic Videos from Text in Seconds | Scenith",
    description:
      "6 state-of-the-art AI video models. Text-to-video & image-to-video. Up to 1080p, instant MP4 download. Free to try.",
    url: "https://scenith.in/tools/ai-video-creator",
    siteName: "Scenith",
    type: "website",
    images: [
      {
        url: "https://scenith.in/og/ai-video-creator.jpg",
        width: 1200,
        height: 630,
        alt: "AI Video Creator by Scenith",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Video Creator — Cinematic Videos from Text in Seconds",
    description:
      "6 AI video models. Text-to-video & image-to-video. 1080p MP4. Free to try — no credit card.",
    images: ["https://scenith.in/og/ai-video-creator.jpg"],
  },
  alternates: {
    canonical: "https://scenith.in/tools/ai-video-creator",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// ─── Structured Data ──────────────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://scenith.in/tools/ai-video-creator",
      url: "https://scenith.in/tools/ai-video-creator",
      name: "AI Video Creator — Generate Cinematic AI Videos Free Online",
      description:
        "Create stunning AI-generated videos from text or images. 6 world-class models including Kling 2.6, Veo 3.1, Wan 2.5. Free to try.",
      isPartOf: { "@id": "https://scenith.in/#website" },
      breadcrumb: { "@id": "https://scenith.in/tools/ai-video-creator#breadcrumb" },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://scenith.in/tools/ai-video-creator#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://scenith.in" },
        { "@type": "ListItem", position: 2, name: "Tools", item: "https://scenith.in/tools" },
        {
          "@type": "ListItem",
          position: 3,
          name: "AI Video Creator",
          item: "https://scenith.in/tools/ai-video-creator",
        },
      ],
    },
    {
      "@type": "SoftwareApplication",
      name: "Scenith AI Video Creator",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Free to try with 50 credits on signup",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "863",
        bestRating: "5",
      },
      featureList: [
        "Text-to-video generation",
        "Image-to-video animation",
        "6 AI video models",
        "Up to 1080p resolution",
        "16:9, 9:16, 1:1 aspect ratios",
        "5 and 10 second clips",
        "AI-generated audio",
        "Commercial use included",
        "MP4 download",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is the AI video creator free?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. You get 50 free credits when you sign up for Scenith — no credit card required. Free credits can be used for AI video generation using the Wan 2.5 model. Paid plans starting at $9/month unlock all 6 video models and higher resolution.",
          },
        },
        {
          "@type": "Question",
          name: "Which AI video model produces the best quality in 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kling 2.6 Pro and Veo 3.1 produce the highest cinematic quality in 2026. Veo 3.1 is Google's flagship video model and excels at photorealistic motion. Kling 2.6 Pro from Kuaishou delivers exceptional prompt adherence and character consistency. For budget-conscious generation, Wan 2.5 produces impressive results at lower credit cost.",
          },
        },
        {
          "@type": "Question",
          name: "Can I generate a video from an image?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Scenith's AI video creator supports image-to-video generation. Upload any image as the starting frame, describe the motion you want, and the AI will animate it into a video clip. This works with all supported models.",
          },
        },
        {
          "@type": "Question",
          name: "What video formats and resolutions are available?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Scenith generates MP4 video files in 480p, 720p, and 1080p resolutions. Aspect ratios include 16:9 (landscape/widescreen), 9:16 (vertical/Reels/Shorts), and 1:1 (square/Instagram). Video durations of 5 or 10 seconds are available.",
          },
        },
        {
          "@type": "Question",
          name: "Can I use AI-generated videos commercially?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. All videos generated on Scenith come with full commercial rights. You can use them in YouTube videos, paid ads, client projects, social media campaigns, and any other commercial context without attribution or licensing fees.",
          },
        },
      ],
    },
  ],
};

// ─── Static Data ──────────────────────────────────────────────────────────────

const VIDEO_MODELS = [
  {
    id: "kling-v2.6-pro",
    name: "Kling 2.6 Pro",
    maker: "Kuaishou",
    badge: "🏆 Best Quality",
    badgeColor: "gold",
    description: "The gold standard for cinematic AI video. Exceptional character consistency, photorealistic motion, and prompt adherence. Preferred by professional filmmakers and brand studios.",
    strengths: ["Character consistency", "Photorealism", "Long-range motion coherence", "Prompt accuracy"],
    bestFor: "Brand films, product showcases, narrative storytelling",
    cr: 64,
    resolution: "Up to 1080p",
    duration: "5s / 10s",
  },
  {
    id: "veo3.1",
    name: "Veo 3.1",
    maker: "Google DeepMind",
    badge: "🎬 Most Cinematic",
    badgeColor: "blue",
    description: "Google's flagship video model — trained on the world's largest multimodal dataset. Stunning dynamic range, natural physics simulation, and cinematic framing that rivals professional production.",
    strengths: ["Dynamic range", "Physics simulation", "Atmospheric effects", "Cinematic composition"],
    bestFor: "Documentary style, nature scenes, dramatic cinematic shots",
    cr: 186,
    resolution: "Up to 1080p",
    duration: "5s / 10s",
  },
  {
    id: "veo3.1-fast",
    name: "Veo 3.1 Fast",
    maker: "Google DeepMind",
    badge: "⚡ Best Value",
    badgeColor: "green",
    description: "The speed-optimised version of Veo 3.1. Same Google DeepMind architecture, faster generation, lower credit cost. Ideal for rapid iteration and content pipelines where volume matters.",
    strengths: ["Rapid generation", "Google quality at lower cost", "Reliable consistency", "Great for iteration"],
    bestFor: "Content creators, social media pipelines, rapid prototyping",
    cr: 92,
    resolution: "Up to 720p",
    duration: "5s / 10s",
  },
  {
    id: "kling-v2.5-turbo",
    name: "Kling 2.5 Turbo",
    maker: "Kuaishou",
    badge: "🚀 Fast & Sharp",
    badgeColor: "purple",
    description: "The turbo-speed variant of Kling's acclaimed architecture. Generates in roughly half the time of 2.6 Pro with minimal quality loss — perfect for creators who need volume without sacrificing visual identity.",
    strengths: ["Speed", "Sharp detail", "Consistent style", "Great mid-range option"],
    bestFor: "YouTube creators, Reels production, rapid content iteration",
    cr: 64,
    resolution: "Up to 720p",
    duration: "5s / 10s",
  },
  {
    id: "wan2.5",
    name: "Wan 2.5",
    maker: "Alibaba DAMO",
    badge: "💚 Free Tier",
    badgeColor: "sage",
    description: "Alibaba's open-architecture video model — the most accessible entry point to AI video. Produces surprisingly detailed results with rich colour grading. The default model for free-tier users and high-volume pipelines.",
    strengths: ["Free tier access", "Rich colour", "Good motion flow", "High volume generation"],
    bestFor: "Free users, exploratory prompting, budget content pipelines",
    cr: 46,
    resolution: "Up to 720p",
    duration: "5s / 10s",
  },
  {
    id: "grok-imagine",
    name: "Grok Imagine",
    maker: "xAI",
    badge: "🎵 Built-in Audio",
    badgeColor: "coral",
    description: "The only model in the lineup that includes AI-generated audio. Built on xAI's multimodal architecture, Grok Imagine generates visuals and a synchronised ambient audio track simultaneously — no separate audio workflow needed.",
    strengths: ["Built-in AI audio", "Multimodal generation", "Unique audio-visual sync", "Distinctive visual style"],
    bestFor: "Social content with sound, ambient videos, mood pieces",
    cr: 47,
    resolution: "Up to 720p",
    duration: "5s",
  },
];

const USE_CASES = [
  {
    icon: "📱",
    title: "Short-Form Social Content",
    headline: "Reels, TikToks & YouTube Shorts",
    desc: "The algorithm rewards freshness. With AI video, you can generate 10 unique short-form clips in the time it would take to shoot one. Text-to-video lets you visualise concepts, trends, and hooks that would be impossible to film — and 9:16 aspect ratio output is ready to upload directly.",
    metric: "9:16 ready",
    metricSub: "for Reels & Shorts",
  },
  {
    icon: "🛍️",
    title: "E-commerce & Product Video",
    headline: "No Production Studio Needed",
    desc: "Upload your product image and describe the scene — the AI animates it into a cinematic product video with motion, lighting, and atmosphere. What used to cost $3,000–$15,000 per product video now costs credits. Full commercial rights, no watermarks.",
    metric: "$0",
    metricSub: "production overhead",
  },
  {
    icon: "🎬",
    title: "YouTube Long-Form Content",
    headline: "B-Roll, Intros & Visualisations",
    desc: "Every documentary-style YouTube video needs B-roll. AI video gives you unlimited B-roll on demand — aerial drone shots, nature sequences, abstract visualisations, sci-fi environments — synced to your narrative without ever leaving your desk.",
    metric: "Unlimited",
    metricSub: "B-roll on demand",
  },
  {
    icon: "📣",
    title: "Advertising & Brand Campaigns",
    headline: "A/B Test Creatives at Scale",
    desc: "Generate 5 variations of the same ad concept in 10 minutes. Test a product floating in water vs. surrounded by light vs. in a dramatic environment. The creative iteration speed of AI video has fundamentally changed how performance marketing teams work.",
    metric: "5 variants",
    metricSub: "in under 10 minutes",
  },
  {
    icon: "🎮",
    title: "Game Development & Indie Studios",
    headline: "Cutscenes, Trailers & Mood Boards",
    desc: "Generate cinematic concept trailers for pitching publishers, create atmospheric mood boards for art direction, prototype cutscene sequences before committing to expensive animation — all from text prompts that describe your game's visual language.",
    metric: "Prototype-to-pitch",
    metricSub: "in minutes not months",
  },
  {
    icon: "🏢",
    title: "Corporate & Internal Comms",
    headline: "Training Videos & Presentations",
    desc: "Replace static PowerPoint slides with animated video sequences. Generate explainer videos for onboarding, product demos, and company announcements — professional-quality output that communicates motion, energy, and credibility without a video production budget.",
    metric: "Full commercial",
    metricSub: "rights included",
  },
];

const PROMPT_GALLERY = [
  {
    category: "🌆 Cityscape",
    prompt: "Slow cinematic aerial descent into a neon-lit Tokyo alley at midnight, rain-soaked ground reflecting pink and purple signs, pedestrians with translucent umbrellas, ultra-detailed 4K",
    model: "Veo 3.1",
    mood: "Cinematic · Atmospheric",
  },
  {
    category: "🌋 Nature Drama",
    prompt: "Wide angle shot of an active volcano erupting at night, massive lava rivers flowing down dark mountainside against pitch-black sky, slow motion, dramatic lighting, photorealistic",
    model: "Kling 2.6 Pro",
    mood: "Epic · Photorealistic",
  },
  {
    category: "🛍️ Product",
    prompt: "Cinematic 360-degree rotation of a luxury perfume bottle on a black reflective surface, smoke wisps curling around the base, dramatic single spotlight, ultra-detailed product photography",
    model: "Kling 2.5 Turbo",
    mood: "Luxury · Commercial",
  },
  {
    category: "🌊 Ocean",
    prompt: "Drone flying low over a bioluminescent ocean bay at night, every wave crashing in electric blue light, Milky Way reflected in the water surface, ethereal and cinematic",
    model: "Veo 3.1 Fast",
    mood: "Magical · Wide-angle",
  },
  {
    category: "🎵 Ambient",
    prompt: "Abstract fluid simulation of deep indigo and gold ink dissolving in slow motion, swirling vortex patterns forming and dissolving, dark background, macro lens, hypnotic atmosphere",
    model: "Grok Imagine",
    mood: "Abstract · Audio-visual",
  },
  {
    category: "🏙️ Urban",
    prompt: "Epic rooftop time-lapse from golden hour to midnight, clouds racing in fast motion, city lights switching on across the skyline, traffic trails below, 4K cinematic",
    model: "Wan 2.5",
    mood: "Time-lapse · Urban",
  },
];

const COMPARISON_ROWS = [
  { feature: "Time to first video", traditional: "Days (pre-production + shoot)", ai: "30–120 seconds" },
  { feature: "Cost per 5-second clip", traditional: "$500–$5,000+ with crew", ai: "Fraction of a cent with credits" },
  { feature: "Location requirements", traditional: "Physical location or studio", ai: "Any environment imaginable" },
  { feature: "Iteration speed", traditional: "Reshoot + re-edit cycle", ai: "New generation in 60 seconds" },
  { feature: "Style range", traditional: "Limited by location & budget", ai: "Underwater to outer space" },
  { feature: "Resolution", traditional: "Depends on camera equipment", ai: "Up to 1080p output" },
  { feature: "Commercial license", traditional: "Location releases, talent contracts", ai: "Included by default" },
  { feature: "24/7 availability", traditional: "Crew scheduling required", ai: "Generate any time, anywhere" },
];

const ASPECT_RATIOS = [
  {
    ratio: "16:9",
    icon: "🖥️",
    name: "Widescreen / Landscape",
    useCases: ["YouTube", "LinkedIn", "Website hero video", "TV commercials", "Desktop ads"],
    desc: "The classic cinematic format. Best for documentary, product showcase, and any content where horizontal composition matters. YouTube's native format.",
  },
  {
    ratio: "9:16",
    icon: "📱",
    name: "Vertical / Portrait",
    useCases: ["Instagram Reels", "TikTok", "YouTube Shorts", "Stories", "Mobile ads"],
    desc: "The dominant format for social media in 2026. Full-screen immersive experience on mobile. Required for Reels and TikTok organic reach.",
  },
  {
    ratio: "1:1",
    icon: "⬛",
    name: "Square",
    useCases: ["Instagram feed", "Twitter/X", "Facebook feed", "Product grids", "LinkedIn"],
    desc: "Versatile cross-platform format. Performs well in both mobile and desktop feeds. Ideal when you need one video to work across multiple platforms.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AIVideoCreatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="avc-page">

        {/* ── Breadcrumb ── */}
        <nav className="avc-breadcrumb" aria-label="Breadcrumb">
          <ol>
            <li><Link href="/">Home</Link></li>
            <li aria-hidden>›</li>
            <li><Link href="/tools">Tools</Link></li>
            <li aria-hidden>›</li>
            <li aria-current="page">AI Video Creator</li>
          </ol>
        </nav>

        {/* ══════════════════════════════════════
            HERO
        ══════════════════════════════════════ */}
        <section className="avc-hero">
          {/* Animated film strip background */}
          <div className="avc-filmstrip" aria-hidden>
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="avc-film-frame" style={{ animationDelay: `${i * 0.3}s` }} />
            ))}
          </div>

          <div className="avc-hero-particles" aria-hidden>
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="avc-particle"
                style={{
                  left: `${(i * 7 + 5) % 100}%`,
                  animationDelay: `${i * 0.4}s`,
                  animationDuration: `${3 + (i % 4)}s`,
                }} />
            ))}
          </div>

          <div className="avc-hero-inner">
            <div className="avc-hero-eyebrow">
              <span className="avc-live-dot" />
              <span>6 AI Models · 2026 · No Watermarks · Commercial Use</span>
            </div>

            <h1 className="avc-hero-h1">
              <span className="avc-hero-line1">The AI Video Creator</span>
              <span className="avc-hero-line2">
                That Makes <em>Cinematographers</em>
              </span>
              <span className="avc-hero-line3">Out of Everyone</span>
            </h1>

            <p className="avc-hero-desc">
              Type a scene. Hit generate. Watch it become a cinematic video clip in under
              two minutes. Powered by Kling 2.6, Veo 3.1, Wan 2.5, and Grok Imagine —
              the world's best AI video models, all in one place. Text-to-video.
              Image-to-video. Up to 1080p. Instant MP4.
            </p>

            {/* ── Cinematic preview frames ── */}
            <div className="avc-preview-reel" aria-hidden>
              {[
                { label: "Neon Tokyo", color: "#ff00aa" },
                { label: "Volcano", color: "#ff5500" },
                { label: "Ocean Bay", color: "#00aaff" },
                { label: "Product Shot", color: "#aa00ff" },
                { label: "City Timelapse", color: "#ffaa00" },
              ].map((frame, i) => (
                <div key={i} className="avc-reel-frame"
                  style={{ "--frame-color": frame.color, animationDelay: `${i * 0.15}s` } as React.CSSProperties}>
                  <div className="avc-reel-label">{frame.label}</div>
                  <div className="avc-reel-overlay" />
                </div>
              ))}
            </div>

            {/* ── HERO CTA ── */}
            <div className="avc-hero-cta-wrap">
              <a
                href="https://scenith.in/create-ai-content?tab=video&utm_source=tool-page&utm_medium=ai-video-creator&utm_campaign=hero-cta-2026"
                className="avc-cta-primary"
              >
                <span className="avc-cta-play">▶</span>
                <span className="avc-cta-body">
                  Create Your First AI Video Free
                  <small>50 credits on signup · No card · Instant MP4</small>
                </span>
                <span className="avc-cta-chevron">→</span>
              </a>

              <div className="avc-hero-trust">
                <div className="avc-trust-item">
                  <strong>4.9★</strong>
                  <span>from 860+ creators</span>
                </div>
                <div className="avc-trust-divider" />
                <div className="avc-trust-item">
                  <strong>6</strong>
                  <span>AI video models</span>
                </div>
                <div className="avc-trust-divider" />
                <div className="avc-trust-item">
                  <strong>1080p</strong>
                  <span>max resolution</span>
                </div>
              </div>
            </div>

            {/* ── Model pill strip ── */}
            <div className="avc-model-pills">
              {["Kling 2.6 Pro", "Veo 3.1", "Veo 3.1 Fast", "Kling 2.5 Turbo", "Wan 2.5", "Grok Imagine 🎵"].map((m) => (
                <span key={m} className="avc-model-pill">{m}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            MODELS GRID
        ══════════════════════════════════════ */}
        <section className="avc-section avc-models-section">
          <div className="avc-section-inner">
            <div className="avc-section-label">Video Models</div>
            <h2 className="avc-section-title">
              Six World-Class AI Video<br />Models in One Generator
            </h2>
            <p className="avc-section-sub">
              No other AI video tool in 2026 gives you this many models under a single
              login. Each one has a distinct strength — pick the right tool for the job,
              not just the only tool you have access to.
            </p>

            <div className="avc-models-grid">
              {VIDEO_MODELS.map((model) => (
                <article key={model.id} className={`avc-model-card avc-model-${model.badgeColor}`}>
                  <div className="avc-model-card-top">
                    <div className="avc-model-names">
                      <span className="avc-model-name">{model.name}</span>
                      <span className="avc-model-maker">{model.maker}</span>
                    </div>
                    <span className={`avc-model-badge avc-badge-${model.badgeColor}`}>{model.badge}</span>
                  </div>

                  <p className="avc-model-desc">{model.description}</p>

                  <div className="avc-model-strengths">
                    {model.strengths.map((s) => (
                      <span key={s} className="avc-strength-tag">✓ {s}</span>
                    ))}
                  </div>

                  <div className="avc-model-meta">
                    <div className="avc-model-meta-row">
                      <span className="avc-meta-label">Best for</span>
                      <span className="avc-meta-value">{model.bestFor}</span>
                    </div>
                    <div className="avc-model-meta-row">
                      <span className="avc-meta-label">Resolution</span>
                      <span className="avc-meta-value">{model.resolution}</span>
                    </div>
                    <div className="avc-model-meta-row">
                      <span className="avc-meta-label">Duration</span>
                      <span className="avc-meta-value">{model.duration}</span>
                    </div>
                    <div className="avc-model-meta-row">
                      <span className="avc-meta-label">Credit cost</span>
                      <span className="avc-meta-cost">{model.cr} cr / clip</span>
                    </div>
                  </div>

                  <a
                    href={`https://scenith.in/create-ai-content?tab=video&model=${model.id}&utm_source=tool-page&utm_medium=ai-video-creator&utm_campaign=model-card-${model.id}`}
                    className="avc-model-try"
                  >
                    Try {model.name} →
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            HOW IT WORKS
        ══════════════════════════════════════ */}
        <section className="avc-section avc-how-section">
          <div className="avc-section-inner">
            <div className="avc-section-label">How It Works</div>
            <h2 className="avc-section-title">
              From Idea to MP4<br />in Four Steps
            </h2>

            <div className="avc-steps-grid">
              {[
                {
                  num: "01",
                  icon: "✍️",
                  title: "Write your prompt",
                  desc: "Describe the video you want in plain language. Be specific about lighting, motion, environment, mood, and camera movement. The more cinematic your language, the more cinematic the output. Use our built-in prompt suggestions if you need a starting point.",
                },
                {
                  num: "02",
                  icon: "🎬",
                  title: "Choose a model & settings",
                  desc: "Select from 6 AI video models. Choose 5 or 10 seconds. Pick your aspect ratio — 16:9 for YouTube, 9:16 for Reels, 1:1 for Instagram. Select resolution. Enable AI audio if using Grok Imagine. Each model has a distinct visual character — try a few.",
                },
                {
                  num: "03",
                  icon: "⚙️",
                  title: "Generate & wait 30–120 sec",
                  desc: "Hit Generate. The job runs in the background — typically 30–120 seconds depending on model and duration. You can stay on the page to watch the status card update, or close the tab and come back. The job runs to completion regardless.",
                },
                {
                  num: "04",
                  icon: "📥",
                  title: "Download your MP4",
                  desc: "Your video is ready. Play it back in the browser. Download directly as MP4. Full commercial rights included — no watermarks, no attribution required. Drop it straight into your video editor, social scheduler, or ad platform.",
                },
              ].map((step) => (
                <div key={step.num} className="avc-step">
                  <div className="avc-step-header">
                    <span className="avc-step-num">{step.num}</span>
                    <span className="avc-step-icon">{step.icon}</span>
                  </div>
                  <h3 className="avc-step-title">{step.title}</h3>
                  <p className="avc-step-desc">{step.desc}</p>
                </div>
              ))}
            </div>

            <div className="avc-how-cta">
              <a
                href="https://scenith.in/create-ai-content?tab=video&utm_source=tool-page&utm_medium=ai-video-creator&utm_campaign=how-it-works-cta"
                className="avc-cta-primary"
              >
                <span className="avc-cta-play">▶</span>
                <span className="avc-cta-body">
                  Start Creating Now — It's Free
                  <small>50 credits on signup · No card required</small>
                </span>
                <span className="avc-cta-chevron">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            PROMPT GALLERY
        ══════════════════════════════════════ */}
        <section className="avc-section avc-gallery-section">
          <div className="avc-section-inner">
            <div className="avc-section-label">Prompt Gallery</div>
            <h2 className="avc-section-title">
              Prompts That Generate<br />Cinematic Results
            </h2>
            <p className="avc-section-sub">
              Copy any of these directly into the generator. Each is engineered for
              its recommended model to maximise visual quality — the right prompt with
              the wrong model still underdelivers.
            </p>

            <div className="avc-gallery-grid">
              {PROMPT_GALLERY.map((item) => (
                <div key={item.category} className="avc-gallery-card">
                  <div className="avc-gallery-cat">{item.category}</div>
                  <div className="avc-gallery-screen">
                    <div className="avc-screen-lines">
                      {Array.from({ length: 8 }).map((_, i) => (
                        <div key={i} className="avc-screen-line"
                          style={{ width: `${55 + (i * 17) % 40}%`, animationDelay: `${i * 0.1}s` }} />
                      ))}
                    </div>
                    <div className="avc-screen-play">▶</div>
                  </div>
                  <blockquote className="avc-gallery-prompt">"{item.prompt}"</blockquote>
                  <div className="avc-gallery-meta">
                    <span className="avc-gallery-model">🎬 {item.model}</span>
                    <span className="avc-gallery-mood">🎭 {item.mood}</span>
                  </div>
                  <a
                    href={`https://scenith.in/create-ai-content?tab=video&utm_source=tool-page&utm_medium=ai-video-creator&utm_campaign=gallery-prompt&text=${encodeURIComponent(item.prompt)}`}
                    className="avc-gallery-try"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Generate this video →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            USE CASES
        ══════════════════════════════════════ */}
        <section className="avc-section avc-usecases-section">
          <div className="avc-section-inner">
            <div className="avc-section-label">Use Cases</div>
            <h2 className="avc-section-title">
              Who's Using AI Video Creation<br />— and What They're Making
            </h2>
            <p className="avc-section-sub">
              AI video isn't a future trend in 2026 — it's current production reality
              for these industries. Here's how each one applies it.
            </p>
            <div className="avc-uc-grid">
              {USE_CASES.map((uc) => (
                <article key={uc.title} className="avc-uc-card">
                  <div className="avc-uc-top">
                    <span className="avc-uc-icon">{uc.icon}</span>
                    <div>
                      <div className="avc-uc-category">{uc.title}</div>
                      <h3 className="avc-uc-title">{uc.headline}</h3>
                    </div>
                  </div>
                  <p className="avc-uc-desc">{uc.desc}</p>
                  <div className="avc-uc-metric">
                    <span className="avc-metric-num">{uc.metric}</span>
                    <span className="avc-metric-label">{uc.metricSub}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            ASPECT RATIO SECTION
        ══════════════════════════════════════ */}
        <section className="avc-section avc-aspect-section">
          <div className="avc-section-inner">
            <div className="avc-section-label">Format Guide</div>
            <h2 className="avc-section-title">
              Which Aspect Ratio for Which Platform?
            </h2>
            <p className="avc-section-sub">
              Getting the aspect ratio wrong means cropped content, lower reach, and
              wasted generation credits. Here's the definitive 2026 guide.
            </p>

            <div className="avc-aspect-grid">
              {ASPECT_RATIOS.map((ar) => (
                <div key={ar.ratio} className="avc-aspect-card">
                  <div className="avc-aspect-preview">
                    <div className={`avc-aspect-box avc-aspect-${ar.ratio.replace(":", "x")}`} aria-hidden />
                  </div>
                  <div className="avc-aspect-info">
                    <div className="avc-aspect-ratio-label">
                      <span className="avc-aspect-icon">{ar.icon}</span>
                      <span className="avc-aspect-ratio">{ar.ratio}</span>
                    </div>
                    <h3 className="avc-aspect-name">{ar.name}</h3>
                    <p className="avc-aspect-desc">{ar.desc}</p>
                    <div className="avc-aspect-usecases">
                      {ar.useCases.map((u) => (
                        <span key={u} className="avc-aspect-tag">{u}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            MID-PAGE CTA
        ══════════════════════════════════════ */}
        <section className="avc-cta-block">
          <div className="avc-cta-block-film" aria-hidden>
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="avc-film-strip-bar"
                style={{ animationDelay: `${i * 0.8}s` }} />
            ))}
          </div>
          <div className="avc-cta-block-inner">
            <div className="avc-cta-block-overline">🎬 No editing software. No crew. No studio.</div>
            <h2 className="avc-cta-block-title">
              Your Imagination Is the<br />Only Limit Now
            </h2>
            <p className="avc-cta-block-sub">
              Every video prompt you've been saving in your notes because "you don't
              have the equipment" — you can generate them right now. Alien landscapes.
              Underwater product shots. Slow-motion storm sequences. They're all
              30–120 seconds away.
            </p>
            <a
              href="https://scenith.in/create-ai-content?tab=video&utm_source=tool-page&utm_medium=ai-video-creator&utm_campaign=mid-page-cta-block"
              className="avc-cta-primary avc-cta-large"
            >
              <span className="avc-cta-play">▶</span>
              <span className="avc-cta-body">
                Generate Your First AI Video Free
                <small>50 credits on signup · 6 models · Up to 1080p</small>
              </span>
              <span className="avc-cta-chevron">→</span>
            </a>
            <div className="avc-cta-block-checks">
              <span>✓ No credit card</span>
              <span>✓ No watermark</span>
              <span>✓ Commercial use</span>
              <span>✓ MP4 download</span>
              <span>✓ 6 AI models</span>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            COMPARISON
        ══════════════════════════════════════ */}
        <section className="avc-section avc-compare-section">
          <div className="avc-section-inner">
            <div className="avc-section-label">AI vs Traditional Video</div>
            <h2 className="avc-section-title">
              Why 2026 Is the Year Everyone<br />Switched to AI Video Production
            </h2>

            <div className="avc-compare-wrap">
              <div className="avc-compare-table">
                <div className="avc-compare-head">
                  <div>Comparison</div>
                  <div>🎥 Traditional Production</div>
                  <div>🤖 Scenith AI Video</div>
                </div>
                {COMPARISON_ROWS.map((row) => (
                  <div key={row.feature} className="avc-compare-row">
                    <div className="avc-compare-feat">{row.feature}</div>
                    <div className="avc-compare-old">{row.traditional}</div>
                    <div className="avc-compare-new">{row.ai}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            DEEP EDITORIAL
        ══════════════════════════════════════ */}
        <section className="avc-section avc-editorial-section">
          <div className="avc-section-inner avc-editorial-inner">
            <article className="avc-article">

              <h2>The Complete Guide to AI Video Creation in 2026</h2>

              <p>
                We are two years into what will eventually be recognised as the most
                significant shift in video production since the transition from film to
                digital. AI video generation has gone from a parlour trick that produced
                six-second clips with melting fingers to a production-grade tool being
                used by brand studios, independent filmmakers, and YouTube creators with
                millions of subscribers. This guide is your comprehensive map to what's
                actually possible in 2026, what the limitations still are, and how to
                get the most out of AI video creation for your specific use case.
              </p>

              <h3>How AI Video Generation Actually Works in 2026</h3>

              <p>
                The models powering AI video generation today — Veo 3.1, Kling 2.6,
                Wan 2.5, and others — belong to a class called diffusion transformer
                video models. Understanding the basics of how they work isn't just
                academic: it directly affects how you write prompts and what results
                you can realistically expect.
              </p>

              <p>
                The core process works like this: the model is trained on massive
                datasets of video-caption pairs. During training, it learns the
                statistical relationships between written descriptions and visual motion
                patterns. When you type "slow aerial drone descending into a foggy
                forest at dawn," the model generates a video frame-by-frame, with each
                frame conditioned on both your text prompt and the previous frames,
                maintaining coherence across the temporal dimension — which is what
                makes it video rather than just a sequence of images.
              </p>

              <p>
                The temporal coherence problem — keeping the same object looking the
                same across 150+ frames — is what took years to solve and is still the
                primary quality differentiator between models. Kling 2.6 Pro's most
                celebrated feature is its temporal consistency for characters and
                objects: a bottle that appears in frame one still looks like the same
                bottle in frame 150. Veo 3.1's strength is different — it excels at
                physical world simulation, meaning liquids behave like liquids, smoke
                disperses correctly, and fabric has appropriate weight and movement.
                These are distinct capabilities, which is why choosing the right model
                matters so much.
              </p>

              <h3>Text-to-Video vs Image-to-Video: Choosing the Right Mode</h3>

              <p>
                Scenith's AI video creator supports both text-to-video and
                image-to-video generation. These aren't just two paths to the same
                destination — they solve fundamentally different creative problems.
              </p>

              <p>
                <strong>Text-to-video</strong> is the creative mode. You describe a
                scene from scratch — environment, lighting, camera movement, subject,
                action, mood — and the model builds it entirely from language. This is
                where you access scenes that literally cannot exist: alien planets,
                underwater cities, microscopic worlds, environments that would cost
                millions to build practically. The creative ceiling is your prompt
                quality, and the prompt is everything.
              </p>

              <p>
                <strong>Image-to-video</strong> is the production mode. You upload an
                existing image — your product, a generated image, a photograph — and
                the model animates it. The visual identity is anchored by the image,
                and your prompt describes the motion. This is the mode that's
                transforming e-commerce: a product photographer shoots still images,
                the AI animates them into video with atmospheric motion, and the brand
                has a video ad without ever hiring a video production crew. The quality
                ceiling in this mode is your source image quality — start with a
                high-resolution, well-lit image.
              </p>

              <p>
                One powerful workflow that's emerged in 2026 is the generate-then-animate
                pipeline: generate an image with Scenith's AI image creator, then feed
                that image into the video generator for image-to-video. This gives you
                complete control over the visual style of the starting frame before
                committing to video generation — a single-platform workflow that
                previously required three different tools and three different accounts.
              </p>

              <h3>The Art of Writing AI Video Prompts</h3>

              <p>
                If there is one skill that separates creators who get stunning results
                from AI video from those who get mediocre output, it is prompt craft.
                AI video prompting is a distinct discipline from image prompting, and
                both are distinct from language model prompting. The unique dimension
                of video prompting is motion — you are not just describing what something
                looks like, you are describing how it moves through time.
              </p>

              <p>
                <strong>Camera language is the most underused tool in video prompting.</strong>
                Cinematographers have a vocabulary for motion that AI video models have
                been trained to understand. Use it. "Slow push-in on a product" tells
                the model to generate a gradual zoom that creates intimacy. "Sweeping
                crane shot" generates ascending, widening views. "Tight tracking shot"
                generates motion that follows a subject closely. "Slow rack focus from
                foreground to background" generates a depth shift. These terms directly
                influence the camera movement the model generates.
              </p>

              <p>
                <strong>Physics and material language improves realism.</strong> Models
                like Veo 3.1 are trained to understand physical properties — but you
                have to invoke them. "Water cascading over polished marble" gets a
                better result than "water on stone" because the material specificity
                triggers more accurate physics simulation. "Smoke spiraling slowly
                upward in still air" is more specific than "smoke" and produces more
                realistic particle behaviour.
              </p>

              <p>
                <strong>Temporal markers set the motion pace.</strong> "Slow motion,"
                "time-lapse," "real-time," and "fast cut" are temporal instructions
                that directly affect how the model generates motion. A volcano eruption
                in "slow motion dramatic" generates very differently from the same scene
                in "real-time." For product videos, "gentle drift" or "subtle float"
                creates the kind of understated elegance that high-end brands pay
                production companies thousands to achieve.
              </p>

              <p>
                <strong>Lighting is half the mood.</strong> "Golden hour" vs "overcast
                diffused light" vs "dramatic single spotlight from above" vs
                "bioluminescent glow" — each of these produces a fundamentally different
                emotional register even with identical subject matter. When you're
                generating product videos, the lighting prompt is often more important
                than the description of the product itself. "Luxury perfume bottle,
                dramatic underlit spotlight, dark smoke atmosphere" will outperform
                "a perfume bottle" every time.
              </p>

              <h3>Resolution, Duration, and File Size: What to Expect</h3>

              <p>
                Understanding the technical output specifications of AI video generation
                helps you plan your production workflow properly — and prevents
                unpleasant surprises when you go to publish.
              </p>

              <p>
                Scenith's video generator produces MP4 files encoded in H.264, which
                is the universal codec accepted by every platform from YouTube to
                Instagram to LinkedIn. You don't need to transcode anything. 480p output
                is approximately 5–15MB for a 5-second clip. 720p runs 15–35MB. 1080p
                clips are typically 30–80MB depending on scene complexity (high-motion
                scenes like storms or waterfalls encode at higher bitrates than
                simple product shots).
              </p>

              <p>
                For social media, 480p or 720p is often sufficient — especially for
                Reels and TikTok, where the platform re-encodes everything anyway and
                the UX is heavily mobile-first. For YouTube or website hero video where
                people are watching on large screens, 1080p is the correct choice.
                For client deliverables where quality is scrutinised, always generate
                at the highest available resolution for your chosen model.
              </p>

              <p>
                Duration choice — 5 seconds vs 10 seconds — depends on the use case,
                not personal preference. 5-second clips are more controllable: the
                model maintains temporal coherence more easily, motion doesn't have
                time to drift, and the output is more predictable. 10-second clips
                give you more storytelling arc but have higher variance — the second
                half of the video sometimes deviates from the first in ways that 5-second
                clips don't. For product videos where consistency matters, start with
                5 seconds. For narrative content where you need a story beat, use 10.
              </p>

              <h3>AI Video for YouTube: The Content Creator's Playbook in 2026</h3>

              <p>
                The most transformative application of AI video for individual creators
                in 2026 is in the YouTube ecosystem — specifically, the combination of
                AI video for B-roll and visual illustration with human voiceover or
                AI narration. This model is producing some of the highest-performing
                channels in the educational, documentary, and explainer space.
              </p>

              <p>
                The workflow looks like this: you write a script, record your narration
                (or generate it with AI voice), and then generate AI video clips to
                match each section of the script. Instead of finding stock footage
                that's almost what you need, you generate exactly what you need. The
                Amazon rainforest with specific lighting. The inside of a black hole.
                The ancient Roman forum at sunset. Concepts that stock footage libraries
                simply don't contain.
              </p>

              <p>
                For faceless channels — one of the highest-ROI content strategies in
                2026 for creators who don't want to appear on camera — AI video
                essentially means the entire production process can happen on a single
                platform. Script → AI voice → AI video → edit → publish. No camera.
                No location. No crew. No studio. The economics of this have created
                an entirely new category of solo creator who produces content that
                competes visually with channels that have dedicated production teams.
              </p>

              <h3>Ethical Use and Platform Disclosure in 2026</h3>

              <p>
                As AI video generation becomes mainstream production practice, the
                ethical framework around it has matured considerably. Here's the
                current state of responsible use.
              </p>

              <p>
                YouTube's 2025 policy update requires disclosure for "significantly
                altered or synthetic realistic-looking content." In practice, this means
                adding an "AI-generated content" label in your description for videos
                where AI video forms a significant portion of the visual content. This
                is both the ethically correct approach and, counterintuitively, often
                a brand positive — audiences respond well to creators who are transparent
                about their tools, and the "made with AI" label has lost its stigma
                almost entirely among audiences who are themselves using AI tools daily.
              </p>

              <p>
                Instagram, TikTok, and LinkedIn all have similar but less prescriptive
                disclosure expectations. The general principle: if a viewer would be
                meaningfully deceived by not knowing the content is AI-generated, disclose.
                If it's clearly stylised, abstract, or fantastical — lava flows on alien
                planets, microscopic cellular worlds — disclosure is courteous but not
                typically required.
              </p>

              <p>
                For commercial advertising, disclosure requirements vary significantly
                by jurisdiction and platform. If you're running AI-generated video as
                paid advertising, consult your platform's current advertising policies,
                as these have been updated multiple times throughout 2025–2026 and
                continue to evolve.
              </p>

              <h3>What AI Video Still Cannot Do in 2026 (Being Honest)</h3>

              <p>
                Every credible guide to AI video generation should acknowledge its
                genuine limitations — not to diminish the technology, but to set
                accurate expectations that lead to better creative decisions.
              </p>

              <p>
                <strong>Consistent characters across multiple clips:</strong> Current
                AI video models generate clips independently. If you generate 10 clips
                for a narrative video, the "main character" will look different in each
                clip unless you use image-to-video with the same source image. Building
                a narrative with consistent characters across a long video remains
                challenging and requires significant prompt engineering.
              </p>

              <p>
                <strong>Complex precise actions:</strong> Models handle broad motion
                (flying, running, waves) much better than precise actions (someone
                typing on a specific keyboard, hands operating a specific tool). Fine
                motor actions often degrade in quality.
              </p>

              <p>
                <strong>Text in video:</strong> AI video models still struggle to
                generate legible on-screen text reliably. If your video requires text
                overlays (titles, captions, labels), add these in your video editor
                post-generation rather than attempting to prompt for them.
              </p>

              <p>
                <strong>Brand-specific assets:</strong> You cannot reliably include
                specific logos, branded elements, or proprietary visual identities in
                AI-generated video. Brand-consistent generation requires image-to-video
                with carefully crafted source images.
              </p>

              <h3>Pricing and the Credit Economy: Is AI Video Affordable?</h3>

              <p>
                The credit-based pricing model that Scenith uses reflects the compute
                cost of running these very large video generation models — which is
                significant. A single 10-second 1080p Veo 3.1 generation consumes
                considerable GPU time on a data centre cluster. Understanding the credit
                economy helps you plan your production pipeline efficiently.
              </p>

              <p>
                The 50 free credits you get on signup with Scenith are enough for
                approximately one free video with the Wan 2.5 model (46 credits for a
                5-second clip). This is intentional — it gives you a genuine, complete
                experience of the tool before any payment decision. The Creator Lite
                plan at $9/month gives you 300 credits, covering approximately 4–6
                clips with premium models or more with budget models.
              </p>

              <p>
                For high-volume production pipelines — content agencies, social media
                teams generating dozens of clips per week — the cost-per-video of AI
                generation is still dramatically lower than any alternative production
                method. A single day of professional video production in a mid-size
                city costs more than a year of premium Scenith credits. The economic
                argument for AI video at scale is essentially unassailable in 2026.
              </p>

            </article>
          </div>
        </section>

        {/* ══════════════════════════════════════
            PRICING
        ══════════════════════════════════════ */}
        <section className="avc-section avc-pricing-section">
          <div className="avc-section-inner">
            <div className="avc-section-label">Pricing</div>
            <h2 className="avc-section-title">One Credit Balance.<br />All Six Models.</h2>
            <div className="avc-pricing-grid">
              <div className="avc-pricing-card avc-pricing-free">
                <div className="avc-plan-tag">Free Forever</div>
                <div className="avc-plan-price">$0</div>
                <div className="avc-plan-sub">on signup</div>
                <ul className="avc-plan-features">
                  <li>✓ 50 free credits</li>
                  <li>✓ Wan 2.5 model</li>
                  <li>✓ 480p resolution</li>
                  <li>✓ 5s & 10s clips</li>
                  <li>✓ MP4 download</li>
                  <li>✓ Commercial use</li>
                  <li>✗ Premium models</li>
                  <li>✗ 1080p resolution</li>
                </ul>
                <a
                  href="https://scenith.in/create-ai-content?tab=video&utm_source=tool-page&utm_medium=ai-video-creator&utm_campaign=pricing-free"
                  className="avc-plan-btn avc-plan-btn-free"
                >
                  Start Free →
                </a>
              </div>

              <div className="avc-pricing-card avc-pricing-pro">
                <div className="avc-plan-tag avc-plan-tag-pro">⚡ Most Popular</div>
                <div className="avc-plan-price">$9<small>/mo</small></div>
                <div className="avc-plan-sub">Creator Lite</div>
                <ul className="avc-plan-features">
                  <li>✓ 300 credits/month</li>
                  <li>✓ All 6 video models</li>
                  <li>✓ Kling 2.6 Pro</li>
                  <li>✓ Veo 3.1 & Veo 3.1 Fast</li>
                  <li>✓ Grok Imagine (audio)</li>
                  <li>✓ Up to 1080p</li>
                  <li>✓ AI Voice + Image too</li>
                  <li>✓ Priority generation queue</li>
                </ul>
                <a
                  href="https://scenith.in/pricing?utm_source=tool-page&utm_medium=ai-video-creator&utm_campaign=pricing-pro"
                  className="avc-plan-btn avc-plan-btn-pro"
                >
                  Upgrade to Creator Lite →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            FAQ
        ══════════════════════════════════════ */}
        <section className="avc-section avc-faq-section">
          <div className="avc-section-inner">
            <div className="avc-section-label">FAQ</div>
            <h2 className="avc-section-title">Frequently Asked Questions</h2>
            <div className="avc-faq-list">
              {[
                {
                  q: "Is Scenith's AI video creator completely free?",
                  a: "You get 50 free credits on signup with no credit card required. That's enough for one complete AI video with the Wan 2.5 model. Free accounts get one lifetime video with premium models. For ongoing video creation, Creator Lite ($9/month) gives you 300 credits and access to all 6 models including Kling 2.6 Pro and Veo 3.1.",
                },
                {
                  q: "How long does AI video generation take?",
                  a: "Generation time depends on the model and duration. Budget models like Wan 2.5 and Grok Imagine typically complete in 30–60 seconds for a 5-second clip. Premium models like Veo 3.1 and Kling 2.6 Pro take 60–120 seconds. 10-second clips take approximately 1.5–2× longer than 5-second clips. All jobs run in the background — you can close the browser and return.",
                },
                {
                  q: "What's the difference between Kling 2.6 Pro and Veo 3.1?",
                  a: "Kling 2.6 Pro from Kuaishou excels at temporal consistency — objects and characters look the same across all frames — and prompt adherence. It's the best choice for product videos, brand content, and any use case where what you describe needs to precisely match what's generated. Veo 3.1 from Google DeepMind excels at physical world simulation — realistic fluid dynamics, atmospheric effects, natural motion. It's the best choice for nature scenes, environment shots, and cinematic drama.",
                },
                {
                  q: "Can I generate a video from my own image?",
                  a: "Yes. Scenith supports image-to-video generation. Upload any PNG or JPG image as the starting frame, write a prompt describing the motion you want, and the AI animates it. This is particularly powerful for product photos, generated images from Scenith's AI image creator, and any use case where you need the video to start from a specific visual.",
                },
                {
                  q: "Does Grok Imagine really generate audio too?",
                  a: "Yes. Grok Imagine is currently the only model in Scenith's lineup that generates AI audio alongside the video — ambient sounds, atmospheric audio, and tonal elements that match the visual content. The audio is not user-controllable (you can't specify exact sounds) but it consistently produces relevant atmospheric audio. All other models generate silent video, which you can then score with music or AI narration separately.",
                },
                {
                  q: "What aspect ratios are available and which should I choose?",
                  a: "Scenith generates video in 16:9 (widescreen — YouTube, desktop), 9:16 (vertical — Reels, TikTok, Shorts), and 1:1 (square — Instagram, Twitter). Choose 9:16 for any short-form social content where mobile full-screen experience matters. Choose 16:9 for YouTube, website hero video, or any content intended for large screens. Choose 1:1 for cross-platform efficiency when you need one video to work across multiple feeds.",
                },
                {
                  q: "Can I use AI-generated videos in commercial advertisements?",
                  a: "Yes. All videos generated on Scenith include full commercial rights. You can use them in paid social ads (Meta, Google, TikTok), YouTube ads, website video, client deliverables, and any other commercial context. No attribution required, no per-use licensing fees. Platform-specific disclosure requirements for AI content in paid advertising vary — check your specific platform's current ad policies.",
                },
                {
                  q: "Is there a watermark on generated videos?",
                  a: "No. Scenith does not add watermarks to any generated video content. The MP4 you download is clean and production-ready. This applies to both free and paid accounts.",
                },
                {
                  q: "How do I write a good AI video prompt?",
                  a: "The most effective AI video prompts include: (1) a clear subject and action, (2) camera movement (slow push-in, aerial drone, tracking shot), (3) lighting description (golden hour, dramatic single spotlight, bioluminescent glow), (4) physical/material specifics (polished marble, silk fabric, smoke dissolving), and (5) a tempo/mood word (slow motion, dramatic, ethereal, cinematic). Use the prompt gallery on this page as starting points and modify from there.",
                },
                {
                  q: "Can I generate multiple videos in a row?",
                  a: "Yes. You can submit multiple video generation jobs sequentially. Each job is tracked independently with its own status card. Once a job completes and you download the video, you can generate another. There's no enforced waiting period between generations.",
                },
              ].map((faq) => (
                <details key={faq.q} className="avc-faq-item">
                  <summary className="avc-faq-q">{faq.q}</summary>
                  <p className="avc-faq-a">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            RELATED TOOLS
        ══════════════════════════════════════ */}
        <section className="avc-section avc-related-section">
          <div className="avc-section-inner">
            <div className="avc-section-label">Complete the Toolkit</div>
            <h2 className="avc-section-title">Pair Your Video With These</h2>
            <div className="avc-related-grid">
              {[
                {
                  href: "https://scenith.in/create-ai-content?tab=image&utm_source=tool-page&utm_medium=ai-video-creator&utm_campaign=related-image",
                  icon: "🖼️",
                  title: "AI Image Generator",
                  desc: "Generate the perfect starting frame for image-to-video. 7 models including GPT Image, Imagen 4, FLUX, Grok Aurora. Feed directly into the video creator.",
                  tag: "Image-to-video pipeline",
                },
                {
                  href: "https://scenith.in/create-ai-content?tab=voice&utm_source=tool-page&utm_medium=ai-video-creator&utm_campaign=related-voice",
                  icon: "🎙️",
                  title: "AI Voice Generator",
                  desc: "Add professional narration to your AI video. 40+ voices, 15+ languages. Generate your voiceover, drop it on the timeline — done.",
                  tag: "Complete video production",
                },
                {
                  href: "https://scenith.in/tools/female-narration-ai-voice?utm_source=tool-page&utm_medium=ai-video-creator&utm_campaign=related-female-voice",
                  icon: "🎤",
                  title: "Female AI Narration",
                  desc: "20+ natural female AI voices for documentary, educational, and lifestyle video narration. The most-used voiceover style in the Scenith library.",
                  tag: "Most popular voice style",
                },
              ].map((tool) => (
                <a key={tool.title} href={tool.href} className="avc-related-card">
                  <div className="avc-related-icon">{tool.icon}</div>
                  <div className="avc-related-tag">{tool.tag}</div>
                  <h3 className="avc-related-title">{tool.title}</h3>
                  <p className="avc-related-desc">{tool.desc}</p>
                  <span className="avc-related-arrow">→</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            FINAL CTA
        ══════════════════════════════════════ */}
        <section className="avc-final-cta">
          <div className="avc-final-scanline" aria-hidden />
          <div className="avc-final-inner">
            <div className="avc-final-eyebrow">Your first AI video is 120 seconds away</div>
            <h2 className="avc-final-title">
              Stop Imagining It.<br />Generate It.
            </h2>
            <p className="avc-final-sub">
              Every prompt you've had in your head that you couldn't produce because
              you didn't have the equipment, the budget, or the crew — generate it right now.
              Free. No card. No download. No excuses.
            </p>
            <a
              href="https://scenith.in/create-ai-content?tab=video&utm_source=tool-page&utm_medium=ai-video-creator&utm_campaign=final-cta"
              className="avc-cta-primary avc-cta-xl"
            >
              <span className="avc-cta-play">▶</span>
              <span className="avc-cta-body">
                Create Your First AI Video Free
                <small>Scenith · 50 credits on signup · Instant MP4 download</small>
              </span>
              <span className="avc-cta-chevron">→</span>
            </a>
          </div>
        </section>

      </div>
    </>
  );
}