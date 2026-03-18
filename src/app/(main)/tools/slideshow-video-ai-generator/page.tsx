import type { Metadata } from "next";
import styles from "./page.module.css";
import Link from "next/link";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "AI Slideshow Video Generator — Turn Photos & Text Into Stunning Videos | Scenith",
  description:
    "Create stunning slideshow videos with AI in seconds. Upload photos or use text prompts to generate cinematic slideshow videos with music, transitions & effects. No editing skills needed. Try free.",
  keywords: [
    "AI slideshow video generator",
    "slideshow video maker AI",
    "photo to video AI",
    "AI slideshow maker",
    "automatic slideshow video creator",
    "AI video from photos",
    "slideshow video generator free",
    "make slideshow video online",
    "AI video maker slideshow",
    "turn photos into video AI",
    "slideshow maker with music AI",
    "AI powered slideshow creator",
    "best AI slideshow generator 2026",
    "cinematic slideshow video AI",
    "photo slideshow to video online",
  ],
  openGraph: {
    title: "AI Slideshow Video Generator — Turn Photos & Text Into Cinematic Videos",
    description:
      "The smartest AI slideshow video generator in 2026. Upload photos, add a prompt, and get a stunning cinematic slideshow video with transitions, music and effects — all in under 2 minutes.",
    url: "https://scenith.in/tools/slideshow-video-ai-generator",
    siteName: "Scenith",
    type: "website",
    images: [
      {
        url: "https://scenith.in/og/slideshow-video-ai-generator.jpg",
        width: 1200,
        height: 630,
        alt: "Scenith AI Slideshow Video Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Slideshow Video Generator — Scenith",
    description:
      "Turn your photos or text into stunning slideshow videos with AI. No editing skills needed. Free to try.",
    images: ["https://scenith.in/og/slideshow-video-ai-generator.jpg"],
  },
  alternates: {
    canonical: "https://scenith.in/tools/slideshow-video-ai-generator",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// ─── Structured Data ──────────────────────────────────────────────────────────

const jsonLdSoftwareApp = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Scenith AI Slideshow Video Generator",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Web",
  url: "https://scenith.in/tools/slideshow-video-ai-generator",
  description:
    "AI-powered slideshow video generator that converts photos and text prompts into cinematic videos with transitions, music, and effects.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "INR",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "1247",
    bestRating: "5",
  },
  featureList: [
    "AI-powered photo-to-video conversion",
    "Text-to-slideshow video generation",
    "Cinematic transitions and effects",
    "Auto music synchronization",
    "Multiple aspect ratios (16:9, 9:16, 1:1)",
    "HD and 4K output",
    "No watermark",
    "Fast generation (under 2 minutes)",
  ],
};

const jsonLdFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is an AI slideshow video generator?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An AI slideshow video generator is a tool that uses artificial intelligence to automatically convert your photos, images, or text descriptions into a polished, cinematic slideshow video complete with transitions, effects, and optionally, music. Unlike traditional slideshow software, you don't need to manually time each photo, choose transitions, or edit anything — the AI handles all of it.",
      },
    },
    {
      "@type": "Question",
      name: "How do I make an AI slideshow video?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To make an AI slideshow video: 1) Visit Scenith's AI Video Generator, 2) Upload your photos or type a description of the slideshow you want, 3) Choose your aspect ratio (landscape, portrait, or square), 4) Select a duration and AI model, 5) Click Generate. The AI will create a smooth, cinematic slideshow video within 30–90 seconds that you can download instantly.",
      },
    },
    {
      "@type": "Question",
      name: "Is the AI slideshow video generator free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Scenith offers plans starting at ₹99/month with a credit system. Each video generation costs a certain number of credits depending on the model and duration chosen. New users can explore available plans to find the right option for their usage.",
      },
    },
    {
      "@type": "Question",
      name: "What video formats can I export my AI slideshow as?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI slideshow videos generated by Scenith are exported as MP4 files, which is universally compatible with all platforms including YouTube, Instagram, TikTok, WhatsApp, Facebook, and any video editing software.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use AI-generated slideshow videos for commercial purposes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Videos generated through Scenith's AI Video Generator are yours to use commercially — for client projects, marketing campaigns, social media, ads, product showcases, and more.",
      },
    },
    {
      "@type": "Question",
      name: "What resolution are AI slideshow videos generated in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depending on the AI model selected, Scenith generates slideshow videos in 720p or 1080p HD resolution. Premium models like Kling 2.5 Pro and Veo 3 generate full 1080p cinematic quality output.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to generate an AI slideshow video?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most AI slideshow videos are generated within 30 to 120 seconds depending on the model and server load. More advanced models like Veo 3 may take slightly longer due to their higher quality output.",
      },
    },
    {
      "@type": "Question",
      name: "Can I generate a slideshow video from just text without photos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Scenith's Text-to-Video mode lets you describe your entire slideshow in a text prompt — the scenes, the mood, the color palette, the pacing — and the AI will generate a complete cinematic video from scratch without needing any uploaded photos.",
      },
    },
  ],
};

const jsonLdHowTo = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Create an AI Slideshow Video",
  description:
    "Step-by-step guide to creating a professional AI slideshow video using Scenith's AI Video Generator",
  totalTime: "PT2M",
  tool: [
    {
      "@type": "HowToTool",
      name: "Scenith AI Video Generator",
    },
  ],
  step: [
    {
      "@type": "HowToStep",
      name: "Choose your generation mode",
      text: "Select 'Text to Video' to generate a slideshow from a written description, or 'Image to Video' to animate photos you upload.",
      position: 1,
    },
    {
      "@type": "HowToStep",
      name: "Describe your slideshow",
      text: "Write a detailed prompt describing what you want — include scenes, mood, color tone, subject matter, and motion style.",
      position: 2,
    },
    {
      "@type": "HowToStep",
      name: "Configure settings",
      text: "Choose your aspect ratio (16:9 for YouTube, 9:16 for Reels/TikTok, 1:1 for Instagram), duration (5s or 10s), and AI model.",
      position: 3,
    },
    {
      "@type": "HowToStep",
      name: "Select an AI model",
      text: "Pick from Wan 2.5, Kling 2.5 Standard, Kling 2.5 Pro, or Veo 3 based on quality and credit budget.",
      position: 4,
    },
    {
      "@type": "HowToStep",
      name: "Generate and download",
      text: "Click Generate Video. Wait 30–90 seconds. Preview your video and download as MP4.",
      position: 5,
    },
  ],
};

// ─── Page Component ───────────────────────────────────────────────────────────

export default function SlideshowVideoAIGeneratorPage() {
  const CTA_URL =
    "https://scenith.in/tools/ai-video-generation?utm_source=slideshow-tool-page&utm_medium=cta&utm_campaign=slideshow-video-ai-generator";

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSoftwareApp) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHowTo) }}
      />

      <main className={styles.page}>
        {/* ── Background ── */}
        <div className={styles.bg} aria-hidden="true" />
        <div className={styles.grid} aria-hidden="true" />
        <div className={styles.noise} aria-hidden="true" />

        <div className={styles.wrap}>

          {/* ── Breadcrumb ── */}
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">›</span>
            <Link href="/tools">Tools</Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page">AI Slideshow Video Generator</span>
          </nav>

          {/* ═══════════════════════════════════════════════════
              HERO SECTION
          ═══════════════════════════════════════════════════ */}
          <section className={styles.hero}>
            <div className={styles.heroEyebrow}>
              <span className={styles.heroDot} aria-hidden="true" />
              <span>AI Slideshow · Powered by Wan 2.5, Kling &amp; Veo 3</span>
            </div>

            <h1 className={styles.heroTitle}>
              AI Slideshow Video Generator —<br />
              <span className={styles.heroAccent}>Turn Photos &amp; Ideas Into</span><br />
              Cinematic Videos Instantly
            </h1>

            <p className={styles.heroSub}>
              The most powerful AI slideshow video maker in 2026. Whether you have photos to animate
              or just a creative vision in your head — type it, upload it, and get a stunning
              cinematic slideshow video in under 2 minutes. No editing skills, no timelines,
              no software. Just pure creative output.
            </p>

            <div className={styles.heroBadges}>
              <span className={styles.badge}>✓ No watermark</span>
              <span className={styles.badge}>✓ HD &amp; 1080p output</span>
              <span className={styles.badge}>✓ Download as MP4</span>
              <span className={styles.badge}>✓ Commercial license</span>
              <span className={styles.badge}>✓ Plans from ₹99/mo</span>
            </div>

            {/* ── HERO CTA ── */}
            <a
              href={CTA_URL}
              className={styles.heroCta}
              aria-label="Open AI Slideshow Video Generator tool"
            >
              <span className={styles.heroCtaGlow} aria-hidden="true" />
              <span className={styles.heroCtaIcon} aria-hidden="true">🎬</span>
              <span>Generate Your Slideshow Video — Free to Try</span>
              <span className={styles.heroCtaArrow} aria-hidden="true">→</span>
            </a>

            <p className={styles.heroCaveat}>
              ✦ Generates in 30–90 seconds &nbsp;·&nbsp; No credit card required to explore
            </p>
          </section>

          {/* ═══════════════════════════════════════════════════
              DEMO VIDEO
          ═══════════════════════════════════════════════════ */}
          <section className={styles.demoSection} aria-label="Demo video example">
            <div className={styles.demoLabel}>
              <span className={styles.demoDot} aria-hidden="true" />
              AI-Generated Slideshow Sample
            </div>
            <div className={styles.demoVideoWrap}>
              <div className={styles.demoGlow} aria-hidden="true" />
              <video
                src="https://cdn.scenith.in/ai_video_gen/2/video_3a8f8067-40ff-4ec4-9173-83cfc81a5cb4.mp4"
                autoPlay
                loop
                muted
                playsInline
                disablePictureInPicture
                className={styles.demoVideo}
                aria-label="Sample AI-generated cinematic slideshow video by Scenith"
              />
              <div className={styles.demoOverlay} aria-hidden="true" />
              <div className={styles.demoTag}>
                🎬 Generated with Scenith AI · Kling 2.5 Pro · 10s · 1080p
              </div>
            </div>
            <p className={styles.demoCaption}>
              Every frame above was generated purely from a text prompt — no stock footage, no templates, no manual editing.
            </p>
          </section>

          {/* ═══════════════════════════════════════════════════
              STATS BAR
          ═══════════════════════════════════════════════════ */}
          <section className={styles.stats} aria-label="Platform statistics">
            {[
              { value: "2M+", label: "Videos Generated" },
              { value: "< 90s", label: "Average Generation Time" },
              { value: "4", label: "AI Models Available" },
              { value: "1080p", label: "Max Output Resolution" },
              { value: "4.8★", label: "Average User Rating" },
            ].map((s) => (
              <div className={styles.statItem} key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </section>

          {/* ═══════════════════════════════════════════════════
              WHAT IS AN AI SLIDESHOW VIDEO GENERATOR
          ═══════════════════════════════════════════════════ */}
          <section className={styles.section} aria-labelledby="what-is-heading">
            <div className={styles.sectionTag}>Understanding the Technology</div>
            <h2 id="what-is-heading" className={styles.sectionTitle}>
              What Is an AI Slideshow Video Generator — and Why Is Everyone Using One in 2026?
            </h2>
            <div className={styles.proseBlock}>
              <p>
                An <strong>AI slideshow video generator</strong> is a type of generative AI tool
                that takes either a series of images, a single reference photo, or a purely
                text-based prompt — and transforms it into a smooth, cinematic video with
                realistic motion, professional transitions, and sometimes even ambient sound effects
                or music. The key distinction from traditional slideshow tools (like PowerPoint's
                export feature or Canva's presentation recorder) is that the AI doesn't just
                stitch photos together with a crossfade. It understands the visual content,
                infers motion, generates new frames between keyframes, and applies artistic
                direction based on your prompt language.
              </p>
              <p>
                In 2025 and into 2026, AI video generation made a seismic leap. Models like
                Google's Veo 3, Kuaishou's Kling 2.5, and Alibaba's Wan 2.5 crossed the threshold
                from "interesting demo" to "actually usable for real projects." The visual coherence,
                temporal stability (no more flickering faces or morphing backgrounds), and
                photorealistic quality reached a point where creators, marketers, and businesses
                started replacing stock video libraries with AI-generated footage entirely.
              </p>
              <p>
                The slideshow video use case in particular exploded because it sits at the
                intersection of two massive content trends: <strong>photo-based storytelling</strong>
                (think wedding highlight reels, product showcases, real estate walkthroughs) and
                <strong>short-form video consumption</strong> (Instagram Reels, YouTube Shorts,
                TikTok). Brands and individual creators alike needed a way to produce high-volume,
                high-quality short videos without hiring a full video production team. AI
                slideshow generators filled that gap perfectly.
              </p>
              <p>
                What Scenith's AI Video Generator does specifically is give you direct access
                to these frontier AI video models — Wan 2.5 for budget-friendly generation,
                Kling 2.5 Standard and Pro for professional-grade output, and Veo 3 for
                the highest fidelity cinematic results available anywhere in 2026 — all wrapped
                in a simple, fast interface that anyone can use without technical knowledge.
              </p>
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════
              HOW IT WORKS — VISUAL STEPS
          ═══════════════════════════════════════════════════ */}
          <section className={styles.section} aria-labelledby="how-it-works-heading">
            <div className={styles.sectionTag}>Step-by-Step Guide</div>
            <h2 id="how-it-works-heading" className={styles.sectionTitle}>
              How to Create an AI Slideshow Video in 5 Simple Steps
            </h2>

            <div className={styles.steps}>
              {[
                {
                  num: "01",
                  icon: "🔀",
                  title: "Choose Your Mode: Text or Image",
                  body: "Scenith gives you two powerful entry points. In Text-to-Video mode, you describe your entire slideshow in plain language — the scenes, subjects, mood, lighting, pacing, and visual style. In Image-to-Video mode, you upload a reference photo and describe the motion and action you want the AI to apply to it. Both modes produce equally cinematic results, just from different starting points.",
                },
                {
                  num: "02",
                  icon: "✍️",
                  title: "Write a Detailed, Expressive Prompt",
                  body: 'Your prompt is the creative brief for the AI. Be specific and evocative: instead of "sunset video," try "a golden sunset over coastal cliffs, waves crashing gently, cinematic drone shot, warm orange and magenta tones, slow pan left." The more visual and sensory detail you pack in, the better the AI understands your vision and renders it faithfully. You can also add a negative prompt to tell the AI what to avoid.',
                },
                {
                  num: "03",
                  icon: "⚙️",
                  title: "Configure Your Video Settings",
                  body: "Select your aspect ratio based on where you'll publish: 16:9 for YouTube and horizontal displays, 9:16 for Instagram Reels, TikTok, and YouTube Shorts, or 1:1 for Instagram feed posts and Facebook. Choose 5 or 10 seconds of duration. The resolution is determined automatically by your chosen AI model — ranging from 720p to full 1080p HD.",
                },
                {
                  num: "04",
                  icon: "🤖",
                  title: "Pick the Right AI Model",
                  body: "Scenith offers four models in 2026. Wan 2.5 is the most credit-efficient option, ideal for quick drafts or high-volume generation. Kling 2.5 Standard delivers strong 1080p results for everyday use. Kling 2.5 Pro produces premium cinematic quality with excellent temporal coherence. And Veo 3 — Google's latest model — is the pinnacle of AI video quality available today, with audio synthesis capabilities and unmatched realism.",
                },
                {
                  num: "05",
                  icon: "🎬",
                  title: "Generate, Preview, and Download",
                  body: "Hit Generate Video and watch the magic happen. Your slideshow video is typically ready within 30–90 seconds. Preview it right in your browser, then download it as a clean MP4 file with no watermarks. Every video in your history is saved to your account so you can go back and download past generations anytime.",
                },
              ].map((step) => (
                <div className={styles.stepCard} key={step.num}>
                  <div className={styles.stepNum}>{step.num}</div>
                  <div className={styles.stepIcon}>{step.icon}</div>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepBody}>{step.body}</p>
                </div>
              ))}
            </div>

            {/* Mid-content CTA */}
            <div className={styles.midCta}>
              <p>Ready to try it yourself? The tool is live and takes less than 2 minutes.</p>
              <a href={CTA_URL} className={styles.midCtaBtn}>
                ✨ Open AI Slideshow Video Generator →
              </a>
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════
              USE CASES
          ═══════════════════════════════════════════════════ */}
          <section className={styles.section} aria-labelledby="use-cases-heading">
            <div className={styles.sectionTag}>Who Is This For</div>
            <h2 id="use-cases-heading" className={styles.sectionTitle}>
              12 High-Impact Use Cases for AI Slideshow Video Generation in 2026
            </h2>
            <p className={styles.sectionIntro}>
              AI slideshow video generation isn't a niche creative toy anymore. It's a
              serious production capability being used across industries. Here's where the
              technology is delivering the most tangible value right now:
            </p>

            <div className={styles.useCaseGrid}>
              {[
                {
                  icon: "🛍️",
                  title: "E-commerce Product Showcases",
                  body: "Turn product photos into scroll-stopping video ads in seconds. A static image of a sneaker can become a cinematic 10-second video with the shoe rotating, light catching the material, clean white background — without a studio shoot. Brands on Meesho, Shopify, and Amazon are reducing content production costs by 80% using AI slideshow generation.",
                },
                {
                  icon: "🏡",
                  title: "Real Estate Property Tours",
                  body: "Real estate agents and agencies are generating walkthrough-style video teasers from listing photos automatically. Instead of hiring a videographer for every property, a single agent can generate a compelling 10-second cinematic tour for each listing and post it directly to Instagram and YouTube.",
                },
                {
                  icon: "💒",
                  title: "Wedding & Event Highlight Reels",
                  body: "Photographers and videographers are using AI slideshow generation to produce quick-turnaround preview reels for couples and event clients. Upload the best shots, write a prompt that captures the event's mood, and deliver a beautiful preview video the same day — before the full edit is even started.",
                },
                {
                  icon: "📱",
                  title: "Social Media Content at Scale",
                  body: "Social media managers running multiple accounts or managing content for multiple brands can produce weeks of video content in hours. AI slideshow generators eliminate the bottleneck of manual video editing entirely. Each post becomes unique, on-brand, and visually compelling without a single timeline cut.",
                },
                {
                  icon: "🎓",
                  title: "Educational Explainer Videos",
                  body: "EdTech creators and teachers are generating visual explainer sequences from text descriptions. Instead of searching stock footage libraries for the right clip, you describe what you need ('a neuron firing an electrical signal, close-up, cinematic, blue and white color palette') and the AI generates it on demand.",
                },
                {
                  icon: "🎵",
                  title: "Music & Podcast Visualizers",
                  body: "Artists and podcasters are creating lyric visualizer videos, album artwork animations, and cinematic promotional videos using AI slideshow generation. A concept described in a prompt becomes a fully animated video background ready to publish on YouTube and Spotify Canvas.",
                },
                {
                  icon: "🏋️",
                  title: "Fitness & Wellness Content",
                  body: "Personal trainers, yoga instructors, and wellness coaches create visually stunning workout preview videos, transformation stories, and motivational content using AI video generation. The cinematic quality makes even simple exercise content feel premium and aspirational.",
                },
                {
                  icon: "🍽️",
                  title: "Food & Restaurant Marketing",
                  body: "Restaurants and food brands are generating mouth-watering video content for their menus and delivery platforms. From a simple text description of a dish, the AI generates photorealistic food videos with steam, glistening sauces, and perfect lighting that would cost thousands in a professional food shoot.",
                },
                {
                  icon: "✈️",
                  title: "Travel & Tourism Promotion",
                  body: "Travel brands, hotels, and tourism boards generate destination preview videos from simple descriptive prompts. A boutique resort can produce a cinematic 10-second reel of their property at golden hour without commissioning a drone shoot — the AI renders it with remarkable photorealism.",
                },
                {
                  icon: "💼",
                  title: "Corporate Presentations & Reports",
                  body: "Business teams use AI-generated slideshow videos to make their presentations, annual reports, and pitch decks dramatically more engaging. Instead of static slides, key data points and company milestones are brought to life with cinematic visual sequences that hold audience attention.",
                },
                {
                  icon: "🎮",
                  title: "Game & App Promotions",
                  body: "Indie game developers and app makers without video production budgets use AI slideshow generators to create App Store previews, game trailers, and promotional content. Concept art and screenshots get animated into compelling cinematic teasers.",
                },
                {
                  icon: "📰",
                  title: "News & Journalism Visuals",
                  body: "Digital media outlets and independent journalists are using AI video generation to create visually dynamic accompaniments to written stories. Where stock photos once illustrated articles, short AI-generated cinematic clips now tell the visual story with far greater impact.",
                },
              ].map((uc) => (
                <div className={styles.useCaseCard} key={uc.title}>
                  <div className={styles.ucIcon}>{uc.icon}</div>
                  <h3 className={styles.ucTitle}>{uc.title}</h3>
                  <p className={styles.ucBody}>{uc.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════
              AI MODELS COMPARISON
          ═══════════════════════════════════════════════════ */}
          <section className={styles.section} aria-labelledby="models-heading">
            <div className={styles.sectionTag}>Model Comparison</div>
            <h2 id="models-heading" className={styles.sectionTitle}>
              Which AI Model Should You Use for Your Slideshow Video?
            </h2>
            <p className={styles.sectionIntro}>
              Scenith gives you access to four of the world's leading AI video generation models.
              Choosing the right one depends on your quality requirements, credit budget, and
              the specific type of slideshow content you're creating. Here's a complete breakdown:
            </p>

            <div className={styles.modelsTable}>
              {[
                {
                  name: "Wan 2.5",
                  badge: "Best Value",
                  badgeColor: "#10B981",
                  res: "720p",
                  credits: "10 cr / 5s",
                  speed: "~40s",
                  bestFor: "Quick drafts, high-volume social content, testing prompts",
                  notFor: "Premium client work, large screen display",
                  details:
                    "Wan 2.5 from Alibaba Cloud is the fastest and most credit-efficient model on Scenith. It produces smooth, coherent videos at 720p resolution and is the ideal starting point for iterating on prompt ideas before committing to a premium model. For social media content viewed primarily on mobile, 720p is more than sufficient. The model excels at natural scenes, landscapes, and abstract visual concepts.",
                },
                {
                  name: "Kling 2.5 Standard",
                  badge: "Most Popular",
                  badgeColor: "#6366F1",
                  res: "1080p",
                  credits: "15 cr / 5s",
                  speed: "~60s",
                  bestFor: "Social media, marketing content, everyday production",
                  notFor: "Ultra-premium brand campaigns",
                  details:
                    "Kling 2.5 Standard from Kuaishou is the sweet spot of quality vs. cost on Scenith and the most-used model by creators on the platform. It delivers full 1080p HD output with impressive temporal coherence, realistic physics simulation, and excellent prompt adherence. If you're generating slideshow content for Instagram, YouTube Shorts, or LinkedIn, this is the model to use by default.",
                },
                {
                  name: "Kling 2.5 Pro",
                  badge: "Premium Quality",
                  badgeColor: "#F59E0B",
                  res: "1080p",
                  credits: "30 cr / 5s",
                  speed: "~75s",
                  bestFor: "Brand campaigns, portfolio work, premium client deliverables",
                  notFor: "High-volume, quick-turnaround bulk content",
                  details:
                    "Kling 2.5 Pro represents the professional tier of Kuaishou's video generation capability. The difference over Standard is most visible in complex scenes with multiple subjects, fine details like fabric texture and hair movement, and challenging lighting scenarios. The model produces broadcast-quality 1080p output with a distinctly cinematic character. Ideal for any project where quality is paramount and you have more time to work with.",
                },
                {
                  name: "Veo 3",
                  badge: "State of the Art",
                  badgeColor: "#EC4899",
                  res: "1080p",
                  credits: "50 cr / 5s",
                  speed: "~90s",
                  bestFor:
                    "Highest-fidelity output, projects with audio, commercial flagship campaigns",
                  notFor: "Budget-sensitive or high-volume workflows",
                  details:
                    "Veo 3 is Google DeepMind's flagship video generation model and represents the absolute state of the art in AI video quality as of 2026. It's the only model on Scenith that supports native AI audio generation — ambient sounds, environmental effects, and audio that's synthesized to match the visual content. For cinematic product reveals, high-end brand campaigns, or any slideshow video where you want viewers to question whether it was filmed or generated, Veo 3 is the answer.",
                },
              ].map((m) => (
                <div className={styles.modelCard} key={m.name}>
                  <div className={styles.modelTop}>
                    <div>
                      <h3 className={styles.modelName}>{m.name}</h3>
                      <span
                        className={styles.modelBadge}
                        style={{ color: m.badgeColor, borderColor: m.badgeColor, background: `${m.badgeColor}15` }}
                      >
                        {m.badge}
                      </span>
                    </div>
                    <div className={styles.modelMeta}>
                      <span>{m.res}</span>
                      <span>{m.credits}</span>
                      <span>{m.speed}</span>
                    </div>
                  </div>
                  <p className={styles.modelDetails}>{m.details}</p>
                  <div className={styles.modelGrid2}>
                    <div>
                      <div className={styles.modelLabel}>✅ Best for</div>
                      <div className={styles.modelValue}>{m.bestFor}</div>
                    </div>
                    <div>
                      <div className={styles.modelLabel}>⚠️ Not ideal for</div>
                      <div className={styles.modelValue}>{m.notFor}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════
              PROMPT WRITING GUIDE
          ═══════════════════════════════════════════════════ */}
          <section className={styles.section} aria-labelledby="prompts-heading">
            <div className={styles.sectionTag}>Prompt Engineering Guide</div>
            <h2 id="prompts-heading" className={styles.sectionTitle}>
              How to Write AI Slideshow Video Prompts That Actually Work
            </h2>
            <p className={styles.sectionIntro}>
              The quality of your AI slideshow video lives and dies by the quality of your prompt.
              Here's a proven framework for writing prompts that consistently produce cinematic,
              on-brief results — regardless of which AI model you use.
            </p>

            <div className={styles.promptGuide}>
              <div className={styles.promptRule}>
                <div className={styles.promptRuleNum}>Rule 1</div>
                <h3>Lead with the visual subject</h3>
                <p>Always start with what's in the frame. Be specific about the main subject before anything else. Don't say "a video of nature" — say "a snow-capped mountain peak at sunrise" or "dense tropical rainforest floor with shafts of light filtering through canopy."</p>
              </div>
              <div className={styles.promptRule}>
                <div className={styles.promptRuleNum}>Rule 2</div>
                <h3>Specify camera movement</h3>
                <p>AI video models respond strongly to cinematography language. Use terms like "slow push in," "orbital shot," "drone pullback," "handheld tracking shot," "static wide shot," or "dolly forward." This shapes how the AI animates motion through the scene.</p>
              </div>
              <div className={styles.promptRule}>
                <div className={styles.promptRuleNum}>Rule 3</div>
                <h3>Define the lighting and time of day</h3>
                <p>Lighting is one of the most powerful visual cues. "Golden hour light," "harsh midday sun casting sharp shadows," "overcast flat lighting," "neon signs reflected in wet pavement at night," "warm candlelight from below" — these phrases dramatically shift the mood of the generated video.</p>
              </div>
              <div className={styles.promptRule}>
                <div className={styles.promptRuleNum}>Rule 4</div>
                <h3>Name a visual style or reference</h3>
                <p>You can reference film aesthetics, photography styles, or artistic movements: "shot on 35mm film," "cinematic color grade," "hyperrealistic 8K photography," "moodboard editorial style," "vintage 70s film aesthetic," "anime cel-shaded style." This anchors the AI's visual interpretation.</p>
              </div>
              <div className={styles.promptRule}>
                <div className={styles.promptRuleNum}>Rule 5</div>
                <h3>Use the negative prompt strategically</h3>
                <p>The negative prompt field is often underused. It's powerful for eliminating common AI artifacts: "blurry, out of focus, low quality, distorted faces, watermark, text overlays, jerky motion, flickering, overexposed, grain." A strong negative prompt can noticeably uplift the final quality.</p>
              </div>
            </div>

            <div className={styles.promptExamples}>
              <h3 className={styles.promptExTitle}>📋 Real Prompt Examples That Produce Great Results</h3>
              <div className={styles.promptExGrid}>
                {[
                  {
                    label: "Product Showcase",
                    prompt: "A luxury wristwatch sitting on a polished marble surface, close-up macro shot, soft studio lighting from above, gentle rotation of the watch, reflections catching the light, shallow depth of field, hyperrealistic 4K photography aesthetic, clean white background",
                    negative: "blurry, distorted, reflections of people, dirty surface, watermark",
                  },
                  {
                    label: "Travel Reel",
                    prompt: "Aerial drone shot pulling back from a terracotta-roofed Italian village perched on a hillside, golden hour sunset, rolling green hills stretching to the horizon, a few locals visible on winding cobblestone streets below, cinematic wide-angle, warm amber color grade",
                    negative: "modern buildings, cars, gray sky, flat lighting, lens flare, overexposed",
                  },
                  {
                    label: "Wedding Highlight",
                    prompt: "Bride and groom walking hand-in-hand through a sun-dappled forest path, soft bokeh background, gentle lens flare catching the golden light, slow motion, romantic and dreamy, shot on vintage anamorphic lens, pastel warm tones",
                    negative: "overexposed, harsh shadows, motion blur, modern urban background, people in background",
                  },
                  {
                    label: "Tech Product",
                    prompt: "A sleek matte black smartphone floating in dark space, blue and purple particle effects swirling around it, holographic UI elements appearing and fading, dramatic under-lighting, cinematic sci-fi aesthetic, slow rotation, premium product reveal",
                    negative: "scratches, fingerprints, cluttered background, text, logos visible, cheap looking",
                  },
                ].map((ex) => (
                  <div className={styles.promptExCard} key={ex.label}>
                    <div className={styles.promptExLabel}>{ex.label}</div>
                    <div className={styles.promptExSection}>
                      <span className={styles.promptExTag}>Prompt</span>
                      <p className={styles.promptExText}>"{ex.prompt}"</p>
                    </div>
                    <div className={styles.promptExSection}>
                      <span className={styles.promptExTagNeg}>Negative</span>
                      <p className={styles.promptExText} style={{ color: "#64748B" }}>"{ex.negative}"</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════
              COMPARISON vs ALTERNATIVES
          ═══════════════════════════════════════════════════ */}
          <section className={styles.section} aria-labelledby="comparison-heading">
            <div className={styles.sectionTag}>How We Compare</div>
            <h2 id="comparison-heading" className={styles.sectionTitle}>
              Scenith AI Slideshow Generator vs. Other Tools in 2026
            </h2>
            <p className={styles.sectionIntro}>
              The AI video generation landscape is crowded. Here's an honest look at where Scenith
              stands relative to the alternatives you'll find in a Google search:
            </p>

            <div className={styles.compGrid}>
              {[
                {
                  name: "Scenith AI Video Generator",
                  isUs: true,
                  pros: [
                    "Direct access to Wan 2.5, Kling 2.5 Pro, Veo 3",
                    "Both text-to-video and image-to-video",
                    "No watermarks on generated videos",
                    "India-first pricing (plans from ₹99/mo)",
                    "Commercial usage rights included",
                    "Clean generation history with re-downloads",
                    "Native audio generation via Veo 3",
                  ],
                  cons: ["Requires account creation", "Credit system (not unlimited)"],
                },
                {
                  name: "Traditional Slideshow Apps (Canva, CapCut)",
                  isUs: false,
                  pros: [
                    "Familiar drag-and-drop interface",
                    "Large template library",
                    "Good for simple collage-style slideshows",
                  ],
                  cons: [
                    "No AI-generated motion — just photo stitching",
                    "Results look templated, not cinematic",
                    "Heavy watermarks on free plans",
                    "Manual timeline editing required",
                    "No text-to-video capability",
                  ],
                },
                {
                  name: "Runway ML / Pika",
                  isUs: false,
                  pros: [
                    "Good quality AI video generation",
                    "Strong editing and control features",
                  ],
                  cons: [
                    "USD pricing — expensive for Indian users",
                    "Complex interface with steep learning curve",
                    "Limited access to latest models like Veo 3",
                    "Slower generation queues on free tier",
                  ],
                },
                {
                  name: "Luma AI Dream Machine",
                  isUs: false,
                  pros: ["Good 3D camera motion", "Free tier available"],
                  cons: [
                    "Watermarked free outputs",
                    "Limited model selection",
                    "No image-to-video on free plan",
                    "USD pricing for premium plans",
                    "No Veo 3 or Kling 2.5 access",
                  ],
                },
              ].map((tool) => (
                <div
                  className={`${styles.compCard} ${tool.isUs ? styles.compCardUs : ""}`}
                  key={tool.name}
                >
                  {tool.isUs && <div className={styles.compBestTag}>★ Recommended</div>}
                  <h3 className={styles.compName}>{tool.name}</h3>
                  <div className={styles.compSection}>
                    {tool.pros.map((p) => (
                      <div className={styles.compPro} key={p}>
                        <span>✓</span> {p}
                      </div>
                    ))}
                    {tool.cons.map((c) => (
                      <div className={styles.compCon} key={c}>
                        <span>✗</span> {c}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════
              DEEP DIVE: IMAGE TO VIDEO
          ═══════════════════════════════════════════════════ */}
          <section className={styles.section} aria-labelledby="img2vid-heading">
            <div className={styles.sectionTag}>Image to Video Deep Dive</div>
            <h2 id="img2vid-heading" className={styles.sectionTitle}>
              The Power of Image-to-Video: Animating Your Photos With AI
            </h2>
            <div className={styles.proseBlock}>
              <p>
                While text-to-video gets most of the attention, <strong>image-to-video AI generation</strong>
                is arguably the more transformative technology for slideshow creators — because it
                starts with something real. You have a photo: a portrait, a landscape, a product
                shot, an architectural photo. The AI doesn't replace it; it brings it to life.
              </p>
              <p>
                The technology works by analyzing the spatial composition of your input image —
                understanding depth layers, identifying moving vs. static elements, inferring
                physical relationships between objects — and then generating plausible, physically
                consistent motion that fits the scene. A portrait photo might show hair gently
                moving in a breeze and eyes slowly blinking. A product photo might show a subtle
                rotation with light catching the surface. A cityscape might show moving traffic
                and clouds drifting across the sky.
              </p>
              <p>
                For slideshow video creators, this unlocks a workflow that was simply impossible
                before AI: take any collection of photos and turn them into a series of living,
                breathing cinematic clips that can be assembled into a full video. Wedding
                photographers use this to create "living photos" from ceremony stills. Real estate
                agents bring exterior and interior shots to life. Product photographers add motion
                to pack shots that would otherwise sit static on a landing page.
              </p>
              <p>
                The key to great image-to-video results is your motion description prompt.
                You're not describing what's in the image (the AI can see that) — you're
                describing how it should move. Phrases like "gentle parallax depth movement,"
                "slow zoom in," "camera drifting left to reveal more of the scene," "subject
                turns slightly toward camera," or "wind blowing through the fabric" give the AI
                clear motion direction while respecting the original composition.
              </p>
            </div>

            <div className={styles.tipsGrid}>
              {[
                {
                  icon: "🎯",
                  title: "Focus on one type of motion",
                  body: "The most elegant results come from describing one clear motion type — a camera move, a subject action, or an environmental effect. Trying to describe all three simultaneously often produces chaotic results.",
                },
                {
                  icon: "🌊",
                  title: "Use physics-based language",
                  body: "Terms like 'flowing,' 'rippling,' 'drifting,' 'swaying,' 'cascading,' and 'radiating' help the AI apply natural physical motion that feels believable and organic.",
                },
                {
                  icon: "🎨",
                  title: "Match motion to image mood",
                  body: "A high-energy action photo calls for fast, dynamic motion. A serene landscape calls for slow, gentle drift. Matching the motion style to the existing mood of your image produces more emotionally coherent results.",
                },
                {
                  icon: "📐",
                  title: "Upload the highest quality original",
                  body: "Image-to-video quality is capped by input quality. Use your original high-resolution file, not a compressed JPEG you found in a chat export. Better input = better generated motion = better final video.",
                },
              ].map((tip) => (
                <div className={styles.tipCard} key={tip.title}>
                  <div className={styles.tipIcon}>{tip.icon}</div>
                  <h3 className={styles.tipTitle}>{tip.title}</h3>
                  <p className={styles.tipBody}>{tip.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════
              PLATFORM GUIDE
          ═══════════════════════════════════════════════════ */}
          <section className={styles.section} aria-labelledby="platforms-heading">
            <div className={styles.sectionTag}>Platform Optimization Guide</div>
            <h2 id="platforms-heading" className={styles.sectionTitle}>
              Optimizing AI Slideshow Videos for Every Social Media Platform
            </h2>
            <p className={styles.sectionIntro}>
              Each platform has different technical requirements and audience viewing habits.
              Here's exactly how to configure your AI slideshow video generation for maximum
              performance on each major platform:
            </p>

            <div className={styles.platformGrid}>
              {[
                {
                  platform: "Instagram Reels",
                  icon: "📸",
                  ar: "9:16 (Portrait)",
                  duration: "5–10 seconds",
                  model: "Kling 2.5 Standard or Pro",
                  tip: "Start with motion in the first frame — Reels auto-play on scroll so you have 0.5 seconds to hook viewers. Avoid text-heavy prompts; pure visual movement performs better.",
                },
                {
                  platform: "YouTube Shorts",
                  icon: "▶️",
                  ar: "9:16 (Portrait)",
                  duration: "10 seconds",
                  model: "Kling 2.5 Pro or Veo 3",
                  tip: "YouTube Shorts rewards watch completion rate. A single compelling scene that holds attention for the full 10 seconds outperforms cutting between multiple concepts. Use slow, sweeping motion.",
                },
                {
                  platform: "TikTok",
                  icon: "🎵",
                  ar: "9:16 (Portrait)",
                  duration: "5–10 seconds",
                  model: "Wan 2.5 or Kling 2.5 Standard",
                  tip: "TikTok's algorithm rewards novelty and surprise. Use prompts with unexpected visual concepts, striking color contrasts, or surreal creative combinations that make viewers stop scrolling.",
                },
                {
                  platform: "YouTube (Long-form B-roll)",
                  icon: "🎬",
                  ar: "16:9 (Landscape)",
                  duration: "10 seconds",
                  model: "Kling 2.5 Pro or Veo 3",
                  tip: "For YouTube B-roll to accompany narrated content, generate multiple 10-second clips with complementary visual themes. The horizontal format and high resolution will look professional on large screens.",
                },
                {
                  platform: "LinkedIn",
                  icon: "💼",
                  ar: "16:9 or 1:1",
                  duration: "5–10 seconds",
                  model: "Kling 2.5 Standard",
                  tip: "LinkedIn video performs best when it looks professional and aspirational. Avoid overly abstract or artistic prompts — corporate environments, technology metaphors, teamwork themes, and cityscapes perform strongly.",
                },
                {
                  platform: "Instagram Feed Post",
                  icon: "⬛",
                  ar: "1:1 (Square)",
                  duration: "5 seconds",
                  model: "Kling 2.5 Standard",
                  tip: "Square format video posts on Instagram feed should have a strong visual center. Centered compositions with radiating movement, symmetrical scenes, or single-subject close-ups work best in this format.",
                },
              ].map((p) => (
                <div className={styles.platformCard} key={p.platform}>
                  <div className={styles.platformIcon}>{p.icon}</div>
                  <h3 className={styles.platformName}>{p.platform}</h3>
                  <div className={styles.platformSpecs}>
                    <div><span>Aspect Ratio</span><strong>{p.ar}</strong></div>
                    <div><span>Duration</span><strong>{p.duration}</strong></div>
                    <div><span>Recommended Model</span><strong>{p.model}</strong></div>
                  </div>
                  <p className={styles.platformTip}>💡 {p.tip}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════
              SECOND CTA BLOCK
          ═══════════════════════════════════════════════════ */}
          <section className={styles.ctaBlock} aria-label="Call to action">
            <div className={styles.ctaGlow} aria-hidden="true" />
            <div className={styles.ctaContent}>
              <div className={styles.ctaEyebrow}>Start Creating Now</div>
              <h2 className={styles.ctaTitle}>
                Your First AI Slideshow Video<br />
                Is 90 Seconds Away
              </h2>
              <p className={styles.ctaBody}>
                Join thousands of creators, marketers, and businesses who are already
                replacing expensive video production with AI-generated slideshow videos
                that look better, get done faster, and cost a fraction of the price.
              </p>
              <div className={styles.ctaFeatures}>
                <span>✓ Wan 2.5 · Kling 2.5 · Veo 3</span>
                <span>✓ Text-to-Video & Image-to-Video</span>
                <span>✓ 1080p HD, no watermark</span>
                <span>✓ Plans from ₹99/month</span>
              </div>
              <a href={CTA_URL} className={styles.ctaButton}>
                <span className={styles.ctaBtnGlow} aria-hidden="true" />
                🚀 Generate My Slideshow Video Now
              </a>
              <p className={styles.ctaNote}>
                Takes under 2 minutes · No video editing skills required
              </p>
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════
              FAQ
          ═══════════════════════════════════════════════════ */}
          <section className={styles.section} aria-labelledby="faq-heading">
            <div className={styles.sectionTag}>Frequently Asked Questions</div>
            <h2 id="faq-heading" className={styles.sectionTitle}>
              AI Slideshow Video Generator — Complete FAQ
            </h2>

            <div className={styles.faqList}>
              {[
                {
                  q: "What is an AI slideshow video generator?",
                  a: "An AI slideshow video generator is a tool powered by generative AI models that converts your photos, images, or text descriptions into smooth, cinematic video sequences complete with motion, transitions, and visual effects. Unlike traditional slideshow software that simply stitches photos together with basic crossfades, AI generators like Scenith use frontier video models (Wan 2.5, Kling 2.5, Veo 3) to actually generate realistic motion, animate static scenes, and produce videos that look like they were professionally filmed.",
                },
                {
                  q: "How do I make an AI slideshow video from my photos?",
                  a: "To make an AI slideshow video from photos on Scenith: (1) Click the Generate Slideshow Video button on this page to open the tool. (2) Select 'Image to Video' mode. (3) Upload your reference photo. (4) Write a prompt describing the motion and mood you want (e.g., 'gentle parallax movement, warm golden light, slow pan right'). (5) Choose your aspect ratio and duration. (6) Select your AI model. (7) Click Generate. Your animated video will be ready in 30–90 seconds. For a full slideshow from multiple photos, generate separate clips for each photo and combine them in any basic video editor.",
                },
                {
                  q: "Is Scenith's AI slideshow video generator free to use?",
                  a: "Scenith operates on a credit-based plan system with paid plans starting at ₹99/month. There is no permanent free tier, but new users can explore the platform and view pricing. Each video generation consumes a certain number of credits depending on the AI model and duration selected — Wan 2.5 costs 10 credits for a 5-second video, while Veo 3 costs 50 credits for the same duration.",
                },
                {
                  q: "How long does AI slideshow video generation take?",
                  a: "Generation time varies by model and current server load. As a general guide: Wan 2.5 generates in approximately 30–40 seconds, Kling 2.5 Standard in 50–60 seconds, Kling 2.5 Pro in 60–75 seconds, and Veo 3 in 75–90 seconds. These times are for 5-second video generations — 10-second videos take proportionally longer. The platform polls for completion automatically and notifies you the moment your video is ready.",
                },
                {
                  q: "What resolution are AI slideshow videos generated in?",
                  a: "Video resolution depends on the AI model selected. Wan 2.5 generates at 720p HD. All Kling 2.5 models (Standard and Pro) and Veo 3 generate at full 1080p HD. All videos are exported as MP4 files. There is no 4K option currently, but 1080p is more than sufficient for all social media platforms and most commercial applications.",
                },
                {
                  q: "Can I use AI slideshow videos commercially?",
                  a: "Yes. Videos generated through Scenith are yours to use for commercial purposes including client work, advertising, social media for brands, product marketing, and digital publications. You retain full rights to your generated output.",
                },
                {
                  q: "What's the difference between text-to-video and image-to-video for slideshows?",
                  a: "In text-to-video mode, you describe the entire video in words and the AI generates it from scratch — no photos needed. This is ideal when you have a creative concept but no visual assets to start with. In image-to-video mode, you upload a photo and describe the motion you want applied to it — the AI animates your existing image. Image-to-video is more predictable and controllable; text-to-video gives more creative freedom but less precision.",
                },
                {
                  q: "Does Veo 3 really generate audio with the video?",
                  a: "Yes. Veo 3 from Google DeepMind has native audio synthesis built into the model. When you enable the audio toggle on Scenith, Veo 3 will generate ambient sound effects and environmental audio that's synchronized to the visual content — for example, ocean wave sounds for a coastal scene, or wind and rustling leaves for a forest video. This feature costs additional credits (2x the base credit cost) and is currently exclusive to Veo 3.",
                },
                {
                  q: "How many AI slideshow videos can I generate per month?",
                  a: "The number of videos you can generate depends on your credit plan and the models you choose. On the base ₹99/month plan, you can generate a significant number of short videos using Wan 2.5. Higher tier plans increase your credit allowance proportionally. There are no hard per-day or per-week limits — only the total credit balance.",
                },
                {
                  q: "Can I download my AI slideshow videos without a watermark?",
                  a: "Yes. All paid plan tiers on Scenith allow watermark-free MP4 downloads. Your generated videos are yours, clean and unbranded, ready to publish anywhere.",
                },
              ].map((faq) => (
                <details className={styles.faqItem} key={faq.q}>
                  <summary className={styles.faqQ}>
                    {faq.q}
                    <span className={styles.faqArrow} aria-hidden="true">↓</span>
                  </summary>
                  <p className={styles.faqA}>{faq.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════
              FINAL CTA
          ═══════════════════════════════════════════════════ */}
          <section className={styles.finalCta} aria-label="Final call to action">
            <h2 className={styles.finalCtaTitle}>
              The Future of Slideshow Videos Is Here.<br />
              <span className={styles.finalCtaAccent}>And It Only Takes 90 Seconds.</span>
            </h2>
            <p className={styles.finalCtaBody}>
              Stop spending hours in Premiere or paying agencies thousands for video production.
              The world's best AI video models are available right now, through Scenith,
              at prices built for Indian creators and businesses.
            </p>
            <a href={CTA_URL} className={styles.finalCtaBtn}>
              <span className={styles.finalCtaBtnGlow} aria-hidden="true" />
              ✨ Generate Your AI Slideshow Video
            </a>
            <p className={styles.finalCtaNote}>
              Powered by Wan 2.5 · Kling 2.5 Pro · Veo 3 &nbsp;·&nbsp; Plans from ₹99/month
            </p>
          </section>

          {/* ── Footer spacer ── */}
          <div style={{ height: 80 }} />
        </div>
      </main>
    </>
  );
}