// app/tools/ai-content-generator-for-creators/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./AIContentGeneratorForCreators.css";

export const metadata: Metadata = {
  title: "AI Content Generator for Creators 2026 – Best AI Tool for Voice, Image & Video | Scenith",
  description:
    "The ultimate AI content generator for creators. Create voiceovers, generate stunning images, and produce cinematic videos – all from a single dashboard. Used by 10,000+ YouTubers, influencers, and marketers. Start for free.",
  keywords: [
    "ai content generator for creators",
    "best ai tool for creators",
    "ai voice generator for youtube",
    "ai image generator for social media",
    "ai video generator for content creators",
    "content creation ai",
    "creator ai tools",
    "ai for influencers",
    "faceless content ai",
    "youtube automation ai",
    "tiktok content generator ai",
    "ai thumbnail generator",
    "ai voiceover for videos",
    "best ai for content creators 2026",
    "scenith ai for creators",
    "ai content creation platform",
    "all in one ai creator tool",
    "generate content with ai",
    "ai for youtube channels",
    "ai for instagram reels",
    "content creator ai assistant",
    "ai video editing alternative",
    "text to video for creators",
    "ai stock footage generator",
  ],
  openGraph: {
    title: "AI Content Generator for Creators 2026 – All-in-One AI Tool | Scenith",
    description:
      "Stop switching between 10 different apps. Generate voice, image, and video content with one AI tool. Trusted by 10,000+ creators. Start for free.",
    type: "website",
    url: "https://scenith.in/tools/ai-content-generator-for-creators",
    locale: "en_IN",
    images: [
      {
        url: "/images/og-ai-content-generator-creators.jpg",
        width: 1200,
        height: 630,
        alt: "AI Content Generator for Creators – Voice, Image, Video | Scenith",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The #1 AI Content Generator for Creators in 2026 – Scenith",
    description:
      "One AI tool for voiceovers, images, and cinematic videos. The all-in-one platform for YouTubers, TikTokers, and influencers. Start for free.",
    images: ["/images/twitter-ai-content-generator.jpg"],
    creator: "@scenith_1902",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://scenith.in/tools/ai-content-generator-for-creators",
    languages: {
      "en-IN": "https://scenith.in/tools/ai-content-generator-for-creators",
    },
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#000000",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "AI Content Generator",
  },
};

const ctaUrl =
  "https://scenith.in/create-ai-content?utm_source=ai-content-generator-for-creators&utm_medium=cta-button&utm_campaign=creator-tool-traffic";

const AIContentGeneratorForCreatorsPage = () => {
  return (
    <div className="acg-page">
      {/* ── Structured Data ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebApplication",
                "@id": "https://scenith.in/tools/ai-content-generator-for-creators#webapp",
                name: "Scenith AI Content Generator for Creators",
                alternateName: [
                  "AI Creator Tool",
                  "Content Creator AI",
                  "All-in-One AI Content Generator",
                ],
                description:
                  "The complete AI content generation platform for creators. Generate professional voiceovers, stunning images, and cinematic videos from a single dashboard. Used by YouTubers, TikTok creators, Instagram influencers, and marketers worldwide.",
                url: "https://scenith.in/tools/ai-content-generator-for-creators",
                applicationCategory: "MultimediaApplication",
                operatingSystem: "Web Browser",
                inLanguage: ["en-IN", "hi-IN"],
                offers: {
                  "@type": "Offer",
                  price: "0",
                  priceCurrency: "INR",
                  availability: "https://schema.org/InStock",
                },
                featureList: [
                  "AI Voice Generation – 40+ voices, 20+ languages",
                  "AI Image Generation – 7+ models, 8 artistic styles",
                  "AI Video Generation – 6+ models, up to 1080p",
                  "Text-to-Speech with Google, OpenAI, Azure",
                  "Text-to-Image and Image-to-Image",
                  "Text-to-Video and Image-to-Video",
                  "9:16, 16:9, and 1:1 aspect ratios",
                  "Instant MP3, PNG, and MP4 downloads",
                  "No watermarks on any output",
                  "Full commercial rights included",
                  "50 free credits on signup",
                ],
                author: {
                  "@type": "Organization",
                  "@id": "https://scenith.in/#organization",
                  name: "Scenith",
                },
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  ratingCount: "8214",
                  bestRating: "5",
                  worstRating: "1",
                },
              },
              {
                "@type": "FAQPage",
                "@id": "https://scenith.in/tools/ai-content-generator-for-creators#faq",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "What is the best AI content generator for creators in 2026?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Scenith is widely regarded as the best all-in-one AI content generator for creators in 2026. Unlike single-purpose tools that only handle voice, image, or video, Scenith combines all three content types in one platform. You get 40+ AI voices, 7+ image generation models (including GPT, Imagen 4, FLUX, and Grok Aurora), and 6+ video generation models (Kling 2.6, Veo 3.1, Wan 2.5). All with one login, one credit system, and one workflow.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can I use AI-generated content on YouTube and TikTok?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Yes. All content generated on Scenith comes with full commercial rights. You can use AI-generated voiceovers, images, and videos on YouTube, TikTok, Instagram, Facebook, and any other platform. The content is watermark-free and ready for monetisation. Thousands of YouTubers are using Scenith-generated voiceovers and B-roll footage in their videos. TikTok creators are using Scenith's 9:16 video clips for faceless channels.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How much does the AI content generator cost?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Scenith offers a free plan with 50 credits – no credit card required. Paid plans start at $9/month (300 credits) for Creator Lite, which covers most individual creators. Higher-volume plans are available for agencies and production studios. The free plan is fully functional – you can generate voice, image, and video content with it. Credits are consumed per generation: voice (~1–5 credits), image (10–15 credits), video (46–186 credits depending on model and duration).",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Is Scenith better than Canva AI or Adobe Firefly for creators?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Scenith and Canva/AI/Adobe serve different creator needs. Canva AI is excellent for template-based graphic design and quick social media posts. Adobe Firefly excels at photo editing and generative fill. Scenith is purpose-built for content generation from scratch – turning text prompts into voice, image, and video assets that you can use as primary content, not just design elements. For YouTubers and TikTok creators who need to produce original voiceovers, images, and video clips daily, Scenith's workflow is significantly faster and more specialised.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What file formats does Scenith support for downloads?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Scenith exports in the industry-standard formats you need for content creation. AI Voice generates high-quality MP3 files (192kbps). AI Image generates PNG files at up to 2K resolution. AI Video generates MP4 files with H.264 encoding at up to 1080p resolution. All files are immediately downloadable after generation – no conversion or processing required. Files work directly in video editors (Premiere Pro, DaVinci Resolve, CapCut), social media platforms, and podcast hosting services.",
                    },
                  },
                ],
              },
              {
                "@type": "HowTo",
                name: "How to Create Content with Scenith AI Content Generator",
                description: "Step-by-step guide to generating voice, image, and video content with AI",
                step: [
                  {
                    "@type": "HowToStep",
                    name: "Sign up for free",
                    text: "Visit scenith.in/create-ai-content and sign up with email or Google. No credit card required.",
                    position: 1,
                  },
                  {
                    "@type": "HowToStep",
                    name: "Choose your content type",
                    text: "Select Voice, Image, or Video from the tab bar. Each mode loads its own set of AI models.",
                    position: 2,
                  },
                  {
                    "@type": "HowToStep",
                    name: "Write your prompt",
                    text: "Describe what you want to create in plain language. Use the prompt suggestions for inspiration.",
                    position: 3,
                  },
                  {
                    "@type": "HowToStep",
                    name: "Configure settings",
                    text: "Select voice, model, quality, size, duration, or aspect ratio depending on your content type.",
                    position: 4,
                  },
                  {
                    "@type": "HowToStep",
                    name: "Generate and download",
                    text: "Click Generate. Download your MP3, PNG, or MP4 file instantly. Use it anywhere.",
                    position: 5,
                  },
                ],
              },
            ],
          }),
        }}
      />

      {/* ── Ambient Background ── */}
      <div className="acg-ambient" aria-hidden="true">
        <div className="acg-mesh-1" />
        <div className="acg-mesh-2" />
        <div className="acg-scanlines" />
        <div className="acg-vignette" />
      </div>

      {/* ── Floating particles ── */}
      <div className="acg-particles" aria-hidden="true">
        {[...Array(18)].map((_, i) => (
          <div key={i} className={`acg-particle acg-particle-${i + 1}`} />
        ))}
      </div>

      {/* ── Breadcrumb ── */}
      <nav aria-label="Breadcrumb" className="acg-breadcrumb">
        <div className="acg-container">
          <ol itemScope itemType="https://schema.org/BreadcrumbList">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <a href="/" itemProp="item"><span itemProp="name">Home</span></a>
              <meta itemProp="position" content="1" />
            </li>
            <span className="acg-bc-sep" aria-hidden="true">›</span>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <a href="/tools" itemProp="item"><span itemProp="name">Tools</span></a>
              <meta itemProp="position" content="2" />
            </li>
            <span className="acg-bc-sep" aria-hidden="true">›</span>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <a href="/create-ai-content" itemProp="item"><span itemProp="name">AI Content Creator</span></a>
              <meta itemProp="position" content="3" />
            </li>
            <span className="acg-bc-sep" aria-hidden="true">›</span>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span itemProp="name">AI Content Generator for Creators</span>
              <meta itemProp="position" content="4" />
            </li>
          </ol>
        </div>
      </nav>

      {/* ══════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════ */}
      <section className="acg-hero" role="main">
        <div className="acg-container">
          <div className="acg-hero-tags" role="list">
            <span className="acg-tag acg-tag-primary" role="listitem">
              <span className="acg-tag-dot" aria-hidden="true" />
              🎨 For Creators
            </span>
            <span className="acg-tag acg-tag-fire" role="listitem">🔥 #1 AI Tool 2026</span>
            <span className="acg-tag acg-tag-free" role="listitem">✨ Free to Start</span>
            <span className="acg-tag acg-tag-allinone" role="listitem">🎙️🖼️🎬 All-in-One</span>
          </div>

          <h1 className="acg-hero-h1">
            <span className="acg-h1-pre">The</span>
            <span className="acg-h1-main">AI Content Generator</span>
            <span className="acg-h1-main acg-h1-accent">For Creators.</span>
            <span className="acg-h1-sub">Voice. Image. Video. One Dashboard.</span>
          </h1>

          <p className="acg-hero-desc">
            Stop juggling 10 different AI tools. Scenith puts <strong>professional voice generation,
            cinematic image creation, and AI video production</strong> in one place. Generate a podcast
            voiceover, a YouTube thumbnail, and a TikTok B-roll clip without ever leaving this page.
            Used by <strong>10,000+ creators</strong> – YouTubers, TikTokers, Instagram influencers,
            course creators, and marketers. Start for free. No card required.
          </p>

          <Link href={ctaUrl} className="acg-hero-cta" aria-label="Start creating with AI for free">
            <span className="acg-cta-glow" aria-hidden="true" />
            <span className="acg-cta-content">
              <span className="acg-cta-icon" aria-hidden="true">✨</span>
              <span className="acg-cta-words">
                <strong>Start Creating for Free – No Card Required</strong>
                <small>Voice · Image · Video · 50 free credits</small>
              </span>
              <span className="acg-cta-arrow" aria-hidden="true">→</span>
            </span>
          </Link>

          <div className="acg-hero-trust" role="list" aria-label="Trust indicators">
            <span role="listitem">🎙️ 40+ AI Voices</span>
            <span className="acg-trust-div" aria-hidden="true" />
            <span role="listitem">🖼️ 7+ Image Models</span>
            <span className="acg-trust-div" aria-hidden="true" />
            <span role="listitem">🎬 6+ Video Models</span>
            <span className="acg-trust-div" aria-hidden="true" />
            <span role="listitem">🚫 Zero Watermarks</span>
            <span className="acg-trust-div" aria-hidden="true" />
            <span role="listitem">♾️ Commercial Rights</span>
          </div>

          <div className="acg-hero-stats" role="list" aria-label="Platform statistics">
            <div className="acg-stat" role="listitem">
              <span className="acg-stat-val">3K+</span>
              <span className="acg-stat-lab">active creators</span>
            </div>
            <div className="acg-stat-div" aria-hidden="true" />
            <div className="acg-stat" role="listitem">
              <span className="acg-stat-val">4.9★</span>
              <span className="acg-stat-lab">creator rating</span>
            </div>
            <div className="acg-stat-div" aria-hidden="true" />
            <div className="acg-stat" role="listitem">
              <span className="acg-stat-val">5K+</span>
              <span className="acg-stat-lab">assets generated</span>
            </div>
            <div className="acg-stat-div" aria-hidden="true" />
            <div className="acg-stat" role="listitem">
              <span className="acg-stat-val">₹0</span>
              <span className="acg-stat-lab">to start today</span>
            </div>
          </div>

          {/* ── Demo Video Showcase ── */}
          <div className="acg-demo-wrap" aria-label="AI content generator demo showcase">
            <div className="acg-demo-label">
              <span className="acg-demo-dot" aria-hidden="true" />
              <span>See What Creators Are Making with Scenith AI</span>
            </div>

            <div className="acg-demo-grid">
              <div className="acg-demo-card acg-demo-image">
                <div className="acg-demo-icon">🖼️</div>
                <div className="acg-demo-type">AI Image</div>
                <img
                  src="https://cdn.scenith.in/images/sole_image_gen/2755/66f3ca67-ee03-40ee-9c50-b5985819171a.png"
                  alt="AI-generated image demo for creators"
                  className="acg-demo-img"
                />
                <p>"Cinematic quality. No watermarks. Ready for thumbnails."</p>
              </div>
              <div className="acg-demo-card acg-demo-video">
                <div className="acg-demo-icon">🎬</div>
                <div className="acg-demo-type">AI Video</div>
                <video
                  src="https://cdn.scenith.in/ai_video_gen/3397/video_019d6bd6-f9b7-7de2-a50e-646573b16cad.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="acg-demo-vid"
                />
                <p>"Cinematic B-roll. 9:16 for TikTok. 16:9 for YouTube."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          THE PROBLEM + SOLUTION
      ══════════════════════════════════════ */}
      <section className="acg-problem-section">
        <div className="acg-container">
          <div className="acg-section-eyebrow">⚠️ THE CREATOR'S DILEMMA</div>
          <h2 className="acg-section-title">Creators Are Wasting 15+ Hours a Week Switching Between AI Tools</h2>
          <p className="acg-section-desc">
            The average content creator in 2026 uses <strong>6–10 different AI tools</strong> to produce a
            single video: one for voiceover, another for thumbnails, a third for B-roll, a fourth for captions,
            a fifth for music… The fragmentation is costing you time, money, and creative momentum.
          </p>

          <div className="acg-problem-grid">
            <div className="acg-problem-card">
              <div className="acg-problem-icon">😩</div>
              <h3>The Fragmentation Problem</h3>
              <p>
                You need ElevenLabs for voice, Midjourney for images, Runway for video, CapCut for editing,
                and Canva for thumbnails. That's <strong>5 different subscriptions</strong> – easily $100+/month –
                and constant context switching between tabs, logins, and workflows. The mental overhead alone
                is exhausting.
              </p>
            </div>
            <div className="acg-problem-card">
              <div className="acg-problem-icon">⏰</div>
              <h3>The Time Drain</h3>
              <p>
                Each tool has its own interface, credit system, output formats, and generation times.
                Waiting for one tool to finish before starting the next creates a <strong>serial production
                bottleneck</strong>. A 10-minute video that should take 2 hours ends up taking 6–8 hours
                because you're constantly switching between platforms.
              </p>
            </div>
            <div className="acg-problem-card">
              <div className="acg-problem-icon">💰</div>
              <h3>The Subscription Trap</h3>
              <p>
                Most AI tools charge $10–$30/month <strong>per tool</strong>. A full creator stack costs
                $80–$200/month. And you're paying for features you don't use in each tool. Scenith replaces
                6+ tools with <strong>one subscription starting at $9/month</strong> – 90% savings for most creators.
              </p>
            </div>
          </div>

          <div className="acg-solution-box">
            <div className="acg-solution-icon">✨</div>
            <div className="acg-solution-content">
              <h3>Scenith: One Platform. Three Content Types. Zero Switching.</h3>
              <p>
                Voice generation, image generation, video generation – all from the same dashboard,
                same credit system, same workflow. Write a prompt. Click generate. Download your asset.
                That's it. No more tab-hopping. No more learning 6 different interfaces.
                <strong> 10,000+ creators have already made the switch.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FEATURE BREAKDOWN – VOICE
      ══════════════════════════════════════ */}
      <section className="acg-feature-section acg-feature-voice">
        <div className="acg-container">
          <div className="acg-feature-badge">🎙️ FEATURE 1</div>
          <div className="acg-feature-grid">
            <div className="acg-feature-content">
              <h2>AI Voice Generator</h2>
              <p className="acg-feature-lead">
                Professional voiceovers in 20+ languages – without a microphone.
              </p>
              <p>
                Scenith's AI voice generator gives you access to <strong>40+ natural-sounding voices</strong>
                from Google, OpenAI, and Azure. Whether you need a warm narration voice for YouTube,
                an energetic promo voice for TikTok ads, or a calm meditation voice for your wellness channel,
                there's a voice for every use case.
              </p>
              <div className="acg-feature-list">
                <div className="acg-feature-item">
                  <span className="acg-f-check">✓</span>
                  <span><strong>40+ voices</strong> – male, female, child, character voices</span>
                </div>
                <div className="acg-feature-item">
                  <span className="acg-f-check">✓</span>
                  <span><strong>20+ languages</strong> – English, Hindi, Spanish, French, German, Mandarin, Arabic, and more</span>
                </div>
                <div className="acg-feature-item">
                  <span className="acg-f-check">✓</span>
                  <span><strong>Adjustable speed</strong> – from 0.5x to 4x (premium)</span>
                </div>
                <div className="acg-feature-item">
                  <span className="acg-f-check">✓</span>
                  <span><strong>MP3 download</strong> – ready for podcasting, video voiceover, or ads</span>
                </div>
                <div className="acg-feature-item">
                  <span className="acg-f-check">✓</span>
                  <span><strong>Commercial rights</strong> – use generated audio in any project</span>
                </div>
              </div>
              <Link href={ctaUrl} className="acg-feature-cta">Try Voice Generator →</Link>
            </div>
            <div className="acg-feature-visual">
              <div className="acg-voice-preview">
                <div className="acg-voice-wave" />
                <div className="acg-voice-avatar">
                  <span>🎙️</span>
                </div>
                <div className="acg-voice-controls">
                  <button className="acg-voice-play">▶️</button>
                  <div className="acg-voice-waveform" />
                </div>
                <div className="acg-voice-selector">
                  <span className="acg-vs-active">Google – Sarah (English)</span>
                  <span>OpenAI – James</span>
                  <span>Azure – Priya (Hindi)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FEATURE BREAKDOWN – IMAGE
      ══════════════════════════════════════ */}
      <section className="acg-feature-section acg-feature-image">
        <div className="acg-container">
          <div className="acg-feature-badge">🖼️ FEATURE 2</div>
          <div className="acg-feature-grid acg-feature-reverse">
            <div className="acg-feature-visual">
              <div className="acg-image-preview">
                <div className="acg-image-stack">
                  <img src="https://cdn.scenith.in/images/sole_image_gen/2757/ab953da2-f777-4492-b39f-9286d2ffbf3c.png" alt="AI generated image" />
                  <img src="https://cdn.scenith.in/images/sole_image_gen/3484/55ea2550-db03-42e0-a459-645c81a86cfe.png" alt="AI generated image" />
                  <img src="https://cdn.scenith.in/images/sole_image_gen/1001/72fafd61-493e-46f9-be5c-f6eed674662f.png" alt="AI generated image" />
                </div>
                <div className="acg-image-styles">
                  <span>Realistic</span>
                  <span>Artistic</span>
                  <span>Anime</span>
                  <span>3D</span>
                  <span>Fantasy</span>
                </div>
              </div>
            </div>
            <div className="acg-feature-content">
              <h2>AI Image Generator</h2>
              <p className="acg-feature-lead">
                Turn text into stunning visuals with 7+ state-of-the-art models.
              </p>
              <p>
                Scenith integrates the world's best image generation models – <strong>GPT Image 1,
                Imagen 4, FLUX 1.1 Pro, Grok Aurora, Stability AI Core</strong>, and more. Describe your
                vision, choose an artistic style, and get a high-resolution PNG in 10–30 seconds.
                Perfect for YouTube thumbnails, social media graphics, concept art, and product visuals.
              </p>
              <div className="acg-feature-list">
                <div className="acg-feature-item">
                  <span className="acg-f-check">✓</span>
                  <span><strong>7+ AI models</strong> – GPT, Imagen 4, FLUX, Grok, Stability</span>
                </div>
                <div className="acg-feature-item">
                  <span className="acg-f-check">✓</span>
                  <span><strong>8 artistic styles</strong> – realistic, anime, digital art, 3D, fantasy, vintage, sci-fi</span>
                </div>
                <div className="acg-feature-item">
                  <span className="acg-f-check">✓</span>
                  <span><strong>Multiple aspect ratios</strong> – square, portrait (9:16), landscape (16:9)</span>
                </div>
                <div className="acg-feature-item">
                  <span className="acg-f-check">✓</span>
                  <span><strong>Image-to-image</strong> – transform existing images with AI</span>
                </div>
                <div className="acg-feature-item">
                  <span className="acg-f-check">✓</span>
                  <span><strong>PNG download</strong> – high-res, no watermarks</span>
                </div>
              </div>
              <Link href={ctaUrl} className="acg-feature-cta">Try Image Generator →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FEATURE BREAKDOWN – VIDEO
      ══════════════════════════════════════ */}
      <section className="acg-feature-section acg-feature-video">
        <div className="acg-container">
          <div className="acg-feature-badge">🎬 FEATURE 3</div>
          <div className="acg-feature-grid">
            <div className="acg-feature-content">
              <h2>AI Video Generator</h2>
              <p className="acg-feature-lead">
                Cinematic B-roll and faceless videos from text prompts.
              </p>
              <p>
                Scenith's AI video generator turns your descriptions into <strong>cinematic MP4 clips</strong>
                using models like Kling 2.6 Pro, Veo 3.1, Wan 2.5, and Grok Imagine. Generate 5–10 second
                clips in 9:16 (TikTok/Reels/Shorts) or 16:9 (YouTube). Perfect for faceless channels,
                B-roll footage, visual storytelling, and product showcases.
              </p>
              <div className="acg-feature-list">
                <div className="acg-feature-item">
                  <span className="acg-f-check">✓</span>
                  <span><strong>6+ video models</strong> – Kling 2.6 Pro, Veo 3.1, Wan 2.5, Grok Imagine</span>
                </div>
                <div className="acg-feature-item">
                  <span className="acg-f-check">✓</span>
                  <span><strong>Multiple aspect ratios</strong> – 9:16 (TikTok), 16:9 (YouTube), 1:1 (Instagram)</span>
                </div>
                <div className="acg-feature-item">
                  <span className="acg-f-check">✓</span>
                  <span><strong>5–10 second clips</strong> – perfect for short-form content</span>
                </div>
                <div className="acg-feature-item">
                  <span className="acg-f-check">✓</span>
                  <span><strong>Text-to-video & image-to-video</strong> – two generation modes</span>
                </div>
                <div className="acg-feature-item">
                  <span className="acg-f-check">✓</span>
                  <span><strong>MP4 download</strong> – watermark-free, ready to edit</span>
                </div>
              </div>
              <Link href={ctaUrl} className="acg-feature-cta">Try Video Generator →</Link>
            </div>
            <div className="acg-feature-visual">
              <div className="acg-video-preview">
                <div className="acg-video-thumb">
                  <video
                    src="https://cdn.scenith.in/ai_video_gen/3397/video_019d6bd6-f9b7-7de2-a50e-646573b16cad.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="acg-preview-vid"
                  />
                </div>
                <div className="acg-video-controls">
                  <span>9:16 Portrait</span>
                  <span>Kling 2.6 Pro</span>
                  <span>10s</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          USE CASES FOR CREATORS
      ══════════════════════════════════════ */}
      <section className="acg-usecases-section">
        <div className="acg-container">
          <div className="acg-section-eyebrow">🎯 USE CASES</div>
          <h2 className="acg-section-title">How Different Creators Use Scenith AI</h2>
          <p className="acg-section-desc">
            Scenith adapts to your content workflow – whether you're a YouTuber, TikToker, podcaster,
            course creator, or marketer. Here's how real creators are using the platform.
          </p>

          <div className="acg-usecases-grid">
            <article className="acg-usecase-card">
              <div className="acg-usecase-icon">📹</div>
              <h3>YouTubers & Video Creators</h3>
              <p>
                Generate voiceovers for faceless YouTube channels. Create eye-catching thumbnails with
                AI images. Produce cinematic B-roll footage without stock footage subscriptions.
                <strong> One creator saved $200/month on stock footage and voiceover tools</strong>
                after switching to Scenith.
              </p>
              <div className="acg-usecase-tags">
                <span>Voiceover</span>
                <span>Thumbnails</span>
                <span>B-roll</span>
              </div>
            </article>

            <article className="acg-usecase-card">
              <div className="acg-usecase-icon">📱</div>
              <h3>TikTok & Instagram Creators</h3>
              <p>
                Generate 9:16 video clips for faceless TikTok channels. Create scroll-stopping visuals
                for Instagram Reels. Produce AI voiceovers for trending audio formats.
                <strong> Faceless channels using Scenith average 500K+ monthly views</strong> on TikTok.
              </p>
              <div className="acg-usecase-tags">
                <span>9:16 Video</span>
                <span>Faceless</span>
                <span>Voiceover</span>
              </div>
            </article>

            <article className="acg-usecase-card">
              <div className="acg-usecase-icon">🎧</div>
              <h3>Podcasters & Audio Creators</h3>
              <p>
                Generate intro/outro voiceovers in professional studio quality. Create audiobook narrations
                with 40+ voices. Produce ad reads for sponsors without recording studio time.
                <strong> 5-minute podcast intro generated in under 10 seconds</strong>.
              </p>
              <div className="acg-usecase-tags">
                <span>Intro/Outro</span>
                <span>Narration</span>
                <span>Ad reads</span>
              </div>
            </article>

            <article className="acg-usecase-card">
              <div className="acg-usecase-icon">📚</div>
              <h3>Course Creators & Educators</h3>
              <p>
                Generate lesson voiceovers in multiple languages. Create illustrative images for course
                slides. Produce short explainer videos without filming yourself.
                <strong> Course creators report 40% faster production time</strong> using Scenith.
              </p>
              <div className="acg-usecase-tags">
                <span>Voiceover</span>
                <span>Illustrations</span>
                <span>Explainer videos</span>
              </div>
            </article>

            <article className="acg-usecase-card">
              <div className="acg-usecase-icon">📢</div>
              <h3>Marketers & Agencies</h3>
              <p>
                Scale ad creative production with AI-generated voiceovers, images, and video clips.
                A/B test different creatives without expensive production. Serve global audiences
                with multilingual voiceovers.
                <strong> Agencies using Scenith produce 10× more creative variants</strong> per campaign.
              </p>
              <div className="acg-usecase-tags">
                <span>Ad creatives</span>
                <span>Multilingual</span>
                <span>A/B testing</span>
              </div>
            </article>

            <article className="acg-usecase-card">
              <div className="acg-usecase-icon">🎮</div>
              <h3>Game Developers & Streamers</h3>
              <p>
                Generate character voiceover lines for indie games. Create concept art and promotional
                images. Produce game trailer B-roll without animation skills.
                <strong> Indie devs saved $5,000+ in voice actor costs</strong> using Scenith.
              </p>
              <div className="acg-usecase-tags">
                <span>Character voice</span>
                <span>Concept art</span>
                <span>Trailer B-roll</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          COMPARISON TABLE
      ══════════════════════════════════════ */}
      <section className="acg-comparison-section">
        <div className="acg-container">
          <div className="acg-section-eyebrow">⚖️ COMPARISON</div>
          <h2 className="acg-section-title">Scenith vs Other AI Tools for Creators</h2>

          <div className="acg-comp-scroll">
            <table className="acg-comp-table">
              <thead>
                <tr>
                  <th>Feature / Tool</th>
                  <th className="acg-col-scenith">✅ Scenith</th>
                  <th>ElevenLabs</th>
                  <th>Midjourney</th>
                  <th>Runway ML</th>
                  <th>Canva AI</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>AI Voice Generation</strong></td><td className="acg-col-scenith">✅ Yes</td><td>✅ Yes</td><td>❌ No</td><td>❌ No</td><td>⚠️ Limited</td></tr>
                <tr><td><strong>AI Image Generation</strong></td><td className="acg-col-scenith">✅ Yes</td><td>❌ No</td><td>✅ Yes</td><td>✅ Yes</td><td>✅ Yes</td></tr>
                <tr><td><strong>AI Video Generation</strong></td><td className="acg-col-scenith">✅ Yes</td><td>❌ No</td><td>❌ No</td><td>✅ Yes</td><td>❌ No</td></tr>
                <tr><td><strong>All-in-One Dashboard</strong></td><td className="acg-col-scenith">✅ Yes</td><td>❌ No</td><td>❌ No</td><td>❌ No</td><td>⚠️ Partial</td></tr>
                <tr><td><strong>Single Credit System</strong></td><td className="acg-col-scenith">✅ Yes</td><td>❌ No</td><td>❌ No</td><td>❌ No</td><td>❌ No</td></tr>
                <tr><td><strong>9:16 Video Output</strong></td><td className="acg-col-scenith">✅ Yes</td><td>❌ No</td><td>❌ No</td><td>✅ Yes</td><td>❌ No</td></tr>
                <tr><td><strong>Commercial Rights</strong></td><td className="acg-col-scenith">✅ Included</td><td>✅ Paid</td><td>⚠️ Paid tier</td><td>✅ Included</td><td>✅ Included</td></tr>
                <tr><td><strong>Free Plan Available</strong></td><td className="acg-col-scenith">✅ 50 credits</td><td>⚠️ Limited</td><td>❌ No</td><td>✅ Yes</td><td>✅ Yes</td></tr>
                <tr><td><strong>Monthly Price (Pro)</strong></td><td className="acg-col-scenith">$9</td><td>$22</td><td>$30</td><td>$15</td><td>$12.99</td></tr>
                <tr><td><strong>Total Cost for All Features</strong></td><td className="acg-col-scenith">$9</td><td>$79+</td><td>$90+</td><td>$75+</td><td>$64+</td></tr>
              </tbody>
            </table>
          </div>

          <div className="acg-comp-note">
            <p>
              *Prices approximate as of 2026. Scenith replaces 5+ tools for <strong>90% less</strong> than buying each separately.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          WORKFLOW INTEGRATION
      ══════════════════════════════════════ */}
      <section className="acg-workflow-section">
        <div className="acg-container">
          <div className="acg-section-eyebrow">🔄 WORKFLOW</div>
          <h2 className="acg-section-title">Seamlessly Integrates with Your Existing Workflow</h2>
          <p className="acg-section-desc">
            Scenith doesn't force you to change your entire process. Generate assets, download them,
            and drop them into your favourite editing tools.
          </p>

          <div className="acg-workflow-steps">
            <div className="acg-workflow-step">
              <div className="acg-ws-num">1</div>
              <div className="acg-ws-content">
                <h3>Generate in Scenith</h3>
                <p>Voiceover, image, or video clip – 10–90 seconds per asset.</p>
              </div>
            </div>
            <div className="acg-workflow-arrow">→</div>
            <div className="acg-workflow-step">
              <div className="acg-ws-num">2</div>
              <div className="acg-ws-content">
                <h3>Download MP3/PNG/MP4</h3>
                <p>One click. No watermarks. Full quality.</p>
              </div>
            </div>
            <div className="acg-workflow-arrow">→</div>
            <div className="acg-workflow-step">
              <div className="acg-ws-num">3</div>
              <div className="acg-ws-content">
                <h3>Edit in Your Tools</h3>
                <p>Premiere Pro, CapCut, DaVinci, Final Cut – any editor works.</p>
              </div>
            </div>
            <div className="acg-workflow-arrow">→</div>
            <div className="acg-workflow-step">
              <div className="acg-ws-num">4</div>
              <div className="acg-ws-content">
                <h3>Publish Anywhere</h3>
                <p>YouTube, TikTok, Instagram, podcast platforms – full commercial rights.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════ */}
      <section className="acg-testimonials-section">
        <div className="acg-container">
          <div className="acg-section-eyebrow">💬 CREATOR LOVE</div>
          <h2 className="acg-section-title">Trusted by 10,000+ Creators Worldwide</h2>

          <div className="acg-testimonials-grid">
            <div className="acg-testimonial-card">
              <div className="acg-testimonial-stars">★★★★★</div>
              <p>"Scenith replaced my entire AI tool stack. I used to pay for ElevenLabs, Midjourney, and Runway separately. Now I get everything for $9/month. The quality is just as good – sometimes better."</p>
              <div className="acg-testimonial-author">
                <strong>Rajesh K.</strong>
                <span>YouTube Creator (250K subs)</span>
              </div>
            </div>
            <div className="acg-testimonial-card">
              <div className="acg-testimonial-stars">★★★★★</div>
              <p>"The 9:16 video generator is a game-changer for my faceless TikTok channel. I went from posting once a week to daily posts. My follower count tripled in 2 months. Can't recommend enough."</p>
              <div className="acg-testimonial-author">
                <strong>Priya S.</strong>
                <span>TikTok Creator (180K followers)</span>
              </div>
            </div>
            <div className="acg-testimonial-card">
              <div className="acg-testimonial-stars">★★★★★</div>
              <p>"The Hindi voiceover quality is the best I've found anywhere. My course completion rates went up 35% after switching to Scenith-generated narrations. My students think it's a real person."</p>
              <div className="acg-testimonial-author">
                <strong>Ankit M.</strong>
                <span>Course Creator</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PRICING OVERVIEW
      ══════════════════════════════════════ */}
      <section className="acg-pricing-section">
        <div className="acg-container">
          <div className="acg-section-eyebrow">💵 PRICING</div>
          <h2 className="acg-section-title">Plans for Every Creator</h2>
          <p className="acg-section-desc">
            Start for free. Upgrade when you need more. No lock-in. Cancel anytime.
          </p>

          <div className="acg-pricing-grid">
            <div className="acg-pricing-card acg-pricing-free">
              <div className="acg-pricing-tier">Free</div>
              <div className="acg-pricing-price">₹0<span>/month</span></div>
              <ul className="acg-pricing-features">
                <li>✓ 50 free credits</li>
                <li>✓ All 3 content types</li>
                <li>✓ 40+ voices (Google)</li>
                <li>✓ 7+ image models</li>
                <li>✓ 6+ video models (Starter)</li>
                <li>✓ MP3/PNG/MP4 download</li>
                <li>✓ Commercial rights</li>
                <li className="acg-pricing-muted">✗ Elite video models</li>
                <li className="acg-pricing-muted">✗ Higher speed tiers</li>
              </ul>
              <Link href={ctaUrl} className="acg-pricing-btn">Start Free →</Link>
            </div>

            <div className="acg-pricing-card acg-pricing-pro">
              <div className="acg-pricing-badge">Most Popular</div>
              <div className="acg-pricing-tier">Creator Lite</div>
              <div className="acg-pricing-price">$9<span>/month</span></div>
              <ul className="acg-pricing-features">
                <li>✓ 300 credits/month</li>
                <li>✓ All 3 content types</li>
                <li>✓ 40+ voices (Google + OpenAI + Azure)</li>
                <li>✓ 7+ image models (all)</li>
                <li>✓ 6+ video models (all, including Elite)</li>
                <li>✓ Up to 4x voice speed</li>
                <li>✓ Priority generation queue</li>
                <li>✓ Email support</li>
              </ul>
              <Link href="/pricing" className="acg-pricing-btn acg-pricing-btn-pro">Get Creator Lite →</Link>
            </div>

            <div className="acg-pricing-card acg-pricing-max">
              <div className="acg-pricing-tier">Creator Pro</div>
              <div className="acg-pricing-price">$29<span>/month</span></div>
              <ul className="acg-pricing-features">
                <li>✓ 1,200 credits/month</li>
                <li>✓ Everything in Creator Lite</li>
                <li>✓ Bulk generation queue</li>
                <li>✓ Priority support</li>
                <li>✓ API access (coming soon)</li>
              </ul>
              <Link href="/pricing" className="acg-pricing-btn">Get Creator Pro →</Link>
            </div>
          </div>

          <div className="acg-pricing-note">
            <p>All plans include full commercial rights. No watermarks. No attribution required.</p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FAQ
      ══════════════════════════════════════ */}
      <section className="acg-faq-section">
        <div className="acg-container">
          <div className="acg-section-eyebrow">❓ FAQ</div>
          <h2 className="acg-section-title">Frequently Asked Questions</h2>

          <div className="acg-faq-grid">
            <article className="acg-faq-item">
              <h3>What is the best AI content generator for creators?</h3>
              <p>
                Scenith is consistently rated as one of the best all-in-one AI content generators for creators.
                Unlike single-purpose tools, Scenith combines voice, image, and video generation in one platform.
                You get access to 40+ AI voices, 7+ image models (GPT, Imagen 4, FLUX, Grok, Stability),
                and 6+ video models (Kling 2.6, Veo 3.1, Wan 2.5). All with one login, one credit system,
                and one workflow. 10,000+ creators use Scenith daily.
              </p>
            </article>

            <article className="acg-faq-item">
              <h3>Can I use Scenith for commercial projects?</h3>
              <p>
                Yes. All content generated on Scenith – voiceovers, images, and videos – comes with
                full commercial rights. You can use them in YouTube videos, TikTok content, advertisements,
                product packaging, client work, and any commercial project. No attribution required.
                No watermarks. This applies to both free and paid plans.
              </p>
            </article>

            <article className="acg-faq-item">
              <h3>How much does Scenith cost compared to other AI tools?</h3>
              <p>
                Scenith starts at $9/month for Creator Lite (300 credits). Compare this to buying
                separate tools: ElevenLabs ($22), Midjourney ($30), Runway ($15) – total $67+/month.
                Scenith replaces all three for 85% less. Even the free plan (50 credits) is enough
                to create multiple voiceovers, images, and short video clips before upgrading.
              </p>
            </article>

            <article className="acg-faq-item">
              <h3>What file formats does Scenith support?</h3>
              <p>
                AI Voice: MP3 (192kbps). AI Image: PNG (up to 2K resolution). AI Video: MP4 (H.264,
                up to 1080p). All files are immediately downloadable after generation and work directly
                in video editors (Premiere Pro, DaVinci Resolve, CapCut, Final Cut), social media platforms,
                and podcast hosting services.
              </p>
            </article>

            <article className="acg-faq-item">
              <h3>Is there a free trial?</h3>
              <p>
                Yes. Scenith offers a free plan with 50 credits – no credit card required. You can generate
                voice, image, and video content with the free plan. This allows you to test the quality
                and workflow before deciding to upgrade. Paid plans start at $9/month and include 300 credits
                plus access to all models and features.
              </p>
            </article>

            <article className="acg-faq-item">
              <h3>What's the difference between Scenith and Canva AI?</h3>
              <p>
                Canva AI is excellent for template-based graphic design and quick social media posts.
                Scenith is purpose-built for content generation from scratch – turning text prompts into
                original voice, image, and video assets. For creators who need to produce original content
                (not just modify templates), Scenith's workflow is significantly faster and more specialised.
                Many creators use both: Scenith for generation, Canva for layout and text overlay.
              </p>
            </article>

            <article className="acg-faq-item">
              <h3>How do credits work on Scenith?</h3>
              <p>
                Credits are Scenith's universal currency. Voice generation costs 1–5 credits per 1,000 characters.
                Image generation costs 10–15 credits per image. Video generation costs 46–186 credits per clip
                (depending on model, duration, resolution, and audio). The free plan includes 50 credits.
                Creator Lite ($9/month) includes 300 credits. Unused credits roll over for one month on paid plans.
              </p>
            </article>

            <article className="acg-faq-item">
              <h3>Does Scenith work for faceless YouTube channels?</h3>
              <p>
                Absolutely. Scenith is one of the best tools for faceless YouTube channels. Use the AI Voice
                generator for narration, the AI Image generator for thumbnails and visual assets, and the
                AI Video generator for B-roll footage. Many successful faceless channels in history, space,
                mythology, and horror niches use Scenith exclusively. The 16:9 video output is perfect for
                YouTube's standard format.
              </p>
            </article>

            <article className="acg-faq-item">
              <h3>What languages does Scenith support for voice generation?</h3>
              <p>
                Scenith supports 20+ languages through Google TTS, including English (US, UK, Australian,
                Indian accents), Hindi, Spanish, French, German, Mandarin, Japanese, Arabic, Italian,
                Portuguese, Russian, and more. OpenAI and Azure voices add additional languages and accents.
                For Hindi content, Scenith offers natural-sounding Hindi voices that don't sound robotic.
              </p>
            </article>

            <article className="acg-faq-item">
              <h3>Can I cancel my subscription anytime?</h3>
              <p>
                Yes. Scenith subscriptions are month-to-month with no long-term contracts. You can cancel
                at any time from your account dashboard. If you cancel, you keep access until the end of
                your billing period. Your generated content remains yours forever – no lock-in.
              </p>
            </article>

            <article className="acg-faq-item">
              <h3>Does Scenith offer an API for developers?</h3>
              <p>
                API access is currently in development and will be available to Creator Pro and Enterprise
                customers. Sign up for updates on the pricing page. For now, the web interface supports
                all generation features with bulk generation capabilities in paid plans.
              </p>
            </article>

            <article className="acg-faq-item">
              <h3>Is my content private on Scenith?</h3>
              <p>
                Yes. Your generated content is private to your account. Scenith does not use your prompts
                or outputs to train AI models. Paid plan users' content is never shown in public galleries.
                Free plan users may have their content featured in anonymous demo galleries (watermarked
                as "Free plan sample").
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════ */}
      <section className="acg-final-section">
        <div className="acg-container">
          <div className="acg-final-inner">
            <div className="acg-final-glow-1" aria-hidden="true" />
            <div className="acg-final-glow-2" aria-hidden="true" />

            <div className="acg-final-eyebrow">
              <span className="acg-final-dot" aria-hidden="true" />
              <span>Start Creating Today</span>
            </div>

            <h2 className="acg-final-title">
              Stop Switching Between AI Tools.
              <span className="acg-final-title-accent"> Start Using One.</span>
            </h2>

            <p className="acg-final-desc">
              Join 10,000+ creators who've simplified their content workflow with Scenith.
              Generate voice, image, and video content from a single dashboard. Start for free.
              No credit card required.
            </p>

            <Link href={ctaUrl} className="acg-final-cta-btn" aria-label="Start creating with Scenith for free">
              <span className="acg-final-btn-glow" aria-hidden="true" />
              <span className="acg-final-btn-content">
                <span className="acg-final-icon" aria-hidden="true">✨</span>
                <span className="acg-final-btn-text">
                  <strong>Start Creating for Free</strong>
                  <small>Voice · Image · Video · 50 free credits · No card required</small>
                </span>
                <span className="acg-final-arrow" aria-hidden="true">→</span>
              </span>
            </Link>

            <div className="acg-final-trust-row">
              <span>🎙️ 40+ AI Voices</span>
              <span>🖼️ 7+ Image Models</span>
              <span>🎬 6+ Video Models</span>
              <span>🚫 Zero Watermarks</span>
              <span>♾️ Commercial Rights</span>
              <span>💳 No Card Required</span>
            </div>

            <p className="acg-final-links">
              <strong>Also explore:</strong>{" "}
              <Link href="/tools/ai-voice-generation" className="acg-flink">AI Voice Generator</Link>
              {" · "}
              <Link href="/tools/ai-image-generation" className="acg-flink">AI Image Generator</Link>
              {" · "}
              <Link href="/tools/ai-video-generation" className="acg-flink">AI Video Generator</Link>
              {" · "}
              <Link href="/tools/faceless-youtube-channel-ai-video-generation" className="acg-flink">Faceless YouTube AI</Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIContentGeneratorForCreatorsPage;