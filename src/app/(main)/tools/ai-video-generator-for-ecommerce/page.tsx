import type { Metadata } from "next";
import Link from "next/link";
import "./styles.css";

// ─────────────────────────────────────────────────────────────
// SEO METADATA
// ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "AI Video Generator for eCommerce — Create Product Ads & Reels Free | Scenith",
  description:
    "Turn product photos and descriptions into scroll-stopping AI videos for Shopify, Amazon, Instagram & TikTok ads. No filming, no editors, no studio. Generate your first eCommerce video free.",
  keywords: [
    "ai video generator for ecommerce",
    "ecommerce product video generator",
    "ai video ads for shopify",
    "product video maker ai",
    "ai video generator for amazon listings",
    "tiktok ads video generator",
    "ai video for dropshipping",
  ],
  alternates: {
    canonical: "https://scenith.in/tools/ai-video-generator-for-ecommerce",
  },
  openGraph: {
    title: "AI Video Generator for eCommerce — Product Ads in Seconds",
    description:
      "Generate cinematic AI product videos for Shopify, Amazon, and social ads — no camera, no studio, no editing skills required.",
    url: "https://scenith.in/tools/ai-video-generator-for-ecommerce",
    type: "website",
  },
};

const CTA_BASE = "/create-ai-content";
const UTM = "utm_source=ai-video-generator-for-ecommerce&utm_medium=cta&utm_campaign=seo";
const CTA_VIDEO = `${CTA_BASE}?tab=video&${UTM}`;

// ─────────────────────────────────────────────────────────────
// FAQ DATA (also used for JSON-LD)
// ─────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "Can I really make an eCommerce product video without filming anything?",
    a: "Yes. An AI video generator converts a text prompt or a product photo directly into a moving video clip. You describe the shot you want — a rotating bottle, a lifestyle scene, a close-up unboxing — and the AI model renders it. No camera, lighting kit, or model is required to get a usable ad-ready clip.",
  },
  {
    q: "Which AI video model is best for product ads?",
    a: "For polished, cinematic product shots, models like Veo 3.1 and Kling 2.6 Pro tend to produce the most realistic lighting and texture. For quick social ad variations at lower cost, Wan 2.5 or Kling 2.5 Turbo are faster and cheaper. Most sellers start with a fast model for testing hooks, then upgrade to a higher-fidelity model for the final ad.",
  },
  {
    q: "Can I turn an existing product photo into a video?",
    a: "Yes. Image-to-video generation lets you upload your existing product photo (from your Shopify listing or Amazon catalog) and animate it — adding camera movement, environment, or motion — instead of generating a scene from scratch. This keeps your actual product accurate while still producing dynamic video.",
  },
  {
    q: "What video length and aspect ratio should I use for eCommerce ads?",
    a: "For Instagram Reels, TikTok, and YouTube Shorts, use a vertical 9:16 aspect ratio at 5–10 seconds per clip. For Amazon listing videos or website product pages, 16:9 or 1:1 works better and can run slightly longer (15–30 seconds) since viewers are already considering a purchase rather than scrolling past.",
  },
  {
    q: "Is AI-generated video allowed for Amazon and Shopify listings?",
    a: "Both platforms allow product videos created with any tool as long as they accurately represent the product and don't violate content guidelines (no misleading claims, no prohibited imagery). Always compare the AI-generated video against the actual product to avoid a mismatch that could trigger returns or listing complaints.",
  },
  {
    q: "How much does it cost to generate an AI eCommerce video?",
    a: "Cost is based on a shared credit system rather than a flat subscription. A 5-second clip typically costs between 46 and 186 credits depending on the model, resolution, and whether audio is included. New accounts start with free credits, so you can test the workflow before committing to a paid plan.",
  },
  {
    q: "Can I add a voiceover to my AI product video?",
    a: "Yes. Once your video is generated, you can pair it with an AI voiceover for product narration, feature call-outs, or a call-to-action. This is especially effective for demo-style ads where a voice explains a benefit while the video shows the product in use.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
};

export default function AIVideoGeneratorForEcommercePage() {
  return (
    <div className="aive-page">
      {/* ── Structured Data ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Scenith AI Video Generator for eCommerce",
            applicationCategory: "MultimediaApplication",
            operatingSystem: "Web Browser",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              ratingCount: "612",
            },
          }),
        }}
      />

      {/* ── Breadcrumb ── */}
      <nav aria-label="Breadcrumb" className="aive-breadcrumb">
        <ol itemScope itemType="https://schema.org/BreadcrumbList">
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link href="/" itemProp="item"><span itemProp="name">Home</span></Link>
            <meta itemProp="position" content="1" />
          </li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link href="/tools" itemProp="item"><span itemProp="name">Tools</span></Link>
            <meta itemProp="position" content="2" />
          </li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="name">AI Video Generator for eCommerce</span>
            <meta itemProp="position" content="3" />
          </li>
        </ol>
      </nav>

      {/* ══════════════════ HERO ══════════════════ */}
      <section className="aive-hero">
        <div className="aive-container">
          <div className="aive-hero-badge">
            <span>🛍️</span>
            <span>Built for Shopify, Amazon & D2C sellers</span>
          </div>

          <h1 className="aive-hero-title">
            AI Video Generator for eCommerce
            <span className="aive-hero-sub-title">Turn Product Photos Into Scroll-Stopping Ads</span>
          </h1>

          <p className="aive-hero-desc">
            Skip the studio, the model, and the video editor. Describe your product or upload a photo,
            and generate a cinematic AI video ready for <strong>Instagram Reels, TikTok Ads, YouTube Shorts,
            and Amazon listings</strong> — in under two minutes. No filming equipment, no agency retainer,
            no waiting on a production schedule.
          </p>

          {/* ── Prompt box (server-rendered form, redirects on submit) ── */}
          <form action={CTA_BASE} method="GET" className="aive-prompt-box">
            <input type="hidden" name="tab" value="video" />
            <input type="hidden" name="utm_source" value="ai-video-generator-for-ecommerce" />
            <input type="hidden" name="utm_medium" value="cta" />
            <input type="hidden" name="utm_campaign" value="seo" />
            <label htmlFor="aive-prompt-input" className="aive-prompt-label">
              ✍️ Describe your product video
            </label>
            <textarea
              id="aive-prompt-input"
              name="text"
              className="aive-prompt-textarea"
              placeholder='e.g. "Matte black skincare bottle slowly rotating on a marble surface, soft studio light, water droplets, luxury cosmetic ad style"'
              rows={3}
              maxLength={500}
            />
            <div className="aive-prompt-footer">
              <span className="aive-prompt-hint">Free credits included — no card required</span>
              <button type="submit" className="aive-prompt-btn">
                🎬 Generate My Video →
              </button>
            </div>
          </form>

          <div className="aive-trust-row">
            <span className="aive-trust-pill">✅ No filming required</span>
            <span className="aive-trust-pill">📱 9:16, 1:1 & 16:9 ready</span>
            <span className="aive-trust-pill">⚡ Ready in under 2 minutes</span>
            <span className="aive-trust-pill">💼 Commercial use included</span>
          </div>
        </div>
      </section>

      {/* ══════════════════ DEFINITION ══════════════════ */}
      <section className="aive-section aive-definition-section">
        <div className="aive-container">
          <div className="aive-definition-box">
            <span className="aive-definition-label">📖 Quick Definition</span>
            <p>
              An <strong>AI video generator for eCommerce</strong> is a tool that converts a text
              description or an existing product photo into a short, realistic video clip — without
              filming, actors, or a physical studio. Sellers use it to produce ad creative, product
              demos, and listing videos at a fraction of the cost and time of traditional video production.
              Instead of booking a shoot, you type what you want the camera to show, choose a model, and
              download an MP4 ready for paid ads or organic posts.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════ WHY / USE CASES ══════════════════ */}
      <section className="aive-section">
        <div className="aive-container">
          <h2>Why eCommerce Brands Are Switching to AI Video</h2>
          <p className="aive-section-intro">
            Video consistently outperforms static images in every major ad and marketplace channel —
            but traditional production doesn't scale with how often eCommerce brands need new creative.
            Here's where AI video actually changes the economics.
          </p>

          <div className="aive-grid-3">
            <article className="aive-card">
              <span className="aive-card-icon">🎯</span>
              <h3>Testing Ad Creative at Scale</h3>
              <p>
                Paid ad performance on Meta and TikTok depends heavily on creative variety — the same
                product shown five different ways often outperforms one polished ad shown once. AI video
                generation lets you produce 10–20 variations of a hook, background, or camera angle in an
                afternoon, then let the ad platform's algorithm find the winner. A traditional shoot simply
                can't produce that volume affordably.
              </p>
            </article>

            <article className="aive-card">
              <span className="aive-card-icon">🚀</span>
              <h3>Launching Products Before Inventory Photography</h3>
              <p>
                Dropshippers and new D2C brands often need to market a product before a professional
                photoshoot is even possible — the item may still be in transit from a supplier. AI
                image-to-video lets you animate a supplier's stock photo into a usable ad clip so your
                launch timeline doesn't wait on logistics.
              </p>
            </article>

            <article className="aive-card">
              <span className="aive-card-icon">💰</span>
              <h3>Cutting Production Costs on Every SKU</h3>
              <p>
                A single professional product video shoot commonly costs $300–$1,500 once you include a
                studio, videographer, and editor. Multiply that across a catalog of 50+ SKUs and the
                budget becomes unworkable for most small and mid-sized sellers. AI video generation brings
                the per-clip cost down to a small credit spend, making it realistic to produce a video for
                every listing, not just your bestsellers.
              </p>
            </article>

            <article className="aive-card">
              <span className="aive-card-icon">🌍</span>
              <h3>Localizing Ads for Multiple Markets</h3>
              <p>
                Selling on Amazon in multiple regions or running Meta ads across countries often means
                producing near-identical videos with different on-screen text, voiceover language, or
                cultural styling. Because generation is prompt-driven, adapting a video for a new market
                is a matter of editing the prompt and voice language — not rebooking a shoot.
              </p>
            </article>

            <article className="aive-card">
              <span className="aive-card-icon">🎬</span>
              <h3>Turning Static Listings Into Motion</h3>
              <p>
                Amazon and Shopify both reward listings with video — it increases time-on-page and
                conversion rate. Sellers with only static photography can animate those same images into
                short looping clips for the main image carousel, without re-shooting the product at all.
              </p>
            </article>

            <article className="aive-card">
              <span className="aive-card-icon">🔁</span>
              <h3>Refreshing Ad Fatigue Fast</h3>
              <p>
                Performance ads fatigue quickly — the same creative shown to the same audience for two
                weeks starts costing more per click. AI generation lets performance marketers refresh a
                video's background, motion, or hook in minutes, extending the life of a winning ad without
                waiting on a new production cycle.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ══════════════════ REAL EXAMPLES BY PLATFORM ══════════════════ */}
      <section className="aive-section aive-alt-bg">
        <div className="aive-container">
          <h2>Real Examples by Platform</h2>
          <p className="aive-section-intro">
            The right prompt and format change depending on where the video will run. Here's how
            sellers structure AI video prompts for each major channel.
          </p>

          <div className="aive-platform-list">
            <div className="aive-platform-item">
              <h3>📱 Instagram Reels &amp; TikTok Ads</h3>
              <p>
                Vertical 9:16, 5–10 seconds, hook-first. The first frame needs to stop a scroll, so
                prompts should front-load the visual: <em>"Close-up of hand opening a skincare jar,
                cream texture visible, soft morning light, camera pulls back to reveal full product on
                bathroom counter."</em> Pair the clip with a fast-paced AI voiceover call-out or on-screen
                text overlay added afterward for the strongest performance.
              </p>
            </div>

            <div className="aive-platform-item">
              <h3>🛒 Amazon Listing Video</h3>
              <p>
                Square (1:1) or landscape (16:9), 15–30 seconds, benefit-driven. Amazon shoppers are
                already comparing options, so the video should show the product in clear use rather than
                a stylized hook: <em>"Wireless earbuds shown in charging case opening, then worn by a
                person jogging outdoors, clean daylight, product-focused shot."</em>
              </p>
            </div>

            <div className="aive-platform-item">
              <h3>🖥️ Shopify Product Page Background Video</h3>
              <p>
                Looping, ambient, no hard cuts. These videos play automatically and shouldn't feel
                like an ad — they should feel like a photo that breathes: <em>"Ceramic coffee mug on a
                wooden table, steam gently rising, soft natural light shifting slightly, seamless loop."</em>
              </p>
            </div>

            <div className="aive-platform-item">
              <h3>📺 Facebook &amp; Meta Ads</h3>
              <p>
                Square or vertical, 8–15 seconds, benefit + social proof framing. Meta ad creative tends
                to perform best with a clear before/after or problem/solution structure: <em>"Split
                scene: cluttered desk on the left, organized desk with product on the right, smooth
                camera pan between both sides."</em>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════ STEP BY STEP ══════════════════ */}
      <section className="aive-section">
        <div className="aive-container">
          <h2>How to Create an AI Product Video — Step by Step</h2>
          <p className="aive-section-intro">
            The workflow takes under five minutes once you know what to enter at each step. Here's the
            exact process used inside{" "}
            <Link href={CTA_VIDEO} className="aive-inline-link">Scenith's AI Content Creator</Link>.
          </p>

          <div className="aive-steps">
            <div className="aive-step">
              <div className="aive-step-num">1</div>
              <div className="aive-step-body">
                <h3>Choose Text-to-Video or Image-to-Video</h3>
                <p>
                  If you don't have product photography yet, start from a text prompt describing the
                  scene. If you already have a clean product photo from your listing, use image-to-video
                  instead — it uses your actual photo as the starting frame so the product itself stays
                  accurate while the AI adds camera movement and environment.
                </p>
              </div>
            </div>

            <div className="aive-step">
              <div className="aive-step-num">2</div>
              <div className="aive-step-body">
                <h3>Write a Specific, Shot-Level Prompt</h3>
                <p>
                  Vague prompts produce generic results. Include the product, material, lighting,
                  camera behavior, and setting: <em>"Amber glass perfume bottle on black reflective
                  surface, slow 360-degree rotation, dramatic side lighting, dark studio background."</em>
                  The more concrete the description, the closer the output matches your brand aesthetic.
                </p>
              </div>
            </div>

            <div className="aive-step">
              <div className="aive-step-num">3</div>
              <div className="aive-step-body">
                <h3>Pick a Model, Duration &amp; Aspect Ratio</h3>
                <p>
                  Choose a faster, lower-cost model like Wan 2.5 for early hook testing, or a
                  higher-fidelity model like Kling 2.6 Pro or Veo 3.1 for your final ad creative. Match
                  the aspect ratio to the destination — vertical for Reels and TikTok, square or
                  landscape for Amazon and website use.
                </p>
              </div>
            </div>

            <div className="aive-step">
              <div className="aive-step-num">4</div>
              <div className="aive-step-body">
                <h3>Generate and Review Against the Real Product</h3>
                <p>
                  Once the clip renders, compare it carefully against your actual product listing.
                  Check color accuracy, proportions, and any on-screen text for errors before publishing
                  — this step matters more for eCommerce than any other use case, since a mismatched
                  video can increase returns or trigger platform flags.
                </p>
              </div>
            </div>

            <div className="aive-step">
              <div className="aive-step-num">5</div>
              <div className="aive-step-body">
                <h3>Add Voiceover, Captions &amp; Download</h3>
                <p>
                  Pair the finished clip with an{" "}
                  <Link href="/tools/ai-voice-generation" className="aive-inline-link">AI voiceover</Link>{" "}
                  for narration or a call-to-action, then export as MP4. Upload directly to your ad
                  manager, Shopify theme, or Amazon Seller Central listing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════ BEST PRACTICES ══════════════════ */}
      <section className="aive-section aive-alt-bg">
        <div className="aive-container">
          <h2>Best Practices for AI eCommerce Video Ads</h2>
          <p className="aive-section-intro">
            These habits separate video ads that convert from clips that just look impressive.
          </p>

          <div className="aive-grid-2">
            <div className="aive-practice">
              <h3>✅ Lead With the Product, Not the Scene</h3>
              <p>
                It's tempting to generate elaborate environments, but the product should be
                recognizable within the first second. If the AI scene overwhelms the product, shoppers
                won't connect the ad back to your listing when they see it again on the product page.
              </p>
            </div>
            <div className="aive-practice">
              <h3>✅ Match Lighting Across Your Catalog</h3>
              <p>
                If you're generating videos for multiple SKUs in the same collection, keep lighting and
                background style consistent across prompts. This creates a cohesive brand feel across
                your Shopify collection page or Amazon storefront instead of looking like disconnected tests.
              </p>
            </div>
            <div className="aive-practice">
              <h3>✅ Generate Multiple Hooks, Not Multiple Full Ads</h3>
              <p>
                Rather than producing five completely different videos, generate five different opening
                shots (the "hook") paired with the same core demo footage. This is faster to test and
                easier to analyze which hook is actually driving the performance difference.
              </p>
            </div>
            <div className="aive-practice">
              <h3>✅ Keep a Human Voice in the Loop</h3>
              <p>
                Pairing an AI video with a natural-sounding{" "}
                <Link href="/tools/ai-voice-generation" className="aive-inline-link">AI voice</Link> that
                explains a genuine product benefit consistently outperforms silent or text-only clips,
                especially on TikTok and Reels where sound-on viewing is common.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════ COMMON MISTAKES ══════════════════ */}
      <section className="aive-section">
        <div className="aive-container">
          <h2>Common Mistakes to Avoid</h2>
          <p className="aive-section-intro">
            Most underperforming AI product videos fail for one of these avoidable reasons.
          </p>

          <div className="aive-mistakes">
            <div className="aive-mistake">
              <span className="aive-mistake-icon">❌</span>
              <div>
                <h3>Writing Prompts That Are Too Abstract</h3>
                <p>
                  "A cool video of my product" gives the AI nothing to work with. Every strong prompt
                  specifies the camera behavior, lighting, surface, and mood — treat it like a shot list,
                  not a wish.
                </p>
              </div>
            </div>
            <div className="aive-mistake">
              <span className="aive-mistake-icon">❌</span>
              <div>
                <h3>Ignoring Platform-Specific Aspect Ratios</h3>
                <p>
                  Uploading a 16:9 video to a TikTok ad campaign wastes most of the screen and looks
                  unpolished next to native vertical content. Always generate directly in the aspect
                  ratio your destination platform expects.
                </p>
              </div>
            </div>
            <div className="aive-mistake">
              <span className="aive-mistake-icon">❌</span>
              <div>
                <h3>Skipping the Accuracy Check</h3>
                <p>
                  Publishing an AI clip without comparing it to the real product risks color mismatches,
                  incorrect proportions, or an added feature that doesn't actually exist — all of which
                  can lead to returns or listing complaints.
                </p>
              </div>
            </div>
            <div className="aive-mistake">
              <span className="aive-mistake-icon">❌</span>
              <div>
                <h3>Over-Producing Before Testing</h3>
                <p>
                  Spending your full budget on one high-fidelity 30-second clip before testing a cheap
                  5-second hook wastes both time and credits. Test cheap and fast first, then invest in
                  the winning direction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════ ADVANCED TIPS ══════════════════ */}
      <section className="aive-section aive-alt-bg">
        <div className="aive-container">
          <h2>Advanced Tips: Scaling Video Across a Full Catalog</h2>
          <p className="aive-section-intro">
            Once the basic workflow is working for one product, here's how experienced sellers scale it
            to an entire catalog without the process becoming a full-time job.
          </p>

          <div className="aive-advanced-list">
            <div className="aive-advanced-item">
              <h3>Build a Reusable Prompt Template</h3>
              <p>
                Create a base prompt structure with placeholders for product type, material, and color —
                e.g. <em>"[PRODUCT] on a [SURFACE] surface, [LIGHTING] lighting, slow rotation, minimal
                background."</em> Swapping in each SKU's details takes seconds instead of writing a new
                prompt from scratch every time.
              </p>
            </div>
            <div className="aive-advanced-item">
              <h3>Batch by Category, Not Individually</h3>
              <p>
                Generate all videos for a single product category (e.g. all skincare bottles) in one
                session using the same lighting and camera style. This keeps visual consistency high and
                makes it easier to reuse the same voiceover script structure across the batch.
              </p>
            </div>
            <div className="aive-advanced-item">
              <h3>Pair With Image-to-Video for Hero Products</h3>
              <p>
                For your top 10–20 bestsellers, use image-to-video starting from your best existing
                product photography rather than a pure text prompt. This keeps the exact product accurate
                while still gaining the motion and engagement benefit of video.
              </p>
            </div>
            <div className="aive-advanced-item">
              <h3>Repurpose One Clip Across Channels</h3>
              <p>
                A single generated clip can be reframed for multiple destinations: trim to 9:16 for
                Reels, extend with a voiceover for a Shopify background video, and add captions for a
                silent Facebook feed placement — multiplying the value of each generation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════ MID CTA ══════════════════ */}
      <section className="aive-mid-cta-section">
        <div className="aive-container aive-mid-cta-inner">
          <h2>Generate Your First eCommerce Video Free</h2>
          <p>No card required. Free credits included on signup.</p>
          <Link href={CTA_VIDEO} className="aive-mid-cta-btn">
            🎬 Try AI Video Generator →
          </Link>
        </div>
      </section>

      {/* ══════════════════ RELATED TOOLS ══════════════════ */}
      <section className="aive-section">
        <div className="aive-container">
          <h2>Pair It With These Related Tools</h2>
          <p className="aive-section-intro">
            A finished eCommerce ad usually needs more than one tool. Here's the rest of the workflow.
          </p>
          <div className="aive-related-grid">
            <Link href="/tools/ai-image-generation" className="aive-related-card">
              <span>🖼️</span>
              <h3>AI Image Generator</h3>
              <p>Generate product mockups and lifestyle images before animating them into video.</p>
            </Link>
            <Link href="/tools/ai-voice-generation" className="aive-related-card">
              <span>🎙️</span>
              <h3>AI Voice Generator</h3>
              <p>Add narration or a call-to-action voiceover to your product video.</p>
            </Link>
            <Link href="/tools/background-removal" className="aive-related-card">
              <span>✂️</span>
              <h3>Background Remover</h3>
              <p>Clean up product photos before using them for image-to-video generation.</p>
            </Link>
            <Link href="/tools/image-editing" className="aive-related-card">
              <span>🎨</span>
              <h3>Image Editor</h3>
              <p>Design thumbnails and static ad variations to pair with your video creative.</p>
            </Link>
            <Link href="/tools/video-speed-modifier" className="aive-related-card">
              <span>⚡</span>
              <h3>Video Speed Modifier</h3>
              <p>Fine-tune pacing on generated clips for a punchier ad cut.</p>
            </Link>
            <Link href="/svg-library" className="aive-related-card">
              <span>🔷</span>
              <h3>SVG Icon Library</h3>
              <p>Add badges, sale tags, or feature icons as overlays on your product video frames.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════ FAQ ══════════════════ */}
      <section className="aive-section aive-alt-bg">
        <div className="aive-container">
          <h2>Frequently Asked Questions</h2>
          <div className="aive-faq-list">
            {faqs.map((f) => (
              <details className="aive-faq-item" key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ FINAL CTA ══════════════════ */}
      <section className="aive-final-cta-section">
        <div className="aive-container aive-final-cta-inner">
          <span className="aive-final-icon">🛍️</span>
          <h2>Ready to Turn Product Photos Into Ads?</h2>
          <p>
            Join sellers already using AI video to cut production costs and test creative faster.
            Start with free credits — no card, no commitment.
          </p>
          <Link href={CTA_VIDEO} className="aive-final-cta-btn">
            🚀 Generate My eCommerce Video Now →
          </Link>
          <p className="aive-final-footnote">
            Also explore:{" "}
            <Link href="/create-ai-content" className="aive-inline-link">
              AI Content Creator (Voice, Image &amp; Video)
            </Link>{" "}
            •{" "}
            <Link href="/tools/ai-voice-generation" className="aive-inline-link">
              AI Voice Generator
            </Link>{" "}
            •{" "}
            <Link href="/tools/ai-image-generation" className="aive-inline-link">
              AI Image Generator
            </Link>{" "}
            •{" "}
            <Link href="/pricing" className="aive-inline-link">
              Pricing &amp; Credits
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}