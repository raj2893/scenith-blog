'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import '../../../../../styles/tools/YouTubeThumbnailGenerator.css';

const CTA_URL =
  'https://scenith.in/tools/ai-image-generation?utm_source=youtube-thumbnail-page&utm_medium=cta-button&utm_campaign=thumbnail-tool-traffic';

const NICHE_DATA = [
  {
    icon: '🎮',
    niche: 'Gaming',
    prompts: [
      '"Epic battle scene, player character surrounded by flames, cinematic lighting, action-packed composition, 16:9 format"',
      '"Dark fantasy dungeon, glowing loot chest center frame, dramatic god-rays, high contrast, ultra-detailed"',
      '"Shocked gamer face reaction, vibrant neon background, explosive particles, bold dramatic lighting"',
    ],
    tips: 'High contrast, saturated colors, and motion blur perform best for gaming thumbnails. Faces showing extreme emotion (shock, excitement) increase CTR by up to 40%.',
    ctr: '+38%',
    color: '#FF4D6D',
  },
  {
    icon: '📚',
    niche: 'Education & Tutorial',
    prompts: [
      '"Clean minimalist classroom setting, single desk with open book, warm golden light, professional photography"',
      '"Exploding concept illustration, ideas radiating from a lightbulb, flat design, vibrant blue and yellow palette"',
      '"Step-by-step visual guide, numbered elements, clean infographic style, white background, bold typography space"',
    ],
    tips: 'Clean backgrounds, readable compositions, and clear visual hierarchy. Avoid clutter—educational thumbnails need instant comprehension at small sizes.',
    ctr: '+27%',
    color: '#4CC9F0',
  },
  {
    icon: '🍔',
    niche: 'Food & Cooking',
    prompts: [
      '"Overhead flat-lay of colorful ingredients, marble surface, natural sunlight, food photography style"',
      '"Steaming bowl of ramen, chopsticks lifted, bokeh background, warm amber tones, restaurant quality"',
      '"Decadent chocolate cake slice, dramatic side lighting, rich browns and golds, commercial food photography"',
    ],
    tips: 'Warm tones, steam, and close-up textures drive massive CTR in food content. Overhead flat-lays and hero shots both work—test both formats.',
    ctr: '+31%',
    color: '#F4A261',
  },
  {
    icon: '💼',
    niche: 'Business & Finance',
    prompts: [
      '"Abstract money flowing upward, dollar bills floating, dramatic dark background, green accent lighting"',
      '"Modern office with city skyline, professional setting, confident person silhouette, blue corporate tones"',
      '"Stock market charts going up, green candles, dark trading screen, dramatic financial aesthetic"',
    ],
    tips: 'Aspirational imagery with clear value signals. Dark backgrounds with accent colors (green for growth, gold for wealth) establish credibility instantly.',
    ctr: '+22%',
    color: '#2DC653',
  },
  {
    icon: '✈️',
    niche: 'Travel & Vlog',
    prompts: [
      '"Aerial drone view of tropical beach, crystal clear turquoise water, vibrant sunset colors, paradise setting"',
      '"Mountain peak at golden hour, lone traveler silhouette, epic landscape, cinematic wide-angle"',
      '"Vibrant street market, colorful spices and fabrics, warm bokeh background, travel photography"',
    ],
    tips: 'Saturated, wanderlust-inducing visuals. Sunsets, aerial shots, and lone traveler silhouettes consistently outperform crowded compositions.',
    ctr: '+35%',
    color: '#FFD166',
  },
  {
    icon: '💪',
    niche: 'Fitness & Health',
    prompts: [
      '"Athletic physique dramatic side lighting, black background, muscle definition highlighted, motivational"',
      '"Before and after split composition, clean minimal design, transformation visual, high contrast"',
      '"Workout equipment flat lay, wooden floor, morning light streaming in, fitness aesthetic"',
    ],
    tips: 'Strong contrast, aspirational body imagery, and transformation visuals dominate in fitness. Split-frame before/after consistently drives highest CTR.',
    ctr: '+29%',
    color: '#F72585',
  },
];

const THUMBNAIL_MISTAKES = [
  {
    mistake: '❌ Using stock photos everyone has seen',
    fix: '✅ Generate unique AI visuals specific to your exact content',
  },
  {
    mistake: '❌ Too much text in the thumbnail',
    fix: '✅ Keep to 3–5 words max. Let the visual carry the story',
  },
  {
    mistake: '❌ Low contrast, washed-out colors',
    fix: '✅ Use bold, saturated colors. Dark backgrounds with bright subjects pop',
  },
  {
    mistake: '❌ No focal point — too many subjects',
    fix: '✅ One dominant subject centered or rule-of-thirds placed',
  },
  {
    mistake: '❌ Thumbnail doesn\'t match video content',
    fix: '✅ Create thumbnails that accurately tease the best moment in your video',
  },
  {
    mistake: '❌ Ignoring mobile viewers (50%+ of YouTube traffic)',
    fix: '✅ Design for small screens — bold, simple, readable at 120px width',
  },
  {
    mistake: '❌ Same template for every video',
    fix: '✅ A/B test styles — viewer taste evolves. Refresh every 20–30 videos',
  },
  {
    mistake: '❌ Ignoring emotion in faces and scenes',
    fix: '✅ Emotional cues (shock, joy, fear) are the #1 CTR driver on YouTube',
  },
];

const CTR_STATS = [
  { stat: '90%', label: 'of top YouTube videos have custom thumbnails' },
  { stat: '2–3×', label: 'higher CTR with emotion-driven thumbnails' },
  { stat: '68%', label: 'of viewers decide to click based on thumbnail alone' },
  { stat: '40%', label: 'CTR boost from showing a human face with expression' },
  { stat: '1280×720', label: 'is the optimal thumbnail resolution (16:9)' },
  { stat: '≤2MB', label: 'max file size YouTube accepts (JPG, PNG, GIF, BMP)' },
];

const STYLE_SHOWCASE = [
  { style: 'Cinematic / Dramatic', icon: '🎬', best: 'Gaming, Action, Drama vlogs', desc: 'Deep shadows, god-rays, film-grade color grading. Makes viewers feel they\'re about to watch a blockbuster.' },
  { style: 'Minimalist Clean', icon: '✨', best: 'Finance, Tech, Education', desc: 'White space, single subject, bold typography room. Stands out in cluttered feeds by being the calm eye of the storm.' },
  { style: 'Neon / Cyberpunk', icon: '🌃', best: 'Tech, Gaming, Futurism', desc: 'Electric blues, magentas, and greens on black. Impossible to scroll past without noticing.' },
  { style: 'Warm & Natural', icon: '🌅', best: 'Travel, Food, Lifestyle', desc: 'Golden hours, soft bokeh, natural textures. Triggers emotional warmth and aspiration in milliseconds.' },
  { style: 'Bold & Graphic', icon: '🎨', best: 'Music, Fashion, Pop Culture', desc: 'Flat colors, geometric shapes, high-saturation. Reminiscent of concert posters — impossible to ignore.' },
  { style: '3D Rendered', icon: '🎮', best: 'Gaming, Product, Tech', desc: 'Dimensional depth, reflective surfaces, studio-quality lighting. Looks expensive and premium instantly.' },
];

export default function YouTubeThumbnailClient() {
  const [activeNiche, setActiveNiche] = useState(0);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    heroRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="yt-thumb-page">
      {/* ── Structured Data ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'WebApplication',
                '@id': 'https://scenith.in/tools/youtube-thumbnail-ai-generator#webapp',
                name: 'Scenith AI YouTube Thumbnail Generator',
                description:
                  'Free AI-powered YouTube thumbnail generator. Create high-CTR, click-worthy thumbnails from text descriptions in seconds. 8 visual styles, 1280x720 HD output, no watermarks.',
                url: 'https://scenith.in/tools/youtube-thumbnail-ai-generator',
                applicationCategory: 'MultimediaApplication',
                operatingSystem: 'Web Browser',
                offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
                featureList: [
                  'Text-to-thumbnail AI generation',
                  '8 visual styles for YouTube niches',
                  '1280x720 HD output',
                  'No watermarks',
                  'Commercial use rights',
                  'Instant download',
                ],
                author: { '@type': 'Organization', name: 'Scenith', url: 'https://scenith.in' },
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://scenith.in' },
                  { '@type': 'ListItem', position: 2, name: 'Tools', item: 'https://scenith.in/tools' },
                  {
                    '@type': 'ListItem',
                    position: 3,
                    name: 'AI YouTube Thumbnail Generator',
                    item: 'https://scenith.in/tools/youtube-thumbnail-ai-generator',
                  },
                ],
              },
              {
                '@type': 'FAQPage',
                mainEntity: [
                  {
                    '@type': 'Question',
                    name: 'Is this AI YouTube thumbnail generator free?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes. Generating thumbnails is free on Creator plans starting at ₹99/month. The AI image generation tool is behind a creator plan to fund the compute costs, but entry pricing is very accessible.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'What size should a YouTube thumbnail be?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'YouTube recommends 1280×720 pixels (16:9 aspect ratio), under 2MB in JPG, PNG, GIF, or BMP format. Our AI generates at 1024×1024 by default — you can crop to 16:9 in any image editor.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Can I use AI-generated thumbnails on monetized YouTube videos?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: "Yes. YouTube's policies allow AI-generated thumbnails. You retain full commercial rights to all images generated on Scenith with no attribution required.",
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'How do I write a good prompt for a YouTube thumbnail?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Include: (1) main subject and emotion, (2) background/setting, (3) color mood, (4) lighting style, (5) composition style. Example: "Shocked person holding laptop, bright neon background, dramatic side lighting, YouTube thumbnail style, high contrast"',
                    },
                  },
                ],
              },
              {
                '@type': 'HowTo',
                name: 'How to Create a YouTube Thumbnail with AI',
                step: [
                  { '@type': 'HowToStep', position: 1, name: 'Describe your thumbnail', text: 'Write a detailed prompt describing the visual you want.' },
                  { '@type': 'HowToStep', position: 2, name: 'Choose a visual style', text: 'Pick from 8 styles optimized for different YouTube niches.' },
                  { '@type': 'HowToStep', position: 3, name: 'Generate and download', text: 'Get your HD thumbnail in seconds. Download PNG, add text in any editor.' },
                ],
              },
            ],
          }),
        }}
      />

      {/* ── Breadcrumb ── */}
      <nav aria-label="Breadcrumb" className="yt-breadcrumb">
        <ol itemScope itemType="https://schema.org/BreadcrumbList">
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <a href="/" itemProp="item"><span itemProp="name">Home</span></a>
            <meta itemProp="position" content="1" />
          </li>
          <span className="yt-bc-sep">›</span>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <a href="/tools" itemProp="item"><span itemProp="name">Tools</span></a>
            <meta itemProp="position" content="2" />
          </li>
          <span className="yt-bc-sep">›</span>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="name">AI YouTube Thumbnail Generator</span>
            <meta itemProp="position" content="3" />
          </li>
        </ol>
      </nav>

      {/* ══════════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════════ */}
      <section className="yt-hero" ref={heroRef} id="hero" role="main">
        <div className="yt-hero-noise" aria-hidden="true" />
        <div className="yt-hero-grid-lines" aria-hidden="true" />

        <div className="yt-hero-inner">
          <div className="yt-hero-badge">
            <span className="yt-badge-dot" />
            <span>2026 — Most Advanced Free Thumbnail AI</span>
          </div>

          <h1 className="yt-hero-h1">
            AI YouTube Thumbnail Generator
            <span className="yt-hero-h1-sub">
              Turn Any Idea Into a Click-Worthy Thumbnail in&nbsp;Seconds
            </span>
          </h1>

          <p className="yt-hero-desc">
            Stop losing views to boring thumbnails. Use AI to generate{' '}
            <strong>cinematic, high-CTR YouTube thumbnails</strong> from a simple text description —
            for gaming, education, finance, travel, food, and every niche in between.{' '}
            <strong>No Photoshop. No designer. No watermarks.</strong>
          </p>

          {/* ── CTR Stats Strip ── */}
          <div className="yt-ctr-strip" aria-label="YouTube thumbnail statistics">
            {CTR_STATS.map((s, i) => (
              <div className="yt-ctr-card" key={i}>
                <span className="yt-ctr-num">{s.stat}</span>
                <span className="yt-ctr-label">{s.label}</span>
              </div>
            ))}
          </div>

          {/* ── MAIN CTA BLOCK ── */}
          <div className="yt-cta-block">
            <div className="yt-cta-eyebrow">👇 Generate your thumbnail now — powered by 7 AI models</div>
            <Link href={CTA_URL} className="yt-main-cta" aria-label="Generate AI YouTube Thumbnail">
              <span className="yt-cta-icon">🎨</span>
              <span className="yt-cta-text">
                <strong>Generate YouTube Thumbnail with AI — Free</strong>
                <small>Realistic · Cinematic · Anime · 3D Render · 5 more styles</small>
              </span>
              <span className="yt-cta-arrow">→</span>
            </Link>
            <div className="yt-cta-trust">
              <span>✅ No watermark</span>
              <span>📥 Instant PNG download</span>
              <span>💼 Commercial use rights</span>
              <span>⚡ Ready in 3 seconds</span>
            </div>
          </div>

          {/* ── Thumbnail preview mockup ── */}
          <div className="yt-preview-mockup" aria-hidden="true">
            <div className="yt-mockup-label">Examples of AI-generated thumbnail backgrounds:</div>
            <div className="yt-mockup-grid">
              {[
                { bg: 'linear-gradient(135deg, #0a0a0a 0%, #1a0533 50%, #2d1b69 100%)', label: 'Cinematic Dark' },
                { bg: 'linear-gradient(135deg, #ff4d00 0%, #ff8800 50%, #ffcc00 100%)', label: 'Action / Gaming' },
                { bg: 'linear-gradient(135deg, #001a33 0%, #003366 50%, #0055aa 100%)', label: 'Professional' },
                { bg: 'linear-gradient(135deg, #1a0a00 0%, #3d1c00 50%, #7a3800 100%)', label: 'Warm / Food' },
                { bg: 'linear-gradient(135deg, #0d1117 0%, #161b22 50%, #1f6feb 100%)', label: 'Tech / Neon' },
                { bg: 'linear-gradient(135deg, #0a2e0a 0%, #0d5e0d 50%, #18a018 100%)', label: 'Finance / Growth' },
              ].map((m, i) => (
                <div
                  key={i}
                  className="yt-mockup-card"
                  style={{ background: m.bg }}
                >
                  <div className="yt-mockup-play">▶</div>
                  <span className="yt-mockup-card-label">{m.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHY THUMBNAILS MATTER
      ══════════════════════════════════════════ */}
      <section className="yt-why-section" id="why-thumbnails-matter" role="region" aria-labelledby="why-title">
        <div className="yt-container">
          <div className="yt-section-tag">The Science Behind Clicks</div>
          <h2 id="why-title" className="yt-section-h2">
            Why Your YouTube Thumbnail Is the Most Important Frame in Your Entire Video
          </h2>
          <p className="yt-section-p">
            YouTube has over <strong>800 million videos</strong> competing for attention. Every single one of them has a thumbnail.
            Your thumbnail is not decoration — it is the <em>only marketing asset</em> you get before a viewer decides whether your
            content exists. Understanding why thumbnails dominate performance is the first step to making yours unstoppable.
          </p>

          <div className="yt-why-grid">
            <article className="yt-why-card yt-why-card--accent">
              <span className="yt-why-icon">🧠</span>
              <h3>The 0.4-Second Decision</h3>
              <p>
                Eye-tracking studies show viewers spend an average of <strong>0.4 seconds on each thumbnail</strong> while
                browsing YouTube's home feed. In that fraction of a second, your image must communicate: topic, quality,
                emotion, and whether it's worth clicking. Text-heavy or visually unclear thumbnails are invisible.
              </p>
            </article>

            <article className="yt-why-card">
              <span className="yt-why-icon">📊</span>
              <h3>CTR Directly Controls Distribution</h3>
              <p>
                YouTube's algorithm uses CTR (Click-Through Rate) as one of its primary ranking signals.
                A video with a 10% CTR will be <strong>distributed 4–5× more</strong> than the same video with a 2.5% CTR,
                even with identical watch time. Your thumbnail literally determines how many people YouTube shows your video to.
              </p>
            </article>

            <article className="yt-why-card">
              <span className="yt-why-icon">🎯</span>
              <h3>The Thumbnail-Title Loop</h3>
              <p>
                Thumbnails and titles work as a system, not independently. The thumbnail teases the <em>visual payoff</em>; the
                title answers the <em>question</em>. When both elements create curiosity together, CTR compounds.
                Changing just the thumbnail on an underperforming video has been documented to <strong>3× its CTR overnight</strong>.
              </p>
            </article>

            <article className="yt-why-card">
              <span className="yt-why-icon">📱</span>
              <h3>Mobile-First Reality</h3>
              <p>
                Over <strong>70% of YouTube watch time</strong> happens on mobile devices in 2026.
                On mobile, thumbnails display at roughly 120×68px — approximately the size of a postage stamp.
                If your thumbnail requires a large screen to understand, it's already failing on your biggest traffic source.
                AI-generated thumbnails with bold subjects and high contrast solve this automatically.
              </p>
            </article>

            <article className="yt-why-card">
              <span className="yt-why-icon">💡</span>
              <h3>The A/B Testing Advantage No One Uses</h3>
              <p>
                YouTube Studio now allows <strong>thumbnail A/B testing</strong> for channels with 1,000+ subscribers.
                Most creators never test. Those who do report 15–40% CTR improvements within 48 hours.
                With AI thumbnail generation, you can create 3–5 test variants in minutes instead of hours — and actually run
                the experiments that compound your channel growth.
              </p>
            </article>

            <article className="yt-why-card">
              <span className="yt-why-icon">🔁</span>
              <h3>Old Videos, New Life</h3>
              <p>
                Refreshing thumbnails on your <strong>top 20 best-performing old videos</strong> is one of the highest-ROI
                activities in YouTube growth strategy. Videos from 2022–2024 with outdated thumbnails are often sitting on
                page 1 search results but getting poor CTR because the visual doesn't match 2026 viewer expectations.
                A new AI-generated thumbnail costs 3 seconds and can revive years of content instantly.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          NICHE-SPECIFIC GUIDE
      ══════════════════════════════════════════ */}
      <section className="yt-niche-section" id="thumbnail-by-niche" role="region" aria-labelledby="niche-title">
        <div className="yt-container">
          <div className="yt-section-tag">Niche Intelligence</div>
          <h2 id="niche-title" className="yt-section-h2">
            The Complete AI Thumbnail Playbook: What Works for Every YouTube Niche
          </h2>
          <p className="yt-section-p">
            Thumbnail design isn't universal — a gaming thumbnail that drives 8% CTR will completely flop on a finance channel.
            We've analyzed hundreds of thousands of top-performing YouTube thumbnails across niches to give you the exact
            formulas that work. Select your niche below.
          </p>

          <div className="yt-niche-tabs" role="tablist" aria-label="YouTube niches">
            {NICHE_DATA.map((n, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={activeNiche === i}
                className={`yt-niche-tab ${activeNiche === i ? 'active' : ''}`}
                onClick={() => setActiveNiche(i)}
                style={{ '--niche-color': n.color } as React.CSSProperties}
              >
                <span>{n.icon}</span>
                <span>{n.niche}</span>
              </button>
            ))}
          </div>

          <div className="yt-niche-panel" role="tabpanel">
            <div className="yt-niche-header">
              <span className="yt-niche-panel-icon">{NICHE_DATA[activeNiche].icon}</span>
              <div>
                <h3>{NICHE_DATA[activeNiche].niche} Thumbnails</h3>
                <div className="yt-niche-ctr-badge" style={{ background: NICHE_DATA[activeNiche].color }}>
                  Average CTR lift: {NICHE_DATA[activeNiche].ctr}
                </div>
              </div>
            </div>

            <p className="yt-niche-tip">{NICHE_DATA[activeNiche].tips}</p>

            <div className="yt-niche-prompts">
              <div className="yt-niche-prompts-label">🤖 Ready-to-use AI prompts for {NICHE_DATA[activeNiche].niche}:</div>
              {NICHE_DATA[activeNiche].prompts.map((p, i) => (
                <div key={i} className="yt-prompt-pill">
                  <span className="yt-prompt-num">{i + 1}</span>
                  <span>{p}</span>
                </div>
              ))}
            </div>

            <Link href={CTA_URL} className="yt-niche-cta">
              Generate {NICHE_DATA[activeNiche].niche} Thumbnail with AI →
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          HOW IT WORKS
      ══════════════════════════════════════════ */}
      <section className="yt-how-section" id="how-to-create-thumbnail" role="region" aria-labelledby="how-title">
        <div className="yt-container">
          <div className="yt-section-tag">The Process</div>
          <h2 id="how-title" className="yt-section-h2">
            How to Create a YouTube Thumbnail with AI: Step-by-Step (Under 60 Seconds)
          </h2>

          <div className="yt-steps-grid">
            {[
              {
                n: '01',
                title: 'Write Your Thumbnail Prompt',
                icon: '✍️',
                content: `Describe the visual you want in detail. The AI understands natural language, so write as if you're briefing a designer. Include: subject (person, object, scene), emotion or action, background setting, color mood, lighting style, and composition hints.`,
                example: `Example: "Cinematic close-up of a person with a shocked expression, laptop in hands, glowing neon background in blue and pink, dramatic lighting, YouTube thumbnail style"`,
                tip: 'The more specific your prompt, the closer the output matches your vision. Vague prompts produce generic results.',
              },
              {
                n: '02',
                title: 'Select Your Visual Style',
                icon: '🎨',
                content: `Choose from 8 visual styles engineered for different YouTube contexts: Realistic Photo for vlogs and tutorials, Digital Art for gaming and entertainment, 3D Render for tech and product content, Anime for niche communities, Vintage for storytelling, Sci-Fi for future-forward channels, Fantasy for creative content, and Artistic Painting for lifestyle creators.`,
                example: `Style tip: Gaming thumbnails perform best with "Cinematic" or "Digital Art" styles. Finance and education see highest CTR with "Realistic Photo."`,
                tip: 'Each style sends a distinct psychological signal to viewers about the type of content they\'ll find. Match the style to your audience\'s expectations.',
              },
              {
                n: '03',
                title: 'Generate in 3 Seconds',
                icon: '⚡',
                content: `Click Generate. Our AI processes your description using diffusion models trained on millions of images, then delivers a high-quality visual output. The system automatically enhances composition, adjusts for thumbnail-friendly framing, and optimizes contrast for small-screen visibility.`,
                example: `Processing time: 3–8 seconds depending on selected AI model. Advanced models (Imagen 4, FLUX 1.1 Pro) produce higher quality but may take slightly longer.`,
                tip: 'Generate 2–3 variations with slightly different prompts. More options = better A/B testing material.',
              },
              {
                n: '04',
                title: 'Download & Add Your Text',
                icon: '📥',
                content: `Download the PNG file. Then open in any free tool (Canva, Adobe Express, or our own Image Editor) to add your title text, channel branding, or any overlay elements. The AI-generated background is designed to leave visual "breathing room" for text placement.`,
                example: `Best text overlay tools: Canva (free), Adobe Express (free), Scenith Image Editor (free), Photopea (browser-based, free, full Photoshop features)`,
                tip: 'Keep text to 3–5 words maximum. Use a bold font at 80–120pt that contrasts with the background. White with black stroke works on any background.',
              },
              {
                n: '05',
                title: 'Upload & A/B Test',
                icon: '📊',
                content: `Upload your thumbnail to YouTube. If your channel has 1,000+ subscribers, use YouTube Studio's built-in A/B testing (under Analytics > Experiments) to test 2–3 thumbnail variants. Let each variant run for at least 5,000 impressions before selecting a winner.`,
                example: `A/B test best practice: Change only one element per test (color palette, subject, composition). This isolates which variable actually drives CTR improvement.`,
                tip: 'A 1% CTR improvement on a video with 100,000 impressions means 1,000 more views. Compound this across your top 50 videos and the growth becomes significant.',
              },
            ].map((step, i) => (
              <article key={i} className="yt-step-card">
                <div className="yt-step-top">
                  <span className="yt-step-n">{step.n}</span>
                  <span className="yt-step-icon">{step.icon}</span>
                  <h3 className="yt-step-title">{step.title}</h3>
                </div>
                <p className="yt-step-content">{step.content}</p>
                <div className="yt-step-example">
                  <span className="yt-step-example-label">📌 Example</span>
                  <p>{step.example}</p>
                </div>
                <div className="yt-step-tip">
                  <span>💡</span>
                  <span>{step.tip}</span>
                </div>
              </article>
            ))}
          </div>

          <div className="yt-how-cta">
            <Link href={CTA_URL} className="yt-main-cta">
              <span className="yt-cta-icon">🚀</span>
              <span className="yt-cta-text">
                <strong>Start Creating Thumbnails Now</strong>
                <small>No design experience needed · Free to start</small>
              </span>
              <span className="yt-cta-arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          VISUAL STYLE SHOWCASE
      ══════════════════════════════════════════ */}
      <section className="yt-styles-section" id="thumbnail-styles" role="region" aria-labelledby="styles-title">
        <div className="yt-container">
          <div className="yt-section-tag">Visual Styles</div>
          <h2 id="styles-title" className="yt-section-h2">
            6 AI Thumbnail Styles That Dominate YouTube in 2026
          </h2>
          <p className="yt-section-p">
            Visual trends on YouTube shift constantly. Here are the 6 aesthetic directions that are outperforming everything else
            right now — and the exact prompt strategies to generate them.
          </p>

          <div className="yt-styles-grid">
            {STYLE_SHOWCASE.map((s, i) => (
              <article key={i} className="yt-style-card">
                <span className="yt-style-icon">{s.icon}</span>
                <h3 className="yt-style-name">{s.style}</h3>
                <div className="yt-style-best">
                  <span>Best for:</span> {s.best}
                </div>
                <p className="yt-style-desc">{s.desc}</p>
                <Link href={CTA_URL} className="yt-style-try">
                  Try {s.style} →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          MISTAKES SECTION
      ══════════════════════════════════════════ */}
      <section className="yt-mistakes-section" id="thumbnail-mistakes" role="region" aria-labelledby="mistakes-title">
        <div className="yt-container">
          <div className="yt-section-tag">Creator Audit</div>
          <h2 id="mistakes-title" className="yt-section-h2">
            8 YouTube Thumbnail Mistakes That Are Killing Your CTR (And How to Fix Every One)
          </h2>
          <p className="yt-section-p">
            After studying thousands of underperforming YouTube channels, the same mistakes appear again and again.
            Here are the top 8 thumbnail errors — and the exact AI-powered fixes.
          </p>

          <div className="yt-mistakes-grid">
            {THUMBNAIL_MISTAKES.map((m, i) => (
              <div key={i} className="yt-mistake-card">
                <div className="yt-mistake-bad">{m.mistake}</div>
                <div className="yt-mistake-arrow">↓</div>
                <div className="yt-mistake-good">{m.fix}</div>
              </div>
            ))}
          </div>

          <div className="yt-mistakes-cta">
            <p>
              Every one of these fixes is a 30-second job with AI thumbnail generation. Stop losing clicks to fixable problems.
            </p>
            <Link href={CTA_URL} className="yt-main-cta">
              <span className="yt-cta-icon">🛠️</span>
              <span className="yt-cta-text">
                <strong>Fix Your Thumbnails with AI Now</strong>
                <small>Create better versions of your worst performers</small>
              </span>
              <span className="yt-cta-arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PROMPT ENGINEERING DEEP DIVE
      ══════════════════════════════════════════ */}
      <section className="yt-prompt-section" id="thumbnail-prompt-guide" role="region" aria-labelledby="prompt-title">
        <div className="yt-container">
          <div className="yt-section-tag">Prompt Mastery</div>
          <h2 id="prompt-title" className="yt-section-h2">
            The Complete Prompt Engineering Guide for YouTube Thumbnail AI
          </h2>
          <p className="yt-section-p">
            Writing an effective AI prompt for a YouTube thumbnail is a skill that takes 10 minutes to learn and pays dividends
            for the life of your channel. Here's everything you need to know.
          </p>

          <div className="yt-prompt-anatomy">
            <h3>The Anatomy of a Perfect Thumbnail Prompt</h3>
            <p>Every high-performing thumbnail prompt has 5 layers. Master these and you can generate any visual you imagine:</p>

            <div className="yt-prompt-layers">
              {[
                {
                  layer: 'Layer 1: The Subject',
                  color: '#FF6B6B',
                  desc: 'Who or what is the main focus? Be precise.',
                  bad: '"A person"',
                  good: '"A 30-year-old man with an expression of shock and excitement, hands raised"',
                },
                {
                  layer: 'Layer 2: The Action / Emotion',
                  color: '#4ECDC4',
                  desc: 'What is happening? What emotion should the viewer feel?',
                  bad: '"Looking at something"',
                  good: '"Jaw-dropped, pointing at a giant glowing number on a screen behind them"',
                },
                {
                  layer: 'Layer 3: The Setting & Background',
                  color: '#45B7D1',
                  desc: 'Where is this? What background serves the subject?',
                  bad: '"A background"',
                  good: '"Dramatic dark studio background with subtle blue gradient and light fog effect"',
                },
                {
                  layer: 'Layer 4: The Lighting & Color',
                  color: '#FFA07A',
                  desc: 'What lighting creates the mood you want?',
                  bad: '"Good lighting"',
                  good: '"Dramatic Rembrandt lighting from above-left, deep shadows, warm amber key light"',
                },
                {
                  layer: 'Layer 5: The Composition Directive',
                  color: '#98D8C8',
                  desc: 'Tell the AI how to frame the shot.',
                  bad: '"Close-up"',
                  good: '"Medium close-up, subject slightly right of center, space on left for title text, YouTube thumbnail composition"',
                },
              ].map((l, i) => (
                <div key={i} className="yt-prompt-layer" style={{ '--layer-color': l.color } as React.CSSProperties}>
                  <div className="yt-pl-header">
                    <span className="yt-pl-dot" />
                    <strong>{l.layer}</strong>
                  </div>
                  <p className="yt-pl-desc">{l.desc}</p>
                  <div className="yt-pl-compare">
                    <div className="yt-pl-bad">
                      <span>❌ Weak:</span> {l.bad}
                    </div>
                    <div className="yt-pl-good">
                      <span>✅ Strong:</span> {l.good}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="yt-prompt-examples-full">
            <h3>10 Complete High-CTR Thumbnail Prompts (Copy & Use)</h3>
            <div className="yt-full-prompts-grid">
              {[
                { label: 'Viral Finance Video', prompt: '"Person in a suit looking shocked at rising stock charts, dark background, green glowing numbers, dramatic lighting, financial success aesthetic, YouTube thumbnail"' },
                { label: 'Gaming Highlight', prompt: '"Epic first-person shooter scene, photorealistic soldier emerging from explosion, cinematic lighting, high contrast, dynamic action composition, gaming thumbnail style"' },
                { label: 'Food Recipe', prompt: '"Overhead flat-lay of fresh pasta with sauce and herbs, marble surface, warm morning light, steam rising, food magazine photography, mouth-watering composition"' },
                { label: 'Travel Vlog', prompt: '"Solo traveler standing at edge of mountain cliff, arms spread wide, golden sunset behind, silhouette composition, epic landscape, adventure mood"' },
                { label: 'Educational Tech', prompt: '"Floating 3D smartphone surrounded by glowing app icons, dark gradient background, blue accent lighting, clean tech aesthetic, product-style render"' },
                { label: 'Fitness Motivation', prompt: '"Athletic silhouette lifting weights, dramatic under-lighting, dark industrial gym, motivational atmosphere, high contrast, fitness transformation energy"' },
                { label: 'News / Commentary', prompt: '"Newspaper front page mock-up floating in air, dramatic studio lighting, serious tone, bold visual composition, news broadcast aesthetic"' },
                { label: 'Horror / Mystery', prompt: '"Eerie abandoned house at midnight, single lit window, fog and moonlight, dark atmospheric horror, cinematic color grade, chilling mood"' },
                { label: 'Kids / Education', prompt: '"Colorful animated classroom scene with floating letters and numbers, bright primary colors, cheerful characters, clean digital art style, child-friendly"' },
                { label: 'Business / Startup', prompt: '"Modern city skyline at night viewed from penthouse, glass reflections, aspirational corporate success aesthetic, dark blue and gold palette"' },
              ].map((ex, i) => (
                <div key={i} className="yt-full-prompt-item">
                  <div className="yt-fp-label">{ex.label}</div>
                  <div className="yt-fp-prompt">{ex.prompt}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          COMPARISON SECTION
      ══════════════════════════════════════════ */}
      <section className="yt-compare-section" id="ai-vs-manual" role="region" aria-labelledby="compare-title">
        <div className="yt-container">
          <div className="yt-section-tag">AI vs. Manual</div>
          <h2 id="compare-title" className="yt-section-h2">
            AI Thumbnail Generation vs. Traditional Methods: A Complete Comparison for 2026
          </h2>

          <div className="yt-compare-cards">
            <div className="yt-compare-card yt-compare-card--win">
              <div className="yt-cc-header">
                <span>🤖</span>
                <h3>AI Thumbnail Generation (Scenith)</h3>
                <div className="yt-cc-badge yt-cc-badge--green">Recommended</div>
              </div>
              <ul className="yt-cc-list">
                {[
                  '⏱️ 3–8 seconds per thumbnail',
                  '💰 From ₹99/month for creator plans',
                  '🎨 Unlimited creative styles with prompts',
                  '📝 No design skills required',
                  '🔁 Instant iteration & variation testing',
                  '📱 Optimized for mobile-first viewing',
                  '💼 Full commercial rights included',
                  '🧪 Create 5 A/B variants in 2 minutes',
                  '🔒 No watermarks, no attribution',
                  '⚡ Available 24/7, no scheduling',
                ].map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>

            <div className="yt-compare-card">
              <div className="yt-cc-header">
                <span>🖥️</span>
                <h3>Canva / Manual Design</h3>
                <div className="yt-cc-badge">Traditional</div>
              </div>
              <ul className="yt-cc-list yt-cc-list--neutral">
                {[
                  '⏱️ 20–60 minutes per thumbnail',
                  '💰 $12.99/month + stock photo subscriptions',
                  '🎨 Limited by template library',
                  '📝 Requires basic design knowledge',
                  '🔁 Slow to iterate, hard to test many variants',
                  '📱 Manual optimization for mobile required',
                  '💼 License restrictions on template elements',
                  '🧪 A/B testing tedious at scale',
                  '⚠️ Canva watermark on free tier',
                  '⏰ Subject to your schedule and energy',
                ].map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>

            <div className="yt-compare-card">
              <div className="yt-cc-header">
                <span>👨‍🎨</span>
                <h3>Hiring a Freelance Designer</h3>
                <div className="yt-cc-badge">Premium Option</div>
              </div>
              <ul className="yt-cc-list yt-cc-list--neutral">
                {[
                  '⏱️ 24–72 hours per thumbnail',
                  '💰 ₹500–₹5,000 per thumbnail',
                  '🎨 Custom unique design possible',
                  '📝 You describe, they execute',
                  '🔁 Multiple revisions = days of delay',
                  '📱 Good designers optimize automatically',
                  '💼 Rights depend on contract terms',
                  '🧪 A/B testing requires multiple paid versions',
                  '✅ No watermarks',
                  '📅 Dependent on designer availability',
                ].map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
          </div>

          <div className="yt-compare-verdict">
            <strong>The Verdict:</strong> AI thumbnail generation wins on speed, cost, and iteration speed — the three variables
            that matter most for growing a YouTube channel at scale. The only scenario where a freelance designer wins is for
            hero thumbnails on major viral campaigns where pixel-perfect brand execution justifies the time and cost.
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CHANNEL GROWTH STRATEGY
      ══════════════════════════════════════════ */}
      <section className="yt-strategy-section" id="thumbnail-growth-strategy" role="region" aria-labelledby="strategy-title">
        <div className="yt-container">
          <div className="yt-section-tag">Growth Playbook</div>
          <h2 id="strategy-title" className="yt-section-h2">
            The YouTube Channel Growth Strategy Powered by AI Thumbnails (2026 Edition)
          </h2>
          <p className="yt-section-p">
            Using AI thumbnail generation isn't just about making pretty images faster — it's about enabling an entirely new
            approach to channel growth that manual designers can't match.
          </p>

          <div className="yt-strategy-blocks">
            <div className="yt-strategy-block">
              <h3>🚀 The Velocity Strategy: Upload Daily, Look Professional</h3>
              <p>
                For faceless YouTube channels, news commentary, and high-frequency educational content, upload velocity is
                a major growth lever. The #1 bottleneck for daily uploaders is thumbnail creation. With AI generation,
                a <strong>daily thumbnail takes 45 seconds</strong> instead of 45 minutes. At scale, this is the difference
                between 365 videos and 52 videos per year — a compounding advantage that's almost impossible to overcome.
              </p>
              <div className="yt-strategy-example">
                <strong>Implementation:</strong> Create a thumbnail prompt template for your niche (e.g., " dramatic
                lighting, dark background, YouTube thumbnail"), swap in the daily topic, generate, add title text, upload.
                Total time per video: 90 seconds.
              </div>
            </div>

            <div className="yt-strategy-block">
              <h3>🧪 The A/B Compounding Strategy: Test Everything, Scale Winners</h3>
              <p>
                Most creators never test thumbnails. Those who do test one variant. The optimal strategy is
                <strong> generating 3–5 AI variants per video</strong> and systematically testing which direction
                performs best for your specific audience. After 30 days of testing, you'll have data-backed insight
                into which colors, subjects, compositions, and emotions drive the most clicks on your channel. This
                compound knowledge makes every future thumbnail better.
              </p>
              <div className="yt-strategy-example">
                <strong>Implementation:</strong> Week 1: test dark vs. light backgrounds. Week 2: test emotion (shock vs.
                curiosity). Week 3: test human face vs. no face. Week 4: test text overlay styles.
                After 4 weeks, you'll have the exact formula for your channel.
              </div>
            </div>

            <div className="yt-strategy-block">
              <h3>📈 The Catalog Refresh Strategy: Revive Your Old Videos</h3>
              <p>
                Your old videos are likely sitting on page 1–2 of YouTube search with outdated thumbnails from 2021–2023.
                <strong>Refreshing thumbnails on your top 30 videos</strong> is one of the highest-impact, lowest-effort
                growth activities available to any creator. A 2% CTR improvement across 30 videos that collectively receive
                100,000 impressions per month = 2,000 extra views per month on autopilot, forever.
              </p>
              <div className="yt-strategy-example">
                <strong>Implementation:</strong> Pull your top 30 videos by impression volume from YouTube Analytics.
                Generate new AI thumbnails for each using current trends. Upload replacements over 2 weeks. Monitor
                CTR changes in Studio. Project: 3 hours total work, potentially months of compounding results.
              </div>
            </div>

            <div className="yt-strategy-block">
              <h3>🎯 The Brand Consistency Strategy: Build a Recognizable Visual Identity</h3>
              <p>
                The most successful YouTube channels are immediately recognizable in the feed before a viewer even
                reads the title. This is brand equity — and it dramatically increases return viewer rate.
                With AI thumbnail generation, you can define a consistent <strong>visual template</strong> (color palette,
                subject placement, lighting style) and generate variations that all feel like the same channel.
              </p>
              <div className="yt-strategy-example">
                <strong>Implementation:</strong> Define 3 prompt elements that are constant across all thumbnails (e.g.,
                "dark background, red accent lighting, cinematic grade"). These become your brand signature. Viewers learn
                to recognize your thumbnails without reading the title — which is the holy grail of YouTube brand building.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PEOPLE ALSO ASK
      ══════════════════════════════════════════ */}
      <section className="yt-paa-section" id="thumbnail-faq" role="region" aria-labelledby="paa-title">
        <div className="yt-container">
          <div className="yt-section-tag">People Also Ask</div>
          <h2 id="paa-title" className="yt-section-h2">
            Frequently Asked Questions About AI YouTube Thumbnail Generation
          </h2>

          <div className="yt-faq-list" role="list">
            {[
              {
                q: 'What is the ideal YouTube thumbnail size in 2026?',
                a: `YouTube's official recommendation is 1280×720 pixels (HD, 16:9 aspect ratio). The file size must be under 2MB and can be JPG, PNG, GIF, or BMP format. Our AI generates 1024×1024 by default — simply crop to 1280×720 in any image editor or use our built-in image editor to get the perfect dimensions. Pro tip: design for 120px width visibility (mobile) first, then refine for desktop.`,
              },
              {
                q: 'Can AI-generated thumbnails be used on monetized YouTube channels?',
                a: `Yes. YouTube's Community Guidelines and monetization policies have no restrictions on AI-generated thumbnails. You retain full commercial rights to all images generated on Scenith. Thousands of monetized channels already use AI-generated thumbnail backgrounds. The only restriction: thumbnails cannot contain misleading content that doesn't match your video (per YouTube's deceptive thumbnails policy).`,
              },
              {
                q: 'How do I write a good AI prompt for a YouTube thumbnail?',
                a: `A strong thumbnail prompt has 5 layers: (1) Subject specifics ("person with shocked expression"), (2) Action/emotion ("pointing at giant number"), (3) Background/setting ("dark studio with fog"), (4) Lighting style ("dramatic side lighting, warm amber"), (5) Composition note ("medium shot, space left for title text"). Stack all five layers for the most predictable, high-quality output. The biggest beginner mistake is being too vague — "a cool background" produces nothing useful.`,
              },
              {
                q: 'Does adding a face to a YouTube thumbnail really increase CTR?',
                a: `Yes, significantly. Multiple large-scale YouTube studies confirm that thumbnails featuring a human face with a clear emotion (particularly surprise, joy, or curiosity) average 40% higher CTR than identical thumbnails without a face. The effect is even stronger when the face is making eye contact with the viewer. However, face thumbnails are not universally better — highly visual niches (nature, travel landscapes, product reviews) often perform better without a face.`,
              },
              {
                q: 'How often should I change my YouTube thumbnails?',
                a: `There\'s no universal rule, but evidence-based best practices suggest: (1) A/B test new thumbnails on every major upload. (2) Audit your lowest-CTR videos monthly and regenerate thumbnails for underperformers. (3) Refresh your entire top-30 catalog every 12–18 months as visual trends shift. (4) Never change a thumbnail that's performing above your channel average CTR — if it's working, leave it. Changing a high-performing thumbnail is one of the most common mistakes that kills channel momentum.`,
              },
              {
                q: 'What background colors work best for YouTube thumbnails?',
                a: `In 2026, the highest-CTR background approaches are: (1) Dark/black with single color accent (especially red, orange, or electric blue) — creates dramatic contrast, (2) Clean white or light gray with bold subject — stands out against YouTube's dark mode UI, (3) Gradient from dark to slightly lighter (never light to white — washes out subject), (4) Neon/bokeh blur backgrounds that frame the subject without competing with it. The worst performing choice is a medium-value background (beige, gray-blue) that neither contrasts strongly nor creates visual drama.`,
              },
              {
                q: 'Can I use AI thumbnails for YouTube Shorts?',
                a: `Yes, but thumbnails for YouTube Shorts behave differently from regular videos. Shorts display in a vertical (9:16) format on the Shorts shelf, and YouTube auto-selects a thumbnail frame from your video. For regular Shorts appearing in search results, a 1080×1920 thumbnail works best. For Shorts appearing as regular videos on your channel page, the standard 1280×720 applies. AI generation works for both formats — specify "vertical composition, portrait orientation" for Shorts-specific thumbnails.`,
              },
              {
                q: 'What\'s the difference between using Midjourney vs Scenith for YouTube thumbnails?',
                a: `Midjourney produces very high artistic quality but requires Discord access, has a complex command system, charges $10/month minimum, and doesn't integrate with any YouTube workflow tools. Scenith is a web-based interface, starts at ₹99/month (significantly cheaper), offers one-click generation, and directly pairs with an image editor for adding text overlays. For YouTubers who need speed and workflow integration over maximum artistic complexity, Scenith is the better fit. Both tools produce excellent results for thumbnail backgrounds.`,
              },
              {
                q: 'How do I add text to my AI-generated thumbnail background?',
                a: `After downloading your AI-generated thumbnail background PNG, use any of these free tools to add text: (1) Scenith's built-in Image Editor (free, available on our platform), (2) Canva (free tier, drag-and-drop text), (3) Adobe Express (free, optimized for thumbnails), (4) Photopea (browser-based, Photoshop-level features, completely free). For text best practices: use a bold/heavy weight font, 70–100pt size, and always add a drop shadow or stroke to ensure readability on any background color.`,
              },
              {
                q: 'Are there any YouTube thumbnail size generators that are truly free?',
                a: `Yes. Scenith's AI image generation tool is available on creator plans from ₹99/month — far less than a single hired thumbnail design. The AI generates the background visual; you add text in free tools like Canva. Compare this to stock photo services ($29+/month) or freelance thumbnail designers (₹500–₹5,000 per thumbnail). For high-volume creators producing 4+ videos per week, AI generation pays for itself within the first 2–3 thumbnails.`,
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`yt-faq-item ${faqOpen === i ? 'open' : ''}`}
                role="listitem"
              >
                <button
                  className="yt-faq-q"
                  onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                  aria-expanded={faqOpen === i}
                >
                  <h3>{item.q}</h3>
                  <span className="yt-faq-toggle">{faqOpen === i ? '−' : '+'}</span>
                </button>
                {faqOpen === i && (
                  <div className="yt-faq-a">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FINAL CTA SECTION
      ══════════════════════════════════════════ */}
      <section className="yt-final-cta-section" id="get-started" role="region" aria-labelledby="final-cta-title">
        <div className="yt-container">
          <div className="yt-final-cta-inner">
            <span className="yt-final-cta-icon">🎬</span>
            <h2 id="final-cta-title">Your Next Viral Video Starts With the Right Thumbnail</h2>
            <p>
              Every day you use a mediocre thumbnail is a day you're leaving views, subscribers, and revenue on the table.
              The 800 million other YouTube videos are all competing for the same eyeballs. Make yours impossible to ignore.
            </p>

            <Link href={CTA_URL} className="yt-main-cta yt-main-cta--large">
              <span className="yt-cta-icon">🎨</span>
              <span className="yt-cta-text">
                <strong>Generate Your YouTube Thumbnail Now — Free</strong>
                <small>7 AI models · 8 styles · Instant PNG download · No watermarks</small>
              </span>
              <span className="yt-cta-arrow">→</span>
            </Link>

            <div className="yt-final-trust">
              <div className="yt-ft-item">
                <span className="yt-ft-icon">🔒</span>
                <span>Secure & Private</span>
              </div>
              <div className="yt-ft-item">
                <span className="yt-ft-icon">💼</span>
                <span>Commercial Use</span>
              </div>
              <div className="yt-ft-item">
                <span className="yt-ft-icon">📥</span>
                <span>Instant Download</span>
              </div>
              <div className="yt-ft-item">
                <span className="yt-ft-icon">⚡</span>
                <span>3-Second Generation</span>
              </div>
              <div className="yt-ft-item">
                <span className="yt-ft-icon">🎨</span>
                <span>8 Visual Styles</span>
              </div>
            </div>

            <div className="yt-cross-tools">
              <div className="yt-cross-tools-label">Also try these tools to complete your YouTube workflow:</div>
              <div className="yt-cross-tools-grid">
                <a href="https://scenith.in/tools/image-editing" className="yt-cross-tool-card">
                  <span>🖼️</span>
                  <div>
                    <strong>Free Image Editor</strong>
                    <small>Add text & effects to your thumbnail</small>
                  </div>
                </a>
                <a href="https://scenith.in/tools/ai-voice-generation" className="yt-cross-tool-card">
                  <span>🎤</span>
                  <div>
                    <strong>AI Voice Generator</strong>
                    <small>Professional voiceovers for your videos</small>
                  </div>
                </a>
                <a href="https://scenith.in/tools/add-subtitles-to-videos" className="yt-cross-tool-card">
                  <span>📝</span>
                  <div>
                    <strong>Subtitle Generator</strong>
                    <small>Auto-captions for accessibility & SEO</small>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating CTA */}
      {scrolled && (
        <div className="yt-floating-cta">
          <Link href={CTA_URL} className="yt-floating-btn">
            <span>🎨</span>
            <span>Generate Thumbnail</span>
            <span>→</span>
          </Link>
        </div>
      )}
    </div>
  );
}