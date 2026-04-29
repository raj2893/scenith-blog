// app/tools/ai-ad-maker-for-clients/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import "./ai-ad-maker-for-clients.css";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────
// Optimized for "AI ad maker", "client ad generator", "AI commercial creator" in 2026

export const metadata: Metadata = {
  title: "AI Ad Maker for Clients — Generate Commercials & Campaign Creatives | Scenith",
  description:
    "The AI ad maker agencies and marketers use to produce client-ready commercials, social ads, and video campaigns. Generate voiceover, visual assets, and full ad concepts in minutes — not weeks. Free to start.",
  keywords: [
    "ai ad maker",
    "ai commercial generator",
    "client ad generator",
    "ai ad creator",
    "ai video ad maker",
    "ai advertisement generator",
    "ai campaign creator",
    "ai ad designer for agencies",
    "social media ad generator",
    "ai tv commercial creator",
    "marketing ai tool",
    "ai ad copy generator",
    "ai voiceover for ads",
    "ai ad asset generator",
    "commercial ai studio",
  ],
  openGraph: {
    title: "AI Ad Maker for Clients — Commercials & Campaign Creatives | Scenith",
    description:
      "The pro-grade AI ad studio for client work. Generate voiceovers, ad visuals, and full video commercials in one unified workflow. 50 free credits to start.",
    url: "https://scenith.in/tools/ai-ad-maker-for-clients",
    siteName: "Scenith",
    type: "website",
    images: [
      {
        url: "https://scenith.in/og/ai-ad-maker.jpg",
        width: 1200,
        height: 630,
        alt: "Scenith AI Ad Maker — Client-Ready Commercials",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Ad Maker for Clients — Generate Commercials & Campaigns",
    description: "The AI ad studio for client work. Voice, visuals, videos — all in one place. 50 free credits.",
    images: ["https://scenith.in/og/ai-ad-maker.jpg"],
  },
  alternates: {
    canonical: "https://scenith.in/tools/ai-ad-maker-for-clients",
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

// ─── Structured Data (JSON-LD) ──────────────────────────────────────────────
// Helps Google understand the page as a commercial AI tool for client work

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://scenith.in/tools/ai-ad-maker-for-clients",
      url: "https://scenith.in/tools/ai-ad-maker-for-clients",
      name: "AI Ad Maker for Clients — Professional Commercial Generation",
      description:
        "Generate client-ready advertisements, commercials, and social campaigns using AI. Voice synthesis, image generation, and video production unified in one platform.",
      isPartOf: { "@id": "https://scenith.in" },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://scenith.in" },
          { "@type": "ListItem", position: 2, name: "Tools", item: "https://scenith.in/tools" },
          { "@type": "ListItem", position: 3, name: "AI Ad Maker for Clients", item: "https://scenith.in/tools/ai-ad-maker-for-clients" },
        ],
      },
    },
    {
      "@type": "SoftwareApplication",
      name: "Scenith AI Ad Maker",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: "https://scenith.in/create-ai-content?utm_source=tool-page&utm_medium=ai-ad-maker-for-clients&utm_campaign=tool-cta",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Free to start with 50 credits on signup",
      },
      featureList: [
        "AI voiceover for commercials (40+ voices, 20+ languages)",
        "AI image & video ad generation",
        "Client-ready commercial formats (15s, 30s, 60s)",
        "Full commercial rights on all assets",
        "Campaign asset management",
        "7+ AI models for visuals, 6+ for video",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Can I use Scenith's AI ad maker for client projects?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. All content generated on Scenith — voices, images, and videos — comes with full commercial rights. You can deliver AI-generated assets to clients without attribution or royalty fees.",
          },
        },
        {
          "@type": "Question",
          name: "Does the AI ad maker support different ad durations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Our AI video generator supports 5-second, 10-second, and longer clips. For voiceovers, you can generate scripts of any length within your character limit.",
          },
        },
        {
          "@type": "Question",
          name: "What languages are available for AI voiceover in ads?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Google TTS supports 20+ languages including English (US, UK, Australian, Indian), Spanish, French, German, Mandarin, Hindi, Arabic, and more. Azure Neural TTS adds additional multilingual options.",
          },
        },
        {
          "@type": "Question",
          name: "How does the AI ad maker compare to traditional ad production?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Traditional ad production involves voice actors ($100–$500 per spot), graphic designers ($50–$200 per asset), and video editors ($200–$1,000 per minute). Scenith reduces turnaround from 2–6 weeks to under 30 minutes, at <5% of the cost.",
          },
        },
      ],
    },
  ],
};

// ─── AD STYLES (for visual interest & SEO depth) ─────────────────────────────

const AD_STYLES = [
  { icon: "📺", name: "TV Commercial", vibe: "Cinematic, 15-60s, high production value", colors: "Deep blacks, cinematic gold, rich contrast" },
  { icon: "📱", name: "Social Shorts", vibe: "Vertical, bold captions, fast cuts", colors: "Neon accents, pure white, high saturation" },
  { icon: "🎙️", name: "Audio Ad (Podcast/Radio)", vibe: "Conversational, direct, sonic branding", colors: "N/A — pure audio focus" },
  { icon: "🖼️", name: "Display/Banner", vibe: "Static, high-impact visual, minimal text", colors: "Brand-primary, high legibility" },
  { icon: "📧", name: "Video Email", vibe: "Explainer-style, under 60s, captioned", colors: "Clean, bright, accessible" },
  { icon: "🏪", name: "Retail Digital Signage", vibe: "Looping, product-focused, vibrant", colors: "High-energy, seasonal palettes" },
];

const AD_VOICE_STYLES = [
  { name: "Authoritative Narrator", best: "Corporate, B2B, financial services" },
  { name: "Energetic Youth", best: "Social media, consumer apps, fashion" },
  { name: "Warm & Trustworthy", best: "Healthcare, education, non-profit" },
  { name: "Luxury & Refined", best: "Premium products, real estate, automotive" },
  { name: "Conversational & Friendly", best: "Local services, food & beverage, retail" },
  { name: "Urgent & Direct", best: "Flash sales, limited-time offers, CTAs" },
];

const INDUSTRY_AD_TEMPLATES = [
  { industry: "E-commerce", prompt: "30-second social video ad for an online fashion brand. Fast cuts of clothing on diverse models. Energetic voiceover: 'Look fresh without breaking the bank. Shop the drop — link in bio.' Upbeat electronic track. Vertical 9:16 format." },
  { industry: "SaaS / Tech", prompt: "15-second explainer video for a project management tool. Animated interface showing task completion. Calm, professional voice: 'Stop juggling spreadsheets. One dashboard. One team. One workflow.' Clean white and blue aesthetic. 16:9." },
  { industry: "Local Restaurant", prompt: "30-second video ad for a family pizzeria. Close-ups of fresh ingredients, oven-fired pizza being pulled out, melted cheese stretch. Warm, friendly voice: 'Made the same way for thirty years. Taste the tradition.' Warm amber and red tones. 16:9." },
  { industry: "Real Estate", prompt: "60-second cinematic video ad for a luxury condo development. Drone shot sweeping over city skyline, interior reveal of marble finishes. Sophisticated voice: 'The last penthouse. The first word in luxury.' Gold and deep blue palette. 16:9." },
  { industry: "Fitness App", prompt: "15-second vertical ad for a home workout app. Before/after and high-energy workout clips. Urgent voice: 'No gym? No problem. First month free. Link in bio.' Neon purple and black. 9:16." },
  { industry: "Automotive", prompt: "30-second cinematic ad for an electric SUV. Winding mountain road, vehicle silhouette at sunset, dust plume. Deep, authoritative voice: 'Range meets resolve. The new EV your city has been waiting for.' Gunmetal and amber. 16:9." },
];

const PROMPT_EXAMPLES = [
  { brand: "BloomSkincare", style: "Warm & Trustworthy", prompt: "30-second video ad for a clean beauty brand called BloomSkincare. Close-ups of natural ingredients — aloe, green tea, rosehip. Soft morning light. Female voiceover: 'Your skin doesn't need chemicals. It needs nature. BloomSkincare — clean beauty that actually works.' Soft pastel green and cream palette. 16:9." },
  { brand: "QuickLedger", style: "Authoritative Narrator", prompt: "15-second B2B video ad for an accounting SaaS called QuickLedger. Animated dashboard showing real-time cash flow. Male voiceover: 'Stop guessing. Start growing. QuickLedger — the ledger that works as fast as you do.' Deep navy and electric blue. 16:9." },
  { brand: "StreetPixel", style: "Energetic Youth", prompt: "15-second vertical ad for a streetwear brand called StreetPixel. Fast-paced cuts of urban fashion, sneakers on pavement, graffiti background. Female voiceover: 'Your style. Your city. Your drop. StreetPixel — new collection every week.' Neon pink, cyan, black. 9:16." }
];

// ─── Page Component ───────────────────────────────────────────────────────────

export default function AIAdMakerForClientsPage() {
  const CTA_URL =
    "https://scenith.in/create-ai-content?utm_source=tool-page&utm_medium=ai-ad-maker-for-clients&utm_campaign=tool-cta&utm_content=hero-cta";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="aam-page">
        {/* Hero Section — High emotional hook, value-driven */}
        <section className="aam-hero">
          <div className="aam-hero-bg" />
          <div className="aam-hero-inner">
            <div className="aam-badge-row">
              <span className="aam-badge">✦ Client-Ready Assets</span>
              <span className="aam-badge aam-badge-alt">50 Free Credits</span>
              <span className="aam-badge">Full Commercial Rights</span>
            </div>

            <h1 className="aam-hero-h1">
              AI Ad Maker for Clients
              <span className="aam-hero-h1-line2"> That Delivers Campaigns,</span>
              <span className="aam-hero-h1-accent"> Not Just Concepts.</span>
            </h1>

            <p className="aam-hero-desc">
              From briefing to delivery in under 30 minutes. Generate client-ready
              commercials, social ads, voiceovers, and campaign assets — all within
              Scenith's unified AI studio. Used by agencies, freelancers, and marketing
              teams to scale creative production without scaling headcount.
            </p>

            <div className="aam-hero-stats">
              <div className="aam-stat"><span className="aam-stat-num">7+</span><span className="aam-stat-label">AI Models</span></div>
              <div className="aam-stat-divider" />
              <div className="aam-stat"><span className="aam-stat-num">30s</span><span className="aam-stat-label">Avg Generation</span></div>
              <div className="aam-stat-divider" />
              <div className="aam-stat"><span className="aam-stat-num">100%</span><span className="aam-stat-label">Commercial Rights</span></div>
              <div className="aam-stat-divider" />
              <div className="aam-stat"><span className="aam-stat-num">40+</span><span className="aam-stat-label">Voice Options</span></div>
            </div>

            {/* PRIMARY CTA BUTTON — Huge, clear, direct */}
            <Link href={CTA_URL} className="aam-hero-cta">
              <span className="aam-cta-spark">⚡</span>
              Generate Client Ads — Free to Start
              <span className="aam-cta-arrow">→</span>
            </Link>
            <p className="aam-hero-cta-sub">
              No credit card · No watermarks · Full commercial license included
            </p>
          </div>

          {/* Animated ad format strip */}
          <div className="aam-format-strip">
            <div className="aam-format-track">
              {["15s TV Spot", "30s Commercial", "60s Explainer", "Vertical Social", "Audio Ad", "Display Banner", "Video Email", "Digital Signage"].map((f, i) => (
                <span key={i} className="aam-format-pill">{f}</span>
              ))}
              {["15s TV Spot", "30s Commercial", "60s Explainer", "Vertical Social", "Audio Ad", "Display Banner", "Video Email", "Digital Signage"].map((f, i) => (
                <span key={i + 100} className="aam-format-pill">{f}</span>
              ))}
            </div>
          </div>
        </section>

        {/* MAIN CTA CARD — The central action hub of the page */}
        <section className="aam-cta-section">
          <div className="aam-cta-card">
            <div className="aam-cta-card-inner">
              <div className="aam-cta-left">
                <div className="aam-cta-tag">🎬 AI Commercial Studio</div>
                <h2 className="aam-cta-h2">Your Complete Ad Production Pipeline — In One Place</h2>
                <p className="aam-cta-body">
                  Scenith's AI Content Creator is purpose-built for client work. Voice synthesis,
                  image generation, and video production — all unified under a single credit balance.
                  No more bouncing between eleven different tools. No more inconsistent outputs.
                  Just professional-grade ad assets in minutes.
                </p>
                <ul className="aam-cta-list">
                  <li>✦ 40+ AI voices across 20+ languages — from Google, OpenAI, and Azure</li>
                  <li>✦ 7 image models including GPT Image 1, FLUX 1.1, Imagen 4, and Grok Aurora</li>
                  <li>✦ 6 video models — Kling 2.6, Veo 3.1, Wan 2.5, and more</li>
                  <li>✦ 5s / 10s / 15s / 30s / 60s commercial durations</li>
                  <li>✦ 16:9 (horizontal), 9:16 (vertical), and square outputs</li>
                  <li>✦ Full history + download all past client assets</li>
                </ul>
              </div>
              <div className="aam-cta-right">
                <div className="aam-cta-box">
                  <div className="aam-cta-box-label">Start Your First Client Campaign</div>
                  <div className="aam-cta-box-models">
                    <span className="aam-model-chip">GPT Image</span>
                    <span className="aam-model-chip">FLUX 1.1</span>
                    <span className="aam-model-chip">Imagen 4</span>
                    <span className="aam-model-chip">Kling 2.6</span>
                    <span className="aam-model-chip">Veo 3.1</span>
                  </div>
                  <div className="aam-cta-box-preview">
                    <div className="aam-fake-textarea">
                      <span className="aam-fake-cursor">30-second cinematic ad for an electric SUV. Drone shot of mountain road at sunset. Deep authoritative voice: "Range meets resolve. The new EV your city has been waiting for." 16:9…</span>
                    </div>
                  </div>
                  <Link href={CTA_URL} className="aam-big-cta">
                    <span>⚡ Generate Client Ad — Free</span>
                    <small>50 credits included · No card needed</small>
                  </Link>
                  <p className="aam-cta-disclaimer">
                    Opens Scenith AI Studio · All ad formats ready
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works — process for client ad creation */}
        <section className="aam-section">
          <div className="aam-section-inner">
            <div className="aam-section-label">Proven Workflow</div>
            <h2 className="aam-section-h2">From Client Brief to Deliverables in 4 Steps</h2>
            <p className="aam-section-sub">
              The same process agencies use to produce $5k–$20k campaigns — now accessible at
              <strong className="aam-accent-text"> 95% lower cost and 95% faster turnaround</strong>.
            </p>

            <div className="aam-steps">
              {[
                { num: "01", title: "Interpret the Brief", body: "Extract the key message, target emotion, format, and duration from your client's creative brief. Our template prompts help you translate marketing objectives into AI-ready specifications.", detail: "Pro tip: Include the brand name, product category, desired tone, and platform (YouTube/Instagram/TikTok/TV) in your prompt." },
                { num: "02", title: "Generate Voiceover or Visual Assets First", body: "Start with whatever is most critical to the concept. For voice-driven ads (radio, podcasts), generate the voiceover first. For visual ads, generate the key image or video scene to establish the look and feel.", detail: "Scenith's AI studio lets you toggle between voice, image, and video tabs seamlessly without losing context." },
                { num: "03", title: "Refine with Image-to-Image & Variations", body: "Once you have a hero asset, use image-to-image or prompt variations to explore different directions. Present 3–5 options to your client for feedback — each variation costs pennies, not hundreds.", detail: "Supported on GPT Image 1, Stability AI Core, and Grok Aurora. Upload client-provided brand assets as reference." },
                { num: "04", title: "Deliver Final Assets", body: "Download high-resolution PNG images, MP3 audio files, and MP4 videos. All files are watermark-free and come with full commercial rights. Bundle them into a client deliverable folder in under 10 minutes.", detail: "Don't forget to include the AI models and prompt used — clients appreciate transparency." },
              ].map((step, i) => (
                <div className="aam-step" key={i}>
                  <div className="aam-step-num">{step.num}</div>
                  <div className="aam-step-content">
                    <h3 className="aam-step-title">{step.title}</h3>
                    <p className="aam-step-body">{step.body}</p>
                    <div className="aam-step-detail">{step.detail}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="aam-steps-cta">
              <Link href={CTA_URL} className="aam-inline-cta">
                Start Creating Client Ads →
              </Link>
            </div>
          </div>
        </section>

        {/* Ad Styles & Voice Styles — double section for depth */}
        <section className="aam-section aam-section-dark">
          <div className="aam-section-inner">
            <div className="aam-section-label">Creative Flexibility</div>
            <h2 className="aam-section-h2">Every Ad Format, Every Voice Style, Every Platform</h2>
            <p className="aam-section-sub">
              Whether your client needs a cinematic TV spot, a punchy social short, or a warm
              radio ad — Scenith's AI adapts instantly. Mix and match formats, voices, and visuals
              until the brief is fully satisfied.
            </p>

            <div className="aam-two-col-grid">
              <div className="aam-card-group">
                <h3 className="aam-group-title">📺 Ad Formats & Visual Directions</h3>
                {AD_STYLES.map((style, i) => (
                  <div className="aam-style-card" key={i}>
                    <div className="aam-style-icon">{style.icon}</div>
                    <div className="aam-style-details">
                      <div className="aam-style-name">{style.name}</div>
                      <div className="aam-style-vibe">{style.vibe}</div>
                      <div className="aam-style-colors">{style.colors}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="aam-card-group">
                <h3 className="aam-group-title">🎙️ Voice Styles for Ad Performance</h3>
                {AD_VOICE_STYLES.map((voice, i) => (
                  <div className="aam-voice-card" key={i}>
                    <div className="aam-voice-name">{voice.name}</div>
                    <div className="aam-voice-best">{voice.best}</div>
                  </div>
                ))}
                <div className="aam-credit-note">
                  ⚡ All voices available via Google, OpenAI, and Azure TTS engines
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Ad Templates — extremely valuable for SEO & user engagement */}
        <section className="aam-section">
          <div className="aam-section-inner">
            <div className="aam-section-label">Industry-Specific Templates</div>
            <h2 className="aam-section-h2">Copy-Paste-Ready Ad Briefs for 6+ Verticals</h2>
            <p className="aam-section-sub">
              Don't start from a blank page. Use these proven ad prompts as your foundation —
              then customize for your client's brand, offer, and audience.
            </p>

            <div className="aam-templates-grid">
              {INDUSTRY_AD_TEMPLATES.map((template, i) => (
                <div className="aam-template-card" key={i}>
                  <div className="aam-template-badge">{template.industry}</div>
                  <p className="aam-template-prompt">"{template.prompt}"</p>
                  <Link href={CTA_URL} className="aam-template-use">
                    Use This Template →
                  </Link>
                </div>
              ))}
            </div>

            <div className="aam-tip">
              <div className="aam-tip-icon">💡</div>
              <div>
                <strong>Customization Tip:</strong> Replace the brand name, value prop, and CTA
                with your client's details. Keep the format, duration, and visual direction
                intact for reliable results.
              </div>
            </div>
          </div>
        </section>

        {/* Real Prompt Examples */}
        <section className="aam-section aam-section-tint">
          <div className="aam-section-inner">
            <div className="aam-section-label">Live Examples</div>
            <h2 className="aam-section-h2">Real Client-Grade Prompts That Deliver</h2>
            <p className="aam-section-sub">
              Here's exactly what goes into Scenith's AI studio to generate professional ad assets.
              Copy, adapt, and iterate.
            </p>

            <div className="aam-examples-grid">
              {PROMPT_EXAMPLES.map((ex, i) => (
                <div className="aam-example-card" key={i}>
                  <div className="aam-example-header">
                    <span className="aam-example-brand">{ex.brand}</span>
                    <span className="aam-example-style">{ex.style}</span>
                  </div>
                  <p className="aam-example-text">"{ex.prompt}"</p>
                  <Link href={`${CTA_URL}&utm_content=example-${i}`} className="aam-example-btn">
                    Generate Similar Ad →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison: AI Ad Maker vs Traditional Production */}
        <section className="aam-section">
          <div className="aam-section-inner">
            <div className="aam-section-label">ROI Analysis</div>
            <h2 className="aam-section-h2">AI Ad Maker vs. Traditional Production (2026)</h2>
            <p className="aam-section-sub">
              The creative industry has shifted. Here's what the numbers look like today.
            </p>

            <div className="aam-compare-table">
              <div className="aam-compare-row aam-compare-header">
                <div>Metric</div><div>Traditional Production</div><div>Scenith AI Ad Maker</div>
              </div>
              <div className="aam-compare-row"><div>⏱️ Turnaround (30s commercial)</div><div>2–6 weeks</div><div><strong>15–30 minutes</strong></div></div>
              <div className="aam-compare-row"><div>💰 Cost (voice + visuals + video)</div><div>$800 – $5,000+</div><div><strong>$0 – $9/month</strong></div></div>
              <div className="aam-compare-row"><div>🔄 Revisions / Iterations</div><div>2–3 rounds (costly)</div><div><strong>Unlimited (free)</strong></div></div>
              <div className="aam-compare-row"><div>🗣️ Voice talent cost</div><div>$100–$500 per spot</div><div><strong>$0 (included)</strong></div></div>
              <div className="aam-compare-row"><div>🎨 Visual asset cost</div><div>$50–$200 per image</div><div><strong>$0 (included)</strong></div></div>
              <div className="aam-compare-row"><div>🎬 Video editing cost</div><div>$200–$1,000 per minute</div><div><strong>$0 (included)</strong></div></div>
              <div className="aam-compare-row"><div>🔑 Commercial rights</div><div>Varies (often limited)</div><div><strong>Full, perpetual, worldwide</strong></div></div>
              <div className="aam-compare-row"><div>📦 Asset formats</div><div>WAV, PNG, MP4 (additional fees)</div><div><strong>MP3, PNG, MP4 (instant)</strong></div></div>
            </div>

            <div className="aam-compare-note">
              <span className="aam-note-icon">📊</span>
              Based on industry surveys of 500+ agencies (2025–2026). Traditional costs include
              freelance or small-agency rates. Enterprise production costs are 3–5x higher.
            </div>
          </div>
        </section>

        {/* Why AI Ad Maker in 2026 — strategic content */}
        <section className="aam-section aam-section-dark">
          <div className="aam-section-inner">
            <div className="aam-section-label">The 2026 Reality</div>
            <h2 className="aam-section-h2">Why Every Agency & Freelancer Needs an AI Ad Maker</h2>

            <div className="aam-why-grid">
              {[
                { title: "Client Expectations Have Risen", icon: "📈", body: "Your clients now expect multiple creative variations, faster turnarounds, and lower costs. AI is the only way to meet these demands without burning out your team or blowing your margins." },
                { title: "Speed Is Now the Differentiator", icon: "⚡", body: "The agency that delivers a client proposal with 5 ad concepts in 2 hours wins against the agency that takes 2 weeks. AI ad makers collapse creative lead time from days to minutes." },
                { title: "Full Commercial Rights Are Non-Negotiable", icon: "🔑", body: "Many AI tools restrict commercial use or claim ownership of outputs. Scenith grants full commercial rights — you own every asset you generate. No surprises when you bill a client." },
                { title: "Vertical Integration Reduces Friction", icon: "🔄", body: "Switching between voice, image, and video tools breaks creative flow. Scenith's unified studio keeps you in a single interface. Generate a voiceover, then immediately turn it into a video without re-prompting." },
                { title: "AI Beats Templates", icon: "🏆", body: "Template-based ad makers (Canva, etc.) produce generic results. Scenith uses frontier generative models — each output is unique, original, and indistinguishable from studio work." },
                { title: "Flat Fees Beat Per-Asset Pricing", icon: "💸", body: "Scenith's credit system costs $0.03–$0.15 per asset. Traditional creative services cost $50–$200 per asset. At scale, AI is 100x more capital efficient." },
              ].map((item, i) => (
                <div className="aam-why-card" key={i}>
                  <span className="aam-why-icon">{item.icon}</span>
                  <h3 className="aam-why-title">{item.title}</h3>
                  <p className="aam-why-body">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ — long-form for SEO & user reassurance */}
        <section className="aam-section">
          <div className="aam-section-inner">
            <div className="aam-section-label">FAQ</div>
            <h2 className="aam-section-h2">AI Ad Maker for Clients — Common Questions</h2>

            <div className="aam-faq-list">
              {[
                { q: "Can I use Scenith's AI ad maker for client projects without attribution?", a: "Absolutely. All content generated on Scenith — voiceovers, images, and videos — comes with full commercial rights. You can deliver assets to paying clients, use them in your own marketing, or resell them as part of your creative services. No attribution to Scenith is required, and there are no royalty fees." },
                { q: "What ad formats and durations does the AI video generator support?", a: "Scenith supports 5-second, 10-second, and custom durations up to 10 seconds per clip (some models support longer). Aspect ratios include 16:9 (horizontal — YouTube, TV, website), 9:16 (vertical — Instagram Reels, TikTok, Shorts), and 1:1 (square — Facebook, LinkedIn, display ads). For longer commercials (30s/60s), you can generate multiple clips and edit them together — the visual style remains consistent across generations." },
                { q: "How does pricing work for agencies producing multiple client campaigns?", a: "Scenith uses a credit system. Free plan: 50 credits on signup ($0). Creator Lite: 300 credits/month for $9. Each ad asset costs between 10–186 credits depending on model and duration. A typical 30-second video ad (voice + visual) costs ~100–200 credits. That means you can produce 2–3 full client commercials per month on the Lite plan. For high-volume agencies, contact our enterprise team for custom pricing." },
                { q: "What AI voice options are available for commercial voiceover?", a: "Three providers: Google TTS (20+ languages, 40+ voices, most natural for standard English), OpenAI TTS (highly emotive, best for conversational ads), and Azure Neural TTS (additional languages, best for non-English markets). All voices are studio-grade and licensed for commercial use. You can adjust speaking speed from 0.5x to 4x." },
                { q: "Can I generate ads in languages other than English?", a: "Yes. Google TTS supports Mandarin, Hindi, Spanish, French, German, Arabic, Japanese, Korean, and 15+ other languages. Our AI image/video models respond to prompts in multiple languages. For non-Latin scripts (Arabic, Hindi, Chinese), GPT Image 1 produces the most reliable text rendering within generated images." },
                { q: "How do I ensure brand consistency across different ad assets?", a: "Use the image-to-image feature with your client's existing brand assets (logo, colour palette, typography samples). Once you generate a 'hero' asset, use the same prompt structure with minor variations for additional assets. Saving your successful prompts in a client folder ensures you can regenerate consistent assets months later." },
                { q: "Is there a limit on how many client campaigns I can manage?", a: "No. You can generate unlimited assets within your credit balance. We recommend organizing by client folder (use the history panel's metadata). Scenith does not impose per-campaign or per-client restrictions." },
                { q: "Can I white-label or resell Scenith-generated ads as my own agency work?", a: "Yes, with full commercial rights. You may deliver Scenith-generated assets to clients as your own work, charge for them, and include them in your portfolio. The only restriction is that you may not resell access to Scenith's platform as a standalone service (i.e., you cannot run a 'white-label AI ad reseller' business using Scenith's API without an enterprise agreement)." },
                { q: "What's the audio quality for AI voiceover? Is it suitable for broadcast?", a: "Google and Azure TTS output at 44.1kHz MP3 — broadcast quality suitable for radio, podcast, and TV voiceover. OpenAI TTS produces highly natural prosody but lower bitrate; we recommend it for digital/social ads. All outputs are clean (no background noise) and can be mastered further in Audacity or Adobe Audition if needed." },
                { q: "How long does it take to generate a 30-second commercial?", a: "Voice generation: 2–4 seconds. Image generation: 10–30 seconds. Video generation: 30–120 seconds depending on model (Kling 2.6 is faster, Veo 3.1 takes longer but higher quality). You can generate voice and visuals in parallel by opening two browser tabs. Most users deliver a complete 30-second spot in under 15 minutes." },
                { q: "What happens if I'm not satisfied with an ad generation?", a: "If the generation fails completely (error, timeout, malformed output), credits are automatically refunded within minutes. If you're simply not happy with the creative direction, refine your prompt and generate again — each generation consumes new credits but allows unlimited iteration. Use the 50 free credits to test prompts before committing to a paid plan." },
                { q: "Can Scenith's AI handle complex ad concepts with multiple scenes or voiceover + music?", a: "Scenith generates individual scenes (5–10 seconds each). For complex commercials, generate multiple scenes, download them, and edit together using any video editor (DaVinci Resolve, CapCut, Premiere Pro). For music, we recommend using royalty-free libraries (YouTube Audio Library, Uppbeat) and mixing with Scenith's voiceover in your editor. Native music + voice mixing is on our roadmap for 2026." },
              ].map((item, i) => (
                <details className="aam-faq-item" key={i}>
                  <summary className="aam-faq-q">{item.q}</summary>
                  <p className="aam-faq-a">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Related Tools */}
        <section className="aam-section aam-section-tint">
          <div className="aam-section-inner">
            <div className="aam-section-label">Explore Ecosystem</div>
            <h2 className="aam-section-h2">More AI Tools for Client Content</h2>
            <p className="aam-section-sub">Complete your client campaign workflow with these integrated tools.</p>
            <div className="aam-related-grid">
              {[
                { href: "https://scenith.in/tools/add-subtitles-to-videos", icon: "💬", title: "Add Subtitles to Videos", desc: "Auto-caption client ads for social media — increase retention by 40%." },
                { href: "https://scenith.in/tools/ai-logo-generator", icon: "🖼️", title: "AI Logo Generator", desc: "Create brand identities before producing full ad campaigns." },
                { href: "https://scenith.in/tools/ai-image-generation", icon: "🎨", title: "AI Image Generation", desc: "Batch-produce display ads, product visuals, and social graphics." },
              ].map((tool, i) => (
                <Link href={tool.href} className="aam-related-card" key={i}>
                  <span className="aam-related-icon">{tool.icon}</span>
                  <h3 className="aam-related-title">{tool.title}</h3>
                  <p className="aam-related-desc">{tool.desc}</p>
                  <span className="aam-related-arrow">Explore →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Final, massive CTA — no escape without clicking */}
        <section className="aam-final-cta">
          <div className="aam-final-inner">
            <div className="aam-final-noise" />
            <h2 className="aam-final-h2">
              Your next client campaign starts here.
              <br />
              <span className="aam-final-accent">Generate it in minutes, not weeks.</span>
            </h2>
            <p className="aam-final-sub">
              50 free credits. 7 AI image models + 6 video models + 40+ voices.
              <br />
              Commercial rights included. No credit card required.
            </p>
            <Link href={CTA_URL} className="aam-final-btn">
              <span className="aam-cta-spark">⚡</span>
              Start Creating Client Ads — It's Free
              <span className="aam-cta-arrow">→</span>
            </Link>
            <p className="aam-final-note">
              Used by agencies in 40+ countries · 10,000+ ads generated monthly
            </p>
          </div>
        </section>
      </div>
    </>
  );
}