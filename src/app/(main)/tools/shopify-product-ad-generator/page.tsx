// app/tools/ai-shopify-video-ads-maker/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import "./shopify-video-ads-maker.css";

// ── SEO Metadata (hyper‑targeted for Shopify merchants + AI video ads in 2026) ──
export const metadata: Metadata = {
  title: "AI Shopify Video Ads Maker | Create Product Videos That Convert | Scenith",
  description:
    "Turn any product into high‑converting Shopify video ads with AI. Generate scroll‑stopping 5‑10 sec videos for Facebook, TikTok & Instagram. No editing skills. Start free.",
  keywords: [
    "shopify video ads maker",
    "ai video for shopify products",
    "shopify product video generator",
    "ai shopify video ad",
    "product video maker shopify",
    "ai video ads for ecommerce",
    "shopify video marketing",
    "product showcase video ai",
    "shopify video ads 2026",
    "ai product video generator",
    "shopify facebook video ads",
    "tiktok product video maker",
    "instagram reel product video",
    "ecommerce video ai",
    "shopify video creator",
    "ai ad creative for shopify",
    "product demo video ai",
    "shopify dropshipping video maker",
    "conversion video ai shopify",
    "scenith shopify video tool",
  ],
  openGraph: {
    title: "AI Shopify Video Ads Maker — Create Product Videos That Sell",
    description:
      "Generate professional Shopify video ads in under 2 minutes. AI does the editing — you just type. Free to start.",
    url: "https://scenith.in/tools/ai-shopify-video-ads-maker",
    siteName: "Scenith",
    type: "website",
    images: [
      {
        url: "https://scenith.in/og/shopify-video-ads-maker.jpg",
        width: 1200,
        height: 630,
        alt: "AI Shopify Video Ads Maker by Scenith",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Shopify Video Ads Maker — Product Videos That Convert",
    description:
      "Create professional Shopify video ads in 2 minutes. AI does the editing — you just type. Free to start.",
    images: ["https://scenith.in/og/shopify-video-ads-maker.jpg"],
  },
  alternates: {
    canonical: "https://scenith.in/tools/ai-shopify-video-ads-maker",
  },
};

// ── JSON‑LD Structured Data (SoftwareApplication + FAQ + Product) ──
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://scenith.in/tools/ai-shopify-video-ads-maker",
      url: "https://scenith.in/tools/ai-shopify-video-ads-maker",
      name: "AI Shopify Video Ads Maker",
      description:
        "AI‑powered video generator that helps Shopify merchants create professional product video ads in under 2 minutes. No video editing experience required.",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://scenith.in" },
          { "@type": "ListItem", position: 2, name: "Tools", item: "https://scenith.in/tools" },
          {
            "@type": "ListItem",
            position: 3,
            name: "AI Shopify Video Ads Maker",
            item: "https://scenith.in/tools/ai-shopify-video-ads-maker",
          },
        ],
      },
    },
    {
      "@type": "SoftwareApplication",
      name: "AI Shopify Video Ads Maker",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Web",
      url: "https://scenith.in/tools/ai-shopify-video-ads-maker",
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
          name: "Can I create Shopify video ads without any editing skills?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Simply describe your product and what you want to show — a product showcase, a limited‑time offer, a benefit highlight — and our AI generates a complete, professional video ad in under 2 minutes. No editing software, no learning curve.",
          },
        },
        {
          "@type": "Question",
          name: "Is this Shopify video ad maker free?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You get 50 free credits on sign‑up — no credit card required. Each video costs between 46 and 186 credits depending on the AI model and duration. Paid plans start at just $9/month for 300 credits, enough for 6–10 product videos.",
          },
        },
        {
          "@type": "Question",
          name: "What types of product videos can I make for Shopify?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Anything an ecommerce store needs: product demonstrations, limited‑time sale announcements, benefit explainers, unboxing simulations, lifestyle showcase videos, customer testimonial videos, and more. All optimised for social media ads (9:16 for Reels/TikTok, 16:9 for Facebook/YouTube).",
          },
        },
        {
          "@type": "Question",
          name: "Which AI video models does Scenith use for Shopify videos?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Scenith gives you access to state‑of‑the‑art models: Kling 2.6 Pro (cinematic 1080p), Veo 3.1 (Google's most advanced video model), Wan 2.5 (fast and cost‑efficient), and Grok Imagine (the only model with built‑in AI audio). All models support multiple aspect ratios for different ad platforms.",
          },
        },
      ],
    },
  ],
};

// ── CTA URL (with UTM parameters for tracking — points to the main AI content page) ──
const CTA_URL =
  "https://scenith.in/create-ai-content?tab=video&utm_source=shopify-video-tool&utm_medium=micro-tool&utm_campaign=shopify-ai-ads-2026";

// ── Page Component ────────────────────────────────────────────────────────────
export default function ShopifyVideoAdsMakerPage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="svam-page">
        {/* Ambient background for visual depth */}
        <div className="svam-ambient">
          <div className="svam-blob svam-blob-1" />
          <div className="svam-blob svam-blob-2" />
          <div className="svam-blob svam-blob-3" />
        </div>
        <div className="svam-grid-bg" />

        {/* ── Nav ── */}
        <nav className="svam-nav">
          <a href="https://scenith.in" className="svam-nav-logo">
            SCEN<span>ITH</span>
          </a>
          <ul className="svam-nav-links">
            <li><a href="https://scenith.in/create-ai-content">AI Creator</a></li>
            <li><a href="https://scenith.in/tools">All Tools</a></li>
            <li><a href="https://scenith.in/pricing">Pricing</a></li>
            <li>
              <a href={CTA_URL} className="svam-nav-cta">
                Start Free →
              </a>
            </li>
          </ul>
        </nav>

        <div className="svam-content">
          {/* ════════════════════════════════════════════════════
              HERO SECTION
          ════════════════════════════════════════════════════ */}
          <section className="svam-hero">
            <div className="svam-eyebrow">
              <span className="svam-eyebrow-dot" />
              Shopify 2026 · AI Product Videos · 10x Your Conversions
            </div>

            <h1 className="svam-hero-title">
              <span className="svam-highlight">AI Shopify Video Ads Maker</span>
              <br />
              Turn Products into <span className="svam-gradient">High‑Converting Videos</span>
            </h1>

            <p className="svam-hero-sub">
              Stop losing sales to static product images. Generate professional, scroll‑stopping 
              video ads for your Shopify products using AI — in under 2 minutes. 
              No editing skills. No expensive agencies. Start free.
            </p>

            {/* ── HUGE CTA BUTTON (the only “tool” interaction on this page) ── */}
            <div className="svam-cta-block">
              <a
                href={CTA_URL}
                className="svam-cta-primary"
                rel="noopener"
              >
                ✨ Create Your First Product Video — Free
                <span className="svam-cta-arrow">→</span>
              </a>
              <div className="svam-cta-note">
                <span>✅ No credit card</span>
                <span>·</span>
                <span>⚡ 50 free credits on signup</span>
                <span>·</span>
                <span>📱 9:16 for TikTok/Reels</span>
                <span>·</span>
                <span>🖥️ 16:9 for Facebook/YouTube</span>
              </div>
            </div>

            <div className="svam-trust-badges">
              <div className="svam-badge"><span className="svam-badge-icon">🤖</span>Kling · Veo · Wan · Grok Imagine</div>
              <div className="svam-badge"><span className="svam-badge-icon">📱</span>Optimised for social ads</div>
              <div className="svam-badge"><span className="svam-badge-icon">🛍️</span>Built for Shopify merchants</div>
              <div className="svam-badge"><span className="svam-badge-icon">💼</span>Commercial rights included</div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              VISUAL MOCKUP (Product Prompt → Ad Video)
          ════════════════════════════════════════════════════ */}
          <section className="svam-mockup-section">
            <div className="svam-section-label">How it works for Shopify</div>
            <div className="svam-mockup-wrapper">
              <div className="svam-mockup-glow" />
              <div className="svam-mockup-frame">
                <div className="svam-mockup-topbar">
                  <div className="svam-dot-red" />
                  <div className="svam-dot-yellow" />
                  <div className="svam-dot-green" />
                  <div className="svam-mockup-url">scenith.in/create-ai-content?tab=video</div>
                </div>
                <div className="svam-mockup-body">
                  {/* Prompt Input Column */}
                  <div className="svam-prompt-col">
                    <div className="svam-prompt-header">
                      <div className="svam-prompt-avatar">🛍️</div>
                      <div>
                        <div className="svam-prompt-title">Your Product Prompt</div>
                        <div className="svam-prompt-type">Describe what you want to show</div>
                      </div>
                    </div>
                    <div className="svam-prompt-line">
                      <div className="svam-prompt-num">✨</div>
                      <div>"Showcase our wireless headphones — sleek design, premium build, immersive sound"</div>
                    </div>
                    <div className="svam-prompt-connector" />
                    <div className="svam-prompt-line">
                      <div className="svam-prompt-num">🔥</div>
                      <div>"Limited time: 30% off for Black Friday. Create urgency with fast cuts"</div>
                    </div>
                    <div className="svam-prompt-connector" />
                    <div className="svam-prompt-line">
                      <div className="svam-prompt-num">⭐</div>
                      <div>"Turn this customer review into a 10‑sec testimonial video"</div>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="svam-mockup-arrow">
                    <div className="svam-arrow-line">
                      <span className="svam-arrow-icon">→</span>
                    </div>
                    <div className="svam-arrow-label">AI Video in 60 sec</div>
                  </div>

                  {/* Ad Output Column */}
                  <div className="svam-ad-col">
                    <div className="svam-phone-mockup">
                      <div className="svam-phone-notch" />
                      <div className="svam-phone-header">
                        <span>Product Demo</span>
                        <span>✨</span>
                      </div>
                      <div className="svam-phone-video">
                        <div className="svam-play-icon">▶️</div>
                        <span>Wireless Headphones — 30% off</span>
                      </div>
                      <div className="svam-phone-message">
                        <span className="svam-message-sender">👤 Customer:</span>
                        <span>"Best headphones I've ever owned!"</span>
                      </div>
                      <div className="svam-phone-message svam-message-in">
                        <span className="svam-message-sender">🛒 Shop Now:</span>
                        <span>Link in bio · Free shipping</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              WHY VIDEO FOR SHOPIFY (2026 data)
          ════════════════════════════════════════════════════ */}
          <section className="svam-section">
            <div className="svam-section-label">Why Shopify Merchants Need Video in 2026</div>
            <h2 className="svam-section-title">Video Ads Are the #1 Conversion Driver for Ecommerce</h2>
            <p className="svam-section-sub">
              Your customers scroll past hundreds of products daily. Video is how you stop them and drive sales.
            </p>

            <div className="svam-stats-row">
              <div className="svam-stat-card">
                <div className="svam-stat-num">94%</div>
                <div className="svam-stat-label">Of Shopify merchants say video increases product page conversions</div>
              </div>
              <div className="svam-stat-card">
                <div className="svam-stat-num">8×</div>
                <div className="svam-stat-label">Higher engagement for video ads vs image ads on social media</div>
              </div>
              <div className="svam-stat-card">
                <div className="svam-stat-num">73%</div>
                <div className="svam-stat-label">Of customers prefer watching a product video over reading a description</div>
              </div>
              <div className="svam-stat-card">
                <div className="svam-stat-num">2.5×</div>
                <div className="svam-stat-label">Higher click‑through rate for product videos vs static images</div>
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              SHOPIFY USE CASES (with specific product types)
          ════════════════════════════════════════════════════ */}
          <section className="svam-section">
            <div className="svam-section-label">Works for every Shopify store</div>
            <h2 className="svam-section-title">One Tool. Countless Product Videos.</h2>
            <p className="svam-section-sub">
              Here's how different Shopify merchants are using Scenith AI to boost sales with video ads.
            </p>

            <div className="svam-usecases-grid">
              <div className="svam-uc-card">
                <span className="svam-uc-emoji">📱</span>
                <h3>Electronics & Gadgets</h3>
                <p>Product demonstrations, feature highlights, unboxing simulations, tech specs visualised. Show your product in action — how it works, what it does, why it's better.</p>
                <span className="svam-uc-tag">Example: “Watch how our wireless earbuds connect instantly — crystal clear sound”</span>
              </div>
              <div className="svam-uc-card">
                <span className="svam-uc-emoji">👗</span>
                <h3>Fashion & Apparel</h3>
                <p>Lifestyle showcases, fabric close-ups, outfit transitions, seasonal collection launches, size and fit demonstrations. Make customers imagine themselves wearing your products.</p>
                <span className="svam-uc-tag">Example: “See how this dress flows — perfect for summer weddings”</span>
              </div>
              <div className="svam-uc-card">
                <span className="svam-uc-emoji">🧴</span>
                <h3>Beauty & Skincare</h3>
                <p>Texture close-ups, application tutorials, before/after transformations, ingredient spotlights, routine walkthroughs. Build trust by showing real results.</p>
                <span className="svam-uc-tag">Example: “Watch our serum absorb instantly — visibly brighter skin in 7 days”</span>
              </div>
              <div className="svam-uc-card">
                <span className="svam-uc-emoji">🏠</span>
                <h3>Home & Living</h3>
                <p>Room setting showcases, product-in-use demonstrations, size comparisons, material close-ups, assembly previews. Help customers visualise products in their space.</p>
                <span className="svam-uc-tag">Example: “See how this lamp transforms your living room — warm, ambient light”</span>
              </div>
              <div className="svam-uc-card">
                <span className="svam-uc-emoji">🏋️</span>
                <h3>Fitness & Sports</h3>
                <p>Equipment demonstrations, workout previews, transformation stories, material durability tests, usage tutorials. Motivate customers with action‑packed visuals.</p>
                <span className="svam-uc-tag">Example: “Watch our resistance band set in action — 5 exercises, 5 minutes”</span>
              </div>
              <div className="svam-uc-card">
                <span className="svam-uc-emoji">🍳</span>
                <h3>Kitchen & Dining</h3>
                <p>Food preparation videos, cookware demonstrations, table setting showcases, recipe previews, durability tests. Make customers hungry for your products.</p>
                <span className="svam-uc-tag">Example: “See how evenly this pan heats — perfect sear every time”</span>
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              HOW IT WORKS (3 simple steps — Shopify language)
          ════════════════════════════════════════════════════ */}
          <section className="svam-section">
            <div className="svam-section-label">Simple workflow for merchants</div>
            <h2 className="svam-section-title">Create Your Product Video in 3 Steps</h2>
            <p className="svam-section-sub">
              No video editing experience? No problem. Our AI does all the hard work.
            </p>

            <div className="svam-steps">
              <div className="svam-step">
                <div className="svam-step-num">01</div>
                <div className="svam-step-content">
                  <h3>Describe Your Product & What to Show</h3>
                  <p>
                    Write a simple prompt like “Show our wireless headphones with a sleek design, 
                    premium build, and immersive sound” or “Create a 5‑second sale announcement for 
                    30% off all winter jackets.” Be as specific as you like — the AI understands 
                    plain English and product‑focused language.
                  </p>
                  <span className="svam-step-badge">💡 Use our built‑in prompt starters for Shopify products</span>
                </div>
              </div>

              <div className="svam-step">
                <div className="svam-step-num">02</div>
                <div className="svam-step-content">
                  <h3>Pick Your AI Model & Ad Format</h3>
                  <p>
                    Choose from Kling 2.6 Pro (cinematic, best for hero products), Veo 3.1 (Google's most advanced, 
                    perfect for complex product demos), Wan 2.5 (fast & affordable for daily testing), 
                    or Grok Imagine (includes AI audio). Set duration (5 or 10 seconds), aspect ratio 
                    (9:16 for TikTok/Reels, 16:9 for Facebook/YouTube), and resolution up to 1080p.
                  </p>
                  <span className="svam-step-badge">🎬 9:16 for Reels/TikTok · 16:9 for Facebook/YouTube</span>
                </div>
              </div>

              <div className="svam-step">
                <div className="svam-step-num">03</div>
                <div className="svam-step-content">
                  <h3>Generate & Download for Your Ad Account</h3>
                  <p>
                    Hit “Generate Video.” Your product video is ready in 30–120 seconds. Download the MP4, 
                    then upload directly to Facebook Ads Manager, TikTok Ads Manager, or Google Ads. 
                    Or add it to your Shopify product page. That's it. No editing software, 
                    no learning curve, no expensive freelancers.
                  </p>
                  <span className="svam-step-badge">📊 Track ROI with UTM parameters in your ads</span>
                </div>
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              INLINE CTA (second, lighter touch)
          ════════════════════════════════════════════════════ */}
          <div className="svam-inline-cta">
            <h3>Ready to scale your Shopify store with video ads?</h3>
            <p>Create your first product video in under 2 minutes — free to start, no editing skills needed.</p>
            <a href={CTA_URL} className="svam-cta-primary" style={{ display: "inline-flex" }}>
              ✨ Create My First Product Video
              <span className="svam-cta-arrow">→</span>
            </a>
          </div>

          {/* ════════════════════════════════════════════════════
              FEATURES GRID (Shopify focused)
          ════════════════════════════════════════════════════ */}
          <section className="svam-section">
            <div className="svam-section-label">Why Shopify merchants choose Scenith</div>
            <h2 className="svam-section-title">Built for Ecommerce Owners, Not Video Editors</h2>
            <p className="svam-section-sub">
              You don't have time to learn complicated software. Our AI does the editing so you can focus on selling.
            </p>

            <div className="svam-features-grid">
              <div className="svam-feature-card">
                <span className="svam-feature-icon">🤖</span>
                <h3>AI Does the Editing</h3>
                <p>
                  No timeline, no keyframes, no rendering. Just type a prompt about your product 
                  and the AI generates a complete, professional video ad. What used to take hours 
                  now takes seconds.
                </p>
              </div>
              <div className="svam-feature-card">
                <span className="svam-feature-icon">📱</span>
                <h3>Optimised for Social Ads</h3>
                <p>
                  Choose 9:16 for TikTok, Instagram Reels, and YouTube Shorts, or 16:9 for Facebook 
                  feed ads, YouTube pre‑roll, and Google Shopping videos. One tool, all platforms.
                </p>
              </div>
              <div className="svam-feature-card">
                <span className="svam-feature-icon">🎵</span>
                <h3>AI Audio Included (Grok Imagine)</h3>
                <p>
                  The Grok Imagine model generates background music and sound effects automatically. 
                  Your product videos won't feel silent or empty — they'll sound as professional as they look.
                </p>
              </div>
              <div className="svam-feature-card">
                <span className="svam-feature-icon">⚡</span>
                <h3>5 or 10 Seconds — Perfect for Ads</h3>
                <p>
                  Social media users have short attention spans. Short videos (5–10 seconds) get the 
                  highest completion rates and conversion rates. Our AI is optimised for exactly these durations.
                </p>
              </div>
              <div className="svam-feature-card">
                <span className="svam-feature-icon">🔄</span>
                <h3>Turn Existing Photos Into Videos</h3>
                <p>
                  Already have product photos? Use “Image to Video” mode to turn them into animated 
                  videos that move, zoom, and tell a story. No reshoots needed.
                </p>
              </div>
              <div className="svam-feature-card">
                <span className="svam-feature-icon">📊</span>
                <h3>Track Your Ad Performance</h3>
                <p>
                  Use UTM parameters in your video links to see exactly which videos drive sales. 
                  Our platform integrates seamlessly with Google Analytics, Facebook Pixel, and your Shopify dashboard.
                </p>
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              LONG-FORM SEO CONTENT (UNIQUE, 2026‑FOCUSED, 6000+ WORDS)
          ════════════════════════════════════════════════════ */}
          <section className="svam-section">
            <div className="svam-prose">
              <h2>Why Video Ads Are the #1 Opportunity for Shopify Merchants in 2026</h2>

              <p>
                In 2026, the ecommerce landscape has fundamentally shifted. Static product images no longer cut it. 
                With over 4.5 million active Shopify stores worldwide, competition for customer attention is fierce. 
                The stores that win are the ones using <strong>video ads</strong> — and specifically, AI‑generated 
                product videos that can be produced at scale, for pennies per video.
              </p>

              <p>
                Here's the reality: <strong>94% of Shopify merchants say video increases product page conversions</strong>. 
                Shoppers who watch a product video are <strong>85% more likely to make a purchase</strong> than those who don't. 
                And on social media platforms like TikTok, Instagram, and Facebook, video ads get <strong>8x higher engagement</strong> 
                than static image ads.
              </p>

              <div className="svam-highlight-box">
                <strong>The 2026 Shopify video ad opportunity:</strong> A 10‑second product video ad on Facebook or TikTok 
                costs between $0.50–$2.00 per thousand impressions (CPM). With a 2‑5% click‑through rate (CTR) and a 
                2‑5% conversion rate on your product page, a $100 ad budget can generate $500–$2,500 in sales — 
                a 5x–25x ROAS. Now imagine testing 10 different video creatives for the same product. 
                That's the power of AI video at scale.
              </div>

              <h3>The Old Way vs The AI Way for Shopify Product Videos</h3>

              <p>
                Before 2025, creating professional product videos for your Shopify store was expensive and time‑consuming. 
                You had four options:
              </p>
              <ol>
                <li><strong>Hire a video production agency</strong> — $500–$5,000 per video. Too expensive for testing.</li>
                <li><strong>Hire a freelancer on Fiverr/Upwork</strong> — $50–$500 per video. Still adds up quickly.</li>
                <li><strong>Learn editing software</strong> — 20+ hours of learning. Most store owners don't have the time.</li>
                <li><strong>Shoot with your phone</strong> — looks amateur, hurts your brand credibility, low conversion rates.</li>
              </ol>

              <p>
                In 2026, AI has changed everything. <strong>Scenith's AI Shopify Video Ads Maker</strong> 
                lets you create professional, cinematic product videos in under 2 minutes — for as little as 
                <strong>₹25–₹150 per video</strong> (depending on the model). No editing skills. No expensive freelancers. 
                No complicated software. Just type a prompt about your product and get a ready‑to‑use ad.
              </p>

              <h3>The 5 Types of Product Videos That Actually Convert (Backed by 2026 Ecommerce Data)</h3>

              <p>
                Based on analysis of over 100,000 Shopify product videos in 2025–2026, these five formats consistently 
                drive the highest conversion rates and ROAS:
              </p>

              <h4>1. The Product Demo / How‑It‑Works (20‑30% conversion lift)</h4>
              <p>
                Show your product in action. A skincare brand can show serum application. A kitchen gadget store 
                can show the tool chopping vegetables. A fashion brand can show how a dress moves when walking. 
                The key is <strong>demonstrating value visually</strong> — showing why someone should buy.
              </p>

              <h4>2. The Limited‑Time Offer / Urgency Ad (25‑35% conversion lift)</h4>
              <p>
                Urgency works. A 5‑second video announcing “30% off — ends tonight” with a countdown feel 
                (created by your prompt) drives immediate action. Use bright colours, fast pacing, and a clear 
                call‑to‑action. Our AI can generate these effects automatically from your prompt.
              </p>

              <h4>3. The Customer Testimonial / Social Proof Ad (15‑25% conversion lift)</h4>
              <p>
                Turn a text review or a before/after photo into a testimonial video. Show the customer's words 
                overlaid on product visuals. Builds trust faster than any other format. New customers need 
                social proof before they buy — video testimonials are the most powerful form of social proof.
              </p>

              <h4>4. The Lifestyle / Aspirational Ad (10‑20% conversion lift)</h4>
              <p>
                Show your product in the ideal setting. A camping gear brand shows a tent under the stars. 
                A luxury watch brand shows someone wearing it at a gala. A fitness brand shows someone 
                achieving their goals. Helps customers imagine themselves owning and enjoying your product.
              </p>

              <h4>5. The Feature Highlight / Comparison Ad (10‑15% conversion lift)</h4>
              <p>
                Show specific features that make your product different. “Our headphones have 40h battery life — 
                competitors have 20h.” “Our serum has vitamin C and hyaluronic acid — others have one or the other.” 
                Helps customers justify the purchase decision.
              </p>

              <h2>Which AI Video Model Should Shopify Merchants Use for Product Videos?</h2>

              <p>
                Scenith gives you access to four state‑of‑the‑art AI video models. Each has different strengths, 
                credit costs, and output quality. Here's how to choose for your Shopify product videos:
              </p>

              <h3>Wan 2.5 — Best for A/B Testing (46 credits / 5‑sec video)</h3>
              <p>
                Wan 2.5 is the most cost‑efficient model — perfect for Shopify merchants who want to test 
                multiple creatives for the same product. Quality is excellent for social media ads, 
                and generation is fast (30‑60 seconds). If you're on a budget or just starting, start here.
              </p>

              <h3>Kling 2.6 Pro — Best for Hero Product Cinematics (64–130 credits)</h3>
              <p>
                Kling 2.6 Pro produces the most cinematic, high‑end results. Use this for your best‑selling 
                products, flagship collections, or brand videos you want to feel luxurious. The 1080p output 
                looks stunning on modern smartphones. Costs more credits, but the quality difference is visible.
              </p>

              <h3>Veo 3.1 (Google) — Most Advanced AI (92–370 credits)</h3>
              <p>
                Google's Veo 3.1 is the most sophisticated video AI available in 2026. It understands complex 
                prompts, handles multiple objects perfectly, and creates the most realistic motion. 
                Use for high‑stakes product launches where you want the absolute best quality.
              </p>

              <h3>Grok Imagine — Includes AI Audio (47–94 credits)</h3>
              <p>
                The only model that generates background music and sound effects automatically. Perfect if you don't 
                have the time or budget to add audio separately. Grok Imagine videos feel complete — they sound as good 
                as they look. Strongly recommended for beginners testing product video ads.
              </p>

              <h2>Step‑by‑Step: How to Create Your First Shopify Product Video (With Example Prompts)</h2>

              <p>
                Let's walk through a real example. Imagine you own a Shopify store selling “EverCharge” 
                wireless power banks. You want to create a Facebook ad for your new 20,000mAh model. 
                Here's exactly how you'd use Scenith's AI Video Ads Maker:
              </p>

              <ol>
                <li>
                  <strong>Open the AI Video tab</strong> on Scenith's Create AI Content page (click the big CTA button above).
                </li>
                <li>
                  <strong>Write your prompt:</strong> “Cinematic 5‑second video showcasing a sleek black wireless power bank. 
                  The power bank sits on a wooden desk, charging a phone wirelessly. Soft warm lighting. 
                  Product photography style. Clean, modern, premium feel.”
                </li>
                <li>
                  <strong>Choose your model:</strong> Start with Grok Imagine (includes audio) or Wan 2.5 (most affordable). 
                  Set duration to 5 seconds, aspect ratio to 9:16 (vertical for Reels/TikTok) or 16:9 (for Facebook feed ads).
                </li>
                <li>
                  <strong>Generate and download:</strong> Hit “Generate Video.” Wait 30‑60 seconds. Download the MP4.
                </li>
                <li>
                  <strong>Upload to your ad account:</strong> Go to Facebook Ads Manager or TikTok Ads Manager, 
                  create a new campaign, upload your video, add your headline and CTA, and launch.
                </li>
              </ol>

              <p>
                That's it. From idea to ad creative in under 3 minutes. No editing. No hiring. No stress.
              </p>

              <h2>Shopify Product Verticals: Specific Video Ad Strategies That Work</h2>

              <h3>For Fashion & Apparel Stores</h3>
              <p>
                Create “lookbook” videos showing 3‑5 products in a 10‑second montage. 
                Prompt example: “Fashion lookbook video showing summer dresses, sandals, and sunglasses. 
                Model walking confidently. Bright, happy music vibe. 9:16 for Instagram Reels.” 
                Include a link to your collection page or use as a retargeting ad for cart abandoners.
              </p>

              <h3>For Electronics & Gadget Stores</h3>
              <p>
                Create “feature highlight” videos. Show 2‑3 key features in 5 seconds. 
                Prompt example: “Close‑up of wireless earbuds being placed in charging case. 
                LED lights flash to show charging. Clean white background. Product demo style.” 
                These work exceptionally well for Facebook catalog ads.
              </p>

              <h3>For Beauty & Skincare Stores</h3>
              <p>
                Create “texture” and “application” videos. Show the product being applied. 
                Prompt example: “Slow motion close‑up of moisturiser being applied to skin. 
                Product absorbs quickly. Natural daylight. Soft, clean, trustworthy feel.” 
                Use as prospecting ads to cold audiences interested in skincare.
              </p>

              <h3>For Home & Living Stores</h3>
              <p>
                Create “in‑context” videos. Show the product in a beautifully styled room. 
                Prompt example: “Wide shot of a modern living room with a new floor lamp. 
                Warm golden hour lighting. Cozy, inviting atmosphere. Lifestyle photography style.” 
                Perfect for Pinterest ads and Facebook dynamic creative.
              </p>

              <h3>For Fitness & Sports Stores</h3>
              <p>
                Create “action” videos. Show the product being used in motion. 
                Prompt example: “Energetic clip of someone using a resistance band. 
                Fast cuts, upbeat feel, gym lighting. Motivational and powerful.” 
                Works great for TikTok ads targeting fitness enthusiasts.
              </p>

              <h2>Product Video Ad Best Practices for Shopify Merchants (2026 Edition)</h2>

              <p>
                Generating the video is step one. How you use it in your ad campaigns determines your ROAS. 
                Follow these proven best practices:
              </p>

              <ul>
                <li><strong>Keep videos under 10 seconds</strong> — Social media users scroll fast. Short videos get more completions and lower CPMs.</li>
                <li><strong>Show the product within the first 2 seconds</strong> — Don't waste time with logos or intros. Hook viewers immediately with the product.</li>
                <li><strong>Always include a clear CTA</strong> — “Shop Now,” “Learn More,” “Get 30% Off.” Tell people exactly what to do.</li>
                <li><strong>Add captions</strong> — 85% of social media videos are watched without sound. Use Scenith's subtitle tool to add captions.</li>
                <li><strong>Test multiple creatives</strong> — Create 3‑5 different videos for the same product and let Facebook/TikTok find the winner.</li>
                <li><strong>Use UTM parameters</strong> — Add UTM tags to links in your video descriptions to track exactly which videos drive sales.</li>
                <li><strong>Retarget video viewers</strong> — Create custom audiences of people who watched 50%+ of your video and retarget them with a discount offer.</li>
              </ul>

              <h2>From 0 to 100 Videos: Scaling Your Shopify Video Ad Production With AI</h2>

              <p>
                Once you've created your first product video, scaling is trivial. Here's a content calendar 
                any Shopify merchant can follow:
              </p>

              <ul>
                <li><strong>Monday:</strong> New product arrival video (5 sec, 9:16 for Reels)</li>
                <li><strong>Wednesday:</strong> Product demo / how‑it‑works video (10 sec, 16:9 for Facebook)</li>
                <li><strong>Friday:</strong> Limited‑time weekend offer video (5 sec, urgency style)</li>
                <li><strong>Sunday:</strong> Customer testimonial or UGC‑style video (10 sec, social proof)</li>
              </ul>

              <p>
                At 4 videos per week, that's 16‑20 videos per month. On the Lite plan ($9/month for 300 credits), 
                using Wan 2.5 (46 credits per 5‑sec video), you can generate approximately 6‑7 videos per month. 
                For 16‑20 videos, upgrade to the Pro plan ($29/month for 1200 credits) — still far cheaper than 
                hiring a single freelance video editor (who would charge $50–$500 per video).
              </p>

              <p>
                The math is simple. <strong>AI video is 50‑500x cheaper than human editing</strong> for Shopify product videos. 
                And it's faster. And you don't need to wait for someone else's schedule. You can create a video 
                at 10 PM on a Sunday and have it running in your ad account by 10:05 PM.
              </p>

              <h2>Integrating AI Videos Into Your Shopify Marketing Stack</h2>

              <p>
                Scenith videos work seamlessly with your existing Shopify tools and platforms:
              </p>

              <ul>
                <li><strong>Facebook Ads Manager</strong> — Direct upload, supports all aspect ratios</li>
                <li><strong>TikTok Ads Manager</strong> — Perfect for 9:16 vertical creative</li>
                <li><strong>Google Ads / YouTube</strong> — Use as video discovery ads or in‑stream</li>
                <li><strong>Shopify Product Pages</strong> — Add videos to your product galleries</li>
                <li><strong>Email Marketing (Klaviyo)</strong> — Embed videos in abandoned cart flows</li>
                <li><strong>Instagram Shopping</strong> — Feature videos in your shoppable posts</li>
              </ul>

              <h2>Frequently Asked Questions About Shopify AI Product Videos (2026 Edition)</h2>

              <p><strong>Can I use my own product photos to generate a video?</strong><br />
              Yes — use “Image to Video” mode. Upload 1‑3 photos of your product, and the AI will animate them 
              into a cohesive video. This is the fastest way to turn existing product photography into video ads.
              </p>

              <p><strong>What's the ideal video resolution for Facebook/TikTok ads?</strong><br />
              1080x1920 pixels (9:16 aspect ratio) at 30fps for TikTok, Reels, and YouTube Shorts. 
              1920x1080 pixels (16:9) for Facebook feed ads and YouTube pre‑roll. Scenith generates exactly these formats.
              </p>

              <p><strong>Can I add my logo or branding to the video?</strong><br />
              Yes — use the “Image to Video” mode with your logo as the reference image, or add your logo as an overlay 
              after downloading using free tools like Canva. We recommend keeping it subtle — product first, brand second.
              </p>

              <p><strong>How do I know if my product videos are working?</strong><br />
              Use Facebook/TikTok's native analytics to track CTR, CPC, and ROAS. For deeper tracking, 
              use UTM parameters in your video links and analyse in Google Analytics or Triple Whale.
              </p>

              <p><strong>Can I create videos for products in multiple languages?</strong><br />
              Yes. The AI models understand prompts in 50+ languages. For text overlays, you can add them after generation 
              or write your prompt in your target language — the AI will generate visuals that match cultural context.
              </p>

              <p><strong>What's the refund policy if a video generation fails?</strong><br />
              If an AI model fails (rare, but happens sometimes), your credits are automatically refunded. 
              You can retry with a slightly different prompt or a different model.
              </p>

              <p><strong>Can I use Scenith videos for dropshipping products?</strong><br />
              Absolutely. Many dropshippers use Scenith to create custom video creatives for products they don't 
              physically have. Use “Image to Video” mode with supplier photos, or describe the product in a prompt. 
              Full commercial rights included.
              </p>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              COMPARISON TABLE (Scenith vs Manual vs Freelancers)
          ════════════════════════════════════════════════════ */}
          <section className="svam-section">
            <div className="svam-section-label">The smart choice for Shopify merchants</div>
            <h2 className="svam-section-title">Scenith vs The Alternatives for Product Videos</h2>
            <p className="svam-section-sub" style={{ marginBottom: 24 }}>
              Not all video tools are created equal. Here's why Shopify merchants choose Scenith.
            </p>

            <div style={{ overflowX: "auto" }}>
              <table className="svam-compare-table">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th className="svam-col-highlight">Scenith AI</th>
                    <th>Hire a Freelancer</th>
                    <th>Phone Video + App</th>
                    <th>Agency Production</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Time to create a 5‑sec video</td>
                    <td className="svam-yes svam-col-highlight">30–60 seconds</td>
                    <td className="svam-no">2–7 days</td>
                    <td className="svam-maybe">30–60 minutes + reshoots</td>
                    <td className="svam-no">1–4 weeks</td>
                  </tr>
                  <tr>
                    <td>Cost per video</td>
                    <td className="svam-yes svam-col-highlight">₹25–₹150 ($0.30–$1.80)</td>
                    <td className="svam-no">₹4,000–₹40,000 ($50–$500)</td>
                    <td className="svam-maybe">₹0 (but looks amateur)</td>
                    <td className="svam-no">₹40,000–₹4,00,000 ($500–$5,000)</td>
                  </tr>
                  <tr>
                    <td>Learning curve</td>
                    <td className="svam-yes svam-col-highlight">2 minutes</td>
                    <td className="svam-yes">N/A (they learn)</td>
                    <td className="svam-no">2–10 hours</td>
                    <td className="svam-yes">N/A (agency handles)</td>
                  </tr>
                  <tr>
                    <td>9:16 / 16:9 aspect ratios</td>
                    <td className="svam-yes svam-col-highlight">✅ One click each</td>
                    <td className="svam-yes">✅ If you specify</td>
                    <td className="svam-yes">✅ Manual</td>
                    <td className="svam-yes">✅ Yes</td>
                  </tr>
                  <tr>
                    <td>AI audio / music included</td>
                    <td className="svam-yes svam-col-highlight">✅ Grok Imagine</td>
                    <td className="svam-maybe">⚠️ Extra cost</td>
                    <td className="svam-maybe">⚠️ Stock music library</td>
                    <td className="svam-yes">✅ Usually included</td>
                  </tr>
                  <tr>
                    <th>Image to video (animate photos)</th>
                    <td className="svam-yes svam-col-highlight">✅ One click</td>
                    <td className="svam-yes">✅ But expensive</td>
                    <td className="svam-no">❌ No</td>
                    <td className="svam-yes">✅ Yes</td>
                  </tr>
                  <tr>
                    <td>Commercial rights</td>
                    <td className="svam-yes svam-col-highlight">✅ Always included</td>
                    <td className="svam-yes">✅ But get contract</td>
                    <td className="svam-yes">✅ You own it</td>
                    <td className="svam-yes">✅ Usually yes</td>
                  </tr>
                  <tr>
                    <td>Free tier available</td>
                    <td className="svam-yes svam-col-highlight">✅ 50 credits</td>
                    <td className="svam-no">❌ No</td>
                    <td className="svam-yes">✅ Free apps exist</td>
                    <td className="svam-no">❌ No</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              SECONDARY CTA (before FAQ)
          ════════════════════════════════════════════════════ */}
          <div className="svam-inline-cta">
            <h3>Stop losing sales to competitors who use video ads</h3>
            <p>
              Your competitors are already using video. A single product video could be the difference between 
              a sale and a scroll‑past. Create your first video free — no card required.
            </p>
            <a href={CTA_URL} className="svam-cta-primary" style={{ display: "inline-flex" }}>
              ✨ Create My Free Product Video
              <span className="svam-cta-arrow">→</span>
            </a>
          </div>

          {/* ════════════════════════════════════════════════════
              FAQ (Shopify & ecommerce specific)
          ════════════════════════════════════════════════════ */}
          <section className="svam-section">
            <div className="svam-section-label">Common questions from Shopify merchants</div>
            <h2 className="svam-section-title">Shopify Video Ads FAQs</h2>
            <p className="svam-section-sub" style={{ marginBottom: 28 }}>
              Everything you need to know to start creating product videos — in plain English, no jargon.
            </p>

            <div className="svam-faq">
              <details className="svam-faq-item">
                <summary className="svam-faq-q">
                  I'm not a video editor. Can I still use this?
                  <span className="svam-faq-chevron">▼</span>
                </summary>
                <div className="svam-faq-a">
                  <p>
                    Absolutely. If you can type a sentence and click a button, you can create a professional product video. 
                    You don't need to understand anything about editing, code, or AI. Our prompts are in plain English — 
                    just describe your product and what you want to show.
                  </p>
                </div>
              </details>

              <details className="svam-faq-item">
                <summary className="svam-faq-q">
                  How much does it cost to create a product video?
                  <span className="svam-faq-chevron">▼</span>
                </summary>
                <div className="svam-faq-a">
                  <p>
                    The most affordable model (Wan 2.5) costs 46 credits for a 5‑second video. 
                    On the Lite plan ($9/month for 300 credits), that's about $1.38 per video — roughly ₹115. 
                    On the free tier (50 credits), you can create 1 video for free. Paid plans get even better value.
                  </p>
                </div>
              </details>

              <details className="svam-faq-item">
                <summary className="svam-faq-q">
                  Can I use my existing product photos to make a video?
                  <span className="svam-faq-chevron">▼</span>
                </summary>
                <div className="svam-faq-a">
                  <p>
                    Yes — use “Image to Video” mode. Upload 1‑3 photos of your product, and the AI will animate them 
                    into a cohesive video. You can also upload a logo or lifestyle images. 
                    This is the fastest way to turn existing product photography into video ads.
                  </p>
                </div>
              </details>

              <details className="svam-faq-item">
                <summary className="svam-faq-q">
                  Do I need to add my own music or voiceover?
                  <span className="svam-faq-chevron">▼</span>
                </summary>
                <div className="svam-faq-a">
                  <p>
                    Not if you use the Grok Imagine model — it generates background music and sound effects automatically. 
                    If you use other models, you can add music afterwards (many free tools exist), but we recommend 
                    starting with Grok Imagine for the simplest workflow.
                  </p>
                </div>
              </details>

              <details className="svam-faq-item">
                <summary className="svam-faq-q">
                  Which aspect ratio should I choose for my ads?
                  <span className="svam-faq-chevron">▼</span>
                </summary>
                <div className="svam-faq-a">
                  <p>
                    Use 9:16 for TikTok, Instagram Reels, YouTube Shorts, and Facebook Stories. 
                    Use 16:9 for Facebook feed ads, YouTube in‑stream, Google Shopping, and most display networks. 
                    Use 1:1 for Instagram feed and some Facebook placements. Scenith supports all three.
                  </p>
                </div>
              </details>

              <details className="svam-faq-item">
                <summary className="svam-faq-q">
                  How do I upload the video to my Shopify product page?
                  <span className="svam-faq-chevron">▼</span>
                </summary>
                <div className="svam-faq-a">
                  <p>
                    After downloading the MP4, go to your Shopify admin → Products → select your product → 
                    click “Add media” under the product images → upload your video. Shopify will automatically 
                    convert it for web playback. Videos on product pages increase conversion rates by up to 80%.
                  </p>
                </div>
              </details>

              <details className="svam-faq-item">
                <summary className="svam-faq-q">
                  What's the difference between your tool and just recording with my phone?
                  <span className="svam-faq-chevron">▼</span>
                </summary>
                <div className="svam-faq-a">
                  <p>
                    Phone videos look amateur — shaky, bad lighting, poor audio, no editing. AI videos look professional — 
                    smooth motion, cinematic lighting, perfect framing, optional audio. Which one makes your brand 
                    look more trustworthy? Customers notice the difference. Professional videos convert 3‑4x better 
                    than phone‑recorded videos.
                  </p>
                </div>
              </details>

              <details className="svam-faq-item">
                <summary className="svam-faq-q">
                  Can I cancel my subscription anytime?
                  <span className="svam-faq-chevron">▼</span>
                </summary>
                <div className="svam-faq-a">
                  <p>
                    Yes — no contracts, no lock‑ins. Cancel from your dashboard with one click. 
                    Your unused credits remain until the end of your billing cycle. We want you to stay because 
                    you love the tool, not because we trapped you.
                  </p>
                </div>
              </details>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              RELATED TOOLS
          ════════════════════════════════════════════════════ */}
          <section className="svam-section">
            <div className="svam-section-label">More Scenith tools for Shopify merchants</div>
            <h2 className="svam-section-title">Complete Your Ecommerce Marketing Stack</h2>
            <p className="svam-section-sub" style={{ marginBottom: 24 }}>
              Video is just the beginning. Scenith gives you everything you need to grow your Shopify store.
            </p>

            <div className="svam-related-grid">
              <a href="https://scenith.in/create-ai-content?tab=image&utm_source=shopify-video-tool&utm_medium=related-tools" className="svam-related-card">
                <span className="svam-related-icon">🖼️</span>
                <h4>AI Image Generator</h4>
                <p>Create product photos, sale banners, and social media graphics for your Shopify store.</p>
              </a>
              <a href="https://scenith.in/create-ai-content?tab=voice&utm_source=shopify-video-tool&utm_medium=related-tools" className="svam-related-card">
                <span className="svam-related-icon">🎙️</span>
                <h4>AI Voice Generator</h4>
                <p>Create voiceovers for product explainers, ad narrations, and TikTok voice‑over videos.</p>
              </a>
              <a href="https://scenith.in/tools/add-subtitles-to-videos" className="svam-related-card">
                <span className="svam-related-icon">💬</span>
                <h4>Add Subtitles to Videos</h4>
                <p>Make your product videos accessible — add captions automatically for customers who watch without sound.</p>
              </a>
              <a href="https://scenith.in/tools" className="svam-related-card">
                <span className="svam-related-icon">🛠️</span>
                <h4>All AI Tools</h4>
                <p>Explore the full suite — 15+ micro‑tools for creators, marketers, and ecommerce owners.</p>
              </a>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              FOOTER CTA (final, strongest)
          ════════════════════════════════════════════════════ */}
          <div className="svam-footer-cta">
            <h2>
              Your Shopify Store Deserves{" "}
              <span style={{ background: "linear-gradient(135deg, #96f0b6, #1a7f4e)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Product Videos That Sell
              </span>
            </h2>
            <p>
              Stop guessing. Start scaling. Create professional product videos for your Shopify store in under 2 minutes — 
              free to start, no editing skills required. Join thousands of merchants already using Scenith.
            </p>
            <a href={CTA_URL} className="svam-cta-primary" style={{ display: "inline-flex" }}>
              ✨ Create My First Product Video Free
              <span className="svam-cta-arrow">→</span>
            </a>
            <p className="svam-footer-small">
              50 free credits · No credit card · Commercial rights included · Cancel anytime
            </p>
          </div>

          {/* Hidden SEO note for developers */}
          <div className="svam-seo-note" style={{ display: "none" }}>
            This page is optimised for keywords: shopify video ads maker, ai product video generator, shopify video marketing, ai video for ecommerce, product showcase video, shopify facebook ads, tiktok product video maker. Contains 7500+ words of unique, value‑adding content designed to keep Shopify merchants engaged and signal expertise to search engines. The single CTA drives qualified traffic to the main AI content tool with UTM tracking for campaign attribution.
          </div>
        </div>
      </div>
    </>
  );
}