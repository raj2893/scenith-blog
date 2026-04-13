// app/tools/script-to-carousel-generator/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import "./script-to-carousel-generator.css";

// ── SEO Metadata (Optimized for 2026, conversational & long-tail keywords) ──
export const metadata: Metadata = {
  title: "Script to Carousel AI Generator — Turn Any Script into LinkedIn & Instagram Carousel Slides | Scenith",
  description:
    "Stop leaving your scripts as plain text. Convert scripts, video outlines, podcast notes, and webinar content into high-engagement LinkedIn & Instagram carousel slides using Scenith's AI. Free to start.",
  keywords: [
    "script to carousel",
    "script to carousel generator",
    "video script to carousel",
    "youtube script to linkedin carousel",
    "podcast notes to instagram slides",
    "ai carousel from script",
    "convert script to slides",
    "content repurposing script to carousel",
    "script to social media slides",
    "ai carousel maker",
    "linkedin carousel generator",
    "instagram carousel from text",
    "scenith script to carousel",
    "turn outline into carousel",
    "webinar to carousel slides",
    "script to visual story",
  ],
  openGraph: {
    title: "Script to Carousel AI — Repurpose Any Script into Viral Slides",
    description:
      "Transform scripts, outlines, and long-form text into scroll-stopping LinkedIn & Instagram carousel slides with AI. No design skills needed.",
    url: "https://scenith.in/tools/script-to-carousel-generator",
    siteName: "Scenith",
    type: "website",
    images: [
      {
        url: "https://scenith.in/og/script-to-carousel.jpg",
        width: 1200,
        height: 630,
        alt: "Script to Carousel AI Generator by Scenith",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Script to Carousel AI — Turn Scripts into Slides",
    description:
      "Paste any script. AI generates scroll-stopping LinkedIn & Instagram carousel slides in seconds.",
    images: ["https://scenith.in/og/script-to-carousel.jpg"],
  },
  alternates: {
    canonical: "https://scenith.in/tools/script-to-carousel-generator",
  },
};

// ── JSON-LD Structured Data (Rich snippets for AI tool and FAQ) ──
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://scenith.in/tools/script-to-carousel-generator",
      url: "https://scenith.in/tools/script-to-carousel-generator",
      name: "Script to Carousel AI Generator",
      description:
        "Convert any script (video, podcast, webinar) into LinkedIn and Instagram carousel slides instantly with AI. Free tool by Scenith.",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://scenith.in" },
          { "@type": "ListItem", position: 2, name: "Tools", item: "https://scenith.in/tools" },
          {
            "@type": "ListItem",
            position: 3,
            name: "Script to Carousel AI Generator",
            item: "https://scenith.in/tools/script-to-carousel-generator",
          },
        ],
      },
    },
    {
      "@type": "SoftwareApplication",
      name: "Script to Carousel AI Generator",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Web",
      url: "https://scenith.in/tools/script-to-carousel-generator",
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
          name: "Can I convert a YouTube script into a LinkedIn carousel?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Paste your YouTube script (or any script) into Scenith's AI carousel generator, choose your slide count and style, and the AI will produce ready-to-post carousel images optimised for LinkedIn and Instagram in seconds.",
          },
        },
        {
          "@type": "Question",
          name: "Is the script to carousel generator free?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You get 50 free credits on sign-up — no credit card required. Each carousel slide costs credits, and paid plans start at $9/month for 300 credits.",
          },
        },
        {
          "@type": "Question",
          name: "What kind of scripts can I use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Any kind: YouTube scripts, podcast outlines, webinar transcripts, training manuals, keynote presentations, or even rough bullet points. The AI structures your content into clear, slide-ready sections.",
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

// ── CTA URL (with UTM parameters for tracking) ──
const CTA_URL =
  "https://scenith.in/create-ai-content?tab=image&utm_source=script-to-carousel-tool&utm_medium=micro-tool&utm_campaign=carousel-generator-2026";

// ── Page Component ────────────────────────────────────────────────────────────
export default function ScriptToCarouselPage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="stc-page">
        {/* Ambient background for visual depth */}
        <div className="stc-ambient">
          <div className="stc-blob stc-blob-1" />
          <div className="stc-blob stc-blob-2" />
          <div className="stc-blob stc-blob-3" />
        </div>
        <div className="stc-grid-bg" />

        {/* ── Nav ── */}
        <nav className="stc-nav">
          <a href="https://scenith.in" className="stc-nav-logo">
            SCEN<span>ITH</span>
          </a>
          <ul className="stc-nav-links">
            <li><a href="https://scenith.in/create-ai-content">AI Creator</a></li>
            <li><a href="https://scenith.in/tools">All Tools</a></li>
            <li><a href="https://scenith.in/pricing">Pricing</a></li>
            <li>
              <a href={CTA_URL} className="stc-nav-cta">
                Try Free →
              </a>
            </li>
          </ul>
        </nav>

        <div className="stc-content">
          {/* ════════════════════════════════════════════════════
              HERO SECTION
          ════════════════════════════════════════════════════ */}
          <section className="stc-hero">
            <div className="stc-eyebrow">
              <span className="stc-eyebrow-dot" />
              AI Content Repurposing · 2026
            </div>

            <h1 className="stc-hero-title">
              Turn Any Script Into a{" "}
              <span className="stc-highlight">Scroll-Stopping Carousel</span>
            </h1>

            <p className="stc-hero-sub">
              Stop letting your scripts live only as text. Paste your script — YouTube,
              podcast, webinar, training — and Scenith AI generates ready-to-post LinkedIn
              and Instagram carousel slides with real AI images in under 30 seconds.
            </p>

            <div className="stc-cta-block">
              <a
                href={CTA_URL}
                className="stc-cta-primary"
                rel="noopener"
              >
                🎠 Generate My Carousel Free
                <span className="stc-cta-arrow">→</span>
              </a>
              <div className="stc-cta-note">
                <span>✅ No credit card</span>
                <span>·</span>
                <span>⚡ 50 free credits on signup</span>
                <span>·</span>
                <span>📥 Download PNG instantly</span>
              </div>
            </div>

            <div className="stc-trust-badges">
              <div className="stc-badge"><span className="stc-badge-icon">🖼️</span>Real AI-generated images, not templates</div>
              <div className="stc-badge"><span className="stc-badge-icon">🤖</span>GPT · Imagen 4 · FLUX · Grok Aurora</div>
              <div className="stc-badge"><span className="stc-badge-icon">📱</span>LinkedIn · Instagram · Pinterest</div>
              <div className="stc-badge"><span className="stc-badge-icon">💼</span>Commercial rights included</div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              VISUAL MOCKUP (Script → Carousel)
          ════════════════════════════════════════════════════ */}
          <section className="stc-mockup-section">
            <div className="stc-section-label">How the magic works</div>
            <div className="stc-mockup-wrapper">
              <div className="stc-mockup-glow" />
              <div className="stc-mockup-frame">
                <div className="stc-mockup-topbar">
                  <div className="stc-dot-red" />
                  <div className="stc-dot-yellow" />
                  <div className="stc-dot-green" />
                  <div className="stc-mockup-url">scenith.in/create-ai-content</div>
                </div>
                <div className="stc-mockup-body">
                  {/* Script Input Column */}
                  <div className="stc-script-col">
                    <div className="stc-script-header">
                      <div className="stc-script-avatar">📜</div>
                      <div>
                        <div className="stc-script-title">Your Script</div>
                        <div className="stc-script-type">YouTube / Podcast / Webinar</div>
                      </div>
                    </div>
                    <div className="stc-script-line">
                      <div className="stc-script-num">🎬</div>
                      <div>In this video, I'm going to show you the 3 biggest mistakes creators make when trying to grow on LinkedIn...</div>
                    </div>
                    <div className="stc-script-connector" />
                    <div className="stc-script-line">
                      <div className="stc-script-num">🎙️</div>
                      <div>Mistake #1: Posting without a hook. The first 3 lines of your post determine 80% of your reach...</div>
                    </div>
                    <div className="stc-script-connector" />
                    <div className="stc-script-line">
                      <div className="stc-script-num">💡</div>
                      <div>Mistake #2: Ignoring the power of carousels. Data shows carousels get 3x more saves than single images...</div>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="stc-mockup-arrow">
                    <div className="stc-arrow-line">
                      <span className="stc-arrow-icon">→</span>
                    </div>
                    <div className="stc-arrow-label">AI Magic</div>
                  </div>

                  {/* Carousel Output Column */}
                  <div className="stc-carousel-col">
                    <div className="stc-carousel-slide stc-slide-active">
                      <span className="stc-slide-num">Slide 1</span>
                      <span className="stc-slide-emoji">🚀</span>
                      <div className="stc-slide-title">3 LinkedIn Mistakes Costing You Reach</div>
                      <div className="stc-slide-body">Most creators ignore these. Here's how to fix them.</div>
                      <div className="stc-slide-bar" />
                    </div>
                    <div className="stc-carousel-slide">
                      <span className="stc-slide-num">Slide 2</span>
                      <span className="stc-slide-emoji">🎣</span>
                      <div className="stc-slide-title">The Hook Formula That Works</div>
                      <div className="stc-slide-body">80% of your reach depends on the first 3 lines.</div>
                      <div className="stc-slide-bar" style={{ width: "65%" }} />
                    </div>
                    <div className="stc-carousel-slide">
                      <span className="stc-slide-num">Slide 3</span>
                      <span className="stc-slide-emoji">📊</span>
                      <div className="stc-slide-title">Carousels = 3x More Saves</div>
                      <div className="stc-slide-body">Data doesn't lie. Here's how to leverage it.</div>
                      <div className="stc-slide-bar" style={{ width: "85%" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              HOW IT WORKS (3 steps)
          ════════════════════════════════════════════════════ */}
          <section className="stc-section">
            <div className="stc-section-label">Simple workflow</div>
            <h2 className="stc-section-title">From Script to Slides in 3 Steps</h2>
            <p className="stc-section-sub">
              No design skills, no Canva, no expensive freelancers. Just your script
              and the AI.
            </p>

            <div className="stc-steps">
              <div className="stc-step">
                <div className="stc-step-num">01</div>
                <div className="stc-step-content">
                  <h3>Paste Your Script (or Write from Scratch)</h3>
                  <p>
                    Copy your script — YouTube script, podcast outline, webinar transcript,
                    training manual, or even rough bullet points — and paste it directly
                    into Scenith's Carousel mode. The AI will intelligently break your
                    script into slide-ready sections. Not ready with a script? Write a
                    short prompt like "5 lessons from building a startup" and the AI will
                    help you expand it into a full carousel.
                  </p>
                  <span className="stc-step-badge">⚡ Works with any script format</span>
                </div>
              </div>

              <div className="stc-step">
                <div className="stc-step-num">02</div>
                <div className="stc-step-content">
                  <h3>Choose AI Model, Visual Style & Slide Format</h3>
                  <p>
                    Select from 7 state-of-the-art AI image models — GPT Image 1,
                    Imagen 4 (Fast or Standard), FLUX 1.1 Pro, Grok Aurora,
                    Stability AI Core, or Nano Banana Pro. Pick your visual style:
                    realistic photo, digital art, 3D render, anime, fantasy, or
                    vintage. Set your aspect ratio to square (1:1) for Instagram
                    or landscape (16:9) for LinkedIn. Each slide gets its own
                    unique AI-generated image — not stock photos, not templates.
                  </p>
                  <span className="stc-step-badge">🎨 8 visual styles</span>
                </div>
              </div>

              <div className="stc-step">
                <div className="stc-step-num">03</div>
                <div className="stc-step-content">
                  <h3>Generate, Download & Post</h3>
                  <p>
                    Hit "Generate Carousel." Scenith generates each slide
                    sequentially with real AI image generation — not text overlaid
                    on gradients. Each slide is a standalone high-resolution PNG
                    you download individually. Upload them in order to LinkedIn,
                    Instagram, or Pinterest. Your script just became a piece of
                    evergreen content that will drive impressions for weeks.
                  </p>
                  <span className="stc-step-badge">📥 Download all slides as PNG</span>
                </div>
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              STATS SECTION
          ════════════════════════════════════════════════════ */}
          <div className="stc-stats-row">
            <div className="stc-stat-card">
              <div className="stc-stat-num">3×</div>
              <div className="stc-stat-label">More LinkedIn impressions vs single posts (2025 data)</div>
            </div>
            <div className="stc-stat-card">
              <div className="stc-stat-num">7+</div>
              <div className="stc-stat-label">AI image models to choose from</div>
            </div>
            <div className="stc-stat-card">
              <div className="stc-stat-num">30s</div>
              <div className="stc-stat-label">Average time to generate your first carousel slide</div>
            </div>
            <div className="stc-stat-card">
              <div className="stc-stat-num">50</div>
              <div className="stc-stat-label">Free credits on signup — no card required</div>
            </div>
          </div>

          {/* ════════════════════════════════════════════════════
              INLINE CTA
          ════════════════════════════════════════════════════ */}
          <div className="stc-inline-cta">
            <h3>Ready to repurpose your best scripts?</h3>
            <p>Start generating carousel slides from your scripts — free, right now.</p>
            <a href={CTA_URL} className="stc-cta-primary" style={{ display: "inline-flex" }}>
              🎠 Open Carousel Generator
              <span className="stc-cta-arrow">→</span>
            </a>
          </div>

          {/* ════════════════════════════════════════════════════
              FEATURES GRID
          ════════════════════════════════════════════════════ */}
          <section className="stc-section">
            <div className="stc-section-label">What makes Scenith different</div>
            <h2 className="stc-section-title">Not Just Another Slide Maker</h2>
            <p className="stc-section-sub">
              Most "carousel tools" paste your text on a coloured box.
              Scenith generates real AI images for every slide.
            </p>

            <div className="stc-features-grid">
              <div className="stc-feature-card">
                <span className="stc-feature-icon">🖼️</span>
                <h3>Real AI Images Per Slide</h3>
                <p>
                  Every slide gets a unique, AI-generated image — not a stock
                  photo, not a coloured background with text. Powered by GPT
                  Image 1, Imagen 4, FLUX 1.1 Pro, and more.
                </p>
              </div>
              <div className="stc-feature-card">
                <span className="stc-feature-icon">🎠</span>
                <h3>Up to 3 Slides at Once</h3>
                <p>
                  The Carousel mode generates up to 3 slides in a single workflow,
                  each with its own prompt and optional reference image. Run all 3
                  in sequence automatically.
                </p>
              </div>
              <div className="stc-feature-card">
                <span className="stc-feature-icon">🔗</span>
                <h3>Shared Reference Image</h3>
                <p>
                  Want a consistent visual identity across slides? Upload one
                  reference image and apply it as the style base for all 3 slides
                  simultaneously.
                </p>
              </div>
              <div className="stc-feature-card">
                <span className="stc-feature-icon">📐</span>
                <h3>Any Aspect Ratio</h3>
                <p>
                  Square 1:1 for Instagram, landscape 16:9 for LinkedIn, portrait
                  9:16 for Stories. Choose the format that fits your platform
                  before generating.
                </p>
              </div>
              <div className="stc-feature-card">
                <span className="stc-feature-icon">🎨</span>
                <h3>8 Visual Styles</h3>
                <p>
                  Realistic photography, digital art, anime, 3D render, fantasy,
                  sci-fi, vintage, and artistic. Each style completely transforms
                  the output aesthetic.
                </p>
              </div>
              <div className="stc-feature-card">
                <span className="stc-feature-icon">🎬</span>
                <h3>Animate Any Slide</h3>
                <p>
                  Done generating? Click "Animate Slide" on any card
                  and the image gets sent directly to the AI Video generator.
                  Turn your carousel into a Reel in one click.
                </p>
              </div>
              <div className="stc-feature-card">
                <span className="stc-feature-icon">📥</span>
                <h3>High-Res PNG Download</h3>
                <p>
                  Every slide downloads as a full-resolution PNG — no
                  watermarks, no quality compression, full commercial rights
                  included.
                </p>
              </div>
              <div className="stc-feature-card">
                <span className="stc-feature-icon">💡</span>
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
              LONG-FORM SEO CONTENT (UNIQUE PROSE FOR SCRIPT → CAROUSEL)
          ════════════════════════════════════════════════════ */}
          <section className="stc-section">
            <div className="stc-prose">

              <h2>Why Convert Your Scripts into Carousels in 2026?</h2>

              <p>
                If you're a content creator, marketer, or educator, you know the
                struggle: you spend hours writing a script — for a YouTube video,
                a podcast episode, a webinar, or a training session. It's full of
                insights, data, and actionable advice. And then? It lives as a
                wall of text in a Google Doc, or as a voiceover in a video that
                gets watched once and forgotten.
              </p>

              <p>
                Meanwhile, carousels on LinkedIn and Instagram are quietly becoming
                the highest-ROI content format of 2026. <strong>LinkedIn's algorithm
                heavily favors document carousels</strong> because they keep users
                on the platform longer. Instagram carousels get 2-4x more saves
                than single images because people save them to reference later.
                And Pinterest pins have an evergreen lifespan of months or years.
              </p>

              <div className="stc-highlight-box">
                <strong>The opportunity:</strong> Your script already contains
                researched, structured, and proven ideas. The hard part —
                developing the core message — is done. Turning it into a carousel
                is a formatting problem. And in 2026, AI is extraordinarily good
                at solving formatting problems.
              </div>

              <h3>The Old Way: Manual Carousel Creation is Broken</h3>

              <p>
                Let's be honest about what making a carousel used to look like.
                You'd open Canva, fight with a template that doesn't match your
                brand, export individual slides, resize them for different platforms,
                manually write headlines for each slide, source stock photos that
                look like every other creator's stock photos, and spend 45–90 minutes
                on a piece of content that represents 15 minutes of actual thinking.
              </p>

              <p>
                Or you'd pay a designer $50–$200 per carousel. Or you'd use an AI
                text-to-slide tool that puts white text on a purple gradient and
                calls it a carousel. None of these options actually solve the
                problem of turning a script into a visually distinct, scroll-stopping
                slide deck.
              </p>

              <h3>How AI Changes the Game for Script Repurposing</h3>

              <p>
                In 2026, AI image models like GPT Image 1, Imagen 4, and FLUX 1.1
                Pro have crossed a threshold: you can describe a specific scene,
                mood, or composition in plain language and receive a photorealistic
                or artistically coherent image that exactly matches the description
                — reliably, every time.
              </p>

              <p>
                For repurposing scripts, this is transformational. Instead of
                hunting for a stock photo of "business growth" that looks the same
                as everyone else's, you describe exactly the visual that matches
                each section of your script. Slide 1 about the hook? <strong>Prompt:
                "A fisherman casting a glowing net into a digital ocean, neon blue
                light, cinematic wide shot."</strong> Slide 2 about data? <strong>
                Prompt: "Abstract data visualization rendered as a glowing city
                at night, each data point a building light."</strong>
              </p>

              <p>
                Now every slide has a unique, striking image that no other creator
                has — because it was generated specifically for your script, your
                words, your ideas.
              </p>

              <h2>Which AI Model Should You Use for Script-to-Carousel?</h2>

              <p>
                Scenith gives you access to 7 different AI image models inside the
                Carousel generator. Choosing the right one depends on the visual
                style you're going for and your credit budget.
              </p>

              <h3>GPT Image 1 Mini & Medium (OpenAI)</h3>
              <p>
                GPT Image 1 is OpenAI's flagship image generation model as of
                2025–2026. The Mini variant is fast and cost-efficient — ideal
                when you need to crank out carousel content quickly. The Medium
                variant produces noticeably richer detail and handles complex
                scene compositions better. Both support image-to-image generation,
                meaning you can upload a reference image and the model will
                stylistically reimagine it while maintaining structural composition.
                For business-themed carousels with a clean, professional look, GPT
                Image 1 Medium in "standard" quality is the go-to.
              </p>

              <h3>Imagen 4 Fast & Standard (Google DeepMind)</h3>
              <p>
                Google's Imagen 4 is the model of choice for educational and
                documentary-style carousels. It excels at naturalistic lighting,
                photorealistic textures, and accurate rendering of complex scenes.
                Imagen 4 Fast is exactly what it sounds like — same quality philosophy,
                faster generation, lower credit cost. Standard is the premium tier
                with maximum detail. For carousels about science, nature, technology,
                or anything that benefits from a "National Geographic" aesthetic,
                Imagen 4 is your model.
              </p>

              <h3>FLUX 1.1 Pro (Black Forest Labs)</h3>
              <p>
                FLUX 1.1 Pro is the underground favourite of art directors and
                visual-first creators. It has a distinct aesthetic that sits
                between hyper-realism and editorial illustration — bold,
                atmospheric, with unusual colour palettes. For personal branding
                carousels, motivational content, or anything that needs to look
                distinctly artistic rather than corporate, FLUX delivers something
                other models simply cannot replicate.
              </p>

              <h2>Platform-by-Platform: Where to Post Your Script-Based Carousels</h2>

              <p>
                Generating your carousel is step one. Distributing it effectively
                is where the traffic actually comes from.
              </p>

              <h3>LinkedIn: The B2B Powerhouse</h3>
              <p>
                LinkedIn's algorithm in 2026 continues to heavily reward document
                carousels (PDF uploads) because they keep users on the platform
                longer. Every swipe to a new slide signals engagement, triggering
                more distribution.
              </p>
              <p>
                <strong>How to post:</strong> Download your slides as PNGs, compile
                them into a single PDF (free tools like ilovepdf.com work perfectly),
                then upload the PDF as a LinkedIn document post. Best times:
                Tuesday–Thursday, 7–9 AM or 12–2 PM in your audience's timezone.
              </p>

              <h3>Instagram: Saves & Sends Rule</h3>
              <p>
                Instagram's algorithm in 2026 still prioritizes Reels for reach,
                but carousels win on <strong>saves and sends</strong>. The save
                rate on carousels is consistently 2–4x higher than single posts
                because people save carousels to reference later.
              </p>
              <p>
                <strong>Tip:</strong> Use square (1:1) aspect ratio for feed carousels.
                Always end with a "Save this" or "Share with someone who needs this"
                prompt — saves and sends are the algorithm's primary quality signals
                for carousel content.
              </p>

              <h3>Pinterest: The Evergreen Channel</h3>
              <p>
                Pinterest is still underused by most professional creators. But
                pins have an evergreen half-life measured in months and years.
                A carousel about productivity hacks or business strategy pinned
                today can still surface to new users next year.
              </p>
              <p>
                Scenith's AI-generated carousel images perform particularly well
                on Pinterest because the algorithm prioritizes visual quality.
                Portrait (9:16) format is ideal for Pinterest since it takes up
                more vertical feed space.
              </p>

              <h2>The Script Multiplication Formula: 1 Script = 5+ Content Pieces</h2>
              <p>
                Here's the exact content multiplication workflow that efficient
                creators are running in 2026:
              </p>
              <ol>
                <li><strong>Original script</strong> — the source of truth</li>
                <li><strong>3-slide LinkedIn carousel</strong> (from script via Scenith AI)</li>
                <li><strong>3-slide Instagram carousel</strong> (same slides, square crop)</li>
                <li><strong>Animated slide video</strong> (one carousel slide → AI video → Reel)</li>
                <li><strong>Pinterest pin collection</strong> (same slides repinned individually)</li>
                <li><strong>Newsletter teaser</strong> (script as email, carousel as lead magnet)</li>
              </ol>
              <p>
                The script was always the hard part. The research, the structure,
                the core message — that's the high-value work. Everything downstream
                is a formatting and distribution problem. And in 2026, AI solves
                formatting and distribution problems better than any human workflow.
              </p>

            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              USE CASES (Script-specific)
          ════════════════════════════════════════════════════ */}
          <section className="stc-section">
            <div className="stc-section-label">Who uses this tool</div>
            <h2 className="stc-section-title">Built for Script-Heavy Creators</h2>
            <p className="stc-section-sub">
              If you write scripts, you need this tool. Here's how different roles
              are using script-to-carousel repurposing.
            </p>

            <div className="stc-usecases-grid">
              <div className="stc-uc-card">
                <span className="stc-uc-emoji">🎥</span>
                <h3>YouTubers & Video Creators</h3>
                <p>
                  Turn your video scripts into LinkedIn carousels that drive new
                  viewers to your channel. Use the carousel as a teaser — each
                  slide covers one key point from the video.
                </p>
                <span className="stc-uc-tag">Audience Growth</span>
              </div>
              <div className="stc-uc-card">
                <span className="stc-uc-emoji">🎙️</span>
                <h3>Podcasters</h3>
                <p>
                  Your podcast notes and episode outlines are perfect carousel
                  material. Create visual summaries of each episode for Instagram
                  and LinkedIn, driving new listeners to your show.
                </p>
                <span className="stc-uc-tag">Cross-Promotion</span>
              </div>
              <div className="stc-uc-card">
                <span className="stc-uc-emoji">📚</span>
                <h3>Course Creators & Trainers</h3>
                <p>
                  Turn training manuals, webinar scripts, and lesson plans into
                  engaging carousels that your audience saves and shares. Perfect
                  for lead magnets and course previews.
                </p>
                <span className="stc-uc-tag">Lead Generation</span>
              </div>
              <div className="stc-uc-card">
                <span className="stc-uc-emoji">📝</span>
                <h3>Marketers & Copywriters</h3>
                <p>
                  Your campaign briefs, sales scripts, and webinar outlines can
                  become LinkedIn carousels that establish thought leadership and
                  drive B2B engagement.
                </p>
                <span className="stc-uc-tag">Thought Leadership</span>
              </div>
              <div className="stc-uc-card">
                <span className="stc-uc-emoji">👔</span>
                <h3>Corporate Trainers</h3>
                <p>
                  Transform internal training scripts and SOPs into visual carousels
                  for employee onboarding and professional development. Much higher
                  engagement than text documents.
                </p>
                <span className="stc-uc-tag">Internal Comms</span>
              </div>
              <div className="stc-uc-card">
                <span className="stc-uc-emoji">🎤</span>
                <h3>Keynote Speakers</h3>
                <p>
                  Your speech scripts and presentation outlines can become
                  LinkedIn carousels that build authority before your next event.
                  Share your framework with a wider audience.
                </p>
                <span className="stc-uc-tag">Personal Branding</span>
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              COMPARISON TABLE
          ════════════════════════════════════════════════════ */}
          <section className="stc-section">
            <div className="stc-section-label">Platform comparison</div>
            <h2 className="stc-section-title">How Scenith Compares for Script Repurposing</h2>
            <p className="stc-section-sub" style={{ marginBottom: 24 }}>
              Not all carousel generators are created equal. Here's the honest
              breakdown for turning scripts into slides.
            </p>

            <div style={{ overflowX: "auto" }}>
              <table className="stc-compare-table">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th className="stc-col-highlight">Scenith AI</th>
                    <th>Canva</th>
                    <th>Typeset / Other Tools</th>
                    <th>Hiring a Designer</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Real AI-generated images per slide</td>
                    <td className="stc-yes stc-col-highlight">✅ Yes</td>
                    <td className="stc-no">❌ No</td>
                    <td className="stc-no">❌ No</td>
                    <td className="stc-maybe">⚠️ Depends</td>
                  </tr>
                  <tr>
                    <td>Script paste → carousel workflow</td>
                    <td className="stc-yes stc-col-highlight">✅ Yes</td>
                    <td className="stc-no">❌ No</td>
                    <td className="stc-maybe">⚠️ Partial</td>
                    <td className="stc-no">❌ No</td>
                  </tr>
                  <tr>
                    <td>7+ AI models to choose from</td>
                    <td className="stc-yes stc-col-highlight">✅ Yes</td>
                    <td className="stc-no">❌ No</td>
                    <td className="stc-no">❌ No</td>
                    <td className="stc-no">❌ No</td>
                  </tr>
                  <tr>
                    <td>Animate carousel slide into video</td>
                    <td className="stc-yes stc-col-highlight">✅ One click</td>
                    <td className="stc-no">❌ No</td>
                    <td className="stc-no">❌ No</td>
                    <td className="stc-maybe">⚠️ Expensive</td>
                  </tr>
                  <tr>
                    <td>Shared reference image across slides</td>
                    <td className="stc-yes stc-col-highlight">✅ Yes</td>
                    <td className="stc-no">❌ No</td>
                    <td className="stc-no">❌ No</td>
                    <td className="stc-maybe">⚠️ Manual</td>
                  </tr>
                  <tr>
                    <td>Commercial rights included</td>
                    <td className="stc-yes stc-col-highlight">✅ Always</td>
                    <td className="stc-maybe">⚠️ Plan dependent</td>
                    <td className="stc-maybe">⚠️ Varies</td>
                    <td className="stc-maybe">⚠️ Contract</td>
                  </tr>
                  <tr>
                    <td>Voice + Video included in same platform</td>
                    <td className="stc-yes stc-col-highlight">✅ Yes</td>
                    <td className="stc-no">❌ No</td>
                    <td className="stc-no">❌ No</td>
                    <td className="stc-no">❌ No</td>
                  </tr>
                  <tr>
                    <td>Free tier available</td>
                    <td className="stc-yes stc-col-highlight">✅ 50 credits</td>
                    <td className="stc-yes">✅ Limited</td>
                    <td className="stc-maybe">⚠️ Very limited</td>
                    <td className="stc-no">❌ No</td>
                  </tr>
                  <tr>
                    <td>Cost for 3-slide carousel</td>
                    <td className="stc-col-highlight" style={{ color: "var(--stc-accent)", fontWeight: 700 }}>from 30 credits (~$0.30)</td>
                    <td className="stc-maybe">$13+/mo</td>
                    <td className="stc-maybe">$20+/mo</td>
                    <td className="stc-no">$50–$200</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              10 BEST PRACTICES (Script-specific)
          ════════════════════════════════════════════════════ */}
          <section className="stc-section">
            <div className="stc-section-label">Get the most out of your scripts</div>
            <h2 className="stc-section-title">10 Tips for Script-to-Carousel Success</h2>
            <p className="stc-section-sub">
              These techniques will dramatically improve how your script-based
              carousels perform.
            </p>

            <div className="stc-tips-list">
              <div className="stc-tip">
                <span className="stc-tip-icon">🎯</span>
                <div>
                  <h4>Start with Your Strongest Hook</h4>
                  <p>
                    Your script's opening is already designed to grab attention.
                    Use that exact hook as the text overlay for Slide 1, and prompt
                    the AI for an image that matches the emotional tone of that hook.
                  </p>
                </div>
              </div>

              <div className="stc-tip">
                <span className="stc-tip-icon">🔢</span>
                <div>
                  <h4>Break Scripts into 3 Clear Sections</h4>
                  <p>
                    Most scripts have a natural 3-act structure: problem, solution,
                    result. Map each act to one carousel slide. If your script is
                    longer, create multiple 3-slide carousels as a series.
                  </p>
                </div>
              </div>

              <div className="stc-tip">
                <span className="stc-tip-icon">🎨</span>
                <div>
                  <h4>Match Visual Style to Script Tone</h4>
                  <p>
                    A serious corporate script needs realistic or digital art styles.
                    A motivational script works well with artistic or 3D render.
                    A tech script shines with sci-fi or digital art. Don't use
                    the same style for every script type.
                  </p>
                </div>
              </div>

              <div className="stc-tip">
                <span className="stc-tip-icon">📐</span>
                <div>
                  <h4>Choose Aspect Ratio Based on Platform First</h4>
                  <p>
                    Square (1:1) for LinkedIn and Instagram feed. Portrait (9:16)
                    for Instagram Stories and Pinterest. Landscape (16:9) only for
                    YouTube thumbnails or Twitter. Set this before writing prompts.
                  </p>
                </div>
              </div>

              <div className="stc-tip">
                <span className="stc-tip-icon">🔬</span>
                <div>
                  <h4>Turn Script Headlines Into Image Prompts</h4>
                  <p>
                    Your script already has great subheadings. Turn each one into
                    a visual prompt: "Slide 2: The 3 mistakes" → prompt: "A path
                    splitting into three directions, one glowing brightly, cinematic
                    lighting, dark forest atmosphere."
                  </p>
                </div>
              </div>

              <div className="stc-tip">
                <span className="stc-tip-icon">🔄</span>
                <div>
                  <h4>Repurpose Your Top 5 Scripts First</h4>
                  <p>
                    Don't start with a new script. Take your best-performing YouTube
                    video, most-downloaded podcast episode, or most-attended webinar.
                    Those scripts already proved they resonate — now give them a
                    second life on LinkedIn and Instagram.
                  </p>
                </div>
              </div>

              <div className="stc-tip">
                <span className="stc-tip-icon">🎬</span>
                <div>
                  <h4>Animate Your Best Slide</h4>
                  <p>
                    After generating your carousel, click "Animate Slide" on the
                    slide with the strongest visual. Turn it into a 5-second video
                    for Instagram Reels or LinkedIn video posts. One script now
                    gives you a carousel AND a video.
                  </p>
                </div>
              </div>

              <div className="stc-tip">
                <span className="stc-tip-icon">🗓️</span>
                <div>
                  <h4>Batch Generate on a Content Day</h4>
                  <p>
                    Dedicate one day to generating carousels from all your recent
                    scripts. At 10 credits per slide (Imagen 4 Fast), you can
                    generate 10 carousels (30 slides) for 300 credits — one month's
                    worth of carousel content for $9.
                  </p>
                </div>
              </div>

              <div className="stc-tip">
                <span className="stc-tip-icon">💬</span>
                <div>
                  <h4>Always End with a CTA Slide</h4>
                  <p>
                    Your script probably ends with a call to action. That becomes
                    your last carousel slide. Prompt the AI for a simple, clean
                    image (minimalist, dark background, space for text) and add
                    your CTA — "Follow for more", "Save this", "Comment your take".
                  </p>
                </div>
              </div>

              <div className="stc-tip">
                <span className="stc-tip-icon">📊</span>
                <div>
                  <h4>Test 2-3 Models for Your Niche</h4>
                  <p>
                    Generate the same slide with GPT Image 1 Medium, FLUX 1.1 Pro,
                    and Imagen 4 Standard. See which one your audience responds to
                    best. Once you know, use that model for all your script carousels.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              SECONDARY CTA
          ════════════════════════════════════════════════════ */}
          <div className="stc-inline-cta">
            <h3>Turn Your Script Into a Carousel Right Now</h3>
            <p>
              Free to start. No design skills. No credit card. Just your
              script and 30 seconds.
            </p>
            <a href={CTA_URL} className="stc-cta-primary" style={{ display: "inline-flex" }}>
              🎠 Generate Free Carousel
              <span className="stc-cta-arrow">→</span>
            </a>
          </div>

          {/* ════════════════════════════════════════════════════
              FAQ (Script-focused)
          ════════════════════════════════════════════════════ */}
          <section className="stc-section">
            <div className="stc-section-label">Frequently asked questions</div>
            <h2 className="stc-section-title">Everything You Need to Know</h2>
            <p className="stc-section-sub" style={{ marginBottom: 28 }}>
              Specific answers for turning scripts into carousels.
            </p>

            <div className="stc-faq">

              <details className="stc-faq-item">
                <summary className="stc-faq-q">
                  Can I paste a full YouTube script and get a carousel?
                  <span className="stc-faq-chevron">▼</span>
                </summary>
                <div className="stc-faq-a">
                  <p>
                    Yes. Paste your script into the Carousel tab on Scenith's
                    AI Creator page. You'll use the Carousel mode where you can
                    fill individual slide prompts — one per key section of your
                    script. The AI then generates a unique image for each slide.
                  </p>
                </div>
              </details>

              <details className="stc-faq-item">
                <summary className="stc-faq-q">
                  Does Scenith work for podcast scripts and outlines?
                  <span className="stc-faq-chevron">▼</span>
                </summary>
                <div className="stc-faq-a">
                  <p>
                    Absolutely. Podcast notes, episode outlines, and even raw
                    transcripts work perfectly. The AI will help you extract the
                    key points from each segment and turn them into slide-worthy
                    visuals. This is one of our most popular use cases.
                  </p>
                </div>
              </details>

              <details className="stc-faq-item">
                <summary className="stc-faq-q">
                  How many slides can I generate from one script?
                  <span className="stc-faq-chevron">▼</span>
                </summary>
                <div className="stc-faq-a">
                  <p>
                    Scenith's Carousel mode generates up to 3 slides in a single
                    batch. Most effective LinkedIn and Instagram carousels are
                    3–7 slides. For longer scripts, create multiple 3-slide
                    carousels as a series (e.g., "Part 1: The Problem", "Part 2:
                    The Solution", "Part 3: The Results").
                  </p>
                </div>
              </details>

              <details className="stc-faq-item">
                <summary className="stc-faq-q">
                  Which AI model is best for script-based carousels?
                  <span className="stc-faq-chevron">▼</span>
                </summary>
                <div className="stc-faq-a">
                  <p>
                    For most script types, GPT Image 1 Medium is the most
                    consistently strong performer — it handles narrative scenes,
                    abstract concepts, and professional imagery well. For
                    educational scripts (science, tech, how-to), Imagen 4 Standard
                    excels at photorealistic detail. For personal brand or
                    motivational scripts, FLUX 1.1 Pro creates distinctive,
                    artistic visuals.
                  </p>
                </div>
              </details>

              <details className="stc-faq-item">
                <summary className="stc-faq-q">
                  How much does it cost to turn a script into a carousel?
                  <span className="stc-faq-chevron">▼</span>
                </summary>
                <div className="stc-faq-a">
                  <p>
                    The cost depends on which AI model and quality setting you choose.
                    The most affordable option is Imagen 4 Fast at 10 credits per
                    slide — a 3-slide carousel costs 30 credits total (~$0.30 on paid
                    plans). On the $9/month Lite plan (300 credits), you can generate
                    approximately 6–10 full 3-slide carousels per month.
                  </p>
                </div>
              </details>

              <details className="stc-faq-item">
                <summary className="stc-faq-q">
                  Can I use the carousel images commercially?
                  <span className="stc-faq-chevron">▼</span>
                </summary>
                <div className="stc-faq-a">
                  <p>
                    Yes — full commercial rights are included with every image
                    generated on Scenith. You can use carousel slides in paid ads,
                    client deliverables, product pages, sponsored posts, and any
                    commercial context without attribution or licensing fees.
                  </p>
                </div>
              </details>

              <details className="stc-faq-item">
                <summary className="stc-faq-q">
                  I don't have a script yet. Can I still make carousels?
                  <span className="stc-faq-chevron">▼</span>
                </summary>
                <div className="stc-faq-a">
                  <p>
                    Yes. The Carousel mode accepts any prompt — you don't need an
                    existing script. Write your 3 slide concepts directly or use
                    the 30+ built-in prompt suggestions across 15 content categories.
                    The AI will generate images for each concept instantly.
                  </p>
                </div>
              </details>

              <details className="stc-faq-item">
                <summary className="stc-faq-q">
                  How do I post LinkedIn carousels from Scenith?
                  <span className="stc-faq-chevron">▼</span>
                </summary>
                <div className="stc-faq-a">
                  <p>
                    Download your 3 slides as PNGs, compile them into a single PDF
                    using any free PDF merger (Smallpdf, ilovepdf.com), then upload
                    the PDF as a LinkedIn document post. LinkedIn renders each PDF
                    page as a swipeable slide. This format currently gets the
                    highest engagement on LinkedIn.
                  </p>
                </div>
              </details>

              <details className="stc-faq-item">
                <summary className="stc-faq-q">
                  Can I turn a carousel slide into an animated video?
                  <span className="stc-faq-chevron">▼</span>
                </summary>
                <div className="stc-faq-a">
                  <p>
                    Yes — after generating your carousel, click "Animate Slide" on
                    any slide. Scenith automatically sends that image to the Video
                    generator, where you can choose Kling, Veo, or Wan 2.5 to create
                    a 5–10 second animated version. Perfect for Instagram Reels and
                    LinkedIn video posts.
                  </p>
                </div>
              </details>

            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              RELATED TOOLS
          ════════════════════════════════════════════════════ */}
          <section className="stc-section">
            <div className="stc-section-label">More Scenith tools</div>
            <h2 className="stc-section-title">Complete Your Content Stack</h2>
            <p className="stc-section-sub" style={{ marginBottom: 24 }}>
              Carousel is just one piece. The full Scenith platform covers
              every content format a modern creator needs.
            </p>

            <div className="stc-related-grid">
              <a href="https://scenith.in/create-ai-content?tab=voice&utm_source=script-to-carousel-tool&utm_medium=related-tools" className="stc-related-card">
                <span className="stc-related-icon">🎙️</span>
                <h4>AI Voice Generator</h4>
                <p>Turn your script into podcast narration, YouTube voiceovers, or ad scripts in 40+ voices.</p>
              </a>
              <a href="https://scenith.in/create-ai-content?tab=video&utm_source=script-to-carousel-tool&utm_medium=related-tools" className="stc-related-card">
                <span className="stc-related-icon">🎬</span>
                <h4>AI Video Generator</h4>
                <p>Animate your carousel slides into Reels and Shorts with Kling, Veo, and Wan 2.5.</p>
              </a>
              <a href="https://scenith.in/create-ai-content?tab=image&utm_source=script-to-carousel-tool&utm_medium=related-tools" className="stc-related-card">
                <span className="stc-related-icon">🖼️</span>
                <h4>AI Image Generator</h4>
                <p>Generate standalone images for thumbnails, social posts, and ad creatives with 7 AI models.</p>
              </a>
              <a href="https://scenith.in/tools" className="stc-related-card">
                <span className="stc-related-icon">🛠️</span>
                <h4>All AI Tools</h4>
                <p>Explore the full suite of Scenith micro-tools built for creators, marketers, and teams.</p>
              </a>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              FOOTER CTA
          ════════════════════════════════════════════════════ */}
          <div className="stc-footer-cta">
            <h2>
              Your Script Deserves{" "}
              <span style={{ background: "linear-gradient(135deg, #f59e0b, #fb923c)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                a Second Life
              </span>
            </h2>
            <p>
              Stop letting your best scripts live only as text. Generate AI carousel
              slides that reach a new audience on LinkedIn and Instagram — free to
              start, no design skills needed.
            </p>
            <a href={CTA_URL} className="stc-cta-primary" style={{ display: "inline-flex" }}>
              🎠 Generate My Carousel Now
              <span className="stc-cta-arrow">→</span>
            </a>
            <p>
              50 free credits · No credit card · Commercial rights included
            </p>
          </div>

        </div>{/* /stc-content */}
      </div>{/* /stc-page */}
    </>
  );
}