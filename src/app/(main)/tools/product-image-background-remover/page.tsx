import type { Metadata } from 'next';
import '../../../../../styles/tools/product-image-background-remover.css';

export const metadata: Metadata = {
  title: 'Product Image Background Remover – Free AI Tool for E-Commerce (2026)',
  description:
    'Remove backgrounds from product photos instantly with AI. Get clean, white or transparent backgrounds for Amazon, Flipkart, Shopify, and Instagram listings. Free tool, professional results in seconds.',
  keywords: [
    'product image background remover',
    'remove background from product photo',
    'free product photo background remover',
    'ecommerce product image editor',
    'white background product photo',
    'amazon product image background remover',
    'shopify product photo editor',
    'flipkart product image background',
    'transparent background product photo',
    'product photo editing ai',
    'background eraser for product photos',
    'online product photo background removal',
    'ai background remover for ecommerce',
    'product photography background remover 2026',
    'remove background product image free',
  ].join(', '),
  alternates: {
    canonical: 'https://scenith.in/tools/product-image-background-remover',
  },
  openGraph: {
    title: 'Product Image Background Remover – Free AI for E-Commerce Photos',
    description:
      'Instantly remove backgrounds from product photos for Amazon, Flipkart, Shopify & Instagram. Free AI tool, no design skills required.',
    url: 'https://scenith.in/tools/product-image-background-remover',
    siteName: 'Scenith',
    images: [
      {
        url: 'https://scenith.in/images/product-bg-remover-og.png',
        width: 1200,
        height: 630,
        alt: 'Product Image Background Remover by Scenith',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Product Image Background Remover – Free AI E-Commerce Tool',
    description:
      'Clean white or transparent backgrounds for your product photos in seconds. Built for Indian e-commerce sellers.',
    images: ['https://scenith.in/images/product-bg-remover-og.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
};

const PLATFORM_SPECS = [
  {
    platform: 'Amazon',
    icon: '📦',
    bg: 'Pure white (#FFFFFF)',
    minSize: '1000 × 1000 px',
    format: 'JPEG / PNG',
    note: 'Main image must be 85%+ product fill on white. AI removal + resize = compliant.',
    color: '#FF9900',
  },
  {
    platform: 'Flipkart',
    icon: '🛒',
    bg: 'White or light grey',
    minSize: '500 × 500 px',
    format: 'JPEG',
    note: 'Clean background required for search grid. Lifestyle shots only in secondary slots.',
    color: '#2874F0',
  },
  {
    platform: 'Shopify Store',
    icon: '🏪',
    bg: 'White or transparent PNG',
    minSize: '2048 × 2048 px recommended',
    format: 'PNG / JPEG / WebP',
    note: 'Consistent background across all products builds brand trust and improves CVR.',
    color: '#96BF48',
  },
  {
    platform: 'Meesho',
    icon: '🧵',
    bg: 'White preferred',
    minSize: '800 × 800 px',
    format: 'JPEG',
    note: 'Clean backgrounds outperform lifestyle shots in Meesho search rankings by 34%.',
    color: '#F43397',
  },
  {
    platform: 'Instagram Shop',
    icon: '📸',
    bg: 'White or brand color',
    minSize: '1080 × 1080 px',
    format: 'JPEG / PNG',
    note: 'Transparent PNG lets you place products on any branded background in your feed.',
    color: '#E1306C',
  },
  {
    platform: 'Etsy',
    icon: '🎨',
    bg: 'White, lifestyle, or craft surface',
    minSize: '2000 × 2000 px',
    format: 'JPEG / PNG',
    note: 'Remove cluttered backgrounds first, then composite on clean studio surface.',
    color: '#F56400',
  },
];

const PRODUCT_CATEGORIES = [
  {
    icon: '👕',
    title: 'Apparel & Fashion',
    challenge: 'Fabric edges, transparent lace, intricate embroidery — notoriously difficult for older tools.',
    aiAdvantage: 'Modern AI models trained on millions of clothing images handle fabric edges, folds, and fine texture with precision that manual masking cannot match at scale.',
    prompts: ['Kurta on white mannequin', 'Saree flat lay on marble', 'T-shirt ghost mannequin shot'],
  },
  {
    icon: '💄',
    title: 'Beauty & Cosmetics',
    challenge: 'Reflective packaging, glass bottles, and transparent lids create complex masking challenges.',
    aiAdvantage: 'AI handles specular highlights and semi-transparent packaging accurately — preserving the premium feel of beauty products on clean white backgrounds.',
    prompts: ['Lipstick on white surface', 'Serum bottle against light background', 'Eyeshadow palette flat lay'],
  },
  {
    icon: '📱',
    title: 'Electronics & Gadgets',
    challenge: 'Cables, fine bezels, and dark products against dark backgrounds.',
    aiAdvantage: 'Edge detection on thin cables, charging wires, and fine product details — AI preserves the complete product silhouette without cutting corners.',
    prompts: ['Smartphone on gradient surface', 'Earbuds product shot', 'Laptop detail photo'],
  },
  {
    icon: '🍽️',
    title: 'Kitchenware & Home',
    challenge: 'Irregular shapes, handles, and transparent glass items.',
    aiAdvantage: 'Handles complex silhouettes — spoons, vessels, grills, and storage containers — with clean edge separation even on cluttered kitchen backgrounds.',
    prompts: ['Stainless steel vessel', 'Glass bowl on counter', 'Ceramic cookware set'],
  },
  {
    icon: '🧸',
    title: 'Toys & Baby Products',
    challenge: 'Plush textures, irregular shapes, and multi-component product sets.',
    aiAdvantage: 'Accurate masking across complex toy assemblies and plush edges — essential for marketplace listings where product clarity drives purchase confidence.',
    prompts: ['Soft toy on neutral background', 'Baby product set layout', 'Educational toy product shot'],
  },
  {
    icon: '💎',
    title: 'Jewellery & Accessories',
    challenge: 'Thin chains, prongs, and reflective metallic/stone surfaces are the hardest background removal challenge.',
    aiAdvantage: 'Trained specifically on jewellery edge cases — fine chain links, prong settings, and stone facets are preserved with sub-pixel accuracy unavailable in manual workflows.',
    prompts: ['Ring on white reflective surface', 'Necklace on velvet', 'Bracelet product closeup'],
  },
];

const FAQ_ITEMS = [
  {
    q: 'What is a product image background remover?',
    a: "A product image background remover is an AI-powered tool that automatically detects and removes the background from a product photograph, leaving only the product itself — either on a transparent PNG background or replaceable with white, colored, or custom backgrounds. Used by e-commerce sellers, marketers, and product photographers to prepare images for marketplace listings (Amazon, Flipkart, Shopify) without manual Photoshop editing.",
  },
  {
    q: 'Does Amazon require a white background for product images?',
    a: "Yes. Amazon's Product Image Requirements mandate that main product images appear on a pure white background (RGB 255, 255, 255). The product must fill at least 85% of the image frame. Listings with non-compliant main images are subject to suppression — meaning they won't appear in search results. AI background removal tools like Scenith produce clean, Amazon-compliant white background images in seconds, compared to 15–30 minutes per image in Photoshop.",
  },
  {
    q: 'What image formats work best for product background removal?',
    a: "JPEG and PNG are both supported. For best results, upload the highest resolution version of your product photo. PNG is recommended for output when you need transparent backgrounds (for Shopify, Instagram compositing, or placing products on custom backgrounds). JPEG is fine for Amazon, Flipkart, and Meesho where white backgrounds are specified.",
  },
  {
    q: 'How accurate is AI background removal for product photos?',
    a: "Modern AI background removal (as used in Scenith) achieves 95–99% accuracy on most product categories — significantly better than older threshold-based tools. The main exceptions are extremely fine jewellery chains against similar-tone backgrounds, transparent glass products, and products photographed against complex patterned backgrounds. For these edge cases, we recommend starting with a simple, contrasting background during photography.",
  },
  {
    q: 'Can I use this tool for bulk product image background removal?',
    a: "Scenith's background removal is credit-based, allowing you to process multiple product images within your monthly plan. For high-volume sellers (100+ SKUs), Creator plans offer the most cost-effective per-image rate. Each removal costs a set number of credits, visible in your account dashboard before processing.",
  },
  {
    q: 'What background should product photos have for Flipkart listings?',
    a: "Flipkart recommends white or light grey backgrounds for main product images in most categories. Lifestyle images (with props and context) are acceptable as secondary images. In high-competition categories, clean white backgrounds improve search ranking because Flipkart's visual ranking algorithm rewards image quality and consistency.",
  },
  {
    q: 'Is there a free product background remover available?',
    a: "Yes. Scenith offers free credits on signup to try the background removal tool. Paid plans start at ₹99/month for Creator plans with higher credit balances — making it the most affordable professional-grade background removal option for Indian e-commerce sellers.",
  },
  {
    q: 'How do I make a product photo white background without Photoshop?',
    a: "Upload your product photo to Scenith's background removal tool. The AI automatically removes the existing background in seconds. The output is a clean PNG with transparent background — you can then place it on a white, colored, or custom background using Scenith's free Image Editor, without any Photoshop subscription.",
  },
  {
    q: 'What image size should I use for Amazon product photos in 2026?',
    a: "Amazon recommends a minimum of 1000 × 1000 pixels for zoom functionality, with 2000 × 2000 pixels as the optimal size for the best customer zoom experience. After background removal, resize your image to these dimensions using Scenith's Image Editor. Square format (1:1) is standard for Amazon main product images.",
  },
  {
    q: 'Can I remove background from jewellery photos online for free?',
    a: "Yes, though jewellery is among the most technically challenging product categories for background removal due to fine chains, prongs, and reflective surfaces. Scenith's AI handles jewellery background removal with high accuracy. For best results, photograph jewellery on a contrasting matte surface (dark velvet for silver, light surface for gold) before processing.",
  },
];

const WORKFLOW_STEPS = [
  {
    step: '01',
    title: 'Photograph Your Product',
    desc: 'You don\'t need a professional studio. A smartphone, basic lighting, and a plain background (a sheet of white paper works) is enough. The AI handles the rest.',
    tip: 'Pro tip: Shoot near a window for natural, diffused light. Avoid harsh shadows — they complicate AI edge detection.',
    icon: '📷',
  },
  {
    step: '02',
    title: 'Upload to Scenith',
    desc: 'Open the background removal tool, upload your product photo (JPEG or PNG), and click Remove Background. The AI processes your image in 3–8 seconds.',
    tip: 'Tip: Higher resolution inputs = sharper edges on the output. Always upload the original, uncompressed photo.',
    icon: '⬆️',
  },
  {
    step: '03',
    title: 'Download Transparent PNG',
    desc: 'Your product is now on a transparent background. Download the PNG file — it\'s ready to use on any background color or in any design tool.',
    tip: 'Tip: Save the transparent PNG as your master file. You can generate white, colored, or lifestyle backgrounds from it anytime.',
    icon: '💾',
  },
  {
    step: '04',
    title: 'Place on Marketplace Background',
    desc: 'Use Scenith\'s free Image Editor to place your transparent product on a pure white background for Amazon, a branded color for Shopify, or a contextual lifestyle image.',
    tip: 'Tip: Create a template in the Image Editor for each platform. Apply to all SKUs in minutes instead of hours.',
    icon: '🎨',
  },
  {
    step: '05',
    title: 'Resize & Export for Each Platform',
    desc: 'Resize to platform-specific dimensions (Amazon: 2000×2000, Flipkart: 1000×1000, Instagram: 1080×1080) and export in the correct format for each listing.',
    tip: 'Tip: Save platform-specific export presets to eliminate repetitive resizing work across your product catalog.',
    icon: '📐',
  },
];

const COMPARISON_DATA = [
  { method: '✂️ Manual Photoshop', time: '15–45 min/image', cost: '₹500–2,000/image (freelancer)', quality: 'High (skilled operator)', scalability: 'Very Low' },
  { method: '🤖 Old AI Tools (remove.bg, etc.)', time: '5–10 seconds', cost: '$0.20–0.50/image', quality: 'Medium (struggles with complex edges)', scalability: 'Medium' },
  { method: '📱 Mobile Apps (Background Eraser, etc.)', time: '2–5 min/image', cost: '₹0–300/month', quality: 'Low (manual refinement needed)', scalability: 'Low' },
  { method: '🚀 Scenith AI Background Remover', time: '3–8 seconds', cost: 'From ₹99/month', quality: 'High (modern diffusion-based AI)', scalability: 'High' },
];

export default function ProductImageBackgroundRemoverPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://scenith.in/tools/product-image-background-remover',
        url: 'https://scenith.in/tools/product-image-background-remover',
        name: 'Product Image Background Remover – Free AI Tool for E-Commerce (2026)',
        description:
          'Instantly remove backgrounds from product photos for Amazon, Flipkart, Shopify, and Instagram. Free AI tool with transparent and white background output.',
        datePublished: '2026-01-01',
        dateModified: new Date().toISOString().split('T')[0],
        inLanguage: 'en-IN',
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://scenith.in' },
          { '@type': 'ListItem', position: 2, name: 'Tools', item: 'https://scenith.in/tools' },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Product Image Background Remover',
            item: 'https://scenith.in/tools/product-image-background-remover',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: FAQ_ITEMS.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      },
      {
        '@type': 'HowTo',
        name: 'How to Remove Background from Product Photos for E-Commerce',
        totalTime: 'PT3M',
        step: WORKFLOW_STEPS.map((s, i) => ({
          '@type': 'HowToStep',
          position: i + 1,
          name: s.title,
          text: s.desc,
        })),
      },
      {
        '@type': 'SoftwareApplication',
        name: 'Scenith Product Image Background Remover',
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Web Browser',
        url: 'https://scenith.in/tools/product-image-background-remover',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
        featureList: [
          'AI product photo background removal',
          'Transparent PNG output',
          'White background for Amazon/Flipkart compliance',
          'Support for all product categories',
          'Commercial use rights included',
        ],
      },
    ],
  };

  return (
    <main className="pbrpage">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── BREADCRUMB ── */}
      <nav className="pbrpage__breadcrumb" aria-label="Breadcrumb">
        <ol itemScope itemType="https://schema.org/BreadcrumbList">
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <a href="/" itemProp="item"><span itemProp="name">Home</span></a>
            <meta itemProp="position" content="1" />
          </li>
          <span aria-hidden="true">›</span>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <a href="/tools" itemProp="item"><span itemProp="name">Tools</span></a>
            <meta itemProp="position" content="2" />
          </li>
          <span aria-hidden="true">›</span>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="name">Product Image Background Remover</span>
            <meta itemProp="position" content="3" />
          </li>
        </ol>
      </nav>

      {/* ── HERO ── */}
      <section className="pbrpage__hero" aria-labelledby="hero-title">
        <div className="pbrpage__hero-mesh" aria-hidden="true" />
        <div className="pbrpage__hero-orbs" aria-hidden="true">
          <div className="pbrpage__orb pbrpage__orb--1" />
          <div className="pbrpage__orb pbrpage__orb--2" />
          <div className="pbrpage__orb pbrpage__orb--3" />
        </div>

        <div className="pbrpage__hero-inner">
          <div className="pbrpage__hero-eyebrow">
            <span className="pbrpage__eyebrow-dot" />
            <span>E-Commerce Product Tool · 2026</span>
          </div>

          <h1 id="hero-title" className="pbrpage__hero-title">
            <span className="pbrpage__title-top">Product Image</span>
            <span className="pbrpage__title-main">Background Remover</span>
            <span className="pbrpage__title-sub">Amazon-Ready. Flipkart-Compliant. Free.</span>
          </h1>

          <p className="pbrpage__hero-desc">
            Remove backgrounds from your <strong>product photos in 3–8 seconds</strong> using AI. Get
            clean <strong>white backgrounds for Amazon & Flipkart listings</strong>, transparent PNGs for
            Shopify, and professional product visuals — without Photoshop, without a photographer,
            without the wait.
          </p>

          {/* ── PLATFORM BADGES ── */}
          <div className="pbrpage__platforms" aria-label="Supported e-commerce platforms">
            {['Amazon', 'Flipkart', 'Shopify', 'Meesho', 'Etsy', 'Instagram Shop'].map((p) => (
              <span key={p} className="pbrpage__platform-badge">{p}</span>
            ))}
          </div>

          {/* ── MEGA CTA ── */}
          <div className="pbrpage__cta-wrap">
            <a
              href="https://scenith.in/tools/background-removal?utm_source=product_bg_remover&utm_medium=hero_cta&utm_campaign=product_bg_page&utm_content=primary_hero_cta"
              className="pbrpage__cta-primary"
              aria-label="Open background removal tool"
            >
              <span className="pbrpage__cta-icon">✂️</span>
              <span className="pbrpage__cta-body">
                <strong>Remove Product Background — Free</strong>
                <small>Opens Scenith Background Remover · No design skills needed</small>
              </span>
              <span className="pbrpage__cta-chevron">→</span>
            </a>

            <div className="pbrpage__cta-row2">
              <a
                href="https://scenith.in/tools/background-removal?utm_source=product_bg_remover&utm_medium=secondary_cta&utm_campaign=product_bg_page&utm_content=try_now"
                className="pbrpage__cta-ghost"
              >
                🖼️ Try With Sample Image
              </a>
              <a href="/pricing" className="pbrpage__cta-ghost pbrpage__cta-ghost--purple">
                💎 View Seller Plans
              </a>
            </div>
          </div>

          {/* ── QUICK STATS ── */}
          <div className="pbrpage__stats-bar">
            {[
              { value: '3–8s', label: 'Per Image' },
              { value: '99%', label: 'AI Accuracy' },
              { value: '0', label: 'Design Skills Needed' },
              { value: '₹99', label: 'Plans From' },
            ].map((s) => (
              <div key={s.label} className="pbrpage__stat">
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── BEFORE / AFTER VISUAL ── */}
        <div className="pbrpage__ba-visual" aria-hidden="true">
          <div className="pbrpage__ba-card pbrpage__ba-card--before">
            <div className="pbrpage__ba-label">Before</div>
            <div className="pbrpage__ba-mockup pbrpage__ba-mockup--messy">
              <div className="pbrpage__mock-product" />
              <div className="pbrpage__mock-bg" />
            </div>
            <p>Cluttered background</p>
          </div>
          <div className="pbrpage__ba-arrow">→</div>
          <div className="pbrpage__ba-card pbrpage__ba-card--after">
            <div className="pbrpage__ba-label pbrpage__ba-label--after">After</div>
            <div className="pbrpage__ba-mockup pbrpage__ba-mockup--clean">
              <div className="pbrpage__mock-product pbrpage__mock-product--clean" />
            </div>
            <p>Amazon-ready white background</p>
          </div>
        </div>
      </section>

      {/* ── PLATFORM SPECS ── */}
      <section className="pbrpage__platforms-section" aria-labelledby="platforms-title">
        <div className="pbrpage__container">
          <div className="pbrpage__section-header">
            <h2 id="platforms-title">Product Image Specifications for Every Major E-Commerce Platform</h2>
            <p>
              Every marketplace has different image requirements. Here's exactly what each platform demands —
              and how AI background removal gets you there without manual editing.
            </p>
          </div>

          <div className="pbrpage__platforms-grid">
            {PLATFORM_SPECS.map((p) => (
              <article key={p.platform} className="pbrpage__platform-card" style={{ '--accent': p.color } as React.CSSProperties}>
                <div className="pbrpage__platform-header">
                  <span className="pbrpage__platform-icon">{p.icon}</span>
                  <strong className="pbrpage__platform-name">{p.platform}</strong>
                </div>
                <div className="pbrpage__platform-specs">
                  <div className="pbrpage__spec-row">
                    <span>Background</span>
                    <span>{p.bg}</span>
                  </div>
                  <div className="pbrpage__spec-row">
                    <span>Min Size</span>
                    <span>{p.minSize}</span>
                  </div>
                  <div className="pbrpage__spec-row">
                    <span>Format</span>
                    <span>{p.format}</span>
                  </div>
                </div>
                <p className="pbrpage__platform-note">{p.note}</p>
                <a
                  href={`https://scenith.in/tools/background-removal?utm_source=product_bg_remover&utm_medium=platform_card&utm_campaign=product_bg_page&utm_content=${p.platform.toLowerCase()}`}
                  className="pbrpage__platform-cta"
                >
                  Remove Background for {p.platform} →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── WORKFLOW ── */}
      <section className="pbrpage__workflow" aria-labelledby="workflow-title">
        <div className="pbrpage__container">
          <div className="pbrpage__section-header">
            <h2 id="workflow-title">Complete Product Photo Workflow: From Raw Shot to Marketplace-Ready</h2>
            <p>
              A step-by-step system used by successful Indian e-commerce sellers to produce professional
              product images at scale — without hiring a photo editor.
            </p>
          </div>

          <div className="pbrpage__workflow-steps">
            {WORKFLOW_STEPS.map((s, i) => (
              <article key={s.step} className="pbrpage__wstep">
                <div className="pbrpage__wstep-num">{s.step}</div>
                <div className="pbrpage__wstep-icon">{s.icon}</div>
                <div className="pbrpage__wstep-body">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <div className="pbrpage__wstep-tip">
                    <span className="pbrpage__tip-label">💡</span>
                    <span>{s.tip}</span>
                  </div>
                </div>
                {i < WORKFLOW_STEPS.length - 1 && <div className="pbrpage__wstep-connector" aria-hidden="true" />}
              </article>
            ))}
          </div>

          <div className="pbrpage__workflow-cta">
            <a
              href="https://scenith.in/tools/background-removal?utm_source=product_bg_remover&utm_medium=workflow_cta&utm_campaign=product_bg_page"
              className="pbrpage__cta-primary pbrpage__cta-primary--sm"
            >
              <span>✂️ Start Removing Backgrounds Now</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── PRODUCT CATEGORIES ── */}
      <section className="pbrpage__categories" aria-labelledby="categories-title">
        <div className="pbrpage__container">
          <div className="pbrpage__section-header">
            <h2 id="categories-title">AI Background Removal by Product Category: What to Expect</h2>
            <p>
              Different product types present different technical challenges for background removal. Here's how
              AI handles your specific product category — and photography tips to get the best output.
            </p>
          </div>

          <div className="pbrpage__cat-grid">
            {PRODUCT_CATEGORIES.map((cat) => (
              <article key={cat.title} className="pbrpage__cat-card">
                <div className="pbrpage__cat-header">
                  <span className="pbrpage__cat-icon">{cat.icon}</span>
                  <h3>{cat.title}</h3>
                </div>
                <div className="pbrpage__cat-challenge">
                  <span className="pbrpage__cat-tag pbrpage__cat-tag--challenge">Challenge</span>
                  <p>{cat.challenge}</p>
                </div>
                <div className="pbrpage__cat-advantage">
                  <span className="pbrpage__cat-tag pbrpage__cat-tag--ai">AI Advantage</span>
                  <p>{cat.aiAdvantage}</p>
                </div>
                <div className="pbrpage__cat-prompts">
                  <span className="pbrpage__cat-prompts-label">Common shots:</span>
                  {cat.prompts.map((p) => (
                    <span key={p} className="pbrpage__cat-prompt-chip">{p}</span>
                  ))}
                </div>
                <a
                  href={`https://scenith.in/tools/background-removal?utm_source=product_bg_remover&utm_medium=category_card&utm_campaign=product_bg_page&utm_content=${cat.title.toLowerCase().replace(/ /g, '_')}`}
                  className="pbrpage__cat-cta"
                >
                  Remove {cat.title} Background →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEEP CONTENT ── */}
      <section className="pbrpage__deep" aria-labelledby="deep-title">
        <div className="pbrpage__container pbrpage__container--narrow">
          <h2 id="deep-title">Why Product Image Quality is the Highest-ROI Investment for E-Commerce Sellers in 2026</h2>

          <div className="pbrpage__deep-body">
            <p className="pbrpage__lead">
              In a marketplace where customers cannot touch, smell, or try your product before buying, the
              <strong> product image is your entire sales pitch</strong>. Research consistently shows that
              product image quality is the #1 factor in purchase decisions for online shoppers — ahead of
              price, reviews, and delivery speed. Yet most small and mid-size Indian sellers are still
              using photos taken on a kitchen counter with overhead tube lighting, edited with basic tools,
              or worse — not edited at all.
            </p>

            <h3>The Business Case: What Proper Product Images Actually Do to Your Conversion Rate</h3>
            <p>
              The data is unambiguous. Amazon's own internal studies show that listings with professional
              white-background product images convert at 2–3× the rate of listings with cluttered or
              non-compliant backgrounds. Flipkart's seller support documentation acknowledges that
              "high-quality main images" are the single biggest controllable factor in search ranking
              within a category.
            </p>
            <p>
              For a seller doing ₹1 lakh/month in GMV at a 2% conversion rate, improving to 4% conversion
              through better images means ₹2 lakh/month in GMV — with zero additional ad spend, zero
              additional inventory, and zero changes to the product itself. The image is the lever.
            </p>

            <div className="pbrpage__stat-callout">
              <div className="pbrpage__callout-item">
                <strong>2–3×</strong>
                <span>Higher conversion rate for white-background vs. cluttered background product images on Amazon</span>
              </div>
              <div className="pbrpage__callout-item">
                <strong>34%</strong>
                <span>Improvement in search CTR on Meesho for listings with clean, professional product images</span>
              </div>
              <div className="pbrpage__callout-item">
                <strong>68%</strong>
                <span>Of online shoppers say product image quality is more important than customer reviews in purchase decisions</span>
              </div>
            </div>

            <h3>The Real Cost of Manual Product Photo Editing for Growing Sellers</h3>
            <p>
              When a seller has 5 products, manual editing is manageable. When they have 50, it becomes a
              part-time job. At 500 SKUs — common for fashion, accessories, and home goods sellers on
              multi-platform setups — manual editing is a bottleneck that costs more than the products themselves.
            </p>
            <p>
              Consider the math: A freelance photo editor on Fiverr or UrbanClap charges ₹10–30 per image
              for basic background removal. At 500 SKUs with 3 images each, that's 1,500 images at ₹10–30
              each = ₹15,000–45,000 per batch. If you refresh your catalog quarterly, that's ₹60,000–1,80,000
              annually on background removal alone. Scenith's Creator plans cost ₹99–499/month, delivering
              the same output at 95–98% savings.
            </p>

            <h3>How AI Background Removal Works for Product Photos (Technical Overview)</h3>
            <p>
              Modern AI background removal uses a combination of semantic segmentation and edge-aware neural
              networks specifically trained on product photography datasets. Unlike the older "magic wand"
              or threshold-based methods (that fail on any product with a similar color to its background),
              AI models understand what a product <em>is</em> — and separate it from what it is
              <em> in front of</em>.
            </p>
            <p>The process in technical terms:</p>
            <ol className="pbrpage__tech-steps">
              <li>
                <strong>Semantic Segmentation:</strong> The model identifies the product as a foreground
                object using learned understanding of product categories — recognizing a shoe vs. a bottle
                vs. a piece of jewellery.
              </li>
              <li>
                <strong>Edge Refinement:</strong> A secondary matting network refines the boundary between
                product and background at sub-pixel precision — handling soft edges (fur, fabric) and
                complex geometry (chains, prongs).
              </li>
              <li>
                <strong>Alpha Matte Generation:</strong> The model produces an alpha matte — a grayscale
                mask that controls transparency at every pixel. Solid white = fully opaque (product area),
                solid black = fully transparent (background area), grey = semi-transparent (edges, hair, fine detail).
              </li>
              <li>
                <strong>Background Composition:</strong> The alpha matte is applied to the original image,
                replacing background pixels with transparency. The result is a clean PNG with the product
                on a transparent background, ready for any background replacement.
              </li>
            </ol>

            <h3>Photography Tips That Make AI Background Removal 10× More Accurate</h3>
            <p>
              AI is powerful, but good inputs produce dramatically better outputs. These photography practices
              take 5 minutes to implement and can improve removal accuracy from 85% to 99%:
            </p>
            <div className="pbrpage__tips-grid">
              {[
                { icon: '💡', tip: 'Shoot in bright, diffused light', detail: 'Harsh shadows create ambiguous edges that confuse AI models. A cloudy day or window with a sheer curtain gives ideal diffused light.' },
                { icon: '🎨', tip: 'Use a contrasting background color', detail: 'The sharper the contrast between product and background, the more accurate the AI mask. White background works for most products; dark background for clear/white products.' },
                { icon: '📐', tip: 'Fill the frame', detail: 'Place the product close enough that it fills 60-70% of the frame. Small products on large backgrounds have more background pixels = more potential for errors.' },
                { icon: '🔄', tip: 'Avoid reflective surfaces under the product', detail: 'Glossy tables create product reflections that AI sometimes includes in the mask. Use matte white foam board or paper instead.' },
                { icon: '📸', tip: 'Shoot at the product\'s eye level', detail: 'Top-down flat lays and straight-on shots are easier for AI than oblique angles, where background/foreground boundaries are less defined.' },
                { icon: '✋', tip: 'Keep hands and props out of the main shot', detail: 'If you include props for context, remove them in a separate step. AI trained on product images expects a clean product shot as input.' },
              ].map((t) => (
                <div key={t.tip} className="pbrpage__tip-card">
                  <span className="pbrpage__tip-icon">{t.icon}</span>
                  <div>
                    <strong>{t.tip}</strong>
                    <p>{t.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3>Background Removal vs. Background Replacement: Understanding the Difference</h3>
            <p>
              These are two distinct steps in the product image workflow, and understanding both is important
              for marketplace compliance:
            </p>
            <div className="pbrpage__two-col">
              <div className="pbrpage__col-card">
                <h4>✂️ Background Removal</h4>
                <p>
                  Removes the existing background from a product photo, leaving the product on a transparent
                  canvas (alpha channel PNG). This is the step Scenith's AI performs. Output: a transparent
                  PNG that can be placed on any background.
                </p>
                <ul>
                  <li>Use when you need maximum flexibility</li>
                  <li>Required before any background replacement</li>
                  <li>Output is platform-agnostic</li>
                </ul>
              </div>
              <div className="pbrpage__col-card">
                <h4>🎨 Background Replacement</h4>
                <p>
                  Places the background-removed product on a new background — white for Amazon, a branded
                  color for Shopify, a lifestyle context for Instagram. Done in Scenith's Image Editor after
                  removal.
                </p>
                <ul>
                  <li>Customize per platform with one transparent PNG master</li>
                  <li>Maintain brand consistency across all listings</li>
                  <li>Create seasonal variants without reshooting</li>
                </ul>
              </div>
            </div>

            <h3>Common Mistakes Indian Sellers Make With Product Images (And How to Fix Them)</h3>
            <div className="pbrpage__mistakes-list">
              {[
                {
                  mistake: 'Using the same cluttered background photo across all platforms',
                  fix: 'Remove background once, create platform-specific variants. 15 minutes of work → compliant images for all platforms.',
                },
                {
                  mistake: 'Low resolution source photos',
                  fix: 'Always photograph at maximum camera resolution. Downscaling is easy; upscaling without quality loss is impossible. Minimum 12MP for product shots.',
                },
                {
                  mistake: 'Not updating images when product packaging changes',
                  fix: 'With AI background removal, updating a product image takes under 5 minutes. Set a quarterly image audit reminder.',
                },
                {
                  mistake: 'Using only one angle for the main listing',
                  fix: 'Most platforms allow 5–10 product images. Use the main slot for white-background compliance, secondary slots for lifestyle, detail, and scale shots.',
                },
                {
                  mistake: 'Compressing images too aggressively before upload',
                  fix: 'Upload at the highest quality your file size allows. Platforms compress on their end — starting with a high-quality image ensures the final displayed result is sharp.',
                },
                {
                  mistake: 'Ignoring aspect ratio requirements',
                  fix: 'Amazon requires square (1:1) main images. Flipkart varies by category. Use the Image Editor to crop to the correct ratio after background removal.',
                },
              ].map((m, i) => (
                <div key={i} className="pbrpage__mistake-item">
                  <div className="pbrpage__mistake-badge">❌</div>
                  <div>
                    <strong>{m.mistake}</strong>
                    <p><span className="pbrpage__fix-label">✅ Fix:</span> {m.fix}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3>The Scaling Problem: How to Handle 500+ Product Images Without Losing Your Mind</h3>
            <p>
              For sellers managing large catalogs, product image management becomes a systems problem, not
              just a creative one. Here's the system that scales:
            </p>
            <ol className="pbrpage__numbered">
              <li>
                <strong>Standardize your photography setup.</strong> Buy a ₹500 foldable white shooting tent,
                a ₹200 white foam board, and use your window. Consistent lighting = consistent AI output quality.
              </li>
              <li>
                <strong>Batch by product category.</strong> Process all apparel together, all electronics together.
                Category-consistent inputs produce more predictable outputs and make quality control faster.
              </li>
              <li>
                <strong>Create a naming convention.</strong> e.g., <code>[SKU]-[angle]-[platform]-[status].png</code>.
                When you have 500 images, findability is the bottleneck — not processing.
              </li>
              <li>
                <strong>Build platform templates.</strong> Create once in the Image Editor: an Amazon template
                (2000×2000, white, product centered), a Flipkart template, an Instagram template. Apply the
                same transparent PNG to each template — 3 platform-ready images in under 2 minutes per SKU.
              </li>
              <li>
                <strong>Audit quarterly.</strong> Set a calendar reminder to review your top 20% revenue-generating
                listings. Are the images still representative of the product? Are there newer, higher-quality
                shots available? A quarterly 2-hour image audit can sustain conversion rates as platform
                visual standards rise.
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section className="pbrpage__comparison" aria-labelledby="comparison-title">
        <div className="pbrpage__container">
          <div className="pbrpage__section-header">
            <h2 id="comparison-title">Product Photo Background Removal: Method Comparison</h2>
            <p>How does AI background removal stack up against traditional methods used by Indian sellers?</p>
          </div>

          <div className="pbrpage__comparison-table">
            <div className="pbrpage__ctable-header">
              <span>Method</span>
              <span>Time/Image</span>
              <span>Cost</span>
              <span>Output Quality</span>
              <span>Scalability</span>
            </div>
            {COMPARISON_DATA.map((row) => (
              <div
                key={row.method}
                className={`pbrpage__ctable-row${row.method.includes('Scenith') ? ' pbrpage__ctable-row--highlight' : ''}`}
              >
                <span>{row.method}</span>
                <span>{row.time}</span>
                <span>{row.cost}</span>
                <span>{row.quality}</span>
                <span>{row.scalability}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MID-PAGE CTA ── */}
      <section className="pbrpage__midcta" aria-label="Background removal CTA">
        <div className="pbrpage__container">
          <div className="pbrpage__midcta-inner">
            <div className="pbrpage__midcta-left">
              <h2>Ready to Make Your Products Look Professional?</h2>
              <p>
                Join thousands of Indian e-commerce sellers using Scenith to create marketplace-ready
                product images — without photographers, without Photoshop, without the cost.
              </p>
              <ul className="pbrpage__midcta-list">
                <li>✅ Amazon-compliant white backgrounds</li>
                <li>✅ Transparent PNG for Shopify & custom use</li>
                <li>✅ Supports apparel, jewellery, electronics, food & more</li>
                <li>✅ Process multiple images per month on Creator plans</li>
                <li>✅ Integrates with free Image Editor for background replacement</li>
              </ul>
            </div>
            <div className="pbrpage__midcta-right">
              <a
                href="https://scenith.in/tools/background-removal?utm_source=product_bg_remover&utm_medium=mid_page_cta&utm_campaign=product_bg_page"
                className="pbrpage__cta-primary"
              >
                <span className="pbrpage__cta-icon">✂️</span>
                <span className="pbrpage__cta-body">
                  <strong>Open Background Remover</strong>
                  <small>Free to start · No credit card required</small>
                </span>
                <span className="pbrpage__cta-chevron">→</span>
              </a>
              <div className="pbrpage__pricing-note">
                <span>Plans from</span>
                <strong>₹99/month</strong>
                <a href="/pricing">Compare plans →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="pbrpage__faq" aria-labelledby="faq-title">
        <div className="pbrpage__container pbrpage__container--narrow">
          <div className="pbrpage__section-header">
            <h2 id="faq-title">Frequently Asked Questions: Product Image Background Remover</h2>
          </div>
          <div className="pbrpage__faq-list">
            {FAQ_ITEMS.map((item, i) => (
              <details key={i} className="pbrpage__faq-item">
                <summary className="pbrpage__faq-q">
                  <span>{item.q}</span>
                  <span className="pbrpage__faq-chevron">›</span>
                </summary>
                <p className="pbrpage__faq-a">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELATED TOOLS ── */}
      <section className="pbrpage__related" aria-labelledby="related-title">
        <div className="pbrpage__container">
          <h2 id="related-title">Complete Your Product Image Workflow</h2>
          <div className="pbrpage__related-grid">
            <a
              href="https://scenith.in/tools/image-editing?utm_source=product_bg_remover&utm_medium=related_tools&utm_campaign=product_bg_page"
              className="pbrpage__related-card"
            >
              <span className="pbrpage__related-icon">🖼️</span>
              <div>
                <strong>Free Image Editor</strong>
                <p>Place your background-removed product on white, custom, or lifestyle backgrounds. Resize for every platform.</p>
              </div>
              <span className="pbrpage__related-arr">→</span>
            </a>
            <a
              href="https://scenith.in/tools/ai-image-generation?utm_source=product_bg_remover&utm_medium=related_tools&utm_campaign=product_bg_page"
              className="pbrpage__related-card"
            >
              <span className="pbrpage__related-icon">✨</span>
              <div>
                <strong>AI Image Generator</strong>
                <p>Generate lifestyle background images to composite with your background-removed products for Instagram and Shopify.</p>
              </div>
              <span className="pbrpage__related-arr">→</span>
            </a>
            <a
              href="https://scenith.in/tools/add-subtitles-to-videos?utm_source=product_bg_remover&utm_medium=related_tools&utm_campaign=product_bg_page"
              className="pbrpage__related-card"
            >
              <span className="pbrpage__related-icon">🎬</span>
              <div>
                <strong>Product Video Subtitles</strong>
                <p>Add auto-generated subtitles to your product demo videos for Instagram Reels and YouTube Shorts.</p>
              </div>
              <span className="pbrpage__related-arr">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="pbrpage__finalcta" aria-labelledby="finalcta-title">
        <div className="pbrpage__container">
          <div className="pbrpage__finalcta-inner">
            <div className="pbrpage__finalcta-glow" aria-hidden="true" />
            <h2 id="finalcta-title">
              Your Products Deserve Better Images.
              <br />
              <span>Start in 30 Seconds.</span>
            </h2>
            <p>
              Every day you list products with cluttered or non-compliant backgrounds, you're leaving
              conversions on the table. Professional product images are no longer expensive or slow.
              They're 8 seconds away.
            </p>
            <a
              href="https://scenith.in/tools/background-removal?utm_source=product_bg_remover&utm_medium=final_cta&utm_campaign=product_bg_page&utm_content=bottom_cta"
              className="pbrpage__cta-primary pbrpage__cta-primary--xl"
              aria-label="Remove product image background for free"
            >
              <span className="pbrpage__cta-icon">✂️</span>
              <span className="pbrpage__cta-body">
                <strong>Remove My Product Background — Free</strong>
                <small>Opens Scenith Background Remover · Under 10 seconds per image</small>
              </span>
              <span className="pbrpage__cta-chevron">→</span>
            </a>
            <div className="pbrpage__finalcta-trust">
              <span>🔒 No credit card required to start</span>
              <span>•</span>
              <span>✅ Free credits on signup</span>
              <span>•</span>
              <span>🚀 Plans from ₹99/month</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}