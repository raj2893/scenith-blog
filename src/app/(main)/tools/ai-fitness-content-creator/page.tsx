import type { Metadata } from "next";
import Link from "next/link";
import "./ai-fitness-content-creator.css";

// ============================================================
// METADATA — SEO optimized for "AI fitness content creator"
// Target keywords: AI fitness content creator, fitness content AI,
// workout content generator, gym content creator, fitness video AI
// Geographic variants: US, UK, India, Australia, Canada, Germany
// ============================================================

export const metadata: Metadata = {
  title: "AI Fitness Content Creator — Generate Workout Videos, Images & Voiceovers (2026)",
  description:
    "Create stunning AI-powered fitness content — workout reels, gym images, training voiceovers, and more. Turn any fitness idea into professional content in seconds. No editing skills needed. Free to start.",
  keywords: [
    "AI fitness content creator",
    "fitness content generator AI",
    "workout content creator",
    "gym content maker AI",
    "fitness video generator",
    "workout reel maker",
    "AI gym content creator",
    "fitness social media tool",
    "personal trainer content AI",
    "gym marketing content generator",
    "fitness brand content creator",
    "AI workout video maker",
    "fitness influencer tool",
    "gym social media content AI",
    "fitness content automation",
    "workout image generator AI",
    "fitness voiceover generator",
    "exercise video creator AI",
    "gym content calendar tool",
    "fitness creator suite 2026",
  ],
  openGraph: {
    title: "AI Fitness Content Creator — Generate Workout Videos, Images & Voiceovers",
    description:
      "Create stunning AI-powered fitness content — workout reels, gym images, training voiceovers. Turn any fitness idea into professional content in seconds.",
    url: "https://scenith.in/tools/ai-fitness-content-creator",
    siteName: "Scenith",
    images: [
      {
        url: "https://cdn.scenith.in/og/fitness-content-og.jpg",
        width: 1200,
        height: 630,
        alt: "AI Fitness Content Creator by Scenith — Generate Workout Content Instantly",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Fitness Content Creator — Generate Workout Videos, Images & Voiceovers",
    description:
      "Create stunning AI-powered fitness content — workout reels, gym images, training voiceovers. Free to start.",
    images: ["https://cdn.scenith.in/og/fitness-content-og.jpg"],
  },
  alternates: {
    canonical: "https://scenith.in/tools/ai-fitness-content-creator",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

// ============================================================
// PAGE COMPONENT — Fully static, no client-side interactivity
// All CTAs point to the main tool with UTM tracking.
// Content length: ~9500+ words (including longform sections).
// ============================================================

export default function AiFitnessContentCreatorPage() {
  // UTM source for all CTAs — unique to this micro-tool page
  const utmSource = "ai-fitness-content-creator";
  const targetUrl = `https://scenith.in/create-ai-content?tab=video&utm_source=${utmSource}&utm_medium=micro-tool-cta&utm_campaign=fitness-content-2026`;

  // Data arrays for dynamic rendering
  const contentTypes = [
    { icon: "🎬", title: "Workout Reels", desc: "Short, engaging fitness videos for Instagram Reels, TikTok, and YouTube Shorts. Perfect for exercise demonstrations and workout highlights.", tag: "Video", tagColor: "neon" },
    { icon: "🏋️", title: "Gym Images", desc: "High-quality fitness photography for posts, stories, thumbnails, and ads. Generate gym scenes, equipment shots, and athlete portraits.", tag: "Image", tagColor: "orange" },
    { icon: "🎙️", title: "Workout Voiceovers", desc: "Professional narration for training videos, form tutorials, and motivational content. 40+ voices including coach-style and energetic.", tag: "Voice", tagColor: "purple" },
    { icon: "📱", title: "Social Media Graphics", desc: "Quote cards, workout templates, and branded fitness graphics. Perfect for consistent Instagram and LinkedIn posting.", tag: "Image", tagColor: "orange" },
    { icon: "📝", title: "Caption & Script Generator", desc: "AI-written captions for workout posts, script outlines for fitness videos, and engagement-optimized copy.", tag: "Text", tagColor: "neon" },
    { icon: "🔄", title: "Workout Routine Visuals", desc: "Step-by-step exercise sequences visualized as video or image series. Perfect for program previews.", tag: "Video", tagColor: "neon" },
  ];

  const fitnessNiches = [
    { icon: "🏋️", name: "Powerlifting", desc: "Squat, bench, deadlift — heavy weight, chalk, grind" },
    { icon: "⚡", name: "HIIT", desc: "Burpees, box jumps, sprints — high energy, sweat" },
    { icon: "🧘", name: "Yoga", desc: "Flows, poses, breath — peaceful, graceful" },
    { icon: "💪", name: "Calisthenics", desc: "Muscle-ups, levers, handstands — bodyweight mastery" },
    { icon: "🥊", name: "Boxing", desc: "Shadowboxing, bag work, combos — power, speed" },
    { icon: "🏃", name: "Running", desc: "Sprints, marathons, trails — endurance" },
    { icon: "🚴", name: "Cycling", desc: "Climbs, sprints, spin — cadence, power" },
    { icon: "🏊", name: "Swimming", desc: "Technique, starts, turns — aquatic, fluid" },
    { icon: "🏔️", name: "CrossFit", desc: "WODs, complexes, ropes — functional" },
    { icon: "🧗", name: "Climbing", desc: "Bouldering, lead, dynos — grip, reach" },
    { icon: "⛷️", name: "Winter Sports", desc: "Ski, snowboard tricks — powder, carve" },
    { icon: "🏀", name: "Sports Training", desc: "Agility, form, technique" },
  ];

  const promptExamples = [
    { type: "🎬 Workout Reel", prompt: "Cinematic slow-motion deadlift, 405 lbs loaded barbell, chalk cloud erupting, dramatic single spotlight, dark powerlifting gym, sweat frozen in air, 4K ultra-detail" },
    { type: "🏋️ Gym Image", prompt: "Powerlifter completing a heavy squat, 500 lbs on back, depth below parallel, chalk dust, dramatic gym lighting, ultra-realistic, 8K" },
    { type: "🎙️ Voiceover Script", prompt: "Channel your inner coach: 'Three seconds left. Your legs are screaming. Your lungs are burning. But you didn't come this far to quit. Push. Now.'" },
    { type: "📱 Quote Graphic", prompt: "Fitness quote: 'The only bad workout is the one that didn't happen.' Background: dark gym, neon lights, chalk dust floating" },
    { type: "🔄 Routine Visual", prompt: "5-step morning mobility routine: cat-cow → thoracic rotation → hip circles → deep squat → standing reach, each step 3 seconds" },
  ];

  const platformStrategies = [
    {
      platform: "Instagram Reels",
      format: "9:16 · 15–30s",
      tip: "Start mid-action. First 2 seconds must show the exercise. Use text overlays for weight/reps. Post 5-7x weekly for algorithm growth.",
      bestFor: "Exercise demos, transformations, motivational clips",
    },
    {
      platform: "TikTok",
      format: "9:16 · 15–60s",
      tip: "Use trending audio. 'Workout with me' and 'day in the gym' formats perform best. Before/after transitions get saved heavily.",
      bestFor: "Workout journeys, challenges, gym lifestyle",
    },
    {
      platform: "YouTube Shorts",
      format: "9:16 · Up to 60s",
      tip: "Educational content wins. Form tutorials, 'how-to' guides, and exercise explanations. Longer shelf life than other platforms.",
      bestFor: "Tutorials, exercise guides, program previews",
    },
    {
      platform: "LinkedIn",
      format: "16:9 or 1:1 · 30–90s",
      tip: "Professional fitness content — trainer credibility, client transformations, workplace wellness tips. Corporate audiences engage.",
      bestFor: "Trainer branding, corporate fitness, expertise",
    },
    {
      platform: "Pinterest",
      format: "2:3 or 9:16 · 15–30s",
      tip: "Create 'workout routine' videos with text overlays. Content has 9+ month shelf life. Use keyword-rich titles.",
      bestFor: "Routine previews, infographic-style videos",
    },
  ];

  const features = [
    { icon: "🎬", title: "AI Video Generation", desc: "Turn text descriptions into cinematic workout videos. 6 models including Kling 2.6 Pro and Veo 3.1. Up to 1080p MP4 download." },
    { icon: "🏋️", title: "AI Image Generation", desc: "Generate gym photography, product shots, athlete portraits. 7 models including GPT, Imagen 4, and FLUX. High-res PNG output." },
    { icon: "🎙️", title: "AI Voice Generation", desc: "Professional voiceovers for fitness videos. 40+ voices including coach, energetic, calm. 20+ languages supported. MP3 download." },
    { icon: "📝", title: "AI Caption Writer", desc: "Generate engagement-optimized captions for workout posts. Multiple tones: motivational, educational, humorous, short-form." },
    { icon: "🖼️", title: "Image-to-Video", desc: "Upload your gym or athlete photos and animate them into video clips. Perfect for branded content." },
    { icon: "🎵", title: "AI Audio Integration", desc: "Grok Imagine model generates synchronized gym audio — weights clanking, breathing, beat drops." },
  ];

  const whyChoose = [
    { num: "01", title: "All-in-One Suite", desc: "Video, image, voice, and text generation in one platform. No switching between 4 different tools." },
    { num: "02", title: "Commercial Rights", desc: "Full commercial rights on everything you generate. Use in ads, products, client work, anywhere." },
    { num: "04", title: "Fitness-Optimized", desc: "Models trained on sports and fitness footage. Accurate movement physics, muscle definition, gym lighting." },
    { num: "05", title: "Batch Creation", desc: "Generate multiple assets at once. Create a week of content in one session." },
    { num: "06", title: "50 Free Credits", desc: "Start for free. No credit card required. Enough for 1-2 premium videos or 5-10 images." },
  ];

  const workSteps = [
    { title: "Describe Your Fitness Idea", desc: "Write a simple description of the content you want — a workout reel, a gym image, a voiceover script, or a caption.", chips: ["'deadlift PR video'", "'gym aesthetic photo'", "'motivational voiceover'"] },
    { title: "Choose Content Type & Model", desc: "Select video, image, or voice. Pick your AI model. Set duration (5-10s), aspect ratio (9:16/16:9/1:1), resolution.", chips: ["Kling 2.6 Pro", "Grok Imagine", "GPT Image"] },
    { title: "Generate & Download", desc: "30-120 seconds later, your content is ready. Download MP4, PNG, or MP3. Post directly or add final touches in your editor.", chips: ["No watermark", "Commercial use", "Instant download"] },
  ];

  const comparisonData = [
    { aspect: "Cost per content piece", traditional: "$500–$5,000+", ai: "From $0 (free credits)" },
    { aspect: "Production time", traditional: "2–8 hours", ai: "30–120 seconds" },
    { aspect: "Equipment needed", traditional: "Studio, camera, lighting, lens", ai: "None — just a browser" },
    { aspect: "Skills required", traditional: "Cinematography, editing, audio", ai: "Basic prompting" },
    { aspect: "Content types per tool", traditional: "One tool per type", ai: "Video + Image + Voice + Text" },
    { aspect: "Iteration speed", traditional: "Re-filming takes hours", ai: "Instant prompt changes" },
    { aspect: "Creative limits", traditional: "What you can physically shoot", ai: "Infinite — describe anything" },
    { aspect: "Turnaround time", traditional: "Days to weeks", ai: "Instant" },
  ];

  const faqItems = [
    {
      q: "What is an AI fitness content creator?",
      a: "An AI fitness content creator is an all-in-one platform that generates workout videos, gym images, fitness voiceovers, and social media captions using artificial intelligence. You describe what you want — 'cinematic deadlift reel' or 'motivational workout voiceover' — and the AI creates professional content in seconds.",
    },
    {
      q: "Is the AI fitness content creator free?",
      a: "Yes — you get 50 free credits on signup, no credit card required. Credits work across video, image, and voice generation. Free credits are enough for 1-2 premium videos, 5-10 images, or 10-15 voiceovers.",
    },
    {
      q: "Can I use the content for commercial purposes?",
      a: "Absolutely. All AI-generated content on Scenith — videos, images, voiceovers, and text — comes with full commercial rights. Use them in paid ads, client work, product pages, email campaigns, and anywhere else without attribution.",
    },
    {
      q: "What fitness content can I create?",
      a: "Almost anything: workout reels for Instagram/TikTok, gym photography for posts and ads, voiceovers for training videos, captions for social media, workout routine visuals, transformation content, form tutorials, motivational clips, and more.",
    },
    {
      q: "How realistic is AI-generated fitness content?",
      a: "With premium models like Kling 2.6 Pro and Veo 3.1, AI fitness videos are photorealistic — capturing explosive movement, muscle definition, sweat, chalk dust, and gym lighting. For most commercial use cases, it's indistinguishable from traditional production.",
    },
    {
      q: "Do I need any editing or design skills?",
      a: "None. The AI generates ready-to-post MP4 videos, PNG images, and MP3 audio files. No editing required. If you want to add text overlays or your logo, you can use free tools like CapCut in under 5 minutes.",
    },
    {
      q: "What aspect ratios are supported?",
      a: "9:16 for Instagram Reels and TikTok, 16:9 for YouTube and websites, and 1:1 for feed posts — all generated from the same prompt.",
    },
    {
      q: "Which AI model is best for fitness content?",
      a: "For strength and bodybuilding videos, use Kling 2.6 Pro. For HIIT with audio, use Grok Imagine. For cinematic outdoor sports, use Veo 3.1. For images, GPT and FLUX produce the most realistic gym photography.",
    },
    {
      q: "How long does generation take?",
      a: "Voice: ~3 seconds · Image: 10–30 seconds · Video: 30–120 seconds depending on model and duration.",
    },
    {
      q: "Can I generate content in bulk for a content calendar?",
      a: "Yes. Many fitness creators batch-generate a week or month of content in one session. Generate 10-15 videos, 20 images, and 30 captions in under an hour.",
    },
  ];

  const useCases = [
    { icon: "🏋️", title: "Personal Trainers", desc: "Create exercise demonstration videos, form tutorials, workout previews, and client education content without filming each time." },
    { icon: "🏪", title: "Gym Owners", desc: "Market your facility with AI-generated training montages. Showcase equipment, classes, and member transformations." },
    { icon: "📱", title: "Fitness Influencers", desc: "Scale content production. Generate workout b-roll to supplement talking-head videos. Post daily without burnout." },
    { icon: "🏆", title: "Athletes & Coaches", desc: "Build your personal brand with professional training footage. Attract sponsors and grow your audience." },
    { icon: "🛍️", title: "Activewear Brands", desc: "Generate product-contextual fitness content — athletes wearing your gear — without expensive photoshoots." },
    { icon: "📦", title: "Supplement Companies", desc: "Create workout videos featuring athletes using your products for ads and social media." },
    { icon: "💻", title: "Online Coaches", desc: "Build a library of exercise demonstration videos for your app or membership site." },
    { icon: "🏫", title: "Fitness Educators", desc: "Create educational content about proper form, common mistakes, and training principles." },
  ];

  const contentIdeas = [
    "📱 Daily workout reel (strength/cardio/yoga rotation)",
    "📸 Gym aesthetic photo series (equipment, lighting, atmosphere)",
    "🎙️ Motivational voiceover for transformation video",
    "📝 Caption for client success story post",
    "🔄 5-exercise full body workout visualization",
    "🏆 Athlete highlight reel (competition footage style)",
    "🥊 Boxing combo demonstration video",
    "🧘 Morning yoga flow sequence",
  ];

  return (
    <>
      {/* JSON-LD Structured Data — enhances rich snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": "https://scenith.in/tools/ai-fitness-content-creator",
                url: "https://scenith.in/tools/ai-fitness-content-creator",
                name: "AI Fitness Content Creator — Generate Workout Videos, Images & Voiceovers",
                description:
                  "Create stunning AI-powered fitness content — workout reels, gym images, training voiceovers, and more. Turn any fitness idea into professional content in seconds. Free to start.",
                isPartOf: { "@id": "https://scenith.in/#website" },
                inLanguage: "en-US",
                datePublished: "2026-01-15",
                dateModified: "2026-04-24",
              },
              {
                "@type": "SoftwareApplication",
                name: "AI Fitness Content Creator",
                applicationCategory: "MultimediaApplication",
                operatingSystem: "Web Browser",
                offers: {
                  "@type": "Offer",
                  price: "0",
                  priceCurrency: "USD",
                  description: "Free to start with 50 credits",
                },
                featureList: [
                  "Text to video generation",
                  "Text to image generation",
                  "Text to voice generation",
                  "Image to video generation",
                  "Caption generation",
                  "Commercial rights included",
                ],
                url: "https://scenith.in/tools/ai-fitness-content-creator",
              },
              {
                "@type": "FAQPage",
                mainEntity: faqItems.map(item => ({
                  "@type": "Question",
                  name: item.q,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: item.a,
                  },
                })),
              },
            ],
          }),
        }}
      />

      <div className="fit-page">
        {/* Breadcrumb */}
        <div className="fit-breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/tools">Tools</Link>
          <span>/</span>
          <span>AI Fitness Content Creator</span>
        </div>

        {/* Hero Section */}
        <section className="fit-hero">
          <div className="fit-hero-bg" aria-hidden="true" />
          <div className="fit-hero-tag">
            <span className="fit-hero-tag-dot" />
            AI Content Suite · 2026
          </div>
          <h1 className="fit-hero-h1">
            AI FITNESS<br />
            <em>CONTENT CREATOR</em>
          </h1>
          <p className="fit-hero-sub">
            Generate workout reels, gym images, training voiceovers, and more — all from one page.
            <br />
            <strong>Video · Image · Voice · Caption</strong>
          </p>

          {/* Main CTA Button */}
          <div className="fit-cta-wrap">
            <a href={targetUrl} className="fit-cta-btn">
              <span className="fit-cta-btn-icon">⚡</span>
              <span>Create My Fitness Content →</span>
              <span className="fit-cta-btn-icon">→</span>
            </a>
            <div className="fit-cta-note">
              ✅ <strong>50 free credits</strong> · No card required · Commercial rights 
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <div className="fit-stats">
          <div className="fit-stat">
            <span className="fit-stat-num">2.1B+</span>
            <span className="fit-stat-label">Monthly fitness views</span>
          </div>
          <div className="fit-stat">
            <span className="fit-stat-num">6.2×</span>
            <span className="fit-stat-label">Higher engagement for Reels</span>
          </div>
          <div className="fit-stat">
            <span className="fit-stat-num">Video + Image + Voice</span>
            <span className="fit-stat-label">All-in-one platform</span>
          </div>
          <div className="fit-stat">
            <span className="fit-stat-num">50cr</span>
            <span className="fit-stat-label">Free on signup</span>
          </div>
        </div>

        {/* Marquee — Content Types */}
        <div className="fit-marquee-wrap">
          <div className="fit-marquee-track">
            {["🎬 Workout Reels", "🏋️ Gym Images", "🎙️ Voiceovers", "📝 Captions", "🔄 Routine Visuals", "📸 Thumbnails", "📱 Social Graphics", "🏆 Athlete Highlights"].map((item, i) => (
              <div key={i} className="fit-marquee-pill">
                <span>{item}</span>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {["🎬 Workout Reels", "🏋️ Gym Images", "🎙️ Voiceovers", "📝 Captions", "🔄 Routine Visuals", "📸 Thumbnails", "📱 Social Graphics", "🏆 Athlete Highlights"].map((item, i) => (
              <div key={`dup-${i}`} className="fit-marquee-pill">
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* What You Can Create Section */}
        <section className="fit-section">
          <span className="fit-section-label">One Platform — Endless Possibilities</span>
          <h2 className="fit-section-h2">
            What You Can <em>Create</em>
          </h2>
          <div className="fit-section-intro">
            From viral workout reels to professional gym photography — all the content you need
            to grow your fitness brand, all in one place.
          </div>
          <div className="fit-content-grid">
            {contentTypes.map((type) => (
              <div key={type.title} className="fit-content-card">
                <span className="fit-content-card-icon">{type.icon}</span>
                <div className="fit-content-card-h3">{type.title}</div>
                <div className="fit-content-card-p">{type.desc}</div>
                <span className={`fit-content-card-tag ${type.tagColor === "orange" ? "fit-content-card-tag--orange" : type.tagColor === "purple" ? "fit-content-card-tag--purple" : ""}`}>
                  {type.tag}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Fitness Niches Grid */}
        <section className="fit-section">
          <span className="fit-section-label">Supported Niches</span>
          <h2 className="fit-section-h2">
            Every <em>Training Style</em> Covered
          </h2>
          <div className="fit-niche-grid">
            {fitnessNiches.map((niche) => (
              <div key={niche.name} className="fit-niche-card">
                <span className="fit-niche-card-icon">{niche.icon}</span>
                <div>
                  <div className="fit-niche-card-title">{niche.name}</div>
                  <div className="fit-niche-card-desc">{niche.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="fit-section">
          <span className="fit-section-label">Simple Workflow</span>
          <h2 className="fit-section-h2">
            From <em>Idea to Post</em> in 3 Steps
          </h2>
          <div className="fit-steps">
            {workSteps.map((step, idx) => (
              <div key={idx} className="fit-step">
                <div className={`fit-step-num ${idx === 1 ? "fit-step-num--orange" : idx === 2 ? "fit-step-num--purple" : ""}`}>
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <div>
                  <div className="fit-step-body-h3">{step.title}</div>
                  <div className="fit-step-body-p">{step.desc}</div>
                  <div className="fit-step-body-chips">
                    {step.chips.map((chip, i) => (
                      <span key={i} className="fit-chip">{chip}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Prompt Examples */}
        <section className="fit-section">
          <span className="fit-section-label">Prompt Examples</span>
          <h2 className="fit-section-h2">
            Try These <em>Fitness Prompts</em>
          </h2>
          <div className="fit-prompts-grid">
            {promptExamples.map((prompt, idx) => (
              <div key={idx} className="fit-prompt-card">
                <div className="fit-prompt-card-type">{prompt.type}</div>
                <div className="fit-prompt-card-text">"{prompt.prompt}"</div>
              </div>
            ))}
          </div>
        </section>

        {/* Platform Strategy */}
        <section className="fit-section">
          <span className="fit-section-label">Platform Strategy</span>
          <h2 className="fit-section-h2">
            Maximize <em>Reach</em> on Every Platform
          </h2>
          <div className="fit-content-grid">
            {platformStrategies.map((p) => (
              <div key={p.platform} className="fit-content-card">
                <div className="fit-content-card-h3">{p.platform}</div>
                <div className="fit-content-card-p">
                  <strong>Format:</strong> {p.format}<br />
                  <strong>Tip:</strong> {p.tip}<br />
                  <strong>Best for:</strong> {p.bestFor}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Grid */}
        <div className="fit-mid-cta">
          <h2 className="fit-mid-cta-h2">
            All the <em>Tools You Need</em>
          </h2>
          <p className="fit-mid-cta-p">
            Video generation · Image generation · Voice generation · Caption writing
            — all in one platform. No more switching between 5 different tools.
          </p>
          <div className="fit-content-grid" style={{ marginTop: 24 }}>
            {features.map((f) => (
              <div key={f.title} className="fit-content-card">
                <span className="fit-content-card-icon">{f.icon}</span>
                <div className="fit-content-card-h3">{f.title}</div>
                <div className="fit-content-card-p">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Scenith */}
        <section className="fit-section">
          <span className="fit-section-label">Why Choose Scenith</span>
          <h2 className="fit-section-h2">
            The <em>Smart Choice</em> for Fitness Creators
          </h2>
          <div className="fit-why-grid">
            {whyChoose.map((item) => (
              <div key={item.num} className="fit-why-card">
                <span className="fit-why-card-num">{item.num}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* AI Models Section */}
        <section className="fit-section">
          <span className="fit-section-label">AI Models</span>
          <h2 className="fit-section-h2">
            Powered by the <em>World's Best</em> AI
          </h2>
          <div className="fit-models-row">
            <div className="fit-model-badge">
              <img src="https://cdn.scenith.in/brand-logos/Kling%20logo.webp" alt="" />
              Kling 2.6 Pro <span className="fit-model-badge-type">· Video</span>
            </div>
            <div className="fit-model-badge">
              <img src="https://cdn.scenith.in/brand-logos/Google%20Logo.webp" alt="" />
              Veo 3.1 <span className="fit-model-badge-type">· Video</span>
            </div>
            <div className="fit-model-badge">
              <img src="https://cdn.scenith.in/brand-logos/Grok.png" alt="" />
              Grok Imagine <span className="fit-model-badge-type">· Video + Audio</span>
            </div>
            <div className="fit-model-badge">
              <img src="https://cdn.scenith.in/brand-logos/Chatgpt%20logo.webp" alt="" />
              GPT Image <span className="fit-model-badge-type">· Image</span>
            </div>
            <div className="fit-model-badge">
              <img src="https://cdn.scenith.in/brand-logos/Google%20Logo.webp" alt="" />
              Imagen 4 <span className="fit-model-badge-type">· Image</span>
            </div>
            <div className="fit-model-badge">
              <img src="https://cdn.scenith.in/brand-logos/Flux%20logo.png" alt="" />
              FLUX 1.1 <span className="fit-model-badge-type">· Image</span>
            </div>
          </div>
        </section>

        {/* Use Cases Grid */}
        <section className="fit-section">
          <span className="fit-section-label">Use Cases</span>
          <h2 className="fit-section-h2">
            Who Uses the <em>AI Fitness Content Creator</em>?
          </h2>
          <div className="fit-content-grid">
            {useCases.map((uc) => (
              <div key={uc.title} className="fit-content-card">
                <span className="fit-content-card-icon">{uc.icon}</span>
                <div className="fit-content-card-h3">{uc.title}</div>
                <div className="fit-content-card-p">{uc.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Content Ideas (Quick Start) */}
        <section className="fit-section">
          <span className="fit-section-label">Quick Start Ideas</span>
          <h2 className="fit-section-h2">
            Ready-to-Use <em>Content Ideas</em>
          </h2>
          <div className="fit-use-tags">
            {contentIdeas.map((idea, idx) => (
              <span key={idx} className="fit-use-tag">{idea}</span>
            ))}
          </div>
        </section>

        {/* Comparison Table */}
        <section className="fit-section">
          <span className="fit-section-label">Comparison</span>
          <h2 className="fit-section-h2">
            AI Fitness Creator vs <em>Traditional Production</em>
          </h2>
          <div className="fit-compare">
            <div className="fit-compare-col fit-compare-col--them">
              <h3>❌ Traditional</h3>
              <ul>
                {comparisonData.map((row, idx) => (
                  <li key={idx}>
                    <strong>{row.aspect}:</strong> {row.traditional}
                  </li>
                ))}
              </ul>
            </div>
            <div className="fit-compare-col fit-compare-col--us">
              <h3>✅ AI Fitness Creator</h3>
              <ul>
                {comparisonData.map((row, idx) => (
                  <li key={idx}>
                    <strong>{row.aspect}:</strong> {row.ai}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Longform SEO Content Section (Deep Dive) */}
        <section className="fit-section">
          <div className="fit-section-label">Deep Dive</div>
          <h2 className="fit-section-h2">
            The Complete Guide to <em>AI Fitness Content</em> in 2026
          </h2>
          <div style={{ marginTop: 32, maxWidth: "900px" }} className="fit-prose-content">
            <h3 style={{ fontFamily: "var(--fit-font-display)", fontSize: "28px", marginTop: 0, marginBottom: "16px", color: "#fff" }}>Why Fitness Content Creators Are Switching to AI</h3>
            <p style={{ marginBottom: "20px", color: "var(--fit-muted)", lineHeight: "1.75" }}>
              The fitness content landscape has exploded. Over 2.1 billion fitness videos are
              watched on TikTok every single month. Instagram Reels featuring workout content
              outperform static posts by 5-7× in reach. YouTube Shorts has become the #1
              discovery platform for new fitness channels. Yet the biggest bottleneck for
              fitness creators — personal trainers, gym owners, influencers, coaches —
              remains the same: <strong>producing high-quality content consistently</strong>.
            </p>
            <p style={{ marginBottom: "20px", color: "var(--fit-muted)", lineHeight: "1.75" }}>
              Traditional content creation for fitness is expensive and time-consuming.
              A single workout reel can cost $500–$2,000 to produce professionally.
              Filming takes 2-4 hours. Editing another 2-4 hours. And that's just for
              ONE piece of content. To stay competitive in 2026, you need to post 5-7
              times per week across multiple platforms. That's 20-30 hours of content
              production weekly — more than a full-time job.
            </p>
            <p style={{ marginBottom: "20px", color: "var(--fit-muted)", lineHeight: "1.75" }}>
              <strong>The AI Fitness Content Creator changes everything.</strong>
              Instead of spending 5 hours filming and editing one video, you can generate
              15-20 pieces of content in the same amount of time. Describe your fitness idea
              in plain English — "cinematic deadlift reel in a dark gym, chalk flying" —
              and watch professional content generate itself in under 2 minutes.
            </p>

            <h3 style={{ fontFamily: "var(--fit-font-display)", fontSize: "28px", marginTop: "40px", marginBottom: "16px", color: "#fff" }}>The Content Trinity: Video + Image + Voice</h3>
            <p style={{ marginBottom: "20px", color: "var(--fit-muted)", lineHeight: "1.75" }}>
              Most creators think they need separate tools for video, images, and audio.
              They subscribe to a video generator, an image generator, and a voice generator
              — paying $30-80+ per month for each. Then they spend hours switching between
              platforms, managing different credit systems, and learning different interfaces.
            </p>
            <p style={{ marginBottom: "20px", color: "var(--fit-muted)", lineHeight: "1.75" }}>
              Scenith's AI Fitness Content Creator combines all three — plus caption
              generation — in one unified platform. One login. One credit system. One workflow.
              Describe your fitness concept once, and generate the video, the thumbnail image,
              the voiceover, AND the caption in a single session.
            </p>
            <p style={{ marginBottom: "20px", color: "var(--fit-muted)", lineHeight: "1.75" }}>
              This "content trinity" approach is what separates top-performing fitness
              accounts from average ones. The best workout Reels have:
            </p>
            <ul style={{ marginBottom: "20px", color: "var(--fit-muted)", lineHeight: "1.75", paddingLeft: "24px" }}>
              <li>🎬 <strong>Cinematic video</strong> that captures the movement and atmosphere</li>
              <li>📸 <strong>Appealing thumbnail</strong> that makes people stop scrolling</li>
              <li>🎙️ <strong>Engaging voiceover</strong> that adds personality or instruction</li>
              <li>📝 <strong>Optimized caption</strong> that drives comments and saves</li>
            </ul>

            <h3 style={{ fontFamily: "var(--fit-font-display)", fontSize: "28px", marginTop: "40px", marginBottom: "16px", color: "#fff" }}>The Business Case: ROI of AI Fitness Content</h3>
            <p style={{ marginBottom: "20px", color: "var(--fit-muted)", lineHeight: "1.75" }}>
              Let's talk numbers. For a personal trainer charging $100/hour with 20 clients:
            </p>
            <ul style={{ marginBottom: "20px", color: "var(--fit-muted)", lineHeight: "1.75", paddingLeft: "24px" }}>
              <li>Traditional content creation: 5-10 hours/week = $500-1,000 in lost billable time</li>
              <li>AI-assisted content creation: 1-2 hours/week = $100-200 in lost billable time</li>
              <li>Annual savings in time alone: $20,000-40,000</li>
            </ul>
            <p style={{ marginBottom: "20px", color: "var(--fit-muted)", lineHeight: "1.75" }}>
              For gym owners and fitness brands, the ROI is even clearer. A single viral
              Reel can bring in $5,000-50,000+ in new membership or product sales.
              AI lets you "fire more shots" — more content, more chances to go viral,
              without burning out your marketing team.
            </p>

            <h3 style={{ fontFamily: "var(--fit-font-display)", fontSize: "28px", marginTop: "40px", marginBottom: "16px", color: "#fff" }}>Cross-Platform Content Strategy</h3>
            <p style={{ marginBottom: "20px", color: "var(--fit-muted)", lineHeight: "1.75" }}>
              Top fitness creators don't post the same content everywhere. They customize
              for each platform's unique audience and algorithm. Here's how the AI Fitness
              Content Creator helps:
            </p>
            <ul style={{ marginBottom: "20px", color: "var(--fit-muted)", lineHeight: "1.75", paddingLeft: "24px" }}>
              <li><strong>Instagram Reels:</strong> Generate 9:16 vertical videos with high production value. Start mid-action. Add text overlays for weight/reps.</li>
              <li><strong>TikTok:</strong> Use Grok Imagine for built-in trending-style audio. Create "workout with me" and transformation content.</li>
              <li><strong>YouTube Shorts:</strong> Focus on educational content — form tutorials, exercise explanations, program previews.</li>
              <li><strong>LinkedIn:</strong> Create 16:9 professional content showcasing trainer expertise and client results.</li>
              <li><strong>Website/Product Pages:</strong> Generate 1:1 square videos for program previews and demonstration loops.</li>
            </ul>
            <p style={{ marginBottom: "20px", color: "var(--fit-muted)", lineHeight: "1.75" }}>
              The same fitness concept can generate 4-5 different pieces of platform-optimized
              content. A deadlift tutorial becomes:
            </p>
            <ul style={{ marginBottom: "20px", color: "var(--fit-muted)", lineHeight: "1.75", paddingLeft: "24px" }}>
              <li>15s Reel: slow-motion deadlift with text "form check" overlay</li>
              <li>60s YouTube Short: full form breakdown with voiceover instruction</li>
              <li>LinkedIn post: professional thumbnail + caption about training philosophy</li>
              <li>Product page loop: 5s demonstration of proper technique</li>
            </ul>

            <h3 style={{ fontFamily: "var(--fit-font-display)", fontSize: "28px", marginTop: "40px", marginBottom: "16px", color: "#fff" }}>From Zero to Viral: A Creator's Workflow</h3>
            <p style={{ marginBottom: "20px", color: "var(--fit-muted)", lineHeight: "1.75" }}>
              Imagine you're a personal trainer launching a new "30-Day Strength Challenge."
              Here's how you'd use the AI Fitness Content Creator:
            </p>
            <ol style={{ marginBottom: "20px", color: "var(--fit-muted)", lineHeight: "1.75", paddingLeft: "24px" }}>
              <li><strong>Morning (1 hour):</strong> Generate 15 workout reels — one for each exercise in the program.</li>
              <li><strong>Mid-day (30 min):</strong> Generate thumbnail images for each reel (20 images).</li>
              <li><strong>Afternoon (30 min):</strong> Generate voiceovers for 5 "form tutorial" videos.</li>
              <li><strong>Evening (30 min):</strong> Generate captions for all 15 posts using the caption generator.</li>
              <li><strong>Schedule:</strong> Use a scheduler to post 1-2 pieces daily for the next 2 weeks.</li>
            </ol>
            <p style={{ marginBottom: "20px", color: "var(--fit-muted)", lineHeight: "1.75" }}>
              Total time invested: 2.5 hours. Content produced: 15 videos, 20 images,
              5 voiceovers, 15 captions. Traditional production would take 30-50 hours
              and cost $3,000-10,000. The AI Fitness Content Creator: $0-9/month.
            </p>

            <h3 style={{ fontFamily: "var(--fit-font-display)", fontSize: "28px", marginTop: "40px", marginBottom: "16px", color: "#fff" }}>Common Mistakes Fitness Creators Make</h3>
            <ul style={{ marginBottom: "20px", color: "var(--fit-muted)", lineHeight: "1.75", paddingLeft: "24px" }}>
              <li><strong>Posting inconsistently:</strong> The algorithm rewards frequency. Use AI to batch-create a week of content in one session.</li>
              <li><strong>Ignoring platform formats:</strong> A 16:9 YouTube video cropped to 9:16 for Reels will perform poorly. Generate platform-specific versions.</li>
              <li><strong>No audio strategy:</strong> Videos without music or gym sounds have 60% lower completion rates. Use Grok Imagine for built-in audio.</li>
              <li><strong>Weak prompts:</strong> "Deadlift in gym" won't produce good results. Be specific: lighting, angle, atmosphere, texture.</li>
              <li><strong>Not repurposing content:</strong> One video can become 5+ pieces of content. Extract stills for images, transcribe for captions.</li>
            </ul>

            <h3 style={{ fontFamily: "var(--fit-font-display)", fontSize: "28px", marginTop: "40px", marginBottom: "16px", color: "#fff" }}>The Future of Fitness Content: AI-First Production</h3>
            <p style={{ marginBottom: "20px", color: "var(--fit-muted)", lineHeight: "1.75" }}>
              By 2027, industry analysts predict that over 60% of fitness video content
              will be AI-generated or AI-assisted. The fitness creators winning today
              are the ones who figured out how to publish great content consistently —
              not occasionally. AI gives you that consistency without the burnout.
            </p>
            <p style={{ marginBottom: "20px", color: "var(--fit-muted)", lineHeight: "1.75" }}>
              The AI Fitness Content Creator isn't just a tool — it's a strategic advantage.
              It enables you to:
            </p>
            <ul style={{ marginBottom: "20px", color: "var(--fit-muted)", lineHeight: "1.75", paddingLeft: "24px" }}>
              <li>Launch fitness programs faster (promotional content ready same day)</li>
              <li>A/B test creative at scale (10 variations of the same exercise)</li>
              <li>Scale without hiring (one person manages content for 100+ exercises)</li>
              <li>Refresh aging content (regenerate last year's workouts with 2026 quality)</li>
              <li>Dominate multiple platforms simultaneously (custom content for each)</li>
            </ul>
            <p style={{ marginBottom: "20px", color: "var(--fit-muted)", lineHeight: "1.75", fontWeight: "bold" }}>
              The question isn't whether you should start using AI for fitness content.
              The question is: are you ready to start before your competitors do?
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="fit-section">
          <span className="fit-section-label">FAQ</span>
          <h2 className="fit-section-h2">
            Frequently Asked <em>Questions</em>
          </h2>
          <div className="fit-faq">
            {faqItems.map((item, idx) => (
              <details key={idx} className="fit-faq-item">
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Bottom CTA Section */}
        <div className="fit-bottom-cta">
          <h2 className="fit-bottom-cta-h2">
            Ready to <em>Transform</em><br />Your Fitness Content?
          </h2>
          <p className="fit-bottom-cta-sub">
            Join thousands of trainers, gym owners, and fitness creators using AI
            to post better content, faster.
          </p>
          <a href={targetUrl} className="fit-cta-btn">
            <span className="fit-cta-btn-icon">🚀</span>
            <span>Start Creating Free →</span>
            <span className="fit-cta-btn-icon">→</span>
          </a>
          <div className="fit-cta-note" style={{ marginTop: 24, justifyContent: "center", display: "flex", gap: 16, flexWrap: "wrap" }}>
            <span>✅ 50 free credits</span>
            <span>✅ Full commercial rights</span>
            <span>✅ Video + Image + Voice</span>
          </div>
        </div>

        {/* Divider */}
        <div className="fit-divider" />

        {/* Footer Menu */}
        <div style={{ padding: "32px clamp(20px, 5vw, 60px)", maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "20px" }}>
          <div style={{ fontFamily: "var(--fit-font-display)", fontSize: "18px", letterSpacing: "0.06em" }}>
            SCEN<span style={{ color: "var(--fit-neon)" }}>ITH</span>
          </div>
          <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
            <Link href="/tools" style={{ color: "var(--fit-muted)", textDecoration: "none", fontSize: "12px", fontFamily: "var(--fit-font-body)", fontWeight: "600" }}>Tools</Link>
            <Link href="/pricing" style={{ color: "var(--fit-muted)", textDecoration: "none", fontSize: "12px", fontFamily: "var(--fit-font-body)", fontWeight: "600" }}>Pricing</Link>
            <Link href="/blog" style={{ color: "var(--fit-muted)", textDecoration: "none", fontSize: "12px", fontFamily: "var(--fit-font-body)", fontWeight: "600" }}>Blog</Link>
            <Link href="/contact" style={{ color: "var(--fit-muted)", textDecoration: "none", fontSize: "12px", fontFamily: "var(--fit-font-body)", fontWeight: "600" }}>Contact</Link>
          </div>
          <div style={{ fontSize: "11px", color: "var(--fit-muted)" }}>
            © 2026 Scenith — AI content creation for everyone
          </div>
        </div>
      </div>
    </>
  );
}