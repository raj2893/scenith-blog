import type { Metadata } from "next";
import Link from "next/link";
import "./thread-to-carousel.css";

// ── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Thread to Carousel AI Generator — Convert X/Twitter Threads into LinkedIn & Instagram Carousels | Scenith",
  description:
    "Turn any X (Twitter) thread or long-form text into scroll-stopping LinkedIn and Instagram carousel slides in seconds using AI. Free to try. No design skills needed. Powered by Scenith AI.",
  keywords: [
    "thread to carousel",
    "twitter thread to carousel",
    "x thread to carousel generator",
    "linkedin carousel from thread",
    "instagram carousel ai generator",
    "ai carousel maker",
    "convert thread to slides",
    "thread repurposing tool",
    "social media content repurposing",
    "ai content creator",
    "linkedin carousel generator free",
    "instagram carousel generator ai",
    "thread to post converter",
    "scenith ai carousel",
    "ai image carousel generator",
  ],
  openGraph: {
    title: "Thread to Carousel AI Generator — Repurpose Any Thread into Viral Slides",
    description:
      "Paste your X thread. Get AI-generated LinkedIn & Instagram carousel slides instantly. Zero design skills needed. Free on Scenith.",
    url: "https://scenith.in/tools/thread-to-carousel-ai-generator",
    siteName: "Scenith",
    type: "website",
    images: [
      {
        url: "https://scenith.in/og/thread-to-carousel.jpg",
        width: 1200,
        height: 630,
        alt: "Thread to Carousel AI Generator by Scenith",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thread to Carousel AI Generator — Turn Threads into Viral Slides",
    description:
      "Paste your X / Twitter thread. AI generates scroll-stopping LinkedIn & Instagram carousel slides in seconds. Free on Scenith.",
    images: ["https://scenith.in/og/thread-to-carousel.jpg"],
  },
  alternates: {
    canonical: "https://scenith.in/tools/thread-to-carousel-ai-generator",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://scenith.in/tools/thread-to-carousel-ai-generator",
      url: "https://scenith.in/tools/thread-to-carousel-ai-generator",
      name: "Thread to Carousel AI Generator",
      description:
        "Convert X/Twitter threads into LinkedIn and Instagram carousel slides instantly with AI. Free tool by Scenith.",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://scenith.in" },
          { "@type": "ListItem", position: 2, name: "Tools", item: "https://scenith.in/tools" },
          {
            "@type": "ListItem",
            position: 3,
            name: "Thread to Carousel AI Generator",
            item: "https://scenith.in/tools/thread-to-carousel-ai-generator",
          },
        ],
      },
    },
    {
      "@type": "SoftwareApplication",
      name: "Thread to Carousel AI Generator",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Web",
      url: "https://scenith.in/tools/thread-to-carousel-ai-generator",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Free to try with 50 credits on sign-up",
      },
      creator: {
        "@type": "Organization",
        name: "Scenith",
        url: "https://scenith.in",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Can I convert a Twitter/X thread into a LinkedIn carousel?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Paste your X (Twitter) thread text into Scenith's AI carousel generator, choose your slide count and style, and the AI will produce ready-to-post carousel images optimised for LinkedIn and Instagram in seconds.",
          },
        },
        {
          "@type": "Question",
          name: "Is the thread to carousel generator free?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You get 50 free credits on sign-up — no credit card required. Each carousel slide costs credits, and paid plans start at $9/month for 300 credits.",
          },
        },
        {
          "@type": "Question",
          name: "What platforms can I use the carousels on?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Carousels are generated at 1:1 (square) for Instagram and can be exported for LinkedIn, Facebook, and Pinterest. Portrait 9:16 format is ideal for Instagram Stories.",
          },
        },
        {
          "@type": "Question",
          name: "Does Scenith generate the carousel images or just text slides?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Scenith generates actual high-resolution PNG images for each carousel slide using state-of-the-art models like GPT Image 1, Imagen 4, FLUX 1.1 Pro and more. You get real visual slides, not just text cards.",
          },
        },
      ],
    },
  ],
};

// ── CTA URL ───────────────────────────────────────────────────────────────────
const CTA_URL =
  "https://scenith.in/create-ai-content?tab=image&utm_source=thread-to-carousel-tool&utm_medium=micro-tool&utm_campaign=carousel-generator-2026";

// ── Page Component ────────────────────────────────────────────────────────────
export default function ThreadToCarouselPage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="ttc-page">
        {/* Ambient background */}
        <div className="ttc-ambient">
          <div className="ttc-blob ttc-blob-1" />
          <div className="ttc-blob ttc-blob-2" />
          <div className="ttc-blob ttc-blob-3" />
        </div>
        <div className="ttc-grid-bg" />

        {/* ── Nav ── */}
        <nav className="ttc-nav">
          <a href="https://scenith.in" className="ttc-nav-logo">
            SCEN<span>ITH</span>
          </a>
          <ul className="ttc-nav-links">
            <li><a href="https://scenith.in/create-ai-content">AI Creator</a></li>
            <li><a href="https://scenith.in/tools">All Tools</a></li>
            <li><a href="https://scenith.in/pricing">Pricing</a></li>
            <li>
              <a href={CTA_URL} className="ttc-nav-cta">
                Try Free →
              </a>
            </li>
          </ul>
        </nav>

        <div className="ttc-content">

          {/* ════════════════════════════════════════════════════
              HERO
          ════════════════════════════════════════════════════ */}
          <section className="ttc-hero">
            <div className="ttc-eyebrow">
              <span className="ttc-eyebrow-dot" />
              AI Content Repurposing · 2026
            </div>

            <h1 className="ttc-hero-title">
              Turn Any Thread Into{" "}
              <span className="ttc-highlight">Viral Carousel</span>{" "}
              Slides With AI
            </h1>

            <p className="ttc-hero-sub">
              Stop letting your best X (Twitter) threads die after 24 hours.
              Paste your thread, pick your style, and Scenith AI generates
              ready-to-post LinkedIn and Instagram carousel slides — with real
              images — in under 30 seconds.
            </p>

            <div className="ttc-cta-block">
              <a
                href={CTA_URL}
                className="ttc-cta-primary"
                rel="noopener"
              >
                🎠 Generate My Carousel Free
                <span className="ttc-cta-arrow">→</span>
              </a>
              <div className="ttc-cta-note">
                <span>✅ No credit card</span>
                <span>·</span>
                <span>⚡ 50 free credits on signup</span>
                <span>·</span>
                <span>📥 Download PNG instantly</span>
              </div>
            </div>

            <div className="ttc-trust-badges">
              <div className="ttc-badge"><span className="ttc-badge-icon">🖼️</span>Real AI-generated images, not text cards</div>
              <div className="ttc-badge"><span className="ttc-badge-icon">🤖</span>GPT · Imagen 4 · FLUX · Grok Aurora</div>
              <div className="ttc-badge"><span className="ttc-badge-icon">📱</span>LinkedIn · Instagram · Pinterest</div>
              <div className="ttc-badge"><span className="ttc-badge-icon">💼</span>Commercial rights included</div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              VISUAL MOCKUP
          ════════════════════════════════════════════════════ */}
          <section className="ttc-mockup-section">
            <div className="ttc-section-label">How the magic works</div>
            <div className="ttc-mockup-wrapper">
              <div className="ttc-mockup-glow" />
              <div className="ttc-mockup-frame">
                <div className="ttc-mockup-topbar">
                  <div className="ttc-dot-red" />
                  <div className="ttc-dot-yellow" />
                  <div className="ttc-dot-green" />
                  <div className="ttc-mockup-url">scenith.in/create-ai-content</div>
                </div>
                <div className="ttc-mockup-body">
                  {/* Thread input col */}
                  <div className="ttc-thread-col">
                    <div className="ttc-thread-header">
                      <div className="ttc-thread-avatar">🧵</div>
                      <div>
                        <div className="ttc-thread-username">Your Thread</div>
                        <div className="ttc-thread-handle">X / Twitter</div>
                      </div>
                    </div>
                    <div className="ttc-thread-post">
                      <div className="ttc-thread-post-num">1/</div>
                      The creator economy is about to completely shift in 2026 and most people aren&apos;t paying attention…
                    </div>
                    <div className="ttc-thread-connector" />
                    <div className="ttc-thread-post">
                      <div className="ttc-thread-post-num">2/</div>
                      AI-native creators are producing 10× more content at 1/5 the cost. Here&apos;s what the data actually shows:
                    </div>
                    <div className="ttc-thread-connector" />
                    <div className="ttc-thread-post">
                      <div className="ttc-thread-post-num">3/</div>
                      Short-form video alone is no longer enough. Carousels on LinkedIn now get 3× more impressions than single posts…
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="ttc-mockup-arrow">
                    <div className="ttc-arrow-line">
                      <span className="ttc-arrow-icon">→</span>
                    </div>
                    <div className="ttc-arrow-label">AI Magic</div>
                  </div>

                  {/* Carousel output col */}
                  <div className="ttc-carousel-col">
                    <div className="ttc-carousel-slide ttc-slide-active">
                      <span className="ttc-slide-num">Slide 1</span>
                      <span className="ttc-slide-emoji">🚀</span>
                      <div className="ttc-slide-title">The Creator Economy Is Shifting</div>
                      <div className="ttc-slide-body">2026 will change everything. Most creators aren&apos;t seeing it yet.</div>
                      <div className="ttc-slide-bar" />
                    </div>
                    <div className="ttc-carousel-slide">
                      <span className="ttc-slide-num">Slide 2</span>
                      <span className="ttc-slide-emoji">📊</span>
                      <div className="ttc-slide-title">AI Creators: 10× Output, 1/5 Cost</div>
                      <div className="ttc-slide-body">The data doesn&apos;t lie. Here&apos;s how the gap is growing.</div>
                      <div className="ttc-slide-bar" style={{ width: "45%" }} />
                    </div>
                    <div className="ttc-carousel-slide">
                      <span className="ttc-slide-num">Slide 3</span>
                      <span className="ttc-slide-emoji">💡</span>
                      <div className="ttc-slide-title">Carousels Get 3× More Reach</div>
                      <div className="ttc-slide-body">LinkedIn carousel data 2025–2026. Swipe to see why.</div>
                      <div className="ttc-slide-bar" style={{ width: "75%" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              HOW IT WORKS
          ════════════════════════════════════════════════════ */}
          <section className="ttc-section">
            <div className="ttc-section-label">Step by step</div>
            <h2 className="ttc-section-title">From Thread to Carousel in 3 Steps</h2>
            <p className="ttc-section-sub">
              No design skills, no Canva templates, no Figma required. Just your
              words and the AI does the rest.
            </p>

            <div className="ttc-steps">
              <div className="ttc-step">
                <div className="ttc-step-num">01</div>
                <div className="ttc-step-content">
                  <h3>Paste Your Thread (or Write Your Prompt)</h3>
                  <p>
                    Copy your X/Twitter thread text — all the tweets, numbered or
                    not — and paste it directly into the Scenith prompt box on the
                    Carousel tab. You can also write a fresh topic from scratch:
                    &quot;5 lessons I learned building my first SaaS&quot; or
                    &quot;Why morning routines are overrated.&quot; The AI works
                    with both existing content and new ideas equally well.
                  </p>
                  <span className="ttc-step-badge">⚡ Takes under 30 seconds</span>
                </div>
              </div>

              <div className="ttc-step">
                <div className="ttc-step-num">02</div>
                <div className="ttc-step-content">
                  <h3>Choose Your AI Model, Style & Slide Format</h3>
                  <p>
                    Select from 7 state-of-the-art AI image models — GPT Image 1,
                    Imagen 4 (Fast or Standard), FLUX 1.1 Pro, Grok Aurora,
                    Stability AI Core, or Nano Banana Pro. Pick your visual style:
                    realistic photo, digital art, 3D render, anime, fantasy, or
                    vintage. Set your aspect ratio to square (1:1) for Instagram
                    or landscape (16:9) for LinkedIn. Each slide gets its own
                    unique AI-generated image — not stock photos, not templates.
                  </p>
                  <span className="ttc-step-badge">🎨 8 visual styles</span>
                </div>
              </div>

              <div className="ttc-step">
                <div className="ttc-step-num">03</div>
                <div className="ttc-step-content">
                  <h3>Generate, Download & Post</h3>
                  <p>
                    Hit &quot;Generate Carousel.&quot; Scenith generates each slide
                    sequentially with real AI image generation — not text overlaid
                    on gradients. Each slide is a standalone high-resolution PNG
                    you download individually. Upload them in order to LinkedIn,
                    Instagram, or Pinterest. Your thread just became a piece of
                    evergreen content that will drive impressions for weeks.
                  </p>
                  <span className="ttc-step-badge">📥 Download all slides as PNG</span>
                </div>
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              STATS
          ════════════════════════════════════════════════════ */}
          <div className="ttc-stats-row">
            <div className="ttc-stat-card">
              <div className="ttc-stat-num">3×</div>
              <div className="ttc-stat-label">More LinkedIn impressions vs single posts (2025 data)</div>
            </div>
            <div className="ttc-stat-card">
              <div className="ttc-stat-num">7+</div>
              <div className="ttc-stat-label">AI image models to choose from</div>
            </div>
            <div className="ttc-stat-card">
              <div className="ttc-stat-num">30s</div>
              <div className="ttc-stat-label">Average time to generate your first carousel slide</div>
            </div>
            <div className="ttc-stat-card">
              <div className="ttc-stat-num">50</div>
              <div className="ttc-stat-label">Free credits on signup — no card required</div>
            </div>
          </div>

          {/* ════════════════════════════════════════════════════
              INLINE CTA
          ════════════════════════════════════════════════════ */}
          <div className="ttc-inline-cta">
            <h3>Ready to repurpose your best content?</h3>
            <p>Start generating carousel slides from your threads — free, right now.</p>
            <a href={CTA_URL} className="ttc-cta-primary" style={{ display: "inline-flex" }}>
              🎠 Open Carousel Generator
              <span className="ttc-cta-arrow">→</span>
            </a>
          </div>

          {/* ════════════════════════════════════════════════════
              FEATURES GRID
          ════════════════════════════════════════════════════ */}
          <section className="ttc-section">
            <div className="ttc-section-label">What makes Scenith different</div>
            <h2 className="ttc-section-title">Not Just Another Slide Maker</h2>
            <p className="ttc-section-sub">
              Most &quot;carousel tools&quot; paste your text on a coloured box.
              Scenith generates real AI images for every slide.
            </p>

            <div className="ttc-features-grid">
              <div className="ttc-feature-card">
                <span className="ttc-feature-icon">🖼️</span>
                <h3>Real AI Images Per Slide</h3>
                <p>
                  Every slide gets a unique, AI-generated image — not a stock
                  photo, not a coloured background with text. Powered by GPT
                  Image 1, Imagen 4, FLUX 1.1 Pro, and more.
                </p>
              </div>
              <div className="ttc-feature-card">
                <span className="ttc-feature-icon">🎠</span>
                <h3>Up to 3 Slides at Once</h3>
                <p>
                  The Carousel mode generates up to 3 slides in a single workflow,
                  each with its own prompt and optional reference image. Run all 3
                  in sequence automatically.
                </p>
              </div>
              <div className="ttc-feature-card">
                <span className="ttc-feature-icon">🔗</span>
                <h3>Shared Reference Image</h3>
                <p>
                  Want a consistent visual identity across slides? Upload one
                  reference image and apply it as the style base for all 3 slides
                  simultaneously.
                </p>
              </div>
              <div className="ttc-feature-card">
                <span className="ttc-feature-icon">📐</span>
                <h3>Any Aspect Ratio</h3>
                <p>
                  Square 1:1 for Instagram, landscape 16:9 for LinkedIn, portrait
                  9:16 for Stories. Choose the format that fits your platform
                  before generating.
                </p>
              </div>
              <div className="ttc-feature-card">
                <span className="ttc-feature-icon">🎨</span>
                <h3>8 Visual Styles</h3>
                <p>
                  Realistic photography, digital art, anime, 3D render, fantasy,
                  sci-fi, vintage, and artistic. Each style completely transforms
                  the output aesthetic.
                </p>
              </div>
              <div className="ttc-feature-card">
                <span className="ttc-feature-icon">🎬</span>
                <h3>Animate Any Slide</h3>
                <p>
                  Done generating? Click &quot;Animate Slide&quot; on any card
                  and the image gets sent directly to the AI Video generator.
                  Turn your carousel into a Reel in one click.
                </p>
              </div>
              <div className="ttc-feature-card">
                <span className="ttc-feature-icon">📥</span>
                <h3>High-Res PNG Download</h3>
                <p>
                  Every slide downloads as a full-resolution PNG — no
                  watermarks, no quality compression, full commercial rights
                  included.
                </p>
              </div>
              <div className="ttc-feature-card">
                <span className="ttc-feature-icon">💡</span>
                <h3>30+ Prompt Starters</h3>
                <p>
                  Not sure what to generate? Pick from curated image prompt
                  suggestions across 15 categories. One click fills the prompt
                  box instantly.
                </p>
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              LONG-FORM SEO CONTENT (PROSE)
          ════════════════════════════════════════════════════ */}
          <section className="ttc-section">
            <div className="ttc-prose">

              <h2>Why Converting Threads to Carousels Is the Smartest Content Move in 2026</h2>

              <p>
                If you&apos;ve been building an audience on X (formerly Twitter) in
                2025 or 2026, you already know the brutal truth: threads have a
                half-life of about 18 hours. Once the algorithm stops pushing them,
                they disappear into the void — regardless of how brilliant the
                insight was or how long you spent writing it.
              </p>

              <p>
                Carousels on LinkedIn and Instagram, however, are a different
                beast entirely. <strong>LinkedIn&apos;s own data consistently shows
                carousels generating 3× to 5× more impressions than standard
                text posts</strong> — and the engagement rate (comments, reshares,
                saves) is dramatically higher. Instagram carousels trigger a
                second-push from the algorithm every time a user swipes to the next
                slide, which means a 5-slide carousel has five times the organic
                distribution opportunity of a single image post.
              </p>

              <div className="ttc-highlight-box">
                <strong>The opportunity:</strong> Your thread already contains
                researched, battle-tested ideas that resonated with an audience.
                The hard part — writing the content — is done. Turning it into a
                carousel is a formatting problem, not a content problem. And that
                is exactly the kind of problem AI is extraordinarily good at
                solving in 2026.
              </div>

              <h3>The Traditional Carousel Workflow Is Broken</h3>

              <p>
                Let&apos;s be honest about what making a carousel used to look like.
                You&apos;d open Canva, fight with a template that doesn&apos;t match
                your brand, export individual slides, resize them for different
                platforms, manually write headlines for each slide, source stock
                photos that look like every other creator&apos;s stock photos, and
                spend 45–90 minutes on a piece of content that represents 15
                minutes of actual thinking.
              </p>

              <p>
                Or you&apos;d pay a designer $50–$200 per carousel. Or you&apos;d
                use an AI text-to-slide tool that puts white text on a purple
                gradient and calls it a carousel. None of these options are
                actually solving the problem.
              </p>

              <p>
                <em>The problem is that carousels need to look visually distinct from
                each other while staying thematically coherent.</em> They need to
                stop the scroll at slide 1 and create enough curiosity to make
                someone swipe to slide 2, then 3. That requires real visual
                generation — not templates, not text-on-background, not stock
                images.
              </p>

              <h3>What AI Image Generation Actually Changes for Carousels</h3>

              <p>
                In 2024, the best AI image models were impressive but inconsistent.
                By mid-2025, models like GPT Image 1 from OpenAI and Imagen 4 from
                Google had crossed a threshold that changed everything: you could
                describe a specific scene, mood, or composition in plain language
                and receive a photorealistic or artistically coherent image that
                exactly matched the description — reliably, every time.
              </p>

              <p>
                For carousel creators, this is transformational. Instead of
                hunting for a stock photo of &quot;business growth&quot; that looks
                the same as everyone else&apos;s stock photo of business growth,
                you describe exactly the visual that matches your slide. Slide 1
                about the creator economy shift? <strong>Prompt: &quot;Aerial
                cinematic view of a creator studio with glowing screens and AI
                tools at midnight, deep blue and orange lighting.&quot;</strong>
                Slide 2 about data? <strong>Prompt: &quot;Abstract data
                visualization rendered as a glowing city at night, each data
                point a building light.&quot;</strong>
              </p>

              <p>
                Now every slide has a unique, striking image that no other
                creator has — because it was generated specifically for your
                content, your words, your ideas.
              </p>

              <h2>Which AI Model Should You Use for Carousel Images?</h2>

              <p>
                Scenith gives you access to 7 different AI image models inside the
                Carousel generator. Choosing the right one depends on the visual
                style you&apos;re going for and your credit budget.
              </p>

              <h3>GPT Image 1 Mini & Medium (OpenAI)</h3>
              <p>
                GPT Image 1 is OpenAI&apos;s flagship image generation model as of
                2025–2026. The Mini variant is fast and cost-efficient — ideal
                when you need to crank out carousel content quickly. The Medium
                variant produces noticeably richer detail and handles complex
                scene compositions better. Both support image-to-image
                generation, meaning you can upload a reference image and the
                model will stylistically reimagine it while maintaining
                structural composition. For business-themed carousels with a
                clean, professional look, GPT Image 1 Medium in &quot;standard&quot;
                quality is the go-to.
              </p>

              <h3>Imagen 4 Fast & Standard (Google DeepMind)</h3>
              <p>
                Google&apos;s Imagen 4 is the model of choice for educational and
                documentary-style carousels. It excels at naturalistic lighting,
                photorealistic textures, and accurate rendering of complex scenes.
                Imagen 4 Fast is exactly what it sounds like — same quality
                philosophy, faster generation, lower credit cost. Standard is
                the premium tier with maximum detail. For carousels about
                science, nature, technology, or anything that benefits from
                a &quot;National Geographic&quot; aesthetic, Imagen 4 is your model.
              </p>

              <h3>FLUX 1.1 Pro (Black Forest Labs)</h3>
              <p>
                FLUX 1.1 Pro is the underground favourite of art directors and
                visual-first creators. It has a distinct aesthetic that sits
                between hyper-realism and editorial illustration — bold,
                atmospheric, with unusual colour palettes. For personal branding
                carousels, motivational content, or anything that needs to look
                distinctly artistic rather than corporate, FLUX delivers
                something other models simply cannot replicate.
              </p>

              <h3>Grok Aurora (xAI)</h3>
              <p>
                Elon Musk&apos;s xAI released Grok Aurora as a 2K photorealism
                specialist. It&apos;s particularly strong at portrait generation
                and product-adjacent visuals — great for personal brand carousels,
                fashion content, or lifestyle-oriented slide decks. Aurora also
                supports image-to-image, making it useful when you have a specific
                reference aesthetic you want to preserve across multiple slides.
              </p>

              <h3>Stability AI Core</h3>
              <p>
                Stability AI Core (SDXL architecture) is the classic choice for
                creative and artistic carousels. It handles abstract concepts,
                fantastical scenes, and surreal compositions exceptionally well.
                If your thread is about ideas, philosophy, or creative work rather
                than data or business, Stability AI Core gives you the most
                expressive visual range. It also supports image-to-image for
                stylistic remixing.
              </p>

              <h3>Nano Banana Pro</h3>
              <p>
                Nano Banana Pro is the specialist model for ultra-high resolution
                output — available in 2K and 4K. For carousels that will be
                printed, displayed at large format, or used in premium client
                decks, the additional detail at 4K is significant. It&apos;s
                the most credit-intensive option, but the output quality
                justifies it for professional-grade deliverables.
              </p>

              <h2>Thread to Carousel: The Ideal Visual Style for Each Niche</h2>

              <p>
                Not every thread suits the same carousel visual style. Here&apos;s
                a breakdown of which Scenith style preset works best for common
                creator niches:
              </p>

              <div className="ttc-tag-scroll">
                <span className="ttc-tag">🏢 Startup / Business → Realistic + GPT Image 1</span>
                <span className="ttc-tag">🎨 Creative / Design → Artistic + FLUX Pro</span>
                <span className="ttc-tag">🤖 Tech / AI → Digital Art + Imagen 4</span>
                <span className="ttc-tag">💪 Fitness / Wellness → 3D Render + Stability</span>
                <span className="ttc-tag">🌍 Education / Science → Realistic + Imagen 4</span>
                <span className="ttc-tag">🎮 Gaming / Entertainment → Sci-Fi + FLUX Pro</span>
                <span className="ttc-tag">🧘 Mental Health / Mindset → Fantasy + Stability</span>
                <span className="ttc-tag">💰 Finance / Investing → Digital Art + GPT Image</span>
              </div>

              <h3>Business and Startup Threads</h3>
              <p>
                For threads about funding, growth, team building, or product
                strategy, the <strong>Realistic</strong> style with GPT Image 1
                Medium produces the most credibility-signalling visuals. Think
                clean office environments, dramatic product shots, or aerial city
                views that suggest scale and ambition. Keep your slide prompts
                minimal and scene-specific: &quot;Minimalist co-working space at
                golden hour, warm amber light, laptop on oak desk&quot; beats
                &quot;business meeting&quot; every single time.
              </p>

              <h3>Tech and AI Threads</h3>
              <p>
                For threads about AI tools, software, or technology trends,
                <strong>Digital Art</strong> with Imagen 4 Standard creates the
                most striking results. Futuristic circuit patterns, glowing neural
                networks, robot-human interaction scenes — these visuals signal
                expertise and forward-thinking to a tech-literate audience. Pair
                specific tech metaphors with abstract visual descriptions:
                &quot;Neural network rendered as a glowing city seen from above
                at night, data nodes as skyscrapers.&quot;
              </p>

              <h3>Personal Branding and Creator Economy</h3>
              <p>
                If your thread is about growing an audience, monetisation, or
                the creator journey, the <strong>Artistic</strong> or
                <strong>Vintage</strong> style with FLUX 1.1 Pro creates a
                distinctly personal and warm aesthetic. Film photography vibes,
                warm bokeh, coffee-shop atmospheres — these visuals humanise
                business content and make it feel like advice from a friend
                rather than a corporate playbook.
              </p>

              <h3>Education, Science, and Research</h3>
              <p>
                For data-backed, educational threads — research findings, science
                explainers, statistical breakdowns — the <strong>Realistic</strong>
                style with Imagen 4 Standard is the clear winner. Its ability to
                generate near-photographic macro shots, scientific illustrations,
                and documentary-style scene compositions adds authority to
                educational content that text-on-gradient simply cannot achieve.
              </p>

            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              USE CASES
          ════════════════════════════════════════════════════ */}
          <section className="ttc-section">
            <div className="ttc-section-label">Who uses this tool</div>
            <h2 className="ttc-section-title">Built for Every Kind of Creator</h2>
            <p className="ttc-section-sub">
              Whether you post 3× a week or 3× a day, thread-to-carousel
              repurposing is the highest-ROI content habit you can build in 2026.
            </p>

            <div className="ttc-usecases-grid">
              <div className="ttc-uc-card">
                <span className="ttc-uc-emoji">🏢</span>
                <h3>Startup Founders & CEOs</h3>
                <p>
                  Turn your hot takes on X into credibility-building LinkedIn
                  carousels that reach your investor, customer, and talent
                  audience — often 5–10× more people than your thread did.
                  Thought leadership at scale, without hiring a content team.
                </p>
                <span className="ttc-uc-tag">LinkedIn Carousel</span>
              </div>
              <div className="ttc-uc-card">
                <span className="ttc-uc-emoji">📱</span>
                <h3>Social Media Managers</h3>
                <p>
                  Repurpose client tweets and X threads into cross-platform
                  carousel content for LinkedIn, Instagram, and Pinterest in
                  minutes. Deliver more value per piece of content without
                  increasing your team&apos;s workload.
                </p>
                <span className="ttc-uc-tag">Multi-Platform</span>
              </div>
              <div className="ttc-uc-card">
                <span className="ttc-uc-emoji">🎓</span>
                <h3>Educators & Coaches</h3>
                <p>
                  Educational threads — &quot;5 things about X&quot;,
                  &quot;How I learned Y&quot;, breakdowns of complex topics —
                  convert naturally into carousel slides that save and share
                  on Instagram at dramatically higher rates than text posts.
                </p>
                <span className="ttc-uc-tag">Instagram Saves</span>
              </div>
              <div className="ttc-uc-card">
                <span className="ttc-uc-emoji">✍️</span>
                <h3>Writers & Newsletter Creators</h3>
                <p>
                  Your newsletter intro, your substack thread, your essay
                  outline — all perfect raw material for carousels. Drive
                  new readers from Instagram and LinkedIn back to your
                  longer-form work with carousel teasers.
                </p>
                <span className="ttc-uc-tag">Audience Growth</span>
              </div>
              <div className="ttc-uc-card">
                <span className="ttc-uc-emoji">🛍️</span>
                <h3>E-Commerce & Brand Marketers</h3>
                <p>
                  Turn product launch threads, customer testimonial collections,
                  and how-it-works explanations into visual carousel ads and
                  organic posts that convert browsers into buyers — with real
                  AI-generated product visuals, not stock imagery.
                </p>
                <span className="ttc-uc-tag">Product Marketing</span>
              </div>
              <div className="ttc-uc-card">
                <span className="ttc-uc-emoji">💼</span>
                <h3>Recruiters & HR Professionals</h3>
                <p>
                  Company culture posts, &quot;a day in the life&quot; threads,
                  and job opportunity announcements all perform dramatically
                  better as LinkedIn carousels. Stand out in a noisy
                  recruitment market with custom AI visuals.
                </p>
                <span className="ttc-uc-tag">Employer Branding</span>
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              COMPARISON TABLE
          ════════════════════════════════════════════════════ */}
          <section className="ttc-section">
            <div className="ttc-section-label">Platform comparison</div>
            <h2 className="ttc-section-title">How Scenith Compares for Carousel Creation</h2>
            <p className="ttc-section-sub" style={{ marginBottom: 24 }}>
              Not all carousel generators are created equal. Here&apos;s the honest
              breakdown of how AI-generated image carousels stack up against
              the alternatives.
            </p>

            <div style={{ overflowX: "auto" }}>
              <table className="ttc-compare-table">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th className="ttc-col-highlight">Scenith AI</th>
                    <th>Canva</th>
                    <th>Typeset / Carousel tools</th>
                    <th>Hiring a designer</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Real AI-generated images per slide</td>
                    <td className="ttc-yes ttc-col-highlight">✅ Yes</td>
                    <td className="ttc-no">❌ No</td>
                    <td className="ttc-no">❌ No</td>
                    <td className="ttc-maybe">⚠️ Depends</td>
                  </tr>
                  <tr>
                    <td>Thread paste-to-carousel workflow</td>
                    <td className="ttc-yes ttc-col-highlight">✅ Yes</td>
                    <td className="ttc-no">❌ No</td>
                    <td className="ttc-maybe">⚠️ Partial</td>
                    <td className="ttc-no">❌ No</td>
                  </tr>
                  <tr>
                    <td>7+ AI models to choose from</td>
                    <td className="ttc-yes ttc-col-highlight">✅ Yes</td>
                    <td className="ttc-no">❌ No</td>
                    <td className="ttc-no">❌ No</td>
                    <td className="ttc-no">❌ No</td>
                  </tr>
                  <tr>
                    <td>Animate carousel slide into video</td>
                    <td className="ttc-yes ttc-col-highlight">✅ One click</td>
                    <td className="ttc-no">❌ No</td>
                    <td className="ttc-no">❌ No</td>
                    <td className="ttc-maybe">⚠️ Expensive</td>
                  </tr>
                  <tr>
                    <td>Shared reference image across slides</td>
                    <td className="ttc-yes ttc-col-highlight">✅ Yes</td>
                    <td className="ttc-no">❌ No</td>
                    <td className="ttc-no">❌ No</td>
                    <td className="ttc-maybe">⚠️ Manual</td>
                  </tr>
                  <tr>
                    <td>Commercial rights included</td>
                    <td className="ttc-yes ttc-col-highlight">✅ Always</td>
                    <td className="ttc-maybe">⚠️ Plan dependent</td>
                    <td className="ttc-maybe">⚠️ Varies</td>
                    <td className="ttc-maybe">⚠️ Contract</td>
                  </tr>
                  <tr>
                    <td>Voice + Video included in same platform</td>
                    <td className="ttc-yes ttc-col-highlight">✅ Yes</td>
                    <td className="ttc-no">❌ No</td>
                    <td className="ttc-no">❌ No</td>
                    <td className="ttc-no">❌ No</td>
                  </tr>
                  <tr>
                    <td>Free tier available</td>
                    <td className="ttc-yes ttc-col-highlight">✅ 50 credits</td>
                    <td className="ttc-yes">✅ Limited</td>
                    <td className="ttc-maybe">⚠️ Very limited</td>
                    <td className="ttc-no">❌ No</td>
                  </tr>
                  <tr>
                    <td>Cost for 3-slide carousel</td>
                    <td className="ttc-col-highlight" style={{ color: "var(--ttc-accent)", fontWeight: 700 }}>from 30 credits (~$0.30)</td>
                    <td className="ttc-maybe">$13+/mo</td>
                    <td className="ttc-maybe">$20+/mo</td>
                    <td className="ttc-no">$50–$200</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              BEST PRACTICES
          ════════════════════════════════════════════════════ */}
          <section className="ttc-section">
            <div className="ttc-section-label">Get the most out of your carousels</div>
            <h2 className="ttc-section-title">10 Tips for Thread-to-Carousel Success</h2>
            <p className="ttc-section-sub">
              The AI does the heavy lifting, but these prompting and structuring
              techniques will make your carousel slides dramatically more effective.
            </p>

            <div className="ttc-tips-list">
              <div className="ttc-tip">
                <span className="ttc-tip-icon">🎯</span>
                <div>
                  <h4>Make Slide 1 a Pattern Interrupt</h4>
                  <p>
                    Your first slide is the only one that competes for the scroll.
                    Write its prompt to generate an image that stops thumb movement —
                    something dramatic, unusual, or emotionally charged. A bold
                    statistic as an overlay, a dramatic environment, or an
                    unexpected visual metaphor beats a &quot;generic business scene&quot;
                    every single time. Prompt tip: add &quot;cinematic, dramatic
                    lighting, high contrast&quot; to any Slide 1 prompt.
                  </p>
                </div>
              </div>

              <div className="ttc-tip">
                <span className="ttc-tip-icon">🔢</span>
                <div>
                  <h4>Structure Threads as Numbered Lists Before Converting</h4>
                  <p>
                    Threads structured as &quot;1/ 2/ 3/&quot; convert to carousels
                    most naturally. If your thread is narrative, restructure it into
                    3 clear points before generating — one insight per slide. The
                    AI handles the visual interpretation; you need to give it
                    conceptually clean separation between slides.
                  </p>
                </div>
              </div>

              <div className="ttc-tip">
                <span className="ttc-tip-icon">🎨</span>
                <div>
                  <h4>Maintain Visual Consistency with the Shared Image Feature</h4>
                  <p>
                    For personal brand carousels, upload a reference image (your
                    profile photo, your brand colours captured as an image, or
                    a reference style image) and use Scenith&apos;s &quot;shared
                    reference image&quot; toggle. The AI will maintain stylistic
                    coherence across all 3 slides while varying the composition —
                    making your carousel look like a designed set, not 3 random
                    generated images.
                  </p>
                </div>
              </div>

              <div className="ttc-tip">
                <span className="ttc-tip-icon">📐</span>
                <div>
                  <h4>Format First, Then Generate</h4>
                  <p>
                    Set your aspect ratio before writing a single prompt. Square
                    (1:1) for Instagram feed and LinkedIn document carousels.
                    Portrait (9:16) for Instagram Stories and TikTok. The AI
                    generates images with compositions optimised for the selected
                    ratio — choosing it after can mean recomposing everything.
                  </p>
                </div>
              </div>

              <div className="ttc-tip">
                <span className="ttc-tip-icon">🔬</span>
                <div>
                  <h4>Be Hyper-Specific in Your Slide Prompts</h4>
                  <p>
                    &quot;Business growth&quot; is a bad prompt. &quot;Aerial view of
                    a glowing city at night with an upward-trending light trail
                    connecting the tallest skyscraper to the stars, teal and gold
                    colour palette&quot; is a great prompt. The more specific the
                    scene description, the more distinctive and on-brand your
                    carousel will look.
                  </p>
                </div>
              </div>

              <div className="ttc-tip">
                <span className="ttc-tip-icon">🔄</span>
                <div>
                  <h4>Repurpose Your Top 10 Threads, Not Your Latest</h4>
                  <p>
                    Sort your X profile by engagement. Your top-performing threads
                    already proved they resonate with your audience — those are the
                    ones to turn into carousels. A thread with 500 impressions and
                    a thread with 50,000 impressions contain equal effort but very
                    different signal. Start with the winners.
                  </p>
                </div>
              </div>

              <div className="ttc-tip">
                <span className="ttc-tip-icon">🎬</span>
                <div>
                  <h4>Turn Your Best Carousel Slide into a Video</h4>
                  <p>
                    After generating your carousel, hit &quot;Animate Slide&quot;
                    on the slide with the best visual. Scenith sends it straight
                    to the video generator where Kling, Veo, or Wan 2.5 will
                    animate it. A 5-second animated loop of your carousel cover
                    slide is a powerful Instagram Story or LinkedIn video post —
                    and you&apos;ve now extracted three pieces of content (carousel,
                    animated slide, video) from one thread.
                  </p>
                </div>
              </div>

              <div className="ttc-tip">
                <span className="ttc-tip-icon">🗓️</span>
                <div>
                  <h4>Batch Generate on Sunday, Post Throughout the Week</h4>
                  <p>
                    At 10 credits per slide (Imagen 4 Fast), you can generate
                    an entire week&apos;s worth of 3-slide carousels (21 slides)
                    for 210 credits. At the Lite plan&apos;s 300 cr/month, that
                    covers your entire carousel content calendar for a month with
                    credits to spare for voice and video. Batch the generation,
                    schedule the posts.
                  </p>
                </div>
              </div>

              <div className="ttc-tip">
                <span className="ttc-tip-icon">💬</span>
                <div>
                  <h4>Write Your Last Slide CTA Before You Generate</h4>
                  <p>
                    Your carousel&apos;s final slide is where conversion happens.
                    Write its text overlay before generating the image so you
                    can describe the visual around the CTA — &quot;minimalist
                    slide with a single glowing button, dark background, warm
                    amber accent light, text space at bottom.&quot; Always end
                    with a follow, save, comment, or link directive.
                  </p>
                </div>
              </div>

              <div className="ttc-tip">
                <span className="ttc-tip-icon">📊</span>
                <div>
                  <h4>Test Models for Your Niche Before Committing</h4>
                  <p>
                    Different niches have different optimal models. If you post
                    in the tech/startup space, GPT Image 1 Medium and Imagen 4
                    Standard will likely outperform FLUX for your audience&apos;s
                    expectations. If you&apos;re in the creative or wellness space,
                    Stability AI Core and FLUX 1.1 Pro will feel more authentic.
                    Generate one slide with 2–3 models and compare before running
                    a full carousel batch.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              MORE PROSE: Platform Strategy & Distribution
          ════════════════════════════════════════════════════ */}
          <section className="ttc-section">
            <div className="ttc-prose">

              <h2>Platform-by-Platform Carousel Distribution Strategy</h2>

              <p>
                Generating your carousel is step one. Distributing it effectively
                across platforms is where the traffic, followers, and revenue
                actually come from. Here&apos;s how to approach each major platform
                in 2026:
              </p>

              <h3>LinkedIn: The Highest-ROI Platform for B2B Carousel Content</h3>

              <p>
                LinkedIn&apos;s algorithm in 2025–2026 continues to heavily reward
                document carousels (PDF uploads) because they keep users on the
                platform longer than link-out posts. The mechanism is simple: every
                swipe to a new slide signals to LinkedIn&apos;s algorithm that the
                content is engaging, triggering additional distribution.
              </p>

              <p>
                <strong>How to post LinkedIn carousels with Scenith-generated images:</strong>
                Download all 3 slides as PNGs, compile them into a single PDF
                (use any free PDF merger — Smallpdf, ilovepdf.com), then upload
                the PDF as a LinkedIn document post. LinkedIn renders each PDF
                page as a swipeable slide. This is currently the most viewed
                content format on LinkedIn.
              </p>

              <p>
                Best posting time for LinkedIn carousels: Tuesday through Thursday,
                between 7–9 AM or 12–2 PM in your target audience&apos;s timezone.
                Write the post copy as if you&apos;re introducing the first slide —
                tease the insight and let the carousel deliver.
              </p>

              <h3>Instagram: Carousels vs. Reels vs. Single Posts in 2026</h3>

              <p>
                Instagram&apos;s algorithm in 2026 still prioritises Reels for
                initial reach, but carousels are winning on a different metric:
                <strong>saves and sends</strong>. The save rate on carousels is
                consistently 2–4× higher than on single posts or Reels because
                people save carousels to reference later. And Instagram&apos;s
                algorithm heavily weights saves as a quality signal.
              </p>

              <p>
                Additionally, if someone doesn&apos;t engage with your carousel the
                first time they see it in feed, Instagram will show it a second
                time in a later session — starting from slide 2 or 3 rather than
                slide 1. This means a 3-slide carousel gets a second organic
                distribution opportunity automatically.
              </p>

              <div className="ttc-highlight-box">
                <strong>Tip:</strong> For Instagram carousels, always use the
                square (1:1) aspect ratio in Scenith. Portrait (9:16) works better
                for Stories. The last slide of any Instagram carousel should
                have a &quot;Save this&quot; or &quot;Share with someone who needs
                this&quot; prompt — saves and sends are the algorithm&apos;s
                primary quality signals for carousel content in 2026.
              </div>

              <h3>Pinterest: The Underrated Carousel Distribution Channel</h3>

              <p>
                Pinterest is still significantly underused by creator-economy
                professionals who focus on Instagram and LinkedIn. But Pinterest
                has a unique advantage: pins have an evergreen half-life measured
                in months and years, not hours. A carousel about productivity
                hacks, design tips, or business strategy pinned in April 2026 can
                still be surfaced to new users in October 2027.
              </p>

              <p>
                Scenith&apos;s AI-generated carousel images perform particularly
                well on Pinterest because Pinterest&apos;s algorithm prioritises
                visual quality — and AI-generated images, when prompted well,
                consistently outperform the visual complexity of average
                user-generated pins. Portrait (9:16) format is ideal for Pinterest
                since it takes up more vertical feed space.
              </p>

              <h3>X (Twitter) Cross-Post: Close the Loop</h3>

              <p>
                There&apos;s a beautiful loop available to any creator using this
                workflow: thread on X → carousel on LinkedIn/Instagram →
                quote-tweet your original thread with the LinkedIn carousel
                embedded as an image. This strategy gives your original thread
                a second engagement wave on X while driving cross-platform
                traffic to your LinkedIn profile or Instagram. It also signals
                to your X followers that you&apos;re building a presence elsewhere,
                driving multi-platform follows.
              </p>

              <h2>The Content Multiplication Formula: 1 Thread = 7 Pieces of Content</h2>

              <p>
                Here is the exact content multiplication workflow that the most
                efficient creators are running in 2026 — and how Scenith fits
                into it:
              </p>

              <ol>
                <li><strong>Thread on X</strong> — the original, proves the idea resonates</li>
                <li><strong>3-slide LinkedIn carousel</strong> (from thread via Scenith AI)</li>
                <li><strong>3-slide Instagram carousel</strong> (same slides, square crop)</li>
                <li><strong>Animated slide video</strong> (one Scenith carousel slide → AI video → Instagram Reel)</li>
                <li><strong>Pinterest pin collection</strong> (same slides repinned individually)</li>
                <li><strong>AI voiceover</strong> (thread text → Scenith voice → podcast clip / YouTube Short narration)</li>
                <li><strong>Newsletter intro</strong> (thread as email teaser, carousel as lead magnet)</li>
              </ol>

              <p>
                The thread was always the hard part. The words, the research, the
                perspective — that&apos;s the high-value work. Everything downstream
                is a formatting and distribution problem. And in 2026, AI solves
                formatting and distribution problems better, faster, and more
                cheaply than any human workflow ever could.
              </p>

              <p>
                Scenith is built to be the single platform where all of this
                happens: voice, image, carousel, and video under one login, one
                credit balance, one workflow. The thread-to-carousel generator is
                one piece of a larger content multiplication system — and every
                tool on the platform connects to every other tool.
              </p>

            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              SECONDARY CTA
          ════════════════════════════════════════════════════ */}
          <div className="ttc-inline-cta">
            <h3>Turn Your Thread Into a Carousel Right Now</h3>
            <p>
              Free to start. No design skills. No credit card. Just your
              thread and 30 seconds.
            </p>
            <a href={CTA_URL} className="ttc-cta-primary" style={{ display: "inline-flex" }}>
              🎠 Generate Free Carousel
              <span className="ttc-cta-arrow">→</span>
            </a>
          </div>

          {/* ════════════════════════════════════════════════════
              FAQ
          ════════════════════════════════════════════════════ */}
          <section className="ttc-section">
            <div className="ttc-section-label">Frequently asked questions</div>
            <h2 className="ttc-section-title">Everything You Need to Know</h2>
            <p className="ttc-section-sub" style={{ marginBottom: 28 }}>
              Answers to the most common questions about thread-to-carousel
              conversion and Scenith&apos;s AI carousel generator.
            </p>

            <div className="ttc-faq">

              <details className="ttc-faq-item">
                <summary className="ttc-faq-q">
                  Can I directly paste my X/Twitter thread and get a carousel?
                  <span className="ttc-faq-chevron">▼</span>
                </summary>
                <div className="ttc-faq-a">
                  <p>
                    Yes. Paste your thread text into the Carousel tab on Scenith&apos;s
                    AI Creator page. You&apos;ll use the Carousel mode (🎠 Carousel button
                    in the Image tab) where you can fill individual slide prompts — one
                    per tweet or concept. You can use the full thread as a shared
                    context prompt and break the individual tweets into per-slide
                    descriptions. The AI then generates a unique image for each slide.
                  </p>
                </div>
              </details>

              <details className="ttc-faq-item">
                <summary className="ttc-faq-q">
                  Does Scenith generate text overlays on the carousel slides, or just images?
                  <span className="ttc-faq-chevron">▼</span>
                </summary>
                <div className="ttc-faq-a">
                  <p>
                    Scenith generates high-resolution AI images per slide — not
                    text-on-gradient slides. You add your thread text as text overlays
                    when you upload to LinkedIn (PDF), Instagram, or Canva if you
                    want text on top of the images. This gives you maximum flexibility:
                    use the AI images as standalone visuals, or as rich backgrounds
                    for your text.
                  </p>
                  <p>
                    Many creators prefer using the images as-is (the visual communicates
                    the concept without text) or adding a single bold headline in
                    LinkedIn&apos;s PDF viewer. The choice is yours.
                  </p>
                </div>
              </details>

              <details className="ttc-faq-item">
                <summary className="ttc-faq-q">
                  How many carousel slides can I generate at once?
                  <span className="ttc-faq-chevron">▼</span>
                </summary>
                <div className="ttc-faq-a">
                  <p>
                    Scenith&apos;s Carousel mode generates up to 3 slides in a single
                    batch. Each slide has its own prompt, optional reference image,
                    and individual download. To generate a 6-slide carousel, run two
                    batches of 3. Most effective LinkedIn and Instagram carousels
                    are 3–7 slides — 3 is the sweet spot for audience retention on
                    first view.
                  </p>
                </div>
              </details>

              <details className="ttc-faq-item">
                <summary className="ttc-faq-q">
                  Which AI model produces the best carousel images for LinkedIn?
                  <span className="ttc-faq-chevron">▼</span>
                </summary>
                <div className="ttc-faq-a">
                  <p>
                    For LinkedIn business and professional carousels, GPT Image 1
                    Medium (standard quality) is the most consistently strong
                    performer — it handles corporate scenes, product visuals, and
                    abstract business concepts with high visual fidelity. For
                    thought leadership and personal branding content with a more
                    editorial feel, FLUX 1.1 Pro is the creative alternative.
                    Imagen 4 Standard is best for data-driven, scientific, or
                    educational carousels where photorealism matters most.
                  </p>
                </div>
              </details>

              <details className="ttc-faq-item">
                <summary className="ttc-faq-q">
                  How much does it cost to generate a 3-slide carousel?
                  <span className="ttc-faq-chevron">▼</span>
                </summary>
                <div className="ttc-faq-a">
                  <p>
                    The cost depends on which AI model and quality setting you choose.
                    The most affordable option is Imagen 4 Fast at 10 credits per
                    slide — a 3-slide carousel costs 30 credits total. GPT Image 1
                    Mini in standard quality costs 15 credits per slide (45 total
                    for 3 slides). Premium quality with GPT Image 1 or Nano Banana
                    Pro 4K can cost 46+ credits per slide.
                  </p>
                  <p>
                    On the $9/month Lite plan (300 credits), you can generate
                    approximately 6–10 full 3-slide carousels per month, plus
                    have credits remaining for voice and video generation.
                  </p>
                </div>
              </details>

              <details className="ttc-faq-item">
                <summary className="ttc-faq-q">
                  Can I use the AI carousel images commercially?
                  <span className="ttc-faq-chevron">▼</span>
                </summary>
                <div className="ttc-faq-a">
                  <p>
                    Yes — full commercial rights are included with every image
                    generated on Scenith. You can use carousel slides in paid
                    ads, client deliverables, product pages, sponsored posts, and
                    any commercial context without attribution or licensing fees.
                    No watermarks. No restrictions.
                  </p>
                </div>
              </details>

              <details className="ttc-faq-item">
                <summary className="ttc-faq-q">
                  Can I turn a carousel slide into an animated video?
                  <span className="ttc-faq-chevron">▼</span>
                </summary>
                <div className="ttc-faq-a">
                  <p>
                    Yes — this is one of Scenith&apos;s most powerful cross-tool
                    features. After generating your carousel, click &quot;🎬 Animate
                    Slide&quot; on any slide and Scenith automatically sends that
                    image to the Video generator. From there, you choose your video
                    model (Kling, Veo, Wan 2.5, Grok Imagine), add a motion prompt,
                    and generate a 5–10 second animated version of your carousel
                    slide. This is ideal for Instagram Reels, LinkedIn video posts,
                    and YouTube Shorts.
                  </p>
                </div>
              </details>

              <details className="ttc-faq-item">
                <summary className="ttc-faq-q">
                  Does Scenith work for Instagram carousel posts specifically?
                  <span className="ttc-faq-chevron">▼</span>
                </summary>
                <div className="ttc-faq-a">
                  <p>
                    Yes. Select the square (1:1) aspect ratio for Instagram feed
                    carousels or portrait (9:16) for Stories. Download each slide
                    as a PNG and upload them in order to Instagram as a multi-image
                    post — Instagram automatically treats multiple images as a
                    swipeable carousel. The high-resolution output from Scenith
                    meets Instagram&apos;s recommended image quality standards.
                  </p>
                </div>
              </details>

              <details className="ttc-faq-item">
                <summary className="ttc-faq-q">
                  I don&apos;t have a thread yet. Can I still use this to make carousels?
                  <span className="ttc-faq-chevron">▼</span>
                </summary>
                <div className="ttc-faq-a">
                  <p>
                    Absolutely. The Carousel mode accepts any prompt — you don&apos;t
                    need an existing thread. Write your 3 slide concepts directly
                    (e.g., &quot;Slide 1: Why consistency beats motivation&quot;,
                    &quot;Slide 2: The compound effect in action&quot;, &quot;Slide 3:
                    Your 30-day challenge&quot;) and the AI generates images for
                    each. Use the 30+ built-in prompt suggestions for instant
                    inspiration across 15 content categories.
                  </p>
                </div>
              </details>

            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              RELATED TOOLS
          ════════════════════════════════════════════════════ */}
          <section className="ttc-section">
            <div className="ttc-section-label">More Scenith tools</div>
            <h2 className="ttc-section-title">Complete Your Content Stack</h2>
            <p className="ttc-section-sub" style={{ marginBottom: 24 }}>
              Carousel is just one piece. The full Scenith platform covers
              every content format a modern creator needs.
            </p>

            <div className="ttc-related-grid">
              <a href="https://scenith.in/create-ai-content?tab=voice&utm_source=thread-to-carousel-tool&utm_medium=related-tools" className="ttc-related-card">
                <span className="ttc-related-icon">🎙️</span>
                <h4>AI Voice Generator</h4>
                <p>Turn thread text into podcast narration, YouTube voiceovers, or ad scripts in 40+ voices.</p>
              </a>
              <a href="https://scenith.in/create-ai-content?tab=video&utm_source=thread-to-carousel-tool&utm_medium=related-tools" className="ttc-related-card">
                <span className="ttc-related-icon">🎬</span>
                <h4>AI Video Generator</h4>
                <p>Animate your carousel slides into Reels and Shorts with Kling, Veo, and Wan 2.5.</p>
              </a>
              <a href="https://scenith.in/create-ai-content?tab=image&utm_source=thread-to-carousel-tool&utm_medium=related-tools" className="ttc-related-card">
                <span className="ttc-related-icon">🖼️</span>
                <h4>AI Image Generator</h4>
                <p>Generate standalone images for thumbnails, social posts, and ad creatives with 7 AI models.</p>
              </a>
              <a href="https://scenith.in/tools" className="ttc-related-card">
                <span className="ttc-related-icon">🛠️</span>
                <h4>All AI Tools</h4>
                <p>Explore the full suite of Scenith micro-tools built for creators, marketers, and teams.</p>
              </a>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              FOOTER CTA
          ════════════════════════════════════════════════════ */}
          <div className="ttc-footer-cta">
            <h2>
              Your Best Thread Deserves{" "}
              <span style={{ background: "linear-gradient(135deg, #f59e0b, #fb923c)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                a Second Life
              </span>
            </h2>
            <p>
              Stop letting your best ideas fade after 18 hours on X. Generate
              AI carousel slides that reach a new audience on LinkedIn and
              Instagram — free to start, no design skills needed.
            </p>
            <a href={CTA_URL} className="ttc-cta-primary" style={{ display: "inline-flex" }}>
              🎠 Generate My Carousel Now
              <span className="ttc-cta-arrow">→</span>
            </a>
            <p>
              50 free credits · No credit card · Commercial rights included
            </p>
          </div>

        </div>{/* /ttc-content */}
      </div>{/* /ttc-page */}
    </>
  );
}