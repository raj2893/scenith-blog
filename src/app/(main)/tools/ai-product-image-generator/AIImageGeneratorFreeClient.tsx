"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../../../../../styles/tools/AIImageGeneratorFree.css";
import { Variants } from "framer-motion";



// UTM-tagged destination
const TOOL_URL =
  "https://scenith.in/tools/ai-image-generation?utm_source=ai-image-generator-free&utm_medium=cta&utm_campaign=satellite-page&utm_content=text-to-image";

// ─── Data ────────────────────────────────────────────────────────────────────

const styles = [
  { icon: "📷", label: "Realistic Photo", desc: "Photorealistic images that look like professional photography." },
  { icon: "🎌", label: "Anime / Manga", desc: "Japanese animation style — great for characters and illustration." },
  { icon: "💻", label: "Digital Art", desc: "Modern illustration style for posters, covers, and graphics." },
  { icon: "🎮", label: "3D Render", desc: "Three-dimensional CGI look for products and visualization." },
  { icon: "🧙", label: "Fantasy", desc: "Magical, epic scenes and mythical creature concepts." },
  { icon: "🚀", label: "Sci-Fi", desc: "Futuristic settings, space, and technology aesthetics." },
  { icon: "🎨", label: "Artistic / Oil Painting", desc: "Classic painterly look inspired by traditional art." },
  { icon: "📼", label: "Vintage / Retro", desc: "Nostalgic aesthetic with grain, muted tones, and era-specific details." },
];

const useCases = [
  {
    number: "01",
    emoji: "🎬",
    title: "YouTube Thumbnails",
    body: "Thumbnails are the single biggest lever for improving click-through rate on YouTube. A great thumbnail can 3x your CTR — translating directly into more views, subscribers, and ad revenue — without touching your title or tags. Generate dramatic, high-contrast, story-driven thumbnails with our Realistic Photo and Digital Art styles, sized perfectly at 1280×720px.",
    prompts: [
      "Epic tech gadget explosion, dramatic lighting, cinematic 4K, YouTube thumbnail composition",
      "Shocked reaction face, vivid neon background, 35mm lens, studio lighting",
      "Before/after split screen, clean white background, professional photography",
    ],
    tags: ["1280×720px", "High contrast", "Click-optimised"],
  },
  {
    number: "02",
    emoji: "📱",
    title: "Instagram & Social Media",
    body: "Social media algorithms reward saves and shares — and both are driven by visual quality. Stock photos perform poorly because audiences recognise them instantly. Custom AI-generated imagery that matches your exact brand tone creates genuine uniqueness, stops scrollers, and builds a recognisable aesthetic faster than any template.",
    prompts: [
      "Aesthetic sunrise coffee flat lay, warm golden tones, marble surface, Instagram lifestyle",
      "Minimalist brand colour palette visualization, geometric shapes, clean modern design",
      "Dramatic portrait with moody shadows, cinematic grain, editorial photography style",
    ],
    tags: ["1080×1080px", "1080×1920px", "Brand-consistent"],
  },
  {
    number: "03",
    emoji: "🛒",
    title: "E-commerce & Product Mockups",
    body: "Product photography costs ₹5,000–₹50,000 per day for a studio shoot. AI generation lets you prototype, test, and iterate product visuals in minutes. Generate clean white-background hero shots for Amazon compliance, lifestyle context images for Shopify, and creative angle variations — all without hiring a photographer or renting equipment.",
    prompts: [
      "Luxury wristwatch on white background, studio lighting, sharp detail, commercial product photography",
      "Skincare product set, soft pastel surface, natural side light, e-commerce hero image",
      "Sneakers floating in air, dynamic angle, colourful gradient background, advertising style",
    ],
    tags: ["Amazon-ready", "White BG", "Lifestyle shots"],
  },
  {
    number: "04",
    emoji: "📝",
    title: "Blog Headers & Content Images",
    body: "Generic stock photos undermine content credibility. Readers recognise overused Unsplash images, which signals generic, low-effort content. Custom AI-generated header images that match your exact article topic, brand palette, and editorial voice build authority and distinguish your content from thousands of similar posts.",
    prompts: [
      "Abstract neural network visualization, glowing nodes, deep blue background, technology article header",
      "Cozy reading nook by rain-streaked window, warm amber light, lifestyle photography",
      "Futuristic smart city aerial view, blue neon accents, cinematic wide angle",
    ],
    tags: ["Unique imagery", "Topic-matched", "SEO-friendly"],
  },
  {
    number: "05",
    emoji: "🎨",
    title: "Character Design & Game Art",
    body: "Concept art typically costs ₹2,000–₹15,000 per piece from freelancers. Indie game developers, authors, and worldbuilders can now generate reference-quality character concepts, environment art, and prop visualisations in seconds. Use Anime, Fantasy, and Digital Art styles to explore visual directions before committing to final production art.",
    prompts: [
      "Anime warrior woman, silver armour, glowing blue sword, forest background, full body",
      "Cyberpunk mercenary, neon city rain, leather jacket, holographic display, cinematic",
      "Fantasy dragon, emerald scales, volcanic landscape, epic aerial view, concept art",
    ],
    tags: ["Concept art", "Character refs", "Style exploration"],
  },
  {
    number: "06",
    emoji: "💼",
    title: "Pitch Decks & Presentations",
    body: "Investors, clients, and stakeholders make rapid judgements about the quality of your thinking based on how your slides look. Custom visuals that match your specific narrative — rather than generic PowerPoint clip art or overused Freepik illustrations — signal professionalism, preparation, and attention to detail that templates never can.",
    prompts: [
      "Diverse professional team in modern office, natural light, candid collaboration, corporate style",
      "Abstract data flow network, clean geometric shapes, blue corporate palette, presentation background",
      "Innovation concept, lightbulb made of circuit boards, dark background, dramatic lighting",
    ],
    tags: ["Professional", "Brand-aligned", "Slide-ready"],
  },
];

const comparisons = [
  {
    tool: "Midjourney",
    price: "$10/month minimum",
    access: "Discord only, slash commands",
    watermark: "No",
    commercial: "Paid tier only",
    styles: "Unlimited but complex",
    scenith: "Credit plans from ₹99/mo, web UI, 1-click",
  },
  {
    tool: "DALL-E 3",
    price: "ChatGPT Plus ($20/month)",
    access: "Via ChatGPT only",
    watermark: "No",
    commercial: "Yes on paid",
    styles: "Limited presets",
    scenith: "Included free, direct download",
  },
  {
    tool: "Adobe Firefly",
    price: "Adobe subscription ($22.99+/mo)",
    access: "Adobe ecosystem",
    watermark: "Watermarked on free",
    commercial: "Paid only",
    styles: "Moderate",
    scenith: "8 styles free, no watermark",
  },
  {
    tool: "Leonardo.ai",
    price: "Limited free, paid from $12/mo",
    access: "Web, waitlist",
    watermark: "Free tier watermarked",
    commercial: "Paid tier",
    styles: "Many models, complex UI",
    scenith: "Instant access, simple UI",
  },
];

const prompts = [
  { style: "Realistic", text: "Golden hour portrait of a young woman in a sunflower field, 85mm lens, shallow depth of field, warm tones" },
  { style: "Anime", text: "Samurai standing on a cliff at sunset, cherry blossoms falling, dramatic orange sky, detailed illustration" },
  { style: "Digital Art", text: "Neon-lit cyberpunk city street in rain, reflections on wet pavement, towering holographic ads" },
  { style: "3D Render", text: "Abstract geometric crystal structure floating in space, iridescent surface, star field background" },
  { style: "Fantasy", text: "Ancient dragon resting on a mountain of gold coins in a cavern lit by bioluminescent crystals" },
  { style: "Sci-Fi", text: "Space station interior, astronaut in EVA suit, Earth visible through porthole, dramatic lighting" },
  { style: "Artistic", text: "Impressionist painting of a Paris café at dusk, warm street lamps, couples at outdoor tables" },
  { style: "Vintage", text: "1970s road trip photo, VW van on desert highway, faded film grain, warm analogue colours" },
];

const faqs = [
  {
    q: "Is Scenith's AI image generator completely free?",
    a: "The free BASIC plan does not include AI image generation credits — you'll need to upgrade to a paid plan starting from ₹99/month (Creator Lite) which includes 100 credits per month. Each image costs 1–5 credits depending on the model. There are no watermarks on any generated images regardless of plan.",
  },
  {
    q: "What is the difference between the 8 art styles?",
    a: "Each style preset guides the AI's generation toward a specific aesthetic. Realistic Photo produces photorealistic outputs; Anime creates Japanese animation-style illustrations; Digital Art generates modern graphic design aesthetics; 3D Render produces CGI-like imagery; Fantasy generates magical/epic scenes; Sci-Fi focuses on futuristic themes; Artistic creates painterly outputs; and Vintage produces film-grain nostalgic imagery. The same prompt generates dramatically different results across styles.",
  },
  {
    q: "Can I use AI-generated images commercially?",
    a: "Yes. All images generated on Scenith carry full commercial usage rights. You can use them in marketing materials, products, client work, social media, websites, and anywhere else without attribution requirements. Scenith makes no copyright claim on images you generate.",
  },
  {
    q: "How is Scenith different from Midjourney or DALL-E?",
    a: "Midjourney requires a paid Discord subscription and knowledge of slash commands. DALL-E 3 requires a ChatGPT Plus subscription ($20/month). Scenith offers a clean web interface, 8 style presets selectable with a single click, and paid plans starting at ₹99/month — significantly more accessible than Western-priced alternatives, with no platform lock-in.",
  },
  {
    q: "What resolution are generated images?",
    a: "Images are generated at 1024×1024 pixels, which is suitable for social media, blog headers, presentations, and most digital use cases. For print use, the image can be upscaled using dedicated tools after download.",
  },
  {
    q: "How do I write a good AI image prompt?",
    a: "Effective prompts include: (1) a clear subject description, (2) the environment or setting, (3) lighting conditions, (4) mood or atmosphere, (5) camera/composition details, and (6) quality descriptors like 'cinematic', '4K', 'detailed', or 'professional photography'. The more specific your prompt, the more accurately the AI renders your intent. See our prompt examples section for proven templates.",
  },
  {
    q: "Can I edit AI-generated images after creating them?",
    a: "Yes. After generating an image, you can click 'Edit in Editor' to open it directly in Scenith's full image editor where you can add text overlays, apply filters, adjust colours, layer additional elements, and export in any format. This is the recommended workflow for creating finished assets from AI-generated base images.",
  },
  {
    q: "Do generated images contain faces of real people?",
    a: "No. The AI generates completely synthetic imagery. If you describe a 'person' in your prompt, it generates a fictional individual — not a likeness of any real person. For best results, describe characteristics rather than naming individuals: 'professional woman in 30s, dark hair, business attire' rather than any real name.",
  },
];
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

// ─── Sub-components ──────────────────────────────────────────────────────────

const FAQItem: React.FC<{ q: string; a: string }> = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`aigf-faq-item ${open ? "open" : ""}`}
      onClick={() => setOpen(!open)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && setOpen(!open)}
      aria-expanded={open}
    >
      <div className="aigf-faq-q">
        <span>{q}</span>
        <span className="aigf-faq-chevron">{open ? "−" : "+"}</span>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            className="aigf-faq-a"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28 }}
          >
            <p>{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────

const AIImageGeneratorFreeClient: React.FC = () => {
  return (
    <div className="aigf-root">

      {/* ── Structured Data ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Scenith Free AI Image Generator",
              description:
                "Generate professional AI images from text descriptions. 8 art styles including realistic, anime, digital art, 3D render, fantasy, sci-fi, artistic, and vintage. Commercial use included.",
              url: "https://scenith.in/tools/ai-image-generator-free",
              applicationCategory: "MultimediaApplication",
              operatingSystem: "Web Browser",
              offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
              featureList: [
                "Text-to-image AI generation",
                "8 artistic style presets",
                "Realistic photo generation",
                "Anime and manga style",
                "Digital art generation",
                "3D render style",
                "Fantasy and sci-fi art",
                "No watermarks",
                "Commercial use rights",
                "1024x1024 resolution output",
              ],
              screenshot: "https://scenith.in/images/AIImageGenerationSS.png",
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map(({ q, a }) => ({
                "@type": "Question",
                name: q,
                acceptedAnswer: { "@type": "Answer", text: a },
              })),
            },
            {
              "@context": "https://schema.org",
              "@type": "HowTo",
              name: "How to Generate AI Images from Text for Free",
              description: "Create professional AI art from a text description in 3 steps",
              totalTime: "PT1M",
              step: [
                {
                  "@type": "HowToStep",
                  position: 1,
                  name: "Write your image description",
                  text: "Type a detailed description of the image you want. Include subject, setting, mood, lighting and composition for best results.",
                },
                {
                  "@type": "HowToStep",
                  position: 2,
                  name: "Choose an art style",
                  text: "Select from 8 presets: Realistic Photo, Anime, Digital Art, 3D Render, Fantasy, Sci-Fi, Artistic, or Vintage.",
                },
                {
                  "@type": "HowToStep",
                  position: 3,
                  name: "Generate and download",
                  text: "Click Generate. Your high-resolution PNG image is ready in seconds with full commercial rights and no watermarks.",
                },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://scenith.in/" },
                { "@type": "ListItem", position: 2, name: "Tools", item: "https://scenith.in/tools" },
                { "@type": "ListItem", position: 3, name: "Free AI Image Generator", item: "https://scenith.in/tools/ai-image-generator-free" },
              ],
            },
          ]),
        }}
      />

      {/* ── Breadcrumb ── */}
      <nav aria-label="Breadcrumb" className="aigf-breadcrumb">
        <ol itemScope itemType="https://schema.org/BreadcrumbList">
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <a href="/" itemProp="item"><span itemProp="name">Home</span></a>
            <meta itemProp="position" content="1" />
          </li>
          <span aria-hidden>/</span>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <a href="/tools" itemProp="item"><span itemProp="name">Tools</span></a>
            <meta itemProp="position" content="2" />
          </li>
          <span aria-hidden>/</span>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="name">Free AI Image Generator</span>
            <meta itemProp="position" content="3" />
          </li>
        </ol>
      </nav>

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section className="aigf-hero" id="hero" role="main">
        <div className="aigf-hero-noise" aria-hidden />
        <div className="aigf-hero-inner">

          <motion.div className="aigf-hero-eyebrow" variants={fadeUp} initial="hidden" animate="visible" custom={0}>
            <span className="aigf-eyebrow-dot" />
            Text → Image · 8 Styles · No Watermarks · Commercial Rights Included
          </motion.div>

          <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={1}>
            Free AI Image Generator
            <span className="aigf-h1-break"> — Turn Any Text Into Art</span>
          </motion.h1>

          <motion.p className="aigf-hero-sub" variants={fadeUp} initial="hidden" animate="visible" custom={2}>
            Type a description, pick a style, and get a professional image in seconds.
            Realistic photos, anime illustrations, digital art, 3D renders, fantasy scenes
            and more — all from a single text prompt. No design skills. No expensive
            subscriptions. No Midjourney Discord commands.
          </motion.p>

          {/* ── PRIMARY CTA ── */}
          <motion.div className="aigf-hero-cta-block" variants={fadeUp} initial="hidden" animate="visible" custom={3}>
            <a href={TOOL_URL} className="aigf-cta-primary" target="_blank" rel="noopener noreferrer">
              <span className="aigf-cta-spark">✦</span>
              Generate AI Images Free Now
              <span className="aigf-cta-arrow">→</span>
            </a>
          </motion.div>

          {/* ── Trust pills ── */}
          <motion.div className="aigf-trust-pills" variants={fadeUp} initial="hidden" animate="visible" custom={4}>
            {[
              "✓ No watermarks",
              "✓ Commercial use",
              "✓ 8 art styles",
              "✓ 1024px resolution",
              "✓ Instant download",
            ].map((p) => <span key={p} className="aigf-pill">{p}</span>)}
          </motion.div>

          {/* ── Screenshot ── */}
          <motion.figure
            className="aigf-hero-screenshot"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={5}
          >
            <img
              src="/images/AIImageGenerationSS.png"
              alt="Scenith AI image generator interface — text prompt input, art style selector, and generated image output"
              width={900}
              height={520}
              loading="eager"
            />
            <figcaption className="aigf-sr-only">
              Screenshot of the Scenith AI image generator showing a prompt input field, 8 art style options, and a generated landscape image
            </figcaption>
          </motion.figure>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FEATURED SNIPPET TARGET
      ══════════════════════════════════════ */}
      <section className="aigf-definition" role="region" aria-labelledby="def-h">
        <div className="aigf-container">
          <div className="aigf-definition-box">
            <span className="aigf-definition-label">QUICK DEFINITION</span>
            <h2 id="def-h" className="aigf-sr-only">What is a Free AI Image Generator?</h2>
            <p>
              A <strong>free AI image generator</strong> is a web-based tool that uses deep learning models — specifically
              diffusion networks trained on hundreds of millions of images — to create original visual artwork from
              written text descriptions. Users type a prompt describing their desired image, select an artistic style,
              and the AI synthesises a unique, high-resolution image in seconds without requiring any design skills,
              software installation, or photography equipment.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          8 ART STYLES
      ══════════════════════════════════════ */}
      <section className="aigf-styles-section" id="art-styles">
        <div className="aigf-container">
          <motion.div
            className="aigf-section-header"
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            <h2>8 AI Art Styles — One Tool</h2>
            <p>
              Every style preset conditions the AI's generation toward a completely different aesthetic.
              The same prompt produces radically different results depending on your style selection.
            </p>
          </motion.div>

          <div className="aigf-styles-grid">
            {styles.map((s, i) => (
              <motion.div
                key={s.label}
                className="aigf-style-card"
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i % 4}
              >
                <span className="aigf-style-icon">{s.icon}</span>
                <h3>{s.label}</h3>
                <p>{s.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="aigf-styles-cta"
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            <a href={TOOL_URL} className="aigf-cta-primary" target="_blank" rel="noopener noreferrer">
              Try All 8 Styles Free →
            </a>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          HOW IT WORKS
      ══════════════════════════════════════ */}
      <section className="aigf-how-section" id="how-it-works">
        <div className="aigf-container">
          <motion.div
            className="aigf-section-header"
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            <h2>How to Generate AI Images from Text — 3 Steps</h2>
            <p>From blank prompt to finished image in under 60 seconds.</p>
          </motion.div>

          <div className="aigf-steps">
            {[
              {
                n: "01",
                title: "Write Your Prompt",
                body: "Describe what you want to see. Include subject, setting, lighting, mood, and composition. The more specific, the better the output. Example: \"Golden retriever puppy in a sunlit autumn park, fallen leaves, warm bokeh, 85mm lens\" beats \"dog in park\" every time.",
              },
              {
                n: "02",
                title: "Select a Style",
                body: "Pick from 8 style presets. Realistic Photo for professional photography looks, Anime for Japanese illustration, Digital Art for modern graphics, 3D Render for product visualisation, Fantasy/Sci-Fi for world-building, or Vintage for nostalgic aesthetics.",
              },
              {
                n: "03",
                title: "Generate & Download",
                body: "Click Generate. The AI processes your prompt through hundreds of diffusion steps and delivers a 1024×1024 PNG in seconds. Download immediately with full commercial rights — no watermarks, no attribution required.",
              },
            ].map((step, i) => (
              <motion.div
                key={step.n}
                className="aigf-step"
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
              >
                <div className="aigf-step-n">{step.n}</div>
                <div className="aigf-step-body">
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="aigf-how-cta"
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            <a href={TOOL_URL} className="aigf-cta-primary" target="_blank" rel="noopener noreferrer">
              <span className="aigf-cta-spark">✦</span>
              Start Generating Free
              <span className="aigf-cta-arrow">→</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PROMPT EXAMPLES
      ══════════════════════════════════════ */}
      <section className="aigf-prompts-section" id="prompt-examples">
        <div className="aigf-container">
          <motion.div
            className="aigf-section-header"
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            <h2>Proven Prompt Examples — Copy & Customise</h2>
            <p>
              These prompts consistently produce high-quality results. Use them as starting points
              and modify for your specific needs.
            </p>
          </motion.div>

          <div className="aigf-prompts-grid">
            {prompts.map((p, i) => (
              <motion.div
                key={p.style}
                className="aigf-prompt-card"
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i % 4}
              >
                <span className="aigf-prompt-style">{p.style}</span>
                <p className="aigf-prompt-text">"{p.text}"</p>
                <a href={TOOL_URL} className="aigf-prompt-try" target="_blank" rel="noopener noreferrer">
                  Try this prompt →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          USE CASES (deep content for SEO)
      ══════════════════════════════════════ */}
      <section className="aigf-usecases-section" id="use-cases">
        <div className="aigf-container">
          <motion.div
            className="aigf-section-header"
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            <h2>What Can You Create? 6 High-Value Use Cases</h2>
            <p>
              AI image generation isn't a novelty — it's a production tool. Here's where it delivers
              measurable ROI for creators, marketers, and businesses.
            </p>
          </motion.div>

          <div className="aigf-usecases-list">
            {useCases.map((uc, i) => (
              <motion.article
                key={uc.number}
                className="aigf-usecase"
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i % 3}
              >
                <div className="aigf-usecase-left">
                  <span className="aigf-usecase-num">{uc.number}</span>
                  <span className="aigf-usecase-emoji">{uc.emoji}</span>
                </div>
                <div className="aigf-usecase-right">
                  <h3>{uc.title}</h3>
                  <p>{uc.body}</p>
                  <div className="aigf-usecase-prompts">
                    <strong>Example prompts:</strong>
                    <ul>
                      {uc.prompts.map((pr) => (
                        <li key={pr}>"{pr}"</li>
                      ))}
                    </ul>
                  </div>
                  <div className="aigf-tags">
                    {uc.tags.map((t) => <span key={t} className="aigf-tag">{t}</span>)}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          MID-PAGE CTA BAND
      ══════════════════════════════════════ */}
      <section className="aigf-cta-band" aria-label="Generate AI images now">
        <div className="aigf-container aigf-cta-band-inner">
          <div className="aigf-cta-band-copy">
            <h2>Stop paying for stock photos and Midjourney subscriptions.</h2>
            <p>Generate custom AI art that actually matches your vision — free, instant, commercial rights included.</p>
          </div>
          <a href={TOOL_URL} className="aigf-cta-primary aigf-cta-lg" target="_blank" rel="noopener noreferrer">
            <span className="aigf-cta-spark">✦</span>
            Open Free AI Image Generator
            <span className="aigf-cta-arrow">→</span>
          </a>
        </div>
      </section>

      {/* ══════════════════════════════════════
          WRITING GREAT PROMPTS — SEO CONTENT
      ══════════════════════════════════════ */}
      <section className="aigf-guide-section" id="prompt-guide">
        <div className="aigf-container">
          <motion.div
            className="aigf-section-header"
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            <h2>How to Write AI Image Prompts That Actually Work</h2>
            <p>
              The quality of your prompt is the single biggest determinant of output quality.
              Here is the complete framework used by professional AI artists.
            </p>
          </motion.div>

          <div className="aigf-guide-grid">
            {[
              {
                title: "1. Start with the Subject",
                body: "Begin every prompt with the primary subject. Be specific: not 'a woman' but 'a 28-year-old woman with shoulder-length auburn hair, wearing a navy trench coat'. Specificity forces the AI to commit to details rather than averaging across its training data.",
                example: "❌ 'a woman' → ✓ '28-year-old woman with auburn hair, navy trench coat, confident expression'",
              },
              {
                title: "2. Establish Setting & Environment",
                body: "The AI needs spatial context. Describe location, time of day, season, and environmental conditions. 'In a Tokyo street market at dusk during autumn, steam rising from food stalls, neon signs reflecting in puddles' creates a coherent scene rather than a subject floating in a void.",
                example: "❌ 'outside' → ✓ 'Tokyo street market, autumn dusk, steam rising, neon reflections in rain puddles'",
              },
              {
                title: "3. Specify Lighting",
                body: "Lighting is the most impactful technical parameter. 'Golden hour sunlight', 'dramatic side lighting', 'soft diffused overcast light', 'neon rim light', 'candlelight' — each creates a fundamentally different mood. Cinematographers spend years learning to control light; your prompt can do it in three words.",
                example: "❌ 'with light' → ✓ 'golden hour backlight, soft lens flare, warm amber tones'",
              },
              {
                title: "4. Define the Camera & Composition",
                body: "Treat your prompt like a director giving instructions. 'Close-up portrait', 'aerial wide angle', '35mm lens', 'shallow depth of field', 'rule of thirds composition', 'low angle looking up' — these terms are deeply embedded in the AI's training data from photographic datasets.",
                example: "❌ 'a photo of' → ✓ '35mm portrait lens, f/1.8, shallow DOF, subject one-third from left'",
              },
              {
                title: "5. Add Quality Descriptors",
                body: "Append quality signals at the end of your prompt: 'highly detailed', '8K resolution', 'sharp focus', 'professional photography', 'award winning', 'cinematic'. These terms are statistically associated with high-quality training images, nudging the model toward its best outputs.",
                example: "Add to any prompt: ', highly detailed, sharp focus, professional photography, 8K'",
              },
              {
                title: "6. Use Negative Prompts Strategically",
                body: "The negative prompt field tells the AI what NOT to include. Standard negatives that improve almost every generation: 'blurry, low quality, distorted, watermark, text, signature, deformed, ugly, duplicate, extra limbs'. For portraits specifically add: 'bad anatomy, asymmetrical face, extra fingers'.",
                example: "Negative: 'blurry, low quality, watermark, text, deformed, ugly, bad anatomy'",
              },
            ].map((g, i) => (
              <motion.div
                key={g.title}
                className="aigf-guide-card"
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i % 3}
              >
                <h3>{g.title}</h3>
                <p>{g.body}</p>
                <div className="aigf-guide-example">{g.example}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          COMPARISON TABLE
      ══════════════════════════════════════ */}
      <section className="aigf-comparison-section" id="comparison">
        <div className="aigf-container">
          <motion.div
            className="aigf-section-header"
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            <h2>Scenith vs Midjourney vs DALL-E vs Adobe Firefly</h2>
            <p>
              The AI image generation market is dominated by expensive Western tools. Here's how Scenith
              compares on the factors that matter to independent creators.
            </p>
          </motion.div>

          <div className="aigf-comparison-wrap">
            <table className="aigf-table" aria-label="AI image generator comparison table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th className="aigf-th-scenith">Scenith</th>
                  <th>Midjourney</th>
                  <th>DALL-E 3</th>
                  <th>Adobe Firefly</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Entry cost", "₹99/month", "$10/month", "$20/month", "$22.99/month"],
                  ["Interface", "Web UI", "Discord only", "ChatGPT only", "Adobe ecosystem"],
                  ["Watermarks", "Never", "No", "No", "Free tier: Yes"],
                  ["Commercial rights", "All plans", "Paid tiers", "Paid tier", "Paid tier"],
                  ["Style presets", "8 one-click", "Via commands", "Limited", "Moderate"],
                  ["Learning curve", "None", "High", "Low", "Medium"],
                  ["Resolution", "1024×1024", "Up to 2048", "1024×1024", "2048×2048"],
                  ["Export format", "PNG direct", "Via Discord", "In ChatGPT", "Download"],
                ].map(([feat, scenith, mj, dalle, af]) => (
                  <tr key={feat as string}>
                    <td><strong>{feat}</strong></td>
                    <td className="aigf-td-scenith">{scenith}</td>
                    <td>{mj}</td>
                    <td>{dalle}</td>
                    <td>{af}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          DEEP SEO CONTENT BLOCKS
      ══════════════════════════════════════ */}
      <section className="aigf-seo-section" id="about">
        <div className="aigf-container">
          <div className="aigf-seo-grid">

            <article className="aigf-seo-block">
              <h2>How Does AI Image Generation Actually Work?</h2>
              <p>
                Modern AI image generators use a class of deep learning model called a <strong>latent diffusion model</strong>.
                These models are trained on hundreds of millions of image-text pairs, learning the statistical relationship
                between written descriptions and visual content at an extraordinarily granular level.
              </p>
              <p>
                When you submit a prompt, the model first encodes your text into a high-dimensional mathematical
                representation using a language model (typically a variant of CLIP or T5). This representation
                is then used to guide a reverse diffusion process — starting from random noise and iteratively
                removing noise in a direction determined by your text description, over hundreds of steps,
                until a coherent image emerges.
              </p>
              <p>
                The reason style presets work is that the model associates specific visual vocabularies with
                stylistic labels present in its training data. "Anime" activates distributions of pixel patterns,
                colour palettes, and line characteristics associated with Japanese animation. "Realistic Photo"
                activates patterns from photographic datasets. Each style condition fundamentally reshapes the
                generation trajectory.
              </p>
            </article>

            <article className="aigf-seo-block">
              <h2>AI Image Generation vs Traditional Stock Photography</h2>
              <p>
                The case for AI-generated images over stock photography comes down to three fundamental
                advantages: <strong>specificity</strong>, <strong>uniqueness</strong>, and <strong>cost</strong>.
              </p>
              <p>
                Stock libraries contain millions of images, but they're built around what photographers anticipated
                people would need — not what you actually need. Finding an image that shows exactly your scenario,
                your demographic, your brand tone, and your visual style is functionally impossible. AI generation
                lets you specify exactly what you need and receive it, every time.
              </p>
              <p>
                Uniqueness matters because stock photos are used by thousands of businesses simultaneously.
                When your competitor's website uses the same Shutterstock image as yours, it signals a lack of
                investment in brand identity. AI-generated images are statistically unique — the same prompt
                produces different outputs on each generation, meaning your imagery belongs only to you.
              </p>
              <p>
                Cost comparison: Stock photo subscriptions run $29–$199/month. Professional photography runs
                ₹5,000–₹50,000 per session. AI image generation on Scenith starts at ₹99/month for 100 credits.
              </p>
            </article>

            <article className="aigf-seo-block">
              <h2>Copyright and Commercial Rights for AI-Generated Images</h2>
              <p>
                The legal landscape for AI-generated image rights is actively evolving, but the practical
                position for Scenith users is clear: <strong>you own the commercial rights to everything you generate</strong>.
                Scenith makes no claim on your outputs.
              </p>
              <p>
                From a copyright perspective, the US Copyright Office has ruled that purely AI-generated works
                (without human creative input) are not eligible for copyright protection — meaning they enter
                the public domain immediately. However, this also means no third party can claim copyright
                over your AI-generated images either.
              </p>
              <p>
                Practically, this means you can use AI-generated images in commercial products, marketing
                materials, client deliverables, merchandise, and any commercial context. The key limitation
                is that you cannot register an AI-generated image for copyright protection yourself — but
                for the vast majority of business use cases, that's irrelevant.
              </p>
            </article>

            <article className="aigf-seo-block">
              <h2>The AI Image Generation Workflow for Content Creators</h2>
              <p>
                Professional content creators use AI image generation as the first stage of a multi-step
                production workflow rather than a final output tool. The most effective approach:
              </p>
              <p>
                <strong>Stage 1 — Generation:</strong> Use Scenith's AI image generator to create a base image
                that captures the composition, mood, and subject matter you need. Generate 3–5 variations with
                slightly different prompts to explore options.
              </p>
              <p>
                <strong>Stage 2 — Selection:</strong> Choose the generation with the best composition and base
                aesthetic. Small imperfections are acceptable — they'll be addressed in editing.
              </p>
              <p>
                <strong>Stage 3 — Enhancement:</strong> Click "Edit in Editor" to open your image in Scenith's
                full image editor. Add text overlays, apply colour grading, composite with other elements,
                adjust brightness and contrast, and crop to your platform's required dimensions.
              </p>
              <p>
                <strong>Stage 4 — Export:</strong> Export in the format required for your target platform —
                PNG for transparent backgrounds, JPG for web performance, PDF for print.
              </p>
            </article>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FAQ
      ══════════════════════════════════════ */}
      <section className="aigf-faq-section" id="faq" aria-labelledby="faq-h">
        <div className="aigf-container">
          <motion.div
            className="aigf-section-header"
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            <h2 id="faq-h">Frequently Asked Questions</h2>
          </motion.div>
          <div className="aigf-faq-list">
            {faqs.map((item) => (
              <FAQItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════ */}
      <section className="aigf-final-cta" aria-labelledby="final-cta-h">
        <div className="aigf-container">
          <motion.div
            className="aigf-final-cta-inner"
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            <h2 id="final-cta-h">
              Your next great image is one prompt away.
              <span className="aigf-h2-accent"> Generate it free.</span>
            </h2>
            <p>
              Join 250,000+ creators already using Scenith. No expensive subscriptions,
              no Discord commands, no watermarks. Just type, generate, download.
            </p>
            <a href={TOOL_URL} className="aigf-cta-primary aigf-cta-xl" target="_blank" rel="noopener noreferrer">
              <span className="aigf-cta-spark">✦</span>
              Launch Free AI Image Generator
              <span className="aigf-cta-arrow">→</span>
            </a>
            <div className="aigf-final-trust">
              <span>✓ No installation</span>
              <span>✓ No watermarks</span>
              <span>✓ Commercial rights</span>
              <span>✓ 8 art styles</span>
              <span>✓ Instant results</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Cross-tool promo ── */}
      <div className="aigf-cross-promo">
        <p>
          🖼️ <strong>Complete the workflow:</strong> After generating, open your image in{" "}
          <a href="/tools/image-editing">Scenith's free Image Editor</a> to add text overlays,
          filters, and branding before you publish.
        </p>
        <a href="/tools/image-editing" className="aigf-promo-link">Open Image Editor →</a>
      </div>

    </div>
  );
};

export default AIImageGeneratorFreeClient;