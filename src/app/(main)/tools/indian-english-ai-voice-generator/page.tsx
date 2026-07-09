import type { Metadata } from "next";
import Link from "next/link";
import "./styles.css";

const SLUG = "indian-english-ai-voice-generator";
const CTA_VOICE = `/create-ai-content?tab=voice&utm_source=${SLUG}&utm_medium=cta&utm_campaign=seo`;
const CTA_VIDEO = `/create-ai-content?tab=video&utm_source=${SLUG}&utm_medium=cta&utm_campaign=seo`;
const CTA_IMAGE = `/create-ai-content?tab=image&utm_source=${SLUG}&utm_medium=cta&utm_campaign=seo`;

export const metadata: Metadata = {
  title: "Indian English AI Voice Generator — Natural Indian Accent Text to Speech (Free)",
  description:
    "Generate natural Indian-accented English voiceovers for YouTube, e-learning, IVR, and corporate training. Free AI voice generator with authentic Indian English male and female voices — no studio, no accent coaching, instant MP3 download.",
  keywords: [
    "indian english ai voice generator",
    "indian accent text to speech",
    "indian english voiceover ai",
    "indian english tts free",
    "ai voice indian accent english",
    "indian english voice for youtube",
    "corporate training voice indian accent",
  ],
  alternates: {
    canonical: `https://scenith.in/tools/${SLUG}`,
  },
  openGraph: {
    title: "Indian English AI Voice Generator — Free Indian Accent TTS",
    description:
      "Generate authentic Indian-accented English voiceovers in seconds. Perfect for YouTube, e-learning, IVR, and corporate content aimed at Indian audiences.",
    url: `https://scenith.in/tools/${SLUG}`,
    type: "website",
  },
};

const faqs = [
  {
    q: "What is an Indian English AI voice generator?",
    a: "An Indian English AI voice generator converts written English text into speech using a voice model trained to speak English the way an Indian speaker naturally would — with Indian English rhythm, stress patterns, and pronunciation, rather than a US or UK accent. It's built for content aimed at Indian audiences who respond better to a familiar, relatable accent than a foreign-sounding narrator.",
  },
  {
    q: "How is Indian English different from a generic American or British AI voice?",
    a: "Indian English has distinct rhythm and stress patterns — more syllable-timed than the stress-timed cadence of American English, softer retroflex consonants, and different intonation on questions and lists. A generic US or UK voice reading Indian names, place names, or Hinglish-adjacent phrasing often mispronounces them or sounds oddly foreign. An Indian English voice model is trained specifically to handle this naturally.",
  },
  {
    q: "Is this the same as the Hindi voice generator?",
    a: "No. The Hindi voice generator converts Devanagari script (हिंदी) into Hindi speech. This tool is for English text — the script and words are in English, but the voice speaks with an Indian accent. Use this when your audience reads and understands English but responds better to a familiar Indian voice, and use the Hindi tool when your content itself is written in Hindi.",
  },
  {
    q: "Can I use Indian English AI voice for corporate training and e-learning?",
    a: "Yes — this is one of the strongest use cases. Corporate training modules, compliance videos, and e-learning courses aimed at Indian employees or students perform better with a narrator whose accent matches the audience's own, which increases comprehension and trust compared to a foreign-accented voice reading the same script.",
  },
  {
    q: "Is Indian English AI voice good for YouTube monetization?",
    a: "Yes, AI-generated voiceovers are accepted for YouTube monetization as long as your overall content is original and provides value — this is explicitly allowed under YouTube's current policies. Many Indian faceless YouTube channels covering tech reviews, finance, and news commentary in English use AI Indian-accented narration specifically because it feels more authentic to their audience than a US-accented voice.",
  },
  {
    q: "Does it support Indian names, brands, and place names correctly?",
    a: "Indian English voice models are trained on a large volume of Indian English speech, which includes common Indian names, cities, brand names, and everyday code-switched terms. This means names like Priya, Rajesh, Bengaluru, or Chandigarh, and brand terms common in Indian business English, are pronounced far more naturally than with a Western-trained voice model.",
  },
  {
    q: "What's the difference between Indian English male and female voice options?",
    a: "Beyond gender, each voice carries a different register — some sound like a formal corporate trainer, others like a warm YouTube narrator or a casual product reviewer. We recommend previewing 2-3 options against your actual script since a script can land very differently depending on delivery style and pacing.",
  },
  {
    q: "Can I adjust speaking speed and use it for IVR or phone systems?",
    a: "Yes. Speed is adjustable from slower, clearly enunciated pacing (ideal for IVR menus and customer support scripts) to faster, energetic pacing for ads and social content. Indian English voice output works well for IVR because it matches the accent millions of Indian callers already expect from customer service lines.",
  },
];

export default function IndianEnglishAiVoiceGeneratorPage() {
  return (
    <div className="iev-page">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="iev-breadcrumb">
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
            <a href="/tools/ai-voice-generation" itemProp="item"><span itemProp="name">AI Voice Generation</span></a>
            <meta itemProp="position" content="3" />
          </li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="name">Indian English AI Voice Generator</span>
            <meta itemProp="position" content="4" />
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
                name: "Scenith Indian English AI Voice Generator",
                description:
                  "Free AI text-to-speech tool that generates natural Indian-accented English voiceovers for YouTube, e-learning, corporate training, and IVR.",
                url: `https://scenith.in/tools/${SLUG}`,
                applicationCategory: "MultimediaApplication",
                operatingSystem: "Web Browser",
                inLanguage: "en-IN",
                offers: {
                  "@type": "Offer",
                  price: "0",
                  priceCurrency: "USD",
                  availability: "https://schema.org/InStock",
                },
                featureList: [
                  "Authentic Indian-accented English voices",
                  "Male and female voice personalities",
                  "Adjustable speed and emotion",
                  "Correct pronunciation of Indian names and places",
                  "Instant MP3 download",
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
                name: "How to Generate an Indian English AI Voiceover",
                description:
                  "Step-by-step process for creating a natural Indian-accented English voiceover using AI.",
                step: [
                  { "@type": "HowToStep", position: 1, name: "Write your English script", text: "Prepare clear, natural English sentences — avoid overly formal or robotic phrasing." },
                  { "@type": "HowToStep", position: 2, name: "Choose an Indian English voice", text: "Preview male and female Indian English voice options to find the right tone." },
                  { "@type": "HowToStep", position: 3, name: "Set speed and emotion", text: "Adjust pacing for your platform — slower for IVR, natural for narration, faster for ads." },
                  { "@type": "HowToStep", position: 4, name: "Generate and preview", text: "Generate the voiceover and listen for pronunciation of names and technical terms." },
                  { "@type": "HowToStep", position: 5, name: "Download and publish", text: "Download the MP3 and use it directly in your video editor, LMS, or IVR system." },
                ],
              },
            ],
          }),
        }}
      />

      {/* ============ HERO ============ */}
      <section className="iev-hero">
        <div className="iev-container">
          <div className="iev-hero-badge">
            <span>🇮🇳</span> English Voiceovers, Indian Accent
          </div>

          <h1 className="iev-hero-title">
            Indian English AI Voice Generator
            <span className="iev-hero-sub-title">Natural Indian-accented English voices for content that speaks to India</span>
          </h1>

          <p className="iev-hero-desc">
            A US or UK narrator reading your script often sounds slightly foreign to Indian ears —
            and mispronounces Indian names every time. Generate a natural{" "}
            <strong>Indian English voiceover</strong> instead: correct rhythm, correct emphasis,
            and correct pronunciation of Indian names, cities, and brands, in seconds. Built for
            YouTubers, e-learning creators, corporate trainers, and businesses speaking to an
            Indian audience in English.
          </p>

          {/* Prompt box — plain GET form, no client JS required */}
          <form className="iev-prompt-card" action="/create-ai-content" method="GET">
            <input type="hidden" name="tab" value="voice" />
            <input type="hidden" name="utm_source" value={SLUG} />
            <input type="hidden" name="utm_medium" value="prompt-box" />
            <input type="hidden" name="utm_campaign" value="seo" />

            <label htmlFor="iev-prompt" className="iev-prompt-label">
              Type your English script for an Indian-accented voiceover
            </label>
            <textarea
              id="iev-prompt"
              name="text"
              className="iev-prompt-textarea"
              placeholder="e.g. Welcome back to the channel! Today we're breaking down five personal finance mistakes that most Indian professionals make in their twenties — and exactly how to fix them."
              rows={3}
              maxLength={600}
            />
            <div className="iev-prompt-footer">
              <span className="iev-prompt-hint">
                Tip: write it exactly as you'd naturally say it out loud
              </span>
              <button type="submit" className="iev-prompt-submit">
                🎙️ Generate Indian English Voice →
              </button>
            </div>
          </form>

          <div className="iev-hero-trust">
            <span>✅ No signup to try</span>
            <span>✅ Male &amp; female voices</span>
            <span>✅ Correct Indian name pronunciation</span>
            <span>✅ MP3 instant download</span>
          </div>
        </div>
      </section>

      {/* ============ DEFINITION ============ */}
      <section className="iev-section">
        <div className="iev-container iev-narrow">
          <h2>What Is Indian English AI Voice, Exactly?</h2>
          <p>
            Indian English (often written as "IndE" in linguistics literature) is not a mispronounced
            version of British or American English — it's a distinct, well-documented variety of
            English spoken by hundreds of millions of people, with its own rhythm, stress patterns,
            and intonation. An <strong>Indian English AI voice</strong> is a text-to-speech model
            trained specifically on this variety, so it speaks English the way a Bengaluru product
            manager, a Delhi news anchor, or a Mumbai customer support agent actually would — not
            the way a Californian or Londoner would read the same sentence.
          </p>
          <p>
            This is a different tool from a{" "}
            <Link href="/tools/hindi-female-ai-voice-generation">Hindi voice generator</Link>,
            which converts Devanagari script into Hindi speech. Here, your script stays in English —
            you're simply choosing a narrator whose accent matches your audience rather than a
            generic Western default. This distinction matters more than it might seem: research on
            accent and trust consistently shows that listeners process a familiar accent faster and
            rate it as more credible than an unfamiliar one, even when the words are identical.
          </p>
          <p>
            Practically, this means your existing English scripts — YouTube narration, e-learning
            modules, product explainer videos, IVR prompts — can be voiced with a narrator that
            sounds like it belongs to the same market as your audience, without rewriting a single
            sentence.
          </p>
        </div>
      </section>

      {/* ============ WHY IT MATTERS ============ */}
      <section className="iev-section iev-alt">
        <div className="iev-container iev-narrow">
          <h2>Why the Accent of Your Voiceover Actually Matters</h2>
          <p>
            It's tempting to assume a voice is a voice as long as the words are correct. In
            practice, accent affects three measurable things: comprehension speed, perceived
            trust, and correct pronunciation of proper nouns.
          </p>
          <ul className="iev-list">
            <li>
              <strong>Comprehension speed.</strong> Listeners process speech fastest when it
              matches the phonetic patterns they grew up hearing. An Indian audience parses Indian
              English narration with less cognitive effort than an unfamiliar American or British
              accent, especially at natural speaking speed.
            </li>
            <li>
              <strong>Perceived trust and relatability.</strong> A financial literacy video, a
              corporate compliance module, or a customer support IVR feels more credible when the
              voice sounds like it could belong to a colleague or a familiar brand — not a
              foreign-sounding stock narrator.
            </li>
            <li>
              <strong>Correct pronunciation of names and places.</strong> Generic Western TTS
              models routinely mangle Indian names ("Priya" rhymed incorrectly, "Bengaluru" read
              with the wrong stress), which breaks immersion instantly. Indian English voice models
              are trained on enough Indian speech data to get this right by default.
            </li>
          </ul>
          <p>
            None of this means an American or British voice is wrong for Indian content — a global
            SaaS product targeting Indian enterprise buyers might intentionally want a neutral
            international accent. But for content squarely aimed at Indian consumers, employees, or
            students, matching the accent to the audience is a small production decision with an
            outsized effect on engagement.
          </p>
        </div>
      </section>

      {/* ============ USE CASES / EXAMPLES ============ */}
      <section className="iev-section">
        <div className="iev-container">
          <h2>Real Examples by Platform &amp; Use Case</h2>
          <p className="iev-section-intro">
            The right voice personality and pacing changes depending on where the audio will
            actually be heard.
          </p>

          <div className="iev-example-grid">
            <article className="iev-example-card">
              <span className="iev-example-icon">📺</span>
              <h3>YouTube — Tech &amp; Finance Commentary</h3>
              <p>
                Faceless English-language channels covering tech reviews, stock market
                commentary, or startup news use a confident, energetic Indian English voice that
                feels native to the audience instead of imported.
              </p>
              <div className="iev-example-prompt">
                "Today Sensex opened flat, but three mid-cap stocks are showing unusual volume —
                here's what analysts are watching."
              </div>
            </article>

            <article className="iev-example-card">
              <span className="iev-example-icon">🎓</span>
              <h3>E-learning &amp; EdTech Platforms</h3>
              <p>
                English-medium course platforms for UPSC prep, spoken English coaching, or skill
                development narrate lessons in a warm, clear Indian English voice that students
                find easier to follow than a foreign-accented default.
              </p>
              <div className="iev-example-prompt">
                "In this module, we'll cover the fundamentals of supply and demand with examples
                from everyday Indian markets."
              </div>
            </article>

            <article className="iev-example-card">
              <span className="iev-example-icon">🏢</span>
              <h3>Corporate Training &amp; Compliance</h3>
              <p>
                HR onboarding videos, POSH training, and compliance modules for Indian offices use
                a professional Indian English narrator so the content feels internally produced,
                not outsourced.
              </p>
              <div className="iev-example-prompt">
                "Welcome to your onboarding module. Over the next fifteen minutes, we'll walk you
                through our code of conduct and reporting procedures."
              </div>
            </article>

            <article className="iev-example-card">
              <span className="iev-example-icon">📞</span>
              <h3>IVR &amp; Customer Support Systems</h3>
              <p>
                Banking, telecom, and insurance IVR menus in English use Indian-accented prompts
                because that's the accent most Indian callers already expect from a support line.
              </p>
              <div className="iev-example-prompt">
                "For account balance, press one. For card services, press two. To speak with an
                executive, press zero."
              </div>
            </article>

            <article className="iev-example-card">
              <span className="iev-example-icon">🛍️</span>
              <h3>D2C &amp; E-commerce Product Videos</h3>
              <p>
                English-language product explainer videos for Indian D2C brands use a friendly,
                conversational Indian English voice that mirrors how the brand's own customer
                support would sound.
              </p>
              <div className="iev-example-prompt">
                "This serum is formulated for Indian skin and weather conditions — lightweight,
                non-greasy, and safe for daily use."
              </div>
            </article>

            <article className="iev-example-card">
              <span className="iev-example-icon">📱</span>
              <h3>App Onboarding &amp; Explainer Videos</h3>
              <p>
                Fintech and consumer apps built for the Indian market use Indian English narration
                for onboarding flows and feature explainer videos shown inside the app.
              </p>
              <div className="iev-example-prompt">
                "Let's set up your first payment in under a minute — just link your bank account
                to get started."
              </div>
            </article>
          </div>

          <p className="iev-example-footnote">
            Building a full video around your voiceover? Pair it with an{" "}
            <Link href={CTA_VIDEO}>AI-generated video</Link> or supporting{" "}
            <Link href={CTA_IMAGE}>AI images</Link> to complete the production.
          </p>
        </div>
      </section>

      {/* ============ HOW TO ============ */}
      <section className="iev-section iev-alt">
        <div className="iev-container iev-narrow">
          <h2>How to Generate an Indian English Voiceover, Step by Step</h2>

          <div className="iev-steps">
            <div className="iev-step">
              <span className="iev-step-num">1</span>
              <div>
                <h3>Write your script the way you'd actually say it</h3>
                <p>
                  Avoid overly formal, translated-sounding phrasing — write sentences the way a
                  natural English speaker would say them out loud. Short sentences, contractions
                  where natural, and a clear structure produce noticeably better delivery than
                  dense, formal writing.
                </p>
              </div>
            </div>
            <div className="iev-step">
              <span className="iev-step-num">2</span>
              <div>
                <h3>Choose a male or female Indian English voice</h3>
                <p>
                  Filter voices by gender and preview 2–3 options against a line from your actual
                  script — not a generic demo sentence. The right voice should sound like it
                  belongs on the same platform your content is published on.
                </p>
              </div>
            </div>
            <div className="iev-step">
              <span className="iev-step-num">3</span>
              <div>
                <h3>Set speed to match your content type</h3>
                <p>
                  Use a slower, clearly enunciated pace (around 0.85x–0.9x) for IVR and compliance
                  training where clarity matters most. Use natural speed (1.0x) for narration and
                  YouTube content, and a slightly faster pace for high-energy ads.
                </p>
              </div>
            </div>
            <div className="iev-step">
              <span className="iev-step-num">4</span>
              <div>
                <h3>Generate and listen for names and technical terms</h3>
                <p>
                  Before finalizing, listen specifically to how the voice handles proper nouns,
                  brand names, and any industry-specific terminology in your script — this is
                  where accent mismatch shows up most obviously if you're using the wrong voice
                  model.
                </p>
              </div>
            </div>
            <div className="iev-step">
              <span className="iev-step-num">5</span>
              <div>
                <h3>Download and drop it into your workflow</h3>
                <p>
                  Download the MP3 and import it directly into your video editor, LMS platform, or
                  IVR system — no format conversion required. For video content, sync it against
                  your visuals section by section rather than as one continuous unedited track.
                </p>
              </div>
            </div>
          </div>

          <div className="iev-inline-cta">
            <Link href={CTA_VOICE} className="iev-inline-cta-btn">
              🎙️ Generate My Indian English Voice — Free →
            </Link>
          </div>
        </div>
      </section>

      {/* ============ BEST PRACTICES ============ */}
      <section className="iev-section">
        <div className="iev-container iev-narrow">
          <h2>Best Practices for Indian English Voiceovers</h2>
          <div className="iev-practice-grid">
            <div className="iev-practice-card">
              <h3>✍️ Write for the ear, not the eye</h3>
              <p>
                Read your script aloud before generating. Sentences that look fine on a page
                often sound stiff when spoken — shorten them, break up long clauses, and use
                natural connectors like "so," "now," and "next."
              </p>
            </div>
            <div className="iev-practice-card">
              <h3>🎯 Match voice tone to content type</h3>
              <p>
                A confident, energetic voice suits YouTube and ads; a calm, measured voice suits
                e-learning and compliance training. Don't default to the same voice for every
                project regardless of context.
              </p>
            </div>
            <div className="iev-practice-card">
              <h3>🔤 Spell out ambiguous abbreviations</h3>
              <p>
                Write "EMI" as "E-M-I" or spell out "SIP" as "Systematic Investment Plan" the
                first time it appears if pronunciation could be ambiguous — this avoids awkward
                misreads in finance and fintech scripts.
              </p>
            </div>
            <div className="iev-practice-card">
              <h3>📏 Keep sentences under 20 words</h3>
              <p>
                Long, multi-clause sentences increase the odds of an unnatural pause or emphasis
                in the wrong place. Break complex ideas into two shorter sentences instead of one
                long one.
              </p>
            </div>
            <div className="iev-practice-card">
              <h3>🔁 Regenerate rather than accept "close enough"</h3>
              <p>
                If a specific word or name sounds slightly off, try rephrasing it or adjusting
                punctuation around it rather than publishing a take you're not fully happy with —
                regeneration is fast and costs very little.
              </p>
            </div>
            <div className="iev-practice-card">
              <h3>🎚️ Normalize audio levels before publishing</h3>
              <p>
                If you're mixing the voiceover with background music or sound effects, normalize
                levels so the voice sits clearly above the mix — a great voice is wasted if it's
                buried under music.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ MISTAKES ============ */}
      <section className="iev-section iev-alt">
        <div className="iev-container iev-narrow">
          <h2>Common Mistakes to Avoid</h2>
          <ul className="iev-mistake-list">
            <li>
              <strong>Using a US or UK voice for India-first content by default.</strong> This is
              the single most common miss — teams reach for the default American voice without
              considering whether an Indian-accented narrator would land better with their actual
              audience.
            </li>
            <li>
              <strong>Writing overly formal, translated-sounding scripts.</strong> Scripts that
              read like a legal document rarely sound natural when spoken, regardless of which
              voice reads them. Write conversationally first, formalize only where necessary.
            </li>
            <li>
              <strong>Ignoring speed settings.</strong> Using the same default speed for an IVR
              menu and a high-energy ad produces a mismatch — IVR needs to be slower and clearer,
              ads can run faster and punchier.
            </li>
            <li>
              <strong>Not previewing before publishing at scale.</strong> If you're generating
              dozens of clips for a course or campaign, always preview a handful first — a
              systemic pronunciation issue is expensive to fix after you've generated fifty
              files.
            </li>
            <li>
              <strong>Mismatching voice gender and tone to brand identity.</strong> A playful
              consumer app and a formal financial services brand need different narrator energy —
              don't reuse the same voice choice across projects with very different audiences.
            </li>
            <li>
              <strong>Skipping a listen-through of the full final cut.</strong> Always listen to
              the complete assembled video or audio once before publishing — issues that aren't
              obvious in an isolated clip often become obvious once it's paired with music or
              visuals.
            </li>
          </ul>
        </div>
      </section>

      {/* ============ ADVANCED TIPS ============ */}
      <section className="iev-section">
        <div className="iev-container iev-narrow">
          <h2>Advanced Tips for Better Indian English Voiceovers</h2>
          <p>
            Once you're comfortable with the basics, a few refinements consistently improve the
            final result for more demanding projects.
          </p>
          <p>
            <strong>Use punctuation to control pacing deliberately.</strong> Commas create short
            pauses, periods create longer ones, and an em dash can create a dramatic beat before a
            key point. Punctuation is your main lever for controlling rhythm without any manual
            audio editing.
          </p>
          <p>
            <strong>Generate section by section for long-form content.</strong> For a 10-minute
            course module or a lengthy explainer, generate in 200–300 word chunks rather than one
            giant block — this makes it far easier to regenerate just the section that needs a
            fix instead of the whole file.
          </p>
          <p>
            <strong>Build a consistent narrator identity across a series.</strong> If you're
            producing a multi-part course or a recurring YouTube segment, always use the same
            voice, speed, and tone settings so your audience develops familiarity with a
            consistent "host," even though no single person is actually recording it.
          </p>
          <p>
            <strong>Pair English narration with Hindi versions for wider reach.</strong> Many
            successful Indian creators publish both an Indian English version and a{" "}
            <Link href="/tools/hindi-female-ai-voice-generation">Hindi voiceover</Link> version of
            the same script to cover both English-comfortable and Hindi-first segments of their
            audience without doubling production effort.
          </p>
          <p>
            <strong>Combine voice with matching visuals for a complete package.</strong> A strong
            Indian English narration pairs naturally with an{" "}
            <Link href={CTA_VIDEO}>AI-generated explainer video</Link> or a{" "}
            <Link href="/tools/ai-product-demo-video-generator">product demo video</Link> — since
            both are generated from the same underlying platform, you can build a full multimedia
            asset without switching tools.
          </p>
        </div>
      </section>

      {/* ============ RELATED TOOLS / INTERNAL LINKS ============ */}
      <section className="iev-section iev-alt">
        <div className="iev-container">
          <h2>Related Tools to Complete Your Content</h2>
          <p className="iev-section-intro">
            Voiceover is often just one piece of the final asset. These tools work from the same
            credit balance to help you finish the job.
          </p>
          <div className="iev-related-grid">
            <Link href={CTA_VOICE} className="iev-related-card">
              <span>🎙️</span>
              <h3>AI Voice Generator (All Languages)</h3>
              <p>Explore 40+ voices across 20+ languages beyond Indian English.</p>
            </Link>
            <Link href="/tools/hindi-female-ai-voice-generation" className="iev-related-card">
              <span>👩</span>
              <h3>Hindi Female Voice Generator</h3>
              <p>Generate natural Hindi-language narration for Devanagari scripts.</p>
            </Link>
            <Link href={CTA_VIDEO} className="iev-related-card">
              <span>🎬</span>
              <h3>AI Video Generator</h3>
              <p>Pair your voiceover with cinematic AI-generated video clips.</p>
            </Link>
            <Link href="/tools/ai-product-demo-video-generator" className="iev-related-card">
              <span>🖥️</span>
              <h3>Product Demo Video Generator</h3>
              <p>Turn your voiceover script into a full narrated product demo.</p>
            </Link>
            <Link href="/tools/ai-landing-page-video-generator" className="iev-related-card">
              <span>🎥</span>
              <h3>Landing Page Video Generator</h3>
              <p>Add a cinematic hero video above your voiceover-narrated content.</p>
            </Link>
            <Link href={CTA_IMAGE} className="iev-related-card">
              <span>🖼️</span>
              <h3>AI Image Generator</h3>
              <p>Create supporting visuals, thumbnails, and slide graphics.</p>
            </Link>
            <Link href="/tools/image-editing" className="iev-related-card">
              <span>🎨</span>
              <h3>Image Editor</h3>
              <p>Design thumbnails and graphics to go alongside your narration.</p>
            </Link>
            <Link href="/tools/pdf-tools" className="iev-related-card">
              <span>📄</span>
              <h3>PDF Tools Suite</h3>
              <p>Turn your script or course notes into a downloadable PDF handout.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="iev-section">
        <div className="iev-container iev-narrow">
          <h2>Frequently Asked Questions</h2>
          <div className="iev-faq-list">
            {faqs.map((f) => (
              <details key={f.q} className="iev-faq-item">
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="iev-final-cta">
        <div className="iev-container iev-narrow">
          <h2>Give Your Content a Voice Your Audience Actually Recognizes</h2>
          <p>
            Stop settling for a foreign-sounding default narrator. Generate a natural Indian
            English voiceover that fits your audience in the time it takes to write this sentence.
          </p>
          <div className="iev-final-cta-buttons">
            <Link href={CTA_VOICE} className="iev-final-cta-primary">
              🎙️ Generate Indian English Voice — Free
            </Link>
            <Link href="/create-ai-content" className="iev-final-cta-secondary">
              Explore All AI Tools →
            </Link>
          </div>
          <p className="iev-final-footnote">
            Also explore:{" "}
            <Link href="/tools/hindi-female-ai-voice-generation">Hindi Voice Generator</Link> ·{" "}
            <Link href={CTA_VIDEO}>AI Video Generation</Link> ·{" "}
            <Link href={CTA_IMAGE}>AI Image Generator</Link>
          </p>
        </div>
      </section>
    </div>
  );
}