// app/tools/social-media-content-generator-ai/page.tsx
import type { Metadata } from "next";
import "./social-media-content-generator-ai.css";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Social Media Content Generator AI — Create 30 Days of Posts in 45 Minutes | Scenith",
  description:
    "Stop spending hours on content creation. Generate viral social media posts, carousels, videos, and voiceovers for Instagram, TikTok, LinkedIn & more with AI. 50 free credits.",
  keywords: [
    "social media content generator AI",
    "AI social media post generator",
    "bulk content creation AI",
    "Instagram post generator AI",
    "TikTok content creator AI",
    "LinkedIn post generator",
    "social media AI tool 2026",
    "AI content calendar generator",
    "social media automation AI",
    "viral content generator",
    "AI reels generator",
    "social media manager AI assistant",
    "automated social media posts",
    "AI carousel generator",
    "content batching AI",
  ],
  openGraph: {
    title: "Social Media Content Generator AI — Batch Create 30 Days of Posts | Scenith",
    description:
      "The complete AI workspace for social media managers. Generate images, carousels, voiceovers, and videos for 10+ platforms from one prompt.",
    url: "https://scenith.in/tools/social-media-content-generator-ai",
    siteName: "Scenith",
    type: "website",
    images: [
      {
        url: "https://scenith.in/og/social-media-content-generator-ai.jpg",
        width: 1200,
        height: 630,
        alt: "Scenith Social Media Content Generator AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Media Content Generator AI | Scenith",
    description:
      "Batch generate a month of social media content in under an hour. Try it free.",
    images: ["https://scenith.in/og/social-media-content-generator-ai.jpg"],
  },
  alternates: {
    canonical: "https://scenith.in/tools/social-media-content-generator-ai",
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

// ─── JSON-LD Structured Data ──────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://scenith.in/tools/social-media-content-generator-ai",
      url: "https://scenith.in/tools/social-media-content-generator-ai",
      name: "Social Media Content Generator AI",
      description:
        "Generate a month of social media content in under an hour with AI. Images, carousels, voiceovers, and videos for Instagram, TikTok, LinkedIn, Facebook, and YouTube.",
      inLanguage: "en-US",
      isPartOf: { "@id": "https://scenith.in" },
      datePublished: "2026-05-01",
      dateModified: "2026-05-01",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://scenith.in" },
          { "@type": "ListItem", position: 2, name: "Tools", item: "https://scenith.in/tools" },
          {
            "@type": "ListItem",
            position: 3,
            name: "Social Media Content Generator AI",
            item: "https://scenith.in/tools/social-media-content-generator-ai",
          },
        ],
      },
    },
    {
      "@type": "SoftwareApplication",
      name: "Scenith Social Media Content Generator AI",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Free to start. Paid plans from $9/month.",
      },
      featureList: [
        "AI image generation for posts",
        "AI carousel slide generator",
        "AI voiceover for Reels/Shorts",
        "AI video generation for TikTok/Reels",
        "Platform-specific aspect ratios",
        "Bulk content creation workflows",
        "Image-to-video for product posts",
        "Commercial rights included",
        "No design skills required",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How does an AI social media content generator work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "An AI social media content generator takes text descriptions (prompts) and produces ready-to-post visuals, voiceovers, or video clips. Scenith uses models like GPT Image 2, Kling 2.6 Pro, and Google TTS to generate platform-native content in seconds — no design or editing skills required.",
          },
        },
        {
          "@type": "Question",
          name: "Can I generate a month of social media content in one day?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. With AI batch generation, you can produce 30+ assets in a single focused session. A typical workflow: 15 images (20 minutes), 5 voiceovers (5 minutes), 10 short videos (25 minutes) — total under 1 hour for a full month of content.",
          },
        },
        {
          "@type": "Question",
          name: "What platforms does this work for?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Scenith generates content for Instagram (feed, Reels, Stories), TikTok, LinkedIn, YouTube (Shorts & pre-roll), Facebook, Pinterest, and Snapchat. Choose the correct aspect ratio (9:16, 16:9, or 1:1) and prompt for platform-specific aesthetics.",
          },
        },
        {
          "@type": "Question",
          name: "Is there a free social media content generator AI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Scenith offers 50 free credits on signup — no credit card required. This covers several image generations, voiceovers, or one video. Paid plans start at $9/month for 300 credits, enough for a full month of content for small to medium brands.",
          },
        },
        {
          "@type": "Question",
          name: "How do I write effective prompts for social media content?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Effective prompts include: platform (e.g., 'for Instagram Reel'), subject action, lighting/mood, aesthetic reference, and aspect ratio. Example: 'Close-up pouring golden honey over pancakes, warm morning light, satisfying slow motion, text overlay space top, 9:16 vertical.' Specificity drives quality.",
          },
        },
        {
          "@type": "Question",
          name: "Can I use AI-generated content for client work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. All content generated on Scenith comes with full commercial rights. You can use images, voiceovers, and videos for any client project, paid advertising, or commercial purpose without attribution.",
          },
        },
      ],
    },
  ],
};

// ─── CTA URL with UTM Parameters ─────────────────────────────────────────────

const CTA_URL = "https://scenith.in/create-ai-content?utm_source=tools&utm_medium=landing-page&utm_campaign=social-media-content-generator-ai";

// ─── Platform Data ───────────────────────────────────────────────────────────

const PLATFORMS = [
  {
    name: "Instagram",
    icon: "📱",
    color: "#E4405F",
    formats: ["Feed Posts (1:1)", "Reels (9:16)", "Stories (9:16)", "Carousels (1:1)"],
    contentTypes: ["Aesthetic imagery", "Product reveals", "Quote graphics", "Behind-the-scenes", "User-generated style"],
    promptExample: "Instagram Reel: slow-motion latte art being poured, warm coffee shop lighting, satisfying close-up, text overlay 'Monday morning fuel', 9:16 vertical.",
    bestModel: "Kling 2.6 Pro / GPT Image 2",
    hook: "Scroll-stopping visuals in the first frame — Instagram rewards beauty and authenticity.",
  },
  {
    name: "TikTok",
    icon: "🎵",
    color: "#010101",
    formats: ["In-Feed Videos (9:16)", "TopView Ads (9:16)", "Spark Ads (9:16)"],
    contentTypes: ["Fast-cut hooks", "Voiceover storytelling", "Educational content", "Challenge videos", "Raw authentic clips"],
    promptExample: "TikTok: split screen before/after transformation, left side tired morning face to right side energized after coffee, upbeat editing, text overlay friendly, 9:16 vertical.",
    bestModel: "Grok Imagine / Wan 2.5",
    hook: "The first 3 seconds decide everything — start with a question, visual anomaly, or fast action.",
  },
  {
    name: "LinkedIn",
    icon: "💼",
    color: "#0A66C2",
    formats: ["Video Posts (16:9)", "Documentary Style (16:9)", "Carousel Videos (1:1)"],
    contentTypes: ["Professional talking-head", "Data visualizations", "Office lifestyle", "Thought leadership", "Industry insights"],
    promptExample: "LinkedIn: modern office background with soft bokeh, confident professional speaking to camera, corporate navy and white palette, data overlay text, 16:9 landscape.",
    bestModel: "Veo 3.1",
    hook: "Authority and credibility first — professional lighting, confident body language, clear value proposition.",
  },
  {
    name: "YouTube",
    icon: "▶️",
    color: "#FF0000",
    formats: ["Shorts (9:16)", "Pre-Roll Ads (16:9)", "Channel Trailers (16:9)"],
    contentTypes: ["Hook-first openings", "High-energy cuts", "Cinematic storytelling", "Product demos", "Educational intros"],
    promptExample: "YouTube Shorts: extreme close-up of hands sketching a design, sped-up drawing process leading to finished product reveal, satisfying completion, 9:16 vertical.",
    bestModel: "Kling 2.6 Pro",
    hook: "Solve a problem or create curiosity in the first 5 seconds before the skip button appears.",
  },
  {
    name: "Facebook",
    icon: "📘",
    color: "#1877F2",
    formats: ["Feed Videos (1:1)", "Reels (9:16)", "In-Stream (16:9)"],
    contentTypes: ["Community storytelling", "Event highlights", "Group engagement", "Testimonial-style", "Warm inclusive visuals"],
    promptExample: "Facebook Feed: overhead flat lay of a community gathering table, diverse hands reaching for food, warm golden hour light, 1:1 square, human connection moment.",
    bestModel: "Kling 2.5 Turbo / Stability AI Core",
    hook: "Emotional connection and relatability — Facebook audiences engage with stories, not commercials.",
  },
  {
    name: "Pinterest",
    icon: "📌",
    color: "#BD081C",
    formats: ["Idea Pins (9:16)", "Standard Pins (2:3)", "Video Pins (1:1)"],
    contentTypes: ["Step-by-step tutorials", "Inspirational collages", "DIY processes", "Seasonal aesthetics", "Satisfying reveals"],
    promptExample: "Pinterest Idea Pin: step-by-step arranging a minimalist shelf, each item placed deliberately, soft natural light, text overlays '5 ways to style', 9:16 vertical.",
    bestModel: "Imagen 4 Standard / GPT Image 1.5",
    hook: "Aspirational and instructional — Pinterest users are planning and seeking inspiration.",
  },
];

// ─── Content Asset Types ─────────────────────────────────────────────────────

const ASSET_TYPES = [
  {
    type: "Images & Carousels",
    icon: "🎨",
    timeToGenerate: "10-30 seconds",
    bestFor: "Instagram feed posts, Pinterest pins, LinkedIn banners, Facebook feed",
    workflow: "Write prompt → Select model → Choose aspect ratio → Generate → Download PNG",
    proTip: "For carousels, generate 3-5 related images and upload as a slide deck. Use consistent color palettes across slides.",
    creditCost: "8-15 credits",
  },
  {
    type: "Voiceovers & Audio",
    icon: "🎙️",
    timeToGenerate: "3-5 seconds",
    bestFor: "TikTok voiceovers, Instagram Reel narration, YouTube Shorts audio, LinkedIn voice tracks",
    workflow: "Select voice (40+ options) → Type script → Adjust speed → Generate → Download MP3",
    proTip: "Match voice energy to platform: friendly/fast for TikTok, calm/professional for LinkedIn, warm/enthusiastic for Instagram.",
    creditCost: "0.5-2 credits per 100 chars",
  },
  {
    type: "Short-Form Videos",
    icon: "🎬",
    timeToGenerate: "30-120 seconds",
    bestFor: "Instagram Reels, TikTok videos, YouTube Shorts, LinkedIn video posts",
    workflow: "Describe scene → Choose model → Set duration (5-10s) → Pick aspect ratio → Generate → Download MP4",
    proTip: "Start with a strong hook frame in your prompt — the first 3 seconds determine if people scroll past.",
    creditCost: "46-186 credits",
  },
];

// ─── Batch Generation Strategies ────────────────────────────────────────────

const BATCH_STRATEGIES = [
  {
    name: "Weekly Social Media Batch",
    timeRequired: "20-30 minutes",
    assetCount: "10-15 assets",
    breakdown: "5 platform images · 3 voiceovers · 2 short videos · 3 carousel slides · 2 Reels",
    idealFor: "Freelance social media managers, small business owners, creators with 1-3 brands",
    workflow: "Monday morning: generate all images (10 min) → voiceovers (5 min) → videos (15 min) → schedule for week",
  },
  {
    name: "Monthly Content Dump",
    timeRequired: "60-90 minutes",
    assetCount: "50-60 assets",
    breakdown: "25 platform images · 10 voiceovers · 15 short videos · 10 carousel sets",
    idealFor: "Agencies, in-house marketing teams, high-volume content creators",
    workflow: "One dedicated session per month: image batch (25 min) → voiceover batch (10 min) → video batch (30 min) → organize folders",
  },
  {
    name: "Campaign Launch Package",
    timeRequired: "15-30 minutes",
    assetCount: "10-20 assets",
    breakdown: "Campaign images (5-8) · Voiceover variants (3-5) · Video ads (8-12 with A/B variants)",
    idealFor: "Performance marketers, product launches, seasonal campaigns, holiday promotions",
    workflow: "Define campaign theme → generate all assets in one session → A/B test variants → scale winners",
  },
];

// ─── Prompt Templates Library ───────────────────────────────────────────────

const PROMPT_TEMPLATES = [
  {
    platform: "Instagram Feed",
    format: "1:1 Square",
    template: "[Subject/action], [lighting/mood], [aesthetic style], text overlay space [top/bottom/center], 1:1 square, Instagram feed aesthetic.",
    example: "Potted monstera plant on a white shelf, soft morning light through sheer curtain, minimalist apartment aesthetic, text overlay space bottom, 1:1 square.",
  },
  {
    platform: "Instagram Reel / TikTok",
    format: "9:16 Vertical",
    template: "[Hook frame description], [camera movement], [subject action], [emotion/mood], [aesthetic reference], 9:16 vertical.",
    example: "Close-up hands whisking pancake batter, slow motion pull back to reveal a full breakfast spread, cozy Sunday morning energy, UGC authentic style, 9:16 vertical.",
  },
  {
    platform: "LinkedIn Video",
    format: "16:9 Landscape",
    template: "[Professional setting], [subject action], [lighting type], [brand color reference], data text overlay optional, 16:9 landscape.",
    example: "Modern open-plan office, diverse team collaborating around a whiteboard, soft diffused overhead lighting, blue and white brand palette, 16:9 landscape.",
  },
  {
    platform: "Pinterest Idea Pin",
    format: "9:16 Vertical",
    template: "Step-by-step [action/process], each step [detailed visual description], [lighting consistency], text callouts for each step, 9:16 vertical.",
    example: "Step-by-step arranging a dried flower bouquet, each stem placed deliberately, consistent bright natural light, text labels 'Step 1: Choose focal flower', 9:16 vertical.",
  },
  {
    platform: "YouTube Shorts",
    format: "9:16 Vertical",
    template: "[Immediate visual hook], [fast or slow pacing], [subject transformation or reveal], satisfying conclusion, 9:16 vertical.",
    example: "Messy desk time-lapse organizing itself, hands moving quickly, satisfying before/after reveal, 9:16 vertical.",
  },
  {
    platform: "Carousel Post",
    format: "1:1 Square (multi-slide)",
    template: "Slide 1: [hook/title]; Slide 2: [educational content]; Slide 3: [example/visual]; Slide 4: [key insight]; Slide 5: [CTA]. Consistent color palette: [colors].",
    example: "Slide 1: '5 AI prompts for better Reels'; Slide 2: Prompt formula breakdown; Slide 3: Before/after examples; Slide 4: Pro tips; Slide 5: 'Save this post'. Pastel purple aesthetic.",
  },
];

// ─── AI Model Recommendation Matrix ─────────────────────────────────────────

const MODEL_MATRIX = [
  {
    model: "GPT Image 2",
    bestFor: "High-detail realistic social imagery, hero posts, product photography style",
    speed: "Medium (15-25s)",
    cost: "Medium (15-24 credits)",
    platformFit: "Instagram feed, Pinterest, Facebook",
  },
  {
    model: "Stability AI Core",
    bestFor: "Versatile everyday social images, brand assets, quick iteration",
    speed: "Fast (10-15s)",
    cost: "Low (15 credits)",
    platformFit: "All platforms, especially Facebook feed",
  },
  {
    model: "Imagen 4 Standard",
    bestFor: "Cinematic quality, high-end brand storytelling, aspirational lifestyle",
    speed: "Medium (15-20s)",
    cost: "Medium (15 credits)",
    platformFit: "LinkedIn, YouTube, premium Instagram",
  },
  {
    model: "Grok Aurora",
    bestFor: "Artistic, creative, viral-friendly social images with unique aesthetic",
    speed: "Fast (10-15s)",
    cost: "Medium (14 credits)",
    platformFit: "TikTok, Instagram Reels thumbnail, Pinterest",
  },
  {
    model: "Kling 2.6 Pro",
    bestFor: "High-quality Reels, brand videos, product showcases, cinematic motion",
    speed: "Medium (60-100s)",
    cost: "High (64-130 credits)",
    platformFit: "Instagram Reels, YouTube Shorts, TikTok",
  },
  {
    model: "Veo 3.1",
    bestFor: "Professional, cinematic content for LinkedIn and YouTube pre-roll",
    speed: "Medium-Long (80-120s)",
    cost: "High (186-370 credits)",
    platformFit: "LinkedIn, YouTube, corporate social",
  },
  {
    model: "Wan 2.5",
    bestFor: "Volume video production, A/B testing variants, UGC-style content",
    speed: "Fast (30-60s)",
    cost: "Low (46-92 credits)",
    platformFit: "TikTok, Instagram Reels, high-volume testing",
  },
  {
    model: "Grok Imagine",
    bestFor: "TikTok and Reels with AI-generated audio, viral short-form",
    speed: "Fast (45-80s)",
    cost: "Low (47-66 credits)",
    platformFit: "TikTok, Instagram Reels, Snapchat",
  },
  {
    model: "Google TTS",
    bestFor: "Multi-language voiceovers, 20+ languages, reliable narration",
    speed: "Instant (2-3s)",
    cost: "Very low (0.5-1 credit/100 chars)",
    platformFit: "All platforms, especially educational content",
  },
  {
    model: "OpenAI TTS",
    bestFor: "Natural, expressive English voiceovers with emotional range",
    speed: "Instant (2-3s)",
    cost: "Low (1-2 credits/100 chars)",
    platformFit: "TikTok storytelling, podcast-style content",
  },
];

// ─── Workflow Steps ─────────────────────────────────────────────────────────

const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Audit Your Current Content Calendar",
    body: "Before generating anything new, review what's working. Which posts got the highest engagement? Which formats drove clicks? Which topics resonated? Use this data to inform your AI prompts. A data-informed prompt performs 3x better than a generic one.",
    insight: "📊 Social media managers who analyze last month's top 10 posts before batch generating report 2.5x higher engagement on AI-generated content.",
  },
  {
    step: "02",
    title: "Choose Platform → Format → Aspect Ratio",
    body: "Each platform demands specific dimensions. Instagram Reels and TikTok: 9:16 vertical. LinkedIn and YouTube pre-roll: 16:9 landscape. Facebook and Instagram feed: 1:1 square. Set your aspect ratio before generating — cropping after breaks composition.",
    insight: "📐 Wrong aspect ratio is the #1 rookie mistake. A 16:9 video cropped to 9:16 loses its visual impact. Generate in the right ratio from the start.",
  },
  {
    step: "03",
    title: "Write Platform-Specific Prompts",
    body: "Your prompt must tell the AI the platform, format, subject, lighting, camera movement, mood, and aspect ratio. 'Instagram Reel: slow-motion coffee pour, warm morning light, satisfying close-up, text overlay space top, 9:16 vertical' produces a completely different result than 'a coffee video'.",
    insight: "✍️ Specificity is the single biggest predictor of AI output quality. A 20-word prompt with 5 specific details outperforms a 3-word prompt every time.",
  },
  {
    step: "04",
    title: "Batch Generate by Asset Type",
    body: "Group your generation session by content type: all images first, then all voiceovers, then all videos. This keeps focus and minimizes context switching. A focused batch session: 15 images (20 min) → 5 voiceovers (5 min) → 10 videos (25 min). Total 50 minutes for 30 assets.",
    insight: "⚡ Batching by type is 3x faster than jumping between modes. Your brain stays in 'image mode' or 'video mode' instead of constant switching.",
  },
  {
    step: "05",
    title: "Download and Organize Immediately",
    body: "Create a folder structure: Platform > Date > Asset Type. Download each asset right after generation. Name files descriptively: 'instagram-feed-coffee-01.png' not 'image123.png'. This prevents the 'I generated it but can't find it' problem.",
    insight: "📁 Organized file naming saves 15+ minutes per week of hunting. A 10-second investment per asset pays back in the first scheduling session.",
  },
  {
    step: "06",
    title: "Schedule and Monitor Performance",
    body: "Upload your AI-generated assets directly to Meta Business Suite, TikTok Ads Manager, Later, Buffer, or Hootsuite. AI-generated MP4s and PNGs are accepted natively everywhere. Track engagement by prompt type to refine your strategy over time.",
    insight: "📈 The best-performing AI content managers keep a 'prompt library' of what worked. Save winning prompts and iterate on them.",
  },
];

// ─── Viral Hook Library ─────────────────────────────────────────────────────

const HOOK_LIBRARY = [
  {
    platform: "TikTok / Reels",
    hookType: "Curiosity Gap",
    prompt: "Black screen, single spotlight revealing a mysterious glowing object, question text fades in, suspenseful, handheld-style, 9:16 vertical.",
  },
  {
    platform: "Instagram Feed",
    hookType: "Visual Stunner",
    prompt: "Slow-motion close-up of a product's best feature, dramatic lighting, satisfying texture detail, text overlay 'Wait for it', 1:1 square.",
  },
  {
    platform: "YouTube Shorts",
    hookType: "Problem/Solution",
    prompt: "Frustrated person struggling with common problem, then quick cut to easy solution, energetic pacing, text overlay 'Stop doing this', 9:16 vertical.",
  },
  {
    platform: "LinkedIn",
    hookType: "Stat/Insight",
    prompt: "Bold white text on dark background counting up a statistic, clean corporate aesthetic, subtle particle animation, 16:9 professional.",
  },
  {
    platform: "TikTok",
    hookType: "Fast Tutorial",
    prompt: "Speed-up hands demonstrating a quick hack, satisfying result at the end, upbeat music energy, text overlays for each step, 9:16 vertical.",
  },
  {
    platform: "Instagram Reel",
    hookType: "Before/After",
    prompt: "Split frame — dull lifeless scene on left transforms to vibrant joyful version on right, smooth morph transition, kinetic energy, 9:16 vertical.",
  },
];

// ─── Deep Dive Articles (Long-Form SEO Content) ─────────────────────────────

const DEEP_DIVES = [
  {
    title: "The Social Media Manager's Complete Guide to AI Content Generation (2026 Edition)",
    body: `The role of a social media manager has fundamentally transformed. In 2024, you spent hours designing graphics in Canva, recording voiceovers in separate apps, and editing video clips in Premiere Pro or CapCut. In 2026, you spend those hours on strategy, community engagement, and performance analysis — because AI handles the production layer in minutes.

Scenith's unified AI content generator is built specifically for this new workflow. From a single page, you can generate images, voiceovers, and video clips — all from text prompts, all with commercial rights, all downloadable in platform-ready formats.

Here's the exact batch workflow used by full-time social media managers managing 3+ brands:

Monday (45 min - Batch Generation):
• 15 platform images using saved prompt templates (20 min)
• 8 voiceovers for Reels and TikTok (8 min)
• 10 short video clips (5-10 seconds each) (17 min)

Tuesday (30 min - Assembly & Scheduling):
• Combine voiceovers with video clips using simple editor
• Add captions and text overlays
• Schedule to Meta Business Suite, Later, or Hootsuite

Wednesday–Friday (Flexible):
• Community engagement (30 min/day)
• Performance review of last week's content
• Refine prompt templates based on what resonated

That's 75 minutes of active production work for 30+ posts across 3 platforms. Traditional methods would require 15+ hours.

The key insight that changes everything: AI content generation is not about creating one perfect asset. It's about generating many good assets quickly, letting audience engagement data tell you which to double down on, and iterating in real time. Social media managers who adopt this batch-generation workflow report 5x higher posting frequency with the same time investment.

The best part? Your 50 free credits let you test this entire workflow before spending a dollar.`,
  },
  {
    title: "Why Batching Beats Just-in-Time Content Creation",
    body: `Almost every social media manager starts with a just-in-time content workflow: Monday morning, sit down and create Monday's post. Tuesday morning, create Tuesday's post. Wednesday morning... you get the picture.

This is the single largest drain on productivity in the social media profession. The cognitive cost of context switching is enormous. Every time you start a new post from scratch, you spend 5-10 minutes just getting back into the right creative mindset. Multiply that by 30 posts per month = 2.5-5 hours of pure overhead before any actual content is made. That doesn't count the actual creation time.

Batching changes the math completely.

A batch workflow looks like this: one 60-minute session where you generate 30 assets. The overhead cost is incurred once (the 5-10 minutes to get into 'content mode'). The actual production time for the remaining 29 assets approaches zero because the creative engine (your prompts + AI) runs continuously once started.

Scenith's unified interface enables pure batching:
• Stay in Image mode and generate 15 images in a row (20 min)
• Switch to Voice mode and generate 5 voiceovers (5 min)
• Switch to Video mode and generate 10 clips (25 min)

Total: 50 minutes. Assets: 30.

Compare to just-in-time: 30 separate sessions × 15 minutes each = 450 minutes (7.5 hours) for the same 30 assets. You're saving 6.5 hours every single month — that's an entire workday.

But the benefits go beyond time savings. Batching produces higher quality content because:
1. You're not rushing to finish Tuesday's post at 4 PM on Tuesday
2. You have time to let generated assets sit and review them with fresh eyes
3. You can spot patterns and themes across your batch that you'd miss one-off
4. You can A/B test variants of similar prompts in the same session

The social media managers who succeed at scale don't create one post at a time. They think in batches, calendars, and campaigns. AI makes batching possible at speeds that were unimaginable 24 months ago.`,
  },
  {
    title: "The Science of the 3-Second Hook in Social Media Content",
    body: `The most important 3 seconds in social media are the first 3 seconds of your video content.

Meta's internal data shows that view duration drops by over 60% between the first and fifth second of a video ad or organic Reel if the opening frame doesn't immediately arrest attention. TikTok's algorithm explicitly deprioritizes videos where the 2-second retention rate drops below 60%. YouTube's data shows that Shorts with a question, visual anomaly, or fast action in the first 3 seconds have 2.3x the completion rate.

This is the hook problem — and it's where most social media managers waste their limited budget and time. Traditional content creation encourages slow, cinematic builds because that's what feels 'professional.' But social algorithms reward immediate visual impact.

AI video generation solves the hook problem by making iteration free. You can generate 10 different opening frames — different camera angles, different lighting setups, different visual intensities — test which 3-second hook retains the most viewers in a small A/B test, then rebuild the full ad or Reel around the winner. This is a testing workflow that traditional video production makes economically impossible.

When writing your AI prompts for social video, always lead with the frame. Describe exactly what appears in the first shot in explicit visual terms: the subject, the angle, the lighting, the motion, the text (if any). Then let the scene develop from there.

Weak prompt: 'A video about our coffee brand'
Strong prompt: 'Extreme close-up of a single coffee bean dropping into a portafilter, slow motion impact, dramatic side lighting, then pull back to reveal the full espresso shot pulling, satisfying texture close-up, 9:16 vertical, text overlay 'The perfect start' appears at 1.5 seconds'

The strong prompt tells the AI exactly what to show in each moment. The weak prompt leaves everything to chance — and chance rarely produces scroll-stopping content.`,
  },
];

// ─── FAQ ─────────────────────────────────────────────────────────────────────

const FAQ = [
  {
    q: "How many social media posts can I generate with the free plan?",
    a: "The free plan includes 50 credits. This typically covers 5-10 images (depending on model) or 1-2 short videos, or many voiceovers. This is enough to test the platform and generate a week's worth of content for one brand. Paid plans start at $9/month for 300 credits, which covers 30-40 images or 6-10 videos per month — plenty for an active social media manager handling 1-3 brands.",
  },
  {
    q: "Can I use AI-generated content for client work?",
    a: "Yes. All content generated on Scenith comes with full commercial rights. You can use images, voiceovers, and videos for any client project, commercial work, or paid advertising. No attribution required. This is a key differentiator from many free AI tools that retain rights or require credit.",
  },
  {
    q: "What's the fastest way to create a week of Instagram content?",
    a: "Use the Image tab with Stability AI Core (fastest image model) and generate 7 images in 10 minutes total. Write 7 prompts in advance, then generate them sequentially while doing other tasks. For Reels, generate 2-3 short 5-second clips using Wan 2.5 (fastest video model). The entire week's visual content can be completed in under 30 minutes. Add voiceovers from the Voice tab (3 minutes) and you're done.",
  },
  {
    q: "Can AI generate voiceovers for TikTok in multiple languages?",
    a: "Absolutely. Scenith's voice tab includes 20+ languages through Google TTS, including English (US, UK, Australian, Indian accents), Spanish, French, German, Hindi, Mandarin, Arabic, Japanese, Korean, and more. Write your script, select the language, choose a voice that matches your brand tone, generate, download MP3, and combine with your video in any simple editor.",
  },
  {
    q: "How do I make content that feels native to each platform, not obviously AI-generated?",
    a: "Include the platform name and desired aesthetic in your prompt. Each platform has a distinct visual culture: TikTok rewards raw, authentic-looking footage (prompt for 'handheld, natural lighting, UGC style'). Instagram Reels prefers polished, aesthetic visuals (prompt for 'cinematic, warm tones, slow motion'). LinkedIn wants professional, well-lit scenes (prompt for 'corporate, well-lit, confident body language'). The AI follows your platform cues when you give them explicitly.",
  },
  {
    q: "What's the best AI model for e-commerce social media content?",
    a: "For product-focused content (Instagram feed, Facebook feed, Pinterest), use GPT Image 2 or Kling 2.6 Pro for high-detail product shots that look like professional photography. For lifestyle context around products, use Image-to-Video mode with Stability AI Core or Imagen 4 to animate your product photos. For UGC-style content (TikTok, Reels), Wan 2.5 produces natural, slightly imperfect motion that reads as authentic user-generated content.",
  },
  {
    q: "How do I write prompts that generate consistent brand aesthetics?",
    a: "Create a brand prompt template that you reuse every time. Include: color palette (e.g., 'sage green, cream, warm wood tones'), lighting style (e.g., 'soft morning light through sheer curtains'), composition preference (e.g., 'overhead flat lay, minimal negative space'), and subject framing (e.g., 'centered product with space for text overlay'). Save this template and swap only the subject each time. This builds a consistent feed aesthetic automatically.",
  },
  {
    q: "Can I schedule AI-generated content directly from Scenith?",
    a: "Scenith generates the content assets (PNG, MP3, MP4). You download and then upload to your preferred scheduling tool: Meta Business Suite, Later, Buffer, Hootsuite, Tailwind, or any platform that accepts media uploads. We focus on making file generation instant and high-quality; there are excellent dedicated scheduling tools that handle the posting calendar side better than we ever could.",
  },
];

// ─── Page Component ────────────────────────────────────────────────────────────

export default function SocialMediaContentGeneratorAIPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="smcg-root">

        {/* ── Breadcrumb ── */}
        <nav className="smcg-breadcrumb" aria-label="Breadcrumb">
          <ol>
            <li><a href="https://scenith.in">Scenith</a></li>
            <li aria-hidden>/</li>
            <li><a href="https://scenith.in/tools">Tools</a></li>
            <li aria-hidden>/</li>
            <li aria-current="page">Social Media Content Generator AI</li>
          </ol>
        </nav>

        {/* ══════════════════════════════════════
            HERO SECTION with GIANT CTA BUTTON
        ══════════════════════════════════════ */}
        <header className="smcg-hero">
          <div className="smcg-hero-grid" aria-hidden="true" />
          <div className="smcg-hero-gradient" aria-hidden="true" />
          <div className="smcg-hero-shine" aria-hidden="true" />

          <div className="smcg-hero-body">
            <div className="smcg-eyebrow">
              <span className="smcg-eyebrow-pulse" aria-hidden="true" />
              AI-Powered Social Media Production
            </div>

            <h1 className="smcg-h1">
              Social Media Content
              <br />
              <span className="smcg-h1-accent">Generator AI</span>
            </h1>

            <p className="smcg-hero-desc">
              Create a month of scroll-stopping social content — images, carousels,
              voiceovers, and videos — in <strong>under an hour</strong>.
              Stop creating one post at a time. Start batching.
            </p>

            {/* ── GIANT CTA BUTTON ── */}
            <div className="smcg-hero-cta-wrap">
              <a
                href={CTA_URL}
                className="smcg-hero-cta"
                aria-label="Generate social media content with AI on Scenith"
              >
                <span className="smcg-cta-icon" aria-hidden="true">✨</span>
                <span className="smcg-cta-text">
                  Generate Social Media Content Now →
                </span>
                <span className="smcg-cta-arrow" aria-hidden="true">⚡</span>
              </a>
              <p className="smcg-hero-subcta">
                Free to start · 50 credits on signup · Full commercial rights
              </p>
            </div>

            {/* Platform badges */}
            <div className="smcg-platform-badges">
              {PLATFORMS.map((p) => (
                <span key={p.name} className="smcg-badge" style={{ borderColor: p.color + "44", color: p.color }}>
                  {p.icon} {p.name}
                </span>
              ))}
            </div>
          </div>

          {/* Animated visual - content feed mock */}
          <div className="smcg-hero-visual" aria-hidden="true">
            <div className="smcg-feed-scroll">
              <div className="smcg-feed-item smcg-feed-1">
                <div className="smcg-feed-media" />
                <div className="smcg-feed-overlay">
                  <span>✨ AI Generated</span>
                </div>
              </div>
              <div className="smcg-feed-item smcg-feed-2">
                <div className="smcg-feed-media" />
                <div className="smcg-feed-overlay">
                  <span>🎬 Reel Ready</span>
                </div>
              </div>
              <div className="smcg-feed-item smcg-feed-3">
                <div className="smcg-feed-media" />
                <div className="smcg-feed-overlay">
                  <span>📱 9:16</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* ══════════════════════════════════════
            STATS BANNER
        ══════════════════════════════════════ */}
        <section className="smcg-stats" aria-label="Key statistics">
          <div className="smcg-stats-grid">
            <div className="smcg-stat">
              <div className="smcg-stat-value">30<small>+</small></div>
              <div className="smcg-stat-label">Assets per hour</div>
            </div>
            <div className="smcg-stat">
              <div className="smcg-stat-value">10<small>+</small></div>
              <div className="smcg-stat-label">Platforms supported</div>
            </div>
            <div className="smcg-stat">
              <div className="smcg-stat-value">40<small>+</small></div>
              <div className="smcg-stat-label">AI voices</div>
            </div>
            <div className="smcg-stat">
              <div className="smcg-stat-value">6<small>x</small></div>
              <div className="smcg-stat-label">Faster than manual</div>
            </div>
          </div>
        </section>

        <main className="smcg-main">

          {/* ══════════════════════════════════════
              ASSET TYPES SECTION
          ══════════════════════════════════════ */}
          <section className="smcg-section" aria-labelledby="assets-h2">
            <div className="smcg-section-tag">What You Can Create</div>
            <h2 id="assets-h2" className="smcg-h2">
              Three Content Engines. One Page.
            </h2>
            <p className="smcg-section-sub">
              From static posts to viral videos — all from text prompts.
            </p>
            <div className="smcg-assets-grid">
              {ASSET_TYPES.map((asset) => (
                <article key={asset.type} className="smcg-asset-card">
                  <div className="smcg-asset-icon">{asset.icon}</div>
                  <h3>{asset.type}</h3>
                  <div className="smcg-asset-meta">
                    <span>⚡ {asset.timeToGenerate}</span>
                    <span>💳 {asset.creditCost}</span>
                  </div>
                  <p className="smcg-asset-desc">{asset.bestFor}</p>
                  <div className="smcg-asset-workflow">
                    <span className="smcg-label">Workflow</span>
                    <p>{asset.workflow}</p>
                  </div>
                  <div className="smcg-asset-tip">
                    <span>💡 Pro tip</span>
                    <p>{asset.proTip}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* ══════════════════════════════════════
              PLATFORM GUIDE
          ══════════════════════════════════════ */}
          <section className="smcg-section smcg-section-alt" aria-labelledby="platforms-h2">
            <div className="smcg-section-tag">Platform Guide</div>
            <h2 id="platforms-h2" className="smcg-h2">
              Native Content for Every Platform
            </h2>
            <p className="smcg-section-sub">
              Each social platform has its own visual language. Here's how to prompt for each.
            </p>
            <div className="smcg-platforms-grid">
              {PLATFORMS.map((platform) => (
                <article key={platform.name} className="smcg-platform-card">
                  <div className="smcg-platform-header">
                    <span className="smcg-platform-icon">{platform.icon}</span>
                    <h3>{platform.name}</h3>
                  </div>
                  <div className="smcg-platform-colors" style={{ background: platform.color + "15", borderLeftColor: platform.color }}>
                    <div className="smcg-platform-formats">
                      <span className="smcg-dot-label">📐 Formats</span>
                      <ul>
                        {platform.formats.map((f) => (
                          <li key={f}>{f}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="smcg-platform-types">
                      <span className="smcg-dot-label">🎨 Content ideas</span>
                      <ul>
                        {platform.contentTypes.slice(0, 3).map((t) => (
                          <li key={t}>{t}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="smcg-platform-prompt">
                    <span className="smcg-dot-label">📝 Sample prompt</span>
                    <code>{platform.promptExample}</code>
                  </div>
                  <div className="smcg-platform-model">
                    <strong>Best model:</strong> {platform.bestModel}
                  </div>
                  <div className="smcg-platform-hook">
                    <span>🎯 Hook principle:</span> {platform.hook}
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* ══════════════════════════════════════
              BATCH STRATEGIES
          ══════════════════════════════════════ */}
          <section className="smcg-section" aria-labelledby="batching-h2">
            <div className="smcg-section-tag">Batch Production</div>
            <h2 id="batching-h2" className="smcg-h2">
              Batch Your Content, Save 80% of Your Time
            </h2>
            <p className="smcg-section-sub">
              Stop creating one post at a time. Here's how to think in batches.
            </p>
            <div className="smcg-batch-grid">
              {BATCH_STRATEGIES.map((batch) => (
                <div key={batch.name} className="smcg-batch-card">
                  <h3>{batch.name}</h3>
                  <div className="smcg-batch-metrics">
                    <span>⏱️ {batch.timeRequired}</span>
                    <span>📦 {batch.assetCount}</span>
                  </div>
                  <p className="smcg-batch-breakdown">{batch.breakdown}</p>
                  <div className="smcg-batch-ideal">
                    <span>🎯 Ideal for</span>
                    <p>{batch.idealFor}</p>
                  </div>
                  <details className="smcg-batch-details">
                    <summary>View workflow →</summary>
                    <p>{batch.workflow}</p>
                  </details>
                </div>
              ))}
            </div>
          </section>

          {/* ══════════════════════════════════════
              PROMPT TEMPLATES LIBRARY
          ══════════════════════════════════════ */}
          <section className="smcg-section smcg-section-alt" aria-labelledby="prompts-h2">
            <div className="smcg-section-tag">Prompt Library</div>
            <h2 id="prompts-h2" className="smcg-h2">
              Copy-Paste Ready Prompts
            </h2>
            <p className="smcg-section-sub">
              Use these templates to generate platform-native content instantly.
            </p>
            <div className="smcg-prompts-grid">
              {PROMPT_TEMPLATES.map((template, idx) => (
                <div key={idx} className="smcg-prompt-card">
                  <div className="smcg-prompt-header">
                    <strong>{template.platform}</strong>
                    <span className="smcg-prompt-format">{template.format}</span>
                  </div>
                  <div className="smcg-prompt-template">
                    <span className="smcg-label">Template</span>
                    <code>{template.template}</code>
                  </div>
                  <div className="smcg-prompt-example">
                    <span className="smcg-label">Example</span>
                    <code>{template.example}</code>
                  </div>
                </div>
              ))}
            </div>

            {/* Mid-page CTA */}
            <div className="smcg-mid-cta">
              <div className="smcg-mid-cta-bg" />
              <div className="smcg-mid-cta-inner">
                <h3>Ready to turn these prompts into posts?</h3>
                <p>Generate, download, schedule — all from one page.</p>
                <a href={CTA_URL} className="smcg-mid-cta-btn">
                  ✨ Start Your Batch Generation →
                </a>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════
              HOOK LIBRARY
          ══════════════════════════════════════ */}
          <section className="smcg-section" aria-labelledby="hooks-h2">
            <div className="smcg-section-tag">Viral Hook Library</div>
            <h2 id="hooks-h2" className="smcg-h2">
              6 Proven Hook Prompts
            </h2>
            <p className="smcg-section-sub">
              The first 3 seconds decide if someone scrolls past. Use these hook-first prompts.
            </p>
            <div className="smcg-hooks-grid">
              {HOOK_LIBRARY.map((hook, idx) => (
                <div key={idx} className="smcg-hook-card">
                  <div className="smcg-hook-platform">{hook.platform}</div>
                  <div className="smcg-hook-type">{hook.hookType}</div>
                  <code className="smcg-hook-prompt">{hook.prompt}</code>
                </div>
              ))}
            </div>
          </section>

          {/* ══════════════════════════════════════
              MODEL MATRIX
          ══════════════════════════════════════ */}
          <section className="smcg-section smcg-section-alt" aria-labelledby="models-h2">
            <div className="smcg-section-tag">Model Selection</div>
            <h2 id="models-h2" className="smcg-h2">
              Which AI Model Should You Use?
            </h2>
            <p className="smcg-section-sub">
              Different models excel at different content types. Here's your cheat sheet.
            </p>
            <div className="smcg-model-table" role="region" aria-label="AI model recommendations">
              <div className="smcg-model-header">
                <span>Model</span>
                <span>Best For</span>
                <span>Speed</span>
                <span>Cost</span>
                <span>Platform Fit</span>
              </div>
              {MODEL_MATRIX.map((model) => (
                <div key={model.model} className="smcg-model-row">
                  <span className="smcg-model-name">{model.model}</span>
                  <span className="smcg-model-use">{model.bestFor}</span>
                  <span className="smcg-model-speed">{model.speed}</span>
                  <span className="smcg-model-cost">{model.cost}</span>
                  <span className="smcg-model-platforms">{model.platformFit}</span>
                </div>
              ))}
            </div>
          </section>

          {/* ══════════════════════════════════════
              WORKFLOW STEPS
          ══════════════════════════════════════ */}
          <section className="smcg-section" aria-labelledby="workflow-h2">
            <div className="smcg-section-tag">The SMM Workflow</div>
            <h2 id="workflow-h2" className="smcg-h2">
              From Prompt to Post: 6 Steps
            </h2>
            <div className="smcg-workflow-steps">
              {WORKFLOW_STEPS.map((step) => (
                <div key={step.step} className="smcg-workflow-step">
                  <div className="smcg-step-number">{step.step}</div>
                  <div className="smcg-step-content">
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                    <div className="smcg-step-insight">{step.insight}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ══════════════════════════════════════
              DEEP DIVES (Long-form SEO)
          ══════════════════════════════════════ */}
          <section className="smcg-section smcg-section-alt" aria-labelledby="deepdive-h2">
            <div className="smcg-section-tag">In-Depth Guides</div>
            <h2 id="deepdive-h2" className="smcg-h2">
              The Complete AI Social Media Playbook (2026)
            </h2>
            <div className="smcg-deepdives">
              {DEEP_DIVES.map((dive, idx) => (
                <article key={idx} className="smcg-deepdive">
                  <h3>{dive.title}</h3>
                  {dive.body.split("\n\n").map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </article>
              ))}
            </div>
          </section>

          {/* ══════════════════════════════════════
              FAQ
          ══════════════════════════════════════ */}
          <section className="smcg-section" aria-labelledby="faq-h2">
            <div className="smcg-section-tag">FAQ</div>
            <h2 id="faq-h2" className="smcg-h2">
              Frequently Asked Questions
            </h2>
            <div className="smcg-faq-grid">
              {FAQ.map((item, idx) => (
                <details key={idx} className="smcg-faq-item">
                  <summary>
                    {item.q}
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* ══════════════════════════════════════
              FINAL CTA
          ══════════════════════════════════════ */}
          <section className="smcg-final-cta">
            <div className="smcg-final-glow" aria-hidden="true" />
            <div className="smcg-final-inner">
              <p className="smcg-final-kicker">Your next month of content is waiting</p>
              <h2 className="smcg-final-h2">
                Stop creating one post at a time.
                <br />
                <span>Start batching with AI.</span>
              </h2>
              <p className="smcg-final-sub">
                Generate images, voiceovers, and videos for 10+ platforms.
                All from text prompts. All with full commercial rights.
              </p>
              <a href={CTA_URL} className="smcg-final-btn">
                <span>✨</span>
                Generate Social Media Content — Free
                <span>→</span>
              </a>
              <div className="smcg-final-checks">
                {[
                  "Free to start",
                  "No credit card",
                  "Full commercial rights",
                  "10+ AI models",
                  "Instant downloads",
                  "All social platforms",
                ].map((check) => (
                  <span key={check} className="smcg-final-check">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <circle cx="7" cy="7" r="7" fill="rgba(240, 158, 68, 0.15)"/>
                      <path d="M4 7l2 2 4-4" stroke="#F09E44" strokeWidth="1.5"/>
                    </svg>
                    {check}
                  </span>
                ))}
              </div>
              <p className="smcg-final-links">
                Also explore:{" "}
                <a href={`/create-ai-content?tab=image&utm_source=tools&utm_medium=landing-page&utm_campaign=social-media-content-generator-ai`}>AI Image Generator</a>
                {" · "}
                <a href={`/create-ai-content?tab=voice&utm_source=tools&utm_medium=landing-page&utm_campaign=social-media-content-generator-ai`}>AI Voice Generator</a>
                {" · "}
                <a href="/pricing">Pricing</a>
              </p>
            </div>
          </section>

        </main>
      </div>
    </>
  );
}