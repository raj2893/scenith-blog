'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '../../../../../styles/tools/FreeBackgroundRemoverOnline.css';

const TOOL_URL =
  'https://scenith.in/tools/background-removal?utm_source=free-bg-remover-online&utm_medium=cta-button&utm_campaign=bg-removal-seo-lp';

const BEFORE_AFTER_EXAMPLES = [
  {
    label: 'Product Photography',
    before: 'Cluttered shelf background',
    after: 'Clean white / transparent',
    icon: '🛍️',
    stat: '+40% CTR on marketplaces',
  },
  {
    label: 'Portrait & Headshots',
    before: 'Messy room / outdoor',
    after: 'Professional studio-look',
    icon: '🧑‍💼',
    stat: '3× more LinkedIn responses',
  },
  {
    label: 'Logo & Branding',
    before: 'White box around logo',
    after: 'Transparent, overlay-ready',
    icon: '🎨',
    stat: 'Works on any background',
  },
  {
    label: 'Social Media Graphics',
    before: 'Flat, static photo',
    after: 'Dynamic composite design',
    icon: '📱',
    stat: '2.5× higher engagement',
  },
];

const COMPETITOR_DATA = [
  {
    tool: 'Scenith (Free)',
    price: '₹0 / $0',
    hd: '✅ Full HD',
    watermark: '❌ None',
    limit: '✅ Unlimited*',
    signup: '❌ Not Required',
    speed: '⚡ ~5 seconds',
    highlight: true,
  },
  {
    tool: 'Remove.bg',
    price: '$0.20 / image HD',
    hd: '❌ Low-res free',
    watermark: '⚠️ Free = watermark',
    limit: '1 free preview/day',
    signup: '✅ Required',
    speed: '~5 seconds',
    highlight: false,
  },
  {
    tool: 'Canva Pro BG Remover',
    price: '$12.99/mo',
    hd: '✅ HD',
    watermark: '❌ None',
    limit: '⚠️ Canva-only export',
    signup: '✅ Required',
    speed: '~4 seconds',
    highlight: false,
  },
  {
    tool: 'Adobe Express',
    price: '$9.99/mo',
    hd: '✅ HD',
    watermark: '❌ None',
    limit: '⚠️ Plan limited',
    signup: '✅ Required',
    speed: '~6 seconds',
    highlight: false,
  },
];

const FAQS = [
  {
    q: 'Is this background remover truly free — no hidden charges?',
    a: 'Yes. Sceniths free background remover costs ₹0 / $0 for every removal. No credit card, no trial period, no surprise charges. You get full-resolution PNG downloads with zero watermarks, usable commercially. Theres no "freemium bait" — what you see is genuinely free.',
  },
  {
    q: 'Do I need to create an account or sign up?',
    a: 'No account is required to start removing backgrounds immediately. Just visit the tool, upload your image, and download your transparent PNG. Optional sign-up unlocks usage history and higher monthly quotas if you process large volumes.',
  },
  {
    q: 'Which image formats does the tool accept?',
    a: 'The tool accepts JPG, JPEG, and PNG files up to 30MB per image. For best AI accuracy, use images between 500×500 px and 4000×4000 px. Both portrait and landscape orientations work equally well.',
  },
  {
    q: 'How does the AI remove backgrounds without Photoshop?',
    a: 'The underlying model is a convolutional neural network (CNN) trained on tens of millions of diverse images. It performs pixel-level semantic segmentation — classifying each pixel as either "subject" or "background" — and generates an alpha mask that removes the background while preserving complex edges like hair, fur, and transparent glass.',
  },
  {
    q: 'Can I use the transparent PNG images commercially?',
    a: 'Yes. Every image processed through Scenith comes with full commercial use rights. Use them for Amazon listings, Shopify product pages, ad creatives, client deliverables, or any revenue-generating project. No attribution, no royalties, no licensing hassle.',
  },
  {
    q: 'How fast is the background removal?',
    a: 'Most images are fully processed and ready to download in under 5 seconds. Processing time depends on image resolution and current server load, but the average across 50,000+ users is 3.8 seconds from upload to download.',
  },
  {
    q: 'Does the free tool add a watermark to the output?',
    a: 'Absolutely not. Unlike remove.bg which watermarks free-tier downloads, Scenith delivers clean, watermark-free transparent PNGs on every single removal — even on the free plan. What you download is what you use.',
  },
  {
    q: 'What output format will I receive?',
    a: 'Youll receive a high-quality PNG file with a transparent alpha channel. PNG is the industry-standard format for transparent images and is compatible with every design tool, CMS, social media platform, and e-commerce marketplace.',
  },
  {
    q: 'Can the AI handle hair, fur, and complex edges?',
    a: 'Yes — this is where AI outperforms manual editing. The model is specifically fine-tuned on portraits with fine hair, pets with thick fur, product photos with reflective surfaces, and objects with transparent or semi-transparent regions. Results rival a skilled Photoshop editor.',
  },
  {
    q: 'Is my uploaded image stored or shared?',
    a: 'No. Images are processed in-memory on secure servers and deleted immediately after your download is ready. Scenith does not store, share, train on, or monetize your uploaded images in any way. Your product photos and personal images stay private.',
  },
  {
    q: 'What\'s the difference between this page and the main background removal tool?',
    a: 'This page is an educational resource covering everything about free online background removal — how it works, who it\'s for, comparison data, and professional tips. The actual one-click AI removal tool lives at scenith.in/tools/background-removal, and the big button at the top takes you directly there.',
  },
  {
    q: 'Can I process product photos for Amazon and Flipkart listings?',
    a: 'Yes — this is one of the most popular use cases. Amazon requires main product images on pure white backgrounds; Flipkart recommends clean, distraction-free images. Scenith\'s AI removes the original background cleanly, and you can then add a white background in any editor. Thousands of Indian sellers use this workflow daily.',
  },
];

const STEP_DATA = [
  {
    num: '01',
    title: 'Upload Your Photo',
    desc: 'Drag & drop or click to upload. Supports JPG, PNG, JPEG up to 30MB. Works on desktop, tablet, and mobile.',
    icon: '⬆️',
  },
  {
    num: '02',
    title: 'AI Detects Your Subject',
    desc: 'Neural network analyses pixel patterns, edges, and depth in real time — identifying your subject with human-level precision.',
    icon: '🧠',
  },
  {
    num: '03',
    title: 'Background Removed Instantly',
    desc: 'The AI generates a pixel-perfect alpha mask and removes the background in under 5 seconds — no manual touching up needed.',
    icon: '✂️',
  },
  {
    num: '04',
    title: 'Download Free Transparent PNG',
    desc: 'One-click download of your full-resolution, watermark-free PNG. Ready to use in any project immediately.',
    icon: '📥',
  },
];

const USE_CASE_DEEP = [
  {
    icon: '🛒',
    title: 'Amazon & Flipkart Sellers',
    headline: 'Turn Raw Product Shots into Marketplace-Ready Images — in Seconds',
    body: `Amazon mandates that main product images sit on a pure white background (RGB 255,255,255). Violate this rule and your listing risks suppression — killing your visibility and ranking overnight. Meanwhile, hiring a photo studio for every SKU costs ₹200–₹800 per image. With hundreds or thousands of products, that's a budget most small sellers simply don't have.

Scenith's free background remover lets you photograph your product on any surface — a table, a bedsheet, a wall — and convert it to marketplace-compliant white-background imagery in under 5 seconds. No studio, no photographer, no Photoshop subscription. Just upload, remove, and list.

Sellers on Amazon India, Flipkart, Meesho, and Myntra use this workflow to shoot product photos themselves using a smartphone and process them instantly. The result is indistinguishable from professional studio photography — at a fraction of the cost.`,
    stats: ['Amazon requires white BG for main image', '₹0 vs ₹800/image studio cost', 'Works with smartphone photos'],
  },
  {
    icon: '🎨',
    title: 'Graphic Designers & Agencies',
    headline: 'Eliminate the Most Tedious Part of Your Workflow',
    body: `Ask any graphic designer what their most time-consuming, mentally draining task is — and "cutting out backgrounds" will come up repeatedly. A single complex product or portrait can take 20–45 minutes in Photoshop using the Pen Tool or Refine Edge. At agency billing rates, that's ₹500–₹2,000 of billable time per image.

AI background removal collapses that 45 minutes to 5 seconds. Designers can now focus creative energy on what matters — layout, typography, colour theory, client communication — instead of pixel-perfect masking.

Even for complex work, using AI as a first pass and then refining in Photoshop cuts total time by 80–90%. Many design agencies now use Scenith as the standard first step in any image composite workflow, regardless of complexity.`,
    stats: ['45 min → 5 sec per image', '80–90% time saved on compositing', 'Perfect first-pass for Photoshop refinement'],
  },
  {
    icon: '📱',
    title: 'Social Media Creators & Influencers',
    headline: 'Create Scroll-Stopping Content Without Expensive Equipment',
    body: `Instagram Reels, YouTube thumbnails, Pinterest pins, LinkedIn banners — every platform rewards visual content that stands out. The challenge for independent creators is producing "brand-level" visuals without a production team or studio budget.

Transparent-background cutouts are the foundational element of almost every professional social media template. They let you drop your product or portrait into any scene, add custom backgrounds, overlay text, and create composite designs that look editorial and polished.

With Scenith's free remover, a fashion creator can shoot an outfit in their bedroom and paste it into a luxury backdrop. A food blogger can isolate a dish and place it on a clean marble texture. A tech reviewer can cut out a gadget and put it on a gradient that matches their channel aesthetic. The creative possibilities are unlimited — and the tool is free.`,
    stats: ['Thumbnails = 90% of click decisions', 'No studio lighting needed', 'Works for Reels, YouTube, Pinterest'],
  },
  {
    icon: '🏢',
    title: 'Small Businesses & Startups',
    headline: 'Professional Brand Imagery on a Bootstrap Budget',
    body: `Early-stage businesses face an impossible choice: spend limited capital on professional photography and design, or launch with amateur-looking visuals that undermine customer trust. Research consistently shows that visual quality is one of the top three factors influencing purchasing decisions online.

AI background removal breaks this dilemma. A food startup can photograph their packaging on a kitchen counter and produce catalog-quality imagery. A clothing brand can shoot products on mannequins and remove the stand. A home decor business can isolate products from lifestyle photos for clean category pages.

For pitch decks, marketing presentations, and website hero images, clean product cutouts signal professionalism and attention to detail — qualities investors and customers both respond to positively. Scenith's free tool gives bootstrapped startups access to image quality that was previously only available to well-funded brands.`,
    stats: ['Photography = #1 conversion factor', 'Bootstrap to brand-quality imagery', 'No design team required'],
  },
  {
    icon: '👩‍💻',
    title: 'Freelancers & Remote Workers',
    headline: 'Better Profile Photos and Client Deliverables — Instantly',
    body: `Your LinkedIn profile photo is the most-viewed piece of your personal brand. Studies show that profiles with professional-looking headshots receive up to 14× more profile views and 36 more messages. But getting a proper headshot means scheduling a photographer, traveling to a studio, and paying ₹3,000–₹10,000 for a session.

Scenith's AI background remover lets you turn a good selfie or a well-lit photo taken by a friend into a professional-quality headshot. Remove the distracting background, and place yourself on a clean neutral colour that reads as "studio-quality." The upgrade is dramatic and takes 10 seconds.

For freelancers delivering client work, the tool is equally valuable — quickly cleaning up product images, creating transparent assets for web delivery, or prepping photos for client presentations without needing Photoshop access.`,
    stats: ['14× more LinkedIn profile views', 'Remote-first, no studio needed', 'Turn selfies into professional headshots'],
  },
];

export default function FreeBackgroundRemoverClient() {
  const [activeUseCase, setActiveUseCase] = useState(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToHero = () => {
    heroRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fbr-page">
      {/* ── Sticky top bar ── */}
      <div className={`fbr-sticky-bar ${scrolled ? 'visible' : ''}`}>
        <span className="fbr-sticky-text">🪄 Free AI Background Remover — No signup, no watermark</span>
        <a href={TOOL_URL} className="fbr-sticky-cta">Remove Background Free →</a>
      </div>

      {/* ── Breadcrumb ── */}
      <nav aria-label="Breadcrumb" className="fbr-breadcrumb">
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
            <span itemProp="name">Free Background Remover Online</span>
            <meta itemProp="position" content="3" />
          </li>
        </ol>
      </nav>

      {/* ══════════════════════════════════
          HERO
      ══════════════════════════════════ */}
      <section className="fbr-hero" ref={heroRef} id="hero" role="main">
        <div className="fbr-hero-glow" aria-hidden="true" />
        <div className="fbr-container">
          <div className="fbr-hero-badge">
            <span className="fbr-badge-dot" />
            <span>AI-Powered · 2026's #1 Free Tool</span>
          </div>

          <h1 className="fbr-hero-h1">
            Free Background Remover Online —{' '}
            <span className="fbr-gradient-text">Instant Transparent PNG</span>{' '}
            in Under 5 Seconds
          </h1>

          <p className="fbr-hero-sub">
            The smartest free online background remover that handles hair, fur, glass, and complex edges with pixel-perfect AI precision.{' '}
            <strong>No Photoshop. No signup. No watermark. No hidden costs — ever.</strong> Trusted by 50,000+ product photographers, designers, e-commerce sellers, and content creators worldwide.
          </p>

          {/* ── Primary CTA ── */}
          <a href={TOOL_URL} className="fbr-hero-cta" aria-label="Open the free background remover tool">
            <span className="fbr-cta-sparkle" aria-hidden="true">✦</span>
            <span>Remove Background Free — Start Now</span>
            <span className="fbr-cta-arrow">→</span>
          </a>

          <div className="fbr-hero-trust">
            <span>✅ 100% Free</span>
            <span>⚡ 5-Second Result</span>
            <span>🚫 Zero Watermarks</span>
            <span>💼 Commercial Rights</span>
            <span>🔒 Private & Secure</span>
          </div>

          {/* ── Before / After Visual Highlights ── */}
          <div className="fbr-ba-strip">
            {BEFORE_AFTER_EXAMPLES.map((ex) => (
              <div key={ex.label} className="fbr-ba-card">
                <span className="fbr-ba-icon">{ex.icon}</span>
                <strong>{ex.label}</strong>
                <div className="fbr-ba-flow">
                  <span className="fbr-ba-before">{ex.before}</span>
                  <span className="fbr-ba-arrow">→</span>
                  <span className="fbr-ba-after">{ex.after}</span>
                </div>
                <div className="fbr-ba-stat">{ex.stat}</div>
              </div>
            ))}
          </div>

          {/* ── Hero Screenshot ── */}
          <figure className="fbr-hero-fig">
            <Image
              src="/images/REMOVEBGSS.png"
              alt="Scenith free background remover online — before and after showing AI removal of cluttered background from a product photo, resulting in a clean transparent PNG"
              width={860}
              height={440}
              priority
              className="fbr-hero-img"
            />
            <figcaption className="fbr-sr-only">
              Screenshot of Scenith AI free background remover showing a product photo with background removed and transparent PNG ready for download
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ══════════════════════════════════
          DEFINITION / FEATURED SNIPPET
      ══════════════════════════════════ */}
      <section className="fbr-definition-section" aria-labelledby="definition-title">
        <div className="fbr-container">
          <div className="fbr-definition-box">
            <h2 id="definition-title" className="fbr-visually-hidden">What is a free background remover online?</h2>
            <p className="fbr-definition-text">
              A <strong>free background remover online</strong> is a web-based AI tool that automatically detects and erases the background from any photo, producing a transparent PNG file — without requiring Photoshop, design skills, a subscription, or any software installation. Modern tools use deep learning and semantic segmentation to achieve results in under 5 seconds that would take a professional designer 20–45 minutes to recreate manually.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          HOW IT WORKS — 4 STEPS
      ══════════════════════════════════ */}
      <section className="fbr-steps-section" id="how-it-works" aria-labelledby="steps-title">
        <div className="fbr-container">
          <div className="fbr-section-header">
            <h2 id="steps-title">How the Free Background Remover Works — 4 Steps</h2>
            <p>From photo upload to transparent PNG in under 5 seconds. No software, no skill, no cost.</p>
          </div>
          <div className="fbr-steps-grid">
            {STEP_DATA.map((s) => (
              <div key={s.num} className="fbr-step-card">
                <div className="fbr-step-num">{s.num}</div>
                <div className="fbr-step-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="fbr-steps-cta-wrap">
            <a href={TOOL_URL} className="fbr-mid-cta">
              Try It Free — Remove Your First Background Now →
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          DEEP DIVE: THE TECHNOLOGY
      ══════════════════════════════════ */}
      <section className="fbr-tech-section" id="technology" aria-labelledby="tech-title">
        <div className="fbr-container">
          <div className="fbr-section-header">
            <h2 id="tech-title">The AI Technology Behind Free Online Background Removal</h2>
            <p>
              Understanding <em>how</em> AI removes backgrounds helps you use the tool smarter and get better results.
            </p>
          </div>

          <div className="fbr-tech-grid">
            <div className="fbr-tech-main">
              <h3>What Makes Modern AI Background Removal Different from Older Tools</h3>
              <p>
                If you tried background removal tools five years ago and found them frustrating — cutting off hair, leaving fringe artifacts, struggling with complex products — the experience today is radically different. The difference is the shift from heuristic algorithms to deep neural networks.
              </p>
              <p>
                Older tools used colour-matching and edge-detection heuristics. They worked reasonably well when the subject and background were very different in colour (e.g., a red apple on a white table) but failed completely with complex scenes: people with flyaway hair, products with reflective surfaces, animals with fur, or images where the subject blends with the background.
              </p>
              <p>
                Modern AI systems — including the one powering Scenith — are <strong>convolutional neural networks (CNNs)</strong> trained on tens of millions of diverse, labelled images. They don't look for colour differences; they <em>understand</em> what's in the image. The model recognises faces, bodies, products, animals, and objects as distinct entities and builds a precise pixel-level mask separating the subject from everything behind it.
              </p>
              <p>
                The result is that modern AI handles scenarios that required painstaking manual Photoshop work: individual strands of hair blowing in the wind, a sheer fabric overlay on a dress, a glass bottle with a semi-transparent base, a white sneaker on a white table. The AI sees context, not just colour — and that changes everything.
              </p>

              <h3>Semantic Segmentation: The Core Process Explained</h3>
              <p>
                The technical process behind AI background removal is called <strong>semantic segmentation</strong> — a computer vision task where every pixel in an image is classified into a category. In background removal, there are two categories: foreground (subject) and background.
              </p>
              <p>
                Here's what happens in those 5 seconds after you click "Remove Background":
              </p>
              <ol className="fbr-numbered-list">
                <li><strong>Image preprocessing:</strong> Your photo is resized and normalised for the neural network's input requirements. Colour channels are standardised to ensure consistent model performance.</li>
                <li><strong>Feature extraction:</strong> The CNN passes the image through multiple convolutional layers, each detecting increasingly abstract features — edges → textures → shapes → objects.</li>
                <li><strong>Contextual understanding:</strong> Deep layers in the network understand object context. It knows a hand holding a product is part of the foreground, while the wall behind is background — even if the wall colour matches a sleeve.</li>
                <li><strong>Mask generation:</strong> The network outputs a probability map — for each pixel, a confidence score between 0 (background) and 1 (foreground). High-frequency edges like hair get refined with specialised edge-refinement modules.</li>
                <li><strong>Alpha channel creation:</strong> The probability map is converted into an alpha channel mask and applied to your original image. Pixels in the background become fully transparent; subject pixels remain fully opaque; edge pixels are blended for natural anti-aliasing.</li>
                <li><strong>PNG encoding and delivery:</strong> The result is encoded as a PNG file (the only common image format supporting transparency) and served to your browser for download.</li>
              </ol>

              <h3>Why PNG for Transparent Backgrounds — and Why Not JPG?</h3>
              <p>
                This is one of the most common questions from users new to background removal. JPG (JPEG) is a lossy compression format that does not support transparency at all. When you save a transparent image as a JPG, the transparent areas are automatically filled with white (or black, depending on the software). The transparency information is permanently lost.
              </p>
              <p>
                PNG (Portable Network Graphics) uses lossless compression and fully supports an alpha channel — the fourth channel (in addition to Red, Green, Blue) that stores transparency data per pixel. This is why every AI background remover, including Scenith, outputs PNG files. When you place a transparent PNG on a coloured or textured background in Canva, PowerPoint, Shopify, or Instagram, the subject appears naturally integrated without any white box around it.
              </p>
            </div>

            <div className="fbr-tech-sidebar">
              <div className="fbr-tech-card">
                <h4>🧠 Core AI Technique</h4>
                <p>Convolutional Neural Networks (CNN) + Semantic Segmentation</p>
              </div>
              <div className="fbr-tech-card">
                <h4>⏱️ Average Processing Time</h4>
                <p>3.8 seconds (across 50,000+ users)</p>
              </div>
              <div className="fbr-tech-card">
                <h4>📐 Best Input Resolution</h4>
                <p>500×500 px to 4000×4000 px for optimal speed + quality balance</p>
              </div>
              <div className="fbr-tech-card">
                <h4>🖼️ Output Format</h4>
                <p>Transparent PNG with alpha channel — universally compatible</p>
              </div>
              <div className="fbr-tech-card">
                <h4>💪 Hardest Subjects It Handles</h4>
                <p>Fine hair, fur, glass, mesh fabric, transparent objects, reflective products</p>
              </div>
              <div className="fbr-tech-card accent">
                <h4>🆓 Cost</h4>
                <p>₹0 / $0 — Free forever, no watermark, no signup required</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          USE CASES — DEEP DIVE
      ══════════════════════════════════ */}
      <section className="fbr-usecases-section" id="use-cases" aria-labelledby="uc-title">
        <div className="fbr-container">
          <div className="fbr-section-header">
            <h2 id="uc-title">Who Uses a Free Background Remover Online — and Why</h2>
            <p>
              From solo sellers to large agencies, background removal is one of the most universally needed image editing tasks. Here's how different professionals use it.
            </p>
          </div>

          <div className="fbr-uc-layout">
            {/* Tab nav */}
            <nav className="fbr-uc-tabs" aria-label="Use case categories">
              {USE_CASE_DEEP.map((uc, i) => (
                <button
                  key={uc.title}
                  className={`fbr-uc-tab ${activeUseCase === i ? 'active' : ''}`}
                  onClick={() => setActiveUseCase(i)}
                  aria-selected={activeUseCase === i}
                >
                  <span>{uc.icon}</span>
                  <span>{uc.title}</span>
                </button>
              ))}
            </nav>

            {/* Content */}
            <div className="fbr-uc-content">
              <div className="fbr-uc-stats">
                {USE_CASE_DEEP[activeUseCase].stats.map((s) => (
                  <div key={s} className="fbr-uc-stat">{s}</div>
                ))}
              </div>
              <h3>{USE_CASE_DEEP[activeUseCase].headline}</h3>
              {USE_CASE_DEEP[activeUseCase].body.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
              <a href={TOOL_URL} className="fbr-uc-cta">
                Try Free Background Remover →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          COMPETITOR COMPARISON TABLE
      ══════════════════════════════════ */}
      <section className="fbr-compare-section" id="comparison" aria-labelledby="compare-title">
        <div className="fbr-container">
          <div className="fbr-section-header">
            <h2 id="compare-title">Free Background Remover Comparison — Scenith vs Remove.bg vs Canva vs Adobe</h2>
            <p>See exactly how Scenith stacks up against the most popular background removal tools in 2026.</p>
          </div>
          <div className="fbr-table-wrap">
            <table className="fbr-compare-table" role="table">
              <thead>
                <tr>
                  <th scope="col">Feature</th>
                  {COMPETITOR_DATA.map((c) => (
                    <th key={c.tool} scope="col" className={c.highlight ? 'highlight-col' : ''}>
                      {c.tool}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { label: '💰 Price', key: 'price' },
                  { label: '🖼️ HD Output', key: 'hd' },
                  { label: '🚫 Watermark', key: 'watermark' },
                  { label: '📊 Usage Limit', key: 'limit' },
                  { label: '🔑 Signup Required', key: 'signup' },
                  { label: '⚡ Speed', key: 'speed' },
                ].map((row) => (
                  <tr key={row.label}>
                    <td className="fbr-row-label">{row.label}</td>
                    {COMPETITOR_DATA.map((c) => (
                      <td key={c.tool} className={c.highlight ? 'highlight-col' : ''}>
                        {(c as unknown as Record<string, string>)[row.key]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="fbr-table-note">* Free plan includes generous monthly quota. No watermarks on any tier.</p>
        </div>
      </section>

      {/* ══════════════════════════════════
          PROFESSIONAL TIPS
      ══════════════════════════════════ */}
      <section className="fbr-tips-section" id="pro-tips" aria-labelledby="tips-title">
        <div className="fbr-container">
          <div className="fbr-section-header">
            <h2 id="tips-title">7 Pro Tips to Get Perfect Background Removal Results Every Time</h2>
            <p>
              AI is powerful, but good inputs produce better outputs. These professional photographer-approved tips will maximise your removal quality.
            </p>
          </div>

          <div className="fbr-tips-grid">
            {[
              {
                n: '01',
                title: 'Shoot Against a Contrasting Background',
                desc: 'When you have control over the shoot, photograph products and subjects against a background that contrasts with their main colour. A navy blue shirt photographs better against a light grey or white wall than a medium blue one. The more distinct the subject–background boundary, the cleaner the AI cut.',
              },
              {
                n: '02',
                title: 'Use Even, Diffused Lighting',
                desc: 'Harsh shadows from direct sunlight or a single light source confuse AI segmentation models. Shadows that fall on the background are usually fine, but shadows that spill across the subjects edges create ambiguous boundaries. Use natural window light, softboxes, or a simple reflector to achieve even illumination.',
              },
              {
                n: '03',
                title: 'Photograph at the Highest Available Resolution',
                desc: 'AI background removal quality scales with image resolution. A 4000×3000 px photo processed by the AI and then scaled down will have sharper, cleaner edges than a 1000×750 px photo processed directly. Use your smartphones maximum resolution or your DSLRs highest quality setting.',
              },
              {
                n: '04',
                title: 'Avoid Busy or Patterned Backgrounds for Complex Subjects',
                desc: 'For subjects with intricate edges — curly hair, lace fabric, foliage — a plain, single-colour background helps the AI distinguish foreground from background accurately. Busy wallpaper or textured surfaces with similar colour to your subject will produce less precise results.',
              },
              {
                n: '05',
                title: 'Check and Zoom In on Edge Quality Before Download',
                desc: 'Before downloading, zoom into the transparent PNG preview at 100% zoom and check hair, fabric edges, and fine details. Look for fringing (the original background colour bleeding into the edge pixels) or missing detail. If you spot issues, the tool lets you regenerate with a different processing mode.',
              },
              {
                n: '06',
                title: 'Add a New Background to Test the Result',
                desc: 'The true test of a clean transparent PNG is placing it on a coloured or contrasting background. Import your PNG into Canva, Google Slides, or any basic editor and add a solid colour background. Edge quality issues that are invisible on white become obvious on dark or vibrant backgrounds — good to catch before client delivery.',
              },
              {
                n: '07',
                title: 'Combine with Image Editing for Maximum Impact',
                desc: 'Background removal is the starting point, not the end result. After removing the background, import your transparent PNG into Sceniths free image editor to add a gradient background, colour overlay, drop shadow, brand watermark, or text. The combination of background removal + basic editing produces results that look fully professional.',
              },
            ].map((tip) => (
              <article key={tip.n} className="fbr-tip-card">
                <div className="fbr-tip-num">{tip.n}</div>
                <h3>{tip.title}</h3>
                <p>{tip.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          INDUSTRY USE CASE: E-COMMERCE
      ══════════════════════════════════ */}
      <section className="fbr-ecom-section" id="ecommerce" aria-labelledby="ecom-title">
        <div className="fbr-container">
          <div className="fbr-ecom-grid">
            <div className="fbr-ecom-text">
              <h2 id="ecom-title">
                Why Every E-Commerce Seller Needs a Free Background Remover in 2026
              </h2>
              <p>
                India's e-commerce market crossed $100 billion in 2023 and is projected to hit $350 billion by 2030. The majority of this growth is coming from first-time sellers — small business owners, home entrepreneurs, and artisans listing products on Amazon, Flipkart, Meesho, and Nykaa.
              </p>
              <p>
                The single biggest visual mistake new sellers make is listing products with distracting, inconsistent backgrounds. Research from major marketplaces consistently shows that product images account for up to 90% of the click decision for most categories. A clean, professionally-removed background is the foundation of every high-converting product listing.
              </p>
              <h3>Platform-Specific Requirements You Must Know</h3>
              <ul className="fbr-platform-list">
                <li>
                  <strong>Amazon India:</strong> Main product image must be on a pure white background (RGB 255,255,255). Product must fill 85% or more of the image frame. JPG or TIFF only for listing (convert transparent PNG to white-background JPG after removal).
                </li>
                <li>
                  <strong>Flipkart:</strong> Recommends white or very light grey backgrounds for all catalogue images. Cluttered backgrounds are flagged in their quality score algorithm and reduce search visibility.
                </li>
                <li>
                  <strong>Meesho:</strong> No strict background rule, but seller analytics show products with clean backgrounds get 2–3× higher click rates in their feed algorithm.
                </li>
                <li>
                  <strong>Myntra / Nykaa:</strong> Fashion and beauty products are required to be shot on neutral or white backgrounds. Lifestyle images with models require professional quality.
                </li>
                <li>
                  <strong>Shopify / WooCommerce:</strong> No platform rule, but visual consistency across your store — achieved through uniform background treatment — is a proven conversion rate optimisation tactic.
                </li>
              </ul>
            </div>
            <div className="fbr-ecom-visual">
              <div className="fbr-ecom-stats-stack">
                <div className="fbr-ecom-stat-block">
                  <div className="fbr-stat-big">90%</div>
                  <div className="fbr-stat-desc">of the click decision on marketplaces is determined by the product image</div>
                </div>
                <div className="fbr-ecom-stat-block">
                  <div className="fbr-stat-big">3×</div>
                  <div className="fbr-stat-desc">higher add-to-cart rate for products with clean white/transparent backgrounds</div>
                </div>
                <div className="fbr-ecom-stat-block">
                  <div className="fbr-stat-big">₹0</div>
                  <div className="fbr-stat-desc">cost to achieve studio-quality backgrounds with Scenith's free AI tool</div>
                </div>
                <a href={TOOL_URL} className="fbr-ecom-cta">
                  Create Product-Ready Images Free →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          WHAT YOU CAN BUILD AFTER REMOVAL
      ══════════════════════════════════ */}
      <section className="fbr-after-section" id="after-removal" aria-labelledby="after-title">
        <div className="fbr-container">
          <div className="fbr-section-header">
            <h2 id="after-title">What to Do After Removing a Background — Creative Ideas & Workflows</h2>
            <p>
              A transparent PNG is the most versatile creative asset in digital design. Here's what experienced creators do next.
            </p>
          </div>
          <div className="fbr-after-grid">
            {[
              {
                icon: '🟣',
                title: 'Add a Gradient or Colour Background',
                desc: 'Place your subject on a brand-coloured gradient for social media posts, ad creatives, and marketing banners that align with your visual identity. Use Canva, Figma, or Sceniths editor.',
              },
              {
                icon: '🌅',
                title: 'Composite Into a Scene',
                desc: 'Drop a product into a lifestyle setting — e.g., a supplement bottle on a gym bench, a perfume on a marble counter — for lifestyle imagery without a photo shoot. Dramatically increases perceived product value.',
              },
              {
                icon: '✍️',
                title: 'Add Typography Overlays',
                desc: 'Place bold headline text behind your subject (between the background and the cutout) for dynamic, editorial-style social media posts that stop the scroll on Instagram and Pinterest.',
              },
              {
                icon: '🔲',
                title: 'Create Catalogue Grids',
                desc: 'Place multiple product cutouts on a uniform background to build consistent catalogue grids for your website, wholesale catalogue, or pitch deck. Visual consistency communicates brand professionalism.',
              },
              {
                icon: '💡',
                title: 'Add Drop Shadow for Depth',
                desc: 'A subtle drop shadow beneath a product on white creates the illusion of three-dimensionality and makes the product feel "placed" rather than pasted. Significant visual quality improvement with minimal effort.',
              },
              {
                icon: '🖼️',
                title: 'Create Brand Stickers & Badges',
                desc: 'Transparent PNGs of logos, signatures, or mascots can be overlaid onto any content — social posts, presentations, video thumbnails — as persistent brand elements without visible edges.',
              },
            ].map((item) => (
              <div key={item.title} className="fbr-after-card">
                <div className="fbr-after-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="fbr-after-promo">
            <p>
              💡 <strong>Pro tip:</strong> After removing your background, try{' '}
              <a href="/tools/image-editing" className="fbr-inline-link">Scenith's free Image Editor</a>{' '}
              to add custom backgrounds, text, filters, and brand elements — all in the same workflow, completely free.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          THE REAL COST OF NOT USING FREE TOOLS
      ══════════════════════════════════ */}
      <section className="fbr-cost-section" id="cost-of-manual" aria-labelledby="cost-title">
        <div className="fbr-container">
          <div className="fbr-section-header">
            <h2 id="cost-title">The True Cost of NOT Using a Free Background Remover</h2>
            <p>Manual editing and paid tools have hidden costs that add up fast. Here's the math.</p>
          </div>
          <div className="fbr-cost-grid">
            <div className="fbr-cost-card">
              <h3>💸 Freelance Photo Editor</h3>
              <div className="fbr-cost-amount">₹200–₹800<span>/image</span></div>
              <ul>
                <li>Minimum 24–48 hour turnaround</li>
                <li>Quality varies by editor</li>
                <li>Revisions cost extra</li>
                <li>Not scalable for large catalogues</li>
                <li>Requires briefing and communication time</li>
              </ul>
              <div className="fbr-cost-total">100 images = ₹20,000–₹80,000</div>
            </div>
            <div className="fbr-cost-card">
              <h3>🖥️ Photoshop Manual Edit</h3>
              <div className="fbr-cost-amount">20–45 min<span>/image</span></div>
              <ul>
                <li>Adobe subscription: ₹1,675/month</li>
                <li>Requires professional training</li>
                <li>Steep learning curve</li>
                <li>Inconsistent results between sessions</li>
                <li>Not available on mobile</li>
              </ul>
              <div className="fbr-cost-total">100 images = 33–75 hours of work</div>
            </div>
            <div className="fbr-cost-card">
              <h3>🔒 Remove.bg Paid Plan</h3>
              <div className="fbr-cost-amount">$9–$129<span>/month</span></div>
              <ul>
                <li>Free tier: 1 low-res preview/day</li>
                <li>HD requires paid credits</li>
                <li>Watermarked on free tier</li>
                <li>Credit system is confusing</li>
                <li>No image editing features</li>
              </ul>
              <div className="fbr-cost-total">Annual cost: $108–$1,548 USD</div>
            </div>
            <div className="fbr-cost-card highlight">
              <h3>✅ Scenith Free Background Remover</h3>
              <div className="fbr-cost-amount">₹0<span>forever</span></div>
              <ul>
                <li>Instant 5-second processing</li>
                <li>Full HD, zero watermark</li>
                <li>No signup required to start</li>
                <li>Commercial use included</li>
                <li>Integrated with free image editor</li>
              </ul>
              <div className="fbr-cost-total">100 images = ₹0 and ~8 minutes</div>
              <a href={TOOL_URL} className="fbr-cost-cta">Start Free →</a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════ */}
      <section className="fbr-testimonials-section" id="testimonials" aria-labelledby="test-title">
        <div className="fbr-container">
          <div className="fbr-section-header">
            <h2 id="test-title">What Professionals Say About Scenith's Free Background Remover</h2>
          </div>
          <div className="fbr-test-grid">
            {[
              {
                quote: 'I run a 300-SKU Amazon store. Before Scenith, I was spending ₹60,000 a month on product photo editing. Now I do the same work for free, in less time. Its genuinely changed the economics of my business.',
                name: 'Rohan Mehta',
                role: 'Amazon FBA Seller, Mumbai',
                stars: 5,
              },
              {
                quote: 'The hair detail is unreal. I do headshots for LinkedIn profiles and the AI handles flyaway hair better than I can in Photoshop. Ive started using Scenith as my first-pass tool for every portrait job. It saves me about 2 hours a day.',
                name: 'Priyanka Sharma',
                role: 'Freelance Photographer, Bangalore',
                stars: 5,
              },
              {
                quote: 'I manage social media for 8 D2C brands. The volume of product images we process is insane. Scenith is the only free tool that keeps up — no watermarks, no quality loss, no per-image charges. Its not even a close competition.',
                name: 'Arjun Kapoor',
                role: 'Social Media Manager, Delhi',
                stars: 5,
              },
              {
                quote: 'As a student learning graphic design, I couldnt afford Photoshop or remove.bg credits. Scenith let me produce professional work from day one without any cost. My portfolio looks like Ive been designing for years.',
                name: 'Sneha Patel',
                role: 'Graphic Design Student, Ahmedabad',
                stars: 5,
              },
            ].map((t) => (
              <blockquote key={t.name} className="fbr-testimonial">
                <div className="fbr-stars">{'⭐'.repeat(t.stars)}</div>
                <p>{t.quote}</p>
                <cite>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </cite>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          FAQ
      ══════════════════════════════════ */}
      <section className="fbr-faq-section" id="faq" aria-labelledby="faq-title">
        <div className="fbr-container">
          <div className="fbr-section-header">
            <h2 id="faq-title">Frequently Asked Questions — Free Background Remover Online</h2>
          </div>
          <div className="fbr-faq-list">
            {FAQS.map((faq, i) => (
              <article key={i} className="fbr-faq-item">
                <button
                  className={`fbr-faq-q ${activeFaq === i ? 'open' : ''}`}
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  aria-expanded={activeFaq === i}
                >
                  <h3>{faq.q}</h3>
                  <span className="fbr-faq-chevron">{activeFaq === i ? '−' : '+'}</span>
                </button>
                {activeFaq === i && (
                  <div className="fbr-faq-a">
                    <p>{faq.a}</p>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          PEOPLE ALSO ASK
      ══════════════════════════════════ */}
      <section className="fbr-paa-section" id="people-also-ask" aria-labelledby="paa-title">
        <div className="fbr-container">
          <h2 id="paa-title">People Also Ask About Free Background Removal</h2>
          <div className="fbr-paa-grid">
            {[
              {
                q: 'What is the best free background remover in 2026?',
                a: 'Scenith is widely regarded as the best free background remover in 2026 for three reasons: it produces full-resolution output without watermarks on the free plan, requires no signup, and processes images in under 5 seconds. Unlike remove.bg (which watermarks free-tier downloads) and Canva (which requires a Pro subscription), Scenith delivers genuinely free, high-quality results.',
              },
              {
                q: 'Can I remove the background from a photo on my phone for free?',
                a: 'Yes. Scenith is fully responsive and works on all smartphones via the browser — no app download required. The tool performs identically on mobile and desktop. Simply open scenith.in/tools/background-removal on your phone\'s browser, upload a photo from your camera roll, and download the transparent PNG.',
              },
              {
                q: 'How do I remove the background from a product photo for Amazon?',
                a: 'Upload your product photo to Scenith\'s free background remover, download the transparent PNG, then open it in any photo editor (even Paint.net or Google Slides) and set the background to pure white (RGB 255,255,255). Export as JPG. This meets Amazon\'s main image requirements. The entire process takes under 2 minutes.',
              },
              {
                q: 'Is there a free background remover that works without Photoshop?',
                a: 'Yes — Scenith is entirely browser-based and requires no software installation, no Photoshop subscription, and no design skills. The AI does everything automatically. It is one of the most accurate free alternatives to Photoshop\'s background removal feature available in 2026.',
              },
            ].map((paa) => (
              <div key={paa.q} className="fbr-paa-item">
                <h3>{paa.q}</h3>
                <p>{paa.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          FINAL CTA
      ══════════════════════════════════ */}
      <section className="fbr-final-cta-section" id="get-started" aria-labelledby="final-cta-title">
        <div className="fbr-container">
          <div className="fbr-final-cta-box">
            <div className="fbr-final-glow" aria-hidden="true" />
            <h2 id="final-cta-title">
              Ready to Remove Backgrounds for Free?
            </h2>
            <p>
              Join 50,000+ creators, sellers, and designers who use Scenith's free background remover every day. No signup. No watermark. No cost. Just upload and download your transparent PNG in 5 seconds.
            </p>
            <a href={TOOL_URL} className="fbr-final-btn">
              <span>🪄 Remove Background Free — Open Tool</span>
              <span className="fbr-arrow">→</span>
            </a>
            <div className="fbr-final-trust">
              <span>✅ Free Forever</span>
              <span>🚫 No Watermark</span>
              <span>⚡ 5-Second Processing</span>
              <span>💼 Commercial Use Included</span>
              <span>🔒 Images Never Stored</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          STRUCTURED DATA
      ══════════════════════════════════ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'WebPage',
                '@id': 'https://scenith.in/tools/free-background-remover-online',
                name: 'Free Background Remover Online – Instant Transparent PNG | Scenith',
                description:
                  'Comprehensive guide to free online background removal using AI. Learn how AI background removers work, compare top tools, and access Scenith\'s free one-click background eraser.',
                url: 'https://scenith.in/tools/free-background-remover-online',
                inLanguage: 'en-IN',
                datePublished: '2026-01-01',
                dateModified: new Date().toISOString().split('T')[0],
                author: {
                  '@type': 'Organization',
                  name: 'Scenith',
                  url: 'https://scenith.in',
                },
                mainEntity: {
                  '@type': 'SoftwareApplication',
                  name: 'Scenith Free Background Remover',
                  applicationCategory: 'PhotoEditingApplication',
                  url: 'https://scenith.in/tools/background-removal',
                  offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
                },
              },
              {
                '@type': 'FAQPage',
                mainEntity: FAQS.map((f) => ({
                  '@type': 'Question',
                  name: f.q,
                  acceptedAnswer: { '@type': 'Answer', text: f.a },
                })),
              },
              {
                '@type': 'HowTo',
                name: 'How to Remove Image Background Free Online',
                description: 'Step-by-step guide to removing backgrounds from photos for free using AI',
                totalTime: 'PT5S',
                step: STEP_DATA.map((s, i) => ({
                  '@type': 'HowToStep',
                  position: i + 1,
                  name: s.title,
                  text: s.desc,
                })),
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://scenith.in' },
                  { '@type': 'ListItem', position: 2, name: 'Tools', item: 'https://scenith.in/tools' },
                  {
                    '@type': 'ListItem',
                    position: 3,
                    name: 'Free Background Remover Online',
                    item: 'https://scenith.in/tools/free-background-remover-online',
                  },
                ],
              },
            ],
          }),
        }}
      />
    </div>
  );
}