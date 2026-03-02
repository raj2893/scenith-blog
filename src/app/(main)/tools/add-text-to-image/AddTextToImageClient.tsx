"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaFont,
  FaAlignCenter,
  FaPalette,
  FaDownload,
  FaMobileAlt,
  FaShieldAlt,
  FaBolt,
  FaCheckCircle,
  FaArrowRight,
  FaChevronDown,
} from "react-icons/fa";
import "../../../../../styles/tools/AddTextToImage.css";

const UTM_LINK =
  "https://scenith.in/tools/image-editing?utm_source=add-text-to-image&utm_medium=tool-page&utm_campaign=internal-cta";

const faqs = [
  {
    q: "Is it really free to add text to images on Scenith?",
    a: "Yes, completely free. You can add text to images, customize fonts, colors, and sizes, and download your result with zero watermarks, zero subscriptions, and zero hidden fees.",
  },
  {
    q: "Do I need to create an account to add text to a photo?",
    a: "You can explore the editor without an account. Saving projects to the cloud and accessing them later requires a free Scenith account — sign up in under 30 seconds.",
  },
  {
    q: "What fonts are available for adding text to images?",
    a: "Scenith offers 50+ Google Fonts and system fonts including display, serif, sans-serif, monospace, and handwriting styles. You can control weight, size, color, alignment, letter spacing, and line height.",
  },
  {
    q: "Can I add multiple text layers to one image?",
    a: "Absolutely. Scenith uses a layer-based system, so you can stack as many text layers as you need. Each text layer is independently editable — move, resize, rotate, and style them separately.",
  },
  {
    q: "What image formats can I upload?",
    a: "You can upload JPG, PNG, and WebP images. Export your finished design as PNG (with transparent background support) or JPG.",
  },
  {
    q: "Can I add a text watermark to my photos?",
    a: "Yes. Use the text tool to add a semi-transparent text watermark anywhere on your image. Control the opacity via the layer settings to achieve the exact watermark strength you want.",
  },
  {
    q: "Does the text editor work on mobile and tablet?",
    a: "Yes. Scenith's editor is fully responsive with touch gesture support, so you can add text to images on any smartphone or tablet, not just desktop.",
  },
  {
    q: "Can I add text to an image without downloading software?",
    a: "That's the whole point. Scenith runs entirely in your browser — no installs, no plugins, no extensions required.",
  },
];

const useCases = [
  {
    icon: "😂",
    title: "Meme Text",
    desc: "Classic Impact-style meme captions or modern styled overlays — create viral memes with full typographic control.",
  },
  {
    icon: "💬",
    title: "Inspirational Quotes",
    desc: "Overlay motivational quotes on backgrounds for Instagram, Pinterest, and LinkedIn with beautiful font pairings.",
  },
  {
    icon: "▶️",
    title: "YouTube Thumbnails",
    desc: "Bold, high-contrast text on images drives click-through rates. Add titles, numbers, and callout text to thumbnails.",
  },
  {
    icon: "🛍️",
    title: "Product Announcements",
    desc: "Add sale prices, product names, or promo codes on top of product photos for e-commerce and social ads.",
  },
  {
    icon: "💧",
    title: "Photo Watermarks",
    desc: "Protect your photography with custom text watermarks. Control font, opacity, position, and rotation.",
  },
  {
    icon: "📅",
    title: "Event Flyers",
    desc: "Add event name, date, venue, and ticket info directly onto a background image to create quick event graphics.",
  },
  {
    icon: "🏷️",
    title: "Image Captions",
    desc: "Add captions, credits, or descriptions to news images, editorial photos, or blog featured images.",
  },
  {
    icon: "🎓",
    title: "Certificates & Awards",
    desc: "Overlay recipient names and titles on certificate templates for digital awards and educational programs.",
  },
];

const steps = [
  {
    n: "01",
    title: "Open the Image Editor",
    desc: "Click the button below to open Scenith's free image editor. Upload your photo or start from a blank canvas.",
  },
  {
    n: "02",
    title: "Add a Text Layer",
    desc: "Click the Text tool in the toolbar. A new text layer appears on your canvas — type anything you want.",
  },
  {
    n: "03",
    title: "Customize Your Text",
    desc: "Choose from 50+ fonts, set color, size, weight, alignment, letter spacing, and add outlines or drop shadows.",
  },
  {
    n: "04",
    title: "Position & Export",
    desc: "Drag the text to exactly where you want it. Export as PNG or JPG — no watermark, completely free.",
  },
];

const fontShowcase = [
  { text: "Bold Headlines", font: "Impact, Haettenschweiler, sans-serif", size: "2.2rem", weight: "900" },
  { text: "Elegant Serifs", font: "Georgia, 'Times New Roman', serif", size: "2rem", weight: "400", style: "italic" },
  { text: "Modern Sans", font: "'Arial Black', sans-serif", size: "1.9rem", weight: "800" },
  { text: "Handwritten Style", font: "cursive", size: "2.1rem", weight: "400" },
  { text: "Monospace Code", font: "'Courier New', Courier, monospace", size: "1.8rem", weight: "700" },
];

const AddTextToImageClient: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="atti-page">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Scenith – Add Text to Image",
              description:
                "Free online tool to add custom text, captions, watermarks, and overlays to images. Supports 50+ fonts, full color control, and no-watermark exports.",
              url: "https://scenith.in/tools/add-text-to-image",
              applicationCategory: "DesignApplication",
              operatingSystem: "Web Browser",
              offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
              featureList: [
                "Add text to any image online",
                "50+ font options",
                "Custom font colors and sizes",
                "Text outlines and drop shadows",
                "Multiple text layers",
                "No watermarks on export",
                "PNG and JPG export",
                "Mobile-friendly editor",
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.q,
                acceptedAnswer: { "@type": "Answer", text: faq.a },
              })),
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://scenith.in",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Tools",
                  item: "https://scenith.in/tools",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Add Text to Image",
                  item: "https://scenith.in/tools/add-text-to-image",
                },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "HowTo",
              name: "How to Add Text to an Image Online",
              step: steps.map((s) => ({
                "@type": "HowToStep",
                name: s.title,
                text: s.desc,
              })),
            },
          ]),
        }}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="atti-breadcrumb">
        <ol itemScope itemType="https://schema.org/BreadcrumbList">
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <a href="/" itemProp="item"><span itemProp="name">Home</span></a>
            <meta itemProp="position" content="1" />
          </li>
          <span className="atti-bc-sep">/</span>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <a href="/tools" itemProp="item"><span itemProp="name">Tools</span></a>
            <meta itemProp="position" content="2" />
          </li>
          <span className="atti-bc-sep">/</span>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="name">Add Text to Image</span>
            <meta itemProp="position" content="3" />
          </li>
        </ol>
      </nav>

      {/* ─── HERO ─── */}
      <section className="atti-hero" id="hero" role="main">
        <div className="atti-hero-bg">
          <div className="atti-hero-orb atti-orb-1" />
          <div className="atti-hero-orb atti-orb-2" />
          <div className="atti-hero-orb atti-orb-3" />
        </div>

        <motion.div
          className="atti-hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <div className="atti-hero-badge">
            <FaFont /> Free Online Tool · No Watermark
          </div>

          <h1 className="atti-hero-title">
            Add Text to Image
            <span className="atti-hero-title-accent"> Online, Free</span>
          </h1>

          <p className="atti-hero-subtitle">
            Overlay custom text on any photo in seconds. Choose from 50+ fonts, adjust colors,
            size, alignment, outlines, and shadows — then export without a watermark. No software. No subscription.
          </p>

          {/* Font showcase */}
          <div className="atti-font-strip" aria-hidden="true">
            {fontShowcase.map((f, i) => (
              <motion.span
                key={i}
                className="atti-font-sample"
                style={{
                  fontFamily: f.font,
                  fontSize: f.size,
                  fontWeight: f.weight,
                  fontStyle: f.style ?? "normal",
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                {f.text}
              </motion.span>
            ))}
          </div>

          <motion.a
            href={UTM_LINK}
            className="atti-cta-primary"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.85 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            aria-label="Open Scenith image editor to add text to your image"
          >
            <FaFont /> Add Text to My Image — It's Free
            <FaArrowRight className="atti-cta-arrow" />
          </motion.a>

          <p className="atti-hero-trust">
            <FaCheckCircle /> No watermarks &nbsp;·&nbsp;
            <FaCheckCircle /> No account required to try &nbsp;·&nbsp;
            <FaCheckCircle /> Works in browser
          </p>
        </motion.div>

        {/* Live preview mockup */}
        <motion.div
          className="atti-hero-mockup"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          aria-hidden="true"
        >
          <div className="atti-mockup-canvas">
            <div className="atti-mockup-image-bg" />
            <div className="atti-mockup-text atti-mockup-text-1">YOUR HEADLINE</div>
            <div className="atti-mockup-text atti-mockup-text-2">Add any text here →</div>
            <div className="atti-mockup-text atti-mockup-text-3">Subtitle goes here</div>
            <div className="atti-mockup-badge-layer">TEXT LAYER</div>
          </div>
        </motion.div>
      </section>

      {/* ─── QUICK DEFINITION (Featured Snippet Target) ─── */}
      <section className="atti-definition-section" role="region" aria-labelledby="atti-definition-heading">
        <div className="atti-container">
          <div className="atti-definition-box">
            <h2 id="atti-definition-heading" className="atti-definition-heading">
              What Does "Add Text to Image" Mean?
            </h2>
            <p className="atti-definition-text">
              <strong>Adding text to an image</strong> means overlaying custom typographic elements — captions,
              headlines, watermarks, quotes, or labels — directly on top of a photo or graphic using an online image
              editor. You can control the font family, size, color, weight, alignment, opacity, rotation, and
              position of each text element. The result is exported as a flat image (PNG or JPG) that includes both
              the original photo and the added text. Scenith's free online tool makes this process instant, with no
              software installation required.
            </p>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="atti-steps-section" role="region" aria-labelledby="atti-steps-heading">
        <div className="atti-container">
          <div className="atti-section-header">
            <h2 id="atti-steps-heading">How to Add Text to an Image in 4 Steps</h2>
            <p className="atti-section-sub">No tutorials needed. Go from photo to finished design in under 2 minutes.</p>
          </div>
          <div className="atti-steps-grid">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                className="atti-step-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="atti-step-number">{step.n}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="atti-steps-cta">
            
            <a  href={UTM_LINK}
              className="atti-cta-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFont /> Start Adding Text Now
            </a>
          </div>
        </div>
      </section>

      {/* ─── USE CASES ─── */}
      <section className="atti-use-cases-section" role="region" aria-labelledby="atti-usecases-heading">
        <div className="atti-container">
          <div className="atti-section-header">
            <h2 id="atti-usecases-heading">Everything You Can Do with Text on Images</h2>
            <p className="atti-section-sub">From memes to marketing — one tool handles every use case</p>
          </div>
          <div className="atti-use-cases-grid">
            {useCases.map((uc, i) => (
              <motion.div
                key={i}
                className="atti-use-case-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
              >
                <span className="atti-uc-icon">{uc.icon}</span>
                <h3>{uc.title}</h3>
                <p>{uc.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TEXT FEATURES ─── */}
      <section className="atti-features-section" role="region" aria-labelledby="atti-features-heading">
        <div className="atti-container">
          <div className="atti-section-header">
            <h2 id="atti-features-heading">Advanced Text Customization — Every Option You Need</h2>
            <p className="atti-section-sub">Not just a basic caption tool. Full typographic control, free.</p>
          </div>
          <div className="atti-features-grid">
            <div className="atti-feature-block">
              <FaFont className="atti-feature-ico" />
              <div>
                <h3>50+ Google Fonts</h3>
                <p>Choose from display, serif, sans-serif, monospace, and handwritten typefaces. Preview in real time on your canvas.</p>
              </div>
            </div>
            <div className="atti-feature-block">
              <FaPalette className="atti-feature-ico" />
              <div>
                <h3>Full Color Control</h3>
                <p>Pick any hex color for your text. Set opacity for semi-transparent overlays and watermarks.</p>
              </div>
            </div>
            <div className="atti-feature-block">
              <FaAlignCenter className="atti-feature-ico" />
              <div>
                <h3>Alignment & Spacing</h3>
                <p>Left, center, and right alignment. Control letter spacing, line height, and text wrapping for perfect layout.</p>
              </div>
            </div>
            <div className="atti-feature-block">
              <span className="atti-feature-ico atti-feature-ico-text">T</span>
              <div>
                <h3>Text Outlines & Shadows</h3>
                <p>Add stroke outlines and drop shadows to text for maximum legibility on any image background.</p>
              </div>
            </div>
            <div className="atti-feature-block">
              <span className="atti-feature-ico atti-feature-ico-text" style={{ fontSize: "1.2rem" }}>↻</span>
              <div>
                <h3>Rotate Any Angle</h3>
                <p>Rotate text layers to any degree for diagonal captions, angled watermarks, or dynamic compositions.</p>
              </div>
            </div>
            <div className="atti-feature-block">
              <span className="atti-feature-ico atti-feature-ico-text">Aa</span>
              <div>
                <h3>Text Transform</h3>
                <p>Uppercase, lowercase, capitalize — transform text case on the fly without retyping.</p>
              </div>
            </div>
            <div className="atti-feature-block">
              <span className="atti-feature-ico atti-feature-ico-text">▤</span>
              <div>
                <h3>Multiple Text Layers</h3>
                <p>Stack unlimited text layers on one image. Each is independently editable, movable, and styleable.</p>
              </div>
            </div>
            <div className="atti-feature-block">
              <FaDownload className="atti-feature-ico" />
              <div>
                <h3>Zero Watermark Export</h3>
                <p>Download finished images as PNG or JPG. Scenith never adds its branding to your work.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MID-PAGE CTA ─── */}
      <section className="atti-mid-cta-section">
        <div className="atti-container">
          <motion.div
            className="atti-mid-cta-box"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Add Text to Your Image?</h2>
            <p>Open Scenith's free editor —  no software, no watermark.</p>
            
            <a  href={UTM_LINK}
              className="atti-cta-primary atti-cta-large"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFont /> Open Free Image Text Editor
              <FaArrowRight className="atti-cta-arrow" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ─── BENEFITS / WHY US ─── */}
      <section className="atti-benefits-section" role="region" aria-labelledby="atti-benefits-heading">
        <div className="atti-container">
          <div className="atti-section-header">
            <h2 id="atti-benefits-heading">Why Use Scenith to Add Text to Photos?</h2>
          </div>
          <div className="atti-benefits-grid">
            <div className="atti-benefit-card">
              <FaBolt className="atti-benefit-ico" />
              <h3>Instant, No Setup</h3>
              <p>Runs entirely in your browser. Open the editor, upload your image, and start adding text in under 10 seconds.</p>
            </div>
            <div className="atti-benefit-card">
              <FaShieldAlt className="atti-benefit-ico" />
              <h3>No Watermarks, Ever</h3>
              <p>Your exported images are 100% clean. No Scenith logo, no attribution required, no premium unlock needed.</p>
            </div>
            <div className="atti-benefit-card">
              <FaMobileAlt className="atti-benefit-ico" />
              <h3>Works on Any Device</h3>
              <p>Mobile, tablet, laptop, desktop — the editor adapts to every screen size with full touch support.</p>
            </div>
            <div className="atti-benefit-card">
              <FaCheckCircle className="atti-benefit-ico" />
              <h3>Layer-Based Editing</h3>
              <p>Unlike basic caption tools, Scenith uses a real layer system. Add as many text layers as you need and edit each independently.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── COMPARISON TABLE ─── */}
      <section className="atti-comparison-section" role="region" aria-labelledby="atti-comparison-heading">
        <div className="atti-container">
          <div className="atti-section-header">
            <h2 id="atti-comparison-heading">Scenith vs Other "Add Text to Image" Tools</h2>
            <p className="atti-section-sub">Not all free tools are created equal</p>
          </div>
          <div className="atti-table-wrapper">
            <table className="atti-comparison-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th className="atti-col-us">Scenith</th>
                  <th>BeFunky</th>
                  <th>PicFont</th>
                  <th>Kapwing</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["No Watermark on Free Plan", true, false, false, false],
                  ["Multiple Text Layers", true, "Limited", false, true],
                  ["50+ Fonts", true, true, "Limited", true],
                  ["Text Outlines & Shadows", true, false, false, true],
                  ["Layer-Based Editing", true, false, false, false],
                  ["PNG Transparent Export", true, false, false, "Pro Only"],
                  ["No Account to Try", true, false, true, false],
                  ["Completely Free", true, false, true, false],
                ].map(([feature, scenith, b, p, k], i) => (
                  <tr key={i}>
                    <td>{feature}</td>
                    <td className="atti-col-us">
                      {scenith === true ? <span className="atti-check">✓</span> : <span className="atti-limited">{scenith}</span>}
                    </td>
                    <td>{b === true ? <span className="atti-check">✓</span> : b === false ? <span className="atti-cross">✗</span> : <span className="atti-limited">{b}</span>}</td>
                    <td>{p === true ? <span className="atti-check">✓</span> : p === false ? <span className="atti-cross">✗</span> : <span className="atti-limited">{p}</span>}</td>
                    <td>{k === true ? <span className="atti-check">✓</span> : k === false ? <span className="atti-cross">✗</span> : <span className="atti-limited">{k}</span>}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── PAA / FAQ ─── */}
      <section className="atti-faq-section" role="region" aria-labelledby="atti-faq-heading">
        <div className="atti-container">
          <div className="atti-section-header">
            <h2 id="atti-faq-heading">Frequently Asked Questions — Add Text to Image</h2>
          </div>
          <div className="atti-faq-list">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`atti-faq-item ${openFaq === i ? "atti-faq-open" : ""}`}
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <button
                  className="atti-faq-question"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                  itemProp="name"
                >
                  {faq.q}
                  <FaChevronDown className="atti-faq-chevron" />
                </button>
                <div
                  className="atti-faq-answer"
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <p itemProp="text">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SEO CONTENT BLOCKS ─── */}
      <section className="atti-seo-section" role="region" aria-labelledby="atti-seo-heading">
        <div className="atti-container">
          <h2 id="atti-seo-heading" className="atti-seo-main-heading">
            The Complete Guide to Adding Text to Images Online
          </h2>
          <div className="atti-seo-grid">
            <div className="atti-seo-block">
              <h3>Why Add Text to Images?</h3>
              <p>
                Text overlays transform a plain photograph into a piece of communication. Whether you're a social media
                manager captioning brand photos, a blogger adding featured image titles, an educator labeling diagrams,
                or a seller writing product details — adding text to images makes visual content more informative,
                shareable, and effective. Research consistently shows that images with embedded text outperform
                image-only posts in engagement and click-through rates across Instagram, Facebook, and Pinterest.
              </p>
            </div>
            <div className="atti-seo-block">
              <h3>Add Text to Images for Social Media</h3>
              <p>
                Each platform has its own text-on-image norms. Instagram responds well to minimal, elegant font
                overlays on aesthetic backgrounds. Facebook and LinkedIn reward text that communicates value propositions
                quickly. Pinterest heavily favors vertical images with readable title text. YouTube thumbnails with
                bold, high-contrast text generate measurably higher click-through rates. Scenith lets you customize
                every typographic parameter to nail the aesthetic for each platform.
              </p>
            </div>
            <div className="atti-seo-block">
              <h3>Professional Text Overlay Without Photoshop</h3>
              <p>
                Adobe Photoshop is the gold standard for image editing — but it costs $20–$55 per month and has a
                steep learning curve. For the specific task of adding text to an image, Scenith provides all the
                essential capabilities: layered text, font selection, color control, sizing, rotation, outlines, and
                shadows. You get professional results in minutes without a subscription or training.
              </p>
            </div>
            <div className="atti-seo-block">
              <h3>Text Watermarks: Protect Your Photography</h3>
              <p>
                Adding a text watermark to photos before sharing online is the simplest form of copyright protection
                for photographers, videographers, and digital artists. With Scenith, you can create a reusable text
                layer with your name or brand, set it to a low opacity, position it consistently, and apply it across
                multiple photos. Export as PNG to maintain quality and use the watermarked version for sharing while
                keeping your clean originals.
              </p>
            </div>
            <div className="atti-seo-block">
              <h3>Memes, GIFs, and Viral Content</h3>
              <p>
                Meme culture runs on text-on-image. From Impact font all-caps captions to modern styled overlays with
                custom fonts and gradients — the meme format is evolving. Scenith gives you full typographic freedom:
                use bold system fonts for classic meme aesthetics, or experiment with Google Fonts for modern
                variants. Add multiple text blocks for top-and-bottom captions or layered joke formats.
              </p>
            </div>
            <div className="atti-seo-block">
              <h3>Quotes and Typography on Photographs</h3>
              <p>
                Typographic quote posts are among the most shared content types on Pinterest, Instagram, and Twitter.
                The formula is simple: a beautiful background image, a well-chosen font, a compelling quote, and clean
                spacing. Scenith's layer system lets you fine-tune every element — the font pairing, the text size
                hierarchy, the color, the alignment — until the composition feels intentional and ready to share.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="atti-final-cta-section">
        <div className="atti-container">
          <motion.div
            className="atti-final-cta-box"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="atti-final-cta-orb" aria-hidden="true" />
            <h2>Add Text to Your Image Right Now</h2>
            <p>
              Free. No watermarks. No software. 50+ fonts. Works on mobile.
              <br />
              Everything you need to create professional text overlays — in your browser.
            </p>
            
            <a  href={UTM_LINK}
              className="atti-cta-primary atti-cta-large"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Scenith free image editor to add text to image"
            >
              <FaFont /> Add Text to Image — Free
              <FaArrowRight className="atti-cta-arrow" />
            </a>
            <div className="atti-final-trust-row">
              <span><FaCheckCircle /> No account needed</span>
              <span><FaCheckCircle /> No watermark</span>
              <span><FaCheckCircle /> 50+ fonts</span>
              <span><FaCheckCircle /> PNG & JPG export</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── CROSS PROMO ─── */}
      <div className="atti-cross-promo">
        <p>
          💡 <strong>Pro Tip:</strong> Remove image backgrounds first with our{" "}
          <a href="/tools/background-removal">Free AI Background Remover</a>, then add text on a clean transparent PNG.
        </p>
        <a href="/tools/background-removal" className="atti-promo-link">Try Background Remover →</a>
      </div>
    </div>
  );
};

export default AddTextToImageClient;