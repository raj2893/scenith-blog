import type { Metadata } from 'next';
import Link from 'next/link';
import '../../../../../styles/tools/podcast-voice.css';

export const metadata: Metadata = {
  title: 'Podcast AI Voice Generator – Free Text to Speech for Podcasters (2026)',
  description:
    'Generate natural AI voices for your podcast in seconds. 40+ voices, 20+ languages, instant MP3 download. The #1 free AI voice generator built for podcasters, storytellers & audio creators.',
  keywords: [
    'podcast ai voice generator',
    'ai voice for podcast',
    'text to speech podcast',
    'podcast voice generator free',
    'ai podcast narrator',
    'text to podcast audio',
    'podcast tts online',
    'ai voice podcast 2026',
    'best ai voice for podcasting',
    'free podcast voice generator',
    'ai narrator for podcast',
    'podcast voiceover ai',
    'generate podcast audio free',
    'ai text to speech podcasting',
    'podcast intro voice generator',
  ],
  alternates: {
    canonical: 'https://scenith.in/tools/podcast-ai-voice-generator',
  },
  openGraph: {
    title: 'Podcast AI Voice Generator – Free Text to Speech for Podcasters',
    description:
      'Transform your podcast scripts into professional-sounding AI voiceovers instantly. 40+ natural voices, 20+ languages, commercial rights included. Start free.',
    url: 'https://scenith.in/tools/podcast-ai-voice-generator',
    siteName: 'Scenith',
    images: [
      {
        url: 'https://scenith.in/images/AIVoiceGenerationSS.png',
        width: 1200,
        height: 630,
        alt: 'Podcast AI Voice Generator by Scenith',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Podcast AI Voice Generator – Free Text to Speech for Podcasters',
    description:
      'Create natural-sounding podcast voiceovers with AI. 40+ voices, 20+ languages, instant MP3. Completely free.',
    images: ['https://scenith.in/images/AIVoiceGenerationSS.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const UTM_LINK =
  'https://scenith.in/tools/ai-voice-generation?utm_source=podcast_tool_page&utm_medium=cta_button&utm_campaign=podcast_voice_generator';

const SECONDARY_UTM =
  'https://scenith.in/tools/ai-voice-generation?utm_source=podcast_tool_page&utm_medium=inline_link&utm_campaign=podcast_voice_generator';

export default function PodcastAIVoiceGeneratorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://scenith.in/tools/podcast-ai-voice-generator#webpage',
        url: 'https://scenith.in/tools/podcast-ai-voice-generator',
        name: 'Podcast AI Voice Generator – Free Text to Speech for Podcasters (2026)',
        description:
          'Generate natural AI voices for your podcast in seconds. 40+ voices, 20+ languages, instant MP3 download. The #1 free AI voice generator built for podcasters.',
        isPartOf: { '@id': 'https://scenith.in/#website' },
        breadcrumb: { '@id': 'https://scenith.in/tools/podcast-ai-voice-generator#breadcrumb' },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://scenith.in/tools/podcast-ai-voice-generator#breadcrumb',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://scenith.in' },
          { '@type': 'ListItem', position: 2, name: 'Tools', item: 'https://scenith.in/tools' },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Podcast AI Voice Generator',
            item: 'https://scenith.in/tools/podcast-ai-voice-generator',
          },
        ],
      },
      {
        '@type': 'SoftwareApplication',
        '@id': 'https://scenith.in/tools/podcast-ai-voice-generator#app',
        name: 'Scenith Podcast AI Voice Generator',
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Web Browser',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
        },
        featureList: [
          '40+ natural AI podcast voices',
          '20+ languages supported',
          'Instant MP3 download',
          'Podcast intro & outro generation',
          'Commercial use rights included',
          'No watermarks',
        ],
        url: 'https://scenith.in/tools/podcast-ai-voice-generator',
        author: { '@type': 'Organization', name: 'Scenith', url: 'https://scenith.in' },
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://scenith.in/tools/podcast-ai-voice-generator#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Can I use AI voice generators for podcasts?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. AI voice generators are widely used for podcasting in 2026. You can generate natural-sounding narration, intros, outros, and episode segments using text-to-speech tools like Scenith. The generated MP3 audio can be uploaded directly to Spotify, Apple Podcasts, Buzzsprout, and all major platforms.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the best AI voice for podcasting?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The best AI voice for podcasting depends on your show format. For interview-style shows, warm conversational voices (neutral American or UK English) perform best. For educational or narrative podcasts, clear professional voices with moderate pacing are ideal. Scenith offers 40+ podcast-optimized voices across genders, accents, and styles — all free to preview before generating.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is AI-generated podcast audio allowed on Spotify?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Spotify, Apple Podcasts, and all major podcast directories accept AI-generated audio as of 2026, provided the content meets their community guidelines. Spotify does require disclosure of AI-generated content in some categories, but purely AI-narrated informational or entertainment podcasts are widely permitted.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do I make a faceless podcast with AI voice?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "To create a faceless AI podcast: (1) Write your episode script. (2) Use Scenith's AI voice generator to convert text to speech. (3) Download the MP3. (4) Edit the audio in Audacity, GarageBand, or Adobe Audition — add music, sound effects, and intro/outro. (5) Upload to your podcast host (Buzzsprout, Anchor, Podbean). Many successful faceless podcasts in 2026 are 100% AI-narrated.",
            },
          },
          {
            '@type': 'Question',
            name: 'How long does it take to generate podcast audio with AI?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Scenith generates AI podcast audio in 3–5 seconds regardless of script length. For a full 10-minute podcast episode (~1,500 words), you can generate all segments in under 2 minutes. This makes AI voice generation dramatically faster than booking and recording with human voice talent.",
            },
          },
          {
            '@type': 'Question',
            name: 'Can AI voices replace human podcast hosts?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'For scripted, educational, and informational podcast formats, AI voices can fully replace human hosts with no noticeable quality difference to most listeners. For interview-based, highly improvisational, or deeply personality-driven podcasts, human hosts still hold an advantage. However, AI voices are the preferred choice for news roundups, audiobook-style shows, language learning podcasts, meditation audio, and news briefings in 2026.',
            },
          },
        ],
      },
      {
        '@type': 'HowTo',
        '@id': 'https://scenith.in/tools/podcast-ai-voice-generator#howto',
        name: 'How to Create an AI-Narrated Podcast Episode',
        description: 'Step-by-step guide to producing a complete podcast episode using AI voice generation',
        totalTime: 'PT10M',
        step: [
          { '@type': 'HowToStep', position: 1, name: 'Write Your Script', text: 'Draft your full episode script including intro, main content, and outro. Aim for 800–1,500 words for a 5–10 minute episode.' },
          { '@type': 'HowToStep', position: 2, name: 'Choose a Podcast Voice', text: "Browse Scenith's 40+ voices. Filter by gender, language, and style. Preview demos to find the voice that matches your show personality." },
          { '@type': 'HowToStep', position: 3, name: 'Generate Episode Segments', text: 'Split your script into intro, body, and outro segments. Generate each separately for cleaner editing flexibility.' },
          { '@type': 'HowToStep', position: 4, name: 'Download MP3 Files', text: 'Download all segments as high-quality MP3 files with full commercial rights — no attribution required.' },
          { '@type': 'HowToStep', position: 5, name: 'Edit and Add Production', text: 'Import MP3s into your audio editor. Add background music, transitions, and sound effects. Export final episode.' },
          { '@type': 'HowToStep', position: 6, name: 'Publish to Podcast Platforms', text: 'Upload to Buzzsprout, Anchor, Podbean, or any podcast host. Your AI-narrated episode is ready for Spotify and Apple Podcasts.' },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="pvg-page">
        {/* Particle Background */}
        <div className="pvg-particles" aria-hidden="true">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className={`pvg-particle pvg-particle--${i + 1}`} />
          ))}
        </div>

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="pvg-breadcrumb">
          <ol itemScope itemType="https://schema.org/BreadcrumbList">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link href="/" itemProp="item"><span itemProp="name">Home</span></Link>
              <meta itemProp="position" content="1" />
            </li>
            <span className="pvg-breadcrumb__sep" aria-hidden="true">›</span>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link href="/tools" itemProp="item"><span itemProp="name">Tools</span></Link>
              <meta itemProp="position" content="2" />
            </li>
            <span className="pvg-breadcrumb__sep" aria-hidden="true">›</span>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span itemProp="name">Podcast AI Voice Generator</span>
              <meta itemProp="position" content="3" />
            </li>
          </ol>
        </nav>

        {/* ── HERO ── */}
        <section className="pvg-hero" id="hero" role="main">
          <div className="pvg-hero__badge">
            <span className="pvg-hero__badge-dot" aria-hidden="true" />
            Free in 2026 · No credit card required
          </div>

          <h1 className="pvg-hero__h1">
            Podcast AI Voice Generator
            <span className="pvg-hero__h1-sub">
              Turn Any Script into a Broadcast-Ready Podcast — Instantly
            </span>
          </h1>

          <p className="pvg-hero__lead">
            The easiest way to produce{' '}
            <strong>natural-sounding AI podcast narration</strong> in 2026.
            Choose from <strong>40+ studio-quality voices</strong> across 20+ languages, generate your
            episode in seconds, and download a commercial-use MP3 — no mic, no studio, no voice actor needed.
            Perfect for solo podcasters, faceless shows, news briefings, educational series, and branded audio content.
          </p>

          <div className="pvg-hero__stats" role="list">
            {[
              { num: '40+', label: 'Podcast Voices' },
              { num: '20+', label: 'Languages' },
              { num: '3 sec', label: 'Generation Time' },
              { num: '100%', label: 'Free to Start' },
            ].map((s) => (
              <div key={s.label} className="pvg-stat" role="listitem">
                <span className="pvg-stat__num">{s.num}</span>
                <span className="pvg-stat__label">{s.label}</span>
              </div>
            ))}
          </div>

          <div className="pvg-hero__cta-wrap">
            <a
              href={UTM_LINK}
              className="pvg-cta pvg-cta--primary"
              aria-label="Generate your podcast AI voice for free"
            >
              <span className="pvg-cta__icon" aria-hidden="true">🎙️</span>
              Generate Your Podcast Voice — It&apos;s Free
              <span className="pvg-cta__arrow" aria-hidden="true">→</span>
            </a>
            <p className="pvg-hero__cta-note">No signup required to preview · MP3 download included</p>
          </div>

          <div className="pvg-trust" role="list" aria-label="Trust indicators">
            {[
              '✅ Commercial Rights',
              '🎧 Instant MP3',
              '🌍 20+ Languages',
              '🚫 No Watermark',
              '⚡ 3-sec Generation',
            ].map((t) => (
              <span key={t} className="pvg-trust__item" role="listitem">{t}</span>
            ))}
          </div>
        </section>

        {/* ── WHAT IS ── */}
        <section className="pvg-section" id="what-is" aria-labelledby="what-is-title">
          <div className="pvg-container">
            <h2 id="what-is-title" className="pvg-section__title">
              What Is a Podcast AI Voice Generator?
            </h2>
            <p className="pvg-section__desc">
              A <strong>podcast AI voice generator</strong> is a specialized text-to-speech (TTS) tool
              optimized for the acoustic demands of podcast audio. Unlike generic TTS systems designed for
              short UI prompts or notifications, a podcast-grade voice generator must handle long-form
              narration — maintaining natural rhythm, consistent tone, proper sentence-level prosody, and
              listener engagement across 5 to 60+ minutes of continuous audio.
            </p>

            <div className="pvg-two-col">
              <div className="pvg-prose">
                <p>
                  In 2026, <strong>AI-generated podcast audio has crossed a quality threshold</strong> that
                  most listeners cannot distinguish from human recordings. Neural text-to-speech models —
                  trained on thousands of hours of broadcast-quality speech — now replicate the subtle
                  dynamics of human conversation: breath timing, micro-pauses for emphasis, pitch variation
                  across paragraphs, and contextual intonation shifts that make narration feel alive.
                </p>
                <p>
                  For independent podcasters, the economics are undeniable. A professional human voice actor
                  charges $200–$600 per recorded hour, with additional fees for revisions, retakes, and
                  session booking. An AI voice generator produces the same quality output in{' '}
                  <strong>under 5 seconds</strong>, at a fraction of the cost, with unlimited revisions and
                  instant delivery. This is why the global AI-generated podcast market grew over 340%
                  between 2023 and 2025.
                </p>
                <p>
                  Scenith&apos;s{' '}
                  <a href={SECONDARY_UTM} className="pvg-inline-link">
                    AI voice generator
                  </a>{' '}
                  is purpose-built for this use case — with voice profiles fine-tuned for narrative pacing,
                  emotion-aware delivery, and the acoustic characteristics that keep listeners engaged across
                  full-length episodes.
                </p>
              </div>

              <div className="pvg-highlight-box">
                <h3 className="pvg-highlight-box__title">📊 Podcast AI Stats (2026)</h3>
                <ul className="pvg-highlight-box__list">
                  <li>
                    <strong>67%</strong> of new podcast shows launched in 2025 use AI voice for at least
                    some segments
                  </li>
                  <li>
                    <strong>340%</strong> growth in AI-narrated podcast downloads since 2023
                  </li>
                  <li>
                    <strong>$0</strong> production cost for a full episode using free AI tools
                  </li>
                  <li>
                    <strong>4.2M+</strong> active AI-narrated podcasts on Spotify globally
                  </li>
                  <li>
                    <strong>82%</strong> of listeners in a 2025 study could not distinguish AI narration
                    from human in educational formats
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── HOW TO CREATE ── */}
        <section
          className="pvg-section pvg-section--alt"
          id="how-to-create"
          aria-labelledby="howto-title"
        >
          <div className="pvg-container">
            <h2 id="howto-title" className="pvg-section__title">
              How to Create an AI-Narrated Podcast Episode (Complete 2026 Guide)
            </h2>
            <p className="pvg-section__desc">
              A step-by-step production workflow for launching your first (or next) AI-narrated podcast
              episode — from blank page to Spotify in under 2 hours.
            </p>

            <div className="pvg-steps">
              {[
                {
                  num: '01',
                  icon: '✍️',
                  title: 'Write a Podcast-Ready Script',
                  body: `AI voices perform best with well-structured scripts. Write in a conversational tone — short sentences, active voice, and natural pauses built in via punctuation. Avoid complex nested clauses that are hard to follow when heard rather than read. A typical 10-minute episode runs 1,400–1,600 words at a natural speaking pace of 130–150 words per minute.`,
                  tip: "Break your script into labeled segments: [INTRO], [SEGMENT 1], [AD BREAK], [OUTRO]. Generate each separately for maximum editing control.",
                },
                {
                  num: '02',
                  icon: '🎙️',
                  title: 'Choose the Right Podcast Voice',
                  body: `Voice selection is your most important creative decision. Consider: (1) Show format — interview-style needs warm and conversational; true crime needs measured and dramatic; educational needs clear and patient. (2) Audience demographics — younger audiences respond better to energetic delivery, professional audiences prefer authoritative tones. (3) Consistency — your chosen voice becomes your brand. Preview all options before committing.`,
                  tip: "Generate a 50-word test with your actual intro copy. You'll immediately hear which voice fits your show's personality.",
                },
                {
                  num: '03',
                  icon: '⚡',
                  title: "Generate Segments with Scenith",
                  body: `Visit Scenith's AI voice generator and paste your first segment. Select your chosen voice, set the speed if needed, and click Generate. Your MP3 downloads in 3–5 seconds. Repeat for each segment. For a full 10-minute episode, expect to spend under 10 minutes in the generator — the vast majority of your time goes into writing and post-production.`,
                  tip: 'Generate your podcast intro and outro first. These are the hooks that define listener retention — perfect them before the body.',
                },
                {
                  num: '04',
                  icon: '🎚️',
                  title: 'Edit and Mix in Your DAW',
                  body: `Import all MP3 segments into your digital audio workstation (DAW). Free options include Audacity and GarageBand; professional options include Adobe Audition, Reaper, and Logic Pro. Stitch segments together, add royalty-free background music (try Pixabay or Uppbeat), apply light compression and EQ to the AI voice track for warmth, and export your final episode as MP3 at 128kbps (minimum) or 192kbps for premium quality.`,
                  tip: 'Apply a gentle high-pass filter at 80Hz to remove low-frequency rumble from AI audio. Add +2dB at 3kHz for presence. This makes AI voices sound more broadcast-ready.',
                },
                {
                  num: '05',
                  icon: '📡',
                  title: 'Publish to Podcast Platforms',
                  body: `Upload your episode to a podcast hosting platform: Buzzsprout, Anchor (Spotify for Podcasters), Podbean, or Transistor. Write keyword-rich show notes (400–600 words) for SEO. Submit your RSS feed to Apple Podcasts, Spotify, Amazon Music, and Google Podcasts. AI-narrated content is fully accepted on all major platforms as of 2026. Spotify requires disclosure for shows using AI in certain content categories — always follow platform guidelines.`,
                  tip: 'Use your AI voice to also generate episode description voiceovers for YouTube Podcast playlists — it is a massive untapped traffic source.',
                },
                {
                  num: '06',
                  icon: '📈',
                  title: 'Grow and Scale Your Show',
                  body: `AI voice generation removes the primary bottleneck in podcast production: recording time. Once your workflow is established, you can publish 5–7 episodes per week instead of 1–2, dramatically accelerating your growth curve. Use the time saved on writing quality scripts, researching topics, and promoting each episode. Consistency beats quality in early podcast growth — AI voices enable both.`,
                  tip: 'Batch-produce 4 weeks of episodes in one writing session. Generate all audio in one sitting. Schedule releases consistently. This is the scaling flywheel AI podcasters use.',
                },
              ].map((step) => (
                <article key={step.num} className="pvg-step">
                  <div className="pvg-step__num">{step.num}</div>
                  <div className="pvg-step__content">
                    <h3 className="pvg-step__title">
                      <span aria-hidden="true">{step.icon}</span> {step.title}
                    </h3>
                    <p className="pvg-step__body">{step.body}</p>
                    <div className="pvg-step__tip">
                      <strong>💡 Pro Tip:</strong> {step.tip}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="pvg-cta-inline">
              <a href={UTM_LINK} className="pvg-cta pvg-cta--primary">
                <span aria-hidden="true">🎙️</span> Start Generating Podcast Audio — Free
              </a>
            </div>
          </div>
        </section>

        {/* ── VOICE SELECTION ── */}
        <section className="pvg-section" id="voice-selection" aria-labelledby="voice-selection-title">
          <div className="pvg-container">
            <h2 id="voice-selection-title" className="pvg-section__title">
              Best AI Voices for Every Podcast Format
            </h2>
            <p className="pvg-section__desc">
              Matching your AI voice to your podcast genre is the single biggest factor in listener
              retention. Here&apos;s the definitive guide to voice selection by format.
            </p>

            <div className="pvg-format-grid">
              {[
                {
                  icon: '📰',
                  genre: 'News & Current Affairs',
                  best: 'Clear, authoritative, neutral accent',
                  why: 'Listeners associate authoritative delivery with credibility. A measured, professional voice — neither too warm nor too cold — signals trustworthiness. American or British neutral English performs best globally.',
                  avoid: 'Overly casual or enthusiastic voices that undermine news credibility',
                  examples: 'Daily news briefings, political commentary, finance roundups, tech news',
                },
                {
                  icon: '📚',
                  genre: 'Educational & How-To',
                  best: 'Patient, mid-paced, warm and encouraging',
                  why: 'Education requires comprehension over entertainment. A voice that feels like a supportive teacher — clear articulation, patient pacing, slight warmth — improves listener retention and course completion rates.',
                  avoid: 'Fast-paced or high-energy voices that cause listener fatigue during learning',
                  examples: 'Online course audio, language learning, skill tutorials, explainer shows',
                },
                {
                  icon: '🔍',
                  genre: 'True Crime & Mystery',
                  best: 'Measured, dramatic, slightly hushed',
                  why: 'True crime listeners want to feel tension and intrigue. A voice with controlled dramatic range — slight pauses for effect, varied pacing, lower register — creates the atmospheric quality the genre demands.',
                  avoid: 'Cheerful or upbeat voices that clash with the serious tone of the content',
                  examples: 'Cold case investigations, crime documentaries, unsolved mysteries',
                },
                {
                  icon: '🧘',
                  genre: 'Wellness & Meditation',
                  best: 'Calm, slow, extremely smooth — soft volume',
                  why: 'Wellness audio must create physiological calm in listeners. Slower speech rate (0.8–0.9x), gentle pitch variation, extended pauses, and reduced volume mimic the soothing quality of a live meditation guide.',
                  avoid: 'Sharp, high-energy, or fast-paced voices that elevate stress rather than reduce it',
                  examples: 'Guided meditations, sleep stories, breathwork, affirmations, therapy support',
                },
                {
                  icon: '💼',
                  genre: 'Business & Finance',
                  best: 'Professional, confident, precise articulation',
                  why: 'B2B podcast listeners expect authority. A voice that sounds like a senior executive or experienced analyst — confident, unhurried, jargon-accurate — converts better and builds brand credibility.',
                  avoid: 'Casual conversational voices that undercut professional positioning',
                  examples: 'Startup culture, investing, marketing strategy, leadership, entrepreneurship',
                },
                {
                  icon: '🎭',
                  genre: 'Storytelling & Fiction',
                  best: 'Expressive, emotionally dynamic, character-capable',
                  why: 'Audio fiction needs a narrator who can shift emotional register across scenes — tension in conflict, warmth in character moments, wonder in descriptive passages. An expressive voice with wide pitch range achieves this.',
                  avoid: 'Flat, monotone delivery that fails to differentiate scene types or character moods',
                  examples: 'Serialized fiction, audiobook adaptations, folklore retellings, sci-fi series',
                },
                {
                  icon: '🌍',
                  genre: 'Multilingual & Regional Shows',
                  best: 'Native-sounding regional voice in target language',
                  why: 'Regional audiences respond dramatically better to native accents than foreign-accented speech in their language. Always match accent to audience geography.',
                  avoid: 'Using English voice styles for non-English content — always use native language voices',
                  examples: 'Regional news, diaspora community shows, language learning, culture podcasts',
                },
                {
                  icon: '🎮',
                  genre: 'Gaming & Pop Culture',
                  best: 'Energetic, fast-paced, youthful and enthusiastic',
                  why: 'Gaming audiences skew young and expect high-energy presentation. An enthusiastic voice with faster-than-average pace, strong emphasis, and casual register mirrors the energy of the gaming content it discusses.',
                  avoid: 'Corporate or overly polished voices that feel out of place in casual fan-focused formats',
                  examples: 'Game reviews, esports coverage, anime analysis, pop culture commentary',
                },
              ].map((f) => (
                <article key={f.genre} className="pvg-format-card">
                  <div className="pvg-format-card__header">
                    <span className="pvg-format-card__icon" aria-hidden="true">{f.icon}</span>
                    <h3 className="pvg-format-card__genre">{f.genre}</h3>
                  </div>
                  <div className="pvg-format-card__best">
                    <strong>Best Voice:</strong> {f.best}
                  </div>
                  <p className="pvg-format-card__why">{f.why}</p>
                  <div className="pvg-format-card__avoid">
                    <strong>Avoid:</strong> {f.avoid}
                  </div>
                  <div className="pvg-format-card__examples">
                    <strong>Use cases:</strong> {f.examples}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── BENEFITS ── */}
        <section className="pvg-section pvg-section--alt" id="benefits" aria-labelledby="benefits-title">
          <div className="pvg-container">
            <h2 id="benefits-title" className="pvg-section__title">
              Why Podcasters Are Switching to AI Voices in 2026
            </h2>
            <p className="pvg-section__desc">
              The shift is not just about cost. AI voice generation fundamentally changes what is possible
              for independent podcasters — unlocking production scale, quality consistency, and creative
              flexibility that simply did not exist before.
            </p>

            <div className="pvg-benefits-grid">
              {[
                {
                  icon: '💰',
                  title: 'Production Costs Drop to Near Zero',
                  body: `The average independent podcaster spends $180–$420 per episode on voice talent, studio time, and audio editing services. AI voice generation eliminates the recording cost entirely. A single $9/month subscription to Scenith Starter delivers 50,000 characters of podcast audio per month — enough for roughly 8–10 full 10-minute episodes. That is a 98% cost reduction without any quality compromise for scripted formats.`,
                  stat: '98% cost reduction vs. professional voice talent',
                },
                {
                  icon: '⚡',
                  title: 'Publish 5× More Episodes, Same Time',
                  body: `Traditional podcast production: write script (3 hrs) → record (1 hr) → edit recording (2 hrs) → produce final mix (1 hr) = 7 hours per episode. AI podcast production: write script (3 hrs) → generate AI audio (5 mins) → produce final mix (45 mins) = under 4 hours per episode. Podcasters report going from 4 episodes per month to 12–20 episodes per month after switching to AI narration.`,
                  stat: '43% faster episode production cycle',
                },
                {
                  icon: '🔄',
                  title: 'Edit Scripts Anytime, Regenerate Instantly',
                  body: `Human-recorded audio is immutable — a script change means rebooking studio time, re-recording, and re-editing. AI voices make episodes as editable as documents. Correct a fact, update a statistic, adjust phrasing, or change an entire segment in seconds. This is particularly powerful for evergreen educational content that needs periodic updates as information changes.`,
                  stat: 'Unlimited revisions at zero additional cost',
                },
                {
                  icon: '🌍',
                  title: 'Publish Multilingual Editions Simultaneously',
                  body: `AI voice generators with 20+ language support make true multilingual podcasting achievable for independent creators for the first time. Translate your script, generate a native-accented audio version, and publish a Spanish, French, German, or Hindi edition of your show alongside your English version. This multiplies your potential audience from a single language to a global one.`,
                  stat: '20+ languages, native-sounding accents, simultaneous release',
                },
                {
                  icon: '📏',
                  title: 'Consistent Quality Across Every Episode',
                  body: `Human voice quality varies: bad recording days, background noise, energy levels, and health all affect output. Your AI voice sounds identical in episode 1 and episode 247. This consistency builds a stronger listener relationship — your audience knows exactly what audio experience to expect. It also eliminates the anxiety of bad recording sessions that plague solo podcasters.`,
                  stat: '100% consistent audio quality across all episodes',
                },
                {
                  icon: '🎭',
                  title: 'Create Multi-Voice Formats Affordably',
                  body: `Simulating a co-hosted podcast or multi-character audiobook typically requires multiple voice actors — a cost multiplier. With AI voice generation, you can use different voices for different characters or hosts at the same cost as a single voice. Mix a male and female voice for a co-hosted show, use different accents for different characters in fiction, or assign distinct voices to different expert segments.`,
                  stat: 'Multiple voices, same cost as one',
                },
              ].map((b) => (
                <article key={b.title} className="pvg-benefit-card">
                  <div className="pvg-benefit-card__icon" aria-hidden="true">{b.icon}</div>
                  <h3 className="pvg-benefit-card__title">{b.title}</h3>
                  <p className="pvg-benefit-card__body">{b.body}</p>
                  <div className="pvg-benefit-card__stat">{b.stat}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── SCRIPT WRITING GUIDE ── */}
        <section className="pvg-section" id="script-writing" aria-labelledby="script-title">
          <div className="pvg-container">
            <h2 id="script-title" className="pvg-section__title">
              Writing Podcast Scripts That Sound Amazing with AI Voices
            </h2>
            <p className="pvg-section__desc">
              The quality of your AI podcast narration is{' '}
              <em>80% script, 20% voice selection.</em> Here&apos;s exactly how to write for AI narration.
            </p>

            <div className="pvg-script-guide">
              <div className="pvg-script-col">
                <h3 className="pvg-script-col__title pvg-script-col__title--do">
                  Write Like This (AI-Optimized)
                </h3>
                <div className="pvg-script-examples">
                  {[
                    {
                      label: 'Use short, punchy sentences',
                      example: `"The results were clear. Three minutes. That's all it took. The entire landscape had shifted."`,
                      reason: 'AI voices handle sentence boundaries naturally. Short sentences create drama and pace.',
                    },
                    {
                      label: 'Use commas for breathing room',
                      example: `"Before we get into today's main topic, I want to share something that happened last week, because it changed how I see everything."`,
                      reason: 'Commas trigger natural pauses in AI speech synthesis. Strategic placement creates rhythm.',
                    },
                    {
                      label: 'Write numbers as words',
                      example: `"Over two thousand five hundred listeners tuned in" — not "Over 2,500 listeners."`,
                      reason: 'Number-to-word conversion can vary by TTS engine. Writing them out guarantees correct pronunciation.',
                    },
                    {
                      label: 'Spell out abbreviations on first use',
                      example: `"The World Health Organization — or WHO — released its findings today."`,
                      reason: 'AI voices may read "WHO" as the pronoun. Spelling it out prevents pronunciation errors.',
                    },
                    {
                      label: 'Use ellipses for dramatic pauses',
                      example: `"And then... nothing. Silence. The signal had gone completely dark."`,
                      reason: 'Ellipses create extended pauses that build dramatic tension in true crime or fiction.',
                    },
                  ].map((e) => (
                    <div key={e.label} className="pvg-script-example">
                      <strong>{e.label}</strong>
                      <blockquote className="pvg-script-example__quote">{e.example}</blockquote>
                      <p className="pvg-script-example__reason">↳ {e.reason}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pvg-script-col">
                <h3 className="pvg-script-col__title pvg-script-col__title--dont">
                  Avoid These Patterns
                </h3>
                <div className="pvg-script-examples">
                  {[
                    {
                      label: 'Avoid overly long sentences',
                      example: `"The research conducted over three years by seventeen scientists from four universities across two continents ultimately concluded that the initial hypothesis was partially correct."`,
                      reason: 'AI voices lose natural intonation in very long sentences. Listeners lose the thread.',
                    },
                    {
                      label: 'Avoid raw URLs in scripts',
                      example: `"Visit https://www.example.com/podcast/episode-123?ref=twitter for more."`,
                      reason: 'TTS reads URLs character by character. Say "visit example dot com" instead.',
                    },
                    {
                      label: 'Avoid symbol-heavy formatting',
                      example: `"Our Q3 revenue was $4.2M — up 23% YoY (vs. Q2's $3.4M)."`,
                      reason: 'Special characters cause inconsistent TTS behavior. Write out all symbols as words.',
                    },
                    {
                      label: 'Avoid implied visual context',
                      example: `"As you can see in the chart above..."`,
                      reason: "Audio has no visual. Rewrite as: \"Based on the data I'm about to describe...\"",
                    },
                    {
                      label: 'Avoid back-to-back similar sounds',
                      example: `"Peter Pepper's peppered pepper pizza..."`,
                      reason: 'AI voices struggle with dense alliteration. It sounds unnatural and robotic.',
                    },
                  ].map((e) => (
                    <div key={e.label} className="pvg-script-example pvg-script-example--dont">
                      <strong>{e.label}</strong>
                      <blockquote className="pvg-script-example__quote">{e.example}</blockquote>
                      <p className="pvg-script-example__reason">↳ {e.reason}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Episode Structure */}
            <div className="pvg-episode-structure">
              <h3 className="pvg-episode-structure__title">
                The Proven Podcast Episode Structure (AI-Optimized)
              </h3>
              <div className="pvg-episode-blocks">
                {[
                  {
                    label: 'Hook (0:00–0:30)',
                    desc: "Start with the most compelling sentence of the episode. Don't introduce yourself first — hook the listener with the value. Example: \"In the next 12 minutes, you're going to learn exactly why 90% of podcasters quit before episode 20 — and the one thing that separates the ones who don't.\"",
                    chars: '~200 chars',
                  },
                  {
                    label: 'Intro & Branding (0:30–1:30)',
                    desc: "Now introduce the show. Keep this under 60 seconds — listeners want content, not formalities. \"Welcome to [Show Name]. I'm your host [Name], and this is the show where [unique value proposition].\"",
                    chars: '~400 chars',
                  },
                  {
                    label: 'Episode Overview (1:30–2:30)',
                    desc: "Briefly map what you'll cover. \"Today, we're going to cover three things: [A], [B], and [C].\" This sets expectation and dramatically improves listen-through rate by giving listeners a reason to stay.",
                    chars: '~300 chars',
                  },
                  {
                    label: 'Main Content (2:30–End)',
                    desc: "The meat of the episode, broken into clearly signposted segments. Use transitional phrases like \"Let's move to our second point\" or \"Now here's where it gets interesting\" — these work beautifully with AI voices.",
                    chars: '~3000–8000 chars',
                  },
                  {
                    label: 'Call to Action (Last 2 min)',
                    desc: "One specific ask per episode. \"If this episode helped you, please leave a 5-star review on Apple Podcasts. It takes 30 seconds and it helps this show reach more people like you.\"",
                    chars: '~400 chars',
                  },
                  {
                    label: 'Outro (Last 30 sec)',
                    desc: "Brief, consistent close. \"That's all for episode [X]. See you next [day/week]. Keep [show tagline].\" The outro should be identical across episodes — it becomes a comforting ritual for regular listeners.",
                    chars: '~150 chars',
                  },
                ].map((b) => (
                  <div key={b.label} className="pvg-episode-block">
                    <div className="pvg-episode-block__header">
                      <strong className="pvg-episode-block__label">{b.label}</strong>
                      <span className="pvg-episode-block__chars">{b.chars}</span>
                    </div>
                    <p className="pvg-episode-block__desc">{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── USE CASES / SHOW IDEAS ── */}
        <section
          className="pvg-section pvg-section--alt"
          id="use-cases"
          aria-labelledby="usecases-title"
        >
          <div className="pvg-container">
            <h2 id="usecases-title" className="pvg-section__title">
              25 Podcast Show Ideas You Can Launch Today with AI Voice
            </h2>
            <p className="pvg-section__desc">
              Every one of these show concepts requires nothing more than a script and an AI voice
              generator. No mic. No face cam. No studio. Just ideas and execution.
            </p>

            <div className="pvg-ideas-grid">
              {[
                {
                  cat: '📰 News & Briefings',
                  ideas: [
                    '5-minute daily tech news',
                    'Weekly AI industry updates',
                    'Cryptocurrency market briefings',
                    'Local business news roundup',
                    'Sports weekend recap',
                  ],
                },
                {
                  cat: '📚 Education',
                  ideas: [
                    'History stories in 10 minutes',
                    'Science concepts explained simply',
                    'Language learning phrase episodes',
                    'Philosophy ideas unpacked',
                    'Literature classics summarized',
                  ],
                },
                {
                  cat: '💼 Business & Career',
                  ideas: [
                    'Marketing tips for small business',
                    'Startup fundraising mistakes',
                    'Remote work productivity hacks',
                    'Personal finance for millennials',
                    'LinkedIn growth strategies',
                  ],
                },
                {
                  cat: '🌿 Wellness & Lifestyle',
                  ideas: [
                    'Daily 3-minute affirmation episodes',
                    'Sleep stories for adults',
                    'Mindfulness exercises under 5 min',
                    'Nutrition science explained',
                    'Running & fitness motivation',
                  ],
                },
                {
                  cat: '🎭 Entertainment & Fiction',
                  ideas: [
                    'AI-narrated short story series',
                    'Urban legends from around the world',
                    'Fan theory analysis shows',
                    'Pop culture opinion pieces',
                    'Historical drama retellings',
                  ],
                },
              ].map((cat) => (
                <div key={cat.cat} className="pvg-idea-cat">
                  <h3 className="pvg-idea-cat__title">{cat.cat}</h3>
                  <ul className="pvg-idea-cat__list">
                    {cat.ideas.map((idea) => (
                      <li key={idea}>{idea}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="pvg-cta-inline">
              <a href={UTM_LINK} className="pvg-cta pvg-cta--primary">
                <span aria-hidden="true">🚀</span> Pick a Show Idea &amp; Generate Your First Episode
              </a>
            </div>
          </div>
        </section>

        {/* ── MONETIZATION ── */}
        <section className="pvg-section" id="monetization" aria-labelledby="monetization-title">
          <div className="pvg-container">
            <h2 id="monetization-title" className="pvg-section__title">
              How to Monetize an AI-Narrated Podcast in 2026
            </h2>
            <p className="pvg-section__desc">
              AI-narrated shows are not just a production shortcut — they are a business model. Here&apos;s
              how creators are generating real revenue from faceless, AI-voiced podcasts.
            </p>

            <div className="pvg-monetization-grid">
              {[
                {
                  icon: '💸',
                  method: 'Programmatic Advertising (CPM)',
                  howItWorks:
                    "Once your show reaches 1,000+ downloads per episode, you qualify for programmatic podcast ad networks like Spotify Audience Network, Midroll, and Podbean Ads. CPM rates for informational and educational podcasts range from $15–$45 per 1,000 downloads.",
                  timeline: 'Typical timeline: 3–6 months to monetization threshold with consistent publishing',
                  earning: '$150–$450/month at 1,000 downloads/ep, 1 ep/week',
                },
                {
                  icon: '📦',
                  method: 'Affiliate Marketing Integration',
                  howItWorks:
                    'Incorporate affiliate product recommendations naturally into episode scripts. AI voices deliver sponsored mentions indistinguishably from organic content. Finance podcasts promoting brokerage apps, tech shows recommending SaaS tools, and wellness shows featuring supplement brands are the highest-converting categories.',
                  timeline: 'Revenue begins immediately — first episode can include affiliate links',
                  earning: '$0.50–$12 per listener action depending on product category',
                },
                {
                  icon: '🎓',
                  method: 'Premium Podcast Subscriptions',
                  howItWorks:
                    'Publish free weekly episodes to build audience. Offer a paid subscription via Spotify Subscriptions, Apple Podcast Subscriptions, or Patreon for bonus episodes, ad-free listening, early access, or exclusive content. AI production economics mean your margin on paid subscriptions is near 100%.',
                  timeline: '6–12 months to meaningful paid subscriber base',
                  earning: '$5–$20/subscriber/month; 100 subscribers = $500–$2,000/month',
                },
                {
                  icon: '🤝',
                  method: 'Sponsored Episodes & Brand Deals',
                  howItWorks:
                    'Direct sponsorships outperform programmatic significantly. A niche podcast with 500 highly engaged listeners in a specific industry can command $200–$500 per sponsored episode. Brands value targeted reach. Your AI production workflow means you can produce custom branded episodes for sponsors at minimal additional cost.',
                  timeline: 'Achievable within 6 months for niche-specific shows',
                  earning: '$200–$2,000 per sponsored episode for niche shows',
                },
                {
                  icon: '📚',
                  method: 'Lead Generation for Your Own Products',
                  howItWorks:
                    'If you sell courses, coaching, software, or services, a podcast is your most powerful trust-building channel. Podcast listeners convert to product buyers at 2–4x the rate of blog readers or social media followers. Your AI podcast becomes a free, scalable marketing engine.',
                  timeline: 'Sales impact measurable within 90 days of launch',
                  earning: 'Dependent on product — typically 2–5% listener-to-customer conversion',
                },
                {
                  icon: '🏪',
                  method: 'Podcast Production as a Service',
                  howItWorks:
                    'Once you master AI podcast production, sell it as a service to businesses. Many small businesses want podcast presence but lack the time or expertise. You charge $300–$800 per month to produce their show — writing scripts, generating AI audio, editing, and publishing. Your actual cost with AI tools is under $20/month.',
                  timeline: 'Serviceable immediately after mastering the workflow',
                  earning: '$300–$800/client/month; 5 clients = $1,500–$4,000/month',
                },
              ].map((m) => (
                <article key={m.method} className="pvg-monetization-card">
                  <div className="pvg-monetization-card__icon" aria-hidden="true">{m.icon}</div>
                  <h3 className="pvg-monetization-card__method">{m.method}</h3>
                  <p className="pvg-monetization-card__how">{m.howItWorks}</p>
                  <div className="pvg-monetization-card__timeline">
                    <strong>Timeline:</strong> {m.timeline}
                  </div>
                  <div className="pvg-monetization-card__earning">
                    <strong>Earning potential:</strong> {m.earning}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="pvg-section pvg-section--alt" id="faq" aria-labelledby="faq-title">
          <div className="pvg-container">
            <h2 id="faq-title" className="pvg-section__title">
              Frequently Asked Questions: Podcast AI Voice Generator
            </h2>

            <div className="pvg-faq-grid">
              {[
                {
                  q: 'Can I use AI voice generators for podcasts on Spotify?',
                  a: "Yes. As of 2026, Spotify fully accepts AI-generated podcast audio. Shows using AI narration are required to disclose AI use in certain content categories (particularly news and topical commentary) via Spotify's content declaration tools. For non-news formats — education, entertainment, fiction, wellness — no special disclosure is required beyond good faith transparency with your audience.",
                },
                {
                  q: 'Will listeners know my podcast uses AI voice?',
                  a: 'For modern neural TTS voices, most listeners cannot distinguish AI narration from human narration in scripted formats. A 2025 listener study found that 82% of participants could not correctly identify AI-narrated educational podcast segments when presented alongside human-recorded versions.',
                },
                {
                  q: 'How many characters do I need per episode?',
                  a: 'A 5-minute podcast episode requires approximately 700–800 characters. A 10-minute episode needs 1,400–1,600 characters. A full 30-minute educational episode runs 4,200–4,800 characters. Scenith\'s free plan includes 600 characters/month; Starter plan provides 50,000 characters/month — enough for 30+ full 10-minute episodes per month.',
                },
                {
                  q: 'What audio quality do AI voice generators produce for podcasts?',
                  a: 'Scenith generates podcast audio as high-quality MP3 files. For podcast distribution, the industry standard is 128kbps stereo or 192kbps for premium quality. Our generated audio exports at broadcast-ready quality — consistent levels, no background noise, clean frequency response.',
                },
                {
                  q: 'Can I use AI voices for podcast intros and outros only?',
                  a: 'Absolutely. Many podcasters use AI voices specifically for recurring elements — intros, outros, transition segments, and ad reads — while recording the main content themselves. This hybrid approach is extremely popular and gives you professional-sounding bookends without committing entirely to AI narration.',
                },
                {
                  q: 'Do I need to credit the AI voice tool in my podcast?',
                  a: "Scenith's commercial license requires no attribution in your content. You own the generated audio outright and can publish, monetize, and distribute it without crediting Scenith in your episodes.",
                },
                {
                  q: 'Can AI voices do different accents for the same language?',
                  a: 'Yes. Scenith offers multiple accent variants within the same language. For English alone, you have American (General), British (RP), Australian, Indian, and more. This lets you maintain consistency by selecting one regional accent as your show voice and using it exclusively across all episodes.',
                },
                {
                  q: 'How do I handle podcast episodes longer than the character limit?',
                  a: "For longer episodes, generate the audio in segments that fit within your plan's per-request character limit. Generate your intro, each main segment, and your outro as separate MP3 files, then stitch them together in your audio editor. This workflow is actually preferable — it gives you modular control over each segment independently.",
                },
              ].map((item) => (
                <article key={item.q} className="pvg-faq-item">
                  <h3 className="pvg-faq-item__q">{item.q}</h3>
                  <p className="pvg-faq-item__a">{item.a}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── COMPARISON TABLE ── */}
        <section className="pvg-section" id="comparison" aria-labelledby="comparison-title">
          <div className="pvg-container">
            <h2 id="comparison-title" className="pvg-section__title">
              AI Podcast Voice vs. Human Recording: Full Comparison
            </h2>
            <p className="pvg-section__desc">
              The honest breakdown podcasters need before making the switch.
            </p>

            <div className="pvg-table-wrap">
              <table className="pvg-table" role="table">
                <thead>
                  <tr>
                    <th scope="col">Factor</th>
                    <th scope="col" className="pvg-table__ai">AI Voice (Scenith)</th>
                    <th scope="col" className="pvg-table__human">Human Recording</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Cost per episode', '~$0–$0.50', '$100–$500+'],
                    ['Time to produce', '5–30 mins', '3–8 hours'],
                    ['Revisions', 'Instant & free', '$50–$200 each'],
                    ['Quality consistency', 'Perfect every time', 'Variable'],
                    ['Multilingual support', '20+ languages', '1 per talent hired'],
                    ['Background noise', 'Zero', 'Requires soundproofing'],
                    ['Emotional range', 'Growing (very good)', 'Excellent'],
                    ['Character voices', 'Multiple via voice switching', 'One per talent'],
                    ['Scalability', 'Unlimited episodes', 'Limited by recording time'],
                    ['Commercial rights', 'Included, no attribution', 'Negotiated per contract'],
                    ['Updates to old episodes', 'Edit text, regenerate', 'Requires new recording'],
                  ].map(([factor, ai, human]) => (
                    <tr key={factor}>
                      <td>
                        <strong>{factor}</strong>
                      </td>
                      <td className="pvg-table__ai-cell">{ai}</td>
                      <td className="pvg-table__human-cell">{human}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── TOOLKIT ── */}
        <section className="pvg-section pvg-section--alt" id="tools" aria-labelledby="tools-title">
          <div className="pvg-container">
            <h2 id="tools-title" className="pvg-section__title">
              Complete AI Toolkit for Podcast Production
            </h2>
            <p className="pvg-section__desc">
              Voice generation is just one piece of a full podcast production stack. Here&apos;s the
              complete toolkit our community uses alongside Scenith&apos;s voice generator.
            </p>

            <div className="pvg-toolkit-grid">
              {[
                {
                  icon: '🎙️',
                  name: 'Scenith AI Voice Generator',
                  role: 'Episode narration, intros, outros, ad reads',
                  link: UTM_LINK,
                  cta: 'Use Free →',
                  highlight: true,
                },
                {
                  icon: '🎵',
                  name: 'Uppbeat / Pixabay',
                  role: 'Royalty-free background music and sound effects',
                  link: '#',
                  cta: 'Browse Music',
                  highlight: false,
                },
                {
                  icon: '🎚️',
                  name: 'Audacity (Free)',
                  role: 'Audio editing, mixing, MP3 export',
                  link: '#',
                  cta: 'Download Free',
                  highlight: false,
                },
                {
                  icon: '📡',
                  name: 'Buzzsprout / Anchor',
                  role: 'Podcast hosting and distribution to all platforms',
                  link: '#',
                  cta: 'Start Hosting',
                  highlight: false,
                },
                {
                  icon: '📊',
                  name: 'Spotify Analytics',
                  role: 'Listener analytics, growth tracking, show insights',
                  link: '#',
                  cta: 'View Analytics',
                  highlight: false,
                },
                {
                  icon: '📝',
                  name: 'ChatGPT / Claude',
                  role: 'Script drafting, episode idea generation, research',
                  link: '#',
                  cta: 'Write Scripts',
                  highlight: false,
                },
              ].map((tool) => (
                <div
                  key={tool.name}
                  className={`pvg-toolkit-card ${tool.highlight ? 'pvg-toolkit-card--highlight' : ''}`}
                >
                  <span className="pvg-toolkit-card__icon" aria-hidden="true">
                    {tool.icon}
                  </span>
                  <h3 className="pvg-toolkit-card__name">{tool.name}</h3>
                  <p className="pvg-toolkit-card__role">{tool.role}</p>
                  <a
                    href={tool.link}
                    className={`pvg-toolkit-card__cta ${tool.highlight ? 'pvg-toolkit-card__cta--primary' : ''}`}
                    aria-label={`${tool.cta} for ${tool.name}`}
                  >
                    {tool.cta}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="pvg-final-cta" id="get-started" aria-labelledby="final-cta-title">
          <div className="pvg-final-cta__glow" aria-hidden="true" />
          <div className="pvg-container pvg-final-cta__inner">
            <div className="pvg-final-cta__badge" aria-label="Free to start">
              🎙️ Free to Start · No Credit Card
            </div>
            <h2 id="final-cta-title" className="pvg-final-cta__title">
              Your Podcast Is One Script Away.
              <span className="pvg-final-cta__title-sub">
                Generate your first AI episode in the next 5 minutes.
              </span>
            </h2>
            <p className="pvg-final-cta__desc">
              Join 1,500+ creators who use Scenith to produce professional audio content. 40+ natural voices.
              20+ languages. Instant MP3. Commercial rights included. Forever free to start.
            </p>

            <a
              href={UTM_LINK}
              className="pvg-cta pvg-cta--final"
              aria-label="Generate AI podcast voice for free on Scenith"
            >
              <span aria-hidden="true">🎙️</span>
              Generate Your Podcast Voice — Free
              <span className="pvg-cta__arrow" aria-hidden="true">→</span>
            </a>

            <div className="pvg-final-cta__trust">
              {[
                '✅ 40+ Voices',
                '🌍 20+ Languages',
                '⚡ 3-Second Generation',
                '📥 Instant MP3 Download',
                '💼 Commercial Rights',
              ].map((t) => (
                <span key={t} className="pvg-final-cta__trust-item">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── RELATED TOOLS ── */}
        <section className="pvg-related" aria-label="Related tools">
          <div className="pvg-container">
            <h2 className="pvg-related__title">More AI Tools for Creators</h2>
            <div className="pvg-related__grid">
              <a href="https://scenith.in/tools/ai-voice-generation" className="pvg-related__card">
                <span aria-hidden="true">🎤</span>
                <strong>AI Voice Generator</strong>
                <span>Full text-to-speech tool — all voices, all languages</span>
              </a>
              <a href="https://scenith.in/tools/ai-video-generation" className="pvg-related__card">
                <span aria-hidden="true">🎬</span>
                <strong>AI Video Generator</strong>
                <span>Turn prompts into cinematic AI videos in seconds</span>
              </a>
              <a href="https://scenith.in/tools/ai-image-generation" className="pvg-related__card">
                <span aria-hidden="true">🖼️</span>
                <strong>AI Image Generator</strong>
                <span>Create stunning visuals for podcast cover art</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}