// app/tools/idea-to-carousel-ai-generator/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import "./idea-to-carousel.css";

// ── SEO Metadata (Optimized for 2026, conversational & long-tail keywords) ──
export const metadata: Metadata = {
  title: "Idea to Carousel AI Generator — Turn Any Idea into LinkedIn & Instagram Carousel Slides | Scenith",
  description:
    "Stop losing your best ideas. Turn rough concepts, brainstorming notes, and mental models into high-engagement LinkedIn & Instagram carousel slides using Scenith's AI. Free to start.",
  keywords: [
    "idea to carousel",
    "idea to carousel generator",
    "turn idea into slides",
    "brainstorm to carousel",
    "concept to linkedin carousel",
    "mental model to instagram slides",
    "ai carousel from idea",
    "convert thought to carousel",
    "content repurposing idea to carousel",
    "idea to social media slides",
    "ai carousel maker",
    "linkedin carousel generator",
    "instagram carousel from concept",
    "scenith idea to carousel",
    "turn rough idea into carousel",
    "brain dump to slides",
    "idea visualization tool",
  ],
  openGraph: {
    title: "Idea to Carousel AI — Turn Any Idea into Viral Slides",
    description:
      "Transform rough concepts, brainstorming notes, and mental models into scroll-stopping LinkedIn & Instagram carousel slides with AI. No design skills needed.",
    url: "https://scenith.in/tools/idea-to-carousel-ai-generator",
    siteName: "Scenith",
    type: "website",
    images: [
      {
        url: "https://scenith.in/og/idea-to-carousel.jpg",
        width: 1200,
        height: 630,
        alt: "Idea to Carousel AI Generator by Scenith",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Idea to Carousel AI — Turn Ideas into Slides",
    description:
      "Paste any rough idea. AI generates scroll-stopping LinkedIn & Instagram carousel slides in seconds.",
    images: ["https://scenith.in/og/idea-to-carousel.jpg"],
  },
  alternates: {
    canonical: "https://scenith.in/tools/idea-to-carousel-ai-generator",
  },
};

// ── JSON-LD Structured Data (Rich snippets for AI tool and FAQ) ──
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://scenith.in/tools/idea-to-carousel-ai-generator",
      url: "https://scenith.in/tools/idea-to-carousel-ai-generator",
      name: "Idea to Carousel AI Generator",
      description:
        "Convert any rough idea, brainstorming concept, or mental model into LinkedIn and Instagram carousel slides instantly with AI. Free tool by Scenith.",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://scenith.in" },
          { "@type": "ListItem", position: 2, name: "Tools", item: "https://scenith.in/tools" },
          {
            "@type": "ListItem",
            position: 3,
            name: "Idea to Carousel AI Generator",
            item: "https://scenith.in/tools/idea-to-carousel-ai-generator",
          },
        ],
      },
    },
    {
      "@type": "SoftwareApplication",
      name: "Idea to Carousel AI Generator",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Web",
      url: "https://scenith.in/tools/idea-to-carousel-ai-generator",
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
          name: "Can I turn a rough brainstorming idea into a LinkedIn carousel?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Paste your rough idea, concept notes, or even a single sentence into Scenith's AI carousel generator, choose your slide count and style, and the AI will expand and structure your idea into ready-to-post carousel images optimised for LinkedIn and Instagram in seconds.",
          },
        },
        {
          "@type": "Question",
          name: "Is the idea to carousel generator free?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You get 50 free credits on sign-up — no credit card required. Each carousel slide costs credits, and paid plans start at $9/month for 300 credits.",
          },
        },
        {
          "@type": "Question",
          name: "What kind of ideas can I use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Any kind: business concepts, life lessons, frameworks, mental models, brainstorming notes, rough bullet points, or even a single sentence. The AI helps expand and structure your idea into clear, slide-ready sections.",
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
  "https://scenith.in/create-ai-content?tab=image&utm_source=idea-to-carousel-tool&utm_medium=micro-tool&utm_campaign=carousel-generator-2026";

// ── Page Component ────────────────────────────────────────────────────────────
export default function IdeaToCarouselPage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="itc-page">
        {/* Ambient background for visual depth */}
        <div className="itc-ambient">
          <div className="itc-blob itc-blob-1" />
          <div className="itc-blob itc-blob-2" />
          <div className="itc-blob itc-blob-3" />
        </div>
        <div className="itc-grid-bg" />

        {/* ── Nav ── */}
        <nav className="itc-nav">
          <a href="https://scenith.in" className="itc-nav-logo">
            SCEN<span>ITH</span>
          </a>
          <ul className="itc-nav-links">
            <li><a href="https://scenith.in/create-ai-content">AI Creator</a></li>
            <li><a href="https://scenith.in/tools">All Tools</a></li>
            <li><a href="https://scenith.in/pricing">Pricing</a></li>
            <li>
              <a href={CTA_URL} className="itc-nav-cta">
                Try Free →
              </a>
            </li>
          </ul>
        </nav>

        <div className="itc-content">
          {/* ════════════════════════════════════════════════════
              HERO SECTION
          ════════════════════════════════════════════════════ */}
          <section className="itc-hero">
            <div className="itc-eyebrow">
              <span className="itc-eyebrow-dot" />
              AI Content Repurposing · 2026
            </div>

            <h1 className="itc-hero-title">
              Turn Any Idea Into a{" "}
              <span className="itc-highlight">Scroll-Stopping Carousel</span>
            </h1>

            <p className="itc-hero-sub">
              Stop losing your best ideas in notes apps and forgotten documents.
              Paste a rough concept, a single sentence, or a brainstorming dump —
              and Scenith AI generates ready-to-post LinkedIn and Instagram carousel
              slides with real AI images in under 30 seconds.
            </p>

            <div className="itc-cta-block">
              <a
                href={CTA_URL}
                className="itc-cta-primary"
                rel="noopener"
              >
                💡 Generate My Carousel Free
                <span className="itc-cta-arrow">→</span>
              </a>
              <div className="itc-cta-note">
                <span>✅ No credit card</span>
                <span>·</span>
                <span>⚡ 50 free credits on signup</span>
                <span>·</span>
                <span>📥 Download PNG instantly</span>
              </div>
            </div>

            <div className="itc-trust-badges">
              <div className="itc-badge"><span className="itc-badge-icon">🖼️</span>Real AI-generated images, not templates</div>
              <div className="itc-badge"><span className="itc-badge-icon">🤖</span>GPT · Imagen 4 · FLUX · Grok Aurora</div>
              <div className="itc-badge"><span className="itc-badge-icon">📱</span>LinkedIn · Instagram · Pinterest</div>
              <div className="itc-badge"><span className="itc-badge-icon">💼</span>Commercial rights included</div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              VISUAL MOCKUP (Idea → Carousel)
          ════════════════════════════════════════════════════ */}
          <section className="itc-mockup-section">
            <div className="itc-section-label">How the magic works</div>
            <div className="itc-mockup-wrapper">
              <div className="itc-mockup-glow" />
              <div className="itc-mockup-frame">
                <div className="itc-mockup-topbar">
                  <div className="itc-dot-red" />
                  <div className="itc-dot-yellow" />
                  <div className="itc-dot-green" />
                  <div className="itc-mockup-url">scenith.in/create-ai-content</div>
                </div>
                <div className="itc-mockup-body">
                  {/* Idea Input Column */}
                  <div className="itc-idea-col">
                    <div className="itc-idea-header">
                      <div className="itc-idea-avatar">💡</div>
                      <div>
                        <div className="itc-idea-title">Your Rough Idea</div>
                        <div className="itc-idea-type">Concept / Brainstorm / Mental Model</div>
                      </div>
                    </div>
                    <div className="itc-idea-line">
                      <div className="itc-idea-num">✨</div>
                      <div>"The 80/20 principle applies to content creation: 20% of your posts drive 80% of your engagement."</div>
                    </div>
                    <div className="itc-idea-connector" />
                    <div className="itc-idea-line">
                      <div className="itc-idea-num">🎯</div>
                      <div>Most creators focus on volume. But the real leverage is identifying your top 20% topics and doubling down.</div>
                    </div>
                    <div className="itc-idea-connector" />
                    <div className="itc-idea-line">
                      <div className="itc-idea-num">📊</div>
                      <div>Data shows: creators who analyze their top posts and create series around those topics grow 3x faster.</div>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="itc-mockup-arrow">
                    <div className="itc-arrow-line">
                      <span className="itc-arrow-icon">→</span>
                    </div>
                    <div className="itc-arrow-label">AI Magic</div>
                  </div>

                  {/* Carousel Output Column */}
                  <div className="itc-carousel-col">
                    <div className="itc-carousel-slide itc-slide-active">
                      <span className="itc-slide-num">Slide 1</span>
                      <span className="itc-slide-emoji">📊</span>
                      <div className="itc-slide-title">The 80/20 Rule of Content</div>
                      <div className="itc-slide-body">20% of your posts drive 80% of engagement. Here's how to find them.</div>
                      <div className="itc-slide-bar" />
                    </div>
                    <div className="itc-carousel-slide">
                      <span className="itc-slide-num">Slide 2</span>
                      <span className="itc-slide-emoji">🎯</span>
                      <div className="itc-slide-title">Stop Focusing on Volume</div>
                      <div className="itc-slide-body">Identify your top 20% topics and double down.</div>
                      <div className="itc-slide-bar" style={{ width: "55%" }} />
                    </div>
                    <div className="itc-carousel-slide">
                      <span className="itc-slide-num">Slide 3</span>
                      <span className="itc-slide-emoji">🚀</span>
                      <div className="itc-slide-title">3x Faster Growth</div>
                      <div className="itc-slide-body">Data-backed strategy from top creators.</div>
                      <div className="itc-slide-bar" style={{ width: "75%" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              HOW IT WORKS (3 steps)
          ════════════════════════════════════════════════════ */}
          <section className="itc-section">
            <div className="itc-section-label">Simple workflow</div>
            <h2 className="itc-section-title">From Idea to Slides in 3 Steps</h2>
            <p className="itc-section-sub">
              No design skills, no Canva, no expensive freelancers. Just your idea
              and the AI.
            </p>

            <div className="itc-steps">
              <div className="itc-step">
                <div className="itc-step-num">01</div>
                <div className="itc-step-content">
                  <h3>Paste Your Rough Idea (or Just a Sentence)</h3>
                  <p>
                    Have a half-formed thought? A mental model you've been
                    chewing on? A framework that changed how you work? Paste it
                    directly into Scenith's Carousel mode — even if it's just
                    a few words. The AI will intelligently expand your idea into
                    a structured, slide-ready narrative. Not ready with an idea?
                    Write a short prompt like "5 lessons from my first year of
                    freelancing" and the AI will help you develop it.
                  </p>
                  <span className="itc-step-badge">⚡ Works with any idea format</span>
                </div>
              </div>

              <div className="itc-step">
                <div className="itc-step-num">02</div>
                <div className="itc-step-content">
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
                  <span className="itc-step-badge">🎨 8 visual styles</span>
                </div>
              </div>

              <div className="itc-step">
                <div className="itc-step-num">03</div>
                <div className="itc-step-content">
                  <h3>Generate, Download & Post</h3>
                  <p>
                    Hit "Generate Carousel." Scenith generates each slide
                    sequentially with real AI image generation — not text overlaid
                    on gradients. Each slide is a standalone high-resolution PNG
                    you download individually. Upload them in order to LinkedIn,
                    Instagram, or Pinterest. Your idea just became a piece of
                    evergreen content that will drive impressions for weeks.
                  </p>
                  <span className="itc-step-badge">📥 Download all slides as PNG</span>
                </div>
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              STATS SECTION
          ════════════════════════════════════════════════════ */}
          <div className="itc-stats-row">
            <div className="itc-stat-card">
              <div className="itc-stat-num">3×</div>
              <div className="itc-stat-label">More LinkedIn impressions vs single posts (2025 data)</div>
            </div>
            <div className="itc-stat-card">
              <div className="itc-stat-num">7+</div>
              <div className="itc-stat-label">AI image models to choose from</div>
            </div>
            <div className="itc-stat-card">
              <div className="itc-stat-num">30s</div>
              <div className="itc-stat-label">Average time to generate your first carousel slide</div>
            </div>
            <div className="itc-stat-card">
              <div className="itc-stat-num">50</div>
              <div className="itc-stat-label">Free credits on signup — no card required</div>
            </div>
          </div>

          {/* ════════════════════════════════════════════════════
              INLINE CTA
          ════════════════════════════════════════════════════ */}
          <div className="itc-inline-cta">
            <h3>Ready to turn your ideas into carousels?</h3>
            <p>Start generating carousel slides from your ideas — free, right now.</p>
            <a href={CTA_URL} className="itc-cta-primary" style={{ display: "inline-flex" }}>
              💡 Open Carousel Generator
              <span className="itc-cta-arrow">→</span>
            </a>
          </div>

          {/* ════════════════════════════════════════════════════
              FEATURES GRID
          ════════════════════════════════════════════════════ */}
          <section className="itc-section">
            <div className="itc-section-label">What makes Scenith different</div>
            <h2 className="itc-section-title">Not Just Another Slide Maker</h2>
            <p className="itc-section-sub">
              Most "carousel tools" paste your text on a coloured box.
              Scenith generates real AI images for every slide.
            </p>

            <div className="itc-features-grid">
              <div className="itc-feature-card">
                <span className="itc-feature-icon">🖼️</span>
                <h3>Real AI Images Per Slide</h3>
                <p>
                  Every slide gets a unique, AI-generated image — not a stock
                  photo, not a coloured background with text. Powered by GPT
                  Image 1, Imagen 4, FLUX 1.1 Pro, and more.
                </p>
              </div>
              <div className="itc-feature-card">
                <span className="itc-feature-icon">🎠</span>
                <h3>Up to 3 Slides at Once</h3>
                <p>
                  The Carousel mode generates up to 3 slides in a single workflow,
                  each with its own prompt and optional reference image. Run all 3
                  in sequence automatically.
                </p>
              </div>
              <div className="itc-feature-card">
                <span className="itc-feature-icon">🔗</span>
                <h3>Shared Reference Image</h3>
                <p>
                  Want a consistent visual identity across slides? Upload one
                  reference image and apply it as the style base for all 3 slides
                  simultaneously.
                </p>
              </div>
              <div className="itc-feature-card">
                <span className="itc-feature-icon">📐</span>
                <h3>Any Aspect Ratio</h3>
                <p>
                  Square 1:1 for Instagram, landscape 16:9 for LinkedIn, portrait
                  9:16 for Stories. Choose the format that fits your platform
                  before generating.
                </p>
              </div>
              <div className="itc-feature-card">
                <span className="itc-feature-icon">🎨</span>
                <h3>8 Visual Styles</h3>
                <p>
                  Realistic photography, digital art, anime, 3D render, fantasy,
                  sci-fi, vintage, and artistic. Each style completely transforms
                  the output aesthetic.
                </p>
              </div>
              <div className="itc-feature-card">
                <span className="itc-feature-icon">🎬</span>
                <h3>Animate Any Slide</h3>
                <p>
                  Done generating? Click "Animate Slide" on any card
                  and the image gets sent directly to the AI Video generator.
                  Turn your carousel into a Reel in one click.
                </p>
              </div>
              <div className="itc-feature-card">
                <span className="itc-feature-icon">📥</span>
                <h3>High-Res PNG Download</h3>
                <p>
                  Every slide downloads as a full-resolution PNG — no
                  watermarks, no quality compression, full commercial rights
                  included.
                </p>
              </div>
              <div className="itc-feature-card">
                <span className="itc-feature-icon">💡</span>
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
              LONG-FORM SEO CONTENT (UNIQUE PROSE FOR IDEA → CAROUSEL)
          ════════════════════════════════════════════════════ */}
          <section className="itc-section">
            <div className="itc-prose">

              <h2>Why Turn Your Ideas into Carousels in 2026?</h2>

              <p>
                You have great ideas. Every day, you have moments of clarity —
                a mental model that explains something perfectly, a framework
                that could help others, an observation about your industry that
                no one else is talking about. But what happens to those ideas?
                Most of them die in a notes app. Some become a single tweet.
                A rare few make it into a LinkedIn post.
              </p>

              <p>
                Meanwhile, carousels on LinkedIn and Instagram are quietly becoming
                the highest-ROI content format of 2026. <strong>LinkedIn's algorithm
                heavily favors document carousels</strong> because they keep users
                on the platform longer. Instagram carousels get 2-4x more saves
                than single images because people save them to reference later.
                And Pinterest pins have an evergreen lifespan of months or years.
              </p>

              <div className="itc-highlight-box">
                <strong>The opportunity:</strong> Your ideas are your greatest
                content asset. The hard part — having original thoughts — is done.
                Turning them into carousels is a formatting problem. And in 2026,
                AI is extraordinarily good at solving formatting problems.
              </div>

              <h3>The Old Way: Manual Idea-to-Content is Broken</h3>

              <p>
                Let's be honest about what turning an idea into content used to
                look like. You'd have a brilliant thought, open a blank document,
                stare at the cursor, and spend an hour trying to turn that 10-word
                insight into a 500-word post. Or you'd write a half-baked LinkedIn
                post that captures 30% of the idea. Or you'd hire a writer who
                takes your idea and produces something that feels generic.
              </p>

              <p>
                The result? Most ideas never see daylight. The ones that do take
                hours to execute. And the final output rarely does justice to the
                original insight.
              </p>

              <h3>How AI Changes the Game for Idea Repurposing</h3>

              <p>
                In 2026, AI language models and image generation have crossed a
                threshold: you can paste a rough idea — even a single sentence —
                and the AI will intelligently expand it into a structured narrative,
                break it into slide-sized chunks, and generate custom visuals for
                each slide. The idea goes from your brain to a finished carousel
                in under 30 seconds.
              </p>

              <p>
                For turning ideas into content, this is transformational. Instead
                of wrestling with a blank page, you paste your rough thought and
                let the AI do the structuring. Slide 1 about the core insight?
                <strong> The AI writes the headline and prompts the image.</strong>
                Slide 2 about the supporting logic? <strong>The AI expands your
                idea into clear, scannable points.</strong> Slide 3 about the
                actionable takeaway? <strong>The AI generates a visual that
                reinforces the message.</strong>
              </p>

              <p>
                Now every idea you have can become a piece of content — without
                hours of writing, design, or formatting.
              </p>

              <h2>Which AI Model Should You Use for Idea-to-Carousel?</h2>

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
                scene compositions better. For business-focused ideas (frameworks,
                strategies, data insights), GPT Image 1 Medium in "standard"
                quality is the go-to.
              </p>

              <h3>Imagen 4 Fast & Standard (Google DeepMind)</h3>
              <p>
                Google's Imagen 4 is the model of choice for educational and
                conceptual ideas. It excels at naturalistic lighting, photorealistic
                textures, and accurate rendering of complex scenes. For ideas about
                science, nature, psychology, or anything that benefits from a
                "National Geographic" aesthetic, Imagen 4 is your model.
              </p>

              <h3>FLUX 1.1 Pro (Black Forest Labs)</h3>
              <p>
                FLUX 1.1 Pro is the favourite of visual-first creators. It has a
                distinct aesthetic that sits between hyper-realism and editorial
                illustration — bold, atmospheric, with unusual colour palettes.
                For personal brand ideas, motivational concepts, or anything that
                needs to look distinctly artistic, FLUX delivers something other
                models simply cannot replicate.
              </p>

              <h2>Platform-by-Platform: Where to Post Your Idea-Based Carousels</h2>

              <p>
                Generating your carousel is step one. Distributing it effectively
                is where the traffic actually comes from.
              </p>

              <h3>LinkedIn: The Professional Idea Platform</h3>
              <p>
                LinkedIn's algorithm in 2026 continues to heavily reward document
                carousels (PDF uploads) because they keep users on the platform
                longer. Every swipe to a new slide signals engagement, triggering
                more distribution. Idea-based carousels — frameworks, mental models,
                lessons learned — perform exceptionally well because professionals
                save them to reference later.
              </p>
              <p>
                <strong>How to post:</strong> Download your slides as PNGs, compile
                them into a single PDF, then upload the PDF as a LinkedIn document
                post. Best times: Tuesday–Thursday, 7–9 AM or 12–2 PM.
              </p>

              <h3>Instagram: Ideas That Save</h3>
              <p>
                Instagram's algorithm in 2026 still prioritizes Reels for reach,
                but carousels win on <strong>saves and sends</strong>. The save
                rate on carousels is consistently 2-4x higher than single posts
                because people save carousels to reference later. Idea-based
                carousels — "5 mental models that changed how I think", "A framework
                for better decisions" — get saved at even higher rates.
              </p>
              <p>
                <strong>Tip:</strong> Use square (1:1) aspect ratio for feed carousels.
                Always end with a "Save this" or "Share with someone who needs this"
                prompt.
              </p>

              <h3>Pinterest: The Idea Library</h3>
              <p>
                Pinterest is still underused by most professional creators. But
                pins have an evergreen half-life measured in months and years.
                An idea-based carousel pinned today can still surface to new users
                next year. Portrait (9:16) format is ideal for Pinterest since it
                takes up more vertical feed space.
              </p>

              <h2>The Idea Multiplication Formula: 1 Idea = 5+ Content Pieces</h2>
              <p>
                Here's the exact content multiplication workflow that efficient
                creators are running in 2026:
              </p>
              <ol>
                <li><strong>Original idea</strong> — the source insight</li>
                <li><strong>3-slide LinkedIn carousel</strong> (from idea via Scenith AI)</li>
                <li><strong>3-slide Instagram carousel</strong> (same slides, square crop)</li>
                <li><strong>Animated slide video</strong> (one carousel slide → AI video → Reel)</li>
                <li><strong>Pinterest pin collection</strong> (same slides repinned individually)</li>
                <li><strong>Newsletter expansion</strong> (idea as email, carousel as lead magnet)</li>
              </ol>
              <p>
                The idea was always the hard part. The original insight, the unique
                perspective — that's the high-value work. Everything downstream is
                a formatting and distribution problem. And in 2026, AI solves
                formatting and distribution problems better than any human workflow.
              </p>

            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              USE CASES (Idea-specific)
          ════════════════════════════════════════════════════ */}
          <section className="itc-section">
            <div className="itc-section-label">Who uses this tool</div>
            <h2 className="itc-section-title">Built for Idea-Heavy Creators</h2>
            <p className="itc-section-sub">
              If you have ideas, you need this tool. Here's how different roles
              are using idea-to-carousel repurposing.
            </p>

            <div className="itc-usecases-grid">
              <div className="itc-uc-card">
                <span className="itc-uc-emoji">🧠</span>
                <h3>Thought Leaders & Experts</h3>
                <p>
                  Turn your mental models, frameworks, and unique perspectives into
                  LinkedIn carousels that establish authority and drive engagement.
                  Your best ideas deserve more than a single tweet.
                </p>
                <span className="itc-uc-tag">Authority Building</span>
              </div>
              <div className="itc-uc-card">
                <span className="itc-uc-emoji">📝</span>
                <h3>Writers & Creators</h3>
                <p>
                  Your notebook is full of half-formed ideas. Now you can turn each
                  one into a carousel in under a minute. Test which ideas resonate
                  before investing hours into long-form content.
                </p>
                <span className="itc-uc-tag">Idea Validation</span>
              </div>
              <div className="itc-uc-card">
                <span className="itc-uc-emoji">👔</span>
                <h3>Coaches & Consultants</h3>
                <p>
                  Your frameworks are your competitive advantage. Turn each framework
                  into a carousel that prospects save, share, and reference. Build
                  authority while you sleep.
                </p>
                <span className="itc-uc-tag">Lead Generation</span>
              </div>
              <div className="itc-uc-card">
                <span className="itc-uc-emoji">📊</span>
                <h3>Marketers & Strategists</h3>
                <p>
                  Your campaign insights, customer observations, and strategic
                  frameworks can become LinkedIn carousels that position you as
                  a thought leader in your industry.
                </p>
                <span className="itc-uc-tag">Thought Leadership</span>
              </div>
              <div className="itc-uc-card">
                <span className="itc-uc-emoji">🎓</span>
                <h3>Educators & Trainers</h3>
                <p>
                  Your teaching concepts, learning frameworks, and pedagogical
                  insights become visual carousels that students save and reference.
                  Better than text-heavy handouts.
                </p>
                <span className="itc-uc-tag">Student Engagement</span>
              </div>
              <div className="itc-uc-card">
                <span className="itc-uc-emoji">💼</span>
                <h3>Founders & CEOs</h3>
                <p>
                  Your leadership principles, company values, and strategic insights
                  become LinkedIn carousels that attract talent, customers, and
                  investors. Share your vision visually.
                </p>
                <span className="itc-uc-tag">Personal Branding</span>
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              COMPARISON TABLE
          ════════════════════════════════════════════════════ */}
          <section className="itc-section">
            <div className="itc-section-label">Platform comparison</div>
            <h2 className="itc-section-title">How Scenith Compares for Idea Repurposing</h2>
            <p className="itc-section-sub" style={{ marginBottom: 24 }}>
              Not all carousel generators are created equal. Here's the honest
              breakdown for turning ideas into slides.
            </p>

            <div style={{ overflowX: "auto" }}>
              <table className="itc-compare-table">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th className="itc-col-highlight">Scenith AI</th>
                    <th>Canva</th>
                    <th>Typeset / Other Tools</th>
                    <th>Hiring a Designer</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Real AI-generated images per slide</td>
                    <td className="itc-yes itc-col-highlight">✅ Yes</td>
                    <td className="itc-no">❌ No</td>
                    <td className="itc-no">❌ No</td>
                    <td className="itc-maybe">⚠️ Depends</td>
                  </tr>
                  <tr>
                    <td>Idea paste → carousel workflow</td>
                    <td className="itc-yes itc-col-highlight">✅ Yes</td>
                    <td className="itc-no">❌ No</td>
                    <td className="itc-maybe">⚠️ Partial</td>
                    <td className="itc-no">❌ No</td>
                  </tr>
                  <tr>
                    <td>7+ AI models to choose from</td>
                    <td className="itc-yes itc-col-highlight">✅ Yes</td>
                    <td className="itc-no">❌ No</td>
                    <td className="itc-no">❌ No</td>
                    <td className="itc-no">❌ No</td>
                  </tr>
                  <tr>
                    <td>Animate carousel slide into video</td>
                    <td className="itc-yes itc-col-highlight">✅ One click</td>
                    <td className="itc-no">❌ No</td>
                    <td className="itc-no">❌ No</td>
                    <td className="itc-maybe">⚠️ Expensive</td>
                  </tr>
                  <tr>
                    <td>Shared reference image across slides</td>
                    <td className="itc-yes itc-col-highlight">✅ Yes</td>
                    <td className="itc-no">❌ No</td>
                    <td className="itc-no">❌ No</td>
                    <td className="itc-maybe">⚠️ Manual</td>
                  </tr>
                  <tr>
                    <td>Commercial rights included</td>
                    <td className="itc-yes itc-col-highlight">✅ Always</td>
                    <td className="itc-maybe">⚠️ Plan dependent</td>
                    <td className="itc-maybe">⚠️ Varies</td>
                    <td className="itc-maybe">⚠️ Contract</td>
                  </tr>
                  <tr>
                    <td>Voice + Video included in same platform</td>
                    <td className="itc-yes itc-col-highlight">✅ Yes</td>
                    <td className="itc-no">❌ No</td>
                    <td className="itc-no">❌ No</td>
                    <td className="itc-no">❌ No</td>
                  </tr>
                  <tr>
                    <td>Free tier available</td>
                    <td className="itc-yes itc-col-highlight">✅ 50 credits</td>
                    <td className="itc-yes">✅ Limited</td>
                    <td className="itc-maybe">⚠️ Very limited</td>
                    <td className="itc-no">❌ No</td>
                  </tr>
                  <tr>
                    <td>Cost for 3-slide carousel</td>
                    <td className="itc-col-highlight" style={{ color: "var(--itc-accent)", fontWeight: 700 }}>from 30 credits (~$0.30)</td>
                    <td className="itc-maybe">$13+/mo</td>
                    <td className="itc-maybe">$20+/mo</td>
                    <td className="itc-no">$50–$200</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              10 BEST PRACTICES (Idea-specific)
          ════════════════════════════════════════════════════ */}
          <section className="itc-section">
            <div className="itc-section-label">Get the most out of your ideas</div>
            <h2 className="itc-section-title">10 Tips for Idea-to-Carousel Success</h2>
            <p className="itc-section-sub">
              These techniques will dramatically improve how your idea-based
              carousels perform.
            </p>

            <div className="itc-tips-list">
              <div className="itc-tip">
                <span className="itc-tip-icon">💡</span>
                <div>
                  <h4>Start with Your Core Insight First</h4>
                  <p>
                    Don't try to write the whole carousel. Just paste the raw
                    insight — the one sentence that captures your idea. Let the
                    AI expand it into a narrative. You can always edit and refine
                    the AI's output.
                  </p>
                </div>
              </div>

              <div className="itc-tip">
                <span className="itc-tip-icon">🔢</span>
                <div>
                  <h4>Structure Ideas into 3 Clear Pillars</h4>
                  <p>
                    Most great ideas have a natural 3-part structure: the problem,
                    the insight, the application. Map each part to one carousel slide.
                    If your idea is more complex, create multiple 3-slide carousels
                    as a series.
                  </p>
                </div>
              </div>

              <div className="itc-tip">
                <span className="itc-tip-icon">🎨</span>
                <div>
                  <h4>Match Visual Style to Idea Type</h4>
                  <p>
                    A data-driven insight needs realistic or digital art styles.
                    A philosophical idea works well with artistic or fantasy.
                    A personal story shines with vintage or 3D render. Don't use
                    the same style for every idea type.
                  </p>
                </div>
              </div>

              <div className="itc-tip">
                <span className="itc-tip-icon">📐</span>
                <div>
                  <h4>Choose Platform Before Generating</h4>
                  <p>
                    Square (1:1) for LinkedIn and Instagram feed. Portrait (9:16)
                    for Instagram Stories and Pinterest. Set this before writing
                    prompts so the AI composes images optimally for your target
                    platform.
                  </p>
                </div>
              </div>

              <div className="itc-tip">
                <span className="itc-tip-icon">🔬</span>
                <div>
                  <h4>Use Metaphors in Your Image Prompts</h4>
                  <p>
                    Abstract ideas need abstract visuals. Instead of "business
                    meeting", try "a glowing map of interconnected ideas floating
                    above a table". Instead of "growth", try "a seedling breaking
                    through concrete at sunrise". Metaphors make ideas memorable.
                  </p>
                </div>
              </div>

              <div className="itc-tip">
                <span className="itc-tip-icon">🔄</span>
                <div>
                  <h4>Start with Your Best Ideas</h4>
                  <p>
                    Go through your notes app, your journal, your saved tweets.
                    Find the 5 ideas that excited you most when you first thought
                    of them. Those are your highest-potential carousels.
                  </p>
                </div>
              </div>

              <div className="itc-tip">
                <span className="itc-tip-icon">🎬</span>
                <div>
                  <h4>Animate Your Best Visual</h4>
                  <p>
                    After generating your carousel, click "Animate Slide" on the
                    slide with the strongest visual. Turn it into a 5-second video
                    for Instagram Reels or LinkedIn video posts. One idea now
                    gives you a carousel AND a video.
                  </p>
                </div>
              </div>

              <div className="itc-tip">
                <span className="itc-tip-icon">🗓️</span>
                <div>
                  <h4>Create an "Idea Day" Once a Month</h4>
                  <p>
                    Dedicate one day to turning all your recent ideas into carousels.
                    At 10 credits per slide, you can generate 10 carousels (30 slides)
                    for 300 credits — one month's worth of idea-based content for $9.
                  </p>
                </div>
              </div>

              <div className="itc-tip">
                <span className="itc-tip-icon">💬</span>
                <div>
                  <h4>End with an Actionable Question</h4>
                  <p>
                    Your last slide should ask viewers to apply your idea to their
                    own context. "What's one way you could use this framework this
                    week?" or "Which of these 3 insights resonates most with you?"
                    Comments = algorithm boost.
                  </p>
                </div>
              </div>

              <div className="itc-tip">
                <span className="itc-tip-icon">📊</span>
                <div>
                  <h4>Test 2-3 Models for Your Idea Type</h4>
                  <p>
                    Generate the same idea with GPT Image 1 Medium, FLUX 1.1 Pro,
                    and Imagen 4 Standard. See which visual style your audience
                    responds to best. Once you know, use that model for all your
                    idea carousels.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              SECONDARY CTA
          ════════════════════════════════════════════════════ */}
          <div className="itc-inline-cta">
            <h3>Turn Your Idea Into a Carousel Right Now</h3>
            <p>
              Free to start. No design skills. No credit card. Just your
              idea and 30 seconds.
            </p>
            <a href={CTA_URL} className="itc-cta-primary" style={{ display: "inline-flex" }}>
              💡 Generate Free Carousel
              <span className="itc-cta-arrow">→</span>
            </a>
          </div>

          {/* ════════════════════════════════════════════════════
              FAQ (Idea-focused)
          ════════════════════════════════════════════════════ */}
          <section className="itc-section">
            <div className="itc-section-label">Frequently asked questions</div>
            <h2 className="itc-section-title">Everything You Need to Know</h2>
            <p className="itc-section-sub" style={{ marginBottom: 28 }}>
              Specific answers for turning ideas into carousels.
            </p>

            <div className="itc-faq">

              <details className="itc-faq-item">
                <summary className="itc-faq-q">
                  Can I paste a single sentence and get a full carousel?
                  <span className="itc-faq-chevron">▼</span>
                </summary>
                <div className="itc-faq-a">
                  <p>
                    Yes. Paste your rough idea — even a single sentence — into the
                    Carousel tab on Scenith's AI Creator page. The AI will
                    intelligently expand your idea into a structured narrative
                    across 3 slides, complete with custom-generated images for
                    each slide.
                  </p>
                </div>
              </details>

              <details className="itc-faq-item">
                <summary className="itc-faq-q">
                  Does Scenith work for brainstorming notes and rough concepts?
                  <span className="itc-faq-chevron">▼</span>
                </summary>
                <div className="itc-faq-a">
                  <p>
                    Absolutely. Brainstorming dumps, bullet-point notes, half-formed
                    concepts — all work perfectly. The AI will help you extract the
                    core insight from your notes and turn it into slide-worthy
                    visuals. This is one of our most popular use cases.
                  </p>
                </div>
              </details>

              <details className="itc-faq-item">
                <summary className="itc-faq-q">
                  How many slides can I generate from one idea?
                  <span className="itc-faq-chevron">▼</span>
                </summary>
                <div className="itc-faq-a">
                  <p>
                    Scenith's Carousel mode generates up to 3 slides in a single
                    batch. Most effective LinkedIn and Instagram carousels are
                    3–7 slides. For complex ideas, create multiple 3-slide carousels
                    as a series (e.g., "Part 1: The Problem", "Part 2: The Insight",
                    "Part 3: The Application").
                  </p>
                </div>
              </details>

              <details className="itc-faq-item">
                <summary className="itc-faq-q">
                  Which AI model is best for idea-based carousels?
                  <span className="itc-faq-chevron">▼</span>
                </summary>
                <div className="itc-faq-a">
                  <p>
                    For most idea types, GPT Image 1 Medium is the most consistently
                    strong performer — it handles abstract concepts, metaphors, and
                    professional imagery well. For conceptual or philosophical ideas,
                    FLUX 1.1 Pro creates distinctive, artistic visuals. For data-backed
                    insights, Imagen 4 Standard excels at photorealistic detail.
                  </p>
                </div>
              </details>

              <details className="itc-faq-item">
                <summary className="itc-faq-q">
                  How much does it cost to turn an idea into a carousel?
                  <span className="itc-faq-chevron">▼</span>
                </summary>
                <div className="itc-faq-a">
                  <p>
                    The cost depends on which AI model and quality setting you choose.
                    The most affordable option is Imagen 4 Fast at 10 credits per
                    slide — a 3-slide carousel costs 30 credits total (~$0.30 on paid
                    plans). On the $9/month Lite plan (300 credits), you can generate
                    approximately 6–10 full 3-slide carousels per month.
                  </p>
                </div>
              </details>

              <details className="itc-faq-item">
                <summary className="itc-faq-q">
                  Can I use the carousel images commercially?
                  <span className="itc-faq-chevron">▼</span>
                </summary>
                <div className="itc-faq-a">
                  <p>
                    Yes — full commercial rights are included with every image
                    generated on Scenith. You can use carousel slides in paid ads,
                    client deliverables, product pages, sponsored posts, and any
                    commercial context without attribution or licensing fees.
                  </p>
                </div>
              </details>

              <details className="itc-faq-item">
                <summary className="itc-faq-q">
                  I don't have an idea yet. Can I still make carousels?
                  <span className="itc-faq-chevron">▼</span>
                </summary>
                <div className="itc-faq-a">
                  <p>
                    Yes. The Carousel mode accepts any prompt — you don't need an
                    existing idea. Use the 30+ built-in prompt suggestions across
                    15 content categories to get inspired, or write a short prompt
                    like "5 lessons from my first year of freelancing" and the AI
                    will help you develop it into a full carousel.
                  </p>
                </div>
              </details>

              <details className="itc-faq-item">
                <summary className="itc-faq-q">
                  How do I post LinkedIn carousels from Scenith?
                  <span className="itc-faq-chevron">▼</span>
                </summary>
                <div className="itc-faq-a">
                  <p>
                    Download your 3 slides as PNGs, compile them into a single PDF
                    using any free PDF merger (Smallpdf, ilovepdf.com), then upload
                    the PDF as a LinkedIn document post. LinkedIn renders each PDF
                    page as a swipeable slide. This format currently gets the
                    highest engagement on LinkedIn.
                  </p>
                </div>
              </details>

              <details className="itc-faq-item">
                <summary className="itc-faq-q">
                  Can I turn a carousel slide into an animated video?
                  <span className="itc-faq-chevron">▼</span>
                </summary>
                <div className="itc-faq-a">
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
          <section className="itc-section">
            <div className="itc-section-label">More Scenith tools</div>
            <h2 className="itc-section-title">Complete Your Content Stack</h2>
            <p className="itc-section-sub" style={{ marginBottom: 24 }}>
              Carousel is just one piece. The full Scenith platform covers
              every content format a modern creator needs.
            </p>

            <div className="itc-related-grid">
              <a href="https://scenith.in/create-ai-content?tab=voice&utm_source=idea-to-carousel-tool&utm_medium=related-tools" className="itc-related-card">
                <span className="itc-related-icon">🎙️</span>
                <h4>AI Voice Generator</h4>
                <p>Turn your idea into podcast narration, YouTube voiceovers, or ad scripts in 40+ voices.</p>
              </a>
              <a href="https://scenith.in/create-ai-content?tab=video&utm_source=idea-to-carousel-tool&utm_medium=related-tools" className="itc-related-card">
                <span className="itc-related-icon">🎬</span>
                <h4>AI Video Generator</h4>
                <p>Animate your carousel slides into Reels and Shorts with Kling, Veo, and Wan 2.5.</p>
              </a>
              <a href="https://scenith.in/create-ai-content?tab=image&utm_source=idea-to-carousel-tool&utm_medium=related-tools" className="itc-related-card">
                <span className="itc-related-icon">🖼️</span>
                <h4>AI Image Generator</h4>
                <p>Generate standalone images for thumbnails, social posts, and ad creatives with 7 AI models.</p>
              </a>
              <a href="https://scenith.in/tools" className="itc-related-card">
                <span className="itc-related-icon">🛠️</span>
                <h4>All AI Tools</h4>
                <p>Explore the full suite of Scenith micro-tools built for creators, marketers, and teams.</p>
              </a>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              FOOTER CTA
          ════════════════════════════════════════════════════ */}
          <div className="itc-footer-cta">
            <h2>
              Your Idea Deserves{" "}
              <span style={{ background: "linear-gradient(135deg, #f59e0b, #fb923c)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                More Than a Note
              </span>
            </h2>
            <p>
              Stop letting your best ideas die in notes apps. Generate AI carousel
              slides that reach a new audience on LinkedIn and Instagram — free to
              start, no design skills needed.
            </p>
            <a href={CTA_URL} className="itc-cta-primary" style={{ display: "inline-flex" }}>
              💡 Generate My Carousel Now
              <span className="itc-cta-arrow">→</span>
            </a>
            <p>
              50 free credits · No credit card · Commercial rights included
            </p>
          </div>

        </div>{/* /itc-content */}
      </div>{/* /itc-page */}
    </>
  );
}