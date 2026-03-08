'use client';


import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import '../../../../../styles/tools/ChangeImageBackground.css';

const TOOL_URL =
  'https://scenith.in/tools/background-removal?utm_source=change-image-background-for-free&utm_medium=cta&utm_campaign=seo-landing';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function ChangeImageBackgroundClient() {


  return (
    <div className="change-bg-page">

      {/* ── Structured Data ─────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'Scenith AI Background Changer',
            description:
              'Free AI-powered tool to change, replace, or swap image backgrounds online in under 5 seconds. No Photoshop',
            url: 'https://scenith.in/tools/change-image-background-for-free',
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
            name: 'How to Change Image Background for Free',
            description:
              'Step-by-step guide to changing a photo background online using AI — no software required.',
            totalTime: 'PT5S',
            step: [
              {
                '@type': 'HowToStep',
                position: 1,
                name: 'Upload Your Photo',
                text: 'Click the button above to open the Scenith background tool. Upload your JPG or PNG image — up to 30 MB supported.',
              },
              {
                '@type': 'HowToStep',
                position: 2,
                name: 'AI Detects & Removes the Original Background',
                text: "Scenith's AI engine isolates your subject with pixel-perfect precision in under 5 seconds, handling hair, fur, and complex edges.",
              },
              {
                '@type': 'HowToStep',
                position: 3,
                name: 'Apply a New Background or Download Transparent PNG',
                text: 'Download the transparent PNG and place it on any background in your design tool — or use the built-in Scenith editor to apply a new background instantly.',
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
                name: 'How do I change the background of an image for free?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "Use Scenith's free AI background changer: upload your photo, let the AI remove the original background in seconds, then download the transparent PNG and place it on any new background — or use the built-in editor to add a custom background directly.",
                },
              },
              {
                '@type': 'Question',
                name: 'Can I change a photo background without Photoshop?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. Scenith is a browser-based AI tool that changes photo backgrounds without any software installation. No Photoshop, no Canva Pro subscription, no design skills required.',
                },
              },
              {
                '@type': 'Question',
                name: 'Is changing image background free on Scenith?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes — Scenith offers free background removal and changing. Free plan users get 10 background changes per month. Upgrade for unlimited high-resolution processing.',
                },
              },
              {
                '@type': 'Question',
                name: 'What is the best free tool to change image background?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Scenith is among the best free background changers available online. It uses advanced AI to deliver clean, professional results in under 5 seconds — without watermarks or hidden costs.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can I change background to white for e-commerce?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "Yes. After removing the background with Scenith, download the transparent PNG and use the Scenith Image Editor to fill the background with pure white — meeting Amazon, Shopify, and eBay's product photo requirements.",
                },
              },
              {
                '@type': 'Question',
                name: 'Does changing the background work on mobile?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "Absolutely. Scenith's background changer is fully responsive and works on iPhone, Android, tablets, and all desktop browsers — same AI quality across every device.",
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
                name: 'Change Image Background for Free',
                item: 'https://scenith.in/tools/change-image-background-for-free',
              },
            ],
          }),
        }}
      />

      {/* ── Breadcrumb ───────────────────────────────────── */}
      <nav aria-label="Breadcrumb" className="change-bg-breadcrumb">
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
            <span itemProp="name">Change Image Background for Free</span>
            <meta itemProp="position" content="3" />
          </li>
        </ol>
      </nav>

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="change-bg-hero" aria-labelledby="hero-title">
        <div className="change-bg-particles" aria-hidden="true">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="cbg-particle" />
          ))}
        </div>

        <motion.div
          className="change-bg-hero-inner"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          {/* Pill badge */}
          <div className="cbg-badge" aria-hidden="true">
            <span className="cbg-badge-dot" />
            AI-Powered · Free 
          </div>

          <h1 id="hero-title" className="change-bg-h1">
            Change Image Background<br />
            <span className="cbg-gradient-text">for Free</span> — in Under 5 Seconds
          </h1>

          <p className="change-bg-hero-sub">
            Instantly swap, replace, or remove the background from any photo online. No
            Photoshop, no subscription, no design skills needed. Our AI isolates your subject
            with pixel-perfect precision — even fine hair, fur, and complex edges — and hands
            you a clean transparent PNG or a brand-new background in seconds.
          </p>

          {/* ── MAIN CTA ── */}
          
         <a   href={TOOL_URL}
            className="cbg-main-cta"
            aria-label="Open the free AI background changer tool"
            rel="noopener"
            >
            🎨 Change My Image Background — It's Free
          </a>

          <p className="cbg-cta-sub">
            ✅ Free forever &nbsp;·&nbsp; ⚡ Results in 5 sec &nbsp;·&nbsp; 🔒 No watermark &nbsp;·&nbsp; 💼 Commercial use OK
          </p>

          {/* Secondary CTA cluster */}
          <div className="cbg-secondary-ctas">
            <a href={TOOL_URL} className="cbg-secondary-btn">
              Change Background to White →
            </a>
            <a href={TOOL_URL} className="cbg-secondary-btn">
              Make Background Transparent →
            </a>
            <a href={TOOL_URL} className="cbg-secondary-btn">
              Replace Photo Background →
            </a>
          </div>
        </motion.div>
      </section>

      {/* ── DEFINITION SNIPPET ───────────────────────────── */}
      <section className="cbg-definition-section" aria-labelledby="definition-title">
        <div className="cbg-container">
          <div className="cbg-definition-box">
            <h2 id="definition-title" className="cbg-visually-hidden">
              What does "change image background" mean?
            </h2>
            <p className="cbg-definition-text">
              <strong>Changing an image background</strong> means using software or an AI tool
              to remove the existing background from a photo and either replace it with a new
              one — such as a solid color, gradient, custom scene, or transparent layer — or
              export the subject as a cut-out for use in any design. AI background changers do
              this automatically in seconds, eliminating hours of manual Photoshop work.
            </p>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ────────────────────────────────── */}
      <section className="cbg-how-section" id="how-it-works" aria-labelledby="how-title">
        <div className="cbg-container">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 id="how-title" className="cbg-section-title">
              How to Change an Image Background for Free — 3 Steps
            </h2>
            <p className="cbg-section-sub">
              No tutorials, no plugins, no learning curve. Here's exactly what happens when you
              use Scenith to change a photo background online.
            </p>
          </motion.div>

          <div className="cbg-steps-grid">
            {[
              {
                num: '01',
                icon: '📤',
                title: 'Upload Your Photo',
                body: `Click the big CTA button on this page to open the Scenith background tool. Drag and drop — or browse — your JPG, JPEG, or PNG image. Files up to 30 MB are supported. You don't need an account to get started; just upload and go.`,
              },
              {
                num: '02',
                icon: '🤖',
                title: 'AI Removes the Original Background',
                body: `Scenith's deep-learning model performs semantic segmentation on your photo, classifying every pixel as either "subject" or "background." It handles the trickiest scenarios — wispy hair, pet fur, translucent glass, complex silhouettes — with accuracy that used to require a skilled retoucher. Processing takes under 5 seconds.`,
              },
              {
                num: '03',
                icon: '🎨',
                title: 'Apply a New Background or Download',
                body: `Download your clean transparent PNG and place it on any background in Canva, Figma, Photoshop, or PowerPoint. Or open Scenith's free Image Editor directly to paint on a solid color, apply a gradient, or drop in a custom scene — all without leaving your browser.`,
              },
            ].map((step, i) => (
              <motion.article
                key={step.num}
                className="cbg-step-card"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                whileHover={{ scale: 1.03 }}
              >
                <div className="cbg-step-num" aria-hidden="true">{step.num}</div>
                <div className="cbg-step-icon" aria-hidden="true">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </motion.article>
            ))}
          </div>

          {/* Mid-page CTA */}
          <div className="cbg-mid-cta-wrap">
            <a href={TOOL_URL} className="cbg-main-cta" rel="noopener">
              🚀 Start Changing Backgrounds Now — Free
            </a>
          </div>
        </div>
      </section>

      {/* ── WHY CHANGE YOUR BACKGROUND ───────────────────── */}
      <section className="cbg-why-section" aria-labelledby="why-title">
        <div className="cbg-container">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 id="why-title" className="cbg-section-title">
              Why Change Your Image Background? Real Business & Creative Reasons
            </h2>
            <p className="cbg-section-sub">
              A changed background is not just an aesthetic choice — it's a strategic one.
              Here's why over 50,000+ creators, sellers, and designers change image backgrounds
              every day.
            </p>
          </motion.div>

          <div className="cbg-why-grid">
            {[
              {
                icon: '🛒',
                title: 'E-commerce Product Photos That Actually Sell',
                body: `Amazon's image guidelines require a pure white background. Shopify merchants report up to 40% higher click-through rates when product images have clean, distraction-free backgrounds. Whether you're listing on eBay, Etsy, Meesho, or Flipkart, a consistent white or transparent background communicates professionalism and builds buyer trust. Swapping a cluttered background for white takes 5 seconds with Scenith — not 30 minutes in Photoshop.`,
              },
              {
                icon: '📸',
                title: 'Portrait & Headshot Retouching Without a Studio',
                body: `Professional studio backdrops cost time and money. With an AI background changer, you can replace a messy home backdrop with a clean gradient or a premium studio grey in seconds. Perfect for LinkedIn headshots, resume photos, dating profiles, and corporate team pages — where first impressions matter enormously.`,
              },
              {
                icon: '📱',
                title: 'Social Media Graphics That Stop the Scroll',
                body: `Instagram Reels, TikTok thumbnails, Pinterest pins, and LinkedIn carousels all compete for attention in a noisy feed. A striking, intentional background makes your subject pop. Changing backgrounds lets you match your brand palette, seasonal themes, or campaign visuals without a graphic design degree.`,
              },
              {
                icon: '🎨',
                title: 'Marketing & Advertising Collateral at Scale',
                body: `Ad creative needs to be refreshed constantly. Rather than re-shooting every time, change the background to match a new season, promotion, or market. Create A/B variants with different background colors to discover what converts best — all in minutes, not hours.`,
              },
              {
                icon: '💡',
                title: 'Content Creation & Streaming',
                body: `YouTubers, Twitch streamers, and podcast hosts use transparent PNGs of themselves layered over branded backgrounds, game footage, or presentation slides. Changing backgrounds gives content creators full visual control without a green screen setup.`,
              },
              {
                icon: '🏢',
                title: 'Corporate & Presentation Design',
                body: `Pitch decks, investor presentations, and training materials look far more polished when images have clean, intentional backgrounds. A consistent background treatment across all visuals signals professionalism and attention to detail — key trust signals in B2B contexts.`,
              },
            ].map((item, i) => (
              <motion.article
                key={item.title}
                className="cbg-why-card"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i % 3}
              >
                <span className="cbg-why-icon" aria-hidden="true">{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── BACKGROUND TYPES ─────────────────────────────── */}
      <section className="cbg-types-section" aria-labelledby="types-title">
        <div className="cbg-container">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 id="types-title" className="cbg-section-title">
              What Kind of Background Can You Change To?
            </h2>
            <p className="cbg-section-sub">
              After removing the original background with Scenith, you're free to replace it
              with anything. Here are the most popular background-change scenarios and exactly
              how to achieve them.
            </p>
          </motion.div>

          <div className="cbg-types-grid">
            {[
              {
                label: 'Transparent / No Background',
                icon: '◻️',
                desc: `Download the PNG with a transparent alpha channel. Use it in Canva, Figma, Google Slides, Photoshop, or any tool that supports transparency. Ideal for logos, stickers, overlays, and composites.`,
                badge: 'Most Popular',
              },
              {
                label: 'Pure White Background',
                icon: '⬜',
                desc: `The standard requirement for Amazon, Flipkart, Meesho, and most product marketplaces. Download the transparent PNG, then fill the background layer with #FFFFFF in any editor — or use Scenith's editor to do it in one click.`,
                badge: 'E-commerce Standard',
              },
              {
                label: 'Solid Color Background',
                icon: '🎨',
                desc: `Replace with any brand color, seasonal palette, or mood-matching hue. Solid backgrounds create strong visual identity and are perfect for social media profile aesthetics and consistent product catalogs.`,
                badge: 'Branding',
              },
              {
                label: 'Gradient Background',
                icon: '🌅',
                desc: `Two-tone gradients add depth and modernity to product shots and headshots without distraction. Use the Scenith Image Editor to apply gradients directly after background removal.`,
                badge: 'Design Trend',
              },
              {
                label: 'Custom Scene / New Photo',
                icon: '🌆',
                desc: `Place your subject in a completely different environment — a studio, cityscape, nature scene, or branded backdrop. Composite images are standard in advertising, real estate, and fashion photography.`,
                badge: 'Creative',
              },
              {
                label: 'Blurred Background (Bokeh)',
                icon: '🔵',
                desc: `Simulate professional DSLR depth-of-field by blurring a background behind your sharp subject. Incredibly popular for LinkedIn photos, speaker bios, and any portrait where you want the subject to stand out.`,
                badge: 'Portrait',
              },
            ].map((type, i) => (
              <motion.div
                key={type.label}
                className="cbg-type-card"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i % 3}
                whileHover={{ scale: 1.04 }}
              >
                {type.badge && (
                  <span className="cbg-type-badge">{type.badge}</span>
                )}
                <span className="cbg-type-icon" aria-hidden="true">{type.icon}</span>
                <h3>{type.label}</h3>
                <p>{type.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECHNOLOGY EXPLAINER ─────────────────────────── */}
      <section className="cbg-tech-section" aria-labelledby="tech-title">
        <div className="cbg-container">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 id="tech-title" className="cbg-section-title">
              The AI Technology Behind Instant Background Changing
            </h2>
            <p className="cbg-section-sub">
              Understanding how the technology works helps you use it more effectively and trust
              the quality of the output.
            </p>
          </motion.div>

          <div className="cbg-tech-content">
            <div className="cbg-tech-prose">
              <p>
                At the core of every AI background changer is a process called{' '}
                <strong>semantic image segmentation</strong> — a computer vision technique that
                classifies every single pixel in an image as belonging to either the foreground
                subject or the background. This is fundamentally different from older "magic
                wand" selection tools that rely on color similarity; AI segmentation understands
                the <em>meaning</em> of objects in a scene.
              </p>
              <p>
                Modern background changers use <strong>convolutional neural networks (CNNs)</strong>{' '}
                — specifically architectures like U-Net, DeepLab, and transformer-based models —
                trained on tens of millions of annotated images. The model learns to recognize
                people, animals, products, vehicles, and hundreds of other object categories,
                then generates a precise binary mask: white for "keep," black for "remove."
              </p>
              <p>
                The hardest challenge — and where inferior tools fail — is the{' '}
                <strong>transition zone</strong>: semi-transparent hair strands, soft fur edges,
                motion blur, out-of-focus peripheries, and transparent materials like glass or
                lace. Advanced models tackle this with <strong>alpha matting algorithms</strong>{' '}
                that estimate partial transparency at every edge pixel, producing smooth,
                natural-looking cut-outs rather than harsh, jagged masks.
              </p>
              <p>
                When you use Scenith to change an image background, this entire pipeline —
                upload, inference, alpha matting, transparent PNG export — completes in under
                5 seconds, running on GPU-accelerated cloud infrastructure that would be
                impossible to replicate on a consumer laptop.
              </p>
            </div>

            <div className="cbg-tech-pills">
              {[
                { icon: '🧠', label: 'Semantic Segmentation', desc: 'Pixel-level subject/background classification' },
                { icon: '🔬', label: 'Alpha Matting', desc: 'Smooth semi-transparent edge handling' },
                { icon: '⚡', label: 'GPU Cloud Processing', desc: 'Sub-5-second inference at scale' },
                { icon: '🎯', label: 'Edge Refinement', desc: 'Hair, fur, glass — preserved perfectly' },
              ].map((pill) => (
                <div key={pill.label} className="cbg-tech-pill">
                  <span className="cbg-tech-pill-icon" aria-hidden="true">{pill.icon}</span>
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

      {/* ── COMPARISON ───────────────────────────────────── */}
      <section className="cbg-compare-section" aria-labelledby="compare-title">
        <div className="cbg-container">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 id="compare-title" className="cbg-section-title">
              Scenith vs Other Ways to Change Image Backgrounds
            </h2>
            <p className="cbg-section-sub">
              There are several ways to change a photo's background. Here's an honest
              comparison so you can choose what's right for your project.
            </p>
          </motion.div>

          <div className="cbg-compare-table-wrap">
            <table className="cbg-compare-table" aria-label="Background changing method comparison">
              <thead>
                <tr>
                  <th scope="col">Method</th>
                  <th scope="col">Speed</th>
                  <th scope="col">Cost</th>
                  <th scope="col">Skill Required</th>
                  <th scope="col">Hair / Fur Quality</th>
                  <th scope="col">Mobile Support</th>
                </tr>
              </thead>
              <tbody>
                <tr className="cbg-compare-highlight">
                  <td><strong>Scenith AI (this page)</strong></td>
                  <td>⚡ ~5 sec</td>
                  <td>🆓 Free</td>
                  <td>None</td>
                  <td>⭐⭐⭐⭐⭐</td>
                  <td>✅ Yes</td>
                </tr>
                <tr>
                  <td>Adobe Photoshop</td>
                  <td>🐢 15–60 min</td>
                  <td>💸 $54.99/mo</td>
                  <td>High</td>
                  <td>⭐⭐⭐⭐⭐ (manual)</td>
                  <td>⚠️ Limited</td>
                </tr>
                <tr>
                  <td>Remove.bg</td>
                  <td>⚡ ~5 sec</td>
                  <td>💸 Free preview only; $9+ HD</td>
                  <td>None</td>
                  <td>⭐⭐⭐⭐</td>
                  <td>✅ Yes</td>
                </tr>
                <tr>
                  <td>Canva Background Remover</td>
                  <td>⚡ ~8 sec</td>
                  <td>💸 Canva Pro $12.99/mo</td>
                  <td>Minimal</td>
                  <td>⭐⭐⭐</td>
                  <td>✅ Yes</td>
                </tr>
                <tr>
                  <td>Manual Freelancer</td>
                  <td>🐢 Hours–Days</td>
                  <td>💸 $5–$25/image</td>
                  <td>None (outsourced)</td>
                  <td>⭐⭐⭐⭐⭐ (variable)</td>
                  <td>N/A</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── USE CASES ────────────────────────────────────── */}
      <section className="cbg-usecases-section" aria-labelledby="usecases-title">
        <div className="cbg-container">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 id="usecases-title" className="cbg-section-title">
              Who Uses AI Background Changing — and For What
            </h2>
            <p className="cbg-section-sub">
              From solo Etsy sellers to enterprise marketing teams, here's how different users
              change image backgrounds to get results faster.
            </p>
          </motion.div>

          <div className="cbg-usecases-grid">
            {[
              {
                persona: '🛍️ Online Seller / E-commerce Entrepreneur',
                scenario: 'You sell handmade jewellery on Etsy and need product photos with white backgrounds to meet platform guidelines and look professional. You photograph on a grey table and change the background to white in Scenith — all 40 product photos processed in under 5 minutes.',
              },
              {
                persona: '💼 Marketing Manager at a D2C Brand',
                scenario: 'Your brand runs seasonal campaigns. Instead of re-shooting the same products, you change backgrounds to match each season: pastel pink for Valentine\'s Day, earthy greens for Diwali, deep navy for Black Friday. One AI tool, unlimited visual variety.',
              },
              {
                persona: '📷 Freelance Photographer',
                scenario: 'You shoot corporate headshots and need to deliver a clean white-or-grey background variant for every client. Instead of setting up a backdrop, you shoot against any neutral surface and change backgrounds in post — cutting your editing time by 80%.',
              },
              {
                persona: '🎥 Content Creator / YouTuber',
                scenario: 'You want a branded thumbnail with your PNG self placed over a dramatic background. You photograph yourself, remove the background, and composite it over a custom scene using Scenith\'s image editor — creating professional thumbnails in minutes.',
              },
              {
                persona: '🎓 Student / Teacher',
                scenario: 'You\'re creating a presentation and want clean images of diagrams, equipment, or portraits without distracting backgrounds. AI background changing turns messy stock photos into clean, focused visuals that enhance your slides.',
              },
              {
                persona: '🏠 Real Estate Agent',
                scenario: 'You need virtual staging composites — furniture images with transparent backgrounds placed into empty room photos. Changing furniture backgrounds to transparent and compositing them over room photos creates compelling virtual staged listings.',
              },
            ].map((uc, i) => (
              <motion.article
                key={uc.persona}
                className="cbg-usecase-card"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i % 2}
              >
                <h3>{uc.persona}</h3>
                <p>{uc.scenario}</p>
              </motion.article>
            ))}
          </div>

          {/* Mid CTA */}
          <div className="cbg-mid-cta-wrap">
            <a href={TOOL_URL} className="cbg-main-cta" rel="noopener">
              🎯 Change Your Image Background Now — Free
            </a>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section className="cbg-faq-section" id="faq" aria-labelledby="faq-title">
        <div className="cbg-container">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 id="faq-title" className="cbg-section-title">
              Frequently Asked Questions — Changing Image Backgrounds
            </h2>
          </motion.div>

          <div className="cbg-faq-grid">
            {[
              {
                q: 'How do I change the background of an image for free?',
                a: "Upload your photo to Scenith's free background tool (linked above), let the AI remove the existing background in under 5 seconds, then download the transparent PNG. Use it in any design tool to add a new background — or apply one directly inside Scenith's editor.",
              },
              {
                q: 'Can I change a photo background without Photoshop?',
                a: "Yes, completely. Scenith runs in your browser — no software to install, no design experience required. The AI handles everything automatically, delivering results that match or exceed manual Photoshop selections for most subjects.",
              },
              {
                q: 'How many images can I change for free?',
                a: 'Free Scenith accounts get 10 background changes per month at standard resolution. Upgrade to Creator Spark or Creator Odyssey for 200–500 high-resolution changes per month from ₹349/month.',
              },
              {
                q: 'What image formats are supported?',
                a: 'Upload JPG, JPEG, or PNG files up to 30 MB. The AI outputs a transparent PNG file that preserves full image quality and alpha channel transparency.',
              },
              {
                q: 'Is the output image good enough for print?',
                a: 'For standard web and social media use, absolutely. For large-format print (posters, billboards), use the highest-resolution source image possible and consider the paid plans which process full 4K quality.',
              },
              {
                q: 'Does it work on product photos with reflective surfaces?',
                a: 'Modern AI handles reflective surfaces reasonably well, though highly glossy or mirrored objects can be challenging for any automated tool. For best results, photograph products against a contrasting background.',
              },
              {
                q: "Can I use changed background images for commercial projects?",
                a: "Yes. All images processed through Scenith — both on free and paid plans — are yours to use for commercial purposes including product listings, advertising, client work, and marketing materials.",
              },
              {
                q: 'Does background changing work on mobile phones?',
                a: "Scenith is fully responsive. Upload a photo from your phone's camera roll, change the background, and download — all from your mobile browser. No app download required.",
              },
            ].map((item, i) => (
              <motion.article
                key={i}
                className="cbg-faq-item"
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

      {/* ── RELATED TOOLS ────────────────────────────────── */}
      <section className="cbg-related-section" aria-labelledby="related-title">
        <div className="cbg-container">
          <h2 id="related-title" className="cbg-section-title">
            More Free Image Tools from Scenith
          </h2>
          <p className="cbg-section-sub">
            Background changing is just the beginning. Complete your entire visual workflow
            without leaving your browser.
          </p>
          <div className="cbg-related-grid">
            {[
              {
                href: '/tools/background-removal',
                icon: '✂️',
                title: 'Remove Background',
                desc: 'Strip any background from your image and download a clean transparent PNG in seconds.',
              },
              {
                href: '/tools/image-editing',
                icon: '🖌️',
                title: 'Image Editor',
                desc: 'Add text, stickers, filters, shapes, and custom backgrounds to your transparent images.',
              },
              {
                href: '/tools',
                icon: '🧰',
                title: 'All AI Tools',
                desc: 'Explore the full suite of free AI-powered creative tools on Scenith.',
              },
            ].map((tool) => (
              <Link key={tool.href} href={tool.href} className="cbg-related-card">
                <span className="cbg-related-icon" aria-hidden="true">{tool.icon}</span>
                <h3>{tool.title}</h3>
                <p>{tool.desc}</p>
                <span className="cbg-related-cta">Try Free →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────── */}
      <section className="cbg-final-cta-section" aria-labelledby="final-cta-title">
        <div className="cbg-container cbg-final-cta-inner">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 id="final-cta-title" className="cbg-final-cta-title">
              Ready to Change Your Image Background?
            </h2>
            <p className="cbg-final-cta-sub">
              Join 50,000+ creators and sellers who use Scenith to produce professional visuals
              in seconds. No software. No subscription. No watermarks. Just results.
            </p>
            <a href={TOOL_URL} className="cbg-main-cta cbg-final-cta-btn" rel="noopener">
              🎨 Change Image Background for Free →
            </a>
            <div className="cbg-final-trust">
              <span>⚡ 5-second AI processing</span>
              <span>🆓 Free forever plan</span>
              <span>🔒 Secure & private</span>
              <span>💼 Commercial use OK</span>
              <span>📱 Works on any device</span>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}