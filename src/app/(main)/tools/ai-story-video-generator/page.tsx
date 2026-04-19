import type { Metadata } from "next";
import Link from "next/link";
import "./ai-story-video-generator.css";

/* ─────────────────────────────────────────────────────────
   SEO Metadata
───────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "AI Story Video Generator — Create Cinematic Storytelling Videos Free | Scenith",
  description:
    "Generate AI story videos from text prompts in seconds. Choose your genre — thriller, romance, fantasy, sci-fi — and let Kling, Veo 3, Wan 2.5 and more bring your narrative to life. No editing skills needed. Free to start.",
  keywords: [
    "ai story video generator",
    "ai story video maker",
    "text to story video ai",
    "create story video with ai",
    "ai cinematic video generator",
    "ai narrative video maker",
    "generate story video from text",
    "ai video storytelling tool",
    "ai short film generator",
    "ai storybook video creator",
    "ai video from text prompt",
    "story video ai free",
    "ai video generator 2026",
    "kling ai video generator",
    "veo 3 story video",
    "wan 2.5 video generator",
    "ai film generator online",
    "scenith ai video",
  ],
  openGraph: {
    title: "AI Story Video Generator — Turn Any Story Into Cinematic Video | Scenith",
    description:
      "Type your story. Choose a genre. Watch AI transform it into a cinematic video in under 2 minutes. Powered by Kling 2.6, Veo 3.1, Wan 2.5 & Grok Imagine.",
    url: "https://scenith.in/tools/ai-story-video-generator",
    siteName: "Scenith",
    type: "website",
    images: [
      {
        url: "https://scenith.in/og/ai-story-video-generator.jpg",
        width: 1200,
        height: 630,
        alt: "AI Story Video Generator by Scenith",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Story Video Generator — Turn Any Story Into Cinematic Video | Scenith",
    description:
      "Type your story. Choose a genre. Watch AI transform it into a cinematic video in under 2 minutes. Free to start.",
    images: ["https://scenith.in/og/ai-story-video-generator.jpg"],
  },
  alternates: {
    canonical: "https://scenith.in/tools/ai-story-video-generator",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

/* ─────────────────────────────────────────────────────────
   JSON-LD Structured Data
───────────────────────────────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://scenith.in/tools/ai-story-video-generator",
      "url": "https://scenith.in/tools/ai-story-video-generator",
      "name": "AI Story Video Generator — Turn Any Story Into Cinematic Video",
      "description":
        "Generate AI-powered story videos from any text prompt. Supports thriller, romance, fantasy, sci-fi, horror, documentary, and more genres. Powered by state-of-the-art video AI models.",
      "isPartOf": { "@id": "https://scenith.in" },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://scenith.in" },
          { "@type": "ListItem", "position": 2, "name": "Tools", "item": "https://scenith.in/tools" },
          { "@type": "ListItem", "position": 3, "name": "AI Story Video Generator", "item": "https://scenith.in/tools/ai-story-video-generator" },
        ],
      },
    },
    {
      "@type": "SoftwareApplication",
      "name": "Scenith AI Story Video Generator",
      "applicationCategory": "MultimediaApplication",
      "operatingSystem": "Web",
      "url": "https://scenith.in/create-ai-content?tab=video&utm_source=story-video-tool&utm_medium=tool-page&utm_campaign=ai-story-video-generator",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "description": "Free to start — 50 credits on sign-up, no credit card required",
      },
      "featureList": [
        "Text to video generation",
        "Image to video generation",
        "Multiple video AI models: Kling 2.6 Pro, Veo 3.1, Wan 2.5, Grok Imagine",
        "Multiple aspect ratios: 16:9, 9:16, 1:1",
        "Up to 1080p resolution",
        "5s and 10s clip duration",
        "AI audio generation",
        "MP4 download",
        "Commercial use rights",
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is an AI story video generator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An AI story video generator is a tool that converts written text prompts or story descriptions into short video clips using artificial intelligence. You describe a scene, character, or narrative — and the AI renders it as a cinematic video with motion, lighting, and visual storytelling automatically.",
          },
        },
        {
          "@type": "Question",
          "name": "Which AI models are best for story video generation in 2026?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The top AI video models for story generation in 2026 are Kling 2.6 Pro (best for cinematic narrative), Veo 3.1 by Google (best for photorealism and motion quality), Wan 2.5 (best balance of speed and quality), and Grok Imagine by xAI (best for videos with integrated AI audio). Scenith gives you access to all four on a single platform.",
          },
        },
        {
          "@type": "Question",
          "name": "How do I write a good story video prompt?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A strong story video prompt includes: a clear subject (who or what), setting (time and place), action or motion, mood/tone, and a visual style reference. Example: 'A lone astronaut floating through a derelict space station corridor, emergency red lights flickering, slow zoom out revealing the vastness of space through a cracked viewport, cinematic wide angle, tense atmosphere.'",
          },
        },
        {
          "@type": "Question",
          "name": "Is AI story video generation free?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Scenith offers 50 free credits on sign-up with no credit card required. Video generation is unlocked with any paid plan starting from $1 (Spark plan). Paid plans include 50–300+ credits monthly, giving you access to all video models including Kling 2.6 Pro, Veo 3.1, Wan 2.5, and Grok Imagine.",
          },
        },
        {
          "@type": "Question",
          "name": "What genres can I create story videos for?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Scenith's AI video generator supports virtually any story genre including thriller, horror, romance, fantasy, science fiction, documentary, adventure, mythology, historical drama, comedy, action, mystery, dystopian, slice-of-life, and more. The AI models respond well to genre-specific language and visual cues in your prompts.",
          },
        },
      ],
    },
  ],
};

/* ─────────────────────────────────────────────────────────
   CTA URL (with UTM)
───────────────────────────────────────────────────────── */
const CTA_URL =
  "https://scenith.in/create-ai-content?tab=video&utm_source=story-video-tool&utm_medium=tool-page&utm_campaign=ai-story-video-generator";

/* ─────────────────────────────────────────────────────────
   Data
───────────────────────────────────────────────────────── */
const GENRES = [
  { emoji: "🔪", title: "Psychological Thriller", desc: "Dark corridors, unreliable narrators, tension that never breaks." },
  { emoji: "🧙‍♂️", title: "Epic Fantasy", desc: "Ancient kingdoms, dragons, magic systems, sweeping landscapes." },
  { emoji: "🚀", title: "Science Fiction", desc: "Distant galaxies, rogue AI, generational spaceships, first contact." },
  { emoji: "👻", title: "Horror & Atmospheric", desc: "Dread-soaked visuals, isolation, shadows with intent." },
  { emoji: "💔", title: "Romance & Drama", desc: "Emotional depth, intimate moments, golden-hour cinematography." },
  { emoji: "🌍", title: "Documentary Style", desc: "Narrated journeys, real-world texture, observational visuals." },
  { emoji: "⚔️", title: "Historical Drama", desc: "Accurate period detail, war, politics, empire-building stories." },
  { emoji: "🔮", title: "Mythology & Legend", desc: "Gods, prophecy, creation myths, ancient world reimagined." },
  { emoji: "🌆", title: "Urban Dystopia", desc: "Neon rain, surveillance states, underground resistance." },
  { emoji: "🧬", title: "Biopunk / Body Horror", desc: "Mutation, experimentation, the body as battleground." },
  { emoji: "🏔️", title: "Adventure & Survival", desc: "Extreme environments, impossible odds, the will to live." },
  { emoji: "🎭", title: "Slice of Life", desc: "Quiet moments, human connection, beauty in the everyday." },
];

const PROMPT_EXAMPLES = [
  {
    genre: "🔪 Thriller",
    text: "A detective discovers her reflection doesn't mimic her movements. She slowly raises her left hand — the reflection raises its right. Close-up on her eyes: pure terror. Fluorescent light flickers. Cold blue palette.",
  },
  {
    genre: "🧙‍♂️ Fantasy",
    text: "A blind cartographer traces a map that shows places that don't exist yet. Mountains rise and oceans form under her fingertips as she draws. Gold ink dissolves into living landscape. Aerial pullback reveals the entire continent she's conjured.",
  },
  {
    genre: "🚀 Sci-Fi",
    text: "The last human colony on Europa gets a transmission from Earth — after 80 years of silence. A child plays in the ice caves, unaware. Through the habitat window, Jupiter fills the entire sky. Haunting cello score. Slow zoom to the comms terminal.",
  },
  {
    genre: "💔 Romance",
    text: "Two strangers meet at the same corner of a library every Tuesday for three years. They've never spoken. Today, one of them picks up the same book as the other. Their hands touch on the spine. Everything slows. Warm amber light.",
  },
  {
    genre: "👻 Horror",
    text: "An archivist finds footage from a town that was never built. Buildings. Streets. People who don't exist in any record. One face appears in every frame. It's hers. She wasn't born yet when the footage was made.",
  },
  {
    genre: "🌍 Documentary",
    text: "A 96-year-old watchmaker in Kyoto repairs the same pocket watch every year. He says it belonged to a soldier who never came back. Close-up on trembling hands. Gears turning. He winds it one last time and sets it aside.",
  },
];

const TECHNIQUES = [
  {
    icon: "🎬",
    title: "The Hook Frame — First 2 Seconds Are Everything",
    body: (
      <>
        AI video models render your opening scene exactly as described. <strong>Front-load visual drama</strong> — a character mid-action, an extreme close-up on a detail, a world revealed. Avoid slow pans or empty establishing shots as openers. Write: <strong>&ldquo;Close-up — cracked earth, a single drop of blood falling in slow motion&rdquo;</strong> not <strong>&ldquo;A wide shot of the landscape.&rdquo;</strong>
      </>
    ),
  },
  {
    icon: "🎭",
    title: "Character Physicality Over Dialogue",
    body: (
      <>
        AI video models excel at body language, micro-expressions, and movement — not spoken dialogue. Build your story through <strong>physical storytelling</strong>: a clenched jaw, a hand reaching for something just out of frame, a person turning to walk away mid-sentence. Let the motion carry the emotion.
      </>
    ),
  },
  {
    icon: "🌈",
    title: "Colour Grade as Emotional Language",
    body: (
      <>
        Include your colour palette in the prompt. <strong>Cold blue-green</strong> signals dread. <strong>Warm amber</strong> signals nostalgia or safety. <strong>Desaturated grey</strong> signals grief or emptiness. <strong>High-contrast neon</strong> signals urban tension. Models like Kling 2.6 and Veo 3.1 apply sophisticated colour science when you explicitly name your grade.
      </>
    ),
  },
  {
    icon: "📐",
    title: "Camera Language Unlocks Cinematic Depth",
    body: (
      <>
        Use real cinematography terms. <strong>&ldquo;Dutch angle&rdquo;</strong> creates unease. <strong>&ldquo;Rack focus&rdquo;</strong> shifts emotional weight. <strong>&ldquo;Whip pan&rdquo;</strong> creates urgency. <strong>&ldquo;God&apos;s eye overhead&rdquo;</strong> creates omniscience. <strong>&ldquo;Extreme close-up — pupil dilation&rdquo;</strong> creates intimacy. The more precise your camera direction, the more the AI behaves like an actual director.
      </>
    ),
  },
  {
    icon: "⏱️",
    title: "The Ellipsis — What You Don&apos;t Show",
    body: (
      <>
        The most powerful story moments happen in the <strong>gap between two shots</strong>. Build a prompt sequence where your 5-second or 10-second clip implies something that happened before or after the frame. A woman standing over an empty chair. A door open to an empty room. A letter being burned. <strong>Mystery is more compelling than explanation.</strong>
      </>
    ),
  },
  {
    icon: "🔊",
    title: "Grok Imagine: Narrative + AI Audio in One Shot",
    body: (
      <>
        If your story video needs <strong>integrated sound design</strong> — not just background music, but environmental audio, dramatic sound effects, or ambient atmosphere — use Grok Imagine. It&apos;s the only model that generates AI audio natively alongside the video. Describe sonic atmosphere in your prompt: <strong>&ldquo;...distant thunder, wet pavement underfoot, the low hum of a failing power grid.&rdquo;</strong>
      </>
    ),
  },
];

const PLATFORM_SPECS = [
  {
    name: "YouTube Shorts",
    badge: "Viral",
    specs: ["9:16 aspect", "Up to 10s", "720p min"],
    tip: "Hook in the first 0.5s. Use 9:16 vertical. Shorts with strong visual narrative loops perform 3× longer in watch-time than talking-head cuts.",
  },
  {
    name: "Instagram Reels",
    badge: "Discovery",
    specs: ["9:16 aspect", "Up to 10s", "1080p recommended"],
    tip: "Cinematic, high-contrast visuals perform best. Aesthetically rich story clips consistently outperform text-overlay content in Reels reach.",
  },
  {
    name: "TikTok",
    badge: "Volume",
    specs: ["9:16 aspect", "5–10s clips", "Trendy audio ready"],
    tip: "Use Grok Imagine for built-in audio. TikTok&apos;s algorithm rewards early sound engagement. A clip with native-feeling audio beats silent video 4× in push rate.",
  },
  {
    name: "LinkedIn",
    badge: "B2B",
    specs: ["16:9 or 1:1", "5–10s clips", "Subtitled recommended"],
    tip: "Documentary-style and corporate narrative story clips drive the most professional engagement. Use 1:1 for feed placement.",
  },
  {
    name: "Twitter / X",
    badge: "Virality",
    specs: ["16:9 preferred", "Up to 10s", "Autoplay silent"],
    tip: "Design for silent autoplay. Visually striking 16:9 clips with a strong hook frame get embedded in threads and go viral without audio dependency.",
  },
  {
    name: "YouTube Long-form",
    badge: "Retention",
    specs: ["16:9 landscape", "Chapters", "HD required"],
    tip: "Use multiple 5–10s AI story clips to construct trailers, intros, and chapter transitions for longer video essays or series.",
  },
];

const MODELS = [
  { name: "Kling 2.6 Pro", badge: "Best Narrative Quality" },
  { name: "Kling 2.5 Turbo", badge: "Fast + Affordable" },
  { name: "Veo 3.1 (Google)", badge: "Best Photorealism" },
  { name: "Veo 3.1 Fast (Google)", badge: "Balanced Speed" },
  { name: "Wan 2.5", badge: "Versatile Workhorse" },
  { name: "Grok Imagine (xAI)", badge: "Native AI Audio" },
];

const FAQ = [
  {
    q: "What exactly is an AI story video generator and how does it work?",
    a: (
      <>
        An AI story video generator takes a written description — called a prompt — and uses deep learning video models to synthesize a short video clip that matches it. You describe a scene, character, environment, or narrative beat, and models like <strong>Kling 2.6 Pro</strong>, <strong>Veo 3.1</strong>, and <strong>Wan 2.5</strong> analyze your language to generate motion, lighting, depth, and visual composition automatically. The entire generation takes 30–120 seconds depending on model and settings.
      </>
    ),
  },
  {
    q: "Do I need any video editing or filmmaking experience?",
    a: (
      <>
        Not at all. Scenith&apos;s AI video generator is designed for <strong>zero-experience users</strong> and seasoned creators alike. If you can write a sentence describing a scene, you can generate a story video. There&apos;s no timeline to edit, no keyframes to set, no codec to choose. You write your prompt, select your model and settings, and click Generate.
      </>
    ),
  },
  {
    q: "Which AI model should I use for story videos?",
    a: (
      <>
        It depends on your goal. <strong>Kling 2.6 Pro</strong> is the best choice for cinematic, narrative-driven clips with strong motion coherence. <strong>Veo 3.1</strong> by Google produces the most photorealistic output — ideal for documentary-style or drama. <strong>Wan 2.5</strong> is the most cost-efficient at 480p–1080p. <strong>Grok Imagine</strong> is unique in generating <strong>AI audio alongside the video</strong> — perfect if your story needs an atmospheric soundscape built in.
      </>
    ),
  },
  {
    q: "How long can my AI story video be?",
    a: (
      <>
        You can generate clips of <strong>5 seconds or 10 seconds</strong> depending on the model. Veo 3.1 supports 4-second and 8-second clips. While this sounds short, a well-crafted 10-second story clip can be more impactful than a 2-minute talking-head video — especially on platforms like TikTok, Instagram Reels, and YouTube Shorts where AI-generated narrative visuals frequently go viral.
      </>
    ),
  },
  {
    q: "Can I use my own image as the starting frame of a story video?",
    a: (
      <>
        Yes — this is called <strong>image-to-video generation</strong>, and Scenith supports it. Upload any image (a character illustration, a scene you generated with our <Link href="/create-ai-content?tab=image&utm_source=story-video-tool" style={{ color: '#ffc13c' }}>AI image generator</Link>, a photograph), write a prompt describing the motion you want, and the AI will animate it. This is powerful for creating story videos that start from a specific visual moment.
      </>
    ),
  },
  {
    q: "Are the generated story videos free to use commercially?",
    a: (
      <>
        Yes. All content generated on Scenith — regardless of model or plan — comes with <strong>full commercial rights</strong>. You can publish to YouTube, use in paid ads, embed in client projects, or monetize however you like. No attribution required, no watermarks, no licensing fees.
      </>
    ),
  },
  {
    q: "What resolution and aspect ratios are supported?",
    a: (
      <>
        <strong>Wan 2.5</strong> supports 480p, 720p, and 1080p. <strong>Kling 2.6 Pro</strong> and <strong>Veo 3.1</strong> output at up to 1080p. Aspect ratios include <strong>16:9</strong> (YouTube/cinema), <strong>9:16</strong> (TikTok/Reels), and <strong>1:1</strong> (Instagram feed/LinkedIn). You can change these freely per generation.
      </>
    ),
  },
  {
    q: "How is Scenith different from Runway, Sora, or Pika?",
    a: (
      <>
        Scenith is an <strong>access platform</strong> — not a single proprietary model. Instead of one AI video model, you get access to <strong>six state-of-the-art models</strong> (Kling, Veo, Wan, Grok) under one affordable subscription. You also get voice and image generation on the same platform, so your entire story content workflow — narration, visual, video — lives in one place at a fraction of the cost of running separate tools.
      </>
    ),
  },
  {
    q: "Can I chain multiple AI story clips together into a full short film?",
    a: (
      <>
        Absolutely — and this is how many creators build full AI short films in 2026. Generate scene-by-scene clips using Scenith, then combine them in any free video editor like DaVinci Resolve, CapCut, or Adobe Premiere. Many creators use our <Link href="/tools/add-subtitles-to-videos?utm_source=story-video-tool" style={{ color: '#ffc13c' }}>subtitle tool</Link> and our <Link href="/create-ai-content?tab=voice&utm_source=story-video-tool" style={{ color: '#ffc13c' }}>AI voice generator</Link> to add narration, then assemble everything externally for a complete production.
      </>
    ),
  },
  {
    q: "How many credits does a story video cost?",
    a: (
      <>
        Credit cost depends on model, duration, and resolution. <strong>Wan 2.5 at 480p, 5s = 46 credits</strong>. <strong>Kling 2.6 Pro at 5s = 64 credits</strong>. <strong>Veo 3.1 at 5s (with audio) = 370 credits</strong>. <strong>Grok Imagine at 5s = 47 credits</strong>. All plans show live credit cost before you generate so there are no surprises. Starter plan ($9/mo) includes 300 credits — enough for 4–6 Kling story clips per month.
      </>
    ),
  },
];

/* ─────────────────────────────────────────────────────────
   Page Component
───────────────────────────────────────────────────────── */
export default function AIStoryVideoGeneratorPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="svp-page">

        {/* ── Film Strip ── */}
        <div className="svp-filmstrip" aria-hidden="true">
          <span className="svp-filmstrip-text">
            AI STORY VIDEO GENERATOR &nbsp;·&nbsp; KLING 2.6 PRO &nbsp;·&nbsp; VEO 3.1 &nbsp;·&nbsp; WAN 2.5 &nbsp;·&nbsp;
            GROK IMAGINE &nbsp;·&nbsp; SCENITH &nbsp;·&nbsp; TEXT TO VIDEO &nbsp;·&nbsp; IMAGE TO VIDEO &nbsp;·&nbsp;
            AI CINEMATIC &nbsp;·&nbsp; STORY VIDEO AI &nbsp;·&nbsp; AI STORY VIDEO GENERATOR &nbsp;·&nbsp; KLING 2.6 PRO &nbsp;·&nbsp;
            VEO 3.1 &nbsp;·&nbsp; WAN 2.5 &nbsp;·&nbsp; GROK IMAGINE &nbsp;·&nbsp; SCENITH &nbsp;·&nbsp; TEXT TO VIDEO &nbsp;·&nbsp;
            IMAGE TO VIDEO &nbsp;·&nbsp; AI CINEMATIC &nbsp;·&nbsp; STORY VIDEO AI &nbsp;·&nbsp;
          </span>
        </div>

        {/* ── Hero ── */}
        <section className="svp-hero">
          <div className="svp-container">

            <div className="svp-hero-eyebrow" aria-label="Category">
              <span>🎬</span>
              AI Video Tool · Free to Start
            </div>

            <h1 className="svp-hero-title">
              AI Story Video
              <em>Generator</em>
            </h1>

            <p className="svp-hero-sub">
              Type any story — thriller, fantasy, romance, sci-fi, horror, or documentary.
              Watch Kling, Veo 3.1, Wan 2.5 and Grok Imagine turn it into a cinematic video clip
              in under two minutes. No editing skills. No camera. No crew.
            </p>

            <div className="svp-cta-wrap">
              <a
                href={CTA_URL}
                className="svp-cta-btn"
                aria-label="Start generating your AI story video for free on Scenith"
              >
                <span className="svp-cta-btn-icon" aria-hidden="true">▶</span>
                Generate Your Story Video Free
              </a>
              <div className="svp-cta-sub">
                <span>⚡ 50 free credits on sign-up</span>
                <span>🎬 No credit card required</span>
                <span>📥 MP4 download included</span>
              </div>
            </div>

          </div>
        </section>

        {/* ── What Is Section ── */}
        <section className="svp-what" aria-labelledby="what-heading">
          <div className="svp-container">
            <div className="svp-section-label">What Is This Tool</div>
            <h2 className="svp-h2" id="what-heading">
              The AI that makes your <em>story cinematic</em>
            </h2>
            <div className="svp-what-grid">
              <div className="svp-what-text">
                <p>
                  For decades, turning a written story into a video required a camera operator,
                  a director, actors, locations, editing software, and weeks of work. In 2026,
                  that entire pipeline has been replaced by a single text prompt.
                </p>
                <p>
                  Scenith&apos;s AI Story Video Generator connects you to the world&apos;s
                  most advanced video generation models — <strong>Kling 2.6 Pro</strong>,
                  <strong> Veo 3.1</strong>, <strong>Wan 2.5</strong>, and <strong>Grok Imagine</strong>
                  — through a single interface. You describe a scene. The AI handles cinematography,
                  motion, lighting, depth, colour grading, and atmosphere.
                </p>
                <p>
                  Every clip is available in up to <strong>1080p resolution</strong>, in
                  16:9, 9:16, or 1:1 aspect ratios. You download an MP4 file with full
                  commercial rights. No watermarks. No subscriptions to six different tools.
                  Everything under one plan, from $1.
                </p>
              </div>
              <div className="svp-stat-stack">
                {[
                  { icon: "🎬", num: "6 Models", label: "State-of-the-art video AIs: Kling 2.6 Pro, Veo 3.1, Wan 2.5, Grok Imagine + more" },
                  { icon: "⚡", num: "30–120s", label: "Average generation time per video clip. No overnight rendering queues." },
                  { icon: "📐", num: "3 Ratios", label: "16:9, 9:16, and 1:1 — optimised for YouTube, TikTok, Reels, and LinkedIn" },
                  { icon: "🌐", num: "Full Rights", label: "Commercial licence included on every clip. Publish, monetise, sell." },
                ].map((s) => (
                  <div className="svp-stat-card" key={s.num}>
                    <div className="svp-stat-card-icon" aria-hidden="true">{s.icon}</div>
                    <div>
                      <div className="svp-stat-card-num">{s.num}</div>
                      <div className="svp-stat-card-label">{s.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Why Story Videos Section ── */}
        <section className="svp-why" aria-labelledby="why-heading">
          <div className="svp-container">
            <div className="svp-section-label">Why Story Videos in 2026</div>
            <h2 className="svp-h2" id="why-heading">
              The most powerful content format <em>alive right now</em>
            </h2>
            <p className="svp-lead" style={{ marginBottom: 0 }}>
              Short-form narrative video is experiencing the fastest growth of any
              content format in social media history. Here&apos;s why creators who
              understand this are building massive audiences with AI story clips.
            </p>
            <div className="svp-why-cards">
              {[
                {
                  icon: "📈",
                  title: "Story-format video drives 4× more watch time than static content",
                  body: "Platforms algorithmically reward completion rate. A 10-second story video with a compelling narrative arc drives viewers to watch again and again — artificially inflating completion metrics and triggering mass distribution.",
                },
                {
                  icon: "🧠",
                  title: "Narrative primes emotional memory — viewers remember stories, not facts",
                  body: "Neuroscience consistently shows that information wrapped in narrative is 22× more memorable than raw data. AI story videos that trigger an emotional response build brand memory that ad-style content simply cannot replicate.",
                },
                {
                  icon: "🌍",
                  title: "Cross-language appeal — visuals transcend the language barrier",
                  body: "A cinematic story video can be understood without subtitles across dozens of countries. AI story content performs globally by default, giving creators an international reach that text or voice-only content cannot match.",
                },
                {
                  icon: "🔁",
                  title: "Loop-worthy content feeds algorithmic amplification",
                  body: "The best AI story videos end on a visual beat that compels the viewer to re-watch from the beginning. TikTok's and Reels' algorithms directly measure loop count — a looping story clip compounds its own distribution.",
                },
                {
                  icon: "💸",
                  title: "Production cost collapse is a competitive moat",
                  body: "Competitors with budgets for traditional video production are being outpaced by solo creators using AI. The window to establish authority in your niche with AI story content — before everyone else does — is narrowing fast.",
                },
                {
                  icon: "🤖",
                  title: "AI story video quality crossed the uncanny valley in 2025–2026",
                  body: "Kling 2.6 Pro and Veo 3.1 produce output that is indistinguishable from traditional video production in many contexts. The technical barrier is gone. The only remaining barrier is creative skill — which is a learnable advantage.",
                },
              ].map((c) => (
                <div className="svp-why-card" key={c.title}>
                  <span className="svp-why-card-icon" aria-hidden="true">{c.icon}</span>
                  <h3 className="svp-why-card-title">{c.title}</h3>
                  <p className="svp-why-card-body">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── How It Works ── */}
        <section className="svp-how" aria-labelledby="how-heading">
          <div className="svp-container">
            <div className="svp-section-label">How It Works</div>
            <h2 className="svp-h2" id="how-heading">
              From blank page to <em>cinematic video</em> in four steps
            </h2>
            <nav className="svp-steps" aria-label="Step-by-step guide">
              {[
                {
                  n: "01",
                  title: "Sign up and claim your free credits",
                  body: "Create a free Scenith account — no credit card needed. You immediately receive 50 credits, which are valid across voice, image, and video generation. For video, this gives you free access to the image tool; video generation unlocks from $1 on any paid plan.",
                  tip: "⚡ Takes less than 60 seconds",
                },
                {
                  n: "02",
                  title: "Write your story prompt",
                  body: "Navigate to the AI Content Creator and select the Video tab. Describe your story scene: character, setting, action, mood, camera angle, and colour palette. The more vivid your language, the more cinematic the result. Use the built-in prompt suggestions if you need a starting point — there are 13 curated story prompts ready to go.",
                  tip: "💡 Use real cinematography language",
                },
                {
                  n: "03",
                  title: "Choose your model, aspect ratio, and duration",
                  body: "Select from Kling 2.6 Pro, Veo 3.1, Wan 2.5, Kling 2.5 Turbo, or Grok Imagine. Set your aspect ratio (16:9 for YouTube, 9:16 for Reels/TikTok, 1:1 for feed). Choose 5 or 10 seconds. Enable AI audio if using Grok Imagine. The live credit cost updates before you confirm so there are never any surprises.",
                  tip: "🎬 Kling 2.6 Pro for max narrative quality",
                },
                {
                  n: "04",
                  title: "Generate, download, and publish",
                  body: "Hit Generate. Your video renders in 30–120 seconds. Watch it directly in the browser — no additional software. Download the MP4 file. Publish to YouTube Shorts, TikTok, Instagram Reels, LinkedIn, Twitter/X, or use it as part of a longer production. Commercial rights are included automatically.",
                  tip: "📥 Full MP4 download, no watermark",
                },
              ].map((step) => (
                <article className="svp-step" key={step.n}>
                  <div className="svp-step-num" aria-label={`Step ${step.n}`}>{step.n}</div>
                  <div>
                    <h3 className="svp-step-content-title">{step.title}</h3>
                    <p className="svp-step-content-body">{step.body}</p>
                    <span className="svp-step-content-tip">{step.tip}</span>
                  </div>
                </article>
              ))}
            </nav>
          </div>
        </section>

        {/* ── Genre Grid ── */}
        <section className="svp-genres" aria-labelledby="genres-heading">
          <div className="svp-container">
            <div className="svp-section-label">Supported Story Genres</div>
            <h2 className="svp-h2" id="genres-heading">
              Every genre. <em>Every story.</em>
            </h2>
            <p className="svp-lead" style={{ marginBottom: 0 }}>
              The AI models don&apos;t have a favourite genre — they respond to vivid,
              specific language regardless of what world you&apos;re building.
            </p>
            <div className="svp-genre-grid">
              {GENRES.map((g) => (
                <div className="svp-genre-card" key={g.title}>
                  <span className="svp-genre-card-emoji" aria-hidden="true">{g.emoji}</span>
                  <h3 className="svp-genre-card-title">{g.title}</h3>
                  <p className="svp-genre-card-desc">{g.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Prompt Examples ── */}
        <section className="svp-prompts" aria-labelledby="prompts-heading">
          <div className="svp-container">
            <div className="svp-section-label">Prompt Examples</div>
            <h2 className="svp-h2" id="prompts-heading">
              Real prompts that generate <em>extraordinary results</em>
            </h2>
            <p className="svp-lead" style={{ marginBottom: 40 }}>
              These prompts are designed to trigger the full cinematic capability of Kling 2.6
              and Veo 3.1. Copy them directly or use them as a structural template for your own story.
            </p>
            <div className="svp-prompts-grid">
              {PROMPT_EXAMPLES.map((p) => (
                <figure className="svp-prompt-card" key={p.genre} style={{ margin: 0 }}>
                  <div className="svp-prompt-card-genre">{p.genre}</div>
                  <figcaption className="svp-prompt-card-text">&ldquo;{p.text}&rdquo;</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ── Mid-page CTA ── */}
        <section className="svp-mid-cta" aria-label="Call to action">
          <div className="svp-container">
            <div className="svp-mid-cta-inner">
              <h2 className="svp-mid-cta-title">
                Your story is <span>already there.</span>
              </h2>
              <p className="svp-mid-cta-sub">
                The only thing missing is the video. Let the AI build the visual while you focus
                on the narrative. Start generating in under 60 seconds.
              </p>
              <a href={CTA_URL} className="svp-cta-btn" aria-label="Open the AI story video generator">
                <span className="svp-cta-btn-icon" aria-hidden="true">▶</span>
                Open the Story Video Generator
              </a>
              <p className="svp-credits-note" style={{ marginTop: 16 }}>
                <span>50 free credits</span> · Video unlocks from $1 · No card required
              </p>
            </div>
          </div>
        </section>

        {/* ── AI Models ── */}
        <section className="svp-models" aria-labelledby="models-heading">
          <div className="svp-container">
            <div className="svp-section-label">Powered By</div>
            <h2 className="svp-h2" id="models-heading">
              Six world-class AI video models, <em>one platform</em>
            </h2>
            <p className="svp-lead">
              Instead of paying for six different AI video tools, Scenith gives you access to every major
              model under a single affordable plan. Switch between models per scene — use Wan 2.5 for
              volume, Kling 2.6 Pro for quality, and Grok Imagine when you need audio built in.
            </p>
            <div className="svp-model-pills">
              {MODELS.map((m) => (
                <div className="svp-model-pill" key={m.name}>
                  <span className="svp-model-pill-dot" aria-hidden="true" />
                  <span>
                    <strong style={{ color: "var(--svp-text)" }}>{m.name}</strong>
                    {" "}·{" "}
                    <span style={{ color: "var(--svp-gold)", fontSize: 11 }}>{m.badge}</span>
                  </span>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 40, padding: "28px 28px", background: "var(--svp-surface)", border: "1px solid var(--svp-border)", borderRadius: "var(--svp-radius)" }}>
              <h3 style={{ fontFamily: "var(--svp-font-serif)", fontSize: 20, marginBottom: 16, color: "var(--svp-text)" }}>
                Model Selection Guide — Which AI to Use for Your Story
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
                {[
                  { model: "Kling 2.6 Pro", use: "Your first choice for any narrative story video. Produces the most coherent character motion, best scene composition, and highest emotional resonance. Use for drama, thriller, romance, and fantasy." },
                  { model: "Veo 3.1 by Google", use: "The most photorealistic output available today. Best for documentary-style story videos, historical drama, and any clip that needs to look indistinguishable from real footage." },
                  { model: "Veo 3.1 Fast", use: "Same Google quality pipeline as Veo 3.1 but at roughly half the credit cost and speed. Ideal when you need to test multiple story scene variations quickly before committing to full quality." },
                  { model: "Wan 2.5", use: "The highest volume-per-credit model. Run it at 480p for draft exploration or 1080p for deliverables. Best all-rounder for creators who need consistent output at scale." },
                  { model: "Grok Imagine (xAI)", use: "The only model that generates native AI audio alongside video. Use whenever your story requires an atmospheric soundscape — ambient noise, environmental audio, tonal music — built directly into the clip." },
                  { model: "Kling 2.5 Turbo", use: "Fast and affordable. A solid middle ground between Wan 2.5 and Kling 2.6 Pro. Great for testing scene compositions before upgrading to 2.6 Pro for final output." },
                ].map((item) => (
                  <div key={item.model} style={{ padding: "14px 16px", background: "var(--svp-surface-2)", borderRadius: "var(--svp-radius-sm)", border: "1px solid var(--svp-border)" }}>
                    <div style={{ fontFamily: "var(--svp-font-display)", fontSize: 14, letterSpacing: "0.06em", color: "var(--svp-gold)", marginBottom: 8 }}>{item.model}</div>
                    <p style={{ fontSize: 13, color: "var(--svp-text-2)", lineHeight: 1.65 }}>{item.use}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Storytelling Techniques ── */}
        <section className="svp-techniques" aria-labelledby="techniques-heading">
          <div className="svp-container">
            <div className="svp-section-label">Master Class</div>
            <h2 className="svp-h2" id="techniques-heading">
              6 techniques that separate <em>good clips from viral ones</em>
            </h2>
            <p className="svp-lead" style={{ marginBottom: 40 }}>
              Prompt engineering for story video is a craft. These techniques — drawn from
              real cinematography principles — consistently produce the most compelling AI
              story video output across all models.
            </p>
            <div className="svp-technique-list">
              {TECHNIQUES.map((t) => (
                <article className="svp-technique-item" key={t.title}>
                  <div className="svp-technique-icon" aria-hidden="true">{t.icon}</div>
                  <div>
                    <h3 className="svp-technique-title">{t.title}</h3>
                    <p className="svp-technique-body">{t.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Platform Guide ── */}
        <section className="svp-platforms" aria-labelledby="platforms-heading">
          <div className="svp-container">
            <div className="svp-section-label">Platform Optimisation Guide</div>
            <h2 className="svp-h2" id="platforms-heading">
              Where to publish your AI story videos <em>for maximum reach</em>
            </h2>
            <p className="svp-lead" style={{ marginBottom: 40 }}>
              Each platform has distinct algorithmic preferences. Here&apos;s exactly how to
              configure and publish your AI story video clips for maximum distribution on each.
            </p>
            <div className="svp-platform-grid">
              {PLATFORM_SPECS.map((p) => (
                <article className="svp-platform-card" key={p.name}>
                  <div className="svp-platform-name">
                    {p.name}
                    <span className="svp-platform-badge">{p.badge}</span>
                  </div>
                  <div className="svp-platform-specs">
                    {p.specs.map((s) => (
                      <span className="svp-platform-spec" key={s}>{s}</span>
                    ))}
                  </div>
                  <p className="svp-platform-tip">{p.tip}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Comparison Table ── */}
        <section className="svp-compare" aria-labelledby="compare-heading">
          <div className="svp-container">
            <div className="svp-section-label">Tool Comparison</div>
            <h2 className="svp-h2" id="compare-heading">
              Scenith vs. dedicated <em>AI video tools</em>
            </h2>
            <p className="svp-lead" style={{ marginBottom: 40 }}>
              In 2026, every major AI video model has a dedicated tool — but most creators
              can&apos;t afford six different subscriptions. Here&apos;s how Scenith stacks up.
            </p>
            <div style={{ overflowX: "auto" }}>
              <table className="svp-compare-table" role="table" aria-label="Comparison between Scenith and dedicated AI video tools">
                <thead>
                  <tr>
                    <th scope="col">Feature</th>
                    <th scope="col">Runway / Sora / Pika</th>
                    <th scope="col" className="good">Scenith</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Number of AI video models", "1 (their own)", "6 (Kling, Veo, Wan, Grok…)"],
                    ["Voice generation included", "❌ Separate tool", "✅ Same platform"],
                    ["Image generation included", "❌ Separate tool", "✅ Same platform"],
                    ["Starting price", "$12–$40/mo per tool", "$1–$9/mo all-in-one"],
                    ["AI audio generation", "Add-on or unavailable", "✅ Grok Imagine built-in"],
                    ["Image-to-video", "Varies by tool", "✅ All models supported"],
                    ["Commercial rights", "Varies / limited free tiers", "✅ All plans included"],
                    ["Free trial credits", "Limited / no video", "✅ 50 credits on sign-up"],
                    ["Aspect ratio options", "Limited by model", "✅ 16:9, 9:16, 1:1"],
                    ["Resolution options", "Model-dependent", "✅ 480p → 1080p"],
                  ].map(([feature, them, us]) => (
                    <tr key={feature}>
                      <td>{feature}</td>
                      <td className="bad">{them}</td>
                      <td className="good">{us}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── Who Is This For ── */}
        <section className="svp-audience" aria-labelledby="audience-heading">
          <div className="svp-container">
            <div className="svp-section-label">Who Uses This Tool</div>
            <h2 className="svp-h2" id="audience-heading">
              Built for every kind of <em>visual storyteller</em>
            </h2>
            <div className="svp-audience-grid">
              {[
                {
                  icon: "📱",
                  title: "Short-Form Content Creators",
                  body: "Faceless YouTube channel owners, TikTok creators, and Instagram Reels publishers who need a constant supply of high-quality story visual content without the time or budget for traditional production.",
                },
                {
                  icon: "✍️",
                  title: "Writers & Novelists",
                  body: "Authors who want to create cinematic book trailers, scene previews, character visualisations, and promotional story clips for their novels, screenplays, or short story collections.",
                },
                {
                  icon: "🎮",
                  title: "Game Developers & Narrative Designers",
                  body: "Indie studios and solo developers who need cinematic cutscene concepts, worldbuilding visualisations, character reveals, and lore-building story clips for their games — without hiring a production team.",
                },
                {
                  icon: "📣",
                  title: "Brand Storytellers & Marketers",
                  body: "Marketing teams who understand that their brand is a narrative, not a product. Use AI story videos for origin stories, values-driven campaigns, customer journey visualisations, and emotional brand moments.",
                },
                {
                  icon: "🎓",
                  title: "Educators & Course Creators",
                  body: "Teachers and e-learning professionals who need visually compelling story introductions, historical recreations, and narrative-driven explainers that go far beyond stock footage and screen recordings.",
                },
                {
                  icon: "🎥",
                  title: "Independent Filmmakers",
                  body: "Directors using AI story video to pre-visualise scenes, test camera angles, pitch visual concepts to producers and investors, or create scene-by-scene storyboards with actual generated motion — not static drawings.",
                },
              ].map((a) => (
                <article className="svp-audience-card" key={a.title}>
                  <div className="svp-audience-card-icon" aria-hidden="true">{a.icon}</div>
                  <div>
                    <h3 className="svp-audience-card-title">{a.title}</h3>
                    <p className="svp-audience-card-body">{a.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Deep Dive: Story Video Workflow ── */}
        <section style={{ padding: "clamp(50px, 8vw, 90px) 0", borderTop: "1px solid var(--svp-border)" }} aria-labelledby="workflow-heading">
          <div className="svp-container">
            <div className="svp-section-label">Complete Workflow</div>
            <h2 className="svp-h2" id="workflow-heading">
              How to build a full AI short film <em>from scratch</em>
            </h2>
            <p className="svp-lead" style={{ marginBottom: 40 }}>
              A single 10-second clip is a content asset. A sequence of 8–12 story clips is a short
              film. Here&apos;s the complete workflow that top AI creators use in 2026 to produce
              full-length AI narrative content on Scenith.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {[
                {
                  phase: "Phase 1: Story Architecture",
                  content: "Before touching the generator, write your story beats. A story beat is a single moment, emotion, or action that advances the narrative. For a 90-second short film, you need approximately 9–12 beats. Write each beat as a single sentence. These sentences become your video prompts. Example beats: 'The protagonist discovers the photograph.' → 'She recognises the face.' → 'She runs.' Structure your beats into a classic three-act pattern: setup (3 beats), confrontation (5–6 beats), resolution (2–3 beats). This structure works regardless of genre because it mirrors how human brains process narrative tension.",
                },
                {
                  phase: "Phase 2: Prompt Engineering",
                  content: "Expand each story beat into a full video prompt using this formula: [Subject + State] + [Setting + Time] + [Camera Language] + [Motion] + [Mood/Tone] + [Colour Palette]. Example: 'A woman in her late 30s, standing perfectly still, holding a polaroid photograph — her hands are trembling slightly. Interior, a dimly lit archive room, dust particles visible in a single beam of afternoon light. Extreme close-up, slowly racking focus from the photo to her expression. No motion from the subject, only the subtle shake of her hands and the rising dust. Tone: quiet dread. Colour: desaturated beige, single warm accent from the light beam.' That prompt will generate a significantly better clip than 'a woman looking at a photo.'",
                },
                {
                  phase: "Phase 3: Model Selection by Scene Type",
                  content: "Not every scene in your short film needs the same model. Use Wan 2.5 at 480p for rough concept testing — generate 3–4 variations of each scene for just 46 credits each, then select the best composition. Upgrade your hero scenes (the highest emotional beats) to Kling 2.6 Pro at 1080p for maximum quality. Use Veo 3.1 for exterior, naturalistic, or documentary-style scenes where photorealism matters most. Use Grok Imagine specifically for scenes where ambient sound atmosphere is central to the emotional impact.",
                },
                {
                  phase: "Phase 4: Image-to-Video Chaining",
                  content: "For visual continuity across scenes, use the image-to-video feature. Generate a key frame image of your character or setting using Scenith's AI Image Generator (GPT Image 1 or Imagen 4 — they produce the most consistent character appearance). Save that image. Use it as the reference frame for all subsequent video clips that feature the same character or environment. This dramatically improves visual coherence across your short film without requiring expensive fine-tuning or LoRA models.",
                },
                {
                  phase: "Phase 5: Narration & Assembly",
                  content: "Once your video clips are generated, record narration using Scenith's AI Voice Generator. With 40+ natural voices across 20+ languages, you can match your narrator's voice to your story genre — a low, gravelly male voice for noir thriller, a warm female voice for drama, a neutral documentary voice for investigative narratives. Download the MP3. Import all video clips and the narration audio into DaVinci Resolve (free) or CapCut. Arrange your story beats in sequence, sync narration to visual moments, and export at 1080p. Your AI short film is complete.",
                },
                {
                  phase: "Phase 6: Multi-Platform Distribution",
                  content: "Export three versions: 16:9 for YouTube and LinkedIn, 9:16 for TikTok and Reels, 1:1 for Instagram feed. Use the first 2 seconds of your most dramatic clip as the thumbnail moment — this is what drives click-through rate. Post the 9:16 version to TikTok first: TikTok's discovery algorithm is the most powerful launchpad for AI story content right now. Cross-post within 24 hours. Track completion rate (not just views) — a story video with 80%+ completion rate will be pushed aggressively by every major platform algorithm.",
                },
              ].map((phase) => (
                <div key={phase.phase} style={{ padding: "24px 26px", background: "var(--svp-surface)", border: "1px solid var(--svp-border)", borderRadius: "var(--svp-radius)" }}>
                  <h3 style={{ fontFamily: "var(--svp-font-display)", fontSize: 18, letterSpacing: "0.06em", color: "var(--svp-gold)", marginBottom: 12 }}>{phase.phase}</h3>
                  <p style={{ fontSize: 14.5, color: "var(--svp-text-2)", lineHeight: 1.8 }}>{phase.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="svp-faq" aria-labelledby="faq-heading">
          <div className="svp-container">
            <div className="svp-section-label">FAQs</div>
            <h2 className="svp-h2" id="faq-heading">
              Everything you need to know about <em>AI story video generation</em>
            </h2>
            <div className="svp-faq-list" itemScope itemType="https://schema.org/FAQPage">
              {FAQ.map((item) => (
                <details className="svp-faq-item" key={item.q} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <summary itemProp="name">{item.q}</summary>
                  <div className="svp-faq-body" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <div itemProp="text">{item.a}</div>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── Internal Linking Section ── */}
        <section style={{ padding: "clamp(40px, 6vw, 70px) 0", borderTop: "1px solid var(--svp-border)" }} aria-labelledby="related-heading">
          <div className="svp-container">
            <div className="svp-section-label">Build Your Complete Workflow</div>
            <h2 className="svp-h2" id="related-heading">
              Pair story video with <em>voice & image AI</em>
            </h2>
            <p className="svp-lead" style={{ marginBottom: 36 }}>
              The most powerful AI content creators combine video with narration and custom visuals.
              Every Scenith plan covers all three — here&apos;s how they work together.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 14 }}>
              {[
                {
                  href: "/create-ai-content?tab=voice&utm_source=story-video-tool&utm_medium=internal-link&utm_campaign=story-workflow",
                  icon: "🎙️",
                  title: "AI Voice Generator",
                  desc: "Add cinematic narration to your story video using 40+ natural voices. Google, OpenAI, and Azure TTS voices. Instant MP3 download.",
                  cta: "Generate Narration →",
                },
                {
                  href: "/create-ai-content?tab=image&utm_source=story-video-tool&utm_medium=internal-link&utm_campaign=story-workflow",
                  icon: "🖼️",
                  title: "AI Image Generator",
                  desc: "Generate key frame images for image-to-video chaining. GPT Image 1, Imagen 4, Grok Aurora, FLUX Pro — 7 models available.",
                  cta: "Generate Reference Images →",
                },
                {
                  href: "/create-ai-content?tab=video&utm_source=story-video-tool&utm_medium=internal-link&utm_campaign=story-workflow",
                  icon: "🎬",
                  title: "Full AI Content Creator",
                  desc: "Voice + Image + Video on one page. One credit balance. One plan. The complete AI content production tool.",
                  cta: "Open Full Creator →",
                },
              ].map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  style={{
                    display: "block",
                    padding: "22px 20px",
                    background: "var(--svp-surface)",
                    border: "1px solid var(--svp-border)",
                    borderRadius: "var(--svp-radius)",
                    textDecoration: "none",
                    transition: "all 0.2s",
                    color: "inherit",
                  }}
                >
                  <div style={{ fontSize: 26, marginBottom: 12 }}>{link.icon}</div>
                  <div style={{ fontFamily: "var(--svp-font-serif)", fontSize: 17, color: "var(--svp-text)", marginBottom: 8 }}>{link.title}</div>
                  <p style={{ fontSize: 13, color: "var(--svp-text-2)", lineHeight: 1.6, marginBottom: 14 }}>{link.desc}</p>
                  <span style={{ fontSize: 12, color: "var(--svp-gold)", fontWeight: 700 }}>{link.cta}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <section className="svp-footer-cta" aria-label="Final call to action">
          <div className="svp-container">
            <h2 className="svp-footer-cta-title">
              The story is yours.
              <em>The video is one click away.</em>
            </h2>
            <p className="svp-footer-cta-sub">
              50 free credits. No card required. Kling, Veo, Wan, and Grok Imagine waiting
              to render your vision into motion.
            </p>
            <a href={CTA_URL} className="svp-cta-btn" aria-label="Start generating your AI story video on Scenith">
              <span className="svp-cta-btn-icon" aria-hidden="true">▶</span>
              Start Generating — It&apos;s Free
            </a>
            <p className="svp-credits-note">
              <span>50 credits</span> on sign-up · Video from <span>$1</span> · Full commercial rights
            </p>
          </div>
        </section>

        {/* ── Footer Bar ── */}
        <footer className="svp-footer-bar" role="contentinfo">
          <span>© 2026 <a href="https://scenith.in">Scenith</a></span>
          <span>·</span>
          <a href="https://scenith.in/create-ai-content">AI Content Creator</a>
          <span>·</span>
          <a href="https://scenith.in/pricing">Pricing</a>
          <span>·</span>
          <a href="https://scenith.in/tools">More AI Tools</a>
          <span>·</span>
          <a href="https://scenith.in/privacy">Privacy</a>
        </footer>

      </div>
    </>
  );
}