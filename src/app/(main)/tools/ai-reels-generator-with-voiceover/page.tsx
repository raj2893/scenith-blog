import type { Metadata } from "next";
import Link from "next/link";
import "./ai-reels-page.css";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "AI Reels Generator with Voiceover — Free AI Video + Voice Tool | Scenith",
  description:
    "Generate AI reels with automatic voiceover in seconds. Turn any text prompt into a short-form vertical video with a natural AI voice — no editing skills needed. Free to start.",
  keywords: [
    "ai reels generator",
    "ai reels with voiceover",
    "ai video with voiceover",
    "text to reels ai",
    "ai short video generator",
    "ai voiceover for reels",
    "free ai reels generator",
    "instagram reels ai generator",
    "youtube shorts ai generator",
    "tiktok video ai generator",
    "ai content creator for reels",
    "ai video voiceover tool",
    "text to short video ai",
    "ai reels maker online",
    "best ai reels generator 2026",
    "faceless reels ai",
    "ai generated reels with voice",
    "scenith ai reels",
  ],
  alternates: {
    canonical: "https://scenith.in/tools/ai-reels-generator-with-voiceover",
  },
  openGraph: {
    title: "AI Reels Generator with Voiceover — Free | Scenith",
    description:
      "Create AI reels with natural voiceover from a single text prompt. Works for Instagram, YouTube Shorts, TikTok, and Facebook Reels. Free credits on signup.",
    url: "https://scenith.in/tools/ai-reels-generator-with-voiceover",
    siteName: "Scenith",
    type: "website",
    images: [
      {
        url: "https://scenith.in/og/ai-reels-generator.jpg",
        width: 1200,
        height: 630,
        alt: "AI Reels Generator with Voiceover — Scenith",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Reels Generator with Voiceover — Free | Scenith",
    description:
      "Turn any text prompt into an AI reel with a natural voice in seconds. Free to start. No editing needed.",
    images: ["https://scenith.in/og/ai-reels-generator.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

// ─── JSON-LD Structured Data ──────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Scenith AI Reels Generator with Voiceover",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Web",
      url: "https://scenith.in/tools/ai-reels-generator-with-voiceover",
      description:
        "Generate AI-powered short-form reels with automatic voiceover from a text prompt. Supports Instagram Reels, YouTube Shorts, TikTok, and Facebook Reels.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "50 free credits on sign-up, no card required.",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "1240",
        bestRating: "5",
      },
      featureList: [
        "Text to AI video generation",
        "Natural AI voiceover (40+ voices, 20+ languages)",
        "Vertical 9:16 format for Reels / Shorts / TikTok",
        "Cinematic AI video models (Kling, Veo, Wan 2.5)",
        "MP4 download, commercial rights included",
        "No editing software required",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How do I create AI reels with voiceover?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Go to Scenith's AI Content Creator, select the Video tab for your reel and the Voice tab for voiceover. Write your script/prompt, choose a voice, and hit Generate. Your reel video and voiceover are ready in under 2 minutes and can be combined in any basic video editor or CapCut.",
          },
        },
        {
          "@type": "Question",
          name: "Can I generate AI reels for Instagram for free?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Scenith gives you 50 free credits on sign-up, no credit card needed. These credits cover both video generation and voiceover generation. You can create your first AI reel completely free.",
          },
        },
        {
          "@type": "Question",
          name: "What video aspect ratio does the AI reel generator support?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The AI video generator supports 9:16 (vertical — best for Instagram Reels, YouTube Shorts, TikTok), 16:9 (landscape — best for YouTube), and 1:1 (square — best for Facebook Reels and Instagram feed). Select your ratio before generating.",
          },
        },
        {
          "@type": "Question",
          name: "Which AI models are used for reel generation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Scenith uses Kling 2.6 Pro, Veo 3.1 (Google), Wan 2.5, Kling 2.5 Turbo, and Grok Imagine — the same models used by professional AI video creators. Grok Imagine is unique in that it also generates AI audio alongside the video.",
          },
        },
        {
          "@type": "Question",
          name: "Can I use AI-generated reels commercially?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. All content generated on Scenith comes with full commercial rights. You can post AI reels to monetised YouTube channels, use them in client campaigns, run them as paid social ads, or license them — no attribution required.",
          },
        },
        {
          "@type": "Question",
          name: "What languages does the AI voiceover support for reels?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The AI voiceover supports 20+ languages including English (US, UK, Australian, Indian), Hindi, Spanish, French, German, Arabic, Mandarin, Portuguese, Japanese, Korean, and more. Choose from Google TTS, OpenAI TTS, and Azure Neural TTS voices.",
          },
        },
      ],
    },
    {
      "@type": "HowTo",
      name: "How to Create an AI Reel with Voiceover Using Scenith",
      description:
        "Step-by-step guide to generating an AI reel with automatic voiceover on Scenith.in",
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Sign up for free",
          text: "Create a free Scenith account. You get 50 credits on signup — no card required. Credits work for both video and voice generation.",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Generate your AI voiceover",
          text: "Go to the Voice tab. Write your reel script (up to 2000 characters). Select your language, gender, and preferred voice from 40+ options. Hit Generate. Your MP3 is ready in ~3 seconds.",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Generate your AI reel video",
          text: "Switch to the Video tab. Set aspect ratio to 9:16 for vertical reels. Write a visual prompt describing the footage you want. Pick a model (Kling 2.6 Pro for best quality, Wan 2.5 for fastest). Hit Generate. Your MP4 is ready in 30–120 seconds.",
        },
        {
          "@type": "HowToStep",
          position: 4,
          name: "Combine and publish",
          text: "Drop both your MP4 and MP3 into CapCut, DaVinci Resolve, or any video editor. Sync the voiceover to the video, add captions if desired, export, and upload to Instagram, TikTok, YouTube Shorts, or Facebook Reels.",
        },
      ],
    },
  ],
};

// ─── Static data ──────────────────────────────────────────────────────────────

const PLATFORMS = [
  { icon: "📸", name: "Instagram Reels", note: "9:16 vertical · up to 90s" },
  { icon: "▶️", name: "YouTube Shorts", note: "9:16 vertical · under 60s" },
  { icon: "🎵", name: "TikTok", note: "9:16 vertical · up to 10 min" },
  { icon: "📘", name: "Facebook Reels", note: "9:16 or 1:1 · up to 60s" },
  { icon: "📌", name: "Pinterest Idea Pins", note: "9:16 vertical · max 60s" },
  { icon: "💼", name: "LinkedIn Video", note: "16:9 or 1:1 · professional" },
];

const VOICE_LANGUAGES = [
  "🇺🇸 English (US)", "🇬🇧 English (UK)", "🇦🇺 English (AU)", "🇮🇳 English (IN)",
  "🇮🇳 Hindi", "🇪🇸 Spanish", "🇫🇷 French", "🇩🇪 German",
  "🇸🇦 Arabic", "🇨🇳 Mandarin", "🇯🇵 Japanese", "🇰🇷 Korean",
  "🇧🇷 Portuguese", "🇮🇹 Italian", "🇳🇱 Dutch", "🇹🇷 Turkish",
  "🇵🇱 Polish", "🇷🇺 Russian", "🇮🇩 Indonesian", "🇻🇳 Vietnamese",
];

const VIDEO_MODELS = [
  { name: "Kling 2.6 Pro", badge: "Best Quality", color: "#7c3aed", desc: "Hollywood-grade motion, ultra-smooth 1080p. Best for premium brand reels." },
  { name: "Veo 3.1 (Google)", badge: "Most Realistic", color: "#059669", desc: "Google's flagship model. Photorealistic scenes, natural physics, and lifelike movement." },
  { name: "Wan 2.5", badge: "Fastest", color: "#2563eb", desc: "Blazing generation speed. Best when you need volume — batch reels at scale." },
  { name: "Kling 2.5 Turbo", badge: "Balanced", color: "#d97706", desc: "Great quality at lower credit cost. Ideal for daily content without breaking the bank." },
  { name: "Grok Imagine 🎵", badge: "Audio Included", color: "#db2777", desc: "The only model that auto-generates AI audio alongside video. True one-click reels." },
  { name: "Veo 3.1 Fast", badge: "Speed + Quality", color: "#0891b2", desc: "Veo quality at turbo speed. Great all-rounder for consistent daily Reels publishing." },
];

const VOICE_STYLES = [
  { icon: "🎬", name: "YouTube Intro", desc: "Energetic, punchy, hooks the viewer in 3 seconds" },
  { icon: "🧘", name: "Calm & Relaxing", desc: "Smooth ASMR-style narration for wellness reels" },
  { icon: "📣", name: "Sales & Promo", desc: "Confident, benefit-driven, urgency-building" },
  { icon: "📚", name: "Educational", desc: "Clear, measured pacing — great for how-to reels" },
  { icon: "🎮", name: "Gaming / Hype", desc: "High energy, fast-paced delivery, drops perfectly" },
  { icon: "🌍", name: "Documentary", desc: "Authoritative narrator voice, gravitas and depth" },
];

const STEPS = [
  {
    num: "01",
    icon: "✍️",
    title: "Write your script",
    body: "Type your reel script into the Voice tab. Use one of the 12 built-in prompt chips for instant inspiration — YouTube Intro, Sales Hook, Meditation, Documentary, and more. Max 2000 characters, which is roughly 3–4 minutes of audio.",
  },
  {
    num: "02",
    icon: "🎙️",
    title: "Choose a voice & generate",
    body: "Filter by language and gender across 40+ voices from Google TTS, OpenAI TTS, and Azure Neural TTS. Hit Generate. Your MP3 voiceover is ready in about 3 seconds and can be downloaded instantly.",
  },
  {
    num: "03",
    icon: "🎬",
    title: "Generate your video reel",
    body: "Switch to the Video tab. Set aspect ratio to 9:16. Describe the visuals you want — be specific. Choose a model: Kling 2.6 Pro for best quality, Wan 2.5 for speed, Grok Imagine for built-in audio. Click Generate.",
  },
  {
    num: "04",
    icon: "🎞️",
    title: "Combine, caption & publish",
    body: "Import both files into CapCut, Adobe Premiere, DaVinci Resolve, or even iMovie. Layer the voiceover over the video, add auto-captions for accessibility and virality, export at 1080p, and publish directly to your platform of choice.",
  },
];

const USECASES = [
  {
    icon: "📱",
    title: "Faceless YouTube Shorts",
    body: "You don't need to appear on camera. Generate cinematic AI footage and pair it with a compelling voiceover to build a faceless niche channel on history, finance, technology, fitness, or any topic. Some faceless creators earn over $10,000/month from AdSense alone.",
  },
  {
    icon: "🛍️",
    title: "Product Promotion Reels",
    body: "Turn a product description into a polished promo reel. Generate lifestyle footage of your product in use (via AI image-to-video), add a persuasive voiceover in your brand voice, and run it as a paid Instagram ad or organic post. No photoshoot needed.",
  },
  {
    icon: "🧠",
    title: "Educational & How-To Content",
    body: "\"Did you know\" and explainer-style reels get enormous organic reach. Use Scenith to generate a voiced explainer reel on any topic — science, history, finance, language — and publish daily without burnout. AI handles script narration; you handle the strategy.",
  },
  {
    icon: "🌍",
    title: "Multilingual Content at Scale",
    body: "Want to reach Spanish, Hindi, Arabic, or French-speaking audiences? Generate the same reel in 5 different languages using Scenith's multilingual voice library. One video concept, 5× the reach, with zero extra production cost.",
  },
  {
    icon: "💼",
    title: "Real Estate & Property Walkthroughs",
    body: "Real estate agents are using AI reels to showcase properties. Generate cinematic aerial or interior footage from a text prompt and add a professional voiceover listing the key features. Instant listing reel, every time.",
  },
  {
    icon: "🎓",
    title: "Online Course Promos",
    body: "Course creators use AI reels to generate trailer content, module preview clips, and lead-capture reels for their funnels. A 15-second AI reel with a strong hook and clear value prop can drive more sign-ups than a 5-minute explainer video.",
  },
  {
    icon: "🍽️",
    title: "Food & Lifestyle Brands",
    body: "Generate appetising food footage from a prompt (\"slow pour of espresso on marble, steam rising, golden light\") and pair it with a warm brand voice. Perfect for daily content calendars that need to stay visually consistent without daily photoshoots.",
  },
  {
    icon: "🎵",
    title: "Music Artists & DJs",
    body: "Produce lyric reels, artist announcement videos, and event promotion clips without a videographer. The Grok Imagine model even generates ambient AI audio that can serve as a music bed for your reel content.",
  },
];

const TIPS = [
  {
    title: "Lead with a hook in your voiceover script",
    body: "The first 3 seconds of a reel determine whether someone keeps watching. Open with a bold statement, a surprising fact, or a provocative question. Example: \"You've been doing this wrong your entire life.\" — then deliver the value.",
  },
  {
    title: "Match visual energy to voice pacing",
    body: "A calm, slow voiceover paired with fast-cut AI footage feels jarring. If you're using an energetic voice style, write a dynamic visual prompt with fast movement, transitions, and action. Match the mood of the voice to the energy of the footage.",
  },
  {
    title: "Use captions — always",
    body: "85% of social media video is watched without sound. Even if your voiceover is perfect, most viewers will never hear it unless you add captions. Use CapCut's auto-caption feature or a tool like Submagic after combining your Scenith files.",
  },
  {
    title: "Prompt specificity = better video",
    body: "Instead of \"a beach\", write \"slow aerial drone shot of a tropical beach at golden hour, crystal turquoise water, white sand, a few umbrellas, shallow depth of field, cinematic\". The more specific your visual prompt, the more professional the output.",
  },
  {
    title: "Build a content pipeline, not one-off reels",
    body: "The creators winning with AI reels in 2026 aren't making one video — they're building pipelines. Batch-generate 7 reels on Sunday using Scenith, pair voiceovers, schedule them via Later or Buffer, and let the algorithm work while you focus on strategy.",
  },
  {
    title: "Use the image-to-video feature for brand control",
    body: "If you need footage of a specific product, location, or character, generate an AI image first using Scenith's image generator, then pass it to the video generator as the starting frame. This gives you precise control over what appears in your reel.",
  },
];

const COMPARISONS = [
  { feature: "AI Video Generation", scenith: true, capcut: false, canva: false, invideo: false },
  { feature: "AI Voiceover (40+ voices)", scenith: true, capcut: true, canva: false, invideo: true },
  { feature: "Multilingual TTS (20+ langs)", scenith: true, capcut: false, canva: false, invideo: true },
  { feature: "Multiple AI video models", scenith: true, capcut: false, canva: false, invideo: false },
  { feature: "Image to Video", scenith: true, capcut: false, canva: false, invideo: false },
  { feature: "9:16 Vertical Reel Format", scenith: true, capcut: true, canva: true, invideo: true },
  { feature: "Commercial rights included", scenith: true, capcut: true, canva: false, invideo: true },
  { feature: "Free credits on signup", scenith: true, capcut: true, canva: true, invideo: false },
];

const FAQS = [
  {
    q: "What exactly is an AI reels generator with voiceover?",
    a: "An AI reels generator with voiceover is a tool that lets you create short-form vertical video content (reels) using artificial intelligence, along with an automatically generated spoken narration (voiceover). Instead of filming footage and recording your voice, you type a prompt — the AI generates both the video and the voice for you. Scenith does both in one platform, using state-of-the-art models like Kling 2.6, Veo 3.1, and 40+ TTS voices.",
  },
  {
    q: "Do I need any video editing skills to use this?",
    a: "No video editing skills are required to generate the AI video and voiceover on Scenith — both are one-click. However, to combine the video and audio files into a final reel, you'll need a basic tool like CapCut (free, mobile-friendly) or iMovie. This takes about 2–5 minutes and requires no technical knowledge. We recommend CapCut for absolute beginners.",
  },
  {
    q: "Can I make faceless reels with AI?",
    a: "Yes, and this is one of the most popular use cases. A faceless reel is a short video where you don't appear on camera — instead, you use stock or AI footage with a voiceover narration. With Scenith, you generate both the footage and the voice entirely with AI, making it possible to run a successful faceless content channel with zero filming equipment.",
  },
  {
    q: "How long does AI reel generation take?",
    a: "Voiceover generation takes approximately 2–4 seconds. AI video generation takes 30–120 seconds depending on the model selected. Kling 2.5 Turbo and Wan 2.5 are faster (30–60 seconds), while Kling 2.6 Pro and Veo 3.1 take longer but produce higher quality results (60–120 seconds).",
  },
  {
    q: "What resolution are the AI-generated reels?",
    a: "AI videos can be generated at 480p or 720p on the standard plan. Paid plans support 1080p resolution, which is recommended for publishing to Instagram Reels, TikTok, and YouTube Shorts for best quality ranking signals.",
  },
  {
    q: "Can I generate reels in languages other than English?",
    a: "Absolutely. Scenith's TTS engine supports 20+ languages for voiceover including Hindi, Spanish, French, German, Arabic, Mandarin, Japanese, Korean, Portuguese, Italian, Dutch, and more. This makes it one of the few tools that enables true multilingual reel production at scale.",
  },
  {
    q: "Is there a limit on how many reels I can generate?",
    a: "Free accounts get 50 credits on signup, which covers approximately 1 AI video + 1 voiceover. Paid plans start at $9/month with 300 credits — enough for roughly 5–6 full reels per month, or more if you use faster/lighter models. Credits never expire as long as your subscription is active.",
  },
  {
    q: "Can I use Scenith-generated reels to run ads?",
    a: "Yes. All content generated on Scenith comes with full commercial rights. You can use AI-generated reels as paid ads on Instagram, Facebook, TikTok, YouTube, or any other platform. No attribution required.",
  },
  {
    q: "What's the difference between Kling 2.6 Pro and Wan 2.5 for reels?",
    a: "Kling 2.6 Pro produces cinematic, high-detail motion with smooth 1080p output — ideal for premium brand reels, product showcases, and any use case where quality is the priority. Wan 2.5 is significantly faster and costs fewer credits, making it ideal for batch content creation, daily posting pipelines, or when you need to test multiple concepts quickly.",
  },
  {
    q: "Does Scenith support image-to-video for reels?",
    a: "Yes. You can upload an existing image (or generate one with Scenith's AI image generator first) and use it as the starting frame for an AI video. This gives you precise visual control — great for reels featuring specific products, characters, or branded visuals that a text prompt alone might not reliably generate.",
  },
  {
    q: "Which platform is best for posting AI reels?",
    a: "All major platforms support AI-generated content. Instagram Reels and TikTok currently have the strongest organic reach for new creators. YouTube Shorts benefits from YouTube's search algorithm, making it better for evergreen content. For B2B content, LinkedIn Video is underutilised and often gives disproportionate reach.",
  },
  {
    q: "Will Instagram or TikTok suppress AI-generated reels?",
    a: "As of 2026, neither Instagram nor TikTok algorithmically suppresses AI-generated video content. TikTok requires disclosure of AI-generated content in the description, which is a simple toggle when uploading. Instagram does not currently require disclosure. Always check each platform's latest content policies for updates.",
  },
];

const STATS = [
  { value: "2.35B", label: "Instagram Reels plays per day (2026)" },
  { value: "70B", label: "TikTok videos watched daily" },
  { value: "70%", label: "Consumers prefer video over text ads" },
  { value: "3×", label: "More engagement for vertical video vs landscape" },
  { value: "91%", label: "Users watch video on Instagram weekly" },
  { value: "$0", label: "Cost to start with Scenith free credits" },
];

// ─── Page Component ───────────────────────────────────────────────────────────

export default function AIReelsGeneratorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="reel-page">

        {/* ── NAV ── */}
        <nav className="reel-nav">
          <Link href="/" className="reel-logo">SCENITH</Link>
          <div className="reel-nav-links">
            <Link href="/tools/ai-reels-generator-with-voiceover" className="reel-nav-active">AI Reels</Link>
            <Link href="/create-ai-content?tab=voice">Voice</Link>
            <Link href="/create-ai-content?tab=image">Image</Link>
            <Link href="/create-ai-content?tab=video">Video</Link>
            <Link href="/pricing" className="reel-nav-cta-link">Pricing</Link>
          </div>
        </nav>

        {/* ─────────────────────────────────────────────────────────────────────
            HERO
        ───────────────────────────────────────────────────────────────────── */}
        <section className="reel-hero">
          <div className="reel-hero-bg-grid" aria-hidden="true" />
          <div className="reel-hero-glow reel-hero-glow-1" aria-hidden="true" />
          <div className="reel-hero-glow reel-hero-glow-2" aria-hidden="true" />

          <div className="reel-hero-inner">
            <div className="reel-hero-badge">
              <span className="reel-badge-dot" />
              Free AI Tool — No Card Required
            </div>

            <h1 className="reel-hero-h1">
              AI Reels Generator<br />
              <span className="reel-hero-gradient">with Voiceover</span>
            </h1>

            <p className="reel-hero-desc">
              Turn any text prompt into a cinematic vertical reel <em>and</em> a natural AI voiceover
              — in under 2 minutes. No camera. No mic. No editing skills.
              Works for Instagram, TikTok, YouTube Shorts, and Facebook Reels.
            </p>

            {/* Platform chips */}
            <div className="reel-platform-chips" aria-label="Supported platforms">
              {["📸 Instagram", "▶️ YouTube Shorts", "🎵 TikTok", "📘 Facebook Reels"].map(p => (
                <span key={p} className="reel-platform-chip">{p}</span>
              ))}
            </div>

            {/* ── MAIN CTA ── */}
            <div className="reel-hero-cta-group">
              <a
                href="https://scenith.in/create-ai-content?tab=video&utm_source=tools&utm_medium=micro_tool&utm_campaign=ai-reels-generator-with-voiceover"
                className="reel-cta-primary"
                rel="noopener"
              >
                <span className="reel-cta-icon">🎬</span>
                Generate AI Reel — Free
                <span className="reel-cta-arrow">→</span>
              </a>
              <a
                href="https://scenith.in/create-ai-content?tab=voice&utm_source=tools&utm_medium=micro_tool&utm_campaign=ai-reels-voiceover"
                className="reel-cta-secondary"
                rel="noopener"
              >
                🎙️ Generate AI Voiceover
              </a>
            </div>

            <p className="reel-hero-footnote">
              50 free credits on signup · No credit card · MP4 + MP3 download
            </p>

            {/* Mock phone frames */}
            <div className="reel-phones" aria-hidden="true">
              <div className="reel-phone reel-phone-left">
                <div className="reel-phone-screen">
                  <div className="reel-phone-content">
                    <div className="reel-phone-wave" />
                    <span className="reel-phone-label">🎙️ Voiceover Ready</span>
                  </div>
                </div>
              </div>
              <div className="reel-phone reel-phone-center">
                <div className="reel-phone-screen reel-phone-screen-main">
                  <div className="reel-phone-video-bg" />
                  <div className="reel-phone-overlay">
                    <div className="reel-phone-play">▶</div>
                    <span className="reel-phone-label-main">AI Reel · 9:16</span>
                  </div>
                  <div className="reel-phone-status-bar" />
                </div>
              </div>
              <div className="reel-phone reel-phone-right">
                <div className="reel-phone-screen">
                  <div className="reel-phone-content">
                    <div className="reel-phone-sparkles">✨</div>
                    <span className="reel-phone-label">Generated in 47s</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────────────
            STATS BAR
        ───────────────────────────────────────────────────────────────────── */}
        <section className="reel-stats-bar" aria-label="Short-form video statistics">
          <div className="reel-stats-inner">
            {STATS.map((s) => (
              <div key={s.value} className="reel-stat">
                <span className="reel-stat-value">{s.value}</span>
                <span className="reel-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────────────
            WHAT IS AN AI REELS GENERATOR
        ───────────────────────────────────────────────────────────────────── */}
        <section className="reel-section reel-section-alt" id="what-is">
          <div className="reel-container">
            <div className="reel-two-col">
              <div className="reel-two-col-text">
                <span className="reel-eyebrow">What is this tool?</span>
                <h2 className="reel-h2">What is an AI Reels Generator with Voiceover?</h2>
                <p>
                  An <strong>AI reels generator with voiceover</strong> is a tool that automates the two most time-consuming parts
                  of short-form video creation: producing the footage and recording the narration.
                </p>
                <p>
                  In traditional reel production, a creator needs a camera, a filming location, lighting, a microphone,
                  a script, video editing software, and hours of post-production time. The result is that most creators can
                  publish 2–3 reels per week at best.
                </p>
                <p>
                  With an AI reel generator and AI voiceover working together, a single person can produce and publish
                  <strong> 5–10 reels per day</strong> — completely hands-free. The AI handles both the visual
                  storytelling (via text-to-video models) and the spoken narration (via text-to-speech), leaving you free
                  to focus on strategy, distribution, and monetisation.
                </p>
                <p>
                  Scenith brings both capabilities under one roof: a state-of-the-art AI video generator (powered by
                  Kling 2.6, Veo 3.1, Wan 2.5, and more) and a natural-sounding AI voice engine (Google TTS, OpenAI TTS,
                  Azure Neural TTS) — all accessible with a free account and no technical skills required.
                </p>
              </div>
              <div className="reel-two-col-visual">
                <div className="reel-info-card">
                  <div className="reel-info-card-header">⚡ Why Reels in 2026?</div>
                  <ul className="reel-info-list">
                    <li>Short-form video is the #1 content format for organic reach on every major platform</li>
                    <li>Instagram Reels get 22% more interactions than regular video posts</li>
                    <li>YouTube Shorts have surpassed 70 billion daily views globally</li>
                    <li>TikTok creators with consistent posting get 3–5× more For You Page distribution</li>
                    <li>AI-generated reels are now fully allowed and monetisable on all major platforms</li>
                    <li>Faceless channels using AI content are regularly hitting 100K subscribers within 6 months</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────────────
            HOW IT WORKS
        ───────────────────────────────────────────────────────────────────── */}
        <section className="reel-section" id="how-it-works">
          <div className="reel-container">
            <span className="reel-eyebrow">Step by step</span>
            <h2 className="reel-h2">How to Create AI Reels with Voiceover</h2>
            <p className="reel-section-sub">
              Four steps. Under 5 minutes from prompt to publishable reel.
            </p>
            <div className="reel-steps">
              {STEPS.map((s) => (
                <div key={s.num} className="reel-step">
                  <div className="reel-step-num-wrap">
                    <span className="reel-step-num">{s.num}</span>
                    <span className="reel-step-icon">{s.icon}</span>
                  </div>
                  <div className="reel-step-body">
                    <h3 className="reel-step-title">{s.title}</h3>
                    <p className="reel-step-text">{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="reel-cta-center">
              <a
                href="https://scenith.in/create-ai-content?tab=video&utm_source=tools&utm_medium=how_it_works&utm_campaign=ai-reels-generator-with-voiceover"
                className="reel-cta-primary"
                rel="noopener"
              >
                🎬 Start Creating Free Reels →
              </a>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────────────
            VIDEO MODELS
        ───────────────────────────────────────────────────────────────────── */}
        <section className="reel-section reel-section-alt" id="ai-models">
          <div className="reel-container">
            <span className="reel-eyebrow">Powered by the best</span>
            <h2 className="reel-h2">AI Video Models for Reel Generation</h2>
            <p className="reel-section-sub">
              Scenith gives you access to 6 cutting-edge text-to-video models — each optimised
              for different reel styles, budgets, and publishing frequencies.
            </p>
            <div className="reel-models-grid">
              {VIDEO_MODELS.map((m) => (
                <div key={m.name} className="reel-model-card">
                  <div className="reel-model-badge" style={{ "--badge-color": m.color } as React.CSSProperties}>
                    {m.badge}
                  </div>
                  <h3 className="reel-model-name">{m.name}</h3>
                  <p className="reel-model-desc">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────────────
            VOICE SECTION
        ───────────────────────────────────────────────────────────────────── */}
        <section className="reel-section" id="ai-voiceover">
          <div className="reel-container">
            <span className="reel-eyebrow">Natural AI Voices</span>
            <h2 className="reel-h2">AI Voiceover for Every Reel Style</h2>
            <p className="reel-section-sub">
              40+ voices. 20+ languages. Three voice providers. Whether you need a
              hyped YouTube narrator or a calm meditation guide, there's a voice for every reel.
            </p>

            <div className="reel-voice-two-col">
              <div>
                <h3 className="reel-sub-h3">Voice Styles for Reels</h3>
                <div className="reel-voice-styles">
                  {VOICE_STYLES.map(vs => (
                    <div key={vs.name} className="reel-voice-style-card">
                      <span className="reel-vs-icon">{vs.icon}</span>
                      <div>
                        <strong>{vs.name}</strong>
                        <p>{vs.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="reel-sub-h3">Supported Languages</h3>
                <div className="reel-lang-grid">
                  {VOICE_LANGUAGES.map(l => (
                    <span key={l} className="reel-lang-chip">{l}</span>
                  ))}
                </div>
                <div className="reel-voice-cta-box">
                  <p>All voices are <strong>instant MP3 download</strong>. Works with any video editor, CapCut, Premiere, DaVinci, or iMovie.</p>
                  <a
                    href="https://scenith.in/create-ai-content?tab=voice&utm_source=tools&utm_medium=voice_section&utm_campaign=ai-reels-generator-with-voiceover"
                    className="reel-cta-secondary"
                    rel="noopener"
                  >
                    🎙️ Try AI Voiceover Free →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────────────
            SUPPORTED PLATFORMS
        ───────────────────────────────────────────────────────────────────── */}
        <section className="reel-section reel-section-dark" id="platforms">
          <div className="reel-container">
            <span className="reel-eyebrow reel-eyebrow-light">Platform Support</span>
            <h2 className="reel-h2 reel-h2-light">Works for Every Short-Form Platform</h2>
            <p className="reel-section-sub reel-section-sub-light">
              Generate once, publish everywhere. Every AI reel includes MP4 download with
              platform-optimised aspect ratio settings.
            </p>
            <div className="reel-platforms-grid">
              {PLATFORMS.map(p => (
                <div key={p.name} className="reel-platform-card">
                  <span className="reel-platform-icon">{p.icon}</span>
                  <strong>{p.name}</strong>
                  <span className="reel-platform-note">{p.note}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────────────
            USE CASES
        ───────────────────────────────────────────────────────────────────── */}
        <section className="reel-section" id="use-cases">
          <div className="reel-container">
            <span className="reel-eyebrow">Who uses this?</span>
            <h2 className="reel-h2">8 Ways to Use an AI Reel Generator with Voiceover</h2>
            <p className="reel-section-sub">
              From faceless channels to e-commerce brands, these are the real-world ways
              creators and businesses are using AI-generated reels in 2026.
            </p>
            <div className="reel-usecases-grid">
              {USECASES.map(uc => (
                <div key={uc.title} className="reel-usecase-card">
                  <span className="reel-usecase-icon">{uc.icon}</span>
                  <h3>{uc.title}</h3>
                  <p>{uc.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────────────
            PRO TIPS
        ───────────────────────────────────────────────────────────────────── */}
        <section className="reel-section reel-section-alt" id="tips">
          <div className="reel-container">
            <span className="reel-eyebrow">Expert Advice</span>
            <h2 className="reel-h2">6 Pro Tips for Better AI Reels</h2>
            <p className="reel-section-sub">
              The difference between an AI reel that flops and one that goes viral is
              mostly execution. Here's what separates the top 1% of AI content creators.
            </p>
            <div className="reel-tips-list">
              {TIPS.map((t, i) => (
                <div key={t.title} className="reel-tip">
                  <span className="reel-tip-num">0{i + 1}</span>
                  <div className="reel-tip-body">
                    <h3>{t.title}</h3>
                    <p>{t.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────────────
            COMPARISON TABLE
        ───────────────────────────────────────────────────────────────────── */}
        <section className="reel-section" id="comparison">
          <div className="reel-container">
            <span className="reel-eyebrow">vs the alternatives</span>
            <h2 className="reel-h2">Scenith vs CapCut vs Canva vs InVideo</h2>
            <p className="reel-section-sub">
              Not all AI reel tools are created equal. Here's how Scenith stacks up
              against the most popular alternatives for AI reel creation with voiceover.
            </p>
            <div className="reel-compare-wrap">
              <table className="reel-compare-table" aria-label="Feature comparison">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th className="reel-th-us">Scenith</th>
                    <th>CapCut AI</th>
                    <th>Canva</th>
                    <th>InVideo AI</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISONS.map(row => (
                    <tr key={row.feature}>
                      <td>{row.feature}</td>
                      <td className="reel-td-us">{row.scenith ? "✅" : "❌"}</td>
                      <td>{row.capcut ? "✅" : "❌"}</td>
                      <td>{row.canva ? "✅" : "❌"}</td>
                      <td>{row.invideo ? "✅" : "❌"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────────────
            LONG-FORM DEEP DIVE ARTICLE
        ───────────────────────────────────────────────────────────────────── */}
        <section className="reel-section reel-section-alt" id="deep-dive">
          <div className="reel-container reel-container-narrow">
            <span className="reel-eyebrow">In-depth guide</span>
            <h2 className="reel-h2">The Complete 2026 Guide to AI Reels with Voiceover</h2>

            <div className="reel-article">

              <h3>Why Short-Form Video Has Become the Most Powerful Content Format in History</h3>
              <p>
                In 2026, short-form vertical video is not just a trend — it's the dominant medium for content consumption
                on the internet. Instagram Reels, YouTube Shorts, and TikTok collectively serve over 150 billion short
                videos per day. The average person in a smartphone-first country watches between 45 and 90 minutes of
                short-form video every single day.
              </p>
              <p>
                The implication for creators and brands is enormous: the platform algorithm is actively looking for
                consistent, high-quality short-form video content to push to new audiences. A brand or creator who
                publishes 1 reel per day has a dramatically higher surface area for discovery than one publishing
                1 YouTube video per week.
              </p>
              <p>
                The traditional bottleneck was production speed. You can't film, voice, edit, and publish a high-quality
                reel every single day unless you have a full production team behind you. This is exactly the problem
                that AI-generated reels with voiceover solve.
              </p>

              <h3>The Rise of Faceless AI Channels in 2026</h3>
              <p>
                One of the defining content phenomena of 2025–2026 has been the explosion of faceless AI channels — YouTube
                channels and TikTok accounts that publish content entirely without on-camera talent. Instead, these channels
                use AI-generated video footage paired with AI voiceover narration.
              </p>
              <p>
                Some of the most successful niches for faceless AI channels include:
              </p>
              <ul className="reel-article-list">
                <li><strong>History & mysteries</strong> — "What really happened at Dyatlov Pass" over cinematic AI footage</li>
                <li><strong>Personal finance</strong> — "The 5 money habits that made me a millionaire" with illustrated visuals</li>
                <li><strong>Science facts</strong> — "What would happen if the sun disappeared" with space AI footage</li>
                <li><strong>Technology news</strong> — AI model releases, tech breakdowns, gadget reviews without a presenter</li>
                <li><strong>Fitness & wellness</strong> — Morning routine reels, supplement explainers, workout tips with calm narration</li>
                <li><strong>True crime</strong> — Narrative reels over cinematic AI-generated environments</li>
                <li><strong>Travel & destinations</strong> — AI-generated destination footage with local language voiceover</li>
                <li><strong>Motivational content</strong> — Quote reels, daily affirmations, success mindset content</li>
              </ul>
              <p>
                Channels in these niches using AI tools have grown from 0 to 100,000 subscribers in under 6 months.
                The combination of consistent publishing frequency (only possible with AI) and emotionally resonant
                content is what drives this growth.
              </p>

              <h3>Understanding AI Text-to-Video for Reels: What Actually Happens</h3>
              <p>
                When you generate an AI reel on Scenith, here's what happens under the hood. You type a text prompt
                describing the visual scene you want. This prompt is sent to a large video diffusion model — Kling 2.6 Pro,
                Veo 3.1, or Wan 2.5, depending on which you've selected. The model has been trained on billions of frames
                of video and has learned to associate language descriptions with visual patterns, motion physics, lighting,
                and cinematic composition.
              </p>
              <p>
                The model generates the video frame-by-frame, applying temporal consistency to ensure the footage flows
                smoothly without jarring cuts or flickering. The output is a fully rendered MP4 video file — typically 5
                to 10 seconds — in the aspect ratio you selected (9:16 for vertical reels).
              </p>
              <p>
                The quality of your output depends heavily on prompt quality. A weak prompt like "a beach" will give you
                generic beach footage. A strong prompt like "slow aerial cinematic drone shot over a tropical beach at
                golden hour, crystal turquoise water, white sand, no people, shallow depth of field, film grain, 4K"
                will give you footage that looks like it came from a professional nature documentary.
              </p>

              <h3>AI Voiceover Technology: How Modern TTS Has Changed the Game</h3>
              <p>
                The text-to-speech (TTS) engines available in 2026 are fundamentally different from the robotic,
                monotone synthetic voices of even 5 years ago. Modern neural TTS models — including Google's WaveNet-based
                voices, OpenAI's TTS engine, and Microsoft Azure Neural TTS — are trained on hours of real human speech
                and can accurately reproduce natural prosody, emphasis, breathing patterns, and emotional tone.
              </p>
              <p>
                For reel voiceovers, this matters enormously. A natural-sounding voice keeps viewers engaged; a robotic
                voice causes immediate abandonment. The AI voices available on Scenith have been specifically selected
                for their naturalness, expressiveness, and suitability for content creation use cases.
              </p>
              <p>
                Key considerations when selecting a voice for your reel:
              </p>
              <ul className="reel-article-list">
                <li>
                  <strong>Gender:</strong> Research suggests male voices perform slightly better in authority/finance niches,
                  while female voices perform better in wellness, education, and lifestyle. Test both.
                </li>
                <li>
                  <strong>Accent:</strong> Match the accent to your target audience. An Indian English accent performs
                  better with South Asian audiences; an Australian English voice resonates more in ANZ markets.
                </li>
                <li>
                  <strong>Pacing:</strong> Use Scenith's speed controls to adjust delivery. 1.0x for calm, educational content;
                  1.25x for energetic YouTube-style content; 0.85x for meditation and relaxation reels.
                </li>
                <li>
                  <strong>Provider:</strong> OpenAI TTS voices have the highest naturalness ratings for English content.
                  Azure Neural TTS has the widest multilingual coverage. Google TTS has the most diverse style options.
                </li>
              </ul>

              <h3>The Image-to-Video Workflow: The Most Underused Feature</h3>
              <p>
                Most creators using AI reel generators rely exclusively on text-to-video. But the most sophisticated
                AI reel creators in 2026 are using the image-to-video workflow — and it's giving them a massive quality
                and consistency advantage.
              </p>
              <p>
                Here's how it works: Instead of giving the AI a text description and hoping the visual output is right,
                you first generate a precise AI image using Scenith's image generator (with models like GPT Image 1,
                Grok Aurora, or Imagen 4). Once you have an image that exactly matches your vision, you pass it to the
                video generator as the starting frame. The AI then animates from that frame forward, producing footage
                that is far more visually consistent with your brand or concept.
              </p>
              <p>
                This is particularly powerful for:
              </p>
              <ul className="reel-article-list">
                <li>Product showcase reels — generate a perfect product image first, then animate it</li>
                <li>Character consistency — create a recurring AI character for your channel</li>
                <li>Brand visual consistency — ensure every reel has the same colour palette and aesthetic</li>
                <li>Architecture and real estate — generate photorealistic property renders that can be animated</li>
              </ul>
              <p>
                On Scenith, you can do this entire workflow in one tab: generate your image, click "Make Video from
                this Image," and proceed directly to video generation without losing your work.
              </p>

              <h3>Monetisation Strategies for AI Reel Channels in 2026</h3>
              <p>
                Creating AI reels is only valuable if you can monetise them. Here are the primary monetisation paths
                that are working for AI reel creators in 2026:
              </p>
              <ul className="reel-article-list">
                <li>
                  <strong>YouTube Shorts Fund / AdSense:</strong> YouTube pays creators through its Partner Program for
                  Shorts views. With consistent publishing and good niche selection, faceless AI Shorts channels are
                  earning $500–$5,000/month from ad revenue alone.
                </li>
                <li>
                  <strong>TikTok Creator Rewards Program:</strong> TikTok's RPM has improved significantly in 2025–2026.
                  Educational and informational content now earns 3–5× more than pure entertainment.
                </li>
                <li>
                  <strong>Instagram Reels Bonuses:</strong> Meta periodically offers bonus programs for Reels creators
                  who hit view milestones. Combined with brand deals, Instagram can be highly lucrative.
                </li>
                <li>
                  <strong>Affiliate marketing:</strong> Embed affiliate links in your video descriptions. Finance,
                  software, and health product niches have extremely high affiliate commissions that are compatible
                  with AI reel content.
                </li>
                <li>
                  <strong>Selling services to businesses:</strong> Once you've proven you can produce AI reels at volume,
                  sell this as a service to local businesses, e-commerce brands, and real estate agencies. Charge
                  $500–$2,000/month for a "daily AI reel" package.
                </li>
                <li>
                  <strong>Digital products:</strong> Build an audience with informational AI reels, then sell digital
                  products (ebooks, courses, templates) to that audience. The content-to-product funnel is one of the
                  highest-ROI models in creator monetisation.
                </li>
              </ul>

              <h3>Legal and Ethical Considerations for AI Reels in 2026</h3>
              <p>
                As AI-generated content has gone mainstream, platform policies and legal frameworks have evolved.
                Here's what every AI reel creator needs to know:
              </p>
              <ul className="reel-article-list">
                <li>
                  <strong>Disclosure requirements:</strong> TikTok requires creators to disclose AI-generated content
                  using its built-in AI content label. YouTube has introduced a similar disclosure system for
                  "synthetic media." Instagram's requirements are still evolving as of mid-2026.
                </li>
                <li>
                  <strong>Commercial rights:</strong> All content generated on Scenith comes with full commercial rights.
                  This means you can use it in paid advertising, monetised channels, and client work without restriction.
                </li>
                <li>
                  <strong>Copyright:</strong> AI-generated video and audio is not automatically copyrightable by you
                  in most jurisdictions as of 2026 — but Scenith grants you a commercial licence to use it. This is
                  sufficient for platform monetisation and advertising.
                </li>
                <li>
                  <strong>Privacy:</strong> Never use AI tools to generate reels depicting real, identifiable people
                  without their consent. Deepfakes and non-consensual synthetic media are illegal in an increasing
                  number of countries and will get your account banned.
                </li>
              </ul>

              <h3>Building a Sustainable AI Reel Production Pipeline</h3>
              <p>
                The creators who will win in the AI reel era are not those who make the best single reel — they are
                those who build the most efficient <em>pipeline</em>. Here's a scalable weekly workflow used by
                professional AI content creators:
              </p>
              <ul className="reel-article-list">
                <li>
                  <strong>Monday — Ideation:</strong> Research trending topics in your niche using Google Trends,
                  TikTok's Discover page, and Reddit. Identify 7–10 content angles for the week.
                </li>
                <li>
                  <strong>Tuesday — Script writing:</strong> Write 7–10 reel scripts (30–90 seconds each). Use
                  Claude or ChatGPT to assist with script writing, then refine for your brand voice.
                </li>
                <li>
                  <strong>Wednesday — Batch voiceover generation:</strong> Paste all 7–10 scripts into Scenith's
                  Voice tab. Generate all MP3 voiceovers in one session. Download and label them.
                </li>
                <li>
                  <strong>Thursday — Batch video generation:</strong> Write visual prompts for all 7–10 reels.
                  Generate all MP4 files in one session on Scenith's Video tab. Rename by content.
                </li>
                <li>
                  <strong>Friday — Editing and scheduling:</strong> Import all files into CapCut. Add voiceovers,
                  captions, and any overlays. Export and schedule 7–10 reels for the following week.
                </li>
              </ul>
              <p>
                With this workflow, one person producing AI reels with Scenith can consistently publish daily content
                across Instagram, TikTok, and YouTube Shorts — with only 8–10 hours of work per week.
              </p>

            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────────────
            BIG CTA SECTION
        ───────────────────────────────────────────────────────────────────── */}
        <section className="reel-section reel-section-cta" id="try-now">
          <div className="reel-container">
            <div className="reel-cta-block">
              <div className="reel-cta-glow" aria-hidden="true" />
              <span className="reel-cta-tag">Free to start</span>
              <h2 className="reel-cta-h2">
                Ready to Generate Your First<br />
                AI Reel with Voiceover?
              </h2>
              <p className="reel-cta-body">
                50 free credits on signup. No credit card. No watermark.
                Works for Instagram, TikTok, YouTube Shorts, and Facebook Reels.
                MP4 + MP3 download included.
              </p>
              <div className="reel-cta-btns">
                <a
                  href="https://scenith.in/create-ai-content?tab=video&utm_source=tools&utm_medium=big_cta&utm_campaign=ai-reels-generator-with-voiceover"
                  className="reel-cta-primary reel-cta-xl"
                  rel="noopener"
                >
                  🎬 Generate AI Reel — Free
                  <span className="reel-cta-arrow">→</span>
                </a>
                <a
                  href="https://scenith.in/create-ai-content?tab=voice&utm_source=tools&utm_medium=big_cta_voice&utm_campaign=ai-reels-generator-with-voiceover"
                  className="reel-cta-secondary reel-cta-xl-secondary"
                  rel="noopener"
                >
                  🎙️ Generate AI Voiceover — Free
                </a>
              </div>
              <p className="reel-cta-footnote">
                No credit card · 50 free credits · Commercial rights included · MP4 + MP3 download
              </p>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────────────
            FAQ
        ───────────────────────────────────────────────────────────────────── */}
        <section className="reel-section reel-section-alt" id="faq">
          <div className="reel-container reel-container-narrow">
            <span className="reel-eyebrow">Got questions?</span>
            <h2 className="reel-h2">Frequently Asked Questions</h2>
            <div className="reel-faq">
              {FAQS.map((f) => (
                <details key={f.q} className="reel-faq-item">
                  <summary className="reel-faq-q">{f.q}</summary>
                  <div className="reel-faq-a">{f.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────────────
            FOOTER CTA
        ───────────────────────────────────────────────────────────────────── */}
        <section className="reel-footer-cta">
          <div className="reel-container">
            <div className="reel-footer-cta-inner">
              <div>
                <strong>SCENITH</strong> — AI Voice · AI Image · AI Video
              </div>
              <div className="reel-footer-links">
                <Link href="/create-ai-content?tab=voice">Voice Generator</Link>
                <Link href="/create-ai-content?tab=image">Image Generator</Link>
                <Link href="/create-ai-content?tab=video">Video Generator</Link>
                <Link href="/pricing">Pricing</Link>
              </div>
              <a
                href="https://scenith.in/create-ai-content?utm_source=tools&utm_medium=footer&utm_campaign=ai-reels-generator-with-voiceover"
                className="reel-cta-primary"
                rel="noopener"
              >
                Start for Free →
              </a>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}