// app/tools/ai-video-generator-for-influencers/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import "./influencer-video.css";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "AI Video Generator for Influencers — Create Viral Content in 2026 | Scenith",
  description:
    "Create scroll-stopping AI videos for Instagram, TikTok, and YouTube. Generate B-roll, transitions, and complete influencer-style content without a camera crew. Free to start.",
  keywords: [
    "AI video generator for influencers",
    "influencer AI video maker",
    "create influencer content with AI",
    "AI video for social media influencers",
    "influencer B-roll generator AI",
    "AI video transitions for influencers",
    "Instagram reel AI generator",
    "TikTok influencer AI video",
    "YouTube Shorts AI for creators",
    "AI content for social media influencers",
    "influencer video editing AI",
    "automated influencer content",
    "AI video for brand deals",
    "influencer marketing video AI",
    "social media AI video tool 2026",
  ],
  alternates: {
    canonical: "https://scenith.in/tools/ai-video-generator-for-influencers",
  },
  openGraph: {
    title: "AI Video Generator for Influencers | Scenith",
    description:
      "Generate professional influencer-style videos with AI. Perfect for Instagram Reels, TikTok, and YouTube. No camera crew, no editing skills. 50 free credits to start.",
    url: "https://scenith.in/tools/ai-video-generator-for-influencers",
    siteName: "Scenith",
    type: "website",
    images: [
      {
        url: "https://scenith.in/og/influencer-ai-video.png",
        width: 1200,
        height: 630,
        alt: "Scenith AI Video Generator for Influencers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Video Generator for Influencers | Scenith",
    description:
      "Create viral influencer content with AI. Generate B-roll, transitions, and complete videos for Instagram, TikTok, and YouTube. Free credits available.",
    images: ["https://scenith.in/og/influencer-ai-video.png"],
  },
};

// ─── JSON-LD Structured Data ───────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Scenith AI Video Generator for Influencers",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Web",
  url: "https://scenith.in/tools/ai-video-generator-for-influencers",
  description:
    "AI video generation platform for social media influencers. Create professional B-roll, transitions, and complete videos for Instagram Reels, TikTok, and YouTube Shorts.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Free credits on signup. Paid plans from $9/month.",
  },
  featureList: [
    "Text-to-video AI for influencer content",
    "6 AI video models (Kling, Veo, Wan, Grok)",
    "9:16 portrait for Reels & TikTok",
    "16:9 landscape for YouTube",
    "5-10 second cinematic clips",
    "AI voiceover integration",
    "Trend-aware prompt suggestions",
    "Commercial rights included",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "1890",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can influencers use AI-generated videos for brand deals?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All videos generated on Scenith come with full commercial rights. You can use them in sponsored content, brand deals, UGC (user-generated content) campaigns, and any commercial context. No attribution to Scenith is required.",
      },
    },
    {
      "@type": "Question",
      name: "What's the best AI video model for Instagram Reels?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For Instagram Reels, we recommend Kling 2.5 Turbo for fast turnaround or Wan 2.5 for the best value. Always generate in 9:16 portrait aspect ratio. Grok Imagine is excellent for Reels that need audio without manual music sourcing.",
      },
    },
    {
      "@type": "Question",
      name: "How do I make my AI videos look more like authentic influencer content?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use first-person perspective prompts ('POV of someone walking through a city at golden hour'), add text overlays in CapCut, and layer trending audio. Mix AI B-roll with 1-2 authentic clips of yourself for the best engagement.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use AI to generate B-roll for my existing influencer content?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Many influencers use Scenith to generate B-roll that they layer under their talking-head clips. This transforms a simple talking video into a dynamic, professional-looking piece of content.",
      },
    },
    {
      "@type": "Question",
      name: "What aspect ratio should influencers use for different platforms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "9:16 (portrait) for Instagram Reels, TikTok, and YouTube Shorts. 16:9 (landscape) for YouTube main channel videos and Facebook. 1:1 (square) for Instagram feed posts. Scenith supports all three.",
      },
    },
    {
      "@type": "Question",
      name: "Is AI-generated influencer content allowed on Instagram and TikTok?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Both platforms allow AI-generated content with proper disclosure. Instagram requires AI content labels for realistic generations. TikTok has a built-in AI disclosure toggle. Disclosure does not reduce organic reach.",
      },
    },
  ],
};

// ─── Static Data ──────────────────────────────────────────────────────────────

const INFLUENCER_VIDEO_TYPES = [
  {
    icon: "✈️",
    title: "Travel & Lifestyle B-Roll",
    description: "Cinematic drone shots, sunset beach walks, coffee shop aesthetics, city skylines at golden hour — generate professional travel content without leaving home.",
    promptExample: "POV walking through a vibrant Tokyo street at night, neon signs reflecting in puddles, cinematic 24fps, 9:16 for Reels",
    bestFor: "Lifestyle, travel, luxury, aesthetic influencers",
  },
  {
    icon: "💄",
    title: "Beauty & Fashion Transitions",
    description: "Product close-ups, makeup application shots, outfit transitions, and luxury aesthetic videos that look like high-end brand campaigns.",
    promptExample: "Slow-motion close-up of a luxury perfume bottle being sprayed, golden liquid particles catching light, elegant, 9:16 portrait",
    bestFor: "Beauty, fashion, skincare, luxury influencers",
  },
  {
    icon: "🍳",
    title: "Food & Recipe Content",
    description: "Steaming coffee pours, cheese pulls, sizzling pans, and overhead flat lays that make followers stop scrolling and save your recipe.",
    promptExample: "Overhead cinematic shot of fresh pasta being tossed in a pan, steam rising, warm kitchen lighting, food magazine style, 9:16",
    bestFor: "Food, recipe, cooking, nutrition influencers",
  },
  {
    icon: "💪",
    title: "Fitness & Gym Motivation",
    description: "Slow-motion workout clips, gym aesthetics, transformation sequences, and motivational B-roll for fitness content.",
    promptExample: "Slow-motion shot of an athlete doing pull-ups at golden hour sunset, dramatic lighting, sweat droplets, motivational, 9:16",
    bestFor: "Fitness, gym, wellness, health influencers",
  },
  {
    icon: "🎮",
    title: "Gaming & Tech Content",
    description: "Cinematic game capture replacements, unboxing B-roll, setup aesthetics, and tech review visuals that look pro.",
    promptExample: "Close-up of mechanical keyboard RGB lights glowing in dark gaming setup, smoke machine effects, cyberpunk aesthetic, 9:16",
    bestFor: "Gaming, tech review, setup, esports influencers",
  },
  {
    icon: "🏠",
    title: "Home & Decor Inspiration",
    description: "Cozy room tours, plant aesthetics, morning light through windows, and home organization content that drives engagement.",
    promptExample: "Slow pan across a cozy living room with warm fairy lights, rain on window, soft morning light, aesthetic, 9:16",
    bestFor: "Home decor, interior design, DIY, cleaning influencers",
  },
];

const VIDEO_MODELS = [
  {
    name: "Wan 2.5",
    badge: "💰 Best Value",
    description: "Most affordable option for daily influencer content. Perfect for batch-creating B-roll for multiple posts.",
    credits: "46cr",
    speed: "40-70s",
    bestFor: "Daily posting, batch content, budget-friendly",
  },
  {
    name: "Kling 2.5 Turbo",
    badge: "⚡ Fastest",
    description: "Generate influencer B-roll in under 60 seconds. Great for trending audio challenges and time-sensitive content.",
    credits: "64cr",
    speed: "30-50s",
    bestFor: "Trending content, fast turnaround, Reels",
  },
  {
    name: "Kling 2.6 Pro",
    badge: "🎬 Premium Quality",
    description: "Cinematic B-roll that looks like high-budget influencer content. Best for brand deals and portfolio pieces.",
    credits: "64cr",
    speed: "60-90s",
    bestFor: "Brand deals, sponsored posts, premium content",
  },
  {
    name: "Veo 3.1 Fast",
    badge: "🔵 Google AI",
    description: "Photorealistic environments perfect for lifestyle and travel influencer content. Exceptional lighting and texture.",
    credits: "92cr",
    speed: "50-80s",
    bestFor: "Travel, lifestyle, outdoor content",
  },
  {
    name: "Grok Imagine",
    badge: "🎵 Audio Included",
    description: "Video + AI-composed audio from one prompt. Perfect for Reels and TikToks that need trending-style music.",
    credits: "47cr",
    speed: "60-100s",
    bestFor: "Reels, TikTok, audio-focused content",
  },
];

const PLATFORM_ASPECT_RATIOS = [
  {
    platform: "Instagram Reels",
    ratio: "9:16",
    icon: "📱",
    tips: "Use 9:16 portrait. Keep clips 5-10 seconds. Add captions in top third (avoid bottom where like/comment buttons appear).",
  },
  {
    platform: "TikTok",
    ratio: "9:16",
    icon: "🎵",
    tips: "9:16 portrait. First 3 seconds are critical. Use trending sounds. Text overlays should be large and readable.",
  },
  {
    platform: "YouTube Shorts",
    ratio: "9:16",
    icon: "▶️",
    tips: "9:16 portrait. YouTube recommends 60 seconds or less. Use #Shorts in description. High retention drives algorithm push.",
  },
  {
    platform: "Instagram Feed",
    ratio: "1:1 or 4:5",
    icon: "📸",
    tips: "Square (1:1) or vertical 4:5. Feed videos auto-play silently — use captions and visual storytelling.",
  },
  {
    platform: "YouTube Main Channel",
    ratio: "16:9",
    icon: "🎬",
    tips: "16:9 landscape. 1080p recommended. Use AI B-roll as cutaways under talking-head segments.",
  },
];

const PROMPT_TEMPLATES = [
  {
    category: "🏙️ City/Aesthetic",
    prompt: "POV walking through a rainy city street at night, neon signs reflecting in puddles, cinematic 24fps, moody atmosphere, 9:16 for Reels",
  },
  {
    category: "☕ Coffee/Cozy",
    prompt: "Close-up of coffee being poured into a ceramic mug, steam rising, warm morning light, aesthetic slow motion, 9:16 portrait",
  },
  {
    category: "✈️ Travel/Drone",
    prompt: "Aerial drone shot of turquoise water and white sand beach, golden hour lighting, cinematic, ultra-detailed 4K, 9:16",
  },
  {
    category: "💄 Beauty/Product",
    prompt: "Luxury skincare bottle on marble surface, soft natural light from window, elegant product photography style, 9:16",
  },
  {
    category: "🍳 Food/Cooking",
    prompt: "Overhead flat lay of fresh ingredients being chopped on wooden board, warm kitchen lighting, overhead view, 9:16",
  },
  {
    category: "💪 Fitness/Gym",
    prompt: "Slow-motion of someone doing deadlifts in a dark gym, dramatic side lighting, sweat droplets visible, motivational, 9:16",
  },
  {
    category: "🎮 Gaming/Setup",
    prompt: "Close-up of RGB keyboard and gaming mouse in dark room, neon purple backlight, smoke machine effect, cyberpunk, 9:16",
  },
  {
    category: "🏠 Home/Decor",
    prompt: "Slow pan across a cozy living room with warm fairy lights, book on coffee table, soft morning light, aesthetic, 9:16",
  },
  {
    category: "🌅 Sunset/Mood",
    prompt: "Sunset over ocean waves crashing on rocks, golden hour backlight, cinematic wide angle, emotional and peaceful, 9:16",
  },
  {
    category: "📚 Study/Work",
    prompt: "Desk setup with laptop, coffee, and notebook, soft lamp light, window showing city view, cozy productive aesthetic, 9:16",
  },
];

const TRENDING_HOOKS = [
  { hook: "POV: your life finally looks like a movie", type: "Lifestyle/Aesthetic" },
  { hook: "Stop scrolling — this is your sign to...", type: "Motivation/Goal" },
  { hook: "Things that just make sense 🧠", type: "Educational/List" },
  { hook: "The glow-up starts here 💅", type: "Beauty/Fashion" },
  { hook: "How I went from [X] to [Y] in 30 days", type: "Transformation" },
  { hook: "Nobody talks about this but...", type: "Controversial/Secret" },
  { hook: "I tried [trending thing] so you don't have to", type: "Review/Try-on" },
  { hook: "The secret to [desired outcome] is simpler than you think", type: "Educational" },
];

const INFLUENCER_STATS = [
  { value: "73%", label: "of influencers use AI tools daily in 2026" },
  { value: "3-5x", label: "faster content creation with AI B-roll" },
  { value: "15K+", label: "influencers using Scenith" },
  { value: "9:16", label: "optimal aspect ratio for Reels & TikTok" },
];

const COMPARISON = [
  { aspect: "Cost per video clip", traditional: "$200-2,000", ai: "$0.50-5" },
  { aspect: "Time to produce", traditional: "1-7 days", ai: "30-120 seconds" },
  { aspect: "Crew needed", traditional: "Videographer, editor", ai: "Just you" },
  { aspect: "Equipment", traditional: "Camera, lights, gimbal", ai: "A browser" },
  { aspect: "Location required", traditional: "Yes (studio or on-site)", ai: "No" },
  { aspect: "Batch production", traditional: "1-2 clips/day", ai: "50+ clips/day" },
];

// ─── Page Component ───────────────────────────────────────────────────────────

export default function AIVideoGeneratorForInfluencersPage() {
  const ctaUrl =
    "https://scenith.in/create-ai-content?utm_source=influencer-landing&utm_medium=hero-cta&utm_campaign=ai-video-influencer";

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

      <div className="ifc-page">

        {/* ─── HERO SECTION ─────────────────────────────────────────────── */}
        <section className="ifc-hero">
          <div className="ifc-hero-bg" aria-hidden="true">
            <div className="ifc-orb ifc-orb-1" />
            <div className="ifc-orb ifc-orb-2" />
            <div className="ifc-orb ifc-orb-3" />
            <div className="ifc-grid-overlay" />
          </div>
          <div className="ifc-hero-inner">
            <div className="ifc-badge-row">
              <span className="ifc-platform-badge">
                <span className="ifc-badge-dot" />
                Instagram · TikTok · YouTube
              </span>
              <span className="ifc-platform-badge ifc-badge-new">
                🔥 Influencer Edition 2026
              </span>
            </div>

            <h1 className="ifc-hero-h1">
              AI Video Generator<br />
              <span className="ifc-h1-accent">for Influencers</span>
            </h1>

            <p className="ifc-hero-sub">
              Create <strong>scroll-stopping AI videos</strong> for Instagram Reels, TikTok, and YouTube.
              Generate B-roll, transitions, and complete influencer-style content without a camera crew.
              <strong> Free to start — no editing skills needed.</strong>
            </p>

            {/* Mock showcase */}
            <div className="ifc-showcase-row" aria-hidden="true">
              {[
                { title: "Reels B-Roll", icon: "📱", ratio: "9:16" },
                { title: "Travel Content", icon: "✈️", ratio: "9:16" },
                { title: "Aesthetic Cuts", icon: "✨", ratio: "9:16" },
              ].map((item, i) => (
                <div key={i} className="ifc-showcase ifc-showcase-${i}">
                  <div className="ifc-showcase-screen">
                    <div className="ifc-showcase-content">
                      <div className="ifc-showcase-icon">{item.icon}</div>
                      <div className="ifc-showcase-label">{item.title}</div>
                      <div className="ifc-showcase-ratio">{item.ratio}</div>
                      <div className="ifc-showcase-bar" />
                      <div className="ifc-showcase-play">▶</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* ─── HUGE CTA BUTTON ───────────────────────────────────────── */}
            <div className="ifc-hero-cta-group">
              <Link
                href={ctaUrl}
                className="ifc-cta-primary ifc-cta-huge"
              >
                <span className="ifc-cta-icon">🎬</span>
                Create Your First Influencer Video Free
                <span className="ifc-cta-arrow">→</span>
              </Link>
              <span className="ifc-cta-note">
                50 free credits · 6 AI models · Full commercial rights
              </span>
            </div>

            {/* Stats */}
            <div className="ifc-stats-row">
              {INFLUENCER_STATS.map((s) => (
                <div key={s.value} className="ifc-stat">
                  <strong className="ifc-stat-val">{s.value}</strong>
                  <span className="ifc-stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── WHY INFLUENCERS NEED AI VIDEO ──────────────────────────────── */}
        <section className="ifc-section ifc-section-alt">
          <div className="ifc-container">
            <div className="ifc-section-label">The 2026 Creator Economy</div>
            <h2 className="ifc-h2">
              Why Top Influencers Are Switching to AI Video in 2026
            </h2>
            <div className="ifc-intro-grid">
              <div className="ifc-intro-text">
                <p>
                  The creator economy has never been more competitive. In 2026, over
                  <strong> 200 million influencers</strong> are creating content across Instagram,
                  TikTok, and YouTube. Standing out requires <strong>consistent, high-quality video</strong>
                  — but producing that content manually is exhausting, expensive, and time-consuming.
                </p>
                <p>
                  AI video generation has become the <strong>secret weapon</strong> of the fastest-growing
                  influencers. Here's why: instead of spending hours filming B-roll, scouting locations,
                  or hiring videographers, you can <strong>generate professional clips in seconds</strong>
                  from a text prompt. Need a cinematic coffee pour? Type it. Need a sunset beach shot?
                  Type it. Need a product showcase with perfect lighting? Type it.
                </p>
                <p>
                  The result: <strong>3-5x more content</strong> in half the time. More posts = more
                  engagement = faster growth. And with AI video quality now indistinguishable from
                  traditional footage for most use cases, your audience won't know the difference —
                  they'll just know your content looks amazing.
                </p>
                <p>
                  <strong>10,000+ influencers</strong> are already using Scenith to scale their content
                  production. Join them and post <strong>daily</strong> without burning out.
                </p>
              </div>
              <div className="ifc-intro-cards">
                {[
                  { icon: "⏱️", title: "Time Saved", val: "80%", label: "vs traditional filming" },
                  { icon: "💰", title: "Cost per Clip", val: "<$1", label: "in credits" },
                  { icon: "📈", title: "Content Output", val: "5x", label: "more posts per week" },
                ].map((c) => (
                  <div key={c.title} className="ifc-intro-card">
                    <span className="ifc-intro-card-icon">{c.icon}</span>
                    <strong>{c.title}</strong>
                    <div className="ifc-intro-card-val">{c.val}</div>
                    <div className="ifc-intro-card-label">{c.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── VIDEO TYPES FOR INFLUENCERS ────────────────────────────────── */}
        <section className="ifc-section">
          <div className="ifc-container">
            <div className="ifc-section-label">Content Types</div>
            <h2 className="ifc-h2">
              What Kind of Videos Can Influencers Make with AI?
            </h2>
            <p className="ifc-h2-sub">
              From travel B-roll to product showcases — here's how influencers are using AI video
              across every niche.
            </p>

            <div className="ifc-video-types-grid">
              {INFLUENCER_VIDEO_TYPES.map((type) => (
                <div key={type.title} className="ifc-video-type-card">
                  <div className="ifc-vt-header">
                    <span className="ifc-vt-icon">{type.icon}</span>
                    <h3>{type.title}</h3>
                  </div>
                  <p className="ifc-vt-desc">{type.description}</p>
                  <div className="ifc-vt-prompt">
                    <span className="ifc-vt-prompt-label">Prompt example:</span>
                    <span className="ifc-vt-prompt-text">"{type.promptExample}"</span>
                  </div>
                  <div className="ifc-vt-best">
                    <strong>Best for:</strong> {type.bestFor}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── HOW TO CREATE INFLUENCER VIDEOS ─────────────────────────────── */}
        <section className="ifc-section ifc-section-alt">
          <div className="ifc-container">
            <div className="ifc-section-label">Simple Workflow</div>
            <h2 className="ifc-h2">
              How to Create Influencer Videos in 3 Steps
            </h2>
            <p className="ifc-h2-sub">
              From idea to published Reel — here's the exact workflow used by top influencers.
            </p>

            <div className="ifc-steps">
              <div className="ifc-step">
                <div className="ifc-step-num">01</div>
                <div className="ifc-step-body">
                  <h3>Write or Find Your Prompt</h3>
                  <p>Use our prompt templates below or describe the vibe you want — "cozy coffee shop aesthetic," "sunset beach drone shot," "luxury product close-up." The more specific, the better.</p>
                  <div className="ifc-step-tip">💡 Start with "POV" or "slow-motion" for influencer-style results.</div>
                </div>
              </div>
              <div className="ifc-step">
                <div className="ifc-step-num">02</div>
                <div className="ifc-step-body">
                  <h3>Generate B-Roll in Seconds</h3>
                  <p>Choose your AI model (Wan 2.5 for value, Kling 2.6 Pro for premium), select 9:16 for Reels/TikTok, hit generate. Your clip will be ready in 30-120 seconds.</p>
                  <div className="ifc-step-tip">💡 Generate 3-5 clips per video for dynamic editing.</div>
                </div>
              </div>
              <div className="ifc-step">
                <div className="ifc-step-num">03</div>
                <div className="ifc-step-body">
                  <h3>Edit, Add Audio, Post</h3>
                  <p>Combine your AI clips in CapCut (free). Layer trending audio, add text overlays, and export in 9:16. Post to Reels, TikTok, or Shorts — watch your engagement grow.</p>
                  <div className="ifc-step-tip">💡 Auto-caption your video — 40% of viewers watch without sound.</div>
                </div>
              </div>
            </div>

            <div className="ifc-cta-block">
              <p>Ready to 10x your content output?</p>
              <Link
                href={ctaUrl}
                className="ifc-cta-primary"
              >
                🎬 Start Creating Influencer Videos Free
                <span className="ifc-cta-arrow">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ─── PLATFORM GUIDE ─────────────────────────────────────────────── */}
        <section className="ifc-section">
          <div className="ifc-container">
            <div className="ifc-section-label">Platform Guide</div>
            <h2 className="ifc-h2">
              Optimize Your AI Videos for Every Platform
            </h2>
            <p className="ifc-h2-sub">
              Different platforms = different rules. Here's what works where.
            </p>

            <div className="ifc-platform-grid">
              {PLATFORM_ASPECT_RATIOS.map((platform) => (
                <div key={platform.platform} className="ifc-platform-card">
                  <div className="ifc-platform-header">
                    <span className="ifc-platform-icon">{platform.icon}</span>
                    <span className="ifc-platform-name">{platform.platform}</span>
                    <span className="ifc-platform-ratio">{platform.ratio}</span>
                  </div>
                  <p className="ifc-platform-tips">{platform.tips}</p>
                </div>
              ))}
            </div>

            <div className="ifc-platform-note">
              <strong>💡 Pro Tip:</strong> Always generate in the native aspect ratio of your target
              platform. Cropping a 16:9 video to 9:16 loses critical visual information and looks
              amateur. Generate fresh clips for each platform.
            </div>
          </div>
        </section>

        {/* ─── AI VIDEO MODELS ────────────────────────────────────────────── */}
        <section className="ifc-section ifc-section-alt">
          <div className="ifc-container">
            <div className="ifc-section-label">Choose Your Model</div>
            <h2 className="ifc-h2">
              Best AI Video Models for Influencer Content
            </h2>
            <p className="ifc-h2-sub">
              Each model has different strengths. Here's how to choose based on your content style
              and posting frequency.
            </p>

            <div className="ifc-model-grid">
              {VIDEO_MODELS.map((m) => (
                <div
                  key={m.name}
                  className="ifc-model-card"
                  style={{ "--model-color": "#e1306c" } as React.CSSProperties}
                >
                  <div className="ifc-model-tag">{m.badge}</div>
                  <h3 className="ifc-model-name">{m.name}</h3>
                  <p className="ifc-model-desc">{m.description}</p>
                  <div className="ifc-model-specs">
                    <span>⚡ {m.credits}</span>
                    <span>⏱ {m.speed}</span>
                  </div>
                  <div className="ifc-model-best">
                    <strong>Best for:</strong> {m.bestFor}
                  </div>
                </div>
              ))}
            </div>

            <div className="ifc-model-recommendation">
              <h3>Our Recommendation for Influencers</h3>
              <p>
                <strong>Start with Wan 2.5</strong> — it's the most affordable (46 credits per clip)
                and perfect for daily posting. For brand deals and sponsored content that needs
                premium quality, use <strong>Kling 2.6 Pro</strong> or <strong>Veo 3.1</strong>.
                For Reels and TikToks that need music, <strong>Grok Imagine</strong> is a game-changer —
                it generates video AND audio from one prompt.
              </p>
            </div>
          </div>
        </section>

        {/* ─── PROMPT TEMPLATES ───────────────────────────────────────────── */}
        <section className="ifc-section">
          <div className="ifc-container">
            <div className="ifc-section-label">Copy & Paste</div>
            <h2 className="ifc-h2">
              10 Ready-to-Use Influencer Video Prompts
            </h2>
            <p className="ifc-h2-sub">
              Just copy, paste, and generate. These prompts are optimized for 9:16 Reels and TikTok.
            </p>

            <div className="ifc-prompts-grid">
              {PROMPT_TEMPLATES.map((prompt, i) => (
                <div key={i} className="ifc-prompt-card">
                  <div className="ifc-prompt-category">{prompt.category}</div>
                  <p className="ifc-prompt-text">"{prompt.prompt}"</p>
                  <Link href={ctaUrl} className="ifc-prompt-use">
                    Generate this →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── TRENDING HOOKS ─────────────────────────────────────────────── */}
        <section className="ifc-section ifc-section-alt">
          <div className="ifc-container">
            <div className="ifc-section-label">Growth Tactics</div>
            <h2 className="ifc-h2">
              Viral Hooks for Influencer Videos
            </h2>
            <p className="ifc-h2-sub">
              The first 3 seconds decide whether someone scrolls or stays. Use these hook formulas,
              adapted for AI video content.
            </p>

            <div className="ifc-hooks-grid">
              {TRENDING_HOOKS.map((hook, i) => (
                <div key={i} className="ifc-hook-card">
                  <div className="ifc-hook-text">"{hook.hook}"</div>
                  <div className="ifc-hook-type">{hook.type}</div>
                </div>
              ))}
            </div>

            <div className="ifc-hook-tip">
              <strong>🎯 For AI Video:</strong> Pair your hook with a matching visual prompt.
              For "POV: your life finally looks like a movie," generate a cinematic lifestyle clip.
              For "The glow-up starts here," generate a beauty or fashion transition.
            </div>
          </div>
        </section>

        {/* ─── COMPARISON: AI vs TRADITIONAL ───────────────────────────────── */}
        <section className="ifc-section">
          <div className="ifc-container">
            <div className="ifc-section-label">The Numbers</div>
            <h2 className="ifc-h2">
              AI Video vs Traditional Production for Influencers
            </h2>
            <p className="ifc-h2-sub">
              The economics of content creation have permanently changed.
            </p>

            <div className="ifc-compare-table">
              <div className="ifc-compare-header">
                <span>Factor</span>
                <span>Traditional Production</span>
                <span>AI Video (Scenith)</span>
              </div>
              {COMPARISON.map((row, i) => (
                <div key={row.aspect} className={`ifc-compare-row ${i % 2 === 0 ? "" : "ifc-compare-row-alt"}`}>
                  <span>{row.aspect}</span>
                  <span className="ifc-compare-trad">{row.traditional}</span>
                  <span className="ifc-compare-ai">{row.ai}</span>
                </div>
              ))}
            </div>

            <div className="ifc-economics-note">
              <p>
                <strong>Real talk:</strong> An influencer posting daily Reels using Scenith spends
                approximately <strong>$15-30 per month on credits</strong>. The same volume of
                content through traditional production (videographer + editor) would cost
                <strong> $2,000-5,000+ per month</strong>. This isn't just a discount — it's a
                completely different business model.
              </p>
            </div>
          </div>
        </section>

        {/* ─── INFLUENCER SUCCESS STORIES ──────────────────────────────────── */}
        <section className="ifc-section ifc-section-alt">
          <div className="ifc-container">
            <div className="ifc-section-label">Real Results</div>
            <h2 className="ifc-h2">
              Influencers Growing with Scenith
            </h2>

            <div className="ifc-testimonials">
              {[
                {
                  quote: "I was spending 4 hours a day filming B-roll for my lifestyle content. Now I generate it in 10 minutes. My engagement actually went up because I can post 3x more often.",
                  name: "Jessica L.",
                  platform: "Lifestyle Creator, 280K followers",
                },
                {
                  quote: "The AI video generator saved my content calendar. I batch-generate 20 clips on Sunday and have content for the whole week. Best investment for my business.",
                  name: "Marcus T.",
                  platform: "Fitness Influencer, 150K followers",
                },
                {
                  quote: "My brand deals require high-production B-roll. Kling 2.6 Pro delivers footage that looks like I hired a $5k videographer. My sponsors love it.",
                  name: "Sophia R.",
                  platform: "Beauty Creator, 500K followers",
                },
              ].map((t, i) => (
                <div key={i} className="ifc-testimonial">
                  <p className="ifc-testimonial-quote">"{t.quote}"</p>
                  <div className="ifc-testimonial-author">
                    <strong>{t.name}</strong>
                    <span>{t.platform}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── WORKFLOW INTEGRATION ────────────────────────────────────────── */}
        <section className="ifc-section">
          <div className="ifc-container">
            <div className="ifc-section-label">Pro Workflow</div>
            <h2 className="ifc-h2">
              The Complete Influencer AI Video Workflow
            </h2>
            <p className="ifc-h2-sub">
              How top influencers integrate AI video into their content pipeline.
            </p>

            <div className="ifc-workflow-blocks">
              <div className="ifc-workflow-block">
                <h3>📱 Step 1: Plan Your Weekly Content</h3>
                <p>Choose 7-10 topics for the week. Write scripts or bullet points for each. Use trending audio and hooks from the sections above. Batch planning saves hours of daily decision fatigue.</p>
              </div>
              <div className="ifc-workflow-block">
                <h3>🎬 Step 2: Generate B-Roll in Scenith</h3>
                <p>For each topic, generate 3-5 AI video clips. Use 9:16 aspect ratio. Mix clip types — wide shots, close-ups, and transitions. Generate everything in one sitting (under 30 minutes for a week of content).</p>
              </div>
              <div className="ifc-workflow-block">
                <h3>✂️ Step 3: Edit in CapCut (10 minutes/video)</h3>
                <p>Import your AI clips. Add trending audio from CapCut's library. Use auto-captions. Add transitions between clips. Export in 1080x1920 (9:16). Save as a template for next week.</p>
              </div>
              <div className="ifc-workflow-block">
                <h3>📤 Step 4: Schedule & Post</h3>
                <p>Use Meta Business Suite for Instagram, TikTok's scheduler, or Later. Post 1-2 Reels daily for best algorithmic growth. Respond to comments within the first hour to boost engagement signals.</p>
              </div>
            </div>

            <div className="ifc-cta-block">
              <p>Ready to streamline your content creation?</p>
              <Link
                href={ctaUrl}
                className="ifc-cta-primary"
              >
                🎬 Start Your AI Influencer Workflow
                <span className="ifc-cta-arrow">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ─── FAQ ────────────────────────────────────────────────────────── */}
        <section className="ifc-section ifc-section-alt">
          <div className="ifc-container">
            <div className="ifc-section-label">FAQ</div>
            <h2 className="ifc-h2">Influencer AI Video — Frequently Asked Questions</h2>

            <div className="ifc-faq">
              {[
                {
                  q: "Can I use AI-generated videos for sponsored posts and brand deals?",
                  a: "Yes. All videos generated on Scenith come with full commercial rights. You can use them in sponsored content, brand partnerships, UGC campaigns, and any paid collaboration. Most brands actually prefer the consistency and quality of AI-generated B-roll.",
                },
                {
                  q: "Will my followers know I'm using AI video?",
                  a: "Probably not — and if they do, most don't care. The 2026 audience cares about value and entertainment, not production method. As long as you're transparent about AI use when required (platform policies), there's no negative impact on engagement.",
                },
                {
                  q: "What's the best way to combine AI B-roll with my authentic content?",
                  a: "The winning formula: start with 2-3 seconds of authentic footage (your face, your voice), then cut to AI B-roll that illustrates what you're saying. Return to authentic footage at the end. This hybrid approach builds trust while scaling production.",
                },
                {
                  q: "Can I generate voiceover to go with my AI videos?",
                  a: "Yes! Scenith's AI Voice tab generates natural-sounding voiceovers in 40+ voices. Download MP3 and layer it over your AI B-roll in CapCut. This is how top faceless and talking-head influencers create complete videos.",
                },
                {
                  q: "What's the optimal length for AI video clips in Reels?",
                  a: "5-10 seconds per clip. Use 3-5 clips per 30-second Reel. Keep the pacing fast — Instagram's algorithm favors videos with high completion rates. AI clips should support your narration, not replace it entirely.",
                },
                {
                  q: "Do I need to disclose AI-generated content on Instagram?",
                  a: "Instagram requires disclosure for realistic AI-generated content. Use the 'AI info' label in the advanced settings when uploading. This does not reduce reach — it's simply platform compliance. TikTok has a similar 'AI-generated' toggle.",
                },
                {
                  q: "Which AI model is best for beauty and fashion content?",
                  a: "Kling 2.6 Pro and Veo 3.1 produce the highest quality product shots and close-ups. For fast turnaround (daily posts), Wan 2.5 or Kling 2.5 Turbo are excellent choices. Grok Imagine is great for Reels that need trending audio.",
                },
                {
                  q: "How many AI video clips should I generate per week?",
                  a: "Top influencers generate 20-50 clips per week. This allows for 10-15 Reels/TikToks plus testing different visuals. With Scenith's credit system, 50 clips cost $5-15 depending on model choice — dramatically cheaper than traditional production.",
                },
                {
                  q: "Can I use AI to generate before/after transformation videos?",
                  a: "Yes. Generate two clips — one representing 'before' (e.g., dim lighting, cluttered space) and one for 'after' (bright, organized). Use CapCut's transition effects between them. This is extremely popular for fitness, home decor, and beauty content.",
                },
                {
                  q: "Is AI video allowed on the Instagram Creator account?",
                  a: "Yes. Instagram permits AI-generated content with proper disclosure. Many top creators in the Creator account program use AI B-roll daily. The key is adding value — AI is a tool, not a replacement for your authentic voice and expertise.",
                },
              ].map((item, i) => (
                <details key={i} className="ifc-faq-item">
                  <summary className="ifc-faq-q">{item.q}</summary>
                  <p className="ifc-faq-a">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FINAL MASSIVE CTA ──────────────────────────────────────────── */}
        <section className="ifc-final-cta">
          <div className="ifc-final-cta-bg" aria-hidden="true">
            <div className="ifc-orb ifc-orb-final-1" />
            <div className="ifc-orb ifc-orb-final-2" />
          </div>
          <div className="ifc-container ifc-final-cta-inner">
            <div className="ifc-final-badge">🚀 Join 15,000+ influencers</div>
            <h2 className="ifc-final-h2">
              Stop Filming B-Roll.<br />
              <span className="ifc-h1-accent">Start Generating It.</span>
            </h2>
            <p className="ifc-final-sub">
              50 free credits. 6 AI video models. One platform.
              Generate, edit, post — without burning out.
            </p>
            <Link
              href={ctaUrl}
              className="ifc-cta-primary ifc-cta-xl"
            >
              <span className="ifc-cta-icon">🎬</span>
              Create Your First Influencer Video Free
              <span className="ifc-cta-arrow">→</span>
            </Link>
            <div className="ifc-final-features">
              {["📱 9:16 for Reels", "🎬 6 AI Models", "⚡ 30-120s Generation", "💰 From $0.50/clip", "📥 Full Commercial Rights"].map((f) => (
                <span key={f} className="ifc-final-feat">{f}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ─── RELATED TOOLS ──────────────────────────────────────────────── */}
        <section className="ifc-section">
          <div className="ifc-container">
            <div className="ifc-section-label">More Tools</div>
            <h2 className="ifc-h2">Complete Your Influencer Toolkit</h2>
            <div className="ifc-related-grid">
              {[
                { icon: "🎙️", title: "AI Voice Generator", desc: "Add voiceover to your Reels", href: "/create-ai-content?tab=voice&utm_source=influencer-landing&utm_medium=related" },
                { icon: "🖼️", title: "AI Image Generator", desc: "Thumbnails & feed posts", href: "/create-ai-content?tab=image&utm_source=influencer-landing&utm_medium=related" },
                { icon: "💬", title: "Add Subtitles to Videos", desc: "Auto-caption your content", href: "/tools/add-subtitles-to-videos?utm_source=influencer-landing&utm_medium=related" },
              ].map((tool) => (
                <Link
                  key={tool.title}
                  href={`https://scenith.in${tool.href}`}
                  className="ifc-related-card"
                >
                  <span className="ifc-related-icon">{tool.icon}</span>
                  <strong className="ifc-related-title">{tool.title}</strong>
                  <p className="ifc-related-desc">{tool.desc}</p>
                  <span className="ifc-related-arrow">→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

      </div>
    </>
  );
}