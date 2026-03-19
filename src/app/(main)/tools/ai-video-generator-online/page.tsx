import type { Metadata } from "next";
import Link from "next/link";
import '../../../../../styles/tools/ai-video-generator-online.css';

// ─── SEO Metadata ─────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "AI Video Generator Online — Free Text to Video & Image to Video | Scenith",
  description:
    "Generate stunning AI videos online for free. Turn text prompts into cinematic videos in seconds with Wan 2.5, Kling 2.6 Pro, and Veo 3.1. No software downloads. No editing skills needed. Try now.",
  keywords: [
    "ai video generator online",
    "text to video ai free",
    "ai video maker online",
    "free ai video generator",
    "image to video ai",
    "generate video from text",
    "ai video creator",
    "best ai video generator 2026",
    "kling ai video generator",
    "veo 3 video generator",
    "wan ai video",
    "cinematic ai video maker",
    "ai video generator no watermark",
    "text to video generator free online",
    "ai video generation tool",
  ].join(", "),
  openGraph: {
    title: "AI Video Generator Online — Turn Text Into Cinematic Video | Scenith",
    description:
      "Free AI video generator online. Type a prompt, pick a model (Wan 2.5, Kling, Veo 3.1), and generate stunning HD videos in seconds. No editing skills required.",
    url: "https://scenith.in/tools/ai-video-generator-online",
    siteName: "Scenith",
    images: [
      {
        url: "https://scenith.in/og-ai-video-generator-online.jpg",
        width: 1200,
        height: 630,
        alt: "Scenith AI Video Generator Online — Text to Video in Seconds",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Video Generator Online — Free Text to Video | Scenith",
    description:
      "Generate cinematic AI videos from text in seconds. Kling 2.6 Pro, Veo 3.1, Wan 2.5 — all in one free online tool.",
    images: ["https://scenith.in/og-ai-video-generator-online.jpg"],
    creator: "@scenithin",
  },
  alternates: {
    canonical: "https://scenith.in/tools/ai-video-generator-online",
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

// ─── Structured Data (JSON-LD) ────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://scenith.in/tools/ai-video-generator-online",
      url: "https://scenith.in/tools/ai-video-generator-online",
      name: "AI Video Generator Online — Free Text to Video & Image to Video",
      description:
        "Generate stunning AI videos online for free. Turn text prompts into cinematic videos with Wan 2.5, Kling 2.6 Pro, and Veo 3.1. No software needed.",
      isPartOf: { "@id": "https://scenith.in" },
      breadcrumb: { "@id": "https://scenith.in/tools/ai-video-generator-online#breadcrumb" },
      inLanguage: "en-US",
      potentialAction: {
        "@type": "UseAction",
        target: "https://scenith.in/tools/ai-video-generation?utm_source=ai-video-generator-online&utm_medium=cta&utm_campaign=seo-mirror",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://scenith.in/tools/ai-video-generator-online#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://scenith.in" },
        { "@type": "ListItem", position: 2, name: "Tools", item: "https://scenith.in/tools" },
        {
          "@type": "ListItem",
          position: 3,
          name: "AI Video Generator Online",
          item: "https://scenith.in/tools/ai-video-generator-online",
        },
      ],
    },
    {
      "@type": "SoftwareApplication",
      name: "Scenith AI Video Generator",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Web Browser",
      url: "https://scenith.in/tools/ai-video-generation",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Free tier with 50 credits. Premium plans from $15/month.",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "1240",
        bestRating: "5",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is an AI video generator online?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "An AI video generator online is a web-based tool that converts text descriptions or images into fully-rendered video clips using advanced diffusion and transformer AI models. You type a prompt like 'golden hour timelapse over a mountain valley' and the AI generates a matching MP4 video, typically in seconds to minutes, without any video editing skills required.",
          },
        },
        {
          "@type": "Question",
          name: "Is Scenith's AI video generator free?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Scenith offers a free account with 50 starter credits — enough for at least one full video generation using models like Wan 2.5. No credit card is required to sign up. Premium plans starting at $15/month unlock more credits and access to high-end models like Kling 2.6 Pro and Veo 3.1.",
          },
        },
        {
          "@type": "Question",
          name: "Which AI model is best for video generation in 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "In 2026, the top AI video generation models are Veo 3.1 (best cinematic quality and prompt adherence), Kling 2.6 Pro (best balance of quality and cost for 1080p), Kling 2.5 Turbo (fastest generation), and Wan 2.5 (most accessible free-tier model at 480p). The best choice depends on your use case — content creation, marketing, or artistic experimentation.",
          },
        },
        {
          "@type": "Question",
          name: "Can I generate video from an image using AI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Scenith's image-to-video feature accepts any PNG, JPG, or WEBP file and animates it using your text prompt as the motion guide. You can turn a product photo into a rotating 3D showcase, bring a portrait photo to life, or animate an illustrated scene.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to generate an AI video?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most AI video generations complete in 30–120 seconds, depending on the model, video duration (5s or 10s), and queue load. Turbo models are fastest (typically 30–45s). Pro models like Kling 2.6 Pro or Veo 3.1 take 60–120 seconds for higher-quality results.",
          },
        },
        {
          "@type": "Question",
          name: "Do I own the videos I generate with AI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. All videos generated on Scenith belong to you. You can download them as MP4 files and use them commercially, in social media, marketing campaigns, or any other purpose, subject to our terms of service.",
          },
        },
        {
          "@type": "Question",
          name: "What aspect ratios are supported for AI video generation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Scenith supports 16:9 landscape (ideal for YouTube, desktop, ads), 9:16 portrait (perfect for Instagram Reels, TikTok, YouTube Shorts), and 1:1 square (best for Instagram posts and Facebook feeds). All ratios are available on all models.",
          },
        },
        {
          "@type": "Question",
          name: "What is a 'negative prompt' in AI video generation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A negative prompt tells the AI what to avoid in your generated video. For example, adding 'blurry, low quality, watermark, distorted faces' as a negative prompt helps the model understand what artifacts or elements you do not want to appear in the final output. It's an advanced feature that significantly improves generation quality when used correctly.",
          },
        },
      ],
    },
  ],
};

// ─── Static content data ──────────────────────────────────────────────────────

const CTA_URL =
  "https://scenith.in/tools/ai-video-generation?utm_source=ai-video-generator-online&utm_medium=cta&utm_campaign=seo-mirror&utm_content=main-cta";

const models = [
  {
    id: "wan",
    name: "Wan 2.5",
    badge: "Free Tier",
    badgeColor: "#10B981",
    res: "480p",
    credits: "46cr / 5s",
    icon: "⚡",
    best: "Budget-friendly short clips",
    desc: "Open-source powerhouse. Excellent prompt adherence, fast queue times, and accessible on the free plan. Best for experimenting and rapid ideation.",
    strengths: ["Fast generation", "Great for text prompts", "Free plan accessible", "Good motion quality"],
  },
  {
    id: "kling-turbo",
    name: "Kling 2.5 Turbo",
    badge: "Speed",
    badgeColor: "#F59E0B",
    res: "1080p",
    credits: "64cr / 5s",
    icon: "🚀",
    best: "Social media & quick content",
    desc: "Kling's fastest 1080p model. Optimized for rapid generation without sacrificing quality. Ideal for high-volume content creators and social media teams.",
    strengths: ["1080p output", "Fastest 1080p model", "High-volume friendly", "Sharp motion"],
  },
  {
    id: "kling-pro",
    name: "Kling 2.6 Pro",
    badge: "Popular",
    badgeColor: "#6366F1",
    res: "1080p",
    credits: "64cr / 5s",
    icon: "🎬",
    best: "Marketing & professional content",
    desc: "The sweet spot for most users. Kling 2.6 Pro delivers Hollywood-grade 1080p footage with outstanding subject consistency, dynamic camera moves, and cinematic color.",
    strengths: ["Cinematic color grading", "Subject consistency", "Dynamic camera motion", "Commercial-grade quality"],
  },
  {
    id: "veo-fast",
    name: "Veo 3.1 Fast",
    badge: "Premium",
    badgeColor: "#8B5CF6",
    res: "1080p",
    credits: "92cr / 5s",
    icon: "✨",
    best: "High-quality creative projects",
    desc: "Google's Veo 3.1 Fast gives you near-flagship quality at a faster generation speed. Outstanding photorealism and lighting physics that rival professionally shot footage.",
    strengths: ["Photorealistic output", "Exceptional lighting", "Strong temporal coherence", "Near-flagship quality"],
  },
  {
    id: "veo",
    name: "Veo 3.1",
    badge: "Best Quality",
    badgeColor: "#EC4899",
    res: "1080p",
    credits: "186cr / 5s",
    icon: "👑",
    best: "Flagship cinematic & ad production",
    desc: "The pinnacle of AI video generation. Veo 3.1 produces breathtaking cinematic videos with unmatched prompt adherence, film-grade depth of field, and Hollywood lighting simulation.",
    strengths: ["Best-in-class quality", "Film-grade DoF", "Prompt adherence", "Native audio support"],
  },
];

const useCases = [
  {
    icon: "📱",
    title: "Social Media Content",
    headline: "60 videos a month, zero shoot days",
    desc: "Content creators are using AI video generators to produce TikToks, Instagram Reels, and YouTube Shorts at scale. A 5-second AI clip with a punchy text overlay performs the same as (or better than) hand-filmed content, and takes 90 seconds to produce instead of 3 hours.",
    tags: ["TikTok", "Reels", "YouTube Shorts", "Twitter/X"],
    stat: "3.2×",
    statLabel: "avg. engagement lift reported by AI-content creators",
  },
  {
    icon: "🛍️",
    title: "E-commerce & Product Marketing",
    headline: "Product videos without a studio",
    desc: "Small businesses and Shopify sellers are using image-to-video AI to animate product photos into polished showcase videos. Upload your product image, describe the motion ('slow 360° rotate, studio lighting, clean white background'), and get a video ad in seconds.",
    tags: ["Product demos", "Ad creatives", "Shopify", "Amazon listings"],
    stat: "34%",
    statLabel: "average increase in product page conversion with video",
  },
  {
    icon: "🎨",
    title: "Creative & Artistic Projects",
    headline: "The artist's infinite canvas",
    desc: "Filmmakers, artists, and musicians are using AI video generators to prototype visual ideas, create music video concepts, generate abstract art installations, and explore scenes that would be physically impossible or prohibitively expensive to film.",
    tags: ["Music videos", "Art installations", "Film concepts", "Digital art"],
    stat: "∞",
    statLabel: "creative possibilities from a single text prompt",
  },
  {
    icon: "📊",
    title: "Marketing & Advertising",
    headline: "A/B test ten ad creatives overnight",
    desc: "Performance marketers are generating multiple AI video variants from a single brief and running them as Meta, Google, and TikTok ads. The feedback loop that used to take two weeks of production now takes two hours of prompting.",
    tags: ["Meta Ads", "Google Video Ads", "Performance marketing", "Brand content"],
    stat: "12×",
    statLabel: "faster creative iteration vs. traditional production",
  },
  {
    icon: "🎓",
    title: "Education & Training",
    headline: "Explainer videos without explainer video budgets",
    desc: "Educators, HR teams, and online course creators are turning lecture scripts and training outlines into visual explainer videos. Complex concepts become intuitive when paired with a generated visual metaphor — even if your budget is zero.",
    tags: ["E-learning", "Corporate training", "Explainers", "Tutorials"],
    stat: "68%",
    statLabel: "better knowledge retention with video vs. text alone",
  },
  {
    icon: "🏗️",
    title: "Architecture & Real Estate",
    headline: "Visualize before you build",
    desc: "Architects and real estate agents are using AI video to create walkthroughs of unbuilt spaces, animate floor plan concepts, and produce property preview videos from still renders. A concept sketch becomes a cinematic fly-through in minutes.",
    tags: ["Property tours", "Design concepts", "Architectural viz", "Client presentations"],
    stat: "4×",
    statLabel: "higher click-through on listings with video vs. photos only",
  },
];

const promptTips = [
  {
    icon: "🎥",
    title: "Lead with the camera move",
    bad: "A coffee shop in the morning",
    good: "Slow dolly push through a warm, sun-drenched coffee shop in the morning, steam rising from cups, shallow depth of field",
    why: "Camera direction is the single biggest lever for cinematic quality. Dolly, pan, tilt, orbit, aerial drone — name it explicitly.",
  },
  {
    icon: "🌅",
    title: "Specify lighting and time of day",
    bad: "A forest scene",
    good: "A dense pine forest at golden hour, volumetric god rays piercing through the canopy, mist on the forest floor, cinematic color grade",
    why: "Lighting is what separates amateur from cinematic. 'Golden hour', 'blue hour', 'overcast diffused', 'neon noir' — these unlock dramatically better outputs.",
  },
  {
    icon: "🎭",
    title: "Describe motion explicitly",
    bad: "A woman walking in the city",
    good: "A woman in a red coat walks confidently through a rainy Tokyo street at night, neon reflections on wet pavement, slow motion, bokeh background",
    why: "AI models do not infer motion well from nouns alone. Describe exactly how subjects and camera should move.",
  },
  {
    icon: "🎨",
    title: "Reference a visual style or era",
    bad: "A car driving on a road",
    good: "A vintage 1960s muscle car cruising down a desert highway at sunset, filmed in the style of a 35mm Kodachrome road movie, lens flares, grain",
    why: "Style references compress a huge amount of visual information. 'Wes Anderson symmetrical', 'Blade Runner neon dystopia', 'Studio Ghibli painterly' — all work powerfully.",
  },
  {
    icon: "📐",
    title: "Use negative prompts strategically",
    bad: "(no negative prompt)",
    good: "Negative: blurry, low quality, distorted faces, text, watermark, oversaturated, motion blur artifacts, extra limbs",
    why: "Negative prompts are a superpower most beginners skip. They dramatically reduce artifacts and push the AI toward cleaner outputs.",
  },
  {
    icon: "⏱️",
    title: "Match prompt complexity to duration",
    bad: "A detailed 60-scene narrative (for 5 seconds)",
    good: "One clear subject, one clear action, one clear environment (for 5 seconds)",
    why: "5 seconds is ~125 frames. Focus on one beautiful moment: a single camera move, a single action. Save narrative complexity for when 10-second options unlock.",
  },
];

const comparisonData = [
  { feature: "Cost per 5s video", traditional: "$500–$5,000+", aiVideo: "As low as $0.46", winner: "ai" },
  { feature: "Time to first output", traditional: "Days to weeks", aiVideo: "30–120 seconds", winner: "ai" },
  { feature: "Creative iteration speed", traditional: "1–3 revisions/week", aiVideo: "Unlimited per hour", winner: "ai" },
  { feature: "Editing skills required", traditional: "Yes (After Effects, Premiere)", aiVideo: "None — just writing", winner: "ai" },
  { feature: "Equipment needed", traditional: "Camera, lighting, crew", aiVideo: "A web browser", winner: "ai" },
  { feature: "Resolution", traditional: "4K RAW", aiVideo: "Up to 1080p (2026)", winner: "traditional" },
  { feature: "Creative control", traditional: "Pixel-perfect", aiVideo: "Prompt-guided (improving fast)", winner: "traditional" },
  { feature: "Consistency across shots", traditional: "High (with same setup)", aiVideo: "Moderate (improving)", winner: "traditional" },
];

const faqData = [
  {
    q: "What is an AI video generator online?",
    a: "An AI video generator online is a browser-based tool that converts text prompts or images into video clips using deep learning models. You describe what you want to see — the subject, action, environment, lighting, and style — and the AI renders a matching video, typically as an MP4 file, without requiring any video editing software or production skills.",
  },
  {
    q: "Is Scenith's AI video generator really free?",
    a: "Yes. Creating a free account gives you 50 starter credits instantly — no credit card required. That's enough for at least one full video generation using the Wan 2.5 model. Paid plans start at $15/month and include 300 credits plus access to premium models like Kling 2.6 Pro and Veo 3.1.",
  },
  {
    q: "Which AI video model should I use in 2026?",
    a: "It depends on your priorities. For the absolute best quality, use Veo 3.1. For the best balance of quality and cost, Kling 2.6 Pro is the most popular choice. For fast bulk generation, Kling 2.5 Turbo is ideal. For free experimentation, Wan 2.5 is the place to start. All models are available on one platform — you can switch between them per generation.",
  },
  {
    q: "Can I use AI-generated videos commercially?",
    a: "Yes. All videos generated on Scenith are yours to use commercially — in ads, product pages, social media, presentations, and more. Please review our Terms of Service for the full license details. The underlying model providers (Fal.ai, Google, Kling) also extend commercial use rights to end-users through Scenith's API agreements.",
  },
  {
    q: "What's the difference between text-to-video and image-to-video?",
    a: "Text-to-video generates a video entirely from a written prompt — no starting image needed. Image-to-video takes a still image you upload and uses your text prompt as a motion guide to animate it. Image-to-video is ideal for product demos, portrait animation, and bringing illustrations to life. Text-to-video is best for original creative scenes and concept generation.",
  },
  {
    q: "How do I write a good AI video prompt?",
    a: "The best prompts specify: (1) the main subject and what it's doing, (2) the camera movement (dolly, pan, aerial, close-up), (3) lighting conditions (golden hour, neon, studio), (4) the visual style (cinematic, photorealistic, animation), and (5) mood or atmosphere. Negative prompts (what to avoid) also significantly improve output quality. See our Prompt Writing Guide section above for detailed examples.",
  },
  {
    q: "How long does AI video generation take?",
    a: "Most generations complete in 30–120 seconds. Wan 2.5 and Kling 2.5 Turbo are fastest (30–60 seconds). Veo 3.1 and Kling 2.6 Pro take 60–120 seconds for higher-quality outputs. During peak hours, there may be a brief queue wait (typically under 2 minutes). Scenith polls your generation status every 5 seconds and notifies you immediately when it's ready.",
  },
  {
    q: "What aspect ratios are available for AI video generation?",
    a: "Scenith supports three aspect ratios: 16:9 landscape (best for YouTube, desktop ads, presentations), 9:16 portrait (best for TikTok, Instagram Reels, YouTube Shorts), and 1:1 square (best for Instagram feed posts, Facebook ads). All ratios are available at no extra cost on all models.",
  },
  {
    q: "Does AI video generation support audio?",
    a: "Yes — select models including Veo 3.1 support native AI-generated audio, including ambient sounds, sound effects, and atmospheric audio that matches your visual prompt. Audio generation uses approximately 2× the standard credit cost. For the cleanest results, we recommend generating the video first and adding audio in post if the audio generation doesn't perfectly match.",
  },
  {
    q: "What video resolution and file format do I get?",
    a: "All videos are exported as MP4 (H.264). Resolution depends on the model: Wan 2.5 outputs 480p, while all other models (Kling 2.5 Turbo, Kling 2.6 Pro, Veo 3.1 Fast, Veo 3.1) output 1080p. 4K support is on our roadmap. Files are available for download immediately after generation and stored in your account history.",
  },
  {
    q: "Do I need to install any software to use the AI video generator?",
    a: "No. Scenith's AI video generator is 100% browser-based. It works on any device with a modern web browser — desktop, tablet, or mobile. No plugins, no downloads, no GPU required on your side. All computation happens on our cloud infrastructure.",
  },
  {
    q: "How is Scenith different from other AI video generators?",
    a: "Scenith consolidates multiple best-in-class AI video models (Wan 2.5, Kling 2.5 Turbo, Kling 2.6 Pro, Veo 3.1 Fast, Veo 3.1) under one platform and credit system. You don't need separate subscriptions for each model. Our interface is optimized for both beginners (prompt suggestions, one-click settings) and power users (negative prompts, advanced controls, image-to-video). We also store your full generation history for easy review and re-download.",
  },
];

const stats = [
  { value: "50", unit: "free credits", label: "On sign-up, no card needed" },
  { value: "30s", unit: "minimum", label: "Time to first generated video" },
  { value: "5", unit: "AI models", label: "Wan · Kling · Veo under one roof" },
  { value: "1080p", unit: "maximum", label: "HD output on premium models" },
];

// ─── Page Component ───────────────────────────────────────────────────────────

export default function AIVideoGeneratorOnlinePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="avgo-page">
        {/* Background */}
        <div className="avgo-bg" aria-hidden="true">
          <div className="avgo-bg-orb avgo-bg-orb--1" />
          <div className="avgo-bg-orb avgo-bg-orb--2" />
          <div className="avgo-bg-orb avgo-bg-orb--3" />
          <div className="avgo-bg-grid" />
          <div className="avgo-bg-noise" />
        </div>

        <div className="avgo-wrap">
          {/* Breadcrumb */}
          <nav className="avgo-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">›</span>
            <Link href="/tools">Tools</Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page">AI Video Generator Online</span>
          </nav>

          {/* ══ HERO ══════════════════════════════════════════════════════════ */}
          <section className="avgo-hero" aria-labelledby="hero-heading">
            <div className="avgo-hero-eyebrow">
              <span className="avgo-pulse-dot" aria-hidden="true" />
              <span>AI Video Generation · 2026 Edition</span>
            </div>

            <h1 id="hero-heading" className="avgo-hero-title">
              The Smartest
              <br />
              <span className="avgo-title-gradient">AI Video Generator</span>
              <br />
              Available Online
            </h1>

            <p className="avgo-hero-desc">
              Type a prompt. Pick a model. Get a cinematic video in under 2 minutes.
              No editing skills. No software. No studio.{" "}
              <strong>Wan 2.5 · Kling 2.6 Pro · Veo 3.1</strong> — all under one roof.
            </p>

            {/* Stats bar */}
            <div className="avgo-stats-bar" role="list">
              {stats.map((s) => (
                <div className="avgo-stat" key={s.unit} role="listitem">
                  <span className="avgo-stat-value">{s.value}</span>
                  <span className="avgo-stat-unit">{s.unit}</span>
                  <span className="avgo-stat-label">{s.label}</span>
                </div>
              ))}
            </div>

            {/* Primary CTA */}
            <div className="avgo-hero-cta-wrap">
              <Link
                href={CTA_URL}
                className="avgo-btn-primary avgo-btn-xl"
                aria-label="Open the free AI video generator tool"
              >
                <span className="avgo-btn-icon" aria-hidden="true">✨</span>
                Generate Your First AI Video Free
                <span className="avgo-btn-arrow" aria-hidden="true">→</span>
              </Link>
              <p className="avgo-hero-cta-note">
                Free account · 50 credits instantly · No credit card required
              </p>
            </div>
          </section>

          {/* ══ DEMO VIDEO ════════════════════════════════════════════════════ */}
          <section className="avgo-demo-section" aria-label="AI-generated video sample">
            <div className="avgo-demo-label" aria-hidden="true">
              <span className="avgo-pulse-dot" />
              Live Sample — Generated with Kling 2.5 Pro
            </div>
            <div className="avgo-demo-frame">
              <div className="avgo-demo-overlay" aria-hidden="true" />
              <video
                src="https://cdn.scenith.in/ai_video_gen/2/video_3a8f8067-40ff-4ec4-9173-83cfc81a5cb4.mp4"
                autoPlay
                loop
                muted
                playsInline
                disablePictureInPicture
                disableRemotePlayback
                aria-label="Sample AI-generated video showing cinematic quality output"
                style={{ width: "100%", display: "block", maxHeight: 440, objectFit: "cover" }}
              />
              <div className="avgo-demo-watermark">
                <span>🎬</span>
                <span>Made with Kling 2.5 Pro · 130 credits · Scenith.in</span>
              </div>
            </div>
            <p className="avgo-demo-caption">
              Every video above was generated 100% by AI from a text prompt — no footage, no actors, no editing.
            </p>
          </section>

          {/* ══ INTRO / WHAT IS ═══════════════════════════════════════════════ */}
          <section className="avgo-section" aria-labelledby="what-is-heading">
            <h2 id="what-is-heading" className="avgo-section-title">
              What Is an AI Video Generator Online?
            </h2>
            <div className="avgo-prose">
              <p>
                An <strong>AI video generator online</strong> is a browser-based platform that uses advanced deep
                learning models — specifically video diffusion transformers — to convert plain text descriptions
                or still images into fully-rendered video clips. You don't install software, rent a studio, or hire
                a camera crew. You open a tab, type what you want to see, and the AI builds it from scratch.
              </p>
              <p>
                The technology has evolved dramatically since 2023. Early models produced shaky 2-second clips at
                low resolution. By 2026, tools like <strong>Veo 3.1</strong> from Google and{" "}
                <strong>Kling 2.6 Pro</strong> from Kuaishou are producing 1080p, 10-second videos with cinematic
                depth of field, physically accurate lighting, coherent object motion, and even synchronized audio
                — all from a single text prompt.
              </p>
              <p>
                This isn't a novelty anymore. <strong>AI video generation is a production tool</strong> used by
                content creators, marketing teams, product designers, filmmakers, and small businesses to produce
                professional-quality video at a fraction of the traditional cost and time.
              </p>
              <p>
                Scenith's AI video generator consolidates five of the best 2026 models under one platform —{" "}
                <strong>Wan 2.5, Kling 2.5 Turbo, Kling 2.6 Pro, Veo 3.1 Fast, and Veo 3.1</strong> — so you
                can switch models per generation without juggling multiple subscriptions.
              </p>
            </div>
          </section>

          {/* ══ HOW IT WORKS ══════════════════════════════════════════════════ */}
          <section className="avgo-section" aria-labelledby="how-it-works-heading">
            <h2 id="how-it-works-heading" className="avgo-section-title">
              How to Use the AI Video Generator Online — Step by Step
            </h2>
            <p className="avgo-section-sub">
              From zero to cinematic video in under 3 minutes. Here's the exact workflow.
            </p>

            <ol className="avgo-steps-list" aria-label="Steps to generate an AI video">
              {[
                {
                  step: "01",
                  icon: "🔑",
                  title: "Create a free account",
                  body: "Sign up with your email or Google account in under 30 seconds. No credit card required. You'll receive 50 starter credits immediately — enough for your first generation.",
                  note: "Free · Instant · No card",
                },
                {
                  step: "02",
                  icon: "✍️",
                  title: "Write your video prompt",
                  body: "Describe what you want to see in natural language. Include the subject, action, environment, camera movement, lighting, and style. The more specific your prompt, the more cinematic your output. Use the prompt suggestion chips for inspiration.",
                  note: "Plain English · Up to 2,000 characters",
                },
                {
                  step: "03",
                  icon: "⚙️",
                  title: "Select your model and settings",
                  body: "Choose from five AI models based on your quality and budget needs. Set your aspect ratio (16:9, 9:16, or 1:1), duration (5s or 10s), and optionally enable native AI audio. Each model shows its credit cost upfront — no surprises.",
                  note: "5 models · 3 aspect ratios · Optional audio",
                },
                {
                  step: "04",
                  icon: "🚀",
                  title: "Hit Generate and wait",
                  body: "Your generation is submitted to the AI model queue. Most completions take 30–120 seconds. The tool polls for your result every 5 seconds and shows a live status — Queued → Generating → Ready. You can leave the tab and come back.",
                  note: "30–120 seconds average · Auto-refresh",
                },
                {
                  step: "05",
                  icon: "📥",
                  title: "Preview and download your video",
                  body: "Your completed video plays inline immediately. Preview it, then download as MP4 with one click. All generated videos are saved to your history and accessible for re-download anytime.",
                  note: "MP4 download · Saved to history · Commercial use",
                },
              ].map((s) => (
                <li key={s.step} className="avgo-step-item">
                  <div className="avgo-step-num" aria-hidden="true">{s.step}</div>
                  <div className="avgo-step-content">
                    <div className="avgo-step-icon" aria-hidden="true">{s.icon}</div>
                    <h3 className="avgo-step-title">{s.title}</h3>
                    <p className="avgo-step-body">{s.body}</p>
                    <div className="avgo-step-note">{s.note}</div>
                  </div>
                </li>
              ))}
            </ol>

            <div className="avgo-cta-inline">
              <Link href={CTA_URL} className="avgo-btn-primary">
                <span aria-hidden="true">🎬</span>
                Start Generating — It&apos;s Free
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </section>

          {/* ══ MODELS ════════════════════════════════════════════════════════ */}
          <section className="avgo-section" aria-labelledby="models-heading">
            <h2 id="models-heading" className="avgo-section-title">
              The 5 Best AI Video Models Available in 2026
            </h2>
            <p className="avgo-section-sub">
              Scenith gives you access to every major AI video model under one credit system.
              Here&apos;s a deep-dive on each.
            </p>

            <div className="avgo-models-grid" role="list">
              {models.map((m) => (
                <article key={m.id} className="avgo-model-card" role="listitem">
                  <div className="avgo-model-header">
                    <span className="avgo-model-icon" aria-hidden="true">{m.icon}</span>
                    <div>
                      <h3 className="avgo-model-name">{m.name}</h3>
                      <div className="avgo-model-meta">
                        <span
                          className="avgo-model-badge"
                          style={{ "--badge-color": m.badgeColor } as React.CSSProperties}
                        >
                          {m.badge}
                        </span>
                        <span className="avgo-model-res">{m.res}</span>
                        <span className="avgo-model-cost">{m.credits}</span>
                      </div>
                    </div>
                  </div>
                  <p className="avgo-model-best">
                    <strong>Best for:</strong> {m.best}
                  </p>
                  <p className="avgo-model-desc">{m.desc}</p>
                  <ul className="avgo-model-strengths" aria-label={`${m.name} key strengths`}>
                    {m.strengths.map((s) => (
                      <li key={s}>
                        <span aria-hidden="true">✓</span> {s}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="avgo-cta-inline">
              <Link href={CTA_URL} className="avgo-btn-primary">
                <span aria-hidden="true">✨</span>
                Try All 5 Models Free
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </section>

          {/* ══ USE CASES ═════════════════════════════════════════════════════ */}
          <section className="avgo-section" aria-labelledby="use-cases-heading">
            <h2 id="use-cases-heading" className="avgo-section-title">
              Who Is Using AI Video Generators Online — And How
            </h2>
            <p className="avgo-section-sub">
              AI video generation isn&apos;t one use case — it&apos;s a horizontal technology reshaping how video
              is made across every industry.
            </p>

            <div className="avgo-usecases-grid" role="list">
              {useCases.map((uc) => (
                <article key={uc.title} className="avgo-usecase-card" role="listitem">
                  <div className="avgo-usecase-icon" aria-hidden="true">{uc.icon}</div>
                  <div className="avgo-usecase-stat-badge">
                    <strong>{uc.stat}</strong>
                    <span>{uc.statLabel}</span>
                  </div>
                  <h3 className="avgo-usecase-title">{uc.title}</h3>
                  <p className="avgo-usecase-headline">{uc.headline}</p>
                  <p className="avgo-usecase-desc">{uc.desc}</p>
                  <div className="avgo-usecase-tags" aria-label="Related platforms and use cases">
                    {uc.tags.map((tag) => (
                      <span key={tag} className="avgo-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* ══ PROMPT TIPS ═══════════════════════════════════════════════════ */}
          <section className="avgo-section" aria-labelledby="prompt-guide-heading">
            <h2 id="prompt-guide-heading" className="avgo-section-title">
              AI Video Prompt Writing Guide — 6 Techniques That Actually Work
            </h2>
            <p className="avgo-section-sub">
              The quality of your AI video is 80% determined by the quality of your prompt.
              Here&apos;s what separates cinematic outputs from mediocre ones.
            </p>

            <div className="avgo-tips-list" role="list">
              {promptTips.map((tip, i) => (
                <article key={i} className="avgo-tip-card" role="listitem">
                  <div className="avgo-tip-header">
                    <span className="avgo-tip-icon" aria-hidden="true">{tip.icon}</span>
                    <div>
                      <h3 className="avgo-tip-title">{tip.title}</h3>
                      <p className="avgo-tip-why">{tip.why}</p>
                    </div>
                  </div>
                  <div className="avgo-tip-examples">
                    <div className="avgo-tip-example avgo-tip-example--bad">
                      <span className="avgo-tip-example-label" aria-label="Bad example">✗ Weak</span>
                      <p>{tip.bad}</p>
                    </div>
                    <div className="avgo-tip-example avgo-tip-example--good">
                      <span className="avgo-tip-example-label" aria-label="Good example">✓ Cinematic</span>
                      <p>{tip.good}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* ══ AI VS TRADITIONAL ═════════════════════════════════════════════ */}
          <section className="avgo-section" aria-labelledby="comparison-heading">
            <h2 id="comparison-heading" className="avgo-section-title">
              AI Video Generation vs. Traditional Video Production — 2026 Reality Check
            </h2>
            <p className="avgo-section-sub">
              The honest comparison. Where AI wins overwhelmingly, and where it still has ground to cover.
            </p>

            <div className="avgo-comparison-table" role="table" aria-label="AI video vs traditional production comparison">
              <div className="avgo-comparison-header" role="row">
                <div role="columnheader">Feature</div>
                <div role="columnheader">Traditional Production</div>
                <div role="columnheader">AI Video Generation</div>
              </div>
              {comparisonData.map((row) => (
                <div
                  key={row.feature}
                  className={`avgo-comparison-row ${row.winner === "ai" ? "avgo-comparison-row--ai-wins" : "avgo-comparison-row--traditional-wins"}`}
                  role="row"
                >
                  <div className="avgo-comparison-feature" role="cell">
                    {row.feature}
                  </div>
                  <div
                    className={`avgo-comparison-val ${row.winner === "traditional" ? "avgo-comparison-val--winner" : ""}`}
                    role="cell"
                  >
                    {row.traditional}
                  </div>
                  <div
                    className={`avgo-comparison-val ${row.winner === "ai" ? "avgo-comparison-val--winner" : ""}`}
                    role="cell"
                  >
                    {row.aiVideo}
                  </div>
                </div>
              ))}
            </div>

            <div className="avgo-prose" style={{ marginTop: "2rem" }}>
              <p>
                The honest conclusion: for <strong>most content production scenarios in 2026</strong>, AI video
                generation is not just &ldquo;good enough&rdquo; — it&apos;s actively superior in speed, cost,
                and creative iteration. The remaining gaps (4K resolution, perfect cross-shot consistency) are
                closing rapidly with each model release.
              </p>
              <p>
                The question isn&apos;t &ldquo;AI or traditional?&rdquo; anymore. For content creators,
                marketers, and small businesses, the question is{" "}
                <strong>&ldquo;which AI model, and what prompt?&rdquo;</strong>
              </p>
            </div>
          </section>

          {/* ══ MAIN CTA BLOCK ════════════════════════════════════════════════ */}
          <section className="avgo-cta-block" aria-labelledby="cta-heading">
            <div className="avgo-cta-glow" aria-hidden="true" />
            <div className="avgo-cta-content">
              <div className="avgo-cta-eyebrow">
                <span className="avgo-pulse-dot" aria-hidden="true" />
                Ready to generate? Start here
              </div>
              <h2 id="cta-heading" className="avgo-cta-title">
                Your First AI Video Is
                <br />
                <span className="avgo-title-gradient">Waiting to Be Made</span>
              </h2>
              <p className="avgo-cta-desc">
                Sign up free, get 50 credits instantly, and generate your first cinematic AI video in
                under 2 minutes. No card. No software. No experience needed. Just a prompt.
              </p>

              <div className="avgo-cta-features" role="list" aria-label="Key features">
                {[
                  "50 free credits on signup",
                  "5 AI models including Veo 3.1",
                  "Text-to-video & image-to-video",
                  "16:9 · 9:16 · 1:1 aspect ratios",
                  "5s & 10s durations",
                  "Native AI audio support",
                  "1080p HD output",
                  "Full generation history",
                  "Commercial use included",
                  "Download as MP4",
                ].map((f) => (
                  <li key={f} role="listitem" className="avgo-cta-feature-item">
                    <span aria-hidden="true">✓</span> {f}
                  </li>
                ))}
              </div>

              <Link
                href={CTA_URL}
                className="avgo-btn-primary avgo-btn-xl avgo-btn-cta"
                aria-label="Go to the AI video generation tool"
              >
                <span aria-hidden="true">🎬</span>
                Open the AI Video Generator — Free
                <span aria-hidden="true">→</span>
              </Link>
              <p className="avgo-cta-note">
                Trusted by 10,000+ creators · No credit card · Instant access
              </p>
            </div>
          </section>

          {/* ══ FAQ ═══════════════════════════════════════════════════════════ */}
          <section className="avgo-section" aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="avgo-section-title">
              Frequently Asked Questions — AI Video Generator Online
            </h2>
            <p className="avgo-section-sub">
              Everything you need to know before you generate your first AI video.
            </p>

            <dl className="avgo-faq-list">
              {faqData.map((item, i) => (
                <div key={i} className="avgo-faq-item">
                  <dt className="avgo-faq-q">
                    <span className="avgo-faq-q-icon" aria-hidden="true">Q</span>
                    {item.q}
                  </dt>
                  <dd className="avgo-faq-a">{item.a}</dd>
                </div>
              ))}
            </dl>
          </section>

          {/* ══ CLOSING PROSE — for SEO depth ════════════════════════════════ */}
          <section className="avgo-section" aria-labelledby="deep-dive-heading">
            <h2 id="deep-dive-heading" className="avgo-section-title">
              The Complete Guide to AI Video Generation in 2026
            </h2>

            <div className="avgo-prose avgo-prose--wide">
              <h3>The Technology Behind AI Video Generation</h3>
              <p>
                Modern AI video generators are built on <strong>video diffusion transformer models</strong> — a
                fusion of the diffusion process that powers image generators like Stable Diffusion, and the
                transformer architecture that underpins large language models. The model learns temporal
                relationships between frames by training on billions of video-text pairs, developing an internal
                &ldquo;physics engine&rdquo; for motion, lighting, material properties, and cause-and-effect.
              </p>
              <p>
                What makes 2026&apos;s models different from 2023&apos;s is scale and training data quality.{" "}
                <strong>Veo 3.1</strong> from Google was trained on a curated dataset of professional cinematic
                content with precise text-video alignment labels. <strong>Kling 2.6 Pro</strong> introduced a
                multi-reference architecture that dramatically improves subject consistency across frames.{" "}
                <strong>Wan 2.5</strong> as an open-weights model democratized access to capable video generation
                for free and open-source use cases.
              </p>

              <h3>Text-to-Video vs. Image-to-Video: Which Should You Use?</h3>
              <p>
                <strong>Text-to-video</strong> is the more creative, open-ended mode. You start from nothing and
                build a scene entirely through language. This is ideal for concept visualization, abstract art,
                marketing narratives, and any scenario where you don&apos;t have a starting visual asset. The
                AI has full creative freedom within your prompt&apos;s constraints.
              </p>
              <p>
                <strong>Image-to-video</strong> anchors the generation to a specific visual starting point — your
                uploaded image becomes the first frame, and the AI animates forward based on your motion prompt.
                This is ideal for product animation (upload product photo → describe reveal motion), portrait
                animation (upload a portrait → describe a gentle look-and-smile), and bringing illustrations or
                concept art to life. The key advantage is visual consistency: the AI is constrained to your
                starting image&apos;s style, colors, and composition.
              </p>

              <h3>Understanding AI Video Credits: What Do They Actually Cost?</h3>
              <p>
                Credits on Scenith are a unified currency across all models. The cost per generation reflects
                the underlying compute cost of each model. <strong>Wan 2.5 at 46 credits</strong> for a 5-second
                clip is the most accessible entry point. <strong>Veo 3.1 at 186 credits</strong> for 5 seconds
                reflects the substantially higher compute cost of Google&apos;s flagship model.
              </p>
              <p>
                To put this in perspective: on Scenith&apos;s $15/month plan, you get 300 credits — that&apos;s
                6 full Veo 3.1 generations, or 16 Kling 2.6 Pro generations, or 6 full Wan 2.5 generations at
                10 seconds each. Compare that to the cost of even a single professional video shoot, and the
                value proposition becomes immediately clear.
              </p>

              <h3>AI Video for Social Media: The 2026 Creator Playbook</h3>
              <p>
                The most effective use of AI video generation for social media in 2026 follows a specific pattern
                that top creators have converged on:
              </p>
              <p>
                <strong>The B-roll strategy:</strong> Generate abstract or atmospheric AI video clips as
                background B-roll for talking-head videos. A creator filming themselves speaking can surround that
                with cinematic AI footage that matches the topic — a finance creator uses AI-generated trading
                floor footage, a travel creator uses AI aerial landscapes. The result looks far more produced than
                the effort required.
              </p>
              <p>
                <strong>The loop strategy:</strong> Generate 5-second AI videos designed to loop seamlessly —
                abstract particle effects, flowing water, ambient urban scenes — and use them as background
                visuals for Reels and TikToks with overlaid text. These perform exceptionally well because the
                moving background creates visual interest without distracting from the text content.
              </p>
              <p>
                <strong>The reveal strategy:</strong> Use image-to-video to animate product photos or brand
                assets with simple reveal motions. A logo on a dark background, slowly zooming with a lens flare.
                A product pack-shot, gently rotating. These &ldquo;motion graphics without After Effects&rdquo;
                clips perform well as ad creatives and organic content alike.
              </p>

              <h3>Ethical Use of AI Video Generation</h3>
              <p>
                As AI video technology matures, responsible use practices are becoming increasingly important.
                Scenith&apos;s platform includes content safety filters that prevent generation of harmful,
                deceptive, or rights-violating content. All AI-generated videos from Scenith are intended for
                legitimate creative, commercial, and educational use.
              </p>
              <p>
                We strongly recommend disclosing AI-generated video content when used in contexts where audiences
                might be misled — particularly in news, political content, or any scenario involving real people
                and real events. The power of AI video generation comes with a responsibility to use it honestly
                and transparently.
              </p>

              <h3>The Future of AI Video Generation: What&apos;s Coming</h3>
              <p>
                The trajectory of AI video generation points toward several near-term developments that will
                further transform how video content is produced:
              </p>
              <p>
                <strong>4K output</strong> is already being tested in research previews of next-generation models.
                Resolution has been the most requested feature, and the compute constraints that limited 2025
                models to 1080p are being overcome through more efficient architectures.
              </p>
              <p>
                <strong>Multi-shot coherence</strong> — generating multiple clips with the same character,
                maintaining visual consistency across shots — is the remaining frontier for narrative filmmaking
                applications. 2025-2026 models handle single-shot coherence excellently; multi-shot storytelling
                is where the next leap will occur.
              </p>
              <p>
                <strong>Real-time generation</strong> (sub-5-second outputs) is being pursued by multiple labs
                as hardware and model distillation improve. When generation is truly real-time, the use cases
                expand dramatically — from interactive live video to personalized video experiences at scale.
              </p>
              <p>
                What&apos;s certain is that 2026 is still early in the AI video generation curve. The models
                available today — as impressive as they are — will look like prototype work compared to what the
                next 18 months will bring. Getting comfortable with the technology now, understanding how to
                write good prompts, and building AI video into your workflow puts you ahead of the curve.
              </p>
            </div>
          </section>

          {/* ══ FINAL CTA ═════════════════════════════════════════════════════ */}
          <section className="avgo-final-cta" aria-labelledby="final-cta-heading">
            <h2 id="final-cta-heading" className="avgo-final-cta-title">
              Stop Reading. Start Generating.
            </h2>
            <p className="avgo-final-cta-desc">
              You&apos;ve read everything. You know the models, the techniques, the use cases.
              The only thing left is to open the tool and make your first video.
            </p>
            <Link href={CTA_URL} className="avgo-btn-primary avgo-btn-xl">
              <span aria-hidden="true">🎬</span>
              Open Free AI Video Generator
              <span aria-hidden="true">→</span>
            </Link>
            <p style={{ marginTop: "1rem", fontSize: "0.85rem", color: "#475569" }}>
              Scenith.in · AI Video Generator · No credit card · Commercial use included
            </p>
          </section>

          <div style={{ height: "60px" }} aria-hidden="true" />
        </div>
      </div>
    </>
  );
}