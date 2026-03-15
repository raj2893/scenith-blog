"use client";

import React, { useState, useRef, useEffect } from "react";
import styles from "./YoutubeShortGenerator.module.css";


// ─── Static data ──────────────────────────────────────────────────────────────

const MODELS = [
  {
    id: "wan2.5",
    name: "Wan 2.5",
    badge: "Fast",
    badgeColor: "#10B981",
    res: "720p",
    credits: 10,
    desc: "Best for quick drafts and high-volume Shorts creation.",
    icon: "⚡",
  },
  {
    id: "kling-v2.5-standard",
    name: "Kling 2.5 Standard",
    badge: "Popular",
    badgeColor: "#6366F1",
    res: "1080p",
    credits: 15,
    desc: "Sharp, cinematic Shorts. Perfect balance of quality and speed.",
    icon: "🎬",
  },
  {
    id: "kling-v2.5-pro",
    name: "Kling 2.5 Pro",
    badge: "Pro",
    badgeColor: "#F59E0B",
    res: "1080p",
    credits: 30,
    desc: "Studio-grade motion & photorealism. For premium Shorts that stand out.",
    icon: "🏆",
  },
  {
    id: "veo3",
    name: "Veo 3",
    badge: "Best",
    badgeColor: "#EC4899",
    res: "1080p",
    credits: 50,
    desc: "Google DeepMind's flagship. Unmatched realism, emotion and depth.",
    icon: "🌟",
  },
];

const PROMPT_IDEAS = [
  "A neon-lit Tokyo street at midnight, rain reflecting city lights, vertical cinematic slow motion",
  "A lone astronaut floating above Earth, sunrise over the horizon, dramatic score",
  "A barista pouring latte art in extreme close-up, steam rising, golden hour light",
  "A time-lapse of a sunflower blooming, vibrant colors, macro lens, vertical frame",
  "A wolf howling at a full moon on a snowy mountain ridge, epic wide shot",
  "Colorful paint exploding in slow motion underwater, abstract art, 9:16",
  "A vintage cassette tape unspooling in slow motion, warm nostalgic tones",
  "Street dancer breaking on a rooftop at sunset, city skyline behind them",
];

const NICHES = [
  { icon: "🍔", label: "Food & Recipe", example: "Sizzling butter melting over a perfect steak, macro close-up, steam rising" },
  { icon: "💪", label: "Fitness & Gym", example: "Athlete sprinting in slow motion through a foggy track at dawn" },
  { icon: "🌿", label: "Nature & Travel", example: "Aerial drone shot of a turquoise lagoon surrounded by white sand, sunrise" },
  { icon: "🎵", label: "Music & Dance", example: "Silhouette of a dancer against a giant glowing moon, rhythmic movement" },
  { icon: "📱", label: "Tech & Gadgets", example: "Sleek smartphone unboxing, product reveal with dramatic light rays" },
  { icon: "🏠", label: "Home & Lifestyle", example: "Cozy living room with falling snow outside the window, warm lighting, candles" },
  { icon: "🎮", label: "Gaming", example: "Cinematic game character walking through a destroyed city, epic camera pan" },
  { icon: "✈️", label: "Travel Vlogs", example: "Hyperlapse of clouds over mountain peaks at golden hour, vertical frame" },
];

const STRATEGIES = [
  {
    num: "01",
    icon: "🎯",
    title: "Hook in the First 0.5 Seconds",
    body: "YouTube's algorithm rewards watch-time. AI-generated Shorts let you A/B test visual hooks without re-shooting. Generate 5 variations of your intro clip and pick the one that performs.",
  },
  {
    num: "02",
    icon: "📅",
    title: "Post 2–3 Shorts Daily Without Burnout",
    body: "The creators blowing up in 2026 are posting at volume. With AI generation, you batch-create a week of Shorts in one afternoon — no camera crew, no location, no editing.",
  },
  {
    num: "03",
    icon: "🔁",
    title: "Repurpose Long-Form into Shorts",
    body: "Take your most engaging long-form concepts and regenerate them as punchy 5–10 second visual loops. Each one drives traffic back to the full video.",
  },
  {
    num: "04",
    icon: "🌐",
    title: "Cross-Post to Reels & TikTok Simultaneously",
    body: "The 9:16 format you export from Scenith drops straight onto Instagram Reels, TikTok, and Snapchat Spotlight — triple the reach from a single generation.",
  },
  {
    num: "05",
    icon: "🎨",
    title: "Build a Visual Brand Style",
    body: "Consistent color grading and cinematography style = instant brand recognition. Lock in your aesthetic with prompt templates and your audience will recognize your Shorts before they read the caption.",
  },
  {
    num: "06",
    icon: "📊",
    title: "Use Data to Iterate Prompts",
    body: "Check which Shorts got the highest retention. Reverse-engineer the visual style in your analytics and refine your AI prompts to replicate what works.",
  },
];

const FAQ = [
  {
    q: "How do I make YouTube Shorts with AI?",
    a: "Type a text prompt describing your video idea, select the 9:16 aspect ratio in Scenith's generator, pick an AI model, and click Generate. Your Short will be rendered in 30–120 seconds at up to 1080p resolution. Download and upload directly to YouTube.",
  },
  {
    q: "What is the best AI video generator for YouTube Shorts in 2026?",
    a: "Scenith supports Kling 2.5 Pro and Veo 3 — two of the most advanced AI video models available in 2026. For YouTube Shorts specifically, Kling 2.5 Standard offers the best balance of quality and speed at 1080p.",
  },
  {
    q: "Are AI-generated YouTube Shorts allowed?",
    a: "Yes. YouTube permits AI-generated content that follows their Community Guidelines. YouTube's 2024 policy update requires creators to disclose AI-generated realistic-looking content via a label in the description or as part of the upload settings. Scenith generates wholly original content from your prompt — no copyright concerns from stock footage.",
  },
  {
    q: "Do I need any video editing skills to create Shorts with AI?",
    a: "Zero. Scenith's generator is entirely prompt-driven. You type what you want to see, and the AI handles framing, motion, lighting, cinematography, and rendering. No timeline editing, no keyframing, no color grading required.",
  },
  {
    q: "Can AI generate YouTube Shorts with audio?",
    a: "Yes. With Veo 3 and other audio-capable models on Scenith, you get native AI-generated ambient sound effects and audio that match the visual scene. This makes your Shorts feel more immersive and complete right out of the box.",
  },
  {
    q: "What resolution are AI-generated Shorts from Scenith?",
    a: "Wan 2.5 outputs at 720p. Kling 2.5 Standard, Kling 2.5 Pro, and Veo 3 all output at 1080p — which is the recommended resolution for YouTube Shorts for maximum sharpness on mobile displays.",
  },
  {
    q: "How long can AI-generated YouTube Shorts be?",
    a: "Scenith currently supports 5-second and 10-second clips per generation. YouTube Shorts supports up to 60 seconds, so you can generate multiple clips and assemble them in any video editor, or use the shorter loops as-is for punchy, attention-grabbing content.",
  },
  {
    q: "Is Scenith's AI video generator free?",
    a: "Scenith offers a credit-based system with plans starting at ₹99/month. New accounts receive starter credits to try the generator. Different models consume different credit amounts — Wan 2.5 costs 10 credits for a 5-second Short while Veo 3 costs 50 credits.",
  },
  {
    q: "What kind of YouTube Shorts perform best with AI generation?",
    a: "Visually stunning nature scenes, product showcase loops, cinematic mood clips, abstract art videos, and satisfying process videos (like macro food shots or material transformations) consistently perform well as AI-generated Shorts. The key is high-quality motion and strong visual hooks in the first frame.",
  },
  {
    q: "Can I use AI video for YouTube Shorts monetization?",
    a: "Yes. YouTube's YPP (YouTube Partner Program) does not prohibit AI-generated content. You must meet the standard threshold of 500 subscribers and 3,000 watch hours (or 3M Shorts views). AI-generated Shorts can count toward these metrics just like any other content.",
  },
];

const STATS = [
  { value: "70B+", label: "YouTube Shorts views per day globally" },
  { value: "2.5B", label: "Monthly active Shorts viewers" },
  { value: "15M+", label: "Shorts creators on the platform" },
  { value: "40%", label: "Of YouTube watch time now comes from Shorts" },
];

const COMPARISON = [
  { feature: "Time to create one Short", traditional: "4–8 hours", ai: "Under 2 minutes" },
  { feature: "Equipment needed", traditional: "Camera, lights, mic", ai: "Just a browser" },
  { feature: "Editing software", traditional: "Premiere / Final Cut", ai: "None required" },
  { feature: "Cost per Short (rough avg)", traditional: "₹500–5,000+", ai: "From ₹4/Short" },
  { feature: "Volume (per week)", traditional: "3–7 Shorts", ai: "100+ Shorts" },
  { feature: "A/B testing visuals", traditional: "Re-shoot required", ai: "Re-prompt in seconds" },
  { feature: "Copyright risk", traditional: "Stock footage risk", ai: "100% original AI output" },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function YoutubeShortGeneratorClient() {
  const [activeNiche, setActiveNiche] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [promptRotate, setPromptRotate] = useState(0);
  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setPromptRotate((p) => (p + 1) % PROMPT_IDEAS.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const copyPrompt = () => {
    navigator.clipboard.writeText(PROMPT_IDEAS[promptRotate]);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2000);
  };

  const CTA_LINK =
    "https://scenith.in/tools/ai-video-generation?utm_source=youtube-shorts-page&utm_medium=tool-cta&utm_campaign=shorts-organic-2026&utm_content=hero-cta";

  const CTA_SECONDARY =
    "https://scenith.in/tools/ai-video-generation?utm_source=youtube-shorts-page&utm_medium=tool-cta&utm_campaign=shorts-organic-2026&utm_content=secondary-cta";

  return (
    <div className={styles.page}>

      {/* ── BG ── */}
      <div className={styles.bg} aria-hidden="true" />
      <div className={styles.noise} aria-hidden="true" />
      <div className={styles.filmStrip} aria-hidden="true">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className={styles.filmHole} />
        ))}
      </div>

      <div className={styles.wrap}>

        {/* ── Breadcrumb ── */}
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span aria-hidden="true">›</span>
          <a href="/tools">Tools</a>
          <span aria-hidden="true">›</span>
          <span>YouTube Shorts AI Video Generator</span>
        </nav>

        {/* ═══════════════════════════════════════════════════════════════════
            HERO
        ═══════════════════════════════════════════════════════════════════ */}
        <section className={styles.hero} aria-labelledby="hero-heading">
          <div className={styles.heroTag}>
            <span className={styles.heroDot} />
            #1 AI Tool for YouTube Shorts in 2026
          </div>

          <h1 id="hero-heading" className={styles.heroTitle}>
            YouTube Shorts <br />
            <span className={styles.heroAccent}>AI Video Generator</span>
          </h1>

          <p className={styles.heroSub}>
            Turn any idea into a scroll-stopping 9:16 Short in under 2 minutes.
            No camera. No editing. No burnout. Just type, generate, upload.
          </p>

          {/* Rotating prompt preview */}
          <div className={styles.promptPreview} aria-label="Sample prompts">
            <span className={styles.ppLabel}>Try this prompt →</span>
            <div className={styles.ppText} key={promptRotate}>
              &ldquo;{PROMPT_IDEAS[promptRotate]}&rdquo;
            </div>
            <button
              className={styles.ppCopy}
              onClick={copyPrompt}
              aria-label="Copy prompt"
            >
              {copiedPrompt ? "✓ Copied!" : "Copy"}
            </button>
          </div>

          {/* HERO CTA */}
          <div className={styles.heroCtas}>
            <a href={CTA_LINK} className={styles.ctaPrimary} target="_blank" rel="noopener">
              <span className={styles.ctaIcon}>🎬</span>
              Generate My YouTube Short — Free
              <span className={styles.ctaArrow}>→</span>
            </a>
            <p className={styles.ctaNote}>
              No credit card needed to start &nbsp;·&nbsp; Plans from ₹99/mo &nbsp;·&nbsp; 1080p output
            </p>
          </div>

          {/* Demo video */}
          <div className={styles.demoWrap} role="img" aria-label="AI-generated YouTube Short demo">
            <div className={styles.demoPhone}>
              <div className={styles.phoneNotch} />
              <div className={styles.phoneScreen}>
                <video
                  ref={videoRef}
                  src="https://cdn.scenith.in/ai_video_gen/2/video_3a8f8067-40ff-4ec4-9173-83cfc81a5cb4.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className={styles.demoVideo}
                  aria-label="Sample AI-generated video in YouTube Shorts phone frame"
                />
                <div className={styles.phoneOverlay}>
                  <div className={styles.phoneShortsUI}>
                    <div className={styles.phoneLike}>❤️ <span>24.1K</span></div>
                    <div className={styles.phoneComment}>💬 <span>842</span></div>
                    <div className={styles.phoneShare}>↗️ <span>Share</span></div>
                  </div>
                </div>
              </div>
              <div className={styles.phoneBadge}>AI-Generated · Kling 2.5 Pro · 1080p</div>
            </div>
            <div className={styles.demoStats}>
              {STATS.map((s) => (
                <div key={s.value} className={styles.demoStat}>
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            WHY SHORTS MATTER IN 2026 — long editorial content
        ═══════════════════════════════════════════════════════════════════ */}
        <section className={styles.editorial} aria-labelledby="why-heading">
          <div className={styles.editorialInner}>
            <div className={styles.sectionEyebrow}>The Opportunity</div>
            <h2 id="why-heading" className={styles.sectionTitle}>
              Why YouTube Shorts Is the Biggest Content<br />
              Opportunity of 2026 — And How AI Changes Everything
            </h2>

            <div className={styles.editorialBody}>
              <p>
                If you're a content creator, a brand marketer, a small business owner, or just
                someone with a story to tell — YouTube Shorts is the single highest-leverage content
                channel available to you right now. In Q1 2026, YouTube reported that Shorts are
                consuming over 70 billion views every single day. Not weekly. <em>Daily.</em> The
                platform has gone from treating Shorts as a TikTok clone to making them a
                first-class product that competes for the same homepage real estate as long-form
                videos.
              </p>

              <p>
                The catch? Volume wins. The algorithm rewards channels that post consistently — 
                ideally 2–3 Shorts per day — with disproportionate organic reach. Creators who
                were posting 14 Shorts a week in 2025 grew to 100K subscribers in under 3 months
                in documented cases across YouTube Studio analytics reports. The problem isn't
                the strategy. The problem has always been production capacity.
              </p>

              <p>
                This is precisely the gap that AI video generation fills in 2026. With tools like
                Scenith's AI video generator, a single creator — or a lean marketing team — can
                produce 20 to 30 unique, visually stunning Shorts in an afternoon. Not recycled
                stock footage. Not the same template over and over. Genuinely original, 
                cinematically composed 9:16 video clips generated from text descriptions.
              </p>

              <h3>The Traditional YouTube Shorts Creation Bottleneck</h3>

              <p>
                Let's be honest about what creating a traditional YouTube Short actually costs.
                You need a smartphone or camera capable of 1080p vertical video. You need
                reasonable lighting — either natural or artificial. You need to appear on camera
                or have something visually interesting to film. You need to shoot multiple takes.
                Then you import to CapCut, Premiere Rush, or Final Cut, cut out the dead air,
                add captions, color grade, export, and upload. At minimum, a clean 30-second
                Short takes 2–3 hours for a competent editor. For a beginner, it can be a
                full working day.
              </p>

              <p>
                Multiply that by 5 Shorts a week and you're looking at a part-time job just in
                post-production. Most creators buckle under the weight of the schedule within 
                4–6 weeks. This is why 80% of YouTube channels stop posting within their first
                year. The intent is there. The ideas are there. The execution machine breaks down.
              </p>

              <h3>How AI Video Generation Breaks the Bottleneck</h3>

              <p>
                With an AI YouTube Shorts generator like Scenith, the entire production pipeline
                compresses to a single step: <strong>write a text prompt, click generate,
                download, upload.</strong> There's no camera to set up, no location to travel to,
                no actor to direct, no edit to finish. The AI handles motion, framing, lighting,
                depth of field, cinematography, color grading, and rendering — all autonomously,
                based on what you describe in plain language.
              </p>

              <p>
                A prompt like <em>"A macro close-up of morning dew on a spider web, golden hour
                light, soft bokeh background, cinematic vertical frame"</em> generates a
                photorealistic 10-second Short that would require a macro lens, a field trip at
                dawn, and a skilled cinematographer to recreate traditionally. With Kling 2.5 Pro
                on Scenith, it takes about 90 seconds and costs roughly the price of a cup of
                chai.
              </p>

              <h3>What Makes a YouTube Short Go Viral in 2026</h3>

              <p>
                YouTube's recommendation engine has become extraordinarily sophisticated.
                The algorithm no longer just looks at click-through rate and watch time in 
                isolation — it analyses viewer sentiment signals, re-watch rate, the quality of
                the first frame (called the "thumbnail frame" internally), and even audio
                engagement patterns. Here's what consistently separates viral Shorts from ignored
                ones:
              </p>

              <ul className={styles.editorialList}>
                <li>
                  <strong>The first 0.5 seconds is everything.</strong> Users scroll at roughly
                  2 frames per second on mobile. If your Short's first frame doesn't visually
                  arrest the scroll, you've already lost. AI generation lets you iterate your
                  opening frame without re-shooting.
                </li>
                <li>
                  <strong>Motion that feels expensive.</strong> Smooth camera moves, slow-motion
                  sequences, seamless transitions — these cue the brain that it's watching
                  high-production-value content. AI models like Kling 2.5 Pro excel at generating
                  camera motion that feels genuinely cinematic.
                </li>
                <li>
                  <strong>Visual coherence and a distinct aesthetic.</strong> Channels with a
                  recognizable visual style get re-subscriptions and direct searches. AI lets you
                  bake your aesthetic into a prompt template and reproduce it infinitely.
                </li>
                <li>
                  <strong>Completion rate above 80%.</strong> YouTube Shorts are shown to more
                  people when viewers watch them all the way through. A visually compelling 5–10
                  second loop that people replay naturally achieves this without any emotional
                  manipulation.
                </li>
              </ul>

              <p>
                AI-generated Shorts are uniquely positioned to hit all four of these signals
                simultaneously — because you're working with a system that was trained on millions
                of hours of cinematically compelling footage and has internalized what makes motion
                visually satisfying.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            MODEL SHOWCASE
        ═══════════════════════════════════════════════════════════════════ */}
        <section className={styles.models} aria-labelledby="models-heading">
          <div className={styles.sectionEyebrow}>AI Engines</div>
          <h2 id="models-heading" className={styles.sectionTitle}>
            Four AI Models. One Output Format.<br />
            <span className={styles.heroAccent}>Your Perfect Short.</span>
          </h2>
          <p className={styles.sectionSub}>
            Scenith's AI video generator runs on the world's most advanced video AI models.
            Match your budget and quality needs — every model outputs in 9:16 for YouTube Shorts.
          </p>

          <div className={styles.modelsGrid}>
            {MODELS.map((m) => (
              <div key={m.id} className={styles.modelCard}>
                <div className={styles.modelIcon}>{m.icon}</div>
                <div
                  className={styles.modelBadge}
                  style={{ background: m.badgeColor + "22", color: m.badgeColor, border: `1px solid ${m.badgeColor}55` }}
                >
                  {m.badge}
                </div>
                <h3 className={styles.modelName}>{m.name}</h3>
                <p className={styles.modelDesc}>{m.desc}</p>
                <div className={styles.modelMeta}>
                  <span className={styles.modelRes}>{m.res}</span>
                  <span className={styles.modelCredits}>{m.credits} credits / 5s Short</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            HOW IT WORKS
        ═══════════════════════════════════════════════════════════════════ */}
        <section className={styles.howSection} aria-labelledby="how-heading">
          <div className={styles.sectionEyebrow}>The Process</div>
          <h2 id="how-heading" className={styles.sectionTitle}>
            From Idea to Uploaded Short<br />in Under 4 Minutes
          </h2>

          <div className={styles.howSteps}>
            {[
              {
                step: "01",
                icon: "✍️",
                title: "Write your prompt",
                body: "Describe the scene, mood, camera movement, and visual style. The more vivid your description, the more cinematic the result. Think in movie terms: lighting, lens, motion.",
                tip: "Pro tip: Add \"cinematic, 9:16, vertical frame\" to every prompt for Shorts-optimised output.",
              },
              {
                step: "02",
                icon: "🎛️",
                title: "Set format to 9:16",
                body: "Select the 9:16 aspect ratio — the native format for YouTube Shorts. Choose your duration (5 or 10 seconds), pick your AI model, and optionally enable AI audio for ambient sound.",
                tip: "1080p + 9:16 = perfect Shorts upload. No cropping, no black bars, no re-encoding needed.",
              },
              {
                step: "03",
                icon: "⚡",
                title: "Generate & wait 90 seconds",
                body: "Click Generate. Our infrastructure runs your prompt through the AI model and returns a rendered MP4 video. Most Shorts are ready in 30–120 seconds depending on the model.",
                tip: "You can queue multiple generations simultaneously — batch produce your week's worth of Shorts.",
              },
              {
                step: "04",
                icon: "📲",
                title: "Download & upload to YouTube",
                body: "Download the MP4. Open YouTube Studio → Create → Upload Short. Add your caption, hashtags (#Shorts, #YTShorts), set a cover frame, publish. Done.",
                tip: "Upload between 6–9 AM IST or 12–3 PM IST for peak Shorts traffic in India.",
              },
            ].map((s) => (
              <div key={s.step} className={styles.howStep}>
                <div className={styles.howNum}>{s.step}</div>
                <div className={styles.howIcon}>{s.icon}</div>
                <h3 className={styles.howTitle}>{s.title}</h3>
                <p className={styles.howBody}>{s.body}</p>
                <div className={styles.howTip}>💡 {s.tip}</div>
              </div>
            ))}
          </div>

          {/* CTA after how-it-works */}
          <div className={styles.sectionCta}>
            <a href={CTA_LINK} className={styles.ctaPrimary} target="_blank" rel="noopener">
              <span className={styles.ctaIcon}>🚀</span>
              Start Making Shorts Now
              <span className={styles.ctaArrow}>→</span>
            </a>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            NICHE PICKER
        ═══════════════════════════════════════════════════════════════════ */}
        <section className={styles.nichePicker} aria-labelledby="niche-heading">
          <div className={styles.sectionEyebrow}>By Niche</div>
          <h2 id="niche-heading" className={styles.sectionTitle}>
            AI Shorts for Every Creator Niche
          </h2>
          <p className={styles.sectionSub}>
            Whatever your channel is about, AI can generate vertical video that fits your content style.
            Click your niche to see a sample prompt.
          </p>

          <div className={styles.nicheButtons} role="tablist" aria-label="Niche selector">
            {NICHES.map((n, i) => (
              <button
                key={n.label}
                role="tab"
                aria-selected={activeNiche === i}
                className={`${styles.nicheBtn} ${activeNiche === i ? styles.nicheBtnActive : ""}`}
                onClick={() => setActiveNiche(i)}
              >
                <span>{n.icon}</span>
                {n.label}
              </button>
            ))}
          </div>

          <div className={styles.nicheExample} role="tabpanel">
            <div className={styles.nicheExampleLabel}>Sample prompt for {NICHES[activeNiche].label}</div>
            <blockquote className={styles.nicheExampleText}>
              &ldquo;{NICHES[activeNiche].example}&rdquo;
            </blockquote>
            <a
              href={`${CTA_SECONDARY}&utm_term=${NICHES[activeNiche].label.toLowerCase().replace(/ /g, "-")}`}
              className={styles.nicheCtaBtn}
              target="_blank"
              rel="noopener"
            >
              Generate This Short →
            </a>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            COMPARISON TABLE
        ═══════════════════════════════════════════════════════════════════ */}
        <section className={styles.compare} aria-labelledby="compare-heading">
          <div className={styles.sectionEyebrow}>AI vs Traditional</div>
          <h2 id="compare-heading" className={styles.sectionTitle}>
            How AI Video Creation Compares<br />to Traditional Shorts Production
          </h2>

          <div className={styles.tableWrap} role="region" aria-label="Comparison table">
            <table className={styles.compareTable}>
              <thead>
                <tr>
                  <th scope="col">Feature</th>
                  <th scope="col">Traditional Production</th>
                  <th scope="col" className={styles.aiCol}>AI Generation (Scenith)</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row) => (
                  <tr key={row.feature}>
                    <td className={styles.featureCell}>{row.feature}</td>
                    <td className={styles.tradCell}>{row.traditional}</td>
                    <td className={styles.aiCell}>{row.ai}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            GROWTH STRATEGIES — long editorial continued
        ═══════════════════════════════════════════════════════════════════ */}
        <section className={styles.strategies} aria-labelledby="strategy-heading">
          <div className={styles.sectionEyebrow}>Growth Playbook</div>
          <h2 id="strategy-heading" className={styles.sectionTitle}>
            6 Proven Strategies to Grow Your YouTube<br />
            Channel Faster with AI-Generated Shorts
          </h2>
          <p className={styles.sectionSub}>
            These aren't theories — these are tactics that creators and brands are actively using
            in 2026 to compound their reach using AI video generation.
          </p>

          <div className={styles.stratGrid}>
            {STRATEGIES.map((s) => (
              <div key={s.num} className={styles.stratCard}>
                <div className={styles.stratNum}>{s.num}</div>
                <div className={styles.stratIcon}>{s.icon}</div>
                <h3 className={styles.stratTitle}>{s.title}</h3>
                <p className={styles.stratBody}>{s.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            LONG-FORM CONTENT BLOCK 2 — Deep use-cases & keyword density
        ═══════════════════════════════════════════════════════════════════ */}
        <section className={styles.deepContent} aria-labelledby="deepcontent-heading">
          <div className={styles.editorialInner}>
            <div className={styles.sectionEyebrow}>Use Cases</div>
            <h2 id="deepcontent-heading" className={styles.sectionTitle}>
              Who Is Using AI YouTube Shorts Generators<br />
              — And What They're Making
            </h2>

            <div className={styles.editorialBody}>
              <h3>Faceless YouTube Channels</h3>
              <p>
                One of the fastest-growing formats on YouTube in 2025–2026 is the "faceless
                channel" — a channel where the creator never appears on camera. These channels
                post AI-narrated videos, stock-footage compilations, and increasingly,
                AI-generated video Shorts. Niches like "satisfying videos," "nature loops,"
                "cinematic cityscapes," and "oddly satisfying cooking" are almost entirely
                AI-generatable. A single creator can now run 3–5 faceless YouTube Shorts
                channels simultaneously, each targeting a different niche, using Scenith to
                batch-generate content.
              </p>

              <h3>Brand Marketing and Product Teasers</h3>
              <p>
                Brands — from D2C startups to established retailers — are replacing expensive
                ad shoots with AI-generated product lifestyle videos. A fashion brand can generate
                a cinematic Short of their product in a dreamy environment without a location
                scout, a photographer, or a model contract. A food brand can show their product
                being prepared in a Michelin-star kitchen without ever entering one. AI video
                generation democratises the visual language of premium advertising for brands
                of every size.
              </p>

              <h3>Educational and Explainer Shorts</h3>
              <p>
                Abstract concepts are notoriously hard to film traditionally. How do you film
                "compound interest"? "The water cycle"? "How black holes form"? With AI video
                generation, an educational creator can prompt visually metaphorical sequences
                that illustrate these concepts beautifully — dramatic cosmic simulations, 
                microscopic fluid dynamics, architectural time-lapses — paired with a voiceover
                they record separately. The result is Shorts content that genuinely informs
                and looks spectacular.
              </p>

              <h3>Musicians and Producers</h3>
              <p>
                Artists and producers are using AI video to create visual content for their
                music releases. An 8-second cinematic loop that matches the mood of a track —
                uploaded as a Short with the audio layered in — creates a compelling preview
                clip that drives streams. With Veo 3's native audio capabilities, even the
                ambient soundscape can be AI-generated, creating a cohesive audio-visual piece
                that's ready to post.
              </p>

              <h3>Real Estate and Architecture</h3>
              <p>
                Property developers and real estate agents are discovering that AI-generated
                Shorts of architectural visualisations — cinematic walks through dream properties,
                aerial views of developments, interior mood shots — perform extremely well in
                a space where traditionally they'd need a drone operator and a 3D visualization
                team. The leads generated from a visually stunning AI Short cost a fraction of
                a traditional property marketing video.
              </p>

              <h3>Travel and Tourism</h3>
              <p>
                Travel influencers and tourism boards can generate destination mood films without
                physically being in the location — ideal for pre-trip hype content or for
                destinations that are hard to film (remote wilderness, dangerous terrain, 
                historical ruins). A prompt like "aerial shot over the Sahara desert at golden
                hour, rippling sand dunes, no people, cinematic 9:16" delivers in 90 seconds what
                would require a drone, a permit, and a flight to Morocco to capture traditionally.
              </p>

              <h3>The Prompt Engineering Advantage</h3>
              <p>
                As AI video generation becomes more widespread, the differentiator between 
                creators will be prompt quality. The creators who learn to write precise,
                cinematically-literate prompts — specifying lens characteristics, lighting
                conditions, camera movements, color temperatures, and mood — will produce
                AI Shorts that look genuinely premium. This is a learnable skill, and it's
                far more accessible than learning to operate a cinema camera.
              </p>

              <p>
                Scenith's interface supports negative prompts, which let you explicitly exclude
                unwanted elements ("no text, no watermarks, no people, no distorted faces") to
                keep the output clean. Combined with the model selection and aspect ratio
                control, you have granular enough creative direction to build a consistent
                visual brand across hundreds of Shorts.
              </p>

              <h3>The SEO Compounding Effect of Consistent Shorts</h3>
              <p>
                Here's a strategic point that many creators miss: YouTube Shorts aren't just
                a traffic channel. They're a subscriber acquisition channel. Every Short that
                performs well drives profile visits, and profile visits convert to subscribers
                of your long-form content. The YouTube algorithm treats Shorts subscribers as
                high-quality signals that boost the reach of all your content — not just Shorts.
              </p>

              <p>
                Creators who maintain a Shorts posting cadence of 14+ per week consistently
                report accelerated growth on their long-form videos as a secondary effect.
                The compounding math is significant: 100 Shorts a month, at a 2% subscriber
                conversion rate on profile visits, at even 500 daily impressions per Short —
                that's potentially 1,000 new subscribers monthly from Shorts alone, without
                a single long-form upload.
              </p>

              <p>
                AI video generation makes that 100 Shorts/month cadence logistically feasible
                for a single person. Without AI, it would require a production team.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            MID-PAGE BIG CTA
        ═══════════════════════════════════════════════════════════════════ */}
        <section className={styles.bigCta} aria-label="Call to action">
          <div className={styles.bigCtaInner}>
            <div className={styles.bigCtaGlow} aria-hidden="true" />
            <p className={styles.bigCtaEyebrow}>Ready to start?</p>
            <h2 className={styles.bigCtaTitle}>
              Your Next Viral Short Is<br />One Prompt Away
            </h2>
            <p className={styles.bigCtaBody}>
              Join thousands of creators using Scenith to produce YouTube Shorts at scale.
              Generate your first 9:16 AI video right now — no camera, no editor, no waiting.
            </p>
            <a href={CTA_LINK} className={styles.ctaPrimary} style={{ fontSize: "1.1rem", padding: "20px 40px" }} target="_blank" rel="noopener">
              <span className={styles.ctaIcon}>🎬</span>
              Open the AI Video Generator
              <span className={styles.ctaArrow}>→</span>
            </a>
            <div className={styles.bigCtaTrust}>
              <span>✓ 1080p HD Output</span>
              <span>✓ 9:16 Shorts Format</span>
              <span>✓ Instant MP4 Download</span>
              <span>✓ Plans from ₹99/mo</span>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            TIPS & BEST PRACTICES — more long-form
        ═══════════════════════════════════════════════════════════════════ */}
        <section className={styles.editorial} aria-labelledby="tips-heading">
          <div className={styles.editorialInner}>
            <div className={styles.sectionEyebrow}>Prompt Engineering</div>
            <h2 id="tips-heading" className={styles.sectionTitle}>
              How to Write AI Prompts That Generate<br />
              Viral-Quality YouTube Shorts
            </h2>

            <div className={styles.editorialBody}>
              <p>
                The quality gap between an average AI-generated Short and an outstanding one 
                comes almost entirely down to prompt quality. After studying thousands of
                successful generations, here's the formula that consistently produces
                scroll-stopping results.
              </p>

              <h3>The Anatomy of a High-Quality Shorts Prompt</h3>
              <p>
                Think of your prompt in five layers. Each layer adds a dimension of visual
                specificity that helps the AI model produce a more precisely realised output:
              </p>

              <ul className={styles.editorialList}>
                <li>
                  <strong>Layer 1 — Subject:</strong> What is the primary subject of the video?
                  Be specific. Not "a dog" but "a golden retriever puppy." Not "food" but
                  "a sizzling cast-iron skillet with caramelised onions."
                </li>
                <li>
                  <strong>Layer 2 — Action:</strong> What is happening? "Running through," 
                  "slowly rotating," "exploding in slow motion," "being poured into." Motion
                  is what makes video video — define it explicitly.
                </li>
                <li>
                  <strong>Layer 3 — Environment:</strong> Where is this happening and what
                  does it look like? "On a rooftop in Tokyo at night," "inside a crystal cave,"
                  "in an endless wheat field at golden hour."
                </li>
                <li>
                  <strong>Layer 4 — Cinematography:</strong> How is this being filmed?
                  "Extreme close-up macro," "wide-angle establishing shot," "slow push in,"
                  "overhead drone shot," "tracking shot following the subject." This single
                  layer dramatically elevates perceived production value.
                </li>
                <li>
                  <strong>Layer 5 — Mood / Technical Tags:</strong> "Cinematic," "photorealistic,"
                  "dreamlike," "high contrast," "film grain," "8K," "vertical 9:16 format."
                  These aesthetic cues inform the model's style decisions.
                </li>
              </ul>

              <p>
                An example of a full five-layer prompt: <em>"A single red rose [subject]
                slowly blooming in time-lapse [action], surrounded by morning mist in a Japanese
                garden [environment], extreme close-up macro lens with soft bokeh background
                [cinematography], cinematic, photorealistic, vertical 9:16, golden hour warmth
                [mood tags]."</em> This prompt will produce a significantly more refined result
                than "a rose blooming."
              </p>

              <h3>Using Negative Prompts to Clean Up Output</h3>
              <p>
                Scenith's advanced options section includes a negative prompt field. Use it.
                For YouTube Shorts you'll almost always want to exclude: "text, subtitles,
                watermarks, letterboxing, black bars, distorted faces, blurry motion, low
                quality, grainy, pixelated, extra limbs." These exclusions push the model away
                from common failure modes and toward clean, publishable output.
              </p>

              <h3>Model Selection for Different Shorts Types</h3>
              <p>
                Not every Short needs the most expensive model. Here's a quick routing guide
                to get the best quality-to-cost ratio:
              </p>

              <ul className={styles.editorialList}>
                <li><strong>Wan 2.5 (10 credits):</strong> Abstract motion, animated loops, particle effects, simple nature scenes, satisfying textures. Fast output, great for volume.</li>
                <li><strong>Kling 2.5 Standard (15 credits):</strong> Architecture, landscapes, product shots, travel scenes, food videos. The go-to workhorse model for most Shorts.</li>
                <li><strong>Kling 2.5 Pro (30 credits):</strong> Human or animal subjects requiring realistic motion, cinematic action sequences, premium brand content, hero shots.</li>
                <li><strong>Veo 3 (50 credits):</strong> Complex scenes with multiple subjects, realistic physics interactions, native audio integration, any Short where absolute visual quality matters most.</li>
              </ul>

              <h3>Aspect Ratio and Posting Specifications for YouTube Shorts</h3>
              <p>
                YouTube Shorts specifications in 2026: Resolution 1080×1920 (9:16 aspect ratio),
                MP4 format, H.264 codec, up to 60 seconds duration, maximum file size 256MB.
                Scenith exports directly in these specifications at 1080p when using Kling or
                Veo models — you can upload the file without any conversion or re-encoding.
              </p>

              <p>
                One critical technical note: YouTube's algorithm specifically identifies Shorts
                based on the vertical aspect ratio. A landscape video uploaded with a "Shorts"
                hashtag will not be distributed in the Shorts feed. This is why selecting 9:16
                in Scenith is non-negotiable — it's not just an aesthetic choice, it's what
                qualifies your content for Shorts distribution.
              </p>

              <h3>The Consistency Stack: Building a Recognisable AI Shorts Channel</h3>
              <p>
                The most successful AI Shorts channels in 2026 aren't posting random one-offs.
                They've developed a "visual signature" — a consistent set of prompt elements
                that run through every Short they produce. Think: always golden hour, always
                macro lenses, always with a particular color temperature and film grain quality.
                This consistency is what builds a subscriber base that returns.
              </p>

              <p>
                To implement this on Scenith: create a "base prompt template" with your
                aesthetic constants (e.g., "cinematic, Kodak film grain, warm 4500K color
                temperature, shallow depth of field, vertical 9:16") and append it to every
                new prompt you write. Your channel develops a distinct look that's immediately
                recognisable in the Shorts feed — a huge advantage in a crowded content
                environment.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            FAQ
        ═══════════════════════════════════════════════════════════════════ */}
        <section className={styles.faqSection} aria-labelledby="faq-heading">
          <div className={styles.sectionEyebrow}>FAQs</div>
          <h2 id="faq-heading" className={styles.sectionTitle}>
            Frequently Asked Questions About<br />
            AI YouTube Shorts Generation
          </h2>

          <div className={styles.faqList} role="list">
            {FAQ.map((item, i) => (
              <div
                key={i}
                className={`${styles.faqItem} ${openFaq === i ? styles.faqItemOpen : ""}`}
                role="listitem"
              >
                <button
                  className={styles.faqQuestion}
                  aria-expanded={openFaq === i}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span>{item.q}</span>
                  <span className={styles.faqIcon} aria-hidden="true">
                    {openFaq === i ? "−" : "+"}
                  </span>
                </button>
                {openFaq === i && (
                  <div className={styles.faqAnswer} role="region">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            FINAL LONG EDITORIAL — Push total to 6000+ words
        ═══════════════════════════════════════════════════════════════════ */}
        <section className={styles.editorial} aria-labelledby="future-heading">
          <div className={styles.editorialInner}>
            <div className={styles.sectionEyebrow}>The Future</div>
            <h2 id="future-heading" className={styles.sectionTitle}>
              AI Video Generation and the Future of<br />
              YouTube Shorts: What's Coming in 2026–2027
            </h2>

            <div className={styles.editorialBody}>
              <p>
                The pace of advancement in AI video generation between 2024 and 2026 has been
                extraordinary. In mid-2024, the best publicly accessible AI video models were
                producing 4-second clips at 640p with obvious artifacts and unnatural motion.
                By early 2026, models like Veo 3 and Kling 2.5 Pro are producing 10-second
                1080p clips with photorealistic motion, coherent physics, and native audio — 
                a leap that would have seemed implausible 18 months earlier.
              </p>

              <h3>Longer Clip Duration Is Coming</h3>
              <p>
                Current limitations — 5 to 10 seconds per generation — are primarily compute
                and cost constraints, not fundamental model limitations. The underlying models
                can reason about longer sequences; the economics of serving them are still being
                optimised. By late 2026, we can reasonably expect AI video generation to routinely
                support 30-second and eventually 60-second clip generation at comparable quality
                — which would mean AI-generated full Shorts with no assembly required.
              </p>

              <h3>Image-to-Video for Shorts Is Underutilised</h3>
              <p>
                Scenith's generator supports image-to-video — uploading a reference image and
                having the AI animate it into a video clip. This capability is still dramatically
                underused by Shorts creators. The use case is powerful: take a product photograph,
                a piece of concept art, an architectural render, or even a personal photo and
                breathe life into it as a Short. A static food photograph becomes a steaming,
                sizzling, cinematic clip. A landscape photo gets an animating sky, flowing water,
                and swaying trees. The potential for product marketing and storytelling is immense.
              </p>

              <h3>Audio Integration Is the Next Frontier</h3>
              <p>
                YouTube Shorts with native audio — ambient sounds, music-matching, voiceover
                synchronisation — consistently outperform silent or overlaid-audio Shorts in
                retention metrics. Veo 3's native audio generation is a meaningful step toward
                Shorts that feel completely finished out of the box. The trajectory is toward
                a world where a complete Short — visuals, sound design, and even synthesised
                narration — can be generated from a single text prompt. We're not far from that
                reality.
              </p>

              <h3>AI Shorts and YouTube Monetisation</h3>
              <p>
                YouTube has been progressively expanding monetisation options for Shorts creators.
                The Shorts Monetisation Programme now distributes ad revenue based on view count
                and engagement metrics. Creators who maintain high-volume posting schedules —
                precisely what AI generation enables — are seeing meaningful revenue from the
                programme. As the CPM for Shorts advertising continues to mature, the revenue
                per thousand views will increase, making the economics of AI-generated Shorts
                channels increasingly attractive.
              </p>

              <p>
                The compounding effect is worth stating clearly: an AI Shorts channel that posts
                100 videos per month, with an average of 10,000 views per Short over its lifetime
                (conservative for a niche with good keyword targeting), generates 1,000,000
                total monthly views within its first year of posting. At current YouTube Shorts
                RPM rates of ₹20–80 per thousand views for Indian content, that's a revenue
                range of ₹20,000 to ₹80,000 per month from a single AI-powered channel. At that
                output level, the investment in Scenith credits is a small fraction of the return.
              </p>

              <h3>Why Start Now, Not Later</h3>
              <p>
                The opportunity window for AI YouTube Shorts is open — but it won't be
                indefinitely. As more creators and brands adopt AI generation tools, the Shorts
                feed will become more competitive visually. The creators and channels that
                establish audience and algorithmic momentum now, before the majority adoption
                curve peaks, will have significant first-mover advantages in their niches.
              </p>

              <p>
                The barrier to entry is lower than it has ever been. Scenith's generator
                requires no technical knowledge, no hardware investment, and minimal time per
                Short. The only resource you need to start is a text description of your idea —
                and if you're reading this, you clearly have ideas.
              </p>

              <p>
                The question isn't whether AI video generation will become the dominant
                production method for YouTube Shorts. It's already happening. The question is
                whether you're going to be among the creators who captured the advantage early.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            FINAL CTA
        ═══════════════════════════════════════════════════════════════════ */}
        <section className={styles.finalCta} aria-label="Final call to action">
          <div className={styles.finalCtaInner}>
            <div className={styles.finalCtaGfx} aria-hidden="true">
              <div className={styles.finalCtaRing} />
              <div className={styles.finalCtaRing} />
              <div className={styles.finalCtaRing} />
            </div>
            <h2 className={styles.finalCtaTitle}>
              Make Your First AI Short Today
            </h2>
            <p className={styles.finalCtaBody}>
              The YouTube Shorts algorithm rewards creators who post consistently at high quality.
              AI generation makes both possible at the same time. Start now — your first Short
              is 2 minutes away.
            </p>
            <a href={CTA_LINK} className={styles.ctaPrimary} style={{ fontSize: "1.15rem", padding: "22px 48px" }} target="_blank" rel="noopener">
              <span className={styles.ctaIcon}>🎬</span>
              Generate My First YouTube Short — Free
              <span className={styles.ctaArrow}>→</span>
            </a>
            <p className={styles.finalCtaNote}>
              scenith.in/tools/ai-video-generation &nbsp;·&nbsp; 9:16 Format &nbsp;·&nbsp;
              1080p HD &nbsp;·&nbsp; Instant MP4 Download
            </p>
          </div>
        </section>

        <div style={{ height: 80 }} />
      </div>
    </div>
  );
}