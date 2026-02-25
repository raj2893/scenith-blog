// app/tools/ai-photo-generator/AIPhotoGeneratorClient.tsx
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../../../../../styles/tools/AIPhotoGenerator.css';

const GENERATE_URL =
  'https://scenith.in/tools/ai-image-generation?utm_source=ai_photo_generator&utm_medium=cta_button&utm_campaign=photo_to_image_crosslink';

const USE_CASES = [
  {
    icon: '🛍️',
    title: 'E-Commerce Product Photos',
    description:
      'Generate studio-quality product photos on any background without expensive photography sessions. Perfect for Amazon, Shopify, and Etsy sellers.',
    prompts: [
      '"White sneakers on a clean marble surface, soft studio lighting, e-commerce style, sharp detail"',
      '"Luxury perfume bottle, black velvet background, dramatic side lighting, commercial photography"',
      '"Skincare product flat lay, pastel pink surface, natural light, lifestyle photography"',
    ],
  },
  {
    icon: '🧑‍💼',
    title: 'Professional Headshots & Portraits',
    description:
      'Create polished professional portraits and headshots without hiring a photographer. Ideal for LinkedIn profiles, team pages, and speaker bios.',
    prompts: [
      '"Professional businesswoman in modern office, natural window light, confident expression, DSLR portrait"',
      '"Male entrepreneur in casual blazer, blurred city background, bokeh effect, LinkedIn headshot"',
      '"Diverse team group photo, bright modern workspace, candid smiles, corporate photography"',
    ],
  },
  {
    icon: '🏡',
    title: 'Real Estate & Interior Photos',
    description:
      'Visualize property listings, interior design concepts, and architectural renders before a single brick is laid.',
    prompts: [
      '"Modern Scandinavian living room, afternoon sunlight, minimalist furniture, architectural photography"',
      '"Luxury kitchen interior, marble countertops, pendant lights, real estate listing photo"',
      '"Aerial view of suburban house, manicured lawn, golden hour lighting, drone photography"',
    ],
  },
  {
    icon: '🍔',
    title: 'Food Photography',
    description:
      'Generate mouth-watering food photos for menus, delivery apps, blogs, and social media without a food stylist.',
    prompts: [
      '"Gourmet burger, sesame bun, vibrant toppings, dark moody restaurant background, food photography"',
      '"Flat lay of Italian pasta dish, fresh herbs garnish, rustic wooden table, overhead shot"',
      '"Artisan coffee latte art, ceramic cup, cozy café background, warm tones, lifestyle photo"',
    ],
  },
  {
    icon: '🌍',
    title: 'Travel & Landscape Photography',
    description:
      'Replace generic stock landscapes with custom, unique travel imagery tailored to your exact destination and mood.',
    prompts: [
      '"Santorini cliff village at sunset, blue domes, golden hour, travel photography"',
      '"Dense Amazon rainforest aerial view, morning mist, lush green canopy, nature photography"',
      '"Tokyo neon-lit street at night, rainy reflections, cinematic wide angle, travel photography"',
    ],
  },
  {
    icon: '📣',
    title: 'Marketing & Ad Creatives',
    description:
      'Produce scroll-stopping ad images for Facebook, Google, and Instagram campaigns without a creative agency.',
    prompts: [
      '"Smiling young woman using smartphone, outdoor café setting, bright sunny day, lifestyle ad"',
      '"Fitness athlete mid-sprint, dynamic motion blur, dramatic stadium lighting, sports photography"',
      '"Family around dining table, holiday dinner, warm candlelight, authentic lifestyle photo"',
    ],
  },
];

const PHOTO_TYPES = [
  { icon: '🖼️', label: 'Product Shots' },
  { icon: '🧑', label: 'Portraits' },
  { icon: '🏡', label: 'Interiors' },
  { icon: '🌄', label: 'Landscapes' },
  { icon: '🍽️', label: 'Food' },
  { icon: '🏙️', label: 'Architecture' },
  { icon: '🐾', label: 'Animals' },
  { icon: '📣', label: 'Ad Creatives' },
];

const FAQS = [
  {
    q: 'What is an AI photo generator?',
    a: "An AI photo generator uses deep learning models—specifically latent diffusion architectures—to synthesize photorealistic images from plain text descriptions. Unlike traditional AI art generators that produce painterly or stylized outputs, an AI photo generator is optimized to produce images indistinguishable from real camera photographs: correct lighting, realistic textures, accurate perspective, and natural depth of field.",
  },
  {
    q: 'How is an AI photo generator different from an AI image generator?',
    a: "The distinction is in output intent. An AI image generator encompasses all visual styles—anime, digital art, fantasy illustrations, 3D renders, and photorealism. An AI photo generator specifically optimizes for photorealistic output: natural lighting, camera-accurate depth of field, realistic skin textures, and physically plausible environments. Scenith's tool offers both—the 'Realistic Photo' style mode is what powers the AI photo generator experience.",
  },
  {
    q: 'Are AI-generated photos free to use commercially?',
    a: "Yes. All photos generated through Scenith carry full commercial use rights. You can use them in paid advertisements, client projects, product listings, publications, and resale without attribution. The free BASIC plan includes 30 photos per month.",
  },
  {
    q: 'Can I use AI-generated photos for Amazon or Shopify product listings?',
    a: "Yes. AI-generated product photos are widely used on e-commerce platforms. Ensure your prompt describes a clean background (e.g., 'white background, studio lighting') for platform compliance. Always review individual platform guidelines regarding AI-generated content disclosures.",
  },
  {
    q: 'How do I write a good prompt for realistic AI photos?',
    a: "Treat your prompt like a photography brief. Specify: (1) subject with detailed attributes, (2) background or location, (3) lighting type (golden hour, studio, natural window light), (4) camera style (DSLR portrait, drone aerial, macro close-up), and (5) mood or color palette. Example: 'Young woman reading book in sunlit café, warm tones, shallow depth of field, DSLR 85mm portrait lens'.",
  },
  {
    q: 'What resolution are the generated photos?',
    a: "All generated photos are output at 1024×1024 pixels in high-quality PNG format. This resolution is suitable for social media, web, marketing materials, and most print applications. CREATOR and STUDIO plans support higher resolution outputs.",
  },
  {
    q: 'Can AI generate photos of real people or celebrities?',
    a: "For privacy, legal, and ethical reasons, Scenith's AI is designed to avoid generating likenesses of identifiable real individuals. Instead, describe generic characteristics: 'professional woman in her 30s, short brown hair, business attire' for best results.",
  },
  {
    q: 'How many free AI photos can I generate per month?',
    a: "The free BASIC plan includes 30 AI photos per month (3 per day). CREATOR plan offers 400/month, and STUDIO plan offers 900/month with additional benefits including priority generation.",
  },
];

export default function AIPhotoGeneratorClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="ai-image-generator-page">
      {/* ── Breadcrumb ── */}
      <nav aria-label="Breadcrumb" className="breadcrumb-nav">
        <ol itemScope itemType="https://schema.org/BreadcrumbList">
          {[
            { href: '/', name: 'Home', pos: 1 },
            { href: '/tools', name: 'Tools', pos: 2 },
            { name: 'AI Photo Generator', pos: 3 },
          ].map((item) => (
            <li
              key={item.pos}
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              {item.href ? (
                <a href={item.href} itemProp="item">
                  <span itemProp="name">{item.name}</span>
                </a>
              ) : (
                <span itemProp="name">{item.name}</span>
              )}
              <meta itemProp="position" content={String(item.pos)} />
            </li>
          ))}
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
                '@id': 'https://scenith.in/tools/ai-photo-generator#webpage',
                url: 'https://scenith.in/tools/ai-photo-generator',
                name: 'Free AI Photo Generator — Realistic Photos from Text | Scenith',
                description:
                  'Generate hyper-realistic AI photos from text. Product shots, portraits, landscapes, food photography & more. Free, commercial use, instant PNG download.',
                breadcrumb: {
                  '@type': 'BreadcrumbList',
                  itemListElement: [
                    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://scenith.in' },
                    { '@type': 'ListItem', position: 2, name: 'Tools', item: 'https://scenith.in/tools' },
                    { '@type': 'ListItem', position: 3, name: 'AI Photo Generator', item: 'https://scenith.in/tools/ai-photo-generator' },
                  ],
                },
                mainEntity: { '@id': 'https://scenith.in/tools/ai-photo-generator#software' },
              },
              {
                '@type': 'SoftwareApplication',
                '@id': 'https://scenith.in/tools/ai-photo-generator#software',
                name: 'Scenith AI Photo Generator',
                applicationCategory: 'MultimediaApplication',
                operatingSystem: 'Web Browser',
                url: 'https://scenith.in/tools/ai-photo-generator',
                description:
                  'Free AI-powered photo generator that converts text descriptions into photorealistic images. Ideal for product photography, portraits, e-commerce, marketing, and social media.',
                offers: {
                  '@type': 'Offer',
                  price: '0',
                  priceCurrency: 'USD',
                  availability: 'https://schema.org/InStock',
                },
                featureList: [
                  'Text-to-photo generation',
                  'Photorealistic output',
                  'Commercial use rights',
                  'No watermarks',
                  '30 free photos per month',
                  'Instant PNG download',
                  'Product photography mode',
                  'Portrait photography mode',
                ],
                screenshot: 'https://scenith.in/images/AIImageGenerationSS.png',
                author: {
                  '@type': 'Organization',
                  '@id': 'https://scenith.in/#organization',
                  name: 'Scenith',
                },
              },
              {
                '@type': 'FAQPage',
                '@id': 'https://scenith.in/tools/ai-photo-generator#faq',
                mainEntity: FAQS.map(({ q, a }) => ({
                  '@type': 'Question',
                  name: q,
                  acceptedAnswer: { '@type': 'Answer', text: a },
                })),
              },
              {
                '@type': 'HowTo',
                '@id': 'https://scenith.in/tools/ai-photo-generator#howto',
                name: 'How to Generate Realistic AI Photos from Text',
                description: 'Step-by-step guide to generating professional-quality AI photos using Scenith.',
                totalTime: 'PT1M',
                step: [
                  { '@type': 'HowToStep', position: 1, name: 'Write a Photo Brief', text: "Describe your subject, setting, lighting, and camera style. E.g., 'product on white background, studio lighting, sharp detail, commercial photography'." },
                  { '@type': 'HowToStep', position: 2, name: 'Select Realistic Photo Style', text: "Choose the 'Realistic Photo' style preset to optimize generation for photorealistic output." },
                  { '@type': 'HowToStep', position: 3, name: 'Generate & Download', text: 'Click Generate. Your AI photo is ready in seconds as a high-resolution PNG, free for commercial use.' },
                ],
              },
            ],
          }),
        }}
      />

      {/* ── Particles ── */}
      <div className="particle-background">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="particle" />
        ))}
      </div>

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section className="hero-section" id="hero" role="main">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>
            Free AI Photo Generator: Create Hyper-Realistic Photos from Text — No Camera Needed
          </h1>
          <p className="hero-description">
            Skip the photoshoot. Describe any scene in plain text and get a professional,
            camera-quality AI photo in seconds. Product shots, portraits, landscapes, food
            photography, real estate interiors — all generated free with full commercial rights
            and zero watermarks. Works seamlessly with our{' '}
            <a href="/tools/image-editing" className="inline-link">
              free image editor
            </a>{' '}
            for a complete content creation workflow.
          </p>

          {/* ── MEGA CTA ── */}
          <motion.div
            className="hero-cta-section"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="photo-gen-cta-block">
              <div className="photo-gen-cta-inner">
                <div className="photo-gen-cta-badge">✨ 100% Free · Commercial Rights Included</div>

                <h2 className="photo-gen-cta-heading">
                  Start Generating AI Photos Now
                </h2>
                <p className="photo-gen-cta-subtext">
                  Type what you want to see. Choose the <strong>Realistic Photo</strong> style.
                  Download your professional AI photo in under 10 seconds.
                </p>

                <div className="photo-gen-prompt-examples">
                  <span className="prompt-chip">📦 Product on white background, studio lighting</span>
                  <span className="prompt-chip">🧑 Professional headshot, office background</span>
                  <span className="prompt-chip">🌅 Santorini sunset, travel photography</span>
                  <span className="prompt-chip">🍕 Gourmet pizza, moody restaurant lighting</span>
                </div>

                
                <a  href={GENERATE_URL}
                  className="cta-button generate-button photo-gen-main-cta"
                  aria-label="Open AI Photo Generator tool"
                  rel="noopener"
                >
                  <span className="cta-icon">📸</span>
                  Generate Your AI Photo Free — Start Now
                  <span className="cta-arrow">→</span>
                </a>

                <div className="photo-gen-trust-row">
                  <span>⚡ Results in &lt;10 seconds</span>
                  <span>🔒 No credit card required</span>
                  <span>📥 High-res PNG download</span>
                  <span>✅ Commercial use included</span>
                </div>

                <div className="photo-gen-plan-note">
                  Free plan: <strong>30 photos/month</strong> · 
                  CREATOR: <strong>400/month</strong> · 
                  STUDIO: <strong>900/month</strong>
                  &nbsp;·&nbsp;
                  <a href="/pricing" className="inline-link">View pricing →</a>
                </div>
              </div>
            </div>

            {/* Photo type chips */}
            <div className="photo-type-grid">
              {PHOTO_TYPES.map((t) => (
                <div key={t.label} className="photo-type-chip">
                  <span>{t.icon}</span>
                  <span>{t.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Hero image */}
          <figure className="hero-image-container">
            <img
              src="/images/AIImageGenerationSS.png"
              alt="Scenith AI Photo Generator interface — type a description and get a realistic photo instantly"
              className="hero-image"
              width={800}
              height={400}
            />
            <figcaption className="sr-only">
              Example AI-generated realistic photo created from a text description using Scenith's AI Photo Generator
            </figcaption>
          </figure>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════
          WHAT IS AI PHOTO GENERATOR
      ══════════════════════════════════════ */}
      <section
        className="what-is-section"
        id="what-is-ai-photo-generator"
        role="region"
        aria-labelledby="what-is-title"
      >
        <div className="container">
          <h2 id="what-is-title">
            What is an AI Photo Generator? How It Differs from AI Art Generators
          </h2>
          <p className="section-description">
            Not all AI image tools are created equal. Understanding the distinction between an
            AI photo generator and a general AI image generator helps you choose the right tool
            for photorealistic output.
          </p>

          <div className="content-deep-dive">
            <div className="dive-section">
              <h3>AI Photo Generator vs. AI Image Generator: Key Differences</h3>
              <p>
                An <strong>AI image generator</strong> is a broad category encompassing all
                AI-produced visuals—anime, fantasy illustrations, digital art, abstract
                paintings, and photorealism. An <strong>AI photo generator</strong> is a
                specialized application tuned for one specific output: images that look like
                they were taken by a real camera.
              </p>
              <div className="tech-cards">
                <div className="tech-card">
                  <h4>📷 AI Photo Generator</h4>
                  <p>
                    Optimized for photorealism: natural lighting physics, realistic depth of
                    field, authentic textures, and camera-accurate perspective. Output is
                    designed to pass as genuine photography.
                  </p>
                </div>
                <div className="tech-card">
                  <h4>🎨 AI Art / Image Generator</h4>
                  <p>
                    Encompasses all visual styles—anime, illustration, painterly, abstract,
                    3D render. Prioritizes creative expression over photographic accuracy.
                  </p>
                </div>
                <div className="tech-card">
                  <h4>🔬 How Photorealism Is Achieved</h4>
                  <p>
                    Photo-mode AI models are fine-tuned on photographic datasets, enforcing
                    correct EXIF metadata patterns, realistic bokeh simulation, and natural
                    color grading consistent with real camera sensors.
                  </p>
                </div>
                <div className="tech-card">
                  <h4>💡 When to Use Each</h4>
                  <p>
                    Use an AI photo generator for product listings, headshots, stock photo
                    replacement, and ad creatives. Use an AI image generator for brand
                    illustrations, creative art, and stylized content.
                  </p>
                </div>
              </div>
            </div>

            <div className="dive-section">
              <h3>The Technology Behind Photorealistic AI Photo Generation</h3>
              <p>
                Modern AI photo generators use <strong>latent diffusion models</strong> (LDMs)
                conditioned on CLIP text embeddings. The process starts with Gaussian noise in
                latent space and iteratively denoises it using a U-Net architecture guided by
                your text prompt. For photorealism, models are additionally conditioned on
                classifier-free guidance that enforces photographic priors — correct light
                falloff, realistic shadow casting, and physically based rendering aesthetics.
              </p>
              <ol className="process-list">
                <li>
                  <strong>Prompt Parsing:</strong> CLIP encoder converts your text into
                  768-dimensional embeddings, capturing semantic meaning including subject,
                  action, setting, and photographic style cues.
                </li>
                <li>
                  <strong>Noise Initialization:</strong> A random latent tensor (typically
                  64×64) is sampled from a Gaussian distribution, representing a blank
                  "photographic canvas."
                </li>
                <li>
                  <strong>Guided Denoising:</strong> Over 20–50 DDIM steps, the U-Net
                  progressively removes noise while steering generation toward the text prompt,
                  with photorealistic conditioning applied at each step.
                </li>
                <li>
                  <strong>VAE Decoding:</strong> The final latent representation is decoded
                  through a Variational Autoencoder (VAE) into full pixel space at
                  1024×1024 resolution.
                </li>
                <li>
                  <strong>Photographic Post-Processing:</strong> Sharpness, color balance,
                  and exposure are refined to match the tonal characteristics of professional
                  camera photography.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          HOW TO GENERATE
      ══════════════════════════════════════ */}
      <section
        className="how-to-generate-section"
        id="how-to-generate"
        role="region"
        aria-labelledby="how-to-generate-title"
      >
        <div className="container">
          <h2 id="how-to-generate-title">
            How to Generate Realistic AI Photos from Text: Step-by-Step Guide
          </h2>
          <p className="section-description">
            Writing effective prompts for photorealistic AI photos is a learnable skill. This
            guide covers the exact framework used by professional content creators and marketing
            teams to get studio-quality outputs every time.
          </p>

          <div className="tutorial-steps">
            <article className="tutorial-step">
              <div className="tutorial-step-number">Step 1</div>
              <div className="tutorial-step-content">
                <h3>Write a Photography Brief, Not Just a Description</h3>
                <p>
                  The single biggest mistake users make is describing the subject without
                  describing the <em>photograph</em>. Think like a photographer briefing a
                  colleague:
                </p>
                <ul className="tutorial-checklist">
                  <li><strong>Subject:</strong> Who or what is the main focus?</li>
                  <li><strong>Environment:</strong> Indoor studio, outdoor natural, location?</li>
                  <li><strong>Lighting:</strong> Golden hour, soft box, ring light, natural window?</li>
                  <li><strong>Camera & Lens:</strong> "DSLR portrait, 85mm f/1.8", "wide angle", "macro"</li>
                  <li><strong>Depth of Field:</strong> "shallow bokeh background", "deep focus, everything sharp"</li>
                  <li><strong>Color Grade:</strong> "warm tones", "cool editorial", "neutral documentary"</li>
                </ul>
                <div className="tutorial-tip">
                  <strong>💡 Pro Tip:</strong> Weak prompt: "a coffee cup." Strong prompt: "Artisan latte in ceramic cup on a wooden café table, warm morning light from left window, shallow depth of field, steam rising, food photography, 50mm lens."
                </div>
              </div>
            </article>

            <article className="tutorial-step">
              <div className="tutorial-step-number">Step 2</div>
              <div className="tutorial-step-content">
                <h3>Select the "Realistic Photo" Style Preset</h3>
                <p>
                  On Scenith's AI generator, always select <strong>Realistic Photo</strong> style
                  when your goal is photorealistic output. This mode:
                </p>
                <ul className="tutorial-checklist">
                  <li>Activates photographic conditioning in the diffusion model</li>
                  <li>Suppresses painterly or illustrative artifacts</li>
                  <li>Enforces lighting physics consistent with real camera captures</li>
                  <li>Optimizes for natural skin tones, material textures, and environmental detail</li>
                </ul>
                <div className="tutorial-tip">
                  <strong>💡 Pro Tip:</strong> In your negative prompt, add "illustration, cartoon, painting, anime, 3d render, CGI" to further enforce photorealism and prevent stylistic drift.
                </div>
              </div>
            </article>

            <article className="tutorial-step">
              <div className="tutorial-step-number">Step 3</div>
              <div className="tutorial-step-content">
                <h3>Craft Your Negative Prompt for Quality Control</h3>
                <p>
                  Negative prompts are the secret weapon of professional AI photo generation.
                  They instruct the model on what to actively avoid:
                </p>
                <ul className="tutorial-checklist">
                  <li><strong>Quality filters:</strong> "blurry, out of focus, low resolution, grainy"</li>
                  <li><strong>Deformation guards:</strong> "distorted hands, extra fingers, deformed face"</li>
                  <li><strong>Style rejection:</strong> "painting, illustration, cartoon, sketch, watercolor"</li>
                  <li><strong>Artefact removal:</strong> "watermark, text overlay, logo, border, frame"</li>
                  <li><strong>Composition control:</strong> "cropped, cut off, partial figure, bad framing"</li>
                </ul>
              </div>
            </article>

            <article className="tutorial-step">
              <div className="tutorial-step-number">Step 4</div>
              <div className="tutorial-step-content">
                <h3>Generate, Evaluate, and Iterate</h3>
                <p>
                  AI photo generation is an iterative process. Your first output is a starting
                  point:
                </p>
                <ul className="tutorial-checklist">
                  <li>If lighting is wrong, add more specific lighting terms to your prompt</li>
                  <li>If the composition is off, specify camera angle ("low angle", "eye level", "bird's eye")</li>
                  <li>If colors look artificial, add "natural color grading" or "Kodak film tones"</li>
                  <li>If details are lacking, add "high detail", "sharp focus", "4K resolution" to your prompt</li>
                </ul>
                <div className="tutorial-tip">
                  <strong>💡 Pro Tip:</strong> Keep a prompt journal. When you get an output you love, save the exact prompt. Slight variations of successful prompts consistently produce high-quality results.
                </div>
              </div>
            </article>

            <article className="tutorial-step advanced">
              <div className="tutorial-step-number">Step 5</div>
              <div className="tutorial-step-content">
                <h3>Download and Use Your AI Photo</h3>
                <p>
                  Your AI photo is delivered as a high-resolution PNG. Here's how creators
                  commonly use their outputs:
                </p>
                <div className="download-options">
                  <div className="download-format"><strong>Format:</strong> High-quality PNG</div>
                  <div className="download-format"><strong>Resolution:</strong> 1024×1024 px</div>
                  <div className="download-format"><strong>Rights:</strong> Full commercial use</div>
                </div>
                <p>
                  For additional editing — removing backgrounds, adding text overlays, resizing
                  for specific platforms — use Scenith's integrated{' '}
                  <a href="/tools/image-editing" className="inline-link">free image editor</a>{' '}
                  directly from the download screen.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          USE CASES
      ══════════════════════════════════════ */}
      <section
        className="use-cases-showcase"
        role="region"
        aria-labelledby="use-cases-title"
      >
        <div className="container">
          <h2 id="use-cases-title">
            6 Professional Use Cases for AI Photo Generation (With Exact Prompt Examples)
          </h2>
          <p className="section-description">
            AI photo generation is reshaping professional workflows across industries. Here are
            the top use cases with proven prompts you can use immediately.
          </p>

          <div className="use-case-detailed-grid">
            {USE_CASES.map((uc, idx) => (
              <article key={uc.title} className="use-case-detailed">
                <span className="use-case-number">{idx + 1}</span>
                <h3>
                  {uc.icon} {uc.title}
                </h3>
                <p>{uc.description}</p>
                <div className="use-case-prompts">
                  <strong>Example Prompts:</strong>
                  <ul>
                    {uc.prompts.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <div className="use-case-cta">
            <h3>Ready to Generate Your First AI Photo?</h3>
            <p>
              Use any of the prompts above as a starting template. Customize the details,
              click Generate, and download a professional AI photo in seconds.
            </p>
            
            <a  href={GENERATE_URL}
              className="cta-button generate-button"
              aria-label="Generate AI photos free on Scenith"
            >
              📸 Generate AI Photos Free — Open Tool
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          HOW IT WORKS (3-step visual)
      ══════════════════════════════════════ */}
      <section
        className="how-section"
        id="how-it-works"
        role="region"
        aria-labelledby="how-it-works-title"
      >
        <motion.div
          className="container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 id="how-it-works-title">
            How Scenith's AI Photo Generator Works in 3 Steps
          </h2>
          <p className="section-description">
            No camera. No studio. No design skills required. Just text.
          </p>
          <div className="steps-grid" role="list">
            {[
              {
                n: '1',
                title: 'Write Your Photo Brief',
                desc: 'Describe your subject, lighting, camera style, and environment. The more photographic detail you include, the more realistic your output.',
              },
              {
                n: '2',
                title: 'Select Realistic Photo Style',
                desc: "Choose 'Realistic Photo' from the style dropdown. This activates photographic conditioning for natural lighting, sharp textures, and camera-accurate depth of field.",
              },
              {
                n: '3',
                title: 'Download & Deploy',
                desc: 'Get your high-resolution AI photo as a PNG in under 10 seconds. Use commercially across ads, listings, social media, and publications.',
              },
            ].map((step) => (
              <motion.article
                key={step.n}
                className="step-card"
                whileHover={{ scale: 1.05 }}
                role="listitem"
              >
                <div className="step-number" aria-label={`Step ${step.n}`}>
                  {step.n}
                </div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════
          COMPARISON
      ══════════════════════════════════════ */}
      <section
        className="competitors-comparison"
        role="region"
        aria-labelledby="vs-competitors"
      >
        <div className="container">
          <h2 id="vs-competitors">
            Scenith AI Photo Generator vs. Competitors: Why Creators Choose Scenith
          </h2>
          <div className="comparison-grid">
            <div className="vs-card">
              <h3>vs. Adobe Firefly</h3>
              <ul>
                <li>✅ <strong>Scenith:</strong> Free 30 photos/month, no Creative Cloud subscription</li>
                <li>❌ <strong>Adobe Firefly:</strong> Requires paid Creative Cloud plan for full access</li>
                <li>✅ <strong>Scenith:</strong> Standalone web tool, no software installation</li>
                <li>⚠️ <strong>Adobe Firefly:</strong> Tied to Adobe ecosystem</li>
              </ul>
            </div>
            <div className="vs-card">
              <h3>vs. Midjourney</h3>
              <ul>
                <li>✅ <strong>Scenith:</strong> Free plan available, web-based UI</li>
                <li>❌ <strong>Midjourney:</strong> $10/month minimum, Discord interface required</li>
                <li>✅ <strong>Scenith:</strong> One-click generation, beginner-friendly</li>
                <li>⚠️ <strong>Midjourney:</strong> Steep learning curve for commands</li>
              </ul>
            </div>
            <div className="vs-card">
              <h3>vs. Canva AI Image</h3>
              <ul>
                <li>✅ <strong>Scenith:</strong> Purpose-built for photorealistic output</li>
                <li>❌ <strong>Canva AI:</strong> Generalist tool, limited photo realism</li>
                <li>✅ <strong>Scenith:</strong> Dedicated negative prompt control</li>
                <li>⚠️ <strong>Canva AI:</strong> Limited advanced prompt engineering options</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CROSS-TOOL PROMO
      ══════════════════════════════════════ */}
      <section
        className="must-try-section"
        role="region"
        aria-labelledby="must-try-title"
      >
        <div className="must-try-header">
          <h2 id="must-try-title">Complete Your Photo Workflow</h2>
          <p>Pair your AI photos with these Scenith tools for a professional end-to-end pipeline</p>
        </div>
        <div className="must-try-grid">
          
         <a   href="https://scenith.in/tools/image-editing?utm_source=ai_photo_gen&utm_medium=must_try&utm_campaign=cross_tool"
            className="must-try-card"
            aria-label="Free Image Editor"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="must-try-icon">🖼️</span>
            <span className="must-try-badge">✨ Perfect Pair</span>
            <h3 className="must-try-title">Free Image Editor</h3>
            <p className="must-try-description">
              Remove backgrounds, add text overlays, apply filters, and resize your AI photos
              for any platform — all in the browser.
            </p>
            <div className="must-try-features">
              <span className="must-try-feature">Background removal</span>
              <span className="must-try-feature">Text overlays</span>
              <span className="must-try-feature">Filters & effects</span>
            </div>
            <span className="must-try-cta">Open Image Editor →</span>
          </a>

          
        <a    href="https://scenith.in/tools/ai-voice-generation?utm_source=ai_photo_gen&utm_medium=must_try&utm_campaign=cross_tool"
            className="must-try-card"
            aria-label="AI Voice Generator"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="must-try-icon">🎤</span>
            <span className="must-try-badge">🔥 Popular</span>
            <h3 className="must-try-title">AI Voice Generator</h3>
            <p className="must-try-description">
              Add professional voiceovers to your AI photo slideshows and video ads. 40+ natural
              voices across 20+ languages.
            </p>
            <div className="must-try-features">
              <span className="must-try-feature">40+ voices</span>
              <span className="must-try-feature">20+ languages</span>
              <span className="must-try-feature">MP3 download</span>
            </div>
            <span className="must-try-cta">Try Voice Generator →</span>
          </a>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FAQ
      ══════════════════════════════════════ */}
      <section
        className="people-also-ask"
        role="region"
        id="faq"
        aria-labelledby="faq-title"
      >
        <div className="container">
          <h2 id="faq-title">
            Frequently Asked Questions About AI Photo Generation
          </h2>
          <div className="paa-grid" style={{ display: 'block' }}>
            {FAQS.map((faq, i) => (
              <div
                key={i}
                className="paa-item"
                style={{ marginBottom: '1rem', cursor: 'pointer' }}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                aria-expanded={openFaq === i}
              >
                <h3 style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  {faq.q}
                  <span style={{ marginLeft: '1rem', fontSize: '1.2rem' }}>
                    {openFaq === i ? '−' : '+'}
                  </span>
                </h3>
                {openFaq === i && <p style={{ marginTop: '0.75rem' }}>{faq.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════ */}
      <section
        className="cta-section"
        id="get-started"
        role="region"
        aria-labelledby="final-cta-title"
      >
        <div className="container">
          <h2 id="final-cta-title">
            Generate Professional AI Photos Free — No Camera, No Cost
          </h2>
          <p>
            Join thousands of creators, marketers, and entrepreneurs using Scenith to produce
            stunning AI photos on demand. Your next great visual is one sentence away.
          </p>
          
        <a    href={GENERATE_URL}
            className="cta-button generate-button"
            aria-label="Open Scenith AI Photo Generator"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.15rem' }}
          >
            📸 Open AI Photo Generator — Free
          </a>
          <div className="cta-features">
            <span>⚡ Under 10 seconds per photo</span>
            <span>🔒 Secure & private</span>
            <span>✅ Full commercial rights</span>
            <span>📥 High-res PNG download</span>
          </div>
        </div>
      </section>

      <div className="trust-indicators">
        <span className="trust-item">✅ 100% Free Plan</span>
        <span className="trust-item">📷 Photorealistic Output</span>
        <span className="trust-item">⚡ &lt;10 Second Generation</span>
        <span className="trust-item">💼 Commercial Rights Included</span>
        <span className="trust-item">🚫 Zero Watermarks</span>
      </div>
    </div>
  );
}