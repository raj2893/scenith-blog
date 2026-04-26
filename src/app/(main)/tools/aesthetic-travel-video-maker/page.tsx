import type { Metadata } from "next";
import Link from "next/link";
import "./aesthetic-travel-video-maker.css";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Aesthetic Travel Video Maker – Free AI Cinematic Travel Videos | Scenith",
  description:
    "Create stunning aesthetic travel videos with AI — cinematic drone shots, golden-hour reels, wanderlust clips for Instagram, YouTube & TikTok. No editing skills needed. Free to try.",
  keywords: [
    "aesthetic travel video maker",
    "AI travel video generator",
    "cinematic travel video maker free",
    "travel reel maker",
    "wanderlust video creator",
    "AI video from travel photos",
    "travel video maker online",
    "travel reel generator AI",
    "aesthetic video maker free",
    "travel content creator tool",
    "instagram travel reel maker",
    "youtube travel video maker ai",
    "cinematic travel clips generator",
    "travel vlog maker ai",
    "aesthetic travel content 2026",
  ],
  alternates: {
    canonical: "https://scenith.in/tools/aesthetic-travel-video-maker",
  },
  openGraph: {
    title: "Aesthetic Travel Video Maker – AI Cinematic Clips in Seconds",
    description:
      "Turn your travel ideas into breathtaking AI video clips. Drone shots, sunsets, jungle trails — generated in seconds. Free to try, no editing software needed.",
    url: "https://scenith.in/tools/aesthetic-travel-video-maker",
    siteName: "Scenith",
    type: "website",
    images: [
      {
        url: "https://scenith.in/og/aesthetic-travel-video-maker.jpg",
        width: 1200,
        height: 630,
        alt: "Aesthetic Travel Video Maker by Scenith",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aesthetic Travel Video Maker – AI Cinematic Travel Videos",
    description:
      "Generate cinematic travel videos with AI — drone shots, golden hour, reels. Free, no editing skills needed.",
  },
};

// ─── Structured Data ──────────────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Aesthetic Travel Video Maker",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Web",
  url: "https://scenith.in/tools/aesthetic-travel-video-maker",
  description:
    "AI-powered aesthetic travel video maker. Create cinematic travel clips, drone-style reels, and wanderlust videos from text prompts in seconds.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Free to start with 50 credits. Paid plans from $1.",
  },
  creator: {
    "@type": "Organization",
    name: "Scenith",
    url: "https://scenith.in",
  },
  featureList: [
    "Text-to-travel-video generation",
    "Image-to-video animation",
    "Cinematic drone-style shots",
    "Multiple AI models (Kling, Veo, Wan, Grok)",
    "16:9, 9:16, 1:1 aspect ratios",
    "Up to 1080p resolution",
    "MP4 download with commercial rights",
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can I make aesthetic travel videos with AI for free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Scenith gives you 50 free credits on signup — no credit card needed. Each 5-second travel video costs 46–92 credits depending on model and resolution.",
      },
    },
    {
      "@type": "Question",
      name: "What makes an aesthetic travel video?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Aesthetic travel videos typically feature cinematic drone shots, golden-hour lighting, slow-motion reveals, bioluminescent coasts, misty mountain trails, and colour-graded atmospheres. With AI, you can describe any of these scenes and generate them instantly.",
      },
    },
    {
      "@type": "Question",
      name: "Which AI model is best for travel video generation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kling 2.6 Pro and Veo 3.1 produce the most cinematic travel footage with natural motion, smooth camera movement simulation, and photorealistic lighting. Wan 2.5 is a great budget option at 480p–1080p.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use AI travel videos for Instagram Reels and TikTok?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Generate in 9:16 portrait format for Reels and TikTok, or 16:9 for YouTube. All generated videos come with full commercial rights — you own what you create.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to generate a travel video with AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Typically 30–120 seconds depending on the AI model, duration (5s or 10s), and resolution. Wan 2.5 is fastest; Veo 3.1 takes longer but delivers cinema-grade quality.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need travel footage or photos to use this?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The text-to-video mode generates travel clips from your written description alone. You can also upload a reference photo (e.g. a travel photo) and the AI animates it into a video clip.",
      },
    },
  ],
};

// ─── Prompt ideas ─────────────────────────────────────────────────────────────

const PROMPT_IDEAS = [
  {
    emoji: "🏔️",
    title: "Alpine Dawn",
    prompt:
      "Cinematic slow-motion aerial shot over snow-capped Alps at sunrise, golden light breaking through clouds, fog in the valley below, ultra-detailed 4K",
  },
  {
    emoji: "🌊",
    title: "Bali Coastline",
    prompt:
      "Drone flying low over turquoise Balinese ocean, waves crashing on black sand beach, tropical palms swaying, golden sunset, cinematic wide angle",
  },
  {
    emoji: "🏜️",
    title: "Sahara Dunes",
    prompt:
      "Vast Sahara desert at dusk, rolling sand dunes casting dramatic shadows, single silhouette figure on the ridge, deep orange and purple sky, slow cinematic push-in",
  },
  {
    emoji: "🌸",
    title: "Kyoto Spring",
    prompt:
      "Cherry blossom petals drifting slowly over a stone bridge in Kyoto, pink and white bokeh, soft diffused morning light, slow motion, dreamy cinematic",
  },
  {
    emoji: "🌃",
    title: "Tokyo Night",
    prompt:
      "Aerial cinematic descent through neon-lit Tokyo streets at midnight, rain-soaked roads reflecting signs, fog between skyscrapers, slow and dramatic",
  },
  {
    emoji: "🧊",
    title: "Iceland Aurora",
    prompt:
      "Northern lights exploding in green and purple over a frozen Icelandic lake, reflections on ice, snow-covered mountains silhouette, magical and ethereal",
  },
  {
    emoji: "🚂",
    title: "Mountain Rail",
    prompt:
      "Vintage train winding through Swiss mountain valleys, autumn foliage in deep orange and red, waterfalls cascading from cliffs, cinematic tracking shot",
  },
  {
    emoji: "🐘",
    title: "African Safari",
    prompt:
      "Herd of elephants crossing a vast golden savannah at sunset, dramatic backlit silhouettes, dust rising, acacia trees on the horizon, National Geographic style",
  },
  {
    emoji: "🌺",
    title: "Tropical Rainforest",
    prompt:
      "Drone descending through canopy of Amazon rainforest, shafts of sunlight through dense green leaves, mist on the forest floor, slow and atmospheric",
  },
  {
    emoji: "⛵",
    title: "Greek Islands",
    prompt:
      "Aerial view of Santorini at golden hour, white cubic houses with blue domes cascading down clifftop, Aegean sea glittering, slow smooth drone pan",
  },
  {
    emoji: "🌋",
    title: "Volcanic Iceland",
    prompt:
      "Active volcano erupting at night in Iceland, lava rivers glowing orange against black landscape, steam and ash cloud, slow cinematic wide shot",
  },
  {
    emoji: "🦋",
    title: "Jungle Waterfall",
    prompt:
      "Hidden waterfall deep in a tropical jungle, turquoise pool below, butterflies and mist, dappled golden light, slow motion splash detail",
  },
];

const DESTINATION_TYPES = [
  { icon: "🏔️", name: "Mountain & Alpine" },
  { icon: "🏖️", name: "Beach & Coastal" },
  { icon: "🏙️", name: "Urban & City" },
  { icon: "🌿", name: "Jungle & Rainforest" },
  { icon: "🏜️", name: "Desert & Arid" },
  { icon: "❄️", name: "Arctic & Snow" },
  { icon: "🌸", name: "Countryside & Rural" },
  { icon: "🛕", name: "Cultural & Heritage" },
];

const AI_MODELS = [
  {
    name: "Kling 2.6 Pro",
    tag: "Best Quality",
    tagColor: "#7c3aed",
    desc: "Cinema-grade travel footage with the most natural camera motion simulation. Best for luxury travel, golden-hour shots, and hero content.",
    specs: "Up to 1080p · 5s or 10s · Audio support",
    best: ["Luxury travel", "Cinematic hero shots", "Slow motion reveals"],
  },
  {
    name: "Veo 3.1 (Google)",
    tag: "Most Photorealistic",
    tagColor: "#0f766e",
    desc: "Google's flagship video model. Produces the most photorealistic travel content — indistinguishable from real drone footage at its best.",
    specs: "Up to 1080p · 4s or 8s · Audio support",
    best: ["Drone-style aerials", "Documentary feel", "Natural landscapes"],
  },
  {
    name: "Wan 2.5",
    tag: "Best Value",
    tagColor: "#b45309",
    desc: "High quality at the best credit cost. Ideal for rapid iteration, social content, and building a library of travel clips quickly.",
    specs: "480p – 1080p · 5s or 10s · Fast generation",
    best: ["Social media content", "Rapid prototyping", "Budget creators"],
  },
  {
    name: "Grok Imagine",
    tag: "Includes Audio 🎵",
    tagColor: "#be185d",
    desc: "xAI's model that generates ambient soundscapes alongside your travel video — wind, ocean waves, forest sounds included automatically.",
    specs: "Up to 720p · 5s or 10s · Built-in audio",
    best: ["Immersive experiences", "Instagram Reels with sound", "Storytelling"],
  },
];

// ─── Page Component ────────────────────────────────────────────────────────────

export default function AestheticTravelVideoMakerPage() {
  const CTA_URL =
    "https://scenith.in/create-ai-content?tab=video&utm_source=tools&utm_medium=travel-video&utm_campaign=aesthetic-travel-video-maker";

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

      <div className="atvm-root">
        {/* ─── HERO ────────────────────────────────────────────────────── */}
        <header className="atvm-hero">
          <div className="atvm-hero-film-grain" aria-hidden="true" />
          <div className="atvm-hero-overlay" aria-hidden="true" />

          <div className="atvm-hero-inner">
            <div className="atvm-badge-row">
              <span className="atvm-badge atvm-badge--new">New in 2026</span>
              <span className="atvm-badge atvm-badge--free">Free to Start</span>
            </div>

            <h1 className="atvm-hero-h1">
              <span className="atvm-hero-h1-line1">Aesthetic Travel</span>
              <span className="atvm-hero-h1-line2">Video Maker</span>
              <span className="atvm-hero-h1-sub">powered by AI</span>
            </h1>

            <p className="atvm-hero-tagline">
              Generate cinematic travel clips from a single sentence.
              <br />
              Drone shots, golden-hour reels, wanderlust content — no camera required.
            </p>

            <a href={CTA_URL} className="atvm-hero-cta">
              <span className="atvm-hero-cta-icon">🎬</span>
              <span>
                <strong>Create Your Travel Video — Free</strong>
                <small>50 credits on signup · No card required</small>
              </span>
              <span className="atvm-hero-cta-arrow">→</span>
            </a>

            <div className="atvm-hero-stats">
              <div className="atvm-stat">
                <strong>6</strong>
                <span>AI models</span>
              </div>
              <div className="atvm-stat-divider" />
              <div className="atvm-stat">
                <strong>10s</strong>
                <span>max clip length</span>
              </div>
              <div className="atvm-stat-divider" />
              <div className="atvm-stat">
                <strong>1080p</strong>
                <span>max resolution</span>
              </div>
              <div className="atvm-stat-divider" />
              <div className="atvm-stat">
                <strong>30s</strong>
                <span>avg generation time</span>
              </div>
            </div>
          </div>

          {/* Floating destination cards */}
          <div className="atvm-float-card atvm-float-card--1" aria-hidden="true">
            <span>🏔️</span> Alps at Sunrise
          </div>
          <div className="atvm-float-card atvm-float-card--2" aria-hidden="true">
            <span>🌊</span> Bali Coastline
          </div>
          <div className="atvm-float-card atvm-float-card--3" aria-hidden="true">
            <span>❄️</span> Aurora Iceland
          </div>
        </header>

        {/* ─── PROMPT SHOWCASE ──────────────────────────────────────────── */}
        <section className="atvm-prompts-section">
          <div className="atvm-section-inner">
            <div className="atvm-section-label">✦ Prompt Inspiration</div>
            <h2 className="atvm-section-h2">
              One sentence. One cinematic travel video.
            </h2>
            <p className="atvm-section-p">
              Copy any prompt below, paste it in the AI video maker, and watch
              it come alive in under two minutes.
            </p>

            <div className="atvm-prompts-grid">
              {PROMPT_IDEAS.map((idea, i) => (
                <a
                  key={i}
                  href={`${CTA_URL}&prompt=${encodeURIComponent(idea.prompt)}`}
                  className="atvm-prompt-card"
                >
                  <span className="atvm-prompt-emoji">{idea.emoji}</span>
                  <div className="atvm-prompt-body">
                    <strong className="atvm-prompt-title">{idea.title}</strong>
                    <p className="atvm-prompt-text">{idea.prompt}</p>
                  </div>
                  <span className="atvm-prompt-cta">Try this →</span>
                </a>
              ))}
            </div>

            <div className="atvm-prompts-cta-row">
              <a href={CTA_URL} className="atvm-btn-primary">
                🎬 Open AI Travel Video Maker
              </a>
            </div>
          </div>
        </section>

        {/* ─── HOW IT WORKS ─────────────────────────────────────────────── */}
        <section className="atvm-how-section">
          <div className="atvm-section-inner">
            <div className="atvm-section-label">✦ How It Works</div>
            <h2 className="atvm-section-h2">
              From imagination to cinematic video in 3 steps
            </h2>

            <div className="atvm-steps">
              <div className="atvm-step">
                <div className="atvm-step-num">01</div>
                <div className="atvm-step-body">
                  <h3>Describe your travel scene</h3>
                  <p>
                    Type a prompt like{" "}
                    <em>
                      "Drone flying over turquoise Maldives lagoon at golden
                      hour, slow cinematic push-in"
                    </em>
                    . The more specific the atmosphere — lighting, motion,
                    mood — the more cinematic the result. Use one of our 12+
                    travel prompt templates or craft your own.
                  </p>
                </div>
              </div>
              <div className="atvm-step">
                <div className="atvm-step-num">02</div>
                <div className="atvm-step-body">
                  <h3>Pick your AI model &amp; settings</h3>
                  <p>
                    Choose from Kling 2.6 Pro, Veo 3.1, Wan 2.5, or Grok
                    Imagine. Set your duration (5s or 10s), aspect ratio
                    (16:9 for YouTube, 9:16 for Reels, 1:1 for Instagram),
                    and resolution up to 1080p. You can also upload a travel
                    photo and animate it into a video using Image-to-Video mode.
                  </p>
                </div>
              </div>
              <div className="atvm-step">
                <div className="atvm-step-num">03</div>
                <div className="atvm-step-body">
                  <h3>Generate, download, publish</h3>
                  <p>
                    Hit generate. Your cinematic travel video is ready in
                    30–120 seconds depending on model. Download the MP4 file
                    instantly — full commercial rights, no watermark. Post
                    it to Instagram Reels, YouTube Shorts, TikTok, or your
                    travel blog.
                  </p>
                </div>
              </div>
            </div>

            <div className="atvm-how-cta">
              <a href={CTA_URL} className="atvm-btn-primary">
                Start Creating — It&apos;s Free →
              </a>
            </div>
          </div>
        </section>

        {/* ─── DESTINATION TYPES ────────────────────────────────────────── */}
        <section className="atvm-dest-section">
          <div className="atvm-section-inner">
            <div className="atvm-section-label">✦ Every Destination Type</div>
            <h2 className="atvm-section-h2">
              Whatever your travel style, AI has it covered
            </h2>
            <p className="atvm-section-p">
              From arctic tundra to tropical coastlines — describe any
              destination in the world and generate a cinematic clip of it,
              even if you&apos;ve never been there.
            </p>

            <div className="atvm-dest-grid">
              {DESTINATION_TYPES.map((d, i) => (
                <a key={i} href={CTA_URL} className="atvm-dest-card">
                  <span className="atvm-dest-icon">{d.icon}</span>
                  <span className="atvm-dest-name">{d.name}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ─── AI MODELS DEEP DIVE ──────────────────────────────────────── */}
        <section className="atvm-models-section">
          <div className="atvm-section-inner">
            <div className="atvm-section-label">✦ AI Models</div>
            <h2 className="atvm-section-h2">
              Four world-class AI models, one travel video tool
            </h2>
            <p className="atvm-section-p">
              Every AI video model has its own visual signature. Here&apos;s how to
              choose the right one for your aesthetic travel content.
            </p>

            <div className="atvm-models-grid">
              {AI_MODELS.map((m, i) => (
                <div key={i} className="atvm-model-card">
                  <div className="atvm-model-header">
                    <span className="atvm-model-name">{m.name}</span>
                    <span
                      className="atvm-model-tag"
                      style={{ background: m.tagColor + "22", color: m.tagColor, borderColor: m.tagColor + "44" }}
                    >
                      {m.tag}
                    </span>
                  </div>
                  <p className="atvm-model-desc">{m.desc}</p>
                  <div className="atvm-model-specs">{m.specs}</div>
                  <div className="atvm-model-best-label">Best for:</div>
                  <div className="atvm-model-best-tags">
                    {m.best.map((b, j) => (
                      <span key={j} className="atvm-model-best-tag">
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="atvm-models-cta">
              <a href={CTA_URL} className="atvm-btn-primary">
                🎬 Try All Models — Free
              </a>
              <p className="atvm-models-cta-sub">
                Switch between models in one click · 50 free credits to start
              </p>
            </div>
          </div>
        </section>

        {/* ─── IMAGE TO VIDEO ───────────────────────────────────────────── */}
        <section className="atvm-i2v-section">
          <div className="atvm-section-inner atvm-i2v-inner">
            <div className="atvm-i2v-text">
              <div className="atvm-section-label">✦ Image to Video</div>
              <h2 className="atvm-section-h2 atvm-section-h2--left">
                Already have a travel photo?
                <br />
                Animate it.
              </h2>
              <p className="atvm-section-p atvm-section-p--left">
                Upload any travel photo — a landscape, cityscape, or beach
                shot — and the AI will animate it into a flowing cinematic
                video clip. Watch the leaves sway, the ocean breathe, the
                clouds drift.
              </p>
              <ul className="atvm-i2v-list">
                <li>
                  <span>✓</span> Works with your own photos from any camera or
                  phone
                </li>
                <li>
                  <span>✓</span> Add a prompt to guide the animation direction
                </li>
                <li>
                  <span>✓</span> Choose 5s or 10s animation duration
                </li>
                <li>
                  <span>✓</span> Pick landscape or portrait format for Reels
                </li>
                <li>
                  <span>✓</span> Download MP4 with full rights
                </li>
              </ul>
              <a href={`${CTA_URL}&mode=image`} className="atvm-btn-primary">
                Animate My Travel Photo →
              </a>
            </div>
            <div className="atvm-i2v-visual">
              <div className="atvm-i2v-card atvm-i2v-card--before">
                <div className="atvm-i2v-card-label">📷 Your Photo</div>
                <div className="atvm-i2v-mockimg atvm-i2v-mockimg--still">
                  <div className="atvm-i2v-shimmer" />
                  <span>🏔️</span>
                </div>
              </div>
              <div className="atvm-i2v-arrow">→</div>
              <div className="atvm-i2v-card atvm-i2v-card--after">
                <div className="atvm-i2v-card-label">🎬 AI Video</div>
                <div className="atvm-i2v-mockimg atvm-i2v-mockimg--moving">
                  <div className="atvm-i2v-pulse" />
                  <span>🏔️</span>
                  <div className="atvm-i2v-play">▶</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── USE CASES ────────────────────────────────────────────────── */}
        <section className="atvm-usecases-section">
          <div className="atvm-section-inner">
            <div className="atvm-section-label">✦ Who It&apos;s For</div>
            <h2 className="atvm-section-h2">
              Built for every kind of travel creator
            </h2>

            <div className="atvm-usecases-grid">
              <div className="atvm-usecase-card">
                <span className="atvm-usecase-icon">📱</span>
                <h3>Instagram &amp; TikTok Creators</h3>
                <p>
                  Generate 9:16 cinematic travel Reels without leaving home.
                  Create consistent aesthetic content calendars — aurora chasing,
                  coastal sunrise, mountain fog — all from your desk. Post daily
                  without burning out from constant travel production.
                </p>
                <div className="atvm-usecase-tip">
                  💡 Use 9:16 format + Grok Imagine for Reels with ambient sound
                </div>
              </div>

              <div className="atvm-usecase-card">
                <span className="atvm-usecase-icon">🎥</span>
                <h3>YouTube Travel Vloggers</h3>
                <p>
                  B-roll is the backbone of great travel vlogs. Use AI to
                  generate stunning cinematic filler clips for destinations you
                  didn&apos;t quite capture on camera — the perfect sunset you
                  missed, the aerial shot your drone couldn&apos;t reach, the
                  cinematic establishing shot for your edit.
                </p>
                <div className="atvm-usecase-tip">
                  💡 Kling 2.6 Pro in 16:9 at 1080p for YouTube B-roll
                </div>
              </div>

              <div className="atvm-usecase-card">
                <span className="atvm-usecase-icon">✈️</span>
                <h3>Travel Bloggers &amp; Writers</h3>
                <p>
                  Bring your destination guides to life with embedded video
                  content. A short cinematic clip of the place you&apos;re writing
                  about dramatically increases time-on-page, decreases bounce rate,
                  and makes your articles more shareable across social media.
                </p>
                <div className="atvm-usecase-tip">
                  💡 Embed 5s looping clips in blog posts for max engagement
                </div>
              </div>

              <div className="atvm-usecase-card">
                <span className="atvm-usecase-icon">🏨</span>
                <h3>Travel Brands &amp; Tourism</h3>
                <p>
                  Hotels, tour operators, and destination marketing organisations
                  can generate mood-setting video content for their ads, websites,
                  and social channels at a fraction of traditional production costs.
                  Full commercial rights on every video generated.
                </p>
                <div className="atvm-usecase-tip">
                  💡 Veo 3.1 for premium brand-quality destination footage
                </div>
              </div>

              <div className="atvm-usecase-card">
                <span className="atvm-usecase-icon">🎞️</span>
                <h3>Video Editors &amp; Motion Designers</h3>
                <p>
                  Use AI-generated travel clips as a starting point or moodboard
                  for client work. Generate reference footage for pitch decks,
                  client presentations, and concept videos — then refine with
                  your own edits and overlays.
                </p>
                <div className="atvm-usecase-tip">
                  💡 Generate multiple takes in Wan 2.5 to find the right vibe
                </div>
              </div>

              <div className="atvm-usecase-card">
                <span className="atvm-usecase-icon">🌍</span>
                <h3>Armchair Travellers</h3>
                <p>
                  You don&apos;t have to go there to see it. Generate cinematic
                  clips of destinations on your bucket list — the Norwegian fjords
                  in winter, the temples of Bagan at dawn, the Kerala backwaters
                  at sunset. Experience the world through AI-generated imagery.
                </p>
                <div className="atvm-usecase-tip">
                  💡 Try the prompt gallery — 12+ destination ideas ready to go
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── PROMPT WRITING GUIDE ────────────────────────────────────── */}
        <section className="atvm-guide-section">
          <div className="atvm-section-inner">
            <div className="atvm-section-label">✦ Prompt Writing Guide</div>
            <h2 className="atvm-section-h2">
              The anatomy of a great travel video prompt
            </h2>
            <p className="atvm-section-p">
              The quality of your AI travel video depends almost entirely on
              how well you describe the scene. Here&apos;s the exact formula used
              in cinematic AI video generation in 2026.
            </p>

            <div className="atvm-guide-formula">
              <div className="atvm-formula-part">
                <div className="atvm-formula-label">Camera Motion</div>
                <div className="atvm-formula-desc">
                  Drone aerial · Slow push-in · Tracking shot · Cinematic pan ·
                  Low angle · Overhead · Tilt reveal
                </div>
              </div>
              <div className="atvm-formula-plus">+</div>
              <div className="atvm-formula-part">
                <div className="atvm-formula-label">Subject &amp; Location</div>
                <div className="atvm-formula-desc">
                  Specific landmark or landscape · Geographic detail ·
                  Distinctive local element
                </div>
              </div>
              <div className="atvm-formula-plus">+</div>
              <div className="atvm-formula-part">
                <div className="atvm-formula-label">Time &amp; Light</div>
                <div className="atvm-formula-desc">
                  Golden hour · Blue hour · Midday haze · Dawn mist ·
                  Overcast silver · Midnight blue
                </div>
              </div>
              <div className="atvm-formula-plus">+</div>
              <div className="atvm-formula-part">
                <div className="atvm-formula-label">Mood &amp; Style</div>
                <div className="atvm-formula-desc">
                  Cinematic · Dreamy · Epic · Intimate · Documentary · Ethereal ·
                  Slow motion
                </div>
              </div>
            </div>

            <div className="atvm-guide-examples">
              <h3 className="atvm-guide-examples-h3">
                Good prompt vs Great prompt
              </h3>
              <div className="atvm-example-pair">
                <div className="atvm-example atvm-example--bad">
                  <div className="atvm-example-tag">❌ Basic</div>
                  <p>&quot;Beach sunset video&quot;</p>
                  <div className="atvm-example-note">
                    Too vague. Could generate anything.
                  </div>
                </div>
                <div className="atvm-example atvm-example--good">
                  <div className="atvm-example-tag">✅ Cinematic</div>
                  <p>
                    &quot;Low angle drone gliding over Maldives shallow lagoon at
                    golden hour, turquoise water glowing, slow rippling
                    reflections, soft warm light on horizon, dreamy and
                    cinematic&quot;
                  </p>
                  <div className="atvm-example-note">
                    Camera type, location, time, light, mood. Perfect.
                  </div>
                </div>
              </div>

              <div className="atvm-example-pair">
                <div className="atvm-example atvm-example--bad">
                  <div className="atvm-example-tag">❌ Basic</div>
                  <p>&quot;Mountain view&quot;</p>
                  <div className="atvm-example-note">
                    No context. Generic output.
                  </div>
                </div>
                <div className="atvm-example atvm-example--good">
                  <div className="atvm-example-tag">✅ Cinematic</div>
                  <p>
                    &quot;Aerial wide shot descending from storm clouds over Swiss
                    Alps at dawn, first light hitting snow-capped peaks in pale
                    gold, valley in blue shadow below, silent and majestic,
                    4K ultra-detailed&quot;
                  </p>
                  <div className="atvm-example-note">
                    Altitude, weather, lighting contrast, emotional quality.
                  </div>
                </div>
              </div>
            </div>

            <div className="atvm-guide-tips">
              <h3>Power words that elevate travel video prompts</h3>
              <div className="atvm-guide-tags">
                {[
                  "cinematic",
                  "slow motion",
                  "drone aerial",
                  "golden hour",
                  "ultra-detailed 4K",
                  "god rays",
                  "ethereal",
                  "low angle",
                  "tracking shot",
                  "bokeh",
                  "cinematic push-in",
                  "time-lapse",
                  "misty",
                  "bioluminescent",
                  "backlit silhouette",
                  "wide angle",
                  "documentary style",
                  "National Geographic",
                  "tilt reveal",
                  "hyperlapse",
                  "shallow depth of field",
                  "dramatic shadows",
                  "soft diffused light",
                  "atmospheric haze",
                ].map((tag, i) => (
                  <span key={i} className="atvm-guide-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="atvm-guide-cta">
              <a href={CTA_URL} className="atvm-btn-primary">
                🎬 Put These Tips into Practice
              </a>
            </div>
          </div>
        </section>

        {/* ─── FORMAT GUIDE ─────────────────────────────────────────────── */}
        <section className="atvm-formats-section">
          <div className="atvm-section-inner">
            <div className="atvm-section-label">✦ Format &amp; Platform Guide</div>
            <h2 className="atvm-section-h2">
              Right format for every platform
            </h2>

            <div className="atvm-formats-grid">
              <div className="atvm-format-card">
                <div className="atvm-format-ratio atvm-format-ratio--16-9">16:9</div>
                <h3>YouTube</h3>
                <p>
                  The standard cinematic widescreen format. Use for travel vlogs,
                  destination guides, B-roll compilation reels, and documentary-style
                  travel content. Pairs perfectly with 1080p at 10 seconds.
                </p>
                <div className="atvm-format-recommended">
                  <strong>Recommended:</strong> Kling 2.6 Pro · Veo 3.1 · 1080p
                </div>
              </div>

              <div className="atvm-format-card atvm-format-card--featured">
                <div className="atvm-format-ratio atvm-format-ratio--9-16">9:16</div>
                <h3>Instagram Reels &amp; TikTok</h3>
                <p>
                  The dominant format for short-form social travel content in 2026.
                  Perfect for aesthetic travel Reels, wanderlust TikToks, and
                  vertical storytelling. Add Grok Imagine for built-in ambient sound.
                </p>
                <div className="atvm-format-recommended">
                  <strong>Recommended:</strong> Grok Imagine · Kling 2.6 Pro · 720p+
                </div>
              </div>

              <div className="atvm-format-card">
                <div className="atvm-format-ratio atvm-format-ratio--1-1">1:1</div>
                <h3>Instagram Feed</h3>
                <p>
                  Square format for a clean, editorial Instagram grid. Works
                  brilliantly for destination close-ups, product shots from travel
                  brands, and cover-style travel content with centred compositions.
                </p>
                <div className="atvm-format-recommended">
                  <strong>Recommended:</strong> Wan 2.5 · FLUX · 720p
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── AESTHETIC STYLES ─────────────────────────────────────────── */}
        <section className="atvm-styles-section">
          <div className="atvm-section-inner">
            <div className="atvm-section-label">✦ Aesthetic Styles</div>
            <h2 className="atvm-section-h2">
              Find your travel video aesthetic
            </h2>
            <p className="atvm-section-p">
              The word &quot;aesthetic&quot; means different things to different
              creators. Here are the most popular travel video aesthetics in
              2026, with the prompt techniques to achieve each one.
            </p>

            <div className="atvm-styles-grid">
              {[
                {
                  name: "Dark Academia Travel",
                  emoji: "🏛️",
                  desc: "Ancient libraries, cobblestone streets, gothic cathedrals in moody overcast light. Muted tones, deep shadows, intellectual wanderlust.",
                  keywords: "overcast · desaturated · moody · dramatic shadows · stone architecture",
                },
                {
                  name: "Cottagecore Wanderlust",
                  emoji: "🌿",
                  desc: "Flower-filled meadows, foggy countryside lanes, thatched villages, morning dew. Soft warm tones, pastoral serenity, slow living.",
                  keywords: "soft light · warm tones · misty · pastoral · golden hour · bokeh",
                },
                {
                  name: "Retro Film Travel",
                  emoji: "📽️",
                  desc: "8mm-style grain, faded colours, vintage textures. Reminiscent of analogue travel photography from the 70s and 80s.",
                  keywords: "film grain · faded · vintage · warm cast · nostalgic · retro",
                },
                {
                  name: "Epic Adventure",
                  emoji: "⛰️",
                  desc: "Vast dramatic landscapes, extreme weather, raw wilderness. Deep contrast, saturated colours, heroic wide shots.",
                  keywords: "dramatic · high contrast · epic · wide angle · storm · saturated",
                },
                {
                  name: "Minimal Clean",
                  emoji: "🌫️",
                  desc: "Sparse compositions, soft whites and pale greys, geometric architectural beauty. Tokyo-inspired urban minimalism.",
                  keywords: "minimalist · soft · muted · clean · architectural · fog",
                },
                {
                  name: "Tropical Vibrant",
                  emoji: "🌺",
                  desc: "Lush greens, electric blues, saturated sunset pinks. Bali, Sri Lanka, Hawaii energy — bold, joyful, bursting with colour.",
                  keywords: "vibrant · saturated · tropical · lush · bright · golden glow",
                },
              ].map((style, i) => (
                <div key={i} className="atvm-style-card">
                  <span className="atvm-style-emoji">{style.emoji}</span>
                  <h3 className="atvm-style-name">{style.name}</h3>
                  <p className="atvm-style-desc">{style.desc}</p>
                  <div className="atvm-style-kw">{style.keywords}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── DEEP SEO CONTENT ─────────────────────────────────────────── */}
        <section className="atvm-content-section">
          <div className="atvm-section-inner atvm-content-inner">
            <article className="atvm-article">
              <h2>
                The Complete Guide to Aesthetic Travel Video Creation with AI
                in 2026
              </h2>

              <p>
                Travel content creation has undergone a quiet revolution. In
                2024 and 2025, the arrival of truly capable AI video generation
                models — from Kling to Veo to Wan 2.5 — changed what was
                possible for independent creators. By 2026, you no longer need
                a drone, a professional camera, an editing suite, or a trip to
                the Alps to create aesthetic travel video content that gets
                millions of views.
              </p>

              <p>
                This guide covers everything you need to know about making
                cinematic aesthetic travel videos with AI: the best tools, the
                best prompts, the best AI models for each style, and why this
                new wave of AI-generated travel content is changing how we
                consume and create wanderlust media on the internet.
              </p>

              <h3>What Is an Aesthetic Travel Video?</h3>
              <p>
                The term &quot;aesthetic travel video&quot; refers to a category of
                travel content that prioritises visual mood, atmosphere, and
                emotional resonance over traditional informational travel
                reporting. Unlike classic travel vlogs where a person narrates
                their itinerary on camera, aesthetic travel videos are more
                like moving paintings — carefully composed shots, intentional
                colour grading, deliberate pacing, and a strong sense of place
                without much dialogue or narration.
              </p>
              <p>
                Think of the type of Instagram Reels that make you immediately
                book a flight. A misty morning in Kyoto. A timelapse of the
                sun rising over Santorini. A slow drone reveal of the Amalfi
                Coast. These are aesthetic travel videos — and until recently,
                creating them required expensive equipment, considerable skill,
                and actually being at the location.
              </p>
              <p>
                AI video generation changes all three of those requirements
                simultaneously.
              </p>

              <h3>Why AI Travel Video Generation Matters in 2026</h3>
              <p>
                The global travel content market is worth hundreds of billions
                of dollars — and a huge proportion of it lives on short-form
                video platforms. Instagram Reels about travel consistently
                outperform almost every other category in terms of saves and
                shares. YouTube travel content regularly crosses millions of
                views. TikTok travel videos can go viral overnight.
              </p>
              <p>
                But the production barrier has always been high. Creating the
                kind of cinematic drone footage you see on top travel channels
                used to require: a drone (expensive), travel to the location
                (very expensive), editing software and skills (time-consuming),
                and ideally a whole production team.
              </p>
              <p>
                AI video generation in 2026 has reduced this to: a text prompt
                and 30–120 seconds of generation time. The implications for
                travel creators, travel brands, and travel content agencies are
                enormous.
              </p>

              <h3>The Best AI Video Models for Travel Content in 2026</h3>
              <p>
                Not all AI video models are equally good at travel content.
                Different models have different strengths — some are better at
                photorealism, some at smooth camera motion, some at handling
                complex landscapes. Here&apos;s a breakdown of the leading models
                and how they perform specifically on travel video generation:
              </p>

              <h4>Kling 2.6 Pro</h4>
              <p>
                Kling 2.6 Pro, developed by the Chinese AI company Kuaishou,
                is widely considered one of the best all-round models for
                cinematic video generation in 2026. For travel content, it
                excels at natural motion — water moving realistically, clouds
                drifting, grasses swaying. It handles complex landscape scenes
                with high fidelity and produces smooth, cinematically pleasing
                camera movement simulation. If you&apos;re making hero content for
                a travel brand or YouTube channel, Kling 2.6 Pro is the model
                to use. The 10-second duration at 1080p produces genuinely
                stunning results for golden-hour coastal scenes, mountain
                aerials, and forest depth shots.
              </p>

              <h4>Veo 3.1 (Google DeepMind)</h4>
              <p>
                Google&apos;s Veo 3.1 is the most photorealistic AI video model
                available in 2026. For travel content that needs to look
                indistinguishable from real footage — drone aerials, beach
                close-ups, urban architecture — Veo 3.1 delivers the most
                convincing results. It&apos;s particularly impressive on large-scale
                natural scenes: mountain ranges, ocean horizons, desert
                expanses. The model supports audio generation as well, making
                it possible to create travel video clips with realistic ambient
                soundscapes built in. Generation takes longer than other models,
                but the output quality justifies it.
              </p>

              <h4>Wan 2.5</h4>
              <p>
                Wan 2.5 is the workhouse model of AI video generation — reliable,
                fast, and highly capable across a wide range of travel prompts.
                It supports resolutions from 480p to 1080p, making it adaptable
                to different use cases. For social media travel content where
                720p is sufficient and speed matters, Wan 2.5 is the most
                efficient choice. It handles a wide variety of travel scenes
                well — mountains, cities, coastal environments — and the
                credit cost per video is the lowest of all the models available,
                making it ideal for creators who need to produce high volumes
                of content.
              </p>

              <h4>Grok Imagine</h4>
              <p>
                xAI&apos;s Grok Imagine stands apart from the other models in one
                significant way: it generates ambient audio alongside the video,
                automatically. When you generate a beach scene, you get the
                sound of waves. A forest prompt includes bird sounds and wind.
                A city scene includes ambient urban noise. For short-form social
                travel content where the viewer is watching with sound on, this
                makes Grok Imagine uniquely powerful — especially for Instagram
                Reels and TikTok where native audio significantly boosts reach
                and engagement.
              </p>

              <h3>How to Create Cinematic Travel Prompts</h3>
              <p>
                The single biggest factor in the quality of AI-generated travel
                video is the quality of the prompt. Unlike image generation
                where even simple prompts can produce impressive results, video
                generation rewards specificity and structure. Here are the key
                principles for writing cinematic travel video prompts in 2026:
              </p>

              <p>
                <strong>Always specify camera motion.</strong> The most common
                mistake beginners make is omitting any description of how the
                camera should move. Words like &quot;drone aerial,&quot; &quot;slow push-in,&quot;
                &quot;tracking shot,&quot; &quot;overhead tilt,&quot; or &quot;low angle reveal&quot; are not
                just stylistic choices — they directly influence how the AI
                models the motion dynamics of the scene. Without them, you get
                a static or randomly moving shot. With them, you get cinema.
              </p>

              <p>
                <strong>Include precise lighting conditions.</strong> Lighting
                is what separates a good travel video from a great one.
                &quot;Golden hour&quot; triggers warm, directional light with long
                shadows. &quot;Blue hour&quot; gives you deep, soft twilight. &quot;Midday
                haze&quot; creates atmospheric depth. &quot;Overcast&quot; produces soft,
                even light ideal for moody travel content. Be specific: &quot;golden
                hour light from the left,&quot; &quot;dawn light breaking through clouds,&quot;
                &quot;silver overcast with rim lighting.&quot;
              </p>

              <p>
                <strong>Name geographic specifics.</strong> &quot;A beach&quot; is generic.
                &quot;Maldives shallow turquoise lagoon&quot; is cinematic. &quot;A mountain&quot;
                is generic. &quot;Snow-capped Alps in early spring with valley fog
                below&quot; is a movie shot. The more specific your geography, the
                more visually distinct and authentic your travel video will feel.
              </p>

              <p>
                <strong>Add atmospheric detail.</strong> Travel videos live
                and die by their atmosphere. Words like &quot;mist,&quot; &quot;haze,&quot;
                &quot;fog,&quot; &quot;dust,&quot; &quot;spray,&quot; &quot;steam,&quot; and &quot;shimmer&quot; all add
                physical atmosphere to the scene that makes it feel more real
                and more cinematic. A &quot;dusty Moroccan souk at dusk&quot; feels
                completely different from a &quot;Moroccan souk at dusk&quot; — the
                dust particle effect changes everything.
              </p>

              <h3>
                Aesthetic Travel Video Trends on Instagram and TikTok in 2026
              </h3>
              <p>
                Understanding what&apos;s trending in travel video content in 2026
                helps you create prompts that generate content that feels
                current and is likely to perform well on algorithm-driven
                platforms. Here are the dominant aesthetics and formats:
              </p>

              <p>
                <strong>Slow Reveal Travel Reels.</strong> 5–7 second videos
                that start tight on a detail — a coffee cup, a window frame,
                a hand on a railing — and slowly pull back to reveal a
                stunning destination. The anticipation structure drives extreme
                watch time, which Instagram Reels heavily rewards. AI video
                generation is perfectly suited to this format.
              </p>

              <p>
                <strong>Golden Hour Aerial Loops.</strong> Short looping aerial
                shots of beautiful destinations during golden hour that play
                on repeat. These dominate travel brand Instagram feeds and
                consistently get saved at high rates. Kling 2.6 Pro and Veo 3.1
                both produce excellent results for this format.
              </p>

              <p>
                <strong>Atmospheric B-roll Collections.</strong> Travel
                YouTubers increasingly build entire videos around collections
                of atmospheric B-roll clips stitched together with minimal
                commentary. AI-generated clips fit seamlessly into this format
                — they function as any other cinematic B-roll would in an edit.
              </p>

              <p>
                <strong>Dark &amp; Moody Travel Aesthetics.</strong> Opposite to
                bright, saturated tropical content, dark moody travel — think
                rainy Edinburgh cobblestones, misty Norwegian fjords, gothic
                Prague at dusk — is a dominant aesthetic on TikTok in 2026.
                AI video generation excels at producing this type of
                atmospheric, melancholic travel content.
              </p>

              <h3>
                Using AI Travel Videos for Blog SEO and Content Marketing
              </h3>
              <p>
                The SEO benefits of embedding video content in travel blog
                posts are well-established. Pages with video have higher
                average time on page, lower bounce rates, and significantly
                more social shares. But for independent travel bloggers,
                sourcing or creating original video to embed has always been
                a major bottleneck.
              </p>
              <p>
                AI video generation solves this. A travel blogger writing
                about the Norwegian fjords can now generate a short, stunning
                aerial clip of the fjords to embed directly in their article —
                without ever having visited Norway. The video keeps the reader
                engaged, reduces bounce rate, signals high content quality to
                Google, and creates a more shareable, re-postable piece of
                content overall.
              </p>
              <p>
                For travel content marketing agencies working with tourism
                boards, hotels, and tour operators, AI-generated video
                represents a dramatic reduction in content production costs
                without any sacrifice in visual quality — particularly for
                social media content and digital advertising.
              </p>

              <h3>Image-to-Video: Animating Your Travel Photography</h3>
              <p>
                One of the most powerful features of the Scenith AI travel
                video maker is the Image-to-Video mode. If you have existing
                travel photos — even from a smartphone — you can upload them
                and the AI will animate them into flowing video clips. A still
                shot of a mountain can become a sweeping aerial. A beach photo
                can become a gently lapping shoreline with soft bokeh waves.
                A forest trail can come alive with moving leaves and shifting
                light.
              </p>
              <p>
                This feature is particularly valuable for travel bloggers and
                Instagram creators who have a library of existing travel photos
                but want to repurpose that content into video format for Reels,
                TikTok, and YouTube Shorts. You&apos;re not starting from scratch —
                you&apos;re upgrading your existing creative assets into a new
                format.
              </p>
              <p>
                The most effective approach is to upload a photo with a clear
                subject and strong composition, then add a motion prompt that
                describes how you want the scene to move: &quot;Slow zoom out
                revealing the full mountain range,&quot; or &quot;Ocean waves gently
                moving forward and back in slow motion,&quot; or &quot;Clouds drifting
                across the sky from left to right, warm afternoon light.&quot;
              </p>

              <h3>Commercial Rights and Monetisation</h3>
              <p>
                A common question from travel creators considering AI video
                generation is: can I actually use this content commercially?
                On Scenith, the answer is yes — all content generated on the
                platform comes with full commercial rights. You can use
                AI-generated travel videos in monetised YouTube videos, paid
                advertising campaigns, client work, stock footage sales, and
                any other commercial application without attribution or
                licensing concerns.
              </p>
              <p>
                This makes AI travel video generation particularly attractive
                for travel brands and agencies, who can now produce unlimited
                destination content without location costs, production crews,
                or complicated rights clearances.
              </p>

              <h3>Getting Started: Your First Aesthetic Travel Video</h3>
              <p>
                If you&apos;re new to AI video generation, here&apos;s the recommended
                approach for your first aesthetic travel video:
              </p>
              <p>
                Start with Wan 2.5 at 480p for your first few attempts —
                it&apos;s the fastest and most forgiving model, and it lets you
                rapidly iterate on your prompts without spending too many
                credits. Write a detailed prompt using the formula above:
                camera motion, specific location, time of day, lighting
                quality, atmospheric detail, and style. Choose 5 seconds to
                start — it&apos;s faster and gives you a clear sense of the model&apos;s
                interpretation of your prompt. Once you&apos;ve landed on a prompt
                that produces the look you want, switch to Kling 2.6 Pro or
                Veo 3.1 for the final full-quality render at 1080p.
              </p>
              <p>
                You can use the 12+ travel prompt templates on this page as a
                starting point — each one has been designed using the cinematic
                prompt formula and will produce strong results across all the
                available models.
              </p>
            </article>
          </div>
        </section>

        {/* ─── COMPARISON TABLE ─────────────────────────────────────────── */}
        <section className="atvm-compare-section">
          <div className="atvm-section-inner">
            <div className="atvm-section-label">✦ Why Scenith</div>
            <h2 className="atvm-section-h2">
              One platform vs. five separate tools
            </h2>

            <div className="atvm-compare-grid">
              <div className="atvm-compare-col atvm-compare-them">
                <h3>❌ Typical Workflow</h3>
                <ul>
                  <li>Separate subscription for AI image ($20+/mo)</li>
                  <li>Separate subscription for AI video ($30+/mo)</li>
                  <li>Separate tool for AI voiceover ($15+/mo)</li>
                  <li>Export → import → re-export across platforms</li>
                  <li>3 different credit systems to track</li>
                  <li>No unified history or project organisation</li>
                  <li>$65+/month total</li>
                </ul>
              </div>
              <div className="atvm-compare-col atvm-compare-us">
                <h3>✅ Scenith</h3>
                <ul>
                  <li>AI Image + AI Video + AI Voice in one login</li>
                  <li>Single credit balance across all three</li>
                  <li>
                    Generate an image, animate it to video, add voice — on
                    one page
                  </li>
                  <li>6 video models, 7 image models, 3 voice providers</li>
                  <li>50 free credits on signup</li>
                  <li>Paid plans from $1 · Creator plans from $9/mo</li>
                  <li>Full commercial rights on everything you generate</li>
                </ul>
              </div>
            </div>

            <div className="atvm-compare-cta">
              <a href={CTA_URL} className="atvm-btn-primary">
                Create Free Aesthetic Travel Video →
              </a>
            </div>
          </div>
        </section>

        {/* ─── FAQ ──────────────────────────────────────────────────────── */}
        <section className="atvm-faq-section">
          <div className="atvm-section-inner">
            <div className="atvm-section-label">✦ FAQ</div>
            <h2 className="atvm-section-h2">Frequently asked questions</h2>

            <div className="atvm-faq-list">
              {[
                {
                  q: "Can I make aesthetic travel videos with AI for free?",
                  a: "Yes. Scenith gives you 50 free credits on signup — no credit card needed. A 5-second travel video in Wan 2.5 at 480p costs 46 credits, meaning your free credits are enough to generate your first travel video immediately.",
                },
                {
                  q: "What makes an aesthetic travel video?",
                  a: "Aesthetic travel videos prioritise mood, atmosphere, and visual quality over information delivery. Key elements include cinematic camera movement (drone aerials, slow reveals), intentional lighting (golden hour, blue hour, moody overcast), strong colour palettes, and a clear sense of place. AI video generation lets you specify all of these elements in a text prompt.",
                },
                {
                  q: "Which AI model is best for travel video generation?",
                  a: "Kling 2.6 Pro is the best all-round model for travel content — natural motion, high fidelity, excellent landscape rendering. Veo 3.1 is the most photorealistic and best for documentary-feel footage. Wan 2.5 is the best value and fastest for social media content. Grok Imagine is unique for its built-in ambient audio generation.",
                },
                {
                  q: "Can I use AI travel videos for Instagram Reels and TikTok?",
                  a: "Yes — generate in 9:16 portrait format specifically for Reels and TikTok. All generated videos on Scenith come with full commercial rights, meaning you can post them on any platform, monetise them, and use them in paid campaigns without any restrictions.",
                },
                {
                  q: "How long does it take to generate a travel video with AI?",
                  a: "Wan 2.5 at 480p takes roughly 30–60 seconds. Kling models typically take 60–90 seconds. Veo 3.1 takes 90–120 seconds but produces the highest quality output. All generations run server-side — you can stay on the page and your video will be ready when done.",
                },
                {
                  q: "Do I need travel footage or photos to use this?",
                  a: "No. Text-to-video mode generates travel clips purely from your written description. No existing footage required. Alternatively, upload one of your own travel photos in Image-to-Video mode and the AI will animate it into a flowing video clip.",
                },
                {
                  q: "Can I create travel videos of destinations I haven't visited?",
                  a: "Yes — this is one of the most exciting uses of AI travel video generation. You can describe any destination in the world with cinematic detail and generate a realistic clip of it, without ever having been there. This is particularly valuable for armchair travel content, destination guides, and travel brand content.",
                },
                {
                  q: "What resolution can I generate travel videos at?",
                  a: "Wan 2.5 supports 480p, 720p, and 1080p. Kling 2.5 Turbo and Kling 2.6 Pro support 1080p. Veo 3.1 supports 1080p. Grok Imagine supports 480p and 720p. For most social media use cases, 720p is more than sufficient. For YouTube hero content, go for 1080p.",
                },
              ].map((item, i) => (
                <details key={i} className="atvm-faq-item">
                  <summary className="atvm-faq-q">{item.q}</summary>
                  <p className="atvm-faq-a">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FINAL CTA ────────────────────────────────────────────────── */}
        <section className="atvm-final-cta-section">
          <div className="atvm-section-inner">
            <div className="atvm-final-cta-inner">
              <div className="atvm-final-film-grain" aria-hidden="true" />
              <span className="atvm-final-cta-eyebrow">
                ✦ Ready to create?
              </span>
              <h2 className="atvm-final-cta-h2">
                Your next aesthetic travel video
                <br />
                is 30 seconds away.
              </h2>
              <p className="atvm-final-cta-p">
                No drone. No editing suite. No production team.
                <br />
                Just a prompt, a model, and a minute to spare.
              </p>
              <a href={CTA_URL} className="atvm-final-btn">
                <span className="atvm-final-btn-icon">🎬</span>
                <span>
                  <strong>Create AI Travel Video — Free</strong>
                  <small>50 credits on signup · No card required · Download MP4</small>
                </span>
                <span className="atvm-final-btn-arrow">→</span>
              </a>
              <div className="atvm-final-platforms">
                <span>Works for</span>
                <strong>Instagram Reels</strong>
                <span>·</span>
                <strong>TikTok</strong>
                <span>·</span>
                <strong>YouTube</strong>
                <span>·</span>
                <strong>Travel Blogs</strong>
              </div>
            </div>
          </div>
        </section>

        {/* ─── FOOTER NAV ───────────────────────────────────────────────── */}
        <nav className="atvm-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Scenith</Link>
          <span>›</span>
          <Link href="/tools">Tools</Link>
          <span>›</span>
          <span aria-current="page">Aesthetic Travel Video Maker</span>
        </nav>
      </div>
    </>
  );
}