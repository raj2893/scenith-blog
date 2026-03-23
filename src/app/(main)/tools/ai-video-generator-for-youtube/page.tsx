import type { Metadata } from 'next';
import '../../../../../styles/tools/ai-video-generator-for-youtube.css';

/* ─────────────────────────────────────────────
   META / SEO
───────────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'AI Video Generator for YouTube — Free Text to Video for YouTube Channels (2026)',
  description:
    'Create stunning AI-generated videos for your YouTube channel in seconds. Text to video, image to video, cinematic AI footage for faceless channels, shorts, and long-form content. Free to start — no camera needed.',
  keywords: [
    'ai video generator for youtube',
    'youtube ai video maker',
    'text to video for youtube',
    'ai video for youtube channel',
    'faceless youtube channel ai video',
    'youtube shorts ai video generator',
    'free ai video generator youtube',
    'ai generated youtube videos',
    'youtube automation ai video',
    'ai video maker for content creators',
    'text to video youtube 2026',
    'ai cinematic video generator',
    'youtube video generator ai free',
    'image to video youtube',
    'ai video for monetization youtube',
  ].join(', '),
  alternates: {
    canonical: 'https://scenith.in/tools/ai-video-generator-for-youtube',
  },
  openGraph: {
    title: 'AI Video Generator for YouTube — Scenith',
    description:
      'Turn any script or image into cinematic AI video for your YouTube channel. 5+ models, 1080p, faceless channel ready. Free to start.',
    url: 'https://scenith.in/tools/ai-video-generator-for-youtube',
    siteName: 'Scenith',
    type: 'website',
    images: [
      {
        url: 'https://scenith.in/images/AIVoiceGenerationSS.png',
        width: 1200,
        height: 630,
        alt: 'AI Video Generator for YouTube by Scenith',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free AI Video Generator for YouTube Channels (2026)',
    description:
      'Generate cinematic AI videos for YouTube in seconds. Faceless channel ready, 1080p, text to video.',
    images: ['https://scenith.in/images/AIVoiceGenerationSS.png'],
  },
};

/* ─────────────────────────────────────────────
   STRUCTURED DATA
───────────────────────────────────────────── */
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://scenith.in/tools/ai-video-generator-for-youtube#webpage',
      url: 'https://scenith.in/tools/ai-video-generator-for-youtube',
      name: 'AI Video Generator for YouTube',
      description:
        'Free AI text-to-video and image-to-video tool built for YouTube creators. Supports faceless channels, Shorts, long-form, and YouTube automation pipelines.',
      inLanguage: 'en-US',
      breadcrumb: { '@id': 'https://scenith.in/tools/ai-video-generator-for-youtube#breadcrumb' },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://scenith.in/tools/ai-video-generator-for-youtube#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://scenith.in' },
        { '@type': 'ListItem', position: 2, name: 'Tools', item: 'https://scenith.in/tools' },
        { '@type': 'ListItem', position: 3, name: 'AI Video Generator for YouTube', item: 'https://scenith.in/tools/ai-video-generator-for-youtube' },
      ],
    },
    {
      '@type': 'SoftwareApplication',
      name: 'Scenith AI Video Generator for YouTube',
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Web Browser',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      featureList: [
        'Text to video for YouTube',
        'Image to video for YouTube',
        'Faceless YouTube channel support',
        'YouTube Shorts generation',
        '1080p cinematic output',
        'Multiple AI models (Wan 2.5, Kling 2.6, Veo 3.1)',
        'Instant MP4 download',
        'Commercial use included',
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Can I use AI-generated videos on YouTube and monetise them?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Yes. YouTube's policies allow AI-generated video content on monetised channels, provided the content is original and meets YouTube Partner Programme requirements. Add your own commentary, unique editing, or original narration to satisfy YouTube's originality standards.",
          },
        },
        {
          '@type': 'Question',
          name: 'What is the best AI video generator for YouTube in 2026?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Scenith AI Video Generator supports multiple state-of-the-art models including Wan 2.5, Kling 2.6 Pro, and Veo 3.1, delivering 1080p cinematic video from text prompts or images. It is one of the most capable and accessible options for YouTube creators in 2026.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I make a faceless YouTube channel with AI video?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Write your video script, generate AI video footage using a text-to-video tool like Scenith, add AI voiceover narration, layer on captions, and export. This full pipeline requires no camera, no on-screen presence, and can be completed in under 30 minutes per video.',
          },
        },
        {
          '@type': 'Question',
          name: 'What aspect ratio should I use for YouTube?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Use 16:9 for standard YouTube videos (landscape). Use 9:16 for YouTube Shorts (portrait). Use 1:1 for square thumbnails or community posts. Scenith supports all three aspect ratios.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does AI video generation take for YouTube content?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Generation takes 30 to 120 seconds per clip depending on the model and duration. A 5-second clip with Wan 2.5 typically completes in 30 to 45 seconds. A 10-second 1080p clip with Veo 3.1 may take up to 2 minutes.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can AI video generators make YouTube Shorts?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Yes. Select the 9:16 aspect ratio to generate portrait-format video optimised for YouTube Shorts. Combine with AI voiceover and auto-captions for a complete Shorts production pipeline.",
          },
        },
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Create AI Videos for YouTube',
      totalTime: 'PT10M',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Write your video concept', text: 'Describe the visual scene you want in your YouTube video — be specific about style, motion, lighting, and mood.' },
        { '@type': 'HowToStep', position: 2, name: 'Choose model and aspect ratio', text: 'Select 16:9 for standard YouTube or 9:16 for Shorts. Pick your AI model based on quality and budget.' },
        { '@type': 'HowToStep', position: 3, name: 'Generate and download MP4', text: 'Click Generate. Download your 1080p MP4 clip and import it into your video editor for final production.' },
      ],
    },
  ],
};

/* ─────────────────────────────────────────────
   STATIC DATA
───────────────────────────────────────────── */
const AI_MODELS = [
  {
    id: 'wan2.5',
    name: 'Wan 2.5',
    res: '480p',
    credits: 46,
    badge: 'Best Value',
    badgeColor: '#10B981',
    desc: 'Fast and affordable. Great for high-volume faceless channels and Shorts content.',
    bestFor: 'Budget creators, high-volume publishing',
    icon: '⚡',
  },
  {
    id: 'kling-v2.5-turbo',
    name: 'Kling 2.5 Turbo',
    res: '1080p',
    credits: 64,
    badge: 'Popular',
    badgeColor: '#6366F1',
    desc: 'Full HD output with cinematic motion. Ideal for tutorial and explainer content.',
    bestFor: 'Tutorial channels, explainers, reviews',
    icon: '🎬',
  },
  {
    id: 'kling-v2.6-pro',
    name: 'Kling 2.6 Pro',
    res: '1080p',
    credits: 64,
    badge: 'Recommended',
    badgeColor: '#F59E0B',
    desc: 'Enhanced realism and motion coherence. Perfect for lifestyle and narrative YouTube content.',
    bestFor: 'Lifestyle, storytelling, brand channels',
    icon: '🌟',
  },
  {
    id: 'veo3.1-fast',
    name: 'Veo 3.1 Fast',
    res: '1080p',
    credits: 92,
    badge: 'High Quality',
    badgeColor: '#8B5CF6',
    desc: "Google's Veo architecture at fast speed. Exceptional scene understanding and visual fidelity.",
    bestFor: 'Documentary, cinematic, premium channels',
    icon: '🎯',
  },
  {
    id: 'veo3.1',
    name: 'Veo 3.1',
    res: '1080p',
    credits: 186,
    badge: 'Flagship',
    badgeColor: '#EC4899',
    desc: 'The highest quality model. Unmatched photorealism for flagship YouTube productions.',
    bestFor: 'Premium channels, brand campaigns, showreels',
    icon: '👑',
  },
];

const YOUTUBE_NICHES = [
  {
    niche: 'Finance & Investing',
    icon: '💰',
    views: '4.2B views/mo on YouTube Finance',
    aiVideoUse: 'Stock market visualisations, data animations, chart explainers, global economy b-roll',
    topFormats: ['Market crash explainers', 'Investing for beginners', 'Stock analysis b-roll'],
    promptExample: 'Cinematic aerial view of Wall Street financial district at golden hour, 4K, dramatic lighting',
    modelRec: 'Kling 2.6 Pro',
    aspectRec: '16:9',
  },
  {
    niche: 'Educational / Explainer',
    icon: '🎓',
    views: '6.1B views/mo on #education',
    aiVideoUse: 'Scientific visualisations, historical scene recreation, abstract concept animation',
    topFormats: ['How does X work?', 'History of Y', 'Science explained in 60 seconds'],
    promptExample: 'Microscopic view of DNA double helix rotating in blue light, scientific, cinematic, 4K',
    modelRec: 'Veo 3.1 Fast',
    aspectRec: '16:9',
  },
  {
    niche: 'Motivation & Mindset',
    icon: '🔥',
    views: '2.8B views/mo on #motivation',
    aiVideoUse: 'Inspiring nature footage, athlete training sequences, sunrise time-lapses, epic landscapes',
    topFormats: ['David Goggins-style narration', 'Morning routine overlays', 'Discipline speeches'],
    promptExample: 'Lone figure standing on mountain summit at sunrise, dramatic clouds, cinematic slow motion',
    modelRec: 'Kling 2.5 Turbo',
    aspectRec: '16:9',
  },
  {
    niche: 'Tech & AI News',
    icon: '🤖',
    views: '3.5B views/mo on #technology',
    aiVideoUse: 'Futuristic lab visualisations, AI neural network animations, robot and tech b-roll',
    topFormats: ['This AI changed everything', 'Top 5 tech tools this week', 'AI vs human tests'],
    promptExample: 'Glowing neural network nodes connecting in dark space, blue and purple, 4K cinematic',
    modelRec: 'Veo 3.1',
    aspectRec: '16:9',
  },
  {
    niche: 'Travel & Lifestyle',
    icon: '✈️',
    views: '5.0B views/mo on #travel',
    aiVideoUse: 'Destination b-roll, aerial cityscapes, exotic nature, cultural montages',
    topFormats: ['Hidden gems in X', 'Budget travel guides', 'Day in the life in Y city'],
    promptExample: 'Aerial drone shot over tropical island turquoise water, golden hour, cinematic 4K',
    modelRec: 'Kling 2.6 Pro',
    aspectRec: '16:9',
  },
  {
    niche: 'YouTube Shorts',
    icon: '📱',
    views: '70B daily views on Shorts',
    aiVideoUse: 'Short punchy visual hooks, abstract transitions, quick product reveals, viral moments',
    topFormats: ['5 facts in 60 seconds', 'Before/After reveals', 'Satisfying process videos'],
    promptExample: 'Colourful paint explosion in slow motion, abstract art, vibrant colours, 9:16 vertical',
    modelRec: 'Wan 2.5',
    aspectRec: '9:16',
  },
];

const PROMPT_FORMULAS = [
  {
    name: 'The Cinematic Opener',
    formula: '[Subject] + [Action] + [Environment] + [Lighting] + [Camera style] + [Quality descriptor]',
    example: 'A lone astronaut walking across a red Martian surface, massive storm approaching in background, dramatic sunset lighting, slow cinematic dolly shot, 4K photorealistic',
    useCase: 'Channel intro sequences, video hooks, dramatic b-roll',
  },
  {
    name: 'The Nature Epic',
    formula: '[Aerial/wide shot] + [Natural subject] + [Time-of-day] + [Atmospheric conditions] + [Cinematic style]',
    example: 'Aerial shot of ancient redwood forest canopy at dawn, golden mist rolling through trees, birds in flight, cinematic drone footage, National Geographic style',
    useCase: 'Motivation channels, documentary intros, travel content',
  },
  {
    name: 'The Science Visualiser',
    formula: '[Scale descriptor] + [Scientific subject] + [Visual style] + [Colour palette] + [Motion type]',
    example: 'Microscopic close-up of water molecules forming ice crystals, blue and white colour palette, slow motion crystallisation process, scientific documentary style',
    useCase: 'Educational channels, science explainers, tech content',
  },
  {
    name: 'The Urban Cinematic',
    formula: '[City setting] + [Time of day] + [Human element] + [Camera movement] + [Mood descriptor]',
    example: 'Busy Tokyo intersection at night, neon reflections on wet pavement, crowds moving in time-lapse, overhead slow-motion camera pull, cyberpunk atmospheric mood',
    useCase: 'Lifestyle, finance, tech, vlog intros',
  },
  {
    name: 'The Abstract Hook',
    formula: '[Abstract visual] + [Motion descriptor] + [Colour scheme] + [Duration hint] + [Mood]',
    example: 'Flowing liquid metal morphing into geometric shapes, silver and gold colour scheme, seamless looping motion, hypnotic and satisfying',
    useCase: 'YouTube Shorts, transition clips, channel idents',
  },
  {
    name: 'The Product Reveal',
    formula: '[Product/object] + [Reveal motion] + [Setting] + [Lighting setup] + [Quality level]',
    example: 'Sleek black smartphone rising from dark surface, dramatic studio lighting, smoke particles around it, luxury product reveal, 4K ultra HD',
    useCase: 'Tech review channels, product launches, brand content',
  },
];

const ALGORITHM_FACTS = [
  {
    stat: '40%',
    label: 'Higher CTR',
    detail: 'YouTube videos with cinematic, high-quality thumbnails and b-roll footage see up to 40% higher click-through rates vs static image backgrounds.',
  },
  {
    stat: '2.3x',
    label: 'Watch Time Boost',
    detail: 'Channels that use dynamic visual b-roll instead of static talking heads retain viewers 2.3x longer on average — directly improving algorithm push.',
  },
  {
    stat: '68%',
    label: 'of Shorts use AI',
    detail: '68% of the fastest-growing faceless YouTube Shorts channels in 2025–2026 use AI-generated footage as their primary visual content source.',
  },
  {
    stat: '15 min',
    label: 'Per video saved',
    detail: 'AI video generation cuts average b-roll sourcing time from 45 minutes (stock sites, licensing) to under 15 minutes — including generation time.',
  },
  {
    stat: '$0',
    label: 'Licensing fees',
    detail: 'Every AI-generated video comes with full commercial rights. No stock library subscriptions, no per-clip licensing fees, no attribution requirements.',
  },
  {
    stat: '5 models',
    label: 'Available now',
    detail: 'Scenith offers 5 state-of-the-art video models ranging from Wan 2.5 (fast & affordable) to Veo 3.1 (flagship cinematic quality) — all in one platform.',
  },
];

const FACELESS_PIPELINE = [
  {
    step: '01',
    title: 'Write Your Script',
    tool: 'ChatGPT / Claude / Gemini',
    detail: 'Use any AI writing tool to generate a 300–800 word YouTube script. Structure: hook (0–15s), main content (body), call to action (last 20s).',
    time: '5 min',
    icon: '✍️',
  },
  {
    step: '02',
    title: 'Generate AI Video Footage',
    tool: 'Scenith AI Video Generator',
    detail: 'Break your script into 4–8 visual scenes. Generate one AI video clip per scene using matching prompts. Download all MP4 clips.',
    time: '10 min',
    icon: '🎬',
  },
  {
    step: '03',
    title: 'Add AI Voiceover',
    tool: 'Scenith AI Voice Generator',
    detail: 'Paste your script into Scenith Voice. Select a voice that matches your channel tone (authoritative for finance, warm for lifestyle). Download MP3.',
    time: '3 min',
    icon: '🎙️',
  },
  {
    step: '04',
    title: 'Edit & Assemble',
    tool: 'CapCut / DaVinci Resolve / Premiere',
    detail: 'Import AI video clips and voiceover. Sync audio to visuals. Add background music at -18 dB. Add auto-captions for accessibility. Add intro/outro.',
    time: '15 min',
    icon: '✂️',
  },
  {
    step: '05',
    title: 'Generate Thumbnail',
    tool: 'Scenith AI Image Generator',
    detail: 'Create a click-worthy thumbnail using AI image generation. Use high contrast, bold text overlay, and a clear visual focal point.',
    time: '5 min',
    icon: '🖼️',
  },
  {
    step: '06',
    title: 'Upload & Optimise',
    tool: 'YouTube Studio',
    detail: 'Upload MP4. Write SEO title (include target keyword in first 60 chars). Add keyword-rich description. Tag with 5–8 relevant terms. Set category.',
    time: '7 min',
    icon: '📤',
  },
];

const MONETISATION_GUIDE = [
  {
    method: 'YouTube Partner Programme (YPP)',
    icon: '💵',
    requirement: '1,000 subscribers + 4,000 watch hours (or 10M Shorts views)',
    aiAdvantage: 'AI video lets you publish 5–7x more content, reaching YPP thresholds 3–5x faster than manual production schedules.',
    earnings: '$3 – $8 RPM average',
    timeline: '3 – 9 months with consistent AI-assisted publishing',
  },
  {
    method: 'YouTube Shorts Fund / Shorts Revenue',
    icon: '📱',
    requirement: '1,000 subscribers + 10M Shorts views in 90 days',
    aiAdvantage: 'AI video generation makes publishing 2–3 Shorts per day trivially achievable. Most manual creators cannot sustain this volume.',
    earnings: '$0.03 – $0.07 per 1,000 Shorts views',
    timeline: '1 – 4 months with daily AI Shorts publishing',
  },
  {
    method: 'Affiliate Marketing',
    icon: '🔗',
    requirement: 'No subscriber minimum — start day 1',
    aiAdvantage: 'AI video allows rapid production of product comparison, review, and tutorial content that naturally embeds affiliate links.',
    earnings: '$5 – $200+ per conversion',
    timeline: 'Revenue from first video if content matches buyer intent',
  },
  {
    method: 'Sponsorships & Brand Deals',
    icon: '🤝',
    requirement: 'Usually 10,000+ subscribers, niche authority',
    aiAdvantage: 'Consistent high-quality AI video builds perceived production value, making channels appear larger and more professional than their subscriber count suggests.',
    earnings: '$500 – $50,000+ per deal',
    timeline: '6 – 18 months with strong niche positioning',
  },
];

const SEO_TIPS_YOUTUBE = [
  {
    tip: 'Keyword-first title structure',
    detail: 'Put your primary keyword in the first 40 characters of your title. YouTube displays ~60 characters in search results. Example: "AI Video Generator: How I Make 7 Videos a Week Without a Camera"',
    impact: 'High',
  },
  {
    tip: 'Description with timestamps and keywords',
    detail: 'Write a 200+ word description. Include your primary keyword in the first sentence. Add timestamps (chapters) — they appear as rich results in Google search and significantly boost CTR from organic search.',
    impact: 'Very High',
  },
  {
    tip: 'Custom thumbnail with 40%+ face/focal point',
    detail: 'AI-generated thumbnails with a strong visual focal point (face, bold text, single clear subject) dramatically outperform text-only thumbnails. Target 40%+ of the frame for the primary subject.',
    impact: 'Very High',
  },
  {
    tip: 'Hook retention in first 30 seconds',
    detail: 'YouTube algorithm heavily weights average view duration. Opening with your AI-generated most visually compelling footage (not a logo intro) can improve 30-second retention by 20–35%.',
    impact: 'Critical',
  },
  {
    tip: 'End screen + cards',
    detail: 'Add end screens to every video. YouTube rewards channels that keep viewers on the platform. AI video production speed means you have more content to cross-promote through cards.',
    impact: 'Medium',
  },
  {
    tip: 'Upload consistency signals',
    detail: 'Uploading on the same days/times each week trains the algorithm and your subscriber notifications. AI video makes 3–5 uploads per week achievable solo. Consistency is the single biggest growth lever.',
    impact: 'Very High',
  },
];

const COMPARISON_DATA = [
  { factor: 'Content production cost', ai: 'Fractions of a cent per clip', stock: '$5 – $50 per stock clip', manual: '$500 – $5,000 per day shoot' },
  { factor: 'Time to produce b-roll', ai: '30 – 120 seconds', stock: '30 – 60 min searching', manual: '1 – 3 days shooting + edit' },
  { factor: 'Video quality ceiling', ai: '1080p photorealistic (Veo 3.1)', stock: 'Depends on library', manual: 'Limited by camera/crew budget' },
  { factor: 'Copyright risk', ai: 'Zero — you own all output', stock: 'Licensing terms vary', manual: 'Location/talent releases needed' },
  { factor: 'Scalability', ai: 'Unlimited parallel generation', stock: 'Limited by budget', manual: 'Hard bottleneck on time' },
  { factor: 'Unique visuals', ai: 'Every generation is unique', stock: 'Used by millions of creators', manual: 'Unique but expensive to produce' },
  { factor: 'Aspect ratio flexibility', ai: '16:9, 9:16, 1:1 in one tool', stock: 'Fixed ratio per clip', manual: 'Requires re-shoot for each ratio' },
  { factor: 'Revision cost', ai: '$0 — regenerate instantly', stock: 'Re-purchase required', manual: '$500+ per day re-shoot' },
];

/* ─────────────────────────────────────────────
   PAGE COMPONENT
───────────────────────────────────────────── */
export default function AIVideoGeneratorYouTubePage() {
  const TARGET_URL =
    'https://scenith.in/tools/ai-video-generation?utm_source=yt_video_page&utm_medium=cta_button&utm_campaign=youtube_micro_tool';

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="ytv-page">

        {/* BREADCRUMB */}
        <nav aria-label="Breadcrumb" className="ytv-breadcrumb">
          <ol itemScope itemType="https://schema.org/BreadcrumbList">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <a href="/" itemProp="item"><span itemProp="name">Home</span></a>
              <meta itemProp="position" content="1" />
            </li>
            <span className="ytv-bc-sep">›</span>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <a href="/tools" itemProp="item"><span itemProp="name">Tools</span></a>
              <meta itemProp="position" content="2" />
            </li>
            <span className="ytv-bc-sep">›</span>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span itemProp="name">AI Video Generator for YouTube</span>
              <meta itemProp="position" content="3" />
            </li>
          </ol>
        </nav>

        {/* HERO */}
        <section className="ytv-hero" aria-labelledby="ytv-hero-h1">
          <div className="ytv-hero-bg">
            <div className="ytv-orb ytv-orb-1" />
            <div className="ytv-orb ytv-orb-2" />
            <div className="ytv-orb ytv-orb-3" />
            <div className="ytv-grid-overlay" />
          </div>

          <div className="ytv-hero-inner">
            <div className="ytv-hero-badges">
              <span className="ytv-badge ytv-badge-yt">▶️ YouTube</span>
              <span className="ytv-badge ytv-badge-shorts">📱 Shorts</span>
              <span className="ytv-badge ytv-badge-faceless">🎭 Faceless Channels</span>
              <span className="ytv-badge ytv-badge-auto">🤖 Automation</span>
            </div>

            <h1 id="ytv-hero-h1" className="ytv-hero-h1">
              AI Video Generator<br />
              <span className="ytv-gradient-text">for YouTube Channels</span>
            </h1>

            <p className="ytv-hero-sub">
              Transform text prompts and images into cinematic, 1080p AI video footage
              for your YouTube channel — in under 2 minutes. Power your faceless channel,
              Shorts pipeline, tutorial content, and brand storytelling without a camera,
              crew, or stock library subscription.
            </p>

            {/* Stats bar */}
            <div className="ytv-stats">
              <div className="ytv-stat"><strong>5</strong><span>AI Models</span></div>
              <div className="ytv-stat-div" />
              <div className="ytv-stat"><strong>1080p</strong><span>Max Resolution</span></div>
              <div className="ytv-stat-div" />
              <div className="ytv-stat"><strong>16:9 / 9:16</strong><span>YouTube Ready</span></div>
              <div className="ytv-stat-div" />
              <div className="ytv-stat"><strong>30 sec</strong><span>Fastest Generation</span></div>
            </div>

            {/* MAIN CTA */}
            <div className="ytv-hero-cta">
              <a href={TARGET_URL} className="ytv-cta-primary" aria-label="Open AI Video Generator for YouTube">
                <span className="ytv-cta-icon">🎬</span>
                Generate YouTube Video — Free
                <span className="ytv-cta-arrow">→</span>
              </a>
              <p className="ytv-cta-note">No credit card · 50 free credits on signup · Full commercial rights</p>
            </div>

            <div className="ytv-trust">
              <span>✅ MP4 instant download</span>
              <span>✅ No watermark</span>
              <span>✅ Commercial use</span>
              <span>✅ YouTube monetisation compatible</span>
            </div>
          </div>
        </section>

        {/* DEFINITION — Featured Snippet Target */}
        <section className="ytv-definition" aria-labelledby="ytv-def-heading">
          <div className="ytv-container">
            <div className="ytv-def-card">
              <h2 id="ytv-def-heading" className="ytv-def-label">What is an AI Video Generator for YouTube?</h2>
              <p className="ytv-def-text">
                An <strong>AI video generator for YouTube</strong> is a text-to-video or image-to-video
                tool that creates original cinematic video footage from written descriptions or reference
                images, specifically designed for use in YouTube content. It removes the need for cameras,
                lighting equipment, crews, and stock footage subscriptions by generating unique, commercial-use
                MP4 clips that can be edited into finished YouTube videos. In 2026, tools like Scenith support
                multiple state-of-the-art AI models — from fast and affordable options to flagship photorealistic
                generators — covering every use case from YouTube Shorts to full-length educational documentaries.
              </p>
            </div>
          </div>
        </section>

        {/* WHY AI VIDEO FOR YOUTUBE */}
        <section className="ytv-why" aria-labelledby="ytv-why-heading">
          <div className="ytv-container">
            <h2 id="ytv-why-heading" className="ytv-section-h2">
              Why YouTube Creators Are Switching to AI Video Generation in 2026
            </h2>
            <p className="ytv-section-desc">
              The YouTube landscape has fundamentally shifted. The creators growing fastest in 2026
              are not the ones with the best cameras — they are the ones producing the most consistently
              high-quality content at scale. AI video is the technology making that possible.
            </p>

            <div className="ytv-stats-grid">
              {ALGORITHM_FACTS.map((f) => (
                <div key={f.stat} className="ytv-stat-card">
                  <div className="ytv-stat-big">{f.stat}</div>
                  <div className="ytv-stat-label">{f.label}</div>
                  <p className="ytv-stat-detail">{f.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI MODELS */}
        <section className="ytv-models" aria-labelledby="ytv-models-heading">
          <div className="ytv-container">
            <h2 id="ytv-models-heading" className="ytv-section-h2">
              5 AI Video Models Available — Choose by Quality and Budget
            </h2>
            <p className="ytv-section-desc">
              Not all YouTube content requires the same quality level. Scenith gives you access to five
              state-of-the-art AI video models, from fast and affordable to full cinematic flagship output.
              Here is how to choose the right one for your channel.
            </p>
            <div className="ytv-models-grid">
              {AI_MODELS.map((m) => (
                <article key={m.id} className="ytv-model-card">
                  <div className="ytv-model-header">
                    <span className="ytv-model-icon">{m.icon}</span>
                    <div>
                      <h3 className="ytv-model-name">{m.name}</h3>
                      <span className="ytv-model-res">{m.res}</span>
                    </div>
                    <span
                      className="ytv-model-badge"
                      style={{ background: `${m.badgeColor}18`, border: `1px solid ${m.badgeColor}44`, color: m.badgeColor }}
                    >
                      {m.badge}
                    </span>
                  </div>
                  <p className="ytv-model-desc">{m.desc}</p>
                  <div className="ytv-model-footer">
                    <span className="ytv-model-best">Best for: {m.bestFor}</span>
                    <span className="ytv-model-credits">{m.credits} cr / 5s</span>
                  </div>
                </article>
              ))}
            </div>

            <div className="ytv-model-cta">
              <a href={TARGET_URL} className="ytv-cta-primary">
                <span className="ytv-cta-icon">🚀</span>
                Try All Models Free
                <span className="ytv-cta-arrow">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* HOW TO USE — 3 STEPS */}
        <section className="ytv-howto" aria-labelledby="ytv-howto-heading">
          <div className="ytv-container">
            <h2 id="ytv-howto-heading" className="ytv-section-h2">
              How to Generate AI Video for YouTube in 3 Steps
            </h2>
            <p className="ytv-section-desc">From concept to downloadable MP4 in under 2 minutes.</p>
            <div className="ytv-steps">
              {[
                {
                  num: '01',
                  icon: '✍️',
                  title: 'Describe Your YouTube Video Scene',
                  body: 'Write a detailed visual description of the scene you want for your YouTube video. Include subject, action, setting, lighting, camera movement, and visual style. The more specific you are, the better the result. Use one of our 6 proven prompt formulas below to structure your description for maximum quality output.',
                  tip: 'Include "cinematic", "4K", and a lighting descriptor in every prompt. These keywords consistently improve output quality across all models.',
                },
                {
                  num: '02',
                  icon: '⚙️',
                  title: 'Select Model, Aspect Ratio & Duration',
                  body: 'Choose 16:9 for standard YouTube videos or 9:16 for YouTube Shorts. Select your AI model based on your quality requirements and credit budget. Pick 5 or 10 seconds per clip — most YouTube b-roll clips are 5–8 seconds long, so 5-second generation is perfect for scene cuts.',
                  tip: 'Generate multiple 5-second clips rather than one long clip for maximum editing flexibility. You get more coverage and better scene variety.',
                },
                {
                  num: '03',
                  icon: '📥',
                  title: 'Download MP4 and Edit',
                  body: 'Your 1080p MP4 downloads instantly. Import into CapCut, DaVinci Resolve, Adobe Premiere, or any video editor. Layer your AI voiceover, background music, and captions. Assemble your YouTube video and upload directly. The full pipeline from prompt to published video can be completed in under 45 minutes.',
                  tip: 'Batch generate all clips for a video before starting the edit. This minimises context switching and lets you edit in a continuous flow.',
                },
              ].map((s) => (
                <div key={s.num} className="ytv-step">
                  <div className="ytv-step-num">{s.num}</div>
                  <div className="ytv-step-content">
                    <div className="ytv-step-icon">{s.icon}</div>
                    <h3>{s.title}</h3>
                    <p>{s.body}</p>
                    <div className="ytv-step-tip">💡 <strong>Pro tip:</strong> {s.tip}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="ytv-mid-cta">
              <a href={TARGET_URL} className="ytv-cta-primary">
                <span className="ytv-cta-icon">🎬</span>
                Generate My First YouTube Video — Free
                <span className="ytv-cta-arrow">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* NICHE GUIDE */}
        <section className="ytv-niches" aria-labelledby="ytv-niches-heading">
          <div className="ytv-container">
            <h2 id="ytv-niches-heading" className="ytv-section-h2">
              YouTube Niche-by-Niche AI Video Strategy Guide
            </h2>
            <p className="ytv-section-desc">
              Different YouTube niches demand different AI video approaches. Here is a complete
              breakdown of how to use AI video generation strategically for the highest-traffic
              YouTube content categories in 2026.
            </p>
            <div className="ytv-niches-grid">
              {YOUTUBE_NICHES.map((n) => (
                <article key={n.niche} className="ytv-niche-card">
                  <div className="ytv-niche-header">
                    <span className="ytv-niche-icon">{n.icon}</span>
                    <div>
                      <h3 className="ytv-niche-name">{n.niche}</h3>
                      <span className="ytv-niche-size">{n.views}</span>
                    </div>
                  </div>
                  <div className="ytv-niche-body">
                    <div className="ytv-niche-row">
                      <span className="ytv-niche-label">🎬 AI Video Use</span>
                      <span>{n.aiVideoUse}</span>
                    </div>
                    <div className="ytv-niche-row">
                      <span className="ytv-niche-label">⚙️ Model</span>
                      <span className="ytv-niche-model">{n.modelRec}</span>
                    </div>
                    <div className="ytv-niche-row">
                      <span className="ytv-niche-label">📐 Ratio</span>
                      <span>{n.aspectRec}</span>
                    </div>
                    <div className="ytv-prompt-example">
                      <span className="ytv-prompt-label">Example prompt:</span>
                      <em>{n.promptExample}</em>
                    </div>
                    <div className="ytv-niche-formats">
                      {n.topFormats.map((f) => (
                        <span key={f} className="ytv-format-tag">{f}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROMPT FORMULAS */}
        <section className="ytv-prompts" aria-labelledby="ytv-prompts-heading">
          <div className="ytv-container">
            <h2 id="ytv-prompts-heading" className="ytv-section-h2">
              6 Proven AI Video Prompt Formulas for YouTube Creators
            </h2>
            <p className="ytv-section-desc">
              The quality of your AI video output is directly determined by the quality of your
              prompt. These six formulas are engineering for cinematic YouTube video — each
              covering a different content category and visual style.
            </p>
            <div className="ytv-formulas">
              {PROMPT_FORMULAS.map((pf, i) => (
                <article key={pf.name} className="ytv-formula-card">
                  <div className="ytv-formula-num">0{i + 1}</div>
                  <div className="ytv-formula-body">
                    <h3 className="ytv-formula-name">{pf.name}</h3>
                    <div className="ytv-formula-struct">
                      <code>{pf.formula}</code>
                    </div>
                    <p className="ytv-formula-example"><em>{pf.example}</em></p>
                    <span className="ytv-formula-usecase">Use case: {pf.useCase}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FACELESS PIPELINE */}
        <section className="ytv-pipeline" aria-labelledby="ytv-pipeline-heading">
          <div className="ytv-container">
            <h2 id="ytv-pipeline-heading" className="ytv-section-h2">
              The Complete Faceless YouTube Channel Pipeline (45 Minutes Per Video)
            </h2>
            <p className="ytv-section-desc">
              This is the exact step-by-step production workflow used by the fastest-growing faceless
              YouTube channels in 2026. Every tool in this pipeline has a free tier or is free to start.
              The total production time per video is 40–60 minutes.
            </p>
            <div className="ytv-pipeline-steps">
              {FACELESS_PIPELINE.map((s) => (
                <div key={s.step} className="ytv-pipeline-step">
                  <div className="ytv-pipeline-left">
                    <div className="ytv-pipeline-num">{s.step}</div>
                    <div className="ytv-pipeline-icon">{s.icon}</div>
                  </div>
                  <div className="ytv-pipeline-content">
                    <div className="ytv-pipeline-header">
                      <h3>{s.title}</h3>
                      <div className="ytv-pipeline-meta">
                        <span className="ytv-pipeline-tool">{s.tool}</span>
                        <span className="ytv-pipeline-time">⏱ {s.time}</span>
                      </div>
                    </div>
                    <p>{s.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="ytv-pipeline-cta">
              <p className="ytv-pipeline-cta-label">Start Step 2 of your pipeline right now:</p>
              <a href={TARGET_URL} className="ytv-cta-primary">
                <span className="ytv-cta-icon">🎬</span>
                Generate YouTube Video Footage — Free
                <span className="ytv-cta-arrow">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* MONETISATION */}
        <section className="ytv-monetise" aria-labelledby="ytv-monetise-heading">
          <div className="ytv-container">
            <h2 id="ytv-monetise-heading" className="ytv-section-h2">
              Monetising Your AI Video YouTube Channel: A Complete 2026 Guide
            </h2>
            <p className="ytv-section-desc">
              AI video doesn't just save time — it accelerates every YouTube monetisation milestone.
              Here is how AI-assisted production directly impacts your revenue timeline across every
              available monetisation method.
            </p>
            <div className="ytv-monetise-grid">
              {MONETISATION_GUIDE.map((m) => (
                <article key={m.method} className="ytv-monetise-card">
                  <div className="ytv-monetise-header">
                    <span className="ytv-monetise-icon">{m.icon}</span>
                    <h3>{m.method}</h3>
                  </div>
                  <div className="ytv-monetise-body">
                    <div className="ytv-monetise-row">
                      <span className="ytv-monetise-label">📋 Requirement</span>
                      <span>{m.requirement}</span>
                    </div>
                    <div className="ytv-monetise-row">
                      <span className="ytv-monetise-label">🤖 AI Advantage</span>
                      <span>{m.aiAdvantage}</span>
                    </div>
                    <div className="ytv-monetise-row">
                      <span className="ytv-monetise-label">💰 Earnings</span>
                      <span className="ytv-earnings">{m.earnings}</span>
                    </div>
                    <div className="ytv-monetise-row">
                      <span className="ytv-monetise-label">📅 Timeline</span>
                      <span>{m.timeline}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* BIG CTA */}
        <section className="ytv-big-cta" aria-labelledby="ytv-bigcta-heading">
          <div className="ytv-container">
            <div className="ytv-big-cta-card">
              <div className="ytv-big-cta-glow" />
              <div className="ytv-big-cta-inner">
                <span className="ytv-big-cta-tag">🎬 Build Your YouTube Empire with AI</span>
                <h2 id="ytv-bigcta-heading">Start Generating YouTube Videos in 30 Seconds</h2>
                <p>
                  Join 1,500+ creators already using Scenith to produce cinematic AI video
                  for their YouTube channels. 5 models. 1080p output. Instant MP4 download.
                  Commercial rights included. Start free — no credit card required.
                </p>
                <a href={TARGET_URL} className="ytv-cta-primary ytv-big-btn">
                  <span className="ytv-cta-icon">🚀</span>
                  Open AI Video Generator for YouTube
                  <span className="ytv-cta-arrow">→</span>
                </a>
                <div className="ytv-big-cta-features">
                  <span>⚡ 30-second generation</span>
                  <span>🎬 5 AI models</span>
                  <span>📐 16:9 &amp; 9:16 support</span>
                  <span>📥 Instant MP4 download</span>
                  <span>✅ Commercial rights</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* YouTube SEO TIPS */}
        <section className="ytv-seo" aria-labelledby="ytv-seo-heading">
          <div className="ytv-container">
            <h2 id="ytv-seo-heading" className="ytv-section-h2">
              YouTube SEO in 2026: How to Get Your AI Video Content Found
            </h2>
            <p className="ytv-section-desc">
              Creating great AI video is only half the battle. Getting it ranked and discovered
              requires understanding how the YouTube search algorithm works in 2026. These are
              the six highest-impact SEO tactics for AI-powered YouTube channels.
            </p>
            <div className="ytv-seo-grid">
              {SEO_TIPS_YOUTUBE.map((tip, i) => (
                <article key={tip.tip} className="ytv-seo-card">
                  <div className="ytv-seo-num">0{i + 1}</div>
                  <div>
                    <div className="ytv-seo-header">
                      <h3 className="ytv-seo-tip">{tip.tip}</h3>
                      <span
                        className="ytv-seo-impact"
                        style={{
                          background: tip.impact === 'Critical' ? 'rgba(239,68,68,0.12)' :
                            tip.impact === 'Very High' ? 'rgba(245,158,11,0.12)' :
                            'rgba(99,102,241,0.12)',
                          color: tip.impact === 'Critical' ? '#EF4444' :
                            tip.impact === 'Very High' ? '#F59E0B' : '#818CF8',
                          border: `1px solid ${tip.impact === 'Critical' ? 'rgba(239,68,68,0.3)' :
                            tip.impact === 'Very High' ? 'rgba(245,158,11,0.3)' :
                            'rgba(99,102,241,0.3)'}`,
                        }}
                      >
                        {tip.impact}
                      </span>
                    </div>
                    <p className="ytv-seo-detail">{tip.detail}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* COMPARISON */}
        <section className="ytv-comparison" aria-labelledby="ytv-comparison-heading">
          <div className="ytv-container">
            <h2 id="ytv-comparison-heading" className="ytv-section-h2">
              AI Video vs Stock Footage vs Manual Production for YouTube
            </h2>
            <div className="ytv-table-wrap">
              <table className="ytv-table">
                <thead>
                  <tr>
                    <th scope="col">Factor</th>
                    <th scope="col" className="col-ai">AI Video (Scenith)</th>
                    <th scope="col" className="col-stock">Stock Footage</th>
                    <th scope="col" className="col-manual">Manual Production</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_DATA.map((row) => (
                    <tr key={row.factor}>
                      <td className="ytv-factor">{row.factor}</td>
                      <td className="ytv-ai-col">✅ {row.ai}</td>
                      <td className="ytv-stock-col">⚠️ {row.stock}</td>
                      <td className="ytv-manual-col">❌ {row.manual}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="ytv-faq" aria-labelledby="ytv-faq-heading">
          <div className="ytv-container">
            <h2 id="ytv-faq-heading" className="ytv-section-h2">
              Frequently Asked Questions: AI Video Generator for YouTube
            </h2>
            <div className="ytv-faq-grid">
              {[
                {
                  q: 'Can I monetise YouTube videos made with AI video generators?',
                  a: "Yes. YouTube's monetisation policy permits AI-generated video content. The key requirement is that your overall content must be original and add value — you cannot repurpose other creators' content with AI. Channels using AI-generated b-roll with original narration, commentary, or educational content qualify fully for the YouTube Partner Programme and Shorts revenue.",
                },
                {
                  q: 'Does YouTube penalise AI-generated video content?',
                  a: "No, YouTube does not penalise AI-generated video as of 2026. YouTube does require disclosure if AI generation materially alters realistic depictions of real people or events — similar to deepfake disclosure requirements. Standard AI b-roll footage, abstract visuals, and cinematic scenes do not require disclosure.",
                },
                {
                  q: 'What resolution should I generate for YouTube?',
                  a: "Generate at 1080p for standard YouTube videos. YouTube recommends uploading at 1080p minimum for clear quality in search results. Shorts can be generated at any resolution since they display at portrait 9:16. For maximum quality, use Veo 3.1 or Kling 2.6 Pro which natively output at 1080p.",
                },
                {
                  q: 'How many AI video clips do I need for a 10-minute YouTube video?',
                  a: "A 10-minute YouTube video typically requires 30–50 individual clips if you're using 10–20 second cuts. With AI-generated 5-second clips, plan for 60–80 clips per 10-minute video. This sounds like a lot, but batch generation — creating 10+ clips in parallel — means you can generate a full video worth of footage in under an hour.",
                },
                {
                  q: 'What is the best AI model for YouTube Shorts?',
                  a: "For YouTube Shorts, Wan 2.5 offers the best balance of speed, cost (46 credits per 5-second clip), and quality. Select 9:16 aspect ratio. For premium Shorts content on larger channels, Kling 2.5 Turbo at 1080p in 9:16 delivers significantly better visual quality that stands out in the Shorts feed.",
                },
                {
                  q: 'Can I use Scenith AI video for a YouTube automation channel?',
                  a: "Yes. Scenith is particularly well-suited for YouTube automation because of its multi-model support, instant MP4 download, batch generation capability, and full commercial rights. Many automation channel operators use the API or batch their daily generation to create a full week of content in a single session.",
                },
                {
                  q: 'How do I make AI video look more cinematic for YouTube?',
                  a: 'Five techniques: (1) Always include "cinematic 4K" in your prompt. (2) Specify camera movement (dolly shot, tracking shot, aerial). (3) Describe lighting explicitly (golden hour, dramatic studio, soft diffused). (4) Use the Veo 3.1 or Kling 2.6 Pro models for maximum realism. (5) In post-production, add a slight film grain overlay and colour grade with warm highlights.',
                },
                {
                  q: 'How much does it cost to run a faceless YouTube channel with AI video?',
                  a: "A typical faceless YouTube channel producing 3 videos per week, each requiring 30–40 five-second AI video clips at Wan 2.5 pricing (46 credits/clip), would use approximately 4,000–5,500 credits per month. Scenith's Creator Lite plan at $22/month includes enough credits for this volume, making the total monthly production cost well under $30.",
                },
              ].map(({ q, a }) => (
                <article key={q} className="ytv-faq-item">
                  <h3 className="ytv-faq-q">{q}</h3>
                  <p className="ytv-faq-a">{a}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PEOPLE ALSO ASK */}
        <section className="ytv-paa" aria-labelledby="ytv-paa-heading">
          <div className="ytv-container">
            <h2 id="ytv-paa-heading" className="ytv-section-h2">People Also Ask</h2>
            <div className="ytv-paa-grid">
              {[
                { q: 'Can AI generate full YouTube videos automatically?', a: 'AI can generate all the visual components (video footage, images, thumbnails) and audio components (voiceover, music) of a YouTube video separately. Assembly still requires a brief editing step, but the full pipeline from script to final video can be completed in under an hour with AI tools.' },
                { q: 'What is a faceless YouTube channel?', a: 'A faceless YouTube channel is a channel that never shows the creator on screen. Content is produced using AI-generated video, screen recordings, or stock footage paired with AI voiceover narration. Many of the fastest-growing channels on YouTube in 2026 are faceless.' },
                { q: 'Is AI video better than stock footage for YouTube?', a: 'AI video offers unique advantages over stock footage: every generation is original (no risk of viewers recognising the same clip from other channels), there are no licensing fees, you can generate exactly the scene you need, and commercial rights are included by default.' },
                { q: 'How do I start a YouTube channel with AI?', a: 'Choose your niche, write your first script with an AI writing tool, generate video footage with Scenith AI Video Generator, add voiceover with Scenith AI Voice Generator, edit in CapCut or DaVinci Resolve, generate a thumbnail with Scenith Image Generator, and upload to YouTube with an SEO-optimised title and description.' },
              ].map(({ q, a }) => (
                <div key={q} className="ytv-paa-item">
                  <h3>{q}</h3>
                  <p>{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RELATED TOOLS */}
        <section className="ytv-related" aria-labelledby="ytv-related-heading">
          <div className="ytv-container">
            <h2 id="ytv-related-heading" className="ytv-section-h2">Complete Your YouTube Production Toolkit</h2>
            <p className="ytv-section-desc">AI video is step 2. Here is the full Scenith toolkit for end-to-end YouTube production.</p>
            <div className="ytv-related-grid">
              <a href="https://scenith.in/create-ai-content?utm_source=yt_video_page&utm_medium=related_tools&utm_campaign=cross_tool" className="ytv-related-card">
                <span className="ytv-related-icon">🎙️</span>
                <div>
                  <h3>AI Voice Generator</h3>
                  <p>Add professional narration to your YouTube videos. 40+ voices, 20+ languages, instant MP3 download.</p>
                </div>
                <span className="ytv-related-arrow">→</span>
              </a>
              <a href="https://scenith.in/create-ai-content?utm_source=yt_video_page&utm_medium=related_tools&utm_campaign=cross_tool" className="ytv-related-card">
                <span className="ytv-related-icon">🖼️</span>
                <div>
                  <h3>AI Image Generator</h3>
                  <p>Create scroll-stopping YouTube thumbnails. High contrast, bold visuals that drive clicks.</p>
                </div>
                <span className="ytv-related-arrow">→</span>
              </a>
              <a href="https://scenith.in/tools/add-subtitles-to-videos?utm_source=yt_video_page&utm_medium=related_tools&utm_campaign=cross_tool" className="ytv-related-card">
                <span className="ytv-related-icon">📝</span>
                <div>
                  <h3>AI Subtitle Generator</h3>
                  <p>Auto-generate captions for YouTube. Increases accessibility and watch time on mobile.</p>
                </div>
                <span className="ytv-related-arrow">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="ytv-final-cta" aria-labelledby="ytv-finalcta-heading">
          <div className="ytv-container">
            <div className="ytv-final-inner">
              <h2 id="ytv-finalcta-heading">Your YouTube Channel Starts Here</h2>
              <p>
                Stop waiting for the perfect camera, the perfect setup, or the perfect moment.
                The creators growing right now are building with AI tools that did not exist two years ago.
                Scenith AI Video Generator gives you access to the same models powering professional
                productions — free to start, with full commercial rights on every clip you generate.
              </p>
              <a href={TARGET_URL} className="ytv-cta-primary ytv-final-btn">
                <span className="ytv-cta-icon">🎬</span>
                Generate My First YouTube Video — Free
                <span className="ytv-cta-arrow">→</span>
              </a>
              <div className="ytv-final-trust">
                <span>✅ 50 free credits on signup</span>
                <span>✅ 5 AI models included</span>
                <span>✅ 1080p video quality</span>
                <span>✅ Full commercial rights</span>
                <span>✅ No credit card required</span>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}