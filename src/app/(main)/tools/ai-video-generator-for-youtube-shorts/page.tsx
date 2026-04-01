import type { Metadata } from "next";
import Link from "next/link";
import "./ai-video-generator-for-youtube-shorts.css";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "AI Video Generator for YouTube Shorts — Free Text to Video Tool 2026",
  description:
    "Generate viral YouTube Shorts with AI in seconds. Text-to-video, image-to-video, cinematic B-roll — powered by Kling 2.6, Veo 3.1, Wan 2.5. Free to start. No editing skills needed. MP4 download instant.",
  keywords: [
    "ai video generator for youtube shorts",
    "youtube shorts ai video maker",
    "free ai video generator shorts",
    "text to video youtube shorts",
    "ai shorts video creator 2026",
    "generate youtube shorts with ai",
    "ai video maker for shorts free",
    "best ai video tool for youtube shorts",
    "faceless youtube shorts ai video",
    "youtube shorts automation ai",
    "ai generated shorts video",
    "kling ai youtube shorts",
    "veo ai youtube shorts",
    "short form ai video generator",
    "9:16 ai video generator free",
    "viral shorts ai video maker",
    "image to video youtube shorts",
    "cinematic b-roll ai generator",
  ],
  openGraph: {
    title: "AI Video Generator for YouTube Shorts — Go Viral in Seconds",
    description:
      "Turn any prompt or image into a 9:16 YouTube Short with AI. Kling 2.6, Veo 3.1, Wan 2.5 — cinematic quality, instant MP4 download. Free to start.",
    url: "https://scenith.in/tools/ai-video-generator-for-youtube-shorts",
    siteName: "Scenith",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Video Generator for YouTube Shorts — Scenith",
    description:
      "Generate viral YouTube Shorts with AI. Text-to-video & image-to-video. Free MP4 download. No editing skills needed.",
  },
  alternates: {
    canonical: "https://scenith.in/tools/ai-video-generator-for-youtube-shorts",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
};

// ─── Structured Data ──────────────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://scenith.in/tools/ai-video-generator-for-youtube-shorts",
      url: "https://scenith.in/tools/ai-video-generator-for-youtube-shorts",
      name: "AI Video Generator for YouTube Shorts",
      description:
        "Generate viral YouTube Shorts using AI. Text-to-video and image-to-video powered by Kling 2.6, Veo 3.1, and Wan 2.5.",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://scenith.in" },
          { "@type": "ListItem", position: 2, name: "Tools", item: "https://scenith.in/tools" },
          {
            "@type": "ListItem",
            position: 3,
            name: "AI Video Generator for YouTube Shorts",
            item: "https://scenith.in/tools/ai-video-generator-for-youtube-shorts",
          },
        ],
      },
    },
    {
      "@type": "SoftwareApplication",
      name: "Scenith AI Video Generator for YouTube Shorts",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Web",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      description:
        "Browser-based AI video generator for YouTube Shorts. Supports text-to-video and image-to-video in 9:16 aspect ratio using Kling 2.6, Veo 3.1, Wan 2.5, and Grok Imagine.",
      featureList: [
        "Text-to-video for YouTube Shorts",
        "Image-to-video animation",
        "9:16 aspect ratio native support",
        "Kling 2.6 Pro, Veo 3.1, Wan 2.5 models",
        "AI-generated audio (Grok Imagine)",
        "Up to 1080p resolution",
        "Instant MP4 download",
        "Commercial use included",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the best AI video generator for YouTube Shorts?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The best AI video generators for YouTube Shorts in 2026 are Kling 2.6 Pro (highest quality cinematic output), Veo 3.1 (Google's model, excellent for realistic motion), and Wan 2.5 (best value for rapid content production). Scenith gives you access to all of these under one platform with native 9:16 aspect ratio support.",
          },
        },
        {
          "@type": "Question",
          name: "Can I generate YouTube Shorts automatically with AI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. AI video generators like Scenith can produce complete 9:16 YouTube Shorts from a text prompt or reference image in 30–120 seconds. You can generate the video, download it as MP4, and upload directly to YouTube Shorts. The entire workflow — from prompt to published Short — can take under 5 minutes.",
          },
        },
        {
          "@type": "Question",
          name: "Are AI-generated YouTube Shorts allowed by YouTube?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, YouTube allows AI-generated Shorts as long as the content complies with YouTube's Community Guidelines. You must disclose AI-generated content if it depicts a real person saying something they didn't say or shows realistic-looking events that didn't happen. For abstract, cinematic, nature, or animation-style AI Shorts, no disclosure is required.",
          },
        },
        {
          "@type": "Question",
          name: "How do I make a 9:16 AI video for YouTube Shorts?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "To make a 9:16 AI video for YouTube Shorts: 1) Go to Scenith's AI Video Generator, 2) Select the 9:16 aspect ratio, 3) Choose your AI model (Kling 2.6 for cinematic, Wan 2.5 for speed), 4) Type your prompt or upload a reference image, 5) Generate and download as MP4. The video is ready to upload directly to YouTube Shorts.",
          },
        },
        {
          "@type": "Question",
          name: "How much does it cost to generate YouTube Shorts with AI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Scenith offers 50 free credits on signup with no credit card required. Paid plans start at $9/month and include 300 credits. A 5-second Short using Wan 2.5 costs 46 credits. A 10-second Short using Kling 2.6 Pro costs 64 credits. This means you can generate 4–6 Shorts per month on the free plan and 5–7 per month on the starter paid plan.",
          },
        },
      ],
    },
  ],
};

// ─── Static Data ──────────────────────────────────────────────────────────────

const AI_MODELS = [
  {
    id: "wan2.5",
    name: "Wan 2.5",
    badge: "Best Value",
    badgeColor: "#10b981",
    icon: "⚡",
    speed: "Fast",
    quality: "High",
    creditsPer5s: 46,
    creditsPer10s: 92,
    bestFor: "High-volume Shorts production, rapid content testing",
    strengths: ["Fast generation (~40s)", "Consistent motion", "Great for abstract & cinematic prompts", "Low cost per Short"],
    weaknesses: ["Less photorealistic than Kling", "Motion can be stylized rather than literal"],
    description: "Wan 2.5 is the workhorse of YouTube Shorts AI production. Fast, consistent, and affordable — perfect for creators who need to publish 5–10 Shorts per week without breaking the bank.",
  },
  {
    id: "kling-v2.6-pro",
    name: "Kling 2.6 Pro",
    badge: "Highest Quality",
    badgeColor: "#6355dc",
    icon: "🎬",
    speed: "Medium",
    quality: "Ultra",
    creditsPer5s: 64,
    creditsPer10s: 128,
    bestFor: "Hero Shorts, viral attempts, product showcases, brand content",
    strengths: ["Cinematic-grade motion", "Best-in-class photorealism", "Excellent subject tracking", "Handles complex scene descriptions"],
    weaknesses: ["Slower generation (~90s)", "Higher credit cost per video"],
    description: "Kling 2.6 Pro is what you reach for when the Short needs to be extraordinary. Think product launches, channel trailers, and content you're pushing with paid ads. The quality is genuinely cinematic.",
  },
  {
    id: "veo3.1-fast",
    name: "Veo 3.1 Fast",
    badge: "Google AI",
    badgeColor: "#4285F4",
    icon: "🔵",
    speed: "Fast",
    quality: "Very High",
    creditsPer5s: 92,
    creditsPer10s: 184,
    bestFor: "Realistic scenes, nature, people-centric Shorts, educational content",
    strengths: ["Google-level understanding of prompts", "Excellent realistic human motion", "Natural lighting physics", "Strong temporal consistency"],
    weaknesses: ["Higher credit cost", "Less stylized/artistic than Kling"],
    description: "Veo 3.1 Fast brings Google DeepMind's research into your Shorts workflow. It's the go-to for realistic motion — people walking, water flowing, objects moving naturally. Prompts are interpreted with nuance.",
  },
  {
    id: "grok-imagine",
    name: "Grok Imagine",
    badge: "Audio Included 🎵",
    badgeColor: "#f59e0b",
    icon: "🎵",
    speed: "Medium",
    quality: "High",
    creditsPer5s: 47,
    creditsPer10s: 94,
    bestFor: "Shorts with built-in atmospheric audio, music-driven content",
    strengths: ["Only model with AI-generated audio", "Unique visual style", "Atmospheric/ambient sound baked in", "Great for abstract & mood content"],
    weaknesses: ["Less control over specific motion", "Audio style is fixed per generation"],
    description: "Grok Imagine is the only AI video model that generates audio alongside the video. If your Short concept relies on atmosphere — rain falling, city ambience, nature sounds — Grok eliminates the need for separate audio sourcing.",
  },
];

const SHORTS_NICHES = [
  { icon: "🔥", niche: "Motivational Clips", avgViews: "2M–50M", monetizable: true, difficulty: "Easy", aiType: "Text-to-video" },
  { icon: "🌍", niche: "Nature & Landscape", avgViews: "500K–20M", monetizable: true, difficulty: "Easy", aiType: "Text-to-video" },
  { icon: "🤖", niche: "AI News & Tech", avgViews: "300K–5M", monetizable: true, difficulty: "Medium", aiType: "B-roll + narration" },
  { icon: "💰", niche: "Finance Tips", avgViews: "500K–10M", monetizable: true, difficulty: "Medium", aiType: "Image-to-video" },
  { icon: "🧘", niche: "Meditation & Calm", avgViews: "1M–30M", monetizable: true, difficulty: "Easy", aiType: "Text-to-video" },
  { icon: "🎮", niche: "Gaming Cinematic", avgViews: "500K–15M", monetizable: true, difficulty: "Hard", aiType: "Text-to-video" },
  { icon: "🌌", niche: "Space & Sci-Fi", avgViews: "1M–25M", monetizable: true, difficulty: "Easy", aiType: "Text-to-video" },
  { icon: "🏙️", niche: "Urban Timelapse", avgViews: "800K–12M", monetizable: true, difficulty: "Easy", aiType: "Text-to-video" },
  { icon: "🧪", niche: "Science Visuals", avgViews: "400K–8M", monetizable: true, difficulty: "Medium", aiType: "Text-to-video" },
  { icon: "🎭", niche: "Historical Scenes", avgViews: "1M–40M", monetizable: true, difficulty: "Easy", aiType: "Text-to-video" },
  { icon: "🛍️", niche: "Product B-Roll", avgViews: "Business", monetizable: false, difficulty: "Easy", aiType: "Image-to-video" },
  { icon: "🌅", niche: "Ambient Wallpaper", avgViews: "5M–100M", monetizable: true, difficulty: "Easy", aiType: "Text-to-video" },
];

const PROMPT_FORMULAS = [
  {
    formula: "The Slow Reveal",
    template: "[Subject] slowly revealed through [visual effect], [lighting condition], [camera movement], cinematic 9:16, ultra-detailed",
    example: "A golden Aztec temple slowly revealed through parting jungle fog, warm amber morning light, slow drone pullback, cinematic 9:16, ultra-detailed",
    retention: "87% avg retention",
    why: "Creates anticipation and curiosity — the #1 driver of Shorts completion rate.",
  },
  {
    formula: "The Macro World",
    template: "Extreme close-up of [subject], [unusual visual detail], [atmospheric element], slow motion, macro lens, cinematic 9:16",
    example: "Extreme close-up of a raindrop falling on a spider web, each strand vibrating, golden hour backlight, slow motion, macro lens, cinematic 9:16",
    retention: "91% avg retention",
    why: "Macro visuals are hypnotic. Viewers can't look away — which is exactly what Shorts algorithm rewards.",
  },
  {
    formula: "The Epic Scale",
    template: "[Tiny subject] against [massive backdrop], [scale contrast], [dramatic lighting], wide cinematic shot, 9:16 vertical",
    example: "A lone astronaut standing on a Martian cliff edge, infinite orange desert stretching to the horizon below, twin sunset, wide cinematic shot, 9:16 vertical",
    retention: "82% avg retention",
    why: "Scale contrast triggers awe — one of the most shareable emotional responses on short-form video.",
  },
  {
    formula: "The Transformation",
    template: "[Before state] rapidly transforming into [after state], [visual transition effect], [time scale], cinematic 9:16",
    example: "A barren winter forest rapidly transforming into a lush summer canopy, seasons melting together in real time, golden magic hour, cinematic 9:16",
    retention: "89% avg retention",
    why: "Change and transformation are intrinsically watchable. The brain is wired to follow movement and state change.",
  },
  {
    formula: "The Atmospheric Loop",
    template: "[Environmental scene] with [loopable motion element], [mood lighting], ambient and meditative, seamless loop, 9:16",
    example: "Rain falling on a neon-lit Tokyo alley at midnight, steam rising from a street grate, purple reflections in puddles, ambient and meditative, seamless loop, 9:16",
    retention: "94% avg retention",
    why: "Loopable content gets watched multiple times per session, dramatically inflating your view count and watch time.",
  },
  {
    formula: "The Power Moment",
    template: "[Subject] at the peak of [dramatic action], [energy/force element], [cinematic framing], slow motion impact, 9:16",
    example: "A lightning bolt striking an ancient oak tree at the peak of a thunderstorm, branching sparks frozen in slow motion, dramatic low angle, 9:16",
    retention: "85% avg retention",
    why: "Peak action moments create a 'wow' response in the first second — the most critical moment for Shorts retention.",
  },
];

const EDITING_WORKFLOW = [
  {
    step: "01",
    title: "Plan 7 Shorts in 30 Minutes",
    icon: "🗓️",
    detail: "Batch-plan your week of Shorts in a single session. Write 7 prompts in a Google Doc — one per niche topic. Use a theme for the week (e.g., 'natural wonders', 'urban cinematic') to keep your content cohesive without being repetitive. AI video generation works best when prompts are 40–80 words long and include: subject, environment, lighting, camera movement, mood, and aspect ratio.",
    tip: "Batch planning = consistent posting = algorithm growth.",
  },
  {
    step: "02",
    title: "Generate Videos in Scenith",
    icon: "🎬",
    detail: "Open Scenith's AI Video Generator, select 9:16 aspect ratio. For atmospheric/nature content, use Wan 2.5 (fastest, cheapest). For cinematic hero content, use Kling 2.6 Pro. For content needing natural audio (rain, city, ocean), use Grok Imagine — it generates audio alongside video. Queue all 7 generations while you work on other tasks. Videos typically complete in 40–120 seconds.",
    tip: "Generate during downtime — videos finish while you do other work.",
  },
  {
    step: "03",
    title: "Quick Edit in CapCut or Premiere",
    icon: "✂️",
    detail: "Download all MP4 files. Import into CapCut (free, mobile or desktop) or Adobe Premiere Pro. For most AI-generated Shorts, editing is minimal: trim the first and last 0.5 seconds (AI videos sometimes have slight motion artifacts at start/end), add captions using auto-transcription if there's narration, add a royalty-free music track at -18 to -20 dB. Total editing time per Short: 3–8 minutes.",
    tip: "CapCut's auto-captions add ~30% to retention — always enable them.",
  },
  {
    step: "04",
    title: "Add a Text Hook in the First 0.5 Seconds",
    icon: "📝",
    detail: "The first 0.5 seconds of a Short determines whether someone swipes or stays. Add a bold text overlay in the very first frame — not at second 1 or 2, but frame 1. Use contrast: white text on dark video, dark text on light video. Keep it under 7 words. Questions work best: 'Have you seen this?' or 'Nobody talks about this...' — these create a cognitive open loop that drives completion.",
    tip: "Test 2 different hooks on the same video — upload twice with different first-frame text.",
  },
  {
    step: "05",
    title: "Upload & Optimize for Discovery",
    icon: "🚀",
    detail: "Upload as a YouTube Short (under 60 seconds, 9:16, MP4). Title: include your primary keyword in the first 50 characters. Description: 2–3 sentences with secondary keywords + 3–5 hashtags (#Shorts #AIVideo #[NicheKeyword]). Thumbnail: for Shorts, YouTube auto-generates a thumbnail from the mid-point of the video — generate a strong visual frame at the 2–3 second mark intentionally. Post between 6–9 PM in your target audience's timezone.",
    tip: "First 24 hours are critical — engage with every comment to boost early signals.",
  },
  {
    step: "06",
    title: "Analyze & Iterate",
    icon: "📊",
    detail: "Check YouTube Studio after 48–72 hours. The single most important metric for Shorts is 'Average Percentage Viewed.' Above 80%: this format works — make 5 more. 60–80%: good but tweak the hook. Below 60%: the first second is losing people — change the opening frame or text. AI generation makes iteration cheap: re-generate with a refined prompt and republish. Most viral Shorts are the 4th or 5th iteration of the same idea.",
    tip: "Track your top 3 performers weekly — double down on what's working.",
  },
];

const ALGORITHM_SIGNALS = [
  {
    signal: "Average View Duration",
    weight: "🔴 Critical",
    target: ">80% of video length",
    howAIHelps: "AI videos with loopable motion patterns and no boring static frames naturally retain viewers longer than talking-head content.",
  },
  {
    signal: "Like Rate",
    weight: "🟠 High",
    target: ">4% of views",
    howAIHelps: "Visually stunning AI-generated footage — dramatic landscapes, cinematic slow-motion — drives organic likes from viewers who feel compelled to react.",
  },
  {
    signal: "Share Rate",
    weight: "🟠 High",
    target: ">1% of views",
    howAIHelps: "\"Wow\" factor visuals — content people can't believe was AI-generated — get shared. The novelty of AI video quality is still a significant share trigger in 2026.",
  },
  {
    signal: "Comment Engagement",
    weight: "🟡 Medium",
    target: ">0.5% of views",
    howAIHelps: "AI video quality prompts curiosity comments ('how did you make this?', 'what AI tool is this?') — these organic comments dramatically boost your Short's algorithm score.",
  },
  {
    signal: "Subscribe Rate",
    weight: "🟡 Medium",
    target: ">0.3% of viewers",
    howAIHelps: "Consistent aesthetic across your AI-generated Shorts creates a recognizable channel identity. Viewers subscribe to channels with a distinctive visual style.",
  },
  {
    signal: "Click-Through Rate",
    weight: "🟡 Medium",
    target: ">6% from Browse",
    howAIHelps: "High-quality AI thumbnails (generated via Scenith's image tool) dramatically outperform phone screenshots as thumbnails for algorithm-distributed content.",
  },
];

const MONETIZATION_PATHS = [
  {
    icon: "💵",
    title: "YouTube Shorts Fund & RPM",
    description: "YouTube pays Shorts creators through the Shorts revenue sharing model. The RPM for Shorts is lower than long-form ($0.03–$0.07 per 1,000 views) but volumes are massive. A channel averaging 1M views/month earns $30–$70/month from Shorts alone — modest but it compounds as your library grows.",
    timeline: "Immediate (post YPP qualification)",
    ceiling: "Scale play — 100M+ views = $3,000–$7,000/month",
  },
  {
    icon: "🎯",
    title: "Funneling to Long-Form Content",
    description: "The smartest Shorts strategy isn't to monetize Shorts directly — it's to use Shorts as a distribution engine for your long-form channel. A single viral Short (5M+ views) can add 10,000–50,000 subscribers to your main channel, unlocking long-form CPMs of $8–$20 instead of Shorts' $0.05. One viral Short can be worth $50,000–$200,000 in long-form channel value.",
    timeline: "Depends on viral performance",
    ceiling: "Transformative — one Short can 10x your channel",
  },
  {
    icon: "🤝",
    title: "Sponsored Shorts",
    description: "Brands pay specifically for Shorts placement because the format reaches 18–34 demographics that are underserved by traditional advertising. At 100K subscribers, expect $200–$800 per sponsored Short. At 500K, expect $1,500–$5,000. AI-generated visuals make brand integrations seamless — you can generate a Short that features a product in the scene itself.",
    timeline: "6–12 months to first deals",
    ceiling: "$5,000–$15,000/sponsored Short at scale",
  },
  {
    icon: "🛒",
    title: "YouTube Shopping & Affiliate",
    description: "YouTube's Shopping feature lets you tag products directly in Shorts. For e-commerce brands, AI-generated product demonstration Shorts (image-to-video with a product photo as the starting frame) convert at 2–4x the rate of static image ads. Affiliate Shorts in the tech, beauty, and home niche regularly drive $500–$5,000/month in commissions from a single well-performing video.",
    timeline: "From day one",
    ceiling: "$10,000+/month for product-niche channels",
  },
];

const ADVANCED_STRATEGIES = [
  {
    title: "The 3-Second Loop Strategy",
    description: "Create AI videos that are designed to loop perfectly — where the last frame matches the first frame visually. YouTube counts each loop as continued watch time. A perfectly looping 10-second Short can generate 3x–5x its actual length in watch time per viewer session. To execute: generate a scene that starts and ends in the same environmental state (e.g., sunrise timelapse that loops back to sunrise).",
    icon: "🔄",
    difficulty: "Intermediate",
  },
  {
    title: "The 'Making Of' Meta-Short",
    description: "Record your screen while generating AI videos in Scenith, then post the generation process as a Short alongside the final video. 'AI videos I made for free' and 'I made this in 60 seconds with AI' are wildly viral content formats in 2026. The meta-Short builds trust, demonstrates skill, and captures 'how to make AI videos' search traffic — often outperforming the original video.",
    icon: "🎥",
    difficulty: "Easy",
  },
  {
    title: "The Multilingual Duplicate Strategy",
    description: "Generate the same visual Shorts concept with different AI-generated audio narration in 3–5 languages (English, Spanish, Hindi, Portuguese, Arabic). Upload to separate language-specific channels. The visual AI content is identical — only the narration changes. This multiplies your revenue streams from one piece of visual content by 3–5x. Spanish and Hindi YouTube markets are growing 20%+ year-over-year with significantly lower competition.",
    icon: "🌍",
    difficulty: "Advanced",
  },
  {
    title: "The 'Image Resurrection' Strategy",
    description: "Take famous historical photographs — public domain images from the 1800s and early 1900s — and animate them using Scenith's image-to-video feature. A photograph of a Victorian street, a Civil War battlefield, or an 1890s market brought to life with AI motion creates deeply engaging content that YouTube's algorithm distributes aggressively. 'Colorized/Animated Historical Photos' is one of the highest-performing Shorts niches in 2026.",
    icon: "🏛️",
    difficulty: "Easy",
  },
  {
    title: "The Trending Topic Sprint",
    description: "When a major event breaks (space mission, natural phenomenon, scientific discovery, world record), immediately generate AI cinematic B-roll of the related visual — volcano eruption footage, space launch, aurora borealis — and publish within 2 hours of the event trending. AI video generation is fast enough to react to trending events in real time. Early movers on trending search terms capture 80% of the traffic before competition floods in.",
    icon: "⚡",
    difficulty: "Intermediate",
  },
  {
    title: "The Compilation Channel Architecture",
    description: "Build a channel around themed AI video compilations — '10 Most Beautiful Places on Earth (AI Cinematic)', 'Ancient Civilizations Reimagined in 4K', 'Every Major Ocean Depth Level Visualized'. Each Short teases one entry from the long-form compilation. The Short drives discovery, the long-form video captures watch hours for YPP, and the entire library feeds each other in a self-reinforcing discovery loop.",
    icon: "📚",
    difficulty: "Advanced",
  },
];

// ─── Page Component ───────────────────────────────────────────────────────────

export default function AIVideoGeneratorForYouTubeShortsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="avs-page">

        {/* ── Breadcrumb ── */}
        <nav className="avs-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span className="avs-bc-sep">›</span>
          <Link href="/tools">Tools</Link>
          <span className="avs-bc-sep">›</span>
          <span aria-current="page">AI Video Generator for YouTube Shorts</span>
        </nav>

        {/* ══════════════════════════════════════════════════════════
            HERO
        ══════════════════════════════════════════════════════════ */}
        <section className="avs-hero">
          {/* Animated background layers */}
          <div className="avs-hero-bg" aria-hidden="true">
            <div className="avs-grid-overlay" />
            <div className="avs-scanline-overlay" />
            <div className="avs-orb avs-orb-1" />
            <div className="avs-orb avs-orb-2" />
            <div className="avs-orb avs-orb-3" />
            <div className="avs-film-strip avs-strip-left" />
            <div className="avs-film-strip avs-strip-right" />
          </div>

          <div className="avs-hero-inner">
            {/* Live badge */}
            <div className="avs-live-badge">
              <span className="avs-live-dot" />
              <span>4 AI Models Live · 9:16 Native · Free to Start</span>
            </div>

            <h1 className="avs-hero-title">
              <span className="avs-title-tag">AI VIDEO GENERATOR</span>
              <span className="avs-title-main">FOR YOUTUBE</span>
              <span className="avs-title-accent">SHORTS</span>
            </h1>

            <p className="avs-hero-desc">
              Generate <strong>cinematic YouTube Shorts in 60 seconds</strong> from a text prompt or image.
              Powered by Kling&nbsp;2.6, Veo&nbsp;3.1, Wan&nbsp;2.5, and Grok Imagine.
              9:16 natively. MP4 download instant.{" "}
              <em>No editing software. No camera. No budget.</em>
            </p>

            {/* Metrics strip */}
            <div className="avs-metrics">
              {[
                { value: "4", label: "AI Video Models" },
                { value: "60s", label: "Avg Generation" },
                { value: "1080p", label: "Max Resolution" },
                { value: "9:16", label: "Shorts Native" },
              ].map((m) => (
                <div key={m.label} className="avs-metric">
                  <strong>{m.value}</strong>
                  <span>{m.label}</span>
                </div>
              ))}
            </div>

            {/* PRIMARY CTA */}
            <div className="avs-hero-cta-wrap">
              <a
                href="https://scenith.in/create-ai-content?tab=video&utm_source=tools&utm_medium=shorts-video-page&utm_campaign=ai-video-generator-youtube-shorts&utm_content=hero-cta"
                className="avs-cta-primary"
              >
                <span className="avs-cta-play">▶</span>
                <span>Generate My First Short — Free</span>
                <span className="avs-cta-arr">→</span>
              </a>
              <div className="avs-cta-trust">
                <span>✓ No credit card</span>
                <span>✓ 50 free credits</span>
                <span>✓ Commercial use rights</span>
              </div>
            </div>

            {/* Floating model pills */}
            <div className="avs-model-pills">
              {[
                { name: "Kling 2.6 Pro", color: "#6355dc", icon: "🎬" },
                { name: "Veo 3.1", color: "#4285F4", icon: "🔵" },
                { name: "Wan 2.5", color: "#10b981", icon: "⚡" },
                { name: "Grok Imagine", color: "#f59e0b", icon: "🎵" },
              ].map((m) => (
                <span
                  key={m.name}
                  className="avs-model-pill"
                  style={{ borderColor: `${m.color}40`, color: m.color, background: `${m.color}10` }}
                >
                  {m.icon} {m.name}
                </span>
              ))}
            </div>
          </div>

          {/* Vertical phone mockups */}
          <div className="avs-hero-phones" aria-hidden="true">
            <div className="avs-phone avs-phone-1">
              <div className="avs-phone-screen">
                <div className="avs-phone-shimmer" />
                <div className="avs-phone-label">🌋 Volcano Short</div>
              </div>
            </div>
            <div className="avs-phone avs-phone-2">
              <div className="avs-phone-screen">
                <div className="avs-phone-shimmer avs-shimmer-2" />
                <div className="avs-phone-label">🌌 Space Short</div>
              </div>
            </div>
            <div className="avs-phone avs-phone-3">
              <div className="avs-phone-screen">
                <div className="avs-phone-shimmer avs-shimmer-3" />
                <div className="avs-phone-label">🌊 Ocean Short</div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            WHAT ARE YOUTUBE SHORTS + AI
        ══════════════════════════════════════════════════════════ */}
        <section className="avs-section avs-what">
          <div className="avs-container">
            <div className="avs-section-header">
              <span className="avs-tag">The 2026 Opportunity</span>
              <h2>Why YouTube Shorts + AI Video Is the Biggest Content Play Right Now</h2>
              <p>
                YouTube Shorts crossed 70 billion daily views in 2025. The algorithm is actively
                searching for new content to distribute. AI video generation has crossed the quality
                threshold where generated content is indistinguishable from filmed footage for
                cinematic and atmospheric subjects. The intersection of these two trends is
                a window that most creators haven't realized is open yet.
              </p>
            </div>

            <div className="avs-what-grid">
              <div className="avs-what-card avs-what-card--dark">
                <div className="avs-what-num">70B</div>
                <h3>Daily Shorts Views</h3>
                <p>YouTube Shorts now accounts for more daily video views than TikTok, Instagram Reels, and Facebook Video combined. The platform is actively prioritizing Shorts in home feed and suggested video placement — new channels can reach millions of viewers in their first week if the content hits.</p>
              </div>
              <div className="avs-what-card avs-what-card--teal">
                <div className="avs-what-num">60s</div>
                <h3>Average AI Generation Time</h3>
                <p>In 2024, AI video generation took 5–15 minutes per clip and cost $3–$10 per video. In 2026, the same quality video takes 40–120 seconds and costs fractions of a cent per second of footage. The economics have permanently flipped in favor of AI-native content creators.</p>
              </div>
              <div className="avs-what-card avs-what-card--purple">
                <div className="avs-what-num">$0</div>
                <h3>Equipment Cost</h3>
                <p>Filming cinematic slow-motion drone footage of a volcanic eruption would cost $50,000+. Generating the same quality footage with Kling 2.6 or Veo 3.1 costs under $1 and takes 90 seconds. AI has democratized production value that was previously exclusive to Netflix-budget productions.</p>
              </div>
            </div>

            <div className="avs-what-body">
              <h3>The Algorithm Doesn't Care if It's AI</h3>
              <p>
                YouTube's recommendation algorithm optimizes for one thing: engagement signals. Average view duration, like rate, share rate, and comment volume. A beautifully generated AI Short of a storm sweeping across the Scottish Highlands will retain viewers just as effectively as filmed footage — arguably better, because AI can generate the perfect shot that no camera crew could physically capture.
              </p>
              <p>
                Early AI Shorts channels have demonstrated the model clearly. Channels posting 5–7 AI-generated Shorts per week in the nature, space, and ambient categories are seeing 500K–5M views per video within the first 3–6 months, with zero production crew, zero location travel, and zero equipment costs. The total monthly production cost for these channels is typically $30–$80.
              </p>
              <p>
                This is not a speculative trend. It is happening right now. The question isn't whether to use AI for YouTube Shorts — it's whether you're going to start this month or watch someone else capture the audience you could have reached.
              </p>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            AI MODELS BREAKDOWN
        ══════════════════════════════════════════════════════════ */}
        <section className="avs-section avs-models">
          <div className="avs-container">
            <div className="avs-section-header">
              <span className="avs-tag">Model Guide</span>
              <h2>Which AI Video Model Should You Use for YouTube Shorts?</h2>
              <p>
                Not all AI video models produce the same output. Choosing the wrong model
                for your Shorts niche is one of the most common mistakes new AI creators make.
                Here's the complete breakdown of every model available on Scenith — and
                exactly which type of Short each one is built for.
              </p>
            </div>

            <div className="avs-models-grid">
              {AI_MODELS.map((model) => (
                <article key={model.id} className="avs-model-card">
                  <div className="avs-model-header">
                    <span className="avs-model-icon">{model.icon}</span>
                    <div>
                      <h3>{model.name}</h3>
                      <span
                        className="avs-model-badge"
                        style={{ background: `${model.badgeColor}18`, color: model.badgeColor, border: `1px solid ${model.badgeColor}33` }}
                      >
                        {model.badge}
                      </span>
                    </div>
                  </div>

                  <p className="avs-model-desc">{model.description}</p>

                  <div className="avs-model-meta">
                    <div className="avs-model-meta-item">
                      <span>Speed</span>
                      <strong>{model.speed}</strong>
                    </div>
                    <div className="avs-model-meta-item">
                      <span>Quality</span>
                      <strong>{model.quality}</strong>
                    </div>
                    <div className="avs-model-meta-item">
                      <span>5s cost</span>
                      <strong>{model.creditsPer5s} cr</strong>
                    </div>
                    <div className="avs-model-meta-item">
                      <span>10s cost</span>
                      <strong>{model.creditsPer10s} cr</strong>
                    </div>
                  </div>

                  <div className="avs-model-best">
                    <strong>Best for:</strong> {model.bestFor}
                  </div>

                  <div className="avs-model-pros-cons">
                    <div>
                      <span className="avs-pros-label">Strengths</span>
                      <ul>
                        {model.strengths.map((s) => (
                          <li key={s}><span>✓</span>{s}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <span className="avs-cons-label">Limitations</span>
                      <ul>
                        {model.weaknesses.map((w) => (
                          <li key={w}><span>–</span>{w}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="avs-model-cta">
              <p>All 4 models are available on Scenith — test them all free.</p>
              <a
                href="https://scenith.in/create-ai-content?tab=video&utm_source=tools&utm_medium=shorts-video-page&utm_campaign=ai-video-generator-youtube-shorts&utm_content=models-cta"
                className="avs-cta-primary"
              >
                ▶ Try All Models Free →
              </a>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            PROMPT FORMULAS
        ══════════════════════════════════════════════════════════ */}
        <section className="avs-section avs-prompts">
          <div className="avs-container">
            <div className="avs-section-header">
              <span className="avs-tag">Proven Prompt Formulas</span>
              <h2>6 AI Video Prompt Formulas That Drive Maximum YouTube Shorts Retention</h2>
              <p>
                The difference between a Short that gets 50K views and one that gets 5M views is often
                the prompt. These 6 formulas are reverse-engineered from the highest-performing AI
                Shorts categories in 2026 — each optimized for the retention signals that YouTube's
                algorithm rewards most.
              </p>
            </div>

            <div className="avs-prompts-grid">
              {PROMPT_FORMULAS.map((pf) => (
                <div key={pf.formula} className="avs-prompt-card">
                  <div className="avs-prompt-top">
                    <h3>{pf.formula}</h3>
                    <span className="avs-retention-pill">{pf.retention}</span>
                  </div>
                  <div className="avs-prompt-template">
                    <span className="avs-prompt-label">Template</span>
                    <code>{pf.template}</code>
                  </div>
                  <div className="avs-prompt-example">
                    <span className="avs-prompt-label">Example Prompt</span>
                    <blockquote>"{pf.example}"</blockquote>
                  </div>
                  <div className="avs-prompt-why">
                    <span className="avs-why-label">Why it works</span>
                    <p>{pf.why}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="avs-prompt-cta-bar">
              <div className="avs-prompt-cta-inner">
                <div>
                  <strong>Ready to test these prompts?</strong>
                  <p>Paste any of these into Scenith and generate your first Short in 60 seconds.</p>
                </div>
                <a
                  href="https://scenith.in/create-ai-content?tab=video&utm_source=tools&utm_medium=shorts-video-page&utm_campaign=ai-video-generator-youtube-shorts&utm_content=prompts-cta"
                  className="avs-cta-primary avs-cta-sm"
                >
                  ▶ Generate Now →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            NICHE OPPORTUNITIES TABLE
        ══════════════════════════════════════════════════════════ */}
        <section className="avs-section avs-niches">
          <div className="avs-container">
            <div className="avs-section-header">
              <span className="avs-tag">Niche Analysis</span>
              <h2>Best YouTube Shorts Niches for AI-Generated Video in 2026</h2>
              <p>
                Not every Shorts niche performs equally for AI-generated content.
                This is a data-driven breakdown of the top niches where AI video
                outperforms filmed content — with view potential, monetizability, and
                which AI generation type fits each niche best.
              </p>
            </div>

            <div className="avs-niches-table-wrap">
              <table className="avs-niches-table">
                <thead>
                  <tr>
                    <th>Niche</th>
                    <th>View Range</th>
                    <th>Monetizable</th>
                    <th>Competition</th>
                    <th>AI Type</th>
                  </tr>
                </thead>
                <tbody>
                  {SHORTS_NICHES.map((n) => (
                    <tr key={n.niche}>
                      <td>
                        <span className="avs-niche-icon">{n.icon}</span>
                        <strong>{n.niche}</strong>
                      </td>
                      <td className="avs-td-views">{n.avgViews}</td>
                      <td>{n.monetizable ? <span className="avs-yes">✓ Yes</span> : <span className="avs-biz">Business</span>}</td>
                      <td>
                        <span className={`avs-difficulty avs-diff-${n.difficulty.toLowerCase()}`}>
                          {n.difficulty}
                        </span>
                      </td>
                      <td className="avs-td-type">{n.aiType}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="avs-niches-insight">
              <div className="avs-insight-icon">💡</div>
              <div>
                <strong>Key insight:</strong> The easiest AI Shorts niches in 2026 are those where the visual content is inherently non-verbal and visually captivating — nature, space, ambient, historical. These require no narration, no text overlays, and no editing beyond basic trimming. A beginner can post their first AI Short in under an hour using these categories.
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            ALGORITHM SIGNALS
        ══════════════════════════════════════════════════════════ */}
        <section className="avs-section avs-algorithm">
          <div className="avs-container">
            <div className="avs-section-header">
              <span className="avs-tag">Algorithm Decoded</span>
              <h2>YouTube Shorts Algorithm in 2026 — What Signals Matter and How AI Helps</h2>
              <p>
                YouTube doesn't rank Shorts the same way it ranks long-form videos. Shorts have
                their own recommendation pool, their own signals, and their own virality patterns.
                Here's exactly what the algorithm weighs — and how AI-generated content is uniquely
                positioned to maximize each signal.
              </p>
            </div>

            <div className="avs-algo-grid">
              {ALGORITHM_SIGNALS.map((sig) => (
                <div key={sig.signal} className="avs-algo-card">
                  <div className="avs-algo-top">
                    <h3>{sig.signal}</h3>
                    <span className="avs-weight">{sig.weight}</span>
                  </div>
                  <div className="avs-algo-target">
                    <span>Target:</span>
                    <strong>{sig.target}</strong>
                  </div>
                  <div className="avs-algo-ai">
                    <span className="avs-ai-label">How AI helps</span>
                    <p>{sig.howAIHelps}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="avs-algo-body">
              <h3>The Compound Effect of Getting These Right</h3>
              <p>
                YouTube's Shorts algorithm is a flywheel. When your Short hits good initial metrics
                in the first hour (distributed to your existing subscribers + a test batch of non-subscribers),
                the algorithm expands distribution to larger and larger audiences. A Short that achieves
                85% average view duration in the first 500 views often ends up at 2M–10M views within
                72 hours — with no paid promotion.
              </p>
              <p>
                AI-generated video is disproportionately effective at hitting these signals because the
                content never has "boring" frames. Every second of a well-prompted AI video is visually
                engaging by design. There are no dead seconds, no awkward pauses, no shaky camera
                moments — all the things that cause viewers to swipe. The medium's inherent quality
                floor is high enough to satisfy the algorithm even on the first attempt.
              </p>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            FULL PRODUCTION WORKFLOW
        ══════════════════════════════════════════════════════════ */}
        <section className="avs-section avs-workflow">
          <div className="avs-container">
            <div className="avs-section-header">
              <span className="avs-tag">Complete Workflow</span>
              <h2>The End-to-End AI Shorts Production Workflow: From Idea to 1M Views</h2>
              <p>
                This is the exact workflow that successful AI Shorts channels use in 2026.
                Every step is optimized for speed, quality, and algorithmic performance.
                The entire process — from zero to a published, optimized Short — takes under 45 minutes.
              </p>
            </div>

            <div className="avs-workflow-steps">
              {EDITING_WORKFLOW.map((step, i) => (
                <div key={step.step} className="avs-wf-step">
                  <div className="avs-wf-num-col">
                    <div className="avs-wf-num">{step.step}</div>
                    {i < EDITING_WORKFLOW.length - 1 && <div className="avs-wf-line" />}
                  </div>
                  <div className="avs-wf-content">
                    <div className="avs-wf-icon">{step.icon}</div>
                    <h3>{step.title}</h3>
                    <p>{step.detail}</p>
                    <div className="avs-wf-tip">
                      <span>💡</span> {step.tip}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="avs-workflow-cta">
              <a
                href="https://scenith.in/create-ai-content?tab=video&utm_source=tools&utm_medium=shorts-video-page&utm_campaign=ai-video-generator-youtube-shorts&utm_content=workflow-cta"
                className="avs-cta-primary"
              >
                ▶ Start Step 2 — Generate Your First Short Free →
              </a>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            ADVANCED STRATEGIES
        ══════════════════════════════════════════════════════════ */}
        <section className="avs-section avs-advanced">
          <div className="avs-container">
            <div className="avs-section-header">
              <span className="avs-tag">Advanced Tactics</span>
              <h2>6 Advanced AI Shorts Strategies Used by Channels with 500K+ Subscribers</h2>
              <p>
                Beyond basic prompt-and-publish, these are the strategies that separate
                channels growing at 10,000 subscribers/month from those stuck at 1,000.
                Each one is executable with Scenith's AI video generation tools.
              </p>
            </div>

            <div className="avs-advanced-grid">
              {ADVANCED_STRATEGIES.map((s) => (
                <div key={s.title} className="avs-adv-card">
                  <div className="avs-adv-top">
                    <span className="avs-adv-icon">{s.icon}</span>
                    <span className={`avs-adv-diff avs-diff-${s.difficulty.toLowerCase()}`}>
                      {s.difficulty}
                    </span>
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            MONETIZATION
        ══════════════════════════════════════════════════════════ */}
        <section className="avs-section avs-monetize">
          <div className="avs-container">
            <div className="avs-section-header">
              <span className="avs-tag">Revenue Breakdown</span>
              <h2>How to Actually Make Money from AI-Generated YouTube Shorts in 2026</h2>
              <p>
                Shorts monetization is widely misunderstood. Most creators focus on the wrong
                revenue stream and undermonetize massively. Here's the complete, honest breakdown
                of every income path available to an AI Shorts creator.
              </p>
            </div>

            <div className="avs-monetize-grid">
              {MONETIZATION_PATHS.map((m) => (
                <div key={m.title} className="avs-mono-card">
                  <div className="avs-mono-icon">{m.icon}</div>
                  <h3>{m.title}</h3>
                  <p>{m.description}</p>
                  <div className="avs-mono-meta">
                    <div>
                      <span>Timeline</span>
                      <strong>{m.timeline}</strong>
                    </div>
                    <div>
                      <span>Ceiling</span>
                      <strong>{m.ceiling}</strong>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            MAIN BIG CTA
        ══════════════════════════════════════════════════════════ */}
        <section className="avs-bigcta">
          <div className="avs-container">
            <div className="avs-bigcta-inner">
              <div className="avs-bigcta-bg-glow" />
              <div className="avs-bigcta-content">
                <span className="avs-bigcta-eyebrow">Free to Start · No Credit Card</span>
                <h2>Generate Your First AI Short Right Now</h2>
                <p>
                  50 free credits. 4 AI video models. 9:16 native. MP4 download.
                  Your first Short is 60 seconds away.
                </p>
                <div className="avs-bigcta-features">
                  {[
                    "✓ Kling 2.6 Pro", "✓ Veo 3.1", "✓ Wan 2.5", "✓ Grok Imagine + Audio",
                    "✓ 9:16 Aspect Ratio", "✓ Up to 1080p", "✓ Image-to-Video", "✓ Commercial Rights",
                  ].map((f) => (
                    <span key={f}>{f}</span>
                  ))}
                </div>
                <a
                  href="https://scenith.in/create-ai-content?tab=video&utm_source=tools&utm_medium=shorts-video-page&utm_campaign=ai-video-generator-youtube-shorts&utm_content=bigcta"
                  className="avs-cta-hero-btn"
                >
                  <span className="avs-btn-play">▶</span>
                  <span>Generate YouTube Shorts with AI — Free</span>
                  <span className="avs-btn-arr">→</span>
                </a>
                <p className="avs-bigcta-sub">
                  Joins thousands of Shorts creators using Scenith every week
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            FAQ
        ══════════════════════════════════════════════════════════ */}
        <section className="avs-section avs-faq">
          <div className="avs-container">
            <div className="avs-section-header">
              <span className="avs-tag">FAQ</span>
              <h2>AI Video Generator for YouTube Shorts — All Your Questions Answered</h2>
            </div>

            <div className="avs-faq-list">
              {[
                {
                  q: "What is the best AI video generator for YouTube Shorts in 2026?",
                  a: "For YouTube Shorts specifically, the best AI video generator depends on your content type. Kling 2.6 Pro produces the highest quality cinematic output — best for hero Shorts you're investing in. Wan 2.5 is the best balance of quality, speed, and cost for high-volume Shorts production (5–10 per week). Veo 3.1 from Google is optimal for realistic motion and nature content. Grok Imagine is unique in generating audio alongside video. Scenith gives you access to all four under one login with native 9:16 support."
                },
                {
                  q: "How long does it take to generate an AI YouTube Short?",
                  a: "On Scenith, AI Short generation takes 40–120 seconds depending on the model and duration. Wan 2.5 is fastest at ~40 seconds for a 5-second clip. Kling 2.6 Pro takes 80–120 seconds for the same clip but produces significantly higher quality output. Veo 3.1 Fast falls between these at 50–80 seconds. All generations run in the background — you can queue multiple Shorts simultaneously and download when complete."
                },
                {
                  q: "Can YouTube detect AI-generated video in Shorts?",
                  a: "YouTube does not have a system to detect or penalize AI-generated video content in Shorts. YouTube's content detection focuses on copyright infringement, CSAM, and spam — not on the production method of the video. Thousands of channels openly use AI-generated video for Shorts and grow without any issues. YouTube's own CEO has stated that AI-generated content is welcome on the platform as long as it complies with community guidelines."
                },
                {
                  q: "What aspect ratio should I use for YouTube Shorts?",
                  a: "YouTube Shorts requires a vertical aspect ratio. The native ratio is 9:16, which translates to dimensions of 1080x1920 pixels at full HD. Scenith's AI video generator has native 9:16 support — you select it before generating, so the output is ready for Shorts without any cropping or reformatting. Avoid generating in 16:9 (landscape) and cropping, as this significantly reduces image quality and the cropped content often looks poorly framed."
                },
                {
                  q: "How many YouTube Shorts can I generate with the free plan?",
                  a: "Scenith's free plan includes 50 credits. A 5-second Short using Wan 2.5 costs 46 credits, meaning you can generate 1 free Short on the free plan. A 5-second Short using Kling 2.6 Pro costs 64 credits. To generate more Shorts, the Creator Lite plan ($9/month) includes 300 credits — enough for 6–7 Shorts per month using Kling 2.6, or 6+ Shorts using Wan 2.5. Higher plans offer significantly more volume."
                },
                {
                  q: "What's the difference between text-to-video and image-to-video for Shorts?",
                  a: "Text-to-video generates a complete Short from a written prompt — ideal for cinematic scenes, nature footage, abstract concepts, and any content that doesn't require a specific visual starting point. Image-to-video takes a still image and animates it — ideal for product demonstrations (animate a product photo), historical photo animation, AI image animation, and portrait/face-based content. For most YouTube Shorts use cases, text-to-video is the starting point. Image-to-video unlocks a specific set of high-engagement content formats like historical scene animation and product showcases."
                },
                {
                  q: "Do AI-generated YouTube Shorts have audio?",
                  a: "By default, AI-generated Shorts from Kling, Veo, and Wan produce silent video — no audio is generated. You add music separately in your video editor (CapCut, Premiere, DaVinci). Grok Imagine is the exception: it generates contextual atmospheric audio alongside the video (rain, city sounds, ocean ambience, etc.). This built-in audio is a significant advantage for ambient and atmospheric Shorts. For Shorts with narration, you generate audio separately using Scenith's voice generation tool and combine in editing."
                },
                {
                  q: "How do I monetize a faceless YouTube Shorts channel with AI video?",
                  a: "Monetization for an AI Shorts channel has four main paths: (1) YouTube Partner Program (YPP) — requires 500 subscribers and 3,000 watch hours for basic monetization, pays $0.03–$0.07 per 1,000 Shorts views. (2) Funneling Shorts viewers to long-form content, where CPMs are $5–$20. (3) Sponsored Shorts — brands pay $200–$5,000 per integration at meaningful subscriber counts. (4) Affiliate marketing via YouTube Shopping or description links. The highest-earning AI Shorts creators use all four simultaneously."
                },
                {
                  q: "Can I use AI-generated Shorts for client work and brand projects?",
                  a: "Yes. Scenith provides full commercial rights on all AI-generated video content. You can use AI-generated Shorts for client deliverables, brand campaigns, agency projects, and any commercial purpose without restriction or attribution requirements. Many video production agencies and social media managers use Scenith's AI video generation to produce client Shorts content at a fraction of the cost of traditional video production."
                },
                {
                  q: "What makes a good YouTube Shorts prompt for AI video generation?",
                  a: "The best AI video prompts for YouTube Shorts include: (1) A clear subject ('a golden tiger', 'a skyscraper at midnight'), (2) Environment ('in a dense rainforest', 'on a cliff above stormy ocean'), (3) Lighting ('dramatic side lighting', 'neon signs reflecting in rain'), (4) Camera movement ('slow drone pullback', 'extreme close-up rotating'), (5) Mood ('cinematic, epic', 'calm, meditative'), (6) Technical spec ('9:16 vertical, ultra-detailed, 4K'). The more specific your prompt, the more predictable and high-quality the output. Generic prompts like 'beautiful nature' produce inconsistent results. Specific prompts like 'aerial shot of autumn forest canopy from above, golden and red leaves, morning fog in the valleys, slow drone descent, cinematic 9:16' produce consistently excellent Shorts."
                },
              ].map((faq, i) => (
                <details key={i} className="avs-faq-item">
                  <summary>{faq.q}</summary>
                  <div className="avs-faq-body">{faq.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            RELATED TOOLS
        ══════════════════════════════════════════════════════════ */}
        <section className="avs-section avs-related">
          <div className="avs-container">
            <div className="avs-section-header">
              <span className="avs-tag">Complete Your Stack</span>
              <h2>Everything Else Your Shorts Channel Needs</h2>
              <p>Scenith powers your entire YouTube Shorts production stack in one place.</p>
            </div>

            <div className="avs-related-grid">
              <a
                href="https://scenith.in/tools/youtube-narration-ai-voice?utm_source=tools&utm_medium=shorts-video-page&utm_campaign=ai-video-generator-youtube-shorts&utm_content=related-voice"
                className="avs-related-card"
              >
                <span className="avs-related-icon">🎙️</span>
                <div>
                  <h3>AI Voice for YouTube Narration</h3>
                  <p>Add professional narration to your Shorts. 40+ voices, 20+ languages. Generate MP3 in 3 seconds.</p>
                  <span className="avs-related-link">Explore Voice Generator →</span>
                </div>
              </a>
              <a
                href="https://scenith.in/create-ai-content?tab=image&utm_source=tools&utm_medium=shorts-video-page&utm_campaign=ai-video-generator-youtube-shorts&utm_content=related-image"
                className="avs-related-card"
              >
                <span className="avs-related-icon">🖼️</span>
                <div>
                  <h3>AI Image Generator</h3>
                  <p>Create Shorts thumbnails, channel art, and reference images for image-to-video. GPT, Imagen 4, FLUX, Grok Aurora.</p>
                  <span className="avs-related-link">Generate Images →</span>
                </div>
              </a>
              <a
                href="https://scenith.in/create-ai-content?tab=video&utm_source=tools&utm_medium=shorts-video-page&utm_campaign=ai-video-generator-youtube-shorts&utm_content=related-allvideo"
                className="avs-related-card"
              >
                <span className="avs-related-icon">🎬</span>
                <div>
                  <h3>Full AI Content Studio</h3>
                  <p>Voice + Image + Video on one platform. One credit balance. One subscription. Everything a Shorts creator needs.</p>
                  <span className="avs-related-link">Open Studio →</span>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* ── Final sticky CTA bar ── */}
        <div className="avs-sticky-bar">
          <div className="avs-container">
            <div className="avs-sticky-inner">
              <p><strong>AI Video Generator for YouTube Shorts</strong> — Free to start, no card needed.</p>
              <a
                href="https://scenith.in/create-ai-content?tab=video&utm_source=tools&utm_medium=shorts-video-page&utm_campaign=ai-video-generator-youtube-shorts&utm_content=sticky-bar"
                className="avs-cta-primary avs-cta-sm"
              >
                ▶ Generate Free Short →
              </a>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}