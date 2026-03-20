import type { Metadata } from 'next';
import '../../../../../styles/tools/TransparentBackgroundMaker.css';

export const metadata: Metadata = {
  title: 'Free Transparent Background Maker — Remove & Make Image Background Transparent Online (2026)',
  description:
    'Make image backgrounds transparent instantly with AI. Free online transparent background maker — perfect for logos, product photos, stickers, ecommerce, and social media. No Photoshop needed.',
  keywords: [
    'transparent background maker',
    'make background transparent',
    'remove background make transparent',
    'transparent background online',
    'png transparent background maker',
    'free transparent background maker',
    'make image background transparent online',
    'transparent background generator',
    'remove white background make transparent',
    'product photo transparent background',
    'logo transparent background',
    'ecommerce transparent background',
    'transparent png maker',
    'background remover transparent',
    'ai transparent background',
    'make photo background transparent free',
    'transparent background tool',
    'cutout background transparent',
    'image to transparent png',
    'transparent background for website',
  ],
  alternates: { canonical: 'https://scenith.in/tools/transparent-background-maker' },
  openGraph: {
    title: 'Free Transparent Background Maker — Make Any Image Background Transparent Instantly',
    description:
      'Use AI to make image backgrounds perfectly transparent in seconds. Free tool for logos, products, stickers, and social media. Download as PNG with no watermark.',
    url: 'https://scenith.in/tools/transparent-background-maker',
    siteName: 'Scenith',
    images: [{ url: 'https://scenith.in/images/TransparentBackgroundMakerOG.png', width: 1200, height: 630, alt: 'Scenith Transparent Background Maker' }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Transparent Background Maker — Remove Backgrounds Instantly',
    description: 'AI-powered transparent background tool. Make any image background transparent and download as PNG. Free, instant, no watermark.',
    images: ['https://scenith.in/images/TransparentBackgroundMakerOG.png'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const USE_CASES = [
  { icon: '🛍️', title: 'E-Commerce Product Photos', desc: 'Place products on any background — white, coloured, or lifestyle scene. Required by Amazon, Flipkart, and Shopify stores.', tag: 'Most Popular', tagColor: '#f59e0b' },
  { icon: '🏷️', title: 'Logo & Brand Assets', desc: 'Make your logo background-free so it sits cleanly on any surface — dark slides, coloured headers, merchandise.', tag: 'Essential', tagColor: '#10b981' },
  { icon: '😀', title: 'Stickers & Emojis', desc: 'Cut out characters, objects, or illustrations for WhatsApp sticker packs, Telegram stickers, and Discord emojis.', tag: 'Trending 2026', tagColor: '#8b5cf6' },
  { icon: '📱', title: 'Social Media Graphics', desc: 'Layer people, objects, and brand elements over custom backgrounds for Instagram, LinkedIn, and YouTube thumbnails.', tag: 'Creator Favourite', tagColor: '#ec4899' },
  { icon: '🎨', title: 'UI/UX & Web Design', desc: 'Export transparent PNGs for Figma, Webflow, and web projects where white backgrounds would break the design.', tag: 'Dev Must-Have', tagColor: '#06b6d4' },
  { icon: '📄', title: 'Presentations & Docs', desc: 'Drop transparent images into PowerPoint, Google Slides, and Canva designs without ugly white boxes.', tag: 'Professional', tagColor: '#3b82f6' },
  { icon: '👕', title: 'Print-on-Demand & Merch', desc: 'Prepare transparent artwork for T-shirts, mugs, and custom merch — essential for Printful, Redbubble, and Merch by Amazon.', tag: 'Seller Tool', tagColor: '#f97316' },
  { icon: '🎬', title: 'Video Production', desc: 'Create cutout assets for lower-thirds, overlays, and motion graphics in Premiere Pro, After Effects, and DaVinci.', tag: 'Video Editor', tagColor: '#ef4444' },
];

const BEFORE_AFTER = [
  { icon: '📦', before: 'Product photo on a cluttered desk surface', after: 'Clean product on a pure transparent PNG — ready for any marketplace listing' },
  { icon: '🏷️', before: 'Company logo exported with a white background box', after: 'Vector-sharp logo on transparent background, usable on dark and light themes' },
  { icon: '👤', before: 'Portrait photo with a busy street backdrop', after: 'Professional headshot cutout for LinkedIn, pitch decks, and media kits' },
  { icon: '✏️', before: 'Hand-drawn character illustration on paper', after: 'Clean sticker-ready transparent PNG for Telegram, WhatsApp, or merch' },
];

const FORMAT_GUIDE = [
  { format: 'PNG (Recommended)', icon: '✅', supports: true, best_for: 'Logos, web graphics, stickers, product photos, UI assets', notes: 'The only web format that preserves full alpha channel transparency. Always export transparent images as PNG.', color: '#10b981' },
  { format: 'WebP', icon: '⚡', supports: true, best_for: 'Web performance, modern browsers, CMS uploads', notes: 'Supports transparency and is 25–35% smaller than PNG. Excellent for website use where file size matters.', color: '#06b6d4' },
  { format: 'JPEG / JPG', icon: '❌', supports: false, best_for: 'Photography, social media images (non-transparent)', notes: 'Does NOT support transparency. Transparent areas are filled with white. Never use JPEG for transparent assets.', color: '#ef4444' },
  { format: 'GIF', icon: '⚠️', supports: true, best_for: 'Animated stickers only', notes: 'Supports only 1-bit transparency (on/off), not smooth edges. Results in jagged borders. Use PNG instead.', color: '#f59e0b' },
  { format: 'SVG', icon: '🎯', supports: true, best_for: 'Logos, icons, scalable graphics', notes: 'Vector format with perfect transparency at any size. Best for logos and icons that need to scale.', color: '#8b5cf6' },
];

const INDUSTRY_SECTIONS = [
  {
    icon: '🛒', industry: 'E-Commerce & Online Retail',
    paragraphs: [
      `Transparent background images are not just a preference for e-commerce sellers — they are a requirement. Amazon's Product Image Guidelines mandate pure white or transparent backgrounds for main listing images. Flipkart, Myntra, and Meesho have similar requirements. Sellers who upload products on cluttered or coloured backgrounds see their listings suppressed in search, or in some cases, removed entirely.`,
      `The business case for transparent product backgrounds extends beyond compliance. A/B tests across major e-commerce categories consistently show that products on clean backgrounds receive 15–30% higher click-through rates compared to same products on lifestyle or cluttered backgrounds. Shoppers make split-second decisions scrolling through search results — a clean, professional product cutout immediately communicates trustworthiness and product quality.`,
      `For Shopify, WooCommerce, and other D2C store owners, transparent PNGs allow you to place the same product image on different background colours across seasonal campaigns, promotional banners, and collection pages — without re-shooting. This is the real compound value of investing in proper product cutouts: one transparency-enabled product asset serves dozens of use cases for the lifetime of your listing.`,
    ],
  },
  {
    icon: '🎨', industry: 'Designers & Creative Professionals',
    paragraphs: [
      `For graphic designers, UI/UX professionals, and brand designers, transparent PNG assets are the foundational building block of any design workflow. In Figma, placing a logo or product image with a white background box breaks the design immediately — it looks amateur and requires a manual workaround. Transparent assets drop in perfectly onto any frame, regardless of background colour.`,
      `The transparent background workflow also intersects critically with design system thinking. When brand teams export logos, icons, product photography, and illustration assets to a shared library (Figma, Zeroheight, Frontify), every asset must carry a transparent background to remain universally usable. A logo with a hardcoded white background is effectively broken for dark mode, dark-themed marketing collateral, and any co-branding arrangement.`,
      `Motion designers working in After Effects and DaVinci Resolve depend entirely on transparent PNG sequences for character animations, lower-thirds, and product reveal transitions. The alpha channel in a transparent PNG tells the compositing software exactly where to show the underlying video — without it, you are masking manually frame-by-frame.`,
    ],
  },
  {
    icon: '📸', industry: 'Photographers & Content Creators',
    paragraphs: [
      `Portrait photographers offering headshot retouching packages increasingly include background removal as a standard deliverable. Corporate clients need headshots that can be placed on company website templates, LinkedIn profiles, media kits, and event materials — often on backgrounds they have not determined yet. Delivering transparent PNGs rather than JPEG crops gives clients maximum flexibility.`,
      `Food and product photographers face a constant demand for clean white or transparent backgrounds for restaurant menus, food delivery app listings, cookbooks, and packaging design. Professional photographers who can deliver transparent-background PNG files in addition to standard JPEG sets command higher rates and broader client bases.`,
      `For YouTube creators and social media content producers, transparent subject cutouts are the key ingredient in thumbnail production. The thumbnail formula that drives the highest CTR — subject looking surprised or excited, layered in front of a bold graphic background — is entirely dependent on clean background removal. Creators who master this workflow produce professional thumbnails in minutes rather than hours.`,
    ],
  },
  {
    icon: '💼', industry: 'Marketers & Advertising Professionals',
    paragraphs: [
      `Digital marketing campaigns operate at a pace where creative assets must be adapted across dozens of formats, sizes, and placements in hours — not days. A product hero shot with a transparent background can be dropped into any ad template: Facebook carousel, Google Display, Instagram Story, email header, website banner — all from a single PNG asset. The background becomes a design variable, not a permanent fixture.`,
      `Performance marketers running split tests can use the same transparent product cutout against five different background colours or lifestyle imagery sets in the same campaign — testing which visual context resonates most with each audience segment. This level of creative flexibility was previously only accessible to teams with design staff. Transparent background tools democratise it entirely.`,
      `For brand marketers preparing seasonal campaigns, transparent assets are essential for the rapid adaptation of evergreen brand imagery into themed overlays. The same product transparent PNG works for a clean white summer campaign, a rich festive Diwali overlay, and a dark premium Black Friday treatment — zero re-shooting, zero redesign from scratch.`,
    ],
  },
];

const FAQ_ITEMS = [
  { q: 'What is a transparent background?', a: "A transparent background means the background area of an image contains no pixels — it is fully see-through. Instead of a white or coloured background, you see the chequered pattern (in design software) or nothing at all (on web pages). Transparent backgrounds are stored in PNG format using an alpha channel, which records the opacity of every pixel from fully visible (opaque) to completely invisible (transparent)." },
  { q: 'How do I make an image background transparent for free?', a: "Use Scenith's background removal tool at scenith.in/tools/background-removal. Upload your image, click Remove Background, and the AI automatically detects the subject and makes the background transparent. Download the result as a PNG file. The free plan includes credits to get started — no design software or technical knowledge needed." },
  { q: 'What file format should I use for transparent backgrounds?', a: 'PNG is the correct format for transparent background images on the web. JPEG does not support transparency — if you save a transparent image as JPEG, the transparent areas become white. WebP also supports transparency and offers smaller file sizes, making it ideal for website use. SVG supports transparency and is the best choice for logos and icons that need to scale to any size.' },
  { q: 'Can AI make backgrounds transparent automatically?', a: 'Yes. Modern AI background removal models use deep learning to identify the subject of an image and separate it from the background with high precision. For subjects with clear edges (products, logos, human portraits against plain backgrounds), AI achieves near-perfect results in under 5 seconds. Complex scenes with hair, fur, or transparent subjects may require occasional touch-ups.' },
  { q: 'How do I make a white background transparent?', a: "The simplest approach is to use the Scenith background removal tool — upload the image, click Remove Background, and the AI handles it regardless of what colour the background is. If you specifically want to remove only white (colour-based removal), tools like Photoshop's Magic Wand work, but AI-based removal is faster and preserves edge detail better." },
  { q: 'Can I make a logo background transparent?', a: 'Yes — logo transparency is one of the most common use cases. Upload your logo PNG or JPG to the background removal tool, and the AI will remove the background, leaving only the logo mark and text on a transparent background. The resulting transparent PNG can be used on websites, presentations, social media, merchandise, and any other surface.' },
  { q: 'Does making a background transparent reduce image quality?', a: 'No, when done correctly. The background removal process does not alter the pixels of your subject — it only removes the background pixels. The resulting PNG will be the same quality as your original image. However, if you save the result as JPEG instead of PNG, quality will be lost. Always save transparent images as PNG or WebP.' },
  { q: 'What is the difference between background removal and transparent background?', a: "Background removal is the process — the act of separating the subject from the background. Transparent background is the result — an image where the removed background area is fully see-through (alpha channel = 0). They are two names for the same workflow." },
  { q: 'Can I use transparent background images commercially?', a: 'Images you create using Scenith come with full commercial rights. You can use transparent background versions of your own photos, product images, logos, and illustrations in commercial projects, client work, e-commerce listings, advertising, and merchandise without restrictions.' },
  { q: 'How do I make a product photo background transparent for Amazon?', a: "Amazon requires product main images to have a pure white background (RGB 255,255,255). The fastest workflow: (1) upload your product photo to Scenith's background remover, (2) download the transparent PNG, (3) open in the free Image Editor, (4) set the canvas background to white, and (5) export as JPEG for Amazon compliance." },
];

const STEP_BY_STEP = [
  { num: '01', title: 'Prepare Your Image', content: 'For best results, use a well-lit photo with reasonable contrast between the subject and background. The AI handles complex scenes, but clean lighting dramatically improves edge precision — particularly for hair, fur, and fine details. Acceptable formats: JPEG, JPG, PNG.', tip: 'Higher resolution input = higher quality transparent PNG output. Use at least 800×800px source images for product photography.' },
  { num: '02', title: 'Upload & Process', content: 'Click the Upload button on the background removal tool, select your image, and hit Remove Background. The AI model analyses your image, identifies the primary subject, and begins separating it from the background. Processing typically completes in 3–8 seconds depending on image complexity.', tip: 'You can upload JPEG or PNG files. The tool processes both formats and always outputs a transparent PNG.' },
  { num: '03', title: 'Review the Result', content: "Once processed, you will see a side-by-side comparison of the original and background-removed version. The transparent areas are shown on a chequered pattern. Zoom in on edges — particularly hair, clothing edges, and fine details — to evaluate quality.", tip: "Most AI-processed images look clean on first generation. If edges need refinement, use the 'Edit in Editor' button to manually clean up specific areas." },
  { num: '04', title: 'Edit & Enhance (Optional)', content: 'Click "Edit in Image Editor" to open the transparent PNG in the full design toolkit. Here you can add a new background (solid colour, gradient, pattern, or photo), add text layers, crop to exact dimensions, apply filters, or compose the transparent subject into a complete design.', tip: 'Save your transparent PNG before adding a background if you want to reuse the same cutout on multiple different background designs later.' },
  { num: '05', title: 'Download & Deploy', content: 'Click Download to save the transparent PNG to your device. The file is immediately ready for use in web projects, design software, e-commerce listings, presentations, and print-on-demand platforms. No watermarks. Full resolution. Commercial rights included.', tip: 'If your use case is web performance, convert the PNG to WebP after downloading. WebP preserves transparency at 25–30% smaller file size.' },
];

export default function TransparentBackgroundMakerPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'WebApplication', '@id': 'https://scenith.in/tools/transparent-background-maker#webapp', name: 'Scenith Transparent Background Maker', description: 'Free AI-powered tool to make image backgrounds transparent instantly. Download as PNG with no watermarks and full commercial rights.', url: 'https://scenith.in/tools/transparent-background-maker', applicationCategory: 'MultimediaApplication', operatingSystem: 'Web Browser', offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR', availability: 'https://schema.org/InStock' }, featureList: ['AI-powered transparent background creation', 'Supports logos, portraits, products', 'Download transparent PNG', 'No watermarks', 'Commercial use rights', 'Integrated free image editor'], author: { '@type': 'Organization', name: 'Scenith', url: 'https://scenith.in' } },
      { '@type': 'BreadcrumbList', '@id': 'https://scenith.in/tools/transparent-background-maker#breadcrumb', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://scenith.in' }, { '@type': 'ListItem', position: 2, name: 'Tools', item: 'https://scenith.in/tools' }, { '@type': 'ListItem', position: 3, name: 'Transparent Background Maker', item: 'https://scenith.in/tools/transparent-background-maker' }] },
      { '@type': 'FAQPage', '@id': 'https://scenith.in/tools/transparent-background-maker#faq', mainEntity: FAQ_ITEMS.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
      { '@type': 'HowTo', '@id': 'https://scenith.in/tools/transparent-background-maker#howto', name: 'How to Make an Image Background Transparent', description: 'Step-by-step guide to creating transparent background PNG images using AI', totalTime: 'PT1M', step: STEP_BY_STEP.map((s, i) => ({ '@type': 'HowToStep', name: s.title, text: s.content, position: i + 1 })) },
    ],
  };

  return (
    <div className="tbm-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="tbm-breadcrumb">
        <ol itemScope itemType="https://schema.org/BreadcrumbList">
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem"><a href="/" itemProp="item"><span itemProp="name">Home</span></a><meta itemProp="position" content="1" /></li>
          <span className="tbm-bc-sep">›</span>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem"><a href="/tools" itemProp="item"><span itemProp="name">Tools</span></a><meta itemProp="position" content="2" /></li>
          <span className="tbm-bc-sep">›</span>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem"><span itemProp="name">Transparent Background Maker</span><meta itemProp="position" content="3" /></li>
        </ol>
      </nav>

      {/* ── HERO ── */}
      <section className="tbm-hero" id="hero">
        <div className="tbm-hero-bg" aria-hidden="true">
          <div className="tbm-checker-overlay" />
          <div className="tbm-orb tbm-orb-1" />
          <div className="tbm-orb tbm-orb-2" />
          <div className="tbm-orb tbm-orb-3" />
        </div>
        <div className="tbm-hero-inner">
          <div className="tbm-hero-eyebrow"><span className="tbm-live-dot" />AI-Powered · Instant · No Design Skills · Free to Start</div>
          <h1 className="tbm-hero-h1">Free Transparent<br /><span className="tbm-h1-accent">Background Maker</span></h1>
          <p className="tbm-hero-desc">Make any image background perfectly transparent in seconds using AI. Ideal for product photos, logos, stickers, YouTube thumbnails, and social media graphics. Download as high-resolution PNG — no watermarks, full commercial rights.</p>

          {/* Transparency concept bar */}
          <div className="tbm-concept-bar" aria-label="Transparency workflow: original, AI processing, transparent PNG">
            <div className="tbm-concept-step">
              <div className="tbm-concept-img tbm-concept-before"><div className="tbm-fake-subject" /><div className="tbm-fake-bg" /></div>
              <span>Original Image</span>
            </div>
            <div className="tbm-concept-arrow" aria-hidden="true">→</div>
            <div className="tbm-concept-step">
              <div className="tbm-concept-img tbm-concept-ai"><span>AI ✂️</span></div>
              <span>AI Processing</span>
            </div>
            <div className="tbm-concept-arrow" aria-hidden="true">→</div>
            <div className="tbm-concept-step">
              <div className="tbm-concept-img tbm-concept-after"><div className="tbm-fake-subject tbm-subject-float" /></div>
              <span>Transparent PNG</span>
            </div>
          </div>

          {/* Main CTA Card */}
          <div className="tbm-cta-card">
            <div className="tbm-cta-card-top">
              <div className="tbm-cta-icon-wrap" aria-hidden="true">✂️</div>
              <div>
                <h2 className="tbm-cta-title">Make Your Image Background Transparent Now</h2>
                <p className="tbm-cta-subtitle">AI detects your subject and removes the background with pixel-perfect precision — logos, products, portraits, illustrations, and more.</p>
              </div>
            </div>
            <div className="tbm-supported-formats">
              <span className="tbm-format-label">Accepts:</span>
              {['JPEG', 'JPG', 'PNG'].map(f => <span key={f} className="tbm-format-tag">{f}</span>)}
              <span className="tbm-format-label" style={{ marginLeft: 12 }}>Outputs:</span>
              <span className="tbm-format-tag tbm-format-output">Transparent PNG</span>
            </div>
            <a href="https://scenith.in/tools/background-removal?utm_source=transparent_background_maker&utm_medium=hero_cta&utm_campaign=tbm_tool_page" className="tbm-main-cta-btn" aria-label="Open background removal tool">
              <span aria-hidden="true">✂️</span>Make Background Transparent — Free<span aria-hidden="true">→</span>
            </a>
            <div className="tbm-trust-row">
              <span>✅ No watermarks</span><span>✅ Full resolution PNG</span><span>✅ Commercial rights</span><span>✅ No install needed</span>
            </div>
          </div>

          <div className="tbm-stats-row">
            <div className="tbm-stat-item"><strong>3–8s</strong><span>Processing Time</span></div>
            <div className="tbm-stat-divider" />
            <div className="tbm-stat-item"><strong>AI Deep Learning</strong><span>Powered By</span></div>
            <div className="tbm-stat-divider" />
            <div className="tbm-stat-item"><strong>PNG Alpha</strong><span>True Transparency</span></div>
            <div className="tbm-stat-divider" />
            <div className="tbm-stat-item"><strong>8 Industries</strong><span>Covered Below</span></div>
          </div>
        </div>
      </section>

      {/* ── WHAT IS TRANSPARENT BACKGROUND ── */}
      <section className="tbm-explainer-section" id="what-is-transparent-background" aria-labelledby="explainer-h2">
        <div className="tbm-container">
          <div className="tbm-section-label">Understanding Transparency</div>
          <h2 id="explainer-h2" className="tbm-section-h2">What Is a Transparent Background &amp; Why Does It Matter?</h2>
          <div className="tbm-explainer-grid">
            <div className="tbm-explainer-text">
              <p>A <strong>transparent background</strong> means the background area of an image contains no colour data — it is completely see-through. In image editing software, transparent areas appear as a grey and white chequered pattern. On a webpage or in a design file, those areas simply reveal whatever is underneath: the page background colour, a photograph, a gradient, or any other layer.</p>
              <p>The technical mechanism is the <strong>alpha channel</strong> — a hidden layer of data stored alongside the red, green, and blue (RGB) colour channels in a PNG file. The alpha channel records the opacity of every single pixel, from fully opaque (255 = completely visible) to fully transparent (0 = completely invisible). This is why PNG preserves all this detail without compression artefacts that degrade quality.</p>
              <p>Why does this matter in practice? Because almost every professional visual context assumes you can control the background independently of the subject. A product on a white background is locked to white forever. The same product on a transparent background can be placed on any background, in any design, for any campaign — now or in the future. This flexibility is the compound value that makes transparent backgrounds worth investing in, regardless of industry or use case.</p>
            </div>
            <div className="tbm-explainer-visual">
              <div className="tbm-alpha-demo">
                <div className="tbm-alpha-label-top">Alpha Channel — Opacity Scale</div>
                <div className="tbm-alpha-row">
                  {[
                    { pct: '100%', label: 'Fully Opaque', cls: 'tbm-alpha-100' },
                    { pct: '75%',  label: 'Mostly Visible', cls: 'tbm-alpha-75' },
                    { pct: '50%',  label: 'Half Transparent', cls: 'tbm-alpha-50' },
                    { pct: '25%',  label: 'Mostly Transparent', cls: 'tbm-alpha-25' },
                    { pct: '0%',   label: 'Fully Transparent', cls: 'tbm-alpha-0' },
                  ].map(a => (
                    <div key={a.pct} className={`tbm-alpha-swatch ${a.cls}`}><span>{a.pct}</span><small>{a.label}</small></div>
                  ))}
                </div>
                <p className="tbm-alpha-caption">Alpha channel values determine pixel transparency in PNG files</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── USE CASES ── */}
      <section className="tbm-usecases-section" id="transparent-background-uses" aria-labelledby="usecase-h2">
        <div className="tbm-container">
          <div className="tbm-section-label">Who Uses This</div>
          <h2 id="usecase-h2" className="tbm-section-h2">8 Essential Uses for Transparent Background Images</h2>
          <p className="tbm-section-p">From solo creators to enterprise marketing teams, transparent background PNG files are the universal currency of professional visual design. Here is where transparent backgrounds are most critical across industries.</p>
          <div className="tbm-usecase-grid">
            {USE_CASES.map(uc => (
              <article key={uc.title} className="tbm-usecase-card">
                <div className="tbm-uc-top">
                  <span className="tbm-uc-icon" aria-hidden="true">{uc.icon}</span>
                  <span className="tbm-uc-tag" style={{ background: uc.tagColor + '22', color: uc.tagColor, borderColor: uc.tagColor + '55' }}>{uc.tag}</span>
                </div>
                <h3 className="tbm-uc-title">{uc.title}</h3>
                <p className="tbm-uc-desc">{uc.desc}</p>
              </article>
            ))}
          </div>
          <div className="tbm-uc-cta">
            <a href="https://scenith.in/tools/background-removal?utm_source=transparent_background_maker&utm_medium=usecases_cta&utm_campaign=tbm_tool_page" className="tbm-inline-cta">Remove My Background Now →</a>
          </div>
        </div>
      </section>

      {/* ── HOW TO ── */}
      <section className="tbm-howto-section" id="how-to-make-background-transparent" aria-labelledby="howto-h2">
        <div className="tbm-container">
          <div className="tbm-section-label">Step-by-Step Guide</div>
          <h2 id="howto-h2" className="tbm-section-h2">How to Make an Image Background Transparent: Complete Guide</h2>
          <p className="tbm-section-p">The complete workflow from source image to deployed transparent PNG — no technical knowledge required.</p>
          <div className="tbm-steps">
            {STEP_BY_STEP.map(step => (
              <article key={step.num} className="tbm-step">
                <div className="tbm-step-num" aria-hidden="true">{step.num}</div>
                <div className="tbm-step-body">
                  <h3>{step.title}</h3>
                  <p>{step.content}</p>
                  <div className="tbm-step-tip"><strong>💡 Pro Tip:</strong> {step.tip}</div>
                </div>
              </article>
            ))}
          </div>
          <div className="tbm-howto-cta">
            <a href="https://scenith.in/tools/background-removal?utm_source=transparent_background_maker&utm_medium=howto_cta&utm_campaign=tbm_tool_page" className="tbm-main-cta-btn">
              <span aria-hidden="true">✂️</span>Start Making Backgrounds Transparent<span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── BEFORE & AFTER ── */}
      <section className="tbm-ba-section" id="transparent-background-examples" aria-labelledby="ba-h2">
        <div className="tbm-container">
          <div className="tbm-section-label">Real Transformations</div>
          <h2 id="ba-h2" className="tbm-section-h2">Before &amp; After: What Transparent Backgrounds Unlock</h2>
          <p className="tbm-section-p">The difference between a white background and a transparent background is the difference between a locked asset and a flexible one that works everywhere.</p>
          <div className="tbm-ba-grid">
            {BEFORE_AFTER.map((item, i) => (
              <div key={i} className="tbm-ba-card">
                <div className="tbm-ba-icon" aria-hidden="true">{item.icon}</div>
                <div className="tbm-ba-before"><div className="tbm-ba-label tbm-ba-label-before">Before</div><p>{item.before}</p></div>
                <div className="tbm-ba-arrow" aria-hidden="true">↓</div>
                <div className="tbm-ba-after"><div className="tbm-ba-label tbm-ba-label-after">After</div><p>{item.after}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FILE FORMAT GUIDE ── */}
      <section className="tbm-formats-section" id="transparent-image-file-formats" aria-labelledby="formats-h2">
        <div className="tbm-container">
          <div className="tbm-section-label">File Format Guide</div>
          <h2 id="formats-h2" className="tbm-section-h2">Which File Formats Support Transparent Backgrounds?</h2>
          <p className="tbm-section-p">Not all image formats support transparency. Choosing the wrong format will destroy your transparent background. Here is the definitive guide to image format transparency support in 2026.</p>
          <div className="tbm-formats-grid">
            {FORMAT_GUIDE.map(fmt => (
              <article key={fmt.format} className="tbm-format-card" style={{ '--fmt-color': fmt.color } as React.CSSProperties}>
                <div className="tbm-fmt-header">
                  <span className="tbm-fmt-icon" aria-hidden="true">{fmt.icon}</span>
                  <span className="tbm-fmt-name">{fmt.format}</span>
                  <span className="tbm-fmt-badge" style={{ background: fmt.supports ? 'rgba(16,185,129,0.12)' : 'rgba(239,68,68,0.12)', color: fmt.supports ? '#10b981' : '#ef4444' }}>{fmt.supports ? 'Transparency ✓' : 'No Transparency ✗'}</span>
                </div>
                <div className="tbm-fmt-best-for"><strong>Best for:</strong> {fmt.best_for}</div>
                <p className="tbm-fmt-notes">{fmt.notes}</p>
              </article>
            ))}
          </div>
          <div className="tbm-format-summary"><strong>Bottom line:</strong> Always download and share transparent background images as <strong>PNG</strong>. For web performance, convert to <strong>WebP</strong>. Never use JPEG for transparent assets.</div>
        </div>
      </section>

      {/* ── INDUSTRY DEEP DIVE ── */}
      <section className="tbm-industry-section" id="transparent-background-by-industry" aria-labelledby="industry-h2">
        <div className="tbm-container">
          <div className="tbm-section-label">Industry Deep Dive</div>
          <h2 id="industry-h2" className="tbm-section-h2">Transparent Backgrounds Across Industries: Why Every Sector Needs Them</h2>
          <div className="tbm-industry-blocks">
            {INDUSTRY_SECTIONS.map(sec => (
              <article key={sec.industry} className="tbm-industry-block">
                <h3 className="tbm-industry-title"><span aria-hidden="true">{sec.icon}</span> {sec.industry}</h3>
                <div className="tbm-industry-content">{sec.paragraphs.map((p, i) => <p key={i}>{p}</p>)}</div>
              </article>
            ))}
          </div>
          <div className="tbm-industry-cta">
            <a href="https://scenith.in/tools/background-removal?utm_source=transparent_background_maker&utm_medium=industry_cta&utm_campaign=tbm_tool_page" className="tbm-main-cta-btn">
              <span aria-hidden="true">✂️</span>Remove Background &amp; Get Transparent PNG<span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section className="tbm-compare-section" id="transparent-background-tool-comparison" aria-labelledby="compare-h2">
        <div className="tbm-container">
          <div className="tbm-section-label">Method Comparison</div>
          <h2 id="compare-h2" className="tbm-section-h2">How to Make a Background Transparent: Every Method Compared (2026)</h2>
          <p className="tbm-section-p">There are multiple ways to remove a background and create a transparent PNG. Here is an honest, side-by-side comparison of every available method.</p>
          <div className="tbm-compare-wrapper">
            <table className="tbm-compare-table" aria-label="Comparison of transparent background creation methods">
              <thead>
                <tr><th>Feature</th><th className="tbm-col-scenith">Scenith AI</th><th>Photoshop</th><th>remove.bg</th><th>Canva</th><th>Manual Masking</th></tr>
              </thead>
              <tbody>
                {[
                  ['Speed', '✅ 3–8 sec', '⚠️ 5–30 min', '✅ ~5 sec', '✅ ~5 sec', '❌ 30–120 min'],
                  ['Skill Required', '✅ None', '❌ Advanced', '✅ None', '✅ None', '❌ Expert'],
                  ['Cost (India)', '✅ $9/mo+', '❌ ₹1,675/mo', '⚠️ ~₹800/50 imgs', '⚠️ ₹899/mo', '✅ Free (time cost)'],
                  ['Edge Quality', '✅ AI-precise', '✅ Expert quality', '✅ Good', '⚠️ Moderate', '✅ Perfect (expert)'],
                  ['Hair / Fine Detail', '✅ Good', '✅ Excellent', '✅ Good', '⚠️ Variable', '✅ Excellent'],
                  ['Integrated Editor', '✅ Yes', '✅ Yes', '❌ No', '✅ Limited', '❌ Depends'],
                  ['Commercial Rights', '✅ All plans', '✅ Yes', '✅ Paid plans', '⚠️ Paid plans', '✅ Yes'],
                  ['No Watermark', '✅ All plans', '✅ Yes', '⚠️ Paid only', '⚠️ Paid only', '✅ Yes'],
                ].map(([feat, ...vals]) => (
                  <tr key={feat}><td>{feat}</td>{vals.map((v, i) => <td key={i} className={i === 0 ? 'tbm-col-scenith' : ''}>{v}</td>)}</tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="tbm-faq-section" id="transparent-background-faq" aria-labelledby="faq-h2">
        <div className="tbm-container">
          <div className="tbm-section-label">FAQ</div>
          <h2 id="faq-h2" className="tbm-section-h2">Frequently Asked Questions About Transparent Backgrounds</h2>
          <div className="tbm-faq-grid">
            {FAQ_ITEMS.map(item => (
              <article key={item.q} className="tbm-faq-item">
                <h3 className="tbm-faq-q">{item.q}</h3>
                <p className="tbm-faq-a">{item.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELATED TOOLS ── */}
      <section className="tbm-related-section" aria-labelledby="related-h2">
        <div className="tbm-container">
          <h2 id="related-h2" className="tbm-section-h2" style={{ textAlign: 'center', marginBottom: '2rem' }}>Complete Your Image Editing Workflow</h2>
          <div className="tbm-related-grid">
            {[
              { href: 'https://scenith.in/tools/image-editing', icon: '🖼️', title: 'Free Image Editor', desc: 'Add new backgrounds, text, and effects to your transparent PNGs. Full design toolkit, free.', cta: 'Open Editor →' },
              { href: 'https://scenith.in/tools/ai-image-generation', icon: '🎨', title: 'AI Image Generator', desc: 'Generate a custom background image with AI, then layer your transparent subject on top.', cta: 'Generate Backgrounds →' },
              { href: 'https://scenith.in/tools/ai-voice-generation', icon: '🎤', title: 'AI Voice Generator', desc: 'Add professional voiceovers to product videos and content featuring your transparent assets.', cta: 'Try Voice Gen →' },
            ].map(card => (
              <a key={card.title} href={card.href} className="tbm-related-card">
                <span className="tbm-related-icon" aria-hidden="true">{card.icon}</span>
                <h3>{card.title}</h3><p>{card.desc}</p>
                <span className="tbm-related-link">{card.cta}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="tbm-final-cta" id="get-started" aria-labelledby="final-h2">
        <div className="tbm-final-cta-bg" aria-hidden="true">
          <div className="tbm-final-orb-1" /><div className="tbm-final-orb-2" /><div className="tbm-checker-subtle" />
        </div>
        <div className="tbm-final-cta-inner">
          <div className="tbm-final-badge">✂️ AI Transparent Background Maker</div>
          <h2 id="final-h2" className="tbm-final-h2">One Click. Pure Transparency.<br /><span className="tbm-final-accent">Professional Results.</span></h2>
          <p className="tbm-final-desc">No Photoshop. No expensive subscriptions. No design degree needed. Upload your image and walk away with a flawless transparent PNG in under 10 seconds. Free to start, commercial rights included on all plans.</p>
          <a href="https://scenith.in/tools/background-removal?utm_source=transparent_background_maker&utm_medium=final_cta&utm_campaign=tbm_tool_page" className="tbm-final-btn" aria-label="Make image background transparent for free">
            <span aria-hidden="true">✂️</span>Make Background Transparent — Free<span aria-hidden="true">→</span>
          </a>
          <div className="tbm-final-trust">
            <span>✅ No watermark</span><span>✅ Full resolution PNG</span><span>✅ Commercial use</span><span>✅ Free image editor included</span><span>✅ Plans from $9/month</span>
          </div>
        </div>
      </section>
    </div>
  );
}