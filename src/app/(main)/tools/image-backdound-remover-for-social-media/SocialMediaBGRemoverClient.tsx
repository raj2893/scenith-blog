'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import '../../../../../styles/tools/SocialMediaBGRemover.css';

const CTA_URL =
  'https://scenith.in/tools/background-removal?utm_source=image-background-remover-social-media&utm_medium=internal-cta&utm_campaign=tool-silo';

// ─── Structured Data ──────────────────────────────────────────

const TOOL_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Scenith Image Background Remover for Social Media',
  description:
    'Free AI background remover purpose-built for social media content creators. Instantly produces transparent PNGs for Instagram, TikTok, Facebook, LinkedIn, and YouTube.',
  url: 'https://scenith.in/tools/image-backdound-remover-for-social-media',
  applicationCategory: 'PhotoEditingApplication',
  operatingSystem: 'Web Browser',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  author: { '@type': 'Organization', name: 'Scenith', url: 'https://scenith.in' },
  dateModified: new Date().toISOString().split('T')[0],
};

const HOWTO_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Remove Image Backgrounds for Social Media Posts',
  description:
    'Step-by-step guide to creating transparent background images for Instagram, TikTok, Facebook, and LinkedIn using Scenith AI',
  totalTime: 'PT5S',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Open the Social Media Background Remover',
      text: 'Click "Remove My Background Now" to open the Scenith AI tool. No app download, works on any device.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Upload Your Social Media Photo',
      text: 'Upload your selfie, content creator photo, product image, or graphic (JPG/PNG, up to 30MB). Works with portrait shots, flat lays, and branded graphics.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'AI Removes the Background in ~5 Seconds',
      text: 'Scenith AI identifies your subject and removes the background with pixel-level precision, preserving fine hair details, clothing edges, and complex silhouettes.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Download and Post to Any Platform',
      text: 'Download your transparent PNG and drop it onto any background — a gradient, a branded colour, a travel photo — perfect for Instagram, TikTok, LinkedIn and more.',
    },
  ],
};

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is an image background remover for social media?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A social media background remover is an AI tool that extracts your subject (person, product, or graphic) from its original background and delivers a transparent PNG. You can then place the subject on any background — branded colours, gradients, textures — optimised for each social platform.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which social media platforms benefit most from background removal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Instagram (posts, Reels covers, Stories), TikTok (thumbnails, profile pictures), LinkedIn (headshots, company posts), Facebook (covers, ads, posts), YouTube (thumbnails, channel art), Pinterest (pins), and Twitter/X (header images) all benefit significantly from clean transparent background images.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does background removal help social media engagement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Studies show that images with clean, distraction-free subjects stop the scroll more effectively than cluttered backgrounds. Consistent branded backgrounds across posts also increase profile aesthetics and follower retention by up to 30%.',
      },
    },
    {
      '@type': 'Question',
      name: 'What image size should I use for social media background removal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Upload the highest resolution version available. For Instagram posts use 1080×1080px or 1080×1350px, for Stories and Reels use 1080×1920px, for LinkedIn use 1200×628px, and for YouTube thumbnails use 1280×720px. Our AI processes all standard social media dimensions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use the removed background image on all social media platforms?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The transparent PNG output works on every social media platform and design tool — Instagram, TikTok, Canva, Adobe Express, Facebook Creator Studio, LinkedIn, Pinterest, and YouTube. One removal, infinite use cases.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the social media background remover free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, completely free with no watermarks. Full commercial rights are included, meaning you can use the output images for sponsored posts, brand collaborations, and paid advertising without any restrictions.',
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
      name: 'Image Background Remover for Social Media',
      item: 'https://scenith.in/tools/image-backdound-remover-for-social-media',
    },
  ],
};

// ─── Static Data ──────────────────────────────────────────────

const PLATFORMS = [
  {
    name: 'Instagram',
    icon: '📸',
    formats: 'Posts · Reels Covers · Stories · Profile Picture',
    tip: 'Clean backgrounds on feed posts boost saves and shares. Transparent PNGs let you match your grid aesthetic perfectly.',
    idealSize: '1080×1080 / 1080×1350px',
  },
  {
    name: 'TikTok',
    icon: '🎵',
    formats: 'Profile Picture · Video Thumbnails · Duet Backgrounds',
    tip: 'TikTok thumbnails with isolated subjects get significantly higher click-through rates in Explore and search.',
    idealSize: '1080×1920px',
  },
  {
    name: 'LinkedIn',
    icon: '💼',
    formats: 'Headshots · Banner Images · Company Posts · Ads',
    tip: 'A professional white or branded-colour background on your LinkedIn headshot increases profile views by up to 21×.',
    idealSize: '1200×628px',
  },
  {
    name: 'Facebook',
    icon: '👥',
    formats: 'Posts · Cover Photos · Stories · Ad Creatives',
    tip: 'Facebook ad images with isolated subjects against bold backgrounds achieve lower CPM and higher CTR than busy lifestyle shots.',
    idealSize: '1200×630px',
  },
  {
    name: 'YouTube',
    icon: '▶️',
    formats: 'Thumbnails · Channel Art · Shorts Covers',
    tip: 'The most viral YouTube thumbnails follow the "face + object + text" formula — all requiring transparent isolated subjects.',
    idealSize: '1280×720px',
  },
  {
    name: 'Pinterest',
    icon: '📌',
    formats: 'Pins · Idea Pins · Shopping Pins',
    tip: 'Pinterest product pins with clean white or neutral backgrounds outperform lifestyle pins in shopping conversions by 40%.',
    idealSize: '1000×1500px',
  },
];

const CONTENT_TYPES = [
  {
    icon: '🤳',
    label: 'Creator Selfies & Portraits',
    detail: 'Replace boring walls and messy rooms with on-brand backgrounds instantly',
  },
  {
    icon: '🛍️',
    label: 'Product Flat Lays',
    detail: 'Isolate products for shoppable posts on Instagram and Pinterest',
  },
  {
    icon: '📊',
    label: 'Branded Infographic Elements',
    detail: 'Extract icons, illustrations and graphics for compositing in Canva',
  },
  {
    icon: '👔',
    label: 'Professional Headshots',
    detail: 'LinkedIn-ready portraits with any background in seconds',
  },
  {
    icon: '🎨',
    label: 'Graphic Design Assets',
    detail: 'Logos, stickers, and design elements with clean transparent edges',
  },
  {
    icon: '📣',
    label: 'Ad Creatives',
    detail: 'Paid social ad images with isolated subjects that beat banner blindness',
  },
  {
    icon: '🎬',
    label: 'Video Thumbnails',
    detail: 'YouTube and TikTok thumbnails with the proven isolated-subject formula',
  },
  {
    icon: '🏷️',
    label: 'Story & Reel Overlays',
    detail: 'Transparent PNGs perfect for layering in CapCut, Canva or Adobe Express',
  },
];

const CREATOR_WORKFLOWS = [
  {
    platform: 'Instagram Feed',
    workflow: 'Shoot selfie or product → Remove background → Place on branded gradient or pastel → Export 1080×1350 → Post',
    result: 'Consistent aesthetic grid that converts followers to buyers',
  },
  {
    platform: 'YouTube Thumbnails',
    workflow: 'Screen-capture face from video → Remove background → Composite on bold colour with text overlay → Export 1280×720',
    result: 'CTR increase of 15–40% vs plain video screenshots',
  },
  {
    platform: 'LinkedIn Content',
    workflow: 'Take professional headshot anywhere → Remove background → Apply neutral grey or white → Export for profile/posts',
    result: 'Up to 21× more profile views with professional isolated headshot',
  },
  {
    platform: 'TikTok / Reels',
    workflow: 'Export cover frame → Remove background → Add vibrant colour + text → Use as video thumbnail',
    result: 'Higher browse-page impressions and video click-through rate',
  },
];

const GROWTH_STATS = [
  { stat: '3×', label: 'More saves on Instagram posts with consistent background aesthetic' },
  { stat: '40%', label: 'Higher CTR on Pinterest shopping pins with clean white backgrounds' },
  { stat: '21×', label: 'More LinkedIn profile views with a professional isolated headshot' },
  { stat: '15%+', label: 'YouTube thumbnail CTR improvement with isolated subject formula' },
];

const COMMON_MISTAKES = [
  {
    mistake: 'Using screenshots for social media graphics',
    fix: 'Always start from the original full-resolution photo. Screenshots are compressed and lose detail at the edges — exactly where AI segmentation needs the most clarity.',
  },
  {
    mistake: 'Posting transparent PNGs directly to Instagram',
    fix: 'Instagram and TikTok do not support transparency — they will fill it with black. Always place your transparent subject on a background colour or texture before exporting.',
  },
  {
    mistake: 'Ignoring aspect ratio for each platform',
    fix: 'After removing the background, resize your canvas to platform specs before posting: 1:1 for Instagram feed, 9:16 for Stories/Reels, 16:9 for YouTube thumbnails.',
  },
  {
    mistake: 'Choosing a clashing replacement background',
    fix: 'Pick backgrounds that complement your subject\'s outfit or brand colours. A colour wheel approach (complementary or analogous colours) beats random backgrounds every time.',
  },
];

// ─── Component ────────────────────────────────────────────────

export default function SocialMediaBGRemoverClient() {
  return (
    <div className="social-eraser-page">
      {/* ── Structured Data ── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(TOOL_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(HOWTO_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      {/* ── Breadcrumb ── */}
      <nav aria-label="Breadcrumb" className="social-breadcrumb">
        <ol itemScope itemType="https://schema.org/BreadcrumbList">
          {[
            { href: '/', label: 'Home', pos: 1 },
            { href: '/tools', label: 'Tools', pos: 2 },
            { href: '/tools/image-backdound-remover-for-social-media', label: 'Background Remover for Social Media', pos: 3 },
          ].map((item) => (
            <li key={item.pos} itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              {item.pos < 3 ? (
                <a href={item.href} itemProp="item"><span itemProp="name">{item.label}</span></a>
              ) : (
                <span itemProp="name">{item.label}</span>
              )}
              <meta itemProp="position" content={String(item.pos)} />
              {item.pos < 3 && <span aria-hidden="true" className="social-breadcrumb__sep">›</span>}
            </li>
          ))}
        </ol>
      </nav>

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="social-hero" id="hero" role="main">
        <div className="social-hero__noise" aria-hidden="true" />
        <motion.div
          className="social-hero__inner"
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="social-hero__eyebrow">
            <span className="social-eyebrow__dot" />
            Built for Creators · Zero Watermark 
          </div>

          <h1 className="social-hero__h1">
            Image Background Remover<br />
            <span className="social-gradient-text">for Social Media</span>
          </h1>

          <p className="social-hero__sub">
            The fastest way to create <strong>scroll-stopping social media content</strong>. Remove any background from your photos in under 5 seconds — then place your subject on branded colours, gradients, or any scene. Perfect for Instagram, TikTok, LinkedIn, YouTube, and Facebook. Free,  no watermarks.
          </p>

          <div className="social-hero__platforms" aria-label="Supported platforms">
            {['📸 Instagram', '🎵 TikTok', '💼 LinkedIn', '👥 Facebook', '▶️ YouTube', '📌 Pinterest'].map((p) => (
              <span key={p} className="platform-pill">{p}</span>
            ))}
          </div>

          {/* ── PRIMARY CTA ── */}
          <motion.a
            href={CTA_URL}
            className="social-cta-primary"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            aria-label="Remove background from social media photo — free with Scenith AI"
          >
            <span>✂️</span>
            Remove My Background Now — Free
            <span className="social-cta__arrow">→</span>
          </motion.a>

          <p className="social-hero__footnote">Opens Scenith AI · Works on mobile</p>

          <figure className="social-hero__img-wrap">
            <Image
              src="/images/REMOVEBGSS.png"
              alt="Social media photo background removal example — before cluttered room background, after clean transparent PNG ready for Instagram or TikTok post"
              width={840}
              height={420}
              priority
              className="social-hero__img"
            />
            <figcaption className="visually-hidden">
              Before-and-after example of AI background removal for social media content
            </figcaption>
          </figure>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════
          DEFINITION (Featured Snippet bait)
      ══════════════════════════════════════════ */}
      <section className="social-definition" role="region" aria-labelledby="def-heading">
        <div className="social-container">
          <div className="social-definition__card">
            <h2 id="def-heading" className="visually-hidden">What is a Social Media Background Remover?</h2>
            <p className="social-definition__text">
              A <strong>social media background remover</strong> is an AI tool that automatically isolates the subject of a photo — a person, product, or graphic — and removes the background, outputting a transparent PNG file. Content creators use it to swap backgrounds for branded aesthetics, compose layered graphics, and produce professional-looking posts for Instagram, TikTok, LinkedIn, YouTube, and Facebook without design software.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          GROWTH STATS
      ══════════════════════════════════════════ */}
      <section className="social-stats-section" role="region" aria-labelledby="stats-title">
        <div className="social-container">
          <h2 id="stats-title" className="visually-hidden">Social Media Background Removal Impact Statistics</h2>
          <div className="social-stats-grid">
            {GROWTH_STATS.map((item) => (
              <div key={item.stat} className="social-stat-card">
                <span className="social-stat-card__num">{item.stat}</span>
                <p className="social-stat-card__label">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHY SOCIAL MEDIA SPECIFICALLY
      ══════════════════════════════════════════ */}
      <section className="social-section" id="why-social" role="region" aria-labelledby="why-title">
        <div className="social-container">
          <h2 id="why-title">Why Social Media Content Needs Background Removal</h2>
          <p className="social-section__lead">
            Social media is a visual attention economy. Background removal is the single fastest way to upgrade your content quality and consistency — without a photography studio or design degree.
          </p>
          <div className="social-grid-3">
            {[
              {
                icon: '🎯',
                title: 'Stop the Scroll Instantly',
                body: 'Research consistently shows that images with clean, uncluttered subjects halt thumb-scrolling more effectively than busy backgrounds. Isolated subjects command attention in a feed full of noise.',
              },
              {
                icon: '🎨',
                title: 'Build a Consistent Brand Aesthetic',
                body: 'The most recognisable creator accounts and brand pages share one trait: visual consistency. Transparent backgrounds let you apply the same signature colour palette across every single post.',
              },
              {
                icon: '📈',
                title: 'Algorithm-Friendly Content',
                body: 'High save rates and share rates signal quality to every platform algorithm. Professional-looking posts with clean backgrounds earn more saves, which drives organic reach without paid promotion.',
              },
              {
                icon: '⚡',
                title: 'Produce Content 10× Faster',
                body: 'Without background removal, a single branded social post requires a photo studio, a designer, or hours in Photoshop. AI does it in 5 seconds — letting you batch 30 posts in the time it used to take for one.',
              },
              {
                icon: '💡',
                title: 'Unlock Creative Compositing',
                body: 'Transparent subjects open up an entire creative toolkit: layered Reels covers, product-over-text graphics, animated Stories stickers, and multi-subject collages that look agency-made.',
              },
              {
                icon: '💸',
                title: 'Eliminate Studio and Designer Costs',
                body: 'A single professionally shot and edited photo can cost ₹2,000–₹10,000. AI background removal lets any creator produce studio-quality visuals from a smartphone, anywhere, for free.',
              },
            ].map((card) => (
              <motion.article
                key={card.title}
                className="social-card"
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 280 }}
              >
                <span className="social-card__icon">{card.icon}</span>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PLATFORM-BY-PLATFORM GUIDE
      ══════════════════════════════════════════ */}
      <section className="social-section social-section--alt" id="platforms" role="region" aria-labelledby="platforms-title">
        <div className="social-container">
          <h2 id="platforms-title">Platform-by-Platform Guide: Background Removal for Every Social Network</h2>
          <p className="social-section__lead">
            Each social media platform has unique image dimensions, use cases, and audience expectations. Here's exactly how to use background removal to maximise performance on each one.
          </p>
          <div className="platform-cards-grid">
            {PLATFORMS.map((p) => (
              <div key={p.name} className="platform-detail-card">
                <div className="platform-detail-card__header">
                  <span className="platform-detail-card__icon">{p.icon}</span>
                  <h3>{p.name}</h3>
                </div>
                <div className="platform-detail-card__formats">
                  <span className="platform-format-label">Formats:</span> {p.formats}
                </div>
                <p className="platform-detail-card__tip">{p.tip}</p>
                <div className="platform-detail-card__size">
                  <span>📐 Ideal size:</span> <strong>{p.idealSize}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          HOW IT WORKS
      ══════════════════════════════════════════ */}
      <section className="social-section" id="how-it-works" role="region" aria-labelledby="how-title">
        <div className="social-container">
          <h2 id="how-title">How to Remove Backgrounds for Social Media in 4 Steps</h2>
          <p className="social-section__lead">
            No Photoshop, no Canva Pro, no design experience. Just your photo and 5 seconds.
          </p>
          <div className="social-steps-row">
            {HOWTO_SCHEMA.step.map((step, i) => (
              <motion.div
                key={step.name}
                className="social-step"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.11, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="social-step__num">0{step.position}</div>
                <h3>{step.name}</h3>
                <p>{step.text}</p>
              </motion.div>
            ))}
          </div>
          <div className="social-mid-cta">
            <motion.a
              href={CTA_URL}
              className="social-cta-primary"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              ✂️ Remove Background for Social Media →
            </motion.a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CONTENT TYPE COVERAGE
      ══════════════════════════════════════════ */}
      <section className="social-section social-section--alt" id="content-types" role="region" aria-labelledby="content-title">
        <div className="social-container">
          <h2 id="content-title">Works for Every Type of Social Media Content</h2>
          <p className="social-section__lead">
            Whatever you create — selfies, products, ads, or thumbnails — the AI handles it.
          </p>
          <div className="social-grid-4">
            {CONTENT_TYPES.map((ct) => (
              <div key={ct.label} className="content-type-card">
                <span className="content-type-card__icon">{ct.icon}</span>
                <strong>{ct.label}</strong>
                <p>{ct.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CREATOR WORKFLOW GUIDE
      ══════════════════════════════════════════ */}
      <section className="social-section" id="workflows" role="region" aria-labelledby="workflow-title">
        <div className="social-container">
          <h2 id="workflow-title">Platform-Specific Creator Workflows Using Background Removal</h2>
          <p className="social-section__lead">
            Real content workflows that professional creators and social media managers use every day.
          </p>
          <div className="workflow-list">
            {CREATOR_WORKFLOWS.map((wf, i) => (
              <div key={i} className="workflow-item">
                <div className="workflow-item__platform">{wf.platform}</div>
                <div className="workflow-item__body">
                  <div className="workflow-item__flow">
                    <span className="workflow-label">Workflow:</span>
                    <p>{wf.workflow}</p>
                  </div>
                  <div className="workflow-item__result">
                    <span className="workflow-label workflow-label--result">Result:</span>
                    <p>{wf.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          COMMON MISTAKES
      ══════════════════════════════════════════ */}
      <section className="social-section social-section--alt" id="mistakes" role="region" aria-labelledby="mistakes-title">
        <div className="social-container">
          <h2 id="mistakes-title">4 Common Mistakes When Removing Backgrounds for Social Media</h2>
          <p className="social-section__lead">
            Avoid these errors to get professional, platform-ready results every time.
          </p>
          <div className="social-mistakes-list">
            {COMMON_MISTAKES.map((m, i) => (
              <div key={i} className="social-mistake-item">
                <div className="social-mistake-item__header">
                  <span className="social-mistake-item__num">{String(i + 1).padStart(2, '0')}</span>
                  <h3>❌ {m.mistake}</h3>
                </div>
                <p><strong>✅ Fix:</strong> {m.fix}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          DEEP EDUCATIONAL: AI + SOCIAL MEDIA
      ══════════════════════════════════════════ */}
      <section className="social-section" id="ai-social-science" role="region" aria-labelledby="ai-social-title">
        <div className="social-container">
          <h2 id="ai-social-title">The Science of Background Removal in Social Media Algorithms</h2>
          <p className="social-section__lead">
            Understanding why clean backgrounds perform better helps you make smarter creative decisions, not just aesthetic ones.
          </p>
          <div className="social-edu-blocks">
            <div className="social-edu-block">
              <h3>Why Isolated Subjects Outperform Busy Backgrounds</h3>
              <p>
                Human vision operates on a principle called <em>figure-ground segregation</em> — our brains automatically prioritise a clear subject against a plain background over a scene with competing visual elements. In a social media feed, this translates directly to scroll-stopping power.
              </p>
              <p>
                When the background is removed and replaced with a solid or gradient colour, the brain processes the image faster, creates stronger memory encoding, and associates higher quality with the content — all before the viewer consciously decides to engage. This is why <strong>clean backgrounds correlate with higher save rates</strong> across Instagram and Pinterest data.
              </p>
            </div>
            <div className="social-edu-block">
              <h3>How Platform Algorithms Reward High-Quality Visuals</h3>
              <p>
                No major social platform publicly confirms that image quality is an algorithmic factor — but engagement metrics that are influenced by visual quality absolutely are. Instagram's algorithm weights <strong>saves and shares</strong> heavily over likes and comments. TikTok's For You algorithm prioritises <strong>completion rate and replays</strong>. LinkedIn's feed favours <strong>dwell time</strong> on posts.
              </p>
              <p>
                All three of these signals are downstream of first impressions. A professional-looking thumbnail or feed image increases the probability of the initial tap, click, or pause — which then feeds higher-quality engagement signals back to the algorithm. <strong>Background removal is therefore not just an aesthetic choice — it is an algorithmic one.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          BOTTOM CTA BAND
      ══════════════════════════════════════════ */}
      <section className="social-cta-band" id="get-started" role="region" aria-labelledby="cta-band-title">
        <div className="social-container social-container--narrow">
          <h2 id="cta-band-title">Your Social Media Deserves Better Backgrounds.</h2>
          <p>
            Stop letting cluttered photos hold back your engagement. Use Scenith's AI background remover — built for creators — and produce scroll-stopping, platform-optimised content in seconds. Free, forever, no watermarks.
          </p>
          <motion.a
            href={CTA_URL}
            className="social-cta-primary social-cta-primary--large"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            aria-label="Remove background from social media photo free with Scenith AI"
          >
            ✂️ Remove Background for Social Media — Free →
          </motion.a>
          <p className="social-cta-band__note">No watermarks · Works on Instagram, TikTok, LinkedIn & more</p>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FAQ
      ══════════════════════════════════════════ */}
      <section className="social-section" id="faq" role="region" aria-labelledby="faq-title">
        <div className="social-container">
          <h2 id="faq-title">Frequently Asked Questions — Social Media Background Remover</h2>
          <div className="social-faq-list">
            {FAQ_SCHEMA.mainEntity.map((qa, i) => (
              <details key={i} className="social-faq-item">
                <summary className="social-faq-q">{qa.name}</summary>
                <p className="social-faq-a">{qa.acceptedAnswer.text}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          INTERNAL LINKS / SEO SILO
      ══════════════════════════════════════════ */}
      <section className="social-section social-section--alt social-related" role="navigation" aria-labelledby="related-title">
        <div className="social-container">
          <h2 id="related-title">Explore More Free AI Tools</h2>
          <div className="social-related-links">
            <Link href="/tools/background-removal" className="social-related-link">
              🖼️ AI Background Remover
            </Link>
            <Link href="/tools/image-backgroung-eraser-for-product-photos" className="social-related-link">
              📦 Background Eraser for Product Photos
            </Link>
            <Link href="/tools/image-editing" className="social-related-link">
              ✏️ Free Image Editor
            </Link>
            <Link href="/tools" className="social-related-link">
              🧰 All AI Tools →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}