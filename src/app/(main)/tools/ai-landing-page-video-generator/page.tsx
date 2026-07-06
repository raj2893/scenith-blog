import type { Metadata } from "next";
import Link from "next/link";
import "./styles.css";

const SLUG = "ai-landing-page-video-generator";
const CTA_BASE = `/create-ai-content?tab=video&utm_source=${SLUG}&utm_medium=cta&utm_campaign=seo`;
const CTA_VOICE = `/create-ai-content?tab=voice&utm_source=${SLUG}&utm_medium=cta&utm_campaign=seo`;

export const metadata: Metadata = {
  title: "AI Landing Page Video Generator — Turn Any Hero Section Into a Video (Free)",
  description:
    "Generate a cinematic hero video for your landing page in minutes. No filming, no editing, no stock footage. Type a prompt, pick a style, and get a scroll-stopping video for your SaaS, product, or agency site — free to start.",
  keywords: [
    "ai landing page video generator",
    "hero video generator",
    "saas landing page video",
    "product video generator ai",
    "landing page background video ai",
    "ai video for website",
    "generate hero video for website",
  ],
  alternates: {
    canonical: `https://scenith.in/tools/${SLUG}`,
  },
  openGraph: {
    title: "AI Landing Page Video Generator — Free Hero Video Creator",
    description:
      "Create a cinematic AI-generated hero video for your landing page in minutes. No camera, no editor, no stock footage license fees.",
    url: `https://scenith.in/tools/${SLUG}`,
    type: "website",
  },
};

const faqs = [
  {
    q: "What is an AI landing page video generator?",
    a: "An AI landing page video generator is a tool that turns a short text description into a finished video clip you can embed as your hero section, background loop, or above-the-fold visual. Instead of hiring a videographer or licensing stock footage, you describe the scene — product, mood, camera movement — and the AI model renders a cinematic clip in under two minutes.",
  },
  {
    q: "Do I need video editing skills to use this?",
    a: "No. You don't need editing software, a camera, or motion design experience. You write a plain-language prompt describing what you want the video to show, choose an aspect ratio and duration, and the AI models (Kling, Veo 3.1, Wan 2.5, and others) generate the clip. You download an MP4 and drop it straight into your site.",
  },
  {
    q: "What video length works best for a landing page hero section?",
    a: "Most high-converting hero videos loop between 4 and 8 seconds. Anything longer increases page weight and slows first paint, which hurts both conversion and Core Web Vitals. If you need a longer narrative piece for a product page or ad, 10–15 seconds is the practical ceiling before you should switch to a proper explainer video.",
  },
  {
    q: "Will an AI-generated video hurt my page load speed?",
    a: "It can if you embed it carelessly. Always compress the output, serve it muted and looped via the HTML5 video tag (not an iframe), lazy-load it below the fold if it's not the primary hero asset, and provide a poster image so the layout doesn't shift while the video buffers. A well-optimized 5-second 1080p clip is typically under 3MB.",
  },
  {
    q: "Can I use AI video for a SaaS product demo instead of screen recording?",
    a: "AI video is best for mood, atmosphere, and abstract product metaphors — not for showing your actual UI. For real product demos, screen-record your interface and use an AI voiceover to narrate it. Use AI-generated video for the emotional hook above the fold, then transition into a real product screenshot or recorded demo further down the page.",
  },
  {
    q: "Is the video free to use commercially on my website?",
    a: "Yes, content generated on paid Scenith plans comes with full commercial usage rights, so you can use it on client sites, product pages, and paid ad campaigns without attribution. Check the current plan details on the pricing page before publishing client work.",
  },
  {
    q: "What's the difference between a hero video and a background video?",
    a: "A hero video is typically shown at a fixed size near your headline and CTA, often with subtle motion that supports the message. A background video fills the entire viewport behind your text and is usually more abstract, darker, and heavily overlaid so text stays readable. Both can be generated the same way — the difference is in cropping, contrast, and how you layer content on top.",
  },
  {
    q: "Can I generate multiple video variations to A/B test on my landing page?",
    a: "Yes, and you should. Because generation takes under two minutes per clip, it's practical to create 3–4 variations with different moods, camera angles, or pacing, then run them as an A/B test using your analytics tool. Many teams find that subtle differences in motion speed or color grading measurably change scroll depth and CTA click-through.",
  },
];

export default function AiLandingPageVideoGeneratorPage() {
  return (
    <div className="lpv-page">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="lpv-breadcrumb">
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
            <span itemProp="name">AI Landing Page Video Generator</span>
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
                name: "Scenith AI Landing Page Video Generator",
                description:
                  "Generate cinematic hero and background videos for landing pages from a text prompt. Powered by Kling, Veo 3.1, and Wan 2.5.",
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
                  "Text-to-video hero generation",
                  "Multiple AI video models (Kling, Veo 3.1, Wan 2.5)",
                  "16:9, 9:16 and 1:1 aspect ratios",
                  "Instant MP4 download",
                  "Commercial use on paid plans",
                  "No watermark",
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
                name: "How to Generate an AI Video for Your Landing Page",
                description:
                  "Step-by-step process for creating a hero or background video for a landing page using AI.",
                step: [
                  { "@type": "HowToStep", position: 1, name: "Define the emotional goal of your hero section", text: "Decide what feeling the video should create before writing a prompt." },
                  { "@type": "HowToStep", position: 2, name: "Write a scene-based prompt", text: "Describe camera movement, subject, lighting and mood in plain language." },
                  { "@type": "HowToStep", position: 3, name: "Choose model, duration and aspect ratio", text: "Pick 16:9 for desktop hero sections or 9:16 for mobile-first pages." },
                  { "@type": "HowToStep", position: 4, name: "Generate and review", text: "Generate 2-3 variations and compare which best supports your headline." },
                  { "@type": "HowToStep", position: 5, name: "Optimize and embed", text: "Compress the MP4, add a poster frame, and embed it muted and looped." },
                ],
              },
            ],
          }),
        }}
      />

      {/* ============ HERO ============ */}
      <section className="lpv-hero">
        <div className="lpv-container">
          <div className="lpv-hero-badge">
            <span>🎬</span> AI Video for Websites &amp; Landing Pages
          </div>

          <h1 className="lpv-hero-title">
            AI Landing Page Video Generator
            <span className="lpv-hero-sub-title">Turn a text prompt into a scroll-stopping hero video</span>
          </h1>

          <p className="lpv-hero-desc">
            Stop paying $2,000+ for a 6-second stock hero clip. Describe the scene you want —
            product, mood, camera movement — and get a cinematic, loop-ready video for your
            landing page's hero section, pricing page, or ad creative in under two minutes.
            Built for founders, marketers, and agencies who ship landing pages every week.
          </p>

          {/* Prompt box — plain GET form, no client JS required */}
          <form className="lpv-prompt-card" action="/create-ai-content" method="GET">
            <input type="hidden" name="tab" value="video" />
            <input type="hidden" name="aspect" value="16:9" />
            <input type="hidden" name="duration" value="5" />
            <input type="hidden" name="utm_source" value={SLUG} />
            <input type="hidden" name="utm_medium" value="prompt-box" />
            <input type="hidden" name="utm_campaign" value="seo" />

            <label htmlFor="lpv-prompt" className="lpv-prompt-label">
              Describe your landing page hero video
            </label>
            <textarea
              id="lpv-prompt"
              name="text"
              className="lpv-prompt-textarea"
              placeholder="e.g. Slow cinematic zoom on a floating glass dashboard UI above a minimalist desk, soft morning light, subtle particles drifting, premium SaaS aesthetic"
              rows={3}
              maxLength={600}
            />
            <div className="lpv-prompt-footer">
              <span className="lpv-prompt-hint">
                Tip: mention camera movement + mood + subject for the best results
              </span>
              <button type="submit" className="lpv-prompt-submit">
                🎬 Generate My Hero Video →
              </button>
            </div>
          </form>

          <div className="lpv-hero-trust">
            <span>✅ No signup to try</span>
            <span>✅ 16:9 · 9:16 · 1:1 ready</span>
            <span>✅ Commercial use on paid plans</span>
            <span>✅ MP4 download</span>
          </div>
        </div>
      </section>

      {/* ============ WHAT IS IT ============ */}
      <section className="lpv-section">
        <div className="lpv-container lpv-narrow">
          <h2>What Is an AI Landing Page Video Generator?</h2>
          <p>
            An AI landing page video generator converts a short written description into a rendered
            video clip designed specifically for the constraints of a modern landing page: short
            duration, loopable, lightweight, and visually attention-grabbing without a narrative arc.
            Unlike a full production video — which needs a script, a shoot, and an edit — a landing
            page video is closer to a moving photograph. It exists to create atmosphere and hold
            attention for the 2–4 seconds it takes a visitor to read your headline.
          </p>
          <p>
            Under the hood, tools like Scenith's{" "}
            <Link href={CTA_BASE}>AI video generator</Link> route your prompt to models such as{" "}
            <strong>Kling 2.6 Pro</strong>, <strong>Veo 3.1</strong>, and <strong>Wan 2.5</strong> —
            the same class of diffusion-based video models used by production studios. Each model
            has different strengths: Wan 2.5 is fast and affordable for quick iteration, Kling
            renders strong cinematic motion and lighting, and Veo 3.1 produces the most photorealistic
            output when your hero section needs to look almost like real footage.
          </p>
          <p>
            The output is a standard MP4 file, which means it works exactly like any stock or
            self-shot video: drop it into an HTML5 <code>&lt;video&gt;</code> tag, a Framer or Webflow
            background video block, or a React hero component. Nothing about your stack has to
            change — only where the footage comes from.
          </p>
        </div>
      </section>

      {/* ============ WHY VIDEO CONVERTS ============ */}
      <section className="lpv-section lpv-alt">
        <div className="lpv-container lpv-narrow">
          <h2>Why Video Outperforms Static Hero Images</h2>
          <p>
            A static hero image communicates a single frozen idea. Motion communicates energy,
            quality, and modernity before a visitor reads a single word — which matters because
            most landing page visitors decide whether to keep scrolling within the first three
            seconds. A well-produced hero video does three things a static image cannot:
          </p>
          <ul className="lpv-list">
            <li>
              <strong>It signals production quality instantly.</strong> Visitors subconsciously
              associate smooth motion with a more established, better-funded product — even when
              the rest of the page is simple.
            </li>
            <li>
              <strong>It creates a focal point that guides the eye.</strong> Subtle camera movement
              (a slow zoom, a drifting particle field, a rotating 3D object) naturally pulls
              attention toward your headline and CTA without you needing an animation library.
            </li>
            <li>
              <strong>It differentiates you from template-based competitors.</strong> Thousands of
              SaaS landing pages use the same three stock photos. A custom-generated video, unique
              to your prompt, immediately looks less templated.
            </li>
          </ul>
          <p>
            The tradeoff is cost and speed. A single custom-shot hero video from a production
            agency commonly runs $1,500–$5,000 and takes 1–3 weeks. Licensed stock video that
            actually matches your brand is hard to find and often looks generic. An AI landing
            page video generator collapses that timeline to minutes and the cost to a handful of
            credits, which is why it has become the default choice for early-stage SaaS and
            solo-founder landing pages in 2026.
          </p>
        </div>
      </section>

      {/* ============ REAL EXAMPLES ============ */}
      <section className="lpv-section">
        <div className="lpv-container">
          <h2>Real Examples by Platform &amp; Use Case</h2>
          <p className="lpv-section-intro">
            The right prompt depends entirely on what kind of page you're building. Here's how
            different teams actually use AI-generated video across landing pages, product pages,
            and paid ad creative.
          </p>

          <div className="lpv-example-grid">
            <article className="lpv-example-card">
              <span className="lpv-example-icon">🧑‍💻</span>
              <h3>SaaS Product Landing Page</h3>
              <p>
                Abstract, ambient motion behind a dashboard mockup — think floating UI panels,
                soft gradients, and subtle light rays. The goal is atmosphere, not literal product
                demonstration.
              </p>
              <div className="lpv-example-prompt">
                "Slow orbit around a glowing holographic dashboard interface, dark navy background,
                soft blue rim light, minimal particles, premium tech aesthetic"
              </div>
            </article>

            <article className="lpv-example-card">
              <span className="lpv-example-icon">🛍️</span>
              <h3>E-commerce / D2C Hero</h3>
              <p>
                Product-adjacent lifestyle motion — steam rising from a coffee cup, fabric
                rippling in slow motion, packaging rotating under studio light. Sells the feeling
                of owning the product.
              </p>
              <div className="lpv-example-prompt">
                "Macro slow-motion shot of a skincare bottle rotating on a marble surface, warm
                golden hour light, soft bokeh background, editorial product photography style"
              </div>
            </article>

            <article className="lpv-example-card">
              <span className="lpv-example-icon">🏢</span>
              <h3>Agency / Portfolio Site</h3>
              <p>
                Cinematic city or studio footage that establishes brand tone before any copy loads.
                Works well as a full-bleed background video behind a bold headline.
              </p>
              <div className="lpv-example-prompt">
                "Aerial drone shot slowly descending over a modern glass office building at dusk,
                warm interior lights turning on, cinematic wide angle, 4K"
              </div>
            </article>

            <article className="lpv-example-card">
              <span className="lpv-example-icon">📚</span>
              <h3>Course / Cohort Launch Page</h3>
              <p>
                Warm, human-feeling motion — a desk, notebook, and coffee, or hands typing —
                that signals learning and progress without needing real footage of the instructor.
              </p>
              <div className="lpv-example-prompt">
                "Overhead shot of hands writing in a notebook next to a laptop, warm natural light
                from a window, shallow depth of field, cozy productive atmosphere"
              </div>
            </article>

            <article className="lpv-example-card">
              <span className="lpv-example-icon">📱</span>
              <h3>Mobile App Landing Page (9:16)</h3>
              <p>
                Vertical-first motion designed for phone mockups and App Store style pages, often
                paired with a floating phone frame overlay added afterward in your design tool.
              </p>
              <div className="lpv-example-prompt">
                "Vertical shot of a smartphone floating and slowly rotating against a soft gradient
                background, subtle glow, clean minimal product photography style"
              </div>
            </article>

            <article className="lpv-example-card">
              <span className="lpv-example-icon">📣</span>
              <h3>Paid Ad Landing Page</h3>
              <p>
                Faster-paced, higher-contrast motion built to stop the scroll in the first second —
                these pages tolerate more energy than a calm SaaS hero.
              </p>
              <div className="lpv-example-prompt">
                "Fast dynamic zoom through abstract geometric shapes in brand colors, high contrast
                lighting, energetic motion graphics style, bold and modern"
              </div>
            </article>
          </div>

          <p className="lpv-example-footnote">
            Need the exact voice to narrate any of these pages too? Pair your video with a
            matching <Link href={CTA_VOICE}>AI voiceover</Link> — the same prompt-to-output workflow
            applies to both.
          </p>
        </div>
      </section>

      {/* ============ HOW TO ============ */}
      <section className="lpv-section lpv-alt">
        <div className="lpv-container lpv-narrow">
          <h2>How to Generate a Landing Page Video, Step by Step</h2>

          <div className="lpv-steps">
            <div className="lpv-step">
              <span className="lpv-step-num">1</span>
              <div>
                <h3>Define the emotional goal before writing a prompt</h3>
                <p>
                  Before you type anything, decide what the video needs to make a visitor feel in
                  under two seconds: trustworthy and premium (SaaS), warm and human (education),
                  or bold and urgent (ad creative). Every other decision — color, pacing, camera
                  movement — flows from this single choice.
                </p>
              </div>
            </div>
            <div className="lpv-step">
              <span className="lpv-step-num">2</span>
              <div>
                <h3>Write a scene-based prompt, not a keyword list</h3>
                <p>
                  The best prompts read like a director's shot description: subject, camera
                  movement, lighting, and mood, in that order. "Slow zoom on a glass orb floating
                  above a desk, soft blue light, minimal shadows" outperforms "3D orb tech
                  futuristic blue" every time.
                </p>
              </div>
            </div>
            <div className="lpv-step">
              <span className="lpv-step-num">3</span>
              <div>
                <h3>Pick the right model, duration, and aspect ratio</h3>
                <p>
                  Use 16:9 for desktop-first hero sections, 9:16 for mobile app pages, and 1:1 for
                  embedded social proof clips. For a quick first pass, a faster model like Wan 2.5
                  is enough — reserve Veo 3.1 or Kling 2.6 Pro for your final, polished version.
                </p>
              </div>
            </div>
            <div className="lpv-step">
              <span className="lpv-step-num">4</span>
              <div>
                <h3>Generate 2–3 variations and compare against your headline</h3>
                <p>
                  Because generation only takes about a minute, always create a few variations with
                  slightly different pacing or framing. View each one behind your actual headline
                  and CTA text before deciding — a video that looks great alone can still clash
                  with your copy's contrast or placement.
                </p>
              </div>
            </div>
            <div className="lpv-step">
              <span className="lpv-step-num">5</span>
              <div>
                <h3>Optimize and embed correctly</h3>
                <p>
                  Compress the final MP4, export or crop a still frame to use as a poster image so
                  there's no blank flash while it loads, and embed it with{" "}
                  <code>autoplay muted loop playsInline</code>. Never rely on an iframe embed for a
                  background video — it adds unnecessary load weight and breaks on some mobile
                  browsers.
                </p>
              </div>
            </div>
          </div>

          <div className="lpv-inline-cta">
            <Link href={CTA_BASE} className="lpv-inline-cta-btn">
              🎬 Start Generating — Free →
            </Link>
          </div>
        </div>
      </section>

      {/* ============ BEST PRACTICES ============ */}
      <section className="lpv-section">
        <div className="lpv-container lpv-narrow">
          <h2>Best Practices for Landing Page Video</h2>
          <div className="lpv-practice-grid">
            <div className="lpv-practice-card">
              <h3>🎯 Keep motion subtle above the fold</h3>
              <p>
                Fast, chaotic motion behind text hurts readability and can feel jarring on page
                load. Reserve high-energy clips for sections lower on the page or for paid ad
                landing pages where urgency is the goal.
              </p>
            </div>
            <div className="lpv-practice-card">
              <h3>📏 Match aspect ratio to placement</h3>
              <p>
                Generate at the exact aspect ratio you'll display — cropping a 16:9 clip into a 1:1
                container after the fact often cuts off the most interesting part of the motion.
              </p>
            </div>
            <div className="lpv-practice-card">
              <h3>🔁 Design for a seamless loop</h3>
              <p>
                Since most hero videos are 4–8 seconds and loop continuously, avoid prompts that
                describe a clear beginning and end (like "a door opens"). Prefer continuous motion —
                orbiting, drifting, flowing — that loops without an obvious jump cut.
              </p>
            </div>
            <div className="lpv-practice-card">
              <h3>🌓 Add a dark overlay for text contrast</h3>
              <p>
                If text sits directly on the video, add a semi-transparent dark gradient overlay
                (CSS, not baked into the video) so you can adjust contrast independently of the
                generated footage.
              </p>
            </div>
            <div className="lpv-practice-card">
              <h3>⚡ Compress before upload</h3>
              <p>
                Run the exported MP4 through a compressor to target under 3–4MB for a 5-second
                clip. Page speed directly affects both SEO ranking and landing page conversion
                rate, so never skip this step.
              </p>
            </div>
            <div className="lpv-practice-card">
              <h3>🧪 A/B test mood, not just copy</h3>
              <p>
                Most teams only test headlines and CTAs. Because generating a new video variation
                costs a few credits and two minutes, test calm vs. energetic motion styles too —
                it's often a bigger lever than expected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ MISTAKES ============ */}
      <section className="lpv-section lpv-alt">
        <div className="lpv-container lpv-narrow">
          <h2>Common Mistakes to Avoid</h2>
          <ul className="lpv-mistake-list">
            <li>
              <strong>Writing prompts like search queries instead of scenes.</strong> "SaaS
              dashboard video" gives the model almost nothing to work with. Describe the camera,
              the subject, the lighting, and the mood explicitly.
            </li>
            <li>
              <strong>Using a 10-second cinematic clip as an infinite background loop.</strong>{" "}
              Longer clips are heavier to load and often have an obvious start/end mismatch when
              looped. Keep background loops in the 4–6 second range.
            </li>
            <li>
              <strong>Ignoring mobile rendering.</strong> A video that looks great full-bleed on
              desktop can crop awkwardly on a phone. Always preview on a narrow viewport before
              publishing, and consider generating a separate 9:16 version for mobile breakpoints.
            </li>
            <li>
              <strong>Forgetting a poster frame.</strong> Without a poster image, visitors on slow
              connections briefly see a blank box before the video loads — which looks broken and
              hurts first impressions.
            </li>
            <li>
              <strong>Trying to show your actual product UI with AI video.</strong> Current AI
              video models can't reliably render legible, accurate interface text. Use AI video for
              mood and atmosphere, and use real screenshots or screen recordings for anything that
              needs to show your actual product.
            </li>
            <li>
              <strong>Skipping compression.</strong> An uncompressed 1080p export can be 15–20MB for
              just a few seconds — more than enough to tank your Largest Contentful Paint score in
              Core Web Vitals.
            </li>
          </ul>
        </div>
      </section>

      {/* ============ ADVANCED TIPS ============ */}
      <section className="lpv-section">
        <div className="lpv-container lpv-narrow">
          <h2>Advanced Tips for Better Results</h2>
          <p>
            Once you're comfortable with basic prompting, a few advanced techniques noticeably
            improve output quality for landing page use specifically.
          </p>
          <p>
            <strong>Layer video with a matching AI voiceover.</strong> A hero video paired with a
            short, punchy voiceover line (played on user interaction, not autoplay with sound) can
            outperform a silent video for high-intent pages like webinar registrations or product
            launches. Generate both from the same creative brief using the{" "}
            <Link href={CTA_VOICE}>AI voice generator</Link> so the tone matches.
          </p>
          <p>
            <strong>Generate at a higher resolution than you'll display, then downscale.</strong>{" "}
            Rendering at 1080p and displaying at 720p in your hero container often looks sharper
            than generating directly at your target size, especially on high-DPI displays.
          </p>
          <p>
            <strong>Use color grading prompts to match your brand palette.</strong> Explicitly
            naming your brand's dominant colors in the prompt ("deep navy and electric blue tones")
            produces far more on-brand results than generating a generic clip and trying to color
            grade it afterward in an editor.
          </p>
          <p>
            <strong>Build a small library, not a single hero clip.</strong> Generate 4–6 variations
            in one session covering different sections of your page — hero, features, testimonials,
            pricing — so the whole page feels cohesive rather than having one polished video and
            static images everywhere else.
          </p>
          <p>
            <strong>Re-purpose the same clip vertically for paid social.</strong> A landing page
            hero video often makes excellent raw material for a 9:16 Instagram or TikTok ad teaser —
            generate a second vertical version of the same prompt rather than stretching the
            original, which distorts the composition.
          </p>
        </div>
      </section>

      {/* ============ RELATED TOOLS / INTERNAL LINKS ============ */}
      <section className="lpv-section lpv-alt">
        <div className="lpv-container">
          <h2>Related Tools to Finish Your Landing Page</h2>
          <p className="lpv-section-intro">
            A hero video is one piece of a high-converting landing page. These tools handle the
            rest — all from the same credit balance.
          </p>
          <div className="lpv-related-grid">
            <Link href={CTA_BASE} className="lpv-related-card">
              <span>🎬</span>
              <h3>AI Video Generator</h3>
              <p>Generate the full library of hero and section videos for your page.</p>
            </Link>
            <Link href={CTA_VOICE} className="lpv-related-card">
              <span>🎙️</span>
              <h3>AI Voice Generator</h3>
              <p>Add narration or a product explainer voiceover in 40+ voices.</p>
            </Link>
            <Link href="/tools/ai-image-generation" className="lpv-related-card">
              <span>🖼️</span>
              <h3>AI Image Generator</h3>
              <p>Create supporting hero images, icons, and section backgrounds.</p>
            </Link>
            <Link href="/tools/image-editing" className="lpv-related-card">
              <span>🎨</span>
              <h3>Image Editor</h3>
              <p>Crop poster frames, add overlays, and prep visuals for your page.</p>
            </Link>
            <Link href="/tools/background-removal" className="lpv-related-card">
              <span>✂️</span>
              <h3>Background Remover</h3>
              <p>Clean up product shots before layering them over your hero video.</p>
            </Link>
            <Link href="/tools/video-speed-modifier" className="lpv-related-card">
              <span>⚡</span>
              <h3>Video Speed Modifier</h3>
              <p>Fine-tune pacing on generated or uploaded clips before publishing.</p>
            </Link>
            <Link href="/tools/hindi-female-ai-voice-generation" className="lpv-related-card">
              <span>👩</span>
              <h3>Hindi Female Voice Generator</h3>
              <p>Localize your landing page narration for Hindi-speaking audiences.</p>
            </Link>
            <Link href="/tools/pdf-tools" className="lpv-related-card">
              <span>📄</span>
              <h3>PDF Tools Suite</h3>
              <p>Turn your landing page pitch into a downloadable one-pager or deck PDF.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="lpv-section">
        <div className="lpv-container lpv-narrow">
          <h2>Frequently Asked Questions</h2>
          <div className="lpv-faq-list">
            {faqs.map((f) => (
              <details key={f.q} className="lpv-faq-item">
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="lpv-final-cta">
        <div className="lpv-container lpv-narrow">
          <h2>Your Landing Page Deserves More Than a Stock Photo</h2>
          <p>
            Generate a custom hero video that matches your brand, your product, and your mood —
            in the time it takes to read this sentence twice.
          </p>
          <div className="lpv-final-cta-buttons">
            <Link href={CTA_BASE} className="lpv-final-cta-primary">
              🎬 Generate My Landing Page Video — Free
            </Link>
            <Link href="/create-ai-content" className="lpv-final-cta-secondary">
              Explore All AI Tools →
            </Link>
          </div>
          <p className="lpv-final-footnote">
            Also explore:{" "}
            <Link href={CTA_VOICE}>AI Voice Generation</Link> ·{" "}
            <Link href="/tools/ai-image-generation">AI Image Generator</Link> ·{" "}
            <Link href="/tools/image-editing">Image Editor</Link>
          </p>
        </div>
      </section>
    </div>
  );
}