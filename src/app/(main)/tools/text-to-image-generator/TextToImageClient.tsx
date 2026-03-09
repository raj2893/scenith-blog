'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const DEMO_IMAGES = [
  "https://cdn.scenith.in/images/sole_image_gen/7/92c16acb-0f22-44e4-9a87-32314e3d4b5a.png",
  "https://cdn.scenith.in/images/sole_image_gen/1001/72fafd61-493e-46f9-be5c-f6eed674662f.png",
  "https://cdn.scenith.in/images/sole_image_gen/1032/172e0d0f-c194-4ac7-bb93-9aaf6e3e21d8.png",
  "https://cdn.scenith.in/images/sole_image_gen/1032/562b0ac3-fc69-4ac7-b4b3-3f05e7b5638c.png",
  "https://cdn.scenith.in/images/sole_image_gen/1139/ed2d9f3e-5d95-4da1-88e4-95971941730e.png",
  "https://cdn.scenith.in/images/sole_image_gen/1139/f0d70db9-6388-446b-ac27-8ffa0bb162aa.png",
  "https://cdn.scenith.in/images/sole_image_gen/1139/be641c98-d248-4c77-b82a-e704fa4c7b2a.png",
  "https://cdn.scenith.in/images/sole_image_gen/1162/3a656bf0-af3e-466d-a65f-b9a9fd85c39f.png",
  "https://cdn.scenith.in/images/sole_image_gen/1162/cc4b271c-4941-4a2d-97e5-070afb8a0c09.png",
  "https://cdn.scenith.in/images/sole_image_gen/1162/f53619ce-8fe5-446e-b38f-d6069469db6f.png",
  "https://cdn.scenith.in/images/sole_image_gen/1204/aefc2c01-dbfb-49c8-89fe-957d313c207f.png",
  "https://cdn.scenith.in/images/sole_image_gen/1202/788ab6df-fe3d-4a44-b6aa-fc51a8e8c97d.png",
  "https://cdn.scenith.in/images/sole_image_gen/1259/31bdd81a-6a9a-44d7-816e-b4053269e8ef.png",
  "https://cdn.scenith.in/images/sole_image_gen/1391/93c6fb3d-bd1e-4782-8444-07761d6fba66.png",
  "https://cdn.scenith.in/images/sole_image_gen/2/16743040-1fb6-4b2e-80c4-e4079c4c3287.png",
  "https://cdn.scenith.in/images/sole_image_gen/1580/176a73c0-c0a8-4a51-a356-31962b94d51a.png",
  "https://cdn.scenith.in/images/sole_image_gen/1667/4c6deab8-94ac-49f8-ae53-1a44be77e95b.png",
  "https://cdn.scenith.in/images/sole_image_gen/1700/ba57cabf-9fe4-4eda-ac98-6d472327da47.png",
  "https://cdn.scenith.in/images/sole_image_gen/1709/b03a06ef-6280-4afe-aae7-8f9f376d1ea0.png",
  "https://cdn.scenith.in/images/sole_image_gen/1765/c4a3e1d6-11bc-4775-9019-729d558e3ba0.png",
  "https://cdn.scenith.in/images/sole_image_gen/1776/9ca25bbd-0000-4fdf-ad32-546a792a661f.png",
  "https://cdn.scenith.in/images/sole_image_gen/1/2d838ce9-d09c-455f-8707-8a2f92291194.png",
  "https://cdn.scenith.in/images/sole_image_gen/1/7efc1cf0-10ac-4c12-91e5-a4bd3c0c64b9.png",
  "https://cdn.scenith.in/images/sole_image_gen/1/c63facda-9d8c-47cc-9060-a52feba700ae.png",
  "https://cdn.scenith.in/images/sole_image_gen/1904/4b47742f-d24f-4fef-9af3-7d311f4860c1.png",
  "https://cdn.scenith.in/images/sole_image_gen/1/e7140527-8d4e-4193-8082-b8abfda06493.png",
  "https://cdn.scenith.in/images/sole_image_gen/1/67d9a045-433f-43d3-acb7-ba514695b570.png",
  "https://cdn.scenith.in/images/sole_image_gen/1/ad90483e-1772-4567-b885-8b9e17488f4f.png",
  "https://cdn.scenith.in/images/sole_image_gen/1/528def5a-4ce9-4cdf-94bf-77ec6e275d18.png",
  "https://cdn.scenith.in/images/sole_image_gen/1/374b0170-4f85-499e-a1f7-c886b1179902.png",
  "https://cdn.scenith.in/images/sole_image_gen/1962/f219c323-0938-4123-ab00-4e6e88a23435.png",
  "https://cdn.scenith.in/images/sole_image_gen/1964/27c15170-239b-44f6-9f02-d4869ef1c436.png",
  "https://cdn.scenith.in/images/sole_image_gen/1/65560682-5fd5-4ebc-a322-9b49aab26dfd.png",
  "https://cdn.scenith.in/images/sole_image_gen/1/558ce17b-c3ab-4a99-804a-2b15d4c73a8f.png",
  "https://cdn.scenith.in/images/sole_image_gen/1/2dad4f37-76ff-43c6-bc23-bfc5210bb220.png",
  "https://cdn.scenith.in/images/sole_image_gen/1/995e4d62-2900-4460-b59b-4b16bc965c5c.png",
];

const CTA_URL =
  'https://scenith.in/tools/ai-image-generator?utm_source=text_to_image_page&utm_medium=cta_button&utm_campaign=internal_redirect';

const STYLE_EXAMPLES = [
  { icon: '📷', label: 'Realistic Photo', desc: 'Studio-quality photorealism for products & people' },
  { icon: '🎌', label: 'Anime / Manga', desc: 'Japanese illustration style for characters & stories' },
  { icon: '💻', label: 'Digital Art', desc: 'Crisp modern illustration for covers & posters' },
  { icon: '🎮', label: '3D Render', desc: 'Dimensional product shots & architectural visuals' },
  { icon: '🧙', label: 'Fantasy', desc: 'Mythical worlds, dragons, and epic landscapes' },
  { icon: '🚀', label: 'Sci-Fi', desc: 'Futuristic tech, space scenes, and cyberpunk vibes' },
  { icon: '🎨', label: 'Artistic / Painting', desc: 'Oil, watercolour, and painterly aesthetics' },
  { icon: '📼', label: 'Vintage / Retro', desc: 'Nostalgic analogue textures and warm palettes' },
];

const PROMPT_IDEAS = [
  'A golden retriever running through lavender fields at sunset, cinematic lighting',
  'Futuristic Tokyo street at night, neon reflections on rain-soaked pavement',
  'Minimalist product shot of a glass perfume bottle on white marble',
  'Anime girl with silver hair reading under a cherry blossom tree',
  'Epic fantasy castle perched on a floating island above clouds',
  'Vintage travel poster of Rajasthan, warm ochre tones, retro illustration style',
  'Abstract data visualisation, flowing neon particles on deep black',
  'Cosy coffee shop interior, morning light, steam rising from a cup',
];

const FAQ = [
  {
    q: 'What is a text-to-image generator?',
    a: 'A text-to-image generator is an AI tool that converts written descriptions (prompts) into visual images. You type what you want to see — subject, style, mood, colors — and the AI synthesises a unique image in seconds using deep learning models trained on millions of visual examples.',
  },
  {
    q: 'Is this text-to-image tool completely free?',
    a: 'Yes. You can explore all styles and prompts on this page for free. To generate and download your own images, head to the Scenith AI Image Generator — the basic tier includes free monthly image credits with no credit card required.',
  },
  {
    q: 'How do I write a good text-to-image prompt?',
    a: 'Be specific: describe the subject, setting, lighting, color palette, and mood. Instead of "a cat," try "a ginger tabby cat sitting on a rainy windowsill, moody blue lighting, photorealistic." More detail = better output. You can also append style cues like "cinematic," "8K," or "award-winning photography."',
  },
  {
    q: 'Can I use AI-generated images commercially?',
    a: 'Images generated on Scenith come with full commercial-use rights. You can use them in marketing materials, social media, client work, merchandise, and any other commercial projects without attribution or extra licensing fees.',
  },
  {
    q: 'Which art style should I choose for social media?',
    a: 'For Instagram feeds, Digital Art and Realistic Photo styles tend to perform best. Anime works exceptionally well for character-focused content. For LinkedIn and business use, Realistic Photo and 3D Render deliver professional credibility. Test 2–3 styles with the same prompt to see what fits your brand.',
  },
  {
    q: 'How long does AI image generation take?',
    a: 'Most images are generated in 3–8 seconds depending on the model and server load. Complex prompts with many elements may take slightly longer. All generated images are available for instant PNG download at 1024×1024 resolution.',
  },
];

const row1 = DEMO_IMAGES.slice(0, Math.ceil(DEMO_IMAGES.length / 2));
const row2 = DEMO_IMAGES.slice(Math.ceil(DEMO_IMAGES.length / 2));

const TextToImageClient: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [copiedPrompt, setCopiedPrompt] = useState<string | null>(null);

  const handleCopyPrompt = (prompt: string) => {
    navigator.clipboard.writeText(prompt).catch(() => {});
    setCopiedPrompt(prompt);
    setTimeout(() => setCopiedPrompt(null), 2000);
  };

  return (
    <div className="tti-page">
      {/* ── JSON-LD ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'WebPage',
                '@id': 'https://scenith.in/tools/text-to-image-generator#webpage',
                url: 'https://scenith.in/tools/text-to-image-generator',
                name: 'Text to Image Generator Free – AI Art from Text in Seconds',
                description:
                  'Convert any text description into a stunning AI-generated image in seconds. Supports 8 artistic styles. Free to use with commercial rights.',
                isPartOf: { '@id': 'https://scenith.in/#website' },
                breadcrumb: { '@id': 'https://scenith.in/tools/text-to-image-generator#breadcrumb' },
              },
              {
                '@type': 'BreadcrumbList',
                '@id': 'https://scenith.in/tools/text-to-image-generator#breadcrumb',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://scenith.in' },
                  { '@type': 'ListItem', position: 2, name: 'Tools', item: 'https://scenith.in/tools' },
                  {
                    '@type': 'ListItem',
                    position: 3,
                    name: 'Text to Image Generator',
                    item: 'https://scenith.in/tools/text-to-image-generator',
                  },
                ],
              },
              {
                '@type': 'SoftwareApplication',
                '@id': 'https://scenith.in/tools/text-to-image-generator#app',
                name: 'Scenith Text to Image Generator',
                applicationCategory: 'MultimediaApplication',
                operatingSystem: 'Web Browser',
                url: 'https://scenith.in/tools/text-to-image-generator',
                offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
                featureList: [
                  'Text-to-image AI generation',
                  '8 artistic style presets',
                  'Commercial use included',
                  'Instant PNG download',
                  'No watermarks',
                ],
              },
              {
                '@type': 'FAQPage',
                mainEntity: FAQ.map(({ q, a }) => ({
                  '@type': 'Question',
                  name: q,
                  acceptedAnswer: { '@type': 'Answer', text: a },
                })),
              },
            ],
          }),
        }}
      />

      {/* ── Breadcrumb ── */}
      <nav aria-label="Breadcrumb" className="tti-breadcrumb">
        <ol itemScope itemType="https://schema.org/BreadcrumbList">
          {[
            { href: '/', label: 'Home', pos: 1 },
            { href: '/tools', label: 'Tools', pos: 2 },
            { href: '/tools/text-to-image-generator', label: 'Text to Image Generator', pos: 3 },
          ].map(({ href, label, pos }) => (
            <li key={pos} itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <a href={href} itemProp="item"><span itemProp="name">{label}</span></a>
              <meta itemProp="position" content={String(pos)} />
              {pos < 3 && <span className="tti-breadcrumb-sep" aria-hidden>›</span>}
            </li>
          ))}
        </ol>
      </nav>

      {/* ══════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════ */}
      <section className="tti-hero" role="main">
        <div className="tti-hero-bg" aria-hidden="true">
          <div className="tti-hero-orb tti-hero-orb--a" />
          <div className="tti-hero-orb tti-hero-orb--b" />
          <div className="tti-hero-orb tti-hero-orb--c" />
          <div className="tti-hero-grid" />
        </div>

        <motion.div
          className="tti-hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="tti-hero-badge">
            <span className="tti-hero-badge-dot" aria-hidden="true" />
            Free · No Watermarks · Commercial Use
          </div>

          <h1 className="tti-hero-h1">
            Text to Image Generator
            <span className="tti-hero-h1-accent"> — Turn Words into Art</span>
          </h1>

          <p className="tti-hero-sub">
            Type any description. Pick an art style. Watch AI render a stunning image in seconds.
            <br />
            Scenith's text‑to‑image engine supports <strong>8 artistic styles</strong> — from photorealistic to anime, 3D, fantasy, and beyond.
          </p>

          {/* ── Primary CTA ── */}
          
        <a    href={CTA_URL}
            className="tti-cta-primary"
            aria-label="Open the Scenith AI Image Generator and start creating"
          >
            <span className="tti-cta-primary-icon" aria-hidden="true">✨</span>
            Generate Your Image — It's Free
            <span className="tti-cta-primary-arrow" aria-hidden="true">→</span>
          </a>

          <p className="tti-cta-note">No credit card · Instant access · 1024 × 1024 PNG downloads</p>

          <div className="tti-hero-stats" role="list" aria-label="Key statistics">
            {[
              { num: '8', label: 'Art Styles' },
              { num: '3–8s', label: 'Avg. Generation' },
              { num: '100%', label: 'Commercial Rights' },
              { num: '0₹', label: 'To Start' },
            ].map(({ num, label }) => (
              <div key={label} className="tti-stat" role="listitem">
                <span className="tti-stat-num">{num}</span>
                <span className="tti-stat-label">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════
          LIVE GALLERY MARQUEE
      ══════════════════════════════════════════════ */}
      <section className="tti-marquee-section" aria-label="Gallery of AI-generated images from real users">
        <div className="tti-marquee-header">
          <h2>Real Images Created with Scenith AI</h2>
          <p>Every image below was generated from a text prompt — no artist, no stock photo library.</p>
        </div>

        <div className="tti-marquee-wrapper">
          <div className="tti-marquee-track" aria-hidden="true">
            <div className="tti-marquee-inner tti-scroll-left">
              {[...row1, ...row1].map((src, i) => (
                <div key={`r1-${i}`} className="tti-marquee-card">
                  <img src={src} alt="AI text-to-image generation example" loading="lazy" decoding="async" width={220} height={220} />
                </div>
              ))}
            </div>
          </div>
          <div className="tti-marquee-track" aria-hidden="true">
            <div className="tti-marquee-inner tti-scroll-right">
              {[...row2, ...row2].map((src, i) => (
                <div key={`r2-${i}`} className="tti-marquee-card">
                  <img src={src} alt="AI text-to-image generation example" loading="lazy" decoding="async" width={220} height={220} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="tti-marquee-cta-row">
          <a href={CTA_URL} className="tti-cta-secondary" aria-label="Create your own AI image">
            Create Images Like These →
          </a>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          WHAT IS TEXT TO IMAGE
      ══════════════════════════════════════════════ */}
      <section className="tti-what-section" id="what-is-text-to-image" role="region" aria-labelledby="tti-what-h2">
        <div className="tti-container">
          <h2 id="tti-what-h2">What is a Text-to-Image Generator?</h2>
          <p className="tti-section-lead">
            A <strong>text-to-image generator</strong> uses artificial intelligence — specifically diffusion models and transformer-based neural networks — to synthesise entirely new visual content from a plain-text description. You type a <em>prompt</em>; the AI returns a pixel-perfect image that matches your words.
          </p>

          <div className="tti-what-grid">
            <div className="tti-what-card">
              <span className="tti-what-icon" aria-hidden="true">🧠</span>
              <h3>How the AI Understands Your Words</h3>
              <p>
                Your prompt is passed through a <strong>text encoder</strong> (based on models like CLIP) that converts language into high-dimensional numerical vectors. These vectors capture semantic meaning — the AI doesn't just read keywords, it <em>understands context, relationships, and composition</em>.
              </p>
            </div>
            <div className="tti-what-card">
              <span className="tti-what-icon" aria-hidden="true">🔮</span>
              <h3>The Diffusion Process</h3>
              <p>
                Starting from pure random noise, a <strong>diffusion model</strong> iteratively removes noise, guided by your encoded prompt. Each denoising step brings the latent representation closer to a coherent image that matches your description — typically in 20–50 inference steps.
              </p>
            </div>
            <div className="tti-what-card">
              <span className="tti-what-icon" aria-hidden="true">🎨</span>
              <h3>Style Conditioning</h3>
              <p>
                Artistic style presets work by <strong>conditioning the diffusion process</strong> with style-specific embeddings learned from thousands of curated training examples per aesthetic. This steers generation toward photorealism, anime line-art, 3D renders, or painterly textures depending on your selection.
              </p>
            </div>
            <div className="tti-what-card">
              <span className="tti-what-icon" aria-hidden="true">⚡</span>
              <h3>Why It's Fast</h3>
              <p>
                Scenith runs inference on <strong>dedicated GPU clusters</strong> using optimised latent diffusion — processing in compressed latent space rather than full pixel resolution. This enables high-quality 1024×1024 outputs in under 8 seconds without sacrificing fidelity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          8 STYLES DEEP-DIVE
      ══════════════════════════════════════════════ */}
      <section className="tti-styles-section" id="text-to-image-styles" role="region" aria-labelledby="tti-styles-h2">
        <div className="tti-container">
          <h2 id="tti-styles-h2">8 Artistic Styles for Every Text-to-Image Use Case</h2>
          <p className="tti-section-lead">
            The same prompt renders completely differently across styles. Choosing the right one is the single highest-leverage decision in text-to-image generation.
          </p>

          <div className="tti-styles-grid">
            {STYLE_EXAMPLES.map(({ icon, label, desc }) => (
              <div key={label} className="tti-style-card">
                <span className="tti-style-icon" aria-hidden="true">{icon}</span>
                <h3 className="tti-style-name">{label}</h3>
                <p className="tti-style-desc">{desc}</p>
              </div>
            ))}
          </div>

          <div className="tti-styles-cta-row">
            <a href={CTA_URL} className="tti-cta-primary" aria-label="Try all 8 art styles on the image generator">
              <span aria-hidden="true">🎨</span>
              Try All 8 Styles Free
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          PROMPT IDEAS (COPYABLE)
      ══════════════════════════════════════════════ */}
      <section className="tti-prompts-section" id="text-to-image-prompt-ideas" role="region" aria-labelledby="tti-prompts-h2">
        <div className="tti-container">
          <h2 id="tti-prompts-h2">Ready-to-Use Text-to-Image Prompt Ideas</h2>
          <p className="tti-section-lead">
            Copy any prompt below and paste it directly into the generator. Each is crafted to showcase the range of what's possible with Scenith's AI.
          </p>

          <div className="tti-prompts-grid">
            {PROMPT_IDEAS.map((prompt) => (
              <div key={prompt} className="tti-prompt-card">
                <p className="tti-prompt-text">"{prompt}"</p>
                <button
                  className="tti-prompt-copy-btn"
                  onClick={() => handleCopyPrompt(prompt)}
                  aria-label={`Copy prompt: ${prompt}`}
                >
                  {copiedPrompt === prompt ? '✅ Copied!' : '📋 Copy Prompt'}
                </button>
              </div>
            ))}
          </div>

          <div className="tti-prompts-cta-row">
            <a href={CTA_URL} className="tti-cta-secondary">
              Use These Prompts on the Generator →
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          HOW TO WRITE A PROMPT GUIDE
      ══════════════════════════════════════════════ */}
      <section className="tti-guide-section" id="how-to-write-text-to-image-prompts" role="region" aria-labelledby="tti-guide-h2">
        <div className="tti-container">
          <h2 id="tti-guide-h2">How to Write the Perfect Text-to-Image Prompt</h2>
          <p className="tti-section-lead">
            The quality of your output is directly proportional to the quality of your prompt. Here's a battle-tested framework used by professional AI artists.
          </p>

          <div className="tti-guide-steps">
            <article className="tti-guide-step">
              <div className="tti-guide-step-num" aria-label="Step 1">01</div>
              <div className="tti-guide-step-body">
                <h3>Lead with Your Subject</h3>
                <p>
                  Put the most important element first. The AI weighs early tokens more heavily. <em>"A red-tailed hawk perched on a snow-covered pine branch"</em> outperforms <em>"on a pine branch with snow, a hawk."</em>
                </p>
                <div className="tti-guide-tip">
                  <strong>✦ Rule:</strong> Subject → Setting → Lighting → Style → Quality modifiers
                </div>
              </div>
            </article>

            <article className="tti-guide-step">
              <div className="tti-guide-step-num" aria-label="Step 2">02</div>
              <div className="tti-guide-step-body">
                <h3>Define Lighting Explicitly</h3>
                <p>
                  Lighting transforms the entire emotional register of an image. Try: <em>golden hour, rim lighting, studio softbox, moonlit, neon glow, overcast diffuse, candlelight.</em> Lighting cues are among the highest-signal tokens for photorealistic outputs.
                </p>
              </div>
            </article>

            <article className="tti-guide-step">
              <div className="tti-guide-step-num" aria-label="Step 3">03</div>
              <div className="tti-guide-step-body">
                <h3>Add Compositional Direction</h3>
                <p>
                  Guide the camera: <em>close-up portrait, wide-angle landscape, bird's-eye view, macro shot, Dutch angle, symmetrical composition.</em> Without direction, the AI chooses — often well, but never as precisely as you could.
                </p>
              </div>
            </article>

            <article className="tti-guide-step">
              <div className="tti-guide-step-num" aria-label="Step 4">04</div>
              <div className="tti-guide-step-body">
                <h3>Use Quality & Detail Amplifiers</h3>
                <p>
                  Appending terms like <em>8K, ultra-detailed, sharp focus, high fidelity, award-winning photography, trending on ArtStation</em> nudges the model toward its highest-quality learned representations. They act as quality gates, not guarantees, but consistently improve outputs.
                </p>
              </div>
            </article>

            <article className="tti-guide-step">
              <div className="tti-guide-step-num" aria-label="Step 5">05</div>
              <div className="tti-guide-step-body">
                <h3>Use Negative Prompts to Eliminate Errors</h3>
                <p>
                  Tell the AI what NOT to include: <em>blurry, watermark, extra limbs, text, ugly, distorted, low quality, cropped.</em> Negative prompts are often the difference between a 7/10 and a 9/10 output. Use the Advanced Options panel on the generator.
                </p>
                <div className="tti-guide-tip">
                  <strong>✦ Universal negative baseline:</strong> "blurry, low quality, distorted, watermark, signature, text overlay, deformed, extra limbs"
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          USE CASES
      ══════════════════════════════════════════════ */}
      <section className="tti-usecases-section" id="text-to-image-use-cases" role="region" aria-labelledby="tti-usecases-h2">
        <div className="tti-container">
          <h2 id="tti-usecases-h2">Who Uses Text-to-Image Generators? Real-World Applications</h2>
          <p className="tti-section-lead">
            Text-to-image AI has moved well beyond hobbyist art — it's reshaping content pipelines across industries.
          </p>

          <div className="tti-usecases-grid">
            {[
              {
                icon: '📱',
                title: 'Social Media Creators',
                body: 'Generate scroll-stopping feed posts, Stories, and thumbnails on demand. Replace expensive stock subscriptions with custom visuals that match your exact brand aesthetic and campaign message every time.',
                tags: ['Instagram', 'YouTube', 'TikTok', 'Pinterest'],
              },
              {
                icon: '🛍️',
                title: 'E-commerce Sellers',
                body: 'Create product mockups, lifestyle shots, and ad creatives without photoshoots. A single text prompt can produce a dozen variation angles — perfect for A/B testing on Shopify, Amazon, or Meesho listings.',
                tags: ['Product mockups', 'Ad creatives', 'Banner ads'],
              },
              {
                icon: '✍️',
                title: 'Bloggers & Content Writers',
                body: 'Stop paying for stock photos that dont quite match. Generate a custom featured image for every article — one that literally illustrates your exact headline, in your brands visual language.',
                tags: ['Blog headers', 'Featured images', 'Infographic backgrounds'],
              },
              {
                icon: '🎮',
                title: 'Game & App Developers',
                body: 'Prototype concept art, character designs, environment sketches, and UI icons in hours instead of weeks. Use Fantasy, Sci-Fi, and Anime styles to explore visual directions before committing to full production.',
                tags: ['Concept art', 'Character design', 'Environment art'],
              },
              {
                icon: '📊',
                title: 'Marketers & Agencies',
                body: 'Ship campaign visuals at the speed of the brief. Generate on-brand imagery for paid ads, email headers, landing pages, and pitch decks — all from text, all in minutes.',
                tags: ['Paid ads', 'Email marketing', 'Pitch decks'],
              },
              {
                icon: '📚',
                title: 'Educators & Students',
                body: 'Illustrate complex concepts, create engaging presentation slides, and produce custom diagrams for assignments — all from plain-English descriptions. No design skills required.',
                tags: ['Presentations', 'Study materials', 'School projects'],
              },
            ].map(({ icon, title, body, tags }) => (
              <article key={title} className="tti-usecase-card">
                <span className="tti-usecase-icon" aria-hidden="true">{icon}</span>
                <h3>{title}</h3>
                <p>{body}</p>
                <div className="tti-usecase-tags">
                  {tags.map((t) => <span key={t} className="tti-usecase-tag">{t}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          MIDDLE CTA BANNER
      ══════════════════════════════════════════════ */}
      <section className="tti-mid-cta" role="region" aria-label="Try the text to image generator">
        <div className="tti-mid-cta-orb" aria-hidden="true" />
        <h2>Your imagination is the only limit.</h2>
        <p>Type a description. Get a stunning image. Completely free to start.</p>
        <a href={CTA_URL} className="tti-cta-primary tti-cta-primary--large" aria-label="Open AI image generator tool">
          <span aria-hidden="true">🚀</span>
          Open the Text-to-Image Generator
          <span aria-hidden="true">→</span>
        </a>
        <p className="tti-cta-note">7 powerful AI models · 8 styles · instant PNG download</p>
      </section>

      {/* ══════════════════════════════════════════════
          TEXT TO IMAGE vs COMPETITORS
      ══════════════════════════════════════════════ */}
      <section className="tti-compare-section" id="text-to-image-comparison" role="region" aria-labelledby="tti-compare-h2">
        <div className="tti-container">
          <h2 id="tti-compare-h2">Scenith vs Other Text-to-Image Generators</h2>
          <p className="tti-section-lead">
            The text-to-image landscape is crowded. Here's how Scenith stacks up on the factors that actually matter.
          </p>

          <div className="tti-compare-table-wrap" role="region" aria-label="Comparison table">
            <table className="tti-compare-table">
              <thead>
                <tr>
                  <th scope="col">Feature</th>
                  <th scope="col" className="tti-compare-highlight">Scenith ✦</th>
                  <th scope="col">Midjourney</th>
                  <th scope="col">DALL·E 3</th>
                  <th scope="col">Adobe Firefly</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Free tier available', '✅ Yes', '❌ No', '❌ No', '✅ Limited'],
                  ['Commercial rights on free', '✅ Yes', '❌ No', '❌ No', '⚠️ Partial'],
                  ['No Discord required', '✅ Yes', '❌ No', '✅ Yes', '✅ Yes'],
                  ['Art style presets', '✅ 8 styles', '⚠️ Via prompts', '⚠️ Via prompts', '⚠️ Limited'],
                  ['No watermarks', '✅ Yes', '⚠️ Paid only', '✅ Yes', '⚠️ Paid only'],
                  ['INR pricing', '✅ From ₹99', '❌ USD only', '❌ USD only', '❌ USD only'],
                  ['Integrated editor', '✅ Built-in', '❌ None', '❌ None', '⚠️ Separate tool'],
                ].map(([feature, scenith, mj, dalle, firefly]) => (
                  <tr key={feature}>
                    <td>{feature}</td>
                    <td className="tti-compare-highlight">{scenith}</td>
                    <td>{mj}</td>
                    <td>{dalle}</td>
                    <td>{firefly}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          FAQ
      ══════════════════════════════════════════════ */}
      <section className="tti-faq-section" id="text-to-image-faq" role="region" aria-labelledby="tti-faq-h2">
        <div className="tti-container">
          <h2 id="tti-faq-h2">Frequently Asked Questions About Text-to-Image Generation</h2>
          <p className="tti-section-lead">Everything you need to know before you start generating.</p>

          <div className="tti-faq-list" role="list">
            {FAQ.map(({ q, a }, i) => (
              <div
                key={i}
                className={`tti-faq-item ${openFaq === i ? 'tti-faq-item--open' : ''}`}
                role="listitem"
              >
                <button
                  className="tti-faq-question"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span>{q}</span>
                  <span className="tti-faq-chevron" aria-hidden="true">{openFaq === i ? '−' : '+'}</span>
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div
                      id={`faq-answer-${i}`}
                      className="tti-faq-answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: 'easeInOut' }}
                      role="region"
                      aria-label={q}
                    >
                      <p>{a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          BOTTOM CTA
      ══════════════════════════════════════════════ */}
      <section className="tti-bottom-cta" role="region" aria-label="Final call to action">
        <div className="tti-bottom-cta-inner">
          <h2>Start Generating for Free</h2>
          <p>
            No design experience needed. No credit card. No watermarks. Just type what you want to see and let the AI do the rest.
          </p>
          <a href={CTA_URL} className="tti-cta-primary tti-cta-primary--large" aria-label="Go to Scenith AI Image Generator">
            <span aria-hidden="true">✨</span>
            Go to AI Image Generator
            <span aria-hidden="true">→</span>
          </a>
          <div className="tti-bottom-trust">
            <span>⚡ Generates in 3–8s</span>
            <span>🔒 Secure &amp; private</span>
            <span>📥 1024×1024 PNG</span>
            <span>💼 Commercial rights</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TextToImageClient;