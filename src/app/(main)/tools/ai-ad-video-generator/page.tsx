import type { Metadata } from "next";
import "./ai-ad-video.css";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "AI Ad Video Generator — Create High-Converting Video Ads in Seconds | Scenith",
  description:
    "Generate scroll-stopping video ads for Meta, TikTok, YouTube & Google with AI. No editing. No crew. Just a prompt — and your ad is ready in 90 seconds. Free to try.",
  keywords: [
    "AI ad video generator",
    "AI video ads maker",
    "generate video ads AI",
    "AI Facebook video ad creator",
    "TikTok AI video ad generator",
    "AI YouTube ad maker",
    "video ad creator free",
    "text to video ad AI",
    "AI commercial video generator",
    "automated video ad creation",
    "AI video advertising tool",
    "AI creative ads generator",
    "video ad maker no editing",
    "AI short video ads 2026",
    "social media ad video AI",
    "product video ad AI",
    "performance creative AI",
    "AI UGC video ads",
    "Kling AI video ads",
    "Veo 3 ad video",
  ],
  openGraph: {
    title: "AI Ad Video Generator — Create Converting Ads in 90 Seconds | Scenith",
    description:
      "Skip the production crew. Turn a text prompt into a polished video ad ready for Meta, TikTok, or YouTube — in under 2 minutes.",
    url: "https://scenith.in/tools/ai-ad-video-generator",
    siteName: "Scenith",
    type: "website",
    images: [
      {
        url: "https://scenith.in/og/ai-ad-video-generator.jpg",
        width: 1200,
        height: 630,
        alt: "Scenith AI Ad Video Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Ad Video Generator — Scenith",
    description:
      "Write a prompt. Get a video ad. Meta, TikTok, YouTube — ready in 90 seconds. Free to start.",
    images: ["https://scenith.in/og/ai-ad-video-generator.jpg"],
  },
  alternates: {
    canonical: "https://scenith.in/tools/ai-ad-video-generator",
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
      "@id": "https://scenith.in/tools/ai-ad-video-generator",
      url: "https://scenith.in/tools/ai-ad-video-generator",
      name: "AI Ad Video Generator",
      description:
        "Generate high-converting video ads for Meta, TikTok, YouTube and Google using AI. No editing required. Commercial rights included.",
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
            name: "AI Ad Video Generator",
            item: "https://scenith.in/tools/ai-ad-video-generator",
          },
        ],
      },
    },
    {
      "@type": "SoftwareApplication",
      name: "Scenith AI Ad Video Generator",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Free to start. Paid plans from $9/month.",
      },
      featureList: [
        "AI-generated video ads from text",
        "Meta, TikTok, YouTube ad formats",
        "9:16, 16:9, 1:1 aspect ratios",
        "Multiple AI models including Kling 2.6 Pro and Veo 3.1",
        "AI audio with Grok Imagine",
        "Image-to-video ad creation",
        "1080p MP4 download",
        "Full commercial rights",
        "No editing software required",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is an AI ad video generator?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "An AI ad video generator takes a text description of your product, brand, or concept and renders a short video clip suitable for use as a paid advertisement. Tools like Scenith use models such as Kling 2.6 Pro, Veo 3.1, and Wan 2.5 to produce cinematic footage directly from your prompt — no camera, crew, or editing required.",
          },
        },
        {
          "@type": "Question",
          name: "Can I use AI-generated videos as actual Facebook or TikTok ads?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. AI-generated video from Scenith comes with full commercial rights and exports as MP4 — the format accepted by Meta Ads Manager, TikTok Ads, Google Ads, and every major ad platform. You can upload directly after downloading with no additional processing.",
          },
        },
        {
          "@type": "Question",
          name: "What aspect ratios does the AI ad video generator support?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Scenith supports 9:16 (vertical — for TikTok Ads, Instagram Reels Ads, YouTube Shorts Ads), 16:9 (landscape — for YouTube pre-roll and LinkedIn Video Ads), and 1:1 (square — for Facebook Feed and Instagram Feed ads). All formats are natively supported with a single toggle.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to generate a video ad with AI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most AI video ads render in 30–120 seconds. Wan 2.5 and Kling 2.5 Turbo are the fastest options. Kling 2.6 Pro and Veo 3.1 take slightly longer but produce higher visual quality suitable for premium placements.",
          },
        },
        {
          "@type": "Question",
          name: "How do I write a good prompt for an AI video ad?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The best AI ad video prompts include: the visual hook or opening scene, the setting and lighting, the product or subject, the emotional tone, and a style reference. Example: 'Slow push-in shot of a luxury skincare bottle on a marble surface, warm candlelight, golden highlights, Chanel commercial aesthetic, ultra-detailed 4K.' Specificity always outperforms vague descriptions.",
          },
        },
        {
          "@type": "Question",
          name: "Is there a free AI ad video generator?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Scenith offers one free video generation on sign-up — no credit card required. This is enough to test the full generation quality. Paid plans start at $9/month and include 300 credits covering video ads, AI image generation, and AI voice generation for complete ad production.",
          },
        },
      ],
    },
  ],
};

// ─── Page Data ────────────────────────────────────────────────────────────────

const CTA_URL =
  "https://scenith.in/create-ai-content?tab=video&utm_source=tools&utm_medium=landing-page&utm_campaign=ai-ad-video-generator";

const AD_PLATFORMS = [
  {
    name: "Meta Ads",
    icon: "📘",
    formats: ["Reels Ad · 9:16", "Feed Ad · 1:1", "Stories Ad · 9:16"],
    tip: "Use Grok Imagine for Reels Ads — AI audio drives significantly higher retention on Meta placements.",
    color: "#1877f2",
  },
  {
    name: "TikTok Ads",
    icon: "🎵",
    formats: ["TopView · 9:16", "In-Feed Ad · 9:16", "Spark Ad · 9:16"],
    tip: "TikTok rewards native-feeling content. Prompt for a documentary, raw, or UGC aesthetic rather than polished commercial.",
    color: "#010101",
  },
  {
    name: "YouTube Ads",
    icon: "▶️",
    formats: ["Pre-roll · 16:9", "Bumper Ad · 16:9", "Shorts Ad · 9:16"],
    tip: "For pre-roll, prompt specifically for the first 5 seconds: 'dramatic opening close-up...' — make the skip button irrelevant.",
    color: "#ff0000",
  },
  {
    name: "Google Display",
    icon: "🔍",
    formats: ["Responsive Video · 16:9", "Discovery Ad · 1:1"],
    tip: "Google Display rewards high-contrast visuals. Use Kling 2.6 Pro with bright, clean backgrounds for best CTR.",
    color: "#4285f4",
  },
  {
    name: "LinkedIn Ads",
    icon: "💼",
    formats: ["Video Ad · 16:9", "Carousel Video · 1:1"],
    tip: "LinkedIn audiences respond to authority signals. Veo 3.1 produces professional, corporate-aesthetic footage that outperforms casual styles on LinkedIn.",
    color: "#0a66c2",
  },
  {
    name: "Snapchat Ads",
    icon: "👻",
    formats: ["Snap Ad · 9:16", "Story Ad · 9:16"],
    tip: "Snapchat skews young. Fast-cutting, vibrant energy works — prompt for 'kinetic motion, bold colors, youthful energy, 9:16 vertical'.",
    color: "#fffc00",
  },
];

const AD_TYPES = [
  {
    icon: "🎯",
    title: "Direct Response Ads",
    subtitle: "The performance marketer's workhorse",
    description:
      "Direct response video ads are built around one goal: make the viewer take action now. Click, buy, sign up, download. The visual hook exists only to hold attention long enough for the CTA to land. AI video excels at producing the punchy, visually arresting opening frames that direct response demands — because you can generate 10 different hooks in the time it takes a traditional team to storyboard one.",
    prompt: '"Fast cut product reveal on a dark surface, dramatic light bloom, price badge appearing, white text overlay, urgency tone, 5 seconds, 9:16"',
    model: "Kling 2.5 Turbo",
    why: "Speed-optimized for iterating multiple DR creative variants",
  },
  {
    icon: "✨",
    title: "Brand Awareness Ads",
    subtitle: "Cinematic presence over conversion pressure",
    description:
      "Brand awareness video ads prioritize emotional imprint over immediate action. They're designed to be remembered, not clicked. These are typically higher-budget placements — YouTube pre-roll, Connected TV, premium programmatic — where production quality is visible and important. AI models like Kling 2.6 Pro and Veo 3.1 now produce footage at the quality threshold required for these placements.",
    prompt: '"Sweeping drone shot over a mountain sunrise, lone hiker silhouette, warm mist, brand colour grade, cinematic, no text, 10 seconds, 16:9"',
    model: "Veo 3.1",
    why: "Highest visual fidelity for premium placements",
  },
  {
    icon: "🛒",
    title: "Product Demo Ads",
    subtitle: "Show it in action, not just in frame",
    description:
      "Product demo ads show the product being used in a real-world context. They answer the buyer's mental question: 'What does this actually look like in my life?' AI video — particularly the Image-to-Video mode — lets you take a clean product photo and animate it into a lifestyle context. A blender product shot becomes a kitchen counter scene. A skincare bottle becomes a morning routine. The product stays consistent; the context is AI-generated.",
    prompt: '"Close-up of hands using a sleek white electric toothbrush, bathroom mirror steam, morning light, aspirational lifestyle aesthetic, slow motion droplets, 9:16"',
    model: "Kling 2.6 Pro",
    why: "Best motion realism for product interaction footage",
  },
  {
    icon: "👥",
    title: "UGC-Style Ads",
    subtitle: "Fake authenticity that actually converts",
    description:
      "User-generated content (UGC) style ads consistently outperform polished commercial creative on platforms like TikTok and Instagram because they feel native, not like ads. The challenge: real UGC is hard to produce at scale. AI video solves this by generating footage with the visual language of UGC — handheld-feeling movement, natural lighting, unscripted energy — from a prompt. No creator needed.",
    prompt: '"Handheld shaky cam style, person unboxing a product at their kitchen table, natural daylight, excited authentic reaction, no studio lighting, raw and real, 9:16"',
    model: "Wan 2.5",
    why: "Natural motion and authentic visual texture",
  },
  {
    icon: "⏰",
    title: "Seasonal & Event Ads",
    subtitle: "The content type you can never produce fast enough",
    description:
      "Black Friday, Diwali, Christmas, Valentine's Day — seasonal ad campaigns have a fixed deadline and typically require unique creative for every holiday. Traditional production cannot keep up. AI video eliminates the timeline constraint: generate a holiday-specific video ad in 90 seconds, publish same-day. React to trending moments in real time. Be the brand that's always present during high-purchase moments.",
    prompt: '"Golden fairy lights bokeh, gift boxes stacking in slow motion, warm red and green colour palette, festive magical atmosphere, gentle snow particles, 9:16"',
    model: "Kling 2.6 Pro",
    why: "Rich visual detail for festive imagery",
  },
  {
    icon: "🌍",
    title: "Multi-Market Localised Ads",
    subtitle: "One concept, every market, zero extra production cost",
    description:
      "Running campaigns across India, the UAE, Europe, and the US traditionally requires separate production shoots for each market — different faces, settings, cultural contexts. AI video lets you generate a localised version for each market from a different prompt variant. Same product, different visual cultural context. Pair with Scenith's AI Voice tab for localised voiceovers in 20+ languages — complete localised ad in one session.",
    prompt: '"Busy Mumbai street market at golden hour, woman looking at phone with a satisfied smile, vibrant colours, authentic Indian street aesthetic, warm cinematic, 9:16"',
    model: "Veo 3.1",
    why: "Strongest prompt-following for culturally specific scenes",
  },
];

const PERFORMANCE_STATS = [
  { value: "48%", label: "lower CPM for video vs image ads on Meta", source: "Meta internal data, 2025" },
  { value: "3×", label: "higher click-through rate for video ads vs static on TikTok", source: "TikTok for Business, 2025" },
  { value: "157%", label: "more organic traffic generated by companies that use video in ads", source: "Brightcove, 2025" },
  { value: "5 sec", label: "is all you have before a viewer skips or scrolls — make every frame count", source: "Nielsen, 2025" },
  { value: "84%", label: "of consumers say they've been convinced to buy a product after watching a brand's video", source: "Wyzowl, 2026" },
  { value: "$300B+", label: "global video ad spend forecast for 2026 — the biggest creative budget in history", source: "Statista, 2026" },
];

const MODEL_AD_MATRIX = [
  {
    model: "Kling 2.6 Pro",
    badge: "Premium",
    badgeColor: "#5b4edc",
    bestFor: ["Luxury brand ads", "Premium e-commerce", "Fashion & beauty", "Automotive"],
    notIdealFor: ["High-volume A/B testing", "Budget-sensitive campaigns"],
    resolution: "1080p",
    speed: "60–100s",
    creditCost: "64cr / 5s",
  },
  {
    model: "Veo 3.1",
    badge: "Google",
    badgeColor: "#0f9d58",
    bestFor: ["Brand films", "Complex multi-subject scenes", "Documentary-style ads", "B2B advertising"],
    notIdealFor: ["Very fast-cut hook-first creative"],
    resolution: "1080p",
    speed: "80–120s",
    creditCost: "186cr / 5s",
  },
  {
    model: "Grok Imagine",
    badge: "Audio Included",
    badgeColor: "#dc2626",
    bestFor: ["TikTok ads", "Instagram Reels ads", "Snapchat", "Audio-forward creative"],
    notIdealFor: ["Silent placements", "Professional/corporate tone"],
    resolution: "720p",
    speed: "45–80s",
    creditCost: "47cr / 5s",
  },
  {
    model: "Wan 2.5",
    badge: "Fastest",
    badgeColor: "#d97706",
    bestFor: ["Creative A/B testing", "High-volume ad production", "UGC-style ads", "Budget campaigns"],
    notIdealFor: ["Ultra-premium brand placements"],
    resolution: "720p–1080p",
    speed: "30–60s",
    creditCost: "46cr / 5s",
  },
  {
    model: "Kling 2.5 Turbo",
    badge: "Value",
    badgeColor: "#7c3aed",
    bestFor: ["Daily content pipeline", "Retargeting ads", "Mid-market brand ads", "Consistent volume"],
    notIdealFor: ["Top-of-funnel ultra-premium"],
    resolution: "720p–1080p",
    speed: "45–75s",
    creditCost: "64cr / 5s",
  },
  {
    model: "Veo 3.1 Fast",
    badge: "Speed + Quality",
    badgeColor: "#059669",
    bestFor: ["Agency workflows", "Multiple client briefs", "Mid-tier brand ads", "Fast iteration at quality"],
    notIdealFor: ["Ultra-luxury top-tier placements"],
    resolution: "1080p",
    speed: "40–70s",
    creditCost: "92cr / 5s",
  },
];

const HOOKS_LIBRARY = [
  { platform: "Meta / IG Reels", category: "Product Reveal", hook: "Slow-motion unboxing of a premium product, close-up hands, dramatic light bloom on reveal, matte black background, 9:16 vertical" },
  { platform: "TikTok", category: "Before / After", hook: "Split frame — dull lifeless scene on left transforms to vibrant joyful version on right, smooth morph transition, upbeat energy, kinetic, 9:16" },
  { platform: "YouTube Pre-roll", category: "Problem Hook", hook: "Extreme close-up of a stressed face staring at a screen, dramatic pause, then warmth flooding in as the product appears off-screen, 16:9 cinematic" },
  { platform: "LinkedIn", category: "Authority/Stats", hook: "Bold white text on dark background counting up a statistic, clean corporate aesthetic, subtle particle animation, 16:9 professional" },
  { platform: "Instagram Feed", category: "Lifestyle Hook", hook: "Golden hour beach scene, woman laughing with product in hand, cinematic warm tones, aspirational editorial magazine aesthetic, 1:1 square" },
  { platform: "TikTok / Reels", category: "Curiosity Gap", hook: "Black screen, single spotlight revealing a mysterious glowing object, question text fades in, suspenseful, handheld-style, 9:16" },
  { platform: "YouTube Shorts", category: "Tutorial Opening", hook: "Overhead flat lay of product ingredients/components neatly arranged, animated labels appearing one by one, satisfying assembly, 9:16" },
  { platform: "Facebook Feed", category: "Testimonial Feel", hook: "Casual handheld style, living room setting, person holds product and reacts naturally with smile, authentic not staged, warm natural light, 1:1" },
];

const WORKFLOW = [
  {
    num: "01",
    title: "Define Your Ad Objective First",
    body: "Before writing a prompt, know your goal. Direct response (buy now) requires a hook-first visual. Brand awareness needs an emotional landscape. Product demo needs motion showing usage. Retargeting needs familiarity and urgency. Your objective determines the visual language — get that right before touching the prompt.",
    insight: "🎯 90% of underperforming AI video ads fail not because of AI quality — they fail because the creator didn't define what the ad was trying to do before generating.",
  },
  {
    num: "02",
    title: "Choose Platform → Aspect Ratio → Model",
    body: "Each ad platform has a native format. TikTok and Reels = 9:16 vertical. YouTube and LinkedIn = 16:9. Instagram/Facebook Feed = 1:1. Pick your platform first, lock in the aspect ratio, then choose the AI model. For TikTok use Grok Imagine (AI audio native). For YouTube/LinkedIn use Veo 3.1 or Kling 2.6 Pro (highest quality). For Meta retargeting at volume use Wan 2.5 or Kling 2.5 Turbo.",
    insight: "📐 Aspect ratio mismatch is the most common production error. A 16:9 video auto-cropped to 9:16 loses its visual composition entirely. Generate in the right ratio from the start.",
  },
  {
    num: "03",
    title: "Write the Hook Frame First, Then the Scene",
    body: "Your prompt should describe the video's opening frame in explicit visual terms. This is the frame that determines whether the viewer keeps watching. Describe the exact visual: camera angle, subject, lighting, mood, movement. Then describe the rest of the scene. Most people write prompts that describe a concept — write one that describes a specific, arresting visual moment instead.",
    insight: "🪝 'Close-up of a single ice cube dropping into a glass of amber liquid, slow motion, dramatic backlight, water crown explosion' outperforms 'a video showing our whisky brand' by an enormous margin. Describe the frame, not the concept.",
  },
  {
    num: "04",
    title: "Generate 3–5 Variants and A/B Test",
    body: "Never rely on a single AI-generated ad. Generate 3–5 variants by changing one variable at a time: the opening shot, the lighting mood, the camera movement, the aesthetic reference. Run them all with a small test budget ($10–50/variant). Let data pick the winner. Pause losers within 48 hours. Scale the winner. Repeat. This is the creative testing loop that AI makes economically viable.",
    insight: "📊 Performance marketers who systematically A/B test AI creative variants report finding a top-performing creative 3× faster than teams who produce one video and run it. Volume of experiments beats quality of intuition.",
  },
  {
    num: "05",
    title: "Add Voiceover and Download",
    body: "If your ad needs narration, switch to Scenith's Voice tab. Select from 40+ voices in 20+ languages. Generate a voiceover from the same ad script. Download the MP3 and the MP4. Combine in any simple editor or directly in Meta Ads Manager's built-in editor. You now have a complete voiced video ad — generated entirely from text, on one platform, in one session.",
    insight: "🎙️ Ads with voiceover report 22% higher brand recall than silent video ads (Nielsen). Adding an AI voice to your AI video costs one extra tab switch and 3 seconds of your time.",
  },
  {
    num: "06",
    title: "Upload Directly to Your Ad Platform",
    body: "Download the MP4 in up to 1080p. Log into Meta Ads Manager, TikTok Ads Manager, Google Ads, or LinkedIn Campaign Manager. Upload the video directly — it meets all technical requirements for every major ad platform. No transcoding. No format conversion. No file size issues. Hit publish. Your AI video ad is live.",
    insight: "✅ Technical spec: MP4, H.264, up to 1080p, up to 10 seconds. Meets Meta, TikTok, Google, LinkedIn, Snapchat ad specs without any modification.",
  },
];

const FAQ = [
  {
    q: "What is an AI ad video generator and how is it different from traditional video production?",
    a: "An AI ad video generator renders a short video clip from a text description using machine learning models trained on millions of video examples. Unlike traditional production — which requires a camera, crew, location, lighting, and weeks of post-production — AI video generation produces usable footage in 30–120 seconds from a single typed prompt. The output is a real MP4 video file that meets the technical requirements of every major ad platform. The quality gap between AI-generated and traditionally-shot video ads has effectively closed for most social media and digital advertising contexts as of 2026.",
  },
  {
    q: "What ad platforms can I run AI-generated video ads on?",
    a: "AI-generated video ads from Scenith can run on any platform that accepts MP4 video: Meta Ads (Facebook, Instagram, Reels), TikTok Ads, Google Ads (YouTube pre-roll, Shorts, Display), LinkedIn Video Ads, Snapchat Ads, Pinterest Video Ads, Twitter/X Video Ads, and programmatic display networks. The MP4 files export at up to 1080p and meet the technical specifications of all major ad platforms without modification.",
  },
  {
    q: "How do I generate a video ad specifically for TikTok vs Meta vs YouTube?",
    a: "The key differences are aspect ratio and aesthetic. For TikTok: select 9:16 aspect ratio, prompt for an authentic/UGC aesthetic, and use Grok Imagine if you want AI-generated audio. For Meta/Instagram Reels: 9:16 with a more polished aesthetic (Kling 2.6 Pro recommended). For Facebook Feed: 1:1 square format. For YouTube pre-roll: 16:9 landscape, higher quality model (Veo 3.1 or Kling 2.6 Pro), and focus your prompt on the first 5 seconds specifically since that's the pre-skip window. For LinkedIn: 16:9 with a professional, authoritative visual tone (Veo 3.1 excels here).",
  },
  {
    q: "Can I turn a product photo into a video ad?",
    a: "Yes — this is one of the most powerful features for performance marketers and e-commerce brands. Use the Image-to-Video mode in Scenith: upload your product photo, write a prompt describing the scene or motion you want to create around it, and the AI generates a video with your product as the anchor. A flat product shot becomes a lifestyle ad. A white-background Amazon image becomes a cinematic product reveal. No re-shoot required.",
  },
  {
    q: "How many video ad variants can I generate per month?",
    a: "On the free plan you get 1 video to test the platform. Paid plans start at $9/month (Creator Lite) with 300 credits. A 5-second video using Wan 2.5 costs 46 credits, meaning you can generate roughly 6 five-second videos per month on the entry plan. Higher tier plans offer more credits for agencies and performance marketers who need volume creative testing.",
  },
  {
    q: "Does AI video ad generation work for service businesses, not just products?",
    a: "Absolutely. Service businesses often benefit more from AI video than product businesses, because they don't have a physical product to film. AI video generates the visual context — a therapist's calming office, a lawyer's confident courtroom scene, a fitness coach's energetic gym atmosphere — that communicates the service's value proposition. Describe the feeling and environment your service creates, not the service itself.",
  },
  {
    q: "What's the best AI model for Facebook video ads specifically?",
    a: "For Facebook Feed (1:1) and Messenger Ads, Kling 2.6 Pro produces the highest quality output with the most realistic motion, which performs best on a feed where viewers scroll slowly and quality is visible. For Facebook Reels and Stories (9:16), Kling 2.5 Turbo is a great balance of speed and quality for the faster-scrolling context. If you're testing many creative variants on a limited budget, Wan 2.5 gives you the most volume per credit.",
  },
  {
    q: "Can I add text overlays or captions to AI-generated video ads?",
    a: "Scenith generates the raw video asset. For text overlays, captions, and branded elements, you have two options: (1) include text overlay instructions in your prompt — most models will render simple text into the video, though with varying reliability — or (2) download the MP4 and add text using Meta Ads Manager's built-in caption tool, TikTok's editor, Canva, CapCut, or any basic video editor. Most performance marketers prefer option 2 for precise control over typography and CTA placement.",
  },
  {
    q: "How does AI ad video compare to using a freelancer or creative agency?",
    a: "The economics are completely different. A freelance videographer produces one video in 2–5 days for $200–$2,000. An agency delivers one video in 1–3 weeks for $1,000–$10,000. Scenith generates one video in 90 seconds for a fraction of a cent per credit. The trade-off: AI video cannot replace a specific real person in the ad, cannot shoot a specific physical location, and is less reliable for very complex narrative sequences. For the 80% of digital ad creative that doesn't require those things — product reveals, lifestyle context, brand atmosphere, hooks, B-roll — AI video is unambiguously faster and more cost-effective.",
  },
  {
    q: "What makes a video ad 'high converting'? Can AI really produce that?",
    a: "High-converting video ads share specific structural elements: a strong visual hook in the first 3 frames, a clear problem-solution narrative, a visible product or service, and an obvious CTA. AI video handles the visual layer — the hook, the setting, the aesthetic, the motion. You control the structure through your prompt and your voiceover. The highest-performing AI ad creative in 2026 combines AI-generated video with a clear human strategy: AI produces the visuals, you engineer the persuasion architecture.",
  },
];

const DEEP_DIVES = [
  {
    title: "The Science of the 3-Second Hook in Video Ads",
    body: `The most important 3 seconds in advertising are the first 3 seconds of your video ad.

Meta's own data shows that view duration drops by over 60% between the first and fifth second of a video ad if the opening frame doesn't immediately arrest attention. TikTok's algorithm deprioritises videos where the 2-second retention rate drops below 60%. YouTube's skip rate data shows that ads with a question, a visual anomaly, or a fast product reveal in the first 5 seconds have 2.3× the view-through rate of ads with a slow, mood-building opening.

This is the hook problem — and it's where most advertising teams waste their budget. Traditional production encourages slow, cinematic builds because that's what feels artistic. Advertising algorithms reward immediate visual impact.

AI video solves the hook problem by making iteration free. You can generate 10 different opening frames — different camera angles, different lighting setups, different visual intensities — test which 3-second hook retains the most viewers, then rebuild the full ad around the winner. This is a testing workflow that traditional production makes economically impossible.

When writing your AI ad prompts, always lead with the frame. Describe exactly what appears in the first shot in explicit visual terms: the subject, the angle, the lighting, the motion. Then let the scene develop from there. 'Close-up of a flame igniting on a dark surface, then pulling back to reveal a candle product, warm amber light, ultra slow motion' is a hook-first prompt. 'A video about our luxury candle brand' is not.`,
  },
  {
    title: "Performance Creative Testing at Scale: The AI Advantage",
    body: `Performance creative — the discipline of systematically testing ad creative variants to find winners — is the most impactful skill in digital advertising. Yet most marketing teams test fewer than 5 creative variants per month because production cost and time make it economically prohibitive.

The math is brutal: if you test 5 creative variants and one is a clear winner with 3× the ROAS of the others, you could have found that winner by testing 4 losers. Now imagine you could test 40 variants for the same cost and time. You'd find a winner with 3× ROAS after testing 4 losers — then test 36 more and potentially find one with 5× or 7× ROAS. The winner pool expands with sample size.

AI video makes high-volume creative testing economically viable for the first time. The cost of generating an additional AI video ad variant is measured in credits and seconds, not dollars and days. A performance marketing team running Scenith can generate and test 20+ creative variants per week against a small split-testing budget and let data drive creative decisions.

The recommended framework: identify the core creative hypothesis (what visual hook will resonate with this audience?), generate 5 variants testing different hooks, run each with $10–20 spend against the same audience segment, eliminate after 48 hours based on 3-second view rate and CTR, scale the winner, generate 5 more variants iterating on the winner's successful elements. Repeat every week.

Teams running this process consistently report creative refresh cycles that are 10–20× faster and CPC reductions of 30–50% versus teams that produce and run a single video creative for weeks at a time.`,
  },
  {
    title: "AI Video Ads for E-Commerce: The Image-to-Video Playbook",
    body: `E-commerce brands have a specific advantage with AI ad video that pure service businesses don't: they have existing product photography. And AI's Image-to-Video capability transforms every product photo in your catalog into a potential video ad asset.

The traditional e-commerce video ad production problem: you have 200 SKUs, a photography studio shoots them all for product pages, but video production for each SKU would cost $500–2,000 per video and take weeks. The result: only your top-10 hero products have video ads. The other 190 SKUs run static image ads that underperform by 40–60% on video-preferring placements.

The AI playbook: photograph every SKU cleanly on a neutral background. Upload each photo to Scenith's Image-to-Video mode. Write a contextual prompt that places the product in a lifestyle environment: 'This protein powder bag placed on a gym locker shelf, sweaty athletic hands reaching for it, locker room light, motivational energy, 9:16.' AI generates a video ad for that product in 90 seconds. Cost: pennies. Scale: every SKU you have.

The prompting approach for e-commerce image-to-video is different from text-to-video. Your goal is to keep the product visually consistent (the reference image anchors it) while generating lifestyle context around it. Describe the environment, the person, the action, and the emotion — not the product itself. The product is already in the image; the AI adds the world around it.

Run these Image-to-Video ads on Dynamic Product Ads (DPA) on Meta, where they can be auto-matched to relevant audiences based on browsing behaviour. Video DPA outperforms image DPA by 30–70% on conversion rate in most e-commerce categories.`,
  },
];

// ─── Page Component ────────────────────────────────────────────────────────────

export default function AIAdVideoGeneratorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="aavg-root">

        {/* ── Breadcrumb ── */}
        <nav className="aavg-breadcrumb" aria-label="Breadcrumb">
          <ol>
            <li><a href="https://scenith.in">Scenith</a></li>
            <li aria-hidden>/</li>
            <li><a href="https://scenith.in/tools">Tools</a></li>
            <li aria-hidden>/</li>
            <li aria-current="page">AI Ad Video Generator</li>
          </ol>
        </nav>

        {/* ══════════════════════════════════════
            HERO
        ══════════════════════════════════════ */}
        <header className="aavg-hero">
          <div className="aavg-hero-noise" aria-hidden="true" />
          <div className="aavg-hero-lines" aria-hidden="true" />
          <div className="aavg-hero-glow" aria-hidden="true" />

          <div className="aavg-hero-body">

            <div className="aavg-eyebrow" aria-label="Supported platforms">
              <span className="aavg-eyebrow-dot" aria-hidden="true" />
              Meta · TikTok · YouTube · Google · LinkedIn · Snapchat
            </div>

            <h1 className="aavg-h1">
              The AI Ad Video Generator
              <br />
              <span className="aavg-h1-accent">That Actually Converts</span>
            </h1>

            <p className="aavg-hero-desc">
              Write a prompt. Pick your platform. Get a high-converting video ad in{" "}
              <strong>90 seconds</strong>. No crew. No studio. No editing timeline.
              Full commercial rights. Download MP4 and publish directly to your
              ad platform.
            </p>

            {/* ── BIG CTA ── */}
            <div className="aavg-hero-cta-wrap">
              <a
                href={CTA_URL}
                className="aavg-hero-cta"
                aria-label="Generate your first AI video ad free on Scenith"
              >
                <span className="aavg-cta-play" aria-hidden="true">▶</span>
                <span className="aavg-cta-text">
                  Generate Your First Video Ad Free
                </span>
                <span className="aavg-cta-arrow" aria-hidden="true">→</span>
              </a>
              <p className="aavg-hero-subcta">
                No credit card · 1 free generation · Full commercial rights
              </p>
            </div>

            {/* ── Platform Pills ── */}
            <div className="aavg-platform-pills" aria-label="Supported ad platforms">
              {[
                { name: "Meta Ads", color: "#1877f2" },
                { name: "TikTok Ads", color: "#fe2c55" },
                { name: "YouTube Ads", color: "#ff0000" },
                { name: "Google Ads", color: "#4285f4" },
                { name: "LinkedIn Ads", color: "#0a66c2" },
                { name: "Snapchat Ads", color: "#fffc00", dark: true },
              ].map((p) => (
                <span
                  key={p.name}
                  className="aavg-pill"
                  style={{
                    background: p.color + "18",
                    borderColor: p.color + "44",
                    color: p.dark ? "#888" : p.color,
                  }}
                >
                  {p.name}
                </span>
              ))}
            </div>
          </div>

          {/* ── Animated ad format preview ── */}
          <div className="aavg-hero-visual" aria-hidden="true">
            <div className="aavg-ad-preview-stack">
              {/* 9:16 */}
              <div className="aavg-preview-card aavg-preview-916">
                <div className="aavg-preview-bar">
                  <span /><span /><span />
                </div>
                <div className="aavg-preview-content">
                  <div className="aavg-preview-play" />
                  <div className="aavg-preview-badge">TikTok Ad</div>
                </div>
                <div className="aavg-preview-cta-bar">Shop Now →</div>
              </div>
              {/* 16:9 */}
              <div className="aavg-preview-card aavg-preview-169">
                <div className="aavg-preview-bar">
                  <span /><span /><span />
                </div>
                <div className="aavg-preview-content">
                  <div className="aavg-preview-play" />
                  <div className="aavg-preview-badge">YouTube Pre-roll</div>
                </div>
                <div className="aavg-preview-cta-bar">Skip Ad in 3… →</div>
              </div>
              {/* 1:1 */}
              <div className="aavg-preview-card aavg-preview-11">
                <div className="aavg-preview-bar">
                  <span /><span /><span />
                </div>
                <div className="aavg-preview-content">
                  <div className="aavg-preview-play" />
                  <div className="aavg-preview-badge">Meta Feed Ad</div>
                </div>
                <div className="aavg-preview-cta-bar">Learn More →</div>
              </div>
            </div>
          </div>
        </header>

        {/* ══════════════════════════════════════
            PERFORMANCE STATS BAR
        ══════════════════════════════════════ */}
        <section className="aavg-stats-section" aria-label="Video advertising statistics">
          <div className="aavg-stats-grid">
            {PERFORMANCE_STATS.map((s) => (
              <div key={s.value} className="aavg-stat-block">
                <strong>{s.value}</strong>
                <p>{s.label}</p>
                <small>{s.source}</small>
              </div>
            ))}
          </div>
        </section>

        <main className="aavg-main">

          {/* ══════════════════════════════════════
              PLATFORM GUIDE
          ══════════════════════════════════════ */}
          <section className="aavg-section" aria-labelledby="platforms-h2">
            <div className="aavg-section-tag">Platform Guide</div>
            <h2 id="platforms-h2" className="aavg-h2">
              Generate AI Video Ads for Every Major Ad Platform
            </h2>
            <p className="aavg-section-sub">
              Each platform has its own visual language, format requirements, and audience behaviour.
              Here's exactly how to generate AI video ads that are native to each.
            </p>
            <div className="aavg-platforms-grid">
              {AD_PLATFORMS.map((p) => (
                <article key={p.name} className="aavg-platform-card" style={{ "--platform-color": p.color } as React.CSSProperties}>
                  <div className="aavg-platform-header">
                    <span className="aavg-platform-icon" aria-hidden="true">{p.icon}</span>
                    <h3>{p.name}</h3>
                  </div>
                  <ul className="aavg-platform-formats" aria-label={`${p.name} ad formats`}>
                    {p.formats.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                  <div className="aavg-platform-tip">
                    <span className="aavg-tip-label" aria-hidden="true">✦ Expert tip</span>
                    <p>{p.tip}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* ══════════════════════════════════════
              AD TYPES
          ══════════════════════════════════════ */}
          <section className="aavg-section aavg-section-alt" aria-labelledby="adtypes-h2">
            <div className="aavg-section-tag">Ad Types</div>
            <h2 id="adtypes-h2" className="aavg-h2">
              6 Video Ad Types You Can Generate with AI — and Exactly How to Prompt Each
            </h2>
            <p className="aavg-section-sub">
              Different campaign objectives demand different creative structures.
              Here's the complete breakdown — with ready-to-use prompts and model recommendations for each.
            </p>
            <div className="aavg-adtypes-list">
              {AD_TYPES.map((t, i) => (
                <article key={t.title} className="aavg-adtype-card">
                  <div className="aavg-adtype-num" aria-hidden="true">0{i + 1}</div>
                  <div className="aavg-adtype-body">
                    <div className="aavg-adtype-header">
                      <span className="aavg-adtype-icon" aria-hidden="true">{t.icon}</span>
                      <div>
                        <h3>{t.title}</h3>
                        <p className="aavg-adtype-sub">{t.subtitle}</p>
                      </div>
                    </div>
                    <p className="aavg-adtype-desc">{t.description}</p>
                    <div className="aavg-adtype-prompt-wrap">
                      <span className="aavg-prompt-label">Sample prompt</span>
                      <code className="aavg-prompt-code">{t.prompt}</code>
                    </div>
                    <div className="aavg-adtype-meta">
                      <span className="aavg-model-rec">
                        <strong>Recommended model:</strong> {t.model}
                      </span>
                      <span className="aavg-model-why">{t.why}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* ══════════════════════════════════════
              MODEL MATRIX
          ══════════════════════════════════════ */}
          <section className="aavg-section" aria-labelledby="models-h2">
            <div className="aavg-section-tag">Model Selection</div>
            <h2 id="models-h2" className="aavg-h2">
              Which AI Model Should You Use for Your Video Ad?
            </h2>
            <p className="aavg-section-sub">
              Not all AI video models are built the same. Here's the definitive selection
              guide for advertising use cases.
            </p>
            <div className="aavg-model-matrix">
              {MODEL_AD_MATRIX.map((m) => (
                <article key={m.model} className="aavg-model-card">
                  <div className="aavg-model-top">
                    <h3>{m.model}</h3>
                    <span className="aavg-model-badge" style={{ background: m.badgeColor }}>{m.badge}</span>
                  </div>
                  <div className="aavg-model-specs">
                    <span>🎬 {m.resolution}</span>
                    <span>⚡ {m.speed}</span>
                    <span>💳 {m.creditCost}</span>
                  </div>
                  <div className="aavg-model-section">
                    <p className="aavg-model-section-label">✅ Best for</p>
                    <ul>
                      {m.bestFor.map((b) => <li key={b}>{b}</li>)}
                    </ul>
                  </div>
                  <div className="aavg-model-section aavg-model-not">
                    <p className="aavg-model-section-label">⚠️ Not ideal for</p>
                    <ul>
                      {m.notIdealFor.map((b) => <li key={b}>{b}</li>)}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* ══════════════════════════════════════
              HOOKS LIBRARY
          ══════════════════════════════════════ */}
          <section className="aavg-section aavg-section-alt" aria-labelledby="hooks-h2">
            <div className="aavg-section-tag">Prompt Library</div>
            <h2 id="hooks-h2" className="aavg-h2">
              8 Ready-to-Use AI Video Ad Hook Prompts
            </h2>
            <p className="aavg-section-sub">
              Copy any of these into Scenith's video generator. Each is engineered
              for maximum first-frame retention on its target platform.
            </p>
            <div className="aavg-hooks-table" role="region" aria-label="Hooks prompt library">
              <div className="aavg-hooks-header">
                <span>Platform</span>
                <span>Hook Type</span>
                <span>Prompt</span>
              </div>
              {HOOKS_LIBRARY.map((h, i) => (
                <div key={i} className="aavg-hooks-row">
                  <span className="aavg-hooks-platform">{h.platform}</span>
                  <span className="aavg-hooks-cat">{h.category}</span>
                  <code className="aavg-hooks-prompt">{h.hook}</code>
                </div>
              ))}
            </div>

            {/* MID-PAGE CTA */}
            <div className="aavg-mid-cta">
              <div className="aavg-mid-cta-glow" aria-hidden="true" />
              <div className="aavg-mid-cta-inner">
                <h3>Try These Prompts in the AI Video Generator</h3>
                <p>
                  All 6 AI video models · 3 aspect ratios · Download MP4 · Full commercial rights
                </p>
                <a href={CTA_URL} className="aavg-mid-cta-btn">
                  🎬 Open AI Ad Video Generator →
                </a>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════
              WORKFLOW
          ══════════════════════════════════════ */}
          <section className="aavg-section" aria-labelledby="workflow-h2">
            <div className="aavg-section-tag">Complete Workflow</div>
            <h2 id="workflow-h2" className="aavg-h2">
              How to Create a High-Converting AI Video Ad: The 6-Step Process
            </h2>
            <div className="aavg-workflow-list">
              {WORKFLOW.map((step) => (
                <div key={step.num} className="aavg-workflow-item">
                  <div className="aavg-workflow-num" aria-hidden="true">{step.num}</div>
                  <div className="aavg-workflow-content">
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                    <div className="aavg-workflow-insight">{step.insight}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ══════════════════════════════════════
              DEEP DIVES
          ══════════════════════════════════════ */}
          <section className="aavg-section aavg-section-alt" aria-labelledby="deepdive-h2">
            <div className="aavg-section-tag">In Depth</div>
            <h2 id="deepdive-h2" className="aavg-h2">
              The Complete Guide to AI-Generated Video Ads in 2026
            </h2>
            <div className="aavg-deepdive-list">
              {DEEP_DIVES.map((d) => (
                <article key={d.title} className="aavg-deepdive-card">
                  <h3>{d.title}</h3>
                  {d.body.split("\n\n").map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </article>
              ))}
            </div>
          </section>

          {/* ══════════════════════════════════════
              FAQ
          ══════════════════════════════════════ */}
          <section className="aavg-section" aria-labelledby="faq-h2">
            <div className="aavg-section-tag">FAQ</div>
            <h2 id="faq-h2" className="aavg-h2">
              AI Ad Video Generator — Frequently Asked Questions
            </h2>
            <div className="aavg-faq-list">
              {FAQ.map((item, i) => (
                <details key={i} className="aavg-faq-item">
                  <summary className="aavg-faq-q">
                    <span>{item.q}</span>
                    <svg className="aavg-faq-chevron" width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                      <path d="M4.5 6.75L9 11.25l4.5-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </summary>
                  <div className="aavg-faq-a">{item.a}</div>
                </details>
              ))}
            </div>
          </section>

          {/* ══════════════════════════════════════
              FINAL CTA
          ══════════════════════════════════════ */}
          <section className="aavg-final-cta" aria-label="Final call to action">
            <div className="aavg-final-bg" aria-hidden="true">
              <div className="aavg-final-glow-1" />
              <div className="aavg-final-glow-2" />
              <div className="aavg-final-grid" />
            </div>
            <div className="aavg-final-inner">
              <p className="aavg-final-kicker">Your next video ad is 90 seconds away.</p>
              <h2 className="aavg-final-h2">
                Stop Waiting on Production.
                <br />
                Start Running Ads.
              </h2>
              <p className="aavg-final-sub">
                Six AI video models. Every platform format. Unlimited iterations.
                All from a single text prompt — with full commercial rights included.
              </p>
              <a href={CTA_URL} className="aavg-final-btn">
                <span className="aavg-final-btn-play" aria-hidden="true">▶</span>
                Generate Your First Video Ad — Free
                <span aria-hidden="true">→</span>
              </a>
              <div className="aavg-final-checks">
                {[
                  "No credit card required",
                  "1 free video on signup",
                  "Full commercial rights",
                  "MP4 download",
                  "6 AI models",
                  "All ad platforms",
                ].map((c) => (
                  <span key={c} className="aavg-final-check">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <circle cx="7" cy="7" r="7" fill="rgba(91,78,220,0.15)" />
                      <path d="M4 7l2 2 4-4" stroke="#7c6ff0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {c}
                  </span>
                ))}
              </div>
              <p className="aavg-final-also">
                Also explore:{" "}
                <a href={`https://scenith.in/create-ai-content?tab=image&utm_source=tools&utm_medium=landing-page&utm_campaign=ai-ad-video-generator`}>AI Image Generator</a>
                {" · "}
                <a href={`https://scenith.in/create-ai-content?tab=voice&utm_source=tools&utm_medium=landing-page&utm_campaign=ai-ad-video-generator`}>AI Voice Generator</a>
                {" · "}
                <a href="https://scenith.in/tools/ai-video-generator-for-marketing">AI Video for Marketing</a>
                {" · "}
                <a href="https://scenith.in/pricing">Pricing</a>
              </p>
            </div>
          </section>

        </main>
      </div>
    </>
  );
}