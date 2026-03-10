// app/tools/generate-ai-images-online/GenerateAIImagesOnlineClient.tsx
'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import '../../../../../styles/tools/GenerateAIImagesOnline.css';

const CTA_URL =
  'https://scenith.in/tools/ai-image-generator?utm_source=generate-ai-images-online&utm_medium=landing_page&utm_campaign=seo_satellite&utm_content=cta_button';

const STYLE_EXAMPLES = [
  { icon: '📷', label: 'Realistic Photo',   desc: 'Photorealistic outputs for product shots, portraits, and mockups.' },
  { icon: '🎌', label: 'Anime / Manga',     desc: 'Japanese animation style for characters, fan art, and storytelling.' },
  { icon: '💻', label: 'Digital Art',       desc: 'Vivid illustration style used in posters, covers, and branding.' },
  { icon: '🎮', label: '3D Render',         desc: 'Three-dimensional visuals perfect for product and architecture.' },
  { icon: '🧙', label: 'Fantasy',           desc: 'Magical worlds, dragons, sorcery, and epic landscapes.' },
  { icon: '🚀', label: 'Sci-Fi',            desc: 'Cyberpunk cities, space stations, and futuristic tech.' },
  { icon: '🎨', label: 'Artistic / Oil',    desc: 'Painterly textures inspired by classical and modern art movements.' },
  { icon: '📼', label: 'Vintage / Retro',   desc: 'Nostalgic film-grain aesthetics, VHS vibes, and analog warmth.' },
];

const PROMPT_EXAMPLES = [
  { label: 'Product Mockup',    prompt: 'Minimalist wireless headphones on a white marble surface, studio lighting, commercial product photography, ultra-sharp' },
  { label: 'Social Media',      prompt: 'Golden hour rooftop café, warm bokeh lights, aesthetic Instagram mood, couples in silhouette' },
  { label: 'YouTube Thumbnail', prompt: 'Shocked tech reviewer holding exploding smartphone, vibrant neon background, cinematic composition' },
  { label: 'Fantasy Character', prompt: 'Female elven warrior with silver armor and glowing sword, dark enchanted forest, epic full-body portrait' },
  { label: 'Blog Header',       prompt: 'Futuristic data visualization network, blue gradient, abstract geometric nodes, wide banner, clean design' },
  { label: 'Anime Scene',       prompt: 'Anime boy standing on a rainy Tokyo bridge at night, neon reflections, melancholic mood, Makoto Shinkai style' },
];

const FAQS = [
  {
    q: 'How do I generate AI images online for free?',
    a: "Sign up on Scenith (free), navigate to the AI Image Generator, type a detailed text prompt, choose an art style, and click Generate. Your image is ready in under 5 seconds — no design skills required.",
  },
  {
    q: 'What is the best text-to-image AI generator in 2025?',
    a: 'Scenith\'s AI Image Generator offers 7 powerful models including photorealistic and anime pipelines, all accessible via a clean web interface with no Discord or CLI required. Plans start free with paid credit bundles from ₹99/month.',
  },
  {
    q: 'Can I use AI-generated images commercially?',
    a: 'Yes. All images generated on Scenith come with full commercial usage rights — sell them, use them in client work, marketing materials, or products with zero attribution needed.',
  },
  {
    q: 'Are there watermarks on generated images?',
    a: 'No. Scenith never adds watermarks to generated images — even on the free-tier plan.',
  },
  {
    q: 'What resolution are the generated images?',
    a: 'All AI images are output at 1024×1024 pixels as high-quality PNG files, suitable for social media, print, and digital marketing use.',
  },
  {
    q: 'How is this different from Midjourney or DALL-E?',
    a: "Scenith requires no Discord commands, no ChatGPT Plus subscription, and no third-party accounts. It's a standalone web tool with direct download, commercial rights, and plans starting from ₹99 — significantly more affordable than Midjourney ($10/mo) or ChatGPT Plus ($20/mo).",
  },
  {
    q: 'Can I generate images in different art styles?',
    a: 'Yes — Scenith supports 8 artistic style presets: Realistic Photo, Anime/Manga, Digital Art, 3D Render, Fantasy, Sci-Fi, Artistic/Painting, and Vintage/Retro. Each preset conditions the model to produce a distinctly different visual aesthetic from the same prompt.',
  },
  {
    q: 'What makes a good AI image prompt?',
    a: 'Be specific: include subject, setting, color palette, mood, lighting, and composition angle. Instead of "a cat," write "a ginger tabby cat sleeping on a sunlit windowsill, soft bokeh background, warm golden hour light, photorealistic." More detail = better results.',
  },
];

const USE_CASES = [
  {
    icon: '🎬',
    title: 'YouTube & Video Thumbnails',
    body: 'CTR-boosting thumbnails that outperform stock photography. Generate emotion-driven visuals with dramatic lighting and bold compositions in the exact framing YouTube algorithms reward.',
  },
  {
    icon: '📱',
    title: 'Instagram & Social Media Content',
    body: 'Scroll-stopping feed posts, Story backgrounds, Reel covers, and Pinterest pins — custom-generated to match your brand palette and tone, not recycled stock photos everyone else is using.',
  },
  {
    icon: '🛒',
    title: 'E-Commerce Product Visuals',
    body: 'Studio-quality product mockups without hiring a photographer. Generate lifestyle imagery, flat-lay compositions, and 3D renders for Shopify, Amazon, and Etsy listings in minutes.',
  },
  {
    icon: '📝',
    title: 'Blog & Article Featured Images',
    body: 'Replace generic stock photos with images that match your exact article topic. Unique visuals reduce bounce rate and signal editorial quality to both readers and search engines.',
  },
  {
    icon: '🎮',
    title: 'Game & Character Concept Art',
    body: 'Prototype game assets, character designs, and environmental concept art at low cost. Iterate on style direction rapidly before committing to full production.',
  },
  {
    icon: '💼',
    title: 'Marketing Decks & Presentations',
    body: 'Visually coherent slide decks with custom imagery — no Unsplash, no attribution, no mismatched stock aesthetics. Consistent visual language strengthens pitch credibility.',
  },
];

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

export default function GenerateAIImagesOnlinePage() {
  return (
    <div className="gai-page">

      {/* ── Breadcrumb ── */}
      <nav aria-label="Breadcrumb" className="gai-breadcrumb">
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
            <span itemProp="name">Generate AI Images Online</span>
            <meta itemProp="position" content="3" />
          </li>
        </ol>
      </nav>

      {/* ── Structured Data ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'WebPage',
                '@id': 'https://scenith.in/tools/generate-ai-images-online#webpage',
                url: 'https://scenith.in/tools/generate-ai-images-online',
                name: 'Generate AI Images Online Free | Text to Image Generator 2025',
                description:
                  'Generate AI images online from text prompts instantly. Free text-to-image AI with 8 art styles — no watermarks, full commercial rights.',
                inLanguage: 'en-IN',
                isPartOf: { '@id': 'https://scenith.in/#website' },
                breadcrumb: { '@id': 'https://scenith.in/tools/generate-ai-images-online#breadcrumb' },
              },
              {
                '@type': 'BreadcrumbList',
                '@id': 'https://scenith.in/tools/generate-ai-images-online#breadcrumb',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home',  item: 'https://scenith.in' },
                  { '@type': 'ListItem', position: 2, name: 'Tools', item: 'https://scenith.in/tools' },
                  { '@type': 'ListItem', position: 3, name: 'Generate AI Images Online', item: 'https://scenith.in/tools/generate-ai-images-online' },
                ],
              },
              {
                '@type': 'FAQPage',
                '@id': 'https://scenith.in/tools/generate-ai-images-online#faq',
                mainEntity: FAQS.map(({ q, a }) => ({
                  '@type': 'Question',
                  name: q,
                  acceptedAnswer: { '@type': 'Answer', text: a },
                })),
              },
              {
                '@type': 'SoftwareApplication',
                name: 'Scenith AI Image Generator',
                applicationCategory: 'MultimediaApplication',
                operatingSystem: 'Web Browser',
                url: 'https://scenith.in/tools/ai-image-generator',
                offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR', availability: 'https://schema.org/InStock' },
                featureList: [
                  '8 artistic style presets',
                  'Text-to-image generation',
                  'No watermarks',
                  'Commercial use rights',
                  '1024x1024 PNG output',
                  '7 AI models available',
                ],
                author: { '@type': 'Organization', name: 'Scenith', url: 'https://scenith.in' },
              },
            ],
          }),
        }}
      />

      {/* ──────────────────────────── HERO ──────────────────────────── */}
      <section className="gai-hero" aria-labelledby="gai-hero-h1">
        <div className="gai-hero-bg" aria-hidden="true">
          <div className="gai-orb gai-orb-1" />
          <div className="gai-orb gai-orb-2" />
          <div className="gai-orb gai-orb-3" />
          <div className="gai-grid-lines" />
        </div>

        <motion.div
          className="gai-hero-inner"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <div className="gai-hero-eyebrow">
            <span className="gai-badge">✦ Free · No Watermarks · Commercial Use</span>
          </div>

          <h1 id="gai-hero-h1" className="gai-hero-h1">
            Generate AI Images<br />
            <span className="gai-hero-gradient">Online, Instantly</span>
          </h1>

          <p className="gai-hero-subhead">
            Type what you imagine. Our text-to-image AI transforms your words into stunning,
            high-resolution visuals in under 5 seconds — realistic photos, anime art,
            3D renders, fantasy worlds, and more. No design skills. No credit card. Just create.
          </p>

          <div className="gai-hero-cta-wrap">
            
            <a  href={CTA_URL}
              className="gai-cta-primary"
              aria-label="Open the free AI image generator tool"
            >
              <span className="gai-cta-icon">🎨</span>
              Generate AI Images Free — Start Now
              <span className="gai-cta-arrow">→</span>
            </a>
            <p className="gai-cta-hint">Free plan ·  Instant PNG download</p>
          </div>

          <div className="gai-hero-stats" aria-label="Quick stats">
            {[
              { n: '8',     label: 'Art Styles'         },
              { n: '< 5s',  label: 'Generation Time'    },
              { n: '1024²', label: 'Output Resolution'  },
              { n: '0',     label: 'Watermarks'         },
            ].map(({ n, label }) => (
              <div key={label} className="gai-stat">
                <strong>{n}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ──────────────── WHAT IS / HOW IT WORKS ──────────────── */}
      <section className="gai-section gai-what" id="what-is-text-to-image-generation" aria-labelledby="gai-what-h2">
        <div className="gai-container">
          <FadeIn>
            <h2 id="gai-what-h2" className="gai-section-h2">
              What Does "Generate AI Images Online" Actually Mean?
            </h2>
            <p className="gai-section-lead">
              Text-to-image generation is the process of using an AI model — trained on hundreds of millions
              of image-text pairs — to synthesize a brand new image from a natural language description.
              You provide words; the model provides pixels.
            </p>
          </FadeIn>

          <div className="gai-steps-row">
            {[
              { step: '01', icon: '✍️', title: 'Write a Prompt',     body: 'Describe your subject, setting, mood, colors, and style. The more specific, the more faithful the output.' },
              { step: '02', icon: '🎨', title: 'Pick an Art Style',  body: 'Choose from 8 presets — Realistic Photo, Anime, Digital Art, 3D Render, Fantasy, Sci-Fi, Painting, or Retro.' },
              { step: '03', icon: '⚡', title: 'Generate & Download',body: 'Click generate. In 3–5 seconds your 1024×1024 PNG is ready — download it and use it anywhere.' },
            ].map(({ step, icon, title, body }) => (
              <FadeIn key={step} delay={Number(step) * 0.1}>
                <article className="gai-step-card">
                  <div className="gai-step-num">{step}</div>
                  <div className="gai-step-icon">{icon}</div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────── FLOATING CTA ──────────────── */}
      <FadeIn>
        <div className="gai-cta-band">
          <div className="gai-container gai-cta-band-inner">
            <div className="gai-cta-band-text">
              <strong>Ready to generate your first AI image?</strong>
              <span>It takes 30 seconds. No credit card required.</span>
            </div>
            <a href={CTA_URL} className="gai-cta-primary gai-cta-sm">
              🚀 Open Free Generator →
            </a>
          </div>
        </div>
      </FadeIn>

      {/* ──────────────── 8 ART STYLES ──────────────── */}
      <section className="gai-section gai-styles" id="ai-image-art-styles" aria-labelledby="gai-styles-h2">
        <div className="gai-container">
          <FadeIn>
            <h2 id="gai-styles-h2" className="gai-section-h2">
              8 AI Art Styles to Generate Any Visual You Need
            </h2>
            <p className="gai-section-lead">
              The same text prompt produces radically different results across style presets. Here's what
              each one is optimized for — and when to use it.
            </p>
          </FadeIn>
          <div className="gai-styles-grid">
            {STYLE_EXAMPLES.map(({ icon, label, desc }, i) => (
              <FadeIn key={label} delay={i * 0.05}>
                <article className="gai-style-card">
                  <span className="gai-style-icon">{icon}</span>
                  <h3>{label}</h3>
                  <p>{desc}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────── PROMPT EXAMPLES ──────────────── */}
      <section className="gai-section gai-prompts" id="text-to-image-prompt-examples" aria-labelledby="gai-prompts-h2">
        <div className="gai-container">
          <FadeIn>
            <h2 id="gai-prompts-h2" className="gai-section-h2">
              Proven AI Image Prompt Examples to Get You Started
            </h2>
            <p className="gai-section-lead">
              Copy any of these prompts directly into the generator. Great prompts share one thing:
              specificity. Replace generic nouns with vivid, detailed descriptions.
            </p>
          </FadeIn>
          <div className="gai-prompts-grid">
            {PROMPT_EXAMPLES.map(({ label, prompt }, i) => (
              <FadeIn key={label} delay={i * 0.07}>
                <article className="gai-prompt-card">
                  <span className="gai-prompt-label">{label}</span>
                  <p className="gai-prompt-text">"{prompt}"</p>
                  <a href={CTA_URL} className="gai-prompt-try" aria-label={`Try this ${label} prompt`}>
                    Try this prompt →
                  </a>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────── USE CASES ──────────────── */}
      <section className="gai-section gai-usecases" id="ai-image-use-cases" aria-labelledby="gai-usecases-h2">
        <div className="gai-container">
          <FadeIn>
            <h2 id="gai-usecases-h2" className="gai-section-h2">
              What Can You Create? 6 High-Value Use Cases
            </h2>
            <p className="gai-section-lead">
              Professionals across content creation, e-commerce, marketing, and development are
              replacing expensive stock subscriptions and photoshoots with AI-generated visuals.
            </p>
          </FadeIn>
          <div className="gai-usecases-grid">
            {USE_CASES.map(({ icon, title, body }, i) => (
              <FadeIn key={title} delay={i * 0.07}>
                <article className="gai-usecase-card">
                  <span className="gai-usecase-icon">{icon}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────── WHY SCENITH ──────────────── */}
      <section className="gai-section gai-why" id="why-scenith-ai-image-generator" aria-labelledby="gai-why-h2">
        <div className="gai-container">
          <FadeIn>
            <h2 id="gai-why-h2" className="gai-section-h2">
              Why Generate AI Images on Scenith vs Other Tools?
            </h2>
            <p className="gai-section-lead">
              Most AI image generators bury their best features behind expensive subscriptions,
              clunky interfaces, or Discord servers. Scenith is built differently.
            </p>
          </FadeIn>

          <div className="gai-compare-table-wrap">
            <table className="gai-compare-table" aria-label="Comparison of AI image generators">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th className="gai-highlight-col">Scenith ✦</th>
                  <th>Midjourney</th>
                  <th>DALL-E 3</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Access Method',        'Direct Web App',    'Discord Only',     'ChatGPT Plus'],
                  ['Free Tier Available',  '✅ Yes',            '❌ No',            '❌ No'],
                  ['Starting Price',       '₹99 / mo',         '$10 / mo',         '$20 / mo'],
                  ['Watermarks',           '✅ None',           '✅ None',          '✅ None'],
                  ['Commercial Rights',    '✅ Included',       '✅ Paid plan',     '⚠️ Limited'],
                  ['Style Presets',        '✅ 8 Presets',      '❌ Prompt-only',   '❌ Prompt-only'],
                  ['Direct PNG Download',  '✅ One-click',      '⚠️ Via bot',       '⚠️ Via ChatGPT'],
                  ['Built-in Image Editor','✅ Yes',            '❌ No',            '❌ No'],
                ].map(([feature, scenith, mid, dalle]) => (
                  <tr key={feature}>
                    <td>{feature}</td>
                    <td className="gai-highlight-col"><strong>{scenith}</strong></td>
                    <td>{mid}</td>
                    <td>{dalle}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <FadeIn>
            <div className="gai-cta-center">
              <a href={CTA_URL} className="gai-cta-primary">
                🎨 Generate AI Images Free on Scenith →
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ──────────────── PROMPT WRITING GUIDE ──────────────── */}
      <section className="gai-section gai-guide" id="how-to-write-ai-image-prompts" aria-labelledby="gai-guide-h2">
        <div className="gai-container">
          <FadeIn>
            <h2 id="gai-guide-h2" className="gai-section-h2">
              How to Write AI Image Prompts That Actually Work
            </h2>
            <p className="gai-section-lead">
              The quality of your AI-generated image is directly proportional to the quality of your prompt.
              This is the single highest-leverage skill for getting great results.
            </p>
          </FadeIn>

          <div className="gai-guide-grid">
            {[
              {
                icon: '🎯',
                title: 'Lead With the Subject',
                body: 'Open your prompt with the most important element. "A samurai warrior" before location or style. The model weights earlier tokens more heavily.',
              },
              {
                icon: '💡',
                title: 'Specify Lighting',
                body: '"Golden hour sunlight," "dramatic chiaroscuro," "neon rim lighting," "soft overcast diffusion" — lighting is the single biggest driver of mood and realism.',
              },
              {
                icon: '🖼️',
                title: 'Describe Composition',
                body: '"Wide-angle shot," "extreme close-up," "rule of thirds," "Dutch angle," "overhead flat lay" — give the AI a camera direction, not just a subject.',
              },
              {
                icon: '🎨',
                title: 'Reference a Style or Medium',
                body: '"Oil on canvas," "Studio Ghibli style," "Wes Anderson color palette," "Cinestill 800T film photography" — style references dramatically improve coherence.',
              },
              {
                icon: '🚫',
                title: 'Use Negative Prompts',
                body: 'In the Advanced Options, add what to avoid: "blurry, watermark, extra limbs, low quality, text, logo, distorted." This is free quality insurance.',
              },
              {
                icon: '🔄',
                title: 'Iterate Systematically',
                body: 'Change one variable at a time — first perfect the subject, then lighting, then style. Random wide changes make it impossible to understand what worked.',
              },
            ].map(({ icon, title, body }, i) => (
              <FadeIn key={title} delay={i * 0.06}>
                <article className="gai-guide-card">
                  <span className="gai-guide-icon">{icon}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────── FAQ ──────────────── */}
      <section className="gai-section gai-faq" id="ai-image-generator-faq" aria-labelledby="gai-faq-h2">
        <div className="gai-container gai-faq-inner">
          <FadeIn>
            <h2 id="gai-faq-h2" className="gai-section-h2">
              Frequently Asked Questions About Generating AI Images Online
            </h2>
          </FadeIn>
          <div className="gai-faq-list">
            {FAQS.map(({ q, a }, i) => (
              <FadeIn key={q} delay={i * 0.04}>
                <article className="gai-faq-item">
                  <h3 className="gai-faq-q">{q}</h3>
                  <p className="gai-faq-a">{a}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────── FINAL CTA ──────────────── */}
      <section className="gai-section gai-final-cta" aria-labelledby="gai-final-cta-h2">
        <div className="gai-container">
          <FadeIn>
            <div className="gai-final-cta-box">
              <div className="gai-final-cta-bg" aria-hidden="true" />
              <h2 id="gai-final-cta-h2">
                Start Generating AI Images Online — Free, Right Now
              </h2>
              <p>
                No credit card. No software to install. No Discord required. Just open the tool,
                type your vision, and watch it appear in seconds.
              </p>
              <a href={CTA_URL} className="gai-cta-primary gai-cta-large">
                <span>🎨</span>
                Generate My First AI Image Free
                <span className="gai-cta-arrow">→</span>
              </a>
              <ul className="gai-final-perks" aria-label="Key benefits">
                <li>✅ Free plan available</li>
                <li>✅ 8 artistic styles</li>
                <li>✅ No watermarks</li>
                <li>✅ Commercial use rights</li>
                <li>✅ 1024×1024 PNG download</li>
                <li>✅ Built-in image editor</li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ──────────────── RELATED TOOLS ──────────────── */}
      <section className="gai-section gai-related" aria-labelledby="gai-related-h2">
        <div className="gai-container">
          <FadeIn>
            <h2 id="gai-related-h2" className="gai-section-h2">Complete Your Creative Workflow</h2>
            <p className="gai-section-lead">
              Pair AI image generation with these Scenith tools for an end-to-end content pipeline.
            </p>
          </FadeIn>
          <div className="gai-related-grid">
            {[
              {
                href: 'https://scenith.in/tools/image-editing?utm_source=generate-ai-images-online&utm_medium=related_tools',
                icon: '🖼️',
                title: 'Free Image Editor',
                desc: 'Edit your AI-generated images — add text, filters, crop, and export at full resolution.',
              },
              {
                href: 'https://scenith.in/tools/ai-voice-generation?utm_source=generate-ai-images-online&utm_medium=related_tools',
                icon: '🎤',
                title: 'AI Voice Generator',
                desc: 'Add a professional voiceover to your visuals. 40+ natural voices in 20+ languages.',
              },
              {
                href: 'https://scenith.in/tools/add-subtitles-to-videos?utm_source=generate-ai-images-online&utm_medium=related_tools',
                icon: '🎬',
                title: 'Video Subtitle Tool',
                desc: 'Auto-generate and burn accurate subtitles into your video content.',
              },
            ].map(({ href, icon, title, desc }) => (
              <FadeIn key={title}>
                <a href={href} className="gai-related-card" target="_blank" rel="noopener noreferrer">
                  <span className="gai-related-icon">{icon}</span>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                  <span className="gai-related-link">Open Tool →</span>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}