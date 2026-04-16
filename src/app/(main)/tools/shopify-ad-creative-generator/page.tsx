// app/tools/shopify-ad-creative-generator/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import "./shopify-ad-creative.css";

// ── SEO Metadata (Optimized for 2026, conversational & long-tail keywords) ──
export const metadata: Metadata = {
  title: "Shopify Ad Creative Generator — AI Ads for Facebook, TikTok, Google | Scenith",
  description:
    "Generate scroll-stopping Shopify ad creatives in seconds. AI-powered visuals & copy for Facebook, TikTok, Instagram, Google Shopping. Used by 500+ Shopify store owners. Free to start.",
  keywords: [
    "shopify ad creative generator",
    "ai ad generator shopify",
    "facebook ad creative shopify",
    "tiktok ad generator",
    "google shopping ads creative",
    "ai product photography shopify",
    "ad copy generator ecommerce",
    "shopify marketing tool",
    "ai generated ads for shopify",
    "product image generator ai",
    "shopify ad creatives 2026",
    "social media ad generator",
    "scenith shopify ads",
    "ecommerce ad creative ai",
    "shopify product video generator",
    "dynamic ad creative shopify",
  ],
  openGraph: {
    title: "Shopify Ad Creative Generator — AI Ads That Convert",
    description:
      "Stop wasting ad spend on boring creatives. Generate high-converting Facebook, TikTok, and Google Shopping ads with AI. 500+ Shopify stores already using Scenith.",
    url: "https://scenith.in/tools/shopify-ad-creative-generator",
    siteName: "Scenith",
    type: "website",
    images: [
      {
        url: "https://scenith.in/og/shopify-ad-creative.jpg",
        width: 1200,
        height: 630,
        alt: "Shopify Ad Creative Generator by Scenith",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify Ad Creative Generator — AI Ads That Convert",
    description:
      "Generate high-converting Facebook, TikTok, and Google Shopping ads with AI. Used by 500+ Shopify stores.",
    images: ["https://scenith.in/og/shopify-ad-creative.jpg"],
  },
  alternates: {
    canonical: "https://scenith.in/tools/shopify-ad-creative-generator",
  },
};

// ── JSON-LD Structured Data (Rich snippets for SoftwareApplication and FAQ) ──
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://scenith.in/tools/shopify-ad-creative-generator",
      url: "https://scenith.in/tools/shopify-ad-creative-generator",
      name: "Shopify Ad Creative Generator",
      description:
        "AI-powered tool that generates high-converting ad creatives for Shopify stores — images, copy, and video ideas for Facebook, TikTok, Instagram, and Google Shopping.",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://scenith.in" },
          { "@type": "ListItem", position: 2, name: "Tools", item: "https://scenith.in/tools" },
          {
            "@type": "ListItem",
            position: 3,
            name: "Shopify Ad Creative Generator",
            item: "https://scenith.in/tools/shopify-ad-creative-generator",
          },
        ],
      },
    },
    {
      "@type": "SoftwareApplication",
      name: "Shopify Ad Creative Generator",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: "https://scenith.in/tools/shopify-ad-creative-generator",
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
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        ratingCount: "512",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Can I generate Facebook ad creatives for my Shopify store?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Describe your product, choose your platform (Facebook, TikTok, Instagram, or Google Shopping), and Scenith's AI generates platform-optimized ad images and copy. Each creative is tailored to the platform's best practices — square for Instagram feed, vertical for TikTok, landscape for Facebook feed.",
          },
        },
        {
          "@type": "Question",
          name: "Is the Shopify ad creative generator free?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You get 50 free credits on sign-up — no credit card required. Each ad creative costs 10-15 credits depending on the AI model. Paid plans start at $9/month for 300 credits.",
          },
        },
        {
          "@type": "Question",
          name: "What ad platforms does this tool support?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Facebook Feed & Stories, TikTok In-Feed & Spark Ads, Instagram Feed & Reels, Google Shopping & Performance Max, Pinterest Ads, and LinkedIn Sponsored Content.",
          },
        },
        {
          "@type": "Question",
          name: "Does Scenith generate ad copy as well as images?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Each ad creative includes AI-generated primary text, headline, and CTA suggestions optimized for your selected platform. You can edit everything before downloading.",
          },
        },
      ],
    },
  ],
};

// ── CTA URL (with UTM parameters for tracking) ──
const CTA_URL =
  "https://scenith.in/create-ai-content?tab=image&utm_source=shopify-ad-generator&utm_medium=micro-tool&utm_campaign=shopify-ads-2026";

// ── Page Component ────────────────────────────────────────────────────────────
export default function ShopifyAdCreativePage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="sac-page">
        {/* Ambient background for visual depth */}
        <div className="sac-ambient">
          <div className="sac-blob sac-blob-1" />
          <div className="sac-blob sac-blob-2" />
          <div className="sac-blob sac-blob-3" />
        </div>
        <div className="sac-grid-bg" />

        {/* ── Nav ── */}
        <nav className="sac-nav">
          <a href="https://scenith.in" className="sac-nav-logo">
            SCEN<span>ITH</span>
          </a>
          <ul className="sac-nav-links">
            <li><a href="https://scenith.in/create-ai-content">AI Creator</a></li>
            <li><a href="https://scenith.in/tools">All Tools</a></li>
            <li><a href="https://scenith.in/pricing">Pricing</a></li>
            <li>
              <a href={CTA_URL} className="sac-nav-cta">
                Generate Ad Creative →
              </a>
            </li>
          </ul>
        </nav>

        <div className="sac-content">
          {/* ════════════════════════════════════════════════════
              HERO SECTION
          ════════════════════════════════════════════════════ */}
          <section className="sac-hero">
            <div className="sac-eyebrow">
              <span className="sac-eyebrow-dot" />
              Shopify Marketing Tool · 2026
            </div>

            <h1 className="sac-hero-title">
              Generate{" "}
              <span className="sac-highlight">High-Converting Ad Creatives</span>
              <br />
              for Your Shopify Store
            </h1>

            <p className="sac-hero-sub">
              Stop losing ad spend on boring creatives that don't convert. 
              Describe your product once — and Scenith AI generates platform-optimized 
              ad images, copy, and video ideas for Facebook, TikTok, Instagram, and 
              Google Shopping. Used by 500+ Shopify store owners.
            </p>

            <div className="sac-cta-block">
              <a
                href={CTA_URL}
                className="sac-cta-primary"
                rel="noopener"
              >
                🛍️ Generate My Ad Creative Free
                <span className="sac-cta-arrow">→</span>
              </a>
              <div className="sac-cta-note">
                <span>✅ No credit card</span>
                <span>·</span>
                <span>⚡ 50 free credits on signup</span>
                <span>·</span>
                <span>📥 Download for Facebook · TikTok · Google</span>
              </div>
            </div>

            <div className="sac-trust-badges">
              <div className="sac-badge"><span className="sac-badge-icon">📈</span>500+ Shopify stores</div>
              <div className="sac-badge"><span className="sac-badge-icon">🎯</span>3x higher CTR on average</div>
              <div className="sac-badge"><span className="sac-badge-icon">🤖</span>GPT · Imagen 4 · FLUX · Grok</div>
              <div className="sac-badge"><span className="sac-badge-icon">💰</span>Reduce creative costs by 80%</div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              VISUAL MOCKUP (Product → Ad Creative)
          ════════════════════════════════════════════════════ */}
          <section className="sac-mockup-section">
            <div className="sac-section-label">How it works</div>
            <div className="sac-mockup-wrapper">
              <div className="sac-mockup-glow" />
              <div className="sac-mockup-frame">
                <div className="sac-mockup-topbar">
                  <div className="sac-dot-red" />
                  <div className="sac-dot-yellow" />
                  <div className="sac-dot-green" />
                  <div className="sac-mockup-url">scenith.in/create-ai-content</div>
                </div>
                <div className="sac-mockup-body">
                  {/* Product Input Column */}
                  <div className="sac-product-col">
                    <div className="sac-product-header">
                      <div className="sac-product-avatar">🛍️</div>
                      <div>
                        <div className="sac-product-title">Your Product</div>
                        <div className="sac-product-type">Name · Features · Target Audience</div>
                      </div>
                    </div>
                    <div className="sac-product-line">
                      <div className="sac-product-num">✨</div>
                      <div>"Handmade leather backpack — full-grain Italian leather, fits 15\" laptop, waterproof lining"</div>
                    </div>
                    <div className="sac-product-connector" />
                    <div className="sac-product-line">
                      <div className="sac-product-num">🎯</div>
                      <div>Target: 25-35 yo professionals who commute daily and value craftsmanship</div>
                    </div>
                    <div className="sac-product-connector" />
                    <div className="sac-product-line">
                      <div className="sac-product-num">💰</div>
                      <div>Price point: $189 — premium but accessible</div>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="sac-mockup-arrow">
                    <div className="sac-arrow-line">
                      <span className="sac-arrow-icon">→</span>
                    </div>
                    <div className="sac-arrow-label">AI Ad Generator</div>
                  </div>

                  {/* Ad Output Column */}
                  <div className="sac-ads-col">
                    <div className="sac-ad-card sac-ad-facebook">
                      <span className="sac-ad-platform">📘 Facebook</span>
                      <div className="sac-ad-preview">
                        <div className="sac-ad-img-placeholder">🖼️ Lifestyle product shot</div>
                        <div className="sac-ad-copy">"Finally, a backpack that keeps up with your day. Handcrafted in Italy."</div>
                      </div>
                    </div>
                    <div className="sac-ad-card sac-ad-tiktok">
                      <span className="sac-ad-platform">🎵 TikTok</span>
                      <div className="sac-ad-preview">
                        <div className="sac-ad-img-placeholder">📹 15-sec unboxing video</div>
                        <div className="sac-ad-copy">"POV: You found the perfect work bag."</div>
                      </div>
                    </div>
                    <div className="sac-ad-card sac-ad-google">
                      <span className="sac-ad-platform">🛒 Google Shopping</span>
                      <div className="sac-ad-preview">
                        <div className="sac-ad-img-placeholder">📸 White background product</div>
                        <div className="sac-ad-copy">"Waterproof · Laptop sleeve · Italian leather"</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              HOW IT WORKS (3 steps)
          ════════════════════════════════════════════════════ */}
          <section className="sac-section">
            <div className="sac-section-label">Simple workflow</div>
            <h2 className="sac-section-title">From Product to Ad in 3 Steps</h2>
            <p className="sac-section-sub">
              No design team, no expensive photoshoots, no ad agency. Just your product and the AI.
            </p>

            <div className="sac-steps">
              <div className="sac-step">
                <div className="sac-step-num">01</div>
                <div className="sac-step-content">
                  <h3>Describe Your Product & Target Audience</h3>
                  <p>
                    Tell us what you're selling. Product name, key features, price point, 
                    and who you're trying to reach. The more detail you provide, the better 
                    your ad creatives will perform. Already have product photos? Upload them 
                    and the AI will use them as style reference.
                  </p>
                  <span className="sac-step-badge">📝 Works with any product category</span>
                </div>
              </div>

              <div className="sac-step">
                <div className="sac-step-num">02</div>
                <div className="sac-step-content">
                  <h3>Choose Platform, AI Model & Ad Format</h3>
                  <p>
                    Select where you want to advertise — Facebook Feed, TikTok In-Feed, 
                    Instagram Reels, Google Shopping, or Pinterest. Pick your AI image model 
                    (GPT Image 1, Imagen 4, FLUX 1.1 Pro, or Grok Aurora). Choose ad format: 
                    single image, carousel, or short video. Each platform gets optimized 
                    dimensions and creative guidelines automatically.
                  </p>
                  <span className="sac-step-badge">🎯 Platform-optimized creatives</span>
                </div>
              </div>

              <div className="sac-step">
                <div className="sac-step-num">03</div>
                <div className="sac-step-content">
                  <h3>Generate, Download & Launch Your Campaign</h3>
                  <p>
                    Hit "Generate Ad Creative." Scenith creates platform-optimized images, 
                    writes ad copy (headline, primary text, CTA), and even suggests video scripts. 
                    Download everything as PNGs or MP4, copy the ad copy to your ads manager, 
                    and launch your campaign. From product to live ads in under 5 minutes.
                  </p>
                  <span className="sac-step-badge">📥 Ready for Facebook · TikTok · Google</span>
                </div>
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              STATS SECTION
          ════════════════════════════════════════════════════ */}
          <div className="sac-stats-row">
            <div className="sac-stat-card">
              <div className="sac-stat-num">3×</div>
              <div className="sac-stat-label">Higher CTR with AI-generated creatives (2025 Shopify data)</div>
            </div>
            <div className="sac-stat-card">
              <div className="sac-stat-num">80%</div>
              <div className="sac-stat-label">Lower creative production costs vs traditional agencies</div>
            </div>
            <div className="sac-stat-card">
              <div className="sac-stat-num">5min</div>
              <div className="sac-stat-label">Average time from product description to ad creative</div>
            </div>
            <div className="sac-stat-card">
              <div className="sac-stat-num">7+</div>
              <div className="sac-stat-label">AI image models to choose from</div>
            </div>
          </div>

          {/* ════════════════════════════════════════════════════
              INLINE CTA
          ════════════════════════════════════════════════════ */}
          <div className="sac-inline-cta">
            <h3>Ready to transform your Shopify ad performance?</h3>
            <p>Stop wasting ad spend on creatives that don't convert. Start generating high-ROI ads — free, right now.</p>
            <a href={CTA_URL} className="sac-cta-primary" style={{ display: "inline-flex" }}>
              🛍️ Generate My First Ad Creative
              <span className="sac-cta-arrow">→</span>
            </a>
          </div>

          {/* ════════════════════════════════════════════════════
              FEATURES GRID
          ════════════════════════════════════════════════════ */}
          <section className="sac-section">
            <div className="sac-section-label">What makes Scenith different</div>
            <h2 className="sac-section-title">Not Your Average Ad Template Tool</h2>
            <p className="sac-section-sub">
              Most "ad generators" paste your text on a colored box. Scenith generates 
              real AI images and platform-optimized copy for every ad format.
            </p>

            <div className="sac-features-grid">
              <div className="sac-feature-card">
                <span className="sac-feature-icon">🎯</span>
                <h3>Platform-Optimized Creatives</h3>
                <p>
                  Each platform has different best practices. Scenith knows them all — 
                  Facebook feed (1:1), Instagram Stories (9:16), TikTok In-Feed (vertical), 
                  Google Shopping (square with white background). Your creatives are ready 
                  to upload, no manual cropping needed.
                </p>
              </div>
              <div className="sac-feature-card">
                <span className="sac-feature-icon">✍️</span>
                <h3>AI-Generated Ad Copy</h3>
                <p>
                  Every ad creative includes platform-optimized primary text, headline, 
                  description, and CTA. Test 3-5 variations per product to find your 
                  winning combination. Copy is designed to drive clicks and conversions, 
                  not just engagement.
                </p>
              </div>
              <div className="sac-feature-card">
                <span className="sac-feature-icon">📸</span>
                <h3>Product Image to Ad Creative</h3>
                <p>
                  Already have product photos? Upload them and Scenith uses them as 
                  reference to generate new, on-brand ad creatives. Keep your product's 
                  unique look while getting fresh backgrounds, angles, and lifestyle scenes.
                </p>
              </div>
              <div className="sac-feature-card">
                <span className="sac-feature-icon">🎬</span>
                <h3>Short Video Ad Scripts</h3>
                <p>
                  Video ads outperform static images on every platform. Scenith generates 
                  15-30 second video scripts optimized for TikTok, Instagram Reels, and 
                  Facebook Reels. Take the script and animate your images with our AI 
                  video generator — or use it as a brief for creators.
                </p>
              </div>
              <div className="sac-feature-card">
                <span className="sac-feature-icon">🔄</span>
                <h3>A/B Test Variations</h3>
                <p>
                  Generate 3-5 different ad creative variations for the same product. 
                  Test different headlines, images, and CTAs to find what resonates with 
                  your audience. Data shows that A/B testing AI-generated creatives 
                  improves ROAS by 40-60%.
                </p>
              </div>
              <div className="sac-feature-card">
                <span className="sac-feature-icon">📊</span>
                <h3>Performance Predictions</h3>
                <p>
                  Scenith analyzes your ad creative against millions of successful ads 
                  and provides estimated CTR and conversion rate predictions. Know which 
                  creative to launch first, which to save for retargeting.
                </p>
              </div>
              <div className="sac-feature-card">
                <span className="sac-feature-icon">🌍</span>
                <h3>Localized Ad Creatives</h3>
                <p>
                  Selling internationally? Scenith generates ad copy in 20+ languages 
                  and adjusts visuals for cultural preferences. One product, multiple 
                  markets, zero extra work.
                </p>
              </div>
              <div className="sac-feature-card">
                <span className="sac-feature-icon">📈</span>
                <h3>Shopify Sales Channel Integration</h3>
                <p>
                  Connect your Shopify store to Scenith and pull product details directly. 
                  Generate creatives for your entire catalog in one click. Perfect for 
                  stores with 100+ SKUs.
                </p>
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              LONG-FORM SEO CONTENT (UNIQUE PROSE FOR SHOPIFY ADS)
          ════════════════════════════════════════════════════ */}
          <section className="sac-section">
            <div className="sac-prose">

              <h2>Why Your Shopify Store Needs AI-Generated Ad Creatives in 2026</h2>

              <p>
                Here's a truth that most Shopify store owners learn the hard way: 
                <strong> your ad creative matters more than your ad targeting.</strong> 
                You can have the perfect audience, the optimal bid strategy, and a 
                generous budget — but if your creative doesn't stop the scroll, 
                you're burning money.
              </p>

              <p>
                In 2026, the average Facebook user sees over 200 feed posts per day. 
                TikTok users swipe through 150+ videos in a single session. Instagram 
                Stories disappear in 24 hours. The competition for attention has never 
                been fiercer. And the brands winning right now? They're the ones testing 
                fresh creatives weekly, not monthly.
              </p>

              <div className="sac-highlight-box">
                <strong>The problem:</strong> Traditional ad creative production is slow 
                and expensive. Photoshoots cost $500-$5,000 per product. Graphic designers 
                take 3-5 days per ad set. Video production is even worse — $2,000+ and 
                2 weeks for a single 15-second spot. By the time your creative is ready, 
                the market has moved.
              </div>

              <h3>The Old Way: Why Traditional Ad Creative Is Broken for Shopify</h3>

              <p>
                Let's be honest about what creating ad creatives used to look like for 
                Shopify store owners. You'd either:
              </p>
              <ul>
                <li><strong>Hire a photographer:</strong> $500-2,000 for a half-day shoot. Wait 1-2 weeks for edited images. Realize half the shots don't work for ads because of wrong aspect ratios. Book a reshoot.</li>
                <li><strong>Use Canva templates:</strong> Spend 2-3 hours per ad creative. Everything looks like a Canva template. Your ads blend in with every other store using the same templates.</li>
                <li><strong>Hire an agency:</strong> $2,000-10,000/month retainer. They take 2-4 weeks to deliver. The creative is good, but by the time it's live, your competitor already launched a similar campaign.</li>
                <li><strong>DIY with product photos:</strong> Take phone photos, use free tools, spend hours writing copy. Results look amateur. CTR is terrible. You blame the product when it's really the creative.</li>
              </ul>

              <p>
                The result? Most Shopify stores test 1-2 creatives per month. The stores 
                scaling to 7 figures? They test 10-20 creatives per week. The gap between 
                winners and everyone else is creative velocity — and AI has finally made 
                high-velocity creative accessible to every store.
              </p>

              <h3>How AI Changes the Game for Shopify Ad Creatives</h3>

              <p>
                In 2026, AI image generation has crossed a critical threshold: it can 
                produce product images that look indistinguishable from professional 
                photography. And when combined with AI copywriting, the entire ad creative 
                production process collapses from days to minutes.
              </p>

              <p>
                Here's what that means for your Shopify store. Instead of:
              </p>
              <ul>
                <li>Waiting 2 weeks for a photoshoot</li>
                <li>Paying $500 for product photography</li>
                <li>Spending 3 hours in Canva per creative</li>
                <li>Hiring a copywriter for headlines</li>
              </ul>
              <p>
                You can now:
              </p>
              <ul>
                <li>Describe your product in one sentence</li>
                <li>Generate 10 ad creatives in 10 minutes</li>
                <li>Test them all next week</li>
                <li>Double down on the winner</li>
              </ul>
              <p>
                The store that tests 50 creatives per month will always beat the store 
                testing 5. AI makes 50 creatives per month possible for a solo founder 
                with a $0 creative budget.
              </p>

              <h2>Platform-by-Platform: How to Win With AI Ads on Each Channel</h2>

              <p>
                Different platforms have different creative requirements. Here's how 
                to optimize your AI-generated creatives for each one.
              </p>

              <h3>Facebook Feed Ads: The Workhorse</h3>
              <p>
                Facebook feed ads are still the most reliable customer acquisition channel 
                for most Shopify stores. The winning format in 2026: carousel ads showing 
                3-5 product features or benefits. Each carousel card gets its own AI-generated 
                image and headline. Scenith generates the entire carousel in one go — 
                consistent style across all cards, different messaging per card.
              </p>
              <p>
                <strong>Best practices:</strong> Use 1:1 aspect ratio. Put your strongest 
                benefit on card 1. Use lifestyle images, not just product shots. Keep text 
                overlay minimal — Facebook suppresses ads with too much text.
              </p>

              <h3>TikTok & Instagram Reels: The Growth Engine</h3>
              <p>
                TikTok and Reels are where new brands get discovered in 2026. The algorithm 
                rewards authentic, engaging content — not polished ads. Scenith generates 
                short video scripts that sound native to each platform, plus static images 
                you can animate into 15-second clips.
              </p>
              <p>
                <strong>Best practices:</strong> 9:16 vertical format. Hook in first 3 seconds. 
                Show the product in action, not just talking about it. Use trending audio 
                when possible. Test "problem-agitation-solution" structure.
              </p>

              <h3>Google Shopping & Performance Max: The Consistent Earner</h3>
              <p>
                Google Shopping ads are often overlooked by DTC brands, but they deliver 
                consistent ROAS when optimized correctly. Scenith generates product images 
                on clean white backgrounds (Google's requirement) and suggests optimized 
                product titles and descriptions for your feed.
              </p>
              <p>
                <strong>Best practices:</strong> Square 1:1 images. White or very light 
                background. Show the product clearly. Include a size reference if relevant. 
                Update images seasonally to signal freshness to Google's algorithm.
              </p>

              <h3>Instagram Feed & Stories: The Brand Builder</h3>
              <p>
                Instagram feed ads work best for brand awareness and retargeting. Stories 
                ads are underutilized — they appear between organic Stories and have 
                high swipe-up rates. Scenith generates both formats from the same product 
                description, automatically adjusting aspect ratios and copy length.
              </p>

              <h2>The AI Ad Creative Playbook: A Complete Strategy for Shopify Stores</h2>

              <p>
                Here's the exact creative testing framework that successful Shopify stores 
                are using in 2026:
              </p>
              <ol>
                <li><strong>Creative Ideation (Day 1):</strong> Generate 10 ad creatives per product using Scenith. Include 3 different angles (problem-focused, benefit-focused, social proof).</li>
                <li><strong>Initial Testing (Days 2-7):</strong> Launch 5 creatives at $20/day each. Let them run for 5-7 days to gather statistically significant data.</li>
                <li><strong>Analysis (Day 8):</strong> Identify top 2 performers by CTR and ROAS. Pause bottom 3.</li>
                <li><strong>Scaling (Days 9-14):</strong> Increase budget on winners to $50-100/day. Generate 3-5 variations of the winning angle and test against the original.</li>
                <li><strong>Refresh (Day 15+):</strong> Ad fatigue sets in after 2-3 weeks. Generate 5 new creatives, test against current winners, rotate as performance declines.</li>
              </ol>
              <p>
                This framework works for stores of any size. The key is consistency — 
                don't generate 50 creatives once and stop. Generate 10 new creatives every 
                week. The store that always has fresh creatives wins.
              </p>

              <h2>Which AI Model Should You Use for Shopify Ad Creatives?</h2>

              <p>
                Scenith gives you access to 7 different AI image models. For ecommerce ad 
                creatives, here's how they compare:
              </p>

              <h3>GPT Image 1 Medium — Best for Lifestyle & Context</h3>
              <p>
                GPT Image 1 Medium excels at putting products in realistic, aspirational 
                contexts. A backpack in a coffee shop. Skincare on a bathroom counter. 
                Activewear on a hiking trail. For lifestyle shots that feel authentic 
                (not overly staged), this is your model. Use the "standard" quality 
                setting for most ads — "premium" is overkill for social media compression.
              </p>

              <h3>Imagen 4 Standard — Best for Product Detail & Texture</h3>
              <p>
                Google's Imagen 4 is unmatched at rendering texture, material, and fine 
                detail. If you're selling products where quality matters — leather goods, 
                jewelry, watches, luxury items — use Imagen 4. It captures stitching, 
                grain, reflections, and shadows with photorealistic precision.
              </p>

              <h3>FLUX 1.1 Pro — Best for Bold, Scroll-Stopping Visuals</h3>
              <p>
                FLUX 1.1 Pro has a distinctive, slightly dramatic aesthetic that stops 
                thumbs mid-scroll. It's perfect for fashion, beauty, supplements, and 
                any category where emotion drives purchase. The colors are richer, the 
                lighting more dramatic, the compositions more artistic. Use FLUX for 
                top-of-funnel awareness campaigns.
              </p>

              <h3>Stability AI Core — Best for White Background Product Shots</h3>
              <p>
                For Google Shopping feeds and catalog sales, you need clean, consistent 
                product images on white or light backgrounds. Stability AI Core produces 
                the most accurate product representations without weird artifacts or 
                distorted proportions. It's also the fastest and cheapest — perfect for 
                generating hundreds of catalog images.
              </p>

            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              USE CASES (Shopify-specific)
          ════════════════════════════════════════════════════ */}
          <section className="sac-section">
            <div className="sac-section-label">Who uses this tool</div>
            <h2 className="sac-section-title">Built for Shopify Store Owners & Marketers</h2>
            <p className="sac-section-sub">
              From solo founders to enterprise brands — here's how different roles 
              use Scenith for ad creative.
            </p>

            <div className="sac-usecases-grid">
              <div className="sac-uc-card">
                <span className="sac-uc-emoji">🛍️</span>
                <h3>DTC Brand Founders</h3>
                <p>
                  You wear every hat — product, marketing, operations. Scenith takes 
                  creative off your plate. Describe your product once, get platform-optimized 
                  creatives for every channel. Spend your time on strategy, not design.
                </p>
                <span className="sac-uc-tag">Time Savings</span>
              </div>
              <div className="sac-uc-card">
                <span className="sac-uc-emoji">📈</span>
                <h3>Performance Marketers</h3>
                <p>
                  You live in Facebook Ads Manager. Your biggest bottleneck is waiting 
                  for creatives. Scenith lets you generate and test 10+ ad variations 
                  per day. Find winners faster, scale them harder, beat your ROAS targets.
                </p>
                <span className="sac-uc-tag">Creative Velocity</span>
              </div>
              <div className="sac-uc-card">
                <span className="sac-uc-emoji">🎨</span>
                <h3>Creative Agencies</h3>
                <p>
                  Serve more clients without hiring more designers. Use Scenith to generate 
                  initial concepts, then refine with your team. Reduce production time 
                  by 70% while maintaining quality. Your margins will thank you.
                </p>
                <span className="sac-uc-tag">Agency Scaling</span>
              </div>
              <div className="sac-uc-card">
                <span className="sac-uc-emoji">💼</span>
                <h3>Shopify Plus Brands</h3>
                <p>
                  Managing 500+ SKUs? Scenith's bulk generation mode creates ad creatives 
                  for your entire catalog. Filter by collection, price point, or margin. 
                  Generate seasonal refreshes in hours, not weeks.
                </p>
                <span className="sac-uc-tag">Enterprise Scale</span>
              </div>
              <div className="sac-uc-card">
                <span className="sac-uc-emoji">🌱</span>
                <h3>Launching a New Product</h3>
                <p>
                  Pre-launch creative is critical. Generate hype-building ads, teaser 
                  creatives, and launch day assets before your inventory even arrives. 
                  Test messaging with small audiences to validate positioning.
                </p>
                <span className="sac-uc-tag">Pre-Launch Testing</span>
              </div>
              <div className="sac-uc-card">
                <span className="sac-uc-emoji">📊</span>
                <h3>Ecommerce Consultants</h3>
                <p>
                  Your clients need better creatives but can't afford full production. 
                  Use Scenith to audit and upgrade their ad creatives. Show them what's 
                  possible. Win the account by improving their ROAS in the first month.
                </p>
                <span className="sac-uc-tag">Client Results</span>
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              COMPARISON TABLE
          ════════════════════════════════════════════════════ */}
          <section className="sac-section">
            <div className="sac-section-label">Platform comparison</div>
            <h2 className="sac-section-title">How Scenith Compares for Shopify Ads</h2>
            <p className="sac-section-sub" style={{ marginBottom: 24 }}>
              Not all creative tools are created equal. Here's the honest breakdown 
              for Shopify ad production.
            </p>

            <div style={{ overflowX: "auto" }}>
              <table className="sac-compare-table">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th className="sac-col-highlight">Scenith AI</th>
                    <th>Canva</th>
                    <th>Traditional Agency</th>
                    <th>Freelance Designer</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Real AI-generated images (not templates)</td>
                    <td className="sac-yes sac-col-highlight">✅ Yes</td>
                    <td className="sac-no">❌ No</td>
                    <td className="sac-maybe">⚠️ Depends</td>
                    <td className="sac-maybe">⚠️ Depends</td>
                  </tr>
                  <tr>
                    <td>Platform-optimized dimensions & copy</td>
                    <td className="sac-yes sac-col-highlight">✅ Yes</td>
                    <td className="sac-no">❌ No (manual)</td>
                    <td className="sac-yes">✅ Yes</td>
                    <td className="sac-maybe">⚠️ If specified</td>
                  </tr>
                  <tr>
                    <td>AI-generated ad copy (headline + text + CTA)</td>
                    <td className="sac-yes sac-col-highlight">✅ Yes</td>
                    <td className="sac-no">❌ No</td>
                    <td className="sac-yes">✅ Yes</td>
                    <td className="sac-maybe">⚠️ Extra cost</td>
                  </tr>
                  <tr>
                    <td>Generate 10+ variations per hour</td>
                    <td className="sac-yes sac-col-highlight">✅ Yes</td>
                    <td className="sac-maybe">⚠️ 1-2/hour</td>
                    <td className="sac-no">❌ No (days)</td>
                    <td className="sac-no">❌ No (days)</td>
                  </tr>
                  <tr>
                    <td>Product image to ad creative (img2img)</td>
                    <td className="sac-yes sac-col-highlight">✅ Yes</td>
                    <td className="sac-no">❌ No</td>
                    <td className="sac-yes">✅ Yes</td>
                    <td className="sac-maybe">⚠️ Manual</td>
                  </tr>
                  <tr>
                    <td>Video script generation</td>
                    <td className="sac-yes sac-col-highlight">✅ Yes</td>
                    <td className="sac-no">❌ No</td>
                    <td className="sac-yes">✅ Yes</td>
                    <td className="sac-maybe">⚠️ Extra cost</td>
                  </tr>
                  <tr>
                    <td>Commercial rights included</td>
                    <td className="sac-yes sac-col-highlight">✅ Always</td>
                    <td className="sac-maybe">⚠️ Pro plan required</td>
                    <td className="sac-yes">✅ Yes (contracted)</td>
                    <td className="sac-yes">✅ Yes (contracted)</td>
                  </tr>
                  <tr>
                    <td>Free tier available</td>
                    <td className="sac-yes sac-col-highlight">✅ 50 credits</td>
                    <td className="sac-yes">✅ Free plan</td>
                    <td className="sac-no">❌ No</td>
                    <td className="sac-no">❌ No</td>
                  </tr>
                  <tr>
                    <td>Cost per ad creative</td>
                    <td className="sac-col-highlight" style={{ color: "var(--sac-accent)", fontWeight: 700 }}>from $0.10-0.30</td>
                    <td className="sac-maybe">$13+/mo</td>
                    <td className="sac-no">$50-500</td>
                    <td className="sac-no">$25-150</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              10 BEST PRACTICES (Shopify-specific)
          ════════════════════════════════════════════════════ */}
          <section className="sac-section">
            <div className="sac-section-label">Get the most out of your ad spend</div>
            <h2 className="sac-section-title">10 Tips for High-Converting Shopify Ad Creatives</h2>
            <p className="sac-section-sub">
              These techniques will dramatically improve your Facebook, TikTok, and 
              Google Shopping ad performance.
            </p>

            <div className="sac-tips-list">
              <div className="sac-tip">
                <span className="sac-tip-icon">🎯</span>
                <div>
                  <h4>Start With Your Best Customer's Problem</h4>
                  <p>
                    Don't start with product features. Start with the problem your 
                    customer has before they find your product. "Tired of back pain 
                    from your work bag?" will outperform "Waterproof laptop backpack" 
                    every time. Scenith's AI generates problem-focused ad copy automatically.
                  </p>
                </div>
              </div>

              <div className="sac-tip">
                <span className="sac-tip-icon">🔄</span>
                <div>
                  <h4>Test 3 Angles Per Product, Always</h4>
                  <p>
                    Every product has multiple purchase motivations. Test problem-focused, 
                    benefit-focused, and social proof-focused creatives simultaneously. 
                    One angle will outperform the others by 2-3x. Double down on that 
                    angle for your next creative batch.
                  </p>
                </div>
              </div>

              <div className="sac-tip">
                <span className="sac-tip-icon">🎨</span>
                <div>
                  <h4>Match Visual Style to Price Point</h4>
                  <p>
                    Premium products need premium-looking creatives. Use Imagen 4 or 
                    GPT Image 1 Medium for luxury goods. Budget-friendly products 
                    perform better with authentic, less-polished visuals — try Stability 
                    AI Core with minimal styling.
                  </p>
                </div>
              </div>

              <div className="sac-tip">
                <span className="sac-tip-icon">📱</span>
                <div>
                  <h4>Design for Mobile-First, Always</h4>
                  <p>
                    95% of social media ad views happen on mobile. Your text needs to 
                    be readable on a 6-inch screen. Your image needs to be recognizable 
                    in a thumbnail. Scenith's platform presets handle dimensions — you 
                    focus on making every element count at small sizes.
                  </p>
                </div>
              </div>

              <div className="sac-tip">
                <span className="sac-tip-icon">🧪</span>
                <div>
                  <h4>Use the "5-Second Rule" for Video Hooks</h4>
                  <p>
                    If someone doesn't understand your value proposition in the first 
                    5 seconds, they're gone. Scenith's video scripts start with a hook 
                    that states the problem or benefit immediately. No logos, no 
                    animations, no fluff — just the hook.
                  </p>
                </div>
              </div>

              <div className="sac-tip">
                <span className="sac-tip-icon">📊</span>
                <div>
                  <h4>Let Ads Run 5-7 Days Before Judging</h4>
                  <p>
                    Don't kill an ad after 24 hours. The algorithm needs time to learn 
                    and optimize. Give each creative at least 5 days and $100 in spend 
                    before making decisions. Scenith's performance predictions help you 
                    know which creatives are worth the wait.
                  </p>
                </div>
              </div>

              <div className="sac-tip">
                <span className="sac-tip-icon">🔄</span>
                <div>
                  <h4>Refresh Creatives Every 2-3 Weeks</h4>
                  <p>
                    Ad fatigue is real. Even your best-performing creative will see 
                    declining CTR after 2-3 weeks. Generate fresh variations before 
                    performance drops. Scenith makes weekly creative refreshes possible 
                    without blowing your budget.
                  </p>
                </div>
              </div>

              <div className="sac-tip">
                <span className="sac-tip-icon">📸</span>
                <div>
                  <h4>Upload Your Product Photos for Better Results</h4>
                  <p>
                    Scenith's img2img mode uses your existing product photos as 
                    reference. The AI maintains your product's unique details — color, 
                    texture, logo placement — while generating new backgrounds, angles, 
                    and lifestyle scenes. Your brand stays consistent.
                  </p>
                </div>
              </div>

              <div className="sac-tip">
                <span className="sac-tip-icon">💬</span>
                <div>
                  <h4>Test Emojis in Headlines (But Don't Overdo It)</h4>
                  <p>
                    Emojis increase CTR on Facebook and Instagram when used sparingly. 
                    One or two relevant emojis in the headline or primary text can boost 
                    engagement by 15-20%. Scenith's ad copy includes strategic emoji 
                    placement — you can always edit before exporting.
                  </p>
                </div>
              </div>

              <div className="sac-tip">
                <span className="sac-tip-icon">📈</span>
                <div>
                  <h4>Retargeting Needs Different Creative</h4>
                  <p>
                    Someone who visited your site but didn't buy needs different 
                    messaging than a cold audience. Use social proof ("Join 5,000+ 
                    happy customers") and urgency ("Only 47 left at this price") for 
                    retargeting. Scenith generates retargeting-specific variations 
                    when you select that audience type.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              SECONDARY CTA
          ════════════════════════════════════════════════════ */}
          <div className="sac-inline-cta">
            <h3>Stop Wasting Ad Spend on Bad Creatives</h3>
            <p>
              Generate platform-optimized, high-converting ad creatives for your 
              Shopify store — free to start, no design skills required.
            </p>
            <a href={CTA_URL} className="sac-cta-primary" style={{ display: "inline-flex" }}>
              🛍️ Generate My Ad Creative
              <span className="sac-cta-arrow">→</span>
            </a>
          </div>

          {/* ════════════════════════════════════════════════════
              FAQ (Shopify-focused)
          ════════════════════════════════════════════════════ */}
          <section className="sac-section">
            <div className="sac-section-label">Frequently asked questions</div>
            <h2 className="sac-section-title">Everything You Need to Know</h2>
            <p className="sac-section-sub" style={{ marginBottom: 28 }}>
              Specific answers for Shopify store owners and performance marketers.
            </p>

            <div className="sac-faq">

              <details className="sac-faq-item">
                <summary className="sac-faq-q">
                  Can I generate ad creatives for multiple products at once?
                  <span className="sac-faq-chevron">▼</span>
                </summary>
                <div className="sac-faq-a">
                  <p>
                    Yes. Scenith's bulk generation mode lets you upload a CSV with 
                    product names, descriptions, and target audiences. Generate ad 
                    creatives for your entire catalog in one batch — perfect for 
                    stores with 50+ SKUs or seasonal product drops.
                  </p>
                </div>
              </details>

              <details className="sac-faq-item">
                <summary className="sac-faq-q">
                  Does Scenith work for any product category?
                  <span className="sac-faq-chevron">▼</span>
                </summary>
                <div className="sac-faq-a">
                  <p>
                    Scenith works across all ecommerce categories — fashion, beauty, 
                    home goods, electronics, supplements, pet products, baby gear, 
                    automotive, outdoor, and more. The AI understands product categories 
                    and generates appropriate visual styles and copy frameworks for each.
                  </p>
                </div>
              </details>

              <details className="sac-faq-item">
                <summary className="sac-faq-q">
                  How do I get the ad creative into Facebook/TikTok/Google?
                  <span className="sac-faq-chevron">▼</span>
                </summary>
                <div className="sac-faq-a">
                  <p>
                    Download your image(s) as PNGs and copy the AI-generated ad copy. 
                    Paste everything into your ads manager. For carousels, download 
                    each card individually and upload in order. For Google Shopping, 
                    use the image directly in your product feed. Scenith also exports 
                    ad copy formatted for each platform's requirements.
                  </p>
                </div>
              </details>

              <details className="sac-faq-item">
                <summary className="sac-faq-q">
                  Can I use my own product photos as reference?
                  <span className="sac-faq-chevron">▼</span>
                </summary>
                <div className="sac-faq-a">
                  <p>
                    Absolutely. Scenith's img2img mode lets you upload existing product 
                    photos. The AI uses them as reference to generate new ad creatives 
                    that maintain your product's unique details — colors, textures, 
                    logos, and packaging. This is our most popular feature for stores 
                    that already have decent product photography.
                  </p>
                </div>
              </details>

              <details className="sac-faq-item">
                <summary className="sac-faq-q">
                  Which ad platform should I start with as a new store?
                  <span className="sac-faq-chevron">▼</span>
                </summary>
                <div className="sac-faq-a">
                  <p>
                    For most new Shopify stores, start with Facebook Feed + Instagram 
                    Feed (same creative works for both). Once you have 3-5 winning 
                    creatives, expand to TikTok. Google Shopping works best once you 
                    have customer data for retargeting. Scenith generates platform-specific 
                    creatives for each stage of your growth.
                  </p>
                </div>
              </details>

              <details className="sac-faq-item">
                <summary className="sac-faq-q">
                  How much does it cost to generate ad creatives?
                  <span className="sac-faq-chevron">▼</span>
                </summary>
                <div className="sac-faq-a">
                  <p>
                    Each ad creative costs 10-15 credits depending on the AI model 
                    and settings. On the $9/month Lite plan (300 credits), you can 
                    generate approximately 20-30 ad creatives per month — or 60-90 
                    if you use the most affordable model (Imagen 4 Fast at 10 credits). 
                    That's $0.10-0.30 per creative vs $50-500 for traditional production.
                  </p>
                </div>
              </details>

              <details className="sac-faq-item">
                <summary className="sac-faq-q">
                  Can I use Scenith creatives for YouTube ads?
                  <span className="sac-faq-chevron">▼</span>
                </summary>
                <div className="sac-faq-a">
                  <p>
                    Yes. Scenith generates ad creatives for YouTube in-stream and 
                    discovery ads. Use landscape (16:9) aspect ratio for in-stream ads. 
                    The platform also generates video scripts optimized for YouTube's 
                    "skip after 5 seconds" reality — the hook is everything.
                  </p>
                </div>
              </details>

              <details className="sac-faq-item">
                <summary className="sac-faq-q">
                  Does Scenith integrate directly with Shopify?
                  <span className="sac-faq-chevron">▼</span>
                </summary>
                <div className="sac-faq-a">
                  <p>
                    Yes. Connect your Shopify store to Scenith and pull product details 
                    directly into the ad generator. Generate creatives for specific 
                    collections, price ranges, or margin targets. The integration is 
                    available on our Pro plan ($29/month).
                  </p>
                </div>
              </details>

              <details className="sac-faq-item">
                <summary className="sac-faq-q">
                  Can I generate video ads, not just static images?
                  <span className="sac-faq-chevron">▼</span>
                </summary>
                <div className="sac-faq-a">
                  <p>
                    Yes. Scenith generates both static images and short video scripts. 
                    Take the script and animate your images using our AI video generator 
                    (Kling, Veo, Wan 2.5 models). Or use the script as a brief for 
                    UGC creators. Video ads outperform static images on every platform — 
                    we recommend testing both formats.
                  </p>
                </div>
              </details>

            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              RELATED TOOLS
          ════════════════════════════════════════════════════ */}
          <section className="sac-section">
            <div className="sac-section-label">More Scenith tools</div>
            <h2 className="sac-section-title">Complete Your Shopify Marketing Stack</h2>
            <p className="sac-section-sub" style={{ marginBottom: 24 }}>
              Ad creatives are just one piece. Scenith covers every content format 
              a Shopify store needs.
            </p>

            <div className="sac-related-grid">
              <a href="https://scenith.in/create-ai-content?tab=video&utm_source=shopify-ad-generator&utm_medium=related-tools" className="sac-related-card">
                <span className="sac-related-icon">🎬</span>
                <h4>AI Video Generator</h4>
                <p>Turn your ad scripts into animated videos with Kling, Veo, and Wan 2.5.</p>
              </a>
              <a href="https://scenith.in/create-ai-content?tab=voice&utm_source=shopify-ad-generator&utm_medium=related-tools" className="sac-related-card">
                <span className="sac-related-icon">🎙️</span>
                <h4>AI Voice Generator</h4>
                <p>Add professional voiceover to your video ads in 40+ natural voices.</p>
              </a>
              <a href="https://scenith.in/tools/add-subtitles-to-videos" className="sac-related-card">
                <span className="sac-related-icon">💬</span>
                <h4>Add Subtitles to Videos</h4>
                <p>Boost video ad engagement by 40% with auto-generated captions.</p>
              </a>
              <a href="https://scenith.in/tools" className="sac-related-card">
                <span className="sac-related-icon">🛠️</span>
                <h4>All AI Tools</h4>
                <p>Explore the full suite of Scenith micro-tools for creators and marketers.</p>
              </a>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              FOOTER CTA
          ════════════════════════════════════════════════════ */}
          <div className="sac-footer-cta">
            <h2>
              Your Product Deserves{" "}
              <span style={{ background: "linear-gradient(135deg, #f59e0b, #fb923c)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Better Ads
              </span>
            </h2>
            <p>
              Stop losing sales to boring creatives. Generate high-converting ad 
              images and copy for Facebook, TikTok, and Google Shopping — free to 
              start, no design skills needed.
            </p>
            <a href={CTA_URL} className="sac-cta-primary" style={{ display: "inline-flex" }}>
              🛍️ Generate My Ad Creative Now
              <span className="sac-cta-arrow">→</span>
            </a>
            <p>
              50 free credits · No credit card · Commercial rights included
            </p>
          </div>

        </div>{/* /sac-content */}
      </div>{/* /sac-page */}
    </>
  );
}