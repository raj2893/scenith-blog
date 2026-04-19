import type { Metadata } from "next";
import "./ai-short-video-generator.css";

export const metadata: Metadata = {
  title: "AI Short Video Generator — Create Viral Short Videos in Seconds | Scenith",
  description:
    "Generate cinematic AI short videos from text prompts in seconds. Use Kling 2.6 Pro, Veo 3.1, Wan 2.5 & Grok Imagine to create viral Reels, Shorts & TikToks. No editing skills needed — free to start.",
  keywords: [
    "AI short video generator",
    "AI video generator free",
    "text to video AI",
    "generate short videos with AI",
    "AI Reels generator",
    "AI YouTube Shorts generator",
    "AI TikTok video generator",
    "free AI video maker",
    "Kling AI video",
    "Veo 3 video generator",
    "Wan 2.5 video AI",
    "cinematic AI video",
    "AI video from text",
    "short video AI tool 2026",
    "ai video generator no watermark",
  ],
  alternates: {
    canonical: "https://scenith.in/tools/ai-short-video-generator",
  },
  openGraph: {
    title: "AI Short Video Generator — Create Viral Short Videos in Seconds",
    description:
      "Turn any text prompt into a cinematic AI short video using Kling, Veo 3.1, Wan 2.5 and more. Perfect for Reels, Shorts & TikTok. Free to start.",
    url: "https://scenith.in/tools/ai-short-video-generator",
    siteName: "Scenith",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Short Video Generator — Create Viral Short Videos in Seconds",
    description:
      "Turn any text prompt into a cinematic short video in 30–120 seconds. Powered by Kling 2.6, Veo 3.1, Wan 2.5 & Grok Imagine.",
  },
};

const MODELS = [
  {
    name: "Kling 2.6 Pro",
    tag: "Highest Quality",
    emoji: "🏆",
    desc: "Cinematic motion, 1080p, up to 10s. Best for premium content creators and ad agencies.",
    badge: "PRO",
    color: "#7c3aed",
  },
  {
    name: "Veo 3.1 by Google",
    tag: "With Native Audio",
    emoji: "🔊",
    desc: "Google's flagship model. Generates AI video + synchronized audio in one shot. Stunning realism.",
    badge: "NEW",
    color: "#059669",
  },
  {
    name: "Wan 2.5",
    tag: "Best Value",
    emoji: "⚡",
    desc: "Fast, reliable, cinematic. Available in 480p / 720p / 1080p. Best credits-per-quality ratio.",
    badge: "FAST",
    color: "#d97706",
  },
  {
    name: "Kling 2.5 Turbo",
    tag: "Speed Mode",
    emoji: "🚀",
    desc: "Rapid generation with excellent motion quality. Ideal for high-volume content workflows.",
    badge: "TURBO",
    color: "#dc2626",
  },
  {
    name: "Grok Imagine",
    tag: "AI Audio Built-In",
    emoji: "🎵",
    desc: "xAI's video model with built-in audio generation. Unique cinematic style with natural soundscapes.",
    badge: "AUDIO",
    color: "#7c3aed",
  },
  {
    name: "Veo 3.1 Fast",
    tag: "Quick Mode",
    emoji: "💨",
    desc: "Same Veo 3.1 quality at 2x the speed. Ideal when you need great videos without the wait.",
    badge: "FAST",
    color: "#0284c7",
  },
];

const USE_CASES = [
  {
    icon: "📱",
    title: "Instagram Reels & TikTok",
    desc: "Generate attention-grabbing 9:16 vertical short videos optimized for mobile feeds. Hook viewers in the first 3 seconds with cinematic AI motion that stands out in any scroll.",
  },
  {
    icon: "▶️",
    title: "YouTube Shorts",
    desc: "Create engaging 60-second content for the Shorts feed without a camera, crew, or editing timeline. One prompt = one upload-ready Short.",
  },
  {
    icon: "🎬",
    title: "Product Showcase Videos",
    desc: "Bring your product to life with dramatic AI video — rotating shots, atmospheric lighting, slow-motion reveals. Perfect for e-commerce brands and D2C startups.",
  },
  {
    icon: "📣",
    title: "Ad Creatives & Paid Media",
    desc: "Test more video ad creatives than ever before at a fraction of production cost. Generate 10+ variations of a concept in the time it takes to film one.",
  },
  {
    icon: "🌍",
    title: "Travel & Lifestyle Content",
    desc: "Generate cinematic travel b-roll, aerial drone footage style, and atmospheric destination videos without leaving your desk.",
  },
  {
    icon: "🎓",
    title: "Educational & Explainer Videos",
    desc: "Visualize abstract concepts, historical events, and scientific phenomena as stunning video clips to embed in courses, slides, and articles.",
  },
  {
    icon: "🕹️",
    title: "Game Trailers & Concept Art Motion",
    desc: "Turn your game's concept art into animated cinematic trailers. Epic fantasy, sci-fi, and action styles all supported.",
  },
  {
    icon: "🏠",
    title: "Real Estate & Architecture",
    desc: "Produce atmospheric walkthroughs, exterior golden-hour reveals, and neighborhood ambience videos — no videographer needed.",
  },
];

const TIPS = [
  {
    n: "01",
    title: "Lead with the camera movement",
    tip: `Instead of "a forest", write "slow aerial drone descending through a misty forest at golden hour". Camera direction is the single biggest quality lever in AI video prompts.`,
  },
  {
    n: "02",
    title: "Specify lighting explicitly",
    tip: `Add "dramatic side lighting", "golden hour", "neon-lit", or "soft diffused light" to every prompt. Lighting defines mood — the AI responds extremely well to lighting keywords.`,
  },
  {
    n: "03",
    title: "Use film & cinematography vocabulary",
    tip: `Words like "cinematic wide shot", "close-up", "slow motion", "timelapse", "rack focus", and "bokeh" dramatically improve output quality because these models were trained on film data.`,
  },
  {
    n: "04",
    title: "Add atmospheric details",
    tip: `"Rain-soaked streets", "fog rolling between trees", "sparks flying", "cherry blossoms swirling" — the more specific the environmental detail, the more vivid the output.`,
  },
  {
    n: "05",
    title: "Match model to content type",
    tip: `Wan 2.5 for nature and landscapes. Kling 2.6 for human motion and product shots. Veo 3.1 for realistic scenes needing audio. Grok Imagine for stylized artistic pieces.`,
  },
  {
    n: "06",
    title: "Use Image-to-Video for control",
    tip: `Generate an AI image of your exact scene first, then feed it into Image-to-Video mode. This gives you full control over the starting frame before the AI animates it.`,
  },
];

const FAQS = [
  {
    q: "Is Scenith's AI short video generator free?",
    a: "Yes — you get 50 free credits when you sign up, no credit card required. A 5-second Wan 2.5 video at 480p costs 46 credits, so you can generate your first video for free. Paid plans start at just ₹50 / $1.",
  },
  {
    q: "What is the maximum video length I can generate?",
    a: "Most models support up to 10 seconds per generation. Veo 3.1 supports 4s and 8s clips. You can chain multiple clips together in a video editor for longer sequences. 5–10 seconds is also the optimal length for Reels, Shorts, and TikTok hooks.",
  },
  {
    q: "Which AI model is best for short video content?",
    a: "For Reels and TikTok: Kling 2.6 Pro at 9:16 aspect ratio for the highest quality. For fast iteration: Wan 2.5 or Kling 2.5 Turbo. For content needing background audio: Veo 3.1 or Grok Imagine. For budget-friendly cinematic output: Wan 2.5 at 720p.",
  },
  {
    q: "Does the AI video generator support vertical (9:16) aspect ratio for Reels?",
    a: "Yes. All models support 9:16 (portrait), 16:9 (landscape), and 1:1 (square) aspect ratios. For Instagram Reels, TikTok, and YouTube Shorts, always select 9:16.",
  },
  {
    q: "Can I generate a video from an image?",
    a: "Absolutely. Upload any image as a starting frame and the AI will animate it into a short video. This Image-to-Video feature is available for all supported models and gives you precise control over the opening visual.",
  },
  {
    q: "Are there watermarks on generated videos?",
    a: "No. Scenith does not add watermarks to any generated content. All videos download as clean MP4 files ready for publishing.",
  },
  {
    q: "Can I use the AI-generated videos commercially?",
    a: "Yes. All content generated on Scenith includes full commercial rights. Use your videos in ads, client deliverables, YouTube monetization, social media campaigns, and any commercial project.",
  },
  {
    q: "How long does AI video generation take?",
    a: "Wan 2.5 at 480p/5s: ~30–45 seconds. Kling 2.5 Turbo/5s: ~45–60 seconds. Kling 2.6 Pro/5s: ~60–90 seconds. Veo 3.1/8s: ~90–120 seconds. All jobs run in the background — you can stay on the page and your video will appear when ready.",
  },
  {
    q: "What resolution are the generated videos?",
    a: "Wan 2.5 supports 480p, 720p, and 1080p. Kling 2.5 Turbo and 2.6 Pro generate at 1080p. Veo 3.1 outputs at 1080p with AI audio. Grok Imagine generates at 480p or 720p. All output as standard MP4.",
  },
  {
    q: "Do any models generate video with sound?",
    a: "Yes. Veo 3.1 and Veo 3.1 Fast include synchronized AI audio generation. Grok Imagine always includes AI-generated ambient audio. Kling 2.6 Pro has an optional audio toggle. All other models generate silent video that you can score separately.",
  },
  {
    q: "Can I add subtitles to my AI-generated video?",
    a: "Yes — Scenith has a dedicated subtitle tool. After generating your video, you'll see an 'Add Subtitles' button that takes you directly to the subtitle editor. Perfect for making Reels and Shorts accessible.",
  },
  {
    q: "Is there a prompt template or suggestions feature?",
    a: "Yes. The generator includes pre-built cinematic prompts across categories: nature, sci-fi, product shots, street stories, time-lapses, abstract motion art, and more. Use them as starting points and customize from there.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://scenith.in/tools/ai-short-video-generator",
      url: "https://scenith.in/tools/ai-short-video-generator",
      name: "AI Short Video Generator — Create Viral Short Videos in Seconds | Scenith",
      description:
        "Generate cinematic AI short videos from text prompts using Kling 2.6, Veo 3.1, Wan 2.5 & Grok. Perfect for Reels, Shorts & TikTok.",
      inLanguage: "en-US",
      isPartOf: { "@id": "https://scenith.in" },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://scenith.in/og/ai-short-video-generator.jpg",
      },
    },
    {
      "@type": "SoftwareApplication",
      name: "Scenith AI Short Video Generator",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "50 free credits on signup",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "1240",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://scenith.in",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Tools",
          item: "https://scenith.in/tools",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "AI Short Video Generator",
          item: "https://scenith.in/tools/ai-short-video-generator",
        },
      ],
    },
  ],
};

export default function AIShortVideoGeneratorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="asvg-root">
        {/* ── HERO ── */}
        <section className="asvg-hero">
          <div className="asvg-hero-noise" aria-hidden="true" />
          <div className="asvg-hero-glow asvg-hero-glow--1" aria-hidden="true" />
          <div className="asvg-hero-glow asvg-hero-glow--2" aria-hidden="true" />

          <div className="asvg-hero-inner">
            <div className="asvg-eyebrow">
              <span className="asvg-eyebrow-dot" />
              Powered by Kling · Veo 3.1 · Wan 2.5 · Grok Imagine
            </div>

            <h1 className="asvg-hero-h1">
              AI Short Video Generator
              <span className="asvg-hero-h1-accent">
                {" "}That Actually Goes Viral
              </span>
            </h1>

            <p className="asvg-hero-desc">
              Turn any text prompt into a cinematic short video in 30–120 seconds.
              No camera. No editor. No agency. Just a prompt — and a video ready
              to upload to Reels, Shorts, or TikTok.
            </p>

            <div className="asvg-hero-stats">
              <div className="asvg-stat">
                <strong>6</strong>
                <span>AI Video Models</span>
              </div>
              <div className="asvg-stat-divider" />
              <div className="asvg-stat">
                <strong>1080p</strong>
                <span>Max Resolution</span>
              </div>
              <div className="asvg-stat-divider" />
              <div className="asvg-stat">
                <strong>10s</strong>
                <span>Max Duration</span>
              </div>
              <div className="asvg-stat-divider" />
              <div className="asvg-stat">
                <strong>3</strong>
                <span>Aspect Ratios</span>
              </div>
            </div>

            {/* ── MAIN CTA ── */}
            <a
              href="https://scenith.in/create-ai-content?tab=video&utm_source=tool_page&utm_medium=cta_hero&utm_campaign=ai_short_video_generator"
              className="asvg-cta-primary"
            >
              <span className="asvg-cta-icon">🎬</span>
              Generate Your First AI Video — Free
              <span className="asvg-cta-arrow">→</span>
            </a>
            <p className="asvg-cta-sub">
              No credit card · 50 free credits on signup · Commercial rights included
            </p>
          </div>

          {/* Film strip decoration */}
          <div className="asvg-filmstrip" aria-hidden="true">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="asvg-filmstrip-frame">
                <div className="asvg-filmstrip-hole asvg-filmstrip-hole--t" />
                <div className="asvg-filmstrip-hole asvg-filmstrip-hole--b" />
              </div>
            ))}
          </div>
        </section>

        {/* ── WHAT IS IT ── */}
        <section className="asvg-section asvg-section--what">
          <div className="asvg-container">
            <div className="asvg-what-grid">
              <div className="asvg-what-text">
                <h2 className="asvg-section-h2">
                  What is an AI Short Video Generator?
                </h2>
                <p>
                  An AI short video generator is a tool that converts plain-text descriptions
                  (called "prompts") into fully rendered video clips — complete with motion,
                  lighting, atmosphere, and in some models, synchronized audio. You don't
                  need a camera, a green screen, video editing software, or any filmmaking
                  knowledge.
                </p>
                <p>
                  In 2026, AI video generation has crossed a threshold where outputs are
                  genuinely indistinguishable from stock footage for many use cases. Models
                  like <strong>Kling 2.6 Pro</strong>, <strong>Veo 3.1 by Google</strong>,
                  and <strong>Wan 2.5</strong> can produce cinematic 1080p footage that
                  would have taken a professional crew days to produce — in under two minutes.
                </p>
                <p>
                  Scenith's AI Short Video Generator brings all of these models under one
                  roof, with a unified credit system, prompt suggestions, and direct MP4
                  downloads. No watermarks. No subscriptions per model. One platform,
                  every model.
                </p>
              </div>
              <div className="asvg-what-visual">
                <div className="asvg-terminal">
                  <div className="asvg-terminal-bar">
                    <span /><span /><span />
                  </div>
                  <div className="asvg-terminal-body">
                    <div className="asvg-terminal-line asvg-terminal-line--comment">// Your prompt</div>
                    <div className="asvg-terminal-line">
                      <span className="asvg-t-key">prompt</span>
                      <span className="asvg-t-eq"> = </span>
                      <span className="asvg-t-str">"Aerial drone descending into neon-lit Tokyo at midnight, rain-soaked streets, cinematic 4K"</span>
                    </div>
                    <div className="asvg-terminal-line">
                      <span className="asvg-t-key">model</span>
                      <span className="asvg-t-eq"> = </span>
                      <span className="asvg-t-val">Kling 2.6 Pro</span>
                    </div>
                    <div className="asvg-terminal-line">
                      <span className="asvg-t-key">resolution</span>
                      <span className="asvg-t-eq"> = </span>
                      <span className="asvg-t-val">1080p</span>
                    </div>
                    <div className="asvg-terminal-line">
                      <span className="asvg-t-key">aspect</span>
                      <span className="asvg-t-eq"> = </span>
                      <span className="asvg-t-val">9:16</span>
                    </div>
                    <div className="asvg-terminal-line asvg-terminal-line--comment">// 60 seconds later…</div>
                    <div className="asvg-terminal-line asvg-terminal-result">
                      ✓ video.mp4 ready — 1080p · 10s · no watermark
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── MODELS ── */}
        <section className="asvg-section asvg-section--models">
          <div className="asvg-container">
            <div className="asvg-section-header">
              <h2 className="asvg-section-h2">6 AI Video Models. One Platform.</h2>
              <p className="asvg-section-sub">
                Each model has a different strength. Pick the right one for your content type
                — or try all of them with the same prompt to compare.
              </p>
            </div>
            <div className="asvg-models-grid">
              {MODELS.map((m) => (
                <div className="asvg-model-card" key={m.name}>
                  <div className="asvg-model-top">
                    <span className="asvg-model-emoji">{m.emoji}</span>
                    <span
                      className="asvg-model-badge"
                      style={{ background: m.color + "22", color: m.color, borderColor: m.color + "44" }}
                    >
                      {m.badge}
                    </span>
                  </div>
                  <h3 className="asvg-model-name">{m.name}</h3>
                  <p className="asvg-model-tag">{m.tag}</p>
                  <p className="asvg-model-desc">{m.desc}</p>
                </div>
              ))}
            </div>
            <div className="asvg-models-cta">
              <a
                href="https://scenith.in/create-ai-content?tab=video&utm_source=tool_page&utm_medium=cta_models&utm_campaign=ai_short_video_generator"
                className="asvg-cta-primary asvg-cta-primary--outline"
              >
                Try All 6 Models Free →
              </a>
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section className="asvg-section asvg-section--how">
          <div className="asvg-container">
            <div className="asvg-section-header">
              <h2 className="asvg-section-h2">How to Generate an AI Short Video</h2>
              <p className="asvg-section-sub">
                Three steps. No learning curve. Your first video in under 2 minutes.
              </p>
            </div>
            <div className="asvg-steps">
              <div className="asvg-step">
                <div className="asvg-step-num">01</div>
                <div className="asvg-step-content">
                  <h3>Write (or pick) your prompt</h3>
                  <p>
                    Describe your video in plain language. Be specific about the scene,
                    lighting, movement, and mood. Or tap one of the 13 pre-built cinematic
                    prompt chips — Neon Tokyo, Volcano Eruption, Bioluminescent Bay, and more
                    — to get started in one click.
                  </p>
                  <div className="asvg-step-chips">
                    {["🌆 Neon Tokyo", "🌋 Volcano", "🌊 Bioluminescent Bay", "🚀 Space Launch"].map(c => (
                      <span key={c} className="asvg-chip">{c}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="asvg-step-connector" aria-hidden="true" />
              <div className="asvg-step">
                <div className="asvg-step-num">02</div>
                <div className="asvg-step-content">
                  <h3>Configure your video settings</h3>
                  <p>
                    Select your AI model, resolution (up to 1080p), duration (5s or 10s),
                    and aspect ratio (9:16 for Reels/Shorts, 16:9 for YouTube, 1:1 for feed).
                    Toggle audio generation on for Veo 3.1 and Kling 2.6. Then hit Generate.
                  </p>
                  <div className="asvg-step-options">
                    <span className="asvg-option-pill">📱 9:16</span>
                    <span className="asvg-option-pill">🖥️ 16:9</span>
                    <span className="asvg-option-pill">⬛ 1:1</span>
                    <span className="asvg-option-pill">⚡ 5s</span>
                    <span className="asvg-option-pill">🕐 10s</span>
                    <span className="asvg-option-pill">🎵 Audio</span>
                  </div>
                </div>
              </div>
              <div className="asvg-step-connector" aria-hidden="true" />
              <div className="asvg-step">
                <div className="asvg-step-num">03</div>
                <div className="asvg-step-content">
                  <h3>Download your MP4 and publish</h3>
                  <p>
                    Your video generates in 30–120 seconds. When it's ready, click
                    Download MP4 — no watermarks, full commercial rights. Upload directly
                    to Instagram Reels, YouTube Shorts, TikTok, or any platform.
                    Optionally add subtitles in one click using the built-in subtitle tool.
                  </p>
                </div>
              </div>
            </div>

            <div className="asvg-cta-box">
              <p className="asvg-cta-box-label">Ready to generate?</p>
              <a
                href="https://scenith.in/create-ai-content?tab=video&utm_source=tool_page&utm_medium=cta_how&utm_campaign=ai_short_video_generator"
                className="asvg-cta-primary"
              >
                🎬 Open the AI Video Generator →
              </a>
            </div>
          </div>
        </section>

        {/* ── USE CASES ── */}
        <section className="asvg-section asvg-section--usecases">
          <div className="asvg-container">
            <div className="asvg-section-header">
              <h2 className="asvg-section-h2">
                8 Ways Creators Use AI Short Video in 2026
              </h2>
              <p className="asvg-section-sub">
                From solo content creators to enterprise marketing teams — the use cases
                for AI-generated short video have exploded this year.
              </p>
            </div>
            <div className="asvg-uc-grid">
              {USE_CASES.map((u) => (
                <article className="asvg-uc-card" key={u.title}>
                  <div className="asvg-uc-icon">{u.icon}</div>
                  <h3 className="asvg-uc-title">{u.title}</h3>
                  <p className="asvg-uc-desc">{u.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROMPT TIPS ── */}
        <section className="asvg-section asvg-section--tips">
          <div className="asvg-container">
            <div className="asvg-section-header">
              <h2 className="asvg-section-h2">
                6 Prompt Techniques for Better AI Video Results
              </h2>
              <p className="asvg-section-sub">
                The difference between a mediocre AI video and a cinematic one is almost
                always the prompt. These techniques are used by the top creators on Scenith.
              </p>
            </div>
            <div className="asvg-tips-grid">
              {TIPS.map((t) => (
                <div className="asvg-tip-card" key={t.n}>
                  <div className="asvg-tip-num">{t.n}</div>
                  <h3 className="asvg-tip-title">{t.title}</h3>
                  <p className="asvg-tip-body">{t.tip}</p>
                </div>
              ))}
            </div>

            <div className="asvg-prompt-showcase">
              <h3 className="asvg-prompt-showcase-title">
                Example: Weak vs. Strong Prompt
              </h3>
              <div className="asvg-prompt-compare">
                <div className="asvg-prompt-col asvg-prompt-col--bad">
                  <div className="asvg-prompt-col-label">❌ Weak Prompt</div>
                  <div className="asvg-prompt-text">a forest</div>
                  <div className="asvg-prompt-result">Generic. Flat. Forgettable. The AI guesses everything.</div>
                </div>
                <div className="asvg-prompt-vs">VS</div>
                <div className="asvg-prompt-col asvg-prompt-col--good">
                  <div className="asvg-prompt-col-label">✅ Strong Prompt</div>
                  <div className="asvg-prompt-text">
                    Slow cinematic aerial drone descending through an ancient misty forest at golden hour,
                    shafts of warm light cutting between towering redwood trees, butterflies emerging from
                    chrysalises, dew drops on spider webs, ethereal and dreamlike
                  </div>
                  <div className="asvg-prompt-result">Specific. Atmospheric. Cinematic. The AI knows exactly what to render.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── COMPARISON TABLE ── */}
        <section className="asvg-section asvg-section--compare">
          <div className="asvg-container">
            <div className="asvg-section-header">
              <h2 className="asvg-section-h2">
                Scenith vs. Other AI Video Tools in 2026
              </h2>
              <p className="asvg-section-sub">
                There are many AI video tools out there. Here's why creators choose Scenith
                for short video generation.
              </p>
            </div>
            <div className="asvg-compare-table-wrap">
              <table className="asvg-compare-table">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th className="asvg-th-scenith">Scenith ✅</th>
                    <th>Other Tools ❌</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["AI Models Available", "6 models (Kling, Veo, Wan, Grok)", "Usually 1–2 models"],
                    ["Voice + Image + Video", "All 3 in one platform", "Separate tools required"],
                    ["Free Tier", "50 credits, no card required", "Limited free or card required"],
                    ["Watermarks", "None — ever", "Watermarks on free tier"],
                    ["Commercial Rights", "Full rights on all plans", "Restricted on free/basic"],
                    ["Audio Generation", "Veo 3.1 + Grok Imagine built-in", "Usually not available"],
                    ["Image-to-Video", "Supported on all models", "Often a paid add-on"],
                    ["Subtitle Tool", "Included, one-click", "Separate tool / subscription"],
                    ["Resolution", "Up to 1080p", "Often capped at 720p"],
                    ["Credit System", "Single balance for voice, image, video", "Separate credits per feature"],
                  ].map(([feat, us, them]) => (
                    <tr key={feat}>
                      <td>{feat}</td>
                      <td className="asvg-td-scenith">{us}</td>
                      <td className="asvg-td-them">{them}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── WHY AI VIDEO IN 2026 ── */}
        <section className="asvg-section asvg-section--why">
          <div className="asvg-container">
            <h2 className="asvg-section-h2">
              Why AI Short Video is the Biggest Content Opportunity of 2026
            </h2>
            <div className="asvg-why-content">
              <p>
                Short-form video has become the dominant content format across every major
                platform. Instagram Reels, YouTube Shorts, and TikTok now collectively
                receive over 3 billion daily views, and the algorithm reward for consistent
                short video publishing has never been higher. But there's a problem: creating
                great short video at scale is expensive, slow, and technically demanding.
              </p>
              <p>
                AI video generation solves this completely. In 2026, models like Kling 2.6 Pro
                and Google's Veo 3.1 have crossed the threshold where their output quality
                is genuinely competitive with professionally shot footage for a wide range of
                use cases — nature scenes, product reveals, abstract motion, architectural
                walkthroughs, and cinematic mood pieces.
              </p>
              <p>
                The creators who are growing fastest on Reels and Shorts right now are not
                the ones with the biggest production budgets — they're the ones who have
                figured out how to use AI to publish more, test more concepts, and find
                what resonates before doubling down. A creator who can publish 20 AI-generated
                Shorts per week will outcompete one who publishes 1 filmed Short per week
                almost every time, purely on algorithmic distribution.
              </p>
              <p>
                Marketers and ad agencies are discovering the same thing: AI video allows
                them to test 10x more creative concepts at 1/10th the cost, dramatically
                improving campaign performance through creative iteration. Brands that were
                producing 4–6 video ads per quarter are now producing 40–60.
              </p>
              <p>
                For educators, the impact is equally significant. Concepts that once required
                animation studios or stock footage licenses can now be visualized on demand,
                in any style, for any lesson — in under two minutes. A single e-learning
                creator can now produce course-quality video assets at a pace that would
                have previously required a full production team.
              </p>
              <p>
                The window of competitive advantage for early AI video adopters is still open
                in 2026 — but it is closing. The creators and brands who build AI video
                workflows into their content strategy now will have a significant head start
                before this becomes table stakes. Scenith's AI Short Video Generator is built
                to be that workflow: fast, multi-model, no watermarks, and accessible to
                anyone with a text prompt and an idea.
              </p>
            </div>
          </div>
        </section>

        {/* ── IMAGE TO VIDEO EXPLAINER ── */}
        <section className="asvg-section asvg-section--img2vid">
          <div className="asvg-container">
            <div className="asvg-i2v-grid">
              <div className="asvg-i2v-text">
                <div className="asvg-eyebrow">Advanced Feature</div>
                <h2 className="asvg-section-h2">
                  Image to Video: Animate Anything
                </h2>
                <p>
                  One of the most powerful features in Scenith's AI video tool is
                  Image-to-Video generation. Instead of starting from a text prompt,
                  you upload an image — any image — and the AI animates it into a
                  short video.
                </p>
                <p>
                  This gives you precise control over the visual starting point.
                  Generate an AI image of your exact scene using Scenith's image
                  generator, then click <em>"Make Video from this Image"</em> to
                  animate it directly. The workflow is:
                </p>
                <ol className="asvg-i2v-list">
                  <li>Generate an AI image of your scene</li>
                  <li>Click "Make Video from this Image"</li>
                  <li>Add a motion prompt ("camera slowly pans right, fog drifts...")</li>
                  <li>Select model, duration, and aspect ratio</li>
                  <li>Download your cinematic video clip</li>
                </ol>
                <p>
                  This workflow is especially powerful for product videos, character
                  animations, architectural reveals, and any content where you need
                  the exact right starting frame before adding motion.
                </p>
              </div>
              <div className="asvg-i2v-visual">
                <div className="asvg-i2v-flow">
                  <div className="asvg-i2v-step">
                    <div className="asvg-i2v-step-icon">🖼️</div>
                    <span>AI Image</span>
                  </div>
                  <div className="asvg-i2v-arrow">→</div>
                  <div className="asvg-i2v-step">
                    <div className="asvg-i2v-step-icon">✨</div>
                    <span>AI Animate</span>
                  </div>
                  <div className="asvg-i2v-arrow">→</div>
                  <div className="asvg-i2v-step">
                    <div className="asvg-i2v-step-icon">🎬</div>
                    <span>MP4 Video</span>
                  </div>
                </div>
                <div className="asvg-i2v-note">
                  Works with: Kling 2.6 Pro, Kling 2.5 Turbo, Wan 2.5, and more.
                  Upload any JPG or PNG as the starting frame.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CREDIT COSTS ── */}
        <section className="asvg-section asvg-section--pricing">
          <div className="asvg-container">
            <div className="asvg-section-header">
              <h2 className="asvg-section-h2">
                Transparent Credit Costs — No Surprises
              </h2>
              <p className="asvg-section-sub">
                Every model's credit cost is shown before you generate. You always
                know what a video will cost before hitting Generate.
              </p>
            </div>
            <div className="asvg-pricing-grid">
              {[
                { model: "Wan 2.5", duration: "5s · 480p", cost: "46cr", note: "Best for budget" },
                { model: "Wan 2.5", duration: "5s · 1080p", cost: "138cr", note: "Full quality" },
                { model: "Kling 2.5 Turbo", duration: "5s", cost: "64cr", note: "Speed + quality" },
                { model: "Kling 2.6 Pro", duration: "5s", cost: "64cr", note: "Best output" },
                { model: "Kling 2.6 Pro", duration: "10s", cost: "128cr", note: "Longest clip" },
                { model: "Veo 3.1 Fast", duration: "4s + audio", cost: "138cr", note: "With AI audio" },
                { model: "Veo 3.1", duration: "8s + audio", cost: "740cr", note: "Flagship quality" },
                { model: "Grok Imagine", duration: "5s + audio", cost: "47cr", note: "Audio included" },
              ].map((p) => (
                <div className="asvg-price-card" key={`${p.model}-${p.duration}`}>
                  <div className="asvg-price-model">{p.model}</div>
                  <div className="asvg-price-dur">{p.duration}</div>
                  <div className="asvg-price-cost">{p.cost}</div>
                  <div className="asvg-price-note">{p.note}</div>
                </div>
              ))}
            </div>
            <p className="asvg-pricing-note">
              Free plan includes 50 credits on signup. Paid plans from ₹50 / $1.
              Credits never expire. Full pricing at{" "}
              <a href="https://scenith.in/pricing">scenith.in/pricing →</a>
            </p>
          </div>
        </section>

        {/* ── MID-PAGE CTA ── */}
        <section className="asvg-section asvg-section--cta-mid">
          <div className="asvg-container">
            <div className="asvg-cta-mid-box">
              <div className="asvg-cta-mid-glow" aria-hidden="true" />
              <h2 className="asvg-cta-mid-h2">
                Your first AI video is 60 seconds away.
              </h2>
              <p className="asvg-cta-mid-sub">
                Write a prompt. Pick a model. Download your MP4.
                No camera. No editor. No excuses.
              </p>
              <a
                href="https://scenith.in/create-ai-content?tab=video&utm_source=tool_page&utm_medium=cta_mid&utm_campaign=ai_short_video_generator"
                className="asvg-cta-primary asvg-cta-primary--large"
              >
                <span className="asvg-cta-icon">🎬</span>
                Generate AI Short Video — Free
                <span className="asvg-cta-arrow">→</span>
              </a>
              <div className="asvg-cta-mid-trust">
                <span>✓ No credit card</span>
                <span>✓ No watermarks</span>
                <span>✓ Commercial use</span>
                <span>✓ 6 AI models</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="asvg-section asvg-section--faq">
          <div className="asvg-container">
            <div className="asvg-section-header">
              <h2 className="asvg-section-h2">
                Frequently Asked Questions
              </h2>
              <p className="asvg-section-sub">
                Everything you need to know about AI short video generation on Scenith.
              </p>
            </div>
            <div className="asvg-faq-list">
              {FAQS.map((f, i) => (
                <details className="asvg-faq-item" key={i}>
                  <summary className="asvg-faq-q">{f.q}</summary>
                  <div className="asvg-faq-a">{f.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── RELATED TOOLS ── */}
        <section className="asvg-section asvg-section--related">
          <div className="asvg-container">
            <h2 className="asvg-section-h2">More AI Tools on Scenith</h2>
            <div className="asvg-related-grid">
              {[
                {
                  icon: "🎙️",
                  title: "AI Voice Generator",
                  desc: "40+ natural voices across 20+ languages. Generate MP3 narration for your videos.",
                  href: "https://scenith.in/create-ai-content?tab=voice&utm_source=tool_page&utm_medium=related&utm_campaign=ai_short_video_generator",
                },
                {
                  icon: "🖼️",
                  title: "AI Image Generator",
                  desc: "7 AI image models. Generate thumbnails, stills, and reference frames for your videos.",
                  href: "https://scenith.in/create-ai-content?tab=image&utm_source=tool_page&utm_medium=related&utm_campaign=ai_short_video_generator",
                },
                {
                  icon: "💬",
                  title: "AI Subtitle Generator",
                  desc: "Add auto-generated subtitles to your AI videos in one click. Boost accessibility and reach.",
                  href: "https://scenith.in/tools/add-subtitles-to-videos?utm_source=tool_page&utm_medium=related&utm_campaign=ai_short_video_generator",
                },
              ].map((r) => (
                <a className="asvg-related-card" href={r.href} key={r.title}>
                  <span className="asvg-related-icon">{r.icon}</span>
                  <h3 className="asvg-related-title">{r.title}</h3>
                  <p className="asvg-related-desc">{r.desc}</p>
                  <span className="asvg-related-link">Open tool →</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="asvg-section asvg-section--final-cta">
          <div className="asvg-container">
            <div className="asvg-final-cta-inner">
              <h2 className="asvg-final-cta-h2">
                Stop watching other creators go viral.
                <br />
                <span className="asvg-final-cta-accent">Start making videos that do.</span>
              </h2>
              <p className="asvg-final-cta-sub">
                Scenith's AI Short Video Generator gives you 6 state-of-the-art video models,
                1080p output, no watermarks, and full commercial rights — starting at free.
                Your first video takes less than two minutes from prompt to MP4.
              </p>
              <a
                href="https://scenith.in/create-ai-content?tab=video&utm_source=tool_page&utm_medium=cta_final&utm_campaign=ai_short_video_generator"
                className="asvg-cta-primary asvg-cta-primary--large"
              >
                <span className="asvg-cta-icon">🎬</span>
                Generate Your First AI Video — Free
                <span className="asvg-cta-arrow">→</span>
              </a>
              <p className="asvg-cta-sub" style={{ marginTop: "1rem" }}>
                Join thousands of creators using Scenith daily ·{" "}
                <a href="https://scenith.in/pricing">View Pricing →</a>
              </p>
            </div>
          </div>
        </section>

        {/* ── BREADCRUMB ── */}
        <nav className="asvg-breadcrumb" aria-label="Breadcrumb">
          <div className="asvg-container">
            <ol className="asvg-bc-list">
              <li><a href="https://scenith.in">Scenith</a></li>
              <li aria-hidden="true">›</li>
              <li><a href="https://scenith.in/tools">Tools</a></li>
              <li aria-hidden="true">›</li>
              <li aria-current="page">AI Short Video Generator</li>
            </ol>
          </div>
        </nav>
      </div>
    </>
  );
}