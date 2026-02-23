import type { Metadata } from "next";
import Link from "next/link";
import "@/styles/tools/ImageToPdf.css";

const TOOL_URL =
  "https://scenith.in/tools/pdf-tools/images-to-pdf?utm_source=photo-to-pdf-page&utm_medium=cta&utm_campaign=photo_to_pdf_organic";

export const metadata: Metadata = {
  title: "Photo to PDF Converter Free Online - Mobile Photos, Scans & Screenshots | SCENITH",
  description:
    "Convert your mobile photos, camera scans, and screenshots to PDF instantly. No app download needed. Works on Android, iPhone & desktop. Free, unlimited, no watermark.",
  keywords: [
    "photo to pdf",
    "photo to pdf converter",
    "convert photo to pdf",
    "mobile photo to pdf",
    "camera photo to pdf",
    "photo to pdf free",
    "photo to pdf online",
    "photo to pdf no watermark",
    "scan photo to pdf",
    "screenshot to pdf",
    "iphone photo to pdf",
    "android photo to pdf",
    "jpeg to pdf",
    "heic to pdf",
    "multiple photos to pdf",
    "photo pdf maker",
    "photo to pdf converter online free",
    "photo se pdf kaise banaye",
  ],
  openGraph: {
    title: "Photo to PDF Converter - Free Online, No App Required | SCENITH",
    description:
      "Turn your phone photos, scanned receipts, and screenshots into professional PDFs in seconds. Free, no watermark, works on all devices.",
    type: "website",
    locale: "en_IN",
  },
  alternates: {
    canonical: "/pdf-tools/photo-to-pdf",
  },
  other: {
    "geo.region": "IN",
    "geo.placename": "India",
    "geo.position": "20.5937;78.9629",
  },
};

export default function PhotoToPdfPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://scenith.in/tools/pdf-tools/photo-to-pdf#webpage",
        url: "https://scenith.in/tools/pdf-tools/photo-to-pdf",
        name: "Photo to PDF Converter Free Online | SCENITH",
        description:
          "Convert mobile photos, camera scans, and screenshots to PDF instantly. Free, no watermark, works on Android and iPhone.",
        inLanguage: "en-IN",
        isPartOf: {
          "@id": "https://scenith.in/#website",
        },
        breadcrumb: {
          "@id": "https://scenith.in/tools/pdf-tools/photo-to-pdf#breadcrumb",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://scenith.in/tools/pdf-tools/photo-to-pdf#breadcrumb",
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
            name: "PDF Tools",
            item: "https://scenith.in/tools/pdf-tools",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Photo to PDF Converter",
            item: "https://scenith.in/tools/pdf-tools/photo-to-pdf",
          },
        ],
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://scenith.in/tools/pdf-tools/photo-to-pdf#app",
        name: "SCENITH Photo to PDF Converter",
        applicationCategory: "UtilitiesApplication",
        operatingSystem: "Web Browser, Android, iOS, Windows, macOS",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
        },
        featureList: [
          "Convert photos to PDF instantly",
          "Supports HEIC, JPG, PNG, WebP",
          "No watermark on output",
          "Unlimited conversions",
          "Mobile-first interface",
          "Combine multiple photos into one PDF",
        ],
        author: {
          "@type": "Organization",
          name: "SCENITH",
          url: "https://scenith.in",
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://scenith.in/tools/pdf-tools/photo-to-pdf#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "How do I convert a photo to PDF on my phone?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Open SCENITH's Photo to PDF tool in your phone browser. Tap the upload button, select your photos from your gallery, arrange them in the desired order, and tap Convert. Your PDF downloads instantly — no app installation required.",
            },
          },
          {
            "@type": "Question",
            name: "Can I convert iPhone HEIC photos to PDF?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. SCENITH fully supports HEIC format, which is the default photo format on iPhones. Simply upload your HEIC photos and they will be converted to a PDF document automatically.",
            },
          },
          {
            "@type": "Question",
            name: "Is photo to PDF conversion really free with no watermark?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, completely free and no watermark. SCENITH's converter is 100% free with no hidden charges. Your converted PDF will have no SCENITH watermark or branding. Download and use it freely.",
            },
          },
          {
            "@type": "Question",
            name: "How many photos can I combine into one PDF?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "There is no hard limit. You can combine multiple photos — whether it is 2 photos or 50 photos — into a single PDF document. Each photo becomes one page in the PDF.",
            },
          },
          {
            "@type": "Question",
            name: "Will the photo quality be reduced in the PDF?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. SCENITH uses intelligent compression that preserves visual quality while keeping file sizes manageable. High-resolution photos remain clear and sharp in the output PDF.",
            },
          },
          {
            "@type": "Question",
            name: "Can I convert a WhatsApp photo to PDF?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Save the WhatsApp photo to your phone gallery or download it to your device, then upload it to SCENITH's Photo to PDF converter. It works with any photo saved on your device.",
            },
          },
        ],
      },
      {
        "@type": "HowTo",
        "@id": "https://scenith.in/tools/pdf-tools/photo-to-pdf#howto",
        name: "How to Convert Photos to PDF Online Free",
        description:
          "Step-by-step guide to converting mobile photos, camera images, and screenshots into a PDF document using SCENITH",
        totalTime: "PT1M",
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: "Upload Your Photos",
            text: "Click the Upload button and select photos from your phone gallery, computer, or camera roll. Supports JPG, PNG, HEIC, WebP, and more.",
          },
          {
            "@type": "HowToStep",
            position: 2,
            name: "Arrange Photo Order",
            text: "Drag and drop your photos to set the page order. Each photo becomes one page in your final PDF.",
          },
          {
            "@type": "HowToStep",
            position: 3,
            name: "Convert and Download",
            text: "Click Convert to PDF. Your PDF is ready in seconds. Download it directly — no email required.",
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="photo-to-pdf-page">
        {/* ── Breadcrumb ── */}
        <nav aria-label="Breadcrumb" className="photo-pdf-breadcrumb">
          <ol itemScope itemType="https://schema.org/BreadcrumbList">
            <li
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              <a href="/" itemProp="item">
                <span itemProp="name">Home</span>
              </a>
              <meta itemProp="position" content="1" />
            </li>
            <span aria-hidden="true"> › </span>
            <li
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              <a href="/pdf-tools" itemProp="item">
                <span itemProp="name">PDF Tools</span>
              </a>
              <meta itemProp="position" content="2" />
            </li>
            <span aria-hidden="true"> › </span>
            <li
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              <span itemProp="name">Photo to PDF Converter</span>
              <meta itemProp="position" content="3" />
            </li>
          </ol>
        </nav>

        {/* ══════════════════════════════════════════
            HERO
        ══════════════════════════════════════════ */}
        <section className="photo-pdf-hero" aria-labelledby="hero-heading">
          <div className="photo-pdf-hero__inner">
            <div className="photo-pdf-hero__badge">📱 Mobile-First · No App Required</div>

            <h1 id="hero-heading" className="photo-pdf-hero__title">
              Convert Photos to PDF Free Online
              <span className="photo-pdf-hero__subtitle">
                Mobile Photos, WhatsApp Images, Scans & Screenshots — Instant PDF, No Watermark
              </span>
            </h1>

            <p className="photo-pdf-hero__description">
              The fastest way to turn your camera photos, scanned documents, and screenshots into
              a professional PDF. Works directly in your phone browser — no app download, no
              signup, completely free. Trusted by students, professionals, and small businesses
              across India.
            </p>

            {/* ── TRUST BADGES ── */}
            <div className="photo-pdf-trust-row" role="list" aria-label="Key features">
              {[
                { icon: "✅", text: "100% Free" },
                { icon: "🚫", text: "No Watermark" },
                { icon: "📱", text: "Works on Mobile" },
                { icon: "⚡", text: "Instant Conversion" },
                { icon: "🔒", text: "Private & Secure" },
                { icon: "♾️", text: "Unlimited Photos" },
              ].map((badge) => (
                <div key={badge.text} className="photo-pdf-trust-badge" role="listitem">
                  <span aria-hidden="true">{badge.icon}</span>
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>

            {/* ══ MEGA CTA BUTTON ══ */}
            <div className="photo-pdf-cta-wrapper">
              
            <a    href={TOOL_URL}
                className="photo-pdf-cta-primary"
                aria-label="Open Photo to PDF Converter tool"
                rel="noopener"
              >
                <span className="photo-pdf-cta-primary__icon" aria-hidden="true">
                  📷
                </span>
                <span className="photo-pdf-cta-primary__text">
                  Convert My Photos to PDF — Free
                </span>
                <span className="photo-pdf-cta-primary__arrow" aria-hidden="true">
                  →
                </span>
              </a>
              <p className="photo-pdf-cta-note">
                 No app download · Works on Chrome, Safari, Firefox
              </p>
            </div>

            {/* ── Device tags ── */}
            <div className="photo-pdf-device-tags" aria-label="Compatible devices">
              {[
                "📱 Android",
                "🍎 iPhone",
                "💻 Windows",
                "🖥️ Mac",
                "📟 Tablet",
              ].map((d) => (
                <span key={d} className="photo-pdf-device-tag">
                  {d}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            WHAT MAKES THIS DIFFERENT (Featured-snippet bait)
        ══════════════════════════════════════════ */}
        <section
          className="photo-pdf-definition"
          aria-labelledby="definition-heading"
        >
          <div className="photo-pdf-container">
            <div className="photo-pdf-definition__box">
              <h2 id="definition-heading" className="visually-hidden">
                What is a Photo to PDF Converter?
              </h2>
              <p className="photo-pdf-definition__text">
                A <strong>photo to PDF converter</strong> is an online tool that transforms
                digital photos — taken with a phone camera, scanner, or screen capture — into a
                single, universally readable PDF document. Unlike sending loose image files,
                a PDF preserves layout, prevents editing, and opens on every device without
                special software. SCENITH&apos;s converter handles this entirely in your browser,
                with no file size limits and no watermark on the output.
              </p>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            HOW IT WORKS — 3 STEPS
        ══════════════════════════════════════════ */}
        <section
          className="photo-pdf-steps"
          id="how-it-works"
          aria-labelledby="steps-heading"
        >
          <div className="photo-pdf-container">
            <h2 id="steps-heading" className="photo-pdf-section-title">
              How to Convert Photos to PDF in 3 Steps
            </h2>
            <p className="photo-pdf-section-desc">
              No technical knowledge needed. The entire process takes under 60 seconds,
              even on a slow mobile connection.
            </p>

            <div className="photo-pdf-steps__grid">
              {[
                {
                  num: "01",
                  icon: "📤",
                  title: "Upload Your Photos",
                  body: "Tap the upload area and select photos from your phone gallery, Google Photos, iCloud, or your computer. You can select multiple photos at once. Supports JPG, PNG, HEIC (iPhone), WebP, BMP, TIFF, GIF, and more.",
                  tip: "Tip: On Android, long-press photos in your gallery to select multiple at once before uploading.",
                },
                {
                  num: "02",
                  icon: "🔀",
                  title: "Arrange the Page Order",
                  body: "Drag and drop your uploaded photos to set the exact order they should appear in the PDF. Remove any photo you don't need. Each photo becomes one page. Preview thumbnails show you exactly how the final PDF will look.",
                  tip: "Tip: Name your photos 01.jpg, 02.jpg before uploading for automatic correct ordering.",
                },
                {
                  num: "03",
                  icon: "📥",
                  title: "Download Your PDF",
                  body: "Click Convert to PDF. Processing completes in seconds regardless of how many photos you uploaded. Download the finished PDF directly to your device — no email required, no account needed.",
                  tip: "Tip: Save your PDF to Google Drive or iCloud immediately after downloading for easy sharing.",
                },
              ].map((step) => (
                <article key={step.num} className="photo-pdf-step-card">
                  <div className="photo-pdf-step-card__num" aria-hidden="true">
                    {step.num}
                  </div>
                  <div
                    className="photo-pdf-step-card__icon"
                    aria-hidden="true"
                  >
                    {step.icon}
                  </div>
                  <h3 className="photo-pdf-step-card__title">{step.title}</h3>
                  <p className="photo-pdf-step-card__body">{step.body}</p>
                  <div className="photo-pdf-step-card__tip">
                    <strong>💡 {step.tip}</strong>
                  </div>
                </article>
              ))}
            </div>

            {/* Mid-content CTA */}
            <div className="photo-pdf-mid-cta">
              
            <a    href={TOOL_URL}
                className="photo-pdf-cta-primary"
                aria-label="Start converting photos to PDF"
              >
                <span aria-hidden="true">🚀</span> Start Converting Now — It&apos;s Free
              </a>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            USE CASES — THE REAL DIFFERENTIATOR
        ══════════════════════════════════════════ */}
        <section
          className="photo-pdf-usecases"
          id="use-cases"
          aria-labelledby="usecases-heading"
        >
          <div className="photo-pdf-container">
            <h2 id="usecases-heading" className="photo-pdf-section-title">
              Who Uses Photo to PDF Conversion — and Why
            </h2>
            <p className="photo-pdf-section-desc">
              From students submitting assignments to business owners filing receipts,
              photo-to-PDF conversion solves real everyday problems across India and globally.
            </p>

            <div className="photo-pdf-usecases__grid">
              {[
                {
                  icon: "🎓",
                  title: "Students & Exam Submissions",
                  scenarios: [
                    "Convert handwritten answer sheets to PDF for online submission portals",
                    "Scan textbook pages to create study notes PDFs",
                    "Submit assignment photos as a single PDF instead of multiple images",
                    "Create project portfolios from lab photos",
                    "Convert hall ticket photos to PDF for record keeping",
                  ],
                  highlight:
                    "Most university portals only accept PDF. Converting WhatsApp photos of handwritten assignments takes 30 seconds.",
                },
                {
                  icon: "🏢",
                  title: "Professionals & Office Work",
                  scenarios: [
                    "Convert business card photos to an organized PDF directory",
                    "Create PDF reports from whiteboard meeting photos",
                    "Submit expense receipts from phone photos as a single PDF",
                    "Convert signed physical forms photographed on a phone to PDF",
                    "Create property inspection reports from site photos",
                  ],
                  highlight:
                    "HR, accounts, and admin teams use photo-to-PDF daily for documentation without a physical scanner.",
                },
                {
                  icon: "🏪",
                  title: "Small Business & Self-Employed",
                  scenarios: [
                    "Convert GST bill photos to PDF for records and tax filing",
                    "Create product catalogues from phone photos",
                    "Submit quotation photos to clients as professional PDFs",
                    "Convert delivery challan photos to PDF archives",
                    "Create before/after comparison PDFs from service photos",
                  ],
                  highlight:
                    "Small kirana owners, contractors, and freelancers save hours by photographing paperwork and converting instantly.",
                },
                {
                  icon: "⚖️",
                  title: "Legal & Government Documents",
                  scenarios: [
                    "Convert Aadhaar card, PAN card photos to PDF for KYC submissions",
                    "Create PDF copies of property documents from photos",
                    "Submit affidavit photos as PDF to government portals",
                    "Convert passport, visa photos to required PDF format",
                    "Create PDF bundles of legal agreements photographed on site",
                  ],
                  highlight:
                    "Government portals and banks frequently require PDF format. Converting ID card photos takes seconds.",
                },
                {
                  icon: "🏥",
                  title: "Medical & Healthcare",
                  scenarios: [
                    "Convert prescription photos to PDF for digital pharmacy orders",
                    "Create patient history PDFs from medical report photos",
                    "Submit lab report photos as PDF for teleconsultation",
                    "Convert hospital bill photos to PDF for insurance claims",
                    "Create vaccination certificate PDFs from photo copies",
                  ],
                  highlight:
                    "Telemedicine and online insurance portals require medical documents as PDF. Photo conversion eliminates scanning.",
                },
                {
                  icon: "🏠",
                  title: "Personal & Household",
                  scenarios: [
                    "Convert electricity/water bill photos to PDF for records",
                    "Create PDF albums from family photos for grandparents",
                    "Convert rent agreement photos to PDF for easy sharing",
                    "Submit vehicle documents as PDF for insurance renewals",
                    "Create renovation project PDFs from before/after photos",
                  ],
                  highlight:
                    "Keeping important home documents as PDF makes sharing with family members or banks straightforward.",
                },
              ].map((uc) => (
                <article key={uc.title} className="photo-pdf-usecase-card">
                  <div className="photo-pdf-usecase-card__header">
                    <span
                      className="photo-pdf-usecase-card__icon"
                      aria-hidden="true"
                    >
                      {uc.icon}
                    </span>
                    <h3 className="photo-pdf-usecase-card__title">{uc.title}</h3>
                  </div>
                  <ul className="photo-pdf-usecase-card__list">
                    {uc.scenarios.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                  <div className="photo-pdf-usecase-card__highlight">
                    <strong>💡 Real world:</strong> {uc.highlight}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            SUPPORTED FORMATS — DEEP DIVE
        ══════════════════════════════════════════ */}
        <section
          className="photo-pdf-formats"
          id="supported-formats"
          aria-labelledby="formats-heading"
        >
          <div className="photo-pdf-container">
            <h2 id="formats-heading" className="photo-pdf-section-title">
              Every Photo Format Supported — Including HEIC & WebP
            </h2>
            <p className="photo-pdf-section-desc">
              Modern phones create photos in formats that many tools can&apos;t handle.
              SCENITH supports them all natively, so you never need to convert formats
              before converting to PDF.
            </p>

            <div className="photo-pdf-formats__grid">
              {[
                {
                  format: "JPG / JPEG",
                  badge: "Most Common",
                  badgeColor: "green",
                  desc: "The standard photo format used by most Android cameras, DSLRs, and downloaded images. Perfect quality-to-size ratio for PDF conversion.",
                  devices: "Android, Windows, most cameras",
                },
                {
                  format: "HEIC / HEIF",
                  badge: "iPhone Default",
                  badgeColor: "blue",
                  desc: "Apple's default photo format since iOS 11. Smaller file size than JPG with better quality. SCENITH converts HEIC photos to PDF without requiring any format change.",
                  devices: "iPhone, iPad (iOS 11+)",
                },
                {
                  format: "PNG",
                  badge: "Lossless",
                  badgeColor: "purple",
                  desc: "Lossless format that preserves exact pixel data. Ideal for screenshots, diagrams, text-heavy images, and any photo where quality must not degrade.",
                  devices: "All devices, screenshots",
                },
                {
                  format: "WebP",
                  badge: "Modern Web",
                  badgeColor: "orange",
                  desc: "Google's modern image format used by WhatsApp web downloads and many websites. Provides excellent quality at small sizes.",
                  devices: "Chrome browser, WhatsApp web",
                },
                {
                  format: "BMP",
                  badge: "Windows Native",
                  badgeColor: "gray",
                  desc: "Uncompressed bitmap format native to Windows. Large file sizes but zero compression artifacts. Common in legacy Windows applications and scanner output.",
                  devices: "Windows computers, scanners",
                },
                {
                  format: "TIFF",
                  badge: "Professional",
                  badgeColor: "darkblue",
                  desc: "High-quality format used by professional scanners and archival photography. Preserves all image data for print-quality PDF output.",
                  devices: "Professional scanners, DSLRs",
                },
                {
                  format: "GIF",
                  badge: "Web Graphics",
                  badgeColor: "pink",
                  desc: "Graphics format commonly used for logos and icons with limited colors. SCENITH converts the first frame of animated GIFs to PDF.",
                  devices: "Web images, logos",
                },
                {
                  format: "SVG",
                  badge: "Vector",
                  badgeColor: "teal",
                  desc: "Scalable vector graphics that maintain perfect sharpness at any size. Ideal for logos, icons, and diagrams that need to look crisp in PDF.",
                  devices: "Design tools, web exports",
                },
              ].map((f) => (
                <div key={f.format} className="photo-pdf-format-card">
                  <div className="photo-pdf-format-card__top">
                    <strong className="photo-pdf-format-card__name">
                      {f.format}
                    </strong>
                    <span
                      className={`photo-pdf-format-badge photo-pdf-format-badge--${f.badgeColor}`}
                    >
                      {f.badge}
                    </span>
                  </div>
                  <p className="photo-pdf-format-card__desc">{f.desc}</p>
                  <p className="photo-pdf-format-card__devices">
                    <strong>Common on:</strong> {f.devices}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            PHOTO TO PDF VS IMAGE TO PDF — CONTENT DIFFERENTIATION
        ══════════════════════════════════════════ */}
        <section
          className="photo-pdf-comparison"
          id="photo-vs-image"
          aria-labelledby="comparison-heading"
        >
          <div className="photo-pdf-container">
            <h2 id="comparison-heading" className="photo-pdf-section-title">
              Photo to PDF vs Image to PDF: What&apos;s the Difference?
            </h2>
            <p className="photo-pdf-section-desc">
              People search for both terms, but their intent is subtly different.
              Understanding this helps you get the best results.
            </p>

            <div className="photo-pdf-compare-grid">
              <div className="photo-pdf-compare-card photo-pdf-compare-card--photo">
                <h3>📷 Photo to PDF</h3>
                <p>
                  Typically refers to converting <strong>camera-captured images</strong> — from
                  a phone, DSLR, or webcam. These are real-world photographs with varying
                  lighting, angles, and natural imperfections. Common formats: JPG, HEIC, RAW.
                </p>
                <p>
                  <strong>Typical use cases:</strong> Scanning physical documents with a phone
                  camera, converting receipts and bills, submitting handwritten notes, creating
                  property inspection records.
                </p>
                <ul>
                  <li>✅ Phone camera photos</li>
                  <li>✅ Scanned receipts & bills</li>
                  <li>✅ Handwritten documents</li>
                  <li>✅ WhatsApp forwarded photos</li>
                  <li>✅ Photos from Google Photos / iCloud</li>
                </ul>
              </div>

              <div className="photo-pdf-compare-card photo-pdf-compare-card--image">
                <h3>🖼️ Image to PDF</h3>
                <p>
                  A broader term that includes <strong>digital-origin images</strong> — graphics,
                  charts, diagrams, screenshots, design exports, and illustrations. These are
                  often created on a computer rather than captured by a camera.
                </p>
                <p>
                  <strong>Typical use cases:</strong> Converting design exports to PDF,
                  combining chart screenshots into a report, converting website screenshots,
                  turning infographics into PDF documents.
                </p>
                <ul>
                  <li>✅ Screenshots</li>
                  <li>✅ Design exports (Canva, Figma)</li>
                  <li>✅ Charts & graphs</li>
                  <li>✅ Infographics & banners</li>
                  <li>✅ App interface captures</li>
                </ul>
              </div>
            </div>

            <div className="photo-pdf-compare-conclusion">
              <p>
                <strong>The good news:</strong> SCENITH&apos;s converter handles <em>both</em>
                perfectly. Whether you&apos;re converting a photo taken with your phone camera
                or a PNG exported from Canva, the process and result are identical —
                a clean, professional, watermark-free PDF.
              </p>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            MOBILE-SPECIFIC GUIDE
        ══════════════════════════════════════════ */}
        <section
          className="photo-pdf-mobile"
          id="mobile-guide"
          aria-labelledby="mobile-heading"
        >
          <div className="photo-pdf-container">
            <h2 id="mobile-heading" className="photo-pdf-section-title">
              Complete Mobile Guide: Convert Phone Photos to PDF
            </h2>
            <p className="photo-pdf-section-desc">
              Over 70% of photo-to-PDF conversions happen on mobile devices. Here&apos;s
              everything you need to know for a smooth experience on Android and iPhone.
            </p>

            <div className="photo-pdf-mobile__grid">
              <article className="photo-pdf-mobile-card">
                <h3 className="photo-pdf-mobile-card__title">
                  🤖 Android: Convert Photos to PDF
                </h3>
                <ol className="photo-pdf-mobile-card__steps">
                  <li>
                    Open Chrome on your Android phone and go to{" "}
                    <strong>scenith.in/tools/pdf-tools/images-to-pdf</strong>
                  </li>
                  <li>
                    Tap <strong>Choose Files</strong> — your phone will show your gallery or
                    file manager
                  </li>
                  <li>
                    Navigate to <strong>Gallery &rarr; All Photos</strong> and long-press to
                    select multiple photos
                  </li>
                  <li>Tap Open to upload the selected photos</li>
                  <li>
                    Drag photos to reorder them as needed (each photo = one page in PDF)
                  </li>
                  <li>
                    Tap <strong>Convert to PDF</strong> — processing takes 5–15 seconds
                  </li>
                  <li>
                    Tap <strong>Download PDF</strong> — file saves to your Downloads folder
                    automatically
                  </li>
                </ol>
                <div className="photo-pdf-mobile-card__note">
                  <strong>Android tip:</strong> If your camera saves photos in a custom folder
                  (like DCIM/Camera), navigate there in the file manager when selecting photos.
                </div>
              </article>

              <article className="photo-pdf-mobile-card">
                <h3 className="photo-pdf-mobile-card__title">
                  🍎 iPhone: Convert HEIC Photos to PDF
                </h3>
                <ol className="photo-pdf-mobile-card__steps">
                  <li>
                    Open Safari on your iPhone and go to{" "}
                    <strong>scenith.in/tools/pdf-tools/images-to-pdf</strong>
                  </li>
                  <li>
                    Tap <strong>Choose Files</strong> — select <strong>Photo Library</strong>{" "}
                    from the options
                  </li>
                  <li>
                    Tap to select multiple photos (checkmark appears on each). Tap{" "}
                    <strong>Add</strong>
                  </li>
                  <li>Photos upload automatically — HEIC format is supported natively</li>
                  <li>Drag to reorder, then tap Convert to PDF</li>
                  <li>
                    Tap <strong>Download PDF</strong> — a share sheet appears automatically
                  </li>
                  <li>
                    Choose <strong>Save to Files</strong> to save to iCloud or local storage,
                    or <strong>Share</strong> to send via WhatsApp, email, etc.
                  </li>
                </ol>
                <div className="photo-pdf-mobile-card__note">
                  <strong>iPhone tip:</strong> You can also use{" "}
                  <strong>Share &rarr; Save to Files &rarr; iCloud Drive</strong> to
                  automatically sync your PDF across all Apple devices.
                </div>
              </article>

              <article className="photo-pdf-mobile-card photo-pdf-mobile-card--whatsapp">
                <h3 className="photo-pdf-mobile-card__title">
                  💬 WhatsApp Photos to PDF
                </h3>
                <p>
                  Converting photos received on WhatsApp to PDF is one of the most common
                  photo-to-PDF use cases — especially for bills, invoices, and important
                  documents shared via family groups.
                </p>
                <ol className="photo-pdf-mobile-card__steps">
                  <li>
                    Open WhatsApp and find the photo you want to convert
                  </li>
                  <li>
                    Tap the photo to open it full-screen, then tap the{" "}
                    <strong>Download</strong> icon (or it may already be saved to gallery)
                  </li>
                  <li>The photo saves to your phone gallery or Downloads folder</li>
                  <li>
                    Open SCENITH&apos;s converter, tap Upload, and select the downloaded photo
                  </li>
                  <li>Convert and download your PDF</li>
                </ol>
                <div className="photo-pdf-mobile-card__note">
                  <strong>Batch tip:</strong> In WhatsApp, tap and hold a photo in a chat
                  to select multiple photos at once, then forward or save all to gallery before
                  uploading to SCENITH.
                </div>
              </article>

              <article className="photo-pdf-mobile-card">
                <h3 className="photo-pdf-mobile-card__title">
                  📸 Using Camera Directly to PDF
                </h3>
                <p>
                  The most efficient workflow for scanning physical documents — contracts,
                  bills, books — is to photograph them with your camera and convert immediately.
                </p>
                <div className="photo-pdf-mobile-card__tips">
                  <div className="photo-pdf-mobile-tip">
                    <strong>🔦 Lighting:</strong> Photograph in bright, even light. Avoid
                    shadows across the document. Natural daylight near a window works best.
                  </div>
                  <div className="photo-pdf-mobile-tip">
                    <strong>📐 Angle:</strong> Hold your phone directly above the document,
                    parallel to it. Use grid lines in your camera app for alignment.
                  </div>
                  <div className="photo-pdf-mobile-tip">
                    <strong>🎯 Focus:</strong> Tap the screen on the text area to ensure the
                    camera focuses on the document content, not the background.
                  </div>
                  <div className="photo-pdf-mobile-tip">
                    <strong>🖤 Background:</strong> Place the document on a dark, contrasting
                    surface for the best scan quality and text readability.
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            QUALITY & TECH SPECS
        ══════════════════════════════════════════ */}
        <section
          className="photo-pdf-specs"
          id="technical-specs"
          aria-labelledby="specs-heading"
        >
          <div className="photo-pdf-container">
            <h2 id="specs-heading" className="photo-pdf-section-title">
              Quality, Security & Technical Specifications
            </h2>

            <div className="photo-pdf-specs__grid">
              {[
                {
                  icon: "💎",
                  title: "Image Quality Preservation",
                  body: "Our conversion engine uses intelligent compression that preserves visual quality. High-resolution phone photos (48MP, 108MP) convert to print-ready PDFs. Text in photographed documents remains sharp and legible.",
                },
                {
                  icon: "⚡",
                  title: "Processing Speed",
                  body: "Single photo conversion completes in 2–5 seconds. A batch of 20 photos converts in under 30 seconds. Processing happens on our optimized servers, so your device battery and RAM are not affected.",
                },
                {
                  icon: "🔒",
                  title: "Privacy & Security",
                  body: "Your photos are processed securely and deleted from our servers immediately after your PDF is generated. We never store, analyze, or use your photos. HTTPS encryption protects your upload.",
                },
                {
                  icon: "📄",
                  title: "PDF Output Standards",
                  body: "Output PDFs comply with PDF 1.7 standards for maximum compatibility. Files open correctly in Adobe Acrobat, Google Drive, iOS Files, Android document viewers, and all government portal submission systems.",
                },
                {
                  icon: "♾️",
                  title: "No Limits",
                  body: "No daily conversion limits, no maximum file size per photo, no cap on how many photos you combine into one PDF. Convert as many times as you need — completely free.",
                },
                {
                  icon: "🌐",
                  title: "Browser Compatibility",
                  body: "Works in Chrome (Android & Desktop), Safari (iPhone, iPad, Mac), Firefox, Edge, and Samsung Internet. No browser plugin or extension required. Runs on 4G/LTE connections without issues.",
                },
              ].map((spec) => (
                <div key={spec.title} className="photo-pdf-spec-card">
                  <div className="photo-pdf-spec-card__icon" aria-hidden="true">
                    {spec.icon}
                  </div>
                  <h3 className="photo-pdf-spec-card__title">{spec.title}</h3>
                  <p className="photo-pdf-spec-card__body">{spec.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            BEST PRACTICES / TIPS — UNIQUE EXPERT CONTENT
        ══════════════════════════════════════════ */}
        <section
          className="photo-pdf-tips"
          id="pro-tips"
          aria-labelledby="tips-heading"
        >
          <div className="photo-pdf-container">
            <h2 id="tips-heading" className="photo-pdf-section-title">
              Expert Tips: Getting the Best Photo-to-PDF Results
            </h2>
            <p className="photo-pdf-section-desc">
              These techniques come from analyzing thousands of photo-to-PDF conversions.
              Apply them to get professional results every time.
            </p>

            <div className="photo-pdf-tips__grid">
              <div className="photo-pdf-tip-card photo-pdf-tip-card--major">
                <span className="photo-pdf-tip-card__num">01</span>
                <h3>Photograph in Landscape for Wide Documents</h3>
                <p>
                  For wide documents like spreadsheets, ledgers, or architectural drawings,
                  rotate your phone to landscape (horizontal) mode before photographing.
                  This captures more content per page and avoids cut-off edges in the PDF.
                  SCENITH automatically detects orientation and adjusts the PDF page accordingly.
                </p>
              </div>

              <div className="photo-pdf-tip-card photo-pdf-tip-card--major">
                <span className="photo-pdf-tip-card__num">02</span>
                <h3>Use Document Mode in Your Camera App</h3>
                <p>
                  Most modern phones have a dedicated document or scan mode in their camera
                  app. On iPhone, this appears automatically when the camera detects a document.
                  On Samsung, look for &quot;Documents&quot; in camera modes. This mode automatically
                  corrects perspective distortion and enhances text contrast — giving you
                  significantly cleaner PDF output than standard camera mode.
                </p>
              </div>

              <div className="photo-pdf-tip-card">
                <span className="photo-pdf-tip-card__num">03</span>
                <h3>Pre-number Files for Correct Page Order</h3>
                <p>
                  When photographing multi-page documents, immediately number each photo
                  in your gallery before uploading. Most phones allow renaming in the Files
                  app. This prevents the need to drag-reorder in the browser, saving time
                  for large documents.
                </p>
              </div>

              <div className="photo-pdf-tip-card">
                <span className="photo-pdf-tip-card__num">04</span>
                <h3>Clean Your Camera Lens First</h3>
                <p>
                  A smudged phone camera lens creates blurry photos that produce unreadable
                  PDFs. Wipe your rear camera lens with a soft cloth before photographing
                  important documents. This single step improves text clarity in the output PDF
                  more than any software processing.
                </p>
              </div>

              <div className="photo-pdf-tip-card">
                <span className="photo-pdf-tip-card__num">05</span>
                <h3>Avoid Flash for Document Photography</h3>
                <p>
                  Camera flash creates harsh reflections on glossy documents, bills, and
                  laminated IDs. Always use ambient light instead. If the room is dark,
                  turn on all room lights rather than using flash. Natural window light is
                  ideal — position the document near a window, not in direct sunlight.
                </p>
              </div>

              <div className="photo-pdf-tip-card">
                <span className="photo-pdf-tip-card__num">06</span>
                <h3>Compress After Converting if Sharing via WhatsApp</h3>
                <p>
                  WhatsApp has a 100MB document limit. If your multi-photo PDF exceeds this
                  (rare but possible with many high-res photos), use SCENITH&apos;s Compress PDF
                  tool after conversion to reduce the file size while keeping text readable.
                  Typical 20-photo PDFs compress from 8MB to under 2MB.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            FAQ
        ══════════════════════════════════════════ */}
        <section
          className="photo-pdf-faq"
          id="faq"
          aria-labelledby="faq-heading"
        >
          <div className="photo-pdf-container">
            <h2 id="faq-heading" className="photo-pdf-section-title">
              Frequently Asked Questions
            </h2>

            <div className="photo-pdf-faq__grid">
              {[
                {
                  q: "How do I convert a photo to PDF on my phone without an app?",
                  a: "Open your phone browser (Chrome on Android, Safari on iPhone) and go to SCENITH's converter. Tap Upload, select your photos, arrange them, and tap Convert. The PDF downloads directly to your phone. No app installation is required — the tool works entirely in your browser.",
                },
                {
                  q: "Can I convert iPhone HEIC photos to PDF?",
                  a: "Yes, fully supported. iPhone photos saved in HEIC format (the default since iOS 11) convert to PDF without any format change on your part. Simply upload the HEIC file and SCENITH handles the rest automatically.",
                },
                {
                  q: "Is there a limit on how many photos I can convert?",
                  a: "No limit at all. You can convert 2 photos or 200 photos into a single PDF. There is no restriction on the number of photos per conversion or the total number of conversions you can perform.",
                },
                {
                  q: "Will the PDF have a watermark?",
                  a: "Absolutely not. SCENITH's photo to PDF converter is completely free with zero watermarks on the output PDF. Your converted document is clean and professional with no SCENITH branding.",
                },
                {
                  q: "How do I convert multiple photos into one PDF?",
                  a: "Upload all your photos in one batch (select multiple photos at once when the file picker opens). They will appear as a list in the tool. Drag to reorder them — each photo becomes one page. Then click Convert to PDF to create a single multi-page PDF from all your photos.",
                },
                {
                  q: "Does photo quality reduce when converting to PDF?",
                  a: "SCENITH uses smart compression that preserves visual quality while keeping file sizes reasonable. High-resolution photos remain clear and sharp. Text in photographed documents stays fully legible. There is no visible quality loss for standard use cases.",
                },
                {
                  q: "Can I convert a WhatsApp photo to PDF?",
                  a: "Yes. Save the WhatsApp photo to your phone's gallery or downloads folder first (tap and hold the photo in chat, then select Save). Then upload it to SCENITH's converter. This is one of the most common workflows, especially for bills and invoices received on WhatsApp.",
                },
                {
                  q: "Is it safe to upload personal photos and documents?",
                  a: "Yes. All uploads use HTTPS encryption. Your photos are processed and immediately deleted from SCENITH's servers after your PDF is generated. We do not store, view, or share your files. Each conversion session is private and independent.",
                },
                {
                  q: "Can I use this to convert a screenshot to PDF?",
                  a: "Yes. Screenshots are PNG files, and SCENITH supports PNG natively. Take your screenshot, go to SCENITH's converter, upload the screenshot PNG, and convert to PDF. This is commonly used for converting bank statements, app records, and web page captures to PDF.",
                },
                {
                  q: "What is the maximum photo resolution supported?",
                  a: "There is no resolution cap. SCENITH handles photos from modern smartphones including 108MP Samsung cameras, 48MP iPhones, and professional DSLRs. Very large files may take slightly longer to upload on slow connections but will convert successfully.",
                },
              ].map((item) => (
                <article key={item.q} className="photo-pdf-faq-item">
                  <h3 className="photo-pdf-faq-item__q">{item.q}</h3>
                  <p className="photo-pdf-faq-item__a">{item.a}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            RELATED TOOLS
        ══════════════════════════════════════════ */}
        <section
          className="photo-pdf-related"
          aria-labelledby="related-heading"
        >
          <div className="photo-pdf-container">
            <h2 id="related-heading" className="photo-pdf-section-title">
              More Free PDF Tools on SCENITH
            </h2>
            <p className="photo-pdf-section-desc">
              Photo to PDF is just one of many document tools available free on SCENITH.
            </p>

            <div className="photo-pdf-related__grid">
              {[
                {
                  href: "/pdf-tools/images-to-pdf",
                  icon: "🖼️",
                  title: "Images to PDF Converter",
                  desc: "Combine multiple image formats into a single PDF with full control over order, quality, and page size.",
                  badge: "Most Popular",
                },
                {
                  href: "/pdf-tools/compress-pdf",
                  icon: "📦",
                  title: "Compress PDF",
                  desc: "Reduce PDF file size for easy sharing on WhatsApp, email, and government portals without losing readability.",
                  badge: null,
                },
                {
                  href: "/pdf-tools/merge-pdf",
                  icon: "🔗",
                  title: "Merge PDF Files",
                  desc: "Combine multiple PDF documents into one. Perfect for combining separately scanned document pages.",
                  badge: null,
                },
                {
                  href: "/pdf-tools/pdf-to-jpg",
                  icon: "🔄",
                  title: "PDF to JPG Converter",
                  desc: "Extract pages from a PDF as high-quality JPG images. Reverse of the photo-to-PDF process.",
                  badge: null,
                },
              ].map((tool) => (
                <a
                  key={tool.title}
                  href={tool.href}
                  className="photo-pdf-related-card"
                  aria-label={`Go to ${tool.title}`}
                >
                  <span className="photo-pdf-related-card__icon" aria-hidden="true">
                    {tool.icon}
                  </span>
                  {tool.badge && (
                    <span className="photo-pdf-related-card__badge">{tool.badge}</span>
                  )}
                  <h3 className="photo-pdf-related-card__title">{tool.title}</h3>
                  <p className="photo-pdf-related-card__desc">{tool.desc}</p>
                  <span className="photo-pdf-related-card__arrow" aria-hidden="true">
                    →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            FINAL CTA
        ══════════════════════════════════════════ */}
        <section className="photo-pdf-final-cta" aria-labelledby="final-cta-heading">
          <div className="photo-pdf-container">
            <div className="photo-pdf-final-cta__box">
              <div className="photo-pdf-final-cta__icon" aria-hidden="true">
                📷
              </div>
              <h2 id="final-cta-heading" className="photo-pdf-final-cta__title">
                Ready to Convert Your Photos to PDF?
              </h2>
              <p className="photo-pdf-final-cta__desc">
                Join thousands of users who convert phone photos, WhatsApp images,
                and scanned documents to professional PDFs every day — for free.
              </p>

              <div className="photo-pdf-final-cta__stats" role="list">
                {[
                  { num: "15+", label: "Photo formats supported" },
                  { num: "∞", label: "Photos per PDF" },
                  { num: "0", label: "Watermarks added" },
                  { num: "Free", label: "Forever, no tricks" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="photo-pdf-final-stat"
                    role="listitem"
                  >
                    <strong className="photo-pdf-final-stat__num">{stat.num}</strong>
                    <span className="photo-pdf-final-stat__label">{stat.label}</span>
                  </div>
                ))}
              </div>

              
            <a    href={TOOL_URL}
                className="photo-pdf-cta-primary photo-pdf-cta-primary--large"
                aria-label="Convert photos to PDF now for free"
                rel="noopener"
              >
                <span aria-hidden="true">📷</span>
                Convert My Photos to PDF — Free &amp; Instant
                <span aria-hidden="true">→</span>
              </a>

              <p className="photo-pdf-final-cta__reassurance">
                · No watermark · No file size limit · Works on any device
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}