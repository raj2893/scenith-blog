// app/tools/tweet-to-carousel-ai-generator/page.tsx
// Static page — no "use client" needed. Pure SEO juice.

import type { Metadata } from "next";
import "./tweet-carousel.css";

// ─── SEO Metadata ────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Tweet to Carousel AI Generator — Turn Tweets into Viral Carousel Images (Free)",
  description:
    "Convert any tweet or thread into stunning AI-generated carousel images in seconds. Perfect for Instagram, LinkedIn, and Pinterest. No design skills needed. Free to start.",
  keywords: [
    "tweet to carousel generator",
    "tweet to carousel AI",
    "twitter thread to carousel",
    "convert tweet to image",
    "tweet to instagram carousel",
    "AI carousel generator",
    "twitter to linkedin carousel",
    "tweet screenshot to carousel",
    "viral carousel maker",
    "social media carousel AI",
    "thread to carousel converter",
    "tweet image generator free",
    "AI image carousel maker",
    "instagram carousel from tweet",
  ],
  openGraph: {
    title: "Tweet to Carousel AI Generator — Free Tool by Scenith",
    description:
      "Turn any tweet or Twitter/X thread into a beautifully designed carousel in seconds using AI. Free to start. Export for Instagram, LinkedIn, and more.",
    url: "https://scenith.in/tools/tweet-to-carousel-ai-generator",
    siteName: "Scenith",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tweet to Carousel AI Generator — Free Tool by Scenith",
    description:
      "Turn any tweet or thread into a viral carousel image using AI. Free. Instant. No design skills needed.",
  },
  alternates: {
    canonical: "https://scenith.in/tools/tweet-to-carousel-ai-generator",
  },
};

// ─── JSON-LD Structured Data ──────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://scenith.in/tools/tweet-to-carousel-ai-generator",
      url: "https://scenith.in/tools/tweet-to-carousel-ai-generator",
      name: "Tweet to Carousel AI Generator — Turn Tweets into Viral Carousel Images",
      description:
        "Convert any tweet or Twitter/X thread into stunning AI-generated carousel images for Instagram, LinkedIn, and Pinterest. Free to start.",
      inLanguage: "en-US",
      dateModified: "2026-04-01",
      publisher: {
        "@type": "Organization",
        name: "Scenith",
        url: "https://scenith.in",
      },
    },
    {
      "@type": "SoftwareApplication",
      name: "Tweet to Carousel AI Generator",
      applicationCategory: "DesignApplication",
      operatingSystem: "Web Browser",
      url: "https://scenith.in/create-ai-content?tab=image&utm_source=tweet-carousel-tool&utm_medium=cta&utm_campaign=micro-tools",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Free to start. 50 credits on sign-up. No card required.",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How do I turn a tweet into a carousel image using AI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Copy your tweet text, go to Scenith's AI Carousel Generator, switch to Carousel mode, paste your content across up to 3 slide prompts, choose a style, and click Generate. Your AI carousel images are ready in 10–30 seconds.",
          },
        },
        {
          "@type": "Question",
          name: "Is the tweet to carousel generator free?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Scenith gives you 50 free credits on sign-up with no credit card required. Each carousel slide costs between 10–46 credits depending on model.",
          },
        },
        {
          "@type": "Question",
          name: "Can I use the generated carousels on Instagram and LinkedIn?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. All AI-generated images from Scenith come with full commercial rights and are exported as high-resolution PNGs in your chosen aspect ratio — square, portrait, or landscape.",
          },
        },
        {
          "@type": "Question",
          name: "What makes AI-generated tweet carousels go viral?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Carousel posts consistently outperform single images on Instagram and LinkedIn because they increase dwell time. When tweet content is paired with visually striking AI-generated imagery, it creates a stop-scroll effect that boosts shares and saves.",
          },
        },
      ],
    },
  ],
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const STATS = [
  { value: "3x", label: "More reach vs single image posts" },
  { value: "~60s", label: "To generate a full 3-slide carousel" },
  { value: "7+", label: "AI models to choose from" },
  { value: "Free", label: "50 credits on signup · no card" },
];

const STEPS = [
  {
    num: "01",
    icon: "📋",
    title: "Copy your tweet or thread",
    body: "Grab the exact text from your tweet, X/Twitter thread, or LinkedIn post. The content is yours — we help you visualise it as beautiful slides.",
  },
  {
    num: "02",
    icon: "✍️",
    title: "Paste into Carousel mode",
    body: "Open Scenith's AI Image Generator, switch to Carousel mode, and paste your content across the 3 slide prompts. Each slide can have its own visual direction.",
  },
  {
    num: "03",
    icon: "🎨",
    title: "Pick a style and AI model",
    body: "Choose from Realistic, Artistic, Anime, Digital Art, 3D Render, Fantasy, Sci-Fi, or Vintage. Select your AI engine — GPT Image, Imagen 4, FLUX, Grok Aurora, and more.",
  },
  {
    num: "04",
    icon: "⚡",
    title: "Generate all 3 slides in one click",
    body: "Hit Generate Carousel. All 3 slides render sequentially and are returned as full-resolution PNGs in 60–90 seconds total.",
  },
  {
    num: "05",
    icon: "📥",
    title: "Download and post",
    body: "Download each slide as a high-resolution PNG. Upload as a carousel on Instagram, LinkedIn, Pinterest, or any platform. Full commercial rights, no watermarks.",
  },
];

const USE_CASES = [
  {
    emoji: "🧵",
    title: "Thread → Carousel",
    desc: "You wrote a 10-tweet thread on productivity, mindset, or your niche. Instead of just posting the thread, convert each key tweet into a visually stunning slide. Threads repurposed as carousels routinely get 3–5× the saves and shares.",
  },
  {
    emoji: "💡",
    title: "Quote Tweet → Quote Card",
    desc: "Turn a single high-performing tweet into a beautifully styled quote card carousel. Use a contrasting AI-generated background image behind the text, add context slides, and suddenly your 280-character insight becomes a 3-slide visual story.",
  },
  {
    emoji: "📊",
    title: "Stat Tweet → Infographic Carousel",
    desc: "If your tweet contains a statistic, finding, or data point, turn it into an infographic carousel. Slide 1: the headline stat with a bold visual. Slide 2: context and explanation. Slide 3: the takeaway or call to action.",
  },
  {
    emoji: "🎤",
    title: "Founder Story → Brand Carousel",
    desc: "Startup founders and personal brand builders use tweet carousels to tell their story. Beginning, struggle, and breakthrough — each tweet mapped to a slide, each with its own AI-generated visual backdrop that reinforces the emotion.",
  },
  {
    emoji: "📚",
    title: "Educational Thread → Lesson Slides",
    desc: "Educators, coaches, and course creators use tweet carousels to teach. Three key concepts, each with an AI-generated illustrative visual. The result looks like a professionally designed course module — ready for Instagram Stories or LinkedIn slides.",
  },
  {
    emoji: "🛍️",
    title: "Product Launch Tweet → Launch Carousel",
    desc: "Turn your product announcement tweet into a 3-slide launch carousel. Slide 1: the hook. Slide 2: features and proof. Slide 3: CTA with pricing. AI-generated imagery makes even a bootstrapped product look like a funded startup.",
  },
];

const PLATFORMS = [
  {
    name: "Instagram",
    icon: "📸",
    note: "Carousels are Instagram's highest-engagement format — they get 3× more interactions than single posts. Use Square (1:1) or Portrait (9:16) for maximum screen coverage.",
    bestSize: "Square or Portrait",
  },
  {
    name: "LinkedIn",
    icon: "💼",
    note: "LinkedIn carousel posts (uploaded as PDF or multi-image) consistently rank as the highest-organic-reach format on the platform in 2025–2026. Landscape works great here.",
    bestSize: "Landscape or Square",
  },
  {
    name: "Pinterest",
    icon: "📌",
    note: "Pinterest heavily promotes carousel Pins — they appear larger in feeds and drive significantly more click-through. Portrait (tall) dominates the Pinterest feed.",
    bestSize: "Portrait (tall)",
  },
  {
    name: "X / Twitter",
    icon: "✖️",
    note: "Posting image carousels with your tweet threads dramatically increases media impressions and time-on-post. Square performs best here for native feel.",
    bestSize: "Square",
  },
  {
    name: "Threads",
    icon: "🧵",
    note: "Threads' algorithm rewards visual posts. A tweet repurposed as a 3-image carousel can outperform the original tweet by a wide margin. Square or Portrait.",
    bestSize: "Square or Portrait",
  },
  {
    name: "Substack Notes",
    icon: "📝",
    note: "Pair your tweet insight with a Substack Note carousel to drive newsletter subscribers from social audiences. Square or Landscape recommended.",
    bestSize: "Square",
  },
];

const MODELS_COMPARISON = [
  { name: "GPT Image 1", provider: "OpenAI", best: "Quote cards, typography-heavy slides", style: "Clean, versatile", speed: "Medium", credits: "10–47cr" },
  { name: "Imagen 4 Fast", provider: "Google", best: "Quick concept visuals", style: "Photorealistic", speed: "Fast", credits: "10cr" },
  { name: "Imagen 4 Standard", provider: "Google", best: "Premium hero images", style: "Ultra-detailed", speed: "Medium", credits: "15cr" },
  { name: "FLUX 1.1 Pro", provider: "Black Forest Labs", best: "Artistic, painterly backgrounds", style: "Artistic/photorealism", speed: "Medium", credits: "15cr" },
  { name: "Grok Aurora", provider: "xAI", best: "Bold, vibrant carousel visuals", style: "High-contrast, vivid", speed: "Fast", credits: "14cr" },
  { name: "Nano Banana Pro", provider: "Google", best: "4K ultra-sharp slides", style: "Hyper-detailed", speed: "Slow", credits: "26–46cr" },
];

const PROMPT_FORMULAS = [
  {
    label: "The Hook Slide",
    formula: "[Bold claim from your tweet], cinematic wide shot, dramatic lighting, [style] style, 4K",
    example: '"Social media is dying. Here\'s what replaces it, cinematic wide shot, dramatic lighting, digital art style, 4K"',
  },
  {
    label: "The Evidence Slide",
    formula: "[Data or supporting visual metaphor], infographic aesthetic, [colour palette], clean editorial",
    example: '"Chart showing exponential growth curve made of golden light particles, editorial infographic aesthetic, dark background, clean"',
  },
  {
    label: "The Reveal / CTA Slide",
    formula: "[Outcome or transformation], triumphant composition, [style], bright and inspiring",
    example: '"Person standing on a mountain summit at sunrise, arms wide, triumphant composition, cinematic, bright and inspiring"',
  },
  {
    label: "The Quote Card Slide",
    formula: "[Mood or theme of the quote], minimalist background, [texture or colour], editorial, no text",
    example: '"Stormy ocean waves at dusk, minimalist background, deep navy and gold, editorial, no text"',
  },
];

const TIPS = [
  { icon: "🎯", title: "One idea per slide", body: "The most viral tweet carousels follow a simple rule: each slide communicates one and only one idea. Hook → Context → CTA. If your thread is longer, pick the 3 most punchy moments." },
  { icon: "🎨", title: "Match visual mood to message tone", body: "If your tweet is about hustle and ambition, use bold, high-contrast visuals (Grok Aurora or FLUX with 'epic cinematic' style). If it's a thoughtful reflection, choose soft, moody imagery (GPT Image with 'artistic' style)." },
  { icon: "🖼️", title: "Use the shared reference image trick", body: "Scenith's Carousel mode lets you upload a single reference image applied to all 3 slides. Use this to maintain a consistent visual theme — especially useful for brand carousels." },
  { icon: "📐", title: "Choose your aspect ratio strategically", body: "Square (1:1) works everywhere. Portrait (9:16) dominates Instagram and Threads. Landscape (16:9) wins on LinkedIn and Twitter/X. Decide your primary platform first." },
  { icon: "💬", title: "Add text overlay after download", body: "Scenith generates the background visuals. For tweet carousels, the best workflow is: generate AI backgrounds → use Canva or CapCut to overlay your tweet text → post. This keeps the text crisp and searchable." },
  { icon: "🔁", title: "Repurpose every quarter", body: "Your best-performing tweets are a goldmine. Revisit your top 10 tweets from each quarter and turn them into carousels. Evergreen content re-posted with fresh visuals consistently outperforms new content on most algorithms." },
];

const FAQ = [
  { q: "What is a tweet to carousel generator?", a: "A tweet to carousel generator converts the text and ideas from a tweet or Twitter/X thread into a multi-slide visual carousel — typically 3–10 images — designed to be posted on Instagram, LinkedIn, Pinterest, or other platforms. AI-powered carousel generators like Scenith go further by generating entirely new background images based on your tweet content, creating visually unique slides that stop the scroll." },
  { q: "How do I convert a Twitter thread into a carousel for Instagram?", a: "The simplest workflow: (1) identify the 3 strongest tweets from your thread, (2) write a brief image description for each one based on its theme, (3) paste those descriptions into Scenith's Carousel mode, (4) choose your style and aspect ratio (square for Instagram), (5) click Generate, and (6) download the PNG slides. Upload them as a carousel post on Instagram directly." },
  { q: "Is this tweet to carousel tool completely free?", a: "Scenith's AI Carousel Generator gives you 50 free credits when you sign up — no credit card required. A 3-slide carousel using Imagen 4 Fast costs just 30 credits (10cr/slide), meaning your free credits cover 1–2 full carousels immediately. Paid plans start from $9/month for 300 monthly credits." },
  { q: "What AI models are used to generate carousel images?", a: "Scenith supports 7+ AI image models: GPT Image 1 Mini and Medium (OpenAI), Imagen 4 Fast and Standard (Google), FLUX 1.1 Pro (Black Forest Labs), Grok Aurora (xAI), Stability AI Core, and Nano Banana Pro. Each model has different strengths — Grok Aurora excels at vibrant, high-contrast carousel visuals while FLUX 1.1 Pro is better for artistic, painterly backgrounds." },
  { q: "Can I use the generated carousel images for commercial purposes?", a: "Yes. All content generated on Scenith — including AI carousel images — comes with full commercial rights. You can use them in sponsored posts, brand campaigns, client work, products, or any commercial project. No attribution to Scenith is required." },
  { q: "What aspect ratios are available for carousel generation?", a: "Depending on the model selected, you can generate in: Square 1:1 (works everywhere), Portrait 9:16, Landscape 16:9, Standard 4:3, and Tall 3:4. For most tweet carousels, Square 1:1 is recommended as it works across Instagram, LinkedIn, Threads, and Twitter simultaneously." },
  { q: "Can I upload my own images as a reference for the carousel?", a: "Yes. Scenith supports Image-to-Image generation for carousel slides. You can upload a separate reference image for each slide or use the 'shared reference image' feature to apply one consistent reference image to all 3 slides — perfect for maintaining brand visual consistency." },
  { q: "Why do carousels perform better than single images on social media?", a: "Platform algorithms reward engagement signals. Carousels generate multiple swipe interactions (each swipe counts as an engagement event), increase time-on-post, and benefit from a 'second chance' in the feed — platforms often re-serve a carousel to users who saw slide 1 but didn't swipe. This results in 3–8× more reach for carousel posts compared to equivalent single-image posts." },
  { q: "How long does it take to generate a 3-slide carousel?", a: "Scenith generates carousel slides sequentially. Each slide takes 10–30 seconds depending on model. A full 3-slide carousel using Imagen 4 Fast typically completes in under 60 seconds. More detailed models like Nano Banana Pro 4K can take up to 90 seconds per slide." },
  { q: "Does Scenith add watermarks to generated carousel images?", a: "No. All images generated on Scenith are delivered without watermarks, regardless of plan. Free plan users get full-resolution PNG downloads with zero branding attached." },
];

const CTA_URL =
  "https://scenith.in/create-ai-content?tab=image&utm_source=tweet-carousel-tool&utm_medium=cta&utm_campaign=micro-tools";

// ─── Page ────────────────────────────────────────────────────────────────────

export default function TweetToCarouselPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="ttc-root">

        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <section className="ttc-hero">
          <div className="ttc-hero-noise" aria-hidden="true" />
          <div className="ttc-hero-grid" aria-hidden="true" />
          <div className="ttc-hero-inner">
            <div className="ttc-hero-badge">
              <span className="ttc-badge-dot" />
              AI-Powered · Free to Start · No Design Skills Needed
            </div>
            <h1 className="ttc-hero-h1">
              Turn Any Tweet Into a
              <br />
              <em className="ttc-hero-em">Viral Carousel</em>
              <br />
              Using AI
            </h1>
            <p className="ttc-hero-sub">
              The fastest way to repurpose your Twitter/X content into
              stunning multi-slide carousels for Instagram, LinkedIn,
              Pinterest, and Threads — powered by GPT Image, Imagen&nbsp;4,
              FLUX, and Grok Aurora.
            </p>
            <div className="ttc-stats-row">
              {STATS.map((s) => (
                <div key={s.value} className="ttc-stat">
                  <span className="ttc-stat-val">{s.value}</span>
                  <span className="ttc-stat-label">{s.label}</span>
                </div>
              ))}
            </div>
            <div className="ttc-cta-group">
              <a href={CTA_URL} className="ttc-cta-primary">
                <span>🎠</span>
                Generate My Carousel — Free
                <span className="ttc-cta-arrow">→</span>
              </a>
              <span className="ttc-cta-note">50 free credits · No card required</span>
            </div>

            {/* Decorative fake carousel strip */}
            <div className="ttc-preview-strip" aria-hidden="true">
              <div className="ttc-preview-scroll">
                {[
                  { bg: "linear-gradient(135deg,#0f0c29,#302b63,#24243e)", label: "🧵 Thread Slide" },
                  { bg: "linear-gradient(135deg,#1a1a2e,#16213e,#0f3460)", label: "📊 Data Slide" },
                  { bg: "linear-gradient(135deg,#0d0d0d,#2d1b69,#6d28d9)", label: "💡 Insight Slide" },
                  { bg: "linear-gradient(135deg,#0a0a0a,#1e3a5f,#0d5c63)", label: "🎯 CTA Slide" },
                  { bg: "linear-gradient(135deg,#2c0735,#6a0572,#ab0e78)", label: "🔥 Hook Slide" },
                  { bg: "linear-gradient(135deg,#0f2027,#203a43,#2c5364)", label: "📢 Launch Slide" },
                  { bg: "linear-gradient(135deg,#1a0533,#3b0764,#7e22ce)", label: "✨ Quote Slide" },
                  { bg: "linear-gradient(135deg,#0c1445,#1e3a8a,#1d4ed8)", label: "📈 Stat Slide" },
                ].map((card, i) => (
                  <div key={i} className="ttc-preview-card" style={{ background: card.bg }}>
                    <div className="ttc-preview-label">{card.label}</div>
                    <div className="ttc-preview-shimmer" />
                    <div className="ttc-preview-lines">
                      <div className="ttc-preview-line ttc-line-a" />
                      <div className="ttc-preview-line ttc-line-b" />
                      <div className="ttc-preview-line ttc-line-c" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ─────────────────────────────────────────────────── */}
        <section className="ttc-section ttc-how">
          <div className="ttc-section-inner">
            <p className="ttc-section-label">How It Works</p>
            <h2 className="ttc-section-h2">From Tweet to Carousel in 5 Steps</h2>
            <p className="ttc-section-sub">No Canva. No Figma. No design experience required.</p>
            <div className="ttc-steps">
              {STEPS.map((step) => (
                <div key={step.num} className="ttc-step">
                  <div className="ttc-step-left">
                    <div className="ttc-step-num">{step.num}</div>
                    <div className="ttc-step-line" />
                  </div>
                  <div className="ttc-step-right">
                    <div className="ttc-step-icon">{step.icon}</div>
                    <div>
                      <h3 className="ttc-step-title">{step.title}</h3>
                      <p className="ttc-step-desc">{step.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="ttc-cta-center">
              <a href={CTA_URL} className="ttc-cta-primary">Start Generating — It's Free →</a>
            </div>
          </div>
        </section>

        {/* ── USE CASES ────────────────────────────────────────────────────── */}
        <section className="ttc-section ttc-usecases">
          <div className="ttc-section-inner">
            <p className="ttc-section-label">Use Cases</p>
            <h2 className="ttc-section-h2">6 Ways to Turn Tweets into Viral Carousels</h2>
            <p className="ttc-section-sub">Every tweet format has a carousel strategy. Here are the six most effective.</p>
            <div className="ttc-uc-grid">
              {USE_CASES.map((uc) => (
                <div key={uc.title} className="ttc-uc-card">
                  <span className="ttc-uc-emoji">{uc.emoji}</span>
                  <h3 className="ttc-uc-title">{uc.title}</h3>
                  <p className="ttc-uc-desc">{uc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PLATFORM GUIDE ───────────────────────────────────────────────── */}
        <section className="ttc-section ttc-platforms">
          <div className="ttc-section-inner">
            <p className="ttc-section-label">Platform Guide</p>
            <h2 className="ttc-section-h2">Best Carousel Sizes per Platform</h2>
            <p className="ttc-section-sub">Each platform has a sweet spot for carousel dimensions. Get it right and your AI-generated slides look native and professional.</p>
            <div className="ttc-platform-grid">
              {PLATFORMS.map((p) => (
                <div key={p.name} className="ttc-platform-card">
                  <div className="ttc-platform-icon">{p.icon}</div>
                  <div className="ttc-platform-info">
                    <h3 className="ttc-platform-name">{p.name}</h3>
                    <span className="ttc-platform-size">{p.bestSize}</span>
                    <p className="ttc-platform-note">{p.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── AI MODELS COMPARISON ─────────────────────────────────────────── */}
        <section className="ttc-section ttc-models">
          <div className="ttc-section-inner">
            <p className="ttc-section-label">AI Model Guide</p>
            <h2 className="ttc-section-h2">Which AI Model Makes the Best Carousel Images?</h2>
            <p className="ttc-section-sub">Scenith gives you 7 AI engines to choose from. Here's how each one performs for tweet carousel generation specifically.</p>
            <div className="ttc-models-table-wrap">
              <table className="ttc-models-table">
                <thead>
                  <tr>
                    <th>Model</th>
                    <th>Provider</th>
                    <th>Best For Carousels</th>
                    <th>Style</th>
                    <th>Speed</th>
                    <th>Credits</th>
                  </tr>
                </thead>
                <tbody>
                  {MODELS_COMPARISON.map((m) => (
                    <tr key={m.name}>
                      <td className="ttc-model-name">{m.name}</td>
                      <td className="ttc-model-provider">{m.provider}</td>
                      <td>{m.best}</td>
                      <td>{m.style}</td>
                      <td><span className={`ttc-speed-badge ttc-speed-${m.speed.toLowerCase()}`}>{m.speed}</span></td>
                      <td className="ttc-model-credits">{m.credits}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="ttc-cta-center" style={{ marginTop: "2rem" }}>
              <a href={CTA_URL} className="ttc-cta-primary">Try All 7 Models Free →</a>
            </div>
          </div>
        </section>

        {/* ── PROMPT FORMULAS ──────────────────────────────────────────────── */}
        <section className="ttc-section ttc-prompts">
          <div className="ttc-section-inner">
            <p className="ttc-section-label">Prompt Formulas</p>
            <h2 className="ttc-section-h2">4 AI Prompt Formulas for Tweet Carousels That Actually Work</h2>
            <p className="ttc-section-sub">Your prompt is what tells the AI what to generate. Use these battle-tested formulas to get stunning carousel visuals on your first try.</p>
            <div className="ttc-prompts-grid">
              {PROMPT_FORMULAS.map((pf) => (
                <div key={pf.label} className="ttc-prompt-card">
                  <div className="ttc-prompt-label">{pf.label}</div>
                  <div className="ttc-prompt-formula">
                    <span className="ttc-formula-tag">Formula</span>
                    <code>{pf.formula}</code>
                  </div>
                  <div className="ttc-prompt-example">
                    <span className="ttc-example-tag">Example</span>
                    <p>{pf.example}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TIPS ─────────────────────────────────────────────────────────── */}
        <section className="ttc-section ttc-tips">
          <div className="ttc-section-inner">
            <p className="ttc-section-label">Pro Tips</p>
            <h2 className="ttc-section-h2">6 Expert Tips to Maximise Carousel Virality</h2>
            <p className="ttc-section-sub">Synthesised from studying hundreds of carousel posts across Instagram, LinkedIn, and Threads in 2025–2026.</p>
            <div className="ttc-tips-grid">
              {TIPS.map((tip) => (
                <div key={tip.title} className="ttc-tip-card">
                  <span className="ttc-tip-icon">{tip.icon}</span>
                  <div>
                    <h3 className="ttc-tip-title">{tip.title}</h3>
                    <p className="ttc-tip-desc">{tip.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── LONG-FORM EDITORIAL ──────────────────────────────────────────── */}
        <section className="ttc-section ttc-editorial">
          <div className="ttc-section-inner ttc-editorial-inner">
            <p className="ttc-section-label">The Evidence</p>
            <h2 className="ttc-section-h2">Why Carousel Posts Outperform Everything Else in 2026</h2>

            <div className="ttc-editorial-body">
              <p>The data is unambiguous: carousel posts are the single highest-performing content format on Instagram, LinkedIn, and Threads in 2025–2026. Here is why — and why pairing them with AI-generated imagery pushes the advantage even further.</p>

              <h3>The Algorithm Mechanics</h3>
              <p>Social media algorithms are engagement-first. Every swipe on a carousel counts as a discrete interaction. A 3-slide carousel that users swipe through generates 3× the engagement signals of a single image, even if the same number of people see it. This triggers the algorithm to re-distribute the content to more users — creating a compounding reach effect that single-image posts simply cannot achieve.</p>
              <p>On LinkedIn specifically, carousels (uploaded as multi-image posts or PDFs) are the platform's highest-reach organic format. The algorithm shows them to connection-of-connection networks far more aggressively than standard image posts. For B2B founders, creators, and marketers, this makes tweet-to-carousel repurposing one of the highest-ROI content strategies available with zero ad spend.</p>
              <p>Instagram's algorithm has compounded this effect further in 2025–2026 by favouring saves over likes as the primary ranking signal. Carousels — especially educational and value-dense ones derived from tweet threads — receive disproportionately more saves. A saved carousel enters the algorithm's re-distribution loop indefinitely, meaning content from six months ago can still generate fresh reach today.</p>

              <h3>The Psychology of the Swipe</h3>
              <p>Carousels exploit a fundamental psychological principle: the curiosity gap. When a user sees the first slide of a well-designed carousel, the composition — whether it ends with a partial statement, a question, or a visual cliffhanger — creates an irresistible urge to swipe. This is especially true when the first slide is a strong hook pulled directly from a high-performing tweet.</p>
              <p>AI-generated imagery amplifies this effect significantly. A human-designed carousel may look polished, but it also looks familiar. AI-generated backgrounds create images that are genuinely novel — compositions, colour combinations, and visual metaphors that users have not seen before in that exact form. Novelty drives scroll stops. Scroll stops drive swipes. Swipes drive reach. The cycle compounds.</p>
              <p>The specific novelty of AI imagery also increases perceived effort. When a user sees a beautifully generated visual behind your tweet content, they instinctively assume significant production went into it — even when it took you sixty seconds. This perceived effort translates directly into perceived authority and content value, which drives follows and shares.</p>

              <h3>The Content Efficiency Argument</h3>
              <p>A tweet takes 30 seconds to write. Designing a 3-slide carousel the traditional way — using Canva, Photoshop, or commissioning a designer — takes 30–90 minutes at minimum and anywhere from $20 to $200 per piece if outsourced. With Scenith's AI Carousel Generator, that same carousel takes under 2 minutes from prompt to download. This speed advantage means you can repurpose your entire archive of top-performing tweets — not just the occasional viral thread when the motivation strikes.</p>
              <p>Content creators who repurpose systematically outperform those who create from scratch every time. Not because they work harder, but because they extract more value from ideas they have already proven resonate with an audience. AI carousel generation makes systematic repurposing economically and logistically viable for solo creators for the first time in history.</p>
              <p>Think about the compound effect: if you post 3 original tweets per day and your top 10% of tweets are worth repurposing, you are accumulating roughly 10–15 carousel-worthy pieces of content per month. With manual design, you might convert 1–2 of those into carousels. With AI generation at 2 minutes per carousel, you can convert all 10–15, multiplying your effective content output by 7–10× without any additional ideation effort.</p>

              <h3>The Visual Credibility Effect</h3>
              <p>There is a well-documented perception gap between text-only posts and visually designed posts. The same insight — identical words — is perceived as more authoritative, more trustworthy, and more shareable when accompanied by a polished visual. This is not vanity. It is a measurable psychological effect that directly influences whether someone saves, shares, or follows you as a result of your content.</p>
              <p>In 2026, the production quality bar for visual content has been permanently raised by AI tools. An audience that was previously impressed by a Canva template now expects something more original. AI-generated carousel backgrounds — when chosen thoughtfully with the right model and style — create a production standard that was previously inaccessible without a creative team. The playing field between individual creators and large media brands has been effectively levelled.</p>

              <h3>The Cross-Platform Repurposing Matrix</h3>
              <p>One of the most underutilised strategies for content creators in 2026 is the cross-platform carousel matrix. A single high-performing tweet, turned into a 3-slide AI carousel, can be distributed across six platforms simultaneously with minor format adjustments: Instagram (square), LinkedIn (landscape), Pinterest (portrait), Threads (square), Substack Notes (landscape), and X/Twitter (square). That is six distribution channels from one tweet and one generation session.</p>
              <p>The variation in audience demographics across these platforms means the same insight reaches fundamentally different people at different stages of their awareness journey. A tweet about startup fundraising might reach founders on LinkedIn, aspiring entrepreneurs on Instagram, and investors on Threads — all from a single carousel generation session on Scenith.</p>

              <h3>Practical Workflow Integration</h3>
              <p>The most effective tweet-to-carousel workflows used by professional content creators in 2026 follow a consistent pattern. First, maintain a running list of your top-performing tweets — any tweet that exceeded your average engagement by 2× or more is a carousel candidate. Second, batch your carousel generation sessions: set aside 20–30 minutes per week to convert 5–10 tweets into carousels using Scenith. Third, schedule your carousels using a platform like Buffer, Later, or Hootsuite for optimal posting times. Fourth, track which carousels outperform your original tweets in terms of saves and shares — this gives you a feedback loop that improves both your tweeting and your carousel creation over time.</p>
              <p>The batching approach is particularly powerful because Scenith's AI generation runs in the background during the polling phase, meaning you can submit slide prompts for one carousel while downloading another. A 30-minute session can realistically produce 8–12 fully generated carousel slides across 3–4 complete carousels — enough content to keep a multi-platform posting schedule running for an entire week.</p>
            </div>
          </div>
        </section>

        {/* ── BIG CTA BLOCK ────────────────────────────────────────────────── */}
        <section className="ttc-section ttc-big-cta">
          <div className="ttc-section-inner">
            <div className="ttc-cta-block">
              <div className="ttc-cta-block-noise" aria-hidden="true" />
              <div className="ttc-cta-block-inner">
                <div className="ttc-cta-block-badge">✨ Free to Start — 50 Credits on Signup</div>
                <h2 className="ttc-cta-block-h2">
                  Ready to Turn Your Tweets<br />into Carousel Content?
                </h2>
                <p className="ttc-cta-block-sub">
                  No credit card. No design skills. No separate tool subscriptions.
                  Just your tweet, an AI model, and a click.
                </p>
                <div className="ttc-cta-block-features">
                  {[
                    "7 AI models — GPT, Imagen 4, FLUX, Grok Aurora",
                    "3-slide carousel generation in one click",
                    "Square, Portrait & Landscape formats",
                    "High-res PNG · Zero watermarks",
                    "Full commercial rights on everything",
                    "Voice & Video generation also included",
                  ].map((f) => (
                    <span key={f} className="ttc-cta-feature">
                      <span className="ttc-cta-check">✓</span> {f}
                    </span>
                  ))}
                </div>
                <a href={CTA_URL} className="ttc-cta-block-btn">
                  <span>🎠</span>
                  Generate My Tweet Carousel — Free
                  <span className="ttc-cta-arrow-lg">→</span>
                </a>
                <p className="ttc-cta-block-footnote">
                  Opens Scenith AI Content Creator · Carousel mode · No account needed to explore
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────────────── */}
        <section className="ttc-section ttc-faq">
          <div className="ttc-section-inner">
            <p className="ttc-section-label">FAQ</p>
            <h2 className="ttc-section-h2">Frequently Asked Questions</h2>
            <div className="ttc-faq-list">
              {FAQ.map((item) => (
                <details key={item.q} className="ttc-faq-item">
                  <summary className="ttc-faq-q">{item.q}</summary>
                  <div className="ttc-faq-a">{item.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── RELATED TOOLS ────────────────────────────────────────────────── */}
        <section className="ttc-section ttc-related">
          <div className="ttc-section-inner">
            <p className="ttc-section-label">More Tools</p>
            <h2 className="ttc-section-h2">More AI Content Tools by Scenith</h2>
            <div className="ttc-related-grid">
              {[
                {
                  emoji: "🎙️",
                  title: "AI Voice Generator",
                  desc: "Convert text to speech with 40+ natural voices across 20+ languages. Perfect for YouTube, podcasts, and ad scripts.",
                  href: "https://scenith.in/create-ai-content?tab=voice&utm_source=tweet-carousel-tool&utm_medium=related&utm_campaign=micro-tools",
                },
                {
                  emoji: "🖼️",
                  title: "AI Image Generator",
                  desc: "Single image generation with 7 AI models, 8 styles, and multiple aspect ratios. High-res PNG, commercial use.",
                  href: "https://scenith.in/create-ai-content?tab=image&utm_source=tweet-carousel-tool&utm_medium=related&utm_campaign=micro-tools",
                },
                {
                  emoji: "🎬",
                  title: "AI Video Generator",
                  desc: "Text-to-video and image-to-video with Kling 2.6, Veo 3.1, Wan 2.5, and Grok Imagine. Up to 1080p MP4 download.",
                  href: "https://scenith.in/create-ai-content?tab=video&utm_source=tweet-carousel-tool&utm_medium=related&utm_campaign=micro-tools",
                },
              ].map((tool) => (
                <a key={tool.title} href={tool.href} className="ttc-related-card">
                  <span className="ttc-related-emoji">{tool.emoji}</span>
                  <h3 className="ttc-related-title">{tool.title}</h3>
                  <p className="ttc-related-desc">{tool.desc}</p>
                  <span className="ttc-related-arrow">Try free →</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── FOOTER NOTE ──────────────────────────────────────────────────── */}
        <div className="ttc-footer-note">
          <p>
            Tweet to Carousel AI Generator is part of{" "}
            <a href="https://scenith.in" className="ttc-footer-link">Scenith</a>
            's suite of AI content tools. All content generated is owned by you,
            comes with full commercial rights, and is delivered without watermarks.
          </p>
        </div>

      </div>
    </>
  );
}