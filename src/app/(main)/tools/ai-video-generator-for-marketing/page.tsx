import type { Metadata } from "next";
import Link from "next/link";
import "./ai-video-marketing.css";

// ─── SEO Metadata ──────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "AI Video Generator for Marketing — Create Ads, Reels & Promo Videos Free | Scenith",
  description:
    "Generate high-converting marketing videos with AI in seconds. Create social media ads, product promos, brand stories, and viral Reels using Kling, Veo 3.1 & Wan 2.5. No editing skills needed. Free to start.",
  keywords: [
    "AI video generator for marketing",
    "AI marketing video maker",
    "generate marketing videos AI",
    "AI video ads generator",
    "social media video AI",
    "product promo video AI",
    "AI video creator free",
    "text to video marketing",
    "AI video for business",
    "automated marketing video",
    "AI Reels generator",
    "short form video AI",
    "video ad creator AI",
    "brand video AI generator",
    "AI video content marketing 2025",
    "Kling AI video",
    "Veo 3 video generator",
    "Wan 2.5 AI video",
  ],
  openGraph: {
    title: "AI Video Generator for Marketing — Scenith",
    description:
      "Turn text prompts into cinematic marketing videos. Ads, Reels, promos — ready in under 2 minutes. Free to start.",
    url: "https://scenith.in/tools/ai-video-generator-for-marketing",
    siteName: "Scenith",
    type: "website",
    images: [
      {
        url: "https://scenith.in/og/ai-video-marketing.jpg",
        width: 1200,
        height: 630,
        alt: "Scenith AI Video Generator for Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Video Generator for Marketing — Scenith",
    description:
      "Create scroll-stopping marketing videos with AI. No editing skills. No camera. Just a prompt.",
    images: ["https://scenith.in/og/ai-video-marketing.jpg"],
  },
  alternates: {
    canonical: "https://scenith.in/tools/ai-video-generator-for-marketing",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// ─── Structured Data ────────────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://scenith.in/tools/ai-video-generator-for-marketing",
      url: "https://scenith.in/tools/ai-video-generator-for-marketing",
      name: "AI Video Generator for Marketing",
      description:
        "Generate high-converting marketing videos with AI in seconds using Kling, Veo 3.1, Wan 2.5, and Grok Imagine. Free to start.",
      inLanguage: "en-US",
      isPartOf: { "@id": "https://scenith.in" },
      datePublished: "2025-01-01",
      dateModified: "2026-04-06",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://scenith.in" },
          { "@type": "ListItem", position: 2, name: "Tools", item: "https://scenith.in/tools" },
          {
            "@type": "ListItem",
            position: 3,
            name: "AI Video Generator for Marketing",
            item: "https://scenith.in/tools/ai-video-generator-for-marketing",
          },
        ],
      },
    },
    {
      "@type": "SoftwareApplication",
      name: "Scenith AI Video Generator",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Free to start. Paid plans from $9/mo.",
      },
      featureList: [
        "Text-to-video generation",
        "Image-to-video animation",
        "Multiple AI models (Kling 2.6, Veo 3.1, Wan 2.5, Grok Imagine)",
        "16:9, 9:16, 1:1 aspect ratios",
        "Up to 1080p resolution",
        "MP4 download",
        "AI-generated audio",
        "Commercial use rights",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Can I use AI-generated marketing videos commercially?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. All videos generated on Scenith come with full commercial rights. You can use them in paid ads, client campaigns, social media posts, and any other commercial context without attribution.",
          },
        },
        {
          "@type": "Question",
          name: "What AI models are used to generate marketing videos?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Scenith uses Kling 2.6 Pro, Kling 2.5 Turbo, Veo 3.1, Veo 3.1 Fast, Wan 2.5, and Grok Imagine — the most capable video generation models available in 2026.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to generate a marketing video with AI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most marketing videos are ready in 30–120 seconds depending on model and duration. Wan 2.5 is fastest; Kling 2.6 Pro and Veo 3.1 take slightly longer but produce higher quality.",
          },
        },
        {
          "@type": "Question",
          name: "What video formats and aspect ratios are supported?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Scenith supports 16:9 (landscape for YouTube/LinkedIn ads), 9:16 (vertical for Reels/TikTok/Shorts), and 1:1 (square for Instagram/Facebook). Videos export as MP4 at up to 1080p.",
          },
        },
        {
          "@type": "Question",
          name: "Is there a free plan for AI marketing video generation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Free accounts get 1 video generation to test the platform. Paid plans start at $9/month and include 300 credits covering video, image, and voice generation.",
          },
        },
      ],
    },
  ],
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const USE_CASES = [
  {
    icon: "📱",
    title: "Instagram & TikTok Reels",
    description:
      "Generate 9:16 vertical videos optimized for Reels and TikTok. Hook viewers in the first frame, carry them through the story, leave them wanting more — all from a single text prompt.",
    stat: "3× higher reach",
    statLabel: "vs static posts",
  },
  {
    icon: "🛒",
    title: "E-commerce Product Promos",
    description:
      "Turn your product description into a cinematic promo video. No product shoot. No studio. Just describe what you sell, add context, and get a professional-looking video ad in under 2 minutes.",
    stat: "49% more buyers",
    statLabel: "when video is on product page",
  },
  {
    icon: "📣",
    title: "Paid Social & Display Ads",
    description:
      "Generate scroll-stopping video creatives for Meta, Google, LinkedIn, and TikTok Ads. Test multiple hooks and angles fast, iterate without a creative team, and scale what converts.",
    stat: "86% of marketers",
    statLabel: "use video for lead generation",
  },
  {
    icon: "🏢",
    title: "Brand Storytelling",
    description:
      "Craft cinematic brand films that communicate your values, origin story, or vision. Use Veo 3.1 for documentary-style visuals or Kling 2.6 Pro for polished commercial aesthetics.",
    stat: "5× more brand recall",
    statLabel: "vs text-only content",
  },
  {
    icon: "📧",
    title: "Email & Landing Page Video",
    description:
      "Embed an AI video in your landing page or email campaign. Video in email increases click-through rate by up to 300%. Now you can produce one in the time it takes to write a paragraph.",
    stat: "300% more clicks",
    statLabel: "with video in email",
  },
  {
    icon: "📺",
    title: "YouTube Pre-roll Ads",
    description:
      "Generate 5–10 second pre-roll ads that hook viewers before the skip button appears. Describe your CTA, your hook, your brand — and let AI render the cinematic moment that drives action.",
    stat: "Top 5s = everything",
    statLabel: "in YouTube pre-roll",
  },
  {
    icon: "🤝",
    title: "Sales Enablement Videos",
    description:
      "Equip your sales team with personalized video content for outreach. Use AI to quickly generate contextual video for different industries, personas, and pain points — at scale.",
    stat: "26% better close rate",
    statLabel: "when reps use video",
  },
  {
    icon: "🎓",
    title: "Webinar & Event Promos",
    description:
      "Promote your next webinar, conference, or product launch with a professionally rendered cinematic video teaser. Generate in seconds, post everywhere, drive maximum registrations.",
    stat: "2× more signups",
    statLabel: "with video event promos",
  },
];

const MODELS = [
  {
    id: "kling-v2.6-pro",
    name: "Kling 2.6 Pro",
    badge: "Best Quality",
    badgeColor: "#6355dc",
    description:
      "The gold standard for commercial marketing videos. Produces hyper-realistic motion, natural object physics, and cinematic color grading. Best for brand films, product commercials, and high-ticket ad creative.",
    tags: ["Ultra Realistic", "1080p", "Commercial"],
  },
  {
    id: "veo3.1",
    name: "Veo 3.1",
    badge: "Google's Best",
    badgeColor: "#0f9d58",
    description:
      "Google DeepMind's flagship video model. Exceptional at following complex prompts with multiple subjects, precise camera angles, and documentary-style storytelling. Perfect for brand narratives and explainer videos.",
    tags: ["Prompt Following", "Complex Scenes", "Documentary"],
  },
  {
    id: "grok-imagine",
    name: "Grok Imagine 🎵",
    badge: "With AI Audio",
    badgeColor: "#dc2626",
    description:
      "The only model that generates synchronized AI audio alongside the video — ambient sound, music, and effects included. Ideal for social media ads, Reels, and any content where sound is part of the hook.",
    tags: ["AI Audio", "Social Media", "Viral Content"],
  },
  {
    id: "wan2.5",
    name: "Wan 2.5",
    badge: "Fastest",
    badgeColor: "#d97706",
    description:
      "Optimized for speed without sacrificing quality. Delivers results 30–40% faster than other models. Best for high-volume creative testing, A/B ad variants, and marketers who need to iterate fast.",
    tags: ["Speed", "Volume Testing", "Low Cost"],
  },
  {
    id: "kling-v2.5-turbo",
    name: "Kling 2.5 Turbo",
    badge: "Best Value",
    badgeColor: "#7c3aed",
    description:
      "The ideal balance of quality and speed for everyday marketing use. Produces polished, professional results in 60–90 seconds at a lower credit cost. Perfect for consistent content pipeline management.",
    tags: ["Value", "Consistent", "Pipeline"],
  },
  {
    id: "veo3.1-fast",
    name: "Veo 3.1 Fast",
    badge: "Google Fast",
    badgeColor: "#059669",
    description:
      "Google's speed-optimized Veo variant. Retains the prompt comprehension and visual coherence of the full model at roughly half the generation time. Great for agencies managing multiple client briefs.",
    tags: ["Fast", "Agencies", "Multi-client"],
  },
];

const PROMPT_EXAMPLES = [
  {
    category: "Product Ad",
    color: "#6355dc",
    prompt:
      "Cinematic 360° product reveal of a premium skincare serum bottle on a black marble surface, golden oil droplets falling in slow motion, luxury perfume commercial aesthetic, warm studio lighting, 4K",
  },
  {
    category: "Brand Film",
    color: "#0f9d58",
    prompt:
      "Documentary-style montage of diverse hands building something together, timelapse construction footage mixed with close-up human moments, emotional orchestral swell, sunrise golden hour, brand manifesto tone",
  },
  {
    category: "Social Reel Hook",
    color: "#dc2626",
    prompt:
      "Fast-cut POV shot of opening a mystery package, revealing a glowing product inside, dramatic reveal lighting, trending Reel aesthetic, 9:16 vertical format, neon-accent color grade",
  },
  {
    category: "Event Promo",
    color: "#d97706",
    prompt:
      "High-energy conference promo video — crowd cheering in a packed auditorium, speaker on stage with LED backdrop, dynamic fast cuts between speakers and audience reactions, cinematic wide and tight shots",
  },
  {
    category: "SaaS/Tech Ad",
    color: "#7c3aed",
    prompt:
      "Clean motion graphic of a dashboard UI coming to life — charts animating, real-time data flowing, a cursor clicking through a sleek dark interface, product demo aesthetic, blue accent glow",
  },
  {
    category: "E-commerce Video",
    color: "#0891b2",
    prompt:
      "Lifestyle video of a woman unboxing a sustainable fashion brand package at a sunlit window, slow motion fabric reveal, earthy warm tones, authentic documentary feel, no logos just ambiance",
  },
];

const STAT_BLOCKS = [
  { value: "91%", label: "of consumers want more video from brands they follow" },
  { value: "2.5×", label: "higher engagement for video vs image on LinkedIn Ads" },
  { value: "82%", label: "of global internet traffic will be video by end of 2026" },
 
  { value: "54%", label: "more brand awareness generated by video marketing campaigns" },
];

const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Write Your Prompt",
    description:
      "Describe your marketing video in plain language. Include the mood, setting, subject, camera movement, and style. The more specific, the better your output. You can also use one of our curated marketing prompts to start.",
    tip: "💡 Pro tip: Start with the camera angle, then describe the subject, then the mood. 'Close-up of a hand holding...' outperforms 'A video of a hand holding...' every time.",
  },
  {
    step: "02",
    title: "Choose Your Model & Format",
    description:
      "Pick from 6 state-of-the-art AI video models. Choose your aspect ratio — 16:9 for YouTube and LinkedIn, 9:16 for Reels and TikTok, 1:1 for Instagram feed. Set duration: 5 or 10 seconds.",
    tip: "💡 Pro tip: Use Grok Imagine for Reels (has AI audio). Use Kling 2.6 Pro or Veo 3.1 for high-end commercial work. Wan 2.5 for fast iteration and A/B testing.",
  },
  {
    step: "03",
    title: "Generate & Iterate",
    description:
      "Hit generate and your video renders in 30–120 seconds. Not happy with the result? Adjust your prompt, try a different model, or change the aspect ratio. Credits are affordable enough to iterate freely.",
    tip: "💡 Pro tip: Generate 3–4 variations of the same concept with slightly different prompts. Pick the best one. This is faster and cheaper than a traditional video production revision cycle.",
  },
  {
    step: "04",
    title: "Download & Deploy",
    description:
      "Download your MP4 in up to 1080p resolution. Drop it directly into Meta Ads Manager, Google Display, your email campaign, landing page, or Reels — no editing software required. Full commercial rights included.",
    tip: "💡 Pro tip: For ads, pair your AI video with AI-generated voiceover from Scenith's voice tab. Same credits, same platform — complete video ad in one session.",
  },
];

const COMPARISON_ROWS = [
  { feature: "Time to first video", traditional: "Days–weeks", agency: "3–5 business days", scenith: "Under 2 minutes" },
  { feature: "Cost per video", traditional: "$500–$5,000", agency: "$800–$3,000", scenith: "Pennies per credit" },
  { feature: "Iteration speed", traditional: "Slow (revision rounds)", agency: "Slow (approval chain)", scenith: "Instant (just reprompt)" },
  { feature: "Volume capacity", traditional: "Limited by crew", agency: "Limited by budget", scenith: "Unlimited" },
  { feature: "Commercial rights", traditional: "Depends on contract", agency: "Negotiated separately", scenith: "Always included" },
  { feature: "A/B creative testing", traditional: "Impractical", agency: "Expensive", scenith: "Native workflow" },
  { feature: "Equipment needed", traditional: "Camera, crew, studio", agency: "Managed by agency", scenith: "Just a browser" },
  { feature: "Languages/Voiceover", traditional: "Extra cost", agency: "Extra cost", scenith: "AI voice included" },
];

const FAQ_ITEMS = [
  {
    q: "What makes AI video generation different for marketing in 2026?",
    a: "In 2026, AI video models have crossed a critical threshold — they now produce footage that is visually indistinguishable from professionally shot video for most marketing use cases. Models like Kling 2.6 Pro and Veo 3.1 understand complex prompt instructions, simulate realistic lighting and physics, and maintain visual coherence across the entire clip. For marketers, this means you no longer need a production budget to create high-quality video content. You need a prompt and 90 seconds.",
  },
  {
    q: "Can I generate vertical video for TikTok, Instagram Reels, and YouTube Shorts?",
    a: "Absolutely. All AI models on Scenith support 9:16 aspect ratio — the native format for TikTok, Instagram Reels, YouTube Shorts, and Snapchat. Simply select 9:16 in the aspect ratio dropdown before generating. For maximum impact on Reels, try Grok Imagine which includes AI-generated audio synchronized with the visuals.",
  },
  {
    q: "How do I write a good marketing video prompt?",
    a: "The most effective marketing video prompts follow a structure: [Camera angle/movement] + [Subject/Product] + [Setting/Environment] + [Mood/Lighting] + [Style Reference]. Example: 'Slow push-in shot of a luxury watch on a dark velvet surface, golden reflections, candlelight ambiance, high-fashion commercial aesthetic, ultra-sharp 4K'. Avoid vague prompts like 'make a video about my product' — specificity is everything.",
  },
  {
    q: "What resolution do marketing videos generate at?",
    a: "Videos generate at up to 1080p Full HD resolution depending on the model. Kling 2.6 Pro and Veo 3.1 support 1080p output. Wan 2.5 and Kling 2.5 Turbo generate at 720p–1080p. All outputs are MP4 files suitable for direct upload to ad platforms, social media, websites, and email campaigns.",
  },
  {
    q: "Can I animate an existing product image into a video?",
    a: "Yes — this is one of the most powerful features for e-commerce marketers. Use the Image-to-Video mode: upload a product photo or any still image, write a prompt describing how you want it to move or what scene to create around it, and the AI generates a video with your image as the starting frame. This is how you turn a product shot into a product ad without a video shoot.",
  },
  {
    q: "Is there a limit to how many marketing videos I can generate?",
    a: "Free accounts receive 1 video to test the platform. Paid plans start at $9/month (Creator Lite) with 300 credits that cover video, image, and voice generation. A 5-second Wan 2.5 video costs 46 credits; a 5-second Kling 2.6 Pro costs 64 credits. Higher-tier plans offer more credits and lower effective cost-per-video for agencies and power users.",
  },
  {
    q: "How does Scenith compare to RunwayML, Pika, or Sora for marketing?",
    a: "Scenith's differentiation is breadth: you get multiple AI video models (Kling, Veo, Wan, Grok) under one credit balance, alongside AI image generation and AI voiceover. Most competitors specialize in video only, requiring you to pay separate subscriptions for voice and image. For marketers who need a full creative toolkit — not just video — Scenith is significantly more cost-effective.",
  },
  {
    q: "Do I need any video editing experience to use Scenith?",
    a: "Zero. The entire workflow is text-based. You write what you want, choose settings, click generate, and download. There is no timeline, no keyframing, no codec knowledge required. If you can write a sentence, you can produce a marketing video on Scenith.",
  },
  {
    q: "Can marketing agencies use Scenith for client work?",
    a: "Yes, and many do. Agencies use Scenith to rapidly prototype video concepts for client approval before committing to production budgets, generate A/B creative variants for paid ad campaigns, produce social media content calendars at scale, and deliver video assets for clients who cannot afford traditional video production. All content carries full commercial rights.",
  },
  {
    q: "What is the best AI model for high-end luxury brand videos?",
    a: "For luxury brand aesthetics — perfume, fashion, automotive, hospitality — we recommend Kling 2.6 Pro or Veo 3.1 (Full). These models produce the most cinematic color grading, realistic material surfaces, and natural lighting that luxury brands demand. Pair with a detailed prompt referencing luxury visual references: 'Louis Vuitton campaign aesthetic', 'Chanel No. 5 commercial style', etc.",
  },
];

// ─── Page Component ────────────────────────────────────────────────────────────

export default function AIVideoGeneratorForMarketing() {
  const CTA_URL =
    "https://scenith.in/create-ai-content?tab=video&utm_source=tools&utm_medium=landing-page&utm_campaign=ai-video-generator-for-marketing";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="avm-page">

        {/* ── Breadcrumb ── */}
        <nav className="avm-breadcrumb" aria-label="Breadcrumb">
          <ol>
            <li><a href="https://scenith.in">Scenith</a></li>
            <li aria-hidden>/</li>
            <li><a href="https://scenith.in/tools">Tools</a></li>
            <li aria-hidden>/</li>
            <li aria-current="page">AI Video Generator for Marketing</li>
          </ol>
        </nav>

        {/* ════════════════════════════════════════════
            HERO
        ════════════════════════════════════════════ */}
        <section className="avm-hero" aria-label="Hero section">
          <div className="avm-hero-bg" aria-hidden="true">
            <div className="avm-hero-orb avm-hero-orb-1" />
            <div className="avm-hero-orb avm-hero-orb-2" />
            <div className="avm-hero-orb avm-hero-orb-3" />
            <div className="avm-hero-grid" />
          </div>

          <div className="avm-hero-inner">
            <div className="avm-hero-badge" aria-label="Feature badge">
              <span className="avm-badge-dot" aria-hidden="true" />
              <span>Powered by Kling 2.6 · Veo 3.1 · Wan 2.5 · Grok Imagine</span>
            </div>

            <h1 className="avm-hero-h1">
              AI Video Generator
              <br />
              <em>Built for Marketers</em>
            </h1>

            <p className="avm-hero-sub">
              Stop waiting weeks for video production. Generate scroll-stopping marketing
              videos, social media ads, product promos, and brand films from a text prompt —
              in under 2 minutes. No camera. No crew. No editing timeline.
            </p>

            <div className="avm-hero-stats" aria-label="Key statistics">
              {[
                { n: "6", label: "AI Video Models" },
                { n: "3", label: "Aspect Ratios" },
                { n: "1080p", label: "Max Resolution" },
                { n: "< 2min", label: "Generation Time" },
              ].map((s) => (
                <div key={s.n} className="avm-hero-stat">
                  <strong>{s.n}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>

            {/* ── Primary CTA ── */}
            <div className="avm-hero-cta-group">
              <a
                href={CTA_URL}
                className="avm-primary-cta"
                aria-label="Generate your first AI marketing video free"
              >
                <span className="avm-cta-icon" aria-hidden="true">🎬</span>
                <span>Generate Your First Marketing Video Free</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <p className="avm-cta-note">
                No credit card · 1 free video · Full commercial rights
              </p>
            </div>
          </div>

          {/* ── Animated mock video frames ── */}
          <div className="avm-hero-visual" aria-hidden="true">
            <div className="avm-mock-feed">
              {[
                { ar: "9:16", label: "Reel / TikTok", delay: "0s", color: "#6355dc" },
                { ar: "16:9", label: "YouTube / LinkedIn", delay: "0.15s", color: "#0f9d58" },
                { ar: "1:1", label: "Instagram Feed", delay: "0.3s", color: "#dc2626" },
              ].map((f) => (
                <div key={f.ar} className="avm-mock-frame" style={{ animationDelay: f.delay }}>
                  <div className="avm-mock-screen" style={{ "--frame-color": f.color } as React.CSSProperties}>
                    <div className="avm-mock-play" />
                    <div className="avm-mock-lines">
                      <span /><span /><span />
                    </div>
                  </div>
                  <p>{f.ar}</p>
                  <small>{f.label}</small>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            STAT TICKER
        ════════════════════════════════════════════ */}
        <section className="avm-stats-strip" aria-label="Industry video marketing statistics">
          <div className="avm-stats-track">
            {[...STAT_BLOCKS, ...STAT_BLOCKS].map((s, i) => (
              <div key={i} className="avm-stat-item">
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        <main className="avm-main">

          {/* ════════════════════════════════════════════
              WHAT IS THIS / INTRO SEO BLOCK
          ════════════════════════════════════════════ */}
          <section className="avm-section" aria-labelledby="what-is-heading">
            <div className="avm-section-label">The Shift</div>
            <h2 id="what-is-heading" className="avm-h2">
              Why Every Marketing Team Needs an AI Video Generator in 2026
            </h2>
            <div className="avm-prose-grid">
              <div className="avm-prose-col">
                <p>
                  Video has been the dominant content format online for years — but until recently,
                  producing it required a production budget, a crew, a studio, and weeks of
                  post-production. That equation has permanently changed.
                </p>
                <p>
                  AI video generation in 2026 is not a gimmick or an experiment. Models like
                  Kling 2.6 Pro, Google's Veo 3.1, and Wan 2.5 now produce footage that holds up
                  to scrutiny in professional marketing contexts. They understand camera movements,
                  lighting physics, subject motion, and compositional intent from plain English
                  prompts. The quality gap between AI-generated and traditionally-shot marketing
                  video has effectively closed for most use cases.
                </p>
                <p>
                  What this means for marketers: the constraint is no longer production — it's
                  ideation and distribution. Teams that adopt AI video generation are not cutting
                  corners. They're operating at a fundamentally different speed and scale than
                  those who don't.
                </p>
              </div>
              <div className="avm-prose-col">
                <p>
                  Consider the compounding advantage: a marketing team that generates 5 video
                  concepts per day with AI tests 25× more creative hypotheses per week than a team
                  that ships one video every 5 days. Over a quarter, that's the difference between
                  5 tested ads and 325. The team running more experiments will find more winners.
                  It's that simple.
                </p>
                <p>
                  Scenith's AI Video Generator for Marketing is designed around this insight.
                  You get access to six of the most capable video models available — Kling 2.6 Pro,
                  Kling 2.5 Turbo, Veo 3.1, Veo 3.1 Fast, Wan 2.5, and Grok Imagine — under a
                  single credit system, alongside AI image generation and AI voice generation.
                  Everything a modern marketing content pipeline needs, in one place.
                </p>
                <p>
                  Prompts take 30 seconds to write. Videos render in 30–120 seconds. You download
                  an MP4 ready for Meta Ads, TikTok, YouTube, your landing page, or your email
                  campaign. No export settings. No codec decisions. No editing timeline.
                </p>
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════
              USE CASES
          ════════════════════════════════════════════ */}
          <section className="avm-section" aria-labelledby="usecases-heading">
            <div className="avm-section-label">Use Cases</div>
            <h2 id="usecases-heading" className="avm-h2">
              8 Marketing Video Types You Can Generate with AI Today
            </h2>
            <p className="avm-section-sub">
              From Instagram Reels to enterprise brand films — one AI, every format.
            </p>
            <div className="avm-usecases-grid">
              {USE_CASES.map((uc) => (
                <article key={uc.title} className="avm-usecase-card">
                  <div className="avm-usecase-icon" aria-hidden="true">{uc.icon}</div>
                  <div className="avm-usecase-stat">
                    <strong>{uc.stat}</strong>
                    <small>{uc.statLabel}</small>
                  </div>
                  <h3>{uc.title}</h3>
                  <p>{uc.description}</p>
                </article>
              ))}
            </div>
          </section>

          {/* ════════════════════════════════════════════
              MODELS
          ════════════════════════════════════════════ */}
          <section className="avm-section avm-section-dark" aria-labelledby="models-heading">
            <div className="avm-section-label avm-label-light">AI Models</div>
            <h2 id="models-heading" className="avm-h2 avm-h2-light">
              6 State-of-the-Art AI Video Models for Marketing
            </h2>
            <p className="avm-section-sub avm-sub-light">
              Every model has a different strength. Scenith gives you all of them.
            </p>
            <div className="avm-models-grid">
              {MODELS.map((m) => (
                <article key={m.id} className="avm-model-card">
                  <div className="avm-model-header">
                    <h3>{m.name}</h3>
                    <span className="avm-model-badge" style={{ background: m.badgeColor }}>
                      {m.badge}
                    </span>
                  </div>
                  <p>{m.description}</p>
                  <div className="avm-model-tags">
                    {m.tags.map((t) => (
                      <span key={t} className="avm-model-tag">{t}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* ════════════════════════════════════════════
              PROMPT EXAMPLES
          ════════════════════════════════════════════ */}
          <section className="avm-section" aria-labelledby="prompts-heading">
            <div className="avm-section-label">Prompt Library</div>
            <h2 id="prompts-heading" className="avm-h2">
              Ready-to-Use Marketing Video Prompts
            </h2>
            <p className="avm-section-sub">
              Copy any of these into Scenith's video generator and hit Generate. Each prompt
              is crafted to produce high-quality marketing-ready output.
            </p>
            <div className="avm-prompts-grid">
              {PROMPT_EXAMPLES.map((p) => (
                <div key={p.category} className="avm-prompt-card">
                  <div
                    className="avm-prompt-category"
                    style={{ background: p.color + "18", color: p.color, borderColor: p.color + "40" }}
                  >
                    {p.category}
                  </div>
                  <blockquote className="avm-prompt-text">&ldquo;{p.prompt}&rdquo;</blockquote>
                </div>
              ))}
            </div>
            <div className="avm-cta-center">
              <a href={CTA_URL} className="avm-primary-cta avm-cta-mid">
                <span className="avm-cta-icon" aria-hidden="true">🎬</span>
                Try These Prompts in the Generator →
              </a>
            </div>
          </section>

          {/* ════════════════════════════════════════════
              WORKFLOW
          ════════════════════════════════════════════ */}
          <section className="avm-section" aria-labelledby="workflow-heading">
            <div className="avm-section-label">How It Works</div>
            <h2 id="workflow-heading" className="avm-h2">
              From Prompt to Published Marketing Video in 4 Steps
            </h2>
            <div className="avm-workflow">
              {WORKFLOW_STEPS.map((step, i) => (
                <div key={step.step} className="avm-workflow-step">
                  <div className="avm-workflow-num" aria-hidden="true">{step.step}</div>
                  <div className="avm-workflow-content">
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                    <div className="avm-workflow-tip">{step.tip}</div>
                  </div>
                  {i < WORKFLOW_STEPS.length - 1 && (
                    <div className="avm-workflow-connector" aria-hidden="true" />
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* ════════════════════════════════════════════
              COMPARISON TABLE
          ════════════════════════════════════════════ */}
          <section className="avm-section" aria-labelledby="comparison-heading">
            <div className="avm-section-label">Comparison</div>
            <h2 id="comparison-heading" className="avm-h2">
              AI Video vs Traditional Production vs Agency: The Real Numbers
            </h2>
            <p className="avm-section-sub">
              The marketing world is splitting into two camps: those who've adopted AI video,
              and those who haven't. Here's what the gap looks like.
            </p>
            <div className="avm-table-wrapper" role="region" aria-label="Comparison table">
              <table className="avm-compare-table">
                <thead>
                  <tr>
                    <th scope="col">Feature</th>
                    <th scope="col">In-house Production</th>
                    <th scope="col">Video Agency</th>
                    <th scope="col" className="avm-th-highlight">Scenith AI</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_ROWS.map((row) => (
                    <tr key={row.feature}>
                      <td className="avm-feature-col">{row.feature}</td>
                      <td>{row.traditional}</td>
                      <td>{row.agency}</td>
                      <td className="avm-td-highlight">{row.scenith}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ════════════════════════════════════════════
              DEEP DIVE: MARKETING STRATEGY CONTENT
          ════════════════════════════════════════════ */}
          <section className="avm-section" aria-labelledby="strategy-heading">
            <div className="avm-section-label">Strategy Deep Dive</div>
            <h2 id="strategy-heading" className="avm-h2">
              How to Build an AI-Powered Video Marketing Pipeline in 2026
            </h2>
            <div className="avm-deepdive-grid">

              <article className="avm-deepdive-card">
                <h3>🎯 Start with the Hook, Not the Story</h3>
                <p>
                  The most common mistake in marketing video production — AI or traditional —
                  is starting with brand story and burying the hook. In a 5-second window
                  on TikTok or a YouTube pre-roll, you have one job: stop the scroll.
                </p>
                <p>
                  When writing your AI video prompt, lead with the visual hook. What is the
                  single most arresting image that could appear in frame one? Build your prompt
                  around that moment. "Close-up of a flame igniting in slow motion on a dark
                  background, then revealing a product logo..." beats "A brand video showing
                  our product and its benefits..." by orders of magnitude.
                </p>
                <p>
                  AI video models are exceptional at generating specific visual moments. They
                  are less good at narrative arc across a 5-second clip. Use that strength.
                  Prompt for the moment, not the message.
                </p>
              </article>

              <article className="avm-deepdive-card">
                <h3>🔄 The AI Creative Testing Framework</h3>
                <p>
                  AI video's true superpower for marketing is not quality — it's velocity.
                  You can generate 10 creative variants in the time it takes a traditional
                  agency to schedule a kickoff call.
                </p>
                <p>
                  Build a testing framework: generate 4–6 videos with the same core concept
                  but varying the hook (opening visual), the aesthetic (model choice), and the
                  format (aspect ratio). Run them all with a small paid budget. In 48–72 hours,
                  you'll have real performance data. Kill the losers. Scale the winner. Iterate.
                </p>
                <p>
                  This is a fundamentally different creative process than the traditional
                  production model — and it produces fundamentally better marketing outcomes
                  because it's data-driven rather than gut-driven.
                </p>
              </article>

              <article className="avm-deepdive-card">
                <h3>📱 Platform-Native Video Strategy</h3>
                <p>
                  Each platform has a visual language. TikTok rewards raw, authentic-feeling
                  content with a documentary aesthetic. Instagram Reels performs best with
                  polished, aspirational visuals. LinkedIn video converts best with
                  professional, informative framing. YouTube Shorts favors punchy, energetic cuts.
                </p>
                <p>
                  Scenith's aspect ratio options map directly to these platforms: 9:16 for
                  TikTok/Reels/Shorts, 16:9 for YouTube and LinkedIn feed, 1:1 for Instagram
                  feed and Facebook. Generate platform-specific variants of the same core
                  creative. The model stays the same — change the aspect ratio and adjust the
                  prompt tone for each platform's visual language.
                </p>
                <p>
                  For audio-native platforms like TikTok, use Grok Imagine — the only AI video
                  model that generates synchronized audio. It produces ambient sound, music-like
                  textures, and effects that are native to the video, not overlaid in post.
                </p>
              </article>

              <article className="avm-deepdive-card">
                <h3>🛍️ Product-Led Video: E-commerce Playbook</h3>
                <p>
                  E-commerce brands have the most to gain from AI video generation. The cost of
                  traditional product videography — studio rental, photographer, product
                  stylist, lighting rig, post-production — makes video content economically
                  inaccessible for most SKUs.
                </p>
                <p>
                  The AI alternative: photograph your product cleanly against a neutral
                  background. Upload that photo to Scenith's Image-to-Video mode. Prompt the
                  model to animate the scene — add lighting changes, cinematic camera movements,
                  environmental context. Your product photo becomes a cinematic video ad.
                </p>
                <p>
                  Test this workflow: photograph one SKU. Generate 5 different video ads using
                  5 different prompts — different environments, different aesthetics, different
                  camera angles. You've produced a week's worth of ad creative in one session.
                </p>
              </article>

              <article className="avm-deepdive-card">
                <h3>🏢 Enterprise & Agency Applications</h3>
                <p>
                  For agencies managing multiple clients, AI video generation changes the economics
                  of the pitch process. Generating a video concept mockup for a client
                  presentation no longer requires production budget sign-off. You can walk into
                  a pitch with 5 rendered video concepts instead of storyboards.
                </p>
                <p>
                  For enterprise marketing teams, AI video enables a new tier of content:
                  localized video variants for different markets (change the setting prompt, keep
                  the product), seasonal creative refreshes (minimal new production cost), and
                  always-on content calendar coverage without always-on production budget.
                </p>
                <p>
                  The ROI calculation is straightforward: if your current video production cost
                  is $2,000 per video and you produce 2 videos per month ($4,000/mo), shifting
                  to AI production at $9/mo with 300 credits reduces cost by 99.7% for comparable
                  social media content. The savings fund experimentation.
                </p>
              </article>

              <article className="avm-deepdive-card">
                <h3>🔊 The Voice + Video Combination</h3>
                <p>
                  The most underrated feature for marketers on Scenith: you can generate both
                  the video and the voiceover from the same platform, with the same credits.
                  Switch to the Voice tab, select from 40+ voices in 20+ languages, and generate
                  a narration track for your AI video.
                </p>
                <p>
                  This produces a complete video ad — visual plus narration — without any
                  external tools. Export the MP3 voiceover and the MP4 video, combine them in
                  any basic video editor or directly in Meta Ads Manager. The total production
                  time for a voiced marketing video is under 5 minutes.
                </p>
                <p>
                  For multi-language campaigns, generate the same voiceover in English, Spanish,
                  Hindi, French, and Mandarin from the same script. Combine with the same
                  underlying AI video. You've just produced a global ad campaign in a single
                  Scenith session.
                </p>
              </article>

            </div>
          </section>

          {/* ════════════════════════════════════════════
              MID-PAGE CTA
          ════════════════════════════════════════════ */}
          <section className="avm-mid-cta-section" aria-label="Call to action">
            <div className="avm-mid-cta-inner">
              <div className="avm-mid-cta-orb-1" aria-hidden="true" />
              <div className="avm-mid-cta-orb-2" aria-hidden="true" />
              <div className="avm-mid-cta-content">
                <h2>
                  Ready to Build Your AI
                  <br />
                  Video Marketing Engine?
                </h2>
                <p>
                  Join thousands of marketers using Scenith to produce video content
                  at 100× the speed and 1% of the cost. Your first video is free.
                </p>
                <a href={CTA_URL} className="avm-primary-cta avm-cta-large">
                  <span className="avm-cta-icon" aria-hidden="true">🎬</span>
                  <span>Start Generating Marketing Videos Free</span>
                  <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <div className="avm-cta-trust">
                  <span>✓ No credit card</span>
                  <span>✓ 1 free video on signup</span>
                  <span>✓ Full commercial rights</span>
                  <span>✓ Cancel anytime</span>
                </div>
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════
              ADDITIONAL SEO CONTENT
          ════════════════════════════════════════════ */}
          <section className="avm-section" aria-labelledby="types-heading">
            <div className="avm-section-label">Content Guide</div>
            <h2 id="types-heading" className="avm-h2">
              A Complete Guide to AI-Generated Marketing Video Types
            </h2>

            <div className="avm-guide-blocks">

              <article className="avm-guide-block">
                <h3>Text-to-Video for Marketing: How It Works</h3>
                <p>
                  Text-to-video AI takes a natural language description and generates a short
                  video clip. The underlying models are trained on vast libraries of video
                  footage paired with descriptions, enabling them to learn relationships between
                  language and visual content — camera movements, lighting, materials, human
                  motion, environmental settings.
                </p>
                <p>
                  For marketing, text-to-video is most powerful for atmospheric and conceptual
                  content: brand films, mood pieces, environmental brand storytelling, and
                  abstract creative that communicates emotion rather than explicit product features.
                  It's also highly effective for cinematic B-roll to support a narrated ad.
                </p>
                <p>
                  When prompting for marketing use, be specific about three things: the visual
                  composition (camera angle, framing), the emotional register (warm, urgent,
                  aspirational, trustworthy), and the style reference (cinematic, documentary,
                  commercial, editorial). These three inputs reliably produce output you can use
                  in a professional marketing context.
                </p>
              </article>

              <article className="avm-guide-block">
                <h3>Image-to-Video for Product Marketing</h3>
                <p>
                  Image-to-video is arguably the most commercially valuable AI video capability
                  for product marketers. You supply an existing still image — a product photo,
                  a brand asset, a rendered visualization — and the AI animates it into a video
                  clip with realistic motion, lighting changes, and environmental depth.
                </p>
                <p>
                  This workflow eliminates the primary barrier to video production for e-commerce
                  brands: you don't need to reshoot for video. Every product photo in your catalog
                  is now a potential video asset. Upload it, describe the scene you want to
                  create around it, and generate. Product photography becomes product video.
                </p>
                <p>
                  For highest quality results with image-to-video on Scenith: use clean product
                  photography with good natural or studio lighting, avoid heavily edited or
                  composited images, and describe camera movement in your prompt ("slow push-in",
                  "gentle orbit", "steady close-up with bokeh background"). These produce the
                  most cinematic and marketing-ready output.
                </p>
              </article>

              <article className="avm-guide-block">
                <h3>AI Video for Paid Social Advertising</h3>
                <p>
                  Paid social advertising — Meta, TikTok, LinkedIn, Pinterest — has a fundamental
                  creative problem: ad fatigue. Creative that performs well for 2–3 weeks begins
                  to decay as audiences see it repeatedly. The creative refresh cycle demands
                  constant new video content, but traditional production is too slow and too
                  expensive to keep up.
                </p>
                <p>
                  AI video solves the creative refresh problem. Generate new variants weekly.
                  Keep the same messaging and product, change the visual hook, the aesthetic, the
                  setting. Your audience sees fresh creative; your CPC stays low; your ROAS
                  stays high. This is not theoretical — performance marketers using AI video
                  creative report 40–60% reduction in creative fatigue decay rates compared to
                  traditional static ad creative rotation.
                </p>
                <p>
                  For Meta Ads specifically: generate in 9:16 for Stories/Reels placement and
                  1:1 for Feed. Always include motion in the first frame — Meta's algorithm
                  rewards video that retains viewers past 3 seconds. Use Kling 2.6 Pro for
                  high-ticket products and luxury positioning; use Wan 2.5 for fast iteration
                  when testing 10+ ad variants simultaneously.
                </p>
              </article>

              <article className="avm-guide-block">
                <h3>Brand Storytelling with AI Video</h3>
                <p>
                  Brand films — longer, more narrative content that communicates company values
                  and origin story — are traditionally the most expensive video content to produce.
                  They require concept development, scriptwriting, location scouting, crew, talent,
                  and extensive post-production. The result is one piece of content that lives for
                  12–18 months.
                </p>
                <p>
                  AI video changes the economics here too. You can produce a 30-second brand
                  film using multiple AI video clips stitched together in a simple editor,
                  narrated by AI voice. Combine cinematic environmental footage (Veo 3.1 excels
                  here), brand identity visuals (Kling 2.6 Pro for product beauty shots), and
                  human-centric moments (Wan 2.5 for natural-feeling human scenes). The result
                  is a brand film at a fraction of traditional production cost.
                </p>
                <p>
                  The key for brand storytelling: use consistent color grading language in your
                  prompts across all clips ("warm amber tones", "muted earth palette", "cool
                  blue cinematic grade") to create visual cohesion between clips generated
                  separately. This is the technique that makes multi-clip AI brand films feel
                  intentional rather than assembled.
                </p>
              </article>

            </div>
          </section>

          {/* ════════════════════════════════════════════
              FAQ
          ════════════════════════════════════════════ */}
          <section className="avm-section" aria-labelledby="faq-heading">
            <div className="avm-section-label">FAQ</div>
            <h2 id="faq-heading" className="avm-h2">
              Frequently Asked Questions: AI Video Generator for Marketing
            </h2>
            <div className="avm-faq-list">
              {FAQ_ITEMS.map((item, i) => (
                <details key={i} className="avm-faq-item">
                  <summary className="avm-faq-q">
                    <span>{item.q}</span>
                    <svg className="avm-faq-chevron" width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                      <path d="M4.5 6.75L9 11.25l4.5-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </summary>
                  <div className="avm-faq-a">{item.a}</div>
                </details>
              ))}
            </div>
          </section>

          {/* ════════════════════════════════════════════
              FINAL CTA
          ════════════════════════════════════════════ */}
          <section className="avm-final-cta" aria-label="Final call to action">
            <div className="avm-final-cta-inner">
              <div className="avm-final-badge" aria-hidden="true">
                <span>🎬</span>
              </div>
              <h2>
                The Fastest Way to Make a Marketing Video
                <br />
                Just Became Free to Try
              </h2>
              <p>
                Kling 2.6 Pro · Veo 3.1 · Wan 2.5 · Grok Imagine — all in one place.
                Write a prompt. Generate your video. Download it in 1080p. Done.
              </p>
              <a href={CTA_URL} className="avm-primary-cta avm-cta-xl">
                <span className="avm-cta-icon" aria-hidden="true">🎬</span>
                <span>Generate Your First Marketing Video Free</span>
                <svg width="20" height="20" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <div className="avm-final-trust">
                <span>✓ 6 AI video models</span>
                <span>✓ 3 aspect ratios</span>
                <span>✓ 1080p resolution</span>
                <span>✓ Commercial use</span>
                <span>✓ No credit card</span>
              </div>
              <p className="avm-final-link">
                Also try:{" "}
                <a href="https://scenith.in/create-ai-content?tab=image&utm_source=tools&utm_medium=landing-page&utm_campaign=ai-video-generator-for-marketing">
                  AI Image Generator
                </a>{" · "}
                <a href="https://scenith.in/create-ai-content?tab=voice&utm_source=tools&utm_medium=landing-page&utm_campaign=ai-video-generator-for-marketing">
                  AI Voice Generator
                </a>{" · "}
                <a href="https://scenith.in/pricing">
                  View Pricing
                </a>
              </p>
            </div>
          </section>

        </main>

      </div>
    </>
  );
}