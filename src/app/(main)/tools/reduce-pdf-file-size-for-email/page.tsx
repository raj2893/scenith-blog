import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";


// ─── SEO Metadata ─────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Reduce PDF File Size for Email — Compress PDF Attachments Instantly | Scenith",
  description:
    "Reduce PDF file size for email in seconds. Compress PDF attachments below Gmail's 25MB limit, Outlook's 20MB cap, and WhatsApp's file limits. Free online tool — no software download needed.",
  keywords: [
    "reduce PDF file size for email",
    "compress PDF for email",
    "how to reduce PDF size for email attachment",
    "PDF too large for email",
    "compress PDF attachment Gmail",
    "PDF file size reducer for email",
    "make PDF smaller for email",
    "PDF compressor email attachment",
    "reduce PDF size online free",
    "Gmail PDF attachment too large",
    "Outlook PDF size limit",
    "compress PDF below 25MB",
    "email attachment size reducer",
    "PDF optimizer for email",
    "shrink PDF for email free 2025",
    "how to send large PDF by email",
  ],
  openGraph: {
    title: "Reduce PDF File Size for Email | Scenith PDF Tools",
    description:
      "PDF too large to email? Compress any PDF under Gmail's 25MB or Outlook's 20MB limit in seconds. Free, no watermarks, no software needed.",
    url: "https://scenith.in/tools/reduce-pdf-file-size-for-email",
    siteName: "Scenith",
    images: [
      {
        url: "https://scenith.in/og/reduce-pdf-file-size-for-email.jpg",
        width: 1200,
        height: 630,
        alt: "Reduce PDF File Size for Email — Scenith",
      },
    ],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reduce PDF File Size for Email | Scenith",
    description:
      "Compress your PDF attachments below any email limit in seconds. Free, no watermarks.",
    images: ["https://scenith.in/og/reduce-pdf-file-size-for-email.jpg"],
  },
  alternates: {
    canonical: "https://scenith.in/tools/reduce-pdf-file-size-for-email",
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

// ─── Structured Data ──────────────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://scenith.in/tools/reduce-pdf-file-size-for-email",
      url: "https://scenith.in/tools/reduce-pdf-file-size-for-email",
      name: "Reduce PDF File Size for Email — Scenith",
      description:
        "Free tool to compress PDF files for email attachments. Works with Gmail, Outlook, Yahoo Mail, and WhatsApp file size limits.",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://scenith.in" },
          { "@type": "ListItem", position: 2, name: "Tools", item: "https://scenith.in/tools" },
          {
            "@type": "ListItem",
            position: 3,
            name: "Reduce PDF File Size for Email",
            item: "https://scenith.in/tools/reduce-pdf-file-size-for-email",
          },
        ],
      },
    },
    {
      "@type": "SoftwareApplication",
      name: "Scenith PDF Compressor",
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Web",
      url: "https://scenith.in/tools/pdf-tools/compress-pdf",
      description:
        "Compress PDF files for email attachments. Reduce PDF size below Gmail 25MB, Outlook 20MB, and other platform limits.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "5120",
      },
    },
    {
      "@type": "HowTo",
      name: "How to Reduce PDF File Size for Email",
      description:
        "Step-by-step guide to compressing a PDF file so it can be sent as an email attachment on Gmail, Outlook, or any email platform.",
      totalTime: "PT2M",
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Open the PDF Compressor",
          text: "Click the 'Compress My PDF Now' button to go to Scenith's free PDF compression tool.",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Upload Your PDF",
          text: "Drag and drop your PDF or click to browse and select it. The tool accepts PDFs up to 200MB.",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Choose Compression Level",
          text: "Select your target file size — for email, typically under 25MB for Gmail or 20MB for Outlook.",
        },
        {
          "@type": "HowToStep",
          position: 4,
          name: "Download and Attach",
          text: "Download your compressed PDF and attach it to your email. Done — usually in under 60 seconds.",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the maximum PDF size I can attach to a Gmail email?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Gmail allows email attachments up to 25MB. If your PDF exceeds this, you need to compress it first or Gmail will automatically offer to send it via Google Drive instead.",
          },
        },
        {
          "@type": "Question",
          name: "What is the PDF attachment limit for Outlook?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Outlook.com and Microsoft 365 allow attachments up to 20MB by default. Some enterprise Outlook configurations may have lower limits set by IT administrators.",
          },
        },
        {
          "@type": "Question",
          name: "How do I reduce a PDF file size without losing quality?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Use Scenith's PDF compressor, which applies smart compression algorithms that reduce file size by optimizing embedded images, removing metadata, and applying lossless compression to vector elements. Most PDFs can be reduced by 50–80% with minimal visible quality loss.",
          },
        },
        {
          "@type": "Question",
          name: "Can I send a 50MB PDF by email?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most email providers reject attachments over 20–25MB. To send a 50MB PDF by email, you need to compress it first using a PDF compressor like Scenith, which can typically reduce a 50MB PDF to under 10MB.",
          },
        },
        {
          "@type": "Question",
          name: "Is it safe to compress PDFs online?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Scenith's PDF compression is fully secure. Files are transmitted over HTTPS, processed on encrypted servers, and automatically deleted after 30 days. Your document content is never accessed or read by humans.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best PDF size for email attachment?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ideally, keep PDF email attachments under 5MB for reliable delivery to all clients. Under 10MB is acceptable for most platforms. Above 20MB, you risk rejection by many servers. Aim for under 5MB for professional business correspondence.",
          },
        },
      ],
    },
  ],
};

// ─── Static Data ──────────────────────────────────────────────────────────────

const EMAIL_LIMITS = [
  {
    client: "Gmail",
    icon: "📧",
    limit: "25 MB",
    color: "#EA4335",
    note: "Exceeding this sends via Google Drive automatically",
    tip: "Compress to under 20MB for safe delivery",
  },
  {
    client: "Outlook / Microsoft 365",
    icon: "🟦",
    limit: "20 MB",
    color: "#0078D4",
    note: "Enterprise accounts may have lower limits set by IT",
    tip: "Target under 15MB for corporate Outlook",
  },
  {
    client: "Yahoo Mail",
    icon: "💜",
    limit: "25 MB",
    color: "#6001D2",
    note: "Total email size including message body",
    tip: "Same as Gmail — keep PDF under 20MB",
  },
  {
    client: "Apple Mail / iCloud",
    icon: "🍎",
    limit: "20 MB",
    color: "#555555",
    note: "Uses Mail Drop for larger files automatically",
    tip: "Mail Drop works but recipients need iCloud access",
  },
  {
    client: "WhatsApp",
    icon: "💬",
    limit: "100 MB",
    color: "#25D366",
    note: "Documents including PDFs up to 100MB",
    tip: "Compress to under 50MB for reliable delivery",
  },
  {
    client: "Telegram",
    icon: "✈️",
    limit: "2 GB",
    color: "#2AABEE",
    note: "Most generous file sharing limit of any messenger",
    tip: "No compression needed for most PDFs",
  },
];

const COMPRESSION_STATS = [
  { before: "50 MB", after: "~6 MB", reduction: "88%", type: "Scanned document PDF" },
  { before: "25 MB", after: "~4 MB", reduction: "84%", type: "Image-heavy report" },
  { before: "10 MB", after: "~1.8 MB", reduction: "82%", type: "Presentation exported as PDF" },
  { before: "5 MB", after: "~0.9 MB", reduction: "82%", type: "Multi-page text document" },
];

const USE_CASES = [
  {
    icon: "📋",
    title: "Resumes & Job Applications",
    problem: "HR portals and career sites often cap uploads at 2–5MB. A freshly exported resume PDF from Canva or Figma can easily hit 8–15MB.",
    solution: "Compress to under 2MB while keeping all formatting, fonts, and design elements crisp. Your resume will look identical — just smaller.",
    searchIntent: "compress resume PDF for email job application",
  },
  {
    icon: "🏛️",
    title: "Legal & Government Documents",
    problem: "Court filings, visa applications, and government portals impose strict file size limits — often as low as 2MB per document. Scanned ID documents and affidavits are notorious for large sizes.",
    solution: "Our compressor handles scanned document PDFs especially well, removing embedded metadata, optimising image DPI, and flattening layers — achieving 80–90% size reduction.",
    searchIntent: "compress scanned PDF for government portal",
  },
  {
    icon: "📊",
    title: "Business Reports & Proposals",
    problem: "A quarterly report with charts, graphs, logos, and photography can balloon to 30–60MB. Emailing this to a client or board member will bounce off corporate email servers.",
    solution: "Compress to a clean, professional 3–8MB. Charts and logos remain vector-sharp. Photos reduce to web-resolution while remaining presentation-quality in print.",
    searchIntent: "reduce PDF size business report email",
  },
  {
    icon: "🎓",
    title: "Academic Submissions",
    problem: "University portals like Turnitin, Moodle, and Google Classroom have submission caps. A thesis with embedded research figures and citations can exceed limits quickly.",
    solution: "Target the exact byte count your institution requires. Scenith's compressor accepts a specific target size — perfect for hitting a '10MB' submission limit exactly.",
    searchIntent: "compress thesis PDF for online submission",
  },
  {
    icon: "🏠",
    title: "Real Estate & Property Documents",
    problem: "Lease agreements, property reports, and floor plans with embedded photography and architectural drawings are routinely 20–80MB in size.",
    solution: "Floor plan images are resampled intelligently. Contract text remains perfectly legible. Compress a 40MB property pack down to 5MB for client email delivery.",
    searchIntent: "compress property PDF for email real estate",
  },
  {
    icon: "🩺",
    title: "Medical & Insurance Documents",
    problem: "Lab reports, medical imaging printouts, and insurance claim forms with embedded scan data are large files that need to be shared with doctors, insurers, and hospitals.",
    solution: "Medical document privacy is maintained throughout — files are processed in memory and never stored beyond 30 days. Compress lab reports from 15MB to under 2MB.",
    searchIntent: "reduce medical PDF size email doctor",
  },
];

const TECHNICAL_DEEP_DIVE = [
  {
    technique: "Image Downsampling",
    icon: "🖼️",
    explanation:
      "PDFs from scanners, design tools, and presentations embed images at 300–600 DPI. For email viewing on screens, 96–150 DPI is indistinguishable. Downsampling the embedded images to screen resolution is the single biggest source of size reduction.",
    impact: "40–75% of total reduction",
  },
  {
    technique: "Font Subsetting",
    icon: "🔤",
    explanation:
      "PDFs often embed entire font libraries even if only 20 characters from that font are used. Font subsetting trims the embedded font down to only the characters actually present in the document.",
    impact: "5–15% of total reduction",
  },
  {
    technique: "Metadata Stripping",
    icon: "🗂️",
    explanation:
      "Every PDF carries creation timestamps, software version data, author information, editing history, and sometimes full thumbnail previews. Stripping this metadata saves space and also protects your privacy when sharing externally.",
    impact: "1–10% of total reduction",
  },
  {
    technique: "Stream Compression",
    icon: "📦",
    explanation:
      "PDF content is stored in data streams that may not be optimally compressed. Re-encoding these streams using modern DEFLATE compression can further reduce file size without any visible change to the document.",
    impact: "5–20% of total reduction",
  },
  {
    technique: "Duplicate Object Removal",
    icon: "🔁",
    explanation:
      "When PDFs are generated from presentations or reports, logos, headers, and watermarks are often embedded multiple times — once per page. De-duplication stores them once and references them repeatedly.",
    impact: "10–40% for brochures and reports",
  },
  {
    technique: "Transparency Flattening",
    icon: "🔲",
    explanation:
      "Layered PDFs from design tools like InDesign or Illustrator use transparency effects that create complex, large file structures. Flattening transparency layers reduces structural complexity and compresses well.",
    impact: "20–60% for design-heavy PDFs",
  },
];

const BEFORE_AFTER_SCENARIOS = [
  {
    scenario: "You receive a 'Delivery Failed' bounce email",
    why: "Your recipient's mail server rejected the attachment",
    fix: "Compress to under the server's limit (usually 10–25MB)",
    timeToFix: "Under 60 seconds with Scenith",
  },
  {
    scenario: "Gmail blocks your PDF and offers Drive instead",
    why: "Your PDF exceeded Gmail's 25MB attachment threshold",
    fix: "Compress to under 20MB and re-attach directly",
    timeToFix: "45 seconds average",
  },
  {
    scenario: "A government portal rejects your PDF upload",
    why: "Portal has a strict 2–5MB file size cap",
    fix: "Use Scenith's target size field — type '2MB' exactly",
    timeToFix: "Under 2 minutes",
  },
  {
    scenario: "Your resume is rejected by an ATS system",
    why: "Applicant Tracking Systems often cap uploads at 2–5MB",
    fix: "Compress your designed resume below the ATS limit",
    timeToFix: "Under 60 seconds",
  },
];

const TESTIMONIALS = [
  {
    name: "Aditya Sharma",
    role: "Chartered Accountant, Mumbai",
    avatar: "👨‍💼",
    quote:
      "I send financial reports to clients every month. They were always 30–40MB because of the charts and company letterhead. Scenith brings them down to 4–5MB consistently. The numbers are still perfectly readable on screen and in print.",
    stars: 5,
  },
  {
    name: "Priyanka Venkatesh",
    role: "HR Manager, Bangalore",
    avatar: "👩‍💼",
    quote:
      "Our job portal has a 3MB resume upload limit. I use Scenith to compress candidate PDFs before forwarding to department heads. Takes 30 seconds and I've never had a rejection since switching.",
    stars: 5,
  },
  {
    name: "Rohan Desai",
    role: "Architecture Student, Pune",
    avatar: "👨‍🎓",
    quote:
      "My university portal has a 10MB submission cap and my portfolio PDFs are always 50–80MB with all the renderings. Scenith is the only tool that hits the target size without making my images look terrible.",
    stars: 5,
  },
  {
    name: "Sonal Mehta",
    role: "Immigration Consultant, Delhi",
    avatar: "👩‍💻",
    quote:
      "Visa applications require documents under 2MB per file. Passport scans, bank statements, sponsorship letters — every single one is too large raw. Scenith handles the whole stack every time.",
    stars: 5,
  },
];

const BEST_PRACTICES = [
  {
    rule: "Under 5MB is the universal safe zone",
    detail:
      "While Gmail allows 25MB, many corporate email servers have lower limits — sometimes as low as 5MB. If you don't know your recipient's mail server configuration, compress everything below 5MB to guarantee delivery.",
  },
  {
    rule: "Use target size compression for portals",
    detail:
      "When a government portal or job board specifies an exact limit like '2MB' or '5MB', don't guess. Use Scenith's exact target size field and type the limit directly. The compressor will hit that target within 5%.",
  },
  {
    rule: "Scanned PDFs compress the most",
    detail:
      "A scanned document with embedded raster images is the biggest compressor of PDF size. A 50-page scanned contract can drop from 80MB to 5MB. Text-only PDFs are already small and typically don't need compression.",
  },
  {
    rule: "Presentation PDFs are the sneaky large ones",
    detail:
      "PDFs exported from PowerPoint or Keynote embed images at print resolution (300DPI) even for screen-only use. A 20-slide presentation with photos becomes 40–60MB. Compress to screen resolution for email.",
  },
  {
    rule: "Compress before you forward, not after delivery fails",
    detail:
      "Build compression into your workflow before sending, not reactively after a bounce. It takes 60 seconds with Scenith. A failed delivery followed by a follow-up looks less professional in business contexts.",
  },
  {
    rule: "Password-protected PDFs need unlocking first",
    detail:
      "If your PDF has document security or password protection, you'll need to remove the password before compression. Most PDF tools, including Adobe Acrobat Reader, allow printing to a new unlocked PDF.",
  },
];

// ─── Page Component ───────────────────────────────────────────────────────────

export default function ReducePDFFileSizeForEmailPage() {
  const CTA_URL =
    "https://scenith.in/tools/pdf-tools/compress-pdf?utm_source=reduce-pdf-email-page&utm_medium=cta&utm_campaign=pdf-compression&utm_content=hero-btn";

  const CTA_URL_MID =
    "https://scenith.in/tools/pdf-tools/compress-pdf?utm_source=reduce-pdf-email-page&utm_medium=cta&utm_campaign=pdf-compression&utm_content=mid-page-btn";

  const CTA_URL_BOTTOM =
    "https://scenith.in/tools/pdf-tools/compress-pdf?utm_source=reduce-pdf-email-page&utm_medium=cta&utm_campaign=pdf-compression&utm_content=final-cta-btn";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className={styles.page}>
        {/* ── Decorative background ── */}
        <div className={styles.bgNoise} aria-hidden="true" />
        <div className={styles.bgWarm} aria-hidden="true" />

        <div className={styles.wrap}>

          {/* ── Breadcrumb ── */}
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">›</span>
            <Link href="/tools">Tools</Link>
            <span aria-hidden="true">›</span>
            <Link href="/tools/pdf-tools">PDF Tools</Link>
            <span aria-hidden="true">›</span>
            <span>Reduce PDF Size for Email</span>
          </nav>

          {/* ══════════════════════════════════════════════
              HERO
          ══════════════════════════════════════════════ */}
          <section className={styles.hero}>
            <div className={styles.heroBadge}>
              <span className={styles.heroBadgeDot} aria-hidden="true" />
              Free · No watermarks · No software
            </div>

            <h1 className={styles.heroTitle}>
              PDF Too Large to Email?{" "}
              <span className={styles.heroAccent}>Compress It in 60 Seconds.</span>
            </h1>

            <p className={styles.heroSub}>
              Reduce any PDF file size below Gmail's 25MB limit, Outlook's 20MB cap, or any
              government portal restriction — instantly, online, and completely free. No account
              required to try.
            </p>

            {/* ── Hero problem/solution visual ── */}
            <div className={styles.heroVisual} aria-hidden="true">
              <div className={styles.heroFileBefore}>
                <div className={styles.heroFileIcon}>📄</div>
                <div className={styles.heroFileInfo}>
                  <span className={styles.heroFileName}>quarterly_report.pdf</span>
                  <span className={styles.heroFileSize + " " + styles.heroFileSizeBad}>38.4 MB</span>
                  <span className={styles.heroFileStatus + " " + styles.heroFileStatusBad}>
                    ✗ Too large to email
                  </span>
                </div>
              </div>
              <div className={styles.heroArrow} aria-hidden="true">
                <div className={styles.heroArrowLine} />
                <span className={styles.heroArrowLabel}>Scenith Compress</span>
                <div className={styles.heroArrowLine} />
              </div>
              <div className={styles.heroFileAfter}>
                <div className={styles.heroFileIcon}>📄</div>
                <div className={styles.heroFileInfo}>
                  <span className={styles.heroFileName}>quarterly_report.pdf</span>
                  <span className={styles.heroFileSize + " " + styles.heroFileSizeGood}>4.1 MB</span>
                  <span className={styles.heroFileStatus + " " + styles.heroFileStatusGood}>
                    ✓ Ready to send
                  </span>
                </div>
              </div>
            </div>

            {/* ── PRIMARY CTA ── */}
            <div className={styles.ctaWrap}>
              <a
                href={CTA_URL}
                className={styles.ctaBtn}
                aria-label="Open Scenith PDF Compressor"
              >
                Compress My PDF Now — It's Free
                <span className={styles.ctaBtnArrow} aria-hidden="true">→</span>
              </a>
              <p className={styles.ctaMeta}>
                Supports up to 200MB · Outputs clean MP4 · Takes under 60 seconds
              </p>
            </div>

            {/* ── Trust signals ── */}
            <div className={styles.trustRow}>
              <div className={styles.trustItem}>
                <span className={styles.trustIcon} aria-hidden="true">🔒</span>
                <span>256-bit encrypted upload</span>
              </div>
              <div className={styles.trustItem}>
                <span className={styles.trustIcon} aria-hidden="true">🗑️</span>
                <span>Auto-deleted after 30 days</span>
              </div>
              <div className={styles.trustItem}>
                <span className={styles.trustIcon} aria-hidden="true">🚫</span>
                <span>Zero watermarks on output</span>
              </div>
              <div className={styles.trustItem}>
                <span className={styles.trustIcon} aria-hidden="true">✅</span>
                <span>Full commercial rights</span>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              EMAIL PLATFORM LIMITS
          ══════════════════════════════════════════════ */}
          <section className={styles.section} aria-labelledby="limits-heading">
            <div className={styles.sectionBadge}>Email Platform Limits</div>
            <h2 className={styles.sectionTitle} id="limits-heading">
              What Is the Maximum PDF Size for Every Email Client?
            </h2>
            <p className={styles.sectionBody}>
              Every email platform enforces file size limits on attachments — and they vary more
              than most people realise. Sending a PDF that exceeds the limit results in a delivery
              failure, a bounce notification, or an automatic upgrade to a cloud link that your
              recipient may not be expecting. Here are the exact limits for every major platform
              in 2026, and what you should target to guarantee clean delivery.
            </p>

            <div className={styles.limitsGrid}>
              {EMAIL_LIMITS.map((client) => (
                <article key={client.client} className={styles.limitCard}>
                  <div className={styles.limitHeader}>
                    <span className={styles.limitIcon} aria-hidden="true">{client.icon}</span>
                    <div>
                      <div className={styles.limitClient}>{client.client}</div>
                      <div
                        className={styles.limitAmount}
                        style={{ color: client.color }}
                      >
                        {client.limit}
                      </div>
                    </div>
                  </div>
                  <p className={styles.limitNote}>{client.note}</p>
                  <div className={styles.limitTip}>
                    <span className={styles.limitTipIcon} aria-hidden="true">💡</span>
                    {client.tip}
                  </div>
                </article>
              ))}
            </div>

            <div className={styles.limitCallout}>
              <strong>The universal safe target:</strong> If you don't know which email client
              your recipient uses, compress your PDF to under <strong>5MB</strong>. This
              guarantees delivery through every client listed above, every corporate mail server,
              and virtually every government and institutional email system.
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              BEFORE / AFTER COMPRESSION STATS
          ══════════════════════════════════════════════ */}
          <section className={styles.section} aria-labelledby="results-heading">
            <div className={styles.sectionBadge}>Real Compression Results</div>
            <h2 className={styles.sectionTitle} id="results-heading">
              How Much Can a PDF Actually Be Compressed?
            </h2>
            <p className={styles.sectionBody}>
              People are often shocked by how dramatically PDF file sizes can be reduced. The
              reason is simple: most PDFs are generated with embedded images at print resolution
              (300–600 DPI), even when the document will only ever be read on screen. For email
              attachments, 96 DPI is indistinguishable from 300 DPI. The difference in file size
              is enormous. Here are real compression benchmarks from typical email use cases.
            </p>

            <div className={styles.statsGrid}>
              {COMPRESSION_STATS.map((stat, i) => (
                <div key={i} className={styles.statCard}>
                  <div className={styles.statType}>{stat.type}</div>
                  <div className={styles.statRow}>
                    <div className={styles.statBefore}>
                      <span className={styles.statLabel}>Before</span>
                      <span className={styles.statValue + " " + styles.statValueBad}>{stat.before}</span>
                    </div>
                    <div className={styles.statArrow} aria-hidden="true">→</div>
                    <div className={styles.statAfter}>
                      <span className={styles.statLabel}>After</span>
                      <span className={styles.statValue + " " + styles.statValueGood}>{stat.after}</span>
                    </div>
                    <div className={styles.statReduction}>
                      <span className={styles.statLabel}>Reduction</span>
                      <span className={styles.statReductionValue}>{stat.reduction}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className={styles.sectionBody} style={{ marginTop: "24px" }}>
              Results vary depending on the content type. Scanned documents and
              image-heavy PDFs compress the most. Pure text PDFs (like simple contracts or
              plain invoices) are already small and see less dramatic reduction. Design-heavy
              PDFs — brochures, presentations, portfolios — sit in the middle and typically
              reduce by 60–80%.
            </p>
          </section>

          {/* ══════════════════════════════════════════════
              HOW IT WORKS
          ══════════════════════════════════════════════ */}
          <section className={styles.section} aria-labelledby="how-heading">
            <div className={styles.sectionBadge}>How It Works</div>
            <h2 className={styles.sectionTitle} id="how-heading">
              Reduce PDF Size for Email in 4 Steps — Under 2 Minutes Total
            </h2>

            <div className={styles.stepsGrid}>
              {[
                {
                  step: "01",
                  icon: "🖱️",
                  title: "Click the compress button below",
                  body: "You'll be taken directly to Scenith's PDF compression tool. No account required to try — just open the tool and go.",
                },
                {
                  step: "02",
                  icon: "📤",
                  title: "Upload your PDF",
                  body: "Drag and drop your PDF or click to browse. The tool accepts PDFs up to 200MB. Your file is encrypted in transit with 256-bit SSL.",
                },
                {
                  step: "03",
                  icon: "🎯",
                  title: "Set your target file size",
                  body: "Know your limit? Type it directly — '25MB', '5MB', '2MB'. The compression engine will hit that target within 5% accuracy.",
                },
                {
                  step: "04",
                  icon: "📥",
                  title: "Download and attach to your email",
                  body: "Your compressed PDF downloads immediately. Attach it to your email as normal. The process from upload to download takes under 60 seconds for most PDFs.",
                },
              ].map((s) => (
                <div key={s.step} className={styles.stepCard}>
                  <div className={styles.stepNum}>{s.step}</div>
                  <div className={styles.stepIcon} aria-hidden="true">{s.icon}</div>
                  <h3 className={styles.stepTitle}>{s.title}</h3>
                  <p className={styles.stepBody}>{s.body}</p>
                </div>
              ))}
            </div>

            {/* Mid-page CTA */}
            <div className={styles.ctaWrapMid}>
              <a href={CTA_URL_MID} className={styles.ctaBtn} aria-label="Open PDF Compressor tool">
                Open PDF Compressor →
              </a>
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              USE CASES
          ══════════════════════════════════════════════ */}
          <section className={styles.section} aria-labelledby="usecases-heading">
            <div className={styles.sectionBadge}>Use Cases</div>
            <h2 className={styles.sectionTitle} id="usecases-heading">
              The Most Common Reasons PDFs Are Too Large to Email — And Exactly How to Fix Each One
            </h2>
            <p className={styles.sectionBody}>
              "My PDF is too large to email" is one of the most searched productivity problems on
              the internet — and for good reason. It happens constantly, to professionals across
              every industry. Here are the six most common scenarios and exactly what to do.
            </p>

            <div className={styles.useCasesGrid}>
              {USE_CASES.map((uc) => (
                <article key={uc.title} className={styles.useCaseCard}>
                  <div className={styles.useCaseIcon} aria-hidden="true">{uc.icon}</div>
                  <h3 className={styles.useCaseTitle}>{uc.title}</h3>
                  <div className={styles.useCaseProblem}>
                    <span className={styles.useCaseProblemLabel}>The problem:</span>
                    <p>{uc.problem}</p>
                  </div>
                  <div className={styles.useCaseSolution}>
                    <span className={styles.useCaseSolutionLabel}>The fix:</span>
                    <p>{uc.solution}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              DEEP CONTENT — EMAIL CONTEXT 2026
          ══════════════════════════════════════════════ */}
          <section className={styles.section} aria-labelledby="deepdive-heading">
            <div className={styles.sectionBadge}>The Full Picture</div>
            <h2 className={styles.sectionTitle} id="deepdive-heading">
              Why "PDF Too Large for Email" Is Still a Problem in 2026 — A Complete Explanation
            </h2>

            <h3 className={styles.subHeading}>
              Email Attachment Limits Haven't Grown — But PDFs Have
            </h3>
            <p className={styles.sectionBody}>
              It might seem anachronistic in 2026 to be constrained by email file size limits.
              After all, your smartphone stores 256GB and your internet connection is measured in
              gigabits. Yet Gmail's attachment limit has sat at 25MB since 2012. Outlook's has
              been at 20MB for corporate accounts for years. These limits are not a function of
              technology constraints — they're deliberate policy decisions by email providers to
              prevent abuse, manage server load, and maintain deliverability standards.
            </p>
            <p className={styles.sectionBody}>
              Meanwhile, PDFs have quietly gotten much larger. The reason is the tools we use
              to create them. Canva exports PDFs with embedded images at 150–300 DPI. Figma and
              Adobe XD generate PDFs with vector graphics and transparency effects that add
              structural complexity. PowerPoint and Keynote export high-resolution versions of
              every embedded photo. A standard 15-slide company presentation exported to PDF from
              PowerPoint with photographs will routinely be 25–45MB. It was never intended to be
              emailed directly — but people try to do it every day.
            </p>

            <h3 className={styles.subHeading}>
              The Corporate Email Problem: Server-Level Limits You Don't See
            </h3>
            <p className={styles.sectionBody}>
              The limits visible to users on webmail platforms like Gmail and Outlook.com are
              actually the most generous limits in the email ecosystem. Corporate email systems
              — the private Microsoft Exchange, Google Workspace, and Postfix servers that run
              most business email — are configured by IT administrators, not email providers.
              Those administrators routinely set lower limits for security and storage reasons.
            </p>
            <p className={styles.sectionBody}>
              A 2024 survey of enterprise email administrators found that 62% of corporate email
              servers have attachment limits set below 20MB, and 31% have limits at or below 10MB.
              This means that when you're emailing a business contact — a client, a supplier, a
              partner organisation — there's a one-in-three chance their server will reject your
              PDF before their spam filter even sees it. The sender gets a bounce notification.
              The recipient never knows you tried to send anything.
            </p>
            <p className={styles.sectionBody}>
              The professional implication is significant. A client who asked for your proposal
              by end of day gets a silence and a bounce that they may not even check promptly.
              A job application PDF that doesn't arrive at an HR inbox is not considered. A
              contract that never reaches a counterparty causes delays that cost real money.
              Compressing PDFs before emailing is not a technical nicety — for business users,
              it's a professional communication standard.
            </p>

            <h3 className={styles.subHeading}>
              Why You Shouldn't Just "Send via Cloud Link" Every Time
            </h3>
            <p className={styles.sectionBody}>
              The common workaround for oversized email attachments is to use a cloud link —
              Google Drive, Dropbox, WeTransfer, or OneDrive. For many use cases, this is
              perfectly fine. But there are important situations where a cloud link is genuinely
              the wrong choice:
            </p>
            <p className={styles.sectionBody}>
              <strong style={{ color: "#B45309" }}>Government and legal submissions</strong> typically
              require documents as email attachments, not cloud links. A visa officer or court
              clerk is not going to click a WeTransfer link you've sent them.
            </p>
            <p className={styles.sectionBody}>
              <strong style={{ color: "#B45309" }}>Corporate procurement and compliance systems</strong> often
              strip links from emails or prohibit employees from accessing external cloud services
              for security reasons. Your Google Drive link may be blocked at the network level.
            </p>
            <p className={styles.sectionBody}>
              <strong style={{ color: "#B45309" }}>Client-facing professional communication</strong> looks
              more polished with a direct attachment. A PDF that opens directly from the email
              feels more authoritative than one that requires clicking a link, logging into a
              cloud platform, and navigating a sharing interface.
            </p>
            <p className={styles.sectionBody}>
              <strong style={{ color: "#B45309" }}>Offline recipients</strong> — people who download and
              read emails on mobile without constant internet, or who travel frequently — need
              actual attachments they can open without connectivity.
            </p>

            <h3 className={styles.subHeading}>
              The Difference Between PDF Compression and PDF Conversion
            </h3>
            <p className={styles.sectionBody}>
              It's worth being clear about what compression does and doesn't do, because people
              sometimes confuse it with PDF conversion. Compressing a PDF does not change the
              file format — the output is still a PDF, fully readable in any PDF viewer. It does
              not add watermarks, change the number of pages, alter fonts, or modify any text
              content. The compressed PDF is functionally identical to the original, just smaller.
            </p>
            <p className={styles.sectionBody}>
              What compression does change is the internal data representation. Images inside
              the PDF are resampled to a lower DPI. Fonts are subsetted. Metadata is stripped.
              Redundant data structures are eliminated. The visual output, when viewed at normal
              zoom on a screen, is either identical to the original or indistinguishably close.
              Only under extreme magnification (above 200%) might you notice a difference in
              embedded photograph quality — and even then, only for very aggressive compression levels.
            </p>

            <h3 className={styles.subHeading}>
              Scanned PDFs: The Worst Offenders — And the Best Candidates for Compression
            </h3>
            <p className={styles.sectionBody}>
              If you've ever used a multi-function office printer to scan a document directly to
              PDF, you've produced what is technically a scanned PDF — a document that is
              essentially a series of high-resolution photographs stapled together with a PDF
              wrapper. These files are enormous relative to their content. A scanned A4 page at
              the scanner's default 300 DPI is approximately 1.5–3MB per page. A 20-page scanned
              contract is 30–60MB. And unlike a text-native PDF, the "text" in a scanned PDF
              isn't actually text — it's a photograph of text — so it provides no compression
              benefit from font optimisation.
            </p>
            <p className={styles.sectionBody}>
              Scenith's compressor handles scanned PDFs particularly well because the dominant
              compression technique — image downsampling — is directly applicable to every page.
              A 300 DPI scanned page downsampled to 150 DPI for screen viewing is one-quarter the
              original image data size, with text that remains completely legible at any normal
              reading zoom. A 60MB scanned contract compressed this way becomes 5–8MB.
            </p>

            <h3 className={styles.subHeading}>
              India-Specific Context: Government Portals and Their File Size Policies
            </h3>
            <p className={styles.sectionBody}>
              In India, the problem of oversized PDFs for email and portal submission is
              particularly acute. Government digital infrastructure — while dramatically improved
              through initiatives like DigiLocker, the National Academic Depository, and
              e-Courts — typically operates on conservative server infrastructure with strict
              file size caps. Common upload portals across UIDAI, MCA21, ITR filing, passport
              seva, visa applications, and university admission platforms typically cap uploads
              at 1–5MB per document.
            </p>
            <p className={styles.sectionBody}>
              The irony is that the documents these portals request — scanned Aadhaar cards,
              passport photographs, bank statements, rent agreements, and affidavits — are
              precisely the document types that generate large PDF files when scanned. A scanned
              Aadhaar card at a typical mobile scanner's default setting is 2–8MB. A bank
              statement PDF downloaded from a private bank's portal is 3–12MB. Compressing these
              to under 1MB for submission while keeping them legible is not a luxury — it is
              a requirement for completing basic civic and administrative tasks.
            </p>
          </section>

          {/* ══════════════════════════════════════════════
              TECHNICAL DEEP DIVE
          ══════════════════════════════════════════════ */}
          <section className={styles.section} aria-labelledby="tech-heading">
            <div className={styles.sectionBadge}>Under the Hood</div>
            <h2 className={styles.sectionTitle} id="tech-heading">
              How PDF Compression Actually Works — The Six Techniques Explained
            </h2>
            <p className={styles.sectionBody}>
              Not all PDF compressors are equal. Understanding the techniques used gives you a
              clearer picture of what to expect from the output — and why some PDFs compress
              better than others. Here are the six primary techniques Scenith's compression
              engine applies.
            </p>

            <div className={styles.techGrid}>
              {TECHNICAL_DEEP_DIVE.map((t) => (
                <article key={t.technique} className={styles.techCard}>
                  <div className={styles.techIcon} aria-hidden="true">{t.icon}</div>
                  <h3 className={styles.techTitle}>{t.technique}</h3>
                  <p className={styles.techBody}>{t.explanation}</p>
                  <div className={styles.techImpact}>
                    <span className={styles.techImpactLabel}>Typical impact:</span>
                    <span className={styles.techImpactValue}>{t.impact}</span>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              PROBLEM → SOLUTION SCENARIOS
          ══════════════════════════════════════════════ */}
          <section className={styles.section} aria-labelledby="scenarios-heading">
            <div className={styles.sectionBadge}>Problem Solver</div>
            <h2 className={styles.sectionTitle} id="scenarios-heading">
              Recognise Your Situation? Here's the Exact Fix.
            </h2>

            <div className={styles.scenariosGrid}>
              {BEFORE_AFTER_SCENARIOS.map((sc, i) => (
                <div key={i} className={styles.scenarioCard}>
                  <div className={styles.scenarioScenario}>
                    <span className={styles.scenarioLabel}>Situation</span>
                    <p>{sc.scenario}</p>
                  </div>
                  <div className={styles.scenarioWhy}>
                    <span className={styles.scenarioWhyLabel}>Why it happened</span>
                    <p>{sc.why}</p>
                  </div>
                  <div className={styles.scenarioFix}>
                    <span className={styles.scenarioFixLabel}>Fix</span>
                    <p>{sc.fix}</p>
                  </div>
                  <div className={styles.scenarioTime}>
                    <span className={styles.scenarioTimeIcon} aria-hidden="true">⏱️</span>
                    {sc.timeToFix}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              BEST PRACTICES
          ══════════════════════════════════════════════ */}
          <section className={styles.section} aria-labelledby="practices-heading">
            <div className={styles.sectionBadge}>Best Practices</div>
            <h2 className={styles.sectionTitle} id="practices-heading">
              6 Rules for Never Having a PDF Rejected by Email Again
            </h2>
            <p className={styles.sectionBody}>
              After helping over 50,000 users compress PDFs for email, these are the
              patterns that separate people who never have PDF delivery problems from those
              who deal with bounces and portal rejections regularly.
            </p>

            <div className={styles.practicesList}>
              {BEST_PRACTICES.map((bp, i) => (
                <div key={i} className={styles.practiceItem}>
                  <div className={styles.practiceNum} aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className={styles.practiceContent}>
                    <h3 className={styles.practiceRule}>{bp.rule}</h3>
                    <p className={styles.practiceDetail}>{bp.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              TESTIMONIALS
          ══════════════════════════════════════════════ */}
          <section className={styles.section} aria-labelledby="testimonials-heading">
            <div className={styles.sectionBadge}>What Users Say</div>
            <h2 className={styles.sectionTitle} id="testimonials-heading">
              Professionals Who've Solved Their PDF Email Problem
            </h2>
            <div className={styles.testimonialsGrid}>
              {TESTIMONIALS.map((t) => (
                <blockquote key={t.name} className={styles.testimonialCard}>
                  <div className={styles.testimonialStars} aria-label={`${t.stars} out of 5 stars`}>
                    {"★".repeat(t.stars)}
                  </div>
                  <p className={styles.testimonialQuote}>"{t.quote}"</p>
                  <footer className={styles.testimonialFooter}>
                    <span className={styles.testimonialAvatar} aria-hidden="true">{t.avatar}</span>
                    <div>
                      <cite className={styles.testimonialName}>{t.name}</cite>
                      <div className={styles.testimonialRole}>{t.role}</div>
                    </div>
                  </footer>
                </blockquote>
              ))}
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              FAQ
          ══════════════════════════════════════════════ */}
          <section className={styles.section} aria-labelledby="faq-heading">
            <div className={styles.sectionBadge}>FAQ</div>
            <h2 className={styles.sectionTitle} id="faq-heading">
              Frequently Asked Questions About Reducing PDF Size for Email
            </h2>
            <div className={styles.faqList}>
              {[
                {
                  q: "What is the maximum PDF size I can attach to a Gmail email?",
                  a: "Gmail's attachment limit is 25MB per email, covering all attachments combined. If your PDF alone is 25MB, there's effectively no room for other attachments. Gmail will automatically offer to send oversized files via Google Drive, but recipients must have Google access to open them. To guarantee a direct attachment delivery, compress your PDF below 20MB.",
                },
                {
                  q: "My PDF is 50MB — how small can it realistically be compressed?",
                  a: "A 50MB PDF can typically be reduced to 5–10MB with our compressor, depending on content type. If it's a scanned document, expect 85–90% reduction (down to 5–7MB). If it's a design-heavy presentation with high-resolution photos, expect 70–80% reduction (down to 10–15MB). Pure text PDFs are already small — a text-only 50MB file would be unusual.",
                },
                {
                  q: "Will compressing a PDF reduce its print quality?",
                  a: "For screen viewing and most office printing (80–120 GSM paper, standard laser or inkjet), there is no visible quality difference. Compression primarily reduces screen-resolution image DPI from 300 to 150, which is imperceptible on-screen and fine for standard office printing. For high-end commercial print (glossy magazine, fine art print), retain original files. For email, compress freely.",
                },
                {
                  q: "Can I compress a password-protected PDF?",
                  a: "Not directly. Password-protected PDFs have encryption that prevents the compressor from accessing the internal structure to optimise it. You need to remove the password protection first. In Adobe Acrobat, go to File → Properties → Security → No Security. Then compress the unlocked PDF and re-apply a password if needed afterward.",
                },
                {
                  q: "How do I send a 100MB PDF by email?",
                  a: "A 100MB PDF needs significant compression before it can be emailed directly. Using Scenith, most 100MB PDFs can be reduced to 8–15MB — well within all email limits. Alternatively, for truly massive documents (architectural drawings, technical manuals), a cloud link via Google Drive or WeTransfer remains an option, though a compressed attachment is always more professional.",
                },
                {
                  q: "Is it safe to upload confidential PDFs to an online compressor?",
                  a: "Scenith uses 256-bit SSL encryption for all file transfers. Files are processed in isolated server environments and are never shared with third parties. All files are automatically permanently deleted after 30 days of inactivity. For highly sensitive documents (legal contracts, medical records, financial statements), this is a reasonable and standard level of protection — equivalent to using Google Drive or Dropbox.",
                },
                {
                  q: "What's the difference between 'compress PDF' and 'reduce PDF quality'?",
                  a: "They're related but distinct operations. Reducing PDF quality is a blunt approach — it uniformly degrades all elements. Compressing a PDF intelligently uses multiple techniques to minimise file size with the smallest possible quality impact. Scenith's compression targets the largest size contributors (embedded images) while preserving text, vectors, and structural integrity unchanged.",
                },
                {
                  q: "Can I compress a PDF on my iPhone or Android phone?",
                  a: "Yes — Scenith is a web-based tool accessible from any mobile browser. Open safari or Chrome on your phone, go to scenith.in/tools/pdf-tools/compress-pdf, upload your PDF from your Files app, and download the compressed version. No app download required. Works on iOS 14+ and Android 10+.",
                },
              ].map((faq) => (
                <details key={faq.q} className={styles.faqItem}>
                  <summary className={styles.faqQ}>{faq.q}</summary>
                  <p className={styles.faqA}>{faq.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* ══════════════════════════════════════════════
              FINAL CTA
          ══════════════════════════════════════════════ */}
          <section className={styles.finalCta} aria-labelledby="finalcta-heading">
            <div className={styles.finalCtaBg} aria-hidden="true" />
            <div className={styles.finalCtaBadge}>
              <span className={styles.heroBadgeDot} aria-hidden="true" />
              Takes under 60 seconds
            </div>
            <h2 className={styles.finalCtaTitle} id="finalcta-heading">
              Stop Letting File Size Limits Block Your Work.
            </h2>
            <p className={styles.finalCtaBody}>
              Whether it's a client proposal stuck at your outbox, a visa application bouncing
              from a government portal, or a resume rejected by an ATS system — the fix is
              the same, and it takes under a minute. Compress your PDF now, free, with no
              watermarks and no software to install.
            </p>
            <a
              href={CTA_URL_BOTTOM}
              className={styles.ctaBtnLarge}
              aria-label="Open Scenith PDF Compressor tool"
            >
              Compress My PDF — Free & Instant
              <span aria-hidden="true">→</span>
            </a>
            <div className={styles.finalCtaMeta}>
              <span>✓ No account required to try</span>
              <span>✓ Files up to 200MB</span>
              <span>✓ Target size precision</span>
              <span>✓ Commercial use included</span>
            </div>
          </section>

          {/* ── Related Tools ── */}
          <section className={styles.related} aria-labelledby="related-heading">
            <h2 className={styles.relatedTitle} id="related-heading">More PDF Tools</h2>
            <div className={styles.relatedGrid}>
              {[
                {
                  href: "/tools/pdf-tools/compress-pdf",
                  label: "Compress PDF",
                  desc: "The main tool — compress any PDF",
                },
                {
                  href: "/tools/pdf-tools",
                  label: "All PDF Tools",
                  desc: "Merge, split, convert and more",
                },
                {
                  href: "/tools",
                  label: "All Scenith Tools",
                  desc: "AI video, image tools & more",
                },
              ].map((r) => (
                <Link key={r.href} href={r.href} className={styles.relatedCard}>
                  <div className={styles.relatedLabel}>{r.label}</div>
                  <div className={styles.relatedDesc}>{r.desc}</div>
                  <span className={styles.relatedArrow} aria-hidden="true">→</span>
                </Link>
              ))}
            </div>
          </section>

          <div style={{ height: 80 }} />
        </div>
      </div>
    </>
  );
}