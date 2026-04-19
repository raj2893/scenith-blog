import type { Metadata } from "next";
import "./edu-video.css";

export const metadata: Metadata = {
  title: "AI Video Generator for Education — Create Lesson Videos in Minutes | Scenith",
  description:
    "The #1 AI video generator built for educators, teachers, and e-learning creators. Turn lesson plans, scripts, and course notes into cinematic educational videos with Kling, Veo 3.1, and Wan 2.5. No camera. No crew. No editing skills needed.",
  keywords: [
    "AI video generator for education",
    "AI video for teachers",
    "educational video AI",
    "e-learning video generator",
    "create lesson videos with AI",
    "AI course video maker",
    "text to video for education",
    "AI explainer video generator",
    "online course video creator AI",
    "AI teaching video maker",
    "AI video maker for students",
    "free AI educational video generator",
    "Veo 3.1 education",
    "Kling AI for e-learning",
    "AI video maker 2026",
  ],
  openGraph: {
    title: "AI Video Generator for Education — Scenith",
    description:
      "Turn any lesson plan or script into a cinematic educational video in minutes. Powered by Kling 2.6, Veo 3.1, Wan 2.5. Free to start.",
    url: "https://scenith.in/tools/ai-video-generator-for-education",
    siteName: "Scenith",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Video Generator for Education | Scenith",
    description:
      "Create stunning lesson videos, explainer content, and course trailers with AI. No filming. No editing. Just prompts.",
  },
  alternates: {
    canonical: "https://scenith.in/tools/ai-video-generator-for-education",
  },
};

const CTA_URL =
  "https://scenith.in/create-ai-content?tab=video&utm_source=edu_video_tool&utm_medium=landing_page&utm_campaign=ai_edu_video_2026";

const MODELS = [
  {
    name: "Kling 2.6 Pro",
    tag: "Best Quality",
    logo: "https://cdn.scenith.in/brand-logos/Kling%20logo.webp",
    desc: "Cinematic 1080p video with smooth motion — ideal for course trailers and lecture intros.",
    color: "#6355dc",
  },
  {
    name: "Veo 3.1",
    tag: "Google AI",
    logo: "https://cdn.scenith.in/brand-logos/Google%20Logo.webp",
    desc: "Google's most advanced video model. Perfect for documentary-style educational content.",
    color: "#0ea5e9",
  },
  {
    name: "Wan 2.5",
    tag: "Best Value",
    logo: "https://cdn.scenith.in/brand-logos/WanNew%20ai%20logo.png",
    desc: "Fast and affordable. Great for generating multiple lesson clips quickly.",
    color: "#10b981",
  },
  {
    name: "Grok Imagine 🎵",
    tag: "With Audio",
    logo: "https://cdn.scenith.in/brand-logos/Grok.png",
    desc: "The only model with built-in AI audio — music, sound effects, and narration all in one.",
    color: "#f59e0b",
  },
];

const USE_CASES = [
  {
    icon: "🎓",
    title: "University & College Lectures",
    body: "Transform dense academic content into visual explainers that students actually watch. Generate diagram walk-throughs, concept animations, and chapter summaries as short AI videos — no production team required.",
    stat: "73% higher retention",
    statSub: "vs. text-only lecture notes",
  },
  {
    icon: "📚",
    title: "K–12 Classroom Lessons",
    body: "Make learning feel alive. Generate science experiments, historical re-enactments, geography fly-overs, and story scenes for English class — all from a simple text description. Safe, age-appropriate, and stunning.",
    stat: "91% of teachers",
    statSub: "say video improves engagement",
  },
  {
    icon: "💻",
    title: "Online Courses & LMS Content",
    body: "Course creators on Udemy, Teachable, Kajabi, and Thinkific now use AI video to produce professional-looking lessons without expensive cameras or studios. Generate intro clips, transitions, and visual examples at scale.",
    stat: "3.5× faster",
    statSub: "content production vs. filming",
  },
  {
    icon: "🧪",
    title: "Science & STEM Demonstrations",
    body: "Show what's impossible to film: molecular reactions, black hole formation, tectonic plate movement, DNA replication. AI video lets STEM educators illustrate concepts that no physical classroom can replicate.",
    stat: "64% less budget",
    statSub: "vs. traditional science video production",
  },
  {
    icon: "🌍",
    title: "Language & Cultural Education",
    body: "Generate immersive scene-based videos for language learning — a café in Paris, a market in Tokyo, a street in Cairo. Contextual visual learning has been proven to dramatically accelerate language acquisition.",
    stat: "2.1× vocabulary retention",
    statSub: "with visual-contextual learning",
  },
  {
    icon: "🏥",
    title: "Medical & Professional Training",
    body: "Medical schools, law firms, and corporate L&D teams use AI video to simulate case studies, procedural training, and scenario-based learning modules — without the safety risks or costs of real-world staging.",
    stat: "58% cost reduction",
    statSub: "in simulation-based training",
  },
];

const HOW_STEPS = [
  {
    num: "01",
    title: "Write Your Learning Objective",
    desc: "Describe what you want to teach. Be as specific as possible — include the subject, the concept, the visual style, and the tone. Example: 'Cinematic animation of the water cycle — clouds forming, rain falling, rivers flowing into the ocean, scientific diagram style, 10 seconds.'",
  },
  {
    num: "02",
    title: "Pick Your AI Video Model",
    desc: "Choose from Kling 2.6 Pro for maximum cinematic quality, Veo 3.1 for Google-grade realism, Wan 2.5 for fast bulk generation, or Grok Imagine for videos with built-in AI audio and music. Each model has different strengths for different lesson types.",
  },
  {
    num: "03",
    title: "Set Duration & Aspect Ratio",
    desc: "Choose 5s or 10s clips (4s or 8s for Veo). Select 16:9 for traditional video players and LMS embeds, 9:16 for vertical mobile-first content and social sharing, or 1:1 for course thumbnails and platform cards.",
  },
  {
    num: "04",
    title: "Generate & Download MP4",
    desc: "Hit Generate. Within 30–120 seconds, your educational video is ready. Download as a full-resolution MP4. Embed directly in your LMS, YouTube channel, course platform, or presentation slides. No watermarks. Full commercial rights.",
  },
];

const PROMPTS = [
  {
    subject: "Physics",
    prompt:
      "Cinematic slow-motion animation of a pendulum swinging in a vacuum, showing conservation of energy with glowing energy transfer arcs, dark background, scientific diagram labels, 4K",
  },
  {
    subject: "Biology",
    prompt:
      "Micro-level animation of mitosis — a cell dividing into two identical daughter cells, chromosomes glowing and separating, nucleus dissolving and reforming, bioluminescent style, 10 seconds",
  },
  {
    subject: "History",
    prompt:
      "Cinematic aerial timelapse of ancient Rome at its peak — the Colosseum intact, the Forum busy with toga-clad citizens, horse-drawn carts on stone roads, warm golden hour light, documentary style",
  },
  {
    subject: "Geography",
    prompt:
      "Slow satellite-style zoom into the Amazon Rainforest canopy, rivers visible from above, mist rising from the trees, birds in flight, National Geographic documentary style, 4K cinematic",
  },
  {
    subject: "Chemistry",
    prompt:
      "Macro animation of a chemical reaction — two liquids mixing and turning from blue to red, bubbles forming, molecular bond animation overlay, clean white lab background, educational diagram style",
  },
  {
    subject: "Mathematics",
    prompt:
      "Abstract 3D animation of a Fibonacci spiral forming in space, golden ratio proportions highlighted, geometric shapes assembling from particles, dark background, purple and gold color scheme",
  },
  {
    subject: "Astronomy",
    prompt:
      "Cinematic journey from Earth's atmosphere to the edge of the solar system — passing each planet in sequence, accurate scale and color, starfield background, slow dramatic zoom, 4K",
  },
  {
    subject: "Language Arts",
    prompt:
      "Slow cinematic scene of a young girl reading a glowing book under a tree at dusk, golden bokeh lights, words floating out of the pages into the air, magical and warm, emotional storytelling",
  },
];

const FAQS = [
  {
    q: "Can I use AI-generated educational videos commercially?",
    a: "Yes. All videos generated on Scenith come with full commercial rights. You can use them in paid courses, YouTube channels, school programs, corporate training, and client-facing materials without attribution or licensing fees.",
  },
  {
    q: "What's the best AI video model for educational content?",
    a: "It depends on your use case. For high-quality cinematic visuals (science animations, historical scenes), Kling 2.6 Pro or Veo 3.1 are best. For fast, bulk lesson content generation, Wan 2.5 is the most cost-effective. If you need videos with built-in music and sound effects, Grok Imagine is the only model that supports AI audio.",
  },
  {
    q: "How long does it take to generate an educational AI video?",
    a: "Generation time is 30–120 seconds depending on the model and duration. Wan 2.5 is fastest (30–60 sec). Kling 2.6 Pro and Veo 3.1 typically take 60–120 seconds. Grok Imagine varies by complexity. All run in the background — you don't need to stay on the page.",
  },
  {
    q: "Can I use AI video to create content for students with disabilities?",
    a: "Absolutely. AI-generated visual content can be a powerful accessibility tool. Visual learners, students with dyslexia, and non-native language speakers all benefit significantly from video-based learning. You can combine Scenith's AI Video with our AI Voice generator to add narration for students who benefit from audio descriptions.",
  },
  {
    q: "What aspect ratios work best for LMS platforms like Moodle, Canvas, or Blackboard?",
    a: "16:9 is the standard for all major LMS platforms and works perfectly in Moodle, Canvas, Blackboard, Teachable, Kajabi, and Thinkific. Use 9:16 if you're distributing content via Instagram, TikTok, or YouTube Shorts. 1:1 works well for course preview cards on Udemy and similar marketplaces.",
  },
  {
    q: "Is there a free plan for educators?",
    a: "Yes — you get 50 free credits on signup, no credit card required. Free credits work across video, image, and voice generation. Paid educator plans start at $9/month. We also offer institutional pricing for schools and universities — contact us via the Scenith website.",
  },
  {
    q: "Can I create image-to-video content from my existing lesson slides?",
    a: "Yes. Scenith supports image-to-video generation. Upload a screenshot of your lesson slide, diagram, or illustration, write a motion prompt (e.g., 'animate this diagram with smooth zooms and glowing highlights'), and the AI will generate a video that brings your static content to life.",
  },
  {
    q: "How many videos can I generate per month?",
    a: "It depends on your plan and the model you use. A 5-second Wan 2.5 video at 480p costs 46 credits. A 10-second Kling 2.6 Pro video costs 130 credits. The Creator Lite plan ($9/mo) includes 300 credits — enough for roughly 6–7 high-quality videos per month or 30+ fast Wan 2.5 clips.",
  },
  {
    q: "Do AI-generated educational videos work for language learning?",
    a: "Exceptionally well. The contextual, visual approach to language learning — where students see vocabulary in realistic scenes — has been shown to improve retention by over 200% compared to flashcard methods. Generate scene-based videos (a French café, a Japanese market, a German train station) and embed them directly into your language course.",
  },
  {
    q: "Can I add subtitles or captions to AI-generated educational videos?",
    a: "Yes. After generating your video, you can use Scenith's Add Subtitles tool (available at scenith.in/tools/add-subtitles-to-videos) to automatically transcribe and burn in captions. This is especially useful for accessibility compliance and multilingual classrooms.",
  },
];

const COMPARISON_ROWS = [
  {
    feature: "Time to produce a 10s lesson clip",
    traditional: "2–5 days (scripting, filming, editing)",
    scenith: "~2 minutes (prompt + generate)",
  },
  {
    feature: "Equipment required",
    traditional: "Camera, lighting, green screen, mic",
    scenith: "Just a browser",
  },
  {
    feature: "Cost per video",
    traditional: "$200–$2,000+ per professional clip",
    scenith: "From $0.30 per video",
  },
  {
    feature: "Revision process",
    traditional: "Re-filming, re-editing, re-rendering",
    scenith: "Re-prompt and regenerate in 60 sec",
  },
  {
    feature: "Language / localization",
    traditional: "Separate shoot per language version",
    scenith: "Translate prompt, regenerate instantly",
  },
  {
    feature: "Visual accuracy for abstract concepts",
    traditional: "Requires expensive 3D animators",
    scenith: "AI renders molecular, cosmic, abstract visuals from text",
  },
  {
    feature: "Batch content for full course",
    traditional: "Weeks of production for 20+ clips",
    scenith: "Generate 20 clips in an afternoon",
  },
];

export default function EduVideoPage() {
  return (
    <main className="edu-root">
      {/* ─── JSON-LD Schema ─── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Scenith AI Video Generator for Education",
            applicationCategory: "EducationalApplication",
            operatingSystem: "Web",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
              description: "50 free credits on signup — no credit card required",
            },
            description:
              "AI video generator designed for educators, teachers, and e-learning creators. Convert text prompts into cinematic educational videos using Kling 2.6, Veo 3.1, Wan 2.5, and Grok Imagine.",
            url: "https://scenith.in/tools/ai-video-generator-for-education",
            provider: {
              "@type": "Organization",
              name: "Scenith",
              url: "https://scenith.in",
            },
            featureList: [
              "Text-to-video generation for education",
              "Image-to-video from lesson slides",
              "Kling 2.6 Pro, Veo 3.1, Wan 2.5, Grok Imagine models",
              "16:9, 9:16, 1:1 aspect ratios",
              "MP4 download, full commercial rights",
              "No camera or editing software required",
            ],
          }),
        }}
      />

      {/* ─── HERO ─── */}
      <section className="edu-hero">
        <div className="edu-hero-bg" aria-hidden="true">
          <div className="edu-hero-orb edu-hero-orb--1" />
          <div className="edu-hero-orb edu-hero-orb--2" />
          <div className="edu-hero-orb edu-hero-orb--3" />
          <div className="edu-hero-grid" />
        </div>
        <div className="edu-container">
          <div className="edu-eyebrow">
            <span className="edu-badge">🎓 Built for Educators</span>
            <span className="edu-badge edu-badge--new">✨ 2026 Edition</span>
          </div>
          <h1 className="edu-h1">
            AI Video Generator
            <br />
            <span className="edu-h1-accent">for Education</span>
          </h1>
          <p className="edu-hero-sub">
            Transform any lesson plan, script, or concept into a stunning cinematic video —
            in under 2 minutes. Powered by Kling 2.6 Pro, Veo 3.1, Wan 2.5, and Grok Imagine.
            No camera. No editing. No production team.
          </p>

          {/* Stats bar */}
          <div className="edu-stats-row">
            <div className="edu-stat">
              <span className="edu-stat-num">6</span>
              <span className="edu-stat-label">AI Video Models</span>
            </div>
            <div className="edu-stat-div" />
            <div className="edu-stat">
              <span className="edu-stat-num">30s</span>
              <span className="edu-stat-label">Avg generation time</span>
            </div>
            <div className="edu-stat-div" />
            <div className="edu-stat">
              <span className="edu-stat-num">1080p</span>
              <span className="edu-stat-label">Max resolution</span>
            </div>
            <div className="edu-stat-div" />
            <div className="edu-stat">
              <span className="edu-stat-num">FREE</span>
              <span className="edu-stat-label">to start</span>
            </div>
          </div>

          {/* CTA */}
          <div className="edu-hero-cta">
            <a href={CTA_URL} className="edu-cta-primary" rel="noopener">
              <span className="edu-cta-icon">🎬</span>
              Generate Your First Lesson Video Free
              <span className="edu-cta-arrow">→</span>
            </a>
            <p className="edu-cta-note">50 free credits · No credit card · Ready in 60 seconds</p>
          </div>

          {/* Model logos */}
          <div className="edu-model-strip">
            <span className="edu-model-strip-label">Powered by</span>
            {MODELS.map((m) => (
              <div key={m.name} className="edu-model-pill">
                <img src={m.logo} alt={m.name} className="edu-model-pill-logo" />
                <span>{m.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROBLEM / HOOK ─── */}
      <section className="edu-section edu-section--dark">
        <div className="edu-container">
          <div className="edu-problem-grid">
            <div className="edu-problem-left">
              <h2 className="edu-h2">
                The way we teach
                <br />
                is changing — fast.
              </h2>
              <p className="edu-body-lg">
                In 2026, students don't just want to be <em>told</em> something. They want to
                <strong> see it</strong>. The shift toward video-based learning is no longer a
                trend — it's a fundamental change in how knowledge is consumed, retained, and
                shared. And yet, the tools to create educational video have always been expensive,
                slow, and inaccessible to most educators.
              </p>
              <p className="edu-body-lg">
                Until now. AI video generation has crossed a threshold in 2025–2026 where the
                output quality is genuinely cinematic. Models like Kling 2.6 Pro and Google's
                Veo 3.1 can render scenes that would have required an entire production studio
                just two years ago — and they do it from a single sentence.
              </p>
            </div>
            <div className="edu-problem-stats">
              <div className="edu-bigstat">
                <span className="edu-bigstat-num">94%</span>
                <span className="edu-bigstat-text">
                  of students say video helps them understand complex topics better than text alone
                  <cite> — MIT OpenCourseWare Study, 2024</cite>
                </span>
              </div>
              <div className="edu-bigstat">
                <span className="edu-bigstat-num">6×</span>
                <span className="edu-bigstat-text">
                  more likely to complete a course when video content is part of the curriculum
                  <cite> — Coursera Learner Report, 2025</cite>
                </span>
              </div>
              <div className="edu-bigstat">
                <span className="edu-bigstat-num">$4,200</span>
                <span className="edu-bigstat-text">
                  average cost to produce a single 10-minute professional educational video
                  <cite> — eLearning Industry Benchmark, 2025</cite>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── USE CASES ─── */}
      <section className="edu-section">
        <div className="edu-container">
          <div className="edu-section-header">
            <span className="edu-section-eyebrow">Use Cases</span>
            <h2 className="edu-h2">
              From Kindergarten to
              <br />
              <span className="edu-accent">Corporate Training</span>
            </h2>
            <p className="edu-section-sub">
              AI video for education isn't one-size-fits-all. Here's how educators across every
              level and discipline are using Scenith to transform the way they teach.
            </p>
          </div>
          <div className="edu-usecase-grid">
            {USE_CASES.map((uc) => (
              <article key={uc.title} className="edu-usecase-card">
                <div className="edu-usecase-icon">{uc.icon}</div>
                <h3 className="edu-usecase-title">{uc.title}</h3>
                <p className="edu-usecase-body">{uc.body}</p>
                <div className="edu-usecase-stat">
                  <span className="edu-usecase-stat-num">{uc.stat}</span>
                  <span className="edu-usecase-stat-sub">{uc.statSub}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="edu-section edu-section--tinted">
        <div className="edu-container">
          <div className="edu-section-header">
            <span className="edu-section-eyebrow">How It Works</span>
            <h2 className="edu-h2">
              From Lesson Plan to Lesson Video
              <br />
              <span className="edu-accent">in 4 Simple Steps</span>
            </h2>
          </div>
          <div className="edu-steps">
            {HOW_STEPS.map((step, i) => (
              <div key={step.num} className="edu-step">
                <div className="edu-step-num">{step.num}</div>
                <div className="edu-step-content">
                  <h3 className="edu-step-title">{step.title}</h3>
                  <p className="edu-step-desc">{step.desc}</p>
                </div>
                {i < HOW_STEPS.length - 1 && (
                  <div className="edu-step-connector" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>
          <div className="edu-cta-center">
            <a href={CTA_URL} className="edu-cta-primary" rel="noopener">
              🎬 Start Generating Lesson Videos →
            </a>
          </div>
        </div>
      </section>

      {/* ─── AI MODELS DEEP DIVE ─── */}
      <section className="edu-section">
        <div className="edu-container">
          <div className="edu-section-header">
            <span className="edu-section-eyebrow">AI Models</span>
            <h2 className="edu-h2">
              Which Model Should You
              <br />
              <span className="edu-accent">Use for Your Content?</span>
            </h2>
            <p className="edu-section-sub">
              Not all AI video models are created equal. Each has unique strengths that make it
              better suited for specific types of educational content. Here's your complete guide.
            </p>
          </div>
          <div className="edu-models-grid">
            {MODELS.map((m) => (
              <div
                key={m.name}
                className="edu-model-card"
                style={{ "--model-color": m.color } as React.CSSProperties}
              >
                <div className="edu-model-card-header">
                  <img src={m.logo} alt={m.name} className="edu-model-card-logo" />
                  <div>
                    <div className="edu-model-card-name">{m.name}</div>
                    <div className="edu-model-card-tag">{m.tag}</div>
                  </div>
                </div>
                <p className="edu-model-card-desc">{m.desc}</p>
              </div>
            ))}
          </div>

          {/* Extended model comparison prose */}
          <div className="edu-model-prose">
            <div className="edu-model-prose-block">
              <h3>🎬 Kling 2.6 Pro — The Filmmaker's Choice for Education</h3>
              <p>
                Kling 2.6 Pro produces some of the most cinematic, visually coherent video output
                available from any AI model in 2026. For educators producing course trailers,
                chapter intros, or high-stakes visual demonstrations, this is the gold standard.
                The model handles complex motion well — swooping camera movements, detailed
                particle systems, realistic fluid dynamics — making it exceptional for science
                education (showing weather patterns, geological formations, or chemical reactions)
                and for history (generating period-accurate environments and dramatic moments).
                Kling 2.6 Pro supports audio generation on 10-second clips, allowing you to
                produce voiceover-ready content with background atmosphere included.
              </p>
            </div>
            <div className="edu-model-prose-block">
              <h3>🌐 Veo 3.1 — Google's Educational Powerhouse</h3>
              <p>
                Google's Veo 3.1 is built on the same research foundation that powers YouTube's
                understanding of video — meaning it has an exceptional grasp of visual logic,
                continuity, and realism. For educators creating content in the sciences, geography,
                or documentary-style storytelling, Veo 3.1 produces some of the most visually
                accurate representations of real-world phenomena. Its Veo 3.1 Fast variant is
                ideal for rapid iteration — when you want to try multiple prompt angles for the
                same concept before committing to a final version. The full Veo 3.1 model, while
                more expensive in credits, delivers broadcast-quality output that can stand
                alongside professionally produced educational content.
              </p>
            </div>
            <div className="edu-model-prose-block">
              <h3>⚡ Wan 2.5 — The Bulk Content Creator's Best Friend</h3>
              <p>
                If you're building an entire course and need 15–20 video clips to cover every
                lesson, Wan 2.5 is your most cost-effective path. While it doesn't match the
                cinematic output of Kling or Veo at the highest quality tier, it produces
                consistently solid visual content at a fraction of the credit cost — and at
                resolutions up to 1080p. Many educators use a two-model strategy: generate
                drafts with Wan 2.5 to validate that the visual direction is correct, then
                regenerate the hero clips with Kling 2.6 Pro for final delivery. This workflow
                can cut costs by over 60% while maintaining quality where it matters most.
              </p>
            </div>
            <div className="edu-model-prose-block">
              <h3>🎵 Grok Imagine — The Only Model with Built-in AI Audio</h3>
              <p>
                For educators who want a truly immersive learning experience — where music,
                ambient sound, and atmospheric audio are part of the video — Grok Imagine is
                in a class of its own. It is currently the only commercially available AI video
                model that generates audio natively as part of the video output. This makes it
                exceptional for language education (where hearing authentic environmental sounds
                is part of the learning), for emotional or narrative-driven content (where a
                subtle musical bed dramatically increases engagement), and for course trailers
                where production value is everything. Grok Imagine also supports image-to-video,
                so you can upload an existing illustration or diagram and have it animated with
                natural-sounding audio automatically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROMPT EXAMPLES ─── */}
      <section className="edu-section edu-section--dark">
        <div className="edu-container">
          <div className="edu-section-header">
            <span className="edu-section-eyebrow">Prompt Examples</span>
            <h2 className="edu-h2">
              8 Ready-to-Use Prompts
              <br />
              <span className="edu-accent">Across Every Subject</span>
            </h2>
            <p className="edu-section-sub">
              Copy these prompts directly into Scenith's video generator and hit Generate.
              Each is crafted to produce cinematic, classroom-ready educational content.
            </p>
          </div>
          <div className="edu-prompts-grid">
            {PROMPTS.map((p) => (
              <div key={p.subject} className="edu-prompt-card">
                <div className="edu-prompt-subject">{p.subject}</div>
                <p className="edu-prompt-text">"{p.prompt}"</p>
                <a href={`${CTA_URL}&prefill_prompt=${encodeURIComponent(p.prompt)}`} className="edu-prompt-try" rel="noopener">
                  Try this prompt →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COMPARISON TABLE ─── */}
      <section className="edu-section">
        <div className="edu-container">
          <div className="edu-section-header">
            <span className="edu-section-eyebrow">Comparison</span>
            <h2 className="edu-h2">
              Traditional Video Production
              <br />
              <span className="edu-accent">vs. AI Video Generation</span>
            </h2>
          </div>
          <div className="edu-table-wrap">
            <table className="edu-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th className="edu-table-them">Traditional Production</th>
                  <th className="edu-table-us">Scenith AI Video</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row) => (
                  <tr key={row.feature}>
                    <td className="edu-table-feature">{row.feature}</td>
                    <td className="edu-table-them-cell">
                      <span className="edu-table-x">✗</span> {row.traditional}
                    </td>
                    <td className="edu-table-us-cell">
                      <span className="edu-table-check">✓</span> {row.scenith}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── DEEP CONTENT: WHY VIDEO IN EDUCATION ─── */}
      <section className="edu-section edu-section--tinted">
        <div className="edu-container edu-prose-container">
          <div className="edu-section-header">
            <span className="edu-section-eyebrow">The Research</span>
            <h2 className="edu-h2">
              Why Video is the Most Powerful
              <br />
              <span className="edu-accent">Educational Medium Available</span>
            </h2>
          </div>
          <div className="edu-prose">
            <p>
              The evidence for video-based learning is overwhelming and has been growing steadily
              since the early days of classroom television. But what's changed dramatically in
              2024–2026 is the cost and accessibility of producing high-quality educational video.
              For the first time in history, a single educator — working alone, without a
              production budget — can generate dozens of professional-quality video clips in a
              single afternoon. That's the revolution.
            </p>

            <h3>The Science of Visual Learning</h3>
            <p>
              Cognitive science has established for decades that humans process visual information
              approximately 60,000 times faster than text. This isn't a marketing claim — it's
              rooted in how our brains are wired. The human visual cortex occupies roughly 30% of
              the brain's processing capacity. When you watch a video of, say, tectonic plates
              colliding to form a mountain range, your brain processes the motion, depth,
              cause-and-effect relationship, and spatial orientation simultaneously. Reading a
              paragraph about the same process requires your brain to reconstruct that spatial
              model from scratch using working memory — a significantly more cognitively demanding
              task that results in less retention.
            </p>
            <p>
              Edgar Dale's "Cone of Experience," first proposed in 1946 and updated multiple
              times since, consistently shows that learners retain approximately 20% of what they
              read, 30% of what they see (still images), but around 50% of what they see and hear
              simultaneously — which is what a good educational video provides. Add interactivity
              and that retention climbs further.
            </p>

            <h3>The Engagement Crisis in Modern Education</h3>
            <p>
              Educators face an unprecedented engagement challenge in 2026. Students have grown up
              with YouTube, TikTok, Instagram Reels, and streaming platforms that deliver
              polished, high-production-value content on demand. Walking into a classroom — or
              loading an LMS — and presenting a 40-slide PowerPoint is an increasingly uphill
              battle for attention.
            </p>
            <p>
              This isn't about pandering to short attention spans. It's about understanding the
              visual language that modern learners have internalized. A 10-second cinematic
              animation of a neuron firing and forming a synaptic connection will communicate the
              same concept as three paragraphs of text — and it will be retained significantly
              longer, associated with stronger emotional valence, and shared more readily by
              students to their peers.
            </p>
            <p>
              The good news: AI video generation completely levels this playing field. A high
              school biology teacher in rural Maharashtra can now produce the same quality of
              visual content as an Ivy League university's instructional design team — for about
              $0.50 per clip.
            </p>

            <h3>AI Video and the Future of Personalized Learning</h3>
            <p>
              One of the most exciting emerging applications of AI video in education is
              personalization at scale. Traditional video production creates one version of a
              lesson — a fixed artifact. AI video generation allows educators to create multiple
              visual framings of the same concept for different learning profiles.
            </p>
            <p>
              Consider a lesson on photosynthesis. A visual learner might benefit most from a
              macro animation of chloroplasts in action. A narrative learner might connect better
              with a cinematic scene of a single tree going through a day — sunlight, carbon
              dioxide, oxygen, growth. A student who struggles with English as a second language
              might need a purely visual representation without any on-screen text at all.
              With AI video generation, an educator can produce all three versions in under
              10 minutes — something that previously would have required weeks and thousands
              of dollars.
            </p>

            <h3>The Rise of "Micro-Video" in E-Learning</h3>
            <p>
              Research from the MIT Media Lab found that the optimal length for educational
              videos embedded in online courses is between 6 and 9 minutes — with engagement
              dropping significantly beyond that threshold. But in 2025–2026, the shift toward
              even shorter micro-video formats (under 60 seconds) has accelerated dramatically,
              driven by the success of short-form video platforms.
            </p>
            <p>
              This actually plays perfectly to the strengths of AI video generation. A 5-second
              or 10-second AI-generated clip is not meant to replace a full lecture — it's a
              visual anchor that makes a single key concept immediately tangible. Use it at the
              beginning of a lecture to set context, mid-lecture as a visual confirmation of an
              abstract idea, or at the end as a memorable summary image. These micro-videos
              function as cognitive hooks — visual moments that the rest of the lesson hangs on.
            </p>

            <h3>AI Video for Assessment and Feedback</h3>
            <p>
              Beyond content delivery, forward-thinking educators are beginning to use AI video
              generation as an assessment tool. Students are asked to write a detailed, accurate
              prompt that would generate a correct visual representation of a concept — and the
              quality of their prompt is itself evaluated. This "prompt engineering as assessment"
              approach tests deep understanding: a student who truly understands mitosis can write
              a precise, scientifically accurate description of what a video of it should look
              like. A student who has only surface-level knowledge cannot.
            </p>
            <p>
              This is a genuinely novel pedagogical technique made possible entirely by the
              existence of AI video generation — and it's gaining traction in advanced STEM and
              medical education programs globally.
            </p>

            <h3>Accessibility and Global Equity in Education</h3>
            <p>
              Perhaps the most profound long-term impact of AI video for education is what it
              means for global educational equity. For the first time, a teacher in a
              resource-constrained school — without access to science labs, without professional
              video equipment, without a large instructional design budget — can produce the same
              quality of visual content as a well-funded private institution.
            </p>
            <p>
              AI video generation democratizes educational production in a way that previous
              technologies (cheap cameras, screen recording software, slide presentations) never
              fully managed to. The barrier was never the recording — it was the production
              quality. AI video eliminates that barrier entirely.
            </p>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="edu-section">
        <div className="edu-container">
          <div className="edu-section-header">
            <span className="edu-section-eyebrow">FAQ</span>
            <h2 className="edu-h2">
              Everything Educators Ask
              <br />
              <span className="edu-accent">Before Getting Started</span>
            </h2>
          </div>
          <div className="edu-faq-grid">
            {FAQS.map((faq) => (
              <details key={faq.q} className="edu-faq-item">
                <summary className="edu-faq-q">{faq.q}</summary>
                <p className="edu-faq-a">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="edu-section edu-section--cta">
        <div className="edu-container">
          <div className="edu-final-cta">
            <div className="edu-final-cta-bg" aria-hidden="true">
              <div className="edu-final-orb edu-final-orb--1" />
              <div className="edu-final-orb edu-final-orb--2" />
            </div>
            <div className="edu-final-cta-content">
              <h2 className="edu-final-h2">
                Your next lesson video
                <br />
                is 60 seconds away.
              </h2>
              <p className="edu-final-sub">
                Join thousands of educators who've already switched to AI video. Start with
                50 free credits — no credit card, no commitment. Generate your first lesson
                video right now and see the difference yourself.
              </p>
              <a href={CTA_URL} className="edu-cta-primary edu-cta-primary--lg" rel="noopener">
                <span>🎬</span>
                Generate Your First Lesson Video Free
                <span className="edu-cta-arrow">→</span>
              </a>
              <div className="edu-final-trust">
                <span>✅ 50 free credits on signup</span>
                <span>✅ No credit card required</span>
                <span>✅ Full commercial rights</span>
                <span>✅ MP4 download included</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SCHEMA: FAQ ─── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQS.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a },
            })),
          }),
        }}
      />
    </main>
  );
}