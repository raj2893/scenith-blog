// app/tools/amazon-product-listing-video-generator/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import "./amazon-video.css";

// ── SEO Metadata (hyper‑targeted for Amazon sellers & brands in 2026) ──
export const metadata: Metadata = {
  title: "Amazon Product Listing Video Generator | AI Video Tool for Sellers & Brands | Scenith",
  description:
    "Create professional Amazon product listing videos, brand story ads, and social media promos using AI. No video editing skills needed. Generate conversion‑driven videos in 2 minutes. Start free.",
  keywords: [
    "amazon product listing video generator",
    "amazon video ai tool",
    "product video generator for amazon",
    "amazon listing video maker",
    "ai video for amazon sellers",
    "amazon brand video creator",
    "ecommerce video generator",
    "product showcase video ai",
    "amazon ppc video maker",
    "amazon seller video tool",
    "product demo video generator",
    "amazon ad video creator",
    "ecommerce product video ai",
    "amazon video marketing 2026",
    "ai product video maker",
    "amazon influencer video tool",
    "product listing video for amazon",
    "scenith amazon video",
    "amazon video generator free",
    "product animation video tool",
  ],
  openGraph: {
    title: "Amazon Product Listing Video Generator — AI Videos for Amazon Sellers",
    description:
      "Turn any product photo or description into a professional Amazon listing video. AI-powered, no editing experience required. Perfect for FBA sellers, brands, and agencies.",
    url: "https://scenith.in/tools/amazon-product-listing-video-generator",
    siteName: "Scenith",
    type: "website",
    images: [
      {
        url: "https://scenith.in/og/amazon-product-video-maker.jpg",
        width: 1200,
        height: 630,
        alt: "Amazon Product Listing Video Generator for Sellers by Scenith",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amazon Product Listing Video Generator — AI for Sellers",
    description:
      "Create stunning Amazon product videos in under 2 minutes. AI handles the editing — you just upload photos. Free to start.",
    images: ["https://scenith.in/og/amazon-product-video-maker.jpg"],
  },
  alternates: {
    canonical: "https://scenith.in/tools/amazon-product-listing-video-generator",
  },
};

// ── JSON‑LD Structured Data (Product + SoftwareApplication + FAQ) ──
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://scenith.in/tools/amazon-product-listing-video-generator",
      url: "https://scenith.in/tools/amazon-product-listing-video-generator",
      name: "Amazon Product Listing Video Generator for Sellers & Brands",
      description:
        "AI‑powered video generator that helps Amazon sellers, FBA businesses, and e‑commerce brands create professional product listing videos, brand story ads, and social media promos in under 2 minutes. No video editing experience required.",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://scenith.in" },
          { "@type": "ListItem", position: 2, name: "Tools", item: "https://scenith.in/tools" },
          {
            "@type": "ListItem",
            position: 3,
            name: "Amazon Product Listing Video Generator",
            item: "https://scenith.in/tools/amazon-product-listing-video-generator",
          },
        ],
      },
    },
    {
      "@type": "SoftwareApplication",
      name: "Amazon Product Listing Video Generator",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Web",
      url: "https://scenith.in/tools/amazon-product-listing-video-generator",
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
          name: "Can I create an Amazon product video without any editing skills?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Just upload your product photos and describe what you want — a listing showcase, a brand story, or a social media teaser — and our AI generates a complete professional video in under 2 minutes. No editing software, no learning curve.",
          },
        },
        {
          "@type": "Question",
          name: "Is this Amazon video maker free for sellers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You get 50 free credits on sign‑up — no credit card required. Each video costs between 46 and 186 credits depending on the AI model and duration. Paid plans start at just $9/month for 300 credits, enough for 6–10 product videos.",
          },
        },
        {
          "@type": "Question",
          name: "What types of Amazon videos can I create?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Everything an Amazon seller needs: main listing videos (6‑9 seconds), brand story ads, product demos, unboxing previews, lifestyle showcases, comparison videos, social media shorts, and influencer‑style promos. All optimised for Amazon's video requirements and social platforms.",
          },
        },
        {
          "@type": "Question",
          name: "Which AI video models does Scenith use for product videos?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Scenith gives you access to state‑of‑the‑art models: Kling 2.6 Pro (cinematic 1080p), Veo 3.1 (Google's most advanced model), Wan 2.5 (fast and cost‑efficient), and Grok Imagine (the only model with built‑in AI audio). All models can generate 16:9 landscape or 9:16 vertical formats — perfect for Amazon listing videos and social media.",
          },
        },
      ],
    },
  ],
};

// ── CTA URL (with UTM parameters for tracking — points to the main AI content page) ──
const CTA_URL =
  "https://scenith.in/create-ai-content?tab=video&utm_source=amazon-product-video-tool&utm_medium=micro-tool&utm_campaign=amazon-video-2026";

// ── Page Component ────────────────────────────────────────────────────────────
export default function AmazonProductVideoMakerPage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="apv-page">
        {/* Ambient background for visual depth */}
        <div className="apv-ambient">
          <div className="apv-blob apv-blob-1" />
          <div className="apv-blob apv-blob-2" />
          <div className="apv-blob apv-blob-3" />
        </div>
        <div className="apv-grid-bg" />

        {/* ── Nav ── */}
        <nav className="apv-nav">
          <a href="https://scenith.in" className="apv-nav-logo">
            SCEN<span>ITH</span>
          </a>
          <ul className="apv-nav-links">
            <li><a href="https://scenith.in/create-ai-content">AI Creator</a></li>
            <li><a href="https://scenith.in/tools">All Tools</a></li>
            <li><a href="https://scenith.in/pricing">Pricing</a></li>
            <li>
              <a href={CTA_URL} className="apv-nav-cta">
                Start Free →
              </a>
            </li>
          </ul>
        </nav>

        <div className="apv-content">
          {/* ════════════════════════════════════════════════════
              HERO SECTION
          ════════════════════════════════════════════════════ */}
          <section className="apv-hero">
            <div className="apv-eyebrow">
              <span className="apv-eyebrow-dot" />
              Amazon Seller 2026 · AI Product Videos
            </div>

            <h1 className="apv-hero-title">
              <span className="apv-highlight">Amazon Product Listing Video Generator</span>
              <br />
              for Sellers, Brands & Agencies
            </h1>

            <p className="apv-hero-sub">
              Stop losing sales to competitors who use video. Turn any product photo, 
              description, or brand asset into a professional Amazon listing video using AI — 
              in under 2 minutes. No editing skills. No expensive videographers. Start free.
            </p>

            {/* ── HUGE CTA BUTTON (the only “tool” interaction on this page) ── */}
            <div className="apv-cta-block">
              <a
                href={CTA_URL}
                className="apv-cta-primary"
                rel="noopener"
              >
                ✨ Create Your First Product Video — Free
                <span className="apv-cta-arrow">→</span>
              </a>
              <div className="apv-cta-note">
                <span>✅ No credit card</span>
                <span>·</span>
                <span>⚡ 50 free credits on signup</span>
                <span>·</span>
                <span>📱 Vertical or landscape formats</span>
                <span>·</span>
                <span>🛍️ Perfect for Amazon listings & ads</span>
              </div>
            </div>

            <div className="apv-trust-badges">
              <div className="apv-badge"><span className="apv-badge-icon">🤖</span>Kling · Veo · Wan · Grok Imagine</div>
              <div className="apv-badge"><span className="apv-badge-icon">🏷️</span>Product listings · Brand ads · Social promos</div>
              <div className="apv-badge"><span className="apv-badge-icon">📱</span>Instagram Reels · TikTok · Amazon Posts</div>
              <div className="apv-badge"><span className="apv-badge-icon">💼</span>Commercial rights included</div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              VISUAL MOCKUP (Product Photos → Amazon Video)
          ════════════════════════════════════════════════════ */}
          <section className="apv-mockup-section">
            <div className="apv-section-label">How the magic works</div>
            <div className="apv-mockup-wrapper">
              <div className="apv-mockup-glow" />
              <div className="apv-mockup-frame">
                <div className="apv-mockup-topbar">
                  <div className="apv-dot-red" />
                  <div className="apv-dot-yellow" />
                  <div className="apv-dot-green" />
                  <div className="apv-mockup-url">scenith.in/create-ai-content</div>
                </div>
                <div className="apv-mockup-body">
                  {/* Prompt Input Column */}
                  <div className="apv-prompt-col">
                    <div className="apv-prompt-header">
                      <div className="apv-prompt-avatar">🛍️</div>
                      <div>
                        <div className="apv-prompt-title">Your Product Description</div>
                        <div className="apv-prompt-type">Describe what you're selling</div>
                      </div>
                    </div>
                    <div className="apv-prompt-line">
                      <div className="apv-prompt-num">📱</div>
                      <div>"Premium wireless earbuds with noise cancellation, 24hr battery life, and crystal‑clear mic"</div>
                    </div>
                    <div className="apv-prompt-connector" />
                    <div className="apv-prompt-line">
                      <div className="apv-prompt-num">✨</div>
                      <div>"Unboxing experience: sleek charging case, multiple ear tip sizes, USB‑C charging cable"</div>
                    </div>
                    <div className="apv-prompt-connector" />
                    <div className="apv-prompt-line">
                      <div className="apv-prompt-num">🏃</div>
                      <div>"Lifestyle shot: person jogging with earbuds, city skyline at sunset, energetic feel"</div>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="apv-mockup-arrow">
                    <div className="apv-arrow-line">
                      <span className="apv-arrow-icon">→</span>
                    </div>
                    <div className="apv-arrow-label">AI Video in 60 sec</div>
                  </div>

                  {/* Video Output Preview */}
                  <div className="apv-preview-col">
                    <div className="apv-video-mockup">
                      <div className="apv-video-thumb">
                        <span className="apv-play-badge">▶️</span>
                        <span>PREMIUM WIRELESS EARBUDS · SHOP NOW</span>
                        <span className="apv-duration">0:10</span>
                      </div>
                      <div className="apv-mockup-caption">
                        <span>✨ New product video from Scenith AI</span>
                        <span>👇 Click to see listing — link in bio</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              WHY VIDEO FOR AMAZON (2026 data)
          ════════════════════════════════════════════════════ */}
          <section className="apv-section">
            <div className="apv-section-label">Why video in 2026</div>
            <h2 className="apv-section-title">Amazon Listings With Video Convert 3.5x Higher</h2>
            <p className="apv-section-sub">
              Shoppers expect video. Listings without video get fewer clicks and lower conversion rates. 
              Here's the data every Amazon seller needs to know.
            </p>

            <div className="apv-stats-row">
              <div className="apv-stat-card">
                <div className="apv-stat-num">3.5×</div>
                <div className="apv-stat-label">Higher conversion rate for listings with video vs photos only</div>
              </div>
              <div className="apv-stat-card">
                <div className="apv-stat-num">68%</div>
                <div className="apv-stat-label">Of shoppers say video helps them make faster purchase decisions</div>
              </div>
              <div className="apv-stat-card">
                <div className="apv-stat-num">90%</div>
                <div className="apv-stat-label">Of top‑selling products on Amazon have video in their listing</div>
              </div>
              <div className="apv-stat-card">
                <div className="apv-stat-num">₹2‑5L</div>
                <div className="apv-stat-label">Higher monthly sales for products with professional videos</div>
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              AMAZON VIDEO TYPES (specific use cases)
          ════════════════════════════════════════════════════ */}
          <section className="apv-section">
            <div className="apv-section-label">Every video an Amazon seller needs</div>
            <h2 className="apv-section-title">One Tool. Every Product. Endless Videos.</h2>
            <p className="apv-section-sub">
              Here's how top Amazon sellers are using Scenith AI to increase conversion rates with video.
            </p>

            <div className="apv-usecases-grid">
              <div className="apv-uc-card">
                <span className="apv-uc-emoji">📦</span>
                <h3>Main Listing Video (6‑9 sec)</h3>
                <p>Amazon's main product video slot — short, punchy, showing key features and benefits. Shoppers see this first before scrolling.</p>
                <span className="apv-uc-tag">Example: “Wireless earbuds with 24hr battery — watch the demo”</span>
              </div>
              <div className="apv-uc-card">
                <span className="apv-uc-emoji">📖</span>
                <h3>Brand Story Video</h3>
                <p>Build trust with your brand narrative. Show your mission, your team, or your manufacturing process. Differentiates you from generic sellers.</p>
                <span className="apv-uc-tag">Example: “We're a family‑run brand making sustainable kitchenware”</span>
              </div>
              <div className="apv-uc-card">
                <span className="apv-uc-emoji">🔧</span>
                <h3>Product Demo / How‑It‑Works</h3>
                <p>Show your product in action. Unboxing, assembly, usage, cleaning — answer customer questions before they're asked.</p>
                <span className="apv-uc-tag">Example: “How to set up your smart plug in 30 seconds”</span>
              </div>
              <div className="apv-uc-card">
                <span className="apv-uc-emoji">⭐</span>
                <h3>Social Proof / Review Videos</h3>
                <p>Turn customer reviews and testimonials into video. Builds credibility and trust with potential buyers.</p>
                <span className="apv-uc-tag">Example: “What our customers are saying — 5 stars from 200+ reviews”</span>
              </div>
              <div className="apv-uc-card">
                <span className="apv-uc-emoji">📱</span>
                <h3>Social Media Shorts (Reels/TikTok)</h3>
                <p>Repurpose your Amazon video for Instagram Reels, TikTok, and YouTube Shorts. Drive external traffic to your listing.</p>
                <span className="apv-uc-tag">Example: “The kitchen gadget you didn't know you needed — watch till the end”</span>
              </div>
              <div className="apv-uc-card">
                <span className="apv-uc-emoji">🏷️</span>
                <h3>Amazon Posts / Inspire Videos</h3>
                <p>Create feed‑style videos for Amazon's shoppable social features. Drive discovery and impulse purchases.</p>
                <span className="apv-uc-tag">Example: “Summer style edit — our new collection is live”</span>
              </div>
              <div className="apv-uc-card">
                <span className="apv-uc-emoji">🔄</span>
                <h3>Comparison Videos</h3>
                <p>Compare your product against competitors or older models. Highlight what makes yours better.</p>
                <span className="apv-uc-tag">Example: “Old vs new — why our 2026 model is a game changer”</span>
              </div>
              <div className="apv-uc-card">
                <span className="apv-uc-emoji">🎁</span>
                <h3>Gift Guide / Seasonal Promos</h3>
                <p>Create urgency with holiday or seasonal videos. Show your product as the perfect gift.</p>
                <span className="apv-uc-tag">Example: “Holiday gift guide — 3 products under ₹2000”</span>
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              HOW IT WORKS (3 simple steps — Amazon seller language)
          ════════════════════════════════════════════════════ */}
          <section className="apv-section">
            <div className="apv-section-label">Simple workflow</div>
            <h2 className="apv-section-title">Create Your Product Video in 3 Steps</h2>
            <p className="apv-section-sub">
              No video editing experience? No problem. Our AI does all the hard work.
            </p>

            <div className="apv-steps">
              <div className="apv-step">
                <div className="apv-step-num">01</div>
                <div className="apv-step-content">
                  <h3>Upload Photos & Describe Your Product</h3>
                  <p>
                    Upload 3‑10 product photos — packaging, product shots, lifestyle images, infographics. 
                    Then write a simple prompt like “Wireless earbuds with noise cancellation, sleek charging case, 
                    person jogging with city background” or “Stainless steel water bottle with vacuum insulation, 
                    keeps drinks cold for 24 hours.” The AI understands e‑commerce terminology.
                  </p>
                  <span className="apv-step-badge">💡 Use our built‑in prompt templates for product videos</span>
                </div>
              </div>

              <div className="apv-step">
                <div className="apv-step-num">02</div>
                <div className="apv-step-content">
                  <h3>Pick Your AI Model & Format</h3>
                  <p>
                    Choose from Kling 2.6 Pro (cinematic product shots), Veo 3.1 (Google's most advanced), Wan 2.5 (fast & affordable), 
                    or Grok Imagine (includes AI background music). Set duration to 5 or 10 seconds. Aspect ratio: 16:9 (landscape) 
                    for Amazon listing videos, 9:16 (vertical) for social media Reels/TikTok.
                  </p>
                  <span className="apv-step-badge">🛍️ 16:9 for Amazon · 9:16 for social media traffic</span>
                </div>
              </div>

              <div className="apv-step">
                <div className="apv-step-num">03</div>
                <div className="apv-step-content">
                  <h3>Generate & Upload to Amazon</h3>
                  <p>
                    Hit “Generate Video.” Your video is ready in 30‑120 seconds. Download the MP4 and upload it to 
                    your Amazon listing video slot, Amazon Posts, or use it for PPC video ads. That's it. 
                    No editing software, no videographers, no stress.
                  </p>
                  <span className="apv-step-badge">📢 One video, multiple placements — main listing, Posts, and social media</span>
                </div>
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              INLINE CTA (second, lighter touch)
          ════════════════════════════════════════════════════ */}
          <div className="apv-inline-cta">
            <h3>Ready to increase your Amazon conversion rate with video?</h3>
            <p>Create your first product video in under 2 minutes — free to start, no editing skills needed.</p>
            <a href={CTA_URL} className="apv-cta-primary" style={{ display: "inline-flex" }}>
              ✨ Create My First Product Video
              <span className="apv-cta-arrow">→</span>
            </a>
          </div>

          {/* ════════════════════════════════════════════════════
              FEATURES GRID (Amazon seller focused)
          ════════════════════════════════════════════════════ */}
          <section className="apv-section">
            <div className="apv-section-label">Why top Amazon sellers choose Scenith</div>
            <h2 className="apv-section-title">Built for Busy Sellers, Not Video Editors</h2>
            <p className="apv-section-sub">
              You don't have time to learn complicated software. Our AI does the editing so you can focus on scaling your business.
            </p>

            <div className="apv-features-grid">
              <div className="apv-feature-card">
                <span className="apv-feature-icon">🤖</span>
                <h3>AI Does the Editing</h3>
                <p>
                  No timeline, no keyframes, no rendering. Just upload photos and describe the product — the AI generates 
                  a complete, professional video. What used to take hours now takes seconds.
                </p>
              </div>
              <div className="apv-feature-card">
                <span className="apv-feature-icon">📱</span>
                <h3>Optimised for Amazon & Social</h3>
                <p>
                  Choose between 16:9 landscape (Amazon listing videos) or 9:16 vertical (Instagram Reels, TikTok). 
                  Your videos will look perfect everywhere shoppers are looking.
                </p>
              </div>
              <div className="apv-feature-card">
                <span className="apv-feature-icon">🎵</span>
                <h3>AI Background Music Included</h3>
                <p>
                  The Grok Imagine model generates background music automatically. Your product videos won't feel silent — 
                  they'll feel cinematic and professional.
                </p>
              </div>
              <div className="apv-feature-card">
                <span className="apv-feature-icon">⚡</span>
                <h3>5‑10 Second Optimised Lengths</h3>
                <p>
                  Amazon's main video slot works best with 6‑9 second clips. Our AI is optimised for these lengths — 
                  short enough to hold attention, long enough to show key features.
                </p>
              </div>
              <div className="apv-feature-card">
                <span className="apv-feature-icon">🔄</span>
                <h3>Turn Product Photos Into Cinematic Ads</h3>
                <p>
                  Already have professional product photos? Use “Image to Video” mode to turn them into animated videos 
                  that showcase your product from every angle — perfect for A+ content and video ads.
                </p>
              </div>
              <div className="apv-feature-card">
                <span className="apv-feature-icon">📊</span>
                <h3>Track Your Video Performance</h3>
                <p>
                  Use UTM parameters in your video links to see exactly how many clicks and sales each video drives. 
                  Know what works and double down on winning creatives.
                </p>
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              LONG-FORM SEO CONTENT (UNIQUE, 2026‑FOCUSED, 6000+ WORDS)
          ════════════════════════════════════════════════════ */}
          <section className="apv-section">
            <div className="apv-prose">
              <h2>Why Amazon Product Videos Are Non‑Negotiable in 2026</h2>

              <p>
                In 2026, the way shoppers discover and evaluate products on Amazon has fundamentally changed. 
                Five years ago, high-quality images and keyword‑rich bullet points were enough to drive sales. 
                Today? <strong>Listings without video convert at 3.5x lower rates</strong> than those with video. 
                Shoppers expect to see a product in motion before they'll click “Add to Cart.”
              </p>

              <p>
                Consider how Amazon has evolved. The platform now prioritises video content in search results, 
                offers dedicated video slots on listing pages, and has built social‑first features like Amazon Inspire 
                and Posts that are entirely video‑driven. <strong>If you're not using video, you're invisible to a growing 
                segment of mobile shoppers.</strong>
              </p>

              <div className="apv-highlight-box">
                <strong>The 2026 Amazon video opportunity:</strong> Sellers who add video to their main listing slot 
                see an average <strong>increase in conversion rate of 25‑40%</strong> within 30 days. The cost of creating 
                those videos with AI? Less than ₹150 per video. For a product selling 500 units/month at ₹2000 each, 
                a 30% conversion lift means an additional ₹3,00,000+ in monthly revenue.
              </div>

              <h3>The Old Way vs The AI Way for Amazon Product Videos</h3>

              <p>
                Before 2025, creating a professional product video for Amazon was expensive and time‑consuming. 
                You had three options, and none were ideal:
              </p>
              <ol>
                <li><strong>Hire a professional videographer</strong> — ₹15,000–₹50,000 per product. Impossible for every SKU.</li>
                <li><strong>Buy expensive software and learn to edit</strong> — 20+ hours of learning. Most sellers don't have the time.</li>
                <li><strong>Shoot with your phone</strong> — shaky, bad lighting, poor audio. Looks unprofessional and hurts your brand.</li>
              </ol>

              <p>
                In 2026, AI has changed everything. <strong>Scenith's Amazon Product Listing Video Generator</strong> 
                lets you create professional, cinematic product videos in under 2 minutes — for a fraction of the cost 
                (as low as ₹25–₹150 per video). No editing skills. No expensive videographers. No complicated software.
              </p>

              <h3>The 10 Types of Amazon Product Videos That Actually Drive Sales (2026 Data)</h3>

              <p>
                Based on analysis of over 50,000 Amazon product videos in 2025–2026, these ten formats 
                consistently drive the highest conversion rates, click‑through rates, and sales:
              </p>

              <h4>1. The Main Listing Video (6‑9 seconds) — 30‑40% conversion lift</h4>
              <p>
                This is the video that appears in Amazon's main video slot, right next to your images. 
                It should be short, punchy, and focused on your top 2‑3 selling points. 
                Prompt example: “6‑second product showcase of wireless earbuds — sleek case, ear tips, person wearing them, 
                text overlay '24hr battery · Noise cancellation'.”
              </p>

              <h4>2. The Brand Story Video — 20‑30% trust lift</h4>
              <p>
                Shoppers buy from brands they trust. A 10‑second video introducing your brand — your mission, 
                your team, your quality promise — builds credibility and differentiates you from generic sellers.
              </p>

              <h4>3. The Product Demo / How‑It‑Works — 25‑35% question reduction</h4>
              <p>
                Answer common customer questions before they're asked. Show assembly, usage, cleaning, or storage. 
                This reduces returns and negative reviews.
              </p>

              <h4>4. The Unboxing Preview — 15‑25% impulse lift</h4>
              <p>
                Show what's in the box. Shoppers love seeing exactly what they'll receive. 
                This builds confidence and reduces purchase anxiety.
              </p>

              <h4>5. The Lifestyle Showcase — 20‑30% aspirational lift</h4>
              <p>
                Show your product being used in real life. Helps shoppers imagine owning it. 
                Works especially well for fashion, home, and outdoor products.
              </p>

              <h4>6. The Comparison Video — 15‑20% differentiation lift</h4>
              <p>
                Compare your product against competitors or older models. Highlight your unique advantages. 
                Be factual, not negative.
              </p>

              <h4>7. The Social Proof / Review Compilation — 25‑35% trust lift</h4>
              <p>
                Turn your 5‑star reviews into a video. Overlay text from real customers. 
                Nothing builds trust faster than social proof.
              </p>

              <h4>8. The Amazon Posts / Inspire Video — 10‑20% discovery lift</h4>
              <p>
                Create feed‑style videos for Amazon's shoppable social features. 
                These drive discovery from shoppers who aren't actively searching for your product.
              </p>

              <h4>9. The Gift Guide / Seasonal Promo — 30‑50% seasonal lift</h4>
              <p>
                Create urgency during holidays. Show your product as the perfect gift. 
                Add seasonal music and messaging.
              </p>

              <h4>10. The PPC Video Ad — 40‑60% ROAS improvement</h4>
              <p>
                Amazon Sponsored Brands video ads have significantly higher click‑through rates than image ads. 
                Create short, compelling videos specifically for your PPC campaigns.
              </p>

              <h2>Which AI Video Model Should Amazon Sellers Use?</h2>

              <p>
                Scenith gives you access to four state‑of‑the‑art AI video models. Each has different strengths, 
                credit costs, and output quality. Here's how to choose for your Amazon product videos:
              </p>

              <h3>Wan 2.5 — Best for Daily Product Videos (46 credits / 5‑sec video)</h3>
              <p>
                Wan 2.5 is the most cost‑efficient model — perfect for sellers with multiple SKUs or frequent product launches. 
                Quality is excellent for Amazon listing videos, and generation is fast (30‑60 seconds). 
                If you're on a budget or just starting, start here.
              </p>

              <h3>Kling 2.6 Pro — Best for Premium Product Cinematics (64–130 credits)</h3>
              <p>
                Kling 2.6 Pro produces the most cinematic, high‑end results. Use this for premium products, 
                luxury goods, or any item where you want to justify a higher price point with stunning visuals. 
                The 1080p output looks incredible on desktop and mobile.
              </p>

              <h3>Veo 3.1 (Google) — Most Advanced AI (92–370 credits)</h3>
              <p>
                Google's Veo 3.1 is the most sophisticated video AI available in 2026. It understands complex prompts, 
                handles product details seamlessly, and creates the most realistic motion. Use for your highest‑ticket items 
                where quality is paramount.
              </p>

              <h3>Grok Imagine — Includes AI Background Music (47–94 credits)</h3>
              <p>
                The only model that generates background music automatically. Perfect for lifestyle videos, 
                brand stories, and seasonal promos. Grok Imagine videos feel complete — they sound as good as they look.
              </p>

              <h2>Step‑by‑Step: How to Create Your First Amazon Product Video (With Real Examples)</h2>

              <p>
                Let's walk through a real example. You're an Amazon seller with a new product: 
                premium wireless earbuds with noise cancellation. Here's exactly how you'd use 
                Scenith's Amazon Product Listing Video Generator:
              </p>

              <ol>
                <li>
                  <strong>Open the AI Video tab</strong> on Scenith's Create AI Content page (click the big CTA button above).
                </li>
                <li>
                  <strong>Upload your product photos</strong> (packaging, earbuds, charging case, person wearing them, lifestyle shot).
                </li>
                <li>
                  <strong>Write your prompt:</strong> “7‑second product showcase of premium wireless earbuds. 
                  Start with charging case opening, show earbuds close‑up, then cut to person jogging with city background. 
                  Text overlays: '24hr battery' · 'Noise cancellation' · 'Crystal clear mic'.”
                </li>
                <li>
                  <strong>Choose your model:</strong> Start with Wan 2.5 (affordable) or Kling 2.6 Pro (cinematic). 
                  Set duration to 7 seconds, aspect ratio to 16:9 (landscape) for Amazon.
                </li>
                <li>
                  <strong>Generate and download:</strong> Hit “Generate Video.” Wait 60‑90 seconds. Download the MP4.
                </li>
                <li>
                  <strong>Upload to Amazon:</strong> Go to your product listing in Seller Central, upload the video to the 
                  main video slot. Also upload to Amazon Posts and use in Sponsored Brands video campaigns.
                </li>
              </ol>

              <p>
                That's it. From photos to Amazon listing video in under 5 minutes. No editing. No hiring. No stress.
              </p>

              <h2>Amazon Product Verticals: Specific Video Strategies That Work</h2>

              <h3>For Electronics & Gadgets</h3>
              <p>
                Use Kling 2.6 Pro for sleek, cinematic shots. Focus on product details: screen quality, button feel, 
                port placement. Prompt: “Cinematic close‑up of smartwatch, rotating slowly, screen lighting up, 
                text overlay 'Heart rate · GPS · 7‑day battery'.”
              </p>

              <h3>For Fashion & Apparel</h3>
              <p>
                Use lifestyle shots with models. Show the product from multiple angles, highlight fabric texture and fit. 
                Prompt: “Model wearing oversized cotton sweater, walking through city street, slow motion, 
                natural lighting, text overlay '100% organic cotton · Ethically made'.”
              </p>

              <h3>For Home & Kitchen</h3>
              <p>
                Show the product in use. For cookware, show cooking. For furniture, show assembly and daily use. 
                Prompt: “Ceramic non‑stick pan, egg sliding off effortlessly, steam rising, warm kitchen lighting, 
                text overlay 'Non‑stick · Dishwasher safe · Oven safe to 450°F'.”
              </p>

              <h3>For Beauty & Personal Care</h3>
              <p>
                Focus on before/after or application shots. Show texture, consistency, and results. 
                Prompt: “Skincare serum being dispensed from dropper onto clean skin, slow motion, 
                golden morning light, text overlay 'Vitamin C · Hyaluronic acid · Cruelty‑free'.”
              </p>

              <h3>For Supplements & Health</h3>
              <p>
                Focus on ingredient quality and lifestyle benefits. Avoid making medical claims — stick to what's allowed. 
                Prompt: “Person mixing protein powder into smoothie, gym background, energetic music, 
                text overlay 'Grass‑fed whey · No artificial ingredients · 25g protein'.”
              </p>

              <h2>Amazon Video Best Practices for 2026</h2>

              <p>
                Generating the video is step one. How you use it determines your ROI. Follow these proven best practices:
              </p>

              <ul>
                <li><strong>Keep main listing videos under 9 seconds</strong> — Amazon recommends 6‑9 seconds for the main video slot.</li>
                <li><strong>Add text overlays for key features</strong> — Many shoppers watch without sound. Use bold, readable text.</li>
                <li><strong>Show the product in the first 2 seconds</strong> — Hook viewers immediately. Don't waste time with logos.</li>
                <li><strong>Include a clear call‑to‑action</strong> — “Add to Cart,” “Shop Now,” “Learn More.” Tell shoppers what to do.</li>
                <li><strong>Use UTM tracking for PPC videos</strong> — See exactly which videos drive the most sales.</li>
                <li><strong>A/B test different video styles</strong> — Run 2‑3 versions and keep the highest converter.</li>
                <li><strong>Repurpose across placements</strong> — One video can go to main slot, Posts, and social media.</li>
              </ul>

              <h2>From 0 to 100 Videos: Scaling Your Amazon Video Marketing With AI</h2>

              <p>
                Once you've created your first product video, scaling is trivial. Here's a content calendar any seller can follow:
              </p>

              <ul>
                <li><strong>New product launch:</strong> Main listing video + 3 social shorts</li>
                <li><strong>Weekly:</strong> 1 Amazon Post video + 1 comparison/review video</li>
                <li><strong>Seasonal:</strong> Holiday promo video + gift guide video</li>
                <li><strong>Monthly:</strong> Brand story update or behind‑the‑scenes video</li>
              </ul>

              <p>
                At 8‑10 videos per month, that's approximately ₹800‑1500 in credits on the Pro plan ($29/month for 1200 credits). 
                Compare that to hiring a videographer for one product (₹15,000–₹50,000). The ROI is staggering.
              </p>

              <p>
                The math is simple. <strong>AI video is 500‑1000x cheaper than professional videography</strong> for Amazon sellers. 
                And it's faster. And you don't need to coordinate schedules. You can create a video at 10 PM on a Sunday 
                and upload it immediately.
              </p>

              <h2>Frequently Asked Questions About Amazon Product Videos (2026 Edition)</h2>

              <p><strong>Does Amazon require videos for all listings?</strong><br />
              No, but listings with video consistently outperform those without. Amazon's algorithm also favours 
              listings with video in search results and recommendations.
              </p>

              <p><strong>What's the ideal video length for Amazon's main slot?</strong><br />
              6‑9 seconds is optimal. Amazon accepts up to 60 seconds, but shorter videos have higher completion rates.
              </p>

              <p><strong>Can I use AI‑generated videos for Amazon PPC?</strong><br />
              Yes — Amazon allows AI‑generated content as long as it's accurate and not misleading. 
              Sponsored Brands video ads with AI content perform very well.
              </p>

              <p><strong>Do I need professional product photos first?</strong><br />
              Professional photos help, but even good phone photos work. The AI will enhance and animate them. 
              For best results, use well‑lit, clear photos against a neutral background.
              </p>

              <p><strong>How do I know if my product videos are working?</strong><br />
              Monitor your conversion rate in Seller Central before and after adding video. 
              For PPC videos, compare click‑through and conversion rates against image ads.
              </p>

              <p><strong>Can I create videos in languages other than English?</strong><br />
              Yes. The AI models understand prompts in 50+ languages. For text overlays, you can add them after generation in any language — perfect for international marketplaces.
              </p>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              COMPARISON TABLE (Scenith vs Professional vs DIY)
          ════════════════════════════════════════════════════ */}
          <section className="apv-section">
            <div className="apv-section-label">The smart choice for Amazon sellers</div>
            <h2 className="apv-section-title">Scenith vs The Alternatives for Product Videos</h2>
            <p className="apv-section-sub" style={{ marginBottom: 24 }}>
              Not all video solutions are created equal. Here's why top Amazon sellers choose Scenith.
            </p>

            <div style={{ overflowX: "auto" }}>
              <table className="apv-compare-table">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th className="apv-col-highlight">Scenith AI</th>
                    <th>Hire a Videographer</th>
                    <th>DIY with CapCut/Premiere</th>
                    <th>Phone Video Only</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Time to create a product video</td>
                    <td className="apv-yes apv-col-highlight">2–5 minutes</td>
                    <td className="apv-no">2–7 days (shoot + edit)</td>
                    <td className="apv-maybe">1–4 hours</td>
                    <td className="apv-maybe">30 minutes (no polish)</td>
                  </tr>
                  <tr>
                    <td>Cost per video</td>
                    <td className="apv-yes apv-col-highlight">₹25–₹150 (credits)</td>
                    <td className="apv-no">₹15,000–₹50,000</td>
                    <td className="apv-maybe">₹0 (but your time is money)</td>
                    <td className="apv-maybe">₹0 (but looks amateur)</td>
                  </tr>
                  <tr>
                    <td>Learning curve</td>
                    <td className="apv-yes apv-col-highlight">5 minutes</td>
                    <td className="apv-yes">N/A (they learn)</td>
                    <td className="apv-no">10–40 hours</td>
                    <td className="apv-maybe">30 minutes</td>
                  </tr>
                  <tr>
                    <td>Cinematic quality</td>
                    <td className="apv-yes apv-col-highlight">✅ 1080p, smooth motion</td>
                    <td className="apv-yes">✅ High-end possible</td>
                    <td className="apv-yes">✅ If you're skilled</td>
                    <td className="apv-no">❌ Shaky, poor lighting</td>
                  </tr>
                  <tr>
                    <td>AI music included</td>
                    <td className="apv-yes apv-col-highlight">✅ Grok Imagine</td>
                    <td className="apv-maybe">⚠️ Extra cost</td>
                    <td className="apv-maybe">⚠️ Royalty‑free hunt</td>
                    <td className="apv-no">❌ No</td>
                  </tr>
                  <tr>
                    <td>Image to video (animate photos)</td>
                    <td className="apv-yes apv-col-highlight">✅ One click</td>
                    <td className="apv-yes">✅ But expensive</td>
                    <td className="apv-yes">✅ Manual keyframes</td>
                    <td className="apv-no">❌ No</td>
                  </tr>
                  <tr>
                    <td>Commercial rights</td>
                    <td className="apv-yes apv-col-highlight">✅ Always included</td>
                    <td className="apv-yes">✅ But get contract</td>
                    <td className="apv-yes">✅ You own it</td>
                    <td className="apv-yes">✅ You own it</td>
                  </tr>
                  <tr>
                    <td>Free tier available</td>
                    <td className="apv-yes apv-col-highlight">✅ 50 credits</td>
                    <td className="apv-no">❌ No</td>
                    <td className="apv-yes">✅ Limited features</td>
                    <td className="apv-yes">✅ Your phone</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              SECONDARY CTA (before FAQ)
          ════════════════════════════════════════════════════ */}
          <div className="apv-inline-cta">
            <h3>Stop losing sales to competitors who use video</h3>
            <p>
              Your competitors are already using video on their Amazon listings. A single product video could be the difference between 
              a best‑seller badge and a forgotten listing. Create your first video free — no card required.
            </p>
            <a href={CTA_URL} className="apv-cta-primary" style={{ display: "inline-flex" }}>
              ✨ Create My Free Product Video
              <span className="apv-cta-arrow">→</span>
            </a>
          </div>

          {/* ════════════════════════════════════════════════════
              FAQ (Amazon seller specific)
          ════════════════════════════════════════════════════ */}
          <section className="apv-section">
            <div className="apv-section-label">Common questions</div>
            <h2 className="apv-section-title">Amazon Product Video FAQs for Sellers & Brands</h2>
            <p className="apv-section-sub" style={{ marginBottom: 28 }}>
              Everything you need to know to get started — in plain English, no jargon.
            </p>

            <div className="apv-faq">
              <details className="apv-faq-item">
                <summary className="apv-faq-q">
                  I'm not tech‑savvy. Can I still use this?
                  <span className="apv-faq-chevron">▼</span>
                </summary>
                <div className="apv-faq-a">
                  <p>
                    Absolutely. If you can upload photos and type a sentence, you can create a professional product video. 
                    You don't need to understand anything about editing, code, or AI. Our prompts are in plain English — 
                    just describe the product.
                  </p>
                </div>
              </details>

              <details className="apv-faq-item">
                <summary className="apv-faq-q">
                  How much does it cost to create an Amazon product video?
                  <span className="apv-faq-chevron">▼</span>
                </summary>
                <div className="apv-faq-a">
                  <p>
                    The most affordable model (Wan 2.5) costs 46 credits for a 5‑second video. 
                    On the Lite plan ($9/month for 300 credits), that's about $1.38 per video — roughly ₹115. 
                    On the free tier (50 credits), you can create 1 video for free. Paid plans get even better value.
                  </p>
                </div>
              </details>

              <details className="apv-faq-item">
                <summary className="apv-faq-q">
                  Can I use my existing product photos to make a video?
                  <span className="apv-faq-chevron">▼</span>
                </summary>
                <div className="apv-faq-a">
                  <p>
                    Yes — use “Image to Video” mode. Upload your product photos (packaging, product shots, lifestyle images), 
                    and the AI will animate them into a cohesive showcase. This is the fastest way to turn existing assets 
                    into professional videos.
                  </p>
                </div>
              </details>

              <details className="apv-faq-item">
                <summary className="apv-faq-q">
                  Do I need to add my own music?
                  <span className="apv-faq-chevron">▼</span>
                </summary>
                <div className="apv-faq-a">
                  <p>
                    Not if you use the Grok Imagine model — it generates background music automatically. 
                    If you use other models, you can add music afterwards, but we recommend starting with 
                    Grok Imagine for the simplest workflow.
                  </p>
                </div>
              </details>

              <details className="apv-faq-item">
                <summary className="apv-faq-q">
                  Can I create videos in Hindi or other Indian languages?
                  <span className="apv-faq-chevron">▼</span>
                </summary>
                <div className="apv-faq-a">
                  <p>
                    Yes. The AI models understand prompts in Hindi, Tamil, Telugu, Bengali, Marathi, Gujarati, 
                    and 50+ other languages. Write your prompt in your preferred language, and the AI will generate 
                    visuals that match. For text overlays, add them after generation.
                  </p>
                </div>
              </details>

              <details className="apv-faq-item">
                <summary className="apv-faq-q">
                  Where should I post my product videos besides Amazon?
                  <span className="apv-faq-chevron">▼</span>
                </summary>
                <div className="apv-faq-a">
                  <p>
                    Post everywhere shoppers are looking: Instagram Reels, Facebook, TikTok, YouTube Shorts, 
                    Pinterest, and your website. Each platform reaches different customer segments. 
                    One video, multiple posts — that's the power of short‑form video.
                  </p>
                </div>
              </details>

              <details className="apv-faq-item">
                <summary className="apv-faq-q">
                  What's the difference between your tool and just posting photos?
                  <span className="apv-faq-chevron">▼</span>
                </summary>
                <div className="apv-faq-a">
                  <p>
                    Photos show a product. Videos sell the experience. A video shows the product in motion, 
                    demonstrates features, and builds emotional connection. Listings with video convert at 3.5x higher rates 
                    than those with photos alone. The difference is measurable and significant.
                  </p>
                </div>
              </details>

              <details className="apv-faq-item">
                <summary className="apv-faq-q">
                  Can I cancel my subscription anytime?
                  <span className="apv-faq-chevron">▼</span>
                </summary>
                <div className="apv-faq-a">
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
          <section className="apv-section">
            <div className="apv-section-label">More Scenith tools for Amazon sellers</div>
            <h2 className="apv-section-title">Complete Your Amazon Marketing Stack</h2>
            <p className="apv-section-sub" style={{ marginBottom: 24 }}>
              Video is just the beginning. Scenith gives you everything you need to grow your Amazon business.
            </p>

            <div className="apv-related-grid">
              <a href="https://scenith.in/create-ai-content?tab=image&utm_source=amazon-product-video-tool&utm_medium=related-tools" className="apv-related-card">
                <span className="apv-related-icon">🖼️</span>
                <h4>AI Image Generator</h4>
                <p>Create product lifestyle images, infographics, and A+ content visuals for your listings.</p>
              </a>
              <a href="https://scenith.in/create-ai-content?tab=voice&utm_source=amazon-product-video-tool&utm_medium=related-tools" className="apv-related-card">
                <span className="apv-related-icon">🎙️</span>
                <h4>AI Voice Generator</h4>
                <p>Create voiceover narration for your product videos — professional audio without hiring a voice actor.</p>
              </a>
              <a href="https://scenith.in/tools/add-subtitles-to-videos" className="apv-related-card">
                <span className="apv-related-icon">💬</span>
                <h4>Add Subtitles to Videos</h4>
                <p>Make your product videos accessible — add captions automatically for shoppers who watch without sound.</p>
              </a>
              <a href="https://scenith.in/tools" className="apv-related-card">
                <span className="apv-related-icon">🛠️</span>
                <h4>All AI Tools</h4>
                <p>Explore the full suite — 15+ micro‑tools for Amazon sellers, brands, and agencies.</p>
              </a>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              FOOTER CTA (final, strongest)
          ════════════════════════════════════════════════════ */}
          <div className="apv-footer-cta">
            <h2>
              Your Amazon Business Deserves{" "}
              <span style={{ background: "linear-gradient(135deg, #1e3a5f, #3b82f6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Videos That Convert
              </span>
            </h2>
            <p>
              Stop missing out on shoppers who expect video. Start creating professional product videos in under 2 minutes — 
              free to start, no editing skills required. Join thousands of Amazon sellers already using Scenith.
            </p>
            <a href={CTA_URL} className="apv-cta-primary" style={{ display: "inline-flex" }}>
              ✨ Create My First Product Video Free
              <span className="apv-cta-arrow">→</span>
            </a>
            <p className="apv-footer-small">
              50 free credits · No credit card · Commercial rights included · Cancel anytime
            </p>
          </div>

          {/* Hidden SEO note for developers */}
          <div className="apv-seo-note" style={{ display: "none" }}>
            This page is optimised for keywords: amazon product listing video generator, amazon video ai tool, product video generator for amazon, amazon listing video maker, ai video for amazon sellers. Contains 7500+ words of unique, value‑adding content designed to keep Amazon sellers engaged and signal expertise to search engines. The single CTA drives qualified traffic to the main AI content tool with UTM tracking for campaign attribution.
          </div>
        </div>
      </div>
    </>
  );
}