import type { Metadata } from "next";
import styles from "./page.module.css";
import Link from "next/link";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "AI Portrait Background Remover — Remove Background from Portrait Photos Instantly | Scenith",
  description:
    "Remove backgrounds from portrait photos with AI precision. Perfect for headshots, LinkedIn photos, ID pictures, passport photos & professional profiles. Clean transparent PNG in 5 seconds. Free to try.",
  keywords: [
    "portrait background remover",
    "remove background from portrait photo",
    "AI portrait background removal",
    "headshot background remover",
    "LinkedIn photo background remover",
    "professional portrait background removal",
    "passport photo background remover",
    "ID photo background remover",
    "face background remover AI",
    "portrait photo editor online",
    "remove background from headshot",
    "professional headshot background removal",
    "AI face background remover free",
    "portrait background eraser",
    "person background remover",
    "selfie background remover",
    "remove background from person photo",
    "online portrait background remover free",
    "best portrait background remover 2026",
    "hair background remover AI",
  ],
  openGraph: {
    title: "AI Portrait Background Remover — Professional Results in 5 Seconds",
    description:
      "The most accurate AI portrait background remover in 2026. Handles fine hair, complex edges, skin tones, and professional headshots with pixel-perfect precision. Free to try.",
    url: "https://scenith.in/tools/portrait-background-remover",
    siteName: "Scenith",
    type: "website",
    images: [
      {
        url: "https://scenith.in/og/portrait-background-remover.jpg",
        width: 1200,
        height: 630,
        alt: "Scenith AI Portrait Background Remover — Before and After",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Portrait Background Remover — Scenith",
    description:
      "Remove backgrounds from portraits, headshots & profile photos with AI. Perfect hair detection, skin tone preservation. 5 seconds. Free.",
    images: ["https://scenith.in/og/portrait-background-remover.jpg"],
  },
  alternates: {
    canonical: "https://scenith.in/tools/portrait-background-remover",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// ─── JSON-LD: SoftwareApplication ────────────────────────────────────────────

const jsonLdSoftware = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Scenith AI Portrait Background Remover",
  applicationCategory: "PhotoEditingApplication",
  operatingSystem: "Web",
  url: "https://scenith.in/tools/portrait-background-remover",
  description:
    "AI-powered portrait background remover that detects faces, preserves hair detail, and creates professional transparent PNGs from headshots, profile photos, and portrait images in under 5 seconds.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "INR",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "3812",
    bestRating: "5",
  },
  featureList: [
    "AI portrait & face detection",
    "Fine hair strand preservation",
    "Skin tone accuracy retention",
    "Transparent PNG output",
    "Headshot & LinkedIn photo optimization",
    "Passport photo background removal",
    "5-second processing speed",
    "No watermarks on output",
    "Commercial use rights included",
  ],
};

// ─── JSON-LD: FAQPage ─────────────────────────────────────────────────────────

const jsonLdFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a portrait background remover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A portrait background remover is an AI-powered tool specifically optimized to remove backgrounds from photos that contain human subjects — faces, headshots, full-body portraits, and profile photos. Unlike general background removers, portrait-specific AI models are trained to recognize facial landmarks, preserve fine hair strands, retain accurate skin tones, and handle the unique challenges of photographing people, such as wisps of hair against bright backgrounds or semi-transparent fabrics.",
      },
    },
    {
      "@type": "Question",
      name: "How do I remove the background from a portrait photo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To remove the background from a portrait photo using Scenith: (1) Click the 'Remove Portrait Background Free' button on this page. (2) Upload your portrait JPG or PNG file. (3) The AI automatically detects the person/face and removes the background. (4) Download your transparent PNG in under 5 seconds. The AI handles fine hair, complex edges, and skin tones automatically with no manual selection needed.",
      },
    },
    {
      "@type": "Question",
      name: "Does the AI accurately handle hair in portrait photos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Hair detection is one of the hardest problems in portrait background removal — individual strands, flyaways, curly hair, and hair against bright or similar-toned backgrounds all present unique challenges. Scenith's AI model is specifically trained on millions of portrait images with diverse hair types and uses a dedicated hair segmentation algorithm to preserve individual strands, resulting in natural-looking edges rather than the blocky, clipped results common with older tools.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use this for LinkedIn and professional profile photos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Scenith's portrait background remover is one of the most popular tools for LinkedIn profile photo optimization. After removing the background, you can place your headshot on a clean white, grey, or any brand-colored background that projects professionalism. LinkedIn recommends headshots with clean, uncluttered backgrounds — our AI delivers exactly that in seconds.",
      },
    },
    {
      "@type": "Question",
      name: "Is this portrait background remover suitable for passport photos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, with an important note: our tool removes the background to transparent, giving you a PNG file you can then place on a white or off-white background as required by passport photo standards. The AI preserves facial features, hair, and clothing contours with the precision required for government ID documentation. Always verify the final image meets your specific country's passport photo requirements before printing.",
      },
    },
    {
      "@type": "Question",
      name: "What types of portrait photos work best?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The AI performs best with: (1) Good contrast between subject and background — the person should be clearly distinguishable from what's behind them. (2) Decent lighting — well-lit subjects with clear facial visibility. (3) Standard portrait compositions — head-and-shoulders, bust shots, or full-body standing. Challenging cases include very dark skin against very dark backgrounds, extreme backlighting, or translucent fabrics, though the AI handles these better than manual tools.",
      },
    },
    {
      "@type": "Question",
      name: "Can I remove backgrounds from group portraits?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The AI detects and segments all human subjects present in a photo — individual portraits, couples, family photos, team headshots, and group photos all work. Each person in the frame is identified and preserved while the background is removed. For group shots, the result is all subjects on a transparent background as a single PNG.",
      },
    },
    {
      "@type": "Question",
      name: "How does portrait background removal differ from general background removal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "General background removal works across all image types — products, landscapes, animals, objects. Portrait-specific background removal uses additional specialized models that understand human anatomy: facial landmarks, hair structure, skin boundaries, and clothing contours. This means portrait AI achieves significantly better results on people photos — especially around hair, ears, and the neck-shoulder area — compared to general-purpose tools.",
      },
    },
    {
      "@type": "Question",
      name: "Is Scenith's portrait background remover free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Scenith operates on a credit-based plan system. New users can explore plans starting at ₹349/month or $9/month. The tool is accessible via the Scenith platform after creating a free account. Credits are consumed per background removal, giving you flexibility to use the tool as much as your plan allows.",
      },
    },
    {
      "@type": "Question",
      name: "What output format does the portrait background remover produce?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The output is a high-quality PNG file with a transparent alpha channel — meaning the background area is fully transparent. This gives you maximum flexibility: you can place the portrait on any background color or texture in any design tool, or upload it to platforms that support transparency. PNG format ensures no quality loss and full transparency support.",
      },
    },
  ],
};

// ─── JSON-LD: HowTo ───────────────────────────────────────────────────────────

const jsonLdHowTo = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Remove Background from a Portrait Photo",
  description:
    "Step-by-step guide to removing backgrounds from portrait photos, headshots, and profile pictures using Scenith AI",
  totalTime: "PT30S",
  tool: [
    {
      "@type": "HowToTool",
      name: "Scenith AI Portrait Background Remover",
    },
  ],
  step: [
    {
      "@type": "HowToStep",
      name: "Open the tool",
      text: "Click the 'Remove Portrait Background Free' button on this page to open Scenith's background removal tool.",
      position: 1,
    },
    {
      "@type": "HowToStep",
      name: "Upload your portrait",
      text: "Upload your headshot, profile photo, or portrait image in JPG or PNG format (up to 30MB).",
      position: 2,
    },
    {
      "@type": "HowToStep",
      name: "AI processes your photo",
      text: "The AI automatically detects the face and human subject, preserves fine hair details, and removes the background within 5 seconds.",
      position: 3,
    },
    {
      "@type": "HowToStep",
      name: "Download your transparent PNG",
      text: "Preview the result and download your professional transparent PNG portrait — no watermarks, full commercial rights.",
      position: 4,
    },
  ],
};

// ─── JSON-LD: BreadcrumbList ──────────────────────────────────────────────────

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://scenith.in" },
    { "@type": "ListItem", position: 2, name: "Tools", item: "https://scenith.in/tools" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Portrait Background Remover",
      item: "https://scenith.in/tools/portrait-background-remover",
    },
  ],
};

// ─── CTA URL ──────────────────────────────────────────────────────────────────

const CTA_URL =
  "https://scenith.in/tools/background-removal?utm_source=portrait-bg-remover&utm_medium=cta&utm_campaign=portrait-background-remover-page";

// ═════════════════════════════════════════════════════════════════════════════
// PAGE COMPONENT
// ═════════════════════════════════════════════════════════════════════════════

export default function PortraitBackgroundRemoverPage() {
  return (
    <>
      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSoftware) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHowTo) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />

      <main className={styles.page}>
        <div className={styles.bg} aria-hidden="true" />
        <div className={styles.meshLayer} aria-hidden="true" />
        <div className={styles.grainLayer} aria-hidden="true" />

        <div className={styles.wrap}>

          {/* ── Breadcrumb ── */}
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">›</span>
            <Link href="/tools">Tools</Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page">Portrait Background Remover</span>
          </nav>

          {/* ════════════════════════════════════════════
              HERO
          ════════════════════════════════════════════ */}
          <section className={styles.hero}>
            <div className={styles.heroPill}>
              <span className={styles.pillDot} aria-hidden="true" />
              AI Portrait Specialist · Hair-Perfect Results
            </div>

            <h1 className={styles.heroH1}>
              AI Portrait Background Remover —
              <br />
              <span className={styles.heroGrad}>Headshots. Profiles. People.</span>
              <br />
              Backgrounds Gone in 5 Seconds.
            </h1>

            <p className={styles.heroDesc}>
              The most accurate portrait background remover built specifically for human subjects.
              Our AI understands faces, hair strands, skin tones, and clothing edges — delivering
              results that look hand-edited without touching a single pixel yourself. Perfect for
              LinkedIn headshots, passport photos, ID pictures, team pages, and creative composites.
            </p>

            <div className={styles.heroBadges}>
              {[
                "✓ Hair-strand precision",
                "✓ Skin tone preserved",
                "✓ Transparent PNG output",
                "✓ No watermark",
                "✓ Commercial rights",
                "✓ 5-second processing",
              ].map((b) => (
                <span className={styles.badge} key={b}>{b}</span>
              ))}
            </div>

            {/* ── HERO CTA ── */}
            <a href={CTA_URL} className={styles.heroCta} aria-label="Remove portrait background free">
              <span className={styles.ctaShine} aria-hidden="true" />
              <span className={styles.ctaIconWrap} aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
                  <line x1="18" y1="4" x2="22" y2="4"/><line x1="20" y1="2" x2="20" y2="6"/>
                </svg>
              </span>
              Remove Portrait Background — Free
              <span className={styles.ctaArrow} aria-hidden="true">→</span>
            </a>

            <p className={styles.heroNote}>Takes under 5 seconds · Works on any portrait type</p>
          </section>

          {/* ════════════════════════════════════════════
              BEFORE / AFTER ILLUSTRATION
          ════════════════════════════════════════════ */}
          <section className={styles.beforeAfter} aria-label="Before and after portrait background removal examples">
            <div className={styles.baHeader}>
              <div className={styles.sectionTag}>Visual Examples</div>
              <h2 className={styles.baTitle}>What AI Portrait Background Removal Looks Like</h2>
              <p className={styles.baDesc}>
                Each example below represents a common portrait scenario where AI-specific
                background removal makes a dramatic difference over generic tools.
              </p>
            </div>

            <div className={styles.baGrid}>
              {[
                {
                  icon: "👩‍💼",
                  title: "Professional Headshot",
                  before: "Office or studio backdrop with harsh lighting gradients",
                  after: "Clean transparent portrait, ready for white/grey background placement",
                  challenge: "Hair edges against gradient backgrounds — one of the hardest cases for generic tools",
                  result: "Every strand preserved, natural hairline, zero jagged edges",
                },
                {
                  icon: "🧑‍🎓",
                  title: "Graduation / Academic Photo",
                  before: "Printed backdrop with colour bands, mortar board cap brim nearby",
                  after: "Subject isolated with cap, gown details, and tassel all intact",
                  challenge: "Dark regalia against printed backdrops with similar tones",
                  result: "Clothing and accessory edges detected even where colour contrast is minimal",
                },
                {
                  icon: "📱",
                  title: "Casual Selfie / Social Profile",
                  before: "Busy indoor background — furniture, walls, windows, clutter",
                  after: "Person cleanly separated, ready for solid or artistic background",
                  challenge: "Messy backgrounds with dozens of objects competing for attention",
                  result: "Subject boundary detected even against complex, multi-object scenes",
                },
                {
                  icon: "👨‍👩‍👧",
                  title: "Family / Group Portrait",
                  before: "Outdoor garden setting with foliage, dappled light, bokeh",
                  after: "All group members isolated as a single transparent unit",
                  challenge: "Multiple subjects, overlapping edges, outdoor lighting variation",
                  result: "Each person detected individually, grouped output with shared transparency",
                },
                {
                  icon: "🪪",
                  title: "ID / Passport Photo",
                  before: "Real-world photo with off-white background and imperfect lighting",
                  after: "Pure white or transparent background meeting documentation standards",
                  challenge: "Shoulder/collar area, ear-to-neck boundary, hair wisps at top",
                  result: "Clean documentation-grade isolation with precise shoulder contour",
                },
                {
                  icon: "✨",
                  title: "Curly / Afro Hair Portrait",
                  before: "Dense, voluminous hair mass with intricate boundary against any background",
                  after: "Every curl and coil preserved at the edge, no clipping or blocky mask",
                  challenge: "The single hardest portrait background problem for any AI model",
                  result: "Dedicated hair segmentation model handles volumetric hair with high fidelity",
                },
              ].map((item) => (
                <div className={styles.baCard} key={item.title}>
                  <div className={styles.baCardIcon}>{item.icon}</div>
                  <h3 className={styles.baCardTitle}>{item.title}</h3>
                  <div className={styles.baRow}>
                    <div className={styles.baBefore}>
                      <span className={styles.baLabel}>Before</span>
                      <p>{item.before}</p>
                    </div>
                    <div className={styles.baAfter}>
                      <span className={styles.baLabelAfter}>After</span>
                      <p>{item.after}</p>
                    </div>
                  </div>
                  <div className={styles.baChallenge}>
                    <span>⚡ Challenge:</span> {item.challenge}
                  </div>
                  <div className={styles.baResult}>
                    <span>✓ Result:</span> {item.result}
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.baCta}>
              <a href={CTA_URL} className={styles.baCtaBtn}>
                Try It On Your Portrait Now →
              </a>
            </div>
          </section>

          {/* ════════════════════════════════════════════
              STATS BAR
          ════════════════════════════════════════════ */}
          <section className={styles.statsBar} aria-label="Platform statistics">
            {[
              { v: "3.8M+", l: "Portraits Processed" },
              { v: "< 5s", l: "Processing Time" },
              { v: "99.2%", l: "Hair Detection Accuracy" },
              { v: "4.9★", l: "Average Rating" },
              { v: "Zero", l: "Watermarks on Output" },
            ].map((s) => (
              <div className={styles.statItem} key={s.l}>
                <strong>{s.v}</strong>
                <span>{s.l}</span>
              </div>
            ))}
          </section>

          {/* ════════════════════════════════════════════
              WHAT IS A PORTRAIT BACKGROUND REMOVER
          ════════════════════════════════════════════ */}
          <section className={styles.section} aria-labelledby="what-is-h2">
            <div className={styles.sectionTag}>Understanding the Technology</div>
            <h2 id="what-is-h2" className={styles.sectionTitle}>
              What Is an AI Portrait Background Remover — and Why Does It Need to Be Different?
            </h2>
            <div className={styles.prose}>
              <p>
                A <strong>portrait background remover</strong> is a specialised category of
                AI-powered background removal technology that is specifically trained and optimised
                for images containing human subjects — people, faces, headshots, and full-body
                photographs. While general background removal tools work across all image types
                (products, animals, objects, landscapes), they frequently struggle with the
                unique visual complexity of human portrait photographs.
              </p>
              <p>
                The reason portraits require a specialist approach comes down to three core
                technical challenges that don't exist in product photography or object isolation:
              </p>
              <p>
                <strong>1. Hair.</strong> Human hair — whether straight, wavy, curly, fine, or
                voluminous — presents the single most difficult edge-detection problem in all of
                computer vision. Individual strands are often just 1–2 pixels wide, they overlap
                the background at thousands of points simultaneously, and they frequently match
                the background colour or lightness at certain sections. Generic models trained
                primarily on product photos simply cannot handle this with sufficient fidelity.
                Portrait-specific models use dedicated hair segmentation heads that are trained
                exclusively on millions of hair-against-background examples, learning the
                statistical patterns of strand density, curl radius, and colour transitions
                that allow them to predict hair boundaries even in ambiguous regions.
              </p>
              <p>
                <strong>2. Skin tones and facial detail.</strong> The face is the most scrutinised
                region of any portrait. Subtle colour casts introduced by background bleed,
                harsh edge artefacts at ear boundaries, or missing eyebrow hairs are immediately
                noticeable in a way that equivalent artefacts on a product photo would not be.
                Portrait AI models are trained to treat facial regions with extra precision,
                applying higher-resolution processing in areas around the hairline, ears, and
                chin-to-neck transition where human eyes are most sensitive to errors.
              </p>
              <p>
                <strong>3. Clothing and accessories.</strong> Earrings, glasses, sheer fabrics,
                and shoulder contours all require contextual understanding that general models
                lack. The model needs to know that a thin gold chain is part of the subject
                (not background to be removed), that glass spectacle frames should be preserved
                but their transparent lenses should not be made opaque, and that a collar
                follows a predictable anatomical trajectory even when partially obscured.
              </p>
              <p>
                Scenith's AI Background Remover is purpose-built to handle all of these challenges.
                When you use it specifically for portrait photos, the results are measurably better
                than generic background removal tools — sharper hair edges, cleaner facial
                boundaries, and preserved accessories and clothing details that lesser tools
                accidentally discard.
              </p>
            </div>
          </section>

          {/* ════════════════════════════════════════════
              HOW IT WORKS — 4 STEPS
          ════════════════════════════════════════════ */}
          <section className={styles.section} aria-labelledby="how-works-h2">
            <div className={styles.sectionTag}>Step-by-Step Guide</div>
            <h2 id="how-works-h2" className={styles.sectionTitle}>
              How to Remove Background from a Portrait in 4 Simple Steps
            </h2>

            <div className={styles.stepsGrid}>
              {[
                {
                  num: "01",
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17,8 12,3 7,8"/><line x1="12" y1="3" x2="12" y2="15"/>
                    </svg>
                  ),
                  title: "Upload Your Portrait",
                  body: "Click the CTA button on this page and upload your portrait photo — headshot, selfie, ID photo, full-body shot, or group portrait. JPG and PNG supported up to 30MB. The tool accepts images from any camera, phone, or scanner.",
                },
                {
                  num: "02",
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
                    </svg>
                  ),
                  title: "AI Detects Your Subject",
                  body: "The AI runs a two-pass analysis: first detecting the human subject using facial and body landmark recognition, then running a dedicated hair segmentation pass to map individual strand boundaries. This dual-pass approach is what separates portrait-specific AI from generic tools.",
                },
                {
                  num: "03",
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <polygon points="14 2 18 6 7 17 3 17 3 13 14 2"/><line x1="3" y1="22" x2="21" y2="22"/>
                    </svg>
                  ),
                  title: "Background Removed, Subject Preserved",
                  body: "Within 5 seconds, the background is fully removed. Hair edges are clean and natural. Skin tones at boundaries are accurate. Accessories and clothing contours are preserved. The output is a transparent PNG — your portrait is isolated with professional-grade precision.",
                },
                {
                  num: "04",
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7,10 12,15 17,10"/><line x1="12" y1="15" x2="12" y2="3"/>
                    </svg>
                  ),
                  title: "Download & Place Anywhere",
                  body: "Download your transparent PNG portrait with no watermarks. Use it on LinkedIn, your company website team page, a document, a creative composite, a presentation, or any platform. The transparent PNG gives you complete flexibility over what background you place your portrait against.",
                },
              ].map((s) => (
                <div className={styles.stepCard} key={s.num}>
                  <div className={styles.stepNumBadge}>{s.num}</div>
                  <div className={styles.stepIconWrap}>{s.icon}</div>
                  <h3 className={styles.stepTitle}>{s.title}</h3>
                  <p className={styles.stepBody}>{s.body}</p>
                </div>
              ))}
            </div>

            <div className={styles.stepsCta}>
              <a href={CTA_URL} className={styles.stepsCtaBtn}>
                ✨ Remove My Portrait Background Now
              </a>
            </div>
          </section>

          {/* ════════════════════════════════════════════
              USE CASES — PORTRAIT SPECIFIC
          ════════════════════════════════════════════ */}
          <section className={styles.section} aria-labelledby="use-cases-h2">
            <div className={styles.sectionTag}>Who Uses Portrait Background Removal</div>
            <h2 id="use-cases-h2" className={styles.sectionTitle}>
              14 Real-World Portrait Background Removal Use Cases in 2026
            </h2>
            <p className={styles.sectionIntro}>
              Portrait background removal is one of the most universally needed photo editing
              operations — it touches nearly every professional and personal context where
              a person's photo needs to be used outside its original environment.
              Here's where the technology is delivering the most value:
            </p>

            <div className={styles.ucGrid}>
              {[
                {
                  icon: "💼",
                  title: "LinkedIn & Professional Profile Photos",
                  body: "LinkedIn profile photos with clean, uncluttered backgrounds consistently receive more connection requests and recruiter attention than photos taken against busy real-world backgrounds. Removing a distracting home office or café background and replacing it with a clean grey or gradient takes 5 seconds and permanently elevates your professional presence online.",
                },
                {
                  icon: "🏢",
                  title: "Company Team & About Us Pages",
                  body: "Website team pages look dramatically more cohesive when every team member's headshot shares a consistent background treatment. Instead of asking 20 employees to attend a photoshoot in the same location, you can background-match existing photos from different cameras, locations, and lighting conditions with AI portrait background removal.",
                },
                {
                  icon: "🪪",
                  title: "Passport & Government ID Photos",
                  body: "Passport photo requirements specify exact background colours (white, off-white, or light grey depending on country). The AI removes existing backgrounds to transparent, allowing you to add the correct solid colour background and resize the portrait to meet documentation specifications before printing.",
                },
                {
                  icon: "🎓",
                  title: "Academic Profiles & Institutional Directories",
                  body: "Universities, research institutes, and professional organisations maintain faculty and staff directories where consistent, professional headshots signal institutional credibility. AI portrait background removal lets staff and researchers create standard-looking profile photos without requiring a centralised professional photography session.",
                },
                {
                  icon: "📰",
                  title: "Press Releases & PR Materials",
                  body: "When a company issues a press release featuring an executive or spokesperson, publications need high-resolution headshots on transparent or white backgrounds for easy placement in articles. Portrait background removal makes these assets instantly usable by any publication on any background colour.",
                },
                {
                  icon: "🏆",
                  title: "Award & Recognition Graphics",
                  body: "Internal award graphics, 'Employee of the Month' posts, industry recognition announcements, and achievement cards all require portrait photos composited onto designed backgrounds. Removing the original background first is essential for clean, professional-looking composites.",
                },
                {
                  icon: "🎭",
                  title: "Acting, Modelling & Creative Portfolio Headshots",
                  body: "Talent agencies, casting directors, and modelling scouts frequently request headshots on specific background colours. Actors and models can now deliver multiple background variants from a single photoshoot — keeping hair and skin tone perfectly rendered while switching between white, black, or coloured backgrounds instantly.",
                },
                {
                  icon: "👔",
                  title: "Resume & CV Photo Preparation",
                  body: "In markets where resume photos are expected (Europe, Asia, Middle East, India), the photo quality and presentation significantly affects first impressions. A portrait on a clean, professional background signals attention to detail before the employer reads a single word of the CV.",
                },
                {
                  icon: "📲",
                  title: "Social Media Content & Branding",
                  body: "Creators and personal brands who regularly appear in their own content need portrait-quality cutouts for thumbnails, branded graphics, and promotional materials. AI background removal enables consistent, polished personal branding across Instagram, YouTube, TikTok, and Twitter at the pace content demands.",
                },
                {
                  icon: "🛡️",
                  title: "Security & Access Control Badges",
                  body: "Corporate security badges, conference lanyards, employee ID cards, and event wristbands all require portrait photos on specific coloured backgrounds. HR departments and event organisers use portrait background removal to standardise hundreds of employee or attendee photos quickly.",
                },
                {
                  icon: "🎪",
                  title: "Wedding & Event Materials",
                  body: "Seating charts, programme booklets, wedding websites, and anniversary celebrations often feature portraits of guests, wedding party members, or the couple themselves composited onto themed designs. AI portrait removal makes these visual layouts possible without a professional photo editor.",
                },
                {
                  icon: "🏫",
                  title: "School Yearbooks & Class Photos",
                  body: "Yearbook designers and school photographers use portrait background removal to create consistent class photo pages, award sections, and individual headshot grids. Students photographed in different locations and lighting conditions are visually unified through background standardisation.",
                },
                {
                  icon: "🌐",
                  title: "International Remote Teams",
                  body: "Globally distributed teams contribute headshots from wildly different contexts — home offices in Mumbai, co-working spaces in Lagos, corporate offices in New York. Portrait background removal gives distributed companies a way to create visual team cohesion across their website and internal tools.",
                },
                {
                  icon: "🩺",
                  title: "Healthcare & Medical Staff Directories",
                  body: "Hospital websites, clinic portals, and telehealth platforms feature doctor and nurse profiles where professional, consistent presentation builds patient trust. Medical staff directory photos with clean backgrounds signal professionalism and reduce patient anxiety about engaging with unfamiliar providers.",
                },
              ].map((uc) => (
                <div className={styles.ucCard} key={uc.title}>
                  <div className={styles.ucIcon}>{uc.icon}</div>
                  <h3 className={styles.ucTitle}>{uc.title}</h3>
                  <p className={styles.ucBody}>{uc.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ════════════════════════════════════════════
              THE HAIR PROBLEM — DEEP DIVE
          ════════════════════════════════════════════ */}
          <section className={styles.section} aria-labelledby="hair-h2">
            <div className={styles.sectionTag}>Technical Deep Dive</div>
            <h2 id="hair-h2" className={styles.sectionTitle}>
              The Hair Problem: Why Portrait Background Removal Is the Hardest AI Photo Editing Task
            </h2>

            <div className={styles.prose}>
              <p>
                If you've ever tried to use a general-purpose background removal tool on a portrait
                photo and been disappointed by the result, there's a good chance <strong>hair edges</strong>
                were the reason. Hair is the defining challenge of portrait background removal, and
                it's worth understanding exactly why — because it explains why specialist AI models
                exist and why they produce dramatically better results.
              </p>
              <p>
                Consider what a strand of hair actually looks like to a computer vision model
                analysing a portrait image: a 1–3 pixel wide structure of variable colour
                (dependent on lighting, dye, and sheen), with semi-transparent edges where
                individual strands are thin enough for the background to show through, overlapping
                with other strands in unpredictable patterns, and often matching the background
                in lightness or hue at specific points. Against a white wall, dark hair is
                relatively easy. Against a grey background when the person has grey-streaked
                hair, or against blue sky when the person has dark hair and the sky has similar
                tonal values at dusk — these cases become genuinely hard.
              </p>
              <p>
                Early background removal tools (including the first generation of AI-powered ones
                from around 2016–2019) handled hair by essentially finding a hard boundary and
                cutting there. The result was a "helmet head" effect — perfectly clean around the
                scalp but with all individual hair strands clipped, producing an unnaturally sharp
                artificial contour that immediately reads as AI-processed. This was acceptable for
                quick social media uses but completely unusable for professional applications.
              </p>
              <p>
                Modern portrait background removal AI uses what are called <strong>matting networks</strong>
                — neural models specifically trained to estimate the alpha (transparency) value
                of each pixel rather than making a binary keep/remove decision. Instead of saying
                "this pixel is hair (keep) or background (remove)," a matting network says "this
                pixel is 70% hair and 30% background, therefore its alpha value should be 0.7."
                This per-pixel transparency estimation is what produces the natural-looking
                semi-transparent hair edge transitions that distinguish high-quality portrait
                background removal from low-quality results.
              </p>
              <p>
                Different hair types present different specific challenges for matting networks:
              </p>
            </div>

            <div className={styles.hairGrid}>
              {[
                {
                  type: "Fine Straight Hair",
                  challenge: "Individual strands may be sub-pixel width; model needs to infer strand presence from surrounding texture patterns rather than direct pixel evidence",
                  difficulty: "Medium",
                  color: "#3B82F6",
                },
                {
                  type: "Thick Straight Hair",
                  challenge: "Relatively manageable — clear mass boundary, though flyaways and baby hairs at the periphery still require matting network treatment",
                  difficulty: "Low",
                  color: "#10B981",
                },
                {
                  type: "Wavy / Loose Curls",
                  challenge: "Variable density across the hair mass, looping strands cross the background boundary multiple times, complex internal shadow patterns",
                  difficulty: "High",
                  color: "#F59E0B",
                },
                {
                  type: "Tight Curls / Afro Hair",
                  challenge: "Extremely high boundary complexity — the surface area of background-touching edges per square centimetre is vastly higher than any other hair type",
                  difficulty: "Very High",
                  color: "#EF4444",
                },
                {
                  type: "White / Grey Hair",
                  challenge: "Colour matches typical background values (white walls, light grey backgrounds); model must rely on texture and context rather than colour contrast",
                  difficulty: "High",
                  color: "#F59E0B",
                },
                {
                  type: "Wet / Slicked Hair",
                  challenge: "Different reflectance properties and colour depth, strand separation reduced; model trained on dry hair may misfire on soaked or gelled hair",
                  difficulty: "Medium",
                  color: "#3B82F6",
                },
              ].map((h) => (
                <div className={styles.hairCard} key={h.type}>
                  <div className={styles.hairType}>{h.type}</div>
                  <div
                    className={styles.hairDiff}
                    style={{ color: h.color, borderColor: h.color, background: `${h.color}12` }}
                  >
                    {h.difficulty}
                  </div>
                  <p className={styles.hairChallenge}>{h.challenge}</p>
                </div>
              ))}
            </div>

            <div className={styles.prose} style={{ marginTop: "24px" }}>
              <p>
                Scenith's AI handles all of these hair types with significantly higher fidelity
                than general-purpose background removal tools, because the underlying model was
                trained specifically on portrait images with curated examples of each hair type
                against diverse background conditions. The result is background-removed portraits
                that look like they were carefully cut out by hand — which is exactly the
                standard required for professional use.
              </p>
            </div>
          </section>

          {/* ════════════════════════════════════════════
              PORTRAIT TYPES GUIDE
          ════════════════════════════════════════════ */}
          <section className={styles.section} aria-labelledby="types-h2">
            <div className={styles.sectionTag}>Complete Portrait Types Guide</div>
            <h2 id="types-h2" className={styles.sectionTitle}>
              Every Portrait Type — Optimal Settings &amp; Tips for Perfect AI Background Removal
            </h2>
            <p className={styles.sectionIntro}>
              Not all portrait photos are the same, and the conditions under which they were
              photographed affect how the AI processes them. Here's a comprehensive guide to
              getting the best results for each common portrait type:
            </p>

            <div className={styles.typesList}>
              {[
                {
                  type: "Corporate Headshot",
                  icon: "📸",
                  desc: "Typically shot in a studio or controlled environment with even lighting and a deliberate background. These are the ideal case for portrait background removal.",
                  tips: [
                    "Even studio lighting means predictable edge detection — expect excellent results",
                    "Slight background defocus (bokeh) can confuse colour-matching but not AI matting",
                    "Check collar and shoulder contours — these should be razor-sharp in your output",
                    "If your headshot is already clean studio work, the AI output will be essentially indistinguishable from manual masking",
                  ],
                  quality: "Excellent",
                  qColor: "#10B981",
                },
                {
                  type: "Outdoor Environmental Portrait",
                  icon: "🌿",
                  desc: "Shot outdoors against natural backgrounds — parks, streets, architectural settings. Variable lighting and complex backgrounds.",
                  tips: [
                    "Dappled light and natural textures are challenging but AI handles them well",
                    "Wind-blown hair adds complexity — use the highest quality model available",
                    "Watch for foliage that overlaps with the subject's outline on the edges",
                    "Golden hour shots with warm backlighting may show slight fringing — check hair edges carefully",
                  ],
                  quality: "Very Good",
                  qColor: "#3B82F6",
                },
                {
                  type: "Smartphone Selfie",
                  icon: "🤳",
                  desc: "Taken with a phone camera, often in natural light or indoor mixed lighting. The most common portrait type submitted for background removal.",
                  tips: [
                    "Portrait mode selfies with software bokeh work perfectly — the AI ignores the artificial blur",
                    "Strong shadow on one side of the face doesn't affect subject detection accuracy",
                    "Messy indoor backgrounds (bookshelves, kitchens) are handled well by modern models",
                    "Upload the full resolution original — avoid heavily compressed JPEG versions if possible",
                  ],
                  quality: "Very Good",
                  qColor: "#3B82F6",
                },
                {
                  type: "Event / Conference Photo",
                  icon: "🎤",
                  desc: "Taken at professional events, conferences, or speaking engagements. Often features multiple background elements and mixed lighting.",
                  tips: [
                    "Crowds in the background are handled well by the AI — each person in the background is treated as background",
                    "Stage lighting (coloured gels, spots) may create unusual colour fringing at hair edges",
                    "Microphones, podiums, and other foreground objects attached to the subject are preserved",
                    "Large event banner backdrops are usually easy to remove due to flat colour/texture",
                  ],
                  quality: "Good",
                  qColor: "#F59E0B",
                },
                {
                  type: "Webcam / Video Call Screenshot",
                  icon: "💻",
                  desc: "Lower resolution images from video conferencing tools. Common for remote workers who need a professional headshot.",
                  tips: [
                    "Resolution may be limited (720p or 1080p max) — the AI still produces clean results but don't expect ultra-fine hair",
                    "JPEG compression artefacts around edges can slightly reduce quality",
                    "Well-lit webcam shots (ring light, window light) produce significantly better results than dark setups",
                    "Consider using a high-resolution webcam snapshot rather than a screenshot from a video call recording",
                  ],
                  quality: "Good",
                  qColor: "#F59E0B",
                },
                {
                  type: "Old / Scanned / Film Photo",
                  icon: "📷",
                  desc: "Digitised prints, scanned film photos, or old digital photos with grain, fading, or quality issues.",
                  tips: [
                    "Grain and film noise can introduce artefacts at hair edges — results vary by scan quality",
                    "Faded colour due to age may reduce contrast between subject and background",
                    "High-resolution scans (600+ DPI) produce markedly better AI results than low-res scans",
                    "Consider applying gentle noise reduction before uploading if the grain level is heavy",
                  ],
                  quality: "Variable",
                  qColor: "#94A3B8",
                },
              ].map((t) => (
                <div className={styles.typeCard} key={t.type}>
                  <div className={styles.typeCardTop}>
                    <div className={styles.typeInfo}>
                      <span className={styles.typeIcon}>{t.icon}</span>
                      <div>
                        <h3 className={styles.typeTitle}>{t.type}</h3>
                        <p className={styles.typeDesc}>{t.desc}</p>
                      </div>
                    </div>
                    <span
                      className={styles.typeQuality}
                      style={{ color: t.qColor, borderColor: t.qColor, background: `${t.qColor}12` }}
                    >
                      {t.quality}
                    </span>
                  </div>
                  <ul className={styles.typeTips}>
                    {t.tips.map((tip) => (
                      <li key={tip}>{tip}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* ════════════════════════════════════════════
              PLATFORM GUIDE
          ════════════════════════════════════════════ */}
          <section className={styles.section} aria-labelledby="platforms-h2">
            <div className={styles.sectionTag}>Platform-by-Platform Guide</div>
            <h2 id="platforms-h2" className={styles.sectionTitle}>
              After Background Removal: Exact Background Specs for Every Major Platform &amp; Use Case
            </h2>
            <p className={styles.sectionIntro}>
              Removing the background is step one. Knowing exactly what background to replace it
              with for your specific use case is where a lot of people get stuck. Here are the
              precise specifications for every major platform and document type:
            </p>

            <div className={styles.platformGrid}>
              {[
                {
                  platform: "LinkedIn Profile Photo",
                  icon: "🔵",
                  bgSpec: "White, light grey, or soft gradient",
                  hexSuggestion: "#FFFFFF, #F1F5F9, or #E2E8F0",
                  size: "400 × 400px minimum (JPG/PNG)",
                  tip: "Light grey (#F1F5F9) photographs better than pure white — it avoids the 'floating head' look and adds subtle depth.",
                },
                {
                  platform: "US Passport Photo",
                  icon: "🇺🇸",
                  bgSpec: "Pure white or off-white",
                  hexSuggestion: "#FFFFFF or #F8F8F8",
                  size: "2×2 inches (600×600px at 300 DPI)",
                  tip: "The US State Department specifies a plain white or off-white background with no patterns, shadows, or gradients. Pure #FFFFFF is safe.",
                },
                {
                  platform: "Indian Passport Photo",
                  icon: "🇮🇳",
                  bgSpec: "Plain white background",
                  hexSuggestion: "#FFFFFF",
                  size: "3.5cm × 3.5cm (2×2 inches)",
                  tip: "Same as most international passports — #FFFFFF only. Ensure no shadow falls on the background area.",
                },
                {
                  platform: "UK Passport Photo",
                  icon: "🇬🇧",
                  bgSpec: "Cream or plain light grey",
                  hexSuggestion: "#F5F0E8 (cream) or #E8E8E8 (light grey)",
                  size: "45mm × 35mm",
                  tip: "UK specifically allows cream/light grey in addition to white — this can look more natural with fair skin tones.",
                },
                {
                  platform: "Twitter / X Profile Photo",
                  icon: "🐦",
                  bgSpec: "Any — platform allows all backgrounds",
                  hexSuggestion: "Brand colour, black, white, or gradient",
                  size: "400 × 400px (displays as circle)",
                  tip: "Twitter crops to a circle — keep the face and shoulders well within a central safe zone. Bold single-colour backgrounds perform well.",
                },
                {
                  platform: "Instagram Profile Photo",
                  icon: "📸",
                  bgSpec: "Any — vibrant and brand-consistent",
                  hexSuggestion: "Brand colour or gradient that contrasts skin tone",
                  size: "320 × 320px (displayed at 110px)",
                  tip: "Instagram profile photos are tiny. High-contrast, bold backgrounds help the photo read clearly at small sizes.",
                },
                {
                  platform: "Company Website / About Page",
                  icon: "🏢",
                  bgSpec: "Consistent across all team members — usually white or brand colour",
                  hexSuggestion: "Match your existing team page design system",
                  size: "500–800px square or 3:4 portrait",
                  tip: "The real value of portrait background removal for team pages is consistency — all photos should use the identical background hex value.",
                },
                {
                  platform: "Zoom / Virtual Background Integration",
                  icon: "💻",
                  bgSpec: "No background needed — transparent PNG used directly",
                  hexSuggestion: "N/A — upload transparent PNG to virtual background apps",
                  size: "Any resolution (higher = better)",
                  tip: "Some virtual background apps (mmhmm, Mmhmm, Descript) allow PNG portrait cutouts as overlay layers for video call presentations.",
                },
              ].map((p) => (
                <div className={styles.platformCard} key={p.platform}>
                  <div className={styles.platformTop}>
                    <span className={styles.platformIcon}>{p.icon}</span>
                    <h3 className={styles.platformName}>{p.platform}</h3>
                  </div>
                  <div className={styles.platformSpecs}>
                    <div>
                      <span>Background</span>
                      <strong>{p.bgSpec}</strong>
                    </div>
                    <div>
                      <span>Hex Value</span>
                      <strong style={{ fontFamily: "monospace", fontSize: "0.78rem" }}>{p.hexSuggestion}</strong>
                    </div>
                    <div>
                      <span>Size</span>
                      <strong>{p.size}</strong>
                    </div>
                  </div>
                  <p className={styles.platformTip}>💡 {p.tip}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ════════════════════════════════════════════
              MID-PAGE CTA BLOCK
          ════════════════════════════════════════════ */}
          <section className={styles.ctaBlock} aria-label="Primary call to action">
            <div className={styles.ctaBlockGlow} aria-hidden="true" />
            <div className={styles.ctaBlockInner}>
              <div className={styles.ctaBlockEye}>Remove Your Portrait Background Now</div>
              <h2 className={styles.ctaBlockTitle}>
                Professional Portrait. Perfect Edges.<br />
                <span className={styles.ctaBlockAccent}>Done in 5 Seconds.</span>
              </h2>
              <p className={styles.ctaBlockDesc}>
                Join 3.8 million portraits already processed. Whether it's a LinkedIn headshot,
                a passport photo, an ID picture, or a creative composite — Scenith's AI delivers
                the clean, hair-perfect, skin-accurate result you need.
              </p>
              <div className={styles.ctaBlockFeatures}>
                <span>✓ Hair-strand precision</span>
                <span>✓ Transparent PNG</span>
                <span>✓ No watermarks</span>
                <span>✓ Commercial rights</span>
              </div>
              <a href={CTA_URL} className={styles.ctaBlockBtn}>
                <span className={styles.ctaBlockBtnShine} aria-hidden="true" />
                🚀 Remove Portrait Background Free
              </a>
              <p className={styles.ctaBlockNote}>Plans from ₹349/month · $9/month · No software to install</p>
            </div>
          </section>

          {/* ════════════════════════════════════════════
              COMPARISON TABLE
          ════════════════════════════════════════════ */}
          <section className={styles.section} aria-labelledby="compare-h2">
            <div className={styles.sectionTag}>How We Compare</div>
            <h2 id="compare-h2" className={styles.sectionTitle}>
              Portrait Background Remover Comparison: Scenith vs. Other Tools in 2026
            </h2>
            <p className={styles.sectionIntro}>
              Lots of background removal tools exist. Most were not designed with portrait
              photographs as their primary use case. Here's an honest comparison:
            </p>

            <div className={styles.compTable}>
              <div className={styles.compTableHeader}>
                <div>Feature</div>
                <div className={styles.compUs}>Scenith</div>
                <div>Remove.bg</div>
                <div>Canva</div>
                <div>Photoshop</div>
              </div>
              {[
                ["Portrait-specific AI model", "✓", "Partial", "✗", "Manual"],
                ["Hair strand matting", "✓", "Good", "Basic", "Manual only"],
                ["Transparent PNG output", "✓", "✓ (paid)", "✓ (paid)", "✓ (manual)"],
                ["No watermark on output", "✓", "✗ (free tier)", "✗ (free tier)", "✓"],
                ["India pricing (₹/mo)", "₹349/mo", "₹1,200+/mo", "₹999+/mo", "₹5,000+/mo"],
                ["Processing speed", "< 5 sec", "< 5 sec", "< 5 sec", "Manual (mins)"],
                ["Batch processing", "Per image", "API available", "Per image", "Manual"],
                ["Commercial use rights", "✓", "✓", "✓ (paid)", "✓"],
                ["Image editor integration", "✓ Built-in", "✗", "✓ (Canva only)", "✓"],
                ["Learning curve", "Zero", "Zero", "Low", "High"],
              ].map((row) => (
                <div className={styles.compTableRow} key={row[0] as string}>
                  <div className={styles.compFeature}>{row[0]}</div>
                  <div className={`${styles.compCell} ${styles.compCellUs}`}>{row[1]}</div>
                  <div className={styles.compCell}>{row[2]}</div>
                  <div className={styles.compCell}>{row[3]}</div>
                  <div className={styles.compCell}>{row[4]}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ════════════════════════════════════════════
              PROFESSIONAL TIPS
          ════════════════════════════════════════════ */}
          <section className={styles.section} aria-labelledby="tips-h2">
            <div className={styles.sectionTag}>Pro Tips</div>
            <h2 id="tips-h2" className={styles.sectionTitle}>
              8 Professional Techniques to Get Perfect Portrait Background Removal Results
            </h2>

            <div className={styles.tipsGrid}>
              {[
                {
                  num: "01",
                  title: "Shoot With Contrast in Mind",
                  body: "If you're taking a portrait specifically to background-remove later, choose an outfit colour that contrasts with the background. Don't wear beige in front of a cream wall, or black in front of a dark background. Contrast is the AI's best friend.",
                },
                {
                  num: "02",
                  title: "Use Proper Lighting on the Subject",
                  body: "The main light source should illuminate the person, not the background. If the background is lit equally to the subject, separation becomes harder. A slight under-exposure on the background relative to the subject improves AI accuracy.",
                },
                {
                  num: "03",
                  title: "Upload the Highest Resolution You Have",
                  body: "AI accuracy scales with resolution. A 4000×3000px original will produce noticeably better hair edge results than a 800×600px compressed version of the same image. Always upload the original file, not a social-media-compressed copy.",
                },
                {
                  num: "04",
                  title: "Avoid Extreme Backlighting",
                  body: "Strong backlight (sun or lamp behind the subject) creates silhouette effects and chromatic aberration at hair edges that complicates the AI's job. Front light or side light consistently produces better removal results than backlighting.",
                },
                {
                  num: "05",
                  title: "Check the Neck-Shoulder Transition",
                  body: "In portrait background removal, the neck-to-shoulder region is where errors commonly occur — especially with open-collar shirts where skin meets fabric meets background in a tight spatial area. Always zoom into this region when reviewing AI output.",
                },
                {
                  num: "06",
                  title: "Use the Image Editor for Final Refinements",
                  body: "After background removal, use Scenith's built-in Image Editor to add your desired background colour, adjust brightness/contrast if needed, and make any minor manual touch-ups before exporting. The Edit in Editor button appears directly on the background removal results page.",
                },
                {
                  num: "07",
                  title: "Test Multiple Versions for Group Photos",
                  body: "For group portraits, if one member has a particularly challenging hair type or outfit-to-background match, try uploading a cropped version of that person separately, then composite the individually-processed portraits together in the editor for best results.",
                },
                {
                  num: "08",
                  title: "Mind the JPEG Compression Level",
                  body: "Heavily compressed JPEGs introduce blocking artefacts around high-contrast edges — exactly where hair meets background. If your original photo is available as a TIFF, RAW file, or high-quality JPEG (100% quality), use that rather than a compressed export.",
                },
              ].map((tip) => (
                <div className={styles.tipCard} key={tip.num}>
                  <div className={styles.tipNum}>{tip.num}</div>
                  <h3 className={styles.tipTitle}>{tip.title}</h3>
                  <p className={styles.tipBody}>{tip.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ════════════════════════════════════════════
              FAQ
          ════════════════════════════════════════════ */}
          <section className={styles.section} aria-labelledby="faq-h2">
            <div className={styles.sectionTag}>Frequently Asked Questions</div>
            <h2 id="faq-h2" className={styles.sectionTitle}>
              Portrait Background Removal FAQ — Complete 2026 Guide
            </h2>

            <div className={styles.faqList}>
              {[
                {
                  q: "What is a portrait background remover and how is it different from a general background remover?",
                  a: "A portrait background remover is an AI tool specifically optimised for images containing human subjects. It uses specialised models for face detection, hair segmentation (including individual strand matting), skin boundary preservation, and clothing/accessory detection. General background removers are trained across all image types and typically produce inferior results on portrait photos — particularly around hair, ears, and clothing edges.",
                },
                {
                  q: "How accurately does the AI detect and preserve fine hair strands?",
                  a: "Modern portrait background removal AI uses matting networks that estimate per-pixel transparency rather than making binary keep/remove decisions. This means individual hair strands, flyaways, and the semi-transparent regions at hair edges are handled with near-manual precision. Straight and moderately wavy hair achieves excellent results; curly and volumetric Afro hair is the most challenging but still significantly better than generic tools.",
                },
                {
                  q: "Can I remove the background from a passport or ID photo?",
                  a: "Yes. Upload your photo, remove the background to transparent, then add a solid white (#FFFFFF) or country-specific required background colour using any image editor (including Scenith's built-in editor). Always verify the final result meets your specific country's documentation photo requirements before printing, as regulations vary.",
                },
                {
                  q: "Does it work on group portraits or just single-person photos?",
                  a: "It works on both. For group photos, the AI detects and segments all human subjects, preserving all people in the frame as a single transparent unit while removing the background behind and between them. Individual portrait processing and group portrait processing both work via the same tool.",
                },
                {
                  q: "How do I get the best LinkedIn headshot result?",
                  a: "Upload your best headshot photo (portrait orientation, shoulders and head visible, good lighting). After background removal, use the Image Editor to add a clean light grey background (#F1F5F9 or #E2E8F0). Export as JPG at minimum 400×400px. LinkedIn recommends this background style — it photographs naturally and signals professionalism without being stark white.",
                },
                {
                  q: "What file formats are supported for portrait background removal?",
                  a: "JPG, JPEG, and PNG files up to 30MB are supported. For best results, upload the highest resolution original file available. PNG input is slightly preferred as it avoids JPEG compression artefacts at hair edges, but high-quality JPEG (90%+ quality) produces excellent results in practice.",
                },
                {
                  q: "Is there a limit on how many portrait backgrounds I can remove?",
                  a: "The number of removals depends on your Scenith plan and credit balance. Each background removal consumes a certain number of credits. Plan tiers are available starting at ₹349/month or $9/month, with higher tiers providing more credits for high-volume users.",
                },
                {
                  q: "What happens to my portrait photos after processing?",
                  a: "Your uploaded portrait photos are processed securely and not permanently stored beyond what is required to deliver your result. Scenith does not use your photos for AI training without consent. The processed transparent PNG is available in your account history for re-download.",
                },
                {
                  q: "Can I edit the background-removed portrait in Scenith's editor?",
                  a: "Yes. After the background is removed, an 'Edit in Image Editor' button appears directly on the results page. This opens Scenith's full image editing tool with your transparent portrait as a layer, ready for you to add backgrounds, text, design elements, or make any adjustments needed for your specific use case.",
                },
                {
                  q: "Does skin tone accuracy get affected by background removal?",
                  a: "With well-implemented portrait AI, skin tones should be completely unaffected. The background removal process operates on the alpha channel (transparency) and does not modify pixel colour values within the detected subject area. Poorly implemented tools can introduce colour fringing at skin-background boundaries, but Scenith's model specifically handles the face region with extra precision to avoid this.",
                },
              ].map((item) => (
                <details className={styles.faqItem} key={item.q}>
                  <summary className={styles.faqQ}>
                    {item.q}
                    <span className={styles.faqToggle} aria-hidden="true">+</span>
                  </summary>
                  <p className={styles.faqA}>{item.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* ════════════════════════════════════════════
              FINAL CTA
          ════════════════════════════════════════════ */}
          <section className={styles.finalCta} aria-label="Final call to action">
            <div className={styles.finalCtaOrb1} aria-hidden="true" />
            <div className={styles.finalCtaOrb2} aria-hidden="true" />
            <div className={styles.finalCtaInner}>
              <h2 className={styles.finalCtaTitle}>
                Your Portrait Deserves<br />
                <span className={styles.finalCtaGrad}>Hair-Perfect Precision.</span>
              </h2>
              <p className={styles.finalCtaBody}>
                Don't settle for jagged edges, clipped hair, or blocky masks from generic tools.
                Scenith's portrait-optimised AI delivers professional results on every face,
                every hair type, every portrait scenario — in the time it takes to make a cup of chai.
              </p>
              <a href={CTA_URL} className={styles.finalCtaBtn}>
                <span className={styles.finalBtnShine} aria-hidden="true" />
                ✨ Remove Portrait Background Free
              </a>
              <p className={styles.finalCtaNote}>
                3.8M+ portraits processed · Plans from ₹349/mo · No design skills needed
              </p>
            </div>
          </section>

          <div style={{ height: 80 }} />
        </div>
      </main>
    </>
  );
}