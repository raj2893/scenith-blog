import type { Metadata } from 'next';
import Link from 'next/link';
import '../../../../../styles/tools/narration-voice.css';

export const metadata: Metadata = {
  title: 'AI Narration Voice Generator — Professional Voiceover for Videos, Audiobooks & Docs (2026)',
  description:
    'Generate studio-quality AI narration voices for documentaries, audiobooks, e-learning, YouTube, and corporate videos. 40+ natural voices, 20+ languages, instant MP3. Free to start.',
  keywords: [
    'AI narration voice generator',
    'narration text to speech',
    'AI voiceover for videos',
    'audiobook narrator AI',
    'documentary narration AI',
    'e-learning narration voice',
    'free narration voice generator',
    'natural sounding narration AI',
    'professional narration online',
    'text to speech narration 2026',
  ],
  openGraph: {
    title: 'AI Narration Voice Generator — Studio-Quality Narration in Seconds',
    description:
      'Turn any script into professional narration instantly. Perfect for documentaries, audiobooks, e-learning, YouTube, and corporate explainers. 40+ AI voices, 20+ languages.',
    url: 'https://scenith.in/tools/narration-ai-voice-generator',
    siteName: 'Scenith',
    images: [
      {
        url: 'https://scenith.in/images/AIVoiceGenerationSS.png',
        width: 1200,
        height: 630,
        alt: 'Scenith AI Narration Voice Generator',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Narration Voice Generator — Studio-Quality in Seconds',
    description:
      'Professional AI narration for documentaries, audiobooks, e-learning & YouTube. 40+ voices, 20+ languages, free MP3 download.',
    images: ['https://scenith.in/images/AIVoiceGenerationSS.png'],
  },
  alternates: {
    canonical: 'https://scenith.in/tools/narration-ai-voice-generator',
  },
};

const NARRATION_USE_CASES = [
  {
    icon: '🎬',
    title: 'Documentary Narration',
    desc: 'Give your documentary or short film the authoritative voice it deserves. Deep, measured AI narration that commands attention from the first frame.',
    tags: ['Nature Docs', 'History Films', 'True Crime', 'Travel'],
  },
  {
    icon: '📖',
    title: 'Audiobook Production',
    desc: 'Self-publish your book with professional narrator-quality voices. Multiple character tones, consistent pacing, and zero studio booking required.',
    tags: ['Fiction', 'Non-fiction', 'Self-help', 'Business'],
  },
  {
    icon: '🎓',
    title: 'E-Learning & Courses',
    desc: 'Student retention increases when narration is clear and engaging. Generate patient, articulate voiceovers for every lesson module in minutes.',
    tags: ['LMS Courses', 'Tutorials', 'Explainers', 'Training'],
  },
  {
    icon: '▶️',
    title: 'YouTube & Video Content',
    desc: 'Faceless YouTube channels, review videos, and essay-style content thrive with polished narration. Generate consistent audio across your entire catalogue.',
    tags: ['Faceless YT', 'Reviews', 'Essays', 'Shorts'],
  },
  {
    icon: '💼',
    title: 'Corporate & Explainer Videos',
    desc: 'Investors, clients, and employees all engage better with professionally narrated explainers. Create board-ready audio without a VO booking.',
    tags: ['Pitch Decks', 'Product Demos', 'Onboarding', 'Investor Decks'],
  },
  {
    icon: '📻',
    title: 'Podcast Narration Segments',
    desc: 'Narrate your intro, episode summary, or sponsored segments with consistency across every episode, in any language your audience speaks.',
    tags: ['Intros', 'Ads', 'Recaps', 'Multi-language'],
  },
];

const NARRATION_STYLES = [
  {
    style: 'Authoritative',
    icon: '🗣️',
    best: 'Documentaries, News, Corporate',
    description:
      'Commanding, measured delivery. Conveys expertise and trustworthiness. Slight bass emphasis. The voice that makes viewers believe every word.',
    wpm: '130–145 WPM',
  },
  {
    style: 'Warm & Conversational',
    icon: '😊',
    best: 'E-learning, Explainers, Self-help',
    description:
      'Friendly, approachable, slightly faster. Feels like a knowledgeable friend explaining something clearly — never condescending, never boring.',
    wpm: '145–160 WPM',
  },
  {
    style: 'Dramatic & Cinematic',
    icon: '🎭',
    best: 'True Crime, History, Thrillers',
    description:
      'Dynamic range, emotional tension, strategic pauses. Makes the audience lean forward. Used in the best YouTube essay channels and premium doc series.',
    wpm: '120–135 WPM',
  },
  {
    style: 'Calm & Educational',
    icon: '📚',
    best: 'Audiobooks, Meditation, Tutorials',
    description:
      'Unhurried, clear, rhythmic. Designed for content where comprehension matters. Listener retention climbs because there no cognitive overload.',
    wpm: '115–130 WPM',
  },
  {
    style: 'Energetic & Hype',
    icon: '⚡',
    best: 'Product Launches, Promo, Sports',
    description:
      'High energy, forward momentum, short punchy sentences. Drives action and excitement. The voice behind every great product reveal and sports highlight reel.',
    wpm: '155–175 WPM',
  },
  {
    style: 'Professional Neutral',
    icon: '💼',
    best: 'Legal, Finance, Enterprise',
    description:
      'Zero embellishment. Precise, measured, credible. The voice of compliance training, legal disclaimers, and quarterly earnings calls that actually hold attention.',
    wpm: '135–150 WPM',
  },
];

const SCRIPT_TIPS = [
  {
    num: '01',
    title: 'Write for the Ear, Not the Eye',
    body: 'Narration scripts are fundamentally different from written articles. Short sentences. Active voice. Contractions where natural. Read every line aloud before generating — if your tongue trips, the AI will too. Avoid parenthetical clauses; restructure instead.',
  },
  {
    num: '02',
    title: 'Use Punctuation as a Director',
    body: 'Commas insert micro-pauses. Periods signal a breath. Ellipses (...) create dramatic tension — use them sparingly but deliberately. Our AI reads punctuation exactly like a trained narrator: a colon before a list changes delivery, a dash creates rhythmic emphasis.',
  },
  {
    num: '03',
    title: 'Control Pace with Sentence Length',
    body: 'Short sentences accelerate pace. Longer, compound sentences naturally slow the AI down, adding weight and gravitas to complex ideas. For documentary narration, vary length deliberately: two or three short punchy lines, then one long atmospheric sentence.',
  },
  {
    num: '04',
    title: 'Avoid Abbreviations & Symbols',
    body: 'Write "percent" not "%". Write "three million dollars" not "$3M". Our AI handles most abbreviations, but spelled-out words always produce better prosody. Spell out acronyms on first use if pronunciation matters: "NASA" is fine, but "SQL" should be "S-Q-L" or "sequel" depending on context.',
  },
  {
    num: '05',
    title: 'Segment Long Scripts',
    body: 'For audiobooks or long-form content, break your script into logical sections of 300–600 characters. Generate chapter by chapter. This lets you quality-check each segment, pick different voice tones for different sections, and manage your character quota efficiently.',
  },
  {
    num: '06',
    title: 'Match Vocabulary to Audience',
    body: 'Technical e-learning needs precise terminology, not dumbed-down language. Kids\' audiobooks need simple, vivid words with natural rhythm. Corporate explainers benefit from industry vocabulary, but never jargon-dense paragraphs. Your audiences vocabulary level determines comprehension and trust.',
  },
];

const FAQ_ITEMS = [
  {
    q: 'What is an AI narration voice generator?',
    a: 'An AI narration voice generator uses neural text-to-speech (TTS) technology to convert written scripts into professional-sounding narration audio. Unlike generic TTS tools, narration-focused AI is optimized for longer-form content, emphasizing pacing, prosody, and consistent delivery quality across entire scripts — making it suitable for documentaries, audiobooks, e-learning courses, and YouTube narration.',
  },
  {
    q: 'How is AI narration different from regular text-to-speech?',
    a: 'Standard TTS focuses on individual sentence accuracy. AI narration systems are trained specifically on long-form spoken content — audiobooks, documentaries, podcast narration — which means they understand pacing across paragraphs, maintain consistent tone over multiple minutes, and handle dramatic and educational delivery patterns that short-form TTS engines miss entirely.',
  },
  {
    q: 'Can I use AI narration for YouTube monetization in 2026?',
    a: 'Yes. YouTube\'s 2026 content policies allow AI-generated narration for monetized videos, provided the overall content demonstrates originality (unique visuals, researched information, creative structure). Thousands of successful monetized faceless YouTube channels use AI narration as their primary audio production method. The key requirement is that narration supports original content, not that narration itself be human-recorded.',
  },
  {
    q: 'What languages are available for AI narration?',
    a: 'Scenith\'s AI narration supports 20+ languages including US English, UK English, Australian English, Indian English, Spanish (Spain & Latin America), French, German, Mandarin, Hindi, Portuguese, Italian, Japanese, Korean, Arabic, Dutch, Polish, Swedish, Turkish, and more. Each language features multiple native-sounding voices with regional accent options appropriate for that market.',
  },
  {
    q: 'How long does it take to generate narration audio?',
    a: 'Generation completes in 3–8 seconds for most narration scripts. Even longer segments (up to 5,000 characters per request on paid plans) process in under 15 seconds. You can download your MP3 immediately after generation with no additional processing or wait time.',
  },
  {
    q: 'Can I adjust speaking speed for narration?',
    a: 'Yes — paid plan users can adjust speaking rate from 0.5x (very slow, ideal for complex educational content) to 4.0x (extremely fast, suitable for rapid-fire content). Most narration content works best between 0.85x and 1.15x. The speed control is available in the main AI Voice Generator tool.',
  },
  {
    q: 'Is the audio commercially licensable for client work?',
    a: 'All audio generated through Scenith comes with full commercial use rights. You can use narration audio in client videos, sell courses containing AI-narrated lessons, include it in monetized YouTube content, and distribute it across any platform without attribution requirements or royalty payments.',
  },
  {
    q: 'What audio format does narration get exported as?',
    a: 'All narration exports as high-quality MP3 (128 kbps minimum). MP3 is compatible with every video editor (Premiere Pro, Final Cut, DaVinci Resolve, CapCut), every podcast platform (Spotify, Apple Podcasts, Anchor), and every e-learning tool (Teachable, Thinkific, Moodle). No additional format conversion required.',
  },
  {
    q: 'How many characters do I get on the free plan?',
    a: 'The free BASIC plan includes 600 characters per month — enough to test narration quality across multiple voices and scripts. Starter plan ($9/month) provides 50,000 characters plus 300 credits for external AI models. Creator plan ($19/month) offers 150,000 characters plus 900 credits. All paid plans include generation history, speed control, and priority processing.',
  },
  {
    q: 'Can I preview a voice before using it for my full narration project?',
    a: 'Yes. Every voice in the Scenith library has a demo playback button. Click the play icon on any voice to hear a pre-recorded sample of that voice\'s natural tone and style before committing to generating your full script. This lets you audition voices exactly like you would hire a human narrator.',
  },
];

const PLATFORM_GUIDE = [
  {
    platform: 'YouTube',
    icon: '▶️',
    optimal: '130–150 WPM, neutral-to-warm tone',
    tip: 'Use 1.0x–1.1x speed. Viewers expect conversational pacing. Add background music at -18dB under voice for best mix.',
    formats: 'MP3 → import to Premiere/CapCut',
  },
  {
    platform: 'Audiobooks (ACX / Findaway)',
    icon: '📖',
    optimal: '150–160 WPM, consistent room-neutral tone',
    tip: 'ACX requires -23 LUFS loudness. Use Auphonic or Adobe Enhance to normalize after download. Chapter breaks = separate generations.',
    formats: 'MP3 → normalize to -23 LUFS',
  },
  {
    platform: 'E-Learning (SCORM / LMS)',
    icon: '🎓',
    optimal: '130–140 WPM, patient and clear',
    tip: 'Generate each slide\'s narration separately. This lets you swap individual slides without re-generating the full course later.',
    formats: 'MP3 → Articulate / Captivate',
  },
  {
    platform: 'Podcast',
    icon: '🎙️',
    optimal: '145–155 WPM, energetic or conversational',
    tip: 'Add a 0.3s silence before and after each generation clip for clean editing in Audacity or Descript. Normalize to -16 LUFS for podcast standards.',
    formats: 'MP3 → Audacity / Descript',
  },
  {
    platform: 'Corporate Video',
    icon: '💼',
    optimal: '135–145 WPM, authoritative and neutral',
    tip: 'For investor or client-facing videos, use a deep male or confident female voice with Professional emotion preset. Keep sentences under 20 words for clarity.',
    formats: 'MP3 → Premiere / After Effects',
  },
];

export default function NarrationAIVoiceGeneratorPage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://scenith.in/tools/narration-ai-voice-generator#webpage',
        url: 'https://scenith.in/tools/narration-ai-voice-generator',
        name: 'AI Narration Voice Generator — Professional Voiceover for Videos, Audiobooks & Docs',
        description:
          'Generate studio-quality AI narration for documentaries, audiobooks, e-learning, YouTube, and corporate videos. 40+ natural voices, 20+ languages.',
        isPartOf: { '@id': 'https://scenith.in/#website' },
        breadcrumb: { '@id': 'https://scenith.in/tools/narration-ai-voice-generator#breadcrumb' },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://scenith.in/tools/narration-ai-voice-generator#breadcrumb',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://scenith.in' },
          { '@type': 'ListItem', position: 2, name: 'Tools', item: 'https://scenith.in/tools' },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'AI Narration Voice Generator',
            item: 'https://scenith.in/tools/narration-ai-voice-generator',
          },
        ],
      },
      {
        '@type': 'SoftwareApplication',
        name: 'Scenith AI Narration Voice Generator',
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Web Browser',
        url: 'https://scenith.in/tools/narration-ai-voice-generator',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
        },
        featureList: [
          'Professional narration voices',
          '40+ natural AI voices',
          '20+ languages',
          'Instant MP3 download',
          'Commercial use rights',
          'Speed & tone control',
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://scenith.in/tools/narration-ai-voice-generator#faq',
        mainEntity: FAQ_ITEMS.map(({ q, a }) => ({
          '@type': 'Question',
          name: q,
          acceptedAnswer: { '@type': 'Answer', text: a },
        })),
      },
    ],
  };

  return (
    <div className="narration-page">
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="narration-breadcrumb">
        <ol itemScope itemType="https://schema.org/BreadcrumbList">
          {[
            { href: '/', label: 'Home', pos: 1 },
            { href: '/tools', label: 'Tools', pos: 2 },
            { href: '/tools/narration-ai-voice-generator', label: 'AI Narration Voice Generator', pos: 3 },
          ].map(({ href, label, pos }) => (
            <li key={pos} itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              {pos < 3 ? (
                <Link href={href} itemProp="item">
                  <span itemProp="name">{label}</span>
                </Link>
              ) : (
                <span itemProp="name">{label}</span>
              )}
              <meta itemProp="position" content={String(pos)} />
              {pos < 3 && <span className="breadcrumb-sep">›</span>}
            </li>
          ))}
        </ol>
      </nav>

      {/* ═══════════════════════════════ HERO ═══════════════════════════════ */}
      <section className="narration-hero" id="hero" role="main">
        <div className="hero-noise" aria-hidden="true" />
        <div className="hero-grid-lines" aria-hidden="true" />

        <div className="hero-inner">
          <div className="hero-badge">
            <span className="badge-dot" />
            Professional Narration AI · 2026
          </div>

          <h1 className="hero-title">
            <span className="title-line">AI Narration</span>
            <span className="title-line title-accent">Voice Generator</span>
          </h1>

          <p className="hero-subtitle">
            Studio-quality narration for documentaries, audiobooks, e-learning, YouTube, and
            corporate video — generated in seconds. 40+ professional voices. 20+ languages.
            Instant MP3. Full commercial rights.
          </p>

          <div className="hero-stats-row">
            {[
              { num: '40+', label: 'Pro Voices' },
              { num: '20+', label: 'Languages' },
              { num: '~5s', label: 'Generation' },
              { num: '100%', label: 'Commercial' },
            ].map(({ num, label }) => (
              <div key={label} className="hero-stat">
                <span className="stat-num">{num}</span>
                <span className="stat-lbl">{label}</span>
              </div>
            ))}
          </div>

          {/* ─── PRIMARY CTA ─── */}
          <div className="hero-cta-block">
            <a
              href="https://scenith.in/create-ai-content?utm_source=narration_page&utm_medium=hero_cta&utm_campaign=narration_tool"
              className="primary-cta"
              aria-label="Open AI Narration Voice Generator Tool"
            >
              <span className="cta-icon" aria-hidden="true">🎙️</span>
              Generate Narration Now — Free
              <span className="cta-arrow" aria-hidden="true">→</span>
            </a>
            <p className="cta-subtext">No credit card · No download · Runs in your browser</p>
          </div>

          <div className="hero-use-cases-pills">
            {[
              '🎬 Documentaries',
              '📖 Audiobooks',
              '🎓 E-Learning',
              '▶️ YouTube',
              '💼 Corporate Video',
              '📻 Podcasts',
            ].map((label) => (
              <span key={label} className="use-pill">
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ DEFINITION SNIPPET ═══════════════════════════════ */}
      <section className="definition-strip" role="region" aria-label="Definition">
        <div className="def-inner">
          <div className="def-icon" aria-hidden="true">📌</div>
          <div className="def-text">
            <strong>AI Narration Voice Generator</strong> — a specialized text-to-speech system
            trained on long-form narration content (audiobooks, documentaries, educational
            materials) to produce paced, expressive, studio-quality voiceovers from written
            scripts. Unlike basic TTS, narration AI maintains consistent tone, emphasis, and
            breathing patterns across minutes of continuous speech.
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ WHY NARRATION AI IN 2026 ═══════════════════════════════ */}
      <section className="why-section section-pad" id="why-narration-ai" role="region" aria-labelledby="why-title">
        <div className="container-wide">
          <div className="section-label">Why It Matters</div>
          <h2 id="why-title" className="section-title">
            Why AI Narration Is the Biggest Content Opportunity of 2026
          </h2>
          <p className="section-body">
            The shift is already happening. In 2026, the global AI voice market is projected to
            exceed $5 billion — and narration is the fastest-growing segment. Audiobook production
            has tripled among independent authors. Faceless YouTube channels with AI narration are
            outperforming channels with on-camera hosts in watch-time retention. Corporate L&D teams
            have cut voiceover production budgets by 80% by switching to AI narration for internal
            training content.
          </p>
          <p className="section-body">
            The reason is simple: narration is the glue between idea and audience. A script without a
            voice is a text document. With a compelling narration voice, it becomes a documentary, a
            course, an audiobook, a brand story. AI has eliminated the bottleneck that previously
            required days of studio scheduling and thousands of dollars of talent fees.
          </p>
          <p className="section-body">
            But not all AI narration is equal. Generic text-to-speech sounds like a robot reading a
            grocery list. True AI narration — trained on storytelling, paced for comprehension,
            calibrated for emotional context — sounds like it was recorded in a professional booth.
            That's the difference this tool is built for.
          </p>

          <div className="why-grid">
            {[
              {
                icon: '💸',
                title: 'Professional Voiceover Costs $200–$800/hour',
                body: 'Booking a professional narrator, renting a studio, editing raw recordings, handling revisions — a 10-minute audiobook chapter can easily cost $500+. AI narration generates the same chapter for fractions of a cent per character, with zero scheduling friction.',
              },
              {
                icon: '⏳',
                title: 'Production Turnaround Went from Days to Seconds',
                body: 'Traditional VO production: book talent (3–7 days), record (half day), edit and master (1–2 days), revisions (more days). AI narration production: paste script, click generate, download. 8 seconds total. Every single time.',
              },
              {
                icon: '🌍',
                title: 'Multilingual Narration Was Previously Unscalable',
                body: 'To localize a 10-module e-learning course into 5 languages previously required hiring 5 different narrators and a translation agency. AI narration produces all 5 language versions from the same script in under an hour, with native-sounding voices for each market.',
              },
              {
                icon: '🔁',
                title: 'Content Updates No Longer Require Re-Recording',
                body: 'When your product price changes, your tutorial script becomes outdated, or your course curriculum evolves — traditional VO means rebooking, re-recording, re-editing. AI narration means editing one text field and clicking generate. Zero re-recording cost.',
              },
              {
                icon: '📊',
                title: 'Audience Data Proves Narration Improves Retention',
                body: 'YouTube channels that switched from no-narration slideshows to AI narration report 40–60% improvements in average view duration. E-learning platforms report 35% improvements in lesson completion rates when professionally narrated audio replaces text-only slides.',
              },
              {
                icon: '🏆',
                title: 'The Quality Gap Has Closed — Permanently',
                body: 'In 2020, AI voices were identifiably synthetic. In 2026, the best AI narration models pass the human listener test in controlled studies. The question is no longer "does it sound human?" — it\'s "does it match the right tone for my content?"',
              },
            ].map(({ icon, title, body }) => (
              <article key={title} className="why-card">
                <span className="why-icon" aria-hidden="true">{icon}</span>
                <h3 className="why-card-title">{title}</h3>
                <p className="why-card-body">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ USE CASES ═══════════════════════════════ */}
      <section className="use-cases-section section-pad" id="use-cases" role="region" aria-labelledby="use-cases-title">
        <div className="container-wide">
          <div className="section-label">Where It's Used</div>
          <h2 id="use-cases-title" className="section-title">
            6 Industries Where AI Narration Dominates in 2026
          </h2>
          <p className="section-body">
            Narration isn't one-size-fits-all. The right voice, pace, and tone for a true-crime
            documentary is completely different from what works in a corporate compliance module. Here
            are the six primary narration use cases — and exactly how AI is transforming each one.
          </p>

          <div className="use-cases-grid">
            {NARRATION_USE_CASES.map(({ icon, title, desc, tags }) => (
              <article key={title} className="use-case-card">
                <div className="uc-icon" aria-hidden="true">{icon}</div>
                <h3 className="uc-title">{title}</h3>
                <p className="uc-desc">{desc}</p>
                <div className="uc-tags">
                  {tags.map((tag) => (
                    <span key={tag} className="uc-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          {/* Mid-page CTA */}
          <div className="mid-cta-block">
            <div className="mid-cta-text">
              <h3>Ready to hear what professional AI narration sounds like?</h3>
              <p>Try any voice free — no signup required for your first preview</p>
            </div>
            <a
              href="https://scenith.in/create-ai-content?utm_source=narration_page&utm_medium=use_cases_cta&utm_campaign=narration_tool"
              className="mid-cta-btn"
            >
              Try AI Narration Free →
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ NARRATION STYLES ═══════════════════════════════ */}
      <section className="styles-section section-pad" id="narration-styles" role="region" aria-labelledby="styles-title">
        <div className="container-wide">
          <div className="section-label">Vocal Styles</div>
          <h2 id="styles-title" className="section-title">
            The 6 AI Narration Styles — And Which One to Choose
          </h2>
          <p className="section-body">
            Voice style is the single most important variable in narration quality. A beautifully
            written script delivered in the wrong style feels off — like a movie trailer read in a
            bedtime story voice. Here's a complete breakdown of every narration style available and
            exactly when to use each.
          </p>

          <div className="styles-grid">
            {NARRATION_STYLES.map(({ style, icon, best, description, wpm }) => (
              <article key={style} className="style-card">
                <div className="style-top">
                  <span className="style-icon" aria-hidden="true">{icon}</span>
                  <div>
                    <h3 className="style-name">{style}</h3>
                    <span className="style-wpm">{wpm}</span>
                  </div>
                </div>
                <p className="style-desc">{description}</p>
                <div className="style-best">
                  <span className="style-best-label">Best for:</span> {best}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ SCRIPT WRITING GUIDE ═══════════════════════════════ */}
      <section className="script-guide-section section-pad" id="script-writing-guide" role="region" aria-labelledby="script-guide-title">
        <div className="container-wide">
          <div className="section-label">Script Mastery</div>
          <h2 id="script-guide-title" className="section-title">
            How to Write Scripts That Make AI Narration Sound Human
          </h2>
          <p className="section-body">
            The gap between "robotic AI voice" and "this sounds like a real narrator" is 80%
            script quality, 20% voice selection. These six principles are the difference between
            narration that makes viewers skip ahead and narration that keeps them listening until
            the last word.
          </p>

          <div className="tips-stack">
            {SCRIPT_TIPS.map(({ num, title, body }) => (
              <article key={num} className="tip-row">
                <div className="tip-num" aria-hidden="true">{num}</div>
                <div className="tip-content">
                  <h3 className="tip-title">{title}</h3>
                  <p className="tip-body">{body}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="script-example-block">
            <h3 className="example-title">Script Rewrite: Before vs. After</h3>
            <div className="example-grid">
              <div className="example-col before-col">
                <div className="example-label bad">❌ Poor Narration Script</div>
                <p className="example-text">
                  "The Amazon rainforest, which covers approximately 5.5 million km² (which is
                  roughly 40% of South America), is experiencing unprecedented deforestation rates
                  that, according to INPE's 2024 report, reached 11,568 km² in a single year —
                  a fact that environmental scientists say is both alarming and requiring
                  immediate international policy intervention."
                </p>
                <ul className="example-issues">
                  <li>One sentence, 65 words</li>
                  <li>Parenthetical clauses break flow</li>
                  <li>Numeric overload</li>
                  <li>Passive voice</li>
                </ul>
              </div>
              <div className="example-col after-col">
                <div className="example-label good">✅ Professional Narration Script</div>
                <p className="example-text">
                  "The Amazon rainforest covers five and a half million square kilometres. That's
                  forty percent of an entire continent. But in a single year, eleven thousand
                  five hundred square kilometres were razed to the ground. Scientists call it
                  unprecedented. They say international policy must respond now — before the
                  point of no return."
                </p>
                <ul className="example-issues">
                  <li>5 short sentences, varied length</li>
                  <li>Numbers spelled out for audio</li>
                  <li>Dramatic pause structure built in</li>
                  <li>Active, urgent tone</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ PLATFORM GUIDE ═══════════════════════════════ */}
      <section className="platform-section section-pad" id="platform-guide" role="region" aria-labelledby="platform-title">
        <div className="container-wide">
          <div className="section-label">Platform Guide</div>
          <h2 id="platform-title" className="section-title">
            AI Narration Optimization by Platform: YouTube, Audiobooks, E-Learning & More
          </h2>
          <p className="section-body">
            The same AI narration voice sounds completely different depending on the platform
            it's heard on — listening through earbuds on Spotify is a different psychoacoustic
            experience than watching a YouTube video on a laptop speaker. Here's exactly how to
            optimize your narration settings and post-processing for each major platform.
          </p>

          <div className="platform-table" role="table" aria-label="Narration platform optimization guide">
            <div className="platform-table-header" role="row">
              <span role="columnheader">Platform</span>
              <span role="columnheader">Optimal Pace</span>
              <span role="columnheader">Pro Tip</span>
              <span role="columnheader">Export Path</span>
            </div>
            {PLATFORM_GUIDE.map(({ platform, icon, optimal, tip, formats }) => (
              <div key={platform} className="platform-row" role="row">
                <div className="platform-name" role="cell">
                  <span aria-hidden="true">{icon}</span> {platform}
                </div>
                <div className="platform-optimal" role="cell">{optimal}</div>
                <div className="platform-tip" role="cell">{tip}</div>
                <div className="platform-format" role="cell">{formats}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ HOW TO USE ═══════════════════════════════ */}
      <section className="howto-section section-pad" id="how-to-use" role="region" aria-labelledby="howto-title">
        <div className="container-wide">
          <div className="section-label">Step by Step</div>
          <h2 id="howto-title" className="section-title">
            How to Generate Professional Narration in 4 Steps
          </h2>

          <div className="steps-row">
            {[
              {
                n: '01',
                icon: '✍️',
                title: 'Prepare Your Script',
                body: 'Write or paste your narration script. Follow the script writing principles above — short sentences, spelled-out numbers, punctuation-as-pacing. For best results, keep each generation under 1,000 characters to maintain optimal prosody quality.',
              },
              {
                n: '02',
                icon: '🎙️',
                title: 'Select Your Narration Voice',
                body: 'Filter by language, gender, and accent. Preview each voice with its demo button. For documentaries, try deep male or authoritative female voices. For e-learning, pick patient, warm voices. For YouTube, conversational tones perform best.',
              },
              {
                n: '03',
                icon: '⚡',
                title: 'Generate Your Audio',
                body: 'Click "Generate AI Voice" and your narration processes in 3–8 seconds. The audio appears instantly in the built-in player. Listen through to check pacing, emphasis, and pronunciation before downloading.',
              },
              {
                n: '04',
                icon: '📥',
                title: 'Download & Integrate',
                body: 'Download as MP3 and import directly into your video editor, podcast tool, or LMS. No format conversion needed. Add to your timeline, adjust volume levels, and your professional narration is ready to publish.',
              },
            ].map(({ n, icon, title, body }) => (
              <article key={n} className="step-card">
                <div className="step-num" aria-label={`Step ${n}`}>{n}</div>
                <span className="step-icon" aria-hidden="true">{icon}</span>
                <h3 className="step-title">{title}</h3>
                <p className="step-body">{body}</p>
              </article>
            ))}
          </div>

          {/* CTA after steps */}
          <div className="cta-center">
            <a
              href="https://scenith.in/create-ai-content?utm_source=narration_page&utm_medium=howto_cta&utm_campaign=narration_tool"
              className="primary-cta"
            >
              <span className="cta-icon" aria-hidden="true">🎙️</span>
              Start Generating Narration — Free
              <span className="cta-arrow" aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ AI NARRATION VS HUMAN ═══════════════════════════════ */}
      <section className="comparison-section section-pad" id="ai-vs-human" role="region" aria-labelledby="compare-title">
        <div className="container-wide">
          <div className="section-label">Honest Comparison</div>
          <h2 id="compare-title" className="section-title">
            AI Narration vs. Human Voice Actor: The Honest 2026 Comparison
          </h2>
          <p className="section-body">
            We won't pretend AI narration beats human voice actors in every scenario. But for the
            vast majority of content production needs, the math and quality case have fundamentally
            shifted. Here's an honest breakdown of where AI wins, where humans still excel, and
            where the hybrid approach makes the most sense.
          </p>

          <div className="compare-grid">
            {[
              {
                category: 'Cost',
                ai: '$0–$0.01 per minute of audio',
                human: '$100–$500 per finished hour',
                winner: 'ai',
              },
              {
                category: 'Turnaround Speed',
                ai: '5–10 seconds per script',
                human: '2–7 days including revisions',
                winner: 'ai',
              },
              {
                category: 'Revision Cost',
                ai: 'Free — regenerate instantly',
                human: '$50–$200 per revision session',
                winner: 'ai',
              },
              {
                category: 'Consistency Over Long Projects',
                ai: 'Identical quality across 100+ hours',
                human: 'Variable based on energy, health, environment',
                winner: 'ai',
              },
              {
                category: 'Language Coverage',
                ai: '20+ languages, native accents',
                human: 'One language per talent hire',
                winner: 'ai',
              },
              {
                category: 'Complex Emotional Range',
                ai: 'Strong for most content types',
                human: 'Unmatched for nuanced character work',
                winner: 'human',
              },
              {
                category: 'Unique Character Voices',
                ai: 'Limited — style presets only',
                human: 'Unlimited creative vocal range',
                winner: 'human',
              },
              {
                category: 'Brand Signature Voice',
                ai: 'Professional but not exclusive',
                human: 'Custom-developed, ownable voice identity',
                winner: 'human',
              },
              {
                category: 'Scalability (100+ assets)',
                ai: 'Instant batch production',
                human: 'Expensive, scheduling-limited',
                winner: 'ai',
              },
              {
                category: 'Script Update Handling',
                ai: 'Regenerate in seconds',
                human: 'Full rebooking required',
                winner: 'ai',
              },
            ].map(({ category, ai, human, winner }) => (
              <div key={category} className="compare-row">
                <div className="compare-category">{category}</div>
                <div className={`compare-cell ${winner === 'ai' ? 'winner-cell' : ''}`}>
                  {winner === 'ai' && <span className="winner-badge">✓ Better</span>}
                  {ai}
                </div>
                <div className={`compare-cell ${winner === 'human' ? 'winner-cell' : ''}`}>
                  {winner === 'human' && <span className="winner-badge">✓ Better</span>}
                  {human}
                </div>
              </div>
            ))}
          </div>

          <div className="hybrid-callout">
            <span className="hybrid-icon" aria-hidden="true">💡</span>
            <div>
              <h3>The Smart Hybrid Strategy</h3>
              <p>
                Use AI narration for all standard content production (tutorials, course modules,
                product videos, social media, internal communications). Reserve human voice actors for
                flagship brand campaigns, premium audiobook character work, and content where a
                recognizable human voice is part of the brand identity. This hybrid approach cuts
                voiceover budgets by 70–90% while preserving quality where it matters most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ LANGUAGE SECTION ═══════════════════════════════ */}
      <section className="language-section section-pad" id="languages" role="region" aria-labelledby="lang-title">
        <div className="container-wide">
          <div className="section-label">Global Reach</div>
          <h2 id="lang-title" className="section-title">
            AI Narration in 20+ Languages: Reach Every Audience
          </h2>
          <p className="section-body">
            Content localization used to be a luxury only well-funded publishers could afford.
            Today, generating a narrated Spanish version of your English e-learning course costs
            the same as the English version — zero. Here's how AI narration unlocks global
            distribution for independent creators and small teams.
          </p>

          <div className="lang-grid">
            {[
              { lang: 'English (US)', flag: '🇺🇸', use: 'Global tech, entertainment, YouTube' },
              { lang: 'English (UK)', flag: '🇬🇧', use: 'Professional, luxury, publishing' },
              { lang: 'English (AU)', flag: '🇦🇺', use: 'Lifestyle, nature, travel content' },
              { lang: 'English (IN)', flag: '🇮🇳', use: 'Ed-tech, business, IT training' },
              { lang: 'Spanish', flag: '🇪🇸', use: 'Americas + Spain market, 500M+ speakers' },
              { lang: 'French', flag: '🇫🇷', use: 'Europe + Africa distribution' },
              { lang: 'German', flag: '🇩🇪', use: 'DACH region, automotive, engineering' },
              { lang: 'Mandarin', flag: '🇨🇳', use: 'Largest language market globally' },
              { lang: 'Hindi', flag: '🇮🇳', use: 'Fastest-growing digital audience' },
              { lang: 'Portuguese', flag: '🇧🇷', use: 'Brazil + Portugal, massive streaming market' },
              { lang: 'Japanese', flag: '🇯🇵', use: 'Gaming, anime, corporate training' },
              { lang: 'Arabic', flag: '🇸🇦', use: 'MENA region, news, education' },
            ].map(({ lang, flag, use }) => (
              <div key={lang} className="lang-card">
                <span className="lang-flag" aria-hidden="true">{flag}</span>
                <span className="lang-name">{lang}</span>
                <span className="lang-use">{use}</span>
              </div>
            ))}
          </div>

          <p className="section-body" style={{ marginTop: '2rem' }}>
            Every language in our library includes multiple native-sounding voices with regional
            accent variations. Spanish narration includes both Castilian and Latin American accent
            options. English includes four distinct regional accents (US, UK, Australian, Indian).
            This level of regional specificity makes the difference between narration that feels
            localized and narration that just feels translated.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════ TECHNICAL DEEP-DIVE ═══════════════════════════════ */}
      <section className="tech-section section-pad" id="how-it-works" role="region" aria-labelledby="tech-title">
        <div className="container-wide">
          <div className="section-label">Under the Hood</div>
          <h2 id="tech-title" className="section-title">
            The Technology Behind AI Narration: Neural TTS in 2026
          </h2>
          <p className="section-body">
            Understanding how AI narration works helps you use it more effectively. Modern neural
            text-to-speech is nothing like the rule-based robotic voices of a decade ago. Here's
            what's actually happening when you click "Generate."
          </p>

          <div className="tech-flow">
            {[
              {
                stage: 'Text Normalization',
                icon: '📝',
                detail:
                  'Your input text is cleaned and expanded: abbreviations unfurled, numbers converted to words, punctuation interpreted as phonological instructions. "Dr." becomes "Doctor." "3.5M" becomes "three point five million." This stage determines pronunciation accuracy.',
              },
              {
                stage: 'Linguistic Analysis',
                icon: '🧠',
                detail:
                  'A language model parses sentence structure, identifies parts of speech, detects question vs. statement patterns, and determines where natural emphasis should fall. This is why AI narration stresses "amazing" differently than "a door." Context-sensitive emphasis.',
              },
              {
                stage: 'Prosody Prediction',
                icon: '🎵',
                detail:
                  'The system predicts the rhythm, melody, and timing of the speech — the "music" of language. Pitch curves, duration of each phoneme, pause placement after commas and periods. This is the layer that separates narration-trained models from basic TTS.',
              },
              {
                stage: 'Neural Vocoding',
                icon: '🔊',
                detail:
                  'A neural vocoder (similar to WaveNet architecture) synthesizes raw audio waveforms from the acoustic parameters. Modern vocoders generate speech at 22,050 Hz or higher, capturing subtle voice characteristics — breath, resonance, vocal texture — indistinguishable from studio recording.',
              },
              {
                stage: 'Audio Post-Processing',
                icon: '🎚️',
                detail:
                  'The final waveform is normalized, low-frequency noise reduced, and peak levels balanced. The output is a clean, broadcast-ready MP3. No background noise, no plosives, no room reverb — just the voice.',
              },
            ].map(({ stage, icon, detail }, i) => (
              <div key={stage} className="tech-stage">
                <div className="tech-stage-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</div>
                <div className="tech-stage-icon" aria-hidden="true">{icon}</div>
                <div className="tech-stage-content">
                  <h3 className="tech-stage-title">{stage}</h3>
                  <p className="tech-stage-detail">{detail}</p>
                </div>
                {i < 4 && <div className="tech-connector" aria-hidden="true" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ TESTIMONIALS ═══════════════════════════════ */}
      <section className="testimonials-section section-pad" id="testimonials" role="region" aria-labelledby="testimonials-title">
        <div className="container-wide">
          <div className="section-label">Social Proof</div>
          <h2 id="testimonials-title" className="section-title">
            What Creators Say About AI Narration
          </h2>

          <div className="testimonials-grid">
            {[
              {
                quote:
                  "I've published 12 audiobooks using Scenith narration. My production cost per book dropped from $2,400 (human narrator) to under $15 in credits. ACX accepted every single upload without any quality flags.",
                name: 'Priya Menon',
                role: 'Independent Author & Audiobook Publisher',
                stars: 5,
              },
              {
                quote:
                  "My documentary YouTube channel went from 40% average view duration to 61% after I switched to AI narration. The authoritative voice style keeps viewers engaged through the whole video. I wish I'd started using it sooner.",
                name: 'Marcus Webb',
                role: 'Documentary Creator, 280K YouTube Subscribers',
                stars: 5,
              },
              {
                quote:
                  "We run a 14-module corporate compliance course in 6 languages. Previously, that meant 84 separate recording sessions. Now it's 84 text files and a batch generation workflow. The time savings alone justified the yearly plan 10x over.",
                name: 'Anika Trost',
                role: 'L&D Director, Mid-Market SaaS Company',
                stars: 5,
              },
              {
                quote:
                  "The script tip about writing for the ear changed everything for me. Once I started punctuating for pacing instead of grammar, the AI narration started sounding like something I'd pay a professional to record. Game-changing insight.",
                name: 'Jerome Okonkwo',
                role: 'E-Learning Course Creator',
                stars: 5,
              },
            ].map(({ quote, name, role, stars }) => (
              <blockquote key={name} className="testimonial-card">
                <div className="t-stars" aria-label={`${stars} out of 5 stars`}>
                  {'⭐'.repeat(stars)}
                </div>
                <p className="t-quote">"{quote}"</p>
                <cite className="t-cite">
                  <span className="t-name">{name}</span>
                  <span className="t-role">{role}</span>
                </cite>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ FAQ ═══════════════════════════════ */}
      <section className="faq-section section-pad" id="faq" role="region" aria-labelledby="faq-title">
        <div className="container-wide">
          <div className="section-label">FAQ</div>
          <h2 id="faq-title" className="section-title">
            Frequently Asked Questions About AI Narration Voice Generation
          </h2>

          <div className="faq-grid">
            {FAQ_ITEMS.map(({ q, a }) => (
              <article key={q} className="faq-item">
                <h3 className="faq-q">{q}</h3>
                <p className="faq-a">{a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ RELATED TOOLS ═══════════════════════════════ */}
      <section className="related-section section-pad" id="related-tools" role="region" aria-labelledby="related-title">
        <div className="container-wide">
          <div className="section-label">More Scenith Tools</div>
          <h2 id="related-title" className="section-title">
            Complete Your Content Creation Stack
          </h2>
          <div className="related-grid">
            {[
              {
                href: 'https://scenith.in/create-ai-content?utm_source=narration_page&utm_medium=related_tools&utm_campaign=narration_tool',
                icon: '🎤',
                title: 'AI Voice Generator',
                desc: 'The full voice generation tool — 40+ voices, all emotion presets, speed control, and generation history.',
                tag: 'Core Tool',
              },
              {
                href: 'https://scenith.in/tools/ai-video-generation?utm_source=narration_page&utm_medium=related_tools&utm_campaign=narration_tool',
                icon: '🎬',
                title: 'AI Video Generator',
                desc: 'Turn your narrated script into a full AI-generated video. Text or image to video in seconds.',
                tag: '🔥 Popular',
              },
              {
                href: 'https://scenith.in/create-ai-content?utm_source=narration_page&utm_medium=related_tools&utm_campaign=narration_tool',
                icon: '🖼️',
                title: 'AI Image Generator',
                desc: 'Create visuals that match your narration. Perfect for YouTube thumbnails and documentary stills.',
                tag: '✨ New',
              },
              {
                href: 'https://scenith.in/tools/add-subtitles-to-videos?utm_source=narration_page&utm_medium=related_tools&utm_campaign=narration_tool',
                icon: '📝',
                title: 'Add Subtitles to Videos',
                desc: 'Pair your AI narration with accurate subtitles for accessibility and SEO.',
                tag: 'Accessibility',
              },
            ].map(({ href, icon, title, desc, tag }) => (
              <a key={title} href={href} className="related-card" target={href.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer">
                <div className="related-top">
                  <span className="related-icon" aria-hidden="true">{icon}</span>
                  <span className="related-tag">{tag}</span>
                </div>
                <h3 className="related-title">{title}</h3>
                <p className="related-desc">{desc}</p>
                <span className="related-cta">Try it →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ FINAL CTA ═══════════════════════════════ */}
      <section className="final-cta-section" id="get-started" role="region" aria-labelledby="final-cta-title">
        <div className="final-cta-inner">
          <div className="final-noise" aria-hidden="true" />
          <h2 id="final-cta-title" className="final-cta-title">
            Your Next Narration Project Starts Here
          </h2>
          <p className="final-cta-sub">
            Join 1,500+ creators already producing professional AI narration with Scenith.
            Free to start. No credit card. Instant results.
          </p>
          <a
            href="https://scenith.in/create-ai-content?utm_source=narration_page&utm_medium=final_cta&utm_campaign=narration_tool"
            className="primary-cta final-cta-btn"
          >
            <span className="cta-icon" aria-hidden="true">🎙️</span>
            Open AI Narration Tool — Free
            <span className="cta-arrow" aria-hidden="true">→</span>
          </a>
          <div className="final-trust-row">
            <span>✅ Free to Start</span>
            <span>🔒 Secure & Private</span>
            <span>📥 Instant MP3</span>
            <span>💼 Commercial Rights</span>
            <span>🌍 20+ Languages</span>
          </div>
        </div>
      </section>
    </div>
  );
}