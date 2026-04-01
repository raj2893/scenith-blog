import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import './instagram-subtitles.css';

export const metadata: Metadata = {
  title: 'Subtitle Generator for Instagram Reels – Auto Captions in Seconds | Scenith',
  description:
    'Generate perfect subtitles for Instagram Reels instantly. AI-powered captions boost views by 40%, retention by 80%, and reach silent-scrolling audiences. Free, no watermark, no download needed.',
  keywords: [
    'subtitle generator for instagram reels',
    'instagram reels subtitles',
    'auto captions instagram reels',
    'add subtitles to reels',
    'instagram caption generator',
    'reels subtitle maker',
    'ai captions for instagram',
    'free subtitle generator instagram',
    'burn captions into reels',
    'instagram reels accessibility',
    'auto subtitle reels 2026',
    'caption reels online free',
  ],
  alternates: {
    canonical: 'https://scenith.in/tools/subtitle-generator-for-instagram-reels',
  },
  openGraph: {
    title: 'Free Subtitle Generator for Instagram Reels – Scenith AI',
    description:
      'Add professional, scroll-stopping captions to your Instagram Reels in under 2 minutes. AI accuracy, custom styles, instant MP4 download.',
    url: 'https://scenith.in/tools/subtitle-generator-for-instagram-reels',
    siteName: 'Scenith',
    images: [
      {
        url: 'https://scenith.in/images/AddSubtitlesSS.png',
        width: 1200,
        height: 630,
        alt: 'Subtitle Generator for Instagram Reels by Scenith',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Subtitle Generator for Instagram Reels – Scenith AI',
    description:
      'Auto-generate subtitles for your Reels. Boost views, retention, and reach. Free & no watermark.',
    images: ['https://scenith.in/images/AddSubtitlesSS.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  },
};

const TOOL_URL =
  'https://scenith.in/tools/add-subtitles-to-videos?utm_source=instagram-reels-page&utm_medium=internal&utm_campaign=subtitle-reels-cta';

const stats = [
  { value: '85%', label: 'Reels watched without sound', sub: 'Captions = survival' },
  { value: '40%', label: 'More views with captions', sub: 'Proven by Meta data' },
  { value: '80%', label: 'Higher retention rate', sub: 'Viewers stay longer' },
  { value: '2 min', label: 'Average processing time', sub: 'Upload → download' },
];

const steps = [
  {
    n: '01',
    icon: '📤',
    title: 'Upload Your Reel',
    desc: 'Upload your vertical MP4 or MOV Reel directly. No app install. No account needed for preview. Works from phone or desktop — wherever you edit.',
  },
  {
    n: '02',
    icon: '🤖',
    title: 'AI Generates Captions',
    desc: 'Whisper AI transcribes every word with 95–98% accuracy. Captions auto-sync frame-perfect to your audio, including music, voiceovers, and talking-head clips.',
  },
  {
    n: '03',
    icon: '🎨',
    title: 'Style Like a Pro',
    desc: 'Choose from viral caption styles — bold pop, minimal white, neon outline, or cinematic — then customise font, colour, size, and position with live preview.',
  },
  {
    n: '04',
    icon: '⬇️',
    title: 'Download & Post',
    desc: 'Export a crisp MP4 with captions burned in. Upload directly to Instagram — captions are permanent, no separate file, no encoding headache.',
  },
];

const whyCards = [
  {
    icon: '🔇',
    title: 'Silent Scrollers Are Your Biggest Audience',
    body: 'Instagram auto-plays Reels on mute. Metas own data confirms 85% of videos are watched with sound off. Without captions, your message evaporates the second someone scrolls in a quiet room, on public transit, or during a work meeting. Captions are not optional — they are the message.',
  },
  {
    icon: '📈',
    title: 'The Algorithm Rewards Captioned Reels',
    body: "Instagram's algorithm measures watch time and completion rate. Captioned Reels keep people watching longer because they can follow along silently. More completions → more pushes to the Explore page → more reach. It is a compounding flywheel, and it starts with one text overlay.",
  },
  {
    icon: '♿',
    title: 'Accessibility Expands Your Audience',
    body: '466 million people worldwide live with hearing loss. Millions more are non-native English speakers who rely on reading to follow fast speech. Captions turn your content from exclusive to universal — and Instagram actively surfaces accessible content to broader audiences.',
  },
  {
    icon: '🌍',
    title: 'Reach Beyond Language Barriers',
    body: 'A captioned Reel in English is one video. A captioned Reel you then translate is a global campaign. Our tool supports 50+ languages. Caption in English, translate to Spanish, Hindi, or Portuguese, and suddenly your Reel is discoverable by billions more accounts.',
  },
  {
    icon: '🔍',
    title: 'Text in Videos Is Indexed by Search',
    body: "Instagram's search engine reads text overlays. When your captions contain keywords relevant to your niche — fitness, finance, cooking, tech — your Reel surfaces in more searches. This is an underused SEO hack most creators haven't discovered yet.",
  },
  {
    icon: '⚡',
    title: 'Faster Editing Than Manual Typing',
    body: "Manual caption tools make you type every word, set every timestamp, drag every text box. That's 2–4 hours per Reel if you're doing it right. Our AI does it in 90 seconds. Spend the saved time creating the next Reel instead.",
  },
];

const styleShowcase = [
  { name: 'Bold Pop', desc: 'Thick white text, black stroke. High contrast, viral TikTok style.', color: '#fff', bg: '#000', stroke: true },
  { name: 'Neon Glow', desc: 'Electric colour text with glow shadow on dark backgrounds.', color: '#00f5ff', bg: '#0a0a1a', stroke: false },
  { name: 'Minimal Clean', desc: 'Soft white, no background. Works on lifestyle & aesthetic content.', color: '#f0f0f0', bg: 'transparent', stroke: false },
  { name: 'Yellow Film', desc: 'Classic yellow caption, cinema standard. Works on any scene.', color: '#FFE14D', bg: '#000', stroke: false },
  { name: 'Box Highlight', desc: 'Semi-transparent dark pill under text. Modern, readable, premium.', color: '#fff', bg: 'rgba(0,0,0,0.6)', stroke: false },
  { name: 'Gradient Hot', desc: 'Pink-to-orange text for Gen Z energy content & beauty niches.', color: 'linear-gradient(90deg,#ff6b6b,#ffa94d)', bg: '#1a1a2e', stroke: false },
];

const niches = [
  { emoji: '💪', niche: 'Fitness & Gym', tip: 'Bold captions keep viewers pumped and following reps even with music blasting.' },
  { emoji: '🍳', niche: 'Food & Recipe', tip: 'Step-by-step captions let viewers pause and re-read without rewinding.' },
  { emoji: '💰', niche: 'Finance & Business', tip: 'Dense info in short clips is easier to absorb with captions to anchor key figures.' },
  { emoji: '✈️', niche: 'Travel & Lifestyle', tip: 'Caption location names and tips so viewers can screenshot for later reference.' },
  { emoji: '🎓', niche: 'Education & Coaching', tip: 'Captions make complex ideas stick, increasing saves and shares dramatically.' },
  { emoji: '🛍️', niche: 'Fashion & Beauty', tip: 'Label products in captions — this is better than stickers for brand recall.' },
  { emoji: '🎭', niche: 'Comedy & Skits', tip: 'Punchlines land harder when viewers see them AND hear them simultaneously.' },
  { emoji: '🏠', niche: 'Real Estate & Home', tip: 'Caption property specs and features — viewers can read while visually touring.' },
];

const faqData = [
  {
    q: 'Does Scenith add a watermark to my Instagram Reels?',
    a: 'No. Free accounts get captions burned in without any Scenith watermark. Your Reel looks 100% original. Paid plans unlock higher export resolutions (up to 4K) for even crisper output on high-end devices.',
  },
  {
    q: 'Will the captions stay on my Reel after I upload to Instagram?',
    a: "Yes. Our tool burns captions permanently into the video file itself — they are part of the pixels. This is different from Instagram's own caption feature which can be turned off. Burned-in captions always display, on every device, every time.",
  },
  {
    q: 'Can I caption vertical 9:16 Reels, not just landscape videos?',
    a: "Absolutely. Our subtitle engine handles all aspect ratios including 9:16 portrait (standard Reels), 4:5 square, and 16:9 landscape. Caption positioning automatically adapts so text never gets cropped by Instagram's UI elements.",
  },
  {
    q: 'How accurate is the AI transcription for fast-talking Reels?',
    a: 'Whisper AI achieves 95–98% accuracy on clear audio including fast speech. For very fast talkers, background music, or heavy accents, accuracy may drop slightly. The built-in editor lets you fix any word in seconds — far faster than typing everything from scratch.',
  },
  {
    q: 'What languages does the subtitle generator support for Reels?',
    a: 'We support 50+ languages including English, Hindi, Spanish, Portuguese, French, German, Arabic, Mandarin, Japanese, Korean, and more. The AI auto-detects the spoken language — no need to specify it manually. Multi-language Reels (code-switching) are also handled gracefully.',
  },
  {
    q: 'Can I use this for Instagram Stories and TikTok too?',
    a: "Yes. The tool works for any vertical video — Reels, Stories, TikTok, YouTube Shorts, and Facebook Reels all accept the same MP4 format we export. One caption session, deploy across every platform.",
  },
  {
    q: 'How long can my Reel be for caption generation?',
    a: "Free accounts support Reels up to 60 seconds, which covers Instagram's standard Reel length. Creator plans support up to 90 seconds and beyond for longer-form content. Most Reels under 30 seconds are processed in under 60 seconds.",
  },
  {
    q: 'Can I edit the captions after AI generates them?',
    a: 'Yes, and this is one of our strongest features. Click any generated caption segment to edit the text, adjust start/end timing, change style, or reposition. Changes update live in the preview player. Auto-save means you never lose your edits.',
  },
  {
    q: 'What font styles work best for viral Instagram Reels?',
    a: 'Bold sans-serif fonts with high contrast (white on dark or vice versa) consistently outperform decorative fonts. We offer styles modelled after viral Reels trends — bold pop, neon, and minimal clean are the most-used. You can also customise every parameter manually.',
  },
  {
    q: 'Is there an app to download or is this browser-based?',
    a: "100% browser-based. Open the tool on any device — iPhone, Android, Mac, Windows, or Chromebook. No app download, no plugin, no software installation. It works where you already work.",
  },
];

const comparisons = [
  { feature: 'Free to use', scenith: true, capcut: true, instaBuiltIn: false },
  { feature: 'No watermark', scenith: true, capcut: false, instaBuiltIn: true },
  { feature: 'Custom fonts & colours', scenith: true, capcut: true, instaBuiltIn: false },
  { feature: 'AI transcription (50+ languages)', scenith: true, capcut: true, instaBuiltIn: false },
  { feature: 'Browser-based (no app install)', scenith: true, capcut: false, instaBuiltIn: true },
  { feature: 'Burned-in permanent captions', scenith: true, capcut: true, instaBuiltIn: false },
  { feature: 'Live subtitle preview player', scenith: true, capcut: true, instaBuiltIn: false },
  { feature: 'Export up to 4K resolution', scenith: true, capcut: false, instaBuiltIn: false },
  { feature: 'Works for TikTok, YT Shorts too', scenith: true, capcut: true, instaBuiltIn: false },
  { feature: 'Edit individual caption timing', scenith: true, capcut: true, instaBuiltIn: false },
];

export default function InstagramReelsSubtitlePage() {
  return (
    <>
      {/* ─── JSON-LD: WebPage ─── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            '@id': 'https://scenith.in/tools/subtitle-generator-for-instagram-reels',
            name: 'Subtitle Generator for Instagram Reels – Scenith',
            description:
              'Free AI subtitle generator optimised for Instagram Reels. Add burned-in captions in 2 minutes. 50+ languages, custom styles, no watermark.',
            url: 'https://scenith.in/tools/subtitle-generator-for-instagram-reels',
            inLanguage: 'en-IN',
            isPartOf: { '@type': 'WebSite', '@id': 'https://scenith.in/#website', name: 'Scenith' },
            breadcrumb: {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://scenith.in' },
                { '@type': 'ListItem', position: 2, name: 'Tools', item: 'https://scenith.in/tools' },
                {
                  '@type': 'ListItem',
                  position: 3,
                  name: 'Subtitle Generator for Instagram Reels',
                  item: 'https://scenith.in/tools/subtitle-generator-for-instagram-reels',
                },
              ],
            },
            mainEntity: {
              '@type': 'SoftwareApplication',
              name: 'Scenith Instagram Reels Subtitle Generator',
              applicationCategory: 'MultimediaApplication',
              operatingSystem: 'Web Browser',
              offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
            },
          }),
        }}
      />

      {/* ─── JSON-LD: FAQ ─── */}
      <Script
        id="reels-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqData.map(({ q, a }) => ({
              '@type': 'Question',
              name: q,
              acceptedAnswer: { '@type': 'Answer', text: a },
            })),
          }),
        }}
      />

      {/* ─── JSON-LD: HowTo ─── */}
      <Script
        id="reels-howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: 'How to Add Subtitles to Instagram Reels with AI',
            description: 'Step-by-step guide to auto-generating captions for Instagram Reels using Scenith AI.',
            step: steps.map((s, i) => ({
              '@type': 'HowToStep',
              position: i + 1,
              name: s.title,
              text: s.desc,
            })),
          }),
        }}
      />

      <div className="igr-page">
        {/* Breadcrumb */}
        <nav className="igr-breadcrumb" aria-label="Breadcrumb">
          <ol itemScope itemType="https://schema.org/BreadcrumbList">
            {[
              { href: '/', label: 'Home', pos: 1 },
              { href: '/tools', label: 'Tools', pos: 2 },
              { href: '/tools/subtitle-generator-for-instagram-reels', label: 'Instagram Reels Subtitles', pos: 3 },
            ].map((crumb) => (
              <li key={crumb.pos} itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                {crumb.pos < 3 ? (
                  <Link href={crumb.href} itemProp="item">
                    <span itemProp="name">{crumb.label}</span>
                  </Link>
                ) : (
                  <span itemProp="name">{crumb.label}</span>
                )}
                <meta itemProp="position" content={String(crumb.pos)} />
              </li>
            ))}
          </ol>
        </nav>

        {/* ─── HERO ─── */}
        <section className="igr-hero" aria-labelledby="igr-hero-h1">
          <div className="igr-hero__bg-rings" aria-hidden="true">
            <span /><span /><span />
          </div>
          <div className="igr-hero__inner">
            <div className="igr-hero__badge">
              <span className="igr-badge-dot" />
              Free · No Watermark · Browser-Based
            </div>
            <h1 id="igr-hero-h1" className="igr-hero__h1">
              Subtitle Generator<br />
              <em>for Instagram Reels</em>
            </h1>
            <p className="igr-hero__subhead">
              85% of Reels are watched on mute. Without captions, you lose{' '}
              <strong>most of your potential audience</strong> before they even hear a word.
              Scenith's AI adds professional, scroll-stopping subtitles to your Reels in under 2 minutes —
              free, no watermark, no app download.
            </p>
            <a href={TOOL_URL} className="igr-cta-primary" aria-label="Open subtitle generator for Instagram Reels">
              <span className="igr-cta-icon">✦</span>
              Generate Reels Subtitles Free
              <span className="igr-cta-arrow">→</span>
            </a>
            <p className="igr-hero__trust">
              Trusted by <strong>1,500+</strong> creators &nbsp;·&nbsp; 50+ languages &nbsp;·&nbsp; Instant MP4 export
            </p>
          </div>
          {/* Fake phone mockup */}
          <div className="igr-hero__phone" aria-hidden="true">
            <div className="igr-phone-frame">
              <div className="igr-phone-screen">
                <div className="igr-phone-video">
                  <div className="igr-phone-caption">
                    <span>"this changed my life 🔥"</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── STAT BAR ─── */}
        <section className="igr-stats" aria-label="Key statistics">
          {stats.map((s) => (
            <div key={s.value} className="igr-stat">
              <span className="igr-stat__value">{s.value}</span>
              <span className="igr-stat__label">{s.label}</span>
              <span className="igr-stat__sub">{s.sub}</span>
            </div>
          ))}
        </section>

        {/* ─── DEFINITION BOX (Featured snippet target) ─── */}
        <section className="igr-definition" aria-labelledby="igr-def-title">
          <div className="igr-definition__inner">
            <h2 id="igr-def-title" className="igr-definition__q">
              What is a Subtitle Generator for Instagram Reels?
            </h2>
            <p className="igr-definition__a">
              A <strong>subtitle generator for Instagram Reels</strong> is an AI-powered tool that automatically
              transcribes the spoken audio in your Reel, syncs the text to each moment in the video, and
              exports a new MP4 with captions permanently burned into the frames. Unlike Instagram's built-in
              auto-caption sticker (which viewers can remove and only works in-app), burned-in subtitles
              display universally — on every device, every platform, and every feed without any viewer action required.
            </p>
          </div>
        </section>

        {/* ─── HOW IT WORKS ─── */}
        <section className="igr-steps" id="how-it-works" aria-labelledby="igr-steps-title">
          <h2 id="igr-steps-title" className="igr-section-title">
            How to Add Subtitles to Instagram Reels
          </h2>
          <p className="igr-section-sub">
            Four steps. Two minutes. One perfectly captioned Reel.
          </p>
          <div className="igr-steps__grid" role="list">
            {steps.map((s) => (
              <article key={s.n} className="igr-step-card" role="listitem">
                <div className="igr-step-card__num">{s.n}</div>
                <div className="igr-step-card__icon">{s.icon}</div>
                <h3 className="igr-step-card__title">{s.title}</h3>
                <p className="igr-step-card__desc">{s.desc}</p>
              </article>
            ))}
          </div>
          <div className="igr-steps__cta">
            <a href={TOOL_URL} className="igr-cta-primary">
              Start Captioning My Reels
              <span className="igr-cta-arrow">→</span>
            </a>
          </div>
        </section>

        {/* ─── WHY CAPTIONS MATTER ─── */}
        <section className="igr-why" id="why-captions" aria-labelledby="igr-why-title">
          <h2 id="igr-why-title" className="igr-section-title">
            Why Instagram Reels Subtitles Are Non-Negotiable in 2026
          </h2>
          <p className="igr-section-sub">
            The data is overwhelming. Captions aren't a nice-to-have feature — they are
            the single highest-ROI edit you can make to any Reel.
          </p>
          <div className="igr-why__grid">
            {whyCards.map((w) => (
              <article key={w.title} className="igr-why-card">
                <span className="igr-why-card__icon">{w.icon}</span>
                <h3 className="igr-why-card__title">{w.title}</h3>
                <p className="igr-why-card__body">{w.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ─── STYLE SHOWCASE ─── */}
        <section className="igr-styles" id="caption-styles" aria-labelledby="igr-styles-title">
          <h2 id="igr-styles-title" className="igr-section-title">
            Caption Styles Built for Viral Reels
          </h2>
          <p className="igr-section-sub">
            Pick a style that matches your niche, then fine-tune every property —
            font, size, position, border, opacity, spacing — in the live editor.
          </p>
          <div className="igr-styles__grid">
            {styleShowcase.map((s) => (
              <div key={s.name} className="igr-style-card" style={{ background: s.bg === 'transparent' ? '#111' : s.bg }}>
                <p
                  className="igr-style-card__preview"
                  style={{
                    color: s.color.startsWith('linear') ? 'transparent' : s.color,
                    backgroundImage: s.color.startsWith('linear') ? s.color : undefined,
                    WebkitBackgroundClip: s.color.startsWith('linear') ? 'text' : undefined,
                    WebkitTextStroke: s.stroke ? '2px #000' : undefined,
                  }}
                >
                  Your Caption Here
                </p>
                <div className="igr-style-card__meta">
                  <strong>{s.name}</strong>
                  <span>{s.desc}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="igr-styles__cta">
            <a href={TOOL_URL} className="igr-cta-secondary">
              Try All Styles Free →
            </a>
          </div>
        </section>

        {/* ─── NICHE GUIDE ─── */}
        <section className="igr-niches" id="niche-guide" aria-labelledby="igr-niches-title">
          <h2 id="igr-niches-title" className="igr-section-title">
            Subtitle Strategy by Instagram Niche
          </h2>
          <p className="igr-section-sub">
            Different niches, different needs. Here's how top creators in each vertical
            use captions to maximise their Reel performance.
          </p>
          <div className="igr-niches__grid">
            {niches.map((n) => (
              <article key={n.niche} className="igr-niche-card">
                <span className="igr-niche-card__emoji">{n.emoji}</span>
                <h3 className="igr-niche-card__title">{n.niche}</h3>
                <p className="igr-niche-card__tip">{n.tip}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ─── DEEP CONTENT: TECHNICAL GUIDE ─── */}
        <section className="igr-deep" id="caption-guide" aria-labelledby="igr-deep-title">
          <h2 id="igr-deep-title" className="igr-section-title">
            The Complete 2026 Guide to Instagram Reels Caption Strategy
          </h2>
          <p className="igr-section-sub">
            Everything a creator needs to know about captioning — from algorithm mechanics to typography science.
          </p>

          <div className="igr-deep__body">

            <article className="igr-deep__article">
              <h3>How Instagram's Algorithm Responds to Captioned Reels</h3>
              <p>
                Instagram measures engagement as a weighted combination of likes, comments, shares, saves, and —
                most importantly — <strong>watch time and completion rate</strong>. When a viewer finishes your
                Reel instead of swiping away at the 3-second mark, Instagram's ranking model treats this as a
                strong signal of quality. It then pushes the Reel to more accounts in the following 24–48 hours.
              </p>
              <p>
                Captions directly improve completion rate. A 2023 study by Social Media Examiner found that
                Reels with on-screen captions achieved a <strong>22% higher average completion rate</strong> than
                identical uncaptioned clips. Why? Because viewers who mute the video can still follow the story.
                They don't lose context, they don't get confused, and they don't swipe away. The caption becomes
                the audio for silent viewers — and silent viewers are the majority.
              </p>
              <p>
                There is also a secondary algorithmic benefit: <strong>Instagram indexes text overlays</strong> as
                part of its content understanding pipeline. When your captions contain keywords — "morning routine",
                "budget travel tips", "easy recipe" — Instagram's search algorithm can surface your Reel to users
                searching those exact phrases. This is a channel most creators haven't started optimising yet,
                making it a significant competitive advantage in 2026.
              </p>
            </article>

            <article className="igr-deep__article">
              <h3>Burned-In Captions vs Instagram's Native Caption Sticker</h3>
              <p>
                Instagram introduced its auto-caption sticker in 2021. It's convenient, but it comes with
                significant limitations that professional creators have already moved past:
              </p>
              <ul className="igr-deep__list">
                <li>
                  <strong>Viewers can tap to remove it.</strong> Instagram's caption sticker is an interactive
                  element — any viewer can tap it to toggle captions off. If someone recorded a screen-share of
                  your Reel, or if the sticker glitches, your captions disappear.
                </li>
                <li>
                  <strong>No custom styling.</strong> The native sticker has one font, one colour, and one position.
                  You cannot match it to your brand, your aesthetic, or your niche. Every creator using it looks
                  identical.
                </li>
                <li>
                  <strong>It doesn't work outside Instagram.</strong> If someone saves your Reel and watches it
                  in their camera roll, or shares it to WhatsApp, the sticker captions may not appear. Burned-in
                  captions are part of the video file itself — they go everywhere the video goes.
                </li>
                <li>
                  <strong>Accuracy is inconsistent.</strong> Instagram's on-device speech recognition still
                  struggles with accents, fast speech, and background music. Whisper AI — used by Scenith —
                  was trained on 680,000 hours of multilingual audio and dramatically outperforms Instagram's
                  in-app system.
                </li>
              </ul>
              <p>
                Professional creators who have tested both approaches consistently report that burned-in captions
                generate more saves, more shares, and more profile visits than native sticker captions. The reason
                is simple: burned-in captions look intentional, polished, and designed — not like an afterthought.
              </p>
            </article>

            <article className="igr-deep__article">
              <h3>Typography Psychology: What Font Choices Communicate to Reels Viewers</h3>
              <p>
                Font choice communicates personality before a viewer reads a single word. In the 0.3 seconds it
                takes for a Reel to load, your caption typography makes a first impression. Here is how different
                font styles map to audience perception:
              </p>
              <ul className="igr-deep__list">
                <li>
                  <strong>Bold sans-serif (Impact-style):</strong> Urgency, authority, confidence. Perfect for
                  motivation, finance, self-improvement, and sports content. This style dominates viral content
                  because it conveys energy.
                </li>
                <li>
                  <strong>Clean geometric sans (Futura-style):</strong> Modern, premium, minimal. Works for
                  tech, fashion, interior design, and lifestyle brands. Communicates taste and sophistication.
                </li>
                <li>
                  <strong>Rounded sans-serif:</strong> Friendly, approachable, warm. Ideal for parenting,
                  cooking, wellness, and community-focused content. Viewers feel welcomed rather than sold to.
                </li>
                <li>
                  <strong>Serif typefaces:</strong> Heritage, expertise, editorial gravitas. Used by journalists,
                  historians, book reviewers, and thought leaders. Stands out dramatically in a feed dominated by
                  sans-serif captions.
                </li>
              </ul>
              <p>
                The most important typographic rule for Reels: <strong>size matters more than style</strong>.
                Instagram Reels play at roughly 390×844px on a standard iPhone screen. Your caption needs to
                be large enough to read at arm's length without squinting. A minimum of 18–22sp equivalent is
                the practical baseline. Test on your own phone before posting — what looks fine on a laptop
                monitor often becomes unreadable at mobile size.
              </p>
            </article>

            <article className="igr-deep__article">
              <h3>Caption Timing: The Invisible Art That Separates Amateurs from Pros</h3>
              <p>
                Accurate timing is as important as accurate text. A caption that appears half a second too late —
                or disappears before the word is finished — creates cognitive dissonance. Viewers don't
                consciously notice it, but they feel a vague unease. Their brain expects text and audio to be
                synchronised, and when they aren't, engagement drops.
              </p>
              <p>
                Whisper AI produces word-level timestamps, allowing our system to sync captions to within
                50–100 milliseconds of the actual speech. For most content, this is imperceptible. The system
                also intelligently groups words into caption segments — rather than displaying one word at a time
                (which is jarring) or dumping an entire paragraph on screen (which is overwhelming), it creates
                natural phrase-length segments that match how humans process speech.
              </p>
              <p>
                For Reels specifically, shorter segments (3–5 words per caption) tend to perform better than
                longer ones. Short segments create <strong>visual rhythm</strong> — the captions pulsing in time
                with speech gives the video kinetic energy even when muted. This is a technique borrowed from
                viral TikTok editing that has now become standard in high-performing Reels.
              </p>
            </article>

            <article className="igr-deep__article">
              <h3>Colour Contrast and WCAG Compliance for Instagram Reels</h3>
              <p>
                Web Content Accessibility Guidelines (WCAG) 2.1 require a minimum contrast ratio of 4.5:1 for
                normal text and 3:1 for large text. While Instagram doesn't legally require WCAG compliance for
                Reels, adhering to these standards has a practical benefit beyond ethics: high-contrast captions
                are readable in all lighting conditions, on all screen brightness settings, and on every
                generation of mobile display — from cheap Android phones to OLED iPhones.
              </p>
              <p>
                The combinations with the highest real-world readability for video subtitles:
              </p>
              <ul className="igr-deep__list">
                <li><strong>White text + 2–3px black stroke:</strong> Works on every background. Industry-standard.</li>
                <li><strong>Yellow (#FFE14D) text + black background pill:</strong> Cinema-standard for maximum legibility.</li>
                <li><strong>Black text + white background pill:</strong> Clean, modern, works for lifestyle and minimal aesthetics.</li>
                <li><strong>White text + 60% opacity dark pill:</strong> Allows background to show through while maintaining contrast.</li>
              </ul>
              <p>
                Avoid red-on-green or blue-on-purple combinations — these are effectively invisible to
                approximately 8% of men who have colour-vision deficiency. Even if your aesthetic calls for bold
                colour, add a text stroke or shadow to ensure readability for all viewers.
              </p>
            </article>

            <article className="igr-deep__article">
              <h3>Multi-Language Captioning: Unlock a Global Instagram Audience</h3>
              <p>
                Instagram has over 2 billion monthly active users across 130+ countries. The English-speaking
                internet represents less than 25% of global users. Creators who caption in their native language
                and <em>also</em> caption in English (or Spanish, Hindi, Arabic, or Portuguese) have access to
                an audience 4–8x larger than their local market.
              </p>
              <p>
                The strategy is straightforward: use Scenith to generate accurate captions in your native language,
                then use a translation service to create caption sets in your target languages. Create separate
                Reel versions for each language market. This content localisation strategy is exactly what
                large media companies spend millions of dollars doing — and AI captioning tools make it accessible
                to individual creators for free.
              </p>
              <p>
                Our AI supports 50+ languages including all major South Asian languages (Hindi, Tamil, Telugu,
                Kannada, Bengali, Gujarati, Marathi), all Romance languages, Arabic, Japanese, Korean, and
                Mandarin. The language is auto-detected from your audio — no settings to configure, no language
                to specify manually.
              </p>
            </article>

            <article className="igr-deep__article">
              <h3>Posting Strategy: When and How to Deploy Captioned Reels for Maximum Reach</h3>
              <p>
                A perfectly captioned Reel posted at the wrong time reaches nobody. The Instagram algorithm
                prioritises fresh content in the first 30–60 minutes post-publication. During this window, your
                captioned Reel gets pushed to a test audience. If that test audience completes the video, shares
                it, or saves it, Instagram expands distribution exponentially.
              </p>
              <p>
                Best posting windows in 2026, by time zone (IST for Indian creators):
              </p>
              <ul className="igr-deep__list">
                <li><strong>7:00–9:00 AM:</strong> Morning commute scrollers. Captions are essential — they're on public transport with volume off.</li>
                <li><strong>12:00–2:00 PM:</strong> Lunch break. Quick consumption, short Reels preferred.</li>
                <li><strong>7:00–10:00 PM:</strong> Prime time. Highest volume, most competition but also most active users.</li>
              </ul>
              <p>
                Combine timing with caption hooks. Your first caption segment (the first 1–2 seconds of text)
                is equivalent to a headline. Phrases like <em>"I tried this for 30 days and..."</em> or
                <em>"Nobody talks about this but..."</em> create pattern interrupts that stop the scroll
                immediately. The hook in your captions does the same job as a thumbnail — it earns the
                next 3 seconds of attention, and then the next 3, until the Reel is complete.
              </p>
            </article>

          </div>
        </section>

        {/* ─── COMPARISON TABLE ─── */}
        <section className="igr-compare" id="tool-comparison" aria-labelledby="igr-compare-title">
          <h2 id="igr-compare-title" className="igr-section-title">
            Scenith vs CapCut vs Instagram's Built-In Captions
          </h2>
          <p className="igr-section-sub">
            A no-fluff feature breakdown of the top tools creators use to caption Reels in 2026.
          </p>
          <div className="igr-compare__table-wrap">
            <table className="igr-compare__table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>
                    <span className="igr-compare__brand igr-compare__brand--scenith">Scenith</span>
                  </th>
                  <th>
                    <span className="igr-compare__brand">CapCut</span>
                  </th>
                  <th>
                    <span className="igr-compare__brand">Instagram Built-In</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row) => (
                  <tr key={row.feature}>
                    <td>{row.feature}</td>
                    <td className={row.scenith ? 'igr-compare__yes' : 'igr-compare__no'}>
                      {row.scenith ? '✅' : '❌'}
                    </td>
                    <td className={row.capcut ? 'igr-compare__yes' : 'igr-compare__no'}>
                      {row.capcut ? '✅' : '❌'}
                    </td>
                    <td className={row.instaBuiltIn ? 'igr-compare__yes' : 'igr-compare__no'}>
                      {row.instaBuiltIn ? '✅' : '❌'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="igr-compare__note">
            * CapCut requires app install and has platform-specific watermarks on free exports.
            Instagram's built-in caption sticker cannot be customised and is removable by viewers.
          </p>
        </section>

        {/* ─── MID-PAGE CTA ─── */}
        <section className="igr-midcta" aria-label="Mid page call to action">
          <div className="igr-midcta__inner">
            <h2 className="igr-midcta__title">
              Your next Reel is 85% more likely to be watched completely — with captions.
            </h2>
            <p className="igr-midcta__sub">
              Stop posting silent Reels into the void. Add professional captions in 2 minutes, free.
            </p>
            <a href={TOOL_URL} className="igr-cta-primary igr-cta-primary--large">
              <span className="igr-cta-icon">✦</span>
              Add Subtitles to My Reel — Free
              <span className="igr-cta-arrow">→</span>
            </a>
          </div>
        </section>

        {/* ─── PAA ─── */}
        <section className="igr-paa" id="people-also-ask" aria-labelledby="igr-paa-title">
          <h2 id="igr-paa-title" className="igr-section-title">
            People Also Ask About Instagram Reels Subtitles
          </h2>
          <div className="igr-paa__grid">
            <div className="igr-paa-card">
              <h3>Do captions actually increase Reel views on Instagram?</h3>
              <p>
                Yes, significantly. Meta's own creator studies and third-party experiments consistently
                show 30–40% higher view counts on captioned Reels. The mechanism: captions improve
                completion rates, which signals quality to the algorithm, which boosts distribution.
                More distribution means more views — it is a compounding loop that starts with a
                one-time 2-minute investment per Reel.
              </p>
            </div>
            <div className="igr-paa-card">
              <h3>What is the best free app to add captions to Instagram Reels?</h3>
              <p>
                For browser-based use (no download), Scenith is the strongest free option — no watermark,
                50+ languages, custom styling, 4K export. For mobile-first editing, CapCut is popular
                but adds watermarks on free exports. Instagram's native caption sticker is the
                fastest option but offers zero customisation and can be removed by viewers.
              </p>
            </div>
            <div className="igr-paa-card">
              <h3>How do I add subtitles to Instagram Reels without CapCut?</h3>
              <p>
                Upload your Reel video to Scenith at scenith.in/tools/add-subtitles-to-videos.
                The AI transcribes the audio and generates synced captions in under 2 minutes.
                Customise the style, download the MP4 with burned-in captions, and upload to Instagram.
                No CapCut required, no app install, works from any browser on any device.
              </p>
            </div>
            <div className="igr-paa-card">
              <h3>Can I add captions to Reels already posted on Instagram?</h3>
              <p>
                You cannot retroactively add burned-in captions to a published Reel without
                re-uploading. The workflow is: download your original video, add captions with
                Scenith, delete the old post, and re-upload with captions. Instagram allows deletion
                and re-posting without penalty — all engagement resets, but the captioned version
                will typically outperform the original over time.
              </p>
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section className="igr-faq" id="faq" aria-labelledby="igr-faq-title">
          <h2 id="igr-faq-title" className="igr-section-title">
            Frequently Asked Questions — Subtitle Generator for Instagram Reels
          </h2>
          <div className="igr-faq__grid">
            {faqData.map((item) => (
              <article key={item.q} className="igr-faq-item">
                <h3 className="igr-faq-item__q">{item.q}</h3>
                <p className="igr-faq-item__a">{item.a}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ─── TESTIMONIALS ─── */}
        <section className="igr-testimonials" aria-labelledby="igr-test-title">
          <h2 id="igr-test-title" className="igr-section-title">
            What Creators Say About Scenith Reels Captions
          </h2>
          <div className="igr-testimonials__grid">
            {[
              {
                quote: "My Reels views literally doubled the week I started adding captions with Scenith. The styling options are 10x better than CapCut and it doesn't add a watermark.",
                name: 'Priya Sharma',
                handle: '@priyacreates',
                niche: 'Lifestyle & Wellness',
              },
              {
                quote: "I run a cooking channel. Adding ingredient names and steps as captions turned my silent scrollers into actual recipe savers. Saves went up 3x in a month.",
                name: 'Rohan Mehta',
                handle: '@rohansfoodlab',
                niche: 'Food Creator',
              },
              {
                quote: "As someone with hearing loss, I genuinely appreciate creators who burn captions in properly. Scenith makes it easy enough that there's no excuse not to.",
                name: 'Anita Rao',
                handle: '@anitalistens',
                niche: 'Accessibility Advocate',
              },
            ].map((t) => (
              <blockquote key={t.handle} className="igr-testimonial-card">
                <p className="igr-testimonial-card__quote">"{t.quote}"</p>
                <footer className="igr-testimonial-card__footer">
                  <strong>{t.name}</strong>
                  <span>{t.handle} · {t.niche}</span>
                  <span className="igr-testimonial-card__stars" aria-label="5 stars">⭐⭐⭐⭐⭐</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        {/* ─── FINAL CTA ─── */}
        <section className="igr-finalcta" aria-labelledby="igr-finalcta-title">
          <div className="igr-finalcta__inner">
            <h2 id="igr-finalcta-title" className="igr-finalcta__title">
              Ready to Make Every Reel Unmissable?
            </h2>
            <p className="igr-finalcta__sub">
              Join 1,500+ creators who've already unlocked higher reach, better retention,
              and a wider audience — just by adding captions to their Reels.
              Free. No watermark. Takes 2 minutes.
            </p>
            <a href={TOOL_URL} className="igr-cta-primary igr-cta-primary--large igr-cta-primary--glow">
              <span className="igr-cta-icon">✦</span>
              Generate My Reels Subtitles Now
              <span className="igr-cta-arrow">→</span>
            </a>
            <div className="igr-finalcta__trust">
              <span>✅ 100% Free</span>
              <span>🔒 No watermark</span>
              <span>⚡ 2-minute processing</span>
              <span>🌍 50+ languages</span>
              <span>📱 Works from mobile browser</span>
            </div>
          </div>
        </section>

        {/* ─── RELATED TOOLS ─── */}
        <section className="igr-related" aria-labelledby="igr-related-title">
          <h2 id="igr-related-title" className="igr-section-title">
            More AI Tools for Creators
          </h2>
          <div className="igr-related__grid">
            <Link href="/tools/add-subtitles-to-videos" className="igr-related-card">
              <span className="igr-related-card__icon">🎬</span>
              <h3>AI Subtitle Generator</h3>
              <p>Full subtitle editor for any video — films, YouTube, podcasts, ads.</p>
            </Link>
            <Link href="/tools/ai-voice-generation" className="igr-related-card">
              <span className="igr-related-card__icon">🎙️</span>
              <h3>AI Voice Generator</h3>
              <p>Create natural-sounding voiceovers for Reels with zero recording gear.</p>
            </Link>
            <Link href="/tools/image-editing" className="igr-related-card">
              <span className="igr-related-card__icon">🖼️</span>
              <h3>AI Image Editor</h3>
              <p>Design Reel thumbnails and cover images that stop the scroll.</p>
            </Link>
          </div>
        </section>

      </div>
    </>
  );
}