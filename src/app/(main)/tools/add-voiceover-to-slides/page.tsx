// app/(main)/tools/add-voiceover-to-slides/page.tsx
// SEO guide: how to add voiceover to slides (PowerPoint, Google Slides, Canva) with an AI voice —
// keep the deck editable with per-slide MP3s, or turn it into a narrated MP4 with Scenith.
import type { Metadata } from "next";
import Link from "next/link";
import "./styles.css";

const SLUG = "add-voiceover-to-slides";
const PAGE_URL = `https://scenith.in/tools/${SLUG}`;
const UTM = `utm_source=${SLUG}&utm_medium=cta&utm_campaign=seo`;
const VOICE_URL = `/create-ai-content?tab=voice&${UTM}`;
const PDF_TO_IMAGE_URL = `/tools/pdf-tools/pdf-to-image?${UTM}`;
const PRICING_URL = `/pricing?src=${SLUG}`;
const voice = (text: string) => `/create-ai-content?tab=voice&text=${encodeURIComponent(text)}&${UTM}`;

const PUBLISHED = "2026-10-05";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "How to Add Voiceover to Slides with AI (PowerPoint, Google Slides & Canva) — No Mic | Scenith",
  description:
    "Add a natural AI voiceover to any slide deck without recording your voice. Step-by-step for PowerPoint, Google Slides and Canva, plus how to turn slides into a narrated MP4 video — in English or Hindi.",
  keywords: [
    "add voiceover to slides",
    "how to add voiceover to slides",
    "add voiceover to powerpoint",
    "add voiceover to google slides",
    "how to add voice to google slides",
    "add voiceover to canva presentation",
    "ai voiceover for presentation",
    "ai narration for powerpoint",
    "text to speech for slides",
    "narrate slides without microphone",
    "convert slides to video with voiceover",
    "powerpoint to video with narration",
    "google slides to video with audio",
    "hindi voiceover for presentation",
    "ai voice for ppt",
    "presentation narration generator",
  ],
  openGraph: {
    title: "How to Add Voiceover to Slides with AI — PowerPoint, Google Slides & Canva",
    description:
      "No mic, no retakes. Write a script per slide, generate a natural AI voice, and add it to your deck — or turn the whole deck into a narrated video.",
    url: PAGE_URL,
    siteName: "Scenith",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Add Voiceover to Slides with AI (No Mic Needed)",
    description: "Step-by-step for PowerPoint, Google Slides and Canva, plus slides → narrated MP4.",
  },
  alternates: { canonical: PAGE_URL },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const SAMPLE: { title: string; text: string }[] = [
  { title: "Title slide", text: "Every drop of water you drink has travelled around the planet for millions of years. This is the water cycle." },
  { title: "Evaporation", text: "It starts with evaporation. The sun heats oceans and rivers, and water rises into the air as invisible vapour." },
  { title: "Condensation", text: "High in the sky, the vapour cools and turns into tiny droplets. They gather together to form clouds." },
  { title: "Precipitation", text: "When the droplets grow heavy, they fall back to Earth as rain, snow or hail. This is precipitation." },
  { title: "Collection", text: "The water flows into rivers, soaks into the ground and returns to the sea. And then, the cycle begins again." },
];
const SAMPLE_TOTAL = SAMPLE.reduce((n, s) => n + s.text.length, 0);
const HINDI_SAMPLE =
  "क्या आप जानते हैं? जो पानी आप आज पी रहे हैं, वह लाखों सालों से धरती का चक्कर लगा रहा है। इसे कहते हैं जल चक्र।";

const ROUTES = [
  {
    key: "record",
    tag: "Route A",
    title: "Record your own voice",
    when: "You’re comfortable recording, have a quiet room and a decent mic.",
    pros: ["Your real voice", "Built into PowerPoint and Canva"],
    cons: ["Retakes for every stumble", "Background noise", "Not available in Google Slides"],
  },
  {
    key: "insert",
    tag: "Route B",
    title: "AI voice, inserted per slide",
    when: "You’ll present or share the deck itself and want to keep it editable.",
    pros: ["No mic or retakes", "Edit one slide’s audio without redoing the rest", "Works in PowerPoint, Google Slides and Canva"],
    cons: ["Viewers need the deck file or app"],
    hl: true,
  },
  {
    key: "video",
    tag: "Route C",
    title: "AI-narrated MP4 video",
    when: "You’ll share on YouTube, WhatsApp, an LMS or email — anywhere.",
    pros: ["Plays anywhere, no app needed", "Add subtitles and music", "Perfect for courses and explainers"],
    cons: ["Edits mean re-exporting the video"],
  },
];

const TIMING: [string, string, string][] = [
  ["10 seconds", "≈ 25 words", "≈ 140 characters"],
  ["15 seconds", "≈ 35 words", "≈ 200 characters"],
  ["30 seconds", "≈ 70 words", "≈ 400 characters"],
  ["60 seconds", "≈ 140 words", "≈ 800 characters"],
];

const FAQS: { q: string; a: string }[] = [
  {
    q: "How do I add a voiceover to slides without recording my voice?",
    a: "Write a short narration script for each slide, paste it into an AI voice generator such as Scenith, pick a voice and download one MP3 per slide. Then insert each MP3 on its slide in PowerPoint, Google Slides or Canva and set it to play automatically — or turn the slides into a narrated MP4 video.",
  },
  {
    q: "How do I add a voiceover to Google Slides?",
    a: "Google Slides doesn’t have a built-in voice recorder, so you add audio files instead. Upload your MP3 or WAV voiceover to Google Drive, then in Google Slides go to Insert → Audio and choose the file. In Format options, set it to play automatically and hide the icon when presenting.",
  },
  {
    q: "How do I add a voiceover to PowerPoint?",
    a: "You can record your own narration from PowerPoint’s Record tab, or insert a ready-made audio file with Insert → Audio → Audio on My PC. For an AI voiceover, insert one MP3 per slide, set Playback to start automatically, and set each slide to advance after its audio finishes. You can then export it as an MP4 video from the Export menu.",
  },
  {
    q: "How do I add a voiceover to a Canva presentation?",
    a: "Upload your audio file in Canva’s Uploads panel under Audio, then drag it onto the slide where it should play. Canva also has a Present and record option for recording your own voice, though it may not be available everywhere. You can download the finished presentation as an MP4 video.",
  },
  {
    q: "Can I turn my slides into a video with voiceover?",
    a: "Yes. Export your slides as a PDF, convert the PDF pages into images with Scenith’s free PDF to Image tool, generate your AI narration, then place each slide image and its voiceover on the timeline in Scenith’s video editor. Add subtitles and export an MP4.",
  },
  {
    q: "How long should the narration for each slide be?",
    a: "Most narrated slides work best at 10–30 seconds. People speak at roughly 130–150 words per minute, so a 15-second slide needs about 35 words, or around 200 characters of script.",
  },
  {
    q: "Can I make the voiceover in Hindi?",
    a: "Yes. Scenith offers Hindi male and female AI voices as well as Indian English, American and British English voices. Write Hindi scripts in Devanagari for the most natural pronunciation.",
  },
  {
    q: "Is it free to add an AI voiceover to slides?",
    a: "You can start free. Scenith’s free plan includes 600 voice characters a month — enough for a short 5-slide deck like the sample on this page — and the PDF to Image converter is free. Longer decks need more voice characters from a paid plan; the Starter Pack includes 10,000 characters a month.",
  },
  {
    q: "What file format does the AI voiceover download in?",
    a: "Scenith downloads AI voiceovers as MP3 files, which work in PowerPoint, Google Slides (via Google Drive) and Canva.",
  },
  {
    q: "How do I make the AI voice sound more natural on slides?",
    a: "Write the way you talk, keep sentences short, spell out numbers and acronyms the way they should be spoken, use commas and full stops for pauses, and use the same voice for every slide. Slightly slowing the voice speed helps for teaching content.",
  },
];

const HOWTO_STEPS = [
  { t: "Write a script for each slide", b: "Turn your speaker notes into 1–3 short spoken sentences per slide." },
  { t: "Generate the AI voiceover", b: "Paste each slide’s script into Scenith’s AI voice generator, choose a voice and download one MP3 per slide." },
  { t: "Insert audio on each slide", b: "In PowerPoint, Google Slides or Canva, add each MP3 to its slide and set it to play automatically." },
  { t: "Or export as a narrated video", b: "Export slides as PDF, convert to images, and combine images with the voiceover in Scenith’s editor to export an MP4." },
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function AddVoiceoverToSlidesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${PAGE_URL}#article`,
        headline: "How to Add Voiceover to Slides with AI (PowerPoint, Google Slides & Canva)",
        description:
          "Add an AI voiceover to PowerPoint, Google Slides or Canva without recording, or turn slides into a narrated MP4 video.",
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
        name: "How to add an AI voiceover to slides",
        totalTime: "PT20M",
        step: HOWTO_STEPS.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.t, text: s.b })),
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
          { "@type": "ListItem", position: 3, name: "Add Voiceover to Slides", item: PAGE_URL },
        ],
      },
    ],
  };

  return (
    <div className="avs-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav aria-label="Breadcrumb" className="avs-breadcrumb">
        <ol>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/tools">Tools</Link></li>
          <li aria-current="page">Add Voiceover to Slides</li>
        </ol>
      </nav>

      {/* ── HERO ── */}
      <header className="avs-hero">
        <div className="avs-container avs-hero__grid">
          <div>
            <span className="avs-eyebrow">🎙️ No mic · No retakes · English &amp; Hindi</span>
            <h1>
              How to Add <span className="avs-hl">Voiceover to Slides</span> with AI — PowerPoint, Google Slides
              &amp; Canva
            </h1>
            <p className="avs-lead">
              Write a few lines per slide, turn them into a natural AI voice, and drop them into your deck. Or turn
              the whole presentation into a <strong>narrated MP4</strong> you can share anywhere. Step-by-step for
              every app — plus a free 5-slide sample you can try right now.
            </p>
            <div className="avs-cta-row">
              <Link href={voice(SAMPLE[0].text)} className="avs-btn avs-btn--primary">Generate a slide voiceover →</Link>
              <a href="#apps" className="avs-btn avs-btn--ghost">Jump to my app</a>
            </div>
          </div>

          {/* Slide deck visual with waveform per slide */}
          <div className="avs-deck" aria-label="Each slide gets its own voiceover">
            {SAMPLE.slice(0, 3).map((s, i) => (
              <div key={s.title} className={`avs-slide avs-slide--${i}`}>
                <div className="avs-slide__screen">
                  <span className="avs-slide__num">{i + 1}</span>
                  <strong>{s.title}</strong>
                  <span className="avs-slide__lines" aria-hidden="true"><i /><i /><i /></span>
                </div>
                <div className="avs-wave" aria-hidden="true">
                  {Array.from({ length: 22 }).map((_, k) => (
                    <b key={k} style={{ height: `${20 + ((k * 37 + i * 13) % 70)}%` }} />
                  ))}
                </div>
                <span className="avs-slide__file">slide-0{i + 1}.mp3</span>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ── TOC ── */}
      <nav className="avs-toc" aria-label="On this page">
        <div className="avs-container avs-toc__inner">
          <a href="#answer">⚡ Quick answer</a>
          <a href="#routes">🧭 Pick a method</a>
          <a href="#script">✍️ Write the script</a>
          <a href="#apps">🖥️ PowerPoint · Slides · Canva</a>
          <a href="#video">🎬 Slides → MP4</a>
          <a href="#sample">🧪 Free sample</a>
          <a href="#faq">❓ FAQ</a>
        </div>
      </nav>

      {/* ── QUICK ANSWER ── */}
      <section id="answer" className="avs-section avs-section--tight">
        <div className="avs-container avs-narrow avs-prose">
          <div className="avs-answer">
            <strong>Quick answer:</strong> To add a voiceover to slides without recording, write a short script for
            each slide, generate it with an <b>AI voice</b> and download <b>one MP3 per slide</b>. Then use{" "}
            <b>Insert → Audio</b> in PowerPoint or Google Slides (or upload it in Canva), set each clip to{" "}
            <b>play automatically</b>, and hide the audio icon. To share it anywhere, turn the slides into a
            narrated <b>MP4 video</b> instead.
          </div>
          <p>
            Recording your own voice over a presentation sounds simple until you try it: the fan is too loud, you
            stumble on slide 7, and fixing one sentence means re-recording the whole thing. An AI voiceover solves
            all three. Each slide gets its own clean audio file, and changing a line takes seconds.
          </p>
        </div>
      </section>

      {/* ── ROUTES ── */}
      <section id="routes" className="avs-section avs-section--soft">
        <div className="avs-container">
          <h2 className="avs-center">Three ways to add voiceover to slides — which one is right for you?</h2>
          <div className="avs-routes">
            {ROUTES.map((r) => (
              <article key={r.key} className={`avs-route ${r.hl ? "is-hl" : ""}`}>
                <span className="avs-route__tag">{r.tag}{r.hl ? " · Most flexible" : ""}</span>
                <h3>{r.title}</h3>
                <p className="avs-route__when"><b>Choose this if:</b> {r.when}</p>
                <ul>
                  {r.pros.map((p) => <li key={p} className="is-pro">{p}</li>)}
                  {r.cons.map((c) => <li key={c} className="is-con">{c}</li>)}
                </ul>
              </article>
            ))}
          </div>
          <p className="avs-note">This guide focuses on Routes B and C — the AI voice routes. Both start with the same two steps below.</p>
        </div>
      </section>

      {/* ── SCRIPT ── */}
      <section id="script" className="avs-section">
        <div className="avs-container avs-narrow avs-prose">
          <h2>Step 1: Write a voiceover script for each slide</h2>
          <p>
            Your <b>speaker notes are your first draft</b>. Rewrite them the way you’d actually say them out loud —
            short sentences, no bullet-point fragments. A simple formula keeps every slide tight:
          </p>
          <div className="avs-formula">
            <div><span>1</span><strong>Hook</strong><em>One line that says why this slide matters.</em></div>
            <div><span>2</span><strong>Point</strong><em>The single idea on the slide, in plain words.</em></div>
            <div><span>3</span><strong>Bridge</strong><em>A short line that leads into the next slide.</em></div>
          </div>
          <h3 className="avs-h3">How much script per slide?</h3>
          <p>People speak at roughly 130–150 words per minute. Use this to match narration to slide length:</p>
          <div className="avs-table-wrap">
            <table className="avs-table">
              <thead><tr><th>Slide length</th><th>Words</th><th>Script characters</th></tr></thead>
              <tbody>
                {TIMING.map((r) => <tr key={r[0]}><td>{r[0]}</td><td>{r[1]}</td><td>{r[2]}</td></tr>)}
              </tbody>
            </table>
          </div>
          <div className="avs-tips">
            {[
              ["Spell it as it’s said", "Write “twenty twenty-six”, “GST” as “G S T”, and “₹5L” as “five lakh rupees”."],
              ["Punctuation = pauses", "A comma is a short breath; a full stop is a beat. Use them to pace the voice."],
              ["One voice per deck", "Switching voices between slides sounds like a different speaker walked in."],
              ["Slow down for teaching", "For lectures and tutorials, set the voice slightly slower than normal."],
            ].map(([t, b]) => (
              <div key={t} className="avs-tip"><strong>{t}</strong><p>{b}</p></div>
            ))}
          </div>

          <h2 className="avs-h2-spaced">Step 2: Generate one AI voiceover per slide</h2>
          <ol className="avs-steps">
            <li><span>1</span><div><b>Open Scenith’s AI voice generator</b> and choose a voice — English (US, UK or Indian accent) or Hindi, male or female.</div></li>
            <li><span>2</span><div><b>Paste the script for slide 1</b>, preview it, and adjust the speed if needed.</div></li>
            <li><span>3</span><div><b>Download the MP3</b> and rename it <code>slide-01.mp3</code> so files stay in order.</div></li>
            <li><span>4</span><div><b>Repeat for each slide</b> with the same voice and speed.</div></li>
          </ol>
          <p>
            Why one file per slide? If you change slide 4 next week, you regenerate one 15-second clip — not the
            whole presentation. Need a specific voice? Try the{" "}
            <Link href="/tools/hindi-female-ai-voice-generation">Hindi female</Link>,{" "}
            <Link href="/tools/indian-english-ai-voice-generator">Indian English</Link> or{" "}
            <Link href="/tools/narration-ai-voice-generator">narration</Link> voices.
          </p>
          <div className="avs-center avs-mt">
            <Link href={VOICE_URL} className="avs-btn avs-btn--primary">Open the AI voice generator →</Link>
          </div>
        </div>
      </section>

      {/* ── APPS ── */}
      <section id="apps" className="avs-section avs-section--soft">
        <div className="avs-container">
          <h2 className="avs-center">Step 3: Add the voiceover in your slides app</h2>
          <p className="avs-intro">Menu names can shift slightly between app versions, but the steps stay the same.</p>
          <div className="avs-apps">
            <article id="powerpoint" className="avs-app avs-app--ppt">
              <header><span className="avs-app__logo">P</span><h3>Add voiceover to PowerPoint</h3></header>
              <ol>
                <li>Go to the slide, then <b>Insert → Audio → Audio on My PC</b> and pick <code>slide-01.mp3</code>.</li>
                <li>With the audio icon selected, open the <b>Playback</b> tab and set <b>Start: Automatically</b>.</li>
                <li>Tick <b>Hide During Show</b> so the speaker icon doesn’t appear.</li>
                <li>In <b>Transitions</b>, set <b>Advance Slide → After</b> to the length of that clip so the deck moves on by itself.</li>
                <li>Repeat for every slide, then use <b>Export → Export Video / Create a Video</b> if you want an MP4.</li>
              </ol>
              <p className="avs-app__note">Prefer your own voice? PowerPoint’s <b>Record</b> tab records narration slide by slide.</p>
            </article>

            <article id="google-slides" className="avs-app avs-app--gs">
              <header><span className="avs-app__logo">G</span><h3>Add voiceover to Google Slides</h3></header>
              <ol>
                <li>Upload your MP3 files to <b>Google Drive</b> first — Google Slides inserts audio from Drive.</li>
                <li>In your presentation, go to <b>Insert → Audio</b> and choose the clip for that slide.</li>
                <li>Select the audio icon and open <b>Format options → Audio playback</b>.</li>
                <li>Set it to <b>play automatically</b> and turn on <b>Hide icon when presenting</b>.</li>
                <li>Repeat for each slide. Share the deck so viewers also have access to the audio files in Drive.</li>
              </ol>
              <p className="avs-app__note">
                Google Slides has no built-in voice recorder and doesn’t export video — so AI voice files (and the MP4
                route below) are the easiest way to narrate it.
              </p>
            </article>

            <article id="canva" className="avs-app avs-app--canva">
              <header><span className="avs-app__logo">C</span><h3>Add voiceover to Canva</h3></header>
              <ol>
                <li>Open the <b>Uploads</b> panel, switch to <b>Audio</b>, and upload your MP3 files.</li>
                <li>Select a page and drag its audio clip onto it.</li>
                <li>Trim clips before uploading — Canva has limited audio editing.</li>
                <li>Match each page’s duration to its voiceover so they end together.</li>
                <li>Use <b>Share → Download → MP4 Video</b> to export a narrated video.</li>
              </ol>
              <p className="avs-app__note">Canva’s <b>Present and record</b> option records your own voice, though it may not be available in every region.</p>
            </article>
          </div>
        </div>
      </section>

      {/* ── SLIDES → MP4 ── */}
      <section id="video" className="avs-section">
        <div className="avs-container">
          <h2 className="avs-center">Turn any slide deck into a narrated video (works for Google Slides too)</h2>
          <p className="avs-intro">
            The most shareable format: one MP4 that plays on YouTube, WhatsApp, Google Classroom, Moodle or email —
            no slides app needed. Every step happens on Scenith.
          </p>
          <ol className="avs-pipeline">
            <li>
              <span className="avs-pipeline__n">1</span>
              <h3>Export slides as PDF</h3>
              <p>PowerPoint: <b>File → Export → PDF</b>. Google Slides: <b>File → Download → PDF</b>. Canva: <b>Share → Download → PDF</b>.</p>
            </li>
            <li>
              <span className="avs-pipeline__n">2</span>
              <h3>Convert PDF to images</h3>
              <p>Use Scenith’s free <b>PDF to Image</b> tool to get every slide as a PNG or JPG — no signup needed.</p>
              <Link href={PDF_TO_IMAGE_URL} className="avs-link">Open PDF to Image →</Link>
            </li>
            <li>
              <span className="avs-pipeline__n">3</span>
              <h3>Generate the narration</h3>
              <p>Create one AI voiceover per slide (or one for the whole deck) in Scenith’s voice generator.</p>
              <Link href={VOICE_URL} className="avs-link">Open AI voice →</Link>
            </li>
            <li>
              <span className="avs-pipeline__n">4</span>
              <h3>Line them up on the timeline</h3>
              <p>In Scenith’s video editor, put slide images on one layer and voiceovers on an audio layer. Stretch each slide to match its clip.</p>
              <Link href="/blogs/how-to-create-video-editing-project" className="avs-link">Create an editing project →</Link>
            </li>
            <li>
              <span className="avs-pipeline__n">5</span>
              <h3>Add polish</h3>
              <p>A soft transition between slides, a slow zoom on image-heavy slides, quiet background music and auto subtitles.</p>
              <Link href="/tools/add-subtitles-to-videos" className="avs-link">Add subtitles →</Link>
            </li>
            <li>
              <span className="avs-pipeline__n">6</span>
              <h3>Export the MP4</h3>
              <p>Free plan exports at 720p with a watermark; paid plans export at 1080p and above without one.</p>
            </li>
          </ol>
          <div className="avs-callout">
            Want AI to build the visuals too? See the <Link href="/tools/ai-video-generator-for-presentations">AI video generator for presentations</Link>{" "}
            and <Link href="/tools/slideshow-video-ai-generator">slideshow video generator</Link>.
          </div>
        </div>
      </section>

      {/* ── SAMPLE ── */}
      <section id="sample" className="avs-section avs-section--soft">
        <div className="avs-container">
          <h2 className="avs-center">Try it free: a 5-slide narration script</h2>
          <p className="avs-intro">
            A ready-made script for a “Water Cycle” class presentation. All five slides together are{" "}
            <b>{SAMPLE_TOTAL} characters</b> — inside the free plan’s 600 monthly voice characters. Tap a slide to
            generate its voiceover.
          </p>
          <ol className="avs-sample">
            {SAMPLE.map((s, i) => (
              <li key={s.title} className="avs-sample__slide">
                <div className="avs-sample__head">
                  <span>Slide {i + 1}</span>
                  <strong>{s.title}</strong>
                  <em>{s.text.length} chars · ~{Math.round(s.text.split(" ").length / 2.3)}s</em>
                </div>
                <p className="avs-copy">{s.text}</p>
                <Link href={voice(s.text)} className="avs-link">🎙️ Generate slide {i + 1} →</Link>
              </li>
            ))}
          </ol>
          <div className="avs-hindi">
            <div>
              <span className="avs-hindi__tag">हिंदी में</span>
              <h3>Presenting in Hindi? Here’s slide 1 in Hindi</h3>
              <p lang="hi" className="avs-copy avs-copy--hi">{HINDI_SAMPLE}</p>
            </div>
            <Link href={voice(HINDI_SAMPLE)} className="avs-btn avs-btn--primary avs-btn--sm">Generate in a Hindi voice →</Link>
          </div>
        </div>
      </section>

      {/* ── USE CASES ── */}
      <section className="avs-section">
        <div className="avs-container">
          <h2 className="avs-center">Who adds AI voiceovers to slides?</h2>
          <div className="avs-uses">
            {[
              ["👩‍🏫", "Teachers & tutors", "Pre-recorded lessons students can replay before exams.", "/tools/ai-video-generator-for-education"],
              ["🎓", "Students", "Narrated project presentations and assignments — no mic or awkward retakes.", "/tools/ai-educational-video-generator"],
              ["💻", "Course creators", "Turn slide decks into course modules for any LMS.", "/tools/ai-video-generator-for-courses"],
              ["🏢", "HR & training teams", "Onboarding and compliance decks that run on their own.", "/tools/ai-tutorial-video-generator"],
              ["📈", "Sales & founders", "Narrated product demos and pitch walkthroughs to send ahead of a call.", "/tools/ai-explainer-video-generator"],
              ["▶️", "YouTube explainers", "Slide-based explainer videos with a consistent narrator.", "/tools/youtube-narration-ai-voice"],
            ].map(([icon, t, b, href]) => (
              <Link key={t} href={href} className="avs-use">
                <span>{icon}</span>
                <strong>{t}</strong>
                <em>{b}</em>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="avs-section avs-section--tight">
        <div className="avs-container">
          <div className="avs-price">
            <div>
              <h2>How many slides can you narrate?</h2>
              <p>At roughly 800 characters per minute of narration:</p>
            </div>
            <ul>
              <li><strong>Free</strong><span>600 chars / month</span><em>≈ a short 5-slide deck</em></li>
              <li><strong>Starter Pack</strong><span>10,000 chars / month</span><em>≈ 12 minutes of narration</em></li>
              <li><strong>Creator Lite</strong><span>50,000 chars / month</span><em>≈ 1 hour of narration</em></li>
            </ul>
            <Link href={PRICING_URL} className="avs-btn avs-btn--primary">See plans →</Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="avs-section avs-section--soft">
        <div className="avs-container avs-narrow">
          <h2 className="avs-center">Adding voiceover to slides — FAQ</h2>
          {FAQS.map((f) => (
            <details key={f.q} className="avs-faq__item">
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="avs-final">
        <div className="avs-container avs-center">
          <h2>Your slides, narrated in minutes.</h2>
          <p>No mic, no retakes — just paste a script and download a natural voiceover.</p>
          <div className="avs-cta-row avs-cta-row--center">
            <Link href={voice(SAMPLE[0].text)} className="avs-btn avs-btn--light">Try the free sample →</Link>
            <Link href={PDF_TO_IMAGE_URL} className="avs-btn avs-btn--outline">Convert slides PDF to images</Link>
          </div>
        </div>
      </section>

      {/* ── RELATED ── */}
      <footer className="avs-related">
        <div className="avs-container">
          <strong>Related tools &amp; guides</strong>
          <div className="avs-related__links">
            <Link href="/tools/ai-voice-generation">AI Voice Generator</Link>
            <Link href="/tools/narration-ai-voice-generator">Narration AI Voice</Link>
            <Link href="/tools/hindi-female-ai-voice-generation">Hindi Female AI Voice</Link>
            <Link href="/tools/indian-english-text-to-speech">Indian English Text to Speech</Link>
            <Link href="/tools/pdf-tools/pdf-to-image">PDF to Image</Link>
            <Link href="/tools/ai-video-generator-for-presentations">AI Video for Presentations</Link>
            <Link href="/tools/slideshow-video-ai-generator">Slideshow Video Generator</Link>
            <Link href="/tools/add-subtitles-to-videos">Add Subtitles</Link>
            <Link href="/tools/how-to-make-long-ai-videos">How to Make Long AI Videos</Link>
            <Link href="/create-ai-content">🎬 Scenith AI Studio</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}