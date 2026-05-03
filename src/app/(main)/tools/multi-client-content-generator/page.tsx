// app/tools/multi-client-content-generator/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import "./multi-client-content-generator.css";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Multi‑Client Content Generator for Agencies | Scenith 2026",
  description:
    "Stop juggling 10 different tools. Generate voiceovers, images, and videos for all your clients from one dashboard. Used by 500+ agencies to scale content production without hiring more people.",
  keywords: [
    "multi-client content generator",
    "agency content automation tool",
    "bulk content generation for agencies",
    "ai content generator for multiple clients",
    "scale agency content production",
    "ai voice generator agencies",
    "ai image generator agency workflow",
    "ai video generation for client work",
    "scenith agency tools",
    "freelance content generation platform",
  ],
  openGraph: {
    title: "Multi‑Client Content Generator — Scale Your Agency in 2026",
    description:
      "One dashboard. All your clients. AI voice, image, and video generation at scale. Stop switching between tools — start delivering 10x faster.",
    url: "https://scenith.in/tools/multi-client-content-generator",
    siteName: "Scenith",
    type: "website",
    images: [
      {
        url: "https://cdn.scenith.in/og/multi-client-content-generator-og.jpg",
        width: 1200,
        height: 630,
        alt: "Scenith Multi-Client Content Generator Dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Multi‑Client Content Generator for Agencies | Scenith",
    description:
      "Generate voice, image, and video content for all your clients in one place. Bulk workflows, team seats, and full commercial rights.",
    images: ["https://cdn.scenith.in/og/multi-client-content-generator-twitter.jpg"],
  },
  alternates: {
    canonical: "https://scenith.in/tools/multi-client-content-generator",
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

// ─── Structured Data ──────────────────────────────────────────────────────────

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://scenith.in/tools/multi-client-content-generator",
      url: "https://scenith.in/tools/multi-client-content-generator",
      name: "Multi‑Client Content Generator for Agencies | Scenith",
      description:
        "Professional AI content generation platform designed for agencies managing multiple client accounts. Voice, image, and video generation at scale.",
      isPartOf: { "@id": "https://scenith.in" },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://scenith.in" },
          { "@type": "ListItem", position: 2, name: "Tools", item: "https://scenith.in/tools" },
          {
            "@type": "ListItem",
            position: 3,
            name: "Multi‑Client Content Generator",
            item: "https://scenith.in/tools/multi-client-content-generator",
          },
        ],
      },
    },
    {
      "@type": "SoftwareApplication",
      name: "Scenith Multi‑Client Content Suite",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: "https://scenith.in/create-ai-content?utm_source=multi-client-tool&utm_medium=seo-page&utm_campaign=mcc-generator&utm_content=hero-cta",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Free to start with 50 credits. Agency plans from $49/month.",
      },
      featureList: [
        "Multi‑client dashboard with project separation",
        "Team seats with role-based permissions",
        "Bulk voiceover generation (CSV upload)",
        "Batch image generation with style presets",
        "6+ AI video models (Kling, Veo, Wan 2.5, Grok, Luma, Hailuo)",
        "Per‑client usage tracking and analytics",
        "White‑label export options (Enterprise)",
        "Full commercial rights for all client work",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Can I generate content for multiple clients under one account?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Scenith is built for agencies. You can create separate projects for each client, track usage per project, assign team members to specific clients, and export assets without Scenith branding (on Enterprise plans). All under one login, one subscription, one credit pool.",
          },
        },
        {
          "@type": "Question",
          name: "How does the bulk generation feature work for agencies?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Upload a CSV file with client names, scripts, and voice preferences. Scenith generates voiceovers for all clients in a single batch. Download everything as a ZIP folder. Same for images and videos — perfect for agencies producing weekly content packages for 10+ clients simultaneously.",
          },
        },
        {
          "@type": "Question",
          name: "Does Scenith offer team accounts?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Agency plans include 5 team seats with role-based permissions. You can assign writers, designers, and editors to specific client projects, track their usage, and maintain a shared credit pool. Additional seats available at $10/seat/month.",
          },
        },
        {
          "@type": "Question",
          name: "Can I use Scenith-generated content for client commercial projects?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Every voiceover, image, and video generated on Scenith comes with full commercial rights. You can deliver them to paying clients, use them in ads, embed in client websites — no attribution required. The only restriction is reselling the generation service itself.",
          },
        },
        {
          "@type": "Question",
          name: "How much does the agency plan cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Scenith offers a free tier with 50 credits — enough to test the workflow. The Creator Lite plan is $9/month (300 credits). The Agency plan is $49/month (1500 credits, 5 team seats, analytics, priority support). Enterprise plans with white‑labeling and custom quotas available.",
          },
        },
      ],
    },
    {
      "@type": "Product",
      name: "Scenith Agency Content Platform",
      brand: { "@type": "Brand", name: "Scenith" },
      description: "All-in-one AI content generation suite for agencies: voice, image, and video at scale.",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        ratingCount: "847",
        bestRating: "5",
        worstRating: "1",
      },
    },
  ],
};

// ─── Content Data ─────────────────────────────────────────────────────────────

const CLIENT_VERTICALS = [
  {
    icon: "🛍️",
    title: "E‑Commerce Brands",
    useCases: ["Product description voiceovers", "Social media ad videos", "Lifestyle images for listings"],
    output: "50+ assets/month",
    profitMargin: "85%",
  },
  {
    icon: "📚",
    title: "EdTech & Coaching",
    useCases: ["Course narration (bilingual)", "Lesson thumbnail images", "Explainershort videos"],
    output: "100+ assets/month",
    profitMargin: "78%",
  },
  {
    icon: "🏥",
    title: "Healthcare & Wellness",
    useCases: ["Patient education voiceovers", "Yoga/meditation guide videos", "Wellness social content"],
    output: "40+ assets/month",
    profitMargin: "82%",
  },
  {
    icon: "🎮",
    title: "Gaming & Esports",
    useCases: ["Game trailer voiceovers", "Character concept images", "Match highlight videos"],
    output: "60+ assets/month",
    profitMargin: "75%",
  },
  {
    icon: "🏢",
    title: "Real Estate",
    useCases: ["Property walkthrough voiceovers", "Virtual staging images", "Neighborhood highlight videos"],
    output: "30+ assets/month",
    profitMargin: "88%",
  },
  {
    icon: "🍽️",
    title: "Food & Hospitality",
    useCases: ["Menu narration voiceovers", "Dish photography images", "Kitchen process videos"],
    output: "45+ assets/month",
    profitMargin: "80%",
  },
];

const FEATURES = [
  {
    icon: "👥",
    title: "Multi‑Client Dashboard",
    description:
      "Create separate workspaces for each client. Keep projects, assets, and prompts organized by client. No more cross‑client confusion or lost files.",
  },
  {
    icon: "📦",
    title: "Bulk Generation Engine",
    description:
      "Upload a CSV with 50 client scripts → receive 50 voiceovers in one batch. Generate images for an entire product catalog. Produce video variations for A/B testing.",
  },
  {
    icon: "🔄",
    title: "Prompt Templates Library",
    description:
      "Save successful prompts per client. Use them across campaigns. Maintain consistent brand voice across months of content without rewriting from scratch.",
  },
  {
    icon: "📊",
    title: "Usage Analytics",
    description:
      "Track credits used per client, per project, per asset type. Know exactly how much each client costs you. Data you need to price profitably.",
  },
  {
    icon: "👨‍👩‍👧‍👦",
    title: "Team Permissions",
    description:
      "Assign writers, designers, and editors to specific client projects. Set credit limits per team member. Maintain control while scaling your team.",
  },
  {
    icon: "🏷️",
    title: "White‑Label Exports",
    description:
      "Remove Scenith branding from all deliverables. Your clients see only your agency's name. Available on Enterprise plans.",
  },
];

const WORKFLOW_STEPS = [
  {
    step: "1",
    title: "Create Client Workspace",
    description:
      "Set up a dedicated project for each client. Add their brand voice preferences, image style preferences, and any existing assets you'll reuse.",
    time: "5 min per client",
  },
  {
    step: "2",
    title: "Build Reusable Templates",
    description:
      "For each client, save 5–10 prompt templates for their most common asset types: voiceovers, thumbnails, explainer videos, etc.",
    time: "30 min setup",
  },
  {
    step: "3",
    title: "Generate in Bulk",
    description:
      "Use the bulk generation features to produce weekly content packages for all clients simultaneously. Generate, review, deliver.",
    time: "2–4 hours/week",
  },
  {
    step: "4",
    title: "Track & Optimize",
    description:
      "Review usage analytics per client. Identify which asset types consume the most credits. Adjust your pricing and workflows accordingly.",
    time: "Ongoing",
  },
];

const TESTIMONIALS = [
  {
    name: "Anjali Mehta",
    role: "Founder, ContentScale (12‑person agency)",
    quote:
      "We were supporting 18 clients using 7 different tools: Canva for images, Descript for voice, CapCut for video. Scenith replaced all of them. Our content output doubled, our tooling cost dropped 60%, and we added 8 new clients without hiring. The multi‑client dashboard is a game‑changer.",
  },
  {
    name: "Rahul Verma",
    role: "YouTube Management Agency",
    quote:
      "We manage 22 faceless YouTube channels. Each channel needs 3 videos weekly — that's 66 voiceovers, 66 thumbnail images, and 66 videos every 7 days. Scenith's bulk generation is the only reason this is possible. We went from 5 to 22 channels in 6 months.",
  },
  {
    name: "Priya Nair",
    role: "Freelance Content Strategist",
    quote:
      "I serve 9 e‑commerce clients, each needing 30–50 product videos quarterly. Before Scenith, I outsourced to animators — ₹5,000–₹10,000 per video. Now I generate them myself at ₹150–₹300 per video. My profit per client tripled.",
  },
];

const PRICING_TIERS = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    credits: "50",
    teamSeats: "1",
    features: [
      "Access to Stability AI Core (images)",
      "Google TTS voices (20 languages)",
      "Wan 2.5 & basic video models",
      "Basic project organization",
      "Commercial rights included",
    ],
    ctaText: "Start Free",
    ctaVariant: "secondary",
  },
  {
    name: "Creator Lite",
    price: "$9",
    period: "month",
    credits: "300",
    teamSeats: "1",
    features: [
      "All 7 image models (GPT, Imagen 4, FLUX)",
      "All 40+ TTS voices (Google, OpenAI, Azure)",
      "All 6 video models (Kling, Veo, Wan 2.5, Grok, Luma, Hailuo)",
      "Bulk generation (CSV upload)",
      "API access",
      "Priority email support",
    ],
    ctaText: "Get Creator Lite",
    ctaVariant: "primary",
    popular: true,
  },
  {
    name: "Agency",
    price: "$49",
    period: "month",
    credits: "1500",
    teamSeats: "5",
    features: [
      "Everything in Creator Lite",
      "5 team seats included",
      "Per‑client usage analytics",
      "Advanced role permissions",
      "Project templates library",
      "Dedicated account manager",
      "SLA-backed support",
    ],
    ctaText: "Talk to Sales",
    ctaVariant: "secondary",
  },
];

const FAQ_ITEMS = [
  {
    q: "How do I organize content for different clients?",
    a: "Scenith's project-based workspace lets you create separate folders for each client. Each project has its own asset library, prompt history, and usage tracking. You can also assign team members to specific clients, ensuring that freelancers only see the projects they're working on.",
  },
  {
    q: "Can I generate content for 50 clients at once?",
    a: "Yes. The bulk generation feature accepts CSV uploads with up to 500 rows. Each row can specify client name, script, voice preference, and output format. Scenith processes the entire batch in sequence. You'll receive a downloadable ZIP file with all assets organized by client folder.",
  },
  {
    q: "What file formats do I get for client deliverables?",
    a: "Voice: MP3 (128–320kbps). Images: PNG (up to 4K resolution). Videos: MP4 (up to 1080p, 10 seconds). All files are ready for client delivery — no conversion needed. Enterprise plans offer custom resolution options and batch renaming.",
  },
  {
    q: "Can my team collaborate on client projects?",
    a: "Agency plans include 5 team seats with role-based permissions. Admins can assign team members to specific client projects, set individual credit limits, and review all generated assets. Additional seats cost $10/month each.",
  },
  {
    q: "How do I track profitability per client?",
    a: "The analytics dashboard shows credits used per client, per asset type, per time period. You'll see exactly how many voiceover seconds, image generations, and video seconds each client consumed. Compare that against your retainer fee to calculate real margins.",
  },
  {
    q: "Is there a limit on how many clients I can serve?",
    a: "No. Scenith doesn't charge per client. The only limits are your monthly credit allowance and team seat count. Upgrade to a higher plan if you need more volume. Enterprise customers get custom credit pools for unlimited clients.",
  },
  {
    q: "Does Scenith offer white‑labeling for client deliverables?",
    a: "Yes, on Enterprise plans. You can remove all Scenith branding from generated assets, customize the export file naming convention, and optionally deliver through a branded subdomain. Contact our sales team for white‑label pricing.",
  },
  {
    q: "What happens if I exceed my monthly credits?",
    a: "You can purchase credit top‑ups directly from your dashboard — $5 for 50 credits, $10 for 110 credits, $20 for 250 credits. Unused credits roll over for 30 days on paid plans. Free tier credits expire at the end of each month.",
  },
];

// ─── Page Component ───────────────────────────────────────────────────────────

export default function MultiClientContentGeneratorPage() {
  const CTA_URL =
    "https://scenith.in/create-ai-content?utm_source=multi-client-tool&utm_medium=seo-page&utm_campaign=mcc-generator&utm_content=hero-cta";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="mcc-page">
        {/* ── HERO SECTION ─────────────────────────────────────────────────── */}
        <section className="mcc-hero">
          <nav className="mcc-breadcrumb" aria-label="Breadcrumb">
            <ol itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemScope itemType="https://schema.org/ListItem" itemProp="itemListElement">
                <Link href="/" itemProp="item"><span itemProp="name">Home</span></Link>
                <meta itemProp="position" content="1" />
              </li>
              <span className="mcc-bc-sep">›</span>
              <li itemScope itemType="https://schema.org/ListItem" itemProp="itemListElement">
                <Link href="/tools" itemProp="item"><span itemProp="name">Tools</span></Link>
                <meta itemProp="position" content="2" />
              </li>
              <span className="mcc-bc-sep">›</span>
              <li itemScope itemType="https://schema.org/ListItem" itemProp="itemListElement">
                <span itemProp="name">Multi‑Client Content Generator</span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </nav>

          <div className="mcc-hero-inner">
            <div className="mcc-badge-row">
              <span className="mcc-badge">✦ For Agencies & Content Teams</span>
              <span className="mcc-badge mcc-badge-alt">Bulk Generation</span>
              <span className="mcc-badge">Team Seats Included</span>
            </div>
            <h1 className="mcc-hero-h1">
              Multi‑Client Content Generator <span className="mcc-hero-accent">for Agencies</span>
              <span className="mcc-hero-h1-sub">Scale content production without scaling headcount</span>
            </h1>
            <p className="mcc-hero-desc">
              Stop juggling 10 different tools for 10 different clients. Scenith lets you generate
              voiceovers, images, and videos for <strong>all your clients from one dashboard</strong>.
              Used by 500+ agencies to deliver faster, increase margins, and win more retainers.
            </p>

            <div className="mcc-hero-stats">
              <div className="mcc-stat">
                <span className="mcc-stat-num">500+</span>
                <span className="mcc-stat-label">Agencies Trust Us</span>
              </div>
              <div className="mcc-stat-divider" />
              <div className="mcc-stat">
                <span className="mcc-stat-num">10x</span>
                <span className="mcc-stat-label">Faster Delivery</span>
              </div>
              <div className="mcc-stat-divider" />
              <div className="mcc-stat">
                <span className="mcc-stat-num">87%</span>
                <span className="mcc-stat-label">Avg Profit Margin</span>
              </div>
              <div className="mcc-stat-divider" />
              <div className="mcc-stat">
                <span className="mcc-stat-num">6+</span>
                <span className="mcc-stat-label">AI Models</span>
              </div>
            </div>

            {/* HUGE CTA BUTTON */}
            <Link href={CTA_URL} className="mcc-hero-cta">
              <span className="mcc-cta-spark">🚀</span>
              <span className="mcc-cta-text">
                <strong>Start Generating for All Your Clients — Free</strong>
                <small>50 free credits · No credit card · Full commercial rights</small>
              </span>
              <span className="mcc-cta-arrow">→</span>
            </Link>
          </div>
        </section>

        {/* ── MAIN CTA CARD (Huge CTA Button Section) ───────────────────────── */}
        <section className="mcc-main-cta-section">
          <div className="mcc-main-cta-card">
            <div className="mcc-main-cta-glow" />
            <div className="mcc-main-cta-content">
              <div className="mcc-main-cta-badge">⚡ Agency‑Grade AI Content Suite</div>
              <h2 className="mcc-main-cta-h2">
                One Dashboard. All Your Clients.
              </h2>
              <p className="mcc-main-cta-desc">
                Voice · Image · Video · Bulk generation · Team seats · Usage analytics
                Everything you need to scale your agency's content production.
              </p>
              <div className="mcc-feature-strip">
                <span>📦 CSV Bulk Upload</span>
                <span>👥 5 Team Seats</span>
                <span>📊 Client Analytics</span>
                <span>🏷️ White‑Label Ready</span>
              </div>
              <Link href={CTA_URL} className="mcc-main-cta-btn">
                <span>🚀 Start Scaling Your Agency — Free</span>
                <small>50 credits included · No card required · 6+ AI models</small>
              </Link>
              <p className="mcc-main-cta-note">
                Opens Scenith AI Studio — All features ready. UTM tracked.
              </p>
            </div>
          </div>
        </section>

        {/* ── CLIENT VERTICALS ──────────────────────────────────────────────── */}
        <section className="mcc-section">
          <div className="mcc-section-inner">
            <div className="mcc-section-label">Who Uses This</div>
            <h2 className="mcc-section-h2">Built for Agencies Serving Any Industry</h2>
            <p className="mcc-section-sub">
              Scenith's multi‑client workflows are used by agencies across 20+ verticals.
              Here's how six common agency types are scaling their content production.
            </p>

            <div className="mcc-verticals-grid">
              {CLIENT_VERTICALS.map((v, i) => (
                <div className="mcc-vertical-card" key={i}>
                  <span className="mcc-vertical-icon">{v.icon}</span>
                  <h3 className="mcc-vertical-title">{v.title}</h3>
                  <ul className="mcc-vertical-list">
                    {v.useCases.map((uc, j) => (
                      <li key={j}>{uc}</li>
                    ))}
                  </ul>
                  <div className="mcc-vertical-stats">
                    <span>📦 {v.output}</span>
                    <span>💰 {v.profitMargin} margin</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mcc-verticals-cta">
              <Link href={CTA_URL} className="mcc-inline-cta">
                Start Serving More Clients Today →
              </Link>
            </div>
          </div>
        </section>

        {/* ── FEATURES DEEP DIVE ────────────────────────────────────────────── */}
        <section className="mcc-section mcc-section-dark">
          <div className="mcc-section-inner">
            <div className="mcc-section-label">The Platform</div>
            <h2 className="mcc-section-h2">Everything You Need to Scale</h2>
            <p className="mcc-section-sub">
              From bulk generation to team permissions — Scenith is built from the ground up for agencies.
            </p>

            <div className="mcc-features-grid">
              {FEATURES.map((f, i) => (
                <div className="mcc-feature-card" key={i}>
                  <span className="mcc-feature-icon">{f.icon}</span>
                  <h3 className="mcc-feature-title">{f.title}</h3>
                  <p className="mcc-feature-desc">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WORKFLOW GUIDE ────────────────────────────────────────────────── */}
        <section className="mcc-section">
          <div className="mcc-section-inner">
            <div className="mcc-section-label">Implementation Guide</div>
            <h2 className="mcc-section-h2">From Setup to Scale in 4 Steps</h2>
            <p className="mcc-section-sub">
              How agencies transition from manual tools to AI‑powered multi‑client workflows.
            </p>

            <div className="mcc-workflow-steps">
              {WORKFLOW_STEPS.map((step, i) => (
                <div className="mcc-workflow-step" key={i}>
                  <div className="mcc-step-number">{step.step}</div>
                  <div className="mcc-step-content">
                    <h3 className="mcc-step-title">{step.title}</h3>
                    <p className="mcc-step-desc">{step.description}</p>
                    <span className="mcc-step-time">⏱️ {step.time}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mcc-workflow-tip">
              <span className="mcc-tip-icon">💡</span>
              <div>
                <strong>Agency Pro Tip:</strong> Start with your highest‑volume client.
                Migrate their content production to Scenith first. Once the workflow is proven,
                replicate it across your entire client roster. Most agencies complete this transition
                in 2–4 weeks and see ROI within the first month.
              </div>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ──────────────────────────────────────────────────── */}
        <section className="mcc-section mcc-section-tint">
          <div className="mcc-section-inner">
            <div className="mcc-section-label">Real Results</div>
            <h2 className="mcc-section-h2">How Agencies Are Scaling</h2>

            <div className="mcc-testimonials-grid">
              {TESTIMONIALS.map((t, i) => (
                <div className="mcc-testimonial-card" key={i}>
                  <div className="mcc-testimonial-quote">"{t.quote}"</div>
                  <div className="mcc-testimonial-author">
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRICING COMPARISON ────────────────────────────────────────────── */}
        <section className="mcc-section">
          <div className="mcc-section-inner">
            <div className="mcc-section-label">Pricing</div>
            <h2 className="mcc-section-h2">Plans That Grow With Your Agency</h2>
            <p className="mcc-section-sub">
              Free to start. Pay only when you need more volume or team features.
            </p>

            <div className="mcc-pricing-grid">
              {PRICING_TIERS.map((plan, i) => (
                <div className={`mcc-pricing-card ${plan.popular ? "mcc-popular" : ""}`} key={i}>
                  {plan.popular && <div className="mcc-popular-badge">Most Popular</div>}
                  <h3 className="mcc-pricing-name">{plan.name}</h3>
                  <div className="mcc-pricing-price">
                    <span className="mcc-price-amount">{plan.price}</span>
                    <span className="mcc-price-period">/{plan.period}</span>
                  </div>
                  <div className="mcc-pricing-credits">
                    <strong>{plan.credits}</strong> credits/month
                  </div>
                  <div className="mcc-pricing-seats">
                    👥 {plan.teamSeats} team seat{plan.teamSeats !== "1" ? "s" : ""}
                  </div>
                  <ul className="mcc-pricing-features">
                    {plan.features.map((f, j) => (
                      <li key={j}>✓ {f}</li>
                    ))}
                  </ul>
                  <Link
                    href={plan.name === "Agency" ? "/pricing" : CTA_URL}
                    className={`mcc-pricing-cta mcc-cta-${plan.ctaVariant}`}
                  >
                    {plan.ctaText} →
                  </Link>
                </div>
              ))}
            </div>

            <p className="mcc-pricing-note">
              * All plans include full commercial rights. Enterprise plans available for 10+ team members.
            </p>
          </div>
        </section>

        {/* ── SECOND MAIN CTA ────────────────────────────────────────────────── */}
        <section className="mcc-mid-cta-section">
          <div className="mcc-mid-cta-inner">
            <div className="mcc-mid-cta-badge">🚀 Limited Free Tier Available</div>
            <h2 className="mcc-mid-cta-h2">
              Ready to scale your agency's content production?
            </h2>
            <p className="mcc-mid-cta-sub">
              Join 500+ agencies already using Scenith to deliver faster, win more clients,
              and keep more margin. Start with 50 free credits — no risk, no credit card.
            </p>
            <Link href={CTA_URL} className="mcc-hero-cta mcc-mid-cta-btn">
              <span className="mcc-cta-spark">🚀</span>
              <span className="mcc-cta-text">
                <strong>Start Generating for All Your Clients — Free</strong>
                <small>50 free credits · No card required · Full commercial rights</small>
              </span>
              <span className="mcc-cta-arrow">→</span>
            </Link>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="mcc-section mcc-section-dark">
          <div className="mcc-section-inner">
            <div className="mcc-section-label">FAQ</div>
            <h2 className="mcc-section-h2">Frequently Asked Questions</h2>

            <div className="mcc-faq-list">
              {FAQ_ITEMS.map((item, i) => (
                <details className="mcc-faq-item" key={i}>
                  <summary className="mcc-faq-q">{item.q}</summary>
                  <p className="mcc-faq-a">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── RELATED TOOLS ── */}
        <section className="mcc-section mcc-section-tint">
          <div className="mcc-section-inner">
            <div className="mcc-section-label">Complete Your Toolkit</div>
            <h2 className="mcc-section-h2">More AI Tools for Your Agency</h2>
            <div className="mcc-related-grid">
              {[
                {
                  href: "https://scenith.in/tools/ai-content-scaling-tool-for-agencies",
                  icon: "⚡",
                  title: "AI Content Scaling Tool",
                  desc: "Bulk generation engine for agencies producing 1000+ monthly assets.",
                },
                {
                  href: "https://scenith.in/create-ai-content?tab=voice&utm_source=multi-client-tool&utm_medium=related&utm_campaign=mcc-generator",
                  icon: "🎙️",
                  title: "AI Voice Generator",
                  desc: "40+ voices, 20+ languages. Add narration to any client project.",
                },
                {
                  href: "https://scenith.in/create-ai-content?tab=image&utm_source=multi-client-tool&utm_medium=related&utm_campaign=mcc-generator",
                  icon: "🖼️",
                  title: "AI Image Generator",
                  desc: "7 models, 8 artistic styles. Generate visuals for any brand.",
                },
                {
                  href: "https://scenith.in/create-ai-content?tab=video&utm_source=multi-client-tool&utm_medium=related&utm_campaign=mcc-generator",
                  icon: "🎬",
                  title: "AI Video Generator",
                  desc: "6+ video models. Create client‑ready videos in 60 seconds.",
                },
              ].map((tool, i) => (
                <Link href={tool.href} className="mcc-related-card" key={i}>
                  <span className="mcc-related-icon">{tool.icon}</span>
                  <h3 className="mcc-related-title">{tool.title}</h3>
                  <p className="mcc-related-desc">{tool.desc}</p>
                  <span className="mcc-related-arrow">Explore →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL GIANT CTA ────────────────────────────────────────────────── */}
        <section className="mcc-final-cta">
          <div className="mcc-final-inner">
            <div className="mcc-final-bg" />
            <h2 className="mcc-final-h2">
              Stop managing 10 tools for 10 clients.
              <br />
              <span className="mcc-final-accent">Start using one dashboard.</span>
            </h2>
            <p className="mcc-final-sub">
              Scenith is the only platform you need to generate voice, image, and video content
              for every client you serve. Free to start. Scales with you.
            </p>
            <Link href={CTA_URL} className="mcc-hero-cta mcc-final-btn">
              <span className="mcc-cta-spark">🚀</span>
              <span className="mcc-cta-text">
                <strong>Start Generating for All Your Clients — Free</strong>
                <small>50 free credits · No credit card · Cancel anytime</small>
              </span>
              <span className="mcc-cta-arrow">→</span>
            </Link>
            <p className="mcc-final-note">
              Trusted by 500+ agencies · 4.9/5 from 847 reviews · Full commercial rights
            </p>
          </div>
        </section>
      </div>
    </>
  );
}