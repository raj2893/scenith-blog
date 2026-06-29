import type { Metadata } from "next";
import Link from "next/link";
import "./styles.css";

// ─────────────────────────────────────────────────────────────────────────────
// SEO METADATA
// ─────────────────────────────────────────────────────────────────────────────

const SLUG = "ai-video-generator-for-presentations";
const CTA = `/create-ai-content?tab=video&utm_source=${SLUG}&utm_medium=cta&utm_campaign=seo`;

export const metadata: Metadata = {
  title:
    "AI Video Generator for Presentations — Turn Slides into Video Free | Scenith",
  description:
    "Turn presentation scripts and slide ideas into polished AI videos in minutes. Built for pitch decks, sales demos, training, and webinars. Free to start, no editing skills needed.",
  keywords: [
    "ai video generator for presentations",
    "presentation to video",
    "slides to video ai",
    "ai presentation video maker",
    "pitch deck video generator",
    "training video generator",
    "ai video for slides",
  ],
  alternates: {
    canonical: `https://scenith.in/tools/${SLUG}`,
  },
  openGraph: {
    title: "AI Video Generator for Presentations | Scenith",
    description:
      "Turn slide content and talking points into cinematic AI videos. Perfect for pitch decks, sales, training, and webinars.",
    url: `https://scenith.in/tools/${SLUG}`,
    type: "website",
    siteName: "Scenith",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Video Generator for Presentations | Scenith",
    description:
      "Turn slide content into polished AI videos in minutes. Free to start.",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// FAQ DATA (used for both visible FAQ + JSON-LD schema)
// ─────────────────────────────────────────────────────────────────────────────

const FAQS: { q: string; a: string }[] = [
  {
    q: "What is an AI video generator for presentations?",
    a: "It is a tool that turns the words and ideas behind your slides — your script, talking points, or even a one-line summary of a slide — into a moving video clip. Instead of recording your screen or hiring a video team, you describe what each scene should show and the AI renders it. Scenith pairs this with AI voiceover, so a static deck becomes a narrated, watchable video you can post on LinkedIn, YouTube, or send to a client.",
  },
  {
    q: "Do I need video editing experience to use it?",
    a: "No. The entire workflow is text-based. You type a prompt that describes the scene you want, pick a duration and aspect ratio, and the AI produces the clip. There is no timeline to scrub, no keyframes, and no rendering software to install. If you can write a sentence describing your slide, you can generate a video for it.",
  },
  {
    q: "Can I add a voiceover to my presentation video?",
    a: "Yes. The most effective presentation videos combine generated visuals with a clear narration track. Generate your voiceover script using the AI voice generator, then pair it with your video scenes. Scenith supports 40+ natural voices across 20+ languages, so you can narrate a sales demo in English and a training module in Hindi from the same project.",
  },
  {
    q: "What aspect ratio should I use for a presentation video?",
    a: "Use 16:9 for anything that will be watched on a laptop or projected in a meeting — webinars, conference talks, internal training, and YouTube. Use 9:16 for LinkedIn and Instagram feed clips or short teaser videos pulled from a longer deck. Scenith supports 16:9, 9:16, and 1:1, so you can repurpose one idea across every channel.",
  },
  {
    q: "How long can each video clip be?",
    a: "Individual AI clips are typically a few seconds to several seconds long, depending on the model you choose. For a full presentation, you generate several short scenes — one per key slide — and stitch them together. This per-scene approach actually gives you more control than a single long render, because you can regenerate one weak scene without redoing the whole video.",
  },
  {
    q: "Is it really free to start?",
    a: "Yes. You get free credits on signup with no credit card required, which is enough to generate your first presentation scenes and test the workflow end to end. Paid plans unlock more credits, premium models, and longer monthly limits when you are ready to produce at scale.",
  },
  {
    q: "Can I use the videos in client work and commercial projects?",
    a: "All content generated on Scenith comes with full commercial rights and no watermarks. You can drop the clips into pitch decks, paid ad campaigns, sales emails, internal training portals, and client deliverables without attribution or licensing fees.",
  },
  {
    q: "How is this different from screen-recording my slides?",
    a: "A screen recording captures exactly what is on your slides — static text and stock images that everyone has seen. An AI video generator creates original, cinematic motion for each idea: a product rotating in space, a concept animated, a scene that did not exist before. It turns the points you would have read aloud into visuals that hold attention, which is the difference between a deck people skim and a video people finish.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────────────────

export default function AiVideoForPresentationsPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to turn a presentation into an AI video",
    description:
      "Convert slide content and talking points into a narrated AI video presentation using Scenith.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Break your deck into scenes",
        text: "List the key message of each slide. Each becomes one short video scene.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Write a visual prompt per scene",
        text: "Describe what the viewer should see for each point — a product, a metaphor, a setting.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Generate visuals and voiceover",
        text: "Render each scene and create a matching narration track with AI voice.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Assemble and export",
        text: "Combine the scenes, add subtitles, and download as MP4 for any platform.",
      },
    ],
  };

  return (
    <div className="avp-page">
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="avp-breadcrumb">
        <ol itemScope itemType="https://schema.org/BreadcrumbList">
          <li
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <Link href="/" itemProp="item">
              <span itemProp="name">Home</span>
            </Link>
            <meta itemProp="position" content="1" />
          </li>
          <li
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <Link href="/tools" itemProp="item">
              <span itemProp="name">Tools</span>
            </Link>
            <meta itemProp="position" content="2" />
          </li>
          <li
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <span itemProp="name">AI Video Generator for Presentations</span>
            <meta itemProp="position" content="3" />
          </li>
        </ol>
      </nav>

      {/* ───────────────────────── HERO ───────────────────────── */}
      <section className="avp-hero">
        <div className="avp-container">
          <div className="avp-eyebrow">
            <span className="avp-eyebrow-dot" />
            For pitch decks, sales, training &amp; webinars
          </div>

          <h1 className="avp-hero-title">
            AI Video Generator
            <span className="avp-hero-title-accent">for Presentations</span>
          </h1>

          <p className="avp-hero-sub">
            Turn the ideas behind your slides into a narrated, watchable video —
            no cameras, no editing software, no production budget. Describe each
            scene, and Scenith renders it. A deck people skim becomes a video
            people finish.
          </p>

          {/* Signature element: slides → video transformation */}
          <div className="avp-transform" aria-hidden="true">
            <div className="avp-transform-slides">
              <span className="avp-mini-slide">
                <i />
                <i />
                <i className="short" />
              </span>
              <span className="avp-mini-slide">
                <i />
                <i className="short" />
                <i />
              </span>
              <span className="avp-mini-slide">
                <i className="short" />
                <i />
                <i />
              </span>
            </div>
            <span className="avp-transform-arrow">→</span>
            <div className="avp-transform-video">
              <span className="avp-play">▶</span>
            </div>
          </div>

          {/* PROMPT BOX — pure HTML form, no client JS.
              Submits via GET to /create-ai-content, which reads the `text`
              query param and pre-fills the video prompt. */}
          <form
            action="/create-ai-content"
            method="GET"
            className="avp-prompt-card"
          >
            <input type="hidden" name="tab" value="video" />
            <input type="hidden" name="utm_source" value={SLUG} />
            <input type="hidden" name="utm_medium" value="cta" />
            <input type="hidden" name="utm_campaign" value="seo" />

            <label className="avp-prompt-label" htmlFor="avp-prompt">
              Describe your opening scene
            </label>
            <textarea
              id="avp-prompt"
              name="text"
              className="avp-prompt-input"
              rows={3}
              required
              placeholder="e.g. A sleek product dashboard floating in a clean studio space, soft spotlight, slow camera push-in — for the first slide of our SaaS pitch"
            />
            <div className="avp-prompt-row">
              <span className="avp-prompt-hint">
                We&apos;ll open the generator with your prompt ready to go.
              </span>
              <button type="submit" className="avp-prompt-btn">
                Generate Video →
              </button>
            </div>
          </form>

          <div className="avp-trust-row">
            <span className="avp-trust-pill">✅ Free to start</span>
            <span className="avp-trust-pill">🎬 No editing skills</span>
            <span className="avp-trust-pill">🎙️ Voiceover included</span>
            <span className="avp-trust-pill">💼 Commercial rights</span>
            <span className="avp-trust-pill">🚫 No watermark</span>
          </div>
        </div>
      </section>

      <div className="avp-body">
        <div className="avp-container">
          {/* ─────────────── WHAT IT IS ─────────────── */}
          <section className="avp-section" id="what-it-is">
            <h2>What Is an AI Video Generator for Presentations?</h2>
            <p>
              An AI video generator for presentations converts the substance of
              your slides — your script, your talking points, or even a one-line
              summary of what each slide is meant to say — into short, cinematic
              video scenes. Rather than capturing a screen recording of static
              bullet points, you describe the visual you want in plain language,
              and the model renders an original clip. Stitch a handful of these
              scenes together, add a narration track, and a flat slide deck
              becomes a video that moves, breathes, and holds attention.
            </p>
            <p>
              The reason this matters is simple: presentations are built to be
              spoken over, but most of the time nobody is in the room to speak.
              A pitch deck forwarded to an investor, a training module sitting in
              an LMS, a product explainer pasted into a sales email — these all
              lose the live narration that made the deck work. Turning the deck
              into a narrated video restores that missing layer. The viewer hears
              the story and watches it unfold, instead of squinting at text and
              filling in the gaps themselves.
            </p>
            <p>
              On Scenith, the workflow lives inside the{" "}
              <Link href={CTA} className="avp-link">
                AI Content Creator
              </Link>
              , where video generation sits next to AI voice and AI image tools.
              That proximity is the point: a finished presentation video usually
              needs visuals <em>and</em> a voice, and producing both in one place
              keeps your style consistent and your credits in a single balance.
            </p>
          </section>

          {/* ─────────────── WHY VIDEO ─────────────── */}
          <section className="avp-section" id="why-video">
            <h2>Why Turn a Presentation into Video?</h2>
            <p>
              Static slides ask a lot of the viewer. They have to read, hold
              several points in memory, and reconstruct the argument you would
              have made out loud. Video does that work for them. Motion directs
              attention, pacing controls emphasis, and a voice carries tone that
              text on a slide can never convey. The result is higher completion
              and stronger recall — the same reason a recorded webinar outperforms
              the slides from that webinar shared as a PDF.
            </p>
            <p>
              There is also a distribution advantage. A slide deck has almost
              nowhere to live outside the meeting it was made for. A video plays
              natively in a LinkedIn feed, embeds on a landing page, runs as a
              YouTube explainer, autoplays in a sales email preview, and loops on
              a booth screen at a conference. One afternoon of generating scenes
              produces an asset you can cut into a dozen platform-specific clips,
              each pulling its weight long after the original presentation is over.
            </p>
            <p>
              Cost is the third factor. Traditionally, turning a deck into
              broadcast-quality video meant a motion designer, a voice actor, a
              few rounds of revisions, and a multi-week timeline. AI collapses
              that to an afternoon and a few credits. For a founder testing three
              versions of a pitch, or a training team localizing a course into
              five languages, that difference is not incremental — it changes what
              is realistic to attempt at all. If you want the raw narration first,
              start with the{" "}
              <Link href="/tools/ai-voice-generation" className="avp-link">
                AI voice generator
              </Link>{" "}
              and build the visuals around it.
            </p>
          </section>

          {/* ─────────────── USE CASES ─────────────── */}
          <section className="avp-section" id="use-cases">
            <h2>Who Uses It — and for What</h2>
            <p className="avp-section-lead">
              The same tool serves very different rooms. Here is how each audience
              tends to use an AI video generator for presentations.
            </p>
            <div className="avp-card-grid">
              <article className="avp-card">
                <span className="avp-card-icon">🚀</span>
                <h3>Founders &amp; Startups</h3>
                <p>
                  Turn a pitch deck into a 60-second teaser for cold outreach, or
                  a full narrated walkthrough an investor can watch on their
                  phone. Test multiple angles of the same story without rebooking
                  a studio — generate three openings, send the strongest.
                </p>
              </article>
              <article className="avp-card">
                <span className="avp-card-icon">📣</span>
                <h3>Sales Teams</h3>
                <p>
                  Replace the &ldquo;here are the slides&rdquo; follow-up email
                  with a short product demo video. Personalize the intro scene per
                  prospect, keep the core demo consistent, and let the clip do the
                  talking when you are not on the call.
                </p>
              </article>
              <article className="avp-card">
                <span className="avp-card-icon">📚</span>
                <h3>Trainers &amp; Educators</h3>
                <p>
                  Convert course slides into narrated video modules with a warm AI
                  voice. Localize the same module into multiple languages by
                  swapping only the voiceover, keeping every visual identical
                  across regions.
                </p>
              </article>
              <article className="avp-card">
                <span className="avp-card-icon">🎤</span>
                <h3>Webinar &amp; Event Hosts</h3>
                <p>
                  Build an animated opener that plays before the live session, or
                  turn a past webinar deck into an evergreen on-demand video that
                  keeps generating leads months after the event ended.
                </p>
              </article>
              <article className="avp-card">
                <span className="avp-card-icon">🏢</span>
                <h3>Corporate &amp; HR</h3>
                <p>
                  Produce onboarding, compliance, and policy videos from existing
                  decks without a production vendor. Update a single scene when a
                  policy changes instead of re-shooting the whole module.
                </p>
              </article>
              <article className="avp-card">
                <span className="avp-card-icon">📊</span>
                <h3>Marketers</h3>
                <p>
                  Repurpose a quarterly report or strategy deck into a tight,
                  shareable video for LinkedIn. Pull the three best stats, give
                  each a scene, and turn a 40-slide document into a 30-second hook.
                </p>
              </article>
            </div>
          </section>

          {/* ─────────────── HOW IT WORKS ─────────────── */}
          <section className="avp-section" id="how-it-works">
            <h2>How to Turn Your Deck into a Video — Step by Step</h2>
            <p className="avp-section-lead">
              The trick is to think in scenes, not slides. A 20-slide deck rarely
              needs 20 scenes — it needs five or six strong visual moments.
            </p>

            <ol className="avp-steps">
              <li className="avp-step">
                <span className="avp-step-num">1</span>
                <div>
                  <h3>Break the deck into scenes</h3>
                  <p>
                    Write the single message of each key slide as one line. Drop
                    the slides that exist only to bridge or transition. What
                    remains — usually five to seven core ideas — is your scene
                    list. This is the most important step; a tight scene list is
                    what separates a watchable video from a slideshow.
                  </p>
                </div>
              </li>
              <li className="avp-step">
                <span className="avp-step-num">2</span>
                <div>
                  <h3>Write a visual prompt for each scene</h3>
                  <p>
                    For every scene, describe what the viewer should <em>see</em>,
                    not what the slide <em>said</em>. &ldquo;Our revenue grew
                    3x&rdquo; becomes &ldquo;a glowing upward line chart rising
                    through a dark dashboard, camera slowly pushing in.&rdquo;
                    Specific nouns, lighting, and camera movement produce sharper
                    results than abstract concepts.
                  </p>
                </div>
              </li>
              <li className="avp-step">
                <span className="avp-step-num">3</span>
                <div>
                  <h3>Generate visuals and a voiceover</h3>
                  <p>
                    Render each scene in the{" "}
                    <Link href={CTA} className="avp-link">
                      Content Creator
                    </Link>
                    , choosing a 16:9 frame for desktop or 9:16 for feed clips.
                    Then write your narration and generate a matching voice track.
                    Keep the voice consistent across every scene so the video feels
                    like one production.
                  </p>
                </div>
              </li>
              <li className="avp-step">
                <span className="avp-step-num">4</span>
                <div>
                  <h3>Assemble, caption, and export</h3>
                  <p>
                    Sequence your scenes, lay the voiceover underneath, and{" "}
                    <Link
                      href="/tools/add-subtitles-to-videos"
                      className="avp-link"
                    >
                      add subtitles
                    </Link>{" "}
                    so the video works on mute in a feed. Export as MP4 and it is
                    ready for LinkedIn, YouTube, your LMS, or a client inbox.
                  </p>
                </div>
              </li>
            </ol>
          </section>

          {/* ─────────────── REAL EXAMPLES ─────────────── */}
          <section className="avp-section" id="examples">
            <h2>Real Examples by Platform</h2>
            <p className="avp-section-lead">
              The same source deck behaves differently on each channel. These are
              the patterns that tend to work.
            </p>

            <div className="avp-example">
              <div className="avp-example-tag">LinkedIn</div>
              <p>
                A founder takes a 30-slide fundraising deck and pulls only the
                problem, the traction stat, and the vision. Three scenes, 9:16,
                roughly 25 seconds, captioned, with a calm confident voiceover.
                It runs as a feed post that opens conversations the PDF never
                would — because most people will watch a 25-second video to the
                end but will not open an attachment.
              </p>
            </div>

            <div className="avp-example">
              <div className="avp-example-tag">YouTube</div>
              <p>
                A course creator converts a module deck into a 4-minute explainer:
                six visual scenes, a warm narrator, and on-screen subtitles. Unlike
                a screen recording of the slides, each concept gets its own
                animated moment, which keeps watch time high and the video
                surfacing in suggested feeds.
              </p>
            </div>

            <div className="avp-example">
              <div className="avp-example-tag">Sales email</div>
              <p>
                A rep records nothing. They generate a 40-second product demo from
                the standard sales deck, swap only the opening scene to name the
                prospect&rsquo;s industry, and embed it. The personalized intro
                plus consistent core demo lifts reply rates without the rep
                filming a single take.
              </p>
            </div>

            <div className="avp-example">
              <div className="avp-example-tag">Conference booth</div>
              <p>
                A marketing team turns the company overview deck into a silent,
                looping 1:1 video for a booth screen. Bold visuals, big on-screen
                text, no audio needed in a noisy hall. One generation session
                replaces a freelance motion-graphics invoice.
              </p>
            </div>
          </section>

          {/* ─────────────── BEST PRACTICES ─────────────── */}
          <section className="avp-section" id="best-practices">
            <h2>Best Practices for Presentation Videos</h2>
            <p>
              Lead with the strongest scene. In a live talk you can warm up the
              room; in a video the viewer decides within three seconds whether to
              keep watching. Put your most striking visual or your boldest claim
              first, and let the structure earn the rest of their attention.
            </p>
            <p>
              Keep one voice and one visual style across every scene. Mixing
              narrators or wildly different aesthetics between clips makes a video
              feel assembled rather than produced. Choose a voice and a look in
              the first scene and hold them all the way through — consistency is
              what reads as &ldquo;professional&rdquo; to a viewer who could not
              tell you why.
            </p>
            <p>
              Write narration for the ear, not the slide. The text on a slide is
              compressed and abbreviated; spoken narration should be full
              sentences with natural rhythm. Read your script aloud before
              generating the voiceover — if it sounds stiff when you say it, it
              will sound stiff in the video. Generate the audio first in the{" "}
              <Link href="/tools/ai-voice-generation" className="avp-link">
                voice tool
              </Link>{" "}
              and let the visual pacing follow the narration, not the other way
              around.
            </p>
            <p>
              Finally, design for silent playback. A large share of feed views
              happen on mute, so caption everything and make sure the visuals
              carry the message even with the sound off. A video that only works
              with audio loses most of its audience before they ever tap to
              unmute.
            </p>
          </section>

          {/* ─────────────── COMMON MISTAKES ─────────────── */}
          <section className="avp-section" id="mistakes">
            <h2>Common Mistakes to Avoid</h2>
            <p>
              The most frequent mistake is one-to-one slide conversion — trying to
              turn all 30 slides into 30 scenes. The result is long, repetitive,
              and exhausting. A presentation video is a distillation, not a
              transcription. If a slide existed only to hold the room while you
              talked, it does not need a scene.
            </p>
            <p>
              The second is prompting with slide titles instead of visual
              descriptions. A prompt like &ldquo;Q3 Results&rdquo; gives the model
              nothing to render. The model needs a picture: the subject, the
              setting, the lighting, the motion. Treat every prompt as a
              direction you would give a cinematographer, not a heading you would
              paste onto a slide.
            </p>
            <p>
              Third, creators often skip the voiceover and wonder why the video
              feels hollow. Visuals without narration are a music video missing
              the music — pretty, but unanchored. The voice is what carries the
              argument and gives the viewer something to follow. Even a short,
              simple narration transforms a sequence of clips into a presentation.
            </p>
            <p>
              The last common error is regenerating the entire video to fix one
              weak scene. Because you build scene by scene, you only need to
              regenerate the scene that missed — adjust that one prompt, render it
              again, and drop it back into the sequence. Treating the project as
              modular saves credits and time.
            </p>
          </section>

          {/* ─────────────── ADVANCED TIPS ─────────────── */}
          <section className="avp-section" id="advanced">
            <h2>Advanced Tips for Sharper Results</h2>
            <p>
              Specify camera movement explicitly. Phrases like &ldquo;slow push-in,&rdquo;
              &ldquo;orbit around the subject,&rdquo; or &ldquo;static wide
              shot&rdquo; give the model a sense of motion and energy that
              dramatically changes how a scene feels. A push-in builds tension for
              a reveal; a static wide shot reads as calm and authoritative. Match
              the movement to the emotional beat of that point in your deck.
            </p>
            <p>
              Build a visual through-line. Pick a recurring element — a color
              palette, a lighting style, a setting — and thread it through every
              prompt. If your brand is deep blue and gold, end each prompt with the
              same color and lighting cue so the scenes feel like chapters of one
              film rather than unrelated clips. This is the single biggest lever
              for making AI scenes look like a cohesive production.
            </p>
            <p>
              Use image-to-video for brand-critical scenes. When a scene must show
              your actual product or a specific layout, generate a still first with
              the{" "}
              <Link href="/tools/ai-image-generation" className="avp-link">
                AI image generator
              </Link>
              , get it exactly right, then animate that image into a video clip.
              Starting from a locked still gives you far more control than
              describing the product from scratch in a video prompt.
            </p>
            <p>
              And repurpose aggressively. Generate your core scenes once in 16:9,
              then produce a 9:16 cut for feeds and a 1:1 cut for booth loops from
              the same idea. One scene list can fan out into an entire campaign —
              a long explainer for YouTube, a teaser for LinkedIn, and a silent
              loop for events — without starting over.
            </p>
          </section>

          {/* ─────────────── COMPARISON ─────────────── */}
          <section className="avp-section" id="compare">
            <h2>AI Video vs the Old Way</h2>
            <div className="avp-compare-scroll">
              <table className="avp-compare-table">
                <thead>
                  <tr>
                    <th>Consideration</th>
                    <th className="avp-col-win">Scenith AI Video ✅</th>
                    <th>Hiring a Video Team</th>
                    <th>Screen-recording Slides</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Cost</td>
                    <td className="avp-col-win">Free to start, credits after</td>
                    <td>₹50,000+ per project</td>
                    <td>Free but flat and static</td>
                  </tr>
                  <tr>
                    <td>Turnaround</td>
                    <td className="avp-col-win">An afternoon</td>
                    <td>2–4 weeks</td>
                    <td>Minutes, low quality</td>
                  </tr>
                  <tr>
                    <td>Revisions</td>
                    <td className="avp-col-win">Regenerate one scene instantly</td>
                    <td>Billed per round</td>
                    <td>Re-record everything</td>
                  </tr>
                  <tr>
                    <td>Visual originality</td>
                    <td className="avp-col-win">Original cinematic scenes</td>
                    <td>High (if budget allows)</td>
                    <td>Just your slides</td>
                  </tr>
                  <tr>
                    <td>Voiceover</td>
                    <td className="avp-col-win">Built in, 20+ languages</td>
                    <td>Separate voice actor</td>
                    <td>Record yourself</td>
                  </tr>
                  <tr>
                    <td>Localization</td>
                    <td className="avp-col-win">Swap voice, keep visuals</td>
                    <td>Re-quote per language</td>
                    <td>Re-record per language</td>
                  </tr>
                  <tr>
                    <td>Commercial rights</td>
                    <td className="avp-col-win">Full, no watermark</td>
                    <td>Negotiated</td>
                    <td>Yours</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ─────────────── MID CTA ─────────────── */}
          <section className="avp-cta-band">
            <h2>Turn your next deck into a video</h2>
            <p>
              Open the generator with the video tab ready, drop in your first
              scene, and watch a slide become something people actually finish.
            </p>
            <Link href={CTA} className="avp-cta-band-btn">
              🎬 Open the AI Video Creator — Free
            </Link>
          </section>

          {/* ─────────────── FAQ ─────────────── */}
          <section className="avp-section" id="faq">
            <h2>Frequently Asked Questions</h2>
            <div className="avp-faq">
              {FAQS.map((f, i) => (
                <details key={i} className="avp-faq-item">
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* ─────────────── RELATED TOOLS ─────────────── */}
          <section className="avp-section" id="related">
            <h2>Keep Building</h2>
            <p className="avp-section-lead">
              A presentation video usually needs more than one tool. These pair
              naturally with this workflow.
            </p>
            <div className="avp-related-grid">
              <Link href={CTA} className="avp-related-card avp-related-primary">
                <span className="avp-related-icon">🎬</span>
                <strong>AI Content Creator</strong>
                <small>
                  Generate video, voice &amp; images in one place — the home base
                  for your presentation video.
                </small>
              </Link>
              <Link
                href="/tools/ai-voice-generation"
                className="avp-related-card"
              >
                <span className="avp-related-icon">🎙️</span>
                <strong>AI Voice Generator</strong>
                <small>40+ voices for your narration track.</small>
              </Link>
              <Link
                href="/tools/ai-image-generation"
                className="avp-related-card"
              >
                <span className="avp-related-icon">🖼️</span>
                <strong>AI Image Generator</strong>
                <small>Lock brand-critical stills before animating.</small>
              </Link>
              <Link
                href="/tools/add-subtitles-to-videos"
                className="avp-related-card"
              >
                <span className="avp-related-icon">💬</span>
                <strong>Add Subtitles</strong>
                <small>Caption for silent feed playback.</small>
              </Link>
              <Link
                href="/tools/ai-voice-generation-hindi"
                className="avp-related-card"
              >
                <span className="avp-related-icon">🇮🇳</span>
                <strong>Hindi Voice Generator</strong>
                <small>Localize training decks for Hindi audiences.</small>
              </Link>
              <Link href="/tools" className="avp-related-card">
                <span className="avp-related-icon">🧰</span>
                <strong>All Tools</strong>
                <small>Browse the full Scenith toolkit.</small>
              </Link>
            </div>
          </section>

          {/* ─────────────── FINAL CTA ─────────────── */}
          <section className="avp-final">
            <span className="avp-final-icon">🎬</span>
            <h2>Ready to make your slides watchable?</h2>
            <p>
              Start free — no credit card, no editing skills. Describe your first
              scene and let Scenith do the rest.
            </p>
            <Link href={CTA} className="avp-final-btn">
              Generate Your Presentation Video →
            </Link>
            <div className="avp-final-pills">
              <span>✅ Free credits on signup</span>
              <span>🎙️ Voiceover in 20+ languages</span>
              <span>📥 MP4 export</span>
              <span>💼 Commercial rights</span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}