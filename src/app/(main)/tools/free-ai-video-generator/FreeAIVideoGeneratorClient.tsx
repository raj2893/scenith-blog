"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./FreeAIVideoGenerator.module.css";

// ─── Types ────────────────────────────────────────────────────────────────────

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

// ─── UTM Link ─────────────────────────────────────────────────────────────────

const CTA_URL =
  "https://scenith.in/tools/ai-video-generation?utm_source=free-ai-video-generator&utm_medium=cta&utm_campaign=seo-landing&utm_content=hero";

const CTA_URL_INLINE =
  "https://scenith.in/tools/ai-video-generation?utm_source=free-ai-video-generator&utm_medium=inline-cta&utm_campaign=seo-landing";

const CTA_URL_FAQ =
  "https://scenith.in/tools/ai-video-generation?utm_source=free-ai-video-generator&utm_medium=faq-cta&utm_campaign=seo-landing";

// ─── Sub-components ───────────────────────────────────────────────────────────

function AnimatedCounter({ end, suffix = "", duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const step = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * end));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

function FaqItem({ q, a }: { q: string; a: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`${styles.faqItem} ${open ? styles.faqOpen : ""}`}>
      <button className={styles.faqQ} onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>{q}</span>
        <span className={styles.faqChevron}>{open ? "−" : "+"}</span>
      </button>
      {open && <div className={styles.faqA}>{a}</div>}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function FreeAIVideoGeneratorClient() {
  const [activeTab, setActiveTab] = useState<"text" | "image">("text");
  const [demoPrompt, setDemoPrompt] = useState("");
  const demoPrompts = [
    "A golden retriever running through a sunlit meadow in slow motion…",
    "Aerial shot of a neon-lit futuristic city at night, cinematic 4K…",
    "Ocean waves crashing at golden hour, shallow depth of field…",
    "Abstract particle explosion forming a galaxy in deep space…",
    "A lone astronaut walking on Mars, dust storm approaching…",
  ];
  const promptIdx = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      promptIdx.current = (promptIdx.current + 1) % demoPrompts.length;
      setDemoPrompt(demoPrompts[promptIdx.current]);
    }, 2800);
    setDemoPrompt(demoPrompts[0]);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className={styles.page}>
      {/* ── Background ── */}
      <div className={styles.bg} aria-hidden="true" />
      <div className={styles.bgGrid} aria-hidden="true" />
      <div className={styles.bgNoise} aria-hidden="true" />

      <div className={styles.wrap}>

        {/* ── Breadcrumb ── */}
        <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
          <a href="/">Home</a>
          <span aria-hidden="true">›</span>
          <a href="/tools">Tools</a>
          <span aria-hidden="true">›</span>
          <span>Free AI Video Generator</span>
        </nav>

        {/* ═══════════════════════════════════════════════
            HERO SECTION
        ═══════════════════════════════════════════════ */}
        <section className={styles.hero} aria-labelledby="hero-heading">
          <div className={styles.heroEyebrow}>
            <span className={styles.eyebrowDot} aria-hidden="true" />
            <span> No credit card · Instant access</span>
          </div>

          <h1 id="hero-heading" className={styles.heroTitle}>
            Free AI Video Generator
            <span className={styles.heroTitleAccent}> — Text to Video in Seconds</span>
          </h1>

          <p className={styles.heroSub}>
            The most powerful free AI video generator of 2026. Type a prompt, pick a model, and watch
            your idea become a cinematic video — no editing skills, no software, no credit card.
            Powered by <strong>Wan 2.5</strong>, <strong>Kling 2.6 Pro</strong>, and{" "}
            <strong>Veo 3.1</strong>.
          </p>

          {/* ── Hero CTA ── */}
          <div className={styles.heroCta}>
            <a href={CTA_URL} className={styles.btnPrimary} rel="noopener">
              <span className={styles.btnGlow} aria-hidden="true" />
              ✨ Generate Free AI Video Now
            </a>
            <a href={CTA_URL} className={styles.btnSecondary} rel="noopener">
              👀 See example outputs →
            </a>
          </div>

          <p className={styles.heroNote}>
            50 free credits on signup · No card required · Watermark-free videos
          </p>

          {/* ── Animated demo prompt input (decorative) ── */}
          <div className={styles.demoInputWrap} aria-hidden="true">
            <div className={styles.demoInputLabel}>Your prompt</div>
            <div className={styles.demoInput}>
              <span className={styles.demoInputIcon}>✍️</span>
              <span className={styles.demoInputText}>{demoPrompt}</span>
              <span className={styles.demoInputCursor} />
            </div>
            <div className={styles.demoArrow}>↓ AI generates your video</div>
            <a href={CTA_URL} className={styles.demoTryBtn} rel="noopener">
              Try this prompt →
            </a>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            STATS BAR
        ═══════════════════════════════════════════════ */}
        <section className={styles.statsBar} aria-label="Platform statistics">
          {[
            { label: "Videos Generated", value: 48200, suffix: "+" },
            { label: "AI Models Available", value: 5, suffix: "" },
            { label: "Max Resolution", value: 1080, suffix: "p" },
            { label: "Avg. Generation Time", value: 60, suffix: "s" },
          ].map((stat) => (
            <div key={stat.label} className={styles.stat}>
              <strong className={styles.statValue}>
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </strong>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </section>

        {/* ═══════════════════════════════════════════════
            WHAT IS AN AI VIDEO GENERATOR
        ═══════════════════════════════════════════════ */}
        <section className={styles.section} aria-labelledby="what-heading">
          <div className={styles.sectionInner}>
            <h2 id="what-heading" className={styles.h2}>
              What Is a Free AI Video Generator?
            </h2>
            <div className={styles.prose}>
              <p>
                A <strong>free AI video generator</strong> is a web-based tool that uses deep learning
                and diffusion models to convert your written description — or a reference image — into
                a fully rendered video clip, completely from scratch. Unlike traditional video editors
                that require footage, audio tracks, and hours of timeline work, an AI video generator
                does everything in one step: you describe what you want in plain language, and the AI
                handles the rest.
              </p>
              <p>
                In 2026, the quality of AI-generated videos has reached a point where they are
                virtually indistinguishable from professionally produced content — smooth camera
                motion, photorealistic lighting, natural subject movement, and even synchronized
                ambient audio. Tools like <strong>Veo 3.1</strong> and{" "}
                <strong>Kling 2.6 Pro</strong> are setting a new standard for what's possible with a
                single text prompt.
              </p>
              <p>
                Scenith's free AI video generator brings all of these cutting-edge models together in
                one clean interface — no API keys, no local GPU required, no complicated setup. You
                simply visit the tool, type your prompt, select your model, and generate. The result
                is a downloadable MP4 video, watermark-free, ready to share on YouTube, Instagram
                Reels, TikTok, LinkedIn, or anywhere else.
              </p>
              <p>
                Whether you're a content creator looking to scale your output, a marketer who needs
                quick explainer clips, a developer testing AI capabilities, or a complete beginner
                experimenting with generative media for the first time — this tool is built for you.
              </p>
            </div>

            <a href={CTA_URL_INLINE} className={styles.inlineCta} rel="noopener">
              → Start Generating Free AI Videos — No Signup Needed to Explore
            </a>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            HOW IT WORKS (INTERACTIVE TABS)
        ═══════════════════════════════════════════════ */}
        <section className={styles.section} aria-labelledby="how-heading">
          <h2 id="how-heading" className={styles.h2}>
            How to Generate a Free AI Video in 3 Steps
          </h2>
          <p className={styles.sectionSub}>
            No software. No tutorial. No experience needed. Here's exactly how it works:
          </p>

          <div className={styles.tabRow} role="tablist" aria-label="Generation type">
            <button
              role="tab"
              aria-selected={activeTab === "text"}
              className={`${styles.tab} ${activeTab === "text" ? styles.tabActive : ""}`}
              onClick={() => setActiveTab("text")}
            >
              ✍️ Text to Video
            </button>
            <button
              role="tab"
              aria-selected={activeTab === "image"}
              className={`${styles.tab} ${activeTab === "image" ? styles.tabActive : ""}`}
              onClick={() => setActiveTab("image")}
            >
              🖼️ Image to Video
            </button>
          </div>

          <div className={styles.steps}>
            {activeTab === "text" ? (
              <>
                {[
                  {
                    num: "01",
                    icon: "✍️",
                    title: "Write your video prompt",
                    body: `Describe exactly what you want to see. The more specific, the better. Include subject, setting, lighting, camera movement, style and mood. Example: "A sleek electric sports car drifting around a rain-slicked corner at night, neon reflections, cinematic bokeh, slow motion."`,
                  },
                  {
                    num: "02",
                    icon: "⚙️",
                    title: "Choose model, duration & ratio",
                    body: `Pick from 5 state-of-the-art AI video models. Choose 5s or 10s duration. Select 16:9 for YouTube/desktop, 9:16 for Reels/TikTok, or 1:1 for Instagram. Optionally add a negative prompt to exclude things you don't want.`,
                  },
                  {
                    num: "03",
                    icon: "🎬",
                    title: "Generate, preview & download",
                    body: `Hit Generate. Your video is typically ready in 30–120 seconds. Preview it directly in your browser, then download a full-quality watermark-free MP4. Share it anywhere — no attribution required.`,
                  },
                ].map((s) => (
                  <div className={styles.step} key={s.num}>
                    <div className={styles.stepNum}>{s.num}</div>
                    <div className={styles.stepIcon}>{s.icon}</div>
                    <h3 className={styles.stepTitle}>{s.title}</h3>
                    <p className={styles.stepBody}>{s.body}</p>
                  </div>
                ))}
              </>
            ) : (
              <>
                {[
                  {
                    num: "01",
                    icon: "🖼️",
                    title: "Upload your reference image",
                    body: `Drag and drop any PNG, JPG, or WEBP image up to 10MB. This becomes the first frame of your video. Works great with product photos, portraits, landscapes, illustrations, and even AI-generated images.`,
                  },
                  {
                    num: "02",
                    icon: "💬",
                    title: "Describe the motion you want",
                    body: `Write a motion prompt: what should move, how, and in what direction? Example: "The character slowly turns toward the camera, wind blowing through hair, dramatic rim lighting shifts, shallow depth of field." The AI reads both the image and your prompt together.`,
                  },
                  {
                    num: "03",
                    icon: "▶️",
                    title: "Get your animated video",
                    body: `The AI animates your still image into a smooth, natural video clip. Download your MP4 and use it in any content — social posts, ads, presentations, product demos, websites, or just for fun.`,
                  },
                ].map((s) => (
                  <div className={styles.step} key={s.num}>
                    <div className={styles.stepNum}>{s.num}</div>
                    <div className={styles.stepIcon}>{s.icon}</div>
                    <h3 className={styles.stepTitle}>{s.title}</h3>
                    <p className={styles.stepBody}>{s.body}</p>
                  </div>
                ))}
              </>
            )}
          </div>

          <div className={styles.ctaCenter}>
            <a href={CTA_URL} className={styles.btnPrimary} rel="noopener">
              ✨ Try the Free AI Video Generator
            </a>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            MODEL COMPARISON
        ═══════════════════════════════════════════════ */}
        <section className={styles.section} aria-labelledby="models-heading">
          <h2 id="models-heading" className={styles.h2}>
            5 AI Video Models — All Included Free
          </h2>
          <p className={styles.sectionSub}>
            Most "free" AI video tools lock you into a single low-quality model. Scenith gives you
            access to 5 industry-leading models on the free tier, so you can compare outputs and find
            what works best for your style.
          </p>

          <div className={styles.modelGrid}>
            {[
              {
                id: "wan2.5",
                name: "Wan 2.5",
                badge: "Fast",
                badgeColor: "#10B981",
                res: "480p",
                credits: "46 cr / 5s",
                bestFor: "Quick iterations, concept testing, high-volume generation",
                tags: ["Fastest", "Low Cost", "480p"],
                desc:
                  "The workhorse model. Wan 2.5 is optimized for speed without sacrificing coherence. It's the best choice when you're iterating through multiple prompt variations or need a large volume of clips on a budget. Typical generation time: under 45 seconds.",
              },
              {
                id: "kling-v2.5-turbo",
                name: "Kling 2.5 Turbo",
                badge: "Balanced",
                badgeColor: "#6366F1",
                res: "1080p",
                credits: "64 cr / 5s",
                bestFor: "Social content, brand videos, daily content creation",
                tags: ["1080p HD", "Balanced", "Popular"],
                desc:
                  "The sweet spot. Kling 2.5 Turbo delivers 1080p Full HD output with excellent motion coherence at roughly half the credit cost of the Pro models. It's the most popular choice among creators who want quality without burning through their credit balance.",
              },
              {
                id: "kling-v2.6-pro",
                name: "Kling 2.6 Pro",
                badge: "Pro",
                badgeColor: "#8B5CF6",
                res: "1080p",
                credits: "64 cr / 5s",
                bestFor: "Cinematic content, client work, high-quality social ads",
                tags: ["1080p HD", "Cinematic", "Pro Quality"],
                desc:
                  "Kling 2.6 Pro is the updated flagship from the Kling team, featuring improved understanding of complex scene descriptions, better human motion rendering, and more consistent lighting across frames. The go-to for creators who need professional-grade output.",
              },
              {
                id: "veo3.1-fast",
                name: "Veo 3.1 Fast",
                badge: "Photorealistic",
                badgeColor: "#F59E0B",
                res: "1080p",
                credits: "92 cr / 5s",
                bestFor: "Photorealistic scenes, nature videos, architectural visualization",
                tags: ["1080p HD", "Photorealistic", "Google AI"],
                desc:
                  "Powered by Google's Veo 3.1 architecture, this fast variant delivers strikingly photorealistic 1080p output with exceptional lighting physics and texture detail. It's the best free AI video generator option for scenes that need to look real.",
              },
              {
                id: "veo3.1",
                name: "Veo 3.1",
                badge: "Best Quality",
                badgeColor: "#EF4444",
                res: "1080p",
                credits: "186 cr / 5s",
                bestFor: "Premium content, film-quality output, portfolio pieces",
                tags: ["1080p HD", "Best Quality", "Native Audio"],
                desc:
                  "The pinnacle. Veo 3.1 full model generates the highest-quality AI video available — with native AI audio generation included. Sound effects, ambient audio, even speech are generated in sync with the visual. The credits are higher, but for premium output, nothing else compares.",
              },
            ].map((model) => (
              <article className={styles.modelCard} key={model.id}>
                <div className={styles.modelCardTop}>
                  <div>
                    <h3 className={styles.modelName}>{model.name}</h3>
                    <div className={styles.modelTags}>
                      {model.tags.map((tag) => (
                        <span key={tag} className={styles.modelTag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                  <span
                    className={styles.modelBadge}
                    style={{ borderColor: model.badgeColor, color: model.badgeColor }}
                  >
                    {model.badge}
                  </span>
                </div>
                <p className={styles.modelDesc}>{model.desc}</p>
                <div className={styles.modelMeta}>
                  <span>🎯 Best for: {model.bestFor}</span>
                  <span>⚡ {model.credits}</span>
                </div>
                <a href={CTA_URL_INLINE} className={styles.modelCta} rel="noopener">
                  Use {model.name} Free →
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            USE CASES
        ═══════════════════════════════════════════════ */}
        <section className={styles.section} aria-labelledby="usecases-heading">
          <h2 id="usecases-heading" className={styles.h2}>
            Who Is This Free AI Video Generator For?
          </h2>
          <p className={styles.sectionSub}>
            AI video generation is no longer a niche developer tool — it's becoming a fundamental
            part of how content is made in 2026. Here's who's using it and how:
          </p>

          <div className={styles.useCaseGrid}>
            {[
              {
                icon: "📱",
                title: "Social Media Creators",
                body:
                  "Need 30 Reels a month but only have time to script 5? AI video generators are redefining what's possible for solo creators. Generate B-roll, concept pieces, visual essays, or full short-form clips directly from a text prompt. The 9:16 aspect ratio outputs are Reels and TikTok ready right out of the box.",
              },
              {
                icon: "🛍️",
                title: "E-commerce & Product Marketers",
                body:
                  "Product videos drive conversions — but shooting them is expensive. With Image-to-Video, you can upload a product photo and animate it: a perfume bottle rotating slowly in a fog of light, a shoe spinning against a gradient backdrop, a skincare product being poured. All from a single still image.",
              },
              {
                icon: "🎓",
                title: "Educators & Online Course Creators",
                body:
                  "Visualize abstract concepts, historical events, or scientific processes that are impossible to film. \"A cross-section view of a human cell dividing under a microscope\" or \"The Roman Colosseum being constructed, time-lapse style, aerial shot\" — these kinds of educational visuals are now a single prompt away.",
              },
              {
                icon: "🏢",
                title: "Agencies & Freelancers",
                body:
                  "Pitch clients with custom video concepts before production even begins. Use AI video as a mood-board in motion. Deliver fast-turnaround social video packages. Offer video content production at scale without a full production team. The economics of content production have fundamentally shifted.",
              },
              {
                icon: "🎮",
                title: "Game Developers & Indie Studios",
                body:
                  "Generate concept art in motion — atmospheric scenes, environment previews, character movement tests. AI video is becoming a standard part of the pre-production pipeline for indie studios who need to visualize before they build. It's also used to generate cinematic cutscene concepts.",
              },
              {
                icon: "🧑‍💻",
                title: "Developers & AI Researchers",
                body:
                  "Evaluate model capabilities side-by-side without managing APIs or paying for GPU time. Scenith provides a clean interface to test prompts across Wan 2.5, Kling 2.6, and Veo 3.1 simultaneously, making it a valuable benchmarking and research tool.",
              },
              {
                icon: "🎨",
                title: "Artists & Creative Experimenters",
                body:
                  "AI video is the new generative art medium. Push the limits of what these models can create with surreal, abstract, or experimental prompts. Many artists are now exhibiting AI-generated video works in galleries. The tools are accessible — the creative vision is what separates good from great.",
              },
              {
                icon: "📣",
                title: "Startups & Bootstrapped Founders",
                body:
                  "Need a product demo video but your MVP isn't built yet? Generate a conceptual walkthrough video that shows the vision. Need a social ad for paid channels? Generate 10 variants in 20 minutes and test which hooks perform best. AI video cuts weeks of production down to hours.",
              },
            ].map((uc) => (
              <article className={styles.useCaseCard} key={uc.title}>
                <div className={styles.useCaseIcon}>{uc.icon}</div>
                <h3 className={styles.useCaseTitle}>{uc.title}</h3>
                <p className={styles.useCaseBody}>{uc.body}</p>
              </article>
            ))}
          </div>

          <div className={styles.ctaCenter}>
            <a href={CTA_URL} className={styles.btnPrimary} rel="noopener">
              🎬 Start Creating — 50 Free Credits Waiting
            </a>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            PROMPT GUIDE
        ═══════════════════════════════════════════════ */}
        <section className={styles.section} aria-labelledby="prompts-heading">
          <h2 id="prompts-heading" className={styles.h2}>
            30 Free AI Video Prompt Examples That Actually Work
          </h2>
          <p className={styles.sectionSub}>
            Not sure what to type? Here are 30 high-quality prompts across different categories —
            copy any of these directly into the generator:
          </p>

          <div className={styles.promptCategories}>
            {[
              {
                category: "🌿 Nature & Landscapes",
                prompts: [
                  "Timelapse of storm clouds rolling over a mountain range at dusk, dramatic lighting, cinematic 4K",
                  "Underwater shot of a coral reef, schools of tropical fish, golden sunlight filtering from above, slow motion",
                  "Cherry blossom petals falling in slow motion through a sunlit Japanese garden, shallow depth of field",
                  "A lone wolf walking through a foggy pine forest at dawn, tracking shot, muted natural tones",
                  "The Northern Lights shimmering above a frozen lake in Iceland, reflection in the ice, timelapse",
                  "Macro shot of raindrops falling on a green leaf, super slow motion, studio lighting",
                ],
              },
              {
                category: "🏙️ Urban & Architecture",
                prompts: [
                  "Aerial drone shot slowly rising above a rain-soaked city at night, neon reflections, cinematic",
                  "A bustling Tokyo street corner at rush hour, shallow depth of field, warm tungsten lighting",
                  "A brutalist concrete building interior, sunlight casting geometric shadows across the floor, timelapse",
                  "An empty grand train station at sunrise, shafts of light through tall windows, cinematic wide shot",
                  "Futuristic smart city skyline, flying vehicles, holographic billboards, golden hour lighting",
                ],
              },
              {
                category: "🎭 Character & Portrait",
                prompts: [
                  "A medieval knight in detailed armor slowly turning to face the camera, dramatic rim lighting, dark background",
                  "A scientist in a glowing lab coat examining a glowing serum, cinematic close-up, blue ambient light",
                  "Portrait of an elderly fisherman looking out to sea, weathered face, ocean wind, golden hour",
                  "A ballet dancer performing a slow pirouette in an empty theater, spotlight, dramatic shadows",
                  "A cyberpunk hacker in a dimly lit server room, face illuminated by screen glow, close-up",
                ],
              },
              {
                category: "✨ Abstract & Artistic",
                prompts: [
                  "Abstract fluid simulation: gold and midnight blue ink dissolving in water, macro, ultra HD",
                  "Geometric shapes morphing and transforming against a deep black background, neon colors, 3D render",
                  "A glowing magic portal opening in a dark forest, particles of light swirling outward",
                  "Crystalline structures growing in extreme slow motion, macro lens, iridescent light refraction",
                  "Paint particles exploding into a butterfly shape, high speed camera, pure white background",
                ],
              },
              {
                category: "🛸 Sci-Fi & Fantasy",
                prompts: [
                  "A massive alien spacecraft slowly descending through storm clouds above a mountain range",
                  "An astronaut floating in zero gravity inside a space station, Earth visible through the window",
                  "A dragon flying over a volcanic island at sunset, epic scale, cinematic wide shot",
                  "A futuristic train rushing through a transparent tube above the clouds, exterior tracking shot",
                  "Ruins of an ancient civilization slowly being reclaimed by glowing bioluminescent jungle vines",
                ],
              },
              {
                category: "🛍️ Product & Commercial",
                prompts: [
                  "A luxury perfume bottle slowly rotating, backlit with warm golden light, smoke wisps, black background",
                  "A pair of sneakers being slowly revealed from mist, product video, clean white background",
                  "Coffee being poured into a clear glass cup in extreme slow motion, macro, steam rising",
                  "A smartphone screen lighting up with a sleek UI animation, product demo style, clean white studio",
                ],
              },
            ].map((cat) => (
              <div className={styles.promptCat} key={cat.category}>
                <h3 className={styles.promptCatTitle}>{cat.category}</h3>
                <div className={styles.promptList}>
                  {cat.prompts.map((p) => (
                    <a
                      key={p}
                      href={`${CTA_URL_INLINE}&prompt=${encodeURIComponent(p)}`}
                      className={styles.promptChip}
                      rel="noopener"
                      title={`Try this prompt: ${p}`}
                    >
                      <span className={styles.promptChipIcon}>▶</span>
                      <span>{p}</span>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            DEEP GUIDE: HOW TO WRITE GOOD PROMPTS
        ═══════════════════════════════════════════════ */}
        <section className={styles.section} aria-labelledby="guide-heading">
          <div className={styles.guideCard}>
            <h2 id="guide-heading" className={styles.h2}>
              The Complete Guide to Writing AI Video Prompts That Actually Work
            </h2>
            <div className={styles.prose}>
              <p>
                The single biggest factor in the quality of your AI-generated video is{" "}
                <strong>prompt quality</strong>. A vague prompt produces a generic video. A specific,
                well-structured prompt produces exactly what you imagined. Here's everything you need
                to know:
              </p>

              <h3>1. Always Specify a Camera Angle or Shot Type</h3>
              <p>
                AI video models respond extremely well to cinematographic language. Rather than just
                describing a scene, describe <em>how</em> it's being filmed. Words like "aerial
                drone shot," "tracking shot," "close-up," "wide establishing shot," "low angle," "POV
                shot," "dolly zoom," and "birds-eye view" all dramatically change the output.
              </p>

              <h3>2. Define the Lighting Before Anything Else</h3>
              <p>
                Lighting is what separates cinematic from flat. Specify your light source, quality,
                and color temperature. "Golden hour sunlight streaming through trees" produces
                something completely different from "overcast diffused daylight." Try terms like
                "harsh neon backlight," "soft studio lighting with rim light," "candlelight," "blue
                moonlight," "volumetric god rays," or "practical tungsten fill."
              </p>

              <h3>3. Include Motion Description — Not Just Scene Description</h3>
              <p>
                Video is about movement. Describe what should be moving, how fast, and in what
                direction. "A bird flying" is weak. "A hawk in slow-motion banking left against a
                cerulean sky, wings fully extended, subtle feather vibration" is strong. Always
                specify the speed — "slow motion," "real-time," "timelapse" — as this dramatically
                affects the feel.
              </p>

              <h3>4. Name a Visual Style or Reference</h3>
              <p>
                Reference cinematic styles, eras, or directors. "Shot in the style of a BBC nature
                documentary," "aesthetic reminiscent of Blade Runner 2049," "Wes Anderson's symmetric
                composition," "iPhone footage, handheld, natural light" — these shorthand references
                carry enormous stylistic information that the model can translate into the output.
              </p>

              <h3>5. Use the Negative Prompt Field</h3>
              <p>
                Scenith's generator includes a negative prompt field where you tell the AI what NOT
                to generate. This is one of the most underused features. If your videos keep coming
                out blurry, add "blurry, out of focus, low resolution." If you're getting extra limbs
                or distorted faces, add "distorted anatomy, deformed hands, extra limbs, uncanny
                faces." Refine your negatives over time and save them as a template.
              </p>

              <h3>6. Prompt Length Sweet Spot: 30–80 Words</h3>
              <p>
                Too short (under 15 words) and you give the model too much creative latitude —
                results are unpredictable. Too long (over 120 words) and the model may struggle to
                weight all the information correctly, creating a "prompt collision." The sweet spot is
                30–80 words: enough detail to guide the model without overwhelming it.
              </p>

              <h3>7. Iterate Fast Using the Fastest Model First</h3>
              <p>
                When exploring a new concept, start with Wan 2.5. It's the cheapest and fastest
                model, perfect for testing whether your prompt structure is working before committing
                to a higher-credit generation. Once you've refined the prompt to give a result you
                like, upscale to Kling 2.6 Pro or Veo 3.1 for your final high-quality output. This
                approach conserves credits and speeds up your workflow.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            COMPARISON: SCENITH VS OTHERS
        ═══════════════════════════════════════════════ */}
        <section className={styles.section} aria-labelledby="compare-heading">
          <h2 id="compare-heading" className={styles.h2}>
            Scenith vs Other Free AI Video Generators in 2026
          </h2>
          <p className={styles.sectionSub}>
            There are now dozens of AI video tools claiming to be "free." Here's an honest comparison
            of what you actually get:
          </p>

          <div className={styles.tableWrap} role="region" aria-label="Feature comparison table" tabIndex={0}>
            <table className={styles.compareTable}>
              <thead>
                <tr>
                  <th scope="col">Feature</th>
                  <th scope="col" className={styles.thHighlight}>Scenith ✓</th>
                  <th scope="col">Typical Competitor</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Free credits on signup", "50 credits — instant, no card", "Usually 0–3 video trials"],
                  ["Number of AI models", "5 models (Wan, Kling, Veo)", "1–2 models"],
                  ["Max resolution (free)", "1080p Full HD", "480p or 720p with watermark"],
                  ["Watermark on free output", "No watermark", "Watermark on free tier"],
                  ["Image to Video support", "✓ Full support", "Paid feature only"],
                  ["Native audio generation", "✓ via Veo 3.1", "Not available"],
                  ["Aspect ratio options", "16:9, 9:16, 1:1", "16:9 only"],
                  ["Negative prompt support", "✓ Yes", "Rarely included"],
                  ["Video duration options", "5s and 10s", "Usually 4s max"],
                  ["Download format", "MP4, full quality", "Often requires paid plan"],
                  ["API access available", "✓ via Scenith platform", "Expensive enterprise tier"],
                  ["Transparent credit pricing", "✓ Per-model, per-duration costs shown", "Vague monthly caps"],
                ].map(([feature, scenith, competitor]) => (
                  <tr key={feature as string}>
                    <td>{feature}</td>
                    <td className={styles.tdHighlight}>{scenith}</td>
                    <td className={styles.tdCompetitor}>{competitor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className={styles.ctaCenter}>
            <a href={CTA_URL} className={styles.btnPrimary} rel="noopener">
              Try Scenith Free — No Card Required
            </a>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            TIPS & TRICKS DEEP DIVE
        ═══════════════════════════════════════════════ */}
        <section className={styles.section} aria-labelledby="tips-heading">
          <h2 id="tips-heading" className={styles.h2}>
            Advanced Tips for Getting the Best Results from Free AI Video Generation
          </h2>
          <div className={styles.prose}>
            <h3>Use Cinematography Vocabulary — It's Literally the Language These Models Speak</h3>
            <p>
              AI video models are trained on vast libraries of video content tagged with cinematographic
              metadata. They have deep associations between terms like "rack focus," "whip pan,"
              "steadicam," "handheld," "locked-off shot," and the visual outputs those terms represent.
              Lean into this. Use film school vocabulary the same way a director briefs a DP, and the
              model will respond accordingly.
            </p>

            <h3>Aspect Ratio Has More Impact Than You Think</h3>
            <p>
              The aspect ratio you choose doesn't just change the crop — it fundamentally changes how
              the model composes the scene. 16:9 landscape outputs tend to produce sweeping, wide
              compositions. 9:16 portrait outputs feel more intimate, often pulling focus to a central
              subject. 1:1 square produces tighter, product-display-style compositions. Think of
              aspect ratio as a compositional brief, not just a format choice.
            </p>

            <h3>Audio-Enabled Videos Need Audio-Aware Prompts</h3>
            <p>
              When using Veo 3.1's native audio feature, your prompt should describe the sonic
              environment as well as the visual one. "Ocean waves crashing at sunset" will generate
              environmental wave sounds. But if you write "Ocean waves crashing at sunset with a
              distant foghorn and seagull calls," you're giving the audio model specific instructions
              that dramatically improve the synchronized audio output.
            </p>

            <h3>The Image-to-Video Input Image Quality Matters Enormously</h3>
            <p>
              For Image-to-Video generation, the quality, resolution, and composition of your input
              image sets the ceiling on your video output. Start with the highest resolution image
              you have. Clean compositions with a clear main subject and simple backgrounds produce
              the most predictable, high-quality animations. Cluttered images with many competing
              elements tend to produce jittery, incoherent motion.
            </p>

            <h3>Break Long Concepts Into Short Clips and Edit Them Together</h3>
            <p>
              AI video models excel at 5–10 second clips with a clear single action or camera
              movement. Rather than trying to generate one long complex video, think in terms of shot
              lists. Generate individual shots and then edit them together in your video editor. This
              approach is both more cost-effective and produces higher-quality final outputs than
              trying to cram too much action into a single generation.
            </p>

            <h3>Use Real Geographic Locations for Instantly Recognizable Results</h3>
            <p>
              Instead of "a famous landmark at night," write "the Eiffel Tower in Paris seen from
              the Trocadero at night, sparkle lights animation, long exposure photography style." 
              Real locations and landmarks are heavily represented in training data, so they produce
              detailed, accurate, and immediately recognizable results.
            </p>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            THE FUTURE OF AI VIDEO (CONTENT DEPTH)
        ═══════════════════════════════════════════════ */}
        <section className={styles.section} aria-labelledby="future-heading">
          <h2 id="future-heading" className={styles.h2}>
            The State of Free AI Video Generation in 2026
          </h2>
          <div className={styles.prose}>
            <p>
              Two years ago, AI-generated video looked like a technical curiosity — jittery, short,
              inconsistent, and clearly artificial. In 2026, the trajectory has been nothing short of
              exponential. Models like Veo 3.1 and Kling 2.6 Pro are producing 1080p footage that
              holds up to professional scrutiny. Motion consistency has improved dramatically. Human
              faces and hands — the Achilles heel of early generative models — are rendered with
              increasing realism.
            </p>
            <p>
              What's particularly significant about the current moment is the democratization of
              access. Six months ago, using Veo 3.1 or Kling 2.6 required either a direct API
              integration costing hundreds of dollars per month, or a position at a major media
              company. Today, any creator, marketer, educator, or developer with an internet
              connection and a free Scenith account can generate cinema-quality video in under two
              minutes.
            </p>
            <p>
              The implications for content production are enormous. The bottleneck in video content
              has historically been production cost — equipment, locations, crew, editing time. AI
              video generators don't eliminate this bottleneck entirely, but they compress it
              dramatically for certain categories of content: concept visualization, social media
              B-roll, product showcases, educational illustrations, creative experiments, and
              rapid-iteration prototype content.
            </p>
            <p>
              What remains irreplaceable — and what AI video enables, not replaces — is the human
              creative layer: the vision, the emotional intelligence, the brand voice, the strategic
              intent behind the content. The prompt is the creative direction. The AI is the
              production studio. The person holding the keyboard is the director.
            </p>
            <p>
              We are in the earliest days of what may become the dominant medium of digital
              communication. In 2026, writing skills opened doors. In 2028, prompt engineering for
              multimodal AI — text, image, video, and audio combined — may be the baseline literacy
              of the digital creator economy. The tools are free. The time to start is now.
            </p>
          </div>

          <a href={CTA_URL_INLINE} className={styles.inlineCta} rel="noopener">
            → Join thousands of creators already generating AI videos on Scenith — Free to start
          </a>
        </section>

        {/* ═══════════════════════════════════════════════
            STICKY HERO CTA (MID-PAGE REPEAT)
        ═══════════════════════════════════════════════ */}
        <section className={styles.midCta} aria-label="Call to action">
          <div className={styles.midCtaInner}>
            <div className={styles.midCtaText}>
              <h2 className={styles.midCtaTitle}>Ready to generate your first AI video?</h2>
              <p className={styles.midCtaSub}>
                50 free credits waiting. No credit card. Instant access to 5 AI video models.
                Watermark-free MP4 downloads.
              </p>
            </div>
            <a href={CTA_URL} className={styles.btnPrimary} rel="noopener" style={{ flexShrink: 0 }}>
              ✨ Generate Free AI Video Now
            </a>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            FAQ
        ═══════════════════════════════════════════════ */}
        <section className={styles.section} aria-labelledby="faq-heading">
          <h2 id="faq-heading" className={styles.h2}>
            Frequently Asked Questions — Free AI Video Generator
          </h2>

          <div className={styles.faqList} role="list">
            {[
              {
                q: "Is this AI video generator really free to use?",
                a: (
                  <>
                    <p>
                      Yes. Creating an account on Scenith is completely free and gives you 50 credits
                      immediately — no credit card required at signup. Those 50 credits are enough to
                      generate 1 video using Wan 2.5 (our fastest model) at 5 seconds duration, or
                      you can spread them across shorter tests to explore the tool.
                    </p>
                    <p>
                      When you want more credits,{" "}
                      <a href={CTA_URL_FAQ} rel="noopener">paid plans start at $9/month</a> for 300
                      credits, which covers 6+ high-quality 1080p videos per month.
                    </p>
                  </>
                ),
              },
              {
                q: "How long does it take to generate an AI video?",
                a: (
                  <p>
                    Generation time varies by model and current server load. Wan 2.5, our fastest
                    model, typically returns results in 30–45 seconds. Kling 2.5 Turbo and Kling 2.6
                    Pro average 45–90 seconds. Veo 3.1 Fast averages 60–90 seconds. Veo 3.1 full
                    model averages 90–150 seconds. All times are measured from submission to
                    completed download-ready video.
                  </p>
                ),
              },
              {
                q: "Do I need to download any software to use the AI video generator?",
                a: (
                  <p>
                    No software download is required. Scenith is a fully browser-based tool. It works
                    in Chrome, Firefox, Safari, and Edge on both desktop and mobile. All processing
                    happens on our servers — your device doesn't need a GPU or any special hardware.
                  </p>
                ),
              },
              {
                q: "Can I use AI-generated videos commercially?",
                a: (
                  <p>
                    Yes. Videos generated through Scenith are yours to use for any purpose — personal
                    or commercial — including YouTube monetization, paid social ads, client delivery,
                    product marketing, and resale as part of a service. You own the output. No
                    royalties, no licensing fees, no attribution required.
                  </p>
                ),
              },
              {
                q: "What's the difference between Text-to-Video and Image-to-Video?",
                a: (
                  <p>
                    Text-to-Video generates a video entirely from your written prompt — every pixel
                    of every frame is created from scratch by the AI. Image-to-Video takes an
                    existing image (a product photo, portrait, landscape, or illustration) and
                    animates it based on your motion prompt, bringing a still image to life. Both
                    modes support all aspect ratios and duration options.
                  </p>
                ),
              },
              {
                q: "Which AI video model should I choose as a beginner?",
                a: (
                  <p>
                    Start with <strong>Wan 2.5</strong> for your first few generations. It's the
                    most affordable, fastest, and gives you a quick feedback loop to refine your
                    prompts. Once you have a prompt structure that's producing good results, try the
                    same prompt on <strong>Kling 2.5 Turbo</strong> or{" "}
                    <strong>Kling 2.6 Pro</strong> for 1080p output. Save Veo 3.1 for your best
                    prompts when you want the highest possible quality.
                  </p>
                ),
              },
              {
                q: "Are there any restrictions on what I can generate?",
                a: (
                  <p>
                    Scenith's AI video generator must be used in accordance with our{" "}
                    <a href="/terms">Terms of Service</a>. Generating content that depicts real
                    individuals without consent, NSFW content, deepfakes, or content designed to
                    deceive or harass is strictly prohibited. We use automated and manual moderation
                    to enforce these guidelines.
                  </p>
                ),
              },
              {
                q: "Can I generate videos on mobile?",
                a: (
                  <p>
                    Yes. Scenith's AI video generator is fully responsive and works on mobile
                    browsers. For Image-to-Video, you can upload directly from your phone's camera
                    roll. The video preview and download also work natively in mobile Safari and
                    Chrome.
                  </p>
                ),
              },
              {
                q: "What happens to unused free credits? Do they expire?",
                a: (
                  <p>
                    Free account credits do not expire as long as your account remains active (at
                    least one login per 90 days). Paid plan credits follow the expiry terms of your
                    subscription plan. Detailed credit terms are outlined on our{" "}
                    <a href="/pricing">pricing page</a>.
                  </p>
                ),
              },
              {
                q: "How do I get the best quality from the free AI video generator?",
                a: (
                  <p>
                    The single most impactful thing you can do is improve your prompt. Describe the
                    scene with cinematographic language: shot type, camera movement, lighting, mood,
                    style reference, and motion description. Use the negative prompt to exclude common
                    artifacts. Start with Wan 2.5 for fast iteration, then finalize with Kling 2.6
                    Pro or Veo 3.1 for the highest quality output.
                  </p>
                ),
              },
            ].map(({ q, a }) => (
              <FaqItem key={q} q={q} a={a} />
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            FINAL CTA SECTION
        ═══════════════════════════════════════════════ */}
        <section className={styles.finalCta} aria-labelledby="final-cta-heading">
          <div className={styles.finalCtaGlow} aria-hidden="true" />
          <span className={styles.finalCtaEyebrow}>Free forever · No credit card</span>
          <h2 id="final-cta-heading" className={styles.finalCtaTitle}>
            Your First Free AI Video
            <br />
            is One Prompt Away
          </h2>
          <p className={styles.finalCtaSub}>
            Join thousands of creators, marketers, and developers who are already using Scenith's
            free AI video generator to produce stunning content at scale. 50 credits. No card. No
            watermark. No catch.
          </p>
          <a href={CTA_URL} className={styles.btnPrimaryLarge} rel="noopener">
            <span className={styles.btnGlow} aria-hidden="true" />
            ✨ Generate Your First Free AI Video
          </a>
          <div className={styles.finalCtaFeatures}>
            {[
              "✓ Wan 2.5, Kling 2.6 Pro, Veo 3.1",
              "✓ 1080p watermark-free MP4",
              "✓ Text-to-Video & Image-to-Video",
              "✓ 16:9 · 9:16 · 1:1 ratios",
              "✓ Native AI audio on Veo 3.1",
              "✓ Commercial use included",
            ].map((f) => (
              <span key={f} className={styles.finalCtaFeature}>{f}</span>
            ))}
          </div>
        </section>

        {/* ── Footer breadcrumb ── */}
        <nav aria-label="Footer breadcrumb" className={styles.footerBreadcrumb}>
          <a href="/">Home</a>
          <span>›</span>
          <a href="/tools">All AI Tools</a>
          <span>›</span>
          <span>Free AI Video Generator</span>
          <span>·</span>
          <a href="/tools/ai-video-generation">AI Video Generator (Full Tool)</a>
          <span>·</span>
          <a href="/pricing">Pricing</a>
        </nav>

        <div style={{ height: 60 }} />
      </div>
    </main>
  );
}