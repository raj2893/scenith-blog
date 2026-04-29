// app/tools/freelancer-video-service-generator/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import "./freelancer-video-service-generator.css";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────
// Targeted keywords: "video service for freelancers", "freelance video maker",
// "client video generator", "video production tool for freelancers"

export const metadata: Metadata = {
  title: "Freelancer Video Service Generator — AI Video Studio for Client Work | Scenith",
  description:
    "The AI video studio built for freelancers. Generate client-ready promotional videos, social media ads, explainer videos, and commercial spots in minutes — not days. Full commercial rights included. Free to start.",
  keywords: [
    "freelancer video service",
    "ai video maker for freelancers",
    "client video generator",
    "freelance video production tool",
    "ai video studio for freelancers",
    "video service generator",
    "freelancer ai video tool",
    "client video creation",
    "ai explainer video generator",
    "promo video maker",
    "social media video generator",
    "video production for freelancers",
    "ai video service",
    "freelance video creator",
    "commercial video generator",
  ],
  openGraph: {
    title: "Freelancer Video Service Generator — Client-Ready Videos with AI | Scenith",
    description:
      "Turn your freelance video service into a 10x faster workflow. Generate promotional videos, ads, and explainers for clients using state-of-the-art AI. 50 free credits to start.",
    url: "https://scenith.in/tools/freelancer-video-service-generator",
    siteName: "Scenith",
    type: "website",
    images: [
      {
        url: "https://scenith.in/og/freelancer-video-service.jpg",
        width: 1200,
        height: 630,
        alt: "Scenith Freelancer Video Service Generator — AI Video Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Freelancer Video Service Generator — AI Video for Client Projects",
    description: "Generate client-ready videos 10x faster. Full commercial rights. 50 free credits.",
    images: ["https://scenith.in/og/freelancer-video-service.jpg"],
  },
  alternates: {
    canonical: "https://scenith.in/tools/freelancer-video-service-generator",
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

// ─── Structured Data (JSON-LD) ──────────────────────────────────────────────
// Helps Google understand this as a tool for freelancers offering video services

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://scenith.in/tools/freelancer-video-service-generator",
      url: "https://scenith.in/tools/freelancer-video-service-generator",
      name: "Freelancer Video Service Generator — AI-Powered Client Video Studio",
      description:
        "Generate professional client videos using AI. Promotional videos, social ads, explainers, and commercials — delivered in minutes with full commercial rights.",
      isPartOf: { "@id": "https://scenith.in" },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://scenith.in" },
          { "@type": "ListItem", position: 2, name: "Tools", item: "https://scenith.in/tools" },
          { "@type": "ListItem", position: 3, name: "Freelancer Video Service Generator", item: "https://scenith.in/tools/freelancer-video-service-generator" },
        ],
      },
    },
    {
      "@type": "SoftwareApplication",
      name: "Scenith Freelancer Video Service",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: "https://scenith.in/create-ai-content?utm_source=tool-page&utm_medium=freelancer-video-service-generator&utm_campaign=tool-cta",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Free to start with 50 credits on signup",
      },
      featureList: [
        "AI video generation for client work",
        "Text-to-video and image-to-video",
        "6+ AI video models (Kling, Veo, Wan, etc.)",
        "Voiceover integration",
        "Full commercial rights on all videos",
        "Instant MP4 download",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Can I use Scenith-generated videos for my freelance clients?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Every video generated on Scenith comes with full commercial rights. You can deliver them to paying clients, use them in your portfolio, and charge for your video service — no attribution required and no royalty fees.",
          },
        },
        {
          "@type": "Question",
          name: "What video formats and durations does the AI support?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Scenith supports 5-second and 10-second clips (some models support longer). Output aspect ratios include 16:9 (horizontal for YouTube/websites), 9:16 (vertical for TikTok/Reels/Shorts), and 1:1 (square for Facebook/LinkedIn). All videos are downloaded as MP4 files.",
          },
        },
        {
          "@type": "Question",
          name: "How does pricing work for freelancers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Scenith uses a credit system. Free plan gives you 50 credits on signup. Each video costs between 46–186 credits depending on model, duration, and resolution. Creator Lite ($9/month) includes 300 credits — enough for 3–6 client videos monthly. For higher volume, Creator Pro ($24/month) includes 900 credits.",
          },
        },
        {
          "@type": "Question",
          name: "Can I add voiceover to AI-generated videos?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Select video models (Kling 2.6 Pro, Veo 3.1, Grok Imagine) support AI-generated audio. You can also generate voiceover separately using Scenith's AI Voice tab and combine it with your video using any video editor. Google, OpenAI, and Azure TTS engines are available with 40+ voices across 20+ languages.",
          },
        },
      ],
    },
  ],
};

// ─── Video Service Types (for visual engagement & SEO depth) ─────────────────

const VIDEO_SERVICES = [
  { icon: "📱", name: "Social Media Ads", duration: "15–30s", format: "9:16 / 1:1", price: "$50–$200/client", desc: "Vertical video ads for Instagram Reels, TikTok, YouTube Shorts — optimized for engagement and retention." },
  { icon: "📺", name: "TV Commercials", duration: "15–60s", format: "16:9", price: "$200–$1,000/client", desc: "Broadcast-quality commercials with cinematic visuals, professional pacing, and brand integration." },
  { icon: "🎬", name: "Explainer Videos", duration: "30–90s", format: "16:9", price: "$100–$500/client", desc: "Product or service explainers with clear visual narrative — perfect for landing pages and sales decks." },
  { icon: "🛍️", name: "Product Demos", duration: "15–45s", format: "16:9 / 9:16", price: "$75–$300/client", desc: "Showcase product features, benefits, and use cases in dynamic motion — e-commerce ready." },
  { icon: "🎓", name: "Course Trailers", duration: "30–90s", format: "16:9", price: "$100–$400/client", desc: "Engaging trailers for online courses, memberships, and digital products — boost conversion rates." },
  { icon: "🏢", name: "Corporate Brand Reels", duration: "30–60s", format: "16:9", price: "$150–$600/client", desc: "Company culture videos, brand story reels, and investor pitch videos — professional polish." },
];

const VIDEO_MODELS_FOR_FREELANCERS = [
  { name: "Kling 2.6 Pro", best: "Cinematic commercials, product shots", speed: "Medium", quality: "⭐⭐⭐⭐⭐", cost: "64–130cr", audio: "Yes" },
  { name: "Veo 3.1", best: "Highest quality, brand reels", speed: "Slow", quality: "⭐⭐⭐⭐⭐", cost: "186–740cr", audio: "Yes" },
  { name: "Wan 2.5", best: "Fast turnaround, social content", speed: "Fast", quality: "⭐⭐⭐⭐", cost: "46–138cr", audio: "No" },
  { name: "Grok Imagine", best: "Vibrant social ads, audio included", speed: "Fast", quality: "⭐⭐⭐⭐", cost: "47–94cr", audio: "Yes (included)" },
  { name: "Luma Ray 3.1", best: "Atmospheric, artistic visuals", speed: "Medium", quality: "⭐⭐⭐⭐", cost: "76–364cr", audio: "Optional" },
  { name: "Hailuo 02 Pro", best: "Long-form, narrative videos", speed: "Slow", quality: "⭐⭐⭐⭐⭐", cost: "124–290cr", audio: "Optional" },
];

const FREELANCER_USE_CASES = [
  {
    title: "Social Media Managers",
    icon: "📱",
    body: "Deliver 10+ vertical video ads per week for your clients. Use consistent brand aesthetics, generate variations, and scale your content production without hiring editors.",
    promptExample: "15-second vertical ad for a skincare brand. Close-up of dewy skin, morning light. Energetic voiceover: 'Glow from home. Natural ingredients, visible results. Link in bio.' 9:16.",
  },
  {
    title: "Video Freelancers",
    icon: "🎥",
    body: "Replace expensive stock footage with AI-generated custom scenes. Produce client projects 5x faster. Offer 'unlimited revisions' at zero marginal cost — your clients love it, your margins grow.",
    promptExample: "Cinematic drone shot over a coastal city at sunset. Golden hour lighting, slow camera movement. No voiceover — pure ambient visual for brand reel background. 16:9, 10 seconds.",
  },
  {
    title: "Digital Marketing Agencies",
    icon: "📊",
    body: "Scale your video production across 20+ clients without scaling headcount. Use image-to-video to animate client logos and existing assets. Deliver A/B test variations for every campaign.",
    promptExample: "30-second brand anthem for a fintech startup. Animated graphs rising, diverse team collaborating, city skyline at night. Inspiring voiceover: 'Your money, your future, our tech.' 16:9.",
  },
  {
    title: "Course Creators & Coaches",
    icon: "🎓",
    body: "Produce high-conversion course trailers, promotional reels, and social proof videos. Establish authority without appearing on camera — AI-generated visuals + your voiceover.",
    promptExample: "45-second course trailer for a productivity masterclass. Visual metaphors: clocks, completed checklists, sunrise over a desk. Calm voiceover: 'Stop procrastinating. Start achieving.' 16:9.",
  },
];

const PRICING_COMPARISON = [
  { service: "Traditional Video Production", freelancerRate: "$500–$5,000", time: "2–6 weeks", revisions: "2–3 rounds (costly)" },
  { service: "Stock Footage Assembly", freelancerRate: "$200–$1,000", time: "3–10 days", revisions: "Limited" },
  { service: "AI Video (Scenith)", freelancerRate: "$9–$24/month", time: "2–10 minutes", revisions: "Unlimited (free)" },
];

const CLIENT_VIDEO_PROMPTS = [
  { clientType: "E-commerce Brand", prompt: "15-second product showcase for a sustainable fashion brand. Slow motion of organic cotton fabric, model walking in nature, warm golden hour light. Voiceover: 'Wear the change. Sustainable style for every season.' 16:9." },
  { clientType: "SaaS Startup", prompt: "30-second explainer for a project management tool. Animated interface showing task completion, team collaboration visualization. Professional voiceover: 'One dashboard. One team. One workflow. Try free today.' 16:9." },
  { clientType: "Local Restaurant", prompt: "20-second social ad for a family pizzeria. Close-ups of dough tossing, cheese pull, wood-fired oven. Friendly voiceover: 'Made fresh daily. Taste the tradition. Order now.' 9:16 vertical." },
  { clientType: "Real Estate Agent", prompt: "45-second property tour for a luxury condo. Smooth pan across interior, marble countertops, city view from balcony. Sophisticated voiceover: 'The last penthouse. The first word in luxury.' 16:9." },
  { clientType: "Fitness Trainer", prompt: "15-second motivation reel for a home workout app. Fast cuts of exercises, sweat, timer countdown. Urgent voiceover: 'No gym? No problem. First month free.' 9:16 vertical." },
  { clientType: "Non-Profit", prompt: "60-second emotional appeal for a clean water charity. Children drinking clean water, well construction in progress, sunset over village. Warm voiceover: 'You gave them water. Now give them a future.' 16:9." },
];

// ─── Page Component ───────────────────────────────────────────────────────────

export default function FreelancerVideoServiceGeneratorPage() {
  const CTA_URL =
    "https://scenith.in/create-ai-content?tab=video&utm_source=tool-page&utm_medium=freelancer-video-service-generator&utm_campaign=tool-cta&utm_content=hero-cta";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="fvs-page">
        {/* ── HERO SECTION ──────────────────────────────────────────────────── */}
        <section className="fvs-hero">
          <div className="fvs-hero-bg" />
          <div className="fvs-hero-inner">
            <div className="fvs-badge-row">
              <span className="fvs-badge">✦ For Freelancers</span>
              <span className="fvs-badge fvs-badge-alt">Client-Ready Videos</span>
              <span className="fvs-badge">Full Commercial Rights</span>
            </div>

            <h1 className="fvs-hero-h1">
              Freelancer Video Service Generator
              <span className="fvs-hero-h1-line2"> Turn Client Briefs Into</span>
              <span className="fvs-hero-h1-accent"> Professional Videos — In Minutes.</span>
            </h1>

            <p className="fvs-hero-desc">
              Stop spending days editing and rendering. Scenith's AI video studio lets you
              generate client-ready promotional videos, social ads, explainers, and commercials
              in under 10 minutes. Used by 5,000+ freelancers to deliver faster, charge more,
              and scale their video service without burning out.
            </p>

            <div className="fvs-hero-stats">
              <div className="fvs-stat"><span className="fvs-stat-num">6+</span><span className="fvs-stat-label">AI Video Models</span></div>
              <div className="fvs-stat-divider" />
              <div className="fvs-stat"><span className="fvs-stat-num">2–10m</span><span className="fvs-stat-label">Generation Time</span></div>
              <div className="fvs-stat-divider" />
              <div className="fvs-stat"><span className="fvs-stat-num">100%</span><span className="fvs-stat-label">Commercial Rights</span></div>
              <div className="fvs-stat-divider" />
              <div className="fvs-stat"><span className="fvs-stat-num">$9/mo</span><span className="fvs-stat-label">Starting Price</span></div>
            </div>

            {/* PRIMARY CTA BUTTON — Huge, direct, action-oriented */}
            <Link href={CTA_URL} className="fvs-hero-cta">
              <span className="fvs-cta-spark">⚡</span>
              Start Your Freelance Video Service — Free
              <span className="fvs-cta-arrow">→</span>
            </Link>
            <p className="fvs-hero-cta-sub">
              50 free credits · No watermark · Full commercial license · Instant MP4 download
            </p>
          </div>

          {/* Animated video format strip */}
          <div className="fvs-format-strip">
            <div className="fvs-format-track">
              {["Social Ads", "TV Commercials", "Explainer Videos", "Product Demos", "Course Trailers", "Brand Reels", "Testimonials", "Event Recaps"].map((f, i) => (
                <span key={i} className="fvs-format-pill">{f}</span>
              ))}
              {["Social Ads", "TV Commercials", "Explainer Videos", "Product Demos", "Course Trailers", "Brand Reels", "Testimonials", "Event Recaps"].map((f, i) => (
                <span key={i + 100} className="fvs-format-pill">{f}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ── MAIN CTA CARD — Central action hub ─────────────────────────────── */}
        <section className="fvs-cta-section">
          <div className="fvs-cta-card">
            <div className="fvs-cta-card-inner">
              <div className="fvs-cta-left">
                <div className="fvs-cta-tag">🎬 Freelance Video Studio</div>
                <h2 className="fvs-cta-h2">Your Complete Client Video Production Pipeline</h2>
                <p className="fvs-cta-body">
                  Scenith's AI Content Creator is purpose-built for freelancers offering video
                  services. Text-to-video, image-to-video, voiceover integration, and 6+
                  state-of-the-art AI models — all unified under a single credit balance.
                  No more expensive stock footage. No more rendering overnight. No more
                  scope creep eating your margins.
                </p>
                <ul className="fvs-cta-list">
                  <li>✦ 6+ AI video models: Kling 2.6 Pro, Veo 3.1, Wan 2.5, Grok Imagine, Luma Ray, Hailuo</li>
                  <li>✦ Text-to-video: describe any scene — AI generates cinematic footage</li>
                  <li>✦ Image-to-video: animate client logos, sketches, and existing assets</li>
                  <li>✦ 5s / 10s / longer durations (model dependent)</li>
                  <li>✦ 16:9 (horizontal), 9:16 (vertical), and 1:1 (square) outputs</li>
                  <li>✦ AI voiceover: 40+ voices, 20+ languages (Google, OpenAI, Azure)</li>
                  <li>✦ Full commercial rights on every video — deliver to paying clients</li>
                </ul>
              </div>
              <div className="fvs-cta-right">
                <div className="fvs-cta-box">
                  <div className="fvs-cta-box-label">Start Your Next Client Project</div>
                  <div className="fvs-cta-box-models">
                    <span className="fvs-model-chip">Kling 2.6</span>
                    <span className="fvs-model-chip">Veo 3.1</span>
                    <span className="fvs-model-chip">Wan 2.5</span>
                    <span className="fvs-model-chip">Grok Imagine</span>
                    <span className="fvs-model-chip">Luma Ray</span>
                  </div>
                  <div className="fvs-cta-box-preview">
                    <div className="fvs-fake-textarea">
                      <span className="fvs-fake-cursor">30-second cinematic commercial for an electric SUV. Drone shot of mountain road at sunset. Deep authoritative voiceover: "Range meets resolve. The new EV your city has been waiting for." 16:9…</span>
                    </div>
                  </div>
                  <Link href={CTA_URL} className="fvs-big-cta">
                    <span>⚡ Generate Client Video — Free</span>
                    <small>50 credits included · No card needed</small>
                  </Link>
                  <p className="fvs-cta-disclaimer">
                    Opens Scenith AI Studio · Video tab pre-selected
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── VIDEO SERVICES MATRIX ──────────────────────────────────────────── */}
        <section className="fvs-section">
          <div className="fvs-section-inner">
            <div className="fvs-section-label">Service Offerings</div>
            <h2 className="fvs-section-h2">Video Services You Can Offer Clients — Powered by AI</h2>
            <p className="fvs-section-sub">
              These are the exact services freelancers are delivering using Scenith.
              Each one can be produced in under an hour, with unlimited revisions
              at zero marginal cost.
            </p>

            <div className="fvs-services-grid">
              {VIDEO_SERVICES.map((service, i) => (
                <div className="fvs-service-card" key={i}>
                  <div className="fvs-service-icon">{service.icon}</div>
                  <div className="fvs-service-content">
                    <h3 className="fvs-service-name">{service.name}</h3>
                    <div className="fvs-service-meta">
                      <span>⏱️ {service.duration}</span>
                      <span>📐 {service.format}</span>
                      <span>💰 {service.price}</span>
                    </div>
                    <p className="fvs-service-desc">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="fvs-services-cta">
              <Link href={CTA_URL} className="fvs-inline-cta">
                Start Offering These Services Today →
              </Link>
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS FOR FREELANCERS ───────────────────────────────────── */}
        <section className="fvs-section fvs-section-dark">
          <div className="fvs-section-inner">
            <div className="fvs-section-label">Freelance Workflow</div>
            <h2 className="fvs-section-h2">From Client Brief to Delivered Video in 4 Steps</h2>
            <p className="fvs-section-sub">
              The same workflow top freelancers use to deliver $500–$2,000 video projects —
              now compressed from weeks to hours.
            </p>

            <div className="fvs-steps">
              {[
                { num: "01", title: "Extract the Brief", body: "Identify the video type, duration, tone, and key message from your client. Use our prompt templates to translate their brand language into AI-ready specifications.", detail: "Pro tip: Always ask for brand colors, logo files, and examples of visual styles they like." },
                { num: "02", title: "Generate Hero Scene", body: "Use Scenith's text-to-video to generate the primary visual sequence. Start with the most important scene — product shot, brand moment, or emotional hook.", detail: "Generate 3–5 variations with slightly different prompts. Present options to client for direction." },
                { num: "03", title: "Add Voiceover & Refine", body: "Generate professional voiceover using Scenith's AI voice tab. Combine with video using any editor (CapCut, DaVinci Resolve, Premiere Pro). Use image-to-video to animate client logos.", detail: "For audio-enabled models (Kling 2.6 Pro, Veo 3.1, Grok Imagine), voice can be generated within the video directly." },
                { num: "04", title: "Deliver & Invoice", body: "Download MP4, upload to client's preferred platform (Google Drive, Dropbox, Frame.io), and send your invoice. Full commercial rights included — no attribution needed.", detail: "Typical freelancers deliver 24–48 hours after brief. With Scenith, deliver in 2–4 hours." },
              ].map((step, i) => (
                <div className="fvs-step" key={i}>
                  <div className="fvs-step-num">{step.num}</div>
                  <div className="fvs-step-content">
                    <h3 className="fvs-step-title">{step.title}</h3>
                    <p className="fvs-step-body">{step.body}</p>
                    <div className="fvs-step-detail">{step.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── AI VIDEO MODELS COMPARISON ─────────────────────────────────────── */}
        <section className="fvs-section">
          <div className="fvs-section-inner">
            <div className="fvs-section-label">Model Intelligence</div>
            <h2 className="fvs-section-h2">Which AI Video Model for Which Client Need?</h2>
            <p className="fvs-section-sub">
              Different projects demand different models. Here's your freelancer cheat sheet.
            </p>

            <div className="fvs-models-table">
              <div className="fvs-models-header">
                <div>Model</div><div>Best For</div><div>Speed</div><div>Quality</div><div>Cost</div><div>Audio</div>
              </div>
              {VIDEO_MODELS_FOR_FREELANCERS.map((model, i) => (
                <div className="fvs-model-row" key={i}>
                  <div className="fvs-model-name">{model.name}</div>
                  <div className="fvs-model-best">{model.best}</div>
                  <div className="fvs-model-speed">{model.speed}</div>
                  <div className="fvs-model-quality">{model.quality}</div>
                  <div className="fvs-model-cost">{model.cost}</div>
                  <div className="fvs-model-audio">{model.audio}</div>
                </div>
              ))}
            </div>

            <div className="fvs-model-note">
              <span className="fvs-note-icon">💡</span>
              Pro tip: For client approvals, generate a low-cost version using Wan 2.5 or Kling 2.5 Turbo first.
              Once approved, regenerate at higher quality with Veo 3.1 or Kling 2.6 Pro.
            </div>
          </div>
        </section>

        {/* ── FREELANCER USE CASES DEEP DIVE ──────────────────────────────────── */}
        <section className="fvs-section fvs-section-tint">
          <div className="fvs-section-inner">
            <div className="fvs-section-label">Real-World Applications</div>
            <h2 className="fvs-section-h2">How Freelancers Are Using AI Video Today</h2>
            <p className="fvs-section-sub">
              These aren't hypotheticals. This is how 5,000+ freelancers are already
              scaling their video services.
            </p>

            <div className="fvs-usecase-grid">
              {FREELANCER_USE_CASES.map((uc, i) => (
                <div className="fvs-usecase-card" key={i}>
                  <div className="fvs-usecase-icon">{uc.icon}</div>
                  <h3 className="fvs-usecase-title">{uc.title}</h3>
                  <p className="fvs-usecase-body">{uc.body}</p>
                  <div className="fvs-usecase-prompt">
                    <span className="fvs-prompt-label">Sample Prompt:</span>
                    <span className="fvs-prompt-text">"{uc.promptExample}"</span>
                  </div>
                  <Link href={`${CTA_URL}&utm_content=usecase-${i}`} className="fvs-usecase-cta">
                    Try This Style →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRICING COMPARISON: AI vs Traditional ───────────────────────────── */}
        <section className="fvs-section">
          <div className="fvs-section-inner">
            <div className="fvs-section-label">ROI Analysis</div>
            <h2 className="fvs-section-h2">AI Video Service vs. Traditional Production</h2>
            <p className="fvs-section-sub">
              For freelancers, AI isn't just faster — it's radically more profitable.
            </p>

            <div className="fvs-compare-table">
              <div className="fvs-compare-row fvs-compare-header">
                <div>Production Method</div><div>Cost to Freelancer</div><div>Turnaround</div><div>Revisions</div>
              </div>
              {PRICING_COMPARISON.map((item, i) => (
                <div className="fvs-compare-row" key={i}>
                  <div className="fvs-compare-service">{item.service}</div>
                  <div className="fvs-compare-cost">{item.freelancerRate}</div>
                  <div className="fvs-compare-time">{item.time}</div>
                  <div className="fvs-compare-revisions">{item.revisions}</div>
                </div>
              ))}
            </div>

            <div className="fvs-profit-example">
              <div className="fvs-profit-card">
                <span className="fvs-profit-icon">📈</span>
                <div>
                  <strong>Example Freelancer Math:</strong> Client pays $500 for a 30-second commercial.
                  Traditional production: $200 in stock footage + 8 hours editing + 2 revision rounds = $150 profit.
                  Scenith AI production: $2 in credits + 20 minutes generation = $498 profit.
                  <span className="fvs-profit-highlight"> 3.3x higher margin per project.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CLIENT VIDEO PROMPTS LIBRARY ────────────────────────────────────── */}
        <section className="fvs-section fvs-section-dark">
          <div className="fvs-section-inner">
            <div className="fvs-section-label">Prompt Library</div>
            <h2 className="fvs-section-h2">Copy-Paste-Ready Client Video Prompts</h2>
            <p className="fvs-section-sub">
              These prompts are designed to generate professional results immediately.
              Replace the brand name, adjust the duration, and deliver.
            </p>

            <div className="fvs-prompts-grid">
              {CLIENT_VIDEO_PROMPTS.map((prompt, i) => (
                <div className="fvs-prompt-card" key={i}>
                  <div className="fvs-prompt-badge">{prompt.clientType}</div>
                  <p className="fvs-prompt-text">"{prompt.prompt}"</p>
                  <Link href={`${CTA_URL}&utm_content=prompt-${i}`} className="fvs-prompt-use">
                    Use This Prompt →
                  </Link>
                </div>
              ))}
            </div>

            <div className="fvs-prompt-tip">
              <div className="fvs-tip-icon">✍️</div>
              <div>
                <strong>Prompt Formula for Client Videos:</strong> [Duration] + [video type] + for [client industry/brand] + [visual description] + [voiceover tone + script snippet] + [aspect ratio]
              </div>
            </div>
          </div>
        </section>

        {/* ── WHY FREELANCERS NEED AI IN 2026 ──────────────────────────────────── */}
        <section className="fvs-section">
          <div className="fvs-section-inner">
            <div className="fvs-section-label">The 2026 Reality</div>
            <h2 className="fvs-section-h2">Why Every Video Freelancer Needs AI in Their Stack</h2>

            <div className="fvs-why-grid">
              {[
                { title: "Client Expectations Have Tripled", icon: "📈", body: "Your clients now expect faster turnaround, more revisions, and lower prices. AI is the only way to maintain quality while meeting these demands without burning out." },
                { title: "Stock Footage Is a Tax on Your Margins", icon: "💰", body: "A single stock clip costs $50–$200. Scenith generates unlimited custom footage for pennies per second. Stop paying for footage someone else owns — generate your own." },
                { title: "Revisions Used to Cost You Time", icon: "🔄", body: "With AI, revisions are free. Regenerate, adjust prompts, try different models. Your clients get unlimited iterations, and you get paid the same. Everyone wins." },
                { title: "You Can Outbid Larger Agencies", icon: "⚡", body: "Larger agencies have overhead. You have Scenith. When they quote $5,000 and 4 weeks, you quote $1,500 and 3 days — and still make better margins." },
                { title: "Your Portfolio Can Scale 10x", icon: "📁", body: "With AI, you can produce 10 client projects in the time it used to take for 1. More case studies, more testimonials, more inbound leads — a compounding flywheel." },
                { title: "Full Commercial Rights = Zero Legal Risk", icon: "🔑", body: "Unlike free stock sites with restrictive licenses, Scenith grants full commercial rights. Your clients can use the videos anywhere — no copyright claims, no attribution required." },
              ].map((item, i) => (
                <div className="fvs-why-card" key={i}>
                  <span className="fvs-why-icon">{item.icon}</span>
                  <h3 className="fvs-why-title">{item.title}</h3>
                  <p className="fvs-why-body">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── COMPARISON WITH OTHER FREELANCE VIDEO TOOLS ──────────────────────── */}
        <section className="fvs-section fvs-section-tint">
          <div className="fvs-section-inner">
            <div className="fvs-section-label">Competitive Landscape</div>
            <h2 className="fvs-section-h2">Scenith vs. Other Video Tools for Freelancers</h2>

            <div className="fvs-compare-grid">
              {[
                { tool: "Adobe Premiere Pro", cost: "$21/mo", learning: "Steep (months)", speed: "Slow (hours/days)", footage: "Stock or self-shot", verdict: "Powerful but slow. Best for high-end, long-form. Overkill for social/content." },
                { tool: "CapCut / InShot", cost: "Free–$10/mo", learning: "Easy", speed: "Medium", footage: "Stock only", verdict: "Good for editing, not for generating. Still need source footage." },
                { tool: "Runway / Pika Labs", cost: "$15–$30/mo", learning: "Medium", speed: "Fast", footage: "AI-generated", verdict: "Good for AI, but limited models. No voice or images. Higher cost per generation." },
                { tool: "Scenith AI Studio", cost: "Free–$24/mo", learning: "Minimal", speed: "2–10 minutes", footage: "AI-generated + stock", verdict: "All-in-one: video + voice + image. Best value for freelancers." },
              ].map((item, i) => (
                <div className="fvs-compare-card" key={i}>
                  <h3 className="fvs-compare-tool">{item.tool}</h3>
                  <div className="fvs-compare-detail"><span>Cost:</span> {item.cost}</div>
                  <div className="fvs-compare-detail"><span>Learning:</span> {item.learning}</div>
                  <div className="fvs-compare-detail"><span>Speed:</span> {item.speed}</div>
                  <div className="fvs-compare-detail"><span>Footage:</span> {item.footage}</div>
                  <p className="fvs-compare-verdict">{item.verdict}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ─────────────────────────────────────────────────────────────── */}
        <section className="fvs-section">
          <div className="fvs-section-inner">
            <div className="fvs-section-label">FAQ</div>
            <h2 className="fvs-section-h2">Freelancer Video Service — Common Questions</h2>

            <div className="fvs-faq-list">
              {[
                { q: "Can I really deliver Scenith-generated videos to my paying clients?", a: "Yes, absolutely. Every video generated on Scenith comes with full commercial rights. You can deliver them to clients, use them in your portfolio, and charge for your video service. No attribution to Scenith is required, and there are no royalty fees or usage restrictions. The only restriction is that you cannot resell access to Scenith's platform as a standalone service." },
                { q: "What kind of videos can I create for clients?", a: "You can create promotional videos, social media ads (TikTok, Instagram Reels, YouTube Shorts), explainer videos, product demos, course trailers, brand reels, testimonial videos, event recaps, and short commercials. Durations from 5 seconds to 10 seconds per clip (longer videos can be edited together from multiple clips)." },
                { q: "How do I price my AI video service to clients?", a: "Most freelancers charge between $200–$1,000 per video depending on length and complexity. Your cost on Scenith is $0.10–$2.00 per video in credits. That means margins of 95%+. We recommend: starter packages ($200–$300 for 15-second social ads), standard packages ($500–$800 for 30-second commercials), and premium packages ($1,000–$2,000 for full brand reels with multiple scenes and voiceover)." },
                { q: "Do I need video editing skills to use Scenith?", a: "Basic editing helps but isn't required. For single-scene videos (most social ads, short promos), you can generate and deliver directly. For multi-scene videos (30–60s commercials), you'll want to combine clips using a free editor like CapCut or DaVinci Resolve. The generation is the hard part — Scenith handles that. Editing is just arranging." },
                { q: "Can I add my own voiceover or music?", a: "Yes. Scenith has built-in AI voiceover with 40+ voices. You can also upload your own voiceover recordings or royalty-free music. Combine them in any video editor. For video models that support audio (Kling 2.6 Pro, Veo 3.1, Grok Imagine), voiceover can be generated directly into the video file." },
                { q: "What if a client requests changes to an AI-generated video?", a: "Revisions are simple: adjust your prompt and regenerate. Each generation costs credits, but at $0.10–$2.00 per video, you can afford unlimited iterations. This is a major competitive advantage over traditional production, where revisions cost hours or hundreds of dollars." },
                { q: "Can I use Scenith to animate a client's existing logo or sketch?", a: "Yes — use image-to-video mode. Upload the client's logo, brand asset, or even a napkin sketch photo. Describe the movement you want (e.g., 'slow zoom in, cinematic lighting, subtle rotation'), and the AI generates an animated video starting from that image." },
                { q: "What's the video quality? Is it suitable for client work?", a: "Scenith outputs up to 1080p MP4 files. Quality varies by model: Veo 3.1 and Kling 2.6 Pro produce broadcast-quality cinematic footage. Wan 2.5 and Grok Imagine produce social-media-ready quality. For most client work (social ads, website videos, digital signage), the quality is indistinguishable from traditional production." },
                { q: "How many client projects can I handle per month with Scenith?", a: "With Creator Lite ($9/month, 300 credits), you can produce 3–6 client videos. With Creator Pro ($24/month, 900 credits), you can produce 10–20 client videos. For high-volume freelancers (30+ videos/month), contact us for custom enterprise pricing." },
                { q: "Do I need to show 'Made with Scenith' or any attribution?", a: "No. Full commercial rights means you can present the videos as your own work. No watermark, no attribution, no footer text. Your client never needs to know AI was involved unless you choose to tell them." },
                { q: "Can I generate videos in languages other than English for international clients?", a: "Yes. Scenith's AI voiceover supports 20+ languages including Spanish, French, German, Mandarin, Hindi, Arabic, Japanese, and Korean. The text-to-video model responds to prompts in multiple languages. For non-English voiceover, select the appropriate language in the voice tab." },
                { q: "How do I handle client brand consistency across multiple videos?", a: "Save your successful prompts in a document or spreadsheet by client. Include details like 'brand colors: #1a365d and #ecc94b', 'tone: professional but approachable', 'preferred model: Kling 2.6 Pro'. For recurring clients, you can rebuild consistent aesthetics quickly by referencing previous prompts." },
              ].map((item, i) => (
                <details className="fvs-faq-item" key={i}>
                  <summary className="fvs-faq-q">{item.q}</summary>
                  <p className="fvs-faq-a">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── RELATED TOOLS ───────────────────────────────────────────────────── */}
        <section className="fvs-section fvs-section-tint">
          <div className="fvs-section-inner">
            <div className="fvs-section-label">Explore Ecosystem</div>
            <h2 className="fvs-section-h2">More AI Tools for Your Freelance Service</h2>
            <p className="fvs-section-sub">Bundle video with these complementary tools to offer complete content packages.</p>
            <div className="fvs-related-grid">
              {[
                { href: "https://scenith.in/tools/add-subtitles-to-videos", icon: "💬", title: "Add Subtitles to Videos", desc: "Auto-caption client videos for social media — increase retention and accessibility." },
                { href: "https://scenith.in/tools/ai-logo-generator", icon: "🖼️", title: "AI Logo Generator", desc: "Offer logo design + video packages. Generate brand identities alongside video content." },
                { href: "https://scenith.in/tools/ai-image-generation", icon: "🎨", title: "AI Image Generation", desc: "Create thumbnails, display ads, and social graphics to complement video deliverables." },
              ].map((tool, i) => (
                <Link href={tool.href} className="fvs-related-card" key={i}>
                  <span className="fvs-related-icon">{tool.icon}</span>
                  <h3 className="fvs-related-title">{tool.title}</h3>
                  <p className="fvs-related-desc">{tool.desc}</p>
                  <span className="fvs-related-arrow">Explore →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA — Massive, no-escape section ───────────────────────────── */}
        <section className="fvs-final-cta">
          <div className="fvs-final-inner">
            <div className="fvs-final-noise" />
            <h2 className="fvs-final-h2">
              Your freelance video service scales here.
              <br />
              <span className="fvs-final-accent">Start delivering client work in minutes.</span>
            </h2>
            <p className="fvs-final-sub">
              50 free credits. 6+ AI video models. 40+ voices.
              <br />
              Full commercial rights. No card required.
            </p>
            <Link href={CTA_URL} className="fvs-final-btn">
              <span className="fvs-cta-spark">⚡</span>
              Start Your Freelance Video Service — Free
              <span className="fvs-cta-arrow">→</span>
            </Link>
            <p className="fvs-final-note">
              Used by 5,000+ freelancers · 50,000+ client videos delivered
            </p>
          </div>
        </section>
      </div>
    </>
  );
}