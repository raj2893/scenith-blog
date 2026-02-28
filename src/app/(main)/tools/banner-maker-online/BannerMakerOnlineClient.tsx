"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import "../../../../../styles/tools/BannerMakerOnline.css";

const CTA_URL =
  "https://scenith.in/tools/image-editing?utm_source=banner-maker-online&utm_medium=internal-cta&utm_campaign=banner-maker-page";

const BannerMakerOnlineClient: React.FC = () => {
  return (
    <div className="banner-maker-page">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Scenith Banner Maker",
              description:
                "Free online banner maker for creating professional website banners, social media headers, ad banners, and promotional graphics. No watermarks, no downloads, no limits.",
              url: "https://scenith.in/tools/banner-maker-online",
              applicationCategory: "DesignApplication",
              operatingSystem: "Web Browser",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              featureList: [
                "Drag-and-drop banner builder",
                "Hundreds of ready-made banner templates",
                "Custom text, fonts, and colors",
                "Layer-based editing",
                "Export PNG, JPG, PDF — no watermarks",
                "All banner sizes for every platform",
                "Cloud project saving",
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://scenith.in/",
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
                  name: "Banner Maker Online",
                  item: "https://scenith.in/tools/banner-maker-online",
                },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is Scenith's banner maker completely free?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, Scenith's banner maker is 100% free. You can create unlimited banners, export them in PNG, JPG, or PDF format with no watermarks, no credit card required.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What banner sizes can I create with Scenith?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Scenith supports all popular banner sizes including leaderboard (728x90), rectangle (300x250), skyscraper (160x600), YouTube channel art (2560x1440), Facebook cover (820x312), LinkedIn banner (1584x396), Twitter header (1500x500), and fully custom dimensions.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do I need to download software to make banners?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No. Scenith is entirely browser-based. You can create, edit, and export banners directly from your web browser on any device — no downloads or installations required.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I create animated banners with Scenith?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Scenith specializes in high-quality static banners with professional filters, effects, text, and shapes. Export as PNG, JPG, or print-ready PDF instantly.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Does Scenith add watermarks to exported banners?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Never. All banners you export from Scenith are 100% yours with no watermarks, no Scenith branding, and no restrictions on use.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      {/* Particle Background */}
      <div className="particle-background" aria-hidden="true">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="particle" />
        ))}
      </div>

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="breadcrumb-nav">
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
            <span itemProp="name">Banner Maker Online</span>
            <meta itemProp="position" content="3" />
          </li>
        </ol>
      </nav>

      {/* ─── HERO ─── */}
      <section className="bm-hero" id="hero" role="main">
        <motion.div
          className="bm-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="bm-badge">✦ 100% Free — No Watermarks</span>
          <h1>Free Online Banner Maker</h1>
          <p className="bm-hero-subtitle">
            Design professional banners for websites, social media, and ads in minutes.
            No design skills. No software. No cost.
          </p>

          <motion.a
            href={CTA_URL}
            className="bm-cta-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            aria-label="Open Scenith Banner Maker — free online tool"
          >
            🎨 Create Your Banner — Free
          </motion.a>

          <p className="bm-cta-subtext">
            Powered by{" "}
            <a href="https://scenith.in/tools/image-editing" className="bm-inline-link">
              Scenith Image Editor
            </a>{" "}
            · No sign-up required to browse templates
          </p>

          <div className="bm-hero-stats" role="list" aria-label="Tool highlights">
            <div role="listitem"><strong>250K+</strong><span>Users</span></div>
            <div role="listitem"><strong>5M+</strong><span>Banners Made</span></div>
            <div role="listitem"><strong>0₹ / $0</strong><span>Forever Free</span></div>
            <div role="listitem"><strong>Zero</strong><span>Watermarks</span></div>
          </div>
        </motion.div>
      </section>

      {/* ─── QUICK DEFINITION (Featured Snippet target) ─── */}
      <section className="bm-definition-section" role="region" aria-labelledby="bm-definition-heading">
        <div className="bm-container">
          <div className="bm-definition-box">
            <h2 id="bm-definition-heading" className="visually-hidden">What is an Online Banner Maker?</h2>
            <p className="bm-definition-text">
              An <strong>online banner maker</strong> is a free, browser-based design tool that lets
              anyone create professional banners for websites, social media profiles, digital ads, and
              YouTube channels — without downloading software or hiring a designer. Simply choose a
              canvas size, add text, images, and shapes, then export as PNG, JPG, or PDF.
            </p>
          </div>
        </div>
      </section>

      {/* ─── WHAT YOU CAN CREATE ─── */}
      <section className="bm-usecases-section">
        <div className="bm-container">
          <h2>What Can You Create with This Banner Maker?</h2>
          <p className="bm-section-subtitle">Every banner format — one free tool</p>
          <div className="bm-usecases-grid">
            {[
              {
                icon: "🌐",
                title: "Website Banners",
                desc: "Design leaderboard (728×90), rectangle (300×250), and full-width hero banners that grab attention and drive clicks on your site.",
              },
              {
                icon: "📣",
                title: "Social Media Banners",
                desc: "Create pixel-perfect covers for Facebook, LinkedIn, Twitter/X, YouTube, and Etsy shops. Pre-sized canvas templates for every platform.",
              },
              {
                icon: "📢",
                title: "Ad & Promotional Banners",
                desc: "Build Google Display ads, retargeting banners, and promotional graphics that convert. All standard IAB ad sizes supported.",
              },
              {
                icon: "▶️",
                title: "YouTube Channel Art",
                desc: "Make stunning YouTube channel banners at the exact 2560×1440px dimension so they display perfectly across desktop, tablet, and TV.",
              },
              {
                icon: "🎉",
                title: "Event & Sale Banners",
                desc: "Announce sales, product launches, webinars, and events with high-impact banners that you can update instantly and re-export.",
              },
              {
                icon: "🏢",
                title: "Business Email Signatures",
                desc: "Create branded signature banners with your logo, tagline, and contact info. Export as PNG and embed in Gmail or Outlook.",
              },
            ].map((item) => (
              <div key={item.title} className="bm-usecase-card">
                <span className="bm-usecase-icon" aria-hidden="true">{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BANNER SIZES REFERENCE ─── */}
      <section className="bm-sizes-section">
        <div className="bm-container">
          <h2>All Standard Banner Sizes — Ready to Use</h2>
          <p className="bm-section-subtitle">
            Select a preset or enter custom dimensions. Optimized for every platform and ad network.
          </p>
          <div className="bm-sizes-grid">
            {[
              { label: "Leaderboard", size: "728 × 90 px", use: "Website header/footer ads" },
              { label: "Medium Rectangle", size: "300 × 250 px", use: "Most popular Google Display size" },
              { label: "Large Rectangle", size: "336 × 280 px", use: "High-performing AdSense unit" },
              { label: "Half Page", size: "300 × 600 px", use: "Premium display advertising" },
              { label: "Wide Skyscraper", size: "160 × 600 px", use: "Sidebar website ads" },
              { label: "Billboard", size: "970 × 250 px", use: "High-impact website takeovers" },
              { label: "Facebook Cover", size: "820 × 312 px", use: "Facebook page header" },
              { label: "YouTube Banner", size: "2560 × 1440 px", use: "YouTube channel art" },
              { label: "LinkedIn Banner", size: "1584 × 396 px", use: "LinkedIn profile/company header" },
              { label: "Twitter/X Header", size: "1500 × 500 px", use: "Twitter profile banner" },
              { label: "Instagram Story", size: "1080 × 1920 px", use: "Instagram stories & reels" },
              { label: "Custom", size: "Any dimension", use: "Your exact specifications" },
            ].map((s) => (
              <div key={s.label} className="bm-size-card">
                <h3 className="bm-size-label">{s.label}</h3>
                <p className="bm-size-dim">{s.size}</p>
                <p className="bm-size-use">{s.use}</p>
              </div>
            ))}
          </div>
          <div className="bm-sizes-cta">
            <a href={CTA_URL} className="bm-cta-secondary">
              Open Banner Maker with These Presets →
            </a>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="bm-how-section">
        <div className="bm-container">
          <h2>How to Make a Banner Online — In 4 Steps</h2>
          <p className="bm-section-subtitle">From blank canvas to download-ready in under 5 minutes</p>
          <div className="bm-steps-grid">
            {[
              {
                n: "1",
                title: "Pick a Banner Size",
                desc: "Choose from preset dimensions for Google Ads, social media, YouTube, or enter custom width and height. Every major format is supported.",
              },
              {
                n: "2",
                title: "Add Your Content",
                desc: "Upload your brand logo, add headlines with custom fonts, drop in background images or solid colors, and arrange shapes and icons — all with drag-and-drop simplicity.",
              },
              {
                n: "3",
                title: "Style & Customize",
                desc: "Apply filters, adjust colors, tweak opacity, add drop shadows, control text alignment, and fine-tune every pixel with precision layer controls.",
              },
              {
                n: "4",
                title: "Download & Deploy",
                desc: "Export your finished banner as high-resolution PNG (with transparency), JPG, or print-ready PDF. No watermarks. Your file, your rights.",
              },
            ].map((step) => (
              <div key={step.n} className="bm-step-card">
                <div className="bm-step-number" aria-hidden="true">{step.n}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURES ─── */}
      <section className="bm-features-section">
        <div className="bm-container">
          <h2>Banner Maker Features Built for Results</h2>
          <div className="bm-features-grid">
            {[
              {
                icon: "🖼️",
                title: "Pixel-Perfect Layer Editing",
                desc: "Stack elements with full control over z-order, opacity, and blending. Build complex banners without losing control of any element.",
              },
              {
                icon: "✍️",
                title: "Professional Typography",
                desc: "50+ Google Fonts, custom font sizes, letter spacing, text outlines, and shadows. Make your headline impossible to scroll past.",
              },
              {
                icon: "🎨",
                title: "Advanced Color Tools",
                desc: "Solid fills, gradients, and a full color picker. Maintain precise brand colors with hex codes and RGBA controls.",
              },
              {
                icon: "🔷",
                title: "Shape & Icon Library",
                desc: "Rectangles, circles, triangles, ellipses — with custom stroke, fill, and border-radius. Build geometric layouts in seconds.",
              },
              {
                icon: "⚡",
                title: "Instant Filter Effects",
                desc: "Brightness, contrast, saturation, blur, grayscale, sepia, vintage — apply one-click filters to images within your banner.",
              },
              {
                icon: "☁️",
                title: "Auto-Save to Cloud",
                desc: "Every edit is saved automatically. Return to any project anytime, update seasonal banners, and keep a library of reusable designs.",
              },
              {
                icon: "📱",
                title: "Works on Any Device",
                desc: "Design on desktop, tablet, or mobile. Touch gestures supported. No app install needed — runs entirely in your browser.",
              },
              {
                icon: "📤",
                title: "Multi-Format Export",
                desc: "PNG with alpha transparency, JPG for web performance, or vector-clean PDF for print. Full resolution, zero compression artifacts.",
              },
            ].map((f) => (
              <div key={f.title} className="bm-feature-card">
                <span className="bm-feature-icon" aria-hidden="true">{f.icon}</span>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MID-PAGE CTA ─── */}
      <section className="bm-mid-cta">
        <div className="bm-container">
          <div className="bm-mid-cta-box">
            <h2>Ready to Make Your Banner?</h2>
            <p>No account needed to explore templates. Sign in only when you want to save your work.</p>
            <a href={CTA_URL} className="bm-cta-primary">
              🚀 Launch Banner Maker — It's Free
            </a>
          </div>
        </div>
      </section>

      {/* ─── COMPARISON ─── */}
      <section className="bm-comparison-section">
        <div className="bm-container">
          <h2>Scenith vs Other Free Banner Makers</h2>
          <div className="bm-comparison-table-wrapper">
            <table className="bm-comparison-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Scenith</th>
                  <th>Canva Free</th>
                  <th>BannerSnack</th>
                  <th>Adobe Express Free</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Truly Free", "✓", "✓", "✗ Trial only", "Limited"],
                  ["No Watermarks", "✓", "✓", "✗", "✓"],
                  ["Layer-Based Editing", "✓", "✗", "✓", "Limited"],
                  ["Custom Dimensions", "✓", "Limited", "✓", "Limited"],
                  ["PNG Transparency", "✓", "Pro Only", "✓", "✓"],
                  ["PDF Export", "✓", "Pro Only", "✗", "Limited"],
                  ["Unlimited Projects", "✓", "Limited", "✗", "Limited"],
                  ["No Ads", "✓", "✓", "✗", "✓"],
                ].map(([feat, ...vals]) => (
                  <tr key={feat as string}>
                    <td>{feat}</td>
                    {vals.map((v, i) => (
                      <td key={i}>
                        <span className={v === "✓" ? "check" : v === "✗" ? "cross" : "limited"}>
                          {v}
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── INDUSTRIES ─── */}
      <section className="bm-industries-section">
        <div className="bm-container">
          <h2>Who Uses Scenith's Free Banner Maker?</h2>
          <div className="bm-industries-grid">
            {[
              {
                icon: "🛍️",
                title: "E-commerce Stores",
                desc: "Create sale banners, hero sliders, product promotion graphics, and retargeting ad creatives for Shopify, WooCommerce, and Amazon.",
              },
              {
                icon: "📊",
                title: "Digital Marketers",
                desc: "Build full Google Display Network ad sets across all IAB sizes in one session. A/B test creatives fast without a designer.",
              },
              {
                icon: "🎬",
                title: "YouTubers & Streamers",
                desc: "Design YouTube channel banners, Twitch overlays, stream screens, and subscriber CTAs that match your personal brand perfectly.",
              },
              {
                icon: "🏢",
                title: "Small Businesses",
                desc: "Promote your services with professional web banners, seasonal sale graphics, and social headers — at absolutely zero cost.",
              },
              {
                icon: "🎓",
                title: "Bloggers & Publishers",
                desc: "Make sidebar ads, newsletter headers, sponsor banners, and featured image graphics that keep your site looking polished.",
              },
              {
                icon: "💼",
                title: "Freelancers & Agencies",
                desc: "Deliver client banner deliverables faster. Save projects to cloud, make revisions on the fly, and export any format clients need.",
              },
            ].map((item) => (
              <div key={item.title} className="bm-industry-card">
                <span aria-hidden="true">{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="bm-faq-section">
        <div className="bm-container">
          <h2>Frequently Asked Questions — Online Banner Maker</h2>
          <div className="bm-faq-grid">
            {[
              {
                q: "Is Scenith's banner maker really free with no hidden charges?",
                a: "Yes, completely free. Create unlimited banners, access all features including layer editing, custom fonts, and filters, and export in any format — all at zero cost, forever. No trial periods, no credit cards, no premium tiers.",
              },
              {
                q: "What is the best size for a website banner?",
                a: "The most effective website banner sizes are the Medium Rectangle (300×250px) and the Leaderboard (728×90px) — these are the top-performing Google Display ad units. For hero/header banners, 1920×600px or 1200×400px work well for full-width website headers.",
              },
              {
                q: "Can I upload my own logo and images?",
                a: "Absolutely. Upload PNG, JPG, WebP, or SVG files directly into your banner. Position, resize, rotate, and apply filters to any uploaded asset. Your uploads are saved securely to your project.",
              },
              {
                q: "Can I create banners without signing up?",
                a: "You can browse templates freely. To save your work and export banners, a free Scenith account is needed — sign up in 10 seconds with Google or email.",
              },
              {
                q: "Does my banner retain transparency when exported as PNG?",
                a: "Yes. PNG exports from Scenith fully preserve alpha transparency, making them perfect for banners placed over website backgrounds, videos, or colored sections without any white box.",
              },
              {
                q: "How is Scenith different from Canva for banner creation?",
                a: "Unlike Canva's template-first approach, Scenith gives you true layer-based editing — similar to Photoshop — with full control over every element. There are no 'premium' elements locked behind a paywall, and PDF export is fully free (Canva charges for this).",
              },
            ].map((item) => (
              <div key={item.q} className="bm-faq-item">
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CROSS-TOOL PROMO ─── */}
      <div className="bm-cross-promo">
        <p>
          💡 <strong>Pro Tip:</strong> Remove image backgrounds before adding them to your banners with our{" "}
          <a href="/tools/background-removal" className="bm-inline-link">
            Free AI Background Remover
          </a>
          , then use them here for clean, professional results!
        </p>
      </div>

      {/* ─── SEO CONTENT ─── */}
      <section className="bm-seo-section">
        <div className="bm-container">
          <div className="bm-seo-content">
            <h2>About Scenith Free Online Banner Maker</h2>

            <div className="bm-content-block">
              <h3>What Makes a Great Banner?</h3>
              <p>
                An effective banner captures attention within 3 seconds, communicates a single clear
                message, and includes a visible call-to-action. Studies show banners with high color
                contrast, minimal text (7 words or fewer for headlines), and a recognizable brand mark
                outperform cluttered designs by up to 3x on click-through rate. Scenith's banner maker
                gives you the tools to nail all three: full color control, clean typography, and
                professional layering — without the complexity of Photoshop.
              </p>
            </div>

            <div className="bm-content-block">
              <h3>Free Banner Maker vs Expensive Design Software</h3>
              <p>
                Professional design software like Adobe Illustrator or Photoshop can cost $54/month.
                Canva Pro is $15/month. Scenith is free — permanently, for everyone. But free doesn't
                mean basic: Scenith's layer-based engine offers the same workflow professionals use
                in premium tools. You get full opacity control, rotation, shape libraries, image filters,
                and multi-format export — all without spending a rupee or a dollar.
              </p>
            </div>

            <div className="bm-content-block">
              <h3>Banner Design Best Practices for 2025</h3>
              <p>
                In 2025, digital audiences are more banner-blind than ever. To cut through, the best
                performing banners use bold, high-contrast typography against clean backgrounds, limit
                copy to one key benefit plus one action, and use brand-consistent colors. Animated
                elements can boost CTR but static banners with strong composition still dominate
                performance on Google Display Network and social platforms. Scenith helps you
                implement all these principles with real-time visual feedback.
              </p>
            </div>

            <div className="bm-content-block">
              <h3>How Banner Dimensions Affect Performance</h3>
              <p>
                Choosing the wrong banner size is one of the most common mistakes marketers make.
                The IAB (Interactive Advertising Bureau) recommends specific sizes that get the most
                inventory across ad networks. The 300×250 Medium Rectangle has the highest fill rate
                globally. The 728×90 Leaderboard dominates desktop placements. The 160×600 Wide
                Skyscraper excels in sidebar placements. Scenith has all these built in as one-click
                canvas presets so you never guess at dimensions again.
              </p>
            </div>

            <div className="bm-content-block">
              <h3>Social Media Banner Sizing Guide</h3>
              <p>
                Each social platform has strict banner dimensions that affect how your profile appears
                to visitors. A wrongly-sized LinkedIn banner gets cropped awkwardly on mobile. A
                YouTube channel art that doesn't follow the 2560×1440px safe zone loses critical
                branding on TV screens. Scenith's preset templates are maintained and updated to match
                each platform's current specifications, so your banners always display perfectly
                everywhere they're seen.
              </p>
            </div>

            <div className="bm-content-block">
              <h3>Why Transparent PNG Banners Matter</h3>
              <p>
                When you place a banner on a website, the background of that page may be any color.
                A JPG banner has a hard white or colored background that clashes with the site design.
                A transparent PNG banner floats seamlessly over any background, giving your design a
                polished, professional look that integrates with the page. Scenith exports fully
                transparent PNGs on all plans — completely free — unlike tools that lock transparency
                behind paid tiers.
              </p>
            </div>

            <div className="bm-content-block">
              <h3>Scenith Banner Maker for Google Display Ads</h3>
              <p>
                Google Display Network reaches over 90% of internet users worldwide. To run effective
                GDN campaigns, you need creatives in at least 5 different sizes: 300×250, 728×90,
                160×600, 320×50, and 300×600. Creating all five variants in Scenith takes minutes —
                simply duplicate your project and resize the canvas. The tool automatically scales
                your layer layout, and you can fine-tune each variant individually before exporting
                the full ad set.
              </p>
            </div>

            <div className="bm-content-block">
              <h3>Getting Started with Scenith Banner Maker</h3>
              <p>
                Click "Create Your Banner — Free" above to launch the editor. Choose a canvas preset
                or enter custom dimensions. Use the toolbar to add text, upload your logo, insert
                background images, and arrange shapes. Adjust colors and apply filters. When ready,
                hit Export and choose PNG, JPG, or PDF. Your file downloads instantly — clean,
                high-resolution, and ready to deploy anywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PEOPLE ALSO ASK ─── */}
      <section className="bm-paa-section">
        <div className="bm-container">
          <h2>People Also Ask About Online Banner Makers</h2>
          <div className="bm-paa-grid">
            {[
              {
                q: "What is the best free online banner maker?",
                a: "Scenith ranks among the best free banner makers because it offers true layer-based editing (not just template swapping), zero watermarks, unlimited projects, transparent PNG export, and PDF support — all free. Other top options include Canva (with limitations on free tier) and Adobe Express (limited features on free plan).",
              },
              {
                q: "How do I make a banner for my website for free?",
                a: "Use Scenith's free online banner maker: open the editor, select a canvas size like 728×90 for a leaderboard or 1200×400 for a hero banner, add your logo and headline text, choose your brand colors, and export as PNG. The entire process takes under 5 minutes and requires no design experience.",
              },
              {
                q: "What size should a Facebook cover photo banner be?",
                a: "Facebook's recommended cover photo size is 820×312 pixels for desktop. However, on mobile it displays at 640×360 pixels. To avoid cropping, keep important content within the center safe zone (820×312 with 25px padding on all sides). Scenith has this preset built in.",
              },
              {
                q: "Can I make a banner without Photoshop?",
                a: "Yes. Scenith provides professional banner-making capabilities without requiring Photoshop or any other software. Features like layers, opacity control, image filters, custom fonts, and high-resolution export are all available for free directly in your browser.",
              },
            ].map((item) => (
              <div key={item.q} className="bm-paa-item">
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="bm-final-cta">
        <div className="bm-container">
          <motion.div
            className="bm-final-cta-box"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Create Your First Banner in Under 5 Minutes</h2>
            <p>
              Join 250,000+ creators who use Scenith to design professional banners free — no
              watermarks, no subscriptions, no limits.
            </p>
            <a href={CTA_URL} className="bm-cta-primary large">
              🎨 Start Making Banners — It's Free
            </a>
            <p className="bm-final-note">
              No credit card · No watermark · Export PNG, JPG & PDF free
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BannerMakerOnlineClient;