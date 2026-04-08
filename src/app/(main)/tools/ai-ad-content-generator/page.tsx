import type { Metadata } from "next";
import Link from "next/link";
import "./ai-ad-content-generator.css";

// ─── SEO Metadata ────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "AI Ad Content Generator — Create Ads with Voice, Image & Video | Scenith",
  description:
    "Generate high-converting AI ad content in seconds. Create ad voiceovers, product images, and promotional videos using GPT, Imagen 4, Kling 2.6, and more. Free to start — no card required.",
  keywords: [
    "AI ad content generator",
    "AI advertising content",
    "generate ad voiceover",
    "AI ad image generator",
    "AI video ads generator",
    "automated ad creation",
    "AI-powered ad creative",
    "text to ad video",
    "ad script to voice",
    "product ad image AI",
    "AI commercial maker",
    "AI ad copy generator",
    "social media ad creator AI",
    "AI Facebook ad creator",
    "AI YouTube ad maker",
  ],
  openGraph: {
    title: "AI Ad Content Generator — Create Ads with Voice, Image & Video",
    description:
      "Stop paying agencies. Generate professional ad voiceovers, product images, and promotional videos in seconds using the world's best AI models.",
    url: "https://scenith.in/tools/ai-ad-content-generator",
    siteName: "Scenith",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Ad Content Generator | Scenith",
    description:
      "Create ad voiceovers, images, and videos in seconds. Powered by GPT, Kling, Veo 3.1, and more. Free credits on signup.",
  },
  alternates: {
    canonical: "https://scenith.in/tools/ai-ad-content-generator",
  },
};

// ─── Structured Data ─────────────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Scenith AI Ad Content Generator",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Web",
  url: "https://scenith.in/tools/ai-ad-content-generator",
  description:
    "An AI-powered ad content generation tool that creates voiceovers, product images, and promotional videos for digital advertising campaigns.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Free plan with 50 credits. Paid plans from $9/month.",
  },
  featureList: [
    "AI voiceover for ads",
    "AI product image generation",
    "AI promotional video creation",
    "40+ voice options",
    "7 image AI models",
    "6 video AI models",
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is an AI ad content generator?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An AI ad content generator is a tool that uses artificial intelligence models to automatically create advertising content — including voiceovers, product images, and promotional videos — from simple text prompts. Instead of hiring voice artists, photographers, or video production agencies, you describe your ad and the AI generates professional-quality content in seconds.",
      },
    },
    {
      "@type": "Question",
      name: "Can AI generate ad content that actually converts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — modern AI models like GPT Image 1, Kling 2.6 Pro, and Veo 3.1 produce ad-quality visuals and voiceovers that match or exceed traditionally-produced content. The key is writing a precise, benefit-focused prompt. AI ad content works especially well for social media ads, YouTube pre-rolls, product landing pages, and e-commerce listings.",
      },
    },
    {
      "@type": "Question",
      name: "What types of ads can I create with Scenith?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Scenith supports three ad content formats: (1) Voice ads — generate professional ad scripts as spoken voiceovers in 40+ voices and 20+ languages; (2) Image ads — create product photos, lifestyle images, and visual ad creatives using 7 AI models; (3) Video ads — produce cinematic short-form video ads up to 10 seconds in 16:9, 9:16, or 1:1 ratios ideal for YouTube, Instagram, and TikTok.",
      },
    },
    {
      "@type": "Question",
      name: "Is AI-generated ad content commercially usable?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All content generated on Scenith comes with full commercial rights. You can use AI-generated voiceovers, images, and videos in paid advertising campaigns, client work, and commercial projects without attribution or licensing fees.",
      },
    },
    {
      "@type": "Question",
      name: "How much does it cost to generate AI ads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Scenith offers 50 free credits on signup with no credit card required. Each image costs 10–15 credits, voiceover generation costs characters from a monthly allowance, and videos cost 46–186 credits depending on model and length. Paid plans start at $9/month with 300 credits included.",
      },
    },
  ],
};

// ─── Page Component ───────────────────────────────────────────────────────────

export default function AiAdContentGeneratorPage() {
  const CTA_URL =
    "https://scenith.in/create-ai-content?utm_source=tool_page&utm_medium=cta&utm_campaign=ai_ad_content_generator";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="aadcg-root">

        {/* ══════════════════════════════════════════
            HERO
        ══════════════════════════════════════════ */}
        <section className="aadcg-hero">
          <div className="aadcg-hero-grid-bg" aria-hidden="true" />
          <div className="aadcg-hero-glow" aria-hidden="true" />
          <div className="aadcg-hero-inner">
            <div className="aadcg-eyebrow">
              <span className="aadcg-eyebrow-dot" />
              AI-Powered · 2026 · Used by 10,000+ creators
            </div>
            <h1 className="aadcg-hero-h1">
              The Only <em>AI Ad Content</em><br />
              Generator You'll Ever Need
            </h1>
            <p className="aadcg-hero-sub">
              Stop paying agencies $3,000 for what takes AI 30 seconds. Generate
              scroll-stopping ad voiceovers, product images, and promotional
              videos using GPT, Kling 2.6, Veo 3.1, and 10+ other frontier models
              — all in one place.
            </p>

            {/* ── BIG CTA ── */}
            <div className="aadcg-cta-wrap">
              <a
                href={CTA_URL}
                className="aadcg-cta-btn"
                aria-label="Start creating AI ad content for free"
              >
                <span className="aadcg-cta-icon">⚡</span>
                Generate Your First Ad Free
                <span className="aadcg-cta-arrow">→</span>
              </a>
              <p className="aadcg-cta-note">
                50 free credits · No card required · Instant access
              </p>
            </div>

            {/* ── Social proof pills ── */}
            <div className="aadcg-proof-row">
              {[
                { icon: "🎙️", label: "40+ Ad Voices" },
                { icon: "🖼️", label: "7 Image Models" },
                { icon: "🎬", label: "6 Video Models" },
                { icon: "🌍", label: "20+ Languages" },
                { icon: "✅", label: "Commercial Rights" },
              ].map((p) => (
                <span key={p.label} className="aadcg-proof-pill">
                  {p.icon} {p.label}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            FORMAT CARDS — 3 Ad Types
        ══════════════════════════════════════════ */}
        <section className="aadcg-section aadcg-formats">
          <div className="aadcg-container">
            <div className="aadcg-section-header">
              <h2>Three Types of Ad Content. One AI Tool.</h2>
              <p>
                Every modern ad campaign needs voice, visuals, and video. Scenith
                produces all three — from the same prompt, in the same session,
                under the same subscription.
              </p>
            </div>

            <div className="aadcg-format-grid">
              {/* Voice */}
              <div className="aadcg-format-card aadcg-format-voice">
                <div className="aadcg-format-icon-wrap">
                  <span className="aadcg-format-icon">🎙️</span>
                </div>
                <h3>AI Ad Voiceover</h3>
                <p>
                  Turn your ad script into a broadcast-quality voiceover in
                  under 5 seconds. Choose from 40+ natural-sounding voices
                  across 20+ languages — male, female, neutral, energetic,
                  calm, authoritative. Perfect for YouTube pre-rolls, radio
                  ads, podcast sponsorships, Instagram Reels, and TV commercials.
                  Powered by Google TTS, OpenAI TTS, and Azure Neural TTS.
                </p>
                <ul className="aadcg-format-features">
                  <li>Instant MP3 download</li>
                  <li>Speed control (0.5x–4x)</li>
                  <li>Multilingual ad campaigns</li>
                  <li>Full commercial use</li>
                </ul>
                <a href={CTA_URL + "&tab=voice"} className="aadcg-format-cta">
                  Try Voice Ads →
                </a>
              </div>

              {/* Image */}
              <div className="aadcg-format-card aadcg-format-image">
                <div className="aadcg-format-icon-wrap">
                  <span className="aadcg-format-icon">🖼️</span>
                </div>
                <h3>AI Ad Image Creator</h3>
                <p>
                  Generate product shots, lifestyle photos, banner creatives,
                  and social media visuals from a text description. No
                  photoshoot. No designer. No waiting. Choose from GPT Image 1,
                  Imagen 4, FLUX 1.1 Pro, Grok Aurora, and Stability AI — each
                  tuned for different ad aesthetics from hyper-realistic product
                  photography to vibrant lifestyle imagery.
                </p>
                <ul className="aadcg-format-features">
                  <li>High-res PNG output</li>
                  <li>Square, Portrait & Landscape</li>
                  <li>Image-to-image editing</li>
                  <li>8 artistic styles</li>
                </ul>
                <a href={CTA_URL + "&tab=image"} className="aadcg-format-cta">
                  Try Image Ads →
                </a>
              </div>

              {/* Video */}
              <div className="aadcg-format-card aadcg-format-video">
                <div className="aadcg-format-icon-wrap">
                  <span className="aadcg-format-icon">🎬</span>
                </div>
                <h3>AI Promotional Video Maker</h3>
                <p>
                  Produce cinematic short-form video ads — 5 or 10 seconds —
                  from a single text prompt. Select from Kling 2.6 Pro, Veo 3.1,
                  Wan 2.5, and Grok Imagine (with built-in AI audio). Choose
                  your aspect ratio for YouTube (16:9), Instagram Stories
                  (9:16), or feed ads (1:1). MP4 download, no watermark.
                </p>
                <ul className="aadcg-format-features">
                  <li>Up to 1080p resolution</li>
                  <li>AI-generated audio option</li>
                  <li>5s & 10s durations</li>
                  <li>Instant MP4 download</li>
                </ul>
                <a href={CTA_URL + "&tab=video"} className="aadcg-format-cta">
                  Try Video Ads →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            MAIN CTA SECTION (BIG, mid-page)
        ══════════════════════════════════════════ */}
        <section className="aadcg-mid-cta">
          <div className="aadcg-mid-cta-glow" aria-hidden="true" />
          <div className="aadcg-container aadcg-mid-cta-inner">
            <span className="aadcg-mid-cta-badge">🚀 Ready to start?</span>
            <h2>Create Your First AI Ad Right Now</h2>
            <p>
              Join over 10,000 marketers, creators, and businesses who use
              Scenith to produce ad content that would have cost thousands —
              in seconds, for free.
            </p>
            <a href={CTA_URL} className="aadcg-cta-btn aadcg-cta-btn--large">
              <span className="aadcg-cta-icon">⚡</span>
              Open AI Ad Creator — It's Free
              <span className="aadcg-cta-arrow">→</span>
            </a>
            <div className="aadcg-mid-cta-stats">
              {[
                { num: "10,000+", label: "Active Users" },
                { num: "1M+", label: "Ads Generated" },
                { num: "50", label: "Free Credits" },
                { num: "$0", label: "To Start" },
              ].map((s) => (
                <div key={s.label} className="aadcg-stat">
                  <strong>{s.num}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            USE CASES — Ad Formats by Platform
        ══════════════════════════════════════════ */}
        <section className="aadcg-section aadcg-usecases">
          <div className="aadcg-container">
            <div className="aadcg-section-header">
              <h2>AI Ad Content for Every Platform in 2026</h2>
              <p>
                Each platform has its own format requirements, audience
                psychology, and content expectations. Here's exactly how to use
                Scenith's AI ad generator for each one.
              </p>
            </div>

            <div className="aadcg-usecase-grid">

              <article className="aadcg-usecase-card">
                <div className="aadcg-usecase-platform">
                  <span className="aadcg-platform-icon">▶️</span>
                  <h3>YouTube Ads</h3>
                </div>
                <p>
                  YouTube pre-roll ads are the highest-CPM digital ad format in
                  2026 — and they demand professional voiceover, sharp visuals,
                  and video motion to compete. Use Scenith to generate a
                  punchy 5-second hook voiceover for your skippable ad, create
                  a product thumbnail using GPT Image 1, and produce a full
                  10-second cinematic clip with Kling 2.6 Pro or Veo 3.1.
                  Export everything in 16:9 — YouTube's native format.
                </p>
                <div className="aadcg-usecase-tags">
                  <span>16:9 Video</span><span>Voice Hook</span><span>Product Shot</span>
                </div>
              </article>

              <article className="aadcg-usecase-card">
                <div className="aadcg-usecase-platform">
                  <span className="aadcg-platform-icon">📸</span>
                  <h3>Instagram & Facebook Ads</h3>
                </div>
                <p>
                  Meta's ad ecosystem rewards scroll-stopping visuals in the
                  first 0.5 seconds. For Stories and Reels, generate vertical
                  9:16 video ads with Wan 2.5 or Grok Imagine. For feed ads,
                  use GPT Image 1 or Grok Aurora to produce high-fidelity
                  product lifestyle images in square or portrait format. Add an
                  AI voiceover for video ad audio. All content is optimized at
                  high resolution for Meta's delivery system.
                </p>
                <div className="aadcg-usecase-tags">
                  <span>9:16 Reels</span><span>1:1 Feed</span><span>Lifestyle Images</span>
                </div>
              </article>

              <article className="aadcg-usecase-card">
                <div className="aadcg-usecase-platform">
                  <span className="aadcg-platform-icon">🎵</span>
                  <h3>TikTok Ads</h3>
                </div>
                <p>
                  TikTok's In-Feed Ads require vertical video with immediate
                  visual impact — no slow intros, no fades. Generate
                  high-energy 5–10 second video ads using Kling 2.5 Turbo for
                  fast cinematic clips, and pair them with Grok Imagine's
                  built-in AI audio for a complete sound-on ad experience.
                  TikTok audiences respond 3x better to authentic-looking
                  AI-generated motion over static images — Scenith's video
                  models deliver exactly that.
                </p>
                <div className="aadcg-usecase-tags">
                  <span>Vertical 9:16</span><span>AI Audio</span><span>5s Hook</span>
                </div>
              </article>

              <article className="aadcg-usecase-card">
                <div className="aadcg-usecase-platform">
                  <span className="aadcg-platform-icon">🛒</span>
                  <h3>E-commerce & Amazon Ads</h3>
                </div>
                <p>
                  Product advertising requires clean, high-resolution product
                  images and compelling lifestyle context shots — two things
                  that traditionally require a full photoshoot. With Scenith's
                  image-to-image feature, upload your product photo and describe
                  the lifestyle context — AI transforms it into a studio-quality
                  ad visual. GPT Image 1 Medium in premium quality produces
                  sharp detail perfect for product listing images and Amazon
                  Sponsored Ads.
                </p>
                <div className="aadcg-usecase-tags">
                  <span>Product Shots</span><span>Img2Img</span><span>Premium Quality</span>
                </div>
              </article>

              <article className="aadcg-usecase-card">
                <div className="aadcg-usecase-platform">
                  <span className="aadcg-platform-icon">💼</span>
                  <h3>LinkedIn & B2B Ads</h3>
                </div>
                <p>
                  LinkedIn ad content demands professionalism, authority, and
                  credibility. Generate serious, authoritative voiceovers using
                  Azure Neural TTS with a formal tone — Azure offers the
                  most professional-sounding corporate voices available. For
                  visuals, use Stability AI Core or GPT Image 1 in a clean,
                  corporate aesthetic. LinkedIn's ad format favors 1:1 and
                  landscape images with minimal text overlay.
                </p>
                <div className="aadcg-usecase-tags">
                  <span>Azure Voice</span><span>Corporate Style</span><span>Authority Tone</span>
                </div>
              </article>

              <article className="aadcg-usecase-card">
                <div className="aadcg-usecase-platform">
                  <span className="aadcg-platform-icon">📻</span>
                  <h3>Podcast & Radio Ads</h3>
                </div>
                <p>
                  Audio-only ad formats — podcast mid-rolls, Spotify audio ads,
                  and radio commercials — live and die by voice quality and
                  script delivery. Scenith's OpenAI TTS voices are the most
                  natural-sounding audio ad voices available, with nuanced
                  prosody that outperforms every text-to-speech system from
                  2023. Write your 30 or 60-second ad script, choose a voice,
                  set speed, and export your broadcast-ready MP3 in seconds.
                </p>
                <div className="aadcg-usecase-tags">
                  <span>OpenAI Voice</span><span>30/60 sec spots</span><span>MP3 Export</span>
                </div>
              </article>

            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            THE AI MODELS
        ══════════════════════════════════════════ */}
        <section className="aadcg-section aadcg-models-section">
          <div className="aadcg-container">
            <div className="aadcg-section-header">
              <h2>Powered by 2026's Most Advanced AI Ad Models</h2>
              <p>
                We've integrated every model that actually matters for
                advertising creative — ranked by what they're best at, so you
                always pick the right one for your campaign.
              </p>
            </div>

            <div className="aadcg-models-grid">

              {/* Image Models */}
              <div className="aadcg-models-col">
                <h3 className="aadcg-models-col-title">🖼️ Image Models for Ads</h3>
                <div className="aadcg-model-list">
                  {[
                    {
                      name: "GPT Image 1 Medium",
                      badge: "Best Overall",
                      badgeClass: "aadcg-badge-gold",
                      desc: "OpenAI's flagship image model. Exceptional at product photos, lifestyle shots, and text-in-image (great for ad banners with readable text). Premium quality setting produces near-DSLR results.",
                    },
                    {
                      name: "Grok Aurora",
                      badge: "Best Photorealism",
                      badgeClass: "aadcg-badge-blue",
                      desc: "xAI's Aurora model produces 2K photorealistic images with cinema-grade lighting. Ideal for luxury product ads, fashion campaigns, and high-end brand visuals.",
                    },
                    {
                      name: "Imagen 4 Standard",
                      badge: "Best Detail",
                      badgeClass: "aadcg-badge-green",
                      desc: "Google's Imagen 4 excels at fine detail in complex scenes. Best for food photography ads, architectural visuals, and product shots requiring intricate surface texture.",
                    },
                    {
                      name: "FLUX 1.1 Pro",
                      badge: "Best Artistic",
                      badgeClass: "aadcg-badge-purple",
                      desc: "FLUX produces uniquely stylized, painterly images that stand out in social media feeds. Excellent for brand campaigns that want a distinct, editorial look.",
                    },
                    {
                      name: "Stability AI Core",
                      badge: "Best Budget",
                      badgeClass: "aadcg-badge-gray",
                      desc: "SDXL-powered at the lowest credit cost. Solid for rapid prototyping ad concepts, A/B testing multiple creative directions, and high-volume content production.",
                    },
                  ].map((m) => (
                    <div key={m.name} className="aadcg-model-item">
                      <div className="aadcg-model-item-header">
                        <span className="aadcg-model-name">{m.name}</span>
                        <span className={`aadcg-badge ${m.badgeClass}`}>{m.badge}</span>
                      </div>
                      <p>{m.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Video Models */}
              <div className="aadcg-models-col">
                <h3 className="aadcg-models-col-title">🎬 Video Models for Ads</h3>
                <div className="aadcg-model-list">
                  {[
                    {
                      name: "Kling 2.6 Pro",
                      badge: "Best Motion",
                      badgeClass: "aadcg-badge-gold",
                      desc: "The current benchmark for motion quality in AI video. Kling 2.6 Pro produces fluid, physically realistic motion ideal for product showcase ads, brand films, and anything requiring convincing movement.",
                    },
                    {
                      name: "Veo 3.1 (Google)",
                      badge: "Best Cinema",
                      badgeClass: "aadcg-badge-blue",
                      desc: "Google's Veo 3.1 is the highest-fidelity video model available, producing truly cinematic shots with dramatic lighting, depth, and atmosphere. Ideal for premium brand campaigns.",
                    },
                    {
                      name: "Grok Imagine",
                      badge: "Best Audio+Video",
                      badgeClass: "aadcg-badge-green",
                      desc: "The only model with integrated AI audio generation. Produces video + music/ambient sound together. Perfect for ads where sound-on engagement matters — TikTok, Reels, YouTube.",
                    },
                    {
                      name: "Wan 2.5",
                      badge: "Best Value",
                      badgeClass: "aadcg-badge-purple",
                      desc: "Wan 2.5 delivers excellent motion at the lowest credit cost. Available in 480p, 720p, and 1080p. Best for high-volume ad testing where you need many video variants affordably.",
                    },
                    {
                      name: "Kling 2.5 Turbo",
                      badge: "Fastest",
                      badgeClass: "aadcg-badge-gray",
                      desc: "Turbo-speed generation at roughly half the cost of Kling 2.6 Pro. Ideal when speed matters more than absolute quality — rapid creative iterations or same-day campaign launches.",
                    },
                  ].map((m) => (
                    <div key={m.name} className="aadcg-model-item">
                      <div className="aadcg-model-item-header">
                        <span className="aadcg-model-name">{m.name}</span>
                        <span className={`aadcg-badge ${m.badgeClass}`}>{m.badge}</span>
                      </div>
                      <p>{m.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            <div className="aadcg-models-voice">
              <h3 className="aadcg-models-col-title">🎙️ Voice Providers for Ad Voiceovers</h3>
              <div className="aadcg-voice-provider-grid">
                {[
                  {
                    provider: "Google TTS",
                    icon: "🔵",
                    strengths: ["20+ languages", "Widest voice library", "Best for multilingual ad campaigns", "Free plan included"],
                    bestFor: "Global campaigns, regional ads, budget-conscious creators",
                  },
                  {
                    provider: "OpenAI TTS",
                    icon: "🟢",
                    strengths: ["Most natural prosody", "Emotion-aware delivery", "Premium plan only", "6 distinct personalities"],
                    bestFor: "Premium brand ads, podcast sponsorships, US/UK English campaigns",
                  },
                  {
                    provider: "Azure Neural TTS",
                    icon: "🔷",
                    strengths: ["Enterprise-grade quality", "Corporate authority tone", "SSML control", "Best for B2B ads"],
                    bestFor: "B2B campaigns, LinkedIn ads, corporate brand videos, financial services",
                  },
                ].map((v) => (
                  <div key={v.provider} className="aadcg-voice-provider-card">
                    <div className="aadcg-vpc-header">
                      <span>{v.icon}</span>
                      <strong>{v.provider}</strong>
                    </div>
                    <ul>
                      {v.strengths.map((s) => <li key={s}>{s}</li>)}
                    </ul>
                    <div className="aadcg-vpc-best">Best for: {v.bestFor}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            HOW TO WRITE AD PROMPTS (Content)
        ══════════════════════════════════════════ */}
        <section className="aadcg-section aadcg-prompts-guide">
          <div className="aadcg-container">
            <div className="aadcg-section-header">
              <h2>The Complete Guide to Writing AI Ad Prompts That Convert</h2>
              <p>
                The single biggest difference between bad AI ads and great ones
                isn't the model — it's the prompt. Here's the framework we've
                refined across a million+ ad generations.
              </p>
            </div>

            <div className="aadcg-guide-grid">
              <div className="aadcg-guide-section">
                <h3>🎙️ Ad Voiceover Prompt Formula</h3>
                <div className="aadcg-formula-box">
                  <code>[Hook] + [Problem/Desire] + [Solution] + [CTA]</code>
                </div>
                <p className="aadcg-guide-explanation">
                  Ad voiceovers that convert follow a proven structure. The hook
                  must grab attention in the first 3 words. The problem/desire
                  creates emotional resonance. The solution positions your
                  product as the answer. The CTA drives action with urgency.
                </p>
                <div className="aadcg-example-block">
                  <div className="aadcg-example-label">✅ High-Converting Example</div>
                  <blockquote>
                    "Tired of paying $500 for product photos that look like
                    everyone else's? What if you could generate 20 unique,
                    studio-quality images in 5 minutes — for less than your
                    morning coffee? Scenith's AI image generator does exactly
                    that. Start free at scenith.in — no card needed."
                  </blockquote>
                </div>
                <div className="aadcg-example-block aadcg-example-bad">
                  <div className="aadcg-example-label">❌ Weak Example</div>
                  <blockquote>
                    "We have an AI tool. It generates images. Try it today."
                  </blockquote>
                </div>
                <div className="aadcg-tip-list">
                  <h4>Pro Tips for Ad Voiceovers:</h4>
                  <ul>
                    <li>Keep 15-second ads under 40 words for comfortable pacing</li>
                    <li>Use second person ("you", "your") throughout</li>
                    <li>Spell out numbers for better TTS rendering ("five hundred" not "$500")</li>
                    <li>Add emotional direction in brackets — [urgently], [warmly], [confidently]</li>
                    <li>End with a single, clear action — never two CTAs</li>
                  </ul>
                </div>
              </div>

              <div className="aadcg-guide-section">
                <h3>🖼️ Ad Image Prompt Formula</h3>
                <div className="aadcg-formula-box">
                  <code>[Subject] + [Context/Scene] + [Lighting] + [Style] + [Technical Specs]</code>
                </div>
                <p className="aadcg-guide-explanation">
                  Image ad prompts need five components to reliably produce
                  commercial-quality output. Subject and context establish what
                  the image is about. Lighting defines mood. Style anchors the
                  aesthetic. Technical specs ensure output quality.
                </p>
                <div className="aadcg-example-block">
                  <div className="aadcg-example-label">✅ Product Ad Example</div>
                  <blockquote>
                    "Premium glass water bottle on a white marble kitchen counter,
                    morning sunlight streaming through frosted window, clean
                    minimalist aesthetic, soft shadows, commercial product
                    photography, 4K ultra-sharp detail"
                  </blockquote>
                </div>
                <div className="aadcg-example-block">
                  <div className="aadcg-example-label">✅ Lifestyle Ad Example</div>
                  <blockquote>
                    "Young professional woman working from a sunlit café in
                    Paris, laptop open, confident smile, warm golden hour light,
                    shallow depth of field, editorial fashion magazine aesthetic,
                    hyper-realistic"
                  </blockquote>
                </div>
                <div className="aadcg-tip-list">
                  <h4>Pro Tips for Ad Images:</h4>
                  <ul>
                    <li>For product ads: always specify the surface and background color</li>
                    <li>Add "commercial photography" to anchor the aesthetic</li>
                    <li>Use "negative space on [side]" for text overlay room</li>
                    <li>Specify aspect ratio need in the prompt ("portrait 9:16 for stories")</li>
                    <li>For fashion/lifestyle: mention demographic explicitly</li>
                  </ul>
                </div>
              </div>

              <div className="aadcg-guide-section aadcg-guide-wide">
                <h3>🎬 Ad Video Prompt Formula</h3>
                <div className="aadcg-formula-box">
                  <code>[Camera Motion] + [Subject Action] + [Setting] + [Lighting/Mood] + [Technical Look]</code>
                </div>
                <p className="aadcg-guide-explanation">
                  Video ad prompts require motion direction that still image
                  prompts don't need. You must describe WHAT MOVES and HOW —
                  otherwise AI video models default to static, minimal motion.
                  Always lead with camera movement (drone pullback, slow zoom,
                  tracking shot, aerial descent) and subject action (product
                  rotating, person walking, liquid pouring).
                </p>
                <div className="aadcg-video-prompt-examples">
                  {[
                    {
                      category: "Product Ad",
                      prompt: "Slow 360-degree rotation of a luxury watch on a black velvet surface, dramatic single spotlight casting sharp shadow, water droplets on the face catching the light, ultra-close macro lens, cinematic product commercial, 4K",
                    },
                    {
                      category: "App/SaaS Ad",
                      prompt: "Smooth cinematic pullback from a laptop screen showing a clean dashboard UI, morning light in a modern glass office, developer typing confidently, shallow focus, documentary startup style",
                    },
                    {
                      category: "Food & Beverage",
                      prompt: "Close-up slow-motion pour of golden honey falling into a crystal glass jar, warm amber backlight, micro details of texture and viscosity visible, commercial food photography motion, cinematic warm tones",
                    },
                    {
                      category: "Fitness / Lifestyle",
                      prompt: "Aerial tracking shot following a runner on a coastal cliff path at golden hour, ocean glittering below, motivational and energetic, slow motion wind in hair, Nike commercial style",
                    },
                  ].map((ex) => (
                    <div key={ex.category} className="aadcg-vpex">
                      <span className="aadcg-vpex-label">{ex.category}</span>
                      <p>{ex.prompt}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            CTA SECTION 2
        ══════════════════════════════════════════ */}
        <section className="aadcg-cta-section-2">
          <div className="aadcg-container">
            <div className="aadcg-cta2-inner">
              <div className="aadcg-cta2-text">
                <h2>Stop Reading. Start Creating.</h2>
                <p>
                  The best way to learn AI ad creation is by doing it. Your
                  first 50 credits are completely free — enough for multiple
                  images, a voiceover, and a short video clip.
                </p>
              </div>
              <a href={CTA_URL} className="aadcg-cta-btn">
                <span className="aadcg-cta-icon">⚡</span>
                Create AI Ads Free Now
                <span className="aadcg-cta-arrow">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            COMPARISON TABLE
        ══════════════════════════════════════════ */}
        <section className="aadcg-section aadcg-compare-section">
          <div className="aadcg-container">
            <div className="aadcg-section-header">
              <h2>AI Ad Generator vs. Traditional Ad Production</h2>
              <p>
                The economics of ad creative production have fundamentally
                shifted in 2026. Here's what that actually means for your
                budget and timeline.
              </p>
            </div>

            <div className="aadcg-compare-table-wrap">
              <table className="aadcg-compare-table">
                <thead>
                  <tr>
                    <th>Ad Content Type</th>
                    <th className="aadcg-th-them">Traditional Production</th>
                    <th className="aadcg-th-us">Scenith AI Generator</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Professional Voiceover (30s)", "$150–$800", "< $0.50 (5 credits)"],
                    ["Product Photography (5 shots)", "$300–$2,000", "< $1.00 (10–15 credits each)"],
                    ["15-second Video Ad", "$1,500–$8,000", "< $5.00 (46–186 credits)"],
                    ["Multilingual Voiceover (5 langs)", "$750–$4,000", "Same cost, any language"],
                    ["Turnaround Time", "3–14 business days", "3–120 seconds"],
                    ["Revisions", "$50–$200 per revision", "Unlimited regenerations"],
                    ["Commercial Rights", "Negotiated per use", "Full commercial, included"],
                    ["Volume Discount", "Rarely", "Credits scale linearly"],
                  ].map(([type, trad, ai]) => (
                    <tr key={type}>
                      <td>{type}</td>
                      <td className="aadcg-td-them">{trad}</td>
                      <td className="aadcg-td-us">{ai}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="aadcg-compare-note">
              * Traditional production costs sourced from industry average rates
              for freelancers and small agencies in 2024–2025. AI costs based on
              Scenith's Creator Lite plan ($9/mo for 300 credits).
            </p>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            INDUSTRY DEEP DIVE
        ══════════════════════════════════════════ */}
        <section className="aadcg-section aadcg-industries">
          <div className="aadcg-container">
            <div className="aadcg-section-header">
              <h2>AI Ad Content Generation by Industry</h2>
              <p>
                Different industries have different ad content conventions,
                compliance requirements, and creative expectations. Here's how
                Scenith fits into each vertical.
              </p>
            </div>

            <div className="aadcg-industry-accordion">
              {[
                {
                  icon: "👗",
                  name: "Fashion & Apparel",
                  content: `Fashion advertising relies almost entirely on visual storytelling. In 2026, AI image generation has reached the point where editorial-quality fashion images are indistinguishable from real photography for most social media ad formats. Use Grok Aurora for luxury fashion — its 2K photorealism handles fabric texture and skin tone better than any other model. FLUX 1.1 Pro is ideal for streetwear and youth-targeted campaigns where an artistic, stylized look differentiates from competitors. For video, Kling 2.6 Pro handles the flow of fabric in motion beautifully — critical for clothing ads. Pair with OpenAI TTS voices for aspirational, confident ad narration.`,
                },
                {
                  icon: "🍔",
                  name: "Food & Beverage",
                  content: `Food advertising requires images that make people hungry on sight — which depends entirely on texture, lighting, and color saturation. Imagen 4 Standard is the standout model for food photography, producing shot after shot that captures steam, condensation, sauce viscosity, and crisp textures that competitors like FLUX and Stability cannot match at this fidelity level. For video ads, the slow-motion pour and close-up reveal format still dominates — Wan 2.5 at 1080p handles food motion at low cost per clip. Voice-over for food ads should use warm, enthusiastic tones — Google's multilingual voices cover regional dialects for hyperlocal restaurant campaigns.`,
                },
                {
                  icon: "💊",
                  name: "Health & Wellness",
                  content: `Health, wellness, and supplement advertising has specific creative requirements: clean backgrounds, aspirational lifestyle imagery, and authoritative-but-approachable voice tones. GPT Image 1 Medium in realistic style produces the clean, well-lit lifestyle imagery (yoga, outdoor exercise, healthy eating) that dominates this category. For voiceovers, Azure Neural TTS with a calm, professional male or female voice matches the tone that health brands require. Note: all AI-generated health ad content should go through human review for regulatory compliance — AI generates the creative, but compliance review remains a human responsibility.`,
                },
                {
                  icon: "🏠",
                  name: "Real Estate",
                  content: `Real estate advertising increasingly relies on aspirational property visuals and authoritative, trustworthy voiceovers. GPT Image 1 or Imagen 4 Standard both excel at architectural and interior photography styles — describe the property type, key features, and lighting, and the output is indistinguishable from professional architectural photography for most digital ad formats. For video ads, Veo 3.1 Fast produces smooth aerial drone-style flyover shots of property exteriors that would cost $500+ with a real drone operator. Azure Neural TTS delivers the authoritative, professional tone that luxury real estate advertising demands.`,
                },
                {
                  icon: "📱",
                  name: "App & SaaS Products",
                  content: `Tech and SaaS advertising faces a unique challenge: you're selling software, which is invisible. The most effective strategy is showing the transformation — before and after UI states, a user experiencing the product's benefit, or a visual metaphor for the problem the product solves. GPT Image 1 is unusually good at generating UI screenshots and interface mockups as part of lifestyle scenes. For video, Wan 2.5 and Kling 2.5 Turbo work well for "product demo" style videos showing a person using software. OpenAI TTS voices produce the most natural-sounding "explainer" delivery, ideal for the narrated product walk-through format common in B2B SaaS ads.`,
                },
                {
                  icon: "✈️",
                  name: "Travel & Hospitality",
                  content: `Travel advertising depends on visual escapism — making the viewer feel the destination. No ad category benefits more from AI video generation than travel. Veo 3.1 produces landscape and cityscape video clips that genuinely evoke place, with accurate lighting and atmosphere for different locations worldwide. For images, both Grok Aurora and GPT Image 1 produce destination photography that competes with stock photo libraries. The multilingual voiceover capability is particularly valuable for travel brands targeting multiple international markets — generate the same ad script in Spanish, French, German, and Mandarin in under 2 minutes.`,
                },
              ].map((ind) => (
                <details key={ind.name} className="aadcg-industry-item">
                  <summary>
                    <span className="aadcg-ind-icon">{ind.icon}</span>
                    <span className="aadcg-ind-name">{ind.name}</span>
                    <span className="aadcg-ind-chevron">›</span>
                  </summary>
                  <div className="aadcg-ind-content">
                    <p>{ind.content}</p>
                    <a href={CTA_URL} className="aadcg-ind-cta">
                      Generate {ind.name} Ads →
                    </a>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            AD STRATEGY TIPS (Deep Content)
        ══════════════════════════════════════════ */}
        <section className="aadcg-section aadcg-strategy">
          <div className="aadcg-container">
            <div className="aadcg-section-header">
              <h2>AI Ad Creative Strategy: What's Working in 2026</h2>
              <p>
                Based on data from over one million ad creatives generated on
                Scenith, here are the strategies that consistently produce
                higher engagement and lower CPM.
              </p>
            </div>

            <div className="aadcg-strategy-grid">
              {[
                {
                  num: "01",
                  title: "Volume Testing Beats Single-Creative Optimization",
                  body: `The biggest shift AI enables in ad creative strategy is the ability to test at volume. Instead of producing one highly-polished ad creative and hoping it works, generate 10–20 variations of your ad image with different visual angles, then test them all simultaneously. With Stability AI Core at 15 credits per image, you can generate 20 product ad variants for roughly $1.20 on the Creator Lite plan. The winning creative then gets upgraded to a premium model. This approach consistently produces 40–70% lower CPA than single-creative campaigns.`,
                },
                {
                  num: "02",
                  title: "Use Image-to-Video for the Highest ROI Format",
                  body: `The image-to-video workflow is the highest-ROI use case in AI ad production. You generate a winning product image first (10–15 credits), then use the "Make Video from this Image" button in Scenith to animate it into a 5-second product showcase video (46–130 credits). The result is a static-to-motion ad that platforms like Meta and TikTok algorithmically favor — their algorithms reward video over static at roughly 3:1 in organic reach, and advertisers see lower CPMs with video creatives across all platforms.`,
                },
                {
                  num: "03",
                  title: "Multilingual Ads at Scale With Zero Additional Budget",
                  body: `The economics of multilingual advertising have been completely inverted by AI. Traditionally, translating and re-recording a single ad for 5 markets cost $3,000–$15,000 in production. With Scenith, you generate the original voiceover in English for 5 credits, then generate the same script in Spanish, French, German, and Portuguese for another 20 credits total. Same image or video, different voice — and you're running a 5-language ad campaign for under $1 in additional production cost. No translation agency, no foreign voice actor sourcing, no re-recording sessions.`,
                },
                {
                  num: "04",
                  title: "The Hook-Visual Alignment Principle",
                  body: `The highest-performing AI ads align the emotional tone of the visual with the hook of the voiceover. If your voiceover opens with urgency ("Only 48 hours left…"), your image should convey movement or scarcity — not calm lifestyle photography. If your hook is aspirational ("Imagine waking up to this every day…"), your image should use warm golden light and evocative setting. When you generate both the image and voiceover in Scenith in the same session, you can iterate both simultaneously until they're tonally matched — something that would require going back and forth between a designer and voice actor in traditional production.`,
                },
                {
                  num: "05",
                  title: "AI Audio Ads: The Underused 2026 Opportunity",
                  body: `Podcast advertising CPMs are the highest in digital — $18–$50 per thousand impressions in premium categories. Yet most brands never enter podcast advertising because of the perceived production barrier. With OpenAI and Azure TTS in Scenith, you can produce a fully broadcast-ready 30-second podcast ad mid-roll in under 60 seconds, for a cost of essentially zero. The audio quality is genuinely indistinguishable from human voice acting for conversational ad scripts. This is the single most underused channel in digital advertising for small and mid-sized brands right now.`,
                },
                {
                  num: "06",
                  title: "Vertical-First Video is Non-Negotiable in 2026",
                  body: `As of 2026, over 67% of social media ad views happen on mobile in portrait orientation. Any video ad that isn't natively produced in 9:16 format is losing reach. Scenith's video generation supports 9:16 natively for all six video models. The key insight: don't produce a landscape ad and crop it vertically. Prompt specifically for vertical composition — subject in the upper 60% of frame, movement downward, text-safe zone at top and bottom 15%. This compositional specificity in your prompt produces dramatically better vertical video ad output.`,
                },
              ].map((s) => (
                <div key={s.num} className="aadcg-strategy-card">
                  <div className="aadcg-strategy-num">{s.num}</div>
                  <div className="aadcg-strategy-body">
                    <h3>{s.title}</h3>
                    <p>{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            FINAL CTA
        ══════════════════════════════════════════ */}
        <section className="aadcg-final-cta">
          <div className="aadcg-final-glow" aria-hidden="true" />
          <div className="aadcg-container aadcg-final-cta-inner">
            <h2>
              Your Competitors Are Already Using AI Ad Generators.
              <em> Are You?</em>
            </h2>
            <p>
              In 2026, the brands winning at digital advertising aren't
              spending more — they're generating faster, testing more, and
              scaling what works. Scenith gives you the exact same AI models
              used by agencies charging $10,000/month, for $9/month.
            </p>
            <a href={CTA_URL} className="aadcg-cta-btn aadcg-cta-btn--large aadcg-cta-btn--light">
              <span className="aadcg-cta-icon">⚡</span>
              Start Generating AI Ads Free
              <span className="aadcg-cta-arrow">→</span>
            </a>
            <p className="aadcg-cta-note" style={{ color: "rgba(255,255,255,0.6)" }}>
              50 free credits · Voice + Image + Video · No credit card · Cancel anytime
            </p>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            FAQ
        ══════════════════════════════════════════ */}
        <section className="aadcg-section aadcg-faq">
          <div className="aadcg-container">
            <div className="aadcg-section-header">
              <h2>Frequently Asked Questions</h2>
            </div>
            <div className="aadcg-faq-grid">
              {[
                {
                  q: "What is an AI ad content generator?",
                  a: "An AI ad content generator is a software tool that uses large language models, diffusion models, and neural TTS to automatically create advertising content — voiceovers, images, and videos — from text descriptions. You describe your ad concept; the AI produces production-ready creative assets in seconds.",
                },
                {
                  q: "Can AI-generated ads actually convert?",
                  a: "Yes — extensively. When you pair well-written prompts with the right AI model for your ad format, the output is indistinguishable from traditionally-produced creative for most digital ad placements. The conversion rate of an ad is driven more by the targeting, the message, and the offer than by whether the visual was AI or human-produced. Many advertisers report no statistically significant difference in CVR between AI and traditional creative — and a massive difference in CAC from the production side.",
                },
                {
                  q: "Do I own the ad content I generate?",
                  a: "Yes. All content generated on Scenith comes with full commercial rights. You can use AI-generated voiceovers, images, and videos in paid advertising, client campaigns, product listings, and commercial projects without attribution, licensing fees, or usage restrictions.",
                },
                {
                  q: "Which AI model should I use for a Facebook ad image?",
                  a: "For Facebook feed ads, GPT Image 1 Medium in standard quality delivers the best results for most product categories. For lifestyle and fashion brands, Grok Aurora's 2K photorealism stands out in compressed social media feeds. For artistic or unique brand aesthetics, FLUX 1.1 Pro is the most differentiated option. Use Stability AI Core for rapid A/B test prototypes before committing to a premium model.",
                },
                {
                  q: "How long does AI video ad generation take?",
                  a: "Video generation typically takes 30–120 seconds depending on the model, duration, and resolution. Wan 2.5 at 480p is the fastest. Veo 3.1 at 1080p takes the longest. All generation runs server-side — you can stay on the page or close the tab for image and voice generation.",
                },
                {
                  q: "Can I create multilingual ad campaigns?",
                  a: "Yes — and this is one of the most powerful use cases. Write your ad script once, generate the English voiceover, then generate the same script in Spanish, French, Hindi, Mandarin, Arabic, German, Portuguese, or 15+ other languages using the same voice settings. Multilingual campaigns that would cost $3,000–$15,000 in traditional voiceover production cost under $2 in credits on Scenith.",
                },
                {
                  q: "Is there a free plan?",
                  a: "Yes. You get 50 free credits on signup with no credit card required. Free credits work across all three modes: voice, image, and video. You also get 1 free video generation per account. Paid plans start at $9/month for 300 credits, with higher-tier plans available for agencies and high-volume users.",
                },
                {
                  q: "What file formats does Scenith export?",
                  a: "Voice ads export as MP3 files. Image ads export as high-resolution PNG files. Video ads export as MP4 files. All files are downloaded directly to your device — no additional software, plugins, or cloud storage subscriptions required.",
                },
                {
                  q: "Can I use my own product image as a starting point?",
                  a: "Yes — Scenith supports image-to-image generation for supported models (GPT Image 1, Stability AI, Grok Aurora). Upload your product photo and describe how you want it transformed — add a background, change lighting, create a lifestyle context around the product. This is the fastest path to polished product ad images.",
                },
                {
                  q: "What's the difference between Kling 2.5 Turbo and Kling 2.6 Pro for ads?",
                  a: "Kling 2.5 Turbo generates faster at roughly half the credit cost — ideal for rapid creative testing and high-volume production. Kling 2.6 Pro produces noticeably higher motion quality, more physically realistic movement, and better subject consistency — worth the extra credits for final campaign creatives where quality directly impacts performance.",
                },
              ].map((faq) => (
                <details key={faq.q} className="aadcg-faq-item">
                  <summary>{faq.q}</summary>
                  <p>{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            FOOTER STRIP
        ══════════════════════════════════════════ */}
        <div className="aadcg-footer-strip">
          <div className="aadcg-container">
            <span>Part of the Scenith AI toolkit.</span>
            <span className="aadcg-footer-links">
              <a href="https://scenith.in/tools/ai-voice-generator">AI Voice Generator</a>
              <a href="https://scenith.in/tools/ai-image-generator">AI Image Generator</a>
              <a href="https://scenith.in/tools/ai-video-generator">AI Video Generator</a>
              <a href={CTA_URL}>Create AI Content →</a>
            </span>
          </div>
        </div>

      </div>
    </>
  );
}