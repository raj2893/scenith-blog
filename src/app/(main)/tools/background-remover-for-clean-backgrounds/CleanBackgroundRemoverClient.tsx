'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import '../../../../../styles/tools/CleanBackgroundRemover.css';

const CTA_URL =
  'https://scenith.in/tools/background-removal?utm_source=background-remover-clean-backgrounds&utm_medium=internal-cta&utm_campaign=tool-silo';

// ─── Structured Data ──────────────────────────────────────────

const TOOL_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Scenith Background Remover for Clean Backgrounds',
  description:
    'Free AI tool that removes messy, cluttered, or distracting backgrounds from photos and replaces them with clean white, grey, or transparent backgrounds in under 5 seconds.',
  url: 'https://scenith.in/tools/background-remover-for-clean-backgrounds',
  applicationCategory: 'PhotoEditingApplication',
  operatingSystem: 'Web Browser',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  author: { '@type': 'Organization', name: 'Scenith', url: 'https://scenith.in' },
  dateModified: new Date().toISOString().split('T')[0],
};

const HOWTO_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Get a Clean Background on Any Photo',
  description:
    'Step-by-step guide to replacing messy or distracting photo backgrounds with clean white, grey, or transparent backgrounds using Scenith AI',
  totalTime: 'PT5S',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Open the Clean Background Tool',
      text: 'Click "Get a Clean Background — Free" to launch the Scenith AI tool directly. No  no app installation required.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Upload Your Photo',
      text: 'Upload your photo with the messy, cluttered, or distracting background (JPG or PNG, up to 30MB). Works with portraits, products, pets, objects, and more.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'AI Removes the Background',
      text: 'The Scenith AI model instantly detects your subject and removes everything behind it — messy rooms, busy streets, cluttered desks — leaving a perfectly clean transparent PNG in under 5 seconds.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Download Your Clean Background Photo',
      text: 'Download the transparent PNG and open it in any design tool, or use Scenith\'s image editor to fill the background with pure white, studio grey, or any brand colour you need.',
    },
  ],
};

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does "clean background" mean in photography?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A clean background in photography refers to a background that is free from clutter, distraction, or visual noise — typically a solid white, grey, black, or neutral colour that keeps all viewer attention on the subject. Clean backgrounds are standard in product photography, professional portraits, and e-commerce imagery.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I make a photo background clean and white?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The fastest way to get a clean white background on any photo is to use an AI background remover. Upload your photo, the AI removes the original background and outputs a transparent PNG, then you place the subject on a white canvas in any design tool. Scenith does this in under 5 seconds for free.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I replace a messy background with a clean one without Photoshop?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Scenith AI removes the background from your photo without Photoshop, without any design skills, and without any cost. Upload your image, get a transparent PNG in seconds, then fill the background with any solid colour using a free tool like Canva, Adobe Express, or Scenith\'s own image editor.',
      },
    },
    {
      '@type': 'Question',
      name: 'What types of backgrounds can the AI clean up?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Scenith AI handles virtually any background type: cluttered home offices, busy street scenes, messy studio setups, outdoor environments with complex foliage, uneven gradient backdrops, and low-contrast scenes. The AI uses semantic segmentation rather than colour detection, so it works even when the subject blends with the background colour.',
      },
    },
    {
      '@type': 'Question',
      name: 'What clean background colour should I use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pure white (RGB 255,255,255) is the standard for e-commerce and product photography. Light grey (RGB 242,242,242) works better for white or silver products. Transparent background gives maximum flexibility for design. For personal branding and social media, a colour matching your brand palette creates strong visual consistency.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is getting a clean background free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Scenith\'s AI background remover is completely free with no watermarks, no subscriptions, and no usage limits. The output transparent PNG gives you full commercial rights to use on any project — product listings, marketing materials, or personal use.',
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
      name: 'Background Remover for Clean Backgrounds',
      item: 'https://scenith.in/tools/background-remover-for-clean-backgrounds',
    },
  ],
};

// ─── Static Data ──────────────────────────────────────────────

const BACKGROUND_TYPES = [
  {
    icon: '⬜',
    name: 'Pure White Background',
    hex: '#FFFFFF',
    useCase: 'E-commerce standard — Amazon, Shopify, Flipkart, Meesho',
    why: 'White backgrounds are the global e-commerce standard because they reduce visual noise, make product colours appear accurate, and comply with marketplace image policies on every major platform.',
  },
  {
    icon: '🔲',
    name: 'Transparent Background',
    hex: 'PNG Alpha',
    useCase: 'Design, compositing, branding, overlays',
    why: 'Transparency is the most flexible output — place your subject on any colour, texture, or scene in any design tool. Ideal for logos, social media graphics, and multi-use content libraries.',
  },
  {
    icon: '🩶',
    name: 'Studio Grey Background',
    hex: '#F2F2F2 – #E0E0E0',
    useCase: 'Jewellery, white products, tech accessories',
    why: 'Light grey prevents white products from blending into white backgrounds, adds subtle depth, and is the preferred choice for premium product catalogues and fashion photography.',
  },
  {
    icon: '🖤',
    name: 'Dark / Black Background',
    hex: '#1A1A1A – #000000',
    useCase: 'Luxury products, electronics, watches, perfumes',
    why: 'Dark backgrounds create dramatic contrast for premium products, enhance metallic and glass surfaces, and perform strongly in luxury advertising and high-end brand photography.',
  },
  {
    icon: '🎨',
    name: 'Brand Colour Background',
    hex: 'Custom HEX',
    useCase: 'Social media, ads, branded content, pitch decks',
    why: 'Brand-consistent backgrounds across all content instantly communicate professionalism and brand identity. Transparent PNG output gives you full control to apply any brand colour in any design tool.',
  },
  {
    icon: '🌿',
    name: 'Textured / Gradient Background',
    hex: 'Custom pattern',
    useCase: 'Instagram, Pinterest, creative marketing',
    why: 'Transparent subject composited onto a curated texture or gradient creates scroll-stopping visual content. The clean subject extraction from Scenith AI ensures seamless blending with any background texture.',
  },
];

const MESSY_BG_TYPES = [
  { icon: '🏠', label: 'Cluttered home office or bedroom', fix: 'Replace with clean white or branded solid' },
  { icon: '🌳', label: 'Busy outdoor / nature backgrounds', fix: 'Extract subject for studio-clean result' },
  { icon: '📦', label: 'Warehouse or storage room shots', fix: 'Marketplace-compliant white background instantly' },
  { icon: '🪑', label: 'Patterned furniture or carpet', fix: 'Isolate subject for neutral professional backdrop' },
  { icon: '🌆', label: 'Street scenes or crowded locations', fix: 'Remove all environmental distraction cleanly' },
  { icon: '💡', label: 'Uneven studio lighting gradients', fix: 'Replace with perfectly even solid background' },
  { icon: '🌊', label: 'Beach, water, or outdoor lifestyle', fix: 'Keep subject, swap to commercial-use background' },
  { icon: '📚', label: 'Bookshelves or cluttered desks', fix: 'Clean white backdrop for professional headshots' },
];

const USE_CASES = [
  {
    icon: '📦',
    title: 'E-commerce Product Listings',
    body: 'Amazon requires pure white (RGB 255,255,255) as the main image background. Flipkart, Meesho, Myntra, and Shopify all recommend white or neutral backgrounds. AI background removal is the fastest way to produce compliant, conversion-optimised product images at scale.',
    stats: ['Amazon-compliant instantly', '40% higher CTR on clean backgrounds', 'Works for any product category'],
  },
  {
    icon: '👤',
    title: 'Professional Headshots & Portraits',
    body: 'A professional headshot taken at home against a messy wall becomes studio-quality in seconds. Replace the background with white, grey, or blurred neutral — no photography studio, no Photoshop subscription, no experience needed.',
    stats: ['Studio-quality from smartphone', 'LinkedIn-ready in 5 seconds', 'No photography studio needed'],
  },
  {
    icon: '📣',
    title: 'Marketing & Advertising Creatives',
    body: 'Ad creatives with clean background subjects outperform cluttered images in every A/B test metric — CTR, CPC, ROAS. Isolated subjects on clean or solid-colour backgrounds direct attention to the product, increasing conversion intent.',
    stats: ['Higher ad CTR', 'Lower cost-per-click', 'Better ROAS on paid social'],
  },
  {
    icon: '🎓',
    title: 'Presentations & Documents',
    body: 'Clean background images in PowerPoint, Google Slides, and reports look intentionally designed rather than copy-pasted from the internet. Transparent subject images layer seamlessly over slide backgrounds for professional-grade output.',
    stats: ['Professional slide design', 'Seamless layer compositing', 'No awkward white boxes'],
  },
];

const COMPARISON_DATA = [
  {
    method: 'Manual Photoshop Masking',
    time: '15–45 min per image',
    cost: '$54.99/mo subscription',
    quality: 'Excellent (with skill)',
    skill: 'Expert required',
  },
  {
    method: 'Canva Background Remover',
    time: '~10 seconds',
    cost: '$12.99/mo (Pro only)',
    quality: 'Good',
    skill: 'Beginner friendly',
  },
  {
    method: 'Remove.bg',
    time: '~5 seconds',
    cost: 'Watermarked free / $9+ paid',
    quality: 'Good',
    skill: 'Beginner friendly',
  },
  {
    method: 'Scenith AI (Free)',
    time: '~5 seconds',
    cost: '100% Free, no watermark',
    quality: 'Excellent',
    skill: 'Zero skill needed',
    highlight: true,
  },
];

const TIPS = [
  {
    num: '01',
    title: 'Shoot Against a Single-Colour Background When Possible',
    body: 'Even a white wall or plain bedsheet gives the AI more contrast to work with, resulting in sharper subject edges and cleaner extraction — particularly around fine hair, fur, and transparent materials.',
  },
  {
    num: '02',
    title: 'Use the Highest Resolution Image Available',
    body: 'Higher resolution means more pixel data at the edges, which translates to cleaner, more accurate segmentation. Avoid screenshots — use the original camera file or exported image wherever possible.',
  },
  {
    num: '03',
    title: 'Match Your Replacement Background to the Subject\'s Lighting',
    body: 'A subject shot in warm indoor lighting placed on a cool white background looks unnatural. Match the white balance and brightness of your replacement background to the original lighting for photorealistic results.',
  },
  {
    num: '04',
    title: 'Add a Subtle Drop Shadow After Removing the Background',
    body: 'A 10–15% opacity drop shadow placed behind your isolated subject on a clean white background adds depth and prevents the "floating product" look that signals amateur editing to buyers.',
  },
];

// ─── Component ────────────────────────────────────────────────

export default function CleanBackgroundRemoverClient() {
  return (
    <div className="clean-bg-page">
      {/* ── Structured Data ── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(TOOL_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(HOWTO_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      {/* ── Breadcrumb ── */}
      <nav aria-label="Breadcrumb" className="clean-breadcrumb">
        <ol itemScope itemType="https://schema.org/BreadcrumbList">
          {[
            { href: '/', label: 'Home', pos: 1 },
            { href: '/tools', label: 'Tools', pos: 2 },
            { href: '/tools/background-remover-for-clean-backgrounds', label: 'Background Remover for Clean Backgrounds', pos: 3 },
          ].map((item) => (
            <li key={item.pos} itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              {item.pos < 3 ? (
                <a href={item.href} itemProp="item"><span itemProp="name">{item.label}</span></a>
              ) : (
                <span itemProp="name">{item.label}</span>
              )}
              <meta itemProp="position" content={String(item.pos)} />
              {item.pos < 3 && <span aria-hidden="true" className="clean-breadcrumb__sep">›</span>}
            </li>
          ))}
        </ol>
      </nav>

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="clean-hero" id="hero" role="main">
        <div className="clean-hero__bg" aria-hidden="true" />
        <motion.div
          className="clean-hero__inner"
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="clean-hero__badge">
            <span className="clean-badge__dot" />
            AI-Powered · No Watermark · Free Forever
          </div>

          <h1 className="clean-hero__h1">
            Background Remover<br />
            <span className="clean-gradient-text">for Clean Backgrounds</span>
          </h1>

          <p className="clean-hero__sub">
            Turn any cluttered, messy, or distracting background into a{' '}
            <strong>perfectly clean white, grey, or transparent background</strong> in under 5 seconds.
            No Photoshop. No design skills. No cost. Just upload your photo and get a
            studio-quality clean background instantly.
          </p>

          <div className="clean-hero__output-row" aria-label="Supported output background types">
            {['⬜ Pure White', '🔲 Transparent', '🩶 Studio Grey', '🖤 Dark', '🎨 Any Brand Colour'].map((t) => (
              <span key={t} className="clean-output-chip">{t}</span>
            ))}
          </div>

          {/* ── PRIMARY CTA ── */}
          <motion.a
            href={CTA_URL}
            className="clean-cta-primary"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            aria-label="Get a clean background on your photo free with Scenith AI"
          >
            <span>✨</span>
            Get a Clean Background — Free
            <span className="clean-cta__arrow">→</span>
          </motion.a>

          <p className="clean-hero__footnote">
            Opens Scenith AI · Results in ~5 seconds
          </p>

          <figure className="clean-hero__img-wrap">
            <Image
              src="/images/REMOVEBGSS.png"
              alt="Before and after background removal — cluttered messy background on left, clean white studio background on right using Scenith AI"
              width={840}
              height={420}
              priority
              className="clean-hero__img"
            />
            <figcaption className="visually-hidden">
              Before-and-after showing messy background replaced with clean white background using AI
            </figcaption>
          </figure>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════
          DEFINITION
      ══════════════════════════════════════════ */}
      <section className="clean-definition" role="region" aria-labelledby="def-heading">
        <div className="clean-container">
          <div className="clean-definition__card">
            <h2 id="def-heading" className="visually-hidden">
              What is a Background Remover for Clean Backgrounds?
            </h2>
            <p className="clean-definition__text">
              A <strong>background remover for clean backgrounds</strong> is an AI tool that detects the subject of a photo, removes the original background regardless of how cluttered or complex it is, and outputs a transparent PNG. The subject can then be placed on any clean background — pure white, studio grey, transparent, or a custom brand colour — producing professional-grade imagery without photography studios or editing software.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PROBLEM → SOLUTION
      ══════════════════════════════════════════ */}
      <section className="clean-section" id="problem-solution" role="region" aria-labelledby="ps-title">
        <div className="clean-container">
          <h2 id="ps-title">The Clean Background Problem — and the AI Solution</h2>
          <p className="clean-section__lead">
            Most photos are taken in real environments — not photography studios. Here's every type of messy background the AI removes, and what replaces it.
          </p>
          <div className="clean-grid-4">
            {MESSY_BG_TYPES.map((item) => (
              <div key={item.label} className="messy-bg-card">
                <span className="messy-bg-card__icon">{item.icon}</span>
                <p className="messy-bg-card__label">{item.label}</p>
                <div className="messy-bg-card__arrow">↓</div>
                <p className="messy-bg-card__fix">✅ {item.fix}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CLEAN BACKGROUND TYPES
      ══════════════════════════════════════════ */}
      <section className="clean-section clean-section--alt" id="background-types" role="region" aria-labelledby="bg-types-title">
        <div className="clean-container">
          <h2 id="bg-types-title">Which Clean Background Should You Use? A Complete Guide</h2>
          <p className="clean-section__lead">
            The right clean background depends on your use case. Here's a definitive guide to every background type, when to use it, and why it works.
          </p>
          <div className="bg-types-grid">
            {BACKGROUND_TYPES.map((bg) => (
              <motion.article
                key={bg.name}
                className="bg-type-card"
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 280 }}
              >
                <div className="bg-type-card__top">
                  <span className="bg-type-card__icon">{bg.icon}</span>
                  <div>
                    <h3>{bg.name}</h3>
                    <code className="bg-type-card__hex">{bg.hex}</code>
                  </div>
                </div>
                <div className="bg-type-card__usecase">
                  <span className="bg-usecase-label">Best for:</span> {bg.useCase}
                </div>
                <p className="bg-type-card__why">{bg.why}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          HOW IT WORKS
      ══════════════════════════════════════════ */}
      <section className="clean-section" id="how-it-works" role="region" aria-labelledby="how-title">
        <div className="clean-container">
          <h2 id="how-title">How to Get a Clean Background on Any Photo in 4 Steps</h2>
          <p className="clean-section__lead">
            From messy background to studio-clean result in under 5 seconds — here's exactly how it works.
          </p>
          <div className="clean-steps-row">
            {HOWTO_SCHEMA.step.map((step, i) => (
              <motion.div
                key={step.name}
                className="clean-step"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.11, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="clean-step__num">0{step.position}</div>
                <h3>{step.name}</h3>
                <p>{step.text}</p>
              </motion.div>
            ))}
          </div>
          <div className="clean-mid-cta">
            <motion.a
              href={CTA_URL}
              className="clean-cta-primary"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              ✨ Get a Clean Background Now — Free →
            </motion.a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          USE CASES
      ══════════════════════════════════════════ */}
      <section className="clean-section clean-section--alt" id="use-cases" role="region" aria-labelledby="use-title">
        <div className="clean-container">
          <h2 id="use-title">Who Needs Clean Backgrounds? Use Cases Across Every Industry</h2>
          <p className="clean-section__lead">
            Clean backgrounds aren't just for product photographers. Here's how professionals across every discipline use background removal to produce cleaner, higher-performing visuals.
          </p>
          <div className="use-cases-grid">
            {USE_CASES.map((uc) => (
              <motion.article
                key={uc.title}
                className="use-case-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
                viewport={{ once: true }}
              >
                <span className="use-case-card__icon">{uc.icon}</span>
                <h3>{uc.title}</h3>
                <p>{uc.body}</p>
                <div className="use-case-card__stats">
                  {uc.stats.map((s) => (
                    <span key={s} className="use-case-stat">{s}</span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          COMPARISON TABLE
      ══════════════════════════════════════════ */}
      <section className="clean-section" id="comparison" role="region" aria-labelledby="compare-title">
        <div className="clean-container">
          <h2 id="compare-title">Best Tools for Clean Backgrounds: Full Comparison</h2>
          <p className="clean-section__lead">
            How Scenith AI stacks up against every other way to get a clean background on your photos.
          </p>
          <div className="compare-table-wrap">
            <table className="compare-table">
              <thead>
                <tr>
                  <th scope="col">Method</th>
                  <th scope="col">Time per Image</th>
                  <th scope="col">Cost</th>
                  <th scope="col">Quality</th>
                  <th scope="col">Skill Required</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_DATA.map((row) => (
                  <tr key={row.method} className={row.highlight ? 'compare-table__highlight' : ''}>
                    <td><strong>{row.method}</strong></td>
                    <td>{row.time}</td>
                    <td>{row.cost}</td>
                    <td>{row.quality}</td>
                    <td>{row.skill}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PRO TIPS
      ══════════════════════════════════════════ */}
      <section className="clean-section clean-section--alt" id="tips" role="region" aria-labelledby="tips-title">
        <div className="clean-container">
          <h2 id="tips-title">4 Pro Tips for Getting the Cleanest Backgrounds</h2>
          <p className="clean-section__lead">
            These techniques take your clean background results from good to professional-grade.
          </p>
          <div className="tips-list">
            {TIPS.map((tip) => (
              <div key={tip.num} className="tip-item">
                <div className="tip-item__num">{tip.num}</div>
                <div className="tip-item__content">
                  <h3>{tip.title}</h3>
                  <p>{tip.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          DEEP EDUCATIONAL
      ══════════════════════════════════════════ */}
      <section className="clean-section" id="ai-explainer" role="region" aria-labelledby="ai-title">
        <div className="clean-container">
          <h2 id="ai-title">How AI Achieves Perfectly Clean Backgrounds</h2>
          <p className="clean-section__lead">
            Understanding the technology helps you get better results and know its limits.
          </p>
          <div className="clean-edu-blocks">
            <div className="clean-edu-block">
              <h3>Why Clean Backgrounds Are Technically Harder Than They Look</h3>
              <p>
                Removing a background to get a clean result sounds simple — but the technical challenge is substantial. The AI must correctly identify every pixel that belongs to the subject versus the background, even at the boundary where subject and background colours can be nearly identical. Fine hair, translucent fabric, reflective surfaces, and soft shadows all create ambiguous pixels that naive tools misclassify.
              </p>
              <p>
                Scenith uses <strong>semantic segmentation</strong> — not colour-matching or simple contrast detection — which means the model understands <em>what</em> is in the image, not just <em>what colour</em> it is. This is why it correctly handles a white shirt photographed against a white wall, or a glass bottle on a reflective surface, where colour-based tools fail completely.
              </p>
            </div>
            <div className="clean-edu-block">
              <h3>The Difference Between "Removed" and "Clean"</h3>
              <p>
                There is an important distinction between simply removing a background (making pixels transparent) and achieving a genuinely <em>clean</em> background result. A clean result requires three additional elements beyond basic removal:
              </p>
              <ul className="clean-edu-list">
                <li><strong>Edge antialiasing:</strong> The boundary between subject and background must be smooth, not jagged. Hard pixel edges are the most visible sign of amateur extraction.</li>
                <li><strong>Colour spill correction:</strong> When a subject is photographed against a coloured background, background colours "spill" onto edge pixels. Clean removal corrects this spill rather than leaving a colour halo around the subject.</li>
                <li><strong>Shadow handling:</strong> Naturally cast shadows should either be preserved (for product photography realism) or removed (for full clean separation), depending on the use case. The AI respects original shadows to maintain subject credibility.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          BOTTOM CTA BAND
      ══════════════════════════════════════════ */}
      <section className="clean-cta-band" id="get-started" role="region" aria-labelledby="cta-band-title">
        <div className="clean-container clean-container--narrow">
          <h2 id="cta-band-title">Every Photo Deserves a Clean Background.</h2>
          <p>
            Stop letting cluttered backgrounds undermine your professional image. Use Scenith's free AI background remover to get perfectly clean white, transparent, or custom-colour backgrounds in seconds — no Photoshop, no studio, no cost.
          </p>
          <motion.a
            href={CTA_URL}
            className="clean-cta-primary clean-cta-primary--large"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            aria-label="Get a clean background on your photo free with Scenith AI"
          >
            ✨ Get a Clean Background — Free →
          </motion.a>
          <p className="clean-cta-band__note">
            No watermarks · Full commercial rights · Results in ~5 seconds
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FAQ
      ══════════════════════════════════════════ */}
      <section className="clean-section" id="faq" role="region" aria-labelledby="faq-title">
        <div className="clean-container">
          <h2 id="faq-title">Frequently Asked Questions — Background Remover for Clean Backgrounds</h2>
          <div className="clean-faq-list">
            {FAQ_SCHEMA.mainEntity.map((qa, i) => (
              <details key={i} className="clean-faq-item">
                <summary className="clean-faq-q">{qa.name}</summary>
                <p className="clean-faq-a">{qa.acceptedAnswer.text}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          RELATED LINKS
      ══════════════════════════════════════════ */}
      <section
        className="clean-section clean-section--alt clean-related"
        role="navigation"
        aria-labelledby="related-title"
      >
        <div className="clean-container">
          <h2 id="related-title">Explore More Free AI Tools</h2>
          <div className="clean-related-links">
            <Link href="/tools/background-removal" className="clean-related-link">
              🖼️ AI Background Remover
            </Link>
            <Link href="/tools/image-backgroung-eraser-for-product-photos" className="clean-related-link">
              📦 Background Eraser for Product Photos
            </Link>
            <Link href="/tools/image-backdound-remover-for-social-media" className="clean-related-link">
              📱 Background Remover for Social Media
            </Link>
            <Link href="/tools/image-editing" className="clean-related-link">
              ✏️ Free Image Editor
            </Link>
            <Link href="/tools" className="clean-related-link">
              🧰 All AI Tools →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}