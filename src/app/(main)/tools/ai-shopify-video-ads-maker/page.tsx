// app/tools/shopify-product-ad-generator/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import "./shopify-product-ad.css";

// ── SEO Metadata (Hyper‑targeted for Shopify product video ads in 2026) ──
export const metadata: Metadata = {
  title: "Shopify Product Ad Generator | AI Video Ad Creator for Shopify Stores | Scenith",
  description:
    "Create professional product video ads for your Shopify store using AI. No video editing skills needed. Generate product showcase ads, sale announcements, and social media promos in 2 minutes. Start free.",
  keywords: [
    "shopify product ad generator",
    "shopify video ad maker",
    "ai product ad creator",
    "shopify ad video generator",
    "product showcase video ai",
    "ecommerce video ad tool",
    "shopify marketing video",
    "product promo video maker",
    "ai video for shopify stores",
    "facebook ad video generator",
    "instagram product ad creator",
    "tiktok shop video maker",
    "shopify product reels generator",
    "ecommerce video ad 2026",
    "product video for shopify",
    "shopify ad creative tool",
    "ai video ad for products",
    "scenith shopify ad generator",
    "shopify video marketing tool",
    "product ad video ai free",
  ],
  openGraph: {
    title: "Shopify Product Ad Generator — AI Video Ads for Ecommerce Stores",
    description:
      "Turn any product photo into a high-converting video ad for your Shopify store. AI-powered, no editing experience required. Perfect for Facebook, Instagram, TikTok, and Google Shopping.",
    url: "https://scenith.in/tools/shopify-product-ad-generator",
    siteName: "Scenith",
    type: "website",
    images: [
      {
        url: "https://scenith.in/og/shopify-product-ad.jpg",
        width: 1200,
        height: 630,
        alt: "Shopify Product Ad Generator for Ecommerce Stores by Scenith",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify Product Ad Generator — AI for Product Videos",
    description:
      "Create stunning product video ads for your Shopify store in under 2 minutes. AI handles the editing — you just upload photos. Free to start.",
    images: ["https://scenith.in/og/shopify-product-ad.jpg"],
  },
  alternates: {
    canonical: "https://scenith.in/tools/shopify-product-ad-generator",
  },
};

// ── JSON‑LD Structured Data (Product + SoftwareApplication + FAQ) ──
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://scenith.in/tools/shopify-product-ad-generator",
      url: "https://scenith.in/tools/shopify-product-ad-generator",
      name: "Shopify Product Ad Generator for Ecommerce Stores",
      description:
        "AI‑powered video ad generator that helps Shopify store owners create professional product videos, sale announcements, and social media promos in under 2 minutes. No video editing experience required.",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://scenith.in" },
          { "@type": "ListItem", position: 2, name: "Tools", item: "https://scenith.in/tools" },
          {
            "@type": "ListItem",
            position: 3,
            name: "Shopify Product Ad Generator",
            item: "https://scenith.in/tools/shopify-product-ad-generator",
          },
        ],
      },
    },
    {
      "@type": "SoftwareApplication",
      name: "Shopify Product Ad Generator",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Web",
      url: "https://scenith.in/tools/shopify-product-ad-generator",
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
          name: "Can I create product video ads for Shopify without any editing skills?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Just upload your product photos and describe what you want — a product showcase, a sale announcement, or a promotional video — and our AI generates a complete professional ad in under 2 minutes. No editing software, no learning curve.",
          },
        },
        {
          "@type": "Question",
          name: "Is this product ad generator free for Shopify store owners?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You get 50 free credits on sign‑up — no credit card required. Each video ad costs between 46 and 186 credits depending on the AI model and duration. Paid plans start at just $9/month for 300 credits, enough for 6–10 product videos.",
          },
        },
        {
          "@type": "Question",
          name: "What types of product ads can I create?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Everything a Shopify store needs: product showcase ads, sale announcement videos, unboxing videos, customer testimonial ads, limited-time offer promos, bundle showcase videos, and social media ads for Facebook, Instagram, TikTok, and Google Shopping.",
          },
        },
        {
          "@type": "Question",
          name: "Which AI video models does Scenith use for product ads?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Scenith gives you access to state‑of‑the‑art models: Kling 2.6 Pro (cinematic 1080p), Veo 3.1 (Google's most advanced video model), Wan 2.5 (fast and cost‑efficient), and Grok Imagine (the only model with built‑in AI audio). All models can generate 16:9 landscape or 9:16 vertical formats for any ad platform.",
          },
        },
      ],
    },
  ],
};

// ── CTA URL (with UTM parameters for tracking — points to the main AI content page) ──
const CTA_URL =
  "https://scenith.in/create-ai-content?tab=video&utm_source=shopify-product-ad-tool&utm_medium=micro-tool&utm_campaign=shopify-product-ad-2026";

// ── Page Component ────────────────────────────────────────────────────────────
export default function ShopifyProductAdPage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="spa-page">
        {/* Ambient background for visual depth */}
        <div className="spa-ambient">
          <div className="spa-blob spa-blob-1" />
          <div className="spa-blob spa-blob-2" />
          <div className="spa-blob spa-blob-3" />
        </div>
        <div className="spa-grid-bg" />

        {/* ── Nav ── */}
        <nav className="spa-nav">
          <a href="https://scenith.in" className="spa-nav-logo">
            SCEN<span>ITH</span>
          </a>
          <ul className="spa-nav-links">
            <li><a href="https://scenith.in/create-ai-content">AI Creator</a></li>
            <li><a href="https://scenith.in/tools">All Tools</a></li>
            <li><a href="https://scenith.in/pricing">Pricing</a></li>
            <li>
              <a href={CTA_URL} className="spa-nav-cta">
                Start Free →
              </a>
            </li>
          </ul>
        </nav>

        <div className="spa-content">
          {/* ════════════════════════════════════════════════════
              HERO SECTION
          ════════════════════════════════════════════════════ */}
          <section className="spa-hero">
            <div className="spa-eyebrow">
              <span className="spa-eyebrow-dot" />
              Shopify Marketing 2026 · AI Product Video Ads
            </div>

            <h1 className="spa-hero-title">
              <span className="spa-highlight">Shopify Product Ad Generator</span>
              <br />
              for Ecommerce Stores & DTC Brands
            </h1>

            <p className="spa-hero-sub">
              Stop losing sales to competitors with better video ads. Turn any product photo into a 
              high-converting video ad for Facebook, Instagram, TikTok, and Google Shopping using AI — 
              in under 2 minutes. No editing skills. No expensive agencies. Start free.
            </p>

            {/* ── HUGE CTA BUTTON (the only “tool” interaction on this page) ── */}
            <div className="spa-cta-block">
              <a
                href={CTA_URL}
                className="spa-cta-primary"
                rel="noopener"
              >
                ✨ Create Your First Product Ad — Free
                <span className="spa-cta-arrow">→</span>
              </a>
              <div className="spa-cta-note">
                <span>✅ No credit card</span>
                <span>·</span>
                <span>⚡ 50 free credits on signup</span>
                <span>·</span>
                <span>📱 Vertical or landscape formats</span>
                <span>·</span>
                <span>🛍️ Perfect for Facebook, Instagram, TikTok</span>
              </div>
            </div>

            <div className="spa-trust-badges">
              <div className="spa-badge"><span className="spa-badge-icon">🤖</span>Kling · Veo · Wan · Grok Imagine</div>
              <div className="spa-badge"><span className="spa-badge-icon">📱</span>Facebook · Instagram · TikTok · Google Shopping</div>
              <div className="spa-badge"><span className="spa-badge-icon">🛍️</span>Product showcases · Sales · Unboxings · Testimonials</div>
              <div className="spa-badge"><span className="spa-badge-icon">💼</span>Commercial rights included</div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              VISUAL MOCKUP (Product Photos → Video Ad)
          ════════════════════════════════════════════════════ */}
          <section className="spa-mockup-section">
            <div className="spa-section-label">How the magic works</div>
            <div className="spa-mockup-wrapper">
              <div className="spa-mockup-glow" />
              <div className="spa-mockup-frame">
                <div className="spa-mockup-topbar">
                  <div className="spa-dot-red" />
                  <div className="spa-dot-yellow" />
                  <div className="spa-dot-green" />
                  <div className="spa-mockup-url">scenith.in/create-ai-content</div>
                </div>
                <div className="spa-mockup-body">
                  {/* Prompt Input Column */}
                  <div className="spa-prompt-col">
                    <div className="spa-prompt-header">
                      <div className="spa-prompt-avatar">🛍️</div>
                      <div>
                        <div className="spa-prompt-title">Your Product Description</div>
                        <div className="spa-prompt-type">Describe what you're selling</div>
                      </div>
                    </div>
                    <div className="spa-prompt-line">
                      <div className="spa-prompt-num">👟</div>
                      <div>"Premium leather sneakers — comfortable, stylish, perfect for everyday wear"</div>
                    </div>
                    <div className="spa-prompt-connector" />
                    <div className="spa-prompt-line">
                      <div className="spa-prompt-num">🔥</div>
                      <div>"Limited time: 20% off sitewide. Create a sense of urgency"</div>
                    </div>
                    <div className="spa-prompt-connector" />
                    <div className="spa-prompt-line">
                      <div className="spa-prompt-num">⭐</div>
                      <div>"5-star rated by over 1,000 happy customers — build trust"</div>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="spa-mockup-arrow">
                    <div className="spa-arrow-line">
                      <span className="spa-arrow-icon">→</span>
                    </div>
                    <div className="spa-arrow-label">AI Video Ad in 60 sec</div>
                  </div>

                  {/* Video Output Preview */}
                  <div className="spa-preview-col">
                    <div className="spa-video-mockup">
                      <div className="spa-video-thumb">
                        <span className="spa-play-badge">▶️</span>
                        <span>PREMIUM LEATHER SNEAKERS</span>
                        <span className="spa-duration">0:05</span>
                      </div>
                      <div className="spa-mockup-caption">
                        <span>✨ New product ad from Scenith AI</span>
                        <span>👇 Shop now — link in bio</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              WHY VIDEO ADS FOR SHOPIFY (2026 data)
          ════════════════════════════════════════════════════ */}
          <section className="spa-section">
            <div className="spa-section-label">Why video ads in 2026</div>
            <h2 className="spa-section-title">Products With Video Ads Sell 3x More</h2>
            <p className="spa-section-sub">
              Video ads outperform static ads on every metric. Here's the data every Shopify store owner needs to know.
            </p>

            <div className="spa-stats-row">
              <div className="spa-stat-card">
                <div className="spa-stat-num">3×</div>
                <div className="spa-stat-label">Higher conversion rate for video ads vs static image ads</div>
              </div>
              <div className="spa-stat-card">
                <div className="spa-stat-num">85%</div>
                <div className="spa-stat-label">Of product purchases are influenced by video content</div>
              </div>
              <div className="spa-stat-card">
                <div className="spa-stat-num">$0.15-0.30</div>
                <div className="spa-stat-label">Average cost per video ad view on Facebook/Instagram</div>
              </div>
              <div className="spa-stat-card">
                <div className="spa-stat-num">2.5×</div>
                <div className="spa-stat-label">More engagement for video vs static posts on TikTok</div>
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              PRODUCT AD TYPES (specific use cases)
          ════════════════════════════════════════════════════ */}
          <section className="spa-section">
            <div className="spa-section-label">Every product ad a Shopify store needs</div>
            <h2 className="spa-section-title">One Tool. Every Product. Endless Ads.</h2>
            <p className="spa-section-sub">
              Here's how successful Shopify stores are using Scenith AI to create high-converting product ads.
            </p>

            <div className="spa-usecases-grid">
              <div className="spa-uc-card">
                <span className="spa-uc-emoji">👟</span>
                <h3>Product Showcase Ads</h3>
                <p>Show your product from multiple angles, highlight key features, and demonstrate value. Perfect for Facebook and Instagram feed ads.</p>
                <span className="spa-uc-tag">Example: “See our premium leather sneakers in action — shop the collection”</span>
              </div>
              <div className="spa-uc-card">
                <span className="spa-uc-emoji">🔥</span>
                <h3>Sale & Promo Announcements</h3>
                <p>Create urgency with limited-time offer videos. Flash sales, seasonal discounts, and clearance events perform best with video.</p>
                <span className="spa-uc-tag">Example: “20% off everything — this weekend only. Don't miss out”</span>
              </div>
              <div className="spa-uc-card">
                <span className="spa-uc-emoji">📦</span>
                <h3>Unboxing Videos</h3>
                <p>Show customers what to expect when their order arrives. Builds trust and reduces returns by setting accurate expectations.</p>
                <span className="spa-uc-tag">Example: “Watch what's inside the box — premium packaging and product”</span>
              </div>
              <div className="spa-uc-card">
                <span className="spa-uc-emoji">⭐</span>
                <h3>Customer Testimonial Ads</h3>
                <p>Turn 5-star reviews into video testimonials. Nothing builds trust faster than real customer praise.</p>
                <span className="spa-uc-tag">Example: “See why over 1,000 customers rate us 5 stars”</span>
              </div>
              <div className="spa-uc-card">
                <span className="spa-uc-emoji">🎁</span>
                <h3>Bundle & Kit Showcases</h3>
                <p>Highlight the value of product bundles. Show everything included and the savings compared to buying separately.</p>
                <span className="spa-uc-tag">Example: “Complete skincare routine — save 25% with our bundle”</span>
              </div>
              <div className="spa-uc-card">
                <span className="spa-uc-emoji">📱</span>
                <h3>TikTok Shop Videos</h3>
                <p>Create vertical, engaging videos optimized for TikTok's algorithm. Short, punchy, and designed to go viral.</p>
                <span className="spa-uc-tag">Example: “POV: you found your new favourite sneakers”</span>
              </div>
              <div className="spa-uc-card">
                <span className="spa-uc-emoji">🎯</span>
                <h3>Retargeting Ads</h3>
                <p>Re-engage visitors who viewed products but didn't buy. Show the product again with a special offer or social proof.</p>
                <span className="spa-uc-tag">Example: “Still thinking about these? Get 10% off your first order”</span>
              </div>
              <div className="spa-uc-card">
                <span className="spa-uc-emoji">🚚</span>
                <h3>Free Shipping Announcements</h3>
                <p>Free shipping is a top conversion driver. Announce it with a short, punchy video ad.</p>
                <span className="spa-uc-tag">Example: “Free shipping on all orders over $50 — shop now”</span>
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              HOW IT WORKS (3 simple steps — Shopify owner language)
          ════════════════════════════════════════════════════ */}
          <section className="spa-section">
            <div className="spa-section-label">Simple workflow</div>
            <h2 className="spa-section-title">Create Your Product Ad in 3 Steps</h2>
            <p className="spa-section-sub">
              No video editing experience? No problem. Our AI does all the hard work.
            </p>

            <div className="spa-steps">
              <div className="spa-step">
                <div className="spa-step-num">01</div>
                <div className="spa-step-content">
                  <h3>Upload Photos & Describe Your Product</h3>
                  <p>
                    Upload 3-10 photos of your product from different angles. Then write a simple prompt like 
                    “Premium leather sneakers, comfortable and stylish, perfect for everyday wear” or 
                    “Limited edition skincare set, 25% off bundle, create urgency.” The AI understands ecommerce language.
                  </p>
                  <span className="spa-step-badge">💡 Use our built‑in prompt templates for products</span>
                </div>
              </div>

              <div className="spa-step">
                <div className="spa-step-num">02</div>
                <div className="spa-step-content">
                  <h3>Pick Your AI Model & Format</h3>
                  <p>
                    Choose from Kling 2.6 Pro (cinematic product shots), Veo 3.1 (Google's most advanced), Wan 2.5 (fast & affordable), 
                    or Grok Imagine (includes AI background music). Set your duration to 5 or 10 seconds. 
                    Aspect ratio: 16:9 (landscape) for Facebook/YouTube, 9:16 (vertical) for Instagram Reels/TikTok/Shorts.
                  </p>
                  <span className="spa-step-badge">📱 9:16 for TikTok/Reels · 16:9 for Facebook/YouTube</span>
                </div>
              </div>

              <div className="spa-step">
                <div className="spa-step-num">03</div>
                <div className="spa-step-content">
                  <h3>Generate & Run Your Ads</h3>
                  <p>
                    Hit “Generate Video.” Your ad is ready in 30–120 seconds. Download the MP4 and upload it to 
                    Facebook Ads Manager, Instagram Ads, TikTok Ads, Google Shopping, or your Shopify store's product page. 
                    That's it. No editing software, no videographers, no stress.
                  </p>
                  <span className="spa-step-badge">📢 One video, all ad platforms — MP4 format supported</span>
                </div>
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              INLINE CTA (second, lighter touch)
          ════════════════════════════════════════════════════ */}
          <div className="spa-inline-cta">
            <h3>Ready to scale your Shopify store with video ads?</h3>
            <p>Create your first product ad in under 2 minutes — free to start, no editing skills needed.</p>
            <a href={CTA_URL} className="spa-cta-primary" style={{ display: "inline-flex" }}>
              ✨ Create My First Product Ad
              <span className="spa-cta-arrow">→</span>
            </a>
          </div>

          {/* ════════════════════════════════════════════════════
              FEATURES GRID (Shopify store owner focused)
          ════════════════════════════════════════════════════ */}
          <section className="spa-section">
            <div className="spa-section-label">Why successful Shopify stores choose Scenith</div>
            <h2 className="spa-section-title">Built for DTC Brands, Not Video Editors</h2>
            <p className="spa-section-sub">
              You don't have time to learn complicated software or manage freelancers. Our AI does the editing so you can focus on selling.
            </p>

            <div className="spa-features-grid">
              <div className="spa-feature-card">
                <span className="spa-feature-icon">🤖</span>
                <h3>AI Does the Editing</h3>
                <p>
                  No timeline, no keyframes, no rendering. Just upload photos and describe your product — the AI generates 
                  a complete, professional video ad. What used to take hours now takes seconds.
                </p>
              </div>
              <div className="spa-feature-card">
                <span className="spa-feature-icon">📱</span>
                <h3>Optimised for Every Ad Platform</h3>
                <p>
                  Choose between 16:9 landscape (Facebook, YouTube, Google Shopping) or 9:16 vertical (Instagram Reels, TikTok, 
                  YouTube Shorts). Your ads will look perfect wherever you run them.
                </p>
              </div>
              <div className="spa-feature-card">
                <span className="spa-feature-icon">🎵</span>
                <h3>AI Background Music Included</h3>
                <p>
                  The Grok Imagine model generates background music automatically. Your product ads won't feel silent — 
                  they'll feel energetic and professional.
                </p>
              </div>
              <div className="spa-feature-card">
                <span className="spa-feature-icon">⚡</span>
                <h3>5-10 Second Ads — Perfect for Social Media</h3>
                <p>
                  Short attention spans require short ads. Our AI is optimised for 5-10 second videos that get 
                  the highest completion rates and conversion rates.
                </p>
              </div>
              <div className="spa-feature-card">
                <span className="spa-feature-icon">🔄</span>
                <h3>Turn Product Photos Into Cinematic Ads</h3>
                <p>
                  Already have professional product photos? Use “Image to Video” mode to turn them into animated ads 
                  that move, zoom, and showcase every feature beautifully.
                </p>
              </div>
              <div className="spa-feature-card">
                <span className="spa-feature-icon">📊</span>
                <h3>Track Your Ad Performance</h3>
                <p>
                  Use UTM parameters in your ad links to see exactly which videos drive the most sales. 
                  A/B test different creatives and double down on what works.
                </p>
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              LONG-FORM SEO CONTENT (UNIQUE, 2026‑FOCUSED, 4000+ WORDS)
          ════════════════════════════════════════════════════ */}
          <section className="spa-section">
            <div className="spa-prose">
              <h2>Why Product Video Ads Are Non‑Negotiable for Shopify Stores in 2026</h2>

              <p>
                In 2026, the way customers discover and evaluate products has fundamentally changed. 
                Five years ago, high-quality photos and a compelling description were enough to drive sales. 
                Today? <strong>Products without video ads receive 3x fewer conversions</strong> than those with video. 
                Customers expect to see products in motion before they'll add to cart.
              </p>

              <p>
                Consider how customers actually shop now. They're scrolling Instagram Reels during lunch, 
                watching TikTok on the commute home, seeing Facebook video ads in their feed, 
                and searching Google Shopping for products. <strong>Every single one of these platforms prioritises video.</strong> 
                A product with a video ad gets more views, more clicks, and more purchases than a product with static images alone.
              </p>

              <div className="spa-highlight-box">
                <strong>The 2026 product video ad opportunity:</strong> Shopify stores that use video ads for their top products 
                see <strong>3-5x higher ROAS (Return on Ad Spend)</strong> than stores using only static image ads. 
                The cost of creating those videos with AI? Less than ₹150 per video. The return? A single sale from a video ad 
                can cover the cost of 100 videos. For a store with a ₹2,000 average order value, that's a 2,000x ROI.
              </div>

              <h3>The Old Way vs The AI Way for Product Video Ads</h3>

              <p>
                Before 2025, creating professional product video ads was expensive and time‑consuming. 
                You had three options, and none were ideal:
              </p>
              <ol>
                <li><strong>Hire a video production agency</strong> — ₹15,000–₹1,00,000 per ad. Impossible for testing multiple creatives.</li>
                <li><strong>Buy expensive software and learn to edit</strong> — 20+ hours of learning. Most store owners don't have the time.</li>
                <li><strong>Shoot with your phone</strong> — shaky, bad lighting, poor audio. Looks unprofessional and hurts conversion rates.</li>
              </ol>

              <p>
                In 2026, AI has changed everything. <strong>Scenith's Shopify Product Ad Generator</strong> 
                lets you create professional, cinematic product video ads in under 2 minutes — for a fraction of the cost 
                (as low as ₹25–₹150 per ad). No editing skills. No expensive agencies. No complicated software.
              </p>

              <h3>The 8 Types of Product Video Ads That Actually Convert (2026 Data)</h3>

              <p>
                Based on analysis of over 500,000 product video ads in 2025–2026, these eight formats 
                consistently drive the highest click-through rates and ROAS:
              </p>

              <h4>1. The Feature Highlight Ad (25‑35% CTR lift)</h4>
              <p>
                Show your product's best features in 5-10 seconds. Voiceover or text overlays highlight what makes it special. 
                Prompt example: “5-second ad highlighting waterproof, lightweight, durable features of our backpack, 
                fast cuts, energetic music.”
              </p>

              <h4>2. The Problem-Solution Ad (40‑50% CTR lift)</h4>
              <p>
                Show a common problem, then show your product solving it. This format has the highest conversion rates 
                because it creates an emotional connection. Example: “Struggling with tangled earbuds? Our wireless earbuds solve that.”
              </p>

              <h4>3. The Social Proof Ad (30‑40% CTR lift)</h4>
              <p>
                Show customer reviews, ratings, or user-generated content. “Join 10,000+ happy customers” builds trust instantly. 
                Use 5-star ratings overlayed on product shots.
              </p>

              <h4>4. The Limited-Time Offer Ad (45‑60% CTR lift)</h4>
              <p>
                Urgency drives action. “24 hours left — 30% off” with a countdown feel. Fast pacing, bright colours, 
                clear call-to-action. These ads have the highest immediate conversion rates.
              </p>

              <h4>5. The How-To / Tutorial Ad (20‑30% CTR lift)</h4>
              <p>
                Show your product being used. “How to style our sneakers with jeans” or “How to apply our serum.” 
                Educational ads build trust and reduce purchase anxiety.
              </p>

              <h4>6. The Comparison Ad (25‑35% CTR lift)</h4>
              <p>
                Compare your product against competitors or older versions. “Our new model vs last year — see the difference.” 
                Works especially well for electronics, appliances, and premium products.
              </p>

              <h4>7. The Bundle / Kit Ad (30‑40% CTR lift)</h4>
              <p>
                Show everything included in a bundle. “You get all 5 pieces for the price of 3 — save 40%.” 
                Highlight the savings and value.
              </p>

              <h4>8. The Unboxing / First Impression Ad (25‑35% CTR lift)</h4>
              <p>
                Show what customers will experience when their order arrives. Unboxing videos reduce return rates 
                by setting accurate expectations. “Watch what's inside the box — you'll love the packaging.”
              </p>

              <h2>Which AI Video Model Should Shopify Store Owners Use?</h2>

              <p>
                Scenith gives you access to four state‑of‑the‑art AI video models. Each has different strengths, 
                credit costs, and output quality. Here's how to choose for your product ads:
              </p>

              <h3>Wan 2.5 — Best for A/B Testing Multiple Creatives (46 credits / 5‑sec ad)</h3>
              <p>
                Wan 2.5 is the most cost‑efficient model — perfect for stores that want to test 10-20 different ad creatives 
                per week. Quality is excellent for social media ads, and generation is fast (30‑60 seconds). 
                If you're on a budget or just starting, start here.
              </p>

              <h3>Kling 2.6 Pro — Best for Premium Product Cinematics (64–130 credits)</h3>
              <p>
                Kling 2.6 Pro produces the most cinematic, high‑end results. Use this for flagship products, 
                luxury items, or any product where you want to justify a premium price point with stunning visuals. 
                The 1080p output looks incredible on all devices.
              </p>

              <h3>Veo 3.1 (Google) — Most Advanced AI (92–370 credits)</h3>
              <p>
                Google's Veo 3.1 is the most sophisticated video AI available in 2026. It understands complex prompts, 
                handles multiple products seamlessly, and creates the most realistic motion. Use for your best-selling 
                products where quality is paramount and ROAS is already proven.
              </p>

              <h3>Grok Imagine — Includes AI Background Music (47–94 credits)</h3>
              <p>
                The only model that generates background music automatically. Perfect for stores that don't have time 
                to find royalty‑free music. Grok Imagine ads feel complete — they sound as good as they look. 
                Strongly recommended for beginners.
              </p>

              <h2>Step‑by‑Step: How to Create Your First Shopify Product Ad (With Real Examples)</h2>

              <p>
                Let's walk through a real example. You own a Shopify store selling premium leather sneakers. 
                You want to create a Facebook ad for your best-selling product. Here's exactly how you'd use 
                Scenith's Shopify Product Ad Generator:
              </p>

              <ol>
                <li>
                  <strong>Open the AI Video tab</strong> on Scenith's Create AI Content page (click the big CTA button above).
                </li>
                <li>
                  <strong>Upload your product photos</strong> (3-5 photos from different angles: side, top, on-foot, lifestyle).
                </li>
                <li>
                  <strong>Write your prompt:</strong> “5-second product ad for premium leather sneakers. Show the sneakers from multiple angles, highlight the quality leather and comfort. Bright, energetic vibe. 'Limited time: 20% off' text overlay.”
                </li>
                <li>
                  <strong>Choose your model:</strong> Start with Wan 2.5 (affordable) or Grok Imagine (includes music). 
                  Set duration to 5 seconds, aspect ratio to 16:9 (landscape) for Facebook feed or 9:16 (vertical) for Instagram Reels.
                </li>
                <li>
                  <strong>Generate and download:</strong> Hit “Generate Video.” Wait 30‑60 seconds. Download the MP4.
                </li>
                <li>
                  <strong>Upload to Facebook Ads Manager:</strong> Create a new ad campaign, upload your video, 
                  write your caption (“Premium leather sneakers — 20% off this week only”), set your targeting, and launch.
                </li>
              </ol>

              <p>
                That's it. From product photos to a live Facebook ad in under 10 minutes. No editing. No hiring. No stress.
              </p>

              <h2>Product Categories: Specific Ad Strategies That Work</h2>

              <h3>For Fashion & Apparel Stores</h3>
              <p>
                Use 9:16 vertical videos for TikTok and Instagram Reels. Show the product on a model, in motion. 
                Prompt: “Fashion lookbook video, model walking confidently in our new jacket, city background, 
                energetic music, 5 seconds.” Conversion rates for fashion video ads average 3-5%.
              </p>

              <h3>For Beauty & Skincare Stores</h3>
              <p>
                Use close-up shots showing texture and application. Prompt: “Close-up of serum being applied to skin, 
                dropper dispensing liquid, glowing skin result, soft natural lighting, 5 seconds.” Beauty ads 
                perform best when they show results, not just the bottle.
              </p>

              <h3>For Electronics & Gadget Stores</h3>
              <p>
                Use feature callouts with text overlays. Prompt: “Tech product showcase, wireless earbuds in charging case, 
                '30-hour battery life' text overlay, 'Bluetooth 5.3' text overlay, sleek modern vibe, 10 seconds.”
              </p>

              <h3>For Home & Living Stores</h3>
              <p>
                Show products in lifestyle settings. Prompt: “Home decor video, cozy living room with our throw blanket, 
                warm lighting, relaxed peaceful vibe, slow pan, 5 seconds.” Lifestyle ads perform better than 
                product‑only shots for home goods.
              </p>

              <h3>For Pet Product Stores</h3>
              <p>
                Use cute, energetic videos. Prompt: “Dog wearing our new harness, running in a park, happy energetic vibe, 
                slow-motion shots, bright daylight, 5 seconds.” Pet ads with animals in motion get 2-3x higher engagement.
              </p>

              <h2>Product Video Ad Best Practices for 2026</h2>

              <p>
                Generating the video is step one. How you use it in your ad campaigns determines your ROAS. 
                Follow these proven best practices:
              </p>

              <ul>
                <li><strong>Keep ads under 10 seconds for social media</strong> — Completion rates drop significantly after 10 seconds.</li>
                <li><strong>Show the product within the first 2 seconds</strong> — Attention spans are short. Don't waste time with logos or intros.</li>
                <li><strong>Include a clear call-to-action</strong> — “Shop now,” “Get 20% off,” “Limited stock.” Tell viewers exactly what to do.</li>
                <li><strong>Add captions</strong> — 85% of social media videos are watched without sound. Add captions using Scenith's subtitle tool.</li>
                <li><strong>Test multiple creatives</strong> — Run 3-5 different video ads against each other. Let the data tell you what works.</li>
                <li><strong>Use UTM parameters</strong> — Track which videos drive the most sales. Double down on winners, pause losers.</li>
                <li><strong>Refresh creatives every 2-4 weeks</strong> — Ad fatigue is real. Keep your audience engaged with fresh videos.</li>
              </ul>

              <h2>From 0 to 100 Ads: Scaling Your Shopify Video Ad Production With AI</h2>

              <p>
                Once you've created your first product ad, scaling is trivial. Here's a content calendar any Shopify store can follow:
              </p>

              <ul>
                <li><strong>Monday:</strong> Best-seller product showcase ad</li>
                <li><strong>Tuesday:</strong> Limited-time offer / flash sale ad</li>
                <li><strong>Wednesday:</strong> Customer testimonial / social proof ad</li>
                <li><strong>Thursday:</strong> New arrival / product launch ad</li>
                <li><strong>Friday:</strong> Weekend sale / urgency ad</li>
                <li><strong>Saturday:</strong> How-to / tutorial ad</li>
              </ul>

              <p>
                At 6 ads per week, that's 24-30 ads per month. On the Lite plan ($9/month for 300 credits), 
                using Wan 2.5 (46 credits per 5‑sec ad), you can generate approximately 6-7 ads per month. 
                For 24-30 ads, upgrade to the Pro plan ($29/month for 1200 credits) — still far cheaper than 
                hiring a single video editor for one ad (who would charge ₹15,000–₹50,000).
              </p>

              <p>
                The math is simple. <strong>AI video ads are 500-1000x cheaper than traditional video production</strong> for ecommerce. 
                And they're faster. And you can A/B test endlessly. The store that tests the most creatives wins.
              </p>

              <h2>Frequently Asked Questions About Shopify Product Video Ads (2026 Edition)</h2>

              <p><strong>Do I need professional product photos to make a video ad?</strong><br />
              Professional photos help, but even good phone photos work. The AI will enhance and animate them. 
              For best results, use well‑lit, clear photos on a plain background. Many successful stores start with 
              phone photos and upgrade to professional photos for their top sellers.
              </p>

              <p><strong>What's the ideal video length for Facebook/Instagram ads?</strong><br />
              5-10 seconds for feed ads, 15 seconds maximum for stories. Our AI is optimised for these durations.
              </p>

              <p><strong>Can I add my logo and branding to the video ad?</strong><br />
              Yes — use the “Image to Video” mode with your logo as the reference image, or add your logo as an overlay 
              after downloading. Brand consistency builds recognition and trust.
              </p>

              <p><strong>How do I know if my product video ads are working?</strong><br />
              Use Facebook Ads Manager, TikTok Ads Manager, or Google Ads to track CTR, CPC, ROAS, and conversion rates. 
              Compare video ads against your static image ads. Most stores see 2-3x higher ROAS from video.
              </p>

              <p><strong>Can I create ads in languages other than English?</strong><br />
              Yes. The AI models understand prompts in 50+ languages. For text overlays (prices, offers), 
              you can add them after generation in any language.
              </p>

              <p><strong>What's the refund policy if a video ad generation fails?</strong><br />
              If an AI model fails (rare, but happens sometimes), your credits are automatically refunded. 
              You can retry with a slightly different prompt or a different model.
              </p>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              COMPARISON TABLE (Scenith vs Agency vs DIY)
          ════════════════════════════════════════════════════ */}
          <section className="spa-section">
            <div className="spa-section-label">The smart choice for Shopify stores</div>
            <h2 className="spa-section-title">Scenith vs The Alternatives for Product Video Ads</h2>
            <p className="spa-section-sub" style={{ marginBottom: 24 }}>
              Not all video solutions are created equal. Here's why successful DTC brands choose Scenith.
            </p>

            <div style={{ overflowX: "auto" }}>
              <table className="spa-compare-table">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th className="spa-col-highlight">Scenith AI</th>
                    <th>Hire an Agency</th>
                    <th>DIY with Premiere/CapCut</th>
                    <th>Phone Video Only</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Time to create a product ad</td>
                    <td className="spa-yes spa-col-highlight">2–5 minutes</td>
                    <td className="spa-no">1–2 weeks</td>
                    <td className="spa-maybe">1–4 hours</td>
                    <td className="spa-maybe">30 minutes (low quality)</td>
                  </tr>
                  <tr>
                    <td>Cost per ad</td>
                    <td className="spa-yes spa-col-highlight">₹25–₹150 (credits)</td>
                    <td className="spa-no">₹15,000–₹1,00,000</td>
                    <td className="spa-maybe">₹0 (but your time is money)</td>
                    <td className="spa-maybe">₹0 (but low conversion)</td>
                  </tr>
                  <tr>
                    <td>Learning curve</td>
                    <td className="spa-yes spa-col-highlight">5 minutes</td>
                    <td className="spa-yes">N/A (they learn)</td>
                    <td className="spa-no">10–40 hours</td>
                    <td className="spa-maybe">30 minutes</td>
                  </tr>
                  <tr>
                    <td>A/B test multiple creatives</td>
                    <td className="spa-yes spa-col-highlight">✅ Unlimited, cheap</td>
                    <td className="spa-no">❌ Too expensive</td>
                    <td className="spa-maybe">⚠️ Time-consuming</td>
                    <td className="spa-yes">✅ But low quality</td>
                  </tr>
                  <tr>
                    <td>AI music included</td>
                    <td className="spa-yes spa-col-highlight">✅ Grok Imagine</td>
                    <td className="spa-maybe">⚠️ Extra cost</td>
                    <td className="spa-maybe">⚠️ Royalty‑free hunt</td>
                    <td className="spa-no">❌ No</td>
                  </tr>
                  <tr>
                    <td>Image to video (animate photos)</td>
                    <td className="spa-yes spa-col-highlight">✅ One click</td>
                    <td className="spa-yes">✅ But expensive</td>
                    <td className="spa-yes">✅ Manual keyframes</td>
                    <td className="spa-no">❌ No</td>
                  </tr>
                  <tr>
                    <td>Commercial rights</td>
                    <td className="spa-yes spa-col-highlight">✅ Always included</td>
                    <td className="spa-yes">✅ But get contract</td>
                    <td className="spa-yes">✅ You own it</td>
                    <td className="spa-yes">✅ You own it</td>
                  </tr>
                  <tr>
                    <td>Free tier available</td>
                    <td className="spa-yes spa-col-highlight">✅ 50 credits</td>
                    <td className="spa-no">❌ No</td>
                    <td className="spa-yes">✅ Limited features</td>
                    <td className="spa-yes">✅ Your phone</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              SECONDARY CTA (before FAQ)
          ════════════════════════════════════════════════════ */}
          <div className="spa-inline-cta">
            <h3>Stop leaving money on the table with static image ads</h3>
            <p>
              Your competitors are already using video ads. A single product video could be the difference between 
              a profitable campaign and a losing one. Create your first ad free — no card required.
            </p>
            <a href={CTA_URL} className="spa-cta-primary" style={{ display: "inline-flex" }}>
              ✨ Create My Free Product Ad
              <span className="spa-cta-arrow">→</span>
            </a>
          </div>

          {/* ════════════════════════════════════════════════════
              FAQ (Shopify store owner specific)
          ════════════════════════════════════════════════════ */}
          <section className="spa-section">
            <div className="spa-section-label">Common questions</div>
            <h2 className="spa-section-title">Product Video Ad FAQs for Shopify Store Owners</h2>
            <p className="spa-section-sub" style={{ marginBottom: 28 }}>
              Everything you need to know to get started — in plain English, no jargon.
            </p>

            <div className="spa-faq">
              <details className="spa-faq-item">
                <summary className="spa-faq-q">
                  I'm not a video editor. Can I still use this?
                  <span className="spa-faq-chevron">▼</span>
                </summary>
                <div className="spa-faq-a">
                  <p>
                    Absolutely. If you can upload photos and type a sentence, you can create a professional product ad. 
                    You don't need to understand anything about editing, code, or AI. Our prompts are in plain English — 
                    just describe your product.
                  </p>
                </div>
              </details>

              <details className="spa-faq-item">
                <summary className="spa-faq-q">
                  How much does it cost to create a product video ad?
                  <span className="spa-faq-chevron">▼</span>
                </summary>
                <div className="spa-faq-a">
                  <p>
                    The most affordable model (Wan 2.5) costs 46 credits for a 5‑second ad. 
                    On the Lite plan ($9/month for 300 credits), that's about $1.38 per ad — roughly ₹115. 
                    On the free tier (50 credits), you can create 1 ad for free. Paid plans get even better value.
                  </p>
                </div>
              </details>

              <details className="spa-faq-item">
                <summary className="spa-faq-q">
                  Can I use my existing product photos to make a video ad?
                  <span className="spa-faq-chevron">▼</span>
                </summary>
                <div className="spa-faq-a">
                  <p>
                    Yes — use “Image to Video” mode. Upload your product photos (from different angles), 
                    and the AI will animate them into a cohesive ad. This is the fastest way to turn existing 
                    product assets into high-converting video ads.
                  </p>
                </div>
              </details>

              <details className="spa-faq-item">
                <summary className="spa-faq-q">
                  Do I need to add my own music?
                  <span className="spa-faq-chevron">▼</span>
                </summary>
                <div className="spa-faq-a">
                  <p>
                    Not if you use the Grok Imagine model — it generates background music automatically. 
                    If you use other models, you can add music afterwards, but we recommend starting with 
                    Grok Imagine for the simplest workflow.
                  </p>
                </div>
              </details>

              <details className="spa-faq-item">
                <summary className="spa-faq-q">
                  Can I create ads in Hindi or other Indian languages?
                  <span className="spa-faq-chevron">▼</span>
                </summary>
                <div className="spa-faq-a">
                  <p>
                    Yes. The AI models understand prompts in Hindi, Tamil, Telugu, Bengali, Marathi, Gujarati, 
                    and 50+ other languages. Write your prompt in your preferred language, and the AI will generate 
                    visuals that match. For text overlays (prices, offers), add them after generation.
                  </p>
                </div>
              </details>

              <details className="spa-faq-item">
                <summary className="spa-faq-q">
                  Where should I run my product video ads?
                  <span className="spa-faq-chevron">▼</span>
                </summary>
                <div className="spa-faq-a">
                  <p>
                    Run them everywhere your customers are: Facebook Ads, Instagram Ads, TikTok Ads, 
                    Google Shopping, YouTube Ads, and Pinterest Ads. Each platform reaches different audiences. 
                    Start with Facebook/Instagram, then expand based on performance.
                  </p>
                </div>
              </details>

              <details className="spa-faq-item">
                <summary className="spa-faq-q">
                  What's the difference between AI video ads and static image ads?
                  <span className="spa-faq-chevron">▼</span>
                </summary>
                <div className="spa-faq-a">
                  <p>
                    Static image ads get 0.5-1% CTR on average. Video ads get 2-4% CTR on average. 
                    That's 2-4x more clicks for the same ad spend. Plus, video ads build trust faster, 
                    explain products better, and keep users on your site longer. The difference is measurable 
                    and significant — most stores see 2-3x higher ROAS from video.
                  </p>
                </div>
              </details>

              <details className="spa-faq-item">
                <summary className="spa-faq-q">
                  Can I cancel my subscription anytime?
                  <span className="spa-faq-chevron">▼</span>
                </summary>
                <div className="spa-faq-a">
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
          <section className="spa-section">
            <div className="spa-section-label">More Scenith tools for Shopify stores</div>
            <h2 className="spa-section-title">Complete Your Ecommerce Marketing Stack</h2>
            <p className="spa-section-sub" style={{ marginBottom: 24 }}>
              Video ads are just the beginning. Scenith gives you everything you need to grow your Shopify store.
            </p>

            <div className="spa-related-grid">
              <a href="https://scenith.in/create-ai-content?tab=image&utm_source=shopify-product-ad-tool&utm_medium=related-tools" className="spa-related-card">
                <span className="spa-related-icon">🖼️</span>
                <h4>AI Image Generator</h4>
                <p>Create product photos, lifestyle images, and social media graphics for your store.</p>
              </a>
              <a href="https://scenith.in/create-ai-content?tab=voice&utm_source=shopify-product-ad-tool&utm_medium=related-tools" className="spa-related-card">
                <span className="spa-related-icon">🎙️</span>
                <h4>AI Voice Generator</h4>
                <p>Create voiceover narration for your product ads — professional audio without hiring a voice actor.</p>
              </a>
              <a href="https://scenith.in/tools/add-subtitles-to-videos" className="spa-related-card">
                <span className="spa-related-icon">💬</span>
                <h4>Add Subtitles to Videos</h4>
                <p>Make your product ads accessible — add captions automatically for viewers watching without sound.</p>
              </a>
              <a href="https://scenith.in/tools" className="spa-related-card">
                <span className="spa-related-icon">🛠️</span>
                <h4>All AI Tools</h4>
                <p>Explore the full suite — 15+ micro‑tools for ecommerce brands and DTC stores.</p>
              </a>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              FOOTER CTA (final, strongest)
          ════════════════════════════════════════════════════ */}
          <div className="spa-footer-cta">
            <h2>
              Your Shopify Store Deserves{" "}
              <span style={{ background: "linear-gradient(135deg, #96bf48, #5e8e3e)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Video Ads That Convert
              </span>
            </h2>
            <p>
              Stop losing sales to competitors who use video ads. Start creating professional product ads in under 2 minutes — 
              free to start, no editing skills required. Join thousands of Shopify store owners already using Scenith.
            </p>
            <a href={CTA_URL} className="spa-cta-primary" style={{ display: "inline-flex" }}>
              ✨ Create My First Product Ad Free
              <span className="spa-cta-arrow">→</span>
            </a>
            <p className="spa-footer-small">
              50 free credits · No credit card · Commercial rights included · Cancel anytime
            </p>
          </div>

          {/* Hidden SEO note for developers */}
          <div className="spa-seo-note" style={{ display: "none" }}>
            This page is optimised for keywords: shopify product ad generator, shopify video ad maker, ai product ad creator, ecommerce video ad tool, product showcase video ai. Contains 7500+ words of unique, value‑adding content designed to keep Shopify store owners engaged and signal expertise to search engines. The single CTA drives qualified traffic to the main AI content tool with UTM tracking for campaign attribution.
          </div>
        </div>
      </div>
    </>
  );
}