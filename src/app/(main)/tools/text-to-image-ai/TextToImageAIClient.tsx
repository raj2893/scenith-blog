'use client';

// app/tools/text-to-image-ai/TextToImageAIClient.tsx
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import '../../../../../styles/tools/TextToImageAI.css';

const ctaUrl =
  'https://scenith.in/create-ai-content?utm_source=text-to-image-ai-page&utm_medium=cta-button&utm_campaign=tti-traffic';

// ---------------------------------------------------------------------------
// Gallery images — served from Scenith's public CDN (same domain, fast).
// We use a static list so there is ZERO fetch on page load for the gallery.
// Swap these paths to match your actual CDN paths.
// ---------------------------------------------------------------------------
const GALLERY_IMAGES: { src: string; alt: string; style: string }[] = [
  { src: '/images/AIImageGenerationSS.png', alt: 'Realistic AI photo generated from text', style: 'Realistic' },
  { src: '/images/hindi-tts-hero-screenshot.png', alt: 'Digital art AI generated image', style: 'Digital Art' },
  { src: '/images/AIVoiceGenerationSS.png', alt: 'Fantasy AI artwork from text prompt', style: 'Fantasy' },
  { src: '/images/AIImageGenerationSS.png', alt: 'Anime style AI generated art', style: 'Anime' },
  { src: '/images/hindi-tts-hero-screenshot.png', alt: '3D render AI image from description', style: '3D Render' },
  { src: '/images/AIVoiceGenerationSS.png', alt: 'Sci-fi AI generated visual', style: 'Sci-Fi' },
  { src: '/images/AIImageGenerationSS.png', alt: 'Vintage aesthetic AI art', style: 'Vintage' },
  { src: '/images/hindi-tts-hero-screenshot.png', alt: 'Artistic painting AI image', style: 'Artistic' },
];

const MODELS = [
  {
    id: 'GPT_IMAGE_2',
    name: 'GPT Image 2',
    badge: '⚡ Best Quality',
    logo: 'https://cdn.scenith.in/brand-logos/Chatgpt%20logo.webp',
    desc: 'OpenAI\'s most advanced image model. Unmatched photorealism and instruction following.',
    tag: 'Photorealism',
    color: '#10a37f',
  },
  {
    id: 'IMAGEN_4_STANDARD',
    name: 'Imagen 4',
    badge: '🔥 Most Detailed',
    logo: 'https://cdn.scenith.in/brand-logos/Google%20Logo.webp',
    desc: "Google's flagship image model with extraordinary detail retention and color accuracy.",
    tag: 'Ultra Detail',
    color: '#4285f4',
  },
  {
    id: 'NANO_BANANA_PRO',
    name: 'Nano Banana Pro',
    badge: '✨ 4K Ultra',
    logo: 'https://cdn.scenith.in/brand-logos/Google%20Logo.webp',
    desc: 'Up to 4K resolution output. Perfect for print, merchandise, and large-format use.',
    tag: '4K Output',
    color: '#f59e0b',
  },
  {
    id: 'FLUX_1_1_PRO',
    name: 'FLUX 1.1 Pro',
    badge: '🎨 Artist\'s Choice',
    logo: 'https://cdn.scenith.in/brand-logos/Flux%20logo.png',
    desc: 'Exceptional artistic composition, vibrant palettes, and creative interpretation.',
    tag: 'Artistic',
    color: '#8b5cf6',
  },
  {
    id: 'GROK_AURORA',
    name: 'Grok Aurora',
    badge: '🚀 xAI Power',
    logo: 'https://cdn.scenith.in/brand-logos/Grok.png',
    desc: "xAI's Aurora model. Striking 2K visuals with distinctive cinematic quality.",
    tag: 'Cinematic 2K',
    color: '#e11d48',
  },
  {
    id: 'STABILITY_AI_CORE',
    name: 'Stability Core',
    badge: '🆓 Free Tier',
    logo: 'https://cdn.scenith.in/brand-logos/Stability%20logo.png',
    desc: 'Always-free access. Great for experimentation and learning prompt engineering.',
    tag: 'Free Access',
    color: '#06b6d4',
  },
];

const STYLES = [
  { icon: '📷', label: 'Realistic Photo', desc: 'DSLR-quality photorealism' },
  { icon: '🎨', label: 'Artistic', desc: 'Oil, watercolor, painterly' },
  { icon: '🎌', label: 'Anime / Manga', desc: 'Authentic Japanese animation' },
  { icon: '💻', label: 'Digital Art', desc: 'Modern illustration & design' },
  { icon: '🎮', label: '3D Render', desc: 'Blender & Cinema 4D aesthetic' },
  { icon: '🧙', label: 'Fantasy', desc: 'Epic, magical & mythological' },
  { icon: '🚀', label: 'Sci-Fi', desc: 'Futuristic & cyberpunk' },
  { icon: '📼', label: 'Vintage / Retro', desc: 'Nostalgic & retro aesthetics' },
];
// ---------------------------------------------------------------------------
// Model card — uses native <img> with loading=lazy (no LCP impact)
// ---------------------------------------------------------------------------
function ModelCard({ model }: { model: typeof MODELS[0] }) {
  return (
    <div className="tti-model-card" style={{ '--model-color': model.color } as React.CSSProperties}>
      <div className="tti-model-card-top">
        <div className="tti-model-logo-wrap">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={model.logo}
            alt={`${model.name} logo`}
            width={28}
            height={28}
            loading="lazy"
            decoding="async"
            className="tti-model-logo"
          />
        </div>
        <span className="tti-model-badge">{model.badge}</span>
      </div>
      <h3 className="tti-model-name">{model.name}</h3>
      <p className="tti-model-desc">{model.desc}</p>
      <span className="tti-model-tag">{model.tag}</span>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Live prompt typing demo — shows character-by-character then fades
// Pure CSS-driven, minimal JS (just cycling an index in state)
// ---------------------------------------------------------------------------
const DEMO_PROMPTS = [
  'Majestic Bengal tiger resting in dappled jungle light, shallow depth of field, National Geographic style',
  'Aerial cinematic view of neon-lit Tokyo at 2AM, rain-soaked roads reflecting purple signs, 8K',
  'Ancient Indus Valley Civilisation city, birds-eye view, historical reconstruction, digital art',
  'Chrome samurai robot in burning feudal Japan at dusk, sparks flying, cinematic wide shot',
  'Enchanted forest of giant glowing mushrooms at night, fantasy art, ethereal mist on the ground',
];

function PromptTypingDemo() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      if (!document.hidden) { // only cycle when tab is visible
        setIdx((i) => (i + 1) % DEMO_PROMPTS.length);
      }
    }, 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="tti-prompt-demo" aria-live="polite" aria-label="Example prompts">
      <div className="tti-prompt-demo-label">✦ Try prompts like these</div>
      <div className="tti-prompt-demo-text" key={idx}>
        {DEMO_PROMPTS[idx]}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Style selector — visual, interactive
// ---------------------------------------------------------------------------
function StyleShowcase() {
  const [active, setActive] = useState(0);

  return (
    <div className="tti-style-showcase">
      <div className="tti-style-tabs" role="tablist">
        {STYLES.map((s, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={active === i}
            className={`tti-style-tab${active === i ? ' active' : ''}`}
            onClick={() => setActive(i)}
          >
            <span className="tti-style-tab-icon">{s.icon}</span>
            <span className="tti-style-tab-label">{s.label}</span>
          </button>
        ))}
      </div>
      <div className="tti-style-detail" role="tabpanel">
        <div className="tti-style-detail-icon">{STYLES[active].icon}</div>
        <div>
          <div className="tti-style-detail-name">{STYLES[active].label}</div>
          <div className="tti-style-detail-desc">{STYLES[active].desc}</div>
        </div>
        <Link href={ctaUrl} className="tti-style-try-btn">
          Try {STYLES[active].label} →
        </Link>
      </div>
    </div>
  );
}

function PromptCTABox() {
  const [text, setText] = useState('');

  const handleGenerate = () => {
    const base = 'https://scenith.in/create-ai-content?tab=image';
    const url = text.trim()
      ? `${base}&utm_source=tti-page&utm_medium=prompt-box&prompt=${encodeURIComponent(text.trim())}`
      : `${base}&utm_source=tti-page&utm_medium=prompt-box`;
    window.location.href = url;
  };

  return (
    <div className="tti-prompt-cta-box">
      <div className="tti-pcta-label">✦ Generate right now — free</div>
      <div className="tti-pcta-row">
        <textarea
          className="tti-pcta-textarea"
          placeholder="Describe your image… e.g. &quot;Majestic Bengal tiger at golden hour, shallow depth of field, National Geographic style&quot;"
          value={text}
          onChange={e => setText(e.target.value)}
          rows={2}
          onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleGenerate(); } }}
        />
        <button className="tti-pcta-btn" onClick={handleGenerate}>
          <span>🎨 Generate</span>
          <span className="tti-pcta-arrow">→</span>
        </button>
      </div>
      <div className="tti-pcta-chips">
        {[
          'Neon Tokyo street at midnight, cinematic',
          'Fantasy warrior queen on throne, epic lighting',
          'Cozy Parisian café on rainy morning, film photo',
          'Indian woman in silk saree, golden hour, photorealistic',
        ].map(chip => (
          <button key={chip} className="tti-pcta-chip" onClick={() => setText(chip)}>
            {chip}
          </button>
        ))}
      </div>
    </div>
  );
}

function GalleryMarquee({ images }: { images: string[] }) {
  if (images.length === 0) return null;

  const mid = Math.ceil(images.length / 2);
  const row1 = images.slice(0, mid);
  const row2 = images.slice(mid);

  return (
    <div className="tti-gallery-marquee" aria-label="Sample AI-generated images gallery">
      <div className="tti-marquee-track tti-marquee-left">
        {[...row1, ...row1].map((src, i) => (
          <div key={i} className="tti-gallery-card">
            <img src={src} alt="AI generated image example" loading="lazy" decoding="async" className="tti-gallery-img" />
          </div>
        ))}
      </div>
      <div className="tti-marquee-track tti-marquee-right">
        {[...row2, ...row2].map((src, i) => (
          <div key={i} className="tti-gallery-card">
            <img src={src} alt="AI generated image example" loading="lazy" decoding="async" className="tti-gallery-img" />
          </div>
        ))}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main page component
// ---------------------------------------------------------------------------
export default function TextToImageAIClient({ galleryImages }: { galleryImages: string[] }) {
  return (
    <div className="tti-page">

      {/* ── Structured Data ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'WebApplication',
                '@id': 'https://scenith.in/tools/text-to-image-ai#webapp',
                name: 'Scenith Text to Image AI Generator',
                alternateName: ['AI Text to Image', 'Text to Image Generator', 'AI Art Generator'],
                description:
                  'Free AI-powered text to image generator. Convert any text description into stunning visuals — photorealistic photos, anime art, digital illustrations, 3D renders, fantasy artwork, and more.',
                url: 'https://scenith.in/tools/text-to-image-ai',
                applicationCategory: 'MultimediaApplication',
                operatingSystem: 'Web Browser',
                inLanguage: ['en-IN', 'hi-IN'],
                offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR', availability: 'https://schema.org/InStock' },
                featureList: [
                  'Text to image AI generation', '8 artistic style presets', 'Photorealistic output',
                  'Anime and manga style', '3D render generation', 'Fantasy and sci-fi art',
                  'High-resolution PNG download', 'Commercial use rights included', 'No watermarks',
                  'Negative prompt support', 'Instant 3-second generation',
                ],
                screenshot: 'https://scenith.in/images/AIImageGenerationSS.png',
                author: { '@type': 'Organization', '@id': 'https://scenith.in/#organization', name: 'Scenith' },
              },
              {
                '@type': 'FAQPage',
                '@id': 'https://scenith.in/tools/text-to-image-ai#faq',
                mainEntity: [
                  {
                    '@type': 'Question', name: 'What is text to image AI?',
                    acceptedAnswer: { '@type': 'Answer', text: 'Text to image AI uses deep learning — diffusion models and transformers — to convert written text descriptions into original, high-quality images.' },
                  },
                  {
                    '@type': 'Question', name: 'Is text to image AI free?',
                    acceptedAnswer: { '@type': 'Answer', text: "Scenith's text to image AI generator is free to use with no credit card required. Free plans include a monthly credit allocation." },
                  },
                  {
                    '@type': 'Question', name: 'Which is the best text to image AI in 2026?',
                    acceptedAnswer: { '@type': 'Answer', text: 'In 2026, top tools include Scenith (free, commercial use, 8 styles), Midjourney (paid), DALL-E 3, and Stable Diffusion. Scenith stands out for Indian creators.' },
                  },
                ],
              },
              {
                '@type': 'SoftwareApplication',
                name: 'Scenith Text to Image AI',
                applicationCategory: 'MultimediaApplication',
                operatingSystem: 'Web Browser',
                offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
                aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.8', ratingCount: '3241', bestRating: '5', worstRating: '1' },
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://scenith.in' },
                  { '@type': 'ListItem', position: 2, name: 'Tools', item: 'https://scenith.in/tools' },
                  { '@type': 'ListItem', position: 3, name: 'AI Image Generation', item: 'https://scenith.in/tools/ai-image-generation' },
                  { '@type': 'ListItem', position: 4, name: 'Text to Image AI', item: 'https://scenith.in/tools/text-to-image-ai' },
                ],
              },
            ],
          }),
        }}
      />

      {/* ── Star field ── */}
      <div className="tti-cosmos-bg" aria-hidden="true">
        {[
          { x: '5%', y: '12%', size: '2px', op: 0.7, dur: '4s', delay: '0s' },
          { x: '15%', y: '30%', size: '1px', op: 0.4, dur: '3s', delay: '1.2s' },
          { x: '25%', y: '8%', size: '3px', op: 0.6, dur: '5s', delay: '0.5s' },
          { x: '35%', y: '55%', size: '1px', op: 0.5, dur: '3.5s', delay: '2s' },
          { x: '50%', y: '20%', size: '2px', op: 0.8, dur: '4.5s', delay: '0.3s' },
          { x: '60%', y: '70%', size: '1px', op: 0.3, dur: '3s', delay: '1.8s' },
          { x: '75%', y: '15%', size: '2px', op: 0.6, dur: '4s', delay: '0.9s' },
          { x: '85%', y: '40%', size: '3px', op: 0.5, dur: '5.5s', delay: '1.5s' },
          { x: '90%', y: '80%', size: '1px', op: 0.7, dur: '3s', delay: '0.2s' },
          { x: '45%', y: '90%', size: '2px', op: 0.4, dur: '4s', delay: '2.5s' },
          { x: '12%', y: '60%', size: '1px', op: 0.5, dur: '3.8s', delay: '1s' },
          { x: '68%', y: '5%', size: '2px', op: 0.6, dur: '4.2s', delay: '0.7s' },
        ].map((s, i) => (
          <span key={i} className="tti-star" style={{
            '--x': s.x, '--y': s.y, '--size': s.size,
            '--op': s.op, '--dur': s.dur, '--delay': s.delay,
          } as React.CSSProperties} />
        ))}
      </div>

      {/* ── Breadcrumb ── */}
      <nav aria-label="Breadcrumb" className="tti-breadcrumb">
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
            <a href="/tools/ai-image-generation" itemProp="item"><span itemProp="name">AI Image Generation</span></a>
            <meta itemProp="position" content="3" />
          </li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="name">Text to Image AI</span>
            <meta itemProp="position" content="4" />
          </li>
        </ol>
      </nav>

      {/* ================================================================
          HERO
      ================================================================ */}
      <section className="tti-hero" role="main">
        <div className="tti-container">
          <div className="tti-hero-badge-row">
            <div className="tti-hero-badge"><span>✦</span><span>Text to Image AI — 2026</span></div>
            <div className="tti-hero-badge tti-hero-badge-new"><span>🔥</span><span>6 AI Models</span></div>
          </div>

          <h1 className="tti-hero-title">Text to Image AI Generator</h1>
          <p className="tti-hero-subtitle">Turn Any Description Into Stunning Visual Art — Instantly</p>

          <p className="tti-hero-desc">
            The most powerful <strong>free text to image AI</strong> for creators in 2026. Describe what you want
            in plain language and watch our neural AI transform your words into <strong>photorealistic photos,
            anime art, digital illustrations, 3D renders, and fantasy artwork</strong> in under 3 seconds.
            No design skills. No complex software. No subscription required to start.
          </p>

          <div className="tti-container">
            <PromptCTABox />
          </div>

          {/* Prompt typing demo */}
          <PromptTypingDemo />

          <div className="tti-hero-cta-wrap">
            <Link href={ctaUrl} className="tti-main-cta">
              <span className="tti-cta-left">
                <span className="tti-cta-emoji">🎨</span>
                <span className="tti-cta-text-block">
                  <strong>Generate Images from Text – Free!</strong>
                  <small>8 Art Styles • Instant PNG • Commercial Use Included</small>
                </span>
              </span>
              <span className="tti-cta-arrow">→</span>
            </Link>
            <Link href="/tools/ai-image-generation" className="tti-secondary-cta">View All Features →</Link>
          </div>

          <div className="tti-trust-row">
            <span className="tti-trust-pill">✅ 100% Free Tier</span>
            <span className="tti-trust-pill">⚡ 3-Second Generation</span>
            <span className="tti-trust-pill">🎨 8 Art Styles</span>
            <span className="tti-trust-pill">📥 High-Res PNG</span>
            <span className="tti-trust-pill">💼 Commercial Rights</span>
            <span className="tti-trust-pill">🚫 No Watermarks</span>
            <span className="tti-trust-pill">🔒 No Credit Card</span>
          </div>
        </div>
      </section>    

      {/* ================================================================
          LIVE GALLERY MARQUEE — the "wow" section
      ================================================================ */}
      <section className="tti-section tti-section-gallery" aria-label="AI-generated image gallery">
        <div className="tti-container">
          <div className="tti-gallery-header">
            <h2 className="tti-section-title" style={{ textAlign: 'center' }}>
              Real Images. <span>Real AI.</span>
            </h2>
            <p className="tti-gallery-subtitle">
              Every image below was generated from a text prompt — no photography, no design software.
            </p>
          </div>
        </div>
        <GalleryMarquee images={galleryImages} />
        <div className="tti-container">
          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <Link href={ctaUrl} className="tti-main-cta" style={{ display: 'inline-flex' }}>
              <span className="tti-cta-left">
                <span className="tti-cta-emoji">🖼️</span>
                <span className="tti-cta-text-block">
                  <strong>Create Your Own AI Images Now</strong>
                  <small>Free · No signup required to try</small>
                </span>
              </span>
              <span className="tti-cta-arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ================================================================
          STATS TICKER
      ================================================================ */}
      <div className="tti-stats-ticker">
        <div className="tti-stats-inner">
          <div className="tti-stat-item"><span className="tti-stat-num">3s</span><span className="tti-stat-label">Avg. generation time</span></div>
          <div className="tti-stat-item"><span className="tti-stat-num">8</span><span className="tti-stat-label">Distinct art styles</span></div>
          <div className="tti-stat-item"><span className="tti-stat-num">6</span><span className="tti-stat-label">AI models available</span></div>
          <div className="tti-stat-item"><span className="tti-stat-num">4K</span><span className="tti-stat-label">Max output resolution</span></div>
          <div className="tti-stat-item"><span className="tti-stat-num">4.8★</span><span className="tti-stat-label">User rating (3,241 reviews)</span></div>
          <div className="tti-stat-item"><span className="tti-stat-num">100%</span><span className="tti-stat-label">Commercial rights</span></div>
        </div>
      </div>

      {/* ================================================================
          MODEL SHOWCASE — the "which AI?" section
      ================================================================ */}
      <section className="tti-section tti-section-alt" id="ai-models" aria-labelledby="models-title">
        <div className="tti-container">
          <h2 className="tti-section-title" id="models-title">
            6 AI Models. <span>One Generator.</span>
          </h2>
          <p className="tti-section-intro">
            Scenith isn't locked to one AI engine. Choose the model that fits your use case — from free experimentation
            to 4K professional output. All available in{' '}
            <Link href={ctaUrl} className="tti-inline-link">the AI Content Creator</Link>.
          </p>

          <div className="tti-models-grid">
            {MODELS.map((m) => <ModelCard key={m.id} model={m} />)}
          </div>

          <div className="tti-mid-cta-wrap">
            <Link href={ctaUrl} className="tti-mid-cta-btn">
              🎨 Try All 6 Models — Generate Your First Image Free →
            </Link>
          </div>
        </div>
      </section>

      {/* ================================================================
          STYLE SHOWCASE — interactive tab picker
      ================================================================ */}
      <section className="tti-section" id="text-to-image-ai-styles" aria-labelledby="styles-title">
        <div className="tti-container">
          <h2 className="tti-section-title" id="styles-title">
            8 Art Styles. <span>Infinite Possibilities.</span>
          </h2>
          <p className="tti-section-intro">
            The same prompt produces wildly different images depending on the style you choose. Tap to explore each one.
          </p>
          <StyleShowcase />
        </div>
      </section>

      {/* ================================================================
          HOW IT WORKS — visual timeline
      ================================================================ */}
      <section className="tti-section tti-section-alt" id="how-to-generate-text-to-image" aria-labelledby="howto-title">
        <div className="tti-container">
          <h2 className="tti-section-title" id="howto-title">
            How to Generate Images from <span>Text — Step by Step</span>
          </h2>
          <p className="tti-section-intro">
            Creating professional-grade AI visuals from text takes under 60 seconds.
          </p>

          <div className="tti-timeline">
            {[
              {
                n: 1, title: 'Open the Generator',
                body: 'Click the Generate button on this page to open Scenith\'s AI image generator. No account required for your first generation. Works on desktop, tablet, and mobile.',
                tip: 'Tip: Larger screen makes prompt refinement easier.',
              },
              {
                n: 2, title: 'Write a Detailed Prompt',
                body: 'Describe your image in plain language. Include subject, setting, lighting, mood, colors, and style keywords. More specificity = dramatically better results.',
                tip: 'Weak: "a sunset" → Strong: "Dramatic golden hour sunset over misty mountains, cinematic wide angle, photorealistic, high contrast"',
              },
              {
                n: 3, title: 'Choose Your Art Style',
                body: 'Select from 8 artistic style presets — Realistic Photo, Anime, Fantasy, 3D Render, and more. The same prompt produces completely different images across styles.',
                tip: 'Try the same prompt in 3 different styles before committing.',
              },
              {
                n: 4, title: 'Generate & Iterate',
                body: 'Hit Generate and receive your image in ~3 seconds. Evaluate it critically and refine your prompt. Professional AI artists iterate 5–15 times per final image.',
                tip: 'Add negative prompts to exclude: "blurry, watermark, distorted, low quality"',
              },
              {
                n: 5, title: 'Download & Use',
                body: 'Download as high-quality PNG. Full commercial rights included — use in ads, products, client work, YouTube, anything. No attribution ever required.',
                tip: 'You can also send your image directly to the AI Video generator to animate it.',
              },
            ].map((step) => (
              <div key={step.n} className="tti-timeline-step">
                <div className="tti-step-num-wrap"><div className="tti-step-num">{step.n}</div></div>
                <div className="tti-step-body">
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                  <div className="tti-step-example"><strong>Tip:</strong> {step.tip}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          PROMPT ENGINEERING — compact, scannable
      ================================================================ */}
      <section className="tti-section tti-prompt-section" id="text-to-image-prompt-guide" aria-labelledby="prompt-title">
        <div className="tti-container">
          <h2 className="tti-section-title" id="prompt-title">
            The Complete Guide to <span>Text to Image Prompts</span>
          </h2>
          <p className="tti-section-intro">
            Prompt engineering separates mediocre AI images from stunning, professional-quality visuals.
          </p>

          <div className="tti-prompt-tips">
            {[
              { n: 1, title: 'Lead with the Subject', body: 'Start with the most important element. AI models weight earlier tokens more heavily. Subject first, context after.', eg: '✅ "A majestic Bengal tiger, resting in dappled jungle light…"\n❌ "In a jungle with light coming through the trees there is a tiger…"' },
              { n: 2, title: 'Describe Lighting Explicitly', body: 'Lighting is the single most impactful element of visual quality.', eg: '"golden hour sunlight", "studio soft box", "dramatic chiaroscuro", "neon backlighting", "misty atmospheric fog"' },
              { n: 3, title: 'Specify Camera & Composition', body: 'Photography terminology gives the AI precise spatial instructions.', eg: '"extreme close-up", "wide-angle panoramic", "bird\'s eye view", "bokeh background", "macro photography"' },
              { n: 4, title: 'Include Quality Keywords', body: 'Quality modifiers activate the model\'s highest-quality generation pathways.', eg: '"8K resolution", "highly detailed", "photorealistic", "sharp focus", "hyperrealistic", "award-winning photography"' },
              { n: 5, title: 'Reference Art Styles', body: 'Mentioning artistic styles provides rich context the AI has learned from training data.', eg: '"Art Nouveau illustration", "impressionist oil painting", "Artstation trending", "Ukiyo-e woodblock print"' },
              { n: 6, title: 'Define Color Intentionally', body: 'Specifying palettes ensures visual consistency and emotional impact.', eg: '"warm amber and deep burgundy", "cool blue-cyan cyberpunk neon", "pastel soft peach and lavender"' },
            ].map((tip) => (
              <div key={tip.n} className="tti-prompt-tip">
                <div className="tti-tip-header">
                  <div className="tti-tip-num">{tip.n}</div>
                  <h3>{tip.title}</h3>
                </div>
                <p>{tip.body}</p>
                <div className="tti-prompt-example-box">{tip.eg}</div>
              </div>
            ))}
          </div>

          <div className="tti-prompt-do-dont">
            <div className="tti-do-box">
              <h3>✅ Powerful Prompt Patterns</h3>
              <ul>
                <li>Be specific: "25-year-old South Indian woman in silk saree" not "woman in traditional clothing"</li>
                <li>Layer details: subject + setting + lighting + mood + style + quality modifiers</li>
                <li>Use commas to separate visual concepts</li>
                <li>Include perspective: "from below looking up" or "eye-level portrait close-up"</li>
                <li>Name the time of day: "blue hour dusk", "harsh noon sun"</li>
                <li>Specify texture: "weathered leather", "polished chrome", "rough stone"</li>
              </ul>
            </div>
            <div className="tti-dont-box">
              <h3>❌ Common Prompt Mistakes</h3>
              <ul>
                <li>Writing vague single-word subjects: "cat" instead of describing the specific cat</li>
                <li>Contradicting yourself: "dark room, bright sunlit environment"</li>
                <li>Overloading with too many unrelated concepts (over 30 distinct elements)</li>
                <li>Using only adjectives without nouns: "beautiful, amazing" doesn't tell the AI what to draw</li>
                <li>Forgetting negative prompts — always tell the AI what to avoid</li>
                <li>Being abstract without visual anchors: translate emotions into concrete visuals</li>
              </ul>
            </div>
          </div>

          <div className="tti-mid-cta-wrap">
            <Link href={ctaUrl} className="tti-mid-cta-btn">
              🖼️ Try These Prompt Techniques — Generate Free →
            </Link>
          </div>
        </div>
      </section>

      {/* ================================================================
          USE CASES
      ================================================================ */}
      <section className="tti-section tti-section-alt" id="text-to-image-ai-use-cases" aria-labelledby="usecases-title">
        <div className="tti-container">
          <h2 className="tti-section-title" id="usecases-title">
            Who Uses Text to Image AI? <span>Real-World Applications</span>
          </h2>
          <p className="tti-section-intro">
            From solo content creators to enterprise marketing teams.
          </p>

          <div className="tti-usecases-grid">
            {[
              { icon: '📺', title: 'YouTube Creators', body: 'Generate eye-catching thumbnails, custom background art, and channel art without hiring a designer. Faceless channels generate every video thumbnail with AI.', prompts: ['"Shocked scientist in glowing lab, dramatic lighting, YouTube thumbnail style, vivid colors"', '"Epic fantasy battle scene, cinematic, high contrast, thumbnail composition"'] },
              { icon: '🛍️', title: 'E-Commerce & D2C Brands', body: 'Replace expensive product photography with AI-generated lifestyle imagery. Create variants and seasonal campaigns instantly. Indian D2C brands save ₹50,000–₹5,00,000 annually.', prompts: ['"Luxury skincare serum on marble, soft natural light, minimal white background"', '"Woman wearing ethnic kurta, urban setting, lifestyle photography, warm tones"'] },
              { icon: '🎓', title: 'EdTech & Course Creators', body: 'Custom educational illustrations that match lesson topics. Historical reconstructions, science diagrams, and chapter art — without a graphic design budget.', prompts: ['"Ancient Indus Valley city, birds-eye view, historical reconstruction, digital art"', '"Atom diagram glowing in space, science illustration, vibrant colors"'] },
              { icon: '📱', title: 'Social Media Managers', body: 'Generate a full month of content calendar visuals in hours. Consistent aesthetic themes for Instagram, Pinterest, and LinkedIn that outperform generic stock.', prompts: ['"Aesthetic Instagram flat lay, pastel flowers, coffee, minimalist white background"', '"Abstract gradient background, purple and teal, modern minimal, social template"'] },
              { icon: '✍️', title: 'Authors & Publishers', body: 'Visualise your story world — character references, location concept art, and book covers. Self-publishing authors save ₹20,000–₹80,000 in design fees.', prompts: ['"Epic fantasy book cover, warrior queen on throne, dramatic lighting, Artstation quality"', '"Romantic novel, couple under starlit sky, soft watercolor, dreamy atmosphere"'] },
              { icon: '🎮', title: 'Indie Game Developers', body: 'Rapidly iterate on character designs, environments, and UI mockups before committing to production. Cut pre-production visual time by 60–70%.', prompts: ['"2D side-scroller game environment, lush forest with glowing mushrooms, pixel art"', '"RPG character concept art, dark elf rogue, intricate armor, Artstation trending"'] },
            ].map((uc) => (
              <article key={uc.title} className="tti-usecase-card">
                <span className="tti-uc-icon">{uc.icon}</span>
                <h3>{uc.title}</h3>
                <p>{uc.body}</p>
                <div className="tti-uc-prompts">
                  <strong>Example Prompts</strong>
                  <ul>{uc.prompts.map((p, i) => <li key={i}>{p}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          INTERNAL LINK STRIP — drives traffic to /create-ai-content
      ================================================================ */}
      <section className="tti-cta-strip" aria-label="Try the AI content creator">
        <div className="tti-container">
          <div className="tti-cta-strip-inner">
            <div className="tti-cta-strip-text">
              <div className="tti-cta-strip-eyebrow">✦ One Platform</div>
              <h2 className="tti-cta-strip-headline">Images are just the start</h2>
              <p className="tti-cta-strip-body">
                The{' '}
                <Link href="/create-ai-content" className="tti-inline-link">
                  Scenith AI Content Creator
                </Link>{' '}
                lets you generate voices, images, and videos from the same page.
                Switch between GPT Image 2, Imagen 4, Kling video, and 40+ voice options — one credit balance, zero friction.
              </p>
            </div>
            <div className="tti-cta-strip-cards">
              <Link href="/create-ai-content?tab=voice" className="tti-strip-card">
                <span className="tti-strip-card-icon">🎙️</span>
                <span className="tti-strip-card-label">AI Voice</span>
                <span className="tti-strip-card-sub">40+ voices</span>
              </Link>
              <Link href="/create-ai-content?tab=image" className="tti-strip-card tti-strip-card--active">
                <span className="tti-strip-card-icon">🖼️</span>
                <span className="tti-strip-card-label">AI Image</span>
                <span className="tti-strip-card-sub">6 models</span>
              </Link>
              <Link href="/create-ai-content?tab=video" className="tti-strip-card">
                <span className="tti-strip-card-icon">🎬</span>
                <span className="tti-strip-card-label">AI Video</span>
                <span className="tti-strip-card-sub">11 models</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          COMPARISON TABLE
      ================================================================ */}
      <section className="tti-section tti-section-alt" id="text-to-image-ai-comparison" aria-labelledby="comparison-title">
        <div className="tti-container">
          <h2 className="tti-section-title" id="comparison-title">
            Text to Image AI Comparison: <span>Scenith vs Alternatives 2026</span>
          </h2>
          <p className="tti-section-intro">
            An honest breakdown across the dimensions that matter most to creators and businesses.
          </p>

          <div className="tti-comparison-wrap">
            <table className="tti-comparison-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th className="tti-col-scenith">Scenith ✅</th>
                  <th>Midjourney</th>
                  <th>DALL-E 3</th>
                  <th>Stable Diffusion</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Pricing', 'Free tier + paid from $9/mo', '$10/month minimum', 'ChatGPT Plus $20/month', 'Free but requires setup'],
                  ['Access Method', 'Web browser — instant', 'Discord only', 'ChatGPT interface', 'Local install / Colab'],
                  ['AI Models', '6 one-click models', 'Single model', 'DALL-E 3 only', 'Unlimited via LoRA'],
                  ['Art Styles', '8 one-click presets', 'Prompt-based only', 'Limited style control', 'Unlimited via LoRA'],
                  ['Ease of Use', '✅ No learning curve', '⚠️ Complex slash commands', '✅ Simple but limited', '❌ Highly technical'],
                  ['Commercial Rights', '✅ Full commercial, free tier', '✅ Paid plans only', '✅ Paid plans only', '✅ Open-source, varies'],
                  ['Indian Context', '✅ Optimised for Indian use', '⚠️ Western-centric', '⚠️ Limited', '⚠️ Varies by model'],
                  ['Generation Speed', '~3 seconds', '30–60 seconds', '10–30 seconds', '10 sec–5 min'],
                  ['Voice + Video', '✅ Built-in (same credits)', '❌ Image only', '❌ Image only', '❌ Image only'],
                ].map(([feature, scenith, mj, dalle, sd]) => (
                  <tr key={feature}>
                    <td><strong>{feature}</strong></td>
                    <td className="tti-col-scenith">{scenith}</td>
                    <td>{mj}</td>
                    <td>{dalle}</td>
                    <td>{sd}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ================================================================
          FAQ
      ================================================================ */}
      <section className="tti-section" id="text-to-image-ai-faq" aria-labelledby="faq-title">
        <div className="tti-container">
          <h2 className="tti-section-title" id="faq-title">
            Frequently Asked Questions: <span>Text to Image AI</span>
          </h2>

          <div className="tti-faq-grid">
            {[
              { q: 'What is the best free text to image AI in 2026?', a: 'Scenith is widely considered the best free text to image AI for Indian creators due to instant web access, full commercial rights on the free tier, 8 art style presets, 6 AI models, and seamless integration with voice and video generation.' },
              { q: 'How accurate is text to image AI at following prompts?', a: 'Modern text to image AI (2026) achieves high prompt fidelity for clear, specific descriptions. Single subjects with detailed attributes are reproduced very accurately. The key is specificity — the more concrete and visual your language, the more faithfully the AI interprets your intent.' },
              { q: 'Can text to image AI generate images of real people?', a: 'Most reputable tools, including Scenith, discourage generation of identifiable public figures by name. You can describe generic human characteristics — age range, ethnicity, profession, clothing — without naming specific individuals.' },
              { q: 'Is text to image AI legal for commercial use?', a: 'Yes — Scenith grants full commercial use rights for all generated images. You can use them in advertising, product packaging, client deliverables, for-sale products, and any commercial application.' },
              { q: 'What resolution does text to image AI output?', a: 'Scenith generates images from 1024×1024px up to 4K (via Nano Banana Pro). Standard outputs are suitable for social media, YouTube thumbnails, blog images, and print materials up to A5 at 300 DPI.' },
              { q: 'How many text to image generations do I get for free?', a: 'Free users on Scenith can generate AI images after signing up — the free tier includes a monthly credit allocation. Creator plans offer 100–500 credits per month for high-volume creators.' },
              { q: 'Can I use text to image AI for print-on-demand products?', a: 'Absolutely — print-on-demand (POD) is one of the highest-growth applications. Scenith\'s commercial rights explicitly cover POD product applications for t-shirts, mugs, phone cases, tote bags, and wall art.' },
              { q: 'क्या text to image AI Hindi में काम करता है?', a: 'हाँ! Scenith का text to image AI हिंदी prompts को भी समझता है। हालांकि, अंग्रेज़ी prompts बेहतर results देते हैं। Best practice: English में prompt लिखें लेकिन subject को specifically Indian बताएं।' },
            ].map((faq) => (
              <article key={faq.q} className="tti-faq-item">
                <h3>{faq.q}</h3>
                <p>{faq.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          FINAL CTA
      ================================================================ */}
      <section className="tti-final-cta-section" role="region" aria-label="Call to action">
        <div className="tti-container">
          <div className="tti-final-cta-inner">
            <span className="tti-final-icon">🎨</span>
            <h2>Ready to Turn Your Words Into Stunning Images?</h2>
            <p className="tti-final-desc">
              Join thousands of creators, marketers, and businesses using Scenith's text to image AI.
              Start completely free — no credit card, no complex setup.
            </p>
            <Link href={ctaUrl} className="tti-final-cta-btn">
              <span className="tti-final-cta-content">
                <strong>🎨 Generate Images from Text — 100% Free</strong>
                <small>8 Art Styles • 6 AI Models • Full Commercial Rights</small>
              </span>
              <span className="tti-final-arrow">→</span>
            </Link>
            <div className="tti-final-trust-pills">
              <span>✅ Free to Start</span>
              <span>⚡ 3-Second Generation</span>
              <span>🎨 8 Art Styles</span>
              <span>📥 High-Res PNG</span>
              <span>💼 Commercial Rights</span>
              <span>🚫 No Watermarks</span>
            </div>
            <p className="tti-final-footnote">
              <strong>Also explore:</strong>{' '}
              <Link href="/create-ai-content" className="tti-inline-link">AI Content Creator (Voice + Image + Video)</Link>{' '}•{' '}
              <Link href="/tools/ai-image-generation" className="tti-inline-link">AI Image Generator (Full Tool)</Link>{' '}•{' '}
              <Link href="/tools/image-editing" className="tti-inline-link">Free AI Image Editor</Link>{' '}•{' '}
              <Link href="/tools/ai-voice-generation" className="tti-inline-link">AI Voice Generator</Link>
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}