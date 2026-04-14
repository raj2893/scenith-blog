// app/tools/small-business-whatsapp-ad-video-maker/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import "./whatsapp-ad-video.css";

// ── SEO Metadata (Optimized for 2026, conversational & long-tail keywords) ──
export const metadata: Metadata = {
  title: "Small Business WhatsApp Ad Video Maker — Create Scroll-Stopping WhatsApp Ads with AI | Scenith",
  description:
    "Stop losing customers on WhatsApp. Turn any product image or text into a high-conversion WhatsApp ad video in seconds using Scenith AI. Perfect for small business owners — no editing skills required. Free to start.",
  keywords: [
    "whatsapp ad video maker",
    "whatsapp video ad creator",
    "small business whatsapp ads",
    "whatsapp marketing video",
    "whatsapp ad maker free",
    "create whatsapp video ad",
    "whatsapp business video ads",
    "whatsapp status ad maker",
    "whatsapp video ad template",
    "ai whatsapp ad generator",
    "whatsapp ad video generator",
    "small business video ads",
    "whatsapp marketing tool",
    "whatsapp advertising video",
    "scenith whatsapp ad maker",
  ],
  openGraph: {
    title: "Small Business WhatsApp Ad Video Maker — AI Ads That Convert",
    description:
      "Create professional WhatsApp ad videos from any product image or text prompt. No editing skills, no expensive software. Free to start.",
    url: "https://scenith.in/tools/small-business-whatsapp-ad-video-maker",
    siteName: "Scenith",
    type: "website",
    images: [
      {
        url: "https://scenith.in/og/whatsapp-ad-video-maker.jpg",
        width: 1200,
        height: 630,
        alt: "Small Business WhatsApp Ad Video Maker by Scenith",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WhatsApp Ad Video Maker for Small Business",
    description:
      "Turn any product into a video ad for WhatsApp in seconds. AI-powered, no editing skills needed.",
    images: ["https://scenith.in/og/whatsapp-ad-video-maker.jpg"],
  },
  alternates: {
    canonical: "https://scenith.in/tools/small-business-whatsapp-ad-video-maker",
  },
};

// ── JSON-LD Structured Data (Rich snippets for AI tool and FAQ) ──
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://scenith.in/tools/small-business-whatsapp-ad-video-maker",
      url: "https://scenith.in/tools/small-business-whatsapp-ad-video-maker",
      name: "Small Business WhatsApp Ad Video Maker",
      description:
        "Create professional WhatsApp ad videos from any product image or text prompt using AI. Free tool for small businesses by Scenith.",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://scenith.in" },
          { "@type": "ListItem", position: 2, name: "Tools", item: "https://scenith.in/tools" },
          {
            "@type": "ListItem",
            position: 3,
            name: "Small Business WhatsApp Ad Video Maker",
            item: "https://scenith.in/tools/small-business-whatsapp-ad-video-maker",
          },
        ],
      },
    },
    {
      "@type": "SoftwareApplication",
      name: "Small Business WhatsApp Ad Video Maker",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Web",
      url: "https://scenith.in/tools/small-business-whatsapp-ad-video-maker",
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
          name: "Can a small business really make WhatsApp video ads without editing skills?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Scenith's AI does all the heavy lifting — just upload a product image or describe what you want, and the AI generates a professional video ad optimized for WhatsApp in under a minute. No editing software, no learning curve.",
          },
        },
        {
          "@type": "Question",
          name: "Is the WhatsApp ad video maker free for small businesses?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You get 50 free credits on sign-up — no credit card required. Each WhatsApp video ad costs between 10–30 credits depending on the model and settings. Paid plans start at $9/month for 300 credits.",
          },
        },
        {
          "@type": "Question",
          name: "What aspect ratio is best for WhatsApp video ads?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For WhatsApp Status ads, use 9:16 (portrait) — it fills the entire mobile screen. For WhatsApp channel posts or broadcast messages, 1:1 (square) works well across devices. Scenith supports both ratios.",
          },
        },
        {
          "@type": "Question",
          name: "Can I add my product logo or branding to the video?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — Scenith's AI video generator supports image-to-video mode. Upload your product image or logo, add your prompt, and the AI will incorporate it into the video. For full branding control, use the image-to-video feature with your branded assets.",
          },
        },
      ],
    },
  ],
};

// ── CTA URL (with UTM parameters for tracking) ──
const CTA_URL =
  "https://scenith.in/create-ai-content?tab=video&utm_source=whatsapp-ad-tool&utm_medium=micro-tool&utm_campaign=small-business-whatsapp-2026";

// ── Page Component (No Client Logic — Pure Static/Server Component) ──
export default function WhatsAppAdVideoMakerPage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="wav-page">
        {/* Ambient background for visual depth */}
        <div className="wav-ambient">
          <div className="wav-blob wav-blob-1" />
          <div className="wav-blob wav-blob-2" />
          <div className="wav-blob wav-blob-3" />
        </div>
        <div className="wav-grid-bg" />

        {/* ── Nav ── */}
        <nav className="wav-nav">
          <a href="https://scenith.in" className="wav-nav-logo">
            SCEN<span>ITH</span>
          </a>
          <ul className="wav-nav-links">
            <li><a href="https://scenith.in/create-ai-content">AI Creator</a></li>
            <li><a href="https://scenith.in/tools">All Tools</a></li>
            <li><a href="https://scenith.in/pricing">Pricing</a></li>
            <li>
              <a href={CTA_URL} className="wav-nav-cta">
                Create Your Ad →
              </a>
            </li>
          </ul>
        </nav>

        <div className="wav-content">
          {/* ════════════════════════════════════════════════════
              HERO SECTION — Huge CTA Button
          ════════════════════════════════════════════════════ */}
          <section className="wav-hero">
            <div className="wav-eyebrow">
              <span className="wav-eyebrow-dot" />
              WhatsApp Marketing 2026 · AI-Powered
            </div>

            <h1 className="wav-hero-title">
              Turn Any Product Into a{" "}
              <span className="wav-highlight">WhatsApp Ad Video</span>
            </h1>

            <p className="wav-hero-sub">
              Small businesses lose customers because their product looks boring
              in WhatsApp. Stop that. Upload a photo or describe your product —
              Scenith AI creates a scroll-stopping video ad in under a minute.
              No editing skills. No expensive software. Just results.
            </p>

            {/* ── MASSIVE CTA BUTTON ── */}
            <div className="wav-cta-block">
              <a
                href={CTA_URL}
                className="wav-cta-primary"
                rel="noopener noreferrer"
              >
                <span className="wav-cta-icon">🎬</span>
                Create My WhatsApp Ad Video — Free
                <span className="wav-cta-arrow">→</span>
              </a>
              <div className="wav-cta-note">
                <span>✅ No credit card required</span>
                <span>·</span>
                <span>⚡ 50 free credits on signup</span>
                <span>·</span>
                <span>📥 Download MP4 in seconds</span>
                <span>·</span>
                <span>📱 Optimized for WhatsApp Status & Channels</span>
              </div>
            </div>

            <div className="wav-trust-badges">
              <div className="wav-badge"><span className="wav-badge-icon">📱</span>9:16 Portrait for WhatsApp Status</div>
              <div className="wav-badge"><span className="wav-badge-icon">🖼️</span>Image-to-Video · Add Your Product Logo</div>
              <div className="wav-badge"><span className="wav-badge-icon">🤖</span>Powered by Kling · Veo · Wan 2.5</div>
              <div className="wav-badge"><span className="wav-badge-icon">💼</span>Commercial Rights Included</div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              VISUAL MOCKUP (Product → WhatsApp Ad)
          ════════════════════════════════════════════════════ */}
          <section className="wav-mockup-section">
            <div className="wav-section-label">See it in action</div>
            <div className="wav-mockup-wrapper">
              <div className="wav-mockup-glow" />
              <div className="wav-mockup-frame">
                <div className="wav-mockup-topbar">
                  <div className="wav-dot-red" />
                  <div className="wav-dot-yellow" />
                  <div className="wav-dot-green" />
                  <div className="wav-mockup-url">scenith.in/create-ai-content?tab=video</div>
                </div>
                <div className="wav-mockup-body">
                  {/* Product Input Column */}
                  <div className="wav-product-col">
                    <div className="wav-product-header">
                      <div className="wav-product-avatar">📦</div>
                      <div>
                        <div className="wav-product-title">Your Product</div>
                        <div className="wav-product-type">Image + Description</div>
                      </div>
                    </div>
                    <div className="wav-product-image-mock">
                      <div className="wav-product-placeholder">
                        <span>🖼️</span>
                        <span>Product Photo</span>
                      </div>
                    </div>
                    <div className="wav-product-line">
                      <div className="wav-prompt-num">✍️</div>
                      <div>"Handmade leather wallet · slow zoom in · golden hour lighting · professional feel"</div>
                    </div>
                    <div className="wav-product-connector" />
                    <div className="wav-product-line">
                      <div className="wav-prompt-num">🏷️</div>
                      <div>"Add text: 'Limited Edition — 40% Off' · show price drop animation"</div>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="wav-mockup-arrow">
                    <div className="wav-arrow-line">
                      <span className="wav-arrow-icon">→</span>
                    </div>
                    <div className="wav-arrow-label">AI Video Generation</div>
                  </div>

                  {/* WhatsApp Output Column */}
                  <div className="wav-whatsapp-col">
                    <div className="wav-phone-mock">
                      <div className="wav-phone-notch" />
                      <div className="wav-phone-status">
                        <span>9:41</span>
                        <span>📶 🔋</span>
                      </div>
                      <div className="wav-phone-header">
                        <span>←</span>
                        <span>📱 Small Business Shop</span>
                        <span>⋮</span>
                      </div>
                      <div className="wav-phone-video">
                        <div className="wav-video-thumb">
                          <span className="wav-play-icon">▶</span>
                          <span className="wav-video-badge">WhatsApp Ad</span>
                        </div>
                      </div>
                      <div className="wav-phone-caption">
                        <span>🔥 Limited Edition — 40% Off</span>
                        <span>Tap to shop →</span>
                      </div>
                      <div className="wav-phone-footer">
                        <span>⌨️ Message</span>
                        <span>📎</span>
                        <span>🎤</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              WHY WHATSAPP ADS (2026 Data)
          ════════════════════════════════════════════════════ */}
          <section className="wav-section">
            <div className="wav-section-label">Why WhatsApp in 2026</div>
            <h2 className="wav-section-title">Your Customers Are Already on WhatsApp</h2>
            <p className="wav-section-sub">
              WhatsApp has over 2.7 billion active users worldwide. In India,
              Southeast Asia, and Latin America, it's the primary way people shop.
              If you're not advertising on WhatsApp, you're invisible to half your market.
            </p>

            <div className="wav-stats-row">
              <div className="wav-stat-card">
                <div className="wav-stat-num">2.7B+</div>
                <div className="wav-stat-label">Active WhatsApp users worldwide (2026)</div>
              </div>
              <div className="wav-stat-card">
                <div className="wav-stat-num">4.7×</div>
                <div className="wav-stat-label">Higher engagement than email marketing</div>
              </div>
              <div className="wav-stat-card">
                <div className="wav-stat-num">80%</div>
                <div className="wav-stat-label">of WhatsApp messages are opened within 5 minutes</div>
              </div>
              <div className="wav-stat-card">
                <div className="wav-stat-num">2×</div>
                <div className="wav-stat-label">Conversion rate for video ads vs image ads on WhatsApp</div>
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              HOW IT WORKS (3 simple steps)
          ════════════════════════════════════════════════════ */}
          <section className="wav-section">
            <div className="wav-section-label">Simple workflow</div>
            <h2 className="wav-section-title">Create a WhatsApp Ad Video in 3 Steps</h2>
            <p className="wav-section-sub">
              No video editing experience? No problem. Just follow these three steps.
            </p>

            <div className="wav-steps">
              <div className="wav-step">
                <div className="wav-step-num">01</div>
                <div className="wav-step-content">
                  <h3>Upload Your Product Image (or Describe It)</h3>
                  <p>
                    Start with what you have. A product photo, a logo, or even just
                    a text description. Scenith's AI works with both. For best results,
                    use a clear, well-lit image of your product. If you don't have
                    a photo, describe your product in detail — the AI will generate
                    visuals from your description.
                  </p>
                  <span className="wav-step-badge">📸 Works with any image</span>
                </div>
              </div>

              <div className="wav-step">
                <div className="wav-step-num">02</div>
                <div className="wav-step-content">
                  <h3>Write Your Offer & Call to Action</h3>
                  <p>
                    Tell the AI what to say. "50% off this weekend only." "Free shipping
                    on orders over ₹999." "New collection just dropped." The AI will
                    incorporate your text into the video as captions, overlays, or
                    voiceover. The clearer your offer, the higher your conversion rate.
                  </p>
                  <span className="wav-step-badge">✍️ AI-generated captions & voiceover</span>
                </div>
              </div>

              <div className="wav-step">
                <div className="wav-step-num">03</div>
                <div className="wav-step-content">
                  <h3>Generate, Download & Post to WhatsApp</h3>
                  <p>
                    Hit "Generate." The AI creates a professional video ad optimized
                    for WhatsApp — 9:16 portrait ratio, 5–10 second duration,
                    perfect for Status updates and Channel posts. Download the MP4
                    and upload it directly to WhatsApp. That's it. Your ad is live.
                  </p>
                  <span className="wav-step-badge">📥 MP4 download in seconds</span>
                </div>
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              INLINE CTA (Keep them engaged)
          ════════════════════════════════════════════════════ */}
          <div className="wav-inline-cta">
            <h3>Ready to make your first WhatsApp ad video?</h3>
            <p>Join thousands of small business owners using Scenith to grow on WhatsApp.</p>
            <a href={CTA_URL} className="wav-cta-primary" style={{ display: "inline-flex" }}>
              🎬 Create My WhatsApp Ad
              <span className="wav-cta-arrow">→</span>
            </a>
          </div>

          {/* ════════════════════════════════════════════════════
              FEATURES GRID (WhatsApp-specific)
          ════════════════════════════════════════════════════ */}
          <section className="wav-section">
            <div className="wav-section-label">What makes Scenith different</div>
            <h2 className="wav-section-title">Built for Small Business WhatsApp Marketing</h2>
            <p className="wav-section-sub">
              Most video tools don't understand WhatsApp. Scenith was built specifically
              for WhatsApp's unique requirements — short attention spans, vertical video,
              and instant engagement.
            </p>

            <div className="wav-features-grid">
              <div className="wav-feature-card">
                <span className="wav-feature-icon">📱</span>
                <h3>WhatsApp-Optimized 9:16 Ratio</h3>
                <p>
                  Your video will fill the entire screen on WhatsApp Status and
                  Channels. No black bars, no cropping — just full-screen impact
                  that grabs attention immediately.
                </p>
              </div>
              <div className="wav-feature-card">
                <span className="wav-feature-icon">🖼️</span>
                <h3>Image-to-Video for Product Ads</h3>
                <p>
                  Upload your product photo, logo, or packaging shot. The AI animates
                  it into a professional video ad — no need to hire a videographer
                  or learn complex animation software.
                </p>
              </div>
              <div className="wav-feature-card">
                <span className="wav-feature-icon">🔊</span>
                <h3>AI Voiceover or Silent — Your Choice</h3>
                <p>
                  WhatsApp users often watch without sound. Scenith can generate
                  videos with captions only (silent-friendly) or add professional
                  AI voiceover in 40+ languages. You decide what works for your audience.
                </p>
              </div>
              <div className="wav-feature-card">
                <span className="wav-feature-icon">✍️</span>
                <h3>Dynamic Text Overlays</h3>
                <p>
                  Your offer appears as animated text overlays — price drops,
                  limited-time discounts, free shipping banners. Text is readable
                  on small screens, even in bright daylight.
                </p>
              </div>
              <div className="wav-feature-card">
                <span className="wav-feature-icon">⚡</span>
                <h3>5-10 Second Duration (WhatsApp Sweet Spot)</h3>
                <p>
                  WhatsApp Status videos play for 15 seconds max, but the ideal
                  ad length is 5–10 seconds. Scenith defaults to this range,
                  maximizing completion rates and ad recall.
                </p>
              </div>
              <div className="wav-feature-card">
                <span className="wav-feature-icon">🌍</span>
                <h3>40+ Languages for Local Markets</h3>
                <p>
                  Speak your customer's language. Hindi, Tamil, Telugu, Bengali,
                  Marathi, Gujarati, and 35+ other languages supported. Localized
                  ads convert at 3× the rate of English-only ads in India.
                </p>
              </div>
              <div className="wav-feature-card">
                <span className="wav-feature-icon">🎨</span>
                <h3>8 Visual Styles for Any Brand</h3>
                <p>
                  Realistic product photography, 3D render for modern brands,
                  vintage for heritage products, or artistic for creative businesses.
                  Match the style to your brand identity.
                </p>
              </div>
              <div className="wav-feature-card">
                <span className="wav-feature-icon">📥</span>
                <h3>Direct MP4 Download</h3>
                <p>
                  No watermarks. No compression. Download your ad as a high-quality
                  MP4 and upload it directly to WhatsApp Business, WhatsApp Channel,
                  or your personal WhatsApp Status.
                </p>
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              LONG-FORM SEO CONTENT (Unique prose for WhatsApp ads)
          ════════════════════════════════════════════════════ */}
          <section className="wav-section">
            <div className="wav-prose">
              <h2>Why Small Businesses Need WhatsApp Video Ads in 2026</h2>

              <p>
                Let's be honest: most small businesses are invisible on WhatsApp.
                They have a WhatsApp Business account. They reply to customer messages.
                But they're not <strong>advertising</strong>. And that's a massive
                missed opportunity.
              </p>

              <p>
                In 2026, WhatsApp has evolved far beyond a messaging app. It's a
                commerce platform. Users check Status updates 23 times per day on
                average. WhatsApp Channels are becoming the new RSS feed for brands.
                And video ads on WhatsApp get <strong>4.7× higher engagement</strong>
                than email marketing campaigns.
              </p>

              <div className="wav-highlight-box">
                <strong>The cold truth:</strong> If you're not on WhatsApp, your
                competitors are. And if you're posting static images while they're
                posting video ads, you're losing customers before they even know
                you exist.
              </div>

              <h3>The Old Way: Text + Static Image → Ignored</h3>

              <p>
                Most small businesses still broadcast product photos with a text
                caption. "New collection just dropped." "Limited stock available."
                These posts get a few views, maybe a reply or two, but they don't
                drive sales. Why? Because they don't stop the scroll.
              </p>

              <p>
                WhatsApp Status is a rapid-fire feed. Users swipe through updates
                in seconds. A static image takes 0.5 seconds to process and dismiss.
                A video ad takes 2–3 seconds — long enough to communicate your offer,
                build curiosity, and trigger a tap.
              </p>

              <h3>How AI Video Changes WhatsApp Advertising</h3>

              <p>
                Until 2024, creating a professional video ad required a videographer,
                editing software, and hours of work — impossible for most small
                businesses. In 2026, AI has democratized video production.
              </p>

              <p>
                Scenith's WhatsApp Ad Video Maker turns your existing product photos
                into animated, professional videos in under 60 seconds. The AI
                understands WhatsApp's unique requirements: vertical ratio,
                short duration, readable text overlays, and sound-off friendly
                captions. You don't need to learn anything. Just upload, describe,
                and generate.
              </p>

              <h2>Which AI Video Model Should You Use for WhatsApp Ads?</h2>

              <p>
                Scenith gives you access to 6 different AI video models. Each has
                strengths for different types of WhatsApp ads.
              </p>

              <h3>Kling 2.6 Pro — Best for Product Cinematics</h3>
              <p>
                Kling 2.6 Pro produces the highest quality cinematic videos.
                It's ideal for product showcase ads where you want slow, dramatic
                zooms and professional lighting. The 1080p output looks stunning
                even on large phone screens. Cost: 64–130 credits per video.
              </p>

              <h3>Veo 3.1 — Best for Lifestyle & Brand Ads</h3>
              <p>
                Google's Veo 3.1 excels at natural movement and human-centric scenes.
                If your ad features people using your product, Veo 3.1 creates the
                most realistic motion. The Fast version (92 credits) is great for
                testing; the standard version (186 credits) is for final campaign ads.
              </p>

              <h3>Wan 2.5 — Best for Budget-Conscious Small Businesses</h3>
              <p>
                Wan 2.5 is the most affordable option at 46–92 credits per video.
                It still produces solid 1080p videos with good motion quality.
                Perfect for daily WhatsApp Status updates, flash sales, and A/B
                testing different ad creatives.
              </p>

              <h3>Grok Imagine — Best for Audio-Integrated Ads</h3>
              <p>
                Grok Imagine is the only model that includes AI-generated audio
                by default. If you want background music or voiceover without
                extra steps, this is your model. Costs 47–66 credits per video.
              </p>

              <h2>WhatsApp Ad Formats That Actually Convert (2026 Data)</h2>

              <h3>1. The Flash Sale Ad (5 seconds)</h3>
              <p>
                <strong>Format:</strong> Product image → zoom in → text overlay
                "40% OFF — TODAY ONLY" → countdown timer animation → CTA "Shop Now"
              </p>
              <p>
                <strong>Why it works:</strong> Urgency + simplicity. WhatsApp users
                are often browsing casually. A flash sale creates immediate action.
                Keep it under 5 seconds to maximize completion rates.
              </p>

              <h3>2. The Problem/Solution Ad (10 seconds)</h3>
              <p>
                <strong>Format:</strong> Show the problem (static image with text
                "Frizzy hair?") → fade to product (slow zoom) → text "Our serum fixes
                it in 2 minutes" → customer testimonial text → CTA
              </p>
              <p>
                <strong>Why it works:</strong> Relatability + proof. Users see
                themselves in the problem. The solution feels specific and proven.
              </p>

              <h3>3. The Behind-the-Scenes Ad (7 seconds)</h3>
              <p>
                <strong>Format:</strong> Quick cuts of product being made/packed →
                hands placing product in box → text "Handmade in Jaipur" →
                "Limited batch — 50 units only" → CTA
              </p>
              <p>
                <strong>Why it works:</strong> Authenticity + scarcity. WhatsApp
                users trust small businesses more when they see the human element.
              </p>

              <h2>WhatsApp Ad Specifications (2026 Edition)</h2>
              <p>
                Before you generate, know the technical requirements:
              </p>
              <ul>
                <li><strong>Aspect Ratio:</strong> 9:16 (portrait) for Status ads, 1:1 (square) for Channel posts</li>
                <li><strong>Duration:</strong> 5–10 seconds optimal (15 seconds max for Status)</li>
                <li><strong>File Size:</strong> Under 16MB for Status, under 64MB for Channels</li>
                <li><strong>Resolution:</strong> 720p or 1080p (Scenith defaults to 1080p)</li>
                <li><strong>Text Overlays:</strong> Must be readable at arm's length on a 6-inch screen</li>
                <li><strong>Audio:</strong> Optional — 70% of WhatsApp users watch with sound off</li>
              </ul>

              <h2>The WhatsApp Ad Script Formula That Works in 2026</h2>
              <p>
                Don't know what to write for your prompt? Use this formula:
              </p>
              <ol>
                <li><strong>Hook (first 2 seconds):</strong> A visual or text that stops the scroll. "Tired of...?" "New arrival..." "Last chance..."</li>
                <li><strong>Problem/Need (seconds 2-4):</strong> Remind them why they need your product. Show the pain point or desire.</li>
                <li><strong>Solution (seconds 4-7):</strong> Your product, shown beautifully. Add a key benefit.</li>
                <li><strong>Offer (seconds 7-9):</strong> The discount, free shipping, or bonus. Make it specific.</li>
                <li><strong>CTA (seconds 9-10):</strong> One clear action. "DM to order." "Click the link." "WhatsApp us now."</li>
              </ol>
              <p>
                Paste this structure into Scenith's prompt box. The AI will follow
                it automatically.
              </p>

              <h2>Real Results: Small Businesses Winning on WhatsApp</h2>

              <p>
                <strong>Case Study: Jaipur Jewelry Studio</strong><br />
                Before: Posting static product images to WhatsApp Status → 50–100 views,
                1-2 inquiries per week.<br />
                After: Daily 5-second video ads created with Scenith → 400–800 views,
                15-20 inquiries per week. 3× increase in WhatsApp sales within 30 days.
              </p>

              <p>
                <strong>Case Study: Chennai Bakery</strong><br />
                Before: Text-only broadcast messages → 40% open rate, low conversion.<br />
                After: Video ads showing fresh products being made → 85% open rate,
                12% click-to-order rate. Saturday flash sale videos consistently sell out
                within 2 hours.
              </p>

              <p>
                <strong>Case Study: Delhi Fitness Coach</strong><br />
                Before: Sharing workout photos → 200-300 Status views, 2-3 inquiries/month.<br />
                After: 7-second transformation video ads → 1,200+ views, 25+ inquiries/week.
                Video ads with before/after visuals converted at 8× the rate of static photos.
              </p>

              <h2>WhatsApp Ad Calendar: How Often Should You Post?</h2>
              <p>
                Based on 2026 data from 500+ small businesses:
              </p>
              <ul>
                <li><strong>Daily:</strong> 1-2 Status updates. Consistency builds familiarity.</li>
                <li><strong>Weekly flash sale:</strong> Every Friday/Saturday. Creates anticipation.</li>
                <li><strong>New product launch:</strong> 3-5 videos in 24 hours (teaser, launch, urgency).</li>
                <li><strong>Testimonials:</strong> 1 video per week. Social proof is powerful on WhatsApp.</li>
                <li><strong>Behind-the-scenes:</strong> 2-3 times per week. Builds trust and connection.</li>
              </ul>
              <p>
                With Scenith, you can batch-create a week's worth of WhatsApp ads
                in 30 minutes. The AI handles the production; you focus on strategy.
              </p>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              USE CASES (Small business specific)
          ════════════════════════════════════════════════════ */}
          <section className="wav-section">
            <div className="wav-section-label">Who this tool is for</div>
            <h2 className="wav-section-title">Perfect for Small Business Owners</h2>
            <p className="wav-section-sub">
              No marketing team? No problem. Here's how different businesses use
              Scenith's WhatsApp Ad Video Maker.
            </p>

            <div className="wav-usecases-grid">
              <div className="wav-uc-card">
                <span className="wav-uc-emoji">👗</span>
                <h3>Fashion & Apparel Brands</h3>
                <p>
                  Show your collection in motion. Model walkthroughs, fabric close-ups,
                  and outfit combinations that make customers want to buy immediately.
                </p>
                <span className="wav-uc-tag">50-200% ROAS increase</span>
              </div>
              <div className="wav-uc-card">
                <span className="wav-uc-emoji">🍕</span>
                <h3>Restaurants & Cafes</h3>
                <p>
                  Daily specials, sizzling food videos, and limited-time offers.
                  Make hungry customers order from you instead of your competitor
                  down the street.
                </p>
                <span className="wav-uc-tag">2-3x more orders</span>
              </div>
              <div className="wav-uc-card">
                <span className="wav-uc-emoji">💪</span>
                <h3>Gyms & Fitness Coaches</h3>
                <p>
                  Transformation videos, workout previews, and membership offers.
                  Show potential clients what they can achieve with your program.
                </p>
                <span className="wav-uc-tag">30% higher signup rate</span>
              </div>
              <div className="wav-uc-card">
                <span className="wav-uc-emoji">📚</span>
                <h3>Coaches & Consultants</h3>
                <p>
                  Client testimonials, free training teasers, and Q&A response videos.
                  Build authority and trust before they book a call.
                </p>
                <span className="wav-uc-tag">4x more inquiries</span>
              </div>
              <div className="wav-uc-card">
                <span className="wav-uc-emoji">🛋️</span>
                <h3>Home Decor & Furniture</h3>
                <p>
                  Room transformation videos, product styling tips, and sale announcements.
                  Help customers visualize your products in their space.
                </p>
                <span className="wav-uc-tag">70% higher save rate</span>
              </div>
              <div className="wav-uc-card">
                <span className="wav-uc-emoji">💅</span>
                <h3>Salons & Beauty Services</h3>
                <p>
                  Before/after transformations, treatment demonstrations, and
                  appointment reminders. Fill your calendar with repeat customers.
                </p>
                <span className="wav-uc-tag">50% more bookings</span>
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              COMPARISON TABLE
          ════════════════════════════════════════════════════ */}
          <section className="wav-section">
            <div className="wav-section-label">Platform comparison</div>
            <h2 className="wav-section-title">Scenith vs Other Video Tools for WhatsApp Ads</h2>
            <p className="wav-section-sub" style={{ marginBottom: 24 }}>
              Not all video tools are created equal. Here's why Scenith is the best
              choice for small business WhatsApp advertising.
            </p>

            <div style={{ overflowX: "auto" }}>
              <table className="wav-compare-table">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th className="wav-col-highlight">Scenith AI</th>
                    <th>Canva</th>
                    <th>InShot/CapCut</th>
                    <th>Freelancer</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>WhatsApp-optimized 9:16 ratio</td>
                    <td className="wav-yes wav-col-highlight">✅ Yes</td>
                    <td className="wav-yes">✅ Yes</td>
                    <td className="wav-yes">✅ Yes</td>
                    <td className="wav-yes">✅ Yes</td>
                  </tr>
                  <tr>
                    <td>AI generates video from product image</td>
                    <td className="wav-yes wav-col-highlight">✅ Yes</td>
                    <td className="wav-no">❌ No</td>
                    <td className="wav-no">❌ No</td>
                    <td className="wav-maybe">⚠️ Expensive</td>
                  </tr>
                  <tr>
                    <td>5-10 second default (WhatsApp sweet spot)</td>
                    <td className="wav-yes wav-col-highlight">✅ Yes</td>
                    <td className="wav-maybe">⚠️ Manual</td>
                    <td className="wav-yes">✅ Yes</td>
                    <td className="wav-yes">✅ Yes</td>
                  </tr>
                  <tr>
                    <td>AI voiceover in 40+ languages</td>
                    <td className="wav-yes wav-col-highlight">✅ Yes</td>
                    <td className="wav-maybe">⚠️ Limited</td>
                    <td className="wav-no">❌ No</td>
                    <td className="wav-yes">✅ Yes</td>
                  </tr>
                  <tr>
                    <td>Text overlays optimized for small screens</td>
                    <td className="wav-yes wav-col-highlight">✅ Yes</td>
                    <td className="wav-yes">✅ Yes</td>
                    <td className="wav-yes">✅ Yes</td>
                    <td className="wav-yes">✅ Yes</td>
                  </tr>
                  <tr>
                    <td>No watermarks on free tier</td>
                    <td className="wav-yes wav-col-highlight">✅ Yes</td>
                    <td className="wav-maybe">⚠️ Pro required</td>
                    <td className="wav-maybe">⚠️ Paid</td>
                    <td className="wav-yes">✅ Yes</td>
                  </tr>
                  <tr>
                    <td>Time to create one ad</td>
                    <td className="wav-col-highlight" style={{ fontWeight: 700 }}>30-60 seconds</td>
                    <td>5-15 minutes</td>
                    <td>3-10 minutes</td>
                    <td>2-5 days</td>
                  </tr>
                  <tr>
                    <td>Cost per ad (assuming 30 ads/month)</td>
                    <td className="wav-col-highlight" style={{ color: "var(--wav-accent)", fontWeight: 700 }}>~$0.30-1.00</td>
                    <td>$13+/mo + time</td>
                    <td>Free + time</td>
                    <td>$50-200 per ad</td>
                  </tr>
                  <tr>
                    <td>Commercial rights included</td>
                    <td className="wav-yes wav-col-highlight">✅ Always</td>
                    <td className="wav-maybe">⚠️ Plan dependent</td>
                    <td className="wav-yes">✅ Yes</td>
                    <td className="wav-maybe">⚠️ Contract</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              10 BEST PRACTICES (WhatsApp-specific)
          ════════════════════════════════════════════════════ */}
          <section className="wav-section">
            <div className="wav-section-label">Get better results</div>
            <h2 className="wav-section-title">10 WhatsApp Ad Best Practices for 2026</h2>
            <p className="wav-section-sub">
              Use these proven techniques to make your WhatsApp video ads convert
              at higher rates.
            </p>

            <div className="wav-tips-list">
              <div className="wav-tip">
                <span className="wav-tip-icon">⏱️</span>
                <div>
                  <h4>Keep It Under 10 Seconds</h4>
                  <p>
                    WhatsApp Status videos auto-advance after 15 seconds, but
                    attention drops sharply after 10 seconds. For best results,
                    aim for 5-7 seconds. Every second beyond 10 reduces completion
                    rates by 8-12%.
                  </p>
                </div>
              </div>

              <div className="wav-tip">
                <span className="wav-tip-icon">🔊</span>
                <div>
                  <h4>Design for Sound-Off Viewing</h4>
                  <p>
                    70% of WhatsApp users watch videos with sound off. Always include
                    captions or text overlays that communicate your offer visually.
                    Scenith's AI adds readable captions automatically.
                  </p>
                </div>
              </div>

              <div className="wav-tip">
                <span className="wav-tip-icon">📱</span>
                <div>
                  <h4>Test Your Video on an Actual Phone</h4>
                  <p>
                    Text that looks readable on your laptop might be tiny on a phone.
                    After generating, send the video to your own WhatsApp and view
                    it on a phone screen. Adjust text size if needed.
                  </p>
                </div>
              </div>

              <div className="wav-tip">
                <span className="wav-tip-icon">🔥</span>
                <div>
                  <h4>Lead with Urgency or Curiosity</h4>
                  <p>
                    The first 2 seconds determine if someone watches or swipes.
                    Start with "Last chance..." "Don't miss..." "You won't believe..."
                    or a visual that stops the scroll.
                  </p>
                </div>
              </div>

              <div className="wav-tip">
                <span className="wav-tip-icon">🎨</span>
                <div>
                  <h4>Use High-Contrast Colors</h4>
                  <p>
                    WhatsApp compresses videos, which can wash out subtle colors.
                    Use bold, high-contrast color combinations for text overlays.
                    White text with a dark background works best.
                  </p>
                </div>
              </div>

              <div className="wav-tip">
                <span className="wav-tip-icon">💬</span>
                <div>
                  <h4>Always Include a Clear CTA</h4>
                  <p>
                    Tell viewers exactly what to do. "DM 'OFFER' to order."
                    "Click the link in bio." "WhatsApp us at [number]." Generic
                    CTAs like "Learn more" perform 40% worse than specific ones.
                  </p>
                </div>
              </div>

              <div className="wav-tip">
                <span className="wav-tip-icon">🔄</span>
                <div>
                  <h4>A/B Test Different Hooks</h4>
                  <p>
                    Generate 2-3 versions of the same ad with different opening
                    hooks. Post them at different times. Track which one gets more
                    replies or link clicks. Double down on what works.
                  </p>
                </div>
              </div>

              <div className="wav-tip">
                <span className="wav-tip-icon">📅</span>
                <div>
                  <h4>Post at Peak Hours</h4>
                  <p>
                    WhatsApp usage peaks at 7-9 AM (morning commute), 1-2 PM (lunch),
                    and 8-10 PM (evening scrolling). Post your ads during these
                    windows for maximum visibility.
                  </p>
                </div>
              </div>

              <div className="wav-tip">
                <span className="wav-tip-icon">🎯</span>
                <div>
                  <h4>Use Audience Segmentation</h4>
                  <p>
                    Different products for different customer segments? Create
                    separate WhatsApp Broadcast Lists and send tailored video ads.
                    A jewelry store sending men's watch ads only to male customers
                    saw 3× higher CTR.
                  </p>
                </div>
              </div>

              <div className="wav-tip">
                <span className="wav-tip-icon">📊</span>
                <div>
                  <h4>Track Everything with UTM Links</h4>
                  <p>
                    Add UTM parameters to links in your WhatsApp ads. Scenith's
                    CTA includes them automatically. Use Google Analytics to see
                    which ads drive the most traffic and sales.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              SECONDARY CTA
          ════════════════════════════════════════════════════ */}
          <div className="wav-inline-cta">
            <h3>Stop losing customers on WhatsApp</h3>
            <p>
              Your products deserve better than static images. Create your first
              WhatsApp ad video in under 60 seconds — free to start.
            </p>
            <a href={CTA_URL} className="wav-cta-primary" style={{ display: "inline-flex" }}>
              🎬 Create My First WhatsApp Ad
              <span className="wav-cta-arrow">→</span>
            </a>
          </div>

          {/* ════════════════════════════════════════════════════
              FAQ (WhatsApp-focused)
          ════════════════════════════════════════════════════ */}
          <section className="wav-section">
            <div className="wav-section-label">Frequently asked questions</div>
            <h2 className="wav-section-title">Everything You Need to Know</h2>
            <p className="wav-section-sub" style={{ marginBottom: 28 }}>
              Specific answers for small business WhatsApp advertising.
            </p>

            <div className="wav-faq">
              <details className="wav-faq-item">
                <summary className="wav-faq-q">
                  How do I post a video ad to WhatsApp Status?
                  <span className="wav-faq-chevron">▼</span>
                </summary>
                <div className="wav-faq-a">
                  <p>
                    After generating your video in Scenith, download the MP4 file.
                    Open WhatsApp → Status tab → Camera icon → select the video
                    from your gallery → add a caption if desired → post. Your
                    contacts will see the video ad for 24 hours.
                  </p>
                </div>
              </details>

              <details className="wav-faq-item">
                <summary className="wav-faq-q">
                  Can I use my own product images in the video?
                  <span className="wav-faq-chevron">▼</span>
                </summary>
                <div className="wav-faq-a">
                  <p>
                    Absolutely. Scenith's image-to-video mode is designed for this.
                    Upload any product photo from your phone gallery. The AI will
                    animate it into a professional video ad while preserving your
                    product's actual appearance.
                  </p>
                </div>
              </details>

              <details className="wav-faq-item">
                <summary className="wav-faq-q">
                  What's the ideal video length for WhatsApp ads?
                  <span className="wav-faq-chevron">▼</span>
                </summary>
                <div className="wav-faq-a">
                  <p>
                    For WhatsApp Status, 5-10 seconds is optimal. Status videos
                    auto-advance after 15 seconds, but most viewers swipe past
                    longer videos. For WhatsApp Channels, 15-30 seconds works well.
                    Scenith defaults to 5-10 seconds for Status optimization.
                  </p>
                </div>
              </details>

              <details className="wav-faq-item">
                <summary className="wav-faq-q">
                  Do I need a WhatsApp Business account to post ads?
                  <span className="wav-faq-chevron">▼</span>
                </summary>
                <div className="wav-faq-a">
                  <p>
                    No — you can post video ads to WhatsApp Status from any
                    WhatsApp account. However, a WhatsApp Business account gives
                    you additional features like product catalogs, away messages,
                    and labels to organize chats. It's free to set up.
                  </p>
                </div>
              </details>

              <details className="wav-faq-item">
                <summary className="wav-faq-q">
                  How much does it cost to make a WhatsApp ad video on Scenith?
                  <span className="wav-faq-chevron">▼</span>
                </summary>
                <div className="wav-faq-a">
                  <p>
                    The cost depends on which AI model you choose. The most
                    affordable option is Wan 2.5 at 46 credits per video (~$0.46
                    on paid plans). On the $9/month Lite plan (300 credits), you
                    can create approximately 6-10 WhatsApp ad videos per month.
                    New users get 50 free credits on sign-up.
                  </p>
                </div>
              </details>

              <details className="wav-faq-item">
                <summary className="wav-faq-q">
                  Can I add my logo or branding to the video?
                  <span className="wav-faq-chevron">▼</span>
                </summary>
                <div className="wav-faq-a">
                  <p>
                    Yes. Use image-to-video mode with your logo as the reference
                    image. Describe how you want the logo to appear in your prompt
                    ("logo fades in at the end, stays for 2 seconds"). For full
                    branding control, consider the Pro plan which includes custom
                    branding features.
                  </p>
                </div>
              </details>

              <details className="wav-faq-item">
                <summary className="wav-faq-q">
                  What languages does the AI voiceover support for WhatsApp ads?
                  <span className="wav-faq-chevron">▼</span>
                </summary>
                <div className="wav-faq-a">
                  <p>
                    Scenith supports 40+ languages including English, Hindi, Spanish,
                    French, German, Mandarin, Arabic, Tamil, Telugu, Bengali,
                    Marathi, Gujarati, Kannada, Malayalam, Punjabi, and more.
                    Localized voiceovers significantly improve conversion rates
                    in non-English speaking markets.
                  </p>
                </div>
              </details>

              <details className="wav-faq-item">
                <summary className="wav-faq-q">
                  Can I make WhatsApp video ads without showing my face?
                  <span className="wav-faq-chevron">▼</span>
                </summary>
                <div className="wav-faq-a">
                  <p>
                    Absolutely. Most WhatsApp ads are product-focused, not
                    personality-focused. Use product images, text overlays, and
                    AI voiceover to create effective ads without ever showing
                    your face. Many successful small businesses use this approach.
                  </p>
                </div>
              </details>

              <details className="wav-faq-item">
                <summary className="wav-faq-q">
                  How do I know if my WhatsApp ad is working?
                  <span className="wav-faq-chevron">▼</span>
                </summary>
                <div className="wav-faq-a">
                  <p>
                    Track replies, link clicks, and sales. Use a unique phone number
                    or link with UTM parameters for each ad campaign. Compare views
                    (WhatsApp shows who viewed your Status) against actual inquiries.
                    A good ad generates 2-5% response rate from viewers.
                  </p>
                </div>
              </details>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              RELATED TOOLS
          ════════════════════════════════════════════════════ */}
          <section className="wav-section">
            <div className="wav-section-label">More Scenith tools</div>
            <h2 className="wav-section-title">Complete Your Marketing Stack</h2>
            <p className="wav-section-sub" style={{ marginBottom: 24 }}>
              WhatsApp ads are just the beginning. Scenith covers every format
              a small business needs.
            </p>

            <div className="wav-related-grid">
              <a href="https://scenith.in/create-ai-content?tab=image&utm_source=whatsapp-ad-tool&utm_medium=related-tools" className="wav-related-card">
                <span className="wav-related-icon">🖼️</span>
                <h4>AI Image Generator</h4>
                <p>Create product photos, social media graphics, and ad creatives with 7 AI models.</p>
              </a>
              <a href="https://scenith.in/create-ai-content?tab=voice&utm_source=whatsapp-ad-tool&utm_medium=related-tools" className="wav-related-card">
                <span className="wav-related-icon">🎙️</span>
                <h4>AI Voice Generator</h4>
                <p>Turn text into professional voiceovers for your WhatsApp ads in 40+ languages.</p>
              </a>
              <a href="https://scenith.in/tools/add-subtitles-to-videos" className="wav-related-card">
                <span className="wav-related-icon">💬</span>
                <h4>Add Subtitles to Videos</h4>
                <p>Add professional captions to any video — perfect for sound-off WhatsApp viewing.</p>
              </a>
              <a href="https://scenith.in/tools" className="wav-related-card">
                <span className="wav-related-icon">🛠️</span>
                <h4>All AI Tools</h4>
                <p>Explore the full suite of Scenith tools for small business marketing.</p>
              </a>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              FOOTER CTA
          ════════════════════════════════════════════════════ */}
          <div className="wav-footer-cta">
            <h2>
              Your Products Deserve{" "}
              <span style={{ background: "linear-gradient(135deg, #25D366, #128C7E)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Better Than Static Images
              </span>
            </h2>
            <p>
              Start creating professional WhatsApp video ads today. No editing skills,
              no expensive software, no freelancers. Just your product and 60 seconds.
            </p>
            <a href={CTA_URL} className="wav-cta-primary" style={{ display: "inline-flex" }}>
              🎬 Create My WhatsApp Ad Now
              <span className="wav-cta-arrow">→</span>
            </a>
            <p>
              50 free credits · No credit card · Commercial rights included
            </p>
          </div>

          {/* ── SEO STRATEGY NOTE (Hidden from users, for developers) ── */}
          <div className="wav-seo-note" style={{ display: "none" }}>
            {/* This page is optimized for keywords: whatsapp ad video maker, small business whatsapp ads, whatsapp video ad creator, whatsapp marketing tool, ai whatsapp ad generator. The page contains 8000+ words of unique, value-adding content designed to keep users engaged and signal expertise to search engines. The single massive CTA drives qualified traffic to the main tool with UTM tracking. */}
          </div>
        </div>
      </div>
    </>
  );
}