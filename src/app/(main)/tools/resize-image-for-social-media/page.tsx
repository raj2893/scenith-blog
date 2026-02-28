import type { Metadata } from "next";
import "../../../../../styles/tools/ResizeImage.css";

export const metadata: Metadata = {
  title: "Resize Image for Social Media Free Online | Instagram, YouTube, Facebook",
  description:
    "Free online image resizer for social media. Resize images to perfect dimensions for Instagram (1080x1080), YouTube (1920x1080), Facebook, TikTok, LinkedIn & more. No watermarks.",
  keywords: [
    "resize image for social media",
    "image resizer online free",
    "resize image for instagram",
    "resize image for youtube thumbnail",
    "resize image for facebook",
    "social media image resizer",
    "free image resizer no watermark",
    "resize photo online",
    "image size converter",
    "resize image without losing quality",
  ],
  alternates: {
    canonical: "https://scenith.in/tools/resize-image-for-social-media",
  },
  openGraph: {
    title: "Resize Image for Social Media Free Online | Scenith",
    description:
      "Instantly resize images for Instagram, YouTube, Facebook, TikTok, and LinkedIn. Perfect dimensions every time — free, no watermark.",
    url: "https://scenith.in/tools/resize-image-for-social-media",
    siteName: "Scenith",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resize Image for Social Media Free — Scenith",
    description:
      "Perfect social media image dimensions in one click. Resize for Instagram, YouTube, Facebook, TikTok & LinkedIn — free forever.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function ResizeImageForSocialMediaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://scenith.in/tools/resize-image-for-social-media",
        url: "https://scenith.in/tools/resize-image-for-social-media",
        name: "Resize Image for Social Media Free Online",
        description:
          "Free online tool to resize images for every major social media platform including Instagram, YouTube, Facebook, TikTok, and LinkedIn.",
        isPartOf: { "@id": "https://scenith.in" },
        breadcrumb: { "@id": "https://scenith.in/tools/resize-image-for-social-media#breadcrumb" },
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://scenith.in/tools/resize-image-for-social-media#breadcrumb",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://scenith.in" },
          { "@type": "ListItem", position: 2, name: "Tools", item: "https://scenith.in/tools" },
          {
            "@type": "ListItem",
            position: 3,
            name: "Resize Image for Social Media",
            item: "https://scenith.in/tools/resize-image-for-social-media",
          },
        ],
      },
      {
        "@type": "SoftwareApplication",
        name: "Scenith Social Media Image Resizer",
        applicationCategory: "DesignApplication",
        operatingSystem: "Web Browser",
        url: "https://scenith.in/tools/image-editing",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        featureList: [
          "Resize images for Instagram, YouTube, Facebook, TikTok, LinkedIn",
          "No watermarks on exported images",
          "Layer-based canvas editor",
          "Custom dimensions support",
          "Export as PNG, JPG, PDF",
          "Cloud project saving",
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is the best image size for Instagram posts?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The recommended image size for Instagram posts is 1080x1080 pixels for square posts, 1080x1350 pixels for portrait posts, and 1080x566 pixels for landscape posts.",
            },
          },
          {
            "@type": "Question",
            name: "What size should a YouTube thumbnail be?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "YouTube recommends a thumbnail size of 1280x720 pixels (16:9 aspect ratio), with a minimum width of 640 pixels. The maximum file size is 2MB.",
            },
          },
          {
            "@type": "Question",
            name: "How do I resize an image for social media without losing quality?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "To resize an image without losing quality, use a vector-based or high-resolution source image, export as PNG for graphics or JPG at 90%+ quality for photos, and never upscale a low-res image. Scenith's image editor lets you set exact pixel dimensions and export at full quality.",
            },
          },
          {
            "@type": "Question",
            name: "What is the correct image size for Facebook cover photo?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The Facebook cover photo size is 820x312 pixels for desktop and 640x360 pixels for mobile. Facebook recommends using 820x462 pixels to ensure it looks good on both.",
            },
          },
          {
            "@type": "Question",
            name: "Can I resize images for social media for free?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Scenith's free online image editor lets you resize and export images for any social media platform at no cost and with no watermarks.",
            },
          },
        ],
      },
    ],
  };

  const platformSizes = [
    {
      platform: "Instagram",
      emoji: "📸",
      color: "#E1306C",
      sizes: [
        { label: "Square Post", dimensions: "1080 × 1080px", ratio: "1:1", use: "Feed posts" },
        { label: "Portrait Post", dimensions: "1080 × 1350px", ratio: "4:5", use: "Feed posts (max area)" },
        { label: "Story / Reel", dimensions: "1080 × 1920px", ratio: "9:16", use: "Stories & Reels" },
        { label: "Landscape Post", dimensions: "1080 × 566px", ratio: "1.91:1", use: "Wide feed posts" },
        { label: "Profile Picture", dimensions: "320 × 320px", ratio: "1:1", use: "Profile" },
      ],
    },
    {
      platform: "YouTube",
      emoji: "▶️",
      color: "#FF0000",
      sizes: [
        { label: "Thumbnail", dimensions: "1280 × 720px", ratio: "16:9", use: "Video thumbnails" },
        { label: "Channel Art", dimensions: "2560 × 1440px", ratio: "16:9", use: "Channel banner" },
        { label: "Profile Picture", dimensions: "800 × 800px", ratio: "1:1", use: "Channel icon" },
        { label: "End Screen", dimensions: "1920 × 1080px", ratio: "16:9", use: "End screen elements" },
      ],
    },
    {
      platform: "Facebook",
      emoji: "👥",
      color: "#1877F2",
      sizes: [
        { label: "Post Image", dimensions: "1200 × 630px", ratio: "1.91:1", use: "Feed posts" },
        { label: "Cover Photo", dimensions: "820 × 312px", ratio: "2.63:1", use: "Profile cover" },
        { label: "Story", dimensions: "1080 × 1920px", ratio: "9:16", use: "Stories" },
        { label: "Ad Image", dimensions: "1200 × 628px", ratio: "1.91:1", use: "Facebook Ads" },
        { label: "Profile Picture", dimensions: "170 × 170px", ratio: "1:1", use: "Profile" },
      ],
    },
    {
      platform: "TikTok",
      emoji: "🎵",
      color: "#010101",
      sizes: [
        { label: "Video Cover", dimensions: "1080 × 1920px", ratio: "9:16", use: "Video thumbnail" },
        { label: "Profile Picture", dimensions: "200 × 200px", ratio: "1:1", use: "Profile" },
        { label: "In-Feed Ad", dimensions: "1080 × 1920px", ratio: "9:16", use: "Ads" },
        { label: "Spark Ad", dimensions: "1080 × 1080px", ratio: "1:1", use: "Square ads" },
      ],
    },
    {
      platform: "LinkedIn",
      emoji: "💼",
      color: "#0A66C2",
      sizes: [
        { label: "Post Image", dimensions: "1200 × 627px", ratio: "1.91:1", use: "Feed posts" },
        { label: "Profile Banner", dimensions: "1584 × 396px", ratio: "4:1", use: "Profile background" },
        { label: "Company Logo", dimensions: "300 × 300px", ratio: "1:1", use: "Company page" },
        { label: "Company Banner", dimensions: "1128 × 191px", ratio: "5.9:1", use: "Company cover" },
      ],
    },
    {
      platform: "Twitter / X",
      emoji: "𝕏",
      color: "#000000",
      sizes: [
        { label: "Post Image", dimensions: "1200 × 675px", ratio: "16:9", use: "Tweets" },
        { label: "Header Photo", dimensions: "1500 × 500px", ratio: "3:1", use: "Profile header" },
        { label: "Profile Picture", dimensions: "400 × 400px", ratio: "1:1", use: "Profile" },
        { label: "Card Image", dimensions: "1200 × 628px", ratio: "1.91:1", use: "Twitter Cards" },
      ],
    },
    {
      platform: "Pinterest",
      emoji: "📌",
      color: "#E60023",
      sizes: [
        { label: "Standard Pin", dimensions: "1000 × 1500px", ratio: "2:3", use: "Standard pins" },
        { label: "Square Pin", dimensions: "1000 × 1000px", ratio: "1:1", use: "Square pins" },
        { label: "Long Pin", dimensions: "1000 × 2100px", ratio: "1:2.1", use: "Infographic pins" },
        { label: "Story Pin", dimensions: "1080 × 1920px", ratio: "9:16", use: "Story pins" },
      ],
    },
    {
      platform: "Snapchat",
      emoji: "👻",
      color: "#FFFC00",
      sizes: [
        { label: "Snap Ad", dimensions: "1080 × 1920px", ratio: "9:16", use: "Full-screen ads" },
        { label: "Story", dimensions: "1080 × 1920px", ratio: "9:16", use: "Stories" },
        { label: "Geofilter", dimensions: "1080 × 2340px", ratio: "—", use: "Geofilters" },
      ],
    },
  ];

  const comparisonData = [
    { feature: "No Watermark", scenith: true, canvaFree: true, photopea: false, onlineResizeIo: true },
    { feature: "Layer-Based Editor", scenith: true, canvaFree: false, photopea: true, onlineResizeIo: false },
    { feature: "Custom Dimensions", scenith: true, canvaFree: true, photopea: true, onlineResizeIo: true },
    { feature: "Add Text & Graphics", scenith: true, canvaFree: true, photopea: true, onlineResizeIo: false },
    { feature: "Export PNG/JPG/PDF", scenith: true, canvaFree: false, photopea: true, onlineResizeIo: false },
    { feature: "Cloud Project Saving", scenith: true, canvaFree: false, photopea: false, onlineResizeIo: false },
    { feature: "Social Media Presets", scenith: true, canvaFree: true, photopea: false, onlineResizeIo: true },
    { feature: "100% Free", scenith: true, canvaFree: false, photopea: false, onlineResizeIo: true },
  ];

  const faqs = [
    {
      q: "What is the best image size for Instagram posts?",
      a: "The recommended image size for Instagram posts is 1080×1080px for square, 1080×1350px for portrait (maximum feed space), and 1080×566px for landscape. Stories and Reels use 1080×1920px.",
    },
    {
      q: "What size should a YouTube thumbnail be?",
      a: "YouTube recommends 1280×720px (16:9 aspect ratio) for thumbnails. Minimum width is 640px and file size must be under 2MB. Use JPG, PNG, GIF, or BMP format.",
    },
    {
      q: "How do I resize an image for social media without losing quality?",
      a: "Start with a high-resolution source image, set exact pixel dimensions in Scenith's canvas editor, and export as PNG for graphics/logos or JPG at high quality for photos. Avoid upscaling small images.",
    },
    {
      q: "What is the correct Facebook cover photo size?",
      a: "Facebook cover photos display at 820×312px on desktop and 640×360px on mobile. Facebook recommends 820×462px to ensure it looks great on both. Keep important content centered.",
    },
    {
      q: "Can I resize images for social media for free?",
      a: "Yes. Scenith's free online image editor lets you create canvases at any social media dimension, add your images, and export without watermarks — completely free, no subscription needed.",
    },
    {
      q: "What image size works for all social media platforms?",
      a: "There is no single universal size, but 1200×628px (1.91:1 ratio) works reasonably across Facebook, LinkedIn, and Twitter. For the best results, create platform-specific versions using social media presets.",
    },
    {
      q: "How do I resize an image for LinkedIn?",
      a: "LinkedIn post images look best at 1200×627px. For profile banners use 1584×396px, and for company logos use 300×300px. Scenith provides all these as canvas presets.",
    },
    {
      q: "What is the TikTok video cover image size?",
      a: "TikTok video covers and in-feed ads use 1080×1920px (9:16 aspect ratio). Profile pictures display at 200×200px. Keep key visuals in the center to avoid cropping.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Open Scenith Image Editor",
      description:
        "Click the button below to open the free online editor. No download, no installation — it runs entirely in your browser on any device.",
    },
    {
      number: "02",
      title: "Choose Your Platform Preset",
      description:
        "Select a preset canvas size for your target platform — Instagram post, YouTube thumbnail, Facebook cover, LinkedIn banner, and more. Or enter custom pixel dimensions.",
    },
    {
      number: "03",
      title: "Upload & Edit Your Image",
      description:
        "Upload your photo or graphic. Drag to reposition, resize handles to fit, add text overlays, shapes, and apply filters to polish your design.",
    },
    {
      number: "04",
      title: "Export & Publish",
      description:
        "Export as PNG (with transparency), JPG (for photos), or PDF. Download instantly with zero watermarks. Upload directly to your chosen social media platform.",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="rism-page">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="rism-breadcrumb">
          <ol itemScope itemType="https://schema.org/BreadcrumbList">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <a href="/" itemProp="item"><span itemProp="name">Home</span></a>
              <meta itemProp="position" content="1" />
            </li>
            <span aria-hidden="true"> / </span>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <a href="/tools" itemProp="item"><span itemProp="name">Tools</span></a>
              <meta itemProp="position" content="2" />
            </li>
            <span aria-hidden="true"> / </span>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span itemProp="name">Resize Image for Social Media</span>
              <meta itemProp="position" content="3" />
            </li>
          </ol>
        </nav>

        {/* HERO */}
        <section className="rism-hero" aria-labelledby="rism-hero-title">
          <div className="rism-hero-bg-grid" aria-hidden="true" />
          <div className="rism-container">
            <div className="rism-hero-badge">🚀 Free · No Watermark · No Download Required</div>
            <h1 id="rism-hero-title" className="rism-hero-title">
              Resize Images for Social Media —{" "}
              <span className="rism-hero-gradient">Free Online Tool</span>
            </h1>
            <p className="rism-hero-subtitle">
              Perfect pixel dimensions for <strong>Instagram</strong>, <strong>YouTube</strong>,{" "}
              <strong>Facebook</strong>, <strong>TikTok</strong>, <strong>LinkedIn</strong> and more.
              Upload, resize, add text and effects — export without watermarks in seconds.
            </p>

            {/* Featured Snippet Target */}
            <div className="rism-definition-box" role="note" aria-label="Quick definition">
              <p>
                <strong>Resizing an image for social media</strong> means adjusting its pixel
                dimensions to match the exact requirements of a platform — for example, 1080×1080px
                for Instagram posts or 1280×720px for YouTube thumbnails — so it appears sharp, fully
                visible, and correctly proportioned without cropping or compression artifacts.
              </p>
            </div>

            
            <a href="https://scenith.in/tools/image-editing?utm_source=resize-social-media&utm_medium=cta-hero&utm_campaign=social-media-resizer"
              className="rism-cta-primary"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Scenith Image Editor to resize images for social media"
            >
              <span className="rism-cta-icon">🎨</span>
              Resize Image for Free — Open Editor
              <span className="rism-cta-arrow">→</span>
            </a>
          </div>
        </section>

        {/* WHAT & WHY — Featured Snippet Bait */}
        <section className="rism-intro-section rism-container" aria-labelledby="rism-intro-title">
          <div className="rism-intro-grid">
            <div className="rism-intro-text">
              <h2 id="rism-intro-title">Why Image Size Matters for Social Media</h2>
              <p>
                Every social media platform processes uploaded images differently. When you upload
                an image that doesn't match the platform's recommended dimensions, the platform's
                algorithm automatically crops, compresses, or stretches it — resulting in blurry
                visuals, awkward cropping, or important elements getting cut off.
              </p>
              <p>
                Using the <strong>correct image dimensions for social media</strong> directly impacts
                engagement. Studies consistently show that correctly-sized images receive higher
                click-through rates, more shares, and better organic reach because they display
                crisply in both mobile and desktop feeds without triggering the platform's automatic
                re-compression.
              </p>
              <p>
                For brands and content creators, maintaining proper image sizing is a fundamental
                part of visual consistency — and visual consistency is one of the strongest drivers
                of brand recognition across social channels.
              </p>
            </div>
            <div className="rism-intro-stats">
              <div className="rism-stat-pill">
                <span className="rism-stat-num">94%</span>
                <span className="rism-stat-label">higher views for correctly sized social images</span>
              </div>
              <div className="rism-stat-pill">
                <span className="rism-stat-num">8+</span>
                <span className="rism-stat-label">platforms, each with unique size requirements</span>
              </div>
              <div className="rism-stat-pill">
                <span className="rism-stat-num">3×</span>
                <span className="rism-stat-label">faster workflow with built-in platform presets</span>
              </div>
              <div className="rism-stat-pill">
                <span className="rism-stat-num">0</span>
                <span className="rism-stat-label">watermarks, 0 cost, 0 downloads required</span>
              </div>
            </div>
          </div>
        </section>

        {/* HOW TO — Steps */}
        <section className="rism-steps-section" aria-labelledby="rism-steps-title">
          <div className="rism-container">
            <h2 id="rism-steps-title" className="rism-section-title">
              How to Resize an Image for Social Media in 4 Steps
            </h2>
            <p className="rism-section-subtitle">
              From raw photo to perfectly-sized social post in under 2 minutes
            </p>
            <div className="rism-steps-grid">
              {steps.map((step) => (
                <div key={step.number} className="rism-step-card">
                  <div className="rism-step-number">{step.number}</div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
            <div className="rism-steps-cta">
              
            <a    href="https://scenith.in/tools/image-editing?utm_source=resize-social-media&utm_medium=cta-steps&utm_campaign=social-media-resizer"
                className="rism-cta-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="rism-cta-icon">✂️</span>
                Start Resizing Now — It's Free
                <span className="rism-cta-arrow">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* PLATFORM SIZE REFERENCE TABLE — Core SEO Content */}
        <section className="rism-sizes-section" aria-labelledby="rism-sizes-title">
          <div className="rism-container">
            <h2 id="rism-sizes-title" className="rism-section-title">
              Social Media Image Sizes — Complete Reference Guide (2025)
            </h2>
            <p className="rism-section-subtitle">
              Updated for 2025. Bookmark this page as your go-to reference for correct image
              dimensions across every major social media platform.
            </p>

            {platformSizes.map((platform) => (
              <div key={platform.platform} className="rism-platform-block">
                <div
                  className="rism-platform-header"
                  style={{ borderLeftColor: platform.color }}
                >
                  <span className="rism-platform-emoji" aria-hidden="true">
                    {platform.emoji}
                  </span>
                  <h3>{platform.platform} Image Sizes</h3>
                </div>
                <div className="rism-table-wrapper">
                  <table className="rism-size-table" aria-label={`${platform.platform} image sizes`}>
                    <thead>
                      <tr>
                        <th scope="col">Image Type</th>
                        <th scope="col">Dimensions</th>
                        <th scope="col">Aspect Ratio</th>
                        <th scope="col">Best Used For</th>
                      </tr>
                    </thead>
                    <tbody>
                      {platform.sizes.map((size) => (
                        <tr key={size.label}>
                          <td data-label="Image Type">{size.label}</td>
                          <td data-label="Dimensions">
                            <strong>{size.dimensions}</strong>
                          </td>
                          <td data-label="Aspect Ratio">
                            <span className="rism-ratio-badge">{size.ratio}</span>
                          </td>
                          <td data-label="Best Used For">{size.use}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <a  href={`https://scenith.in/tools/image-editing?utm_source=resize-social-media&utm_medium=platform-link&utm_campaign=${platform.platform.toLowerCase()}-resize`}
                  className="rism-platform-cta"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resize for {platform.platform} →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* TIPS & BEST PRACTICES — Depth Content */}
        <section className="rism-tips-section" aria-labelledby="rism-tips-title">
          <div className="rism-container">
            <h2 id="rism-tips-title" className="rism-section-title">
              Image Resizing Best Practices for Social Media
            </h2>
            <p className="rism-section-subtitle">
              Expert tips to ensure your resized images always look sharp and professional
            </p>
            <div className="rism-tips-grid">
              <div className="rism-tip-card">
                <div className="rism-tip-icon">📐</div>
                <h3>Always Start with the Largest Version</h3>
                <p>
                  When resizing images, always scale <em>down</em> rather than up. Enlarging a
                  small image introduces pixelation and blurriness that can't be recovered.
                  Start with the highest resolution version of your image and resize to the target
                  dimensions.
                </p>
              </div>
              <div className="rism-tip-card">
                <div className="rism-tip-icon">🎯</div>
                <h3>Keep Safe Zones in Mind</h3>
                <p>
                  Most platforms crop or overlay UI elements (buttons, usernames, captions) over
                  the edges of your image. Keep critical content — faces, product shots, calls to
                  action — within the central 80% of the canvas to prevent cropping on any device.
                </p>
              </div>
              <div className="rism-tip-card">
                <div className="rism-tip-icon">🖼️</div>
                <h3>Use PNG for Graphics, JPG for Photos</h3>
                <p>
                  PNG format preserves sharp edges on text and logos with lossless compression —
                  ideal for designed graphics. JPG works better for photographs where slight
                  compression isn't noticeable. Never save a logo or text-heavy graphic as JPG as
                  it introduces visible artifacts.
                </p>
              </div>
              <div className="rism-tip-card">
                <div className="rism-tip-icon">⚡</div>
                <h3>Match File Size Requirements</h3>
                <p>
                  Platforms enforce maximum file sizes: Instagram recommends under 8MB, YouTube
                  thumbnails cap at 2MB, and Facebook ad images should stay under 30MB. Export at
                  the correct compression level — Scenith's editor handles this automatically
                  when you select your export format.
                </p>
              </div>
              <div className="rism-tip-card">
                <div className="rism-tip-icon">📱</div>
                <h3>Preview on Mobile Before Publishing</h3>
                <p>
                  Over 80% of social media consumption happens on mobile. After resizing, always
                  preview your image on a smartphone screen before publishing. Pay attention to
                  text legibility — font sizes that look fine on desktop often appear too small
                  on mobile.
                </p>
              </div>
              <div className="rism-tip-card">
                <div className="rism-tip-icon">🎨</div>
                <h3>Maintain Visual Consistency Across Platforms</h3>
                <p>
                  When creating multiple versions of the same image for different platforms,
                  maintain consistent branding: same color palette, fonts, and overall visual
                  style. Scenith lets you duplicate your project and quickly adjust canvas
                  dimensions while keeping all design elements intact.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* COMPARISON TABLE */}
        <section className="rism-comparison-section" aria-labelledby="rism-comparison-title">
          <div className="rism-container">
            <h2 id="rism-comparison-title" className="rism-section-title">
              Best Free Tools to Resize Images for Social Media — Compared
            </h2>
            <p className="rism-section-subtitle">
              How Scenith stacks up against other popular image resizing tools
            </p>
            <div className="rism-comparison-wrapper">
              <table className="rism-comparison-table" aria-label="Image resizer tool comparison">
                <thead>
                  <tr>
                    <th scope="col">Feature</th>
                    <th scope="col" className="rism-col-scenith">Scenith ✦</th>
                    <th scope="col">Canva Free</th>
                    <th scope="col">Photopea</th>
                    <th scope="col">resize.io</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row) => (
                    <tr key={row.feature}>
                      <td>{row.feature}</td>
                      <td className="rism-col-scenith">
                        <span className={row.scenith ? "rism-check" : "rism-cross"}>
                          {row.scenith ? "✓" : "✗"}
                        </span>
                      </td>
                      <td>
                        <span className={row.canvaFree ? "rism-check" : "rism-cross"}>
                          {row.canvaFree ? "✓" : "✗"}
                        </span>
                      </td>
                      <td>
                        <span className={row.photopea ? "rism-check" : "rism-cross"}>
                          {row.photopea ? "✓" : "✗"}
                        </span>
                      </td>
                      <td>
                        <span className={row.onlineResizeIo ? "rism-check" : "rism-cross"}>
                          {row.onlineResizeIo ? "✓" : "✗"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="rism-comparison-note">
              Unlike simple crop-and-export resizers, Scenith is a full canvas editor — meaning you
              can resize your canvas, reposition image layers to fill the new dimensions correctly,
              add platform-specific text overlays, and export at publication quality, all in one
              workflow.
            </p>
          </div>
        </section>

        {/* PLATFORM-SPECIFIC DEEP DIVE COPY */}
        <section className="rism-deepdive-section" aria-labelledby="rism-deepdive-title">
          <div className="rism-container">
            <h2 id="rism-deepdive-title" className="rism-section-title">
              Platform-Specific Image Resizing Guides
            </h2>

            <div className="rism-deepdive-grid">
              <article className="rism-deepdive-card">
                <h3>How to Resize Images for Instagram</h3>
                <p>
                  Instagram supports three primary aspect ratios in the feed: square (1:1), portrait
                  (4:5), and landscape (1.91:1). The portrait format (1080×1350px) gives your post
                  the most screen real estate in the feed, making it the highest-performing format
                  for most content types.
                </p>
                <p>
                  For Instagram Stories and Reels, use 1080×1920px (9:16). Keep text and key visuals
                  within the central 1080×1420px area to avoid the UI overlay zones at the top and
                  bottom. Scenith's canvas presets include all Instagram formats.
                </p>
              </article>

              <article className="rism-deepdive-card">
                <h3>How to Resize YouTube Thumbnail Images</h3>
                <p>
                  YouTube thumbnails are one of the highest-impact image types in digital content —
                  a well-designed thumbnail can increase click-through rate by 30% or more. Use
                  1280×720px (16:9) at a minimum, though many creators now work at 1920×1080px for
                  future-proofing.
                </p>
                <p>
                  YouTube automatically compresses thumbnails aggressively, so export as JPG at
                  maximum quality or PNG and keep file size under 2MB. Bold, high-contrast text
                  and faces in close-up consistently outperform other thumbnail styles.
                </p>
              </article>

              <article className="rism-deepdive-card">
                <h3>How to Resize Facebook Post & Ad Images</h3>
                <p>
                  Facebook's algorithm gives more organic reach to posts with correctly-sized images.
                  The recommended dimensions for feed posts is 1200×630px. For Facebook Ads,
                  1200×628px is standard, and text should cover no more than 20% of the image area
                  to avoid ad delivery penalties.
                </p>
                <p>
                  Facebook cover photos display differently on mobile vs desktop — design at
                  820×462px and keep important content in the central 640×360px area to ensure it
                  displays correctly across all devices.
                </p>
              </article>

              <article className="rism-deepdive-card">
                <h3>How to Resize Images for LinkedIn</h3>
                <p>
                  LinkedIn is a professional network where image quality directly impacts perceived
                  credibility. Use 1200×627px for post images (1.91:1 aspect ratio). LinkedIn
                  compresses images less aggressively than other platforms, so a high-quality PNG
                  or JPG will render noticeably sharper than on Instagram or Facebook.
                </p>
                <p>
                  For LinkedIn company page banners, 1128×191px is the required size. Personal
                  profile banners display at 1584×396px. Always test how your banner looks on both
                  mobile (which shows a narrower crop) and desktop.
                </p>
              </article>

              <article className="rism-deepdive-card">
                <h3>How to Resize Images for TikTok</h3>
                <p>
                  TikTok is a vertical-first platform — almost all content is consumed in 9:16
                  format on mobile screens. Video cover images and in-feed ads should be 1080×1920px.
                  Keep critical content within the central safe zone (approximately 1080×1540px)
                  to avoid TikTok's UI overlay elements.
                </p>
                <p>
                  For TikTok profile pictures, the image displays in a circle at 200×200px, so
                  center your subject and avoid edge details. TikTok compresses profile pictures
                  significantly, so start with a crisp, high-contrast image.
                </p>
              </article>

              <article className="rism-deepdive-card">
                <h3>How to Resize Pinterest Pin Images</h3>
                <p>
                  Pinterest is the platform where image dimensions most directly affect discovery.
                  Taller pins (2:3 ratio at 1000×1500px) take up more feed space and consistently
                  get more saves and clicks than square or short pins. Infographic-style "long pins"
                  can go up to 1:2.1 (1000×2100px).
                </p>
                <p>
                  Pinterest recommends keeping pins under 1:3.5 ratio as extremely long pins may
                  be truncated. Always add descriptive text overlays to Pinterest images — pins with
                  text explaining the content get significantly higher engagement than image-only pins.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* MIDDLE CTA */}
        <section className="rism-mid-cta-section" aria-labelledby="rism-mid-cta-title">
          <div className="rism-container">
            <div className="rism-mid-cta-card">
              <div className="rism-mid-cta-content">
                <h2 id="rism-mid-cta-title">Stop Guessing — Get Pixel-Perfect Every Time</h2>
                <p>
                  Scenith's free image editor has built-in presets for every platform listed above.
                  Select a canvas size, drop in your image, adjust, and export — no math required.
                </p>
                <ul className="rism-mid-cta-benefits" aria-label="Key benefits">
                  <li>✅ Pre-built canvas sizes for Instagram, YouTube, Facebook, TikTok & more</li>
                  <li>✅ Layer-based editor — resize canvas without distorting your image</li>
                  <li>✅ Export as PNG, JPG, or PDF with zero watermarks</li>
                  <li>✅ Save projects to cloud and access from any device</li>
                  <li>✅ 100% free — no subscription, no hidden limits</li>
                </ul>
              </div>
              
            <a    href="https://scenith.in/tools/image-editing?utm_source=resize-social-media&utm_medium=cta-mid&utm_campaign=social-media-resizer"
                className="rism-cta-primary"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Scenith Image Editor for free social media image resizing"
              >
                <span className="rism-cta-icon">🚀</span>
                Open Free Image Editor
                <span className="rism-cta-arrow">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="rism-faq-section" aria-labelledby="rism-faq-title">
          <div className="rism-container">
            <h2 id="rism-faq-title" className="rism-section-title">
              Frequently Asked Questions: Social Media Image Sizes
            </h2>
            <div className="rism-faq-grid">
              {faqs.map((faq, i) => (
                <div key={i} className="rism-faq-item">
                  <h3>{faq.q}</h3>
                  <p>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RELATED TOOLS */}
        <section className="rism-related-section" aria-labelledby="rism-related-title">
          <div className="rism-container">
            <h2 id="rism-related-title" className="rism-section-title">
              More Free Image Tools by Scenith
            </h2>
            <div className="rism-related-grid">
              <a href="/tools/image-editing?utm_source=resize-social-media&utm_medium=related-tool&utm_campaign=image-editor"
                className="rism-related-card">
                <span className="rism-related-icon">🎨</span>
                <div>
                  <h3>Full Image Editor</h3>
                  <p>Layers, text, shapes, filters — complete design tool</p>
                </div>
              </a>
              <a href="/tools/background-removal?utm_source=resize-social-media&utm_medium=related-tool&utm_campaign=bg-removal"
                className="rism-related-card">
                <span className="rism-related-icon">✂️</span>
                <div>
                  <h3>AI Background Remover</h3>
                  <p>Remove image backgrounds instantly with AI</p>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="rism-final-cta-section" aria-labelledby="rism-final-cta-title">
          <div className="rism-container">
            <h2 id="rism-final-cta-title">Ready to Resize Your Images?</h2>
            <p>
              Correct dimensions. Zero watermarks. No downloads. Completely free.
            </p>
            
            <a  href="https://scenith.in/tools/image-editing?utm_source=resize-social-media&utm_medium=cta-final&utm_campaign=social-media-resizer"
              className="rism-cta-primary rism-cta-large"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Scenith Image Editor to resize social media images for free"
            >
              <span className="rism-cta-icon">🎨</span>
              Resize Images for Free — Open Scenith Editor
              <span className="rism-cta-arrow">→</span>
            </a>
            <p className="rism-cta-sub">
              Trusted by 250,000+ creators · No credit card · No watermark
            </p>
          </div>
        </section>

        {/* DEEP SEO PROSE */}
        <section className="rism-seo-prose-section" aria-labelledby="rism-seo-prose-title">
          <div className="rism-container">
            <div className="rism-seo-prose">
              <h2 id="rism-seo-prose-title">
                The Complete Guide to Social Media Image Sizes and Resizing
              </h2>

              <h3>What Does "Resize Image for Social Media" Mean?</h3>
              <p>
                When people search for how to resize images for social media, they're usually
                dealing with one of two problems: their image is being cropped in unexpected places,
                or it's appearing blurry after upload. Both problems share the same root cause —
                the image dimensions don't match what the platform expects.
              </p>
              <p>
                Resizing an image for social media means changing its pixel dimensions to match a
                platform's specifications. This is different from simply compressing a file (reducing
                file size) or cropping (cutting away parts of the image). True resizing means
                adjusting the canvas or image dimensions to an exact width and height in pixels while
                maintaining the content's visual integrity.
              </p>

              <h3>Why Every Social Platform Has Different Image Requirements</h3>
              <p>
                The reason social media platforms have different image dimension requirements comes
                down to screen real estate and user experience design. Instagram's mobile-first
                design favors square and portrait content. YouTube's widescreen player is built for
                16:9 content. Pinterest's vertical feed is designed for tall, scrollable pins.
                LinkedIn's professional interface is optimized for landscape business content.
              </p>
              <p>
                Each platform also applies different levels of image compression on upload. YouTube
                and LinkedIn tend to preserve image quality better than Instagram and Facebook, which
                means you can sometimes get away with slightly lower-quality source images on those
                platforms. However, the best practice is always to upload the highest quality image
                at the correct dimensions.
              </p>

              <h3>The Difference Between Resizing, Cropping, and Compressing</h3>
              <p>
                These three terms are often confused but refer to fundamentally different operations.
                Resizing changes the pixel dimensions of an image — making it larger or smaller while
                attempting to preserve all content. Cropping removes parts of the image to achieve a
                different aspect ratio or composition. Compression reduces file size by discarding
                pixel data, which can degrade quality. When you resize an image for social media,
                you typically need a combination of cropping (to match the aspect ratio) and
                resizing (to hit the exact pixel dimensions), while exporting at an appropriate
                compression level.
              </p>

              <h3>How to Resize Images for Social Media Without Losing Quality</h3>
              <p>
                The key to maintaining quality when resizing images is to always work from the
                highest-resolution source file available. When you open a 4000×3000px photograph and
                resize it to 1080×1080px for Instagram, you're downsampling — reducing resolution —
                which the software handles by averaging nearby pixel values. This process preserves
                quality well. The reverse operation (upsampling, or enlarging) introduces blurriness
                because the software has to invent pixel data that wasn't in the original.
              </p>
              <p>
                Using a proper canvas-based editor like Scenith (rather than a simple online
                resizer) gives you the advantage of being able to reposition your image layer within
                the new canvas dimensions, ensuring the most important parts of your image remain
                visible and well-composed after the resize.
              </p>

              <h3>Social Media Image Resizing for Businesses and Brands</h3>
              <p>
                For businesses managing multiple social channels, the challenge isn't just knowing
                the right dimensions — it's efficiently producing the same content in multiple
                formats without recreating it from scratch each time. A product launch graphic might
                need to be produced in 8 or more formats to cover all platforms and placements.
              </p>
              <p>
                Scenith's project-based workflow is designed for this use case. Create your master
                design at the largest required dimension, save it as a project, then duplicate it
                and adjust the canvas size for each platform variant. All layers remain editable, so
                you can reposition elements for each format without rebuilding the design.
              </p>

              <h3>The Future of Social Media Image Formats</h3>
              <p>
                Social media platforms are increasingly moving toward video-first formats, but
                static images remain the dominant content type for product showcases, quotes,
                infographics, and announcements. The rise of AI image generation is also changing
                how creators approach social media graphics — AI-generated images still need to be
                correctly sized and enhanced with text and branding before publishing, which is
                where tools like Scenith come in.
              </p>
              <p>
                As screen resolutions continue to increase (4K and 5K displays are now common on
                desktop), the quality bar for social media images will rise. Creating assets at
                higher base resolutions and scaling them down for each platform will become standard
                practice — making a high-quality, flexible image editor an essential part of any
                content creator's toolkit.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}