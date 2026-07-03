import type { Metadata } from "next";
import Link from "next/link";
import "./styles.css";

// ─────────────────────────────────────────────────────────────
// SEO METADATA
// ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "AI Sales Video Generator — Create Pitch, Demo & Outreach Videos Free | Scenith",
  description:
    "Generate personalized sales videos, product demos, and LinkedIn outreach clips with AI — no camera, no editor, no scheduling a shoot. Turn a script into a video your prospects actually watch.",
  keywords: [
    "ai sales video generator",
    "ai video for sales outreach",
    "personalized sales video ai",
    "ai product demo video",
    "linkedin sales video generator",
    "cold outreach video ai",
    "ai pitch video maker",
    "sales enablement video ai",
  ],
  alternates: {
    canonical: "https://scenith.in/tools/ai-sales-video-generator",
  },
  openGraph: {
    title: "AI Sales Video Generator — Pitch, Demo & Outreach Videos in Minutes",
    description:
      "Create AI-generated sales videos for LinkedIn outreach, product demos, and pitch decks — no filming, no studio, no editing skills required.",
    url: "https://scenith.in/tools/ai-sales-video-generator",
    type: "website",
  },
};

const CTA_BASE = "/create-ai-content";
const UTM = "utm_source=ai-sales-video-generator&utm_medium=cta&utm_campaign=seo";
const CTA_VIDEO = `${CTA_BASE}?tab=video&${UTM}`;

// ─────────────────────────────────────────────────────────────
// FAQ DATA (also used for JSON-LD)
// ─────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "Can an AI video generator actually replace a sales rep on camera?",
    a: "It replaces the need for a camera, studio, and video editor — not the strategy behind the message. You still write the script and decide the offer, objection handling, and call-to-action. The AI handles turning that script into a polished visual with a voice narration, so reps without on-camera confidence or video editing skills can still ship professional outreach video.",
  },
  {
    q: "What's the best video length for a cold outreach video?",
    a: "For LinkedIn or cold email prospecting, 20–45 seconds performs best — long enough to state a specific, relevant insight about the prospect's business, short enough that a busy buyer will actually finish it. Save longer 60–120 second videos for warmer stages like a demo recap or proposal follow-up.",
  },
  {
    q: "Can I personalize an AI sales video for each individual prospect?",
    a: "Yes. Because generation is prompt-driven, you can swap in a prospect's company name, industry, or specific pain point directly in the script and voiceover, then regenerate a fresh clip in a couple of minutes. This makes true 1:1 personalization realistic at a scale that filming individually never allowed.",
  },
  {
    q: "Which AI video model should I use for product demo videos?",
    a: "For a clean, professional product walkthrough, a higher-fidelity model like Kling 2.6 Pro or Veo 3.1 tends to render UI screens, product shots, and camera motion more accurately. For a quick first draft or an A/B test of two different framings, a faster model like Wan 2.5 gets you a usable clip at lower cost.",
  },
  {
    q: "Is it okay to use AI-generated video in B2B sales outreach?",
    a: "Yes, as long as the video is transparent about what it is and doesn't misrepresent the sender as a real recorded appearance if that matters to your buyer. Many sales teams already use AI avatars, screen recordings, and AI-generated b-roll in outreach — what matters most to conversion is relevance and personalization, not whether every frame was filmed live.",
  },
  {
    q: "How much does it cost to generate a sales video with AI?",
    a: "Cost is credit-based rather than a flat subscription fee. A 5-second AI video clip typically runs 46–186 credits depending on the model, resolution, and whether audio is included, and new accounts start with free credits to test the workflow before paying for anything.",
  },
  {
    q: "Can I add a voiceover instead of recording my own narration?",
    a: "Yes. Pairing your generated video with an AI voiceover is one of the most common workflows for sales content — you write the script once, choose a natural-sounding voice, and get a fully narrated video without needing a quiet room, a good microphone, or multiple retakes.",
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

export default function AISalesVideoGeneratorPage() {
  return (
    <div className="asv-page">
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
            name: "Scenith AI Sales Video Generator",
            applicationCategory: "MultimediaApplication",
            operatingSystem: "Web Browser",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              ratingCount: "497",
            },
          }),
        }}
      />

      {/* ── Breadcrumb ── */}
      <nav aria-label="Breadcrumb" className="asv-breadcrumb">
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
            <span itemProp="name">AI Sales Video Generator</span>
            <meta itemProp="position" content="3" />
          </li>
        </ol>
      </nav>

      {/* ══════════════════ HERO ══════════════════ */}
      <section className="asv-hero">
        <div className="asv-container">
          <div className="asv-hero-badge">
            <span>📈</span>
            <span>Built for sales teams, founders &amp; SDRs</span>
          </div>

          <h1 className="asv-hero-title">
            AI Sales Video Generator
            <span className="asv-hero-sub-title">Turn a Script Into a Video Prospects Actually Watch</span>
          </h1>

          <p className="asv-hero-desc">
            Skip the camera, the ring light, and the fifteenth retake. Write your pitch, demo, or
            outreach script and generate a polished AI sales video for <strong>LinkedIn outreach,
            cold email, product demos, and pitch decks</strong> — ready in minutes, not a full afternoon
            of filming and editing.
          </p>

          {/* ── Prompt box (server-rendered form, redirects on submit) ── */}
          <form action={CTA_BASE} method="GET" className="asv-prompt-box">
            <input type="hidden" name="tab" value="video" />
            <input type="hidden" name="utm_source" value="ai-sales-video-generator" />
            <input type="hidden" name="utm_medium" value="cta" />
            <input type="hidden" name="utm_campaign" value="seo" />
            <label htmlFor="asv-prompt-input" className="asv-prompt-label">
              ✍️ Describe your sales video
            </label>
            <textarea
              id="asv-prompt-input"
              name="text"
              className="asv-prompt-textarea"
              placeholder='e.g. "Confident presenter in a modern office explaining a software dashboard on screen, clean corporate lighting, professional B2B product demo style"'
              rows={3}
              maxLength={500}
            />
            <div className="asv-prompt-footer">
              <span className="asv-prompt-hint">Free credits included — no card required</span>
              <button type="submit" className="asv-prompt-btn">
                🎬 Generate My Video →
              </button>
            </div>
          </form>

          <div className="asv-trust-row">
            <span className="asv-trust-pill">✅ No filming required</span>
            <span className="asv-trust-pill">💼 LinkedIn &amp; cold-email ready</span>
            <span className="asv-trust-pill">⚡ Ready in under 2 minutes</span>
            <span className="asv-trust-pill">🎙️ Add AI voiceover narration</span>
          </div>
        </div>
      </section>

      {/* ══════════════════ DEFINITION ══════════════════ */}
      <section className="asv-section asv-definition-section">
        <div className="asv-container">
          <div className="asv-definition-box">
            <span className="asv-definition-label">📖 Quick Definition</span>
            <p>
              An <strong>AI sales video generator</strong> is a tool that turns a written script or
              prompt into a finished video clip — with visuals and, optionally, a narrated voiceover —
              without requiring a camera, a presenter on screen, or a video editor. Sales teams use it
              to produce personalized outreach videos, product demo walkthroughs, and pitch content at a
              volume that filming individually could never support, since every clip is generated from
              text rather than recorded live.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════ WHY / USE CASES ══════════════════ */}
      <section className="asv-section">
        <div className="asv-container">
          <h2>Why Sales Teams Are Switching to AI Video</h2>
          <p className="asv-section-intro">
            Video consistently outperforms plain text in outreach response rates — but recording,
            editing, and re-shooting video for every prospect or campaign doesn't scale for most reps.
            Here's where AI video changes the math.
          </p>

          <div className="asv-grid-3">
            <article className="asv-card">
              <span className="asv-card-icon">🎯</span>
              <h3>Personalized Cold Outreach at Scale</h3>
              <p>
                A short, custom video referencing a prospect's company by name consistently gets more
                replies than a generic template — but filming one video per prospect is unrealistic for
                a rep with a 200-account list. AI generation lets you swap prospect details into a script
                template and produce a fresh, relevant clip in minutes instead of hours.
              </p>
            </article>

            <article className="asv-card">
              <span className="asv-card-icon">🖥️</span>
              <h3>Product Demo Videos Without a Studio</h3>
              <p>
                Not every team has a dedicated video producer for demo content. AI video generation lets
                founders and product marketers turn a feature description into a visual walkthrough-style
                clip, making it possible to keep demo content current every time a feature ships — not
                just once a quarter when a shoot can be scheduled.
              </p>
            </article>

            <article className="asv-card">
              <span className="asv-card-icon">💬</span>
              <h3>Confident Video for Reps Who Hate the Camera</h3>
              <p>
                Not every top performer is comfortable on camera, and that shouldn't be the reason a
                video-first outreach strategy gets skipped. Generating the video from a script removes
                the on-camera anxiety entirely while still delivering a polished, personal-feeling asset.
              </p>
            </article>

            <article className="asv-card">
              <span className="asv-card-icon">📊</span>
              <h3>Pitch &amp; Investor Update Videos</h3>
              <p>
                Founders sending investor updates or a first pitch teaser can generate a short,
                professional video summary of traction and vision instead of a plain text email — video
                consistently gets opened and watched more than a wall of text in an inbox.
              </p>
            </article>

            <article className="asv-card">
              <span className="asv-card-icon">🔁</span>
              <h3>Faster Follow-Ups After Every Call</h3>
              <p>
                Instead of a generic "great chatting today" email, reps can generate a quick recap video
                referencing the specific objection or use case discussed on the call — keeping momentum
                without needing to book studio time for every single follow-up.
              </p>
            </article>

            <article className="asv-card">
              <span className="asv-card-icon">🌍</span>
              <h3>Localizing Pitch Content for Global Teams</h3>
              <p>
                Sales teams selling into multiple regions can adapt the same core pitch script into
                different languages and voice styles for each market, without re-briefing a video
                production team for every localized version.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ══════════════════ REAL EXAMPLES BY PLATFORM ══════════════════ */}
      <section className="asv-section asv-alt-bg">
        <div className="asv-container">
          <h2>Real Examples by Channel</h2>
          <p className="asv-section-intro">
            The right prompt, length, and tone change depending on where the sales video will land.
            Here's how reps and founders structure AI video prompts for each channel.
          </p>

          <div className="asv-platform-list">
            <div className="asv-platform-item">
              <h3>💼 LinkedIn Outreach &amp; InMail</h3>
              <p>
                Square or vertical, 20–35 seconds, direct and specific. LinkedIn video messages perform
                best when the first three seconds reference something concrete about the prospect:{" "}
                <em>"Presenter in a modern office speaking directly to camera, confident and friendly
                tone, clean neutral background, professional but approachable."</em> Keep the pitch to
                one clear insight rather than a full feature list.
              </p>
            </div>

            <div className="asv-platform-item">
              <h3>📧 Cold Email Video Embeds</h3>
              <p>
                Landscape 16:9, 30–45 seconds, thumbnail-first framing. Since the video is usually
                embedded as a clickable thumbnail inside an email, the first frame matters as much as
                the content: <em>"Professional presenter mid-gesture in a bright office setting, warm
                expression, looks like a genuine one-to-one message rather than a mass ad."</em>
              </p>
            </div>

            <div className="asv-platform-item">
              <h3>🖥️ Product Demo for Website or Sales Deck</h3>
              <p>
                Landscape 16:9, 45–90 seconds, benefit-driven walkthrough framing. These videos are
                watched by a warmer audience already evaluating the product, so the prompt should focus
                on clarity: <em>"Clean software dashboard on screen, cursor highlighting key metrics,
                smooth zoom into a specific feature, modern SaaS product demo style."</em>
              </p>
            </div>

            <div className="asv-platform-item">
              <h3>🎥 Sales Enablement &amp; Internal Training</h3>
              <p>
                Landscape 16:9, 60–120 seconds, structured and instructional. Internal enablement video
                doesn't need to be flashy — it needs to be clear and repeatable: <em>"Presenter
                explaining a step-by-step objection-handling framework, whiteboard-style background,
                calm and instructional tone."</em>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════ STEP BY STEP ══════════════════ */}
      <section className="asv-section">
        <div className="asv-container">
          <h2>How to Create an AI Sales Video — Step by Step</h2>
          <p className="asv-section-intro">
            The workflow takes under five minutes once you know what to enter at each step. Here's the
            exact process used inside{" "}
            <Link href={CTA_VIDEO} className="asv-inline-link">Scenith's AI Content Creator</Link>.
          </p>

          <div className="asv-steps">
            <div className="asv-step">
              <div className="asv-step-num">1</div>
              <div className="asv-step-body">
                <h3>Write the Script Before the Prompt</h3>
                <p>
                  Draft the actual words you want said first — the specific pain point, the offer, and
                  the call-to-action — before writing the visual prompt. A sales video lives or dies on
                  the message, not the visuals, so this order matters more here than in almost any other
                  video use case.
                </p>
              </div>
            </div>

            <div className="asv-step">
              <div className="asv-step-num">2</div>
              <div className="asv-step-body">
                <h3>Describe the Visual Scene Specifically</h3>
                <p>
                  Include the setting, camera framing, and tone: <em>"Presenter in a bright modern
                  office, speaking directly to camera, confident and warm expression, shallow depth of
                  field background."</em> Concrete visual detail produces a far more professional result
                  than a vague request like "sales video with a person talking."
                </p>
              </div>
            </div>

            <div className="asv-step">
              <div className="asv-step-num">3</div>
              <div className="asv-step-body">
                <h3>Pick a Model &amp; Aspect Ratio for the Channel</h3>
                <p>
                  Choose a faster model like Wan 2.5 for quick internal drafts, or a higher-fidelity
                  model like Kling 2.6 Pro or Veo 3.1 for outbound-facing content. Match the aspect
                  ratio to the destination — square or vertical for LinkedIn and mobile, landscape for
                  email embeds and demo decks.
                </p>
              </div>
            </div>

            <div className="asv-step">
              <div className="asv-step-num">4</div>
              <div className="asv-step-body">
                <h3>Add an AI Voiceover of Your Script</h3>
                <p>
                  Generate a matching{" "}
                  <Link href="/tools/ai-voice-generation" className="asv-inline-link">AI voiceover</Link>{" "}
                  from your original script so the narration and visual tone feel cohesive. This is what
                  makes the final clip feel like a produced message rather than a silent visual with
                  text slapped on top.
                </p>
              </div>
            </div>

            <div className="asv-step">
              <div className="asv-step-num">5</div>
              <div className="asv-step-body">
                <h3>Review, Personalize, and Send</h3>
                <p>
                  Watch the full clip once before sending — check that any on-screen text or product
                  detail is accurate. For 1:1 personalization, swap the prospect's name or company into
                  the script and regenerate a fresh version rather than reusing one clip for everyone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════ BEST PRACTICES ══════════════════ */}
      <section className="asv-section asv-alt-bg">
        <div className="asv-container">
          <h2>Best Practices for AI Sales Videos</h2>
          <p className="asv-section-intro">
            These habits separate sales videos that get replies from clips that get ignored.
          </p>

          <div className="asv-grid-2">
            <div className="asv-practice">
              <h3>✅ Lead With Relevance, Not Product</h3>
              <p>
                The first five seconds should reference something specific to the prospect or their
                industry — not your company name or logo animation. Buyers decide whether to keep
                watching almost immediately, and a generic opening gets skipped.
              </p>
            </div>
            <div className="asv-practice">
              <h3>✅ Keep the Script Conversational</h3>
              <p>
                Write the script the way you'd actually talk on a call, not like a brochure. When you
                pair it with a natural{" "}
                <Link href="/tools/ai-voice-generation" className="asv-inline-link">AI voice</Link>,
                conversational phrasing renders far more convincingly than stiff marketing copy.
              </p>
            </div>
            <div className="asv-practice">
              <h3>✅ Match Video Length to Funnel Stage</h3>
              <p>
                Cold outreach should stay under 45 seconds. Post-demo follow-ups and proposal recaps can
                run 60–120 seconds since the prospect is already engaged. Matching length to context
                keeps completion rates high at every stage.
              </p>
            </div>
            <div className="asv-practice">
              <h3>✅ Always End With One Clear Next Step</h3>
              <p>
                Every sales video should close with a single, specific ask — a calendar link, a reply
                prompt, or a demo offer. Videos that end vaguely lose the momentum the visual format
                worked to build.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════ COMMON MISTAKES ══════════════════ */}
      <section className="asv-section">
        <div className="asv-container">
          <h2>Common Mistakes to Avoid</h2>
          <p className="asv-section-intro">
            Most underperforming AI sales videos fail for one of these avoidable reasons.
          </p>

          <div className="asv-mistakes">
            <div className="asv-mistake">
              <span className="asv-mistake-icon">❌</span>
              <div>
                <h3>Sending the Same Clip to Everyone</h3>
                <p>
                  Reusing one generic video across an entire prospect list defeats the purpose of video
                  outreach — the personalization is exactly what drives the reply rate. Regenerate with
                  small script changes rather than mass-sending a single clip.
                </p>
              </div>
            </div>
            <div className="asv-mistake">
              <span className="asv-mistake-icon">❌</span>
              <div>
                <h3>Writing a Prompt Instead of a Script</h3>
                <p>
                  Describing the visual scene without first writing what should actually be said leads
                  to a video that looks fine but says nothing useful. The script is the sales asset —
                  the visual is just the delivery mechanism.
                </p>
              </div>
            </div>
            <div className="asv-mistake">
              <span className="asv-mistake-icon">❌</span>
              <div>
                <h3>Making It Too Long</h3>
                <p>
                  A 90-second cold outreach video will lose most prospects before the ask even arrives.
                  Save length for warmer, later-funnel content where the viewer has already opted into
                  paying attention.
                </p>
              </div>
            </div>
            <div className="asv-mistake">
              <span className="asv-mistake-icon">❌</span>
              <div>
                <h3>Skipping the Review Pass</h3>
                <p>
                  Publishing or sending a generated video without watching it fully first risks an
                  awkward visual moment or a script error going out to a prospect. Always do one full
                  watch-through before it leaves your outbox.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════ ADVANCED TIPS ══════════════════ */}
      <section className="asv-section asv-alt-bg">
        <div className="asv-container">
          <h2>Advanced Tips: Scaling Video Across a Sales Team</h2>
          <p className="asv-section-intro">
            Once the workflow works for one rep, here's how sales teams roll it out across an entire
            outbound motion without it becoming a bottleneck.
          </p>

          <div className="asv-advanced-list">
            <div className="asv-advanced-item">
              <h3>Build a Script Template With Merge Fields</h3>
              <p>
                Create a base script with placeholders — <em>"Hi [FIRST_NAME], noticed [COMPANY] is
                scaling [DEPARTMENT]..."</em> — so reps can fill in prospect research and regenerate a
                fresh video in under two minutes instead of starting from a blank page each time.
              </p>
            </div>
            <div className="asv-advanced-item">
              <h3>Standardize Visual Style Across the Team</h3>
              <p>
                Agree on one consistent visual prompt structure (setting, lighting, framing) across
                reps so every outbound video shares a recognizable brand look, even though each one is
                generated individually with a different script.
              </p>
            </div>
            <div className="asv-advanced-item">
              <h3>Batch Demo Updates Whenever Features Ship</h3>
              <p>
                Rather than treating demo video as a once-a-year production project, regenerate the
                specific segment that changed whenever a feature ships. This keeps sales enablement
                content accurate without needing a full re-shoot.
              </p>
            </div>
            <div className="asv-advanced-item">
              <h3>Track Which Openers Actually Get Replies</h3>
              <p>
                Since generating variations is fast and cheap compared to filming, test two or three
                different opening lines across a segment of your list and double down on whichever
                opener drives the highest reply rate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════ MID CTA ══════════════════ */}
      <section className="asv-mid-cta-section">
        <div className="asv-container asv-mid-cta-inner">
          <h2>Generate Your First Sales Video Free</h2>
          <p>No card required. Free credits included on signup.</p>
          <Link href={CTA_VIDEO} className="asv-mid-cta-btn">
            🎬 Try AI Sales Video Generator →
          </Link>
        </div>
      </section>

      {/* ══════════════════ RELATED TOOLS ══════════════════ */}
      <section className="asv-section">
        <div className="asv-container">
          <h2>Pair It With These Related Tools</h2>
          <p className="asv-section-intro">
            A finished sales video usually needs more than one tool. Here's the rest of the workflow.
          </p>
          <div className="asv-related-grid">
            <Link href="/tools/ai-voice-generation" className="asv-related-card">
              <span>🎙️</span>
              <h3>AI Voice Generator</h3>
              <p>Turn your script into natural narration in 40+ voices and languages.</p>
            </Link>
            <Link href="/tools/ai-image-generation" className="asv-related-card">
              <span>🖼️</span>
              <h3>AI Image Generator</h3>
              <p>Generate thumbnails, backgrounds, or product mockups for your video frames.</p>
            </Link>
            <Link href="/tools/ai-video-generator-for-ecommerce" className="asv-related-card">
              <span>🛍️</span>
              <h3>AI Video Generator for eCommerce</h3>
              <p>The same workflow, applied to product ads and listing videos.</p>
            </Link>
            <Link href="/tools/image-editing" className="asv-related-card">
              <span>🎨</span>
              <h3>Image Editor</h3>
              <p>Design a matching thumbnail or LinkedIn graphic to accompany your video.</p>
            </Link>
            <Link href="/tools/video-speed-modifier" className="asv-related-card">
              <span>⚡</span>
              <h3>Video Speed Modifier</h3>
              <p>Tighten pacing on a generated clip for a punchier outreach video.</p>
            </Link>
            <Link href="/tools/background-removal" className="asv-related-card">
              <span>✂️</span>
              <h3>Background Remover</h3>
              <p>Clean up headshots or logos before using them in image-to-video generation.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════ FAQ ══════════════════ */}
      <section className="asv-section asv-alt-bg">
        <div className="asv-container">
          <h2>Frequently Asked Questions</h2>
          <div className="asv-faq-list">
            {faqs.map((f) => (
              <details className="asv-faq-item" key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ FINAL CTA ══════════════════ */}
      <section className="asv-final-cta-section">
        <div className="asv-container asv-final-cta-inner">
          <span className="asv-final-icon">📈</span>
          <h2>Ready to Turn Your Script Into a Sales Video?</h2>
          <p>
            Join sales teams and founders already using AI video to cut production time and
            personalize outreach at scale. Start with free credits — no card, no commitment.
          </p>
          <Link href={CTA_VIDEO} className="asv-final-cta-btn">
            🚀 Generate My Sales Video Now →
          </Link>
          <p className="asv-final-footnote">
            Also explore:{" "}
            <Link href="/create-ai-content" className="asv-inline-link">
              AI Content Creator (Voice, Image &amp; Video)
            </Link>{" "}
            •{" "}
            <Link href="/tools/ai-voice-generation" className="asv-inline-link">
              AI Voice Generator
            </Link>{" "}
            •{" "}
            <Link href="/tools/ai-image-generation" className="asv-inline-link">
              AI Image Generator
            </Link>{" "}
            •{" "}
            <Link href="/pricing" className="asv-inline-link">
              Pricing &amp; Credits
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}