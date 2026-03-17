"use client";

import React, { useState, useRef, useEffect } from "react";
import styles from "./StoryVideoGenerator.module.css";

// ─── Static data ──────────────────────────────────────────────────────────────

const STORY_GENRES = [
  {
    icon: "🧙",
    label: "Fantasy",
    example: "A lone wizard ascending a tower of living crystal, aurora borealis sky above, embers floating upward, wide cinematic shot",
    color: "#7C3AED",
  },
  {
    icon: "🚀",
    label: "Sci-Fi",
    example: "A derelict space station slowly rotating against a nebula, emergency lighting flickering inside, cinematic silence",
    color: "#0EA5E9",
  },
  {
    icon: "🌿",
    label: "Nature",
    example: "A solitary tree on a hill during a storm, lightning illuminating distant mountains, tall grass bending in the wind",
    color: "#10B981",
  },
  {
    icon: "💔",
    label: "Drama",
    example: "Rain-slicked city street at midnight, a figure standing under a lamppost, long shadow stretching on wet cobblestone",
    color: "#F43F5E",
  },
  {
    icon: "⚔️",
    label: "Action",
    example: "A warrior in ancient armour running across a burning bridge, slow motion embers, dust and smoke trails behind them",
    color: "#F59E0B",
  },
  {
    icon: "👻",
    label: "Horror",
    example: "An old mansion at the end of a fog-covered path, single window glowing, dead trees flanking the entrance, dread atmosphere",
    color: "#6B7280",
  },
  {
    icon: "🏰",
    label: "Historical",
    example: "A medieval market at dawn, merchants unloading carts, torchlight mixing with sunrise gold, bustling wide angle",
    color: "#D97706",
  },
  {
    icon: "🌸",
    label: "Romance",
    example: "Two silhouettes on a hilltop at sunset, cherry blossoms drifting through frame, warm bokeh, soft cinematic glow",
    color: "#EC4899",
  },
];

const SCENE_FORMULA = [
  {
    step: "01",
    title: "The Opening Hook",
    icon: "🎬",
    desc: "Your first scene sets the world. Establish setting, tone, and era in one sweeping visual. Think establishing shot: show the world your story lives in before the action begins.",
    example: '"Ancient forest at dawn, mist threading between giant oak trunks, shafts of golden light, wildlife stirring — epic wide angle, cinematic depth of field"',
  },
  {
    step: "02",
    title: "The Tension Build",
    icon: "⚡",
    desc: "Your middle scenes build tension. Get closer to your subject — medium shots, dynamic angles. Let the environment reflect the emotional state of your narrative.",
    example: '"A sealed iron door, torch flickering in the draft beneath it, distant rumbling growing louder — low angle, creeping camera push"',
  },
  {
    step: "03",
    title: "The Climax Moment",
    icon: "🔥",
    desc: "The peak scene demands maximum visual intensity. Use dramatic lighting, motion, scale contrast — small protagonist vs vast environment, speed changes, powerful framing.",
    example: '"A dragon erupting from a mountain peak, wings spanning the horizon, shockwave flattening trees below — epic tracking shot, slow motion impact"',
  },
  {
    step: "04",
    title: "The Resolution",
    icon: "🌅",
    desc: "Closing scenes should breathe. Slow down. Wide shots, natural light, peaceful motion. The visual language of resolution is space, stillness, and warmth.",
    example: '"A survivor standing at the edge of a cliff, watching sunrise over a peaceful valley below, wind through their hair — slow pull-back drone shot"',
  },
];

const MODELS = [
  {
    id: "wan2.5",
    name: "Wan 2.5",
    badge: "Quick Draft",
    badgeHue: "#10B981",
    res: "720p",
    credits: 10,
    bestFor: "Atmosphere, mood, landscapes, abstract scenes",
    icon: "📜",
  },
  {
    id: "kling-standard",
    name: "Kling 2.5 Standard",
    badge: "Story Workhorse",
    badgeHue: "#F59E0B",
    res: "1080p",
    credits: 15,
    bestFor: "Most story scenes — reliable, sharp, cinematic",
    icon: "🎞️",
  },
  {
    id: "kling-pro",
    name: "Kling 2.5 Pro",
    badge: "Character Scenes",
    badgeHue: "#6366F1",
    res: "1080p",
    credits: 30,
    bestFor: "Human/creature subjects, complex motion, hero shots",
    icon: "🏆",
  },
  {
    id: "veo3",
    name: "Veo 3",
    badge: "Flagship",
    badgeHue: "#EC4899",
    res: "1080p",
    credits: 50,
    bestFor: "Final scenes, trailers, anything that must be flawless",
    icon: "✨",
  },
];

const STORY_TYPES = [
  { icon: "📚", label: "Brand Origin Story", desc: "Tell how your brand was born through cinematic scenes that resonate with customers emotionally." },
  { icon: "🎭", label: "Short Film", desc: "Scene-by-scene AI generation for indie filmmakers building complete narrative arcs on minimal budgets." },
  { icon: "🧒", label: "Children's Story", desc: "Bring fairy tales and picture books to life as enchanting animated-style video clips." },
  { icon: "📖", label: "Book Trailer", desc: "Visualise key scenes from your novel or story collection to attract readers before launch." },
  { icon: "🏋️", label: "Motivational Story", desc: "Inspire audiences with cinematic visual metaphors for transformation, struggle, and triumph." },
  { icon: "🕯️", label: "Myth & Legend", desc: "Recreate historical myths, folklore, and cultural stories with epic visual scale." },
  { icon: "💼", label: "Case Study Video", desc: "Show — not just tell — client success stories through dramatised visual narratives." },
  { icon: "🎮", label: "Game Lore Trailer", desc: "Build hype for games with dramatic lore-reveal videos generated from world-building text." },
];

const PROMPT_TIPS = [
  { tip: "Lead with the subject", detail: "Start every scene prompt with the most important visual element — what should the eye go to first." },
  { tip: "Name the camera movement", detail: 'Words like "slow push in," "drone pull-back," "tracking shot," and "static wide" dramatically improve cinematic feel.' },
  { tip: "Specify the light", detail: "\"Golden hour,\" \"overcast grey,\" \"firelight,\" \"neon-lit\" — lighting tells the AI what mood to set and is one of the highest-leverage prompt elements." },
  { tip: "Describe the emotion, not just the scene", detail: "\"An atmosphere of dread\" or \"warmth and safety\" gives the AI tonal context that affects colour grading, motion speed, and composition choices." },
  { tip: "Include scale contrast", detail: "Massive vs tiny subjects create instantly compelling narrative visuals — a lone figure in a vast landscape reads as epic storytelling." },
  { tip: "End with style tags", detail: "\"Cinematic,\" \"photorealistic,\" \"film grain,\" \"Terrence Malick style\" or \"Studio Ghibli atmosphere\" are shortcut aesthetic instructions the model understands." },
];

const FAQ = [
  {
    q: "Can AI generate a video from a written story?",
    a: "Yes. The most effective workflow is to break your written story into individual visual scenes, then write each scene as an AI prompt on Scenith. The generator turns each description into a cinematic video clip that you can assemble into a complete story video. Think of it like visual scriptwriting — each prompt is a shot description.",
  },
  {
    q: "What is the best AI generator for story videos in 2026?",
    a: "Scenith currently runs four top-tier AI video models including Kling 2.5 Pro and Google DeepMind's Veo 3 — two of the most advanced AI video models available in 2026. For story videos specifically, Kling 2.5 Pro is recommended for scenes with human or creature subjects, while Veo 3 is ideal for your highest-stakes scenes.",
  },
  {
    q: "How many scenes do I need to generate for a complete story video?",
    a: "A compelling short story video is typically 60–120 seconds long. At 5–10 seconds per Scenith generation, you need 8–24 individual scene clips for a complete story video. Most creators generate 10–15 clips covering the opening, tension-building, climax, and resolution.",
  },
  {
    q: "Do I need video editing skills to assemble my story video?",
    a: "Basic video editing is helpful for assembling multiple clips. Tools like CapCut (free, mobile and desktop), DaVinci Resolve (free, professional), or iMovie (Mac, free) are all accessible for beginners. Each Scenith clip exports as a clean MP4 — you just drag them onto a timeline, add transitions and music, and export.",
  },
  {
    q: "Can I add voiceover to my AI story video?",
    a: "Yes. Scenith generates the visual layer. You can add voiceover separately using any microphone or AI text-to-speech tool (ElevenLabs, Murf, etc.), then mix it with your assembled clips in any video editor. Some creators also use Veo 3's native AI audio generation for ambient sound and then add voiceover on top.",
  },
  {
    q: "What story genres work best with AI video generation?",
    a: "Visually rich genres produce the best results: fantasy, science fiction, historical drama, nature narratives, horror, and epic action. Stories with strong environmental descriptions — vivid settings, dramatic lighting, dynamic weather — translate particularly well to AI video. Abstract emotional stories work well when described through visual metaphor.",
  },
  {
    q: "Can AI story videos be used commercially?",
    a: "Content generated through Scenith belongs to the user, and you retain rights to use it commercially subject to Scenith's terms of service. This makes AI story video generation viable for brand videos, advertising, content marketing, and monetised social media channels.",
  },
  {
    q: "How do I make a story video look professionally produced?",
    a: "Three techniques dramatically raise perceived quality: (1) vary your shot sizes — mix wide establishing shots with close-up detail shots across your scenes; (2) maintain a consistent colour and lighting aesthetic across all your prompts so the cuts feel intentional; (3) add music — even a royalty-free score from YouTube Audio Library transforms a sequence of clips into a cinematic experience.",
  },
];

const ASPECT_GUIDE = [
  {
    ratio: "16:9",
    icon: "🖥️",
    label: "Landscape",
    use: "YouTube videos, website embeds, presentations, documentaries",
    why: "The traditional cinematic format. Ideal for epic landscape shots, establishing scenes, and story videos intended for YouTube or desktop viewing.",
  },
  {
    ratio: "9:16",
    icon: "📱",
    label: "Vertical",
    use: "Instagram Reels, TikTok, YouTube Shorts, Story teasers",
    why: "Perfect for story teasers and social distribution. Intimate and immersive. Forces tighter framing that can intensify emotional impact.",
  },
  {
    ratio: "1:1",
    icon: "⬜",
    label: "Square",
    use: "Instagram feed, LinkedIn, Pinterest",
    why: "Versatile for social media. Works well for character-focused scenes and single-subject story moments.",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function StoryVideoGeneratorClient() {
  const [activeGenre, setActiveGenre] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeScene, setActiveScene] = useState(0);
  const [copiedExample, setCopiedExample] = useState(false);

  // Auto-rotate active scene step
  useEffect(() => {
    const t = setInterval(() => setActiveScene((s) => (s + 1) % SCENE_FORMULA.length), 4000);
    return () => clearInterval(t);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(STORY_GENRES[activeGenre].example);
    setCopiedExample(true);
    setTimeout(() => setCopiedExample(false), 2000);
  };

  const CTA_MAIN =
    "https://scenith.in/tools/ai-video-generation?utm_source=story-video-page&utm_medium=tool-cta&utm_campaign=story-organic-2026&utm_content=hero-cta";

  const CTA_GENRE =
    "https://scenith.in/tools/ai-video-generation?utm_source=story-video-page&utm_medium=tool-cta&utm_campaign=story-organic-2026&utm_content=genre-cta";

  const CTA_MID =
    "https://scenith.in/tools/ai-video-generation?utm_source=story-video-page&utm_medium=tool-cta&utm_campaign=story-organic-2026&utm_content=mid-cta";

  const CTA_FINAL =
    "https://scenith.in/tools/ai-video-generation?utm_source=story-video-page&utm_medium=tool-cta&utm_campaign=story-organic-2026&utm_content=final-cta";

  return (
    <main className={styles.page}>

      {/* ── Decorative background ── */}
      <div className={styles.bg} aria-hidden="true" />
      <div className={styles.paperTexture} aria-hidden="true" />

      {/* Ink splatter decorative elements */}
      <div className={styles.inkBlot1} aria-hidden="true" />
      <div className={styles.inkBlot2} aria-hidden="true" />

      <div className={styles.wrap}>

        {/* ── Breadcrumb ── */}
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span>›</span>
          <a href="/tools">Tools</a>
          <span>›</span>
          <span>Story Video AI Generator</span>
        </nav>

        {/* ═══════════════════════════════════════════════════════════════════
            HERO
        ═══════════════════════════════════════════════════════════════════ */}
        <section className={styles.hero}>

          <div className={styles.heroBadge}>
            <span className={styles.heroBadgeDot} />
            AI Storytelling Tool · 2026
          </div>

          {/* Big decorative quote mark */}
          <div className={styles.heroQuoteMark} aria-hidden="true">&ldquo;</div>

          <h1 className={styles.heroTitle}>
            Your Story Deserves<br />
            <em className={styles.heroEm}>to Be Seen.</em>
          </h1>

          <p className={styles.heroSub}>
            Turn any narrative — fiction, brand story, folktale, or short film concept — into
            a cinematic AI video. Scene by scene. No camera. No budget. Just your words.
          </p>

          {/* Scroll of prompt examples */}
          <div className={styles.scrollPrompt}>
            <div className={styles.scrollLabel}>✍️ Sample scene prompt</div>
            <blockquote className={styles.scrollText} key={activeGenre}>
              &ldquo;{STORY_GENRES[activeGenre].example}&rdquo;
            </blockquote>
            <div className={styles.scrollActions}>
              <span className={styles.scrollGenre}>
                {STORY_GENRES[activeGenre].icon} {STORY_GENRES[activeGenre].label}
              </span>
              <button className={styles.scrollCopy} onClick={handleCopy}>
                {copiedExample ? "✓ Copied" : "Copy prompt"}
              </button>
            </div>
          </div>

          {/* HERO CTA */}
          <a href={CTA_MAIN} className={styles.ctaHero} target="_blank" rel="noopener">
            <span className={styles.ctaQuill}>🎬</span>
            <span>Generate My Story Video — Free</span>
            <span className={styles.ctaChevron}>→</span>
          </a>
          <p className={styles.heroNote}>No editing skills needed &nbsp;·&nbsp; 1080p HD &nbsp;·&nbsp; Plans from $15/mo</p>

          {/* Demo video — inside a "book" frame */}
          <div className={styles.bookFrame} role="img" aria-label="AI-generated story video example">
            <div className={styles.bookSpine} aria-hidden="true">
              <span>SCENITH</span>
            </div>
            <div className={styles.bookPages} aria-hidden="true">
              {[...Array(5)].map((_, i) => <div key={i} className={styles.bookPage} />)}
            </div>
            <div className={styles.bookScreen}>
              <div className={styles.bookCornerTL} aria-hidden="true" />
              <div className={styles.bookCornerBR} aria-hidden="true" />
              <video
                src="https://cdn.scenith.in/ai_video_gen/2/video_3a8f8067-40ff-4ec4-9173-83cfc81a5cb4.mp4"
                autoPlay
                loop
                muted
                playsInline
                className={styles.bookVideo}
                aria-label="Sample AI-generated cinematic story video"
              />
              <div className={styles.bookOverlay} />
              <div className={styles.bookCaption}>
                AI-Generated · Kling 2.5 Pro · 1080p · Story Video
              </div>
            </div>
          </div>

        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            EDITORIAL 1 — The case for AI story videos
        ═══════════════════════════════════════════════════════════════════ */}
        <section className={styles.chapter}>
          <div className={styles.chapterMark} aria-hidden="true">
            <span className={styles.chapterNum}>I</span>
          </div>
          <div className={styles.chapterContent}>
            <div className={styles.eyebrow}>The Opportunity</div>
            <h2 className={styles.chapterTitle}>
              Every Story Worth Telling<br />
              Deserves a Visual Life
            </h2>
            <div className={styles.prose}>

              <p>
                Stories are humanity's oldest technology. Before writing, before money, before agriculture — we told stories. Around fires, in paintings on cave walls, through songs passed from generation to generation. The instinct to take an experience and shape it into a narrative is so deeply wired into us that it precedes civilization itself.
              </p>

              <p>
                And yet, for most of human history, turning a story into a <em>visual experience</em> — into moving images that others could watch — required resources that most storytellers simply didn't have. A film set. A crew. Actors. Equipment. Post-production. Distribution. The gap between "having a story" and "showing your story as a video" was a canyon that only money could bridge.
              </p>

              <p>
                In 2026, that canyon has closed. AI video generation — and specifically story video AI generators like Scenith — have made it possible for anyone with a story to render it as photorealistic, cinematic moving imagery. A novelist can generate a visual trailer for their book. A brand can show its origin story without a film crew. A child can see their favourite fairy tale brought to life. A game developer can visualise lore before a single line of code is written.
              </p>

              <h3>The Three Problems AI Story Video Solves</h3>

              <p>
                Traditional story video production had three chronic bottlenecks. The first was <strong>cost</strong>. A professional brand story video runs ₹50,000 to ₹5,00,000 for anything that looks genuinely cinematic. The second was <strong>access</strong> — you needed to hire directors, cinematographers, actors, editors, and colorists with very specific skills. The third was <strong>iteration</strong>: once you'd spent the budget and the time, the creative was essentially locked. Changing a scene, reframing a shot, or exploring an alternate visual direction meant starting over.
              </p>

              <p>
                AI story video generation collapses all three. The cost per scene is measured in a few rupees of compute credit. The "crew" is a text prompt. And iteration is as fast as typing a new description — if the first generation of a scene doesn't nail the tone, you describe it differently and try again in 90 seconds.
              </p>

              <h3>What Makes Story Video Different from Generic Video</h3>

              <p>
                Not every AI-generated video is a story video. A satisfying slow-motion drip of coffee, a loop of ocean waves, a product rotating on a plinth — these are compelling visual content, but they're not stories. Story video has a fundamentally different architecture: it requires a narrative arc, visual continuity between scenes, emotional progression, and a purposeful beginning, middle, and end.
              </p>

              <p>
                What Scenith's AI generator enables that raw video generation doesn't is the ability to control all of this through prompt engineering. You decide the visual language of your story — the lighting palette, the camera movement style, the color temperature — and you maintain it consistently across every scene you generate. The result is a sequence of clips that feel like they belong to the same film, not like a random collection of unrelated visuals.
              </p>

              <p>
                This is the core skill of AI story video production in 2026: not just generating individual impressive clips, but crafting a coherent visual narrative from a sequence of precisely described scenes. It's filmmaking with words.
              </p>

            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            GENRE PICKER
        ═══════════════════════════════════════════════════════════════════ */}
        <section className={styles.genreSection}>
          <div className={styles.eyebrow}>Story Genres</div>
          <h2 className={styles.sectionTitle}>
            Any Genre. Any Narrative.<br />
            <span className={styles.titleAccent}>Any World You Can Describe.</span>
          </h2>
          <p className={styles.sectionSub}>
            Pick your story genre to see a sample scene prompt — then generate it on Scenith.
          </p>

          <div className={styles.genreGrid} role="tablist">
            {STORY_GENRES.map((g, i) => (
              <button
                key={g.label}
                role="tab"
                aria-selected={activeGenre === i}
                className={`${styles.genreBtn} ${activeGenre === i ? styles.genreBtnActive : ""}`}
                onClick={() => setActiveGenre(i)}
                style={activeGenre === i ? {
                  borderColor: g.color,
                  background: g.color + "18",
                  color: g.color,
                } : {}}
              >
                <span className={styles.genreIcon}>{g.icon}</span>
                <span>{g.label}</span>
              </button>
            ))}
          </div>

          <div
            className={styles.genreExample}
            role="tabpanel"
            style={{ borderColor: STORY_GENRES[activeGenre].color + "44" }}
          >
            <div className={styles.genreExampleTop}>
              <span className={styles.genreExampleIcon}>{STORY_GENRES[activeGenre].icon}</span>
              <div className={styles.genreExampleMeta}>
                <span className={styles.genreExampleLabel}>
                  {STORY_GENRES[activeGenre].label} Scene Prompt
                </span>
              </div>
            </div>
            <blockquote className={styles.genreExampleText} key={activeGenre}>
              &ldquo;{STORY_GENRES[activeGenre].example}&rdquo;
            </blockquote>
            <div className={styles.genreExampleActions}>
              <button className={styles.genreCopyBtn} onClick={handleCopy}>
                {copiedExample ? "✓ Copied" : "Copy this prompt"}
              </button>
              <a
                href={`${CTA_GENRE}&utm_term=${STORY_GENRES[activeGenre].label.toLowerCase()}`}
                className={styles.genreGenerateBtn}
                style={{ background: STORY_GENRES[activeGenre].color }}
                target="_blank"
                rel="noopener"
              >
                Generate This Scene →
              </a>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SCENE FORMULA — 4 acts
        ═══════════════════════════════════════════════════════════════════ */}
        <section className={styles.sceneSection}>
          <div className={styles.eyebrow}>The 4-Act Formula</div>
          <h2 className={styles.sectionTitle}>
            How to Structure a Story Video<br />
            Scene by Scene
          </h2>
          <p className={styles.sectionSub}>
            Every compelling story video follows a visual arc. Here's the four-scene structure
            that turns a sequence of AI clips into a story with emotional impact.
          </p>

          <div className={styles.sceneNav}>
            {SCENE_FORMULA.map((s, i) => (
              <button
                key={s.step}
                className={`${styles.sceneNavBtn} ${activeScene === i ? styles.sceneNavActive : ""}`}
                onClick={() => setActiveScene(i)}
              >
                <span className={styles.sceneNavNum}>{s.step}</span>
                <span className={styles.sceneNavLabel}>{s.title}</span>
              </button>
            ))}
          </div>

          <div className={styles.sceneDetail} key={activeScene}>
            <div className={styles.sceneDetailLeft}>
              <div className={styles.sceneDetailIcon}>{SCENE_FORMULA[activeScene].icon}</div>
              <h3 className={styles.sceneDetailTitle}>{SCENE_FORMULA[activeScene].title}</h3>
              <p className={styles.sceneDetailDesc}>{SCENE_FORMULA[activeScene].desc}</p>
            </div>
            <div className={styles.sceneDetailRight}>
              <div className={styles.scenePromptLabel}>Example scene prompt</div>
              <blockquote className={styles.scenePromptText}>
                {SCENE_FORMULA[activeScene].example}
              </blockquote>
              <a href={CTA_MAIN} className={styles.sceneGenerateBtn} target="_blank" rel="noopener">
                Generate this scene →
              </a>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            MODEL GUIDE
        ═══════════════════════════════════════════════════════════════════ */}
        <section className={styles.modelSection}>
          <div className={styles.eyebrow}>Choose Your Model</div>
          <h2 className={styles.sectionTitle}>
            Match Your AI Model to<br />
            <span className={styles.titleAccent}>the Scene You're Telling</span>
          </h2>
          <p className={styles.sectionSub}>
            Different scenes in your story have different visual demands. Use the right model for the right moment.
          </p>

          <div className={styles.modelGrid}>
            {MODELS.map((m) => (
              <div key={m.id} className={styles.modelCard}>
                <div className={styles.modelCardIcon}>{m.icon}</div>
                <div
                  className={styles.modelBadge}
                  style={{ background: m.badgeHue + "20", color: m.badgeHue, border: `1px solid ${m.badgeHue}40` }}
                >
                  {m.badge}
                </div>
                <h3 className={styles.modelName}>{m.name}</h3>
                <p className={styles.modelBestFor}>
                  <strong>Best for:</strong> {m.bestFor}
                </p>
                <div className={styles.modelFooter}>
                  <span className={styles.modelRes}>{m.res}</span>
                  <span className={styles.modelCredits}>{m.credits} cr / 5s</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            EDITORIAL 2 — Deep use cases
        ═══════════════════════════════════════════════════════════════════ */}
        <section className={styles.chapter}>
          <div className={styles.chapterMark} aria-hidden="true">
            <span className={styles.chapterNum}>II</span>
          </div>
          <div className={styles.chapterContent}>
            <div className={styles.eyebrow}>Use Cases</div>
            <h2 className={styles.chapterTitle}>
              Who Is Using AI Story Video<br />
              Generators — and What They're Building
            </h2>
            <div className={styles.prose}>

              <h3>Independent Authors and Book Marketers</h3>
              <p>
                The book trailer has become a legitimate marketing format for authors in 2026. A 60-second cinematic story video posted to YouTube and social media, showing key scenes from a novel, generates anticipation in a way that cover images and description text simply cannot. Authors using AI video generators like Scenith are creating trailers that rival Hollywood production values — for the cost of a month's subscription.
              </p>
              <p>
                The workflow is straightforward: identify 6–10 of the most visually compelling scenes in the manuscript, write each as an AI prompt, generate them with Kling 2.5 Pro, assemble in a free editor with a music score from Epidemic Sound or similar, and upload. Authors using this approach have reported 3–5x increases in pre-launch email sign-ups compared to text-only marketing.
              </p>

              <h3>Brand Storytellers and Content Marketers</h3>
              <p>
                Brand story videos — the "why we started," the "problem we saw," the "journey that led here" — are among the highest-converting pieces of content a brand can produce. Authenticity and emotional resonance drive conversion far more reliably than feature-listing or promotional messaging. The challenge has always been that producing a high-quality brand story video required a filmmaker.
              </p>
              <p>
                With AI story video generation, a brand can now visualise its origin narrative with cinematic production values without the production budget. A food brand can show a founder's grandmother's kitchen in rural India. A tech startup can visualise the "late nights in a garage" moment that started it all. A sustainable fashion label can render the environmental imagery that drives its mission. These aren't stock footage workarounds — they're genuinely original AI-generated scenes that tell the brand's specific story.
              </p>

              <h3>Filmmakers and Screenwriters in Pre-Production</h3>
              <p>
                AI story video generation has become a practical pre-production tool for filmmakers who want to visualise a script before shooting begins. Instead of expensive animatics or storyboard-to-live reference conversions, a director can generate rough video drafts of key scenes to test composition, lighting direction, tone, and pacing before a single frame of real footage is shot.
              </p>
              <p>
                This use case is particularly powerful for pitching. A screenwriter who can show investors and producers a visual proof-of-concept — even a rough AI-rendered sequence of their story's key moments — has a dramatically better chance of securing interest than one presenting a PDF. The AI generation isn't the final film. It's a very affordable way to demonstrate what the final film could look like.
              </p>

              <h3>Educators and E-Learning Creators</h3>
              <p>
                Abstract concepts, historical events, scientific processes, and literary themes are all more effectively communicated through story and visual narrative than through text and static images. E-learning creators are using AI story video generation to produce illustrative scenario videos — "a day in the life of a Roman soldier," "what the Industrial Revolution looked like on the factory floor," "how a viral pandemic spreads through a city" — that are genuinely engaging and entirely original.
              </p>
              <p>
                The competitive advantage for educators using AI video is significant: courses with rich visual storytelling content have demonstrated completion rates 2–3x higher than text-heavy equivalents. And AI generation makes producing that content economically viable at scale.
              </p>

              <h3>Game Developers and World-Builders</h3>
              <p>
                The lore video, the story trailer, the "world-reveal cinematic" — these are established content formats in gaming that historically required dedicated cinematics teams or expensive outsourced animation. Indie game developers using AI story video generators can now produce these assets independently. A lone developer building an RPG can generate a compelling lore reveal video showing the fallen civilization that preceded the game's events, the pantheon of gods who shaped the world, the war that broke everything — all from the world-building text they've already written.
              </p>
              <p>
                More importantly, these videos serve as both marketing and community-building content. A compelling AI-generated story trailer posted to YouTube or X during development can attract wishlists on Steam, drive Discord community growth, and establish a visual aesthetic for the game's brand before a single screenshot of actual gameplay is available.
              </p>

              <h3>Nonprofit Organisations and Social Causes</h3>
              <p>
                Storytelling is the most powerful tool in charitable fundraising. The specific story of one person's experience — told vividly, with emotional depth — consistently outperforms statistics and general messaging in driving donations. But producing a compelling visual story for a nonprofit has historically meant either expensive production or poor-quality execution. AI story video generation changes this. A nonprofit working on water access can generate a cinematic visual narrative of a child's walk to a water source. An animal welfare organisation can show the rescue story of a specific animal. The authenticity of emotional storytelling is preserved; the production barrier is removed.
              </p>

            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            STORY TYPES GRID
        ═══════════════════════════════════════════════════════════════════ */}
        <section className={styles.storyTypes}>
          <div className={styles.eyebrow}>Story Formats</div>
          <h2 className={styles.sectionTitle}>8 Story Video Formats You Can<br />Start Making Today</h2>
          <div className={styles.storyTypeGrid}>
            {STORY_TYPES.map((t) => (
              <div key={t.label} className={styles.storyTypeCard}>
                <span className={styles.storyTypeIcon}>{t.icon}</span>
                <h3 className={styles.storyTypeLabel}>{t.label}</h3>
                <p className={styles.storyTypeDesc}>{t.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            MID-PAGE CTA
        ═══════════════════════════════════════════════════════════════════ */}
        <section className={styles.midCta} aria-label="Create story video CTA">
          <div className={styles.midCtaInner}>
            <div className={styles.midCtaQuill} aria-hidden="true">🖊️</div>
            <h2 className={styles.midCtaTitle}>
              Your Story Is Already Written.<br />
              Now Let AI Give It a Screen.
            </h2>
            <p className={styles.midCtaBody}>
              Open Scenith's AI video generator. Describe your first scene. Watch it come to life in under 2 minutes.
            </p>
            <a href={CTA_MID} className={styles.ctaHero} target="_blank" rel="noopener">
              <span className={styles.ctaQuill}>🎬</span>
              <span>Start Generating Story Scenes</span>
              <span className={styles.ctaChevron}>→</span>
            </a>
            <div className={styles.midCtaTrust}>
              <span>✓ No filming required</span>
              <span>✓ 1080p cinematic output</span>
              <span>✓ Instant MP4 download</span>
              <span>✓ From $15/month</span>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            PROMPT TIPS
        ═══════════════════════════════════════════════════════════════════ */}
        <section className={styles.tipsSection}>
          <div className={styles.eyebrow}>Prompt Craft</div>
          <h2 className={styles.sectionTitle}>
            6 Prompt Techniques That Make<br />
            <span className={styles.titleAccent}>Story Videos Look Cinematic</span>
          </h2>
          <p className={styles.sectionSub}>
            Great AI story videos aren't just about generating clips — they're about writing prompts
            that communicate visual storytelling intent. These techniques are the difference between
            average and extraordinary.
          </p>

          <div className={styles.tipsGrid}>
            {PROMPT_TIPS.map((t, i) => (
              <div key={t.tip} className={styles.tipCard}>
                <div className={styles.tipNum}>{String(i + 1).padStart(2, "0")}</div>
                <h3 className={styles.tipTitle}>{t.tip}</h3>
                <p className={styles.tipDetail}>{t.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            ASPECT RATIO GUIDE
        ═══════════════════════════════════════════════════════════════════ */}
        <section className={styles.aspectSection}>
          <div className={styles.eyebrow}>Format Guide</div>
          <h2 className={styles.sectionTitle}>Choosing the Right Aspect Ratio<br />for Your Story Video</h2>
          <div className={styles.aspectGrid}>
            {ASPECT_GUIDE.map((a) => (
              <div key={a.ratio} className={styles.aspectCard}>
                <div className={styles.aspectIcon}>{a.icon}</div>
                <div className={styles.aspectRatio}>{a.ratio}</div>
                <div className={styles.aspectLabel}>{a.label}</div>
                <p className={styles.aspectUse}><strong>Best for:</strong> {a.use}</p>
                <p className={styles.aspectWhy}>{a.why}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            EDITORIAL 3 — Deep craft + SEO density
        ═══════════════════════════════════════════════════════════════════ */}
        <section className={styles.chapter}>
          <div className={styles.chapterMark} aria-hidden="true">
            <span className={styles.chapterNum}>III</span>
          </div>
          <div className={styles.chapterContent}>
            <div className={styles.eyebrow}>The Craft</div>
            <h2 className={styles.chapterTitle}>
              Advanced Story Video Production<br />
              Techniques for 2026
            </h2>
            <div className={styles.prose}>

              <h3>Building Visual Continuity Across Scenes</h3>
              <p>
                The single greatest challenge in AI story video production is maintaining visual continuity — ensuring that clips generated from separate prompts feel like they belong to the same film. When scenes vary wildly in colour temperature, lighting quality, or visual style, the assembled video feels disjointed even if each individual clip is technically impressive.
              </p>
              <p>
                The solution is to build what cinematographers call a "visual bible" into your prompt templates. Choose a consistent lighting quality (e.g., always "overcast, soft shadows, diffused natural light" for a melancholic story, or always "warm amber back-lighting, golden hour" for an aspirational brand narrative). Choose a consistent colour temperature. Choose a consistent camera movement style ("slow push-in" for quiet scenes, "tracking shot" for dynamic scenes, "static wide" for establishing moments). By embedding these constants in every prompt, you create stylistic coherence across all your generated clips.
              </p>

              <h3>The Assembly Edit: Turning Clips Into a Story</h3>
              <p>
                Once you've generated your scene clips on Scenith, assembling them into a complete story video is the final step. Here's the practical workflow that consistently produces polished results:
              </p>
              <ul className={styles.proseList}>
                <li>
                  <strong>Import all clips to a timeline.</strong> Free options: DaVinci Resolve (desktop, professional), CapCut (mobile and desktop, beginner-friendly), iMovie (Mac only, very simple). Even Windows' built-in Clipchamp works for basic assembly.
                </li>
                <li>
                  <strong>Order clips according to your narrative arc.</strong> Opening → tension build → climax → resolution. Don't be afraid to cut — tighter is almost always better. A 45-second story video at high quality is more effective than a 3-minute one with pacing problems.
                </li>
                <li>
                  <strong>Add transitions deliberately.</strong> Hard cuts work for action and drama. Cross-dissolves work for time passage and emotional transitions. Avoid fancy wipes and spin transitions — they feel cheap and draw attention to the assembly.
                </li>
                <li>
                  <strong>Music is 50% of the emotional impact.</strong> A royalty-free score from YouTube Audio Library, Artlist, or Epidemic Sound can transform a decent video into a viscerally affecting one. Match tempo to action — slow music for contemplative scenes, building score for tension and climax.
                </li>
                <li>
                  <strong>Consider AI voiceover for narration.</strong> If your story has narration, tools like ElevenLabs, Murf, or even YouTube's auto-dub can generate expressive voiceover. Record it first, then cut your visuals to the narration rhythm.
                </li>
              </ul>

              <h3>Multi-Scene Prompt Strategy: Treating Your Story Like a Screenplay</h3>
              <p>
                The most efficient workflow for AI story video production is to treat your project like a screenplay before you generate a single clip. Break your story down into individual scenes — each scene is one prompt. For each scene, write out the visual description as a Scenith prompt, noting which model you plan to use and what aspect ratio.
              </p>
              <p>
                This pre-production step might feel like overhead, but it pays off enormously. When you sit down to generate, you're not staring at a blank prompt field trying to think what comes next — you're executing a plan. You can also optimise credit usage by identifying which scenes truly need the premium Kling 2.5 Pro or Veo 3 models (your hero moments, your climax, your key character shots) and which can be generated at lower cost with Wan 2.5 or Kling Standard (establishing shots, transitional scenes, atmospheric b-roll).
              </p>

              <h3>Iterating to Get a Scene Right</h3>
              <p>
                One of the freedoms that AI generation gives story video producers that traditional filmmaking doesn't is the ability to iterate a scene without cost explosion. If your first generation of a key scene doesn't capture the tone you wanted — the light feels wrong, the motion isn't what you envisioned, the mood doesn't land — you rewrite the prompt and generate again. Credits permitting, you might generate 3–5 versions of your most important scenes and pick the best one.
              </p>
              <p>
                This is fundamentally different from traditional production where a misaligned shot means reshooting — a full day's logistics, crew cost, location cost, and scheduling pain. In AI video generation, iterating on a scene costs the same as generating it the first time and takes 90 seconds. Use that freedom deliberately. Your best scene in any story video is usually the result of a third or fourth generation.
              </p>

              <h3>The Story Video SEO Advantage for Brands</h3>
              <p>
                For brands and content marketers, there's a powerful search visibility dimension to story video that's often overlooked. YouTube is the world's second-largest search engine. A well-titled story video — "How [Brand] Was Built: The Origin Story" or "[Topic]: A Visual Story in 4 Scenes" — attracts search-driven viewers who are looking for narrative content about a topic, not just promotional material.
              </p>
              <p>
                Story videos also earn dramatically more unsolicited sharing than conventional brand content. When someone watches a brand origin story that moved them, or a visual interpretation of a concept they care about, their sharing impulse is emotional — they want others to feel what they felt. That emotional engagement drives the virality metrics (shares, reposts, link clicks) that conventional social media content rarely achieves.
              </p>
              <p>
                Brands that produce a library of story videos — consistently, at scale — using AI generation are building a content asset that compounds in value over time. Each story video attracts organic search traffic. Each one builds brand narrative depth. Each one creates a potential viral moment. And with Scenith's AI generator, the marginal cost of each additional story video is negligible.
              </p>

              <h3>The Future: Interactive and Serialised AI Story Video</h3>
              <p>
                The frontier of AI story video in 2026 is already visible. Creators are beginning to produce serialised AI story video — weekly episodic content where each episode is a short AI-generated narrative continuation, building audience and expectation over weeks. The model is borrowed from episodic storytelling (podcasts, webcomics, episodic YouTube), but the production medium is AI video.
              </p>
              <p>
                The advantages are enormous: consistent weekly publishing schedules that would be physically impossible with traditional production. Growing algorithmic momentum as each episode drives traffic to previous ones. Community engagement around story speculation and narrative investment. And since AI generation means you're not constrained by actor availability, location logistics, or crew schedules, a single creator can sustain a serialised story video series indefinitely.
              </p>
              <p>
                If you're thinking about where to invest your content creation energy in 2026, serialised AI story video is among the highest-potential formats that is currently underexploited. The window is open. The tools are available. The audiences are hungry for story content that goes beyond the static, predictable formats that saturate every feed.
              </p>

            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            FAQ
        ═══════════════════════════════════════════════════════════════════ */}
        <section className={styles.faqSection}>
          <div className={styles.eyebrow}>FAQ</div>
          <h2 className={styles.sectionTitle}>
            Questions About AI Story Video Generation
          </h2>

          <div className={styles.faqList} role="list">
            {FAQ.map((item, i) => (
              <div
                key={i}
                className={`${styles.faqItem} ${openFaq === i ? styles.faqItemOpen : ""}`}
                role="listitem"
              >
                <button
                  className={styles.faqQ}
                  aria-expanded={openFaq === i}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span>{item.q}</span>
                  <span className={styles.faqToggle} aria-hidden="true">{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && (
                  <div className={styles.faqA}>
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            FINAL CTA
        ═══════════════════════════════════════════════════════════════════ */}
        <section className={styles.finalCta} aria-label="Final CTA">
          <div className={styles.finalCtaInner}>
            {/* Decorative */}
            <div className={styles.finalDeco} aria-hidden="true">
              <span>✦</span><span>✦</span><span>✦</span>
            </div>

            <h2 className={styles.finalTitle}>
              The First Scene of Your<br />
              Story Video Is 2 Minutes Away
            </h2>
            <p className={styles.finalBody}>
              You already have the story. Scenith provides the screen. Generate your first
              AI story video scene right now — no camera, no crew, no production budget.
              Just the words you already have.
            </p>

            <a href={CTA_FINAL} className={styles.ctaHeroFinal} target="_blank" rel="noopener">
              <span className={styles.ctaQuill}>🎬</span>
              <span>Open the Story Video Generator — Free</span>
              <span className={styles.ctaChevron}>→</span>
            </a>

            <p className={styles.finalNote}>
              scenith.in/tools/ai-video-generation &nbsp;·&nbsp; 1080p HD &nbsp;·&nbsp;
              Multiple AI Models &nbsp;·&nbsp; Plans from $15/mo
            </p>

            {/* Related tool links for internal linking / SEO */}
            <div className={styles.relatedLinks}>
              <span className={styles.relatedLinksLabel}>Also explore:</span>
              <a href="/tools/ai-video-generation">AI Video Generator</a>
              <a href="/tools/youtube-shorts-ai-video-generator">YouTube Shorts AI Generator</a>
              <a href="/tools">All AI Tools</a>
            </div>
          </div>
        </section>

        <div style={{ height: 80 }} />
      </div>
    </main>
  );
}