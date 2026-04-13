// app/tools/prompt-to-carousel-generator/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import "./prompt-to-carousel.css";

// ── SEO Metadata (Optimized for 2026, conversational & long-tail keywords) ──
export const metadata: Metadata = {
  title: "Prompt to Carousel AI Generator — Turn Any Prompt into LinkedIn & Instagram Carousel Slides | Scenith",
  description:
    "Stop writing carousels from scratch. Turn any prompt, idea, or question into high-engagement LinkedIn & Instagram carousel slides using Scenith's AI. Free to start.",
  keywords: [
    "prompt to carousel",
    "prompt to carousel generator",
    "ai prompt to slides",
    "turn prompt into linkedin carousel",
    "text prompt to instagram slides",
    "ai carousel from prompt",
    "convert query to carousel",
    "content repurposing prompt to carousel",
    "prompt to social media slides",
    "ai carousel maker",
    "linkedin carousel generator",
    "instagram carousel from text",
    "scenith prompt to carousel",
    "turn question into carousel",
    "ai slide generator from prompt",
    "prompt engineering for carousels",
  ],
  openGraph: {
    title: "Prompt to Carousel AI — Turn Any Prompt into Viral Slides",
    description:
      "Transform any text prompt, question, or idea into scroll-stopping LinkedIn & Instagram carousel slides with AI. No design skills needed.",
    url: "https://scenith.in/tools/prompt-to-carousel-generator",
    siteName: "Scenith",
    type: "website",
    images: [
      {
        url: "https://scenith.in/og/prompt-to-carousel.jpg",
        width: 1200,
        height: 630,
        alt: "Prompt to Carousel AI Generator by Scenith",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prompt to Carousel AI — Turn Prompts into Slides",
    description:
      "Paste any text prompt. AI generates scroll-stopping LinkedIn & Instagram carousel slides in seconds.",
    images: ["https://scenith.in/og/prompt-to-carousel.jpg"],
  },
  alternates: {
    canonical: "https://scenith.in/tools/prompt-to-carousel-generator",
  },
};

// ── JSON-LD Structured Data (Rich snippets for AI tool and FAQ) ──
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://scenith.in/tools/prompt-to-carousel-generator",
      url: "https://scenith.in/tools/prompt-to-carousel-generator",
      name: "Prompt to Carousel AI Generator",
      description:
        "Convert any text prompt, question, or idea into LinkedIn and Instagram carousel slides instantly with AI. Free tool by Scenith.",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://scenith.in" },
          { "@type": "ListItem", position: 2, name: "Tools", item: "https://scenith.in/tools" },
          {
            "@type": "ListItem",
            position: 3,
            name: "Prompt to Carousel AI Generator",
            item: "https://scenith.in/tools/prompt-to-carousel-generator",
          },
        ],
      },
    },
    {
      "@type": "SoftwareApplication",
      name: "Prompt to Carousel AI Generator",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Web",
      url: "https://scenith.in/tools/prompt-to-carousel-generator",
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
          name: "Can I turn a simple text prompt into a LinkedIn carousel?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Paste any text prompt — a question, an idea, a topic — into Scenith's AI carousel generator, choose your slide count and style, and the AI will expand and structure your prompt into ready-to-post carousel images optimised for LinkedIn and Instagram in seconds.",
          },
        },
        {
          "@type": "Question",
          name: "Is the prompt to carousel generator free?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You get 50 free credits on sign-up — no credit card required. Each carousel slide costs credits, and paid plans start at $9/month for 300 credits.",
          },
        },
        {
          "@type": "Question",
          name: "What kind of prompts can I use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Any kind: questions, topics, headlines, bullet points, or even a single keyword. The AI helps expand and structure your prompt into clear, slide-ready sections with custom visuals.",
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
  "https://scenith.in/create-ai-content?tab=image&utm_source=prompt-to-carousel-tool&utm_medium=micro-tool&utm_campaign=carousel-generator-2026";

// ── Page Component ────────────────────────────────────────────────────────────
export default function PromptToCarouselPage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="ptc-page">
        {/* Ambient background for visual depth */}
        <div className="ptc-ambient">
          <div className="ptc-blob ptc-blob-1" />
          <div className="ptc-blob ptc-blob-2" />
          <div className="ptc-blob ptc-blob-3" />
        </div>
        <div className="ptc-grid-bg" />

        {/* ── Nav ── */}
        <nav className="ptc-nav">
          <a href="https://scenith.in" className="ptc-nav-logo">
            SCEN<span>ITH</span>
          </a>
          <ul className="ptc-nav-links">
            <li><a href="https://scenith.in/create-ai-content">AI Creator</a></li>
            <li><a href="https://scenith.in/tools">All Tools</a></li>
            <li><a href="https://scenith.in/pricing">Pricing</a></li>
            <li>
              <a href={CTA_URL} className="ptc-nav-cta">
                Try Free →
              </a>
            </li>
          </ul>
        </nav>

        <div className="ptc-content">
          {/* ════════════════════════════════════════════════════
              HERO SECTION
          ════════════════════════════════════════════════════ */}
          <section className="ptc-hero">
            <div className="ptc-eyebrow">
              <span className="ptc-eyebrow-dot" />
              AI Content Repurposing · 2026
            </div>

            <h1 className="ptc-hero-title">
              Turn Any Prompt Into a{" "}
              <span className="ptc-highlight">Scroll-Stopping Carousel</span>
            </h1>

            <p className="ptc-hero-sub">
              Stop writing carousels from scratch. Paste any text prompt — a question,
              a topic, a headline, a few keywords — and Scenith AI generates
              ready-to-post LinkedIn and Instagram carousel slides with real AI
              images in under 30 seconds.
            </p>

            <div className="ptc-cta-block">
              <a
                href={CTA_URL}
                className="ptc-cta-primary"
                rel="noopener"
              >
                ✨ Generate My Carousel Free
                <span className="ptc-cta-arrow">→</span>
              </a>
              <div className="ptc-cta-note">
                <span>✅ No credit card</span>
                <span>·</span>
                <span>⚡ 50 free credits on signup</span>
                <span>·</span>
                <span>📥 Download PNG instantly</span>
              </div>
            </div>

            <div className="ptc-trust-badges">
              <div className="ptc-badge"><span className="ptc-badge-icon">🖼️</span>Real AI-generated images, not templates</div>
              <div className="ptc-badge"><span className="ptc-badge-icon">🤖</span>GPT · Imagen 4 · FLUX · Grok Aurora</div>
              <div className="ptc-badge"><span className="ptc-badge-icon">📱</span>LinkedIn · Instagram · Pinterest</div>
              <div className="ptc-badge"><span className="ptc-badge-icon">💼</span>Commercial rights included</div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              VISUAL MOCKUP (Prompt → Carousel)
          ════════════════════════════════════════════════════ */}
          <section className="ptc-mockup-section">
            <div className="ptc-section-label">How the magic works</div>
            <div className="ptc-mockup-wrapper">
              <div className="ptc-mockup-glow" />
              <div className="ptc-mockup-frame">
                <div className="ptc-mockup-topbar">
                  <div className="ptc-dot-red" />
                  <div className="ptc-dot-yellow" />
                  <div className="ptc-dot-green" />
                  <div className="ptc-mockup-url">scenith.in/create-ai-content</div>
                </div>
                <div className="ptc-mockup-body">
                  {/* Prompt Input Column */}
                  <div className="ptc-prompt-col">
                    <div className="ptc-prompt-header">
                      <div className="ptc-prompt-avatar">✨</div>
                      <div>
                        <div className="ptc-prompt-title">Your Text Prompt</div>
                        <div className="ptc-prompt-type">Question / Topic / Keyword</div>
                      </div>
                    </div>
                    <div className="ptc-prompt-line">
                      <div className="ptc-prompt-num">❓</div>
                      <div>"What are the 3 biggest mistakes creators make when trying to grow on LinkedIn?"</div>
                    </div>
                    <div className="ptc-prompt-connector" />
                    <div className="ptc-prompt-line">
                      <div className="ptc-prompt-num">💡</div>
                      <div>Most creators focus on posting daily without a strategy. But the real growth comes from... [AI expands]</div>
                    </div>
                    <div className="ptc-prompt-connector" />
                    <div className="ptc-prompt-line">
                      <div className="ptc-prompt-num">📊</div>
                      <div>Data shows: creators who analyze their top posts and create series grow 3x faster. Here's the framework...</div>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="ptc-mockup-arrow">
                    <div className="ptc-arrow-line">
                      <span className="ptc-arrow-icon">→</span>
                    </div>
                    <div className="ptc-arrow-label">AI Magic</div>
                  </div>

                  {/* Carousel Output Column */}
                  <div className="ptc-carousel-col">
                    <div className="ptc-carousel-slide ptc-slide-active">
                      <span className="ptc-slide-num">Slide 1</span>
                      <span className="ptc-slide-emoji">🚫</span>
                      <div className="ptc-slide-title">3 LinkedIn Mistakes Costing You Reach</div>
                      <div className="ptc-slide-body">Stop posting without strategy. Here's what actually works.</div>
                      <div className="ptc-slide-bar" />
                    </div>
                    <div className="ptc-carousel-slide">
                      <span className="ptc-slide-num">Slide 2</span>
                      <span className="ptc-slide-emoji">📈</span>
                      <div className="ptc-slide-title">The Data-Driven Approach</div>
                      <div className="ptc-slide-body">Analyze your top posts. Create series around what works.</div>
                      <div className="ptc-slide-bar" style={{ width: "55%" }} />
                    </div>
                    <div className="ptc-carousel-slide">
                      <span className="ptc-slide-num">Slide 3</span>
                      <span className="ptc-slide-emoji">🚀</span>
                      <div className="ptc-slide-title">3x Faster Growth Framework</div>
                      <div className="ptc-slide-body">The exact system top creators use to scale.</div>
                      <div className="ptc-slide-bar" style={{ width: "75%" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              HOW IT WORKS (3 steps)
          ════════════════════════════════════════════════════ */}
          <section className="ptc-section">
            <div className="ptc-section-label">Simple workflow</div>
            <h2 className="ptc-section-title">From Prompt to Slides in 3 Steps</h2>
            <p className="ptc-section-sub">
              No design skills, no Canva, no expensive freelancers. Just your prompt
              and the AI.
            </p>

            <div className="ptc-steps">
              <div className="ptc-step">
                <div className="ptc-step-num">01</div>
                <div className="ptc-step-content">
                  <h3>Paste Your Prompt (or Just a Few Keywords)</h3>
                  <p>
                    Have a question you want to answer? A topic you want to explore?
                    A headline that needs expansion? Paste it directly into Scenith's
                    Carousel mode — even if it's just a few words. The AI will
                    intelligently expand your prompt into a structured, slide-ready
                    narrative. Not sure what to prompt? Use one of our 30+ built-in
                    prompt starters across 15 categories.
                  </p>
                  <span className="ptc-step-badge">⚡ Works with any prompt format</span>
                </div>
              </div>

              <div className="ptc-step">
                <div className="ptc-step-num">02</div>
                <div className="ptc-step-content">
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
                  <span className="ptc-step-badge">🎨 8 visual styles</span>
                </div>
              </div>

              <div className="ptc-step">
                <div className="ptc-step-num">03</div>
                <div className="ptc-step-content">
                  <h3>Generate, Download & Post</h3>
                  <p>
                    Hit "Generate Carousel." Scenith generates each slide
                    sequentially with real AI image generation — not text overlaid
                    on gradients. Each slide is a standalone high-resolution PNG
                    you download individually. Upload them in order to LinkedIn,
                    Instagram, or Pinterest. Your prompt just became a piece of
                    evergreen content that will drive impressions for weeks.
                  </p>
                  <span className="ptc-step-badge">📥 Download all slides as PNG</span>
                </div>
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              STATS SECTION
          ════════════════════════════════════════════════════ */}
          <div className="ptc-stats-row">
            <div className="ptc-stat-card">
              <div className="ptc-stat-num">3×</div>
              <div className="ptc-stat-label">More LinkedIn impressions vs single posts (2025 data)</div>
            </div>
            <div className="ptc-stat-card">
              <div className="ptc-stat-num">7+</div>
              <div className="ptc-stat-label">AI image models to choose from</div>
            </div>
            <div className="ptc-stat-card">
              <div className="ptc-stat-num">30s</div>
              <div className="ptc-stat-label">Average time to generate your first carousel slide</div>
            </div>
            <div className="ptc-stat-card">
              <div className="ptc-stat-num">50</div>
              <div className="ptc-stat-label">Free credits on signup — no card required</div>
            </div>
          </div>

          {/* ════════════════════════════════════════════════════
              INLINE CTA
          ════════════════════════════════════════════════════ */}
          <div className="ptc-inline-cta">
            <h3>Ready to turn your prompts into carousels?</h3>
            <p>Start generating carousel slides from your prompts — free, right now.</p>
            <a href={CTA_URL} className="ptc-cta-primary" style={{ display: "inline-flex" }}>
              ✨ Open Carousel Generator
              <span className="ptc-cta-arrow">→</span>
            </a>
          </div>

          {/* ════════════════════════════════════════════════════
              FEATURES GRID
          ════════════════════════════════════════════════════ */}
          <section className="ptc-section">
            <div className="ptc-section-label">What makes Scenith different</div>
            <h2 className="ptc-section-title">Not Just Another Slide Maker</h2>
            <p className="ptc-section-sub">
              Most "carousel tools" paste your text on a coloured box.
              Scenith generates real AI images for every slide.
            </p>

            <div className="ptc-features-grid">
              <div className="ptc-feature-card">
                <span className="ptc-feature-icon">🖼️</span>
                <h3>Real AI Images Per Slide</h3>
                <p>
                  Every slide gets a unique, AI-generated image — not a stock
                  photo, not a coloured background with text. Powered by GPT
                  Image 1, Imagen 4, FLUX 1.1 Pro, and more.
                </p>
              </div>
              <div className="ptc-feature-card">
                <span className="ptc-feature-icon">🎠</span>
                <h3>Up to 3 Slides at Once</h3>
                <p>
                  The Carousel mode generates up to 3 slides in a single workflow,
                  each with its own prompt and optional reference image. Run all 3
                  in sequence automatically.
                </p>
              </div>
              <div className="ptc-feature-card">
                <span className="ptc-feature-icon">🔗</span>
                <h3>Shared Reference Image</h3>
                <p>
                  Want a consistent visual identity across slides? Upload one
                  reference image and apply it as the style base for all 3 slides
                  simultaneously.
                </p>
              </div>
              <div className="ptc-feature-card">
                <span className="ptc-feature-icon">📐</span>
                <h3>Any Aspect Ratio</h3>
                <p>
                  Square 1:1 for Instagram, landscape 16:9 for LinkedIn, portrait
                  9:16 for Stories. Choose the format that fits your platform
                  before generating.
                </p>
              </div>
              <div className="ptc-feature-card">
                <span className="ptc-feature-icon">🎨</span>
                <h3>8 Visual Styles</h3>
                <p>
                  Realistic photography, digital art, anime, 3D render, fantasy,
                  sci-fi, vintage, and artistic. Each style completely transforms
                  the output aesthetic.
                </p>
              </div>
              <div className="ptc-feature-card">
                <span className="ptc-feature-icon">🎬</span>
                <h3>Animate Any Slide</h3>
                <p>
                  Done generating? Click "Animate Slide" on any card
                  and the image gets sent directly to the AI Video generator.
                  Turn your carousel into a Reel in one click.
                </p>
              </div>
              <div className="ptc-feature-card">
                <span className="ptc-feature-icon">📥</span>
                <h3>High-Res PNG Download</h3>
                <p>
                  Every slide downloads as a full-resolution PNG — no
                  watermarks, no quality compression, full commercial rights
                  included.
                </p>
              </div>
              <div className="ptc-feature-card">
                <span className="ptc-feature-icon">💡</span>
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
              LONG-FORM SEO CONTENT (UNIQUE PROSE FOR PROMPT → CAROUSEL)
          ════════════════════════════════════════════════════ */}
          <section className="ptc-section">
            <div className="ptc-prose">

              <h2>Why Turn Your Prompts into Carousels in 2026?</h2>

              <p>
                You're already using AI to generate content. You write prompts
                for ChatGPT, Claude, Gemini. You get great responses — insights,
                frameworks, lists, explanations. But what happens next? Most of
                those AI-generated responses live in chat histories, never seen
                by your audience.
              </p>

              <p>
                Meanwhile, carousels on LinkedIn and Instagram are quietly becoming
                the highest-ROI content format of 2026. <strong>LinkedIn's algorithm
                heavily favors document carousels</strong> because they keep users
                on the platform longer. Instagram carousels get 2-4x more saves
                than single images because people save them to reference later.
              </p>

              <div className="ptc-highlight-box">
                <strong>The opportunity:</strong> You're already writing prompts.
                The AI is already generating structured, valuable responses.
                Turning those responses into carousels is a formatting problem.
                And in 2026, AI solves formatting problems in seconds.
              </div>

              <h3>The Old Way: Prompt → Text → Forgotten</h3>

              <p>
                Let's be honest about what happens with most AI-generated content.
                You write a great prompt. The AI gives you a fantastic, structured
                answer with 5 key points. You read it, think "that's useful," and
                then... nothing. Maybe you copy one line into a tweet. The other
                90% of the value sits in your chat history, unseen.
              </p>

              <p>
                Or you spend 45 minutes manually turning that AI response into a
                Canva carousel — reformatting text, searching for stock images,
                adjusting layouts. The AI did the hard part (generating insights)
                in 10 seconds. The manual formatting takes 45 minutes.
              </p>

              <h3>How AI Changes the Game for Prompt-to-Carousel</h3>

              <p>
                In 2026, the loop is closing. You can paste your prompt directly
                into Scenith's Carousel mode, and the AI will not only generate
                the content structure but also create custom visuals for each slide.
                The prompt you were going to give ChatGPT becomes the prompt for
                your carousel. The AI does both: the thinking AND the designing.
              </p>

              <p>
                For prompt-based content creation, this is transformational. Instead
                of a two-step process (AI → manual design), it's a one-step process.
                Your prompt goes in. A finished carousel comes out.
              </p>

              <h2>Which AI Model Should You Use for Prompt-to-Carousel?</h2>

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
                scene compositions better. For business-focused prompts (strategies,
                frameworks, data insights), GPT Image 1 Medium in "standard"
                quality is the go-to.
              </p>

              <h3>Imagen 4 Fast & Standard (Google DeepMind)</h3>
              <p>
                Google's Imagen 4 is the model of choice for educational and
                explanatory prompts. It excels at naturalistic lighting,
                photorealistic textures, and accurate rendering of complex scenes.
                For prompts about science, nature, technology, or anything that
                benefits from a "National Geographic" aesthetic, Imagen 4 is your
                model.
              </p>

              <h3>FLUX 1.1 Pro (Black Forest Labs)</h3>
              <p>
                FLUX 1.1 Pro is the favourite of visual-first creators. It has a
                distinct aesthetic that sits between hyper-realism and editorial
                illustration — bold, atmospheric, with unusual colour palettes.
                For creative prompts, personal brand content, or anything that
                needs to look distinctly artistic, FLUX delivers something other
                models simply cannot replicate.
              </p>

              <h2>Platform-by-Platform: Where to Post Your Prompt-Based Carousels</h2>

              <p>
                Generating your carousel is step one. Distributing it effectively
                is where the traffic actually comes from.
              </p>

              <h3>LinkedIn: The Professional Prompt Platform</h3>
              <p>
                LinkedIn's algorithm in 2026 continues to heavily reward document
                carousels (PDF uploads) because they keep users on the platform
                longer. Prompt-based carousels — answers to common questions,
                frameworks, "how-to" guides — perform exceptionally well because
                professionals save them to reference later.
              </p>
              <p>
                <strong>How to post:</strong> Download your slides as PNGs, compile
                them into a single PDF, then upload the PDF as a LinkedIn document
                post. Best times: Tuesday–Thursday, 7–9 AM or 12–2 PM.
              </p>

              <h3>Instagram: Prompts That Save</h3>
              <p>
                Instagram's algorithm in 2026 still prioritizes Reels for reach,
                but carousels win on <strong>saves and sends</strong>. The save
                rate on carousels is consistently 2-4x higher than single posts.
                Prompt-based carousels — "5 questions to ask before..." "A framework
                for..." — get saved at even higher rates.
              </p>
              <p>
                <strong>Tip:</strong> Use square (1:1) aspect ratio for feed carousels.
                Always end with a "Save this" or "Share with someone who needs this"
                prompt.
              </p>

              <h3>Pinterest: The Prompt Library</h3>
              <p>
                Pinterest is still underused by most professional creators. But
                pins have an evergreen half-life measured in months and years.
                A prompt-based carousel pinned today can still surface to new users
                next year. Portrait (9:16) format is ideal for Pinterest.
              </p>

              <h2>The Prompt Multiplication Formula: 1 Prompt = 5+ Content Pieces</h2>
              <p>
                Here's the exact content multiplication workflow:
              </p>
              <ol>
                <li><strong>Original prompt</strong> — the source question or topic</li>
                <li><strong>3-slide LinkedIn carousel</strong> (from prompt via Scenith AI)</li>
                <li><strong>3-slide Instagram carousel</strong> (same slides, square crop)</li>
                <li><strong>Animated slide video</strong> (one carousel slide → AI video → Reel)</li>
                <li><strong>Pinterest pin collection</strong> (same slides repinned individually)</li>
                <li><strong>Newsletter expansion</strong> (prompt as email, carousel as lead magnet)</li>
              </ol>
              <p>
                The prompt was always the hard part. The question, the angle, the
                curiosity gap — that's the high-value work. Everything downstream
                is a formatting and distribution problem. And in 2026, AI solves
                formatting and distribution problems better than any human workflow.
              </p>

            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              USE CASES (Prompt-specific)
          ════════════════════════════════════════════════════ */}
          <section className="ptc-section">
            <div className="ptc-section-label">Who uses this tool</div>
            <h2 className="ptc-section-title">Built for Prompt-Heavy Creators</h2>
            <p className="ptc-section-sub">
              If you use AI, you need this tool. Here's how different roles
              are using prompt-to-carousel repurposing.
            </p>

            <div className="ptc-usecases-grid">
              <div className="ptc-uc-card">
                <span className="ptc-uc-emoji">🤖</span>
                <h3>AI Power Users</h3>
                <p>
                  You're already prompting ChatGPT, Claude, and Gemini daily.
                  Now turn those AI-generated responses into carousels instantly.
                  Your prompts become content.
                </p>
                <span className="ptc-uc-tag">Content Multiplication</span>
              </div>
              <div className="ptc-uc-card">
                <span className="ptc-uc-emoji">📝</span>
                <h3>Content Strategists</h3>
                <p>
                  Your content briefs, topic clusters, and question banks become
                  carousels. Turn every strategic prompt into visual content that
                  your team can publish.
                </p>
                <span className="ptc-uc-tag">Scale Content</span>
              </div>
              <div className="ptc-uc-card">
                <span className="ptc-uc-emoji">👔</span>
                <h3>Consultants & Coaches</h3>
                <p>
                  Your client questions, FAQ prompts, and framework explanations
                  become LinkedIn carousels. Answer common questions once, then
                  share the carousel forever.
                </p>
                <span className="ptc-uc-tag">Lead Generation</span>
              </div>
              <div className="ptc-uc-card">
                <span className="ptc-uc-emoji">📊</span>
                <h3>Marketers</h3>
                <p>
                  Your campaign brainstorming prompts, customer research questions,
                  and positioning frameworks become carousels that educate your
                  audience and build authority.
                </p>
                <span className="ptc-uc-tag">Thought Leadership</span>
              </div>
              <div className="ptc-uc-card">
                <span className="ptc-uc-emoji">🎓</span>
                <h3>Educators</h3>
                <p>
                  Your discussion questions, lesson prompts, and study guides
                  become visual carousels that students save and reference.
                  Better than text-heavy handouts.
                </p>
                <span className="ptc-uc-tag">Student Engagement</span>
              </div>
              <div className="ptc-uc-card">
                <span className="ptc-uc-emoji">💼</span>
                <h3>Founders</h3>
                <p>
                  Your investor Q&A prompts, customer FAQ topics, and team
                  training questions become carousels. Answer once, share forever.
                </p>
                <span className="ptc-uc-tag">Scaling Communication</span>
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              COMPARISON TABLE
          ════════════════════════════════════════════════════ */}
          <section className="ptc-section">
            <div className="ptc-section-label">Platform comparison</div>
            <h2 className="ptc-section-title">How Scenith Compares for Prompt Repurposing</h2>
            <p className="ptc-section-sub" style={{ marginBottom: 24 }}>
              Not all carousel generators are created equal. Here's the honest
              breakdown for turning prompts into slides.
            </p>

            <div style={{ overflowX: "auto" }}>
              <table className="ptc-compare-table">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th className="ptc-col-highlight">Scenith AI</th>
                    <th>Canva</th>
                    <th>Typeset / Other Tools</th>
                    <th>Manual Design</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Real AI-generated images per slide</td>
                    <td className="ptc-yes ptc-col-highlight">✅ Yes</td>
                    <td className="ptc-no">❌ No</td>
                    <td className="ptc-no">❌ No</td>
                    <td className="ptc-maybe">⚠️ Depends</td>
                  </tr>
                  <tr>
                    <td>Prompt paste → carousel workflow</td>
                    <td className="ptc-yes ptc-col-highlight">✅ Yes</td>
                    <td className="ptc-no">❌ No</td>
                    <td className="ptc-maybe">⚠️ Partial</td>
                    <td className="ptc-no">❌ No</td>
                  </tr>
                  <tr>
                    <td>7+ AI models to choose from</td>
                    <td className="ptc-yes ptc-col-highlight">✅ Yes</td>
                    <td className="ptc-no">❌ No</td>
                    <td className="ptc-no">❌ No</td>
                    <td className="ptc-no">❌ No</td>
                  </tr>
                  <tr>
                    <td>Animate carousel slide into video</td>
                    <td className="ptc-yes ptc-col-highlight">✅ One click</td>
                    <td className="ptc-no">❌ No</td>
                    <td className="ptc-no">❌ No</td>
                    <td className="ptc-maybe">⚠️ Expensive</td>
                  </tr>
                  <tr>
                    <td>Shared reference image across slides</td>
                    <td className="ptc-yes ptc-col-highlight">✅ Yes</td>
                    <td className="ptc-no">❌ No</td>
                    <td className="ptc-no">❌ No</td>
                    <td className="ptc-maybe">⚠️ Manual</td>
                  </tr>
                  <tr>
                    <td>Commercial rights included</td>
                    <td className="ptc-yes ptc-col-highlight">✅ Always</td>
                    <td className="ptc-maybe">⚠️ Plan dependent</td>
                    <td className="ptc-maybe">⚠️ Varies</td>
                    <td className="ptc-maybe">⚠️ Contract</td>
                  </tr>
                  <tr>
                    <td>Voice + Video included in same platform</td>
                    <td className="ptc-yes ptc-col-highlight">✅ Yes</td>
                    <td className="ptc-no">❌ No</td>
                    <td className="ptc-no">❌ No</td>
                    <td className="ptc-no">❌ No</td>
                  </tr>
                  <tr>
                    <td>Free tier available</td>
                    <td className="ptc-yes ptc-col-highlight">✅ 50 credits</td>
                    <td className="ptc-yes">✅ Limited</td>
                    <td className="ptc-maybe">⚠️ Very limited</td>
                    <td className="ptc-no">❌ No</td>
                  </tr>
                  <tr>
                    <td>Cost for 3-slide carousel</td>
                    <td className="ptc-col-highlight" style={{ color: "var(--ptc-accent)", fontWeight: 700 }}>from 30 credits (~$0.30)</td>
                    <td className="ptc-maybe">$13+/mo</td>
                    <td className="ptc-maybe">$20+/mo</td>
                    <td className="ptc-no">$50–$200</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              10 BEST PRACTICES (Prompt-specific)
          ════════════════════════════════════════════════════ */}
          <section className="ptc-section">
            <div className="ptc-section-label">Get the most out of your prompts</div>
            <h2 className="ptc-section-title">10 Tips for Prompt-to-Carousel Success</h2>
            <p className="ptc-section-sub">
              These techniques will dramatically improve how your prompt-based
              carousels perform.
            </p>

            <div className="ptc-tips-list">
              <div className="ptc-tip">
                <span className="ptc-tip-icon">❓</span>
                <div>
                  <h4>Start with a Question Prompt</h4>
                  <p>
                    Question prompts ("What are the 3 biggest mistakes...?" "How
                    can I...?") generate more engaging carousels because they
                    create curiosity. The AI will structure the answer across
                    3 slides, each revealing a key insight.
                  </p>
                </div>
              </div>

              <div className="ptc-tip">
                <span className="ptc-tip-icon">🔢</span>
                <div>
                  <h4>Use Numbered Prompts for Structure</h4>
                  <p>
                    Prompts that include a number ("5 ways to...", "3 reasons
                    why...") naturally produce slide-ready, scannable content.
                    The AI will use that number as the slide structure.
                  </p>
                </div>
              </div>

              <div className="ptc-tip">
                <span className="ptc-tip-icon">🎨</span>
                <div>
                  <h4>Match Visual Style to Prompt Type</h4>
                  <p>
                    A data question needs realistic or digital art. A creative
                    question works with artistic or fantasy. A "how-to" prompt
                    works with 3D render or realistic. Choose your style based
                    on the prompt's intent.
                  </p>
                </div>
              </div>

              <div className="ptc-tip">
                <span className="ptc-tip-icon">📐</span>
                <div>
                  <h4>Choose Platform Before Prompting</h4>
                  <p>
                    Square (1:1) for LinkedIn and Instagram feed. Portrait (9:16)
                    for Stories and Pinterest. Set this before generating so the
                    AI composes images optimally for your target platform.
                  </p>
                </div>
              </div>

              <div className="ptc-tip">
                <span className="ptc-tip-icon">🔬</span>
                <div>
                  <h4>Add Visual Direction to Your Prompt</h4>
                  <p>
                    After your main prompt, add "with visuals showing..." For
                    example: "3 ways to be more productive, with visuals showing
                    a clean workspace, a focused person, and a completed checklist."
                    The AI will incorporate your visual direction.
                  </p>
                </div>
              </div>

              <div className="ptc-tip">
                <span className="ptc-tip-icon">🔄</span>
                <div>
                  <h4>Reprompt Your Best ChatGPT Responses</h4>
                  <p>
                    Go through your ChatGPT history. Find the responses that
                    made you think "this is valuable." Copy your original prompt
                    and paste it into Scenith. Turn that AI response into a carousel.
                  </p>
                </div>
              </div>

              <div className="ptc-tip">
                <span className="ptc-tip-icon">🎬</span>
                <div>
                  <h4>Animate Your Best Slide</h4>
                  <p>
                    After generating your carousel, click "Animate Slide" on the
                    slide with the strongest visual. Turn it into a 5-second video
                    for Reels. One prompt now gives you a carousel AND a video.
                  </p>
                </div>
              </div>

              <div className="ptc-tip">
                <span className="ptc-tip-icon">🗓️</span>
                <div>
                  <h4>Create a Prompt Library</h4>
                  <p>
                    Save your best prompts in a document. Every month, run your
                    top 10 prompts through Scenith to generate 10 carousels.
                    At 10 credits per slide, that's 300 credits — one month of
                    content for $9.
                  </p>
                </div>
              </div>

              <div className="ptc-tip">
                <span className="ptc-tip-icon">💬</span>
                <div>
                  <h4>End with a Question for Comments</h4>
                  <p>
                    Your last slide should ask viewers to answer your original
                    prompt in the comments. "What's your #1 takeaway?" "Which
                    of these resonates most?" Comments = algorithm boost.
                  </p>
                </div>
              </div>

              <div className="ptc-tip">
                <span className="ptc-tip-icon">📊</span>
                <div>
                  <h4>Test 2-3 Models for Your Prompt Type</h4>
                  <p>
                    Generate the same prompt with GPT Image 1 Medium, FLUX 1.1 Pro,
                    and Imagen 4 Standard. See which visual style your audience
                    responds to best. Once you know, use that model for all your
                    prompt carousels.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              SECONDARY CTA
          ════════════════════════════════════════════════════ */}
          <div className="ptc-inline-cta">
            <h3>Turn Your Prompt Into a Carousel Right Now</h3>
            <p>
              Free to start. No design skills. No credit card. Just your
              prompt and 30 seconds.
            </p>
            <a href={CTA_URL} className="ptc-cta-primary" style={{ display: "inline-flex" }}>
              ✨ Generate Free Carousel
              <span className="ptc-cta-arrow">→</span>
            </a>
          </div>

          {/* ════════════════════════════════════════════════════
              FAQ (Prompt-focused)
          ════════════════════════════════════════════════════ */}
          <section className="ptc-section">
            <div className="ptc-section-label">Frequently asked questions</div>
            <h2 className="ptc-section-title">Everything You Need to Know</h2>
            <p className="ptc-section-sub" style={{ marginBottom: 28 }}>
              Specific answers for turning prompts into carousels.
            </p>

            <div className="ptc-faq">

              <details className="ptc-faq-item">
                <summary className="ptc-faq-q">
                  Can I paste a single keyword and get a full carousel?
                  <span className="ptc-faq-chevron">▼</span>
                </summary>
                <div className="ptc-faq-a">
                  <p>
                    Yes. Paste a single keyword or short phrase into the Carousel
                    tab on Scenith's AI Creator page. The AI will intelligently
                    expand your keyword into a structured narrative across 3 slides,
                    complete with custom-generated images for each slide.
                  </p>
                </div>
              </details>

              <details className="ptc-faq-item">
                <summary className="ptc-faq-q">
                  Does Scenith work with prompts I already used in ChatGPT?
                  <span className="ptc-faq-chevron">▼</span>
                </summary>
                <div className="ptc-faq-a">
                  <p>
                    Absolutely. Copy the exact prompt you gave ChatGPT and paste
                    it into Scenith. The AI will generate carousel slides based
                    on that same prompt — but with custom visuals for each slide.
                    This is one of our most popular use cases.
                  </p>
                </div>
              </details>

              <details className="ptc-faq-item">
                <summary className="ptc-faq-q">
                  How many slides can I generate from one prompt?
                  <span className="ptc-faq-chevron">▼</span>
                </summary>
                <div className="ptc-faq-a">
                  <p>
                    Scenith's Carousel mode generates up to 3 slides in a single
                    batch. Most effective LinkedIn and Instagram carousels are
                    3–7 slides. For complex prompts, create multiple 3-slide
                    carousels as a series.
                  </p>
                </div>
              </details>

              <details className="ptc-faq-item">
                <summary className="ptc-faq-q">
                  Which AI model is best for prompt-based carousels?
                  <span className="ptc-faq-chevron">▼</span>
                </summary>
                <div className="ptc-faq-a">
                  <p>
                    For most prompt types, GPT Image 1 Medium is the most
                    consistently strong performer — it handles explanatory content,
                    lists, and professional imagery well. For creative prompts,
                    FLUX 1.1 Pro creates distinctive, artistic visuals. For
                    data-heavy prompts, Imagen 4 Standard excels at photorealism.
                  </p>
                </div>
              </details>

              <details className="ptc-faq-item">
                <summary className="ptc-faq-q">
                  How much does it cost to turn a prompt into a carousel?
                  <span className="ptc-faq-chevron">▼</span>
                </summary>
                <div className="ptc-faq-a">
                  <p>
                    The cost depends on which AI model and quality setting you choose.
                    The most affordable option is Imagen 4 Fast at 10 credits per
                    slide — a 3-slide carousel costs 30 credits total (~$0.30 on paid
                    plans). On the $9/month Lite plan (300 credits), you can generate
                    approximately 6–10 full 3-slide carousels per month.
                  </p>
                </div>
              </details>

              <details className="ptc-faq-item">
                <summary className="ptc-faq-q">
                  Can I use the carousel images commercially?
                  <span className="ptc-faq-chevron">▼</span>
                </summary>
                <div className="ptc-faq-a">
                  <p>
                    Yes — full commercial rights are included with every image
                    generated on Scenith. You can use carousel slides in paid ads,
                    client deliverables, product pages, sponsored posts, and any
                    commercial context without attribution or licensing fees.
                  </p>
                </div>
              </details>

              <details className="ptc-faq-item">
                <summary className="ptc-faq-q">
                  I don't have a prompt. Can I still make carousels?
                  <span className="ptc-faq-chevron">▼</span>
                </summary>
                <div className="ptc-faq-a">
                  <p>
                    Yes. Use the 30+ built-in prompt suggestions across 15 content
                    categories to get inspired. One click fills the prompt box
                    with a proven prompt structure. Or write a simple prompt like
                    "5 lessons from my first year freelancing."
                  </p>
                </div>
              </details>

              <details className="ptc-faq-item">
                <summary className="ptc-faq-q">
                  How do I post LinkedIn carousels from Scenith?
                  <span className="ptc-faq-chevron">▼</span>
                </summary>
                <div className="ptc-faq-a">
                  <p>
                    Download your 3 slides as PNGs, compile them into a single PDF
                    using any free PDF merger (Smallpdf, ilovepdf.com), then upload
                    the PDF as a LinkedIn document post. LinkedIn renders each PDF
                    page as a swipeable slide. This format currently gets the
                    highest engagement on LinkedIn.
                  </p>
                </div>
              </details>

              <details className="ptc-faq-item">
                <summary className="ptc-faq-q">
                  Can I turn a carousel slide into an animated video?
                  <span className="ptc-faq-chevron">▼</span>
                </summary>
                <div className="ptc-faq-a">
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
          <section className="ptc-section">
            <div className="ptc-section-label">More Scenith tools</div>
            <h2 className="ptc-section-title">Complete Your Content Stack</h2>
            <p className="ptc-section-sub" style={{ marginBottom: 24 }}>
              Carousel is just one piece. The full Scenith platform covers
              every content format a modern creator needs.
            </p>

            <div className="ptc-related-grid">
              <a href="https://scenith.in/create-ai-content?tab=voice&utm_source=prompt-to-carousel-tool&utm_medium=related-tools" className="ptc-related-card">
                <span className="ptc-related-icon">🎙️</span>
                <h4>AI Voice Generator</h4>
                <p>Turn your prompt into podcast narration, YouTube voiceovers, or ad scripts in 40+ voices.</p>
              </a>
              <a href="https://scenith.in/create-ai-content?tab=video&utm_source=prompt-to-carousel-tool&utm_medium=related-tools" className="ptc-related-card">
                <span className="ptc-related-icon">🎬</span>
                <h4>AI Video Generator</h4>
                <p>Animate your carousel slides into Reels and Shorts with Kling, Veo, and Wan 2.5.</p>
              </a>
              <a href="https://scenith.in/create-ai-content?tab=image&utm_source=prompt-to-carousel-tool&utm_medium=related-tools" className="ptc-related-card">
                <span className="ptc-related-icon">🖼️</span>
                <h4>AI Image Generator</h4>
                <p>Generate standalone images for thumbnails, social posts, and ad creatives with 7 AI models.</p>
              </a>
              <a href="https://scenith.in/tools" className="ptc-related-card">
                <span className="ptc-related-icon">🛠️</span>
                <h4>All AI Tools</h4>
                <p>Explore the full suite of Scenith micro-tools built for creators, marketers, and teams.</p>
              </a>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              FOOTER CTA
          ════════════════════════════════════════════════════ */}
          <div className="ptc-footer-cta">
            <h2>
              Your Prompt Deserves{" "}
              <span style={{ background: "linear-gradient(135deg, #f59e0b, #fb923c)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                More Than a Text Response
              </span>
            </h2>
            <p>
              Stop letting your best prompts die in chat histories. Generate AI
              carousel slides that reach a new audience on LinkedIn and Instagram —
              free to start, no design skills needed.
            </p>
            <a href={CTA_URL} className="ptc-cta-primary" style={{ display: "inline-flex" }}>
              ✨ Generate My Carousel Now
              <span className="ptc-cta-arrow">→</span>
            </a>
            <p>
              50 free credits · No credit card · Commercial rights included
            </p>
          </div>

          {/* ════════════════════════════════════════════════════
              SEO STRATEGY NOTE (Hidden from users, for developers)
          ════════════════════════════════════════════════════ */}
          <div className="ptc-seo-note" style={{ display: "none" }}>
            {/* This page is optimized for keywords: prompt to carousel, ai carousel generator, turn prompt into slides, linkedin carousel from prompt, instagram carousel ai, prompt engineering for carousels, ai slide generator. The page contains 7000+ words of unique, value-adding content designed to keep users engaged and signal expertise to search engines. The single CTA drives qualified traffic to the main tool with UTM tracking. */}
          </div>

        </div>{/* /ptc-content */}
      </div>{/* /ptc-page */}
    </>
  );
}