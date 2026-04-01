import type { Metadata } from "next";
import Link from "next/link";
import "./avig.css";

// ─── SEO Metadata ──────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "AI Video Generator for Instagram — Reels, Stories & Posts in Seconds | Scenith",
  description:
    "Create stunning AI-generated Instagram Reels, Stories, and feed videos in seconds. No editing skills required. Powered by Kling 2.6, Veo 3.1, Wan 2.5, and Grok Imagine. Free to start.",
  keywords: [
    "ai video generator for instagram",
    "instagram reels ai generator",
    "ai video maker instagram",
    "create instagram reels with ai",
    "ai reels generator",
    "instagram video ai",
    "ai generated instagram content",
    "free ai video generator instagram",
    "instagram shorts ai",
    "text to video instagram",
    "ai video creator instagram 2026",
    "instagram content creator ai",
    "ai reel maker",
    "generate instagram reels free",
    "ai video tool for influencers",
    "short form ai video generator",
    "vertical video ai generator",
    "9:16 ai video maker",
    "faceless instagram ai",
    "ai content for instagram growth",
  ],
  openGraph: {
    title: "AI Video Generator for Instagram Reels — Scenith",
    description:
      "Generate cinematic Instagram Reels and Stories from a single text prompt. Kling 2.6, Veo 3.1, Grok Imagine — free to start.",
    url: "https://scenith.in/tools/ai-video-generator-for-instagram",
    siteName: "Scenith",
    type: "website",
    images: [
      {
        url: "https://scenith.in/og/ai-video-generator-instagram.jpg",
        width: 1200,
        height: 630,
        alt: "Scenith AI Video Generator for Instagram",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Video Generator for Instagram Reels — Free | Scenith",
    description:
      "Turn any text prompt into a scroll-stopping Instagram Reel in 30–120 seconds. Free to start.",
    images: ["https://scenith.in/og/ai-video-generator-instagram.jpg"],
  },
  alternates: {
    canonical: "https://scenith.in/tools/ai-video-generator-for-instagram",
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

// ─── Structured Data ───────────────────────────────────────────────────────────

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://scenith.in/tools/ai-video-generator-for-instagram",
      url: "https://scenith.in/tools/ai-video-generator-for-instagram",
      name: "AI Video Generator for Instagram — Scenith",
      description:
        "Generate AI-powered Instagram Reels, Stories, and vertical videos from text prompts. Powered by the world's best video AI models.",
      isPartOf: { "@id": "https://scenith.in" },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://scenith.in" },
          { "@type": "ListItem", position: 2, name: "Tools", item: "https://scenith.in/tools" },
          {
            "@type": "ListItem",
            position: 3,
            name: "AI Video Generator for Instagram",
            item: "https://scenith.in/tools/ai-video-generator-for-instagram",
          },
        ],
      },
    },
    {
      "@type": "SoftwareApplication",
      name: "Scenith AI Video Generator for Instagram",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Web",
      url: "https://scenith.in/create-ai-content?tab=video&utm_source=tool-page&utm_medium=ai-video-instagram&utm_campaign=tool-cta",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Free to start — 50 credits on signup",
      },
      featureList: [
        "Text to video for Instagram Reels",
        "9:16 vertical video format",
        "Image to video generation",
        "Multiple AI video models",
        "AI-generated audio",
        "MP4 download",
        "5 and 10 second clips",
        "Commercial rights included",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Can I use AI to generate Instagram Reels?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Scenith's AI video generator lets you create Instagram Reels from a text prompt. Choose the 9:16 vertical format, type your scene description, select an AI model like Kling 2.6 or Veo 3.1, and receive a ready-to-upload MP4 video in 30–120 seconds.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best aspect ratio for AI-generated Instagram videos?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For Instagram Reels and Stories, 9:16 vertical format is optimal — it fills the full mobile screen and gets the maximum real estate in the feed. Scenith's AI video generator supports 9:16, 16:9, and 1:1 aspect ratios.",
          },
        },
        {
          "@type": "Question",
          name: "Does the AI video generator include audio for Instagram?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Grok Imagine always generates AI audio alongside video. Other models like Kling 2.6 and Veo 3.1 support optional AI audio generation — simply enable the audio toggle before generating.",
          },
        },
        {
          "@type": "Question",
          name: "How long can I make an AI Instagram video?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Scenith generates AI videos in 5-second and 10-second clips. For Instagram Reels, 7–15 second clips perform best according to platform analytics. You can combine multiple 10-second AI clips in any video editor to create longer Reels.",
          },
        },
        {
          "@type": "Question",
          name: "Can I turn a photo into an Instagram video with AI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Scenith's image-to-video feature lets you upload any photo and animate it into a cinematic video clip. Upload your product photo, brand image, or portrait — describe the motion you want — and the AI generates a video using your image as the starting frame.",
          },
        },
      ],
    },
    {
      "@type": "HowTo",
      name: "How to Create AI Videos for Instagram",
      description: "Step-by-step guide to generating Instagram Reels with AI using Scenith",
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Open Scenith AI Studio",
          text: "Go to Scenith's AI Content Creator and select the Video tab.",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Select 9:16 vertical format",
          text: "Choose 9:16 aspect ratio for full-screen Instagram Reels and Stories.",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Write your video prompt",
          text: "Describe the scene, mood, and motion you want in the Reel.",
        },
        {
          "@type": "HowToStep",
          position: 4,
          name: "Choose your AI model",
          text: "Select from Kling 2.6 Pro, Veo 3.1, Wan 2.5, or Grok Imagine.",
        },
        {
          "@type": "HowToStep",
          position: 5,
          name: "Download and post",
          text: "Download the MP4 and upload directly to Instagram Reels.",
        },
      ],
    },
  ],
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const CTA_BASE =
  "https://scenith.in/create-ai-content?tab=video&utm_source=tool-page&utm_medium=ai-video-instagram&utm_campaign=tool-cta";

const VIDEO_MODELS = [
  {
    name: "Kling 2.6 Pro",
    badge: "Most Popular",
    icon: "🎬",
    accent: "#ff6b35",
    specialty: "Cinematic motion, photorealistic scenes",
    best: "Lifestyle, travel, fashion Reels",
    speed: "45–90 sec",
    credits: "64 cr / 5s",
    quality: "1080p",
    audio: "Optional",
    description:
      "Kling 2.6 Pro is the go-to model for Instagram creators who want Hollywood-grade motion quality. Its temporal consistency — meaning objects and faces stay coherent through the entire clip — is unmatched at this price point. If you want a Reel that looks like it was shot on a RED cinema camera, Kling is your model.",
  },
  {
    name: "Veo 3.1",
    badge: "Highest Quality",
    icon: "⭐",
    accent: "#f0c020",
    specialty: "Ultra-detailed, Google DeepMind model",
    best: "Luxury brands, high-concept art Reels",
    speed: "60–120 sec",
    credits: "186 cr / 5s",
    quality: "1080p",
    audio: "Optional",
    description:
      "Google's flagship video model, Veo 3.1 produces the most visually coherent and detailed AI videos available in 2026. Light behaves correctly. Textures hold up under scrutiny. Motion follows real-world physics. The credit cost is higher, but for brand accounts where every post needs to be exceptional, Veo 3.1 is the benchmark.",
  },
  {
    name: "Veo 3.1 Fast",
    badge: "Fast Pick",
    icon: "⚡",
    accent: "#00c9a7",
    specialty: "Speed-optimised Veo quality",
    best: "Daily content, quick iteration",
    speed: "30–60 sec",
    credits: "92 cr / 5s",
    quality: "720p",
    audio: "Optional",
    description:
      "All the visual intelligence of Veo 3.1, optimised for speed. When you're running an Instagram account that needs fresh content every day, Veo 3.1 Fast hits the balance between remarkable quality and turnaround time that makes daily posting sustainable.",
  },
  {
    name: "Grok Imagine",
    badge: "Has Audio",
    icon: "🎵",
    accent: "#a78bfa",
    specialty: "Native AI audio generation built-in",
    best: "Music, ambient, mood Reels",
    speed: "60–90 sec",
    credits: "47 cr / 5s",
    quality: "1080p",
    audio: "Always included",
    description:
      "Grok Imagine by xAI is the only model in Scenith's lineup that generates audio natively alongside the video — no separate voiceover step needed. The result is a Reel with ambient soundscape, music-like audio, or environmental sound baked directly into the MP4. For mood-driven content, this is a game-changer.",
  },
  {
    name: "Wan 2.5",
    badge: "Budget Pick",
    icon: "💡",
    accent: "#34d399",
    specialty: "Efficient, reliable, versatile",
    best: "High-volume posting, faceless channels",
    speed: "30–60 sec",
    credits: "46 cr / 5s",
    quality: "720p",
    audio: "Optional",
    description:
      "Wan 2.5 is the workhorse model for Instagram accounts running high-volume AI content strategies. At 46 credits per clip, you can generate 6–7 Reels per month on the free Creator Lite plan. Quality is consistently good — not cinematic, but absolutely publishable, and the fastest way to test many different content angles.",
  },
  {
    name: "Kling 2.5 Turbo",
    badge: "Value Pro",
    icon: "🚀",
    accent: "#fb923c",
    specialty: "Fast version of Kling's pro engine",
    best: "Product showcases, fast-cut Reels",
    speed: "30–60 sec",
    credits: "64 cr / 5s",
    quality: "720p",
    audio: "Optional",
    description:
      "Kling 2.5 Turbo gives you Kling's signature motion fidelity at accelerated generation speed. For e-commerce creators who need product showcase videos daily, or for accounts running split-tests across multiple Reel concepts, Turbo's combination of speed and quality is hard to beat.",
  },
];

const REEL_NICHES = [
  {
    niche: "🌿 Wellness & Mindfulness",
    promptExample:
      "Slow cinematic 9:16 video of morning mist rolling over a forest lake at sunrise, golden light filtering through pine trees, absolute stillness, peaceful and meditative",
    whyItWorks:
      "Wellness Reels with atmospheric, low-motion AI video generate exceptional save rates — the Instagram metric most correlated with account growth in 2026.",
  },
  {
    niche: "🛍️ Product Showcase",
    promptExample:
      "Cinematic 360-degree rotation of a luxury skincare serum bottle on a wet marble surface, dramatic spotlight, mist curling around the base, ultra-detailed 9:16",
    whyItWorks:
      "AI product videos eliminate the cost of a photographer and studio. Brands report 40% higher engagement on AI-rendered product Reels compared to static images.",
  },
  {
    niche: "✈️ Travel & Destination",
    promptExample:
      "Aerial drone shot descending into neon-lit Tokyo streets at midnight, rain-soaked pavements, umbrellas in motion, bokeh streetlights, 9:16 vertical cinematic",
    whyItWorks:
      "Travel content is Instagram's highest-shared category. AI-generated destination videos let travel accounts post about places they haven't visited — legally and compellingly.",
  },
  {
    niche: "🍕 Food & Lifestyle",
    promptExample:
      "Macro slow-motion pour of dark chocolate over a layered dessert on a white marble surface, warm ambient kitchen light, steam rising, vertical 9:16 cinematic",
    whyItWorks:
      "Food Reels consistently rank #1 in Instagram saves. The macro + slow-motion aesthetic is difficult to capture on a phone — AI nails it on every attempt.",
  },
  {
    niche: "👗 Fashion & Style",
    promptExample:
      "Editorial fashion video, model in a flowing white silk dress walking through a sun-drenched Santorini alley, petals falling, slow motion, vertical 9:16 magazine style",
    whyItWorks:
      "Fashion AI content democratises editorial-quality video for independent designers and stylists who can't afford agency production rates.",
  },
  {
    niche: "🌌 Abstract & Art",
    promptExample:
      "Abstract fluid simulation of rose gold and obsidian ink dissolving in slow motion, dark background, swirling vortex patterns, hypnotic, vertical 9:16",
    whyItWorks:
      "Abstract aesthetic Reels have among the highest replay rates on Instagram — users loop them repeatedly, which the algorithm interprets as high-quality content.",
  },
  {
    niche: "🏋️ Fitness & Motivation",
    promptExample:
      "Cinematic slow-motion close-up of athlete hands gripping a barbell in a darkened gym, chalk dust exploding, dramatic single overhead light, intense and powerful, 9:16",
    whyItWorks:
      "Motivation content drives the highest comment rates. A single powerful visual paired with a punchy caption is a proven engagement formula across fitness accounts globally.",
  },
  {
    niche: "🎵 Music & Audio",
    promptExample:
      "Close-up slow-motion of piano keys being played, fingers in motion blur, warm candlelight on polished black wood, dust particles floating, emotional atmosphere, 9:16",
    whyItWorks:
      "Music content creators use AI video to produce visuals for track previews, lyric videos, and album promo Reels — without paying a videographer for every single release.",
  },
];

const PROMPT_FORMULA_PARTS = [
  { label: "Shot type", examples: ["Cinematic aerial", "Slow-motion macro", "First-person POV", "Tracking shot", "Static wide"] },
  { label: "Subject", examples: ["Product on surface", "Landscape", "Abstract fluid", "Person in motion", "Cityscape"] },
  { label: "Environment", examples: ["At golden hour", "In neon-lit rain", "In misty forest", "On marble surface", "Under soft studio light"] },
  { label: "Motion cue", examples: ["Slow drift", "Fast-cut", "Subtle parallax", "Swirling vortex", "Liquid pour"] },
  { label: "Mood", examples: ["Peaceful and meditative", "Intense and powerful", "Dreamy and romantic", "Dark and cinematic", "Bright and energetic"] },
  { label: "Format tag", examples: ["Vertical 9:16", "Ultra-detailed", "4K cinematic", "Film grain aesthetic", "Magazine editorial"] },
];

const FACELESS_STRATEGIES = [
  {
    title: "The Ambient Scene Channel",
    icon: "🎑",
    description:
      "Post one AI-generated ambient video daily — misty forests, neon cities, ocean shores, rainy cafés. Zero talking, zero face, zero location required. These accounts regularly hit 100K followers within 6 months because they tap into the massive 'aesthetic content' audience. AI makes the production cost essentially zero.",
    creditsPerMonth: "~280 cr (6 videos/week)",
    growthPotential: "High — saves-driven algorithm",
  },
  {
    title: "The AI Product Studio",
    icon: "📦",
    description:
      "Run a product photography and video studio — using only AI. Dropshippers, Shopify store owners, and Amazon sellers use this strategy to generate product videos at scale without ever holding the product. AI video of the product in use, on a luxury surface, in lifestyle settings — all from a text prompt.",
    creditsPerMonth: "~400 cr (10 videos/week)",
    growthPotential: "Commercial — direct revenue from clients",
  },
  {
    title: "The Cinematic Quote Channel",
    icon: "💬",
    description:
      "Pair AI-generated cinematic backgrounds with motivational or philosophical quote text overlays. Generate the video background in Scenith, add the text in CapCut or Canva, upload. These accounts have been growing at 2–5K followers per week in 2026 because the format is hyper-shareable and the AI quality makes even a one-person creator look like a full production team.",
    creditsPerMonth: "~180 cr (4 videos/week)",
    growthPotential: "Very High — share-driven virality",
  },
  {
    title: "The Niche Documentary Format",
    icon: "🎥",
    description:
      "Pick a niche subject (deep sea creatures, abandoned architecture, ancient civilisations, extreme weather phenomena) and generate cinematic AI videos of them. Add AI voiceover from Scenith's voice tab. The resulting content looks like a mini National Geographic documentary — from your laptop, in 20 minutes per video.",
    creditsPerMonth: "~350 cr (voice + video combined)",
    growthPotential: "Very High — educational content algorithm favourite",
  },
];

const INSTAGRAM_SPECS = [
  { format: "Reels", ratio: "9:16", duration: "Up to 90 sec", resolution: "1080×1920", fps: "30fps", tip: "Use AI clips as the hook (first 3 sec) — this is where 70% of drop-off happens." },
  { format: "Stories", ratio: "9:16", duration: "Up to 60 sec", resolution: "1080×1920", fps: "30fps", tip: "AI video Stories autoplay silently — use visual-first content with no reliance on audio." },
  { format: "Feed Video", ratio: "4:5 or 1:1", duration: "Up to 60 min", resolution: "1080×1350", fps: "30fps", tip: "Square (1:1) AI video works well here — Scenith supports 1:1 aspect ratio output." },
  { format: "Live", ratio: "9:16", duration: "Live", resolution: "720p+", fps: "—", tip: "Pre-generate AI video loops to play as background during live sessions." },
];

// ─── Page Component ────────────────────────────────────────────────────────────

export default function AIVideoGeneratorInstagramPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="avig-page">

        {/* ── HERO ──────────────────────────────────────────────────────────── */}
        <section className="avig-hero">
          <div className="avig-hero-bg" />
          <div className="avig-hero-scan" />

          {/* Breadcrumb */}
          <nav className="avig-breadcrumb" aria-label="Breadcrumb">
            <ol itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemScope itemType="https://schema.org/ListItem" itemProp="itemListElement">
                <Link href="/" itemProp="item"><span itemProp="name">Home</span></Link>
                <meta itemProp="position" content="1" />
              </li>
              <span className="avig-bc-sep">›</span>
              <li itemScope itemType="https://schema.org/ListItem" itemProp="itemListElement">
                <Link href="/tools" itemProp="item"><span itemProp="name">Tools</span></Link>
                <meta itemProp="position" content="2" />
              </li>
              <span className="avig-bc-sep">›</span>
              <li itemScope itemType="https://schema.org/ListItem" itemProp="itemListElement">
                <span itemProp="name">AI Video Generator for Instagram</span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </nav>

          <div className="avig-hero-inner">
            {/* Left: text */}
            <div className="avig-hero-text">
              <div className="avig-chip-row">
                <span className="avig-chip">📲 Instagram-Ready 9:16</span>
                <span className="avig-chip avig-chip-warm">✦ Free to Start</span>
                <span className="avig-chip">6 AI Video Models</span>
              </div>

              <h1 className="avig-h1">
                <span className="avig-h1-top">AI Video Generator</span>
                <span className="avig-h1-mid">for Instagram</span>
                <span className="avig-h1-bot">Reels & Stories</span>
              </h1>

              <p className="avig-hero-desc">
                Stop stressing about content. Type what you want to show — Scenith's AI generates
                a cinematic, scroll-stopping Reel in under two minutes. No camera. No edit suite.
                No agency. Just your idea and the world's best video AI models.
              </p>

              <div className="avig-hero-proof">
                <div className="avig-proof-item">
                  <strong>6</strong><span>AI Video Models</span>
                </div>
                <div className="avig-proof-divider" />
                <div className="avig-proof-item">
                  <strong>9:16</strong><span>Reel-Ready Format</span>
                </div>
                <div className="avig-proof-divider" />
                <div className="avig-proof-item">
                  <strong>30s</strong><span>Minimum Gen Time</span>
                </div>
                <div className="avig-proof-divider" />
                <div className="avig-proof-item">
                  <strong>MP4</strong><span>Instant Download</span>
                </div>
              </div>

              <Link
                href={`${CTA_BASE}&utm_content=hero-cta`}
                className="avig-hero-cta"
              >
                <span className="avig-cta-play">▶</span>
                Generate Your Reel — Free
                <span className="avig-cta-arrow">→</span>
              </Link>
              <p className="avig-cta-note">50 free credits · No card · No software to install</p>
            </div>

            {/* Right: phone mockup */}
            <div className="avig-hero-phone-wrap" aria-hidden="true">
              <div className="avig-phone">
                <div className="avig-phone-notch" />
                <div className="avig-phone-screen">
                  <div className="avig-reel-preview">
                    {/* Animated "playing" reel mockup */}
                    <div className="avig-reel-bg" />
                    <div className="avig-reel-overlay">
                      <div className="avig-reel-bars">
                        {Array.from({ length: 7 }).map((_, i) => (
                          <div key={i} className="avig-reel-bar" style={{ animationDelay: `${i * 0.18}s` }} />
                        ))}
                      </div>
                      <div className="avig-reel-label">AI Reel · 9:16 · 1080p</div>
                    </div>
                    <div className="avig-reel-ui">
                      <div className="avig-reel-ui-right">
                        <div className="avig-reel-btn">♥<span>12k</span></div>
                        <div className="avig-reel-btn">💬<span>340</span></div>
                        <div className="avig-reel-btn">↗<span>Share</span></div>
                      </div>
                      <div className="avig-reel-ui-bottom">
                        <div className="avig-reel-handle">@yourchannel</div>
                        <div className="avig-reel-caption">✨ AI-generated in 45 seconds</div>
                        <div className="avig-reel-audio">🎵 Original Audio · Scenith AI</div>
                        <div className="avig-reel-progress">
                          <div className="avig-reel-progress-bar" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="avig-phone-home" />
              </div>
              <div className="avig-phone-glow" />
            </div>
          </div>
        </section>

        {/* ── MAIN CTA BLOCK ────────────────────────────────────────────────── */}
        <section className="avig-main-cta-section">
          <div className="avig-main-cta-inner">
            <div className="avig-main-cta-card">
              <div className="avig-mcc-left">
                <div className="avig-mcc-tag">🎬 Open in Scenith AI Studio</div>
                <h2 className="avig-mcc-h2">Your Next Reel is One Prompt Away</h2>
                <p className="avig-mcc-body">
                  Scenith's AI Video Studio is purpose-built for short-form content creators.
                  Select the 9:16 vertical format, pick your model, describe your vision,
                  and your Reel is generating while you write the caption.
                </p>
                <div className="avig-mcc-features">
                  {[
                    "9:16 vertical format — Reel-ready from the first pixel",
                    "Text-to-video AND image-to-video (animate your photos)",
                    "AI audio on Grok Imagine — no separate voiceover needed",
                    "5s and 10s clip options — chain them for longer Reels",
                    "Full MP4 download — no watermarks, ever",
                    "History panel — every Reel you've generated, saved forever",
                  ].map((f, i) => (
                    <div className="avig-mcc-feature" key={i}>
                      <span className="avig-mcc-check">✦</span>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="avig-mcc-right">
                <div className="avig-fake-studio">
                  <div className="avig-studio-header">
                    <span className="avig-studio-dot" style={{ background: "#ff5f56" }} />
                    <span className="avig-studio-dot" style={{ background: "#ffbd2e" }} />
                    <span className="avig-studio-dot" style={{ background: "#27c93f" }} />
                    <span className="avig-studio-title">Scenith AI Studio — Video</span>
                  </div>
                  <div className="avig-studio-tabs">
                    <span className="avig-studio-tab">🎙️ Voice</span>
                    <span className="avig-studio-tab">🖼️ Image</span>
                    <span className="avig-studio-tab avig-tab-active">🎬 Video</span>
                  </div>
                  <div className="avig-studio-body">
                    <div className="avig-studio-textarea">
                      Cinematic 9:16 slow-motion drone descending into neon-lit Tokyo at midnight, rain puddles reflecting signs, pedestrians with umbrellas…
                      <span className="avig-studio-cursor">|</span>
                    </div>
                    <div className="avig-studio-options">
                      <span className="avig-studio-opt">Kling 2.6 Pro · 64cr</span>
                      <span className="avig-studio-opt">10s</span>
                      <span className="avig-studio-opt avig-opt-active">9:16 ✓</span>
                      <span className="avig-studio-opt">🎵 Audio</span>
                    </div>
                  </div>
                  <Link
                    href={`${CTA_BASE}&utm_content=fake-studio-cta`}
                    className="avig-studio-generate-btn"
                  >
                    ▶ Generate Reel — Free
                  </Link>
                  <p className="avig-studio-note">Opens Scenith AI Studio · Video tab pre-selected</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── HOW TO CREATE INSTAGRAM REELS WITH AI ─────────────────────────── */}
        <section className="avig-section">
          <div className="avig-section-inner">
            <div className="avig-section-label">Step-by-Step Guide</div>
            <h2 className="avig-section-h2">
              How to Create Instagram Reels with AI — Complete 2026 Guide
            </h2>
            <p className="avig-section-sub">
              From blank page to published Reel in under five minutes. Here's exactly how
              to use Scenith's AI video generator to create Instagram content that grows your account.
            </p>

            <div className="avig-how-grid">
              {[
                {
                  step: "01",
                  icon: "📝",
                  title: "Sign Up and Claim 50 Free Credits",
                  body: "Create a free Scenith account — no credit card required. You'll receive 50 credits instantly. A 5-second Reel on Wan 2.5 costs 46 credits, meaning you can generate your first complete Reel for free. Credits don't expire.",
                  tip: "If you want to test different models before committing, generate a 5-second clip on Imagen 4 Fast (10 credits) first to validate your concept cheaply.",
                },
                {
                  step: "02",
                  icon: "🎬",
                  title: "Navigate to the Video Tab",
                  body: "Open Scenith's AI Content Creator and click the Video tab. This is the AI video studio — you'll see model selection, duration controls (5s / 10s), aspect ratio picker, and the audio toggle. Everything is visible upfront — no hidden menus.",
                  tip: "The Video tab also has an Image-to-Video mode. If you have an existing brand photo, product shot, or AI-generated image, switch to this mode to animate it.",
                },
                {
                  step: "03",
                  icon: "📱",
                  title: "Set Format to 9:16",
                  body: "This is the most important technical step. Instagram Reels and Stories are displayed in 9:16 vertical format — which fills the entire mobile screen. Always set your aspect ratio to 9:16 before generating. If you generate in 16:9 (landscape) or 1:1 (square), Instagram will crop it or add black bars, destroying the visual impact.",
                  tip: "Square (1:1) works for feed video posts. Use 9:16 exclusively for Reels and Stories.",
                },
                {
                  step: "04",
                  icon: "✍️",
                  title: "Write a Cinematic Video Prompt",
                  body: "This is where most creators underperform. A weak prompt like 'a nice sunset' produces a generic result. A strong prompt gives the AI a complete scene: shot type, subject, environment, lighting, motion cue, mood, and the 9:16 specification. The difference in output quality between a weak and a strong prompt is dramatic — often the difference between something publishable and something that looks like a screen saver.",
                  tip: "Always include 'vertical 9:16' or 'cinematic portrait format' in your prompt. It signals to the model how to compose the frame.",
                },
                {
                  step: "05",
                  icon: "🤖",
                  title: "Choose the Right AI Model for Your Reel",
                  body: "Different models excel in different niches. Kling 2.6 Pro for lifestyle and travel content. Veo 3.1 for luxury and high-concept brand content. Grok Imagine for mood and audio-driven Reels. Wan 2.5 for high-volume daily content on a credit budget. See the full model comparison below for a detailed breakdown.",
                  tip: "Generate the same prompt on two models simultaneously to compare — then pick the better output for publishing.",
                },
                {
                  step: "06",
                  icon: "📥",
                  title: "Download MP4 and Post Directly to Instagram",
                  body: "Generation takes 30–120 seconds depending on the model and duration. Once complete, download the MP4 to your device. Open Instagram, tap the + icon, select Reel, import your video, add a caption and hashtags, and post. The entire process from prompt to published Reel takes under 5 minutes.",
                  tip: "For maximum reach, post Reels between 6–9am and 7–10pm in your audience's timezone. Use 3–5 niche hashtags rather than 30 generic ones — Instagram's 2026 algorithm weights relevance heavily over volume.",
                },
              ].map((item, i) => (
                <div className="avig-how-card" key={i}>
                  <div className="avig-how-step-row">
                    <span className="avig-how-num">{item.step}</span>
                    <span className="avig-how-icon">{item.icon}</span>
                  </div>
                  <h3 className="avig-how-title">{item.title}</h3>
                  <p className="avig-how-body">{item.body}</p>
                  <div className="avig-how-tip">
                    <span className="avig-how-tip-label">💡 Pro Tip</span>
                    {item.tip}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── VIDEO MODELS ──────────────────────────────────────────────────── */}
        <section className="avig-section avig-section-dark">
          <div className="avig-section-inner">
            <div className="avig-section-label">Model Intelligence</div>
            <h2 className="avig-section-h2">
              The 6 AI Models That Power Your Instagram Content
            </h2>
            <p className="avig-section-sub">
              Every model in Scenith's video studio is tested and tuned for short-form vertical
              content. Here's the full picture on what each one does best.
            </p>

            <div className="avig-models-grid">
              {VIDEO_MODELS.map((m, i) => (
                <div
                  className="avig-model-card"
                  key={i}
                  style={{ "--model-accent": m.accent } as React.CSSProperties}
                >
                  <div className="avig-model-header">
                    <div className="avig-model-icon">{m.icon}</div>
                    <div>
                      <div className="avig-model-name">{m.name}</div>
                      <span
                        className="avig-model-badge"
                        style={{ background: m.accent + "22", color: m.accent, borderColor: m.accent + "44" }}
                      >
                        {m.badge}
                      </span>
                    </div>
                  </div>
                  <p className="avig-model-desc">{m.description}</p>
                  <div className="avig-model-specs">
                    <div className="avig-model-spec">
                      <span>Best for</span><strong>{m.best}</strong>
                    </div>
                    <div className="avig-model-spec">
                      <span>Speed</span><strong>{m.speed}</strong>
                    </div>
                    <div className="avig-model-spec">
                      <span>Cost</span><strong>{m.credits}</strong>
                    </div>
                    <div className="avig-model-spec">
                      <span>Quality</span><strong>{m.quality}</strong>
                    </div>
                    <div className="avig-model-spec">
                      <span>Audio</span><strong>{m.audio}</strong>
                    </div>
                  </div>
                  <Link
                    href={`${CTA_BASE}&utm_content=model-card-${m.name.replace(/\s/g, "-")}`}
                    className="avig-model-try-btn"
                    style={{ color: m.accent, borderColor: m.accent + "55" }}
                  >
                    Try {m.name} →
                  </Link>
                </div>
              ))}
            </div>

            <div className="avig-model-cta-strip">
              <p>Not sure which to pick? Generate the same prompt on 2 models and compare side by side.</p>
              <Link href={`${CTA_BASE}&utm_content=model-compare-cta`} className="avig-inline-cta">
                Open AI Video Studio →
              </Link>
            </div>
          </div>
        </section>

        {/* ── NICHE CONTENT IDEAS ───────────────────────────────────────────── */}
        <section className="avig-section">
          <div className="avig-section-inner">
            <div className="avig-section-label">Content Strategy</div>
            <h2 className="avig-section-h2">
              8 Instagram Niche Strategies with AI Video — Including Real Prompts
            </h2>
            <p className="avig-section-sub">
              The content categories below are proven high-performers on Instagram in 2026.
              Each comes with a ready-to-use AI video prompt and an explanation of why the
              format works algorithmically.
            </p>

            <div className="avig-niches-list">
              {REEL_NICHES.map((item, i) => (
                <div className="avig-niche-row" key={i}>
                  <div className="avig-niche-label">{item.niche}</div>
                  <div className="avig-niche-content">
                    <div className="avig-niche-prompt-box">
                      <span className="avig-prompt-tag">Prompt</span>
                      <p className="avig-niche-prompt">"{item.promptExample}"</p>
                    </div>
                    <div className="avig-niche-why">
                      <span className="avig-why-tag">📊 Why it works</span>
                      <p>{item.whyItWorks}</p>
                    </div>
                  </div>
                  <Link
                    href={`${CTA_BASE}&utm_content=niche-${i}`}
                    className="avig-niche-use-btn"
                  >
                    Use Prompt →
                  </Link>
                </div>
              ))}
            </div>

            <div className="avig-niche-bottom-cta">
              <Link href={`${CTA_BASE}&utm_content=niche-all-cta`} className="avig-inline-cta">
                Generate All These Styles Free →
              </Link>
            </div>
          </div>
        </section>

        {/* ── PROMPT FORMULA ────────────────────────────────────────────────── */}
        <section className="avig-section avig-section-tint">
          <div className="avig-section-inner">
            <div className="avig-section-label">Prompt Engineering</div>
            <h2 className="avig-section-h2">
              The Exact Formula for Writing AI Video Prompts That Actually Work
            </h2>
            <p className="avig-section-sub">
              90% of bad AI video results come from weak prompts — not weak models. Here's
              the six-part formula used by professional content studios to get cinematic
              results on the first generation.
            </p>

            <div className="avig-formula-grid">
              {PROMPT_FORMULA_PARTS.map((part, i) => (
                <div className="avig-formula-card" key={i}>
                  <div className="avig-formula-num">{String(i + 1).padStart(2, "0")}</div>
                  <h3 className="avig-formula-label">{part.label}</h3>
                  <div className="avig-formula-examples">
                    {part.examples.map((ex, j) => (
                      <span className="avig-formula-ex" key={j}>{ex}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="avig-formula-example">
              <div className="avig-fe-label">✦ Full Prompt Example Using the Formula</div>
              <div className="avig-fe-prompt">
                <span className="avig-fe-part" style={{ color: "#ff6b35" }}>Cinematic aerial tracking shot</span>
                {" "}of{" "}
                <span className="avig-fe-part" style={{ color: "#fbbf24" }}>a lone surfer</span>
                {" "}
                <span className="avig-fe-part" style={{ color: "#34d399" }}>on a turquoise wave at golden hour, Indonesia</span>
                {" "}with{" "}
                <span className="avig-fe-part" style={{ color: "#a78bfa" }}>a slow, sweeping drift following the wave break</span>
                {" "}—{" "}
                <span className="avig-fe-part" style={{ color: "#fb923c" }}>epic, awe-inspiring, peaceful</span>
                {" "}—{" "}
                <span className="avig-fe-part" style={{ color: "#22d3ee" }}>vertical 9:16, ultra-detailed, 4K cinematic</span>
              </div>
              <Link
                href={`${CTA_BASE}&utm_content=formula-example-cta`}
                className="avig-fe-cta"
              >
                Try This Prompt Free →
              </Link>
            </div>
          </div>
        </section>

        {/* ── FACELESS INSTAGRAM ────────────────────────────────────────────── */}
        <section className="avig-section">
          <div className="avig-section-inner">
            <div className="avig-section-label">Growth Strategy</div>
            <h2 className="avig-section-h2">
              4 Faceless Instagram Account Strategies Powered by AI Video
            </h2>
            <p className="avig-section-sub">
              You don't need to show your face to build a massive Instagram following in 2026.
              Here are four account models that thousands of creators are using right now —
              all powered by AI video generation.
            </p>

            <div className="avig-faceless-grid">
              {FACELESS_STRATEGIES.map((item, i) => (
                <div className="avig-faceless-card" key={i}>
                  <div className="avig-faceless-icon">{item.icon}</div>
                  <h3 className="avig-faceless-title">{item.title}</h3>
                  <p className="avig-faceless-desc">{item.description}</p>
                  <div className="avig-faceless-meta">
                    <div className="avig-faceless-stat">
                      <span>Monthly credits</span>
                      <strong>{item.creditsPerMonth}</strong>
                    </div>
                    <div className="avig-faceless-stat">
                      <span>Growth potential</span>
                      <strong>{item.growthPotential}</strong>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="avig-faceless-cta">
              <p className="avig-faceless-cta-text">
                All four strategies above can be started today on Scenith's free tier.
                50 credits gives you enough to generate your first 1–2 Reels and validate
                which strategy fits your niche.
              </p>
              <Link
                href={`${CTA_BASE}&utm_content=faceless-cta`}
                className="avig-inline-cta"
              >
                Start Your Faceless Channel →
              </Link>
            </div>
          </div>
        </section>

        {/* ── INSTAGRAM VIDEO SPECS ─────────────────────────────────────────── */}
        <section className="avig-section avig-section-dark">
          <div className="avig-section-inner">
            <div className="avig-section-label">Technical Reference</div>
            <h2 className="avig-section-h2">
              Instagram Video Specifications — 2026 Complete Reference
            </h2>
            <p className="avig-section-sub">
              Every Instagram video format has specific technical requirements. Scenith's AI
              video generator is optimised to output files that match these specs without
              any post-processing.
            </p>

            <div className="avig-specs-table">
              <div className="avig-specs-header">
                <span>Format</span>
                <span>Aspect Ratio</span>
                <span>Duration</span>
                <span>Resolution</span>
                <span>FPS</span>
                <span>Scenith Tip</span>
              </div>
              {INSTAGRAM_SPECS.map((spec, i) => (
                <div className="avig-specs-row" key={i}>
                  <span className="avig-spec-format">{spec.format}</span>
                  <span className="avig-spec-val">{spec.ratio}</span>
                  <span className="avig-spec-val">{spec.duration}</span>
                  <span className="avig-spec-val">{spec.resolution}</span>
                  <span className="avig-spec-val">{spec.fps}</span>
                  <span className="avig-spec-tip">{spec.tip}</span>
                </div>
              ))}
            </div>

            <div className="avig-specs-note">
              <strong>Important:</strong> Instagram compresses all uploaded video. Starting with the highest-resolution
              AI output (1080p from Kling 2.6 or Veo 3.1) ensures your Reel looks sharp
              even after Instagram's compression algorithm processes it.
            </div>
          </div>
        </section>

        {/* ── WHY AI VIDEO FOR INSTAGRAM IN 2026 ───────────────────────────── */}
        <section className="avig-section">
          <div className="avig-section-inner">
            <div className="avig-section-label">Industry Context</div>
            <h2 className="avig-section-h2">
              Why AI Video is the Most Important Tool for Instagram Creators in 2026
            </h2>

            <div className="avig-why-editorial">
              <div className="avig-why-col">
                <h3 className="avig-why-sub">The Algorithm Has Changed Everything</h3>
                <p>
                  Instagram's 2025 algorithm update fundamentally shifted what the platform rewards.
                  The old metric was likes. The new metric is watch time — specifically, how many people
                  watch your Reel all the way through, replay it, and share it to their Story.
                </p>
                <p>
                  This change devastated static image accounts and newsletter-style carousels.
                  It massively rewarded creators who posted visually compelling, loopable video content.
                  AI video generation is the single most accessible way to produce that kind of content
                  at scale, especially for solo creators without a production budget.
                </p>

                <h3 className="avig-why-sub">The Production Cost Problem — Solved</h3>
                <p>
                  Before AI video, producing a single high-quality cinematic Reel required: a
                  videographer ($200–$500/day), a location ($0–$500), a model or talent ($100–$300),
                  video editing ($100–$300), and colour grading ($50–$200). Total: $450–$1,500 per Reel.
                </p>
                <p>
                  For a creator posting 3 Reels per week, that's $7,000–$24,000 per month in
                  production costs. For a brand, it's a line item that gets cut in the first
                  budget review. AI video generation reduces this to 46–186 credits per Reel —
                  or roughly $0.15 to $0.62 per clip at Scenith's paid tier pricing.
                </p>
                <p>
                  The 99% cost reduction doesn't just make it cheaper. It makes daily posting
                  economically rational — which is exactly what the Instagram algorithm rewards.
                </p>
              </div>

              <div className="avig-why-col">
                <h3 className="avig-why-sub">The Content Volume Flywheel</h3>
                <p>
                  Instagram accounts that post 5–7 Reels per week grow 3–4x faster than accounts
                  that post 1–2 per week, according to creator analytics data from 2025. The reason
                  is simple: more posts means more chances for the algorithm to recommend you to
                  non-followers via the Explore page and Reels feed.
                </p>
                <p>
                  Before AI, posting 5+ quality Reels per week was only sustainable for creator
                  teams with full-time videographers. AI makes it sustainable for a single person
                  with a laptop and a Scenith subscription. This is not a marginal improvement —
                  it's a structural change in what's possible for independent creators.
                </p>

                <h3 className="avig-why-sub">What Instagram Creator Studio Data Shows</h3>
                <p>
                  Accounts that introduced AI-generated video into their content mix in 2025
                  reported, on average, a 180% increase in Reel views, a 140% increase in profile
                  visits, and a 90% reduction in content production time. The formats that
                  performed best were atmospheric ambient scenes, AI product videos, and
                  abstract motion content — all categories where AI video excels.
                </p>
                <p>
                  The conclusion from two years of creator data is clear: AI video is not
                  a gimmick. It is the primary production tool of the fastest-growing
                  Instagram accounts in 2026, across every niche from wellness to finance
                  to fashion to gaming.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── IMAGE TO VIDEO ────────────────────────────────────────────────── */}
        <section className="avig-section avig-section-tint">
          <div className="avig-section-inner">
            <div className="avig-section-label">Advanced Feature</div>
            <h2 className="avig-section-h2">
              Image to Video for Instagram — Animate Any Photo into a Reel
            </h2>
            <p className="avig-section-sub">
              Have an existing product photo, brand image, or AI-generated visual? Don't
              just post it as a static image. Animate it into a Reel using Scenith's
              image-to-video feature and watch engagement go up dramatically.
            </p>

            <div className="avig-i2v-grid">
              {[
                {
                  icon: "🛍️",
                  title: "Product Photography → Product Reel",
                  body: "Upload your product photo (or generate one with Scenith's image tool first). Switch to Image-to-Video mode, describe the motion: 'slow 360-degree rotation, dramatic spotlight, mist rising from base'. The AI animates your static shot into a cinematic product reveal Reel.",
                  models: ["Kling 2.6", "Grok Aurora"],
                },
                {
                  icon: "👤",
                  title: "Portrait Photo → Story Reel",
                  body: "Upload a brand ambassador photo or AI-generated portrait. Describe: 'subtle breeze moving hair, bokeh background shifting, warm sunlight flickering'. The AI adds life to the image — creating the kind of dreamy, atmospheric Reel that gets saved repeatedly.",
                  models: ["Kling 2.6", "Stability AI"],
                },
                {
                  icon: "🌆",
                  title: "Architecture & Location → Cinematic Flythrough",
                  body: "Upload a real estate photo, hotel exterior, restaurant interior, or travel destination image. Describe a camera movement: 'slow cinematic push-in, depth-of-field shift bringing background into focus, golden hour light'. Instantly more compelling than any static image post.",
                  models: ["Veo 3.1", "Kling 2.6"],
                },
                {
                  icon: "🎨",
                  title: "AI Image → Animated Artwork Reel",
                  body: "Generate a stunning image in Scenith's Image tab (abstract art, landscape, illustration), then hit 'Make Video from this Image'. Describe the motion: 'slow parallax drift, subtle particle effects, colours shifting gently'. Art Reels with this treatment consistently hit 50K+ views for aesthetic accounts.",
                  models: ["Veo 3.1", "Grok Imagine"],
                },
              ].map((item, i) => (
                <div className="avig-i2v-card" key={i}>
                  <span className="avig-i2v-icon">{item.icon}</span>
                  <h3 className="avig-i2v-title">{item.title}</h3>
                  <p className="avig-i2v-body">{item.body}</p>
                  <div className="avig-i2v-models">
                    {item.models.map((m) => (
                      <span key={m} className="avig-i2v-model-tag">{m}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="avig-i2v-cta">
              <Link href={`${CTA_BASE}&utm_content=i2v-cta`} className="avig-inline-cta">
                Try Image to Video Free →
              </Link>
            </div>
          </div>
        </section>

        {/* ── MID PAGE CTA ──────────────────────────────────────────────────── */}
        <section className="avig-mid-cta">
          <div className="avig-mid-cta-inner">
            <div className="avig-mid-cta-tag">⚡ 50 Free Credits on Signup</div>
            <h2 className="avig-mid-cta-h2">
              Your competitors are already using AI to flood Instagram.
              <span> Are you?</span>
            </h2>
            <p className="avig-mid-cta-sub">
              The accounts growing fastest on Instagram in 2026 have one thing in common:
              they post more, and they do it with AI. Start today — free.
            </p>
            <Link
              href={`${CTA_BASE}&utm_content=mid-page-cta`}
              className="avig-hero-cta"
            >
              <span className="avig-cta-play">▶</span>
              Generate My First Reel — Free
              <span className="avig-cta-arrow">→</span>
            </Link>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────────────────── */}
        <section className="avig-section">
          <div className="avig-section-inner">
            <div className="avig-section-label">FAQ</div>
            <h2 className="avig-section-h2">
              AI Video Generator for Instagram — Frequently Asked Questions
            </h2>

            <div className="avig-faq-list">
              {[
                {
                  q: "Can AI-generated Instagram videos go viral?",
                  a: "Yes — and they do regularly. AI video content has gone viral on Instagram in every category from travel and wellness to tech and fashion. The algorithm cannot distinguish between human-shot and AI-generated video. It only measures watch time, shares, saves, and engagement rate. If your AI Reel is visually compelling and resonates with your audience, it will be pushed to the Explore page and Reels feed exactly like any other high-performing content.",
                },
                {
                  q: "Does Instagram allow AI-generated content?",
                  a: "Yes. Instagram's terms of service permit AI-generated video content. As of 2026, Meta requires disclosure when AI-generated content 'could be mistaken for depicting real people in realistic scenarios' — specifically AI-generated depictions of real public figures. Abstract, landscape, atmospheric, product, and non-specific human AI content does not require disclosure under current Meta policy. Always check Instagram's most current community guidelines for the latest requirements.",
                },
                {
                  q: "What resolution should my AI Instagram Reel be?",
                  a: "Generate at the highest resolution your model supports — 1080p from Kling 2.6, Veo 3.1, and Grok Imagine. Instagram compresses all uploaded video, so starting at 1080p ensures your final Reel looks sharp on screen. Wan 2.5 and Imagen 4 Fast output at 720p — still publishable, but noticeably softer on high-resolution displays. For Reels, always target 1080×1920px at 9:16 aspect ratio.",
                },
                {
                  q: "How long should an AI video be for Instagram Reels?",
                  a: "Platform data consistently shows that Reels between 7 and 15 seconds have the highest completion rate — meaning more people watch all the way through, which is the key signal Instagram's algorithm uses to recommend content. Scenith generates 5-second and 10-second clips. Chain two 5-second or one 10-second clip together in CapCut for a 10–15 second Reel with a transition. This is a proven format for faceless AI content channels.",
                },
                {
                  q: "Can I add voiceover to my AI Instagram video?",
                  a: "Yes. Two approaches: (1) Use Grok Imagine's native audio, which generates AI soundscape/music alongside the video. (2) Generate a separate AI voiceover script using Scenith's Voice tab, then combine in any video editor (CapCut, DaVinci Resolve, Adobe Premiere). Both approaches work within Scenith. The voice generator supports 40+ voices across Google, OpenAI, and Azure providers.",
                },
                {
                  q: "Is it legal to monetise AI-generated Instagram content?",
                  a: "Yes. Content generated on Scenith comes with full commercial rights. You can monetise your Instagram account through brand partnerships, Instagram's Creator Bonus programme, affiliate marketing, digital product sales, and any other commercial channel — using AI-generated content. Scenith grants you the rights to the output; what you do with it commercially is entirely up to you.",
                },
                {
                  q: "How many AI Reels can I generate per month on Scenith?",
                  a: "On the free plan (50 credits at signup), you can generate 1 complete 5-second Reel. On Creator Lite ($9/month, 300 credits), approximately 6–7 Reels on Kling 2.6 or 6+ Reels on Wan 2.5. On Creator Pro ($29/month, 1000 credits), approximately 20–22 Reels on Kling 2.6 or 21+ on Wan 2.5. Credits work across voice, image, and video — so most creators split their budget across content types.",
                },
                {
                  q: "What if the AI generates a video in the wrong format?",
                  a: "Always check your aspect ratio setting before generating — this is the most common mistake. Set it to 9:16 in the video options row before clicking Generate. If you accidentally generate in the wrong format, credits are not refunded for completed generations — only for failed ones. CapCut's crop tool can reframe a 16:9 video to 9:16 by zooming in, though you'll lose some visual information at the edges.",
                },
                {
                  q: "Can I use Scenith for Instagram Stories as well as Reels?",
                  a: "Yes. Instagram Stories and Reels use the same 9:16 vertical format and the same 1080×1920 resolution. Generate your video in 9:16 on Scenith, download the MP4, and upload to whichever Instagram format you want. Stories are capped at 60 seconds per clip; Reels can go up to 90 seconds. A 10-second AI video works perfectly for both.",
                },
                {
                  q: "How do I grow my Instagram faster with AI video?",
                  a: "The growth formula is: post frequency × content quality × niche relevance × hashtag precision. AI video solves the content quality and post frequency variables simultaneously. Start by picking one niche, generating 7 AI Reels in advance (a week's worth of content), and posting one per day at your audience's peak active time. Use 3–5 precise niche hashtags per post. After 30 days, review your top-performing Reels, identify the visual style and prompt pattern that worked best, and double down on it.",
                },
              ].map((item, i) => (
                <details className="avig-faq-item" key={i}>
                  <summary className="avig-faq-q">{item.q}</summary>
                  <p className="avig-faq-a">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── RELATED TOOLS ─────────────────────────────────────────────────── */}
        <section className="avig-section avig-section-tint">
          <div className="avig-section-inner">
            <div className="avig-section-label">Complete Your Content Stack</div>
            <h2 className="avig-section-h2">More AI Tools for Instagram Creators</h2>
            <div className="avig-related-grid">
              {[
                {
                  href: `https://scenith.in/create-ai-content?tab=image&utm_source=tool-page&utm_medium=ai-video-instagram&utm_campaign=related-tools&utm_content=ai-image`,
                  icon: "🖼️",
                  title: "AI Image Generator",
                  desc: "Create scroll-stopping Instagram feed posts, Story backgrounds, and thumbnail images — then animate them into Reels.",
                },
                {
                  href: `https://scenith.in/create-ai-content?tab=voice&utm_source=tool-page&utm_medium=ai-video-instagram&utm_campaign=related-tools&utm_content=ai-voice`,
                  icon: "🎙️",
                  title: "AI Voice Generator",
                  desc: "Add professional voiceover to your Reels using 40+ voices across Google, OpenAI, and Azure. No recording equipment needed.",
                },
                {
                  href: `https://scenith.in/tools/ai-logo-generator?utm_source=tool-page&utm_medium=ai-video-instagram&utm_campaign=related-tools&utm_content=ai-logo`,
                  icon: "✦",
                  title: "AI Logo Generator",
                  desc: "Create a branded logo for your Instagram channel in seconds — then use it across your Reels, Stories, and bio link pages.",
                },
              ].map((tool, i) => (
                <Link href={tool.href} className="avig-related-card" key={i}>
                  <span className="avig-related-icon">{tool.icon}</span>
                  <h3 className="avig-related-title">{tool.title}</h3>
                  <p className="avig-related-desc">{tool.desc}</p>
                  <span className="avig-related-arrow">Explore →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ─────────────────────────────────────────────────────── */}
        <section className="avig-final-cta">
          <div className="avig-final-inner">
            <div className="avig-final-phones" aria-hidden="true">
              {["▶", "◼", "▶"].map((icon, i) => (
                <div
                  key={i}
                  className="avig-final-mini-phone"
                  style={{ transform: `rotate(${(i - 1) * 8}deg) translateY(${i === 1 ? "0" : "16px"})`, opacity: i === 1 ? 1 : 0.5 }}
                >
                  <div className="avig-fmp-screen">
                    <span>{icon}</span>
                  </div>
                </div>
              ))}
            </div>
            <h2 className="avig-final-h2">
              Start posting Reels that
              <span className="avig-final-accent"> actually get watched.</span>
            </h2>
            <p className="avig-final-sub">
              50 free credits. 6 AI models. Instagram-ready 9:16 output.
              <br />
              Your next viral Reel is one prompt away.
            </p>
            <Link
              href={`${CTA_BASE}&utm_content=final-cta`}
              className="avig-hero-cta avig-final-btn"
            >
              <span className="avig-cta-play">▶</span>
              Generate My First Reel — Free
              <span className="avig-cta-arrow">→</span>
            </Link>
            <p className="avig-final-models">
              Powered by Kling 2.6 · Veo 3.1 · Wan 2.5 · Grok Imagine · Kling 2.5 Turbo
            </p>
          </div>
        </section>

      </div>
    </>
  );
}