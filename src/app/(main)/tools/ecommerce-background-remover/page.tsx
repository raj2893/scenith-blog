import type { Metadata } from 'next';
import Link from 'next/link';
import '../../../../../styles/tools/EcommerceBackgroundRemover.css';

// ─────────────────────────────────────────────
// METADATA — full SEO + OpenGraph + structured data
// ─────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Free Ecommerce Background Remover — Remove Product Image Backgrounds Instantly | Scenith',
  description:
    'Remove backgrounds from ecommerce product images in one click. Get clean, white or transparent backgrounds that boost conversions on Amazon, Shopify, Flipkart, Meesho & more. 100% AI-powered, no design skills needed.',
  keywords: [
    'ecommerce background remover',
    'product image background remover',
    'remove background from product photo',
    'amazon product image background remover',
    'shopify product background removal',
    'white background product photo',
    'transparent background product image',
    'AI background remover ecommerce',
    'online background removal tool',
    'flipkart product image editor',
    'meesho image background remover',
    'product photography background removal',
    'ecommerce image editor free',
    'remove white background from product',
    'bulk product background remover',
  ],
  alternates: {
    canonical: 'https://scenith.in/tools/ecommerce-background-remover',
  },
  openGraph: {
    title: 'Free Ecommerce Background Remover — Remove Product Backgrounds Instantly | Scenith',
    description:
      'Transform your product photos in seconds. AI-powered background removal optimised for Amazon, Shopify, Flipkart, Meesho & every major marketplace. No design skills needed.',
    url: 'https://scenith.in/tools/ecommerce-background-remover',
    siteName: 'Scenith',
    images: [
      {
        url: 'https://scenith.in/og/ecommerce-background-remover.jpg',
        width: 1200,
        height: 630,
        alt: 'Ecommerce Background Remover — Scenith',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Ecommerce Background Remover | Scenith',
    description:
      'AI background removal for product images. Perfect for Amazon, Shopify & every marketplace. Try free.',
    images: ['https://scenith.in/og/ecommerce-background-remover.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
};

// ─────────────────────────────────────────────
// JSON-LD STRUCTURED DATA
// ─────────────────────────────────────────────
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Ecommerce Background Remover',
  url: 'https://scenith.in/tools/ecommerce-background-remover',
  applicationCategory: 'ImageEditorApplication',
  operatingSystem: 'Web',
  description:
    'AI-powered background removal tool built specifically for ecommerce sellers. Remove product image backgrounds in one click for Amazon, Shopify, Flipkart, Meesho and any online marketplace.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'INR',
  },
  provider: {
    '@type': 'Organization',
    name: 'Scenith',
    url: 'https://scenith.in',
  },
  featureList: [
    'AI-powered background removal',
    'White background for Amazon compliance',
    'Transparent PNG export',
    'Supports JPEG, PNG, WebP',
    'No design skills required',
    'Optimised for product photography',
  ],
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does Amazon require a white background for product images?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Amazon's main product image must have a pure white background (RGB 255, 255, 255) with the product occupying at least 85% of the image frame. Our ecommerce background remover automatically replaces any background with a clean white, keeping you compliant.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use this tool for Shopify product images?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. Shopify recommends 2048×2048 px square images with consistent backgrounds. Our tool removes backgrounds and lets you set white or transparent, which you can then place on any colour canvas in our image editor.',
      },
    },
    {
      '@type': 'Question',
      name: 'What image formats are supported?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We support JPEG, JPG, PNG and WebP input. Output is always a high-quality PNG with a transparent or white background — the standard for ecommerce marketplaces.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the ecommerce background remover free to use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Scenith's background remover is free to try. Free accounts include a credit balance on sign-up. Paid plans unlock bulk processing and higher-resolution exports for high-volume sellers.",
      },
    },
    {
      '@type': 'Question',
      name: 'How accurate is AI background removal for product photos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our AI is trained on millions of ecommerce product images and handles complex edges — jewellery, clothing, shoes, electronics, hair, fur, and transparent objects — with high precision. The result typically requires no manual touch-up.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I remove the background from clothing and apparel images?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Apparel is one of the most complex categories due to fabric edges, folds, and transparent mesh. Our model handles all of these accurately, making it ideal for fashion sellers on Myntra, Meesho, AJIO, and Shopify.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to install any software?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No installation required. The tool runs entirely in your browser. Upload your product image, click remove, and download the clean result — in under 10 seconds.',
      },
    },
  ],
};

// ─────────────────────────────────────────────
// STATIC DATA
// ─────────────────────────────────────────────
const platforms = [
  { name: 'Amazon', requirement: 'Pure white RGB 255,255,255 required on main image', icon: '🛒' },
  { name: 'Flipkart', requirement: 'White or light grey background, no props allowed', icon: '📦' },
  { name: 'Shopify', requirement: 'Consistent background across all products for brand trust', icon: '🏪' },
  { name: 'Meesho', requirement: 'Clean background, product clearly visible', icon: '🛍️' },
  { name: 'AJIO', requirement: 'White or neutral background for catalogue approval', icon: '👗' },
  { name: 'WooCommerce', requirement: 'Transparent PNG recommended for theme flexibility', icon: '🌐' },
  { name: 'Myntra', requirement: 'Ghost mannequin or flat-lay on white background', icon: '✨' },
  { name: 'Etsy', requirement: 'Clean background strongly boosts click-through rates', icon: '🎨' },
];

const productCategories = [
  {
    category: 'Electronics & Gadgets',
    icon: '💻',
    challenge: 'Reflective surfaces and complex edges',
    tip: 'Use PNG output for transparent backgrounds; layer on white in editor for Amazon compliance.',
  },
  {
    category: 'Clothing & Apparel',
    icon: '👕',
    challenge: 'Thin fabric edges, loose threads, sheer materials',
    tip: 'Ghost-mannequin shots respond best. AI handles fabric fray with high accuracy.',
  },
  {
    category: 'Jewellery & Accessories',
    icon: '💍',
    challenge: 'Fine chains, transparent gemstones, metallic shine',
    tip: 'Shoot on a non-reflective dark cloth; AI will separate intricate details cleanly.',
  },
  {
    category: 'Shoes & Footwear',
    icon: '👟',
    challenge: 'Shoelaces, rubber soles, shadow merging with background',
    tip: 'Side-angle shots give best AI accuracy. Shadows can be re-added in editor for premium look.',
  },
  {
    category: 'Beauty & Skincare',
    icon: '💄',
    challenge: 'Cylindrical packaging, glossy bottles, curved edges',
    tip: 'White or light grey original background gives cleanest AI result on cylindrical products.',
  },
  {
    category: 'Home & Kitchen',
    icon: '🍳',
    challenge: 'Multiple objects, utensils, complex shapes',
    tip: 'Group shots work well — AI handles multi-object frames with a single click.',
  },
];

const stats = [
  { value: '93%', label: 'of buyers say product images are the #1 factor in purchase decisions' },
  { value: '40%', label: 'higher conversion rate for products with clean white backgrounds vs cluttered photos' },
  { value: '2.3×', label: 'more clicks on products with consistent background styles in search results' },
  { value: '< 10s', label: 'average processing time per image with Scenith\'s AI engine' },
];

const steps = [
  {
    num: '01',
    title: 'Upload Your Product Photo',
    desc: 'Drag and drop or browse to upload any product image in JPG, PNG, or WebP format. No size limit fuss — we handle up to 25 MB per image.',
  },
  {
    num: '02',
    title: 'AI Removes the Background',
    desc: "Our deep-learning model analyses every pixel, detects the product boundary with sub-pixel accuracy, and removes the background in under 10 seconds. No manual masking. No Photoshop skills required.",
  },
  {
    num: '03',
    title: 'Download or Edit',
    desc: 'Download the transparent PNG directly, or open it in our built-in image editor to add a white, coloured, or custom background — then export in the exact dimensions your marketplace requires.',
  },
];

const comparisonData = [
  { feature: 'Speed per image', scenith: '< 10 seconds', manual: '10–30 minutes', others: '30–60 seconds' },
  { feature: 'Apparel accuracy', scenith: '★★★★★', manual: '★★★★★', others: '★★★☆☆' },
  { feature: 'Jewellery accuracy', scenith: '★★★★☆', manual: '★★★★★', others: '★★★☆☆' },
  { feature: 'White background export', scenith: '✓ Built-in editor', manual: 'Requires extra tool', others: '✓ (limited)' },
  { feature: 'Transparent PNG', scenith: '✓', manual: '✓', others: '✓' },
  { feature: 'Bulk processing', scenith: '✓ Paid plans', manual: '✗ Time-intensive', others: '✓ Paid plans' },
  { feature: 'No software install', scenith: '✓ Browser-based', manual: '✗ Photoshop needed', others: '✓' },
  { feature: 'Integrated image editor', scenith: '✓ Full editor', manual: '✓ (Photoshop)', others: '✗' },
  { feature: 'Free tier', scenith: '✓ Credits on sign-up', manual: 'Software cost', others: '✓ (watermarked)' },
  { feature: 'Indian marketplace focus', scenith: '✓ Amazon IN, Flipkart, Meesho', manual: '✓', others: '✗ Mostly global' },
];

const faqs = [
  {
    q: 'Does Amazon require a white background for product images?',
    a: "Yes. Amazon's main product image must have a pure white background (RGB 255, 255, 255) with the product occupying at least 85% of the image frame. Our ecommerce background remover automatically replaces any background with a clean white, keeping you fully compliant with Amazon's image policy.",
  },
  {
    q: 'Can I use this tool for Shopify product images?',
    a: 'Absolutely. Shopify recommends 2048×2048 px square images with consistent backgrounds across your product catalogue. Our tool removes the background and lets you apply a white or transparent canvas — which you can then fine-tune in our full image editor, export in the exact pixel dimensions Shopify expects.',
  },
  {
    q: 'What image formats are supported?',
    a: 'We accept JPEG, JPG, PNG and WebP as input. Output is always a high-quality PNG — which supports transparency natively and is the standard format for ecommerce marketplace uploads worldwide.',
  },
  {
    q: 'Is the ecommerce background remover free to use?',
    a: "Scenith's background remover is free to try. Every new account receives a credit balance at sign-up — no credit card required. Free credits are enough to process several product images so you can evaluate quality before upgrading. Paid plans unlock bulk processing, higher-resolution exports, and priority processing queues for high-volume sellers.",
  },
  {
    q: 'How accurate is AI background removal for product photos?',
    a: 'Our AI model is trained on millions of ecommerce product images and handles complex edges — jewellery chains, clothing folds, shoe laces, hair, fur, transparent objects, and reflective surfaces — with high precision. Results typically require no manual touch-up, saving sellers 10–30 minutes of Photoshop work per image.',
  },
  {
    q: 'Can I remove the background from clothing and apparel images?',
    a: "Yes. Apparel is one of the most technically challenging categories due to fabric edges, loose threads, and transparent mesh fabrics. Our model handles all of these with high accuracy, making it particularly well-suited for fashion sellers on Myntra, Meesho, AJIO, Nykaa Fashion, and Shopify stores.",
  },
  {
    q: 'Do I need to install any software?',
    a: 'No installation required. Everything runs in your browser — Windows, Mac, Linux, or even a tablet. Upload your product image, click remove background, and download the result. The whole process takes under 30 seconds from upload to download.',
  },
  {
    q: "What's the difference between transparent and white background export?",
    a: 'A transparent PNG has no background layer — useful if you plan to place the product on a custom background in your own design tool, or if your website theme handles backgrounds dynamically. A white background PNG is ready for immediate upload to Amazon, Flipkart, or any marketplace that requires solid white backgrounds. We support both export modes.',
  },
];

// ─────────────────────────────────────────────
// PAGE COMPONENT
// ─────────────────────────────────────────────
export default function EcommerceBackgroundRemoverPage() {
  const CTALink =
    'https://scenith.in/tools/background-removal?utm_source=ecommerce-background-remover&utm_medium=cta&utm_campaign=tool-page';

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main className="ebr-page">
        {/* ── HERO ──────────────────────────────────────── */}
        <section className="ebr-hero" aria-labelledby="hero-heading">
          <div className="ebr-hero__bg-grid" aria-hidden="true" />
          <div className="ebr-hero__orb ebr-hero__orb--1" aria-hidden="true" />
          <div className="ebr-hero__orb ebr-hero__orb--2" aria-hidden="true" />
          <div className="ebr-hero__orb ebr-hero__orb--3" aria-hidden="true" />

          <div className="ebr-container">
            <div className="ebr-hero__badge">
              <span className="ebr-hero__badge-dot" aria-hidden="true" />
              AI-Powered · No Design Skills Needed · Free to Start
            </div>

            <h1 id="hero-heading" className="ebr-hero__title">
              The Ecommerce Background
              <br />
              <span className="ebr-hero__title-accent">Remover Built for Sellers</span>
            </h1>

            <p className="ebr-hero__subtitle">
              Remove product image backgrounds in under 10 seconds. Get marketplace-compliant
              white backgrounds or transparent PNGs ready for Amazon, Shopify, Flipkart, Meesho
              and every major ecommerce platform — no Photoshop, no designer required.
            </p>

            <div className="ebr-hero__cta-wrapper">
              <a
                href={CTALink}
                className="ebr-hero__cta-primary"
                aria-label="Open the Ecommerce Background Remover tool"
              >
                <span className="ebr-cta-icon" aria-hidden="true">✂</span>
                Remove Background Free
                <span className="ebr-cta-arrow" aria-hidden="true">→</span>
              </a>
              <p className="ebr-hero__cta-note">No credit card · No software install · Instant results</p>
            </div>

            {/* Mini before/after visual */}
            <div className="ebr-hero__demo" aria-label="Before and after comparison of background removal">
              <div className="ebr-hero__demo-card ebr-hero__demo-card--before">
                <div className="ebr-demo-label">Before</div>
                <div className="ebr-demo-product ebr-demo-product--messy" aria-hidden="true">
                  <div className="ebr-demo-bg-noise" />
                  <div className="ebr-demo-product-shape" />
                </div>
              </div>
              <div className="ebr-hero__demo-divider" aria-hidden="true">→</div>
              <div className="ebr-hero__demo-card ebr-hero__demo-card--after">
                <div className="ebr-demo-label">After</div>
                <div className="ebr-demo-product ebr-demo-product--clean" aria-hidden="true">
                  <div className="ebr-demo-checkerboard" />
                  <div className="ebr-demo-product-shape ebr-demo-product-shape--clean" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── STATS BAR ─────────────────────────────────── */}
        <section className="ebr-stats" aria-label="Impact statistics">
          <div className="ebr-container">
            <div className="ebr-stats__grid">
              {stats.map((s) => (
                <div key={s.value} className="ebr-stats__item">
                  <span className="ebr-stats__value">{s.value}</span>
                  <span className="ebr-stats__label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY PRODUCT IMAGE BACKGROUNDS MATTER ─────── */}
        <section className="ebr-section ebr-why" aria-labelledby="why-heading">
          <div className="ebr-container">
            <div className="ebr-section__header">
              <h2 id="why-heading" className="ebr-section__title">
                Why Product Image Backgrounds Directly
                <span className="ebr-accent"> Impact Your Sales</span>
              </h2>
              <p className="ebr-section__subtitle">
                In ecommerce, your product photo is your storefront window. Shoppers cannot touch,
                smell or test what you sell — they buy based on what they see. A cluttered,
                inconsistent, or poorly-lit background destroys trust before a customer even reads
                your product title.
              </p>
            </div>

            <div className="ebr-why__grid">
              <article className="ebr-why__card">
                <div className="ebr-why__card-icon" aria-hidden="true">🔍</div>
                <h3 className="ebr-why__card-title">Search Ranking & Click-Through Rate</h3>
                <p className="ebr-why__card-desc">
                  Amazon's A9 algorithm and Google Shopping both consider click-through rate (CTR)
                  as a ranking signal. Products with clean, white backgrounds consistently achieve
                  higher CTR because they look more professional in grid search results — where
                  buyers are scanning dozens of items simultaneously. A 5% improvement in CTR can
                  compound into significantly higher organic ranking over weeks.
                </p>
              </article>

              <article className="ebr-why__card">
                <div className="ebr-why__card-icon" aria-hidden="true">🎯</div>
                <h3 className="ebr-why__card-title">Marketplace Policy Compliance</h3>
                <p className="ebr-why__card-desc">
                  Amazon, Flipkart, Myntra and AJIO all enforce strict image guidelines. Amazon
                  specifically requires a pure white background (RGB 255, 255, 255) on the main
                  listing image — non-compliant images get suppressed from search results entirely,
                  costing you visibility without any notification. Our tool exports
                  marketplace-ready white backgrounds automatically.
                </p>
              </article>

              <article className="ebr-why__card">
                <div className="ebr-why__card-icon" aria-hidden="true">💡</div>
                <h3 className="ebr-why__card-title">Brand Consistency Across Catalogue</h3>
                <p className="ebr-why__card-desc">
                  When all your product images share the same background style, your store looks
                  like a professionally curated brand — not a collection of randomly photographed
                  items. Brand consistency on Shopify and WooCommerce directly increases session
                  duration, repeat visits, and customer trust. Studies show that consistent visual
                  identity can increase revenue by up to 23%.
                </p>
              </article>

              <article className="ebr-why__card">
                <div className="ebr-why__card-icon" aria-hidden="true">📱</div>
                <h3 className="ebr-why__card-title">Mobile Shopping Experience</h3>
                <p className="ebr-why__card-desc">
                  Over 72% of Indian ecommerce purchases now happen on mobile. On a small screen,
                  background distractions compete with your product for attention. A clean,
                  removed background ensures the product itself — not the wall behind it, not the
                  table it was placed on — is what the buyer focuses on. This is especially
                  critical for impulse-purchase categories like accessories, beauty, and apparel.
                </p>
              </article>

              <article className="ebr-why__card">
                <div className="ebr-why__card-icon" aria-hidden="true">💰</div>
                <h3 className="ebr-why__card-title">Cost of Professional Photography</h3>
                <p className="ebr-why__card-desc">
                  A professional product photographer in India charges ₹200–₹600 per image for
                  basic white background shots. For a catalogue of 500 SKUs — common for any
                  growing D2C brand — that's ₹1,00,000–₹3,00,000 just in photography costs, not
                  counting retouching time. AI background removal cuts this to near-zero, letting
                  sellers shoot anywhere and clean up digitally.
                </p>
              </article>

              <article className="ebr-why__card">
                <div className="ebr-why__card-icon" aria-hidden="true">⚡</div>
                <h3 className="ebr-why__card-title">Speed to Market</h3>
                <p className="ebr-why__card-desc">
                  In fashion and seasonal categories, the window between receiving inventory and
                  listing it before a sale event (Big Billion Day, Great Indian Festival, End of
                  Reason Sale) can be 24–48 hours. Manual Photoshop background removal for 100
                  images takes a full working day. AI removes all 100 in under 20 minutes,
                  enabling same-day listing and capturing demand at peak.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ──────────────────────────────── */}
        <section className="ebr-section ebr-how" aria-labelledby="how-heading">
          <div className="ebr-container">
            <div className="ebr-section__header">
              <h2 id="how-heading" className="ebr-section__title">
                How the Ecommerce Background Remover
                <span className="ebr-accent"> Works in 3 Steps</span>
              </h2>
              <p className="ebr-section__subtitle">
                No tutorials. No learning curve. From product photo to marketplace-ready image in
                under 30 seconds flat.
              </p>
            </div>

            <div className="ebr-how__steps">
              {steps.map((step, i) => (
                <div key={step.num} className="ebr-how__step">
                  <div className="ebr-how__step-num" aria-hidden="true">{step.num}</div>
                  {i < steps.length - 1 && (
                    <div className="ebr-how__step-connector" aria-hidden="true" />
                  )}
                  <h3 className="ebr-how__step-title">{step.title}</h3>
                  <p className="ebr-how__step-desc">{step.desc}</p>
                </div>
              ))}
            </div>

            <div className="ebr-how__cta">
              <a
                href={CTALink}
                className="ebr-hero__cta-primary"
                aria-label="Start removing backgrounds from product images"
              >
                <span className="ebr-cta-icon" aria-hidden="true">✂</span>
                Start Removing Backgrounds
                <span className="ebr-cta-arrow" aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* ── PRODUCT CATEGORIES ────────────────────────── */}
        <section className="ebr-section ebr-categories" aria-labelledby="categories-heading">
          <div className="ebr-container">
            <div className="ebr-section__header">
              <h2 id="categories-heading" className="ebr-section__title">
                AI Background Removal for
                <span className="ebr-accent"> Every Product Category</span>
              </h2>
              <p className="ebr-section__subtitle">
                Different product types present different technical challenges for AI background
                removal. Here's exactly how our engine handles the most common ecommerce
                categories — and pro tips to get the best result every time.
              </p>
            </div>

            <div className="ebr-categories__grid">
              {productCategories.map((cat) => (
                <article key={cat.category} className="ebr-categories__card">
                  <div className="ebr-categories__icon" aria-hidden="true">{cat.icon}</div>
                  <h3 className="ebr-categories__title">{cat.category}</h3>
                  <div className="ebr-categories__challenge">
                    <span className="ebr-tag ebr-tag--challenge">Challenge</span>
                    <p>{cat.challenge}</p>
                  </div>
                  <div className="ebr-categories__tip">
                    <span className="ebr-tag ebr-tag--tip">Pro Tip</span>
                    <p>{cat.tip}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── PLATFORM COMPLIANCE ───────────────────────── */}
        <section className="ebr-section ebr-platforms" aria-labelledby="platforms-heading">
          <div className="ebr-container">
            <div className="ebr-section__header">
              <h2 id="platforms-heading" className="ebr-section__title">
                Background Requirements for
                <span className="ebr-accent"> Every Major Marketplace</span>
              </h2>
              <p className="ebr-section__subtitle">
                Each platform has its own image policy — and getting it wrong means suppressed
                listings, rejected catalogues, and lost sales. Our tool handles compliance
                automatically for all of them.
              </p>
            </div>

            <div className="ebr-platforms__grid">
              {platforms.map((p) => (
                <div key={p.name} className="ebr-platforms__card">
                  <div className="ebr-platforms__icon" aria-hidden="true">{p.icon}</div>
                  <h3 className="ebr-platforms__name">{p.name}</h3>
                  <p className="ebr-platforms__req">{p.requirement}</p>
                  <div className="ebr-platforms__status">
                    <span className="ebr-status-dot" aria-hidden="true" />
                    Compliant with Scenith
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── DEEP DIVE: AI TECHNOLOGY ──────────────────── */}
        <section className="ebr-section ebr-tech" aria-labelledby="tech-heading">
          <div className="ebr-container">
            <div className="ebr-tech__layout">
              <div className="ebr-tech__content">
                <h2 id="tech-heading" className="ebr-section__title">
                  The AI Engine Behind
                  <span className="ebr-accent"> Precise Product Cutouts</span>
                </h2>

                <p className="ebr-tech__body">
                  Most background removal tools use generic segmentation models trained on a
                  broad mix of images — portraits, landscapes, social media posts. The results
                  on product photography are mediocre: jagged edges on curved objects, halos
                  around shiny surfaces, and lost details on fine structures like jewellery chains
                  and mesh fabric.
                </p>

                <p className="ebr-tech__body">
                  Scenith's background removal engine uses a domain-specific deep learning model
                  fine-tuned on ecommerce product imagery. This means the model understands
                  product shapes, typical shooting setups (flat lay, ghost mannequin, tabletop),
                  and the visual characteristics of common retail backgrounds (white sheets,
                  gradient paper, lightbox shadows).
                </p>

                <p className="ebr-tech__body">
                  The result is sub-pixel edge accuracy on even the most challenging product
                  types: a single gold necklace chain against a cream background, the semi-
                  transparent sole of a running shoe, or the delicate lace trim on a dupatta.
                  Where other tools leave artefacts, Scenith delivers clean, professional cutouts
                  ready for direct upload.
                </p>

                <h3 className="ebr-tech__subheading">What the Model Handles Specifically</h3>
                <ul className="ebr-tech__list" role="list">
                  <li>Reflective and metallic surfaces (phones, cookware, sunglasses)</li>
                  <li>Transparent and semi-transparent materials (glass, plastic bottles, mesh)</li>
                  <li>Fine hair-like structures (fur, chains, fringe, embroidery)</li>
                  <li>Soft edge transitions (fabric folds, velvet, foam products)</li>
                  <li>Products with complex silhouettes (cutlery sets, tools, multi-part kits)</li>
                  <li>Shadows cast by the product onto the background (preserved or removed on demand)</li>
                  <li>Studio gradient backgrounds, coloured paper rolls, and lifestyle backgrounds</li>
                </ul>
              </div>

              <div className="ebr-tech__visual" aria-hidden="true">
                <div className="ebr-tech__card">
                  <div className="ebr-tech__card-header">AI Processing Pipeline</div>
                  <div className="ebr-tech__pipeline">
                    {['Image Input', 'Semantic Segmentation', 'Edge Refinement', 'Mask Generation', 'Background Removal', 'PNG Export'].map((step, i) => (
                      <div key={step} className="ebr-tech__pipeline-step">
                        <div className="ebr-tech__pipeline-dot" />
                        <span>{step}</span>
                        {i < 5 && <div className="ebr-tech__pipeline-line" />}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── COMPARISON TABLE ──────────────────────────── */}
        <section className="ebr-section ebr-comparison" aria-labelledby="comparison-heading">
          <div className="ebr-container">
            <div className="ebr-section__header">
              <h2 id="comparison-heading" className="ebr-section__title">
                Scenith vs Manual Editing vs
                <span className="ebr-accent"> Other AI Tools</span>
              </h2>
              <p className="ebr-section__subtitle">
                A direct, honest comparison for ecommerce sellers evaluating their options in 2026.
              </p>
            </div>

            <div className="ebr-comparison__wrapper" role="region" aria-label="Comparison table">
              <table className="ebr-comparison__table">
                <caption className="sr-only">
                  Feature comparison between Scenith, manual Photoshop editing, and other AI tools
                </caption>
                <thead>
                  <tr>
                    <th scope="col">Feature</th>
                    <th scope="col" className="ebr-comparison__highlight-col">
                      <span className="ebr-comparison__badge">Scenith ✓</span>
                    </th>
                    <th scope="col">Manual (Photoshop)</th>
                    <th scope="col">Other AI Tools</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row) => (
                    <tr key={row.feature}>
                      <td className="ebr-comparison__feature">{row.feature}</td>
                      <td className="ebr-comparison__highlight-col">{row.scenith}</td>
                      <td>{row.manual}</td>
                      <td>{row.others}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── USE CASE: DROPSHIPPING & D2C ──────────────── */}
        <section className="ebr-section ebr-usecases" aria-labelledby="usecases-heading">
          <div className="ebr-container">
            <div className="ebr-section__header">
              <h2 id="usecases-heading" className="ebr-section__title">
                Who Uses the Ecommerce
                <span className="ebr-accent"> Background Remover</span>
              </h2>
            </div>

            <div className="ebr-usecases__grid">
              <article className="ebr-usecases__card">
                <h3 className="ebr-usecases__title">🏬 Amazon & Flipkart Sellers</h3>
                <p className="ebr-usecases__body">
                  For FBA and FBF sellers managing hundreds of SKUs, manual image editing is a
                  bottleneck that delays listings and costs revenue. Our AI processes product images
                  instantly, producing Amazon-compliant white backgrounds without a single manual
                  selection. Sellers report going from receiving stock to live listing in the same
                  day — a critical competitive advantage during flash sale windows.
                </p>
                <p className="ebr-usecases__body">
                  The tool is particularly valuable for sellers in highly visual categories:
                  electronics accessories, kitchen appliances, beauty products, and fashion —
                  where professional-looking imagery is the difference between 3-star seller
                  metrics and 5-star performance.
                </p>
              </article>

              <article className="ebr-usecases__card">
                <h3 className="ebr-usecases__title">👗 D2C Fashion Brands on Shopify</h3>
                <p className="ebr-usecases__body">
                  Direct-to-consumer fashion brands invest heavily in brand aesthetics. Inconsistent
                  product backgrounds across a collection destroys the curated feel that builds
                  brand equity. With Scenith, teams can shoot products in any environment — a
                  studio, a flat, a rooftop — and standardise backgrounds in post-processing before
                  upload.
                </p>
                <p className="ebr-usecases__body">
                  Ghost mannequin effects, flat-lay compositions, and on-model shots all work with
                  our engine. Once the background is removed, the image editor lets you add brand
                  colours, lifestyle backgrounds, or seasonal campaign overlays — turning a simple
                  product photo into campaign-ready creative.
                </p>
              </article>

              <article className="ebr-usecases__card">
                <h3 className="ebr-usecases__title">📦 Dropshippers & Resellers</h3>
                <p className="ebr-usecases__body">
                  Dropshippers sourcing from manufacturers often receive product images with messy
                  backgrounds, Chinese watermarks, or inconsistent styling. Our tool lets you clean
                  up supplier images instantly, replace backgrounds with marketplace-compliant white,
                  and create a consistent visual identity across a multi-supplier catalogue — making
                  it look like everything came from one professional brand shoot.
                </p>
              </article>

              <article className="ebr-usecases__card">
                <h3 className="ebr-usecases__title">📸 Product Photographers & Studios</h3>
                <p className="ebr-usecases__body">
                  Freelance product photographers and photography studios serving ecommerce clients
                  use our tool to automate the background removal step in their post-production
                  workflow. Instead of spending 15–30 minutes per image in Photoshop, photographers
                  batch-process their session output and deliver client-ready images the same day —
                  enabling them to take on more clients at the same hourly rate.
                </p>
              </article>

              <article className="ebr-usecases__card">
                <h3 className="ebr-usecases__title">🛒 Social Commerce Sellers (Instagram, WhatsApp)</h3>
                <p className="ebr-usecases__body">
                  Instagram and WhatsApp commerce has exploded in India — millions of small
                  businesses sell via DMs and Stories. For these sellers, professional product
                  images are the primary trust signal. Our background remover lets Instagram
                  sellers create clean, professional product images from phone photos taken at
                  home — dramatically elevating their visual quality without a studio budget.
                </p>
              </article>

              <article className="ebr-usecases__card">
                <h3 className="ebr-usecases__title">🌐 Aggregator Cataloguers & VAs</h3>
                <p className="ebr-usecases__body">
                  Catalogue management companies and virtual assistants handling ecommerce product
                  uploads for clients need to process large volumes of images quickly. Scenith's
                  AI tool integrates into image editing workflows and, on paid plans, supports bulk
                  processing — making it the tool of choice for catalogue agencies managing accounts
                  for multiple brands simultaneously across Amazon, Flipkart, and Meesho.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* ── SEO DEEP DIVE: PRODUCT IMAGES IN 2026 ────── */}
        <section className="ebr-section ebr-seo-content" aria-labelledby="seo-content-heading">
          <div className="ebr-container ebr-seo-content__layout">
            <div>
              <h2 id="seo-content-heading" className="ebr-section__title">
                Product Image SEO in 2026:
                <span className="ebr-accent"> Why Background Quality Now Affects Ranking</span>
              </h2>

              <p className="ebr-seo-content__body">
                Until 2023, product image quality was primarily a conversion optimisation concern —
                good images converted better, but the algorithm primarily ranked based on text
                signals: title keywords, bullet points, and backend search terms. That changed
                with Google Shopping's visual search updates and Amazon's image quality scoring
                signals introduced in 2024–2025.
              </p>

              <h3 className="ebr-seo-content__subheading">Google Shopping & Visual Search</h3>
              <p className="ebr-seo-content__body">
                Google Shopping in 2026 uses computer vision to assess product image quality
                as a factor in ad Quality Score. Clean backgrounds, proper product prominence
                (product filling &gt;80% of frame), and consistent image style across a merchant's
                feed are all factors that affect cost-per-click and impression share. Products with
                clean, white backgrounds receive higher visual quality scores, translating to
                better positions at lower CPCs.
              </p>
              <p className="ebr-seo-content__body">
                Additionally, Google Lens and visual search now index product images semantically.
                Products with clean, isolated backgrounds are easier for vision AI to classify,
                leading to better appearance in Google Lens results — an increasingly important
                discovery channel for fashion, home décor, and electronics categories.
              </p>

              <h3 className="ebr-seo-content__subheading">Amazon's Image Quality Score</h3>
              <p className="ebr-seo-content__body">
                Amazon's internal algorithm now includes an Image Quality Score (IQS) as a ranking
                factor for organic product search results. The IQS evaluates background compliance,
                image resolution, product prominence, and the presence of lifestyle images in the
                secondary image gallery. Listings with suppressed main images (due to non-white
                backgrounds) receive a dramatically reduced IQS, which compounds over time as
                click-through data signals low relevance.
              </p>
              <p className="ebr-seo-content__body">
                Maintaining a compliant, high-quality main image is therefore not just about
                aesthetics — it is a direct SEO variable for your Amazon listing's organic rank.
              </p>

              <h3 className="ebr-seo-content__subheading">Alt Text, Image Sitemaps & Product Schema</h3>
              <p className="ebr-seo-content__body">
                For Shopify and WooCommerce stores with organic Google traffic goals, product
                image SEO includes three additional dimensions: descriptive alt text (which our
                tool's download filenames are structured to support), image sitemaps (which signal
                image content to Googlebot), and Product schema markup with{' '}
                <code className="ebr-code">image</code> property defined. Clean, high-resolution
                product images load faster (important for Core Web Vitals), appear in Google Image
                Search with product overlay badges, and are indexed by Google Shopping even from
                organic pages — effectively giving you a free shopping impression alongside
                organic results.
              </p>

              <h3 className="ebr-seo-content__subheading">
                The Engagement-First Algorithm Shift
              </h3>
              <p className="ebr-seo-content__body">
                Across every major ecommerce platform in 2026, algorithms have shifted toward
                engagement-first ranking signals. Dwell time (how long a shopper stays on a
                product page), scroll depth, image zoom interactions, and secondary image
                views all feed into ranking scores on Amazon, Flipkart, and Google Shopping.
              </p>
              <p className="ebr-seo-content__body">
                Clean product images with removed backgrounds consistently drive higher image
                zoom rates (shoppers want to examine the product closely, not the background),
                longer dwell times (the image gallery looks more professional and trustworthy),
                and lower immediate bounce rates (first impression is stronger). These engagement
                improvements create a positive feedback loop: better engagement → higher ranking
                → more traffic → more engagement.
              </p>
            </div>
          </div>
        </section>

        {/* ── TIPS: SHOOTING FOR AI BACKGROUND REMOVAL ─── */}
        <section className="ebr-section ebr-tips" aria-labelledby="tips-heading">
          <div className="ebr-container">
            <div className="ebr-section__header">
              <h2 id="tips-heading" className="ebr-section__title">
                10 Product Photography Tips for
                <span className="ebr-accent"> Best AI Background Removal Results</span>
              </h2>
              <p className="ebr-section__subtitle">
                AI background removal is powerful, but you get the best results when the input
                image is set up right. These tips apply whether you're shooting with a DSLR,
                a mirrorless camera, or a modern smartphone.
              </p>
            </div>

            <ol className="ebr-tips__list" role="list">
              {[
                {
                  title: 'Use a single, solid-colour background',
                  body: 'A white foam board, grey paper backdrop, or plain coloured cloth gives the AI the clearest contrast between product and background. Avoid textured walls, wooden surfaces, and gradients that overlap with product colours.',
                },
                {
                  title: 'Light your product evenly from the front',
                  body: 'Side lighting creates harsh shadows that merge with the background at the edges, making it hard for the AI to determine where the product ends. Use two softboxes or two windows on either side of the product to create even, shadow-free illumination.',
                },
                {
                  title: 'Keep the background at least 30–50 cm behind the product',
                  body: 'If the product is sitting directly on or against the background surface, background shadows and reflections wrap into the product edges. Physical distance between product and backdrop gives the AI clean edge data to work with.',
                },
                {
                  title: 'Shoot at the products eye level',
                  body: "Camera angle affects how much background is visible behind and around the product. For most product categories, shooting at the product's natural eye level or slightly above minimises background area and maximises product prominence in the frame.",
                },
                {
                  title: 'Fill the frame with the product',
                  body: 'Crop tightly in-camera so the product fills 70–85% of the frame. Excessive empty space around the product creates more background for the AI to process and increases the chance of edge artefacts on complex product silhouettes.',
                },
                {
                  title: 'Avoid glossy or reflective background surfaces',
                  body: 'Glass tables, glossy white paper, and vinyl rolls create specular reflections of the product on the background — which then appear to "connect" product and background at the pixel level. Use matte surfaces.',
                },
                {
                  title: 'Use natural light or a lightbox for small products',
                  body: 'For jewellery, cosmetics, and small electronics, a lightbox (also called a photo tent) creates perfectly even, shadow-free illumination from all sides. A ₹1,500–₹3,000 lightbox dramatically improves AI accuracy on fine-detail products.',
                },
                {
                  title: 'Keep product colours distinct from background colour',
                  body: 'A white shirt on a white background is an extremely difficult case for any AI. If your product is light-coloured, use a mid-grey or light-blue background. If your product is dark, white works perfectly. Contrast is the AI\'s best friend.',
                },
                {
                  title: 'Export from your camera in the highest quality JPG or RAW → JPG',
                  body: 'Higher resolution input gives the AI more pixel data to work with at edges, resulting in smoother, more accurate masks. Aim for at least 2000px on the long edge before uploading to the background remover.',
                },
                {
                  title: "Don't over-compress before uploading",
                  body: "JPEG compression artefacts at product edges confuse AI segmentation models. If re-saving from editing software, use quality 85–95. Don't run an already-compressed JPEG through another compression cycle before background removal.",
                },
              ].map((tip, i) => (
                <li key={tip.title} className="ebr-tips__item">
                  <div className="ebr-tips__num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</div>
                  <div className="ebr-tips__content">
                    <h3 className="ebr-tips__title">{tip.title}</h3>
                    <p className="ebr-tips__body">{tip.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── MID-PAGE CTA ──────────────────────────────── */}
        <section className="ebr-mid-cta" aria-label="Call to action">
          <div className="ebr-container">
            <div className="ebr-mid-cta__card">
              <div className="ebr-mid-cta__orb" aria-hidden="true" />
              <h2 className="ebr-mid-cta__title">
                Ready to Clean Up Your Product Images?
              </h2>
              <p className="ebr-mid-cta__desc">
                Join thousands of Indian ecommerce sellers who use Scenith to remove backgrounds,
                create marketplace-ready product images, and list faster — with zero design skills
                required.
              </p>
              <a
                href={CTALink}
                className="ebr-hero__cta-primary ebr-mid-cta__btn"
                aria-label="Remove product image backgrounds for free"
              >
                <span className="ebr-cta-icon" aria-hidden="true">✂</span>
                Remove Background Free — No Card Needed
                <span className="ebr-cta-arrow" aria-hidden="true">→</span>
              </a>
              <p className="ebr-mid-cta__note">
                Works on Amazon · Flipkart · Shopify · Meesho · AJIO · WooCommerce · Instagram
              </p>
            </div>
          </div>
        </section>

        {/* ── BACKGROUND TYPES GLOSSARY ─────────────────── */}
        <section className="ebr-section ebr-glossary" aria-labelledby="glossary-heading">
          <div className="ebr-container">
            <div className="ebr-section__header">
              <h2 id="glossary-heading" className="ebr-section__title">
                The Complete Guide to
                <span className="ebr-accent"> Product Image Background Types</span>
              </h2>
              <p className="ebr-section__subtitle">
                Understanding when to use each background type is as important as knowing how to
                remove them. Here's the complete reference for ecommerce sellers.
              </p>
            </div>

            <div className="ebr-glossary__grid">
              {[
                {
                  type: 'Pure White Background',
                  hex: 'RGB 255,255,255',
                  color: '#ffffff',
                  useCase: 'Amazon main image, Flipkart, Myntra, AJIO primary images',
                  pros: 'Universally compliant, makes products pop, looks professional',
                  cons: 'Can feel clinical for lifestyle brands; white products need extra care',
                },
                {
                  type: 'Transparent Background (PNG)',
                  hex: 'Alpha channel',
                  color: 'transparent',
                  useCase: 'Shopify product pages with coloured themes, custom graphic design, social media ads',
                  pros: 'Maximum flexibility; works on any background colour or image',
                  cons: 'Not directly uploadable to platforms requiring white backgrounds',
                },
                {
                  type: 'Off-White / Light Grey',
                  hex: 'RGB 245,245,245',
                  color: '#f5f5f5',
                  useCase: "Shopify stores, WooCommerce, brand's own website",
                  pros: 'Softer look than pure white; excellent for luxury and beauty brands',
                  cons: 'May not be compliant with strict marketplace requirements',
                },
                {
                  type: 'Coloured Background',
                  hex: 'Brand colours',
                  color: 'linear-gradient(135deg, #667eea, #764ba2)',
                  useCase: 'Social media posts, Instagram Shopping, email marketing banners',
                  pros: 'High visual impact; supports brand identity; stands out in feed',
                  cons: 'Not suitable for marketplace primary images; use for secondary images',
                },
                {
                  type: 'Lifestyle / Contextual Background',
                  hex: 'Scene photography',
                  color: 'linear-gradient(135deg, #c8a97e, #8b6f4a)',
                  useCase: 'Secondary Amazon images, Shopify product galleries, Meta ads',
                  pros: 'Storytelling; shows product in use; increases emotional connection',
                  cons: 'Requires additional photography or AI generation; not compliant for primary images',
                },
                {
                  type: 'Gradient Background',
                  hex: 'CSS gradient',
                  color: 'linear-gradient(135deg, #f093fb, #f5576c)',
                  useCase: 'Premium product positioning, beauty/cosmetics brands, tech accessories',
                  pros: 'Modern aesthetic; works well for D2C brand stores',
                  cons: 'Can appear dated quickly; not marketplace-compliant for primary images',
                },
              ].map((bg) => (
                <article key={bg.type} className="ebr-glossary__card">
                  <div
                    className="ebr-glossary__swatch"
                    style={{ background: bg.color === 'transparent' ? undefined : bg.color }}
                    aria-hidden="true"
                  >
                    {bg.color === 'transparent' && <div className="ebr-demo-checkerboard ebr-demo-checkerboard--full" />}
                  </div>
                  <div className="ebr-glossary__info">
                    <h3 className="ebr-glossary__type">{bg.type}</h3>
                    <code className="ebr-glossary__hex">{bg.hex}</code>
                    <p className="ebr-glossary__usecase"><strong>Best for:</strong> {bg.useCase}</p>
                    <p className="ebr-glossary__pros"><strong>✓ Pros:</strong> {bg.pros}</p>
                    <p className="ebr-glossary__cons"><strong>✗ Cons:</strong> {bg.cons}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── INDIAN ECOMMERCE CONTEXT ──────────────────── */}
        <section className="ebr-section ebr-india" aria-labelledby="india-heading">
          <div className="ebr-container">
            <h2 id="india-heading" className="ebr-section__title">
              Built for Indian Ecommerce Sellers:
              <span className="ebr-accent"> The 2026 Landscape</span>
            </h2>

            <p className="ebr-india__body">
              India's ecommerce market crossed ₹6.5 lakh crore in GMV in 2025 and is growing at
              over 25% year-on-year. With Amazon India, Flipkart, Meesho, JioMart, AJIO, Nykaa,
              and dozens of vertical-specific platforms competing for seller inventory, the
              average Indian online seller now manages presence across 3–5 marketplaces
              simultaneously — each with its own image specification.
            </p>

            <div className="ebr-india__grid">
              <div className="ebr-india__card">
                <h3 className="ebr-india__card-title">The SMB Image Quality Gap</h3>
                <p className="ebr-india__card-body">
                  Large brands on Amazon India invest in professional product photography studios
                  and post-production teams. Small and medium sellers — who represent over 70% of
                  Amazon India's active seller base — often list with smartphone photos against
                  kitchen counters and bedroom walls. This creates a visible quality gap that
                  algorithms now actively penalise through lower organic rankings and higher CPCs.
                </p>
                <p className="ebr-india__card-body">
                  Scenith's ecommerce background remover closes this gap. A seller in Surat
                  making kurtis, a manufacturer in Moradabad selling brassware, or a home baker
                  in Bangalore selling via Instagram — all can now produce professional product
                  images that compete visually with funded D2C brands, at zero marginal cost per
                  image.
                </p>
              </div>

              <div className="ebr-india__card">
                <h3 className="ebr-india__card-title">Meesho & Social Commerce Explosion</h3>
                <p className="ebr-india__card-body">
                  Meesho's reseller network has grown to over 15 crore active users. Resellers
                  who source from suppliers and resell via WhatsApp and Meesho catalogue depend
                  entirely on product images for trust. With no physical store, no face-to-face
                  interaction, and intense competition from hundreds of other resellers selling the
                  same product — image quality is often the only differentiator.
                </p>
                <p className="ebr-india__card-body">
                  Our tool lets Meesho resellers take supplier images, instantly clean the
                  background, and add their own branding or overlays in the editor — creating a
                  unique, branded presentation that stands out from the standard supplier images
                  every competitor is also using.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────── */}
        <section className="ebr-section ebr-faq" aria-labelledby="faq-heading">
          <div className="ebr-container">
            <div className="ebr-section__header">
              <h2 id="faq-heading" className="ebr-section__title">
                Frequently Asked Questions About
                <span className="ebr-accent"> Ecommerce Background Removal</span>
              </h2>
            </div>

            <div className="ebr-faq__list">
              {faqs.map((faq, i) => (
                <details key={i} className="ebr-faq__item">
                  <summary className="ebr-faq__question">
                    <span>{faq.q}</span>
                    <span className="ebr-faq__icon" aria-hidden="true">+</span>
                  </summary>
                  <p className="ebr-faq__answer">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ─────────────────────────────────── */}
        <section className="ebr-final-cta" aria-labelledby="final-cta-heading">
          <div className="ebr-final-cta__bg-grid" aria-hidden="true" />
          <div className="ebr-final-cta__orb" aria-hidden="true" />
          <div className="ebr-container">
            <h2 id="final-cta-heading" className="ebr-final-cta__title">
              Stop Losing Sales to Poor Product Images.
              <br />
              <span className="ebr-accent">Fix Them in 10 Seconds — Free.</span>
            </h2>

            <p className="ebr-final-cta__desc">
              Thousands of Indian ecommerce sellers use Scenith's AI background remover to
              create marketplace-compliant, conversion-optimised product images — without a
              photographer, without Photoshop, and without a design budget.
            </p>

            <a
              href={CTALink}
              className="ebr-final-cta__btn"
              aria-label="Remove product image backgrounds free with Scenith"
            >
              <span className="ebr-cta-icon" aria-hidden="true">✂</span>
              Remove Background Free Now
              <span className="ebr-cta-arrow" aria-hidden="true">→</span>
            </a>

            <div className="ebr-final-cta__trust">
              <span>✓ No credit card required</span>
              <span>✓ No software installation</span>
              <span>✓ Works on any device</span>
              <span>✓ Results in under 10 seconds</span>
              <span>✓ Amazon & Flipkart compliant</span>
            </div>

            <p className="ebr-final-cta__disclaimer">
              Already using Scenith?{' '}
              <Link href="/tools/background-removal">Go directly to the tool →</Link>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}