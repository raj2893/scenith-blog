"use client";

import React, { useState, useEffect, useRef } from "react";
import "./instagram-clothing-ad.css";

// ─── Types ────────────────────────────────────────────────────────────────────

interface AdPromptExample {
  label: string;
  tag: string;
  voice: string;
  image: string;
  video: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const AD_PROMPT_EXAMPLES: AdPromptExample[] = [
  {
    label: "Summer Drop",
    tag: "🌞",
    voice:
      "This summer, wear something that turns heads before you even say a word. The new collection is here — linen, light, and made for the heat. Shop now.",
    image:
      "Editorial fashion shoot, woman in flowing white linen co-ord set on a sunlit Mediterranean terrace, golden hour light, Vogue magazine style, ultra-sharp 4K",
    video:
      "Slow-motion cinematic reel of a woman in flowing white linen set walking on a sunlit terrace, golden hour, warm editorial palette, 9:16 Instagram format",
  },
  {
    label: "Streetwear Launch",
    tag: "🔥",
    voice:
      "New drops every Thursday. Bold colours, oversized fits, zero compromise. This isn't just streetwear — this is a statement. Grab yours before it sells out.",
    image:
      "High-fashion streetwear editorial, young man in oversized graphic tee and cargo pants in a neon-lit Tokyo alley at night, wet cobblestones reflecting lights, ultra-detailed",
    video:
      "Cinematic streetwear ad, model in oversized urban outfit walking through neon Tokyo alley at night, rain-soaked streets, moody purple lighting, 9:16 vertical",
  },
  {
    label: "Bridal Ethnic Wear",
    tag: "👰",
    voice:
      "Every bride deserves to feel like royalty on her day. Handcrafted lehengas, rich embroidery, and silhouettes that speak without words. Your dream bridal look starts here.",
    image:
      "Luxury bridal fashion editorial, Indian bride in a richly embroidered deep red and gold lehenga, ornate jewellery, dramatic backlit studio lighting, ultra-detailed 4K",
    video:
      "Cinematic bridal fashion reel, Indian bride in an ornate red lehenga in a marble palace courtyard at golden hour, slow-motion fabric drape reveal, breathtaking detail",
  },
  {
    label: "Minimalist Luxury",
    tag: "🖤",
    voice:
      "Fewer pieces. Better quality. Timeless design. Our new edit is for those who believe that true luxury is never loud. Discover the collection.",
    image:
      "Minimalist luxury fashion editorial, model in all-black structured blazer and trousers in a stark white studio, dramatic side lighting, Bottega Veneta aesthetic, 4K",
    video:
      "Ultra-minimalist fashion film, model in structured black ensemble in a white brutalist architecture space, slow camera orbit, dramatic shadows, luxury editorial tone",
  },
  {
    label: "Winter Knits",
    tag: "🧣",
    voice:
      "Stay warm without giving up style. Chunky knits, muted earthy tones, and silhouettes that feel like a hug. Winter dressing, done right.",
    image:
      "Cozy winter fashion editorial, woman in oversized cream chunky knit sweater in a frosted pine forest at dawn, warm breath visible, Scandinavian editorial aesthetic, 4K",
    video:
      "Cinematic winter fashion reel, woman in oversized cream knit coat walking through a misty snowy forest at dawn, slow motion, warm golden tones, 9:16 vertical",
  },
  {
    label: "Festival Fashion",
    tag: "🎉",
    voice:
      "Festival season is here, and your outfit should be as electric as the energy around you. Shimmer, sequins, and colour — the new collection was made for this moment.",
    image:
      "Vibrant festival fashion editorial, woman in iridescent sequin co-ord set at a sunlit outdoor festival, confetti mid-air, editorial energy, ultra-detailed 4K",
    video:
      "Electric festival fashion ad, model in iridescent sequin outfit at golden hour festival, confetti raining, crowd blurred in background, slow motion joy, 9:16 reel",
  },
];

const STATS = [
  { value: "2.4B+", label: "Instagram monthly active users in 2026" },
  { value: "62%", label: "fashion shoppers discover brands via Instagram Reels" },
  { value: "3x", label: "higher engagement rate for video ads vs static posts" },
  { value: "8 sec", label: "average window to stop the scroll on Instagram" },
];

const WORKFLOW_STEPS = [
  {
    num: "01",
    icon: "✍️",
    title: "Describe Your Brand & Product",
    body: "Type a prompt in plain English — describe your clothing item, mood, target audience, and season. Use our pre-filled examples as inspiration or write your own.",
  },
  {
    num: "02",
    icon: "🎙️",
    title: "Generate a Voiceover Script",
    body: "Switch to Voice mode and pick from 40+ natural AI voices across Google, OpenAI, and Azure. Generate a polished voiceover for your ad in under 4 seconds.",
  },
  {
    num: "03",
    icon: "🖼️",
    title: "Create Your Visual",
    body: "Switch to Image mode. Your fashion prompt generates editorial-quality product visuals using GPT Image 1, Grok Aurora, or Imagen 4 — no photoshoot required.",
  },
  {
    num: "04",
    icon: "🎬",
    title: "Animate Into a Reel Ad",
    body: "Hit 'Make Video from this Image' and your static image turns into a cinematic 9:16 video clip — ready to upload as an Instagram Reel or Story ad.",
  },
  {
    num: "05",
    icon: "📲",
    title: "Download & Post on Instagram",
    body: "Download your MP3, PNG, or MP4 instantly. Post to your grid, Reels, Stories, or run as a paid Instagram ad. Full commercial rights included.",
  },
];

const MODEL_HIGHLIGHTS = [
  {
    icon: "🖼️",
    name: "GPT Image 1 Medium",
    badge: "Best for editorial",
    desc: "OpenAI's flagship model produces fashion photography-grade visuals with accurate fabric textures, realistic lighting, and editorial composition — ideal for premium brand imagery.",
    provider: "OpenAI",
    providerColor: "#10a37f",
  },
  {
    icon: "⚡",
    name: "Grok Aurora",
    badge: "Best for aesthetic",
    desc: "xAI's Grok Aurora excels at high-contrast, moody editorial aesthetics. Perfect for streetwear, luxury, and avant-garde clothing brands that want distinct visual identity.",
    provider: "xAI",
    providerColor: "#1a1a2e",
  },
  {
    icon: "🎬",
    name: "Kling 2.6 Pro",
    badge: "Best for Reels",
    desc: "The most cinematic AI video model available in 2026. Produces fluid slow-motion fabric movements, realistic model animations, and ultra-sharp 1080p Instagram Reel content.",
    provider: "Kling AI",
    providerColor: "#6355dc",
  },
  {
    icon: "🌐",
    name: "Imagen 4 Standard",
    badge: "Best for detail",
    desc: "Google's Imagen 4 Standard produces exceptionally detailed garment textures — embroidery patterns, fabric weaves, and stitching detail — unmatched for ethnic wear and luxury fashion.",
    provider: "Google",
    providerColor: "#4285f4",
  },
];

const USE_CASES = [
  {
    emoji: "👗",
    title: "D2C Clothing Brands",
    body: "Launching a new collection drop? Generate a full set of Instagram assets — product image, voiceover, and Reel — in one session. No agency, no photoshoot, no delay. Go from product to Instagram in under 10 minutes.",
  },
  {
    emoji: "🛍️",
    title: "Boutique & Thrift Stores",
    body: "Small boutiques can now produce ad content that looks as polished as a major fashion house. Upload a photo of your garment and let AI create the editorial-quality version instantly.",
  },
  {
    emoji: "📦",
    title: "Dropshipping Fashion Sellers",
    body: "Don't have studio photos? Describe the product you're selling and generate compelling lifestyle imagery, product shots, and video ads — all without owning a single inventory item.",
  },
  {
    emoji: "🎨",
    title: "Fashion Designers & Indie Labels",
    body: "Prototype your collection visually before producing garments. Generate editorial mockups of your designs in different styles, body types, and settings — an AI mood board that actually looks real.",
  },
  {
    emoji: "📣",
    title: "Social Media Managers",
    body: "Managing multiple fashion brand accounts? Batch generate content across Voice, Image, and Video in a single session. One credit balance. Seven AI models. Unlimited creative directions.",
  },
  {
    emoji: "🌍",
    title: "Global Fashion Exporters",
    body: "Create Instagram ads in 20+ languages using AI voiceover, targeting specific markets like UAE, UK, USA, or Southeast Asia — with culturally tuned content and voice styles.",
  },
];

const COMPARISON_POINTS = [
  {
    them: "Hire a photographer for ₹15,000–₹50,000+",
    us: "AI product image in 15 seconds for 15 credits",
  },
  {
    them: "Book a voiceover artist for ₹3,000–₹10,000",
    us: "AI voiceover in 3 seconds for free on signup",
  },
  {
    them: "Pay a video editor ₹10,000–₹30,000 per Reel",
    us: "AI Reel ad in 60–90 seconds for ~100 credits",
  },
  {
    them: "Creative agency monthly retainer: ₹50,000+",
    us: "Full AI content suite from ₹99/month",
  },
  {
    them: "7–14 day production timeline",
    us: "Campaign-ready content in under 10 minutes",
  },
  {
    them: "Limited revision rounds due to cost",
    us: "Unlimited iterations — regenerate with one click",
  },
];

const FAQ = [
  {
    q: "How do I generate an Instagram ad for my clothing brand?",
    a: "Go to the Scenith AI Content Creator, click 'Voice', 'Image', or 'Video', type your brand prompt (you can use our pre-filled fashion examples), and hit Generate. Your ad asset is ready in seconds. No design skills or software required.",
  },
  {
    q: "What AI model is best for fashion product images?",
    a: "For photorealistic editorial fashion: GPT Image 1 Medium (OpenAI). For high-contrast moody aesthetics: Grok Aurora. For extreme garment detail like embroidery and texture: Imagen 4 Standard (Google). All are available on Scenith.",
  },
  {
    q: "Can I create 9:16 vertical video ads for Instagram Reels?",
    a: "Yes. In the Video tab, set the aspect ratio to 9:16 and choose a model like Kling 2.6 Pro or Wan 2.5. Your cinematic video ad is generated at up to 1080p resolution and downloaded as an MP4 — ready for Instagram Reels.",
  },
  {
    q: "Is the AI-generated fashion content royalty-free?",
    a: "Absolutely. All content you generate on Scenith — images, voiceovers, and videos — comes with full commercial rights. You can use it for organic Instagram posts, paid ad campaigns, client deliverables, or brand identity without any attribution requirement.",
  },
  {
    q: "Can I turn my product photo into an AI video ad?",
    a: "Yes. Use the 'Image to Video' mode in the Video tab. Upload your product photo (or use an AI-generated image from the Image tab), add a motion prompt, and AI will animate it into a cinematic video clip. It's the fastest way to get Reel content from a single product photo.",
  },
  {
    q: "How many Instagram ad variations can I generate?",
    a: "As many as your credits allow. With a paid plan starting at just $9/month (300 credits), you can generate approximately 20 images, 10 voiceovers, and 3 video Reels per month. Spark plan starts at just $1 if you want to try it with a small top-up.",
  },
  {
    q: "Does it support multilingual voiceovers for global fashion brands?",
    a: "Yes. The Google TTS provider supports 20+ languages including English (US, UK, Indian, Australian accents), Hindi, Arabic, Spanish, French, Mandarin, and more. OpenAI and Azure TTS add additional language coverage for global campaigns.",
  },
  {
    q: "Can I use this for Instagram Story ads and not just Reels?",
    a: "Yes. Stories are also 9:16 format. Generate your AI image or video in 9:16 aspect ratio and it's natively sized for Instagram Stories, Reels, TikTok, and YouTube Shorts — all in the same generation.",
  },
  {
    q: "Is there a watermark on generated content?",
    a: "No. Scenith does not add any watermarks to generated images, voiceovers, or videos. All downloads are clean and ready to publish. Free plan users' content may appear in Scenith's public gallery — upgrade to a paid plan for fully private generation.",
  },
  {
    q: "What's the difference between Image to Image and Text to Image for fashion ads?",
    a: "Text to Image generates a brand new visual from your description — ideal for creating lifestyle shots, editorial looks, or concept images. Image to Image takes your existing product photo and transforms it — changing style, background, lighting, or making it look editorial-quality. Both are available on Scenith's Image tab.",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function InstagramClothingAdPage() {
  const [activeExample, setActiveExample] = useState(0);
  const [activeTab, setActiveTab] = useState<"voice" | "image" | "video">("image");
  const [statsVisible, setStatsVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  const TARGET_URL =
    "https://scenith.in/create-ai-content?tab=image&utm_source=micro_tool&utm_medium=clothing_brand&utm_campaign=instagram_ad_generator&utm_content=hero_cta";

  const getTabUrl = (tab: "voice" | "image" | "video") =>
    `https://scenith.in/create-ai-content?tab=${tab}&utm_source=micro_tool&utm_medium=clothing_brand&utm_campaign=instagram_ad_generator&utm_content=${tab}_tab_cta`;

  // Intersection observer for stat counter animation
  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="ica-root">
      {/* ── Ambient gradient blobs ── */}
      <div className="ica-bg-blob ica-blob-1" />
      <div className="ica-bg-blob ica-blob-2" />
      <div className="ica-bg-blob ica-blob-3" />

      {/* ══════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════ */}
      <section className="ica-hero" ref={heroRef}>
        <div className="ica-hero-eyebrow">
          <span className="ica-pill">🆓 Free to Start · No Card Required</span>
          <span className="ica-pill ica-pill--hot">🔥 Trending in 2026</span>
        </div>

        <h1 className="ica-hero-h1">
          Instagram Clothing Brand
          <br />
          <span className="ica-gradient-text">Ad Generator</span>
          <br />
          <span className="ica-hero-sub-headline">Powered by AI</span>
        </h1>

        <p className="ica-hero-desc">
          Generate scroll-stopping Instagram ads for your clothing brand in under
          60 seconds. AI voiceovers, editorial product images, and cinematic
          Reel videos — no agency, no photographer, no budget blowout.
        </p>

        <div className="ica-hero-cta-group">
          <a href={TARGET_URL} className="ica-cta-primary" target="_blank" rel="noopener">
            <span className="ica-cta-icon">⚡</span>
            Generate Your First Fashion Ad Free
            <span className="ica-cta-arrow">→</span>
          </a>
          <p className="ica-cta-note">50 free credits on signup · Voice + Image + Video</p>
        </div>

        {/* Floating asset preview cards */}
        <div className="ica-hero-cards">
          <div className="ica-asset-card ica-card--voice">
            <div className="ica-asset-card-icon">🎙️</div>
            <div>
              <div className="ica-asset-card-label">AI Voiceover</div>
              <div className="ica-asset-card-val">~3 sec · MP3</div>
            </div>
            <div className="ica-waveform">
              {Array.from({ length: 16 }).map((_, i) => (
                <div
                  key={i}
                  className="ica-wave-bar"
                  style={{ animationDelay: `${i * 0.07}s`, height: `${12 + Math.sin(i) * 8 + Math.random() * 8}px` }}
                />
              ))}
            </div>
          </div>

          <div className="ica-asset-card ica-card--image">
            <div className="ica-asset-card-icon">🖼️</div>
            <div>
              <div className="ica-asset-card-label">Editorial Image</div>
              <div className="ica-asset-card-val">~15 sec · PNG HD</div>
            </div>
            <div className="ica-image-thumb-grid">
              {["#e8d5b7", "#c9b8a8", "#d4a5a5", "#b8c4d4"].map((c, i) => (
                <div key={i} className="ica-thumb-sq" style={{ background: c }} />
              ))}
            </div>
          </div>

          <div className="ica-asset-card ica-card--video">
            <div className="ica-asset-card-icon">🎬</div>
            <div>
              <div className="ica-asset-card-label">Reel Video Ad</div>
              <div className="ica-asset-card-val">~60 sec · MP4 9:16</div>
            </div>
            <div className="ica-reel-indicator">
              <div className="ica-reel-dot" />
              <span>Generating…</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          STATS BAR
      ══════════════════════════════════════════════ */}
      <section className="ica-stats" ref={statsRef}>
        {STATS.map((s, i) => (
          <div key={i} className={`ica-stat ${statsVisible ? "ica-stat--visible" : ""}`} style={{ animationDelay: `${i * 0.12}s` }}>
            <div className="ica-stat-value">{s.value}</div>
            <div className="ica-stat-label">{s.label}</div>
          </div>
        ))}
      </section>

      {/* ══════════════════════════════════════════════
          PROMPT EXAMPLES EXPLORER
      ══════════════════════════════════════════════ */}
      <section className="ica-examples-section">
        <div className="ica-section-header">
          <h2 className="ica-section-title">Real Fashion Ad Prompts to Try</h2>
          <p className="ica-section-sub">
            Click any style below to preview the exact prompts for voice, image, and video —
            then open the AI generator to create it instantly.
          </p>
        </div>

        <div className="ica-example-tabs">
          {AD_PROMPT_EXAMPLES.map((ex, i) => (
            <button
              key={i}
              className={`ica-ex-tab ${activeExample === i ? "active" : ""}`}
              onClick={() => setActiveExample(i)}
            >
              {ex.tag} {ex.label}
            </button>
          ))}
        </div>

        <div className="ica-example-panel">
          <div className="ica-panel-inner-tabs">
            {(["voice", "image", "video"] as const).map((t) => (
              <button
                key={t}
                className={`ica-panel-tab ${activeTab === t ? "active" : ""}`}
                onClick={() => setActiveTab(t)}
              >
                {t === "voice" && "🎙️ Voice Prompt"}
                {t === "image" && "🖼️ Image Prompt"}
                {t === "video" && "🎬 Video Prompt"}
              </button>
            ))}
          </div>

          <div className="ica-panel-prompt">
            <div className="ica-prompt-label">
              {activeTab === "voice" && "Paste this as your ad script:"}
              {activeTab === "image" && "Paste this as your image description:"}
              {activeTab === "video" && "Paste this as your video prompt:"}
            </div>
            <blockquote className="ica-prompt-text">
              {activeTab === "voice" && AD_PROMPT_EXAMPLES[activeExample].voice}
              {activeTab === "image" && AD_PROMPT_EXAMPLES[activeExample].image}
              {activeTab === "video" && AD_PROMPT_EXAMPLES[activeExample].video}
            </blockquote>
            <a
              href={getTabUrl(activeTab)}
              className="ica-cta-secondary"
              target="_blank"
              rel="noopener"
            >
              Use this prompt in AI Generator →
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          MAIN CTA BLOCK
      ══════════════════════════════════════════════ */}
      <section className="ica-main-cta-block">
        <div className="ica-main-cta-inner">
          <div className="ica-main-cta-left">
            <div className="ica-main-cta-eyebrow">🛍️ For Clothing Brands & Fashion Founders</div>
            <h2 className="ica-main-cta-title">
              Your Entire Instagram Ad Campaign.
              <br />
              <span>Generated in 10 Minutes.</span>
            </h2>
            <p className="ica-main-cta-desc">
              Voice narration for your ad script. Editorial product images with no
              photoshoot. Cinematic Reel videos from a single image. All from one
              page, one credit balance, and 7+ state-of-the-art AI models.
            </p>
            <ul className="ica-feature-list">
              {[
                "40+ natural AI voices · 20+ languages",
                "7 image AI models including GPT Image 1 & Imagen 4",
                "6 video models including Kling 2.6 Pro & Veo 3.1",
                "9:16 Reel format · 1:1 Square · 16:9 Landscape",
                "Image-to-Video: animate your product photos",
                "Full commercial rights · No watermark",
                "50 free credits · No card required",
              ].map((f, i) => (
                <li key={i} className="ica-feature-item">
                  <span className="ica-check">✓</span> {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="ica-main-cta-right">
            <div className="ica-cta-card">
              <div className="ica-cta-card-header">
                <span className="ica-cta-card-badge">FREE TO START</span>
                <span className="ica-cta-card-badge ica-cta-card-badge--pro">👑 PAID PLANS FROM $9/MO</span>
              </div>
              <div className="ica-cta-card-title">Start Generating Fashion Ads</div>
              <div className="ica-cta-card-options">
                {([
                  { tab: "image" as const, icon: "🖼️", label: "Generate Product Image", sublabel: "Editorial · HD PNG · 15 sec" },
                  { tab: "voice" as const, icon: "🎙️", label: "Generate Ad Voiceover", sublabel: "40+ voices · MP3 · 3 sec" },
                  { tab: "video" as const, icon: "🎬", label: "Generate Reel Video Ad", sublabel: "9:16 · 1080p · MP4 · 60 sec" },
                ] as const).map((opt) => (
                  <a
                    key={opt.tab}
                    href={getTabUrl(opt.tab)}
                    className="ica-cta-option"
                    target="_blank"
                    rel="noopener"
                  >
                    <span className="ica-cta-option-icon">{opt.icon}</span>
                    <div>
                      <div className="ica-cta-option-label">{opt.label}</div>
                      <div className="ica-cta-option-sub">{opt.sublabel}</div>
                    </div>
                    <span className="ica-cta-option-arrow">→</span>
                  </a>
                ))}
              </div>
              <a
                href={TARGET_URL}
                className="ica-cta-primary ica-cta-primary--full"
                target="_blank"
                rel="noopener"
              >
                Open Full AI Generator →
              </a>
              <p className="ica-cta-card-note">
                ⚡ 50 free credits · No credit card · Full commercial rights
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          HOW IT WORKS
      ══════════════════════════════════════════════ */}
      <section className="ica-how-section">
        <div className="ica-section-header">
          <h2 className="ica-section-title">
            How to Create an Instagram Ad for Your Clothing Brand in 5 Steps
          </h2>
          <p className="ica-section-sub">
            From prompt to campaign-ready content in under 10 minutes. No design tools.
            No editing software. No creative agency.
          </p>
        </div>
        <div className="ica-steps">
          {WORKFLOW_STEPS.map((step, i) => (
            <div key={i} className="ica-step">
              <div className="ica-step-num">{step.num}</div>
              <div className="ica-step-icon">{step.icon}</div>
              <div className="ica-step-content">
                <h3 className="ica-step-title">{step.title}</h3>
                <p className="ica-step-body">{step.body}</p>
              </div>
              {i < WORKFLOW_STEPS.length - 1 && <div className="ica-step-connector" />}
            </div>
          ))}
        </div>
        <div className="ica-how-cta">
          <a href={TARGET_URL} className="ica-cta-primary" target="_blank" rel="noopener">
            Start Creating Your Fashion Ad Now →
          </a>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          MODEL HIGHLIGHTS
      ══════════════════════════════════════════════ */}
      <section className="ica-models-section">
        <div className="ica-section-header">
          <h2 className="ica-section-title">
            The AI Models Behind Your Fashion Ads
          </h2>
          <p className="ica-section-sub">
            Scenith connects your clothing brand to 7+ image models and 6 video models —
            the same technology used by global agencies, now accessible to any brand founder.
          </p>
        </div>
        <div className="ica-models-grid">
          {MODEL_HIGHLIGHTS.map((m, i) => (
            <div key={i} className="ica-model-card">
              <div className="ica-model-top">
                <span className="ica-model-icon">{m.icon}</span>
                <div>
                  <div className="ica-model-name">{m.name}</div>
                  <div className="ica-model-provider" style={{ color: m.providerColor }}>
                    {m.provider}
                  </div>
                </div>
                <span className="ica-model-badge">{m.badge}</span>
              </div>
              <p className="ica-model-desc">{m.desc}</p>
            </div>
          ))}
        </div>
        <div className="ica-model-more">
          Also available: FLUX 1.1 Pro · Stability AI Core · Wan 2.5 · Grok Imagine · Google TTS · Azure Neural TTS · OpenAI TTS
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          USE CASES
      ══════════════════════════════════════════════ */}
      <section className="ica-usecases-section">
        <div className="ica-section-header">
          <h2 className="ica-section-title">
            Who Is This Instagram Ad Generator Built For?
          </h2>
          <p className="ica-section-sub">
            Whether you're a solo fashion founder or a multi-brand social media manager,
            Scenith's AI creates professional-grade ad content at a fraction of traditional cost.
          </p>
        </div>
        <div className="ica-uc-grid">
          {USE_CASES.map((uc, i) => (
            <div key={i} className="ica-uc-card">
              <div className="ica-uc-emoji">{uc.emoji}</div>
              <h3 className="ica-uc-title">{uc.title}</h3>
              <p className="ica-uc-body">{uc.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          COMPARISON
      ══════════════════════════════════════════════ */}
      <section className="ica-compare-section">
        <div className="ica-section-header">
          <h2 className="ica-section-title">
            AI Ad Generator vs. Traditional Fashion Ad Production
          </h2>
          <p className="ica-section-sub">
            The economics of fashion advertising changed permanently in 2025–2026. Here's why
            thousands of clothing brands are switching to AI-generated ad content.
          </p>
        </div>
        <div className="ica-compare-table">
          <div className="ica-compare-col ica-compare-col--them">
            <div className="ica-compare-header">❌ Traditional Production</div>
            {COMPARISON_POINTS.map((p, i) => (
              <div key={i} className="ica-compare-row">{p.them}</div>
            ))}
          </div>
          <div className="ica-compare-col ica-compare-col--us">
            <div className="ica-compare-header">✅ Scenith AI Generator</div>
            {COMPARISON_POINTS.map((p, i) => (
              <div key={i} className="ica-compare-row">{p.us}</div>
            ))}
          </div>
        </div>
        <div className="ica-compare-cta">
          <a href={TARGET_URL} className="ica-cta-primary" target="_blank" rel="noopener">
            ⚡ Try It Free — First 50 Credits on Us →
          </a>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          IN-DEPTH SEO CONTENT SECTION
      ══════════════════════════════════════════════ */}
      <section className="ica-longform-section">
        <div className="ica-longform-inner">

          <h2>Why Instagram Is Still the #1 Platform for Clothing Brand Ads in 2026</h2>
          <p>
            In 2026, Instagram remains the dominant discovery platform for fashion. With over 2.4 billion
            monthly active users globally, and 62% of fashion shoppers saying they discovered a brand they
            later purchased from through Instagram Reels or Stories, there has never been a more important
            time to have a consistent, high-quality Instagram ad presence for your clothing brand.
          </p>
          <p>
            The challenge? Traditional ad production is expensive, slow, and requires a team. A single
            professionally produced Instagram Reel for a clothing brand — from concept to final edit —
            can cost anywhere from ₹15,000 to ₹1,00,000 when you account for the photographer, model,
            videographer, editor, and creative director. For small clothing brands, D2C founders, and
            boutique owners, this is simply not sustainable at scale.
          </p>
          <p>
            This is the exact gap that AI-generated fashion ad content fills. In 2025 and especially
            through 2026, AI image, voice, and video models have crossed a critical threshold of quality —
            producing results that are indistinguishable from professional production at a fraction of the
            cost and time. Scenith's Instagram Clothing Brand Ad Generator brings these models together
            in one place, purpose-built for fashion founders.
          </p>

          <h2>What Makes a Great Instagram Clothing Brand Ad?</h2>
          <p>
            Before diving into the technology, it helps to understand the anatomy of a high-performing
            Instagram clothing brand ad. The Instagram algorithm favours content that earns attention
            quickly — the first 1–3 seconds are decisive. A great clothing brand ad on Instagram combines
            three core elements:
          </p>

          <h3>1. A Hook That Stops the Scroll</h3>
          <p>
            Instagram users scroll at an average rate of 300 pixels per second. Your ad has approximately
            8 seconds to earn attention before a user moves on. This means your opening frame — whether it's
            a product image, video scene, or text overlay — must immediately communicate brand identity,
            visual quality, and reason to pause. AI-generated editorial imagery from models like GPT Image 1
            Medium or Grok Aurora consistently produces this "scroll-stopping" quality because the models are
            trained on millions of high-engagement fashion images.
          </p>

          <h3>2. A Voice That Sells Without Selling</h3>
          <p>
            The most effective clothing brand voiceovers for Instagram do not feel like traditional
            advertising copy. They speak like a confident friend — aspirational, warm, and specific.
            Scenith's AI voice generation lets you choose from 40+ natural voices across 3 providers
            (Google, OpenAI, Azure), covering 20+ languages. The key is selecting the right gender, accent,
            and pace for your target audience. A luxury womenswear brand targeting UK customers will want a
            refined ENUA (British Female) voice at a slow, confident pace. A streetwear brand targeting
            Gen Z in India might use a high-energy HINDI FEMALE voice at 1.25x speed.
          </p>

          <h3>3. Motion That Creates Desire</h3>
          <p>
            Video ads on Instagram receive 3x higher engagement than static posts. For clothing brands,
            motion is particularly powerful — it shows how a garment moves, drapes, and fits in a way that
            static photography simply cannot. AI video models like Kling 2.6 Pro are now sophisticated
            enough to generate realistic fabric movement, natural model animations, and cinematic lighting
            effects from a single text prompt or reference image. A well-crafted AI video ad for a clothing
            brand on Instagram Reels can drive 40–70% higher click-through rates compared to static image
            ads, according to 2025 social media benchmarks.
          </p>

          <h2>How to Write the Perfect Instagram Ad Prompt for Your Clothing Brand</h2>
          <p>
            The quality of AI-generated fashion ad content is directly proportional to the quality of your
            prompt. A vague prompt produces a generic result. A specific, detailed prompt produces an
            editorial-quality asset. Here's how to write a winning prompt for each content type:
          </p>

          <h3>For AI Fashion Product Images</h3>
          <p>
            A strong image prompt for a clothing brand includes: the garment type and key details
            (fabric, colour, silhouette), the model or flat-lay style, the setting or backdrop, the lighting
            mood, and the aesthetic reference. For example:
          </p>
          <p style={{ fontStyle: "italic", paddingLeft: "1.25rem", borderLeft: "3px solid #6355dc", margin: "1rem 0" }}>
            "High-fashion editorial shoot, South Asian woman in a deep emerald silk kurta set with intricate
            gold thread embroidery, standing in a marble palace archway at golden hour, sunlight streaming
            through carved stone, National Geographic-quality detail, Vogue India aesthetic, 4K ultra-sharp"
          </p>
          <p>
            Notice how this prompt specifies the target model demographic (South Asian woman), the exact
            garment (deep emerald silk kurta with gold embroidery), the setting (marble palace archway),
            the lighting (golden hour), and the aesthetic reference (Vogue India). This level of specificity
            consistently produces editorial-quality output from models like GPT Image 1 Medium and
            Imagen 4 Standard.
          </p>

          <h3>For AI Fashion Voiceovers</h3>
          <p>
            An effective ad script for a clothing brand voiceover should be 30–60 words long (for a 15–30
            second Instagram ad), use present tense, avoid generic adjectives, and end with a clear but
            non-aggressive CTA. Great structure: Hook (1 sentence) → Brand Identity Statement (1–2 sentences)
            → Product USP (1 sentence) → CTA (1 sentence). Example:
          </p>
          <p style={{ fontStyle: "italic", paddingLeft: "1.25rem", borderLeft: "3px solid #6355dc", margin: "1rem 0" }}>
            "Before you say a word, your outfit speaks. The new summer collection — linen, relaxed, and
            crafted for the heat. 12 colours. Sizes XS to 3XL. Shop the drop at the link in bio."
          </p>

          <h3>For AI Fashion Video Ads</h3>
          <p>
            Video prompts for clothing brand Instagram Reels need to describe camera movement, model
            action, setting, and lighting in cinematic terms. The AI models respond well to film direction
            language. Include: shot type (aerial, close-up, tracking shot), the action (walking, turning,
            fabric draping), the setting, lighting quality, and format. Example:
          </p>
          <p style={{ fontStyle: "italic", paddingLeft: "1.25rem", borderLeft: "3px solid #6355dc", margin: "1rem 0" }}>
            "Cinematic 9:16 fashion Reel, slow-motion close-up tracking shot of a model in flowing cream
            silk dress walking through a lavender field at golden hour, camera follows her movement from
            hip level, fabric rippling in wind, warm cinematic colour grade, ultra-detailed 1080p"
          </p>

          <h2>Instagram Ad Formats for Clothing Brands: A 2026 Guide</h2>
          <p>
            Instagram offers multiple ad formats in 2026, and the right format depends on your objective
            and stage of the marketing funnel. Here's how AI-generated content maps to each format:
          </p>

          <h3>Instagram Reels Ads (9:16, up to 90 seconds)</h3>
          <p>
            Reels are the highest-reach format on Instagram in 2026. They appear in the Explore tab,
            the dedicated Reels feed, and interstitially in the main feed. For clothing brands, Reels
            ads excel for collection launches, brand storytelling, and product demonstrations. Generate
            5–10 second cinematic clips using AI video models (Kling 2.6 Pro at 1080p is recommended)
            and combine multiple clips in your preferred editing app for a 30–60 second Reel.
          </p>

          <h3>Instagram Stories Ads (9:16, up to 15 seconds)</h3>
          <p>
            Stories ads have a 75% vertical view rate and are highly effective for time-limited offers,
            new arrivals, and retargeting. Use AI-generated images in 9:16 format with an AI voiceover
            burned in using a free tool like CapCut. This combination — AI visual + AI voice — can
            produce a Stories ad in under 5 minutes for under ₹50 in AI credits.
          </p>

          <h3>Instagram Feed Ads (1:1 Square or 4:5 Portrait)</h3>
          <p>
            Feed ads are the most traditional format and remain effective for product-focused campaigns
            where the goal is driving link clicks to your website or shop. Use AI-generated product images
            in 1:1 (square) format. Models like GPT Image 1 Medium produce particularly strong results for
            feed ads because of their ability to render accurate product textures and professional
            compositional balance.
          </p>

          <h3>Instagram Carousel Ads (Multiple images)</h3>
          <p>
            Carousel ads allow up to 10 images in a single ad unit, with individual CTAs per image.
            For clothing brands, carousels work brilliantly for showing multiple colourways, outfit
            pairings, or collection themes. Scenith's Carousel mode in the Image Generator lets you
            create 3 AI images with individual prompts in a single generation session — perfect for
            building the visual backbone of a carousel ad campaign.
          </p>

          <h2>The Economics of AI Fashion Advertising in 2026</h2>
          <p>
            The cost curve for AI-generated fashion ad content has compressed dramatically. In 2023,
            AI-generated images required significant prompt engineering skill and often produced
            unreliable results for complex subjects like clothing. By 2025–2026, models like GPT Image 1
            and Imagen 4 reliably produce commercially viable fashion imagery on the first or second
            attempt. The implications for clothing brand marketing budgets are significant.
          </p>
          <p>
            A traditional fashion photoshoot in India costs ₹15,000–₹50,000 for a single product. A
            professional voiceover artist charges ₹3,000–₹10,000 for a 30-second script. A Reel
            produced by a video production company costs ₹10,000–₹50,000. Total traditional production
            cost for a single complete Instagram ad campaign (image + voice + video): ₹28,000–₹1,10,000.
          </p>
          <p>
            With Scenith's AI generator, the same campaign — editorial image + voiceover + Reel video —
            costs approximately 130–200 AI credits. On a Creator Lite plan ($9/month, 300 credits),
            this works out to approximately ₹400–₹600 per complete campaign. That's a 97% cost reduction
            versus traditional production. For a clothing brand running 4–8 campaign cycles per month,
            the annual savings exceed ₹5–10 lakhs.
          </p>

          <h2>Instagram Algorithm and AI Fashion Content: What You Need to Know in 2026</h2>
          <p>
            A common concern among clothing brand founders exploring AI-generated ad content is whether
            Instagram's algorithm penalises AI content. As of 2026, Instagram does not explicitly
            downrank AI-generated images or videos. The algorithm rewards content based on engagement
            signals — watch time, saves, shares, comments, and profile visits — regardless of how the
            content was created.
          </p>
          <p>
            The key insight is that the Instagram algorithm cannot distinguish between a photograph taken
            by a professional photographer and an image generated by GPT Image 1 — and neither can your
            audience, when the prompt is written well. Several D2C clothing brands have reported that
            their AI-generated product images outperform their professionally shot photography on
            Instagram engagement metrics, specifically because AI models optimise for visual composition
            and colour contrast that the algorithm rewards.
          </p>
          <p>
            Meta does require disclosure of AI-generated content in paid ad formats as of early 2026,
            with an "AI-Generated" label applied automatically to images that Meta's detection systems
            identify. However, this disclosure has not been shown to meaningfully affect ad performance
            metrics (CTR, ROAS) in fashion category testing.
          </p>

          <h2>Building a Content Calendar for Your Clothing Brand on Instagram with AI</h2>
          <p>
            One of the most powerful use cases for AI fashion ad generators is not one-off campaigns —
            it's the ability to maintain a consistent, high-quality posting cadence that the Instagram
            algorithm rewards. Here's a simple monthly content calendar framework for a clothing brand
            using AI-generated content:
          </p>
          <p>
            Week 1: New arrival drop campaign — 1 editorial image, 1 voiceover, 1 Reel (image-to-video).
            Week 2: Styling content — 3-image carousel showing outfit pairings with AI-generated visuals.
            Week 3: Social proof & behind-the-scenes — AI-assisted copy with real customer images.
            Week 4: Sale/offer announcement — AI voiceover for urgency, AI image for visual, Story ad format.
          </p>
          <p>
            With Scenith's 300-credit Creator Lite plan, this full monthly calendar costs approximately
            $9, takes 2–3 hours to generate, and produces content at a quality level that would typically
            require a monthly agency retainer of ₹50,000+.
          </p>

          <h2>Multilingual Fashion Ads: Reaching Customers in Their Language</h2>
          <p>
            Instagram's 2026 user base is increasingly diverse, and clothing brands that localise their
            ad content to specific language markets see significantly higher engagement and conversion
            rates. Scenith's AI voice generator supports 20+ languages including Hindi, Tamil, Kannada,
            Gujarati, Bengali, Arabic, Malay, Spanish, French, Portuguese, and Mandarin — giving
            clothing brands the ability to create identical campaign assets in multiple languages without
            additional production cost.
          </p>
          <p>
            A D2C clothing brand targeting both the Indian urban market (Hindi voiceover) and the
            UAE South Asian diaspora (Arabic voiceover) can generate both language versions of the same
            ad in under 10 minutes. The visual (AI-generated editorial image) remains the same; only
            the voiceover changes. This approach has been shown to increase conversion rates by 30–50%
            compared to running English-only ads in non-English dominant markets.
          </p>

        </div>
      </section>

      {/* ══════════════════════════════════════════════
          FAQ
      ══════════════════════════════════════════════ */}
      <section className="ica-faq-section">
        <div className="ica-section-header">
          <h2 className="ica-section-title">Frequently Asked Questions</h2>
          <p className="ica-section-sub">
            Everything clothing brand founders ask about AI-generated Instagram ads.
          </p>
        </div>
        <div className="ica-faq-list">
          {FAQ.map((item, i) => (
            <div
              key={i}
              className={`ica-faq-item ${openFaq === i ? "open" : ""}`}
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
            >
              <div className="ica-faq-q">
                <span>{item.q}</span>
                <span className="ica-faq-chevron">{openFaq === i ? "▲" : "▼"}</span>
              </div>
              {openFaq === i && <div className="ica-faq-a">{item.a}</div>}
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════════════ */}
      <section className="ica-final-cta-section">
        <div className="ica-final-cta-inner">
          <div className="ica-final-cta-badge">🚀 2026's Fastest Growing AI Tool for Fashion Brands</div>
          <h2 className="ica-final-cta-title">
            Your Next Instagram Fashion Ad
            <br />
            Is 60 Seconds Away
          </h2>
          <p className="ica-final-cta-desc">
            No agency. No photographer. No edit suite. Just your idea, a prompt,
            and AI that creates at the level of professionals — in seconds.
          </p>
          <a
            href={TARGET_URL}
            className="ica-cta-primary ica-cta-primary--xl"
            target="_blank"
            rel="noopener"
          >
            ⚡ Generate Your Fashion Ad Free →
          </a>
          <div className="ica-final-trust">
            <span>✓ 50 free credits on signup</span>
            <span>✓ No credit card required</span>
            <span>✓ Full commercial rights</span>
            <span>✓ Works on any device</span>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          FOOTER BREADCRUMB / INTERNAL LINKS
      ══════════════════════════════════════════════ */}
      <section className="ica-footer-links">
        <div className="ica-footer-links-inner">
          <div className="ica-footer-link-group">
            <div className="ica-footer-link-heading">Related AI Tools</div>
            <a href="https://scenith.in/create-ai-content?tab=image&utm_source=micro_tool&utm_medium=clothing_brand&utm_campaign=instagram_ad_generator&utm_content=footer_image">AI Image Generator →</a>
            <a href="https://scenith.in/create-ai-content?tab=voice&utm_source=micro_tool&utm_medium=clothing_brand&utm_campaign=instagram_ad_generator&utm_content=footer_voice">AI Voice Generator →</a>
            <a href="https://scenith.in/create-ai-content?tab=video&utm_source=micro_tool&utm_medium=clothing_brand&utm_campaign=instagram_ad_generator&utm_content=footer_video">AI Video Generator →</a>
          </div>
          <div className="ica-footer-link-group">
            <div className="ica-footer-link-heading">Scenith</div>
            <a href="https://scenith.in">Home</a>
            <a href="https://scenith.in/pricing">Pricing</a>
            <a href="https://scenith.in/tools">All Tools</a>
          </div>
          <div className="ica-footer-link-group">
            <div className="ica-footer-link-heading">Breadcrumb</div>
            <div className="ica-breadcrumb">
              <a href="https://scenith.in">Scenith</a>
              <span> › </span>
              <a href="https://scenith.in/tools">Tools</a>
              <span> › </span>
              <span>Instagram Clothing Brand Ad Generator</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}