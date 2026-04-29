// app/tools/freelance-video-creation-ai-tool/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import "./freelance-video-creation-ai-tool.css";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Freelance Video Creation AI Tool — 10x Your Client Work in 2026 | Scenith",
  description:
    "Stop spending hours on manual video editing. Generate professional client videos, social cuts, product demos, and motion graphics with Scenith's AI video suite. Trusted by 5000+ freelancers worldwide.",
  keywords: [
    "freelance video creation ai tool",
    "ai video generator freelance",
    "ai video editing freelance",
    "ai video creator for freelancers",
    "best ai video tool for freelancers",
    "freelance video production software",
    "automated video creation freelance",
    "ai video maker for client work",
    "video generation freelance tool",
    "ai video platform",
    "generate video with ai freelance",
    "kling ai video freelance",
    "veo ai video freelance",
    "wan 2.5 ai freelance video",
    "scenith freelance ai",
  ],
  openGraph: {
    title: "Freelance Video Creation AI Tool — 10x Your Client Work",
    description:
      "Cut video production time from days to minutes. Access 6+ professional AI video models including Kling, Veo, and Wan 2.5. Full commercial rights for client projects.",
    url: "https://scenith.in/tools/freelance-video-creation-ai-tool",
    siteName: "Scenith",
    type: "website",
    images: [
      {
        url: "https://scenith.in/og/freelance-video-ai-tool.jpg",
        width: 1200,
        height: 630,
        alt: "Scenith Freelance Video Creation AI Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Freelance Video Creation AI Tool — 10x Your Client Work in 2026",
    description:
      "Generate cinematic client videos, product demos, and social cuts with 6+ AI models. Full commercial rights. Start free.",
    images: ["https://scenith.in/og/freelance-video-ai-tool.jpg"],
  },
  alternates: {
    canonical: "https://scenith.in/tools/freelance-video-creation-ai-tool",
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

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://scenith.in/tools/freelance-video-creation-ai-tool",
      url: "https://scenith.in/tools/freelance-video-creation-ai-tool",
      name: "Freelance Video Creation AI Tool | Scenith",
      description:
        "Professional AI video generation for freelancers — product demos, social media cuts, motion graphics, and client deliverables. Full commercial rights included.",
      isPartOf: { "@id": "https://scenith.in" },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://scenith.in" },
          { "@type": "ListItem", position: 2, name: "Tools", item: "https://scenith.in/tools" },
          {
            "@type": "ListItem",
            position: 3,
            name: "Freelance Video Creation AI Tool",
            item: "https://scenith.in/tools/freelance-video-creation-ai-tool",
          },
        ],
      },
    },
    {
      "@type": "SoftwareApplication",
      name: "Scenith Freelance AI Video Suite",
      applicationCategory: "VideoEditingApplication",
      operatingSystem: "Web",
      url: "https://scenith.in/create-ai-content?tab=video&utm_source=tool-page&utm_medium=freelance-video-creation-ai-tool&utm_campaign=tool-cta",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Free to start with 50 credits. Paid plans from $9/month.",
      },
      featureList: [
        "6+ AI video models (Kling, Veo, Wan 2.5, Grok Imagine, Luma Ray, Hailuo)",
        "Text-to-video and image-to-video generation",
        "1080p resolution output",
        "5s / 10s duration options (4s/8s on Veo, 6s/10s on Hailuo)",
        "Audio-enabled video generation",
        "16:9, 9:16, 1:1 aspect ratios",
        "Full commercial rights for client deliverables",
        "Unlimited revisions — iterate at no cost",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Can I use Scenith AI videos for commercial client projects?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. All videos generated on Scenith come with full commercial rights. You can deliver them to paying clients, use them in agency work, embed in client websites, or sell them as part of larger creative packages — no attribution required.",
          },
        },
        {
          "@type": "Question",
          name: "How much does the freelance video creation tool cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You start with 50 free credits — enough to generate 1–2 videos depending on the model. Paid plans begin at $9/month (Creator Lite, 300 credits) and $19/month (Creator Pro, 700 credits). Each video costs 46–186 credits based on model, duration, and audio settings. There's no per-seat fee, no annual commitment, and you can cancel anytime.",
          },
        },
        {
          "@type": "Question",
          name: "Which AI video model is best for client work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For cinematic, broadcast-quality video, Kling 2.6 Pro and Veo 3.1 lead the market. Kling 2.6 Pro offers 1080p output with optional AI-generated audio. Veo 3.1 delivers exceptional motion coherence and realism. For faster, cost-effective client drafts, Wan 2.5 and Grok Imagine are excellent choices — Grok includes audio natively.",
          },
        },
        {
          "@type": "Question",
          name: "Can I turn a client's product image into a video?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Scenith's image-to-video feature lets you upload any reference image — product photos, logo marks, illustrations — and generate a 5–10 second animated video around it. The AI respects the original composition while adding motion, lighting, and camera movement based on your text prompt. Perfect for product demos and brand animations.",
          },
        },
        {
          "@type": "Question",
          name: "What file format and resolution do I get?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "All generated videos are delivered as MP4 files at up to 1080p resolution. Aspect ratios include 16:9 (widescreen for YouTube/client work), 9:16 (vertical for Reels/Shorts), and 1:1 (square for social posts and website embeds). The resulting files are ready to deliver to clients or publish directly.",
          },
        },
      ],
    },
  ],
};

// ─── Content Data ─────────────────────────────────────────────────────────────

const VIDEO_MODELS = [
  {
    id: "KLING_2_6_PRO",
    name: "Kling 2.6 Pro",
    logo: "https://cdn.scenith.in/brand-logos/Kling%20logo.webp",
    description:
      "Cinematic leader for client work. 1080p output, exceptional motion coherence, optional AI audio.",
    bestFor: "Commercial ads, brand films, high-end social content",
    duration: "5s / 10s",
    resolution: "1080p",
    audio: "Optional (+ credits)",
    credits: "64–130",
  },
  {
    id: "VEO_3_1",
    name: "Veo 3.1",
    logo: "https://cdn.scenith.in/brand-logos/Google%20Logo.webp",
    description:
      "Google's best video model. Photorealistic, smooth camera motion, hyper-real physics.",
    bestFor: "Realistic product demos, nature shots, cinematic B-roll",
    duration: "4s / 8s",
    resolution: "1080p",
    audio: "Optional (+ credits)",
    credits: "186–740",
  },
  {
    id: "WAN_2_5",
    name: "Wan 2.5",
    logo: "https://cdn.scenith.in/brand-logos/WanNew%20ai%20logo.png",
    description:
      "Fast, cost-effective, reliable. Great for iterative drafts and internal review.",
    bestFor: "Storyboard drafts, quick social cuts, freelancer iteration",
    duration: "5s / 10s",
    resolution: "480p–1080p",
    audio: "Not available",
    credits: "46–138",
  },
  {
    id: "GROK_IMAGINE",
    name: "Grok Imagine",
    logo: "https://cdn.scenith.in/brand-logos/Grok.png",
    description:
      "xAI's creative powerhouse. Native audio + strong motion understanding.",
    bestFor: "Narrated social videos, animated logos, short brand stories",
    duration: "5s / 10s",
    resolution: "480p–720p",
    audio: "Always included",
    credits: "47–132",
  },
  {
    id: "LUMA_RAY_3_1",
    name: "Luma Ray 3.1",
    logo: "https://cdn.scenith.in/brand-logos/Luma%20Ray%20Logo.png",
    description:
      "Studio-quality output with refined color science and natural lighting.",
    bestFor: "Beauty, fashion, lifestyle, and architecture videos",
    duration: "5s / 10s",
    resolution: "720p–1080p",
    audio: "Not available",
    credits: "76–728",
  },
  {
    id: "HAILUO_02_PRO",
    name: "Hailuo 02 Pro",
    logo: "https://cdn.scenith.in/brand-logos/Hailuo%20Logo.jpg",
    description:
      "Specialized for long-form transitions and complex scene composition.",
    bestFor: "Before/after sequences, multi-scene social ads, explainers",
    duration: "6s / 10s",
    resolution: "1080p",
    audio: "Optional (+ credits)",
    credits: "124–290",
  },
];

const USE_CASES = [
  {
    title: "Product Demo Videos",
    icon: "📱",
    description:
      "Your client has a new product launch. They need a 10-second product reveal video for Instagram Reels and TikTok. Instead of paying a motion designer $200–$500 per video, you upload the product image to Scenith's image-to-video tool, write a prompt describing the camera move and lighting, and generate a cinematic product video in under a minute, ready to deliver the same day. Price to client: $150. Your cost: $1–$3 in credits. Per-video profit margin: 98%.",
    keyPoints: [
      "Image-to-video from client product photos",
      "Vertical 9:16 aspect ratio for social platforms",
      "Optional AI-generated voiceover narration",
      "Deliver MP4 within 2 hours of receiving brief",
    ],
  },
  {
    title: "Social Media Cutdowns",
    icon: "📲",
    description:
      "You've produced a 60-second brand film for a client. They now ask for 6 variations: 15-second cuts for TikTok, Instagram Reels, YouTube Shorts, and Facebook, plus 3 aspect ratios. Traditionally, this is days of manual editing. With Scenith's AI video suite, you generate the core scene once, then use different prompts and aspect ratio settings (16:9 for YouTube, 9:16 for Reels/Shorts, 1:1 for Instagram feed) to generate platform-specific derivatives in minutes.",
    keyPoints: [
      "Generate across 16:9, 9:16, and 1:1 from same prompt",
      "Kling 2.6 Pro for motion consistency across cuts",
      "No re-rendering — each cut is freshly generated",
      "Deliver full asset packs in hours, not days",
    ],
  },
  {
    title: "Brand Motion Graphics",
    icon: "🎨",
    description:
      "Freelancers increasingly receive requests for 'motion logo' or 'animated brand asset' without the budget for After Effects animators. Upload the client's logo to Scenith, select the image-to-video mode, and prompt: 'Logo floating in dark space, particle effects, cinematic lighting, slow rotation.' In 30 seconds, you have a professional brand animation worth $100–$250 to the client, generated at less than $2 in credits. Repeat for every client in your roster.",
    keyPoints: [
      "Image-to-video from any logo or brand asset",
      "Grok Imagine includes audio for narrated stingers",
      "Loop compatible — perfect for website hero sections",
      "1080p MP4 ready for client delivery",
    ],
  },
  {
    title: "Client Pitch Assets",
    icon: "📊",
    description:
      "You're a freelance creative director pitching a campaign concept to a potential client. Including sample video assets in your proposal dramatically increases close rates. Before Scenith, producing a custom video sample required a budget and a production timeline. Now, you generate 3–5 concept videos for $5–$10 in credits, embed them in your proposal PDF, and show the client exactly what they can expect. The result: you win deals against agencies that can't move as fast.",
    keyPoints: [
      "Generate multiple concept variations from same brief",
      "Different models = different creative directions",
      "Include MP4 samples directly in proposals",
      "No production overhead = win more bids",
    ],
  },
];

const PROMPT_TEMPLATES = [
  {
    title: "Product Reveal",
    template:
      "Slow cinematic camera reveal of [product name and description]. Soft studio lighting, rotating on a reflective surface, depth of field, 4K quality, smooth motion.",
    example:
      "Slow cinematic camera reveal of a matte black wireless headphone case opening. Soft studio lighting, product rotating on a marble surface, depth of field, 4K quality, smooth motion.",
  },
  {
    title: "Brand Stinger",
    template:
      "Logo animation for [brand name]. [Style description] background, particles floating, gentle camera push-in, elegant and professional, cinematic lighting.",
    example:
      "Logo animation for Azure Peak Capital. Deep navy background with subtle gold particles floating upward, gentle camera push-in on the lettermark, elegant and professional, cinematic lighting.",
  },
  {
    title: "Nature B-Roll",
    template:
      "Cinematic drone shot of [scene description]. Golden hour lighting, slow descent, clouds moving overhead, wide angle, serene atmosphere, 4K quality.",
    example:
      "Cinematic drone shot of a misty mountain lake at sunrise. Golden hour lighting, slow descent over the water, clouds moving overhead, wide angle, serene atmosphere, 4K quality.",
  },
  {
    title: "Tech UI Animation",
    template:
      "Floating [user interface element description] with glowing blue lines, neon accents on [background color], abstract data streams moving in background, futuristic, 4K.",
    example:
      "Floating smartphone screen showing a finance dashboard with glowing blue lines, neon accents on dark grey, abstract data streams moving in background, futuristic, 4K.",
  },
];

const TESTIMONIALS = [
  {
    name: "Sarah Chen",
    role: "Freelance Motion Designer",
    avatar: "SC",
    quote:
      "I used to turn down small-budget projects because my rates didn't make sense for a 15-second social video. Now I generate concepts in Scenith for $2, charge the client $150, and deliver within 24 hours. The quality from Kling 2.6 Pro is genuinely client-ready — no one knows it's AI unless I tell them.",
  },
  {
    name: "Marcus Thorne",
    role: "Creative Agency Owner",
    avatar: "MT",
    quote:
      "My agency of 12 people was spending $8,000/month on stock footage and freelance animators. Scenith's video suite replaced 70% of that spend. We generate custom B-roll, product visualisations, and logo animations for every client — faster, cheaper, and uniquely tailored to each project.",
  },
  {
    name: "Priya Sharma",
    role: "Social Media Freelancer",
    avatar: "PS",
    quote:
      "My clients want vertical video now — always 9:16 for Reels and Shorts. Scenith makes it trivial. I generate the same concept in 16:9 for YouTube and 9:16 for Instagram from the same prompt. My turnaround time went from 3 days to 4 hours.",
  },
];

const COMPETITOR_COMPARISON = [
  {
    tool: "Adobe Premiere Pro + Plugins",
    cost: "$21–$55/mo + plugin fees",
    learningCurve: "Months",
    generationTime: "Hours–Days",
    customModelAccess: "No",
    commercialRights: "Yes",
    verdict: "Powerful but slow. Built for editors, not freelancers who need speed.",
  },
  {
    tool: "Runway ML",
    cost: "$12–$76/mo",
    learningCurve: "Days",
    generationTime: "Minutes–Hours",
    customModelAccess: "Limited",
    commercialRights: "Yes (with attribution)",
    verdict: "Good for AI effects, less reliable for full video generation.",
  },
  {
    tool: "Pika Labs",
    cost: "Free tier + $10–$30/mo",
    learningCurve: "Days",
    generationTime: "Minutes",
    customModelAccess: "No",
    commercialRights: "Unclear",
    verdict: "Creative but inconsistent. Quality varies significantly.",
  },
  {
    tool: "Kaiber",
    cost: "$5–$25/mo",
    learningCurve: "Days",
    generationTime: "Minutes",
    customModelAccess: "No",
    commercialRights: "Yes",
    verdict: "Great for artistic styles, less for realistic client work.",
  },
  {
    tool: "Scenith Freelance Suite",
    cost: "Free → $9–$19/mo",
    learningCurve: "Minutes",
    generationTime: "30–120 sec",
    customModelAccess: "6+ models",
    commercialRights: "Full rights, no attribution",
    verdict: "Designed for freelancers. Fastest, most versatile, lowest cost per video.",
    highlight: true,
  },
];

const FAQ_ITEMS = [
  {
    q: "Can I deliver Scenith-generated videos to paying clients?",
    a: "Yes, absolutely. All videos generated on Scenith come with full commercial rights. There is no restriction on client work, agency deliverables, or selling the videos as part of a creative package. You don't need to credit Scenith in the final deliverables. The only restriction is using Scenith's output to build a competing video generation service.",
  },
  {
    q: "What is the cost per video for client work?",
    a: "It varies by model, duration, and audio selection. The cheapest video (Wan 2.5, 480p, 5s, no audio) costs 46 credits. The most expensive (Veo 3.1, 1080p, 8s, with audio) costs 740 credits. With Creator Lite ($9/month for 300 credits), your per-video cost ranges from $1.40 (Wan 2.5) to $22 (Veo 3.1). With the free 50-credit starter pack, you can generate 1–2 videos at no cost. Most freelancers break even on the first client deliverable and profit on every video thereafter.",
  },
  {
    q: "Which AI model should I use for different client needs?",
    a: "For product demos and realistic scenes: Veo 3.1 or Kling 2.6 Pro. For logo animations and brand assets: Grok Imagine (audio included) or Wan 2.5 (fast and cheap). For fashion and lifestyle: Luma Ray 3.1. For complex transitions and multi-scene ads: Hailuo 02 Pro. For high-volume, low-budget social content: Wan 2.5 at 480p. Experiment with all models using the same prompt — each has a distinct 'personality' that suits different creative briefs.",
  },
  {
    q: "How fast can I turn around a client video?",
    a: "From receiving a brief to delivering an MP4: 30–60 minutes on average. The actual AI generation takes 30–120 seconds per video. Most of the time is writing a high-quality prompt (5–10 minutes) and, if needed, minor client revision requests (which you can regenerate instantly at no cost). Compare this to traditional video production: scripting, shooting, editing, rendering — days or weeks. Scenith has compressed freelance video timelines by 95%.",
  },
  {
    q: "Can I generate video with a client's existing footage or images?",
    a: "Yes. The image-to-video feature is built for exactly this scenario. Upload any image — product photography, location scout photos, brand logo, character sketch, architectural rendering — and Scenith will generate a 5–10 second video using that image as the reference frame. The AI preserves the composition and adds motion based on your text prompt. This is how freelancers turn static product shots into animated hero videos without reshoots.",
  },
  {
    q: "What happens if the AI generates something off-brief?",
    a: "Scenith refunds credits automatically if a generation completely fails. For videos that generate but miss the mark, you can simply adjust your prompt and regenerate. Each regenerate costs credits, but at $1–$3 per attempt, it's massively cheaper than re-shooting or re-editing. Most freelancers budget 2–3 generations per final client deliverable — meaning $3–$9 in cost to land a $200–$500 client video project.",
  },
  {
    q: "Can I add voiceover or music to the generated video?",
    a: "Scenith offers optional AI-generated audio on Kling 2.6 Pro, Veo 3.1, and Hailuo 02 Pro models. Grok Imagine includes audio natively. The audio matches the scene — narration, ambient sound, or music depending on your prompt. For custom voiceover, you can use Scenith's separate AI Voice Generator (40+ voices, 20+ languages) and combine it with the video using any editing tool. The video output is MP4, ready for audio overlay in CapCut, Premiere Pro, DaVinci Resolve, or Final Cut.",
  },
  {
    q: "Do I need to tell clients I'm using AI?",
    a: "Legally, no — Scenith grants full commercial rights with no attribution requirement. Ethically, many freelancers choose transparency with clients who ask about their workflow. In practice, clients care about quality, speed, and price — not the tool you used. That said, the AI video space is maturing, and being transparent about using Scenith can position you as a modern, efficient freelancer who uses best-in-class tools to deliver better results faster.",
  },
  {
    q: "What happens if a client wants a revision to a video?",
    a: "Unlike traditional video editing where revisions mean opening a project file, adjusting layers, and re-rendering, Scenith revisions are just prompt adjustments. Change a few words — 'slower camera movement', 'brighter lighting', 'remove the person in the background' — and regenerate. The new video is ready in 30–120 seconds. Your cost: $1–$3. Your client's cost: nothing extra (or bill a small revision fee). No other video workflow allows this kind of iteration speed.",
  },
  {
    q: "Can I generate multiple aspect ratios for the same client video?",
    a: "Yes, this is one of the most powerful features for freelancers. Generate the core video concept once with a prompt, then immediately regenerate using the same prompt but different aspect ratio settings: 16:9 for YouTube/client websites, 9:16 for TikTok/Reels/Shorts, 1:1 for Instagram feed and LinkedIn. Each generation creates a fresh video optimized for that platform's dimensions. Charge clients an asset pack fee ($50–$150) for 3–5 aspect ratio variations. Your cost: $3–$15. Profit: 90%+ margin.",
  },
];

// ─── Page Component ───────────────────────────────────────────────────────────

export default function FreelanceVideoCreationAIToolPage() {
  const CTA_URL =
    "https://scenith.in/create-ai-content?tab=video&utm_source=tool-page&utm_medium=freelance-video-creation-ai-tool&utm_campaign=tool-cta&utm_content=hero-cta";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="fvc-page">
        {/* ── HERO SECTION ─────────────────────────────────────────────────── */}
        <section className="fvc-hero">
          <div className="fvc-hero-bg" />
          <nav className="fvc-breadcrumb" aria-label="Breadcrumb">
            <ol itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemScope itemType="https://schema.org/ListItem" itemProp="itemListElement">
                <Link href="/" itemProp="item"><span itemProp="name">Home</span></Link>
                <meta itemProp="position" content="1" />
              </li>
              <span className="fvc-bc-sep">›</span>
              <li itemScope itemType="https://schema.org/ListItem" itemProp="itemListElement">
                <Link href="/tools" itemProp="item"><span itemProp="name">Tools</span></Link>
                <meta itemProp="position" content="2" />
              </li>
              <span className="fvc-bc-sep">›</span>
              <li itemScope itemType="https://schema.org/ListItem" itemProp="itemListElement">
                <span itemProp="name">Freelance Video Creation AI Tool</span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </nav>

          <div className="fvc-hero-inner">
            <div className="fvc-badge-row">
              <span className="fvc-badge">✦ Built for Freelancers</span>
              <span className="fvc-badge fvc-badge-alt">6+ AI Video Models</span>
              <span className="fvc-badge">Full Commercial Rights</span>
            </div>
            <h1 className="fvc-hero-h1">
              Freelance Video Creation <span className="fvc-hero-accent">AI Tool</span>
              <span className="fvc-hero-h1-sub">That 10x Your Client Deliverables</span>
            </h1>
            <p className="fvc-hero-desc">
              Stop spending days on video editing. Generate professional client videos — product demos,
              social cuts, motion graphics, and brand films — with Scenith's AI video suite. Trusted by
              5,000+ freelancers, agencies, and content creators worldwide.
            </p>

            <div className="fvc-hero-stats">
              <div className="fvc-stat">
                <span className="fvc-stat-num">30–120s</span>
                <span className="fvc-stat-label">Generation Time</span>
              </div>
              <div className="fvc-stat-divider" />
              <div className="fvc-stat">
                <span className="fvc-stat-num">$1–$22</span>
                <span className="fvc-stat-label">Cost Per Video</span>
              </div>
              <div className="fvc-stat-divider" />
              <div className="fvc-stat">
                <span className="fvc-stat-num">6+</span>
                <span className="fvc-stat-label">AI Models</span>
              </div>
              <div className="fvc-stat-divider" />
              <div className="fvc-stat">
                <span className="fvc-stat-num">1080p</span>
                <span className="fvc-stat-label">Max Resolution</span>
              </div>
            </div>

            <Link href={CTA_URL} className="fvc-hero-cta">
              <span className="fvc-cta-spark">⚡</span>
              Generate Your First Client Video — Free
              <span className="fvc-cta-arrow">→</span>
            </Link>
            <p className="fvc-hero-cta-sub">
              50 free credits · No credit card · Full commercial rights included
            </p>
          </div>
        </section>

        {/* ── MAIN CTA CARD (Huge CTA Button) ───────────────────────────────── */}
        <section className="fvc-main-cta-section">
          <div className="fvc-main-cta-card">
            <div className="fvc-main-cta-glow" />
            <div className="fvc-main-cta-content">
              <div className="fvc-main-cta-badge">🎬 Ready to 10x Your Freelance Workflow?</div>
              <h2 className="fvc-main-cta-h2">
                Stop Editing. Start Generating.
              </h2>
              <p className="fvc-main-cta-desc">
                The most powerful AI video suite for freelancers is one click away.
                6 models. 3 aspect ratios. 1080p output. Full commercial rights.
                Generate your first client video in under 2 minutes — free.
              </p>
              <div className="fvc-model-strip">
                {["Kling 2.6", "Veo 3.1", "Wan 2.5", "Grok Imagine", "Luma Ray", "Hailuo"].map((m) => (
                  <span key={m} className="fvc-model-chip">{m}</span>
                ))}
              </div>
              <Link href={CTA_URL} className="fvc-main-cta-btn">
                <span>🚀 Start Generating Videos — Free</span>
                <small>50 credits included · No card required · Instant access</small>
              </Link>
              <p className="fvc-main-cta-note">
                Opens Scenith AI Studio — Video tab pre-selected · UTM tracked
              </p>
            </div>
          </div>
        </section>

        {/* ── FEATURED MODELS ───────────────────────────────────────────────── */}
        <section className="fvc-section">
          <div className="fvc-section-inner">
            <div className="fvc-section-label">The Models</div>
            <h2 className="fvc-section-h2">6 State‑of‑the‑Art AI Video Engines</h2>
            <p className="fvc-section-sub">
              Different projects need different capabilities. Scenith gives you access to the
              world's best video generation models under one subscription.
            </p>

            <div className="fvc-models-grid">
              {VIDEO_MODELS.map((model) => (
                <div className="fvc-model-card" key={model.id}>
                  <div className="fvc-model-header">
                    <img src={model.logo} alt={model.name} className="fvc-model-logo" />
                    <h3 className="fvc-model-name">{model.name}</h3>
                  </div>
                  <p className="fvc-model-desc">{model.description}</p>
                  <div className="fvc-model-meta">
                    <div className="fvc-meta-row"><span>Best for:</span><strong>{model.bestFor}</strong></div>
                    <div className="fvc-meta-row"><span>Duration:</span><strong>{model.duration}</strong></div>
                    <div className="fvc-meta-row"><span>Resolution:</span><strong>{model.resolution}</strong></div>
                    <div className="fvc-meta-row"><span>Audio:</span><strong>{model.audio}</strong></div>
                    <div className="fvc-meta-row"><span>Credits:</span><strong>{model.credits}</strong></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="fvc-models-cta">
              <Link href={CTA_URL} className="fvc-inline-cta">
                Try All 6 Models Free →
              </Link>
            </div>
          </div>
        </section>

        {/* ── USE CASES DEEP DIVE ──────────────────────────────────────────── */}
        <section className="fvc-section fvc-section-dark">
          <div className="fvc-section-inner">
            <div className="fvc-section-label">Real Freelance Workflows</div>
            <h2 className="fvc-section-h2">How Freelancers Are Using Scenith AI Video</h2>
            <p className="fvc-section-sub">
              From product demos to brand stingers — these are the actual use cases driving
              5,000+ freelancers to switch to AI-powered video workflows.
            </p>

            <div className="fvc-usecases-list">
              {USE_CASES.map((uc, idx) => (
                <div className="fvc-usecase-item" key={idx}>
                  <div className="fvc-usecase-icon">{uc.icon}</div>
                  <div className="fvc-usecase-content">
                    <h3 className="fvc-usecase-title">{uc.title}</h3>
                    <p className="fvc-usecase-desc">{uc.description}</p>
                    <div className="fvc-usecase-keypoints">
                      {uc.keyPoints.map((kp, i) => (
                        <span key={i} className="fvc-keypoint">✓ {kp}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROMPT TEMPLATES ──────────────────────────────────────────────── */}
        <section className="fvc-section">
          <div className="fvc-section-inner">
            <div className="fvc-section-label">Ready‑to‑Use Prompts</div>
            <h2 className="fvc-section-h2">Copy, Paste, Generate. Deliver.</h2>
            <p className="fvc-section-sub">
              You don't need to be a prompt engineer. These templates work for 80% of client video briefs.
              Just replace the bracketed text with your client's specific details.
            </p>

            <div className="fvc-prompts-grid">
              {PROMPT_TEMPLATES.map((pt, idx) => (
                <div className="fvc-prompt-card" key={idx}>
                  <h3 className="fvc-prompt-title">{pt.title}</h3>
                  <div className="fvc-prompt-template">
                    <span className="fvc-prompt-label">Template:</span>
                    <code>{pt.template}</code>
                  </div>
                  <div className="fvc-prompt-example">
                    <span className="fvc-prompt-label">Example:</span>
                    <p>{pt.example}</p>
                  </div>
                  <Link href={CTA_URL} className="fvc-prompt-use-btn">
                    Use This Prompt →
                  </Link>
                </div>
              ))}
            </div>

            <div className="fvc-prompt-tip">
              <span className="fvc-tip-icon">💡</span>
              <div>
                <strong>Pro Freelancer Tip:</strong> Save your best prompts in a Notion database.
                Over time, you'll build a library of 50+ tested prompts for different industries —
                SaaS, e-commerce, real estate, restaurants, fitness — each ready to generate
                client-ready video in under 60 seconds.
              </div>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ──────────────────────────────────────────────────── */}
        <section className="fvc-section fvc-section-tint">
          <div className="fvc-section-inner">
            <div className="fvc-section-label">Trusted by Freelancers</div>
            <h2 className="fvc-section-h2">What Creators Are Saying</h2>

            <div className="fvc-testimonials-grid">
              {TESTIMONIALS.map((t, idx) => (
                <div className="fvc-testimonial-card" key={idx}>
                  <div className="fvc-testimonial-avatar">{t.avatar}</div>
                  <div className="fvc-testimonial-content">
                    <p className="fvc-testimonial-quote">"{t.quote}"</p>
                    <div className="fvc-testimonial-author">
                      <strong>{t.name}</strong>
                      <span>{t.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── COMPETITOR COMPARISON ─────────────────────────────────────────── */}
        <section className="fvc-section">
          <div className="fvc-section-inner">
            <div className="fvc-section-label">Market Context</div>
            <h2 className="fvc-section-h2">Scenith vs. Every Other Option in 2026</h2>
            <p className="fvc-section-sub">
              Here's the honest breakdown of cost, speed, and quality across video tools
              available to freelancers today.
            </p>

            <div className="fvc-compare-table">
              <div className="fvc-compare-header">
                <div className="fvc-compare-cell fvc-compare-tool">Tool</div>
                <div className="fvc-compare-cell">Monthly Cost</div>
                <div className="fvc-compare-cell">Learning Curve</div>
                <div className="fvc-compare-cell">Generation Time</div>
                <div className="fvc-compare-cell">Custom Models</div>
                <div className="fvc-compare-cell">Commercial Rights</div>
                <div className="fvc-compare-cell">Verdict</div>
              </div>
              {COMPETITOR_COMPARISON.map((comp, idx) => (
                <div className={`fvc-compare-row ${comp.highlight ? "fvc-compare-highlight" : ""}`} key={idx}>
                  <div className="fvc-compare-cell fvc-compare-tool">{comp.tool}</div>
                  <div className="fvc-compare-cell">{comp.cost}</div>
                  <div className="fvc-compare-cell">{comp.learningCurve}</div>
                  <div className="fvc-compare-cell">{comp.generationTime}</div>
                  <div className="fvc-compare-cell">{comp.customModelAccess}</div>
                  <div className="fvc-compare-cell">{comp.commercialRights}</div>
                  <div className="fvc-compare-cell fvc-compare-verdict">{comp.verdict}</div>
                </div>
              ))}
            </div>

            <div className="fvc-compare-cta">
              <Link href={CTA_URL} className="fvc-inline-cta">
                Switch Your Workflow to Scenith →
              </Link>
            </div>
          </div>
        </section>

        {/* ── WHY FREELANCERS NEED AI VIDEO IN 2026 ──────────────────────────── */}
        <section className="fvc-section fvc-section-dark">
          <div className="fvc-section-inner">
            <div className="fvc-section-label">The Shift</div>
            <h2 className="fvc-section-h2">Why Every Freelance Video Creator Needs AI in 2026</h2>

            <div className="fvc-why-grid">
              {[
                {
                  title: "Client Expectations Have Changed",
                  icon: "📈",
                  body: "Clients no longer accept 7-day turnaround times for social video content. They want 24–48 hour delivery — sometimes same-day. Traditional editing workflows can't keep up. AI video generation can. Freelancers who adopt AI now are winning contracts away from those who don't.",
                },
                {
                  title: "The Cost of Not Adopting is Client Loss",
                  icon: "⚠️",
                  body: "If you're bidding against a freelancer who uses AI video tools, they can offer faster turnaround at half your price — or the same price with 10x the volume of options. The math is unforgiving. AI-augmented freelancers are pricing traditional editors out of the market.",
                },
                {
                  title: "AI is Not a Replacement — It's a Force Multiplier",
                  icon: "⚡",
                  body: "The best freelancers use AI to handle 80% of the production work — B-roll generation, scene transitions, motion graphics — then apply their creative eye to the final 20% of refinement. You don't lose your value; you multiply your output per hour dramatically.",
                },
                {
                  title: "Full Commercial Rights Change Everything",
                  icon: "🔑",
                  body: "Unlike early AI tools with restrictive licenses, Scenith gives you full commercial rights for client deliverables. You own the output. You can sell it. You can deliver it to a Fortune 500 client. The legal uncertainty that held back early AI adoption is gone in 2026.",
                },
                {
                  title: "Iteration is Finally Free (Almost)",
                  icon: "🔄",
                  body: "In traditional video, a client revision costs hours of your time. In AI video, a revision is a prompt adjustment and 60 seconds of generation. You can afford to give clients 5–10 options for the same deliverable — a level of service that traditional editors simply cannot match.",
                },
                {
                  title: "The Platform Advantage",
                  icon: "🏗️",
                  body: "Scenith combines video generation with voice and image tools under one roof — and one credit balance. Generate a voiceover, then a video scene, then animate a logo, all without switching subscriptions. This integrated workflow is the future of freelance content production.",
                },
              ].map((item, i) => (
                <div className="fvc-why-card" key={i}>
                  <span className="fvc-why-icon">{item.icon}</span>
                  <h3 className="fvc-why-title">{item.title}</h3>
                  <p className="fvc-why-body">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECOND MAIN CTA ────────────────────────────────────────────────── */}
        <section className="fvc-mid-cta-section">
          <div className="fvc-mid-cta-inner">
            <div className="fvc-mid-cta-badge">🚀 Limited Free Tier Available</div>
            <h2 className="fvc-mid-cta-h2">
              Your next client video is 60 seconds away.
            </h2>
            <p className="fvc-mid-cta-sub">
              No software to install. No rendering overnight. No expensive hardware.
              Just your idea, a prompt, and Scenith's AI video suite.
            </p>
            <Link href={CTA_URL} className="fvc-hero-cta fvc-mid-cta-btn">
              <span className="fvc-cta-spark">⚡</span>
              Generate Your First Video Free
              <span className="fvc-cta-arrow">→</span>
            </Link>
            <p className="fvc-mid-cta-note">
              50 free credits. Enough for 1–2 client videos. No card required.
            </p>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="fvc-section">
          <div className="fvc-section-inner">
            <div className="fvc-section-label">FAQ</div>
            <h2 className="fvc-section-h2">Everything Freelancers Ask About AI Video</h2>

            <div className="fvc-faq-list">
              {FAQ_ITEMS.map((item, i) => (
                <details className="fvc-faq-item" key={i}>
                  <summary className="fvc-faq-q">{item.q}</summary>
                  <p className="fvc-faq-a">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── RELATED TOOLS ── */}
        <section className="fvc-section fvc-section-tint">
          <div className="fvc-section-inner">
            <div className="fvc-section-label">Complete Your Toolkit</div>
            <h2 className="fvc-section-h2">More AI Tools for Your Freelance Business</h2>
            <div className="fvc-related-grid">
              {[
                {
                  href: "https://scenith.in/create-ai-content?tab=voice&utm_source=tool-page&utm_medium=freelance-video-creation-ai-tool&utm_campaign=related-tools",
                  icon: "🎙️",
                  title: "AI Voice Generator",
                  desc: "40+ voices, 20+ languages. Add narration to your client videos without hiring voice talent.",
                },
                {
                  href: "https://scenith.in/create-ai-content?tab=image&utm_source=tool-page&utm_medium=freelance-video-creation-ai-tool&utm_campaign=related-tools",
                  icon: "🖼️",
                  title: "AI Image Generator",
                  desc: "Generate thumbnails, posters, and frame-by-frame assets for video projects.",
                },
                {
                  href: "https://scenith.in/tools/add-subtitles-to-videos",
                  icon: "📝",
                  title: "Add Subtitles to Videos",
                  desc: "Auto-caption your generated videos for social media and accessibility.",
                },
              ].map((tool, i) => (
                <Link href={tool.href} className="fvc-related-card" key={i}>
                  <span className="fvc-related-icon">{tool.icon}</span>
                  <h3 className="fvc-related-title">{tool.title}</h3>
                  <p className="fvc-related-desc">{tool.desc}</p>
                  <span className="fvc-related-arrow">Explore →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL GIANT CTA ────────────────────────────────────────────────── */}
        <section className="fvc-final-cta">
          <div className="fvc-final-inner">
            <div className="fvc-final-bg" />
            <h2 className="fvc-final-h2">
              Join 5,000+ Freelancers Who've Made the Switch.
              <br />
              <span className="fvc-final-accent">Your first video is waiting.</span>
            </h2>
            <p className="fvc-final-sub">
              Stop losing bids to faster, cheaper freelancers. Start delivering client videos
              in hours instead of days. No subscription lock-in. Cancel anytime.
            </p>
            <Link href={CTA_URL} className="fvc-hero-cta fvc-final-btn">
              <span className="fvc-cta-spark">⚡</span>
              Generate Your First Video — It's Free
              <span className="fvc-cta-arrow">→</span>
            </Link>
            <p className="fvc-final-note">
              50 free credits · No credit card · Full commercial rights · 6 AI video models
            </p>
          </div>
        </section>
      </div>
    </>
  );
}