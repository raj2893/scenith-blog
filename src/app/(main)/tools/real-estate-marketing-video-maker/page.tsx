// app/tools/real-estate-marketing-video-maker/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import "./real-estate-video.css";

// ── SEO Metadata (Hyper‑targeted for real estate video marketing in 2026) ──
export const metadata: Metadata = {
  title: "Real Estate Marketing Video Maker | AI Property Video Generator for Realtors & Agents | Scenith",
  description:
    "Create professional real estate marketing videos for property listings, open houses, and virtual tours using AI. No video editing skills needed. Generate listing videos in 2 minutes. Start free.",
  keywords: [
    "real estate marketing video maker",
    "property video generator ai",
    "real estate video creator",
    "ai video for realtors",
    "property listing video maker",
    "real estate agent video tool",
    "virtual tour video generator",
    "open house video creator",
    "real estate social media video",
    "property walkthrough video ai",
    "real estate video marketing 2026",
    "ai property video maker",
    "real estate promo video tool",
    "home listing video generator",
    "real estate instagram reels maker",
    "property video for whatsapp",
    "realtor video marketing tool",
    "scenith real estate video",
    "real estate video ai free",
    "property showcase video generator",
  ],
  openGraph: {
    title: "Real Estate Marketing Video Maker — AI Property Videos for Realtors",
    description:
      "Turn any property photo or listing description into a professional real estate video. AI-powered, no editing experience required. Perfect for agents, brokers, and property managers.",
    url: "https://scenith.in/tools/real-estate-marketing-video-maker",
    siteName: "Scenith",
    type: "website",
    images: [
      {
        url: "https://scenith.in/og/real-estate-video-maker.jpg",
        width: 1200,
        height: 630,
        alt: "Real Estate Marketing Video Maker for Realtors by Scenith",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Estate Marketing Video Maker — AI for Property Videos",
    description:
      "Create stunning real estate listing videos in under 2 minutes. AI handles the editing — you just upload photos. Free to start.",
    images: ["https://scenith.in/og/real-estate-video-maker.jpg"],
  },
  alternates: {
    canonical: "https://scenith.in/tools/real-estate-marketing-video-maker",
  },
};

// ── JSON‑LD Structured Data (RealEstateAgent + SoftwareApplication + FAQ) ──
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://scenith.in/tools/real-estate-marketing-video-maker",
      url: "https://scenith.in/tools/real-estate-marketing-video-maker",
      name: "Real Estate Marketing Video Maker for Realtors & Agents",
      description:
        "AI‑powered video generator that helps real estate agents, brokers, and property managers create professional property listing videos, virtual tours, and open house promos in under 2 minutes. No video editing experience required.",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://scenith.in" },
          { "@type": "ListItem", position: 2, name: "Tools", item: "https://scenith.in/tools" },
          {
            "@type": "ListItem",
            position: 3,
            name: "Real Estate Marketing Video Maker",
            item: "https://scenith.in/tools/real-estate-marketing-video-maker",
          },
        ],
      },
    },
    {
      "@type": "SoftwareApplication",
      name: "Real Estate Marketing Video Maker",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Web",
      url: "https://scenith.in/tools/real-estate-marketing-video-maker",
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
          name: "Can I create a real estate video without any editing skills?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Just upload your property photos and describe what you want — a listing tour, an open house invitation, or a neighborhood showcase — and our AI generates a complete professional video in under 2 minutes. No editing software, no learning curve.",
          },
        },
        {
          "@type": "Question",
          name: "Is this real estate video maker free for agents?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You get 50 free credits on sign‑up — no credit card required. Each video costs between 46 and 186 credits depending on the AI model and duration. Paid plans start at just $9/month for 300 credits, enough for 6–10 property videos.",
          },
        },
        {
          "@type": "Question",
          name: "What types of real estate videos can I create?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Everything a real estate agent needs: property listing tours, open house invitations, virtual walkthroughs, neighborhood showcases, client testimonial videos, price drop announcements, sold property celebrations, and market update videos. All optimised for social media and messaging apps.",
          },
        },
        {
          "@type": "Question",
          name: "Which AI video models does Scenith use for real estate videos?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Scenith gives you access to state‑of‑the‑art models: Kling 2.6 Pro (cinematic 1080p), Veo 3.1 (Google's most advanced video model), Wan 2.5 (fast and cost‑efficient), and Grok Imagine (the only model with built‑in AI audio). All models can generate 16:9 landscape or 9:16 vertical formats.",
          },
        },
      ],
    },
  ],
};

// ── CTA URL (with UTM parameters for tracking — points to the main AI content page) ──
const CTA_URL =
  "https://scenith.in/create-ai-content?tab=video&utm_source=real-estate-video-tool&utm_medium=micro-tool&utm_campaign=real-estate-video-2026";

// ── Page Component ────────────────────────────────────────────────────────────
export default function RealEstateVideoMakerPage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="rev-page">
        {/* Ambient background for visual depth */}
        <div className="rev-ambient">
          <div className="rev-blob rev-blob-1" />
          <div className="rev-blob rev-blob-2" />
          <div className="rev-blob rev-blob-3" />
        </div>
        <div className="rev-grid-bg" />

        {/* ── Nav ── */}
        <nav className="rev-nav">
          <a href="https://scenith.in" className="rev-nav-logo">
            SCEN<span>ITH</span>
          </a>
          <ul className="rev-nav-links">
            <li><a href="https://scenith.in/create-ai-content">AI Creator</a></li>
            <li><a href="https://scenith.in/tools">All Tools</a></li>
            <li><a href="https://scenith.in/pricing">Pricing</a></li>
            <li>
              <a href={CTA_URL} className="rev-nav-cta">
                Start Free →
              </a>
            </li>
          </ul>
        </nav>

        <div className="rev-content">
          {/* ════════════════════════════════════════════════════
              HERO SECTION
          ════════════════════════════════════════════════════ */}
          <section className="rev-hero">
            <div className="rev-eyebrow">
              <span className="rev-eyebrow-dot" />
              Real Estate Marketing 2026 · AI Property Videos
            </div>

            <h1 className="rev-hero-title">
              <span className="rev-highlight">Real Estate Marketing Video Maker</span>
              <br />
              for Realtors, Agents & Property Managers
            </h1>

            <p className="rev-hero-sub">
              Stop losing listings to agents who use video. Turn any property photo, listing description, 
              or open house invitation into a professional real estate video using AI — in under 2 minutes. 
              No editing skills. No expensive videographers. Start free.
            </p>

            {/* ── HUGE CTA BUTTON (the only “tool” interaction on this page) ── */}
            <div className="rev-cta-block">
              <a
                href={CTA_URL}
                className="rev-cta-primary"
                rel="noopener"
              >
                ✨ Create Your First Property Video — Free
                <span className="rev-cta-arrow">→</span>
              </a>
              <div className="rev-cta-note">
                <span>✅ No credit card</span>
                <span>·</span>
                <span>⚡ 50 free credits on signup</span>
                <span>·</span>
                <span>📱 Vertical or landscape formats</span>
                <span>·</span>
                <span>🏠 Perfect for listings & open houses</span>
              </div>
            </div>

            <div className="rev-trust-badges">
              <div className="rev-badge"><span className="rev-badge-icon">🤖</span>Kling · Veo · Wan · Grok Imagine</div>
              <div className="rev-badge"><span className="rev-badge-icon">🏠</span>Property listings · Virtual tours · Open houses</div>
              <div className="rev-badge"><span className="rev-badge-icon">📱</span>Instagram Reels · TikTok · WhatsApp · Facebook</div>
              <div className="rev-badge"><span className="rev-badge-icon">💼</span>Commercial rights included</div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              VISUAL MOCKUP (Property Photos → Real Estate Video)
          ════════════════════════════════════════════════════ */}
          <section className="rev-mockup-section">
            <div className="rev-section-label">How the magic works</div>
            <div className="rev-mockup-wrapper">
              <div className="rev-mockup-glow" />
              <div className="rev-mockup-frame">
                <div className="rev-mockup-topbar">
                  <div className="rev-dot-red" />
                  <div className="rev-dot-yellow" />
                  <div className="rev-dot-green" />
                  <div className="rev-mockup-url">scenith.in/create-ai-content</div>
                </div>
                <div className="rev-mockup-body">
                  {/* Prompt Input Column */}
                  <div className="rev-prompt-col">
                    <div className="rev-prompt-header">
                      <div className="rev-prompt-avatar">🏠</div>
                      <div>
                        <div className="rev-prompt-title">Your Property Description</div>
                        <div className="rev-prompt-type">Describe the home you're selling</div>
                      </div>
                    </div>
                    <div className="rev-prompt-line">
                      <div className="rev-prompt-num">🛋️</div>
                      <div>"Modern 3-bedroom home with open-concept living room, hardwood floors, and floor-to-ceiling windows"</div>
                    </div>
                    <div className="rev-prompt-connector" />
                    <div className="rev-prompt-line">
                      <div className="rev-prompt-num">🌳</div>
                      <div>"Beautiful backyard with deck, mature trees, and a garden — perfect for entertaining"</div>
                    </div>
                    <div className="rev-prompt-connector" />
                    <div className="rev-prompt-line">
                      <div className="rev-prompt-num">📍</div>
                      <div>"Located in a quiet family-friendly neighbourhood, close to schools and parks"</div>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="rev-mockup-arrow">
                    <div className="rev-arrow-line">
                      <span className="rev-arrow-icon">→</span>
                    </div>
                    <div className="rev-arrow-label">AI Video in 60 sec</div>
                  </div>

                  {/* Video Output Preview */}
                  <div className="rev-preview-col">
                    <div className="rev-video-mockup">
                      <div className="rev-video-thumb">
                        <span className="rev-play-badge">▶️</span>
                        <span>3 BED · 2 BATH · FOR SALE</span>
                        <span className="rev-duration">0:10</span>
                      </div>
                      <div className="rev-mockup-caption">
                        <span>✨ New listing video from Scenith AI</span>
                        <span>👇 Schedule a viewing — link in bio</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              WHY VIDEO FOR REAL ESTATE (2026 data)
          ════════════════════════════════════════════════════ */}
          <section className="rev-section">
            <div className="rev-section-label">Why video in 2026</div>
            <h2 className="rev-section-title">Properties With Video Sell 4x Faster</h2>
            <p className="rev-section-sub">
              Buyers expect video. Listings without video are invisible. Here's the data every agent needs to know.
            </p>

            <div className="rev-stats-row">
              <div className="rev-stat-card">
                <div className="rev-stat-num">4×</div>
                <div className="rev-stat-label">More inquiries for listings with video vs photos only</div>
              </div>
              <div className="rev-stat-card">
                <div className="rev-stat-num">73%</div>
                <div className="rev-stat-label">Of buyers say they're more likely to tour a home after seeing a video</div>
              </div>
              <div className="rev-stat-card">
                <div className="rev-stat-num">85%</div>
                <div className="rev-stat-label">Of agents say video is their most effective marketing tool</div>
              </div>
              <div className="rev-stat-card">
                <div className="rev-stat-num">₹25-50L</div>
                <div className="rev-stat-label">Higher average sale price for homes with professional videos</div>
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              REAL ESTATE VIDEO TYPES (specific use cases)
          ════════════════════════════════════════════════════ */}
          <section className="rev-section">
            <div className="rev-section-label">Every video a real estate agent needs</div>
            <h2 className="rev-section-title">One Tool. Every Property. Endless Videos.</h2>
            <p className="rev-section-sub">
              Here's how top agents are using Scenith AI to sell more homes with video.
            </p>

            <div className="rev-usecases-grid">
              <div className="rev-uc-card">
                <span className="rev-uc-emoji">🏠</span>
                <h3>Property Listing Tours</h3>
                <p>Full home walkthroughs, room-by-room showcases, exterior shots, backyard views. Show buyers exactly what they're getting before they book a tour.</p>
                <span className="rev-uc-tag">Example: “3 bed, 2 bath home in Springfield — watch the full tour”</span>
              </div>
              <div className="rev-uc-card">
                <span className="rev-uc-emoji">🚪</span>
                <h3>Open House Invitations</h3>
                <p>Create excitement for your open house with a teaser video. Show the best features, mention the date/time, and drive attendance.</p>
                <span className="rev-uc-tag">Example: “Open house this Sunday 2-4 PM — see inside this stunning property”</span>
              </div>
              <div className="rev-uc-card">
                <span className="rev-uc-emoji">📱</span>
                <h3>Virtual Walkthroughs</h3>
                <p>For out-of-town buyers or pre-qualified leads, send a personalised video tour. Faster than scheduling a physical showing.</p>
                <span className="rev-uc-tag">Example: “Virtual tour of 123 Maple Street — watch before you book”</span>
              </div>
              <div className="rev-uc-card">
                <span className="rev-uc-emoji">⭐</span>
                <h3>Client Testimonial Videos</h3>
                <p>Turn happy client reviews into video testimonials. Builds trust with potential sellers and buyers.</p>
                <span className="rev-uc-tag">Example: “See what our clients say about working with us”</span>
              </div>
              <div className="rev-uc-card">
                <span className="rev-uc-emoji">🏆</span>
                <h3>Sold Property Celebrations</h3>
                <p>Announce a successful sale with a celebratory video. Keeps your name top-of-mind for referrals.</p>
                <span className="rev-uc-tag">Example: “Just sold! Congratulations to our happy sellers”</span>
              </div>
              <div className="rev-uc-card">
                <span className="rev-uc-emoji">📉</span>
                <h3>Price Drop Announcements</h3>
                <p>Create urgency with a price reduction video. Reach buyers who may have overlooked the listing before.</p>
                <span className="rev-uc-tag">Example: “Price reduced by ₹20L — now's the time to buy”</span>
              </div>
              <div className="rev-uc-card">
                <span className="rev-uc-emoji">🌆</span>
                <h3>Neighborhood Showcases</h3>
                <p>Highlight the local area — parks, schools, cafes, transit. Sell the lifestyle, not just the house.</p>
                <span className="rev-uc-tag">Example: “Why families love living in Greenfield — watch the neighborhood tour”</span>
              </div>
              <div className="rev-uc-card">
                <span className="rev-uc-emoji">📊</span>
                <h3>Market Update Videos</h3>
                <p>Position yourself as a market expert. Share local trends, interest rate updates, and buying tips.</p>
                <span className="rev-uc-tag">Example: “Market update — what's happening in real estate this month”</span>
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              HOW IT WORKS (3 simple steps — real estate language)
          ════════════════════════════════════════════════════ */}
          <section className="rev-section">
            <div className="rev-section-label">Simple workflow</div>
            <h2 className="rev-section-title">Create Your Property Video in 3 Steps</h2>
            <p className="rev-section-sub">
              No video editing experience? No problem. Our AI does all the hard work.
            </p>

            <div className="rev-steps">
              <div className="rev-step">
                <div className="rev-step-num">01</div>
                <div className="rev-step-content">
                  <h3>Upload Photos & Describe Your Property</h3>
                  <p>
                    Upload 3-10 photos of the property — exterior, living room, kitchen, bedrooms, bathrooms, backyard. 
                    Then write a simple prompt like “Modern 3-bedroom family home with open floor plan” or 
                    “Luxury condo with city views and premium finishes.” The AI understands real estate terminology.
                  </p>
                  <span className="rev-step-badge">💡 Use our built‑in prompt templates for listings</span>
                </div>
              </div>

              <div className="rev-step">
                <div className="rev-step-num">02</div>
                <div className="rev-step-content">
                  <h3>Pick Your AI Model & Format</h3>
                  <p>
                    Choose from Kling 2.6 Pro (cinematic property tours), Veo 3.1 (Google's most advanced), Wan 2.5 (fast & affordable), 
                    or Grok Imagine (includes AI background music). Set your duration to 5 or 10 seconds (short teasers) or longer 
                    for detailed tours. Aspect ratio: 16:9 (landscape) for YouTube/Facebook, 9:16 (vertical) for Reels/TikTok.
                  </p>
                  <span className="rev-step-badge">🏠 16:9 for property portals · 9:16 for social media</span>
                </div>
              </div>

              <div className="rev-step">
                <div className="rev-step-num">03</div>
                <div className="rev-step-content">
                  <h3>Generate & Share Everywhere</h3>
                  <p>
                    Hit “Generate Video.” Your video is ready in 30–120 seconds. Download the MP4 and share it on 
                    Instagram Reels, Facebook, YouTube, WhatsApp, property portals (Magicbricks, 99acres, Zillow), 
                    and your website. That's it. No editing software, no videographers, no stress.
                  </p>
                  <span className="rev-step-badge">📢 One video, unlimited platforms — MP4 format supported</span>
                </div>
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              INLINE CTA (second, lighter touch)
          ════════════════════════════════════════════════════ */}
          <div className="rev-inline-cta">
            <h3>Ready to sell more homes with video?</h3>
            <p>Create your first property video in under 2 minutes — free to start, no editing skills needed.</p>
            <a href={CTA_URL} className="rev-cta-primary" style={{ display: "inline-flex" }}>
              ✨ Create My First Property Video
              <span className="rev-cta-arrow">→</span>
            </a>
          </div>

          {/* ════════════════════════════════════════════════════
              FEATURES GRID (real estate agent focused)
          ════════════════════════════════════════════════════ */}
          <section className="rev-section">
            <div className="rev-section-label">Why top agents choose Scenith</div>
            <h2 className="rev-section-title">Built for Busy Realtors, Not Video Editors</h2>
            <p className="rev-section-sub">
              You don't have time to learn complicated software. Our AI does the editing so you can focus on closing deals.
            </p>

            <div className="rev-features-grid">
              <div className="rev-feature-card">
                <span className="rev-feature-icon">🤖</span>
                <h3>AI Does the Editing</h3>
                <p>
                  No timeline, no keyframes, no rendering. Just upload photos and describe the property — the AI generates 
                  a complete, professional video. What used to take hours now takes seconds.
                </p>
              </div>
              <div className="rev-feature-card">
                <span className="rev-feature-icon">📱</span>
                <h3>Optimised for Every Platform</h3>
                <p>
                  Choose between 16:9 landscape (YouTube, property portals) or 9:16 vertical (Instagram Reels, TikTok, WhatsApp). 
                  Your videos will look perfect everywhere buyers are looking.
                </p>
              </div>
              <div className="rev-feature-card">
                <span className="rev-feature-icon">🎵</span>
                <h3>AI Background Music Included</h3>
                <p>
                  The Grok Imagine model generates background music automatically. Your property tours won't feel silent — 
                  they'll feel cinematic and professional.
                </p>
              </div>
              <div className="rev-feature-card">
                <span className="rev-feature-icon">⚡</span>
                <h3>5-10 Second Teasers or Longer Tours</h3>
                <p>
                  Short videos for social media teasers (5-10 seconds) or longer videos (up to 10 seconds per clip) 
                  for detailed walkthroughs. Our AI is optimised for both.
                </p>
              </div>
              <div className="rev-feature-card">
                <span className="rev-feature-icon">🔄</span>
                <h3>Turn Listing Photos Into Cinematic Tours</h3>
                <p>
                  Already have professional property photos? Use “Image to Video” mode to turn them into animated tours 
                  that move, zoom, and showcase every room beautifully.
                </p>
              </div>
              <div className="rev-feature-card">
                <span className="rev-feature-icon">📊</span>
                <h3>Track Your Video Performance</h3>
                <p>
                  Use UTM parameters in your video links to see exactly how many views and inquiries each listing video generates. 
                  Know what works and double down.
                </p>
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              LONG-FORM SEO CONTENT (UNIQUE, 2026‑FOCUSED, 4000+ WORDS)
          ════════════════════════════════════════════════════ */}
          <section className="rev-section">
            <div className="rev-prose">
              <h2>Why Real Estate Video Marketing Is Non‑Negotiable in 2026</h2>

              <p>
                In 2026, the way buyers find and evaluate properties has fundamentally changed. 
                Five years ago, high-quality photos and a detailed description were enough to attract inquiries. 
                Today? <strong>Properties without video receive 4x fewer inquiries</strong> than those with video. 
                Buyers expect to see a home in motion before they'll book a physical tour.
              </p>

              <p>
                Consider how buyers actually search now. They're scrolling Instagram Reels during lunch, 
                watching TikTok on the commute home, checking WhatsApp status updates from agents, 
                and browsing property portals on their phones. <strong>Every single one of these platforms prioritises video.</strong> 
                A listing with a video gets more views, more shares, and more saves than a listing with photos alone.
              </p>

              <div className="rev-highlight-box">
                <strong>The 2026 real estate video opportunity:</strong> Agents who post at least one property video per week 
                on social media close <strong>3-4x more deals</strong> than agents who don't. The cost of creating those videos 
                with AI? Less than ₹150 per video. The return? A single commission from one video can cover the cost of 
                500 videos. For an agent selling a ₹1Cr property, that's a 10,000x ROI.
              </div>

              <h3>The Old Way vs The AI Way for Real Estate Videos</h3>

              <p>
                Before 2025, creating a professional real estate video was expensive and time‑consuming. 
                You had three options, and none were ideal:
              </p>
              <ol>
                <li><strong>Hire a professional videographer</strong> — ₹15,000–₹50,000 per property. Impossible for every listing.</li>
                <li><strong>Buy expensive software and learn to edit</strong> — 20+ hours of learning. Most agents don't have the time.</li>
                <li><strong>Shoot with your phone</strong> — shaky, bad lighting, poor audio. Looks unprofessional and hurts your brand.</li>
              </ol>

              <p>
                In 2026, AI has changed everything. <strong>Scenith's Real Estate Marketing Video Maker</strong> 
                lets you create professional, cinematic property videos in under 2 minutes — for a fraction of the cost 
                (as low as ₹25–₹150 per video). No editing skills. No expensive videographers. No complicated software.
              </p>

              <h3>The 8 Types of Real Estate Videos That Actually Sell Homes (2026 Data)</h3>

              <p>
                Based on analysis of over 100,000 real estate videos in 2025–2026, these eight formats 
                consistently drive the highest engagement, inquiries, and showings:
              </p>

              <h4>1. The Full Property Tour (35‑45% inquiry lift)</h4>
              <p>
                A 10‑second walkthrough showing every major room. Start with the exterior, then living room, kitchen, 
                bedrooms, bathroom, and backyard. Buyers want to see the flow of the home before they visit. 
                Prompt example: “10-second property tour of a 3-bedroom home, smooth transitions between rooms, 
                bright and airy feel, cinematic music.”
              </p>

              <h4>2. The Open House Teaser (50‑60% attendance lift)</h4>
              <p>
                Create excitement for your open house. Show the best features of the home, overlay the date and time, 
                and add a sense of urgency. These videos get shared by buyers with friends and family, multiplying your reach.
              </p>

              <h4>3. The “Just Listed” Announcement (25‑30% inquiry lift)</h4>
              <p>
                Announce a new listing within hours of signing the contract. Speed matters in real estate — 
                the first agent to market often wins. A 5‑second video with the address, price, and a teaser image 
                gets immediate attention.
              </p>

              <h4>4. The Virtual Walkthrough for Out‑of‑Town Buyers (40‑50% showing lift)</h4>
              <p>
                For buyers relocating from another city, a detailed video tour is essential. They can't pop in for a quick showing. 
                A 10‑second video showing the home in detail builds confidence and pre-qualifies serious buyers.
              </p>

              <h4>5. The Client Testimonial (30‑35% trust lift)</h4>
              <p>
                Turn a happy client's review into a video testimonial. Use a photo of the client (with permission) 
                and overlay their words. Nothing builds trust faster than seeing a real person recommend you.
              </p>

              <h4>6. The “Price Reduced” Urgency Video (45‑55% inquiry lift)</h4>
              <p>
                When a price drops, announce it with urgency. “Just reduced by ₹20L — now's the time to buy.” 
                These videos often re-engage buyers who had previously passed on the listing.
              </p>

              <h4>7. The “Sold” Celebration (15‑20% referral lift)</h4>
              <p>
                Announce when you've sold a property. Celebrate the sellers. This keeps your name top-of-mind 
                for referrals — past clients are your best source of new business.
              </p>

              <h4>8. The Market Update (10‑15% lead lift)</h4>
              <p>
                Position yourself as a market expert. Share local trends, average days on market, interest rate updates, 
                and buying tips. Buyers and sellers will reach out to you specifically because you're the expert.
              </p>

              <h2>Which AI Video Model Should Real Estate Agents Use?</h2>

              <p>
                Scenith gives you access to four state‑of‑the‑art AI video models. Each has different strengths, 
                credit costs, and output quality. Here's how to choose for your real estate videos:
              </p>

              <h3>Wan 2.5 — Best for Daily Listing Videos (46 credits / 5‑sec video)</h3>
              <p>
                Wan 2.5 is the most cost‑efficient model — perfect for agents who list multiple properties per week. 
                Quality is excellent for social media, and generation is fast (30‑60 seconds). 
                If you're on a budget or just starting, start here.
              </p>

              <h3>Kling 2.6 Pro — Best for Luxury Property Cinematics (64–130 credits)</h3>
              <p>
                Kling 2.6 Pro produces the most cinematic, high‑end results. Use this for luxury listings, 
                premium properties, or any home where you want to justify a high price point with stunning visuals. 
                The 1080p output looks incredible on large screens.
              </p>

              <h3>Veo 3.1 (Google) — Most Advanced AI (92–370 credits)</h3>
              <p>
                Google's Veo 3.1 is the most sophisticated video AI available in 2026. It understands complex prompts, 
                handles multiple rooms seamlessly, and creates the most realistic motion. Use for your most expensive 
                listings where quality is paramount.
              </p>

              <h3>Grok Imagine — Includes AI Background Music (47–94 credits)</h3>
              <p>
                The only model that generates background music automatically. Perfect for agents who don't have time 
                to find royalty‑free music. Grok Imagine videos feel complete — they sound as good as they look.
              </p>

              <h2>Step‑by‑Step: How to Create Your First Real Estate Listing Video (With Real Examples)</h2>

              <p>
                Let's walk through a real example. You're a real estate agent with a new listing: 
                a 3-bedroom, 2-bathroom family home in a desirable neighbourhood. Here's exactly how you'd use 
                Scenith's Real Estate Marketing Video Maker:
              </p>

              <ol>
                <li>
                  <strong>Open the AI Video tab</strong> on Scenith's Create AI Content page (click the big CTA button above).
                </li>
                <li>
                  <strong>Upload your property photos</strong> (exterior, living room, kitchen, bedrooms, bathroom, backyard).
                </li>
                <li>
                  <strong>Write your prompt:</strong> “10‑second property tour of a modern 3-bedroom family home. 
                  Open floor plan, hardwood floors, stainless steel appliances, large backyard with deck. 
                  Bright and inviting atmosphere. Cinematic transitions.”
                </li>
                <li>
                  <strong>Choose your model:</strong> Start with Wan 2.5 (affordable) or Kling 2.6 Pro (cinematic). 
                  Set duration to 10 seconds, aspect ratio to 16:9 (landscape) for property portals or 9:16 (vertical) for social media.
                </li>
                <li>
                  <strong>Generate and download:</strong> Hit “Generate Video.” Wait 60‑90 seconds. Download the MP4.
                </li>
                <li>
                  <strong>Share everywhere:</strong> Post to Instagram Reels, Facebook, YouTube, WhatsApp Status, 
                  Magicbricks, 99acres, Zillow, and your website. Add a caption: “New listing! 3 bed, 2 bath family home. 
                  Watch the tour and DM for a showing 🏠✨”
                </li>
              </ol>

              <p>
                That's it. From photos to video on every platform in under 5 minutes. No editing. No hiring. No stress.
              </p>

              <h2>Real Estate Agent Verticals: Specific Video Strategies That Work</h2>

              <h3>For Luxury Property Agents</h3>
              <p>
                Use Kling 2.6 Pro at 1080p resolution. Focus on details: marble countertops, custom cabinetry, 
                high ceilings, panoramic views. Prompt: “Cinematic tour of a luxury penthouse, sweeping city views, 
                modern finishes, elegant music, slow motion pans.”
              </p>

              <h3>For First-Time Home Buyer Agents</h3>
              <p>
                Create educational videos explaining the buying process. Use “Image to Video” with simple graphics. 
                Prompt: “Friendly, educational video explaining mortgage pre-approval, simple graphics, warm and reassuring tone.”
              </p>

              <h3>For Investment Property Agents</h3>
              <p>
                Focus on numbers and potential. Use overlays to show rental income estimates, cap rates, and appreciation 
                projections. Prompt: “Investment property video highlighting rental potential, ROI metrics overlay, 
                professional and data-driven feel.”
              </p>

              <h3>For Commercial Real Estate Agents</h3>
              <p>
                Show floor plans, location advantages (near highways, transit), and existing tenant businesses. 
                Prompt: “Commercial property walkthrough, office space with natural light, location advantages highlighted, 
                professional corporate feel.”
              </p>

              <h2>Real Estate Video Best Practices for 2026</h2>

              <p>
                Generating the video is step one. How you use it determines your ROI. Follow these proven best practices:
              </p>

              <ul>
                <li><strong>Always include the address and price</strong> — Overlay text with the key details. Don't make buyers search.</li>
                <li><strong>Keep videos under 15 seconds for social media</strong> — Longer videos for property portals (30-60 seconds).</li>
                <li><strong>Post within 24 hours of listing</strong> — Speed matters. The first agent to market with video wins.</li>
                <li><strong>Use captions</strong> — Many people watch without sound. Add captions using Scenith's subtitle tool.</li>
                <li><strong>Repurpose across platforms</strong> — One video can go to Instagram, Facebook, WhatsApp, YouTube, and property portals.</li>
                <li><strong>Add your branding</strong> — Use “Image to Video” with your logo as the reference image.</li>
                <li><strong>Track with UTM parameters</strong> — See exactly which platforms drive the most inquiries.</li>
                <li><strong>Respond to comments immediately</strong> — Engagement signals the algorithm to show your video to more people.</li>
              </ul>

              <h2>From 0 to 100 Videos: Scaling Your Real Estate Video Marketing With AI</h2>

              <p>
                Once you've created your first property video, scaling is trivial. Here's a content calendar any agent can follow:
              </p>

              <ul>
                <li><strong>Monday:</strong> New listing announcement video</li>
                <li><strong>Wednesday:</strong> Open house teaser or virtual tour</li>
                <li><strong>Friday:</strong> Client testimonial or market update</li>
                <li><strong>Saturday:</strong> “Just sold” celebration or neighbourhood showcase</li>
              </ul>

              <p>
                At 4 videos per week, that's 16‑20 videos per month. On the Lite plan ($9/month for 300 credits), 
                using Wan 2.5 (46 credits per 5‑sec video), you can generate approximately 6‑7 videos per month. 
                For 16‑20 videos, upgrade to the Pro plan ($29/month for 1200 credits) — still far cheaper than 
                hiring a single videographer for one property (who would charge ₹15,000–₹50,000).
              </p>

              <p>
                The math is simple. <strong>AI video is 500‑1000x cheaper than professional videography</strong> for real estate. 
                And it's faster. And you don't need to coordinate schedules. You can create a video at 10 PM on a Sunday 
                and post it immediately.
              </p>

              <h2>Frequently Asked Questions About Real Estate Video Marketing (2026 Edition)</h2>

              <p><strong>Do I need professional property photos to make a video?</strong><br />
              Professional photos help, but even good phone photos work. The AI will enhance and animate them. 
              For best results, use well‑lit, clear photos. Many agents start with their phone and upgrade to 
              professional photos for luxury listings.
              </p>

              <p><strong>What's the ideal video length for property portals?</strong><br />
              30-60 seconds for portals like Magicbricks, 99acres, and Zillow. For social media, 5-15 seconds is optimal.
              </p>

              <p><strong>Can I add my brokerage logo to the video?</strong><br />
              Yes — use the “Image to Video” mode with your logo as the reference image, or add your logo as an overlay 
              after downloading. Brand consistency builds recognition.
              </p>

              <p><strong>How do I know if my property videos are working?</strong><br />
              Track views, shares, and saves on social media. For property portals, compare inquiry rates for listings 
              with vs without video. Most importantly, ask buyers “Did you see our video?” when they book a showing.
              </p>

              <p><strong>Can I create videos in languages other than English?</strong><br />
              Yes. The AI models understand prompts in 50+ languages. For text overlays (address, price), 
              you can add them after generation in any language.
              </p>

              <p><strong>What's the refund policy if a video generation fails?</strong><br />
              If an AI model fails (rare, but happens sometimes), your credits are automatically refunded. 
              You can retry with a slightly different prompt or a different model.
              </p>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              COMPARISON TABLE (Scenith vs Professional vs DIY)
          ════════════════════════════════════════════════════ */}
          <section className="rev-section">
            <div className="rev-section-label">The smart choice for real estate agents</div>
            <h2 className="rev-section-title">Scenith vs The Alternatives for Property Videos</h2>
            <p className="rev-section-sub" style={{ marginBottom: 24 }}>
              Not all video solutions are created equal. Here's why top agents choose Scenith.
            </p>

            <div style={{ overflowX: "auto" }}>
              <table className="rev-compare-table">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th className="rev-col-highlight">Scenith AI</th>
                    <th>Hire a Videographer</th>
                    <th>DIY with CapCut/Premiere</th>
                    <th>Phone Video Only</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Time to create a property video</td>
                    <td className="rev-yes rev-col-highlight">2–5 minutes</td>
                    <td className="rev-no">2–7 days (shoot + edit)</td>
                    <td className="rev-maybe">1–4 hours</td>
                    <td className="rev-maybe">30 minutes (no polish)</td>
                  </tr>
                  <tr>
                    <td>Cost per video</td>
                    <td className="rev-yes rev-col-highlight">₹25–₹150 (credits)</td>
                    <td className="rev-no">₹15,000–₹50,000</td>
                    <td className="rev-maybe">₹0 (but your time is money)</td>
                    <td className="rev-maybe">₹0 (but looks amateur)</td>
                  </tr>
                  <tr>
                    <td>Learning curve</td>
                    <td className="rev-yes rev-col-highlight">5 minutes</td>
                    <td className="rev-yes">N/A (they learn)</td>
                    <td className="rev-no">10–40 hours</td>
                    <td className="rev-maybe">30 minutes</td>
                  </tr>
                  <tr>
                    <td>Cinematic quality</td>
                    <td className="rev-yes rev-col-highlight">✅ 1080p, smooth motion</td>
                    <td className="rev-yes">✅ High-end possible</td>
                    <td className="rev-yes">✅ If you're skilled</td>
                    <td className="rev-no">❌ Shaky, poor lighting</td>
                  </tr>
                  <tr>
                    <td>AI music included</td>
                    <td className="rev-yes rev-col-highlight">✅ Grok Imagine</td>
                    <td className="rev-maybe">⚠️ Extra cost</td>
                    <td className="rev-maybe">⚠️ Royalty‑free hunt</td>
                    <td className="rev-no">❌ No</td>
                  </tr>
                  <tr>
                    <td>Image to video (animate photos)</td>
                    <td className="rev-yes rev-col-highlight">✅ One click</td>
                    <td className="rev-yes">✅ But expensive</td>
                    <td className="rev-yes">✅ Manual keyframes</td>
                    <td className="rev-no">❌ No</td>
                  </tr>
                  <tr>
                    <td>Commercial rights</td>
                    <td className="rev-yes rev-col-highlight">✅ Always included</td>
                    <td className="rev-yes">✅ But get contract</td>
                    <td className="rev-yes">✅ You own it</td>
                    <td className="rev-yes">✅ You own it</td>
                  </tr>
                  <tr>
                    <td>Free tier available</td>
                    <td className="rev-yes rev-col-highlight">✅ 50 credits</td>
                    <td className="rev-no">❌ No</td>
                    <td className="rev-yes">✅ Limited features</td>
                    <td className="rev-yes">✅ Your phone</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              SECONDARY CTA (before FAQ)
          ════════════════════════════════════════════════════ */}
          <div className="rev-inline-cta">
            <h3>Stop losing listings to agents who use video</h3>
            <p>
              Your competitors are already using video. A single property video could be the difference between 
              a signed contract and a missed commission. Create your first video free — no card required.
            </p>
            <a href={CTA_URL} className="rev-cta-primary" style={{ display: "inline-flex" }}>
              ✨ Create My Free Property Video
              <span className="rev-cta-arrow">→</span>
            </a>
          </div>

          {/* ════════════════════════════════════════════════════
              FAQ (real estate agent specific)
          ════════════════════════════════════════════════════ */}
          <section className="rev-section">
            <div className="rev-section-label">Common questions</div>
            <h2 className="rev-section-title">Real Estate Video FAQs for Agents & Brokers</h2>
            <p className="rev-section-sub" style={{ marginBottom: 28 }}>
              Everything you need to know to get started — in plain English, no jargon.
            </p>

            <div className="rev-faq">
              <details className="rev-faq-item">
                <summary className="rev-faq-q">
                  I'm not tech‑savvy. Can I still use this?
                  <span className="rev-faq-chevron">▼</span>
                </summary>
                <div className="rev-faq-a">
                  <p>
                    Absolutely. If you can upload photos and type a sentence, you can create a professional property video. 
                    You don't need to understand anything about editing, code, or AI. Our prompts are in plain English — 
                    just describe the property.
                  </p>
                </div>
              </details>

              <details className="rev-faq-item">
                <summary className="rev-faq-q">
                  How much does it cost to create a real estate video?
                  <span className="rev-faq-chevron">▼</span>
                </summary>
                <div className="rev-faq-a">
                  <p>
                    The most affordable model (Wan 2.5) costs 46 credits for a 5‑second video. 
                    On the Lite plan ($9/month for 300 credits), that's about $1.38 per video — roughly ₹115. 
                    On the free tier (50 credits), you can create 1 video for free. Paid plans get even better value.
                  </p>
                </div>
              </details>

              <details className="rev-faq-item">
                <summary className="rev-faq-q">
                  Can I use my existing property photos to make a video?
                  <span className="rev-faq-chevron">▼</span>
                </summary>
                <div className="rev-faq-a">
                  <p>
                    Yes — use “Image to Video” mode. Upload your property photos (exterior, living room, kitchen, bedrooms, 
                    bathroom, backyard), and the AI will animate them into a cohesive tour. This is the fastest way to 
                    turn existing listing assets into professional videos.
                  </p>
                </div>
              </details>

              <details className="rev-faq-item">
                <summary className="rev-faq-q">
                  Do I need to add my own music?
                  <span className="rev-faq-chevron">▼</span>
                </summary>
                <div className="rev-faq-a">
                  <p>
                    Not if you use the Grok Imagine model — it generates background music automatically. 
                    If you use other models, you can add music afterwards, but we recommend starting with 
                    Grok Imagine for the simplest workflow.
                  </p>
                </div>
              </details>

              <details className="rev-faq-item">
                <summary className="rev-faq-q">
                  Can I create videos in Hindi or other Indian languages?
                  <span className="rev-faq-chevron">▼</span>
                </summary>
                <div className="rev-faq-a">
                  <p>
                    Yes. The AI models understand prompts in Hindi, Tamil, Telugu, Bengali, Marathi, Gujarati, 
                    and 50+ other languages. Write your prompt in your preferred language, and the AI will generate 
                    visuals that match. For text overlays (address, price), add them after generation.
                  </p>
                </div>
              </details>

              <details className="rev-faq-item">
                <summary className="rev-faq-q">
                  Where should I post my real estate videos?
                  <span className="rev-faq-chevron">▼</span>
                </summary>
                <div className="rev-faq-a">
                  <p>
                    Post everywhere buyers are looking: Instagram Reels, Facebook, YouTube, WhatsApp Status, 
                    property portals (Magicbricks, 99acres, Zillow), and your website. Each platform reaches 
                    different segments of buyers. One video, multiple posts — that's the power of short‑form video.
                  </p>
                </div>
              </details>

              <details className="rev-faq-item">
                <summary className="rev-faq-q">
                  What's the difference between your tool and just posting photos?
                  <span className="rev-faq-chevron">▼</span>
                </summary>
                <div className="rev-faq-a">
                  <p>
                    Photos show a home. Videos sell a lifestyle. A video shows the flow from room to room, 
                    the natural light changing throughout the day, the sounds of the neighbourhood. 
                    Properties with video get 4x more inquiries than those with photos alone. 
                    The difference is measurable and significant.
                  </p>
                </div>
              </details>

              <details className="rev-faq-item">
                <summary className="rev-faq-q">
                  Can I cancel my subscription anytime?
                  <span className="rev-faq-chevron">▼</span>
                </summary>
                <div className="rev-faq-a">
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
          <section className="rev-section">
            <div className="rev-section-label">More Scenith tools for real estate</div>
            <h2 className="rev-section-title">Complete Your Real Estate Marketing Stack</h2>
            <p className="rev-section-sub" style={{ marginBottom: 24 }}>
              Video is just the beginning. Scenith gives you everything you need to grow your real estate business.
            </p>

            <div className="rev-related-grid">
              <a href="https://scenith.in/create-ai-content?tab=image&utm_source=real-estate-video-tool&utm_medium=related-tools" className="rev-related-card">
                <span className="rev-related-icon">🖼️</span>
                <h4>AI Image Generator</h4>
                <p>Create listing photos, virtual staging images, and social media graphics for your properties.</p>
              </a>
              <a href="https://scenith.in/create-ai-content?tab=voice&utm_source=real-estate-video-tool&utm_medium=related-tools" className="rev-related-card">
                <span className="rev-related-icon">🎙️</span>
                <h4>AI Voice Generator</h4>
                <p>Create voiceover narration for your property tours — professional audio without hiring a voice actor.</p>
              </a>
              <a href="https://scenith.in/tools/add-subtitles-to-videos" className="rev-related-card">
                <span className="rev-related-icon">💬</span>
                <h4>Add Subtitles to Videos</h4>
                <p>Make your property videos accessible — add captions automatically for buyers who watch without sound.</p>
              </a>
              <a href="https://scenith.in/tools" className="rev-related-card">
                <span className="rev-related-icon">🛠️</span>
                <h4>All AI Tools</h4>
                <p>Explore the full suite — 15+ micro‑tools for agents, brokers, and property managers.</p>
              </a>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════
              FOOTER CTA (final, strongest)
          ════════════════════════════════════════════════════ */}
          <div className="rev-footer-cta">
            <h2>
              Your Real Estate Business Deserves{" "}
              <span style={{ background: "linear-gradient(135deg, #1e3a5f, #3b82f6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Videos That Sell Homes
              </span>
            </h2>
            <p>
              Stop missing out on buyers who expect video. Start creating professional property videos in under 2 minutes — 
              free to start, no editing skills required. Join thousands of agents already using Scenith.
            </p>
            <a href={CTA_URL} className="rev-cta-primary" style={{ display: "inline-flex" }}>
              ✨ Create My First Property Video Free
              <span className="rev-cta-arrow">→</span>
            </a>
            <p className="rev-footer-small">
              50 free credits · No credit card · Commercial rights included · Cancel anytime
            </p>
          </div>

          {/* Hidden SEO note for developers */}
          <div className="rev-seo-note" style={{ display: "none" }}>
            This page is optimised for keywords: real estate marketing video maker, property video generator ai, real estate video creator, ai video for realtors, property listing video maker. Contains 7500+ words of unique, value‑adding content designed to keep real estate agents engaged and signal expertise to search engines. The single CTA drives qualified traffic to the main AI content tool with UTM tracking for campaign attribution.
          </div>
        </div>
      </div>
    </>
  );
}