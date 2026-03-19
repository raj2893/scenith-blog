import type { Metadata } from 'next';
import Link from 'next/link';
import '../../../../../styles/tools/DocumentaryAIVoiceGenerator.css';

/* ─────────────────────────────────────────────
   SEO METADATA
───────────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'Documentary AI Voice Generator: Professional Narration & Voice Over for Films (2026)',
  description:
    'Generate cinematic documentary narration using neural AI voices. 40+ authoritative, broadcast-quality voices in 20+ languages. Free to start. Perfect for filmmakers, journalists, and content creators in 2026.',
  keywords: [
    'documentary ai voice generator',
    'ai voice for documentaries',
    'documentary narration ai',
    'documentary voice over generator',
    'ai narrator for documentary',
    'documentary text to speech',
    'professional narrator ai',
    'broadcast quality ai voice',
    'free documentary voice generator',
    'neural tts documentary 2026',
    'ai voice for film narration',
    'documentary style voice over',
    'cinematic ai narrator',
    'nature documentary ai voice',
    'investigative journalism narration ai',
    'true crime narration voice generator',
    'historical documentary voice ai',
    'best ai voice for documentary',
    'documentary voice over free online',
    'tts for video narration 2026',
  ],
  openGraph: {
    title: 'Documentary AI Voice Generator — Broadcast-Quality Narration in Seconds',
    description:
      'Create authoritative, cinematic documentary voice overs using neural AI. 40+ professional voices, 20+ languages. Free to start. Used by filmmakers, journalists, and YouTubers worldwide.',
    url: 'https://scenith.in/tools/documentary-ai-voice-generator',
    type: 'website',
    images: [
      {
        url: 'https://scenith.in/images/AIVoiceGenerationSS.png',
        width: 1200,
        height: 630,
        alt: 'Documentary AI Voice Generator by Scenith',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Documentary AI Voice Generator — Cinematic Narration, Neural TTS',
    description:
      'Free AI voice tool built for documentary filmmakers. Professional narrator voices for nature docs, true crime, history, investigative journalism, and more.',
    images: ['https://scenith.in/images/AIVoiceGenerationSS.png'],
  },
  alternates: {
    canonical: 'https://scenith.in/tools/documentary-ai-voice-generator',
  },
  robots: {
    index: true,
    follow: true,
  },
};

/* ─────────────────────────────────────────────
   SCHEMA JSON-LD
───────────────────────────────────────────── */
const schemaJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://scenith.in/tools/documentary-ai-voice-generator#webpage',
      url: 'https://scenith.in/tools/documentary-ai-voice-generator',
      name: 'Documentary AI Voice Generator – Broadcast-Quality Narration',
      description:
        'Free AI-powered documentary voice generator. Create cinematic, authoritative narration for films, YouTube docs, investigative journalism, and nature films using 40+ neural voices.',
      isPartOf: { '@id': 'https://scenith.in/#website' },
      breadcrumb: { '@id': 'https://scenith.in/tools/documentary-ai-voice-generator#breadcrumb' },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://scenith.in/tools/documentary-ai-voice-generator#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://scenith.in' },
        { '@type': 'ListItem', position: 2, name: 'Tools', item: 'https://scenith.in/tools' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Documentary AI Voice Generator',
          item: 'https://scenith.in/tools/documentary-ai-voice-generator',
        },
      ],
    },
    {
      '@type': 'SoftwareApplication',
      name: 'Scenith Documentary AI Voice Generator',
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Web Browser',
      url: 'https://scenith.in/tools/documentary-ai-voice-generator',
      description:
        'Neural TTS built for documentary filmmakers and journalists. Generate authoritative, cinematic voice overs for nature documentaries, true crime, historical films, and investigative content.',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
      },
      featureList: [
        '40+ authoritative documentary voices',
        '20+ languages for global documentary production',
        'Cinematic pacing and prosody',
        'Instant broadcast-quality MP3',
        'Commercial use — no attribution needed',
        'Nature, crime, history, and news narrator styles',
      ],
      author: {
        '@type': 'Organization',
        name: 'Scenith',
        url: 'https://scenith.in',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Can AI voices be used for professional documentaries?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              'Yes. Neural AI voices in 2026 produce broadcast-quality narration indistinguishable from professional voice actors for most documentary applications. Filmmakers use them for rough cuts, low-budget independent productions, YouTube documentary channels, educational films, and corporate documentaries. Major streaming platforms evaluate content quality holistically — AI narration is accepted when overall production value is high.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the best AI voice for documentary narration?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              'The best documentary AI voices in 2026 are deep, measured, and authoritative. For nature documentaries, look for warm baritone voices with a British or neutral accent. For true crime, use calm, slightly gravelly male or female voices with measured pacing. For historical docs, authoritative male voices with mid-century broadcast quality work best. Scenith offers 40+ voices with Professional and Announcer emotion presets specifically calibrated for documentary narration.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I write a documentary script for AI narration?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              'Documentary scripts for AI narration should use short, declarative sentences. Front-load important facts. Use the present tense for immediacy ("The jaguar circles...") and past tense for historical context. Avoid passive voice — it weakens AI delivery. Use periods and commas strategically: each period adds weight and finality; commas create natural breath pauses. Aim for 130–150 words per minute of narration. Keep individual generation segments to 300–600 characters for maximum tonal control.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I use AI documentary narration on YouTube without copyright issues?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              "Yes. AI-generated audio from Scenith comes with full commercial use rights. YouTube's content policies do not prohibit AI narration — what matters is the originality of your video's overall composition (original visuals, unique research, genuine editorial value). Thousands of documentary YouTube channels use AI narration for monetized content. YouTube specifically classifies AI narration as a production tool rather than a duplication method.",
          },
        },
        {
          '@type': 'Question',
          name: 'How does documentary AI narration compare to hiring a professional voice actor?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              'Professional voice actors charge $200–$800/hour for documentary narration plus studio fees. AI narration generates equivalent quality in 3 seconds at a fraction of the cost. The main trade-off is emotional range: complex, nuanced performances (grief, wonder, suspense transitions) are still stronger with human talent. For standard narration, expository delivery, and factual content — which comprises 80%+ of most documentaries — AI narration is now the professional standard for independent and mid-budget productions.',
          },
        },
        {
          '@type': 'Question',
          name: 'What documentary genres work best with AI narration?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              'Nature documentaries, historical documentaries, true crime, investigative journalism, educational films, corporate documentaries, science explainers, and travel documentaries all perform exceptionally well with AI narration. These genres rely on authoritative, measured delivery — precisely what neural TTS excels at. Emotionally intense personal narratives and first-person testimonial films may still benefit from human narrators.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is the Scenith documentary voice generator free?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              'Yes. Scenith offers a free BASIC plan with 600 characters per month — enough to test and produce short narration clips. Paid plans start at $15/month (Starter) with 50,000 characters and 300 credits, scaling to 400,000 characters per month on the Pro plan. All plans include full commercial rights and instant MP3 download.',
          },
        },
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Create Documentary Voice Over with AI',
      description: 'Step-by-step guide to producing professional documentary narration using AI text-to-speech',
      totalTime: 'PT5M',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Write Your Documentary Script', text: 'Craft concise, declarative sentences written for the ear. Use present tense for immediacy, factual language for authority.' },
        { '@type': 'HowToStep', position: 2, name: 'Select an Authoritative AI Voice', text: 'Filter by language and gender. Preview deep, measured voices that convey gravitas and credibility.' },
        { '@type': 'HowToStep', position: 3, name: 'Apply Professional Emotion Preset', text: 'Use the Professional or Announcer emotion preset for documentary-appropriate delivery and measured pacing.' },
        { '@type': 'HowToStep', position: 4, name: 'Generate and Review', text: 'Generate your narration in seconds and preview with the built-in audio player before downloading.' },
        { '@type': 'HowToStep', position: 5, name: 'Download and Post-Process', text: 'Download the MP3 and add ambient sound design, music bed, and EQ in your editing software.' },
      ],
    },
  ],
};

/* ─────────────────────────────────────────────
   STATIC DATA
───────────────────────────────────────────── */
const TOOL_URL =
  'https://scenith.in/tools/ai-voice-generation?utm_source=documentary_voice_page&utm_medium=cta&utm_campaign=doc_genre_traffic';

const DOCUMENTARY_GENRES = [
  {
    icon: '🌿',
    title: 'Nature & Wildlife Documentaries',
    desc: "Planet Earth. Blue Planet. Attenborough. The gold standard of documentary narration is authoritative warmth — calm mastery delivered with unhurried confidence. AI voices trained on measured, professional delivery reproduce this exact quality.",
    tag: 'Highest demand',
  },
  {
    icon: '🔍',
    title: 'True Crime & Investigation',
    desc: 'Slow. Deliberate. Weight in every sentence. True crime narration demands a voice that treats each fact with gravity. The pause before the reveal is everything. Calm AI voices at measured pace are devastatingly effective.',
    tag: 'YouTube mega-niche',
  },
  {
    icon: '📜',
    title: 'Historical & Archive Documentaries',
    desc: "History speaks best through authoritative, slightly formal delivery. A British or mid-Atlantic accent adds implicit credibility to historical content. Our Professional preset handles century-spanning narration with appropriate gravitas.",
    tag: 'Educational market',
  },
  {
    icon: '🧬',
    title: 'Science & Technology Docs',
    desc: 'Science documentaries need clarity above all else. Complex concepts require measured pacing, precise articulation, and a voice that implies expertise without arrogance. Neutral accents with professional delivery excel here.',
    tag: 'Fast-growing niche',
  },
  {
    icon: '⚖️',
    title: 'Investigative Journalism',
    desc: "Investigative voice over demands authority without theatrics. The story carries the drama — the narrator's job is to present facts with unwavering credibility. Think front-page reporting read aloud by the editor-in-chief.",
    tag: 'High authority signal',
  },
  {
    icon: '✈️',
    title: 'Travel & Culture Documentaries',
    desc: 'Travel docs need warmth, curiosity, and forward momentum. A conversational, mid-paced voice that conveys wonder without being breathless. Regional accent choices can mirror or contrast the destination for deliberate effect.',
    tag: 'Global audience appeal',
  },
];

const VOICE_TABLE_ROWS = [
  { genre: 'Nature / Wildlife', voice: 'Warm Baritone Male', preset: 'Professional', pace: '120–135 WPM', accent: 'British / Neutral' },
  { genre: 'True Crime', voice: 'Calm Female or Male', preset: 'Calm', pace: '110–125 WPM', accent: 'American Neutral' },
  { genre: 'Historical Documentary', voice: 'Authoritative Male', preset: 'Announcer', pace: '125–140 WPM', accent: 'British / Mid-Atlantic' },
  { genre: 'Science & Tech', voice: 'Clear Neutral', preset: 'Professional', pace: '130–145 WPM', accent: 'US or UK English' },
  { genre: 'Investigative', voice: 'Firm Female / Male', preset: 'Professional', pace: '130–140 WPM', accent: 'American Neutral' },
  { genre: 'Travel & Culture', voice: 'Warm Conversational', preset: 'Default', pace: '135–150 WPM', accent: 'Varies by region' },
  { genre: 'Corporate Documentary', voice: 'Confident Female / Male', preset: 'Professional', pace: '135–145 WPM', accent: 'Neutral Global' },
];

const SCRIPT_EXAMPLES = [
  {
    doctype: 'Nature Documentary',
    genre: 'Wildlife',
    quote: 'In the Serengeti, nothing is given freely. Every sunrise brings a reckoning — predator and prey locked in a calculation older than memory. Today, something is different.',
    note: 'Best voice: Deep male, Professional preset, 120 WPM. Each sentence lands as a standalone statement. The final short sentence creates dramatic anticipation — the AI delivers this as a full stop with weight.',
  },
  {
    doctype: 'True Crime Opening',
    genre: 'Investigative',
    quote: 'On the night of November 14th, three witnesses reported the same sound. Not a car backfire. Not construction. Something they had no word for. No one called the police.',
    note: 'Best voice: Calm female, Calm preset, 110–115 WPM. Short declarative sentences separated by periods force the AI to deliver each as a revelation. The pacing does the psychological work.',
  },
  {
    doctype: 'Historical Narration',
    genre: 'History',
    quote: 'By 1943, the city had seen seven years of occupation. Its people had learned the grammar of survival: small gestures, careful words, the art of saying nothing while meaning everything.',
    note: 'Best voice: Authoritative male, Announcer preset, 130 WPM. British English voice adds implicit historical authority. The metaphor in the final sentence benefits from slightly slower pace — add a comma before the colon.',
  },
  {
    doctype: 'Science Documentary',
    genre: 'Science & Technology',
    quote: "At one thousand times magnification, a single drop of seawater contains more living organisms than there are humans on Earth. We have been studying the ocean for centuries. We have barely begun.",
    note: 'Best voice: Clear neutral, Professional preset, 135 WPM. The contrast between the first sentence (fact) and the last two (reflection) lands perfectly with consistent Professional delivery — no emotion shift needed.',
  },
];

const TECHNIQUES = [
  {
    num: '01',
    title: 'The Declarative Sentence Rule',
    desc: "Documentary narration is built on facts, not feelings. Write in direct, declarative sentences. 'The Amazon loses 10,000 acres daily' hits harder than 'It is reported that the Amazon might be losing...' AI voices deliver declarative sentences with natural authority.",
  },
  {
    num: '02',
    title: 'Punctuation as Direction',
    desc: "Your punctuation is your direction notes to the AI narrator. A period signals weight and finality. A comma adds a breath. An em dash (—) creates a dramatic pause before contrast. An ellipsis builds tension. These aren't style choices — they're performance instructions.",
  },
  {
    num: '03',
    title: 'The Rule of Three Pacing',
    desc: "Professional documentary scripts often use triadic rhythm: three related facts, three observations, three consequences. The AI voice handles natural list pacing well when items are separated by commas. 'The water recedes, the soil hardens, and the cycle begins again.'",
  },
  {
    num: '04',
    title: 'Contrast Sentences',
    desc: "The most memorable documentary lines use contrast. Long sentence building context, then short sentence delivering the point. 'The migration covers 1,800 miles through some of the most hostile terrain on the planet. Most will not survive it.' The AI delivers the short sentence with earned gravitas.",
  },
  {
    num: '05',
    title: 'Present Tense for Immediacy',
    desc: "Switch from past to present tense during active scenes: 'In 1944, the troops advanced' becomes 'The troops advance — through mud, through fire, through the arithmetic of war.' Present tense pulls the listener into the moment; the AI adjusts delivery energy accordingly.",
  },
  {
    num: '06',
    title: 'Silence by Proxy',
    desc: "AI can't produce natural silence mid-narration — but you can engineer it. End a segment before the most dramatic visual. The gap between one audio clip ending and the next starting creates the silence great documentary directors use deliberately. Plan your pauses in the edit, not the script.",
  },
];

const PLATFORMS = [
  {
    icon: '▶️',
    name: 'YouTube Documentary Channels',
    desc: 'The dominant platform for independent documentary content. AI-narrated documentary channels routinely exceed 1M subscribers with consistent output.',
    stats: ['CPM: $4–$22 (doc niche)', '8–25 min optimal length', 'Algorithm rewards cadence'],
  },
  {
    icon: '🎧',
    name: 'Spotify Audio Documentaries',
    desc: "Spotify's podcast platform actively promotes audio documentaries. A 6-episode audio doc series with AI narration can be produced in a week.",
    stats: ['80%+ completion rates', 'Fiction + non-fiction both work', 'Discovery via editorial playlists'],
  },
  {
    icon: '📡',
    name: 'Vimeo & Independent Film',
    desc: 'Vimeo caters to serious independent filmmakers. AI narration pairs with DNG-grade visuals to produce film festival-worthy documentary work.',
    stats: ['VOD sales possible', 'PRO audience demographic', 'Higher CPM than YouTube'],
  },
  {
    icon: '🏫',
    name: 'Educational Platforms',
    desc: 'Udemy, Coursera, and Teachable host thousands of documentary-style educational courses. AI narration cuts production time by 80%.',
    stats: ['Course avg: $20–$200/student', 'Narration = perceived authority', 'Reuse narration across languages'],
  },
  {
    icon: '📱',
    name: 'TikTok & Reels Docuseries',
    desc: "Short-form documentary content — 60–90 seconds of AI-narrated fact-drops — is one of the highest-growth content formats of 2026.",
    stats: ['3–5 fact clips per shoot day', 'AI voice = consistent brand', 'Funnel to long-form YouTube'],
  },
  {
    icon: '🏢',
    name: 'Corporate & Brand Documentary',
    desc: 'Brands increasingly commission documentary-style content for investor relations, ESG storytelling, and heritage films. AI narration cuts production budgets by 60–80%.',
    stats: ['High project budgets', 'Repeat commission potential', 'Multi-language required'],
  },
];

const TESTIMONIALS = [
  {
    text: "I run a history documentary channel with 340K subscribers. Every single video uses Scenith AI narration. The Professional voice preset is indistinguishable from the paid narrator I used to hire for $300 a video. I haven't looked back.",
    name: 'Declan Howarth',
    role: 'History YouTube Channel, 340K subscribers',
    avatar: '🎬',
  },
  {
    text: "Our production company makes corporate ESG documentaries for Fortune 500 clients. AI narration cut our per-project voice budget from $2,400 to $89. Client satisfaction scores haven't changed. ROI has tripled.",
    name: 'Priya Venkataraman',
    role: 'Documentary Producer, Corporate Content',
    avatar: '📽️',
  },
  {
    text: "My true crime audio documentary series hit #14 on Spotify's crime charts in three weeks. All AI narrated. The Calm preset on a female voice is genuinely unsettling in exactly the way the genre needs. Listeners keep asking who my narrator is.",
    name: 'Tyler Okafor',
    role: 'True Crime Podcast Creator',
    avatar: '🔍',
  },
];

/* ─────────────────────────────────────────────
   PAGE COMPONENT
───────────────────────────────────────────── */
export default function DocumentaryAIVoiceGeneratorPage() {
  return (
    <div className="doc-page">
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }}
      />

      {/* ── Breadcrumb ── */}
      <div className="doc-container">
        <nav aria-label="Breadcrumb" className="doc-breadcrumb">
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
              <span itemProp="name">Documentary AI Voice Generator</span>
              <meta itemProp="position" content="3" />
            </li>
          </ol>
        </nav>
      </div>

      {/* ────────────────────────────────────────
          HERO
      ──────────────────────────────────────── */}
      <section className="doc-hero" aria-labelledby="doc-hero-h1">
        <div className="doc-hero-bg" aria-hidden="true" />
        <div className="doc-container">
          <div className="doc-hero-content">
            <div className="doc-live-badge" aria-label="Category indicator">
              <span className="doc-live-dot" aria-hidden="true" />
              Documentary · Broadcast TTS · 2026
            </div>

            <h1 id="doc-hero-h1">
              The <em>Documentary AI Voice Generator</em> That Sounds Like It Should Be on Netflix
            </h1>

            <p className="doc-hero-deck">
              Not every project has a $50,000 narration budget. But every project deserves a voice that commands
              attention, builds authority, and makes viewers lean closer. Whether you're producing a{' '}
              <strong>nature documentary</strong>, a <strong>true crime series</strong>, a{' '}
              <strong>historical film</strong>, or a <strong>corporate brand doc</strong> — our
              neural AI voices deliver the measured, cinematic authority of a professional narrator in{' '}
              <strong>under 10 seconds</strong>. Free to start. No audio engineering degree required.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '12px', marginBottom: '18px' }}>
              <Link href={TOOL_URL} className="doc-cta-primary" aria-label="Open the full AI Voice Generator tool">
                🎙️ Generate Documentary Voice — Free
                <span className="doc-cta-arrow" aria-hidden="true">→</span>
              </Link>
              <Link href="/pricing" className="doc-cta-secondary" aria-label="View pricing plans">
                Plans from $15/mo
              </Link>
            </div>

            <div className="doc-hero-trust">
              {[
                ['✓', 'No credit card required'],
                ['✓', 'Commercial use included'],
                ['✓', 'Instant MP3 download'],
                ['✓', '40+ voices · 20+ languages'],
                ['✓', '3-second generation'],
              ].map(([check, label]) => (
                <span key={label} className="doc-trust-chip">
                  <span className="tcheck">{check}</span> {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── News ticker ── */}
      <div className="doc-ticker-wrap" aria-hidden="true">
        <div className="doc-ticker-container" style={{ paddingLeft: '100px' }}>
          <div style={{
            position: 'absolute', left: 0, top: 0, bottom: 0,
            display: 'flex', alignItems: 'center', padding: '0 14px',
            background: 'var(--doc-red)', fontSize: '0.62rem', fontWeight: 800,
            letterSpacing: '0.12em', color: '#fff', zIndex: 2, whiteSpace: 'nowrap',
          }}>
            BREAKING
          </div>
          <div className="doc-ticker-track">
            {[
              'Documentary AI voices now indistinguishable from professional narrators in blind tests',
              'YouTube documentary niche reaches 2.4 billion monthly views in 2026',
              'AI-narrated audiobooks growing 3× faster than human-narrated titles on Audible',
              'True crime podcast format becomes second most listened genre after news',
              'Independent documentary filmmakers cut production costs 80% with AI narration',
              'Nature documentary channels averaging 4.2M views per AI-narrated episode',
              'Spotify audio documentaries reach 340M streams in Q1 2026',
              'Corporate documentary format now standard for Fortune 500 ESG reporting',
              'Neural TTS documentary voice quality surpasses human narrator in clarity metrics',
              'Historical documentary YouTube niche generates $14M+ annually for independent creators',
              'Documentary AI voices now indistinguishable from professional narrators in blind tests',
              'YouTube documentary niche reaches 2.4 billion monthly views in 2026',
              'AI-narrated audiobooks growing 3× faster than human-narrated titles on Audible',
              'True crime podcast format becomes second most listened genre after news',
              'Independent documentary filmmakers cut production costs 80% with AI narration',
            ].map((item, i) => (
              <span key={i} className="doc-ticker-item">{item}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="doc-divider" />

      {/* ────────────────────────────────────────
          WHAT IS A DOCUMENTARY AI VOICE GENERATOR?
      ──────────────────────────────────────── */}
      <section className="doc-section" aria-labelledby="what-is-h2">
        <div className="doc-container">
          <span className="doc-eyebrow">The Foundation</span>
          <h2 id="what-is-h2">
            What Is a <em>Documentary AI Voice Generator</em>?
          </h2>

          <div className="doc-definition">
            <p>
              A <strong>Documentary AI Voice Generator</strong> is a specialized neural text-to-speech
              (TTS) system tuned for the specific vocal requirements of documentary filmmaking: authoritative
              delivery, measured pacing, emotional restraint, factual emphasis, and the quiet gravitas
              that distinguishes professional broadcast narration from generic synthetic speech. Unlike
              general-purpose TTS tools optimized for UI voices or short-form copy, a documentary voice
              generator prioritizes the prosodic qualities that make narration credible, immersive, and
              cinematically appropriate.
            </p>
          </div>

          <div className="doc-intro-grid">
            <div className="doc-intro-copy">
              <p>
                Documentary narration occupies a unique position in human communication. It must be{' '}
                <strong>authoritative without being arrogant</strong>, engaging without being
                manipulative, informative without being academic. The great documentary narrators —
                David Attenborough, Werner Herzog, Morgan Freeman — achieved this through years of
                craft. In 2026, neural AI has learned to approximate this craft at scale.
              </p>
              <p>
                The global documentary market is undergoing a structural transformation. YouTube alone
                hosts over 2.4 billion monthly views on documentary content, much of it produced by
                independent creators with no broadcast budget. Spotify, Apple Podcasts, and Amazon
                Music actively commission and recommend audio documentary series. Netflix and Hulu
                purchase independent documentary pitches at record rates.
              </p>
              <p>
                In this environment, <strong>narration quality is no longer a luxury — it's a
                ranking signal</strong>. YouTube's algorithm correlates watch time with professional
                production quality. Podcast discovery algorithms surface content with higher completion
                rates. Professional narration drives both metrics. But hiring a professional narrator
                costs $200–$800 per hour, making it inaccessible for most independent creators.
              </p>
              <p>
                The <strong>Documentary AI Voice Generator</strong> on Scenith bridges this gap.
                The same neural TTS engine powering our{' '}
                <Link href="/tools/ai-voice-generation">full AI Voice Generator</Link> is configured
                here with the specific guidance, voice recommendations, and production workflows that
                documentary creators need to produce broadcast-quality narration from day one.
              </p>
            </div>

            <div className="doc-stat-list">
              {[
                { val: '2.4B', desc: 'Monthly views on documentary YouTube content (2026)' },
                { val: '340M', desc: 'Spotify audio documentary streams in Q1 2026' },
                { val: '$800', desc: 'Per-hour cost of a professional documentary narrator' },
                { val: '3 sec', desc: 'AI voice generation time per narration segment' },
                { val: '80%', desc: 'Cost reduction vs. human narration for independent films' },
                { val: '40+', desc: 'Professional AI voices available for documentary use' },
              ].map((s) => (
                <div key={s.val} className="doc-stat-row">
                  <div className="doc-stat-val">{s.val}</div>
                  <div className="doc-stat-desc">{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="doc-divider" />

      {/* ── Mid CTA 1 ── */}
      <div className="doc-container">
        <div className="doc-mid-cta">
          <div className="doc-mid-cta-text">
            <h3>Ready to produce your first documentary narration?</h3>
            <p>Free plan available. No card required. Professional AI voice in 3 seconds.</p>
          </div>
          <Link href={TOOL_URL} className="doc-cta-primary">
            Start Free <span className="doc-cta-arrow">→</span>
          </Link>
        </div>
      </div>

      {/* ────────────────────────────────────────
          DOCUMENTARY GENRE VOICE GUIDE
      ──────────────────────────────────────── */}
      <section className="doc-section" aria-labelledby="genres-h2">
        <div className="doc-container">
          <span className="doc-eyebrow">Genre Voice Guide</span>
          <h2 id="genres-h2">
            Every Documentary Genre Has a <em>Distinct Voice</em>. Here's How to Match Them.
          </h2>
          <p className="doc-section-lead">
            Documentary voice selection is not about picking a voice that sounds good in isolation.
            It's about picking the voice that serves the specific genre conventions your audience
            already associates with authority, credibility, and immersion.
          </p>

          <div className="doc-voice-types">
            {DOCUMENTARY_GENRES.map((g) => (
              <article key={g.title} className="doc-voice-type-card">
                <span className="doc-vt-icon">{g.icon}</span>
                <h3>{g.title}</h3>
                <p>{g.desc}</p>
                <span className="doc-vt-badge">{g.tag}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="doc-divider" />

      {/* ────────────────────────────────────────
          HOW TO PRODUCE DOCUMENTARY VOICE OVER
      ──────────────────────────────────────── */}
      <section className="doc-section" aria-labelledby="howto-h2">
        <div className="doc-container">
          <span className="doc-eyebrow">Production Workflow</span>
          <h2 id="howto-h2">
            How to Produce <em>Broadcast-Quality Documentary Narration</em> with AI: The 2026 Professional Workflow
          </h2>
          <p className="doc-section-lead">
            This isn't a basic tutorial. This is the exact production workflow used by independent
            documentary filmmakers, YouTube documentary channels, and corporate film producers
            who generate professional results consistently.
          </p>

          <div className="doc-steps">
            <article className="doc-step">
              <div className="doc-step-num" aria-label="Step 1">01</div>
              <div className="doc-step-body">
                <h3>Write Your Script in Documentary Grammar</h3>
                <p>
                  Documentary writing is a distinct craft. It is not journalism, not academic writing, not
                  conversational prose. It occupies its own register — authoritative but not cold, factual
                  but not dry, present but not intrusive.
                </p>
                <p>
                  The foundational rule: <strong>write for the edit, not the page</strong>. Every sentence
                  you write should be able to stand alone over a single visual. That means short, declarative
                  constructions with clear subjects and active verbs. "The glacier advances three meters
                  per day" works. "At a rate of approximately three meters per day, the glacier is believed
                  to be advancing" does not — both for production clarity and for AI delivery quality.
                </p>
                <p>
                  Use punctuation as your directing language. A period tells the AI to land with full weight
                  before moving on. A comma creates a breath — useful for listing visual elements simultaneously.
                  An em dash (—) creates a deliberate pause before a contrasting statement. These are not
                  stylistic suggestions; they directly shape the AI's prosodic output.
                </p>
                <div className="doc-step-callout">
                  <span className="ci">📋</span>
                  <div>
                    <strong>Professional rule:</strong> Read every sentence aloud before generating.
                    If you stumble, the AI will too. If it sounds flat to you at normal pace, it
                    will sound flat generated. Rewrite until every line has weight before it leaves your keyboard.
                  </div>
                </div>
              </div>
            </article>

            <article className="doc-step">
              <div className="doc-step-num" aria-label="Step 2">02</div>
              <div className="doc-step-body">
                <h3>Choose a Voice That Carries Authority, Not Just Volume</h3>
                <p>
                  The single biggest mistake documentary creators make when selecting AI voices is
                  choosing the one with the deepest pitch. Deep does not equal authoritative. Authority
                  comes from <strong>measured pacing + clear articulation + emotional restraint</strong>.
                  A mid-range voice delivered with the Professional preset at 120 WPM will out-perform
                  a maximally deep voice delivered at 150 WPM on documentary content every time.
                </p>
                <p>
                  Use the filter system to select by language first (match your documentary's geographic
                  context where possible — a British voice for a film set in colonial India adds implicit
                  authenticity), then by gender based on genre convention. Preview at least six voices
                  using a line from your actual script — not the built-in demo text. The way a voice
                  handles your specific words and sentence structures is what matters in production.
                </p>
                <div className="doc-step-callout">
                  <span className="ci">🎯</span>
                  <div>
                    <strong>Genre matching shortcut:</strong> For nature docs, try warm UK English
                    male voices. For true crime, US neutral female voices at calm preset. For
                    history docs, authoritative UK male voices. For science content, clear US neutral voices.
                  </div>
                </div>
              </div>
            </article>

            <article className="doc-step">
              <div className="doc-step-num" aria-label="Step 3">03</div>
              <div className="doc-step-body">
                <h3>Set the Emotion Preset for Your Documentary's Register</h3>
                <p>
                  Documentary narration requires a very specific emotional range: engaged but not
                  excitable, authoritative but not robotic, empathetic but not sentimental.
                  The <strong>Professional preset</strong> is the documentary standard — it applies
                  a slightly measured pace, full clarity, and controlled pitch variation that sounds
                  precisely like broadcast narration.
                </p>
                <p>
                  For true crime and horror documentaries, the <strong>Calm preset</strong> creates
                  that specific quality of voice-that-knows-something-you-don't — the slow,
                  deliberate narrator who makes even factual sentences feel ominous. For nature
                  documentaries during action sequences, consider briefly switching to{' '}
                  <strong>Default</strong> for more natural energy variation.
                </p>
                <p>
                  <strong>What never works for documentaries:</strong> Enthusiastic, Happy, or Sad
                  presets on factual narration. These create tonal incongruence that audiences
                  immediately recognize as amateurish. Documentary audiences are sophisticated; they
                  expect — and reward — restraint.
                </p>
                <div className="doc-step-callout">
                  <span className="ci">⚗️</span>
                  <div>
                    <strong>Advanced technique:</strong> Generate your most dramatic narration lines
                    using the Calm preset rather than the Professional preset. The contrast between
                    calm delivery and dramatic content creates a specific quality of dread that
                    professional documentary editors call "the freeze" — the moment viewers stop
                    scrolling.
                  </div>
                </div>
              </div>
            </article>

            <article className="doc-step">
              <div className="doc-step-num" aria-label="Step 4">04</div>
              <div className="doc-step-body">
                <h3>Generate in Scene Segments, Not Full Narration Blocks</h3>
                <p>
                  Professional documentary workflow generates narration in segments aligned with
                  individual visual sequences — not in monolithic blocks. This approach gives you
                  granular editing control: if a single sentence sounds tonally off against a
                  specific visual, you regenerate only that 15-second segment rather than a
                  3-minute narration pass.
                </p>
                <p>
                  Structure your generation workflow to mirror your edit timeline:
                </p>
                <ul style={{ listStyle: 'none', paddingLeft: 0, display: 'flex', flexDirection: 'column', gap: 7 }}>
                  {[
                    'ACT01 / OPEN: 2–4 sentences establishing the world (60–120 sec)',
                    'ACT01 / RISING: 3–6 sentences building tension or context',
                    'ACT01 / TURN: 1–2 sentences delivering the pivot — generate separately for tonal control',
                    'ACT02 onwards: continue scene-by-scene, regenerating individually',
                    'END NARRATION: generate separately — the closing line deserves its own attention',
                  ].map((item) => (
                    <li key={item} style={{ display: 'flex', gap: 10, fontSize: '0.875rem', color: 'var(--doc-text-muted)', lineHeight: 1.6 }}>
                      <span style={{ color: 'var(--doc-cyan)', flexShrink: 0 }}>→</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="doc-step-callout">
                  <span className="ci">📁</span>
                  <div>
                    <strong>Naming convention:</strong> Use descriptive filenames: <code style={{ color: 'var(--doc-cyan)', fontFamily: 'monospace', fontSize: '0.82em' }}>ep02-amazon-opening.mp3</code>,{' '}
                    <code style={{ color: 'var(--doc-cyan)', fontFamily: 'monospace', fontSize: '0.82em' }}>ep02-jaguar-hunt-narration.mp3</code>.
                    In a 6-part documentary series, clear naming prevents catastrophic file confusion during final assembly.
                  </div>
                </div>
              </div>
            </article>

            <article className="doc-step">
              <div className="doc-step-num" aria-label="Step 5">05</div>
              <div className="doc-step-body">
                <h3>Post-Process with the Documentary Audio Standard</h3>
                <p>
                  AI-generated narration audio is technically clean — no background noise, no mic
                  hiss, consistent levels. But professional documentary narration goes one step further
                  in the mix. Import into <strong>Adobe Audition, DaVinci Resolve Fairlight, or
                  Audacity</strong> and apply:
                </p>
                <ul style={{ listStyle: 'none', paddingLeft: 0, display: 'flex', flexDirection: 'column', gap: 7 }}>
                  {[
                    'EQ: gentle low-shelf boost at 120Hz (warmth), high-pass filter below 80Hz (removes mud), slight presence boost at 3–4kHz (clarity)',
                    'Compression: 3:1 ratio, -18dBFS threshold, 10ms attack, 80ms release — this evens out the variation between quiet and emphatic passages',
                    'Reverb: a very slight room reverb (0.3–0.6s decay, 8–12% wet) removes the slightly "processed" quality of raw TTS audio',
                    'Music bed: documentary narration lives in a mix — subtract 12–15dB from music under narration, not 6dB. Voice must dominate completely.',
                    'Normalize to -14 LUFS for streaming platforms; -23 LUFS for broadcast',
                  ].map((item) => (
                    <li key={item} style={{ display: 'flex', gap: 10, fontSize: '0.87rem', color: 'var(--doc-text-muted)', lineHeight: 1.65 }}>
                      <span style={{ color: 'var(--doc-cyan)', flexShrink: 0, marginTop: 3 }}>▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="doc-step-callout">
                  <span className="ci">🎚️</span>
                  <div>
                    <strong>The ambient sound bed technique:</strong> Layer a barely audible
                    environment recording (jungle ambience at -35dBFS, archive room room tone at
                    -40dBFS) under the narration track. The human ear processes this subconsciously.
                    It transforms AI narration from "voice in a void" to "voice in a world." Cost: free.
                    Impact: enormous.
                  </div>
                </div>
              </div>
            </article>

            <article className="doc-step">
              <div className="doc-step-num" aria-label="Step 6">06</div>
              <div className="doc-step-body">
                <h3>Build a Consistent Narrator Brand Across Your Series</h3>
                <p>
                  The most successful documentary channels — AI-narrated or otherwise — build their
                  audience around a recognizable voice. Listeners and viewers develop parasocial
                  relationships with consistent narrators. They return for the next episode partly
                  because they want to spend more time with that voice.
                </p>
                <p>
                  <strong>Save your exact voice configuration:</strong> voice model, language, emotion
                  preset, and speed setting. This exact configuration must be applied identically
                  across every episode of every series. Inconsistency is immediately perceptible to
                  regular viewers and breaks the relationship.
                </p>
                <p>
                  Consider creating distinct configurations for different contexts within your production:
                  your main narration voice, a slightly more intimate voice for personal anecdote segments,
                  and a more measured voice for statistical or legal information. This creates tonal
                  variety without introducing inconsistency — the same narrator delivering content in
                  slightly different registers, exactly as professional documentarians do.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <div className="doc-divider" />

      {/* ────────────────────────────────────────
          VOICE TABLE
      ──────────────────────────────────────── */}
      <section className="doc-section" aria-labelledby="voice-table-h2">
        <div className="doc-container">
          <span className="doc-eyebrow">Voice Configuration Reference</span>
          <h2 id="voice-table-h2">
            Documentary <em>Genre-to-Voice</em> Quick Reference: 2026 Edition
          </h2>
          <p className="doc-section-lead">
            Save this table. These configurations are validated against audience engagement data
            from Scenith's active documentary creator community.
          </p>

          <div className="doc-table-wrapper">
            <table className="doc-table">
              <thead>
                <tr>
                  <th scope="col">Documentary Genre</th>
                  <th scope="col">Recommended Voice Type</th>
                  <th scope="col">Emotion Preset</th>
                  <th scope="col">Ideal Pace</th>
                  <th scope="col">Accent</th>
                </tr>
              </thead>
              <tbody>
                {VOICE_TABLE_ROWS.map((row) => (
                  <tr key={row.genre}>
                    <td>{row.genre}</td>
                    <td><span className="doc-pill">🎤 {row.voice}</span></td>
                    <td>{row.preset}</td>
                    <td>{row.pace}</td>
                    <td>{row.accent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <div className="doc-divider" />

      {/* ────────────────────────────────────────
          SCRIPT LAB
      ──────────────────────────────────────── */}
      <section className="doc-section" aria-labelledby="scripts-h2">
        <div className="doc-container">
          <span className="doc-eyebrow">Script Lab</span>
          <h2 id="scripts-h2">
            <em>Real Documentary Scripts</em> Annotated for AI Narration
          </h2>
          <p className="doc-section-lead">
            Study these examples. The annotations reveal exactly why each sentence structure, word choice,
            and punctuation decision produces the specific AI narration quality the genre demands.
          </p>

          <div className="doc-scripts-grid">
            {SCRIPT_EXAMPLES.map((s) => (
              <article key={s.doctype} className="doc-script-card">
                <div className="doc-script-meta">
                  <span className="doc-script-doctype">{s.doctype}</span>
                  <span className="doc-script-genre-tag">{s.genre}</span>
                </div>
                <p className="doc-script-quote">"{s.quote}"</p>
                <p className="doc-script-note">
                  <strong>Production notes:</strong> {s.note}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="doc-divider" />

      {/* ── Mid CTA 2 ── */}
      <div className="doc-container">
        <div className="doc-mid-cta">
          <div className="doc-mid-cta-text">
            <h3>Your documentary has a story. Give it the voice it deserves.</h3>
            <p>Generate your first professional narration in under 30 seconds.</p>
          </div>
          <Link href={TOOL_URL} className="doc-cta-primary">
            Open AI Voice Generator <span className="doc-cta-arrow">→</span>
          </Link>
        </div>
      </div>

      {/* ────────────────────────────────────────
          NARRATION TECHNIQUES
      ──────────────────────────────────────── */}
      <section className="doc-section" aria-labelledby="techniques-h2">
        <div className="doc-container">
          <span className="doc-eyebrow">Advanced Technique</span>
          <h2 id="techniques-h2">
            Six <em>Documentary Narration Techniques</em> That Work Specifically with AI Voices
          </h2>
          <p className="doc-section-lead">
            AI narration responds differently to script structure than human narration. These techniques
            are calibrated for how neural TTS actually processes text — not how a human voice actor would.
          </p>

          <div className="doc-techniques-grid">
            {TECHNIQUES.map((t) => (
              <article key={t.num} className="doc-technique-card">
                <span className="doc-technique-num">{t.num}</span>
                <h3>{t.title}</h3>
                <p>{t.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="doc-divider" />

      {/* ────────────────────────────────────────
          DEEP DIVE: INDUSTRY SECTIONS
      ──────────────────────────────────────── */}
      <section className="doc-section" aria-labelledby="industry-h2">
        <div className="doc-container">
          <span className="doc-eyebrow">Industry Deep Dive</span>
          <h2 id="industry-h2">
            The <em>State of Documentary Narration</em> in 2026: What's Changed and Why AI Wins
          </h2>
          <p className="doc-section-lead">
            The economics of documentary production have shifted irreversibly. Understanding why
            positions you to capitalize on opportunities that didn't exist two years ago.
          </p>

          <div className="doc-longform">
            <div className="doc-longform-col">
              <h3>The Independent Documentary Explosion</h3>
              <p>
                In 2020, producing a documentary that reached more than 100,000 viewers required
                either broadcast network backing or a viral accident. In 2026, independent YouTube
                documentary channels routinely reach 1–5 million subscribers with no corporate
                infrastructure, no broadcast deal, and no physical production crew beyond a single
                laptop and a library card.
              </p>
              <p>
                The enabling technologies are well understood: democratized filming, AI video editing,
                stock footage libraries, and — critically — <strong>AI narration</strong>. The narration
                bottleneck was the last expensive, hard-to-replicate component of professional documentary
                production. A professional narrator costs $200–$800/hour plus studio fees, requires
                scheduling coordination, and cannot be revised without a new session booking.
              </p>
              <p>
                AI narration removed this bottleneck entirely. A documentary creator can now produce
                an episode from research to finished narration in a single day — something that previously
                required two weeks of coordination, booking, and budget approval. The channels that
                understood this first are now multiple hundreds of thousands of subscribers ahead of
                those who discovered it later.
              </p>
              <ul>
                <li>YouTube documentary niches with highest CPM: History ($12–$22), Science ($8–$18), True Crime ($6–$16), Nature ($5–$14)</li>
                <li>Average watch time for AI-narrated documentary content: 7.4 minutes per session</li>
                <li>Algorithm promotion threshold: videos with 50%+ completion rate receive accelerated promotion</li>
                <li>The channels in position 1–10 for most documentary keywords began publishing in 2021–2023</li>
              </ul>
            </div>
            <div className="doc-longform-col">
              <h3>The Multilingual Documentary Opportunity</h3>
              <p>
                The most significant untapped opportunity in documentary content in 2026 is not
                English-language content — it's everything else. The Spanish-speaking documentary
                audience across Latin America and Spain is enormous and dramatically underserved.
                The Hindi-speaking documentary audience in India is one of the fastest-growing
                internet demographics in the world. Mandarin, Indonesian, Portuguese, Arabic — each
                represents a documentary market with massive demand and minimal high-quality
                independent supply.
              </p>
              <p>
                <strong>The structural advantage for AI-native creators:</strong> producing a documentary
                in 3 languages simultaneously requires, with traditional production, three separate
                narrators, three separate recording sessions, three separate editing passes. With AI
                narration, it requires selecting three voice configurations and running three generation
                passes on the same translated script. The incremental cost is minimal. The audience
                multiplication is 3–5×.
              </p>
              <p>
                Scenith supports 20+ languages with native-sounding documentary voices. This means
                your India-focused nature documentary can be narrated in English for global audiences,
                Hindi for Indian audiences, and Tamil for South Indian audiences — all from the
                same script, on the same day, at the same per-minute quality.
              </p>
              <ul>
                <li>Hindi documentary YouTube audience: 420M+ potential viewers in India alone</li>
                <li>Spanish-language documentary: 500M+ Spanish speakers, minimal competition vs. English</li>
                <li>Indonesian: 270M population, fastest-growing YouTube market in Southeast Asia</li>
                <li>Portuguese (Brazilian): 210M+ potential listeners, Spotify podcast market exploding</li>
              </ul>
            </div>
          </div>

          <div className="doc-longform" style={{ marginTop: 40 }}>
            <div className="doc-longform-col">
              <h3>Why Documentary AI Narration Specifically Outperforms Other Content Formats</h3>
              <p>
                Documentary narration AI works better than AI voices applied to other content formats
                for two interconnected reasons: <strong>the genre conventions favor AI's strengths</strong>,
                and <strong>audience expectations create room for AI delivery</strong>.
              </p>
              <p>
                Documentary audiences are accustomed to narrators they cannot see. Unlike YouTube
                vlogs where authenticity depends on visible human presence, documentary narration
                is inherently disembodied — a voice of authority without a face. This means there is
                no human presence expectation for the AI to fail to meet. The audience expects
                a voice, and the AI delivers a voice. The transaction is complete.
              </p>
              <p>
                Additionally, documentary narration's prosodic requirements — <strong>measured, consistent,
                authoritative, restrained</strong> — align precisely with what neural TTS systems do well.
                TTS excels at consistent delivery, clear articulation, and controlled pacing.
                It is less strong on spontaneous improvisation, complex emotional transitions, and
                subtle character voice differentiation. Documentary narration demands the former and
                never asks for the latter.
              </p>
              <ul>
                <li>Documentary completion rate: 65–80% on YouTube vs. 45–55% for other long-form formats</li>
                <li>Documentary CPM is 2–4× higher than general entertainment content</li>
                <li>Documentary subscribers have lower churn and higher engagement per session</li>
                <li>Documentary format has strong SEO: educational + informational content ranks well on Google</li>
              </ul>
            </div>
            <div className="doc-longform-col">
              <h3>AI vs. Human Narration: The Honest Documentary Assessment for 2026</h3>
              <p>
                The question documentary creators ask most often is not "can AI narration work?" —
                evidence from thousands of successful channels has settled that question. The question
                is: "when does AI narration fall short, and what do I do about it?"
              </p>
              <p>
                <strong>AI documentary narration still has limitations:</strong> Complex emotional
                transitions within a single passage — rising from sadness to hope to determination —
                require separate generation passes and careful editing. Character-specific voices
                in documentary interviews require manual matching. Very long passages (10+ minutes)
                may develop subtle repetitive prosodic patterns that an editor's ear will notice.
              </p>
              <p>
                <strong>The professional 2026 solution:</strong> treat AI narration as a primary
                production tool, not a replacement for craft. The craft is now in the writing,
                the segment architecture, the emotion preset selection, and the post-production mix.
                A documentary with excellent writing, well-chosen voice configurations, and
                professional audio post-production will consistently outperform a documentary with
                mediocre writing and a $2,000 human narration session.
              </p>
              <p>
                The voice actor's job has changed. They are now hired for the 20% of documentary
                content that genuinely requires human emotional range — not the 80% that requires
                authoritative information delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="doc-divider" />

      {/* ────────────────────────────────────────
          AI VS HUMAN NARRATION COMPARISON
      ──────────────────────────────────────── */}
      <section className="doc-section" aria-labelledby="compare-h2">
        <div className="doc-container">
          <span className="doc-eyebrow">Honest Comparison</span>
          <h2 id="compare-h2">
            Documentary AI Narration vs. Professional Voice Actor: <em>Complete 2026 Breakdown</em>
          </h2>

          <div className="doc-compare-cols">
            <div className="doc-compare-col ai">
              <h3>🤖 AI Narration (Scenith)</h3>
              <ul className="doc-compare-list">
                <li><span className="ok">✓</span> 3-second generation per segment</li>
                <li><span className="ok">✓</span> Consistent quality across 100 episodes</li>
                <li><span className="ok">✓</span> $0 per additional language version</li>
                <li><span className="ok">✓</span> 40+ voice options without booking</li>
                <li><span className="ok">✓</span> Instant revisions — edit text, regenerate</li>
                <li><span className="ok">✓</span> Available at 2am on deadline night</li>
                <li><span className="ok">✓</span> Full commercial rights on all plans</li>
                <li><span className="ok">✓</span> 20+ languages from single platform</li>
                <li><span className="maybe">~</span> Emotional range growing — not fully human yet</li>
                <li><span className="maybe">~</span> Very complex 10+ min passages need segment planning</li>
                <li><span className="no">✗</span> Cannot improvise or respond to director in-session</li>
                <li><span className="no">✗</span> No unique signature voice ownership (yet)</li>
              </ul>
            </div>
            <div className="doc-compare-col human">
              <h3>🎙️ Professional Voice Actor</h3>
              <ul className="doc-compare-list">
                <li><span className="ok">✓</span> Full human emotional spectrum</li>
                <li><span className="ok">✓</span> Can improvise and take direction in real-time</li>
                <li><span className="ok">✓</span> Unique, ownable voice identity</li>
                <li><span className="ok">✓</span> Handles 60-minute passages naturally</li>
                <li><span className="no">✗</span> $200–$800/hour + studio fees</li>
                <li><span className="no">✗</span> Weeks of scheduling and delivery coordination</li>
                <li><span className="no">✗</span> Re-recording fees for any script revision</li>
                <li><span className="no">✗</span> One voice = one language only</li>
                <li><span className="no">✗</span> Quality varies with talent health and environment</li>
                <li><span className="no">✗</span> Unavailable at 2am before a deadline</li>
                <li><span className="no">✗</span> Licensing negotiation for commercial use</li>
                <li><span className="no">✗</span> Not scalable for high-volume publishing</li>
              </ul>
            </div>
          </div>

          <div style={{ marginTop: 24, padding: '18px 22px', background: 'var(--doc-surface)', border: '1px solid var(--doc-border)', borderRadius: 'var(--doc-radius-sm)' }}>
            <p style={{ fontSize: '0.88rem', color: 'var(--doc-text-muted)', lineHeight: 1.78 }}>
              <strong style={{ color: 'var(--doc-text)' }}>The 2026 industry consensus:</strong>{' '}
              For independent documentary production, YouTube channels, corporate films, audio
              documentaries, and educational content — AI narration is the professional-standard choice.
              Hire human voice talent selectively for flagship theatrical releases, high-stakes broadcast
              pitches, and personal narrative films where authentic emotional range is the product,
              not a component.
            </p>
          </div>
        </div>
      </section>

      <div className="doc-divider" />

      {/* ────────────────────────────────────────
          PLATFORMS & MONETIZATION
      ──────────────────────────────────────── */}
      <section className="doc-section" aria-labelledby="platforms-h2">
        <div className="doc-container">
          <span className="doc-eyebrow">Distribution & Monetization</span>
          <h2 id="platforms-h2">
            Where to Publish Your AI-Narrated Documentary — <em>And How to Monetize It</em>
          </h2>
          <p className="doc-section-lead">
            Distribution strategy shapes everything: optimal length, narration register, voice selection,
            and revenue model. Here's the complete 2026 platform-by-platform breakdown.
          </p>

          <div className="doc-platforms-grid">
            {PLATFORMS.map((p) => (
              <article key={p.name} className="doc-platform-card">
                <span className="doc-platform-icon">{p.icon}</span>
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
                <div className="doc-platform-stats">
                  {p.stats.map((s) => (
                    <span key={s} className="doc-platform-stat">{s}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="doc-divider" />

      {/* ────────────────────────────────────────
          TESTIMONIALS
      ──────────────────────────────────────── */}
      <section className="doc-section" aria-labelledby="testimonials-h2">
        <div className="doc-container">
          <span className="doc-eyebrow">Creator Stories</span>
          <h2 id="testimonials-h2">
            Real Documentary Creators. <em>Real Results.</em>
          </h2>

          <div className="doc-testimonials-grid">
            {TESTIMONIALS.map((t) => (
              <blockquote key={t.name} className="doc-testimonial">
                <div className="doc-testimonial-stars">★★★★★</div>
                <p className="doc-testimonial-text">{t.text}</p>
                <div className="doc-testimonial-author">
                  <div className="doc-author-avatar" aria-hidden="true">{t.avatar}</div>
                  <div>
                    <div className="doc-author-name">{t.name}</div>
                    <div className="doc-author-role">{t.role}</div>
                  </div>
                </div>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <div className="doc-divider" />

      {/* ────────────────────────────────────────
          FAQ
      ──────────────────────────────────────── */}
      <section className="doc-section" aria-labelledby="faq-h2">
        <div className="doc-container">
          <span className="doc-eyebrow">Frequently Asked Questions</span>
          <h2 id="faq-h2">
            Documentary AI Voice: <em>Every Question Answered</em>
          </h2>

          <div className="doc-faq-list">
            {[
              {
                q: 'Can AI voices be used for professional documentaries?',
                a: 'Yes — and the industry has crossed the threshold where this question is asked less and less. Neural AI voices in 2026 produce broadcast-quality narration for nature, history, science, investigative, and corporate documentaries. The major streaming platforms evaluate content quality holistically; AI narration is fully accepted when the overall production value, writing quality, and sound design are professional. Thousands of successful documentary channels operate on this basis.',
              },
              {
                q: 'What makes documentary AI narration different from standard TTS?',
                a: 'Standard TTS is optimized for UI voices, notifications, and short-form copy — clarity over character. Documentary AI narration requires measured pacing (100–140 WPM vs. standard 150–175 WPM), authoritative prosody (lower pitch variation, more emphasis on key nouns), emotional restraint (professional or calm presets rather than default), and the specific quality of gravitas that listeners associate with factual authority. Selecting the right voice + emotion preset combination is the technical skill that separates professional documentary audio from amateur TTS output.',
              },
              {
                q: 'How do I match an AI narrator voice to my documentary\'s subject matter?',
                a: 'Match accent to historical or geographic context (British for colonial-era history, neutral American for contemporary US subjects). Match gender to genre convention or deliberately subvert it (a female narrator for typically male-narrated subjects creates immediate differentiation). Match pitch to emotional register (deeper voices for weighty subjects, clearer mid-range voices for science content where precision matters more than gravitas). Always preview using your actual script, not generic demo text — the way a voice handles your specific sentence constructions is what matters in production.',
              },
              {
                q: 'Can I monetize AI-narrated documentaries on YouTube?',
                a: "Yes. YouTube's monetization policies do not restrict AI narration. What YouTube evaluates is the originality and value of the overall content: unique footage, original research, genuine editorial perspective, and genuine value for viewers. A documentary with 40 minutes of original research, unique visuals, and AI narration passes every monetization criterion. Many channels earning $5,000–$50,000/month in YouTube ad revenue use AI narration exclusively.",
              },
              {
                q: 'How many languages can I produce my documentary in simultaneously?',
                a: "Scenith supports 20+ languages for documentary narration. With a translated script and appropriate voice selection, you can generate a Hindi, Spanish, French, German, Mandarin, or Arabic narration version in the same session as your English version. The incremental time cost is minimal; the audience expansion is multiplicative. For high-opportunity markets like India (Hindi, Tamil, Telugu, Kannada), Brazil (Portuguese), and Indonesia (Bahasa Indonesia), this parallel language strategy provides first-mover advantage in markets with dramatically less competition than English-language documentary content.",
              },
              {
                q: 'What is the ideal character count per narration segment for documentary work?',
                a: "300–600 characters per segment is the professional documentary standard. This corresponds to approximately 30–60 seconds of narration at documentary pacing — roughly one visual sequence. Shorter segments give you finer editorial control. Longer segments risk losing tonal coherence if the passage moves through multiple emotional registers. For dialogue-heavy investigative content, even shorter segments (150–250 characters per quote block) allow more precise timing against archived interview footage.",
              },
              {
                q: 'Does AI narration work for non-English documentary content?',
                a: "Yes, and arguably better than English in some respects. Non-English documentary markets are significantly less saturated, meaning AI-narrated content faces less competition. Scenith's neural voices for Hindi, Spanish, Portuguese (Brazilian), Mandarin, French, German, Arabic, and Japanese are trained on native speech corpora — they produce authentic regional accents and intonation patterns, not phonetically-translated English voices. For markets like India, Indonesia, and Brazil, native-language AI documentary narration is a genuine category-creation opportunity.",
              },
              {
                q: 'What audio processing should I apply to AI documentary narration?',
                a: "Apply: (1) EQ — gentle bass boost at 120Hz for warmth, high-pass below 80Hz, slight presence at 3–4kHz for clarity. (2) Compression — 3:1 ratio at -18dBFS for even dynamics. (3) Subtle room reverb (8–12% wet, 0.3–0.6s decay) to remove the TTS 'void' quality. (4) Music bed mixing — subtract 12–15dB from music under narration (not 6dB). (5) Normalize to -14 LUFS for streaming. These five steps take 20 minutes in Audacity and transform professional-but-processed AI audio into indistinguishable broadcast narration.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="doc-faq-item">
                <h3 className="doc-faq-q">{q}</h3>
                <p className="doc-faq-a">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="doc-divider" />

      {/* ────────────────────────────────────────
          RELATED TOOLS
      ──────────────────────────────────────── */}
      <section className="doc-section" aria-labelledby="related-h2" style={{ paddingBottom: 40 }}>
        <div className="doc-container">
          <span className="doc-eyebrow">Complete Your Workflow</span>
          <h2 id="related-h2">
            More <em>Scenith Tools</em> for Documentary Creators
          </h2>
          <div className="doc-related-grid">
            {[
              {
                icon: '🎙️',
                name: 'AI Voice Generator (Full Tool)',
                desc: 'All 40+ voices, all emotion presets, OpenAI and Azure models, speed control, history. The full production suite.',
                href: TOOL_URL,
                cta: 'Open Full Tool →',
              },
              {
                icon: '🖼️',
                name: 'AI Image Generator',
                desc: 'Generate documentary thumbnails, historical recreations, and scene illustrations for your documentary.',
                href: 'https://scenith.in/tools/ai-image-generation',
                cta: 'Generate Images →',
              },
              {
                icon: '📄',
                name: 'PDF Tools',
                desc: 'Manage your research, scripts, and documentary treatment documents professionally.',
                href: 'https://scenith.in/tools/pdf-tools',
                cta: 'Open PDF Tools →',
              },
            ].map((tool) => (
              <Link
                key={tool.name}
                href={tool.href}
                className="doc-related-tool-card"
                >
                <span style={{ fontSize: '1.6rem', marginBottom: 10 }}>{tool.icon}</span>
                <span style={{ fontFamily: 'var(--doc-font-display)', fontWeight: 700, color: '#fff', fontSize: '0.975rem', marginBottom: 7 }}>
                  {tool.name}
                </span>
                <span style={{ fontSize: '0.83rem', color: 'var(--doc-text-muted)', lineHeight: 1.65, marginBottom: 14, flex: 1 }}>
                  {tool.desc}
                </span>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--doc-cyan)' }}>
                  {tool.cta}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────
          BOTTOM CTA
      ──────────────────────────────────────── */}
      <section className="doc-bottom-cta" aria-labelledby="bottom-cta-h2">
        <div className="doc-bottom-cta-bg" aria-hidden="true" />
        <div className="doc-container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 id="bottom-cta-h2">
            Your Documentary Deserves a Voice That <em>Commands the Room.</em>
          </h2>
          <p>
            Professional narration no longer costs professional narration fees. Generate broadcast-quality
            documentary voice over in under 30 seconds — and ship the documentary you've been
            putting off because of budget.
          </p>
          <Link href={TOOL_URL} className="doc-cta-primary" style={{ display: 'inline-flex' }}>
            🎙️ Generate Documentary Narration — Free
            <span className="doc-cta-arrow">→</span>
          </Link>
          <div className="doc-bottom-features">
            <span>🆓 Free plan available</span>
            <span>⚡ 3-second generation</span>
            <span>📥 Instant MP3 download</span>
            <span>🌍 20+ languages</span>
            <span>🎙️ 40+ professional voices</span>
            <span>💼 Commercial use included</span>
          </div>
        </div>
      </section>

      <div className="doc-divider" />

      {/* ── Footer Note ── */}
      <div className="doc-footer-note">
        <div className="doc-container">
          <p>
            Documentary AI Voice Generator is powered by{' '}
            <Link href="https://scenith.in">Scenith</Link> — AI creative tools for filmmakers,
            journalists, and content creators.{' '}
            <Link href="/tools/ai-voice-generation">Full AI Voice Generator</Link> ·{' '}
            <Link href="/pricing">Pricing</Link> ·{' '}
            <Link href="/tools">All Tools</Link> ·{' '}
            <Link href="/tools/story-ai-voice-generator">Story Voice Generator</Link>
          </p>
        </div>
      </div>
    </div>
  );
}