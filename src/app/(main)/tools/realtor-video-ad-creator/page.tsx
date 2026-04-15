// app/tools/realtor-video-ad-creator/page.tsx
// Static SEO page — no client-side interactivity needed, no "use client"

import type { Metadata } from "next";
import Link from "next/link";
import "./realtor-video-ad-creator.css";

// ── Metadata ──────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Free AI Realtor Video Ad Creator — Generate Real Estate Video Ads in 60 Seconds",
  description:
    "Create cinematic AI-generated real estate video ads for listings, open houses, agent branding, and social media. No editing skills needed. Generate free with Kling, Veo 3.1, and Wan 2.5 AI video models.",
  keywords: [
    "realtor video ad creator",
    "AI real estate video generator",
    "real estate video ads",
    "property listing video maker",
    "AI video for realtors",
    "free real estate video creator",
    "AI agent branding video",
    "open house video ads",
    "real estate social media video",
    "AI property video maker",
    "listing video generator",
    "real estate marketing video AI",
    "generate real estate video",
    "AI video ad for realtors",
    "Scenith AI video",
  ],
  alternates: {
    canonical: "https://scenith.in/tools/realtor-video-ad-creator",
  },
  openGraph: {
    title: "Free AI Realtor Video Ad Creator — Cinematic Property Videos in 60 Seconds",
    description:
      "Turn any property listing into a stunning AI video ad for Instagram, YouTube, and MLS. Powered by Kling 2.6, Veo 3.1, and Wan 2.5. Free to try.",
    url: "https://scenith.in/tools/realtor-video-ad-creator",
    siteName: "Scenith",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Realtor Video Ad Creator — Free Property Videos in 60 Seconds",
    description:
      "Generate cinematic real estate video ads from a text prompt. No camera, no editor, no agency. Powered by Kling 2.6 Pro & Veo 3.1.",
  },
};

// ── Structured Data ───────────────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Scenith AI Realtor Video Ad Creator",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  url: "https://scenith.in/tools/realtor-video-ad-creator",
  description:
    "AI-powered video ad generator for real estate agents and realtors. Create property listing videos, open house promos, and agent branding videos in 60 seconds.",
  featureList: [
    "AI video generation from text prompts",
    "Real estate listing video ads",
    "Agent branding video creation",
    "Social media video formats (16:9, 9:16, 1:1)",
    "Up to 1080p HD output",
    "MP4 download, no watermark",
  ],
};

// ── Page Component ────────────────────────────────────────────────────────────
export default function RealtorVideoAdCreatorPage() {
  const TOOL_URL =
    "https://scenith.in/create-ai-content?tab=video&utm_source=realtor-video-ad-creator&utm_medium=micro-tool&utm_campaign=realtor-seo-2026";

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="rvac-page">

        {/* ── Breadcrumb ── */}
        <nav className="rvac-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span className="rvac-breadcrumb-sep">›</span>
          <Link href="/tools">Tools</Link>
          <span className="rvac-breadcrumb-sep">›</span>
          <span>Realtor Video Ad Creator</span>
        </nav>

        {/* ───────────────────────────────────────────────────────── HERO ── */}
        <header className="rvac-hero">
          <div className="rvac-hero-eyebrow">
            <span>🏡</span>
            <span>Free AI Tool for Real Estate Professionals</span>
          </div>
          <h1 className="rvac-hero-h1">
            Create Cinematic Realtor Video Ads <em>in 60 Seconds</em> — Free
          </h1>
          <p className="rvac-hero-sub">
            Generate AI-powered property listing videos, open house promos, and agent branding reels
            that stop the scroll on Instagram, YouTube Shorts, and Zillow — no camera, no editor, no agency.
          </p>

          <a href={TOOL_URL} className="rvac-cta-btn">
            🎬 Generate My Realtor Video Free
            <span className="rvac-cta-arrow">→</span>
          </a>
          <br />
          <a href="#how-it-works" className="rvac-cta-secondary">
            ↓ See how it works in 3 steps
          </a>

          <div className="rvac-stat-strip">
            <div className="rvac-stat">
              <span className="rvac-stat-num">6</span>
              <span className="rvac-stat-label">AI Video Models</span>
            </div>
            <div className="rvac-stat">
              <span className="rvac-stat-num">60s</span>
              <span className="rvac-stat-label">Avg Generation Time</span>
            </div>
            <div className="rvac-stat">
              <span className="rvac-stat-num">1080p</span>
              <span className="rvac-stat-label">Max Resolution</span>
            </div>
            <div className="rvac-stat">
              <span className="rvac-stat-num">0</span>
              <span className="rvac-stat-label">Editing Skills Needed</span>
            </div>
            <div className="rvac-stat">
              <span className="rvac-stat-num">Free</span>
              <span className="rvac-stat-label">To Get Started</span>
            </div>
          </div>

          <div className="rvac-social-proof">
            <div className="rvac-proof-item">🎬 <strong>Kling 2.6 Pro</strong></div>
            <div className="rvac-proof-dot" />
            <div className="rvac-proof-item">🌐 <strong>Veo 3.1 by Google</strong></div>
            <div className="rvac-proof-dot" />
            <div className="rvac-proof-item">🎵 <strong>Grok Imagine (with audio)</strong></div>
            <div className="rvac-proof-dot" />
            <div className="rvac-proof-item">🚀 <strong>Wan 2.5</strong></div>
          </div>
        </header>

        <hr className="rvac-divider" />

        {/* ─────────────────────────────────────────── WHY VIDEO ADS MATTER ── */}
        <section className="rvac-section">
          <p className="rvac-section-label">The Real Estate Video Marketing Reality in 2026</p>
          <h2 className="rvac-section-h2">
            Why Every Realtor Needs Video Ads Right Now
          </h2>
          <p className="rvac-section-lead">
            Video is no longer a nice-to-have in real estate marketing — it is the channel where buyers,
            sellers, and renters form their first impressions. In 2026, listings with video ads generate
            significantly more qualified inquiries than static photo galleries alone, and agents who run
            consistent video branding on Instagram Reels and YouTube Shorts build audiences that convert
            for years.
          </p>

          <div className="rvac-toc">
            <div className="rvac-toc-title">Table of Contents</div>
            <ul className="rvac-toc-list">
              <li><a href="#why-video">Why Realtors Need AI Video Ads in 2026</a></li>
              <li><a href="#how-it-works">How to Generate a Realtor Video Ad in 3 Steps</a></li>
              <li><a href="#use-cases">8 Types of Real Estate Videos You Can Make</a></li>
              <li><a href="#prompt-scripts">Ready-to-Use Video Prompt Scripts</a></li>
              <li><a href="#models">Best AI Video Models for Real Estate</a></li>
              <li><a href="#tips">Pro Tips: Getting the Best Real Estate AI Videos</a></li>
              <li><a href="#compare">AI Video vs Traditional Video Production</a></li>
              <li><a href="#platforms">Best Platforms to Distribute Your Realtor Video Ads</a></li>
              <li><a href="#faq">Frequently Asked Questions</a></li>
            </ul>
          </div>

          <div className="rvac-rich" id="why-video">
            <h3>The Video Engagement Gap That's Costing Realtors Deals</h3>
            <p>
              Walk through any high-performing real estate Instagram profile in 2026 and the pattern is
              unmistakable: the agents closing the most deals are not necessarily the ones with the most
              listings — they are the ones publishing video consistently. A cinematic drone-style sweep
              over a neighborhood, a slow-motion pan through a sunlit kitchen, or a punchy 15-second
              "Just Listed" reel drives 3–5× more profile visits than a static image post, according to
              platform data from Meta and LinkedIn.
            </p>
            <p>
              Yet the majority of independent agents and small brokerages still rely entirely on
              photography. The reason is almost always the same: <strong>video production is expensive,
              time-consuming, and requires skills most agents simply don't have</strong>. Professional
              videography for a single property can cost between $300 and $1,200. Editing adds another
              $150–$600. Then comes music licensing, color grading, and formatting for every platform.
              A single listing video can easily consume an entire afternoon and a four-figure budget.
            </p>
            <p>
              This is precisely the gap that AI video generation has closed in 2026. With models like
              Kling 2.6 Pro, Veo 3.1 by Google, and Wan 2.5, a realtor can describe a property or
              branding moment in plain text and receive a cinematic, high-resolution video clip in under
              two minutes — with zero production overhead.
            </p>

            <div className="rvac-quote">
              <p className="rvac-quote-text">
                "The agents who figure out AI video first will dominate their farm areas within
                18 months. It's the same shift we saw when every agent had to get on Facebook — except
                this one is faster and the gap between early adopters and late adopters is much wider."
              </p>
              <p className="rvac-quote-attr">— Common sentiment among real estate marketing consultants, 2025–2026</p>
            </div>

            <h3>What Buyers Expect from a Listing in 2026</h3>
            <p>
              The modern homebuyer — especially millennial and Gen Z first-time buyers who now represent
              the majority of purchasing activity — has been conditioned by Netflix, TikTok, and YouTube
              to expect video-first content experiences. They are not browsing listings passively; they
              are swiping through Reels and Shorts at speed. A static photo thumbnail does not stop
              the scroll. A cinematic aerial view of a neighborhood at golden hour does.
            </p>
            <p>
              Buyer behavior research consistently shows that properties with video content see higher
              inquiry rates, longer listing page dwell times, and more saved-to-favorites activity. In
              competitive markets, this translates directly into offers — and faster ones.
            </p>
            <p>
              For sellers, the value proposition is equally clear. When an agent presents their listing
              marketing plan and includes <em>AI-generated cinematic video ads on Instagram, YouTube,
              and Facebook</em> in their pitch, it differentiates them meaningfully from the agent down
              the street who only offers photo tours and a Zillow upload. In a listing appointment, that
              visual marketing story can be the difference between winning and losing the business.
            </p>

            <h3>The Rise of AI Video in Real Estate Marketing</h3>
            <p>
              AI video generation has crossed a quality threshold in 2025–2026 that makes it genuinely
              usable for professional real estate marketing. Models like Kling 2.6 Pro produce 5–10
              second clips that, when viewed on a phone screen at social media quality, are
              indistinguishable from footage captured by a professional videographer. Veo 3.1 by Google
              brings unprecedented photorealism and cinematic motion. Grok Imagine adds
              AI-generated audio — meaning your video ad can have background music and ambient sound
              without a single music license purchase.
            </p>
            <p>
              This is not a future capability — it is available today, on Scenith, for free. The
              question for realtors is not whether AI video will reshape their marketing; it is whether
              they will adopt it before their local competitors do.
            </p>
          </div>
        </section>

        <hr className="rvac-divider" />

        {/* ────────────────────────────────────────────────── HOW IT WORKS ── */}
        <section className="rvac-section rvac-section--tinted" id="how-it-works">
          <div style={{ maxWidth: "var(--rvac-max-w)", margin: "0 auto" }}>
            <p className="rvac-section-label">How It Works</p>
            <h2 className="rvac-section-h2">
              Generate Your First Realtor Video Ad in 3 Steps
            </h2>
            <p className="rvac-section-lead">
              No software to install. No account linking. No creative direction meeting. Just a prompt and
              a click.
            </p>

            <div className="rvac-steps">
              <div className="rvac-step">
                <div className="rvac-step-num">1</div>
                <div className="rvac-step-body">
                  <h3 className="rvac-step-h">Describe Your Property or Scene</h3>
                  <p className="rvac-step-p">
                    Write a plain-language description of the property or visual moment you want to capture.
                    It can be as simple as <em>"luxury beachfront home at sunset, slow aerial pan, golden
                    light reflecting on the water"</em> or as specific as <em>"modern open-plan kitchen with
                    white marble countertops, morning light, slow zoom reveal, 4K cinematic"</em>. The more
                    detail you include about lighting, movement, and atmosphere, the more cinematic your
                    result will be. You can also use our one-click prompt suggestions to get started instantly.
                  </p>
                  <span className="rvac-step-tag">⏱️ Takes ~30 seconds</span>
                </div>
              </div>

              <div className="rvac-step">
                <div className="rvac-step-num">2</div>
                <div className="rvac-step-body">
                  <h3 className="rvac-step-h">Pick Your AI Video Model & Settings</h3>
                  <p className="rvac-step-p">
                    Choose from Kling 2.6 Pro for maximum cinematic quality, Veo 3.1 Fast for speed,
                    Wan 2.5 for cost-effective high-volume content, or Grok Imagine if you want
                    AI-generated audio included. Select your aspect ratio (16:9 for YouTube and
                    desktop, 9:16 for Instagram Reels and TikTok, 1:1 for LinkedIn), your duration
                    (5s or 10s), and resolution up to 1080p. If you have a reference photo of the
                    property, switch to Image-to-Video mode to animate your existing listing photos.
                  </p>
                  <span className="rvac-step-tag">🎬 6 AI models to choose from</span>
                </div>
              </div>

              <div className="rvac-step">
                <div className="rvac-step-num">3</div>
                <div className="rvac-step-body">
                  <h3 className="rvac-step-h">Download & Post — Anywhere</h3>
                  <p className="rvac-step-p">
                    Your video is ready in 30–120 seconds. Download the MP4 directly — no watermark, full
                    commercial rights, ready for immediate posting. Drop it into Instagram, upload to
                    YouTube Shorts, share as a Facebook video post, attach to your MLS listing, or add it
                    to your email newsletter. Then add AI-generated subtitles with our companion tool to
                    maximize accessibility and watch-time on silent autoplay.
                  </p>
                  <span className="rvac-step-tag">📥 MP4 download, no watermark</span>
                </div>
              </div>
            </div>

            {/* Mid-page CTA */}
            <div style={{ textAlign: "center", marginTop: 48 }}>
              <a href={TOOL_URL} className="rvac-cta-btn">
                🏡 Start Generating — It's Free
                <span className="rvac-cta-arrow">→</span>
              </a>
              <p style={{ marginTop: 12, fontSize: 12, color: "var(--rvac-text-3)" }}>
                50 free credits on sign-up · No credit card · Takes 30 seconds to start
              </p>
            </div>
          </div>
        </section>

        <hr className="rvac-divider" />

        {/* ───────────────────────────────────────────────────── USE CASES ── */}
        <section className="rvac-section" id="use-cases">
          <p className="rvac-section-label">Real Estate Video Use Cases</p>
          <h2 className="rvac-section-h2">
            8 Types of Realtor Videos You Can Generate with AI
          </h2>
          <p className="rvac-section-lead">
            This tool is not limited to simple property fly-throughs. Here are eight distinct video
            formats that real estate professionals use to build their brand, drive listing inquiries,
            and dominate their market.
          </p>

          <div className="rvac-usecases">
            <div className="rvac-uc-card">
              <span className="rvac-uc-icon">🏠</span>
              <h3 className="rvac-uc-h">Property Listing Videos</h3>
              <p className="rvac-uc-p">
                Create cinematic walkthroughs and exterior reveals for each listing.
                Use Image-to-Video to animate your existing listing photos into flowing
                video content that gets 5× more engagement on Zillow and Realtor.com.
                Perfect for luxury properties where first impressions are everything.
              </p>
            </div>

            <div className="rvac-uc-card">
              <span className="rvac-uc-icon">📣</span>
              <h3 className="rvac-uc-h">Open House Promo Reels</h3>
              <p className="rvac-uc-p">
                Generate a 10-second cinematic promo for every open house — post it to
                Instagram Stories the evening before and watch your RSVP rate climb.
                Include address overlays using our subtitle tool. No appointment with a
                videographer, no waiting until the weekend.
              </p>
            </div>

            <div className="rvac-uc-card">
              <span className="rvac-uc-icon">👤</span>
              <h3 className="rvac-uc-h">Agent Personal Branding Videos</h3>
              <p className="rvac-uc-p">
                Generate visual brand content for your personal profile — neighborhood
                lifestyle footage, "market update" cinematic backdrops, and professional
                intro sequences for your YouTube channel. Consistent video branding builds
                authority and recognition in your farm area over time.
              </p>
            </div>

            <div className="rvac-uc-card">
              <span className="rvac-uc-icon">🌆</span>
              <h3 className="rvac-uc-h">Neighborhood Showcase Videos</h3>
              <p className="rvac-uc-p">
                Buyers purchase neighborhoods, not just houses. Generate AI cinematic
                videos of local parks, main streets, waterfronts, school areas, and
                lifestyle scenes. Post one neighborhood video per week to build
                community authority and organic search presence.
              </p>
            </div>

            <div className="rvac-uc-card">
              <span className="rvac-uc-icon">📈</span>
              <h3 className="rvac-uc-h">Market Update Content</h3>
              <p className="rvac-uc-p">
                Create dramatic visual backgrounds for your monthly market update
                videos — aerial city shots, busy street-level scenes, architectural
                details. Use as B-roll behind your talking-head footage or overlay
                market statistics directly with a video editing tool.
              </p>
            </div>

            <div className="rvac-uc-card">
              <span className="rvac-uc-icon">🎉</span>
              <h3 className="rvac-uc-h">"Just Sold" & "Just Listed" Reels</h3>
              <p className="rvac-uc-p">
                Celebrate each closing with a stunning cinematic reel. A "Just Sold"
                video with beautiful property footage and a congratulations overlay
                builds social proof faster than any testimonial. Generate one for every
                closing and watch your follower count grow organically.
              </p>
            </div>

            <div className="rvac-uc-card">
              <span className="rvac-uc-icon">💌</span>
              <h3 className="rvac-uc-h">Email & Newsletter Video Thumbnails</h3>
              <p className="rvac-uc-p">
                Embed video previews in your drip email campaigns to increase open-to-click
                rates. A cinematic property clip embedded in a listing alert email converts
                dramatically better than a static image. Generate a fresh video for each
                email send in under a minute.
              </p>
            </div>

            <div className="rvac-uc-card">
              <span className="rvac-uc-icon">🏢</span>
              <h3 className="rvac-uc-h">Commercial & Investment Property Ads</h3>
              <p className="rvac-uc-p">
                Commercial brokers and investment property specialists can generate
                cinematic aerials, office district B-roll, and industrial property
                visuals for investor presentations, LinkedIn outreach, and CCIM
                network content — without commissioning drone footage each time.
              </p>
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────── FIRST MAIN CTA BLOCK ── */}
        <div className="rvac-cta-block">
          <p className="rvac-cta-block-label">Ready to Create Your First Video?</p>
          <h2 className="rvac-cta-block-h2">
            Your Competitors Are Already Using AI Video. <em>Are You?</em>
          </h2>
          <p className="rvac-cta-block-sub">
            Generate a cinematic real estate video ad in 60 seconds. Free to start,
            no credit card, no editing required.
          </p>
          <a href={TOOL_URL} className="rvac-cta-btn-lg">
            🎬 Create My Realtor Video Now
            <span className="rvac-cta-arrow">→</span>
          </a>
          <p className="rvac-cta-note">50 free credits · MP4 download · Full commercial rights</p>
        </div>

        <hr className="rvac-divider" />

        {/* ──────────────────────────────────────────── PROMPT SCRIPTS ── */}
        <section className="rvac-section" id="prompt-scripts">
          <p className="rvac-section-label">Ready-to-Use Prompt Scripts</p>
          <h2 className="rvac-section-h2">
            Copy-Paste AI Video Prompts for Real Estate
          </h2>
          <p className="rvac-section-lead">
            Not sure what to write? Copy any of these battle-tested prompts directly into the
            Scenith AI video generator. Each one has been crafted to produce compelling,
            property-appropriate cinematic footage.
          </p>

          <div className="rvac-scripts">
            {[
              {
                type: "Luxury Listing Reveal",
                duration: "10 seconds · 16:9 · Kling 2.6 Pro",
                body:
                  "Slow cinematic aerial reveal of a modern luxury home with floor-to-ceiling glass walls, infinity pool overlooking a valley, golden hour sunlight, wispy clouds, elegant and aspirational, ultra-detailed 4K wide shot",
              },
              {
                type: "Cozy Family Home",
                duration: "5–10 seconds · 16:9 or 9:16 · Wan 2.5",
                body:
                  "Warm cinematic walkthrough of a charming suburban family home, late afternoon light streaming through bay windows, fresh flowers on kitchen island, green manicured lawn visible outside, welcoming and cozy atmosphere",
              },
              {
                type: "Urban Condo / City Living",
                duration: "5 seconds · 9:16 · Kling 2.5 Turbo",
                body:
                  "Cinematic view from a high-rise condo balcony at blue hour, city skyline with twinkling lights, glass and steel towers, slow dolly forward into the city, sleek and aspirational, vertical format for Reels",
              },
              {
                type: "Open House Promo",
                duration: "5 seconds · 9:16 · Grok Imagine (with audio)",
                body:
                  "Bright, welcoming exterior of a craftsman-style home on a tree-lined street, Sunday morning light, 'Open House' yard sign catching the wind, inviting and warm, slow push toward the front door",
              },
              {
                type: "Beachfront / Waterfront Property",
                duration: "10 seconds · 16:9 · Veo 3.1",
                body:
                  "Breathtaking aerial drone gliding low over turquoise water toward a modern beachfront villa, white sand beach, palm trees swaying, sunset colors on the horizon, cinematic and aspirational, photorealistic 4K",
              },
              {
                type: "Mountain / Ski Chalet",
                duration: "10 seconds · 16:9 · Veo 3.1 Fast",
                body:
                  "Cinematic slow reveal of a timber-frame mountain chalet nestled in snow-covered pine forests, warm amber lights glowing through the windows, snowflakes drifting slowly, majestic peaks in the background, cozy luxury",
              },
              {
                type: "Neighborhood Lifestyle",
                duration: "5–10 seconds · 16:9 · Wan 2.5",
                body:
                  "Beautiful tree-lined suburban main street on a sunny weekend morning, families walking dogs, outdoor café tables, local boutique shop fronts, dappled sunlight through leaves, community and warmth, cinematic wide shot",
              },
              {
                type: "Just Sold Celebration",
                duration: "5 seconds · 1:1 · Kling 2.5 Turbo",
                body:
                  "Elegant exterior of a sold home with a 'SOLD' sign, confetti falling softly in the golden afternoon light, jubilant and celebratory atmosphere, cinematic and emotional, perfect for Instagram square post",
              },
              {
                type: "Investment / Commercial Property",
                duration: "10 seconds · 16:9 · Kling 2.6 Pro",
                body:
                  "Dramatic aerial view of a modern mixed-use commercial development district at dusk, glass office towers lit from within, wide boulevard below with light trails, powerful and aspirational, investor-grade cinematic quality",
              },
              {
                type: "Agent Personal Brand Intro",
                duration: "5 seconds · 9:16 · Grok Imagine",
                body:
                  "Professional realtor walking confidently through a sunlit luxury property lobby, marble floors, floor-to-ceiling windows, natural warm light, slow-motion, elegant personal branding video for Instagram Reels",
              },
            ].map((s, i) => (
              <div className="rvac-script-card" key={i}>
                <div className="rvac-script-header">
                  <span className="rvac-script-type">{s.type}</span>
                  <span className="rvac-script-duration">{s.duration}</span>
                </div>
                <div className="rvac-script-body">"{s.body}"</div>
              </div>
            ))}
          </div>

          <div className="rvac-tip" style={{ marginTop: 32 }}>
            <span className="rvac-tip-icon">💡</span>
            <p className="rvac-tip-text">
              <strong>Pro Prompt Formula:</strong> [Camera movement] + [Property type] +
              [Lighting condition] + [Atmosphere/mood] + [Technical quality descriptor].
              Example: <em>"Slow aerial pan → modern coastal villa → golden hour → luxurious and aspirational → 4K cinematic"</em>.
              This formula consistently produces the most compelling real estate video content across all AI models.
            </p>
          </div>

          <div style={{ textAlign: "center", marginTop: 40 }}>
            <a href={TOOL_URL} className="rvac-cta-btn">
              🎬 Use These Prompts in the Generator
              <span className="rvac-cta-arrow">→</span>
            </a>
          </div>
        </section>

        <hr className="rvac-divider" />

        {/* ─────────────────────────────────────────────────── AI MODELS ── */}
        <section className="rvac-section rvac-section--dark" id="models">
          <p className="rvac-section-label" style={{ color: "var(--rvac-gold)" }}>
            Powered By
          </p>
          <h2 className="rvac-section-h2" style={{ color: "var(--rvac-white)" }}>
            The Best AI Video Models for Real Estate in 2026
          </h2>
          <p className="rvac-section-lead">
            Not all AI video models are equal for real estate content. Here's what each model excels at
            and which ones we recommend for different listing types.
          </p>

          <div className="rvac-features">
            <div className="rvac-feature-card">
              <span className="rvac-feature-icon">🎬</span>
              <h3 className="rvac-feature-h">Kling 2.6 Pro</h3>
              <p className="rvac-feature-p">
                The gold standard for luxury real estate video in 2026. Produces 5–10 second
                clips at up to 1080p with exceptional motion coherence and photorealism. Ideal
                for high-end residential listings, penthouse promos, and prestige brand content
                where visual quality is non-negotiable. Supports both text-to-video and
                image-to-video for animating listing photography.
              </p>
            </div>

            <div className="rvac-feature-card">
              <span className="rvac-feature-icon">🌐</span>
              <h3 className="rvac-feature-h">Veo 3.1 by Google</h3>
              <p className="rvac-feature-p">
                Google's flagship video model brings photorealistic exterior and aerial scenes
                that are hard to distinguish from real drone footage at social media resolutions.
                Particularly strong at outdoor scenes — beachfronts, mountain properties,
                suburban streetscapes, and neighborhood reveals. Veo 3.1 Fast is an excellent
                choice when you need volume content quickly, while Veo 3.1 (full) delivers
                the most detailed cinematic output.
              </p>
            </div>

            <div className="rvac-feature-card">
              <span className="rvac-feature-icon">🚀</span>
              <h3 className="rvac-feature-h">Wan 2.5</h3>
              <p className="rvac-feature-p">
                The most credit-efficient model on the platform, making it ideal for high-volume
                real estate content strategies. Generate a video for every listing, every open
                house, and every market update without burning through your budget. Wan 2.5
                produces excellent results at 480p and 720p — perfectly sharp for Instagram
                Stories and email preview clips where a few hundred pixels per inch is plenty.
              </p>
            </div>

            <div className="rvac-feature-card">
              <span className="rvac-feature-icon">🎵</span>
              <h3 className="rvac-feature-h">Grok Imagine (with Audio)</h3>
              <p className="rvac-feature-p">
                The only model on the platform that generates AI audio alongside the video.
                For real estate, this means ambient property sounds — ocean waves for beachfront
                listings, birdsong for garden properties, urban ambience for city condos — all
                generated automatically with zero music licensing concerns. A significant
                differentiator for Instagram Reels content where auto-play audio matters.
              </p>
            </div>

            <div className="rvac-feature-card">
              <span className="rvac-feature-icon">⚡</span>
              <h3 className="rvac-feature-h">Kling 2.5 Turbo</h3>
              <p className="rvac-feature-p">
                The fastest path to a finished video for time-sensitive campaigns. Use Kling
                2.5 Turbo when you need to post a "Just Listed" reel within an hour of signing
                the listing agreement. Significantly faster generation than the Pro model with
                solid visual quality for standard residential content. Your go-to for
                last-minute open house announcements.
              </p>
            </div>

            <div className="rvac-feature-card">
              <span className="rvac-feature-icon">🖼️</span>
              <h3 className="rvac-feature-h">Image-to-Video Mode</h3>
              <p className="rvac-feature-p">
                Already have professional listing photography? Use Image-to-Video mode to
                transform your static property photos into smooth, cinematic video clips.
                Upload a listing photo, write a brief motion description ("slow push toward
                front door, warm light"), and let the AI animate your existing assets.
                This is arguably the highest-ROI feature on the platform for working realtors.
              </p>
            </div>
          </div>
        </section>

        <hr className="rvac-divider" />

        {/* ───────────────────────────────────────────────────── PRO TIPS ── */}
        <section className="rvac-section" id="tips">
          <p className="rvac-section-label">Advanced Strategy</p>
          <h2 className="rvac-section-h2">
            Pro Tips: Getting the Best Real Estate AI Videos Every Time
          </h2>
          <p className="rvac-section-lead">
            The difference between a generic AI video and a genuinely compelling real estate video ad
            comes down to a handful of craft decisions. These are the techniques that separate top-
            performing agents from the rest.
          </p>

          <div className="rvac-rich">
            <h3>1. Always Specify Camera Movement</h3>
            <p>
              Generic AI video prompts produce generic results. The single most impactful upgrade you
              can make to any real estate prompt is to specify the camera movement. Words like
              "slow aerial descend," "gentle dolly push," "smooth tracking shot," "static wide
              establishing shot," or "slow pan right" give the AI model a clear motion brief and produce
              dramatically more professional-looking output. Real estate videographers spend years
              perfecting camera movement because it's what creates the emotional pull in a property video —
              so give that direction to your AI model explicitly.
            </p>

            <h3>2. Light Is Everything</h3>
            <p>
              Professional real estate photographers charge premium rates for "golden hour" shoots
              for a reason: warm, directional light makes every property look its best. In your
              AI video prompts, specify the lighting precisely: "golden hour sunlight," "late afternoon
              warm light streaming through windows," "overcast soft morning light," "blue hour
              twilight with interior lights glowing." This single instruction transforms an average
              AI video into something that looks like it was shot by a professional cinematographer.
            </p>

            <div className="rvac-tip">
              <span className="rvac-tip-icon">🌅</span>
              <p className="rvac-tip-text">
                <strong>Best performing lighting terms for real estate AI video:</strong>
                "golden hour" · "warm afternoon light" · "blue hour twilight" · "overcast
                diffused light" · "morning sun streaming through windows" · "soft natural light" ·
                "dramatic dusk lighting". Avoid "midday" or "noon light" — they make properties
                look flat.
              </p>
            </div>

            <h3>3. Use Image-to-Video for Every Active Listing</h3>
            <p>
              If you already have listing photography — and every serious agent does — you have a
              massive head start in AI video creation. The Image-to-Video mode on Scenith allows
              you to upload any listing photo and animate it with a motion prompt. This takes your
              existing marketing investment and multiplies it. A single session of a listing
              photoshoot can become 8–10 different video clips for different platforms: a wide
              exterior reveal for YouTube, a vertical interior pan for Instagram Reels, a slow
              kitchen zoom for your email newsletter, and a static fly-in for Facebook carousel ads.
            </p>

            <h3>4. Build a Video Template System for Your Brand</h3>
            <p>
              The most efficient realtor content systems involve a handful of prompt templates
              tailored to your specific market and brand aesthetic. Spend 30 minutes creating
              5–7 master prompts — one for exterior reveals, one for luxury interiors, one for
              neighborhood lifestyle, one for "just sold" celebrations — and save them. Then for
              each new listing, all you do is paste the template and adjust one or two details.
              Your video production time drops from 5 minutes to under 90 seconds per video.
            </p>

            <h3>5. Always Generate in Your Distribution Format First</h3>
            <p>
              Instagram Reels, TikTok, and YouTube Shorts are 9:16 (vertical). YouTube standard,
              MLS embeds, and website heroes are 16:9 (horizontal). LinkedIn and Facebook carousel
              posts perform best in 1:1 (square). Before generating, know where the video is going
              first and select that aspect ratio. Cropping a 16:9 video to 9:16 after the fact
              always loses quality and compositional intent. Generate native to your destination
              platform.
            </p>

            <h3>6. Add Subtitles to Every Video — Without Exception</h3>
            <p>
              Between 69% and 85% of social media video is watched without sound, depending on the
              platform. If your AI real estate video has no text overlay or subtitles, you are
              invisible to the majority of viewers. After generating your video on Scenith, use
              the companion subtitle tool (<a href="https://scenith.in/tools/add-subtitles-to-videos" style={{ color: "var(--rvac-gold)" }}>add-subtitles-to-videos</a>) to overlay your listing
              details, address, price, or call-to-action directly onto the video. This combination —
              AI-generated video + AI subtitles — is a complete, post-ready asset in under 3 minutes.
            </p>

            <h3>7. Batch Your Content Weekly, Not Daily</h3>
            <p>
              The agents who post most consistently on social media are not generating content
              spontaneously every day — they are batching. Set aside 30–45 minutes once a week to
              generate all your real estate video content for the next 7 days. During that session,
              create videos for every active listing, one neighborhood lifestyle video, one market
              update background, and a brand reel. Schedule them across your platforms using a
              social scheduler. Consistent daily posting is 10× more effective than sporadic bursts,
              and batching makes consistency achievable even for busy agents.
            </p>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────── COMPARE ── */}
        <section className="rvac-section rvac-section--tinted" id="compare">
          <p className="rvac-section-label">Cost & Time Analysis</p>
          <h2 className="rvac-section-h2">AI Video vs Traditional Real Estate Video Production</h2>
          <p className="rvac-section-lead">
            Let's put the numbers side-by-side. This is what a typical independent agent or small
            brokerage actually spends to produce video content the traditional way versus using
            AI video generation on Scenith.
          </p>

          <div className="rvac-compare">
            <div className="rvac-compare-col rvac-compare-col--them">
              <h3 className="rvac-compare-h">❌ Traditional Video Production</h3>
              <ul className="rvac-compare-list">
                <li>$300–$1,200 per property for videographer</li>
                <li>$150–$600 additional for editing</li>
                <li>$80–$300/year for stock music licensing</li>
                <li>1–3 day turnaround from shoot to final edit</li>
                <li>Scheduling conflicts, weather delays, agent availability</li>
                <li>Only affordable for higher-value listings</li>
                <li>Re-shoot costs if market photos change</li>
                <li>One format per shoot — no Reels-specific content</li>
                <li>Total cost per listing: $450–$1,800+</li>
              </ul>
            </div>

            <div className="rvac-compare-col rvac-compare-col--us">
              <h3 className="rvac-compare-h">✅ Scenith AI Video Generator</h3>
              <ul className="rvac-compare-list">
                <li>From $9/month for 300 credits (~4–6 videos)</li>
                <li>No editing skills or software needed</li>
                <li>No music licensing — Grok Imagine generates audio</li>
                <li>30–120 second turnaround per video</li>
                <li>Generate any time, any day, from any device</li>
                <li>Affordable for every listing, not just luxury</li>
                <li>Regenerate instantly — zero cost for retakes</li>
                <li>Generate 16:9, 9:16, and 1:1 separately — all formats covered</li>
                <li>Total cost per listing: ~$2–$5 in credits</li>
              </ul>
            </div>
          </div>

          <div className="rvac-tip" style={{ marginTop: 28 }}>
            <span className="rvac-tip-icon">📊</span>
            <p className="rvac-tip-text">
              <strong>The math for a typical agent:</strong> 3 new listings per month × $2 AI video
              cost = $6/month for video on every listing. Compare to $1,350/month at traditional
              production rates. The ROI case is not even close. The real question is not whether
              AI video is worth it — it's how quickly you can integrate it into your listing workflow.
            </p>
          </div>
        </section>

        <hr className="rvac-divider" />

        {/* ──────────────────────────────────────────── PLATFORM GUIDE ── */}
        <section className="rvac-section" id="platforms">
          <p className="rvac-section-label">Distribution Strategy</p>
          <h2 className="rvac-section-h2">
            Where to Post Your AI Realtor Videos in 2026
          </h2>
          <p className="rvac-section-lead">
            Generating a great video is only half the equation. Here's where to post it and how
            to maximize reach on each platform.
          </p>

          <div className="rvac-rich">
            <h3>Instagram Reels (9:16 Vertical)</h3>
            <p>
              Instagram remains the highest-engagement social media platform for real estate in 2026.
              Reels consistently outperform static posts and Stories for reach, especially for accounts
              under 10,000 followers where the algorithm actively distributes Reels to non-followers.
              Generate your property and neighborhood videos in 9:16 format. Post 3–5 Reels per week
              for sustained growth. Use trending audio (you can replace the Grok-generated audio with
              a trending song in Instagram's native editor if needed).
            </p>

            <h3>YouTube Shorts & YouTube Channel (9:16 and 16:9)</h3>
            <p>
              YouTube is the second-largest search engine in the world, and real estate search intent
              is extremely high on the platform. Publish 16:9 property tour videos to your main
              channel with keyword-optimized titles and descriptions. Repurpose the same content as
              YouTube Shorts (9:16) to capture the Shorts algorithm. YouTube content has a long
              shelf-life — a well-optimized property tour video can drive buyer inquiries months
              after posting, unlike social media posts that go cold within 48 hours.
            </p>

            <h3>TikTok (9:16 Vertical)</h3>
            <p>
              TikTok's real estate niche is thriving in 2026, particularly for agents who mix
              property content with market education. Generate neighborhood lifestyle videos,
              property reveal sequences, and "before/after renovation" style content using AI
              video. TikTok's algorithm favors watch-time — 5–7 second AI video clips are
              ideal for this platform because they loop seamlessly and maintain 100% watch-through
              rate, which the algorithm rewards heavily.
            </p>

            <h3>LinkedIn (1:1 Square and 16:9)</h3>
            <p>
              LinkedIn is an underutilized platform for residential realtors and an essential one
              for commercial agents. Post market update video backgrounds, investment property
              aerials, and development project reveals to LinkedIn. The platform's user base skews
              toward investors, business owners, and relocation decision-makers — exactly the
              audience for commercial and high-end residential listings.
            </p>

            <h3>MLS Listing Pages and Zillow</h3>
            <p>
              Many MLS systems and consumer portals now support video uploads directly on listing
              pages. Adding a 10-second AI-generated exterior reveal video to your Zillow listing
              sets it apart in search results and keeps buyers on your listing page longer. Combine
              this with professional photography and a detailed description for the most complete
              listing presentation on the market.
            </p>

            <h3>Email Newsletters and Drip Campaigns</h3>
            <p>
              Email CTR increases significantly when video thumbnails are included. Embed an
              animated GIF (or video thumbnail linked to your YouTube upload) in your monthly
              market update newsletter. For listing alert emails, include a 9:16 property preview
              clip that links back to the full listing. AI video gives you a fresh visual asset
              for every send without incurring additional production cost.
            </p>

            <div className="rvac-tip">
              <span className="rvac-tip-icon">📱</span>
              <p className="rvac-tip-text">
                <strong>Platform-Format Cheat Sheet:</strong>{" "}
                Instagram Reels → 9:16 · YouTube Shorts → 9:16 · YouTube Main → 16:9 ·
                TikTok → 9:16 · LinkedIn → 1:1 or 16:9 · Facebook Feed → 1:1 ·
                Facebook Stories → 9:16 · MLS/Zillow → 16:9 · Email GIF → 1:1
              </p>
            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────────────── SECOND CTA ── */}
        <div className="rvac-cta-block">
          <p className="rvac-cta-block-label">Start Creating Now</p>
          <h2 className="rvac-cta-block-h2">
            Your Next Listing <em>Deserves</em> a Cinematic Video
          </h2>
          <p className="rvac-cta-block-sub">
            Join realtors using AI video to dominate their market area.
            Generate your first video free — no credit card required.
          </p>
          <a href={TOOL_URL} className="rvac-cta-btn-lg">
            🏡 Generate My Free Realtor Video
            <span className="rvac-cta-arrow">→</span>
          </a>
          <p className="rvac-cta-note">
            Free to start · 50 credits included · Kling · Veo 3.1 · Wan 2.5 · Grok Imagine
          </p>
        </div>

        <hr className="rvac-divider" />

        {/* ─────────────────────────────────────────────────── CHECKLIST ── */}
        <section className="rvac-section">
          <p className="rvac-section-label">Quick Reference</p>
          <h2 className="rvac-section-h2">
            Your AI Real Estate Video Content Checklist
          </h2>
          <p className="rvac-section-lead">
            Use this checklist every time you take a new listing. By the end of your first session
            with the Scenith video generator, you should have all of these assets ready.
          </p>

          <div className="rvac-checklist">
            {[
              "Property exterior reveal video (16:9, 10 seconds) — for YouTube and website header",
              "Vertical property reel (9:16, 5–10 seconds) — for Instagram Reels and TikTok",
              "Square property highlight (1:1, 5 seconds) — for LinkedIn and Facebook Feed",
              "Neighborhood lifestyle video (16:9, 10 seconds) — for YouTube channel",
              "Open house announcement reel (9:16, 5 seconds) — for Instagram Stories",
              "Agent branding backdrop video (16:9) — for market update content",
              "Animated listing photo (Image-to-Video, any format) — for email campaigns",
              "Subtitles added to all social-format videos — for silent autoplay reach",
              "Videos scheduled across platforms 3–7 days in advance",
              "YouTube listing video uploaded with keyword-optimized title and description",
            ].map((item, i) => (
              <div className="rvac-checklist-item" key={i}>
                {item}
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 40 }}>
            <a href={TOOL_URL} className="rvac-cta-btn">
              🎬 Open the Video Generator & Start Your Checklist
              <span className="rvac-cta-arrow">→</span>
            </a>
          </div>
        </section>

        <hr className="rvac-divider" />

        {/* ────────────────────────────────────────────────── FEATURES ── */}
        <section className="rvac-section rvac-section--tinted">
          <p className="rvac-section-label">Platform Features</p>
          <h2 className="rvac-section-h2">
            Everything in One Place — Voice, Image, and Video
          </h2>
          <p className="rvac-section-lead">
            The Realtor Video Ad Creator links directly to Scenith's full AI content
            creation platform — where video generation is just the beginning.
          </p>

          <div className="rvac-features">
            <div className="rvac-feature-card">
              <span className="rvac-feature-icon">🎬</span>
              <h3 className="rvac-feature-h">AI Video Generation</h3>
              <p className="rvac-feature-p">
                6 models including Kling 2.6 Pro, Veo 3.1, Wan 2.5, and Grok Imagine.
                Text-to-video and image-to-video. Up to 1080p, 5 or 10 seconds, 3 aspect ratios.
                MP4 download, no watermark, full commercial rights.
              </p>
            </div>
            <div className="rvac-feature-card">
              <span className="rvac-feature-icon">🖼️</span>
              <h3 className="rvac-feature-h">AI Image Generation</h3>
              <p className="rvac-feature-p">
                Generate architectural visualization, interior staging mockups, and property
                marketing artwork with GPT Image 1, Imagen 4, FLUX 1.1 Pro, Grok Aurora,
                and Stability AI. Perfect for pre-listing visual development and
                storyboarding your video content.
              </p>
            </div>
            <div className="rvac-feature-card">
              <span className="rvac-feature-icon">🎙️</span>
              <h3 className="rvac-feature-h">AI Voice Generation</h3>
              <p className="rvac-feature-p">
                Generate professional voiceovers for your listing videos, agent introduction
                reels, and market update content. 40+ voices, 20+ languages, multiple providers
                including Google, OpenAI, and Azure Neural TTS. Perfect for overlaying onto
                your AI video clips.
              </p>
            </div>
            <div className="rvac-feature-card">
              <span className="rvac-feature-icon">💬</span>
              <h3 className="rvac-feature-h">AI Subtitle Generator</h3>
              <p className="rvac-feature-p">
                After generating your video, add auto-generated subtitles for listing address,
                property features, pricing, and calls-to-action. Essential for silent autoplay
                on Instagram, TikTok, and LinkedIn. Significantly increases engagement rate
                on all social platforms.
              </p>
            </div>
            <div className="rvac-feature-card">
              <span className="rvac-feature-icon">🎠</span>
              <h3 className="rvac-feature-h">AI Carousel Generator</h3>
              <p className="rvac-feature-p">
                Generate 3-slide image carousels for Instagram and LinkedIn from a single session.
                Perfect for "before/after renovation reveals," multi-room property tours,
                and neighborhood feature spotlights. Each slide generated independently
                with shared style consistency.
              </p>
            </div>
            <div className="rvac-feature-card">
              <span className="rvac-feature-icon">💳</span>
              <h3 className="rvac-feature-h">Simple Credit Pricing</h3>
              <p className="rvac-feature-p">
                One credit balance for voice, image, and video. No separate subscriptions.
                Free plan includes 50 credits on sign-up. Creator Lite from $9/month includes
                300 credits — enough for approximately 4–6 AI videos per month. No contracts,
                cancel anytime.
              </p>
            </div>
          </div>

          <div className="rvac-model-tags" style={{ marginTop: 32 }}>
            {[
              "Kling 2.6 Pro", "Kling 2.5 Turbo", "Veo 3.1 (Google)", "Veo 3.1 Fast",
              "Wan 2.5", "Grok Imagine (xAI)", "GPT Image 1", "Imagen 4", "FLUX 1.1 Pro",
              "Grok Aurora", "Stability AI Core", "Google TTS", "OpenAI TTS", "Azure Neural TTS",
            ].map((m) => (
              <span className="rvac-model-tag" key={m}>{m}</span>
            ))}
          </div>
        </section>

        <hr className="rvac-divider" />

        {/* ───────────────────────────────────────────────── FAQ ── */}
        <section className="rvac-section" id="faq">
          <p className="rvac-section-label">FAQ</p>
          <h2 className="rvac-section-h2">Frequently Asked Questions</h2>

          <div className="rvac-faq">
            {[
              {
                q: "Can I use AI-generated real estate videos commercially — for listings and ads?",
                a: (
                  <div className="rvac-faq-body">
                    <p>
                      Yes, absolutely. All content generated on Scenith comes with full commercial
                      rights. You can use AI-generated real estate videos in MLS listings, on
                      Zillow and Realtor.com, in paid social media advertising (Instagram, Facebook,
                      Google Ads, TikTok Ads), on YouTube, in email campaigns, on your brokerage
                      website, and in client-facing presentations. No attribution to Scenith is
                      required, and there are no licensing fees or residual costs.
                    </p>
                  </div>
                ),
              },
              {
                q: "How realistic do AI real estate videos look? Will clients think it's fake?",
                a: (
                  <div className="rvac-faq-body">
                    <p>
                      The quality of AI video models in 2026 — particularly Kling 2.6 Pro and Veo 3.1 —
                      is such that 5–10 second clips are genuinely indistinguishable from professionally
                      shot footage when viewed at typical social media resolutions on a smartphone screen.
                    </p>
                    <p>
                      The recommended practice is to use AI video for brand content, neighborhood lifestyle
                      footage, atmospheric reveals, and cinematic backdrops — not as a replacement for
                      accurate interior photography of the specific property. This means using AI video
                      for marketing reach and brand impact while still commissioning real photography
                      for the factual representation of the listing itself.
                    </p>
                  </div>
                ),
              },
              {
                q: "How long does it take to generate a real estate video?",
                a: (
                  <div className="rvac-faq-body">
                    <p>
                      Generation time varies by model. Wan 2.5 and Kling 2.5 Turbo typically complete
                      in 30–60 seconds. Kling 2.6 Pro and Veo 3.1 Fast take 60–90 seconds. Veo 3.1
                      (full quality) may take 90–120 seconds. Grok Imagine, which includes audio
                      generation, takes 60–90 seconds.
                    </p>
                    <p>
                      Compare this to traditional real estate video production: scheduling a
                      videographer (days), the shoot itself (1–3 hours), editing turnaround
                      (1–3 days), and revision cycles (another 1–2 days). The time-to-post advantage
                      of AI video is measured in orders of magnitude.
                    </p>
                  </div>
                ),
              },
              {
                q: "Can I use my existing listing photos with this tool?",
                a: (
                  <div className="rvac-faq-body">
                    <p>
                      Yes — this is one of the most powerful features available. Image-to-Video mode
                      lets you upload any listing photograph and animate it with a motion prompt.
                      A professional exterior photo becomes a cinematic push-in reveal. A kitchen
                      photo becomes a smooth pan across the countertops. A garden photo becomes a
                      gently swaying, warm scene.
                    </p>
                    <p>
                      This means every listing with existing professional photography already has the
                      raw material for a compelling AI video campaign. The Image-to-Video feature
                      is available via the same Scenith platform — just switch the generation mode
                      before clicking Generate.
                    </p>
                  </div>
                ),
              },
              {
                q: "Which aspect ratio should I generate for Instagram Reels vs YouTube vs MLS?",
                a: (
                  <div className="rvac-faq-body">
                    <p>
                      <strong>9:16 (vertical)</strong> for Instagram Reels, Instagram Stories, TikTok,
                      and YouTube Shorts. This is the native format for all short-form vertical video
                      platforms and occupies the full phone screen for maximum visual impact.
                    </p>
                    <p>
                      <strong>16:9 (horizontal/widescreen)</strong> for YouTube main channel,
                      MLS listing embeds, website hero videos, Zillow video uploads, and desktop
                      advertising. This is the standard broadcast format and presents most beautifully
                      on large screens.
                    </p>
                    <p>
                      <strong>1:1 (square)</strong> for LinkedIn Feed, Facebook Feed, and Instagram
                      grid posts. The square format performs well in feed environments where both
                      vertical and horizontal crops would lose significant composition.
                    </p>
                  </div>
                ),
              },
              {
                q: "Is there a free trial? Do I need a credit card?",
                a: (
                  <div className="rvac-faq-body">
                    <p>
                      Yes to the free trial, no to the credit card. When you sign up on Scenith, you
                      receive 50 free credits with no credit card required. Video generation costs
                      between 46 and 186 credits depending on model, duration, and resolution.
                      With 50 free credits, you can generate at least one full AI real estate video
                      to experience the quality firsthand.
                    </p>
                    <p>
                      Paid plans start at $1 (the Spark plan) for an additional 50 credits, and the
                      Creator Lite plan at $9/month includes 300 credits per month — sufficient for
                      4–6 AI videos monthly plus supplemental image and voice content.
                    </p>
                  </div>
                ),
              },
              {
                q: "Can I add music and voiceover to the AI videos?",
                a: (
                  <div className="rvac-faq-body">
                    <p>
                      There are two routes. If you use Grok Imagine as your video model, AI-generated
                      ambient audio is included in the video automatically — no action required.
                      This is ideal for atmospheric property content where you want natural-sounding
                      environmental audio.
                    </p>
                    <p>
                      For narrated property videos with a professional voiceover, generate your video
                      first, then generate a separate voiceover using the Scenith AI Voice Generator
                      (same platform, Voice tab), and combine them using any video editor — iMovie,
                      CapCut, Adobe Premiere, or even Instagram's own native editor for Reels.
                      This workflow gives you a fully professional, narrated listing video without
                      any paid music licensing.
                    </p>
                  </div>
                ),
              },
              {
                q: "Do I need to disclose that a video is AI-generated in my listing?",
                a: (
                  <div className="rvac-faq-body">
                    <p>
                      Real estate disclosure requirements vary significantly by jurisdiction and
                      are evolving rapidly as AI content becomes mainstream. As of 2026, most MLS
                      systems do not have specific AI video disclosure requirements, but the general
                      real estate disclosure principle — that marketing materials should not
                      misrepresent a property — still applies.
                    </p>
                    <p>
                      The recommended best practice is to use AI video for atmospheric and lifestyle
                      content (neighborhood scenes, exterior reveals, brand videos) rather than as a
                      substitute for accurate interior photography of the specific property being
                      listed. When in doubt, consult your broker or state real estate commission
                      for guidance on your specific market.
                    </p>
                  </div>
                ),
              },
              {
                q: "How many videos can I generate per month?",
                a: (
                  <div className="rvac-faq-body">
                    <p>
                      There is no hard limit on video generation volume — only your credit balance
                      determines how many you can create. With the Creator Lite plan (300 credits/month),
                      you can generate approximately 4–6 AI videos per month depending on model and
                      duration choices. Wan 2.5 at 480p for 5 seconds costs 46 credits (about 6
                      videos/month on Lite). Kling 2.6 Pro for 10 seconds costs up to 130 credits
                      (about 2 full-length videos on Lite).
                    </p>
                    <p>
                      For high-volume agents managing many listings simultaneously, higher-tier plans
                      with more credits or top-up credit packs are available. Visit
                      scenith.in/pricing for current plan details.
                    </p>
                  </div>
                ),
              },
              {
                q: "Can I share a generated video directly to Instagram from Scenith?",
                a: (
                  <div className="rvac-faq-body">
                    <p>
                      Currently, Scenith provides the video as a direct MP4 download. Direct social
                      media publishing is not available in-app — you download the MP4 and post it
                      to your chosen platform natively. For Instagram Reels and TikTok, you can
                      download the MP4 directly to your phone and upload within the app. For
                      scheduled posting, tools like Buffer, Later, or Meta Business Suite work
                      seamlessly with downloaded MP4 files.
                    </p>
                  </div>
                ),
              },
            ].map(({ q, a }, i) => (
              <details key={i}>
                <summary>{q}</summary>
                {a}
              </details>
            ))}
          </div>
        </section>

        {/* ──────────────────────────────────────────── FINAL CTA BLOCK ── */}
        <div className="rvac-cta-block">
          <p className="rvac-cta-block-label">🏠 Free · No Credit Card · Instant</p>
          <h2 className="rvac-cta-block-h2">
            Turn Your Next Listing Into a <em>Cinematic Story</em>
          </h2>
          <p className="rvac-cta-block-sub">
            Generate a professional AI real estate video ad in 60 seconds.
            Powered by Kling, Veo, and Wan 2.5 — the same models used by
            leading content studios worldwide.
          </p>
          <a href={TOOL_URL} className="rvac-cta-btn-lg">
            🎬 Create My Realtor Video — Free
            <span className="rvac-cta-arrow">→</span>
          </a>
          <p className="rvac-cta-note">
            50 free credits · MP4 download · Full commercial rights · No watermark
          </p>
        </div>

        {/* ───────────────────────────────────────── RELATED TOOLS ── */}
        <section className="rvac-section--wide" style={{ padding: "48px 20px" }}>
          <div style={{ maxWidth: "var(--rvac-max-w)", margin: "0 auto" }}>
            <p className="rvac-section-label">More Free AI Tools for Realtors</p>
            <h2 className="rvac-section-h2">Complete Your Real Estate Marketing Stack</h2>
            <div className="rvac-features" style={{ marginTop: 24 }}>
              <Link href="/tools/add-subtitles-to-videos" className="rvac-feature-card" style={{ textDecoration: "none", display: "block" }}>
                <span className="rvac-feature-icon">💬</span>
                <h3 className="rvac-feature-h">AI Subtitle Generator</h3>
                <p className="rvac-feature-p">
                  Add listing address, price, CTA, and feature callouts to your AI real estate
                  videos. Essential for silent-autoplay reach on Instagram and LinkedIn.
                </p>
              </Link>
              <a href={`https://scenith.in/create-ai-content?tab=image&utm_source=realtor-video-ad-creator&utm_medium=related-tool&utm_campaign=realtor-seo-2026`} className="rvac-feature-card" style={{ textDecoration: "none", display: "block" }}>
                <span className="rvac-feature-icon">🖼️</span>
                <h3 className="rvac-feature-h">AI Image Generator for Listings</h3>
                <p className="rvac-feature-p">
                  Create architectural visualization, interior staging mockups, and marketing
                  artwork for listings that haven't been photographed yet. 7 AI models including
                  GPT Image 1 and Imagen 4 by Google.
                </p>
              </a>
              <a href={`https://scenith.in/create-ai-content?tab=voice&utm_source=realtor-video-ad-creator&utm_medium=related-tool&utm_campaign=realtor-seo-2026`} className="rvac-feature-card" style={{ textDecoration: "none", display: "block" }}>
                <span className="rvac-feature-icon">🎙️</span>
                <h3 className="rvac-feature-h">AI Voiceover Generator</h3>
                <p className="rvac-feature-p">
                  Generate professional listing narrations, agent introduction voiceovers, and
                  market update audio in seconds. 40+ voices, 20+ languages. Add the audio track
                  directly to your AI-generated property videos.
                </p>
              </a>
            </div>
          </div>
        </section>

        {/* ── SEO Byline ── */}
        <section className="rvac-section" style={{ paddingTop: 0 }}>
          <div className="rvac-byline">
            <span className="rvac-byline-icon">✍️</span>
            <p className="rvac-byline-text">
              <strong>This guide was created by the Scenith content team.</strong> Scenith is an
              AI content creation platform offering voice, image, and video generation tools for
              marketers, creators, and real estate professionals. All tools are available at{" "}
              <a href="https://scenith.in" style={{ color: "var(--rvac-gold)", textDecoration: "none" }}>
                scenith.in
              </a>.
              This page was last updated for accuracy in April 2026.
            </p>
          </div>
        </section>

      </div>
    </>
  );
}