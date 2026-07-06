import type { Metadata } from "next";
import Link from "next/link";
import "./styles.css";

const SLUG = "ai-product-demo-video-generator";
const CTA_VOICE = `/create-ai-content?tab=voice&utm_source=${SLUG}&utm_medium=cta&utm_campaign=seo`;
const CTA_VIDEO = `/create-ai-content?tab=video&utm_source=${SLUG}&utm_medium=cta&utm_campaign=seo`;
const CTA_IMAGE = `/create-ai-content?tab=image&utm_source=${SLUG}&utm_medium=cta&utm_campaign=seo`;

export const metadata: Metadata = {
  title: "AI Product Demo Video Generator — Turn Screenshots & Prompts Into Demo Videos",
  description:
    "Create a professional product demo video in minutes — no camera, no editor, no voice talent. Generate AI voiceover walkthroughs, animated product shots, and feature reels for SaaS, apps, and e-commerce listings, free to start.",
  keywords: [
    "ai product demo video generator",
    "product demo video maker",
    "saas demo video ai",
    "app demo video generator",
    "product walkthrough video ai",
    "ecommerce product video ai",
    "generate product video from screenshots",
  ],
  alternates: {
    canonical: `https://scenith.in/tools/${SLUG}`,
  },
  openGraph: {
    title: "AI Product Demo Video Generator — Free Demo Video Creator",
    description:
      "Turn a product screenshot, description, or script into a polished demo video with AI voiceover — no filming or editing required.",
    url: `https://scenith.in/tools/${SLUG}`,
    type: "website",
  },
};

const faqs = [
  {
    q: "What is an AI product demo video generator?",
    a: "An AI product demo video generator is a tool that helps you produce a walkthrough-style video of your product without filming, screen-recording narration separately, or hiring a video editor. You combine an AI voiceover script with either a screen recording, product image, or fully AI-generated b-roll, and the tool assembles a demo ready to publish on your landing page, app store listing, or YouTube channel.",
  },
  {
    q: "Can AI generate a video of my actual app or website UI?",
    a: "Not reliably — current AI video models cannot accurately reproduce legible interface text, buttons, or your exact product design. The correct workflow is to screen-record your real UI, then use AI for the voiceover narration, intro/outro b-roll, and any supporting product shots. Reserve fully AI-generated video for the emotional hook (opening shot, transitions) rather than the UI itself.",
  },
  {
    q: "How long should a product demo video be?",
    a: "For landing pages and app store previews, 30–60 seconds is the sweet spot — long enough to show 2–3 key features, short enough to hold attention. For YouTube or a sales enablement demo, 2–4 minutes is acceptable if you're walking through a full workflow. Anything past 5 minutes should be split into a chaptered series instead of one video.",
  },
  {
    q: "What's the difference between a product demo video and a landing page hero video?",
    a: "A hero video is short, abstract, and mood-driven — it exists to create atmosphere above the fold. A product demo video is longer, narrated, and functional — it exists to show what the product actually does and why someone should buy it. Many pages use both: a hero video at the top, and a full demo video further down or on a dedicated features page.",
  },
  {
    q: "Can I generate a demo video for an Amazon or Shopify listing?",
    a: "Yes. E-commerce demo videos typically combine AI-generated product b-roll (rotating shots, lifestyle context, macro detail shots) with an AI voiceover highlighting key benefits, then a short text-overlay call to action. Amazon supports video in the gallery for many categories, and Shopify themes generally support embedded MP4 or hosted video blocks.",
  },
  {
    q: "Do I need a script before generating the voiceover?",
    a: "Yes, and it should be tight. A good demo voiceover script follows a simple structure: hook (the problem), solution (what the product does), proof (a specific capability or number), and call to action. Write it out fully before generating — trying to improvise while recording almost always produces a rambling, unfocused demo.",
  },
  {
    q: "Can I use different voices for different sections of the demo?",
    a: "Yes. Many teams use one consistent narrator voice throughout for brand consistency, but some intentionally switch voices — for example, a warm narrator for the problem/solution intro and a more energetic voice for the call-to-action close. Generate each section separately and stitch them together in your video editor or timeline.",
  },
  {
    q: "Is a product demo video generated this way good enough for paid ads?",
    a: "Yes, with the right expectations. AI-generated b-roll and voiceover work very well for top-of-funnel ad creative where the goal is to stop the scroll and communicate one clear benefit. For bottom-of-funnel ads where viewers expect to see the real product in detail, pair AI b-roll with actual screen-recorded or photographed product footage for credibility.",
  },
];

export default function AiProductDemoVideoGeneratorPage() {
  return (
    <div className="pdv-page">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="pdv-breadcrumb">
        <ol itemScope itemType="https://schema.org/BreadcrumbList">
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <a href="/" itemProp="item"><span itemProp="name">Home</span></a>
            <meta itemProp="position" content="1" />
          </li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <a href="/tools" itemProp="item"><span itemProp="name">Tools</span></a>
            <meta itemProp="position" content="2" />
          </li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="name">AI Product Demo Video Generator</span>
            <meta itemProp="position" content="3" />
          </li>
        </ol>
      </nav>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebApplication",
                "@id": `https://scenith.in/tools/${SLUG}#webapp`,
                name: "Scenith AI Product Demo Video Generator",
                description:
                  "Create narrated product demo videos from a script and product images using AI voiceover and AI video generation. Built for SaaS, apps, and e-commerce.",
                url: `https://scenith.in/tools/${SLUG}`,
                applicationCategory: "MultimediaApplication",
                operatingSystem: "Web Browser",
                offers: {
                  "@type": "Offer",
                  price: "0",
                  priceCurrency: "USD",
                  availability: "https://schema.org/InStock",
                },
                featureList: [
                  "AI voiceover narration in 40+ voices",
                  "Text-to-video and image-to-video product b-roll",
                  "Multiple AI video models (Kling, Veo 3.1, Wan 2.5)",
                  "16:9, 9:16 and 1:1 export for every platform",
                  "Instant MP4 and MP3 download",
                  "Commercial use on paid plans",
                ],
              },
              {
                "@type": "FAQPage",
                "@id": `https://scenith.in/tools/${SLUG}#faq`,
                mainEntity: faqs.map((f) => ({
                  "@type": "Question",
                  name: f.q,
                  acceptedAnswer: { "@type": "Answer", text: f.a },
                })),
              },
              {
                "@type": "HowTo",
                name: "How to Generate an AI Product Demo Video",
                description:
                  "Step-by-step process for producing a narrated product demo video using AI voiceover and video generation.",
                step: [
                  { "@type": "HowToStep", position: 1, name: "Write a tight demo script", text: "Structure the script as hook, solution, proof, and call to action." },
                  { "@type": "HowToStep", position: 2, name: "Generate the voiceover", text: "Pick a voice and tone that matches your brand and generate the narration as MP3." },
                  { "@type": "HowToStep", position: 3, name: "Source your visuals", text: "Screen-record real UI where needed, and generate AI b-roll or image-to-video clips for everything else." },
                  { "@type": "HowToStep", position: 4, name: "Assemble the timeline", text: "Sync the voiceover to your visuals section by section, matching sentence beats to scene changes." },
                  { "@type": "HowToStep", position: 5, name: "Export for your platform", text: "Export 16:9 for YouTube and landing pages, 9:16 for app previews and Reels/TikTok." },
                ],
              },
            ],
          }),
        }}
      />

      {/* ============ HERO ============ */}
      <section className="pdv-hero">
        <div className="pdv-container">
          <div className="pdv-hero-badge">
            <span>🎬</span> AI Demo Videos for SaaS, Apps &amp; E-commerce
          </div>

          <h1 className="pdv-hero-title">
            AI Product Demo Video Generator
            <span className="pdv-hero-sub-title">Narrate, animate, and ship your demo without a camera crew</span>
          </h1>

          <p className="pdv-hero-desc">
            Stop paying $1,000+ for a 60-second explainer video. Write your script, generate a
            natural AI voiceover, and pair it with AI-generated product b-roll or your own
            screen recording — then export a polished demo for your landing page, App Store
            listing, YouTube channel, or Amazon gallery. Built for founders, product marketers,
            and solo teams who need to ship demos on a weekly cadence.
          </p>

          {/* Prompt box — plain GET form, no client JS required */}
          <form className="pdv-prompt-card" action="/create-ai-content" method="GET">
            <input type="hidden" name="tab" value="voice" />
            <input type="hidden" name="utm_source" value={SLUG} />
            <input type="hidden" name="utm_medium" value="prompt-box" />
            <input type="hidden" name="utm_campaign" value="seo" />

            <label htmlFor="pdv-prompt" className="pdv-prompt-label">
              Paste your demo script or describe your product
            </label>
            <textarea
              id="pdv-prompt"
              name="text"
              className="pdv-prompt-textarea"
              placeholder="e.g. Meet TaskFlow — the project tracker built for small teams. Create a task in two clicks, assign it instantly, and watch your team's progress update live. No spreadsheets. No standups. Just done."
              rows={3}
              maxLength={600}
            />
            <div className="pdv-prompt-footer">
              <span className="pdv-prompt-hint">
                Tip: write it as hook → solution → proof → call to action
              </span>
              <button type="submit" className="pdv-prompt-submit">
                🎙️ Generate My Demo Voiceover →
              </button>
            </div>
          </form>

          <div className="pdv-hero-trust">
            <span>✅ No signup to try</span>
            <span>✅ 40+ voiceover styles</span>
            <span>✅ Works with screen recordings</span>
            <span>✅ MP3 &amp; MP4 download</span>
          </div>
        </div>
      </section>

      {/* ============ WHAT IS IT ============ */}
      <section className="pdv-section">
        <div className="pdv-container pdv-narrow">
          <h2>What Is an AI Product Demo Video Generator?</h2>
          <p>
            An AI product demo video generator is not a single button that magically films your
            software — it's a workflow that removes the two most expensive parts of demo video
            production: hiring a voice actor and shooting supporting b-roll. You write the script
            once, generate a natural-sounding narration with an{" "}
            <Link href={CTA_VOICE}>AI voice generator</Link>, and either screen-record your actual
            product or generate supporting visuals with an{" "}
            <Link href={CTA_VIDEO}>AI video generator</Link> for anything that isn't your live UI —
            intros, transitions, lifestyle shots, or abstract product metaphors.
          </p>
          <p>
            This matters because most product demo videos fail for a production reason, not a
            content reason: the voiceover sounds flat, the pacing drags, or there's no b-roll to
            break up a static screen recording. Tools like Scenith give you access to 40+ voice
            styles and multiple AI video models — <strong>Kling 2.6 Pro</strong>,{" "}
            <strong>Veo 3.1</strong>, and <strong>Wan 2.5</strong> — so a solo founder can produce
            something that sounds and looks like it came from a small production team, in under
            30 minutes total.
          </p>
          <p>
            The output is a standard MP3 for narration and MP4 for any generated video clips —
            both drop directly into any editor (CapCut, DaVinci Resolve, Premiere) or directly
            into your website as an embedded video element. Nothing about your publishing pipeline
            changes; only how much time and money it takes to get there.
          </p>
        </div>
      </section>

      {/* ============ USE CASES ============ */}
      <section className="pdv-section pdv-alt">
        <div className="pdv-container pdv-narrow">
          <h2>Who Uses AI Product Demo Videos, and Why</h2>
          <p>
            Demo videos serve a very specific job: reduce the buyer's uncertainty about what
            they're about to get. Different audiences use them at different points in the funnel.
          </p>
          <ul className="pdv-list">
            <li>
              <strong>SaaS founders and product marketers</strong> use demo videos on landing
              pages and in cold outbound emails to replace a live sales call for early-stage
              prospects who aren't ready to book a demo yet.
            </li>
            <li>
              <strong>Mobile app developers</strong> use short vertical demo videos for their App
              Store and Google Play preview slots, where Apple and Google both show video before
              screenshots if one is uploaded — and video previews measurably increase install
              conversion.
            </li>
            <li>
              <strong>E-commerce sellers</strong> use product demo videos in their Amazon,
              Shopify, or Etsy listings to show the product in use, which reduces return rates
              because buyers arrive with more accurate expectations.
            </li>
            <li>
              <strong>Course creators and coaches</strong> use demo-style walkthroughs of their
              course platform or community to show prospective students exactly what they're
              paying for before checkout.
            </li>
            <li>
              <strong>Agencies</strong> use this workflow to produce demo videos for multiple
              clients per week without hiring a dedicated voice-over artist or motion designer for
              every project.
            </li>
          </ul>
        </div>
      </section>

      {/* ============ REAL EXAMPLES ============ */}
      <section className="pdv-section">
        <div className="pdv-container">
          <h2>Real Examples by Platform</h2>
          <p className="pdv-section-intro">
            The right format, length, and script structure changes significantly depending on
            where the video will actually be watched.
          </p>

          <div className="pdv-example-grid">
            <article className="pdv-example-card">
              <span className="pdv-example-icon">💻</span>
              <h3>SaaS Landing Page Demo (16:9, 60–90s)</h3>
              <p>
                Screen-recorded product walkthrough narrated by an AI voice, opening with a
                10-second AI-generated abstract intro shot before cutting to the real UI.
              </p>
              <div className="pdv-example-prompt">
                Script beat: "Most teams lose an hour a day chasing status updates. TaskFlow
                fixes that — here's how it works." [cut to screen recording]
              </div>
            </article>

            <article className="pdv-example-card">
              <span className="pdv-example-icon">📱</span>
              <h3>App Store Preview (9:16, 15–30s)</h3>
              <p>
                Vertical screen recording of the app's core flow, trimmed to the single most
                impressive feature, with fast-paced AI voiceover and on-screen captions since
                many viewers watch muted.
              </p>
              <div className="pdv-example-prompt">
                Script beat: "Track your workouts in one tap. See your progress instantly. That's
                it — that's the whole app."
              </div>
            </article>

            <article className="pdv-example-card">
              <span className="pdv-example-icon">🛒</span>
              <h3>Amazon / Shopify Listing (1:1 or 16:9, 20–40s)</h3>
              <p>
                AI-generated rotating product shots and lifestyle b-roll, layered with a benefit-
                focused voiceover and closing text overlay with a clear price or offer.
              </p>
              <div className="pdv-example-prompt">
                Prompt for b-roll: "Slow rotating shot of a stainless steel water bottle on a
                marble countertop, condensation droplets, soft natural light, product photography
                style"
              </div>
            </article>

            <article className="pdv-example-card">
              <span className="pdv-example-icon">📺</span>
              <h3>YouTube Full Demo (16:9, 2–4 min)</h3>
              <p>
                Longer chaptered walkthrough covering 3–5 features, each introduced with a short
                AI-narrated transition line before cutting into a real screen recording of that
                feature.
              </p>
              <div className="pdv-example-prompt">
                Script beat: "Next, let's look at automated reporting — this alone saves our
                customers about four hours a week."
              </div>
            </article>

            <article className="pdv-example-card">
              <span className="pdv-example-icon">📣</span>
              <h3>Paid Social Ad (9:16, 8–15s)</h3>
              <p>
                Fast-cut AI b-roll with a punchy, high-energy voiceover hook in the first two
                seconds — built to stop the scroll before the viewer has a chance to skip.
              </p>
              <div className="pdv-example-prompt">
                Script beat: "You're still doing this manually? There's a faster way." [cut to
                product shot]
              </div>
            </article>

            <article className="pdv-example-card">
              <span className="pdv-example-icon">🤝</span>
              <h3>Sales Enablement / Cold Outreach (16:9, 45–75s)</h3>
              <p>
                Calm, professional narrator voice paired with a screen recording sent as a
                personalized async video attached to a cold email or LinkedIn message.
              </p>
              <div className="pdv-example-prompt">
                Script beat: "Hi — I put together a 60-second walkthrough of how this would work
                for a team your size."
              </div>
            </article>
          </div>

          <p className="pdv-example-footnote">
            Need supporting product shots to go with your demo? Generate them with the{" "}
            <Link href={CTA_IMAGE}>AI image generator</Link> — useful for App Store screenshots,
            thumbnail frames, and static backups of your video content.
          </p>
        </div>
      </section>

      {/* ============ HOW TO ============ */}
      <section className="pdv-section pdv-alt">
        <div className="pdv-container pdv-narrow">
          <h2>How to Generate a Product Demo Video, Step by Step</h2>

          <div className="pdv-steps">
            <div className="pdv-step">
              <span className="pdv-step-num">1</span>
              <div>
                <h3>Write a tight script before generating anything</h3>
                <p>
                  Structure it as hook (the problem), solution (what your product does), proof
                  (a specific number, feature, or outcome), and call to action. Read it out loud
                  once — if it takes longer than your target video length to say naturally, cut
                  it down before generating.
                </p>
              </div>
            </div>
            <div className="pdv-step">
              <span className="pdv-step-num">2</span>
              <div>
                <h3>Generate the voiceover first, not last</h3>
                <p>
                  Generate your narration with the{" "}
                  <Link href={CTA_VOICE}>AI voice generator</Link> before recording or gathering
                  any visuals. The final audio length tells you exactly how much footage you need
                  to fill, which prevents the common mistake of cutting a great voiceover down to
                  fit a video that's already been edited.
                </p>
              </div>
            </div>
            <div className="pdv-step">
              <span className="pdv-step-num">3</span>
              <div>
                <h3>Screen-record your real product for the core walkthrough</h3>
                <p>
                  For any section that shows your actual interface, use a real screen recording —
                  AI video models cannot reliably reproduce legible UI text. Keep the recording
                  clean: close unrelated tabs, hide notifications, and move the cursor
                  deliberately rather than erratically.
                </p>
              </div>
            </div>
            <div className="pdv-step">
              <span className="pdv-step-num">4</span>
              <div>
                <h3>Fill the gaps with AI-generated b-roll</h3>
                <p>
                  For intros, transitions, and any section that isn't your live UI — lifestyle
                  shots, abstract metaphors, product photography — generate clips with the{" "}
                  <Link href={CTA_VIDEO}>AI video generator</Link>. This is where most of the
                  "production value" of the final demo actually comes from.
                </p>
              </div>
            </div>
            <div className="pdv-step">
              <span className="pdv-step-num">5</span>
              <div>
                <h3>Assemble, sync, and export for your platform</h3>
                <p>
                  Line up your voiceover against the visuals section by section — each sentence
                  beat should roughly match a scene or feature change. Export 16:9 for YouTube and
                  landing pages, 9:16 for App Store previews and Reels/TikTok, and 1:1 for
                  Instagram feed or Amazon listings.
                </p>
              </div>
            </div>
          </div>

          <div className="pdv-inline-cta">
            <Link href={CTA_VOICE} className="pdv-inline-cta-btn">
              🎙️ Generate My Demo Voiceover — Free →
            </Link>
          </div>
        </div>
      </section>

      {/* ============ BEST PRACTICES ============ */}
      <section className="pdv-section">
        <div className="pdv-container pdv-narrow">
          <h2>Best Practices for Product Demo Videos</h2>
          <div className="pdv-practice-grid">
            <div className="pdv-practice-card">
              <h3>🪝 Front-load the hook</h3>
              <p>
                State the problem your product solves in the first five seconds. Viewers decide
                whether to keep watching almost immediately — don't spend the opening on your
                logo or a generic intro animation.
              </p>
            </div>
            <div className="pdv-practice-card">
              <h3>🎯 Show one feature per section</h3>
              <p>
                Resist the urge to cram every feature into one demo. Pick the 2–3 capabilities
                that best differentiate you, show each one clearly, and save the rest for a
                second video or your documentation.
              </p>
            </div>
            <div className="pdv-practice-card">
              <h3>🔊 Design for sound-off viewing</h3>
              <p>
                A large share of social and mobile viewers watch muted by default. Add captions or
                on-screen text summarizing each key line so the demo still communicates value
                without audio.
              </p>
            </div>
            <div className="pdv-practice-card">
              <h3>🗣️ Match voice tone to your brand</h3>
              <p>
                A playful consumer app and an enterprise B2B tool need different narrator energy.
                Preview multiple voice styles before committing — the wrong tone can undercut an
                otherwise strong script.
              </p>
            </div>
            <div className="pdv-practice-card">
              <h3>📐 Cut dead air and long pauses</h3>
              <p>
                Screen recordings often include several seconds of clicking around before the
                actual action. Trim aggressively — a demo should feel like it's always moving
                toward the next payoff.
              </p>
            </div>
            <div className="pdv-practice-card">
              <h3>📣 End with one specific call to action</h3>
              <p>
                "Try it free," "Book a demo," or "Download now" — pick exactly one. A demo that
                closes with three competing CTAs converts worse than one with a single clear next
                step.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ MISTAKES ============ */}
      <section className="pdv-section pdv-alt">
        <div className="pdv-container pdv-narrow">
          <h2>Common Mistakes to Avoid</h2>
          <ul className="pdv-mistake-list">
            <li>
              <strong>Trying to generate the entire UI with AI video.</strong> Current models
              can't render your actual product accurately. Use AI for everything except the real
              interface, and screen-record the rest.
            </li>
            <li>
              <strong>Writing the script while recording.</strong> Unscripted demos ramble, repeat
              filler words, and run too long. Write and revise the script fully before you
              generate the voiceover or start recording.
            </li>
            <li>
              <strong>Ignoring platform-specific length norms.</strong> A 3-minute video uploaded
              as an App Store preview will get cut off or ignored; a 10-second clip on a YouTube
              features page will feel thin. Match the format to the platform.
            </li>
            <li>
              <strong>Using a monotone or mismatched voice.</strong> Preview at least 2–3 voice
              options against your actual script before finalizing — the same script can land
              very differently depending on delivery style.
            </li>
            <li>
              <strong>Skipping captions.</strong> Especially for social and mobile placements,
              a demo with no on-screen text will lose most muted viewers within the first few
              seconds.
            </li>
            <li>
              <strong>No clear single CTA.</strong> Ending on "check out our website, follow us,
              and sign up" gives viewers three ways to do nothing. Pick one action and repeat it
              once, clearly.
            </li>
          </ul>
        </div>
      </section>

      {/* ============ ADVANCED TIPS ============ */}
      <section className="pdv-section">
        <div className="pdv-container pdv-narrow">
          <h2>Advanced Tips for Better Demo Videos</h2>
          <p>
            Once the basic workflow is working, a few refinements noticeably raise the perceived
            production quality of your demo videos.
          </p>
          <p>
            <strong>Record multiple voiceover takes with different pacing.</strong> Generate the
            same script at slightly different pacing or emphasis and see which version feels
            better synced to your visuals — a script that reads well doesn't always sound best at
            a single fixed pace.
          </p>
          <p>
            <strong>Use AI-generated b-roll to mask editing seams.</strong> A one-second
            AI-generated transition clip (a soft light flare, a drifting particle field) between
            two screen-recording cuts hides jump cuts far better than a hard cut or a generic
            fade.
          </p>
          <p>
            <strong>Localize your demo for different markets.</strong> Because the script and
            voiceover are separate from the visuals, you can generate the same demo in multiple
            languages — including a{" "}
            <Link href="/tools/hindi-female-ai-voice-generation">Hindi voiceover</Link> for
            Indian audiences — without re-recording any screen capture.
          </p>
          <p>
            <strong>Build a reusable intro/outro template.</strong> Generate one strong 3–5 second
            AI intro clip and outro card once, then reuse it across every demo video you produce.
            This creates brand consistency across your video library without extra generation
            cost each time.
          </p>
          <p>
            <strong>Repurpose long demos into short clips.</strong> A 3-minute YouTube demo
            usually contains 3–4 standalone 15-second clips that work independently as social
            posts. Cut and re-caption each section rather than treating the full demo as your only
            deliverable.
          </p>
        </div>
      </section>

      {/* ============ RELATED TOOLS / INTERNAL LINKS ============ */}
      <section className="pdv-section pdv-alt">
        <div className="pdv-container">
          <h2>Related Tools to Finish Your Demo Video</h2>
          <p className="pdv-section-intro">
            A great demo rarely comes from one tool alone. These work together from the same
            credit balance.
          </p>
          <div className="pdv-related-grid">
            <Link href={CTA_VOICE} className="pdv-related-card">
              <span>🎙️</span>
              <h3>AI Voice Generator</h3>
              <p>Generate the full narration script in 40+ natural voices.</p>
            </Link>
            <Link href={CTA_VIDEO} className="pdv-related-card">
              <span>🎬</span>
              <h3>AI Video Generator</h3>
              <p>Create supporting b-roll, intros, and lifestyle shots.</p>
            </Link>
            <Link href={CTA_IMAGE} className="pdv-related-card">
              <span>🖼️</span>
              <h3>AI Image Generator</h3>
              <p>Produce App Store screenshots, thumbnails, and static backups.</p>
            </Link>
            <Link href="/tools/ai-landing-page-video-generator" className="pdv-related-card">
              <span>🖥️</span>
              <h3>Landing Page Video Generator</h3>
              <p>Pair your demo with a matching hero video for the page above it.</p>
            </Link>
            <Link href="/tools/image-editing" className="pdv-related-card">
              <span>🎨</span>
              <h3>Image Editor</h3>
              <p>Prep thumbnail frames and annotate product screenshots.</p>
            </Link>
            <Link href="/tools/background-removal" className="pdv-related-card">
              <span>✂️</span>
              <h3>Background Remover</h3>
              <p>Clean up product photos before turning them into video b-roll.</p>
            </Link>
            <Link href="/tools/video-speed-modifier" className="pdv-related-card">
              <span>⚡</span>
              <h3>Video Speed Modifier</h3>
              <p>Tighten pacing on screen recordings before adding voiceover.</p>
            </Link>
            <Link href="/tools/pdf-tools" className="pdv-related-card">
              <span>📄</span>
              <h3>PDF Tools Suite</h3>
              <p>Turn your demo script or one-pager into a leave-behind PDF.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="pdv-section">
        <div className="pdv-container pdv-narrow">
          <h2>Frequently Asked Questions</h2>
          <div className="pdv-faq-list">
            {faqs.map((f) => (
              <details key={f.q} className="pdv-faq-item">
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="pdv-final-cta">
        <div className="pdv-container pdv-narrow">
          <h2>Your Product Deserves a Demo That Actually Converts</h2>
          <p>
            Write the script, generate the voice, and let AI fill in the rest — a demo video
            that used to take a week now takes an afternoon.
          </p>
          <div className="pdv-final-cta-buttons">
            <Link href={CTA_VOICE} className="pdv-final-cta-primary">
              🎙️ Generate My Demo Video — Free
            </Link>
            <Link href="/create-ai-content" className="pdv-final-cta-secondary">
              Explore All AI Tools →
            </Link>
          </div>
          <p className="pdv-final-footnote">
            Also explore:{" "}
            <Link href={CTA_VIDEO}>AI Video Generation</Link> ·{" "}
            <Link href={CTA_IMAGE}>AI Image Generator</Link> ·{" "}
            <Link href="/tools/ai-landing-page-video-generator">Landing Page Video Generator</Link>
          </p>
        </div>
      </section>
    </div>
  );
}