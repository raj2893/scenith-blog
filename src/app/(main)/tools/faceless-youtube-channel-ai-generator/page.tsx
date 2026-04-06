import type { Metadata } from "next";
import Link from "next/link";
import "./faceless-youtube-channel-ai-generator.css";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Faceless YouTube Channel AI Generator — Automate Voice, Image & Video (2026)",
  description:
    "Start and scale a faceless YouTube channel using AI. Generate voiceovers, thumbnails, and video clips automatically — no face, no camera, no editing skills. 50 free credits. Powered by GPT, Veo 3.1, Kling & more.",
  keywords: [
    "faceless YouTube channel AI",
    "AI faceless YouTube generator",
    "faceless YouTube automation 2026",
    "AI voiceover for YouTube",
    "text to video YouTube faceless",
    "AI thumbnail generator YouTube",
    "how to start faceless YouTube channel",
    "faceless YouTube channel ideas",
    "AI content creator for YouTube",
    "automated YouTube channel AI",
    "AI YouTube video maker",
    "faceless channel tools",
    "AI video generator for YouTube",
    "YouTube automation AI tools",
    "generate YouTube videos without showing face",
  ],
  openGraph: {
    title: "Faceless YouTube Channel AI Generator — No Face. No Camera. Just Revenue.",
    description:
      "Create an entire faceless YouTube channel with AI-generated voiceovers, cinematic b-roll video clips, and scroll-stopping thumbnails. Start free — 50 credits on signup.",
    type: "website",
    url: "https://scenith.in/tools/faceless-youtube-channel-ai-generator",
    images: [
      {
        url: "https://scenith.in/og/faceless-youtube-ai.png",
        width: 1200,
        height: 630,
        alt: "Faceless YouTube Channel AI Generator by Scenith",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Faceless YouTube Channel AI Generator",
    description:
      "No face. No camera. Just AI-powered voice, image & video — your whole faceless YouTube channel, automated.",
  },
  alternates: {
    canonical: "https://scenith.in/tools/faceless-youtube-channel-ai-generator",
  },
};

// ─── Structured Data (JSON-LD) ─────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Faceless YouTube Channel AI Generator",
  description:
    "AI-powered tool to create a faceless YouTube channel using automated voice, image, and video generation. Generate scripts, voiceovers, thumbnails, and b-roll video with a single prompt.",
  url: "https://scenith.in/tools/faceless-youtube-channel-ai-generator",
  mainEntity: {
    "@type": "SoftwareApplication",
    name: "Scenith AI Content Creator",
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "50 free credits on signup — no credit card required",
    },
    featureList: [
      "AI voiceover generation (Google, OpenAI, Azure)",
      "AI image/thumbnail generation (GPT Image, Imagen 4, FLUX, Grok Aurora)",
      "AI video generation (Kling 2.6, Veo 3.1, Wan 2.5)",
      "Faceless YouTube content automation",
      "40+ natural voices, 20+ languages",
      "MP3, PNG, MP4 download with commercial rights",
    ],
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://scenith.in" },
      { "@type": "ListItem", position: 2, name: "Tools", item: "https://scenith.in/tools" },
      {
        "@type": "ListItem",
        position: 3,
        name: "Faceless YouTube Channel AI Generator",
        item: "https://scenith.in/tools/faceless-youtube-channel-ai-generator",
      },
    ],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can I start a faceless YouTube channel using only AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. With tools like Scenith, you can generate AI voiceovers, AI thumbnail images, and AI video clips — everything a faceless channel needs — from text prompts alone. You never need to appear on camera, record your own voice, or use video editing software.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best AI tool for faceless YouTube channels in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Scenith provides voice (Google TTS, OpenAI, Azure), image (Imagen 4, GPT Image, FLUX, Grok Aurora), and video (Kling 2.6, Veo 3.1, Wan 2.5) all under one platform. This is the most comprehensive single-tool option for faceless YouTube creators in 2026.",
      },
    },
    {
      "@type": "Question",
      name: "How much does it cost to run a faceless YouTube channel with AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Scenith's Creator Lite plan starts at $9/month and includes 300 credits — enough for multiple videos per month. Compared to hiring voice actors, video editors, and graphic designers separately, this is a fraction of the traditional cost.",
      },
    },
    {
      "@type": "Question",
      name: "What are the best niches for a faceless YouTube channel in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Top-performing niches in 2026 include: AI & tech explainers, true crime narration, finance & investing, history documentaries, horror stories, motivational content, space & science, ASMR, meditation & sleep, kids educational, and news commentary channels.",
      },
    },
    {
      "@type": "Question",
      name: "Can AI-generated content on YouTube be monetized?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — AI-generated content can be monetized through YouTube AdSense, provided it meets YouTube's Partner Program requirements (1,000 subscribers + 4,000 watch hours or 10M Shorts views). You must also disclose AI-generated content using YouTube's AI disclosure setting. Scenith content comes with full commercial rights.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to generate a faceless YouTube video with AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Voice narration: ~3 seconds. AI thumbnail image: 10–30 seconds. AI video clip (5–10 seconds): 30–120 seconds depending on model. A complete video package (voiceover + thumbnail + b-roll clips) can be assembled in under 5 minutes using Scenith.",
      },
    },
  ],
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const NICHES = [
  { icon: "🤖", name: "AI & Tech Explainers", desc: "Breaking down AI tools, models, and tech news in plain language. Huge audience in 2026 — billions of searches.", tag: "🔥 Trending", tagClass: "" },
  { icon: "💰", name: "Finance & Investing", desc: "Stock tips, crypto insights, passive income strategies. High CPM ($15–$45) — advertisers pay premium.", tag: "💸 High CPM", tagClass: "green" },
  { icon: "🕵️", name: "True Crime Narration", desc: "Dramatic narrated true crime stories. One of YouTube's highest engagement categories with loyal repeat audiences.", tag: "📈 High Watch Time", tagClass: "blue" },
  { icon: "🧠", name: "Psychology & Mindset", desc: "Stoicism, dark psychology, human behavior. Perfect for AI narration — written content that reads beautifully aloud.", tag: "♻️ Evergreen", tagClass: "yellow" },
  { icon: "🚀", name: "Space & Science Docs", desc: "NASA updates, exoplanet discoveries, physics explainers. Cinematic AI video clips make these channels stunning.", tag: "🔥 Trending", tagClass: "" },
  { icon: "📚", name: "History Documentaries", desc: "Ancient Rome, forgotten wars, historical mysteries. Rich stock of public domain images + AI narration = gold.", tag: "♻️ Evergreen", tagClass: "yellow" },
  { icon: "👻", name: "Horror & Creepypasta", desc: "Narrated horror stories and Reddit NoSleep compilations. Night-mode AI voices create authentic atmosphere.", tag: "📈 High Watch Time", tagClass: "blue" },
  { icon: "🧘", name: "Sleep & Meditation", desc: "Bedtime stories, affirmations, guided meditation. Azure & OpenAI voices sound incredibly soothing at 0.75x speed.", tag: "♻️ Evergreen", tagClass: "yellow" },
  { icon: "🎮", name: "Gaming Lore & Analysis", desc: "Elden Ring lore, Minecraft builds, game theory. No gameplay needed — narration + AI art makes compelling content.", tag: "💸 High CPM", tagClass: "green" },
  { icon: "🌍", name: "Travel & Geography", desc: "Countries compared, hidden destinations, cultural facts. AI video clips + voice = a virtual travel show.", tag: "📈 Growing", tagClass: "blue" },
  { icon: "📰", name: "News Commentary", desc: "Daily news summaries with editorial AI voice. Huge subscriber loyalty when done consistently.", tag: "🔥 Trending", tagClass: "" },
  { icon: "👶", name: "Kids Educational", desc: "Alphabet, numbers, animals, stories. One of YouTube's highest watch-time demographics. Ad-friendly CPM.", tag: "💸 High CPM", tagClass: "green" },
];

const HOW_STEPS = [
  {
    num: "01",
    title: "Pick your niche & write your script",
    desc: "Choose from the 12 proven faceless YouTube niches above. Write a 200–500 word script for your video topic — or use ChatGPT to draft one in 60 seconds. This becomes your voice prompt.",
    tip: "💡 Tip: 8–12 minute videos hit YouTube's sweet spot for monetization and algorithm push.",
  },
  {
    num: "02",
    title: "Generate your AI voiceover",
    desc: "Paste your script into Scenith's Voice tab. Choose from 40+ natural voices across Google, OpenAI, and Azure — pick one that matches your channel's tone. Dark & dramatic for true crime, calm & deep for finance, warm & friendly for kids. Hit generate. MP3 in ~3 seconds.",
    tip: "💡 Pro: Use 1.25x speed for tech/news channels — it feels snappier and increases watch time.",
  },
  {
    num: "03",
    title: "Create your AI thumbnail",
    desc: "Switch to Scenith's Image tab. Describe your thumbnail in detail — lighting, subject, mood, text overlay idea. Use Grok Aurora or GPT Image 1 for the most photorealistic results. Download the high-res PNG and add your title text in Canva or Photoshop (takes 2 min).",
    tip: "💡 Pro: Use 'high contrast, dramatic lighting, no text' for the base — then layer text yourself for full control.",
  },
  {
    num: "04",
    title: "Generate AI b-roll video clips",
    desc: "Switch to Scenith's Video tab. Generate 5–10 second cinematic clips matching your script scenes. Use Kling 2.6 Pro or Veo 3.1 for premium-quality clips. Generate 6–10 clips per video, then assemble them in CapCut or DaVinci Resolve (free) over your voiceover.",
    tip: "💡 Time saver: Use the 'Make Video from this Image' button to animate your thumbnail into a compelling intro.",
  },
  {
    num: "05",
    title: "Assemble, upload & optimize",
    desc: "Combine your voiceover MP3 + AI video clips in any free editor (CapCut recommended for beginners). Add auto-captions (improves watch time by 40%). Export as 1080p MP4, write your keyword-rich YouTube title and description, and publish. Aim for 3–4 videos per week in the first 3 months.",
    tip: "💡 SEO: Include your main keyword in the title, first line of description, and 3–5 tags.",
  },
];

const CONTENT_CALENDAR = [
  { day: "Monday", type: "video", asset: "Hero Video (5–10s b-roll)", model: "Kling 2.6 Pro", time: "~60s" },
  { day: "Monday", type: "voice", asset: "Full Script Voiceover", model: "OpenAI TTS", time: "~3s" },
  { day: "Tuesday", type: "image", asset: "Eye-catching Thumbnail", model: "Grok Aurora", time: "~15s" },
  { day: "Wednesday", type: "video", asset: "3× Scene B-roll Clips", model: "Wan 2.5 HD", time: "~3 min" },
  { day: "Thursday", type: "voice", asset: "Shorts Script (60s)", model: "Azure Neural", time: "~3s" },
  { day: "Friday", type: "video", asset: "YouTube Short Clip", model: "Veo 3.1 Fast", time: "~45s" },
  { day: "Saturday", type: "image", asset: "Short Thumbnail + Card", model: "GPT Image 1", time: "~20s" },
  { day: "Sunday", type: "voice", asset: "Batch 3 next-week voiceovers", model: "Google TTS", time: "~10s each" },
];

const MONETIZATION = [
  {
    icon: "💵",
    title: "YouTube AdSense (YPP)",
    desc: "Once you hit 1,000 subscribers + 4,000 watch hours (or 10M Shorts views), apply for YouTube Partner Program. Finance and tech channels earn $8–$45 CPM. A 100K channel in these niches can generate $2,000–$8,000/month in ad revenue alone.",
    earnings: "$500–$8,000/mo at scale",
  },
  {
    icon: "🤝",
    title: "Brand Sponsorships",
    desc: "At 10K–50K subscribers, brands in your niche will pay for dedicated mentions or integrations. Tech channels command $200–$2,000 per sponsorship. Finance and investing channels can charge even more.",
    earnings: "$200–$5,000/deal",
  },
  {
    icon: "📦",
    title: "Digital Products & Courses",
    desc: "Sell your own ebook, course, or template directly to your audience. A finance channel can sell a budgeting spreadsheet. A mindset channel can sell a journal. High-margin, no fulfillment.",
    earnings: "$10–$200/unit",
  },
  {
    icon: "🔗",
    title: "Affiliate Marketing",
    desc: "Recommend tools, software, or products relevant to your niche. AI tool affiliate programs (Jasper, MidJourney) pay 20–30% recurring. Finance affiliate deals (brokerages, budgeting apps) pay $50–$200 per signup.",
    earnings: "$500–$5,000/mo passively",
  },
  {
    icon: "🎁",
    title: "Channel Memberships",
    desc: "Once eligible, offer exclusive perks to paying members — early access, extended content, community chats. Small but loyal audiences can generate surprisingly stable recurring income.",
    earnings: "$3–$25/member/mo",
  },
  {
    icon: "🛒",
    title: "Merchandise & Print-on-Demand",
    desc: "With a recognizable brand identity (logo, channel aesthetic), sell branded merch with zero upfront inventory using Printify or Printful. Works especially well for motivation, gaming, and history channels.",
    earnings: "$5–$30/sale",
  },
];

const PROMPTS = [
  { type: "voice", label: "Voice", text: "Welcome back. In today's video, we're exposing the silent financial trap that's draining 47% of millennials — and most of them don't even know it's happening." },
  { type: "image", label: "Image", text: "Cinematic thumbnail: dramatic split-screen of ancient Rome colosseum vs modern NYC skyline at golden hour, 8K detail, bold red gradient overlay, high contrast, no text" },
  { type: "video", label: "Video", text: "Cinematic drone shot slowly descending into a dense futuristic city at night, neon lights reflecting off rain puddles, fog between glass towers, 1080p hyperrealistic" },
  { type: "voice", label: "Voice", text: "Scientists have just discovered something buried 3 kilometers beneath the Antarctic ice — and the implications could rewrite human prehistory as we know it." },
  { type: "image", label: "Image", text: "AI robot humanoid sitting in a leather chair reading a newspaper, warm library lighting, oil painting portrait style, depth of field blur background, ultra realistic 4K" },
  { type: "video", label: "Video", text: "Extreme closeup of an ancient leather-bound book opening slowly, golden dust particles in the air, warm dramatic light from above, cinematic slow motion 4K" },
];

const EARNINGS_DATA = [
  { stage: "0–1K subscribers", monthly: "$0 (pre-monetization)", tips: "Focus on SEO, batch content", time: "Month 1–3" },
  { stage: "1K–10K subs", monthly: "$50–$400/mo", tips: "Apply for YPP, add affiliate links", time: "Month 3–8" },
  { stage: "10K–100K subs", monthly: "$400–$3,500/mo", tips: "Add sponsorships + products", time: "Month 6–18" },
  { stage: "100K–500K subs", monthly: "$2,000–$15,000/mo", tips: "Hire VA for uploads, scale", time: "Month 12–30" },
  { stage: "500K+ subs", monthly: "$10,000–$50,000+/mo", tips: "Multiple income streams active", time: "Month 24+" },
];

// ─── Page Component ────────────────────────────────────────────────────────────

export default function FacelessYouTubeChannelAIGeneratorPage() {
  const CTALink = "https://scenith.in/create-ai-content?utm_source=tool&utm_medium=faceless-yt-page&utm_campaign=faceless-youtube-channel-ai-generator";
  const CTAVoiceLink = `${CTALink}&tab=voice`;
  const CTAImageLink = `${CTALink}&tab=image`;
  const CTAVideoLink = `${CTALink}&tab=video`;

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="fy-page">
        {/* Background orbs */}
        <div className="fy-bg-orbs" aria-hidden>
          <div className="fy-orb fy-orb-1" />
          <div className="fy-orb fy-orb-2" />
          <div className="fy-orb fy-orb-3" />
        </div>

        {/* ══════════════════════════════
            HERO
        ══════════════════════════════ */}
        <section className="fy-hero">
          <div className="fy-hero-eyebrow">
            <span className="fy-eyebrow-dot" aria-hidden />
            AI-Powered · No Face Required · Free to Start
          </div>

          <h1 className="fy-hero-title">
            Build a <span className="fy-highlight">Faceless YouTube</span>
            <br />
            Channel with <span className="fy-underline-word">AI</span> — in 2026
          </h1>

          <p className="fy-hero-sub">
            Generate <strong>AI voiceovers</strong>, <strong>AI thumbnails</strong>, and{" "}
            <strong>cinematic AI video clips</strong> — everything your channel needs,
            without ever showing your face, recording your voice, or opening a video editor.
            One platform. Three tools. Infinite content.
          </p>

          <div className="fy-hero-cta">
            <Link href={CTALink} className="fy-cta-primary" aria-label="Start creating faceless YouTube content with Scenith AI">
              🎬 Start Creating for Free
              <span className="fy-cta-arrow">→</span>
            </Link>
            <Link href="#how-it-works" className="fy-cta-secondary">
              See how it works ↓
            </Link>
          </div>

          <div className="fy-hero-stats">
            <div className="fy-stat">
              <span className="fy-stat-value">50</span>
              <span className="fy-stat-label">Free Credits</span>
            </div>
            <div className="fy-stat">
              <span className="fy-stat-value">40+</span>
              <span className="fy-stat-label">AI Voices</span>
            </div>
            <div className="fy-stat">
              <span className="fy-stat-value">7+</span>
              <span className="fy-stat-label">Image Models</span>
            </div>
            <div className="fy-stat">
              <span className="fy-stat-value">6</span>
              <span className="fy-stat-label">Video Models</span>
            </div>
            <div className="fy-stat">
              <span className="fy-stat-value">3s</span>
              <span className="fy-stat-label">Voice Gen Time</span>
            </div>
          </div>
        </section>

        <div className="fy-divider" role="separator" />

        {/* ══════════════════════════════
            WHAT IS FACELESS YOUTUBE
        ══════════════════════════════ */}
        <section className="fy-section" aria-labelledby="what-is-heading">
          <div className="fy-section-label">The Opportunity</div>
          <h2 className="fy-section-title" id="what-is-heading">
            What Is a <span className="fy-grad">Faceless YouTube Channel</span> —<br />
            And Why Is 2026 the Best Year to Start?
          </h2>
          <p className="fy-section-sub">
            A faceless YouTube channel is one where the creator never appears on screen. No talking head. No camera required.
            Content is driven by narration, stock or AI-generated visuals, and strong storytelling — and it&apos;s one of the
            fastest-growing creator formats online right now.
          </p>

          <div className="fy-intro-grid">
            <div className="fy-intro-card">
              <span className="fy-intro-card-icon">📈</span>
              <h3>The format is algorithmically favored</h3>
              <p>
                YouTube&apos;s algorithm cares about one thing: watch time. Faceless channels — especially documentary,
                narration, and educational formats — routinely achieve 60–85% audience retention because there&apos;s no
                face to distract from the story. High retention = algorithmic push = organic growth.
              </p>
            </div>
            <div className="fy-intro-card">
              <span className="fy-intro-card-icon">🤖</span>
              <h3>AI has completely changed the economics</h3>
              <p>
                Before 2023, running a faceless channel required hiring a voice actor ($50–$300/video), a graphic
                designer for thumbnails ($25–$100), and a video editor ($100–$500/video). With AI tools in 2026,
                the total cost per video is under $2. The barrier to entry has never been lower.
              </p>
            </div>
            <div className="fy-intro-card">
              <span className="fy-intro-card-icon">🌍</span>
              <h3>Full anonymity and scalability</h3>
              <p>
                You can run a faceless channel under any brand name, from any country, in any language. You can
                outsource or fully automate the upload workflow. It scales horizontally — once you build one, you can
                build three. Multiple channels, multiple income streams, one toolset.
              </p>
            </div>
            <div className="fy-intro-card">
              <span className="fy-intro-card-icon">💰</span>
              <h3>Monetization potential is massive</h3>
              <p>
                Faceless channels in high-CPM niches (finance, AI, investing) can generate $3,000–$15,000/month once
                they reach 100K–500K subscribers. With AI reducing the per-video cost to under $3, the profit
                margins are extraordinary — often 90%+ once the channel is established.
              </p>
            </div>
          </div>

          <div className="fy-pros-cons">
            <h4>Faceless YouTube Channel — Honest Pros & Cons</h4>
            <div className="fy-pros-cons-grid">
              <ul className="fy-pros">
                <li>No need to show your face or record your voice</li>
                <li>Can be fully automated with AI tools</li>
                <li>Works in any language and country</li>
                <li>High-CPM niches available (finance, tech)</li>
                <li>Near-zero production cost with AI in 2026</li>
                <li>Scalable to multiple channels</li>
                <li>Passive income once monetized</li>
              </ul>
              <ul className="fy-cons">
                <li>Slower to build audience vs personality channels</li>
                <li>YouTube requires AI disclosure since 2024</li>
                <li>Algorithm changes can affect reach overnight</li>
                <li>Competitive — many AI channels launched in 2024–25</li>
                <li>3–12 months before monetization typically</li>
                <li>Requires consistent publishing schedule</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="fy-divider" role="separator" />

        {/* ══════════════════════════════
            NICHE EXPLORER
        ══════════════════════════════ */}
        <section className="fy-niche-section" aria-labelledby="niches-heading">
          <div className="fy-wrap">
            <div className="fy-section-label">12 Proven Categories</div>
            <h2 className="fy-section-title" id="niches-heading">
              Best Faceless YouTube Channel <span className="fy-grad">Niches in 2026</span>
            </h2>
            <p className="fy-section-sub">
              Not all niches are created equal. These 12 are proven performers — high watch time, strong advertiser
              demand, or exceptional evergreen search potential. Each one is fully achievable with AI-only content.
            </p>

            <div className="fy-niche-grid">
              {NICHES.map((n) => (
                <div key={n.name} className="fy-niche-card">
                  <span className="fy-niche-icon" aria-hidden>{n.icon}</span>
                  <div className="fy-niche-name">{n.name}</div>
                  <p className="fy-niche-desc">{n.desc}</p>
                  <span className={`fy-niche-tag ${n.tagClass}`}>{n.tag}</span>
                </div>
              ))}
            </div>

            <div className="fy-inline-cta">
              <div className="fy-inline-cta-text">
                <strong>Ready to pick your niche and create your first video?</strong>
                <span>50 free credits — generate a voiceover, thumbnail, and video clip right now.</span>
              </div>
              <Link href={CTALink} className="fy-inline-cta-btn">
                Start Free → 
              </Link>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════
            HOW IT WORKS
        ══════════════════════════════ */}
        <section className="fy-section" id="how-it-works" aria-labelledby="how-heading">
          <div className="fy-section-label">Step-by-Step Workflow</div>
          <h2 className="fy-section-title" id="how-heading">
            How to Build a Faceless YouTube Channel<br />
            <span className="fy-grad">Using AI — Complete 2026 Workflow</span>
          </h2>
          <p className="fy-section-sub">
            From zero to first upload in one afternoon. Here&apos;s the exact process used by AI-first faceless creators
            growing in 2026 — including every tool, every format, and every shortcut.
          </p>

          <div className="fy-how-steps" role="list">
            {HOW_STEPS.map((s) => (
              <div key={s.num} className="fy-step" role="listitem">
                <div className="fy-step-num" aria-label={`Step ${s.num}`}>{s.num}</div>
                <div className="fy-step-content">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <span className="fy-step-tip">{s.tip}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════
            MAIN CTA BLOCK
        ══════════════════════════════ */}
        <section className="fy-cta-block" aria-labelledby="cta-main-heading">
          <div className="fy-wrap">
            <div className="fy-cta-box">
              <div className="fy-cta-box-label">Scenith AI Content Creator</div>
              <h2 className="fy-cta-box-title" id="cta-main-heading">
                Voice. Image. Video.<br />
                Everything Your Channel Needs.
              </h2>
              <p className="fy-cta-box-sub">
                Stop switching between 5 different tools and 5 different subscriptions.
                Generate your AI voiceover, thumbnail, and cinematic b-roll — all in one place.
                <strong> 50 free credits. No credit card.</strong>
              </p>
              <Link href={CTALink} className="fy-cta-big-btn" aria-label="Open Scenith AI Content Creator to start your faceless YouTube channel">
                🎬 Open AI Content Creator
                <span style={{ fontSize: 22 }}>→</span>
              </Link>
              <div className="fy-cta-chips" role="list" aria-label="Included features">
                <span className="fy-cta-chip" role="listitem">🎙️ AI Voice</span>
                <span className="fy-cta-chip" role="listitem">🖼️ AI Image</span>
                <span className="fy-cta-chip" role="listitem">🎬 AI Video</span>
                <span className="fy-cta-chip" role="listitem">✅ Free to Start</span>
                <span className="fy-cta-chip" role="listitem">🔓 Commercial Rights</span>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════
            TOOLS BREAKDOWN
        ══════════════════════════════ */}
        <section className="fy-section" aria-labelledby="tools-heading">
          <div className="fy-section-label">Three Tools, One Page</div>
          <h2 className="fy-section-title" id="tools-heading">
            What Scenith Gives You for Your<br />
            <span className="fy-grad">Faceless YouTube Channel</span>
          </h2>
          <p className="fy-section-sub">
            Every faceless YouTube video needs three things: a voice, a visual identity, and motion content.
            Here&apos;s how Scenith delivers all three — and why each one matters.
          </p>

          <div className="fy-tools-grid" role="list">
            <article className="fy-tool-card" role="listitem">
              <div className="fy-tool-icon" aria-hidden>🎙️</div>
              <h3>AI Voice Generator</h3>
              <p>
                Your voice is the soul of your faceless channel. With Scenith, you choose from 40+ natural
                voices across Google, OpenAI, and Azure. Male, female, dramatic, calm, energetic, whispering
                — every tone is available. Generate a full script narration in about 3 seconds.
                Download as MP3, drop it into your editor, done.
              </p>
              <ul className="fy-tool-feature-list" aria-label="Voice generator features">
                <li>40+ natural voices including celebrity-like tones</li>
                <li>20+ languages for multilingual channels</li>
                <li>Adjustable speed (0.5x to 4x) for pacing control</li>
                <li>Google TTS, OpenAI TTS, Azure Neural TTS</li>
                <li>Instant MP3 download, commercial rights</li>
              </ul>
              <div style={{ marginTop: 16 }}>
                <Link href={CTAVoiceLink} style={{ fontSize: 13, color: '#4fc3f7', fontWeight: 700, textDecoration: 'none' }}>
                  → Try AI Voice Generator Free
                </Link>
              </div>
            </article>

            <article className="fy-tool-card" role="listitem">
              <div className="fy-tool-icon" aria-hidden>🖼️</div>
              <h3>AI Thumbnail Generator</h3>
              <p>
                A thumbnail is the single most important factor in click-through rate. Scenith lets you
                generate photorealistic, cinematic, or illustrated thumbnails using 7 state-of-the-art models:
                GPT Image 1, Imagen 4, FLUX 1.1 Pro, Grok Aurora, and more. High-res PNG with no watermarks.
                Nail your CTR and watch your impressions convert.
              </p>
              <ul className="fy-tool-feature-list" aria-label="Image generator features">
                <li>GPT Image 1, Imagen 4, FLUX, Grok Aurora, Stability AI</li>
                <li>8 style presets: Realistic, Anime, 3D, Fantasy, Sci-Fi…</li>
                <li>Square, Portrait, Landscape aspect ratios</li>
                <li>Image-to-Image for iterating on existing thumbnails</li>
                <li>High-res PNG download, no watermarks</li>
              </ul>
              <div style={{ marginTop: 16 }}>
                <Link href={CTAImageLink} style={{ fontSize: 13, color: '#ffd166', fontWeight: 700, textDecoration: 'none' }}>
                  → Try AI Thumbnail Generator Free
                </Link>
              </div>
            </article>

            <article className="fy-tool-card" role="listitem">
              <div className="fy-tool-icon" aria-hidden>🎬</div>
              <h3>AI Video B-Roll Generator</h3>
              <p>
                Nothing makes a faceless channel look expensive like cinematic b-roll footage. Scenith generates
                5–10 second clips using the most advanced models in 2026: Kling 2.6 Pro, Veo 3.1, Wan 2.5, and
                Grok Imagine (which includes AI audio). Generate 8–10 clips per video, cut them over your
                voiceover, and ship a 10-minute video that looks like it cost $5,000 to produce.
              </p>
              <ul className="fy-tool-feature-list" aria-label="Video generator features">
                <li>Kling 2.6 Pro, Veo 3.1, Wan 2.5 HD, Grok Imagine</li>
                <li>Up to 1080p, 5–10 second clips per generation</li>
                <li>Text-to-video AND image-to-video (animate your thumbnail)</li>
                <li>16:9, 9:16, 1:1 aspect ratios</li>
                <li>MP4 download, full commercial rights</li>
              </ul>
              <div style={{ marginTop: 16 }}>
                <Link href={CTAVideoLink} style={{ fontSize: 13, color: '#ff6b6b', fontWeight: 700, textDecoration: 'none' }}>
                  → Try AI Video Generator Free
                </Link>
              </div>
            </article>
          </div>
        </section>

        <div className="fy-divider" role="separator" />

        {/* ══════════════════════════════
            CONTENT CALENDAR
        ══════════════════════════════ */}
        <section className="fy-calendar-section" aria-labelledby="calendar-heading">
          <div className="fy-wrap">
            <div className="fy-section-label">Weekly Workflow</div>
            <h2 className="fy-section-title" id="calendar-heading">
              7-Day AI Content Calendar for a<br />
              <span className="fy-grad">Faceless YouTube Channel</span>
            </h2>
            <p className="fy-section-sub">
              This is a realistic week of production using Scenith for a creator publishing 3–4 videos per week
              plus 2–3 YouTube Shorts. Total production time: 3–5 hours per week, mostly spent writing scripts.
              The AI does everything else.
            </p>

            <div className="fy-calendar-table-wrap">
              <table className="fy-calendar-table">
                <thead>
                  <tr>
                    <th scope="col">Day</th>
                    <th scope="col">Asset Type</th>
                    <th scope="col">What to Generate</th>
                    <th scope="col">Best Model</th>
                    <th scope="col">Est. Time</th>
                  </tr>
                </thead>
                <tbody>
                  {CONTENT_CALENDAR.map((row, i) => (
                    <tr key={i}>
                      <td>{row.day}</td>
                      <td>
                        <span className={`fy-td-badge ${row.type}`}>
                          {row.type === "voice" ? "🎙️ Voice" : row.type === "image" ? "🖼️ Image" : "🎬 Video"}
                        </span>
                      </td>
                      <td>{row.asset}</td>
                      <td>{row.model}</td>
                      <td>{row.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="fy-inline-cta" style={{ marginTop: 32 }}>
              <div className="fy-inline-cta-text">
                <strong>Generate all of this from one tab.</strong>
                <span>Voice → Image → Video. No account switching. No extra subscriptions.</span>
              </div>
              <Link href={CTALink} className="fy-inline-cta-btn">
                Open AI Creator →
              </Link>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════
            PROMPT EXAMPLES
        ══════════════════════════════ */}
        <section className="fy-section" aria-labelledby="prompts-heading">
          <div className="fy-section-label">Real Prompt Examples</div>
          <h2 className="fy-section-title" id="prompts-heading">
            AI Prompts That <span className="fy-grad">Actually Work</span><br />
            for Faceless YouTube Channels
          </h2>
          <p className="fy-section-sub">
            Copy these directly into Scenith and hit generate. These are the kind of prompts that produce
            professional-grade output — used by active faceless creators in 2026.
          </p>

          <div className="fy-prompts-grid" role="list">
            {PROMPTS.map((p, i) => (
              <div key={i} className="fy-prompt-card" role="listitem">
                <div className={`fy-prompt-type ${p.type}`}>
                  {p.type === "voice" ? "🎙️ Voice Prompt" : p.type === "image" ? "🖼️ Image Prompt" : "🎬 Video Prompt"}
                </div>
                <p className="fy-prompt-text">&ldquo;{p.text}&rdquo;</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 32 }}>
            <Link href={CTALink} className="fy-cta-primary" style={{ display: "inline-flex" }}>
              🚀 Try These Prompts Now <span className="fy-cta-arrow">→</span>
            </Link>
          </div>
        </section>

        <div className="fy-divider" role="separator" />

        {/* ══════════════════════════════
            MONETIZATION
        ══════════════════════════════ */}
        <section className="fy-section" aria-labelledby="monetization-heading">
          <div className="fy-section-label">Revenue Streams</div>
          <h2 className="fy-section-title" id="monetization-heading">
            How Faceless YouTube Channels<br />
            <span className="fy-grad">Actually Make Money</span> in 2026
          </h2>
          <p className="fy-section-sub">
            YouTube AdSense is just the beginning. Faceless channels that hit 50K+ subscribers typically have
            5–6 active income streams. Here&apos;s the full playbook — from day one to full-time income.
          </p>

          <div className="fy-mono-grid" role="list">
            {MONETIZATION.map((m) => (
              <div key={m.title} className="fy-mono-card" role="listitem">
                <div className="fy-mono-icon" aria-hidden>{m.icon}</div>
                <div className="fy-mono-body">
                  <h3>{m.title}</h3>
                  <p>{m.desc}</p>
                  <span className="fy-earnings">{m.earnings}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Earnings table */}
          <div style={{ marginTop: 48 }}>
            <h3 style={{ fontFamily: "var(--fy-font-display)", fontSize: 20, fontWeight: 700, color: "var(--fy-text)", marginBottom: 8 }}>
              Realistic Earnings Timeline — Faceless YouTube Channel
            </h3>
            <p style={{ fontSize: 14, color: "var(--fy-text-2)", marginBottom: 8, lineHeight: 1.6 }}>
              These estimates are based on a mixed-niche channel publishing 3–4 videos per week consistently.
              Finance and AI channels trend toward the upper end; entertainment and general content toward the lower.
            </p>
            <table className="fy-earnings-table">
              <thead>
                <tr>
                  <th scope="col">Channel Stage</th>
                  <th scope="col">Est. Monthly Revenue</th>
                  <th scope="col">Strategy Focus</th>
                  <th scope="col">Approx. Timeline</th>
                </tr>
              </thead>
              <tbody>
                {EARNINGS_DATA.map((row) => (
                  <tr key={row.stage}>
                    <td>{row.stage}</td>
                    <td className="fy-green-val">{row.monthly}</td>
                    <td>{row.tips}</td>
                    <td>{row.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ══════════════════════════════
            COMPARISON
        ══════════════════════════════ */}
        <section className="fy-section" aria-labelledby="comparison-heading">
          <div className="fy-section-label">Why Scenith</div>
          <h2 className="fy-section-title" id="comparison-heading">
            Scenith vs Using Separate Tools<br />
            <span className="fy-grad">for Your Faceless Channel</span>
          </h2>
          <p className="fy-section-sub">
            Most faceless YouTube creators start with a patchwork of 4–6 different tools. Here&apos;s what that
            looks like vs. a single platform approach.
          </p>

          <div className="fy-compare-grid" role="region" aria-label="Comparison between separate tools and Scenith">
            <div className="fy-compare-col fy-compare-bad" aria-labelledby="bad-col-head">
              <h3 id="bad-col-head">❌ Typical Faceless Creator Setup</h3>
              <ul className="fy-compare-list">
                <li>ElevenLabs for voice ($11/mo) + Murf for backup ($19/mo)</li>
                <li>Midjourney for thumbnails ($10/mo) + Canva Pro ($13/mo)</li>
                <li>Runway or Pika for video ($15–$35/mo)</li>
                <li>Separate logins, separate billing, separate credit systems</li>
                <li>Uploading files between tools constantly</li>
                <li>Total cost: $60–$100+/month</li>
                <li>Workflow friction kills consistency, channel suffers</li>
                <li>No unified history or cross-tool workflow</li>
              </ul>
            </div>
            <div className="fy-compare-col fy-compare-good" aria-labelledby="good-col-head">
              <h3 id="good-col-head">✅ Scenith — One Tool for Everything</h3>
              <ul className="fy-compare-list">
                <li>Voice, image, and video generation under one login</li>
                <li>Single credit balance covers all three tools</li>
                <li>Creator Lite plan: $9/mo with 300 credits</li>
                <li>7 image models: GPT, Imagen 4, FLUX, Grok, Stability</li>
                <li>6 video models: Kling 2.6, Veo 3.1, Wan 2.5, Grok Imagine</li>
                <li>Animate your thumbnail into a video intro (1 click)</li>
                <li>History log of all your generations for reuse</li>
                <li>Full commercial rights on all content — no asterisks</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════
            SECOND INLINE CTA
        ══════════════════════════════ */}
        <div className="fy-wrap">
          <div className="fy-inline-cta">
            <div className="fy-inline-cta-text">
              <strong>Stop juggling tools. Your whole channel lives here.</strong>
              <span>50 free credits to start. No credit card. Generate your first voiceover in 30 seconds.</span>
            </div>
            <Link href={CTALink} className="fy-inline-cta-btn">
              🎬 Start Free Now →
            </Link>
          </div>
        </div>

        {/* ══════════════════════════════
            AI DISCLOSURE & YOUTUBE POLICY
        ══════════════════════════════ */}
        <section className="fy-section" aria-labelledby="policy-heading">
          <div className="fy-section-label">Important Guidance</div>
          <h2 className="fy-section-title" id="policy-heading">
            YouTube&apos;s AI Content Policy<br />
            <span className="fy-grad">What You Need to Know in 2026</span>
          </h2>
          <p className="fy-section-sub">
            YouTube updated its AI content rules in 2024 and enforcement has increased throughout 2025–2026.
            Here&apos;s what every faceless AI channel needs to comply with.
          </p>

          <div className="fy-intro-grid">
            <div className="fy-intro-card">
              <span className="fy-intro-card-icon">📋</span>
              <h3>AI disclosure is required</h3>
              <p>
                When you upload a video that includes AI-generated or significantly AI-altered content —
                including AI voices, AI visuals, or AI-generated scripts — YouTube requires you to disclose
                this in the upload settings. Tick the &quot;Contains AI-generated content&quot; checkbox. Failure to
                disclose can result in video removal or channel strikes.
              </p>
            </div>
            <div className="fy-intro-card">
              <span className="fy-intro-card-icon">✅</span>
              <h3>AI content is still monetizable</h3>
              <p>
                AI-generated content does not automatically disqualify you from the YouTube Partner Program.
                Channels must still meet the standard YPP thresholds (1,000 subs + 4,000 watch hours) and
                comply with YouTube&apos;s content policies. Disclosed AI content that provides genuine value to
                viewers is treated the same as other content.
              </p>
            </div>
            <div className="fy-intro-card">
              <span className="fy-intro-card-icon">🚫</span>
              <h3>What is not allowed</h3>
              <p>
                YouTube prohibits AI-generated content that: depicts real people saying or doing things they
                didn&apos;t do, spreads misinformation about real events, or deceives viewers about its AI origins.
                Mass-produced low-effort &quot;AI spam&quot; channels also risk demonetization under YouTube&apos;s spam
                policies. Quality and original perspective matter.
              </p>
            </div>
            <div className="fy-intro-card">
              <span className="fy-intro-card-icon">🛡️</span>
              <h3>Commercial rights with Scenith</h3>
              <p>
                All content generated on Scenith — voiceovers, images, and video clips — comes with full
                commercial rights. You own what you generate. There are no licensing restrictions on using
                Scenith-generated content in monetized YouTube videos, paid ads, or any commercial project.
                No attribution required.
              </p>
            </div>
          </div>
        </section>

        <div className="fy-divider" role="separator" />

        {/* ══════════════════════════════
            FAQ
        ══════════════════════════════ */}
        <section className="fy-section" aria-labelledby="faq-heading">
          <div className="fy-section-label">FAQ</div>
          <h2 className="fy-section-title" id="faq-heading">
            Faceless YouTube Channel AI Generator —<br />
            <span className="fy-grad">Frequently Asked Questions</span>
          </h2>

          <div className="fy-faq-list" role="list">
            {[
              {
                q: "Can I really start a faceless YouTube channel using only AI?",
                a: "Yes — and thousands of creators are doing it in 2026. With Scenith, you can generate an AI voiceover, an AI thumbnail image, and AI cinematic b-roll video clips from text prompts alone. You then combine them in a free editor like CapCut or DaVinci Resolve. No camera, no microphone, no design skills required. The script is the only part you write — everything else is generated in seconds.",
              },
              {
                q: "What is the best AI voice for a faceless YouTube channel?",
                a: "It depends on your niche. For finance and investing channels, OpenAI's TTS voices (especially 'onyx' and 'nova') sound authoritative and polished. For true crime narration, Google's deep male voices with a slightly slower speed (0.9x) work brilliantly. For meditation and sleep content, Azure Neural TTS voices at 0.75–0.85x speed produce an almost ASMR-level calm. Scenith gives you all three providers to test.",
              },
              {
                q: "How many AI video clips do I need per YouTube video?",
                a: "For a 10-minute video, you typically need 12–20 b-roll clips to cover the narration with interesting visuals. With Scenith generating 5–10 second clips, plan for 15–25 generations per video. At Scenith's Creator Lite plan (300cr/month), this translates to roughly 6–8 full videos per month. That's more than enough for a 2x/week publishing schedule.",
              },
              {
                q: "How long does it take to produce one faceless YouTube video with AI?",
                a: "Script writing: 30–60 minutes (or 10 minutes with ChatGPT). Voiceover generation: 3 seconds. Thumbnail: 20–30 seconds. B-roll clips (15 clips): 15–30 minutes total. Video assembly in CapCut: 45–90 minutes. Total: 2–3 hours for a 10-minute video. Experienced creators who batch-produce content can get this down to 90 minutes per video.",
              },
              {
                q: "Which YouTube niches work best with AI-only content?",
                a: "The best-performing niches for pure AI content in 2026 are: (1) AI & Tech explainers — highest growth, huge audience; (2) Finance & investing — highest CPM ($15–$45); (3) History documentaries — evergreen, highly searchable; (4) True crime narration — best watch time retention; (5) Space & science — cinematic AI visuals fit perfectly; (6) Psychology & mindset — strong evergreen search volume.",
              },
              {
                q: "Can AI-generated YouTube content get monetized?",
                a: "Yes. AI-generated content can be monetized through YouTube Partner Program provided it meets the standard thresholds (1,000 subscribers + 4,000 watch hours or 10M Shorts views) and complies with YouTube's content policies, including disclosing AI-generated content in upload settings. Many active monetized channels in 2026 are fully AI-produced.",
              },
              {
                q: "What is the cheapest way to run a faceless YouTube channel with AI?",
                a: "Scenith's free tier gives you 50 credits on signup — enough to test voice, image, and video generation. The Creator Lite plan at $9/month gives you 300 credits, covering roughly 6–8 full video packages per month (voice + thumbnail + b-roll clips). This replaces $60–$100+/month in separate subscriptions.",
              },
              {
                q: "Do I need to disclose AI content on YouTube?",
                a: "Yes. Since 2024, YouTube requires creators to disclose when their content includes AI-generated or significantly AI-altered visuals, voices, or audio. This is done via a checkbox in YouTube Studio upload settings. Failure to disclose can result in video removal. Disclosing does not prevent monetization or reduce algorithmic reach.",
              },
              {
                q: "How do I make my AI faceless channel look different from others?",
                a: "The biggest differentiator is your niche angle, your voice choice, and your thumbnail style — these are the three things viewers actually see before clicking. Develop a visual identity (consistent thumbnail layout, color scheme), find a voice that matches your channel's tone, and write scripts with an original point of view. The AI produces the assets — your creative direction is what makes the channel unique.",
              },
              {
                q: "Is Scenith better than ElevenLabs + Midjourney + Runway separately?",
                a: "For faceless YouTube creators, yes — for three reasons: (1) one login, one credit balance, no workflow friction; (2) price: $9/mo vs $60–$100+/mo across separate tools; (3) the 'Make Video from Image' feature lets you animate your thumbnail into your video intro in one click — something no other single tool offers.",
              },
            ].map((item, i) => (
              <details key={i} className="fy-faq-item" role="listitem">
                <summary>{item.q}</summary>
                <div className="fy-faq-body">{item.a}</div>
              </details>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════
            BOTTOM CTA
        ══════════════════════════════ */}
        <section className="fy-bottom-cta" aria-labelledby="final-cta-heading">
          <h2 id="final-cta-heading">
            Your Faceless Channel Starts<br />
            <span style={{ background: "linear-gradient(135deg, #ff4040, #ffd166)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Right Here. Right Now.
            </span>
          </h2>
          <p>
            50 free credits. No credit card. Generate a voiceover, a thumbnail, and a cinematic video clip —
            all in the next 3 minutes. Your first faceless YouTube video is closer than you think.
          </p>
          <Link href={CTALink} className="fy-cta-big-btn" style={{ display: "inline-flex" }} aria-label="Start your faceless YouTube channel with Scenith AI Content Creator">
            🎬 Start Creating for Free →
          </Link>
          <div style={{ display: "flex", justifyContent: "center", gap: 24, marginTop: 32, flexWrap: "wrap" }}>
            {[
              { href: CTAVoiceLink, label: "🎙️ AI Voice Generator" },
              { href: CTAImageLink, label: "🖼️ AI Thumbnail Generator" },
              { href: CTAVideoLink, label: "🎬 AI Video Generator" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontSize: 13,
                  color: "var(--fy-text-2)",
                  textDecoration: "none",
                  borderBottom: "1px solid rgba(255,255,255,0.12)",
                  paddingBottom: 2,
                  transition: "color 0.2s",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}