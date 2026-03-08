'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import '../../../../../styles/tools/FreeOnlineImageBackgroundRemover.css';

const TOOL_URL =
  'https://scenith.in/tools/background-removal?utm_source=free-online-image-background-remover&utm_medium=cta&utm_campaign=seo-landing';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function FreeOnlineImageBackgroundRemoverClient() {
  return (
    <div className="fobr-page">

      {/* ── Structured Data ───────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'Scenith Free Online Background Remover',
            description:
              'Free AI-powered online tool to remove image backgrounds instantly. No watermark, no Photoshop required. Results in under 5 seconds.',
            url: 'https://scenith.in/tools/free-online-image-background-remover',
            applicationCategory: 'PhotoEditingApplication',
            operatingSystem: 'Web Browser',
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
            author: {
              '@type': 'Organization',
              name: 'Scenith',
              url: 'https://scenith.in',
            },
            dateModified: new Date().toISOString().split('T')[0],
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: 'How to Remove Image Background Free Online',
            description:
              'Step-by-step guide to removing a photo background for free online using Scenith AI — no software, no signup.',
            totalTime: 'PT5S',
            step: [
              {
                '@type': 'HowToStep',
                position: 1,
                name: 'Open the Free Background Remover',
                text: 'Click the free background remover button on this page. No account creation, no software installation, no credit card required.',
              },
              {
                '@type': 'HowToStep',
                position: 2,
                name: 'Upload Your Image',
                text: 'Drag and drop or select your JPG, JPEG, or PNG image (up to 30 MB). Works with product photos, portraits, logos, and any image type.',
              },
              {
                '@type': 'HowToStep',
                position: 3,
                name: 'AI Removes the Background Instantly',
                text: "Scenith's AI model analyzes and removes the background in under 5 seconds, preserving fine details like hair, fur, and complex edges.",
              },
              {
                '@type': 'HowToStep',
                position: 4,
                name: 'Download Your Transparent PNG',
                text: 'Download your clean transparent PNG with no watermark. Use it anywhere — e-commerce listings, social media, design projects, or presentations.',
              },
            ],
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Is this background remover really free online?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. Scenith offers a genuinely free online background remover — no hidden fees, no watermarks, no subscription required to get started. Free plan users get 10 removals per month at standard resolution.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do I need to sign up to remove a background for free?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No signup is required to use the free background remover. Simply open the tool, upload your image, and download your transparent PNG — the entire process takes under 5 seconds.',
                },
              },
              {
                '@type': 'Question',
                name: 'What is the best free online background remover with no watermark?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Scenith is one of the best free online background removers that delivers results without watermarks. Unlike Remove.bg which watermarks free downloads, Scenith provides clean transparent PNG files at no cost.',
                },
              },
              {
                '@type': 'Question',
                name: 'How do I remove a white background from an image for free?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Upload your image to Scenith\'s free background remover tool. The AI will detect and remove the white (or any color) background automatically, returning a transparent PNG in seconds.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can I remove backgrounds from product photos for free?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. Scenith is specifically optimized for product photography background removal. It creates clean, marketplace-compliant transparent images for Amazon, Shopify, Etsy, eBay, Flipkart, and Meesho listings.',
                },
              },
              {
                '@type': 'Question',
                name: 'Does the free background remover work on mobile?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. The Scenith background remover is fully responsive and works on all mobile browsers — iPhone Safari, Android Chrome, and tablets — with the same AI quality as desktop.',
                },
              },
              {
                '@type': 'Question',
                name: 'What image formats does the free online background remover support?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'The tool supports JPG, JPEG, and PNG input formats up to 30 MB. Output is always a high-quality transparent PNG file with an alpha channel.',
                },
              },
            ],
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://scenith.in' },
              { '@type': 'ListItem', position: 2, name: 'Tools', item: 'https://scenith.in/tools' },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'Free Online Image Background Remover',
                item: 'https://scenith.in/tools/free-online-image-background-remover',
              },
            ],
          }),
        }}
      />

      {/* ── Breadcrumb ────────────────────────────────────── */}
      <nav aria-label="Breadcrumb" className="fobr-breadcrumb">
        <ol itemScope itemType="https://schema.org/BreadcrumbList">
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link href="/" itemProp="item"><span itemProp="name">Home</span></Link>
            <meta itemProp="position" content="1" />
            <span aria-hidden="true"> › </span>
          </li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link href="/tools" itemProp="item"><span itemProp="name">Tools</span></Link>
            <meta itemProp="position" content="2" />
            <span aria-hidden="true"> › </span>
          </li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="name">Free Online Image Background Remover</span>
            <meta itemProp="position" content="3" />
          </li>
        </ol>
      </nav>

      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="fobr-hero" aria-labelledby="fobr-hero-title">
        <div className="fobr-particles" aria-hidden="true">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="fobr-particle" />
          ))}
        </div>

        <motion.div
          className="fobr-hero-inner"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <div className="fobr-badge" aria-hidden="true">
            <span className="fobr-badge-dot" />
            Free ·  No Watermark
          </div>

          <h1 id="fobr-hero-title" className="fobr-h1">
            Free Online Image<br />
            <span className="fobr-gradient-text">Background Remover</span>
          </h1>

          <p className="fobr-hero-sub">
            The fastest, cleanest way to remove any image background for free — directly in your
            browser. No Photoshop. No subscription. No watermark on your download. Just upload
            your photo and our AI delivers a pixel-perfect transparent PNG in under 5 seconds.
            Used by 50,000+ e-commerce sellers, designers, and creators worldwide.
          </p>

          {/* ── HERO CTA ── */}
          
        <a    href={TOOL_URL}
            className="fobr-main-cta"
            aria-label="Open the free online image background remover"
            rel="noopener"
          >
            ✂️ Remove Background Free 
          </a>

          <p className="fobr-cta-meta">
            ✅ 100% Free &nbsp;·&nbsp; ⚡ Under 5 sec &nbsp;·&nbsp; 🔒 No watermark &nbsp;·&nbsp; 📁 PNG download &nbsp;·&nbsp; 💼 Commercial use OK
          </p>

          <div className="fobr-secondary-ctas">
            <a href={TOOL_URL} className="fobr-secondary-btn">Remove White Background →</a>
            <a href={TOOL_URL} className="fobr-secondary-btn">Make PNG Transparent →</a>
            <a href={TOOL_URL} className="fobr-secondary-btn">Cut Out Photo Background →</a>
            <a href={TOOL_URL} className="fobr-secondary-btn">Remove Product Photo BG →</a>
          </div>
        </motion.div>
      </section>

      {/* ── DEFINITION SNIPPET ────────────────────────────── */}
      <section className="fobr-definition-section" aria-labelledby="fobr-def-title">
        <div className="fobr-container">
          <div className="fobr-definition-box">
            <h2 id="fobr-def-title" className="fobr-visually-hidden">
              What is a free online image background remover?
            </h2>
            <p className="fobr-definition-text">
              A <strong>free online image background remover</strong> is a web-based tool that
              uses artificial intelligence to automatically detect and erase the background from
              any photo — producing a clean transparent PNG file — without requiring software
              installation, design skills, or payment. Modern AI background removers process
              images in seconds and handle complex subjects including hair, fur, and
              transparent objects that manual selection tools struggle with.
            </p>
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF BAR ──────────────────────────────── */}
      <section className="fobr-proof-bar" aria-label="Social proof statistics">
        <div className="fobr-container">
          <div className="fobr-proof-grid">
            {[
              { stat: '50,000+', label: 'Images Processed' },
              { stat: '< 5 sec', label: 'Average Processing Time' },
              { stat: '0 ₹ / $0', label: 'Cost to Use' },
              { stat: '100%', label: 'No Watermark Guarantee' },
            ].map((item) => (
              <div key={item.label} className="fobr-proof-item">
                <span className="fobr-proof-stat">{item.stat}</span>
                <span className="fobr-proof-label">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────── */}
      <section className="fobr-how-section" id="how-it-works" aria-labelledby="fobr-how-title">
        <div className="fobr-container">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 id="fobr-how-title" className="fobr-section-title">
              How to Remove an Image Background Free Online — 4 Steps
            </h2>
            <p className="fobr-section-sub">
              No tutorials, no design experience, no software needed. Here's the complete
              process from upload to transparent PNG download.
            </p>
          </motion.div>

          <div className="fobr-steps-grid">
            {[
              {
                num: '01',
                icon: '🖱️',
                title: 'Click the Free Tool Button',
                body: 'Hit any of the "Remove Background Free" buttons on this page. You\'ll land directly on Scenith\'s background removal tool. No account creation prompt, no payment screen — just the tool, ready to go.',
              },
              {
                num: '02',
                icon: '📤',
                title: 'Upload Your Image',
                body: 'Drag and drop your photo onto the upload area, or click to browse your files. Supports JPG, JPEG, and PNG up to 30 MB. Works with product photos, headshots, logos, pet photos, or any image where you need the background removed.',
              },
              {
                num: '03',
                icon: '🤖',
                title: 'AI Removes the Background Instantly',
                body: 'Scenith\'s deep-learning model kicks in immediately, performing semantic segmentation at the pixel level. Within 5 seconds your subject is cleanly isolated — including challenging edges like flyaway hair, soft fur, semi-transparent fabric, and fine product details.',
              },
              {
                num: '04',
                icon: '💾',
                title: 'Download Your Transparent PNG Free',
                body: 'Your background-removed image downloads as a full-quality transparent PNG with no watermark. Use it on any platform — upload to Amazon, Shopify, Canva, Figma, PowerPoint, or any other tool that accepts PNG files.',
              },
            ].map((step, i) => (
              <motion.article
                key={step.num}
                className="fobr-step-card"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                whileHover={{ scale: 1.03 }}
              >
                <div className="fobr-step-num" aria-hidden="true">{step.num}</div>
                <div className="fobr-step-icon" aria-hidden="true">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </motion.article>
            ))}
          </div>

          <div className="fobr-mid-cta-wrap">
            <a href={TOOL_URL} className="fobr-main-cta" rel="noopener">
              🚀 Remove My Background Now — It's Free
            </a>
          </div>
        </div>
      </section>

      {/* ── WHY FREE MATTERS ──────────────────────────────── */}
      <section className="fobr-why-free-section" aria-labelledby="fobr-why-free-title">
        <div className="fobr-container">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 id="fobr-why-free-title" className="fobr-section-title">
              Why "Free Online" Background Removal Actually Matters
            </h2>
            <p className="fobr-section-sub">
              Most background removers claim to be free — then hit you with watermarks, low
              resolution, or a paywall after one use. Here's why genuinely free matters for
              real people doing real work.
            </p>
          </motion.div>

          <div className="fobr-why-grid">
            {[
              {
                icon: '🧑‍💼',
                title: 'Solo Sellers & Small Businesses Can\'t Justify $9/Image',
                body: 'If you\'re an independent seller on Meesho, Etsy, or Instagram, paying ₹75–₹200 per background removal adds up to thousands per month. A genuinely free tool with no watermark means professional product photos are accessible regardless of budget. Scenith\'s free tier gives you 10 removals per month at no cost — enough to maintain a small catalog or test new products.',
              },
              {
                icon: '🎓',
                title: 'Students & Educators Shouldn\'t Need a Subscription',
                body: 'Presentation slides, project reports, educational materials, and classroom content all benefit from clean, background-free images. Students working on tight budgets and teachers preparing materials shouldn\'t need a $12.99/month Canva Pro subscription just to cut out an image. Free access democratizes professional visual quality.',
              },
              {
                icon: '🧪',
                title: 'Testing Before You Commit',
                body: 'Before investing in a paid plan for bulk processing, you need to verify quality on your specific image types. A truly free tier — not a degraded watermarked preview — lets you make an informed decision. Scenith\'s free plan delivers the same AI engine as the paid tier, just with a monthly volume limit.',
              },
              {
                icon: '⚡',
                title: 'Speed Matters More Than Features for Most Use Cases',
                body: 'The majority of background removal tasks are simple: product on a table, person against a wall, logo on a colored background. For these everyday cases, a fast free tool outperforms an expensive slow one every time. Five seconds free beats thirty minutes and $54.99/month every day.',
              },
              {
                icon: '🌍',
                title: 'Global Accessibility — Including Emerging Markets',
                body: 'Creators in India, Southeast Asia, Africa, and Latin America represent a massive and growing segment of online sellers and content creators. Pricing in USD makes many Western tools inaccessible. Scenith\'s free tier — and affordable ₹349/month paid tier — makes professional image editing genuinely accessible globally.',
              },
              {
                icon: '📊',
                title: 'Watermarks Destroy Commercial Value',
                body: 'A watermarked product photo cannot be used on Amazon, Shopify, or any professional platform. Free tools that watermark their output aren\'t truly free for business use — they\'re loss leaders. Scenith\'s free downloads are clean, watermark-free, and commercially usable, which is the only kind of "free" that actually helps your business.',
              },
            ].map((item, i) => (
              <motion.article
                key={item.title}
                className="fobr-why-card"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i % 3}
              >
                <span className="fobr-why-icon" aria-hidden="true">{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── USE CASES BY IMAGE TYPE ───────────────────────── */}
      <section className="fobr-imagetypes-section" aria-labelledby="fobr-imagetypes-title">
        <div className="fobr-container">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 id="fobr-imagetypes-title" className="fobr-section-title">
              What Kind of Images Can You Remove Backgrounds From — For Free?
            </h2>
            <p className="fobr-section-sub">
              Scenith's AI handles a wide range of image subjects. Here's how it performs
              across the most common use cases.
            </p>
          </motion.div>

          <div className="fobr-imagetypes-grid">
            {[
              {
                icon: '📦',
                type: 'Product Photos',
                badge: 'Most Common',
                detail: 'Shoes, clothing, electronics, jewellery, food, cosmetics — any product photographed on a table, floor, or plain backdrop. The AI isolates the product cleanly, making it ready for white-background marketplace listings on Amazon, Flipkart, Meesho, Shopify, and eBay.',
                quality: '★★★★★',
              },
              {
                icon: '👤',
                type: 'Portraits & Headshots',
                badge: 'Professional',
                detail: 'Corporate headshots, LinkedIn profile photos, ID-style images, team page portraits. The AI handles skin tones, glasses, and casual hair styles well. For complex hairstyles or flyaways, results are excellent compared to manual selection tools.',
                quality: '★★★★★',
              },
              {
                icon: '🐾',
                type: 'Pets & Animals',
                badge: 'Challenging — Handled',
                detail: 'Fluffy cats, dogs, birds — fur and feathers represent one of the hardest background removal challenges. Scenith\'s alpha matting algorithm specifically addresses this, preserving individual fur strands rather than creating a harsh clipped silhouette.',
                quality: '★★★★☆',
              },
              {
                icon: '🏷️',
                type: 'Logos & Graphics',
                badge: 'Instant',
                detail: 'Removing white or solid-color backgrounds from logos, icons, and graphic elements is among the easiest tasks for AI. Perfect for creating transparent PNGs of brand assets for use in presentations, websites, and marketing materials.',
                quality: '★★★★★',
              },
              {
                icon: '🌸',
                type: 'Flowers & Plants',
                badge: 'Detailed',
                detail: 'Delicate petals, thin stems, and intricate leaf structures require precise edge detection. The AI handles most floral subjects well, though highly backlit or overlapping foliage may benefit from manual touch-up.',
                quality: '★★★★☆',
              },
              {
                icon: '🏠',
                type: 'Furniture & Home Decor',
                badge: 'E-commerce',
                detail: 'Chairs, lamps, cushions, wall art — solid and relatively simple silhouettes make furniture among the easiest categories for AI background removal. Essential for interior design e-commerce and virtual staging applications.',
                quality: '★★★★★',
              },
            ].map((item, i) => (
              <motion.div
                key={item.type}
                className="fobr-imagetype-card"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i % 3}
                whileHover={{ scale: 1.03 }}
              >
                {item.badge && <span className="fobr-type-badge">{item.badge}</span>}
                <span className="fobr-imagetype-icon" aria-hidden="true">{item.icon}</span>
                <h3>{item.type}</h3>
                <p>{item.detail}</p>
                <div className="fobr-quality-row">
                  <span className="fobr-quality-label">AI Quality:</span>
                  <span className="fobr-quality-stars">{item.quality}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="fobr-mid-cta-wrap">
            <a href={TOOL_URL} className="fobr-main-cta" rel="noopener">
              ✂️ Try Free Background Remover on Your Image
            </a>
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ──────────────────────────────── */}
      <section className="fobr-compare-section" aria-labelledby="fobr-compare-title">
        <div className="fobr-container">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 id="fobr-compare-title" className="fobr-section-title">
              Best Free Online Background Removers Compared — 2025
            </h2>
            <p className="fobr-section-sub">
              Not all "free" background removers are created equal. Here's an honest breakdown
              of what you actually get for free across the most popular tools.
            </p>
          </motion.div>

          <div className="fobr-compare-table-wrap">
            <table className="fobr-compare-table" aria-label="Free background remover comparison 2025">
              <thead>
                <tr>
                  <th scope="col">Tool</th>
                  <th scope="col">Free Downloads</th>
                  <th scope="col">Watermark-Free</th>
                  <th scope="col">Full Resolution</th>
                  <th scope="col">No Signup</th>
                  <th scope="col">Processing Speed</th>
                  <th scope="col">Mobile</th>
                </tr>
              </thead>
              <tbody>
                <tr className="fobr-compare-highlight">
                  <td><strong>Scenith (Free)</strong></td>
                  <td>✅ 10/month</td>
                  <td>✅ Yes</td>
                  <td>✅ Yes</td>
                  <td>✅ Yes</td>
                  <td>⚡ ~5 sec</td>
                  <td>✅ Yes</td>
                </tr>
                <tr>
                  <td>Remove.bg (Free)</td>
                  <td>✅ Unlimited</td>
                  <td>❌ Watermarked</td>
                  <td>❌ Low-res only</td>
                  <td>✅ Yes</td>
                  <td>⚡ ~5 sec</td>
                  <td>✅ Yes</td>
                </tr>
                <tr>
                  <td>Canva (Free)</td>
                  <td>❌ Pro only</td>
                  <td>❌ Requires Pro</td>
                  <td>❌ Requires Pro</td>
                  <td>❌ Signup needed</td>
                  <td>⚡ ~8 sec</td>
                  <td>✅ Yes</td>
                </tr>
                <tr>
                  <td>Adobe Express (Free)</td>
                  <td>⚠️ Limited</td>
                  <td>⚠️ Watermarked</td>
                  <td>❌ Requires paid</td>
                  <td>❌ Adobe login</td>
                  <td>⚡ ~10 sec</td>
                  <td>✅ Yes</td>
                </tr>
                <tr>
                  <td>Photoshop (Any Plan)</td>
                  <td>✅ Unlimited</td>
                  <td>✅ Yes</td>
                  <td>✅ Yes</td>
                  <td>❌ $54.99/month</td>
                  <td>🐢 15–60 min</td>
                  <td>⚠️ Limited</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="fobr-compare-note">
            * Scenith is the only tool offering watermark-free, full-resolution free downloads. Paid plans start at ₹349/month for 200 removals.
          </p>
        </div>
      </section>

      {/* ── PERSONAS / WHO IS THIS FOR ────────────────────── */}
      <section className="fobr-personas-section" aria-labelledby="fobr-personas-title">
        <div className="fobr-container">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 id="fobr-personas-title" className="fobr-section-title">
              Who Uses a Free Online Background Remover — and Why
            </h2>
            <p className="fobr-section-sub">
              Background removal isn't just for professional designers. Here's who benefits
              most from having free, instant access to quality AI background removal.
            </p>
          </motion.div>

          <div className="fobr-personas-grid">
            {[
              {
                persona: '🛒 D2C & Marketplace Seller',
                context: 'Sells 50+ SKUs on Amazon & Meesho',
                problem: 'Product photos taken on phone against a grey floor — not marketplace compliant.',
                solution: 'Removes backgrounds free in bulk using Scenith\'s free tier, creating white-background catalog images that pass Amazon\'s image checker without spending ₹5,000/month on a photo studio.',
              },
              {
                persona: '💇 Salon & Beauty Professional',
                context: 'Runs an Instagram page for their salon',
                problem: 'Before/after photos of haircuts and colour treatments have distracting backgrounds.',
                solution: 'Removes busy salon backgrounds for free, replacing with clean gradients using Scenith\'s editor. Posts look editorial-quality, driving DM enquiries and bookings.',
              },
              {
                persona: '🏫 School Teacher',
                context: 'Creates teaching materials for Grade 5-8',
                problem: 'Worksheet images and PowerPoint slides have cluttered stock photo backgrounds.',
                solution: 'Uses the free background remover to isolate diagrams, animals, and objects. Clean cut-outs on coloured worksheet backgrounds make concepts clearer for students.',
              },
              {
                persona: '📸 Wedding Photographer',
                context: 'Delivers 500+ edited photos per wedding',
                problem: 'Some portraits need background swaps for album composites and social media previews.',
                solution: 'Uses Scenith\'s free plan for quick social media previews and teasers. Upgrades to paid plan during peak wedding season for full-resolution album composites.',
              },
              {
                persona: '🎮 Content Creator / Streamer',
                context: '5K followers on YouTube and Twitch',
                problem: 'Needs transparent PNG of themselves for stream overlays and YouTube thumbnails.',
                solution: 'Films against any background, removes it for free with Scenith, places transparent self-cutout over custom designed backgrounds for professional-looking thumbnails.',
              },
              {
                persona: '🏡 Real Estate Agent',
                context: 'Lists 8–15 properties per month',
                problem: 'Furniture and decor staging images need transparent backgrounds for virtual staging.',
                solution: 'Removes furniture backgrounds for free, composites items into empty room photos to create compelling virtual staging images that attract more buyer enquiries.',
              },
            ].map((p, i) => (
              <motion.article
                key={p.persona}
                className="fobr-persona-card"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i % 2}
              >
                <h3>{p.persona}</h3>
                <p className="fobr-persona-context">{p.context}</p>
                <div className="fobr-persona-problem">
                  <strong>Challenge:</strong> {p.problem}
                </div>
                <div className="fobr-persona-solution">
                  <strong>How they use it free:</strong> {p.solution}
                </div>
              </motion.article>
            ))}
          </div>

          <div className="fobr-mid-cta-wrap">
            <a href={TOOL_URL} className="fobr-main-cta" rel="noopener">
              🎯 Remove Your Image Background Free Now
            </a>
          </div>
        </div>
      </section>

      {/* ── TECHNICAL DEEP DIVE ───────────────────────────── */}
      <section className="fobr-tech-section" aria-labelledby="fobr-tech-title">
        <div className="fobr-container">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 id="fobr-tech-title" className="fobr-section-title">
              How Free Online Background Removal Actually Works
            </h2>
            <p className="fobr-section-sub">
              Understanding the technology behind instant background removal explains why
              AI tools have replaced manual Photoshop editing for most everyday tasks.
            </p>
          </motion.div>

          <div className="fobr-tech-content">
            <div className="fobr-tech-prose">
              <h3>From Magic Wand to Machine Learning</h3>
              <p>
                Traditional background removal relied on tools like Photoshop's Magic Wand,
                Quick Selection, and Pen Tool. These required a designer to manually trace
                around subjects — a process taking 15–60 minutes per image, demanding skill,
                and producing variable quality. The result was a significant cost barrier
                that put professional product imagery out of reach for most small businesses.
              </p>
              <p>
                Modern <strong>free online background removers</strong> use{' '}
                <strong>deep learning-based semantic segmentation</strong> — a computer vision
                technique where a neural network is trained on millions of annotated images to
                learn which pixels belong to "foreground" versus "background." Once trained,
                the model processes a new image in milliseconds, applying its learned
                understanding to produce a precise binary mask.
              </p>
              <h3>Why Some Images Are Harder Than Others</h3>
              <p>
                The difficulty of background removal depends on the{' '}
                <strong>contrast between subject and background</strong>, the{' '}
                <strong>complexity of the subject's edges</strong>, and the presence of{' '}
                <strong>semi-transparent elements</strong>. A red apple on a white table is
                trivially easy. A white cat on a white carpet, or a person with curly hair
                against a patterned wallpaper, pushes the limits of any AI system.
              </p>
              <p>
                Scenith addresses edge complexity using <strong>alpha matting</strong> — a
                secondary pass that estimates partial transparency at each edge pixel. Rather
                than a binary keep/remove decision, alpha matting assigns a fractional
                opacity value, producing smooth, natural transitions at boundaries like
                hair, fur, and soft fabric.
              </p>
              <h3>Why It's Free — The Business Model Explained</h3>
              <p>
                Free tiers exist because the marginal cost of processing additional images
                on GPU cloud infrastructure is very low at scale. Scenith offers 10 free
                monthly removals to let users experience the quality before upgrading to
                paid plans for bulk use. The free tier uses the same AI model as paid
                plans — there's no quality degradation, only a volume limit.
              </p>
            </div>

            <div className="fobr-tech-pills">
              {[
                { icon: '🧠', label: 'Semantic Segmentation', desc: 'Pixel-level foreground/background classification via CNN' },
                { icon: '🔬', label: 'Alpha Matting', desc: 'Fractional opacity at edges — no harsh cutouts' },
                { icon: '⚡', label: 'GPU Cloud Inference', desc: 'Sub-5-second processing on professional hardware' },
                { icon: '🎯', label: 'Multi-Subject Detection', desc: 'Handles people, products, pets, logos & more' },
                { icon: '📐', label: 'Edge Refinement Pass', desc: 'Post-processing to clean jagged mask edges' },
              ].map((pill) => (
                <div key={pill.label} className="fobr-tech-pill">
                  <span className="fobr-tech-pill-icon" aria-hidden="true">{pill.icon}</span>
                  <div>
                    <strong>{pill.label}</strong>
                    <span>{pill.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────── */}
      <section className="fobr-faq-section" id="faq" aria-labelledby="fobr-faq-title">
        <div className="fobr-container">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 id="fobr-faq-title" className="fobr-section-title">
              Frequently Asked Questions — Free Online Background Removal
            </h2>
          </motion.div>

          <div className="fobr-faq-grid">
            {[
              {
                q: 'Is this background remover really free online?',
                a: 'Yes — completely free with no hidden costs. Scenith\'s free plan gives you 10 background removals per month with full-resolution transparent PNG downloads and zero watermarks. No credit card required to start.',
              },
              {
                q: 'Do I need to create an account to remove a background for free?',
                a: 'No account is required. Click the tool button, upload your image, and download your transparent PNG. The entire process completes in under 5 seconds without any signup friction.',
              },
              {
                q: 'Why does the free download have no watermark?',
                a: 'Scenith believes free users deserve genuinely usable outputs. A watermarked free download isn\'t actually free for professional use. Scenith\'s free tier delivers clean, commercially usable transparent PNGs — the only kind of "free" that helps your business.',
              },
              {
                q: 'What\'s the best free online background remover with no watermark?',
                a: 'Scenith is among the top free background removers that combine no watermarks, full resolution, and fast AI processing. Compare the table above for a full breakdown against Remove.bg, Canva, and Adobe Express.',
              },
              {
                q: 'How do I remove a background from a product photo for free?',
                a: 'Click any CTA button on this page, upload your product photo (JPG or PNG, up to 30 MB), wait 5 seconds, and download your transparent PNG. It\'s marketplace-ready for Amazon, Shopify, Flipkart, Meesho, and eBay.',
              },
              {
                q: 'Does it work on images with white backgrounds?',
                a: 'Yes. White background removal is one of the easiest tasks for AI — high contrast between background and subject means precise, clean cuts. The output PNG will have a fully transparent background, ready for any use.',
              },
              {
                q: 'Can I use the free background-removed image for commercial purposes?',
                a: 'Yes. All images processed by Scenith — free and paid — come with full commercial use rights. Use them for product listings, client deliverables, ads, marketing materials, and any other business purpose.',
              },
              {
                q: 'What happens when I hit the 10 free removal limit?',
                a: 'When you reach the free monthly limit, you can upgrade to a paid plan starting at ₹349/month for 200 removals at full 4K resolution. Plans reset monthly, and your existing transparent PNGs are always available for download.',
              },
            ].map((item, i) => (
              <motion.article
                key={i}
                className="fobr-faq-item"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i % 3}
              >
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELATED TOOLS ─────────────────────────────────── */}
      <section className="fobr-related-section" aria-labelledby="fobr-related-title">
        <div className="fobr-container">
          <h2 id="fobr-related-title" className="fobr-section-title">
            Complete Your Workflow — More Free Tools from Scenith
          </h2>
          <p className="fobr-section-sub">
            Background removal is step one. Here's what to do with your transparent PNG next.
          </p>
          <div className="fobr-related-grid">
            {[
              {
                href: '/tools/background-removal',
                icon: '✂️',
                title: 'Background Remover',
                desc: 'The main background removal tool. Upload, process, download — full AI quality in under 5 seconds.',
              },
              {
                href: '/tools/change-image-background-for-free',
                icon: '🎨',
                title: 'Change Image Background',
                desc: 'Swap your old background for something new — white, color, gradient, or a custom scene.',
              },
              {
                href: '/tools/image-editing',
                icon: '🖌️',
                title: 'Free Image Editor',
                desc: 'Add text, shapes, stickers, filters, and custom backgrounds to your transparent PNG.',
              },
            ].map((tool) => (
              <Link key={tool.href} href={tool.href} className="fobr-related-card">
                <span className="fobr-related-icon" aria-hidden="true">{tool.icon}</span>
                <h3>{tool.title}</h3>
                <p>{tool.desc}</p>
                <span className="fobr-related-cta">Try Free →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────── */}
      <section className="fobr-final-cta-section" aria-labelledby="fobr-final-cta-title">
        <div className="fobr-container fobr-final-cta-inner">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 id="fobr-final-cta-title" className="fobr-final-cta-title">
              Remove Any Image Background — Free, Online, Right Now
            </h2>
            <p className="fobr-final-cta-sub">
              No Photoshop. No subscription. No watermark. No waiting. Join 50,000+ users who
              trust Scenith's AI to deliver clean, professional transparent images in seconds.
              Your first 10 removals every month are always free.
            </p>
            <a href={TOOL_URL} className="fobr-main-cta fobr-final-cta-btn" rel="noopener">
              ✂️ Remove Background Free — Start Now →
            </a>
            <div className="fobr-final-trust">
              <span>🆓 10 free/month</span>
              <span>⚡ Under 5 seconds</span>
              <span>🔒 No watermark</span>
              <span>📁 Full resolution PNG</span>
              <span>💼 Commercial use OK</span>
              <span>📱 Works on mobile</span>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}