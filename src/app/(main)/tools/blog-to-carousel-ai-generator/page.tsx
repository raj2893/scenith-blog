// app/tools/blog-to-carousel-ai-generator/page.tsx
// Pure Server Component — zero JS bundle overhead, full SEO juice.

import type { Metadata } from "next";
import "./blog-to-carousel.css";

/* ─── Metadata ────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "Blog to Carousel AI Generator — Turn Any Blog Post into LinkedIn & Instagram Slides (Free)",
  description:
    "Convert any blog post, article, or long-form content into scroll-stopping AI image carousels for LinkedIn, Instagram, and Twitter — in seconds. No Canva, no design skills, no hassle. Powered by Scenith AI.",
  keywords: [
    "blog to carousel",
    "blog to carousel AI",
    "convert blog to carousel",
    "AI carousel generator",
    "linkedin carousel generator",
    "instagram carousel maker",
    "blog post to slides",
    "turn blog into carousel",
    "AI image carousel",
    "blog repurposing tool",
    "content repurposing AI",
    "social media carousel generator",
    "blog to social media slides",
    "free carousel generator",
    "AI content repurposing",
    "blog to linkedin slides",
    "blog post to instagram",
    "carousel image generator AI",
    "scenith carousel",
    "content creator tools 2026",
  ].join(", "),
  alternates: {
    canonical: "https://scenith.in/tools/blog-to-carousel-ai-generator",
  },
  openGraph: {
    title: "Blog to Carousel AI Generator — Turn Any Blog Post into Viral Slides",
    description:
      "Stop letting great blog posts die in silence. Repurpose them into scroll-stopping AI carousels for LinkedIn, Instagram & Twitter — powered by Scenith AI.",
    url: "https://scenith.in/tools/blog-to-carousel-ai-generator",
    siteName: "Scenith",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://scenith.in/og/blog-to-carousel-og.png",
        width: 1200,
        height: 630,
        alt: "Blog to Carousel AI Generator by Scenith",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog to Carousel AI Generator — Turn Any Blog Post into Viral Slides",
    description:
      "Repurpose blog posts into scroll-stopping AI carousels for LinkedIn & Instagram in seconds. Free on Scenith.",
    site: "@scenith_in",
    images: ["https://scenith.in/og/blog-to-carousel-og.png"],
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

/* ─── JSON-LD Structured Data ─────────────────────────────────────────────── */

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://scenith.in/tools/blog-to-carousel-ai-generator",
      url: "https://scenith.in/tools/blog-to-carousel-ai-generator",
      name: "Blog to Carousel AI Generator — Turn Any Blog Post into LinkedIn & Instagram Slides",
      description:
        "Free AI tool to convert blog posts and long-form content into scroll-stopping image carousels for LinkedIn, Instagram, and Twitter. Powered by Scenith AI.",
      isPartOf: { "@id": "https://scenith.in" },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://scenith.in" },
          { "@type": "ListItem", position: 2, name: "Tools", item: "https://scenith.in/tools" },
          { "@type": "ListItem", position: 3, name: "Blog to Carousel AI Generator", item: "https://scenith.in/tools/blog-to-carousel-ai-generator" },
        ],
      },
    },
    {
      "@type": "SoftwareApplication",
      name: "Scenith Blog to Carousel AI Generator",
      applicationCategory: "DesignApplication",
      operatingSystem: "Web",
      url: "https://scenith.in/tools/blog-to-carousel-ai-generator",
      description:
        "AI-powered tool that converts blog posts into carousel slides for LinkedIn, Instagram and Twitter using generative image models.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Free to start with 50 AI credits",
      },
      featureList: [
        "Blog to carousel conversion",
        "LinkedIn carousel generator",
        "Instagram carousel maker",
        "AI image generation per slide",
        "Up to 3 slides per carousel",
        "Text-to-image and image-to-image modes",
        "Multiple AI models: GPT Image, Imagen 4, Grok Aurora, FLUX",
        "One-click PNG download",
        "No design software required",
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "612",
        bestRating: "5",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How do I convert a blog post into an Instagram or LinkedIn carousel?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Paste your blog post's key points into Scenith's Carousel Generator, one slide idea per panel (up to 3 slides). Pick an AI image model like GPT Image 1 or Grok Aurora, choose your style, and hit Generate. Each slide is rendered as a high-res AI image you can download and post directly to LinkedIn or Instagram.",
          },
        },
        {
          "@type": "Question",
          name: "Is the blog to carousel AI generator free?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. You get 50 free AI credits on sign-up — no credit card required. The Carousel Generator uses around 10–46 credits per slide depending on the model, so your free credits can generate at least 1 full carousel. Paid plans start at $9/mo for 300 credits.",
          },
        },
        {
          "@type": "Question",
          name: "What AI models power the carousel image generation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Scenith's carousel generator is powered by GPT Image 1 (OpenAI), Imagen 4 Fast & Standard (Google), FLUX 1.1 Pro, Grok Aurora (xAI), Stability AI Core, and Nano Banana Pro — you can switch between them freely.",
          },
        },
        {
          "@type": "Question",
          name: "Can I use my own brand images in the carousel?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — the Image-to-Image feature lets you upload a reference image (your brand visual, product photo, etc.) and the AI will transform or remix it per your slide prompt. This keeps each slide visually consistent with your brand.",
          },
        },
        {
          "@type": "Question",
          name: "What size are the carousel images?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can choose Square (1:1) for Instagram feed, Portrait (9:16) for Stories or LinkedIn portrait, or Landscape (16:9) for Twitter/X banners. All images are generated at high resolution (2K) and downloaded as PNG files.",
          },
        },
      ],
    },
  ],
};

/* ─── Helper components ────────────────────────────────────────────────────── */

const UTM_HREF =
  "https://scenith.in/create-ai-content?tab=image&utm_source=blog-to-carousel-tool&utm_medium=tool-page&utm_campaign=carousel-generator-2026";

function CtaButton({ label = "Generate Your Carousel Free →", size = "large" }: { label?: string; size?: "large" | "medium" }) {
  return (
    <a
      href={UTM_HREF}
      className="btc-cta-primary"
      style={size === "medium" ? { padding: "13px 26px", fontSize: "14px" } : undefined}
      aria-label="Open Scenith AI Carousel Generator"
    >
      <span>{label}</span>
      <span className="btc-cta-arrow" aria-hidden="true">→</span>
    </a>
  );
}

/* ─── Page ─────────────────────────────────────────────────────────────────── */

export default function BlogToCarouselPage() {
  return (
    <>
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="btc-page">

        {/* ── Top bar ── */}
        <header className="btc-topbar" role="banner">
          <a href="https://scenith.in" className="btc-logo" aria-label="Scenith home">
            SCEN<span>I</span>TH
          </a>
          <nav className="btc-topbar-nav" aria-label="Primary navigation">
            <a href="https://scenith.in/tools">All Tools</a>
            <a href="https://scenith.in/create-ai-content">AI Studio</a>
            <a href="https://scenith.in/pricing">Pricing</a>
            <a href={UTM_HREF} className="btc-topbar-cta">
              Try Free →
            </a>
          </nav>
        </header>

        {/* ── Hero ── */}
        <section className="btc-hero" aria-labelledby="hero-heading">
          <div className="btc-hero-left">
            <div className="btc-hero-eyebrow" aria-hidden="true">
              <span className="btc-hero-eyebrow-dot" />
              Free AI Tool · No Design Skills Needed
            </div>

            <h1 className="btc-hero-title" id="hero-heading">
              Turn Any Blog Post Into a<br />
              <mark>Viral Carousel</mark> — with<br />
              <em>AI in Seconds</em>
            </h1>

            <p className="btc-hero-sub">
              Your best blog posts deserve more than 200 views. Convert them into
              scroll-stopping AI image carousels for LinkedIn, Instagram, and Twitter —
              without Canva, without a designer, without the wait.
            </p>

            <div className="btc-hero-actions">
              <CtaButton />
              <a href="#how-it-works" className="btc-cta-secondary" aria-label="See how the tool works">
                See how it works ↓
              </a>
            </div>
          </div>

          {/* Animated visual — HTML only, no JS */}
          <div className="btc-hero-visual" aria-hidden="true">
            {/* Blog card */}
            <div className="btc-blog-card card-main">
              <div className="btc-card-label">📝 Your Blog Post</div>
              <div className="btc-card-blog-lines">
                <div className="btc-card-blog-line accent" />
                <div className="btc-card-blog-line wide" />
                <div className="btc-card-blog-line mid" />
                <div className="btc-card-blog-line wide" />
                <div className="btc-card-blog-line short" />
                <div className="btc-card-blog-line mid" />
                <div className="btc-card-blog-line wide" />
                <div className="btc-card-blog-line short" />
              </div>
            </div>

            {/* Arrow */}
            <div className="btc-arrow-connector">
              <div className="btc-arrow-line" />
              <div className="btc-arrow-head">✦</div>
            </div>

            {/* Slide 1 */}
            <div className="btc-blog-card card-slide1">
              <div className="btc-card-label">Slide 1</div>
              <div className="btc-slide-thumb">🌆</div>
              <div className="btc-slide-caption w80" />
              <div className="btc-slide-caption w60" />
            </div>

            {/* Slide 2 */}
            <div className="btc-blog-card card-slide2">
              <div className="btc-card-label">Slide 2</div>
              <div className="btc-slide-thumb">💡</div>
              <div className="btc-slide-caption w80" />
              <div className="btc-slide-caption w60" />
            </div>

            {/* Slide 3 */}
            <div className="btc-blog-card card-slide3">
              <div className="btc-card-label">Slide 3</div>
              <div className="btc-slide-thumb">🚀</div>
              <div className="btc-slide-caption w80" />
              <div className="btc-slide-caption w60" />
            </div>
          </div>
        </section>

        {/* ── Stats bar ── */}
        <div className="btc-stats-bar" role="region" aria-label="Platform statistics">
          <div className="btc-stat">
            <span className="btc-stat-num">7+</span>
            <div className="btc-stat-label">AI image models</div>
          </div>
          <div className="btc-stat">
            <span className="btc-stat-num">3</span>
            <div className="btc-stat-label">slides per carousel</div>
          </div>
          <div className="btc-stat">
            <span className="btc-stat-num">~20s</span>
            <div className="btc-stat-label">generation time</div>
          </div>
          <div className="btc-stat">
            <span className="btc-stat-num">Free</span>
            <div className="btc-stat-label">to start, no card</div>
          </div>
        </div>

        {/* ── How it works ── */}
        <section className="btc-section" id="how-it-works" aria-labelledby="how-heading">
          <div className="btc-section-eyebrow">How It Works</div>
          <h2 className="btc-section-title" id="how-heading">
            From Blog Draft to Carousel-Ready Slides<br />in 3 Intentional Steps
          </h2>
          <p className="btc-section-sub">
            We built this around real creator workflows — not a cookie-cutter wizard. You control
            the narrative; the AI handles the visual heavy lifting.
          </p>

          <div className="btc-steps">
            {[
              {
                num: "Step 01",
                icon: "📄",
                title: "Pull the key ideas from your blog",
                desc: "Open your blog post and extract 2–3 core insights, hooks, or takeaways. Each one becomes a carousel slide. Think: Hook → Problem → Solution, or Myth → Truth → CTA. These are your slide prompts.",
              },
              {
                num: "Step 02",
                icon: "🖼️",
                title: "Describe the visual for each slide",
                desc: "In Scenith's Carousel Generator, enter a visual prompt for each slide — describe the image you want: scene, mood, style. Choose a model (Grok Aurora for photorealism, FLUX for editorial, Imagen 4 for ultra-detail). Pick Square for Instagram or 9:16 for Stories.",
              },
              {
                num: "Step 03",
                icon: "⚡",
                title: "Generate, download, and post",
                desc: "Hit Generate Carousel. Each slide is processed sequentially — you see them appear in real time. Download each as a high-res PNG. Stack them in order, write your hook caption, and post directly to LinkedIn or Instagram.",
              },
              {
                num: "Step 04",
                icon: "🔁",
                title: "Repurpose across every platform",
                desc: "Swap the aspect ratio and regenerate for Twitter/X banners. Use Portrait mode for LinkedIn document posts. Run the same prompts through a different AI model for a second creative direction. One blog post → 3 platforms → potentially 9 unique pieces of content.",
              },
            ].map((step) => (
              <article className="btc-step" key={step.num}>
                <div className="btc-step-num">{step.num}</div>
                <div className="btc-step-icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </article>
            ))}
          </div>

          {/* Inline CTA */}
          <div style={{ textAlign: "center" }}>
            <CtaButton label="Open the Carousel Generator →" />
            <p style={{ marginTop: 12, fontSize: 13, color: "var(--btc-text-3)" }}>
              50 free credits on signup · No card required · Results in ~20 seconds
            </p>
          </div>
        </section>

        <div className="btc-divider" />

        {/* ── Big CTA block ── */}
        <div className="btc-section" style={{ paddingBottom: 0 }}>
          <div className="btc-cta-block" role="region" aria-labelledby="cta-block-heading">
            <div className="btc-cta-block-eyebrow">🎠 Carousel Generator — Live on Scenith</div>
            <h2 className="btc-cta-block-title" id="cta-block-heading">
              Your Blog Post Is Sitting There.<br />
              Let AI Turn It Into Reach.
            </h2>
            <p className="btc-cta-block-sub">
              Every blog post you publish is a goldmine of carousel content. The average LinkedIn
              carousel gets <strong style={{ color: "#fff" }}>3× more impressions</strong> than a text post.
              Stop leaving that on the table.
            </p>
            <a
              href={UTM_HREF}
              className="btc-cta-block-btn"
              aria-label="Generate AI carousel from blog post — free on Scenith"
            >
              <span>🎠</span>
              Generate Your Carousel Free
              <span>→</span>
            </a>
            <p className="btc-cta-block-badge">
              No Canva · No designer · No Photoshop · Just your prompt and 20 seconds
            </p>
          </div>
        </div>

        {/* ── Why carousels ── */}
        <section className="btc-section" aria-labelledby="why-heading">
          <div className="btc-section-eyebrow">The Case for Carousels in 2026</div>
          <h2 className="btc-section-title" id="why-heading">
            Why LinkedIn & Instagram Carousels<br />Outperform Every Other Format
          </h2>
          <p className="btc-section-sub">
            This isn't a trend. Carousels have consistently been the highest-performing organic format
            on both LinkedIn and Instagram for three years running — and in 2026, with AI-generated
            visuals, the bar for quality has become attainable for solo creators.
          </p>

          <div className="btc-feature-grid">
            {[
              {
                icon: "📈",
                title: "3× Higher Organic Reach on LinkedIn",
                body: "LinkedIn's algorithm actively promotes carousel (document) posts because they drive multiple swipe interactions — each one is treated as a positive engagement signal. A carousel with 8 slides can accumulate 8× the dwell time of a single text post.",
              },
              {
                icon: "🔄",
                title: "Saves and Shares Drive Viral Spread",
                body: "Instagram carousel posts are saved at 2× the rate of single-image posts. Saves are the strongest signal for the Instagram Explore algorithm. A single viral carousel from one blog post can drive more profile visits than months of individual posts.",
              },
              {
                icon: "📱",
                title: "Built for How People Actually Scroll",
                body: "Mobile users process visual slides faster than they read paragraphs. Carousels let you chunk your blog's insights into bite-sized visual frames — each one self-contained, each one shareable as a standalone post on other platforms.",
              },
              {
                icon: "🎯",
                title: "Establishes Expertise Visually",
                body: "A well-designed carousel signals credibility before the reader processes a single word. AI-generated images at 2K resolution create an immediate quality impression that positions your brand alongside much larger media operations.",
              },
              {
                icon: "⏱️",
                title: "Extends Content Lifespan",
                body: "A blog post has a half-life of about 2 days in search-driven traffic. A carousel extracted from that same blog post gets re-discovered through Saved collections, platform recommendations, and hashtag search for 30–90 days.",
              },
              {
                icon: "🔗",
                title: "Drives Blog Traffic Back",
                body: "Carousels are natural teasers. Sharing 3 of 10 tips from your blog in carousel form is the highest-converting call-to-action to read the full post. Use slide 3 as a 'see the full breakdown at' hook.",
              },
            ].map((f) => (
              <article className="btc-feature-card" key={f.title}>
                <div className="btc-feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ── Quote block ── */}
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 48px 72px" }}>
          <blockquote className="btc-quote-block">
            <p className="btc-quote-text">
              "The creators winning on LinkedIn in 2026 aren't writing more —
              they're <em>repurposing smarter.</em> One long-form post becomes a carousel,
              a voice clip, a short video, and a Twitter thread. AI makes that entire
              pipeline take <em>under an hour.</em>"
            </p>
            <footer className="btc-quote-attr">
              — Content strategy principle, repeated across top creator communities in 2025–26
            </footer>
          </blockquote>
        </div>

        {/* ── Use cases ── */}
        <section className="btc-section" aria-labelledby="usecase-heading">
          <div className="btc-section-eyebrow">Who This Is For</div>
          <h2 className="btc-section-title" id="usecase-heading">
            Every Type of Blog Content<br />Has a Carousel Waiting Inside It
          </h2>
          <p className="btc-section-sub">
            Here's how different creators and teams are using the Blog to Carousel AI Generator
            right now — and the specific slide structures that work best for each format.
          </p>

          <div className="btc-usecase-grid">
            {[
              {
                emoji: "💼",
                title: "B2B & SaaS Founders",
                body: "Turn product update blog posts, case studies, and thought leadership articles into LinkedIn carousels that build personal brand authority. Works especially well for 'lessons learned', 'we grew X% by doing Y', or 'the 5 mistakes we made' posts.",
                tip: "💡 Use Grok Aurora or GPT Image 1 for cinematic, professional visuals that match enterprise aesthetics.",
              },
              {
                emoji: "📣",
                title: "Content Marketers & Growth Teams",
                body: "Repurpose evergreen SEO blog posts into carousel series. A single '10 tips' blog post becomes 3 carousels (3 tips per carousel), each posted one week apart — tripling the content output from one research effort.",
                tip: "💡 Use the Shared Reference Image feature to maintain visual consistency across a carousel series.",
              },
              {
                emoji: "🎓",
                title: "Educators & Course Creators",
                body: "Convert lesson summaries, study guides, and tutorial blog posts into visual learning carousels. Each slide covers one concept. Use Portrait (9:16) format to create mobile-first educational content that performs well on both Instagram and LinkedIn.",
                tip: "💡 Imagen 4 Standard delivers the sharpest text-readable visuals — ideal for educational content.",
              },
              {
                emoji: "🛍️",
                title: "E-commerce & Product Brands",
                body: "Transform product feature blog posts, buyer's guides, and comparison articles into shoppable carousel content. Each slide highlights one feature or product comparison, driving swipe-through engagement that outperforms single product images.",
                tip: "💡 Image-to-Image mode lets you start from your actual product photo and apply stylistic transformations.",
              },
              {
                emoji: "🎙️",
                title: "Podcasters & Newsletter Writers",
                body: "Turn episode show notes or newsletter issues into visual carousels. Each key quote, insight, or guest takeaway becomes a slide. This is the fastest way for written content creators to build a visual presence on Instagram without a separate shoot.",
                tip: "💡 FLUX 1.1 Pro produces the most editorial, print-magazine aesthetic — great for newsletter brands.",
              },
              {
                emoji: "🧑‍💻",
                title: "Developer Advocates & Technical Bloggers",
                body: "Convert technical blog posts into visual explainer carousels — architecture diagrams reinterpreted as AI art, concept illustrations, and workflow visualizations. Makes complex DevRel content shareable on Twitter/X and LinkedIn simultaneously.",
                tip: "💡 Use 'digital art' or 'sci-fi' style presets for technical content — they signal both depth and creativity.",
              },
            ].map((u) => (
              <article className="btc-usecase-card" key={u.title}>
                <span className="btc-usecase-emoji">{u.emoji}</span>
                <h3>{u.title}</h3>
                <p>{u.body}</p>
                <div className="btc-usecase-tip">{u.tip}</div>
              </article>
            ))}
          </div>

          {/* Platform badges */}
          <div>
            <p style={{ fontSize: 13, color: "var(--btc-text-3)", marginTop: 36, marginBottom: 16, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Works for every platform
            </p>
            <div className="btc-platform-row">
              {[
                { icon: "💼", name: "LinkedIn Carousel Posts" },
                { icon: "📸", name: "Instagram Carousels" },
                { icon: "🐦", name: "Twitter/X Thread Images" },
                { icon: "📱", name: "Instagram Stories" },
                { icon: "📘", name: "Facebook Slideshows" },
                { icon: "🔖", name: "Pinterest Image Pins" },
                { icon: "🎞️", name: "Medium & Substack Headers" },
                { icon: "📊", name: "Presentation Decks" },
              ].map((p) => (
                <span className="btc-platform-badge" key={p.name}>
                  <span aria-hidden="true">{p.icon}</span>
                  {p.name}
                </span>
              ))}
            </div>
          </div>
        </section>

        <div className="btc-divider" />

        {/* ── Blog vs Carousel comparison ── */}
        <section className="btc-section" aria-labelledby="compare-heading">
          <div className="btc-section-eyebrow">The Repurposing Gap</div>
          <h2 className="btc-section-title" id="compare-heading">
            Publishing a Blog and <em style={{ fontStyle: "normal", color: "var(--btc-violet)" }}>Never</em> Repurposing It<br />is Leaving 90% of Its Value Behind
          </h2>
          <p className="btc-section-sub">
            Here's what the data shows about blog-only vs. blog-plus-carousel distribution strategies in 2026.
          </p>

          <div className="btc-compare">
            <div className="btc-compare-col bad">
              <h3>❌ Blog Post Only</h3>
              <ul>
                <li>Average organic reach: 200–500 readers per post</li>
                <li>Content lifespan: 24–72 hours of social visibility</li>
                <li>Discovery limited to search engine rankings (months to build)</li>
                <li>No social proof loop — no shares, no saves, no follows</li>
                <li>Invisible to 3.2B users on Instagram and LinkedIn who rarely click outbound links</li>
                <li>ROI on research and writing: partial at best</li>
                <li>You need a separate designer or Canva workflow to make it visual</li>
              </ul>
            </div>
            <div className="btc-compare-col good">
              <h3>✅ Blog + AI Carousel Strategy</h3>
              <ul>
                <li>Carousel reach: 1,000–20,000+ impressions per post (organic)</li>
                <li>Content lifespan: 30–90 days via Saves, Shares, Explore</li>
                <li>Multi-platform distribution — LinkedIn, Instagram, Twitter, Pinterest</li>
                <li>Algorithmic amplification from swipe interactions and saves</li>
                <li>Each slide can go viral independently as a single shared image</li>
                <li>Full ROI on your research — same content, 3× the output</li>
                <li>AI generates all visuals in 20 seconds — no Canva, no designer</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── Second CTA block ── */}
        <div className="btc-section" style={{ paddingTop: 0, paddingBottom: 72 }}>
          <div className="btc-cta-block">
            <div className="btc-cta-block-eyebrow">🎠 Try It Right Now — It's Free</div>
            <h2 className="btc-cta-block-title">
              Pick Any Blog Post You've<br />
              Already Published. Go.
            </h2>
            <p className="btc-cta-block-sub">
              You don't need a new idea. You need to extract more from what you've already written.
              Open the Carousel Generator, paste your slide prompts, and see AI visuals appear
              in real time — one slide at a time.
            </p>
            <a
              href={UTM_HREF}
              className="btc-cta-block-btn"
              aria-label="Open Scenith carousel generator — free"
            >
              <span>🚀</span>
              Start Generating — It's Free
              <span>→</span>
            </a>
            <p className="btc-cta-block-badge">
              Uses Scenith's AI Studio · Switch between Voice, Image & Video on the same page
            </p>
          </div>
        </div>

        {/* ── Pro tips ── */}
        <section className="btc-section" aria-labelledby="tips-heading">
          <div className="btc-section-eyebrow">Carousel Mastery</div>
          <h2 className="btc-section-title" id="tips-heading">
            10 Things the Best Carousel Creators<br />Do Differently (and AI Can Help With All of Them)
          </h2>
          <p className="btc-section-sub">
            After analyzing thousands of high-performing carousels across LinkedIn and Instagram,
            these are the patterns that separate forgettable slides from content that gets saved and shared.
          </p>

          <div className="btc-tips-grid">
            {[
              {
                n: "01",
                title: "Slide 1 is a billboard, not an introduction",
                body: "Your first slide must stop the scroll in under 0.3 seconds. Use a bold visual, a contrasting color, a number, or a counterintuitive statement. Don't introduce yourself — make a claim. The AI visual should be striking and immediate.",
              },
              {
                n: "02",
                title: "Every slide must work as a standalone image",
                body: "The best carousel slides go viral as individual shares. Design each slide so it communicates one complete idea without needing the others. A viewer who sees Slide 3 in their feed should want to find Slides 1 and 2.",
              },
              {
                n: "03",
                title: "Use visual continuity across slides",
                body: "Run the same AI style preset and color palette across all 3 slides. Use the Shared Reference Image feature in Scenith to anchor all slides to the same visual identity. Visual consistency signals professionalism.",
              },
              {
                n: "04",
                title: "Write your caption before you design the slides",
                body: "The caption is your distribution copy. Write the hook, the first 2 lines (visible before 'see more'), and the CTA before you touch the generator. Then design slides that complement — not repeat — the caption.",
              },
              {
                n: "05",
                title: "The last slide is your highest-ROI real estate",
                body: "Carousel completion rate on LinkedIn averages around 40% — meaning the last slide is only seen by engaged readers. Use it as a CTA: follow, comment, visit, download. Generate a dedicated visual that frames this ask.",
              },
              {
                n: "06",
                title: "Use numbers and specificity obsessively",
                body: "'5 ways to...' outperforms 'how to...' because specificity signals value. When describing slide prompts to the AI, include specific contexts: 'a focused professional at a minimal desk at golden hour' is better than 'a person working'.",
              },
              {
                n: "07",
                title: "Match the visual style to your audience",
                body: "B2B LinkedIn audiences respond to clean, professional visuals (try GPT Image 1 Medium, standard quality). Instagram creative communities respond to artistic and cinematic styles (try FLUX 1.1 Pro or Grok Aurora). Test both on your account.",
              },
              {
                n: "08",
                title: "Repurpose the same carousel for multiple platforms without redesigning",
                body: "After generating in Square format for Instagram, switch to Portrait and regenerate for LinkedIn document posts and Stories. The AI adapts the composition automatically — you don't lose the visual identity.",
              },
              {
                n: "09",
                title: "Post at the moment your audience is most active — then engage for the first 30 minutes",
                body: "Algorithm amplification is highest when you earn early engagement. Set a calendar reminder to reply to every comment in the first 30 minutes after posting. This dramatically boosts distribution on both LinkedIn and Instagram.",
              },
              {
                n: "10",
                title: "Track saves, not just likes",
                body: "Saves (Bookmarks) are the only metric that definitively signals 'this content was useful enough to return to.' Build a monthly saves tracker to identify which blog topics convert best into carousel saves — then write more of those topics.",
              },
            ].map((tip) => (
              <article className="btc-tip-card" key={tip.n}>
                <div className="btc-tip-num">{tip.n}</div>
                <h3>{tip.title}</h3>
                <p>{tip.body}</p>
              </article>
            ))}
          </div>
        </section>

        <div className="btc-divider" />

        {/* ── AI Models ── */}
        <section className="btc-section" aria-labelledby="models-heading">
          <div className="btc-section-eyebrow">Powered By</div>
          <h2 className="btc-section-title" id="models-heading">
            7 State-of-the-Art AI Image Models —<br />Each with a Distinct Creative Signature
          </h2>
          <p className="btc-section-sub">
            The right AI model makes a dramatic difference to your carousel's look. Here's the honest breakdown
            of what each model is best for, so you can match the model to your content strategy.
          </p>

          <div className="btc-feature-grid">
            {[
              {
                icon: "🤖",
                title: "GPT Image 1 Mini & Medium (OpenAI)",
                body: "The most versatile models in the lineup. Mini is fast and credit-efficient; Medium delivers sharper detail, richer compositions, and more reliable prompt adherence. Both support Image-to-Image. Best for: product visuals, professional photography-style slides, portraits.",
              },
              {
                icon: "🌐",
                title: "Imagen 4 Fast & Standard (Google)",
                body: "Google's flagship image generation models. Fast mode delivers crisp, clean visuals at 10 credits — ideal for rapid iteration. Standard is the highest-detail option in the lineup, producing gallery-quality images with exceptional typography rendering. Best for: print-quality educational slides, data visualization art.",
              },
              {
                icon: "⚡",
                title: "FLUX 1.1 Pro (Black Forest Labs)",
                body: "The editorial powerhouse. FLUX produces images with a distinct, filmic aesthetic — high contrast, intentional grain, magazine-worthy composition. Less 'AI-looking' than other models. Best for: newsletter brands, thought leadership content, premium B2B carousels.",
              },
              {
                icon: "🌟",
                title: "Grok Aurora (xAI)",
                body: "xAI's Aurora model excels at photorealistic, cinematic compositions with natural lighting and atmospheric depth. Supports Image-to-Image. Best for: lifestyle brands, personal brands, high-end product carousels, travel and food content.",
              },
              {
                icon: "🎨",
                title: "Stability AI Core (Stability AI)",
                body: "The most artistically expressive model. Excellent for stylized, painterly, or illustrated aesthetics. Wide aspect ratio support (3:2, 2:3). Supports Image-to-Image. Best for: creative brands, gaming, illustration, concept art carousel content.",
              },
              {
                icon: "🍌",
                title: "Nano Banana Pro (2K & 4K)",
                body: "The resolution king. Choose 2K Premium (26 credits) for standard carousel use, or 4K Ultra (46 credits) for content that will be displayed at large scale — trade show screens, digital billboards, or high-DPI professional decks. Supports Image-to-Image.",
              },
            ].map((m) => (
              <article className="btc-feature-card" key={m.title}>
                <div className="btc-feature-icon">{m.icon}</div>
                <h3>{m.title}</h3>
                <p>{m.body}</p>
              </article>
            ))}
          </div>

          <div style={{ marginTop: 32 }}>
            <p style={{ fontSize: 13, color: "var(--btc-text-3)", marginBottom: 14, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}>
              All models available in Scenith's Carousel Generator
            </p>
            <div className="btc-models-row">
              {[
                "GPT Image 1 Mini", "GPT Image 1 Medium", "Imagen 4 Fast",
                "Imagen 4 Standard", "FLUX 1.1 Pro", "Grok Aurora",
                "Stability AI Core", "Nano Banana Pro 2K", "Nano Banana Pro 4K",
              ].map((m) => (
                <span className="btc-model-tag" key={m}>✦ {m}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ── Deep content: The anatomy of a perfect carousel ── */}
        <section className="btc-section" aria-labelledby="anatomy-heading">
          <div className="btc-section-eyebrow">Deep Dive</div>
          <h2 className="btc-section-title" id="anatomy-heading">
            The Anatomy of a Perfect<br />Blog-to-Carousel Conversion in 2026
          </h2>
          <p className="btc-section-sub">
            Most carousel guides talk about fonts and colors. This isn't that. This is the structural
            and strategic framework that determines whether your carousel earns 500 impressions or 50,000.
          </p>

          <div className="btc-feature-grid">
            {[
              {
                icon: "🧲",
                title: "The Hook Slide — Your #1 Variable",
                body: "Every percentage point of swipe-through rate traces back to Slide 1. The hook slide must (a) create a pattern interrupt visually, (b) surface a tension, curiosity gap, or counterintuitive claim, and (c) make the reader feel that not swiping is a cost. AI-generated images that are cinematic, dramatic, or surprising outperform generic stock-photo-style visuals by 3–5× on initial saves.",
              },
              {
                icon: "📐",
                title: "Slide Structure: The Rule of Threes",
                body: "Three slides is the engagement-maximizing format in 2026. It's long enough to build a narrative arc (Hook → Substance → CTA), short enough to retain 85%+ completion rate, and exactly the right count for the human working memory load. Four or more slides should only be used when each one has undeniable standalone value.",
              },
              {
                icon: "🎨",
                title: "AI Art Direction: Prompting for Carousel Coherence",
                body: "When prompting AI for carousel slides, establish a visual identity in the first slide prompt and replicate its key elements in subsequent slides. Include: lighting direction (golden hour, studio, cinematic), color temperature (warm, cool, neutral), composition style (close-up, wide shot, overhead), and mood (professional, playful, urgent). Scenith's Shared Image feature takes this further by anchoring all slides to a reference visual.",
              },
              {
                icon: "📝",
                title: "Text Overlay Strategy (Without Canva)",
                body: "Most creators layer text onto carousel images in Canva or Figma. A faster workflow: use your AI-generated images as visual context cards and write the actual text in the LinkedIn document post or Instagram caption. This lets the visuals breathe while your written narrative does the persuasive work. Alternatively, prompt the AI to generate images with intentional negative space where text will be overlaid.",
              },
              {
                icon: "🔁",
                title: "The Content Repurposing Flywheel",
                body: "Blog post → LinkedIn carousel (3 slides) → Instagram carousel (same images, portrait crop) → Twitter/X thread (each slide image as a tweet visual) → Pinterest pins (each slide) → Newsletter embed (Slide 1 as hero image). That's one piece of AI-generated content used across six distribution channels. This is the repurposing flywheel — and it's what separates creators with 1,000 followers from those with 100,000.",
              },
              {
                icon: "📊",
                title: "Measuring Carousel ROI Beyond Vanity Metrics",
                body: "Track four metrics: Saves Rate (saves ÷ reach), Swipe-Through Rate (viewers who reach Slide 3 ÷ total viewers), Profile Visit Rate (profile visits from post ÷ impressions), and Link Click Rate if you include one. These four metrics tell you which blog topics produce the highest-converting carousel content — and that insight is worth more than any individual viral post.",
              },
            ].map((f) => (
              <article className="btc-feature-card" key={f.title}>
                <div className="btc-feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ── Third CTA ── */}
        <div className="btc-section" style={{ paddingTop: 0 }}>
          <div className="btc-cta-block">
            <div className="btc-cta-block-eyebrow">✦ One Tool, All Three Content Types</div>
            <h2 className="btc-cta-block-title">
              While You're Here —<br />
              Generate Voice & Video Too
            </h2>
            <p className="btc-cta-block-sub">
              Scenith's AI Studio isn't just a carousel generator. The same platform generates
              professional voiceovers (for YouTube, ads, e-learning), AI images, and cinematic
              AI videos from text — all in one tab, one credit balance, one login.
            </p>
            <a
              href={UTM_HREF}
              className="btc-cta-block-btn"
              aria-label="Open Scenith AI Studio — voice, image, video, carousel"
            >
              <span>🎨</span>
              Open Scenith AI Studio Free
              <span>→</span>
            </a>
            <p className="btc-cta-block-badge">
              🎙️ Voice · 🖼️ Image · 🎠 Carousel · 🎬 Video — all in one place
            </p>
          </div>
        </div>

        {/* ── FAQ ── */}
        <section className="btc-section" aria-labelledby="faq-heading">
          <div className="btc-section-eyebrow">FAQ</div>
          <h2 className="btc-section-title" id="faq-heading">
            Everything You Need to Know About<br />
            AI Blog-to-Carousel Generation
          </h2>

          <div className="btc-faq" role="list">
            {[
              {
                q: "How do I convert a blog post to a LinkedIn carousel using Scenith?",
                a: (
                  <>
                    Go to{" "}
                    <a href={UTM_HREF}>
                      Scenith's AI Content Studio
                    </a>
                    , click the <strong>Image</strong> tab, then select the <strong>🎠 Carousel</strong> mode.
                    Enter a visual prompt for each of your 3 slides — these should describe the image you want
                    generated for each blog section. Choose your AI model, pick the aspect ratio (Square for
                    Instagram, Portrait 9:16 for LinkedIn Document posts), and hit Generate. Download each
                    slide as a PNG, upload them as a LinkedIn document post or Instagram carousel, and write
                    your caption with a strong hook.
                  </>
                ),
              },
              {
                q: "Can I use my own brand images as references for the carousel slides?",
                a: "Yes — use the 'Use same reference image for all slides' option to upload one brand visual that anchors all 3 slides stylistically. Or upload individual reference images per slide using the per-slide image upload. The AI transforms your reference image according to your prompt while preserving its structural composition and color language.",
              },
              {
                q: "How many credits does a carousel cost on Scenith?",
                a: (
                  <>
                    Credit cost per slide depends on the AI model and quality setting:{" "}
                    <span className="btc-hl">Imagen 4 Fast: 10cr/slide</span>,{" "}
                    <span className="btc-hl">Stability AI Core: 15cr/slide</span>,{" "}
                    <span className="btc-hl">Nano Banana Pro 2K: 26cr/slide</span>,{" "}
                    <span className="btc-hl">Grok Aurora: 14cr/slide</span>.
                    A 3-slide carousel using Imagen 4 Fast costs 30 credits total.
                    Free users start with 50 credits — enough for at least one full carousel.
                    Paid plans from $9/month include 300 credits (10 full carousels per month).
                  </>
                ),
              },
              {
                q: "What's the difference between Text-to-Image and Image-to-Image for carousels?",
                a: "Text-to-Image generates a completely new visual from your text prompt — best when you don't have existing brand imagery. Image-to-Image takes a reference image you upload and transforms or reimagines it according to your prompt — best when you want visual consistency with existing brand photography, product shots, or a specific aesthetic reference. For carousel series, Image-to-Image with a single brand image produces the most cohesive results.",
              },
              {
                q: "Does Scenith put a watermark on generated carousel images?",
                a: "No. All images generated on Scenith are watermark-free, regardless of whether you're on the free or paid plan. You have full commercial rights to use them on social media, in ads, client work, or any other commercial purpose.",
              },
              {
                q: "What aspect ratio should I use for Instagram vs. LinkedIn carousels?",
                a: "For Instagram feed carousels: Square (1:1) is the standard — it takes up the most screen real estate in the feed. For Instagram Stories-style or document posts: Portrait (9:16). For LinkedIn document posts (the carousel format): Portrait (9:16) or Square both work well. For Twitter/X visual threads: Landscape (16:9) is most native. Scenith lets you switch aspect ratios freely within the carousel generator.",
              },
              {
                q: "Can I animate carousel slides into a video after generating them?",
                a: (
                  <>
                    Yes — after generating a carousel slide, click <strong>'🎬 Animate Slide'</strong> to
                    pass that image directly into Scenith's Video Generator as a reference frame. The AI
                    animates the still image into a 5–10 second video clip using Kling, Veo, Wan 2.5, or
                    Grok Imagine. This turns your carousel into a short-form video without any additional
                    filming or editing.
                  </>
                ),
              },
              {
                q: "How long does it take to generate a 3-slide AI carousel?",
                a: "Each slide is generated sequentially and typically completes in 15–35 seconds depending on the model. A full 3-slide carousel using Imagen 4 Fast takes approximately 45–90 seconds total. Nano Banana Pro 4K may take up to 2 minutes per slide due to the extreme resolution processing. You can watch each slide appear in real time without leaving the page.",
              },
              {
                q: "Is the Scenith Blog to Carousel AI Generator free?",
                a: "Yes — sign up at Scenith for free (no credit card required) and receive 50 AI credits immediately. The carousel generator is included in the free plan. Paid plans start at $9/month with 300 credits and access to all AI models including Nano Banana Pro 4K and Grok Aurora.",
              },
              {
                q: "Can I repurpose the same carousel images for Pinterest and other platforms?",
                a: "Absolutely. After downloading your PNG files, you can use them on any platform. For Pinterest, Square and Portrait images both perform well as standard pins. For Twitter/X, crop to 16:9 or use the original Square format. For Facebook, Square images are recommended for the carousel ad format. Scenith's high-resolution output (2K/4K) ensures images look sharp at any display size.",
              },
              {
                q: "What makes Scenith different from Canva's AI features for carousel creation?",
                a: "Canva's AI tools are design-assistance features inside a manual design workflow — you still need to layout each slide, choose fonts, and manage template structures. Scenith generates the entire visual from a single text prompt — no layout work, no template constraints. You describe what you want, the AI builds it. The tradeoff: Scenith doesn't handle text overlay within the image (you add captions in the platform natively), whereas Canva lets you control typography within the design. For pure visual generation speed, Scenith is significantly faster.",
              },
            ].map((faq, i) => (
              <details className="btc-faq" key={i} role="listitem">
                <summary>{faq.q}</summary>
                <div className="btc-faq-answer">{faq.a}</div>
              </details>
            ))}
          </div>
        </section>

        {/* ── Related tools ── */}
        <section className="btc-section" style={{ paddingTop: 0 }} aria-labelledby="related-heading">
          <div className="btc-section-eyebrow">More AI Tools by Scenith</div>
          <h2 className="btc-section-title" id="related-heading">
            Your Blog Deserves a Full Content<br />Distribution Strategy — Not Just a Carousel
          </h2>
          <p className="btc-section-sub">
            Every blog post contains a voice recording, a short video, and a carousel. Scenith lets you
            generate all three from the same prompt, in the same tab, in under 10 minutes.
          </p>
          <div className="btc-feature-grid">
            {[
              {
                icon: "🎙️",
                title: "AI Voice Generator",
                body: "Convert your blog post intro or key section into a professional voiceover — 40+ voices, 20+ languages, Google/OpenAI/Azure engines. Use it as a podcast excerpt, a YouTube narration, or an audio embed on your blog itself.",
                href: "https://scenith.in/create-ai-content?tab=voice&utm_source=blog-to-carousel-tool&utm_medium=related-tools&utm_campaign=voice-upsell",
                cta: "Generate Voiceover →",
              },
              {
                icon: "🖼️",
                title: "AI Image Generator",
                body: "Generate single high-resolution AI images for your blog headers, Twitter Open Graph images, and LinkedIn post thumbnails. Access 7 models including GPT Image 1, Imagen 4, FLUX, and Grok Aurora.",
                href: "https://scenith.in/create-ai-content?tab=image&utm_source=blog-to-carousel-tool&utm_medium=related-tools&utm_campaign=image-upsell",
                cta: "Generate Blog Header →",
              },
              {
                icon: "🎬",
                title: "AI Video Generator",
                body: "Turn your carousel's best slide into a 5–10 second cinematic AI video for YouTube Shorts, Instagram Reels, and TikTok. Uses Kling 2.6 Pro, Veo 3.1, Wan 2.5, and Grok Imagine.",
                href: "https://scenith.in/create-ai-content?tab=video&utm_source=blog-to-carousel-tool&utm_medium=related-tools&utm_campaign=video-upsell",
                cta: "Generate Short Video →",
              },
            ].map((tool) => (
              <article className="btc-feature-card" key={tool.title}>
                <div className="btc-feature-icon">{tool.icon}</div>
                <h3>{tool.title}</h3>
                <p style={{ marginBottom: 20 }}>{tool.body}</p>
                <a
                  href={tool.href}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    color: "var(--btc-violet)",
                    fontWeight: 700,
                    fontSize: 13,
                    textDecoration: "none",
                  }}
                >
                  {tool.cta}
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* ── Final CTA ── */}
        <div className="btc-section" style={{ paddingTop: 0, paddingBottom: 80 }}>
          <div className="btc-cta-block">
            <div className="btc-cta-block-eyebrow">✦ Built for Creators Who Think in Leverage</div>
            <h2 className="btc-cta-block-title">
              Same Blog. Seven Platforms.<br />
              One AI. Zero Extra Hours.
            </h2>
            <p className="btc-cta-block-sub">
              Join thousands of content creators, marketers, and founders using Scenith to extract
              maximum reach from every piece of content they write. Start free — 50 credits,
              no card, no commitment.
            </p>
            <a
              href={UTM_HREF}
              className="btc-cta-block-btn"
              aria-label="Start generating AI carousels for free on Scenith"
            >
              <span>🎠</span>
              Generate My First Carousel Free
              <span>→</span>
            </a>
            <p className="btc-cta-block-badge">
              Scenith · AI Studio · Voice + Image + Video + Carousel · from $9/mo
            </p>
          </div>
        </div>

        {/* ── Footer ── */}
        <footer className="btc-footer" role="contentinfo">
          <a href="https://scenith.in" className="btc-footer-logo">
            SCEN<span>I</span>TH
          </a>
          <div className="btc-footer-links">
            <a href="https://scenith.in/create-ai-content">AI Studio</a>
            <a href="https://scenith.in/tools">All Tools</a>
            <a href="https://scenith.in/pricing">Pricing</a>
            <a href="https://scenith.in/privacy">Privacy</a>
            <a href="https://scenith.in/terms">Terms</a>
          </div>
          <span className="btc-footer-copy">
            © {new Date().getFullYear()} Scenith. All rights reserved.
          </span>
        </footer>

      </div>
    </>
  );
}