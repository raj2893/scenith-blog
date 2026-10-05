// app/(main)/tools/how-to-make-long-ai-videos/page.tsx
// SEO guide: how to make long (1–10 min) AI videos — the scene-stacking method, honest free vs
// paid routes, real credit costs, a copyable 12-shot AI short film, and stitching in Scenith's editor.
import type { Metadata } from "next";
import Link from "next/link";
import "./styles.css";

const SLUG = "how-to-make-long-ai-videos";
const PAGE_URL = `https://scenith.in/tools/${SLUG}`;
const UTM = `utm_source=${SLUG}&utm_medium=cta&utm_campaign=seo`;
const STUDIO_URL = `/create-ai-content?tab=video&${UTM}`;
const PRICING_URL = `/pricing?src=${SLUG}`;
const studio = (tab: "video" | "image" | "voice", text: string) =>
  `/create-ai-content?tab=${tab}&text=${encodeURIComponent(text)}&${UTM}`;

const PUBLISHED = "2026-10-05";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "How to Make Long AI Videos for Free (1–10 Minutes): Step-by-Step Guide 2026 | Scenith",
  description:
    "AI video models only make 4–15 second clips. Here’s how creators turn them into 1–10 minute AI videos: the scene-stacking method, free vs paid routes, real costs, consistent characters, and a copyable 12-shot AI short film.",
  keywords: [
    "how to make long ai videos",
    "how to make long ai videos for free",
    "how to create ai video for free",
    "how to create ai videos for free",
    "long ai video generator",
    "how to make a 10 minute ai video",
    "how to make a 5 minute ai video",
    "ai video longer than 10 seconds",
    "how to extend ai video",
    "combine ai video clips",
    "ai short film tutorial",
    "how to make an ai movie",
    "consistent character ai video",
    "ai storyboard to video",
    "most realistic ai video",
    "free ai video maker no watermark",
  ],
  openGraph: {
    title: "How to Make Long AI Videos (1–10 Minutes) — The Scene-Stacking Method",
    description:
      "Why AI video tools stop at a few seconds, and the exact method to turn short clips into long, consistent AI videos — with real costs and a free route.",
    url: PAGE_URL,
    siteName: "Scenith",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Make Long AI Videos (1–10 Minutes)",
    description: "The scene-stacking method, honest free vs paid routes, and a copyable 12-shot AI short film.",
  },
  alternates: { canonical: PAGE_URL },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
  },
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const METHOD = [
  { n: "01", t: "Write the story first", b: "A long AI video is a story, not a prompt. Write the narration or script before generating anything — it decides how many shots you need and how long each one lasts." },
  { n: "02", t: "Break it into a shot list", b: "Split the script into shots of roughly 4–8 seconds. For each shot, note the framing (wide, medium, close-up), what moves, and which line of narration plays over it." },
  { n: "03", t: "Create a character & world sheet", b: "Write one fixed description of your character, location, lighting and camera style, and paste it into every prompt. This is the single biggest trick for consistency." },
  { n: "04", t: "Generate each shot", b: "Use AI video for shots where motion matters (pouring, walking, rain, crowds). Use AI images with a slow zoom for still, emotional moments — they look cinematic and cost far less." },
  { n: "05", t: "Record the voiceover", b: "Generate narration with an AI voice, matching the pace to your shot timings. Add music and ambient sound (rain, traffic, wind) underneath." },
  { n: "06", t: "Stitch, subtitle & export", b: "Place every shot on a timeline, add zoom keyframes to images, transitions between scenes and subtitles, then export one finished video." },
];

const COST_ROWS: [string, string, string, string, string][] = [
  ["30 seconds", "6", "60", "168", "276"],
  ["1 minute", "12", "120", "336", "552"],
  ["2 minutes", "24", "240", "672", "1,104"],
  ["5 minutes", "60", "600", "1,680", "2,760"],
  ["10 minutes", "120", "1,200", "3,360", "5,520"],
];

const MODELS: { m: string; len: string; audio: string; cost: string; good: string; href?: string }[] = [
  { m: "Veo 3.1", len: "4s, 8s · 20s & 30s via extend", audio: "Optional", cost: "from 186 cr (4s)", good: "Hero shots that need the highest polish and native sound", href: "/tools/veo-3-ai-video-generator" },
  { m: "Veo 3.1 Fast", len: "4s, 8s · 20s & 30s via extend", audio: "Optional", cost: "from 92 cr (4s)", good: "Longer continuous shots at a lower cost than Veo 3.1", href: "/tools/veo-3-ai-video-generator" },
  { m: "Kling 3.0 Pro", len: "3–15s", audio: "Optional", cost: "~105 cr (5s)", good: "Longer single takes with flexible length", href: "/tools/kling-ai-video-generator" },
  { m: "Kling 2.6 Pro", len: "5s, 10s", audio: "Optional", cost: "64 cr (5s, no audio)", good: "Character motion and everyday action", href: "/tools/kling-ai-video-generator" },
  { m: "Kling 2.5 Turbo", len: "5s, 10s", audio: "No", cost: "64 cr (5s)", good: "Fast drafts and B-roll", href: "/tools/kling-ai-video-generator" },
  { m: "Runway Gen-4.5", len: "5s, 10s", audio: "Optional", cost: "116 cr (5s, no audio)", good: "Stylised, cinematic looks" },
  { m: "Hailuo 02 Pro", len: "6s, 10s", audio: "No", cost: "90 cr (6s)", good: "Dynamic movement" },
  { m: "Luma Ray 3.1", len: "5s, 9s", audio: "720p included", cost: "~76 cr (5s, 720p)", good: "Smooth camera moves" },
  { m: "Wan 2.5", len: "5s, 10s", audio: "No", cost: "46 cr (5s, 480p)", good: "Budget B-roll and testing prompts", href: "/tools/wan-ai-video-generator" },
  { m: "Grok Imagine", len: "5s, 10s", audio: "Always on", cost: "47 cr (5s)", good: "Cheap clips that already have sound", href: "/tools/grok-ai-video-generator" },
];

const CHARACTER =
  "Raghu, a thin 65-year-old Indian man with a short white stubble beard, faded brown sweater and grey woollen cap";
const WORLD =
  "tiny roadside chai stall with a blue tarpaulin roof and a kerosene stove, empty Mumbai street at night, light rain, warm tungsten glow, cinematic 35mm film look, shallow depth of field";

const NARRATION =
  "Every night for forty years, Raghu opened his chai stall at the same corner. Rain or no rain. Customers or none. Tonight, the street is empty, and the city has forgotten him. He lights the stove anyway. A delivery boy stops, soaked and tired. Then a nurse coming off her shift. Then a stranger with nowhere to go. Nobody talks much. They just hold their cups a little longer. Raghu smiles. He never sold tea. He sold a reason to stop, for ten minutes, in a city that never does.";

type Shot = { n: number; frame: string; how: "video" | "image"; action: string; line: string };
const SHOTS: Shot[] = [
  { n: 1, frame: "Wide · establishing", how: "image", action: "the chai stall glowing alone on a rain-soaked corner, street empty, reflections on the wet road", line: "Every night for forty years, Raghu opened his chai stall at the same corner." },
  { n: 2, frame: "Medium", how: "image", action: "Raghu standing under the tarpaulin looking out at the empty street, rain dripping from the edge", line: "Rain or no rain. Customers or none." },
  { n: 3, frame: "Insert", how: "video", action: "steam rising from a dented aluminium kettle, raindrops falling behind it", line: "Tonight, the street is empty, and the city has forgotten him." },
  { n: 4, frame: "Close-up", how: "video", action: "Raghu’s wrinkled hands striking a match and lighting the kerosene stove, flame flickering to life", line: "He lights the stove anyway." },
  { n: 5, frame: "Wide", how: "video", action: "a soaked delivery boy on a bicycle slowing down and stopping at the stall", line: "A delivery boy stops, soaked and tired." },
  { n: 6, frame: "Medium", how: "image", action: "a tired nurse in blue scrubs with a black umbrella arriving at the stall", line: "Then a nurse coming off her shift." },
  { n: 7, frame: "Medium", how: "image", action: "a quiet stranger with a backpack sitting on a wooden bench beside the stall", line: "Then a stranger with nowhere to go." },
  { n: 8, frame: "Close-up · hero shot", how: "video", action: "Raghu pouring chai from a height into small glasses, a long stream of tea", line: "Nobody talks much." },
  { n: 9, frame: "Close-up", how: "video", action: "three pairs of hands holding small glasses of steaming chai", line: "They just hold their cups a little longer." },
  { n: 10, frame: "Close-up", how: "video", action: "Raghu’s face breaking into a gentle smile, eyes glistening in the warm light", line: "Raghu smiles. He never sold tea." },
  { n: 11, frame: "Wide", how: "image", action: "four people standing silently together under the tarpaulin while rain falls around them", line: "He sold a reason to stop, for ten minutes…" },
  { n: 12, frame: "Wide · closing", how: "image", action: "the small glowing stall seen from high above, tiny in the dark rainy city", line: "…in a city that never does." },
];

const shotPrompt = (s: Shot) =>
  s.n === 1 || s.n === 3 || s.n === 12
    ? `${s.frame} shot: ${s.action}. ${WORLD}.`
    : `${s.frame} shot: ${s.action}. ${CHARACTER} runs the stall. ${WORLD}.`;

const FAQS: { q: string; a: string }[] = [
  {
    q: "Why do AI video generators only make 5–10 second videos?",
    a: "Generating video is very expensive to compute, and models keep characters and physics consistent only over short spans. Most models produce clips of about 4–15 seconds; some, like Veo 3.1 on Scenith, can extend a clip to 20 or 30 seconds. Longer videos are made by stitching many clips together.",
  },
  {
    q: "How do I make a long AI video?",
    a: "Write the script, break it into a shot list of 4–8 second shots, generate each shot with AI video or AI images, add an AI voiceover and music, then stitch everything together on a timeline with transitions and subtitles. This guide calls it the scene-stacking method.",
  },
  {
    q: "Can I make long AI videos completely free?",
    a: "Partly. Every AI video tool has limits on free use, because each clip costs real computing power. On Scenith’s free Starter Forge plan you get 50 credits a month, 600 voice characters and the video editor with 720p watermarked export — enough to test the image-plus-voiceover workflow. AI video clips need credits from a paid plan, starting with the one-time Spark plan.",
  },
  {
    q: "How much does a 1-minute AI video cost?",
    a: "On Scenith, a 1-minute video built from 12 shots costs roughly 120 credits if every shot is an AI image with a slow zoom (using Imagen 4 Fast), about 336 credits if half the shots are AI video clips on Wan 2.5 at 480p, and about 552 credits if every shot is an AI video clip. Premium models such as Veo 3.1 cost more per clip. Budget 20–30% extra for retakes.",
  },
  {
    q: "How do I keep the same character across AI video clips?",
    a: "Paste the exact same character description into every prompt, keep lighting, time of day and camera style identical, and use image-to-video: create one anchor image of your character, then animate each shot from that image or variations of it. Avoid big changes in angle or outfit between shots.",
  },
  {
    q: "Which AI video model is the most realistic?",
    a: "It depends on the shot. Premium models such as Veo 3.1, Kling 3.0 Pro and Runway Gen-4.5 are good choices for hero shots where realism matters most, while Wan 2.5 or Kling 2.5 Turbo are cost-effective for B-roll. The best approach is to test the same prompt on two models with a short clip and keep the winner.",
  },
  {
    q: "Can I extend an AI video clip?",
    a: "Yes, on some models. In Scenith, Veo 3.1 and Veo 3.1 Fast can produce 20-second and 30-second clips using extend, and Kling 3.0 Pro can generate single clips of up to 15 seconds. For anything longer, stitch multiple clips together.",
  },
  {
    q: "How do I combine AI video clips into one video?",
    a: "Upload your clips, images and voiceover to a timeline editor. In Scenith’s editor you can place them on separate video, image, audio and text layers, add zoom keyframes, transitions and AI subtitles, then export the finished video.",
  },
  {
    q: "How many shots do I need for a 10-minute AI video?",
    a: "At an average of 5 seconds per shot, a 10-minute video needs about 120 shots. You can reduce that by holding still images longer with a slow zoom, reusing establishing shots, and using longer clips from models that support them.",
  },
  {
    q: "Can I use AI videos made on Scenith on YouTube?",
    a: "Yes. Under Scenith’s terms you retain ownership of the content you create. If your video shows realistic AI-generated people, places or events that viewers could mistake for real, YouTube asks you to tick its ‘altered or synthetic content’ disclosure when uploading.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function HowToMakeLongAIVideosPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${PAGE_URL}#article`,
        headline: "How to Make Long AI Videos (1–10 Minutes): The Scene-Stacking Method",
        description:
          "How to turn 4–15 second AI video clips into 1–10 minute videos: shot lists, consistent characters, free vs paid routes, real costs and stitching.",
        url: PAGE_URL,
        datePublished: PUBLISHED,
        dateModified: PUBLISHED,
        author: { "@type": "Organization", name: "Scenith", url: "https://scenith.in" },
        publisher: { "@type": "Organization", name: "Scenith", url: "https://scenith.in" },
        mainEntityOfPage: PAGE_URL,
      },
      {
        "@type": "HowTo",
        "@id": `${PAGE_URL}#howto`,
        name: "How to make a long AI video",
        totalTime: "PT2H",
        step: METHOD.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.t, text: s.b })),
      },
      {
        "@type": "FAQPage",
        "@id": `${PAGE_URL}#faq`,
        mainEntity: FAQS.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://scenith.in" },
          { "@type": "ListItem", position: 2, name: "Tools", item: "https://scenith.in/tools" },
          { "@type": "ListItem", position: 3, name: "How to Make Long AI Videos", item: PAGE_URL },
        ],
      },
    ],
  };

  return (
    <div className="lav-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav aria-label="Breadcrumb" className="lav-breadcrumb">
        <ol>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/tools">Tools</Link></li>
          <li aria-current="page">How to Make Long AI Videos</li>
        </ol>
      </nav>

      {/* ── HERO ── */}
      <header className="lav-hero">
        <div className="lav-hero__bar" aria-hidden="true" />
        <div className="lav-container">
          <span className="lav-eyebrow">🎬 Guide · Updated October 2026</span>
          <h1>
            How to Make <span className="lav-amber">Long AI Videos</span> (1–10 Minutes) — Even When Every
            AI Model Stops at 10 Seconds
          </h1>
          <p className="lav-lead">
            The method creators use to turn short AI clips into full stories: <strong>the scene-stacking
            method</strong>, an honest look at what’s free and what costs credits, real numbers for every
            video length, and a <strong>copyable 12-shot AI short film</strong> you can make today.
          </p>
          <div className="lav-cta-row">
            <a href="#film" className="lav-btn lav-btn--amber">Make the 60-second AI film →</a>
            <a href="#method" className="lav-btn lav-btn--ghost">Show me the method</a>
          </div>

          <div className="lav-reel" aria-label="A long AI video is many short clips">
            {[5, 8, 5, 4, 10, 6, 5, 8].map((s, i) => (
              <div key={i} className={`lav-reel__clip ${i % 3 === 1 ? "is-img" : ""}`} style={{ flexGrow: s }}>
                <span>{s}s</span>
              </div>
            ))}
          </div>
          <p className="lav-reel__cap">A long AI video = many short clips + images + one voiceover, stitched on a timeline.</p>
        </div>
        <div className="lav-hero__bar" aria-hidden="true" />
      </header>

      {/* ── TOC ── */}
      <nav className="lav-toc" aria-label="On this page">
        <div className="lav-container lav-toc__inner">
          <a href="#answer">⚡ Quick answer</a>
          <a href="#free">💸 Free or paid?</a>
          <a href="#method">🧩 The method</a>
          <a href="#cost">🧮 Cost by length</a>
          <a href="#film">🎞️ 12-shot film</a>
          <a href="#consistency">🧍 Consistent characters</a>
          <a href="#models">🤖 Which model</a>
          <a href="#stitch">✂️ Stitching</a>
          <a href="#faq">❓ FAQ</a>
        </div>
      </nav>

      {/* ── QUICK ANSWER ── */}
      <section id="answer" className="lav-section lav-section--tight">
        <div className="lav-container lav-narrow lav-prose">
          <div className="lav-answer">
            <strong>Quick answer:</strong> AI video models generate short clips — usually <b>4 to 15 seconds</b>,
            and up to <b>30 seconds</b> with extend on models like Veo 3.1. To make a long AI video, write a
            script, split it into a <b>shot list</b>, generate each shot with AI video or AI images, add an
            <b> AI voiceover</b>, then <b>stitch everything on a timeline</b> with transitions and subtitles.
          </div>
          <p>
            Search for “long AI video generator” and you’ll find plenty of tools promising a 10-minute video from
            one prompt. In practice those tools are doing the same thing behind the scenes: generating many short
            scenes and joining them. Once you understand that, you get full control over the story, the
            characters and the cost — and the result looks far more intentional.
          </p>
        </div>
      </section>

      {/* ── FREE vs PAID ── */}
      <section id="free" className="lav-section lav-section--soft">
        <div className="lav-container">
          <h2 className="lav-center">Can you make long AI videos for free? The honest answer</h2>
          <p className="lav-intro">
            Every second of AI video costs real computing power, so no tool offers unlimited free AI video. What
            you <em>can</em> do is pick the route that matches your budget.
          </p>
          <div className="lav-routes">
            <article className="lav-route">
              <span className="lav-route__tag">Free</span>
              <h3>Try the workflow</h3>
              <p className="lav-route__price">₹0 · Starter Forge</p>
              <ul>
                <li>50 credits / month — about 3 AI images on Stability Core</li>
                <li>600 voice characters / month</li>
                <li>Timeline editor, 720p export with watermark</li>
                <li>AI video clips not included</li>
              </ul>
              <p className="lav-route__best">Best for: testing the image + voiceover method on a short scene.</p>
            </article>
            <article className="lav-route lav-route--hl">
              <span className="lav-route__tag">Lowest cost</span>
              <h3>Your first AI clips</h3>
              <p className="lav-route__price">₹50 / $1 one-time · Spark</p>
              <ul>
                <li>50 credits + 3,000 voice characters</li>
                <li>All tools unlocked, 1080p, no watermark</li>
                <li>Enough for about one 5-second clip on Wan 2.5</li>
                <li>Starter Pack: 200 credits / month from ₹150 / $3</li>
              </ul>
              <p className="lav-route__best">Best for: a mostly-image video with one or two AI motion shots.</p>
            </article>
            <article className="lav-route">
              <span className="lav-route__tag">Creators</span>
              <h3>Regular long videos</h3>
              <p className="lav-route__price">From ₹799 / $9 per month · Creator Lite</p>
              <ul>
                <li>1,000 credits + 50,000 voice characters</li>
                <li>Every AI video model unlocked</li>
                <li>1080p, no watermark</li>
                <li>Creator Spark: 2,000 credits, 1440p export</li>
              </ul>
              <p className="lav-route__best">Best for: a few hybrid 1–2 minute videos every month.</p>
            </article>
          </div>
          <p className="lav-note">Plan contents as listed on Scenith’s pricing page in October 2026. Credit costs are shown in the studio before every generation.</p>
        </div>
      </section>

      {/* ── METHOD ── */}
      <section id="method" className="lav-section">
        <div className="lav-container">
          <h2 className="lav-center">The scene-stacking method: 6 steps to a long AI video</h2>
          <p className="lav-intro">The same workflow works for a 60-second short film and a 10-minute documentary.</p>
          <ol className="lav-method">
            {METHOD.map((s) => (
              <li key={s.n}>
                <span className="lav-method__n">{s.n}</span>
                <h3>{s.t}</h3>
                <p>{s.b}</p>
              </li>
            ))}
          </ol>
          <div className="lav-tip lav-mt">
            <b>The hybrid rule:</b> spend AI video credits only where something <em>moves</em>. A slow zoom on a
            well-composed AI image is indistinguishable from a “still” cinematic shot — and costs a fraction of a
            video clip.
          </div>
        </div>
      </section>

      {/* ── COST TABLE ── */}
      <section id="cost" className="lav-section lav-section--dark">
        <div className="lav-container">
          <h2 className="lav-center">How many shots — and credits — does each video length need?</h2>
          <p className="lav-intro lav-intro--light">
            Assuming about 5 seconds per shot, using Scenith’s lowest-cost settings: Imagen 4 Fast for images
            (10 credits) and Wan 2.5 at 480p for video (46 credits per 5-second clip).
          </p>
          <div className="lav-table-wrap">
            <table className="lav-table">
              <thead>
                <tr>
                  <th>Video length</th>
                  <th>Shots</th>
                  <th>All images + zoom</th>
                  <th>Hybrid (½ video)</th>
                  <th>All AI video</th>
                </tr>
              </thead>
              <tbody>
                {COST_ROWS.map((r) => (
                  <tr key={r[0]}>
                    <td>{r[0]}</td><td>{r[1]}</td><td>{r[2]} cr</td><td className="is-hl">{r[3]} cr</td><td>{r[4]} cr</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ul className="lav-cost-notes">
            <li>Add <b>20–30%</b> for retakes — you won’t keep every generation.</li>
            <li>Premium models cost more per shot (for example Veo 3.1 from 186 credits for 4 seconds).</li>
            <li>Holding an image for 8–10 seconds with a slow zoom cuts the shot count — and the cost — of long videos.</li>
            <li>Voiceover is separate: a 1-minute narration is roughly 750–900 characters.</li>
          </ul>
        </div>
      </section>

      {/* ── 12-SHOT FILM ── */}
      <section id="film" className="lav-section">
        <div className="lav-container">
          <h2 className="lav-center">Make this 60-second AI short film: “Ten Minutes”</h2>
          <p className="lav-intro">
            A complete, original short film you can generate shot by shot. Six shots use AI video where
            something moves; six use AI images with a slow zoom. Tap any shot to open it in the studio with the
            prompt already filled in.
          </p>

          <div className="lav-sheet">
            <div className="lav-sheet__item">
              <span>🧍 Character sheet — paste into every prompt</span>
              <p className="lav-copy">{CHARACTER}</p>
            </div>
            <div className="lav-sheet__item">
              <span>🌧️ World &amp; camera sheet</span>
              <p className="lav-copy">{WORLD}</p>
            </div>
          </div>

          <ol className="lav-shots">
            {SHOTS.map((s) => (
              <li key={s.n} className={`lav-shot lav-shot--${s.how}`}>
                <div className="lav-shot__head">
                  <span className="lav-shot__n">Shot {s.n}</span>
                  <span className="lav-shot__frame">{s.frame}</span>
                  <span className={`lav-shot__how lav-shot__how--${s.how}`}>{s.how === "video" ? "AI video · 5s" : "Image + zoom · 5s"}</span>
                </div>
                <p className="lav-shot__action">{s.action}</p>
                <p className="lav-shot__line">🎙️ “{s.line}”</p>
                <Link href={studio(s.how, shotPrompt(s))} className="lav-shot__go">
                  {s.how === "video" ? "🎬 Generate this shot →" : "🖼️ Generate this frame →"}
                </Link>
              </li>
            ))}
          </ol>

          <div className="lav-narration">
            <div className="lav-narration__head">
              <h3>🎙️ Narration script</h3>
              <span>{NARRATION.length} characters · fits inside the free plan’s 600 voice characters</span>
            </div>
            <p className="lav-copy">{NARRATION}</p>
            <div className="lav-narration__actions">
              <Link href={studio("voice", NARRATION)} className="lav-btn lav-btn--amber lav-btn--sm">Generate the narration →</Link>
              <span>Try a calm, warm male voice at a slightly slow pace.</span>
            </div>
          </div>

          <div className="lav-budget">
            <div><b>6</b><span>AI video clips<br />≈ 276 cr on Wan 2.5</span></div>
            <div><b>6</b><span>AI images<br />≈ 60 cr on Imagen 4 Fast</span></div>
            <div><b>{NARRATION.length}</b><span>voice characters<br />for the narration</span></div>
            <div><b>≈ 336</b><span>credits total<br />+ retakes</span></div>
          </div>
        </div>
      </section>

      {/* ── CONSISTENCY ── */}
      <section id="consistency" className="lav-section lav-section--soft">
        <div className="lav-container lav-narrow lav-prose">
          <h2>How to keep characters consistent across AI video clips</h2>
          <p>
            The number one reason long AI videos look “AI” is a character whose face, clothes or age changes
            between shots. These habits fix most of it:
          </p>
          <div className="lav-rules">
            {[
              ["Use one locked description", "Copy the exact same character sentence into every prompt — same age, hair, clothes, colours. Don’t paraphrase."],
              ["Animate from an anchor image", "Generate one strong image of your character, then use image-to-video so each clip starts from that look."],
              ["Fix the world, not just the face", "Repeat the same location, time of day, weather, lighting and lens words in every prompt."],
              ["Keep camera moves simple", "Slow push-ins, gentle pans and static shots hold identity better than fast, spinning cameras."],
              ["Cut on close-ups and hands", "Inserts of hands, objects and details hide small differences and add a professional rhythm."],
              ["Generate two, keep one", "Make a second take of important shots and keep whichever matches the previous shot best."],
            ].map(([t, b], i) => (
              <div key={t} className="lav-rule">
                <span>{i + 1}</span>
                <div><strong>{t}</strong><p>{b}</p></div>
              </div>
            ))}
          </div>
          <p className="lav-mt">
            Need the anchor image first? Use the <Link href="/tools/ai-image-generation">AI image generator</Link>,
            then animate it with <Link href="/tools/image-to-video-ai-generator">image to video</Link>.
          </p>
        </div>
      </section>

      {/* ── MODELS ── */}
      <section id="models" className="lav-section">
        <div className="lav-container">
          <h2 className="lav-center">Which AI video model for which shot?</h2>
          <p className="lav-intro">
            All of these are available in Scenith’s AI video studio. Credit costs are the studio’s listed rates for
            the shortest clip; longer clips, higher resolution and audio cost more.
          </p>
          <div className="lav-table-wrap lav-table-wrap--light">
            <table className="lav-table lav-table--models">
              <thead>
                <tr><th>Model</th><th>Clip lengths</th><th>Audio</th><th>Cost</th><th>Good for</th></tr>
              </thead>
              <tbody>
                {MODELS.map((m) => (
                  <tr key={m.m}>
                    <td>{m.href ? <Link href={m.href}>{m.m}</Link> : m.m}</td>
                    <td>{m.len}</td><td>{m.audio}</td><td>{m.cost}</td><td>{m.good}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="lav-note">
            Not sure? Run the same prompt as a short clip on two models and keep the better one. More comparisons in{" "}
            <Link href="/tools/best-ai-video-model-for-cinematic-content">best AI video model for cinematic content</Link>.
          </p>
        </div>
      </section>

      {/* ── STITCHING ── */}
      <section id="stitch" className="lav-section lav-section--soft">
        <div className="lav-container">
          <h2 className="lav-center">Stitching it together in Scenith’s video editor</h2>
          <p className="lav-intro">
            Scenith’s browser-based editor has a multi-layer timeline built for exactly this — no software to install.
          </p>
          <div className="lav-stitch">
            {[
              ["🗂️", "Layers", "Put video clips, images, voiceover, music and text on separate layers.", "/blogs/how-to-use-layers-in-video-editing", "Using layers"],
              ["🔍", "Zoom keyframes", "Add a slow push-in or pan to every still image — the classic documentary look.", "/blogs/mastering-keyframe-interpolation-for-cinematic-zoom", "Cinematic zoom with keyframes"],
              ["🔀", "Transitions", "Soft dissolves between scenes, hard cuts within a scene.", "/blogs/effortless-transitions", "Transitions guide"],
              ["🎙️", "Voice & audio", "Drop in your AI narration, then lower music volume under the voice.", "/blogs/multi-track-editing-for-professional-results", "Multi-track editing"],
              ["💬", "AI subtitles", "Auto-generate subtitles so the video works with the sound off.", "/tools/add-subtitles-to-videos", "Add subtitles"],
              ["📤", "Export", "Export one finished video — 720p with watermark on the free plan, 1080p and up on paid plans.", "/blogs/how-to-create-video-editing-project", "Create an editing project"],
            ].map(([icon, t, b, href, label]) => (
              <article key={t} className="lav-stitch__card">
                <span className="lav-stitch__icon">{icon}</span>
                <h3>{t}</h3>
                <p>{b}</p>
                <Link href={href} className="lav-link">{label} →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── IDEAS ── */}
      <section className="lav-section">
        <div className="lav-container">
          <h2 className="lav-center">What to make with long AI videos</h2>
          <div className="lav-ideas">
            {[
              ["🎞️", "AI short films", "60–180 second emotional stories like the one above.", "/tools/story-video-ai-generator"],
              ["📚", "Faceless documentaries", "History, science and mystery explainers built from images and B-roll.", "/tools/how-to-create-history-videos-with-ai"],
              ["🧒", "Kids’ stories", "Bedtime stories with a warm narrator and gentle animation.", "/tools/ai-voice-for-kids-story-youtube"],
              ["📝", "Script to video", "Turn a blog post or script into a narrated video.", "/tools/script-to-video-ai-generator"],
              ["🎵", "Music videos", "Cut AI clips to the beat of your track.", "/tools/ai-music-video-generator"],
              ["🛍️", "Brand stories", "A 1-minute founder or product story for your website and ads.", "/tools/ai-video-generator-for-business"],
            ].map(([icon, t, b, href]) => (
              <Link key={t} href={href} className="lav-idea">
                <span>{icon}</span>
                <strong>{t}</strong>
                <em>{b}</em>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISTAKES ── */}
      <section className="lav-section lav-section--soft">
        <div className="lav-container lav-narrow">
          <h2 className="lav-center">6 mistakes that make long AI videos look cheap</h2>
          <div className="lav-mistakes">
            {[
              ["Starting with prompts instead of a script", "You end up with beautiful clips that don’t add up to a story."],
              ["Using AI video for every shot", "It burns credits on moments that would look just as good as a zooming image."],
              ["Changing the character description", "Even small wording changes produce a different-looking person."],
              ["No sound design", "Silence makes AI footage feel empty. Add ambience and music under the narration."],
              ["Shots that are all the same length", "Vary the rhythm — quick inserts, longer wide shots, a held final frame."],
              ["Skipping subtitles", "Most social viewers watch muted. Subtitles keep them watching."],
            ].map(([t, b]) => (
              <div key={t} className="lav-mistake">
                <strong>✕ {t}</strong>
                <p>{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="lav-section">
        <div className="lav-container lav-narrow">
          <h2 className="lav-center">Long AI videos — FAQ</h2>
          {FAQS.map((f) => (
            <details key={f.q} className="lav-faq__item">
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="lav-final">
        <div className="lav-hero__bar" aria-hidden="true" />
        <div className="lav-container lav-center">
          <h2>Your first long AI video starts with one shot.</h2>
          <p>Generate Shot 1 of “Ten Minutes” now — or start your own story in the AI studio.</p>
          <div className="lav-cta-row lav-cta-row--center">
            <Link href={studio(SHOTS[3].how, shotPrompt(SHOTS[3]))} className="lav-btn lav-btn--amber">🎬 Generate a shot →</Link>
            <Link href={PRICING_URL} className="lav-btn lav-btn--outline">See plans &amp; credits</Link>
          </div>
        </div>
        <div className="lav-hero__bar" aria-hidden="true" />
      </section>

      {/* ── RELATED ── */}
      <footer className="lav-related">
        <div className="lav-container">
          <strong>Related tools &amp; guides</strong>
          <div className="lav-related__links">
            <Link href="/tools/ai-video-generation">AI Video Generator</Link>
            <Link href="/tools/free-ai-video-generator">Free AI Video Generator</Link>
            <Link href="/tools/image-to-video-ai-generator">Image to Video AI</Link>
            <Link href="/tools/script-to-video-ai-generator">Script to Video</Link>
            <Link href="/tools/ai-storyboard-and-voiceover-generator">AI Storyboard &amp; Voiceover</Link>
            <Link href="/tools/cinematic-ai-video-generator">Cinematic AI Video</Link>
            <Link href="/tools/veo-3-ai-video-generator">Veo AI Video</Link>
            <Link href="/tools/kling-ai-video-generator">Kling AI Video</Link>
            <Link href="/tools/ai-voice-generation">AI Voice Generator</Link>
            <Link href="/tools/add-subtitles-to-videos">Add Subtitles</Link>
            <Link href="/create-ai-content">🎬 Scenith AI Studio</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}