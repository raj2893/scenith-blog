'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import '../../../../../styles/tools/ImageBackgroundEraserClient.css';

const CTA_URL =
  'https://scenith.in/tools/background-removal?utm_source=image-background-eraser-product-photos&utm_medium=internal-cta&utm_campaign=tool-silo';

const TOOL_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Scenith Image Background Eraser for Product Photos',
  description:
    'AI-powered image background eraser purpose-built for product photography. Instantly produces transparent PNGs for Amazon, Shopify, eBay, and Etsy listings.',
  url: 'https://scenith.in/tools/image-backgroung-eraser-for-product-photos',
  applicationCategory: 'PhotoEditingApplication',
  operatingSystem: 'Web Browser',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  author: { '@type': 'Organization', name: 'Scenith', url: 'https://scenith.in' },
  dateModified: new Date().toISOString().split('T')[0],
};

const HOWTO_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Erase Image Backgrounds from Product Photos',
  description: 'Step-by-step guide to erasing photo backgrounds from product images using Scenith AI',
  totalTime: 'PT5S',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Open the Background Eraser Tool',
      text: 'Click the "Erase My Background Now" button on this page to open the Scenith AI tool. No  software download required.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Upload Your Product Photo',
      text: 'Drag and drop or browse to select your product image (JPG or PNG, up to 30MB). Works with flat lays, white-background shots, lifestyle photos, and more.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'AI Erases the Background',
      text: 'The Scenith AI model analyzes your product, isolates it from the background with pixel-perfect precision, and removes the background in under 5 seconds.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Download Transparent PNG',
      text: 'Download your clean transparent PNG immediately. Ready to upload to Amazon, Shopify, Etsy, or any design tool—no watermark, full commercial rights.',
    },
  ],
};

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is an image background eraser for product photos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A product photo background eraser is an AI tool that automatically detects and removes the background from product images, leaving only the product on a transparent canvas. This is essential for creating marketplace-compliant listings on Amazon, Shopify, Etsy, and eBay.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does erasing the background affect product photo quality?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Scenith AI preserves full image resolution and fine product details including shiny surfaces, reflections, and complex product edges. The output PNG maintains all original pixel data except for the removed background area.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is this background eraser compliant with Amazon product image requirements?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Amazon requires main product images to have a pure white background. Using Scenith to erase the background and place the product on white (or transparent for other platforms) meets Amazon\'s image standards, Shopify\'s guidelines, and eBay\'s listing requirements.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I erase backgrounds from multiple product photos in bulk?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The free tool processes images one at a time, each in under 5 seconds. For high-volume catalog processing, Scenith Pro offers batch background erasure for large product catalogs.',
      },
    },
    {
      '@type': 'Question',
      name: 'What product types work best with AI background erasure?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The AI performs exceptionally well on clothing, shoes, electronics, jewelry, furniture, packaged goods, toys, beauty products, and food items. It handles reflective surfaces, transparent packaging, and products with fine details like jewelry chains.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the product photo background eraser free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, completely free with no watermarks and no usage caps for free users. Pro plans are available for teams needing higher volume and bulk processing.',
      },
    },
  ],
};

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://scenith.in' },
    { '@type': 'ListItem', position: 2, name: 'Tools', item: 'https://scenith.in/tools' },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Image Background Eraser for Product Photos',
      item: 'https://scenith.in/tools/image-backgroung-eraser-for-product-photos',
    },
  ],
};

// ─── data ────────────────────────────────────────────────────────────────────

const PLATFORMS = [
  { name: 'Amazon', rule: 'Pure white background (RGB 255,255,255) required for main images', icon: '📦' },
  { name: 'Shopify', rule: 'Consistent backgrounds across catalog increase conversion rate by up to 3×', icon: '🛒' },
  { name: 'Etsy', rule: 'Clean backgrounds help handmade products stand out in search thumbnails', icon: '🎀' },
  { name: 'eBay', rule: 'White/neutral background recommended for Buy Box eligibility', icon: '🔨' },
  { name: 'Walmart Marketplace', rule: 'Main image must have white background per listing policy', icon: '🏪' },
  { name: 'Meesho / Flipkart', rule: 'Transparent or white backgrounds boost CTR in catalog grid views', icon: '🇮🇳' },
];

const PRODUCT_TYPES = [
  { label: 'Apparel & Fashion', detail: 'Ghosted mannequin, flat lay, on-model shots', icon: '👗' },
  { label: 'Electronics & Gadgets', detail: 'Handles metallic and reflective surfaces accurately', icon: '📱' },
  { label: 'Jewelry & Accessories', detail: 'Preserves chains, clasps, and delicate settings', icon: '💍' },
  { label: 'Beauty & Skincare', detail: 'Clean pack-shots with crisp label edges', icon: '🧴' },
  { label: 'Footwear', detail: 'Works for sneakers, heels, and transparent soles', icon: '👟' },
  { label: 'Food & Packaged Goods', detail: 'Maintains gloss and wrapper transparency', icon: '🍫' },
  { label: 'Furniture & Home Decor', detail: 'Handles large complex silhouettes effortlessly', icon: '🛋️' },
  { label: 'Toys & Stationery', detail: 'Sharp edges and vibrant color retention', icon: '🧸' },
];

const BEFORE_AFTER = [
  { before: 'Cluttered warehouse shelf', after: 'Pure transparent PNG' },
  { before: 'Lifestyle kitchen countertop', after: 'Isolated product, ready for Amazon' },
  { before: 'Gray studio backdrop (uneven)', after: 'Perfect white background' },
  { before: 'Outdoor natural lighting shot', after: 'Clean catalog-ready product' },
];

const COMMON_MISTAKES = [
  {
    mistake: 'Using JPG as final format',
    fix: 'Always export as PNG to preserve the transparent background. JPG fills transparency with white and loses the alpha channel.',
  },
  {
    mistake: 'Uploading tiny product thumbnails',
    fix: 'Upload the highest resolution available (ideally 2000px+). The AI extracts finer details from larger files, resulting in cleaner edges.',
  },
  {
    mistake: 'Shooting products against busy patterned backgrounds',
    fix: 'A plain backdrop (even a bed-sheet) before erasing makes AI segmentation more accurate and faster.',
  },
  {
    mistake: 'Skipping color correction after background removal',
    fix: 'Once the background is erased, adjust brightness and contrast slightly—products often look darker without ambient background light.',
  },
];

// ─── component ───────────────────────────────────────────────────────────────

export default function ImageBackgroundEraserClient() {
  return (
    <div className="eraser-page">
      {/* ── Structured Data ── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(TOOL_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(HOWTO_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      {/* ── Breadcrumb ── */}
      <nav aria-label="Breadcrumb" className="eraser-breadcrumb">
        <ol itemScope itemType="https://schema.org/BreadcrumbList">
          {[
            { href: '/', label: 'Home', pos: 1 },
            { href: '/tools', label: 'Tools', pos: 2 },
            { href: '/tools/image-backgroung-eraser-for-product-photos', label: 'Background Eraser for Product Photos', pos: 3 },
          ].map((item) => (
            <li key={item.pos} itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              {item.pos < 3 ? (
                <a href={item.href} itemProp="item"><span itemProp="name">{item.label}</span></a>
              ) : (
                <span itemProp="name">{item.label}</span>
              )}
              <meta itemProp="position" content={String(item.pos)} />
              {item.pos < 3 && <span aria-hidden="true" className="breadcrumb-sep">›</span>}
            </li>
          ))}
        </ol>
      </nav>

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="eraser-hero" id="hero" role="main">
        <div className="eraser-hero__bg-grid" aria-hidden="true" />
        <motion.div
          className="eraser-hero__inner"
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="eraser-hero__badge">
            <span className="badge-dot" />
            AI-Powered · Zero Watermark · Free Forever
          </div>

          <h1 className="eraser-hero__h1">
            Image Background Eraser<br />
            <span className="gradient-text">for Product Photos</span>
          </h1>

          <p className="eraser-hero__sub">
            The only background eraser engineered specifically for <strong>e-commerce product photography</strong>.
            Upload any product image — Scenith AI isolates your product with pixel-perfect accuracy and delivers a
            marketplace-ready transparent PNG in under 5 seconds. No design skills. No Photoshop. No cost.
          </p>

          <div className="eraser-hero__trust-row">
            {['✅ Free Forever', '⚡ Under 5 Seconds', '📦 Amazon-Compliant', '🔒 No Watermark', '💼 Commercial Rights'].map((t) => (
              <span key={t} className="trust-chip">{t}</span>
            ))}
          </div>

          {/* ── PRIMARY CTA ── */}
          <motion.a
            href={CTA_URL}
            className="eraser-cta-primary"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            aria-label="Erase product background free with Scenith AI"
          >
            <span className="cta-icon">✂️</span>
            Erase My Product Background — Free
            <span className="cta-arrow">→</span>
          </motion.a>

          <p className="eraser-hero__footnote">
            Opens Scenith's AI background removal tool 
          </p>

          <figure className="eraser-hero__img-wrap">
            <Image
              src="/images/REMOVEBGSS.png"
              alt="Product photo background erasure example — before cluttered background, after clean transparent PNG ready for Amazon listing"
              width={840}
              height={420}
              priority
              className="eraser-hero__img"
            />
            <figcaption className="sr-only">
              Before-and-after product photo showing AI background erasure result
            </figcaption>
          </figure>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════
          DEFINITION SNIPPET (Featured Snippet bait)
      ══════════════════════════════════════════ */}
      <section className="eraser-definition" role="region" aria-labelledby="definition-heading">
        <div className="eraser-container">
          <div className="definition-card">
            <h2 id="definition-heading" className="visually-hidden">What is a Product Photo Background Eraser?</h2>
            <p className="definition-text">
              A <strong>product photo background eraser</strong> is an AI tool that automatically detects your product within an image, separates it from its background using deep learning segmentation, and outputs a transparent PNG file — making your product ready for e-commerce listings, marketing materials, and catalog photography without manual editing.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHY PRODUCT PHOTOS NEED BACKGROUND ERASURE
      ══════════════════════════════════════════ */}
      <section className="eraser-section" id="why-erase" role="region" aria-labelledby="why-erase-title">
        <div className="eraser-container">
          <h2 id="why-erase-title">Why Product Photos Specifically Need Background Erasure</h2>
          <p className="section-lead">
            Generic background removal tools are built for portraits and social media. Product photography has stricter technical demands that require purpose-built AI.
          </p>

          <div className="eraser-grid-3">
            {[
              {
                icon: '🏪',
                title: 'Marketplace Policy Compliance',
                body: 'Amazon, Walmart Marketplace, and Flipkart mandate pure white backgrounds on main product images. Non-compliant images get suppressed in search or rejected entirely. AI erasure ensures you meet policy on every upload.',
              },
              {
                icon: '📈',
                title: 'Conversion Rate Optimization',
                body: 'A/B tests across thousands of Shopify stores consistently show that products with clean, distraction-free backgrounds convert 30–40% better than lifestyle shots in grid views and search results.',
              },
              {
                icon: '🎯',
                title: 'Visual Consistency at Scale',
                body: 'Brands with 100s of SKUs need uniform backgrounds across their entire catalog. Manual editing is cost-prohibitive. AI background erasure delivers consistent quality across every product in seconds.',
              },
              {
                icon: '🖼️',
                title: 'Multi-Channel Reusability',
                body: 'One transparent PNG can be repurposed across white background (Amazon), lifestyle composite (Instagram), grey background (website), and coloured background (ads) — maximising your photography investment.',
              },
              {
                icon: '🔍',
                title: 'Image Search Discoverability',
                body: 'Google Shopping and visual search engines like Pinterest Lens perform better product matching on isolated product images than cluttered lifestyle shots, improving organic discovery.',
              },
              {
                icon: '💸',
                title: 'Eliminate Photo Studio Costs',
                body: 'Professional white-background product photography starts at ₹500 per image. AI background erasure lets you shoot anywhere — at home, in your warehouse, outdoors — and still deliver studio-quality output.',
              },
            ].map((card) => (
              <motion.article
                key={card.title}
                className="eraser-card"
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <span className="eraser-card__icon">{card.icon}</span>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          MARKETPLACE PLATFORM REQUIREMENTS
      ══════════════════════════════════════════ */}
      <section className="eraser-section eraser-section--alt" id="platforms" role="region" aria-labelledby="platforms-title">
        <div className="eraser-container">
          <h2 id="platforms-title">Background Requirements by E-commerce Platform</h2>
          <p className="section-lead">
            Every major marketplace has image background rules. Here's exactly what each platform requires — and how our background eraser helps you comply automatically.
          </p>
          <div className="platform-table-wrap">
            <table className="platform-table">
              <thead>
                <tr>
                  <th scope="col">Platform</th>
                  <th scope="col">Background Requirement</th>
                  <th scope="col">Scenith Solves It</th>
                </tr>
              </thead>
              <tbody>
                {PLATFORMS.map((p) => (
                  <tr key={p.name}>
                    <td><span className="platform-icon">{p.icon}</span> <strong>{p.name}</strong></td>
                    <td>{p.rule}</td>
                    <td className="platform-check">✅ Yes</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          HOW IT WORKS (4 STEPS)
      ══════════════════════════════════════════ */}
      <section className="eraser-section" id="how-it-works" role="region" aria-labelledby="how-title">
        <div className="eraser-container">
          <h2 id="how-title">How to Erase Product Photo Backgrounds in 4 Steps</h2>
          <p className="section-lead">
            No Photoshop. No manual masking. No design experience needed. Just your product photo and 5 seconds.
          </p>
          <div className="steps-row">
            {[
              { n: '01', title: 'Click the Button Below', body: 'Hit "Erase My Product Background" to open the Scenith AI tool. No account creation.' },
              { n: '02', title: 'Upload Your Product Image', body: 'Drag and drop your JPG or PNG product photo. Up to 30MB supported. Works on mobile, tablet, and desktop.' },
              { n: '03', title: 'AI Erases in ~5 Seconds', body: 'Deep learning models segment your product from the background with pixel-level accuracy, preserving fine edges, textures, and reflections.' },
              { n: '04', title: 'Download & List Instantly', body: 'Your transparent PNG is ready. Upload directly to Amazon Seller Central, Shopify Admin, Etsy Studio, or any design app.' },
            ].map((step, i) => (
              <motion.div
                key={step.n}
                className="step-item"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12, duration: 0.55 }}
                viewport={{ once: true }}
              >
                <div className="step-num">{step.n}</div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </motion.div>
            ))}
          </div>

          {/* Mid-page CTA */}
          <div className="mid-cta-wrap">
            <motion.a
              href={CTA_URL}
              className="eraser-cta-primary"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              ✂️ Erase My Product Background Now →
            </motion.a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PRODUCT TYPE COVERAGE
      ══════════════════════════════════════════ */}
      <section className="eraser-section eraser-section--alt" id="product-types" role="region" aria-labelledby="types-title">
        <div className="eraser-container">
          <h2 id="types-title">Works on Every Product Category</h2>
          <p className="section-lead">
            Our AI model is trained on diverse product categories. Here's how it handles the most common e-commerce verticals.
          </p>
          <div className="eraser-grid-4">
            {PRODUCT_TYPES.map((pt) => (
              <div key={pt.label} className="product-type-card">
                <span className="pt-icon">{pt.icon}</span>
                <strong>{pt.label}</strong>
                <p>{pt.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          BEFORE / AFTER SCENARIOS
      ══════════════════════════════════════════ */}
      <section className="eraser-section" id="before-after" role="region" aria-labelledby="ba-title">
        <div className="eraser-container">
          <h2 id="ba-title">Real Background Erasure Scenarios</h2>
          <p className="section-lead">
            You don't need a studio setup. Whatever background your product is shot against, the AI handles it.
          </p>
          <div className="ba-grid">
            {BEFORE_AFTER.map((item, i) => (
              <div key={i} className="ba-card">
                <div className="ba-before">
                  <span className="ba-label">Before</span>
                  <p>{item.before}</p>
                </div>
                <div className="ba-arrow">→</div>
                <div className="ba-after">
                  <span className="ba-label ba-label--after">After</span>
                  <p>{item.after}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          COMMON MISTAKES
      ══════════════════════════════════════════ */}
      <section className="eraser-section eraser-section--alt" id="mistakes" role="region" aria-labelledby="mistakes-title">
        <div className="eraser-container">
          <h2 id="mistakes-title">4 Common Mistakes When Erasing Product Backgrounds (and How to Fix Them)</h2>
          <p className="section-lead">
            Even with AI, small workflow errors lead to subpar results. Avoid these to get professional output every time.
          </p>
          <div className="mistakes-list">
            {COMMON_MISTAKES.map((m, i) => (
              <div key={i} className="mistake-item">
                <div className="mistake-header">
                  <span className="mistake-num">{String(i + 1).padStart(2, '0')}</span>
                  <h3>❌ {m.mistake}</h3>
                </div>
                <p><strong>✅ Fix:</strong> {m.fix}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          DEEP EDUCATIONAL: AI TECH
      ══════════════════════════════════════════ */}
      <section className="eraser-section" id="ai-technology" role="region" aria-labelledby="ai-title">
        <div className="eraser-container">
          <h2 id="ai-title">The AI Technology Behind Product Background Erasure</h2>
          <p className="section-lead">
            Understanding how the AI works helps you take better product photos and get cleaner results faster.
          </p>

          <div className="tech-explainer">
            <div className="tech-block">
              <h3>Semantic Segmentation vs. Simple Color Removal</h3>
              <p>
                Older background removal tools used <em>chroma keying</em> (green screen) or <em>colour threshold selection</em> — they removed pixels based on colour similarity. This fails badly on products that share colours with their background, glossy items, or transparent packaging.
              </p>
              <p>
                Scenith AI uses <strong>semantic segmentation</strong> — a deep learning technique that classifies every pixel as "product" or "background" based on understanding object shape, context, and boundaries, not just colour. This is why it handles jewellery chains, shoe soles, and glass bottles with accuracy that colour-based tools never achieve.
              </p>
            </div>

            <div className="tech-block">
              <h3>Why Product Photography Is Harder Than Portrait Photography</h3>
              <p>
                Portrait-focused AI background removers are trained primarily on human subjects. Product photography introduces unique challenges:
              </p>
              <ul className="tech-list">
                <li><strong>Reflective surfaces</strong> (watches, electronics) mirror their surroundings, creating false background edges</li>
                <li><strong>Transparent materials</strong> (glass, clear packaging) partially show the background through the product</li>
                <li><strong>Micro-detail preservation</strong> (jewellery chains, stitching on leather, mesh on sneakers) requires sub-pixel accuracy</li>
                <li><strong>High colour contrast</strong> products shot on white backgrounds create optical ambiguity at edges</li>
              </ul>
              <p>Scenith's model is fine-tuned on diverse product imagery specifically to overcome these challenges.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          BOTTOM CTA BAND
      ══════════════════════════════════════════ */}
      <section className="eraser-cta-band" id="get-started" role="region" aria-labelledby="cta-band-title">
        <div className="eraser-container eraser-container--narrow">
          <h2 id="cta-band-title">Your Products Deserve a Clean Background.</h2>
          <p>
            Stop losing sales to cluttered product images. Use Scenith's AI background eraser — built specifically for product photography — and get marketplace-ready transparent PNGs in seconds. Free, forever.
          </p>
          <motion.a
            href={CTA_URL}
            className="eraser-cta-primary eraser-cta-primary--large"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            aria-label="Open Scenith AI background eraser tool for product photos"
          >
            ✂️ Erase Product Background — Free →
          </motion.a>
          <p className="eraser-cta-band__note"> No watermarks · Full commercial rights</p>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FAQ
      ══════════════════════════════════════════ */}
      <section className="eraser-section" id="faq" role="region" aria-labelledby="faq-title">
        <div className="eraser-container">
          <h2 id="faq-title">Frequently Asked Questions — Product Photo Background Eraser</h2>
          <div className="faq-list">
            {FAQ_SCHEMA.mainEntity.map((qa, i) => (
              <details key={i} className="faq-item">
                <summary className="faq-q">{qa.name}</summary>
                <p className="faq-a">{qa.acceptedAnswer.text}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          INTERNAL LINKS / SEO SILO
      ══════════════════════════════════════════ */}
      <section className="eraser-section eraser-section--alt eraser-related" role="navigation" aria-labelledby="related-title">
        <div className="eraser-container">
          <h2 id="related-title">Explore More Free AI Tools</h2>
          <div className="related-links">
            <Link href="/tools/background-removal" className="related-link">
              🖼️ AI Background Remover
            </Link>
            <Link href="/tools/image-editing" className="related-link">
              ✏️ Free Image Editor
            </Link>
            <Link href="/tools" className="related-link">
              🧰 All AI Tools →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}