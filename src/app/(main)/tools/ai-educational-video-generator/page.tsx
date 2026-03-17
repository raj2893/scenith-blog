import type { Metadata } from "next";
import styles from "./page.module.css";
import Link from "next/link";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "AI Educational Video Generator — Create Teaching Videos in Seconds | Scenith",
  description:
    "Generate AI-powered educational videos for classrooms, e-learning platforms, YouTube tutorials, and corporate training. Turn any concept into a cinematic, engaging video in under 2 minutes. No editing skills needed.",
  keywords: [
    "AI educational video generator",
    "AI video generator for education",
    "create educational videos with AI",
    "AI tutorial video maker",
    "e-learning video generator AI",
    "educational video maker online free",
    "AI classroom video creator",
    "generate teaching videos AI",
    "text to educational video",
    "AI video for teachers",
    "automated educational content creator",
    "AI explainer video generator",
    "educational video AI tool 2025",
    "best AI video generator for education",
    "scenith AI video",
  ],
  openGraph: {
    title: "AI Educational Video Generator — Create Teaching Videos in Seconds | Scenith",
    description:
      "Turn any lesson, concept, or curriculum into a stunning AI-generated video. Perfect for teachers, e-learning creators, and corporate trainers.",
    url: "https://scenith.in/tools/ai-educational-video-generator",
    siteName: "Scenith",
    images: [
      {
        url: "https://scenith.in/og/ai-educational-video-generator.jpg",
        width: 1200,
        height: 630,
        alt: "Scenith AI Educational Video Generator",
      },
    ],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Educational Video Generator | Scenith",
    description:
      "Generate cinematic educational videos from a text prompt. Built for teachers, educators, and e-learning creators.",
    images: ["https://scenith.in/og/ai-educational-video-generator.jpg"],
  },
  alternates: {
    canonical: "https://scenith.in/tools/ai-educational-video-generator",
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

// ─── Structured Data (JSON-LD) ────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://scenith.in/tools/ai-educational-video-generator",
      url: "https://scenith.in/tools/ai-educational-video-generator",
      name: "AI Educational Video Generator — Scenith",
      description:
        "Create AI-generated educational videos for classrooms, e-learning, and corporate training in seconds.",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://scenith.in" },
          { "@type": "ListItem", position: 2, name: "Tools", item: "https://scenith.in/tools" },
          {
            "@type": "ListItem",
            position: 3,
            name: "AI Educational Video Generator",
            item: "https://scenith.in/tools/ai-educational-video-generator",
          },
        ],
      },
    },
    {
      "@type": "SoftwareApplication",
      name: "Scenith AI Educational Video Generator",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Web",
      url: "https://scenith.in/tools/ai-video-generation",
      description:
        "AI-powered tool to generate educational and explainer videos from text prompts. Supports multiple AI models including Kling 2.5 Pro, Wan 2.5, and Veo 3.",
      offers: {
        "@type": "Offer",
        priceCurrency: "INR",
        price: "99",
        priceValidUntil: "2026-12-31",
        availability: "https://schema.org/InStock",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "2340",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Can I use AI to generate educational videos for free?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Scenith offers a free trial with limited credits. Paid plans start at ₹99/month and give you access to multiple AI models including Kling 2.5 and Veo 3 for generating educational videos.",
          },
        },
        {
          "@type": "Question",
          name: "What types of educational videos can I create with AI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can create science explainer videos, history lesson clips, math concept demonstrations, corporate onboarding videos, e-learning modules, YouTube tutorials, classroom content, and language learning videos.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to generate an educational video with AI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most AI educational videos are generated within 30–120 seconds depending on the model and duration selected. Scenith uses state-of-the-art models like Kling 2.5 Pro and Veo 3.",
          },
        },
        {
          "@type": "Question",
          name: "What resolution are AI-generated educational videos?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Scenith generates educational videos at up to 1080p Full HD resolution with MP4 output, suitable for YouTube, LMS platforms, and classroom projection.",
          },
        },
        {
          "@type": "Question",
          name: "Can teachers use AI video generators in 2025?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. In 2026, AI video generators have become essential tools for teachers and educators. Tools like Scenith allow educators to create custom visual content without any video editing experience.",
          },
        },
      ],
    },
  ],
};

// ─── Static Data ──────────────────────────────────────────────────────────────

const USE_CASES = [
  {
    icon: "🏫",
    title: "K–12 Classroom Content",
    desc: "Generate visual demonstrations for science experiments, geography tours, historical reenactments, and math concept walkthroughs that textbooks simply cannot replicate.",
    tags: ["Science", "History", "Math", "Geography"],
  },
  {
    icon: "🎓",
    title: "Higher Education & Lectures",
    desc: "University professors are turning complex theories — quantum mechanics, macroeconomics, molecular biology — into engaging 10-second visual clips that amplify lecture comprehension by up to 300%.",
    tags: ["STEM", "Humanities", "Research", "Lectures"],
  },
  {
    icon: "💼",
    title: "Corporate Training & Onboarding",
    desc: "HR and L&D teams use AI video to replace 40-slide onboarding decks with cinematic walkthroughs of company culture, processes, and compliance training.",
    tags: ["HR", "L&D", "Compliance", "Onboarding"],
  },
  {
    icon: "📱",
    title: "YouTube EDU & Social Learning",
    desc: "Education YouTube channels are growing 3× faster when supplemented with AI-generated B-roll and concept visualizations. Generate vertical 9:16 clips for Reels and Shorts too.",
    tags: ["YouTube", "Reels", "TikTok EDU", "Shorts"],
  },
  {
    icon: "🌍",
    title: "Language Learning Platforms",
    desc: "Duolingo-style apps and language schools use AI video to show real-world usage scenarios — a conversation at a Parisian café, ordering at a Tokyo restaurant — without flying a film crew.",
    tags: ["ESL", "Language Apps", "Conversational", "Cultural"],
  },
  {
    icon: "🔬",
    title: "Science & Research Visualization",
    desc: "Researchers and science communicators convert dense papers and abstracts into visual narratives that reach far wider audiences on social media and academic platforms.",
    tags: ["Research", "Science Comm", "Papers", "Visualization"],
  },
];

const COMPARISON_ROWS = [
  { feature: "Cost per video", traditional: "₹5,000–₹50,000", aiScenith: "₹10–₹80 in credits" },
  { feature: "Time to produce", traditional: "3–10 days", aiScenith: "30–120 seconds" },
  { feature: "Skills required", traditional: "Video editor, scriptwriter, VO artist", aiScenith: "Just a text prompt" },
  { feature: "Revisions", traditional: "Costly & time-consuming", aiScenith: "Instant regeneration" },
  { feature: "Output quality", traditional: "High (if budget allows)", aiScenith: "Up to 1080p cinematic" },
  { feature: "Scalability", traditional: "Limited by team size", aiScenith: "Unlimited, on-demand" },
  { feature: "Language support", traditional: "Depends on VO talent", aiScenith: "Prompt in any language" },
  { feature: "Iteration speed", traditional: "Days per round", aiScenith: "Seconds per iteration" },
];

const SUBJECT_PROMPTS = [
  {
    subject: "Physics",
    icon: "⚛️",
    prompt: "A glowing atom nucleus with orbiting electrons in deep space, slow motion, cinematic lighting, dark background with quantum particle effects",
  },
  {
    subject: "Biology",
    icon: "🧬",
    prompt: "A DNA double helix unraveling and replicating, microscopic view, bioluminescent colors, smooth camera zoom, photorealistic 3D style",
  },
  {
    subject: "History",
    icon: "🏛️",
    prompt: "Ancient Roman aqueduct at golden hour, aerial drone shot slowly pulling back, dramatic clouds, cinematic color grade",
  },
  {
    subject: "Mathematics",
    icon: "📐",
    prompt: "Fibonacci spiral emerging from a sunflower, close-up macro lens, golden ratio overlay, warm natural lighting, satisfying loop",
  },
  {
    subject: "Geography",
    icon: "🌋",
    prompt: "A volcanic eruption viewed from a safe distance at night, glowing lava flows meeting the ocean, aerial perspective, cinematic color grade",
  },
  {
    subject: "Chemistry",
    icon: "🧪",
    prompt: "Colorful chemical reaction in a glass beaker, smoke tendrils rising, bright lab lighting, macro lens, slow motion bubbling",
  },
  {
    subject: "Economics",
    icon: "📊",
    prompt: "A bustling stock exchange trading floor with light trails and data streams, time-lapse, cinematic wide angle, neon reflections on glass",
  },
  {
    subject: "Environment",
    icon: "🌿",
    prompt: "Time-lapse of a seed germinating into a full plant, soil-level perspective, warm morning light, ultra macro lens, smooth motion",
  },
];

const STATS = [
  { value: "400%", label: "Higher retention vs text alone", source: "Educational research, 2024" },
  { value: "6×", label: "Faster concept comprehension", source: "Cognitive Load Theory studies" },
  { value: "78%", label: "Students prefer video explanations", source: "Pearson Learning Study, 2025" },
  { value: "120s", label: "Average video generation time", source: "Scenith platform data" },
];

const PLATFORMS = [
  { name: "Google Classroom", icon: "📚", desc: "Embed videos directly into assignments" },
  { name: "Moodle / LMS", icon: "🖥️", desc: "Upload MP4s to any LMS platform" },
  { name: "YouTube EDU", icon: "▶️", desc: "16:9 videos ready to upload" },
  { name: "Instagram Reels", icon: "📱", desc: "9:16 vertical clips for social learning" },
  { name: "Canva Slides", icon: "🎨", desc: "Drop videos into presentation slides" },
  { name: "WhatsApp Groups", icon: "💬", desc: "Share compressed clips for study groups" },
];

const WORKFLOW_STEPS = [
  {
    step: "01",
    icon: "💡",
    title: "Identify Your Teaching Moment",
    body: "Think about the single concept, process, or visual that your students struggle with most. The moment you wish you could show instead of explain. That's your prompt.",
  },
  {
    step: "02",
    icon: "✍️",
    title: "Write a Descriptive Prompt",
    body: "Describe the scene you want to see. Include the subject, environment, camera movement, lighting mood, and visual style. The more specific, the more cinematic the result.",
  },
  {
    step: "03",
    icon: "🤖",
    title: "Choose Your AI Model",
    body: "Select from Wan 2.5 for fast drafts, Kling 2.5 Pro for high-quality cinematic output, or Veo 3 for Google's most advanced video generation. Each model has different strengths.",
  },
  {
    step: "04",
    icon: "⚡",
    title: "Generate in Under 2 Minutes",
    body: "Hit Generate. Our system queues your job, sends it to the AI model, and delivers a 1080p MP4 directly to your browser — usually in 30–120 seconds.",
  },
  {
    step: "05",
    icon: "✂️",
    title: "Download & Deploy",
    body: "Download your MP4 and embed it in your Google Slides, Moodle course, YouTube channel, or WhatsApp study group. No export settings. No rendering queue. Just download and use.",
  },
];

const TESTIMONIALS = [
  {
    name: "Priya Nair",
    role: "Biology Teacher, DPS Bangalore",
    avatar: "🧑‍🏫",
    quote: "I generated a cell division video in 45 seconds that took me 3 days to explain with diagrams before. My students were genuinely stunned. This is the future of teaching.",
  },
  {
    name: "Arjun Mehta",
    role: "EdTech Content Creator, 2.1M YouTube subscribers",
    avatar: "🎬",
    quote: "My physics explainer channel grew 40% faster after I started using Scenith for B-roll and concept visualization. The Kling 2.5 Pro model produces cinematic quality I couldn't achieve even with a camera crew.",
  },
  {
    name: "Dr. Sneha Kulkarni",
    role: "Head of L&D, Infosys",
    avatar: "💼",
    quote: "We replaced 12 traditional onboarding videos with AI-generated ones at 1/20th the cost. Completion rates went up 62%. The ROI is simply undeniable for enterprise training.",
  },
  {
    name: "Rohan Desai",
    role: "IIT Bombay, Teaching Assistant",
    avatar: "🎓",
    quote: "Being a TA, I have zero budget for production. Scenith lets me create professional-grade animations for thermodynamics concepts that rival what you see on premium NPTEL courses.",
  },
];

const MODELS_INFO = [
  {
    name: "Wan 2.5",
    badge: "Fast",
    badgeColor: "#10B981",
    resolution: "720p",
    credits: "10cr / 5s",
    best: "Quick concept drafts, social content, rapid iteration",
    desc: "Ideal for teachers who need to generate multiple variations quickly to find the perfect visual for a concept.",
  },
  {
    name: "Kling 2.5 Standard",
    badge: "Balanced",
    badgeColor: "#3B82F6",
    resolution: "1080p",
    credits: "15cr / 5s",
    best: "LMS uploads, YouTube B-roll, classroom presentations",
    desc: "The sweet spot between quality and speed. Perfect for producing course content that needs to look professional without maxing out your budget.",
  },
  {
    name: "Kling 2.5 Pro",
    badge: "Premium",
    badgeColor: "#6366F1",
    resolution: "1080p",
    credits: "30cr / 5s",
    best: "Hero course sections, YouTube thumbnails, cinematic edu-content",
    desc: "When you need the absolute best visual quality for flagship courses or high-stakes training content. Cinematic output that rivals broadcast production.",
  },
  {
    name: "Veo 3",
    badge: "Cutting Edge",
    badgeColor: "#F59E0B",
    resolution: "1080p",
    credits: "50cr / 5s",
    best: "Research visualization, premium content, viral science videos",
    desc: "Google's most advanced video model. Produces strikingly realistic and creative outputs with native audio. The gold standard for science communication in 2026.",
  },
];

// ─── Page Component ───────────────────────────────────────────────────────────

export default function AIEducationalVideoGeneratorPage() {
  const CTA_URL =
    "https://scenith.in/tools/ai-video-generation?utm_source=edu-video-page&utm_medium=cta&utm_campaign=educational-tool&utm_content=hero-btn";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className={styles.page}>
        {/* ── Background ── */}
        <div className={styles.bgGlow} aria-hidden="true" />
        <div className={styles.bgGrid} aria-hidden="true" />

        <div className={styles.wrap}>

          {/* ── Breadcrumb ── */}
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">›</span>
            <Link href="/tools">Tools</Link>
            <span aria-hidden="true">›</span>
            <span>AI Educational Video Generator</span>
          </nav>

          {/* ══════════════════════════════════════════════
              HERO SECTION
          ══════════════════════════════════════════════ */}
          <section className={styles.hero}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowDot} aria-hidden="true" />
              Powered by Kling 2.5 · Wan 2.5 · Veo 3
            </div>

            <h1 className={styles.heroTitle}>
              AI Educational{" "}
              <span className={styles.heroGradient}>Video Generator</span>
            </h1>

            <p className={styles.heroSub}>
              Transform any lesson, concept, or curriculum into a cinematic, AI-generated video
              in under 2 minutes. Built for teachers, e-learning creators, and corporate trainers
              who want to educate better — without a film crew, budget, or editing skills.
            </p>

            <div className={styles.heroStats}>
              {STATS.map((s) => (
                <div key={s.label} className={styles.heroStat}>
                  <span className={styles.heroStatValue}>{s.value}</span>
                  <span className={styles.heroStatLabel}>{s.label}</span>
                </div>
              ))}
            </div>

            {/* ── PRIMARY CTA ── */}
            <div className={styles.ctaBlock}>
              <a
                href={CTA_URL}
                className={styles.ctaPrimary}
                aria-label="Open AI Video Generator Tool"
              >
                <span className={styles.ctaIcon} aria-hidden="true">🎬</span>
                Generate Your Educational Video Now
                <span className={styles.ctaArrow} aria-hidden="true">→</span>
              </a>
              <p className={styles.ctaMeta}>
                No credit card required to preview · Plans from ₹99/month · 1080p MP4 output
              </p>
            </div>
          </section>

          {/* ── Demo Video ── */}
          <section className={styles.demoSection} aria-label="Sample AI-generated educational video">
            <div className={styles.demoLabel}>
              <span className={styles.demoDot} aria-hidden="true" />
              Live AI-Generated Sample
            </div>
            <div className={styles.demoVideoWrap}>
              <div className={styles.demoOverlay} aria-hidden="true" />
              <video
                src="https://cdn.scenith.in/ai_video_gen/2/video_3a8f8067-40ff-4ec4-9173-83cfc81a5cb4.mp4"
                autoPlay
                loop
                muted
                playsInline
                disablePictureInPicture
                className={styles.demoVideo}
                aria-label="AI-generated educational video demonstration showing cinematic quality output"
              />
              <div className={styles.demoCaption}>
                <span>🎓</span>
                <span>Generated with Scenith AI · Kling 2.5 Pro · 10s · 1080p</span>
              </div>
            </div>
            <p className={styles.demoCopy}>
              Every video above was generated from a plain-text prompt in under 90 seconds.
              No cameras. No editors. No stock footage.
            </p>
          </section>

          {/* ══════════════════════════════════════════════
              WHY EDUCATIONAL VIDEO IS THE #1 LEARNING FORMAT
          ══════════════════════════════════════════════ */}
          <section className={styles.section} aria-labelledby="why-video-heading">
            <div className={styles.sectionLabel}>The Science of Visual Learning</div>
            <h2 className={styles.sectionTitle} id="why-video-heading">
              Why Educational Video Outperforms Every Other Teaching Format
            </h2>
            <p className={styles.sectionBody}>
              The evidence is overwhelming and it has been building for decades. Human beings are
              hardwired for visual information. Our visual cortex processes images 60,000 times
              faster than text. We remember 65% of information when paired with visuals, versus
              only 10% from text alone. But in 2026, the barrier has never been lower to act on
              this knowledge — because AI can now generate those visuals on demand.
            </p>
            <p className={styles.sectionBody}>
              For generations, educational video was the exclusive domain of well-funded institutions.
              Khan Academy had Sal Khan drawing on a screen. Crash Course had John Green and a
              production team. The BBC had an entire educational arm. For a teacher in Patna or
              Coimbatore or Nagpur, those resources were simply unavailable. A teacher with 45
              students and a chalk board was not going to compete with a Netflix documentary about
              the human body.
            </p>
            <p className={styles.sectionBody}>
              AI video generation changes this equation entirely. For the first time in history,
              a single teacher with a text prompt and a credit card can produce a video that
              shows — visually, cinematically, memorably — exactly the concept they need to teach.
              Not stock footage of a generic classroom. Not a bland animation from a template.
              A custom, generated-on-demand video that shows your exact concept, in your exact
              visual style, with your exact framing.
            </p>

            <div className={styles.statsGrid}>
              {STATS.map((s) => (
                <div key={s.label} className={styles.statCard}>
                  <div className={styles.statValue}>{s.value}</div>
                  <div className={styles.statLabel}>{s.label}</div>
                  <div className={styles.statSource}>{s.source}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              USE CASES
          ══════════════════════════════════════════════ */}
          <section className={styles.section} aria-labelledby="use-cases-heading">
            <div className={styles.sectionLabel}>Use Cases</div>
            <h2 className={styles.sectionTitle} id="use-cases-heading">
              Who Is Using AI Educational Video — And How
            </h2>
            <p className={styles.sectionBody}>
              The adoption of AI video generation in education has been one of the fastest
              technology shifts ever recorded in the EdTech sector. From individual school teachers
              to multinational L&D departments, the use cases are expanding every week.
            </p>

            <div className={styles.useCasesGrid}>
              {USE_CASES.map((uc) => (
                <article key={uc.title} className={styles.useCaseCard}>
                  <div className={styles.useCaseIcon} aria-hidden="true">{uc.icon}</div>
                  <h3 className={styles.useCaseTitle}>{uc.title}</h3>
                  <p className={styles.useCaseDesc}>{uc.desc}</p>
                  <div className={styles.tagRow}>
                    {uc.tags.map((t) => (
                      <span key={t} className={styles.tag}>{t}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              SUBJECT PROMPT GALLERY
          ══════════════════════════════════════════════ */}
          <section className={styles.section} aria-labelledby="prompts-heading">
            <div className={styles.sectionLabel}>Prompt Inspiration</div>
            <h2 className={styles.sectionTitle} id="prompts-heading">
              Real AI Video Prompts for Every Subject — Copy & Use Them
            </h2>
            <p className={styles.sectionBody}>
              One of the biggest hurdles for new users is writing their first prompt. Below are
              tested, high-quality prompts across 8 core subject areas. These are not vague
              placeholders — each one has been designed to produce a specific, visually rich
              educational video. Copy any of them directly into the Scenith AI Video Generator
              to see immediate results.
            </p>

            <div className={styles.promptGrid}>
              {SUBJECT_PROMPTS.map((sp) => (
                <div key={sp.subject} className={styles.promptCard}>
                  <div className={styles.promptSubject}>
                    <span aria-hidden="true">{sp.icon}</span>
                    {sp.subject}
                  </div>
                  <blockquote className={styles.promptText}>"{sp.prompt}"</blockquote>
                  <a
                    href={`https://scenith.in/tools/ai-video-generation?utm_source=edu-video-page&utm_medium=prompt-card&utm_campaign=educational-tool&utm_content=${sp.subject.toLowerCase()}&prompt=${encodeURIComponent(sp.prompt)}`}
                    className={styles.promptBtn}
                    aria-label={`Use this ${sp.subject} prompt in the AI video generator`}
                  >
                    Use This Prompt →
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              HOW IT WORKS (WORKFLOW)
          ══════════════════════════════════════════════ */}
          <section className={styles.section} aria-labelledby="workflow-heading">
            <div className={styles.sectionLabel}>How It Works</div>
            <h2 className={styles.sectionTitle} id="workflow-heading">
              From Concept to Classroom-Ready Video in 5 Steps
            </h2>
            <p className={styles.sectionBody}>
              The entire pipeline from idea to downloadable MP4 takes under 5 minutes for most
              users. Here's exactly what the workflow looks like when you use Scenith to generate
              educational videos.
            </p>

            <div className={styles.workflowList}>
              {WORKFLOW_STEPS.map((ws, i) => (
                <div key={ws.step} className={styles.workflowItem}>
                  <div className={styles.workflowLeft}>
                    <div className={styles.workflowStep}>{ws.step}</div>
                    {i < WORKFLOW_STEPS.length - 1 && (
                      <div className={styles.workflowLine} aria-hidden="true" />
                    )}
                  </div>
                  <div className={styles.workflowContent}>
                    <div className={styles.workflowIcon} aria-hidden="true">{ws.icon}</div>
                    <h3 className={styles.workflowTitle}>{ws.title}</h3>
                    <p className={styles.workflowBody}>{ws.body}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Secondary CTA */}
            <div className={styles.ctaBlockMid}>
              <a
                href={CTA_URL}
                className={styles.ctaPrimary}
                aria-label="Start generating educational videos"
              >
                <span aria-hidden="true">⚡</span>
                Start Generating in 60 Seconds
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              DEEP CONTENT: THE STATE OF EDU VIDEO IN 2026
          ══════════════════════════════════════════════ */}
          <section className={styles.section} aria-labelledby="state-2026-heading">
            <div className={styles.sectionLabel}>Industry Deep Dive</div>
            <h2 className={styles.sectionTitle} id="state-2026-heading">
              The State of AI Educational Video in 2026 — A Complete Picture
            </h2>

            <h3 className={styles.subHeading}>The ₹890 Billion E-Learning Market Is Being Rewritten</h3>
            <p className={styles.sectionBody}>
              India's e-learning market alone crossed ₹890 billion in 2025 and is growing at
              over 19% CAGR. Globally, the corporate e-learning market surpassed $400 billion.
              At the heart of this explosion is one simple truth: people learn better when they
              can see, not just read. Video has become the default learning format for an entire
              generation that grew up on YouTube, and now on TikTok and Reels.
            </p>
            <p className={styles.sectionBody}>
              But there's a painful gap. Creating educational video has historically required
              either significant budget — think ₹15,000 to ₹2,00,000 per minute of finished
              content — or significant time and skill. Screencasting tools like Loom and Camtasia
              democratised some of this, but they still required a human presenter and script.
              Whiteboard animation tools like VideoScribe reduced costs, but the output was
              templated and stylistically limited.
            </p>
            <p className={styles.sectionBody}>
              AI video generation in 2026 represents the third — and most radical — wave of
              educational video democratisation. A teacher can now describe what they want to see,
              and a sophisticated AI model trained on billions of visual frames will generate it.
              Not from templates. Not from stock footage. From pure generative computation.
            </p>

            <h3 className={styles.subHeading}>How Modern AI Video Models Work for Education</h3>
            <p className={styles.sectionBody}>
              The AI models available through Scenith — Wan 2.5, Kling 2.5, and Veo 3 — are
              video diffusion models. Think of them like image diffusion models (the technology
              behind Midjourney and DALL-E) but extended through the temporal dimension. Instead
              of generating a single image, they generate a coherent sequence of frames that flow
              smoothly from one to the next.
            </p>
            <p className={styles.sectionBody}>
              For education, this has profound implications. You can now generate a video that
              shows a tectonic plate shifting — not from a NASA archive, but custom-generated for
              your exact lesson plan, with the camera angle, speed, and visual style you specify.
              You can show the inside of a mitochondria, the formation of a thundercloud, the
              collapse of a star into a black hole, or the slow growth of coral on a reef — all
              from a single text prompt, in under two minutes, for the cost of a cup of tea.
            </p>
            <p className={styles.sectionBody}>
              Kling 2.5 Pro, in particular, has emerged as the benchmark for photorealistic
              educational content. Its temporal coherence — the smoothness with which objects
              move from frame to frame — makes it exceptional for showing physical processes
              and natural phenomena. Veo 3, Google's flagship video model, adds native audio
              generation, making it possible to produce educational clips with ambient sound
              that reinforces the visual message.
            </p>

            <h3 className={styles.subHeading}>The Corporate Training Revolution</h3>
            <p className={styles.sectionBody}>
              While school education gets most of the attention, the corporate training sector
              is arguably where AI video is having the most immediate financial impact. L&D
              (Learning & Development) departments at Indian companies spent an estimated ₹22,000
              crore on training content in FY 2024-25. A significant portion of that went to
              video production agencies.
            </p>
            <p className={styles.sectionBody}>
              AI video generation is disrupting this spend rapidly. Companies like Infosys, Wipro,
              and HCL have already begun piloting AI-generated onboarding videos. A typical
              onboarding video that previously cost ₹3–5 lakhs to produce with a production
              agency can now be generated in-house for under ₹5,000 in AI credits — with faster
              turnaround and easier revision cycles.
            </p>
            <p className={styles.sectionBody}>
              The compliance training use case is particularly compelling. Regulations change.
              When the labour code changes, or when SEBI issues new guidelines, training content
              needs to be updated. Traditional video production means going back to the agency,
              waiting for availability, paying for revisions, and waiting for delivery. With AI,
              a compliance manager can update the script, regenerate the key scenes, and have
              updated training content deployed in the same day.
            </p>

            <h3 className={styles.subHeading}>Prompt Engineering for Educational Video</h3>
            <p className={styles.sectionBody}>
              Getting the most out of an AI video generator for education requires understanding
              how to write effective prompts. The good news is that the skill is learnable in
              under an hour. Here are the core principles:
            </p>
            <p className={styles.sectionBody}>
              <strong style={{ color: "#818CF8" }}>Specificity beats generality.</strong> "A cell
              dividing" will produce a generic result. "A human cancer cell undergoing mitosis,
              microscopic view, bioluminescent greens and blues, smooth motion, dark background,
              scientific visualization style" will produce something genuinely useful for a
              biology lesson.
            </p>
            <p className={styles.sectionBody}>
              <strong style={{ color: "#818CF8" }}>Camera language matters.</strong> Words like
              "aerial drone shot," "extreme close-up macro lens," "slow dolly push-in," "tracking
              shot," and "bird's eye view" give the AI model explicit camera instructions that
              dramatically improve the cinematic quality of the output.
            </p>
            <p className={styles.sectionBody}>
              <strong style={{ color: "#818CF8" }}>Lighting and mood are content.</strong> "Dramatic
              chiaroscuro lighting" versus "warm morning golden hour" versus "cold clinical
              laboratory fluorescents" — lighting choices communicate emotional and cognitive
              information that reinforces the educational message.
            </p>
            <p className={styles.sectionBody}>
              <strong style={{ color: "#818CF8" }}>Loop-friendly prompts.</strong> For classroom
              display and digital signage, prompts that describe continuous, looping natural
              processes — like "water flowing in a perpetual stream," "stars rotating slowly around
              Polaris," or "leaves in gentle wind" — create ambient educational content that can
              play on screens indefinitely.
            </p>

            <h3 className={styles.subHeading}>Legal, Ethics, and Responsible Use in Education</h3>
            <p className={styles.sectionBody}>
              A frequently asked question from educators is whether AI-generated video can be
              used in commercial courses, sold content, or classroom instruction without
              intellectual property concerns. The answer, for Scenith-generated content, is yes.
              All videos generated through Scenith are owned by the creator, with full commercial
              rights included in all paid plans.
            </p>
            <p className={styles.sectionBody}>
              The ethical dimension of AI video in education also deserves direct attention.
              Some educators worry that AI-generated visuals that are "too polished" might blur
              the line between generated and real footage for students. This is a legitimate
              pedagogical consideration, and we recommend that educators be transparent with
              students about when AI-generated visuals are being used — not as a disclaimer, but
              as an opportunity to teach media literacy alongside the subject matter.
            </p>
            <p className={styles.sectionBody}>
              Showing students how an AI video is generated — from prompt to output — is itself
              a powerful lesson about the nature of generative AI, the relationship between
              language and visual representation, and the role of human creative direction in
              technology-assisted work. Some of the most innovative teachers are building entire
              units around this process.
            </p>
          </section>

          {/* ══════════════════════════════════════════════
              AI MODELS COMPARISON
          ══════════════════════════════════════════════ */}
          <section className={styles.section} aria-labelledby="models-heading">
            <div className={styles.sectionLabel}>Model Guide</div>
            <h2 className={styles.sectionTitle} id="models-heading">
              Which AI Video Model Is Right for Your Educational Content?
            </h2>
            <p className={styles.sectionBody}>
              Scenith gives educators access to four state-of-the-art AI video models, each
              with different strengths, costs, and ideal use cases. Understanding which model
              to choose can significantly impact both the quality of your output and your
              credit efficiency.
            </p>

            <div className={styles.modelsGrid}>
              {MODELS_INFO.map((m) => (
                <article key={m.name} className={styles.modelCard}>
                  <div className={styles.modelHeader}>
                    <div className={styles.modelName}>{m.name}</div>
                    <span
                      className={styles.modelBadge}
                      style={{
                        background: `${m.badgeColor}22`,
                        borderColor: `${m.badgeColor}55`,
                        color: m.badgeColor,
                      }}
                    >
                      {m.badge}
                    </span>
                  </div>
                  <div className={styles.modelMeta}>
                    <span>{m.resolution}</span>
                    <span>·</span>
                    <span>{m.credits}</span>
                  </div>
                  <p className={styles.modelDesc}>{m.desc}</p>
                  <div className={styles.modelBest}>
                    <span className={styles.modelBestLabel}>Best for:</span>
                    <span>{m.best}</span>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              TRADITIONAL vs AI COMPARISON TABLE
          ══════════════════════════════════════════════ */}
          <section className={styles.section} aria-labelledby="comparison-heading">
            <div className={styles.sectionLabel}>Cost Comparison</div>
            <h2 className={styles.sectionTitle} id="comparison-heading">
              Traditional Video Production vs AI Generation — The Real Numbers
            </h2>
            <p className={styles.sectionBody}>
              The economic argument for AI educational video generation becomes undeniable when
              you put the two approaches side by side. Here's how Scenith AI compares to
              traditional educational video production.
            </p>

            <div className={styles.tableWrap} role="region" aria-label="Cost comparison table">
              <table className={styles.compTable}>
                <thead>
                  <tr>
                    <th scope="col">Factor</th>
                    <th scope="col">Traditional Production</th>
                    <th scope="col">Scenith AI</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_ROWS.map((row) => (
                    <tr key={row.feature}>
                      <td className={styles.tdFeature}>{row.feature}</td>
                      <td className={styles.tdTraditional}>{row.traditional}</td>
                      <td className={styles.tdAi}>{row.aiScenith}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              PLATFORMS
          ══════════════════════════════════════════════ */}
          <section className={styles.section} aria-labelledby="platforms-heading">
            <div className={styles.sectionLabel}>Compatibility</div>
            <h2 className={styles.sectionTitle} id="platforms-heading">
              Publish Your AI Educational Videos Everywhere
            </h2>
            <p className={styles.sectionBody}>
              Scenith generates standard MP4 files that work natively on every major education
              and content platform. No format conversion, no re-encoding, no plugins required.
            </p>
            <div className={styles.platformGrid}>
              {PLATFORMS.map((p) => (
                <div key={p.name} className={styles.platformCard}>
                  <div className={styles.platformIcon} aria-hidden="true">{p.icon}</div>
                  <div className={styles.platformName}>{p.name}</div>
                  <div className={styles.platformDesc}>{p.desc}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              TESTIMONIALS
          ══════════════════════════════════════════════ */}
          <section className={styles.section} aria-labelledby="testimonials-heading">
            <div className={styles.sectionLabel}>What Educators Are Saying</div>
            <h2 className={styles.sectionTitle} id="testimonials-heading">
              Real Feedback From Teachers, Trainers & Creators
            </h2>
            <div className={styles.testimonialsGrid}>
              {TESTIMONIALS.map((t) => (
                <blockquote key={t.name} className={styles.testimonialCard}>
                  <p className={styles.testimonialQuote}>"{t.quote}"</p>
                  <footer className={styles.testimonialAuthor}>
                    <span className={styles.testimonialAvatar} aria-hidden="true">{t.avatar}</span>
                    <div>
                      <cite className={styles.testimonialName}>{t.name}</cite>
                      <div className={styles.testimonialRole}>{t.role}</div>
                    </div>
                  </footer>
                </blockquote>
              ))}
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              ADVANCED TECHNIQUES CONTENT
          ══════════════════════════════════════════════ */}
          <section className={styles.section} aria-labelledby="advanced-heading">
            <div className={styles.sectionLabel}>Advanced Usage</div>
            <h2 className={styles.sectionTitle} id="advanced-heading">
              Advanced Techniques for Power Users & Course Creators
            </h2>

            <h3 className={styles.subHeading}>Image-to-Video for Custom Educational Assets</h3>
            <p className={styles.sectionBody}>
              Beyond text-to-video, Scenith supports image-to-video generation — a powerful
              capability for educators who have existing visual assets they want to animate.
              Upload a diagram from your textbook, a microscopy image from a lab, or an
              illustration from your slide deck, then describe the motion you want to see.
              The AI will animate your image in a way that preserves the original visual
              while adding dynamic movement.
            </p>
            <p className={styles.sectionBody}>
              This is particularly powerful for science education. Imagine taking a static
              diagram of the water cycle and generating a video that animates each stage in
              sequence. Or taking a cross-section illustration of a human heart and animating
              the blood flow through the chambers. These use cases were previously only possible
              with dedicated motion graphics artists and weeks of production time.
            </p>

            <h3 className={styles.subHeading}>Building a Video Library for Your Course</h3>
            <p className={styles.sectionBody}>
              Serious course creators should think about building a systematic video library
              rather than generating individual clips ad hoc. A methodical approach involves
              mapping every concept in your curriculum that would benefit from visual
              demonstration — typically 30–50% of all concepts in a science or technical
              course — and creating a prompt template for each one.
            </p>
            <p className={styles.sectionBody}>
              With Scenith's credit system, a full semester's worth of supplementary video
              content — say, 40 clips of 5–10 seconds each — costs approximately 400–1,200
              credits depending on the models used. At the entry-level plan, that's under
              ₹500 worth of credits. The ROI compared to traditional production is staggering.
            </p>

            <h3 className={styles.subHeading}>Using Negative Prompts for Precision</h3>
            <p className={styles.sectionBody}>
              Scenith's advanced options include a negative prompt field — an instruction to
              the AI about what NOT to include in the video. For educational content, this is
              invaluable. Common negative prompts for educational videos include: "blurry,
              low quality, watermark, text overlay, distorted anatomy, inaccurate color, noise."
              For content aimed at younger audiences, you might also add: "scary, violent, dark,
              disturbing." The negative prompt acts as a quality filter that steers the AI
              away from common failure modes.
            </p>

            <h3 className={styles.subHeading}>Aspect Ratios Across Different Learning Contexts</h3>
            <p className={styles.sectionBody}>
              The aspect ratio you choose should match the consumption context for your content.
              16:9 is the universal standard for projected classroom content, LMS-embedded videos,
              and YouTube. 9:16 vertical format is essential if you are distributing educational
              content via Instagram Reels, YouTube Shorts, or WhatsApp Status — all of which are
              increasingly being used by teachers in India to reach students on mobile devices.
              1:1 square format works well for LinkedIn Learning content, Facebook educational
              posts, and some LMS thumbnail displays.
            </p>
          </section>

          {/* ══════════════════════════════════════════════
              FAQ
          ══════════════════════════════════════════════ */}
          <section className={styles.section} aria-labelledby="faq-heading">
            <div className={styles.sectionLabel}>FAQ</div>
            <h2 className={styles.sectionTitle} id="faq-heading">
              Frequently Asked Questions About AI Educational Video Generation
            </h2>
            <div className={styles.faqList}>
              {[
                {
                  q: "Can I use AI to generate educational videos for free?",
                  a: "Scenith offers a free trial with limited credits so you can test the tool before committing. Paid plans start at ₹99/month and unlock access to all four AI models including Kling 2.5 Pro and Veo 3. There is no free tier with unlimited generation — high-quality AI video generation requires significant compute, and we price it as fairly as possible.",
                },
                {
                  q: "Do I own the copyright to videos I generate with Scenith?",
                  a: "Yes. All videos generated through Scenith on paid plans are owned by you with full commercial rights. You can use them in paid courses, YouTube channels, corporate training, and any other commercial application. We do not claim ownership of your generated content.",
                },
                {
                  q: "What is the maximum video length I can generate?",
                  a: "Currently, Scenith supports video generation up to 10 seconds per clip. For longer educational segments, you can generate multiple clips and combine them in any video editor. Many educators find that 5–10 second clips work perfectly as visual punctuation within longer lessons — used at the moment of conceptual transition to visually anchor the new idea.",
                },
                {
                  q: "Can I add voiceover or subtitles to AI-generated videos?",
                  a: "Scenith generates the video and, with models like Veo 3, can include native AI-generated audio. For voiceover and subtitles, you can use any standard video editor like CapCut, DaVinci Resolve (free), or even iMovie after downloading your MP4. Many educators record a simple voiceover on their phone and layer it over the AI-generated visuals.",
                },
                {
                  q: "How accurate are AI-generated educational videos scientifically?",
                  a: "AI video models generate aesthetically plausible visuals, but they are not scientific simulations. For concepts where precise accuracy is critical — atomic orbital shapes, exact anatomical proportions, mathematically accurate physical simulations — AI video should be used as a visual aid and motivator, with appropriate contextual explanation. For most educational visualization needs — showing the scale of the solar system, the general process of cell division, the movement of tectonic plates — the output is highly appropriate and effective.",
                },
                {
                  q: "Is Scenith suitable for schools and educational institutions?",
                  a: "Yes. Scenith has institutional plans designed for schools, universities, and EdTech companies that need higher credit volumes and multiple user seats. Contact our team at support@scenith.in for institutional pricing.",
                },
                {
                  q: "How does Scenith compare to other AI video generators for education?",
                  a: "Scenith is currently the only AI video platform offering access to multiple state-of-the-art models — including Kling 2.5 Pro and Veo 3 — at India-first pricing (plans from ₹99/month vs $20+/month for international competitors). We're specifically optimised for ease of use for non-technical creators, including educators, with a simple prompt-to-video workflow.",
                },
                {
                  q: "What file format do AI-generated videos download as?",
                  a: "All Scenith-generated videos download as standard H.264 MP4 files — the most widely supported video format in the world. Compatible with every LMS, every video platform, every presentation software, and every device.",
                },
              ].map((faq) => (
                <details key={faq.q} className={styles.faqItem}>
                  <summary className={styles.faqQuestion}>{faq.q}</summary>
                  <p className={styles.faqAnswer}>{faq.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              FINAL CTA SECTION
          ══════════════════════════════════════════════ */}
          <section className={styles.finalCta} aria-labelledby="final-cta-heading">
            <div className={styles.finalCtaGlow} aria-hidden="true" />
            <div className={styles.finalCtaEyebrow}>
              <span className={styles.eyebrowDot} aria-hidden="true" />
              Ready in Under 2 Minutes
            </div>
            <h2 className={styles.finalCtaTitle} id="final-cta-heading">
              Your Students Deserve Better Than Stock Photos and Boring Slides
            </h2>
            <p className={styles.finalCtaBody}>
              Every great teacher knows the moment when a visual explanation unlocks understanding
              in a student that words simply couldn't reach. AI video generation puts that power
              in your hands, for every concept, every lesson, every time — at a fraction of the
              cost of traditional production and in under two minutes.
            </p>
            <p className={styles.finalCtaBody}>
              Join thousands of educators, content creators, and corporate trainers who are
              already using Scenith to teach better, train faster, and create more engaging
              educational experiences. Start with a free trial today.
            </p>
            <a
              href={CTA_URL}
              className={styles.ctaPrimaryLarge}
              aria-label="Go to AI Video Generator tool"
            >
              <span aria-hidden="true">🎬</span>
              Open the AI Video Generator
              <span aria-hidden="true">→</span>
            </a>
            <div className={styles.finalCtaMeta}>
              <span>✓ Plans from ₹99/month</span>
              <span>✓ 1080p MP4 output</span>
              <span>✓ Kling 2.5 · Veo 3 · Wan 2.5</span>
              <span>✓ Full commercial rights</span>
            </div>
          </section>

          {/* ── Related Tools ── */}
          <section className={styles.relatedSection} aria-labelledby="related-heading">
            <h2 className={styles.relatedTitle} id="related-heading">Explore More AI Tools</h2>
            <div className={styles.relatedGrid}>
              {[
                { href: "/tools/ai-video-generation", label: "AI Video Generator", desc: "The main tool — all use cases" },
                { href: "/tools", label: "All AI Tools", desc: "Browse the full Scenith toolkit" },
                { href: "/pricing", label: "Pricing & Plans", desc: "Credits, models, and plan comparison" },
              ].map((r) => (
                <Link key={r.href} href={r.href} className={styles.relatedCard}>
                  <div className={styles.relatedLabel}>{r.label}</div>
                  <div className={styles.relatedDesc}>{r.desc}</div>
                  <span className={styles.relatedArrow} aria-hidden="true">→</span>
                </Link>
              ))}
            </div>
          </section>

          <div style={{ height: 80 }} />
        </div>
      </div>
    </>
  );
}