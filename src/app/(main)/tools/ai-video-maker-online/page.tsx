import type { Metadata } from "next";
import "./ai-video-maker-online.css";

export const metadata: Metadata = {
  title: "AI Video Maker Online Free — Generate Videos from Text & Images | Scenith",
  description:
    "Create stunning AI-generated videos online for free. Turn text prompts and images into cinematic videos using Kling 2.6, Veo 3.1, Wan 2.5, and Grok Imagine. No editing skills needed. Download MP4 instantly.",
  keywords: [
    "ai video maker online",
    "ai video generator free",
    "text to video ai",
    "ai video creator",
    "free ai video maker",
    "image to video ai",
    "ai video maker no watermark",
    "best ai video generator 2026",
    "kling ai video",
    "veo 3 video generator",
    "wan 2.5 video ai",
    "cinematic ai video",
    "ai video from text",
    "ai short video maker",
    "ai video for youtube",
    "ai video reels generator",
    "online video generator ai",
    "create video with ai",
    "ai generated video free download",
    "scenith ai video",
  ],
  openGraph: {
    title: "AI Video Maker Online Free — Cinematic Videos from Text or Image",
    description:
      "Generate professional AI videos in seconds. 6 models including Kling 2.6, Veo 3.1, Wan 2.5. Text-to-video & image-to-video. Free to start, no watermark on paid.",
    url: "https://scenith.in/tools/ai-video-maker-online",
    siteName: "Scenith",
    type: "website",
    images: [
      {
        url: "https://scenith.in/og/ai-video-maker-online.jpg",
        width: 1200,
        height: 630,
        alt: "Scenith AI Video Maker Online",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Video Maker Online Free — Scenith",
    description:
      "Turn text or images into cinematic AI videos. Kling, Veo 3.1, Wan 2.5, Grok Imagine. Free to start.",
    images: ["https://scenith.in/og/ai-video-maker-online.jpg"],
  },
  alternates: {
    canonical: "https://scenith.in/tools/ai-video-maker-online",
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

const VIDEO_MODELS = [
  {
    name: "Kling 2.6 Pro",
    badge: "🏆 Best Quality",
    desc: "Flagship cinematic output. Photorealistic motion, 1080p, perfect lighting physics. Best for commercial-grade content.",
    tags: ["1080p", "10s clips", "Cinematic"],
    color: "#6355dc",
  },
  {
    name: "Veo 3.1",
    badge: "🎬 Google's Best",
    desc: "Google DeepMind's top video model. Exceptional scene coherence, natural motion, and rich detail. Industry-leading prompt adherence.",
    tags: ["1080p", "Audio support", "Scene depth"],
    color: "#0f9d58",
  },
  {
    name: "Veo 3.1 Fast",
    badge: "⚡ Speed Pick",
    desc: "Same Google tech, 2× faster. Great for iteration and drafts when you need to preview motion before committing full credits.",
    tags: ["720p", "Fast gen", "Low cost"],
    color: "#34a853",
  },
  {
    name: "Wan 2.5",
    badge: "💡 Best Value",
    desc: "Open-source powerhouse. Excellent motion quality at the lowest credit cost. Ideal for content creators on a budget.",
    tags: ["720p", "5s / 10s", "Budget-friendly"],
    color: "#fa7c17",
  },
  {
    name: "Kling 2.5 Turbo",
    badge: "🚀 Speed + Quality",
    desc: "Kling's turbo variant — 40% faster than Pro with 85% of the quality. Great for social media clips and Reels.",
    tags: ["1080p", "Turbo speed", "Social-first"],
    color: "#8b5cf6",
  },
  {
    name: "Grok Imagine",
    badge: "🎵 Audio Included",
    desc: "xAI's video model with built-in AI audio generation. The only model that adds ambient sound and music automatically — no extra tools needed.",
    tags: ["Audio built-in", "xAI powered", "Unique sound"],
    color: "#e11d48",
  },
];

const USE_CASES = [
  {
    icon: "📱",
    title: "Instagram Reels & TikToks",
    desc: "Generate 9:16 vertical videos with cinematic motion in under 2 minutes. No camera, no editing suite, no problem.",
    cta: "Try 9:16 Video →",
  },
  {
    icon: "🎬",
    title: "YouTube Shorts & B-Roll",
    desc: "Create filler footage, intros, and visual backdrop clips for your YouTube videos without hiring a videographer.",
    cta: "Make YouTube Content →",
  },
  {
    icon: "📣",
    title: "Video Ads & Promos",
    desc: "Generate scroll-stopping video ads for Facebook, Google, and LinkedIn campaigns. Produce variations in minutes, not weeks.",
    cta: "Generate Ad Video →",
  },
  {
    icon: "🎮",
    title: "Game Trailers & Concept Art",
    desc: "Prototype cinematic sequences, cutscenes, and atmosphere reels for game pitches and Kickstarter campaigns.",
    cta: "Build Game Content →",
  },
  {
    icon: "🏫",
    title: "Educational Explainers",
    desc: "Turn any concept into a visual explainer video. Perfect for LMS platforms, school projects, and online courses.",
    cta: "Make Explainer →",
  },
  {
    icon: "🛒",
    title: "Product Demo Videos",
    desc: "Show your product in action without expensive photography. Create lifestyle and feature demo videos from a single image or prompt.",
    cta: "Demo Your Product →",
  },
];

const PROMPTS = [
  {
    label: "🌋 Volcano",
    text: "Cinematic slow-motion shot of a volcano erupting at night, lava streams glowing orange against pitch black sky, particles floating upward",
  },
  {
    label: "🌊 Bioluminescent Bay",
    text: "Drone flying over a bioluminescent ocean bay at night, each wave crashing in electric blue light, stars reflected on the water, magical and cinematic",
  },
  {
    label: "🚀 Space Launch",
    text: "Rocket launch at dusk, enormous plume of fire and smoke, rocket climbing into a deep amber sky leaving a white streak, dramatic slow motion",
  },
  {
    label: "🌆 Night City",
    text: "Slow cinematic aerial descent into neon-lit Tokyo streets at midnight, rain puddles reflecting signs, pedestrians with umbrellas",
  },
  {
    label: "🐋 Deep Ocean",
    text: "A massive blue whale gliding silently through shafts of golden light in deep ocean, schools of silver fish parting around it",
  },
  {
    label: "⚡ Supercell Storm",
    text: "Timelapse of a massive rotating supercell thunderstorm forming over flat plains, lightning striking in every direction, dark teal and purple sky",
  },
];

const FAQS = [
  {
    q: "Is the AI video maker completely free to use?",
    a: "Yes. You get 50 free credits when you create a Scenith account — no credit card required. Free credits are enough to generate 1 video with Wan 2.5 (the most credit-efficient model). Paid plans start at $9/month and include 300 credits monthly, enough for 6–10 videos per month depending on model and duration.",
  },
  {
    q: "What is the best AI video model in 2026?",
    a: "It depends on your use case. For absolute highest quality, Kling 2.6 Pro and Veo 3.1 are the top choices — both produce 1080p cinematic output with excellent motion coherence. For budget-conscious creators who need high output volume, Wan 2.5 offers the best quality-per-credit ratio. If you need AI-generated audio alongside your video, Grok Imagine is the only model that includes this natively.",
  },
  {
    q: "Can I generate videos without any technical skills?",
    a: "Absolutely. Scenith's AI Video Maker requires only a text prompt — written in plain English. You describe the scene, choose your model and settings, and the AI does the rest. No video editing, no timeline scrubbing, no rendering queues. Most users generate their first video within 3 minutes of signing up.",
  },
  {
    q: "How long does AI video generation take?",
    a: "Generation time varies by model and clip length. Wan 2.5 generates a 5-second clip in roughly 30–60 seconds. Kling 2.6 Pro takes 60–120 seconds for 10-second clips at 1080p. Veo 3.1 averages 45–90 seconds. You stay on the page and the video appears automatically when ready — no refresh needed.",
  },
  {
    q: "What aspect ratios are supported?",
    a: "All three major aspect ratios are supported: 16:9 (widescreen/YouTube), 9:16 (vertical/Reels/TikTok), and 1:1 (square/Instagram). You choose your ratio before generating, so your video is instantly optimised for your platform without any cropping or post-processing.",
  },
  {
    q: "Can I create a video from an image (image-to-video)?",
    a: "Yes. Scenith supports image-to-video generation — you upload a reference photo or illustration, write a motion prompt, and the AI animates your image into a video. This is perfect for product photography, portrait animation, concept art, and AI painting videos. You can also use images generated by Scenith's own AI Image Generator and convert them to video in one click.",
  },
  {
    q: "Do the videos have watermarks?",
    a: "Free plan videos are watermark-free but they are visible in the public gallery so other users can see what free accounts are generating. Paid plan users' videos are private and watermark-free. You own full commercial rights to everything you generate on either plan.",
  },
  {
    q: "What file format do I get when I download?",
    a: "All AI-generated videos download as MP4 files — the universal standard for video editing, social media uploads, and streaming platforms. There's no conversion needed. The file plays natively on every device, software, and platform.",
  },
  {
    q: "Can I use these videos for commercial purposes?",
    a: "Yes, full commercial rights are included with every video generated on Scenith — free or paid. You can use AI videos in client projects, YouTube monetization, advertising campaigns, product demos, social media accounts, courses, and any other commercial application.",
  },
  {
    q: "What makes Scenith different from other AI video tools like Runway, Pika, or Sora?",
    a: "Scenith integrates AI video, image, and voice generation under one login with a shared credit balance. You don't need separate subscriptions to Runway for video, Midjourney for images, and ElevenLabs for voice. Scenith also gives you access to 6 different video models — including Kling, Veo, and Wan — so you can pick the right model for your use case and budget, rather than being locked into one.",
  },
  {
    q: "Is there a limit on how many videos I can generate?",
    a: "Free accounts can generate 1 video as a lifetime trial. Paid plans are credit-based — each video costs a set number of credits depending on model, duration, and whether audio is enabled. Creator Lite ($9/mo) gives 300 credits. Pro ($29/mo) gives 1000 credits. Enterprise plans are custom. Unused credits roll over for 30 days.",
  },
  {
    q: "Does Grok Imagine really include AI audio?",
    a: "Yes — Grok Imagine by xAI is unique in that it generates an AI audio track (ambient sound, music, or contextual sound effects) alongside the video, automatically. You do not need to add audio separately. For all other models, audio is either not included or available as an optional add-on at extra credits.",
  },
];

const SCHEMA_JSON = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://scenith.in/tools/ai-video-maker-online",
      url: "https://scenith.in/tools/ai-video-maker-online",
      name: "AI Video Maker Online Free — Generate Videos from Text & Images | Scenith",
      description:
        "Create stunning AI-generated videos online for free. Turn text prompts and images into cinematic videos using Kling 2.6, Veo 3.1, Wan 2.5, and Grok Imagine.",
      isPartOf: { "@id": "https://scenith.in/#website" },
      about: { "@id": "https://scenith.in/#organization" },
      inLanguage: "en-US",
    },
    {
      "@type": "SoftwareApplication",
      name: "Scenith AI Video Maker",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Free to start. Paid plans from $9/month.",
      },
      featureList: [
        "Text-to-video generation",
        "Image-to-video generation",
        "6 AI video models including Kling, Veo, Wan",
        "1080p resolution support",
        "AI audio generation with Grok Imagine",
        "16:9, 9:16, and 1:1 aspect ratios",
        "MP4 download",
        "No watermark",
      ],
      url: "https://scenith.in/create-ai-content?tab=video&utm_source=tool-page&utm_medium=organic&utm_campaign=ai-video-maker-online",
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://scenith.in" },
        { "@type": "ListItem", position: 2, name: "Tools", item: "https://scenith.in/tools" },
        {
          "@type": "ListItem",
          position: 3,
          name: "AI Video Maker Online",
          item: "https://scenith.in/tools/ai-video-maker-online",
        },
      ],
    },
  ],
};

const CTA_URL =
  "https://scenith.in/create-ai-content?tab=video&utm_source=tool-page&utm_medium=organic&utm_campaign=ai-video-maker-online";

export default function AIVideoMakerOnlinePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_JSON) }}
      />

      <div className="avm-root">
        {/* ─── HERO ─────────────────────────────────────────────────────── */}
        <section className="avm-hero">
          <div className="avm-hero-bg" aria-hidden="true">
            <div className="avm-orb avm-orb-1" />
            <div className="avm-orb avm-orb-2" />
            <div className="avm-orb avm-orb-3" />
            <div className="avm-grid-lines" />
          </div>

          <nav className="avm-breadcrumb" aria-label="Breadcrumb">
            <ol>
              <li><a href="https://scenith.in">Scenith</a></li>
              <li aria-hidden="true">›</li>
              <li><a href="https://scenith.in/tools">Tools</a></li>
              <li aria-hidden="true">›</li>
              <li aria-current="page">AI Video Maker Online</li>
            </ol>
          </nav>

          <div className="avm-hero-inner">
            <div className="avm-badge-row">
              <span className="avm-badge">🆕 Updated 2026</span>
              <span className="avm-badge avm-badge-free">✦ Free to Start</span>
              <span className="avm-badge">6 AI Models</span>
            </div>

            <h1 className="avm-hero-h1">
              AI Video Maker
              <br />
              <span className="avm-hero-gradient">Online — Free</span>
            </h1>

            <p className="avm-hero-sub">
              Turn a text prompt or image into a cinematic video in under 2 minutes.
              Powered by Kling 2.6 Pro, Veo 3.1, Wan 2.5 & Grok Imagine.
              No editing. No camera. No experience needed.
            </p>

            {/* ─── MEGA CTA ─── */}
            <a href={CTA_URL} className="avm-mega-cta" rel="noopener">
              <span className="avm-mega-cta-icon">🎬</span>
              <span className="avm-mega-cta-text">
                <strong>Generate Your AI Video — Free</strong>
                <small>No credit card · 50 credits on signup · Download MP4</small>
              </span>
              <span className="avm-mega-cta-arrow">→</span>
            </a>

            <div className="avm-trust-row">
              <span>⭐⭐⭐⭐⭐</span>
              <span className="avm-trust-text">50,000+ videos generated · Commercial use included · No watermark</span>
            </div>

            {/* ─── Fake prompt demo (static, no JS needed) ─── */}
            <div className="avm-demo-preview" aria-hidden="true">
              <div className="avm-demo-label">📝 Sample prompt</div>
              <div className="avm-demo-prompt">
                &ldquo;Slow cinematic aerial shot descending into neon-lit Tokyo at midnight,
                rain puddles reflecting purple signs, pedestrians with umbrellas, 4K&rdquo;
              </div>
              <div className="avm-demo-arrow">↓ generates in ~60 seconds</div>
              <div className="avm-demo-result">
                <div className="avm-demo-video-mock">
                  <div className="avm-demo-scan" />
                  <span className="avm-demo-play">▶</span>
                  <span className="avm-demo-res">1080p · 16:9 · MP4</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── MODELS ────────────────────────────────────────────────────── */}
        <section className="avm-section avm-models-section">
          <div className="avm-container">
            <div className="avm-section-label">Powered by</div>
            <h2 className="avm-section-h2">
              6 World-Class AI Video Models, One Platform
            </h2>
            <p className="avm-section-sub">
              No other free tool gives you access to this range of state-of-the-art video AI.
              Pick the model that fits your use case, timeline, and budget — switch anytime.
            </p>

            <div className="avm-models-grid">
              {VIDEO_MODELS.map((m) => (
                <div className="avm-model-card" key={m.name} style={{ "--model-color": m.color } as React.CSSProperties}>
                  <div className="avm-model-badge">{m.badge}</div>
                  <h3 className="avm-model-name">{m.name}</h3>
                  <p className="avm-model-desc">{m.desc}</p>
                  <div className="avm-model-tags">
                    {m.tags.map((t) => (
                      <span key={t} className="avm-model-tag">{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="avm-cta-center">
              <a href={CTA_URL} className="avm-cta-btn" rel="noopener">
                Try All Models Free →
              </a>
            </div>
          </div>
        </section>

        {/* ─── HOW IT WORKS ─────────────────────────────────────────────── */}
        <section className="avm-section avm-how-section">
          <div className="avm-container">
            <div className="avm-section-label">Simple as 1-2-3</div>
            <h2 className="avm-section-h2">How to Make an AI Video Online</h2>
            <p className="avm-section-sub">
              From blank page to downloadable MP4 video in three steps. No prior experience, no
              software installation, no rendering waits longer than 2 minutes.
            </p>

            <div className="avm-steps">
              <div className="avm-step">
                <div className="avm-step-num">01</div>
                <div className="avm-step-content">
                  <h3>Write your video prompt</h3>
                  <p>
                    Describe the scene you want to create in plain English. Include the setting,
                    mood, lighting, camera movement, and subject. The more specific you are, the
                    closer your result will be to your vision. Use our built-in prompt chips for
                    instant inspiration if you&apos;re just getting started.
                  </p>
                  <div className="avm-step-tip">
                    💡 <strong>Pro tip:</strong> Start with camera movement. &ldquo;Slow cinematic pan across&hellip;&rdquo;
                    or &ldquo;Aerial drone descending into&hellip;&rdquo; instantly improves output quality.
                  </div>
                </div>
              </div>

              <div className="avm-step">
                <div className="avm-step-num">02</div>
                <div className="avm-step-content">
                  <h3>Choose your model, aspect ratio & duration</h3>
                  <p>
                    Select from 6 AI video models. Choose 16:9 for YouTube or landscape viewing,
                    9:16 for Reels and TikTok, or 1:1 for Instagram square posts. Set duration
                    to 5 or 10 seconds. Optionally enable AI audio for Grok Imagine — the only
                    model that generates a full ambient soundtrack alongside your video.
                  </p>
                  <div className="avm-step-tip">
                    💡 <strong>Pro tip:</strong> For fast social media drafts use Wan 2.5 or Kling Turbo.
                    For final delivery, upgrade to Kling 2.6 Pro or Veo 3.1.
                  </div>
                </div>
              </div>

              <div className="avm-step">
                <div className="avm-step-num">03</div>
                <div className="avm-step-content">
                  <h3>Generate, preview, and download MP4</h3>
                  <p>
                    Hit Generate. Your video renders in 30–120 seconds depending on model and settings.
                    Preview directly in the browser with autoplay. Download your MP4 with one click —
                    ready for editing, uploading, or sharing immediately. No conversion needed.
                  </p>
                  <div className="avm-step-tip">
                    💡 <strong>Pro tip:</strong> Not satisfied? Tweak the prompt and regenerate.
                    Most users get a great result within 2–3 iterations.
                  </div>
                </div>
              </div>
            </div>

            <div className="avm-cta-center">
              <a href={CTA_URL} className="avm-cta-btn" rel="noopener">
                🎬 Start Making Videos Now →
              </a>
            </div>
          </div>
        </section>

        {/* ─── PROMPT IDEAS ────────────────────────────────────────────── */}
        <section className="avm-section avm-prompts-section">
          <div className="avm-container">
            <div className="avm-section-label">Get Inspired</div>
            <h2 className="avm-section-h2">
              Prompt Ideas to Get You Started
            </h2>
            <p className="avm-section-sub">
              These prompts generate stunning results across all our video models.
              Copy any one to the generator and watch it come to life.
            </p>

            <div className="avm-prompts-grid">
              {PROMPTS.map((p) => (
                <div className="avm-prompt-card" key={p.label}>
                  <div className="avm-prompt-label">{p.label}</div>
                  <p className="avm-prompt-text">&ldquo;{p.text}&rdquo;</p>
                  <a href={CTA_URL} className="avm-prompt-try" rel="noopener">
                    Try this prompt →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── USE CASES ───────────────────────────────────────────────── */}
        <section className="avm-section avm-usecase-section">
          <div className="avm-container">
            <div className="avm-section-label">Who Is This For?</div>
            <h2 className="avm-section-h2">
              Built for Every Creator, Marketer & Business
            </h2>
            <p className="avm-section-sub">
              Whether you&apos;re a solo content creator or a full agency team, Scenith&apos;s AI video
              maker eliminates the time, cost, and skill barrier of traditional video production.
            </p>

            <div className="avm-uc-grid">
              {USE_CASES.map((uc) => (
                <div className="avm-uc-card" key={uc.title}>
                  <div className="avm-uc-icon">{uc.icon}</div>
                  <h3 className="avm-uc-title">{uc.title}</h3>
                  <p className="avm-uc-desc">{uc.desc}</p>
                  <a href={CTA_URL} className="avm-uc-cta" rel="noopener">{uc.cta}</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── IMAGE TO VIDEO ──────────────────────────────────────────── */}
        <section className="avm-section avm-i2v-section">
          <div className="avm-container">
            <div className="avm-i2v-split">
              <div className="avm-i2v-content">
                <div className="avm-section-label">Image to Video</div>
                <h2 className="avm-i2v-h2">
                  Animate Any Photo or AI Image into a Cinematic Video
                </h2>
                <p>
                  Upload a still photograph, product image, AI-generated illustration, or any
                  JPEG/PNG file. Add a motion prompt — describe how you want the scene to move.
                  Our image-to-video AI will animate your image into a fluid, cinematic video clip
                  with realistic physics, lighting, and motion.
                </p>
                <p>
                  This is particularly powerful for e-commerce product videos, portrait
                  animations, landscape cinemagraphs, and converting Midjourney or Stable
                  Diffusion images into motion content for social media.
                </p>
                <ul className="avm-i2v-list">
                  <li>✦ Upload any JPEG or PNG (up to 10MB)</li>
                  <li>✦ Write a motion direction prompt</li>
                  <li>✦ Compatible with Kling, Wan, Stability AI modes</li>
                  <li>✦ AI-generated images from Scenith convert in one click</li>
                  <li>✦ 5s or 10s output, 16:9 / 9:16 / 1:1 aspect ratio</li>
                </ul>
                <a href={CTA_URL} className="avm-cta-btn" rel="noopener">
                  Animate Your Image Free →
                </a>
              </div>

              <div className="avm-i2v-visual" aria-hidden="true">
                <div className="avm-i2v-card avm-i2v-card-back">
                  <div className="avm-i2v-img-mock">
                    <div className="avm-i2v-img-label">📷 Your image</div>
                  </div>
                </div>
                <div className="avm-i2v-card avm-i2v-card-front">
                  <div className="avm-i2v-video-mock">
                    <div className="avm-i2v-scan" />
                    <div className="avm-i2v-play">▶</div>
                    <div className="avm-i2v-video-label">🎬 Your animated video</div>
                  </div>
                </div>
                <div className="avm-i2v-arrow-badge">→ AI animates</div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── COMPARISON ──────────────────────────────────────────────── */}
        <section className="avm-section avm-compare-section">
          <div className="avm-container">
            <div className="avm-section-label">Why Scenith?</div>
            <h2 className="avm-section-h2">
              Scenith vs Runway, Pika, Sora & Other AI Video Tools in 2026
            </h2>
            <p className="avm-section-sub">
              Honest breakdown. We're not the only AI video tool — but we believe we offer
              the best combination of model selection, value, and integrated workflow in 2026.
            </p>

            <div className="avm-compare-table-wrap">
              <table className="avm-compare-table">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th className="avm-compare-us">Scenith ✦</th>
                    <th>Runway</th>
                    <th>Pika</th>
                    <th>Sora (OpenAI)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Free tier available</td>
                    <td className="avm-compare-us">✅ 50 free credits</td>
                    <td>✅ Limited</td>
                    <td>✅ Limited</td>
                    <td>❌ Paid only</td>
                  </tr>
                  <tr>
                    <td>Number of video models</td>
                    <td className="avm-compare-us">✅ 6 models</td>
                    <td>1 (Gen-3)</td>
                    <td>1 (Pika 2.0)</td>
                    <td>1 (Sora)</td>
                  </tr>
                  <tr>
                    <td>Starting price/month</td>
                    <td className="avm-compare-us">✅ $9/mo</td>
                    <td>$15/mo</td>
                    <td>$8/mo</td>
                    <td>$20/mo</td>
                  </tr>
                  <tr>
                    <td>Image-to-video</td>
                    <td className="avm-compare-us">✅ Yes</td>
                    <td>✅ Yes</td>
                    <td>✅ Yes</td>
                    <td>✅ Yes</td>
                  </tr>
                  <tr>
                    <td>Built-in AI audio</td>
                    <td className="avm-compare-us">✅ Grok Imagine</td>
                    <td>❌ No</td>
                    <td>❌ No</td>
                    <td>❌ No</td>
                  </tr>
                  <tr>
                    <td>Integrated AI image gen</td>
                    <td className="avm-compare-us">✅ 7 image models</td>
                    <td>❌ No</td>
                    <td>❌ No</td>
                    <td>❌ No</td>
                  </tr>
                  <tr>
                    <td>AI voice / TTS included</td>
                    <td className="avm-compare-us">✅ 40+ voices</td>
                    <td>❌ No</td>
                    <td>❌ No</td>
                    <td>❌ No</td>
                  </tr>
                  <tr>
                    <td>Commercial rights</td>
                    <td className="avm-compare-us">✅ All plans</td>
                    <td>⚠️ Paid only</td>
                    <td>✅ Yes</td>
                    <td>✅ Yes</td>
                  </tr>
                  <tr>
                    <td>Max resolution</td>
                    <td className="avm-compare-us">✅ 1080p</td>
                    <td>✅ 1080p</td>
                    <td>✅ 1080p</td>
                    <td>✅ 1080p</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="avm-compare-note">
              * Comparison data based on publicly available plan information as of Q1 2026. Subject to change.
            </p>

            <div className="avm-cta-center">
              <a href={CTA_URL} className="avm-cta-btn" rel="noopener">
                Try Scenith Free — No Card Needed →
              </a>
            </div>
          </div>
        </section>

        {/* ─── DEEP CONTENT / GUIDE ────────────────────────────────────── */}
        <section className="avm-section avm-guide-section">
          <div className="avm-container avm-guide-container">
            <div className="avm-section-label">Complete Guide</div>
            <h2 className="avm-section-h2">
              The 2026 Guide to AI Video Generation: Everything You Need to Know
            </h2>

            <div className="avm-guide-body">

              <h3>What is AI Video Generation?</h3>
              <p>
                AI video generation is the process of creating video content using artificial intelligence
                models that have been trained on massive datasets of video footage, images, and text.
                These models learn the visual patterns of how the world looks and moves — from the way
                water ripples on a lake to how a neon sign reflects off a wet street — and then use that
                knowledge to synthesise entirely new video footage from a text description or a reference image.
              </p>
              <p>
                The technology has advanced dramatically from 2023 to 2026. Early models produced shaky,
                low-resolution clips that looked obviously artificial. Today&apos;s leading models — Kling 2.6 Pro,
                Veo 3.1, and Wan 2.5 — routinely produce footage that, in many scenarios, is indistinguishable
                from real camera work. This has fundamentally changed the economics of video production for
                businesses, creators, and educators.
              </p>

              <h3>Text-to-Video vs Image-to-Video: Which Should You Use?</h3>
              <p>
                <strong>Text-to-video</strong> is best when you want to create a scene from scratch. You describe
                the environment, lighting, camera angle, and motion in your prompt. The AI synthesises the entire
                scene. This is ideal for landscapes, abstract visuals, cinematic establishing shots, timelapse
                effects, and creative artistic sequences.
              </p>
              <p>
                <strong>Image-to-video</strong> is best when you already have a specific visual — a product photo,
                a portrait, an AI-generated illustration, or a real photograph — and want to animate it. The AI
                uses your image as the first frame and generates a motion sequence forward in time. This is
                perfect for product demo videos, portrait animations, lifestyle content, and bringing AI-generated
                art to life.
              </p>
              <p>
                A common workflow in 2026 is to use an AI image generator first (such as GPT Image 1, Imagen 4,
                or Grok Aurora on Scenith) to create exactly the visual composition you want, and then feed that
                image into the video generator to animate it. This gives you precise control over composition
                before the motion is added.
              </p>

              <h3>How to Write Great AI Video Prompts</h3>
              <p>
                Prompt quality is the single biggest factor in the quality of your AI video output. Here are
                the principles used by professional prompt engineers to get consistent, cinematic results:
              </p>
              <p>
                <strong>1. Lead with camera movement.</strong> AI video models respond very well to explicit
                camera direction. Starting your prompt with &ldquo;Slow cinematic pan&rdquo;, &ldquo;Aerial drone descending&rdquo;,
                &ldquo;Close-up tracking shot&rdquo;, or &ldquo;Handheld documentary style&rdquo; sets the visual language for the
                entire clip before the model has to infer anything else.
              </p>
              <p>
                <strong>2. Specify lighting and atmosphere.</strong> Lighting is the difference between a flat,
                generic-looking clip and a cinematic one. Use lighting language: &ldquo;golden hour backlit&rdquo;,
                &ldquo;dramatic side lighting&rdquo;, &ldquo;bioluminescent glow&rdquo;, &ldquo;neon-lit reflections on rain&rdquo;,
                &ldquo;overcast diffused light&rdquo;. These terms directly influence the model&apos;s output.
              </p>
              <p>
                <strong>3. Define the subject with precision.</strong> Vague subjects produce generic output.
                &ldquo;A woman&rdquo; is far less effective than &ldquo;A woman in a silk blue dress standing at the edge
                of a cliff overlooking the ocean at dusk, hair flowing in the wind&rdquo;. Detail = control.
              </p>
              <p>
                <strong>4. End with quality qualifiers.</strong> Adding &ldquo;4K ultra-detailed&rdquo;, &ldquo;cinematic
                film grain&rdquo;, &ldquo;photorealistic&rdquo;, &ldquo;slow motion&rdquo;, or &ldquo;8mm film aesthetic&rdquo; at the end of
                your prompt acts as a style filter that improves output consistency across all models.
              </p>
              <p>
                <strong>5. Avoid conflicting instructions.</strong> Don&apos;t ask for &ldquo;fast and slow motion&rdquo; in the
                same prompt. Don&apos;t combine incompatible aesthetics like &ldquo;hyperrealistic cyberpunk watercolour&rdquo;
                without understanding that models may struggle to resolve the contradiction.
              </p>

              <h3>Which AI Video Model Should You Choose in 2026?</h3>
              <p>
                <strong>Kling 2.6 Pro</strong> is the benchmark for quality. If you need the best-looking
                result and credits are not a constraint, Kling 2.6 Pro is almost always the right choice.
                It excels at complex scenes with multiple moving elements, accurate physics (fluid, smoke,
                fabric), and consistent subject identity across the clip.
              </p>
              <p>
                <strong>Veo 3.1</strong> from Google DeepMind is the strongest competitor to Kling for
                cinematic quality. It has exceptional prompt adherence — meaning it follows complex
                descriptions more accurately than most models — and its motion tends to look more natural
                for human subjects and organic environments.
              </p>
              <p>
                <strong>Wan 2.5</strong> remains the gold standard for value. Open-source at its core, it
                has been fine-tuned for hosted API delivery and produces 720p results that look genuinely
                impressive for social media use. At roughly 46 credits per 5-second clip, it&apos;s the most
                efficient way to generate high volume content on a limited budget.
              </p>
              <p>
                <strong>Grok Imagine</strong> by xAI has a unique position: it is the only model in the
                ecosystem that natively generates audio alongside the video. If your use case involves
                ambient sound, atmospheric music, or contextual sound effects baked into the clip, Grok
                Imagine is the only model that delivers this without a separate audio post-production step.
              </p>

              <h3>AI Video for Business: Real ROI in 2026</h3>
              <p>
                The commercial case for AI video generation has become overwhelming in 2026. Traditional
                video production for a 30-second brand clip can cost $2,000–$20,000+ depending on the
                production company, actors, equipment, and location. AI video reduces this to a handful of
                credits — $1–$5 per clip on most plans.
              </p>
              <p>
                The applications are vast. E-commerce brands use AI video to generate product lifestyle
                content at scale — dozens of variations per product for A/B testing in paid ads. Marketing
                agencies use it to rapidly prototype video ad concepts for client approval before committing
                to a full shoot. SaaS companies use AI video for product demo clips embedded in landing
                pages and email campaigns. Course creators use it for B-roll footage and visual chapter
                introductions in their e-learning modules.
              </p>
              <p>
                The critical insight for businesses in 2026 is that AI video doesn&apos;t replace professional
                production — it fills the vast middle ground of content that previously wasn&apos;t produced
                at all because the cost was too high. Social media demands 15–30 pieces of video content
                per month for consistent growth. AI video makes that feasible for solo operators and
                small teams.
              </p>

              <h3>AI Video for Content Creators: Faceless YouTube, Reels & More</h3>
              <p>
                The faceless YouTube channel model has been validated at scale by 2026. Channels in niches
                like nature documentaries, historical retrospectives, financial news, and tech commentary
                routinely generate six-figure annual revenues using AI voice narration layered over AI
                video footage — with zero on-camera presence from the creator.
              </p>
              <p>
                Scenith is particularly effective for this workflow because it combines AI voice, image,
                and video generation in a single platform. A creator can write a script, generate a
                voiceover (choosing from 40+ voices across Google, OpenAI, and Azure providers), generate
                visual B-roll footage from prompts, and assemble everything in a video editor — all without
                leaving the Scenith ecosystem.
              </p>
              <p>
                For Instagram Reels and TikTok, the 9:16 aspect ratio and 5–10 second clip length are
                native to how AI video models work, which makes AI-generated content uniquely suited to
                short-form vertical video — arguably the dominant content format of 2026.
              </p>

              <h3>Ethical Use of AI Video in 2026</h3>
              <p>
                As AI video generation becomes more accessible, the ethical responsibilities of creators
                and businesses become more important. Scenith&apos;s terms of service prohibit the use of
                generated video to deceive, defame, impersonate real individuals, or create content that
                could be used to spread misinformation.
              </p>
              <p>
                Best practices for ethical AI video use include: clearly labelling AI-generated content
                when used in news or documentary contexts; avoiding the generation of video that depicts
                real, identifiable individuals without consent; and being transparent with audiences when
                AI footage is used in advertising or branded content.
              </p>
              <p>
                Used responsibly, AI video is a genuinely democratising technology — it gives independent
                creators and small businesses the ability to produce content that was previously only
                accessible to well-funded productions. That is, fundamentally, a positive development for
                creative culture.
              </p>

            </div>
          </div>
        </section>

        {/* ─── FAQ ─────────────────────────────────────────────────────── */}
        <section className="avm-section avm-faq-section">
          <div className="avm-container">
            <div className="avm-section-label">FAQ</div>
            <h2 className="avm-section-h2">
              Frequently Asked Questions About AI Video Generation
            </h2>

            <div className="avm-faq-list">
              {FAQS.map((faq, i) => (
                <details className="avm-faq-item" key={i}>
                  <summary className="avm-faq-q">{faq.q}</summary>
                  <div className="avm-faq-a">{faq.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FINAL CTA ───────────────────────────────────────────────── */}
        <section className="avm-section avm-final-cta-section">
          <div className="avm-container">
            <div className="avm-final-cta-inner">
              <div className="avm-final-orb" aria-hidden="true" />
              <h2 className="avm-final-h2">
                Your first AI video is one click away.
              </h2>
              <p className="avm-final-sub">
                Free account. 50 credits on signup. No credit card. Download your MP4 in minutes.
              </p>
              <a href={CTA_URL} className="avm-mega-cta avm-final-cta-btn" rel="noopener">
                <span className="avm-mega-cta-icon">🎬</span>
                <span className="avm-mega-cta-text">
                  <strong>Generate AI Video Free Now</strong>
                  <small>Kling · Veo · Wan · Grok · 1080p · MP4 · Commercial use</small>
                </span>
                <span className="avm-mega-cta-arrow">→</span>
              </a>
              <div className="avm-final-links">
                <a href="https://scenith.in/tools/ai-image-generator-free">🖼️ AI Image Generator</a>
                <span>·</span>
                <a href="https://scenith.in/tools/ai-voice-generator-online">🎙️ AI Voice Generator</a>
                <span>·</span>
                <a href="https://scenith.in/pricing">💳 View Pricing</a>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}