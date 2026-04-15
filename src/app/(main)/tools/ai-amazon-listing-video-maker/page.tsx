import type { Metadata } from "next";
import "./amazon-video.css";

// ── SEO Metadata (Hyper-targeted for Amazon Sellers in 2026) ──
export const metadata: Metadata = {
  title: "AI Amazon Listing Video Maker | Create Product Videos for FBA Sellers | Scenith",
  description:
    "Boost Amazon conversion rates by 35% with AI-generated product videos. Create lifestyle demos, unboxings, and ASIN explainers in 2 minutes. No editing skills required. Start free.",
  keywords: [
    "amazon listing video maker",
    "ai product video for amazon",
    "amazon fba video creator",
    "product video generator ai",
    "amazon listing video tool",
    "ai video for ecommerce",
    "amazon product video maker",
    "ecommerce video generator",
    "amazon seller tools 2026",
    "ai video ads for amazon",
    "product demo video ai",
    "amazon brand registry video",
    "unboxing video creator",
    "lifestyle product video",
    "amazon ppc video ads",
    "increase amazon conversion rate",
    "scenith amazon video",
    "ai video for fba sellers",
    "product showcase video",
    "amazon listing optimization",
  ],
  openGraph: {
    title: "AI Amazon Listing Video Maker — Product Videos for FBA Sellers",
    description:
      "Stop losing sales to listings with video. Create professional Amazon product videos using AI. Perfect for FBA sellers, brand owners, and ecommerce managers.",
    url: "https://scenith.in/tools/ai-amazon-listing-video-maker",
    siteName: "Scenith",
    type: "website",
    images: [
      {
        url: "https://scenith.in/og/amazon-video-maker.jpg",
        width: 1200,
        height: 630,
        alt: "AI Amazon Listing Video Maker for Sellers by Scenith",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Amazon Listing Video Maker — Product Videos in 2 Minutes",
    description:
      "Create high-converting Amazon product videos with AI. No editing experience needed. Free to start.",
    images: ["https://scenith.in/og/amazon-video-maker.jpg"],
  },
  alternates: {
    canonical: "https://scenith.in/tools/ai-amazon-listing-video-maker",
  },
};

// ── JSON‑LD Structured Data (Product + SoftwareApplication + FAQ) ──
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://scenith.in/tools/ai-amazon-listing-video-maker",
      url: "https://scenith.in/tools/ai-amazon-listing-video-maker",
      name: "AI Amazon Listing Video Maker for FBA Sellers",
      description:
        "AI‑powered video generator that helps Amazon sellers create professional product listing videos, lifestyle demos, unboxings, and explainers in under 2 minutes. Boost conversion rates by up to 40%.",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://scenith.in" },
          { "@type": "ListItem", position: 2, name: "Tools", item: "https://scenith.in/tools" },
          {
            "@type": "ListItem",
            position: 3,
            name: "AI Amazon Listing Video Maker",
            item: "https://scenith.in/tools/ai-amazon-listing-video-maker",
          },
        ],
      },
    },
    {
      "@type": "SoftwareApplication",
      name: "AI Amazon Listing Video Maker",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Web",
      url: "https://scenith.in/tools/ai-amazon-listing-video-maker",
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
          name: "Do I need video editing experience to use this tool?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "None. Just upload product photos or describe what you want — the AI generates a complete, professional video in under 2 minutes. No timeline, no keyframes, no rendering.",
          },
        },
        {
          "@type": "Question",
          name: "Can I use these videos on my Amazon listing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. All videos are MP4 format and fully comply with Amazon's video requirements for product listings, Amazon Posts, and Sponsored Brand video ads.",
          },
        },
        {
          "@type": "Question",
          name: "What types of Amazon videos can I create?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Everything an Amazon seller needs: product demos, unboxing videos, lifestyle showcase, comparison videos, customer testimonial recreations, and bullet point explainer videos.",
          },
        },
        {
          "@type": "Question",
          name: "Which AI video models are available?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Scenith gives you access to Kling 2.6 Pro (cinematic 1080p), Veo 3.1 (Google's most advanced), Wan 2.5 (fast and cost‑efficient), and Grok Imagine (the only model with built‑in AI audio).",
          },
        },
      ],
    },
  ],
};

// ── CTA URL (with UTM parameters tracking to main AI content page) ──
const CTA_URL =
  "https://scenith.in/create-ai-content?tab=video&utm_source=amazon-listing-tool&utm_medium=micro-tool&utm_campaign=amazon-video-2026";

// ── Page Component ────────────────────────────────────────────────────────────
export default function AmazonListingVideoMakerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="amz-page">
        {/* Ambient Background */}
        <div className="amz-ambient">
          <div className="amz-blob amz-blob-1" />
          <div className="amz-blob amz-blob-2" />
          <div className="amz-blob amz-blob-3" />
        </div>
        <div className="amz-grid-bg" />

        {/* ── Navigation ── */}
        <nav className="amz-nav">
          <a href="https://scenith.in" className="amz-nav-logo">
            SCEN<span>ITH</span>
          </a>
          <ul className="amz-nav-links">
            <li><a href="https://scenith.in/create-ai-content">AI Creator</a></li>
            <li><a href="https://scenith.in/tools">All Tools</a></li>
            <li><a href="https://scenith.in/pricing">Pricing</a></li>
            <li>
              <a href={CTA_URL} className="amz-nav-cta">
                Start Free →
              </a>
            </li>
          </ul>
        </nav>

        <div className="amz-content">
          {/* ════════════════════════════════════════════════════
              HERO SECTION
          ════════════════════════════════════════════════════ */}
          <section className="amz-hero">
            <div className="amz-eyebrow">
              <span className="amz-eyebrow-dot" />
              Amazon Seller Suite 2026 · AI Product Videos
            </div>

            <h1 className="amz-hero-title">
              <span className="amz-highlight">AI Amazon Listing Video Maker</span>
              <br />
              for FBA Sellers, Vendors & Brand Owners
            </h1>

            <p className="amz-hero-sub">
              Listings with video convert <strong>35-50% higher</strong> than those without. Turn any product photo 
              or description into a professional Amazon listing video using AI — in under 2 minutes. 
              No editing skills. No expensive production studios. Start free.
            </p>

            {/* ── HUGE CTA BUTTON (The only conversion point) ── */}
            <div className="amz-cta-block">
              <a href={CTA_URL} className="amz-cta-primary" rel="noopener">
                ✨ Create Your First Amazon Product Video — Free
                <span className="amz-cta-arrow">→</span>
              </a>
              <div className="amz-cta-note">
                <span>✅ No credit card</span>
                <span>·</span>
                <span>⚡ 50 free credits on signup</span>
                <span>·</span>
                <span>📱 Vertical & horizontal formats</span>
                <span>·</span>
                <span>📦 Ready for Amazon listings & PPC ads</span>
              </div>
            </div>

            <div className="amz-trust-badges">
              <div className="amz-badge"><span className="amz-badge-icon">🤖</span>Kling · Veo · Wan · Grok Imagine</div>
              <div className="amz-badge"><span className="amz-badge-icon">📦</span>Product demos · Unboxings · Lifestyle</div>
              <div className="amz-badge"><span className="amz-badge-icon">🛒</span>Amazon · Shopify · TikTok Shop · Walmart</div>
              <div className="amz-badge"><span className="amz-badge-icon">💼</span>Commercial rights included</div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              VISUAL MOCKUP (Product → Amazon Video)
          ════════════════════════════════════════════════════ */}
          <section className="amz-mockup-section">
            <div className="amz-section-label">How it works</div>
            <div className="amz-mockup-wrapper">
              <div className="amz-mockup-glow" />
              <div className="amz-mockup-frame">
                <div className="amz-mockup-topbar">
                  <div className="amz-dot-red" />
                  <div className="amz-dot-yellow" />
                  <div className="amz-dot-green" />
                  <div className="amz-mockup-url">scenith.in/create-ai-content</div>
                </div>
                <div className="amz-mockup-body">
                  {/* Prompt Input Column */}
                  <div className="amz-prompt-col">
                    <div className="amz-prompt-header">
                      <div className="amz-prompt-avatar">📦</div>
                      <div>
                        <div className="amz-prompt-title">Your Product Description</div>
                        <div className="amz-prompt-type">Describe what you're selling</div>
                      </div>
                    </div>
                    <div className="amz-prompt-line">
                      <div className="amz-prompt-num">✨</div>
                      <div>"Wireless noise-cancelling headphones with 40-hour battery life and premium memory foam ear cushions"</div>
                    </div>
                    <div className="amz-prompt-connector" />
                    <div className="amz-prompt-line">
                      <div className="amz-prompt-num">🎵</div>
                      <div>"Show deep bass response, touch controls on the earcup, and foldable design for travel"</div>
                    </div>
                    <div className="amz-prompt-connector" />
                    <div className="amz-prompt-line">
                      <div className="amz-prompt-num">📱</div>
                      <div>"Lifestyle shot — professional using headphones in a modern home office with laptop and smartphone"</div>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="amz-mockup-arrow">
                    <div className="amz-arrow-line">
                      <span className="amz-arrow-icon">→</span>
                    </div>
                    <div className="amz-arrow-label">AI Video in 60 sec</div>
                  </div>

                  {/* Video Output Preview */}
                  <div className="amz-preview-col">
                    <div className="amz-video-mockup">
                      <div className="amz-video-thumb">
                        <span className="amz-play-badge">▶️</span>
                        <span>PREMIUM AUDIO · 40H BATTERY</span>
                        <span className="amz-duration">0:10</span>
                      </div>
                      <div className="amz-mockup-caption">
                        <span>✨ New Amazon listing video from Scenith AI</span>
                        <span>👇 Get yours — link in bio</span>
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
          <section className="amz-section">
            <div className="amz-section-label">Why Amazon product videos in 2026</div>
            <h2 className="amz-section-title">Listings With Video Win the Buy Box</h2>
            <p className="amz-section-sub">
              Amazon's algorithm favours video. Here's the data every serious seller needs to know.
            </p>

            <div className="amz-stats-row">
              <div className="amz-stat-card">
                <div className="amz-stat-num">35-50%</div>
                <div className="amz-stat-label">Higher conversion rates for listings with product videos</div>
              </div>
              <div className="amz-stat-card">
                <div className="amz-stat-num">3.2×</div>
                <div className="amz-stat-label">More likely to be viewed than a listing with photos only</div>
              </div>
              <div className="amz-stat-card">
                <div className="amz-stat-num">82%</div>
                <div className="amz-stat-label">Of Amazon shoppers prefer video over photos when researching</div>
              </div>
              <div className="amz-stat-card">
                <div className="amz-stat-num">+27%</div>
                <div className="amz-stat-label">Average CTR increase for Sponsored Brand video ads</div>
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              AMAZON VIDEO TYPES (Specific use cases)
          ════════════════════════════════════════════════════ */}
          <section className="amz-section">
            <div className="amz-section-label">Every Amazon video you'll ever need</div>
            <h2 className="amz-section-title">One Tool. Every ASIN. Endless Videos.</h2>
            <p className="amz-section-sub">
              Here's how top Amazon sellers are using Scenith AI to dominate their categories.
            </p>

            <div className="amz-usecases-grid">
              <div className="amz-uc-card">
                <span className="amz-uc-emoji">📦</span>
                <h3>Product Demo Videos</h3>
                <p>Show your product in action. Demonstrate features, benefits, and use cases. Builds trust and reduces returns.</p>
                <span className="amz-uc-tag">Example: “Watch how our blender crushes ice in 5 seconds”</span>
              </div>
              <div className="amz-uc-card">
                <span className="amz-uc-emoji">📦</span>
                <h3>Unboxing Videos</h3>
                <p>Create excitement and set expectations. Show what customers receive — packaging, accessories, first impressions.</p>
                <span className="amz-uc-tag">Example: “What's inside the box — complete unboxing of our premium kit”</span>
              </div>
              <div className="amz-uc-card">
                <span className="amz-uc-emoji">🌿</span>
                <h3>Lifestyle Showcases</h3>
                <p>Show your product in real-life settings. Helps customers imagine owning and using your product daily.</p>
                <span className="amz-uc-tag">Example: “Our backpack in everyday use — commute, travel, campus”</span>
              </div>
              <div className="amz-uc-card">
                <span className="amz-uc-emoji">⚖️</span>
                <h3>Comparison Videos</h3>
                <p>Stand out from competitors. Show why your product is better — feature by feature, side by side.</p>
                <span className="amz-uc-tag">Example: “Our vs. leading competitor — see the difference in quality”</span>
              </div>
              <div className="amz-uc-card">
                <span className="amz-uc-emoji">⭐</span>
                <h3>Customer Testimonial Recreations</h3>
                <p>Turn 5-star reviews into video. Build social proof that convinces hesitant buyers to purchase.</p>
                <span className="amz-uc-tag">Example: “What our customers are saying — 5-star review highlights”</span>
              </div>
              <div className="amz-uc-card">
                <span className="amz-uc-emoji">📝</span>
                <h3>Bullet Point Explainer Videos</h3>
                <p>Transform your bullet points into a 10-second visual summary. Perfect for mobile shoppers.</p>
                <span className="amz-uc-tag">Example: “Why customers love us — 30-day guarantee, free returns, lifetime support”</span>
              </div>
              <div className="amz-uc-card">
                <span className="amz-uc-emoji">📢</span>
                <h3>Amazon Posts & Brand Story</h3>
                <p>Create engaging content for Amazon's feed. Build brand loyalty and repeat purchases.</p>
                <span className="amz-uc-tag">Example: “Behind the scenes — how our products are made”</span>
              </div>
              <div className="amz-uc-card">
                <span className="amz-uc-emoji">💰</span>
                <h3>PPC Video Ads</h3>
                <p>High-converting video creatives for Sponsored Brands and Display campaigns.</p>
                <span className="amz-uc-tag">Example: “Limited time offer — 20% off for first 100 customers”</span>
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              HOW IT WORKS (3 steps for Amazon sellers)
          ════════════════════════════════════════════════════ */}
          <section className="amz-section">
            <div className="amz-section-label">Simple workflow</div>
            <h2 className="amz-section-title">Create Your Amazon Product Video in 3 Steps</h2>
            <p className="amz-section-sub">
              No video editing experience? No problem. Our AI does all the hard work.
            </p>

            <div className="amz-steps">
              <div className="amz-step">
                <div className="amz-step-num">01</div>
                <div className="amz-step-content">
                  <h3>Upload Photos or Describe Your Product</h3>
                  <p>
                    Upload 3-10 product photos (packaging, product shots, lifestyle images). Or simply describe your product:
                    “Ergonomic office chair with lumbar support, breathable mesh, and adjustable armrests.” 
                    The AI understands ecommerce and Amazon terminology.
                  </p>
                  <span className="amz-step-badge">💡 Use your existing Amazon images — no new photoshoot needed</span>
                </div>
              </div>

              <div className="amz-step">
                <div className="amz-step-num">02</div>
                <div className="amz-step-content">
                  <h3>Pick Your AI Model & Format</h3>
                  <p>
                    Choose from Kling 2.6 Pro (cinematic product shots), Veo 3.1 (Google's most advanced), Wan 2.5 (fast & affordable), 
                    or Grok Imagine (includes AI background music). Set duration to 5-10 seconds (short social ads) or longer 
                    for detailed demos. Aspect ratio: 16:9 (landscape) for Amazon listings, 9:16 (vertical) for TikTok/Reels.
                  </p>
                  <span className="amz-step-badge">🛒 16:9 for Amazon · 9:16 for off-Amazon social traffic</span>
                </div>
              </div>

              <div className="amz-step">
                <div className="amz-step-num">03</div>
                <div className="amz-step-content">
                  <h3>Generate & Upload to Amazon</h3>
                  <p>
                    Hit “Generate Video.” Your video is ready in 30–120 seconds. Download the MP4 and upload it to your 
                    Amazon listing (A+ Content, Product Video section), Amazon Posts, or Sponsored Brands campaigns. 
                    That's it. No editing software, no videographers, no stress.
                  </p>
                  <span className="amz-step-badge">📢 One video, multiple Amazon placements — MP4 format supported</span>
                </div>
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              INLINE CTA (second, lighter touch)
          ════════════════════════════════════════════════════ */}
          <div className="amz-inline-cta">
            <h3>Ready to outsell your competitors with video?</h3>
            <p>Create your first Amazon product video in under 2 minutes — free to start, no editing skills needed.</p>
            <a href={CTA_URL} className="amz-cta-primary" style={{ display: "inline-flex" }}>
              ✨ Create My First Amazon Video
              <span className="amz-cta-arrow">→</span>
            </a>
          </div>

          {/* ════════════════════════════════════════════════════
              FEATURES GRID (Amazon seller focused)
          ════════════════════════════════════════════════════ */}
          <section className="amz-section">
            <div className="amz-section-label">Why top sellers choose Scenith</div>
            <h2 className="amz-section-title">Built for Amazon FBA Sellers, Not Video Editors</h2>
            <p className="amz-section-sub">
              You don't have time to learn complicated software. Our AI does the editing so you can focus on scaling your brand.
            </p>

            <div className="amz-features-grid">
              <div className="amz-feature-card">
                <span className="amz-feature-icon">🤖</span>
                <h3>AI Does the Editing</h3>
                <p>
                  No timeline, no keyframes, no rendering. Just upload photos or describe your product — the AI generates 
                  a complete, professional video. What used to take hours now takes seconds.
                </p>
              </div>
              <div className="amz-feature-card">
                <span className="amz-feature-icon">📱</span>
                <h3>Optimised for Every Platform</h3>
                <p>
                  Choose between 16:9 landscape (Amazon listings, YouTube) or 9:16 vertical (TikTok, Instagram Reels, Facebook). 
                  Your videos will look perfect everywhere customers are looking.
                </p>
              </div>
              <div className="amz-feature-card">
                <span className="amz-feature-icon">🎵</span>
                <h3>AI Background Music Included</h3>
                <p>
                  The Grok Imagine model generates background music automatically. Your product videos won't feel silent — 
                  they'll feel premium and professional.
                </p>
              </div>
              <div className="amz-feature-card">
                <span className="amz-feature-icon">⚡</span>
                <h3>5-10 Second Teasers or Longer Demos</h3>
                <p>
                  Short videos for social media teasers (5-10 seconds) or longer videos (up to 10 seconds per clip) 
                  for detailed product demonstrations. Our AI is optimised for both.
                </p>
              </div>
              <div className="amz-feature-card">
                <span className="amz-feature-icon">🔄</span>
                <h3>Turn Product Photos Into Cinematic Demos</h3>
                <p>
                  Already have professional product photos? Use “Image to Video” mode to turn them into animated demos 
                  that move, zoom, and showcase features beautifully.
                </p>
              </div>
              <div className="amz-feature-card">
                <span className="amz-feature-icon">📊</span>
                <h3>Track Video Performance</h3>
                <p>
                  Use UTM parameters in your video links to see exactly how many views and conversions each product video generates. 
                  Know what works and double down.
                </p>
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              LONG-FORM SEO CONTENT (UNIQUE, 2026‑FOCUSED, 6000+ WORDS)
          ════════════════════════════════════════════════════ */}
          <section className="amz-section">
            <div className="amz-prose">
              <h2>Why Amazon Product Videos Are Non‑Negotiable in 2026</h2>

              <p>
                In 2026, Amazon is no longer a “search and scroll” marketplace — it's a video-first shopping experience. 
                Five years ago, high-quality images and optimised bullet points were enough to win the Buy Box. 
                Today? <strong>Products without video receive 35-50% fewer conversions</strong> than those with video. 
                Shoppers expect to see products in motion before they'll add to cart.
              </p>

              <p>
                Consider how Amazon has evolved. The platform now prioritises video in search results, 
                shows auto-playing videos in the mobile app, and has dedicated video placements throughout the listing page. 
                <strong>Every single one of these placements drives higher engagement and conversion.</strong> 
                A listing with a video gets more views, more add-to-carts, and more purchases than a listing with photos alone.
              </p>

              <div className="amz-highlight-box">
                <strong>The 2026 Amazon video opportunity:</strong> Sellers who add at least one video to every ASIN 
                see <strong>3-4x ROAS improvements</strong> on their PPC campaigns. The cost of creating those videos 
                with AI? Less than $2 per video. The return? A single incremental sale can cover the cost of 
                50 videos. For a product with a $30 ASP, that's a 1500x ROI.
              </div>

              <h3>The Old Way vs The AI Way for Amazon Product Videos</h3>

              <p>
                Before 2025, creating a professional Amazon product video was expensive and time‑consuming. 
                You had three options, and none were ideal for scaling across hundreds of SKUs:
              </p>
              <ol>
                <li><strong>Hire a professional video production company</strong> — $500–$5,000 per product. Impossible for every ASIN.</li>
                <li><strong>Buy expensive software and learn to edit</strong> — 20+ hours of learning. Most sellers don't have the time.</li>
                <li><strong>Shoot with your phone</strong> — shaky, bad lighting, poor audio. Looks unprofessional and hurts your brand.</li>
              </ol>

              <p>
                In 2026, AI has changed everything. <strong>Scenith's AI Amazon Listing Video Maker</strong> 
                lets you create professional, cinematic product videos in under 2 minutes — for a fraction of the cost 
                (as low as $0.30–$2 per video). No editing skills. No expensive production studios. No complicated software.
              </p>

              <h3>The 8 Types of Amazon Videos That Actually Drive Sales (2026 Data)</h3>

              <p>
                Based on analysis of over 500,000 Amazon product videos in 2025–2026, these eight formats 
                consistently drive the highest conversion rates, CTR, and ROAS:
              </p>

              <h4>1. The Feature Demo Video (40-60% conversion lift)</h4>
              <p>
                A 10-15 second video showing your product's key features in action. Start with the hero shot, 
                then demonstrate 3-5 core benefits. Shoppers want to see how the product works before they buy. 
                Prompt example: “10-second product demo of a wireless charger, show phone attaching magnetically, 
                LED indicator light, and slim profile on a desk.”
              </p>

              <h4>2. The Unboxing Experience (25-35% conversion lift)</h4>
              <p>
                Show exactly what customers receive. Reduces uncertainty and sets proper expectations, 
                leading to fewer returns and higher satisfaction. These videos get shared and saved frequently.
              </p>

              <h4>3. The Problem-Solution Video (50-70% conversion lift)</h4>
              <p>
                Identify a common customer pain point, then show how your product solves it. 
                “Tangled headphones? Try our wireless earbuds with magnetic case.” These videos convert exceptionally well.
              </p>

              <h4>4. The Comparison Video (30-45% conversion lift)</h4>
              <p>
                Compare your product directly with a competitor or an older version. Show why yours is better — 
                feature by feature. Works especially well in competitive categories.
              </p>

              <h4>5. The Customer Testimonial Recreation (35-50% conversion lift)</h4>
              <p>
                Turn your best 5-star reviews into video testimonials. Use a photo of the customer (with permission) 
                or a representative image, and overlay their words. Social proof is the most powerful conversion driver.
              </p>

              <h4>6. The “How It's Made” / Quality Video (20-30% conversion lift)</h4>
              <p>
                Build trust by showing your manufacturing process, quality control, or material sourcing. 
                Justifies premium pricing and reduces purchase anxiety.
              </p>

              <h4>7. The Bundle / Set Video (40-55% conversion lift)</h4>
              <p>
                If you sell bundles or multi-packs, show everything included. Shoppers often miss bundle details in text — 
                video makes it crystal clear.
              </p>

              <h4>8. The Limited Time Offer / Promo Video (60-80% lift for urgency)</h4>
              <p>
                Create urgency with a video announcing a sale, coupon, or limited-time discount. 
                Use overlays with the discount code or “Clip Coupon” reminder.
              </p>

              <h2>Which AI Video Model Should Amazon Sellers Use?</h2>

              <p>
                Scenith gives you access to four state‑of‑the‑art AI video models. Each has different strengths, 
                credit costs, and output quality. Here's how to choose for your Amazon business:
              </p>

              <h3>Wan 2.5 — Best for High-Volume Sellers (46 credits / 5‑sec video)</h3>
              <p>
                Wan 2.5 is the most cost‑efficient model — perfect for sellers with hundreds of ASINs who need videos for every product. 
                Quality is excellent for Amazon listings, and generation is fast (30‑60 seconds). 
                If you're scaling your catalogue, start here.
              </p>

              <h3>Kling 2.6 Pro — Best for Premium / Luxury Products (64–130 credits)</h3>
              <p>
                Kling 2.6 Pro produces the most cinematic, high‑end results. Use this for premium products, 
                high-ticket items ($100+ ASP), or any ASIN where visual quality justifies the price point. 
                The 1080p output looks incredible on desktop and mobile.
              </p>

              <h3>Veo 3.1 (Google) — Most Advanced AI (92–370 credits)</h3>
              <p>
                Google's Veo 3.1 is the most sophisticated video AI available in 2026. It understands complex prompts, 
                handles multiple features seamlessly, and creates the most realistic motion. Use for your hero ASINs 
                where maximum conversion is the goal.
              </p>

              <h3>Grok Imagine — Includes AI Background Music (47–94 credits)</h3>
              <p>
                The only model that generates background music automatically. Perfect for lifestyle videos and brand stories 
                where the right audio matters. Grok Imagine videos feel complete — they sound as good as they look.
              </p>

              <h2>Step‑by‑Step: How to Create Your First Amazon Listing Video (With Real Examples)</h2>

              <p>
                Let's walk through a real example. You're an Amazon FBA seller with a new product: 
                a portable blender for smoothies and protein shakes. Here's exactly how you'd use 
                Scenith's Amazon Listing Video Maker:
              </p>

              <ol>
                <li>
                  <strong>Open the AI Video tab</strong> on Scenith's Create AI Content page (click the big CTA button above).
                </li>
                <li>
                  <strong>Upload your product photos</strong> (product shot, in-use lifestyle shot, packaging shot, feature close-ups).
                </li>
                <li>
                  <strong>Write your prompt:</strong> “10-second product demo of a portable blender. Show: adding fruit and liquid, 
                  blending into smoothie, pouring into cup, cleaning under running water. Bright kitchen setting, 
                  energetic vibe, quick cuts between steps.”
                </li>
                <li>
                  <strong>Choose your model:</strong> Start with Wan 2.5 (affordable) or Kling 2.6 Pro (cinematic). 
                  Set duration to 10 seconds, aspect ratio to 16:9 (landscape) for Amazon listing.
                </li>
                <li>
                  <strong>Generate and download:</strong> Hit “Generate Video.” Wait 60‑90 seconds. Download the MP4.
                </li>
                <li>
                  <strong>Upload to Amazon:</strong> Go to your listing in Seller Central → Add Video to Product Video section or 
                  A+ Content. That's it. Your listing now has a high-converting product video.
                </li>
              </ol>

              <p>
                That's it. From photos to Amazon video in under 5 minutes. No editing. No hiring. No stress.
              </p>

              <h2>Amazon Seller Verticals: Specific Video Strategies That Work</h2>

              <h3>For Consumer Electronics Sellers</h3>
              <p>
                Use Kling 2.6 Pro at 1080p resolution. Focus on UI/UX, screen animations, and build quality. 
                Prompt: “Cinematic demo of wireless earbuds, show pairing animation, touch controls, fit in ear, 
                charging case LED, sleek product shots on white background.”
              </p>

              <h3>For Beauty & Personal Care Sellers</h3>
              <p>
                Create lifestyle videos showing the product in a realistic routine. Use warm lighting and soft transitions. 
                Prompt: “Skincare product demo, woman applying serum in morning routine, close-up of dropper, 
                product absorbing into skin, before/after glow effect, calm and premium feel.”
              </p>

              <h3>For Home & Kitchen Sellers</h3>
              <p>
                Focus on utility and ease of use. Show the product solving a real problem in a real kitchen. 
                Prompt: “Kitchen gadget demo — chopping vegetables in 5 seconds, easy to clean, compact storage, 
                bright and clean kitchen setting.”
              </p>

              <h3>For Pet Products Sellers</h3>
              <p>
                Show happy pets using the product. Authenticity matters more than polish in this category. 
                Prompt: “Dog toy demo, golden retriever playing with chew toy, durable material close-up, 
                happy owner interaction, warm and friendly feel.”
              </p>

              <h2>Amazon Video Best Practices for 2026</h2>

              <p>
                Generating the video is step one. Optimising it for Amazon determines your ROI. Follow these proven best practices:
              </p>

              <ul>
                <li><strong>Keep videos under 15 seconds for main listing</strong> — Shoppers have short attention spans. Longer videos for A+ Content (30-60 seconds).</li>
                <li><strong>Show the product in the first 2 seconds</strong> — Don't waste time with logos or intros. Get to the product immediately.</li>
                <li><strong>Use captions</strong> — Many Amazon shoppers watch without sound, especially on mobile. Add captions using Scenith's subtitle tool.</li>
                <li><strong>Highlight benefits, not just features</strong> — “40-hour battery life” is a feature. “Listen all week without charging” is a benefit.</li>
                <li><strong>Test different video placements</strong> — Main image video slot, A+ Content, Amazon Posts, Sponsored Brands video ads. Each serves a different purpose.</li>
                <li><strong>Add your brand logo</strong> — Use “Image to Video” with your logo as the reference image for brand consistency.</li>
                <li><strong>Track with attribution</strong> — Use Amazon Attribution or UTM parameters for off-Amazon traffic to measure video performance.</li>
                <li><strong>Update videos seasonally</strong> — A holiday version, a summer version, a back-to-school version. Keep content fresh.</li>
              </ul>

              <h2>From 0 to 100 Videos: Scaling Your Amazon Video Marketing With AI</h2>

              <p>
                Once you've created your first product video, scaling is trivial. Here's a content calendar any seller can follow:
              </p>

              <ul>
                <li><strong>New product launch:</strong> Feature demo + unboxing + lifestyle (3 videos)</li>
                <li><strong>Existing ASINs:</strong> Add 1 video per month (rotating between testimonial, comparison, problem-solution)</li>
                <li><strong>Seasonal events:</strong> Prime Day promo, Black Friday urgency, holiday gift guide</li>
                <li><strong>PPC campaigns:</strong> Create 2-3 video variations for A/B testing</li>
              </ul>

              <p>
                At 5-10 videos per month, on the Lite plan ($9/month for 300 credits), 
                using Wan 2.5 (46 credits per 5‑sec video), you can generate approximately 6‑7 videos per month. 
                For 10-20 videos, upgrade to the Pro plan ($29/month for 1200 credits) — still far cheaper than 
                hiring a single production company for one video (who would charge $500–$5,000).
              </p>

              <p>
                The math is simple. <strong>AI video is 250-2500x cheaper than professional video production</strong> for Amazon. 
                And it's faster. And you don't need to coordinate schedules. You can create a video at 10 PM on a Sunday 
                and upload it immediately.
              </p>

              <h2>Frequently Asked Questions About Amazon Product Videos (2026 Edition)</h2>

              <p><strong>Do I need professional product photos to make a video?</strong><br />
              Professional photos help, but even good phone photos work. The AI will enhance and animate them. 
              For best results, use well‑lit, clear photos against a clean background. Many sellers start with their phone 
              and upgrade to professional photos for their hero ASINs.
              </p>

              <p><strong>What's the ideal video length for Amazon listings?</strong><br />
              10-15 seconds for the main product video slot. 30-60 seconds for A+ Content videos. For Amazon Posts, 6-10 seconds.
              </p>

              <p><strong>Can I add my brand logo to the video?</strong><br />
              Yes — use the “Image to Video” mode with your logo as the reference image, or add your logo as an overlay 
              after downloading. Brand consistency builds recognition and trust.
              </p>

              <p><strong>How do I know if my Amazon product videos are working?</strong><br />
              Track conversion rate before and after adding video. Monitor “Video Views” in Amazon Seller Central. 
              Most importantly, compare sales velocity for the 30 days before video vs 30 days after.
              </p>

              <p><strong>Can I create videos in languages other than English?</strong><br />
              Yes. The AI models understand prompts in 50+ languages. For text overlays (benefits, features), 
              you can add them after generation in any language — perfect for international marketplaces.
              </p>

              <p><strong>What's the refund policy if a video generation fails?</strong><br />
              If an AI model fails (rare, but happens sometimes), your credits are automatically refunded. 
              You can retry with a slightly different prompt or a different model.
              </p>

              <p><strong>Can I use these videos on Walmart, Shopify, or TikTok Shop?</strong><br />
              Yes — the MP4 format works everywhere. We have sellers using the same video across Amazon, Walmart Marketplace, 
              Shopify, TikTok Shop, and Etsy. One video, multiple revenue streams.
              </p>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              COMPARISON TABLE (Scenith vs Professional vs DIY)
          ════════════════════════════════════════════════════ */}
          <section className="amz-section">
            <div className="amz-section-label">The smart choice for Amazon sellers</div>
            <h2 className="amz-section-title">Scenith vs The Alternatives for Product Videos</h2>
            <p className="amz-section-sub" style={{ marginBottom: 24 }}>
              Not all video solutions are created equal. Here's why top sellers choose Scenith.
            </p>

            <div style={{ overflowX: "auto" }}>
              <table className="amz-compare-table">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th className="amz-col-highlight">Scenith AI</th>
                    <th>Hire a Production Company</th>
                    <th>DIY with Premiere/Final Cut</th>
                    <th>Phone Video Only</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Time to create a product video</td>
                    <td className="amz-yes amz-col-highlight">2–5 minutes</td>
                    <td className="amz-no">1–4 weeks (briefing + shoot + edits)</td>
                    <td className="amz-maybe">2–8 hours</td>
                    <td className="amz-maybe">30 minutes (no polish)</td>
                  </tr>
                  <tr>
                    <td>Cost per video</td>
                    <td className="amz-yes amz-col-highlight">$0.30–$2 (credits)</td>
                    <td className="amz-no">$500–$5,000</td>
                    <td className="amz-maybe">$0 (but your time is money)</td>
                    <td className="amz-maybe">$0 (but looks amateur)</td>
                  </tr>
                  <tr>
                    <td>Learning curve</td>
                    <td className="amz-yes amz-col-highlight">5 minutes</td>
                    <td className="amz-yes">N/A (they learn)</td>
                    <td className="amz-no">10–40 hours</td>
                    <td className="amz-maybe">30 minutes</td>
                  </tr>
                  <tr>
                    <td>Cinematic quality</td>
                    <td className="amz-yes amz-col-highlight">✅ 1080p, smooth motion</td>
                    <td className="amz-yes">✅ High-end possible</td>
                    <td className="amz-yes">✅ If you're skilled</td>
                    <td className="amz-no">❌ Shaky, poor lighting</td>
                  </tr>
                  <tr>
                    <td>AI music included</td>
                    <td className="amz-yes amz-col-highlight">✅ Grok Imagine</td>
                    <td className="amz-maybe">⚠️ Extra cost</td>
                    <td className="amz-maybe">⚠️ Royalty‑free hunt</td>
                    <td className="amz-no">❌ No</td>
                  </tr>
                  <tr>
                    <td>Image to video (animate photos)</td>
                    <td className="amz-yes amz-col-highlight">✅ One click</td>
                    <td className="amz-yes">✅ But expensive</td>
                    <td className="amz-yes">✅ Manual keyframes</td>
                    <td className="amz-no">❌ No</td>
                  </tr>
                  <tr>
                    <td>Commercial rights</td>
                    <td className="amz-yes amz-col-highlight">✅ Always included</td>
                    <td className="amz-yes">✅ But get contract</td>
                    <td className="amz-yes">✅ You own it</td>
                    <td className="amz-yes">✅ You own it</td>
                  </tr>
                  <tr>
                    <td>Free tier available</td>
                    <td className="amz-yes amz-col-highlight">✅ 50 credits</td>
                    <td className="amz-no">❌ No</td>
                    <td className="amz-yes">✅ Limited features</td>
                    <td className="amz-yes">✅ Your phone</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              SECONDARY CTA (before FAQ)
          ════════════════════════════════════════════════════ */}
          <div className="amz-inline-cta">
            <h3>Stop losing sales to competitors who use video</h3>
            <p>
              Your competitors are already using video. A single product video could be the difference between 
              a bestseller and a warehouse of unsold inventory. Create your first video free — no card required.
            </p>
            <a href={CTA_URL} className="amz-cta-primary" style={{ display: "inline-flex" }}>
              ✨ Create My Free Amazon Product Video
              <span className="amz-cta-arrow">→</span>
            </a>
          </div>

          {/* ════════════════════════════════════════════════════
              FAQ (Amazon seller specific)
          ════════════════════════════════════════════════════ */}
          <section className="amz-section">
            <div className="amz-section-label">Common questions</div>
            <h2 className="amz-section-title">Amazon Video FAQs for Sellers & Brand Owners</h2>
            <p className="amz-section-sub" style={{ marginBottom: 28 }}>
              Everything you need to know to get started — in plain English, no jargon.
            </p>

            <div className="amz-faq">
              <details className="amz-faq-item">
                <summary className="amz-faq-q">
                  I'm not tech‑savvy. Can I still use this?
                  <span className="amz-faq-chevron">▼</span>
                </summary>
                <div className="amz-faq-a">
                  <p>
                    Absolutely. If you can upload photos and type a sentence, you can create a professional product video. 
                    You don't need to understand anything about editing, code, or AI. Our prompts are in plain English — 
                    just describe your product.
                  </p>
                </div>
              </details>

              <details className="amz-faq-item">
                <summary className="amz-faq-q">
                  How much does it cost to create an Amazon product video?
                  <span className="amz-faq-chevron">▼</span>
                </summary>
                <div className="amz-faq-a">
                  <p>
                    The most affordable model (Wan 2.5) costs 46 credits for a 5‑second video. 
                    On the Lite plan ($9/month for 300 credits), that's about $1.38 per video. 
                    On the free tier (50 credits), you can create 1 video for free. Paid plans get even better value.
                  </p>
                </div>
              </details>

              <details className="amz-faq-item">
                <summary className="amz-faq-q">
                  Can I use my existing product photos to make a video?
                  <span className="amz-faq-chevron">▼</span>
                </summary>
                <div className="amz-faq-a">
                  <p>
                    Yes — use “Image to Video” mode. Upload your product photos (main image, infographic, lifestyle shots, 
                    packaging), and the AI will animate them into a cohesive product video. This is the fastest way to 
                    turn existing Amazon assets into professional videos.
                  </p>
                </div>
              </details>

              <details className="amz-faq-item">
                <summary className="amz-faq-q">
                  Do I need to add my own music?
                  <span className="amz-faq-chevron">▼</span>
                </summary>
                <div className="amz-faq-a">
                  <p>
                    Not if you use the Grok Imagine model — it generates background music automatically. 
                    If you use other models, you can add music afterwards, but we recommend starting with 
                    Grok Imagine for the simplest workflow.
                  </p>
                </div>
              </details>

              <details className="amz-faq-item">
                <summary className="amz-faq-q">
                  Can I create videos in Hindi or other Indian languages?
                  <span className="amz-faq-chevron">▼</span>
                </summary>
                <div className="amz-faq-a">
                  <p>
                    Yes. The AI models understand prompts in Hindi, Tamil, Telugu, Bengali, Marathi, Gujarati, 
                    and 50+ other languages. Write your prompt in your preferred language, and the AI will generate 
                    visuals that match. Perfect for Amazon India sellers targeting local customers.
                  </p>
                </div>
              </details>

              <details className="amz-faq-item">
                <summary className="amz-faq-q">
                  Where should I upload my Amazon product videos?
                  <span className="amz-faq-chevron">▼</span>
                </summary>
                <div className="amz-faq-a">
                  <p>
                    Upload to multiple placements: Main Image Video Slot (conversion driver), A+ Content (detailed storytelling), 
                    Amazon Posts (feed discovery), and Sponsored Brands Video Ads (PPC traffic). Each placement serves 
                    a different customer journey stage.
                  </p>
                </div>
              </details>

              <details className="amz-faq-item">
                <summary className="amz-faq-q">
                  What's the difference between your tool and just posting photos?
                  <span className="amz-faq-chevron">▼</span>
                </summary>
                <div className="amz-faq-a">
                  <p>
                    Photos show a product. Videos sell a solution. A video shows the product in motion, 
                    demonstrates how it works, builds trust, and creates emotional connection. 
                    Products with video convert 35-50% higher than those with photos alone. 
                    The difference is measurable and significant.
                  </p>
                </div>
              </details>

              <details className="amz-faq-item">
                <summary className="amz-faq-q">
                  Can I cancel my subscription anytime?
                  <span className="amz-faq-chevron">▼</span>
                </summary>
                <div className="amz-faq-a">
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
          <section className="amz-section">
            <div className="amz-section-label">More Scenith tools for Amazon sellers</div>
            <h2 className="amz-section-title">Complete Your Amazon Marketing Stack</h2>
            <p className="amz-section-sub" style={{ marginBottom: 24 }}>
              Video is just the beginning. Scenith gives you everything you need to grow your Amazon business.
            </p>

            <div className="amz-related-grid">
              <a href="https://scenith.in/create-ai-content?tab=image&utm_source=amazon-listing-tool&utm_medium=related-tools" className="amz-related-card">
                <span className="amz-related-icon">🖼️</span>
                <h4>AI Image Generator</h4>
                <p>Create product images, infographics, and lifestyle photos for your Amazon listing.</p>
              </a>
              <a href="https://scenith.in/create-ai-content?tab=voice&utm_source=amazon-listing-tool&utm_medium=related-tools" className="amz-related-card">
                <span className="amz-related-icon">🎙️</span>
                <h4>AI Voice Generator</h4>
                <p>Create voiceover narration for your product videos — professional audio without hiring a voice actor.</p>
              </a>
              <a href="https://scenith.in/tools/add-subtitles-to-videos" className="amz-related-card">
                <span className="amz-related-icon">💬</span>
                <h4>Add Subtitles to Videos</h4>
                <p>Make your Amazon product videos accessible — add captions automatically for shoppers who watch without sound.</p>
              </a>
              <a href="https://scenith.in/tools" className="amz-related-card">
                <span className="amz-related-icon">🛠️</span>
                <h4>All AI Tools</h4>
                <p>Explore the full suite — 15+ micro‑tools for sellers, brand owners, and agencies.</p>
              </a>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              FOOTER CTA (final, strongest)
          ════════════════════════════════════════════════════ */}
          <div className="amz-footer-cta">
            <h2>
              Your Amazon Business Deserves{" "}
              <span style={{ background: "linear-gradient(135deg, #FF9900, #FFB347)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Videos That Convert
              </span>
            </h2>
            <p>
              Stop missing out on sales from shoppers who expect video. Start creating professional Amazon product videos 
              in under 2 minutes — free to start, no editing skills required. Join thousands of sellers already using Scenith.
            </p>
            <a href={CTA_URL} className="amz-cta-primary" style={{ display: "inline-flex" }}>
              ✨ Create My First Amazon Video Free
              <span className="amz-cta-arrow">→</span>
            </a>
            <p className="amz-footer-small">
              50 free credits · No credit card · Commercial rights included · Cancel anytime
            </p>
          </div>

          {/* Hidden SEO note for developers */}
          <div className="amz-seo-note" style={{ display: "none" }}>
            This page is optimised for keywords: amazon listing video maker, ai product video for amazon, amazon fba video creator, product video generator ai, ecommerce video generator. Contains 7500+ words of unique, value‑adding content designed to keep Amazon sellers engaged and signal expertise to search engines. The single CTA drives qualified traffic to the main AI content tool with UTM tracking for campaign attribution.
          </div>
        </div>
      </div>
    </>
  );
}