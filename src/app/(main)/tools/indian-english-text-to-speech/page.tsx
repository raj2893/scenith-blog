import type { Metadata } from "next";
import Link from "next/link";
import "./styles.css";

const SLUG = "indian-english-text-to-speech";
const CTA_URL = `/create-ai-content?tab=voice&utm_source=${SLUG}&utm_medium=cta&utm_campaign=seo`;

export const metadata: Metadata = {
  title: "Indian English Text to Speech — Free AI Voice Generator (Authentic Indian Accent)",
  description:
    "Convert text to speech in a natural Indian English accent. Free AI voice generator for YouTube, e-learning, IVR and ads — realistic Indian-accented male & female voices, instant MP3 download, commercial use.",
  keywords: [
    "indian english text to speech",
    "indian accent tts",
    "indian english voice generator",
    "indian english ai voice",
    "text to speech indian accent",
    "indian voice over generator",
    "free indian english tts",
  ],
  alternates: {
    canonical: `https://scenith.in/tools/${SLUG}`,
  },
  openGraph: {
    title: "Indian English Text to Speech — Free AI Voice Generator",
    description:
      "Generate natural Indian-accented English voiceovers from text. Free, instant MP3, commercial use. Built for Indian creators, educators and businesses.",
    url: `https://scenith.in/tools/${SLUG}`,
    type: "website",
  },
};

const faqs = [
  {
    q: "What is Indian English text to speech?",
    a: "Indian English text to speech is a neural AI technology that converts written English text into spoken audio using an authentic Indian accent — the way English is naturally spoken across India. Unlike generic American or British TTS, Indian English voices render the rhythm, stress patterns, and pronunciation (like retroflex consonants and syllable-timed delivery) that Indian audiences instantly recognise as familiar and trustworthy.",
  },
  {
    q: "Is the Indian English voice generator free to use?",
    a: "Yes. Scenith's Indian English TTS is free to try with a generous monthly character allowance and no credit card required for your first generation. You can preview voices, generate audio, and download high-quality MP3 files for personal and commercial use without watermarks.",
  },
  {
    q: "Can I use Indian English AI voice for monetised YouTube videos?",
    a: "Absolutely. YouTube permits AI-generated voices for monetisation as long as your overall content is original and valuable. Many of India's most successful faceless English channels — covering tech, finance, motivation, and education — use Indian-accented AI narration to build authenticity with domestic audiences.",
  },
  {
    q: "What's the difference between Indian English, American, and British TTS?",
    a: "The three accents differ in vowel quality, stress placement, and rhythm. American English is rhotic and stress-timed; British Received Pronunciation drops many 'r' sounds; Indian English is typically syllable-timed with clearer, more even pronunciation and characteristic intonation. For Indian audiences, an Indian English voice reduces the 'foreign narrator' feeling and improves retention and relatability.",
  },
  {
    q: "Does Indian English TTS handle Hinglish and Indian names correctly?",
    a: "Yes. Quality Indian English voices are trained to pronounce common Hinglish words, Indian names (like Priya, Arjun, Rajesh), place names (Bengaluru, Ahmedabad, Chennai), and India-specific terms (crore, lakh, GST, UPI) naturally — something generic Western TTS engines frequently mispronounce.",
  },
  {
    q: "What audio format do I get, and can I use it commercially?",
    a: "You download high-quality MP3 files that work with every editor (Premiere, DaVinci Resolve, CapCut), podcast host, and IVR system. Generated audio comes with full commercial rights — no attribution, no royalties, no watermark.",
  },
  {
    q: "How long does it take to generate an Indian English voiceover?",
    a: "Generation typically completes in about 2–4 seconds per clip. You can preview a voice, tweak your script, and regenerate instantly — making it far faster than booking a studio session or a human voice artist.",
  },
  {
    q: "Which Indian English voice is best for my content?",
    a: "For education and explainers, choose a clear, measured voice. For ads and promos, pick an energetic, upbeat delivery. For IVR and corporate use, a neutral professional voice works best. For storytelling and audiobooks, an expressive narrator carries emotion best. Preview a few before committing.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const appSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Scenith Indian English Text to Speech",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Web Browser",
  inLanguage: "en-IN",
  offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "1268",
    bestRating: "5",
    worstRating: "1",
  },
  featureList: [
    "Authentic Indian English accent",
    "Male and female Indian voices",
    "Hinglish and Indian name support",
    "Adjustable speed and tone",
    "Instant MP3 download",
    "Commercial use, no watermark",
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://scenith.in/" },
    { "@type": "ListItem", position: 2, name: "Tools", item: "https://scenith.in/tools" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Indian English Text to Speech",
      item: `https://scenith.in/tools/${SLUG}`,
    },
  ],
};

export default function IndianEnglishTTSPage() {
  return (
    <div className="ie-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="ie-breadcrumb">
        <ol>
          <li><a href="/">Home</a></li>
          <li aria-hidden="true">/</li>
          <li><a href="/tools">Tools</a></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page">Indian English Text to Speech</li>
        </ol>
      </nav>

      {/* ===== HERO ===== */}
      <header className="ie-hero">
        <div className="ie-container">
          <span className="ie-eyebrow">
            <span className="ie-eyebrow-dot" /> Indian English · Neural AI Voice · en-IN
          </span>
          <h1 className="ie-h1">
            Indian English Text to Speech that actually
            <span className="ie-h1-accent"> sounds Indian</span>
          </h1>
          <p className="ie-hero-lead">
            Turn any English script into a natural, Indian-accented voiceover in seconds.
            Built for creators, educators, and businesses whose audience is in India —
            so your narration sounds like it belongs, not like an imported robot reading
            from a foreign textbook. Free to start, instant MP3, full commercial rights.
          </p>

          {/* Prompt box → native GET form, no client JS */}
          <form className="ie-prompt-card" action="/create-ai-content" method="GET">
            <input type="hidden" name="tab" value="voice" />
            <input type="hidden" name="utm_source" value={SLUG} />
            <input type="hidden" name="utm_medium" value="prompt-box" />
            <input type="hidden" name="utm_campaign" value="seo" />
            <label className="ie-prompt-label" htmlFor="ie-script">
              ✍️ Paste your script — we&apos;ll open the voice studio with it ready
            </label>
            <textarea
              id="ie-script"
              name="text"
              className="ie-prompt-textarea"
              rows={4}
              placeholder="Namaste and welcome back to the channel. Today we're breaking down exactly how to save your first one lakh rupees…"
              maxLength={2000}
            />
            <div className="ie-prompt-row">
              <span className="ie-prompt-hint">No signup needed to preview · MP3 download · Commercial use</span>
              <button type="submit" className="ie-btn ie-btn-primary">
                🎙️ Generate Indian Voice →
              </button>
            </div>
          </form>

          <div className="ie-trust-row">
            <span className="ie-pill">🇮🇳 Authentic en-IN accent</span>
            <span className="ie-pill">👥 Male &amp; female voices</span>
            <span className="ie-pill">₹ Handles lakh / crore / GST</span>
            <span className="ie-pill">📥 Instant MP3</span>
            <span className="ie-pill">🚫 No watermark</span>
          </div>
        </div>
      </header>

      <main className="ie-container ie-main">
        {/* ===== DEFINITION ===== */}
        <section className="ie-section" aria-labelledby="what-heading">
          <span className="ie-kicker">The basics</span>
          <h2 id="what-heading" className="ie-h2">What is Indian English text to speech?</h2>
          <p>
            Indian English text to speech (TTS) is a neural voice technology that reads written
            English aloud in the accent and cadence used across India. English is one of India&apos;s
            most widely spoken languages, but the way it&apos;s spoken here has a distinct fingerprint:
            it tends to be <strong>syllable-timed rather than stress-timed</strong>, vowels are
            pronounced more fully and evenly, and consonants carry the crisp, deliberate quality that
            makes Indian English so clear and easy to follow. A good Indian English AI voice captures
            all of that — not as a caricature, but as the natural, professional register you&apos;d hear
            from a news anchor in Delhi or a trainer in Bengaluru.
          </p>
          <p>
            Why does this matter? Because accent is trust. When an Indian audience hears an American
            drawl or a clipped British RP narrating a video about Indian tax rules, mutual fund SIPs,
            or a Diwali sale, something feels slightly off — the narrator sounds like an outsider. An
            Indian English voice removes that friction instantly. Studies of audience retention
            consistently show that listeners engage longer with narration that matches their own
            linguistic community. For creators targeting India&apos;s 500-million-plus English-comfortable
            audience, that relatability is a measurable advantage.
          </p>
          <p>
            The other practical difference is vocabulary. Generic Western TTS engines stumble on the
            words Indian content is full of: numbers like <em>lakh</em> and <em>crore</em>, terms like
            <em> GST</em>, <em>UPI</em>, and <em>EMI</em>, names like <em>Arjun</em> and <em>Lakshmi</em>,
            and cities like <em>Ahmedabad</em> and <em>Thiruvananthapuram</em>. A purpose-built Indian
            English voice pronounces these correctly the first time, saving you the endless
            re-recording that makes foreign TTS a non-starter for serious Indian creators. Ready to
            hear the difference?{" "}
            <Link href={CTA_URL} className="ie-inline-link">Try the Indian English voice generator free →</Link>
          </p>
        </section>

        {/* ===== USE CASES ===== */}
        <section className="ie-section" aria-labelledby="usecase-heading">
          <span className="ie-kicker">Where it shines</span>
          <h2 id="usecase-heading" className="ie-h2">Who uses Indian English AI voice — and why</h2>
          <p className="ie-section-intro">
            Indian English TTS isn&apos;t a novelty — it&apos;s a production tool that quietly powers a
            huge share of India&apos;s digital content. Here&apos;s where it delivers the most value, with
            concrete examples from each niche.
          </p>

          <div className="ie-usecase-grid">
            <article className="ie-card">
              <span className="ie-card-icon">🎬</span>
              <h3 className="ie-h3">Faceless YouTube &amp; Shorts creators</h3>
              <p>
                Tech explainers, stock-market breakdowns, and &quot;top 10&quot; countdowns dominate
                Indian YouTube — and most run without a face on camera. An Indian English voice lets a
                solo creator publish daily without ever recording their own audio. A finance channel
                explaining &quot;how SIP works&quot; sounds instantly credible in a measured Indian
                accent, whereas a foreign voice would undercut the domestic authority the content needs.
              </p>
            </article>

            <article className="ie-card">
              <span className="ie-card-icon">🎓</span>
              <h3 className="ie-h3">Educators &amp; EdTech</h3>
              <p>
                From UPSC coaching to CBSE lesson summaries and coding tutorials, Indian learners
                respond best to narration that mirrors how their own teachers speak. An EdTech platform
                can narrate an entire course library at a fraction of studio cost — and update a single
                line without re-booking a voice artist. Clarity and even pacing make dense material
                easier to absorb.
              </p>
            </article>

            <article className="ie-card">
              <span className="ie-card-icon">📞</span>
              <h3 className="ie-h3">IVR &amp; business phone systems</h3>
              <p>
                &quot;Press 1 for account balance, press 2 for support.&quot; Indian customers trust a
                familiar accent on a helpline. Banks, clinics, D2C brands, and local service businesses
                use Indian English TTS to build professional IVR menus and automated call flows —
                generating and updating prompts in minutes instead of days.
              </p>
            </article>

            <article className="ie-card">
              <span className="ie-card-icon">📣</span>
              <h3 className="ie-h3">Marketers &amp; ad agencies</h3>
              <p>
                Instagram Reels ads, YouTube pre-rolls, and WhatsApp promotional videos convert better
                when the voice matches the buyer. A D2C skincare brand or a real-estate developer in
                Ahmedabad can produce a polished ad voiceover — energetic and on-brand — without a
                single studio booking, then A/B test multiple scripts the same afternoon.
              </p>
            </article>

            <article className="ie-card">
              <span className="ie-card-icon">📚</span>
              <h3 className="ie-h3">Audiobook &amp; podcast producers</h3>
              <p>
                Self-help, business, and fiction titles by Indian authors reach a wider audience as
                audiobooks. An expressive Indian English narrator keeps the cultural register intact.
                Podcasters use it for intros, sponsor reads, and segment transitions that stay
                consistent no matter where they&apos;re recording from.
              </p>
            </article>

            <article className="ie-card">
              <span className="ie-card-icon">🏢</span>
              <h3 className="ie-h3">Corporate training &amp; L&amp;D</h3>
              <p>
                Onboarding modules, compliance videos, and internal explainers for Indian teams land
                better in a familiar accent. HR and L&amp;D teams narrate entire training libraries
                in-house, keep them current, and localise tone for different departments — all without
                external vendors.
              </p>
            </article>
          </div>
        </section>

        {/* ===== PLATFORM EXAMPLES ===== */}
        <section className="ie-section" aria-labelledby="examples-heading">
          <span className="ie-kicker">Real scripts, real platforms</span>
          <h2 id="examples-heading" className="ie-h2">Platform-specific examples you can copy</h2>
          <p className="ie-section-intro">
            The best way to understand Indian English TTS is to see how the same tool adapts across
            platforms. Below are four ready-to-use script patterns — notice how tone and length shift
            with the medium.
          </p>

          <div className="ie-example">
            <div className="ie-example-tag">▶ YouTube · Finance explainer</div>
            <blockquote className="ie-quote">
              &quot;Namaste friends, and welcome back. Today we&apos;ll understand how a SIP of just
              five thousand rupees a month can grow to over one crore in twenty years. Sounds too good?
              Stay till the end — the maths will surprise you.&quot;
            </blockquote>
            <p className="ie-example-note">
              An even, confident Indian English delivery makes financial claims feel authoritative
              rather than salesy. The natural pronunciation of &quot;crore&quot; and &quot;rupees&quot;
              is what a Western voice would fumble.
            </p>
          </div>

          <div className="ie-example">
            <div className="ie-example-tag">📱 Instagram Reel · D2C ad</div>
            <blockquote className="ie-quote">
              &quot;Tired of dull, dry skin this winter? Meet the serum that&apos;s become India&apos;s
              favourite. Dermatologist-tested, made for Indian skin, and now at twenty percent off.
              Tap the link before the sale ends!&quot;
            </blockquote>
            <p className="ie-example-note">
              For Reels, keep it under 15 seconds and energetic. An upbeat Indian voice mirrors the
              target buyer and lifts conversion versus a generic foreign-accented ad read.
            </p>
          </div>

          <div className="ie-example">
            <div className="ie-example-tag">🎓 E-learning · Lesson module</div>
            <blockquote className="ie-quote">
              &quot;In this lesson, we&apos;ll cover the fundamentals of photosynthesis. By the end,
              you&apos;ll be able to explain how plants convert sunlight into energy. Let&apos;s begin
              with the chloroplast.&quot;
            </blockquote>
            <p className="ie-example-note">
              Set the pace slightly slower (around 0.9x) for teaching content. The clear, deliberate
              quality of Indian English is ideal for comprehension-focused narration.
            </p>
          </div>

          <div className="ie-example">
            <div className="ie-example-tag">📞 IVR · Business helpline</div>
            <blockquote className="ie-quote">
              &quot;Thank you for calling. For account balance, press one. To speak with a support
              executive, press two. To repeat this menu, press nine.&quot;
            </blockquote>
            <p className="ie-example-note">
              Use a neutral, professional voice at normal speed. Generate each menu prompt separately
              so you can update a single option without re-recording the whole tree.
            </p>
          </div>

          <p>
            Want to turn any of these into audio right now? Paste your version into the{" "}
            <Link href={CTA_URL} className="ie-inline-link">Indian English voice studio</Link> and
            download the MP3 in seconds.
          </p>
        </section>

        {/* ===== HOW IT WORKS ===== */}
        <section className="ie-section" aria-labelledby="how-heading">
          <span className="ie-kicker">Step by step</span>
          <h2 id="how-heading" className="ie-h2">How to generate an Indian English voiceover</h2>
          <p className="ie-section-intro">
            The whole process takes under a minute and needs zero technical skill. Here&apos;s exactly
            how it works.
          </p>

          <ol className="ie-steps">
            <li className="ie-step">
              <span className="ie-step-num">1</span>
              <div>
                <h3 className="ie-h3">Write or paste your English script</h3>
                <p>
                  Drop your text into the box — a YouTube intro, an ad line, a lesson, or an IVR menu.
                  You can write in plain English or mix in natural Hinglish; the voice handles Indian
                  names, place names, and terms like <em>lakh</em>, <em>crore</em>, and <em>UPI</em>
                  {" "}correctly. Keep sentences conversational for the most natural result.
                </p>
              </div>
            </li>
            <li className="ie-step">
              <span className="ie-step-num">2</span>
              <div>
                <h3 className="ie-h3">Pick an Indian English voice</h3>
                <p>
                  Choose a male or female voice and a personality that fits your content — a clear
                  educator, a confident anchor, an energetic presenter, or a warm storyteller. Every
                  voice has a preview so you can hear exactly how your script will sound before spending
                  a single character.
                </p>
              </div>
            </li>
            <li className="ie-step">
              <span className="ie-step-num">3</span>
              <div>
                <h3 className="ie-h3">Adjust speed and tone</h3>
                <p>
                  Fine-tune the delivery. Slow it to around 0.9x for teaching, keep it at 1.0x for
                  narration, or nudge it faster for punchy ads. Small adjustments here are what separate
                  amateur-sounding audio from a professional voiceover.
                </p>
              </div>
            </li>
            <li className="ie-step">
              <span className="ie-step-num">4</span>
              <div>
                <h3 className="ie-h3">Generate and download the MP3</h3>
                <p>
                  Hit generate and your audio is ready in about 2–4 seconds. Download a clean,
                  watermark-free MP3 ready for YouTube, your editor, a podcast host, or an IVR system —
                  with full commercial rights included.
                </p>
              </div>
            </li>
          </ol>
          <div className="ie-cta-band">
            <p>Try it yourself — no card, no watermark, ready in seconds.</p>
            <Link href={CTA_URL} className="ie-btn ie-btn-primary">Open the Voice Studio →</Link>
          </div>
        </section>

        {/* ===== BEST PRACTICES ===== */}
        <section className="ie-section" aria-labelledby="best-heading">
          <span className="ie-kicker">Get pro results</span>
          <h2 id="best-heading" className="ie-h2">Best practices for natural Indian English narration</h2>
          <p className="ie-section-intro">
            AI voices are only as good as the script you feed them. These habits consistently produce
            audio that listeners can&apos;t tell is synthetic.
          </p>
          <div className="ie-bp-grid">
            <div className="ie-bp">
              <h3 className="ie-h4">Write for the ear, not the eye</h3>
              <p>
                Read your script aloud before generating. Break long, comma-heavy sentences into shorter
                ones. Spoken English is simpler than written English — short sentences give the voice
                natural breathing room and improve clarity.
              </p>
            </div>
            <div className="ie-bp">
              <h3 className="ie-h4">Use punctuation as direction</h3>
              <p>
                Commas create short pauses, full stops create longer ones, and question marks lift the
                intonation. An ellipsis (…) adds a thoughtful beat. Punctuating intentionally is the
                single easiest way to control pacing and emotion.
              </p>
            </div>
            <div className="ie-bp">
              <h3 className="ie-h4">Match voice to content type</h3>
              <p>
                Don&apos;t use a hyper-energetic ad voice for a meditation script, or a soft narrator
                for a hype promo. Preview two or three voices against your actual script and pick the
                one whose tone fits the emotion of the piece.
              </p>
            </div>
            <div className="ie-bp">
              <h3 className="ie-h4">Spell out tricky abbreviations</h3>
              <p>
                If you want &quot;GST&quot; read as letters, that&apos;s usually automatic — but for
                anything ambiguous, write it how it should sound. &quot;Twenty-five&quot; reads more
                reliably than &quot;25&quot; in some contexts; test both.
              </p>
            </div>
            <div className="ie-bp">
              <h3 className="ie-h4">Generate in logical chunks</h3>
              <p>
                For long content like audiobooks or courses, split your script into paragraphs or
                scenes. This makes it trivial to fix or re-generate one section without touching the
                rest, and keeps every clip consistent.
              </p>
            </div>
            <div className="ie-bp">
              <h3 className="ie-h4">Add a beat of silence at the start</h3>
              <p>
                When editing, leave a fraction of a second before the voice begins. It prevents the
                audio feeling clipped and gives viewers a moment to settle in — a small touch that reads
                as professional polish.
              </p>
            </div>
          </div>
        </section>

        {/* ===== COMMON MISTAKES ===== */}
        <section className="ie-section" aria-labelledby="mistakes-heading">
          <span className="ie-kicker">Avoid these</span>
          <h2 id="mistakes-heading" className="ie-h2">Common mistakes to avoid</h2>
          <p className="ie-section-intro">
            Most &quot;the AI voice sounds robotic&quot; complaints trace back to a handful of avoidable
            errors. Sidestep these and your output will sound genuinely human.
          </p>
          <ul className="ie-mistakes">
            <li>
              <strong>Using a foreign-accented voice for Indian content.</strong> The most common and
              most damaging mistake. If your audience is in India, an American or British voice quietly
              erodes trust. Always default to Indian English for domestic content.
            </li>
            <li>
              <strong>Feeding it wall-of-text paragraphs.</strong> Huge, unbroken blocks with no
              punctuation produce flat, breathless delivery. Break them up.
            </li>
            <li>
              <strong>Cranking the speed too high to save time.</strong> Above ~1.2x, comprehension
              drops fast, especially for educational content. Speed is not a substitute for a tighter
              script.
            </li>
            <li>
              <strong>Never previewing the voice first.</strong> Generating a full script before
              hearing the voice wastes characters and time. Always preview against a sample line.
            </li>
            <li>
              <strong>Ignoring numbers and units.</strong> If &quot;1.5 lakh&quot; or &quot;₹2,499&quot;
              matters to your message, test how it&apos;s read and rewrite it phonetically if needed.
            </li>
            <li>
              <strong>Skipping light editing.</strong> Even great TTS benefits from a quick trim of
              dead air and a touch of background music. Raw output is good; edited output is
              professional.
            </li>
          </ul>
        </section>

        {/* ===== ADVANCED TIPS ===== */}
        <section className="ie-section" aria-labelledby="advanced-heading">
          <span className="ie-kicker">Level up</span>
          <h2 id="advanced-heading" className="ie-h2">Advanced tips for standout audio</h2>
          <p className="ie-section-intro">
            Once you&apos;ve mastered the basics, these techniques push your Indian English voiceovers
            from &quot;good&quot; to indistinguishable from a hired professional.
          </p>
          <div className="ie-adv-grid">
            <div className="ie-adv">
              <span className="ie-adv-num">A</span>
              <div>
                <h3 className="ie-h4">Layer voice with the right music bed</h3>
                <p>
                  Pair narration with low-volume background music (around -20dB under the voice). Upbeat
                  beds for ads, ambient pads for education, tabla-or-flute textures for culturally themed
                  content. Music fills the silences that make raw TTS feel exposed.
                </p>
              </div>
            </div>
            <div className="ie-adv">
              <span className="ie-adv-num">B</span>
              <div>
                <h3 className="ie-h4">Vary sentence length for a human rhythm</h3>
                <p>
                  Robotic delivery often comes from uniform sentences. Follow a long, flowing line with
                  a short, punchy one. That natural variation in rhythm is a hallmark of real speech and
                  the AI follows your structure faithfully.
                </p>
              </div>
            </div>
            <div className="ie-adv">
              <span className="ie-adv-num">C</span>
              <div>
                <h3 className="ie-h4">Build a consistent channel voice</h3>
                <p>
                  Pick one Indian English voice and stick with it across every video. Consistency builds
                  brand recognition — over time your audience associates that specific voice with your
                  channel, exactly like a real presenter.
                </p>
              </div>
            </div>
            <div className="ie-adv">
              <span className="ie-adv-num">D</span>
              <div>
                <h3 className="ie-h4">Pair it with AI video for a full pipeline</h3>
                <p>
                  Generate your Indian English narration, then create matching visuals with{" "}
                  <Link href="/create-ai-content" className="ie-inline-link">AI video generation</Link>{" "}
                  and thumbnails from the{" "}
                  <Link href="/tools/ai-image-generation" className="ie-inline-link">AI image generator</Link>.
                  A single afternoon can produce a complete, publish-ready video.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== INTERNAL LINK HUB ===== */}
        <section className="ie-section ie-explore" aria-labelledby="explore-heading">
          <span className="ie-kicker">Keep building</span>
          <h2 id="explore-heading" className="ie-h2">Explore more Scenith tools</h2>
          <p className="ie-section-intro">
            Indian English TTS is one piece of a full content studio. These tools work off the same
            account and credit balance.
          </p>
          <div className="ie-link-grid">
            <Link href="/create-ai-content" className="ie-link-card">
              <span className="ie-link-icon">🎨</span>
              <span className="ie-link-title">AI Content Studio</span>
              <span className="ie-link-desc">Voice, image &amp; video in one place</span>
            </Link>
            <Link href="/tools/ai-voice-generation" className="ie-link-card">
              <span className="ie-link-icon">🎙️</span>
              <span className="ie-link-title">AI Voice Generator (All Languages)</span>
              <span className="ie-link-desc">40+ voices across 20+ languages</span>
            </Link>
            <Link href="/tools/ai-voice-generation-hindi" className="ie-link-card">
              <span className="ie-link-icon">🇮🇳</span>
              <span className="ie-link-title">Hindi Text to Speech</span>
              <span className="ie-link-desc">Natural Devanagari narration</span>
            </Link>
            <Link href="/tools/hindi-female-ai-voice-generation" className="ie-link-card">
              <span className="ie-link-icon">👩</span>
              <span className="ie-link-title">Hindi Female Voice</span>
              <span className="ie-link-desc">Warm female Hindi voices</span>
            </Link>
            <Link href="/tools/ai-image-generation" className="ie-link-card">
              <span className="ie-link-icon">🖼️</span>
              <span className="ie-link-title">AI Image Generator</span>
              <span className="ie-link-desc">Thumbnails &amp; visuals from text</span>
            </Link>
            <Link href="/tools/add-subtitles-to-videos" className="ie-link-card">
              <span className="ie-link-icon">💬</span>
              <span className="ie-link-title">Add Subtitles to Video</span>
              <span className="ie-link-desc">Auto captions for reach</span>
            </Link>
            <Link href="/tools/background-removal" className="ie-link-card">
              <span className="ie-link-icon">✂️</span>
              <span className="ie-link-title">Background Remover</span>
              <span className="ie-link-desc">Clean cut-outs in seconds</span>
            </Link>
            <Link href="/tools/pdf-tools" className="ie-link-card">
              <span className="ie-link-icon">📄</span>
              <span className="ie-link-title">PDF Tools Suite</span>
              <span className="ie-link-desc">Merge, split, compress &amp; more</span>
            </Link>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section className="ie-section" aria-labelledby="faq-heading">
          <span className="ie-kicker">Answers</span>
          <h2 id="faq-heading" className="ie-h2">Indian English text to speech — FAQ</h2>
          <div className="ie-faq">
            {faqs.map((f) => (
              <details className="ie-faq-item" key={f.q}>
                <summary className="ie-faq-q">{f.q}</summary>
                <p className="ie-faq-a">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ===== FINAL CTA ===== */}
        <section className="ie-final-cta" aria-labelledby="final-heading">
          <h2 id="final-heading" className="ie-final-title">
            Give your content a voice that sounds like home
          </h2>
          <p className="ie-final-lead">
            Join thousands of Indian creators, educators, and businesses generating professional
            Indian English voiceovers for YouTube, e-learning, ads, and IVR. Start free — no credit
            card, no watermark, ready in seconds.
          </p>
          <Link href={CTA_URL} className="ie-btn ie-btn-final">
            🎙️ Generate Indian English Voice — Free →
          </Link>
          <div className="ie-final-links">
            <span>Also try:</span>
            <Link href="/create-ai-content">AI Content Studio</Link>
            <span aria-hidden="true">·</span>
            <Link href="/tools/ai-voice-generation">All-Language Voices</Link>
            <span aria-hidden="true">·</span>
            <Link href="/tools/ai-voice-generation-hindi">Hindi TTS</Link>
          </div>
        </section>
      </main>
    </div>
  );
}